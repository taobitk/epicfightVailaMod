ServerEvents.recipes(event => {
    // Xóa công thức chế tạo mũi tên mặc định của Minecraft
    event.remove({ output: 'minecraft:arrow' })
})
