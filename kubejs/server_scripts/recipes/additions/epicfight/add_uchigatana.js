// FileName: kubejs/server_scripts/recipes/additions/epicfight/add_uchigatana.js
// Mục đích: Thêm công thức chế tạo cho Uchigatana của mod Epic Fight gắn Stage Sát Thủ (stage_assassin)

ServerEvents.recipes(event => {
  if (!Platform.isLoaded('epicfight')) return;

  event.remove({ output: 'epicfight:uchigatana' });

  event.shaped('epicfight:uchigatana', [
    'GDG',
    'GDG',
    'GLG'
  ], {
    G: 'minecraft:gold_ingot',
    D: 'minecraft:diamond',
    L: 'minecraft:lava_bucket'
  }).id('kubejs:craft_uchigatana').stage('stage_assassin');
});
