// Client script - Hiển thị 12 Món Giáp Binh Lính (Sắt, Vàng, Kim Cương) trực tiếp trong JEI

JEIEvents.addItems(event => {
    const armorTiers = [
        { type: 'iron', namePrefix: 'Sắt' },
        { type: 'golden', namePrefix: 'Vàng' },
        { type: 'diamond', namePrefix: 'Kim Cương' }
    ];

    const pieces = [
        { id: 'helmet', name: 'Mũ' },
        { id: 'chestplate', name: 'Áo' },
        { id: 'leggings', name: 'Quần' },
        { id: 'boots', name: 'Giày' }
    ];

    armorTiers.forEach(tier => {
        pieces.forEach(piece => {
            let itemStack = Item.of(`minecraft:${tier.type}_${piece.id}`, `{cannot_equip:true,CustomSoldierArmor:1b,Unbreakable:1b,display:{Name:'{"text":"${piece.name} ${tier.namePrefix} Binh Lính","color":"gold","italic":false}',Lore:['"\\\\u00a77Trang bị chuyên dụng dành cho Binh Lính"','"\\\\u00a7cNgười chơi không thể mặc"']}}`);
            event.add(itemStack);
        });
    });
});
