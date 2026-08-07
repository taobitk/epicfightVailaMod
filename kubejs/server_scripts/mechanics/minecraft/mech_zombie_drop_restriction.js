// Tên file: kubejs/server_scripts/mechanics/minecraft/mech_zombie_drop_restriction.js
// Mục đích: Ép các loại zombie và xương chỉ được phép rơi ra đồ cơ bản (Thịt thối, Xương, Mũi tên) và Phôi đồng, loại bỏ toàn bộ trang bị rác khi chết.

EntityEvents.drops(event => {
    let entity = event.entity;
    if (!entity) return;

    // Danh sách các loại xác sống & xương áp dụng
    const undeadTypes = [
        'minecraft:zombie',
        'minecraft:husk',
        'minecraft:drowned',
        'minecraft:zombie_villager',
        'minecraft:zombified_piglin',
        'minecraft:skeleton',
        'minecraft:wither_skeleton',
        'minecraft:stray'
    ];

    if (undeadTypes.includes(entity.type)) {
        // Cho phép các vật phẩm nguyên liệu cơ bản + Phôi Đồng được rơi ra đất
        const allowedItems = [
            'minecraft:rotten_flesh',    // Thịt thối
            'minecraft:bone',            // Xương
            'minecraft:arrow',           // Mũi tên
            'minecraft:wither_skeleton_skull', // Đầu lâu Skeleton Wither
            'minecraft:copper_ingot'      // Phôi đồng
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
