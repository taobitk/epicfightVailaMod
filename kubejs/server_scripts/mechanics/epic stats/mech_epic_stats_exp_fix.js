// Tên file: KubeJS/server_scripts/mechanics/epic stats/mech_epic_stats_exp_fix.js
// Mục đích: Tự động điều chỉnh giới hạn EXP thăng cấp theo từng mốc Level (10 cấp đầu mặc định 100 EXP)

const EpicStatsModVariables = Java.loadClass('net.felinamods.epicstatsmodremastered.network.EpicStatsModRemasteredModVariables');
const PlayerVariables = Java.loadClass('net.felinamods.epicstatsmodremastered.network.EpicStatsModRemasteredModVariables$PlayerVariables');
const PLAYER_VARIABLES_CAPABILITY = EpicStatsModVariables.PLAYER_VARIABLES_CAPABILITY;

PlayerEvents.tick(event => {
    let player = event.player;
    
    // Tối ưu hóa: Chỉ kiểm tra mỗi 1 giây (20 ticks) một lần để tránh nặng server
    if (player.age % 20 === 0) {
        let cap = player.getCapability(PLAYER_VARIABLES_CAPABILITY).orElse(null);
        if (cap) {
            let currentLvl = cap.player_lvl;
            let currentMaxXp = cap.EXP_lvl_max;
            let targetExp = 2000.0; // Mặc định từ cấp 56 trở lên là 2000 EXP
            
            // Phân bổ EXP theo yêu cầu của sếp
            if (currentLvl <= 5.0) {
                targetExp = 50.0;
            } else if (currentLvl <= 15.0) {
                targetExp = 200.0;
            } else if (currentLvl <= 25.0) {
                targetExp = 500.0;
            } else if (currentLvl <= 35.0) {
                targetExp = 1000.0;
            } else if (currentLvl <= 55.0) {
                targetExp = 1500.0;
            }
            
            console.log("[EpicStats-Debug] Player: " + player.username + " | Lvl: " + currentLvl + " | CurrentMaxXP: " + currentMaxXp + " | TargetXP: " + targetExp);
            
            // Nếu giới hạn EXP hiện tại khác với mốc yêu cầu, tiến hành đồng bộ lại
            if (currentMaxXp != targetExp) {
                cap.EXP_lvl_max = targetExp;
                
                // Đồng bộ xuống Client để cập nhật giao diện hiển thị
                cap.syncPlayerVariables(player);
                
                player.tell("§a[Hệ Thống] Giới hạn EXP thăng cấp ở Cấp " + Math.round(currentLvl) + " là " + Math.round(targetExp) + "!");
                console.log("[EpicStats-Fix] Cap nhat Max EXP cap " + Math.round(currentLvl) + " thanh " + targetExp + " cho " + player.username);
            }
        } else {
            console.log("[EpicStats-Debug] Cap is null for player " + player.username);
        }
    }
});
