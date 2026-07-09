// Tên file: kubejs/server_scripts/mechanics/humancompanions/mech_humancompanions_emerald.js
// Hỗ trợ thu phục Companion bằng cách trả từ từ từng cái Cà rốt và Khoai tây (ngẫu nhiên 5-30 cái).
// Tự động trang bị tương thích chức nghiệp (full giáp da + vũ khí đá/cung/nỏ) khi spawn.
// Đồng thời tự động spawn 4-6 Companion tại các ngôi làng mới sinh ra để bảo vệ dân làng.

// Hàm thiết lập thông số, trang bị và giá thuê cho Companion (Dùng chung cho cả spawn tự nhiên và spawn ở làng)
function initCompanion(companion, chosenClass) {
    const EquipmentSlot = Java.loadClass('net.minecraft.world.entity.EquipmentSlot');
    
    console.log(`[KJS-Companion] Dang thiet lap thong so cho ${chosenClass} (UUID: ${companion.uuid})`);

    // Ép đặt Max HP lên 50 trực tiếp từ Server và hồi đầy máu
    companion.setAttributeBaseValue('minecraft:generic.max_health', 50.0);
    companion.health = 50.0;

    // Buff hiệu ứng Regeneration I vô hạn (độ dài 2 tỷ ticks, không hiển thị hạt để đỡ rối mắt)
    companion.potionEffects.add('minecraft:regeneration', 2000000000, 0, false, false);

    // Phát trang bị mặc định (Full giáp da + Vũ khí tương ứng chức nghiệp)
    let pData = companion.persistentData;
    if (!pData.getBoolean('equipped_companions')) {
        // Trang bị giáp da
        companion.setItemSlot(EquipmentSlot.HEAD, 'minecraft:leather_helmet');
        companion.setItemSlot(EquipmentSlot.CHEST, 'minecraft:leather_chestplate');
        companion.setItemSlot(EquipmentSlot.LEGS, 'minecraft:leather_leggings');
        companion.setItemSlot(EquipmentSlot.FEET, 'minecraft:leather_boots');

        // Xác định vũ khí tương thích với chức nghiệp để họ cầm được trên tay
        let weapon = 'minecraft:stone_sword'; // Mặc định là Kiếm đá cho Knight
        if (chosenClass === 'humancompanions:axeguard') {
            weapon = 'minecraft:stone_axe';
        } else if (chosenClass === 'humancompanions:archer') {
            weapon = 'minecraft:bow';
        } else if (chosenClass === 'humancompanions:arbalist') {
            weapon = 'minecraft:crossbow';
        }

        // Trang bị vũ khí ở tay chính
        companion.setItemInHand('main_hand', weapon);

        // Thiết lập tỷ lệ rơi đồ mặc định (8.5%)
        companion.setDropChance('head', 0.085);
        companion.setDropChance('chest', 0.085);
        companion.setDropChance('legs', 0.085);
        companion.setDropChance('feet', 0.085);
        companion.setDropChance('mainhand', 0.085);

        // Đánh dấu đã phát đồ thành công để tránh phát lặp lại khi reload chunk
        pData.putBoolean('equipped_companions', true);
    }

    // Thiết lập NBT đòi ngẫu nhiên từ 5 đến 30 Cà rốt và Khoai tây
    let nbt = companion.nbt;
    if (!nbt.contains('Owner')) {
        let randomCarrots = Math.floor(Math.random() * 26) + 5;
        let randomPotatoes = Math.floor(Math.random() * 26) + 5;

        nbt.putString('food1', 'Carrot');
        nbt.putInt('food1_amt', randomCarrots);
        nbt.putString('food2', 'Potato');
        nbt.putInt('food2_amt', randomPotatoes);
        companion.mergeNbt(nbt);
    }
}

// 1. Khi thực thể spawn ra, thiết lập thuộc tính, trang bị đồ và xử lý tự động tạo Companion tại làng
EntityEvents.spawned(event => {
    let entity = event.entity;
    
    // --- PHẦN 1: THIẾT LẬP THÔNG SỐ VÀ TRANG BỊ CHO COMPANION SINH TỰ NHIÊN ---
    if (entity.type.startsWith('humancompanions:')) {
        // Chỉ chạy nếu Companion chưa được khởi tạo thuộc tính
        if (!entity.persistentData.getBoolean('equipped_companions')) {
            initCompanion(entity, entity.type);
        }
    }

    // --- PHẦN 2: TỰ ĐỘNG SINH COMPANION TRONG LÀNG (Dựa trên Dân làng spawn) ---
    if (entity.type === 'minecraft:villager') {
        if (event.level.clientSide) return; // Chỉ xử lý ở phía Server

        // Chỉ có 20% tỉ lệ kích hoạt kiểm tra khi mỗi dân làng spawn để tránh lag và trùng lặp dồn dập
        if (Math.random() < 0.20) {
            // Quét phạm vi rộng 128 block xung quanh dân làng vừa spawn (bao phủ toàn bộ làng)
            let aabb = entity.boundingBox.inflate(128);
            let companionsNearby = event.level.getEntitiesWithin(aabb).filter(e => e.type.startsWith('humancompanions:'));

            // Nếu chưa có Companion nào bảo vệ khu vực làng này
            if (companionsNearby.length === 0) {
                let count = Math.floor(Math.random() * 3) + 4; // Số lượng: 4 đến 6 con

                console.log(`[KJS-Companion] Phat hien lang moi! Dang tao ${count} Companions de bao ve...`);

                for (let i = 0; i < count; i++) {
                    // Xác định chức nghiệp dựa theo tỉ lệ: 40% Kiếm (Knight), 25% Rìu (Axeguard), 17.5% Cung (Archer), 17.5% Nỏ (Arbalist)
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
                        // Di chuyển đến tọa độ an toàn của dân làng
                        companion.setPosition(entity.x, entity.y + 1.0, entity.z);
                        
                        // Chủ động gọi khởi tạo Companion trực tiếp tại đây để bỏ qua cơ chế chống đệ quy của KubeJS
                        initCompanion(companion, chosenClass);
                        
                        companion.spawn();
                    }
                }
            }
        }
    }
});

// 2. Nhận từng cái Cà rốt/Khoai tây từ tay người chơi và trừ dần trong NBT
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

            // Xử lý khi đưa Cà rốt (Carrot)
            if (item.id === 'minecraft:carrot' && food1 === 'Carrot' && food1_amt > 0) {
                item.shrink(1); // Tiêu hao 1 cái trên tay
                food1_amt--;
                nbt.putInt('food1_amt', food1_amt);
                accepted = true;
            } 
            // Xử lý khi đưa Khoai tây (Potato)
            else if (item.id === 'minecraft:potato' && food2 === 'Potato' && food2_amt > 0) {
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
