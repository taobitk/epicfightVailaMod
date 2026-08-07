// Server script - Universal Handler for Structure Locator Scroll using NBT

ItemEvents.rightClicked(event => {
    let item = event.item;
    let player = event.player;
    if (!player || event.level.isClientSide()) return;

    if (item.id === 'kubejs:structure_locator_scroll') {
        let nbt = item.nbt;
        if (!nbt || !nbt.contains('target_structure')) {
            player.tell('§c[OriginStats] Cuộn giấy này chưa được ghi nhận mục tiêu công trình nào!');
            event.cancel();
            return;
        }

        let targetStructure = nbt.getString('target_structure');
        let structureName = nbt.contains('structure_name') ? nbt.getString('structure_name') : targetStructure;

        // Phát tín hiệu quét & hiệu ứng âm thanh
        player.runCommandSilent(`playsound minecraft:block.amethyst_block.chime player @s ~ ~ ~ 1.0 1.2`);
        player.runCommandSilent(`particle minecraft:end_rod ${player.x} ${player.y + 1.2} ${player.z} 0.5 0.5 0.5 0.1 30`);

        // Thông báo Tên công trình + ID công trình trước
        player.tell(`§a§l[ĐỊNH VỊ CÔNG TRÌNH] §fKích hoạt quét công trình: §e${structureName}`);
        player.tell(`§7▸ ID kĩ thuật: §c${targetStructure}`);

        // Thực thi lệnh locate structure và in tọa độ trực tiếp lên khung chat
        let server = player.server;
        let command = `locate structure ${targetStructure}`;
        server.commands.performPrefixedCommand(player.createCommandSourceStack(), command);

        // Trừ 1 cuộn giấy sau khi sử dụng thành công
        item.shrink(1);
        event.cancel();
    }
});
