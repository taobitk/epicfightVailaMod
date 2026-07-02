JEIEvents.hideItems(event => {
    // Mod ID cần lọc
    const modId = 'potionring';

    // Danh sách các ID vật phẩm muốn GIỮ LẠI (Hiển thị trong JEI)
    // Các vật phẩm KHÔNG nằm trong danh sách này sẽ bị ẩn.
    const whitelist = [
        'potionring:ring_of_regeneration',
        'potionring:ring_of_resistance',
        'potionring:ring_of_strengh', // Mod này viết sai chính tả Strength -> Strengh
        'potionring:ring_of_fire_resistance',
        'potionring:ring_of_night_vision',
        'potionring:ring_of_water_breathing'
    ];

    // Lấy tất cả item stack thuộc về mod này
    // Lưu ý: Ingredient.of('@mod').itemIds trả về danh sách ID dạng string
    Ingredient.of(`@${modId}`).itemIds.forEach(id => {
        // Nếu ID này KHÔNG nằm trong danh sách whitelist
        if (!whitelist.includes(id)) {
            // Thì ẩn nó đi
            event.hide(id);
        }
    });
});
