ServerEvents.recipes(event => {
    // Xóa công thức chế tạo Giáp Kim Cương mặc định (dùng Diamond)
    event.remove({ output: 'minecraft:diamond_helmet' })
    event.remove({ output: 'minecraft:diamond_chestplate' })
    event.remove({ output: 'minecraft:diamond_leggings' })
    event.remove({ output: 'minecraft:diamond_boots' })
})
