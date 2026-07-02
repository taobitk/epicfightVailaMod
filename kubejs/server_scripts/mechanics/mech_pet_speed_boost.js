// Tên file: kubejs/server_scripts/mechanics/mech_pet_speed_boost.js
// Mục đích: Tự động buff tốc độ di chuyển gấp 1.5 lần cho các thực thể đã được thuần hóa (có ownerUUID) từ mod Petting.

const applyPetSpeedBoost = (entity) => {
    if (!entity || !entity.nbt) return;
    
    // Kiểm tra xem thực thể có thuộc về ai không (mod Petting lưu tại ForgeData.ownerUUID)
    let forgeData = entity.nbt.getCompound('ForgeData');
    if (!forgeData || !forgeData.contains('ownerUUID')) return;
    
    let ownerUuidStr = forgeData.getString('ownerUUID');
    if (!ownerUuidStr) return;
    
    let pData = entity.persistentData;
    
    // Tránh cộng dồn buff nếu entity load lại nhiều lần
    if (pData.getBoolean('pet_speed_boosted')) return;
    
    let speedAttr = entity.getAttribute('minecraft:generic.movement_speed');
    if (speedAttr) {
        let baseVal = speedAttr.getBaseValue();
        speedAttr.setBaseValue(baseVal * 1.5);
        pData.putBoolean('pet_speed_boosted', true);
        console.log(`[PetSpeed] Đã buff tốc độ Pet ${entity.type} (chủ: ${ownerUuidStr.substring(0, 8)}...) từ ${baseVal.toFixed(3)} -> ${(baseVal * 1.5).toFixed(3)}`);
    }
};

// 1. Áp dụng khi Pet được spawn ra hoặc load chunk
EntityEvents.spawned(event => {
    applyPetSpeedBoost(event.entity);
});

// 2. Dự phòng: Áp dụng khi người chơi tương tác với Pet (chuột phải)
//    để đảm bảo buff được gán ngay sau khi thuần hóa thành công
ItemEvents.entityInteracted(event => {
    applyPetSpeedBoost(event.target);
});
