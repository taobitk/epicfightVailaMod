// ==========================================
// CẤU HÌNH TỈ LỆ HÚT MÁU (LIFESTEAL CONFIG)
// ==========================================

// 1. WOM (Weapons of Miracles)
const WOM_WEAPONS = {
    'wom:antitheus': 0.50, // 50% (OP)
    'wom:satsujin': 0.25,
    'wom:moonless': 0.35, // Đã nâng lên 35%
    'wom:solar': 0.25,
    'wom:herrscher': 0.15,
    'wom:ruine': 0.15,
    'wom:tormented_mind': 0.15,
    'wom:agony': 0.20,
    'wom:jabberwocky': 0.20,
    'wom:evil_tachi': 0.20,
    'wom:napoleon': 0.20,
    'wom:ender_blaster': 0.20
};

// 2. EFN (Epic Fight Nightfall / Custom)
const EFN_WEAPONS = {
    'efn:nf_dual_sword': 0.25, // Ancient Sculk Twinblades
    'efn:sword_of_pioneer': 0.20, // Vanguard Sword
    'efn:nf_claw': 0.20, // Feral Claw
    'efn:air_tachi': 0.15, // Bloodlust
    'efn:co_tachi': 0.15,  // Carnivorous Osteofrenzy
    'efn:crimson_moon': 0.20 // Crimson Moon lifesteal 20%
};

// 3. EpicFight Daggers (Dao găm thường) - 10%
const EPICFIGHT_DAGGERS = {
    'epicfight:wooden_dagger': 0.10,
    'epicfight:stone_dagger': 0.10,
    'epicfight:golden_dagger': 0.10,
    'epicfight:iron_dagger': 0.10,
    'epicfight:diamond_dagger': 0.10,
    'epicfight:netherite_dagger': 0.10
};

// 4. Các Mod Khác (Black Myth: Wukong, v.v...)
const OTHER_WEAPONS = {
    'wukong:kang_jin': 0.25
};

// ==========================================
// XỬ LÝ LOGIC (KHÔNG CẦN CHỈNH SỬA Ở DƯỚI)
// ==========================================

// Gộp tất cả vào một từ điển duy nhất
const LIFESTEAL_MAP = Object.assign({}, WOM_WEAPONS, EFN_WEAPONS, EPICFIGHT_DAGGERS, OTHER_WEAPONS);

EntityEvents.hurt(event => {
    if (!event.source.player) return;

    // Lấy item trên tay chính
    const player = event.source.player;
    const item = player.getMainHandItem();
    if (!item) return;

    // Tra cứu tỉ lệ hút máu
    const rate = LIFESTEAL_MAP[item.id];

    // Nếu có tỉ lệ > 0 thì hồi máu
    if (rate) {
        const damage = event.getDamage();
        const healAmount = damage * rate;

        if (healAmount > 0) {
            player.heal(healAmount);
        }
    }
});
