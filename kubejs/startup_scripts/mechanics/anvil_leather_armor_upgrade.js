// Tên file: kubejs/startup_scripts/anvil_leather_armor_upgrade.js
// Mục đích: Lắng nghe sự kiện đe rèn của Forge để hỗ trợ nâng cấp Giáp Da (Lv1, Lv2, Lv3) và Giáp Sắt (Lv1, Lv2, Lv3).
// Lưu ý: Vì đây là Startup Script, bạn cần KHỞI ĐỘNG LẠI GAME để thay đổi có hiệu lực.

ForgeEvents.onEvent('net.minecraftforge.event.AnvilUpdateEvent', event => {
    let left = event.left;
    let right = event.right;

    // Phân loại các món đồ bên trái
    let isLeatherHelmet = left.id === 'minecraft:leather_helmet';
    let isLeatherChestplate = left.id === 'minecraft:leather_chestplate';
    let isLeatherLeggings = left.id === 'minecraft:leather_leggings';
    let isLeatherBoots = left.id === 'minecraft:leather_boots';

    let isIronHelmet = left.id === 'minecraft:iron_helmet';
    let isIronChestplate = left.id === 'minecraft:iron_chestplate';
    let isIronLeggings = left.id === 'minecraft:iron_leggings';
    let isIronBoots = left.id === 'minecraft:iron_boots';

    let isLeather = isLeatherHelmet || isLeatherChestplate || isLeatherLeggings || isLeatherBoots;
    let isIron = isIronHelmet || isIronChestplate || isIronLeggings || isIronBoots;

    if (!isLeather && !isIron) return;

    // =========================================================================
    // A. CÁC CÔNG THỨC NÂNG CẤP GIÁP DA (LEATHER ARMOR)
    // =========================================================================
    if (isLeather) {
        // ------------------------------------------
        // 1. LÊN LV1: Giáp Da Gốc + 1 Phôi sắt (Iron Ingot)
        // ------------------------------------------
        if (right.id === 'minecraft:iron_ingot') {
            if (!(left.nbt && (left.nbt.contains('CustomLeatherArmorLv1') || left.nbt.contains('CustomLeatherArmorLv2') || left.nbt.contains('CustomLeatherArmorLv3')))) {
                let amount = 0;
                let uuid = [];
                let slot = '';
                let name = '';
                let loreText = '';

                if (isLeatherHelmet) {
                    amount = 1.5;
                    uuid = [1000, 1000, 1000, 1001];
                    slot = 'head';
                    name = 'Mũ Da Lv1';
                    loreText = '+0.5 Giáp';
                } else if (isLeatherChestplate) {
                    amount = 4.0;
                    uuid = [1000, 1000, 1000, 1002];
                    slot = 'chest';
                    name = 'Áo Da Lv1';
                    loreText = '+1.0 Giáp';
                } else if (isLeatherLeggings) {
                    amount = 3.0;
                    uuid = [1000, 1000, 1000, 1003];
                    slot = 'legs';
                    name = 'Quần Da Lv1';
                    loreText = '+1.0 Giáp';
                } else if (isLeatherBoots) {
                    amount = 1.5;
                    uuid = [1000, 1000, 1000, 1004];
                    slot = 'feet';
                    name = 'Giày Da Lv1';
                    loreText = '+0.5 Giáp';
                }

                let nbtStr = `{CustomLeatherArmorLv1:1b,Unbreakable:1b,AttributeModifiers:[{AttributeName:"minecraft:generic.armor",Name:"Armor",Amount:${amount},Operation:0,UUID:[I;${uuid[0]},${uuid[1]},${uuid[2]},${uuid[3]}],Slot:"${slot}"}]}`;
                let output = Item.of(left.id, nbtStr)
                    .withName(Text.of(name).green().italic(false))
                    .withLore([
                        Text.of('Bất hoại').gold(),
                        Text.of(loreText).gray()
                    ]);

                if (left.nbt && left.nbt.contains('Enchantments')) {
                    output.nbt.put('Enchantments', left.nbt.get('Enchantments'));
                }

                event.setOutput(output);
                event.setCost(1);
                event.setMaterialCost(1);
            }
        }

        // ------------------------------------------
        // 2. LÊN LV2: Giáp Da Lv1 + 1 Khối sắt (Iron Block)
        // ------------------------------------------
        else if (right.id === 'minecraft:iron_block') {
            if (left.nbt && left.nbt.contains('CustomLeatherArmorLv1') && !left.nbt.contains('CustomLeatherArmorLv2')) {
                let armorAmount = 0;
                let armorUuid = [];
                let healthUuid = [];
                let slot = '';
                let name = '';
                let armorLore = '';

                if (isLeatherHelmet) {
                    armorAmount = 1.5;
                    armorUuid = [1000, 1000, 1000, 1001];
                    healthUuid = [1000, 1000, 1000, 2001];
                    slot = 'head';
                    name = 'Mũ Da Lv2';
                    armorLore = '+0.5 Giáp';
                } else if (isLeatherChestplate) {
                    armorAmount = 4.0;
                    armorUuid = [1000, 1000, 1000, 1002];
                    healthUuid = [1000, 1000, 1000, 2002];
                    slot = 'chest';
                    name = 'Áo Da Lv2';
                    armorLore = '+1.0 Giáp';
                } else if (isLeatherLeggings) {
                    armorAmount = 3.0;
                    armorUuid = [1000, 1000, 1000, 1003];
                    healthUuid = [1000, 1000, 1000, 2003];
                    slot = 'legs';
                    name = 'Quần Da Lv2';
                    armorLore = '+1.0 Giáp';
                } else if (isLeatherBoots) {
                    armorAmount = 1.5;
                    armorUuid = [1000, 1000, 1000, 1004];
                    healthUuid = [1000, 1000, 1000, 2004];
                    slot = 'feet';
                    name = 'Giày Da Lv2';
                    armorLore = '+0.5 Giáp';
                }

                let nbtStr = `{CustomLeatherArmorLv2:1b,Unbreakable:1b,AttributeModifiers:[{AttributeName:"minecraft:generic.armor",Name:"Armor",Amount:${armorAmount},Operation:0,UUID:[I;${armorUuid[0]},${armorUuid[1]},${armorUuid[2]},${armorUuid[3]}],Slot:"${slot}"},{AttributeName:"minecraft:generic.max_health",Name:"Max Health",Amount:2.0,Operation:0,UUID:[I;${healthUuid[0]},${healthUuid[1]},${healthUuid[2]},${healthUuid[3]}],Slot:"${slot}"}]}`;
                let output = Item.of(left.id, nbtStr)
                    .withName(Text.of(name).green().italic(false))
                    .withLore([
                        Text.of('Bất hoại').gold(),
                        Text.of(armorLore).gray(),
                        Text.of('+2 HP (1 Tim)').green()
                    ]);

                if (left.nbt && left.nbt.contains('Enchantments')) {
                    output.nbt.put('Enchantments', left.nbt.get('Enchantments'));
                }

                event.setOutput(output);
                event.setCost(1);
                event.setMaterialCost(1);
            }
        }

        // ------------------------------------------
        // 3. LÊN LV3: Giáp Da Lv2 + 1 Khối Vàng (Gold Block)
        // ------------------------------------------
        else if (right.id === 'minecraft:gold_block') {
            if (left.nbt && left.nbt.contains('CustomLeatherArmorLv2') && !left.nbt.contains('CustomLeatherArmorLv3')) {
                let armorAmount = 0;
                let armorUuid = [];
                let healthUuid = [];
                let slot = '';
                let name = '';
                let armorLore = '';

                if (isLeatherHelmet) {
                    armorAmount = 2.5;
                    armorUuid = [1000, 1000, 1000, 1001];
                    healthUuid = [1000, 1000, 1000, 3001];
                    slot = 'head';
                    name = 'Mũ Da Lv3';
                    armorLore = '+2.5 Giáp';
                } else if (isLeatherChestplate) {
                    armorAmount = 6.0;
                    armorUuid = [1000, 1000, 1000, 1002];
                    healthUuid = [1000, 1000, 1000, 3002];
                    slot = 'chest';
                    name = 'Áo Da Lv3';
                    armorLore = '+6.0 Giáp';
                } else if (isLeatherLeggings) {
                    armorAmount = 5.0;
                    armorUuid = [1000, 1000, 1000, 1003];
                    healthUuid = [1000, 1000, 1000, 3003];
                    slot = 'legs';
                    name = 'Quần Da Lv3';
                    armorLore = '+5.0 Giáp';
                } else if (isLeatherBoots) {
                    armorAmount = 2.5;
                    armorUuid = [1000, 1000, 1000, 1004];
                    healthUuid = [1000, 1000, 1000, 3004];
                    slot = 'feet';
                    name = 'Giày Da Lv3';
                    armorLore = '+2.5 Giáp';
                }

                let nbtStr = `{CustomLeatherArmorLv3:1b,Unbreakable:1b,AttributeModifiers:[{AttributeName:"minecraft:generic.armor",Name:"Armor",Amount:${armorAmount},Operation:0,UUID:[I;${armorUuid[0]},${armorUuid[1]},${armorUuid[2]},${armorUuid[3]}],Slot:"${slot}"},{AttributeName:"minecraft:generic.max_health",Name:"Max Health",Amount:2.0,Operation:0,UUID:[I;${healthUuid[0]},${healthUuid[1]},${healthUuid[2]},${healthUuid[3]}],Slot:"${slot}"}]}`;
                let output = Item.of(left.id, nbtStr)
                    .withName(Text.of(name).gold().italic(false))
                    .withLore([
                        Text.of('Bất hoại').gold(),
                        Text.of(armorLore).gray(),
                        Text.of('+2 HP (1 Tim)').green()
                    ]);

                if (left.nbt && left.nbt.contains('Enchantments')) {
                    output.nbt.put('Enchantments', left.nbt.get('Enchantments'));
                }

                event.setOutput(output);
                event.setCost(1);
                event.setMaterialCost(1);
            }
        }

        // ---------------------------------------------------------------------
        // 4. CHUYỂN HỆ: Giáp Da Lv3 + Món đồ sắt tương ứng -> Giáp Sắt Lv1
        // ---------------------------------------------------------------------
        else {
            let isTargetIron = (isLeatherHelmet && right.id === 'minecraft:iron_helmet') ||
                (isLeatherChestplate && right.id === 'minecraft:iron_chestplate') ||
                (isLeatherLeggings && right.id === 'minecraft:iron_leggings') ||
                (isLeatherBoots && right.id === 'minecraft:iron_boots');

            if (isTargetIron && left.nbt && left.nbt.contains('CustomLeatherArmorLv3')) {
                let armorAmount = 0;
                let armorUuid = [2000, 1000, 1000, 1001]; // UUID Giáp Sắt
                let healthUuid = [2000, 1000, 1000, 2001];
                let slot = '';
                let name = '';
                let armorLore = '';
                let healthAmount = 0;
                let healthLore = '';
                let outputId = '';

                if (isLeatherHelmet) {
                    armorAmount = 2.0;    // Giáp sắt gốc
                    armorUuid[3] = 1001;
                    healthUuid[3] = 2001;
                    slot = 'head';
                    name = 'Mũ Sắt Lv1';
                    armorLore = '+2.0 Giáp';
                    healthAmount = 2.0;   // +2 HP
                    healthLore = '+2 HP (1 Tim)';
                    outputId = 'minecraft:iron_helmet';
                } else if (isLeatherChestplate) {
                    armorAmount = 6.0;    // Giáp sắt gốc
                    armorUuid[3] = 1002;
                    healthUuid[3] = 2002;
                    slot = 'chest';
                    name = 'Áo Sắt Lv1';
                    armorLore = '+6.0 Giáp';
                    healthAmount = 3.0;   // +3 HP
                    healthLore = '+3 HP (1.5 Tim)';
                    outputId = 'minecraft:iron_chestplate';
                } else if (isLeatherLeggings) {
                    armorAmount = 5.0;    // Giáp sắt gốc
                    armorUuid[3] = 1003;
                    healthUuid[3] = 2003;
                    slot = 'legs';
                    name = 'Quần Sắt Lv1';
                    armorLore = '+5.0 Giáp';
                    healthAmount = 3.0;   // +3 HP
                    healthLore = '+3 HP (1.5 Tim)';
                    outputId = 'minecraft:iron_leggings';
                } else if (isLeatherBoots) {
                    armorAmount = 2.0;    // Giáp sắt gốc
                    armorUuid[3] = 1004;
                    healthUuid[3] = 2004;
                    slot = 'feet';
                    name = 'Giày Sắt Lv1';
                    armorLore = '+2.0 Giáp';
                    healthAmount = 2.0;   // +2 HP
                    healthLore = '+2 HP (1 Tim)';
                    outputId = 'minecraft:iron_boots';
                }

                let nbtStr = `{CustomIronArmorLv1:1b,Unbreakable:1b,AttributeModifiers:[{AttributeName:"minecraft:generic.armor",Name:"Armor",Amount:${armorAmount},Operation:0,UUID:[I;${armorUuid[0]},${armorUuid[1]},${armorUuid[2]},${armorUuid[3]}],Slot:"${slot}"},{AttributeName:"minecraft:generic.max_health",Name:"Max Health",Amount:${healthAmount},Operation:0,UUID:[I;${healthUuid[0]},${healthUuid[1]},${healthUuid[2]},${healthUuid[3]}],Slot:"${slot}"}]}`;
                let output = Item.of(outputId, nbtStr)
                    .withName(Text.of(name).blue().italic(false))
                    .withLore([
                        Text.of('Bất hoại').gold(),
                        Text.of(armorLore).gray(),
                        Text.of(healthLore).green()
                    ]);

                // Giữ lại enchantments từ Giáp Da Lv3 đặt bên trái
                if (left.nbt && left.nbt.contains('Enchantments')) {
                    output.nbt.put('Enchantments', left.nbt.get('Enchantments'));
                }

                event.setOutput(output);
                event.setCost(1);
                event.setMaterialCost(1);
            }
        }
    }

    // =========================================================================
    // B. CÁC CÔNG THỨC NÂNG CẤP GIÁP SẮT (IRON ARMOR)
    // =========================================================================
    if (isIron) {
        // ------------------------------------------
        // 1. LÊN LV2: Giáp Sắt Lv1 + 1 Khối kim cương (Diamond Block)
        // ------------------------------------------
        if (right.id === 'minecraft:diamond_block') {
            if (left.nbt && left.nbt.contains('CustomIronArmorLv1') && !left.nbt.contains('CustomIronArmorLv2')) {
                let armorAmount = 0;
                let armorUuid = [2000, 1000, 1000, 1001];
                let healthUuid = [2000, 1000, 1000, 3001]; // UUID HP riêng cho Lv2
                let slot = '';
                let name = '';
                let armorLore = '';
                let healthAmount = 0;
                let healthLore = '';

                if (isIronHelmet) {
                    armorAmount = 2.0;
                    armorUuid[3] = 1001;
                    healthUuid[3] = 3001;
                    slot = 'head';
                    name = 'Mũ Sắt Lv2';
                    armorLore = '+2.0 Giáp';
                    healthAmount = 3.0; // +3 HP
                    healthLore = '+3 HP (1.5 Tim)';
                } else if (isIronChestplate) {
                    armorAmount = 6.0;
                    armorUuid[3] = 1002;
                    healthUuid[3] = 3002;
                    slot = 'chest';
                    name = 'Áo Sắt Lv2';
                    armorLore = '+6.0 Giáp';
                    healthAmount = 5.0; // +5 HP
                    healthLore = '+5 HP (2.5 Tim)';
                } else if (isIronLeggings) {
                    armorAmount = 5.0;
                    armorUuid[3] = 1003;
                    healthUuid[3] = 3003;
                    slot = 'legs';
                    name = 'Quần Sắt Lv2';
                    armorLore = '+5.0 Giáp';
                    healthAmount = 4.0; // +4 HP
                    healthLore = '+4 HP (2 Tim)';
                } else if (isIronBoots) {
                    armorAmount = 2.0;
                    armorUuid[3] = 1004;
                    healthUuid[3] = 3004;
                    slot = 'feet';
                    name = 'Giày Sắt Lv2';
                    armorLore = '+2.0 Giáp';
                    healthAmount = 3.0; // +3 HP
                    healthLore = '+3 HP (1.5 Tim)';
                }

                let nbtStr = `{CustomIronArmorLv2:1b,Unbreakable:1b,AttributeModifiers:[{AttributeName:"minecraft:generic.armor",Name:"Armor",Amount:${armorAmount},Operation:0,UUID:[I;${armorUuid[0]},${armorUuid[1]},${armorUuid[2]},${armorUuid[3]}],Slot:"${slot}"},{AttributeName:"minecraft:generic.max_health",Name:"Max Health",Amount:${healthAmount},Operation:0,UUID:[I;${healthUuid[0]},${healthUuid[1]},${healthUuid[2]},${healthUuid[3]}],Slot:"${slot}"}]}`;
                let output = Item.of(left.id, nbtStr)
                    .withName(Text.of(name).lightPurple().italic(false))
                    .withLore([
                        Text.of('Bất hoại').gold(),
                        Text.of(armorLore).gray(),
                        Text.of(healthLore).green()
                    ]);

                if (left.nbt && left.nbt.contains('Enchantments')) {
                    output.nbt.put('Enchantments', left.nbt.get('Enchantments'));
                }

                event.setOutput(output);
                event.setCost(1);
                event.setMaterialCost(1);
            }
        }

        // ------------------------------------------
        // 2. LÊN LV3: Giáp Sắt Lv2 + 1 Khối Netherite (Netherite Block)
        // ------------------------------------------
        else if (right.id === 'minecraft:netherite_block') {
            if (left.nbt && left.nbt.contains('CustomIronArmorLv2') && !left.nbt.contains('CustomIronArmorLv3')) {
                let armorAmount = 0;
                let armorUuid = [2000, 1000, 1000, 1001];
                let healthUuid = [2000, 1000, 1000, 4001]; // UUID HP riêng cho Lv3
                let slot = '';
                let name = '';
                let armorLore = '';
                let healthAmount = 0;
                let healthLore = '';

                if (isIronHelmet) {
                    armorAmount = 3.0;  // Nâng lên 3
                    armorUuid[3] = 1001;
                    healthUuid[3] = 4001;
                    slot = 'head';
                    name = 'Mũ Sắt Lv3';
                    armorLore = '+3.0 Giáp';
                    healthAmount = 4.0; // +4 HP
                    healthLore = '+4 HP (2 Tim)';
                } else if (isIronChestplate) {
                    armorAmount = 7.0;  // Nâng lên 7
                    armorUuid[3] = 1002;
                    healthUuid[3] = 4002;
                    slot = 'chest';
                    name = 'Áo Sắt Lv3';
                    armorLore = '+7.0 Giáp';
                    healthAmount = 6.0; // +6 HP
                    healthLore = '+6 HP (3 Tim)';
                } else if (isIronLeggings) {
                    armorAmount = 7.0;  // Nâng lên 7
                    armorUuid[3] = 1003;
                    healthUuid[3] = 4003;
                    slot = 'legs';
                    name = 'Quần Sắt Lv3';
                    armorLore = '+7.0 Giáp';
                    healthAmount = 6.0; // +6 HP
                    healthLore = '+6 HP (3 Tim)';
                } else if (isIronBoots) {
                    armorAmount = 3.0;  // Nâng lên 3
                    armorUuid[3] = 1004;
                    healthUuid[3] = 4004;
                    slot = 'feet';
                    name = 'Giày Sắt Lv3';
                    armorLore = '+3.0 Giáp';
                    healthAmount = 4.0; // +4 HP
                    healthLore = '+4 HP (2 Tim)';
                }

                let nbtStr = `{CustomIronArmorLv3:1b,Unbreakable:1b,AttributeModifiers:[{AttributeName:"minecraft:generic.armor",Name:"Armor",Amount:${armorAmount},Operation:0,UUID:[I;${armorUuid[0]},${armorUuid[1]},${armorUuid[2]},${armorUuid[3]}],Slot:"${slot}"},{AttributeName:"minecraft:generic.max_health",Name:"Max Health",Amount:${healthAmount},Operation:0,UUID:[I;${healthUuid[0]},${healthUuid[1]},${healthUuid[2]},${healthUuid[3]}],Slot:"${slot}"}]}`;
                let output = Item.of(left.id, nbtStr)
                    .withName(Text.of(name).gold().italic(false))
                    .withLore([
                        Text.of('Bất hoại').gold(),
                        Text.of(armorLore).gray(),
                        Text.of(healthLore).green()
                    ]);

                if (left.nbt && left.nbt.contains('Enchantments')) {
                    output.nbt.put('Enchantments', left.nbt.get('Enchantments'));
                }

                event.setOutput(output);
                event.setCost(1);
                event.setMaterialCost(1);
            }
        }
    }
});
