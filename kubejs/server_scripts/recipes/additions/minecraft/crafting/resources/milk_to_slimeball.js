// Tên file: kubejs/server_scripts/recipes/additions/minecraft/crafting/resources/milk_to_slimeball.js
// Mục đích: Thêm công thức chế tạo Slimeball từ Milk Bucket trong Bàn Chế Tạo (trả lại xô rỗng)

ServerEvents.recipes(event => {
    // Chế tạo không định hình: 1 Xô sữa -> 1 Slimeball (Minecraft tự động trả lại xô rỗng)
    event.shapeless('minecraft:slime_ball', ['minecraft:milk_bucket']);
});
