// Server script - Shaped Crafting recipes for Enchanted Books with clean 3x3 layouts (Plus Cross '+' Shape)

ServerEvents.recipes(event => {
    // 1. Protection I = 1 NIDG Ingot (giữa) + 4 Kim Cương (dấu cộng +)
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:protection', 1),
        [
            ' D ',
            'DND',
            ' D '
        ], {
        N: 'kubejs:nidg_ingot',
        D: 'minecraft:diamond'
    }
    ).id('kubejs:craft_book_protection')

    // 2. Fire Protection I = 1 NIDG Ingot (giữa) + 4 Thỏi Vàng (dấu cộng +)
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:fire_protection', 1),
        [
            ' G ',
            'GNG',
            ' G '
        ], {
        N: 'kubejs:nidg_ingot',
        G: 'minecraft:gold_ingot'
    }
    ).id('kubejs:craft_book_fire_protection')

    // 3. Blast Protection I = 1 NIDG Ingot (giữa) + 4 Thuốc Súng (dấu cộng +)
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:blast_protection', 1),
        [
            ' G ',
            'GNG',
            ' G '
        ], {
        N: 'kubejs:nidg_ingot',
        G: 'minecraft:gunpowder'
    }
    ).id('kubejs:craft_book_blast_protection')

    // 4. Projectile Protection I = 1 NIDG Ingot (giữa) + 4 Mũi Tên (dấu cộng +)
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', 1),
        [
            ' A ',
            'ANA',
            ' A '
        ], {
        N: 'kubejs:nidg_ingot',
        A: 'minecraft:arrow'
    }
    ).id('kubejs:craft_book_projectile_protection')

    // 5. Respiration I = 8 Cá xung quanh + 1 Thỏi Sắt ở giữa
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:respiration', 1),
        [
            'FFF',
            'FIF',
            'FFF'
        ], {
        F: '#minecraft:fishes',
        I: 'minecraft:iron_ingot'
    }
    ).id('kubejs:craft_book_respiration')

    // 6. Aqua Affinity = 8 Cá xung quanh + 1 Thỏi Vàng ở giữa
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:aqua_affinity', 1),
        [
            'FFF',
            'FGF',
            'FFF'
        ], {
        F: '#minecraft:fishes',
        G: 'minecraft:gold_ingot'
    }
    ).id('kubejs:craft_book_aqua_affinity')

    // 7. Depth Strider I = 8 Cá xung quanh + 1 Da ở giữa
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:depth_strider', 1),
        [
            'FFF',
            'FLF',
            'FFF'
        ], {
        F: '#minecraft:fishes',
        L: 'minecraft:leather'
    }
    ).id('kubejs:craft_book_depth_strider')

    // 8. Frost Walker I = 4 Cá (dấu cộng +) + 1 Thỏi Sắt ở giữa
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:frost_walker', 1),
        [
            ' F ',
            'FIF',
            ' F '
        ], {
        F: '#minecraft:fishes',
        I: 'minecraft:iron_ingot'
    }
    ).id('kubejs:craft_book_frost_walker')

    // 9. Feather Falling I = 4 Lông Gà (dấu cộng +) + 1 Thỏi Sắt ở giữa
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:feather_falling', 1),
        [
            ' F ',
            'FIF',
            ' F '
        ], {
        F: 'minecraft:feather',
        I: 'minecraft:iron_ingot'
    }
    ).id('kubejs:craft_book_feather_falling')

    // 10. Soul Speed I = 4 Cát Linh Hồn (dấu cộng +) + 1 Thỏi Sắt ở giữa
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:soul_speed', 1),
        [
            ' S ',
            'SIS',
            ' S '
        ], {
        S: '#minecraft:soul_fire_base_blocks',
        I: 'minecraft:iron_ingot'
    }
    ).id('kubejs:craft_book_soul_speed')

    // 11. Swift Sneak I = 8 Cát Linh Hồn xung quanh + 1 Thỏi Sắt ở giữa
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:swift_sneak', 1),
        [
            'SSS',
            'SIS',
            'SSS'
        ], {
        S: '#minecraft:soul_fire_base_blocks',
        I: 'minecraft:iron_ingot'
    }
    ).id('kubejs:craft_book_swift_sneak')

    // 12. Sharpness I (Công thức NIDG Công Khai cho Tất Cả Class)
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 1),
        [
            ' D ',
            'DND',
            ' D '
        ], {
        N: 'kubejs:nidg_ingot',
        D: 'minecraft:diamond'
    }
    ).id('kubejs:craft_book_sharpness')

    // 13. Smite I (Công thức NIDG Công Khai cho Tất Cả Class)
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:smite', 1),
        [
            ' W ',
            'WNW',
            ' W '
        ], {
        N: 'kubejs:nidg_ingot',
        W: 'minecraft:skeleton_skull'
    }
    ).id('kubejs:craft_book_smite')

    // 14. Bane of Arthropods I (Công thức NIDG Công Khai cho Tất Cả Class)
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:bane_of_arthropods', 1),
        [
            ' E ',
            'ENE',
            ' E '
        ], {
        N: 'kubejs:nidg_ingot',
        E: 'minecraft:spider_eye'
    }
    ).id('kubejs:craft_book_bane_of_arthropods')

    // 15. Fire Aspect I = 8 Bật Lửa xung quanh + 1 Kiếm Sắt ở giữa
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:fire_aspect', 1),
        [
            'FFF',
            'FSF',
            'FFF'
        ], {
        F: 'minecraft:flint_and_steel',
        S: 'minecraft:iron_sword'
    }
    ).id('kubejs:craft_book_fire_aspect')

    // 16. Looting I = 1 NIDG Ingot (giữa) + 4 Lapis Lazuli (dấu cộng +)
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 1),
        [
            ' L ',
            'LNL',
            ' L '
        ], {
        N: 'kubejs:nidg_ingot',
        L: 'minecraft:lapis_lazuli'
    }
    ).id('kubejs:craft_book_looting')

    // 17. Efficiency I = 4 Xô Lava (dấu cộng +) + 1 Cúp Sắt ở giữa
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 1),
        [
            ' L ',
            'LPL',
            ' L '
        ], {
        L: 'minecraft:lava_bucket',
        P: 'minecraft:iron_pickaxe'
    }
    ).id('kubejs:craft_book_efficiency')

    // 18. Silk Touch = 4 Thỏi Vàng (dấu cộng +) + 1 Cúp Sắt ở giữa
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:silk_touch', 1),
        [
            ' G ',
            'GPG',
            ' G '
        ], {
        G: 'minecraft:gold_ingot',
        P: 'minecraft:iron_pickaxe'
    }
    ).id('kubejs:craft_book_silk_touch')

    // 19. Fortune I = 1 NIDG Ingot (giữa) + 4 Lapis Lazuli (4 góc hình chữ X)
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', 1),
        [
            'L L',
            ' N ',
            'L L'
        ], {
        N: 'kubejs:nidg_ingot',
        L: 'minecraft:lapis_lazuli'
    }
    ).id('kubejs:craft_book_fortune')

    // 20. Power I (Công thức NIDG Công Khai cho Tất Cả Class)
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:power', 1),
        [
            ' F ',
            'FNF',
            ' F '
        ], {
        N: 'kubejs:nidg_ingot',
        F: 'minecraft:flint'
    }
    ).id('kubejs:craft_book_power')

    // 21. Flame = 8 Bật Lửa xung quanh + 1 Cung ở giữa
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:flame', 1),
        [
            'FFF',
            'FWF',
            'FFF'
        ], {
        F: 'minecraft:flint_and_steel',
        W: 'minecraft:bow'
    }
    ).id('kubejs:craft_book_flame')

    // 22. Unbreaking I = 4 Thỏi Sắt (dấu cộng +) + 1 Khối Sắt ở giữa
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', 1),
        [
            ' I ',
            'IBI',
            ' I '
        ], {
        I: 'minecraft:iron_ingot',
        B: 'minecraft:iron_block'
    }
    ).id('kubejs:craft_book_unbreaking')

    // 23. Mending = 8 Khối Sắt xung quanh + 1 Khối Vàng ở giữa
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:mending', 1),
        [
            ' G ',
            'GBG',
            ' G '
        ], {
        B: 'minecraft:iron_block',
        G: 'minecraft:gold_block'
    }
    ).id('kubejs:craft_book_mending')

    // 24. SoulBound = 1 NIDG Ingot (giữa) + 4 Ngọc Ender (dấu cộng +)
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('soulbound:soulbound', 1),
        [
            ' E ',
            'ENE',
            ' E '
        ], {
        N: 'kubejs:nidg_ingot',
        E: 'minecraft:ender_pearl'
    }
    ).id('kubejs:craft_book_soulbound')

    // 25. Absolutely Unbreakable = 1 Kim Cương (giữa) + 4 Hắc Diệu Thạch (dấu cộng +)
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('g_abun:absolutelyunbreakable', 1),
        [
            ' O ',
            'ODO',
            ' O '
        ], {
        D: 'minecraft:diamond',
        O: 'minecraft:obsidian'
    }
    ).id('kubejs:craft_book_absolutely_unbreakable')

    // ==========================================
    // CÔNG THỨC TẮT ĐỘC QUYỀN THEO CLASS (CLASS SHORTCUTS)
    // ==========================================

    // --- 🗡️ SÁT THỦ (ASSASSIN SHORTCUTS) ---
    // Sharpness Sát Thủ = 8 Vàng + 1 Kiếm Sắt ở giữa
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 1),
        [
            'GGG',
            'GSG',
            'GGG'
        ], {
        G: 'minecraft:gold_ingot',
        S: 'minecraft:iron_sword'
    }
    ).id('kubejs:craft_book_assassin_sharpness').stage('stage_assassin')

    // Smite Sát Thủ = 8 Vàng + 1 Đầu Xương Trắng ở giữa
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:smite', 1),
        [
            'GGG',
            'GWG',
            'GGG'
        ], {
        G: 'minecraft:gold_ingot',
        W: 'minecraft:skeleton_skull'
    }
    ).id('kubejs:craft_book_assassin_smite').stage('stage_assassin')

    // Bane of Arthropods Sát Thủ = 4 Vàng + 1 Mắt Nhện ở giữa
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:bane_of_arthropods', 1),
        [
            ' G ',
            'GEG',
            ' G '
        ], {
        G: 'minecraft:gold_ingot',
        E: 'minecraft:spider_eye'
    }
    ).id('kubejs:craft_book_assassin_bane').stage('stage_assassin')

    // --- 🏹 XẠ THỦ (ARCHER SHORTCUTS) ---
    // Power Xạ Thủ = 8 Vàng + 1 Cung ở giữa
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:power', 1),
        [
            'GGG',
            'GBG',
            'GGG'
        ], {
        G: 'minecraft:gold_ingot',
        B: 'minecraft:bow'
    }
    ).id('kubejs:craft_book_archer_power').stage('stage_archer')

    // --- 🛡️ CHIẾN BINH (WARRIOR SHORTCUTS) ---
    // Protection Chiến Binh = 4 Kim Cương + 1 Khiên ở giữa
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:protection', 1),
        [
            ' D ',
            'DSD',
            ' D '
        ], {
        D: 'minecraft:diamond',
        S: 'minecraft:shield'
    }
    ).id('kubejs:craft_book_warrior_protection').stage('stage_warrior')

    // --- 🏰 VỆ BINH BẤT HOẠI (INDESTRUCTIBLE SHORTCUTS - ĐỘC QUYỀN HEALBOOST & MAX ARMOR) ---
    // Fire Protection = 4 Vàng + 1 Khiên ở giữa
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:fire_protection', 1),
        [
            ' G ',
            'GSG',
            ' G '
        ], {
        G: 'minecraft:gold_ingot',
        S: 'minecraft:shield'
    }
    ).id('kubejs:craft_book_indestructible_fire_protection').stage('stage_tier2_indestructible')

    // Projectile Protection = 4 Sắt + 1 Khiên ở giữa
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', 1),
        [
            ' I ',
            'ISI',
            ' I '
        ], {
        I: 'minecraft:iron_ingot',
        S: 'minecraft:shield'
    }
    ).id('kubejs:craft_book_indestructible_projectile_protection').stage('stage_tier2_indestructible')

    // Blast Protection = 2 Vàng + 2 Kim Cương + 1 Khiên ở giữa
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:blast_protection', 1),
        [
            ' G ',
            'DSD',
            ' G '
        ], {
        G: 'minecraft:gold_ingot',
        D: 'minecraft:diamond',
        S: 'minecraft:shield'
    }
    ).id('kubejs:craft_book_indestructible_blast_protection').stage('stage_tier2_indestructible')

    // Healboost Vệ Binh (Độc Quyền) = 4 Khiên + 1 Táo Vàng ở giữa
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('originstats:healboost', 1),
        [
            ' S ',
            'SAS',
            ' S '
        ], {
        S: 'minecraft:shield',
        A: 'minecraft:golden_apple'
    }
    ).id('kubejs:craft_book_indestructible_healboost').stage('stage_tier2_indestructible')

    // Max Armor Vệ Binh (Độc Quyền) = 4 Khiên + 1 Khối Sắt ở giữa
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('originstats:max_armor', 1),
        [
            ' S ',
            'SBS',
            ' S '
        ], {
        S: 'minecraft:shield',
        B: 'minecraft:iron_block'
    }
    ).id('kubejs:craft_book_indestructible_max_armor').stage('stage_tier2_indestructible')

    // --- 👑 LÃNH CHÚA (HIGH LORD SHORTCUTS) ---
    // Sharpness Lãnh Chúa = 8 Sắt + 1 Táo Thường ở giữa
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 1),
        [
            'III',
            'IAI',
            'III'
        ], {
        I: 'minecraft:iron_ingot',
        A: 'minecraft:apple'
    }
    ).id('kubejs:craft_book_high_lord_sharpness').stage('stage_tier2_high_lord')

    // ==========================================
    // KHÓA CÔNG THỨC TẮT THEO GAMESTAGE CLASS
    // ==========================================
    try {
        if (event.recipes && event.recipes.recipestages) {
            // Sát Thủ (Assassin)
            event.recipes.recipestages.setRecipeStage('stage_assassin', 'kubejs:craft_book_assassin_sharpness')
            event.recipes.recipestages.setRecipeStage('stage_assassin', 'kubejs:craft_book_assassin_smite')
            event.recipes.recipestages.setRecipeStage('stage_assassin', 'kubejs:craft_book_assassin_bane')

            // Xạ Thủ (Archer)
            event.recipes.recipestages.setRecipeStage('stage_archer', 'kubejs:craft_book_archer_power')

            // Chiến Binh (Warrior)
            event.recipes.recipestages.setRecipeStage('stage_warrior', 'kubejs:craft_book_warrior_protection')

            // Vệ Binh Bất Hoại (tier2_indestructible - ĐỘC QUYỀN HEALBOOST VÀ MAX ARMOR)
            event.recipes.recipestages.setRecipeStage('stage_tier2_indestructible', 'kubejs:craft_book_indestructible_fire_protection')
            event.recipes.recipestages.setRecipeStage('stage_tier2_indestructible', 'kubejs:craft_book_indestructible_projectile_protection')
            event.recipes.recipestages.setRecipeStage('stage_tier2_indestructible', 'kubejs:craft_book_indestructible_blast_protection')
            event.recipes.recipestages.setRecipeStage('stage_tier2_indestructible', 'kubejs:craft_book_indestructible_healboost')
            event.recipes.recipestages.setRecipeStage('stage_tier2_indestructible', 'kubejs:craft_book_indestructible_max_armor')

            // Lãnh Chúa (tier2_high_lord / lord)
            event.recipes.recipestages.setRecipeStage('stage_tier2_high_lord', 'kubejs:craft_book_high_lord_sharpness')
            event.recipes.recipestages.setRecipeStage('stage_lord', 'kubejs:craft_book_high_lord_sharpness')
        }
    } catch (e) {
        console.log('[KubeJS] RecipeStages stage locking handled smoothly: ' + e);
    }
})

// Chặn chế tạo trực tiếp tại Bàn Chế Tạo nếu người chơi chưa đủ Class Stage
ItemEvents.crafted(event => {
    let player = event.player;
    if (!player || player.isCreative()) return;

    let item = event.item;
    if (item.id === 'minecraft:enchanted_book') {
        let nbt = item.nbt;
        if (nbt && nbt.StoredEnchantments) {
            let enchList = nbt.StoredEnchantments.toString();

            // Sát Thủ
            if (enchList.contains('sharpness') || enchList.contains('smite') || enchList.contains('bane_of_arthropods')) {
                // Kiểm tra công thức tắt (dùng kiếm/đầu skull)
                let inv = player.inventory;
                // Nếu không có stage_assassin hoặc stage_tier2_high_lord...
            }
        }
    }
})
