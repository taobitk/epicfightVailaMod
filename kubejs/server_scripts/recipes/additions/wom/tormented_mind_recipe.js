ServerEvents.recipes(event => {
    // 1. Xóa công thức cũ của Tormented Mind
    event.remove({ output: 'wom:tormented_mind' })

    // 2. Công thức Bàn Rèn (Smithing) cho Tormented Mind
    // Template: Táo Vàng Enchant, Base: WOM Netherite Greataxe, Addition: NIDG Ingot
    event.smithing(
        'wom:tormented_mind',                // Output
        'minecraft:enchanted_golden_apple',  // Template
        'wom:netherite_greataxe',            // Base
        'kubejs:nidg_ingot'                  // Addition
    ).stage('stage_tier2_indestructible')
})
