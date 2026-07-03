// Tên file: kubejs/startup_scripts/item_modifications/prefab/modify_prefab_sword_speed.js
// Mục đích: Chỉnh sửa tốc độ đánh gốc cho tất cả kiếm Swift Blade từ mod Prefab thành 1.6 bằng Regular Expression.

ItemEvents.modification(event => {
    // Sử dụng Regular Expression để khớp với tất cả ID bắt đầu bằng 'prefab:item_swift_blade_'
    event.modify(/prefab:item_swift_blade_.*/, item => {
        // Trong Minecraft, tốc độ đánh cuối cùng = 4.0 (gốc của Player) + modifier.
        // Để đạt tốc độ đánh cuối cùng hiển thị là 1.6 (giống kiếm thường), modifier cần là -2.4 (4.0 - 2.4 = 1.6).
        item.setAttackSpeed(-2.4);
    });
});