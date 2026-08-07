// Tên file: kubejs/server_scripts/mechanics/mech_petting_team_friendly_fire.js
// Mục đích: Ngăn chặn sát thương đồng đội (Friendly Fire) giữa những người chơi cùng đội FTB Teams, 
//            và giữa các con thú cưng (Petting mod) / đệ (Human Companions) của họ.

(function () {
    const UUID = Java.loadClass('java.util.UUID');
    const FTBTeamsAPI = Java.loadClass('dev.ftb.mods.ftbteams.api.FTBTeamsAPI');

    // Hàm lấy UUID của chủ sở hữu thực thể
    let getEntityOwnerUuid = function (entity) {
        if (!entity) return null;

        if (entity.isPlayer()) {
            return entity.uuid;
        }

        if (entity.nbt) {
            // Trường hợp 1: Companion của mod Human Companions
            if (entity.type.startsWith('humancompanions:')) {
                if (entity.nbt.contains('Owner')) {
                    try {
                        return entity.nbt.getUUID('Owner');
                    } catch (e) {}
                }
            }

            // Trường hợp 2: Pet của mod Petting hoặc Quỷ triệu hồi (summoned_minion)
            let forgeData = entity.nbt.getCompound('ForgeData');
            if (forgeData && forgeData.contains('ownerUUID')) {
                let ownerUuidStr = forgeData.getString('ownerUUID');
                if (ownerUuidStr) {
                    try {
                        return UUID.fromString(ownerUuidStr);
                    } catch (e) {}
                }
            }
            if (entity.nbt.contains('Owner')) {
                try {
                    return entity.nbt.getUUID('Owner');
                } catch (e) {}
            }
        }
        return null;
    };

    EntityEvents.hurt(event => {
        let victim = event.entity;
        let source = event.source;
        if (!victim || !source) return;

        let attacker = source.actual;
        if (!attacker) return;

        let isVictimCompanion = victim.type.startsWith('humancompanions:');
        let isAttackerCompanion = attacker.type.startsWith('humancompanions:');

        // TRƯỜNG HỢP 1: Cả 2 đều là Human Companions chưa được thuê (Hoang dã cùng làng)
        // Ngăn chặn việc bắn tên/chém nhầm làm đánh nhau hỗn loạn trong làng!
        if (isVictimCompanion && isAttackerCompanion) {
            let victimOwnerUuid = getEntityOwnerUuid(victim);
            let attackerOwnerUuid = getEntityOwnerUuid(attacker);

            if (!victimOwnerUuid && !attackerOwnerUuid) {
                event.cancel();
                return;
            }
        }

        let victimOwnerUuid = getEntityOwnerUuid(victim);
        let attackerOwnerUuid = getEntityOwnerUuid(attacker);

        if (!victimOwnerUuid || !attackerOwnerUuid) return;

        // TRƯỜNG HỢP 2: Tự đánh mình, pet/companion tự cắn nhau hoặc chủ đánh đệ của mình
        if (victimOwnerUuid.equals(attackerOwnerUuid)) {
            event.cancel();
            return;
        }

        // TRƯỜNG HỢP 3: Cùng đội FTB Teams
        let shouldCancel = false;
        try {
            let manager = FTBTeamsAPI.api().getManager();
            if (manager && manager.arePlayersInSameTeam(victimOwnerUuid, attackerOwnerUuid)) {
                shouldCancel = true;
            }
        } catch (e) {
            console.error(`[TeamFriendlyFire] Lỗi khi kiểm tra quan hệ tổ đội: ${e}`);
        }

        if (shouldCancel) {
            event.cancel();
            let victimName = victim.isPlayer() ? victim.name.string : `${victim.type} (Pet/Companion của ${victimOwnerUuid.toString().substring(0, 8)})`;
            let attackerName = attacker.isPlayer() ? attacker.name.string : `${attacker.type} (Pet/Companion của ${attackerOwnerUuid.toString().substring(0, 8)})`;
            console.info(`[TeamFriendlyFire] Đã chặn sát thương: ${attackerName} -> ${victimName} (Cùng đội FTB Teams)`);
        }
    });
})();
