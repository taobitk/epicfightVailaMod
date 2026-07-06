// Tên file: kubejs/server_scripts/mechanics/mech_petting_epic_stats_buff.js
// Mục đích: Tự động cộng thêm Máu tối đa và Sát thương cho Pet dựa vào chỉ số Pet ATK (Stat 5) và Pet HP (Stat 6) của chủ nhân.

(function() {
    const UUID = Java.loadClass('java.util.UUID');
    const EpicStatsModRemasteredModVariables = Java.loadClass('net.felinamods.epicstatsmodremastered.network.EpicStatsModRemasteredModVariables');

    const updatePetStats = (entity) => {
        if (!entity || !entity.nbt) return;

        // Chỉ xử lý các thực thể có ownerUUID (đã được thuần hóa bởi mod Petting)
        let forgeData = entity.nbt.getCompound('ForgeData');
        if (!forgeData || !forgeData.contains('ownerUUID')) return;

        let ownerUuidStr = forgeData.getString('ownerUUID');
        if (!ownerUuidStr) return;

        let server = entity.server;
        if (!server) return;

        try {
            let ownerUuid = UUID.fromString(ownerUuidStr);
            let player = server.playerList.getPlayer(ownerUuid);
            if (!player) return; // Chủ nhân không online thì không cập nhật

            // Lấy dữ liệu chỉ số của người chơi
            let cap = player.getCapability(EpicStatsModRemasteredModVariables.PLAYER_VARIABLES_CAPABILITY).orElse(null);
            if (!cap) return;

            let petAtkLvl = cap.stat_5_level || 0; // Chỉ số Pet ATK (Stat 5)
            let petHpLvl = cap.stat_6_level || 0;  // Chỉ số Pet HP (Stat 6)

            let pData = entity.persistentData;

            // 1. Cập nhật Máu tối đa (Max Health)
            let hpAttr = entity.getAttribute('minecraft:generic.max_health');
            if (hpAttr) {
                let originalMaxHp = pData.getDouble('original_max_hp');
                if (originalMaxHp === 0) {
                    originalMaxHp = hpAttr.getBaseValue();
                    pData.putDouble('original_max_hp', originalMaxHp);
                }

                // Công thức: Mỗi cấp chỉ số Pet HP cộng thêm 2 Máu tối đa
                let bonusHp = petHpLvl * 2;
                let newMaxHp = originalMaxHp + bonusHp;
                let oldMaxHp = hpAttr.getBaseValue();

                if (oldMaxHp !== newMaxHp) {
                    let currentHealth = entity.health;
                    hpAttr.setBaseValue(newMaxHp);
                    
                    // Nếu máu tối đa tăng lên, bù lại lượng máu tương ứng để không bị mất máu hiện tại
                    if (newMaxHp > oldMaxHp) {
                        entity.health = currentHealth + (newMaxHp - oldMaxHp);
                    }
                    console.info(`[PetStatsBuff] Đã cập nhật HP cho Pet ${entity.type} (chủ: ${player.username}): Level ${petHpLvl} -> Max HP: ${originalMaxHp} -> ${newMaxHp}`);
                }
            }

            // 2. Cập nhật Sát thương (Attack Damage)
            let atkAttr = entity.getAttribute('minecraft:generic.attack_damage');
            if (atkAttr) {
                let originalAtk = pData.getDouble('original_atk');
                if (originalAtk === 0) {
                    originalAtk = atkAttr.getBaseValue();
                    pData.putDouble('original_atk', originalAtk);
                }

                // Công thức: Mỗi cấp chỉ số Pet ATK cộng thêm 0.5 Sát thương
                let bonusAtk = petAtkLvl * 0.5;
                let newAtk = originalAtk + bonusAtk;
                let oldAtk = atkAttr.getBaseValue();

                if (oldAtk !== newAtk) {
                    atkAttr.setBaseValue(newAtk);
                    console.info(`[PetStatsBuff] Đã cập nhật ATK cho Pet ${entity.type} (chủ: ${player.username}): Level ${petAtkLvl} -> ATK: ${originalAtk} -> ${newAtk}`);
                }
            }

        } catch (e) {
            console.error(`[PetStatsBuff] Lỗi khi cập nhật chỉ số cho Pet: ${e}`);
        }
    };

    // Đăng ký sự kiện cập nhật
    EntityEvents.spawned(event => {
        updatePetStats(event.entity);
    });

    ItemEvents.entityInteracted(event => {
        updatePetStats(event.target);
    });

    EntityEvents.hurt(event => {
        updatePetStats(event.entity);
    });
})();
