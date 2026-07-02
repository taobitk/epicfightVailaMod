// Tên file: kubejs/server_scripts/recipes/removals/ironchest/remove_ironchests.js
// Mục đích: Xóa công thức chế tạo mặc định của các loại rương mod Iron Chests.

ServerEvents.recipes(event => {
    event.remove({ id: 'ironchest:chests/vanilla_iron_chest' });
    event.remove({ id: 'ironchest:chests/iron_gold_chest' });
    event.remove({ id: 'ironchest:chests/gold_diamond_chest' });
});
