// Tên file: kubejs/server_scripts/mechanics/general/mech_ally_protection.js
// Mục đích: Đồng bộ hóa mục tiêu tấn công cho đệ (Companion) và Pet (Petting) của cùng một chủ sở hữu.
//            Nếu một trong số họ bị tấn công bởi một thực thể khác (quái vật), tất cả đệ và thú cưng khác
//            ở gần đó sẽ cùng lao vào bảo vệ và tấn công kẻ thù đó.
//            Hỗ trợ cả các Companion hoang dã chưa thuê ở làng tự bảo vệ lẫn nhau khi gặp quái.

(function () {
    const UUID = Java.loadClass('java.util.UUID');

    // Hàm lấy UUID của chủ sở hữu thực thể (nếu là pet/companion thì lấy từ NBT)
    let getEntityOwnerUuid = function (entity) {
        if (!entity || !entity.nbt) return null;

        // Companion của mod Human Companions
        if (entity.type.startsWith('humancompanions:')) {
            if (entity.nbt.contains('Owner')) {
                try {
                    return entity.nbt.getUUID('Owner');
                } catch (e) {
                    console.error(`[AllyTarget-Log] Loi khi doc Owner tu Companion: ${e}`);
                }
            }
        }

        // Pet của mod Petting
        let forgeData = entity.nbt.getCompound('ForgeData');
        if (forgeData && forgeData.contains('ownerUUID')) {
            let ownerUuidStr = forgeData.getString('ownerUUID');
            if (ownerUuidStr) {
                try {
                    return UUID.fromString(ownerUuidStr);
                } catch (e) {
                    console.error(`[AllyTarget-Log] Loi khi parse ownerUUID tu Pet: ${e}`);
                }
            }
        }
        return null;
    };

    EntityEvents.hurt(event => {
        let victim = event.entity;
        let source = event.source;
        if (!victim || !source) return;

        // Kẻ tấn công thực sự (phải là thực thể sống)
        let attacker = source.actual;
        if (!attacker || !attacker.isLiving()) return;

        // Chỉ xử lý nếu nạn nhân là Pet hoặc Companion
        let isCompanion = victim.type.startsWith('humancompanions:');
        let isPet = false;
        let forgeData = victim.nbt ? victim.nbt.getCompound('ForgeData') : null;
        if (forgeData && forgeData.contains('ownerUUID')) {
            isPet = true;
        }

        if (isCompanion || isPet) {
            let ownerUuid = getEntityOwnerUuid(victim);
            let entities = event.level.getEntitiesWithin(victim.boundingBox.inflate(32));
            let allies = [];

            if (ownerUuid) {
                // TRƯỜNG HỢP A: Thực thể đã được thuê/tame (Có chủ sở hữu)
                console.log(`[AllyTarget-Log] Phat hien ${victim.type} (da tame, chu: ${ownerUuid}) bi tan cong boi ${attacker.type}`);

                entities.forEach(e => {
                    if (e && e.isLiving()) {
                        if (e.uuid.equals(victim.uuid)) return; // Bỏ qua chính nạn nhân
                        
                        let allyOwnerUuid = getEntityOwnerUuid(e);
                        if (allyOwnerUuid && allyOwnerUuid.equals(ownerUuid)) {
                            allies.push(e);
                        }
                    }
                });
            } else if (isCompanion) {
                // TRƯỜNG HỢP B: Companion hoang dã bảo vệ làng (Chưa được thuê)
                console.log(`[AllyTarget-Log] Phat hien Companion hoang da ${victim.type} bi tan cong boi ${attacker.type}`);

                entities.forEach(e => {
                    if (e && e.isLiving()) {
                        if (e.uuid.equals(victim.uuid)) return; // Bỏ qua chính nạn nhân
                        
                        // Nếu là Companion cùng hệ hoang dã (cũng chưa được thuê)
                        if (e.type.startsWith('humancompanions:') && e.nbt && !e.nbt.contains('Owner')) {
                            allies.push(e);
                        }
                    }
                });
            }

            if (allies.length > 0) {
                console.log(`[AllyTarget-Log] Tim thay ${allies.length} dong doi xung quanh de cuu vien.`);
                
                // Ra lệnh cho toàn bộ đồng đội tấn công kẻ gây hấn
                allies.forEach(ally => {
                    try {
                        ally.setTarget(attacker);
                        ally.setLastHurtByMob(attacker);
                        console.log(`[AllyTarget-Log] Da goi cuu vien thanh cong: ${ally.type} -> tan cong ${attacker.type}`);
                    } catch (err) {
                        console.error(`[AllyTarget-Log] Loi khi ra lenh setTarget cho ${ally.type}: ${err}`);
                    }
                });
            }
        }
    });
})();
