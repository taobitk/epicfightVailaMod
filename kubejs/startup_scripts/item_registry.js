// Tên file: kubejs/startup_scripts/item_registry.js
// Đăng ký Quyền Trượng Ma Vương (kubejs:summoner_staff)

StartupEvents.registry('item', event => {
    event.create('summoner_staff')
         .displayName('Quyền Trượng Ma Vương')
         .maxStackSize(1)
         .glow(true)
         .texture('kubejs:item/summoner_staff');
});
