// // kubejs/server_scripts/remove_cobblefordays.js

// // Dùng ServerEvents.recipes thay vì onEvent('recipes', ...)
// ServerEvents.recipes(event => {
//     if (!Platform.isLoaded('cobblefordays')) return;
//     // Danh sách các item cần xóa công thức
//     const itemsToRemove = [
//         'cobblefordays:tier_1',
//         'cobblefordays:tier_2',
//         'cobblefordays:tier_3',
//         'cobblefordays:tier_4',
//         'cobblefordays:tier_5'
//     ];

//     // Vòng lặp để xóa công thức cho từng item trong danh sách
//     itemsToRemove.forEach(item => {
//         event.remove({ output: item });
//     });

//     // Ghi log vào file kubejs/logs/server.log để xác nhận script đã chạy
//     console.log('Đã xóa công thức chế tạo cho Cobble For Days Tiers 1-5.');
// });