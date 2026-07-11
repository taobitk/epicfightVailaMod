// Tên file: kubejs/server_scripts/mechanics/mech_mob_equip_toys.js
// Mục đích: Ép các loại zombie, skeleton và biến thể của chúng luôn spawn với Kiếm ở tay chính,
//   - Zombie: 5% có thêm TNT ở tay phụ
//   - Skeleton: 10% spawn cầm cung tên thay vì kiếm
//   - Tất cả đều luôn đội mũ.

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
        'minecraft:zombified_piglin',
        'minecraft:zombie_horse',
        'minecraft:skeleton',
        'minecraft:stray',
        'minecraft:wither_skeleton',
        'minecraft:skeleton_horse'
    ];

    // Phân loại zombie vs skeleton
    const zombieMobs = ['minecraft:zombie', 'minecraft:husk', 'minecraft:drowned', 'minecraft:zombie_villager', 'minecraft:zombified_piglin', 'minecraft:zombie_horse'];
    const skeletonMobs = ['minecraft:skeleton', 'minecraft:stray', 'minecraft:wither_skeleton', 'minecraft:skeleton_horse'];

    if (targetMobs.includes(entity.type)) {
        let pData = entity.persistentData;

        // Tránh trang bị lặp lại khi load lại chunk/world
        if (!pData.getBoolean('equipped_toys')) {

            // Skeleton: 10% cầm cung tên, 90% cầm kiếm
            if (skeletonMobs.includes(entity.type) && Math.random() < 0.10) {
                // Trang bị cung ở tay chính, tên ở tay phụ
                entity.setItemInHand('main_hand', 'minecraft:bow');
                entity.setDropChance('mainhand', 0.0);
                entity.setItemInHand('off_hand', 'minecraft:arrow');
                entity.setDropChance('offhand', 0.0);
            } else {
                // 1. Luôn luôn dùng Kiếm (100% Sword, trừ skeleton 10% cung)
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
                entity.setDropChance('mainhand', 0.0);

                // 3. Zombie: 5% tỉ lệ cầm khối TNT ở tay phụ (off_hand)
                if (zombieMobs.includes(entity.type) && Math.random() < 0.05) {
                    entity.setItemInHand('off_hand', 'minecraft:tnt');
                    entity.setDropChance('offhand', 0.0);
                }
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
            entity.setDropChance('head', 0.0);

            // Đánh dấu đã trang bị thành công
            pData.putBoolean('equipped_toys', true);
        }
    }
});
