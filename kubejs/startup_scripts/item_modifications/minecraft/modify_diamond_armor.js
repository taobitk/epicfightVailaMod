// Tên file: kubejs/startup_scripts/item_modifications/minecraft/modify_diamond_armor.js
// Mục đích: Thay đổi thuộc tính gốc của Giáp Kim Cương (Độ bền 999999, Giáp +2.5, Toughness +2).

ItemEvents.modification(event => {
    // Mũ kim cương: Giáp 5.5 (gốc 3), Toughness 4.0 (gốc 2), Độ bền 999999 (gần như bất hoại)
    event.modify('minecraft:diamond_helmet', item => {
        item.maxDamage = 999999;
        item.armorProtection = 5.5;
        item.armorToughness = 4.0;
    });

    // Áo kim cương: Giáp 10.5 (gốc 8), Toughness 4.0 (gốc 2), Độ bền 999999
    event.modify('minecraft:diamond_chestplate', item => {
        item.maxDamage = 999999;
        item.armorProtection = 10.5;
        item.armorToughness = 4.0;
    });

    // Quần kim cương: Giáp 8.5 (gốc 6), Toughness 4.0 (gốc 2), Độ bền 999999
    event.modify('minecraft:diamond_leggings', item => {
        item.maxDamage = 999999;
        item.armorProtection = 8.5;
        item.armorToughness = 4.0;
    });

    // Giày kim cương: Giáp 5.5 (gốc 3), Toughness 4.0 (gốc 2), Độ bền 999999
    event.modify('minecraft:diamond_boots', item => {
        item.maxDamage = 999999;
        item.armorProtection = 5.5;
        item.armorToughness = 4.0;
    });
});
