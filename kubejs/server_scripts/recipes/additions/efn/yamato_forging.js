ServerEvents.recipes(event => {
    // === RÈN KIẾM YAMATO (Satsujin + Dragon Egg + Nether Star) ===

    // Base cho cả 2: wom:satsujin
    const baseSword = 'wom:satsujin'
    const egg = 'minecraft:dragon_egg'
    const star = 'minecraft:nether_star'

    // 1. Yamato DMC (efn:yamato_dmc_in_sheath)
    // Cấu trúc: [Trứng Rồng] + [Satsujin] + [Nether Star]
    // Template: Trứng Rồng
    // Addition: Nether Star
    event.smithing(
        'efn:yamato_dmc_in_sheath', // Output
        egg,                        // Template
        baseSword,                  // Base
        star                        // Addition
    )

    // 2. Yamato DMC 4 (efn:yamato_dmc4_in_sheath)
    // Cấu trúc: [Nether Star] + [Satsujin] + [Trứng Rồng]
    // Template: Nether Star (Đảo vị trí)
    // Addition: Trứng Rồng (Đảo vị trí)
    event.smithing(
        'efn:yamato_dmc4_in_sheath', // Output
        star,                        // Template
        baseSword,                   // Base
        egg                          // Addition
    )
})
