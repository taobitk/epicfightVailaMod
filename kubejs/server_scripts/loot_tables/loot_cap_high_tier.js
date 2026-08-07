// Tên file: kubejs/server_scripts/loot_tables/loot_cap_high_tier.js
// Mục đích: Giới hạn số lượng tối đa cho các món cao cấp trong TOÀN BỘ rương loot (Chests) trong thế giới:
//   - Kim Cương (minecraft:diamond): Max 8 viên
//   - Giáp Kim Cương (diamond_helmet/chestplate/leggings/boots): XÓA hoàn toàn
//   - Vàng (gold_ingot, gold_nugget): Max 20
//   - Khối Vàng (gold_block): Max 2
//   - Netherite (Toàn bộ đồ/phôi netherite_*): Max 1
//   - Táo Vàng thường (golden_apple): Max 5
//   - Táo Phù Phép (enchanted_golden_apple): Max 1

LootJS.modifiers(event => {
    // Xóa giáp Kim Cương khỏi TOÀN BỘ rương loot và mob drops
    const diamondArmor = [
        'minecraft:diamond_helmet',
        'minecraft:diamond_chestplate',
        'minecraft:diamond_leggings',
        'minecraft:diamond_boots'
    ];
    event.addLootTableModifier(/.*/).removeLoot(diamondArmor);

    let chestModifier = event.addLootTypeModifier(LootType.CHEST);

    // 1. Kim Cương thường -> Tối đa 8 viên
    chestModifier.modifyLoot('minecraft:diamond', stack => {
        if (stack.count > 8) stack.setCount(8);
        return stack;
    });


    // 3. Phôi Vàng & Hạt Vàng -> Tối đa 20
    chestModifier.modifyLoot('minecraft:gold_ingot', stack => {
        if (stack.count > 20) stack.setCount(20);
        return stack;
    });
    chestModifier.modifyLoot('minecraft:gold_nugget', stack => {
        if (stack.count > 20) stack.setCount(20);
        return stack;
    });

    // 4. Khối Vàng -> Tối đa 2
    chestModifier.modifyLoot('minecraft:gold_block', stack => {
        if (stack.count > 2) stack.setCount(2);
        return stack;
    });

    // 5. Netherite (Phôi, Mảnh vỡ, Trang bị, Nâng cấp) -> Tối đa 1
    chestModifier.modifyLoot(/netherite/, stack => {
        if (stack.count > 1) stack.setCount(1);
        return stack;
    });

    // 6. Táo Vàng thường -> Tối đa 5
    chestModifier.modifyLoot('minecraft:golden_apple', stack => {
        if (stack.count > 5) stack.setCount(5);
        return stack;
    });

    // 7. Táo Phù Phép -> Tối đa 1
    chestModifier.modifyLoot('minecraft:enchanted_golden_apple', stack => {
        if (stack.count > 1) stack.setCount(1);
        return stack;
    });
});
