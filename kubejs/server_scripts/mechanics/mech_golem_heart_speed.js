// Tên file: kubejs/server_scripts/mechanics/mech_golem_heart_speed.js
// Mục đích: Tự động buff thêm +1.2 Tốc độ đánh cho người chơi khi cầm Golem Heart trên tay.

PlayerEvents.tick(event => {
    let player = event.player;
    let mainHand = player.mainHandItem;
    
    let isGolemHeart = mainHand.id === 'super_golem:golem_heart';
    let pData = player.persistentData;
    
    if (isGolemHeart) {
        // Chỉ chạy lệnh chỉnh thuộc tính khi người chơi cầm Golem Heart lên tay
        if (!pData.getBoolean('golem_heart_boosted')) {
            player.modifyAttribute('minecraft:generic.attack_speed', 'golem_heart_speed_modifier', 1.20, 'addition'); // Gốc 0.98 -> +1.20 thành 2.18
            pData.putBoolean('golem_heart_boosted', true);
        }
    } else {
        // Chỉ xóa thuộc tính khi người chơi cất đi
        if (pData.getBoolean('golem_heart_boosted')) {
            player.removeAttribute('minecraft:generic.attack_speed', 'golem_heart_speed_modifier');
            pData.remove('golem_heart_boosted');
        }
    }
});
