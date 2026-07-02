// server_scripts/recipes/removals/remove_trims.js

ServerEvents.recipes(event => {
    console.log('[ID REMOVER] Bắt đầu xóa công thức các mẫu rèn theo ID...');

    // Danh sách ID của tất cả các mẫu rèn trang trí giáp
    const trimIds = [
        'minecraft:spire_armor_trim_smithing_template',
        'minecraft:snout_armor_trim_smithing_template',
        'minecraft:rib_armor_trim_smithing_template',
        'minecraft:vex_armor_trim_smithing_template',
        'minecraft:tide_armor_trim_smithing_template',
        'minecraft:ward_armor_trim_smithing_template',
        'minecraft:silence_armor_trim_smithing_template',
        'minecraft:wild_armor_trim_smithing_template',
        'minecraft:coast_armor_trim_smithing_template',
        'minecraft:dune_armor_trim_smithing_template',
        'minecraft:eye_armor_trim_smithing_template',
        'minecraft:sentry_armor_trim_smithing_template',
        'minecraft:wayfinder_armor_trim_smithing_template',
        'minecraft:shaper_armor_trim_smithing_template',
        'minecraft:host_armor_trim_smithing_template',
        'minecraft:raiser_armor_trim_smithing_template',
        'minecraft:flow_armor_trim_smithing_template',
        'minecraft:bolt_armor_trim_smithing_template'
    ];

    // Lặp qua danh sách và xóa từng công thức
    trimIds.forEach(id => {
        event.remove({ output: id });
    });

    // Vẫn giữ lại dòng này để đảm bảo vô hiệu hóa hoàn toàn chức năng trim
    event.remove({ type: 'minecraft:smithing_trim' });

    console.log('[ID REMOVER] Đã xóa xong công thức.');
});