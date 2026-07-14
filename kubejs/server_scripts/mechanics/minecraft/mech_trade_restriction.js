// Tên file: kubejs/server_scripts/mechanics/mech_trade_restriction.js
// Mục đích: Cấm người chơi giao dịch với dân làng (Villager).

console.info('[MechTrade] Script loaded.');

ItemEvents.entityInteracted(event => {
    console.info(`[MechTrade] Interacted event fired. Target type: '${event.target.type}', Item in hand: '${event.item.id}'`);
    // Kiểm tra nếu thực thể bị click là Dân làng (Villager)
    if (String(event.target.type) === 'minecraft:villager') {

        // 1. Kiểm tra danh sách trắng các nghề nghiệp ĐƯỢC PHÉP giao dịch tự do (không cần Giấy Thông Hành)
        let whitelistedProfessions = [
            'bountiful_npc:receptionist'
        ];

        let profession = "";
        try {
            let targetNbt = event.target.getNbt();
            if (targetNbt && targetNbt.getCompound("VillagerData")) {
                profession = targetNbt.getCompound("VillagerData").getString("profession");
            }
        } catch (err) {
            console.error("[MechTrade] Error parsing VillagerData: " + err);
        }

        console.info(`[MechTrade] Player ${event.player.name.string} right-clicked villager. Current profession in NBT: '${profession}'`);

        if (whitelistedProfessions.includes(profession)) {
            // Cho phép giao dịch tự do -> không làm gì cả (cho phép event chạy tiếp)
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
