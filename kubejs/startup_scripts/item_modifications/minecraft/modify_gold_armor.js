// Tên file: kubejs/startup_scripts/item_modifications/minecraft/modify_gold_armor.js
// Mục đích: Thay đổi thuộc tính gốc của Giáp Vàng (Độ bền 1500, Giáp 3/6/5/4).

ItemEvents.modification(event => {
    // Mũ vàng: Giáp 3, Độ bền 1500
    event.modify('minecraft:golden_helmet', item => {
        item.maxDamage = 1500;
        item.armorProtection = 3.0;
    });

    // Áo vàng: Giáp 6, Độ bền 1500
    event.modify('minecraft:golden_chestplate', item => {
        item.maxDamage = 1500;
        item.armorProtection = 6.0;
    });

    // Quần vàng: Giáp 5, Độ bền 1500
    event.modify('minecraft:golden_leggings', item => {
        item.maxDamage = 1500;
        item.armorProtection = 5.0;
    });

    // Giày vàng: Giáp 4, Độ bền 1500
    event.modify('minecraft:golden_boots', item => {
        item.maxDamage = 1500;
        item.armorProtection = 4.0;
    });
});
