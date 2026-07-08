// Tên file: kubejs/server_scripts/mechanics/mech_disable_slime.js
// Mục đích: Cho phép bật/tắt tính năng sinh sản của Slime bằng lệnh /toggleslime

// Khởi tạo trạng thái mặc định: chặn spawn Slime (true)
if (typeof global.disableSlimeSpawning === 'undefined') {
    global.disableSlimeSpawning = true;
}

// 1. Chặn Slime spawn nếu trạng thái đang hoạt động
EntityEvents.checkSpawn(event => {
    if (global.disableSlimeSpawning && event.entity.type === 'minecraft:slime') {
        event.cancel();
    }
});

// 2. Đăng ký lệnh /toggleslime cho người quản trị (OP) để bật/tắt
ServerEvents.commandRegistry(event => {
    const { commands: Commands } = event;

    event.register(
        Commands.literal('toggleslime')
            .requires(src => src.hasPermission(2)) // Chỉ những ai có quyền OP mới dùng được
            .executes(ctx => {
                global.disableSlimeSpawning = !global.disableSlimeSpawning;
                let status = global.disableSlimeSpawning ? "TẮT (Chặn Spawn)" : "BẬT (Cho phép Spawn)";
                
                // Gửi thông báo cho người dùng thực thi lệnh
                ctx.source.sendSuccess(Text.of(`Trạng thái Slime: ${status}`), true);
                return 1;
            })
    );
});
