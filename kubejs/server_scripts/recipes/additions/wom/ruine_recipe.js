ServerEvents.recipes(event => {
    // Công thức chế tạo Ruine (wom:ruine)
    // Nguyên liệu: 8 Táo Vàng Enchant bao quanh 1 Netherite Longsword
    // Loại: Bàn chế tạo (Crafting Table)

    event.shaped('wom:ruine', [
        'AAA',
        'ASA',
        'AAA'
    ], {
        A: 'minecraft:enchanted_golden_apple', // Táo Vàng Enchant (Đắt lòi kèn)
        S: 'epicfight:netherite_longsword'     // Netherite Longsword
    })
})
