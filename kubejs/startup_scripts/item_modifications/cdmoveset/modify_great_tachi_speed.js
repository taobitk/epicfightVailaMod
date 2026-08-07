// Tên file: kubejs/startup_scripts/item_modifications/cdmoveset/modify_great_tachi_speed.js
// Mục đích: Tăng tốc độ đánh cho Crimson Fang (cdmoveset:great_tachi) thêm +0.6 (từ 1.20 thành 1.80).

ItemEvents.modification(event => {
    event.modify('cdmoveset:great_tachi', item => {
        // Trong Minecraft, tốc độ đánh hiển thị = 4.0 (gốc của Player) + modifier.
        // Tốc độ đánh gốc của món này là 1.20 (modifier = -2.8).
        // Tăng thêm +0.6 -> Tốc độ đánh hiển thị mới = 1.80 (modifier = 4.0 - 1.80 = -2.2).
        item.setAttackSpeed(-2.2);
    });
});
