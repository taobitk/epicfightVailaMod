// Tên file: kubejs/server_scripts/recipes/additions/ironchest/add_ironchests.js
// Mục đích: Thêm công thức chế tạo mới (1 rương cấp dưới + 1 nguyên liệu tương ứng) cho các loại rương mod Iron Chests.

ServerEvents.recipes(event => {
    // Iron Chest: 1 Rương gỗ + 1 Phôi sắt (Không cần sắp xếp - Shapeless)
    event.shapeless('ironchest:iron_chest', [
        'minecraft:chest',
        'minecraft:iron_ingot'
    ]);

    // Gold Chest: 1 Rương sắt + 1 Phôi vàng (Không cần sắp xếp - Shapeless)
    event.shapeless('ironchest:gold_chest', [
        'ironchest:iron_chest',
        'minecraft:gold_ingot'
    ]);

    // Diamond Chest: 1 Rương vàng + 1 Kim cương (Không cần sắp xếp - Shapeless)
    event.shapeless('ironchest:diamond_chest', [
        'ironchest:gold_chest',
        'minecraft:diamond'
    ]);
});
