ServerEvents.recipes(event => {
    // Xóa công thức của 3 món vũ khí cụ thể theo yêu cầu
    const itemsToRemove = [
        'cdmoveset:phantom_katana', // Phantom Katana
        'cdmoveset:great_tachi',    // Crimson Fang
        'cdmoveset:yamato'          // Yamato
    ];

    itemsToRemove.forEach(item => {
        event.remove({ output: item });
    });

    console.log(`KubeJS: Đã xóa công thức cho các vũ khí: ${itemsToRemove.join(', ')}`);
});
