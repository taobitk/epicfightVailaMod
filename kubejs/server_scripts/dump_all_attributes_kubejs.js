// Server Script: Tự động xuất danh sách TOÀN BỘ Thuộc Tính (Attributes) của tất cả các Mod vào file nhap/attributes_list.json khi gõ /reload hoặc khởi động game.

ServerEvents.recipes(event => {
    try {
        let attrIds = [];

        try {
            let ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries');
            let keys = ForgeRegistries.ATTRIBUTES.getKeys();
            keys.forEach(k => {
                attrIds.push(k.toString());
            });
        } catch (e1) {
            let registry = Utils.getRegistry('attribute');
            registry.getIds().forEach(id => {
                attrIds.push(id.toString());
            });
        }

        attrIds.sort();

        let byMod = {};
        attrIds.forEach(id => {
            let modid = id.split(':')[0];
            if (!byMod[modid]) byMod[modid] = [];
            byMod[modid].push(id);
        });

        let outputData = {
            total_attributes: attrIds.length,
            total_mods: Object.keys(byMod).length,
            attributes_by_mod: byMod,
            all_attributes: attrIds
        };

        JsonIO.write('nhap/attributes_list.json', outputData);
        console.log('[KubeJS] Successfully dumped all attributes to nhap/attributes_list.json!');
    } catch (err) {
        console.log('[KubeJS] Error dumping attributes: ' + err);
    }
});
