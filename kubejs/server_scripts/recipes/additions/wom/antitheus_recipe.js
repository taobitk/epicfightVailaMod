ServerEvents.recipes(event => {
    // 1. Xóa công thức cũ của Antitheus
    event.remove({ output: 'wom:antitheus' })

    // 2. Công thức Bàn Rèn (Smithing) cho Antitheus
    // Template: Táo Vàng Enchant, Base: Demon Seal (wom:demon_seal), Addition: NIDG Ingot
    event.smithing(
        'wom:antitheus',                     // Output
        'minecraft:enchanted_golden_apple',  // Template
        'wom:demon_seal',                    // Base
        'kubejs:nidg_ingot'                  // Addition
    )
})
