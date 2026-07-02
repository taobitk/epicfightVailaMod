// Tên file: kubejs/client_scripts/jei_anvil_info.js
// Mục đích: Thêm hướng dẫn rèn đe và hiển thị các biến thể Giáp Da và Giáp Sắt trong danh sách tìm kiếm JEI.

JEIEvents.information(event => {
    // ------------------------------------------
    // HƯỚNG DẪN CHO GIÁP DA (LEATHER ARMOR)
    // ------------------------------------------
    event.addItem('minecraft:leather_helmet', [
        Text.of('=== CÔNG THỨC NÂNG CẤP ĐE RÈN ===').blue().bold(),
        Text.of('• Cấp 1: Mũ Da Gốc + 1 Phôi sắt -> Mũ Da Lv1').blue(),
        Text.of('  (Tốn 1 LV XP | Bất hoại | +0.5 Giáp)').black(),
        Text.of('• Cấp 2: Mũ Da Lv1 + 1 Khối sắt -> Mũ Da Lv2').blue(),
        Text.of('  (Tốn 1 LV XP | Bất hoại | +0.5 Giáp | +2 HP)').black(),
        Text.of('• Cấp 3: Mũ Da Lv2 + 1 Khối Vàng -> Mũ Da Lv3').blue(),
        Text.of('  (Tốn 1 LV XP | Bất hoại | +2.5 Giáp | +2 HP)').black()
    ]);

    event.addItem('minecraft:leather_chestplate', [
        Text.of('=== CÔNG THỨC NÂNG CẤP ĐE RÈN ===').blue().bold(),
        Text.of('• Cấp 1: Áo Da Gốc + 1 Phôi sắt -> Áo Da Lv1').blue(),
        Text.of('  (Tốn 1 LV XP | Bất hoại | +1.0 Giáp)').black(),
        Text.of('• Cấp 2: Áo Da Lv1 + 1 Khối sắt -> Áo Da Lv2').blue(),
        Text.of('  (Tốn 1 LV XP | Bất hoại | +1.0 Giáp | +2 HP)').black(),
        Text.of('• Cấp 3: Áo Da Lv2 + 1 Khối Vàng -> Áo Da Lv3').blue(),
        Text.of('  (Tốn 1 LV XP | Bất hoại | +6.0 Giáp | +2 HP)').black()
    ]);

    event.addItem('minecraft:leather_leggings', [
        Text.of('=== CÔNG THỨC NÂNG CẤP ĐE RÈN ===').blue().bold(),
        Text.of('• Cấp 1: Quần Da Gốc + 1 Phôi sắt -> Quần Da Lv1').blue(),
        Text.of('  (Tốn 1 LV XP | Bất hoại | +1.0 Giáp)').black(),
        Text.of('• Cấp 2: Quần Da Lv1 + 1 Khối sắt -> Quần Da Lv2').blue(),
        Text.of('  (Tốn 1 LV XP | Bất hoại | +1.0 Giáp | +2 HP)').black(),
        Text.of('• Cấp 3: Quần Da Lv2 + 1 Khối Vàng -> Quần Da Lv3').blue(),
        Text.of('  (Tốn 1 LV XP | Bất hoại | +5.0 Giáp | +2 HP)').black()
    ]);

    event.addItem('minecraft:leather_boots', [
        Text.of('=== CÔNG THỨC NÂNG CẤP ĐE RÈN ===').blue().bold(),
        Text.of('• Cấp 1: Giày Da Gốc + 1 Phôi sắt -> Giày Da Lv1').blue(),
        Text.of('  (Tốn 1 LV XP | Bất hoại | +0.5 Giáp)').black(),
        Text.of('• Cấp 2: Giày Da Lv1 + 1 Khối sắt -> Giày Da Lv2').blue(),
        Text.of('  (Tốn 1 LV XP | Bất hoại | +0.5 Giáp | +2 HP)').black(),
        Text.of('• Cấp 3: Giày Da Lv2 + 1 Khối Vàng -> Giày Da Lv3').blue(),
        Text.of('  (Tốn 1 LV XP | Bất hoại | +2.5 Giáp | +2 HP)').black()
    ]);

    // ------------------------------------------
    // HƯỚNG DẪN CHO GIÁP SẮT (IRON ARMOR)
    // ------------------------------------------
    event.addItem('minecraft:iron_helmet', [
        Text.of('=== CÔNG THỨC NÂNG CẤP ĐE RÈN ===').blue().bold(),
        Text.of('• Cấp 1: Mũ Da Lv3 + Mũ Sắt Gốc -> Mũ Sắt Lv1').blue(),
        Text.of('  (Tốn 1 LV XP | Bất hoại | +2.0 Giáp | +2 HP)').black(),
        Text.of('• Cấp 2: Mũ Sắt Lv1 + 1 Khối Kim Cương -> Mũ Sắt Lv2').blue(),
        Text.of('  (Tốn 1 LV XP | Bất hoại | +2.0 Giáp | +3 HP)').black(),
        Text.of('• Cấp 3: Mũ Sắt Lv2 + 1 Khối Netherite -> Mũ Sắt Lv3').blue(),
        Text.of('  (Tốn 1 LV XP | Bất hoại | +3.0 Giáp | +4 HP)').black()
    ]);

    event.addItem('minecraft:iron_chestplate', [
        Text.of('=== CÔNG THỨC NÂNG CẤP ĐE RÈN ===').blue().bold(),
        Text.of('• Cấp 1: Áo Da Lv3 + Áo Sắt Gốc -> Áo Sắt Lv1').blue(),
        Text.of('  (Tốn 1 LV XP | Bất hoại | +6.0 Giáp | +3 HP)').black(),
        Text.of('• Cấp 2: Áo Sắt Lv1 + 1 Khối Kim Cương -> Áo Sắt Lv2').blue(),
        Text.of('  (Tốn 1 LV XP | Bất hoại | +6.0 Giáp | +5 HP)').black(),
        Text.of('• Cấp 3: Áo Sắt Lv2 + 1 Khối Netherite -> Áo Sắt Lv3').blue(),
        Text.of('  (Tốn 1 LV XP | Bất hoại | +7.0 Giáp | +6 HP)').black()
    ]);

    event.addItem('minecraft:iron_leggings', [
        Text.of('=== CÔNG THỨC NÂNG CẤP ĐE RÈN ===').blue().bold(),
        Text.of('• Cấp 1: Quần Da Lv3 + Quần Sắt Gốc -> Quần Sắt Lv1').blue(),
        Text.of('  (Tốn 1 LV XP | Bất hoại | +5.0 Giáp | +3 HP)').black(),
        Text.of('• Cấp 2: Quần Sắt Lv1 + 1 Khối Kim Cương -> Quần Sắt Lv2').blue(),
        Text.of('  (Tốn 1 LV XP | Bất hoại | +5.0 Giáp | +4 HP)').black(),
        Text.of('• Cấp 3: Quần Sắt Lv2 + 1 Khối Netherite -> Quần Sắt Lv3').blue(),
        Text.of('  (Tốn 1 LV XP | Bất hoại | +7.0 Giáp | +6 HP)').black()
    ]);

    event.addItem('minecraft:iron_boots', [
        Text.of('=== CÔNG THỨC NÂNG CẤP ĐE RÈN ===').blue().bold(),
        Text.of('• Cấp 1: Giày Da Lv3 + Giày Sắt Gốc -> Giày Sắt Lv1').blue(),
        Text.of('  (Tốn 1 LV XP | Bất hoại | +2.0 Giáp | +2 HP)').black(),
        Text.of('• Cấp 2: Giày Sắt Lv1 + 1 Khối Kim Cương -> Giày Sắt Lv2').blue(),
        Text.of('  (Tốn 1 LV XP | Bất hoại | +2.0 Giáp | +3 HP)').black(),
        Text.of('• Cấp 3: Giày Sắt Lv2 + 1 Khối Netherite -> Giày Sắt Lv3').blue(),
        Text.of('  (Tốn 1 LV XP | Bất hoại | +3.0 Giáp | +4 HP)').black()
    ]);
});

