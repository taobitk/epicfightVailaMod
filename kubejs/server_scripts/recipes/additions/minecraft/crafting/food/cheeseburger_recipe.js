/*
// Server script - Add recipe for Cheeseburger

ServerEvents.recipes(event => {
    // 2 Bánh mì (trên & dưới), 1 Cà rốt (trái), 1 Khoai tây (phải) và 1 Thịt bất kỳ (giữa)
    // Đầu ra: 10 Cheeseburger!
    event.shaped('10x kubejs:cheeseburger', [
        ' B ',
        'CMR',
        ' B '
    ], {
        B: 'minecraft:bread',
        C: 'minecraft:carrot',
        R: 'minecraft:potato',
        M: [
            'minecraft:beef',
            'minecraft:cooked_beef',
            'minecraft:porkchop',
            'minecraft:cooked_porkchop',
            'minecraft:chicken',
            'minecraft:cooked_chicken',
            'minecraft:mutton',
            'minecraft:cooked_mutton',
            'minecraft:rabbit',
            'minecraft:cooked_rabbit',
            'minecraft:cod',
            'minecraft:cooked_cod',
            'minecraft:salmon',
            'minecraft:cooked_salmon',
            'minecraft:tropical_fish',
            'minecraft:pufferfish',
            'minecraft:rotten_flesh'
        ]
    }).id('kubejs:cheeseburger_crafting')
})

*/