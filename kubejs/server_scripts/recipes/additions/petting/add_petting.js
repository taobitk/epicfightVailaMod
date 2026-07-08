// Tên file: kubejs/server_scripts/recipes/additions/petting/add_petting.js
// Mục đích: Thêm công thức chế tạo mới dạng bàn chế tạo (shaped) cho Golden Wheat và Pet Bed.

ServerEvents.recipes(event => {
    event.shaped('petting:golden_wheat', [
        'NGN',
        'GWG',
        'NGN'
    ], {
        N: 'minecraft:netherite_block',
        G: 'kubejs:nidg',
        W: 'minecraft:wheat'
    });

    event.shaped('petting:pet_bed', [
        'PPP',
        'PBP',
        'PPP'
    ], {
        P: '#minecraft:planks',
        B: '#minecraft:beds'
    });
});
