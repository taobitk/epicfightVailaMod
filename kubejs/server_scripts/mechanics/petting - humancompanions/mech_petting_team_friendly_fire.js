// Tên file: kubejs/server_scripts/mechanics/mech_petting_team_friendly_fire.js
// Mục đích: Ngăn chặn sát thương đồng đội (Friendly Fire) giữa những người chơi cùng đội FTB Teams, 
//            và giữa các con thú cưng (Petting mod) / đệ (Human Companions) của họ.

(function () {
    const UUID = Java.loadClass('java.util.UUID');
    const FTBTeamsAPI = Java.loadClass('dev.ftb.mods.ftbteams.api.FTBTeamsAPI');

    // Hàm lấy UUID của chủ sở hữu thực thể (nếu là người chơi thì lấy trực tiếp, nếu là pet/companion thì lấy từ NBT)
    let getEntityOwnerUuid = function (entity) {
        if (!entity) return null;

        // Nếu là người chơi
        if (entity.isPlayer()) {
            return entity.uuid;
        }

        if (entity.nbt) {
            // Trường hợp 1: Nếu là Companion của mod Human Companions (lưu trong root Owner tag)
            if (entity.type.startsWith('humancompanions:')) {
                if (entity.nbt.contains('Owner')) {
                    try {
                        return entity.nbt.getUUID('Owner');
                    } catch (e) {}
                }
            }

            // Trường hợp 2: Nếu là pet của mod Petting (lưu trong ForgeData.ownerUUID)
            let forgeData = entity.nbt.getCompound('ForgeData');
            if (forgeData && forgeData.contains('ownerUUID')) {
                let ownerUuidStr = forgeData.getString('ownerUUID');
                if (ownerUuidStr) {
                    try {
                        return UUID.fromString(ownerUuidStr);
                    } catch (e) {
                        // Tránh ghi log quá nhiều
                    }
                }
            }
        }
        return null;
    };

    EntityEvents.hurt(event => {
        let victim = event.entity;
        let source = event.source;
        if (!victim || !source) return;

        // Lấy kẻ tấn công thực sự
        let attacker = source.actual;
        if (!attacker) return;

        // Lấy UUID đại diện cho 2 bên (người chơi hoặc chủ sở hữu của pet/companion)
        let victimOwnerUuid = getEntityOwnerUuid(victim);
        let attackerOwnerUuid = getEntityOwnerUuid(attacker);

        // Nếu một trong hai bên không có chủ sở hữu, bỏ qua
        if (!victimOwnerUuid || !attackerOwnerUuid) return;

        // Nếu tự đánh mình hoặc pet/companion tự cắn mình hoặc chủ đánh đệ của mình -> Hủy sát thương
        if (victimOwnerUuid.equals(attackerOwnerUuid)) {
            event.cancel();
            return;
        }

        let shouldCancel = false;
        try {
            // Lấy Team Manager từ FTB Teams API
            let manager = FTBTeamsAPI.api().getManager();
            if (manager) {
                // Kiểm tra xem hai chủ sở hữu này có chung một đội hay không
                if (manager.arePlayersInSameTeam(victimOwnerUuid, attackerOwnerUuid)) {
                    shouldCancel = true;
                }
            }
        } catch (e) {
            console.error(`[TeamFriendlyFire] Lỗi khi kiểm tra quan hệ tổ đội: ${e}`);
        }

        if (shouldCancel) {
            // Hủy sự kiện gây sát thương
            event.cancel();

            // Ghi log debug chi tiết
            let victimName = victim.isPlayer() ? victim.name.string : `${victim.type} (Pet/Companion của ${victimOwnerUuid.toString().substring(0, 8)})`;
            let attackerName = attacker.isPlayer() ? attacker.name.string : `${attacker.type} (Pet/Companion của ${attackerOwnerUuid.toString().substring(0, 8)})`;
            console.info(`[TeamFriendlyFire] Đã chặn sát thương: ${attackerName} -> ${victimName} (Cùng đội FTB Teams)`);
        }
    });
})();
