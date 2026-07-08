// Tên file: kubejs/server_scripts/mechanics/mech_wither_summon_minions.js
// Mục đích: Wither mất mỗi 80 HP sẽ triệu hồi 5 Wither Skeleton 200 HP, trang bị hỗn hợp giáp/kiếm Diamond/Netherite, ko rơi đồ. Tối đa 10 đợt.

EntityEvents.hurt(event => {
    let entity = event.entity;
    if (entity && entity.type === 'minecraft:wither') {
        let pData = entity.persistentData;
        
        // Khởi tạo mốc HP kích hoạt tiếp theo nếu chưa có (Wither Max HP là 900)
        if (!pData.contains('nextHpThreshold')) {
            pData.putInt('nextHpThreshold', 820);
        }
        
        // Khởi tạo bộ đếm số đợt triệu hồi
        if (!pData.contains('triggeredWavesCount')) {
            pData.putInt('triggeredWavesCount', 0);
        }
        
        let triggeredWaves = pData.getInt('triggeredWavesCount');
        
        // Nếu đã đủ 10 đợt triệu hồi, không làm gì thêm
        if (triggeredWaves >= 10) return;
        
        let nextThreshold = pData.getInt('nextHpThreshold');
        let currentHp = entity.health;
        let damage = event.damage;
        let healthAfter = currentHp - damage;
        
        console.log(`[WitherDebug] Wither nhận ${damage.toFixed(2)} sát thương. Máu trước: ${currentHp.toFixed(2)} -> Máu sau: ${healthAfter.toFixed(2)}. Mốc HP kích hoạt tiếp theo: ${nextThreshold} | Đợt đã triệu hồi: ${triggeredWaves}/10`);
        
        if (healthAfter <= nextThreshold && nextThreshold > 0) {
            let crossedCount = 0;
            let oldThreshold = nextThreshold;
            
            while (healthAfter <= nextThreshold && nextThreshold > 0) {
                if (triggeredWaves < 10) {
                    crossedCount++;
                    triggeredWaves++;
                }
                nextThreshold -= 80;
            }
            
            console.log(`[WitherDebug] Wither ĐÃ VƯỢT MỐC HP! Vượt qua ${crossedCount} mốc từ mốc ${oldThreshold}. Mốc HP tiếp theo đặt thành: ${nextThreshold} | Tổng đợt kích hoạt: ${triggeredWaves}/10`);
            
            // Cập nhật lại mốc và số đợt kích hoạt
            pData.putInt('nextHpThreshold', nextThreshold);
            pData.putInt('triggeredWavesCount', triggeredWaves);
            
            if (crossedCount <= 0) return;
            
            let level = entity.block.level;
            let spawnX = entity.x;
            let spawnY = entity.y;
            let spawnZ = entity.z;
            
            // Hàm lấy ngẫu nhiên Diamond hoặc Netherite
            let getTier = () => Math.random() < 0.5 ? 'diamond' : 'netherite';
            
            // Triệu hồi 5 con đệ cho mỗi mốc vượt qua
            for (let t = 0; t < crossedCount; t++) {
                console.log(`[WitherDebug] Đang triệu hồi đệ cho mốc thứ ${t + 1}: 5 con Wither Skeleton`);
                
                for (let i = 0; i < 5; i++) {
                    let minion = level.createEntity('minecraft:wither_skeleton');
                    if (minion) {
                        // Sinh đệ xung quanh Wither
                        let ox = (Math.random() - 0.5) * 6;
                        let oz = (Math.random() - 0.5) * 6;
                        minion.setPosition(spawnX + ox, spawnY, spawnZ + oz);
                        
                        // Đặt cờ để tránh bị script trang bị đồ ngẫu nhiên đè mất mũ
                        minion.persistentData.putBoolean('equipped_toys', true);
                        
                        // Triệu hồi thực thể trước để khởi tạo mặc định của game xong xuôi
                        minion.spawn();
                        
                        // Set HP tối đa của đệ là 200 HP và hồi đầy máu
                        minion.setAttributeBaseValue('minecraft:generic.max_health', 200.0);
                        minion.health = 200.0;
                        
                        // Trang bị hỗn hợp ngẫu nhiên giáp Diamond/Netherite
                        minion.setItemSlot('head', `minecraft:${getTier()}_helmet`);
                        minion.setItemSlot('chest', `minecraft:${getTier()}_chestplate`);
                        minion.setItemSlot('legs', `minecraft:${getTier()}_leggings`);
                        minion.setItemSlot('feet', `minecraft:${getTier()}_boots`);
                        
                        // Trang bị kiếm Diamond/Netherite ngẫu nhiên
                        minion.setItemInHand('main_hand', `minecraft:${getTier()}_sword`);
                        
                        // Khóa tỷ lệ rơi đồ về 0%
                        minion.setDropChance('head', 0.0);
                        minion.setDropChance('chest', 0.0);
                        minion.setDropChance('legs', 0.0);
                        minion.setDropChance('feet', 0.0);
                        minion.setDropChance('mainhand', 0.0);
                    }
                }
            }
            
            console.log(`[WitherBoss] Wither mất máu vượt mốc! Đã triệu hồi 5 đệ Wither Skeleton bảo vệ.`);
        }
    }
});
