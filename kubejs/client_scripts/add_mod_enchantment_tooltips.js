// Client Script: Tự động thêm dòng mô tả vị trí và tác dụng tiếng Việt cho toàn bộ Sách Phù Phép (Enchanted Books) và trang bị chứa Phù Phép.

ItemEvents.tooltip(event => {
    const descriptions = {
        // --- MINECRAFT VANILLA ---
        'minecraft:protection': '[Giáp] Bảo Vệ: Giảm tất cả các loại sát thương gánh chịu',
        'minecraft:fire_protection': '[Giáp] Bảo Vệ Khỏi Lửa: Giảm sát thương từ lửa, dung nham và giảm thời gian cháy',
        'minecraft:feather_falling': '[Giày] Bão Hòa Té: Giảm sát thương nhận phải khi rơi từ trên cao',
        'minecraft:blast_protection': '[Giáp] Bảo Vệ Khỏi Vụ Nổ: Giảm sát thương từ thuốc nổ, Creepers và vụ nổ',
        'minecraft:projectile_protection': '[Giáp] Bảo Vệ Khỏi Tên: Giảm sát thương từ tên, đạn và vật thể bắn ra',
        'minecraft:respiration': '[Mũ] Hô Hấp: Tăng thời gian lặn thở dưới nước và giảm sát thương ngạt thở',
        'minecraft:aqua_affinity': '[Mũ] Thủy Tinh: Giúp đào khối dưới nước với tốc độ nhanh như trên mặt đất',
        'minecraft:thorns': '[Giáp] Gai: Phản lại sát thương cho kẻ tấn công khi chịu đòn',
        'minecraft:depth_strider': '[Giày] Bão Hòa Nước: Tăng tốc độ di chuyển bơi lội dưới nước',
        'minecraft:frost_walker': '[Giày] Chân Băng: Hóa nước thành băng nứt khi di chuyển trên mặt nước',
        'minecraft:soul_speed': '[Giày] Tốc Độ Linh Hồn: Tăng tốc độ di chuyển trên Cát Linh Hồn & Đất Linh Hồn',
        'minecraft:swift_sneak': '[Quần] Rón Rén Nhanh: Tăng tốc độ di chuyển khi đi rón rén (Crouch)',
        'minecraft:sharpness': '[Kiếm, Rìu] Sắc Bén: Tăng sát thương cận chiến tổng quát',
        'minecraft:smite': '[Kiếm, Rìu] Trừng Phạt: Tăng mạnh sát thương gây ra cho quái Thây Ma và Khung Xương',
        'minecraft:bane_of_arthropods': '[Kiếm, Rìu] Hại Chân Khớp: Tăng mạnh sát thương & gây chậm cho Nhện và Rết',
        'minecraft:knockback': '[Kiếm] Bật Lùi: Đẩy văng kẻ địch ra xa khi đánh trúng',
        'minecraft:fire_aspect': '[Kiếm] Đốt Cháy: Ghi điểm thiêu cháy mục tiêu khi chém trúng',
        'minecraft:looting': '[Kiếm] Cướp Bóc: Tăng tỷ lệ & số lượng vật phẩm rớt ra từ quái vật',
        'minecraft:sweeping': '[Kiếm] Quét Kiếm: Tăng sát thương của cú chém diện rộng (Sweeping Edge)',
        'minecraft:efficiency': '[Công Cụ] Hiệu Suất: Tăng tốc độ đào bới khối cho công cụ',
        'minecraft:silk_touch': '[Công Cụ] Chạm Nhẹ: Đào giữ nguyên bản dạng khối (Băng, Quặng, Thủy tinh...)',
        'minecraft:unbreaking': '[Tất Cả] Độ Bền: Giúp công cụ/trang bị có tỷ lệ không bị tốn độ bền',
        'minecraft:fortune': '[Công Cụ] May Mắn: Tăng số lượng khoáng sản rớt ra khi khai thác quặng',
        'minecraft:power': '[Cung] Sức Mạnh: Tăng sát thương tên bắn ra từ Cung',
        'minecraft:punch': '[Cung] Đẩy Lùi Cung: Đẩy văng mục tiêu ra xa khi bị tên bắn trúng',
        'minecraft:flame': '[Cung] Tên Lửa: Bắn ra mũi tên bốc cháy thiêu đốt mục tiêu',
        'minecraft:infinity': '[Cung] Vô Hạn Tên: Bắn tên không tốn mũi tên trong túi đồ (cần 1 mũi tên)',
        'minecraft:luck_of_the_sea': '[Cần Câu] May Mắn Biển Cả: Tăng cơ hội câu được kho báu quý giá khi câu cá',
        'minecraft:lure': '[Cần Câu] Mồi Câu: Giảm thời gian chờ cá cắn câu',
        'minecraft:loyalty': '[Đinh Ba] Trung Thành: Đinh Ba tự động bay quay về tay sau khi phóng đi',
        'minecraft:impaling': '[Đinh Ba] Đâm Xiên: Tăng sát thương Đinh Ba gây ra cho sinh vật dưới nước',
        'minecraft:riptide': '[Đinh Ba] Sóng Thần: Phóng người bay theo hướng Đinh Ba khi đứng dưới nước hoặc mưa',
        'minecraft:channeling': '[Đinh Ba] Sấm Sét: Gọi sét đánh xuống mục tiêu khi phóng Đinh Ba trong giông bão',
        'minecraft:multishot': '[Nỏ] Bắn Đa Mũi: Bắn ra 3 mũi tên cùng lúc chỉ với 1 mũi tên gốc',
        'minecraft:quick_charge': '[Nỏ] Nạp Nhanh: Giảm thời gian giương Nỏ (Crossbow)',
        'minecraft:piercing': '[Nỏ] Xuyên Phá: Mũi tên bắn từ Nỏ xuyên qua nhiều kẻ thù & nhặt lại được',
        'minecraft:mending': '[Tất Cả] Sửa Chữa: Dùng điểm kinh nghiệm (EXP) nhặt được để tự hồi phục độ bền',
        'minecraft:vanishing_curse': '[Tất Cả] Lời Nguyền Biến Mất: Vật phẩm tự biến mất hoàn toàn khi nhân vật chết',
        'minecraft:binding_curse': '[Giáp] Lời Nguyền Gắn Kết: Không thể gỡ bỏ trang bị ra khỏi người cho tới khi chết',

        // --- MOD ENCHANTMENTS ---
        'g_abun:absolutelyunbreakable': '[Tất Cả] Bất Hoại: Giúp trang bị không bao giờ bị mất độ bền hay hỏng hóc',
        'combat_evolution:intimidate': '[Vũ Khí] Uy Hiếp: Gây hoảng sợ và áp chế quái vật xung quanh khi tấn công',
        'combat_evolution:massacre': '[Vũ Khí] Tàn Sát: Tăng mạnh sát thương khi chém trúng nhóm đông kẻ thù cùng lúc',
        'efn:broad_blade_enhance': '[Đại Đao] Cường Hóa Đại Đao: Tăng sát thương và bán kính vung của vũ khí Đại Đao',
        'efn:scythe_enhance': '[Tử Thần Liềm] Cường Hóa Lưỡi Liềm: Tăng sát thương và khả năng hút máu của Tử Thần Liềm',
        'efn:yamato_doppelganger': '[Kiếm Yamato] Yamato Phân Thân: Triệu hồi bóng ma vung kiếm chém theo các chiêu thức',
        'efn:yamato_guard': '[Kiếm Yamato] Yamato Phòng Thủ: Tăng khả năng đỡ đòn và phản công tức thì khi dùng Yamato',
        'efn:yamato_heavy_rain': '[Kiếm Yamato] Yamato Mưa Kiếm: Triệu hồi bão ảo ảnh kiếm trút trảm liên tục xuống mục tiêu',
        'efn:yamato_judgement_cut_end': '[Kiếm Yamato] Yamato Trảm Không Gian: Tuyệt kỹ Judgement Cut End cắt đứt không gian gây sát thương cực đại',
        'efn:yamato_summoned_sword': '[Kiếm Yamato] Yamato Triệu Hồi Kiếm: Bắn ra các ảo ảnh kiếm tự động truy đuổi mục tiêu',
        'efn:yamato_summoned_sword_end': '[Kiếm Yamato] Yamato Bão Kiếm: Triệu hồi vòng ảo ảnh kiếm bọc quanh người càn quét kẻ thù',
        'epic_stats_mod_remastered:exp_hunter': '[Vũ Khí, Giáp] Thợ Săn Kinh Nghiệm: Tăng lượng điểm kinh nghiệm (EXP) nhận được khi hạ gục quái',
        'moblassos:holding': '[Mob Lasso] Giữ Chặt: Giúp dây thừng Mob Lasso bắt giữ các quái vật cấp cao dễ dàng hơn',
        'soulbound:soulbound': '[Tất Cả] Ràng Buộc Hồn: Giữ vật phẩm trong túi đồ, không bị rơi ra đất khi nhân vật chết',
        'supplementaries:stasis': '[Nỏ, Bong Bóng] Ngưng Trệ: Giữ cho mũi tên hoặc bong bóng dừng lơ lửng trên không trung',
        'wom:invigoration': '[Vũ Khí WOM] Tiếp Sức: Hồi phục thể lực (Stamina) & năng lượng khi vung chiêu vũ khí WOM thành công'
    };

    // 1. Hiển thị mô tả trên Sách Phù Phép (minecraft:enchanted_book)
    event.addAdvanced('minecraft:enchanted_book', (item, advanced, text) => {
        if (!item.nbt) return;
        let stored = item.nbt.StoredEnchantments || item.nbt.Enchantments;
        if (!stored) return;

        stored.forEach(ench => {
            let id = String(ench.id);
            if (descriptions[id]) {
                text.add(Text.gold(descriptions[id]));
            }
        });
    });

    // 2. Hiển thị mô tả trực tiếp trên bất kỳ trang bị/vũ khí nào đã được ép Phù Phép
    event.addAdvanced(RegExp('.*'), (item, advanced, text) => {
        if (item.id === 'minecraft:enchanted_book' || !item.nbt) return;
        let enchs = item.nbt.Enchantments;
        if (!enchs) return;

        enchs.forEach(ench => {
            let id = String(ench.id);
            if (descriptions[id]) {
                text.add(Text.gold(descriptions[id]));
            }
        });
    });
});
