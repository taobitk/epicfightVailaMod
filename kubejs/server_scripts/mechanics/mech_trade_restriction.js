// Tên file: kubejs/server_scripts/mechanics/mech_trade_restriction.js
// Mục đích: Cấm người chơi giao dịch với dân làng (Villager).

console.info('[MechTrade] Script loaded.');

ItemEvents.entityInteracted(event => {
    // Kiểm tra nếu thực thể bị click là Dân làng (Villager)
    if (event.target.type === 'minecraft:villager') {

        // Kiểm tra Giấy Thông Hành (kubejs:travel_permit)
        let permitId = 'kubejs:travel_permit';
        let hasPermit = (event.player.mainHandItem.id === permitId || event.player.offHandItem.id === permitId);

        if (hasPermit) {
            // Có giấy -> Cho phép giao dịch (không làm gì cả)
            return;
        }

        // Chỉ xử lý tay chính để tránh spam tin nhắn 2 lần (Main hand + Off hand)
        if (event.hand != 'MAIN_HAND') return;

        // Thông báo
        event.player.tell(Text.of("Dân làng nghi ngờ: 'Ngươi không có Giấy Thông Hành, ta không thể giao dịch...'").gold());

        // Hủy sự kiện -> Không mở GUI trade
        event.cancel();
    }
});
