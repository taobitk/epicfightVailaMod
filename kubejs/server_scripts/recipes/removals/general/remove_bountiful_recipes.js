ServerEvents.recipes(event => {
    // Xóa công thức chế tạo Bounty Board để người chơi không thể tự làm
    event.remove({ id: 'bountiful:crafting/bountyboard' });
});
