ServerEvents.recipes(event => {
    event.remove({ output: 'wom:herrscher' });

    event.shaped('wom:herrscher', [
        ' A ',
        ' N ',
        ' S '
    ], {
        A: 'minecraft:enchanted_golden_apple',
        N: 'kubejs:nidg_ingot',
        S: 'minecraft:diamond_sword'
    }).stage('stage_tier2_vanguard');
});
