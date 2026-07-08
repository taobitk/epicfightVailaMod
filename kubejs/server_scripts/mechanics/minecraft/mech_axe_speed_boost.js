// Tên file: kubejs/server_scripts/mechanics/mech_axe_speed_boost.js
// Mục đích: Tự động buff Tốc độ đánh cho người chơi để tất cả các loại Rìu Vanilla đạt mốc 1.5 khi cầm trên tay.

PlayerEvents.tick(event => {
    let player = event.player;
    let mainHand = player.mainHandItem;

    let isVanillaAxe = mainHand.id.startsWith('minecraft:') && mainHand.id.endsWith('_axe');
    let pData = player.persistentData;

    if (isVanillaAxe) {
        let speedBoost = 0.50; // Mặc định cho Vàng, Kim Cương, Netherite (Gốc 1.0 -> Cần +0.50 để đạt 1.5)

        if (mainHand.id === 'minecraft:wooden_axe' || mainHand.id === 'minecraft:stone_axe') {
            speedBoost = 0.70; // Rìu gỗ/đá (Gốc 0.8 -> Cần +0.70 để đạt 1.5)
        } else if (mainHand.id === 'minecraft:iron_axe') {
            speedBoost = 0.60; // Rìu sắt (Gốc 0.9 -> Cần +0.60 để đạt 1.5)
        }

        let currentAxeType = mainHand.id;

        // Chỉ cập nhật khi đổi loại rìu hoặc vừa cầm rìu lên tay
        if (pData.getString('boosted_axe_type') !== currentAxeType) {
            player.modifyAttribute('minecraft:generic.attack_speed', 'axe_speed_boost_modifier', speedBoost, 'addition');
            pData.putString('boosted_axe_type', currentAxeType);
        }
    } else {
        // Chỉ xóa thuộc tính khi người chơi cất rìu đi
        if (pData.contains('boosted_axe_type')) {
            player.removeAttribute('minecraft:generic.attack_speed', 'axe_speed_boost_modifier');
            pData.remove('boosted_axe_type');
        }
    }
});
