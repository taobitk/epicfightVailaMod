ServerEvents.recipes(event => {
    // 5 Vàng + 1 Ngọc Lưu Ly -> 1 Kim Cương
    // Hình chữ U ngược (Mũ bảo hiểm)
    // G G G
    // G L G
    event.shaped('minecraft:diamond', [
        'GGG',
        'GLG',
        '   '
    ], {
        G: 'minecraft:gold_ingot',
        L: 'minecraft:lapis_lazuli'
    })
})
