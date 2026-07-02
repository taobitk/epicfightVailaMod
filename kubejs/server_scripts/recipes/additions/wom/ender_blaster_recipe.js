ServerEvents.recipes(event => {
    // Công thức chế tạo Ender Blaster (Súng Ender)
    // Nguyên liệu: 6 Táo Vàng, 1 Khối Sắt, 1 Khối Kim Cương, 1 NIDG Ingot

    event.shaped('wom:ender_blaster', [
        'GGG',
        'IND',
        'GGG'
    ], {
        G: 'minecraft:golden_apple',  // Táo Vàng thường
        I: 'minecraft:iron_block',    // Khối Sắt
        N: 'kubejs:nidg_ingot',       // NIDG Ingot
        D: 'minecraft:diamond_block'  // Khối Kim Cương
    })
})
