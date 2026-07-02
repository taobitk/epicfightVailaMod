StartupEvents.registry('item', event => {
    // Vật phẩm thay thế cho Magic Orb trong cơ chế Farming
    event.create('nature_gem')
        .displayName('Nature Gem')
        .tooltip(Text.of('Radiates with the energy of nature. Allows planting crops.').green())
        .rarity('rare')
        .maxStackSize(1)
        .glow(true);
});
