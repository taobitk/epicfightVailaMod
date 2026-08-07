// Tên file: kubejs/server_scripts/loot_tables/loot_crops_fixed.js
// Mục đích: Chỉnh sửa Loot Table bằng LootJS cho Cà rốt và Khoai tây khi thu hoạch chín (Age 7) 
//            Tỉ lệ ngẫu nhiên rơi ra từ 2 đến 4 củ (2, 3, 4 củ).

LootJS.modifiers(event => {
    // 1. CÀ RỐT (Carrot Crop) -> Khi chín (age: 7): Ngẫu nhiên rơi ra 2, 3 hoặc 4 củ Cà rốt
    event.addBlockLootModifier('minecraft:carrots')
        .matchBlockState('minecraft:carrots', { age: '7' })
        .removeLoot('minecraft:carrot')
        .addWeightedLoot([
            Item.of('minecraft:carrot', 4),
            Item.of('minecraft:carrot', 3),
            Item.of('minecraft:carrot', 2)
        ]);

    // 2. KHOAI TÂY (Potato Crop) -> Khi chín (age: 7): Ngẫu nhiên rơi ra 2, 3 hoặc 4 củ Khoai tây
    event.addBlockLootModifier('minecraft:potatoes')
        .matchBlockState('minecraft:potatoes', { age: '7' })
        .removeLoot(['minecraft:potato', 'minecraft:poisonous_potato'])
        .addWeightedLoot([
            Item.of('minecraft:potato', 4),
            Item.of('minecraft:potato', 3),
            Item.of('minecraft:potato', 2)
        ]);
});
