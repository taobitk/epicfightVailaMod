declare module "packages/com/merlin204/avalon/block/testdoor/$TestDoor" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$MeshBlock$MeshBlockEntityPatch, $MeshBlock$MeshBlockEntityPatch$Type} from "packages/com/merlin204/avalon/block/$MeshBlock$MeshBlockEntityPatch"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$MeshBlock, $MeshBlock$Type} from "packages/com/merlin204/avalon/block/$MeshBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$MeshBlock$MeshBlockEntityAnimator, $MeshBlock$MeshBlockEntityAnimator$Type} from "packages/com/merlin204/avalon/block/$MeshBlock$MeshBlockEntityAnimator"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $TestDoor extends $MeshBlock {
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
readonly "animation": $AssetAccessor<(any)>
 "entitypatch": $MeshBlock$MeshBlockEntityPatch
 "animator": $MeshBlock$MeshBlockEntityAnimator
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
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getMesh"(): $AssetAccessor<(any)>
public "drawMesh"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: float): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getArmature"(): $AssetAccessor<(any)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
get "mesh"(): $AssetAccessor<(any)>
get "armature"(): $AssetAccessor<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TestDoor$Type = ($TestDoor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TestDoor_ = $TestDoor$Type;
}}
declare module "packages/com/merlin204/avalon/item/animationitem/$IAvalonAnimationItem" {
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"
import {$Armatures$ArmatureAccessor, $Armatures$ArmatureAccessor$Type} from "packages/yesman/epicfight/gameasset/$Armatures$ArmatureAccessor"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IAvalonAnimationItem {

 "setUseAnimationArmature"(arg0: integer, arg1: boolean): void
 "getArmature"(): $Armatures$ArmatureAccessor<(any)>
 "getHitBox"(): $Vec2
 "useAnimationArmature"(arg0: integer): boolean
}

export namespace $IAvalonAnimationItem {
const ARMATURE_MANAGER: $Map<(integer), (boolean)>
const BIPED: $Armatures$ArmatureAccessor<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAvalonAnimationItem$Type = ($IAvalonAnimationItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAvalonAnimationItem_ = $IAvalonAnimationItem$Type;
}}
declare module "packages/com/merlin204/avalon/block/$MeshBlock$MeshBlockEntityAnimator" {
import {$ClientAnimator, $ClientAnimator$Type} from "packages/yesman/epicfight/api/client/animation/$ClientAnimator"
import {$Layer$BaseLayer, $Layer$BaseLayer$Type} from "packages/yesman/epicfight/api/client/animation/$Layer$BaseLayer"
import {$MeshBlock, $MeshBlock$Type} from "packages/com/merlin204/avalon/block/$MeshBlock"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $MeshBlock$MeshBlockEntityAnimator extends $ClientAnimator {
readonly "baseLayer": $Layer$BaseLayer

constructor(arg0: $MeshBlock$Type, arg1: $LivingEntityPatch$Type<(any)>)

public "getEntityPatch"(): $LivingEntityPatch<(any)>
public "tick"(): void
get "entityPatch"(): $LivingEntityPatch<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeshBlock$MeshBlockEntityAnimator$Type = ($MeshBlock$MeshBlockEntityAnimator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MeshBlock$MeshBlockEntityAnimator_ = $MeshBlock$MeshBlockEntityAnimator$Type;
}}
declare module "packages/com/merlin204/avalon/item/$MerlinSuperGG" {
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IAvalonAnimationItem, $IAvalonAnimationItem$Type} from "packages/com/merlin204/avalon/item/animationitem/$IAvalonAnimationItem"
import {$Armatures$ArmatureAccessor, $Armatures$ArmatureAccessor$Type} from "packages/yesman/epicfight/gameasset/$Armatures$ArmatureAccessor"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MerlinSuperGG extends $Item implements $IAvalonAnimationItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getArmature"(): $Armatures$ArmatureAccessor<(any)>
public "setUseAnimationArmature"(arg0: integer, arg1: boolean): void
public "getHitBox"(): $Vec2
public "useAnimationArmature"(arg0: integer): boolean
get "armature"(): $Armatures$ArmatureAccessor<(any)>
get "hitBox"(): $Vec2
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MerlinSuperGG$Type = ($MerlinSuperGG);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MerlinSuperGG_ = $MerlinSuperGG$Type;
}}
declare module "packages/com/merlin204/avalon/block/$MeshBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$MeshBlock$MeshBlockEntityPatch, $MeshBlock$MeshBlockEntityPatch$Type} from "packages/com/merlin204/avalon/block/$MeshBlock$MeshBlockEntityPatch"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MeshBlock$MeshBlockEntityAnimator, $MeshBlock$MeshBlockEntityAnimator$Type} from "packages/com/merlin204/avalon/block/$MeshBlock$MeshBlockEntityAnimator"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $MeshBlock extends $Block implements $EntityBlock {
readonly "animation": $AssetAccessor<(any)>
 "entitypatch": $MeshBlock$MeshBlockEntityPatch
 "animator": $MeshBlock$MeshBlockEntityAnimator
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
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getMesh"(): $AssetAccessor<(any)>
public "_tick"(): void
public "drawMesh"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: float): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getArmature"(): $AssetAccessor<(any)>
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "mesh"(): $AssetAccessor<(any)>
get "armature"(): $AssetAccessor<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeshBlock$Type = ($MeshBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MeshBlock_ = $MeshBlock$Type;
}}
declare module "packages/com/merlin204/sg/item/$GolemHeartItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$IAvalonAnimationItem, $IAvalonAnimationItem$Type} from "packages/com/merlin204/avalon/item/animationitem/$IAvalonAnimationItem"
import {$Armatures$ArmatureAccessor, $Armatures$ArmatureAccessor$Type} from "packages/yesman/epicfight/gameasset/$Armatures$ArmatureAccessor"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GolemHeartItem extends $WeaponItem implements $IAvalonAnimationItem {
readonly "ARMATUREACCESSOR": $Armatures$ArmatureAccessor<(any)>
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public "getArmature"(): $Armatures$ArmatureAccessor<(any)>
public "getHitBox"(): $Vec2
public "setUseAnimationArmature"(arg0: integer, arg1: boolean): void
public "useAnimationArmature"(arg0: integer): boolean
get "armature"(): $Armatures$ArmatureAccessor<(any)>
get "hitBox"(): $Vec2
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GolemHeartItem$Type = ($GolemHeartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GolemHeartItem_ = $GolemHeartItem$Type;
}}
declare module "packages/com/merlin204/avalon/block/$MeshBlock$MeshBlockEntityPatch" {
import {$StunType, $StunType$Type} from "packages/yesman/epicfight/world/damagesource/$StunType"
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$Armature, $Armature$Type} from "packages/yesman/epicfight/api/model/$Armature"
import {$AssetAccessor, $AssetAccessor$Type} from "packages/yesman/epicfight/api/asset/$AssetAccessor"
import {$MeshBlock, $MeshBlock$Type} from "packages/com/merlin204/avalon/block/$MeshBlock"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$ClothSimulatable, $ClothSimulatable$Type} from "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulatable"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$Faction, $Faction$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$Faction"
import {$PhysicsSimulator, $PhysicsSimulator$Type} from "packages/yesman/epicfight/api/physics/$PhysicsSimulator"
import {$SimulatableObject, $SimulatableObject$Type} from "packages/yesman/epicfight/api/physics/$SimulatableObject"
import {$SimulationTypes, $SimulationTypes$Type} from "packages/yesman/epicfight/api/physics/$SimulationTypes"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ClothSimulator, $ClothSimulator$Type} from "packages/yesman/epicfight/api/client/physics/cloth/$ClothSimulator"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$Animator, $Animator$Type} from "packages/yesman/epicfight/api/animation/$Animator"

