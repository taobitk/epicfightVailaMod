ServerEvents.recipes(event => {
    // Nâng cấp Khiên gỗ thành Gesetz
    // Nguyên liệu: NIDG Ingot & Golden Apple (Táo vàng thường)

    event.smithing(
        'wom:gesetz',               // Output: Gesetz
        'minecraft:golden_apple',   // Template: Táo Vàng thường
        'minecraft:shield',         // Base: Khiên gỗ
        'minecraft:diamond'         // Addition: Kim Cương
    ).stage('stage_tier2_vanguard')
})
