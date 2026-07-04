declare module "packages/com/hm/efn/item/custom/$ExsiliumgladiusItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ExsiliumgladiusItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isDamageable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "canEquip"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: $Entity$Type): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExsiliumgladiusItem$Type = ($ExsiliumgladiusItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExsiliumgladiusItem_ = $ExsiliumgladiusItem$Type;
}}
declare module "packages/com/hm/efn/item/custom/$RuinfighterItem$Boots" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$RuinfighterItem, $RuinfighterItem$Type} from "packages/com/hm/efn/item/custom/$RuinfighterItem"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RuinfighterItem$Boots extends $RuinfighterItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuinfighterItem$Boots$Type = ($RuinfighterItem$Boots);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuinfighterItem$Boots_ = $RuinfighterItem$Boots$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$AttackSpeedIncreaseEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $AttackSpeedIncreaseEffect extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttackSpeedIncreaseEffect$Type = ($AttackSpeedIncreaseEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttackSpeedIncreaseEffect_ = $AttackSpeedIncreaseEffect$Type;
}}
declare module "packages/com/hm/efn/item/custom/$KusabimaruItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$IAvalonAnimationItem, $IAvalonAnimationItem$Type} from "packages/com/merlin204/avalon/item/animationitem/$IAvalonAnimationItem"
import {$Armatures$ArmatureAccessor, $Armatures$ArmatureAccessor$Type} from "packages/yesman/epicfight/gameasset/$Armatures$ArmatureAccessor"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $KusabimaruItem extends $WeaponItem implements $IAvalonAnimationItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isDamageable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "getArmature"(): $Armatures$ArmatureAccessor<(any)>
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "setUseAnimationArmature"(arg0: integer, arg1: boolean): void
public "getHitBox"(): $Vec2
public "useAnimationArmature"(arg0: integer): boolean
get "enchantmentValue"(): integer
get "armature"(): $Armatures$ArmatureAccessor<(any)>
get "hitBox"(): $Vec2
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KusabimaruItem$Type = ($KusabimaruItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KusabimaruItem_ = $KusabimaruItem$Type;
}}
declare module "packages/com/hm/efn/enchantment/$YamatoSummonedSword" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $YamatoSummonedSword extends $Enchantment {
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "isTreasureOnly"(): boolean
public "isTradeable"(): boolean
public "isDiscoverable"(): boolean
public "isAllowedOnBooks"(): boolean
get "maxLevel"(): integer
get "treasureOnly"(): boolean
get "tradeable"(): boolean
get "discoverable"(): boolean
get "allowedOnBooks"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YamatoSummonedSword$Type = ($YamatoSummonedSword);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YamatoSummonedSword_ = $YamatoSummonedSword$Type;
}}
declare module "packages/com/hm/efn/enchantment/$YamatoSummonedSwordEnd" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $YamatoSummonedSwordEnd extends $Enchantment {
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "isTreasureOnly"(): boolean
public "isTradeable"(): boolean
public "isDiscoverable"(): boolean
public "isAllowedOnBooks"(): boolean
get "maxLevel"(): integer
get "treasureOnly"(): boolean
get "tradeable"(): boolean
get "discoverable"(): boolean
get "allowedOnBooks"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YamatoSummonedSwordEnd$Type = ($YamatoSummonedSwordEnd);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YamatoSummonedSwordEnd_ = $YamatoSummonedSwordEnd$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$HorizontalStop" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $HorizontalStop extends $MobEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HorizontalStop$Type = ($HorizontalStop);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HorizontalStop_ = $HorizontalStop$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$BattleContinuationEffect" {
import {$DamageType, $DamageType$Type} from "packages/net/minecraft/world/damagesource/$DamageType"
import {$MobEffectEvent$Remove, $MobEffectEvent$Remove$Type} from "packages/net/minecraftforge/event/entity/living/$MobEffectEvent$Remove"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$MobEffectEvent$Expired, $MobEffectEvent$Expired$Type} from "packages/net/minecraftforge/event/entity/living/$MobEffectEvent$Expired"
import {$MobEffectEvent$Added, $MobEffectEvent$Added$Type} from "packages/net/minecraftforge/event/entity/living/$MobEffectEvent$Added"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $BattleContinuationEffect extends $MobEffect {
static readonly "BATTLE_CONTINUATION_POST_EFFECT": $TagKey<($DamageType)>

constructor()

public static "onEffectExpired"(arg0: $MobEffectEvent$Expired$Type): void
public static "onEffectAdded"(arg0: $MobEffectEvent$Added$Type): void
public static "onEffectRemoved"(arg0: $MobEffectEvent$Remove$Type): void
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BattleContinuationEffect$Type = ($BattleContinuationEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BattleContinuationEffect_ = $BattleContinuationEffect$Type;
}}
declare module "packages/com/hm/efn/item/custom/$RuinfighterItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $RuinfighterItem extends $ArmorItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "isDamageable"(arg0: $ItemStack$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuinfighterItem$Type = ($RuinfighterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuinfighterItem_ = $RuinfighterItem$Type;
}}
declare module "packages/com/hm/efn/enchantment/$ScytheEnhance" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $ScytheEnhance extends $Enchantment {
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "isTreasureOnly"(): boolean
public "isTradeable"(): boolean
public "isDiscoverable"(): boolean
public "isAllowedOnBooks"(): boolean
get "maxLevel"(): integer
get "treasureOnly"(): boolean
get "tradeable"(): boolean
get "discoverable"(): boolean
get "allowedOnBooks"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScytheEnhance$Type = ($ScytheEnhance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScytheEnhance_ = $ScytheEnhance$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$BreathingRing" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $BreathingRing extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BreathingRing$Type = ($BreathingRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BreathingRing_ = $BreathingRing$Type;
}}
declare module "packages/com/hm/efn/item/custom/$FireExsiliumgladiusItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FireExsiliumgladiusItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isDamageable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "canEquip"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: $Entity$Type): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireExsiliumgladiusItem$Type = ($FireExsiliumgladiusItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireExsiliumgladiusItem_ = $FireExsiliumgladiusItem$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$StunEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $StunEffect extends $MobEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StunEffect$Type = ($StunEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StunEffect_ = $StunEffect$Type;
}}
declare module "packages/com/hm/efn/item/custom/$DuskFireArmorItem$Leggings" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$DuskFireArmorItem, $DuskFireArmorItem$Type} from "packages/com/hm/efn/item/custom/$DuskFireArmorItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $DuskFireArmorItem$Leggings extends $DuskFireArmorItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DuskFireArmorItem$Leggings$Type = ($DuskFireArmorItem$Leggings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DuskFireArmorItem$Leggings_ = $DuskFireArmorItem$Leggings$Type;
}}
declare module "packages/com/hm/efn/item/custom/$NFShortSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NFShortSwordItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isDamageable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NFShortSwordItem$Type = ($NFShortSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NFShortSwordItem_ = $NFShortSwordItem$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$BloodlustEnhance$BloodlustEffect" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $BloodlustEnhance$BloodlustEffect extends $MobEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BloodlustEnhance$BloodlustEffect$Type = ($BloodlustEnhance$BloodlustEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BloodlustEnhance$BloodlustEffect_ = $BloodlustEnhance$BloodlustEffect$Type;
}}
declare module "packages/com/hm/efn/item/custom/$RuinfighterItem$Chestplate" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$RuinfighterItem, $RuinfighterItem$Type} from "packages/com/hm/efn/item/custom/$RuinfighterItem"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RuinfighterItem$Chestplate extends $RuinfighterItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuinfighterItem$Chestplate$Type = ($RuinfighterItem$Chestplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuinfighterItem$Chestplate_ = $RuinfighterItem$Chestplate$Type;
}}
declare module "packages/com/hm/efn/enchantment/$BroadBladeEnhance" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $BroadBladeEnhance extends $Enchantment {
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "isTreasureOnly"(): boolean
public "isTradeable"(): boolean
public "isDiscoverable"(): boolean
public "isAllowedOnBooks"(): boolean
get "maxLevel"(): integer
get "treasureOnly"(): boolean
get "tradeable"(): boolean
get "discoverable"(): boolean
get "allowedOnBooks"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BroadBladeEnhance$Type = ($BroadBladeEnhance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BroadBladeEnhance_ = $BroadBladeEnhance$Type;
}}
declare module "packages/com/hm/efn/item/custom/$DuskFireArmorItem$Boots" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$DuskFireArmorItem, $DuskFireArmorItem$Type} from "packages/com/hm/efn/item/custom/$DuskFireArmorItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $DuskFireArmorItem$Boots extends $DuskFireArmorItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DuskFireArmorItem$Boots$Type = ($DuskFireArmorItem$Boots);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DuskFireArmorItem$Boots_ = $DuskFireArmorItem$Boots$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$DamageReductionEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $DamageReductionEffect extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageReductionEffect$Type = ($DamageReductionEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DamageReductionEffect_ = $DamageReductionEffect$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$ClawEnhance$ClawEffect" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $ClawEnhance$ClawEffect extends $MobEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClawEnhance$ClawEffect$Type = ($ClawEnhance$ClawEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClawEnhance$ClawEffect_ = $ClawEnhance$ClawEffect$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$HeavyRainStunEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$LivingKnockBackEvent, $LivingKnockBackEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingKnockBackEvent"
import {$EntityStunEvent, $EntityStunEvent$Type} from "packages/yesman/epicfight/api/forgeevent/$EntityStunEvent"
import {$LivingAttackEvent, $LivingAttackEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingAttackEvent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $HeavyRainStunEffect extends $MobEffect {

constructor()

public static "onEntityStun"(arg0: $EntityStunEvent$Type): void
public static "onLivingKnockBack"(arg0: $LivingKnockBackEvent$Type): void
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public static "onLivingAttack"(arg0: $LivingAttackEvent$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeavyRainStunEffect$Type = ($HeavyRainStunEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeavyRainStunEffect_ = $HeavyRainStunEffect$Type;
}}
declare module "packages/com/hm/efn/item/custom/$NfClawItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$IAvalonAnimationItem, $IAvalonAnimationItem$Type} from "packages/com/merlin204/avalon/item/animationitem/$IAvalonAnimationItem"
import {$Armatures$ArmatureAccessor, $Armatures$ArmatureAccessor$Type} from "packages/yesman/epicfight/gameasset/$Armatures$ArmatureAccessor"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NfClawItem extends $WeaponItem implements $IAvalonAnimationItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isDamageable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "getArmature"(): $Armatures$ArmatureAccessor<(any)>
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "setUseAnimationArmature"(arg0: integer, arg1: boolean): void
public "getHitBox"(): $Vec2
public "useAnimationArmature"(arg0: integer): boolean
get "enchantmentValue"(): integer
get "armature"(): $Armatures$ArmatureAccessor<(any)>
get "hitBox"(): $Vec2
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NfClawItem$Type = ($NfClawItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NfClawItem_ = $NfClawItem$Type;
}}
declare module "packages/com/hm/efn/item/custom/$ThornWheelItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$IAvalonAnimationItem, $IAvalonAnimationItem$Type} from "packages/com/merlin204/avalon/item/animationitem/$IAvalonAnimationItem"
import {$Armatures$ArmatureAccessor, $Armatures$ArmatureAccessor$Type} from "packages/yesman/epicfight/gameasset/$Armatures$ArmatureAccessor"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ThornWheelItem extends $WeaponItem implements $IAvalonAnimationItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isDamageable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "getArmature"(): $Armatures$ArmatureAccessor<(any)>
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "setUseAnimationArmature"(arg0: integer, arg1: boolean): void
public "getHitBox"(): $Vec2
public "useAnimationArmature"(arg0: integer): boolean
get "enchantmentValue"(): integer
get "armature"(): $Armatures$ArmatureAccessor<(any)>
get "hitBox"(): $Vec2
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThornWheelItem$Type = ($ThornWheelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThornWheelItem_ = $ThornWheelItem$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$FalchionBless" {
import {$LivingDamageEvent, $LivingDamageEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDamageEvent"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $FalchionBless extends $MobEffect {

constructor()

public static "onLivingDamage"(arg0: $LivingDamageEvent$Type): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FalchionBless$Type = ($FalchionBless);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FalchionBless_ = $FalchionBless$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$SinStunImmunity$SinStunImmunityEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $SinStunImmunity$SinStunImmunityEffect extends $MobEffect {

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SinStunImmunity$SinStunImmunityEffect$Type = ($SinStunImmunity$SinStunImmunityEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SinStunImmunity$SinStunImmunityEffect_ = $SinStunImmunity$SinStunImmunityEffect$Type;
}}
declare module "packages/com/hm/efn/item/custom/$YamatoItem" {
import {$LivingDamageEvent, $LivingDamageEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDamageEvent"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$LivingKnockBackEvent, $LivingKnockBackEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingKnockBackEvent"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$LivingEvent$LivingJumpEvent, $LivingEvent$LivingJumpEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent$LivingJumpEvent"
import {$LivingFallEvent, $LivingFallEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingFallEvent"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$LivingEvent$LivingTickEvent, $LivingEvent$LivingTickEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent$LivingTickEvent"

export class $YamatoItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public static "onLivingUpdate"(arg0: $LivingEvent$LivingTickEvent$Type): void
public static "onPlayerJump"(arg0: $LivingEvent$LivingJumpEvent$Type): void
public static "getKillCount"(arg0: $ItemStack$Type): integer
public static "getTotalDamage"(arg0: $ItemStack$Type): float
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isDamageable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public static "onLivingDeath"(arg0: $LivingDeathEvent$Type): void
public static "onLivingKnockBack"(arg0: $LivingKnockBackEvent$Type): void
public static "onLivingFall"(arg0: $LivingFallEvent$Type): void
public static "onLivingDamage"(arg0: $LivingDamageEvent$Type): void
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YamatoItem$Type = ($YamatoItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YamatoItem_ = $YamatoItem$Type;
}}
declare module "packages/com/hm/efn/item/geo/$ExcaliburItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ExcaliburItem extends $WeaponItem implements $GeoItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isDamageable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "isPerspectiveAware"(): boolean
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public "getTick"(arg0: any): double
public "animatableCacheOverride"(): $AnimatableInstanceCache
public static "getId"(arg0: $ItemStack$Type): long
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
public "stopTriggeredAnim"(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public "stopTriggeredAnim"(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string, arg4: $PacketDistributor$PacketTarget$Type): void
public "triggerArmorAnim"(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public "stopTriggeredArmorAnim"(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
public "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
public "getBoneResetTime"(): double
public "shouldPlayAnimsWhileGamePaused"(): boolean
get "enchantmentValue"(): integer
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExcaliburItem$Type = ($ExcaliburItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExcaliburItem_ = $ExcaliburItem$Type;
}}
declare module "packages/com/hm/efn/item/custom/$PioneerItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PioneerItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isDamageable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PioneerItem$Type = ($PioneerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PioneerItem_ = $PioneerItem$Type;
}}
declare module "packages/com/hm/efn/item/custom/$NFShortSwordTwoItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NFShortSwordTwoItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isDamageable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NFShortSwordTwoItem$Type = ($NFShortSwordTwoItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NFShortSwordTwoItem_ = $NFShortSwordTwoItem$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$BloodBlessingsEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $BloodBlessingsEffect extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BloodBlessingsEffect$Type = ($BloodBlessingsEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BloodBlessingsEffect_ = $BloodBlessingsEffect$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$VulnerabilityEffect" {
import {$LivingDamageEvent, $LivingDamageEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDamageEvent"
import {$MobEffectEvent$Remove, $MobEffectEvent$Remove$Type} from "packages/net/minecraftforge/event/entity/living/$MobEffectEvent$Remove"
import {$MobEffectEvent$Expired, $MobEffectEvent$Expired$Type} from "packages/net/minecraftforge/event/entity/living/$MobEffectEvent$Expired"
import {$MobEffectEvent$Added, $MobEffectEvent$Added$Type} from "packages/net/minecraftforge/event/entity/living/$MobEffectEvent$Added"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $VulnerabilityEffect extends $MobEffect {

constructor()

public static "onEffectExpired"(arg0: $MobEffectEvent$Expired$Type): void
public static "hasMurasamakill"(arg0: $LivingEntity$Type): boolean
public static "onLivingDamage"(arg0: $LivingDamageEvent$Type): void
public static "onEffectAdded"(arg0: $MobEffectEvent$Added$Type): void
public static "onEffectRemoved"(arg0: $MobEffectEvent$Remove$Type): void
public "isBeneficial"(): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "isInstantenous"(): boolean
get "beneficial"(): boolean
get "instantenous"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VulnerabilityEffect$Type = ($VulnerabilityEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VulnerabilityEffect_ = $VulnerabilityEffect$Type;
}}
declare module "packages/com/hm/efn/item/custom/$RuinsgreatswordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RuinsgreatswordItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isDamageable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuinsgreatswordItem$Type = ($RuinsgreatswordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuinsgreatswordItem_ = $RuinsgreatswordItem$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$Shiver" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $Shiver extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Shiver$Type = ($Shiver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Shiver_ = $Shiver$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$GradualHeal" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $GradualHeal extends $MobEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GradualHeal$Type = ($GradualHeal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GradualHeal_ = $GradualHeal$Type;
}}
declare module "packages/com/hm/efn/item/custom/$RuinfighterItem$Leggings" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$RuinfighterItem, $RuinfighterItem$Type} from "packages/com/hm/efn/item/custom/$RuinfighterItem"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RuinfighterItem$Leggings extends $RuinfighterItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuinfighterItem$Leggings$Type = ($RuinfighterItem$Leggings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuinfighterItem$Leggings_ = $RuinfighterItem$Leggings$Type;
}}
declare module "packages/com/hm/efn/mixin/$CameraAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CameraAccessor {

 "invokeSetPosition"(arg0: double, arg1: double, arg2: double): void

(arg0: double, arg1: double, arg2: double): void
}

export namespace $CameraAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraAccessor$Type = ($CameraAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CameraAccessor_ = $CameraAccessor$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$KnockBackResistanceEffect$ResistanceEffect" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $KnockBackResistanceEffect$ResistanceEffect extends $MobEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KnockBackResistanceEffect$ResistanceEffect$Type = ($KnockBackResistanceEffect$ResistanceEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KnockBackResistanceEffect$ResistanceEffect_ = $KnockBackResistanceEffect$ResistanceEffect$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$AttackDamageIncreaseEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $AttackDamageIncreaseEffect extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttackDamageIncreaseEffect$Type = ($AttackDamageIncreaseEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttackDamageIncreaseEffect_ = $AttackDamageIncreaseEffect$Type;
}}
declare module "packages/com/hm/efn/enchantment/$YamatoGuard" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $YamatoGuard extends $Enchantment {
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "isTreasureOnly"(): boolean
public "isTradeable"(): boolean
public "isDiscoverable"(): boolean
public "isAllowedOnBooks"(): boolean
get "maxLevel"(): integer
get "treasureOnly"(): boolean
get "tradeable"(): boolean
get "discoverable"(): boolean
get "allowedOnBooks"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YamatoGuard$Type = ($YamatoGuard);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YamatoGuard_ = $YamatoGuard$Type;
}}
declare module "packages/com/hm/efn/item/custom/$DuskFireArmorItem$Helmet" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$DuskFireArmorItem, $DuskFireArmorItem$Type} from "packages/com/hm/efn/item/custom/$DuskFireArmorItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $DuskFireArmorItem$Helmet extends $DuskFireArmorItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DuskFireArmorItem$Helmet$Type = ($DuskFireArmorItem$Helmet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DuskFireArmorItem$Helmet_ = $DuskFireArmorItem$Helmet$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$DieMarkEffect" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $DieMarkEffect extends $MobEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DieMarkEffect$Type = ($DieMarkEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DieMarkEffect_ = $DieMarkEffect$Type;
}}
declare module "packages/com/hm/efn/item/custom/$HfMurasamaItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LivingKnockBackEvent, $LivingKnockBackEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingKnockBackEvent"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$LivingEvent$LivingJumpEvent, $LivingEvent$LivingJumpEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent$LivingJumpEvent"
import {$LivingFallEvent, $LivingFallEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingFallEvent"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$LivingEvent$LivingTickEvent, $LivingEvent$LivingTickEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent$LivingTickEvent"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $HfMurasamaItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public static "onLivingUpdate"(arg0: $LivingEvent$LivingTickEvent$Type): void
public static "onPlayerJump"(arg0: $LivingEvent$LivingJumpEvent$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isDamageable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public static "onLivingKnockBack"(arg0: $LivingKnockBackEvent$Type): void
public static "onLivingFall"(arg0: $LivingFallEvent$Type): void
public "canEquip"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: $Entity$Type): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HfMurasamaItem$Type = ($HfMurasamaItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HfMurasamaItem_ = $HfMurasamaItem$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$ComboExecuteWindow" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $ComboExecuteWindow extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComboExecuteWindow$Type = ($ComboExecuteWindow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComboExecuteWindow_ = $ComboExecuteWindow$Type;
}}
declare module "packages/com/hm/efn/item/custom/$DuskFireArmorItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $DuskFireArmorItem extends $ArmorItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "isDamageable"(arg0: $ItemStack$Type): boolean
public "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DuskFireArmorItem$Type = ($DuskFireArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DuskFireArmorItem_ = $DuskFireArmorItem$Type;
}}
declare module "packages/com/hm/efn/item/custom/$CoTachiItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CoTachiItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isDamageable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoTachiItem$Type = ($CoTachiItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoTachiItem_ = $CoTachiItem$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$StopEffect" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $StopEffect extends $MobEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StopEffect$Type = ($StopEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StopEffect_ = $StopEffect$Type;
}}
declare module "packages/com/hm/efn/item/custom/$HfBladeItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LivingKnockBackEvent, $LivingKnockBackEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingKnockBackEvent"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$LivingEvent$LivingJumpEvent, $LivingEvent$LivingJumpEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent$LivingJumpEvent"
import {$LivingFallEvent, $LivingFallEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingFallEvent"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$LivingEvent$LivingTickEvent, $LivingEvent$LivingTickEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent$LivingTickEvent"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $HfBladeItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public static "onLivingUpdate"(arg0: $LivingEvent$LivingTickEvent$Type): void
public static "onPlayerJump"(arg0: $LivingEvent$LivingJumpEvent$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isDamageable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public static "onLivingKnockBack"(arg0: $LivingKnockBackEvent$Type): void
public static "onLivingFall"(arg0: $LivingFallEvent$Type): void
public "canEquip"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: $Entity$Type): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HfBladeItem$Type = ($HfBladeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HfBladeItem_ = $HfBladeItem$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$Yamato$YamatoEffect" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $Yamato$YamatoEffect extends $MobEffect {

constructor()

public static "hasYamatoSkill"(arg0: $LivingEntity$Type): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Yamato$YamatoEffect$Type = ($Yamato$YamatoEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Yamato$YamatoEffect_ = $Yamato$YamatoEffect$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$MurasamaSheathEffect" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $MurasamaSheathEffect extends $MobEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MurasamaSheathEffect$Type = ($MurasamaSheathEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MurasamaSheathEffect_ = $MurasamaSheathEffect$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$InvincibilityEffect$InvincibilityMobEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $InvincibilityEffect$InvincibilityMobEffect extends $MobEffect {

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvincibilityEffect$InvincibilityMobEffect$Type = ($InvincibilityEffect$InvincibilityMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InvincibilityEffect$InvincibilityMobEffect_ = $InvincibilityEffect$InvincibilityMobEffect$Type;
}}
declare module "packages/com/hm/efn/enchantment/$YamatoHeavyRain" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $YamatoHeavyRain extends $Enchantment {
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "isTreasureOnly"(): boolean
public "isTradeable"(): boolean
public "isDiscoverable"(): boolean
public "isAllowedOnBooks"(): boolean
get "maxLevel"(): integer
get "treasureOnly"(): boolean
get "tradeable"(): boolean
get "discoverable"(): boolean
get "allowedOnBooks"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YamatoHeavyRain$Type = ($YamatoHeavyRain);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YamatoHeavyRain_ = $YamatoHeavyRain$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$MeenLance$MeenLanceEffect" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $MeenLance$MeenLanceEffect extends $MobEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeenLance$MeenLanceEffect$Type = ($MeenLance$MeenLanceEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MeenLance$MeenLanceEffect_ = $MeenLance$MeenLanceEffect$Type;
}}
declare module "packages/com/hm/efn/item/custom/$CrescentMoonItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CrescentMoonItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isDamageable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrescentMoonItem$Type = ($CrescentMoonItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrescentMoonItem_ = $CrescentMoonItem$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$GuardPunctureEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $GuardPunctureEffect extends $MobEffect {

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuardPunctureEffect$Type = ($GuardPunctureEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuardPunctureEffect_ = $GuardPunctureEffect$Type;
}}
declare module "packages/com/hm/efn/item/custom/$ScytheItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ScytheItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isDamageable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScytheItem$Type = ($ScytheItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScytheItem_ = $ScytheItem$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$FalchionVulnerability" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $FalchionVulnerability extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FalchionVulnerability$Type = ($FalchionVulnerability);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FalchionVulnerability_ = $FalchionVulnerability$Type;
}}
declare module "packages/com/hm/efn/item/custom/$AetherialDuskDualSword_MainHandItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AetherialDuskDualSword_MainHandItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isDamageable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AetherialDuskDualSword_MainHandItem$Type = ($AetherialDuskDualSword_MainHandItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AetherialDuskDualSword_MainHandItem_ = $AetherialDuskDualSword_MainHandItem$Type;
}}
declare module "packages/com/hm/efn/item/custom/$RuinfighterItem$Helmet" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$RuinfighterItem, $RuinfighterItem$Type} from "packages/com/hm/efn/item/custom/$RuinfighterItem"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RuinfighterItem$Helmet extends $RuinfighterItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuinfighterItem$Helmet$Type = ($RuinfighterItem$Helmet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuinfighterItem$Helmet_ = $RuinfighterItem$Helmet$Type;
}}
declare module "packages/com/hm/efn/item/custom/$AirTachiItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AirTachiItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isDamageable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AirTachiItem$Type = ($AirTachiItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AirTachiItem_ = $AirTachiItem$Type;
}}
declare module "packages/com/hm/efn/item/custom/$BroadBladeItem" {
import {$MobEffectEvent$Applicable, $MobEffectEvent$Applicable$Type} from "packages/net/minecraftforge/event/entity/living/$MobEffectEvent$Applicable"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$LivingKnockBackEvent, $LivingKnockBackEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingKnockBackEvent"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$IAvalonAnimationItem, $IAvalonAnimationItem$Type} from "packages/com/merlin204/avalon/item/animationitem/$IAvalonAnimationItem"
import {$Armatures$ArmatureAccessor, $Armatures$ArmatureAccessor$Type} from "packages/yesman/epicfight/gameasset/$Armatures$ArmatureAccessor"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BroadBladeItem extends $WeaponItem implements $IAvalonAnimationItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public static "getKillCount"(arg0: $ItemStack$Type): integer
public static "onEffectApplied"(arg0: $MobEffectEvent$Applicable$Type): void
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isDamageable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "getArmature"(): $Armatures$ArmatureAccessor<(any)>
public static "onLivingDeath"(arg0: $LivingDeathEvent$Type): void
public static "onLivingKnockBack"(arg0: $LivingKnockBackEvent$Type): void
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "setUseAnimationArmature"(arg0: integer, arg1: boolean): void
public "getHitBox"(): $Vec2
public "useAnimationArmature"(arg0: integer): boolean
get "enchantmentValue"(): integer
get "armature"(): $Armatures$ArmatureAccessor<(any)>
get "hitBox"(): $Vec2
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BroadBladeItem$Type = ($BroadBladeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BroadBladeItem_ = $BroadBladeItem$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$BloodExplosionEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $BloodExplosionEffect extends $MobEffect {

constructor()

public static "setAttacker"(arg0: $LivingEntity$Type, arg1: $Player$Type): void
public "getAttributeModifierValue"(arg0: integer, arg1: $AttributeModifier$Type): double
public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BloodExplosionEffect$Type = ($BloodExplosionEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BloodExplosionEffect_ = $BloodExplosionEffect$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$CurseOfBloodEffect" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $CurseOfBloodEffect extends $MobEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurseOfBloodEffect$Type = ($CurseOfBloodEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurseOfBloodEffect_ = $CurseOfBloodEffect$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$Replay" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $Replay extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Replay$Type = ($Replay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Replay_ = $Replay$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$BypassDodgeEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $BypassDodgeEffect extends $MobEffect {

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BypassDodgeEffect$Type = ($BypassDodgeEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BypassDodgeEffect_ = $BypassDodgeEffect$Type;
}}
declare module "packages/com/hm/efn/item/custom/$DuskFireArmorItem$Chestplate" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$DuskFireArmorItem, $DuskFireArmorItem$Type} from "packages/com/hm/efn/item/custom/$DuskFireArmorItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $DuskFireArmorItem$Chestplate extends $DuskFireArmorItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DuskFireArmorItem$Chestplate$Type = ($DuskFireArmorItem$Chestplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DuskFireArmorItem$Chestplate_ = $DuskFireArmorItem$Chestplate$Type;
}}
declare module "packages/com/hm/efn/enchantment/$YamatoJudgementCutEnd" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $YamatoJudgementCutEnd extends $Enchantment {
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "isTreasureOnly"(): boolean
public "isTradeable"(): boolean
public "isDiscoverable"(): boolean
public "isAllowedOnBooks"(): boolean
get "maxLevel"(): integer
get "treasureOnly"(): boolean
get "tradeable"(): boolean
get "discoverable"(): boolean
get "allowedOnBooks"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YamatoJudgementCutEnd$Type = ($YamatoJudgementCutEnd);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YamatoJudgementCutEnd_ = $YamatoJudgementCutEnd$Type;
}}
declare module "packages/com/hm/efn/mobeffects/$VerticalStop" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $VerticalStop extends $MobEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VerticalStop$Type = ($VerticalStop);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VerticalStop_ = $VerticalStop$Type;
}}
declare module "packages/com/hm/efn/enchantment/$YamatoDoppelganger" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $YamatoDoppelganger extends $Enchantment {
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "isTreasureOnly"(): boolean
public "isTradeable"(): boolean
public "isDiscoverable"(): boolean
public "isAllowedOnBooks"(): boolean
get "maxLevel"(): integer
get "treasureOnly"(): boolean
get "tradeable"(): boolean
get "discoverable"(): boolean
get "allowedOnBooks"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YamatoDoppelganger$Type = ($YamatoDoppelganger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YamatoDoppelganger_ = $YamatoDoppelganger$Type;
}}
declare module "packages/com/hm/efn/item/custom/$Meen_SpearItem" {
import {$LivingDamageEvent, $LivingDamageEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDamageEvent"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$LivingAttackEvent, $LivingAttackEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingAttackEvent"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Meen_SpearItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isDamageable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public static "onLivingDamage"(arg0: $LivingDamageEvent$Type): void
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public static "onLivingAttack"(arg0: $LivingAttackEvent$Type): void
public "getDefaultInstance"(): $ItemStack
get "enchantmentValue"(): integer
get "defaultInstance"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Meen_SpearItem$Type = ($Meen_SpearItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Meen_SpearItem_ = $Meen_SpearItem$Type;
}}
