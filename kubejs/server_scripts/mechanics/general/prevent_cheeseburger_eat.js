// Server script - Prevent players from eating or right clicking with Cheeseburger

ItemEvents.rightClicked('kubejs:cheeseburger', event => {
    // Hủy toàn bộ sự kiện click chuột phải khi cầm Cheeseburger
    event.cancel()
})
