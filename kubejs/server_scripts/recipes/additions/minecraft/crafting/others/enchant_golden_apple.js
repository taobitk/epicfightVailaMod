// FileName: kubejs/server_scripts/enchant_golden_apple.js
// Thêm công thức chế tạo cho Táo Vàng Phù Phép

ServerEvents.recipes(event => {
    // An toàn nhất là luôn xóa công thức cũ (nếu có) của vật phẩm trước khi thêm công thức mới
    event.remove({ output: 'minecraft:enchanted_golden_apple' });

    // Thêm công thức mới cho Táo Vàng Phù Phép
    event.shaped(
        Item.of('minecraft:enchanted_golden_apple'), // Vật phẩm chế tạo ra
        [
            'GGG', // Dòng 1
            'GAG', // Dòng 2
            'GGG'  // Dòng 3
        ],
        {
            G: 'minecraft:gold_block', // G là Khối Vàng
            A: 'minecraft:apple'       // A là Quả Táo
        }
    ).id('kubejs:crafting/enchanted_golden_apple'); // Đặt một ID riêng cho công thức
});