// Tên file: kubejs/server_scripts/mechanics/humancompanions/mech_humancompanions_hire.js
// Hỗ trợ thu phục Companion theo chức nghiệp:
// - Lính Kiếm (Knight): 1 Phôi Sắt (minecraft:iron_ingot) + 1 Xu KubeJS (kubejs:ring_coin).
// - Lính Rìu (Axeguard): 1 Magic Orb (kubejs:magic_orb) + 1 Quả Táo (minecraft:apple).
// - Các Lính khác (Archer, Arbalist): 3-5 Than Đá (minecraft:coal) + 3-5 Than Củi (minecraft:charcoal).

function initCompanion(companion, chosenClass) {
    const EquipmentSlot = Java.loadClass('net.minecraft.world.entity.EquipmentSlot');

    console.log(`[KJS-Companion] Dang thiet lap thong so cho ${chosenClass} (UUID: ${companion.uuid})`);

    // Ép đặt Max HP tương ứng với chỉ số gốc đã đăng ký cho từng chức nghiệp Lính
    let targetMaxHp = 50.0; // Knight: 50
    if (chosenClass === 'humancompanions:axeguard') {
        targetMaxHp = 30.0; // Axeguard: 30
    } else if (chosenClass === 'humancompanions:archer' || chosenClass === 'humancompanions:arbalist') {
        targetMaxHp = 20.0; // Archer / Arbalist: 20
    }

    companion.setAttributeBaseValue('minecraft:generic.max_health', targetMaxHp);
    companion.health = targetMaxHp;

    // Buff hiệu ứng Regeneration I vô hạn
    companion.potionEffects.add('minecraft:regeneration', 2000000000, 0, false, false);

    // Phát trang bị mặc định (Full giáp da + Vũ khí tương ứng chức nghiệp)
    let pData = companion.persistentData;
    if (!pData.getBoolean('equipped_companions')) {
        companion.setItemSlot(EquipmentSlot.HEAD, 'minecraft:leather_helmet');
        companion.setItemSlot(EquipmentSlot.CHEST, 'minecraft:leather_chestplate');
        companion.setItemSlot(EquipmentSlot.LEGS, 'minecraft:leather_leggings');
        companion.setItemSlot(EquipmentSlot.FEET, 'minecraft:leather_boots');

        let weapon = 'minecraft:stone_sword';
        if (chosenClass === 'humancompanions:axeguard') {
            weapon = 'minecraft:stone_axe';
        } else if (chosenClass === 'humancompanions:archer') {
            weapon = 'minecraft:bow';
        } else if (chosenClass === 'humancompanions:arbalist') {
            weapon = 'minecraft:crossbow';
        }

        companion.setItemInHand('main_hand', weapon);

        companion.setDropChance('head', 0.085);
        companion.setDropChance('chest', 0.085);
        companion.setDropChance('legs', 0.085);
        companion.setDropChance('feet', 0.085);
        companion.setDropChance('mainhand', 0.085);

        pData.putBoolean('equipped_companions', true);
    }

    // Thiết lập NBT đòi món đồ thuê tùy thuộc vào chức nghiệp Lính
    let nbt = companion.nbt;
    if (!nbt.contains('Owner')) {
        if (chosenClass === 'humancompanions:knight') {
            // Lính Kiếm (Knight): 1 Phôi Sắt + 1 Xu KubeJS Coin
            nbt.putString('food1', 'Iron');
            nbt.putInt('food1_amt', 1);
            nbt.putString('food2', 'Coin');
            nbt.putInt('food2_amt', 1);
        } else if (chosenClass === 'humancompanions:axeguard') {
            // Lính Rìu (Axeguard): 1 Magic Orb + 1 Quả Táo
            nbt.putString('food1', 'MagicOrb');
            nbt.putInt('food1_amt', 1);
            nbt.putString('food2', 'Apple');
            nbt.putInt('food2_amt', 1);
        } else {
            // Các Lính khác (Cung, Nỏ): 3-5 Than Đá + 3-5 Than Củi
            let randCoal = Math.floor(Math.random() * 3) + 3;      // 3 đến 5
            let randCharcoal = Math.floor(Math.random() * 3) + 3;  // 3 đến 5
            nbt.putString('food1', 'Coal');
            nbt.putInt('food1_amt', randCoal);
            nbt.putString('food2', 'Charcoal');
            nbt.putInt('food2_amt', randCharcoal);
        }
        companion.mergeNbt(nbt);
    }
}

// 1. Khi thực thể spawn ra, thiết lập thuộc tính, trang bị đồ và xử lý tự động tạo Companion tại làng
EntityEvents.spawned(event => {
    let entity = event.entity;

    if (entity.type.startsWith('humancompanions:')) {
        if (!entity.persistentData.getBoolean('equipped_companions')) {
            initCompanion(entity, entity.type);
        }
    }

    if (entity.type === 'minecraft:villager') {
        if (event.level.clientSide) return;

        if (Math.random() < 0.20) {
            let aabb = entity.boundingBox.inflate(128);
            let companionsNearby = event.level.getEntitiesWithin(aabb).filter(e => e.type.startsWith('humancompanions:'));

            if (companionsNearby.length === 0) {
                let count = Math.floor(Math.random() * 3) + 4;

                console.log(`[KJS-Companion] Phat hien lang moi! Dang tao ${count} Companions de bao ve...`);

                for (let i = 0; i < count; i++) {
                    let randClass = Math.random();
                    let chosenClass = 'humancompanions:knight';
                    if (randClass < 0.40) {
                        chosenClass = 'humancompanions:knight';
                    } else if (randClass < 0.65) {
                        chosenClass = 'humancompanions:axeguard';
                    } else if (randClass < 0.825) {
                        chosenClass = 'humancompanions:archer';
                    } else {
                        chosenClass = 'humancompanions:arbalist';
                    }

                    let companion = event.level.createEntity(chosenClass);
                    if (companion) {
                        companion.setPosition(entity.x, entity.y + 1.0, entity.z);
                        initCompanion(companion, chosenClass);
                        companion.spawn();
                    }
                }
            }
        }
    }
});

