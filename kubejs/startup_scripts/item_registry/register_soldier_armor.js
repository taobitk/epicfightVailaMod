// Startup script - Đăng ký 12 Món Giáp Binh Lính Độc Lập hoàn toàn cho KubeJS
// Giúp JEI nhận diện 100% là item thực thể độc lập, hiển thị tìm kiếm Tiếng Anh "Soldier" & công thức rèn đầy đủ!

StartupEvents.registry('item', event => {
    const armorTiers = [
        { type: 'iron', namePrefix: 'Iron', tierName: 'iron' },
        { type: 'golden', namePrefix: 'Golden', tierName: 'gold' },
        { type: 'diamond', namePrefix: 'Diamond', tierName: 'diamond' }
    ];

    const pieces = [
        { id: 'helmet', name: 'Helmet', slot: 'head' },
        { id: 'chestplate', name: 'Chestplate', slot: 'chest' },
        { id: 'leggings', name: 'Leggings', slot: 'legs' },
        { id: 'boots', name: 'Boots', slot: 'feet' }
    ];

    armorTiers.forEach(tier => {
        pieces.forEach(piece => {
            let itemId = `soldier_${tier.type}_${piece.id}`;
            let displayName = `Soldier ${tier.namePrefix} ${piece.name}`;
            let texturePath = `minecraft:item/${tier.type}_${piece.id}`;

            event.create(itemId, 'armor')
                .displayName(displayName)
                .texture(texturePath)
                .tier(tier.tierName)
                .armorSlot(piece.slot)
                .unstackable()
                .tooltip('§7Trang bị chuyên dụng dành cho Binh Lính')
                .tooltip('§cNgười chơi không thể mặc');
        });
    });
});
