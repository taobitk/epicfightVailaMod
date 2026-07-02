declare module "packages/virtuoel/pehkui/api/$ScaleModifier" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$ScaleData, $ScaleData$Type} from "packages/virtuoel/pehkui/api/$ScaleData"

export class $ScaleModifier implements $Comparable<($ScaleModifier)> {

constructor(priority: float)
constructor()

public "modifyScale"(scaleData: $ScaleData$Type, modifiedScale: float, delta: float): float
public "modifyPrevScale"(scaleData: $ScaleData$Type, modifiedScale: float): float
public "compareTo"(o: $ScaleModifier$Type): integer
public "getPriority"(): float
get "priority"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScaleModifier$Type = ($ScaleModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScaleModifier_ = $ScaleModifier$Type;
}}
declare module "packages/virtuoel/pehkui/util/$NbtCompoundExtensions" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export interface $NbtCompoundExtensions {

 "pehkui_containsUuid"(arg0: string): boolean
 "pehkui_getUuid"(arg0: string): $UUID
}

export namespace $NbtCompoundExtensions {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NbtCompoundExtensions$Type = ($NbtCompoundExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NbtCompoundExtensions_ = $NbtCompoundExtensions$Type;
}}
declare module "packages/virtuoel/pehkui/util/$PehkuiBlockStateExtensions" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $PehkuiBlockStateExtensions {

 "pehkui_getOutlineShape"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $VoxelShape
 "pehkui_getBlock"(): $Block
}

export namespace $PehkuiBlockStateExtensions {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PehkuiBlockStateExtensions$Type = ($PehkuiBlockStateExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PehkuiBlockStateExtensions_ = $PehkuiBlockStateExtensions$Type;
}}
declare module "packages/virtuoel/pehkui/api/$ScaleEventCallback" {
import {$ScaleData, $ScaleData$Type} from "packages/virtuoel/pehkui/api/$ScaleData"

export interface $ScaleEventCallback {

 "onEvent"(arg0: $ScaleData$Type): void

(arg0: $ScaleData$Type): void
}

export namespace $ScaleEventCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScaleEventCallback$Type = ($ScaleEventCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScaleEventCallback_ = $ScaleEventCallback$Type;
}}
declare module "packages/virtuoel/pehkui/mixin/compat1201minus/compat116plus/$ChunkHolderAccessor" {
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"

export interface $ChunkHolderAccessor {

