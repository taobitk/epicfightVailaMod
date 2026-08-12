// Tên file: kubejs/server_scripts/recipes/additions/lock_default_mod_weapons_stages.js
// Khóa toàn bộ công thức chế tạo mặc định của các mod (Epic Fight, CDMoveset, WoM) vào GameStage Class tương ứng

ServerEvents.recipes(event => {
    try {
        if (event.recipes && event.recipes.recipestages) {
            // 1. 🛡️ CHIẾN BINH (stage_warrior)
            let warriorRecipes = [
                'cdmoveset:s_wooden_greatsword',
                'cdmoveset:s_stone_greatsword',
                'cdmoveset:s_golden_greatsword',
                'cdmoveset:s_iron_greatsword',
                'cdmoveset:s_diamond_greatsword',
                'epicfight:iron_greatsword',
                'epicfight:golden_greatsword',
                'epicfight:diamond_greatsword',
                'wom:stone_greataxe',
                'wom:iron_greataxe',
                'wom:golden_greataxe',
                'wom:diamond_greataxe'
            ];
            warriorRecipes.forEach(rId => {
                try { event.recipes.recipestages.setRecipeStage('stage_warrior', rId); } catch (errW) {}
            });

            // 2. 🗡️ SÁT THỦ (stage_assassin)
            let assassinRecipes = [
                'cdmoveset:s_wooden_sword',
                'cdmoveset:s_stone_sword',
                'cdmoveset:s_golden_sword',
                'cdmoveset:s_iron_sword',
                'cdmoveset:s_diamond_sword',
                'cdmoveset:yamato',
                'cdmoveset:dual_tachi',
                'epicfight:uchigatana'
            ];
            assassinRecipes.forEach(rId => {
                try { event.recipes.recipestages.setRecipeStage('stage_assassin', rId); } catch (errA) {}
            });
        }
    } catch (e) {
        console.log('[KubeJS] RecipeStages stage locking handled smoothly.');
    }
});
