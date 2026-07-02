// ServerEvents.recipes(event => {
//     // --- Xóa công thức các món đồ từ Dungeons and Combat ---

//     // Tạo một danh sách (array) chứa ID của tất cả các vật phẩm cần xóa
//     const itemsToRemove = [
//         'dungeons_and_combat:neptunium_greathammer', // Neptunium Greatanchor
//         'dungeons_and_combat:neptunium_dagger',      // Neptunium Dagger
//         'dungeons_and_combat:neptunium_trident',     // Neptunium Trident
//         'dungeons_and_combat:neptunium_shield'       // Neptunium Shield
//     ];

//     // Dùng vòng lặp (forEach) để duyệt qua từng ID trong danh sách và xóa công thức của nó
//     itemsToRemove.forEach(id => {
//         event.remove({ output: id });
//     });

//     // Bạn có thể thêm các lệnh xóa khác ở đây nếu muốn
// });