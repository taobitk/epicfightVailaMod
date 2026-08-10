ServerEvents.recipes(event => {
    // 1. Xóa công thức cũ của Mortis Bow
    event.remove({ output: 'p1nero_bow:mortis' })

    // 2. Công thức Bàn Chế Tạo cho Mortis Bow gắn Stage Xạ Thủ (stage_archer)
    event.shaped('p1nero_bow:mortis', [
        ' N ',
        'NBN',
        ' N '
    ], {
        N: 'minecraft:netherite_ingot',
        B: 'minecraft:bow'
    }).stage('stage_archer')
})
