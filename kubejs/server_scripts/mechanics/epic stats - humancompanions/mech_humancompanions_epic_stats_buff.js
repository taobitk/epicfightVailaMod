// Tên file: kubejs/server_scripts/mechanics/humancompanions/mech_humancompanions_epic_stats_buff.js
// LƯU Ý: Toàn bộ logic cập nhật chỉ số Companion đã được chuyển giao hoàn toàn sang Mod Java (OriginStatsMod - CompanionStatHandler.java)
// để tối ưu hóa hiệu năng Event-Driven 100% không tốn CPU vòng lặp Tick.
// File này được comment out toàn bộ để tránh xung đột chỉ số.

/*
(function () {
    const UUID = Java.loadClass('java.util.UUID');
    const AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier');
    const Operation = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation');
    const EpicStatsModRemasteredModVariables = Java.loadClass('net.felinamods.epicstatsmodremastered.network.EpicStatsModRemasteredModVariables');

    const COMP_HP_UUID = UUID.fromString('c3d4e5f6-3333-3333-3333-000000000001');
    const COMP_ATK_UUID = UUID.fromString('c3d4e5f6-3333-3333-3333-000000000002');
    const COMP_ARMOR_UUID = UUID.fromString('c3d4e5f6-3333-3333-3333-000000000003');

    const calculateTieredBonus = (level) => {
        if (level <= 0) return 0;
        let bonus = 0;
        let lvl1_5 = Math.min(level, 5);
        bonus += lvl1_5 * 0.5;
        if (level > 5) {
            let lvl6_10 = Math.min(level - 5, 5);
            bonus += lvl6_10 * 1.0;
        }
        if (level > 10) {
            let lvl11_25 = Math.min(level - 10, 15);
            bonus += lvl11_25 * 1.5;
        }
        if (level > 25) {
            let lvl26_plus = level - 25;
            bonus += lvl26_plus * 2.0;
        }
        return bonus;
    };

    const updateCompanionStats = (entity) => {
        if (!entity || !entity.alive || !entity.nbt) return;
        if (!entity.type.startsWith('humancompanions:')) return;

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

            let petAtkLvl = cap.stat_6_level || 0;
            let petHpLvl = cap.stat_7_level || 0; 
            let petDefLvl = cap.stat_8_level || 0;

            let bonusHp = 0;
            let bonusAtk = 0;
            let bonusArmor = 0;

            if (entity.type === 'humancompanions:axeguard') {
                bonusHp = petHpLvl * 3.0;
                bonusAtk = petAtkLvl * 0.5;
                bonusArmor = petDefLvl * 1.0;
            } else {
                bonusHp = petHpLvl * 2.0;
                bonusAtk = calculateTieredBonus(petAtkLvl);
                bonusArmor = calculateTieredBonus(petDefLvl);
            }

            let hpAttr = entity.getAttribute('minecraft:generic.max_health');
            if (hpAttr) {
                let existingMod = hpAttr.getModifier(COMP_HP_UUID);
                if (!existingMod || existingMod.amount !== bonusHp) {
                    hpAttr.removeModifier(COMP_HP_UUID);
                    if (bonusHp > 0) {
                        hpAttr.addTransientModifier(new AttributeModifier(COMP_HP_UUID, 'Companion ES HP Bonus', bonusHp, Operation.ADDITION));
                        if (!existingMod) {
                            entity.health = hpAttr.getValue();
                        }
                    }
                }
            }

            let atkAttr = entity.getAttribute('minecraft:generic.attack_damage');
            if (atkAttr) {
                let existingMod = atkAttr.getModifier(COMP_ATK_UUID);
                if (!existingMod || existingMod.amount !== bonusAtk) {
                    atkAttr.removeModifier(COMP_ATK_UUID);
                    if (bonusAtk > 0) {
                        atkAttr.addTransientModifier(new AttributeModifier(COMP_ATK_UUID, 'Companion ES ATK Bonus', bonusAtk, Operation.ADDITION));
                    }
                }
            }

            let armorAttr = entity.getAttribute('minecraft:generic.armor');
            if (armorAttr) {
                let existingMod = armorAttr.getModifier(COMP_ARMOR_UUID);
                if (!existingMod || existingMod.amount !== bonusArmor) {
                    armorAttr.removeModifier(COMP_ARMOR_UUID);
                    if (bonusArmor > 0) {
                        armorAttr.addTransientModifier(new AttributeModifier(COMP_ARMOR_UUID, 'Companion ES Armor Bonus', bonusArmor, Operation.ADDITION));
                    }
                }
            }

        } catch (e) {
            console.error(`[CompanionStats] Lỗi khi cập nhật chỉ số cho Companion: ${e}`);
        }
    };

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
        } catch (err) { }
    };

    EntityEvents.spawned(event => {
        updateCompanionStats(event.entity);
    });

    ItemEvents.entityInteracted(event => {
        updateCompanionStats(event.target);
    });

    PlayerEvents.loggedIn(event => {
        updateAllNearbyCompanions(event.player);
    });

    PlayerEvents.tick(event => {
        let player = event.player;
        if (player.age % 20 === 0) {
            updateAllNearbyCompanions(player);
        }
    });
})();
*/
