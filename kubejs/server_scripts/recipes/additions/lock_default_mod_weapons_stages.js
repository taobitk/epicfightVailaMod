// Tên file: kubejs/server_scripts/recipes/additions/lock_default_mod_weapons_stages.js
// Khóa toàn bộ công thức chế tạo mặc định của các mod (Epic Fight, CDMoveset, WoM) vào GameStage Class tương ứng

ServerEvents.recipes(event => {
    if (!event.recipes || !event.recipes.recipestages) return;

    try {
        // 1. 🛡️ CHIẾN BINH (stage_warrior)
        const warriorDefaultRecipes = [
            // CDMoveset Greatswords
            'cdmoveset:s_wooden_greatsword',
            'cdmoveset:s_stone_greatsword',
            'cdmoveset:s_golden_greatsword',
            'cdmoveset:s_iron_greatsword',
            'cdmoveset:s_diamond_greatsword',
            'cdmoveset:s_netherite_greatsword',

            // Epic Fight Greatswords
            'epicfight:iron_greatsword',
            'epicfight:golden_greatsword',
            'epicfight:diamond_greatsword',
            'epicfight:netherite_greatsword',

            // WoM Greataxes
            'wom:stone_greataxe',
            'wom:iron_greataxe',
            'wom:golden_greataxe',
            'wom:diamond_greataxe',
            'wom:netherite_greataxe'
        ];

        warriorDefaultRecipes.forEach(rId => {
            event.recipes.recipestages.setRecipeStage('stage_warrior', rId);
        });

        // 2. 🗡️ SÁT THỦ (stage_assassin)
        const assassinDefaultRecipes = [
            // CDMoveset Swords
            'cdmoveset:s_wooden_sword',
            'cdmoveset:s_stone_sword',
            'cdmoveset:s_golden_sword',
            'cdmoveset:s_iron_sword',
            'cdmoveset:s_diamond_sword',
            'cdmoveset:s_netherite_sword',

            // CDMoveset Special Katana / Tachi
            'cdmoveset:yamato',
            'cdmoveset:dual_tachi',

            // Epic Fight Uchigatana
            'epicfight:uchigatana'
        ];

        assassinDefaultRecipes.forEach(rId => {
            event.recipes.recipestages.setRecipeStage('stage_assassin', rId);
        });

        // 3. 👻 SÁT THỦ BÓNG MA (stage_tier2_phantom_striker)
        event.recipes.recipestages.setRecipeStage('stage_tier2_phantom_striker', 'wom:satsujin');

    } catch (e) {
        console.log('[KubeJS] Failed to lock default mod recipes: ' + e);
    }
});
