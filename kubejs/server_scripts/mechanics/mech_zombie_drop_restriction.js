// Tên file: kubejs/server_scripts/mechanics/mech_zombie_drop_restriction.js
// Mục đích: Ép các loại zombie và biến thể của chúng chỉ được phép rơi ra Thịt thối và Phôi đồng, loại bỏ toàn bộ các trang bị và vật phẩm khác khi chết.

EntityEvents.drops(event => {
    let entity = event.entity;
    if (!entity) return;

    // Danh sách các loại zombie áp dụng
    const zombieTypes = [
        'minecraft:zombie',
        'minecraft:husk',
        'minecraft:drowned',
        'minecraft:zombie_villager'
    ];

    if (zombieTypes.includes(entity.type)) {
        // Chỉ cho phép 2 vật phẩm này được rơi ra đất
        const allowedItems = [
            'minecraft:rotten_flesh', // Thịt thối
            'minecraft:copper_ingot'   // Phôi đồng
        ];

        let drops = event.drops;
        
        // Duyệt ngược danh sách drop từ cuối về đầu để xóa an toàn
        for (let i = drops.size() - 1; i >= 0; i--) {
            let itemEntity = drops.get(i);
            if (itemEntity) {
                let itemStack = itemEntity.item;
                if (itemStack) {
                    let itemId = itemStack.id;
                    
                    // Nếu vật phẩm rơi ra KHÔNG nằm trong danh sách được phép -> Xóa bỏ khỏi danh sách rơi đồ
                    if (!allowedItems.includes(itemId)) {
                        drops.remove(i);
                    }
                }
            }
        }
    }
});
