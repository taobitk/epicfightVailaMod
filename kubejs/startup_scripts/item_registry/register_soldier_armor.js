// Startup script - Đăng ký 12 Món Giáp Binh Lính Độc Lập hoàn toàn cho KubeJS
// Sử dụng đúng kiểu builder: 'helmet', 'chestplate', 'leggings', 'boots'

StartupEvents.registry('item', event => {
    const armorTiers = [
        { type: 'iron', namePrefix: 'Iron', tierName: 'iron' },
        { type: 'golden', namePrefix: 'Golden', tierName: 'gold' },
        { type: 'diamond', namePrefix: 'Diamond', tierName: 'diamond' }
    ];

    const pieces = [
        { id: 'helmet', name: 'Helmet' },
        { id: 'chestplate', name: 'Chestplate' },
        { id: 'leggings', name: 'Leggings' },
        { id: 'boots', name: 'Boots' }
    ];

    armorTiers.forEach(tier => {
        pieces.forEach(piece => {
            let itemId = `soldier_${tier.type}_${piece.id}`;
            let displayName = `Soldier ${tier.namePrefix} ${piece.name}`;
            let texturePath = `minecraft:item/${tier.type}_${piece.id}`;

            // piece.id chính là kiểu armor builder chuẩn KubeJS ('helmet', 'chestplate', 'leggings', 'boots')
            event.create(itemId, piece.id)
                .displayName(displayName)
                .texture(texturePath)
                .tier(tier.tierName)
                .unstackable()
                .tooltip('§7Trang bị chuyên dụng dành cho Binh Lính')
                .tooltip('§cNgười chơi không thể mặc');
        });
    });
});
