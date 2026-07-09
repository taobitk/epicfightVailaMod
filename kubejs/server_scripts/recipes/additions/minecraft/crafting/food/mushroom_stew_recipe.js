ServerEvents.recipes(event => {
    // Thêm công thức chế tạo súp nấm mới: 2 nấm bất kỳ (sử dụng tag #minecraft:mushrooms) + 1 cái bát
    // Công thức không cần sắp xếp vị trí (shapeless)
    event.shapeless('minecraft:mushroom_stew', [
        'minecraft:bowl',
        '#forge:mushrooms',
        '#forge:mushrooms'
    ])
})
