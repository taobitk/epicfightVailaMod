// Tên file: kubejs/server_scripts/recipes/additions/wom/cursed_masks.js
// Thêm công thức bàn rèn (Smithing Table) cho Cursed Mask và Unholy Cursed Mask từ mũ Kim Cương/Netherite nâng cấp lên.

ServerEvents.recipes(event => {
    // 1. Cursed Mask nâng cấp từ Mũ Kim Cương
    event.smithing(
        'wom:cursed_mask',
        'kubejs:nidg_ingot',
        'minecraft:diamond_helmet',
        'minecraft:netherite_ingot'
    );

    // 2. Unholy Cursed Mask nâng cấp từ Mũ Netherite
    event.smithing(
        'wom:unholy_cursed_mask',
        'kubejs:nidg_ingot',
        'minecraft:netherite_helmet',
        'minecraft:netherite_ingot'
    );
});
