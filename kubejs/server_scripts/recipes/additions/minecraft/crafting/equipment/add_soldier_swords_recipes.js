// Server script - Crafting recipes for 5 Soldier Swords (Exclusive to Tier 2 High Lord)

ServerEvents.recipes(event => {
    // 1. Xóa các công thức cũ của Kiếm Binh Lính
    event.remove({ output: 'kubejs:netherite_sword_base' })
    event.remove({ output: 'kubejs:netherite_sword_1' })
    event.remove({ output: 'kubejs:netherite_sword_diamond_tool_trim' })
    event.remove({ output: 'kubejs:netherite_sword_blue_fw_stars' })
    event.remove({ output: 'kubejs:scarlxrds_sword' })

    // ==========================================
    // CÔNG THỨC CHẾ TẠO KIẾM LÍNH (TIER 2 HIGH LORD)
    // ==========================================

    // 1. Kiếm Hắc Diện Binh Lính: 2 Hắc Diện Thạch + 1 Que
    event.shaped('kubejs:netherite_sword_base', [
        ' O ',
        ' O ',
        ' S '
    ], {
        O: 'minecraft:obsidian',
        S: 'minecraft:stick'
    }).stage('stage_tier2_high_lord')

    // 2. Kiếm Kim Cương Vàng Binh Lính: 2 Thỏi Vàng + 1 Que
    event.shaped('kubejs:netherite_sword_1', [
        ' G ',
        ' G ',
        ' S '
    ], {
        G: 'minecraft:gold_ingot',
        S: 'minecraft:stick'
    }).stage('stage_tier2_high_lord')

    // 3. Kiếm Hợp Kim BRN Binh Lính: 2 Kim Cương + 1 Que
    event.shaped('kubejs:netherite_sword_diamond_tool_trim', [
        ' D ',
        ' D ',
        ' S '
    ], {
        D: 'minecraft:diamond',
        S: 'minecraft:stick'
    }).stage('stage_tier2_high_lord')

    // 4. Kiếm Tinh Tú Binh Lính: 2 Kim Cương + 2 Vàng + 2 Sắt + 1 Que
    event.shaped('kubejs:netherite_sword_blue_fw_stars', [
        'DGD',
        'I I',
        ' S '
    ], {
        D: 'minecraft:diamond',
        G: 'minecraft:gold_ingot',
        I: 'minecraft:iron_ingot',
        S: 'minecraft:stick'
    }).stage('stage_tier2_high_lord')

    // 5. Trảm Ma Kiếm Scarlxrd: 2 Thỏi Netherite + 1 Que
    event.shaped('kubejs:scarlxrds_sword', [
        ' N ',
        ' N ',
        ' S '
    ], {
        N: 'minecraft:netherite_ingot',
        S: 'minecraft:stick'
    }).stage('stage_tier2_high_lord')
})