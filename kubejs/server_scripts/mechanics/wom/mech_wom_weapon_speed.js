// Tên file: kubejs/server_scripts/mechanics/mech_wom_weapon_speed.js
// Mục đích: Buff chỉ số động cho các vũ khí đặc biệt (wom:herrscher, wom:moonless, wom:antitheus, wom:satsujin, efn:crimson_moon) khi cầm trên tay.

PlayerEvents.tick(event => {
    let player = event.player;
    let mainHand = player.mainHandItem;
    
    let isHerrscher = mainHand.id === 'wom:herrscher';
    let isMoonless = mainHand.id === 'wom:moonless';
    let isAntitheus = mainHand.id === 'wom:antitheus';
    let isSatsujin = mainHand.id === 'wom:satsujin';
    let isCrimsonMoon = mainHand.id === 'efn:crimson_moon';
    
    let pData = player.persistentData;
    
    if (isHerrscher || isMoonless || isAntitheus || isSatsujin || isCrimsonMoon) {
        let speedBoost = 0;
        let damageBoost = 0;
        let activeWeapon = "";
        
        if (isHerrscher) {
            speedBoost = 0.25;  // 1.75 -> 2.0
            damageBoost = 4.0;  // 6 -> 10 Dame
            activeWeapon = 'herrscher';
        } else if (isMoonless) {
            speedBoost = 0.30;  // 1.70 -> 2.0
            damageBoost = 3.0;  // 7 -> 10 Dame
            activeWeapon = 'moonless';
        } else if (isAntitheus) {
            speedBoost = 0.10;  // 1.90 -> 2.0
            damageBoost = 4.0;  // 8 -> 12 Dame
            activeWeapon = 'antitheus';
        } else if (isSatsujin) {
            speedBoost = 0.0;   // Giữ nguyên tốc độ gốc 2.20
            damageBoost = 5.0;  // 7 -> 12 Dame
            activeWeapon = 'satsujin';
        } else if (isCrimsonMoon) {
            speedBoost = 0.60;  // 1.40 -> 2.0
            damageBoost = 4.0;  // 8 -> 12 Dame
            activeWeapon = 'crimson_moon';
        }
        
        // Chỉ chạy lệnh chỉnh thuộc tính khi người chơi đổi vũ khí trên tay
        if (pData.getString('wom_boosted_weapon') !== activeWeapon) {
            if (speedBoost > 0) {
                player.modifyAttribute('minecraft:generic.attack_speed', 'wom_weapon_speed_boost', speedBoost, 'addition');
            } else {
                player.removeAttribute('minecraft:generic.attack_speed', 'wom_weapon_speed_boost');
            }
            
            if (damageBoost > 0) {
                player.modifyAttribute('minecraft:generic.attack_damage', 'wom_weapon_damage_boost', damageBoost, 'addition');
            } else {
                player.removeAttribute('minecraft:generic.attack_damage', 'wom_weapon_damage_boost');
            }
            
            pData.putString('wom_boosted_weapon', activeWeapon);
        }
    } else {
        // Chỉ xóa thuộc tính khi người chơi bỏ cất vũ khí đi
        if (pData.contains('wom_boosted_weapon')) {
            player.removeAttribute('minecraft:generic.attack_speed', 'wom_weapon_speed_boost');
            player.removeAttribute('minecraft:generic.attack_damage', 'wom_weapon_damage_boost');
            pData.remove('wom_boosted_weapon');
        }
    }
});
