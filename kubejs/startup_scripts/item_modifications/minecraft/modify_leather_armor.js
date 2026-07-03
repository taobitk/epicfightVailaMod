// Tên file: kubejs/startup_scripts/item_modifications/minecraft/modify_leather_armor.js
// Mục đích: Thay đổi độ bền gốc của Giáp Da lên 2000.

ItemEvents.modification(event => {
    // Mũ da: Độ bền 2000
    event.modify('minecraft:leather_helmet', item => {
        item.maxDamage = 2000;
    });

    // Áo da: Độ bền 2000
    event.modify('minecraft:leather_chestplate', item => {
        item.maxDamage = 2000;
    });

    // Quần da: Độ bền 2000
    event.modify('minecraft:leather_leggings', item => {
        item.maxDamage = 2000;
    });

    // Giày da: Độ bền 2000
    event.modify('minecraft:leather_boots', item => {
        item.maxDamage = 2000;
    });
});
