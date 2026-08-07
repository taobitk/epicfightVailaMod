ServerEvents.recipes(event => {
    // 1. Xóa công thức cũ của Ender Blaster
    event.remove({ output: 'wom:ender_blaster' })

    // 2. Công thức Bàn Chế Tạo cho Ender Blaster
    // 8 Táo Vàng thường bao quanh 1 Cung
    event.shaped('wom:ender_blaster', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:golden_apple', // Táo Vàng thường
        B: 'minecraft:bow'           // Cung
    }).stage('stage_tier2_magic_assassin')
})
