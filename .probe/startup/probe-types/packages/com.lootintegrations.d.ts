declare module "packages/com/lootintegrations/loot/$ILootTableID" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ILootTableID {

 "getID"(): $ResourceLocation
 "setId"(arg0: $ResourceLocation$Type): void
}

export namespace $ILootTableID {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILootTableID$Type = ($ILootTableID);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILootTableID_ = $ILootTableID$Type;
}}
declare module "packages/com/lootintegrations/loot/$INoMapContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $INoMapContext {

 "disabledMaps"(): void
 "areMapsDisabled"(): boolean
}

export namespace $INoMapContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INoMapContext$Type = ($INoMapContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INoMapContext_ = $INoMapContext$Type;
}}
