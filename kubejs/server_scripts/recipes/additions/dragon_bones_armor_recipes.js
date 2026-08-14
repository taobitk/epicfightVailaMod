ServerEvents.recipes(event => {
    // 1. Xóa các công thức rèn cũ của 3 Món Giáp Dragon Bones
    const dragonArmorOutputs = [
        'block_factorys_bosses:dragon_bones_chestplate',
        'block_factorys_bosses:dragon_bones_leggings',
        'block_factorys_bosses:dragon_bones_boots'
    ];
    dragonArmorOutputs.forEach(out => event.remove({ output: out }));

    // 2. Công thức chế tạo Vật phẩm trung gian: Thỏi Xương Rồng Gia Cường
    // block_factorys_bosses:dragon_bone + kubejs:nidg_ingot => kubejs:dragon_bone_ingot
    event.shapeless('kubejs:dragon_bone_ingot', [
        'block_factorys_bosses:dragon_bone',
        'kubejs:nidg_ingot'
    ]);

    // 3. Công thức rèn 3 Món Giáp Dragon Bones: Mỗi món chỉ dùng đúng 2x Thỏi Xương Rồng Gia Cường (A), còn lại dùng Kim Cương (D)

    // Áo Xương Rồng (2x Thỏi Xương Rồng Gia Cường + 6x Kim Cương)
    event.shaped('block_factorys_bosses:dragon_bones_chestplate', [
        'A A',
        'DDD',
        'DDD'
    ], {
        A: 'kubejs:dragon_bone_ingot',
        D: 'minecraft:diamond'
    });

    // Quần Xương Rồng (2x Thỏi Xương Rồng Gia Cường + 5x Kim Cương)
    event.shaped('block_factorys_bosses:dragon_bones_leggings', [
        'DDD',
        'A A',
        'D D'
    ], {
        A: 'kubejs:dragon_bone_ingot',
        D: 'minecraft:diamond'
    });

    // Giày Xương Rồng (2x Thỏi Xương Rồng Gia Cường + 2x Kim Cương)
    event.shaped('block_factorys_bosses:dragon_bones_boots', [
        'A A',
        'D D'
    ], {
        A: 'kubejs:dragon_bone_ingot',
        D: 'minecraft:diamond'
    });
});
