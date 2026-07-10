// FileName: kubejs/server_scripts/recipes/removals/wom/remove_wom_loot.js
// Mục tiêu: Xóa HOÀN TOÀN tất cả vật phẩm thuộc mod 'Weapons of Miracles' (wom) khỏi mọi nguồn loot table (rương, mob drops, v.v.)

LootJS.modifiers(event => {
    // Sử dụng ký tự '@wom' để chỉ định tất cả các vật phẩm thuộc Mod ID 'wom'
    // Áp dụng modifier cho toàn bộ loot table bằng regex /.*/
    event.addLootTableModifier(/.*/)
        .removeLoot('@wom');
});
