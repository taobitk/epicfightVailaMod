ServerEvents.recipes(event => {
    // 1. Xóa công thức cũ của Agony
    event.remove({ output: 'wom:agony' })

    // 2. Công thức Bàn Rèn (Smithing) cho Agony
    // Template: Táo Vàng Enchant, Base: Netherite Spear, Addition: NIDG Ingot
    event.smithing(
        'wom:agony',                         // Output
        'minecraft:enchanted_golden_apple',  // Template
        'epicfight:netherite_spear',         // Base
        'kubejs:nidg_ingot'                  // Addition
    )
})
