// Tên file: kubejs/server_scripts/recipes/additions/minecraft/crafting/others/add_custom_watering_can.js
// Mục đích: Xóa công thức chế tạo bình tưới nước sắt (wateringcans:iron_watering_cans) mặc định, 
//            và thêm công thức mới dạng shaped sử dụng 4 phôi sắt (Iron Ingot) theo đúng hình dạng yêu cầu.

ServerEvents.recipes(event => {
    // 1. Xóa công thức mặc định của Bình Tưới Nước Sắt (Recipe ID: wateringcans:iwc_craft)
    event.remove({ id: 'wateringcans:iwc_craft' });
    event.remove({ output: 'wateringcans:iron_watering_cans' });

    // 2. Thêm công thức chế tạo dạng shaped mới (dùng 4 phôi sắt minecraft:iron_ingot)
    event.shaped(
        'wateringcans:iron_watering_cans',
        [
            '  I', // Hàng 1: 1 Phôi sắt ở góc phải
            'III'  // Hàng 2: 3 Phôi sắt bên dưới
        ],
        {
            I: 'minecraft:iron_ingot' // I là Phôi sắt
        }
    ).id('kubejs:custom_iron_watering_can');
});
