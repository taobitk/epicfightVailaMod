// Đặt tại: kubejs/startup_scripts/entity_modifications/modify_companions_attributes.js
// Mục đích: Chỉnh sửa thuộc tính của các Companion từ mod Human Companions (Máu tối đa = 50).

EntityJSEvents.attributes(event => {
    const COMPANIONS = [
        'humancompanions:knight',
        'humancompanions:archer',
        'humancompanions:axeguard',
        'humancompanions:arbalist'
    ];

    COMPANIONS.forEach(id => {
        event.modify(id, builder => {
            builder.add('minecraft:generic.max_health', 50.0);
        });
    });
});
