// Server script - Crafting recipe for Diamond Lasso (moblassos:diamond_lasso)

ServerEvents.recipes(event => {
    // 1. Xóa công thức cũ của Diamond Lasso (nếu có)
    event.remove({ output: 'moblassos:diamond_lasso' });

    // 2. Công thức Diamond Lasso: 4 Phôi Vàng (Gold Ingot) + 1 Golden Lasso ở giữa
    event.shaped(
        'moblassos:diamond_lasso',
        [
            ' G ',
            'GLG',
            ' G '
        ], {
            G: 'minecraft:gold_ingot',      // 4 Phôi Vàng
            L: 'moblassos:golden_lasso'     // 1 Golden Lasso ở giữa
        }
    ).id('kubejs:craft_diamond_lasso');
});
