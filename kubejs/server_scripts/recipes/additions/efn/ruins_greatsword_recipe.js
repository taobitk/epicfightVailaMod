ServerEvents.recipes(event => {
    // Nâng cấp Đại kiếm Netherite thành Ruins Greatsword
    // Sử dụng Heart of Deepdark làm vật liệu kiến tạo (Thay cho NIDG Ingot)

    event.smithing(
        'efn:ruinsgreatsword',                           // Output
        'minecraft:netherite_upgrade_smithing_template', // Template
        'epicfight:netherite_greatsword',                // Base
        'efn:deepdark_heart'                             // Addition: Heart of Deepdark
    )
})
