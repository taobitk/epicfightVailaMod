declare module "packages/mod/chloeprime/aaaparticles/api/common/$ParticleEmitterInfo" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ParticleEmitterInfo implements $Cloneable {
readonly "effek": $ResourceLocation
readonly "emitter": $ResourceLocation

constructor(arg0: $ResourceLocation$Type)
constructor(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type)
constructor(arg0: $FriendlyByteBuf$Type)

public "hasEmitter"(): boolean
public "isPositionSet"(): boolean
public "isRotationSet"(): boolean
public "isScaleSet"(): boolean
public "isSpeedSet"(): boolean
public "hasTriggers"(): boolean
public "hasBoundEntity"(): boolean
public "isEntitySpaceRelativePosSet"(): boolean
public "usingEntityHeadSpace"(): boolean
public "usingEntityVelocityAsRotation"(): boolean
public "rotationFromForward"(arg0: $Vec3$Type, arg1: float): $ParticleEmitterInfo
public "rotationFromForward"(arg0: $Vec3$Type): $ParticleEmitterInfo
public "bindOnEntity"(arg0: $Entity$Type): $ParticleEmitterInfo
public "entitySpaceRelativePosition"(arg0: double, arg1: double, arg2: double): $ParticleEmitterInfo
public "entitySpaceRelativePosition"(arg0: $Vec3$Type): $ParticleEmitterInfo
public "useEntityHeadSpace"(arg0: boolean): $ParticleEmitterInfo
public "useEntityHeadSpace"(): $ParticleEmitterInfo
public "useEntityVelocityAsRotation"(arg0: boolean): $ParticleEmitterInfo
public "useEntityVelocityAsRotation"(): $ParticleEmitterInfo
public "getBoundEntity"(arg0: $Level$Type): $Optional<($Entity)>
public "spawnInWorld"(arg0: $Level$Type, arg1: $Player$Type): void
public "copyTo"(arg0: $ParticleEmitterInfo$Type): void
public "clone"(): $ParticleEmitterInfo
public "trigger"(arg0: integer): $ParticleEmitterInfo
public "scale"(arg0: float, arg1: float, arg2: float): $ParticleEmitterInfo
public "scale"(arg0: float): $ParticleEmitterInfo
public "scale"(): $Vec3
public "encode"(arg0: $FriendlyByteBuf$Type): void
public "position"(arg0: double, arg1: double, arg2: double): $ParticleEmitterInfo
public "position"(arg0: $Vec3$Type): $ParticleEmitterInfo
public "position"(): $Vec3
public "parameter"(arg0: integer, arg1: float): $ParticleEmitterInfo
public static "create"(arg0: $Level$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): $ParticleEmitterInfo
public static "create"(arg0: $Level$Type, arg1: $ResourceLocation$Type): $ParticleEmitterInfo
public "hasParameters"(): boolean
public "rotation"(): $Vec3
public "rotation"(arg0: float, arg1: float, arg2: float): $ParticleEmitterInfo
public "rotation"(arg0: $Vec2$Type): $ParticleEmitterInfo
public "speed"(arg0: float): $ParticleEmitterInfo
public "speed"(): float
get "positionSet"(): boolean
get "rotationSet"(): boolean
get "scaleSet"(): boolean
get "speedSet"(): boolean
get "entitySpaceRelativePosSet"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEmitterInfo$Type = ($ParticleEmitterInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEmitterInfo_ = $ParticleEmitterInfo$Type;
}}
declare module "packages/mod/chloeprime/aaaparticles/api/common/$DynamicParameter" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $DynamicParameter extends $Record {

constructor(index: integer, value: float)

public "index"(): integer
public "value"(): float
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicParameter$Type = ($DynamicParameter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicParameter_ = $DynamicParameter$Type;
}}
declare module "packages/mod/chloeprime/aaaparticles/client/internal/$ReloadTrackable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ReloadTrackable {

 "aaa_particles$isReloading"(): boolean

(): boolean
}

export namespace $ReloadTrackable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReloadTrackable$Type = ($ReloadTrackable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReloadTrackable_ = $ReloadTrackable$Type;
}}
declare module "packages/mod/chloeprime/aaaparticles/client/internal/$EffekFpvRenderer" {
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"

export interface $EffekFpvRenderer {

 "aaaParticles$renderFpvEffek"(arg0: float, arg1: $LocalPlayer$Type): void

(arg0: float, arg1: $LocalPlayer$Type): void
}

export namespace $EffekFpvRenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffekFpvRenderer$Type = ($EffekFpvRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffekFpvRenderer_ = $EffekFpvRenderer$Type;
}}
declare module "packages/mod/chloeprime/aaaparticles/api/client/effekseer/$ParticleEmitter$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ParticleEmitter$Type extends $Enum<($ParticleEmitter$Type)> {
static readonly "WORLD": $ParticleEmitter$Type
static readonly "FIRST_PERSON_MAINHAND": $ParticleEmitter$Type
static readonly "FIRST_PERSON_OFFHAND": $ParticleEmitter$Type


public static "values"(): ($ParticleEmitter$Type)[]
public static "valueOf"(arg0: string): $ParticleEmitter$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEmitter$Type$Type = (("world") | ("first_person_offhand") | ("first_person_mainhand")) | ($ParticleEmitter$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEmitter$Type_ = $ParticleEmitter$Type$Type;
}}
declare module "packages/mod/chloeprime/aaaparticles/api/common/$AAALevel" {
import {$ParticleEmitter$Type, $ParticleEmitter$Type$Type} from "packages/mod/chloeprime/aaaparticles/api/client/effekseer/$ParticleEmitter$Type"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$DynamicParameter, $DynamicParameter$Type} from "packages/mod/chloeprime/aaaparticles/api/common/$DynamicParameter"
import {$ParticleEmitterInfo, $ParticleEmitterInfo$Type} from "packages/mod/chloeprime/aaaparticles/api/common/$ParticleEmitterInfo"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AAALevel {

constructor()

public static "setParameterFor"(arg0: $Player$Type, arg1: $ParticleEmitter$Type$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: ($DynamicParameter$Type)[]): void
public static "sendTriggerFor"(arg0: $Player$Type, arg1: $ParticleEmitter$Type$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: (integer)[]): void
public static "addParticle"(arg0: $Level$Type, arg1: double, arg2: $ParticleEmitterInfo$Type): void
public static "addParticle"(arg0: $Level$Type, arg1: boolean, arg2: $ParticleEmitterInfo$Type): void
public static "addParticle"(arg0: $Level$Type, arg1: $ParticleEmitterInfo$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AAALevel$Type = ($AAALevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AAALevel_ = $AAALevel$Type;
}}
