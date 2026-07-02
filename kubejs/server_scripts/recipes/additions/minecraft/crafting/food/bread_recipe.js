ServerEvents.recipes(event => {
    // Thêm công thức chế tạo bánh mì mới: 3 Lúa Mì + 1 Trứng + 2 Đường
    // Vị trí cố định (Shaped):
    // Hàng 1: Lúa - Lúa - Lúa
    // Hàng 2: Đường - Trứng - Đường
    event.shaped('minecraft:bread', [
        'WWW',
        'SES'
    ], {
        W: 'minecraft:wheat',
        S: 'minecraft:sugar',
        E: 'minecraft:egg'
    })
})
