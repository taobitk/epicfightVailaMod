// Startup Script: Tăng thêm Attack Damage cho kiếm Vanilla (additive - không xóa modifier gốc)
// Vanilla base (player base=1 + sword modifier):
//   Wooden=4, Stone=5, Iron=6, Gold=4, Diamond=7, Netherite=8
// Mục tiêu:
//   Wooden=5(+1), Stone=7(+2), Iron=9(+3), Gold=7(+3), Diamond=11(+4), Netherite=12(+4)

ItemEvents.modification(event => {
    // Iron Sword: 6 → 9 (+3)
    event.modify('minecraft:iron_sword', item => {
        item.addAttribute('minecraft:generic.attack_damage',
            'a1b2c3d4-e5f6-7890-abcd-ef1234567803',
            'KubeJS Buff', 3.0, 'ADDITION')
    })

    // Golden Sword: 4 → 7 (+3)
    event.modify('minecraft:golden_sword', item => {
        item.addAttribute('minecraft:generic.attack_damage',
            'a1b2c3d4-e5f6-7890-abcd-ef1234567804',
            'KubeJS Buff', 3.0, 'ADDITION')
    })

    // Diamond Sword: 7 → 11 (+4)
    event.modify('minecraft:diamond_sword', item => {
        item.addAttribute('minecraft:generic.attack_damage',
            'a1b2c3d4-e5f6-7890-abcd-ef1234567806',
            'KubeJS Buff', 4.0, 'ADDITION')
    })

    // Netherite Sword: 8 → 12 (+4)
    event.modify('minecraft:netherite_sword', item => {
        item.addAttribute('minecraft:generic.attack_damage',
            'a1b2c3d4-e5f6-7890-abcd-ef1234567809',
            'KubeJS Buff', 4.0, 'ADDITION')
    })
})
