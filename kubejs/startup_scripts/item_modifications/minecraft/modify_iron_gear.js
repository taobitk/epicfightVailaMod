// Tên file: kubejs/startup_scripts/item_modifications/minecraft/modify_iron_gear.js
// Mục đích: Chỉnh sửa độ bền cho toàn bộ Giáp Sắt và Công Cụ Sắt thành 5000.

ItemEvents.modification(event => {
    // 1. Toàn bộ Giáp Sắt (Mũ, Áo, Quần, Giày) -> Độ bền: 5000
    const ironArmor = [
        'minecraft:iron_helmet',
        'minecraft:iron_chestplate',
        'minecraft:iron_leggings',
        'minecraft:iron_boots'
    ];
    ironArmor.forEach(armor => {
        event.modify(armor, item => {
            item.setMaxDamage(5000);
        });
    });

    // 2. Toàn bộ Công Cụ & Vũ Khí Sắt (Kiếm, Cúp, Rìu, Xẻng, Cuốc) -> Độ bền: 5000
    const ironTools = [
        'minecraft:iron_sword',
        'minecraft:iron_shovel',
        'minecraft:iron_pickaxe',
        'minecraft:iron_axe',
        'minecraft:iron_hoe'
    ];
    ironTools.forEach(tool => {
        event.modify(tool, item => {
            item.setMaxDamage(5000);
        });
    });
});
