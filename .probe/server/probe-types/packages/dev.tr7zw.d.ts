declare module "packages/dev/tr7zw/trender/gui/impl/mixin/client/$ScreenAccessor" {
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $ScreenAccessor {

 "libgui$getChildren"(): $List<($GuiEventListener)>

(): $List<($GuiEventListener)>
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
declare module "packages/dev/tr7zw/entityculling/mixin/$DisplayAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DisplayAccessor {

 "invokeSetWidth"(arg0: float): void
 "invokeSetHeight"(arg0: float): void
}

export namespace $DisplayAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayAccessor$Type = ($DisplayAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayAccessor_ = $DisplayAccessor$Type;
}}
declare module "packages/dev/tr7zw/entityculling/access/$EntityRendererInter" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $EntityRendererInter<T extends $Entity> {

 "shadowShouldShowName"(arg0: T): boolean
 "shadowRenderNameTag"(arg0: T, arg1: $Component$Type, arg2: $PoseStack$Type, arg3: $MultiBufferSource$Type, arg4: integer, arg5: float): void
 "entityCullingIgnoresCulling"(arg0: T): boolean
 "entityCullingGetCullingBox"(arg0: T): $AABB
}

export namespace $EntityRendererInter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRendererInter$Type<T> = ($EntityRendererInter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRendererInter_<T> = $EntityRendererInter$Type<(T)>;
}}
declare module "packages/dev/tr7zw/transition/mixin/$EntityAccessor" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export interface $EntityAccessor {

 "transition$getRawPosition"(): $Vec3
 "transition$setRawPosition"(arg0: $Vec3$Type): void
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$Type = ($EntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityAccessor_ = $EntityAccessor$Type;
}}
declare module "packages/dev/tr7zw/entityculling/versionless/access/$Cullable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Cullable {

 "isForcedVisible"(): boolean
 "setCulled"(arg0: boolean): void
 "isCulled"(): boolean
 "setOutOfCamera"(arg0: boolean): void
 "isOutOfCamera"(): boolean
 "setTimeout"(): void
}

export namespace $Cullable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cullable$Type = ($Cullable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cullable_ = $Cullable$Type;
}}
declare module "packages/dev/tr7zw/transition/mc/extending/$ExtensionHolder" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $ExtensionHolder {

 "setExtension"(arg0: any, arg1: any): void
 "getExtension"<T>(arg0: any, arg1: $Class$Type<(T)>): T
}

export namespace $ExtensionHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtensionHolder$Type = ($ExtensionHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtensionHolder_ = $ExtensionHolder$Type;
}}
declare module "packages/dev/tr7zw/trender/gui/impl/mixin/client/$DrawContextAccessor" {
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"

export interface $DrawContextAccessor {

 "libgui$getVertexConsumers"(): $MultiBufferSource$BufferSource

(): $MultiBufferSource$BufferSource
}

export namespace $DrawContextAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawContextAccessor$Type = ($DrawContextAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawContextAccessor_ = $DrawContextAccessor$Type;
}}
