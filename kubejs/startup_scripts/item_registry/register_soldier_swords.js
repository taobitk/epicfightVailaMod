// Startup script - Register custom swords for soldiers with exact damage, max durability (999999) and tooltips

StartupEvents.registry('item', event => {
    // 1. Kiếm Hắc Diện Binh Lính - Sát Thương = 8, Độ Bền = 999999
    event.create('netherite_sword_base', 'sword')
        .displayName('Kiếm Hắc Diện Binh Lính')
        .texture('kubejs:item/netherite_sword_base')
        .tier('iron')
        .attackDamageBaseline(5) // Baseline 5 + Tier Iron 2 + Base Player 1 = 8 Damage chuẩn
        .speedBaseline(-2.4)
        .maxDamage(999999)
        .unstackable()
        .tooltip('§cChỉ dành cho binh lính (Không thể dùng bởi người chơi)')

    // 2. Kiếm Kim Cương Vàng Binh Lính - Sát Thương = 10, Độ Bền = 999999
    event.create('netherite_sword_1', 'sword')
        .displayName('Kiếm Kim Cương Vàng Binh Lính')
        .texture('kubejs:item/netherite_sword_1')
        .tier('iron')
        .attackDamageBaseline(7) // Baseline 7 + Tier Iron 2 + Base Player 1 = 10 Damage chuẩn
        .speedBaseline(-2.4)
        .maxDamage(999999)
        .unstackable()
        .tooltip('§cChỉ dành cho binh lính (Không thể dùng bởi người chơi)')

    // 3. Kiếm Hợp Kim BRN Binh Lính - Sát Thương = 12, Độ Bền = 999999
    event.create('netherite_sword_diamond_tool_trim', 'sword')
        .displayName('Kiếm Hợp Kim BRN Binh Lính')
        .texture('kubejs:item/netherite_sword_diamond_tool_trim')
        .tier('iron')
        .attackDamageBaseline(9) // Baseline 9 + Tier Iron 2 + Base Player 1 = 12 Damage chuẩn
        .speedBaseline(-2.4)
        .maxDamage(999999)
        .unstackable()
        .tooltip('§cChỉ dành cho binh lính (Không thể dùng bởi người chơi)')

    // 4. Kiếm Tinh Tú Binh Lính - Sát Thương = 15, Độ Bền = 999999
    event.create('netherite_sword_blue_fw_stars', 'sword')
        .displayName('Kiếm Tinh Tú Binh Lính')
        .texture('kubejs:item/netherite_sword_blue_fw_stars')
        .tier('iron')
        .attackDamageBaseline(12) // Baseline 12 + Tier Iron 2 + Base Player 1 = 15 Damage chuẩn
        .speedBaseline(-2.4)
        .maxDamage(999999)
        .unstackable()
        .tooltip('§cChỉ dành cho binh lính (Không thể dùng bởi người chơi)')

    // 5. Trảm Ma Kiếm Scarlxrd - Sát Thương = 22, Độ Bền = 999999
    event.create('scarlxrds_sword', 'sword')
        .displayName('Trảm Ma Kiếm Scarlxrd')
        .texture('kubejs:item/scarlxrds_sword')
        .tier('iron')
        .attackDamageBaseline(19) // Baseline 19 + Tier Iron 2 + Base Player 1 = 22 Damage chuẩn
        .speedBaseline(-2.4)
        .maxDamage(999999)
        .unstackable()
        .tooltip('§cChỉ dành cho binh lính (Không thể dùng bởi người chơi)')
})
