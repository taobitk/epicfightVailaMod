// Tên file: kubejs/server_scripts/mechanics/mech_dragon_summon_minions.js
// Mục đích: Ender Dragon mất mỗi 80 HP sẽ triệu hồi 10 đệ (zombie, wither_skeleton, piglin_brute) full giáp netherite prot 2, kiếm netherite sharp 10, ko rơi đồ. Giới hạn tối đa 15 đợt.

EntityEvents.hurt(event => {
    let entity = event.entity;
    if (entity && entity.type === 'minecraft:ender_dragon') {
        let pData = entity.persistentData;

        // Khởi tạo mốc HP kích hoạt tiếp theo nếu chưa có (Rồng Ender Max HP là 1500)
        if (!pData.contains('nextHpThreshold')) {
            pData.putInt('nextHpThreshold', 1420);
        }

        // Khởi tạo bộ đếm số đợt triệu hồi
        if (!pData.contains('triggeredWavesCount')) {
            pData.putInt('triggeredWavesCount', 0);
        }

        let triggeredWaves = pData.getInt('triggeredWavesCount');

        // Nếu đã đủ 15 đợt triệu hồi, không làm gì thêm
        if (triggeredWaves >= 15) return;

        let nextThreshold = pData.getInt('nextHpThreshold');
        let currentHp = entity.health;
        let damage = event.damage;
        let healthAfter = currentHp - damage;

        console.log(`[DragonDebug] Rồng Ender nhận ${damage.toFixed(2)} sát thương. Máu trước: ${currentHp.toFixed(2)} -> Máu sau: ${healthAfter.toFixed(2)}. Mốc HP kích hoạt tiếp theo: ${nextThreshold} | Đợt đã triệu hồi: ${triggeredWaves}/15`);

        if (healthAfter <= nextThreshold && nextThreshold > 0) {
            let crossedCount = 0;
            let oldThreshold = nextThreshold;

            while (healthAfter <= nextThreshold && nextThreshold > 0) {
                if (triggeredWaves < 15) {
                    crossedCount++;
                    triggeredWaves++;
                }
                nextThreshold -= 80; // Bước nhảy giảm xuống 80 máu
            }

            console.log(`[DragonDebug] Rồng Ender ĐÃ VƯỢT MỐC HP! Vượt qua ${crossedCount} mốc từ mốc ${oldThreshold}. Mốc HP tiếp theo đặt thành: ${nextThreshold} | Tổng đợt kích hoạt: ${triggeredWaves}/15`);

            // Cập nhật lại mốc và số đợt kích hoạt
            pData.putInt('nextHpThreshold', nextThreshold);
            pData.putInt('triggeredWavesCount', triggeredWaves);

            if (crossedCount <= 0) return;

            let level = entity.block.level;

            // Các loại đệ có thể triệu hồi: Zombie, Wither Skeleton, Piglin Brute
            let minionTypes = [
                'minecraft:zombie',
                'minecraft:wither_skeleton',
                'minecraft:piglin_brute'
            ];

            // Chuẩn bị trang bị Netherite có enchant
            let helmet = Item.of('minecraft:netherite_helmet').enchant('minecraft:protection', 2);
            let chestplate = Item.of('minecraft:netherite_chestplate').enchant('minecraft:protection', 2);
            let leggings = Item.of('minecraft:netherite_leggings').enchant('minecraft:protection', 2);
            let boots = Item.of('minecraft:netherite_boots').enchant('minecraft:protection', 2);
            let sword = Item.of('minecraft:netherite_sword').enchant('minecraft:sharpness', 10);

            // Triệu hồi 10 con đệ cho mỗi mốc vượt qua
            for (let t = 0; t < crossedCount; t++) {
                console.log(`[DragonDebug] Đang triệu hồi đệ cho mốc thứ ${t + 1}: 10 con`);

                for (let i = 0; i < 10; i++) {
                    let randomType = minionTypes[Math.floor(Math.random() * minionTypes.length)];
                    let minion = level.createEntity(randomType);

                    if (minion) {
                        // Sinh đệ ở quanh trung tâm đảo chính The End (thường là cột cổng đá nền X=0, Z=0, Y=65)
                        let rx = (Math.random() - 0.5) * 20;
                        let rz = (Math.random() - 0.5) * 20;
                        minion.setPosition(rx, 65, rz);

                        // Đánh dấu để tránh bị script mech_mob_equip_toys.js ghi đè mũ khác
                        minion.persistentData.putBoolean('equipped_toys', true);

                        // Triệu hồi thực thể vào thế giới trước để hoàn tất khởi tạo mặc định của game
                        minion.spawn();

                        // Sau khi spawn mới trang bị đồ Netherite đè lên đồ mặc định (tránh cung/kiếm đá của skeleton ghi đè)
                        minion.setItemSlot('head', helmet);
                        minion.setItemSlot('chest', chestplate);
                        minion.setItemSlot('legs', leggings);
                        minion.setItemSlot('feet', boots);
                        minion.setItemInHand('main_hand', sword);

                        // Khóa tỷ lệ rơi đồ về 0%
                        minion.setDropChance('head', 0.0);
                        minion.setDropChance('chest', 0.0);
                        minion.setDropChance('legs', 0.0);
                        minion.setDropChance('feet', 0.0);
                        minion.setDropChance('mainhand', 0.0);
                    }
                }
            }

            console.log(`[DragonBoss] Rồng Ender mất máu vượt mốc! Đã triệu hồi 10 đệ Netherite bảo vệ.`);
        }
    }
});
