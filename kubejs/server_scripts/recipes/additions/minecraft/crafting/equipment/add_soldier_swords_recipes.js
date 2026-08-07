// Server script - Crafting recipes for 5 Soldier Swords (Exclusive to Tier 2 High Lord)

ServerEvents.recipes(event => {
    // ==========================================
    // CÔNG THỨC CHẾ TẠO KIẾM LÍNH (TIER 2 HIGH LORD)
    // ==========================================

    // 1. Kiếm Hắc Diện Binh Lính: 2 Hắc Diện Thạch + 1 Que => 1 Thanh (8 ATK)
    event.shaped(
        '1x kubejs:netherite_sword_base',
        [
            ' O ',
            ' O ',
            ' S '
        ], {
            O: 'minecraft:obsidian',
            S: 'minecraft:stick'
        }
    ).id('kubejs:craft_soldier_sword_obsidian').stage('stage_tier2_high_lord')

    // 2. Kiếm Kim Cương Vàng Binh Lính: 2 Thỏi Vàng + 1 Que => 1 Thanh (10 ATK)
    event.shaped(
        '1x kubejs:netherite_sword_1',
        [
            ' G ',
            ' G ',
            ' S '
        ], {
            G: 'minecraft:gold_ingot',
            S: 'minecraft:stick'
        }
    ).id('kubejs:craft_soldier_sword_gold').stage('stage_tier2_high_lord')

    // 3. Kiếm Hợp Kim BRN Binh Lính: 2 Kim Cương + 1 Que => 1 Thanh (12 ATK)
    event.shaped(
        '1x kubejs:netherite_sword_diamond_tool_trim',
        [
            ' D ',
            ' D ',
            ' S '
        ], {
            D: 'minecraft:diamond',
            S: 'minecraft:stick'
        }
    ).id('kubejs:craft_soldier_sword_diamond').stage('stage_tier2_high_lord')

    // 4. Kiếm Tinh Tú Binh Lính: 2 Kim Cương + 2 Vàng + 2 Sắt + 1 Que => 1 Thanh (15 ATK)
    event.shaped(
        '1x kubejs:netherite_sword_blue_fw_stars',
        [
            'DGD',
            'I I',
            ' S '
        ], {
            D: 'minecraft:diamond',
            G: 'minecraft:gold_ingot',
            I: 'minecraft:iron_ingot',
            S: 'minecraft:stick'
        }
    ).id('kubejs:craft_soldier_sword_star').stage('stage_tier2_high_lord')

    // 5. Trảm Ma Kiếm Scarlxrd: 2 Thỏi Netherite + 1 Que => 1 Thanh (22 ATK)
    event.shaped(
        '1x kubejs:scarlxrds_sword',
        [
            ' N ',
            ' N ',
            ' S '
        ], {
            N: 'minecraft:netherite_ingot',
            S: 'minecraft:stick'
        }
    ).id('kubejs:craft_soldier_sword_scarlxrd').stage('stage_tier2_high_lord')

    // ==========================================
    // ĐỒNG BỘ RECIPESTAGES ĐỂ ẨN TRÊN JEI/REI
    // ==========================================
    try {
        if (event.recipes && event.recipes.recipestages) {
            event.recipes.recipestages.setRecipeStage('stage_tier2_high_lord', 'kubejs:craft_soldier_sword_obsidian')
            event.recipes.recipestages.setRecipeStage('stage_tier2_high_lord', 'kubejs:craft_soldier_sword_gold')
            event.recipes.recipestages.setRecipeStage('stage_tier2_high_lord', 'kubejs:craft_soldier_sword_diamond')
            event.recipes.recipestages.setRecipeStage('stage_tier2_high_lord', 'kubejs:craft_soldier_sword_star')
            event.recipes.recipestages.setRecipeStage('stage_tier2_high_lord', 'kubejs:craft_soldier_sword_scarlxrd')
        }
    } catch (e) {
        console.log('[KubeJS] RecipeStages stage locking handled smoothly: ' + e);
    }
})