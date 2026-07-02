ServerEvents.recipes(event => {
    // Thêm công thức chế tạo Giáp Kim Cương dùng NIDG Ingot và gắn NBT Bất hoại
    // K = kubejs:nidg_ingot

    // Mũ
    event.shaped(
        Item.of('minecraft:diamond_helmet', '{Unbreakable:1b}')
            .withLore([Text.of('Bất hoại').gold()]),
        [
            'KKK',
            'K K'
        ], {
            K: 'kubejs:nidg_ingot'
        }
    ).id('kubejs:crafting/diamond_helmet_custom');

    // Áo
    event.shaped(
        Item.of('minecraft:diamond_chestplate', '{Unbreakable:1b}')
            .withLore([Text.of('Bất hoại').gold()]),
        [
            'K K',
            'KKK',
            'KKK'
        ], {
            K: 'kubejs:nidg_ingot'
        }
    ).id('kubejs:crafting/diamond_chestplate_custom');

    // Quần
    event.shaped(
        Item.of('minecraft:diamond_leggings', '{Unbreakable:1b}')
            .withLore([Text.of('Bất hoại').gold()]),
        [
            'KKK',
            'K K',
            'K K'
        ], {
            K: 'kubejs:nidg_ingot'
        }
    ).id('kubejs:crafting/diamond_leggings_custom');

    // Giày
    event.shaped(
        Item.of('minecraft:diamond_boots', '{Unbreakable:1b}')
            .withLore([Text.of('Bất hoại').gold()]),
        [
            'K K',
            'K K'
        ], {
            K: 'kubejs:nidg_ingot'
        }
    ).id('kubejs:crafting/diamond_boots_custom');
});
