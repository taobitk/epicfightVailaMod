declare module "packages/com/chaosthedude/explorerscompass/util/$CompassState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CompassState extends $Enum<($CompassState)> {
static readonly "INACTIVE": $CompassState
static readonly "SEARCHING": $CompassState
static readonly "FOUND": $CompassState
static readonly "NOT_FOUND": $CompassState


public static "fromID"(arg0: integer): $CompassState
public "getID"(): integer
public static "values"(): ($CompassState)[]
public static "valueOf"(arg0: string): $CompassState
get "iD"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompassState$Type = (("inactive") | ("found") | ("searching") | ("not_found")) | ($CompassState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompassState_ = $CompassState$Type;
}}
declare module "packages/com/chaosthedude/explorerscompass/items/$ExplorersCompassItem" {
import {$CompassState, $CompassState$Type} from "packages/com/chaosthedude/explorerscompass/util/$CompassState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ExplorersCompassItem extends $Item {
static readonly "NAME": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "searchForStructure"(arg0: $ServerLevel$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $ResourceLocation$Type, arg4: boolean, arg5: $ItemStack$Type): void
public "setSearching"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type, arg2: $Player$Type): void
public "setSearchRadius"(arg0: $ItemStack$Type, arg1: integer, arg2: $Player$Type): void
public "setIsGroup"(arg0: $ItemStack$Type, arg1: boolean): void
public "setNotFound"(arg0: $ItemStack$Type, arg1: integer, arg2: integer): void
public "searchForNextStructure"(arg0: $ServerLevel$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $ItemStack$Type): void
public "getStructureKey"(arg0: $ItemStack$Type): $ResourceLocation
public "getIsGroup"(arg0: $ItemStack$Type): boolean
public "succeed"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type, arg2: boolean, arg3: integer, arg4: integer, arg5: $List$Type<($BlockPos$Type)>, arg6: integer, arg7: boolean): void
public "setFound"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type, arg2: integer, arg3: integer, arg4: integer): void
public "setDisplayCoordinates"(arg0: $ItemStack$Type, arg1: boolean): void
public "setInactive"(arg0: $ItemStack$Type, arg1: $Player$Type): void
public "setFoundStructureX"(arg0: $ItemStack$Type, arg1: integer, arg2: $Player$Type): void
public "setFoundStructureZ"(arg0: $ItemStack$Type, arg1: integer, arg2: $Player$Type): void
public "setStructureKey"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type, arg2: $Player$Type): void
public "setSamples"(arg0: $ItemStack$Type, arg1: integer, arg2: $Player$Type): void
public "getFoundStructureX"(arg0: $ItemStack$Type): integer
public "getFoundStructureZ"(arg0: $ItemStack$Type): integer
public "getSearchRadius"(arg0: $ItemStack$Type): integer
public "getSamples"(arg0: $ItemStack$Type): integer
public "getDistanceToBiome"(arg0: $Player$Type, arg1: $ItemStack$Type): integer
public "shouldDisplayCoordinates"(arg0: $ItemStack$Type): boolean
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "getDamage"(arg0: $ItemStack$Type): integer
public "isBroken"(arg0: $ItemStack$Type): boolean
public "setState"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $CompassState$Type, arg3: $Player$Type): void
public "getState"(arg0: $ItemStack$Type): $CompassState
public "fail"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type, arg2: integer, arg3: integer): void
public "isActive"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplorersCompassItem$Type = ($ExplorersCompassItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExplorersCompassItem_ = $ExplorersCompassItem$Type;
}}
