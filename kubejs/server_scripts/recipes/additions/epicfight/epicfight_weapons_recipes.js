// Tên file: kubejs/server_scripts/recipes/additions/epicfight/epicfight_weapons_recipes.js
// Tái tạo chính xác 100% công thức gốc của EpicFight bằng KubeJS để hiển thị nhãn "Stage: ..." mượt mà trên JEI

ServerEvents.recipes(event => {
    if (!Platform.isLoaded('epicfight')) return;

    const efGreatswords = [
        'epicfight:iron_greatsword',
        'epicfight:golden_greatsword',
        'epicfight:diamond_greatsword',
        'epicfight:netherite_greatsword'
    ];
    efGreatswords.forEach(out => event.remove({ output: out }));

    // iron_greatsword
    event.shaped('epicfight:iron_greatsword', [
        ' I ',
        ' I ',
        ' S '
    ], {
        I: 'minecraft:iron_block',
        S: 'minecraft:stick'
    }).stage('stage_warrior')

    // golden_greatsword
    event.shaped('epicfight:golden_greatsword', [
        ' G ',
        ' G ',
        ' S '
    ], {
        G: 'minecraft:gold_block',
        S: 'minecraft:stick'
    }).stage('stage_warrior')

    // diamond_greatsword
    event.shaped('epicfight:diamond_greatsword', [
        ' D ',
        ' D ',
        ' S '
    ], {
        D: 'minecraft:diamond_block',
        S: 'minecraft:stick'
    }).stage('stage_warrior')

    // netherite_greatsword (Smithing)
    event.smithing(
        'epicfight:netherite_greatsword',
        'minecraft:netherite_upgrade_smithing_template',
        'epicfight:diamond_greatsword',
        'minecraft:netherite_ingot'
    ).stage('stage_warrior')
})
