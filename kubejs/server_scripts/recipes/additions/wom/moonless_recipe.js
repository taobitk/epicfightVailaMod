ServerEvents.recipes(event => {
    event.remove({ output: 'wom:moonless' });

    event.shaped('wom:moonless', [
        ' A ',
        ' N ',
        ' D '
    ], {
        A: 'minecraft:enchanted_golden_apple',
        N: 'kubejs:nidg_ingot',
        D: 'epicfight:diamond_dagger'
    }).stage('stage_tier2_wind_assassin');
});
