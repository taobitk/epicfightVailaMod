ServerEvents.recipes(event => {
    // ==========================================
    // CÔNG THỨC ĐỘC QUYỀN HỆ LÃNH CHỦ (LORD & HIGH LORD)
    // (Summoner Lord KHÔNG được chế tạo)
    // ==========================================

    // --- Tier 1: Lord (Chế được CẢ Coin lẫn Magic Orb) ---
    event.shaped('kubejs:ring_coin', [
        ' I ',
        'IGI',
        ' I '
    ], {
        I: 'minecraft:iron_ingot',
        G: 'minecraft:gold_ingot'
    }).id('kubejs:craft_ring_coin_lord').stage('stage_lord')

    event.shaped('kubejs:magic_orb', [
        ' I ',
        'IGI',
        ' I '
    ], {
        I: 'minecraft:iron_ingot',
        G: 'minecraft:gold_ingot'
    }).id('kubejs:craft_magic_orb_lord').stage('stage_lord')

    // --- Tier 2: High Lord (Chế được CẢ Coin lẫn Magic Orb) ---
    event.shaped('kubejs:ring_coin', [
        ' I ',
        'IGI',
        ' I '
    ], {
        I: 'minecraft:iron_ingot',
        G: 'minecraft:gold_ingot'
    }).id('kubejs:craft_ring_coin_high_lord').stage('stage_tier2_high_lord')

    event.shaped('kubejs:magic_orb', [
        ' I ',
        'IGI',
        ' I '
    ], {
        I: 'minecraft:iron_ingot',
        G: 'minecraft:gold_ingot'
    }).id('kubejs:craft_magic_orb_high_lord').stage('stage_tier2_high_lord')

    // ==========================================
    // ĐỒNG BỘ RECIPESTAGES ĐỂ ẨN/HIỆN TRÊN JEI/REI
    // ==========================================
    try {
        if (event.recipes && event.recipes.recipestages) {
            event.recipes.recipestages.setRecipeStage('stage_lord', 'kubejs:craft_ring_coin_lord')
            event.recipes.recipestages.setRecipeStage('stage_lord', 'kubejs:craft_magic_orb_lord')

            event.recipes.recipestages.setRecipeStage('stage_tier2_high_lord', 'kubejs:craft_ring_coin_high_lord')
            event.recipes.recipestages.setRecipeStage('stage_tier2_high_lord', 'kubejs:craft_magic_orb_high_lord')
        }
    } catch (e) {
        console.log('[KubeJS] RecipeStages stage locking handled smoothly: ' + e);
    }
})
