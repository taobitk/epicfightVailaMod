// Tên file: kubejs/server_scripts/mechanics/mech_petting_epic_stats_xp.js
// Mục đích: Cho phép người chơi nhận được 1/3 EXP của Epic Stats tương ứng với 1/3 lượng máu tối đa của quái vật 
//            khi thú cưng (Petting mod) của họ tiêu diệt mục tiêu.

(function() {
    const UUID = Java.loadClass('java.util.UUID');

    EntityEvents.death(event => {
        let victim = event.entity;
        let source = event.source;
        if (!victim || !source) return;

        // Lấy kẻ trực tiếp ra đòn kết liễu
        let killer = source.actual;
        if (!killer) return;

        // Kiểm tra xem kẻ tiêu diệt có phải là thú cưng (mod Petting lưu ownerUUID trong NBT ForgeData)
        if (killer.nbt) {
            let forgeData = killer.nbt.getCompound('ForgeData');
            if (forgeData && forgeData.contains('ownerUUID')) {
                let ownerUuidStr = forgeData.getString('ownerUUID');
                if (ownerUuidStr) {
                    let server = victim.server;
                    if (server) {
                        try {
                            let ownerUuid = UUID.fromString(ownerUuidStr);
                            // Tìm người chơi trực tuyến sở hữu pet
                            let player = server.playerList.getPlayer(ownerUuid);
                            if (player) {
                                // Tính toán lượng EXP: 1/2 lượng máu tối đa (Max HP) của nạn nhân
                                let maxHp = victim.maxHealth;
                                let expAmount = Math.floor(maxHp / 2);
                                
                                if (expAmount > 0) {
                                    server.runCommandSilent(`esr_addexp ${player.username} ${expAmount}`);
                                    console.info(`[PetXP] Pet của ${player.username} đã tiêu diệt ${victim.type}. Cộng ${expAmount} EXP cho chủ nhân.`);
                                }
                            }
                        } catch (e) {
                            console.error(`[PetXP] Lỗi khi xử lý cộng EXP cho người chơi: ${e}`);
                        }
                    }
                }
            }
        }
    });
})();
