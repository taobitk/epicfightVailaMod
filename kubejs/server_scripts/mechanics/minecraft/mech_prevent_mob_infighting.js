// Tên file: kubejs/server_scripts/mechanics/mech_prevent_mob_infighting.js
// Mục đích: Đưa quái vật hoang dã vào team 'monsters' để ngăn chúng tự đánh nhau khi bắn nhầm.

ServerEvents.loaded(event => {
    // Tạo team monsters nếu chưa có và tắt friendlyfire
    event.server.runCommandSilent('team add monsters');
    event.server.runCommandSilent('team modify monsters friendlyfire false');
    
    // Đặt luật chơi giới hạn ngộp thở thực thể dồn góc luôn là 100
    event.server.runCommandSilent('gamerule maxEntityCramming 100');
    
    console.info('[Infighting] Đã cấu hình team monsters: friendlyfire = false | maxEntityCramming = 100');
});

EntityEvents.spawned(event => {
    let entity = event.entity;
    if (entity && entity.isMonster()) {
        let forgeData = entity.nbt.getCompound('ForgeData');
        let hasOwner = (forgeData && forgeData.contains('ownerUUID')) || entity.nbt.contains('Owner');

        // Chỉ thêm vào team monsters nếu là quái hoang dã (chưa có chủ sở hữu)
        if (!hasOwner) {
            event.server.runCommandSilent('team join monsters ' + entity.uuid.toString());
        }
    }
});

// Ngăn hoàn toàn quái vật trong team monsters gây sát thương cho nhau (giải quyết lỗi của Epic Fight/Sonic Boom)
EntityEvents.hurt(event => {
    let entity = event.entity; // Nạn nhân
    let source = event.source; // Nguồn sát thương
    
    if (entity && entity.isMonster() && source && source.actual) {
        let attacker = source.actual;
        if (attacker.isMonster()) {
            // Nếu cả nạn nhân và kẻ tấn công đều thuộc team monsters -> Hủy sát thương
            if (entity.team && entity.team.name === 'monsters' && attacker.team && attacker.team.name === 'monsters') {
                event.cancel();
            }
        }
    }
});
