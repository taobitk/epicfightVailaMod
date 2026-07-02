// FileName: kubejs/server_scripts/remove_wom_items.js
// Mục tiêu: Xóa một số vật phẩm của mod 'Weapons of Miracles' (wom) khỏi tất cả các loot table.

LootJS.modifiers(event => {
    // Danh sách các item ID cần xóa hoàn toàn khỏi game (không xuất hiện trong rương, mob drop, etc.)
    const itemsToRemove = [
        'wom:moonless',
        'wom:herrscher',
        'wom:ender_blaster',
        'wom:ruine',
        'wom:tormented_mind',
        'wom:agony',
        'wom:solar',
        'wom:demon_seal',
        'wom:eternal_fire_arcane'
    ];

    // Dòng này sẽ áp dụng thay đổi cho TẤT CẢ các loot table trong game
    // Bằng cách sử dụng regex /.*/ (khớp với mọi thứ)
    event.addLootTableModifier(/.*/)
        // Gọi hàm removeLoot và truyền vào danh sách các vật phẩm cần xóa
        .removeLoot(itemsToRemove);
});
