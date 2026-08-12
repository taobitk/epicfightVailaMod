ServerEvents.recipes(event => {
    event.remove({ output: 'efn:crimson_moon' });

    event.shaped('efn:crimson_moon', [
        ' A ',
        ' N ',
        ' H '
    ], {
        A: 'minecraft:enchanted_golden_apple',
        N: 'kubejs:nidg_ingot',
        H: 'minecraft:netherite_hoe'
    }).stage('stage_tier2_destruction');
});
