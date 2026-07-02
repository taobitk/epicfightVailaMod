
StartupEvents.registry('item', event => {

    console.log('KJS: Registering new custom items...');

    event.create('magic_orb')
        .displayName('Magic Orb')
        .maxStackSize(60)
        .rarity('epic')
        .tooltip('nothing.');
});