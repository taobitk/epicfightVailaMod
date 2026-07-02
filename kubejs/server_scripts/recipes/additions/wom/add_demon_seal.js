
ServerEvents.recipes(event => {
    if (!Platform.isLoaded('wom')) return;
    // --- BƯỚC 1: XÓA CÔNG THỨC GỐC ---
    // Vẫn giữ lại bước này để đảm bảo công thức cũ không còn tồn tại
    // event.remove({ id: 'uchicraftana:demonseal' });

    // --- BƯỚC 2: TẠO CÔNG THỨC MỚI KHÓ HƠN ---
    event.shaped(
        // Vật phẩm đầu ra
        'wom:demon_seal',
        // Khuôn công thức 3x3 mới
        [
            'OGO', // G: Gold, O: Obsidian
            'DND', // N: Netherite
            'OGO'
        ],
        // Định nghĩa các nguyên liệu
        {
            O: 'minecraft:obsidian',
            G: 'minecraft:gold_block',
            N: 'minecraft:nether_star',
            D: 'minecraft:diamond'
        }
    );
});