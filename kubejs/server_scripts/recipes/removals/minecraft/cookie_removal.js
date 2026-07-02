ServerEvents.recipes(event => {
    // Xóa công thức chế tạo bánh quy mặc định
    event.remove({ output: 'minecraft:cookie' })
})
