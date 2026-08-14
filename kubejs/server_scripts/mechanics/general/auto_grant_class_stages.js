// Tên file: kubejs/server_scripts/mechanics/general/auto_grant_class_stages.js
// Tự động cấp GameStage cho người chơi dựa trên Class OriginStats (Tier 1 và Tier 2).

PlayerEvents.tick(event => {
    let player = event.player;
    if (!player || player.age % 40 !== 0) return; // Quét 2 giây một lần để tiết kiệm CPU

    try {
        let nbtStr = player.nbt.toString().toLowerCase();

        // 👑 TIER 2: THÁNH HỘ VƯƠNG (HIGH LORD)
        if ((nbtStr.includes('tier2_high_lord') || nbtStr.includes('high_lord')) && !player.stages.has('stage_tier2_high_lord')) {
            player.stages.add('stage_tier2_high_lord');
            player.tell('§a[OriginStats] Tự động mở khóa GameStage: §eThánh Hộ Vương (stage_tier2_high_lord)');
        }

        // 💀 TIER 2: TRIỆU HỒI MA VƯƠNG (SUMMONER LORD)
        if ((nbtStr.includes('tier2_summoner_lord') || nbtStr.includes('summoner_lord')) && !player.stages.has('stage_tier2_summoner_lord')) {
            player.stages.add('stage_tier2_summoner_lord');
            player.tell('§a[OriginStats] Tự động mở khóa GameStage: §eTriệu Hồi Ma Vương (stage_tier2_summoner_lord)');
        }

        // 🏹 TIER 1: ARCHER
        if ((nbtStr.includes('originstats:archer') || nbtStr.includes('archer')) && !player.stages.has('stage_archer')) {
            player.stages.add('stage_archer');
        }

        // 🛡️ TIER 1: WARRIOR
        if ((nbtStr.includes('originstats:warrior') || nbtStr.includes('warrior')) && !player.stages.has('stage_warrior')) {
            player.stages.add('stage_warrior');
        }

        // 🗡️ TIER 1: ASSASSIN
        if ((nbtStr.includes('originstats:assassin') || nbtStr.includes('assassin')) && !player.stages.has('stage_assassin')) {
            player.stages.add('stage_assassin');
        }

        // 👑 TIER 1: LORD
        if ((nbtStr.includes('originstats:lord') || nbtStr.includes('lord')) && !player.stages.has('stage_lord')) {
            player.stages.add('stage_lord');
        }
    } catch (e) {}
});

// Kiểm tra lúc đăng nhập
PlayerEvents.loggedIn(event => {
    let player = event.player;
    if (!player) return;

    try {
        let nbtStr = player.nbt.toString().toLowerCase();
        if (nbtStr.includes('tier2_high_lord') || nbtStr.includes('high_lord')) player.stages.add('stage_tier2_high_lord');
        if (nbtStr.includes('tier2_summoner_lord') || nbtStr.includes('summoner_lord')) player.stages.add('stage_tier2_summoner_lord');
        if (nbtStr.includes('archer')) player.stages.add('stage_archer');
        if (nbtStr.includes('warrior')) player.stages.add('stage_warrior');
        if (nbtStr.includes('assassin')) player.stages.add('stage_assassin');
        if (nbtStr.includes('lord')) player.stages.add('stage_lord');
    } catch (e) {}
});
