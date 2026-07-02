// Tên file: kubejs/server_scripts/mechanics/mech_default_gamerules.js
// Mục đích: Tự động cấu hình các luật game (gamerules) mặc định khi thế giới/server được tải lên.

ServerEvents.loaded(event => {
    // Tự động bật mobGriefing thành true
    event.server.runCommandSilent('gamerule mobGriefing true');
    console.info('[Gamerules] Đã tự động kích hoạt luật game: mobGriefing = true');
});
