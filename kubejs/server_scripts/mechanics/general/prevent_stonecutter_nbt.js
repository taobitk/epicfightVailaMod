// Server script - Chặn vật phẩm có NBT no_stonecutter:1b (hoặc cannot_equip:1b) không cho đưa vào Máy Cắt Đá (Stonecutter)

ItemEvents.firstRightClicked(event => {
    // Dự phòng kiểm tra nếu tương tác
});

// Chặn trong sự kiện chế tạo / chọn công thức máy cắt đá
ServerEvents.recipes(event => {
    // Các công thức mặc định
});

// Bắt sự kiện người chơi bỏ item có NBT no_stonecutter: true / cannot_equip: true vào máy cắt đá
PlayerEvents.inventoryChanged(event => {
    let player = event.player;
    if (!player || player.isCreative()) return;

    let container = player.containerMenu;
    if (container && container.class.name.contains('Stonecutter')) {
        let inputSlot = container.getSlot(0); // Slot 0 là ô đầu vào máy cắt đá
        if (inputSlot && inputSlot.hasItem()) {
            let stack = inputSlot.getItem();
            if (stack.nbt && (stack.nbt.getBoolean('no_stonecutter') || stack.nbt.getBoolean('cannot_equip') || stack.nbt.getBoolean('CustomSoldierArmor'))) {
                // Trả vật phẩm về lại túi đồ người chơi và làm rỗng ô đầu vào máy cắt đá
                player.give(stack.copy());
                inputSlot.set(Item.EMPTY);
                player.setStatusMessage(Text.red('Vật phẩm này bị cấm đưa vào Máy Cắt Đá!'));
            }
        }
    }
});
