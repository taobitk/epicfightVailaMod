// Server Script: Tự động xuất danh sách TOÀN BỘ Phù Phép (Enchantments) của tất cả các Mod vào file nhap/enchantments_list.json khi gõ /reload hoặc khởi động game.

ServerEvents.recipes(event => {
    try {
        let enchIds = [];

        // Lấy danh sách trực tiếp từ ForgeRegistries để nạp 100% Phù Phép của toàn bộ Mod
        try {
            let ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries');
            let keys = ForgeRegistries.ENCHANTMENTS.getKeys();
            keys.forEach(k => {
                enchIds.push(k.toString());
            });
        } catch (e1) {
            let registry = Utils.getRegistry('enchantment');
            registry.getIds().forEach(id => {
                enchIds.push(id.toString());
            });
        }

        enchIds.sort();

        let byMod = {};
        enchIds.forEach(id => {
            let modid = id.split(':')[0];
            if (!byMod[modid]) byMod[modid] = [];
            byMod[modid].push(id);
        });

        let outputData = {
            total_enchantments: enchIds.length,
            total_mods: Object.keys(byMod).length,
            enchantments_by_mod: byMod,
            all_enchantments: enchIds
        };

        JsonIO.write('nhap/enchantments_list.json', outputData);
        console.log('[KubeJS] Successfully dumped all enchantments to nhap/enchantments_list.json!');
    } catch (err) {
        console.log('[KubeJS] Error dumping enchantments: ' + err);
    }
});
