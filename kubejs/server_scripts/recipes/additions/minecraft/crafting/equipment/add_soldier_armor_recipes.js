/*
// Tên file: kubejs/server_scripts/recipes/additions/minecraft/crafting/equipment/add_soldier_armor_recipes.js
// Mục đích: Cho phép chuyển đổi Giáp thường (Sắt, Vàng, Kim Cương, Netherite) thành Giáp Cho Lính (mang NBT cannot_equip:1b) ngay trong bàn chế tạo.

ServerEvents.recipes(event => {
    const armorTiers = [
        { type: 'iron', namePrefix: 'Sắt' },
        { type: 'golden', namePrefix: 'Vàng' },
        { type: 'diamond', namePrefix: 'Kim Cương' },
        { type: 'netherite', namePrefix: 'Netherite' }
    ];

    const pieces = [
        { id: 'helmet', name: 'Mũ' },
        { id: 'chestplate', name: 'Áo' },
        { id: 'leggings', name: 'Quần' },
        { id: 'boots', name: 'Giày' }
    ];

    armorTiers.forEach(tier => {
        pieces.forEach(piece => {
            let itemId = `minecraft:${tier.type}_${piece.id}`;
            let displayName = `${piece.name} ${tier.namePrefix} Cho Lính`;

            let outputItem = Item.of(itemId, '{cannot_equip:1b,CustomSoldierArmor:1b}')
                .withName(Text.of(displayName).gold().italic(false))
                .withLore([
                    Text.of('Trang bị chuyên dụng dành cho Lính').gray(),
                    Text.of('Người chơi không thể mặc').red()
                ]);

            // Đặt 1 món giáp bất kỳ vào ô chế tạo không theo hình dạng (Shapeless) -> Trả ra Giáp Cho Lính
            event.shapeless(outputItem, itemId).id(`kubejs:convert_soldier_armor_${tier.type}_${piece.id}`);
        });
    });
});

*/