// Tên file: KubeJS/startup_scripts/mechanics/startup_xp_pickup_handler.js
// Mục đích: Lắng nghe sự kiện nhặt hạt EXP của Forge (chỉ chạy ở startup_scripts vì ForgeEvents thuộc về startup context)

ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerXpEvent$PickupXp', event => {
    let player = event.getEntity();
    let orb = event.getOrb();
    let xpValue = orb.getValue();
    
    // Triệt tiêu hạt EXP để không bị nhặt theo cách vanilla
    orb.discard();
    event.setCanceled(true);
    
    // Cộng dồn vào biến EXP tùy chỉnh lưu trong ForgeData của người chơi
    let pData = player.getPersistentData();
    let currentCustomXp = pData.getDouble('custom_xp') || 0.0;
    let newCustomXp = currentCustomXp + xpValue;
    pData.putDouble('custom_xp', newCustomXp);
    
    // Quy đổi thẳng sang cấp độ hiển thị (50 XP/cấp)
    let newLevel = Math.floor(newCustomXp / 50.0);
    let newProgress = (newCustomXp % 50.0) / 50.0;
    
    player.experienceLevel = newLevel;
    player.experienceProgress = newProgress;
});

