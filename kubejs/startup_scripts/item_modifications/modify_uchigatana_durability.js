// Startup Script: Chỉnh độ bền của Uchigatana (epicfight:uchigatana) thành 9999

ItemEvents.modification(event => {
    event.modify('epicfight:uchigatana', item => {
        item.setMaxDamage(9999);
    });
});
