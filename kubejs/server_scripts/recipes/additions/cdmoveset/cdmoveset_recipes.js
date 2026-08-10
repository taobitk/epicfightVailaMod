ServerEvents.recipes(event => {
    // ==========================================
    // CÔNG THỨC CHẾ TẠO VŨ KHÍ CDMOVESET KUBEJS (GẮN STAGE SÁT THỦ - stage_assassin)
    // ==========================================

    // 1. Crimson Fang (cdmoveset:great_tachi)
    event.shaped('cdmoveset:great_tachi', [
        ' W ',
        'NSI',
        ' A '
    ], {
        S: 'epicfight:diamond_tachi',
        W: 'minecraft:wither_skeleton_skull',
        N: 'kubejs:nidg_ingot',
        I: 'minecraft:netherite_ingot',
        A: 'minecraft:golden_apple'
    }).stage('stage_assassin')

    // 2. Phantom Katana (cdmoveset:phantom_katana)
    event.shaped('cdmoveset:phantom_katana', [
        ' W ',
        'NSI',
        ' A '
    ], {
        S: 'epicfight:uchigatana',
        W: 'minecraft:wither_skeleton_skull',
        N: 'kubejs:nidg_ingot',
        I: 'minecraft:netherite_ingot',
        A: 'minecraft:golden_apple'
    }).stage('stage_assassin')
})
