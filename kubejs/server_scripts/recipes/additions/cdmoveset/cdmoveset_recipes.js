// Tên file: kubejs/server_scripts/recipes/additions/cdmoveset/cdmoveset_recipes.js
// Định nghĩa công thức vũ khí CDMoveset tập trung 100% bằng KubeJS, gắn Stage hiển thị nhãn chuẩn đét trên JEI

ServerEvents.recipes(event => {
    // Xóa toàn bộ công thức CDMoveset mặc định cũ trước khi tái tạo
    const cdOutputs = [
        'cdmoveset:s_wooden_sword', 'cdmoveset:s_stone_sword', 'cdmoveset:s_golden_sword', 'cdmoveset:s_iron_sword', 'cdmoveset:s_diamond_sword', 'cdmoveset:s_netherite_sword',
        'cdmoveset:s_wooden_greatsword', 'cdmoveset:s_stone_greatsword', 'cdmoveset:s_golden_greatsword', 'cdmoveset:s_iron_greatsword', 'cdmoveset:s_diamond_greatsword', 'cdmoveset:s_netherite_greatsword'
    ];
    cdOutputs.forEach(out => event.remove({ output: out }));

    // ==========================================
    // 🗡️ 1. HỆ SÁT THỦ: DÒNG KIẾM ĐƠN CDMOVESET (stage_assassin)
    // ==========================================
    event.shaped('cdmoveset:s_wooden_sword', [' B ', ' B ', ' S '], { B: 'minecraft:oak_planks', S: 'minecraft:wooden_sword' }).stage('stage_assassin');
    event.shaped('cdmoveset:s_stone_sword', [' B ', ' B ', ' S '], { B: 'minecraft:cobblestone', S: 'minecraft:stone_sword' }).stage('stage_assassin');
    event.shaped('cdmoveset:s_golden_sword', [' B ', ' B ', ' S '], { B: 'minecraft:gold_ingot', S: 'minecraft:golden_sword' }).stage('stage_assassin');
    event.shaped('cdmoveset:s_iron_sword', [' B ', ' B ', ' S '], { B: 'minecraft:iron_ingot', S: 'minecraft:iron_sword' }).stage('stage_assassin');
    event.shaped('cdmoveset:s_diamond_sword', [' B ', ' B ', ' S '], { B: 'minecraft:diamond', S: 'minecraft:diamond_sword' }).stage('stage_assassin');
    event.smithing('cdmoveset:s_netherite_sword', 'minecraft:netherite_upgrade_smithing_template', 'cdmoveset:s_diamond_sword', 'minecraft:netherite_ingot');

    // Vũ khí độc quyền Sát Thủ
    event.shaped('cdmoveset:great_tachi', [' W ', 'NSI', ' A '], { S: 'epicfight:diamond_tachi', W: 'minecraft:wither_skeleton_skull', N: 'kubejs:nidg_ingot', I: 'minecraft:netherite_ingot', A: 'minecraft:golden_apple' }).stage('stage_assassin');
    event.shaped('cdmoveset:phantom_katana', [' W ', 'NSI', ' A '], { S: 'epicfight:uchigatana', W: 'minecraft:wither_skeleton_skull', N: 'kubejs:nidg_ingot', I: 'minecraft:netherite_ingot', A: 'minecraft:golden_apple' }).stage('stage_assassin');

    // ==========================================
    // 🛡️ 2. HỆ CHIẾN BINH: ĐẠI KIẾM CDMOVESET (stage_warrior)
    // ==========================================
    event.shaped('cdmoveset:s_wooden_greatsword', [' WW', 'WWW', 'SW '], { W: 'minecraft:oak_planks', S: 'minecraft:cobblestone' }).stage('stage_warrior');
    event.shaped('cdmoveset:s_stone_greatsword', [' WW', 'SWW', 'SS '], { W: 'minecraft:cobblestone', S: 'minecraft:oak_planks' }).stage('stage_warrior');
    event.shaped('cdmoveset:s_golden_greatsword', [' BB', 'BBB', 'SB '], { B: 'minecraft:gold_ingot', S: 'minecraft:iron_block' }).stage('stage_warrior');
    event.shaped('cdmoveset:s_iron_greatsword', [' BB', 'BBB', 'SB '], { B: 'minecraft:iron_ingot', S: 'minecraft:iron_block' }).stage('stage_warrior');
    event.shaped('cdmoveset:s_diamond_greatsword', [' BB', 'BBB', 'SB '], { B: 'minecraft:diamond', S: 'minecraft:iron_block' }).stage('stage_warrior');
    event.smithing('cdmoveset:s_netherite_greatsword', 'minecraft:netherite_upgrade_smithing_template', 'cdmoveset:s_diamond_greatsword', 'minecraft:netherite_ingot');
});
