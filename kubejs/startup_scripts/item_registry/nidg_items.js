StartupEvents.registry('item', event => {
    // Đăng ký NIDG Ingot (Netherite - Iron - Diamond - Gold)
    event.create('nidg_ingot')
        .displayName('NIDG Ingot') // Tên hiển thị trong game
        .tooltip('Hợp kim tối thượng từ 4 loại quặng mạnh nhất: Netherite, Iron, Diamond, Gold.')
        .rarity('epic') // Độ hiếm Epic (Màu tím)
        .glow(true)     // Phát sáng cho ngầu (như Enchanted Golden Apple)
})
