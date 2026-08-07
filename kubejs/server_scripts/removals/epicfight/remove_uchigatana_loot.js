// Server Script: Xóa hoàn toàn Uchigatana (epicfight:uchigatana) khỏi tất cả các bảng loot bằng LootJS

LootJS.modifiers(event => {
    // Dùng regex /.*/ để khớp toàn bộ bảng loot (Toàn bộ quái, rương đồ, v.v...)
    event.addLootTableModifier(/.*/).removeLoot('epicfight:uchigatana');
});
