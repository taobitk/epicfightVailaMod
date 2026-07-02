// Tên file: kubejs/server_scripts/recipes/additions/minecraft/crafting/equipment/add_gold_armor.js
// Mục đích: Xóa công thức chế tạo gốc của Giáp Vàng và thay thế bằng công thức tùy chỉnh (Khối vàng + Kim cương).

ServerEvents.recipes(event => {

    const G = 'minecraft:gold_block';
    const D = 'minecraft:diamond';

    // 2. Đăng ký công thức chế tạo tùy chỉnh
    
    // Giày vàng: 2 khối vàng + 2 kim cương
    event.shaped('minecraft:golden_boots', [
        'G G',
        'D D'
    ], {
        G: G,
        D: D
    }).id('kubejs:crafting/golden_boots_custom');

    // Mũ vàng: 2 khối vàng + 3 kim cương
    event.shaped('minecraft:golden_helmet', [
        'DDD',
        'G G'
    ], {
        G: G,
        D: D
    }).id('kubejs:crafting/golden_helmet_custom');

    // Áo vàng: 4 khối vàng + 4 kim cương
    event.shaped('minecraft:golden_chestplate', [
        'G G',
        'DDD',
        'GDG'
    ], {
        G: G,
        D: D
    }).id('kubejs:crafting/golden_chestplate_custom');

    // Quần vàng: 3 khối vàng + 4 kim cương (Symmetrical)
    event.shaped('minecraft:golden_leggings', [
        'DGD',
        'D D',
        'G G'
    ], {
        G: G,
        D: D
    }).id('kubejs:crafting/golden_leggings_custom');
});
