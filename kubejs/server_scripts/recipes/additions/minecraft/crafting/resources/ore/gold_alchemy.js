ServerEvents.recipes(event => {
    // 5 Sắt + 4 Đá đỏ -> 1 Vàng (Xếp hình bàn cờ xen kẽ)
    // I R I
    // R I R
    // I R I
    event.shaped('minecraft:gold_ingot', [
        'IRI',
        'RIR',
        'IRI'
    ], {
        I: 'minecraft:iron_ingot',
        R: 'minecraft:redstone'
    })
})
