// Server script - Theo dỗi Class Origin & Chỉ số Thuộc tính (Attributes) nhân vật trong RAM & NBT
// Lệnh trong game: /mystats hoặc /checkstats

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(
        Commands.literal('mystats')
            .executes(ctx => {
                let player = ctx.getSource().getPlayer();
                if (!player) return 0;
                logAndReportPlayerStats(player, ctx.getSource());
                return 1;
            })
    );

    event.register(
        Commands.literal('checkstats')
            .executes(ctx => {
                let player = ctx.getSource().getPlayer();
                if (!player) return 0;
                logAndReportPlayerStats(player, ctx.getSource());
                return 1;
            })
    );
});

// Tự động log khi người chơi đăng nhập
PlayerEvents.loggedIn(event => {
    try {
        let player = event.player;
        if (player) {
            console.log(`[OriginStats-Tracker] Player ${player.username} logged in. Tracking stats...`);
            logAndReportPlayerStats(player, null);
        }
    } catch (e) {
        console.log('[OriginStats-Tracker] Error on loggedIn: ' + e);
    }
});

function logAndReportPlayerStats(player, source) {
    try {
        let username = player.username;
        let nbt = player.nbt;
        
        // 1. Đọc Origin Class & Class Tiến Hóa
        let evolvedClass = "Chưa tiến hóa (Tier 1)";
        try {
            let forgeCaps = nbt.getCompound('ForgeCaps');
            if (forgeCaps && forgeCaps.contains('originstats:player_stats')) {
                let osCap = forgeCaps.getCompound('originstats:player_stats');
                if (osCap && osCap.contains('EvolvedClass')) {
                    let ev = osCap.getString('EvolvedClass');
                    if (ev && ev.length > 0) evolvedClass = ev;
                }
            }
        } catch (eNbt) {}

        // 2. Lấy thuộc tính thực tế trong RAM (Attributes)
        let getAttrVal = (attrId) => {
            try {
                let ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries');
                let ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');
                let attr = ForgeRegistries.ATTRIBUTES.getValue(new ResourceLocation(attrId));
                if (attr) {
                    let inst = player.getAttribute(attr);
                    if (inst) return Math.round(inst.getValue() * 100) / 100;
                }
            } catch (err) {}
            return "N/A";
        };

        let maxHp = getAttrVal('minecraft:generic.max_health');
        let armor = getAttrVal('minecraft:generic.armor');
        let atkDmg = getAttrVal('minecraft:generic.attack_damage');
        let moveSpeed = getAttrVal('minecraft:generic.movement_speed');
        let stamina = getAttrVal('epicfight:staminar');
        let staminaRegen = getAttrVal('epicfight:stamina_regen');

        // 3. Đọc danh sách Stat Levels đã cộng trong NBT OriginStats
        let statLevelsStr = "None";
        try {
            let forgeCaps = nbt.getCompound('ForgeCaps');
            if (forgeCaps && forgeCaps.contains('originstats:player_stats')) {
                let osCap = forgeCaps.getCompound('originstats:player_stats');
                if (osCap && osCap.contains('StatLevels')) {
                    let levelsTag = osCap.getCompound('StatLevels');
                    let keys = levelsTag.getAllKeys();
                    let pairs = [];
                    keys.forEach(k => {
                        pairs.push(`${k}: Lv.${levelsTag.getInt(k)}`);
                    });
                    if (pairs.length > 0) statLevelsStr = pairs.join(', ');
                }
            }
        } catch (eLevels) {}

        // 4. In thông tin ra Console log
        console.log(`================ [ORIGINSTATS TRACKER: ${username}] ================`);
        console.log(`- Class Tiến Hóa (EvolvedClass): ${evolvedClass}`);
        console.log(`- Stats NBT đã nâng: ${statLevelsStr}`);
        console.log(`- RAM Attributes Thực Tế:`);
        console.log(`  + Máu Tối Đa (Max HP): ${maxHp}`);
        console.log(`  + Giáp (Armor): ${armor}`);
        console.log(`  + Sát Thương (Attack Damage): ${atkDmg}`);
        console.log(`  + Tốc Độ Di Chuyển: ${moveSpeed}`);
        console.log(`  + Thể Lực (Stamina): ${stamina}`);
        console.log(`  + Hồi Thể Lực (Stamina Regen): ${staminaRegen}`);
        console.log(`=====================================================================`);

        // 5. Gửi thông báo trực tiếp trên Chat cho Người Chơi (nếu gọi bằng Lệnh)
        if (source) {
            source.sendSuccess(Text.of(`§e=== 📊 THÔNG SỐ NHÂN VẬT (${username}) ===`).bold(), false);
            source.sendSuccess(Text.of(`§bClass Tiến Hóa: §f${evolvedClass}`), false);
            source.sendSuccess(Text.of(`§aMáu Tối Đa (RAM): §f${maxHp} HP`), false);
            source.sendSuccess(Text.of(`§aGiáp (RAM): §f${armor}`), false);
            source.sendSuccess(Text.of(`§aSát Thương (RAM): §f${atkDmg}`), false);
            source.sendSuccess(Text.of(`§aThể Lực (RAM): §f${stamina} | Hồi: ${staminaRegen}`), false);
            source.sendSuccess(Text.of(`§dCấp Chỉ Số (NBT): §f${statLevelsStr}`), false);
        }
    } catch (errGlobal) {
        console.log('[OriginStats-Tracker] Error logging player stats: ' + errGlobal);
    }
}
