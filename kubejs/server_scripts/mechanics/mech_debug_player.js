// Tên file: kubejs/server_scripts/mechanics/mech_debug_player.js
// Mục đích: Đăng ký lệnh chat `/debugplayer` và `/fixbreak` để debug và xử lý lỗi cờ chặn đập block.

ServerEvents.commandRegistry(event => {
    const { commands } = event;
    
    // Lệnh 1: `/debugplayer` - Xem chi tiết NBT và thuộc tính của người chơi
    event.register(
        commands.literal('debugplayer')
            .requires(src => src.hasPermission(2)) // Chỉ cho phép OP (Admin) sử dụng
            .executes(ctx => {
                let player = ctx.source.player;
                if (!player) {
                    ctx.source.sendFailure(Text.of("Lệnh này chỉ có thể sử dụng bởi người chơi!"));
                    return 0;
                }
                
                player.tell(Text.of("========== 🛠️ PLAYER DEBUGGER 🛠️ ==========").gold());
                player.tell(Text.of(`👤 Người chơi: ${player.username} | UUID: ${player.uuid.toString()}`).white());
                
                // 1. Chỉ số sinh mạng cơ bản
                player.tell(Text.of(`❤️ Máu: ${player.health.toFixed(1)} / ${player.maxHealth.toFixed(1)}`).red());
                
                // 2. Các thuộc tính (Attributes) quan trọng
                let speed = player.getAttributeValue('minecraft:generic.movement_speed');
                let atkSpeed = player.getAttributeValue('minecraft:generic.attack_speed');
                let atkDmg = player.getAttributeValue('minecraft:generic.attack_damage');
                let armor = player.getAttributeValue('minecraft:generic.armor');
                
                player.tell(Text.of("⚔️ Thuộc tính hiện tại:").yellow());
                player.tell(Text.of(` - Tốc độ chạy (generic.movement_speed): ${speed.toFixed(4)}`).gray());
                player.tell(Text.of(` - Tốc độ đánh (generic.attack_speed): ${atkSpeed.toFixed(2)}`).gray());
                player.tell(Text.of(` - Sát thương tay (generic.attack_damage): ${atkDmg.toFixed(2)}`).gray());
                player.tell(Text.of(` - Giáp bảo vệ (generic.armor): ${armor.toFixed(1)}`).gray());
                
                // 3. Vật phẩm trên tay và NBT
                let mainItem = player.mainHandItem;
                let offItem = player.offHandItem;
                player.tell(Text.of("🎒 Vật phẩm cầm trên tay:").yellow());
                player.tell(Text.of(` - Tay chính: ${mainItem.id} (NBT: ${mainItem.nbt ? mainItem.nbt.toString() : 'Không có'})`).gray());
                player.tell(Text.of(` - Tay phụ: ${offItem.id} (NBT: ${offItem.nbt ? offItem.nbt.toString() : 'Không có'})`).gray());

                // 4. Hiệu ứng thuốc (Potion Effects) đang hoạt động
                let effects = player.getActiveEffects();
                player.tell(Text.of(`🧪 Hiệu ứng đang hoạt động (${effects.size()}):`).yellow());
                effects.forEach(effect => {
                    player.tell(Text.of(` - ${effect.getDescriptionId()} | Cấp độ: ${effect.amplifier + 1} | Thời gian còn lại: ${(effect.duration / 20).toFixed(1)}s`).gray());
                });
                
                // 5. Dữ liệu persistentData (NBT lưu động của KubeJS trên người)
                let pData = player.persistentData;
                let keys = pData ? pData.getAllKeys() : [];
                player.tell(Text.of(`💾 KubeJS persistentData (${keys.size()} keys):`).yellow());
                if (keys.size() > 0) {
                    player.tell(Text.of(` - Dữ liệu NBT: ${pData.toString()}`).gray());
                } else {
                    player.tell(Text.of(" - Trống rỗng").gray());
                }
                
                // 6. Phân tích NBT gốc của Player bằng cách lọc bỏ các key rác cực lớn (như recipeBook, Inventory)
                if (player.nbt) {
                    console.log("=================== DETAILED PLAYER NBT DUMP ===================");
                    let nbtKeys = player.nbt.getAllKeys();
                    nbtKeys.forEach(key => {
                        if (key === 'recipeBook' || key === 'Inventory' || key.includes('recipe') || key === 'seenRecipes') {
                            return;
                        }
                        let val = player.nbt.get(key);
                        console.log(`[PlayerNBT] ${key}: ${val}`);
                    });
                    console.log("================================================================");
                    player.tell(Text.of("💾 Đã xuất NBT chọn lọc (lọc bỏ rác) vào server.log!").aqua());
                }
                
                player.tell(Text.of("=========================================").gold());
                return 1;
            })
    );

    // Lệnh 2: `/fixbreak` - Cưỡng ép cờ IMFlags:CanBreakBlocks thành 1 để sửa lỗi không đập được block
    event.register(
        commands.literal('fixbreak')
            .requires(src => src.hasPermission(2)) // Yêu cầu quyền OP
            .executes(ctx => {
                let player = ctx.source.player;
                if (!player) {
                    ctx.source.sendFailure(Text.of("Lệnh này chỉ có thể sử dụng bởi người chơi!"));
                    return 0;
                }

                if (player.nbt) {
                    let nbt = player.nbt;
                    
                    // Lấy hoặc tạo mới thẻ Compound "IMFlags"
                    let imFlags = nbt.getCompound('IMFlags');
                    
                    // Ghi đè giá trị CanBreakBlocks thành 1 và ép kiểu phù hợp
                    imFlags.putInt('CanBreakBlocks', 1);
                    imFlags.putByte('CanBreakBlocks', 1);
                    
                    // Nạp thẻ IMFlags ngược lại vào root NBT
                    nbt.put('IMFlags', imFlags);
                    
                    // Đồng bộ NBT đã sửa đổi vào Player
                    player.mergeNbt(nbt);
                    
                    player.tell(Text.of("🔧 [FixBreak] Đã ép cờ IMFlags.CanBreakBlocks thành 1 thành công! Hãy thử đập block.").green());
                    console.info(`[FixBreak] Đã cưỡng ép sửa cờ IMFlags.CanBreakBlocks thành 1 cho người chơi ${player.username}`);
                    return 1;
                } else {
                    ctx.source.sendFailure(Text.of("Không thể truy cập dữ liệu NBT của người chơi!"));
                    return 0;
                }
            })
    );
});
