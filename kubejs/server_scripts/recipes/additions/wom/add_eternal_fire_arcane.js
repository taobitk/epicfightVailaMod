// Server script - Crafting recipe for Eternal Fire Arcane (wom:eternal_fire_arcane)

ServerEvents.recipes(event => {
    // Công thức: 5 Kim Cương + 1 NIDG Ingot ở giữa
    event.shaped(
        'wom:eternal_fire_arcane',
        [
            'D D',
            ' N ',
            'DDD'
        ], {
            D: 'minecraft:diamond',
            N: 'kubejs:nidg_ingot'
        }
    ).id('kubejs:craft_eternal_fire_arcane');
});
