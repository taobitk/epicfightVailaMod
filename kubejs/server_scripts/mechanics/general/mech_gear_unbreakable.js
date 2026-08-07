// Tên file: kubejs/server_scripts/mechanics/general/mech_gear_unbreakable.js
// Mục đích: Tự động phát hiện và xóa tag Unbreakable (Bất hoại) khỏi NBT của trang bị nếu có.

PlayerEvents.inventoryChanged(event => {
    let item = event.item;
    if (item && item.nbt && item.nbt.contains('Unbreakable')) {
        let nbt = item.nbt;
        // Xóa tag Unbreakable
        nbt.remove('Unbreakable');
        
        // Nếu có Lore "Bất hoại" thì xóa Lore đi
        if (nbt.display && nbt.display.Lore) {
            nbt.display.remove('Lore');
        }
        
        item.nbt = nbt;
    }
});
