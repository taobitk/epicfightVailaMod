declare module "packages/info/u_team/u_team_core/block/$UBlock" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockItemProvider, $BlockItemProvider$Type} from "packages/info/u_team/u_team_core/api/block/$BlockItemProvider"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $UBlock extends $Block implements $BlockItemProvider {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Item$Properties$Type)
constructor(arg0: $BlockBehaviour$Properties$Type)

public "blockItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UBlock$Type = ($UBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UBlock_ = $UBlock$Type;
}}
declare module "packages/info/u_team/useful_backpacks/item/$EnderChestBackpackItem" {
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UItem, $UItem$Type} from "packages/info/u_team/u_team_core/item/$UItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AutoPickupBackpack, $AutoPickupBackpack$Type} from "packages/info/u_team/useful_backpacks/item/$AutoPickupBackpack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnderChestBackpackItem extends $UItem implements $AutoPickupBackpack {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getInventory"(arg0: $ServerPlayer$Type, arg1: $ItemStack$Type): $SimpleContainer
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "open"(arg0: $ServerPlayer$Type, arg1: $ItemStack$Type, arg2: integer): void
public "addTooltip"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canAutoPickup"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "saveInventory"(arg0: $SimpleContainer$Type, arg1: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderChestBackpackItem$Type = ($EnderChestBackpackItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderChestBackpackItem_ = $EnderChestBackpackItem$Type;
}}
declare module "packages/info/u_team/useful_backpacks/block/$FilterConfiguratorBlock" {
import {$UBlock, $UBlock$Type} from "packages/info/u_team/u_team_core/block/$UBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FilterConfiguratorBlock extends $UBlock {
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

constructor()

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterConfiguratorBlock$Type = ($FilterConfiguratorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterConfiguratorBlock_ = $FilterConfiguratorBlock$Type;
}}
declare module "packages/info/u_team/u_team_core/api/item/$UItemExtension" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $UItemExtension {

 "shouldPlayUpdateAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "canBeDropped"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
}

export namespace $UItemExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UItemExtension$Type = ($UItemExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UItemExtension_ = $UItemExtension$Type;
}}
declare module "packages/info/u_team/useful_backpacks/api/$Backpack" {
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $Backpack {

 "saveInventory"(arg0: $SimpleContainer$Type, arg1: $ItemStack$Type): void
 "canAutoPickup"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "getInventory"(arg0: $ServerPlayer$Type, arg1: $ItemStack$Type): $SimpleContainer
 "open"(arg0: $ServerPlayer$Type, arg1: $ItemStack$Type, arg2: integer): void
}

export namespace $Backpack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Backpack$Type = ($Backpack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Backpack_ = $Backpack$Type;
}}
declare module "packages/info/u_team/useful_backpacks/item/$FilterItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UItem, $UItem$Type} from "packages/info/u_team/u_team_core/item/$UItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Filter, $Filter$Type} from "packages/info/u_team/useful_backpacks/api/$Filter"

export class $FilterItem extends $UItem implements $Filter {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "isUsable"(arg0: $ItemStack$Type): boolean
public "matchItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterItem$Type = ($FilterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterItem_ = $FilterItem$Type;
}}
declare module "packages/info/u_team/useful_backpacks/item/$ItemFilterItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FilterItem, $FilterItem$Type} from "packages/info/u_team/useful_backpacks/item/$FilterItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemFilterItem extends $FilterItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canBeDropped"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFilterItem$Type = ($ItemFilterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFilterItem_ = $ItemFilterItem$Type;
}}
declare module "packages/info/u_team/u_team_core/api/dye/$DyeableItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $DyeableItem {

 "addColoredItem"<T extends ($Item) & ($DyeableItem)>(arg0: T): void
 "getDefaultColor"(): integer
 "hasColor"(arg0: $ItemStack$Type): boolean
 "removeColor"(arg0: $ItemStack$Type): void
 "getColor"(arg0: $ItemStack$Type): integer
 "setColor"(arg0: $ItemStack$Type, arg1: integer): void
}

