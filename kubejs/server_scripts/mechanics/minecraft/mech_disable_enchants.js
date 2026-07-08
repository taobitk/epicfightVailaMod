// Tên file: kubejs/server_scripts/disable_enchanting_table.js
// Mục đích: Vô hiệu hóa chức năng của Bàn Phù Phép.

BlockEvents.rightClicked(event => {
    if (event.block.id === 'minecraft:enchanting_table') {
        event.player.tell(Text.of('Bàn Phù Phép dường như đã mất đi sức mạnh ma thuật của nó...').gray().italic());
        event.cancel();
    }
});