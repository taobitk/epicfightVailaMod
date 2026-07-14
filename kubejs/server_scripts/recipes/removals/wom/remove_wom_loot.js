// FileName: kubejs/server_scripts/recipes/removals/wom/remove_wom_loot.js
// Mục tiêu: Xóa HOÀN TOÀN tất cả vật phẩm thuộc mod 'Weapons of Miracles' (wom) khỏi mọi nguồn loot table (rương, mob drops, v.v.)

LootJS.modifiers(event => {
    // Chỉ áp dụng cho các loot table thuộc loại rương (chứa ':chests/'), giữ nguyên quái rơi đồ
    event.addLootTableModifier(/.*:chests\/.*/)
        .removeLoot('@wom');
});
