// Startup script - Event Anvil: Đổi 1 Giáp gốc + 1 Thỏi Sắt thành 3 Giáp Binh Lính (không thể mặc + Unbreakable)

ForgeEvents.onEvent('net.minecraftforge.event.AnvilUpdateEvent', event => {
    let left = event.left;
    let right = event.right;

    if (!left || !right) return;

    // Phân loại các bộ giáp (Đã loại bỏ Giáp Da theo yêu cầu)
    const armorTiers = [
        { type: 'chainmail', name: 'Xích' },
        { type: 'iron', name: 'Sắt' },
        { type: 'golden', name: 'Vàng' },
        { type: 'diamond', name: 'Kim Cương' },
        { type: 'netherite', name: 'Netherite' }
    ];

    const pieces = [
        { id: 'helmet', name: 'Mũ' },
        { id: 'chestplate', name: 'Áo' },
        { id: 'leggings', name: 'Quần' },
        { id: 'boots', name: 'Giày' }
    ];

    // Nguyên liệu bên phải phải là Thỏi Sắt (iron_ingot)
    if (right.id !== 'minecraft:iron_ingot') return;

    // Nếu món đồ bên trái ĐÃ CÓ NBT cannot_equip: true -> CHẶN KHÔNG CHO ÉP ĐE TIẾP
    if (left.nbt && left.nbt.contains('cannot_equip') && left.nbt.get('cannot_equip') == true) {
        return;
    }

    armorTiers.forEach(tier => {
        pieces.forEach(piece => {
            let itemId = `minecraft:${tier.type}_${piece.id}`;
            if (left.id === itemId) {
                let customName = `${piece.name} ${tier.name} Binh Lính`;

                // Đổi thành 3 món giáp Binh Lính có NBT cannot_equip: true và Unbreakable: 1b
                let output = Item.of(itemId, 3, `{cannot_equip:true,Unbreakable:1b,display:{Name:'{"text":"${customName}","italic":false,"color":"gray"}'}}`);

                event.setOutput(output);
                event.setCost(0); // Không tốn cấp kinh nghiệm (0 EXP)
                event.setMaterialCost(1); // Tiêu tốn 1 thỏi sắt
            }
        });
    });
});