export class $MeshBlock$MeshBlockEntityPatch extends $LivingEntityPatch<($LivingEntity)> implements $SimulatableObject, $ClothSimulatable {
static readonly "WEIGHT_CORRECTION": double
 "currentLivingMotion": $LivingMotion
 "currentCompositeMotion": $LivingMotion

constructor(arg0: $MeshBlock$Type, arg1: $Armature$Type)

public "getSimulator"<SIM extends $PhysicsSimulator<(any), (any), (any), (any), (any)>>(arg0: $SimulationTypes$Type<(any), (any), (any), (any), (any), (SIM)>): $Optional<(SIM)>
public "getClothSimulator"(): $ClothSimulator
public "getAccurateCloakLocation"(arg0: float): $Vec3
public "getAccuratePartialLocation"(arg0: float): $Vec3
public "getObjectVelocity"(): $Vec3
public "getAccurateYRot"(arg0: float): float
public "getYRotDelta"(arg0: float): float
public "getSimulatableAnimator"(): $Animator
public "getGravity"(): float
public "getModelMatrix"(arg0: float): $OpenMatrix4f
public "initAnimator"(arg0: $Animator$Type): void
public "updateMotion"(arg0: boolean): void
public "poseTick"(arg0: $DynamicAnimation$Type, arg1: $Pose$Type, arg2: float, arg3: float): void
public "getHitAnimation"(arg0: $StunType$Type): $AssetAccessor<(any)>
public "updateEntityState"(): void
public "isLogicalClient"(): boolean
public "getYRot"(): float
public "getYRotO"(): float
public "getFaction"(): $Faction
public "invalid"(): boolean
public "getScale"(): float
public "setAnimator"(): void
public "getArmature"(): $Armature
get "clothSimulator"(): $ClothSimulator
get "objectVelocity"(): $Vec3
get "simulatableAnimator"(): $Animator
get "gravity"(): float
get "logicalClient"(): boolean
get "yRot"(): float
get "yRotO"(): float
get "faction"(): $Faction
get "scale"(): float
get "armature"(): $Armature
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeshBlock$MeshBlockEntityPatch$Type = ($MeshBlock$MeshBlockEntityPatch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MeshBlock$MeshBlockEntityPatch_ = $MeshBlock$MeshBlockEntityPatch$Type;
}}
