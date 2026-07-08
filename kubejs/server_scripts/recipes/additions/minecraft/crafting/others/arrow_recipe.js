ServerEvents.recipes(event => {
    // Thêm công thức chế tạo mũi tên mới (Cố định vị trí):
    // Đá lửa (Flint) ở trên
    // Gậy (Stick) ở dưới
    // -> 4 Mũi tên (Arrow)
    event.shaped('4x minecraft:arrow', [
        ' F ',
        ' S ',
        '   '
    ], {
        F: 'minecraft:flint',
        S: 'minecraft:stick'
    })
})
