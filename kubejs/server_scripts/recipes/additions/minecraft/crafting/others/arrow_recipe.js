ServerEvents.recipes(event => {
    // Thêm công thức chế tạo mũi tên mới (Cố định vị trí):
    // Sắt (Iron Ingot) ở trên
    // Gậy (Stick) ở dưới
    // -> 4 Mũi tên (Arrow)
    event.shaped('4x minecraft:arrow', [
        ' I ',
        ' S ',
        '   '
    ], {
        I: 'minecraft:iron_ingot',
        S: 'minecraft:stick'
    })
})
