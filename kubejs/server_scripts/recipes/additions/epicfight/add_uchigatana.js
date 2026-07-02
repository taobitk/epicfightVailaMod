// FileName: kubejs/server_scripts/craft/uchigatana.js
// Mục đích: Thêm công thức chế tạo cho Uchigatana của mod Epic Fight.

ServerEvents.recipes(event => {
  if (!Platform.isLoaded('epicfight')) return;
  // Công thức có hình dạng (shaped)
  event.shaped(
    Item.of('epicfight:uchigatana'), // Kết quả
    [
      'GDG', // Hàng 1
      'GDG', // Hàng 2
      'GLG'  // Hàng 3
    ],
    {
      G: 'minecraft:gold_ingot',
      D: 'minecraft:diamond',
      L: 'minecraft:lava_bucket'
    }
  ).id('kubejs:craft/uchigatana');
});
