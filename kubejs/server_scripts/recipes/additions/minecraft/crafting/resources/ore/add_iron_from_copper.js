// FileName: kubejs/server_scripts/craft/iron_ingot_from_copper.js
// Mục đích: Thêm công thức chế tạo thỏi sắt từ 6 thỏi đồng và 1 than.

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:iron_ingot', 1), // Kết quả: 1 thỏi sắt
    [
      'CCC',
      ' B ',
      'CCC'
    ],
    {
      C: 'minecraft:copper_ingot', // C là Thỏi đồng
      B: 'minecraft:charcoal'      // B là Than
    }
  ).id('kubejs:craft/iron_ingot_from_copper');
});
