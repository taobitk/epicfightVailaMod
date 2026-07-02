ServerEvents.recipes(event => {
    // Công thức Agony (wom:agony)
    // Nguyên liệu: 1 Netherite Spear, 4 NIDG Ingot, 1 Netherite Block, 2 Gold Block, 1 Enchanted Golden Apple

    event.shaped('wom:agony', [
        'NAN',
        'GSG',
        'NBN'
    ], {
        S: 'epicfight:netherite_spear',        // Cốt thương
        N: 'kubejs:nidg_ingot',                // 4 NIDG Ingot (Góc)
        A: 'minecraft:enchanted_golden_apple', // Táo Vàng Enchant (Đỉnh)
        G: 'minecraft:gold_block',             // 2 Khối Vàng (Cánh)
        B: 'minecraft:netherite_block'         // Khối Netherite (Đế)
    })
})
