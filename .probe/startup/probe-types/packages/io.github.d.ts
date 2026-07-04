declare module "packages/io/github/flemmli97/tenshilib/mixinhelper/$ILastHand" {
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"

export interface $ILastHand {

 "lastSwungHand"(): $InteractionHand
 "setLastSwungHand"(arg0: $InteractionHand$Type): void
}

export namespace $ILastHand {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILastHand$Type = ($ILastHand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILastHand_ = $ILastHand$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/mixinhelper/$IClipContxt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IClipContxt {

 "checkSeeThrough"(): void

(): void
}

export namespace $IClipContxt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClipContxt$Type = ($IClipContxt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClipContxt_ = $IClipContxt$Type;
}}
declare module "packages/io/github/flemmli97/tenshilib/mixinhelper/$PoseStackExt" {
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"

export interface $PoseStackExt {

 "pushPose"(arg0: $PoseStack$Pose$Type): void

(stack: $PoseStack$Type, pose: $PoseStack$Pose$Type): void
}

export namespace $PoseStackExt {
function pushPose(stack: $PoseStack$Type, pose: $PoseStack$Pose$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoseStackExt$Type = ($PoseStackExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoseStackExt_ = $PoseStackExt$Type;
}}
declare module "packages/io/github/flemmli97/tenshilib/mixin/$ModelPartAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModelPart$Cube, $ModelPart$Cube$Type} from "packages/net/minecraft/client/model/geom/$ModelPart$Cube"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ModelPartAccessor {

 "getCubes"(): $List<($ModelPart$Cube)>
 "getChildren"(): $Map<(string), ($ModelPart)>
}

export namespace $ModelPartAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartAccessor$Type = ($ModelPartAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelPartAccessor_ = $ModelPartAccessor$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/mixinhelper/$INodeBreakable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $INodeBreakable {

 "canClimbLadder"(): boolean
 "setCanBreakBlocks"(arg0: boolean): void
 "setCanClimbLadder"(arg0: boolean): void
 "canBreakBlocks"(): boolean
}

export namespace $INodeBreakable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INodeBreakable$Type = ($INodeBreakable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INodeBreakable_ = $INodeBreakable$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/utils/$EntityFlags$FlagType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EntityFlags$FlagType extends $Enum<($EntityFlags$FlagType)> {
static readonly "UNDEF": $EntityFlags$FlagType
static readonly "TRUE": $EntityFlags$FlagType
static readonly "FALSE": $EntityFlags$FlagType


public static "values"(): ($EntityFlags$FlagType)[]
public static "valueOf"(name: string): $EntityFlags$FlagType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityFlags$FlagType$Type = (("undef") | ("true") | ("false")) | ($EntityFlags$FlagType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityFlags$FlagType_ = $EntityFlags$FlagType$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/mixin/$MobEntityMixin" {
import {$PathNavigation, $PathNavigation$Type} from "packages/net/minecraft/world/entity/ai/navigation/$PathNavigation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $MobEntityMixin {

 "setDeathLootTable"(arg0: $ResourceLocation$Type): void
 "getTrueNavigator"(): $PathNavigation
}

export namespace $MobEntityMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEntityMixin$Type = ($MobEntityMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobEntityMixin_ = $MobEntityMixin$Type;
}}
declare module "packages/io/github/flemmli97/tenshilib/mixin/$EntityRenderDispatcherAccessor" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$EntityRenderer, $EntityRenderer$Type} from "packages/net/minecraft/client/renderer/entity/$EntityRenderer"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $EntityRenderDispatcherAccessor {

 "getRenderers"(): $Map<($EntityType<(any)>), ($EntityRenderer<(any)>)>

(): $Map<($EntityType<(any)>), ($EntityRenderer<(any)>)>
}

export namespace $EntityRenderDispatcherAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRenderDispatcherAccessor$Type = ($EntityRenderDispatcherAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRenderDispatcherAccessor_ = $EntityRenderDispatcherAccessor$Type;
}}
declare module "packages/io/github/flemmli97/tenshilib/mixin/$LivingEntityRendererAccessor" {
import {$RenderLayer, $RenderLayer$Type} from "packages/net/minecraft/client/renderer/entity/layers/$RenderLayer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $LivingEntityRendererAccessor<T extends $LivingEntity, M extends $EntityModel<(T)>> {

 "getLayers"(): $List<($RenderLayer<(T), (M)>)>

(): $List<($RenderLayer<(T), (M)>)>
}

export namespace $LivingEntityRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityRendererAccessor$Type<T, M> = ($LivingEntityRendererAccessor<(T), (M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityRendererAccessor_<T, M> = $LivingEntityRendererAccessor$Type<(T), (M)>;
}}
declare module "packages/io/github/flemmli97/tenshilib/mixinhelper/$OffHandStrength" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $OffHandStrength {

 "getOffhandStrengthScale"(arg0: float): float

(arg0: float): float
}

export namespace $OffHandStrength {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OffHandStrength$Type = ($OffHandStrength);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OffHandStrength_ = $OffHandStrength$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/mixinhelper/$ISpawnReason" {
import {$MobSpawnType, $MobSpawnType$Type} from "packages/net/minecraft/world/entity/$MobSpawnType"

export interface $ISpawnReason {

 "getSpawnReason"(): $MobSpawnType

(): $MobSpawnType
}

export namespace $ISpawnReason {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpawnReason$Type = ($ISpawnReason);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpawnReason_ = $ISpawnReason$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/mixinhelper/$ITNTThrowable" {
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ITNTThrowable {

 "shootFromEntity"(arg0: $Entity$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void

(arg0: $Entity$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
}

export namespace $ITNTThrowable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITNTThrowable$Type = ($ITNTThrowable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITNTThrowable_ = $ITNTThrowable$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/mixinhelper/$LivingSensingExt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingSensingExt {

 "doExtendedLOSCheck"(): void

(): void
}

export namespace $LivingSensingExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingSensingExt$Type = ($LivingSensingExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingSensingExt_ = $LivingSensingExt$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/mixinhelper/$IEntityData" {
import {$EntityFlags, $EntityFlags$Type} from "packages/io/github/flemmli97/improvedmobs/utils/$EntityFlags"

export interface $IEntityData {

 "getFlags"(): $EntityFlags

(): $EntityFlags
}

export namespace $IEntityData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEntityData$Type = ($IEntityData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEntityData_ = $IEntityData$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/utils/$EntityFlags" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntityFlags$FlagType, $EntityFlags$FlagType$Type} from "packages/io/github/flemmli97/improvedmobs/utils/$EntityFlags$FlagType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityFlags {
static readonly "TAG_ID": string
static readonly "SERVER_ENTITY_TAG_ID": string
 "ladderClimber": boolean
 "modifyArmor": boolean
 "modifyHeldItems": boolean
 "modifyAttributes": boolean
 "enchantGear": boolean
 "isThrownEntity": boolean
 "isVariedSize": boolean
 "canBreakBlocks": $EntityFlags$FlagType
 "canFly": $EntityFlags$FlagType
 "magicRes": float
 "projMult": float
 "explosionMult": float
 "serverSideEntityID": $ResourceLocation

constructor()

public "disableShield"(): void
public "isShieldDisabled"(): boolean
public static "get"(entity: $Entity$Type): $EntityFlags
public "load"(nbt: $CompoundTag$Type): void
public "save"(): $CompoundTag
get "shieldDisabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityFlags$Type = ($EntityFlags);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityFlags_ = $EntityFlags$Type;
}}
declare module "packages/io/github/flemmli97/tenshilib/mixin/$ScreenAccessor" {
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"

export interface $ScreenAccessor {

 "addRenderableWidgetTo"<T extends ($GuiEventListener) & ($Renderable)>(arg0: T): T

(arg0: T): T
}

export namespace $ScreenAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAccessor$Type = ($ScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenAccessor_ = $ScreenAccessor$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/mixinhelper/$SensingExt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SensingExt {

 "doLineOfSightExt"(): void

(): void
}

export namespace $SensingExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SensingExt$Type = ($SensingExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SensingExt_ = $SensingExt$Type;
}}
