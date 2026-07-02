// // Đặt tại: kubejs/startup_scripts/entity_modifications/modify_legendary_monsters.js

// EntityJSEvents.attributes(event => {
//     // Helper function
//     const modify = (id, hp, atk, arm) => {
//         event.modify(id, builder => {
//             builder.add('minecraft:generic.max_health', hp);
//             builder.add('minecraft:generic.attack_damage', atk);
//             builder.add('minecraft:generic.armor', arm);
//         });
//     };

//     // --- LEGENARY MONSTERS ---
//     // Mob ID, HP, ATK, ARM

//     modify('legendary_monsters:skeletosaurus', 500, 20, 30);
//     modify('legendary_monsters:hovering_hurricane', 80, 10, 10);
//     modify('legendary_monsters:stratling', 50, 10, 10);
//     modify('legendary_monsters:mossy_golem', 80, 10, 15);

//     // Lưu ý: User list có ghi ATK 20 cho boss này nhưng HP lại 800
//     modify('legendary_monsters:overgrown_colossus', 800, 20, 20);

//     modify('legendary_monsters:warped_fungussus', 100, 15, 10);
//     modify('legendary_monsters:frostbitten_golem', 800, 20, 20);
//     modify('legendary_monsters:lava_eater', 530, 20, 30);
//     modify('legendary_monsters:endersent', 550, 20, 30);
//     modify('legendary_monsters:chorusling', 80, 10, 15);
//     modify('legendary_monsters:shulker_mimic', 550, 20, 30);
//     modify('legendary_monsters:ambusher', 60, 7, 20);
//     modify('legendary_monsters:spiky_bug', 20, 3, 3);
//     modify('legendary_monsters:withered_abomination', 600, 20, 20);
//     modify('legendary_monsters:ancient_guardian', 750, 20, 30);
//     modify('legendary_monsters:cloud_golem', 700, 25, 40); // User ghi tên cũ là Cumulonimbus, tên mới là Cloud Golem nhưng ID là cloud_golem
//     modify('legendary_monsters:dark_cloud_golem', 800, 20, 20);
//     modify('legendary_monsters:knights_armor', 100, 20, 15);
//     modify('legendary_monsters:guard', 80, 20, 15);
//     modify('legendary_monsters:haunted_knight', 80, 20, 15);
//     modify('legendary_monsters:haunted_guard', 80, 20, 15);
//     modify('legendary_monsters:posessed_paladin', 1000, 50, 50);
//     modify('legendary_monsters:dune_sentinel', 800, 20, 20);
//     modify('legendary_monsters:skeloraptor', 100, 20, 15);
//     modify('legendary_monsters:bomber', 30, 5, 5);
// });
