// KubeJS Recipe: Explorer's Compass (1 Compass + 4 Diamonds)
ServerEvents.recipes(event => {
    // Shaped Recipe: 1 Compass surrounded by 4 Diamonds
    event.shaped('explorerscompass:explorerscompass', [
        ' D ',
        'DCD',
        ' D '
    ], {
        D: 'minecraft:diamond',
        C: 'minecraft:compass'
    }).id('kubejs:explorers_compass_shaped')
})
