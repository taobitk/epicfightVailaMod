// Tên file: kubejs/startup_scripts/item_modifications/minecraft/modify_scythe_speed.js
// Mục đích: Tăng tốc độ tấn công gốc của cây lưỡi hái Eternal Night Scythe thêm +1.0 (từ 1.0 -> 2.0)

ItemEvents.modification(event => {
    event.modify('epicfightx:eternal_night_scythe', item => {
        // Tốc độ gốc là 1.0 (modifier -3.0). Thiết lập thành -2.0 để tốc độ hiển thị cuối cùng là 2.0 (4.0 - 2.0 = 2.0)
        item.setAttackSpeed(2.0);
    });
});
