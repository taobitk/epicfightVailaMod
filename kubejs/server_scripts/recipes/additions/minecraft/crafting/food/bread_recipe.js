ServerEvents.recipes(event => {
    // Công thức shapeless (tự do vị trí): 3 Lúa Mì -> 1 Bánh Mì (Bỏ Đường)
    event.shapeless('minecraft:bread', [
        '3x minecraft:wheat'
    ]).id('kubejs:bread_custom_shapeless')
})
