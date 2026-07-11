// Đặt tại: kubejs/startup_scripts/entity_modifications/modify_hostile_attributes.js

// --- CẤU HÌNH CHỈ SỐ (CONSTANTS) ---
// Zombie Standard: 60 HP, 5 Atk
// Armor Buff: +3 to +15

// Nhóm Zombie
const ZOMBIE_STATS = { health: 30.0, attack: 5.0, armor: 10.0 };
const ZOMBIE_VILLAGER_STATS = { health: 30.0, attack: 5.0, armor: 10.0 };
const HUSK_STATS = { health: 30.0, attack: 5.0, armor: 10.0 };
const DROWNED_STATS = { health: 30.0, attack: 5.0, armor: 10.0 };

// Nhóm Skeleton
const SKELETON_STATS = { health: 30.0, attack: 4.0, armor: 8.0 };
const STRAY_STATS = { health: 30.0, attack: 4.0, armor: 8.0 };
const WITHER_SKELETON_STATS = { health: 60.0, attack: 7.0, armor: 10.0 };

// Côn trùng / Thú nhỏ
const SPIDER_STATS = { health: 24.0, attack: 4.0, armor: 6.0 };
const CAVE_SPIDER_STATS = { health: 18.0, attack: 4.0, armor: 5.0 };
const SILVERFISH_STATS = { health: 5.0, attack: 1.0, armor: 3.0 };
const ENDERMITE_STATS = { health: 5.0, attack: 1.0, armor: 3.0 };

// Illager (Cướp)
const PILLAGER_STATS = { health: 40.0, attack: 8.0, armor: 10.0 };
const VINDICATOR_STATS = { health: 60.0, attack: 10.0, armor: 12.0 };
const EVOKER_STATS = { health: 20.0, attack: 0.0, armor: 5.0 };
const VEX_STATS = { health: 10.0, attack: 8.0, armor: 3.0 };
const RAVAGER_STATS = { health: 300.0, attack: 25.0, armor: 18.0 };

// Nether
const BLAZE_STATS = { health: 60.0, attack: 7.0, armor: 8.0 };
const GHAST_STATS = { health: 30.0, attack: 0.0, armor: 4.0 };
const MAGMA_CUBE_STATS = { health: 48.0, attack: 6.0, armor: 12.0 };
const HOGLIN_STATS = { health: 120.0, attack: 12.0, armor: 12.0 };
const PIGLIN_BRUTE_STATS = { health: 150.0, attack: 15.0, armor: 15.0 };

// Dưới nước
const GUARDIAN_STATS = { health: 60.0, attack: 10.0, armor: 12.0 };
const ELDER_GUARDIAN_STATS = { health: 240.0, attack: 15.0, armor: 18.0 };

// Khác
const CREEPER_STATS = { health: 15.0, attack: 0.0, armor: 5.0 };
const WITCH_STATS = { health: 25.0, attack: 0.0, armor: 5.0 };
const PHANTOM_STATS = { health: 30.0, attack: 5.0, armor: 5.0 };
const SHULKER_STATS = { health: 90.0, attack: 0.0, armor: 20.0 };
const SLIME_STATS = { health: 30.0, attack: 2.0, armor: 5.0 };
const ZOGLIN_STATS = { health: 120.0, attack: 12.0, armor: 12.0 };

EntityJSEvents.attributes(event => {
    // Helper function
    const modifyHostile = (id, stats) => {
        event.modify(id, builder => {
            builder.add('minecraft:generic.max_health', stats.health);
            builder.add('minecraft:generic.attack_damage', stats.attack);
            builder.add('minecraft:generic.armor', stats.armor);
        });
    };

    // --- ÁP DỤNG ---
    modifyHostile('minecraft:zombie', ZOMBIE_STATS);
    modifyHostile('minecraft:zombie_villager', ZOMBIE_VILLAGER_STATS);
    modifyHostile('minecraft:husk', HUSK_STATS);
    modifyHostile('minecraft:drowned', DROWNED_STATS);

    modifyHostile('minecraft:skeleton', SKELETON_STATS);
    modifyHostile('minecraft:stray', STRAY_STATS);
    modifyHostile('minecraft:wither_skeleton', WITHER_SKELETON_STATS);

    modifyHostile('minecraft:spider', SPIDER_STATS);
    modifyHostile('minecraft:cave_spider', CAVE_SPIDER_STATS);
    modifyHostile('minecraft:silverfish', SILVERFISH_STATS);
    modifyHostile('minecraft:endermite', ENDERMITE_STATS);

    modifyHostile('minecraft:pillager', PILLAGER_STATS);
    modifyHostile('minecraft:vindicator', VINDICATOR_STATS);
    modifyHostile('minecraft:evoker', EVOKER_STATS);
    modifyHostile('minecraft:vex', VEX_STATS);
    modifyHostile('minecraft:ravager', RAVAGER_STATS);

    modifyHostile('minecraft:blaze', BLAZE_STATS);
    modifyHostile('minecraft:ghast', GHAST_STATS);
    modifyHostile('minecraft:magma_cube', MAGMA_CUBE_STATS);
    modifyHostile('minecraft:hoglin', HOGLIN_STATS);
    modifyHostile('minecraft:piglin_brute', PIGLIN_BRUTE_STATS);

    modifyHostile('minecraft:guardian', GUARDIAN_STATS);
    modifyHostile('minecraft:elder_guardian', ELDER_GUARDIAN_STATS);

    modifyHostile('minecraft:creeper', CREEPER_STATS);
    modifyHostile('minecraft:witch', WITCH_STATS);
    modifyHostile('minecraft:phantom', PHANTOM_STATS);
    modifyHostile('minecraft:shulker', SHULKER_STATS);
    modifyHostile('minecraft:slime', SLIME_STATS);
    modifyHostile('minecraft:zoglin', ZOGLIN_STATS);
});
