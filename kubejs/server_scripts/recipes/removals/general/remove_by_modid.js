ServerEvents.recipes(event => {
    // Danh sách các Mod ID cần xóa toàn bộ công thức
    const modsToRemove = [
        'explorerscompass',
        'tacz',
        'efn',
        'potionring',
        'cropsore'
    ];

    modsToRemove.forEach(modId => {
        // Xóa tất cả các công thức thuộc về mod này
        event.remove({ mod: modId });
    });

    console.log(`KubeJS: Đã hoàn tất xóa công thức cho các mod: ${modsToRemove.join(', ')}`);
});
