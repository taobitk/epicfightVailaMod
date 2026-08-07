// Tên file: kubejs/server_scripts/mechanics/mech_petting_epic_stats_xp.js
// LƯU Ý: Toàn bộ logic Epic Stats EXP cũ đã được chuyển sang OriginStatsMod mới (SummonerPetXpHandler.java)
// File này được comment out toàn bộ để tránh xung đột.

/*
(function () {
    const UUID = Java.loadClass('java.util.UUID');

    function getPetOwnerPlayer(killer, server) {
        if (!killer || !killer.nbt || !server) return null;
        try {
            let forgeData = killer.nbt.getCompound('ForgeData');
            if (forgeData && forgeData.contains('ownerUUID')) {
                let ownerUuidStr = forgeData.getString('ownerUUID');
                if (ownerUuidStr) {
                    let ownerUuid = UUID.fromString(ownerUuidStr);
                    let player = server.playerList.getPlayer(ownerUuid);
                    if (player) return player;
                }
            }
            if (killer.nbt.contains('Owner')) {
                let ownerUuid = killer.nbt.getUUID('Owner');
                if (ownerUuid) {
                    let player = server.playerList.getPlayer(ownerUuid);
                    if (player) return player;
                }
            }
        } catch (e) {
            console.error(`[PetXP] Lỗi khi tìm Owner: ${e}`);
        }
        return null;
    }

    EntityEvents.death(event => {
        let victim = event.entity;
        let source = event.source;
        if (!victim || !source || victim.isPlayer()) return;

        let killer = source.actual;
        if (!killer) return;

        let server = victim.server;
        if (!server) return;

        let owner = getPetOwnerPlayer(killer, server);
        if (owner) {
            let maxHp = victim.maxHealth || 20;
            let expAmount = Math.floor(maxHp / 2);

            if (expAmount > 0) {
                server.runCommandSilent(`esr_addexp ${owner.username} ${expAmount}`);
                console.info(`[PetXP] Pet/Companion của ${owner.username} đã tiêu diệt ${victim.type}. Cộng ${expAmount} Epic Stats EXP cho chủ nhân.`);
            }
        }
    });
})();
*/