// Thêm các biến thể Lv1, Lv2, Lv3 vào ô tìm kiếm JEI để người chơi dễ xem
JEIEvents.addItems(event => {
    const armorTypes = ['helmet', 'chestplate', 'leggings', 'boots'];
    
    // ------------------------------------------
    // THÊM CÁC BIẾN THỂ GIÁP DA VÀO JEI
    // ------------------------------------------
    armorTypes.forEach(type => {
        let itemId = `minecraft:leather_${type}`;
        let amount1 = (type === 'helmet' || type === 'boots') ? 1.5 : (type === 'chestplate' ? 4.0 : 3.0);
        let loreArmor1 = (type === 'helmet' || type === 'boots') ? '+0.5 Giáp' : '+1.0 Giáp';
        let name1 = (type === 'helmet' ? 'Mũ' : type === 'chestplate' ? 'Áo' : type === 'leggings' ? 'Quần' : 'Giày') + ' Da Lv1';
        let uuid1 = type === 'helmet' ? 1001 : type === 'chestplate' ? 1002 : type === 'leggings' ? 1003 : 1004;
        let slot1 = type === 'helmet' ? 'head' : type === 'chestplate' ? 'chest' : type === 'leggings' ? 'legs' : 'feet';
        
        // Da Lv1
        let nbt1 = `{CustomLeatherArmorLv1:1b,Unbreakable:1b,AttributeModifiers:[{AttributeName:"minecraft:generic.armor",Name:"Armor",Amount:${amount1},Operation:0,UUID:[I;1000,1000,1000,${uuid1}],Slot:"${slot1}"}]}`;
        event.add(Item.of(itemId, nbt1)
            .withName(Text.of(name1).green().italic(false))
            .withLore([Text.of('Bất hoại').gold(), Text.of(loreArmor1).gray()]));

        // Da Lv2
        let name2 = (type === 'helmet' ? 'Mũ' : type === 'chestplate' ? 'Áo' : type === 'leggings' ? 'Quần' : 'Giày') + ' Da Lv2';
        let nbt2 = `{CustomLeatherArmorLv2:1b,Unbreakable:1b,AttributeModifiers:[{AttributeName:"minecraft:generic.armor",Name:"Armor",Amount:${amount1},Operation:0,UUID:[I;1000,1000,1000,${uuid1}],Slot:"${slot1}"},{AttributeName:"minecraft:generic.max_health",Name:"Max Health",Amount:2.0,Operation:0,UUID:[I;1000,1000,1000,${uuid1 + 1000}],Slot:"${slot1}"}]}`;
        event.add(Item.of(itemId, nbt2)
            .withName(Text.of(name2).green().italic(false))
            .withLore([Text.of('Bất hoại').gold(), Text.of(loreArmor1).gray(), Text.of('+2 HP (1 Tim)').green()]));

        // Da Lv3
        let name3 = (type === 'helmet' ? 'Mũ' : type === 'chestplate' ? 'Áo' : type === 'leggings' ? 'Quần' : 'Giày') + ' Da Lv3';
        let nbt3 = `{CustomLeatherArmorLv3:1b,Unbreakable:1b,AttributeModifiers:[{AttributeName:"minecraft:generic.armor",Name:"Armor",Amount:${amount1},Operation:0,UUID:[I;1000,1000,1000,${uuid1}],Slot:"${slot1}"},{AttributeName:"minecraft:generic.max_health",Name:"Max Health",Amount:2.0,Operation:0,UUID:[I;1000,1000,1000,${uuid1 + 2000}],Slot:"${slot1}"}]}`;
        event.add(Item.of(itemId, nbt3)
            .withName(Text.of(name3).gold().italic(false))
            .withLore([Text.of('Bất hoại').gold(), Text.of(loreArmor1).gray(), Text.of('+2 HP (1 Tim)').green()]));
    });

    // ------------------------------------------
    // THÊM CÁC BIẾN THỂ GIÁP SẮT VÀO JEI
    // ------------------------------------------
    armorTypes.forEach(type => {
        let itemId = `minecraft:iron_${type}`;
        let baseArmor = (type === 'helmet' || type === 'boots') ? 2.0 : (type === 'chestplate' ? 6.0 : 5.0);
        let loreBaseArmor = `+${baseArmor.toFixed(1)} Giáp`;
        let namePrefix = type === 'helmet' ? 'Mũ' : type === 'chestplate' ? 'Áo' : type === 'leggings' ? 'Quần' : 'Giày';
        let uuidIndex = type === 'helmet' ? 1001 : type === 'chestplate' ? 1002 : type === 'leggings' ? 1003 : 1004;
        let slot = type === 'helmet' ? 'head' : type === 'chestplate' ? 'chest' : type === 'leggings' ? 'legs' : 'feet';

        // HP theo phân bố cho Lv1 (2, 3, 3, 2)
        let hpAmount1 = (type === 'helmet' || type === 'boots') ? 2.0 : 3.0;
        let hpLore1 = `+${hpAmount1} HP (${hpAmount1 / 2} Tim)`;

        // HP theo phân bố cho Lv2 (3, 5, 4, 3)
        let hpAmount2 = (type === 'helmet' || type === 'boots') ? 3.0 : (type === 'chestplate' ? 5.0 : 4.0);
        let hpLore2 = `+${hpAmount2} HP (${hpAmount2 / 2} Tim)`;

        // HP theo phân bố cho Lv3 (4, 6, 6, 4) và Giáp 3.7.7.3
        let hpAmount3 = (type === 'helmet' || type === 'boots') ? 4.0 : 6.0;
        let hpLore3 = `+${hpAmount3} HP (${hpAmount3 / 2} Tim)`;
        let armorAmount3 = (type === 'helmet' || type === 'boots') ? 3.0 : 7.0;
        let loreArmor3 = `+${armorAmount3.toFixed(1)} Giáp`;

        // Sắt Lv1
        let nbt1 = `{CustomIronArmorLv1:1b,Unbreakable:1b,AttributeModifiers:[{AttributeName:"minecraft:generic.armor",Name:"Armor",Amount:${baseArmor},Operation:0,UUID:[I;2000,1000,1000,${uuidIndex}],Slot:"${slot}"},{AttributeName:"minecraft:generic.max_health",Name:"Max Health",Amount:${hpAmount1},Operation:0,UUID:[I;2000,1000,1000,${uuidIndex + 1000}],Slot:"${slot}"}]}`;
        event.add(Item.of(itemId, nbt1)
            .withName(Text.of(namePrefix + ' Sắt Lv1').blue().italic(false))
            .withLore([Text.of('Bất hoại').gold(), Text.of(loreBaseArmor).gray(), Text.of(hpLore1).green()]));

        // Sắt Lv2
        let nbt2 = `{CustomIronArmorLv2:1b,Unbreakable:1b,AttributeModifiers:[{AttributeName:"minecraft:generic.armor",Name:"Armor",Amount:${baseArmor},Operation:0,UUID:[I;2000,1000,1000,${uuidIndex}],Slot:"${slot}"},{AttributeName:"minecraft:generic.max_health",Name:"Max Health",Amount:${hpAmount2},Operation:0,UUID:[I;2000,1000,1000,${uuidIndex + 2000}],Slot:"${slot}"}]}`;
        event.add(Item.of(itemId, nbt2)
            .withName(Text.of(namePrefix + ' Sắt Lv2').lightPurple().italic(false))
            .withLore([Text.of('Bất hoại').gold(), Text.of(loreBaseArmor).gray(), Text.of(hpLore2).green()]));

        // Sắt Lv3
        let nbt3 = `{CustomIronArmorLv3:1b,Unbreakable:1b,AttributeModifiers:[{AttributeName:"minecraft:generic.armor",Name:"Armor",Amount:${armorAmount3},Operation:0,UUID:[I;2000,1000,1000,${uuidIndex}],Slot:"${slot}"},{AttributeName:"minecraft:generic.max_health",Name:"Max Health",Amount:${hpAmount3},Operation:0,UUID:[I;2000,1000,1000,${uuidIndex + 3000}],Slot:"${slot}"}]}`;
        event.add(Item.of(itemId, nbt3)
            .withName(Text.of(namePrefix + ' Sắt Lv3').gold().italic(false))
            .withLore([Text.of('Bất hoại').gold(), Text.of(loreArmor3).gray(), Text.of(hpLore3).green()]));
    });
});
