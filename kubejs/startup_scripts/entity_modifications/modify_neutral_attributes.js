// Đặt tại: kubejs/startup_scripts/entity_modifications/modify_neutral_attributes.js

// --- CẤU HÌNH CHỈ SỐ (CONSTANTS) ---
// Armor Buff: +3 to +12

const ENDERMAN_STATS = { health: 120.0, attack: 14.0, armor: 8.0 };
const ZOMBIFIED_PIGLIN_STATS = { health: 60.0, attack: 10.0, armor: 12.0 };
const PIGLIN_STATS = { health: 48.0, attack: 8.0, armor: 8.0 };
const BEE_STATS = { health: 10.0, attack: 4.0, armor: 3.0 };
const POLAR_BEAR_STATS = { health: 90.0, attack: 12.0, armor: 10.0 };
const WOLF_STATS = { health: 30.0, attack: 8.0, armor: 6.0 };
const LLAMA_STATS = { health: 30.0, attack: 3.0, armor: 5.0 };
const TRADER_LLAMA_STATS = { health: 45.0, attack: 3.0, armor: 5.0 };
const DOLPHIN_STATS = { health: 30.0, attack: 6.0, armor: 4.0 };
const PANDA_STATS = { health: 30.0, attack: 12.0, armor: 6.0 };
const GOAT_STATS = { health: 30.0, attack: 3.0, armor: 5.0 };
const PUFFERFISH_STATS = { health: 10.0, attack: 3.0, armor: 3.0 };

EntityJSEvents.attributes(event => {
    // Helper function
    const modifyNeutral = (id, stats) => {
        event.modify(id, builder => {
            builder.add('minecraft:generic.max_health', stats.health);
            builder.add('minecraft:generic.attack_damage', stats.attack);
            builder.add('minecraft:generic.armor', stats.armor);
        });
    };

    // --- ÁP DỤNG ---
    modifyNeutral('minecraft:enderman', ENDERMAN_STATS);
    modifyNeutral('minecraft:zombified_piglin', ZOMBIFIED_PIGLIN_STATS);
    modifyNeutral('minecraft:piglin', PIGLIN_STATS);
    modifyNeutral('minecraft:bee', BEE_STATS);
    modifyNeutral('minecraft:polar_bear', POLAR_BEAR_STATS);
    modifyNeutral('minecraft:wolf', WOLF_STATS);
    modifyNeutral('minecraft:llama', LLAMA_STATS);
    modifyNeutral('minecraft:trader_llama', TRADER_LLAMA_STATS);
    modifyNeutral('minecraft:dolphin', DOLPHIN_STATS);
    modifyNeutral('minecraft:panda', PANDA_STATS);
    modifyNeutral('minecraft:goat', GOAT_STATS);
    modifyNeutral('minecraft:pufferfish', PUFFERFISH_STATS);
});