export namespace $DyeableItem {
const TAG_DISPLAY: string
const TAG_COLOR: string
const DEFAULT_COLOR: integer
function colorStack(arg0: $ItemStack$Type, arg1: $List$Type<($DyeColor$Type)>): $ItemStack
function colorStackDyeItem(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyeableItem$Type = ($DyeableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DyeableItem_ = $DyeableItem$Type;
}}
declare module "packages/info/u_team/u_team_core/intern/recipe/$NoMirrorShapedRecipe" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $NoMirrorShapedRecipe extends $ShapedRecipe {
readonly "width": integer
readonly "height": integer
readonly "recipeItems": $NonNullList<($Ingredient)>
readonly "result": $ItemStack
readonly "id": $ResourceLocation
readonly "group": string
readonly "category": $CraftingBookCategory
readonly "showNotification": boolean

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: integer, arg4: integer, arg5: $NonNullList$Type<($Ingredient$Type)>, arg6: $ItemStack$Type, arg7: boolean)

public "getSerializer"(): $RecipeSerializer<(any)>
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoMirrorShapedRecipe$Type = ($NoMirrorShapedRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoMirrorShapedRecipe_ = $NoMirrorShapedRecipe$Type;
}}
declare module "packages/info/u_team/useful_backpacks/recipe/$BackpackCraftingRecipe$Serializer" {
import {$BackpackCraftingRecipe, $BackpackCraftingRecipe$Type} from "packages/info/u_team/useful_backpacks/recipe/$BackpackCraftingRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$UShapedRecipeSerializer, $UShapedRecipeSerializer$Type} from "packages/info/u_team/u_team_core/recipeserializer/$UShapedRecipeSerializer"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BackpackCraftingRecipe$Serializer extends $UShapedRecipeSerializer<($BackpackCraftingRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackpackCraftingRecipe$Serializer$Type = ($BackpackCraftingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackpackCraftingRecipe$Serializer_ = $BackpackCraftingRecipe$Serializer$Type;
}}
declare module "packages/info/u_team/u_team_core/menutype/$UMenuType$DataMenuSupplier" {
import {$MenuType$MenuSupplier, $MenuType$MenuSupplier$Type} from "packages/net/minecraft/world/inventory/$MenuType$MenuSupplier"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$IContainerFactory, $IContainerFactory$Type} from "packages/net/minecraftforge/network/$IContainerFactory"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export interface $UMenuType$DataMenuSupplier<T extends $AbstractContainerMenu> extends $MenuType$MenuSupplier<(T)>, $IContainerFactory<(any)> {

 "create"(arg0: integer, arg1: $Inventory$Type): $AbstractContainerMenu
 "create"(arg0: integer, arg1: $Inventory$Type, arg2: $FriendlyByteBuf$Type): T

(arg0: integer, arg1: $Inventory$Type): $AbstractContainerMenu
}

export namespace $UMenuType$DataMenuSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UMenuType$DataMenuSupplier$Type<T> = ($UMenuType$DataMenuSupplier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UMenuType$DataMenuSupplier_<T> = $UMenuType$DataMenuSupplier$Type<(T)>;
}}
declare module "packages/info/u_team/useful_backpacks/api/$Filter" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $Filter {

 "isUsable"(arg0: $ItemStack$Type): boolean
 "matchItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
}

export namespace $Filter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Filter$Type = ($Filter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Filter_ = $Filter$Type;
}}
declare module "packages/info/u_team/u_team_core/api/block/$BlockItemProvider" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"

export interface $BlockItemProvider {

 "blockItem"(): $Item

(): $Item
}

export namespace $BlockItemProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockItemProvider$Type = ($BlockItemProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockItemProvider_ = $BlockItemProvider$Type;
}}
declare module "packages/info/u_team/useful_backpacks/type/$BackpackType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"

