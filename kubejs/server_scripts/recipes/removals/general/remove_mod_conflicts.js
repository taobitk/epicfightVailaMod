// // This script removes broken recipes from other mods.

// ServerEvents.recipes(event => {
//   // Log to console for easier debugging.
//   console.log('KJS: Removing broken recipes from mods...');

//   // Remove broken smithing recipe from soul_like_monsters
//   // Reason: Missing template ingredient
//   event.remove({ id: 'soul_like_monsters:upgrade' });

//   // Remove broken stonecutting recipe from cataclysm
//   // Reason: Empty result item
//   event.remove({ id: 'cataclysm:stonecutting/azure_seastone_brick_stair_from_stonecutting' });

//   console.log('KJS: Finished removing broken recipes.');
// });
