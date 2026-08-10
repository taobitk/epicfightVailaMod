// Tên file: kubejs/server_scripts/mechanics/general/auto_grant_class_stages.js
// Tự động cấp GameStage Cấp 1 (stage_warrior, stage_assassin, stage_archer, stage_lord) cho người chơi.
// Tối ưu hóa: Nếu người chơi đã sở hữu bất kỳ Stage Cấp 1 nào rồi thì DỪNG QUÉT NGAY LẬP TỨC (Skip 100% tài nguyên CPU).

const BASE_CLASS_STAGES = [
    'stage_archer',
    'stage_warrior',
    'stage_assassin',
    'stage_lord'
];

function hasAnyBaseStage(player) {
    for (let i = 0; i < BASE_CLASS_STAGES.length; i++) {
        if (player.stages.has(BASE_CLASS_STAGES[i])) {
            return true;
        }
    }
    return false;
}

PlayerEvents.tick(event => {
    let player = event.player;
    if (!player) return;
    
    // NẾU ĐÃ CÓ STAGE RỒI THÌ DỪNG KHÔNG QUÉT NỮA (Tối ưu 0ms)
    if (hasAnyBaseStage(player)) return;

    if (player.age % 40 !== 0) return; // Quét mỗi 2 giây đối với người chơi chưa chọn Class

    try {
        let nbtStr = player.nbt.toString().toLowerCase();

        // 🏹 1. HỆ XẠ THỦ (ARCHER)
        if (nbtStr.includes('originstats:archer') || nbtStr.includes('origin:"originstats:archer"') || nbtStr.includes('archer')) {
            player.stages.add('stage_archer');
            player.tell('§a[OriginStats] Tự động cấp GameStage: §eXạ Thủ (stage_archer)');
            return;
        }

        // 🛡️ 2. HỆ CHIẾN BINH (WARRIOR)
        if (nbtStr.includes('originstats:warrior') || nbtStr.includes('origin:"originstats:warrior"') || nbtStr.includes('warrior')) {
            player.stages.add('stage_warrior');
            player.tell('§a[OriginStats] Tự động cấp GameStage: §eChiến Binh (stage_warrior)');
            return;
        }

        // 🗡️ 3. HỆ SÁT THỦ (ASSASSIN)
        if (nbtStr.includes('originstats:assassin') || nbtStr.includes('origin:"originstats:assassin"') || nbtStr.includes('assassin')) {
            player.stages.add('stage_assassin');
            player.tell('§a[OriginStats] Tự động cấp GameStage: §eSát Thủ (stage_assassin)');
            return;
        }

        // 👑 4. HỆ LÃNH CHÚA (LORD)
        if (nbtStr.includes('originstats:lord') || nbtStr.includes('origin:"originstats:lord"') || nbtStr.includes('lord')) {
            player.stages.add('stage_lord');
            player.tell('§a[OriginStats] Tự động cấp GameStage: §eLãnh Chúa (stage_lord)');
            return;
        }
    } catch (e) {}
});

// Kiểm tra nhanh lúc vào game đối với người chơi đã chọn Class từ trước
PlayerEvents.loggedIn(event => {
    let player = event.player;
    if (!player || hasAnyBaseStage(player)) return;

    try {
        let nbtStr = player.nbt.toString().toLowerCase();
        if (nbtStr.includes('archer')) player.stages.add('stage_archer');
        else if (nbtStr.includes('warrior')) player.stages.add('stage_warrior');
        else if (nbtStr.includes('assassin')) player.stages.add('stage_assassin');
        else if (nbtStr.includes('lord')) player.stages.add('stage_lord');
    } catch (e) {}
});
