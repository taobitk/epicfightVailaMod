// Tên file: kubejs/server_scripts/recipes/additions/petting/add_golden_wheat.js
// Mục đích: Thêm công thức chế tạo mới dạng bàn chế tạo (shaped) cho Golden Wheat (1 Lúa mì ở giữa + 8 Phôi BRN xung quanh).

ServerEvents.recipes(event => {
    event.shaped('petting:golden_wheat', [
        'BBB',
        'BWB',
        'BBB'
    ], {
        W: 'minecraft:wheat',
        B: 'kubejs:brn'
    }).id('kubejs:crafting/golden_wheat_custom');
});
