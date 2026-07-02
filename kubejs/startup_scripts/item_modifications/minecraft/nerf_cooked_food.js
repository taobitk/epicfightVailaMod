ItemEvents.modification(event => {
    // Danh sách các món ăn cần giảm sức mạnh (nerf)
    const cookedFoods = [
        'minecraft:tropical_fish',
        'minecraft:cooked_cod',      // Cá tuyết nướng
        'minecraft:cooked_salmon'    // Cá hồi nướng
    ]

    cookedFoods.forEach(foodId => {
        event.modify(foodId, item => {
            // Cập nhật thuộc tính thức ăn bằng hàm Java trực tiếp setFoodProperties
            item.setFoodProperties(food => {
                // Giảm độ hồi đói xuống còn 1.5 đùi gà (3 điểm)
                food.hunger(3)

                // Giảm độ bão hòa (Saturation) xuống thấp
                // Saturation thực tế = Hunger * saturation_modifier * 2
                food.saturation(0.2)
            })
        })
    })
})
