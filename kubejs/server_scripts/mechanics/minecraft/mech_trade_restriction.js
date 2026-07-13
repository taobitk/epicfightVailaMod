// Tên file: kubejs/server_scripts/mechanics/mech_trade_restriction.js
// Mục đích: Cấm người chơi giao dịch với dân làng (Villager).

console.info('[MechTrade] Script loaded.');

ItemEvents.entityInteracted(event => {
    // Kiểm tra nếu thực thể bị click là Dân làng (Villager)
    if (event.target.type === 'minecraft:villager') {

        // 1. Kiểm tra danh sách đen các nghề nghiệp cấm giao dịch hoàn toàn
        let blacklistedProfessions = [
            'bountiful_npc:receptionist'
        ];

        let profession = "";
        try {
            let targetNbt = event.target.getNbt();
            if (targetNbt && targetNbt.get("VillagerData")) {
                profession = targetNbt.get("VillagerData").get("profession").getAsString();
            }
        } catch (err) { }

        if (blacklistedProfessions.includes(profession)) {
            if (event.hand === 'MAIN_HAND') {
                event.player.tell(Text.of("Người này không muốn giao dịch với bạn...").red());
            }
            event.cancel();
            return;
        }

        // 2. Kiểm tra Giấy Thông Hành (kubejs:travel_permit) cho các dân làng khác
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
