// // kubejs/server_scripts/mercenary_board_recipe.js

// ServerEvents.recipes(event => {
//     if (!Platform.isLoaded('epic_mercenary')) return;
//     // BƯỚC 1: Xóa công thức cũ của Mercenary Board
//     event.remove({ output: 'epic_mercenary:mercenary_board' });

//     // BƯỚC 2: Thêm công thức mới
//     event.shaped(
//         'epic_mercenary:mercenary_board', // Vật phẩm tạo ra
//         [
//             ' C ',
//             'CGC',
//             ' C '
//         ],
//         {
//             C: 'minecraft:copper_ingot', // C là Đồng
//             G: 'minecraft:gold_ingot'    // G là Vàng
//         }
//     );
// });