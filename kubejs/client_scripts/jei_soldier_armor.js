// Client script - Đảm bảo 12 Món Giáp Binh Lính Độc Lập (kubejs:soldier_...) luôn hiển thị chuẩn 100% trong JEI

JEIEvents.addItems(event => {
    const armorTiers = ['iron', 'golden', 'diamond'];
    const pieces = ['helmet', 'chestplate', 'leggings', 'boots'];

    armorTiers.forEach(tier => {
        pieces.forEach(piece => {
            event.add(`kubejs:soldier_${tier}_${piece}`);
        });
    });
});
