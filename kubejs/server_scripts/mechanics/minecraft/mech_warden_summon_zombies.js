// Tên file: kubejs/server_scripts/mechanics/mech_warden_summon_zombies.js
// Mục đích: Warden mất mỗi 100 HP sẽ triệu hồi 1-3 Zombie full giáp và kiếm Kim Cương, ko rơi đồ.

console.info('[WardenBoss] Script loaded OK.');

EntityEvents.hurt(event => {
    let entity = event.entity;
    if (entity && entity.type === 'minecraft:warden') {
        console.info(`[WardenBoss] >>> Warden was HIT! HP=${entity.health.toFixed(1)} | Damage=${event.damage.toFixed(2)}`);
        let pData = entity.persistentData;
        
        // Khởi tạo mốc kích hoạt đầu tiên nếu chưa có (Warden Max HP là 800)
        if (!pData.contains('nextHpThreshold')) {
            pData.putInt('nextHpThreshold', 700);
        }
        
        let nextThreshold = pData.getInt('nextHpThreshold');
        let currentHp = entity.health;
        let damage = event.damage;
        let healthAfter = currentHp - damage;
        
        console.log(`[WardenDebug] Warden nhận ${damage.toFixed(2)} sát thương. Máu trước: ${currentHp.toFixed(2)} -> Máu sau: ${healthAfter.toFixed(2)}. Mốc HP kích hoạt tiếp theo: ${nextThreshold}`);
        
        // Kiểm tra nếu lượng máu sau sát thương vượt qua mốc tiếp theo
        if (healthAfter <= nextThreshold && nextThreshold > 0) {
            let crossedCount = 0;
            let oldThreshold = nextThreshold;
            
            // Xử lý trường hợp nhận sát thương cực lớn vượt nhiều mốc cùng lúc
            while (healthAfter <= nextThreshold && nextThreshold > 0) {
                crossedCount++;
                nextThreshold -= 100;
            }
            
            console.log(`[WardenDebug] Warden ĐÃ VƯỢT MỐC HP! Vượt qua ${crossedCount} mốc từ mốc ${oldThreshold}. Mốc HP kích hoạt tiếp theo đặt thành: ${nextThreshold}`);
            
            // Cập nhật lại mốc kích hoạt tiếp theo
            pData.putInt('nextHpThreshold', nextThreshold);
            
            let level = entity.block.level;
            let spawnX = entity.x;
            let spawnY = entity.y;
            let spawnZ = entity.z;
            
            // Triệu hồi 1-3 zombie cho mỗi mốc bị vượt qua
            for (let t = 0; t < crossedCount; t++) {
                let numZombies = Math.floor(Math.random() * 3) + 1; // 1 đến 3 con
                console.log(`[WardenDebug] Triệu hồi đệ cho mốc HP thứ ${t+1}: Số lượng ${numZombies} Zombie`);
                
                for (let i = 0; i < numZombies; i++) {
                    let zombie = level.createEntity('minecraft:zombie');
                    if (zombie) {
                        // Thiết lập vị trí ngẫu nhiên xung quanh Warden
                        let ox = (Math.random() - 0.5) * 4;
                        let oz = (Math.random() - 0.5) * 4;
                        zombie.setPosition(spawnX + ox, spawnY, spawnZ + oz);
                        
                        // Triệu hồi vào thế giới trước để hoàn tất khởi tạo mặc định
                        zombie.spawn();
                        
                        // Trang bị full giáp kim cương đè lên giáp mặc định sau khi spawn
                        zombie.setItemSlot('head', 'minecraft:diamond_helmet');
                        zombie.setItemSlot('chest', 'minecraft:diamond_chestplate');
                        zombie.setItemSlot('legs', 'minecraft:diamond_leggings');
                        zombie.setItemSlot('feet', 'minecraft:diamond_boots');
                        
                        // Trang bị kiếm kim cương
                        zombie.setItemInHand('main_hand', 'minecraft:diamond_sword');
                        
                        // Khóa tỷ lệ rơi đồ của các ô trang bị về 0%
                        zombie.setDropChance('head', 0.0);
                        zombie.setDropChance('chest', 0.0);
                        zombie.setDropChance('legs', 0.0);
                        zombie.setDropChance('feet', 0.0);
                        zombie.setDropChance('mainhand', 0.0);
                        
                        console.log(`[WardenDebug] -> Đã triệu hồi thành công Zombie đệ #${i+1} tại tọa độ (${(spawnX+ox).toFixed(1)}, ${spawnY.toFixed(1)}, ${(spawnZ+oz).toFixed(1)})`);
                    }
                }
            }
            
            console.log(`[WardenBoss] Warden mất máu vượt mốc! Đã triệu hồi đệ Zombie bảo vệ.`);
        }
    }
});
