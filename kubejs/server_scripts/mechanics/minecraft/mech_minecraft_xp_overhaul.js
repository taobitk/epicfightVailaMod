// Tên file: KubeJS/server_scripts/mechanics/minecraft/mech_minecraft_xp_overhaul.js
// Mục đích: Quản lý hệ thống EXP Minecraft gốc (50 XP/cấp, chỉ nhận XP từ quái, chặn 12k XP rồng)

// Biến toàn cục để tạm thời cho phép EXP spawn khi quái chết
global.allowXpSpawn = false;

// 1. Chỉ cho phép hạt EXP spawn khi quái vật chết (Chặn các nguồn phụ như đập quặng, câu cá, nung đồ)
EntityEvents.spawned(event => {
    let entity = event.entity;
    if (entity.type === 'minecraft:experience_orb') {
        if (!global.allowXpSpawn) {
            event.cancel();
        }
    }
});

// Bật cờ cho phép spawn EXP khi quái chết
EntityEvents.death(event => {
    let entity = event.entity;
    if (!entity.isPlayer()) {
        // Xử lý Rồng Ender Dragon: chặn rơi hạt EXP, tặng thẳng 500 XP
        if (entity.type === 'minecraft:ender_dragon') {
            let players = entity.level.getPlayers();
            players.forEach(p => {
                if (p.distanceToEntity(entity) < 100.0) {
                    let pData = p.getPersistentData();
                    let currentCustomXp = pData.getDouble('custom_xp') || 0.0;
                    pData.putDouble('custom_xp', currentCustomXp + 500.0);
                    p.tell("§a[Hệ Thống] Bạn nhận được 500 XP từ việc đánh bại Rồng Ender!");
                    syncCustomXp(p);
                }
            });
            return;
        }

        // Với quái thường, cho phép spawn hạt EXP trong vòng 1 tick
        global.allowXpSpawn = true;
        event.server.scheduleInTicks(1, () => {
            global.allowXpSpawn = false;
        });
    }
});

// 2. Hàm đồng bộ hiển thị cấp độ thực tế (50 XP/cấp) cho người chơi
function syncCustomXp(player) {
    let pData = player.getPersistentData();
    let customXp = pData.getDouble('custom_xp') || 0.0;
    
    let newLevel = Math.floor(customXp / 50.0);
    let newProgress = (customXp % 50.0) / 50.0;
    
    player.experienceLevel = newLevel;
    player.experienceProgress = newProgress;
}

// 3. Theo dõi việc tiêu hao Level (Enchant, ép đồ) để cập nhật lại custom_xp
PlayerEvents.tick(event => {
    let player = event.player;
    if (player.age % 20 === 0) {
        let pData = player.getPersistentData();
        let customXp = pData.getDouble('custom_xp') || 0.0;
        let expectedLevel = Math.floor(customXp / 50.0);
        
        if (player.experienceLevel != expectedLevel) {
            // Đồng bộ ngược lại custom_xp dựa trên cấp độ và tiến trình mới
            let newXp = player.experienceLevel * 50.0 + player.experienceProgress * 50.0;
            pData.putDouble('custom_xp', newXp);
        }
    }
});
