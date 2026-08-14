// Server script - Công thức rèn Giáp Binh Lính (Sắt, Vàng, Kim Cương) độc quyền cho Thánh Hộ Vương (stage_tier2_high_lord)
// Mỗi lượt chế tạo trả ra 3 món giáp lính (NBT cannot_equip:true, Unbreakable:1b)
// Công thức xếp hình theo dáng gốc nhưng thay 1 nửa nguyên liệu bằng Hắc Diệu Thạch (Obsidian). Ô lẻ thì Obsidian nhiều hơn 1.

ServerEvents.recipes(event => {
    const armorTiers = [
        { type: 'iron', namePrefix: 'Sắt', mat: 'minecraft:iron_ingot' },
        { type: 'golden', namePrefix: 'Vàng', mat: 'minecraft:gold_ingot' },
        { type: 'diamond', namePrefix: 'Kim Cương', mat: 'minecraft:diamond' }
    ];

    armorTiers.forEach(tier => {
        // 1. Mũ Binh Lính (5 ô: 3 Hắc Diệu Thạch + 2 Nguyên liệu -> Trả ra 3 Mũ)
        let helmetOutput = Item.of(`minecraft:${tier.type}_helmet`, 3, `{cannot_equip:true,CustomSoldierArmor:1b,Unbreakable:1b,display:{Name:'{"text":"Mũ ${tier.namePrefix} Binh Lính","color":"gold","italic":false}',Lore:['"\\\\u00a77Trang bị chuyên dụng dành cho Binh Lính"','"\\\\u00a7cNgười chơi không thể mặc"']}}`);
        event.shaped(helmetOutput, [
            'OIO',
            'I O'
        ], {
            O: 'minecraft:obsidian',
            I: tier.mat
        }).id(`kubejs:craft_soldier_${tier.type}_helmet`).stage('stage_tier2_high_lord');

        // 2. Áo Binh Lính (8 ô: 4 Hắc Diệu Thạch + 4 Nguyên liệu -> Trả ra 3 Áo)
        let chestOutput = Item.of(`minecraft:${tier.type}_chestplate`, 3, `{cannot_equip:true,CustomSoldierArmor:1b,Unbreakable:1b,display:{Name:'{"text":"Áo ${tier.namePrefix} Binh Lính","color":"gold","italic":false}',Lore:['"\\\\u00a77Trang bị chuyên dụng dành cho Binh Lính"','"\\\\u00a7cNgười chơi không thể mặc"']}}`);
        event.shaped(chestOutput, [
            'I I',
            'OIO',
            'OIO'
        ], {
            O: 'minecraft:obsidian',
            I: tier.mat
        }).id(`kubejs:craft_soldier_${tier.type}_chestplate`).stage('stage_tier2_high_lord');

        // 3. Quần Binh Lính (7 ô: 4 Hắc Diệu Thạch + 3 Nguyên liệu -> Trả ra 3 Quần)
        let legsOutput = Item.of(`minecraft:${tier.type}_leggings`, 3, `{cannot_equip:true,CustomSoldierArmor:1b,Unbreakable:1b,display:{Name:'{"text":"Quần ${tier.namePrefix} Binh Lính","color":"gold","italic":false}',Lore:['"\\\\u00a77Trang bị chuyên dụng dành cho Binh Lính"','"\\\\u00a7cNgười chơi không thể mặc"']}}`);
        event.shaped(legsOutput, [
            'OIO',
            'I O',
            'O I'
        ], {
            O: 'minecraft:obsidian',
            I: tier.mat
        }).id(`kubejs:craft_soldier_${tier.type}_leggings`).stage('stage_tier2_high_lord');

        // 4. Giày Binh Lính (4 ô: 2 Hắc Diệu Thạch + 2 Nguyên liệu -> Trả ra 3 Giày)
        let bootsOutput = Item.of(`minecraft:${tier.type}_boots`, 3, `{cannot_equip:true,CustomSoldierArmor:1b,Unbreakable:1b,display:{Name:'{"text":"Giày ${tier.namePrefix} Binh Lính","color":"gold","italic":false}',Lore:['"\\\\u00a77Trang bị chuyên dụng dành cho Binh Lính"','"\\\\u00a7cNgười chơi không thể mặc"']}}`);
        event.shaped(bootsOutput, [
            'I O',
            'O I'
        ], {
            O: 'minecraft:obsidian',
            I: tier.mat
        }).id(`kubejs:craft_soldier_${tier.type}_boots`).stage('stage_tier2_high_lord');
    });

    // Đăng ký RecipeStages khóa công thức cho stage_tier2_high_lord
    try {
        if (event.recipes && event.recipes.recipestages) {
            armorTiers.forEach(tier => {
                event.recipes.recipestages.setRecipeStage('stage_tier2_high_lord', `kubejs:craft_soldier_${tier.type}_helmet`);
                event.recipes.recipestages.setRecipeStage('stage_tier2_high_lord', `kubejs:craft_soldier_${tier.type}_chestplate`);
                event.recipes.recipestages.setRecipeStage('stage_tier2_high_lord', `kubejs:craft_soldier_${tier.type}_leggings`);
                event.recipes.recipestages.setRecipeStage('stage_tier2_high_lord', `kubejs:craft_soldier_${tier.type}_boots`);
            });
        }
    } catch (e) {
        console.log('[KubeJS] RecipeStages soldier armor locking handled smoothly: ' + e);
    }
});