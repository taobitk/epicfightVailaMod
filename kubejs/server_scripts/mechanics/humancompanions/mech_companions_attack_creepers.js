// // Server script - Xóa AI bỏ chạy khi thấy Creeper (AvoidCreeperGoal) và ép Lính (HumanCompanions) quay lại tấn công Creeper

// const NearestAttackableTargetGoal = Java.loadClass('net.minecraft.world.entity.ai.goal.target.NearestAttackableTargetGoal');
// const CreeperClass = Java.loadClass('net.minecraft.world.entity.monster.Creeper');

// function fixCompanionAI(entity) {
//     if (!entity || !entity.isAlive()) return;
//     try {
//         let availableGoals = entity.goalSelector.availableGoals;
//         let goalsToRemove = [];

//         availableGoals.forEach(wrappedGoal => {
//             if (wrappedGoal && wrappedGoal.goal) {
//                 let goalClassName = String(wrappedGoal.goal.getClass().getName());
//                 if (goalClassName.includes('AvoidCreeperGoal') || goalClassName.includes('AvoidEntityGoal')) {
//                     goalsToRemove.push(wrappedGoal.goal);
//                     console.log('[HumanCompanions AI] Successfully removed AvoidCreeperGoal from: ' + entity.displayName.string);
//                 }
//             }
//         });

//         goalsToRemove.forEach(goal => {
//             entity.goalSelector.removeGoal(goal);
//         });

//         // Đánh dấu tag để không add trùng lặp target goal
//         if (!entity.tags.contains('creeper_ai_fixed')) {
//             entity.tags.add('creeper_ai_fixed');
//             entity.targetSelector.addGoal(1, new NearestAttackableTargetGoal(entity, CreeperClass, true));
//             console.log('[HumanCompanions AI] Successfully added Creeper Attack Goal to: ' + entity.displayName.string);
//         }
//     } catch (e) {
//         console.log('[HumanCompanions AI] Error fixing AI: ' + e);
//     }
// }

// // 1. Khi Lính MỚI Spawn
// EntityEvents.spawned(event => {
//     let entity = event.entity;
//     if (entity && entity.type && entity.type.namespace === 'humancompanions') {
//         fixCompanionAI(entity);
//     }
// });

// // 2. Tự động quét & tháo gỡ AI bỏ chạy + ép tấn công Creeper mỗi 1 giây
// PlayerEvents.tick(event => {
//     let player = event.player;
//     if (!player || player.age % 20 !== 0) return;

//     let level = player.level;
//     if (level) {
//         let entities = level.getEntitiesWithin(player.boundingBox.inflate(64, 32, 64));
//         entities.forEach(entity => {
//             if (entity && entity.type && entity.type.namespace === 'humancompanions') {
//                 fixCompanionAI(entity);

//                 // Nếu có Creeper ở gần -> Ép khóa thẳng mục tiêu vào Creeper!
//                 let nearbyCreepers = level.getEntitiesWithin(entity.boundingBox.inflate(16, 8, 16));
//                 for (let i = 0; i < nearbyCreepers.length; i++) {
//                     let c = nearbyCreepers[i];
//                     if (c && c.type && String(c.type.id) === 'minecraft:creeper' && c.isAlive()) {
//                         entity.setTarget(c);
//                         break;
//                     }
//                 }
//             }
//         });
//     }
// });
