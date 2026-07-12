// Tên file: kubejs/server_scripts/mechanics/humancompanions/mech_humancompanions_epic_stats_buff.js
// Mục đích: Tự động cập nhật chỉ số Companion theo thời gian thực dựa vào điểm chỉ số Pet ATK (Stat 5), Pet HP (Stat 6) và Pet DEF (Stat 7) của chủ nhân.
// Cấu hình: +1 HP mỗi cấp HP, +1 ATK mỗi cấp ATK, +1 DEF (Armor) mỗi cấp DEF.

(function() {
    const EpicStatsModRemasteredModVariables = Java.loadClass('net.felinamods.epicstatsmodremastered.network.EpicStatsModRemasteredModVariables');

    const updateCompanionStats = (entity) => {
        if (!entity || !entity.nbt) return;
        if (!entity.type.startsWith('humancompanions:')) return;

        // Kiểm tra xem Companion đã được thuê (có chủ) chưa
        if (!entity.nbt.contains('Owner')) return;
        let ownerUuid = entity.nbt.getUUID('Owner');
        if (!ownerUuid) return;

        let server = entity.server;
        if (!server) return;

        try {
            let player = server.playerList.getPlayer(ownerUuid);
            if (!player) return;

            let cap = player.getCapability(EpicStatsModRemasteredModVariables.PLAYER_VARIABLES_CAPABILITY).orElse(null);
            if (!cap) return;

            let petAtkLvl = cap.stat_5_level || 0; // Pet ATK (Stat 5)
            let petHpLvl = cap.stat_6_level || 0;  // Pet HP (Stat 6)
            let petDefLvl = cap.stat_7_level || 0; // Pet DEF (Stat 7)

            let pData = entity.persistentData;

            // 1. Cập nhật Máu tối đa (Max HP) -> +1 HP mỗi cấp
            let hpAttr = entity.getAttribute('minecraft:generic.max_health');
            if (hpAttr) {
                let originalMaxHp = pData.getDouble('original_max_hp');
                if (originalMaxHp === 0) {
                    originalMaxHp = hpAttr.getBaseValue();
                    pData.putDouble('original_max_hp', originalMaxHp);
                }

                let bonusHp = petHpLvl * 1.0;
                let newMaxHp = originalMaxHp + bonusHp;
                let oldMaxHp = hpAttr.getBaseValue();

                if (oldMaxHp !== newMaxHp) {
                    let currentHealth = entity.health;
                    hpAttr.setBaseValue(newMaxHp);
                    if (newMaxHp > oldMaxHp) {
                        entity.health = currentHealth + (newMaxHp - oldMaxHp);
                    }
                    console.info(`[CompanionStats] Đã cập nhật HP cho ${entity.type} (chủ: ${player.username}): Level ${petHpLvl} -> Max HP: ${originalMaxHp} -> ${newMaxHp}`);
                }
            }

            // 2. Cập nhật Sát thương (Attack Damage) -> +1 ATK mỗi cấp
            let atkAttr = entity.getAttribute('minecraft:generic.attack_damage');
            if (atkAttr) {
                let originalAtk = pData.getDouble('original_atk');
                if (originalAtk === 0) {
                    originalAtk = atkAttr.getBaseValue();
                    pData.putDouble('original_atk', originalAtk);
                }

                let bonusAtk = petAtkLvl * 1.0;
                let newAtk = originalAtk + bonusAtk;
                let oldAtk = atkAttr.getBaseValue();

                if (oldAtk !== newAtk) {
                    atkAttr.setBaseValue(newAtk);
                    console.info(`[CompanionStats] Đã cập nhật ATK cho ${entity.type} (chủ: ${player.username}): Level ${petAtkLvl} -> ATK: ${originalAtk} -> ${newAtk}`);
                }
            }

            // 3. Cập nhật Giáp (Armor - DEF) -> +1 DEF mỗi cấp
            let armorAttr = entity.getAttribute('minecraft:generic.armor');
            if (armorAttr) {
                let originalArmor = 0;
                if (!pData.contains('original_armor')) {
                    originalArmor = armorAttr.getBaseValue();
                    pData.putDouble('original_armor', originalArmor);
                } else {
                    originalArmor = pData.getDouble('original_armor');
                }

                let bonusArmor = petDefLvl * 1.0;
                let newArmor = originalArmor + bonusArmor;
                let oldArmor = armorAttr.getBaseValue();

                if (oldArmor !== newArmor) {
                    armorAttr.setBaseValue(newArmor);
                    console.info(`[CompanionStats] Đã cập nhật DEF cho ${entity.type} (chủ: ${player.username}): Level ${petDefLvl} -> Armor: ${originalArmor} -> ${newArmor}`);
                }
            }

        } catch (e) {
            console.error(`[CompanionStats] Lỗi khi cập nhật chỉ số cho Companion: ${e}`);
        }
    };

    // Hàm tiện ích để quét và cập nhật toàn bộ Companion xung quanh người chơi
    const updateAllNearbyCompanions = (player) => {
        try {
            let boundingBox = player.boundingBox || player.getBoundingBox();
            if (boundingBox) {
                let aabb = boundingBox.inflate(32);
                let entities = player.level.getEntitiesWithin(aabb);
                entities.forEach(entity => {
                    if (entity && entity.type.startsWith('humancompanions:') && entity.nbt) {
                        if (entity.nbt.contains('Owner')) {
                            let ownerUuid = entity.nbt.getUUID('Owner');
                            if (ownerUuid && ownerUuid.toString() === player.uuid.toString()) {
                                updateCompanionStats(entity);
                            }
                        }
                    }
                });
            }
        } catch (err) {
            // Tránh spam log
        }
    };

    // Đăng ký các sự kiện cơ bản
    EntityEvents.spawned(event => {
        updateCompanionStats(event.entity);
    });

    ItemEvents.entityInteracted(event => {
        updateCompanionStats(event.target);
    });

    EntityEvents.hurt(event => {
        updateCompanionStats(event.entity);
    });

    // 1. Đồng bộ khi người chơi đăng nhập game
    PlayerEvents.loggedIn(event => {
        updateAllNearbyCompanions(event.player);
    });

    // 2. Kiểm tra siêu nhẹ định kỳ mỗi 2 giây (40 ticks)
    // Chỉ kích hoạt quét tìm Companion khi phát hiện điểm số thực sự thay đổi
    PlayerEvents.tick(event => {
        let player = event.player;
        if (player.age % 40 === 0) {
            try {
                let cap = player.getCapability(EpicStatsModRemasteredModVariables.PLAYER_VARIABLES_CAPABILITY).orElse(null);
                if (cap) {
                    let currentAtkLvl = cap.stat_5_level || 0;
                    let currentHpLvl = cap.stat_6_level || 0;
                    let currentDefLvl = cap.stat_7_level || 0;

                    let pData = player.persistentData;
                    let lastAtkLvl = pData.getDouble('last_companion_atk_lvl');
                    let lastHpLvl = pData.getDouble('last_companion_hp_lvl');
                    let lastDefLvl = pData.getDouble('last_companion_def_lvl');

                    // Nếu phát hiện sự thay đổi chỉ số
                    if (currentAtkLvl !== lastAtkLvl || currentHpLvl !== lastHpLvl || currentDefLvl !== lastDefLvl) {
                        updateAllNearbyCompanions(player);
                        
                        pData.putDouble('last_companion_atk_lvl', currentAtkLvl);
                        pData.putDouble('last_companion_hp_lvl', currentHpLvl);
                        pData.putDouble('last_companion_def_lvl', currentDefLvl);
                    }
                }
            } catch (err) {
                // Tránh spam log
            }
        }
    });
})();
