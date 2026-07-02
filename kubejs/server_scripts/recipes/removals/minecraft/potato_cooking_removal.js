ServerEvents.recipes(event => {
    // Xóa công thức nung khoai tây trong Lò nung (Furnace)
    event.remove({ type: 'minecraft:smelting', output: 'minecraft:baked_potato' })

    // Xóa công thức nung khoai tây trong Lò hun khói (Smoker)
    event.remove({ type: 'minecraft:smoking', output: 'minecraft:baked_potato' })
})
