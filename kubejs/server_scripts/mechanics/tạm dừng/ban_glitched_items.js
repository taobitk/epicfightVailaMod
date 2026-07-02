// // ==========================================
// // CƠ CHẾ CẤM VẬT PHẨM LỖI (BAN GLITCHED ITEMS)
// // ==========================================

// const BANNED_ITEMS = [
//     'legendary_monsters:withered_scythe'
// ];

// // 1. Chặn Click Chuột Phải (Sử dụng Item/Skill)
// ItemEvents.rightClicked(event => {
//     if (BANNED_ITEMS.includes(event.item.id)) {
//         event.cancel(); // Hủy bỏ hành động
//         event.player.tell(Text.red("Vật phẩm này đang bị lỗi và tạm thời bị vô hiệu hóa!"));
//     }
// });

// // 2. Chặn Tấn Công (Left Click)
// EntityEvents.hurt(event => {
//     if (!event.source.player) return;

//     const player = event.source.player;
//     const item = player.getMainHandItem();

//     if (item && BANNED_ITEMS.includes(item.id)) {
//         event.cancel(); // Hủy bỏ sát thương
//         player.tell(Text.red("Vật phẩm này đang bị lỗi và không thể gây sát thương!"));
//     }
// });

// // 3. Chặn Click Chuột Trái vào Block (Phá Block/Interact)
// BlockEvents.rightClicked(event => {
//     if (BANNED_ITEMS.includes(event.item.id)) {
//         event.cancel();
//     }
// });
