ServerEvents.recipes(event => {
    // Công thức chế tạo Tormented Mind (wom:tormented_mind)
    // Nguyên liệu: 8 Khối Kim Cương bao quanh 1 WOM Netherite Greataxe

    event.shaped('wom:tormented_mind', [
        'DDD',
        'DAD',
        'DDD'
    ], {
        D: 'minecraft:diamond_block',   // Khối Kim Cương
        A: 'wom:netherite_greataxe'     // WOM Netherite Greataxe (Theo ảnh)
    })
})
