// Tên file: kubejs/server_scripts/mechanics/mech_ancient_debris.js
// Mục đích: Xử lý cơ chế Ancient Debris và Khối Netherite.

console.info('[MechBS] Loading mech_ancient_debris.js...');

LootJS.modifiers(event => {
    event.addBlockLootModifier('minecraft:ancient_debris')
        .apply(ctx => {
            // Lấy player từ context
            let player = ctx.player;

            // Nếu không có player (ví dụ máy đào, tnt), xóa loot luôn cho an toàn
            if (!player) {
                ctx.removeLoot('*');
                return;
            }

            // Kiểm tra Pyro Seal trong túi đồ người chơi (hoặc cầm trên tay)
            let seal = 'kubejs:pyro_seal';
            let hasSeal = player.inventory.contains(seal) ||
                player.mainHandItem.id === seal ||
                player.offHandItem.id === seal;

            if (hasSeal) {
                // Có Seal -> GIỮ LOOT (100% rơi đồ)
                console.info('[LootCheck] Player has Pyro Seal. Allowing 100% loot.');
            } else {
                // Không Seal -> Chỉ có 5% tỉ lệ rơi đồ
                if (Math.random() < 0.05) {
                    console.info('[LootCheck] No Seal but lucky 5%! Allowing loot.');
                } else {
                    console.info('[LootCheck] No Seal. Removing loot (95% chance).');
                    ctx.removeLoot('*');
                }
            }
        });
});

BlockEvents.leftClicked(event => {
    // Logic cho Netherite Block: Bắt buộc có Seal mới được đào, nếu không dính hiệu ứng mệt mỏi
    if (event.block.id === 'minecraft:netherite_block') {
        const player = event.player;
        if (!player || player.isCreative()) return;

        const seal = 'kubejs:pyro_seal';
        const hasSeal = player.inventory.contains(seal) ||
            player.mainHandItem.id === seal ||
            player.offHandItem.id === seal;

        if (!hasSeal) {
            // Mining Fatigue IV (Amplifier 3) trong 5 giây (100 ticks)
            player.potionEffects.add('minecraft:mining_fatigue', 100, 3, false, false);
            player.statusMessage = Text.of('Bạn cần có Ấn Ký Hỏa Ngục trong túi đồ để khai thác Khối Netherite!').red();
        }
    }
});

BlockEvents.broken(event => {
    const player = event.player;
    if (!player) return;
    const seal = 'kubejs:pyro_seal';
    const hasSeal = player.inventory.contains(seal) ||
        player.mainHandItem.id === seal ||
        player.offHandItem.id === seal;

    // Logic cho Ancient Debris
    if (event.block.id === 'minecraft:ancient_debris') {
        if (!hasSeal) {
            if (!player.isCreative()) {
                player.tell(Text.of('Không có Ấn Ký Hỏa Ngục, vật chất cổ đại bị tiêu tan, tỉ lệ khai thác thành công chỉ là 5%!').darkPurple().italic());
                player.tell(Text.of('§7(Mẹo: Có Ấn Ký Hỏa Ngục trong túi đồ để đảm bảo tỉ lệ rơi 100%)'));
            }
        } else {
            player.tell(Text.of('Sự cộng hưởng của Ấn Ký Hỏa Ngục đã ổn định vật chất cổ đại (Tỉ lệ rơi 100%)!').gold());
        }
    }

    // Logic cho Netherite Block (Cấm đào + Hủy sự kiện để tránh mất khối đắt giá)
    if (event.block.id === 'minecraft:netherite_block') {
        if (!hasSeal) {
            if (!player.isCreative()) {
                event.cancel(); // Chặn vỡ block
                player.tell(Text.of('Khối Netherite này quá cứng rắn đối với người thường...').darkRed().italic());
                player.potionEffects.add('minecraft:mining_fatigue', 100, 3, false, false);
            }
        } else {
            player.tell(Text.of('Sự cộng hưởng của Ấn Ký Hỏa Ngục giúp bạn khai thác Khối Netherite!').gold());
        }
    }
});
