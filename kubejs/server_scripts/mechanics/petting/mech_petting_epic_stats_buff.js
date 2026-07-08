// Tên file: kubejs/server_scripts/mechanics/mech_petting_epic_stats_buff.js
// Mục đích: Tự động cập nhật chỉ số Pet theo thời gian thực dựa vào điểm chỉ số Pet ATK (Stat 5) và Pet HP (Stat 6) của chủ nhân.
// Tối ưu hóa: Chỉ thực hiện quét tìm Pet khi người chơi vừa đăng nhập hoặc khi phát hiện điểm số chỉ số vừa thay đổi để bảo vệ hiệu năng server tuyệt đối.

(function() {
    const UUID = Java.loadClass('java.util.UUID');
    const EpicStatsModRemasteredModVariables = Java.loadClass('net.felinamods.epicstatsmodremastered.network.EpicStatsModRemasteredModVariables');

    const updatePetStats = (entity) => {
        if (!entity || !entity.nbt) return;

        let forgeData = entity.nbt.getCompound('ForgeData');
        if (!forgeData || !forgeData.contains('ownerUUID')) return;

        let ownerUuidStr = forgeData.getString('ownerUUID');
        if (!ownerUuidStr) return;

        let server = entity.server;
        if (!server) return;

        try {
            let ownerUuid = UUID.fromString(ownerUuidStr);
            let player = server.playerList.getPlayer(ownerUuid);
            if (!player) return;

            let cap = player.getCapability(EpicStatsModRemasteredModVariables.PLAYER_VARIABLES_CAPABILITY).orElse(null);
            if (!cap) return;

            let petAtkLvl = cap.stat_5_level || 0; // Pet ATK (Stat 5)
            let petHpLvl = cap.stat_6_level || 0;  // Pet HP (Stat 6)

            let pData = entity.persistentData;

            // 1. Cập nhật Máu tối đa (Max Health)
            let hpAttr = entity.getAttribute('minecraft:generic.max_health');
            if (hpAttr) {
                let originalMaxHp = pData.getDouble('original_max_hp');
                if (originalMaxHp === 0) {
                    originalMaxHp = hpAttr.getBaseValue();
                    pData.putDouble('original_max_hp', originalMaxHp);
                }

                let bonusHp = petHpLvl * 2;
                let newMaxHp = originalMaxHp + bonusHp;
                let oldMaxHp = hpAttr.getBaseValue();

                if (oldMaxHp !== newMaxHp) {
                    let currentHealth = entity.health;
                    hpAttr.setBaseValue(newMaxHp);
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

    // Hàm tiện ích để quét và cập nhật toàn bộ Pet xung quanh người chơi
    const updateAllNearbyPets = (player) => {
        try {
            let boundingBox = player.boundingBox || player.getBoundingBox();
            if (boundingBox) {
                let aabb = boundingBox.inflate(32);
                let entities = player.level.getEntitiesWithin(aabb);
                entities.forEach(entity => {
                    if (entity && entity.nbt) {
                        let forgeData = entity.nbt.getCompound('ForgeData');
                        if (forgeData && forgeData.contains('ownerUUID')) {
                            let ownerUuidStr = forgeData.getString('ownerUUID');
                            if (ownerUuidStr && ownerUuidStr === player.uuid.toString()) {
                                updatePetStats(entity);
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
        updatePetStats(event.entity);
    });

    ItemEvents.entityInteracted(event => {
        updatePetStats(event.target);
    });

    EntityEvents.hurt(event => {
        updatePetStats(event.entity);
    });

    // 1. Đồng bộ khi người chơi đăng nhập game
    PlayerEvents.loggedIn(event => {
        updateAllNearbyPets(event.player);
    });

    // 2. Kiểm tra siêu nhẹ định kỳ mỗi 2 giây (40 ticks)
    // Chỉ kích hoạt quét tìm Pet khi phát hiện điểm số thực sự thay đổi
    PlayerEvents.tick(event => {
        let player = event.player;
        if (player.age % 40 === 0) {
            try {
                let cap = player.getCapability(EpicStatsModRemasteredModVariables.PLAYER_VARIABLES_CAPABILITY).orElse(null);
                if (cap) {
                    let currentAtkLvl = cap.stat_5_level || 0;
                    let currentHpLvl = cap.stat_6_level || 0;

                    let pData = player.persistentData;
                    let lastAtkLvl = pData.getDouble('last_pet_atk_lvl');
                    let lastHpLvl = pData.getDouble('last_pet_hp_lvl');

                    // Nếu phát hiện sự thay đổi chỉ số
                    if (currentAtkLvl !== lastAtkLvl || currentHpLvl !== lastHpLvl) {
                        updateAllNearbyPets(player);
                        
                        pData.putDouble('last_pet_atk_lvl', currentAtkLvl);
                        pData.putDouble('last_pet_hp_lvl', currentHpLvl);
                    }
                }
            } catch (err) {
                // Tránh spam log
            }
        }
    });
})();
