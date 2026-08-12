ServerEvents.recipes(event => {
    event.remove({ output: 'wom:tormented_mind' });

    event.shaped('wom:tormented_mind', [
        ' A ',
        ' N ',
        ' G '
    ], {
        A: 'minecraft:enchanted_golden_apple',
        N: 'kubejs:nidg_ingot',
        G: 'wom:netherite_greataxe'
    }).stage('stage_tier2_indestructible');
});
