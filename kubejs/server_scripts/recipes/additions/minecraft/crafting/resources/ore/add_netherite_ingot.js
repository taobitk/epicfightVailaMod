ServerEvents.recipes(event => {
    event.shaped(
        'minecraft:netherite_ingot', 
        [
            'DGD', 
            'GDG', 
            'DGD'  
        ],
        {
            D: 'minecraft:diamond',
            G: 'minecraft:gold_ingot'
        }
    ).id('kubejs:crafting/netherite_ingot_from_diamond_and_gold');
});
