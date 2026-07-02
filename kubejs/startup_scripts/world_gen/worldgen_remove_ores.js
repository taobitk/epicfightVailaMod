// kubejs/startup_scripts/simple_ore_removal.js
// Đây là script gốc, nó sẽ xóa các quặng Overworld nhưng sẽ KHÔNG xóa được Ancient Debris và Nether Gold Ore.

WorldgenEvents.remove(event => {
    console.log('KJS: Loading simple ore removal script...');

    event.removeOres(ores => {
        // Danh sách các block quặng cần xóa
        // Hàm này hoạt động tốt với các quặng Overworld
        ores.blocks = [
            'minecraft:diamond_ore',
            'minecraft:deepslate_diamond_ore',
            'minecraft:gold_ore',
            'minecraft:deepslate_gold_ore',
            'minecraft:iron_ore',
            'minecraft:deepslate_iron_ore',
            'minecraft:copper_ore',
            'minecraft:deepslate_copper_ore',
            'minecraft:emerald_ore',
            'minecraft:deepslate_emerald_ore',
            'minecraft:redstone_ore',
            'minecraft:deepslate_redstone_ore',
            'minecraft:lapis_ore',
            'minecraft:deepslate_lapis_ore'
        ];
    });
});