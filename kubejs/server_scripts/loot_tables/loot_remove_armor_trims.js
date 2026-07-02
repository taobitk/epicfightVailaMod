// server_scripts/loot_tables/remove_trim_loot.js

// Xóa khỏi loot tables (dùng LootJS)
LootJS.modifiers(event => {
    console.log('[ID REMOVER] Bắt đầu xóa các mẫu rèn khỏi loot...');
    event
        .addLootTableModifier(/.*/)
        .removeLoot([
            'minecraft:spire_armor_trim_smithing_template',
            'minecraft:snout_armor_trim_smithing_template',
            'minecraft:rib_armor_trim_smithing_template',
            'minecraft:vex_armor_trim_smithing_template',
            'minecraft:tide_armor_trim_smithing_template',
            'minecraft:ward_armor_trim_smithing_template',
            'minecraft:silence_armor_trim_smithing_template',
            'minecraft:wild_armor_trim_smithing_template',
            'minecraft:coast_armor_trim_smithing_template',
            'minecraft:dune_armor_trim_smithing_template',
            'minecraft:eye_armor_trim_smithing_template',
            'minecraft:sentry_armor_trim_smithing_template',
            'minecraft:wayfinder_armor_trim_smithing_template',
            'minecraft:shaper_armor_trim_smithing_template',
            'minecraft:host_armor_trim_smithing_template',
            'minecraft:raiser_armor_trim_smithing_template',
            'minecraft:flow_armor_trim_smithing_template',
            'minecraft:bolt_armor_trim_smithing_template'
        ]);
    console.log('[ID REMOVER] Đã xóa xong khỏi loot.');
});
