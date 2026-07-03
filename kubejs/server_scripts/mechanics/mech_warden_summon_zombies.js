// Tên file: kubejs/server_scripts/mechanics/mech_warden_summon_zombies.js
// Mục đích: Warden mất mỗi 100 HP sẽ triệu hồi 1-3 Zombie full giáp và kiếm Kim Cương, ko rơi đồ.

EntityEvents.hurt(event => {
    let entity = event.entity;
    if (entity && entity.type === 'minecraft:warden') {
        let pData = entity.persistentData;
        
        // Khởi tạo mốc kích hoạt đầu tiên nếu chưa có (Warden Max HP là 800)
        if (!pData.contains('nextHpThreshold')) {
            pData.putInt('nextHpThreshold', 700);
        }
        
        let nextThreshold = pData.getInt('nextHpThreshold');
        let currentHp = entity.health;
        let damage = event.amount;
        let healthAfter = currentHp - damage;
        
        // Kiểm tra nếu lượng máu sau sát thương vượt qua mốc tiếp theo
        if (healthAfter <= nextThreshold && nextThreshold > 0) {
            let crossedCount = 0;
            
            // Xử lý trường hợp nhận sát thương cực lớn vượt nhiều mốc cùng lúc
            while (healthAfter <= nextThreshold && nextThreshold > 0) {
                crossedCount++;
                nextThreshold -= 100;
            }
            
            // Cập nhật lại mốc kích hoạt tiếp theo
            pData.putInt('nextHpThreshold', nextThreshold);
            
            let level = entity.block.level;
            let spawnX = entity.x;
            let spawnY = entity.y;
            let spawnZ = entity.z;
            
            // Triệu hồi 1-3 zombie cho mỗi mốc bị vượt qua
            for (let t = 0; t < crossedCount; t++) {
                let numZombies = Math.floor(Math.random() * 3) + 1; // 1 đến 3 con
                
                for (let i = 0; i < numZombies; i++) {
                    let zombie = level.createEntity('minecraft:zombie');
                    if (zombie) {
                        // Thiết lập vị trí ngẫu nhiên xung quanh Warden
                        let ox = (Math.random() - 0.5) * 4;
                        let oz = (Math.random() - 0.5) * 4;
                        zombie.setPosition(spawnX + ox, spawnY, spawnZ + oz);
                        
                        // Trang bị full giáp kim cương
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
                        
                        // Triệu hồi vào thế giới
                        zombie.spawn();
                    }
                }
            }
            
            console.log(`[WardenBoss] Warden mất máu vượt mốc! Đã triệu hồi đệ Zombie bảo vệ.`);
        }
    }
});
