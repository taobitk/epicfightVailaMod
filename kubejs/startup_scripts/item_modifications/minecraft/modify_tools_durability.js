// Tên file: kubejs/startup_scripts/item_modifications/minecraft/modify_tools_durability.js
// Mục đích: Chỉnh sửa độ bền gốc cho các bộ công cụ (Kiếm, Cúp, Rìu, Xẻng, Cuốc) của Minecraft.

ItemEvents.modification(event => {
    // 1. Bộ công cụ GỖ (Độ bền: 300)
    const woodenTools = [
        'minecraft:wooden_sword', 'minecraft:wooden_shovel', 'minecraft:wooden_pickaxe',
        'minecraft:wooden_axe', 'minecraft:wooden_hoe'
    ];
    woodenTools.forEach(tool => {
        event.modify(tool, item => {
            item.setMaxDamage(300);
        });
    });

    // 2. Bộ công cụ ĐÁ (Độ bền: 5000)
    const stoneTools = [
        'minecraft:stone_sword', 'minecraft:stone_shovel', 'minecraft:stone_pickaxe',
        'minecraft:stone_axe', 'minecraft:stone_hoe'
    ];
    stoneTools.forEach(tool => {
        event.modify(tool, item => {
            item.setMaxDamage(5000);
        });
    });

    // 3. Bộ công cụ SẮT (Độ bền: 800)
    const ironTools = [
        'minecraft:iron_sword', 'minecraft:iron_shovel', 'minecraft:iron_pickaxe',
        'minecraft:iron_axe', 'minecraft:iron_hoe'
    ];
    ironTools.forEach(tool => {
        event.modify(tool, item => {
            item.setMaxDamage(800);
        });
    });

    // 4. Bộ công cụ VÀNG (Độ bền: 9000)
    const goldenTools = [
        'minecraft:golden_sword', 'minecraft:golden_shovel', 'minecraft:golden_pickaxe',
        'minecraft:golden_axe', 'minecraft:golden_hoe'
    ];
    goldenTools.forEach(tool => {
        event.modify(tool, item => {
            item.setMaxDamage(9000);
        });
    });

    // 5. Bộ công cụ KIM CƯƠNG (Độ bền: 3000)
    const diamondTools = [
        'minecraft:diamond_sword', 'minecraft:diamond_shovel', 'minecraft:diamond_pickaxe',
        'minecraft:diamond_axe', 'minecraft:diamond_hoe'
    ];
    diamondTools.forEach(tool => {
        event.modify(tool, item => {
            item.setMaxDamage(3000);
        });
    });

    // 6. Bộ công cụ NETHERITE (Độ bền: 9999)
    const netheriteTools = [
        'minecraft:netherite_sword', 'minecraft:netherite_shovel', 'minecraft:netherite_pickaxe',
        'minecraft:netherite_axe', 'minecraft:netherite_hoe'
    ];
    netheriteTools.forEach(tool => {
        event.modify(tool, item => {
            item.setMaxDamage(9999);
        });
    });
});
