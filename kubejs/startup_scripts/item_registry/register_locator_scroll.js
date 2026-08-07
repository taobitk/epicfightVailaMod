// Startup script - Register universal Structure Locator Scroll item with dynamic NBT Tooltip

StartupEvents.registry('item', event => {
    event.create('structure_locator_scroll')
        .displayName('Cuộn Giấy Định Vị')
        .texture('kubejs:item/structure_locator_scroll')
        .unstackable()
        .tooltip((item, advanced, tooltip) => {
            let nbt = item.nbt;
            if (nbt && nbt.contains('structure_name')) {
                let name = nbt.getString('structure_name');
                let tier = nbt.contains('tier') ? nbt.getString('tier').toUpperCase() : 'NORMAL';

                let tierLabel = '§e[PHỔ THÔNG]';
                if (tier === 'ADVANCED' || tier === 'CAO CẤP') tierLabel = '§b[CAO CẤP]';
                if (tier === 'BOSS') tierLabel = '§c§l[BOSS TỐI CAO]';

                tooltip.add(Text.of(`§7Độ hiếm: ${tierLabel}`));
                tooltip.add(Text.of(`§7Mục tiêu: §f${name}`));
                tooltip.add(Text.of(`§a✨ Nhấp chuột phải để quét tọa độ gần nhất`));
            } else {
                tooltip.add(Text.of(`§c📜 Cuộn giấy trắng (Chưa gán mục tiêu)`));
            }
        })
})
