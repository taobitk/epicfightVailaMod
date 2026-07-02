ServerEvents.recipes(event => {
    // === Cấu hình nâng cấp Giáp WOM từ Đồ Kim Cương WOM (Yêu cầu Khối Netherite) ===

    // Mũ (Mask) từ Vương miện (Crown)
    event.smithing(
        'wom:netherite_mask',
        'minecraft:netherite_upgrade_smithing_template',
        'wom:diamond_crown',
        'minecraft:netherite_block'
    )

    // Thân (Manicle) từ Vòng tay (Armbracelet)
    event.smithing(
        'wom:netherite_manicle',
        'minecraft:netherite_upgrade_smithing_template',
        'wom:diamond_armbracelet',
        'minecraft:netherite_block'
    )

    // Quần (Chains) từ Leg Bottom Seal
    event.smithing(
        'wom:netherite_chains',
        'minecraft:netherite_upgrade_smithing_template',
        'wom:diamond_legbottomseal',
        'minecraft:netherite_block'
    )

    // Giày (Belt) từ Leg Top Seal
    event.smithing(
        'wom:netherite_belt',
        'minecraft:netherite_upgrade_smithing_template',
        'wom:diamond_legtopseal',
        'minecraft:netherite_block'
    )

    // Mũ Netherite -> Mặt nạ WOM
    event.smithing(
        'wom:netherite_mask',
        'minecraft:netherite_upgrade_smithing_template',
        'minecraft:netherite_helmet',
        'minecraft:ghast_tear'
    )

    // Áo Netherite -> Vòng tay WOM (Manicle)
    event.smithing(
        'wom:netherite_manicle',
        'minecraft:netherite_upgrade_smithing_template',
        'minecraft:netherite_chestplate',
        'minecraft:ghast_tear'
    )

    // Quần Netherite -> Xích WOM (Chains)
    event.smithing(
        'wom:netherite_chains',
        'minecraft:netherite_upgrade_smithing_template',
        'minecraft:netherite_leggings',
        'minecraft:ghast_tear'
    )

    // Giày Netherite -> Thắt lưng WOM (Belt)
    event.smithing(
        'wom:netherite_belt',
        'minecraft:netherite_upgrade_smithing_template',
        'minecraft:netherite_boots',
        'minecraft:ghast_tear'
    )
})
