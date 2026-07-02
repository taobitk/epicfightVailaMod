// // Script by Gemini - Ngăn NPC trang bị vũ khí lỗi (V5 - Dùng Tick Event)
// // File: kubejs/server_scripts/antitheus.js
//
// ServerEvents.tick(event => {
//     // Chỉ chạy mỗi 20 tick (1 giây) để tránh ảnh hưởng hiệu năng
//     if (event.server.ticks % 20 !== 0) {
//         return
//     }
//
//     // Lấy tất cả người chơi trên server
//     const players = event.server.players
//
//     // Duyệt qua tất cả các thế giới (overworld, nether, end...)
//     event.server.levels.forEach(level => {
//         // Lấy tất cả các thực thể sống trong thế giới đó
//         let livingEntities = level.getEntities().filter(e => e.isLiving())
//
//         // Lọc ra những thực thể không phải người chơi
//         let npcs = livingEntities.filter(e => !e.isPlayer())
//
//         // Với mỗi NPC...
//         npcs.forEach(npc => {
//             // Kiểm tra vũ khí trên tay chính của nó
//             if (npc.mainHandItem.id === 'wom:antitheus') {
//                 // Nếu là vũ khí lỗi, thay thế nó bằng không khí (làm nó biến mất)
//                 npc.setMainHandItem('minecraft:air')
//
//                 // Gửi tin nhắn vào console
//                 console.log(`[Anti-Crash] Đã xóa vũ khí lỗi wom:antitheus khỏi tay của ${npc.displayName.string}.`)
//             }
//         })
//     })
// })