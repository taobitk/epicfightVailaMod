// Tên file: kubejs/server_scripts/recipes/removals/minecraft/bone_meal_removal.js
// Mục đích: Xóa hoàn toàn công thức chế tạo mặc định của Bột Xương (Bone Meal) từ Xương (Bone) và Khối Xương (Bone Block).

ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:bone_meal' });
});