// 2. Nhận món đồ yêu cầu từ tay người chơi để trừ dần và thu phục Lính
ItemEvents.entityInteracted(event => {
    let target = event.target;
    let player = event.player;
    let item = event.item;

    if (target.type.startsWith('humancompanions:')) {
        let nbt = target.nbt;
        if (!nbt.contains('Owner')) {
            let food1 = nbt.getString('food1');
            let food1_amt = nbt.getInt('food1_amt');
            let food2 = nbt.getString('food2');
            let food2_amt = nbt.getInt('food2_amt');

            let accepted = false;

            // Xử lý Phôi Sắt (Iron Ingot)
            if (item.id === 'minecraft:iron_ingot' && (food1 === 'Iron' || food1 === 'Carrot') && food1_amt > 0) {
                item.shrink(1);
                food1_amt--;
                nbt.putString('food1', 'Iron');
                nbt.putInt('food1_amt', food1_amt);
                accepted = true;
            }
            // Xử lý Xu KubeJS (Ring Coin)
            else if (item.id === 'kubejs:ring_coin' && (food2 === 'Coin' || food2 === 'Potato') && food2_amt > 0) {
                item.shrink(1);
                food2_amt--;
                nbt.putString('food2', 'Coin');
                nbt.putInt('food2_amt', food2_amt);
                accepted = true;
            }
            // Xử lý Magic Orb (kubejs:magic_orb) cho Lính Rìu
            else if (item.id === 'kubejs:magic_orb' && (food1 === 'MagicOrb' || food1 === 'Coal' || food1 === 'Carrot') && food1_amt > 0) {
                item.shrink(1);
                food1_amt--;
                nbt.putString('food1', 'MagicOrb');
                nbt.putInt('food1_amt', food1_amt);
                accepted = true;
            }
            // Xử lý Quả Táo (minecraft:apple) cho Lính Rìu
            else if (item.id === 'minecraft:apple' && (food2 === 'Apple' || food2 === 'Charcoal' || food2 === 'Potato') && food2_amt > 0) {
                item.shrink(1);
                food2_amt--;
                nbt.putString('food2', 'Apple');
                nbt.putInt('food2_amt', food2_amt);
                accepted = true;
            }
            // Xử lý Than Đá (Coal) cho các Lính khác (Cung, Nỏ)
            else if (item.id === 'minecraft:coal' && (food1 === 'Coal' || food1 === 'Carrot') && food1_amt > 0) {
                item.shrink(1);
                food1_amt--;
                nbt.putString('food1', 'Coal');
                nbt.putInt('food1_amt', food1_amt);
                accepted = true;
            }
            // Xử lý Than Củi (Charcoal) cho các Lính khác (Cung, Nỏ)
            else if (item.id === 'minecraft:charcoal' && (food2 === 'Charcoal' || food2 === 'Potato') && food2_amt > 0) {
                item.shrink(1);
                food2_amt--;
                nbt.putString('food2', 'Charcoal');
                nbt.putInt('food2_amt', food2_amt);
                accepted = true;
            }

            if (accepted) {
                player.runCommandSilent(`particle minecraft:happy_villager ${target.x} ${target.y + 1} ${target.z} 0.3 0.3 0.3 0.1 5`);

                if (food1_amt <= 0 && food2_amt <= 0) {
                    nbt.putUUID('Owner', player.uuid);
                    nbt.putBoolean('Following', true);
                    target.mergeNbt(nbt);

                    player.tell("§aBạn đã thuê thành công Lính!");
                    player.runCommandSilent(`particle minecraft:heart ${target.x} ${target.y + 1} ${target.z} 0.5 0.5 0.5 0.1 15`);
                } else {
                    target.mergeNbt(nbt);

                    let remFood1Name = (food1 === 'Iron') ? 'Phôi Sắt' : (food1 === 'MagicOrb' ? 'Magic Orb' : (food1 === 'Coal' ? 'Than Đá' : food1));
                    let remFood2Name = (food2 === 'Coin') ? 'Xu KubeJS' : (food2 === 'Apple' ? 'Quả Táo' : (food2 === 'Charcoal' ? 'Than Củi' : food2));

                    player.tell(`§eLính đã nhận 1 món! Còn thiếu: ${food1_amt > 0 ? food1_amt + ' ' + remFood1Name : ''} ${food2_amt > 0 ? food2_amt + ' ' + remFood2Name : ''}.`);
                }

                event.cancel();
            }
        }
    }
});

// 3. Chống sát thương từ các vụ nổ (Creeper, TNT...) cho Companion
EntityEvents.hurt(event => {
    let entity = event.entity;
    if (entity.type.startsWith('humancompanions:')) {
        let source = event.source;
        let typeStr = "";
        try {
            typeStr = source.getType() || "";
        } catch (e) { }

        let stringRepresentation = "";
        try {
            stringRepresentation = source.toString() || "";
        } catch (e) { }

        if (typeStr.includes('explosion') || stringRepresentation.includes('explosion')) {
            event.cancel();
        }
    }
});
