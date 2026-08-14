// Client script - Hiển thị 12 Món Giáp Cho Lính (Soldier Iron/Golden/Diamond Armor) trực tiếp trong JEI

JEIEvents.addItems(event => {
    const armorTiers = [
        { type: 'iron', namePrefix: 'Iron' },
        { type: 'golden', namePrefix: 'Golden' },
        { type: 'diamond', namePrefix: 'Diamond' }
    ];

    const pieces = [
        { id: 'helmet', name: 'Helmet' },
        { id: 'chestplate', name: 'Chestplate' },
        { id: 'leggings', name: 'Leggings' },
        { id: 'boots', name: 'Boots' }
    ];

    armorTiers.forEach(tier => {
        pieces.forEach(piece => {
            let itemStack = Item.of(`minecraft:${tier.type}_${piece.id}`, `{cannot_equip:true,CustomSoldierArmor:1b,Unbreakable:1b,display:{Name:'{"text":"Soldier ${tier.namePrefix} ${piece.name}","color":"gold","italic":false}',Lore:['"\\\\u00a77Trang bị chuyên dụng dành cho Binh Lính"','"\\\\u00a7cNgười chơi không thể mặc"']}}`);
            event.add(itemStack);
        });
    });
});
