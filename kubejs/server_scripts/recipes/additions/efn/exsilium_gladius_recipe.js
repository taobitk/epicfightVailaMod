// ServerEvents.recipes(event => {
//     // === RÈN CẶP SONG KIẾM EXSILIUM (Netherite Greatsword + Enchanted Apple + NIDG Ingot) ===

//     const baseWeapon = 'epicfight:netherite_greatsword' // Cốt: Đại kiếm Netherite
//     const apple = 'minecraft:enchanted_golden_apple'
//     const nidg = 'kubejs:nidg_ingot'

//     // 1. Exsiliumgladius-R (Bản gốc - efn:exsiliumgladius)
//     // Template: Táo Vàng Enchant
//     // Addition: NIDG Ingot
//     event.smithing(
//         'efn:exsiliumgladius', // Output
//         apple,                 // Template
//         baseWeapon,            // Base
//         nidg                   // Addition
//     )

//     // 2. Exsiliumgladius-L (Bản Lửa - efn:fire_exsiliumgladius)
//     // Template: NIDG Ingot (Đảo vị trí)
//     // Addition: Táo Vàng Enchant (Đảo vị trí)
//     event.smithing(
//         'efn:fire_exsiliumgladius', // Output
//         nidg,                       // Template
//         baseWeapon,                 // Base
//         apple                       // Addition
//     )
// })
