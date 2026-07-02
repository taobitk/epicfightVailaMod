ServerEvents.recipes(event => {
    // Công thức chế tạo NIDG Ingot
    // Nguyên liệu: 1 Netherite Ingot + 1 Iron Ingot + 1 Diamond + 1 Gold Ingot
    event.shapeless('kubejs:nidg_ingot', [
        'minecraft:netherite_ingot',
        'minecraft:iron_ingot',
        'minecraft:diamond',
        'minecraft:gold_ingot'
    ])
})
