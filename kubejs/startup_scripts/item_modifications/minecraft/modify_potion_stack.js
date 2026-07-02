// // Tên file: kubejs/startup_scripts/potion_stack_tweak.js
// // Mục đích: Tăng số lượng stack tối đa của các loại thuốc.
// // PHIÊN BẢN SỬA LỖI

// // Sử dụng sự kiện ItemEvents.modification, đây là cách chuẩn và đúng đắn
// // để thay đổi thuộc tính của các vật phẩm đã tồn tại.
// ItemEvents.modification(event => {
//     // Ghi log để xác nhận script đã chạy
//     console.log('KJS: Modifying potion stack sizes...');

//     // Danh sách các loại thuốc cần thay đổi
//     const potionsToModify = [
//         'minecraft:potion',
//         'minecraft:splash_potion',
//         'minecraft:lingering_potion'
//     ];

//     // Lọc ra các vật phẩm có ID nằm trong danh sách trên
//     event.modify(potionsToModify, item => {
//         // Đặt số lượng stack tối đa là 20
//         item.maxStackSize = 30;
//     });
// });