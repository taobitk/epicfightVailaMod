StartupEvents.registry('item', event => {
    // Vật phẩm thay thế cho Nether Star trong cơ chế đào Nether Gold/Ancient Debris
    event.create('pyro_seal')
        .displayName('Pyro Seal')
        .tooltip(Text.of('A seal forged in the depths of the Nether. Allows mining of ancient materials.').red())
        .rarity('rare')
        .maxStackSize(1)
        .glow(true);
});
