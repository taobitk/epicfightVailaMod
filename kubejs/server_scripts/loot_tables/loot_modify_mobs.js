// Tên file: kubejs/server_scripts/loot_tables/loot_modify_mobs.js
// Mục đích: Tùy chỉnh rơi Phôi Đồng, tăng tỉ lệ rơi Đầu Wither (30%), 
//            và đặt tỉ lệ rơi 100% (1-3 cái) cho Xương (Skeleton), Thịt Zombie (Zombie) và Thuốc Súng (Creeper).

LootJS.modifiers(event => {
    // 1. ZOMBIE PIGLIN: Xóa hạt vàng, phôi vàng và kiếm vàng
    event.addEntityLootModifier('minecraft:zombified_piglin')
        .removeLoot([
            'minecraft:gold_nugget',
            'minecraft:gold_ingot',
            'minecraft:golden_sword'
        ]);

    // 2. IRON GOLEM: Giới hạn chỉ rơi 1-2 Sắt
    event.addEntityLootModifier('minecraft:iron_golem')
        .removeLoot([
            'minecraft:iron_ingot',
            'minecraft:poppy'
        ])
        .addLoot(
            LootEntry.of('minecraft:iron_ingot').limitCount(1, 2)
        );

    // 3. WITHER SKELETON (Xương đen): Tăng tỉ lệ rơi Đầu lâu Wither Skeleton lên 30%
    event.addEntityLootModifier('minecraft:wither_skeleton')
        .removeLoot(['minecraft:wither_skeleton_skull'])
        .randomChance(0.30)
        .addLoot('minecraft:wither_skeleton_skull');

    // 4. ZOMBIES (Zombie, Husk, Drowned, Zombie Villager) -> 100% rơi 1-3 Thịt Zombie (Rotten Flesh)
    const zombieTypes = [
        'minecraft:zombie',
        'minecraft:husk',
        'minecraft:drowned',
        'minecraft:zombie_villager'
    ];
    zombieTypes.forEach(mob => {
        event.addEntityLootModifier(mob)
            .removeLoot('minecraft:rotten_flesh')
            .addWeightedLoot([
                Item.of('minecraft:rotten_flesh', 3),
                Item.of('minecraft:rotten_flesh', 2),
                Item.of('minecraft:rotten_flesh', 1)
            ]);
    });

    // 5. SKELETONS (Skeleton, Stray, Wither Skeleton) -> 100% rơi 1-3 Xương (Bone)
    const skeletonTypes = [
        'minecraft:skeleton',
        'minecraft:stray',
        'minecraft:wither_skeleton'
    ];
    skeletonTypes.forEach(mob => {
        event.addEntityLootModifier(mob)
            .removeLoot('minecraft:bone')
            .addWeightedLoot([
                Item.of('minecraft:bone', 3),
                Item.of('minecraft:bone', 2),
                Item.of('minecraft:bone', 1)
            ]);
    });

    // 6. CREEPER -> 100% rơi 1-3 Thuốc Súng (Gunpowder)
    event.addEntityLootModifier('minecraft:creeper')
        .removeLoot('minecraft:gunpowder')
        .addWeightedLoot([
            Item.of('minecraft:gunpowder', 3),
            Item.of('minecraft:gunpowder', 2),
            Item.of('minecraft:gunpowder', 1)
        ]);

    // 7. TOÀN BỘ BỌN XÁC SỐNG & XƯƠNG (Thả phôi đồng):
    const undeadTypes = [
        'minecraft:zombie',
        'minecraft:husk',
        'minecraft:drowned',
        'minecraft:zombie_villager',
        'minecraft:zombified_piglin',
        'minecraft:skeleton',
        'minecraft:wither_skeleton',
        'minecraft:stray'
    ];

    undeadTypes.forEach(mob => {
        event.addEntityLootModifier(mob)
            .removeLoot([
                'minecraft:iron_ingot',
                'minecraft:carrot',
                'minecraft:potato',
                'minecraft:copper_ingot'
            ]);

        event.addEntityLootModifier(mob)
            .addWeightedLoot([
                Item.of('minecraft:copper_ingot', 1).withChance(50), // 50% Rơi 1 phôi đồng
                Item.of('minecraft:copper_ingot', 2).withChance(30), // 30% Rơi 2 phôi đồng
                Item.of('minecraft:copper_ingot', 3).withChance(20)  // 20% Rơi 3 phôi đồng
            ]);
    });
});
