// Tên file: kubejs/server_scripts/mechanics/mech_nether_gold.js
// Mục đích: Xử lý cơ chế Quặng Vàng Nether (Luôn xóa loot và báo vàng giả).

LootJS.modifiers(event => {
    // Luôn xóa loot của Nether Gold Ore
    event.addBlockLootModifier('minecraft:nether_gold_ore').removeLoot('*');
});

BlockEvents.broken(event => {
    // Thông báo khi phá block
    if (event.block.id === 'minecraft:nether_gold_ore') {
        event.player.tell(Text.of('Đây là vàng giả!').red());
    }
});
