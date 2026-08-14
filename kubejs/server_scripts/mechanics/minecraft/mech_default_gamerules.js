// Tên file: kubejs/server_scripts/mechanics/minecraft/mech_default_gamerules.js
// Mục đích: Tự động cấu hình các luật game (gamerules) mặc định khi thế giới/server được tải lên.

ServerEvents.loaded(event => {
    // Tự động bật mobGriefing thành true
    event.server.runCommandSilent('gamerule mobGriefing true');
    
    // Tự động tắt cháy lan (Tắt doFireTick để lửa không lan ra nhà cửa/cây cối)
    event.server.runCommandSilent('gamerule doFireTick false');
    
    console.info('[Gamerules] Đã tự động kích hoạt luật game: mobGriefing = true, doFireTick = false');
});
