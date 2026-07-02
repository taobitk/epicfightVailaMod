ServerEvents.recipes(event => {
    // Thêm công thức chế tạo bánh quy mới: 2 Lúa Mì + 1 Hạt Giống = 2 Bánh Quy
    // Loại công thức: Không định hình (Shapeless)
    event.shapeless('2x minecraft:cookie', [
        'minecraft:wheat',
        'minecraft:wheat',
        'minecraft:wheat_seeds'
    ])
})
