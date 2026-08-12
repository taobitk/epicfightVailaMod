// Tên file: kubejs/server_scripts/recipes/additions/wom/wom_weapons_recipes.js

ServerEvents.recipes(event => {
    const greataxeOutputs = [
        'wom:iron_greataxe',
        'wom:golden_greataxe',
        'wom:diamond_greataxe',
        'wom:netherite_greataxe',
        'wom:satsujin'
    ];
    greataxeOutputs.forEach(out => event.remove({ output: out }));

    event.shaped('wom:iron_greataxe', [' BB', 'SAB', 'S  '], { B: 'minecraft:iron_ingot', S: 'minecraft:stick', A: 'minecraft:iron_axe' }).stage('stage_warrior');
    event.shaped('wom:golden_greataxe', [' BB', 'SAB', 'S  '], { B: 'minecraft:gold_ingot', S: 'minecraft:stick', A: 'minecraft:golden_axe' }).stage('stage_warrior');
    event.shaped('wom:diamond_greataxe', [' BB', 'SAB', 'S  '], { B: 'minecraft:diamond', S: 'minecraft:stick', A: 'minecraft:diamond_axe' }).stage('stage_warrior');
    
    // netherite_greataxe (Chế tạo Bàn Chế Tạo 3x3)
    event.shaped('wom:netherite_greataxe', [
        ' T ',
        ' N ',
        ' S '
    ], {
        T: 'minecraft:netherite_upgrade_smithing_template',
        N: 'minecraft:netherite_ingot',
        S: 'wom:diamond_greataxe'
    }).stage('stage_warrior');

    // 👻 SÁT THỦ BÓNG MA: MA KIẾM SATSUJIN (stage_tier2_phantom_striker)
    event.shaped('wom:satsujin', [
        ' T ',
        ' D ',
        ' U '
    ], {
        T: 'minecraft:netherite_upgrade_smithing_template',
        D: 'wom:demon_seal',
        U: 'epicfight:uchigatana'
    }).stage('stage_tier2_phantom_striker');
});
