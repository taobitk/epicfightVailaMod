// Tên file: kubejs/server_scripts/craft/ghast_tear_recipe.js
// Mục đích: Thêm công thức chế tạo cho Nước Mắt Ghast (Ghast Tear)

ServerEvents.recipes(event => {
    // Ghi log để xác nhận script đã được tải
    console.log('KJS: Loading custom Ghast Tear recipe...');

    // (Tùy chọn) Xóa công thức mặc định nếu có (Ghast Tear không có công thức mặc định)
    // event.remove({ output: 'minecraft:ghast_tear' });

    // Thêm công thức chế tạo mới
    event.shaped(
        Item.of('minecraft:ghast_tear', 1), // Vật phẩm nhận được: 1 Nước Mắt Ghast
        [
            'SIS', // Hàng 1: Cát Linh Hồn, Sắt, Cát Linh Hồn
            'IGI', // Hàng 2: Sắt, Vàng, Sắt
            'SIS'  // Hàng 3: Cát Linh Hồn, Sắt, Cát Linh Hồn
        ],
        {
            S: 'minecraft:soul_sand',    // S = Cát Linh Hồn
            I: 'minecraft:iron_ingot',   // I = Thỏi Sắt
            G: 'minecraft:gold_ingot'    // G = Thỏi Vàng
        }
    ).id('kubejs:crafting/ghast_tear'); // Đặt ID riêng cho công thức để dễ quản lý
});