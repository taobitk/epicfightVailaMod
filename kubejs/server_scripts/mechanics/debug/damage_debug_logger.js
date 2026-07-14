// File: kubejs/server_scripts/mechanics/debug/damage_debug_logger.js
// Purpose: Log raw incoming damage and final HP deducted to verify Minecraft's damage formula.
//
// Strategy: KubeJS EntityEvents.hurt fires BEFORE armor/enchant reduction.
// We cannot hook LivingDamageEvent from server_scripts (ForgeEvents is startup-only).
// Instead we log the raw damage here AND compare it to the expected formula result.
// The Python script verify_damage_logs.py can then verify by replaying the formula.

EntityEvents.hurt(event => {
    let entity = event.entity;
    if (!entity || !entity.level || entity.level.isClientSide()) return;

    // --- Gather inputs ---
    let rawDamage = event.damage;
    let armor     = entity.getAttributeValue('minecraft:generic.armor');
    let toughness = entity.getAttributeValue('minecraft:generic.armor_toughness');

    // Resistance effect level - iterate active effects to find Resistance
    let resistLvl = 0;
    try {
        let effects = entity.getPotionEffects();
        for (let eff of effects.getActive()) {
            // eff is MobEffectInstance; check the type registry key
            if (String(eff.getEffect().getDescriptionId()).includes('resistance')) {
                resistLvl = eff.getAmplifier() + 1;
                break;
            }
        }
    } catch (e) { /* entity might not support effects */ }

    // Sum Protection enchantment from each armor piece
    let epf = 0;
    try {
        for (let itemStack of entity.getArmorSlots()) {
            if (itemStack && !itemStack.isEmpty()) {
                epf += itemStack.getEnchantmentLevel('minecraft:protection');
            }
        }
    } catch (e) { /* entity might not have armor slots */ }

    // --- Replicate vanilla formula to get expected final damage ---
    // Step 1: Armor reduction
    let armorFactor = armor - (rawDamage / (2.0 + (toughness / 4.0)));
    let armorRed    = Math.min(20.0, Math.max(armor / 5.0, armorFactor));
    let afterArmor  = rawDamage * (1.0 - (armorRed / 25.0));

    // Step 2: Enchantment (Protection) EPF reduction
    let afterEnchant = afterArmor * (1.0 - (Math.min(20.0, epf) / 25.0));

    // Step 3: Resistance effect reduction
    let resistPct  = Math.min(5, resistLvl) * 0.20;
    let expected   = afterEnchant * (1.0 - resistPct);

    // --- Log everything ---
    console.info(
        '[DMG_CHECK]'
        + ' | Entity:'    + entity.type
        + ' | Raw:'       + rawDamage.toFixed(4)
        + ' | Armor:'     + armor.toFixed(2)
        + ' | Toughness:' + toughness.toFixed(2)
        + ' | EPF:'       + epf
        + ' | Resist:'    + resistLvl
        + ' | Expected:'  + expected.toFixed(4)
    );
});
