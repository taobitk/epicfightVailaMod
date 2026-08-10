// Tên file: kubejs/server_scripts/recipes/additions/wom/wom_weapons_recipes.js
// Tái tạo chính xác 100% công thức gốc của WoM bằng KubeJS để hiển thị nhãn "Stage: ..." mượt mà trên JEI

ServerEvents.recipes(event => {
    // ----------------------------------------------------
    // 🛡️ 1. HỆ CHIẾN BINH: ĐẠI RÌU WOM (stage_warrior)
    // ----------------------------------------------------
    const greataxeOutputs = [
        'wom:iron_greataxe',
        'wom:golden_greataxe',
        'wom:diamond_greataxe',
        'wom:netherite_greataxe'
    ];
    greataxeOutputs.forEach(out => event.remove({ output: out }));

    // iron_greataxe (Chính xác theo công thức gốc WoM JAR)
    event.shaped('wom:iron_greataxe', [
        ' BB',
        'SAB',
        'S  '
    ], {
        B: 'minecraft:iron_ingot',
        S: 'minecraft:stick',
        A: 'minecraft:iron_axe'
    }).stage('stage_warrior')

    // golden_greataxe (Chính xác theo công thức gốc WoM JAR)
    event.shaped('wom:golden_greataxe', [
        ' BB',
        'SAB',
        'S  '
    ], {
        B: 'minecraft:gold_ingot',
        S: 'minecraft:stick',
        A: 'minecraft:golden_axe'
    }).stage('stage_warrior')

    // diamond_greataxe (Chính xác theo công thức gốc WoM JAR)
    event.shaped('wom:diamond_greataxe', [
        ' BB',
        'SAB',
        'S  '
    ], {
        B: 'minecraft:diamond',
        S: 'minecraft:stick',
        A: 'minecraft:diamond_axe'
    }).stage('stage_warrior')

    // netherite_greataxe (Chính xác theo công thức gốc WoM JAR)
    event.smithing(
        'wom:netherite_greataxe',
        'minecraft:netherite_upgrade_smithing_template',
        'wom:diamond_greataxe',
        'minecraft:netherite_ingot'
    ).stage('stage_warrior')


    // ----------------------------------------------------
    // 👻 2. SÁT THỦ BÓNG MA: MA KIẾM SATSUJIN (stage_tier2_phantom_striker)
    // ----------------------------------------------------
    event.remove({ output: 'wom:satsujin' })

    event.smithing(
        'wom:satsujin',
        'minecraft:netherite_upgrade_smithing_template',
        'epicfight:uchigatana',
        'wom:demon_seal'
    ).stage('stage_tier2_phantom_striker')
})
