// Tên file: kubejs/server_scripts/loot_tables/loot_modify_mobs.js
// Mục đích: Tùy chỉnh rơi đồ của Zombie Piglin (chỉ rơi thịt thối) và Iron Golem (chỉ rơi 1-2 sắt).

LootJS.modifiers(event => {
    // 1. ZOMBIE PIGLIN: Xóa hạt vàng, phôi vàng và kiếm vàng (chỉ để lại thịt thối mặc định)
    event.addEntityLootModifier('minecraft:zombified_piglin')
        .removeLoot([
            'minecraft:gold_nugget',
            'minecraft:gold_ingot',
            'minecraft:golden_sword'
        ]);

    // 2. IRON GOLEM: Xóa sắt mặc định và hoa hồng, giới hạn lại chỉ rơi ra 1-2 Sắt
    event.addEntityLootModifier('minecraft:iron_golem')
        .removeLoot([
            'minecraft:iron_ingot',
            'minecraft:poppy'
        ])
        .addLoot(
            LootEntry.of('minecraft:iron_ingot').limitCount(1, 2)
        );

    // 3. ZOMBIE: Thêm 10% tỉ lệ rơi ra 1 Phôi đồng (minecraft:copper_ingot)
    event.addEntityLootModifier('minecraft:zombie')
        .randomChance(0.10)
        .addLoot('minecraft:copper_ingot');
});
