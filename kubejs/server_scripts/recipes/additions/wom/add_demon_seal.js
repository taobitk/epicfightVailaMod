ServerEvents.recipes(event => {
    // 1. Xóa công thức cũ của Demon Seal
    event.remove({ output: 'wom:demon_seal' })

    // 2. Công thức Bàn Chế Tạo cho Demon Seal
    // 8 Táo Vàng thường bao quanh 1 NIDG Ingot
    event.shaped('wom:demon_seal', [
        'AAA',
        'ANA',
        'AAA'
    ], {
        A: 'minecraft:golden_apple', // Táo Vàng thường
        N: 'kubejs:nidg_ingot'       // NIDG Ingot
    })
})