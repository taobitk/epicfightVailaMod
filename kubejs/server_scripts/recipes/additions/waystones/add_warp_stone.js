// Tên file: kubejs/server_scripts/craft/warp_stone_recipe.js
// Mục đích: Thay đổi công thức chế tạo cho Warp Stone.
// PHIÊN BẢN ĐÃ SỬA LỖI

// Sử dụng cú pháp "ServerEvents.recipes" thay vì "onEvent('recipes')"
ServerEvents.recipes(event => {
    if (!Platform.isLoaded('waystones')) return;
    const warpStone = 'waystones:warp_stone';

    // Ghi log để dễ dàng debug
    console.log(`KJS: Tweaking recipe for ${warpStone}...`);

    // Bước 1: Xóa công thức chế tạo cũ của Warp Stone
    event.remove({ output: warpStone });

    // Bước 2: Thêm công thức mới cho Warp Stone
    event.shaped(
        Item.of(warpStone, 1), // Vật phẩm đầu ra, cú pháp chuẩn là Item.of()
        [
            ' O ', // Hàng 1
            'ODO', // Hàng 2: "D" là kim cương, "O" là hắc diện thạch
            ' O '  // Hàng 3
        ],
        {
            D: 'minecraft:diamond',
            O: 'minecraft:obsidian'
        }
    ).id('kubejs:crafting/warp_stone'); // Thêm ID riêng cho công thức để tránh xung đột
});