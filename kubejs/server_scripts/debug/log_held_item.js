// KubeJS Script: In tên Item thực tế trên tay người chơi khi tấn công hoặc tick
PlayerEvents.tick(event => {
    let player = event.player;
    if (!player || player.level.isClientSide()) return;

    // In mỗi 20 ticks (1 giây) hoặc khi vung đòn
    if (player.age % 20 === 0) {
        let mainItem = player.mainHandItem;
        let offItem = player.offHandItem;
        console.log(`[KubeJS Hand Tracker] Player: ${player.name.string} | MainHand: '${mainItem.id}' (Tags: ${mainItem.tags}) | OffHand: '${offItem.id}'`);
    }
});

EntityEvents.hurt(event => {
    let attacker = event.source.actual;
    if (attacker && attacker.isPlayer() && !attacker.level.isClientSide()) {
        let mainItem = attacker.mainHandItem;
        console.log(`[KubeJS Attack Tracker] Player ${attacker.name.string} chém target với MainHand: '${mainItem.id}'`);
    }
});
