ServerEvents.recipes(event => {
    // 1. Xóa các công thức rèn cũ của Bộ Giáp Dragon Bones
    const dragonArmorOutputs = [
        'block_factorys_bosses:dragon_bones_helmet',
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

    // 3. Tạo lại công thức rèn Bộ Giáp Dragon Bones bằng Thỏi Xương Rồng Gia Cường
    // Mũ Xương Rồng
    event.shaped('block_factorys_bosses:dragon_bones_helmet', [
        'AAA',
        'A A'
    ], {
        A: 'kubejs:dragon_bone_ingot'
    });

    // Áo Xương Rồng
    event.shaped('block_factorys_bosses:dragon_bones_chestplate', [
        'A A',
        'AAA',
        'AAA'
    ], {
        A: 'kubejs:dragon_bone_ingot'
    });

    // Quần Xương Rồng
    event.shaped('block_factorys_bosses:dragon_bones_leggings', [
        'AAA',
        'A A',
        'A A'
    ], {
        A: 'kubejs:dragon_bone_ingot'
    });

    // Giày Xương Rồng
    event.shaped('block_factorys_bosses:dragon_bones_boots', [
        'A A',
        'A A'
    ], {
        A: 'kubejs:dragon_bone_ingot'
    });
});
