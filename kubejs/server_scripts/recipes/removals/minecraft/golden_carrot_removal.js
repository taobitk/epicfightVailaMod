ServerEvents.recipes(event => {
    // Xóa công thức chế tạo cà rốt vàng mặc định
    event.remove({ output: 'minecraft:golden_carrot' })
})
