declare module "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulator$InverseKinematicsObject" {
import {$InverseKinematicsSimulator$InverseKinematicsBuilder, $InverseKinematicsSimulator$InverseKinematicsBuilder$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulator$InverseKinematicsBuilder"
import {$Vec3f, $Vec3f$Type} from "packages/yesman/epicfight/api/utils/math/$Vec3f"
import {$JointTransform, $JointTransform$Type} from "packages/yesman/epicfight/api/animation/$JointTransform"
import {$InverseKinematicsSimulator$BakedInverseKinematicsDefinition, $InverseKinematicsSimulator$BakedInverseKinematicsDefinition$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulator$BakedInverseKinematicsDefinition"
import {$InverseKinematicsProvider, $InverseKinematicsProvider$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsProvider"
import {$SimulationObject, $SimulationObject$Type} from "packages/yesman/epicfight/api/physics/$SimulationObject"
import {$TransformSheet, $TransformSheet$Type} from "packages/yesman/epicfight/api/animation/$TransformSheet"
import {$InverseKinematicsSimulatable, $InverseKinematicsSimulatable$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulatable"

export class $InverseKinematicsSimulator$InverseKinematicsObject implements $SimulationObject<($InverseKinematicsSimulator$InverseKinematicsBuilder), ($InverseKinematicsProvider), ($InverseKinematicsSimulatable)> {

constructor(arg0: $InverseKinematicsSimulator$InverseKinematicsBuilder$Type)

public "getTipPosition"(arg0: float): $Vec3f
public "isOnWorking"(): boolean
public "isTouchingGround"(): boolean
public "getTipTransform"(arg0: float): $JointTransform
public "tick"(): void
public "getAnimation"(): $TransformSheet
public "getTime"(arg0: float): float
public "getDestination"(): $Vec3f
public "start"(arg0: $Vec3f$Type, arg1: $TransformSheet$Type, arg2: float): void
public "newTargetPosition"(arg0: $Vec3f$Type): void
public "getIKDefinition"(): $InverseKinematicsSimulator$BakedInverseKinematicsDefinition
get "onWorking"(): boolean
get "touchingGround"(): boolean
get "animation"(): $TransformSheet
get "destination"(): $Vec3f
get "iKDefinition"(): $InverseKinematicsSimulator$BakedInverseKinematicsDefinition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InverseKinematicsSimulator$InverseKinematicsObject$Type = ($InverseKinematicsSimulator$InverseKinematicsObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InverseKinematicsSimulator$InverseKinematicsObject_ = $InverseKinematicsSimulator$InverseKinematicsObject$Type;
}}
declare module "packages/yesman/epicfight/client/events/engine/$ControlEngine" {
import {$EntityState, $EntityState$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState"
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$Options, $Options$Type} from "packages/net/minecraft/client/$Options"
import {$SkillSlot, $SkillSlot$Type} from "packages/yesman/epicfight/skill/$SkillSlot"
import {$LocalPlayerPatch, $LocalPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch"

export class $ControlEngine {
 "options": $Options

constructor()

public "setPlayerPatch"(arg0: $LocalPlayerPatch$Type): void
public "canPlayerMove"(arg0: $EntityState$Type): boolean
public "canPlayerRotate"(arg0: $EntityState$Type): boolean
public static "shouldDisableSwapHandItems"(): boolean
public "lockHotkeys"(): void
public "setHoldingKey"(arg0: $SkillSlot$Type, arg1: $KeyMapping$Type): void
/**
 * 
 * @deprecated
 */
public static "isKeyDown"(arg0: $KeyMapping$Type): boolean
/**
 * 
 * @deprecated
 */
public static "makeUnpressed"(arg0: $KeyMapping$Type): void
/**
 * 
 * @deprecated
 */
public static "setKeyBind"(arg0: $KeyMapping$Type, arg1: boolean): void
public static "setSprintingKeyStateNotDown"(): void
public "moverToggling"(): boolean
public "sneakToggling"(): boolean
public "attackToggling"(): boolean
public "weaponInnateToggling"(): boolean
public "releaseAllServedKeys"(): void
public "unlockHotkeys"(): void
public "addPacketToSend"(arg0: any): void
public "getPlayerPatch"(): $LocalPlayerPatch
public static "isHotbarCyclingDisabled"(): boolean
public "isSwitchOrDropBlocked"(): boolean
public "handleEpicFightKeyMappings"(): void
public static "shouldDisableVanillaAttack"(): boolean
set "playerPatch"(value: $LocalPlayerPatch$Type)
get "playerPatch"(): $LocalPlayerPatch
get "hotbarCyclingDisabled"(): boolean
get "switchOrDropBlocked"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControlEngine$Type = ($ControlEngine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControlEngine_ = $ControlEngine$Type;
}}
declare module "packages/yesman/epicfight/compat/kubejs/skill/$CustomSkill$OnScreenContext" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$LocalPlayerPatch, $LocalPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch"

export class $CustomSkill$OnScreenContext extends $Record {

constructor(getLocalPlayerPatch: $LocalPlayerPatch$Type, getResolutionX: float, getResolutionY: float)

public "getLocalPlayerPatch"(): $LocalPlayerPatch
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getResolutionX"(): float
public "getResolutionY"(): float
get "localPlayerPatch"(): $LocalPlayerPatch
get "resolutionX"(): float
get "resolutionY"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSkill$OnScreenContext$Type = ($CustomSkill$OnScreenContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSkill$OnScreenContext_ = $CustomSkill$OnScreenContext$Type;
}}
declare module "packages/yesman/epicfight/api/utils/math/$ValueModifier" {
import {$ValueModifier$Unified, $ValueModifier$Unified$Type} from "packages/yesman/epicfight/api/utils/math/$ValueModifier$Unified"
import {$ValueModifier$ResultCalculator, $ValueModifier$ResultCalculator$Type} from "packages/yesman/epicfight/api/utils/math/$ValueModifier$ResultCalculator"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export interface $ValueModifier {

 "attach"(arg0: $ValueModifier$ResultCalculator$Type): void

(arg0: float): $ValueModifier
}

export namespace $ValueModifier {
const CODEC: $Codec<($ValueModifier$Unified)>
function adder(arg0: float): $ValueModifier
function calculator(): $ValueModifier$ResultCalculator
function setter(arg0: float): $ValueModifier
function multiplier(arg0: float): $ValueModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueModifier$Type = ($ValueModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueModifier_ = $ValueModifier$Type;
}}
declare module "packages/yesman/epicfight/api/physics/$SimulationObject" {
import {$SimulationObject$SimulationObjectBuilder, $SimulationObject$SimulationObjectBuilder$Type} from "packages/yesman/epicfight/api/physics/$SimulationObject$SimulationObjectBuilder"
import {$SimulationProvider, $SimulationProvider$Type} from "packages/yesman/epicfight/api/physics/$SimulationProvider"

export interface $SimulationObject<B extends $SimulationObject$SimulationObjectBuilder, PV extends $SimulationProvider<(O), (any), (B), (PV)>, O> {

}

export namespace $SimulationObject {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimulationObject$Type<B, PV, O> = ($SimulationObject<(B), (PV), (O)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimulationObject_<B, PV, O> = $SimulationObject$Type<(B), (PV), (O)>;
}}
declare module "packages/yesman/epicfight/world/damagesource/$StunType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $StunType extends $Enum<($StunType)> {
static readonly "NONE": $StunType
static readonly "SHORT": $StunType
static readonly "LONG": $StunType
static readonly "HOLD": $StunType
static readonly "KNOCKDOWN": $StunType
static readonly "NEUTRALIZE": $StunType
static readonly "FALL": $StunType


public "hasFixedStunTime"(): boolean
public "toString"(): string
public static "values"(): ($StunType)[]
public static "valueOf"(arg0: string): $StunType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StunType$Type = (("neutralize") | ("knockdown") | ("fall") | ("short") | ("none") | ("long") | ("hold")) | ($StunType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StunType_ = $StunType$Type;
}}
declare module "packages/yesman/epicfight/api/client/forgeevent/$UpdatePlayerMotionEvent$CompositeLayer" {
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$UpdatePlayerMotionEvent, $UpdatePlayerMotionEvent$Type} from "packages/yesman/epicfight/api/client/forgeevent/$UpdatePlayerMotionEvent"
import {$AbstractClientPlayerPatch, $AbstractClientPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$AbstractClientPlayerPatch"

export class $UpdatePlayerMotionEvent$CompositeLayer extends $UpdatePlayerMotionEvent {

constructor()
constructor(arg0: $AbstractClientPlayerPatch$Type<(any)>, arg1: $LivingMotion$Type)

public "getListenerList"(): $ListenerList
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "listenerList"(): $ListenerList
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpdatePlayerMotionEvent$CompositeLayer$Type = ($UpdatePlayerMotionEvent$CompositeLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpdatePlayerMotionEvent$CompositeLayer_ = $UpdatePlayerMotionEvent$CompositeLayer$Type;
}}
declare module "packages/yesman/epicfight/skill/$SkillContainer" {
import {$SkillSlot, $SkillSlot$Type} from "packages/yesman/epicfight/skill/$SkillSlot"
import {$SkillCastEvent, $SkillCastEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$SkillCastEvent"
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ControlEngine, $ControlEngine$Type} from "packages/yesman/epicfight/client/events/engine/$ControlEngine"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$SPChangeSkill, $SPChangeSkill$Type} from "packages/yesman/epicfight/network/server/$SPChangeSkill"
import {$SkillDataManager, $SkillDataManager$Type} from "packages/yesman/epicfight/skill/$SkillDataManager"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"
import {$LocalPlayerPatch, $LocalPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch"
import {$SPSetRemotePlayerSkill, $SPSetRemotePlayerSkill$Type} from "packages/yesman/epicfight/network/server/$SPSetRemotePlayerSkill"

export class $SkillContainer {

constructor(arg0: $PlayerPatch$Type<(any)>, arg1: $SkillSlot$Type)

public "setSkill"(arg0: $Skill$Type): boolean
public "setSkill"(arg0: $Skill$Type, arg1: boolean): boolean
public "isDisabled"(): boolean
public "setResource"(arg0: float): void
public "getMaxResource"(): float
public "isActivated"(): boolean
public "setMaxDuration"(arg0: integer): void
public "setMaxResource"(arg0: float): void
public "transferDataTo"(arg0: $SkillContainer$Type): void
public "requestCancel"(arg0: $ServerPlayerPatch$Type, arg1: $FriendlyByteBuf$Type): boolean
public "requestHold"(arg0: $ServerPlayerPatch$Type, arg1: $FriendlyByteBuf$Type): boolean
public "getNeededResource"(): float
public "getDurationRatio"(arg0: float): float
public "onReplaceCooldown"(): boolean
public "getReplaceCooldown"(): integer
public "createSyncPacketToLocalPlayer"(): $SPChangeSkill
public "createSyncPacketToRemotePlayer"(): $SPSetRemotePlayerSkill
public "getSlotId"(): integer
public "getServerExecutor"(): $ServerPlayerPatch
public "getClientExecutor"(): $LocalPlayerPatch
public "getRemainDuration"(): integer
public "setDisabled"(arg0: boolean): void
public "setSkillRemote"(arg0: $Skill$Type): void
public "hasSkill"(arg0: $Skill$Type): boolean
public "hasSkill"(): boolean
public "setReplaceCooldown"(arg0: integer): void
public "sendCastRequest"(arg0: $LocalPlayerPatch$Type, arg1: $ControlEngine$Type): $SkillCastEvent
public "sendCancelRequest"(arg0: $LocalPlayerPatch$Type, arg1: $ControlEngine$Type): void
public "requestCasting"(arg0: $ServerPlayerPatch$Type, arg1: $FriendlyByteBuf$Type): boolean
public "resetValues"(): void
public "isFull"(): boolean
public "getExecutor"(): $PlayerPatch<(any)>
public "setDuration"(arg0: integer): void
public "equals"(arg0: any): boolean
public "update"(): void
public "isEmpty"(): boolean
public "getResource"(): float
public "getResource"(arg0: float): float
public "canUse"(arg0: $PlayerPatch$Type<(any)>, arg1: $SkillCastEvent$Type): boolean
public "getSlot"(): $SkillSlot
public "getStack"(): integer
public "setStack"(arg0: integer): void
public "activate"(): void
public "deactivate"(): void
public "getSkill"(): $Skill
public "getDataManager"(): $SkillDataManager
set "skill"(value: $Skill$Type)
get "disabled"(): boolean
set "resource"(value: float)
get "maxResource"(): float
get "activated"(): boolean
set "maxDuration"(value: integer)
set "maxResource"(value: float)
get "neededResource"(): float
get "replaceCooldown"(): integer
get "slotId"(): integer
get "serverExecutor"(): $ServerPlayerPatch
get "clientExecutor"(): $LocalPlayerPatch
get "remainDuration"(): integer
set "disabled"(value: boolean)
set "skillRemote"(value: $Skill$Type)
set "replaceCooldown"(value: integer)
get "full"(): boolean
get "executor"(): $PlayerPatch<(any)>
set "duration"(value: integer)
get "empty"(): boolean
get "resource"(): float
get "slot"(): $SkillSlot
get "stack"(): integer
set "stack"(value: integer)
get "skill"(): $Skill
get "dataManager"(): $SkillDataManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillContainer$Type = ($SkillContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillContainer_ = $SkillContainer$Type;
}}
declare module "packages/yesman/epicfight/api/animation/property/$AnimationParameters" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $AnimationParameters<A, B, C, D, E, F, G, H, I, J> extends $Record {

constructor(first: A, second: B, third: C, fourth: D, fifth: E, sixth: F, seventh: G, eighth: H, ninth: I, tenth: J)

public "fourth"(): D
public static "addParameter"<A, B, C, D, E, F, G, H, I, J, N>(arg0: $AnimationParameters$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J)>, arg1: N): $AnimationParameters<(any), (any), (any), (any), (any), (any), (any), (any), (any), (any)>
public "fifth"(): E
public "sixth"(): F
public "seventh"(): G
public "eighth"(): H
public "ninth"(): I
public "tenth"(): J
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"<A, B, C, D, E, F>(arg0: A, arg1: B, arg2: C, arg3: D, arg4: E, arg5: F): $AnimationParameters<(A), (B), (C), (D), (E), (F), (void), (void), (void), (void)>
public static "of"<A, B, C, D, E>(arg0: A, arg1: B, arg2: C, arg3: D, arg4: E): $AnimationParameters<(A), (B), (C), (D), (E), (void), (void), (void), (void), (void)>
public static "of"<A, B, C, D>(arg0: A, arg1: B, arg2: C, arg3: D): $AnimationParameters<(A), (B), (C), (D), (void), (void), (void), (void), (void), (void)>
public static "of"<A>(arg0: A): $AnimationParameters<(A), (void), (void), (void), (void), (void), (void), (void), (void), (void)>
public static "of"<A, B>(arg0: A, arg1: B): $AnimationParameters<(A), (B), (void), (void), (void), (void), (void), (void), (void), (void)>
public static "of"<A, B, C>(arg0: A, arg1: B, arg2: C): $AnimationParameters<(A), (B), (C), (void), (void), (void), (void), (void), (void), (void)>
public static "of"<A, B, C, D, E, F, G, H, I, J>(arg0: A, arg1: B, arg2: C, arg3: D, arg4: E, arg5: F, arg6: G, arg7: H, arg8: I, arg9: J): $AnimationParameters<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J)>
public static "of"<A, B, C, D, E, F, G, H>(arg0: A, arg1: B, arg2: C, arg3: D, arg4: E, arg5: F, arg6: G, arg7: H): $AnimationParameters<(A), (B), (C), (D), (E), (F), (G), (H), (void), (void)>
public static "of"<A, B, C, D, E, F, G>(arg0: A, arg1: B, arg2: C, arg3: D, arg4: E, arg5: F, arg6: G): $AnimationParameters<(A), (B), (C), (D), (E), (F), (G), (void), (void), (void)>
public static "of"<A, B, C, D, E, F, G, H, I>(arg0: A, arg1: B, arg2: C, arg3: D, arg4: E, arg5: F, arg6: G, arg7: H, arg8: I): $AnimationParameters<(A), (B), (C), (D), (E), (F), (G), (H), (I), (void)>
public "first"(): A
public "second"(): B
public "third"(): C
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationParameters$Type<A, B, C, D, E, F, G, H, I, J> = ($AnimationParameters<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationParameters_<A, B, C, D, E, F, G, H, I, J> = $AnimationParameters$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J)>;
}}
declare module "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$HitParticleType, $HitParticleType$Type} from "packages/yesman/epicfight/particle/$HitParticleType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AttackAnimation, $AttackAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$AttackAnimation"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GuardSkill, $GuardSkill$Type} from "packages/yesman/epicfight/skill/guard/$GuardSkill"
import {$ComboCounterHandleEvent$Causal, $ComboCounterHandleEvent$Causal$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$ComboCounterHandleEvent$Causal"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuardSkill$BlockType, $GuardSkill$BlockType$Type} from "packages/yesman/epicfight/skill/guard/$GuardSkill$BlockType"
import {$CapabilityItem$Builder, $CapabilityItem$Builder$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem$Builder"
import {$Collider, $Collider$Type} from "packages/yesman/epicfight/api/collider/$Collider"
import {$CapabilityItem$ZoomInType, $CapabilityItem$ZoomInType$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem$ZoomInType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$WeaponCategory, $WeaponCategory$Type} from "packages/yesman/epicfight/world/capabilities/item/$WeaponCategory"
import {$AnimationManager$AnimationAccessor, $AnimationManager$AnimationAccessor$Type} from "packages/yesman/epicfight/api/animation/$AnimationManager$AnimationAccessor"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Style, $Style$Type} from "packages/yesman/epicfight/world/capabilities/item/$Style"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CapabilityItem {
static "EMPTY": $CapabilityItem


public "getLivingMotion"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $InteractionHand$Type): $LivingMotion
public "handleComboCounter"(arg0: $ComboCounterHandleEvent$Causal$Type, arg1: $PlayerPatch$Type<(any)>, arg2: $AnimationManager$AnimationAccessor$Type<(any)>, arg3: integer): integer
public "getAutoAttackMotion"(arg0: $PlayerPatch$Type<(any)>): $List<($AnimationManager$AnimationAccessor<(any)>)>
public "getZoomInType"(): $CapabilityItem$ZoomInType
public "getUseAnimation"(arg0: $LivingEntityPatch$Type<(any)>): $UseAnim
public "changeWeaponInnateSkill"(arg0: $PlayerPatch$Type<(any)>, arg1: $ItemStack$Type): void
public "getAllAttributeModifiers"(arg0: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getLivingMotionModifier"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $InteractionHand$Type): $Map<($LivingMotion), ($AnimationManager$AnimationAccessor<(any)>)>
public "modifyItemTooltip"(arg0: $ItemStack$Type, arg1: $List$Type<($Component$Type)>, arg2: $LivingEntityPatch$Type<(any)>): void
public "getDamageAttributesInCondition"(arg0: $Style$Type): $Map<($Attribute), ($AttributeModifier)>
/**
 * 
 * @deprecated
 */
public "getMountAttackMotion"(): $List<($AnimationManager$AnimationAccessor<(any)>)>
/**
 * 
 * @deprecated
 */
public "getPassiveSkill"(): $Skill
public "getGuardMotion"(arg0: $GuardSkill$Type, arg1: $GuardSkill$BlockType$Type, arg2: $PlayerPatch$Type<(any)>): $AnimationManager$AnimationAccessor<(any)>
/**
 * 
 * @deprecated
 */
public "shouldCancelCombo"(arg0: $LivingEntityPatch$Type<(any)>): boolean
/**
 * 
 * @deprecated
 */
public "availableOnHorse"(): boolean
public "canHoldInOffhandAlone"(): boolean
public static "getBasicAutoAttackMotion"(): $List<($AnimationManager$AnimationAccessor<(any)>)>
public "getInnateSkill"(arg0: $PlayerPatch$Type<(any)>, arg1: $ItemStack$Type): $Skill
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $LivingEntityPatch$Type<(any)>): $Multimap<($Attribute), ($AttributeModifier)>
public static "getAttributeModifiers"(arg0: $Attribute$Type, arg1: $EquipmentSlot$Type, arg2: $ItemStack$Type, arg3: $LivingEntityPatch$Type<(any)>): $List<($AttributeModifier)>
public "onStrike"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $AttackAnimation$Type): void
public "getHitSound"(): $SoundEvent
public "getSmashingSound"(): $SoundEvent
public "getHitParticle"(): $HitParticleType
public "getWeaponCollider"(): $Collider
public "getReach"(): float
public "checkOffhandValid"(arg0: $LivingEntityPatch$Type<(any)>): boolean
public "getStyle"(arg0: $LivingEntityPatch$Type<(any)>): $Style
public "getResult"(arg0: $ItemStack$Type): $CapabilityItem
public "isEmpty"(): boolean
public static "builder"(): $CapabilityItem$Builder
public "canBePlacedOffhand"(): boolean
public "getWeaponCategory"(): $WeaponCategory
get "zoomInType"(): $CapabilityItem$ZoomInType
get "mountAttackMotion"(): $List<($AnimationManager$AnimationAccessor<(any)>)>
get "passiveSkill"(): $Skill
get "basicAutoAttackMotion"(): $List<($AnimationManager$AnimationAccessor<(any)>)>
get "hitSound"(): $SoundEvent
get "smashingSound"(): $SoundEvent
get "hitParticle"(): $HitParticleType
get "weaponCollider"(): $Collider
get "reach"(): float
get "empty"(): boolean
get "weaponCategory"(): $WeaponCategory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityItem$Type = ($CapabilityItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityItem_ = $CapabilityItem$Type;
}}
declare module "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulator$InverseKinematicsDefinition" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$InverseKinematicsSimulator$BakedInverseKinematicsDefinition, $InverseKinematicsSimulator$BakedInverseKinematicsDefinition$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulator$BakedInverseKinematicsDefinition"
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$TransformSheet, $TransformSheet$Type} from "packages/yesman/epicfight/api/animation/$TransformSheet"
import {$IntIntPair, $IntIntPair$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntIntPair"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InverseKinematicsSimulator$InverseKinematicsDefinition extends $Record {

constructor(startJoint: $Joint$Type, endJoint: $Joint$Type, opponentJoint: $Joint$Type, clipAnimation: boolean, startFrame: integer, endFrame: integer, initialPoseFrame: integer, rayLeastHeight: float, touchingGround: (boolean)[])

public "clipAnimation"(): boolean
public "endJoint"(): $Joint
public "startJoint"(): $Joint
public "initialPoseFrame"(): integer
public "startFrame"(): integer
public "endFrame"(): integer
public "bake"(arg0: $AssetAccessor$Type<(any)>, arg1: $Map$Type<(string), ($TransformSheet$Type)>, arg2: boolean, arg3: boolean): $InverseKinematicsSimulator$BakedInverseKinematicsDefinition
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "create"(arg0: $Joint$Type, arg1: $Joint$Type, arg2: $Joint$Type, arg3: $IntIntPair$Type, arg4: float, arg5: integer, arg6: (boolean)[]): $InverseKinematicsSimulator$InverseKinematicsDefinition
public "rayLeastHeight"(): float
public "opponentJoint"(): $Joint
public "touchingGround"(): (boolean)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InverseKinematicsSimulator$InverseKinematicsDefinition$Type = ($InverseKinematicsSimulator$InverseKinematicsDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InverseKinematicsSimulator$InverseKinematicsDefinition_ = $InverseKinematicsSimulator$InverseKinematicsDefinition$Type;
}}
declare module "packages/yesman/epicfight/api/animation/$Joint" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Joint$HierarchicalJointAccessor$Builder, $Joint$HierarchicalJointAccessor$Builder$Type} from "packages/yesman/epicfight/api/animation/$Joint$HierarchicalJointAccessor$Builder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"

export class $Joint {
static readonly "EMPTY": $Joint

constructor(arg0: string, arg1: integer, arg2: $OpenMatrix4f$Type)

public "getSubJoints"(): $List<($Joint)>
public "getLocalTransform"(): $OpenMatrix4f
public "addSubJoints"(...arg0: ($Joint$Type)[]): void
public "removeSubJoints"(...arg0: ($Joint$Type)[]): void
public "getAllJoints"(): $List<($Joint)>
public "iterSubJoints"(arg0: $Consumer$Type<($Joint$Type)>): void
public "initOriginTransform"(arg0: $OpenMatrix4f$Type): void
public "getToOrigin"(): $OpenMatrix4f
public "getSubJoint"(arg0: integer): $Joint
public "printIncludingChildren"(): string
public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getId"(): integer
public "searchPath"(arg0: $Joint$HierarchicalJointAccessor$Builder$Type, arg1: string): $Joint$HierarchicalJointAccessor$Builder
get "subJoints"(): $List<($Joint)>
get "localTransform"(): $OpenMatrix4f
get "allJoints"(): $List<($Joint)>
get "toOrigin"(): $OpenMatrix4f
get "name"(): string
get "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Joint$Type = ($Joint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Joint_ = $Joint$Type;
}}
declare module "packages/yesman/epicfight/compat/kubejs/skill/$CustomSkill$DrawOnGuiContext" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BattleModeGui, $BattleModeGui$Type} from "packages/yesman/epicfight/client/gui/$BattleModeGui"
import {$SkillContainer, $SkillContainer$Type} from "packages/yesman/epicfight/skill/$SkillContainer"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $CustomSkill$DrawOnGuiContext extends $Record {

constructor(getGui: $BattleModeGui$Type, getContainer: $SkillContainer$Type, getGuiGraphics: $GuiGraphics$Type, getX: float, getY: float)

public "getGui"(): $BattleModeGui
public "getGuiGraphics"(): $GuiGraphics
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getY"(): float
public "getContainer"(): $SkillContainer
public "getX"(): float
get "gui"(): $BattleModeGui
get "guiGraphics"(): $GuiGraphics
get "y"(): float
get "container"(): $SkillContainer
get "x"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSkill$DrawOnGuiContext$Type = ($CustomSkill$DrawOnGuiContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSkill$DrawOnGuiContext_ = $CustomSkill$DrawOnGuiContext$Type;
}}
declare module "packages/yesman/epicfight/api/animation/types/$EntityState$StateFactor" {
import {$TypeFlexibleHashMap$TypeKey, $TypeFlexibleHashMap$TypeKey$Type} from "packages/yesman/epicfight/api/utils/datastruct/$TypeFlexibleHashMap$TypeKey"

export class $EntityState$StateFactor<T> implements $TypeFlexibleHashMap$TypeKey<(T)> {

constructor(arg0: string, arg1: T)

public "toString"(): string
public "defaultValue"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityState$StateFactor$Type<T> = ($EntityState$StateFactor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityState$StateFactor_<T> = $EntityState$StateFactor$Type<(T)>;
}}
declare module "packages/yesman/epicfight/api/animation/property/$AnimationEvent$Side" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AnimationEvent$Side extends $Enum<($AnimationEvent$Side)> {
static readonly "CLIENT": $AnimationEvent$Side
static readonly "SERVER": $AnimationEvent$Side
static readonly "BOTH": $AnimationEvent$Side
static readonly "LOCAL_CLIENT": $AnimationEvent$Side


public static "values"(): ($AnimationEvent$Side)[]
public static "valueOf"(arg0: string): $AnimationEvent$Side
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationEvent$Side$Type = (("server") | ("client") | ("local_client") | ("both")) | ($AnimationEvent$Side);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationEvent$Side_ = $AnimationEvent$Side$Type;
}}
declare module "packages/yesman/epicfight/api/client/model/$Mesh$DrawingFunction" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export interface $Mesh$DrawingFunction {

 "draw"(arg0: $VertexConsumer$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: integer, arg8: float, arg9: float, arg10: float, arg11: float, arg12: float, arg13: float, arg14: integer): void
 "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: $VertexConsumer$Type, arg3: float, arg4: float, arg5: float, arg6: float, arg7: integer, arg8: integer, arg9: boolean): void

(arg0: $Mesh$DrawingFunction$Type, arg1: $VertexConsumer$Type, arg2: $PoseStack$Pose$Type, arg3: $BakedQuad$Type, arg4: (float)[], arg5: float, arg6: float, arg7: float, arg8: float, arg9: (integer)[], arg10: integer, arg11: boolean): void
}

export namespace $Mesh$DrawingFunction {
const NEW_ENTITY: $Mesh$DrawingFunction
const POSITION_TEX: $Mesh$DrawingFunction
const POSITION_TEX_COLOR_NORMAL: $Mesh$DrawingFunction
const POSITION_TEX_COLOR_LIGHTMAP: $Mesh$DrawingFunction
const POSITION_COLOR_LIGHTMAP: $Mesh$DrawingFunction
const POSITION_COLOR_NORMAL: $Mesh$DrawingFunction
const POSITION_COLOR_TEX_LIGHTMAP: $Mesh$DrawingFunction
function putBulkDataWithDrawingFunction(arg0: $Mesh$DrawingFunction$Type, arg1: $VertexConsumer$Type, arg2: $PoseStack$Pose$Type, arg3: $BakedQuad$Type, arg4: (float)[], arg5: float, arg6: float, arg7: float, arg8: float, arg9: (integer)[], arg10: integer, arg11: boolean): void
function applyBakedLighting(arg0: integer, arg1: $ByteBuffer$Type): integer
function applyBakedNormals(arg0: $Vector3f$Type, arg1: $ByteBuffer$Type, arg2: $Matrix3f$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mesh$DrawingFunction$Type = ($Mesh$DrawingFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mesh$DrawingFunction_ = $Mesh$DrawingFunction$Type;
}}
declare module "packages/yesman/epicfight/api/client/model/$Mesh$RenderProperties" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Vec3f, $Vec3f$Type} from "packages/yesman/epicfight/api/utils/math/$Vec3f"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $Mesh$RenderProperties extends $Record {

constructor(customTexturePath: $ResourceLocation$Type, customColor: $Vec3f$Type, isTransparent: boolean)

public "isTransparent"(): boolean
public "customTexturePath"(): $ResourceLocation
public "customColor"(): $Vec3f
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
get "transparent"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mesh$RenderProperties$Type = ($Mesh$RenderProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mesh$RenderProperties_ = $Mesh$RenderProperties$Type;
}}
declare module "packages/yesman/epicfight/api/animation/types/$AttackAnimation$Phase" {
import {$AttackAnimation$JointColliderPair, $AttackAnimation$JointColliderPair$Type} from "packages/yesman/epicfight/api/animation/types/$AttackAnimation$JointColliderPair"
import {$AttackAnimation, $AttackAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$AttackAnimation"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$AnimationProperty$AttackPhaseProperty, $AnimationProperty$AttackPhaseProperty$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationProperty$AttackPhaseProperty"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$Collider, $Collider$Type} from "packages/yesman/epicfight/api/collider/$Collider"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AttackAnimation$Phase {
readonly "start": float
readonly "antic": float
readonly "preDelay": float
readonly "contact": float
readonly "recovery": float
readonly "end": float
readonly "hand": $InteractionHand
 "colliders": ($AttackAnimation$JointColliderPair)[]
readonly "noStateBind": boolean

constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: boolean, arg7: $InteractionHand$Type, arg8: $Joint$Type, arg9: $Collider$Type)
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $InteractionHand$Type, ...arg7: ($AttackAnimation$JointColliderPair$Type)[])
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: boolean, arg7: $InteractionHand$Type, ...arg8: ($AttackAnimation$JointColliderPair$Type)[])
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: $Joint$Type, arg6: $Collider$Type)
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: $InteractionHand$Type, arg6: $Joint$Type, arg7: $Collider$Type)
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $Joint$Type, arg7: $Collider$Type)
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $InteractionHand$Type, arg7: $Joint$Type, arg8: $Collider$Type)
constructor(arg0: $InteractionHand$Type, arg1: $Joint$Type, arg2: $Collider$Type)

public "addProperties"(arg0: $Set$Type<($Map$Entry$Type<($AnimationProperty$AttackPhaseProperty$Type<(any)>), (any)>)>): void
public "getCollidingEntities"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $AttackAnimation$Type, arg2: float, arg3: float, arg4: float): $List<($Entity)>
public "getColliders"(): ($AttackAnimation$JointColliderPair)[]
public "getProperty"<V>(arg0: $AnimationProperty$AttackPhaseProperty$Type<(V)>): $Optional<(V)>
public "getHand"(): $InteractionHand
public "addProperty"<V>(arg0: $AnimationProperty$AttackPhaseProperty$Type<(V)>, arg1: V): $AttackAnimation$Phase
public "removeProperty"(arg0: $AnimationProperty$AttackPhaseProperty$Type<(any)>): $AttackAnimation$Phase
get "colliders"(): ($AttackAnimation$JointColliderPair)[]
get "hand"(): $InteractionHand
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttackAnimation$Phase$Type = ($AttackAnimation$Phase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttackAnimation$Phase_ = $AttackAnimation$Phase$Type;
}}
declare module "packages/yesman/epicfight/main/$AuthenticationHelper" {
import {$ForgeConfigSpec$EnumValue, $ForgeConfigSpec$EnumValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$EnumValue"
import {$AuthenticationHelper$Status, $AuthenticationHelper$Status$Type} from "packages/yesman/epicfight/main/$AuthenticationHelper$Status"
import {$AuthenticationHelper$AuthenticationProvider, $AuthenticationHelper$AuthenticationProvider$Type} from "packages/yesman/epicfight/main/$AuthenticationHelper$AuthenticationProvider"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"

export interface $AuthenticationHelper {

 "getAvatarEditorScreen"(arg0: $Screen$Type): $Screen
 "initialize"(arg0: $ForgeConfigSpec$ConfigValue$Type<(string)>, arg1: $ForgeConfigSpec$ConfigValue$Type<(string)>, arg2: $ForgeConfigSpec$EnumValue$Type<($AuthenticationHelper$AuthenticationProvider$Type)>): void
 "status"(): $AuthenticationHelper$Status
 "valid"(): boolean
}

export namespace $AuthenticationHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AuthenticationHelper$Type = ($AuthenticationHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AuthenticationHelper_ = $AuthenticationHelper$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$AnimationEndEvent" {
import {$StaticAnimation, $StaticAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$StaticAnimation"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$AbstractPlayerEvent, $AbstractPlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AbstractPlayerEvent"

export class $AnimationEndEvent extends $AbstractPlayerEvent<($PlayerPatch<(any)>)> {

constructor(arg0: $PlayerPatch$Type<(any)>, arg1: $StaticAnimation$Type, arg2: boolean)

public "getAnimation"(): $StaticAnimation
public "isEnd"(): boolean
get "animation"(): $StaticAnimation
get "end"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationEndEvent$Type = ($AnimationEndEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationEndEvent_ = $AnimationEndEvent$Type;
}}
declare module "packages/yesman/epicfight/network/server/$SPEntityPairingPacket" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$EntityPairingPacketType, $EntityPairingPacketType$Type} from "packages/yesman/epicfight/network/$EntityPairingPacketType"

export class $SPEntityPairingPacket {

constructor()
constructor(arg0: integer, arg1: $EntityPairingPacketType$Type)

public "getPairingPacketType"(): $EntityPairingPacketType
public "getBuffer"(): $FriendlyByteBuf
public static "toBytes"(arg0: $SPEntityPairingPacket$Type, arg1: $FriendlyByteBuf$Type): void
public static "handle"(arg0: $SPEntityPairingPacket$Type, arg1: $Supplier$Type<($NetworkEvent$Context$Type)>): void
public static "fromBytes"(arg0: $FriendlyByteBuf$Type): $SPEntityPairingPacket
get "pairingPacketType"(): $EntityPairingPacketType
get "buffer"(): $FriendlyByteBuf
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SPEntityPairingPacket$Type = ($SPEntityPairingPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SPEntityPairingPacket_ = $SPEntityPairingPacket$Type;
}}
declare module "packages/yesman/epicfight/main/$AuthenticationHelper$Status" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AuthenticationHelper$Status extends $Enum<($AuthenticationHelper$Status)> {
static readonly "UNAUTHENTICATED": $AuthenticationHelper$Status
static readonly "AUTHENTICATED": $AuthenticationHelper$Status
static readonly "OFFLINE_MODE": $AuthenticationHelper$Status


public static "values"(): ($AuthenticationHelper$Status)[]
public static "valueOf"(arg0: string): $AuthenticationHelper$Status
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AuthenticationHelper$Status$Type = (("authenticated") | ("unauthenticated") | ("offline_mode")) | ($AuthenticationHelper$Status);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AuthenticationHelper$Status_ = $AuthenticationHelper$Status$Type;
}}
declare module "packages/yesman/epicfight/api/animation/$Joint$HierarchicalJointAccessor$Builder" {
import {$Joint$HierarchicalJointAccessor, $Joint$HierarchicalJointAccessor$Type} from "packages/yesman/epicfight/api/animation/$Joint$HierarchicalJointAccessor"

export class $Joint$HierarchicalJointAccessor$Builder {


public "append"(arg0: integer): $Joint$HierarchicalJointAccessor$Builder
public "build"(): $Joint$HierarchicalJointAccessor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Joint$HierarchicalJointAccessor$Builder$Type = ($Joint$HierarchicalJointAccessor$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Joint$HierarchicalJointAccessor$Builder_ = $Joint$HierarchicalJointAccessor$Builder$Type;
}}
declare module "packages/yesman/epicfight/api/utils/math/$ValueModifier$ResultCalculator" {
import {$ValueModifier, $ValueModifier$Type} from "packages/yesman/epicfight/api/utils/math/$ValueModifier"

export class $ValueModifier$ResultCalculator implements $ValueModifier {

constructor()

public "toValueModifier"(): $ValueModifier
public "getResult"(arg0: float): float
public "add"(arg0: float): void
public "set"(arg0: float): void
public "multiply"(arg0: float): void
public "attach"(arg0: $ValueModifier$Type): $ValueModifier$ResultCalculator
public "attach"(arg0: $ValueModifier$ResultCalculator$Type): void
public static "adder"(arg0: float): $ValueModifier
public static "calculator"(): $ValueModifier$ResultCalculator
public static "setter"(arg0: float): $ValueModifier
public static "multiplier"(arg0: float): $ValueModifier
set "ter"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueModifier$ResultCalculator$Type = ($ValueModifier$ResultCalculator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueModifier$ResultCalculator_ = $ValueModifier$ResultCalculator$Type;
}}
declare module "packages/yesman/epicfight/api/animation/$Pose$LoadOperation" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Pose$LoadOperation extends $Enum<($Pose$LoadOperation)> {
static readonly "SET": $Pose$LoadOperation
static readonly "OVERWRITE": $Pose$LoadOperation
static readonly "APPEND_ABSENT": $Pose$LoadOperation


public static "values"(): ($Pose$LoadOperation)[]
public static "valueOf"(arg0: string): $Pose$LoadOperation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pose$LoadOperation$Type = (("set") | ("overwrite") | ("append_absent")) | ($Pose$LoadOperation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pose$LoadOperation_ = $Pose$LoadOperation$Type;
}}
declare module "packages/yesman/epicfight/api/animation/$AnimationVariables$AnimationVariableKey" {
import {$TypeFlexibleHashMap$TypeKey, $TypeFlexibleHashMap$TypeKey$Type} from "packages/yesman/epicfight/api/utils/datastruct/$TypeFlexibleHashMap$TypeKey"
import {$Animator, $Animator$Type} from "packages/yesman/epicfight/api/animation/$Animator"

export class $AnimationVariables$AnimationVariableKey<T> implements $TypeFlexibleHashMap$TypeKey<(T)> {


public "isSharedKey"(): boolean
public "isSynched"(): boolean
public "defaultValue"(arg0: $Animator$Type): T
public "defaultValue"(): T
public "mutable"(): boolean
get "sharedKey"(): boolean
get "synched"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationVariables$AnimationVariableKey$Type<T> = ($AnimationVariables$AnimationVariableKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationVariables$AnimationVariableKey_<T> = $AnimationVariables$AnimationVariableKey$Type<(T)>;
}}
declare module "packages/yesman/epicfight/api/physics/$SimulationTypes" {
import {$InverseKinematicsSimulator$InverseKinematicsBuilder, $InverseKinematicsSimulator$InverseKinematicsBuilder$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulator$InverseKinematicsBuilder"
import {$InverseKinematicsProvider, $InverseKinematicsProvider$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsProvider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ClothSimulator$ClothObject, $ClothSimulator$ClothObject$Type} from "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulator$ClothObject"
import {$ClothSimulatable, $ClothSimulatable$Type} from "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulatable"
import {$InverseKinematicsSimulatable, $InverseKinematicsSimulatable$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulatable"
import {$ClothSimulator$ClothObjectBuilder, $ClothSimulator$ClothObjectBuilder$Type} from "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulator$ClothObjectBuilder"
import {$InverseKinematicsSimulator, $InverseKinematicsSimulator$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulator"
import {$SoftBodyTranslatable, $SoftBodyTranslatable$Type} from "packages/yesman/epicfight/api/client/model/$SoftBodyTranslatable"
import {$SimulationObject$SimulationObjectBuilder, $SimulationObject$SimulationObjectBuilder$Type} from "packages/yesman/epicfight/api/physics/$SimulationObject$SimulationObjectBuilder"
import {$PhysicsSimulator, $PhysicsSimulator$Type} from "packages/yesman/epicfight/api/physics/$PhysicsSimulator"
import {$InverseKinematicsSimulator$InverseKinematicsObject, $InverseKinematicsSimulator$InverseKinematicsObject$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulator$InverseKinematicsObject"
import {$SimulationObject, $SimulationObject$Type} from "packages/yesman/epicfight/api/physics/$SimulationObject"
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$ClothSimulator, $ClothSimulator$Type} from "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulator"
import {$SimulationProvider, $SimulationProvider$Type} from "packages/yesman/epicfight/api/physics/$SimulationProvider"

export interface $SimulationTypes<KEY, O, PV extends $SimulationProvider<(O), (DATA), (B), (PV)>, B extends $SimulationObject$SimulationObjectBuilder, DATA extends $SimulationObject<(B), (PV), (O)>, SIM extends $PhysicsSimulator<(KEY), (B), (PV), (O), (DATA)>> {

}

export namespace $SimulationTypes {
const CLOTH: $SimulationTypes<($ResourceLocation), ($ClothSimulatable), ($SoftBodyTranslatable), ($ClothSimulator$ClothObjectBuilder), ($ClothSimulator$ClothObject), ($ClothSimulator)>
const INVERSE_KINEMATICS: $SimulationTypes<($Joint), ($InverseKinematicsSimulatable), ($InverseKinematicsProvider), ($InverseKinematicsSimulator$InverseKinematicsBuilder), ($InverseKinematicsSimulator$InverseKinematicsObject), ($InverseKinematicsSimulator)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimulationTypes$Type<KEY, O, PV, B, DATA, SIM> = ($SimulationTypes<(KEY), (O), (PV), (B), (DATA), (SIM)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimulationTypes_<KEY, O, PV, B, DATA, SIM> = $SimulationTypes$Type<(KEY), (O), (PV), (B), (DATA), (SIM)>;
}}
declare module "packages/yesman/epicfight/api/animation/$AnimationVariables$IndependentAnimationVariableKey" {
import {$AnimationVariables$AnimationVariableKey, $AnimationVariables$AnimationVariableKey$Type} from "packages/yesman/epicfight/api/animation/$AnimationVariables$AnimationVariableKey"

export class $AnimationVariables$IndependentAnimationVariableKey<T> extends $AnimationVariables$AnimationVariableKey<(T)> {


public "isSharedKey"(): boolean
public "isSynched"(): boolean
get "sharedKey"(): boolean
get "synched"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationVariables$IndependentAnimationVariableKey$Type<T> = ($AnimationVariables$IndependentAnimationVariableKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationVariables$IndependentAnimationVariableKey_<T> = $AnimationVariables$IndependentAnimationVariableKey$Type<(T)>;
}}
declare module "packages/yesman/epicfight/skill/guard/$GuardSkill" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$CapabilityItem, $CapabilityItem$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem"
import {$ControlEngine, $ControlEngine$Type} from "packages/yesman/epicfight/client/events/engine/$ControlEngine"
import {$SkillContainer, $SkillContainer$Type} from "packages/yesman/epicfight/skill/$SkillContainer"
import {$BattleModeGui, $BattleModeGui$Type} from "packages/yesman/epicfight/client/gui/$BattleModeGui"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$SPSkillExecutionFeedback, $SPSkillExecutionFeedback$Type} from "packages/yesman/epicfight/network/server/$SPSkillExecutionFeedback"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$GuardSkill$Builder, $GuardSkill$Builder$Type} from "packages/yesman/epicfight/skill/guard/$GuardSkill$Builder"
import {$SkillBookScreen$AttributeIconList, $SkillBookScreen$AttributeIconList$Type} from "packages/yesman/epicfight/client/gui/screen/$SkillBookScreen$AttributeIconList"
import {$HoldableSkill, $HoldableSkill$Type} from "packages/yesman/epicfight/skill/modules/$HoldableSkill"
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$WeaponCategory, $WeaponCategory$Type} from "packages/yesman/epicfight/world/capabilities/item/$WeaponCategory"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$GuardSkill$BlockType, $GuardSkill$BlockType$Type} from "packages/yesman/epicfight/skill/guard/$GuardSkill$BlockType"
import {$TakeDamageEvent$Attack, $TakeDamageEvent$Attack$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$TakeDamageEvent$Attack"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $GuardSkill extends $Skill implements $HoldableSkill {

constructor(arg0: $GuardSkill$Builder$Type)

public "getKeyMapping"(): $KeyMapping
public static "createGuardBuilder"(): $GuardSkill$Builder
public "onInitiate"(arg0: $SkillContainer$Type): void
public "onInitiateClient"(arg0: $SkillContainer$Type): void
public "onRemoveClient"(arg0: $SkillContainer$Type): void
public "onRemoved"(arg0: $SkillContainer$Type): void
public "updateContainer"(arg0: $SkillContainer$Type): void
public "holdTick"(arg0: $SkillContainer$Type): void
public "drawOnGui"(arg0: $BattleModeGui$Type, arg1: $SkillContainer$Type, arg2: $GuiGraphics$Type, arg3: float, arg4: float, arg5: float): void
public "shouldDraw"(arg0: $SkillContainer$Type): boolean
public "getAvailableWeaponCategories"(): $Set<($WeaponCategory)>
public "getCustomConsumptionTooltips"(arg0: $SkillBookScreen$AttributeIconList$Type): boolean
public "startHolding"(arg0: $SkillContainer$Type): void
public "resetHolding"(arg0: $SkillContainer$Type): void
public "isExecutableState"(arg0: $PlayerPatch$Type<(any)>): boolean
public "onStopHolding"(arg0: $SkillContainer$Type, arg1: $SPSkillExecutionFeedback$Type): void
public "cancelOnServer"(arg0: $SkillContainer$Type, arg1: $FriendlyByteBuf$Type): void
public "cancelOnClient"(arg0: $SkillContainer$Type, arg1: $FriendlyByteBuf$Type): void
public "gatherHoldArguments"(arg0: $SkillContainer$Type, arg1: $ControlEngine$Type, arg2: $FriendlyByteBuf$Type): void
public "setParams"(arg0: $CompoundTag$Type): void
public "canExecute"(arg0: $SkillContainer$Type): boolean
public "guard"(arg0: $SkillContainer$Type, arg1: $CapabilityItem$Type, arg2: $TakeDamageEvent$Attack$Type, arg3: float, arg4: float, arg5: boolean): void
public static "getOffender"(arg0: $DamageSource$Type): $Entity
public "dealEvent"(arg0: $PlayerPatch$Type<(any)>, arg1: $TakeDamageEvent$Attack$Type, arg2: boolean): void
public "isHoldingWeaponAvailable"(arg0: $PlayerPatch$Type<(any)>, arg1: $CapabilityItem$Type, arg2: $GuardSkill$BlockType$Type): boolean
public "asSkill"(): $Skill
get "keyMapping"(): $KeyMapping
get "availableWeaponCategories"(): $Set<($WeaponCategory)>
set "params"(value: $CompoundTag$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuardSkill$Type = ($GuardSkill);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuardSkill_ = $GuardSkill$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch" {
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$CapabilityItem, $CapabilityItem$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$HoldableSkill, $HoldableSkill$Type} from "packages/yesman/epicfight/skill/modules/$HoldableSkill"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$CallbackInfo, $CallbackInfo$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import {$EntityJoinLevelEvent, $EntityJoinLevelEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityJoinLevelEvent"
import {$LivingEvent$LivingTickEvent, $LivingEvent$LivingTickEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent$LivingTickEvent"
import {$AttackResult, $AttackResult$Type} from "packages/yesman/epicfight/api/utils/$AttackResult"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ServerPlayerPatch extends $PlayerPatch<($ServerPlayer)> {
static "STAMINA": $EntityDataAccessor<(float)>
 "dx": double
 "dz": double
static readonly "WEIGHT_CORRECTION": double
 "currentLivingMotion": $LivingMotion
 "currentCompositeMotion": $LivingMotion

constructor()

public "setAttackTarget"(arg0: $LivingEntity$Type): void
public "handler$blh000$tick"(arg0: $LivingEvent$LivingTickEvent$Type, arg1: $CallbackInfo$Type): void
public "startSkillHolding"(arg0: $HoldableSkill$Type): boolean
public "setModelYRot"(arg0: float, arg1: boolean): void
public "disableModelYRot"(arg0: boolean): void
public "toVanillaMode"(arg0: boolean): void
public "toEpicFightMode"(arg0: boolean): void
public "tick"(arg0: $LivingEvent$LivingTickEvent$Type): void
public "updateMotion"(arg0: boolean): void
public "onStartTracking"(arg0: $ServerPlayer$Type): void
public "onJoinWorld"(arg0: $ServerPlayer$Type, arg1: $EntityJoinLevelEvent$Type): void
public "tryHurt"(arg0: $DamageSource$Type, arg1: float): $AttackResult
public "setLastAttackSuccess"(arg0: boolean): void
public "sendToAllPlayersTrackingMe"(arg0: any): void
public "updateHeldItem"(arg0: $CapabilityItem$Type, arg1: $CapabilityItem$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type, arg4: $InteractionHand$Type): void
public "onDodgeSuccess"(arg0: $DamageSource$Type, arg1: $Vec3$Type): void
public "isTargetInvulnerable"(arg0: $Entity$Type): boolean
public "setGrapplingTarget"(arg0: $LivingEntity$Type): void
public "modifyLivingMotionByCurrentItem"(): void
public "modifyLivingMotionByCurrentItem"(arg0: boolean): void
public "getTarget"(): $LivingEntity
set "attackTarget"(value: $LivingEntity$Type)
set "lastAttackSuccess"(value: boolean)
set "grapplingTarget"(value: $LivingEntity$Type)
get "target"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerPatch$Type = ($ServerPlayerPatch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayerPatch_ = $ServerPlayerPatch$Type;
}}
declare module "packages/yesman/epicfight/api/animation/types/$AttackAnimation$JointColliderPair" {
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Collider, $Collider$Type} from "packages/yesman/epicfight/api/collider/$Collider"

export class $AttackAnimation$JointColliderPair extends $Pair<($Joint), ($Collider)> {

constructor(arg0: $Joint$Type, arg1: $Collider$Type)

public static "of"(arg0: $Joint$Type, arg1: $Collider$Type): $AttackAnimation$JointColliderPair
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttackAnimation$JointColliderPair$Type = ($AttackAnimation$JointColliderPair);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttackAnimation$JointColliderPair_ = $AttackAnimation$JointColliderPair$Type;
}}
declare module "packages/yesman/epicfight/api/animation/$AnimationClip" {
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$TransformSheet, $TransformSheet$Type} from "packages/yesman/epicfight/api/animation/$TransformSheet"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnimationClip {
static readonly "EMPTY_CLIP": $AnimationClip

constructor()

public "hasJointTransform"(arg0: string): boolean
public "getJointTransform"(arg0: string): $TransformSheet
public "bakeKeyframes"(): void
public "addJointTransform"(arg0: string, arg1: $TransformSheet$Type): void
public "getPoseInTime"(arg0: float): $Pose
public "getJointTransforms"(): $Map<(string), ($TransformSheet)>
public "setClipTime"(arg0: float): void
public "getClipTime"(): float
public "setBaked"(): void
public "reset"(): void
get "jointTransforms"(): $Map<(string), ($TransformSheet)>
set "clipTime"(value: float)
get "clipTime"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationClip$Type = ($AnimationClip);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationClip_ = $AnimationClip$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$TakeDamageEvent" {
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$AbstractPlayerEvent, $AbstractPlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AbstractPlayerEvent"

export class $TakeDamageEvent extends $AbstractPlayerEvent<($ServerPlayerPatch)> {


public "getDamage"(): float
public "getDamageSource"(): $DamageSource
get "damage"(): float
get "damageSource"(): $DamageSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TakeDamageEvent$Type = ($TakeDamageEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TakeDamageEvent_ = $TakeDamageEvent$Type;
}}
declare module "packages/yesman/epicfight/particle/$HitParticleType" {
import {$SimpleParticleType, $SimpleParticleType$Type} from "packages/net/minecraft/core/particles/$SimpleParticleType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $HitParticleType extends $SimpleParticleType {
static readonly "CENTER_OF_TARGET": $BiFunction<($Entity), ($Entity), ($Vector3d)>
static readonly "RANDOM_WITHIN_BOUNDING_BOX": $BiFunction<($Entity), ($Entity), ($Vector3d)>
static readonly "FRONT_OF_EYES": $BiFunction<($Entity), ($Entity), ($Vector3d)>
static readonly "MIDDLE_OF_ENTITIES": $BiFunction<($Entity), ($Entity), ($Vector3d)>
static readonly "ZERO": $BiFunction<($Entity), ($Entity), ($Vector3d)>
static readonly "ATTACKER_XY_ROTATION": $BiFunction<($Entity), ($Entity), ($Vector3d)>
static readonly "ATTACKER_Y_ROTATION": $BiFunction<($Entity), ($Entity), ($Vector3d)>
 "positionProvider": $BiFunction<($Entity), ($Entity), ($Vector3d)>
 "argumentProvider": $BiFunction<($Entity), ($Entity), ($Vector3d)>

constructor(arg0: boolean)
constructor(arg0: boolean, arg1: $BiFunction$Type<($Entity$Type), ($Entity$Type), ($Vector3d$Type)>, arg2: $BiFunction$Type<($Entity$Type), ($Entity$Type), ($Vector3d$Type)>)

public "spawnParticleWithArgument"(arg0: $ServerLevel$Type, arg1: $Entity$Type, arg2: $Entity$Type): void
public "spawnParticleWithArgument"(arg0: $ServerLevel$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): void
public "spawnParticleWithArgument"(arg0: $ServerLevel$Type, arg1: $BiFunction$Type<($Entity$Type), ($Entity$Type), ($Vector3d$Type)>, arg2: $BiFunction$Type<($Entity$Type), ($Entity$Type), ($Vector3d$Type)>, arg3: $Entity$Type, arg4: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HitParticleType$Type = ($HitParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HitParticleType_ = $HitParticleType$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/entitypatch/$EntityDecorations$ParticleGenerator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EntityDecorations$ParticleGenerator {

 "shouldRemove"(): boolean
 "generateParticles"(): void

(): boolean
}

export namespace $EntityDecorations$ParticleGenerator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityDecorations$ParticleGenerator$Type = ($EntityDecorations$ParticleGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityDecorations$ParticleGenerator_ = $EntityDecorations$ParticleGenerator$Type;
}}
declare module "packages/yesman/epicfight/skill/$SkillSlot" {
import {$ExtendableEnumManager, $ExtendableEnumManager$Type} from "packages/yesman/epicfight/api/utils/$ExtendableEnumManager"
import {$ExtendableEnum, $ExtendableEnum$Type} from "packages/yesman/epicfight/api/utils/$ExtendableEnum"
import {$SkillCategory, $SkillCategory$Type} from "packages/yesman/epicfight/skill/$SkillCategory"

export interface $SkillSlot extends $ExtendableEnum {

 "category"(): $SkillCategory
 "universalOrdinal"(): integer
}

export namespace $SkillSlot {
const ENUM_MANAGER: $ExtendableEnumManager<($SkillSlot)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillSlot$Type = ($SkillSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillSlot_ = $SkillSlot$Type;
}}
declare module "packages/yesman/epicfight/api/client/animation/property/$JointMask" {
import {$JointMask$BindModifier, $JointMask$BindModifier$Type} from "packages/yesman/epicfight/api/client/animation/property/$JointMask$BindModifier"

export class $JointMask {
static readonly "KEEP_CHILD_LOCROT": $JointMask$BindModifier


public static "of"(arg0: string): $JointMask
public static "of"(arg0: string, arg1: $JointMask$BindModifier$Type): $JointMask
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JointMask$Type = ($JointMask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JointMask_ = $JointMask$Type;
}}
declare module "packages/yesman/epicfight/api/client/physics/$AbstractSimulator" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$SimulationObject$SimulationObjectBuilder, $SimulationObject$SimulationObjectBuilder$Type} from "packages/yesman/epicfight/api/physics/$SimulationObject$SimulationObjectBuilder"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$PhysicsSimulator, $PhysicsSimulator$Type} from "packages/yesman/epicfight/api/physics/$PhysicsSimulator"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$SimulationObject, $SimulationObject$Type} from "packages/yesman/epicfight/api/physics/$SimulationObject"
import {$SimulationProvider, $SimulationProvider$Type} from "packages/yesman/epicfight/api/physics/$SimulationProvider"

export class $AbstractSimulator<KEY, B extends $SimulationObject$SimulationObjectBuilder, PV extends $SimulationProvider<(O), (SO), (B), (PV)>, O, SO extends $SimulationObject<(B), (PV), (O)>> implements $PhysicsSimulator<(KEY), (B), (PV), (O), (SO)> {

constructor()

public "restart"(arg0: KEY): void
public "runWhen"(arg0: KEY, arg1: PV, arg2: B, arg3: $BooleanSupplier$Type): void
public "runUntil"(arg0: KEY, arg1: PV, arg2: B, arg3: $BooleanSupplier$Type): void
public "getRunningObject"(arg0: KEY): $Optional<(SO)>
public "getAllRunningObjects"(): $List<($Pair<(KEY), (SO)>)>
public "tick"(arg0: O): void
public "stop"(arg0: KEY): void
public "isRunning"(arg0: KEY): boolean
get "allRunningObjects"(): $List<($Pair<(KEY), (SO)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSimulator$Type<KEY, B, PV, O, SO> = ($AbstractSimulator<(KEY), (B), (PV), (O), (SO)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSimulator_<KEY, B, PV, O, SO> = $AbstractSimulator$Type<(KEY), (B), (PV), (O), (SO)>;
}}
declare module "packages/yesman/epicfight/api/utils/$ExtendableEnum" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExtendableEnum {

 "universalOrdinal"(): integer

(): integer
}

export namespace $ExtendableEnum {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendableEnum$Type = ($ExtendableEnum);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendableEnum_ = $ExtendableEnum$Type;
}}
declare module "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulator$InverseKinematicsBuilder" {
import {$SimulationObject$SimulationObjectBuilder, $SimulationObject$SimulationObjectBuilder$Type} from "packages/yesman/epicfight/api/physics/$SimulationObject$SimulationObjectBuilder"
import {$Vec3f, $Vec3f$Type} from "packages/yesman/epicfight/api/utils/math/$Vec3f"
import {$InverseKinematicsSimulator$BakedInverseKinematicsDefinition, $InverseKinematicsSimulator$BakedInverseKinematicsDefinition$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulator$BakedInverseKinematicsDefinition"
import {$TransformSheet, $TransformSheet$Type} from "packages/yesman/epicfight/api/animation/$TransformSheet"

export class $InverseKinematicsSimulator$InverseKinematicsBuilder extends $SimulationObject$SimulationObjectBuilder {


public static "create"(arg0: $Vec3f$Type, arg1: $TransformSheet$Type, arg2: $InverseKinematicsSimulator$BakedInverseKinematicsDefinition$Type): $InverseKinematicsSimulator$InverseKinematicsBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InverseKinematicsSimulator$InverseKinematicsBuilder$Type = ($InverseKinematicsSimulator$InverseKinematicsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InverseKinematicsSimulator$InverseKinematicsBuilder_ = $InverseKinematicsSimulator$InverseKinematicsBuilder$Type;
}}
declare module "packages/yesman/epicfight/api/collider/$OBBCollider" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Armature, $Armature$Type} from "packages/yesman/epicfight/api/model/$Armature"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Collider, $Collider$Type} from "packages/yesman/epicfight/api/collider/$Collider"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $OBBCollider extends $Collider {

constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double)
constructor(arg0: $AABB$Type)
constructor(arg0: $AABB$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double, arg9: double, arg10: double, arg11: double, arg12: double, arg13: double, arg14: double, arg15: double)

public "drawInternal"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: $Armature$Type, arg3: $Joint$Type, arg4: $Pose$Type, arg5: $Pose$Type, arg6: float, arg7: integer): void
public "isCollide"(arg0: $OBBCollider$Type): boolean
public "isCollide"(arg0: $Entity$Type): boolean
public "getRenderType"(): $RenderType
public "toString"(): string
public "transform"(arg0: $OpenMatrix4f$Type): void
public "serialize"(arg0: $CompoundTag$Type): $CompoundTag
public "draw"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: integer): void
public "deepCopy"(): $OBBCollider
get "renderType"(): $RenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OBBCollider$Type = ($OBBCollider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OBBCollider_ = $OBBCollider$Type;
}}
declare module "packages/yesman/epicfight/api/animation/property/$AnimationEvent$E2" {
import {$AnimationEvent$Event, $AnimationEvent$Event$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationEvent$Event"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$AnimationParameters, $AnimationParameters$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationParameters"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export interface $AnimationEvent$E2<A, B> extends $AnimationEvent$Event<(A), (B), (void), (void), (void), (void), (void), (void), (void), (void)> {

 "fire"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $AssetAccessor$Type<(any)>, arg2: $AnimationParameters$Type<(A), (B), (void), (void), (void), (void), (void), (void), (void), (void)>): void

(arg0: $LivingEntityPatch$Type<(any)>, arg1: $AssetAccessor$Type<(any)>, arg2: $AnimationParameters$Type<(A), (B), (void), (void), (void), (void), (void), (void), (void), (void)>): void
}

export namespace $AnimationEvent$E2 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationEvent$E2$Type<A, B> = ($AnimationEvent$E2<(A), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationEvent$E2_<A, B> = $AnimationEvent$E2$Type<(A), (B)>;
}}
declare module "packages/yesman/epicfight/skill/$Skill$Resource$ResourceConsumer" {
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$SkillContainer, $SkillContainer$Type} from "packages/yesman/epicfight/skill/$SkillContainer"

export interface $Skill$Resource$ResourceConsumer {

 "consume"(arg0: $SkillContainer$Type, arg1: $ServerPlayerPatch$Type, arg2: float): void

(arg0: $SkillContainer$Type, arg1: $ServerPlayerPatch$Type, arg2: float): void
}

export namespace $Skill$Resource$ResourceConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Skill$Resource$ResourceConsumer$Type = ($Skill$Resource$ResourceConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Skill$Resource$ResourceConsumer_ = $Skill$Resource$ResourceConsumer$Type;
}}
declare module "packages/yesman/epicfight/world/damagesource/$ExtraDamageInstance$ExtraDamage" {
import {$ExtraDamageInstance, $ExtraDamageInstance$Type} from "packages/yesman/epicfight/world/damagesource/$ExtraDamageInstance"
import {$ExtraDamageInstance$ExtraDamageFunction, $ExtraDamageInstance$ExtraDamageFunction$Type} from "packages/yesman/epicfight/world/damagesource/$ExtraDamageInstance$ExtraDamageFunction"
import {$ExtraDamageInstance$ExtraDamageTooltipFunction, $ExtraDamageInstance$ExtraDamageTooltipFunction$Type} from "packages/yesman/epicfight/world/damagesource/$ExtraDamageInstance$ExtraDamageTooltipFunction"

export class $ExtraDamageInstance$ExtraDamage {

constructor(arg0: $ExtraDamageInstance$ExtraDamageFunction$Type, arg1: $ExtraDamageInstance$ExtraDamageTooltipFunction$Type)

public "create"(...arg0: (float)[]): $ExtraDamageInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtraDamageInstance$ExtraDamage$Type = ($ExtraDamageInstance$ExtraDamage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtraDamageInstance$ExtraDamage_ = $ExtraDamageInstance$ExtraDamage$Type;
}}
declare module "packages/yesman/epicfight/compat/kubejs/skill/$CustomChargeableSkill$CastSkillContext" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$SkillContainer, $SkillContainer$Type} from "packages/yesman/epicfight/skill/$SkillContainer"
import {$SPSkillExecutionFeedback, $SPSkillExecutionFeedback$Type} from "packages/yesman/epicfight/network/server/$SPSkillExecutionFeedback"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"

export class $CustomChargeableSkill$CastSkillContext extends $Record {

constructor(getSkill: $Skill$Type, getSkillContainer: $SkillContainer$Type, getFeedbackPacket: $SPSkillExecutionFeedback$Type)

public "getFeedbackPacket"(): $SPSkillExecutionFeedback
public "getSkillContainer"(): $SkillContainer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getSkill"(): $Skill
get "feedbackPacket"(): $SPSkillExecutionFeedback
get "skillContainer"(): $SkillContainer
get "skill"(): $Skill
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomChargeableSkill$CastSkillContext$Type = ($CustomChargeableSkill$CastSkillContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomChargeableSkill$CastSkillContext_ = $CustomChargeableSkill$CastSkillContext$Type;
}}
declare module "packages/yesman/epicfight/client/renderer/patched/layer/$PatchedLayer" {
import {$RenderLayer, $RenderLayer$Type} from "packages/net/minecraft/client/renderer/entity/layers/$RenderLayer"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $PatchedLayer<E extends $LivingEntity, T extends $LivingEntityPatch<(E)>, M extends $EntityModel<(E)>, R extends $RenderLayer<(E), (M)>> {

constructor()

public "renderLayer"(arg0: E, arg1: T, arg2: $RenderLayer$Type<(E), (M)>, arg3: $PoseStack$Type, arg4: $MultiBufferSource$Type, arg5: integer, arg6: ($OpenMatrix4f$Type)[], arg7: float, arg8: float, arg9: float, arg10: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatchedLayer$Type<E, T, M, R> = ($PatchedLayer<(E), (T), (M), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatchedLayer_<E, T, M, R> = $PatchedLayer$Type<(E), (T), (M), (R)>;
}}
declare module "packages/yesman/epicfight/api/animation/$AnimationPlayer" {
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$CallbackInfo, $CallbackInfo$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $AnimationPlayer {

constructor()

public "handler$blc000$tick"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $CallbackInfo$Type): void
public "getPrevElapsedTime"(): float
public "getCurrentPose"(arg0: $LivingEntityPatch$Type<(any)>, arg1: float): $Pose
public "setElapsedTime"(arg0: float, arg1: float): void
public "setElapsedTime"(arg0: float): void
public "setPlayAnimation"(arg0: $AssetAccessor$Type<(any)>): void
public "setElapsedTimeCurrent"(arg0: float): void
public "markDoNotResetTime"(): void
public "setReversed"(arg0: boolean): void
public "getRealAnimation"(): $AssetAccessor<(any)>
public "tick"(arg0: $LivingEntityPatch$Type<(any)>): void
public "getAnimation"(): $AssetAccessor<(any)>
public "isEnd"(): boolean
public "getElapsedTime"(): float
public "toString"(): string
public "isEmpty"(): boolean
public "begin"(arg0: $AssetAccessor$Type<(any)>, arg1: $LivingEntityPatch$Type<(any)>): void
public "reset"(): void
public "terminate"(arg0: $LivingEntityPatch$Type<(any)>): void
public "isReversed"(): boolean
get "prevElapsedTime"(): float
set "elapsedTime"(value: float)
set "playAnimation"(value: $AssetAccessor$Type<(any)>)
set "elapsedTimeCurrent"(value: float)
set "reversed"(value: boolean)
get "realAnimation"(): $AssetAccessor<(any)>
get "animation"(): $AssetAccessor<(any)>
get "end"(): boolean
get "elapsedTime"(): float
get "empty"(): boolean
get "reversed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationPlayer$Type = ($AnimationPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationPlayer_ = $AnimationPlayer$Type;
}}
declare module "packages/yesman/epicfight/mixin/common/$MixinProjectile" {
import {$EntityHitResult, $EntityHitResult$Type} from "packages/net/minecraft/world/phys/$EntityHitResult"

export interface $MixinProjectile {

 "invoke_onHitEntity"(arg0: $EntityHitResult$Type): void

(arg0: $EntityHitResult$Type): void
}

export namespace $MixinProjectile {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinProjectile$Type = ($MixinProjectile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinProjectile_ = $MixinProjectile$Type;
}}
declare module "packages/yesman/epicfight/world/level/block/$FractureBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$FractureBlockState, $FractureBlockState$Type} from "packages/yesman/epicfight/world/level/block/$FractureBlockState"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $FractureBlock extends $BaseEntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public static "getDefaultFractureBlockState"(arg0: $Block$Type): $FractureBlockState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FractureBlock$Type = ($FractureBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FractureBlock_ = $FractureBlock$Type;
}}
declare module "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulator$ClothObject" {
import {$Mesh, $Mesh$Type} from "packages/yesman/epicfight/api/client/model/$Mesh"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Armature, $Armature$Type} from "packages/yesman/epicfight/api/model/$Armature"
import {$Vec3f, $Vec3f$Type} from "packages/yesman/epicfight/api/utils/math/$Vec3f"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$ClothSimulatable, $ClothSimulatable$Type} from "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulatable"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$ClothSimulator$ClothObjectBuilder, $ClothSimulator$ClothObjectBuilder$Type} from "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulator$ClothObjectBuilder"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$SoftBodyTranslatable, $SoftBodyTranslatable$Type} from "packages/yesman/epicfight/api/client/model/$SoftBodyTranslatable"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Mesh$DrawingFunction, $Mesh$DrawingFunction$Type} from "packages/yesman/epicfight/api/client/model/$Mesh$DrawingFunction"
import {$SimulationObject, $SimulationObject$Type} from "packages/yesman/epicfight/api/physics/$SimulationObject"
import {$MeshPart, $MeshPart$Type} from "packages/yesman/epicfight/api/client/model/$MeshPart"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ClothSimulator$ClothObject implements $SimulationObject<($ClothSimulator$ClothObjectBuilder), ($SoftBodyTranslatable), ($ClothSimulatable)>, $Mesh {

constructor(arg0: $ClothSimulator$ClothObjectBuilder$Type, arg1: $SoftBodyTranslatable$Type, arg2: $Map$Type<(string), ($MeshPart$Type)>, arg3: (float)[])

public "getParticlePosition"(arg0: integer): $Vec3f
public "scaleFromPose"(arg0: $PoseStack$Type, arg1: ($OpenMatrix4f$Type)[]): void
public "drawOutline"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: $Mesh$DrawingFunction$Type, arg3: float, arg4: float, arg5: float, arg6: float): void
public "drawParts"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: $Mesh$DrawingFunction$Type, arg3: integer, arg4: float, arg5: float, arg6: float, arg7: float, arg8: integer): void
public "drawNormals"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: $Mesh$DrawingFunction$Type, arg3: float, arg4: float, arg5: float, arg6: float): void
public "captureMyself"(): $ClothSimulator$ClothObject
public "drawPosed"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: $Mesh$DrawingFunction$Type, arg3: integer, arg4: float, arg5: float, arg6: float, arg7: float, arg8: integer, arg9: $Armature$Type, arg10: ($OpenMatrix4f$Type)[]): void
public "tick"(arg0: $ClothSimulatable$Type, arg1: $Function$Type<(float), ($OpenMatrix4f$Type)>, arg2: float, arg3: $Armature$Type, arg4: ($OpenMatrix4f$Type)[]): void
public "initialize"(): void
public "draw"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: $Mesh$DrawingFunction$Type, arg3: integer, arg4: float, arg5: float, arg6: float, arg7: float, arg8: integer): void
public "draw"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: $RenderType$Type, arg3: $Mesh$DrawingFunction$Type, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer, arg10: $Armature$Type, arg11: ($OpenMatrix4f$Type)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClothSimulator$ClothObject$Type = ($ClothSimulator$ClothObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClothSimulator$ClothObject_ = $ClothSimulator$ClothObject$Type;
}}
declare module "packages/yesman/epicfight/compat/kubejs/skill/$CustomSkill$GetTooltipOnItem" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$CapabilityItem, $CapabilityItem$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $CustomSkill$GetTooltipOnItem extends $Record {

constructor(getItemStack: $ItemStack$Type, getCap: $CapabilityItem$Type, getPlayerPatch: $PlayerPatch$Type<(any)>)

public "getCap"(): $CapabilityItem
public "getPlayerPatch"(): $PlayerPatch<(any)>
public "getItemStack"(): $ItemStack
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
get "cap"(): $CapabilityItem
get "playerPatch"(): $PlayerPatch<(any)>
get "itemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSkill$GetTooltipOnItem$Type = ($CustomSkill$GetTooltipOnItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSkill$GetTooltipOnItem_ = $CustomSkill$GetTooltipOnItem$Type;
}}
declare module "packages/yesman/epicfight/gameasset/$Armatures$ArmatureAccessor" {
import {$Armature, $Armature$Type} from "packages/yesman/epicfight/api/model/$Armature"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$Armatures$ArmatureContructor, $Armatures$ArmatureContructor$Type} from "packages/yesman/epicfight/gameasset/$Armatures$ArmatureContructor"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $Armatures$ArmatureAccessor<A extends $Armature> extends $Record implements $AssetAccessor<(A)> {

constructor(registryName: $ResourceLocation$Type, armatureConstructor: $Armatures$ArmatureContructor$Type<(A)>, inRegistry: boolean)

public "inRegistry"(): boolean
public "armatureConstructor"(): $Armatures$ArmatureContructor<(A)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "create"<A extends $Armature>(arg0: string, arg1: string, arg2: $Armatures$ArmatureContructor$Type<(A)>): $Armatures$ArmatureAccessor<(A)>
public "registryName"(): $ResourceLocation
public "doOrThrow"(arg0: $Consumer$Type<(A)>): void
public "checkType"(arg0: $Class$Type<(any)>): boolean
public "ifPresent"(arg0: $Consumer$Type<(A)>): void
public "ifPresentOrElse"(arg0: $Consumer$Type<(A)>, arg1: $Runnable$Type): void
public "isEmpty"(): boolean
public "isPresent"(): boolean
public "orElse"(arg0: A): A
public "checkNotNull"(): void
get "empty"(): boolean
get "present"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Armatures$ArmatureAccessor$Type<A> = ($Armatures$ArmatureAccessor<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Armatures$ArmatureAccessor_<A> = $Armatures$ArmatureAccessor$Type<(A)>;
}}
declare module "packages/yesman/epicfight/api/asset/$AssetAccessor" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $AssetAccessor<O> extends $Supplier<(O)> {

 "inRegistry"(): boolean
 "doOrThrow"(arg0: $Consumer$Type<(O)>): void
 "checkType"(arg0: $Class$Type<(any)>): boolean
 "ifPresent"(arg0: $Consumer$Type<(O)>): void
 "ifPresentOrElse"(arg0: $Consumer$Type<(O)>, arg1: $Runnable$Type): void
 "get"(): O
 "isEmpty"(): boolean
 "isPresent"(): boolean
 "orElse"(arg0: O): O
 "registryName"(): $ResourceLocation
 "checkNotNull"(): void
}

export namespace $AssetAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssetAccessor$Type<O> = ($AssetAccessor<(O)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AssetAccessor_<O> = $AssetAccessor$Type<(O)>;
}}
declare module "packages/yesman/epicfight/world/level/block/entity/$UniversalBlockEntityType" {
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$ShulkerBoxBlockEntity, $ShulkerBoxBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ShulkerBoxBlockEntity"
import {$BeehiveBlockEntity, $BeehiveBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BeehiveBlockEntity"
import {$ComparatorBlockEntity, $ComparatorBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ComparatorBlockEntity"
import {$DropperBlockEntity, $DropperBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$DropperBlockEntity"
import {$BrewingStandBlockEntity, $BrewingStandBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BrewingStandBlockEntity"
import {$DaylightDetectorBlockEntity, $DaylightDetectorBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$DaylightDetectorBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$HangingSignBlockEntity, $HangingSignBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$HangingSignBlockEntity"
import {$SignBlockEntity, $SignBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SignBlockEntity"
import {$JukeboxBlockEntity, $JukeboxBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$JukeboxBlockEntity"
import {$SculkShriekerBlockEntity, $SculkShriekerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SculkShriekerBlockEntity"
import {$EnchantmentTableBlockEntity, $EnchantmentTableBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$EnchantmentTableBlockEntity"
import {$Type, $Type$Type} from "packages/com/mojang/datafixers/types/$Type"
import {$CalibratedSculkSensorBlockEntity, $CalibratedSculkSensorBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$CalibratedSculkSensorBlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ChiseledBookShelfBlockEntity, $ChiseledBookShelfBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ChiseledBookShelfBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BrushableBlockEntity, $BrushableBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BrushableBlockEntity"
import {$FurnaceBlockEntity, $FurnaceBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$FurnaceBlockEntity"
import {$DispenserBlockEntity, $DispenserBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$DispenserBlockEntity"
import {$EnderChestBlockEntity, $EnderChestBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$EnderChestBlockEntity"
import {$SculkSensorBlockEntity, $SculkSensorBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SculkSensorBlockEntity"
import {$BarrelBlockEntity, $BarrelBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BarrelBlockEntity"
import {$ChestBlockEntity, $ChestBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ChestBlockEntity"
import {$BannerBlockEntity, $BannerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BannerBlockEntity"
import {$TheEndGatewayBlockEntity, $TheEndGatewayBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TheEndGatewayBlockEntity"
import {$CommandBlockEntity, $CommandBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$CommandBlockEntity"
import {$BellBlockEntity, $BellBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BellBlockEntity"
import {$TrappedChestBlockEntity, $TrappedChestBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TrappedChestBlockEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SmokerBlockEntity, $SmokerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SmokerBlockEntity"
import {$BlastFurnaceBlockEntity, $BlastFurnaceBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlastFurnaceBlockEntity"
import {$DecoratedPotBlockEntity, $DecoratedPotBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$DecoratedPotBlockEntity"
import {$PistonMovingBlockEntity, $PistonMovingBlockEntity$Type} from "packages/net/minecraft/world/level/block/piston/$PistonMovingBlockEntity"
import {$HopperBlockEntity, $HopperBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$HopperBlockEntity"
import {$TheEndPortalBlockEntity, $TheEndPortalBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TheEndPortalBlockEntity"
import {$BeaconBlockEntity, $BeaconBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BeaconBlockEntity"
import {$StructureBlockEntity, $StructureBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$StructureBlockEntity"
import {$SpawnerBlockEntity, $SpawnerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SpawnerBlockEntity"
import {$JigsawBlockEntity, $JigsawBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$JigsawBlockEntity"
import {$ConduitBlockEntity, $ConduitBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ConduitBlockEntity"
import {$BedBlockEntity, $BedBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BedBlockEntity"
import {$SculkCatalystBlockEntity, $SculkCatalystBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SculkCatalystBlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SkullBlockEntity, $SkullBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SkullBlockEntity"
import {$LecternBlockEntity, $LecternBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$LecternBlockEntity"
import {$CampfireBlockEntity, $CampfireBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$CampfireBlockEntity"

export class $UniversalBlockEntityType<T extends $BlockEntity> extends $BlockEntityType<(T)> {
static readonly "FURNACE": $BlockEntityType<($FurnaceBlockEntity)>
static readonly "CHEST": $BlockEntityType<($ChestBlockEntity)>
static readonly "TRAPPED_CHEST": $BlockEntityType<($TrappedChestBlockEntity)>
static readonly "ENDER_CHEST": $BlockEntityType<($EnderChestBlockEntity)>
static readonly "JUKEBOX": $BlockEntityType<($JukeboxBlockEntity)>
static readonly "DISPENSER": $BlockEntityType<($DispenserBlockEntity)>
static readonly "DROPPER": $BlockEntityType<($DropperBlockEntity)>
static readonly "SIGN": $BlockEntityType<($SignBlockEntity)>
static readonly "HANGING_SIGN": $BlockEntityType<($HangingSignBlockEntity)>
static readonly "MOB_SPAWNER": $BlockEntityType<($SpawnerBlockEntity)>
static readonly "PISTON": $BlockEntityType<($PistonMovingBlockEntity)>
static readonly "BREWING_STAND": $BlockEntityType<($BrewingStandBlockEntity)>
static readonly "ENCHANTING_TABLE": $BlockEntityType<($EnchantmentTableBlockEntity)>
static readonly "END_PORTAL": $BlockEntityType<($TheEndPortalBlockEntity)>
static readonly "BEACON": $BlockEntityType<($BeaconBlockEntity)>
static readonly "SKULL": $BlockEntityType<($SkullBlockEntity)>
static readonly "DAYLIGHT_DETECTOR": $BlockEntityType<($DaylightDetectorBlockEntity)>
static readonly "HOPPER": $BlockEntityType<($HopperBlockEntity)>
static readonly "COMPARATOR": $BlockEntityType<($ComparatorBlockEntity)>
static readonly "BANNER": $BlockEntityType<($BannerBlockEntity)>
static readonly "STRUCTURE_BLOCK": $BlockEntityType<($StructureBlockEntity)>
static readonly "END_GATEWAY": $BlockEntityType<($TheEndGatewayBlockEntity)>
static readonly "COMMAND_BLOCK": $BlockEntityType<($CommandBlockEntity)>
static readonly "SHULKER_BOX": $BlockEntityType<($ShulkerBoxBlockEntity)>
static readonly "BED": $BlockEntityType<($BedBlockEntity)>
static readonly "CONDUIT": $BlockEntityType<($ConduitBlockEntity)>
static readonly "BARREL": $BlockEntityType<($BarrelBlockEntity)>
static readonly "SMOKER": $BlockEntityType<($SmokerBlockEntity)>
static readonly "BLAST_FURNACE": $BlockEntityType<($BlastFurnaceBlockEntity)>
static readonly "LECTERN": $BlockEntityType<($LecternBlockEntity)>
static readonly "BELL": $BlockEntityType<($BellBlockEntity)>
static readonly "JIGSAW": $BlockEntityType<($JigsawBlockEntity)>
static readonly "CAMPFIRE": $BlockEntityType<($CampfireBlockEntity)>
static readonly "BEEHIVE": $BlockEntityType<($BeehiveBlockEntity)>
static readonly "SCULK_SENSOR": $BlockEntityType<($SculkSensorBlockEntity)>
static readonly "CALIBRATED_SCULK_SENSOR": $BlockEntityType<($CalibratedSculkSensorBlockEntity)>
static readonly "SCULK_CATALYST": $BlockEntityType<($SculkCatalystBlockEntity)>
static readonly "SCULK_SHRIEKER": $BlockEntityType<($SculkShriekerBlockEntity)>
static readonly "CHISELED_BOOKSHELF": $BlockEntityType<($ChiseledBookShelfBlockEntity)>
static readonly "BRUSHABLE_BLOCK": $BlockEntityType<($BrushableBlockEntity)>
static readonly "DECORATED_POT": $BlockEntityType<($DecoratedPotBlockEntity)>

constructor(arg0: $BlockEntityType$BlockEntitySupplier$Type<(T)>, arg1: $Set$Type<($Block$Type)>, arg2: $Type$Type<(any)>)

public "isValid"(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniversalBlockEntityType$Type<T> = ($UniversalBlockEntityType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniversalBlockEntityType_<T> = $UniversalBlockEntityType$Type<(T)>;
}}
declare module "packages/yesman/epicfight/world/item/$SpearItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpearItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: $Tier$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpearItem$Type = ($SpearItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpearItem_ = $SpearItem$Type;
}}
declare module "packages/yesman/epicfight/world/item/$GreatswordItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GreatswordItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: $Tier$Type)

public "getEnchantmentValue"(): integer
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GreatswordItem$Type = ($GreatswordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GreatswordItem_ = $GreatswordItem$Type;
}}
declare module "packages/yesman/epicfight/world/damagesource/$EpicFightDamageSource" {
import {$StunType, $StunType$Type} from "packages/yesman/epicfight/world/damagesource/$StunType"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ExtraDamageInstance, $ExtraDamageInstance$Type} from "packages/yesman/epicfight/world/damagesource/$ExtraDamageInstance"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$DamageType, $DamageType$Type} from "packages/net/minecraft/world/damagesource/$DamageType"
import {$AnimationManager$AnimationAccessor, $AnimationManager$AnimationAccessor$Type} from "packages/yesman/epicfight/api/animation/$AnimationManager$AnimationAccessor"
import {$ValueModifier, $ValueModifier$Type} from "packages/yesman/epicfight/api/utils/math/$ValueModifier"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EpicFightDamageSource extends $DamageSource {

constructor(arg0: $Holder$Type<($DamageType$Type)>, arg1: $Entity$Type, arg2: $Entity$Type, arg3: $Vec3$Type)
constructor(arg0: $DamageSource$Type)

public "calculateArmorNegation"(): float
public "is"(arg0: $TagKey$Type<($DamageType$Type)>): boolean
public "calculateImpact"(): float
public "addRuntimeTag"(arg0: $TagKey$Type<($DamageType$Type)>): $EpicFightDamageSource
public "setExecute"(): $EpicFightDamageSource
public "attachDamageModifier"(arg0: $ValueModifier$Type): $EpicFightDamageSource
public "attachArmorNegationModifier"(arg0: $ValueModifier$Type): $EpicFightDamageSource
public "attachImpactModifier"(arg0: $ValueModifier$Type): $EpicFightDamageSource
public "addExtraDamage"(arg0: $ExtraDamageInstance$Type): $EpicFightDamageSource
public "setUsedItem"(arg0: $ItemStack$Type): $EpicFightDamageSource
public "getUsedItem"(): $ItemStack
public "setStunType"(arg0: $StunType$Type): $EpicFightDamageSource
public "getStunType"(): $StunType
public "setBaseArmorNegation"(arg0: float): $EpicFightDamageSource
public "getBaseArmorNegation"(): float
public "setBaseImpact"(arg0: float): $EpicFightDamageSource
public "getBaseImpact"(): float
public "setInitialPosition"(arg0: $Vec3$Type): $EpicFightDamageSource
public "getInitialPosition"(): $Vec3
public "setBasicAttack"(arg0: boolean): $EpicFightDamageSource
public "isBasicAttack"(): boolean
public "setAnimation"(arg0: $AnimationManager$AnimationAccessor$Type<(any)>): $EpicFightDamageSource
public "getAnimation"(): $AnimationManager$AnimationAccessor<(any)>
public "calculateDamageAgainst"(arg0: $Entity$Type, arg1: $LivingEntity$Type, arg2: float): float
set "usedItem"(value: $ItemStack$Type)
get "usedItem"(): $ItemStack
set "stunType"(value: $StunType$Type)
get "stunType"(): $StunType
set "baseArmorNegation"(value: float)
get "baseArmorNegation"(): float
set "baseImpact"(value: float)
get "baseImpact"(): float
set "initialPosition"(value: $Vec3$Type)
get "initialPosition"(): $Vec3
set "basicAttack"(value: boolean)
get "basicAttack"(): boolean
set "animation"(value: $AnimationManager$AnimationAccessor$Type<(any)>)
get "animation"(): $AnimationManager$AnimationAccessor<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EpicFightDamageSource$Type = ($EpicFightDamageSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EpicFightDamageSource_ = $EpicFightDamageSource$Type;
}}
declare module "packages/yesman/epicfight/client/mesh/$HumanoidMesh" {
import {$SkinnedMesh$SkinnedMeshPart, $SkinnedMesh$SkinnedMeshPart$Type} from "packages/yesman/epicfight/api/client/model/$SkinnedMesh$SkinnedMeshPart"
import {$VertexBuilder, $VertexBuilder$Type} from "packages/yesman/epicfight/api/client/model/$VertexBuilder"
import {$Mesh$RenderProperties, $Mesh$RenderProperties$Type} from "packages/yesman/epicfight/api/client/model/$Mesh$RenderProperties"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$MeshPartDefinition, $MeshPartDefinition$Type} from "packages/yesman/epicfight/api/client/model/$MeshPartDefinition"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$SkinnedMesh, $SkinnedMesh$Type} from "packages/yesman/epicfight/api/client/model/$SkinnedMesh"

export class $HumanoidMesh extends $SkinnedMesh {
readonly "head": $SkinnedMesh$SkinnedMeshPart
readonly "torso": $SkinnedMesh$SkinnedMeshPart
readonly "leftArm": $SkinnedMesh$SkinnedMeshPart
readonly "rightArm": $SkinnedMesh$SkinnedMeshPart
readonly "leftLeg": $SkinnedMesh$SkinnedMeshPart
readonly "rightLeg": $SkinnedMesh$SkinnedMeshPart
readonly "hat": $SkinnedMesh$SkinnedMeshPart
readonly "jacket": $SkinnedMesh$SkinnedMeshPart
readonly "leftSleeve": $SkinnedMesh$SkinnedMeshPart
readonly "rightSleeve": $SkinnedMesh$SkinnedMeshPart
readonly "leftPants": $SkinnedMesh$SkinnedMeshPart
readonly "rightPants": $SkinnedMesh$SkinnedMeshPart

constructor(arg0: $Map$Type<(string), ((number)[])>, arg1: $Map$Type<($MeshPartDefinition$Type), ($List$Type<($VertexBuilder$Type)>)>, arg2: $SkinnedMesh$Type, arg3: $Mesh$RenderProperties$Type)

public "getHumanoidArmorModel"(arg0: $EquipmentSlot$Type): $AssetAccessor<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HumanoidMesh$Type = ($HumanoidMesh);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HumanoidMesh_ = $HumanoidMesh$Type;
}}
declare module "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsProvider" {
import {$InverseKinematicsSimulator$InverseKinematicsBuilder, $InverseKinematicsSimulator$InverseKinematicsBuilder$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulator$InverseKinematicsBuilder"
import {$Armature, $Armature$Type} from "packages/yesman/epicfight/api/model/$Armature"
import {$Vec3f, $Vec3f$Type} from "packages/yesman/epicfight/api/utils/math/$Vec3f"
import {$InverseKinematicsSimulator$BakedInverseKinematicsDefinition, $InverseKinematicsSimulator$BakedInverseKinematicsDefinition$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulator$BakedInverseKinematicsDefinition"
import {$JointTransform, $JointTransform$Type} from "packages/yesman/epicfight/api/animation/$JointTransform"
import {$EnderDragonPatch, $EnderDragonPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/boss/enderdragon/$EnderDragonPatch"
import {$TransformSheet, $TransformSheet$Type} from "packages/yesman/epicfight/api/animation/$TransformSheet"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$InverseKinematicsSimulatable, $InverseKinematicsSimulatable$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulatable"
import {$InverseKinematicsSimulator$InverseKinematicsObject, $InverseKinematicsSimulator$InverseKinematicsObject$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulator$InverseKinematicsObject"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$SimulationProvider, $SimulationProvider$Type} from "packages/yesman/epicfight/api/physics/$SimulationProvider"

export interface $InverseKinematicsProvider extends $SimulationProvider<($InverseKinematicsSimulatable), ($InverseKinematicsSimulator$InverseKinematicsObject), ($InverseKinematicsSimulator$InverseKinematicsBuilder), ($InverseKinematicsProvider)> {

 "clipAnimation"(arg0: $TransformSheet$Type, arg1: $InverseKinematicsSimulator$BakedInverseKinematicsDefinition$Type): $TransformSheet
 "startPartAnimation"(arg0: $InverseKinematicsSimulator$BakedInverseKinematicsDefinition$Type, arg1: $InverseKinematicsSimulator$InverseKinematicsObject$Type, arg2: $TransformSheet$Type, arg3: $Vec3f$Type): void
 "startSimple"(arg0: $InverseKinematicsSimulator$InverseKinematicsObject$Type): void
 "getRayCastedTipPosition"(arg0: $InverseKinematicsSimulatable$Type, arg1: $Vec3f$Type, arg2: $OpenMatrix4f$Type, arg3: float, arg4: float): $Vec3f
 "correctRootRotation"(arg0: $JointTransform$Type, arg1: $EnderDragonPatch$Type, arg2: float): void
 "applyFabrikToJoint"(arg0: $Vec3f$Type, arg1: $Pose$Type, arg2: $Armature$Type, arg3: $Joint$Type, arg4: $Joint$Type, arg5: $Quaternionf$Type): void
 "createSimulationData"(arg0: $InverseKinematicsProvider$Type, arg1: $InverseKinematicsSimulatable$Type, arg2: $InverseKinematicsSimulator$InverseKinematicsBuilder$Type): $InverseKinematicsSimulator$InverseKinematicsObject

(arg0: $TransformSheet$Type, arg1: $InverseKinematicsSimulator$BakedInverseKinematicsDefinition$Type): $TransformSheet
}

export namespace $InverseKinematicsProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InverseKinematicsProvider$Type = ($InverseKinematicsProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InverseKinematicsProvider_ = $InverseKinematicsProvider$Type;
}}
declare module "packages/yesman/epicfight/api/utils/datastruct/$TypeFlexibleHashMap$TypeKey" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TypeFlexibleHashMap$TypeKey<T> {

 "defaultValue"(): T

(): T
}

export namespace $TypeFlexibleHashMap$TypeKey {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeFlexibleHashMap$TypeKey$Type<T> = ($TypeFlexibleHashMap$TypeKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeFlexibleHashMap$TypeKey_<T> = $TypeFlexibleHashMap$TypeKey$Type<(T)>;
}}
declare module "packages/yesman/epicfight/api/physics/$SimulatableObject" {
import {$PhysicsSimulator, $PhysicsSimulator$Type} from "packages/yesman/epicfight/api/physics/$PhysicsSimulator"
import {$SimulationTypes, $SimulationTypes$Type} from "packages/yesman/epicfight/api/physics/$SimulationTypes"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export interface $SimulatableObject {

 "getSimulator"<SIM extends $PhysicsSimulator<(any), (any), (any), (any), (any)>>(arg0: $SimulationTypes$Type<(any), (any), (any), (any), (any), (SIM)>): $Optional<(SIM)>

(arg0: $SimulationTypes$Type<(any), (any), (any), (any), (any), (SIM)>): $Optional<(SIM)>
}

export namespace $SimulatableObject {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimulatableObject$Type = ($SimulatableObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimulatableObject_ = $SimulatableObject$Type;
}}
declare module "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulator$ClothObjectBuilder" {
import {$ClothSimulator$ClothOBBCollider, $ClothSimulator$ClothOBBCollider$Type} from "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulator$ClothOBBCollider"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$SimulationObject$SimulationObjectBuilder, $SimulationObject$SimulationObjectBuilder$Type} from "packages/yesman/epicfight/api/physics/$SimulationObject$SimulationObjectBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$ClothSimulatable, $ClothSimulatable$Type} from "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulatable"

export class $ClothSimulator$ClothObjectBuilder extends $SimulationObject$SimulationObjectBuilder {

constructor()

public "parentJoint"(arg0: $Joint$Type): $ClothSimulator$ClothObjectBuilder
public "putAll"(arg0: $List$Type<($Pair$Type<($Function$Type<($ClothSimulatable$Type), ($OpenMatrix4f$Type)>), ($ClothSimulator$ClothOBBCollider$Type)>)>): $ClothSimulator$ClothObjectBuilder
public "addEntry"(arg0: $Function$Type<($ClothSimulatable$Type), ($OpenMatrix4f$Type)>, arg1: $ClothSimulator$ClothOBBCollider$Type): $ClothSimulator$ClothObjectBuilder
public static "create"(): $ClothSimulator$ClothObjectBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClothSimulator$ClothObjectBuilder$Type = ($ClothSimulator$ClothObjectBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClothSimulator$ClothObjectBuilder_ = $ClothSimulator$ClothObjectBuilder$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/entitypatch/$HurtableEntityPatch" {
import {$EntityState, $EntityState$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState"
import {$StunType, $StunType$Type} from "packages/yesman/epicfight/world/damagesource/$StunType"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$EntityPatch, $EntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$EntityPatch"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$LivingEvent$LivingTickEvent, $LivingEvent$LivingTickEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent$LivingTickEvent"

export class $HurtableEntityPatch<T extends $LivingEntity> extends $EntityPatch<(T)> {

constructor()

public "tick"(arg0: $LivingEvent$LivingTickEvent$Type): void
public "isStunned"(): boolean
public "getEntityState"(): $EntityState
public "setStunReductionOnHit"(arg0: $StunType$Type): void
public "getStunReduction"(): float
public "setDefaultStunReduction"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public "shouldCancelKnockback"(): boolean
public "knockBackEntity"(arg0: $Vec3$Type, arg1: float): void
public "playSound"(arg0: $SoundEvent$Type, arg1: float, arg2: float): void
public "playSound"(arg0: $SoundEvent$Type, arg1: float, arg2: float, arg3: float): void
public "overrideRender"(): boolean
public "getModelMatrix"(arg0: float): $OpenMatrix4f
public "getStunArmor"(): float
public "applyStun"(arg0: $StunType$Type, arg1: float): boolean
public "getStunShield"(): float
public "setStunShield"(arg0: float): void
public "damageStunShield"(arg0: float, arg1: float): void
public "getWeight"(): float
get "stunned"(): boolean
get "entityState"(): $EntityState
set "stunReductionOnHit"(value: $StunType$Type)
get "stunReduction"(): float
get "stunArmor"(): float
get "stunShield"(): float
set "stunShield"(value: float)
get "weight"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HurtableEntityPatch$Type<T> = ($HurtableEntityPatch<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HurtableEntityPatch_<T> = $HurtableEntityPatch$Type<(T)>;
}}
declare module "packages/yesman/epicfight/api/utils/$HitEntityList$Priority" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $HitEntityList$Priority extends $Enum<($HitEntityList$Priority)> {
static readonly "DISTANCE": $HitEntityList$Priority
static readonly "TARGET": $HitEntityList$Priority
static readonly "HOSTILITY": $HitEntityList$Priority


public static "values"(): ($HitEntityList$Priority)[]
public static "valueOf"(arg0: string): $HitEntityList$Priority
public "sort"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $List$Type<($Entity$Type)>): $List<($Entity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HitEntityList$Priority$Type = (("distance") | ("hostility") | ("target")) | ($HitEntityList$Priority);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HitEntityList$Priority_ = $HitEntityList$Priority$Type;
}}
declare module "packages/yesman/epicfight/api/utils/datastruct/$TypeFlexibleHashMap" {
import {$TypeFlexibleHashMap$TypeKey, $TypeFlexibleHashMap$TypeKey$Type} from "packages/yesman/epicfight/api/utils/datastruct/$TypeFlexibleHashMap$TypeKey"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $TypeFlexibleHashMap<A extends $TypeFlexibleHashMap$TypeKey<(any)>> extends $HashMap<(A), (any)> {

constructor(arg0: boolean)

public "get"<T>(arg0: A): T
public "put"<T>(arg0: $TypeFlexibleHashMap$TypeKey$Type<(T)>, arg1: T): T
public "getOrDefault"<T>(arg0: A): T
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeFlexibleHashMap$Type<A> = ($TypeFlexibleHashMap<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeFlexibleHashMap_<A> = $TypeFlexibleHashMap$Type<(A)>;
}}
declare module "packages/yesman/epicfight/client/gui/screen/$SkillBookScreen$AttributeIconList$ProvidingAttributeEntry" {
import {$ContainerObjectSelectionList$Entry, $ContainerObjectSelectionList$Entry$Type} from "packages/net/minecraft/client/gui/components/$ContainerObjectSelectionList$Entry"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $SkillBookScreen$AttributeIconList$ProvidingAttributeEntry extends $ContainerObjectSelectionList$Entry<($SkillBookScreen$AttributeIconList$ProvidingAttributeEntry)> {


public "narratables"(): $List<(any)>
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: boolean, arg9: float): void
public "children"(): $List<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillBookScreen$AttributeIconList$ProvidingAttributeEntry$Type = ($SkillBookScreen$AttributeIconList$ProvidingAttributeEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillBookScreen$AttributeIconList$ProvidingAttributeEntry_ = $SkillBookScreen$AttributeIconList$ProvidingAttributeEntry$Type;
}}
declare module "packages/yesman/epicfight/api/animation/property/$AnimationProperty$PoseModifier" {
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export interface $AnimationProperty$PoseModifier {

 "modify"(arg0: $DynamicAnimation$Type, arg1: $Pose$Type, arg2: $LivingEntityPatch$Type<(any)>, arg3: float, arg4: float): void

(arg0: $DynamicAnimation$Type, arg1: $Pose$Type, arg2: $LivingEntityPatch$Type<(any)>, arg3: float, arg4: float): void
}

export namespace $AnimationProperty$PoseModifier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationProperty$PoseModifier$Type = ($AnimationProperty$PoseModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationProperty$PoseModifier_ = $AnimationProperty$PoseModifier$Type;
}}
declare module "packages/yesman/epicfight/api/animation/$ServerAnimator" {
import {$AnimationPlayer, $AnimationPlayer$Type} from "packages/yesman/epicfight/api/animation/$AnimationPlayer"
import {$EntityState, $EntityState$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$Animator, $Animator$Type} from "packages/yesman/epicfight/api/animation/$Animator"

export class $ServerAnimator extends $Animator {
readonly "animationPlayer": $AnimationPlayer
 "hardPaused": boolean
 "softPaused": boolean

constructor(arg0: $LivingEntityPatch$Type<(any)>)

public "getPose"(arg0: float): $Pose
public static "getAnimator"(arg0: $LivingEntityPatch$Type<(any)>): $Animator
public "getPlayerFor"(arg0: $AssetAccessor$Type<(any)>): $AnimationPlayer
public "tick"(): void
public "getEntityState"(): $EntityState
public "getPlayer"(arg0: $AssetAccessor$Type<(any)>): $Optional<($AnimationPlayer)>
public "playShootingAnimation"(): void
public "reserveAnimation"(arg0: $AssetAccessor$Type<(any)>): void
public "playAnimationInstantly"(arg0: $AssetAccessor$Type<(any)>): void
public "playAnimation"(arg0: $AssetAccessor$Type<(any)>, arg1: float): void
public "stopPlaying"(arg0: $AssetAccessor$Type<(any)>): boolean
public "setSoftPause"(arg0: boolean): void
public "setHardPause"(arg0: boolean): void
public "findFor"<T>(arg0: $Class$Type<(T)>): $Pair<($AnimationPlayer), (T)>
get "entityState"(): $EntityState
set "softPause"(value: boolean)
set "hardPause"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerAnimator$Type = ($ServerAnimator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerAnimator_ = $ServerAnimator$Type;
}}
declare module "packages/yesman/epicfight/world/damagesource/$ExtraDamageInstance$ExtraDamageFunction" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ExtraDamageInstance$ExtraDamageFunction {

 "getBonusDamage"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: float, arg4: (float)[]): float

(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: float, arg4: (float)[]): float
}

export namespace $ExtraDamageInstance$ExtraDamageFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtraDamageInstance$ExtraDamageFunction$Type = ($ExtraDamageInstance$ExtraDamageFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtraDamageInstance$ExtraDamageFunction_ = $ExtraDamageInstance$ExtraDamageFunction$Type;
}}
declare module "packages/yesman/epicfight/api/animation/$Keyframe" {
import {$JointTransform, $JointTransform$Type} from "packages/yesman/epicfight/api/animation/$JointTransform"

export class $Keyframe {

constructor(arg0: float, arg1: $JointTransform$Type)
constructor(arg0: $Keyframe$Type)

public "copyFrom"(arg0: $Keyframe$Type): void
public "time"(): float
public "setTime"(arg0: float): void
public "toString"(): string
public "transform"(): $JointTransform
public static "empty"(): $Keyframe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Keyframe$Type = ($Keyframe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Keyframe_ = $Keyframe$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$StaminaConsumeEvent" {
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$AbstractPlayerEvent, $AbstractPlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AbstractPlayerEvent"

export class $StaminaConsumeEvent extends $AbstractPlayerEvent<($PlayerPatch<(any)>)> {

constructor(arg0: $PlayerPatch$Type<(any)>, arg1: float)

public "setAmount"(arg0: float): void
public "getAmount"(): float
set "amount"(value: float)
get "amount"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StaminaConsumeEvent$Type = ($StaminaConsumeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StaminaConsumeEvent_ = $StaminaConsumeEvent$Type;
}}
declare module "packages/yesman/epicfight/api/utils/$EntitySnapshot" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EntitySnapshot$PlayerSnapshot, $EntitySnapshot$PlayerSnapshot$Type} from "packages/yesman/epicfight/api/utils/$EntitySnapshot$PlayerSnapshot"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Mesh$DrawingFunction, $Mesh$DrawingFunction$Type} from "packages/yesman/epicfight/api/client/model/$Mesh$DrawingFunction"
import {$AbstractClientPlayerPatch, $AbstractClientPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$AbstractClientPlayerPatch"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export class $EntitySnapshot<T extends $LivingEntityPatch<(any)>> {

constructor(arg0: T)

public static "renderModelLists"(arg0: $BakedModel$Type, arg1: $ItemStack$Type, arg2: integer, arg3: integer, arg4: float, arg5: $PoseStack$Type, arg6: $VertexConsumer$Type, arg7: $Mesh$DrawingFunction$Type): void
public static "renderQuadList"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: $List$Type<($BakedQuad$Type)>, arg3: $ItemStack$Type, arg4: integer, arg5: integer, arg6: float, arg7: $Mesh$DrawingFunction$Type): void
public "renderTextured"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: $Function$Type<($ResourceLocation$Type), ($RenderType$Type)>, arg3: $Mesh$DrawingFunction$Type, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float): void
public "renderItems"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: $RenderType$Type, arg3: $Mesh$DrawingFunction$Type, arg4: integer, arg5: float): void
public "getHeightHalf"(): float
public static "capturePlayer"(arg0: $AbstractClientPlayerPatch$Type<(any)>): $EntitySnapshot$PlayerSnapshot
public "poseMatrices"(): ($OpenMatrix4f)[]
public "getModelMatrix"(): $OpenMatrix4f
public "getYRot"(): float
public static "captureLivingEntity"(arg0: $LivingEntityPatch$Type<(any)>): $EntitySnapshot<($LivingEntityPatch<(any)>)>
public "getPosition"(): $Vec3
public "render"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: $RenderType$Type, arg3: $Mesh$DrawingFunction$Type, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float): void
get "heightHalf"(): float
get "modelMatrix"(): $OpenMatrix4f
get "yRot"(): float
get "position"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntitySnapshot$Type<T> = ($EntitySnapshot<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntitySnapshot_<T> = $EntitySnapshot$Type<(T)>;
}}
declare module "packages/yesman/epicfight/api/collider/$Collider" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Armature, $Armature$Type} from "packages/yesman/epicfight/api/model/$Armature"
import {$AttackAnimation, $AttackAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$AttackAnimation"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Collider {

constructor(arg0: $Vec3$Type, arg1: $AABB$Type)

public "getCollideEntities"(arg0: $Entity$Type): $List<($Entity)>
public "updateAndSelectCollideEntity"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $AttackAnimation$Type, arg2: float, arg3: float, arg4: $Joint$Type, arg5: float): $List<($Entity)>
public "drawInternal"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: $Armature$Type, arg3: $Joint$Type, arg4: $Pose$Type, arg5: $Pose$Type, arg6: float, arg7: integer): void
public "isCollide"(arg0: $Entity$Type): boolean
public "getRenderType"(): $RenderType
public "toString"(): string
public "serialize"(arg0: $CompoundTag$Type): $CompoundTag
public "draw"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: $LivingEntityPatch$Type<(any)>, arg3: $AttackAnimation$Type, arg4: $Joint$Type, arg5: float, arg6: float, arg7: float, arg8: float): void
public "deepCopy"(): $Collider
get "renderType"(): $RenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Collider$Type = ($Collider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Collider_ = $Collider$Type;
}}
declare module "packages/yesman/epicfight/api/animation/types/$DynamicAnimation" {
import {$AnimationPlayer, $AnimationPlayer$Type} from "packages/yesman/epicfight/api/animation/$AnimationPlayer"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$EntityState$StateFactor, $EntityState$StateFactor$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState$StateFactor"
import {$TypeFlexibleHashMap, $TypeFlexibleHashMap$Type} from "packages/yesman/epicfight/api/utils/datastruct/$TypeFlexibleHashMap"
import {$TransformSheet, $TransformSheet$Type} from "packages/yesman/epicfight/api/animation/$TransformSheet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AnimationClip, $AnimationClip$Type} from "packages/yesman/epicfight/api/animation/$AnimationClip"
import {$EntityState, $EntityState$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$AnimationManager$AnimationAccessor, $AnimationManager$AnimationAccessor$Type} from "packages/yesman/epicfight/api/animation/$AnimationManager$AnimationAccessor"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AnimationProperty, $AnimationProperty$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationProperty"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$JointMaskEntry, $JointMaskEntry$Type} from "packages/yesman/epicfight/api/client/animation/property/$JointMaskEntry"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DynamicAnimation {

constructor(arg0: float, arg1: boolean)
constructor()

public "getJointMaskEntry"(arg0: $LivingEntityPatch$Type<(any)>, arg1: boolean): $Optional<($JointMaskEntry)>
public "hasTransformFor"(arg0: string): boolean
public "getStatesMap"(arg0: $LivingEntityPatch$Type<(any)>, arg1: float): $TypeFlexibleHashMap<($EntityState$StateFactor<(any)>)>
public "renderDebugging"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: $LivingEntityPatch$Type<(any)>, arg3: float, arg4: float): void
public "isMetaAnimation"(): boolean
public "putOnPlayer"(arg0: $AnimationPlayer$Type, arg1: $LivingEntityPatch$Type<(any)>): void
public "getAnimationClip"(): $AnimationClip
public "isLinkAnimation"(): boolean
public "getTransitionTime"(): float
public "setTotalTime"(arg0: float): void
public "isMainFrameAnimation"(): boolean
public "isStaticAnimation"(): boolean
public "linkTick"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $AssetAccessor$Type<(any)>): void
public "getCoord"(): $TransformSheet
public "isRepeat"(): boolean
public "getPoseByTime"(arg0: $LivingEntityPatch$Type<(any)>, arg1: float, arg2: float): $Pose
public "modifyPose"(arg0: $DynamicAnimation$Type, arg1: $Pose$Type, arg2: $LivingEntityPatch$Type<(any)>, arg3: float, arg4: float): void
public "canBePlayedReverse"(): boolean
public "isClientAnimation"(): boolean
public "getRawPose"(arg0: float): $Pose
public "getTransfroms"(): $Map<(string), ($TransformSheet)>
public "isReboundAnimation"(): boolean
public "isBasicAttackAnimation"(): boolean
public "getPlaySpeed"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $DynamicAnimation$Type): float
public "getRegistryName"(): $ResourceLocation
public "getRealAnimation"(): $AssetAccessor<(any)>
public "tick"(arg0: $LivingEntityPatch$Type<(any)>): void
public "doesHeadRotFollowEntityHead"(): boolean
public "getProperty"<V>(arg0: $AnimationProperty$Type<(V)>): $Optional<(V)>
public "end"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $AssetAccessor$Type<(any)>, arg2: boolean): void
public "begin"(arg0: $LivingEntityPatch$Type<(any)>): void
public "getId"(): integer
public "getState"(arg0: $LivingEntityPatch$Type<(any)>, arg1: float): $EntityState
public "getState"<T>(arg0: $EntityState$StateFactor$Type<(T)>, arg1: $LivingEntityPatch$Type<(any)>, arg2: float): T
public "getAccessor"<A extends $DynamicAnimation>(): $AnimationManager$AnimationAccessor<(any)>
public "getTotalTime"(): float
get "metaAnimation"(): boolean
get "animationClip"(): $AnimationClip
get "linkAnimation"(): boolean
get "transitionTime"(): float
set "totalTime"(value: float)
get "mainFrameAnimation"(): boolean
get "staticAnimation"(): boolean
get "coord"(): $TransformSheet
get "repeat"(): boolean
get "clientAnimation"(): boolean
get "transfroms"(): $Map<(string), ($TransformSheet)>
get "reboundAnimation"(): boolean
get "basicAttackAnimation"(): boolean
get "registryName"(): $ResourceLocation
get "realAnimation"(): $AssetAccessor<(any)>
get "id"(): integer
get "accessor"(): $AnimationManager$AnimationAccessor<(any)>
get "totalTime"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicAnimation$Type = ($DynamicAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicAnimation_ = $DynamicAnimation$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$DealDamageEvent$Hurt" {
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$DealDamageEvent, $DealDamageEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$DealDamageEvent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EpicFightDamageSource, $EpicFightDamageSource$Type} from "packages/yesman/epicfight/world/damagesource/$EpicFightDamageSource"

export class $DealDamageEvent$Hurt extends $DealDamageEvent<($LivingHurtEvent)> {

constructor(arg0: $ServerPlayerPatch$Type, arg1: $LivingEntity$Type, arg2: $EpicFightDamageSource$Type, arg3: $LivingHurtEvent$Type)

public "getAttackDamage"(): float
get "attackDamage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DealDamageEvent$Hurt$Type = ($DealDamageEvent$Hurt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DealDamageEvent$Hurt_ = $DealDamageEvent$Hurt$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch$PlayerMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PlayerPatch$PlayerMode extends $Enum<($PlayerPatch$PlayerMode)> {
static readonly "VANILLA": $PlayerPatch$PlayerMode
static readonly "EPICFIGHT": $PlayerPatch$PlayerMode


public static "values"(): ($PlayerPatch$PlayerMode)[]
public static "valueOf"(arg0: string): $PlayerPatch$PlayerMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerPatch$PlayerMode$Type = (("epicfight") | ("vanilla")) | ($PlayerPatch$PlayerMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerPatch$PlayerMode_ = $PlayerPatch$PlayerMode$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$RightClickItemEvent" {
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$AbstractPlayerEvent, $AbstractPlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AbstractPlayerEvent"

export class $RightClickItemEvent<T extends $PlayerPatch<(any)>> extends $AbstractPlayerEvent<(T)> {

constructor(arg0: T)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RightClickItemEvent$Type<T> = ($RightClickItemEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RightClickItemEvent_<T> = $RightClickItemEvent$Type<(T)>;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$SkillCancelEvent" {
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$SkillContainer, $SkillContainer$Type} from "packages/yesman/epicfight/skill/$SkillContainer"
import {$AbstractPlayerEvent, $AbstractPlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AbstractPlayerEvent"

export class $SkillCancelEvent extends $AbstractPlayerEvent<($PlayerPatch<(any)>)> {

constructor(arg0: $PlayerPatch$Type<(any)>, arg1: $SkillContainer$Type)

public "getSkillContainer"(): $SkillContainer
get "skillContainer"(): $SkillContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillCancelEvent$Type = ($SkillCancelEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillCancelEvent_ = $SkillCancelEvent$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/entitypatch/$EntityDecorations" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Vec2i, $Vec2i$Type} from "packages/yesman/epicfight/api/utils/math/$Vec2i"
import {$CapabilityItem, $CapabilityItem$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$EntityDecorations$ParticleGenerator, $EntityDecorations$ParticleGenerator$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$EntityDecorations$ParticleGenerator"
import {$EntityDecorations$RenderAttributeModifier, $EntityDecorations$RenderAttributeModifier$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$EntityDecorations$RenderAttributeModifier"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$TrailInfo, $TrailInfo$Type} from "packages/yesman/epicfight/api/client/animation/property/$TrailInfo"
import {$EntityDecorations$DecorationOverlay, $EntityDecorations$DecorationOverlay$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$EntityDecorations$DecorationOverlay"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EntityDecorations$AnimationPropertyModifier, $EntityDecorations$AnimationPropertyModifier$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$EntityDecorations$AnimationPropertyModifier"

export class $EntityDecorations {
static readonly "ADAPTIVE_SKIN_COLOR": $ResourceLocation
static readonly "ADAPTIVE_SKIN_OVERLAY": $ResourceLocation
static readonly "BERSERKER_PARTICLE": $ResourceLocation
static readonly "BERSERKER_OVERLAY": $ResourceLocation
static readonly "BONEBREAKER_OVERLAY": $ResourceLocation
static readonly "EMERGENCY_ESCAPE_TRANSPARENCY_MODIFIER": $ResourceLocation
static readonly "HYPERVITALITY_OVERLAY": $ResourceLocation
static readonly "STAMINA_PILLAGER_ASHES_COLOR": $ResourceLocation
static readonly "STAMINA_PILLAGER_ASHES_OVERLAY": $ResourceLocation
static readonly "STAMINA_PILLAGER_ASHES_PARTICLE": $ResourceLocation
static readonly "STAMINA_PILLAGER_FILLS_UP_OVERLAY": $ResourceLocation
static readonly "STAMINA_PILLAGER_FILLS_UP_LIGHT": $ResourceLocation
static readonly "FLASH_WHITE_OVERLAY": $ResourceLocation
static readonly "FLASH_WHITE_LIGHT": $ResourceLocation
static readonly "SWORDMASTER_SWING_SOUND": $ResourceLocation
static readonly "SWORDMASTER_TRAIL_MODIFIER": $ResourceLocation
static readonly "VENGEANCE_OVERLAY": $ResourceLocation

constructor()

public "removeOverlayCoordModifier"(arg0: $ResourceLocation$Type): boolean
public "removeLightModifier"(arg0: $ResourceLocation$Type): boolean
public "addSwingSoundModifier"(arg0: $ResourceLocation$Type, arg1: $EntityDecorations$AnimationPropertyModifier$Type<($SoundEvent$Type), ($CapabilityItem$Type)>): void
public "removeSwingSoundModifier"(arg0: $ResourceLocation$Type): boolean
public "addHurtSoundModifier"(arg0: $ResourceLocation$Type, arg1: $EntityDecorations$AnimationPropertyModifier$Type<($SoundEvent$Type), ($CapabilityItem$Type)>): void
public "removeHurtSoundModifier"(arg0: $ResourceLocation$Type): boolean
public "addTrailInfoModifier"(arg0: $ResourceLocation$Type, arg1: $EntityDecorations$AnimationPropertyModifier$Type<($TrailInfo$Type), ($CapabilityItem$Type)>): void
public "removeTrailInfoModifier"(arg0: $ResourceLocation$Type): boolean
public "removeParticleGenerator"(arg0: $ResourceLocation$Type): boolean
public "getModifiedHurtSound"(arg0: $SoundEvent$Type, arg1: $CapabilityItem$Type): $SoundEvent
public "getModifiedTrailInfo"(arg0: $TrailInfo$Type, arg1: $CapabilityItem$Type): $TrailInfo
public "modifyOverlay"(arg0: $Vec2i$Type, arg1: float): void
public "modifyColor"(arg0: $Vector4f$Type, arg1: float): void
public "modifyLight"(arg0: $Vec2i$Type, arg1: float): void
public "listDecorationOverlays"(): $Stream<($EntityDecorations$DecorationOverlay)>
public "tick"(): void
public "addDecorationOverlay"(arg0: $ResourceLocation$Type, arg1: $EntityDecorations$DecorationOverlay$Type): void
public "removeDecorationOverlay"(arg0: $ResourceLocation$Type): void
public "addColorModifier"(arg0: $ResourceLocation$Type, arg1: $EntityDecorations$RenderAttributeModifier$Type<($Vector4f$Type)>): void
public "addOverlayCoordModifier"(arg0: $ResourceLocation$Type, arg1: $EntityDecorations$RenderAttributeModifier$Type<($Vec2i$Type)>): void
public "addParticleGenerator"(arg0: $ResourceLocation$Type, arg1: $EntityDecorations$ParticleGenerator$Type): void
public "addLightModifier"(arg0: $ResourceLocation$Type, arg1: $EntityDecorations$RenderAttributeModifier$Type<($Vec2i$Type)>): void
public "removeColorModifier"(arg0: $ResourceLocation$Type): boolean
public "getModifiedSwingSound"(arg0: $SoundEvent$Type, arg1: $CapabilityItem$Type): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityDecorations$Type = ($EntityDecorations);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityDecorations_ = $EntityDecorations$Type;
}}
declare module "packages/yesman/epicfight/world/effect/$VisibleMobEffect" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $VisibleMobEffect extends $MobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer, arg2: $Function$Type<($MobEffectInstance$Type), (integer)>, ...arg3: ($ResourceLocation$Type)[])
constructor(arg0: $MobEffectCategory$Type, arg1: integer, arg2: $ResourceLocation$Type)

public "getIcon"(arg0: $MobEffectInstance$Type): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VisibleMobEffect$Type = ($VisibleMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VisibleMobEffect_ = $VisibleMobEffect$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$BasicAttackEvent" {
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$AbstractPlayerEvent, $AbstractPlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AbstractPlayerEvent"

export class $BasicAttackEvent extends $AbstractPlayerEvent<($ServerPlayerPatch)> {

constructor(arg0: $ServerPlayerPatch$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicAttackEvent$Type = ($BasicAttackEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicAttackEvent_ = $BasicAttackEvent$Type;
}}
declare module "packages/yesman/epicfight/client/renderer/patched/item/$RenderItemBase" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$TrailInfo, $TrailInfo$Type} from "packages/yesman/epicfight/api/client/animation/property/$TrailInfo"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $RenderItemBase {
readonly "transformHolder": $OpenMatrix4f

constructor(arg0: $JsonElement$Type)

public "appearedInAfterimage"(): boolean
public "getCorrectionMatrix"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $InteractionHand$Type, arg2: ($OpenMatrix4f$Type)[]): $OpenMatrix4f
public "forceVanillaFirstPerson"(): boolean
public "trailInfo"(): $TrailInfo
public static "initItemRenderers"(arg0: $Minecraft$Type): void
public "renderItemInHand"(arg0: $ItemStack$Type, arg1: $LivingEntityPatch$Type<(any)>, arg2: $InteractionHand$Type, arg3: ($OpenMatrix4f$Type)[], arg4: $MultiBufferSource$Type, arg5: $PoseStack$Type, arg6: integer, arg7: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderItemBase$Type = ($RenderItemBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderItemBase_ = $RenderItemBase$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch$ServerAnimationPacketProvider" {
import {$AnimatorControlPacket$Action, $AnimatorControlPacket$Action$Type} from "packages/yesman/epicfight/network/common/$AnimatorControlPacket$Action"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$SPAnimatorControl, $SPAnimatorControl$Type} from "packages/yesman/epicfight/network/server/$SPAnimatorControl"

export interface $LivingEntityPatch$ServerAnimationPacketProvider {

 "get"(arg0: $AnimatorControlPacket$Action$Type, arg1: $AssetAccessor$Type<(any)>, arg2: float, arg3: $LivingEntityPatch$Type<(any)>): $SPAnimatorControl

(arg0: $AnimatorControlPacket$Action$Type, arg1: $AssetAccessor$Type<(any)>, arg2: float, arg3: $LivingEntityPatch$Type<(any)>): $SPAnimatorControl
}

export namespace $LivingEntityPatch$ServerAnimationPacketProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityPatch$ServerAnimationPacketProvider$Type = ($LivingEntityPatch$ServerAnimationPacketProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityPatch$ServerAnimationPacketProvider_ = $LivingEntityPatch$ServerAnimationPacketProvider$Type;
}}
declare module "packages/yesman/epicfight/api/animation/$AnimationVariables" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$AnimationVariables$IndependentAnimationVariableKey, $AnimationVariables$IndependentAnimationVariableKey$Type} from "packages/yesman/epicfight/api/animation/$AnimationVariables$IndependentAnimationVariableKey"
import {$AnimationVariables$SharedAnimationVariableKey, $AnimationVariables$SharedAnimationVariableKey$Type} from "packages/yesman/epicfight/api/animation/$AnimationVariables$SharedAnimationVariableKey"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$AnimationManager$AnimationAccessor, $AnimationManager$AnimationAccessor$Type} from "packages/yesman/epicfight/api/animation/$AnimationManager$AnimationAccessor"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Animator, $Animator$Type} from "packages/yesman/epicfight/api/animation/$Animator"

export class $AnimationVariables {

constructor(arg0: $Animator$Type)

public static "independent"<T>(arg0: $Function$Type<($Animator$Type), (T)>, arg1: boolean): $AnimationVariables$IndependentAnimationVariableKey<(T)>
public "getSharedVariable"<T>(arg0: $AnimationVariables$SharedAnimationVariableKey$Type<(T)>): $Optional<(T)>
/**
 * 
 * @deprecated
 */
public "putSharedVariable"<T>(arg0: $AnimationVariables$SharedAnimationVariableKey$Type<(T)>, arg1: T, arg2: boolean): void
public "putSharedVariable"<T>(arg0: $AnimationVariables$SharedAnimationVariableKey$Type<(T)>, arg1: T): void
public "putDefaultValue"<T>(arg0: $AnimationVariables$IndependentAnimationVariableKey$Type<(T)>, arg1: $AssetAccessor$Type<(any)>): void
public "removeSharedVariable"<T>(arg0: $AnimationVariables$SharedAnimationVariableKey$Type<(T)>): T
/**
 * 
 * @deprecated
 */
public "removeSharedVariable"<T>(arg0: $AnimationVariables$SharedAnimationVariableKey$Type<(T)>, arg1: boolean): T
public "putDefaultSharedVariable"<T>(arg0: $AnimationVariables$SharedAnimationVariableKey$Type<(T)>): void
public "getOrDefaultSharedVariable"<T>(arg0: $AnimationVariables$SharedAnimationVariableKey$Type<(T)>): T
/**
 * 
 * @deprecated
 */
public "remove"(arg0: $AnimationVariables$IndependentAnimationVariableKey$Type<(any)>, arg1: $AssetAccessor$Type<(any)>, arg2: boolean): void
public "remove"(arg0: $AnimationVariables$IndependentAnimationVariableKey$Type<(any)>, arg1: $AssetAccessor$Type<(any)>): void
public "get"<T>(arg0: $AnimationVariables$IndependentAnimationVariableKey$Type<(T)>, arg1: $AssetAccessor$Type<(any)>): $Optional<(T)>
/**
 * 
 * @deprecated
 */
public "put"<T>(arg0: $AnimationVariables$IndependentAnimationVariableKey$Type<(T)>, arg1: $AssetAccessor$Type<(any)>, arg2: T, arg3: boolean): void
public "put"<T>(arg0: $AnimationVariables$IndependentAnimationVariableKey$Type<(T)>, arg1: $AssetAccessor$Type<(any)>, arg2: T): void
public "getOrDefault"<T>(arg0: $AnimationVariables$IndependentAnimationVariableKey$Type<(T)>, arg1: $AssetAccessor$Type<(any)>): T
public static "shared"<T>(arg0: $Function$Type<($Animator$Type), (T)>, arg1: boolean): $AnimationVariables$SharedAnimationVariableKey<(T)>
public "removeAll"(arg0: $AnimationManager$AnimationAccessor$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationVariables$Type = ($AnimationVariables);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationVariables_ = $AnimationVariables$Type;
}}
declare module "packages/yesman/epicfight/world/item/$DaggerItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DaggerItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: $Tier$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DaggerItem$Type = ($DaggerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DaggerItem_ = $DaggerItem$Type;
}}
declare module "packages/yesman/epicfight/api/client/forgeevent/$UpdatePlayerMotionEvent$BaseLayer" {
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$UpdatePlayerMotionEvent, $UpdatePlayerMotionEvent$Type} from "packages/yesman/epicfight/api/client/forgeevent/$UpdatePlayerMotionEvent"
import {$AbstractClientPlayerPatch, $AbstractClientPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$AbstractClientPlayerPatch"

export class $UpdatePlayerMotionEvent$BaseLayer extends $UpdatePlayerMotionEvent {

constructor()
constructor(arg0: $AbstractClientPlayerPatch$Type<(any)>, arg1: $LivingMotion$Type, arg2: boolean)

public "inaction"(): boolean
public "getListenerList"(): $ListenerList
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "listenerList"(): $ListenerList
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpdatePlayerMotionEvent$BaseLayer$Type = ($UpdatePlayerMotionEvent$BaseLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpdatePlayerMotionEvent$BaseLayer_ = $UpdatePlayerMotionEvent$BaseLayer$Type;
}}
declare module "packages/yesman/epicfight/client/gui/$BattleModeGui" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ForgeGui, $ForgeGui$Type} from "packages/net/minecraftforge/client/gui/overlay/$ForgeGui"

export class $BattleModeGui {

constructor(arg0: $Minecraft$Type)

public "renderStaminaBar"(arg0: $ForgeGui$Type, arg1: $GuiGraphics$Type, arg2: float, arg3: integer, arg4: integer): void
public "renderNormalSkills"(arg0: $ForgeGui$Type, arg1: $GuiGraphics$Type, arg2: float, arg3: integer, arg4: integer): void
public "renderWeaponInnateSkill"(arg0: $ForgeGui$Type, arg1: $GuiGraphics$Type, arg2: float, arg3: integer, arg4: integer): void
public "renderCharingBar"(arg0: $ForgeGui$Type, arg1: $GuiGraphics$Type, arg2: float, arg3: integer, arg4: integer): void
public "slideUp"(): void
public "slideDown"(): void
public "getSlidingProgression"(): integer
public "getFont"(): $Font
public "init"(): void
public "renderTick"(): void
get "slidingProgression"(): integer
get "font"(): $Font
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BattleModeGui$Type = ($BattleModeGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BattleModeGui_ = $BattleModeGui$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/entitypatch/$MobPatch" {
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$Faction, $Faction$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$Faction"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$EntityJoinLevelEvent, $EntityJoinLevelEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityJoinLevelEvent"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$AttackResult, $AttackResult$Type} from "packages/yesman/epicfight/api/utils/$AttackResult"
import {$EpicFightDamageSource, $EpicFightDamageSource$Type} from "packages/yesman/epicfight/world/damagesource/$EpicFightDamageSource"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MobPatch<T extends $Mob> extends $LivingEntityPatch<(T)> {
static readonly "WEIGHT_CORRECTION": double
 "currentLivingMotion": $LivingMotion
 "currentCompositeMotion": $LivingMotion

constructor(arg0: $Faction$Type)
constructor()

public "setAttakTargetSync"(arg0: $LivingEntity$Type): void
public "attack"(arg0: $EpicFightDamageSource$Type, arg1: $Entity$Type, arg2: $InteractionHand$Type): $AttackResult
public "onJoinWorld"(arg0: T, arg1: $EntityJoinLevelEvent$Type): void
public "getAttackDirectionPitch"(): float
public "isTargetInvulnerable"(arg0: $Entity$Type): boolean
public "getFaction"(): $Faction
public "getTarget"(): $LivingEntity
set "attakTargetSync"(value: $LivingEntity$Type)
get "attackDirectionPitch"(): float
get "faction"(): $Faction
get "target"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobPatch$Type<T> = ($MobPatch<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobPatch_<T> = $MobPatch$Type<(T)>;
}}
declare module "packages/yesman/epicfight/client/renderer/$FakeBlockRenderer" {
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $FakeBlockRenderer {

 "render"(arg0: $Camera$Type, arg1: $PoseStack$Type, arg2: $MultiBufferSource$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: float, arg6: float, arg7: float, arg8: float): void

(arg0: $Camera$Type, arg1: $PoseStack$Type, arg2: $MultiBufferSource$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: float, arg6: float, arg7: float, arg8: float): void
}

export namespace $FakeBlockRenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FakeBlockRenderer$Type = ($FakeBlockRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FakeBlockRenderer_ = $FakeBlockRenderer$Type;
}}
declare module "packages/yesman/epicfight/skill/modules/$ChargeableSkill" {
import {$HoldableSkill, $HoldableSkill$Type} from "packages/yesman/epicfight/skill/modules/$HoldableSkill"
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$ControlEngine, $ControlEngine$Type} from "packages/yesman/epicfight/client/events/engine/$ControlEngine"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$SkillContainer, $SkillContainer$Type} from "packages/yesman/epicfight/skill/$SkillContainer"
import {$SPSkillExecutionFeedback, $SPSkillExecutionFeedback$Type} from "packages/yesman/epicfight/network/server/$SPSkillExecutionFeedback"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"

export interface $ChargeableSkill extends $HoldableSkill {

 "holdTick"(arg0: $SkillContainer$Type): void
 "getAllowedMaxChargingTicks"(): integer
 "getMaxChargingTicks"(): integer
 "resetHolding"(arg0: $SkillContainer$Type): void
 "getMinChargingTicks"(): integer
 "getKeyMapping"(): $KeyMapping
 "asSkill"(): $Skill
 "startHolding"(arg0: $SkillContainer$Type): void
 "onStopHolding"(arg0: $SkillContainer$Type, arg1: $SPSkillExecutionFeedback$Type): void
 "gatherHoldArguments"(arg0: $SkillContainer$Type, arg1: $ControlEngine$Type, arg2: $FriendlyByteBuf$Type): void
}

export namespace $ChargeableSkill {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargeableSkill$Type = ($ChargeableSkill);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargeableSkill_ = $ChargeableSkill$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEventListener$EventType" {
import {$DodgeSuccessEvent, $DodgeSuccessEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$DodgeSuccessEvent"
import {$StaminaConsumeEvent, $StaminaConsumeEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$StaminaConsumeEvent"
import {$DealDamageEvent$Damage, $DealDamageEvent$Damage$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$DealDamageEvent$Damage"
import {$SkillCancelEvent, $SkillCancelEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$SkillCancelEvent"
import {$SkillConsumeEvent, $SkillConsumeEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$SkillConsumeEvent"
import {$PlayerKilledEvent, $PlayerKilledEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$PlayerKilledEvent"
import {$MovementInputEvent, $MovementInputEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$MovementInputEvent"
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$DetachablePlayerEvent, $DetachablePlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$DetachablePlayerEvent"
import {$ItemUseEndEvent, $ItemUseEndEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$ItemUseEndEvent"
import {$ModifyAttackSpeedEvent, $ModifyAttackSpeedEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$ModifyAttackSpeedEvent"
import {$AnimationBeginEvent, $AnimationBeginEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AnimationBeginEvent"
import {$FallEvent, $FallEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$FallEvent"
import {$AttackEndEvent, $AttackEndEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AttackEndEvent"
import {$AttackPhaseEndEvent, $AttackPhaseEndEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AttackPhaseEndEvent"
import {$UpdatePlayerMotionEvent$BaseLayer, $UpdatePlayerMotionEvent$BaseLayer$Type} from "packages/yesman/epicfight/api/client/forgeevent/$UpdatePlayerMotionEvent$BaseLayer"
import {$BasicAttackEvent, $BasicAttackEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$BasicAttackEvent"
import {$ActionEvent, $ActionEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$ActionEvent"
import {$AnimationEndEvent, $AnimationEndEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AnimationEndEvent"
import {$UpdatePlayerMotionEvent$CompositeLayer, $UpdatePlayerMotionEvent$CompositeLayer$Type} from "packages/yesman/epicfight/api/client/forgeevent/$UpdatePlayerMotionEvent$CompositeLayer"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$ComboCounterHandleEvent, $ComboCounterHandleEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$ComboCounterHandleEvent"
import {$ProjectileHitEvent, $ProjectileHitEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$ProjectileHitEvent"
import {$LocalPlayerPatch, $LocalPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch"
import {$DealDamageEvent$Hurt, $DealDamageEvent$Hurt$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$DealDamageEvent$Hurt"
import {$ModifyBaseDamageEvent, $ModifyBaseDamageEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$ModifyBaseDamageEvent"
import {$TakeDamageEvent$Damage, $TakeDamageEvent$Damage$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$TakeDamageEvent$Damage"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$TakeDamageEvent$Hurt, $TakeDamageEvent$Hurt$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$TakeDamageEvent$Hurt"
import {$TargetIndicatorCheckEvent, $TargetIndicatorCheckEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$TargetIndicatorCheckEvent"
import {$SkillCastEvent, $SkillCastEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$SkillCastEvent"
import {$SetTargetEvent, $SetTargetEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$SetTargetEvent"
import {$RightClickItemEvent, $RightClickItemEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$RightClickItemEvent"
import {$TakeDamageEvent$Attack, $TakeDamageEvent$Attack$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$TakeDamageEvent$Attack"
import {$DealDamageEvent$Attack, $DealDamageEvent$Attack$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$DealDamageEvent$Attack"

export class $PlayerEventListener$EventType<T extends $DetachablePlayerEvent<(any)>> {
static readonly "ACTION_EVENT_CLIENT": $PlayerEventListener$EventType<($ActionEvent<($LocalPlayerPatch)>)>
static readonly "ACTION_EVENT_SERVER": $PlayerEventListener$EventType<($ActionEvent<($ServerPlayerPatch)>)>
static readonly "MODIFY_ATTACK_SPEED_EVENT": $PlayerEventListener$EventType<($ModifyAttackSpeedEvent)>
static readonly "MODIFY_DAMAGE_EVENT": $PlayerEventListener$EventType<($ModifyBaseDamageEvent<($PlayerPatch<(any)>)>)>
static readonly "DEAL_DAMAGE_EVENT_ATTACK": $PlayerEventListener$EventType<($DealDamageEvent$Attack)>
static readonly "DEAL_DAMAGE_EVENT_HURT": $PlayerEventListener$EventType<($DealDamageEvent$Hurt)>
static readonly "DEAL_DAMAGE_EVENT_DAMAGE": $PlayerEventListener$EventType<($DealDamageEvent$Damage)>
static readonly "TAKE_DAMAGE_EVENT_ATTACK": $PlayerEventListener$EventType<($TakeDamageEvent$Attack)>
static readonly "TAKE_DAMAGE_EVENT_HURT": $PlayerEventListener$EventType<($TakeDamageEvent$Hurt)>
static readonly "TAKE_DAMAGE_EVENT_DAMAGE": $PlayerEventListener$EventType<($TakeDamageEvent$Damage)>
static readonly "ANIMATION_BEGIN_EVENT": $PlayerEventListener$EventType<($AnimationBeginEvent)>
static readonly "ANIMATION_END_EVENT": $PlayerEventListener$EventType<($AnimationEndEvent)>
static readonly "ATTACK_ANIMATION_END_EVENT": $PlayerEventListener$EventType<($AttackEndEvent)>
static readonly "ATTACK_PHASE_END_EVENT": $PlayerEventListener$EventType<($AttackPhaseEndEvent)>
static readonly "BASIC_ATTACK_EVENT": $PlayerEventListener$EventType<($BasicAttackEvent)>
static readonly "MOVEMENT_INPUT_EVENT": $PlayerEventListener$EventType<($MovementInputEvent)>
static readonly "CLIENT_ITEM_USE_EVENT": $PlayerEventListener$EventType<($RightClickItemEvent<($LocalPlayerPatch)>)>
static readonly "SERVER_ITEM_USE_EVENT": $PlayerEventListener$EventType<($RightClickItemEvent<($ServerPlayerPatch)>)>
static readonly "SERVER_ITEM_STOP_EVENT": $PlayerEventListener$EventType<($ItemUseEndEvent)>
static readonly "PROJECTILE_HIT_EVENT": $PlayerEventListener$EventType<($ProjectileHitEvent)>
static readonly "SKILL_CAST_EVENT": $PlayerEventListener$EventType<($SkillCastEvent)>
static readonly "SKILL_CANCEL_EVENT": $PlayerEventListener$EventType<($SkillCancelEvent)>
static readonly "SKILL_CONSUME_EVENT": $PlayerEventListener$EventType<($SkillConsumeEvent)>
static readonly "STAMINA_CONSUME_EVENT": $PlayerEventListener$EventType<($StaminaConsumeEvent)>
static readonly "COMBO_COUNTER_HANDLE_EVENT": $PlayerEventListener$EventType<($ComboCounterHandleEvent)>
static readonly "TARGET_INDICATOR_ALERT_CHECK_EVENT": $PlayerEventListener$EventType<($TargetIndicatorCheckEvent)>
static readonly "FALL_EVENT": $PlayerEventListener$EventType<($FallEvent)>
static readonly "SET_TARGET_EVENT": $PlayerEventListener$EventType<($SetTargetEvent)>
static readonly "DODGE_SUCCESS_EVENT": $PlayerEventListener$EventType<($DodgeSuccessEvent)>
static readonly "PLAYER_KILLED_EVENT": $PlayerEventListener$EventType<($PlayerKilledEvent)>
static readonly "UPDATE_BASE_LIVING_MOTION_EVENT": $PlayerEventListener$EventType<($UpdatePlayerMotionEvent$BaseLayer)>
static readonly "UPDATE_COMPOSITE_LIVING_MOTION_EVENT": $PlayerEventListener$EventType<($UpdatePlayerMotionEvent$CompositeLayer)>

constructor(arg0: $LogicalSide$Type)

public "shouldActive"(arg0: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEventListener$EventType$Type<T> = ($PlayerEventListener$EventType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerEventListener$EventType_<T> = $PlayerEventListener$EventType$Type<(T)>;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$ComboCounterHandleEvent$Causal" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ComboCounterHandleEvent$Causal extends $Enum<($ComboCounterHandleEvent$Causal)> {
static readonly "ANOTHER_ACTION_ANIMATION": $ComboCounterHandleEvent$Causal
static readonly "TIME_EXPIRED": $ComboCounterHandleEvent$Causal


public static "values"(): ($ComboCounterHandleEvent$Causal)[]
public static "valueOf"(arg0: string): $ComboCounterHandleEvent$Causal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComboCounterHandleEvent$Causal$Type = (("time_expired") | ("another_action_animation")) | ($ComboCounterHandleEvent$Causal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComboCounterHandleEvent$Causal_ = $ComboCounterHandleEvent$Causal$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$DetachablePlayerEvent" {
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"

export interface $DetachablePlayerEvent<T extends $PlayerPatch<(any)>> {

 "getPlayerPatch"(): T
 "setCanceled"(arg0: boolean): void
 "isCanceled"(): boolean
}

export namespace $DetachablePlayerEvent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DetachablePlayerEvent$Type<T> = ($DetachablePlayerEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DetachablePlayerEvent_<T> = $DetachablePlayerEvent$Type<(T)>;
}}
declare module "packages/yesman/epicfight/network/common/$AnimatorControlPacket$Layer" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AnimatorControlPacket$Layer extends $Enum<($AnimatorControlPacket$Layer)> {
static readonly "ANIMATION": $AnimatorControlPacket$Layer
static readonly "BASE_LAYER": $AnimatorControlPacket$Layer
static readonly "COMPOSITE_LAYER": $AnimatorControlPacket$Layer


public static "values"(): ($AnimatorControlPacket$Layer)[]
public static "valueOf"(arg0: string): $AnimatorControlPacket$Layer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatorControlPacket$Layer$Type = (("composite_layer") | ("base_layer") | ("animation")) | ($AnimatorControlPacket$Layer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatorControlPacket$Layer_ = $AnimatorControlPacket$Layer$Type;
}}
declare module "packages/yesman/epicfight/gameasset/$Armatures$ArmatureContructor" {
import {$Armature, $Armature$Type} from "packages/yesman/epicfight/api/model/$Armature"
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $Armatures$ArmatureContructor<T extends $Armature> {

 "invoke"(arg0: string, arg1: integer, arg2: $Joint$Type, arg3: $Map$Type<(string), ($Joint$Type)>): T

(arg0: string, arg1: integer, arg2: $Joint$Type, arg3: $Map$Type<(string), ($Joint$Type)>): T
}

export namespace $Armatures$ArmatureContructor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Armatures$ArmatureContructor$Type<T> = ($Armatures$ArmatureContructor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Armatures$ArmatureContructor_<T> = $Armatures$ArmatureContructor$Type<(T)>;
}}
declare module "packages/yesman/epicfight/api/client/animation/$ClientAnimator" {
import {$AnimationPlayer, $AnimationPlayer$Type} from "packages/yesman/epicfight/api/animation/$AnimationPlayer"
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$Layer$Priority, $Layer$Priority$Type} from "packages/yesman/epicfight/api/client/animation/$Layer$Priority"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$EntityState, $EntityState$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Layer$BaseLayer, $Layer$BaseLayer$Type} from "packages/yesman/epicfight/api/client/animation/$Layer$BaseLayer"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Layer, $Layer$Type} from "packages/yesman/epicfight/api/client/animation/$Layer"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$AnimatorControlPacket$Priority, $AnimatorControlPacket$Priority$Type} from "packages/yesman/epicfight/network/common/$AnimatorControlPacket$Priority"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$AnimatorControlPacket$Layer, $AnimatorControlPacket$Layer$Type} from "packages/yesman/epicfight/network/common/$AnimatorControlPacket$Layer"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Animator, $Animator$Type} from "packages/yesman/epicfight/api/animation/$Animator"

export class $ClientAnimator extends $Animator {
readonly "baseLayer": $Layer$BaseLayer

constructor(arg0: $LivingEntityPatch$Type<(any)>)
constructor(arg0: $LivingEntityPatch$Type<(any)>, arg1: $Supplier$Type<($Layer$BaseLayer$Type)>)

public "getPose"(arg0: float): $Pose
public "getPose"(arg0: float, arg1: boolean): $Pose
public "addLivingAnimation"(arg0: $LivingMotion$Type, arg1: $AssetAccessor$Type<(any)>): void
public "currentMotion"(): $LivingMotion
public "playAnimationAt"(arg0: $AssetAccessor$Type<(any)>, arg1: float, arg2: $AnimatorControlPacket$Layer$Type, arg3: $AnimatorControlPacket$Priority$Type): void
public "iterAllLayers"(arg0: $Consumer$Type<($Layer$Type)>): void
public "compareMotion"(arg0: $LivingMotion$Type): boolean
public "setCurrentMotionsAsDefault"(): void
public "getLivingMotion"(arg0: $LivingMotion$Type): $AssetAccessor<(any)>
public "getCompositeLivingMotion"(arg0: $LivingMotion$Type): $AssetAccessor<(any)>
public "compareCompositeMotion"(arg0: $LivingMotion$Type): boolean
public "resetLivingAnimations"(): void
public "getCompositeLayer"(arg0: $Layer$Priority$Type): $Layer
public "getJumpAnimation"(): $AssetAccessor<(any)>
public "renderDebuggingInfoForAllLayers"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: float): void
public "getAllLayers"(): $Collection<($Layer)>
public "iterVisibleLayers"(arg0: $Consumer$Type<($Layer$Type)>): void
public "iterVisibleLayersUntilFalse"(arg0: $Function$Type<($Layer$Type), (boolean)>): boolean
public "applyBindModifier"(arg0: $Pose$Type, arg1: $Pose$Type, arg2: $Joint$Type, arg3: $Map$Type<($Layer$Priority$Type), ($Pair$Type<($AssetAccessor$Type<(any)>), ($Pose$Type)>)>, arg4: boolean): void
public "getComposedLayerPoseBelow"(arg0: $Layer$Priority$Type, arg1: float): $Pose
public "forceResetBeforeAction"(arg0: $LivingMotion$Type, arg1: $LivingMotion$Type): void
public "resetMotion"(arg0: boolean): void
public "resetCompositeMotion"(): void
public "offAllLayers"(): void
public "isAiming"(): boolean
public "getPriorityFor"(arg0: $AssetAccessor$Type<(any)>): $Layer$Priority
public static "getAnimator"(arg0: $LivingEntityPatch$Type<(any)>): $Animator
public "getPlayerFor"(arg0: $AssetAccessor$Type<(any)>): $AnimationPlayer
public "tick"(): void
public "getEntityState"(): $EntityState
public "getPlayer"(arg0: $AssetAccessor$Type<(any)>): $Optional<($AnimationPlayer)>
public "playShootingAnimation"(): void
public "currentCompositeMotion"(): $LivingMotion
public "playDeathAnimation"(): void
public "reserveAnimation"(arg0: $AssetAccessor$Type<(any)>): void
public "playAnimationInstantly"(arg0: $AssetAccessor$Type<(any)>): void
public "playAnimation"(arg0: $AssetAccessor$Type<(any)>, arg1: float): void
public "stopPlaying"(arg0: $AssetAccessor$Type<(any)>): boolean
public "setSoftPause"(arg0: boolean): void
public "setHardPause"(arg0: boolean): void
public "findFor"<T>(arg0: $Class$Type<(T)>): $Pair<($AnimationPlayer), (T)>
public "getOwner"(): $LivingEntityPatch<(any)>
public "postInit"(): void
get "jumpAnimation"(): $AssetAccessor<(any)>
get "allLayers"(): $Collection<($Layer)>
get "aiming"(): boolean
get "entityState"(): $EntityState
set "softPause"(value: boolean)
set "hardPause"(value: boolean)
get "owner"(): $LivingEntityPatch<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientAnimator$Type = ($ClientAnimator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientAnimator_ = $ClientAnimator$Type;
}}
declare module "packages/yesman/epicfight/api/animation/$AnimationVariables$SharedAnimationVariableKey" {
import {$AnimationVariables$AnimationVariableKey, $AnimationVariables$AnimationVariableKey$Type} from "packages/yesman/epicfight/api/animation/$AnimationVariables$AnimationVariableKey"

export class $AnimationVariables$SharedAnimationVariableKey<T> extends $AnimationVariables$AnimationVariableKey<(T)> {


public "isSharedKey"(): boolean
public "isSynched"(): boolean
get "sharedKey"(): boolean
get "synched"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationVariables$SharedAnimationVariableKey$Type<T> = ($AnimationVariables$SharedAnimationVariableKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationVariables$SharedAnimationVariableKey_<T> = $AnimationVariables$SharedAnimationVariableKey$Type<(T)>;
}}
declare module "packages/yesman/epicfight/skill/$SkillCategory" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ExtendableEnumManager, $ExtendableEnumManager$Type} from "packages/yesman/epicfight/api/utils/$ExtendableEnumManager"
import {$ExtendableEnum, $ExtendableEnum$Type} from "packages/yesman/epicfight/api/utils/$ExtendableEnum"

export interface $SkillCategory extends $ExtendableEnum {

 "shouldSave"(): boolean
 "shouldSynchronize"(): boolean
 "bookIcon"(): $ResourceLocation
 "learnable"(): boolean
 "universalOrdinal"(): integer
}

export namespace $SkillCategory {
const DEFAULT_BOOK_ICON: $ResourceLocation
const ENUM_MANAGER: $ExtendableEnumManager<($SkillCategory)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillCategory$Type = ($SkillCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillCategory_ = $SkillCategory$Type;
}}
declare module "packages/yesman/epicfight/api/animation/$Joint$HierarchicalJointAccessor" {
import {$Joint$HierarchicalJointAccessor$Builder, $Joint$HierarchicalJointAccessor$Builder$Type} from "packages/yesman/epicfight/api/animation/$Joint$HierarchicalJointAccessor$Builder"
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$Joint$AccessTicket, $Joint$AccessTicket$Type} from "packages/yesman/epicfight/api/animation/$Joint$AccessTicket"

export class $Joint$HierarchicalJointAccessor {


public "createAccessTicket"(arg0: $Joint$Type): $Joint$AccessTicket
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "builder"(): $Joint$HierarchicalJointAccessor$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Joint$HierarchicalJointAccessor$Type = ($Joint$HierarchicalJointAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Joint$HierarchicalJointAccessor_ = $Joint$HierarchicalJointAccessor$Type;
}}
declare module "packages/yesman/epicfight/api/animation/property/$AnimationProperty" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $AnimationProperty<T> {

constructor(arg0: string)
constructor(arg0: string, arg1: $Codec$Type<(T)>)

public static "getSerializableProperty"<T>(arg0: string): $AnimationProperty<(T)>
public "parseFrom"(arg0: $JsonElement$Type): T
public "getCodecs"(): $Codec<(T)>
get "codecs"(): $Codec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationProperty$Type<T> = ($AnimationProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationProperty_<T> = $AnimationProperty$Type<(T)>;
}}
declare module "packages/yesman/epicfight/skill/guard/$GuardSkill$BlockType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $GuardSkill$BlockType extends $Enum<($GuardSkill$BlockType)> {
static readonly "GUARD_BREAK": $GuardSkill$BlockType
static readonly "GUARD": $GuardSkill$BlockType
static readonly "ADVANCED_GUARD": $GuardSkill$BlockType


public static "values"(): ($GuardSkill$BlockType)[]
public static "valueOf"(arg0: string): $GuardSkill$BlockType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuardSkill$BlockType$Type = (("advanced_guard") | ("guard") | ("guard_break")) | ($GuardSkill$BlockType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuardSkill$BlockType_ = $GuardSkill$BlockType$Type;
}}
declare module "packages/yesman/epicfight/client/online/$EpicSkins" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$AbstractClientPlayerPatch, $AbstractClientPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$AbstractClientPlayerPatch"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $EpicSkins extends $Record {

constructor(cloakTexture: $Supplier$Type<($ResourceLocation$Type)>, r: float, g: float, b: float)

public "cloakTexture"(): $Supplier<($ResourceLocation)>
public static "initDefaultCape"(arg0: $AbstractClientPlayerPatch$Type<(any)>): void
public static "initEpicSkins"(arg0: $AbstractClientPlayerPatch$Type<(any)>): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "b"(): float
public "g"(): float
public "r"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EpicSkins$Type = ($EpicSkins);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EpicSkins_ = $EpicSkins$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/entitypatch/$Faction" {
import {$ExtendableEnumManager, $ExtendableEnumManager$Type} from "packages/yesman/epicfight/api/utils/$ExtendableEnumManager"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ExtendableEnum, $ExtendableEnum$Type} from "packages/yesman/epicfight/api/utils/$ExtendableEnum"

export interface $Faction extends $ExtendableEnum {

 "healthBarTexture"(): $ResourceLocation
 "healthBarIndex"(): integer
 "damageColor"(): integer
 "universalOrdinal"(): integer
}

export namespace $Faction {
const ENUM_MANAGER: $ExtendableEnumManager<($Faction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Faction$Type = ($Faction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Faction_ = $Faction$Type;
}}
declare module "packages/yesman/epicfight/api/client/model/$SoftBodyTranslatable$ClothSimulationInfo" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ClothSimulator$ClothObject$ClothPart$ConstraintType, $ClothSimulator$ClothObject$ClothPart$ConstraintType$Type} from "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulator$ClothObject$ClothPart$ConstraintType"

export class $SoftBodyTranslatable$ClothSimulationInfo extends $Record {

constructor(particleMass: float, selfCollision: float, constraints: $List$Type<((integer)[])>, constraintTypes: ($ClothSimulator$ClothObject$ClothPart$ConstraintType$Type)[], compliances: (float)[], particles: (integer)[], weights: (float)[], rootDistance: (float)[], normalOffsetMapping: (integer)[])

public "constraintTypes"(): ($ClothSimulator$ClothObject$ClothPart$ConstraintType)[]
public "rootDistance"(): (float)[]
public "normalOffsetMapping"(): (integer)[]
public "particleMass"(): float
public "selfCollision"(): float
public "compliances"(): (float)[]
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "constraints"(): $List<((integer)[])>
public "particles"(): (integer)[]
public "weights"(): (float)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoftBodyTranslatable$ClothSimulationInfo$Type = ($SoftBodyTranslatable$ClothSimulationInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoftBodyTranslatable$ClothSimulationInfo_ = $SoftBodyTranslatable$ClothSimulationInfo$Type;
}}
declare module "packages/yesman/epicfight/api/utils/$AttackResult" {
import {$AttackResult$ResultType, $AttackResult$ResultType$Type} from "packages/yesman/epicfight/api/utils/$AttackResult$ResultType"

export class $AttackResult {
readonly "resultType": $AttackResult$ResultType
readonly "damage": float

constructor(arg0: $AttackResult$ResultType$Type, arg1: float)

public static "missed"(arg0: float): $AttackResult
public static "blocked"(arg0: float): $AttackResult
public static "success"(arg0: float): $AttackResult
public static "of"(arg0: $AttackResult$ResultType$Type, arg1: float): $AttackResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttackResult$Type = ($AttackResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttackResult_ = $AttackResult$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$SetTargetEvent" {
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$AbstractPlayerEvent, $AbstractPlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AbstractPlayerEvent"

export class $SetTargetEvent extends $AbstractPlayerEvent<($ServerPlayerPatch)> {

constructor(arg0: $ServerPlayerPatch$Type, arg1: $LivingEntity$Type)

public "getTarget"(): $LivingEntity
get "target"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetTargetEvent$Type = ($SetTargetEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SetTargetEvent_ = $SetTargetEvent$Type;
}}
declare module "packages/yesman/epicfight/skill/$SkillDataManager" {
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$EpicFightNetworkManager$PayloadBundleBuilder, $EpicFightNetworkManager$PayloadBundleBuilder$Type} from "packages/yesman/epicfight/network/$EpicFightNetworkManager$PayloadBundleBuilder"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$SkillDataKey, $SkillDataKey$Type} from "packages/yesman/epicfight/skill/$SkillDataKey"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SkillContainer, $SkillContainer$Type} from "packages/yesman/epicfight/skill/$SkillContainer"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $SkillDataManager {

constructor(arg0: $SkillContainer$Type)

/**
 * 
 * @deprecated
 */
public "setDataRawtype"(arg0: $SkillDataKey$Type<(any)>, arg1: any): void
public "setDataF"<T>(arg0: $SkillDataKey$Type<(T)>, arg1: $Function$Type<(T), (T)>): void
/**
 * 
 * @deprecated
 */
public "setDataSyncF"<T>(arg0: $SkillDataKey$Type<(T)>, arg1: $Function$Type<(T), (T)>, arg2: $ServerPlayer$Type): void
public "setDataSyncF"<T>(arg0: $SkillDataKey$Type<(T)>, arg1: $Function$Type<(T), (T)>): void
public "getDataValueOptional"<T>(arg0: $SkillDataKey$Type<(T)>): $Optional<(T)>
/**
 * 
 * @deprecated
 */
public "setDataSync"<T>(arg0: $SkillDataKey$Type<(T)>, arg1: T, arg2: $LocalPlayer$Type): void
public "setDataSync"<T>(arg0: $SkillDataKey$Type<(T)>, arg1: T): void
/**
 * 
 * @deprecated
 */
public "setDataSync"<T>(arg0: $SkillDataKey$Type<(T)>, arg1: T, arg2: $ServerPlayer$Type): void
public "onTracked"(arg0: $EpicFightNetworkManager$PayloadBundleBuilder$Type): void
public "transferDataTo"(arg0: $SkillDataManager$Type): void
public "clearData"(): void
public "registerData"<T>(arg0: $SkillDataKey$Type<(T)>): void
public "hasData"(arg0: $SkillDataKey$Type<(any)>): boolean
public "removeData"<T>(arg0: $SkillDataKey$Type<(T)>): void
public "keySet"(): $Set<($SkillDataKey<(any)>)>
public "setData"<T>(arg0: $SkillDataKey$Type<(T)>, arg1: T): void
public "getDataValue"<T>(arg0: $SkillDataKey$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillDataManager$Type = ($SkillDataManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillDataManager_ = $SkillDataManager$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$FallEvent" {
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$LivingFallEvent, $LivingFallEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingFallEvent"
import {$AbstractPlayerEvent, $AbstractPlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AbstractPlayerEvent"

export class $FallEvent extends $AbstractPlayerEvent<($PlayerPatch<(any)>)> {

constructor(arg0: $PlayerPatch$Type<(any)>, arg1: $LivingFallEvent$Type)

public "getForgeEvent"(): $LivingFallEvent
get "forgeEvent"(): $LivingFallEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FallEvent$Type = ($FallEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FallEvent_ = $FallEvent$Type;
}}
declare module "packages/yesman/epicfight/network/server/$SPPlayUISound" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $SPPlayUISound extends $Record {

constructor(arg0: $SoundEvent$Type)
constructor(sound: $SoundEvent$Type, pitch: float, volume: float)

public "pitch"(): float
public "volume"(): float
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "toBytes"(arg0: $SPPlayUISound$Type, arg1: $FriendlyByteBuf$Type): void
public static "handle"(arg0: $SPPlayUISound$Type, arg1: $Supplier$Type<($NetworkEvent$Context$Type)>): void
public "sound"(): $SoundEvent
public static "fromBytes"(arg0: $FriendlyByteBuf$Type): $SPPlayUISound
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SPPlayUISound$Type = ($SPPlayUISound);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SPPlayUISound_ = $SPPlayUISound$Type;
}}
declare module "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulator$BakedInverseKinematicsDefinition" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Vec3f, $Vec3f$Type} from "packages/yesman/epicfight/api/utils/math/$Vec3f"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$TransformSheet, $TransformSheet$Type} from "packages/yesman/epicfight/api/animation/$TransformSheet"

export class $InverseKinematicsSimulator$BakedInverseKinematicsDefinition extends $Record {

constructor(startJoint: $Joint$Type, endJoint: $Joint$Type, opponentJoint: $Joint$Type, clipAnimation: boolean, startFrame: integer, endFrame: integer, initialPoseFrame: integer, rayLeastHeight: float, touchingGround: (boolean)[], pathToEndJoint: $List$Type<(string)>, startPosition: $Vec3f$Type, endPosition: $Vec3f$Type, startToEnd: $Vec3f$Type, terminalBoneTransform: $TransformSheet$Type)

public "clipAnimation"(): boolean
public "startToEnd"(): $Vec3f
public "endJoint"(): $Joint
public "startJoint"(): $Joint
public "pathToEndJoint"(): $List<(string)>
public "initialPoseFrame"(): integer
public "startFrame"(): integer
public "endFrame"(): integer
public "endPosition"(): $Vec3f
public "startPosition"(): $Vec3f
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "rayLeastHeight"(): float
public "opponentJoint"(): $Joint
public "terminalBoneTransform"(): $TransformSheet
public "touchingGround"(): (boolean)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InverseKinematicsSimulator$BakedInverseKinematicsDefinition$Type = ($InverseKinematicsSimulator$BakedInverseKinematicsDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InverseKinematicsSimulator$BakedInverseKinematicsDefinition_ = $InverseKinematicsSimulator$BakedInverseKinematicsDefinition$Type;
}}
declare module "packages/yesman/epicfight/world/level/block/$FractureBlockState" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$MapCodec, $MapCodec$Type} from "packages/com/mojang/serialization/$MapCodec"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$ImmutableMap, $ImmutableMap$Type} from "packages/com/google/common/collect/$ImmutableMap"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $FractureBlockState extends $BlockState {
static readonly "CODEC": $Codec<($BlockState)>
static readonly "NAME_TAG": string
static readonly "PROPERTIES_TAG": string

constructor(arg0: $Block$Type, arg1: $ImmutableMap$Type<($Property$Type<(any)>), ($Comparable$Type<(any)>)>, arg2: $MapCodec$Type<($BlockState$Type)>)

public "getLifeTime"(): integer
public "getShape"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $CollisionContext$Type): $VoxelShape
public "getVisualShape"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $CollisionContext$Type): $VoxelShape
public "getLightEmission"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): integer
public "getCollisionShape"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $VoxelShape
public "supportsExternalFaceHiding"(): boolean
public "hidesNeighborFace"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getShape"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $CollisionContext$Type): $VoxelShape
public static "remove"(arg0: $BlockPos$Type): void
public static "reset"(): void
public "getRenderShape"(): $RenderShape
public "hasBlockEntity"(): boolean
public "getRotation"(): $Quaternionf
public "getOriginalBlockState"(arg0: $BlockPos$Type): $BlockState
public "getBouncing"(): double
public "getTranslate"(): $Vector3f
public "setFractureInfo"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $Vector3f$Type, arg3: $Quaternionf$Type, arg4: double, arg5: integer): void
get "lifeTime"(): integer
get "renderShape"(): $RenderShape
get "rotation"(): $Quaternionf
get "bouncing"(): double
get "translate"(): $Vector3f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FractureBlockState$Type = ($FractureBlockState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FractureBlockState_ = $FractureBlockState$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$ActionEvent" {
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$AnimationManager$AnimationAccessor, $AnimationManager$AnimationAccessor$Type} from "packages/yesman/epicfight/api/animation/$AnimationManager$AnimationAccessor"
import {$AbstractPlayerEvent, $AbstractPlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AbstractPlayerEvent"

export class $ActionEvent<T extends $PlayerPatch<(any)>> extends $AbstractPlayerEvent<(T)> {

constructor(arg0: $PlayerPatch$Type<(any)>, arg1: $AnimationManager$AnimationAccessor$Type<(any)>)

public "shouldResetActionTick"(): boolean
public "resetActionTick"(arg0: boolean): void
public "getAnimation"(): $AnimationManager$AnimationAccessor<(any)>
get "animation"(): $AnimationManager$AnimationAccessor<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActionEvent$Type<T> = ($ActionEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActionEvent_<T> = $ActionEvent$Type<(T)>;
}}
declare module "packages/yesman/epicfight/api/animation/types/$ActionAnimation" {
import {$AnimationPlayer, $AnimationPlayer$Type} from "packages/yesman/epicfight/api/animation/$AnimationPlayer"
import {$AnimationVariables$SharedAnimationVariableKey, $AnimationVariables$SharedAnimationVariableKey$Type} from "packages/yesman/epicfight/api/animation/$AnimationVariables$SharedAnimationVariableKey"
import {$AnimationVariables$IndependentAnimationVariableKey, $AnimationVariables$IndependentAnimationVariableKey$Type} from "packages/yesman/epicfight/api/animation/$AnimationVariables$IndependentAnimationVariableKey"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$MainFrameAnimation, $MainFrameAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$MainFrameAnimation"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$TransformSheet, $TransformSheet$Type} from "packages/yesman/epicfight/api/animation/$TransformSheet"
import {$LocalPlayerPatch, $LocalPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch"
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$AnimationManager$AnimationAccessor, $AnimationManager$AnimationAccessor$Type} from "packages/yesman/epicfight/api/animation/$AnimationManager$AnimationAccessor"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$LinkAnimation, $LinkAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$LinkAnimation"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $ActionAnimation extends $MainFrameAnimation {
static readonly "ACTION_ANIMATION_COORD": $AnimationVariables$SharedAnimationVariableKey<($TransformSheet)>
static readonly "BEGINNING_LOCATION": $AnimationVariables$IndependentAnimationVariableKey<($Vec3)>
static readonly "INITIAL_LOOK_VEC_DOT": $AnimationVariables$IndependentAnimationVariableKey<(float)>
static readonly "HAD_NO_PHYSICS": $AnimationVariables$IndependentAnimationVariableKey<(boolean)>

constructor(arg0: float, arg1: float, arg2: $AnimationManager$AnimationAccessor$Type<(any)>, arg3: $AssetAccessor$Type<(any)>)
constructor(arg0: float, arg1: float, arg2: string, arg3: $AssetAccessor$Type<(any)>)
constructor(arg0: float, arg1: $AnimationManager$AnimationAccessor$Type<(any)>, arg2: $AssetAccessor$Type<(any)>)

public "setLinkAnimation"(arg0: $AssetAccessor$Type<(any)>, arg1: $Pose$Type, arg2: boolean, arg3: float, arg4: $LivingEntityPatch$Type<(any)>, arg5: $LinkAnimation$Type): void
public "putOnPlayer"(arg0: $AnimationPlayer$Type, arg1: $LivingEntityPatch$Type<(any)>): void
public "linkTick"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $AssetAccessor$Type<(any)>): void
public "correctRootJoint"(arg0: $DynamicAnimation$Type, arg1: $Pose$Type, arg2: $LivingEntityPatch$Type<(any)>, arg3: float, arg4: float): void
public "modifyPose"(arg0: $DynamicAnimation$Type, arg1: $Pose$Type, arg2: $LivingEntityPatch$Type<(any)>, arg3: float, arg4: float): void
public "correctRawZCoord"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $Pose$Type, arg2: float): void
public "getExpectedMovement"(arg0: $LivingEntityPatch$Type<(any)>, arg1: float): $Vec3
public "shouldPlayerMove"(arg0: $LocalPlayerPatch$Type): boolean
public "tick"(arg0: $LivingEntityPatch$Type<(any)>): void
public "begin"(arg0: $LivingEntityPatch$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActionAnimation$Type = ($ActionAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActionAnimation_ = $ActionAnimation$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$ProjectileHitEvent" {
import {$ProjectileImpactEvent, $ProjectileImpactEvent$Type} from "packages/net/minecraftforge/event/entity/$ProjectileImpactEvent"
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$AbstractPlayerEvent, $AbstractPlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AbstractPlayerEvent"

export class $ProjectileHitEvent extends $AbstractPlayerEvent<($ServerPlayerPatch)> {

constructor(arg0: $ServerPlayerPatch$Type, arg1: $ProjectileImpactEvent$Type)

public "getForgeEvent"(): $ProjectileImpactEvent
get "forgeEvent"(): $ProjectileImpactEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProjectileHitEvent$Type = ($ProjectileHitEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProjectileHitEvent_ = $ProjectileHitEvent$Type;
}}
declare module "packages/yesman/epicfight/api/animation/$TransformSheet" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyframe, $Keyframe$Type} from "packages/yesman/epicfight/api/animation/$Keyframe"
import {$Vec3f, $Vec3f$Type} from "packages/yesman/epicfight/api/utils/math/$Vec3f"
import {$TransformSheet$InterpolationInfo, $TransformSheet$InterpolationInfo$Type} from "packages/yesman/epicfight/api/animation/$TransformSheet$InterpolationInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$JointTransform, $JointTransform$Type} from "packages/yesman/epicfight/api/animation/$JointTransform"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $TransformSheet {
static readonly "EMPTY_SHEET": $TransformSheet
static readonly "EMPTY_SHEET_PROVIDER": $Function<($Vec3), ($TransformSheet)>

constructor(arg0: ($Keyframe$Type)[])
constructor(arg0: integer)
constructor()
constructor(arg0: $List$Type<($Keyframe$Type)>)

public "getFirstFrame"(): $TransformSheet
public "correctAnimationByNewPosition"(arg0: $Vec3f$Type, arg1: $Vec3f$Type, arg2: $Vec3f$Type, arg3: $Vec3f$Type): void
public "getInterpolatedTransform"(arg0: $TransformSheet$InterpolationInfo$Type): $JointTransform
public "getInterpolatedTransform"(arg0: float): $JointTransform
public "extendsZCoord"(arg0: float, arg1: integer, arg2: integer): $TransformSheet
public "getCorrectedModelCoord"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $Vec3$Type, arg2: $Vec3$Type, arg3: integer, arg4: integer): $TransformSheet
public "copyAll"(): $TransformSheet
public "getKeyframes"(): ($Keyframe)[]
public "getInterpolatedTranslation"(arg0: float): $Vec3f
public "getStartTransform"(): $JointTransform
public "createInterpolated"(arg0: (float)[]): $TransformSheet
public "getInterpolationInfo"(arg0: float): $TransformSheet$InterpolationInfo
public "getInterpolatedRotation"(arg0: float): $Quaternionf
public "maxFrameTime"(): float
public "transformToWorldCoordOriginAsDest"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $Vec3$Type, arg2: $Vec3$Type, arg3: float, arg4: float, arg5: integer, arg6: integer): $TransformSheet
public "readFrom"(arg0: $TransformSheet$Type): $TransformSheet
public "toString"(): string
public "forEach"(arg0: $BiConsumer$Type<(integer), ($Keyframe$Type)>, arg1: integer, arg2: integer): void
public "forEach"(arg0: $BiConsumer$Type<(integer), ($Keyframe$Type)>): void
public "copy"(arg0: integer, arg1: integer): $TransformSheet
public "extend"(arg0: $TransformSheet$Type): $TransformSheet
get "firstFrame"(): $TransformSheet
get "keyframes"(): ($Keyframe)[]
get "startTransform"(): $JointTransform
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformSheet$Type = ($TransformSheet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformSheet_ = $TransformSheet$Type;
}}
declare module "packages/yesman/epicfight/client/renderer/patched/entity/$PatchedEntityRenderer" {
import {$Armature, $Armature$Type} from "packages/yesman/epicfight/api/model/$Armature"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$EntityRenderer, $EntityRenderer$Type} from "packages/net/minecraft/client/renderer/entity/$EntityRenderer"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$SkinnedMesh, $SkinnedMesh$Type} from "packages/yesman/epicfight/api/client/model/$SkinnedMesh"

export class $PatchedEntityRenderer<E extends $LivingEntity, T extends $LivingEntityPatch<(E)>, R extends $EntityRenderer<(E)>, AM extends $SkinnedMesh> {

constructor()

public "mulPoseStack"(arg0: $PoseStack$Type, arg1: $Armature$Type, arg2: E, arg3: T, arg4: float): void
public "setArmaturePose"(arg0: T, arg1: $Armature$Type, arg2: float): void
public "setJointTransforms"(arg0: T, arg1: $Armature$Type, arg2: $Pose$Type, arg3: float): void
public "getMeshProvider"(arg0: T): $AssetAccessor<(AM)>
public "getDefaultMesh"(): $AssetAccessor<(AM)>
public "render"(arg0: E, arg1: T, arg2: R, arg3: $MultiBufferSource$Type, arg4: $PoseStack$Type, arg5: integer, arg6: float): void
get "defaultMesh"(): $AssetAccessor<(AM)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatchedEntityRenderer$Type<E, T, R, AM> = ($PatchedEntityRenderer<(E), (T), (R), (AM)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatchedEntityRenderer_<E, T, R, AM> = $PatchedEntityRenderer$Type<(E), (T), (R), (AM)>;
}}
declare module "packages/yesman/epicfight/api/animation/property/$AnimationProperty$StaticAnimationProperty" {
import {$AnimationEvent$SimpleEvent, $AnimationEvent$SimpleEvent$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationEvent$SimpleEvent"
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$CapabilityItem, $CapabilityItem$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem"
import {$AnimationEvent$E2, $AnimationEvent$E2$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationEvent$E2"
import {$InverseKinematicsSimulator$BakedInverseKinematicsDefinition, $InverseKinematicsSimulator$BakedInverseKinematicsDefinition$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulator$BakedInverseKinematicsDefinition"
import {$AnimationProperty$PoseModifier, $AnimationProperty$PoseModifier$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationProperty$PoseModifier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$InverseKinematicsSimulator$InverseKinematicsDefinition, $InverseKinematicsSimulator$InverseKinematicsDefinition$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulator$InverseKinematicsDefinition"
import {$AnimationProperty$PlaybackTimeModifier, $AnimationProperty$PlaybackTimeModifier$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationProperty$PlaybackTimeModifier"
import {$AnimationManager$AnimationAccessor, $AnimationManager$AnimationAccessor$Type} from "packages/yesman/epicfight/api/animation/$AnimationManager$AnimationAccessor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AnimationProperty, $AnimationProperty$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationProperty"
import {$AnimationEvent, $AnimationEvent$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationEvent"
import {$AnimationProperty$PlaybackSpeedModifier, $AnimationProperty$PlaybackSpeedModifier$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationProperty$PlaybackSpeedModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnimationProperty$StaticAnimationProperty<T> extends $AnimationProperty<(T)> {
static readonly "TICK_EVENTS": $AnimationProperty$StaticAnimationProperty<($List<($AnimationEvent<(any), (any)>)>)>
static readonly "ON_BEGIN_EVENTS": $AnimationProperty$StaticAnimationProperty<($List<($AnimationEvent$SimpleEvent<(any)>)>)>
static readonly "ON_END_EVENTS": $AnimationProperty$StaticAnimationProperty<($List<($AnimationEvent$SimpleEvent<(any)>)>)>
static readonly "ON_ITEM_CHANGE_EVENT": $AnimationProperty$StaticAnimationProperty<($AnimationEvent$SimpleEvent<($AnimationEvent$E2<($CapabilityItem), ($CapabilityItem)>)>)>
static readonly "PLAY_SPEED_MODIFIER": $AnimationProperty$StaticAnimationProperty<($AnimationProperty$PlaybackSpeedModifier)>
static readonly "ELAPSED_TIME_MODIFIER": $AnimationProperty$StaticAnimationProperty<($AnimationProperty$PlaybackTimeModifier)>
static readonly "POSE_MODIFIER": $AnimationProperty$StaticAnimationProperty<($AnimationProperty$PoseModifier)>
static readonly "FIXED_HEAD_ROTATION": $AnimationProperty$StaticAnimationProperty<(boolean)>
static readonly "TRANSITION_ANIMATIONS_FROM": $AnimationProperty$StaticAnimationProperty<($Map<($ResourceLocation), ($AnimationManager$AnimationAccessor<(any)>)>)>
static readonly "TRANSITION_ANIMATIONS_TO": $AnimationProperty$StaticAnimationProperty<($Map<($ResourceLocation), ($AnimationManager$AnimationAccessor<(any)>)>)>
static readonly "NO_PHYSICS": $AnimationProperty$StaticAnimationProperty<(boolean)>
static readonly "IK_DEFINITION": $AnimationProperty$StaticAnimationProperty<($List<($InverseKinematicsSimulator$InverseKinematicsDefinition)>)>
static readonly "BAKED_IK_DEFINITION": $AnimationProperty$StaticAnimationProperty<($List<($InverseKinematicsSimulator$BakedInverseKinematicsDefinition)>)>
static readonly "RESET_LIVING_MOTION": $AnimationProperty$StaticAnimationProperty<($LivingMotion)>

constructor(arg0: string, arg1: $Codec$Type<(T)>)
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationProperty$StaticAnimationProperty$Type<T> = ($AnimationProperty$StaticAnimationProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationProperty$StaticAnimationProperty_<T> = $AnimationProperty$StaticAnimationProperty$Type<(T)>;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$TakeDamageEvent$Hurt" {
import {$TakeDamageEvent, $TakeDamageEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$TakeDamageEvent"
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ValueModifier, $ValueModifier$Type} from "packages/yesman/epicfight/api/utils/math/$ValueModifier"
import {$ValueModifier$ResultCalculator, $ValueModifier$ResultCalculator$Type} from "packages/yesman/epicfight/api/utils/math/$ValueModifier$ResultCalculator"

export class $TakeDamageEvent$Hurt extends $TakeDamageEvent {

constructor(arg0: $ServerPlayerPatch$Type, arg1: $DamageSource$Type, arg2: $ValueModifier$ResultCalculator$Type, arg3: float)

public "attachValueModifier"(arg0: $ValueModifier$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TakeDamageEvent$Hurt$Type = ($TakeDamageEvent$Hurt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TakeDamageEvent$Hurt_ = $TakeDamageEvent$Hurt$Type;
}}
declare module "packages/yesman/epicfight/skill/modules/$HoldableSkill" {
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$ControlEngine, $ControlEngine$Type} from "packages/yesman/epicfight/client/events/engine/$ControlEngine"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$SkillContainer, $SkillContainer$Type} from "packages/yesman/epicfight/skill/$SkillContainer"
import {$SPSkillExecutionFeedback, $SPSkillExecutionFeedback$Type} from "packages/yesman/epicfight/network/server/$SPSkillExecutionFeedback"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"

export interface $HoldableSkill {

 "getKeyMapping"(): $KeyMapping
 "holdTick"(arg0: $SkillContainer$Type): void
 "asSkill"(): $Skill
 "startHolding"(arg0: $SkillContainer$Type): void
 "resetHolding"(arg0: $SkillContainer$Type): void
 "onStopHolding"(arg0: $SkillContainer$Type, arg1: $SPSkillExecutionFeedback$Type): void
 "gatherHoldArguments"(arg0: $SkillContainer$Type, arg1: $ControlEngine$Type, arg2: $FriendlyByteBuf$Type): void

(): $KeyMapping
}

export namespace $HoldableSkill {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoldableSkill$Type = ($HoldableSkill);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoldableSkill_ = $HoldableSkill$Type;
}}
declare module "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulator" {
import {$InverseKinematicsSimulator$InverseKinematicsBuilder, $InverseKinematicsSimulator$InverseKinematicsBuilder$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulator$InverseKinematicsBuilder"
import {$InverseKinematicsSimulator$InverseKinematicsObject, $InverseKinematicsSimulator$InverseKinematicsObject$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulator$InverseKinematicsObject"
import {$InverseKinematicsProvider, $InverseKinematicsProvider$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsProvider"
import {$AbstractSimulator, $AbstractSimulator$Type} from "packages/yesman/epicfight/api/client/physics/$AbstractSimulator"
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$InverseKinematicsSimulatable, $InverseKinematicsSimulatable$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulatable"

export class $InverseKinematicsSimulator extends $AbstractSimulator<($Joint), ($InverseKinematicsSimulator$InverseKinematicsBuilder), ($InverseKinematicsProvider), ($InverseKinematicsSimulatable), ($InverseKinematicsSimulator$InverseKinematicsObject)> {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InverseKinematicsSimulator$Type = ($InverseKinematicsSimulator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InverseKinematicsSimulator_ = $InverseKinematicsSimulator$Type;
}}
declare module "packages/yesman/epicfight/api/utils/$EntitySnapshot$PlayerSnapshot" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Mesh$DrawingFunction, $Mesh$DrawingFunction$Type} from "packages/yesman/epicfight/api/client/model/$Mesh$DrawingFunction"
import {$AbstractClientPlayerPatch, $AbstractClientPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$AbstractClientPlayerPatch"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EntitySnapshot, $EntitySnapshot$Type} from "packages/yesman/epicfight/api/utils/$EntitySnapshot"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $EntitySnapshot$PlayerSnapshot extends $EntitySnapshot<($AbstractClientPlayerPatch<(any)>)> {

constructor(arg0: $AbstractClientPlayerPatch$Type<(any)>)

public "renderTextured"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: $Function$Type<($ResourceLocation$Type), ($RenderType$Type)>, arg3: $Mesh$DrawingFunction$Type, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float): void
public "render"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: $RenderType$Type, arg3: $Mesh$DrawingFunction$Type, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntitySnapshot$PlayerSnapshot$Type = ($EntitySnapshot$PlayerSnapshot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntitySnapshot$PlayerSnapshot_ = $EntitySnapshot$PlayerSnapshot$Type;
}}
declare module "packages/yesman/epicfight/api/animation/property/$AnimationEvent$SimpleEvent" {
import {$AnimationEvent$Event, $AnimationEvent$Event$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationEvent$Event"
import {$AnimationEvent$Side, $AnimationEvent$Side$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationEvent$Side"
import {$AnimationEvent, $AnimationEvent$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationEvent"

export class $AnimationEvent$SimpleEvent<EVENT extends $AnimationEvent$Event<(any), (any), (any), (any), (any), (any), (any), (any), (any), (any)>> extends $AnimationEvent<(EVENT), ($AnimationEvent$SimpleEvent<(EVENT)>)> {


public static "create"<E extends $AnimationEvent$Event<(any), (any), (any), (any), (any), (any), (any), (any), (any), (any)>>(arg0: E, arg1: $AnimationEvent$Side$Type): $AnimationEvent$SimpleEvent<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationEvent$SimpleEvent$Type<EVENT> = ($AnimationEvent$SimpleEvent<(EVENT)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationEvent$SimpleEvent_<EVENT> = $AnimationEvent$SimpleEvent$Type<(EVENT)>;
}}
declare module "packages/yesman/epicfight/client/renderer/$FirstPersonRenderer" {
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$EntityRendererProvider$Context, $EntityRendererProvider$Context$Type} from "packages/net/minecraft/client/renderer/entity/$EntityRendererProvider$Context"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$LivingEntityRenderer, $LivingEntityRenderer$Type} from "packages/net/minecraft/client/renderer/entity/$LivingEntityRenderer"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$HumanoidMesh, $HumanoidMesh$Type} from "packages/yesman/epicfight/client/mesh/$HumanoidMesh"
import {$LocalPlayerPatch, $LocalPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$PatchedLivingEntityRenderer, $PatchedLivingEntityRenderer$Type} from "packages/yesman/epicfight/client/renderer/patched/entity/$PatchedLivingEntityRenderer"
import {$PlayerModel, $PlayerModel$Type} from "packages/net/minecraft/client/model/$PlayerModel"

export class $FirstPersonRenderer extends $PatchedLivingEntityRenderer<($LocalPlayer), ($LocalPlayerPatch), ($PlayerModel<($LocalPlayer)>), ($LivingEntityRenderer<($LocalPlayer), ($PlayerModel<($LocalPlayer)>)>), ($HumanoidMesh)> {

constructor(arg0: $EntityRendererProvider$Context$Type, arg1: $EntityType$Type<(any)>)

public "getMeshProvider"(arg0: $LocalPlayerPatch$Type): $AssetAccessor<($HumanoidMesh)>
public "getDefaultMesh"(): $AssetAccessor<($HumanoidMesh)>
public "render"(arg0: $LocalPlayer$Type, arg1: $LocalPlayerPatch$Type, arg2: $LivingEntityRenderer$Type<($LocalPlayer$Type), ($PlayerModel$Type<($LocalPlayer$Type)>)>, arg3: $MultiBufferSource$Type, arg4: $PoseStack$Type, arg5: integer, arg6: float): void
get "defaultMesh"(): $AssetAccessor<($HumanoidMesh)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FirstPersonRenderer$Type = ($FirstPersonRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FirstPersonRenderer_ = $FirstPersonRenderer$Type;
}}
declare module "packages/yesman/epicfight/network/server/$SPSkillExecutionFeedback" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$SPSkillExecutionFeedback$FeedbackType, $SPSkillExecutionFeedback$FeedbackType$Type} from "packages/yesman/epicfight/network/server/$SPSkillExecutionFeedback$FeedbackType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $SPSkillExecutionFeedback {

constructor()

public static "held"(arg0: integer): $SPSkillExecutionFeedback
public static "expired"(arg0: integer): $SPSkillExecutionFeedback
public "getBuffer"(): $FriendlyByteBuf
public static "toBytes"(arg0: $SPSkillExecutionFeedback$Type, arg1: $FriendlyByteBuf$Type): void
public static "handle"(arg0: $SPSkillExecutionFeedback$Type, arg1: $Supplier$Type<($NetworkEvent$Context$Type)>): void
public static "executed"(arg0: integer): $SPSkillExecutionFeedback
public static "fromBytes"(arg0: $FriendlyByteBuf$Type): $SPSkillExecutionFeedback
public "setFeedbackType"(arg0: $SPSkillExecutionFeedback$FeedbackType$Type): void
get "buffer"(): $FriendlyByteBuf
set "feedbackType"(value: $SPSkillExecutionFeedback$FeedbackType$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SPSkillExecutionFeedback$Type = ($SPSkillExecutionFeedback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SPSkillExecutionFeedback_ = $SPSkillExecutionFeedback$Type;
}}
declare module "packages/yesman/epicfight/network/$EpicFightNetworkManager$PayloadBundleBuilder" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"

export class $EpicFightNetworkManager$PayloadBundleBuilder {

constructor()

public static "beginWith"(arg0: any): $EpicFightNetworkManager$PayloadBundleBuilder
public "and"(arg0: any): $EpicFightNetworkManager$PayloadBundleBuilder
public static "create"(): $EpicFightNetworkManager$PayloadBundleBuilder
public "send"(arg0: $BiConsumer$Type<(any), ((any)[])>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EpicFightNetworkManager$PayloadBundleBuilder$Type = ($EpicFightNetworkManager$PayloadBundleBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EpicFightNetworkManager$PayloadBundleBuilder_ = $EpicFightNetworkManager$PayloadBundleBuilder$Type;
}}
declare module "packages/yesman/epicfight/api/utils/math/$ValueModifier$Unified" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ValueModifier, $ValueModifier$Type} from "packages/yesman/epicfight/api/utils/math/$ValueModifier"
import {$ValueModifier$ResultCalculator, $ValueModifier$ResultCalculator$Type} from "packages/yesman/epicfight/api/utils/math/$ValueModifier$ResultCalculator"

export class $ValueModifier$Unified extends $Record implements $ValueModifier {

constructor(adder: float, multiplier: float, setter: float)

public "adder"(): float
public "setter"(): float
public "multiplier"(): float
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "attach"(arg0: $ValueModifier$ResultCalculator$Type): void
public static "adder"(arg0: float): $ValueModifier
public static "calculator"(): $ValueModifier$ResultCalculator
public static "setter"(arg0: float): $ValueModifier
public static "multiplier"(arg0: float): $ValueModifier
set "ter"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueModifier$Unified$Type = ($ValueModifier$Unified);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueModifier$Unified_ = $ValueModifier$Unified$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/entitypatch/$EntityDecorations$DecorationOverlay" {
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $EntityDecorations$DecorationOverlay {

 "getRenderType"(): $RenderType
 "shouldRender"(): boolean
 "shouldRemove"(): boolean
 "color"(arg0: float): $Vector4f
}

export namespace $EntityDecorations$DecorationOverlay {
const GENERIC: $ResourceLocation
const NO_COLOR: $Vector4f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityDecorations$DecorationOverlay$Type = ($EntityDecorations$DecorationOverlay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityDecorations$DecorationOverlay_ = $EntityDecorations$DecorationOverlay$Type;
}}
declare module "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulatable" {
import {$Armature, $Armature$Type} from "packages/yesman/epicfight/api/model/$Armature"
import {$PhysicsSimulator, $PhysicsSimulator$Type} from "packages/yesman/epicfight/api/physics/$PhysicsSimulator"
import {$SimulatableObject, $SimulatableObject$Type} from "packages/yesman/epicfight/api/physics/$SimulatableObject"
import {$SimulationTypes, $SimulationTypes$Type} from "packages/yesman/epicfight/api/physics/$SimulationTypes"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ClothSimulator, $ClothSimulator$Type} from "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulator"
import {$Animator, $Animator$Type} from "packages/yesman/epicfight/api/animation/$Animator"

export interface $ClothSimulatable extends $SimulatableObject {

 "getClothSimulator"(): $ClothSimulator
 "getAccurateCloakLocation"(arg0: float): $Vec3
 "getAccuratePartialLocation"(arg0: float): $Vec3
 "getObjectVelocity"(): $Vec3
 "getAccurateYRot"(arg0: float): float
 "getYRotDelta"(arg0: float): float
 "getSimulatableAnimator"(): $Animator
 "getGravity"(): float
 "getArmature"(): $Armature
 "getYRot"(): float
 "getYRotO"(): float
 "invalid"(): boolean
 "getScale"(): float
 "getSimulator"<SIM extends $PhysicsSimulator<(any), (any), (any), (any), (any)>>(arg0: $SimulationTypes$Type<(any), (any), (any), (any), (any), (SIM)>): $Optional<(SIM)>
}

export namespace $ClothSimulatable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClothSimulatable$Type = ($ClothSimulatable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClothSimulatable_ = $ClothSimulatable$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem$ZoomInType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CapabilityItem$ZoomInType extends $Enum<($CapabilityItem$ZoomInType)> {
static readonly "NONE": $CapabilityItem$ZoomInType
static readonly "ALWAYS": $CapabilityItem$ZoomInType
static readonly "USE_TICK": $CapabilityItem$ZoomInType
static readonly "AIMING": $CapabilityItem$ZoomInType
static readonly "CUSTOM": $CapabilityItem$ZoomInType


public static "values"(): ($CapabilityItem$ZoomInType)[]
public static "valueOf"(arg0: string): $CapabilityItem$ZoomInType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityItem$ZoomInType$Type = (("always") | ("use_tick") | ("custom") | ("none") | ("aiming")) | ($CapabilityItem$ZoomInType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityItem$ZoomInType_ = $CapabilityItem$ZoomInType$Type;
}}
declare module "packages/yesman/epicfight/api/client/forgeevent/$UpdatePlayerMotionEvent" {
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$DetachablePlayerEvent, $DetachablePlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$DetachablePlayerEvent"
import {$AbstractClientPlayerPatch, $AbstractClientPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$AbstractClientPlayerPatch"

export class $UpdatePlayerMotionEvent extends $Event implements $DetachablePlayerEvent<($AbstractClientPlayerPatch<(any)>)> {

constructor()
constructor(arg0: $AbstractClientPlayerPatch$Type<(any)>, arg1: $LivingMotion$Type)

public "getMotion"(): $LivingMotion
public "setMotion"(arg0: $LivingMotion$Type): void
public "getPlayerPatch"(): $AbstractClientPlayerPatch<(any)>
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "isCancelable"(): boolean
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "motion"(): $LivingMotion
set "motion"(value: $LivingMotion$Type)
get "playerPatch"(): $AbstractClientPlayerPatch<(any)>
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpdatePlayerMotionEvent$Type = ($UpdatePlayerMotionEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpdatePlayerMotionEvent_ = $UpdatePlayerMotionEvent$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/item/$Style" {
import {$ExtendableEnumManager, $ExtendableEnumManager$Type} from "packages/yesman/epicfight/api/utils/$ExtendableEnumManager"
import {$ExtendableEnum, $ExtendableEnum$Type} from "packages/yesman/epicfight/api/utils/$ExtendableEnum"

export interface $Style extends $ExtendableEnum {

 "canUseOffhand"(): boolean
 "universalOrdinal"(): integer
}

export namespace $Style {
const ENUM_MANAGER: $ExtendableEnumManager<($Style)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Style$Type = ($Style);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Style_ = $Style$Type;
}}
declare module "packages/yesman/epicfight/api/client/model/$SkinnedMesh" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$SkinnedMesh$SkinnedMeshPart, $SkinnedMesh$SkinnedMeshPart$Type} from "packages/yesman/epicfight/api/client/model/$SkinnedMesh$SkinnedMeshPart"
import {$Mesh$RenderProperties, $Mesh$RenderProperties$Type} from "packages/yesman/epicfight/api/client/model/$Mesh$RenderProperties"
import {$Armature, $Armature$Type} from "packages/yesman/epicfight/api/model/$Armature"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$VertexBuilder, $VertexBuilder$Type} from "packages/yesman/epicfight/api/client/model/$VertexBuilder"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StaticMesh, $StaticMesh$Type} from "packages/yesman/epicfight/api/client/model/$StaticMesh"
import {$Mesh$DrawingFunction, $Mesh$DrawingFunction$Type} from "packages/yesman/epicfight/api/client/model/$Mesh$DrawingFunction"
import {$MeshPartDefinition, $MeshPartDefinition$Type} from "packages/yesman/epicfight/api/client/model/$MeshPartDefinition"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SkinnedMesh extends $StaticMesh<($SkinnedMesh$SkinnedMeshPart)> {

constructor(arg0: $Map$Type<(string), ((number)[])>, arg1: $Map$Type<($MeshPartDefinition$Type), ($List$Type<($VertexBuilder$Type)>)>, arg2: $SkinnedMesh$Type, arg3: $Mesh$RenderProperties$Type)

public "toJsonObject"(): $JsonObject
public "affectingWeightIndices"(): ((integer)[])[]
public "getVertexPosition"(arg0: integer, arg1: $Vector4f$Type, arg2: ($OpenMatrix4f$Type)[]): void
public "getVertexNormal"(arg0: integer, arg1: integer, arg2: $Vector3f$Type, arg3: ($OpenMatrix4f$Type)[]): void
public "drawPosed"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: $Mesh$DrawingFunction$Type, arg3: integer, arg4: float, arg5: float, arg6: float, arg7: float, arg8: integer, arg9: $Armature$Type, arg10: ($OpenMatrix4f$Type)[]): void
public "getMaxJointCount"(): integer
public "affectingJointCounts"(): (integer)[]
public "affectingJointIndices"(): ((integer)[])[]
public "destroy"(): void
public "draw"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: $Mesh$DrawingFunction$Type, arg3: integer, arg4: float, arg5: float, arg6: float, arg7: float, arg8: integer): void
public "draw"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: $RenderType$Type, arg3: integer, arg4: float, arg5: float, arg6: float, arg7: float, arg8: integer, arg9: $Armature$Type, arg10: ($OpenMatrix4f$Type)[]): void
public "draw"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: $RenderType$Type, arg3: $Mesh$DrawingFunction$Type, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer, arg10: $Armature$Type, arg11: ($OpenMatrix4f$Type)[]): void
public "weights"(): (float)[]
get "maxJointCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkinnedMesh$Type = ($SkinnedMesh);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkinnedMesh_ = $SkinnedMesh$Type;
}}
declare module "packages/yesman/epicfight/client/gui/screen/$SkillBookScreen$TextureInfo" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SkillBookScreen$TextureInfo {

constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillBookScreen$TextureInfo$Type = ($SkillBookScreen$TextureInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillBookScreen$TextureInfo_ = $SkillBookScreen$TextureInfo$Type;
}}
declare module "packages/yesman/epicfight/client/renderer/shader/compute/$ComputeShaderSetup$MeshPartBuffer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ComputeShaderSetup$MeshPartBuffer {

 "partIdx"(): integer
 "vboId"(): integer
}

export namespace $ComputeShaderSetup$MeshPartBuffer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputeShaderSetup$MeshPartBuffer$Type = ($ComputeShaderSetup$MeshPartBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputeShaderSetup$MeshPartBuffer_ = $ComputeShaderSetup$MeshPartBuffer$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$ModifyAttackSpeedEvent" {
import {$CapabilityItem, $CapabilityItem$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$AbstractPlayerEvent, $AbstractPlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AbstractPlayerEvent"

export class $ModifyAttackSpeedEvent extends $AbstractPlayerEvent<($PlayerPatch<(any)>)> {

constructor(arg0: $PlayerPatch$Type<(any)>, arg1: $CapabilityItem$Type, arg2: float)

public "getItemCapability"(): $CapabilityItem
public "getAttackSpeed"(): float
public "setAttackSpeed"(arg0: float): void
get "itemCapability"(): $CapabilityItem
get "attackSpeed"(): float
set "attackSpeed"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifyAttackSpeedEvent$Type = ($ModifyAttackSpeedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifyAttackSpeedEvent_ = $ModifyAttackSpeedEvent$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$AttackPhaseEndEvent" {
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$AttackAnimation$Phase, $AttackAnimation$Phase$Type} from "packages/yesman/epicfight/api/animation/types/$AttackAnimation$Phase"
import {$AnimationManager$AnimationAccessor, $AnimationManager$AnimationAccessor$Type} from "packages/yesman/epicfight/api/animation/$AnimationManager$AnimationAccessor"
import {$AbstractPlayerEvent, $AbstractPlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AbstractPlayerEvent"

export class $AttackPhaseEndEvent extends $AbstractPlayerEvent<($ServerPlayerPatch)> {

constructor(arg0: $ServerPlayerPatch$Type, arg1: $AnimationManager$AnimationAccessor$Type<(any)>, arg2: $AttackAnimation$Phase$Type, arg3: integer)

public "getPhaseOrder"(): integer
public "getAnimation"(): $AnimationManager$AnimationAccessor<(any)>
public "getPhase"(): $AttackAnimation$Phase
get "phaseOrder"(): integer
get "animation"(): $AnimationManager$AnimationAccessor<(any)>
get "phase"(): $AttackAnimation$Phase
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttackPhaseEndEvent$Type = ($AttackPhaseEndEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttackPhaseEndEvent_ = $AttackPhaseEndEvent$Type;
}}
declare module "packages/yesman/epicfight/api/utils/$AttackResult$ResultType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AttackResult$ResultType extends $Enum<($AttackResult$ResultType)> {
static readonly "SUCCESS": $AttackResult$ResultType
static readonly "MISSED": $AttackResult$ResultType
static readonly "BLOCKED": $AttackResult$ResultType


public "dealtDamage"(): boolean
public "shouldCount"(): boolean
public static "values"(): ($AttackResult$ResultType)[]
public static "valueOf"(arg0: string): $AttackResult$ResultType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttackResult$ResultType$Type = (("blocked") | ("success") | ("missed")) | ($AttackResult$ResultType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttackResult$ResultType_ = $AttackResult$ResultType$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$AbstractPlayerEvent" {
import {$DetachablePlayerEvent, $DetachablePlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$DetachablePlayerEvent"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"

export class $AbstractPlayerEvent<T extends $PlayerPatch<(any)>> implements $DetachablePlayerEvent<(T)> {

constructor(arg0: T, arg1: boolean)

public "getPlayerPatch"(): T
public "toString"(): string
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "playerPatch"(): T
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPlayerEvent$Type<T> = ($AbstractPlayerEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPlayerEvent_<T> = $AbstractPlayerEvent$Type<(T)>;
}}
declare module "packages/yesman/epicfight/compat/kubejs/skill/$CustomPassiveSkill$CustomPassiveSkillBuilder" {
import {$Skill$Resource, $Skill$Resource$Type} from "packages/yesman/epicfight/skill/$Skill$Resource"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CustomSkill$CustomSkillBuilder, $CustomSkill$CustomSkillBuilder$Type} from "packages/yesman/epicfight/compat/kubejs/skill/$CustomSkill$CustomSkillBuilder"
import {$Skill$ActivateType, $Skill$ActivateType$Type} from "packages/yesman/epicfight/skill/$Skill$ActivateType"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SkillCategory, $SkillCategory$Type} from "packages/yesman/epicfight/skill/$SkillCategory"

/**
 * Creates a custom passive skill.
 * This builder type is basically just a preset for a passive skill.
 * Ideally, you should not override `drawOnGui()`, as that is pre-set for passive skills. Otherwise, it wouldn't be necessary to use this builder type.
 */
export class $CustomPassiveSkill$CustomPassiveSkillBuilder extends $CustomSkill$CustomSkillBuilder {
 "tab": $ResourceLocation
 "category": $SkillCategory
 "activateType": $Skill$ActivateType
 "resource": $Skill$Resource
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(arg0: $ResourceLocation$Type)

public "createObject"(): $Skill
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomPassiveSkill$CustomPassiveSkillBuilder$Type = ($CustomPassiveSkill$CustomPassiveSkillBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomPassiveSkill$CustomPassiveSkillBuilder_ = $CustomPassiveSkill$CustomPassiveSkillBuilder$Type;
}}
declare module "packages/yesman/epicfight/api/client/animation/$Layer" {
import {$AnimationPlayer, $AnimationPlayer$Type} from "packages/yesman/epicfight/api/animation/$AnimationPlayer"
import {$Layer$Priority, $Layer$Priority$Type} from "packages/yesman/epicfight/api/client/animation/$Layer$Priority"
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$LayerOffAnimation, $LayerOffAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$LayerOffAnimation"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $Layer {
readonly "animationPlayer": $AnimationPlayer

constructor(arg0: $Layer$Priority$Type)
constructor(arg0: $Layer$Priority$Type, arg1: $Supplier$Type<($AnimationPlayer$Type)>)

public "getLivingMotion"(arg0: $LivingEntityPatch$Type<(any)>, arg1: boolean): $LivingMotion
public "getEnabledPose"(arg0: $LivingEntityPatch$Type<(any)>, arg1: boolean, arg2: float): $Pose
public "isOff"(): boolean
public "copyLayerTo"(arg0: $Layer$Type, arg1: float): void
public "disableLayer"(): void
public static "setLayerOffAnimation"(arg0: $AssetAccessor$Type<(any)>, arg1: $Pose$Type, arg2: $LayerOffAnimation$Type, arg3: float): void
public "getNextAnimation"(): $AssetAccessor<(any)>
public "playAnimationInstantly"(arg0: $AssetAccessor$Type<(any)>, arg1: $LivingEntityPatch$Type<(any)>): void
public "playAnimation"(arg0: $AssetAccessor$Type<(any)>, arg1: $LivingEntityPatch$Type<(any)>, arg2: float): void
public "pause"(): void
public "toString"(): string
public "update"(arg0: $LivingEntityPatch$Type<(any)>): void
public "off"(arg0: $LivingEntityPatch$Type<(any)>): void
public "resume"(): void
get "nextAnimation"(): $AssetAccessor<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Layer$Type = ($Layer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Layer_ = $Layer$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem$Builder" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$CapabilityItem, $CapabilityItem$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem"
import {$WeaponCategory, $WeaponCategory$Type} from "packages/yesman/epicfight/world/capabilities/item/$WeaponCategory"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Style, $Style$Type} from "packages/yesman/epicfight/world/capabilities/item/$Style"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Collider, $Collider$Type} from "packages/yesman/epicfight/api/collider/$Collider"

export class $CapabilityItem$Builder {


public "addStyleAttibutes"(arg0: $Style$Type, arg1: $Pair$Type<($Attribute$Type), ($AttributeModifier$Type)>): $CapabilityItem$Builder
public "getCollider"(): $Collider
public "category"(arg0: $WeaponCategory$Type): $CapabilityItem$Builder
public "constructor"(arg0: $Function$Type<($CapabilityItem$Builder$Type), ($CapabilityItem$Type)>): $CapabilityItem$Builder
public "build"(): $CapabilityItem
public "collider"(arg0: $Collider$Type): $CapabilityItem$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityItem$Builder$Type = ($CapabilityItem$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityItem$Builder_ = $CapabilityItem$Builder$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/skill/$CapabilitySkill" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SkillSlot, $SkillSlot$Type} from "packages/yesman/epicfight/skill/$SkillSlot"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SkillContainer, $SkillContainer$Type} from "packages/yesman/epicfight/skill/$SkillContainer"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"
import {$SkillCategory, $SkillCategory$Type} from "packages/yesman/epicfight/skill/$SkillCategory"

export class $CapabilitySkill {
static readonly "EMPTY": $CapabilitySkill
readonly "skillContainers": ($SkillContainer)[]

constructor(arg0: $PlayerPatch$Type<(any)>)

public "getSkillContainerFor"(arg0: $SkillSlot$Type): $SkillContainer
public "getSkillContainerFor"(arg0: integer): $SkillContainer
public "addLearnedSkill"(arg0: $Skill$Type): void
public "removeLearnedSkill"(arg0: $Skill$Type): boolean
public "hasCategory"(arg0: $SkillCategory$Type): boolean
public "hasEmptyContainer"(arg0: $SkillCategory$Type): boolean
public "getFirstEmptyContainer"(arg0: $SkillCategory$Type): $SkillContainer
public "isEquipping"(arg0: $Skill$Type): boolean
public "hasLearned"(arg0: $Skill$Type): boolean
public "getSkillContainersFor"(arg0: $SkillCategory$Type): $Set<($SkillContainer)>
public "listAcquiredSkills"(): $Stream<($Skill)>
public "clearContainersAndLearnedSkills"(arg0: boolean): void
public "listSkillContainers"(): $Stream<($SkillContainer)>
public "getSkillContainer"(arg0: $Skill$Type): $SkillContainer
public "removeSkillFromContainer"(arg0: $Skill$Type): void
public "setSkillToContainer"(arg0: $Skill$Type, arg1: $SkillContainer$Type): void
public "deserialize"(arg0: $CompoundTag$Type): void
public "copyFrom"(arg0: $CapabilitySkill$Type): void
public "serialize"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilitySkill$Type = ($CapabilitySkill);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilitySkill_ = $CapabilitySkill$Type;
}}
declare module "packages/yesman/epicfight/api/client/model/$VertexBuilder" {
import {$List, $List$Type} from "packages/java/util/$List"

export class $VertexBuilder {
readonly "position": integer
readonly "uv": integer
readonly "normal": integer

constructor(arg0: integer, arg1: integer, arg2: integer)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "create"(arg0: (integer)[]): $List<($VertexBuilder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexBuilder$Type = ($VertexBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexBuilder_ = $VertexBuilder$Type;
}}
declare module "packages/yesman/epicfight/compat/kubejs/skill/$CustomChargeableSkill$CustomChargeableSkillBuilder" {
import {$Skill$Resource, $Skill$Resource$Type} from "packages/yesman/epicfight/skill/$Skill$Resource"
import {$CustomChargeableSkill, $CustomChargeableSkill$Type} from "packages/yesman/epicfight/compat/kubejs/skill/$CustomChargeableSkill"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$SkillContainer, $SkillContainer$Type} from "packages/yesman/epicfight/skill/$SkillContainer"
import {$CustomChargeableSkill$GatherChargingArgumentsContext, $CustomChargeableSkill$GatherChargingArgumentsContext$Type} from "packages/yesman/epicfight/compat/kubejs/skill/$CustomChargeableSkill$GatherChargingArgumentsContext"
import {$CustomChargeableSkill$CastSkillContext, $CustomChargeableSkill$CastSkillContext$Type} from "packages/yesman/epicfight/compat/kubejs/skill/$CustomChargeableSkill$CastSkillContext"
import {$Skill$ActivateType, $Skill$ActivateType$Type} from "packages/yesman/epicfight/skill/$Skill$ActivateType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SkillCategory, $SkillCategory$Type} from "packages/yesman/epicfight/skill/$SkillCategory"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$CustomSkill$CustomSkillBuilder, $CustomSkill$CustomSkillBuilder$Type} from "packages/yesman/epicfight/compat/kubejs/skill/$CustomSkill$CustomSkillBuilder"

/**
 * Creates a new chargeable skill. Must provide at least one of the following:
 * - allowedMaxChargingTicks
 * - maxChargingTicks
 * - minChargingTicks
 * - setKeyMapping
 */
export class $CustomChargeableSkill$CustomChargeableSkillBuilder extends $CustomSkill$CustomSkillBuilder {
 "tab": $ResourceLocation
 "category": $SkillCategory
 "activateType": $Skill$ActivateType
 "resource": $Skill$Resource
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(arg0: $ResourceLocation$Type)

/**
 * Called when the skill starts charging.
 */
public "startCharging"(arg0: $Consumer$Type<($PlayerPatch$Type<(any)>)>): $CustomChargeableSkill$CustomChargeableSkillBuilder
/**
 * Called when the skill charge is reset.
 */
public "resetCharging"(arg0: $Consumer$Type<($SkillContainer$Type)>): $CustomChargeableSkill$CustomChargeableSkillBuilder
/**
 * The maximum amount of ticks the skill can be charged.
 */
public "allowedMaxChargingTicks"(arg0: integer): $CustomChargeableSkill$CustomChargeableSkillBuilder
/**
 * The cap for the amount of ticks the skill can be charged.
 */
public "maxChargingTicks"(arg0: integer): $CustomChargeableSkill$CustomChargeableSkillBuilder
/**
 * The minimum amount of ticks the skill can be charged before it is cast.
 */
public "minChargingTicks"(arg0: integer): $CustomChargeableSkill$CustomChargeableSkillBuilder
/**
 * Called when the skill has started charging.
 */
public "gatherChargingArguments"(arg0: $Consumer$Type<($CustomChargeableSkill$GatherChargingArgumentsContext$Type)>): $CustomChargeableSkill$CustomChargeableSkillBuilder
/**
 * Called when the skill is done charging and the key is released.
 */
public "onCastSkill"(arg0: $Consumer$Type<($CustomChargeableSkill$CastSkillContext$Type)>): $CustomChargeableSkill$CustomChargeableSkillBuilder
/**
 * The key mapping that is used to charge the skill.
 * This uses a string that matches the ID of the key mapping. IDs of key mappings can be found in the `options.txt` file in the Minecraft directory. (e.g. `key.jump` or `key.attack`)
 */
public "setKeyMapping"(arg0: string): $CustomChargeableSkill$CustomChargeableSkillBuilder
public "onChargingTick"(arg0: $Consumer$Type<($PlayerPatch$Type<(any)>)>): $CustomChargeableSkill$CustomChargeableSkillBuilder
public "createObject"(): $CustomChargeableSkill
set "keyMapping"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomChargeableSkill$CustomChargeableSkillBuilder$Type = ($CustomChargeableSkill$CustomChargeableSkillBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomChargeableSkill$CustomChargeableSkillBuilder_ = $CustomChargeableSkill$CustomChargeableSkillBuilder$Type;
}}
declare module "packages/yesman/epicfight/api/client/animation/property/$TrailInfo$Builder" {
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SimpleParticleType, $SimpleParticleType$Type} from "packages/net/minecraft/core/particles/$SimpleParticleType"
import {$TrailInfo, $TrailInfo$Type} from "packages/yesman/epicfight/api/client/animation/property/$TrailInfo"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $TrailInfo$Builder {

constructor()

public "updateInterval"(arg0: integer): $TrailInfo$Builder
public "blockLight"(arg0: integer): $TrailInfo$Builder
public "skyLight"(arg0: integer): $TrailInfo$Builder
public "texture"(arg0: string): $TrailInfo$Builder
public "texture"(arg0: $ResourceLocation$Type): $TrailInfo$Builder
public "joint"(arg0: string): $TrailInfo$Builder
public "startPos"(arg0: $Vec3$Type): $TrailInfo$Builder
public "lifetime"(arg0: integer): $TrailInfo$Builder
public "time"(arg0: float, arg1: float): $TrailInfo$Builder
public "type"(arg0: $SimpleParticleType$Type): $TrailInfo$Builder
public "b"(arg0: float): $TrailInfo$Builder
public "g"(arg0: float): $TrailInfo$Builder
public "create"(): $TrailInfo
public "r"(arg0: float): $TrailInfo$Builder
public "endPos"(arg0: $Vec3$Type): $TrailInfo$Builder
public "fadeTime"(arg0: float): $TrailInfo$Builder
public "itemSkinHand"(arg0: $InteractionHand$Type): $TrailInfo$Builder
public "interpolations"(arg0: integer): $TrailInfo$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrailInfo$Builder$Type = ($TrailInfo$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrailInfo$Builder_ = $TrailInfo$Builder$Type;
}}
declare module "packages/yesman/epicfight/api/animation/$Animator" {
import {$AnimationPlayer, $AnimationPlayer$Type} from "packages/yesman/epicfight/api/animation/$AnimationPlayer"
import {$EntityState, $EntityState$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState"
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$AnimationVariables, $AnimationVariables$Type} from "packages/yesman/epicfight/api/animation/$AnimationVariables"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Animator {

constructor(arg0: $LivingEntityPatch$Type<(any)>)

public "getPose"(arg0: float): $Pose
public "addLivingAnimation"(arg0: $LivingMotion$Type, arg1: $AssetAccessor$Type<(any)>): void
public "getLivingAnimations"(): $Map<($LivingMotion), ($AssetAccessor<(any)>)>
public "resetLivingAnimations"(): void
public "getEntityPatch"(): $LivingEntityPatch<(any)>
public "getPlayerFor"(arg0: $AssetAccessor$Type<(any)>): $AnimationPlayer
public "tick"(): void
public "getEntityState"(): $EntityState
public "getPlayer"(arg0: $AssetAccessor$Type<(any)>): $Optional<($AnimationPlayer)>
public "playShootingAnimation"(): void
public "getVariables"(): $AnimationVariables
public "getLivingAnimation"(arg0: $LivingMotion$Type, arg1: $AssetAccessor$Type<(any)>): $AssetAccessor<(any)>
public "playDeathAnimation"(): void
public "reserveAnimation"(arg0: integer): void
public "reserveAnimation"(arg0: $AssetAccessor$Type<(any)>): void
public "playAnimationInstantly"(arg0: integer): void
public "playAnimationInstantly"(arg0: $AssetAccessor$Type<(any)>): void
public "playAnimation"(arg0: integer, arg1: float): void
public "playAnimation"(arg0: $AssetAccessor$Type<(any)>, arg1: float): void
public "stopPlaying"(arg0: integer): boolean
public "stopPlaying"(arg0: $AssetAccessor$Type<(any)>): boolean
public "setSoftPause"(arg0: boolean): void
public "setHardPause"(arg0: boolean): void
public "findFor"<T>(arg0: $Class$Type<(T)>): $Pair<($AnimationPlayer), (T)>
public "postInit"(): void
get "livingAnimations"(): $Map<($LivingMotion), ($AssetAccessor<(any)>)>
get "entityPatch"(): $LivingEntityPatch<(any)>
get "entityState"(): $EntityState
get "variables"(): $AnimationVariables
set "softPause"(value: boolean)
set "hardPause"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animator$Type = ($Animator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animator_ = $Animator$Type;
}}
declare module "packages/yesman/epicfight/api/client/animation/$Layer$Priority" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Layer$Priority extends $Enum<($Layer$Priority)> {
static readonly "LOWEST": $Layer$Priority
static readonly "LOW": $Layer$Priority
static readonly "MIDDLE": $Layer$Priority
static readonly "HIGH": $Layer$Priority
static readonly "HIGHEST": $Layer$Priority


public "isHigherThan"(arg0: $Layer$Priority$Type): boolean
public "highers"(): ($Layer$Priority)[]
public "lowers"(): ($Layer$Priority)[]
public "isHigherOrEqual"(arg0: $Layer$Priority$Type): boolean
public "lowersAndEqual"(): ($Layer$Priority)[]
public static "values"(): ($Layer$Priority)[]
public static "valueOf"(arg0: string): $Layer$Priority
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Layer$Priority$Type = (("high") | ("middle") | ("low") | ("highest") | ("lowest")) | ($Layer$Priority);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Layer$Priority_ = $Layer$Priority$Type;
}}
declare module "packages/yesman/epicfight/client/gui/$VersionNotifier" {
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $VersionNotifier {

constructor(arg0: $Minecraft$Type)

public "init"(): void
public "render"(arg0: $GuiGraphics$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VersionNotifier$Type = ($VersionNotifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VersionNotifier_ = $VersionNotifier$Type;
}}
declare module "packages/yesman/epicfight/skill/$SkillBuilder" {
import {$Skill$Resource, $Skill$Resource$Type} from "packages/yesman/epicfight/skill/$Skill$Resource"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Skill$ActivateType, $Skill$ActivateType$Type} from "packages/yesman/epicfight/skill/$Skill$ActivateType"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SkillCategory, $SkillCategory$Type} from "packages/yesman/epicfight/skill/$SkillCategory"

export class $SkillBuilder<T extends $Skill> {

constructor()

public "setRegistryName"<B extends $SkillBuilder<(T)>>(arg0: $ResourceLocation$Type): B
public "setCreativeTab"<B extends $SkillBuilder<(T)>>(arg0: $CreativeModeTab$Type): B
public "setActivateType"<B extends $SkillBuilder<(T)>>(arg0: $Skill$ActivateType$Type): B
public "setResource"<B extends $SkillBuilder<(T)>>(arg0: $Skill$Resource$Type): B
public "setCategory"<B extends $SkillBuilder<(T)>>(arg0: $SkillCategory$Type): B
set "registryName"(value: $ResourceLocation$Type)
set "creativeTab"(value: $CreativeModeTab$Type)
set "activateType"(value: $Skill$ActivateType$Type)
set "resource"(value: $Skill$Resource$Type)
set "category"(value: $SkillCategory$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillBuilder$Type<T> = ($SkillBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillBuilder_<T> = $SkillBuilder$Type<(T)>;
}}
declare module "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch$FirstPersonLayer" {
import {$AnimationPlayer, $AnimationPlayer$Type} from "packages/yesman/epicfight/api/animation/$AnimationPlayer"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$Layer, $Layer$Type} from "packages/yesman/epicfight/api/client/animation/$Layer"
import {$LocalPlayerPatch, $LocalPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch"
import {$TransformSheet, $TransformSheet$Type} from "packages/yesman/epicfight/api/animation/$TransformSheet"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $LocalPlayerPatch$FirstPersonLayer extends $Layer {
readonly "animationPlayer": $AnimationPlayer

constructor(arg0: $LocalPlayerPatch$Type)

public "getLinkCameraTransform"(): $TransformSheet
public "playAnimation"(arg0: $AssetAccessor$Type<(any)>, arg1: $AssetAccessor$Type<(any)>, arg2: $LivingEntityPatch$Type<(any)>, arg3: float): void
public "off"(): void
get "linkCameraTransform"(): $TransformSheet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalPlayerPatch$FirstPersonLayer$Type = ($LocalPlayerPatch$FirstPersonLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocalPlayerPatch$FirstPersonLayer_ = $LocalPlayerPatch$FirstPersonLayer$Type;
}}
declare module "packages/yesman/epicfight/api/client/model/$MeshPartDefinition" {
import {$Mesh$RenderProperties, $Mesh$RenderProperties$Type} from "packages/yesman/epicfight/api/client/model/$Mesh$RenderProperties"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"

export interface $MeshPartDefinition {

 "partName"(): string
 "getModelPartAnimationProvider"(): $Supplier<($OpenMatrix4f)>
 "renderProperties"(): $Mesh$RenderProperties
}

export namespace $MeshPartDefinition {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeshPartDefinition$Type = ($MeshPartDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MeshPartDefinition_ = $MeshPartDefinition$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$ItemUseEndEvent" {
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$LivingEntityUseItemEvent$Stop, $LivingEntityUseItemEvent$Stop$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEntityUseItemEvent$Stop"
import {$AbstractPlayerEvent, $AbstractPlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AbstractPlayerEvent"

export class $ItemUseEndEvent extends $AbstractPlayerEvent<($ServerPlayerPatch)> {

constructor(arg0: $ServerPlayerPatch$Type, arg1: $LivingEntityUseItemEvent$Stop$Type)

public "getForgeEvent"(): $LivingEntityUseItemEvent$Stop
get "forgeEvent"(): $LivingEntityUseItemEvent$Stop
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUseEndEvent$Type = ($ItemUseEndEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUseEndEvent_ = $ItemUseEndEvent$Type;
}}
declare module "packages/yesman/epicfight/api/animation/types/$LayerOffAnimation" {
import {$Layer$Priority, $Layer$Priority$Type} from "packages/yesman/epicfight/api/client/animation/$Layer$Priority"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$AnimationClip, $AnimationClip$Type} from "packages/yesman/epicfight/api/animation/$AnimationClip"
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AnimationManager$AnimationAccessor, $AnimationManager$AnimationAccessor$Type} from "packages/yesman/epicfight/api/animation/$AnimationManager$AnimationAccessor"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AnimationProperty, $AnimationProperty$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationProperty"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$JointMaskEntry, $JointMaskEntry$Type} from "packages/yesman/epicfight/api/client/animation/property/$JointMaskEntry"

export class $LayerOffAnimation extends $DynamicAnimation implements $AnimationManager$AnimationAccessor<($LayerOffAnimation)> {

constructor(arg0: $Layer$Priority$Type)

public "getJointMaskEntry"(arg0: $LivingEntityPatch$Type<(any)>, arg1: boolean): $Optional<($JointMaskEntry)>
public "hasTransformFor"(arg0: string): boolean
public "inRegistry"(): boolean
public "getAnimationClip"(): $AnimationClip
public "isLinkAnimation"(): boolean
public "setLastAnimation"(arg0: $AssetAccessor$Type<(any)>): void
public "setLastPose"(arg0: $Pose$Type): void
public "getPoseByTime"(arg0: $LivingEntityPatch$Type<(any)>, arg1: float, arg2: float): $Pose
public "getRealAnimation"(): $AssetAccessor<(any)>
public "doesHeadRotFollowEntityHead"(): boolean
public "get"(): $LayerOffAnimation
public "getProperty"<V>(arg0: $AnimationProperty$Type<(V)>): $Optional<(V)>
public "end"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $AssetAccessor$Type<(any)>, arg2: boolean): void
public "id"(): integer
public "isPresent"(): boolean
public "getAccessor"(): $AnimationManager$AnimationAccessor<(any)>
public "registryName"(): $ResourceLocation
public "idBetween"(arg0: $AnimationManager$AnimationAccessor$Type<(any)>, arg1: $AnimationManager$AnimationAccessor$Type<(any)>): boolean
public "doOrThrow"(arg0: $Consumer$Type<($LayerOffAnimation$Type)>): void
public "checkType"(arg0: $Class$Type<(any)>): boolean
public "ifPresent"(arg0: $Consumer$Type<($LayerOffAnimation$Type)>): void
public "ifPresentOrElse"(arg0: $Consumer$Type<($LayerOffAnimation$Type)>, arg1: $Runnable$Type): void
public "isEmpty"(): boolean
public "orElse"(arg0: $LayerOffAnimation$Type): $LayerOffAnimation
public "checkNotNull"(): void
get "animationClip"(): $AnimationClip
get "linkAnimation"(): boolean
set "lastAnimation"(value: $AssetAccessor$Type<(any)>)
set "lastPose"(value: $Pose$Type)
get "realAnimation"(): $AssetAccessor<(any)>
get "present"(): boolean
get "accessor"(): $AnimationManager$AnimationAccessor<(any)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayerOffAnimation$Type = ($LayerOffAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LayerOffAnimation_ = $LayerOffAnimation$Type;
}}
declare module "packages/yesman/epicfight/api/client/model/$StaticMesh" {
import {$Mesh$RenderProperties, $Mesh$RenderProperties$Type} from "packages/yesman/epicfight/api/client/model/$Mesh$RenderProperties"
import {$Armature, $Armature$Type} from "packages/yesman/epicfight/api/model/$Armature"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$ClothSimulator$ClothObject, $ClothSimulator$ClothObject$Type} from "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulator$ClothObject"
import {$ClothSimulatable, $ClothSimulatable$Type} from "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulatable"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$ClothSimulator$ClothObjectBuilder, $ClothSimulator$ClothObjectBuilder$Type} from "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulator$ClothObjectBuilder"
import {$SoftBodyTranslatable, $SoftBodyTranslatable$Type} from "packages/yesman/epicfight/api/client/model/$SoftBodyTranslatable"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SoftBodyTranslatable$ClothSimulationInfo, $SoftBodyTranslatable$ClothSimulationInfo$Type} from "packages/yesman/epicfight/api/client/model/$SoftBodyTranslatable$ClothSimulationInfo"
import {$Mesh, $Mesh$Type} from "packages/yesman/epicfight/api/client/model/$Mesh"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$VertexBuilder, $VertexBuilder$Type} from "packages/yesman/epicfight/api/client/model/$VertexBuilder"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Mesh$DrawingFunction, $Mesh$DrawingFunction$Type} from "packages/yesman/epicfight/api/client/model/$Mesh$DrawingFunction"
import {$MeshPartDefinition, $MeshPartDefinition$Type} from "packages/yesman/epicfight/api/client/model/$MeshPartDefinition"
import {$MeshPart, $MeshPart$Type} from "packages/yesman/epicfight/api/client/model/$MeshPart"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $StaticMesh<P extends $MeshPart> implements $Mesh, $SoftBodyTranslatable {

constructor(arg0: $Map$Type<(string), ((number)[])>, arg1: $Map$Type<($MeshPartDefinition$Type), ($List$Type<($VertexBuilder$Type)>)>, arg2: $StaticMesh$Type<(P)>, arg3: $Mesh$RenderProperties$Type)

public "createSimulationData"(arg0: $SoftBodyTranslatable$Type, arg1: $ClothSimulatable$Type, arg2: $ClothSimulator$ClothObjectBuilder$Type): $ClothSimulator$ClothObject
public "normalList"(): $List<($Vec3)>
public "hasPart"(arg0: string): boolean
public "getPart"(arg0: string): $MeshPart
public "getAllParts"(): $Collection<(P)>
public "getPartEntry"(): $Set<($Map$Entry<(string), (P)>)>
public "getSoftBodySimulationInfo"(): $Map<(string), ($SoftBodyTranslatable$ClothSimulationInfo)>
public "getVertexPosition"(arg0: integer, arg1: $Vector4f$Type, arg2: ($OpenMatrix4f$Type)[]): void
public "getVertexPosition"(arg0: integer, arg1: $Vector4f$Type): void
public "getVertexNormal"(arg0: integer, arg1: integer, arg2: $Vector3f$Type, arg3: ($OpenMatrix4f$Type)[]): void
public "getVertexNormal"(arg0: integer, arg1: $Vector3f$Type): void
public "getRenderProperties"(): $Mesh$RenderProperties
public "uvs"(): (float)[]
public "putSoftBodySimulationInfo"(arg0: $Map$Type<(string), ($SoftBodyTranslatable$ClothSimulationInfo$Type)>): void
public "initialize"(): void
public "positions"(): (float)[]
public "normals"(): (float)[]
public "drawPosed"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: $Mesh$DrawingFunction$Type, arg3: integer, arg4: float, arg5: float, arg6: float, arg7: float, arg8: integer, arg9: $Armature$Type, arg10: ($OpenMatrix4f$Type)[]): void
public "draw"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: $Mesh$DrawingFunction$Type, arg3: integer, arg4: float, arg5: float, arg6: float, arg7: float, arg8: integer): void
public "draw"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: $RenderType$Type, arg3: $Mesh$DrawingFunction$Type, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer, arg10: $Armature$Type, arg11: ($OpenMatrix4f$Type)[]): void
public "getOriginalMesh"(): $StaticMesh<(any)>
public "canStartSoftBodySimulation"(): boolean
get "allParts"(): $Collection<(P)>
get "partEntry"(): $Set<($Map$Entry<(string), (P)>)>
get "softBodySimulationInfo"(): $Map<(string), ($SoftBodyTranslatable$ClothSimulationInfo)>
get "renderProperties"(): $Mesh$RenderProperties
get "originalMesh"(): $StaticMesh<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StaticMesh$Type<P> = ($StaticMesh<(P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StaticMesh_<P> = $StaticMesh$Type<(P)>;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$DealDamageEvent$Attack" {
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$LivingAttackEvent, $LivingAttackEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingAttackEvent"
import {$DealDamageEvent, $DealDamageEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$DealDamageEvent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EpicFightDamageSource, $EpicFightDamageSource$Type} from "packages/yesman/epicfight/world/damagesource/$EpicFightDamageSource"

export class $DealDamageEvent$Attack extends $DealDamageEvent<($LivingAttackEvent)> {

constructor(arg0: $ServerPlayerPatch$Type, arg1: $LivingEntity$Type, arg2: $EpicFightDamageSource$Type, arg3: $LivingAttackEvent$Type)

public "getAttackDamage"(): float
get "attackDamage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DealDamageEvent$Attack$Type = ($DealDamageEvent$Attack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DealDamageEvent$Attack_ = $DealDamageEvent$Attack$Type;
}}
declare module "packages/yesman/epicfight/network/server/$SPSetRemotePlayerSkill" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$SkillSlot, $SkillSlot$Type} from "packages/yesman/epicfight/skill/$SkillSlot"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"

export class $SPSetRemotePlayerSkill extends $Record {

constructor(entityId: integer, slot: $SkillSlot$Type, skill: $Skill$Type)

public "entityId"(): integer
public "slot"(): $SkillSlot
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "toBytes"(arg0: $SPSetRemotePlayerSkill$Type, arg1: $FriendlyByteBuf$Type): void
public static "handle"(arg0: $SPSetRemotePlayerSkill$Type, arg1: $Supplier$Type<($NetworkEvent$Context$Type)>): void
public static "fromBytes"(arg0: $FriendlyByteBuf$Type): $SPSetRemotePlayerSkill
public "skill"(): $Skill
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SPSetRemotePlayerSkill$Type = ($SPSetRemotePlayerSkill);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SPSetRemotePlayerSkill_ = $SPSetRemotePlayerSkill$Type;
}}
declare module "packages/yesman/epicfight/network/server/$SPSkillExecutionFeedback$FeedbackType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $SPSkillExecutionFeedback$FeedbackType extends $Enum<($SPSkillExecutionFeedback$FeedbackType)> {
static readonly "EXECUTED": $SPSkillExecutionFeedback$FeedbackType
static readonly "HOLDING_START": $SPSkillExecutionFeedback$FeedbackType
static readonly "EXPIRED": $SPSkillExecutionFeedback$FeedbackType


public static "values"(): ($SPSkillExecutionFeedback$FeedbackType)[]
public static "valueOf"(arg0: string): $SPSkillExecutionFeedback$FeedbackType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SPSkillExecutionFeedback$FeedbackType$Type = (("expired") | ("executed") | ("holding_start")) | ($SPSkillExecutionFeedback$FeedbackType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SPSkillExecutionFeedback$FeedbackType_ = $SPSkillExecutionFeedback$FeedbackType$Type;
}}
declare module "packages/yesman/epicfight/api/animation/$JointTransform" {
import {$Vec3f, $Vec3f$Type} from "packages/yesman/epicfight/api/utils/math/$Vec3f"
import {$MatrixOperation, $MatrixOperation$Type} from "packages/yesman/epicfight/api/utils/math/$MatrixOperation"
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"

export class $JointTransform {
static readonly "ANIMATION_TRANSFORM": string
static readonly "JOINT_LOCAL_TRANSFORM": string
static readonly "PARENT": string
static readonly "RESULT1": string
static readonly "RESULT2": string

constructor(arg0: $Vec3f$Type, arg1: $Quaternionf$Type, arg2: $Vec3f$Type)

public "clearTransform"(): void
public static "fromMatrixWithoutScale"(arg0: $OpenMatrix4f$Type): $JointTransform
public "overwriteRotation"(arg0: $JointTransform$Type): void
public "getAnimationBoundMatrix"(arg0: $Joint$Type, arg1: $OpenMatrix4f$Type): $OpenMatrix4f
public static "fromPrimitives"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float): $JointTransform
public "toMatrix"(): $OpenMatrix4f
public static "fromMatrix"(arg0: $OpenMatrix4f$Type): $JointTransform
public "frontResult"(arg0: $JointTransform$Type, arg1: $MatrixOperation$Type): void
public "copyFrom"(arg0: $JointTransform$Type): $JointTransform
public static "mul"(arg0: $JointTransform$Type, arg1: $JointTransform$Type, arg2: $MatrixOperation$Type): $JointTransform
public "parent"(arg0: $JointTransform$Type, arg1: $MatrixOperation$Type): void
public "toString"(): string
public "scale"(): $Vec3f
public static "scale"(arg0: $Vec3f$Type): $JointTransform
public static "empty"(): $JointTransform
public "copy"(): $JointTransform
public static "interpolate"(arg0: $JointTransform$Type, arg1: $JointTransform$Type, arg2: float): $JointTransform
public static "interpolate"(arg0: $JointTransform$Type, arg1: $JointTransform$Type, arg2: float, arg3: $JointTransform$Type): $JointTransform
public static "translation"(arg0: $Vec3f$Type): $JointTransform
public "translation"(): $Vec3f
public static "rotation"(arg0: $Quaternionf$Type): $JointTransform
public "rotation"(): $Quaternionf
public "jointLocal"(arg0: $JointTransform$Type, arg1: $MatrixOperation$Type): void
public "mergeIfExist"(arg0: string, arg1: $JointTransform$Type): $JointTransform
public "animationTransform"(arg0: $JointTransform$Type, arg1: $MatrixOperation$Type): void
public static "interpolateTransform"(arg0: $JointTransform$Type, arg1: $JointTransform$Type, arg2: float, arg3: $JointTransform$Type): $JointTransform
public static "translationRotation"(arg0: $Vec3f$Type, arg1: $Quaternionf$Type): $JointTransform
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JointTransform$Type = ($JointTransform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JointTransform_ = $JointTransform$Type;
}}
declare module "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$AbstractClientPlayerPatch" {
import {$AbstractClientPlayer, $AbstractClientPlayer$Type} from "packages/net/minecraft/client/player/$AbstractClientPlayer"
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$Armature, $Armature$Type} from "packages/yesman/epicfight/api/model/$Armature"
import {$CapabilityItem, $CapabilityItem$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$SPEntityPairingPacket, $SPEntityPairingPacket$Type} from "packages/yesman/epicfight/network/server/$SPEntityPairingPacket"
import {$ActionAnimation, $ActionAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$ActionAnimation"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$EntitySnapshot, $EntitySnapshot$Type} from "packages/yesman/epicfight/api/utils/$EntitySnapshot"
import {$ClothSimulatable, $ClothSimulatable$Type} from "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulatable"
import {$EpicSkins, $EpicSkins$Type} from "packages/yesman/epicfight/client/online/$EpicSkins"
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$PhysicsSimulator, $PhysicsSimulator$Type} from "packages/yesman/epicfight/api/physics/$PhysicsSimulator"
import {$SimulationTypes, $SimulationTypes$Type} from "packages/yesman/epicfight/api/physics/$SimulationTypes"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityJoinLevelEvent, $EntityJoinLevelEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityJoinLevelEvent"
import {$ClothSimulator, $ClothSimulator$Type} from "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulator"
import {$Animator, $Animator$Type} from "packages/yesman/epicfight/api/animation/$Animator"

export class $AbstractClientPlayerPatch<T extends $AbstractClientPlayer> extends $PlayerPatch<(T)> implements $ClothSimulatable {
 "modelYRotO2": float
 "xPosO2": double
 "yPosO2": double
 "zPosO2": double
 "xCloakO2": double
 "yCloakO2": double
 "zCloakO2": double
static "STAMINA": $EntityDataAccessor<(float)>
 "dx": double
 "dz": double
static readonly "WEIGHT_CORRECTION": double
 "currentLivingMotion": $LivingMotion
 "currentCompositeMotion": $LivingMotion

constructor()

public "setEpicSkinsInformation"(arg0: $EpicSkins$Type): void
public "getEpicSkinsInformation"(): $EpicSkins
public "isEpicSkinsLoaded"(): boolean
public "getSimulator"<SIM extends $PhysicsSimulator<(any), (any), (any), (any), (any)>>(arg0: $SimulationTypes$Type<(any), (any), (any), (any), (any), (SIM)>): $Optional<(SIM)>
public "getClothSimulator"(): $ClothSimulator
public "getAccurateCloakLocation"(arg0: float): $Vec3
public "getAccuratePartialLocation"(arg0: float): $Vec3
public "getObjectVelocity"(): $Vec3
public "getAccurateYRot"(arg0: float): float
public "getYRotDelta"(arg0: float): float
public "getSimulatableAnimator"(): $Animator
public "getGravity"(): float
public "onOldPosUpdate"(): void
public "updateMotion"(arg0: boolean): void
public "poseTick"(arg0: $DynamicAnimation$Type, arg1: $Pose$Type, arg2: float, arg3: float): void
public "overrideRender"(): boolean
public "onJoinWorld"(arg0: T, arg1: $EntityJoinLevelEvent$Type): void
public "getModelMatrix"(arg0: float): $OpenMatrix4f
public "entityPairing"(arg0: $SPEntityPairingPacket$Type): void
public "updateHeldItem"(arg0: $CapabilityItem$Type, arg1: $CapabilityItem$Type): void
public "shouldMoveOnCurrentSide"(arg0: $ActionAnimation$Type): boolean
public "captureEntitySnapshot"(): $EntitySnapshot<(any)>
public "invalid"(): boolean
public "getScale"(): float
public "getArmature"(): $Armature
public "getYRot"(): float
public "getYRotO"(): float
set "epicSkinsInformation"(value: $EpicSkins$Type)
get "epicSkinsInformation"(): $EpicSkins
get "epicSkinsLoaded"(): boolean
get "clothSimulator"(): $ClothSimulator
get "objectVelocity"(): $Vec3
get "simulatableAnimator"(): $Animator
get "gravity"(): float
get "scale"(): float
get "armature"(): $Armature
get "yRot"(): float
get "yRotO"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractClientPlayerPatch$Type<T> = ($AbstractClientPlayerPatch<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractClientPlayerPatch_<T> = $AbstractClientPlayerPatch$Type<(T)>;
}}
declare module "packages/yesman/epicfight/api/animation/$TransformSheet$InterpolationInfo" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $TransformSheet$InterpolationInfo extends $Record {
static readonly "INVALID": $TransformSheet$InterpolationInfo

constructor(prev: integer, next: integer, delta: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "next"(): integer
public "prev"(): integer
public "delta"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformSheet$InterpolationInfo$Type = ($TransformSheet$InterpolationInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformSheet$InterpolationInfo_ = $TransformSheet$InterpolationInfo$Type;
}}
declare module "packages/yesman/epicfight/api/animation/types/$StaticAnimation" {
import {$Armature, $Armature$Type} from "packages/yesman/epicfight/api/model/$Armature"
import {$AnimationVariables$IndependentAnimationVariableKey, $AnimationVariables$IndependentAnimationVariableKey$Type} from "packages/yesman/epicfight/api/animation/$AnimationVariables$IndependentAnimationVariableKey"
import {$Layer$LayerType, $Layer$LayerType$Type} from "packages/yesman/epicfight/api/client/animation/$Layer$LayerType"
import {$InverseKinematicsProvider, $InverseKinematicsProvider$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsProvider"
import {$InverseKinematicsSimulator$BakedInverseKinematicsDefinition, $InverseKinematicsSimulator$BakedInverseKinematicsDefinition$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulator$BakedInverseKinematicsDefinition"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EntityState, $EntityState$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState"
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$InverseKinematicsSimulator$InverseKinematicsObject, $InverseKinematicsSimulator$InverseKinematicsObject$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulator$InverseKinematicsObject"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AnimationProperty, $AnimationProperty$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationProperty"
import {$JointMaskEntry, $JointMaskEntry$Type} from "packages/yesman/epicfight/api/client/animation/property/$JointMaskEntry"
import {$AnimationProperty$StaticAnimationProperty, $AnimationProperty$StaticAnimationProperty$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationProperty$StaticAnimationProperty"
import {$InverseKinematicsSimulator$InverseKinematicsBuilder, $InverseKinematicsSimulator$InverseKinematicsBuilder$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulator$InverseKinematicsBuilder"
import {$Layer$Priority, $Layer$Priority$Type} from "packages/yesman/epicfight/api/client/animation/$Layer$Priority"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$Vec3f, $Vec3f$Type} from "packages/yesman/epicfight/api/utils/math/$Vec3f"
import {$EntityState$StateFactor, $EntityState$StateFactor$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState$StateFactor"
import {$TypeFlexibleHashMap, $TypeFlexibleHashMap$Type} from "packages/yesman/epicfight/api/utils/datastruct/$TypeFlexibleHashMap"
import {$JointTransform, $JointTransform$Type} from "packages/yesman/epicfight/api/animation/$JointTransform"
import {$EnderDragonPatch, $EnderDragonPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/boss/enderdragon/$EnderDragonPatch"
import {$TransformSheet, $TransformSheet$Type} from "packages/yesman/epicfight/api/animation/$TransformSheet"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$InverseKinematicsSimulatable, $InverseKinematicsSimulatable$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulatable"
import {$AnimationClip, $AnimationClip$Type} from "packages/yesman/epicfight/api/animation/$AnimationClip"
import {$AnimationManager$AnimationAccessor, $AnimationManager$AnimationAccessor$Type} from "packages/yesman/epicfight/api/animation/$AnimationManager$AnimationAccessor"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$LinkAnimation, $LinkAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$LinkAnimation"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$AnimationEvent, $AnimationEvent$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationEvent"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $StaticAnimation extends $DynamicAnimation implements $InverseKinematicsProvider {
static readonly "HAD_NO_PHYSICS": $AnimationVariables$IndependentAnimationVariableKey<(boolean)>

constructor(arg0: $ResourceLocation$Type, arg1: float, arg2: boolean, arg3: string, arg4: $AssetAccessor$Type<(any)>)
constructor()
constructor(arg0: float, arg1: boolean, arg2: $AnimationManager$AnimationAccessor$Type<(any)>, arg3: $AssetAccessor$Type<(any)>)
constructor(arg0: float, arg1: boolean, arg2: string, arg3: $AssetAccessor$Type<(any)>)
constructor(arg0: boolean, arg1: $AnimationManager$AnimationAccessor$Type<(any)>, arg2: $AssetAccessor$Type<(any)>)

public "getLayerType"(): $Layer$LayerType
public "getJointMaskEntry"(arg0: $LivingEntityPatch$Type<(any)>, arg1: boolean): $Optional<($JointMaskEntry)>
public "getStatesMap"(arg0: $LivingEntityPatch$Type<(any)>, arg1: float): $TypeFlexibleHashMap<($EntityState$StateFactor<(any)>)>
public "renderDebugging"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: $LivingEntityPatch$Type<(any)>, arg3: float, arg4: float): void
public "setLinkAnimation"(arg0: $AssetAccessor$Type<(any)>, arg1: $Pose$Type, arg2: boolean, arg3: float, arg4: $LivingEntityPatch$Type<(any)>, arg5: $LinkAnimation$Type): void
public "getAnimationClip"(): $AnimationClip
public "newConditionalTimePair"<A extends $StaticAnimation>(arg0: $Function$Type<($LivingEntityPatch$Type<(any)>), (integer)>, arg1: float, arg2: float): A
public "addConditionalState"<T, A extends $StaticAnimation>(arg0: integer, arg1: $EntityState$StateFactor$Type<(T)>, arg2: T): A
public "isStaticAnimation"(): boolean
public "idBetween"(arg0: $StaticAnimation$Type, arg1: $StaticAnimation$Type): boolean
public "getCoord"(): $TransformSheet
public static "getFileHash"(arg0: $ResourceLocation$Type): string
public "getFileHash"(): string
public "loadAnimation"(): void
public "modifyPose"(arg0: $DynamicAnimation$Type, arg1: $Pose$Type, arg2: $LivingEntityPatch$Type<(any)>, arg3: float, arg4: float): void
public "addStateIfNotExist"<T, A extends $StaticAnimation>(arg0: $EntityState$StateFactor$Type<(T)>, arg1: T): A
public "getModifiedLinkState"(arg0: $EntityState$StateFactor$Type<(any)>, arg1: any, arg2: $LivingEntityPatch$Type<(any)>, arg3: float): any
public "createSimulationData"(arg0: $InverseKinematicsProvider$Type, arg1: $InverseKinematicsSimulatable$Type, arg2: $InverseKinematicsSimulator$InverseKinematicsBuilder$Type): $InverseKinematicsSimulator$InverseKinematicsObject
public "addEvents"<A extends $StaticAnimation>(...arg0: ($AnimationEvent$Type<(any), (any)>)[]): A
public "addEvents"<A extends $StaticAnimation>(arg0: $AnimationProperty$StaticAnimationProperty$Type<(any)>, ...arg1: ($AnimationEvent$Type<(any), (any)>)[]): A
public "setResourceLocation"<A extends $StaticAnimation>(arg0: string, arg1: string): A
public "addStateRemoveOld"<T, A extends $StaticAnimation>(arg0: $EntityState$StateFactor$Type<(T)>, arg1: T): A
public "newTimePair"<A extends $StaticAnimation>(arg0: float, arg1: float): A
public "getPlaySpeed"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $DynamicAnimation$Type): float
/**
 * 
 * @deprecated
 */
public "addPropertyUnsafe"(arg0: $AnimationProperty$Type<(any)>, arg1: any): $StaticAnimation
public "setAccessor"(arg0: $AnimationManager$AnimationAccessor$Type<(any)>): void
public "getSubAnimations"(): $List<($AssetAccessor<(any)>)>
public "getRegistryName"(): $ResourceLocation
public "tick"(arg0: $LivingEntityPatch$Type<(any)>): void
public "getArmature"(): $AssetAccessor<(any)>
public "doesHeadRotFollowEntityHead"(): boolean
public "invalidate"(): void
public "getProperty"<V>(arg0: $AnimationProperty$Type<(V)>): $Optional<(V)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "end"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $AssetAccessor$Type<(any)>, arg2: boolean): void
public "begin"(arg0: $LivingEntityPatch$Type<(any)>): void
public "getLocation"(): $ResourceLocation
public "in"(arg0: ($StaticAnimation$Type)[]): boolean
public "in"(arg0: ($AnimationManager$AnimationAccessor$Type<(any)>)[]): boolean
public "getPriority"(): $Layer$Priority
public "getId"(): integer
public "getState"(arg0: $LivingEntityPatch$Type<(any)>, arg1: float): $EntityState
public "getState"<T>(arg0: $EntityState$StateFactor$Type<(T)>, arg1: $LivingEntityPatch$Type<(any)>, arg2: float): T
public "getAccessor"<A extends $DynamicAnimation>(): $AnimationManager$AnimationAccessor<(A)>
public "isInvalid"(): boolean
public "addProperty"<A extends $StaticAnimation, V>(arg0: $AnimationProperty$StaticAnimationProperty$Type<(V)>, arg1: V): A
public "removeProperty"<A extends $StaticAnimation>(arg0: $AnimationProperty$StaticAnimationProperty$Type<(any)>): A
public "removeState"<T, A extends $StaticAnimation>(arg0: $EntityState$StateFactor$Type<(T)>): A
public "addState"<T, A extends $StaticAnimation>(arg0: $EntityState$StateFactor$Type<(T)>, arg1: T): A
public "postInit"(): void
public "clipAnimation"(arg0: $TransformSheet$Type, arg1: $InverseKinematicsSimulator$BakedInverseKinematicsDefinition$Type): $TransformSheet
public "startPartAnimation"(arg0: $InverseKinematicsSimulator$BakedInverseKinematicsDefinition$Type, arg1: $InverseKinematicsSimulator$InverseKinematicsObject$Type, arg2: $TransformSheet$Type, arg3: $Vec3f$Type): void
public "startSimple"(arg0: $InverseKinematicsSimulator$InverseKinematicsObject$Type): void
public "getRayCastedTipPosition"(arg0: $InverseKinematicsSimulatable$Type, arg1: $Vec3f$Type, arg2: $OpenMatrix4f$Type, arg3: float, arg4: float): $Vec3f
public "correctRootRotation"(arg0: $JointTransform$Type, arg1: $EnderDragonPatch$Type, arg2: float): void
public "applyFabrikToJoint"(arg0: $Vec3f$Type, arg1: $Pose$Type, arg2: $Armature$Type, arg3: $Joint$Type, arg4: $Joint$Type, arg5: $Quaternionf$Type): void
get "layerType"(): $Layer$LayerType
get "animationClip"(): $AnimationClip
get "staticAnimation"(): boolean
get "coord"(): $TransformSheet
get "fileHash"(): string
set "accessor"(value: $AnimationManager$AnimationAccessor$Type<(any)>)
get "subAnimations"(): $List<($AssetAccessor<(any)>)>
get "registryName"(): $ResourceLocation
get "armature"(): $AssetAccessor<(any)>
get "location"(): $ResourceLocation
get "priority"(): $Layer$Priority
get "id"(): integer
get "accessor"(): $AnimationManager$AnimationAccessor<(A)>
get "invalid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StaticAnimation$Type = ($StaticAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StaticAnimation_ = $StaticAnimation$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/entitypatch/$EntityDecorations$AnimationPropertyModifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EntityDecorations$AnimationPropertyModifier<T, O> {

 "getModifiedValue"(arg0: T, arg1: O): T
 "shouldRemove"(): boolean

(arg0: T, arg1: O): T
}

export namespace $EntityDecorations$AnimationPropertyModifier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityDecorations$AnimationPropertyModifier$Type<T, O> = ($EntityDecorations$AnimationPropertyModifier<(T), (O)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityDecorations$AnimationPropertyModifier_<T, O> = $EntityDecorations$AnimationPropertyModifier$Type<(T), (O)>;
}}
declare module "packages/yesman/epicfight/skill/$SkillDataKey$SkillDataKeyCallbacks" {
import {$RegistryManager, $RegistryManager$Type} from "packages/net/minecraftforge/registries/$RegistryManager"
import {$IForgeRegistryInternal, $IForgeRegistryInternal$Type} from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"
import {$SkillDataKey, $SkillDataKey$Type} from "packages/yesman/epicfight/skill/$SkillDataKey"
import {$IForgeRegistry$BakeCallback, $IForgeRegistry$BakeCallback$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry$BakeCallback"
import {$IForgeRegistry$CreateCallback, $IForgeRegistry$CreateCallback$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry$CreateCallback"
import {$IForgeRegistry$ClearCallback, $IForgeRegistry$ClearCallback$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry$ClearCallback"

export class $SkillDataKey$SkillDataKeyCallbacks implements $IForgeRegistry$BakeCallback<($SkillDataKey<(any)>)>, $IForgeRegistry$CreateCallback<($SkillDataKey<(any)>)>, $IForgeRegistry$ClearCallback<($SkillDataKey<(any)>)> {


public "onCreate"(arg0: $IForgeRegistryInternal$Type<($SkillDataKey$Type<(any)>)>, arg1: $RegistryManager$Type): void
public "onBake"(arg0: $IForgeRegistryInternal$Type<($SkillDataKey$Type<(any)>)>, arg1: $RegistryManager$Type): void
public "onClear"(arg0: $IForgeRegistryInternal$Type<($SkillDataKey$Type<(any)>)>, arg1: $RegistryManager$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillDataKey$SkillDataKeyCallbacks$Type = ($SkillDataKey$SkillDataKeyCallbacks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillDataKey$SkillDataKeyCallbacks_ = $SkillDataKey$SkillDataKeyCallbacks$Type;
}}
declare module "packages/yesman/epicfight/skill/$Skill$Resource" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Skill$Resource$ResourcePredicate, $Skill$Resource$ResourcePredicate$Type} from "packages/yesman/epicfight/skill/$Skill$Resource$ResourcePredicate"
import {$Skill$Resource$ResourceConsumer, $Skill$Resource$ResourceConsumer$Type} from "packages/yesman/epicfight/skill/$Skill$Resource$ResourceConsumer"

export class $Skill$Resource extends $Enum<($Skill$Resource)> {
static readonly "NONE": $Skill$Resource
static readonly "WEAPON_CHARGE": $Skill$Resource
static readonly "COOLDOWN": $Skill$Resource
static readonly "STAMINA": $Skill$Resource
static readonly "HEALTH": $Skill$Resource
readonly "predicate": $Skill$Resource$ResourcePredicate
readonly "consumer": $Skill$Resource$ResourceConsumer


public static "values"(): ($Skill$Resource)[]
public static "valueOf"(arg0: string): $Skill$Resource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Skill$Resource$Type = (("stamina") | ("cooldown") | ("health") | ("none") | ("weapon_charge")) | ($Skill$Resource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Skill$Resource_ = $Skill$Resource$Type;
}}
declare module "packages/yesman/epicfight/api/utils/math/$MatrixOperation" {
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"

export interface $MatrixOperation {

 "mul"(arg0: $OpenMatrix4f$Type, arg1: $OpenMatrix4f$Type, arg2: $OpenMatrix4f$Type): $OpenMatrix4f

(arg0: $OpenMatrix4f$Type, arg1: $OpenMatrix4f$Type, arg2: $OpenMatrix4f$Type): $OpenMatrix4f
}

export namespace $MatrixOperation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatrixOperation$Type = ($MatrixOperation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MatrixOperation_ = $MatrixOperation$Type;
}}
declare module "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulator" {
import {$ClothSimulator$ClothObjectBuilder, $ClothSimulator$ClothObjectBuilder$Type} from "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulator$ClothObjectBuilder"
import {$SoftBodyTranslatable, $SoftBodyTranslatable$Type} from "packages/yesman/epicfight/api/client/model/$SoftBodyTranslatable"
import {$AbstractSimulator, $AbstractSimulator$Type} from "packages/yesman/epicfight/api/client/physics/$AbstractSimulator"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ClothSimulator$ClothObject, $ClothSimulator$ClothObject$Type} from "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulator$ClothObject"
import {$ClothSimulatable, $ClothSimulatable$Type} from "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulatable"

export class $ClothSimulator extends $AbstractSimulator<($ResourceLocation), ($ClothSimulator$ClothObjectBuilder), ($SoftBodyTranslatable), ($ClothSimulatable), ($ClothSimulator$ClothObject)> {
static readonly "PLAYER_CLOAK": $ResourceLocation
static readonly "MODELPREVIEWER_CLOAK": $ResourceLocation

constructor()

public static "drawMeshColliders"(arg0: boolean): void
public static "drawNormalOffset"(arg0: boolean): void
public static "drawOutlines"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClothSimulator$Type = ($ClothSimulator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClothSimulator_ = $ClothSimulator$Type;
}}
declare module "packages/yesman/epicfight/api/client/animation/$AnimationSubFileReader$PovSettings$ViewLimit" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $AnimationSubFileReader$PovSettings$ViewLimit extends $Record {

constructor(xRotMin: float, xRotMax: float, yRotMin: float, yRotMax: float)

public "xRotMin"(): float
public "xRotMax"(): float
public "yRotMin"(): float
public "yRotMax"(): float
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationSubFileReader$PovSettings$ViewLimit$Type = ($AnimationSubFileReader$PovSettings$ViewLimit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationSubFileReader$PovSettings$ViewLimit_ = $AnimationSubFileReader$PovSettings$ViewLimit$Type;
}}
declare module "packages/yesman/epicfight/api/animation/property/$AnimationProperty$PlaybackSpeedModifier" {
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export interface $AnimationProperty$PlaybackSpeedModifier {

 "modify"(arg0: $DynamicAnimation$Type, arg1: $LivingEntityPatch$Type<(any)>, arg2: float, arg3: float, arg4: float): float

(arg0: $DynamicAnimation$Type, arg1: $LivingEntityPatch$Type<(any)>, arg2: float, arg3: float, arg4: float): float
}

export namespace $AnimationProperty$PlaybackSpeedModifier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationProperty$PlaybackSpeedModifier$Type = ($AnimationProperty$PlaybackSpeedModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationProperty$PlaybackSpeedModifier_ = $AnimationProperty$PlaybackSpeedModifier$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/projectile/$ProjectilePatch" {
import {$ProjectileImpactEvent, $ProjectileImpactEvent$Type} from "packages/net/minecraftforge/event/entity/$ProjectileImpactEvent"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$EntityJoinLevelEvent, $EntityJoinLevelEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityJoinLevelEvent"
import {$EntityPatch, $EntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$EntityPatch"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$EpicFightDamageSource, $EpicFightDamageSource$Type} from "packages/yesman/epicfight/world/damagesource/$EpicFightDamageSource"

export class $ProjectilePatch<T extends $Projectile> extends $EntityPatch<(T)> {

constructor()

public "setHit"(arg0: boolean): void
public "onAddedToWorld"(): void
public "onProjectileImpact"(arg0: $ProjectileImpactEvent$Type): boolean
public "overrideRender"(): boolean
public "onJoinWorld"(arg0: T, arg1: $EntityJoinLevelEvent$Type): void
public "getModelMatrix"(arg0: float): $OpenMatrix4f
public "hit"(): boolean
public "createEpicFightDamageSource"(): $EpicFightDamageSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProjectilePatch$Type<T> = ($ProjectilePatch<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProjectilePatch_<T> = $ProjectilePatch$Type<(T)>;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$DodgeSuccessEvent" {
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$AbstractPlayerEvent, $AbstractPlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AbstractPlayerEvent"

export class $DodgeSuccessEvent extends $AbstractPlayerEvent<($ServerPlayerPatch)> {

constructor(arg0: $ServerPlayerPatch$Type, arg1: $DamageSource$Type, arg2: $Vec3$Type)

public "getDamageSource"(): $DamageSource
public "getLocation"(): $Vec3
get "damageSource"(): $DamageSource
get "location"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DodgeSuccessEvent$Type = ($DodgeSuccessEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DodgeSuccessEvent_ = $DodgeSuccessEvent$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/entitypatch/boss/enderdragon/$EnderDragonPatch" {
import {$BossEvent, $BossEvent$Type} from "packages/net/minecraft/world/$BossEvent"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$EntityAttributeModificationEvent, $EntityAttributeModificationEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityAttributeModificationEvent"
import {$InverseKinematicsSimulator, $InverseKinematicsSimulator$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulator"
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$PhysicsSimulator, $PhysicsSimulator$Type} from "packages/yesman/epicfight/api/physics/$PhysicsSimulator"
import {$MobPatch, $MobPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$MobPatch"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$LivingEvent$LivingTickEvent, $LivingEvent$LivingTickEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent$LivingTickEvent"
import {$AttackResult, $AttackResult$Type} from "packages/yesman/epicfight/api/utils/$AttackResult"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$SPEntityPairingPacket, $SPEntityPairingPacket$Type} from "packages/yesman/epicfight/network/server/$SPEntityPairingPacket"
import {$ActionAnimation, $ActionAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$ActionAnimation"
import {$EnderDragon, $EnderDragon$Type} from "packages/net/minecraft/world/entity/boss/enderdragon/$EnderDragon"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$InverseKinematicsSimulatable, $InverseKinematicsSimulatable$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulatable"
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$TargetingConditions, $TargetingConditions$Type} from "packages/net/minecraft/world/entity/ai/targeting/$TargetingConditions"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$SimulationTypes, $SimulationTypes$Type} from "packages/yesman/epicfight/api/physics/$SimulationTypes"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityJoinLevelEvent, $EntityJoinLevelEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityJoinLevelEvent"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$BossPatch, $BossPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/boss/$BossPatch"
import {$Animator, $Animator$Type} from "packages/yesman/epicfight/api/animation/$Animator"

export class $EnderDragonPatch extends $MobPatch<($EnderDragon)> implements $InverseKinematicsSimulatable, $BossPatch<($EnderDragon)> {
static readonly "DRAGON_TARGETING": $TargetingConditions
 "prevMotion": $LivingMotion
static readonly "WEIGHT_CORRECTION": double
 "currentLivingMotion": $LivingMotion
 "currentCompositeMotion": $LivingMotion

constructor()

public "toEntity"(): $Entity
public "getRootXRotO"(): float
public "getRootXRot"(): float
public "getRootZRotO"(): float
public "getRootZRot"(): float
public "setIKHeightAndRootRotation"(): void
public "getIKSimulator"(): $InverseKinematicsSimulator
public "setFlyingPhase"(): void
public "getNearbyCrystals"(): integer
public "setGroundPhase"(): void
public "isGroundPhase"(): boolean
public static "initAttributes"(arg0: $EntityAttributeModificationEvent$Type): void
public "getBossEvent"(): $BossEvent
public "getSimulator"<SIM extends $PhysicsSimulator<(any), (any), (any), (any), (any)>>(arg0: $SimulationTypes$Type<(any), (any), (any), (any), (any), (SIM)>): $Optional<(SIM)>
public "tick"(arg0: $LivingEvent$LivingTickEvent$Type): void
public "onDeath"(arg0: $LivingDeathEvent$Type): void
public "saveData"(arg0: $CompoundTag$Type): void
public "initAnimator"(arg0: $Animator$Type): void
public "updateMotion"(arg0: boolean): void
public "serverTick"(arg0: $LivingEvent$LivingTickEvent$Type): void
public "poseTick"(arg0: $DynamicAnimation$Type, arg1: $Pose$Type, arg2: float, arg3: float): void
public "onStartTracking"(arg0: $ServerPlayer$Type): void
public "onStopTracking"(arg0: $ServerPlayer$Type): void
public "onConstructed"(arg0: $EnderDragon$Type): void
public "onJoinWorld"(arg0: $EnderDragon$Type, arg1: $EntityJoinLevelEvent$Type): void
public "getAngleTo"(arg0: $Entity$Type): double
public "getAngleToHorizontal"(arg0: $Entity$Type): double
public "getModelMatrix"(arg0: float): $OpenMatrix4f
public "entityPairing"(arg0: $SPEntityPairingPacket$Type): void
public "isOutlineVisible"(arg0: $LocalPlayer$Type): boolean
public "damageStunShield"(arg0: float, arg1: float): void
public "tryHurt"(arg0: $DamageSource$Type, arg1: float): $AttackResult
public "getYRotDeltaTo"(arg0: $Entity$Type): float
public "getSwingSound"(arg0: $InteractionHand$Type): $SoundEvent
public "shouldMoveOnCurrentSide"(arg0: $ActionAnimation$Type): boolean
public "clientTick"(arg0: $LivingEvent$LivingTickEvent$Type): void
public "rotateTo"(arg0: $Entity$Type, arg1: float, arg2: boolean): void
public "recordBossEventOwner"(arg0: $ServerPlayer$Type): void
public "removeBossEventOwner"(arg0: $ServerPlayer$Type): void
public "processOwnerRecordPacket"(arg0: $FriendlyByteBuf$Type): void
public "getOriginal"(): $EnderDragon
public "cast"<P extends $LivingEntityPatch<(any)>>(): P
get "rootXRotO"(): float
get "rootXRot"(): float
get "rootZRotO"(): float
get "rootZRot"(): float
get "iKSimulator"(): $InverseKinematicsSimulator
get "nearbyCrystals"(): integer
get "groundPhase"(): boolean
get "bossEvent"(): $BossEvent
get "original"(): $EnderDragon
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderDragonPatch$Type = ($EnderDragonPatch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderDragonPatch_ = $EnderDragonPatch$Type;
}}
declare module "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulator$ClothOBBCollider" {
import {$Vec3f, $Vec3f$Type} from "packages/yesman/epicfight/api/utils/math/$Vec3f"
import {$List, $List$Type} from "packages/java/util/$List"
import {$OBBCollider, $OBBCollider$Type} from "packages/yesman/epicfight/api/collider/$OBBCollider"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $ClothSimulator$ClothOBBCollider extends $OBBCollider {

constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double)

public "pushIfPointInside"(arg0: $Vec3f$Type, arg1: $Vec3f$Type, arg2: float, arg3: $List$Type<($Vec3f$Type)>, arg4: $List$Type<($ClothSimulator$ClothOBBCollider$Type)>): void
public "getOuterAABB"(arg0: float): $AABB
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClothSimulator$ClothOBBCollider$Type = ($ClothSimulator$ClothOBBCollider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClothSimulator$ClothOBBCollider_ = $ClothSimulator$ClothOBBCollider$Type;
}}
declare module "packages/yesman/epicfight/api/animation/property/$AnimationProperty$PlaybackTimeModifier" {
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export interface $AnimationProperty$PlaybackTimeModifier {

 "modify"(arg0: $DynamicAnimation$Type, arg1: $LivingEntityPatch$Type<(any)>, arg2: float, arg3: float, arg4: float): $Pair<(float), (float)>

(arg0: $DynamicAnimation$Type, arg1: $LivingEntityPatch$Type<(any)>, arg2: float, arg3: float, arg4: float): $Pair<(float), (float)>
}

export namespace $AnimationProperty$PlaybackTimeModifier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationProperty$PlaybackTimeModifier$Type = ($AnimationProperty$PlaybackTimeModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationProperty$PlaybackTimeModifier_ = $AnimationProperty$PlaybackTimeModifier$Type;
}}
declare module "packages/yesman/epicfight/api/client/animation/property/$JointMask$JointMaskSet" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$JointMask$BindModifier, $JointMask$BindModifier$Type} from "packages/yesman/epicfight/api/client/animation/property/$JointMask$BindModifier"
import {$JointMask, $JointMask$Type} from "packages/yesman/epicfight/api/client/animation/property/$JointMask"

export class $JointMask$JointMaskSet {

constructor()

public "getBindModifier"(arg0: string): $JointMask$BindModifier
public static "of"(...arg0: ($JointMask$Type)[]): $JointMask$JointMaskSet
public static "of"(arg0: $Set$Type<($JointMask$Type)>): $JointMask$JointMaskSet
public "contains"(arg0: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JointMask$JointMaskSet$Type = ($JointMask$JointMaskSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JointMask$JointMaskSet_ = $JointMask$JointMaskSet$Type;
}}
declare module "packages/yesman/epicfight/compat/kubejs/skill/$CustomSkill" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CapabilityItem, $CapabilityItem$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$SkillContainer, $SkillContainer$Type} from "packages/yesman/epicfight/skill/$SkillContainer"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$BattleModeGui, $BattleModeGui$Type} from "packages/yesman/epicfight/client/gui/$BattleModeGui"
import {$LocalPlayerPatch, $LocalPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$CustomSkill$CustomSkillBuilder, $CustomSkill$CustomSkillBuilder$Type} from "packages/yesman/epicfight/compat/kubejs/skill/$CustomSkill$CustomSkillBuilder"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"

export class $CustomSkill extends $Skill {

constructor(arg0: $CustomSkill$CustomSkillBuilder$Type)

public "onInitiate"(arg0: $SkillContainer$Type): void
public "onRemoved"(arg0: $SkillContainer$Type): void
public "setConsumption"(arg0: $SkillContainer$Type, arg1: float): void
public "updateContainer"(arg0: $SkillContainer$Type): void
public "getCooldownRegenPerSecond"(arg0: $PlayerPatch$Type<(any)>): float
public "getMaxDuration"(): integer
public "shouldDeactivateAutomatically"(arg0: $PlayerPatch$Type<(any)>): boolean
public "onScreen"(arg0: $LocalPlayerPatch$Type, arg1: float, arg2: float): void
public "getTooltipOnItem"(arg0: $ItemStack$Type, arg1: $CapabilityItem$Type, arg2: $PlayerPatch$Type<(any)>): $List<($Component)>
public "getTooltipArgsOfScreen"(arg0: $List$Type<(any)>): $List<(any)>
public "drawOnGui"(arg0: $BattleModeGui$Type, arg1: $SkillContainer$Type, arg2: $GuiGraphics$Type, arg3: float, arg4: float, arg5: float): void
public "getSkillTexture"(): $ResourceLocation
public "shouldDraw"(arg0: $SkillContainer$Type): boolean
public "isExecutableState"(arg0: $PlayerPatch$Type<(any)>): boolean
public "executeOnServer"(arg0: $SkillContainer$Type, arg1: $FriendlyByteBuf$Type): void
public "cancelOnServer"(arg0: $SkillContainer$Type, arg1: $FriendlyByteBuf$Type): void
public "executeOnClient"(arg0: $SkillContainer$Type, arg1: $FriendlyByteBuf$Type): void
public "cancelOnClient"(arg0: $SkillContainer$Type, arg1: $FriendlyByteBuf$Type): void
public "getMaxStack"(): integer
public "canExecute"(arg0: $SkillContainer$Type): boolean
public "getCreativeTab"(): $CreativeModeTab
get "maxDuration"(): integer
get "skillTexture"(): $ResourceLocation
get "maxStack"(): integer
get "creativeTab"(): $CreativeModeTab
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSkill$Type = ($CustomSkill);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSkill_ = $CustomSkill$Type;
}}
declare module "packages/yesman/epicfight/mixin/client/$MixinAgeableListModel" {
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"

export interface $MixinAgeableListModel {

 "invoke_headParts"(): $Iterable<($ModelPart)>
 "invoke_bodyParts"(): $Iterable<($ModelPart)>
}

export namespace $MixinAgeableListModel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinAgeableListModel$Type = ($MixinAgeableListModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinAgeableListModel_ = $MixinAgeableListModel$Type;
}}
declare module "packages/yesman/epicfight/api/animation/$Pose" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Predicate, $Predicate$Type} from "packages/com/google/common/base/$Predicate"
import {$JointTransform, $JointTransform$Type} from "packages/yesman/epicfight/api/animation/$JointTransform"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Pose$LoadOperation, $Pose$LoadOperation$Type} from "packages/yesman/epicfight/api/animation/$Pose$LoadOperation"

export class $Pose {
static readonly "EMPTY_POSE": $Pose

constructor()
constructor(arg0: $Map$Type<(string), ($JointTransform$Type)>)

public "disableJoint"(arg0: $Predicate$Type<(any)>): void
public "getJointTransformData"(): $Map<(string), ($JointTransform)>
public "putJointData"(arg0: string, arg1: $JointTransform$Type): void
public "disableAllJoints"(): void
public static "interpolatePose"(arg0: $Pose$Type, arg1: $Pose$Type, arg2: float): $Pose
public "forEachEnabledTransforms"(arg0: $BiConsumer$Type<(string), ($JointTransform$Type)>): void
public "hasTransform"(arg0: string): boolean
public "orElseEmpty"(arg0: string): $JointTransform
public "get"(arg0: string): $JointTransform
public "toString"(): string
public "load"(arg0: $Pose$Type, arg1: $Pose$LoadOperation$Type): void
public "orElse"(arg0: string, arg1: $JointTransform$Type): $JointTransform
get "jointTransformData"(): $Map<(string), ($JointTransform)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pose$Type = ($Pose);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pose_ = $Pose$Type;
}}
declare module "packages/yesman/epicfight/skill/$Skill$Resource$ResourcePredicate" {
import {$SkillContainer, $SkillContainer$Type} from "packages/yesman/epicfight/skill/$SkillContainer"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"

export interface $Skill$Resource$ResourcePredicate {

 "canExecute"(arg0: $SkillContainer$Type, arg1: $PlayerPatch$Type<(any)>, arg2: float): boolean

(arg0: $SkillContainer$Type, arg1: $PlayerPatch$Type<(any)>, arg2: float): boolean
}

export namespace $Skill$Resource$ResourcePredicate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Skill$Resource$ResourcePredicate$Type = ($Skill$Resource$ResourcePredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Skill$Resource$ResourcePredicate_ = $Skill$Resource$ResourcePredicate$Type;
}}
declare module "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulator$ClothObject$ClothPart$ConstraintType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ClothSimulator$ClothObject$ClothPart$ConstraintType extends $Enum<($ClothSimulator$ClothObject$ClothPart$ConstraintType)> {
static readonly "STRETCHING": $ClothSimulator$ClothObject$ClothPart$ConstraintType
static readonly "SHAPING": $ClothSimulator$ClothObject$ClothPart$ConstraintType
static readonly "BENDING": $ClothSimulator$ClothObject$ClothPart$ConstraintType
static readonly "VOLUME": $ClothSimulator$ClothObject$ClothPart$ConstraintType


public static "values"(): ($ClothSimulator$ClothObject$ClothPart$ConstraintType)[]
public static "valueOf"(arg0: string): $ClothSimulator$ClothObject$ClothPart$ConstraintType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClothSimulator$ClothObject$ClothPart$ConstraintType$Type = (("bending") | ("volume") | ("stretching") | ("shaping")) | ($ClothSimulator$ClothObject$ClothPart$ConstraintType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClothSimulator$ClothObject$ClothPart$ConstraintType_ = $ClothSimulator$ClothObject$ClothPart$ConstraintType$Type;
}}
declare module "packages/yesman/epicfight/compat/kubejs/skill/$CustomChargeableSkill$GatherChargingArgumentsContext" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ControlEngine, $ControlEngine$Type} from "packages/yesman/epicfight/client/events/engine/$ControlEngine"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"
import {$LocalPlayerPatch, $LocalPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch"

export class $CustomChargeableSkill$GatherChargingArgumentsContext extends $Record {

constructor(getSkill: $Skill$Type, getCaster: $LocalPlayerPatch$Type, getControlEngine: $ControlEngine$Type, getBuffer: $FriendlyByteBuf$Type)

public "getCaster"(): $LocalPlayerPatch
public "getControlEngine"(): $ControlEngine
public "getBuffer"(): $FriendlyByteBuf
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getSkill"(): $Skill
get "caster"(): $LocalPlayerPatch
get "controlEngine"(): $ControlEngine
get "buffer"(): $FriendlyByteBuf
get "skill"(): $Skill
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomChargeableSkill$GatherChargingArgumentsContext$Type = ($CustomChargeableSkill$GatherChargingArgumentsContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomChargeableSkill$GatherChargingArgumentsContext_ = $CustomChargeableSkill$GatherChargingArgumentsContext$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$SkillConsumeEvent" {
import {$Skill$Resource, $Skill$Resource$Type} from "packages/yesman/epicfight/skill/$Skill$Resource"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"
import {$AbstractPlayerEvent, $AbstractPlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AbstractPlayerEvent"

export class $SkillConsumeEvent extends $AbstractPlayerEvent<($PlayerPatch<(any)>)> {

constructor(arg0: $PlayerPatch$Type<(any)>, arg1: $Skill$Type, arg2: $Skill$Resource$Type, arg3: $FriendlyByteBuf$Type)
constructor(arg0: $PlayerPatch$Type<(any)>, arg1: $Skill$Type, arg2: $Skill$Resource$Type, arg3: float, arg4: $FriendlyByteBuf$Type)

public "setAmount"(arg0: float): void
public "getResourceType"(): $Skill$Resource
public "getAmount"(): float
public "getArguments"(): $FriendlyByteBuf
public "getSkill"(): $Skill
public "setResourceType"(arg0: $Skill$Resource$Type): void
set "amount"(value: float)
get "resourceType"(): $Skill$Resource
get "amount"(): float
get "arguments"(): $FriendlyByteBuf
get "skill"(): $Skill
set "resourceType"(value: $Skill$Resource$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillConsumeEvent$Type = ($SkillConsumeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillConsumeEvent_ = $SkillConsumeEvent$Type;
}}
declare module "packages/yesman/epicfight/world/damagesource/$ExtraDamageInstance$ExtraDamageTooltipFunction" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $ExtraDamageInstance$ExtraDamageTooltipFunction {

 "setTooltip"(arg0: $ItemStack$Type, arg1: $MutableComponent$Type, arg2: double, arg3: (float)[]): void

(arg0: $ItemStack$Type, arg1: $MutableComponent$Type, arg2: double, arg3: (float)[]): void
}

export namespace $ExtraDamageInstance$ExtraDamageTooltipFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtraDamageInstance$ExtraDamageTooltipFunction$Type = ($ExtraDamageInstance$ExtraDamageTooltipFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtraDamageInstance$ExtraDamageTooltipFunction_ = $ExtraDamageInstance$ExtraDamageTooltipFunction$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$AnimationBeginEvent" {
import {$StaticAnimation, $StaticAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$StaticAnimation"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$AbstractPlayerEvent, $AbstractPlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AbstractPlayerEvent"

export class $AnimationBeginEvent extends $AbstractPlayerEvent<($PlayerPatch<(any)>)> {

constructor(arg0: $PlayerPatch$Type<(any)>, arg1: $StaticAnimation$Type)

public "getAnimation"(): $StaticAnimation
get "animation"(): $StaticAnimation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationBeginEvent$Type = ($AnimationBeginEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationBeginEvent_ = $AnimationBeginEvent$Type;
}}
declare module "packages/yesman/epicfight/mixin/client/$MixinEntityRenderer" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $MixinEntityRenderer {

 "invokeShouldShowName"(arg0: $Entity$Type): boolean
 "invokeRenderNameTag"(arg0: $Entity$Type, arg1: $Component$Type, arg2: $PoseStack$Type, arg3: $MultiBufferSource$Type, arg4: integer): void
}

export namespace $MixinEntityRenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinEntityRenderer$Type = ($MixinEntityRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinEntityRenderer_ = $MixinEntityRenderer$Type;
}}
declare module "packages/yesman/epicfight/world/item/$GloveItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GloveItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: $Tier$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GloveItem$Type = ($GloveItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GloveItem_ = $GloveItem$Type;
}}
declare module "packages/yesman/epicfight/api/client/animation/property/$JointMaskEntry" {
import {$JointMask$JointMaskSet, $JointMask$JointMaskSet$Type} from "packages/yesman/epicfight/api/client/animation/property/$JointMask$JointMaskSet"
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$JointMaskEntry$Builder, $JointMaskEntry$Builder$Type} from "packages/yesman/epicfight/api/client/animation/property/$JointMaskEntry$Builder"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $JointMaskEntry {
static readonly "BIPED_UPPER_JOINTS_WITH_ROOT": $JointMask$JointMaskSet
static readonly "BASIC_ATTACK_MASK": $JointMaskEntry

constructor(arg0: $JointMask$JointMaskSet$Type, arg1: $List$Type<($Pair$Type<($LivingMotion$Type), ($JointMask$JointMaskSet$Type)>)>)

public "isMasked"(arg0: $LivingMotion$Type, arg1: string): boolean
public "isValid"(): boolean
public "getMask"(arg0: $LivingMotion$Type): $JointMask$JointMaskSet
public "toString"(): string
public static "builder"(): $JointMaskEntry$Builder
public "getEntries"(): $Set<($Map$Entry<($LivingMotion), ($JointMask$JointMaskSet)>)>
public "getDefaultMask"(): $JointMask$JointMaskSet
get "valid"(): boolean
get "entries"(): $Set<($Map$Entry<($LivingMotion), ($JointMask$JointMaskSet)>)>
get "defaultMask"(): $JointMask$JointMaskSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JointMaskEntry$Type = ($JointMaskEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JointMaskEntry_ = $JointMaskEntry$Type;
}}
declare module "packages/yesman/epicfight/skill/guard/$GuardSkill$Builder" {
import {$CapabilityItem, $CapabilityItem$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem"
import {$SkillBuilder, $SkillBuilder$Type} from "packages/yesman/epicfight/skill/$SkillBuilder"
import {$WeaponCategory, $WeaponCategory$Type} from "packages/yesman/epicfight/world/capabilities/item/$WeaponCategory"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$AnimationManager$AnimationAccessor, $AnimationManager$AnimationAccessor$Type} from "packages/yesman/epicfight/api/animation/$AnimationManager$AnimationAccessor"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$GuardSkill, $GuardSkill$Type} from "packages/yesman/epicfight/skill/guard/$GuardSkill"

export class $GuardSkill$Builder extends $SkillBuilder<($GuardSkill)> {

constructor()

public "addGuardMotion"(arg0: $WeaponCategory$Type, arg1: $BiFunction$Type<($CapabilityItem$Type), ($PlayerPatch$Type<(any)>), ($AnimationManager$AnimationAccessor$Type<(any)>)>): $GuardSkill$Builder
public "addGuardBreakMotion"(arg0: $WeaponCategory$Type, arg1: $BiFunction$Type<($CapabilityItem$Type), ($PlayerPatch$Type<(any)>), ($AnimationManager$AnimationAccessor$Type<(any)>)>): $GuardSkill$Builder
public "addAdvancedGuardMotion"(arg0: $WeaponCategory$Type, arg1: $BiFunction$Type<($CapabilityItem$Type), ($PlayerPatch$Type<(any)>), (any)>): $GuardSkill$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuardSkill$Builder$Type = ($GuardSkill$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuardSkill$Builder_ = $GuardSkill$Builder$Type;
}}
declare module "packages/yesman/epicfight/api/animation/types/$LinkAnimation" {
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$EntityState$StateFactor, $EntityState$StateFactor$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState$StateFactor"
import {$TypeFlexibleHashMap, $TypeFlexibleHashMap$Type} from "packages/yesman/epicfight/api/utils/datastruct/$TypeFlexibleHashMap"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$TransformSheet, $TransformSheet$Type} from "packages/yesman/epicfight/api/animation/$TransformSheet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$AnimationClip, $AnimationClip$Type} from "packages/yesman/epicfight/api/animation/$AnimationClip"
import {$EntityState, $EntityState$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState"
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AnimationManager$AnimationAccessor, $AnimationManager$AnimationAccessor$Type} from "packages/yesman/epicfight/api/animation/$AnimationManager$AnimationAccessor"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$JointMaskEntry, $JointMaskEntry$Type} from "packages/yesman/epicfight/api/client/animation/property/$JointMaskEntry"

export class $LinkAnimation extends $DynamicAnimation implements $AnimationManager$AnimationAccessor<($LinkAnimation)> {

constructor()

public "getJointMaskEntry"(arg0: $LivingEntityPatch$Type<(any)>, arg1: boolean): $Optional<($JointMaskEntry)>
public "getStatesMap"(arg0: $LivingEntityPatch$Type<(any)>, arg1: float): $TypeFlexibleHashMap<($EntityState$StateFactor<(any)>)>
public "inRegistry"(): boolean
public "getFromAnimation"(): $AssetAccessor<(any)>
public "getAnimationClip"(): $AnimationClip
public "isLinkAnimation"(): boolean
public "getNextAnimation"(): $AssetAccessor<(any)>
public "isMainFrameAnimation"(): boolean
public "getCoord"(): $TransformSheet
public "loadCoord"(arg0: $TransformSheet$Type): void
public "getNextStartTime"(): float
public "resetNextStartTime"(): void
public "setNextStartTime"(arg0: float): void
public "setConnectedAnimations"(arg0: $AssetAccessor$Type<(any)>, arg1: $AssetAccessor$Type<(any)>): void
public "getPoseByTime"(arg0: $LivingEntityPatch$Type<(any)>, arg1: float, arg2: float): $Pose
public "modifyPose"(arg0: $DynamicAnimation$Type, arg1: $Pose$Type, arg2: $LivingEntityPatch$Type<(any)>, arg3: float, arg4: float): void
public "isReboundAnimation"(): boolean
public "getPlaySpeed"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $DynamicAnimation$Type): float
public "getRealAnimation"(): $AssetAccessor<(any)>
public "tick"(arg0: $LivingEntityPatch$Type<(any)>): void
public "doesHeadRotFollowEntityHead"(): boolean
public "copyTo"(arg0: $LinkAnimation$Type): void
public "get"(): $LinkAnimation
public "toString"(): string
public "end"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $AssetAccessor$Type<(any)>, arg2: boolean): void
public "id"(): integer
public "isPresent"(): boolean
public "getState"<T>(arg0: $EntityState$StateFactor$Type<(T)>, arg1: $LivingEntityPatch$Type<(any)>, arg2: float): T
public "getState"(arg0: $LivingEntityPatch$Type<(any)>, arg1: float): $EntityState
public "getAccessor"(): $AnimationManager$AnimationAccessor<(any)>
public "registryName"(): $ResourceLocation
public "idBetween"(arg0: $AnimationManager$AnimationAccessor$Type<(any)>, arg1: $AnimationManager$AnimationAccessor$Type<(any)>): boolean
public "doOrThrow"(arg0: $Consumer$Type<($LinkAnimation$Type)>): void
public "checkType"(arg0: $Class$Type<(any)>): boolean
public "ifPresent"(arg0: $Consumer$Type<($LinkAnimation$Type)>): void
public "ifPresentOrElse"(arg0: $Consumer$Type<($LinkAnimation$Type)>, arg1: $Runnable$Type): void
public "isEmpty"(): boolean
public "orElse"(arg0: $LinkAnimation$Type): $LinkAnimation
public "checkNotNull"(): void
get "fromAnimation"(): $AssetAccessor<(any)>
get "animationClip"(): $AnimationClip
get "linkAnimation"(): boolean
get "nextAnimation"(): $AssetAccessor<(any)>
get "mainFrameAnimation"(): boolean
get "coord"(): $TransformSheet
get "nextStartTime"(): float
set "nextStartTime"(value: float)
get "reboundAnimation"(): boolean
get "realAnimation"(): $AssetAccessor<(any)>
get "present"(): boolean
get "accessor"(): $AnimationManager$AnimationAccessor<(any)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkAnimation$Type = ($LinkAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LinkAnimation_ = $LinkAnimation$Type;
}}
declare module "packages/yesman/epicfight/network/server/$SPChangeSkill" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$SkillSlot, $SkillSlot$Type} from "packages/yesman/epicfight/skill/$SkillSlot"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"

export class $SPChangeSkill extends $Record {

constructor(skillSlot: $SkillSlot$Type, entityId: integer, skill: $Skill$Type)

public "skillSlot"(): $SkillSlot
public "entityId"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "toBytes"(arg0: $SPChangeSkill$Type, arg1: $FriendlyByteBuf$Type): void
public static "handle"(arg0: $SPChangeSkill$Type, arg1: $Supplier$Type<($NetworkEvent$Context$Type)>): void
public static "fromBytes"(arg0: $FriendlyByteBuf$Type): $SPChangeSkill
public "skill"(): $Skill
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SPChangeSkill$Type = ($SPChangeSkill);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SPChangeSkill_ = $SPChangeSkill$Type;
}}
declare module "packages/yesman/epicfight/api/client/model/$MeshPart" {
import {$VertexBuilder, $VertexBuilder$Type} from "packages/yesman/epicfight/api/client/model/$VertexBuilder"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Mesh$RenderProperties, $Mesh$RenderProperties$Type} from "packages/yesman/epicfight/api/client/model/$Mesh$RenderProperties"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Mesh$DrawingFunction, $Mesh$DrawingFunction$Type} from "packages/yesman/epicfight/api/client/model/$Mesh$DrawingFunction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $MeshPart {

constructor(arg0: $List$Type<($VertexBuilder$Type)>, arg1: $Mesh$RenderProperties$Type, arg2: $Supplier$Type<($OpenMatrix4f$Type)>)

public "getBufferBuilder"(arg0: $RenderType$Type, arg1: $MultiBufferSource$Type): $VertexConsumer
public "getVanillaPartTransform"(): $OpenMatrix4f
public "getVertices"(): $List<($VertexBuilder)>
public "getColor"(arg0: float, arg1: float, arg2: float, arg3: float): $Vector4f
public "setHidden"(arg0: boolean): void
public "isHidden"(): boolean
public "draw"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: $Mesh$DrawingFunction$Type, arg3: integer, arg4: float, arg5: float, arg6: float, arg7: float, arg8: integer): void
get "vanillaPartTransform"(): $OpenMatrix4f
get "vertices"(): $List<($VertexBuilder)>
set "hidden"(value: boolean)
get "hidden"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeshPart$Type = ($MeshPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MeshPart_ = $MeshPart$Type;
}}
declare module "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f" {
import {$FloatBuffer, $FloatBuffer$Type} from "packages/java/nio/$FloatBuffer"
import {$Vec3f, $Vec3f$Type} from "packages/yesman/epicfight/api/utils/math/$Vec3f"
import {$Vec4f, $Vec4f$Type} from "packages/yesman/epicfight/api/utils/math/$Vec4f"
import {$JointTransform, $JointTransform$Type} from "packages/yesman/epicfight/api/animation/$JointTransform"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"

export class $OpenMatrix4f {
static readonly "IDENTITY": $OpenMatrix4f
 "m00": float
 "m01": float
 "m02": float
 "m03": float
 "m10": float
 "m11": float
 "m12": float
 "m13": float
 "m20": float
 "m21": float
 "m22": float
 "m23": float
 "m30": float
 "m31": float
 "m32": float
 "m33": float

constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float, arg12: float, arg13: float, arg14: float, arg15: float)
constructor(arg0: $OpenMatrix4f$Type)
constructor()
constructor(arg0: $OpenMatrix4f$Type, arg1: boolean)
constructor(arg0: $JointTransform$Type)

public static "createTranslation"(arg0: float, arg1: float, arg2: float): $OpenMatrix4f
public "mulBack"(arg0: $OpenMatrix4f$Type): $OpenMatrix4f
public "mulFront"(arg0: $OpenMatrix4f$Type): $OpenMatrix4f
public "toTranslationVector"(): $Vec3f
public static "toTranslationVector"(arg0: $OpenMatrix4f$Type, arg1: $Vec3f$Type): $Vec3f
public static "toTranslationVector"(arg0: $OpenMatrix4f$Type): $Vec3f
public "toTranslationVector"(arg0: $Vec3f$Type): $Vec3f
public static "mulAsOriginInverse"(arg0: $OpenMatrix4f$Type, arg1: $OpenMatrix4f$Type, arg2: $OpenMatrix4f$Type): $OpenMatrix4f
public static "importFromMojangMatrix"(arg0: $Matrix4f$Type): $OpenMatrix4f
public static "ofRotationDegree"(arg0: float, arg1: $Vec3f$Type, arg2: $OpenMatrix4f$Type): $OpenMatrix4f
public static "ofScale"(arg0: float, arg1: float, arg2: float, arg3: $OpenMatrix4f$Type): $OpenMatrix4f
public static "toQuaternion"(arg0: $OpenMatrix4f$Type): $Quaternionf
public static "toQuaternion"(arg0: $OpenMatrix4f$Type, arg1: $Quaternionf$Type): $Quaternionf
public "toQuaternion"(): $Quaternionf
public "toQuaternion"(arg0: $Quaternionf$Type): $Quaternionf
public "toScaleVector"(): $Vec3f
public "toScaleVector"(arg0: $Vec3f$Type): $Vec3f
public static "exportToMojangMatrix"(arg0: $OpenMatrix4f$Type, arg1: $Matrix4f$Type): $Matrix4f
public static "exportToMojangMatrix"(arg0: $OpenMatrix4f$Type): $Matrix4f
public static "allocateMatrixArray"(arg0: integer): ($OpenMatrix4f)[]
public static "fromQuaternion"(arg0: $Quaternionf$Type): $OpenMatrix4f
public static "fromQuaternion"(arg0: $Quaternionf$Type, arg1: $OpenMatrix4f$Type): $OpenMatrix4f
public static "setIdentity"(arg0: $OpenMatrix4f$Type): $OpenMatrix4f
public "setIdentity"(): $OpenMatrix4f
public static "mulMatrices"(...arg0: ($OpenMatrix4f$Type)[]): $OpenMatrix4f
public static "mulAsOrigin"(arg0: $OpenMatrix4f$Type, arg1: $OpenMatrix4f$Type, arg2: $OpenMatrix4f$Type): $OpenMatrix4f
public static "ofTranslation"(arg0: float, arg1: float, arg2: float, arg3: $OpenMatrix4f$Type): $OpenMatrix4f
public static "createScale"(arg0: float, arg1: float, arg2: float): $OpenMatrix4f
public static "invert"(arg0: $OpenMatrix4f$Type, arg1: $OpenMatrix4f$Type): $OpenMatrix4f
public "invert"(): $OpenMatrix4f
public static "transpose"(arg0: $OpenMatrix4f$Type, arg1: $OpenMatrix4f$Type): $OpenMatrix4f
public "transpose"(): $OpenMatrix4f
public "transpose"(arg0: $OpenMatrix4f$Type): $OpenMatrix4f
public static "removeScale"(arg0: $OpenMatrix4f$Type, arg1: $OpenMatrix4f$Type): $OpenMatrix4f
public "removeScale"(): $OpenMatrix4f
public "removeTranslation"(): $OpenMatrix4f
public static "removeTranslation"(arg0: $OpenMatrix4f$Type, arg1: $OpenMatrix4f$Type): $OpenMatrix4f
public static "transform3v"(arg0: $OpenMatrix4f$Type, arg1: $Vec3f$Type, arg2: $Vec3f$Type): $Vec3f
public static "createRotatorDeg"(arg0: float, arg1: $Vec3f$Type): $OpenMatrix4f
public "rotateDeg"(arg0: float, arg1: $Vec3f$Type): $OpenMatrix4f
public static "mul"(arg0: $OpenMatrix4f$Type, arg1: $OpenMatrix4f$Type, arg2: $OpenMatrix4f$Type): $OpenMatrix4f
public static "add"(arg0: $OpenMatrix4f$Type, arg1: $OpenMatrix4f$Type, arg2: $OpenMatrix4f$Type): $OpenMatrix4f
public "toString"(): string
public "load"(arg0: $FloatBuffer$Type): $OpenMatrix4f
public static "load"(arg0: $OpenMatrix4f$Type, arg1: $FloatBuffer$Type): $OpenMatrix4f
public "load"(arg0: $OpenMatrix4f$Type): $OpenMatrix4f
public static "load"(arg0: $OpenMatrix4f$Type, arg1: $OpenMatrix4f$Type): $OpenMatrix4f
public static "load"(arg0: $OpenMatrix4f$Type, arg1: (float)[]): $OpenMatrix4f
public "store"(arg0: $FloatBuffer$Type): $OpenMatrix4f
public static "scale"(arg0: $Vec3f$Type, arg1: $OpenMatrix4f$Type, arg2: $OpenMatrix4f$Type): $OpenMatrix4f
public "scale"(arg0: $Vec3f$Type): $OpenMatrix4f
public "scale"(arg0: float, arg1: float, arg2: float): $OpenMatrix4f
public "toList"(): $List<(float)>
public static "transform"(arg0: $OpenMatrix4f$Type, arg1: $Vec3$Type): $Vec3
public static "transform"(arg0: $OpenMatrix4f$Type, arg1: $Vec4f$Type, arg2: $Vec4f$Type): $Vec4f
public "rotate"(arg0: float, arg1: $Vec3f$Type): $OpenMatrix4f
public static "rotate"(arg0: float, arg1: $Vec3f$Type, arg2: $OpenMatrix4f$Type, arg3: $OpenMatrix4f$Type): $OpenMatrix4f
public "rotate"(arg0: float, arg1: $Vec3f$Type, arg2: $OpenMatrix4f$Type): $OpenMatrix4f
public "unmodifiable"(): $OpenMatrix4f
public static "translate"(arg0: $Vec3f$Type, arg1: $OpenMatrix4f$Type, arg2: $OpenMatrix4f$Type): $OpenMatrix4f
public "translate"(arg0: $Vec3f$Type, arg1: $OpenMatrix4f$Type): $OpenMatrix4f
public "translate"(arg0: $Vec3f$Type): $OpenMatrix4f
public "translate"(arg0: float, arg1: float, arg2: float): $OpenMatrix4f
public "determinant"(): float
set "identity"(value: $OpenMatrix4f$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OpenMatrix4f$Type = ($OpenMatrix4f);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OpenMatrix4f_ = $OpenMatrix4f$Type;
}}
declare module "packages/yesman/epicfight/api/utils/$ExtendableEnumManager" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ExtendableEnum, $ExtendableEnum$Type} from "packages/yesman/epicfight/api/utils/$ExtendableEnum"

export class $ExtendableEnumManager<T extends $ExtendableEnum> {

constructor(arg0: string)

public "universalValues"(): $Collection<(T)>
public "toTranslated"(arg0: $ExtendableEnum$Type): string
public "assign"(arg0: T): integer
public "get"(arg0: integer): T
public "get"(arg0: string): T
public "getOrThrow"(arg0: string): T
public "getOrThrow"(arg0: integer): T
public "registerEnumCls"(arg0: string, arg1: $Class$Type<(any)>): void
public "loadEnum"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendableEnumManager$Type<T> = ($ExtendableEnumManager<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendableEnumManager_<T> = $ExtendableEnumManager$Type<(T)>;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$TakeDamageEvent$Damage" {
import {$TakeDamageEvent, $TakeDamageEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$TakeDamageEvent"
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"

export class $TakeDamageEvent$Damage extends $TakeDamageEvent {

constructor(arg0: $ServerPlayerPatch$Type, arg1: $DamageSource$Type, arg2: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TakeDamageEvent$Damage$Type = ($TakeDamageEvent$Damage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TakeDamageEvent$Damage_ = $TakeDamageEvent$Damage$Type;
}}
declare module "packages/yesman/epicfight/world/item/$SkillBookItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SkillBookItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public static "getContainSkill"(arg0: $ItemStack$Type): $Skill
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public static "setContainingSkill"(arg0: $Skill$Type, arg1: $ItemStack$Type): void
public static "setContainingSkill"(arg0: string, arg1: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillBookItem$Type = ($SkillBookItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillBookItem_ = $SkillBookItem$Type;
}}
declare module "packages/yesman/epicfight/api/animation/property/$AnimationEvent$Event" {
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$AnimationParameters, $AnimationParameters$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationParameters"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export interface $AnimationEvent$Event<A, B, C, D, E, F, G, H, I, J> {

 "fire"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $AssetAccessor$Type<(any)>, arg2: $AnimationParameters$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J)>): void

(arg0: $LivingEntityPatch$Type<(any)>, arg1: $AssetAccessor$Type<(any)>, arg2: $AnimationParameters$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J)>): void
}

export namespace $AnimationEvent$Event {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationEvent$Event$Type<A, B, C, D, E, F, G, H, I, J> = ($AnimationEvent$Event<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationEvent$Event_<A, B, C, D, E, F, G, H, I, J> = $AnimationEvent$Event$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J)>;
}}
declare module "packages/yesman/epicfight/world/item/$TachiItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TachiItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: $Tier$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TachiItem$Type = ($TachiItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TachiItem_ = $TachiItem$Type;
}}
declare module "packages/yesman/epicfight/api/client/animation/$AnimationSubFileReader$PovSettings$RootTransformation" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AnimationSubFileReader$PovSettings$RootTransformation extends $Enum<($AnimationSubFileReader$PovSettings$RootTransformation)> {
static readonly "CAMERA": $AnimationSubFileReader$PovSettings$RootTransformation
static readonly "WORLD": $AnimationSubFileReader$PovSettings$RootTransformation


public static "values"(): ($AnimationSubFileReader$PovSettings$RootTransformation)[]
public static "valueOf"(arg0: string): $AnimationSubFileReader$PovSettings$RootTransformation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationSubFileReader$PovSettings$RootTransformation$Type = (("world") | ("camera")) | ($AnimationSubFileReader$PovSettings$RootTransformation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationSubFileReader$PovSettings$RootTransformation_ = $AnimationSubFileReader$PovSettings$RootTransformation$Type;
}}
declare module "packages/yesman/epicfight/api/forgeevent/$EntityStunEvent" {
import {$StunType, $StunType$Type} from "packages/yesman/epicfight/world/damagesource/$StunType"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$HurtableEntityPatch, $HurtableEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$HurtableEntityPatch"
import {$EpicFightDamageSource, $EpicFightDamageSource$Type} from "packages/yesman/epicfight/world/damagesource/$EpicFightDamageSource"

export class $EntityStunEvent extends $Event {

constructor()
constructor(arg0: $EpicFightDamageSource$Type, arg1: $HurtableEntityPatch$Type<(any)>, arg2: $StunType$Type)

public "getStunnedEntityPatch"(): $HurtableEntityPatch<(any)>
public "getStunType"(): $StunType
public "getDamageSource"(): $EpicFightDamageSource
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "isCancelable"(): boolean
get "stunnedEntityPatch"(): $HurtableEntityPatch<(any)>
get "stunType"(): $StunType
get "damageSource"(): $EpicFightDamageSource
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityStunEvent$Type = ($EntityStunEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityStunEvent_ = $EntityStunEvent$Type;
}}
declare module "packages/yesman/epicfight/client/gui/screen/$SkillBookScreen" {
import {$Button, $Button$Type} from "packages/net/minecraft/client/gui/components/$Button"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$SkillBookScreen$TextureInfo, $SkillBookScreen$TextureInfo$Type} from "packages/yesman/epicfight/client/gui/screen/$SkillBookScreen$TextureInfo"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"

export class $SkillBookScreen extends $Screen {
static readonly "HEALTH_TEXTURE_INFO": $SkillBookScreen$TextureInfo
static readonly "STAMINA_TEXTURE_INFO": $SkillBookScreen$TextureInfo
static readonly "COOLDOWN_TEXTURE_INFO": $SkillBookScreen$TextureInfo
static readonly "BACKGROUND_LOCATION": $ResourceLocation
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "initialized": boolean
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font

constructor(arg0: $Player$Type, arg1: $Skill$Type, arg2: $InteractionHand$Type, arg3: $Screen$Type)
constructor(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type)

public "getLearnButton"(): $Button
public static "registerIconItems"(): void
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float, arg4: boolean): void
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "onClose"(): void
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
get "learnButton"(): $Button
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillBookScreen$Type = ($SkillBookScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillBookScreen_ = $SkillBookScreen$Type;
}}
declare module "packages/yesman/epicfight/api/client/animation/$Layer$BaseLayer" {
import {$AnimationPlayer, $AnimationPlayer$Type} from "packages/yesman/epicfight/api/animation/$AnimationPlayer"
import {$Layer$Priority, $Layer$Priority$Type} from "packages/yesman/epicfight/api/client/animation/$Layer$Priority"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$Layer, $Layer$Type} from "packages/yesman/epicfight/api/client/animation/$Layer"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $Layer$BaseLayer extends $Layer {
readonly "animationPlayer": $AnimationPlayer

constructor(arg0: $Supplier$Type<($AnimationPlayer$Type)>)
constructor()

public "disableLayer"(arg0: $Layer$Priority$Type): void
public "offCompositeLayersLowerThan"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $AssetAccessor$Type<(any)>): void
public "getBaseLayerPriority"(): $Layer$Priority
public "playAnimation"(arg0: $AssetAccessor$Type<(any)>, arg1: $LivingEntityPatch$Type<(any)>, arg2: float): void
public "update"(arg0: $LivingEntityPatch$Type<(any)>): void
public "off"(arg0: $LivingEntityPatch$Type<(any)>): void
public "getLayer"(arg0: $Layer$Priority$Type): $Layer
get "baseLayerPriority"(): $Layer$Priority
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Layer$BaseLayer$Type = ($Layer$BaseLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Layer$BaseLayer_ = $Layer$BaseLayer$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/entitypatch/boss/$BossPatch" {
import {$BossEvent, $BossEvent$Type} from "packages/net/minecraft/world/$BossEvent"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $BossPatch<T extends $Entity> {

 "recordBossEventOwner"(arg0: $ServerPlayer$Type): void
 "removeBossEventOwner"(arg0: $ServerPlayer$Type): void
 "processOwnerRecordPacket"(arg0: $FriendlyByteBuf$Type): void
 "getBossEvent"(): $BossEvent
 "getOriginal"(): T
 "cast"<P extends $LivingEntityPatch<(any)>>(): P
}

export namespace $BossPatch {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossPatch$Type<T> = ($BossPatch<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BossPatch_<T> = $BossPatch$Type<(T)>;
}}
declare module "packages/yesman/epicfight/skill/$Skill$ActivateType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Skill$ActivateType extends $Enum<($Skill$ActivateType)> {
static readonly "ONE_SHOT": $Skill$ActivateType
static readonly "DURATION": $Skill$ActivateType
static readonly "DURATION_INFINITE": $Skill$ActivateType
static readonly "TOGGLE": $Skill$ActivateType
static readonly "HELD": $Skill$ActivateType


public static "values"(): ($Skill$ActivateType)[]
public static "valueOf"(arg0: string): $Skill$ActivateType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Skill$ActivateType$Type = (("duration") | ("duration_infinite") | ("held") | ("one_shot") | ("toggle")) | ($Skill$ActivateType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Skill$ActivateType_ = $Skill$ActivateType$Type;
}}
declare module "packages/yesman/epicfight/client/gui/screen/$SkillBookScreen$AttributeIconList" {
import {$SkillBookScreen, $SkillBookScreen$Type} from "packages/yesman/epicfight/client/gui/screen/$SkillBookScreen"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$AbstractSelectionList$Entry, $AbstractSelectionList$Entry$Type} from "packages/net/minecraft/client/gui/components/$AbstractSelectionList$Entry"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ContainerObjectSelectionList, $ContainerObjectSelectionList$Type} from "packages/net/minecraft/client/gui/components/$ContainerObjectSelectionList"
import {$SkillBookScreen$TextureInfo, $SkillBookScreen$TextureInfo$Type} from "packages/yesman/epicfight/client/gui/screen/$SkillBookScreen$TextureInfo"
import {$SkillBookScreen$AttributeIconList$ProvidingAttributeEntry, $SkillBookScreen$AttributeIconList$ProvidingAttributeEntry$Type} from "packages/yesman/epicfight/client/gui/screen/$SkillBookScreen$AttributeIconList$ProvidingAttributeEntry"

export class $SkillBookScreen$AttributeIconList extends $ContainerObjectSelectionList<($SkillBookScreen$AttributeIconList$ProvidingAttributeEntry)> {
 "scrolling": boolean
 "hovered": E

constructor(arg0: $SkillBookScreen$Type, arg1: $Minecraft$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer)

public "add"(arg0: $Component$Type, arg1: $Component$Type, arg2: $SkillBookScreen$TextureInfo$Type): void
public "add"(arg0: $Attribute$Type, arg1: $AttributeModifier$Type, arg2: $SkillBookScreen$TextureInfo$Type): void
public "getRowLeft"(): integer
get "rowLeft"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillBookScreen$AttributeIconList$Type = ($SkillBookScreen$AttributeIconList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillBookScreen$AttributeIconList_ = $SkillBookScreen$AttributeIconList$Type;
}}
declare module "packages/yesman/epicfight/world/item/$WeaponItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WeaponItem extends $SwordItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public "isCorrectToolForDrops"(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponItem$Type = ($WeaponItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeaponItem_ = $WeaponItem$Type;
}}
declare module "packages/yesman/epicfight/api/physics/$SimulationObject$SimulationObjectBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SimulationObject$SimulationObjectBuilder {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimulationObject$SimulationObjectBuilder$Type = ($SimulationObject$SimulationObjectBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimulationObject$SimulationObjectBuilder_ = $SimulationObject$SimulationObjectBuilder$Type;
}}
declare module "packages/yesman/epicfight/api/client/animation/property/$JointMaskEntry$Builder" {
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$JointMask$JointMaskSet, $JointMask$JointMaskSet$Type} from "packages/yesman/epicfight/api/client/animation/property/$JointMask$JointMaskSet"
import {$JointMaskEntry, $JointMaskEntry$Type} from "packages/yesman/epicfight/api/client/animation/property/$JointMaskEntry"

export class $JointMaskEntry$Builder {

constructor()

public "mask"(arg0: $LivingMotion$Type, arg1: $JointMask$JointMaskSet$Type): $JointMaskEntry$Builder
public "create"(): $JointMaskEntry
public "defaultMask"(arg0: $JointMask$JointMaskSet$Type): $JointMaskEntry$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JointMaskEntry$Builder$Type = ($JointMaskEntry$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JointMaskEntry$Builder_ = $JointMaskEntry$Builder$Type;
}}
declare module "packages/yesman/epicfight/api/client/animation/property/$JointMask$BindModifier" {
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$Layer$Priority, $Layer$Priority$Type} from "packages/yesman/epicfight/api/client/animation/$Layer$Priority"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$JointMaskEntry, $JointMaskEntry$Type} from "packages/yesman/epicfight/api/client/animation/property/$JointMaskEntry"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $JointMask$BindModifier {

 "modify"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $Pose$Type, arg2: $Pose$Type, arg3: $LivingMotion$Type, arg4: $JointMaskEntry$Type, arg5: $Layer$Priority$Type, arg6: $Joint$Type, arg7: $Map$Type<($Layer$Priority$Type), ($Pair$Type<($AssetAccessor$Type<(any)>), ($Pose$Type)>)>): void

(arg0: $LivingEntityPatch$Type<(any)>, arg1: $Pose$Type, arg2: $Pose$Type, arg3: $LivingMotion$Type, arg4: $JointMaskEntry$Type, arg5: $Layer$Priority$Type, arg6: $Joint$Type, arg7: $Map$Type<($Layer$Priority$Type), ($Pair$Type<($AssetAccessor$Type<(any)>), ($Pose$Type)>)>): void
}

export namespace $JointMask$BindModifier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JointMask$BindModifier$Type = ($JointMask$BindModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JointMask$BindModifier_ = $JointMask$BindModifier$Type;
}}
declare module "packages/yesman/epicfight/client/gui/screen/overlay/$OverlayManager" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $OverlayManager {

constructor()

public "isGammaChanged"(): boolean
public "setModifiedGamma"(arg0: double): void
public "getModifiedGamma"(arg0: double): double
public "getOriginalGamma"(): double
public "blendingTexture"(arg0: string, arg1: $ResourceLocation$Type): void
public "flickering"(arg0: string, arg1: float, arg2: float): void
public "remove"(arg0: string): void
public "renderTick"(arg0: integer, arg1: integer): void
get "gammaChanged"(): boolean
set "modifiedGamma"(value: double)
get "originalGamma"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverlayManager$Type = ($OverlayManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OverlayManager_ = $OverlayManager$Type;
}}
declare module "packages/yesman/epicfight/network/common/$AnimatorControlPacket$Action" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AnimatorControlPacket$Action extends $Enum<($AnimatorControlPacket$Action)> {
static readonly "PLAY": $AnimatorControlPacket$Action
static readonly "PLAY_CLIENT": $AnimatorControlPacket$Action
static readonly "PLAY_INSTANTLY": $AnimatorControlPacket$Action
static readonly "RESERVE": $AnimatorControlPacket$Action
static readonly "STOP": $AnimatorControlPacket$Action
static readonly "SHOT": $AnimatorControlPacket$Action
static readonly "SOFT_PAUSE": $AnimatorControlPacket$Action
static readonly "HARD_PAUSE": $AnimatorControlPacket$Action


public static "values"(): ($AnimatorControlPacket$Action)[]
public static "valueOf"(arg0: string): $AnimatorControlPacket$Action
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatorControlPacket$Action$Type = (("play") | ("stop") | ("play_instantly") | ("reserve") | ("soft_pause") | ("play_client") | ("shot") | ("hard_pause")) | ($AnimatorControlPacket$Action);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatorControlPacket$Action_ = $AnimatorControlPacket$Action$Type;
}}
declare module "packages/yesman/epicfight/mixin/client/$MixinLivingEntityRenderer" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $MixinLivingEntityRenderer {

 "invokeIsBodyVisible"(arg0: $LivingEntity$Type): boolean
 "invokeGetRenderType"(arg0: $LivingEntity$Type, arg1: boolean, arg2: boolean, arg3: boolean): $RenderType
 "invokeGetBob"(arg0: $LivingEntity$Type, arg1: float): float
}

export namespace $MixinLivingEntityRenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinLivingEntityRenderer$Type = ($MixinLivingEntityRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinLivingEntityRenderer_ = $MixinLivingEntityRenderer$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$TakeDamageEvent$Attack" {
import {$TakeDamageEvent, $TakeDamageEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$TakeDamageEvent"
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$AttackResult$ResultType, $AttackResult$ResultType$Type} from "packages/yesman/epicfight/api/utils/$AttackResult$ResultType"

export class $TakeDamageEvent$Attack extends $TakeDamageEvent {

constructor(arg0: $ServerPlayerPatch$Type, arg1: $DamageSource$Type, arg2: float)

public "setParried"(arg0: boolean): void
public "isParried"(): boolean
public "getResult"(): $AttackResult$ResultType
public "setResult"(arg0: $AttackResult$ResultType$Type): void
set "parried"(value: boolean)
get "parried"(): boolean
get "result"(): $AttackResult$ResultType
set "result"(value: $AttackResult$ResultType$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TakeDamageEvent$Attack$Type = ($TakeDamageEvent$Attack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TakeDamageEvent$Attack_ = $TakeDamageEvent$Attack$Type;
}}
declare module "packages/yesman/epicfight/api/animation/$Joint$AccessTicket" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $Joint$AccessTicket implements $Iterator<($Joint)> {


public "hasNext"(): boolean
public "remove"(): void
public "forEachRemaining"(arg0: $Consumer$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Joint$AccessTicket$Type = ($Joint$AccessTicket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Joint$AccessTicket_ = $Joint$AccessTicket$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/entitypatch/$EntityPatch" {
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$SPEntityPairingPacket, $SPEntityPairingPacket$Type} from "packages/yesman/epicfight/network/server/$SPEntityPairingPacket"
import {$EntityJoinLevelEvent, $EntityJoinLevelEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityJoinLevelEvent"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityPatch<T extends $Entity> {

constructor()

public "onOldPosUpdate"(): void
public "getOriginal"(): T
public "onDeath"(arg0: $LivingDeathEvent$Type): void
public "onAddedToWorld"(): void
public "isLogicalClient"(): boolean
public "overrideRender"(): boolean
public "onStartTracking"(arg0: $ServerPlayer$Type): void
public "onStopTracking"(arg0: $ServerPlayer$Type): void
public "onConstructed"(arg0: T): void
public "onJoinWorld"(arg0: T, arg1: $EntityJoinLevelEvent$Type): void
public "getMatrix"(arg0: float): $OpenMatrix4f
public "getAngleTo"(arg0: $Entity$Type): double
public "getAngleToHorizontal"(arg0: $Entity$Type): double
public "getModelMatrix"(arg0: float): $OpenMatrix4f
public "fireEntityPairingEvent"(arg0: $SPEntityPairingPacket$Type): void
public "entityPairing"(arg0: $SPEntityPairingPacket$Type): void
public "isOutlineVisible"(arg0: $LocalPlayer$Type): boolean
public "isInitialized"(): boolean
get "original"(): T
get "logicalClient"(): boolean
get "initialized"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPatch$Type<T> = ($EntityPatch<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityPatch_<T> = $EntityPatch$Type<(T)>;
}}
declare module "packages/yesman/epicfight/client/renderer/patched/entity/$PatchedLivingEntityRenderer" {
import {$Armature, $Armature$Type} from "packages/yesman/epicfight/api/model/$Armature"
import {$LivingEntityRenderer, $LivingEntityRenderer$Type} from "packages/net/minecraft/client/renderer/entity/$LivingEntityRenderer"
import {$LayerRenderer, $LayerRenderer$Type} from "packages/yesman/epicfight/client/renderer/$LayerRenderer"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PatchedEntityRenderer, $PatchedEntityRenderer$Type} from "packages/yesman/epicfight/client/renderer/patched/entity/$PatchedEntityRenderer"
import {$EntityRendererProvider$Context, $EntityRendererProvider$Context$Type} from "packages/net/minecraft/client/renderer/entity/$EntityRendererProvider$Context"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$PatchedLayer, $PatchedLayer$Type} from "packages/yesman/epicfight/client/renderer/patched/layer/$PatchedLayer"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$SkinnedMesh, $SkinnedMesh$Type} from "packages/yesman/epicfight/api/client/model/$SkinnedMesh"

export class $PatchedLivingEntityRenderer<E extends $LivingEntity, T extends $LivingEntityPatch<(E)>, M extends $EntityModel<(E)>, R extends $LivingEntityRenderer<(E), (M)>, AM extends $SkinnedMesh> extends $PatchedEntityRenderer<(E), (T), (R), (AM)> implements $LayerRenderer<(E), (T), (M)> {

constructor(arg0: $EntityRendererProvider$Context$Type, arg1: $EntityType$Type<(any)>)

public "addPatchedLayerAlways"(arg0: $Class$Type<(any)>, arg1: $PatchedLayer$Type<(E), (T), (M), (any)>): void
public "addCustomLayer"(arg0: $PatchedLayer$Type<(E), (T), (M), (any)>): void
public "addPatchedLayer"(arg0: $Class$Type<(any)>, arg1: $PatchedLayer$Type<(E), (T), (M), (any)>): void
public "mulPoseStack"(arg0: $PoseStack$Type, arg1: $Armature$Type, arg2: E, arg3: T, arg4: float): void
public "initLayerLast"(arg0: $EntityRendererProvider$Context$Type, arg1: $EntityType$Type<(any)>): $PatchedLivingEntityRenderer<(E), (T), (M), (R), (AM)>
public "render"(arg0: E, arg1: T, arg2: R, arg3: $MultiBufferSource$Type, arg4: $PoseStack$Type, arg5: integer, arg6: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatchedLivingEntityRenderer$Type<E, T, M, R, AM> = ($PatchedLivingEntityRenderer<(E), (T), (M), (R), (AM)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatchedLivingEntityRenderer_<E, T, M, R, AM> = $PatchedLivingEntityRenderer$Type<(E), (T), (M), (R), (AM)>;
}}
declare module "packages/yesman/epicfight/api/physics/$SimulationProvider" {
import {$SimulationObject$SimulationObjectBuilder, $SimulationObject$SimulationObjectBuilder$Type} from "packages/yesman/epicfight/api/physics/$SimulationObject$SimulationObjectBuilder"
import {$SimulationObject, $SimulationObject$Type} from "packages/yesman/epicfight/api/physics/$SimulationObject"

export interface $SimulationProvider<OWN, OBJ extends $SimulationObject<(any), (any), (any)>, BUILDER extends $SimulationObject$SimulationObjectBuilder, P extends $SimulationProvider<(OWN), (OBJ), (BUILDER), (P)>> {

 "createSimulationData"(arg0: P, arg1: OWN, arg2: BUILDER): OBJ

(arg0: P, arg1: OWN, arg2: BUILDER): OBJ
}

export namespace $SimulationProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimulationProvider$Type<OWN, OBJ, BUILDER, P> = ($SimulationProvider<(OWN), (OBJ), (BUILDER), (P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimulationProvider_<OWN, OBJ, BUILDER, P> = $SimulationProvider$Type<(OWN), (OBJ), (BUILDER), (P)>;
}}
declare module "packages/yesman/epicfight/api/client/model/$SoftBodyTranslatable" {
import {$ClothSimulator$ClothObjectBuilder, $ClothSimulator$ClothObjectBuilder$Type} from "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulator$ClothObjectBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StaticMesh, $StaticMesh$Type} from "packages/yesman/epicfight/api/client/model/$StaticMesh"
import {$SoftBodyTranslatable$ClothSimulationInfo, $SoftBodyTranslatable$ClothSimulationInfo$Type} from "packages/yesman/epicfight/api/client/model/$SoftBodyTranslatable$ClothSimulationInfo"
import {$ClothSimulator$ClothObject, $ClothSimulator$ClothObject$Type} from "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulator$ClothObject"
import {$ClothSimulatable, $ClothSimulatable$Type} from "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulatable"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$SimulationProvider, $SimulationProvider$Type} from "packages/yesman/epicfight/api/physics/$SimulationProvider"

export interface $SoftBodyTranslatable extends $SimulationProvider<($ClothSimulatable), ($ClothSimulator$ClothObject), ($ClothSimulator$ClothObjectBuilder), ($SoftBodyTranslatable)> {

 "getSoftBodySimulationInfo"(): $Map<(string), ($SoftBodyTranslatable$ClothSimulationInfo)>
 "getOriginalMesh"(): $StaticMesh<(any)>
 "putSoftBodySimulationInfo"(arg0: $Map$Type<(string), ($SoftBodyTranslatable$ClothSimulationInfo$Type)>): void
 "canStartSoftBodySimulation"(): boolean
 "createSimulationData"(arg0: $SoftBodyTranslatable$Type, arg1: $ClothSimulatable$Type, arg2: $ClothSimulator$ClothObjectBuilder$Type): $ClothSimulator$ClothObject
}

export namespace $SoftBodyTranslatable {
const TRACKING_SIMULATION_SUBJECTS: $List<($ClothSimulatable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoftBodyTranslatable$Type = ($SoftBodyTranslatable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoftBodyTranslatable_ = $SoftBodyTranslatable$Type;
}}
declare module "packages/yesman/epicfight/network/$EntityPairingPacketType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ExtendableEnumManager, $ExtendableEnumManager$Type} from "packages/yesman/epicfight/api/utils/$ExtendableEnumManager"
import {$ExtendableEnum, $ExtendableEnum$Type} from "packages/yesman/epicfight/api/utils/$ExtendableEnum"

export interface $EntityPairingPacketType extends $ExtendableEnum {

 "toEnum"<T extends $Enum<(T)>>(arg0: $Class$Type<(T)>): T
 "is"<T extends $Enum<(T)>>(arg0: $Class$Type<(T)>): boolean
 "universalOrdinal"(): integer

(arg0: $Class$Type<(T)>): T
}

export namespace $EntityPairingPacketType {
const ENUM_MANAGER: $ExtendableEnumManager<($EntityPairingPacketType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPairingPacketType$Type = ($EntityPairingPacketType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityPairingPacketType_ = $EntityPairingPacketType$Type;
}}
declare module "packages/yesman/epicfight/api/animation/$AnimationManager$AnimationAccessor" {
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $AnimationManager$AnimationAccessor<A extends $DynamicAnimation> extends $AssetAccessor<(A)> {

 "idBetween"(arg0: $AnimationManager$AnimationAccessor$Type<(any)>, arg1: $AnimationManager$AnimationAccessor$Type<(any)>): boolean
 "id"(): integer
 "inRegistry"(): boolean
 "doOrThrow"(arg0: $Consumer$Type<(A)>): void
 "checkType"(arg0: $Class$Type<(any)>): boolean
 "ifPresent"(arg0: $Consumer$Type<(A)>): void
 "ifPresentOrElse"(arg0: $Consumer$Type<(A)>, arg1: $Runnable$Type): void
 "get"(): A
 "isEmpty"(): boolean
 "isPresent"(): boolean
 "orElse"(arg0: A): A
 "registryName"(): $ResourceLocation
 "checkNotNull"(): void
}

export namespace $AnimationManager$AnimationAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationManager$AnimationAccessor$Type<A> = ($AnimationManager$AnimationAccessor<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationManager$AnimationAccessor_<A> = $AnimationManager$AnimationAccessor$Type<(A)>;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$PlayerKilledEvent" {
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$AbstractPlayerEvent, $AbstractPlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AbstractPlayerEvent"

export class $PlayerKilledEvent extends $AbstractPlayerEvent<($ServerPlayerPatch)> {

constructor(arg0: $ServerPlayerPatch$Type, arg1: $LivingEntity$Type, arg2: $DamageSource$Type)

public "getDamageSource"(): $DamageSource
public "getKilledEntity"(): $LivingEntity
get "damageSource"(): $DamageSource
get "killedEntity"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerKilledEvent$Type = ($PlayerKilledEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerKilledEvent_ = $PlayerKilledEvent$Type;
}}
declare module "packages/yesman/epicfight/api/animation/types/$EntityState" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ProjectileImpactEvent, $ProjectileImpactEvent$Type} from "packages/net/minecraftforge/event/entity/$ProjectileImpactEvent"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$EntityState$StateFactor, $EntityState$StateFactor$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState$StateFactor"
import {$TypeFlexibleHashMap, $TypeFlexibleHashMap$Type} from "packages/yesman/epicfight/api/utils/datastruct/$TypeFlexibleHashMap"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$AttackResult$ResultType, $AttackResult$ResultType$Type} from "packages/yesman/epicfight/api/utils/$AttackResult$ResultType"

export class $EntityState {
static readonly "DEFAULT_STATE": $EntityState
static readonly "TURNING_LOCKED": $EntityState$StateFactor<(boolean)>
static readonly "MOVEMENT_LOCKED": $EntityState$StateFactor<(boolean)>
static readonly "ATTACKING": $EntityState$StateFactor<(boolean)>
static readonly "CAN_BASIC_ATTACK": $EntityState$StateFactor<(boolean)>
static readonly "CAN_SKILL_EXECUTION": $EntityState$StateFactor<(boolean)>
static readonly "CAN_USE_ITEM": $EntityState$StateFactor<(boolean)>
static readonly "CAN_SWITCH_HAND_ITEM": $EntityState$StateFactor<(boolean)>
static readonly "INACTION": $EntityState$StateFactor<(boolean)>
static readonly "KNOCKDOWN": $EntityState$StateFactor<(boolean)>
static readonly "LOCKON_ROTATE": $EntityState$StateFactor<(boolean)>
static readonly "UPDATE_LIVING_MOTION": $EntityState$StateFactor<(boolean)>
static readonly "HURT_LEVEL": $EntityState$StateFactor<(integer)>
static readonly "PHASE_LEVEL": $EntityState$StateFactor<(integer)>
static readonly "ATTACK_RESULT": $EntityState$StateFactor<($Function<($DamageSource), ($AttackResult$ResultType)>)>
static readonly "PROJECTILE_IMPACT_RESULT": $EntityState$StateFactor<($Consumer<($ProjectileImpactEvent)>)>

constructor(arg0: $TypeFlexibleHashMap$Type<($EntityState$StateFactor$Type<(any)>)>)

public "movementLocked"(): boolean
public "hurtLevel"(): integer
public "lockonRotate"(): boolean
public "getStateMap"(): $TypeFlexibleHashMap<($EntityState$StateFactor<(any)>)>
public "setProjectileImpactResult"(arg0: $ProjectileImpactEvent$Type): void
public "knockDown"(): boolean
public "canSwitchHoldingItem"(): boolean
public "attacking"(): boolean
public "updateLivingMotion"(): boolean
public "canBasicAttack"(): boolean
public "canUseItem"(): boolean
public "turningLocked"(): boolean
public "canUseSkill"(): boolean
public "inaction"(): boolean
public "attackResult"(arg0: $DamageSource$Type): $AttackResult$ResultType
public "hurt"(): boolean
public "setState"<T>(arg0: $EntityState$StateFactor$Type<(T)>, arg1: T): void
public "toString"(): string
public "getState"<T>(arg0: $EntityState$StateFactor$Type<(T)>): T
public "getLevel"(): integer
get "stateMap"(): $TypeFlexibleHashMap<($EntityState$StateFactor<(any)>)>
set "projectileImpactResult"(value: $ProjectileImpactEvent$Type)
get "level"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityState$Type = ($EntityState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityState_ = $EntityState$Type;
}}
declare module "packages/yesman/epicfight/client/events/engine/$RenderEngine" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$HitResult$Type, $HitResult$Type$Type} from "packages/net/minecraft/world/phys/$HitResult$Type"
import {$ViewportEvent$ComputeCameraAngles, $ViewportEvent$ComputeCameraAngles$Type} from "packages/net/minecraftforge/client/event/$ViewportEvent$ComputeCameraAngles"
import {$BattleModeGui, $BattleModeGui$Type} from "packages/yesman/epicfight/client/gui/$BattleModeGui"
import {$OverlayManager, $OverlayManager$Type} from "packages/yesman/epicfight/client/gui/screen/overlay/$OverlayManager"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$FirstPersonRenderer, $FirstPersonRenderer$Type} from "packages/yesman/epicfight/client/renderer/$FirstPersonRenderer"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$EntityRenderer, $EntityRenderer$Type} from "packages/net/minecraft/client/renderer/entity/$EntityRenderer"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$FakeBlockRenderer, $FakeBlockRenderer$Type} from "packages/yesman/epicfight/client/renderer/$FakeBlockRenderer"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$EntityHitResult, $EntityHitResult$Type} from "packages/net/minecraft/world/phys/$EntityHitResult"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$VersionNotifier, $VersionNotifier$Type} from "packages/yesman/epicfight/client/gui/$VersionNotifier"
import {$PatchedEntityRenderer, $PatchedEntityRenderer$Type} from "packages/yesman/epicfight/client/renderer/patched/entity/$PatchedEntityRenderer"
import {$EntityRendererProvider$Context, $EntityRendererProvider$Context$Type} from "packages/net/minecraft/client/renderer/entity/$EntityRendererProvider$Context"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$CameraType, $CameraType$Type} from "packages/net/minecraft/client/$CameraType"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$RenderItemBase, $RenderItemBase$Type} from "packages/yesman/epicfight/client/renderer/patched/item/$RenderItemBase"
import {$BossPatch, $BossPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/boss/$BossPatch"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RenderEngine {
readonly "battleModeUI": $BattleModeGui
readonly "versionNotifier": $VersionNotifier
readonly "minecraft": $Minecraft

constructor()

/**
 * 
 * @deprecated
 */
public "zoomOut"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "zoomIn"(): void
public static "hitResultEquals"(arg0: $HitResult$Type, arg1: $HitResult$Type$Type): boolean
public "hasRendererFor"(arg0: $Entity$Type): boolean
public "renderEntityArmatureModel"(arg0: $LivingEntity$Type, arg1: $LivingEntityPatch$Type<(any)>, arg2: $EntityRenderer$Type<(any)>, arg3: $MultiBufferSource$Type, arg4: $PoseStack$Type, arg5: integer, arg6: float): void
public "reloadFakeBlockRenderer"(arg0: $FakeBlockRenderer$Type): void
public "shouldRenderVanillaModel"(): boolean
public "freeUnusedSources"(): void
public "removeBossEventOwner"(arg0: $UUID$Type, arg1: $BossPatch$Type<(any)>): void
public "getRendererEntries"(): $Set<($ResourceLocation)>
public "setModelInitializerTimer"(arg0: integer): void
public "getOverlayManager"(): $OverlayManager
public "getFirstPersonRenderer"(): $FirstPersonRenderer
public "initHUD"(): void
/**
 * 
 * @deprecated
 */
public "correctCamera"(arg0: $ViewportEvent$ComputeCameraAngles$Type, arg1: float): void
/**
 * 
 * @deprecated
 */
public "setRangedWeaponThirdPerson"(arg0: $ViewportEvent$ComputeCameraAngles$Type, arg1: $CameraType$Type, arg2: double): void
public "reloadEntityRenderers"(arg0: $EntityRendererProvider$Context$Type): void
public "resetRenderers"(): void
public "reloadItemRenderers"(arg0: $Map$Type<($ResourceLocation$Type), ($JsonElement$Type)>): void
public "registerCustomEntityRenderer"(arg0: $EntityType$Type<(any)>, arg1: string, arg2: $CompoundTag$Type): void
public "addBossEventOwner"(arg0: $UUID$Type, arg1: $BossPatch$Type<(any)>): void
public "getItemRenderer"(arg0: $ItemStack$Type): $RenderItemBase
public "getEntityRenderer"(arg0: $Entity$Type): $PatchedEntityRenderer<(any), (any), (any), (any)>
public "getEntityRenderer"(arg0: $EntityType$Type<(any)>): $PatchedEntityRenderer<(any), (any), (any), (any)>
public "downSlideSkillUI"(): void
public "upSlideSkillUI"(): void
public static "asEntityHitResult"(arg0: $HitResult$Type): $EntityHitResult
public static "asBlockHitResult"(arg0: $HitResult$Type): $BlockHitResult
public "clear"(): void
/**
 * 
 * @deprecated
 */
public "initialize"(): void
public static "hitResultNotEquals"(arg0: $HitResult$Type, arg1: $HitResult$Type$Type): boolean
get "rendererEntries"(): $Set<($ResourceLocation)>
set "modelInitializerTimer"(value: integer)
get "overlayManager"(): $OverlayManager
get "firstPersonRenderer"(): $FirstPersonRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderEngine$Type = ($RenderEngine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderEngine_ = $RenderEngine$Type;
}}
declare module "packages/yesman/epicfight/world/item/$LongswordItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LongswordItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: $Tier$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongswordItem$Type = ($LongswordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongswordItem_ = $LongswordItem$Type;
}}
declare module "packages/yesman/epicfight/skill/$Skill" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CapabilityItem, $CapabilityItem$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem"
import {$BattleModeGui, $BattleModeGui$Type} from "packages/yesman/epicfight/client/gui/$BattleModeGui"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$SkillCategory, $SkillCategory$Type} from "packages/yesman/epicfight/skill/$SkillCategory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Skill$Resource, $Skill$Resource$Type} from "packages/yesman/epicfight/skill/$Skill$Resource"
import {$EpicFightNetworkManager$PayloadBundleBuilder, $EpicFightNetworkManager$PayloadBundleBuilder$Type} from "packages/yesman/epicfight/network/$EpicFightNetworkManager$PayloadBundleBuilder"
import {$ControlEngine, $ControlEngine$Type} from "packages/yesman/epicfight/client/events/engine/$ControlEngine"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$SkillContainer, $SkillContainer$Type} from "packages/yesman/epicfight/skill/$SkillContainer"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$Skill$ActivateType, $Skill$ActivateType$Type} from "packages/yesman/epicfight/skill/$Skill$ActivateType"
import {$LocalPlayerPatch, $LocalPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch"
import {$SkillBookScreen$AttributeIconList, $SkillBookScreen$AttributeIconList$Type} from "packages/yesman/epicfight/client/gui/screen/$SkillBookScreen$AttributeIconList"
import {$SkillCastEvent, $SkillCastEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$SkillCastEvent"
import {$SkillBuilder, $SkillBuilder$Type} from "packages/yesman/epicfight/skill/$SkillBuilder"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$WeaponCategory, $WeaponCategory$Type} from "packages/yesman/epicfight/world/capabilities/item/$WeaponCategory"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $Skill {
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.Skill
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.SkillTag

constructor(arg0: $SkillBuilder$Type<(any)>)

public "isDisabled"(arg0: $SkillContainer$Type): boolean
public "getTranslationKey"(): string
public "onTracked"(arg0: $SkillContainer$Type, arg1: $EpicFightNetworkManager$PayloadBundleBuilder$Type): void
public "onInitiate"(arg0: $SkillContainer$Type): void
public "onInitiateClient"(arg0: $SkillContainer$Type): void
public "onRemoveClient"(arg0: $SkillContainer$Type): void
public "onRemoved"(arg0: $SkillContainer$Type): void
public "onReset"(arg0: $SkillContainer$Type): void
public "setConsumption"(arg0: $SkillContainer$Type, arg1: float): void
public "updateContainer"(arg0: $SkillContainer$Type): void
public "getCooldownRegenPerSecond"(arg0: $PlayerPatch$Type<(any)>): float
public "isActivated"(arg0: $SkillContainer$Type): boolean
public "setConsumptionSynchronize"(arg0: $SkillContainer$Type, arg1: float): void
public static "setSkillConsumptionSynchronize"(arg0: $SkillContainer$Type, arg1: float): void
public "setMaxDurationSynchronize"(arg0: $SkillContainer$Type, arg1: integer): void
public static "setSkillMaxDurationSynchronize"(arg0: $SkillContainer$Type, arg1: integer): void
public "setDurationSynchronize"(arg0: $SkillContainer$Type, arg1: integer): void
public static "setSkillDurationSynchronize"(arg0: $SkillContainer$Type, arg1: integer): void
public "setStackSynchronize"(arg0: $SkillContainer$Type, arg1: integer): void
public static "setSkillStackSynchronize"(arg0: $SkillContainer$Type, arg1: integer): void
public "setMaxResourceSynchronize"(arg0: $SkillContainer$Type, arg1: float): void
public static "setSkillMaxResourceSynchronize"(arg0: $SkillContainer$Type, arg1: float): void
public "getMaxDuration"(): integer
public "getConsumption"(): float
public "getModfierEntry"(): $Set<($Map$Entry<($Attribute), ($AttributeModifier)>)>
public "resourcePredicate"(arg0: $PlayerPatch$Type<(any)>, arg1: $SkillCastEvent$Type): boolean
public "shouldDeactivateAutomatically"(arg0: $PlayerPatch$Type<(any)>): boolean
public "getActivateType"(): $Skill$ActivateType
public "getPriorSkill"(): $Skill
public "registerPropertiesToAnimation"(): $Skill
public "onScreen"(arg0: $LocalPlayerPatch$Type, arg1: float, arg2: float): void
public "getTooltipOnItem"(arg0: $ItemStack$Type, arg1: $CapabilityItem$Type, arg2: $PlayerPatch$Type<(any)>): $List<($Component)>
public "getTooltipArgsOfScreen"(arg0: $List$Type<(any)>): $List<(any)>
public "drawOnGui"(arg0: $BattleModeGui$Type, arg1: $SkillContainer$Type, arg2: $GuiGraphics$Type, arg3: float, arg4: float, arg5: float): void
public "getSkillTexture"(): $ResourceLocation
public "shouldDraw"(arg0: $SkillContainer$Type): boolean
public "getAvailableWeaponCategories"(): $Set<($WeaponCategory)>
public "getCustomConsumptionTooltips"(arg0: $SkillBookScreen$AttributeIconList$Type): boolean
public "getDefaultConsumptionAmount"(arg0: $PlayerPatch$Type<(any)>): float
public "getResourceType"(): $Skill$Resource
public static "createIdentityBuilder"(): $SkillBuilder<($Skill)>
public static "createMoverBuilder"(): $SkillBuilder<($Skill)>
public "isExecutableState"(arg0: $PlayerPatch$Type<(any)>): boolean
public "checkExecuteCondition"(arg0: $SkillContainer$Type): boolean
public "validationFeedback"(arg0: $SkillContainer$Type): void
public "getExecutionPacket"(arg0: $SkillContainer$Type, arg1: $FriendlyByteBuf$Type): any
public "gatherArguments"(arg0: $SkillContainer$Type, arg1: $ControlEngine$Type): $FriendlyByteBuf
public "executeOnServer"(arg0: $SkillContainer$Type, arg1: $FriendlyByteBuf$Type): void
public "cancelOnServer"(arg0: $SkillContainer$Type, arg1: $FriendlyByteBuf$Type): void
public "executeOnClient"(arg0: $SkillContainer$Type, arg1: $FriendlyByteBuf$Type): void
public "cancelOnClient"(arg0: $SkillContainer$Type, arg1: $FriendlyByteBuf$Type): void
public "getRegistryName"(): $ResourceLocation
public "setParams"(arg0: $CompoundTag$Type): void
public "getMaxStack"(): integer
public "canExecute"(arg0: $SkillContainer$Type): boolean
public "getDisplayName"(): $Component
public "toString"(): string
public "getCategory"(): $SkillCategory
public static "createBuilder"(): $SkillBuilder<($Skill)>
public "getCreativeTab"(): $CreativeModeTab
get "translationKey"(): string
get "maxDuration"(): integer
get "consumption"(): float
get "modfierEntry"(): $Set<($Map$Entry<($Attribute), ($AttributeModifier)>)>
get "activateType"(): $Skill$ActivateType
get "priorSkill"(): $Skill
get "skillTexture"(): $ResourceLocation
get "availableWeaponCategories"(): $Set<($WeaponCategory)>
get "resourceType"(): $Skill$Resource
get "registryName"(): $ResourceLocation
set "params"(value: $CompoundTag$Type)
get "maxStack"(): integer
get "displayName"(): $Component
get "category"(): $SkillCategory
get "creativeTab"(): $CreativeModeTab
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Skill$Type = ($Skill);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Skill_ = $Skill$Type;
}}
declare module "packages/yesman/epicfight/compat/kubejs/$EFUtilsJS" {
import {$SkillCastEvent, $SkillCastEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$SkillCastEvent"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"

export class $EFUtilsJS {

constructor()

/**
 * Requests the server to execute a skill. Called from the client.
 */
public static "requestExecuteSkill"(arg0: $Skill$Type): $SkillCastEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EFUtilsJS$Type = ($EFUtilsJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EFUtilsJS_ = $EFUtilsJS$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$TargetIndicatorCheckEvent" {
import {$LocalPlayerPatch, $LocalPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$AbstractPlayerEvent, $AbstractPlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AbstractPlayerEvent"

export class $TargetIndicatorCheckEvent extends $AbstractPlayerEvent<($LocalPlayerPatch)> {

constructor(arg0: $LocalPlayerPatch$Type, arg1: $LivingEntityPatch$Type<(any)>)

public "getTarget"(): $LivingEntityPatch<(any)>
get "target"(): $LivingEntityPatch<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TargetIndicatorCheckEvent$Type = ($TargetIndicatorCheckEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TargetIndicatorCheckEvent_ = $TargetIndicatorCheckEvent$Type;
}}
declare module "packages/yesman/epicfight/api/client/animation/$Layer$LayerType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Layer$LayerType extends $Enum<($Layer$LayerType)> {
static readonly "BASE_LAYER": $Layer$LayerType
static readonly "COMPOSITE_LAYER": $Layer$LayerType


public static "values"(): ($Layer$LayerType)[]
public static "valueOf"(arg0: string): $Layer$LayerType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Layer$LayerType$Type = (("composite_layer") | ("base_layer")) | ($Layer$LayerType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Layer$LayerType_ = $Layer$LayerType$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$ComboCounterHandleEvent" {
import {$ComboCounterHandleEvent$Causal, $ComboCounterHandleEvent$Causal$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$ComboCounterHandleEvent$Causal"
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$AnimationManager$AnimationAccessor, $AnimationManager$AnimationAccessor$Type} from "packages/yesman/epicfight/api/animation/$AnimationManager$AnimationAccessor"
import {$AbstractPlayerEvent, $AbstractPlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AbstractPlayerEvent"

export class $ComboCounterHandleEvent extends $AbstractPlayerEvent<($ServerPlayerPatch)> {

constructor(arg0: $ComboCounterHandleEvent$Causal$Type, arg1: $ServerPlayerPatch$Type, arg2: $AnimationManager$AnimationAccessor$Type<(any)>, arg3: integer, arg4: integer)

public "getPrevValue"(): integer
public "setNextValue"(arg0: integer): void
public "getCausal"(): $ComboCounterHandleEvent$Causal
public "getAnimation"(): $AnimationManager$AnimationAccessor<(any)>
public "getNextValue"(): integer
get "prevValue"(): integer
set "nextValue"(value: integer)
get "causal"(): $ComboCounterHandleEvent$Causal
get "animation"(): $AnimationManager$AnimationAccessor<(any)>
get "nextValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComboCounterHandleEvent$Type = ($ComboCounterHandleEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComboCounterHandleEvent_ = $ComboCounterHandleEvent$Type;
}}
declare module "packages/yesman/epicfight/client/renderer/$LayerRenderer" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$PatchedLayer, $PatchedLayer$Type} from "packages/yesman/epicfight/client/renderer/patched/layer/$PatchedLayer"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $LayerRenderer<E extends $LivingEntity, T extends $LivingEntityPatch<(E)>, M extends $EntityModel<(E)>> {

 "addCustomLayer"(arg0: $PatchedLayer$Type<(E), (T), (M), (any)>): void
 "addPatchedLayer"(arg0: $Class$Type<(any)>, arg1: $PatchedLayer$Type<(E), (T), (M), (any)>): void
}

export namespace $LayerRenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayerRenderer$Type<E, T, M> = ($LayerRenderer<(E), (T), (M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LayerRenderer_<E, T, M> = $LayerRenderer$Type<(E), (T), (M)>;
}}
declare module "packages/yesman/epicfight/world/capabilities/item/$WeaponCategory" {
import {$ExtendableEnumManager, $ExtendableEnumManager$Type} from "packages/yesman/epicfight/api/utils/$ExtendableEnumManager"
import {$ExtendableEnum, $ExtendableEnum$Type} from "packages/yesman/epicfight/api/utils/$ExtendableEnum"

export interface $WeaponCategory extends $ExtendableEnum {

 "universalOrdinal"(): integer

(): integer
}

export namespace $WeaponCategory {
const ENUM_MANAGER: $ExtendableEnumManager<($WeaponCategory)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponCategory$Type = ($WeaponCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeaponCategory_ = $WeaponCategory$Type;
}}
declare module "packages/yesman/epicfight/network/common/$AnimatorControlPacket" {
import {$Layer$Priority, $Layer$Priority$Type} from "packages/yesman/epicfight/api/client/animation/$Layer$Priority"
import {$AnimatorControlPacket$Action, $AnimatorControlPacket$Action$Type} from "packages/yesman/epicfight/network/common/$AnimatorControlPacket$Action"
import {$AnimatorControlPacket$Priority, $AnimatorControlPacket$Priority$Type} from "packages/yesman/epicfight/network/common/$AnimatorControlPacket$Priority"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$SPAnimatorControl, $SPAnimatorControl$Type} from "packages/yesman/epicfight/network/server/$SPAnimatorControl"

export class $AnimatorControlPacket {

constructor(arg0: $AnimatorControlPacket$Action$Type, arg1: integer, arg2: float, arg3: boolean)

public "process"<T extends $SPAnimatorControl>(arg0: $LivingEntityPatch$Type<(any)>): void
public static "getPriority"(arg0: $AnimatorControlPacket$Priority$Type): $Layer$Priority
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatorControlPacket$Type = ($AnimatorControlPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatorControlPacket_ = $AnimatorControlPacket$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch" {
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$PlayerEventListener, $PlayerEventListener$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEventListener"
import {$CapabilityItem, $CapabilityItem$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EpicFightDamageSource, $EpicFightDamageSource$Type} from "packages/yesman/epicfight/world/damagesource/$EpicFightDamageSource"
import {$HoldableSkill, $HoldableSkill$Type} from "packages/yesman/epicfight/skill/modules/$HoldableSkill"
import {$Faction, $Faction$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$Faction"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$CapabilitySkill, $CapabilitySkill$Type} from "packages/yesman/epicfight/world/capabilities/skill/$CapabilitySkill"
import {$LivingEvent$LivingTickEvent, $LivingEvent$LivingTickEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent$LivingTickEvent"
import {$AttackResult, $AttackResult$Type} from "packages/yesman/epicfight/api/utils/$AttackResult"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Skill$Resource, $Skill$Resource$Type} from "packages/yesman/epicfight/skill/$Skill$Resource"
import {$SkillContainer, $SkillContainer$Type} from "packages/yesman/epicfight/skill/$SkillContainer"
import {$ActionAnimation, $ActionAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$ActionAnimation"
import {$LivingFallEvent, $LivingFallEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingFallEvent"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$SkillSlot, $SkillSlot$Type} from "packages/yesman/epicfight/skill/$SkillSlot"
import {$PlayerPatch$PlayerMode, $PlayerPatch$PlayerMode$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch$PlayerMode"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$AnimationManager$AnimationAccessor, $AnimationManager$AnimationAccessor$Type} from "packages/yesman/epicfight/api/animation/$AnimationManager$AnimationAccessor"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityJoinLevelEvent, $EntityJoinLevelEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityJoinLevelEvent"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$Animator, $Animator$Type} from "packages/yesman/epicfight/api/animation/$Animator"

export class $PlayerPatch<T extends $Player> extends $LivingEntityPatch<(T)> {
static "STAMINA": $EntityDataAccessor<(float)>
 "dx": double
 "dz": double
static readonly "WEIGHT_CORRECTION": double
 "currentLivingMotion": $LivingMotion
 "currentCompositeMotion": $LivingMotion

constructor()

public "getSkillContainerFor"(arg0: $Skill$Type): $Optional<($SkillContainer)>
public "getStamina"(): float
public "setStamina"(arg0: float): void
public "getPlayerMode"(): $PlayerPatch$PlayerMode
public "isEpicFightMode"(): boolean
public "resetActionTick"(): void
public "getTickSinceLastAction"(): integer
public "setStaminaRegenAwaitTicks"(arg0: integer): void
public "getStaminaRegenAwaitTicks"(): integer
public "startSkillHolding"(arg0: $HoldableSkill$Type): boolean
public "isHoldingAny"(): boolean
public "isHoldingSkill"(arg0: $Skill$Type): boolean
public "getLastChargingTick"(): integer
public "setChargingAmount"(arg0: integer): void
public "getHoldingSkill"(): $HoldableSkill
public "getChargingAmount"(): integer
public "getSkillChargingTicks"(): integer
public "getSkillChargingTicks"(arg0: float): float
public "getAccumulatedChargeAmount"(): integer
public "isInAir"(): boolean
public "openSkillBook"(arg0: $ItemStack$Type, arg1: $InteractionHand$Type): void
public "toggleMode"(): void
public "getSkillCapability"(): $CapabilitySkill
public "copySkillsFrom"(arg0: $PlayerPatch$Type<(any)>, arg1: boolean): void
public "setModelYRot"(arg0: float, arg1: boolean): void
public "disableModelYRot"(arg0: boolean): void
public "getMaxStamina"(): float
public "toVanillaMode"(arg0: boolean): void
public "toEpicFightMode"(arg0: boolean): void
public "getModifiedAttackSpeed"(arg0: $CapabilityItem$Type, arg1: float): float
public "getWeaponAttribute"(arg0: $Attribute$Type, arg1: $ItemStack$Type): double
public "resetHolding"(): void
public "getModifiedStaminaConsume"(arg0: float): float
public "hasStamina"(arg0: float): boolean
public "clampMaxAttributes"(): void
public "consumeForSkill"(arg0: $Skill$Type, arg1: $Skill$Resource$Type, arg2: float): boolean
public "consumeForSkill"(arg0: $Skill$Type, arg1: $Skill$Resource$Type): boolean
public "consumeForSkill"(arg0: $Skill$Type, arg1: $Skill$Resource$Type, arg2: float, arg3: boolean, arg4: $FriendlyByteBuf$Type): boolean
public "consumeForSkill"(arg0: $Skill$Type, arg1: $Skill$Resource$Type, arg2: $FriendlyByteBuf$Type): boolean
public "getAttackSpeed"(arg0: $InteractionHand$Type): float
public "onFall"(arg0: $LivingFallEvent$Type): void
public "checkYTurn"(arg0: double): double
public "checkXTurn"(arg0: double): double
public "tick"(arg0: $LivingEvent$LivingTickEvent$Type): void
public static "createSyncedEntityData"(arg0: $LivingEntity$Type): void
public static "initPlayerDataAccessor"(): void
public "attack"(arg0: $EpicFightDamageSource$Type, arg1: $Entity$Type, arg2: $InteractionHand$Type): $AttackResult
public "initAnimator"(arg0: $Animator$Type): void
public "serverTick"(arg0: $LivingEvent$LivingTickEvent$Type): void
public "onJoinWorld"(arg0: T, arg1: $EntityJoinLevelEvent$Type): void
public "getModelMatrix"(arg0: float): $OpenMatrix4f
public "cancelItemUse"(): void
public "getDamageSource"(arg0: $AnimationManager$AnimationAccessor$Type<(any)>, arg1: $InteractionHand$Type): $EpicFightDamageSource
public "getModifiedBaseDamage"(arg0: float): float
public "getYRotLimit"(): float
public "shouldMoveOnCurrentSide"(arg0: $ActionAnimation$Type): boolean
public "getXOld"(): double
public "getYOld"(): double
public "getZOld"(): double
public "getYRot"(): float
public "getYRotO"(): float
public "setYRot"(arg0: float): void
public "setYRotO"(arg0: float): void
public "getFaction"(): $Faction
public "getEventListener"(): $PlayerEventListener
public "toMode"(arg0: $PlayerPatch$PlayerMode$Type, arg1: boolean): void
public "isVanillaMode"(): boolean
public "getSkill"(arg0: $Skill$Type): $SkillContainer
public "getSkill"(arg0: integer): $SkillContainer
public "getSkill"(arg0: $SkillSlot$Type): $SkillContainer
get "stamina"(): float
set "stamina"(value: float)
get "playerMode"(): $PlayerPatch$PlayerMode
get "epicFightMode"(): boolean
get "tickSinceLastAction"(): integer
set "staminaRegenAwaitTicks"(value: integer)
get "staminaRegenAwaitTicks"(): integer
get "holdingAny"(): boolean
get "lastChargingTick"(): integer
set "chargingAmount"(value: integer)
get "holdingSkill"(): $HoldableSkill
get "chargingAmount"(): integer
get "skillChargingTicks"(): integer
get "accumulatedChargeAmount"(): integer
get "inAir"(): boolean
get "skillCapability"(): $CapabilitySkill
get "maxStamina"(): float
get "yRotLimit"(): float
get "xOld"(): double
get "yOld"(): double
get "zOld"(): double
get "yRot"(): float
get "yRotO"(): float
set "yRot"(value: float)
set "yRotO"(value: float)
get "faction"(): $Faction
get "eventListener"(): $PlayerEventListener
get "vanillaMode"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerPatch$Type<T> = ($PlayerPatch<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerPatch_<T> = $PlayerPatch$Type<(T)>;
}}
declare module "packages/yesman/epicfight/skill/$SkillCategories" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SkillCategory, $SkillCategory$Type} from "packages/yesman/epicfight/skill/$SkillCategory"

export class $SkillCategories extends $Enum<($SkillCategories)> implements $SkillCategory {
static readonly "BASIC_ATTACK": $SkillCategories
static readonly "DODGE": $SkillCategories
static readonly "PASSIVE": $SkillCategories
static readonly "WEAPON_PASSIVE": $SkillCategories
static readonly "WEAPON_INNATE": $SkillCategories
static readonly "GUARD": $SkillCategories
static readonly "KNOCKDOWN_WAKEUP": $SkillCategories
static readonly "MOVER": $SkillCategories
static readonly "IDENTITY": $SkillCategories


public "shouldSave"(): boolean
public "shouldSynchronize"(): boolean
public "bookIcon"(): $ResourceLocation
public "universalOrdinal"(): integer
public static "values"(): ($SkillCategories)[]
public static "valueOf"(arg0: string): $SkillCategories
public "learnable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillCategories$Type = (("basic_attack") | ("dodge") | ("weapon_passive") | ("knockdown_wakeup") | ("mover") | ("identity") | ("guard") | ("passive") | ("weapon_innate")) | ($SkillCategories);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillCategories_ = $SkillCategories$Type;
}}
declare module "packages/yesman/epicfight/api/client/model/$SkinnedMesh$SkinnedMeshPart" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Mesh$RenderProperties, $Mesh$RenderProperties$Type} from "packages/yesman/epicfight/api/client/model/$Mesh$RenderProperties"
import {$ComputeShaderSetup$MeshPartBuffer, $ComputeShaderSetup$MeshPartBuffer$Type} from "packages/yesman/epicfight/client/renderer/shader/compute/$ComputeShaderSetup$MeshPartBuffer"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Mesh$DrawingFunction, $Mesh$DrawingFunction$Type} from "packages/yesman/epicfight/api/client/model/$Mesh$DrawingFunction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$MeshPart, $MeshPart$Type} from "packages/yesman/epicfight/api/client/model/$MeshPart"
import {$SkinnedMesh, $SkinnedMesh$Type} from "packages/yesman/epicfight/api/client/model/$SkinnedMesh"

export class $SkinnedMesh$SkinnedMeshPart extends $MeshPart {

constructor(arg0: $SkinnedMesh$Type, arg1: $List$Type<(any)>, arg2: $Mesh$RenderProperties$Type, arg3: $Supplier$Type<(any)>)

public "initVBO"(arg0: $ComputeShaderSetup$MeshPartBuffer$Type): void
public "getPartVBO"(): $ComputeShaderSetup$MeshPartBuffer
public "draw"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: $Mesh$DrawingFunction$Type, arg3: integer, arg4: float, arg5: float, arg6: float, arg7: float, arg8: integer): void
get "partVBO"(): $ComputeShaderSetup$MeshPartBuffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkinnedMesh$SkinnedMeshPart$Type = ($SkinnedMesh$SkinnedMeshPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkinnedMesh$SkinnedMeshPart_ = $SkinnedMesh$SkinnedMeshPart$Type;
}}
declare module "packages/yesman/epicfight/api/utils/$PacketBufferCodec" {
import {$Vec3f, $Vec3f$Type} from "packages/yesman/epicfight/api/utils/math/$Vec3f"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export interface $PacketBufferCodec<T> {

 "decode"(arg0: $FriendlyByteBuf$Type): T
 "encode"(arg0: T, arg1: $FriendlyByteBuf$Type): void
}

export namespace $PacketBufferCodec {
const BOOLEAN: $PacketBufferCodec<(boolean)>
const INTEGER: $PacketBufferCodec<(integer)>
const FLOAT: $PacketBufferCodec<(float)>
const DOUBLE: $PacketBufferCodec<(double)>
const VEC3: $PacketBufferCodec<($Vec3)>
const VEC3F: $PacketBufferCodec<($Vec3f)>
function tagKey<T>(arg0: $ResourceKey$Type<($Registry$Type<(T)>)>): $PacketBufferCodec<($TagKey<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PacketBufferCodec$Type<T> = ($PacketBufferCodec<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PacketBufferCodec_<T> = $PacketBufferCodec$Type<(T)>;
}}
declare module "packages/yesman/epicfight/main/$AuthenticationHelper$AuthenticationProvider" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AuthenticationHelper$AuthenticationProvider extends $Enum<($AuthenticationHelper$AuthenticationProvider)> {
static readonly "NULL": $AuthenticationHelper$AuthenticationProvider
static readonly "DISCORD": $AuthenticationHelper$AuthenticationProvider
static readonly "PATREON": $AuthenticationHelper$AuthenticationProvider


public "toString"(): string
public static "values"(): ($AuthenticationHelper$AuthenticationProvider)[]
public static "valueOf"(arg0: string): $AuthenticationHelper$AuthenticationProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AuthenticationHelper$AuthenticationProvider$Type = (("discord") | ("null") | ("patreon")) | ($AuthenticationHelper$AuthenticationProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AuthenticationHelper$AuthenticationProvider_ = $AuthenticationHelper$AuthenticationProvider$Type;
}}
declare module "packages/yesman/epicfight/api/animation/$LivingMotion" {
import {$ExtendableEnumManager, $ExtendableEnumManager$Type} from "packages/yesman/epicfight/api/utils/$ExtendableEnumManager"
import {$ExtendableEnum, $ExtendableEnum$Type} from "packages/yesman/epicfight/api/utils/$ExtendableEnum"

export interface $LivingMotion extends $ExtendableEnum {

 "isSame"(arg0: $LivingMotion$Type): boolean
 "universalOrdinal"(): integer

(arg0: $LivingMotion$Type): boolean
}

export namespace $LivingMotion {
const ENUM_MANAGER: $ExtendableEnumManager<($LivingMotion)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingMotion$Type = ($LivingMotion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingMotion_ = $LivingMotion$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$MovementInputEvent" {
import {$PlayerInputState, $PlayerInputState$Type} from "packages/yesman/epicfight/api/client/input/$PlayerInputState"
import {$LocalPlayerPatch, $LocalPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch"
import {$Input, $Input$Type} from "packages/net/minecraft/client/player/$Input"
import {$AbstractPlayerEvent, $AbstractPlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AbstractPlayerEvent"

export class $MovementInputEvent extends $AbstractPlayerEvent<($LocalPlayerPatch)> {

/**
 * 
 * @deprecated
 */
constructor(arg0: $LocalPlayerPatch$Type, arg1: $Input$Type)
constructor(arg0: $LocalPlayerPatch$Type, arg1: $PlayerInputState$Type)

public "getInputState"(): $PlayerInputState
/**
 * 
 * @deprecated
 */
public "getMovementInput"(): $Input
public "sneakingTick"(arg0: boolean, arg1: float): void
get "inputState"(): $PlayerInputState
get "movementInput"(): $Input
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MovementInputEvent$Type = ($MovementInputEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MovementInputEvent_ = $MovementInputEvent$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$ModifyBaseDamageEvent" {
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$ValueModifier, $ValueModifier$Type} from "packages/yesman/epicfight/api/utils/math/$ValueModifier"
import {$ValueModifier$ResultCalculator, $ValueModifier$ResultCalculator$Type} from "packages/yesman/epicfight/api/utils/math/$ValueModifier$ResultCalculator"
import {$AbstractPlayerEvent, $AbstractPlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AbstractPlayerEvent"

export class $ModifyBaseDamageEvent<T extends $PlayerPatch<(any)>> extends $AbstractPlayerEvent<(T)> {

constructor(arg0: T, arg1: float, arg2: $ValueModifier$ResultCalculator$Type)

public "attachValueModifier"(arg0: $ValueModifier$Type): void
public "calculateModifiedDamage"(): float
public "getBaseDamage"(): float
get "baseDamage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifyBaseDamageEvent$Type<T> = ($ModifyBaseDamageEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifyBaseDamageEvent_<T> = $ModifyBaseDamageEvent$Type<(T)>;
}}
declare module "packages/yesman/epicfight/api/animation/property/$AnimationProperty$AttackPhaseProperty" {
import {$StunType, $StunType$Type} from "packages/yesman/epicfight/world/damagesource/$StunType"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$HitParticleType, $HitParticleType$Type} from "packages/yesman/epicfight/particle/$HitParticleType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$ExtraDamageInstance, $ExtraDamageInstance$Type} from "packages/yesman/epicfight/world/damagesource/$ExtraDamageInstance"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$DamageType, $DamageType$Type} from "packages/net/minecraft/world/damagesource/$DamageType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$HitEntityList$Priority, $HitEntityList$Priority$Type} from "packages/yesman/epicfight/api/utils/$HitEntityList$Priority"
import {$ValueModifier, $ValueModifier$Type} from "packages/yesman/epicfight/api/utils/math/$ValueModifier"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $AnimationProperty$AttackPhaseProperty<T> {
static readonly "MAX_STRIKES_MODIFIER": $AnimationProperty$AttackPhaseProperty<($ValueModifier)>
static readonly "DAMAGE_MODIFIER": $AnimationProperty$AttackPhaseProperty<($ValueModifier)>
static readonly "ARMOR_NEGATION_MODIFIER": $AnimationProperty$AttackPhaseProperty<($ValueModifier)>
static readonly "IMPACT_MODIFIER": $AnimationProperty$AttackPhaseProperty<($ValueModifier)>
static readonly "EXTRA_DAMAGE": $AnimationProperty$AttackPhaseProperty<($Set<($ExtraDamageInstance)>)>
static readonly "STUN_TYPE": $AnimationProperty$AttackPhaseProperty<($StunType)>
static readonly "SWING_SOUND": $AnimationProperty$AttackPhaseProperty<($SoundEvent)>
static readonly "HIT_SOUND": $AnimationProperty$AttackPhaseProperty<($SoundEvent)>
static readonly "PARTICLE": $AnimationProperty$AttackPhaseProperty<($RegistryObject<($HitParticleType)>)>
static readonly "HIT_PRIORITY": $AnimationProperty$AttackPhaseProperty<($HitEntityList$Priority)>
static readonly "SOURCE_TAG": $AnimationProperty$AttackPhaseProperty<($Set<($TagKey<($DamageType)>)>)>
static readonly "SOURCE_LOCATION_PROVIDER": $AnimationProperty$AttackPhaseProperty<($Function<($LivingEntityPatch<(any)>), ($Vec3)>)>

constructor(arg0: string, arg1: $Codec$Type<(any)>)
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationProperty$AttackPhaseProperty$Type<T> = ($AnimationProperty$AttackPhaseProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationProperty$AttackPhaseProperty_<T> = $AnimationProperty$AttackPhaseProperty$Type<(T)>;
}}
declare module "packages/yesman/epicfight/api/client/model/$Mesh" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Armature, $Armature$Type} from "packages/yesman/epicfight/api/model/$Armature"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Mesh$DrawingFunction, $Mesh$DrawingFunction$Type} from "packages/yesman/epicfight/api/client/model/$Mesh$DrawingFunction"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $Mesh {

 "drawPosed"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: $Mesh$DrawingFunction$Type, arg3: integer, arg4: float, arg5: float, arg6: float, arg7: float, arg8: integer, arg9: $Armature$Type, arg10: ($OpenMatrix4f$Type)[]): void
 "initialize"(): void
 "draw"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: $Mesh$DrawingFunction$Type, arg3: integer, arg4: float, arg5: float, arg6: float, arg7: float, arg8: integer): void
 "draw"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: $RenderType$Type, arg3: $Mesh$DrawingFunction$Type, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer, arg10: $Armature$Type, arg11: ($OpenMatrix4f$Type)[]): void
}

export namespace $Mesh {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mesh$Type = ($Mesh);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mesh_ = $Mesh$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$AttackEndEvent" {
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$AnimationManager$AnimationAccessor, $AnimationManager$AnimationAccessor$Type} from "packages/yesman/epicfight/api/animation/$AnimationManager$AnimationAccessor"
import {$AbstractPlayerEvent, $AbstractPlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AbstractPlayerEvent"

export class $AttackEndEvent extends $AbstractPlayerEvent<($ServerPlayerPatch)> {

constructor(arg0: $ServerPlayerPatch$Type, arg1: $AnimationManager$AnimationAccessor$Type<(any)>)

public "getAnimation"(): $AnimationManager$AnimationAccessor<(any)>
get "animation"(): $AnimationManager$AnimationAccessor<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttackEndEvent$Type = ($AttackEndEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttackEndEvent_ = $AttackEndEvent$Type;
}}
declare module "packages/yesman/epicfight/api/client/animation/$AnimationSubFileReader$PovSettings" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$AnimationSubFileReader$PovSettings$RootTransformation, $AnimationSubFileReader$PovSettings$RootTransformation$Type} from "packages/yesman/epicfight/api/client/animation/$AnimationSubFileReader$PovSettings$RootTransformation"
import {$AnimationSubFileReader$PovSettings$ViewLimit, $AnimationSubFileReader$PovSettings$ViewLimit$Type} from "packages/yesman/epicfight/api/client/animation/$AnimationSubFileReader$PovSettings$ViewLimit"
import {$TransformSheet, $TransformSheet$Type} from "packages/yesman/epicfight/api/animation/$TransformSheet"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnimationSubFileReader$PovSettings extends $Record {

constructor(cameraTransform: $TransformSheet$Type, visibilities: $Map$Type<(string), (boolean)>, rootTransformation: $AnimationSubFileReader$PovSettings$RootTransformation$Type, viewLimit: $AnimationSubFileReader$PovSettings$ViewLimit$Type, visibilityOthers: boolean, hasUniqueAnimation: boolean, syncFrame: boolean)

public "visibilities"(): $Map<(string), (boolean)>
public "rootTransformation"(): $AnimationSubFileReader$PovSettings$RootTransformation
public "visibilityOthers"(): boolean
public "hasUniqueAnimation"(): boolean
public "syncFrame"(): boolean
public "cameraTransform"(): $TransformSheet
public "viewLimit"(): $AnimationSubFileReader$PovSettings$ViewLimit
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationSubFileReader$PovSettings$Type = ($AnimationSubFileReader$PovSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationSubFileReader$PovSettings_ = $AnimationSubFileReader$PovSettings$Type;
}}
declare module "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch" {
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$ClientPlayerNetworkEvent$Clone, $ClientPlayerNetworkEvent$Clone$Type} from "packages/net/minecraftforge/client/event/$ClientPlayerNetworkEvent$Clone"
import {$AnimationSubFileReader$PovSettings, $AnimationSubFileReader$PovSettings$Type} from "packages/yesman/epicfight/api/client/animation/$AnimationSubFileReader$PovSettings"
import {$AnimatorControlPacket$Action, $AnimatorControlPacket$Action$Type} from "packages/yesman/epicfight/network/common/$AnimatorControlPacket$Action"
import {$Armature, $Armature$Type} from "packages/yesman/epicfight/api/model/$Armature"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$CapabilityItem, $CapabilityItem$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem"
import {$ActionAnimation, $ActionAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$ActionAnimation"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LocalPlayerPatch$FirstPersonLayer, $LocalPlayerPatch$FirstPersonLayer$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch$FirstPersonLayer"
import {$EntityJoinLevelEvent, $EntityJoinLevelEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityJoinLevelEvent"
import {$AbstractClientPlayerPatch, $AbstractClientPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$AbstractClientPlayerPatch"
import {$LivingEvent$LivingTickEvent, $LivingEvent$LivingTickEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent$LivingTickEvent"

export class $LocalPlayerPatch extends $AbstractClientPlayerPatch<($LocalPlayer)> {
 "modelYRotO2": float
 "xPosO2": double
 "yPosO2": double
 "zPosO2": double
 "xCloakO2": double
 "yCloakO2": double
 "zCloakO2": double
static "STAMINA": $EntityDataAccessor<(float)>
 "dx": double
 "dz": double
static readonly "WEIGHT_CORRECTION": double
 "currentLivingMotion": $LivingMotion
 "currentCompositeMotion": $LivingMotion

constructor()

public "setStamina"(arg0: float): void
public "openSkillBook"(arg0: $ItemStack$Type, arg1: $InteractionHand$Type): void
public "setModelYRot"(arg0: float, arg1: boolean): void
public "disableModelYRot"(arg0: boolean): void
public "toVanillaMode"(arg0: boolean): void
public "toEpicFightMode"(arg0: boolean): void
public "resetHolding"(): void
public "onRespawnLocalPlayer"(arg0: $ClientPlayerNetworkEvent$Clone$Type): void
public "getStaminaO"(): float
public "getPrevChargingAmount"(): integer
public "getFirstPersonLayer"(): $LocalPlayerPatch$FirstPersonLayer
public "getPovSettings"(): $AnimationSubFileReader$PovSettings
public "hasCameraAnimation"(): boolean
public "getModelYRot"(): float
public "setModelYRotInGui"(arg0: float): void
public "disableModelYRotInGui"(arg0: float): void
/**
 * 
 * @deprecated
 */
public "isTargetLockedOn"(): boolean
/**
 * 
 * @deprecated
 */
public "toggleLockOn"(): void
public "checkYTurn"(arg0: double): double
public "checkXTurn"(arg0: double): double
public "tick"(arg0: $LivingEvent$LivingTickEvent$Type): void
public "playShootingAnimation"(): void
public "overrideRender"(): boolean
public "onConstructed"(arg0: $LocalPlayer$Type): void
public "onJoinWorld"(arg0: $LocalPlayer$Type, arg1: $EntityJoinLevelEvent$Type): void
public "playAnimationSynchronized"(arg0: $AssetAccessor$Type<(any)>, arg1: float): void
public "reserveAnimation"(arg0: $AssetAccessor$Type<(any)>): void
public "playAnimationInstantly"(arg0: $AssetAccessor$Type<(any)>): void
public "stopPlaying"(arg0: $AssetAccessor$Type<(any)>): void
public "playAnimationInClientSide"(arg0: $AssetAccessor$Type<(any)>, arg1: float): void
public "pauseAnimator"(arg0: $AnimatorControlPacket$Action$Type, arg1: boolean): void
public "beginAction"(arg0: $ActionAnimation$Type): void
public "updateHeldItem"(arg0: $CapabilityItem$Type, arg1: $CapabilityItem$Type): void
public "shouldMoveOnCurrentSide"(arg0: $ActionAnimation$Type): boolean
public "isFirstPerson"(): boolean
public "shouldBlockMoving"(): boolean
public "getTarget"(): $LivingEntity
public "canPlayAttackAnimation"(): boolean
public "clientTick"(arg0: $LivingEvent$LivingTickEvent$Type): void
/**
 * 
 * @deprecated
 */
public "setLockOn"(arg0: boolean): void
public "getArmature"(): $Armature
public "getYRot"(): float
public "getYRotO"(): float
set "stamina"(value: float)
get "staminaO"(): float
get "prevChargingAmount"(): integer
get "firstPersonLayer"(): $LocalPlayerPatch$FirstPersonLayer
get "povSettings"(): $AnimationSubFileReader$PovSettings
get "modelYRot"(): float
set "modelYRotInGui"(value: float)
get "targetLockedOn"(): boolean
get "firstPerson"(): boolean
get "target"(): $LivingEntity
set "lockOn"(value: boolean)
get "armature"(): $Armature
get "yRot"(): float
get "yRotO"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalPlayerPatch$Type = ($LocalPlayerPatch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocalPlayerPatch_ = $LocalPlayerPatch$Type;
}}
declare module "packages/yesman/epicfight/client/$ClientEngine" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$RenderEngine, $RenderEngine$Type} from "packages/yesman/epicfight/client/events/engine/$RenderEngine"
import {$ParticleRenderType, $ParticleRenderType$Type} from "packages/net/minecraft/client/particle/$ParticleRenderType"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$ControlEngine, $ControlEngine$Type} from "packages/yesman/epicfight/client/events/engine/$ControlEngine"
import {$SPPlayUISound, $SPPlayUISound$Type} from "packages/yesman/epicfight/network/server/$SPPlayUISound"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AuthenticationHelper, $AuthenticationHelper$Type} from "packages/yesman/epicfight/main/$AuthenticationHelper"
import {$LocalPlayerPatch, $LocalPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch"

export class $ClientEngine {
 "minecraft": $Minecraft
 "renderEngine": $RenderEngine
 "controlEngine": $ControlEngine

constructor()

public "initAuthHelper"(arg0: $AuthenticationHelper$Type): void
public "playUISound"(arg0: $SPPlayUISound$Type): void
public "getAuthHelper"(): $AuthenticationHelper
/**
 * 
 * @deprecated
 */
public "isBattleMode"(): boolean
public "isVanillaModelDebuggingMode"(): boolean
public "isEpicFightMode"(): boolean
public static "makeCustomLowestParticleRenderTypeComparator"(arg0: $List$Type<($ParticleRenderType$Type)>): $Comparator<($ParticleRenderType)>
/**
 * 
 * @deprecated
 */
public "getPlayerPatch"(): $LocalPlayerPatch
public static "getInstance"(): $ClientEngine
public "switchVanillaModelDebuggingMode"(): boolean
get "authHelper"(): $AuthenticationHelper
get "battleMode"(): boolean
get "vanillaModelDebuggingMode"(): boolean
get "epicFightMode"(): boolean
get "playerPatch"(): $LocalPlayerPatch
get "instance"(): $ClientEngine
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientEngine$Type = ($ClientEngine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientEngine_ = $ClientEngine$Type;
}}
declare module "packages/yesman/epicfight/skill/$SkillDataKeys" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$SkillDataKey, $SkillDataKey$Type} from "packages/yesman/epicfight/skill/$SkillDataKey"
import {$DamageType, $DamageType$Type} from "packages/net/minecraft/world/damagesource/$DamageType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$DeferredRegister, $DeferredRegister$Type} from "packages/net/minecraftforge/registries/$DeferredRegister"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export class $SkillDataKeys {
static readonly "DATA_KEYS": $DeferredRegister<($SkillDataKey<(any)>)>
static readonly "REGISTRY": $Supplier<($IForgeRegistry<($SkillDataKey<(any)>)>)>
/**
 * 
 * @deprecated
 */
static readonly "BASIC_ATTACK_ACTIVATE": $RegistryObject<($SkillDataKey<(boolean)>)>
static readonly "COMBO_COUNTER": $RegistryObject<($SkillDataKey<(integer)>)>
static readonly "SHEATH": $RegistryObject<($SkillDataKey<(boolean)>)>
static readonly "PENALTY_RESTORE_COUNTER": $RegistryObject<($SkillDataKey<(integer)>)>
static readonly "PENALTY": $RegistryObject<($SkillDataKey<(float)>)>
static readonly "LAST_ACTIVE": $RegistryObject<($SkillDataKey<(integer)>)>
static readonly "PARRY_MOTION_COUNTER": $RegistryObject<($SkillDataKey<(integer)>)>
static readonly "FALL_DISTANCE": $RegistryObject<($SkillDataKey<(float)>)>
static readonly "PROTECT_NEXT_FALL": $RegistryObject<($SkillDataKey<(boolean)>)>
static readonly "STACKS": $RegistryObject<($SkillDataKey<(integer)>)>
static readonly "JUMP_KEY_PRESSED_LAST_TICK": $RegistryObject<($SkillDataKey<(boolean)>)>
static readonly "JUMP_COUNT": $RegistryObject<($SkillDataKey<(integer)>)>
static readonly "THROWN_TRIDENT_ENTITY_ID": $RegistryObject<($SkillDataKey<(integer)>)>
static readonly "LAST_HIT_COUNT": $RegistryObject<($SkillDataKey<(integer)>)>
static readonly "RESISTING_DAMAGE_TYPE": $RegistryObject<($SkillDataKey<($TagKey<($DamageType)>)>)>
static readonly "TICK_RECORD": $RegistryObject<($SkillDataKey<(integer)>)>
static readonly "ENTITY_ID": $RegistryObject<($SkillDataKey<(integer)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillDataKeys$Type = ($SkillDataKeys);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillDataKeys_ = $SkillDataKeys$Type;
}}
declare module "packages/yesman/epicfight/network/common/$AnimatorControlPacket$Priority" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AnimatorControlPacket$Priority extends $Enum<($AnimatorControlPacket$Priority)> {
static readonly "ANIMATION": $AnimatorControlPacket$Priority
static readonly "LOWEST": $AnimatorControlPacket$Priority
static readonly "LOW": $AnimatorControlPacket$Priority
static readonly "MIDDLE": $AnimatorControlPacket$Priority
static readonly "HIGH": $AnimatorControlPacket$Priority
static readonly "HIGHEST": $AnimatorControlPacket$Priority


public static "values"(): ($AnimatorControlPacket$Priority)[]
public static "valueOf"(arg0: string): $AnimatorControlPacket$Priority
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatorControlPacket$Priority$Type = (("high") | ("middle") | ("low") | ("highest") | ("lowest") | ("animation")) | ($AnimatorControlPacket$Priority);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatorControlPacket$Priority_ = $AnimatorControlPacket$Priority$Type;
}}
declare module "packages/yesman/epicfight/compat/kubejs/skill/$CustomChargeableSkill" {
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$ChargeableSkill, $ChargeableSkill$Type} from "packages/yesman/epicfight/skill/modules/$ChargeableSkill"
import {$ControlEngine, $ControlEngine$Type} from "packages/yesman/epicfight/client/events/engine/$ControlEngine"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$SkillContainer, $SkillContainer$Type} from "packages/yesman/epicfight/skill/$SkillContainer"
import {$SPSkillExecutionFeedback, $SPSkillExecutionFeedback$Type} from "packages/yesman/epicfight/network/server/$SPSkillExecutionFeedback"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"
import {$CustomChargeableSkill$CustomChargeableSkillBuilder, $CustomChargeableSkill$CustomChargeableSkillBuilder$Type} from "packages/yesman/epicfight/compat/kubejs/skill/$CustomChargeableSkill$CustomChargeableSkillBuilder"
import {$CustomSkill, $CustomSkill$Type} from "packages/yesman/epicfight/compat/kubejs/skill/$CustomSkill"

export class $CustomChargeableSkill extends $CustomSkill implements $ChargeableSkill {

constructor(arg0: $CustomChargeableSkill$CustomChargeableSkillBuilder$Type)

public "getKeyMapping"(): $KeyMapping
public "holdTick"(arg0: $SkillContainer$Type): void
public "getAllowedMaxChargingTicks"(): integer
public "startHolding"(arg0: $SkillContainer$Type): void
public "getMaxChargingTicks"(): integer
public "resetHolding"(arg0: $SkillContainer$Type): void
public "getMinChargingTicks"(): integer
public "onStopHolding"(arg0: $SkillContainer$Type, arg1: $SPSkillExecutionFeedback$Type): void
public "gatherHoldArguments"(arg0: $SkillContainer$Type, arg1: $ControlEngine$Type, arg2: $FriendlyByteBuf$Type): void
public "asSkill"(): $Skill
get "keyMapping"(): $KeyMapping
get "allowedMaxChargingTicks"(): integer
get "maxChargingTicks"(): integer
get "minChargingTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomChargeableSkill$Type = ($CustomChargeableSkill);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomChargeableSkill_ = $CustomChargeableSkill$Type;
}}
declare module "packages/yesman/epicfight/api/animation/property/$AnimationEvent" {
import {$AnimationEvent$Event, $AnimationEvent$Event$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationEvent$Event"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$AnimationParameters, $AnimationParameters$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationParameters"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $AnimationEvent<EVENT extends $AnimationEvent$Event<(any), (any), (any), (any), (any), (any), (any), (any), (any), (any)>, T extends $AnimationEvent<(EVENT), (T)>> {


public "executeWithNewParams"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $AssetAccessor$Type<(any)>, arg2: float, arg3: float, arg4: $AnimationParameters$Type<(any), (any), (any), (any), (any), (any), (any), (any), (any), (any)>): void
public "execute"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $AssetAccessor$Type<(any)>, arg2: float, arg3: float): void
public "getParameters"(): $AnimationParameters<(any), (any), (any), (any), (any), (any), (any), (any), (any), (any)>
public "params"<A, B, C, D, E>(arg0: A, arg1: B, arg2: C, arg3: D, arg4: E): T
public "params"<A, B, C, D, E, F>(arg0: A, arg1: B, arg2: C, arg3: D, arg4: E, arg5: F): T
public "params"<A, B, C, D, E, F, G>(arg0: A, arg1: B, arg2: C, arg3: D, arg4: E, arg5: F, arg6: G): T
public "params"<A, B, C, D, E, F, G, H>(arg0: A, arg1: B, arg2: C, arg3: D, arg4: E, arg5: F, arg6: G, arg7: H): T
public "params"<A, B, C, D, E, F, G, H, I>(arg0: A, arg1: B, arg2: C, arg3: D, arg4: E, arg5: F, arg6: G, arg7: H, arg8: I): T
public "params"<A, B, C, D, E, F, G, H, I, J>(arg0: A, arg1: B, arg2: C, arg3: D, arg4: E, arg5: F, arg6: G, arg7: H, arg8: I, arg9: J): T
public "params"<A>(arg0: A): T
public "params"<A, B>(arg0: A, arg1: B): T
public "params"<A, B, C>(arg0: A, arg1: B, arg2: C): T
public "params"<A, B, C, D>(arg0: A, arg1: B, arg2: C, arg3: D): T
get "parameters"(): $AnimationParameters<(any), (any), (any), (any), (any), (any), (any), (any), (any), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationEvent$Type<EVENT, T> = ($AnimationEvent<(EVENT), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationEvent_<EVENT, T> = $AnimationEvent$Type<(EVENT), (T)>;
}}
declare module "packages/yesman/epicfight/world/capabilities/$EpicFightCapabilities" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$CapabilityItem, $CapabilityItem$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RegisterCapabilitiesEvent, $RegisterCapabilitiesEvent$Type} from "packages/net/minecraftforge/common/capabilities/$RegisterCapabilitiesEvent"
import {$LocalPlayerPatch, $LocalPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$ProjectilePatch, $ProjectilePatch$Type} from "packages/yesman/epicfight/world/capabilities/projectile/$ProjectilePatch"
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$EntityPatch, $EntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$EntityPatch"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$CapabilitySkill, $CapabilitySkill$Type} from "packages/yesman/epicfight/world/capabilities/skill/$CapabilitySkill"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EpicFightCapabilities {
static readonly "CAPABILITY_ENTITY": $Capability<($EntityPatch)>
static readonly "CAPABILITY_ITEM": $Capability<($CapabilityItem)>
static readonly "CAPABILITY_PROJECTILE": $Capability<($ProjectilePatch)>
static readonly "CAPABILITY_SKILL": $Capability<($CapabilitySkill)>

constructor()

public static "getServerPlayerPatch"(arg0: $ServerPlayer$Type): $ServerPlayerPatch
public static "getLocalPlayerPatch"(arg0: $LocalPlayer$Type): $LocalPlayerPatch
public static "getPlayerPatchAsOptional"(arg0: $Entity$Type): $Optional<($PlayerPatch<(any)>)>
public static "getServerPlayerPatchAsOptional"(arg0: $Entity$Type): $Optional<($ServerPlayerPatch)>
public static "getLocalPlayerPatchAsOptional"(arg0: $Entity$Type): $Optional<($LocalPlayerPatch)>
public static "getItemCapability"(arg0: $ItemStack$Type): $Optional<($CapabilityItem)>
public static "getItemStackCapabilityOr"(arg0: $ItemStack$Type, arg1: $CapabilityItem$Type): $CapabilityItem
public static "getEntityPatch"<T extends $EntityPatch<(any)>>(arg0: $Entity$Type, arg1: $Class$Type<(T)>): T
public static "getUnparameterizedEntityPatch"<T extends $EntityPatch<(any)>>(arg0: $Entity$Type, arg1: $Class$Type<(T)>): $Optional<(T)>
public static "getParameterizedEntityPatch"<E extends $Entity, T extends $EntityPatch<(E)>>(arg0: $Entity$Type, arg1: $Class$Type<(E)>, arg2: $Class$Type<(any)>): $Optional<(T)>
public static "getPlayerPatch"(arg0: $Player$Type): $PlayerPatch<(any)>
public static "getItemStackCapability"(arg0: $ItemStack$Type): $CapabilityItem
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EpicFightCapabilities$Type = ($EpicFightCapabilities);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EpicFightCapabilities_ = $EpicFightCapabilities$Type;
}}
declare module "packages/yesman/epicfight/api/animation/types/$AttackAnimation" {
import {$AnimationVariables$SharedAnimationVariableKey, $AnimationVariables$SharedAnimationVariableKey$Type} from "packages/yesman/epicfight/api/animation/$AnimationVariables$SharedAnimationVariableKey"
import {$AnimationVariables$IndependentAnimationVariableKey, $AnimationVariables$IndependentAnimationVariableKey$Type} from "packages/yesman/epicfight/api/animation/$AnimationVariables$IndependentAnimationVariableKey"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$AttackAnimation$Phase, $AttackAnimation$Phase$Type} from "packages/yesman/epicfight/api/animation/types/$AttackAnimation$Phase"
import {$EntityState$StateFactor, $EntityState$StateFactor$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState$StateFactor"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ActionAnimation, $ActionAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$ActionAnimation"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$TransformSheet, $TransformSheet$Type} from "packages/yesman/epicfight/api/animation/$TransformSheet"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EpicFightDamageSource, $EpicFightDamageSource$Type} from "packages/yesman/epicfight/world/damagesource/$EpicFightDamageSource"
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AnimationProperty$AttackPhaseProperty, $AnimationProperty$AttackPhaseProperty$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationProperty$AttackPhaseProperty"
import {$AnimationManager$AnimationAccessor, $AnimationManager$AnimationAccessor$Type} from "packages/yesman/epicfight/api/animation/$AnimationManager$AnimationAccessor"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$Collider, $Collider$Type} from "packages/yesman/epicfight/api/collider/$Collider"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AttackAnimation extends $ActionAnimation {
static readonly "ATTACK_TRIED_ENTITIES": $AnimationVariables$SharedAnimationVariableKey<($List<($Entity)>)>
static readonly "ACTUALLY_HIT_ENTITIES": $AnimationVariables$SharedAnimationVariableKey<($List<($LivingEntity)>)>
readonly "phases": ($AttackAnimation$Phase)[]
static readonly "ACTION_ANIMATION_COORD": $AnimationVariables$SharedAnimationVariableKey<($TransformSheet)>
static readonly "BEGINNING_LOCATION": $AnimationVariables$IndependentAnimationVariableKey<($Vec3)>
static readonly "INITIAL_LOOK_VEC_DOT": $AnimationVariables$IndependentAnimationVariableKey<(float)>
static readonly "HAD_NO_PHYSICS": $AnimationVariables$IndependentAnimationVariableKey<(boolean)>

constructor(arg0: float, arg1: $AnimationManager$AnimationAccessor$Type<(any)>, arg2: $AssetAccessor$Type<(any)>, ...arg3: ($AttackAnimation$Phase$Type)[])
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: $InteractionHand$Type, arg6: $Collider$Type, arg7: $Joint$Type, arg8: $AnimationManager$AnimationAccessor$Type<(any)>, arg9: $AssetAccessor$Type<(any)>)
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: $Collider$Type, arg6: $Joint$Type, arg7: $AnimationManager$AnimationAccessor$Type<(any)>, arg8: $AssetAccessor$Type<(any)>)
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: $InteractionHand$Type, arg6: $Collider$Type, arg7: $Joint$Type, arg8: string, arg9: $AssetAccessor$Type<(any)>)
constructor(arg0: float, arg1: string, arg2: $AssetAccessor$Type<(any)>, ...arg3: ($AttackAnimation$Phase$Type)[])

public "renderDebugging"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: $LivingEntityPatch$Type<(any)>, arg3: float, arg4: float): void
public "linkTick"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $AssetAccessor$Type<(any)>): void
public "getModifiedLinkState"(arg0: $EntityState$StateFactor$Type<(any)>, arg1: any, arg2: $LivingEntityPatch$Type<(any)>, arg3: float): any
public "getTrueEntity"(arg0: $Entity$Type): $LivingEntity
public "getPlaySpeed"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $DynamicAnimation$Type): float
public "getPhaseOrderByTime"(arg0: float): integer
public "tick"(arg0: $LivingEntityPatch$Type<(any)>): void
public "getEpicFightDamageSource"(arg0: $DamageSource$Type, arg1: $LivingEntityPatch$Type<(any)>, arg2: $Entity$Type, arg3: $AttackAnimation$Phase$Type): $EpicFightDamageSource
public "getEpicFightDamageSource"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $Entity$Type, arg2: $AttackAnimation$Phase$Type): $EpicFightDamageSource
public "getPhaseByTime"(arg0: float): $AttackAnimation$Phase
public "end"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $AssetAccessor$Type<(any)>, arg2: boolean): void
public "begin"(arg0: $LivingEntityPatch$Type<(any)>): void
public "addProperty"<V, A extends $AttackAnimation>(arg0: $AnimationProperty$AttackPhaseProperty$Type<(V)>, arg1: V): A
public "addProperty"<V, A extends $AttackAnimation>(arg0: $AnimationProperty$AttackPhaseProperty$Type<(V)>, arg1: V, arg2: integer): A
public "removeProperty"<A extends $AttackAnimation>(arg0: $AnimationProperty$AttackPhaseProperty$Type<(any)>, arg1: integer): A
public "removeProperty"<A extends $AttackAnimation>(arg0: $AnimationProperty$AttackPhaseProperty$Type<(any)>): A
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttackAnimation$Type = ($AttackAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttackAnimation_ = $AttackAnimation$Type;
}}
declare module "packages/yesman/epicfight/world/damagesource/$ExtraDamageInstance" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ExtraDamageInstance$ExtraDamage, $ExtraDamageInstance$ExtraDamage$Type} from "packages/yesman/epicfight/world/damagesource/$ExtraDamageInstance$ExtraDamage"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $ExtraDamageInstance {
static readonly "EVISCERATE_LOST_HEALTH": $ExtraDamageInstance$ExtraDamage
static readonly "SWEEPING_EDGE_ENCHANTMENT": $ExtraDamageInstance$ExtraDamage

constructor(arg0: $ExtraDamageInstance$ExtraDamage$Type, ...arg1: (float)[])

public "setTooltips"(arg0: $ItemStack$Type, arg1: $MutableComponent$Type, arg2: double): void
public "get"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: float): float
public "getParams"(): (float)[]
public "toTransableComponentParams"(): (any)[]
get "params"(): (float)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtraDamageInstance$Type = ($ExtraDamageInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtraDamageInstance_ = $ExtraDamageInstance$Type;
}}
declare module "packages/yesman/epicfight/api/animation/types/$MainFrameAnimation" {
import {$Layer$Priority, $Layer$Priority$Type} from "packages/yesman/epicfight/api/client/animation/$Layer$Priority"
import {$StaticAnimation, $StaticAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$StaticAnimation"
import {$AnimationVariables$IndependentAnimationVariableKey, $AnimationVariables$IndependentAnimationVariableKey$Type} from "packages/yesman/epicfight/api/animation/$AnimationVariables$IndependentAnimationVariableKey"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$AnimationManager$AnimationAccessor, $AnimationManager$AnimationAccessor$Type} from "packages/yesman/epicfight/api/animation/$AnimationManager$AnimationAccessor"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $MainFrameAnimation extends $StaticAnimation {
static readonly "HAD_NO_PHYSICS": $AnimationVariables$IndependentAnimationVariableKey<(boolean)>

constructor(arg0: float, arg1: $AnimationManager$AnimationAccessor$Type<(any)>, arg2: $AssetAccessor$Type<(any)>)
constructor(arg0: float, arg1: string, arg2: $AssetAccessor$Type<(any)>)

public "isMainFrameAnimation"(): boolean
public "tick"(arg0: $LivingEntityPatch$Type<(any)>): void
public "begin"(arg0: $LivingEntityPatch$Type<(any)>): void
public "getPriority"(): $Layer$Priority
get "mainFrameAnimation"(): boolean
get "priority"(): $Layer$Priority
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MainFrameAnimation$Type = ($MainFrameAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MainFrameAnimation_ = $MainFrameAnimation$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/entitypatch/$EntityDecorations$RenderAttributeModifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EntityDecorations$RenderAttributeModifier<T> {

 "tick"(): void
 "shouldRemove"(): boolean
 "modifyValue"(arg0: T, arg1: float): void

(): void
}

export namespace $EntityDecorations$RenderAttributeModifier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityDecorations$RenderAttributeModifier$Type<T> = ($EntityDecorations$RenderAttributeModifier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityDecorations$RenderAttributeModifier_<T> = $EntityDecorations$RenderAttributeModifier$Type<(T)>;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$SkillCastEvent" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$SkillContainer, $SkillContainer$Type} from "packages/yesman/epicfight/skill/$SkillContainer"
import {$AbstractPlayerEvent, $AbstractPlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AbstractPlayerEvent"

export class $SkillCastEvent extends $AbstractPlayerEvent<($PlayerPatch<(any)>)> {

constructor(arg0: $PlayerPatch$Type<(any)>, arg1: $SkillContainer$Type, arg2: $FriendlyByteBuf$Type)

public "shouldReserveKey"(): boolean
public "getSkillContainer"(): $SkillContainer
public "setSkillExecutable"(arg0: boolean): void
public "setStateExecutable"(arg0: boolean): void
public "isSkillExecutable"(): boolean
public "isStateExecutable"(): boolean
public "getArguments"(): $FriendlyByteBuf
public "isExecutable"(): boolean
get "skillContainer"(): $SkillContainer
set "skillExecutable"(value: boolean)
set "stateExecutable"(value: boolean)
get "skillExecutable"(): boolean
get "stateExecutable"(): boolean
get "arguments"(): $FriendlyByteBuf
get "executable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillCastEvent$Type = ($SkillCastEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillCastEvent_ = $SkillCastEvent$Type;
}}
declare module "packages/yesman/epicfight/api/utils/math/$Vec4f" {
import {$Vec3f, $Vec3f$Type} from "packages/yesman/epicfight/api/utils/math/$Vec3f"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"

export class $Vec4f extends $Vec3f {
 "w": float
static readonly "X_AXIS": $Vec3f
static readonly "Y_AXIS": $Vec3f
static readonly "Z_AXIS": $Vec3f
static readonly "M_X_AXIS": $Vec3f
static readonly "M_Y_AXIS": $Vec3f
static readonly "M_Z_AXIS": $Vec3f
static readonly "ZERO": $Vec3f
 "z": float
 "x": float
 "y": float

constructor(arg0: $Vec3f$Type)
constructor(arg0: float, arg1: float, arg2: float, arg3: float)
constructor()

public static "add"(arg0: $Vec4f$Type, arg1: $Vec4f$Type, arg2: $Vec4f$Type): $Vec4f
public "add"(arg0: float, arg1: float, arg2: float, arg3: float): $Vec4f
public "toString"(): string
public "transform"(arg0: $OpenMatrix4f$Type): $Vec4f
public "set"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "set"(arg0: $Vec4f$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vec4f$Type = ($Vec4f);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vec4f_ = $Vec4f$Type;
}}
declare module "packages/yesman/epicfight/skill/$SkillSlots" {
import {$SkillSlot, $SkillSlot$Type} from "packages/yesman/epicfight/skill/$SkillSlot"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$SkillCategory, $SkillCategory$Type} from "packages/yesman/epicfight/skill/$SkillCategory"

export class $SkillSlots extends $Enum<($SkillSlots)> implements $SkillSlot {
static readonly "BASIC_ATTACK": $SkillSlots
static readonly "DODGE": $SkillSlots
static readonly "PASSIVE1": $SkillSlots
static readonly "PASSIVE2": $SkillSlots
static readonly "PASSIVE3": $SkillSlots
static readonly "WEAPON_PASSIVE": $SkillSlots
static readonly "WEAPON_INNATE": $SkillSlots
static readonly "GUARD": $SkillSlots
static readonly "KNOCKDOWN_WAKEUP": $SkillSlots
static readonly "MOVER": $SkillSlots
static readonly "IDENTITY": $SkillSlots


public "universalOrdinal"(): integer
public "category"(): $SkillCategory
public static "values"(): ($SkillSlots)[]
public static "valueOf"(arg0: string): $SkillSlots
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillSlots$Type = (("basic_attack") | ("dodge") | ("weapon_passive") | ("knockdown_wakeup") | ("mover") | ("identity") | ("guard") | ("passive2") | ("passive1") | ("passive3") | ("weapon_innate")) | ($SkillSlots);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillSlots_ = $SkillSlots$Type;
}}
declare module "packages/yesman/epicfight/api/client/input/$PlayerInputState" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"
import {$Input, $Input$Type} from "packages/net/minecraft/client/player/$Input"

export class $PlayerInputState extends $Record {

constructor(leftImpulse: float, forwardImpulse: float, up: boolean, down: boolean, left: boolean, right: boolean, jumping: boolean, sneaking: boolean)

public static "fromVanillaInput"(arg0: $Input$Type): $PlayerInputState
public static "applyToVanillaInput"(arg0: $PlayerInputState$Type, arg1: $Input$Type): $Input
public "hasForwardImpulse"(): boolean
public "withUp"(arg0: boolean): $PlayerInputState
public "withDown"(arg0: boolean): $PlayerInputState
public "withLeft"(arg0: boolean): $PlayerInputState
public "withRight"(arg0: boolean): $PlayerInputState
public "withSneaking"(arg0: boolean): $PlayerInputState
public "getMoveVector"(): $Vec2
public "withJumping"(arg0: boolean): $PlayerInputState
public "jumping"(): boolean
public "sneaking"(): boolean
public "down"(): boolean
public "up"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copyWith"(arg0: float, arg1: float, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean): $PlayerInputState
public "left"(): boolean
public "right"(): boolean
public "forwardImpulse"(): float
public "leftImpulse"(): float
public "withForwardImpulse"(arg0: float): $PlayerInputState
public "withLeftImpulse"(arg0: float): $PlayerInputState
get "moveVector"(): $Vec2
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInputState$Type = ($PlayerInputState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerInputState_ = $PlayerInputState$Type;
}}
declare module "packages/yesman/epicfight/api/utils/math/$Vec2i" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Vec2i {
 "x": integer
 "y": integer

constructor(arg0: integer, arg1: integer)

public "toString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vec2i$Type = ($Vec2i);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vec2i_ = $Vec2i$Type;
}}
declare module "packages/yesman/epicfight/api/utils/math/$Vec2f" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Vec2f {
 "x": float
 "y": float

constructor()
constructor(arg0: float, arg1: float)

public "toString"(): string
public "scale"(arg0: float): $Vec2f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vec2f$Type = ($Vec2f);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vec2f_ = $Vec2f$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$DealDamageEvent$Damage" {
import {$LivingDamageEvent, $LivingDamageEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDamageEvent"
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$DealDamageEvent, $DealDamageEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$DealDamageEvent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EpicFightDamageSource, $EpicFightDamageSource$Type} from "packages/yesman/epicfight/world/damagesource/$EpicFightDamageSource"

export class $DealDamageEvent$Damage extends $DealDamageEvent<($LivingDamageEvent)> {

constructor(arg0: $ServerPlayerPatch$Type, arg1: $LivingEntity$Type, arg2: $EpicFightDamageSource$Type, arg3: $LivingDamageEvent$Type)

public "getAttackDamage"(): float
get "attackDamage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DealDamageEvent$Damage$Type = ($DealDamageEvent$Damage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DealDamageEvent$Damage_ = $DealDamageEvent$Damage$Type;
}}
declare module "packages/yesman/epicfight/api/utils/math/$Vec3f" {
import {$Vec2f, $Vec2f$Type} from "packages/yesman/epicfight/api/utils/math/$Vec2f"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"

export class $Vec3f extends $Vec2f {
static readonly "X_AXIS": $Vec3f
static readonly "Y_AXIS": $Vec3f
static readonly "Z_AXIS": $Vec3f
static readonly "M_X_AXIS": $Vec3f
static readonly "M_Y_AXIS": $Vec3f
static readonly "M_Z_AXIS": $Vec3f
static readonly "ZERO": $Vec3f
 "z": float
 "x": float
 "y": float

constructor()
constructor(arg0: double, arg1: double, arg2: double)
constructor(arg0: float, arg1: float, arg2: float)
constructor(arg0: $Vec3$Type)

public "toDoubleVector"(): $Vec3
public static "getMostSimilar"(arg0: $Vec3f$Type, arg1: $Vec3f$Type, arg2: $List$Type<($Vec3f$Type)>): integer
public static "getMostSimilar"(arg0: $Vec3f$Type, arg1: $Vec3f$Type, ...arg2: ($Vec3f$Type)[]): integer
public "toMojangVector"(): $Vector3f
public static "fromMojangVector"(arg0: $Vector3f$Type): $Vec3f
public static "fromDoubleVector"(arg0: $Vec3$Type): $Vec3f
public "rotateDegree"(arg0: $Vec3f$Type, arg1: float): $Vec3f
public "lengthSqr"(): float
public "distanceSqr"(arg0: $Vec3f$Type): float
public "horizontalDistanceSqr"(): float
public "validateValues"(): boolean
public static "getRotatorBetween"(arg0: $Vec3f$Type, arg1: $Vec3f$Type, arg2: $Quaternionf$Type): $Quaternionf
public static "getAngleBetween"(arg0: $Vec3f$Type, arg1: $Vec3f$Type): float
public "horizontalDistance"(): float
public "invalidate"(): void
public "sub"(arg0: float, arg1: float, arg2: float): $Vec3f
public static "sub"(arg0: $Vec3f$Type, arg1: $Vec3f$Type, arg2: $Vec3f$Type): $Vec3f
public "sub"(arg0: $Vec3f$Type): $Vec3f
public static "average"(arg0: $Vec3f$Type, ...arg1: ($Vec3f$Type)[]): $Vec3f
public static "average"(arg0: $Collection$Type<($Vec3f$Type)>, arg1: $Vec3f$Type): $Vec3f
public static "add"(arg0: $Vec3f$Type, arg1: $Vec3f$Type, arg2: $Vec3f$Type): $Vec3f
public "add"(arg0: $Vec3$Type): $Vec3f
public "add"(arg0: float, arg1: float, arg2: float): $Vec3f
public "add"(arg0: $Vec3f$Type): $Vec3f
public "equals"(arg0: any): boolean
public "length"(): float
public "toString"(): string
public "hashCode"(): integer
public "scale"(arg0: float): $Vec3f
public static "scale"(arg0: $Vec3f$Type, arg1: $Vec3f$Type, arg2: float): $Vec3f
public static "dot"(arg0: $Vec3f$Type, arg1: $Vec3f$Type): float
public "set"(arg0: $Vec3f$Type): $Vec3f
public "set"(arg0: $Vec3$Type): $Vec3f
public "set"(arg0: float, arg1: float, arg2: float): $Vec3f
public "copy"(): $Vec3f
public static "normalize"(arg0: $Vec3f$Type, arg1: $Vec3f$Type): $Vec3f
public "normalize"(): $Vec3f
public "distance"(arg0: $Vec3f$Type): float
public "multiply"(arg0: float, arg1: float, arg2: float): $Vec3f
public static "multiply"(arg0: $Vec3f$Type, arg1: $Vec3f$Type, arg2: float, arg3: float, arg4: float): $Vec3f
public "multiply"(arg0: $Vec3f$Type): $Vec3f
public static "rotate"(arg0: $Quaternionf$Type, arg1: $Vec3f$Type, arg2: $Vec3f$Type): $Vec3f
public "rotate"(arg0: float, arg1: $Vec3f$Type): void
public static "rotate"(arg0: float, arg1: $Vec3f$Type, arg2: $Vec3f$Type, arg3: $Vec3f$Type): $Vec3f
public static "interpolate"(arg0: $Vec3f$Type, arg1: $Vec3f$Type, arg2: float, arg3: $Vec3f$Type): $Vec3f
public static "cross"(arg0: $Vec3f$Type, arg1: $Vec3f$Type, arg2: $Vec3f$Type): $Vec3f
public static "getNearest"(arg0: $Vec3f$Type, ...arg1: ($Vec3f$Type)[]): integer
public static "getNearest"(arg0: $Vec3f$Type, arg1: $List$Type<($Vec3f$Type)>): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vec3f$Type = ($Vec3f);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vec3f_ = $Vec3f$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$DealDamageEvent" {
import {$LivingEvent, $LivingEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EpicFightDamageSource, $EpicFightDamageSource$Type} from "packages/yesman/epicfight/world/damagesource/$EpicFightDamageSource"
import {$AbstractPlayerEvent, $AbstractPlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AbstractPlayerEvent"

export class $DealDamageEvent<T extends $LivingEvent> extends $AbstractPlayerEvent<($ServerPlayerPatch)> {

constructor(arg0: $ServerPlayerPatch$Type, arg1: $LivingEntity$Type, arg2: $EpicFightDamageSource$Type, arg3: T, arg4: boolean)

public "getForgeEvent"(): T
public "getAttackDamage"(): float
public "getDamageSource"(): $EpicFightDamageSource
public "getTarget"(): $LivingEntity
get "forgeEvent"(): T
get "attackDamage"(): float
get "damageSource"(): $EpicFightDamageSource
get "target"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DealDamageEvent$Type<T> = ($DealDamageEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DealDamageEvent_<T> = $DealDamageEvent$Type<(T)>;
}}
declare module "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch" {
import {$StunType, $StunType$Type} from "packages/yesman/epicfight/world/damagesource/$StunType"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$HitParticleType, $HitParticleType$Type} from "packages/yesman/epicfight/particle/$HitParticleType"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$Armature, $Armature$Type} from "packages/yesman/epicfight/api/model/$Armature"
import {$CapabilityItem, $CapabilityItem$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem"
import {$LivingEntityPatch$ServerAnimationPacketProvider, $LivingEntityPatch$ServerAnimationPacketProvider$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch$ServerAnimationPacketProvider"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$AttackAnimation, $AttackAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$AttackAnimation"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntitySnapshot, $EntitySnapshot$Type} from "packages/yesman/epicfight/api/utils/$EntitySnapshot"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EntityDecorations, $EntityDecorations$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$EntityDecorations"
import {$EpicFightDamageSource, $EpicFightDamageSource$Type} from "packages/yesman/epicfight/world/damagesource/$EpicFightDamageSource"
import {$EntityState, $EntityState$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState"
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$Faction, $Faction$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$Faction"
import {$HurtableEntityPatch, $HurtableEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$HurtableEntityPatch"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Collider, $Collider$Type} from "packages/yesman/epicfight/api/collider/$Collider"
import {$LivingEvent$LivingTickEvent, $LivingEvent$LivingTickEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent$LivingTickEvent"
import {$AttackResult, $AttackResult$Type} from "packages/yesman/epicfight/api/utils/$AttackResult"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$AnimatorControlPacket$Action, $AnimatorControlPacket$Action$Type} from "packages/yesman/epicfight/network/common/$AnimatorControlPacket$Action"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$SPEntityPairingPacket, $SPEntityPairingPacket$Type} from "packages/yesman/epicfight/network/server/$SPEntityPairingPacket"
import {$ActionAnimation, $ActionAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$ActionAnimation"
import {$LivingFallEvent, $LivingFallEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingFallEvent"
import {$LivingDropsEvent, $LivingDropsEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDropsEvent"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$LocalPlayerPatch, $LocalPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$ServerAnimator, $ServerAnimator$Type} from "packages/yesman/epicfight/api/animation/$ServerAnimator"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ClientAnimator, $ClientAnimator$Type} from "packages/yesman/epicfight/api/client/animation/$ClientAnimator"
import {$AnimationManager$AnimationAccessor, $AnimationManager$AnimationAccessor$Type} from "packages/yesman/epicfight/api/animation/$AnimationManager$AnimationAccessor"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$EntityJoinLevelEvent, $EntityJoinLevelEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityJoinLevelEvent"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$Animator, $Animator$Type} from "packages/yesman/epicfight/api/animation/$Animator"

export class $LivingEntityPatch<T extends $LivingEntity> extends $HurtableEntityPatch<(T)> {
static readonly "WEIGHT_CORRECTION": double
 "currentLivingMotion": $LivingMotion
 "currentCompositeMotion": $LivingMotion

constructor()

public "onFall"(arg0: $LivingFallEvent$Type): void
public "getAnimator"<A extends $Animator>(): A
public "tick"(arg0: $LivingEvent$LivingTickEvent$Type): void
public "onDeath"(arg0: $LivingDeathEvent$Type): void
public static "initLivingEntityDataAccessor"(): void
public static "createSyncedEntityData"(arg0: $LivingEntity$Type): void
public "setLastAttackResult"(arg0: $AttackResult$Type): void
public "getEpicFightDamageSource"(): $EpicFightDamageSource
public "onAttackBlocked"(arg0: $DamageSource$Type, arg1: $LivingEntityPatch$Type<(any)>): void
public "setLastAttackEntity"(arg0: $Entity$Type): void
public "canPush"(arg0: $Entity$Type): boolean
public "initAttributesFromCompound"(arg0: $CompoundTag$Type): void
public "saveData"(arg0: $CompoundTag$Type): void
public "isStunned"(): boolean
public "getEntityState"(): $EntityState
public "onStrike"(arg0: $AttackAnimation$Type, arg1: $InteractionHand$Type): void
public "attack"(arg0: $EpicFightDamageSource$Type, arg1: $Entity$Type, arg2: $InteractionHand$Type): $AttackResult
public "playShootingAnimation"(): void
public "isLastAttackSuccess"(): boolean
public "setParentJointOfHand"(arg0: $InteractionHand$Type, arg1: $Joint$Type): void
public "updateMotion"(arg0: boolean): void
public "getArmature"(): $Armature
public "setMaxStunShield"(arg0: float): void
public "getMaxStunShield"(): float
public "aboutToDeath"(): void
public "isAirborneState"(): boolean
public "setAirborneState"(arg0: boolean): void
public "poseTick"(arg0: $DynamicAnimation$Type, arg1: $Pose$Type, arg2: float, arg3: float): void
public "overrideRender"(): boolean
public "onConstructed"(arg0: T): void
public "onJoinWorld"(arg0: T, arg1: $EntityJoinLevelEvent$Type): void
public "getModelMatrix"(arg0: float): $OpenMatrix4f
public "entityPairing"(arg0: $SPEntityPairingPacket$Type): void
public "applyStun"(arg0: $StunType$Type, arg1: float): boolean
public "getStunShield"(): float
public "setStunShield"(arg0: float): void
public "getHitAnimation"(arg0: $StunType$Type): $AssetAccessor<(any)>
public "playAnimationSynchronized"(arg0: $AssetAccessor$Type<(any)>, arg1: float, arg2: $LivingEntityPatch$ServerAnimationPacketProvider$Type): void
public "playAnimationSynchronized"(arg0: $AssetAccessor$Type<(any)>, arg1: float): void
public "updateEntityState"(arg0: $EntityState$Type): void
public "updateEntityState"(): void
public "cancelItemUse"(): void
public "getHoldingItemCapability"(arg0: $InteractionHand$Type): $CapabilityItem
public "getAdvancedHoldingItemCapability"(arg0: $InteractionHand$Type): $CapabilityItem
public "isOffhandItemValid"(): boolean
public "getAdvancedHoldingItemStack"(arg0: $InteractionHand$Type): $ItemStack
public "getDamageSource"(arg0: $AnimationManager$AnimationAccessor$Type<(any)>, arg1: $InteractionHand$Type): $EpicFightDamageSource
public "getArmorNegation"(arg0: $InteractionHand$Type): float
public "tryHurt"(arg0: $DamageSource$Type, arg1: float): $AttackResult
public "tryHarm"(arg0: $Entity$Type, arg1: $EpicFightDamageSource$Type, arg2: float): $AttackResult
public "setLastAttackSuccess"(arg0: boolean): void
public "getModifiedBaseDamage"(arg0: float): float
public "onDrop"(arg0: $LivingDropsEvent$Type): boolean
public "getExecutionResistance"(): integer
public "setExecutionResistance"(arg0: integer): void
public "getYRotDeltaTo"(arg0: $Entity$Type): float
public "getYRotLimit"(): float
public "getAttackDirectionPitch"(): float
public "reserveAnimation"(arg0: $AssetAccessor$Type<(any)>, arg1: $LivingEntityPatch$ServerAnimationPacketProvider$Type): void
public "reserveAnimation"(arg0: $AssetAccessor$Type<(any)>): void
public "playAnimationInstantly"(arg0: $AssetAccessor$Type<(any)>, arg1: $LivingEntityPatch$ServerAnimationPacketProvider$Type): void
public "playAnimationInstantly"(arg0: $AssetAccessor$Type<(any)>): void
public "playAnimation"(arg0: $AssetAccessor$Type<(any)>, arg1: float, arg2: $LivingEntityPatch$ServerAnimationPacketProvider$Type): void
public "playAnimation"(arg0: $AssetAccessor$Type<(any)>, arg1: float): void
public "stopPlaying"(arg0: $AssetAccessor$Type<(any)>): void
public "playAnimationInClientSide"(arg0: $AssetAccessor$Type<(any)>, arg1: float): void
public "sendToAllPlayersTrackingMe"(arg0: any): void
public "pauseAnimator"(arg0: $AnimatorControlPacket$Action$Type, arg1: boolean): void
public "resetSize"(arg0: $EntityDimensions$Type): void
public "beginAction"(arg0: $ActionAnimation$Type): void
public "updateHeldItem"(arg0: $CapabilityItem$Type, arg1: $CapabilityItem$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type, arg4: $InteractionHand$Type): void
public "updateArmor"(arg0: $CapabilityItem$Type, arg1: $CapabilityItem$Type, arg2: $EquipmentSlot$Type): void
public "onMount"(arg0: boolean, arg1: $Entity$Type): void
public "notifyGrapplingWarning"(): void
public "onDodgeSuccess"(arg0: $DamageSource$Type, arg1: $Vec3$Type): void
public "countHurtTime"(arg0: float): void
public "getClientAnimator"(): $ClientAnimator
public "getServerAnimator"(): $ServerAnimator
public "getWeaponHitSound"(arg0: $InteractionHand$Type): $SoundEvent
public "getSwingSound"(arg0: $InteractionHand$Type): $SoundEvent
public "getWeaponHitParticle"(arg0: $InteractionHand$Type): $HitParticleType
public "getColliderMatching"(arg0: $InteractionHand$Type): $Collider
public "getMaxStrikes"(arg0: $InteractionHand$Type): integer
public "getReach"(arg0: $InteractionHand$Type): float
public "getValidItemInHand"(arg0: $InteractionHand$Type): $ItemStack
public "getParentJointOfHand"(arg0: $InteractionHand$Type): $Joint
public "isTargetInvulnerable"(arg0: $Entity$Type): boolean
public "getGrapplingTarget"(): $LivingEntity
public "setGrapplingTarget"(arg0: $LivingEntity$Type): void
public "getLastAttackPosition"(): $Vec3
public "setLastAttackPosition"(): void
public "shouldMoveOnCurrentSide"(arg0: $ActionAnimation$Type): boolean
public "isFirstPerson"(): boolean
public "shouldBlockMoving"(): boolean
public "getXOld"(): double
public "getYOld"(): double
public "getZOld"(): double
public "getYRot"(): float
public "getYRotO"(): float
public "setYRot"(arg0: float): void
public "setYRotO"(arg0: float): void
public "getAttackingHand"(): $InteractionHand
public "getCurrentLivingMotion"(): $LivingMotion
public "getCurrentlyAttackTriedEntities"(): $List<($Entity)>
public "getCurrentlyActuallyHitEntities"(): $List<($LivingEntity)>
public "removeHurtEntities"(): void
public "getFaction"(): $Faction
public "getEntityDecorations"(): $EntityDecorations
public "captureEntitySnapshot"(): $EntitySnapshot<(any)>
public "flashTargetIndicator"(arg0: $LocalPlayerPatch$Type): boolean
public "getImpact"(arg0: $InteractionHand$Type): float
public "getTarget"(): $LivingEntity
public "getWeight"(): float
public "rotateTo"(arg0: float, arg1: float, arg2: boolean): void
public "rotateTo"(arg0: $Entity$Type, arg1: float, arg2: boolean): void
get "animator"(): A
set "lastAttackResult"(value: $AttackResult$Type)
get "epicFightDamageSource"(): $EpicFightDamageSource
set "lastAttackEntity"(value: $Entity$Type)
get "stunned"(): boolean
get "entityState"(): $EntityState
get "lastAttackSuccess"(): boolean
get "armature"(): $Armature
set "maxStunShield"(value: float)
get "maxStunShield"(): float
get "airborneState"(): boolean
set "airborneState"(value: boolean)
get "stunShield"(): float
set "stunShield"(value: float)
get "offhandItemValid"(): boolean
set "lastAttackSuccess"(value: boolean)
get "executionResistance"(): integer
set "executionResistance"(value: integer)
get "yRotLimit"(): float
get "attackDirectionPitch"(): float
get "clientAnimator"(): $ClientAnimator
get "serverAnimator"(): $ServerAnimator
get "grapplingTarget"(): $LivingEntity
set "grapplingTarget"(value: $LivingEntity$Type)
get "lastAttackPosition"(): $Vec3
get "firstPerson"(): boolean
get "xOld"(): double
get "yOld"(): double
get "zOld"(): double
get "yRot"(): float
get "yRotO"(): float
set "yRot"(value: float)
set "yRotO"(value: float)
get "attackingHand"(): $InteractionHand
get "currentLivingMotion"(): $LivingMotion
get "currentlyAttackTriedEntities"(): $List<($Entity)>
get "currentlyActuallyHitEntities"(): $List<($LivingEntity)>
get "faction"(): $Faction
get "entityDecorations"(): $EntityDecorations
get "target"(): $LivingEntity
get "weight"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityPatch$Type<T> = ($LivingEntityPatch<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityPatch_<T> = $LivingEntityPatch$Type<(T)>;
}}
declare module "packages/yesman/epicfight/api/model/$Armature" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Joint$HierarchicalJointAccessor, $Joint$HierarchicalJointAccessor$Type} from "packages/yesman/epicfight/api/animation/$Joint$HierarchicalJointAccessor"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$Joint$AccessTicket, $Joint$AccessTicket$Type} from "packages/yesman/epicfight/api/animation/$Joint$AccessTicket"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Armature {
readonly "rootJoint": $Joint

constructor(arg0: string, arg1: integer, arg2: $Joint$Type, arg3: $Map$Type<(string), ($Joint$Type)>)

public "getPoseMatrices"(): ($OpenMatrix4f)[]
public "setPose"(arg0: $Pose$Type): void
public "gatherAllJointsInPathToTerminal"(arg0: string, arg1: $Collection$Type<(string)>): void
public "getJointNumber"(): integer
public "toJsonObject"(): $JsonObject
public "bakeOriginMatrices"(): void
/**
 * 
 * @deprecated
 */
public "getBindedTransformFor"(arg0: $Pose$Type, arg1: $Joint$Type): $OpenMatrix4f
public "searchPathIndex"(arg0: $Joint$Type, arg1: string): $Joint$HierarchicalJointAccessor
public "searchPathIndex"(arg0: string): $Joint$HierarchicalJointAccessor
public "getBoundTransformByJointIndex"(arg0: $Pose$Type, arg1: $Joint$AccessTicket$Type): $OpenMatrix4f
public "getPoseAsTransformMatrix"(arg0: $Pose$Type, arg1: boolean): ($OpenMatrix4f)[]
public "hasJoint"(arg0: string): boolean
public "searchJointByName"(arg0: string): $Joint
public "getBoundTransformFor"(arg0: $Pose$Type, arg1: $Joint$Type): $OpenMatrix4f
public "toString"(): string
public "deepCopy"(): $Armature
public "searchJointById"(arg0: integer): $Joint
get "poseMatrices"(): ($OpenMatrix4f)[]
set "pose"(value: $Pose$Type)
get "jointNumber"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Armature$Type = ($Armature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Armature_ = $Armature$Type;
}}
declare module "packages/yesman/epicfight/api/physics/$PhysicsSimulator" {
import {$SimulationObject$SimulationObjectBuilder, $SimulationObject$SimulationObjectBuilder$Type} from "packages/yesman/epicfight/api/physics/$SimulationObject$SimulationObjectBuilder"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$SimulationObject, $SimulationObject$Type} from "packages/yesman/epicfight/api/physics/$SimulationObject"
import {$SimulationProvider, $SimulationProvider$Type} from "packages/yesman/epicfight/api/physics/$SimulationProvider"

export interface $PhysicsSimulator<KEY, B extends $SimulationObject$SimulationObjectBuilder, PV extends $SimulationProvider<(O), (T), (B), (PV)>, O, T extends $SimulationObject<(B), (PV), (O)>> {

 "restart"(arg0: KEY): void
 "runWhen"(arg0: KEY, arg1: PV, arg2: B, arg3: $BooleanSupplier$Type): void
 "runUntil"(arg0: KEY, arg1: PV, arg2: B, arg3: $BooleanSupplier$Type): void
 "getRunningObject"(arg0: KEY): $Optional<(T)>
 "tick"(arg0: O): void
 "stop"(arg0: KEY): void
 "isRunning"(arg0: KEY): boolean
}

export namespace $PhysicsSimulator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhysicsSimulator$Type<KEY, B, PV, O, T> = ($PhysicsSimulator<(KEY), (B), (PV), (O), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhysicsSimulator_<KEY, B, PV, O, T> = $PhysicsSimulator$Type<(KEY), (B), (PV), (O), (T)>;
}}
declare module "packages/yesman/epicfight/api/client/animation/property/$TrailInfo" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$TrailInfo$Builder, $TrailInfo$Builder$Type} from "packages/yesman/epicfight/api/client/animation/property/$TrailInfo$Builder"
import {$SimpleParticleType, $SimpleParticleType$Type} from "packages/net/minecraft/core/particles/$SimpleParticleType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $TrailInfo extends $Record {
static readonly "GENERIC_TRAIL_TEXTURE": $ResourceLocation
static readonly "SWORDMASTER_SWING_TRAIL_TEX": $ResourceLocation
static readonly "PREVIEWER_DEFAULT_TRAIL": $TrailInfo
static readonly "ANIMATION_DEFAULT_TRAIL": $TrailInfo

constructor(start: $Vec3$Type, end: $Vec3$Type, joint: string, particle: $SimpleParticleType$Type, startTime: float, endTime: float, fadeTime: float, rCol: float, gCol: float, bCol: float, interpolateCount: integer, trailLifetime: integer, updateInterval: integer, blockLight: integer, skyLight: integer, texturePath: $ResourceLocation$Type, hand: $InteractionHand$Type)

public "updateInterval"(): integer
public "playable"(): boolean
public "blockLight"(): integer
public "skyLight"(): integer
public static "deserialize"(arg0: $CompoundTag$Type): $TrailInfo
public static "deserialize"(arg0: $JsonElement$Type): $TrailInfo
public "particle"(): $SimpleParticleType
public "joint"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "start"(): $Vec3
public "end"(): $Vec3
public static "builder"(): $TrailInfo$Builder
public "startTime"(): float
public "endTime"(): float
public "overwrite"(arg0: $TrailInfo$Type): $TrailInfo
public "hand"(): $InteractionHand
public "texturePath"(): $ResourceLocation
public "rCol"(): float
public "gCol"(): float
public "bCol"(): float
public "trailLifetime"(): integer
public "interpolateCount"(): integer
public "fadeTime"(): float
public static "isValidTime"(arg0: float): boolean
public "unpackAsBuilder"(): $TrailInfo$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrailInfo$Type = ($TrailInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrailInfo_ = $TrailInfo$Type;
}}
declare module "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulatable" {
import {$InverseKinematicsSimulator, $InverseKinematicsSimulator$Type} from "packages/yesman/epicfight/api/physics/ik/$InverseKinematicsSimulator"
import {$PhysicsSimulator, $PhysicsSimulator$Type} from "packages/yesman/epicfight/api/physics/$PhysicsSimulator"
import {$SimulatableObject, $SimulatableObject$Type} from "packages/yesman/epicfight/api/physics/$SimulatableObject"
import {$SimulationTypes, $SimulationTypes$Type} from "packages/yesman/epicfight/api/physics/$SimulationTypes"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $InverseKinematicsSimulatable extends $SimulatableObject {

 "toEntity"(): $Entity
 "getRootXRotO"(): float
 "getRootXRot"(): float
 "getRootZRotO"(): float
 "getRootZRot"(): float
 "getIKSimulator"(): $InverseKinematicsSimulator
 "getModelMatrix"(arg0: float): $OpenMatrix4f
 "getSimulator"<SIM extends $PhysicsSimulator<(any), (any), (any), (any), (any)>>(arg0: $SimulationTypes$Type<(any), (any), (any), (any), (any), (SIM)>): $Optional<(SIM)>
}

export namespace $InverseKinematicsSimulatable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InverseKinematicsSimulatable$Type = ($InverseKinematicsSimulatable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InverseKinematicsSimulatable_ = $InverseKinematicsSimulatable$Type;
}}
declare module "packages/yesman/epicfight/skill/$SkillDataKey" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$PacketBufferCodec, $PacketBufferCodec$Type} from "packages/yesman/epicfight/api/utils/$PacketBufferCodec"
import {$SkillDataKey$SkillDataKeyCallbacks, $SkillDataKey$SkillDataKeyCallbacks$Type} from "packages/yesman/epicfight/skill/$SkillDataKey$SkillDataKeyCallbacks"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SkillDataKey<T> {

constructor(arg0: $PacketBufferCodec$Type<(T)>, arg1: T, arg2: boolean)

public static "getRegistryCallback"(): $SkillDataKey$SkillDataKeyCallbacks
public static "getSkillDataKeyMap"(): $Map<($Class<(any)>), ($Set<($SkillDataKey<(any)>)>)>
public "readFromBuffer"(arg0: $FriendlyByteBuf$Type): T
public "writeToBuffer"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public static "createSkillDataKey"<T>(arg0: $PacketBufferCodec$Type<(T)>, arg1: T, arg2: boolean, ...arg3: ($Class$Type<(any)>)[]): $SkillDataKey<(T)>
public static "createSkillDataKey"<T>(arg0: $PacketBufferCodec$Type<(T)>, arg1: T, ...arg2: ($Class$Type<(any)>)[]): $SkillDataKey<(T)>
public "syncronizeToTrackingPlayers"(): boolean
public "getId"(): integer
public "defaultValue"(): T
public static "getIdMap"(): $IdMapper<($SkillDataKey<(any)>)>
get "registryCallback"(): $SkillDataKey$SkillDataKeyCallbacks
get "skillDataKeyMap"(): $Map<($Class<(any)>), ($Set<($SkillDataKey<(any)>)>)>
get "id"(): integer
get "idMap"(): $IdMapper<($SkillDataKey<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillDataKey$Type<T> = ($SkillDataKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillDataKey_<T> = $SkillDataKey$Type<(T)>;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEventListener" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DetachablePlayerEvent, $DetachablePlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$DetachablePlayerEvent"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$PlayerEventListener$EventType, $PlayerEventListener$EventType$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEventListener$EventType"

export class $PlayerEventListener {

constructor(arg0: $PlayerPatch$Type<(any)>)

public "triggerEvents"<T extends $DetachablePlayerEvent<(any)>>(arg0: $PlayerEventListener$EventType$Type<(T)>, arg1: T): boolean
public "addEventListener"<T extends $DetachablePlayerEvent<(any)>>(arg0: $PlayerEventListener$EventType$Type<(T)>, arg1: $UUID$Type, arg2: $Consumer$Type<(T)>): void
public "addEventListener"<T extends $DetachablePlayerEvent<(any)>>(arg0: $PlayerEventListener$EventType$Type<(T)>, arg1: $UUID$Type, arg2: $Consumer$Type<(T)>, arg3: integer): void
public "removeListener"<T extends $DetachablePlayerEvent<(any)>>(arg0: $PlayerEventListener$EventType$Type<(T)>, arg1: $UUID$Type, arg2: integer): void
public "removeListener"<T extends $DetachablePlayerEvent<(any)>>(arg0: $PlayerEventListener$EventType$Type<(T)>, arg1: $UUID$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEventListener$Type = ($PlayerEventListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerEventListener_ = $PlayerEventListener$Type;
}}
declare module "packages/yesman/epicfight/world/item/$UchigatanaItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UchigatanaItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "isCorrectToolForDrops"(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UchigatanaItem$Type = ($UchigatanaItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UchigatanaItem_ = $UchigatanaItem$Type;
}}
declare module "packages/yesman/epicfight/compat/kubejs/skill/$CustomSkill$CustomSkillBuilder" {
import {$Skill$Resource, $Skill$Resource$Type} from "packages/yesman/epicfight/skill/$Skill$Resource"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$SkillContainer, $SkillContainer$Type} from "packages/yesman/epicfight/skill/$SkillContainer"
import {$Skill$ActivateType, $Skill$ActivateType$Type} from "packages/yesman/epicfight/skill/$Skill$ActivateType"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SkillCategory, $SkillCategory$Type} from "packages/yesman/epicfight/skill/$SkillCategory"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SkillCategories, $SkillCategories$Type} from "packages/yesman/epicfight/skill/$SkillCategories"
import {$CustomSkill$OnScreenContext, $CustomSkill$OnScreenContext$Type} from "packages/yesman/epicfight/compat/kubejs/skill/$CustomSkill$OnScreenContext"
import {$CustomSkill$GetTooltipOnItem, $CustomSkill$GetTooltipOnItem$Type} from "packages/yesman/epicfight/compat/kubejs/skill/$CustomSkill$GetTooltipOnItem"
import {$CustomSkill$DrawOnGuiContext, $CustomSkill$DrawOnGuiContext$Type} from "packages/yesman/epicfight/compat/kubejs/skill/$CustomSkill$DrawOnGuiContext"

/**
 * Creates a custom skill. The builder requires one of each of the following to function:
 * - category
 * - activateType
 * - resource
 * - texture
 */
export class $CustomSkill$CustomSkillBuilder extends $BuilderBase<($Skill)> {
 "tab": $ResourceLocation
 "category": $SkillCategory
 "activateType": $Skill$ActivateType
 "resource": $Skill$Resource
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(arg0: $ResourceLocation$Type)

public "getRegistryType"(): $RegistryInfo<($Skill)>
/**
 * Predicate that is called to check if the skill is in executable state.
 */
public "executableState"(arg0: $Predicate$Type<($PlayerPatch$Type<(any)>)>): $CustomSkill$CustomSkillBuilder
/**
 * Called when the cooldown regeneration is being calculated.
 */
public "cooldownRegenPerSecond"(arg0: $Function$Type<($PlayerPatch$Type<(any)>), (float)>): $CustomSkill$CustomSkillBuilder
/**
 * Sets the activate type of the skill. Input a string of the type.
 */
public "activateType"(arg0: $Skill$ActivateType$Type): $CustomSkill$CustomSkillBuilder
/**
 * This is called when the skill is learned by the player.
 */
public "onInitiate"(arg0: $Consumer$Type<($SkillContainer$Type)>): $CustomSkill$CustomSkillBuilder
/**
 * This is called when the skill is removed from the player.
 */
public "onRemoved"(arg0: $Consumer$Type<($SkillContainer$Type)>): $CustomSkill$CustomSkillBuilder
/**
 * Called when resource consumption is being calculated.
 */
public "setConsumption"(arg0: $BiConsumer$Type<($SkillContainer$Type), (float)>): $CustomSkill$CustomSkillBuilder
/**
 * Called each tick the skill is active.
 */
public "updateContainer"(arg0: $Consumer$Type<($SkillContainer$Type)>): $CustomSkill$CustomSkillBuilder
/**
 * Predicate on whether the skill should deactivate automatically or not.
 */
public "shouldDeactivateAutomatically"(arg0: $Predicate$Type<($PlayerPatch$Type<(any)>)>): $CustomSkill$CustomSkillBuilder
/**
 * Consumer that is called when the skill is added from the skill HUD.
 */
public "onScreen"(arg0: $Consumer$Type<($CustomSkill$OnScreenContext$Type)>): $CustomSkill$CustomSkillBuilder
/**
 * Sets the tooltip of the skill on the item that has this skill as an innate.
 */
public "getTooltipOnItem"(arg0: $Function$Type<($CustomSkill$GetTooltipOnItem$Type), ($List$Type<($Component$Type)>)>): $CustomSkill$CustomSkillBuilder
/**
 * Sets the parameters of the description of the skill on the skill book GUI.
 */
public "getTooltipArgsOfScreen"(arg0: $Function$Type<($List$Type<(any)>), ($List$Type<(any)>)>): $CustomSkill$CustomSkillBuilder
/**
 * Consumer that is called to draw the skill on the GUI.
 */
public "drawOnGui"(arg0: $Consumer$Type<($CustomSkill$DrawOnGuiContext$Type)>): $CustomSkill$CustomSkillBuilder
/**
 * Predicate that is called to check if the skill should be drawn on the GUI.
 */
public "shouldDraw"(arg0: $Predicate$Type<($SkillContainer$Type)>): $CustomSkill$CustomSkillBuilder
/**
 * Sets the max duration of the skill.
 */
public "maxDuration"(arg0: integer): $CustomSkill$CustomSkillBuilder
/**
 * This is called when the skill is executed on the server. This is where you should put your skill logic.
 * The second argument is the buffer that is sent from the client. It's used for data synchronization.
 */
public "executeOnServer"(arg0: $BiConsumer$Type<($SkillContainer$Type), ($FriendlyByteBuf$Type)>): $CustomSkill$CustomSkillBuilder
/**
 * Called when the skill is cancelled on the server.
 */
public "cancelOnServer"(arg0: $BiConsumer$Type<($SkillContainer$Type), ($FriendlyByteBuf$Type)>): $CustomSkill$CustomSkillBuilder
/**
 * This is called when the skill is executed on the client. Best to use this in sync with the server if it is a skill that moves the player.
 * The second argument is the buffer that is sent from the server. It's used for data synchronization.
 */
public "executeOnClient"(arg0: $BiConsumer$Type<($SkillContainer$Type), ($FriendlyByteBuf$Type)>): $CustomSkill$CustomSkillBuilder
/**
 * Called when the skill is cancelled on the client.
 */
public "cancelOnClient"(arg0: $BiConsumer$Type<($SkillContainer$Type), ($FriendlyByteBuf$Type)>): $CustomSkill$CustomSkillBuilder
/**
 * Sets the texture of the skill. Input a string or resource location of the texture.
 * Example: `minecraft:textures/block/stone.png`
 * Required.
 */
public "texture"(arg0: $ResourceLocation$Type): $CustomSkill$CustomSkillBuilder
public "createObject"(): $Skill
/**
 * Sets the resource type of the skill. Input a string of the type.
 */
public "resource"(arg0: $Skill$Resource$Type): $CustomSkill$CustomSkillBuilder
/**
 * Predicate that is called to check if the skill can be executed.
 */
public "canExecute"(arg0: $Predicate$Type<($SkillContainer$Type)>): $CustomSkill$CustomSkillBuilder
/**
 * Sets the category of the skill. Input a string of the category.
 * Required.
 */
public "category"(arg0: $SkillCategories$Type): $CustomSkill$CustomSkillBuilder
/**
 * Sets the max stack size of the skill.
 */
public "maxStackSize"(arg0: integer): $CustomSkill$CustomSkillBuilder
/**
 * Sets the creative tab that the skill book for this skill will be in.
 * Optional.
 * The KubeJS tab is `'kubejs:kubejs'` and the Epic Fight tab is `epicfight:items`.
 */
public "tab"(arg0: $ResourceLocation$Type): $CustomSkill$CustomSkillBuilder
get "registryType"(): $RegistryInfo<($Skill)>
set "consumption"(value: $BiConsumer$Type<($SkillContainer$Type), (float)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSkill$CustomSkillBuilder$Type = ($CustomSkill$CustomSkillBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSkill$CustomSkillBuilder_ = $CustomSkill$CustomSkillBuilder$Type;
}}
declare module "packages/yesman/epicfight/network/server/$SPAnimatorControl" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$AnimatorControlPacket$Action, $AnimatorControlPacket$Action$Type} from "packages/yesman/epicfight/network/common/$AnimatorControlPacket$Action"
import {$AnimatorControlPacket, $AnimatorControlPacket$Type} from "packages/yesman/epicfight/network/common/$AnimatorControlPacket"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$AnimatorControlPacket$Priority, $AnimatorControlPacket$Priority$Type} from "packages/yesman/epicfight/network/common/$AnimatorControlPacket$Priority"
import {$AnimatorControlPacket$Layer, $AnimatorControlPacket$Layer$Type} from "packages/yesman/epicfight/network/common/$AnimatorControlPacket$Layer"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $SPAnimatorControl extends $AnimatorControlPacket {

constructor(arg0: $AnimatorControlPacket$Action$Type, arg1: integer, arg2: integer, arg3: float, arg4: boolean, arg5: $AnimatorControlPacket$Layer$Type, arg6: $AnimatorControlPacket$Priority$Type)
constructor(arg0: $AnimatorControlPacket$Action$Type, arg1: $AssetAccessor$Type<(any)>, arg2: float, arg3: $LivingEntityPatch$Type<(any)>, arg4: $AnimatorControlPacket$Layer$Type, arg5: $AnimatorControlPacket$Priority$Type)
constructor(arg0: $AnimatorControlPacket$Action$Type, arg1: $AssetAccessor$Type<(any)>, arg2: float, arg3: $LivingEntityPatch$Type<(any)>)
constructor(arg0: $AnimatorControlPacket$Action$Type, arg1: $AssetAccessor$Type<(any)>, arg2: integer, arg3: float, arg4: boolean)
constructor(arg0: $AnimatorControlPacket$Action$Type, arg1: integer, arg2: integer, arg3: float, arg4: boolean)

public static "toBytes"(arg0: $SPAnimatorControl$Type, arg1: $FriendlyByteBuf$Type): void
public static "handle"(arg0: $SPAnimatorControl$Type, arg1: $Supplier$Type<($NetworkEvent$Context$Type)>): void
public static "fromBytes"(arg0: $FriendlyByteBuf$Type): $SPAnimatorControl
public "onArrive"<T extends $SPAnimatorControl>(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SPAnimatorControl$Type = ($SPAnimatorControl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SPAnimatorControl_ = $SPAnimatorControl$Type;
}}
