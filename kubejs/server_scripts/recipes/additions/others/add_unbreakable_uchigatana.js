// Tên file: kubejs/server_scripts/recipes/additions/others/add_unbreakable_uchigatana.js
// Mục đích: Thêm công thức ghép 4 thanh Uchigatana thành 1 thanh Bất Hoại, và chặn không cho đưa Uchigatana Bất Hoại vào máy cắt đá.

ServerEvents.recipes(event => {
    // 1. Công thức chế tạo ghép 4 thanh Uchigatana thành 1 thanh Bất Hoại
    event.shapeless(
        Item.of('epicfight:uchigatana', '{Unbreakable:1b}'),
        [
            'epicfight:uchigatana',
            'epicfight:uchigatana',
            'epicfight:uchigatana',
            'epicfight:uchigatana'
        ]
    ).id('kubejs:crafting/unbreakable_uchigatana');
});

// 2. Chặn đưa Uchigatana Bất Hoại vào máy cắt đá (tránh hỏng máy cắt)
PlayerEvents.tick(event => {
    let player = event.player;

    // Chỉ xử lý ở phía Server để đồng bộ và an toàn
    if (!player || player.level.clientSide) return;

    let container = player.containerMenu;
    if (container && container.getClass().getSimpleName() === 'StonecutterMenu') {
        let inputSlot = container.getSlot(0); // Slot 0 là ô đặt vật phẩm đầu vào của máy cắt đá

        if (inputSlot && inputSlot.hasItem()) {
            let item = inputSlot.getItem();

            // Kiểm tra nếu là Uchigatana và có tag Unbreakable:1b
            if (item.id === 'epicfight:uchigatana' && item.nbt && item.nbt.getBoolean('Unbreakable')) {
                // Trả lại kiếm vào túi đồ người chơi (hoặc rơi ra đất nếu đầy)
                player.give(item);

                // Dọn sạch ô đầu vào của máy cắt đá
                inputSlot.set('minecraft:air');

                // Thông báo cảnh báo cho người chơi
                player.tell(Text.of("❌ Không thể cho Uchigatana Bất Hoại vào máy cắt đá để tái chế!").red());
            }
        }
    }
});
