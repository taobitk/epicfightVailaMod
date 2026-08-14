// Server script - Công thức rèn 12 Món Giáp Binh Lính Độc Lập (Sắt, Vàng, Kim Cương) độc quyền cho Thánh Hộ Vương (stage_tier2_high_lord)
// Output: Item độc lập 100% (kubejs:soldier_<tier>_<piece>) giúp bấm R trực tiếp trong JEI hiện thẳng bảng Crafting mượt mà!

ServerEvents.recipes(event => {
    const armorTiers = [
        { type: 'iron', mat: 'minecraft:iron_ingot' },
        { type: 'golden', mat: 'minecraft:gold_ingot' },
        { type: 'diamond', mat: 'minecraft:diamond' }
    ];

    armorTiers.forEach(tier => {
        // 1. Mũ Binh Lính (5 ô: 3 Hắc Diệu Thạch + 2 Nguyên liệu -> Trả ra 3 Mũ)
        event.shaped(Item.of(`kubejs:soldier_${tier.type}_helmet`, 3), [
            'OIO',
            'I O'
        ], {
            O: 'minecraft:obsidian',
            I: tier.mat
        }).id(`kubejs:craft_soldier_${tier.type}_helmet`).stage('stage_tier2_high_lord');

        // 2. Áo Binh Lính (8 ô: 4 Hắc Diệu Thạch + 4 Nguyên liệu -> Trả ra 3 Áo)
        event.shaped(Item.of(`kubejs:soldier_${tier.type}_chestplate`, 3), [
            'I I',
            'OIO',
            'OIO'
        ], {
            O: 'minecraft:obsidian',
            I: tier.mat
        }).id(`kubejs:craft_soldier_${tier.type}_chestplate`).stage('stage_tier2_high_lord');

        // 3. Quần Binh Lính (7 ô: 4 Hắc Diệu Thạch + 3 Nguyên liệu -> Trả ra 3 Quần)
        event.shaped(Item.of(`kubejs:soldier_${tier.type}_leggings`, 3), [
            'OIO',
            'I O',
            'O I'
        ], {
            O: 'minecraft:obsidian',
            I: tier.mat
        }).id(`kubejs:craft_soldier_${tier.type}_leggings`).stage('stage_tier2_high_lord');

        // 4. Giày Binh Lính (4 ô: 2 Hắc Diệu Thạch + 2 Nguyên liệu -> Trả ra 3 Giày)
        event.shaped(Item.of(`kubejs:soldier_${tier.type}_boots`, 3), [
            'I O',
            'O I'
        ], {
            O: 'minecraft:obsidian',
            I: tier.mat
        }).id(`kubejs:craft_soldier_${tier.type}_boots`).stage('stage_tier2_high_lord');
    });
});