// Tên file: kubejs/startup_scripts/force_receptionist.js
// Lắng nghe sự kiện tương tác Forge để ép dân làng thành Receptionist khi đứng cạnh Bảng nhiệm vụ

ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerInteractEvent$EntityInteract', event => {
    let target = event.getTarget();

    if (target && target.type === 'minecraft:villager') {
        let nbt = target.nbt;
        let profession = "";
        try {
            if (nbt && nbt.VillagerData && nbt.VillagerData.profession) {
                profession = String(nbt.VillagerData.profession);
            }
        } catch (err) {
            console.error("[ForceReceptionist] Error reading profession: " + err);
        }

        console.info(`[ForceReceptionist] Interacted with Villager. Profession: '${profession}'`);

        // Quét phạm vi 1 block xung quanh Dân làng xem có Bảng nhiệm vụ không
        let pos = target.blockPosition();
        let level = target.level;
        let foundBoard = false;
        
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                for (let z = -1; z <= 1; z++) {
                    let block = level.getBlock(pos.offset(x, y, z));
                    if (block && block.id === 'bountiful:bountyboard') {
                        foundBoard = true;
                        console.info(`[ForceReceptionist] Found Bounty Board at offset: ${x}, ${y}, ${z}`);
                        break;
                    }
                }
                if (foundBoard) break;
            }
            if (foundBoard) break;
        }

        if (foundBoard && profession !== 'bountiful_npc:receptionist') {
            try {
                console.info(`[ForceReceptionist] FORCING villager to receptionist profession!`);
                target.mergeNbt({
                    VillagerData: {
                        profession: 'bountiful_npc:receptionist',
                        level: 1
                    }
                });
                level.spawnParticles('minecraft:happy_villager', target.x, target.y + 1, target.z, 15, 0.3, 0.3, 0.3, 0.05);
            } catch (err) {
                console.error("[ForceReceptionist] Failed to force receptionist: " + err);
            }
        }
    }
});
