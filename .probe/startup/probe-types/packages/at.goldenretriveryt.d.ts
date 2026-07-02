declare module "packages/at/goldenretriveryt/absolutelyunbreakable/enchants/$AbsolutelyUnbreakableEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $AbsolutelyUnbreakableEnchantment extends $Enchantment {
readonly "category": $EnchantmentCategory

constructor(...arg0: ($EquipmentSlot$Type)[])

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbsolutelyUnbreakableEnchantment$Type = ($AbsolutelyUnbreakableEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbsolutelyUnbreakableEnchantment_ = $AbsolutelyUnbreakableEnchantment$Type;
}}
