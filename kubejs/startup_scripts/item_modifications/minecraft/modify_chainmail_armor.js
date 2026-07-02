// Tên file: kubejs/startup_scripts/item_modifications/minecraft/modify_chainmail_armor.js
// Mục đích: Thay đổi độ bền gốc của Giáp Xích (Chainmail Armor) lên 9999.

ItemEvents.modification(event => {
    const chainmailPieces = [
        'minecraft:chainmail_helmet',
        'minecraft:chainmail_chestplate',
        'minecraft:chainmail_leggings',
        'minecraft:chainmail_boots'
    ];

    event.modify(chainmailPieces, item => {
        item.maxDamage = 9999;
    });
});
