// Tên file: kubejs/server_scripts/mechanics/minecraft/mech_difficulty_scaling.js
// Mục đích: Tự động tăng HP và Sát thương của quái vật theo số ngày trong game:
//   - HP tăng: số ngày * 2.5
//   - Sát thương tăng: số ngày * 0.5 (tối đa tăng thêm 5)
//   - Giáp không tăng

const targetMobs = [
    'minecraft:zombie', 'minecraft:zombie_villager', 'minecraft:husk', 'minecraft:drowned',
    'minecraft:skeleton', 'minecraft:stray', 'minecraft:wither_skeleton',
    'minecraft:spider', 'minecraft:cave_spider', 'minecraft:silverfish', 'minecraft:endermite',
    'minecraft:pillager', 'minecraft:vindicator', 'minecraft:evoker', 'minecraft:vex', 'minecraft:ravager',
    'minecraft:blaze', 'minecraft:ghast', 'minecraft:magma_cube', 'minecraft:hoglin', 'minecraft:piglin_brute', 'minecraft:zoglin',
    'minecraft:guardian', 'minecraft:elder_guardian',
    'minecraft:witch', 'minecraft:phantom', 'minecraft:shulker', 'minecraft:slime'
];

EntityEvents.spawned(event => {
    let entity = event.entity;
    if (!entity) return;

    if (targetMobs.includes(entity.type)) {
        let pData = entity.persistentData;

        // Tránh cộng dồn chỉ số khi load lại chunk/world
        if (!pData.getBoolean('scaled_stats')) {

            // Bỏ qua nếu thực thể đang thuộc sở hữu của người chơi
            // TH1: Mod Petting lưu ownerUUID trong entity.nbt → ForgeData (cùng cách với mech_petting_owner_sync.js)
            let nbtForgeData = entity.nbt ? entity.nbt.getCompound('ForgeData') : null;
            let isOwnedByPetting = nbtForgeData && nbtForgeData.contains('ownerUUID') && nbtForgeData.getString('ownerUUID');
            // TH2: Vanilla/HumanCompanions lưu Owner trong root NBT
            let isOwnedByVanilla = entity.nbt && entity.nbt.contains('Owner');
            if (isOwnedByPetting || isOwnedByVanilla) return;
            let level = event.level;
            // event.level là ServerLevel trực tiếp, gọi dayTime() để lấy tổng số tick
            let day = Math.floor(level.dayTime() / 24000);

            if (day > 0) {
                // Tính toán HP Bonus theo độ dốc lũy tiến mới:
                // - Ngày 1-5: +3.5 HP/ngày
                // - Ngày 6-10: +2.0 HP/ngày
                // - Ngày 11-15: +4.0 HP/ngày
                // - Ngày 16 trở đi: +5.0 HP/ngày
                let hpBonus = 0;
                if (day <= 5) {
                    hpBonus = day * 3.5;
                } else if (day <= 10) {
                    hpBonus = 17.5 + (day - 5) * 2.0;
                } else if (day <= 15) {
                    hpBonus = 27.5 + (day - 10) * 4.0;
                } else {
                    hpBonus = 47.5 + (day - 15) * 5.0;
                }

                let attackBonus = Math.min(day * 0.5, 5.0);
                let armorBonus = Math.min(Math.floor(day / 5) * 2.0, 10.0);

                // 1. Tăng HP tối đa và hồi đầy máu cho thực thể
                let maxHealthAttr = entity.getAttribute('minecraft:generic.max_health');
                if (maxHealthAttr) {
                    let newMax = maxHealthAttr.getBaseValue() + hpBonus;
                    maxHealthAttr.setBaseValue(newMax);
                    entity.health = newMax; // Hồi máu đầy theo HP tối đa mới
                }

                // 2. Tăng Sát thương tấn công
                let attackAttr = entity.getAttribute('minecraft:generic.attack_damage');
                if (attackAttr) {
                    let newAttack = attackAttr.getBaseValue() + attackBonus;
                    attackAttr.setBaseValue(newAttack);
                }

                // 3. Tăng Giáp (mỗi 5 ngày +2 giáp, tối đa +10 giáp)
                let armorAttr = entity.getAttribute('minecraft:generic.armor');
                if (armorAttr) {
                    let newArmor = armorAttr.getBaseValue() + armorBonus;
                    armorAttr.setBaseValue(newArmor);
                }
            }
            pData.putBoolean('scaled_stats', true);
        }
    }
});
