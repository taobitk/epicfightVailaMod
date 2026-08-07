// Server script - Crafting recipe for Golden Lasso (moblassos:golden_lasso)

ServerEvents.recipes(event => {
    // Công thức Golden Lasso: 1 Chỉ (String) + 8 Hạt Vàng (Gold Nugget)
    // Sắp xếp dạng vòng bao xung quanh chỉ ở giữa (3x3 grid)
    event.shaped(
        'moblassos:golden_lasso',
        [
            'GGG',
            'GSG',
            'GGG'
        ], {
            G: 'minecraft:gold_nugget',
            S: 'minecraft:string'
        }
    ).id('kubejs:craft_golden_lasso')
})
