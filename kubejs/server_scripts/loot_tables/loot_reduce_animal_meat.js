// Tên file: kubejs/server_scripts/loot_tables/loot_reduce_animal_meat.js
// Mục đích: Giảm tỉ lệ rơi thịt của bò, gà, lợn, cừu, thỏ xuống còn 10% (mặc định là 100%).

LootJS.modifiers(event => {
    // 1. BÒ (Cow) -> Raw Beef / Cooked Beef
    event.addEntityLootModifier('minecraft:cow')
        .removeLoot(['minecraft:beef', 'minecraft:cooked_beef']);
    event.addEntityLootModifier('minecraft:cow')
        .randomChance(0.10)
        .addLoot('minecraft:beef');

    // 2. LỢN (Pig) -> Raw Porkchop / Cooked Porkchop
    event.addEntityLootModifier('minecraft:pig')
        .removeLoot(['minecraft:porkchop', 'minecraft:cooked_porkchop']);
    event.addEntityLootModifier('minecraft:pig')
        .randomChance(0.10)
        .addLoot('minecraft:porkchop');

    // 3. CỪU (Sheep) -> Raw Mutton / Cooked Mutton
    event.addEntityLootModifier('minecraft:sheep')
        .removeLoot(['minecraft:mutton', 'minecraft:cooked_mutton']);
    event.addEntityLootModifier('minecraft:sheep')
        .randomChance(0.10)
        .addLoot('minecraft:mutton');

    // 4. GÀ (Chicken) -> Raw Chicken / Cooked Chicken
    event.addEntityLootModifier('minecraft:chicken')
        .removeLoot(['minecraft:chicken', 'minecraft:cooked_chicken']);
    event.addEntityLootModifier('minecraft:chicken')
        .randomChance(0.10)
        .addLoot('minecraft:chicken');

    // 5. THỎ (Rabbit) -> Raw Rabbit / Cooked Rabbit
    event.addEntityLootModifier('minecraft:rabbit')
        .removeLoot(['minecraft:rabbit', 'minecraft:cooked_rabbit']);
    event.addEntityLootModifier('minecraft:rabbit')
        .randomChance(0.10)
        .addLoot('minecraft:rabbit');
});
