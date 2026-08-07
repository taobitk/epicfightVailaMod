// Tên file: kubejs/server_scripts/recipes/additions/efn/crimson_moon_recipe.js
// Mục đích: Nâng cấp Netherite Hoe thành Crimson Moon (efn:crimson_moon) bằng Smithing Table.
// Công thức: Smithing Template (Enchanted Golden Apple) + Base (Netherite Hoe) + Addition (NIDG Ingot).

ServerEvents.recipes(event => {
    event.smithing(
        'efn:crimson_moon',                 // Output: Crimson Moon
        'minecraft:enchanted_golden_apple', // Template: Táo Vàng Phù Phép
        'minecraft:netherite_hoe',          // Base: Cuốc Netherite
        'kubejs:nidg_ingot'                 // Addition: Thỏi NIDG
    ).id('kubejs:smithing/crimson_moon').stage('stage_tier2_destruction');
});
