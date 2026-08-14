// Server script - Xóa AI bỏ chạy khi thấy Creeper (AvoidCreeperGoal) và ép Lính (HumanCompanions) quay lại tấn công Creeper

const NearestAttackableTargetGoal = Java.loadClass('net.minecraft.world.entity.ai.goal.target.NearestAttackableTargetGoal');
const CreeperClass = Java.loadClass('net.minecraft.world.entity.monster.Creeper');

function fixCompanionAI(entity) {
    if (!entity || !entity.isAlive()) return;
    try {
        // 1. Xóa AvoidCreeperGoal khỏi goalSelector (Chặn không cho lính chạy trốn khỏi Creeper)
        let availableGoals = entity.goalSelector.availableGoals;
        let goalsToRemove = [];

        availableGoals.forEach(wrappedGoal => {
            let goalName = String(wrappedGoal.goal.class.name);
            if (goalName.contains('AvoidCreeperGoal') || goalName.contains('AvoidEntityGoal')) {
                goalsToRemove.push(wrappedGoal.goal);
            }
        });

        goalsToRemove.forEach(goal => {
            entity.goalSelector.removeGoal(goal);
        });

        // Đánh dấu tag để không add trùng lặp target goal
        if (!entity.tags.contains('creeper_ai_fixed')) {
            entity.tags.add('creeper_ai_fixed');
            entity.targetSelector.addGoal(1, new NearestAttackableTargetGoal(entity, CreeperClass, true));
        }
    } catch (e) {}
}

// 1. Khi Lính MỚI Spawn
EntityEvents.spawned(event => {
    let entity = event.entity;
    if (entity && entity.type && entity.type.namespace === 'humancompanions') {
        fixCompanionAI(entity);
    }
});

// 2. Định kỳ quét xung quanh người chơi (mỗi 2 giây) để sửa AI cho TẤT CẢ LÍNH ĐÃ CÓ SẴN TRONG THẾ GIỚI
PlayerEvents.tick(event => {
    let player = event.player;
    if (!player || player.age % 40 !== 0) return;

    let level = player.level;
    if (level) {
        let entities = level.getEntitiesWithin(player.boundingBox.inflate(64, 32, 64));
        entities.forEach(entity => {
            if (entity && entity.type && entity.type.namespace === 'humancompanions') {
                fixCompanionAI(entity);
                
                // Nếu có Creeper ở gần mà Lính chưa có Mục Tiêu -> Ép nhắm trực tiếp vào Creeper!
                if (!entity.target || !entity.target.isAlive()) {
                    let nearbyCreepers = level.getEntitiesWithin(entity.boundingBox.inflate(16, 8, 16));
                    for (let i = 0; i < nearbyCreepers.length; i++) {
                        let c = nearbyCreepers[i];
                        if (c && c.type && String(c.type.id) === 'minecraft:creeper' && c.isAlive()) {
                            entity.setTarget(c);
                            break;
                        }
                    }
                }
            }
        });
    }
});
