// // FileName: kubejs/server_scripts/delete_recipe/remove_playerstate.js
// // Mục đích: Xóa các vật phẩm của mod 'playerstats' khỏi các loot table của rương.
//
// LootJS.modifiers(event => {
//     // Danh sách các item ID cần xóa khỏi loot table
//     const itemsToRemove = [
//         'playerstats:upgrade_rune',
//         'playerstats:ability_crystal',
//         'playerstats:soul_fragment',
//         'playerstats:soul_stone',
//         'playerstats:attribute_boost_scroll'
//     ];
//
//     // Áp dụng thay đổi cho tất cả các loot table trong thư mục 'chests'
//     event.addLootTableModifier(/^minecraft:chests\/.*/)
//         .removeLoot(itemsToRemove);
// });
