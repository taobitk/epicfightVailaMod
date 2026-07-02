// Tên file: kubejs/server_scripts/recipes/removals/petting/remove_petting.js
// Mục đích: Xóa công thức chế tạo mặc định của Golden Wheat mod Petting.

ServerEvents.recipes(event => {
    event.remove({ output: 'petting:golden_wheat' });
});
