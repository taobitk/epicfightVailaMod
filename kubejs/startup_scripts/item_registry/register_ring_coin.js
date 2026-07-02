
StartupEvents.registry('item', event => {
    event.create('ring_coin')                   // ID của vật phẩm: kubejs:ring_coin
        .displayName('Coin')               // Tên hiển thị mặc định
        .rarity('uncommon')                     // Độ hiếm 'uncommon' cho tên màu vàng
        .tooltip(Text.of('Vật phẩm dùng để mua bán').gray()) // Thêm dòng mô tả màu xám
        .maxStackSize(50);
});
