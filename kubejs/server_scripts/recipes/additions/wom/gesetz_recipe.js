ServerEvents.recipes(event => {
    event.remove({ output: 'wom:gesetz' });

    event.shaped('wom:gesetz', [
        ' D ',
        ' A ',
        ' S '
    ], {
        D: 'minecraft:diamond',
        A: 'minecraft:golden_apple',
        S: 'minecraft:shield'
    }).stage('stage_tier2_vanguard');
});
