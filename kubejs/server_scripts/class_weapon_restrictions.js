// Tên file: kubejs/server_scripts/class_weapon_restrictions.js
// Giới hạn cấm/cho phép cầm vũ khí độc quyền theo GameStage của Class

const CLASS_WEAPON_MAP = {
    // 🛡️ WARRIOR WEAPONS
    'epicfight:iron_greatsword': 'stage_warrior',
    'epicfight:golden_greatsword': 'stage_warrior',
    'epicfight:diamond_greatsword': 'stage_warrior',
    'epicfight:netherite_greatsword': 'stage_warrior',
    'wom:stone_greataxe': 'stage_warrior',
    'wom:iron_greataxe': 'stage_warrior',
    'wom:golden_greataxe': 'stage_warrior',
    'wom:diamond_greataxe': 'stage_warrior',
    'wom:netherite_greataxe': 'stage_warrior',
    'cdmoveset:s_wooden_greatsword': 'stage_warrior',
    'cdmoveset:s_stone_greatsword': 'stage_warrior',
    'cdmoveset:s_golden_greatsword': 'stage_warrior',
    'cdmoveset:s_iron_greatsword': 'stage_warrior',
    'cdmoveset:s_diamond_greatsword': 'stage_warrior',
    'cdmoveset:s_netherite_greatsword': 'stage_warrior',

    // ⚡ TIER 2 WARRIOR SUB-CLASSES
    'wom:herrscher': 'stage_tier2_vanguard',
    'wom:gesetz': 'stage_tier2_vanguard',
    'wom:tormented_mind': 'stage_tier2_indestructible',

    // 🗡️ ASSASSIN WEAPONS
    'epicfight:uchigatana': 'stage_assassin',
    'cdmoveset:s_wooden_sword': 'stage_assassin',
    'cdmoveset:s_stone_sword': 'stage_assassin',
    'cdmoveset:s_golden_sword': 'stage_assassin',
    'cdmoveset:s_iron_sword': 'stage_assassin',
    'cdmoveset:s_diamond_sword': 'stage_assassin',
    'cdmoveset:s_netherite_sword': 'stage_assassin',
    'cdmoveset:yamato': 'stage_assassin',
    'cdmoveset:great_tachi': 'stage_assassin',
    'cdmoveset:phantom_katana': 'stage_assassin',
    'cdmoveset:dual_tachi': 'stage_assassin',

    // 🌀 TIER 2 ASSASSIN SUB-CLASSES
    'wom:moonless': 'stage_tier2_wind_assassin',
    'wom:satsujin': 'stage_tier2_phantom_striker',
    'efn:crimson_moon': 'stage_tier2_destruction',
    'wom:ender_blaster': 'stage_tier2_magic_assassin',

    // 🏹 ARCHER WEAPONS
    'p1nero_bow:mortis': 'stage_archer',
};

// Gắn Stage cho tất cả công thức chế tạo vũ khí độc quyền (kể cả công thức gốc của Mod/Vanilla)
ServerEvents.recipes(event => {
    Object.keys(CLASS_WEAPON_MAP).forEach(itemId => {
        let reqStage = CLASS_WEAPON_MAP[itemId];
        event.forEachRecipe({ output: itemId }, recipe => {
            recipe.stage(reqStage);
            if (event.recipes && event.recipes.recipestages) {
                try {
                    event.recipes.recipestages.setRecipeStage(reqStage, recipe.id.toString());
                } catch (e) {}
            }
        });
    });
});

// Kiểm tra cấm dùng khi nhấp chuột phải
ItemEvents.rightClicked(event => {
    let player = event.player;
    if (!player || player.isCreative()) return;

    let item = event.item;
    let requiredStage = CLASS_WEAPON_MAP[item.id];

    if (requiredStage && !player.stages.has(requiredStage)) {
        player.tell(`§c[OriginStats] Vũ khí này yêu cầu Class tương ứng để sử dụng!`);
        event.cancel();
    }
});

// Kiểm tra khi tương tác với Entity
ItemEvents.entityInteracted(event => {
    let player = event.player;
    if (!player || player.isCreative()) return;

    let item = event.item;
    let requiredStage = CLASS_WEAPON_MAP[item.id];

    if (requiredStage && !player.stages.has(requiredStage)) {
        player.tell(`§c[OriginStats] Vũ khí này yêu cầu Class tương ứng để sử dụng!`);
        event.cancel();
    }
});

// Tự động nhả / cấm cầm trên tay khi đang mở game
PlayerEvents.tick(event => {
    let player = event.player;
    if (!player || player.isCreative()) return;
    if (player.age % 20 !== 0) return; // Kiểm tra mỗi 1 giây

    let mainHand = player.mainHandItem;
    if (mainHand && !mainHand.empty) {
        let reqStage = CLASS_WEAPON_MAP[mainHand.id];
        if (reqStage && !player.stages.has(reqStage)) {
            player.tell(`§c[OriginStats] Bạn không thuộc Class tương ứng để cầm vũ khí: ${mainHand.name.string}!`);
            // Thả item xuống đất hoặc chuyển vào túi
            player.drop(mainHand.copy(), false);
            mainHand.count = 0;
        }
    }

    let offHand = player.offHandItem;
    if (offHand && !offHand.empty) {
        let reqStage = CLASS_WEAPON_MAP[offHand.id];
        if (reqStage && !player.stages.has(reqStage)) {
            player.tell(`§c[OriginStats] Bạn không thuộc Class tương ứng để cầm vũ khí phụ: ${offHand.name.string}!`);
            player.drop(offHand.copy(), false);
            offHand.count = 0;
        }
    }
});

// Kiểm tra cấm CHẾ TẠO (Crafting) vũ khí độc quyền nếu không có GameStage tương ứng
ItemEvents.crafted(event => {
    let player = event.player;
    if (!player || player.isCreative()) return;

    let item = event.item;
    if (!item || item.empty) return;

    let requiredStage = CLASS_WEAPON_MAP[item.id];
    if (requiredStage && !player.stages.has(requiredStage)) {
        player.tell(`§c[OriginStats] Công thức chế tạo vũ khí ${item.name.string} chỉ dành riêng cho Class tương ứng!`);
        player.drop(item.copy(), false);
        item.count = 0;
    }
});
