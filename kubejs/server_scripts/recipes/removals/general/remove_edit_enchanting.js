ServerEvents.recipes(event => {
    console.log('KJS: Removing various custom recipes...');

    const itemsToRemove = [
        'editenchanting:enchantment_edit_table',
        'toolleveling:tool_leveling_table'
    ];
    itemsToRemove.forEach(itemId => {
        event.remove({ output: itemId });
    });
});