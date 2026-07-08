// Tên file: kubejs/server_scripts/mechanics/mech_diamond_armor_unbreakable.js
// Mục đích: Tự động quét và gắn tag Unbreakable (Bất hoại) cho Giáp Kim Cương, Giáp Netherite và toàn bộ trang bị của mod WOM.

PlayerEvents.inventoryChanged(event => {
    let item = event.item;
    if (item && item.id) {
        let isDiamond = item.id.startsWith('minecraft:diamond_');
        let isNetherite = item.id.startsWith('minecraft:netherite_');
        let isWom = item.id.startsWith('wom:');
        let isConstructionWand = item.id.startsWith('constructionwand:');

        if (isDiamond || isNetherite || isWom || isConstructionWand) {
            let shouldModify = false;

            if (isWom || isConstructionWand) {
                // Đối với mod WOM và Construction Wand: Tự động áp dụng cho mọi trang bị có thanh độ bền (vũ khí, giáp, công cụ, gậy)
                shouldModify = item.maxDamage > 0;
            } else {
                // Đối với Minecraft: Chỉ áp dụng cho mũ, áo, quần, giày
                let isHelmet = item.id.endsWith('_helmet');
                let isChestplate = item.id.endsWith('_chestplate');
                let isLeggings = item.id.endsWith('_leggings');
                let isBoots = item.id.endsWith('_boots');
                shouldModify = isHelmet || isChestplate || isLeggings || isBoots;
            }

            if (shouldModify) {
                // Nếu vật phẩm chưa có tag Bất hoại (Unbreakable)
                if (!item.nbt || !item.nbt.contains('Unbreakable')) {
                    let nbt = item.nbt ? item.nbt : {};
                    nbt.Unbreakable = 1;

                    // Thiết lập hiển thị dòng chữ "Bất hoại" màu vàng qua NBT display
                    if (!nbt.display) {
                        nbt.display = {};
                    }
                    nbt.display.Lore = ['{"text":"Bất hoại","color":"gold","italic":false}'];

                    item.nbt = nbt;
                }
            }
        }
    }
});
