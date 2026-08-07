ServerEvents.recipes(event => {
    // ==========================================
    // CÔNG THỨC CHẾ TẠO VŨ KHÍ CDMOVESET
    // ==========================================

    // 1. Crimson Fang (cdmoveset:great_tachi)
    // Nguyên liệu: Diamond Tachi + Đầu lâu Wither + NIDG Ingot + Thỏi Netherite + Táo Vàng thường
    event.shaped('cdmoveset:great_tachi', [
        ' W ',
        'NSI',
        ' A '
    ], {
        S: 'epicfight:diamond_tachi',          // Cốt kiếm: Diamond Tachi
        W: 'minecraft:wither_skeleton_skull',  // Đỉnh: Đầu Lâu Wither Skeleton
        N: 'kubejs:nidg_ingot',                // Trái: NIDG Ingot
        I: 'minecraft:netherite_ingot',        // Phải: Thỏi Netherite
        A: 'minecraft:golden_apple'            // Đế: Táo Vàng thường
    })

    // 2. Phantom Katana (cdmoveset:phantom_katana)
    // Nguyên liệu: Uchigatana + Đầu lâu Wither + NIDG Ingot + Thỏi Netherite + Táo Vàng thường
    event.shaped('cdmoveset:phantom_katana', [
        ' W ',
        'NSI',
        ' A '
    ], {
        S: 'epicfight:uchigatana',             // Cốt kiếm: Uchigatana (Epic Fight)
        W: 'minecraft:wither_skeleton_skull',  // Đỉnh: Đầu Lâu Wither Skeleton
        N: 'kubejs:nidg_ingot',                // Trái: NIDG Ingot
        I: 'minecraft:netherite_ingot',        // Phải: Thỏi Netherite
        A: 'minecraft:golden_apple'            // Đế: Táo Vàng thường
    })
})
