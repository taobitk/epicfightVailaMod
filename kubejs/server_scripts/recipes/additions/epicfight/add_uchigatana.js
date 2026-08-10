// FileName: kubejs/server_scripts/recipes/additions/epicfight/add_uchigatana.js
// Mục đích: Thêm công thức chế tạo cho Uchigatana của mod Epic Fight gắn Stage Sát Thủ (stage_assassin)

ServerEvents.recipes(event => {
  if (!Platform.isLoaded('epicfight')) return;
  
  event.shaped(
    Item.of('epicfight:uchigatana'),
    [
      'GDG',
      'GDG',
      'GLG'
    ],
    {
      G: 'minecraft:gold_ingot',
      D: 'minecraft:diamond',
      L: 'minecraft:lava_bucket'
    }
  ).stage('stage_assassin');
});
