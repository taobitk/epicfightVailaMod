// Tên file: kubejs/server_scripts/mechanics/mech_mob_equip_toys.js
// Mục đích: Ép các loại zombie, skeleton và biến thể của chúng luôn spawn với Kiếm ở tay chính, 20% có thêm TNT ở tay phụ, và luôn đội mũ.

const EquipmentSlot = Java.loadClass('net.minecraft.world.entity.EquipmentSlot');

EntityEvents.spawned(event => {
    let entity = event.entity;
    if (!entity) return;

    // Danh sách các loại mob cần trang bị
    const targetMobs = [
        'minecraft:zombie',
        'minecraft:husk',
        'minecraft:drowned',
        'minecraft:zombie_villager',
        'minecraft:skeleton',
        'minecraft:stray',
        'minecraft:wither_skeleton'
    ];

    if (targetMobs.includes(entity.type)) {
        let pData = entity.persistentData;

        // Tránh trang bị lặp lại khi load lại chunk/world
        if (!pData.getBoolean('equipped_toys')) {

            // 1. Luôn luôn dùng Kiếm (100% Sword)
            let toolType = 'sword';

            // 2. Chọn cấp bậc (Tier) kiếm ngẫu nhiên: gỗ (30%), đá (25%), sắt (20%), vàng (15%), kim cương (7%), netherite (3%)
            let randTier = Math.random();
            let tier = 'wooden';
            if (randTier < 0.30) {
                tier = 'wooden';
            } else if (randTier < 0.55) {
                tier = 'stone';
            } else if (randTier < 0.75) {
                tier = 'iron';
            } else if (randTier < 0.90) {
                tier = 'golden';
            } else if (randTier < 0.97) {
                tier = 'diamond';
            } else {
                tier = 'netherite';
            }

            // Tạo item ID kiếm và trang bị vào tay chính
            let itemId = `minecraft:${tier}_${toolType}`;
            entity.setItemInHand('main_hand', itemId);

            // 3. 20% tỉ lệ cầm khối TNT ở tay phụ (off_hand)
            if (Math.random() < 0.20) {
                entity.setItemInHand('off_hand', 'minecraft:tnt');
            }

            // 4. Chọn cấp bậc mũ ngẫu nhiên: da (30%), xích (25%), sắt (20%), vàng (15%), kim cương (7%), netherite (3%)
            let randHelmet = Math.random();
            let helmetTier = 'leather';
            if (randHelmet < 0.30) {
                helmetTier = 'leather';
            } else if (randHelmet < 0.55) {
                helmetTier = 'chainmail';
            } else if (randHelmet < 0.75) {
                helmetTier = 'iron';
            } else if (randHelmet < 0.90) {
                helmetTier = 'golden';
            } else if (randHelmet < 0.97) {
                helmetTier = 'diamond';
            } else {
                helmetTier = 'netherite';
            }

            // Tạo item ID mũ và trang bị vào ô đầu (Head slot)
            let helmetId = `minecraft:${helmetTier}_helmet`;
            entity.setItemSlot(EquipmentSlot.HEAD, helmetId);

            // Đánh dấu đã trang bị thành công
            pData.putBoolean('equipped_toys', true);
        }
    }
});
