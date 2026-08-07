// Tên file: kubejs/server_scripts/recipes/bountiful_decree.js
// Mục đích: Thêm công thức cho Bountiful Decree (Nếu mod Bountiful được cài đặt trong game).

ServerEvents.recipes(event => {
    // Chỉ đăng ký công thức nếu mod 'bountiful' đang có trong modpack
    if (Platform.isLoaded('bountiful')) {
        // Xóa công thức cũ của Decree
        event.remove({ id: 'bountiful:crafting/decree' });
        event.remove({ output: 'bountiful:decree' });

        // Thêm công thức mới: 4 que (minecraft:stick) xung quanh 1 phôi sắt (minecraft:iron_ingot) ở giữa
        event.shaped('bountiful:decree', [
            ' S ',
            'SIS',
            ' S '
        ], {
            S: 'minecraft:stick',
            I: 'minecraft:iron_ingot'
        });
    }
});