export class $BackpackType extends $Enum<($BackpackType)> {
static readonly "SMALL": $BackpackType
static readonly "MEDIUM": $BackpackType
static readonly "LARGE": $BackpackType


public "getRarity"(): $Rarity
public "getInventoryWidth"(): integer
public "getInventoryHeight"(): integer
public "getInventorySize"(): integer
public "getSlotBackpackX"(): integer
public "getSlotBackpackY"(): integer
public "getSlotPlayerX"(): integer
public "getSlotPlayerY"(): integer
public "getTextureSizeX"(): integer
public "getTextureSizeY"(): integer
public "getName"(): string
public static "values"(): ($BackpackType)[]
public static "valueOf"(arg0: string): $BackpackType
get "rarity"(): $Rarity
get "inventoryWidth"(): integer
get "inventoryHeight"(): integer
get "inventorySize"(): integer
get "slotBackpackX"(): integer
get "slotBackpackY"(): integer
get "slotPlayerX"(): integer
get "slotPlayerY"(): integer
get "textureSizeX"(): integer
get "textureSizeY"(): integer
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackpackType$Type = (("small") | ("large") | ("medium")) | ($BackpackType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackpackType_ = $BackpackType$Type;
}}
declare module "packages/info/u_team/u_team_core/item/$UItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$UItemExtension, $UItemExtension$Type} from "packages/info/u_team/u_team_core/api/item/$UItemExtension"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UItem extends $Item implements $UItemExtension {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "shouldPlayUpdateAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "canBeDropped"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UItem$Type = ($UItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UItem_ = $UItem$Type;
}}
declare module "packages/info/u_team/u_team_core/intern/recipe/$NoMirrorShapedRecipe$Serializer" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$UShapedRecipeSerializer, $UShapedRecipeSerializer$Type} from "packages/info/u_team/u_team_core/recipeserializer/$UShapedRecipeSerializer"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$NoMirrorShapedRecipe, $NoMirrorShapedRecipe$Type} from "packages/info/u_team/u_team_core/intern/recipe/$NoMirrorShapedRecipe"

export class $NoMirrorShapedRecipe$Serializer extends $UShapedRecipeSerializer<($NoMirrorShapedRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoMirrorShapedRecipe$Serializer$Type = ($NoMirrorShapedRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoMirrorShapedRecipe$Serializer_ = $NoMirrorShapedRecipe$Serializer$Type;
}}
declare module "packages/info/u_team/useful_backpacks/item/$BackpackItem" {
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UItem, $UItem$Type} from "packages/info/u_team/u_team_core/item/$UItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$AutoPickupBackpack, $AutoPickupBackpack$Type} from "packages/info/u_team/useful_backpacks/item/$AutoPickupBackpack"
import {$DyeableItem, $DyeableItem$Type} from "packages/info/u_team/u_team_core/api/dye/$DyeableItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$BackpackType, $BackpackType$Type} from "packages/info/u_team/useful_backpacks/type/$BackpackType"

export class $BackpackItem extends $UItem implements $AutoPickupBackpack, $DyeableItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $BackpackType$Type)

public "saveInventory"(arg0: $SimpleContainer$Type, arg1: $ItemStack$Type): void
public "getBackpack"(): $BackpackType
public "getDefaultColor"(): integer
public "getInventory"(arg0: $ServerPlayer$Type, arg1: $ItemStack$Type): $SimpleContainer
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "shouldPlayUpdateAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "canBeDropped"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
public "open"(arg0: $ServerPlayer$Type, arg1: $ItemStack$Type, arg2: integer): void
public "addTooltip"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canAutoPickup"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public static "colorStack"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeColor$Type)>): $ItemStack
public "addColoredItem"<T extends ($Item) & ($DyeableItem)>(arg0: T): void
public "hasColor"(arg0: $ItemStack$Type): boolean
public "removeColor"(arg0: $ItemStack$Type): void
public static "colorStackDyeItem"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "getColor"(arg0: $ItemStack$Type): integer
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
get "backpack"(): $BackpackType
get "defaultColor"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackpackItem$Type = ($BackpackItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackpackItem_ = $BackpackItem$Type;
}}
declare module "packages/info/u_team/useful_backpacks/recipe/$BackpackCraftingRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $BackpackCraftingRecipe extends $ShapedRecipe {
readonly "width": integer
readonly "height": integer
readonly "recipeItems": $NonNullList<($Ingredient)>
readonly "result": $ItemStack
readonly "id": $ResourceLocation
readonly "group": string
readonly "category": $CraftingBookCategory
readonly "showNotification": boolean

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: integer, arg4: integer, arg5: $NonNullList$Type<($Ingredient$Type)>, arg6: $ItemStack$Type, arg7: boolean)

