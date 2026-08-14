// Server script - Prevent players from equipping, right-clicking, eating, attacking or placing Soldier/Custom items / NBT {cannot_equip:true} / {cannot_use:true}

const forbiddenItems = [
    'kubejs:netherite_sword_blue_fw_stars',
    'kubejs:netherite_sword_diamond_tool_trim',
    'kubejs:netherite_sword_1',
    'kubejs:netherite_sword_base',
    'kubejs:scarlxrds_sword',
    'kubejs:cheeseburger',
    'kubejs:orange',
    'kubejs:cinnamon_roll',
    'kubejs:soldier_iron_helmet',
    'kubejs:soldier_iron_chestplate',
    'kubejs:soldier_iron_leggings',
    'kubejs:soldier_iron_boots',
    'kubejs:soldier_golden_helmet',
    'kubejs:soldier_golden_chestplate',
    'kubejs:soldier_golden_leggings',
    'kubejs:soldier_golden_boots',
    'kubejs:soldier_diamond_helmet',
    'kubejs:soldier_diamond_chestplate',
    'kubejs:soldier_diamond_leggings',
    'kubejs:soldier_diamond_boots'
]

function isForbiddenItem(item) {
    if (!item || item.empty) return false;
    if (forbiddenItems.includes(item.id)) return true;
    if (item.nbt) {
        if (item.nbt.cannot_equip == true || item.nbt.cannot_use == true) return true;
        if (item.nbt.contains && (item.nbt.contains('cannot_equip') || item.nbt.contains('cannot_use'))) return true;
    }
    return false;
}

// 1. Tự động tháo giáp & kiểm tra vị trí giáp/khe đồ (Tối ưu hóa: Quét 2 lần/giây, 0% CPU Lag)
PlayerEvents.tick(event => {
    const player = event.player
    if (!player || player.age % 10 !== 0) return

    const slots = ['head', 'chest', 'legs', 'feet']
    slots.forEach(slot => {
        let item = player.getEquipment(slot)
        if (isForbiddenItem(item)) {
            player.give(item.copy())
            player.setEquipment(slot, 'minecraft:air')
            player.inventory.setChanged()
            player.containerMenu.broadcastChanges()
            player.setStatusMessage('§cTrang bị này không thể mặc lên người!')
        }
    })

    // Ô phụ (Off-hand)
    let offhand = player.getOffHandItem()
    if (isForbiddenItem(offhand)) {
        player.give(offhand.copy())
        player.setOffHandItem('minecraft:air')
        player.inventory.setChanged()
        player.containerMenu.broadcastChanges()
        player.setStatusMessage('§cVật phẩm Binh Lính không thể cầm ở tay phụ!')
    }

    // Kiểm tra Container (Stonecutter / ToolLeveling)
    if (player.containerMenu) {
        try {
            let menuName = String(player.containerMenu.class.name)
            if (menuName.includes('StonecutterMenu')) {
                let inputSlot = player.containerMenu.getSlot(0)
                if (inputSlot && inputSlot.hasItem() && isForbiddenItem(inputSlot.item)) {
                    player.give(inputSlot.item.copy())
                    inputSlot.set('minecraft:air')
                    player.containerMenu.broadcastChanges()
                    player.setStatusMessage('§cVật phẩm Binh Lính không thể rã trong Máy Cắt Đá!')
                }
            } else if (menuName.includes('ToolLevelingTable') || menuName.includes('ToolLeveling')) {
                let maxSlots = Math.min(10, player.containerMenu.slots.length)
                for (let i = 0; i < maxSlots; i++) {
                    let slot = player.containerMenu.getSlot(i)
                    if (slot && slot.hasItem() && isForbiddenItem(slot.item)) {
                        player.give(slot.item.copy())
                        slot.set('minecraft:air')
                        player.containerMenu.broadcastChanges()
                        player.setStatusMessage('§cVật phẩm Binh Lính không thể đưa vào Bàn Nâng Cấp Tool Leveling!')
                    }
                }
            }
        } catch (e) {}
    }
})

// 2. Chặn Chuột Phải (Right Click Item)
ItemEvents.rightClicked(event => {
    if (isForbiddenItem(event.item)) {
        event.cancel()
        event.player.setStatusMessage('§cVật phẩm này không dành cho người chơi!')
    }
})

// 3. Chặn ăn đồ ăn (Food Eaten)
ItemEvents.foodEaten(event => {
    if (isForbiddenItem(event.item)) {
        event.cancel()
        event.player.setStatusMessage('§cThức ăn này không dành cho người chơi!')
    }
})

// 4. Chặn Chuột Phải vào Khối (Right Click Block)
BlockEvents.rightClicked(event => {
    if (isForbiddenItem(event.item)) {
        event.cancel()
        event.player.setStatusMessage('§cVật phẩm này không dành cho người chơi!')
    }
})

// 5. Chặn Đập Khối (Left Click Block)
BlockEvents.broken(event => {
    if (isForbiddenItem(event.player.mainHandItem)) {
        event.cancel()
        event.player.setStatusMessage('§cVật phẩm này không thể dùng để đập khối!')
    }
})

// 6. Chặn Tấn Công / Chém Entity (Left Click Attack)
EntityEvents.hurt(event => {
    let attacker = event.source.actual
    if (attacker && attacker.isPlayer()) {
        let mainItem = attacker.getMainHandItem()
        if (isForbiddenItem(mainItem)) {
            event.cancel()
            attacker.setStatusMessage('§cVật phẩm này không thể dùng để tấn công!')
        }
    }
})
