// Tên file: kubejs/server_scripts/zombie_leather.js
// Thêm công thức chế tạo da thuộc từ thịt thối

ServerEvents.recipes(event => {
    event.shapeless(
        'minecraft:leather', // Kết quả
        [
            'minecraft:rotten_flesh',
            'minecraft:rotten_flesh',
            'minecraft:rotten_flesh'
        ]
    );
});