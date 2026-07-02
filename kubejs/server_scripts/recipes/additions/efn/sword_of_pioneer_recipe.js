ServerEvents.recipes(event => {
    // Nâng cấp Uchigatana thành Vanguard Sword (Sword of Pioneer)
    // Nguyên liệu: Deepdark Heart & Nether Star

    event.smithing(
        'efn:sword_of_pioneer',           // Output: Vanguard Sword
        'minecraft:nether_star',          // Template
        'epicfight:uchigatana',           // Base: Uchigatana
        'efn:deepdark_heart'              // Addition: Deepdark Heart
    )
})
