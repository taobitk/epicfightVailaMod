// Tên file: kubejs/server_scripts/mechanics/mech_petting_epic_stats_buff.js
// LƯU Ý: Toàn bộ logic cập nhật chỉ số Petting đã được chuyển giao hoàn toàn sang Mod Java mới (OriginStatsMod - PetStatHandler.java)
// File này được comment out toàn bộ để tránh xung đột chỉ số.

/*
(function() {
    const UUID = Java.loadClass('java.util.UUID');
    const AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier');
    const Operation = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation');
    const EpicStatsModRemasteredModVariables = Java.loadClass('net.felinamods.epicstatsmodremastered.network.EpicStatsModRemasteredModVariables');

    const MobEffectInstance = Java.loadClass('net.minecraft.world.effect.MobEffectInstance');
    const MobEffects = Java.loadClass('net.minecraft.world.effect.MobEffects');

    // UUID cố định dành riêng cho Buff Petting ES Stats
    const PET_HP_UUID = UUID.fromString('b2c3d4e5-2222-2222-2222-000000000001');
    const PET_ATK_UUID = UUID.fromString('b2c3d4e5-2222-2222-2222-000000000002');
    const PET_ARMOR_UUID = UUID.fromString('b2c3d4e5-2222-2222-2222-000000000003');

    const updatePetStats = (entity) => {
        if (!entity || !entity.alive || !entity.nbt) return;
        
        let ownerUuidStr = null;

        let forgeData = entity.nbt.getCompound('ForgeData');
        if (forgeData && forgeData.contains('ownerUUID')) {
            ownerUuidStr = forgeData.getString('ownerUUID');
        }

        if (!ownerUuidStr && entity.nbt.contains('Owner')) {
            try {
                ownerUuidStr = entity.nbt.getUUID('Owner').toString();
            } catch (e) {
                ownerUuidStr = entity.nbt.getString('Owner');
            }
        }

        if (!ownerUuidStr) return;

        let server = entity.server;
        if (!server) return;

        try {
            let ownerUuid = UUID.fromString(ownerUuidStr);
            let player = server.playerList.getPlayer(ownerUuid);
            if (!player) return;

            if (entity.health < entity.maxHealth) {
                let healAmount = entity.maxHealth * 0.05;
                let newHp = Math.min(entity.maxHealth, entity.health + healAmount);
                entity.setHealth(newHp);
            }

            let cap = player.getCapability(EpicStatsModRemasteredModVariables.PLAYER_VARIABLES_CAPABILITY).orElse(null);
            if (!cap) return;

            let petAtkLvl = cap.stat_6_level || 0;
            let petHpLvl = cap.stat_7_level || 0; 
            let petDefLvl = cap.stat_8_level || 0;

            let bonusHp = petHpLvl * 2.5;
            let bonusAtk = petAtkLvl * 1.5;
            let bonusArmor = petDefLvl * 1.0;

            let hpAttr = entity.getAttribute('minecraft:generic.max_health');
            if (hpAttr) {
                let existingMod = hpAttr.getModifier(PET_HP_UUID);
                if (!existingMod || existingMod.amount !== bonusHp) {
                    hpAttr.removeModifier(PET_HP_UUID);
                    if (bonusHp > 0) {
                        hpAttr.addTransientModifier(new AttributeModifier(PET_HP_UUID, 'Petting ES HP Bonus', bonusHp, Operation.ADDITION));
                        if (!existingMod) {
                            entity.health = hpAttr.getValue();
                        }
                    }
                }
            }

            let atkAttr = entity.getAttribute('minecraft:generic.attack_damage');
            if (atkAttr) {
                let existingMod = atkAttr.getModifier(PET_ATK_UUID);
                if (!existingMod || existingMod.amount !== bonusAtk) {
                    atkAttr.removeModifier(PET_ATK_UUID);
                    if (bonusAtk > 0) {
                        atkAttr.addTransientModifier(new AttributeModifier(PET_ATK_UUID, 'Petting ES ATK Bonus', bonusAtk, Operation.ADDITION));
                    }
                }
            }

            let armorAttr = entity.getAttribute('minecraft:generic.armor');
            if (armorAttr) {
                let existingMod = armorAttr.getModifier(PET_ARMOR_UUID);
                if (!existingMod || existingMod.amount !== bonusArmor) {
                    armorAttr.removeModifier(PET_ARMOR_UUID);
                    if (bonusArmor > 0) {
                        armorAttr.addTransientModifier(new AttributeModifier(PET_ARMOR_UUID, 'Petting ES Armor Bonus', bonusArmor, Operation.ADDITION));
                    }
                }
            }

        } catch (e) {
            console.error(`[PetStats] Lỗi khi cập nhật chỉ số cho Pet: ${e}`);
        }
    };

    const updateAllNearbyPets = (player) => {
        try {
            let boundingBox = player.boundingBox || player.getBoundingBox();
            if (boundingBox) {
                let aabb = boundingBox.inflate(32);
                let entities = player.level.getEntitiesWithin(aabb);
                entities.forEach(entity => {
                    if (entity && entity.alive && entity.nbt) {
                        updatePetStats(entity);
                    }
                });
            }
        } catch (err) {}
    };

    EntityEvents.spawned(event => {
        updatePetStats(event.entity);
    });

    ItemEvents.entityInteracted(event => {
        updatePetStats(event.target);
    });

    PlayerEvents.loggedIn(event => {
        updateAllNearbyPets(event.player);
    });

    PlayerEvents.tick(event => {
        let player = event.player;
        if (player.age % 20 === 0) {
            updateAllNearbyPets(player);
        }
    });
})();
*/
