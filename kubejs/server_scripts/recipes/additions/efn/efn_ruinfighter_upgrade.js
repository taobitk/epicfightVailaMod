// ServerEvents.recipes(event => {
//     // Danh sách nâng cấp Ruinfighter
//     // Input: Netherite Armor
//     // Material: Duskfire Ingot (efn:duskfire_ingot)
//     // Output: Ruinfighter Armor (efn:ruinfighter_...)

//     const recipes = [
//         { output: 'efn:ruinfighter_helmet', input: 'minecraft:netherite_helmet' },
//         { output: 'efn:ruinfighter_chestplate', input: 'minecraft:netherite_chestplate' },
//         { output: 'efn:ruinfighter_leggings', input: 'minecraft:netherite_leggings' },
//         { output: 'efn:ruinfighter_boots', input: 'minecraft:netherite_boots' }
//     ]

//     recipes.forEach(item => {
//         // 1. Xóa công thức cũ
//         event.remove({ output: item.output })

//         // 2. Thêm công thức Bàn Rèn (Smithing)
//         event.smithing(
//             item.output,                                     // Kết quả
//             'minecraft:netherite_upgrade_smithing_template', // Khuôn: Netherite Upgrade
//             item.input,                                      // Đồ Netherite
//             'efn:duskfire_ingot'                             // Nguyên liệu: Duskfire Ingot (Siêu đắt)
//         )
//     })
// })
