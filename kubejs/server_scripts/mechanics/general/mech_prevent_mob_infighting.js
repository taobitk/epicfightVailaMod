// Tên file: kubejs/server_scripts/mechanics/mech_prevent_mob_infighting.js
// Mục đích: Ngăn quái vật hoang dã tự đánh nhau.
// Fix: Dùng Scoreboard Tag (entity.addTag) thay vì team API vì tag ghi đồng bộ ngay lập tức,
//      trong khi team join command chạy async nên entity chưa kịp vào team trước khi bị đánh.

ServerEvents.loaded(event => {
    // Tạo team monsters và tắt friendlyfire (backup phòng thủ thứ 2)
    event.server.runCommandSilent('team add monsters');
    event.server.runCommandSilent('team modify monsters friendlyfire false');

    // Giới hạn ngộp thở khi đông quái
    event.server.runCommandSilent('gamerule maxEntityCramming 100');

    console.info('[Infighting] team monsters: friendlyfire=false | maxEntityCramming=100');
});

EntityEvents.spawned(event => {
    let entity = event.entity;
    if (!entity || !entity.isMonster()) return;

    // Bỏ qua quái đã có chủ hoặc quái triệu hồi (pet, companion, minion v.v.)
    if (entity.tags.contains('summoned_minion')) return;

    let nbt = entity.nbt;
    let forgeData = nbt ? nbt.getCompound('ForgeData') : null;
    let hasOwner = (forgeData && (forgeData.contains('ownerUUID') || forgeData.contains('Owner'))) || (nbt && (nbt.contains('Owner') || nbt.contains('SummonLifeTicks')));
    if (hasOwner) return;

    // Gán scoreboard tag ngay lập tức (đồng bộ, không async như team join command)
    entity.addTag('wild_monster');

    // Cho vào team monsters làm lớp bảo vệ thứ 2
    event.server.runCommandSilent('team join monsters ' + entity.uuid.toString());
});

EntityEvents.hurt(event => {
    let victim   = event.entity;
    let source   = event.source;
    if (!victim || !source || !source.actual) return;

    let attacker = source.actual;

    // Chỉ can thiệp khi cả 2 đều là quái và đều mang tag 'wild_monster'
    if (
        victim.isMonster()   && victim.tags.contains('wild_monster') &&
        attacker.isMonster() && attacker.tags.contains('wild_monster')
    ) {
        event.cancel();
    }
});
