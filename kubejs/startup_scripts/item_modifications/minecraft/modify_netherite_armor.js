// Tên file: kubejs/startup_scripts/item_modifications/minecraft/modify_netherite_armor.js
// Mục đích: Thay đổi thuộc tính gốc của Giáp Netherite (Giáp bằng kim cương, Toughness +0.5).

ItemEvents.modification(event => {
    // Mũ netherite: Giáp 5.5, Toughness 4.5 (diamond 4.0), Độ bền 999999 (gần như bất hoại)
    event.modify('minecraft:netherite_helmet', item => {
        item.maxDamage = 999999;
        item.armorProtection = 5.5;
        item.armorToughness = 4.5;
    });

    // Áo netherite: Giáp 10.5, Toughness 4.5, Độ bền 999999
    event.modify('minecraft:netherite_chestplate', item => {
        item.maxDamage = 999999;
        item.armorProtection = 10.5;
        item.armorToughness = 4.5;
    });

    // Quần netherite: Giáp 8.5, Toughness 4.5, Độ bền 999999
    event.modify('minecraft:netherite_leggings', item => {
        item.maxDamage = 999999;
        item.armorProtection = 8.5;
        item.armorToughness = 4.5;
    });

    // Giày netherite: Giáp 5.5, Toughness 4.5, Độ bền 999999
    event.modify('minecraft:netherite_boots', item => {
        item.maxDamage = 999999;
        item.armorProtection = 5.5;
        item.armorToughness = 4.5;
    });
});
