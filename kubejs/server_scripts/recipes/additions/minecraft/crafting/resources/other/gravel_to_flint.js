// Tên file: kubejs/server_scripts/recipes/additions/minecraft/crafting/resources/other/gravel_to_flint.js
// Thêm công thức chế tạo không định hình: 3 Sỏi (Gravel) đổi lấy 1 Đá lửa (Flint)

ServerEvents.recipes(event => {
    event.shapeless(
        'minecraft:flint', // Sản phẩm đầu ra
        [
            'minecraft:gravel',
            'minecraft:gravel',
            'minecraft:gravel'
        ]
    );
});
