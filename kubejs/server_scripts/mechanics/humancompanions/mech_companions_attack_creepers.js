// Server script - Xóa AI bỏ chạy khi thấy Creeper (AvoidCreeperGoal) và ép Lính (HumanCompanions) quay lại tấn công Creeper

const { NearestAttackableTargetGoal } = Java.loadClass('net.minecraft.world.entity.ai.goal.target.NearestAttackableTargetGoal');
const { Creeper } = Java.loadClass('net.minecraft.world.entity.monster.Creeper');

EntityEvents.spawned(event => {
    let entity = event.entity;
    if (!entity || !entity.type) return;

    // Kiểm tra nếu là Lính thuộc mod HumanCompanions (Knight, Archer, Arbalist, Axeguard...)
    if (entity.type.namespace === 'humancompanions') {
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

            // 2. Thêm Goal tấn công Creeper vào targetSelector (Lính chủ động nhắm và tiêu diệt Creeper)
            entity.targetSelector.addGoal(2, new NearestAttackableTargetGoal(entity, Creeper, true));
        } catch (e) {
            console.log('[HumanCompanions AI] Could not modify Creeper AI: ' + e);
        }
    }
});
