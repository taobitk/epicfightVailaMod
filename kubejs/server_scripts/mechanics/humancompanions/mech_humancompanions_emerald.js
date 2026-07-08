// Tên file: kubejs/server_scripts/mechanics/mech_humancompanions_emerald.js
// Hỗ trợ thu phục Companion bằng cách trả từ từ từng cái Sắt và Vàng.
// Đồng thời tự động spawn 3-5 Companion tại các ngôi làng mới sinh ra để bảo vệ dân làng.

// 1. Khi thực thể spawn ra, thiết lập thuộc tính, buff máu và xử lý tự động tạo Companion tại làng
EntityEvents.spawned(event => {
    let entity = event.entity;
    
    // --- PHẦN 1: THIẾT LẬP THÔNG SỐ CHO COMPANION ---
    if (entity.type.startsWith('humancompanions:')) {
        // Ghi log ra file server.log để kiểm tra
        console.log(`[KJS-Companion] Dang ap dung thuoc tinh cho ${entity.type} (UUID: ${entity.uuid})`);

        // Ép đặt Max HP lên 50 trực tiếp từ Server và hồi đầy máu
        entity.setAttributeBaseValue('minecraft:generic.max_health', 50.0);
        entity.health = 50.0;

        // Buff hiệu ứng Regeneration I vô hạn (độ dài 2 tỷ ticks, không hiển thị hạt để đỡ rối mắt)
        entity.potionEffects.add('minecraft:regeneration', 2000000000, 0, false, false);

        let nbt = entity.nbt;
        if (!nbt.contains('Owner')) {
            nbt.putString('food1', 'Iron Ingot');
            nbt.putInt('food1_amt', 10);
            nbt.putString('food2', 'Gold Ingot');
            nbt.putInt('food2_amt', 10);
            entity.mergeNbt(nbt);
        }
    }

    // --- PHẦN 2: TỰ ĐỘNG SINH COMPANION TRONG LÀNG (Dựa trên Dân làng spawn) ---
    if (entity.type === 'minecraft:villager') {
        if (event.level.clientSide) return; // Chỉ xử lý ở phía Server

        // Quét phạm vi 64 block xung quanh dân làng vừa spawn
        let aabb = entity.boundingBox.inflate(64);
        let companionsNearby = event.level.getEntitiesWithin(aabb).filter(e => e.type.startsWith('humancompanions:'));

        // Nếu chưa có Companion nào bảo vệ khu vực này
        if (companionsNearby.length === 0) {
            let count = Math.floor(Math.random() * 3) + 3; // Lấy ngẫu nhiên từ 3 đến 5
            let classes = [
                'humancompanions:knight',
                'humancompanions:archer',
                'humancompanions:axeguard',
                'humancompanions:arbalist'
            ];

            console.log(`[KJS-Companion] Phat hien lang moi! Dang tao ${count} Companions de bao ve...`);

            for (let i = 0; i < count; i++) {
                let randomClass = classes[Math.floor(Math.random() * classes.length)];
                let companion = event.level.createEntity(randomClass);
                if (companion) {
                    // Spawn xung quanh vị trí của dân làng
                    companion.x = entity.x + (Math.random() * 8 - 4);
                    companion.y = entity.y;
                    companion.z = entity.z + (Math.random() * 8 - 4);
                    companion.spawn();
                }
            }
        }
    }
});

// 2. Nhận từng cái Sắt/Vàng từ tay người chơi và trừ dần trong NBT
ItemEvents.entityInteracted(event => {
    let target = event.target;
    let player = event.player;
    let item = event.item;

    if (target.type.startsWith('humancompanions:')) {
        let nbt = target.nbt;
        // Chỉ hoạt động nếu chưa được thu phục
        if (!nbt.contains('Owner')) {
            let food1 = nbt.getString('food1');
            let food1_amt = nbt.getInt('food1_amt');
            let food2 = nbt.getString('food2');
            let food2_amt = nbt.getInt('food2_amt');

            let accepted = false;

            // Xử lý khi đưa Sắt (Iron Ingot)
            if (item.id === 'minecraft:iron_ingot' && food1 === 'Iron Ingot' && food1_amt > 0) {
                item.shrink(1); // Tiêu hao 1 cái trên tay
                food1_amt--;
                nbt.putInt('food1_amt', food1_amt);
                accepted = true;
            } 
            // Xử lý khi đưa Vàng (Gold Ingot)
            else if (item.id === 'minecraft:gold_ingot' && food2 === 'Gold Ingot' && food2_amt > 0) {
                item.shrink(1); // Tiêu hao 1 cái trên tay
                food2_amt--;
                nbt.putInt('food2_amt', food2_amt);
                accepted = true;
            }

            if (accepted) {
                // Tạo hiệu ứng hạt ăn đồ của Minecraft
                player.runCommandSilent(`particle minecraft:happy_villager ${target.x} ${target.y + 1} ${target.z} 0.3 0.3 0.3 0.1 5`);
                
                // Kiểm tra xem đã đủ số lượng cả 2 loại chưa
                if (food1_amt <= 0 && food2_amt <= 0) {
                    // Thu phục Companion
                    nbt.putUUID('Owner', player.uuid); 
                    nbt.putBoolean('Following', true); 
                    target.mergeNbt(nbt);

                    player.tell("Bạn đã thuê thành công Companion này!");
                    player.runCommandSilent(`particle minecraft:heart ${target.x} ${target.y + 1} ${target.z} 0.5 0.5 0.5 0.1 15`);
                } else {
                    // Cập nhật số lượng còn thiếu vào NBT của thực thể
                    target.mergeNbt(nbt);
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
        } catch (e) {}
        
        let stringRepresentation = "";
        try {
            stringRepresentation = source.toString() || "";
        } catch (e) {}

        // Kiểm tra xem loại sát thương có phải là vụ nổ không
        if (typeStr.includes('explosion') || stringRepresentation.includes('explosion')) {
            event.cancel();
        }
    }
});
