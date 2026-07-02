// Đặt tại: kubejs/startup_scripts/boss_tweaks.js

EntityJSEvents.attributes(event => {

    // Sửa Warden
    event.modify('minecraft:warden', builder => {
        builder.add('minecraft:generic.max_health', 800.0);
        builder.add('minecraft:generic.armor', 25.0);
        builder.add('minecraft:generic.attack_damage', 40.0);
    });

    // Sửa Wither
    event.modify('minecraft:wither', builder => {
        builder.add('minecraft:generic.max_health', 900.0);
        builder.add('minecraft:generic.armor', 30.0);
        builder.add('minecraft:generic.attack_damage', 50.0);
    });

    // Sửa Ender Dragon
    event.modify('minecraft:ender_dragon', builder => {
        builder.add('minecraft:generic.max_health', 1000.0);
        builder.add('minecraft:generic.armor', 30.0);
        builder.add('minecraft:generic.attack_damage', 100.0);
    });

});