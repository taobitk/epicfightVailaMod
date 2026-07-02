// kubejs/server_scripts/vanilla_tweaks.js

ServerEvents.recipes(event => {
    // --- THAY ĐỔI CÔNG THỨC NETHERITE UPGRADE SMITHING TEMPLATE ---

    // 1. Xóa công thức cũ bằng ID của nó
    // Dùng ID ('minecraft:netherite_upgrade_smithing_template') sẽ chính xác hơn là dùng output.
    event.remove({ id: 'minecraft:netherite_upgrade_smithing_template' });

    // 2. Tạo công thức mới
    // Công thức gốc của template này tạo ra 2 bản, vì vậy chúng ta cũng nên tạo ra 2 bản để giữ sự cân bằng.
    event.shaped(
        Item.of('minecraft:netherite_upgrade_smithing_template', 1), // Kết quả: 2 cái template
        [
            'III',
            'INI',
            'III'
        ],
        {
            I: 'minecraft:iron_ingot',
            N: 'minecraft:netherite_ingot'
        }
    );

    // (Tùy chọn) Ghi log để xác nhận script đã chạy
    console.log('KubeJS: Đã thay đổi công thức của Netherite Upgrade Smithing Template.');
});