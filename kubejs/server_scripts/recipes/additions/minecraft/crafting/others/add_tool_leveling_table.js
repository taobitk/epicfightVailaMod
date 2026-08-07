// Tên file: kubejs/server_scripts/recipes/additions/minecraft/crafting/others/add_tool_leveling_table.js

ServerEvents.recipes(event => {
    // Thêm công thức chế tạo Bàn Tool Leveling Table (toolleveling:tool_leveling_table)
    event.shaped(
        'toolleveling:tool_leveling_table',
        [
            'ODO',
            ' O ',
            'OOO'
        ],
        {
            O: 'minecraft:obsidian', // Obsidian (Hắc diện thạch)
            D: 'minecraft:diamond'   // Diamond (Kim cương)
        }
    );
});
