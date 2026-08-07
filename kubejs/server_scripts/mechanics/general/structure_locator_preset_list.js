// Server script - Full Preset Registry for Structure Locator Scrolls & Admin Helper Commands

const STRUCTURE_LOCATOR_PRESETS = {
    // ☠️ NHÓM BOSS TỐI CAO
    'cataclysm_monstrosity': { target: 'cataclysm:soul_black_smith', name: 'Lò Rèn Hồn Ma (Netherite Monstrosity)', tier: 'BOSS' },
    'cataclysm_ignis': { target: 'cataclysm:burning_arena', name: 'Đấu Trường Rực Lửa (Ignis)', tier: 'BOSS' },
    'cataclysm_ancient_remnant': { target: 'cataclysm:cursed_pyramid', name: 'Kim Tự Tháp Lời Nguyền (Ancient Remnant)', tier: 'BOSS' },
    'cataclysm_leviathan': { target: 'cataclysm:sunken_city', name: 'Thành Phố Chìm Biển Sâu (Leviathan)', tier: 'BOSS' },
    'cataclysm_harbinger': { target: 'cataclysm:ancient_factory', name: 'Nhà Máy Cổ Đại (Harbinger)', tier: 'BOSS' },
    'dragon_tower': { target: 'block_factorys_bosses:dragon_tower', name: 'Tháp Rồng Đen', tier: 'BOSS' },
    'kraken_ship': { target: 'block_factorys_bosses:kraken_ship', name: 'Tàu Thủy Quái Kraken', tier: 'BOSS' },
    'sandworm_nest': { target: 'block_factorys_bosses:sandworm_nest', name: 'Tổ Sâu Cát Sa Mạc', tier: 'BOSS' },
    'underworld_arena': { target: 'block_factorys_bosses:underworld_arena', name: 'Đấu Trường Địa Ngục', tier: 'BOSS' },
    'yeti_hideout': { target: 'block_factorys_bosses:yeti_hideout', name: 'Hang Quái Vật Tuyết Yeti', tier: 'BOSS' },
    'kenjiboss': { target: 'bosses_of_miracle:kenjiboss', name: 'Sào Huyệt Kenji Boss', tier: 'BOSS' },
    'ancient_city': { target: 'minecraft:ancient_city', name: 'Thành Phố Cổ Đại (Warden)', tier: 'BOSS' },
    'stronghold': { target: 'betterstrongholds:stronghold', name: 'Pháo Đài Tận Cùng (Rồng Ender)', tier: 'BOSS' },
    'ocean_monument': { target: 'betteroceanmonuments:ocean_monument', name: 'Đền Thần Biển (Elder Guardian)', tier: 'BOSS' },
    'woodland_mansion': { target: 'minecraft:mansion', name: 'Dinh Biệt Thự Biệt Lập (Evoker)', tier: 'BOSS' },

    // 💎 NHÓM CAO CẤP
    'bastion_overworld': { target: 'repurposed_structures:bastion_underground', name: 'Pháo Đài Bastion Piglin', tier: 'ADVANCED' },
    'end_city': { target: 'minecraft:end_city', name: 'Thành Phố End City (Elytra)', tier: 'ADVANCED' },
    'dungeons_arise_kayra': { target: 'dungeons_arise:keep_kayra', name: 'Pháo Đài Keep Kayra', tier: 'ADVANCED' },
    'dungeons_arise_shiraz': { target: 'dungeons_arise:shiraz_palace', name: 'Cung Điện Shiraz', tier: 'ADVANCED' },
    'nether_fortress': { target: 'betterfortresses:fortress', name: 'Pháo Đài Nether', tier: 'ADVANCED' },
    'desert_temple': { target: 'betterdeserttemples:desert_temple', name: 'Đền Sa Mạc Ngầm', tier: 'ADVANCED' },
    'mausoleum': { target: 'explorify:mausoleum', name: 'Lăng Mộ Cổ Vị Vua', tier: 'ADVANCED' },
    'mineshafts': { target: 'bettermineshafts:mineshaft_oak', name: 'Hầm Mỏ Khai Thác Nâng Cấp', tier: 'ADVANCED' },
    'shipwreck': { target: 'minecraft:shipwreck', name: 'Xác Tàu Đắm Kho Báu', tier: 'ADVANCED' },
    'buried_treasure': { target: 'minecraft:buried_treasure', name: 'Kho Báu Chôn Giấu', tier: 'ADVANCED' },

    // 🏡 NHÓM PHỔ THÔNG
    'companion_house': { target: 'humancompanions:oak_house', name: 'Nhà Trọ Binh Lính', tier: 'COMMON' },
    'village': { target: 'minecraft:village_plains', name: 'Làng Dân Làng Đồng Bằng', tier: 'COMMON' },
    'town': { target: 'towns_and_towers:village_forest', name: 'Thị Trấn Towns and Towers', tier: 'COMMON' },
    'pillager_outpost': { target: 'minecraft:pillager_outpost', name: 'Đồn Bốt Cướp Biển', tier: 'COMMON' }
};

// Lệnh Admin siêu tiện lợi: /scrollgive <preset_key>
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(
        Commands.literal('scrollgive')
            .requires(src => src.hasPermission(2))
            .then(Commands.argument('preset', Arguments.STRING.create(event))
                .executes(ctx => {
                    let presetKey = Arguments.STRING.getResult(ctx, 'preset');
                    let player = ctx.getSource().getPlayerOrException();

                    let preset = STRUCTURE_LOCATOR_PRESETS[presetKey];
                    if (!preset) {
                        player.tell(`§c[OriginStats] Không tìm thấy preset '${presetKey}'!`);
                        player.tell(`§7Danh sách preset có sẵn: ${Object.keys(STRUCTURE_LOCATOR_PRESETS).join(', ')}`);
                        return 0;
                    }

                    let command = `give ${player.username} kubejs:structure_locator_scroll{target_structure:"${preset.target}",structure_name:"${preset.name}",tier:"${preset.tier}"}`;
                    player.server.commands.performPrefixedCommand(player.server.createCommandSourceStack(), command);
                    player.tell(`§a§l[OriginStats] §fĐã cấp Cuộn Giấy Định Vị: §e${preset.name}`);
                    return 1;
                }))
    );
});
