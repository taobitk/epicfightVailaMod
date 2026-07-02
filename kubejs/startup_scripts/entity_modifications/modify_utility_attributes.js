// Đặt tại: kubejs/startup_scripts/entity_modifications/modify_utility_attributes.js
// Mục đích: Chỉnh sửa thuộc tính của các sinh vật hỗ trợ (Iron Golem, Snow Golem, Axolotl).

const IRON_GOLEM_STATS = { health: 150.0, attack: 10.0, armor: 10.0 };
const SNOW_GOLEM_STATS = { health: 20.0, attack: 2.0, armor: 3.0 };
const AXOLOTL_STATS = { health: 20.0, attack: 6.0, armor: 4.0 };

EntityJSEvents.attributes(event => {
    // Helper function
    const modifyUtility = (id, stats) => {
        event.modify(id, builder => {
            builder.add('minecraft:generic.max_health', stats.health);
            builder.add('minecraft:generic.attack_damage', stats.attack);
            builder.add('minecraft:generic.armor', stats.armor);
        });
    };

    // --- ÁP DỤNG ---
    modifyUtility('minecraft:iron_golem', IRON_GOLEM_STATS);
    modifyUtility('minecraft:snow_golem', SNOW_GOLEM_STATS);
    modifyUtility('minecraft:axolotl', AXOLOTL_STATS);
});
