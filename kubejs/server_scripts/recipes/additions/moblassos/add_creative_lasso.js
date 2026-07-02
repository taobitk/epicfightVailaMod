// // Tên file: kubejs/server_scripts/craft/creative_lasso_recipe.js
// // Mục đích: Thêm công thức chế tạo cho Creative Lasso từ mod Mob Lassos.

// ServerEvents.recipes(event => {
//     if (!Platform.isLoaded('moblassos')) return;
//     const creativeLasso = 'moblassos:creative_lasso';

//     // Ghi log để dễ dàng debug khi cần
//     console.log(`KJS: Adding recipe for ${creativeLasso}...`);

//     // Bước 1: Xóa công thức cũ (nếu có) để đảm bảo công thức của bạn được ưu tiên.
//     event.remove({ output: creativeLasso });

//     // Bước 2: Thêm công thức mới theo yêu cầu (8 thỏi vàng và 1 khối sắt).
//     event.shaped(
//         Item.of(creativeLasso, 1), // Vật phẩm nhận được: 1 Creative Lasso
//         [
//             'GGG', // Hàng 1: Vàng, Vàng, Vàng
//             'GIG', // Hàng 2: Vàng, Khối Sắt, Vàng
//             'GGG'  // Hàng 3: Vàng, Vàng, Vàng
//         ],
//         {
//             G: 'minecraft:gold_ingot', // G là Thỏi Vàng
//             I: 'minecraft:iron_block'  // I là Khối Sắt
//         }
//     ).id('kubejs:crafting/creative_lasso'); // Đặt một ID riêng cho công thức
// });