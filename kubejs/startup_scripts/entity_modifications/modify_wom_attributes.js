// Đặt tại: kubejs/startup_scripts/entity_modifications/modify_wom_attributes.js

// --- CẤU HÌNH CHỈ SỐ (CONSTANTS) ---
// Các chỉ số cho mob từ mod WOM

// Entity: wom:evil_skeleton
const EVIL_SKELETON_STATS = { health: 200.0, attack: 20.0, armor: 15.0 };

// Entity: wom:hollow
const HOLLOW_STATS = { health: 60.0, attack: 8.0, armor: 10.0 };

// Entity: wom:lupus_rex
const LUPUS_REX_STATS = { health: 120.0, attack: 12.0, armor: 10.0 };

// Entity: wom:lycanth
const LYCANTH_STATS = { health: 100.0, attack: 10.0, armor: 10.0 };

// Entity: wom:saulomonk
const SAULOMONK_STATS = { health: 150.0, attack: 10.0, armor: 10.0 };

EntityJSEvents.attributes(event => {
    // Helper function
    const modifyWom = (id, stats) => {
        event.modify(id, builder => {
            builder.add('minecraft:generic.max_health', stats.health);
            builder.add('minecraft:generic.attack_damage', stats.attack);
            builder.add('minecraft:generic.armor', stats.armor);
        });
    };

    // --- ÁP DỤNG ---
    modifyWom('wom:evil_skeleton', EVIL_SKELETON_STATS);
    modifyWom('wom:hollow', HOLLOW_STATS);
    modifyWom('wom:lupus_rex', LUPUS_REX_STATS);
    modifyWom('wom:lycanth', LYCANTH_STATS);
    modifyWom('wom:saulomonk', SAULOMONK_STATS);
});
