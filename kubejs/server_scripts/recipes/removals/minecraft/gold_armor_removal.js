ServerEvents.recipes(event => {
    // Xóa công thức chế tạo Giáp Vàng mặc định
    event.remove({ output: 'minecraft:golden_helmet' })
    event.remove({ output: 'minecraft:golden_chestplate' })
    event.remove({ output: 'minecraft:golden_leggings' })
    event.remove({ output: 'minecraft:golden_boots' })
})
