// Đặt tại: kubejs/startup_scripts/entity_modifications/modify_companions_attributes.js
// Mục đích: Chỉnh sửa Máu tối đa gốc của các loại Companion từ mod Human Companions.

EntityJSEvents.attributes(event => {
    // 1. Knight: Máu gốc = 50.0
    event.modify('humancompanions:knight', builder => {
        builder.add('minecraft:generic.max_health', 50.0);
    });

    // 2. Axeguard: Máu gốc = 30.0
    event.modify('humancompanions:axeguard', builder => {
        builder.add('minecraft:generic.max_health', 30.0);
    });

    // 3. Archer: Máu gốc = 20.0
    event.modify('humancompanions:archer', builder => {
        builder.add('minecraft:generic.max_health', 20.0);
    });

    // 4. Arbalist: Máu gốc = 20.0
    event.modify('humancompanions:arbalist', builder => {
        builder.add('minecraft:generic.max_health', 20.0);
    });
});
