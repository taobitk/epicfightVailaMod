// Tên file: kubejs/server_scripts/recipes/additions/epicfight/epicfight_weapons_recipes.js

ServerEvents.recipes(event => {
    if (!Platform.isLoaded('epicfight')) return;

    const efGreatswords = [
        'epicfight:iron_greatsword',
        'epicfight:golden_greatsword',
        'epicfight:diamond_greatsword',
        'epicfight:netherite_greatsword'
    ];
    efGreatswords.forEach(out => event.remove({ output: out }));

    event.shaped('epicfight:iron_greatsword', [' I ', ' I ', ' S '], { I: 'minecraft:iron_block', S: 'minecraft:stick' }).stage('stage_warrior');
    event.shaped('epicfight:golden_greatsword', [' G ', ' G ', ' S '], { G: 'minecraft:gold_block', S: 'minecraft:stick' }).stage('stage_warrior');
    event.shaped('epicfight:diamond_greatsword', [' D ', ' D ', ' S '], { D: 'minecraft:diamond_block', S: 'minecraft:stick' }).stage('stage_warrior');
    
    // netherite_greatsword (Chế tạo Bàn Chế Tạo 3x3)
    event.shaped('epicfight:netherite_greatsword', [
        ' T ',
        ' N ',
        ' S '
    ], {
        T: 'minecraft:netherite_upgrade_smithing_template',
        N: 'minecraft:netherite_ingot',
        S: 'epicfight:diamond_greatsword'
    }).stage('stage_warrior');
});