public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackpackCraftingRecipe$Type = ($BackpackCraftingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackpackCraftingRecipe_ = $BackpackCraftingRecipe$Type;
}}
declare module "packages/info/u_team/u_team_core/menutype/$UMenuType" {
import {$LecternMenu, $LecternMenu$Type} from "packages/net/minecraft/world/inventory/$LecternMenu"
import {$DispenserMenu, $DispenserMenu$Type} from "packages/net/minecraft/world/inventory/$DispenserMenu"
import {$SmithingMenu, $SmithingMenu$Type} from "packages/net/minecraft/world/inventory/$SmithingMenu"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$IContainerFactory, $IContainerFactory$Type} from "packages/net/minecraftforge/network/$IContainerFactory"
import {$GrindstoneMenu, $GrindstoneMenu$Type} from "packages/net/minecraft/world/inventory/$GrindstoneMenu"
import {$LoomMenu, $LoomMenu$Type} from "packages/net/minecraft/world/inventory/$LoomMenu"
import {$MerchantMenu, $MerchantMenu$Type} from "packages/net/minecraft/world/inventory/$MerchantMenu"
import {$MenuType$MenuSupplier, $MenuType$MenuSupplier$Type} from "packages/net/minecraft/world/inventory/$MenuType$MenuSupplier"
import {$BeaconMenu, $BeaconMenu$Type} from "packages/net/minecraft/world/inventory/$BeaconMenu"
import {$StonecutterMenu, $StonecutterMenu$Type} from "packages/net/minecraft/world/inventory/$StonecutterMenu"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$ChestMenu, $ChestMenu$Type} from "packages/net/minecraft/world/inventory/$ChestMenu"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$UMenuType$DataMenuSupplier, $UMenuType$DataMenuSupplier$Type} from "packages/info/u_team/u_team_core/menutype/$UMenuType$DataMenuSupplier"
import {$SmokerMenu, $SmokerMenu$Type} from "packages/net/minecraft/world/inventory/$SmokerMenu"
import {$FurnaceMenu, $FurnaceMenu$Type} from "packages/net/minecraft/world/inventory/$FurnaceMenu"
import {$AnvilMenu, $AnvilMenu$Type} from "packages/net/minecraft/world/inventory/$AnvilMenu"
import {$CraftingMenu, $CraftingMenu$Type} from "packages/net/minecraft/world/inventory/$CraftingMenu"
import {$CartographyTableMenu, $CartographyTableMenu$Type} from "packages/net/minecraft/world/inventory/$CartographyTableMenu"
import {$ShulkerBoxMenu, $ShulkerBoxMenu$Type} from "packages/net/minecraft/world/inventory/$ShulkerBoxMenu"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$EnchantmentMenu, $EnchantmentMenu$Type} from "packages/net/minecraft/world/inventory/$EnchantmentMenu"
import {$HopperMenu, $HopperMenu$Type} from "packages/net/minecraft/world/inventory/$HopperMenu"
import {$BrewingStandMenu, $BrewingStandMenu$Type} from "packages/net/minecraft/world/inventory/$BrewingStandMenu"
import {$BlastFurnaceMenu, $BlastFurnaceMenu$Type} from "packages/net/minecraft/world/inventory/$BlastFurnaceMenu"

