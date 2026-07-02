// // Tên file: kubejs/server_scripts/craft/robot_core_recipe.js
// // Mục đích: Thay đổi công thức chế tạo cho Robot Core từ mod rlovelyr.

// ServerEvents.recipes(event => {
//     if (!Platform.isLoaded('rlovelyr')) return;
//     const robotCore = 'rlovelyr:robot_core';

//     // Ghi log để dễ dàng debug khi cần
//     console.log(`KJS: Tweaking recipe for ${robotCore}...`);

//     // Bước 1: Luôn xóa công thức cũ trước khi thêm mới để đảm bảo không bị xung đột.
//     event.remove({ output: robotCore });
//     //
//     // // Bước 2: Thêm công thức mới theo yêu cầu (8 kim cương và 1 thỏi vàng).
//     // event.shaped(
//     //     Item.of(robotCore, 1), // Vật phẩm nhận được: 1 Robot Core
//     //     [
//     //         'DDD', // Hàng 1
//     //         'DGD', // Hàng 2
//     //         'DDD'  // Hàng 3
//     //     ],
//     //     {
//     //         D: 'minecraft:diamond',    // D là Kim cương
//     //         G: 'minecraft:gold_ingot'  // G là Thỏi Vàng
//     //     }
//     // ).id('kubejs:crafting/robot_core'); // Đặt một ID riêng cho công thức để dễ quản lý
// });