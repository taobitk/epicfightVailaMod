// // kubejs/server_scripts/recipe_removals.js

// ServerEvents.recipes(event => {
//     if (!Platform.isLoaded('potionrings2')) return;
//     // ---- XÓA CÔNG THỨC CỦA POTION RINGS ----

//     // Tạo một danh sách (array) chứa ID của tất cả các vật phẩm cần xóa
//     const itemsToRemove = [
//         'potionrings2:potion_ring',
//         'potionrings2:ring_strength',
//         'potionrings2:ring_haste',
//         'potionrings2:ring_speed',
//         'potionrings2:ring_regeneration',
//         'potionrings2:ring_jump_boost',
//         'potionrings2:ring_resistance'
//     ];

//     // Dùng vòng lặp forEach để duyệt qua từng ID trong danh sách và xóa công thức của nó
//     // Cách này gọn gàng hơn nhiều so với việc viết 7 dòng event.remove() riêng lẻ.
//     itemsToRemove.forEach(id => {
//         event.remove({ output: id });
//     });

//     // (Tùy chọn) Ghi lại log trong console để xác nhận script đã chạy thành công
//     console.log('KubeJS: Đã xóa công thức của các vật phẩm Potion Rings.');
// });