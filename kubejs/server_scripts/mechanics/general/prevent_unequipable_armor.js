// Server script - Prevent players from equipping, right-clicking, eating, attacking or placing Soldier/Custom items / NBT {cannot_equip:true} / {cannot_use:true}

const forbiddenItems = [
    'kubejs:netherite_sword_blue_fw_stars',
    'kubejs:netherite_sword_diamond_tool_trim',
    'kubejs:netherite_sword_1',
    'kubejs:netherite_sword_base',
    'kubejs:scarlxrds_sword',
    'kubejs:cheeseburger',
    'kubejs:orange',
    'kubejs:cinnamon_roll'
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

// 1. Tự động tháo giáp & kiểm tra vị trí giáp/khe đồ
PlayerEvents.tick(event => {
    const player = event.player

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

    // Kiểm tra Stonecutter
    if (player.containerMenu && player.containerMenu.class.name.endsWith('StonecutterMenu')) {
        let inputSlot = player.containerMenu.getSlot(0)
        if (inputSlot && inputSlot.hasItem() && isForbiddenItem(inputSlot.item)) {
            player.give(inputSlot.item.copy())
            inputSlot.set('minecraft:air')
            player.containerMenu.broadcastChanges()
            player.setStatusMessage('§cVật phẩm Binh Lính không thể rã trong Máy Cắt Đá!')
        }
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
