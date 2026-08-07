// Tên file: kubejs/server_scripts/recipes/additions/minecraft/bone_meal_custom_recipe.js
// Mục đích: Thêm công thức chế tạo không cần khuôn (shapeless) cho Bột Xương: 1 Xương -> 2 Bột Xương (thay vì 3 như mặc định).

ServerEvents.recipes(event => {
    event.shapeless('2x minecraft:bone_meal', ['minecraft:bone']).id('kubejs:crafting/bone_meal_from_bone');
});
