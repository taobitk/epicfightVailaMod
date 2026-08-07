ServerEvents.recipes(event => {
    // Công thức shapeless (tự do vị trí): 3 Lúa Mì + 1 Đường -> 1 Bánh Mì
    event.shapeless('minecraft:bread', [
        '3x minecraft:wheat',
        'minecraft:sugar'
    ]).id('kubejs:bread_custom_shapeless')
})
