// Tên file: iron.js

ServerEvents.recipes(event => {
    const iron_armor_items = [
        'minecraft:iron_helmet', 'minecraft:iron_chestplate', 'minecraft:iron_leggings', 'minecraft:iron_boots',
        'minecraft:iron_horse_armor'
    ];
    const iron_tool_items = [
        'minecraft:iron_sword', 'minecraft:iron_pickaxe', 'minecraft:iron_axe', 'minecraft:iron_shovel', 'minecraft:iron_hoe'
    ];
    const chainmail_armor_items = [
        'minecraft:chainmail_helmet', 'minecraft:chainmail_chestplate', 'minecraft:chainmail_leggings', 'minecraft:chainmail_boots'
    ];

    const gold_gear_items = [
        'minecraft:golden_helmet', 'minecraft:golden_chestplate', 'minecraft:golden_leggings', 'minecraft:golden_boots',
        'minecraft:golden_sword', 'minecraft:golden_pickaxe', 'minecraft:golden_axe', 'minecraft:golden_shovel', 'minecraft:golden_hoe',
        'minecraft:golden_horse_armor'
    ];

    const diamond_armor_items = [
        'minecraft:diamond_helmet', 'minecraft:diamond_chestplate', 'minecraft:diamond_leggings', 'minecraft:diamond_boots',
        'minecraft:diamond_horse_armor'
    ];
    const diamond_tool_items = [
        'minecraft:diamond_sword', 'minecraft:diamond_pickaxe', 'minecraft:diamond_axe', 'minecraft:diamond_shovel', 'minecraft:diamond_hoe',
        'epicfight:uchigatana'
    ];

    iron_armor_items.forEach(item => {
        event.stonecutting('2x minecraft:iron_ingot', item).id(`kubejs:stonecutting/recycle_${item.replace('minecraft:', '').replace(':', '_')}`);
    });

    // SỬA LỖI TẠI ĐÂY: Dùng .concat() để nối mảng thay vì cú pháp '...'
    iron_tool_items.concat(chainmail_armor_items).forEach(item => {
        event.stonecutting('minecraft:iron_ingot', item).id(`kubejs:stonecutting/recycle_${item.replace('minecraft:', '').replace(':', '_')}`);
    });

    gold_gear_items.forEach(item => {
        event.stonecutting('minecraft:gold_ingot', item).id(`kubejs:stonecutting/recycle_${item.replace('minecraft:', '').replace(':', '_')}`);
    });

    diamond_armor_items.forEach(item => {
        event.stonecutting('2x minecraft:diamond', item).id(`kubejs:stonecutting/recycle_${item.replace('minecraft:', '').replace(':', '_')}`);
    });

    diamond_tool_items.forEach(item => {
        event.stonecutting('minecraft:diamond', item).id(`kubejs:stonecutting/recycle_${item.replace('minecraft:', '').replace(':', '_')}`);
    });

    event.campfireCooking(
        'minecraft:iron_ingot',
        'minecraft:enchanted_book'
    )
        .cookingTime(600)
        .xp(1.0)
        .id('kubejs:campfire_cooking/enchanted_book_to_iron');
});