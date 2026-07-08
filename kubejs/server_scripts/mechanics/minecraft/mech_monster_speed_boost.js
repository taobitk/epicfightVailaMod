// Tên file: kubejs/server_scripts/mechanics/mech_monster_speed_boost.js
// Mục đích: Tự động tăng tốc độ di chuyển gốc của TOÀN BỘ quái vật (bao gồm quái vanilla và quái mod) lên gấp 1.35 lần khi spawn.

EntityEvents.spawned(event => {
    let entity = event.entity;

    // Chỉ áp dụng cho quái vật (Monsters)
    if (entity && entity.isMonster()) {
        let speedAttr = entity.getAttribute('minecraft:generic.movement_speed');
        if (speedAttr) {
            let pData = entity.persistentData;

            // Sử dụng persistentData để tránh cộng dồn tốc độ nếu sự kiện spawn bị kích hoạt lại nhiều lần (ví dụ khi reload chunk)
            if (!pData.getBoolean('speed_boosted_1_35')) {
                let baseValue = speedAttr.getBaseValue();
                let newValue = baseValue * 1.35;

                speedAttr.setBaseValue(newValue);
                pData.putBoolean('speed_boosted_1_35', true);

                // Ghi nhận log debug nhẹ để theo dõi
                // console.log(`[SpeedBoost] Đã tăng tốc ${entity.type} từ ${baseValue.toFixed(3)} -> ${newValue.toFixed(3)}`);
            }
        }
    }
});
