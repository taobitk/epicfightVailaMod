// Startup script - Register custom food items with 'ko dành cho người chơi' tooltip
StartupEvents.registry('item', event => {
    const foods = [
        { id: 'cheeseburger', name: 'Cheeseburger', hunger: 10, saturation: 0.5, tooltip: 'ko dành cho người chơi' },
        { id: 'orange', name: 'Quả Cam', hunger: 5, saturation: 0.5, tooltip: 'ko dành cho người chơi' },
        { id: 'cinnamon_roll', name: 'Bánh Cuộn Quế', hunger: 8, saturation: 0.5, tooltip: 'ko dành cho người chơi' }
    ]

    foods.forEach(food => {
        let item = event.create(food.id)
            .displayName(food.name)
            .food(f => {
                f.hunger(food.hunger)
                f.saturation(food.saturation)
            })
        if (food.tooltip) {
            item.tooltip(food.tooltip)
        }
    })
})
