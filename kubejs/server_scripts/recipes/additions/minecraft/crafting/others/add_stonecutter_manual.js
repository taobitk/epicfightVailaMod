// FileName: kubejs/server_scripts/craft/stonecutter_recipe.js
// Mục đích: Thay đổi công thức chế tạo của Máy Cắt Đá (Stonecutter).

ServerEvents.recipes(event => {
  // 1. Xóa công thức mặc định của Stonecutter
  event.remove({ output: 'minecraft:stonecutter' });

  // 2. Thêm công thức mới có hình dạng (shaped)
  // Yêu cầu: 1 Thỏi Đồng ở trên và 3 Đá Cuội ở dưới
  event.shaped(
    Item.of('minecraft:stonecutter'), // Kết quả
    [
      ' I ', // Hàng 1: Iron Ingot
      'SSS'  // Hàng 2: Cobblestone
    ],
    {
      I: 'minecraft:iron_ingot',
      S: 'minecraft:cobblestone'
    }
  ).id('kubejs:craft/stonecutter_from_copper');
});
