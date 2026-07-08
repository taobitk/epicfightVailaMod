// Tên file: kubejs/server_scripts/mechanics/mech_iron_golem_fire_res.js
// Mục đích: Cấp hiệu ứng Kháng lửa (Fire Resistance) vĩnh viễn cho Golem Sắt.

EntityEvents.spawned(event => {
    let entity = event.entity;
    if (entity && entity.type === 'minecraft:iron_golem') {
        // Áp dụng kháng lửa thời gian cực dài (gần như vĩnh viễn) không hạt hiệu ứng
        entity.potionEffects.add('minecraft:fire_resistance', 999999, 0, false, false);
    }
});

// Dự phòng: Khi Golem sắt nhận sát thương, nếu mất hiệu ứng sẽ tự động kích hoạt lại ngay lập tức
EntityEvents.hurt(event => {
    let entity = event.entity;
    if (entity && entity.type === 'minecraft:iron_golem') {
        if (!entity.potionEffects.isActive('minecraft:fire_resistance')) {
            entity.potionEffects.add('minecraft:fire_resistance', 999999, 0, false, false);
        }
    }
});
