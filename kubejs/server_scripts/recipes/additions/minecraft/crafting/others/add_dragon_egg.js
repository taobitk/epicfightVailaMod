// Tên file: kubejs/server_scripts/craft/dragon_egg_crafting.js
// Công thức chế tạo trứng rồng

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:dragon_egg', 2), // Kết quả: 2 trứng rồng
    [
      'DED',
      'DSD',
      'DDD'
    ],
    {
      D: 'minecraft:diamond_block',
      E: 'minecraft:dragon_egg',
      S: 'minecraft:nether_star'
    }
  ).id('kubejs:dragon_egg_duplication')
})
