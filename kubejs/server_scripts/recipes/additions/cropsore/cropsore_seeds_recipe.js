// ServerEvents.recipes(event => {
//     const recipes = [
//         {
//             output: 'cropsore:diamond_seed',
//             input: 'minecraft:diamond'
//         },
//         {
//             output: 'cropsore:iron_seed',
//             input: 'minecraft:iron_ingot'
//         },
//         {
//             output: 'cropsore:lapis_seed',
//             input: 'minecraft:lapis_lazuli'
//         },
//         {
//             output: 'cropsore:redstone_seed',
//             input: 'minecraft:redstone'
//         }
//     ]

//     recipes.forEach(recipe => {
//         event.shaped(
//             recipe.output,
//             [
//                 ' R ',
//                 'RSR',
//                 ' R '
//             ],
//             {
//                 R: recipe.input,
//                 S: 'minecraft:wheat_seeds'
//             }
//         )
//     })
// })
