// File: kubejs/server_scripts/mechanics/shield_system.js
// Purpose: Đọc giá trị giáp ảo từ NBT (do Java tính toán) và đồng bộ lên client để vẽ HUD.
// Mọi logic tính toán (maxShield, hồi giáp, trừ sát thương) đều nằm ở Java Mixin.

PlayerEvents.tick(event => {
    let player = event.player;

    // Chỉ chạy mỗi giây (20 tick)
    if (player.age % 20 !== 0) return;

    let pData = player.persistentData;

    // Đọc giá trị do Java ghi vào NBT
    let currentShield = pData.getDouble('shieldCurrent');
    let maxShield     = pData.getDouble('shieldMax');

    // Gửi lên client để HUD vẽ thanh giáp
    player.sendData('shield_sync', {
        current: currentShield,
        max: maxShield
    });
});