export class $UMenuType<T extends $AbstractContainerMenu> extends $MenuType<(T)> {
static readonly "GENERIC_9x1": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x2": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x3": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x4": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x5": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x6": $MenuType<($ChestMenu)>
static readonly "GENERIC_3x3": $MenuType<($DispenserMenu)>
static readonly "ANVIL": $MenuType<($AnvilMenu)>
static readonly "BEACON": $MenuType<($BeaconMenu)>
static readonly "BLAST_FURNACE": $MenuType<($BlastFurnaceMenu)>
static readonly "BREWING_STAND": $MenuType<($BrewingStandMenu)>
static readonly "CRAFTING": $MenuType<($CraftingMenu)>
static readonly "ENCHANTMENT": $MenuType<($EnchantmentMenu)>
static readonly "FURNACE": $MenuType<($FurnaceMenu)>
static readonly "GRINDSTONE": $MenuType<($GrindstoneMenu)>
static readonly "HOPPER": $MenuType<($HopperMenu)>
static readonly "LECTERN": $MenuType<($LecternMenu)>
static readonly "LOOM": $MenuType<($LoomMenu)>
static readonly "MERCHANT": $MenuType<($MerchantMenu)>
static readonly "SHULKER_BOX": $MenuType<($ShulkerBoxMenu)>
static readonly "SMITHING": $MenuType<($SmithingMenu)>
static readonly "SMOKER": $MenuType<($SmokerMenu)>
static readonly "CARTOGRAPHY_TABLE": $MenuType<($CartographyTableMenu)>
static readonly "STONECUTTER": $MenuType<($StonecutterMenu)>
readonly "constructor": $MenuType$MenuSupplier<(T)>

constructor(arg0: $MenuType$MenuSupplier$Type<(T)>)
constructor(arg0: $UMenuType$DataMenuSupplier$Type<(T)>)

public "createWithExtraData"(arg0: integer, arg1: $Inventory$Type, arg2: $FriendlyByteBuf$Type): T
public static "create"<T extends $AbstractContainerMenu>(arg0: $IContainerFactory$Type<(T)>): $MenuType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UMenuType$Type<T> = ($UMenuType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UMenuType_<T> = $UMenuType$Type<(T)>;
}}
declare module "packages/info/u_team/useful_backpacks/item/$AutoPickupBackpack" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Backpack, $Backpack$Type} from "packages/info/u_team/useful_backpacks/api/$Backpack"

export interface $AutoPickupBackpack extends $Backpack {

 "addTooltip"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
 "canAutoPickup"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "saveInventory"(arg0: $SimpleContainer$Type, arg1: $ItemStack$Type): void
 "getInventory"(arg0: $ServerPlayer$Type, arg1: $ItemStack$Type): $SimpleContainer
 "open"(arg0: $ServerPlayer$Type, arg1: $ItemStack$Type, arg2: integer): void
}

export namespace $AutoPickupBackpack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoPickupBackpack$Type = ($AutoPickupBackpack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoPickupBackpack_ = $AutoPickupBackpack$Type;
}}
declare module "packages/info/u_team/u_team_core/recipeserializer/$UShapedRecipeSerializer" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$JsonArray, $JsonArray$Type} from "packages/com/google/gson/$JsonArray"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UShapedRecipeSerializer<T extends $ShapedRecipe> implements $RecipeSerializer<(T)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public static "itemStackFromJson"(arg0: $JsonObject$Type): $ItemStack
public static "itemFromJson"(arg0: $JsonObject$Type): $Item
public static "patternFromJson"(arg0: $JsonArray$Type): (string)[]
public static "dissolvePattern"(arg0: (string)[], arg1: $Map$Type<(string), ($Ingredient$Type)>, arg2: integer, arg3: integer): $NonNullList<($Ingredient)>
public static "keyFromJson"(arg0: $JsonObject$Type): $Map<(string), ($Ingredient)>
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public static "shrink"(...arg0: (string)[]): (string)[]
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UShapedRecipeSerializer$Type<T> = ($UShapedRecipeSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UShapedRecipeSerializer_<T> = $UShapedRecipeSerializer$Type<(T)>;
}}
declare module "packages/info/u_team/useful_backpacks/item/$TagFilterItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FilterItem, $FilterItem$Type} from "packages/info/u_team/useful_backpacks/item/$FilterItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TagFilterItem extends $FilterItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "isUsable"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canBeDropped"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagFilterItem$Type = ($TagFilterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TagFilterItem_ = $TagFilterItem$Type;
}}
