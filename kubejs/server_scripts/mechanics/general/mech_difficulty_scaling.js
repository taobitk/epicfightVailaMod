// Tên file: kubejs/server_scripts/mechanics/general/mech_difficulty_scaling.js
// Mục đích: Tự động tăng HP, Sát thương và Giáp cho Quái vật Hostile theo số ngày sử dụng AttributeModifier UUID riêng biệt (Lớp 2).
// Loại trừ hoàn toàn Lính (HumanCompanions) và Thú cưng (Petting).
// Sửa lỗi tự động hồi đầy máu mỗi 5 giây bằng cách chỉ cập nhật Modifier khi chỉ số thay đổi.

(function () {
    const UUID = Java.loadClass('java.util.UUID');
    const AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier');
    const Operation = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation');

    // UUID cố định dành riêng cho Buff Theo Ngày của Quái
    const DAY_HP_UUID = UUID.fromString('a1b2c3d4-1111-1111-1111-000000000001');
    const DAY_ATK_UUID = UUID.fromString('a1b2c3d4-1111-1111-1111-000000000002');
    const DAY_ARMOR_UUID = UUID.fromString('a1b2c3d4-1111-1111-1111-000000000003');

    const targetMobs = [
        'minecraft:zombie', 'minecraft:zombie_villager', 'minecraft:husk', 'minecraft:drowned',
        'minecraft:skeleton', 'minecraft:stray', 'minecraft:wither_skeleton',
        'minecraft:spider', 'minecraft:cave_spider', 'minecraft:silverfish', 'minecraft:endermite',
        'minecraft:pillager', 'minecraft:vindicator', 'minecraft:evoker', 'minecraft:vex', 'minecraft:ravager',
        'minecraft:blaze', 'minecraft:ghast', 'minecraft:magma_cube', 'minecraft:hoglin', 'minecraft:piglin_brute', 'minecraft:zoglin',
        'minecraft:guardian', 'minecraft:elder_guardian',
        'minecraft:witch', 'minecraft:phantom', 'minecraft:shulker', 'minecraft:slime'
    ];

    function calculateDayBonuses(day) {
        if (day <= 0) return { hp: 0, atk: 0, armor: 0 };

        let hpBonus = 0;
        if (day <= 5) {
            hpBonus = day * 5.0; // Ngày 1-5: +5.0 HP/ngày
        } else if (day <= 10) {
            hpBonus = 25.0 + (day - 5) * 3.0; // Ngày 6-10: +3.0 HP/ngày
        } else if (day <= 15) {
            hpBonus = 40.0 + (day - 10) * 4.0; // Ngày 11-15: +4.0 HP/ngày
        } else {
            hpBonus = 60.0 + (day - 15) * 7.0; // Ngày 16 trở đi: +7.0 HP/ngày
        }

        let attackBonus = Math.min(day * 0.5, 5.0);
        let armorBonus = Math.min(Math.floor(day / 5) * 2.0, 10.0);

        return { hp: hpBonus, atk: attackBonus, armor: armorBonus };
    }

    function applyDayScalingModifier(entity, day) {
        if (!entity || !entity.alive) return;

        let eType = entity.type;

        // LOẠI TRỪ HOÀN TOÀN: Chỉ áp dụng cho quái Vanilla Hostile, tuyệt đối KHÔNG tăng máu theo ngày cho HumanCompanions hay Petting!
        if (!targetMobs.includes(eType)) return;

        let bonuses = calculateDayBonuses(day);

        // 1. Cập nhật Máu tối đa (Max HP) bằng AttributeModifier (Chỉ cập nhật khi giá trị thay đổi)
        let hpAttr = entity.getAttribute('minecraft:generic.max_health');
        if (hpAttr) {
            let existingMod = hpAttr.getModifier(DAY_HP_UUID);
            if (!existingMod || existingMod.amount !== bonuses.hp) {
                hpAttr.removeModifier(DAY_HP_UUID);
                if (bonuses.hp > 0) {
                    hpAttr.addTransientModifier(new AttributeModifier(DAY_HP_UUID, 'Day Scaling HP Bonus', bonuses.hp, Operation.ADDITION));
                    // Chỉ hồi đầy máu lần đầu tiên khi quái mới sinh ra
                    if (!existingMod) {
                        entity.health = hpAttr.getValue();
                    }
                }
            }
        }

        // 2. Cập nhật Sát thương (Attack Damage)
        let atkAttr = entity.getAttribute('minecraft:generic.attack_damage');
        if (atkAttr) {
            let existingMod = atkAttr.getModifier(DAY_ATK_UUID);
            if (!existingMod || existingMod.amount !== bonuses.atk) {
                atkAttr.removeModifier(DAY_ATK_UUID);
                if (bonuses.atk > 0) {
                    atkAttr.addTransientModifier(new AttributeModifier(DAY_ATK_UUID, 'Day Scaling ATK Bonus', bonuses.atk, Operation.ADDITION));
                }
            }
        }

        // 3. Cập nhật Giáp (Armor)
        let armorAttr = entity.getAttribute('minecraft:generic.armor');
        if (armorAttr) {
            let existingMod = armorAttr.getModifier(DAY_ARMOR_UUID);
            if (!existingMod || existingMod.amount !== bonuses.armor) {
                armorAttr.removeModifier(DAY_ARMOR_UUID);
                if (bonuses.armor > 0) {
                    armorAttr.addTransientModifier(new AttributeModifier(DAY_ARMOR_UUID, 'Day Scaling Armor Bonus', bonuses.armor, Operation.ADDITION));
                }
            }
        }
    }

    // 1. Áp dụng ngay khi thực thể mới được spawn ra
    EntityEvents.spawned(event => {
        let level = event.level;
        if (level) {
            let day = Math.floor(level.dayTime() / 24000);
            applyDayScalingModifier(event.entity, day);
        }
    });

    // 2. Định kỳ quét cập nhật chỉ số mỗi 10 giây cho thực thể xung quanh người chơi
    PlayerEvents.tick(event => {
        let player = event.player;
        if (player.age % 200 === 0) {
            let level = player.level;
            if (level) {
                let day = Math.floor(level.dayTime() / 24000);
                try {
                    let aabb = player.boundingBox.inflate(32);
                    let entities = level.getEntitiesWithin(aabb);
                    entities.forEach(entity => {
                        applyDayScalingModifier(entity, day);
                    });
                } catch (err) { }
            }
        }
    });
})();
