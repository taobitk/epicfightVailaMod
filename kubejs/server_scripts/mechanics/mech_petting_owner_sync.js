// Tên file: kubejs/server_scripts/mechanics/mech_petting_owner_sync.js
// Mục đích: Đồng bộ Owner UUID và Chống sát thương đồng đội (Friendly Fire) giữa chủ sở hữu và Pet của mod Petting.

const UUID = Java.loadClass('java.util.UUID');

const syncOwnerTag = (entity) => {
    if (!entity || !entity.nbt) return;
    
    // Đọc thẻ ForgeData (nơi mod Petting lưu thông tin taming)
    let forgeData = entity.nbt.getCompound('ForgeData');
    if (forgeData && forgeData.contains('ownerUUID')) {
        let ownerUuidStr = forgeData.getString('ownerUUID');
        if (ownerUuidStr) {
            // Nếu root NBT của thực thể chưa có thẻ Owner
            if (!entity.nbt.contains('Owner')) {
                try {
                    let javaUuid = UUID.fromString(ownerUuidStr);
                    // Ghi UUID của chủ sở hữu vào thẻ 'Owner' gốc của Minecraft
                    entity.nbt.putUUID('Owner', javaUuid);
                    entity.mergeNbt(entity.nbt); // Đồng bộ lại NBT vào thực thể
                    console.log(`[PetSync] Đã đồng bộ Owner UUID (${ownerUuidStr}) cho pet ${entity.type}`);
                } catch (e) {
                    console.error("[PetSync] Lỗi chuyển đổi ownerUUID sang UUID: " + e);
                }
            }
        }
    }
};

// 1. Đồng bộ khi Pet được spawn ra hoặc load chunk
EntityEvents.spawned(event => {
    syncOwnerTag(event.entity);
});

// 2. Chống người chơi gây sát thương lên Pet của chính mình
EntityEvents.hurt(event => {
    let entity = event.entity;
    let source = event.source;
    
    // Kiểm tra nếu nguồn gây sát thương là Người chơi
    if (source.player) {
        let player = source.player;
        if (entity.nbt) {
            let forgeData = entity.nbt.getCompound('ForgeData');
            if (forgeData && forgeData.contains('ownerUUID')) {
                let ownerUuidStr = forgeData.getString('ownerUUID');
                // Nếu UUID của người chơi trùng khớp với ownerUUID của Pet -> Hủy sát thương
                if (player.uuid.toString() === ownerUuidStr) {
                    event.cancel();
                }
            }
        }
    }
    
    // Đồng bộ lại Owner tag khi nhận sát thương từ nguồn khác
    syncOwnerTag(entity);
});

// 3. Đồng bộ khi người chơi tương tác chuột phải với Pet (ngồi, mở hòm đồ, đổi tên...)
ItemEvents.entityInteracted(event => {
    syncOwnerTag(event.target);
});
