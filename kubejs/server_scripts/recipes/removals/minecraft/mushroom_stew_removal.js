ServerEvents.recipes(event => {
    // Xóa công thức chế tạo súp nấm mặc định
    event.remove({ output: 'minecraft:mushroom_stew' })
})