 "pehkui$getCurrentlyLoading"(): $LevelChunk
 "pehkui$setCurrentlyLoading"(arg0: $LevelChunk$Type): void
}

export namespace $ChunkHolderAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkHolderAccessor$Type = ($ChunkHolderAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkHolderAccessor_ = $ChunkHolderAccessor$Type;
}}
declare module "packages/virtuoel/pehkui/api/$ScaleData" {
import {$ScaleType, $ScaleType$Type} from "packages/virtuoel/pehkui/api/$ScaleType"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SortedSet, $SortedSet$Type} from "packages/java/util/$SortedSet"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ScaleModifier, $ScaleModifier$Type} from "packages/virtuoel/pehkui/api/$ScaleModifier"
import {$Float2FloatFunction, $Float2FloatFunction$Type} from "packages/it/unimi/dsi/fastutil/floats/$Float2FloatFunction"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ScaleData {


public "toPacket"(buffer: $FriendlyByteBuf$Type): $FriendlyByteBuf
public "shouldSync"(): boolean
public "getScaleTickDelay"(): integer
public "setBaseScale"(scale: float): void
public "onUpdate"(): void
public "setTargetScale"(targetScale: float): void
public "getInitialScale"(): float
public "setScaleTickDelay"(ticks: integer): void
public "getPrevScale"(): float
public "getPrevBaseScale"(): float
public "setPersistence"(persistent: boolean): void
public "getPersistence"(): boolean
public "shouldPersist"(): boolean
public "setEasing"(easing: $Float2FloatFunction$Type): void
public "resetScale"(): $ScaleData
public "resetScale"(notifyListener: boolean): $ScaleData
public "isReset"(): boolean
public "hasDefaultValues"(): boolean
public "averagedFromScales"(scaleData: $ScaleData$Type, ...scales: ($ScaleData$Type)[]): $ScaleData
public "getBaseValueModifiers"(): $SortedSet<($ScaleModifier)>
public "markForSync"(sync: boolean): void
public "getTargetScale"(): float
public "getBaseScale"(delta: float): float
public "getBaseScale"(): float
public "readNbt"(tag: $CompoundTag$Type): void
public "writeNbt"(tag: $CompoundTag$Type): $CompoundTag
public "getScaleType"(): $ScaleType
public "tick"(): void
public "getEntity"(): $Entity
public "setScale"(scale: float): void
public "equals"(other: $ScaleData$Type): boolean
public "equals"(obj: any): boolean
public "hashCode"(): integer
public "getScale"(delta: float): float
public "getScale"(): float
public "fromScale"(scaleData: $ScaleData$Type): $ScaleData
public "fromScale"(scaleData: $ScaleData$Type, notifyListener: boolean): $ScaleData
public "getEasing"(): $Float2FloatFunction
get "scaleTickDelay"(): integer
set "baseScale"(value: float)
set "targetScale"(value: float)
get "initialScale"(): float
set "scaleTickDelay"(value: integer)
get "prevScale"(): float
get "prevBaseScale"(): float
set "persistence"(value: boolean)
get "persistence"(): boolean
set "easing"(value: $Float2FloatFunction$Type)
get "reset"(): boolean
get "baseValueModifiers"(): $SortedSet<($ScaleModifier)>
get "targetScale"(): float
get "baseScale"(): float
get "scaleType"(): $ScaleType
get "entity"(): $Entity
set "scale"(value: float)
get "scale"(): float
get "easing"(): $Float2FloatFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScaleData$Type = ($ScaleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScaleData_ = $ScaleData$Type;
}}
declare module "packages/virtuoel/pehkui/api/$ScaleType" {
import {$ScaleEventCallback, $ScaleEventCallback$Type} from "packages/virtuoel/pehkui/api/$ScaleEventCallback"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ScaleModifier, $ScaleModifier$Type} from "packages/virtuoel/pehkui/api/$ScaleModifier"
import {$Float2FloatFunction, $Float2FloatFunction$Type} from "packages/it/unimi/dsi/fastutil/floats/$Float2FloatFunction"
import {$ScaleData, $ScaleData$Type} from "packages/virtuoel/pehkui/api/$ScaleData"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ScaleType {


public "getAffectsDimensions"(): boolean
public "setDefaultPersistence"(persistent: boolean): void
public "getDefaultPersistence"(): boolean
public "setDefaultEasing"(defaultEasing: $Float2FloatFunction$Type): void
public "getDefaultEasing"(): $Float2FloatFunction
public "getDefaultTickDelay"(): integer
public "clampBaseScale"(data: $ScaleData$Type, newScale: double): double
public "clampTargetScale"(data: $ScaleData$Type, newScale: double): double
public "getDefaultBaseValueModifiers"(): $Set<($ScaleModifier)>
public "getScaleChangedEvent"(): $Collection<($ScaleEventCallback)>
public "getPreTickEvent"(): $Collection<($ScaleEventCallback)>
public "getPostTickEvent"(): $Collection<($ScaleEventCallback)>
public "getScaleData"(entity: $Entity$Type): $ScaleData
public "getDefaultBaseScale"(): float
get "affectsDimensions"(): boolean
set "defaultPersistence"(value: boolean)
get "defaultPersistence"(): boolean
set "defaultEasing"(value: $Float2FloatFunction$Type)
get "defaultEasing"(): $Float2FloatFunction
get "defaultTickDelay"(): integer
get "defaultBaseValueModifiers"(): $Set<($ScaleModifier)>
get "scaleChangedEvent"(): $Collection<($ScaleEventCallback)>
get "preTickEvent"(): $Collection<($ScaleEventCallback)>
get "postTickEvent"(): $Collection<($ScaleEventCallback)>
get "defaultBaseScale"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScaleType$Type = ($ScaleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScaleType_ = $ScaleType$Type;
}}
declare module "packages/virtuoel/pehkui/util/$PehkuiEntityExtensions" {
import {$ScaleType, $ScaleType$Type} from "packages/virtuoel/pehkui/api/$ScaleType"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ScaleData, $ScaleData$Type} from "packages/virtuoel/pehkui/api/$ScaleData"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $PehkuiEntityExtensions {

 "pehkui_constructScaleData"(arg0: $ScaleType$Type): $ScaleData
 "pehkui_getScaleCache"(): ($ScaleData)[]
 "pehkui_setScaleCache"(arg0: ($ScaleData$Type)[]): void
 "pehkui_setShouldSyncScales"(arg0: boolean): void
 "pehkui_setShouldIgnoreScaleNbt"(arg0: boolean): void
 "pehkui_readScaleNbt"(arg0: $CompoundTag$Type): void
 "pehkui_getScaleData"(arg0: $ScaleType$Type): $ScaleData
 "pehkui_writeScaleNbt"(arg0: $CompoundTag$Type): $CompoundTag
 "pehkui_getScales"(): $Map<($ScaleType), ($ScaleData)>
 "pehkui_getOnGround"(): boolean
 "pehkui_setOnGround"(arg0: boolean): void
 "pehkui_shouldSyncScales"(): boolean
 "pehkui_shouldIgnoreScaleNbt"(): boolean
 "pehkui_isFirstUpdate"(): boolean
}

export namespace $PehkuiEntityExtensions {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PehkuiEntityExtensions$Type = ($PehkuiEntityExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PehkuiEntityExtensions_ = $PehkuiEntityExtensions$Type;
}}
