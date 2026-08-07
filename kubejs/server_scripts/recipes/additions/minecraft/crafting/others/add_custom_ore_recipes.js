// Tên file: kubejs/server_scripts/recipes/additions/minecraft/crafting/others/add_custom_ore_recipes.js
// Mục đích: Thêm công thức chế tạo bàn 3x3 đối xứng (Shaped Recipe) cực đẹp cho Đá Đỏ và Ngọc Lam x2

ServerEvents.recipes(event => {
    // 1. Chế tạo Đá Đỏ (2x): 4 Than ở 4 góc đối xứng, 1 Thịt Thối nằm chính giữa khung 3x3
    //  [C] [ ] [C]
    //  [ ] [F] [ ]
    //  [C] [ ] [C]
    event.shaped('2x minecraft:redstone', [
        'C C',
        ' F ',
        'C C'
    ], {
        C: 'minecraft:coal',
        F: 'minecraft:rotten_flesh'
    });

    // 2. Chế tạo Ngọc Lam (2x): 4 Than ở 4 góc đối xứng, 1 Xương nằm chính giữa khung 3x3
    //  [C] [ ] [C]
    //  [ ] [B] [ ]
    //  [C] [ ] [C]
    event.shaped('2x minecraft:lapis_lazuli', [
        'C C',
        ' B ',
        'C C'
    ], {
        C: 'minecraft:coal',
        B: 'minecraft:bone'
    });
});
