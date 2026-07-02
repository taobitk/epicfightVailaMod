// Đặt tại: kubejs/startup_scripts/entity_modifications/modify_unused_attributes.js

// --- CẤU HÌNH CHỈ SỐ (CONSTANTS) ---
const GIANT_STATS = { health: 300.0, attack: 80.0, armor: 15.0 };
const ILLUSIONER_STATS = { health: 96.0, attack: 10.0, armor: 8.0 };

// Killer Bunny (Rabbit) - Optional
// const RABBIT_STATS = { health: 9.0, attack: 0.0, armor: 0.0 }; 

EntityJSEvents.attributes(event => {
    // Helper function
    const modifyUnused = (id, stats) => {
        event.modify(id, builder => {
            builder.add('minecraft:generic.max_health', stats.health);
            builder.add('minecraft:generic.attack_damage', stats.attack);
            builder.add('minecraft:generic.armor', stats.armor);
        });
    };

    // --- ÁP DỤNG ---
    modifyUnused('minecraft:giant', GIANT_STATS);
    modifyUnused('minecraft:illusioner', ILLUSIONER_STATS);

    // modifyUnused('minecraft:rabbit', RABBIT_STATS); 
});
