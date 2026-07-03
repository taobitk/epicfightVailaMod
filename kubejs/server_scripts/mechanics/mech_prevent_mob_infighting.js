// Tên file: kubejs/server_scripts/mechanics/mech_prevent_mob_infighting.js
// Mục đích: Đưa quái vật hoang dã vào team 'monsters' để ngăn chúng tự đánh nhau khi bắn nhầm.

ServerEvents.loaded(event => {
    // Tạo team monsters nếu chưa có và tắt friendlyfire
    event.server.runCommandSilent('team add monsters');
    event.server.runCommandSilent('team modify monsters friendlyfire false');
    console.info('[Infighting] Đã cấu hình team monsters: friendlyfire = false');
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
