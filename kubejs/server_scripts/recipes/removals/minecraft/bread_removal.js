ServerEvents.recipes(event => {
    // Xóa công thức chế tạo bánh mì mặc định
    event.remove({ output: 'minecraft:bread' })
})
