// ServerEvents.highPriorityData(event => {
//     event.addJson('minecraft:loot_tables/entities/pillager', {
//         type: 'minecraft:entity',
//         pools: [
//             {
//                 rolls: 1,
//                 entries: [
//                     {
//                         type: 'minecraft:item',
//                         name: 'baseraid:ominous_bottle',
//                         conditions: [
//                             {
//                                 condition: 'minecraft:random_chance',
//                                 chance: 1.0
//                             },
//                             {
//                                 condition: 'minecraft:entity_properties',
//                                 entity: 'this',
//                                 predicate: {
//                                     nbt: '{PatrolLeader:1b}'
//                                 }
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     });
// });
