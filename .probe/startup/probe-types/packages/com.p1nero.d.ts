declare module "packages/com/p1nero/dpr/mixin/$MobEffectInstanceAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MobEffectInstanceAccessor {

 "setDuration"(arg0: integer): void

(arg0: integer): void
}

export namespace $MobEffectInstanceAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectInstanceAccessor$Type = ($MobEffectInstanceAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobEffectInstanceAccessor_ = $MobEffectInstanceAccessor$Type;
}}
declare module "packages/com/p1nero/dpr/mob_effect/$StaminaBoost" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $StaminaBoost extends $MobEffect {


public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StaminaBoost$Type = ($StaminaBoost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StaminaBoost_ = $StaminaBoost$Type;
}}
