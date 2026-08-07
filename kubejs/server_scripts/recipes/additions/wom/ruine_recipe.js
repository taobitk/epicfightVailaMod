ServerEvents.recipes(event => {
    // 1. Xóa công thức cũ của Ruine
    event.remove({ output: 'wom:ruine' })

    // 2. Công thức Bàn Rèn (Smithing) cho Ruine
    // Template: Táo Vàng Enchant, Base: Netherite Longsword, Addition: NIDG Ingot
    event.smithing(
        'wom:ruine',                         // Output
        'minecraft:enchanted_golden_apple',  // Template
        'epicfight:netherite_longsword',     // Base
        'kubejs:nidg_ingot'                  // Addition
    )
})
