// Tên file: kubejs/server_scripts/custom_anvil.js

ServerEvents.recipes(event => {
    // Bước 1: Xóa công thức chế tạo Anvil mặc định của game
    event.remove({ id: 'minecraft:anvil' });

    // Bước 2: Thêm công thức chế tạo mới cho Anvil
    event.shaped(
        'minecraft:anvil', // Vật phẩm tạo ra
        [
            'CCC', // Hàng 1: 3 phôi đồng
            ' I ', // Hàng 2: 1 phôi sắt ở giữa
            'III'  // Hàng 3: 3 phôi sắt
        ],
        {
            C: 'minecraft:copper_ingot', // C là Phôi Đồng
            I: 'minecraft:iron_ingot'    // I là Phôi Sắt
        }
    );
});

// Tên file: kubejs/server_scripts/burn_skillbook.js

ServerEvents.recipes(event => {
    // Thêm công thức đốt trên lửa trại (Campfire)
    // Đốt một quyển 'epicfight:skillbook' bất kỳ sẽ cho ra 1 viên kim cương
    event.campfireCooking(
        'minecraft:gold_ingot',      // Thành phẩm
        'epicfight:skillbook'     // Nguyên liệu
    ).xp(1.0).cookingTime(600);   // Thêm 1.0 kinh nghiệm, thời gian đốt là 30 giây
});

// Tên file: kubejs/server_scripts/saddle_recipe.js

ServerEvents.recipes(event => {
    // Thêm công thức chế tạo có hình dạng cho Yên Ngựa
    event.shaped(
        'minecraft:saddle', // Vật phẩm tạo ra
        [
            'LLL', // Hàng 1: 3 miếng da thuộc
            'I I'  // Hàng 2: 2 phôi sắt ở hai bên
        ],
        {
            L: 'minecraft:leather',      // L là Da thuộc
            I: 'minecraft:iron_ingot'    // I là Phôi sắt
        }
    );
});

// Tên file: kubejs/server_scripts/custom_spyglass.js

ServerEvents.recipes(event => {
    // Xóa công thức ống nhòm mặc định
    event.remove({ id: 'minecraft:spyglass' });

    // Thêm công thức mới
    event.shaped(
        'minecraft:spyglass', // Vật phẩm tạo ra
        [
            'G', // Hàng 1: Kính
            'C', // Hàng 2: Phôi đồng
            'C'  // Hàng 3: Phôi đồng
        ],
        {
            G: 'minecraft:glass',        // G là Kính
            C: 'minecraft:copper_ingot'  // C là Phôi đồng
        }
    );
});