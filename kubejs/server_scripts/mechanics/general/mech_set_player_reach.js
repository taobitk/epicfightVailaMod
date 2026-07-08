// PlayerEvents.loggedIn(event => {
//     let p = event.player.username;
//     // Hàm rút gọn để chạy lệnh cho nhanh
//     let run = (cmd) => event.server.runCommandSilent(cmd);

//     // 1. SET TẦM ĐÁNH (0.33)
//     // Mức này rất ngắn, gần như phải "ôm" lấy quái mới đánh trúng.
//     run(`scale set pehkui:entity_reach 0.30 ${p}`);
//     run(`scale persist set pehkui:entity_reach true ${p}`);

//     // 2. SET KNOCKBACK (0.9)
//     // Mặc định là 1.0. Chỉnh 0.9 thì lực đẩy sẽ yếu đi 10%.
//     run(`scale set pehkui:knockback 0.9 ${p}`);
//     run(`scale persist set pehkui:knockback true ${p}`);

//     console.log(`Đã cập nhật chỉ số cho ${p}: Reach 0.35, Knockback 0.9`);
// });