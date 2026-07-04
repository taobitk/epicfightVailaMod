declare module "packages/dev/ftb/mods/ftblibrary/icon/$Color4I" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$MutableColor4I, $MutableColor4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$MutableColor4I"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$PixelBuffer, $PixelBuffer$Type} from "packages/dev/ftb/mods/ftblibrary/math/$PixelBuffer"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $Color4I extends $Icon {
static readonly "BLACK": $Color4I
static readonly "DARK_GRAY": $Color4I
static readonly "GRAY": $Color4I
static readonly "WHITE": $Color4I
static readonly "RED": $Color4I
static readonly "GREEN": $Color4I
static readonly "BLUE": $Color4I
static readonly "LIGHT_RED": $Color4I
static readonly "LIGHT_GREEN": $Color4I
static readonly "LIGHT_BLUE": $Color4I


public "withAlpha"(a: integer): $Color4I
public "withColor"(color: $Color4I$Type): $Icon
public "hasPixelBuffer"(): boolean
public "createPixelBuffer"(): $PixelBuffer
public static "getChatFormattingColor"(id: integer): $Color4I
public static "getChatFormattingColor"(formatting: $ChatFormatting$Type): $Color4I
public static "get256"(id: integer): $Color4I
public static "hsb"(h: float, s: float, b: float): $Color4I
public "redi"(): integer
public "greeni"(): integer
public "bluei"(): integer
public "alphai"(): integer
public "whiteIfEmpty"(): $Color4I
public "alphaf"(): float
public "withAlphaf"(alpha: float): $Color4I
public "toStyle"(): $Style
public "getJson"(): $JsonElement
public "addBrightness"(percent: float): $Color4I
public static "HSBtoRGB"(hue: float, saturation: float, brightness: float): integer
public static "rgb"(col: integer): $Color4I
public static "rgb"(r: integer, g: integer, b: integer): $Color4I
public static "rgb"(color: $Vec3$Type): $Color4I
public "rgb"(): integer
public static "rgba"(r: integer, g: integer, b: integer, a: integer): $Color4I
public static "rgba"(col: integer): $Color4I
public "rgba"(): integer
public static "RGBtoHSB"(r: integer, g: integer, b: integer, hsbvals: (float)[]): (float)[]
public static "fromString"(s: string): $Color4I
public "redf"(): float
public "greenf"(): float
public "bluef"(): float
public "draw"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer): void
public static "fromJson"(element: $JsonElement$Type): $Color4I
public "mutable"(): $MutableColor4I
public "isMutable"(): boolean
public "lerp"(col: $Color4I$Type, m: float): $Color4I
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
get "json"(): $JsonElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color4I$Type = ($Color4I);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Color4I_ = $Color4I$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/integration/$RecipeModHelper$Components" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RecipeModHelper$Components extends $Enum<($RecipeModHelper$Components)> {
static readonly "QUESTS": $RecipeModHelper$Components
static readonly "LOOT_CRATES": $RecipeModHelper$Components


public static "values"(): ($RecipeModHelper$Components)[]
public static "valueOf"(name: string): $RecipeModHelper$Components
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeModHelper$Components$Type = (("quests") | ("loot_crates")) | ($RecipeModHelper$Components);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeModHelper$Components_ = $RecipeModHelper$Components$Type;
}}
declare module "packages/dev/ftb/mods/ftbxmodcompat/ftbquests/kubejs/$CustomTaskEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$CustomTaskEvent, $CustomTaskEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$CustomTaskEvent"
import {$CustomTask, $CustomTask$Type} from "packages/dev/ftb/mods/ftbquests/quest/task/$CustomTask"
import {$CustomTask$Check, $CustomTask$Check$Type} from "packages/dev/ftb/mods/ftbquests/quest/task/$CustomTask$Check"

export class $CustomTaskEventJS extends $EventJS {
readonly "event": $CustomTaskEvent


public "setCheck"(c: $CustomTask$Check$Type): void
public "setCheckTimer"(t: integer): void
public "setEnableButton"(b: boolean): void
public "setMaxProgress"(max: long): void
public "getTask"(): $CustomTask
set "check"(value: $CustomTask$Check$Type)
set "checkTimer"(value: integer)
set "enableButton"(value: boolean)
set "maxProgress"(value: long)
get "task"(): $CustomTask
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTaskEventJS$Type = ($CustomTaskEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTaskEventJS_ = $CustomTaskEventJS$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/loot/$WeightedReward" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Reward, $Reward$Type} from "packages/dev/ftb/mods/ftbquests/quest/reward/$Reward"

export class $WeightedReward implements $Comparable<($WeightedReward)> {

constructor(reward: $Reward$Type, weight: float)

public static "chanceString"(weight: float, totalWeight: float): string
public static "chanceString"(weight: float, totalWeight: float, empty: boolean): string
public "getReward"(): $Reward
public "setWeight"(weight: float): void
public "getWeight"(): float
public "compareTo"(o: $WeightedReward$Type): integer
get "reward"(): $Reward
set "weight"(value: float)
get "weight"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedReward$Type = ($WeightedReward);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedReward_ = $WeightedReward$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$ConfigFromString" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$ConfigCallback, $ConfigCallback$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigCallback"
import {$ConfigValue, $ConfigValue$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigValue"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"

export class $ConfigFromString<T> extends $ConfigValue<(T)> {
static readonly "NULL_TEXT": $Component
 "id": string

constructor()

public "onClicked"(clicked: $Widget$Type, button: $MouseButton$Type, callback: $ConfigCallback$Type): void
public "canScroll"(): boolean
public "getStringForGUI"(v: T): $Component
public "getStringFromValue"(v: T): string
public "scrollValue"(currentValue: T, forward: boolean): $Optional<(T)>
public "parse"(arg0: $Consumer$Type<(T)>, arg1: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigFromString$Type<T> = ($ConfigFromString<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigFromString_<T> = $ConfigFromString$Type<(T)>;
}}
declare module "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyArgument" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$StringReader, $StringReader$Type} from "packages/com/mojang/brigadier/$StringReader"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$TeamProperty, $TeamProperty$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$TeamProperty"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $TeamPropertyArgument implements $ArgumentType<($TeamProperty<(any)>)> {


public "listSuggestions"<S>(context: $CommandContext$Type<(S)>, builder: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
public "parse"(reader: $StringReader$Type): $TeamProperty<(any)>
public static "get"(context: $CommandContext$Type<($CommandSourceStack$Type)>, name: string): $TeamProperty<(any)>
public static "create"(): $TeamPropertyArgument
public "getExamples"(): $Collection<(string)>
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyArgument$Type = ($TeamPropertyArgument);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamPropertyArgument_ = $TeamPropertyArgument$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$NumberConfig" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ConfigFromString, $ConfigFromString$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigFromString"

export class $NumberConfig<T extends number> extends $ConfigFromString<(T)> {
static readonly "COLOR": $Color4I
readonly "min": T
readonly "max": T
 "fader": boolean
static readonly "NULL_TEXT": $Component
 "id": string

constructor(mn: T, mx: T)

public "fader"(v: boolean): $NumberConfig<(T)>
public "canScroll"(): boolean
public "getStringForGUI"(v: T): $Component
public "withScrollIncrement"(increment: T): $NumberConfig<(T)>
public "getColor"(v: T): $Color4I
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumberConfig$Type<T> = ($NumberConfig<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NumberConfig_<T> = $NumberConfig$Type<(T)>;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$WidgetLayout$Padding" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $WidgetLayout$Padding extends $Record {

constructor(vertical: integer, horizontal: integer)

public "vertical"(): integer
public "horizontal"(): integer
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetLayout$Padding$Type = ($WidgetLayout$Padding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetLayout$Padding_ = $WidgetLayout$Padding$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/item/$LootCrateItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootCrate, $LootCrate$Type} from "packages/dev/ftb/mods/ftbquests/quest/loot/$LootCrate"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LootCrateItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public static "getCrate"(stack: $ItemStack$Type): $LootCrate
public "use"(world: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "getName"(stack: $ItemStack$Type): $Component
public "isFoil"(stack: $ItemStack$Type): boolean
public "getRarity"(stack: $ItemStack$Type): $Rarity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCrateItem$Type = ($LootCrateItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootCrateItem_ = $LootCrateItem$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/$QuestShape" {
import {$ImageIcon, $ImageIcon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$ImageIcon"
import {$NameMap, $NameMap$Type} from "packages/dev/ftb/mods/ftblibrary/config/$NameMap"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$PixelBuffer, $PixelBuffer$Type} from "packages/dev/ftb/mods/ftblibrary/math/$PixelBuffer"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $QuestShape extends $Icon {
static "idMap": $NameMap<(string)>
static "idMapWithDefault": $NameMap<(string)>

constructor(id: string)

public "getOutline"(): $ImageIcon
public "shouldDraw"(): boolean
public "getBackground"(): $ImageIcon
public "getShape"(): $ImageIcon
public static "reload"(list: $List$Type<(string)>): void
public "draw"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer): void
public "getShapePixels"(): $PixelBuffer
public static "get"(id: string): $QuestShape
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "map"(): $Map<(string), ($QuestShape)>
get "outline"(): $ImageIcon
get "background"(): $ImageIcon
get "shape"(): $ImageIcon
get "shapePixels"(): $PixelBuffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestShape$Type = ($QuestShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestShape_ = $QuestShape$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/events/$CustomTaskEvent" {
import {$Event, $Event$Type} from "packages/dev/architectury/event/$Event"
import {$CustomTask, $CustomTask$Type} from "packages/dev/ftb/mods/ftbquests/quest/task/$CustomTask"
import {$EventActor, $EventActor$Type} from "packages/dev/architectury/event/$EventActor"

export class $CustomTaskEvent {
static readonly "EVENT": $Event<($EventActor<($CustomTaskEvent)>)>

constructor(t: $CustomTask$Type)

public "getTask"(): $CustomTask
get "task"(): $CustomTask
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTaskEvent$Type = ($CustomTaskEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTaskEvent_ = $CustomTaskEvent$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/snbt/$SNBTCompoundTag" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TagType, $TagType$Type} from "packages/net/minecraft/nbt/$TagType"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SNBTCompoundTag extends $CompoundTag {
static readonly "CODEC": $Codec<($CompoundTag)>
static readonly "TYPE": $TagType<($CompoundTag)>
readonly "tags": $Map<(string), ($Tag)>

constructor()

public "getCompound"(string: string): $SNBTCompoundTag
public "singleLine"(key: string): void
public "singleLine"(): void
public "putNumber"(key: string, number: number): void
public "getNullableList"(key: string, type: byte): $ListTag
public "putBoolean"(key: string, value: boolean): void
public "getComment"(key: string): string
public "putNull"(key: string): void
public "getList"<T extends $Tag>(key: string, type: $Class$Type<(T)>): $List<(T)>
public "isBoolean"(key: string): boolean
public static "of"(tag: $Tag$Type): $SNBTCompoundTag
public "comment"(key: string, comment: string): void
public "comment"(key: string, ...comment: (string)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SNBTCompoundTag$Type = ($SNBTCompoundTag);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SNBTCompoundTag_ = $SNBTCompoundTag$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/block/entity/$LootCrateOpenerBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LootCrateOpenerBlockEntity extends $BlockEntity {

constructor(blockPos: $BlockPos$Type, blockState: $BlockState$Type)

public "getOutputCount"(): integer
public "load"(compoundTag: $CompoundTag$Type): void
public "getOwner"(): $UUID
public "setOwner"(owner: $UUID$Type): void
get "outputCount"(): integer
get "owner"(): $UUID
set "owner"(value: $UUID$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCrateOpenerBlockEntity$Type = ($LootCrateOpenerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootCrateOpenerBlockEntity_ = $LootCrateOpenerBlockEntity$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/icon/$ImageIcon" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$IResourceIcon, $IResourceIcon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$IResourceIcon"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$PixelBuffer, $PixelBuffer$Type} from "packages/dev/ftb/mods/ftblibrary/math/$PixelBuffer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $ImageIcon extends $Icon implements $IResourceIcon {
static readonly "MISSING_IMAGE": $ResourceLocation
readonly "texture": $ResourceLocation
 "minU": float
 "minV": float
 "maxU": float
 "maxV": float
 "tileSize": double
 "color": $Color4I

constructor(tex: $ResourceLocation$Type)

public "withColor"(color: $Color4I$Type): $ImageIcon
public "hasPixelBuffer"(): boolean
public "createPixelBuffer"(): $PixelBuffer
public "aspectRatio"(): double
public "getResourceLocation"(): $ResourceLocation
public "draw"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer): void
public "bindTexture"(): void
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
get "resourceLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImageIcon$Type = ($ImageIcon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImageIcon_ = $ImageIcon$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/$TeamData" {
import {$Quest, $Quest$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Quest"
import {$BaseQuestFile, $BaseQuestFile$Type} from "packages/dev/ftb/mods/ftbquests/quest/$BaseQuestFile"
import {$Task, $Task$Type} from "packages/dev/ftb/mods/ftbquests/quest/task/$Task"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Date, $Date$Type} from "packages/java/util/$Date"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$SNBTCompoundTag, $SNBTCompoundTag$Type} from "packages/dev/ftb/mods/ftblibrary/snbt/$SNBTCompoundTag"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$LongSet, $LongSet$Type} from "packages/it/unimi/dsi/fastutil/longs/$LongSet"
import {$QuestObject, $QuestObject$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObject"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Reward, $Reward$Type} from "packages/dev/ftb/mods/ftbquests/quest/reward/$Reward"
import {$RewardClaimType, $RewardClaimType$Type} from "packages/dev/ftb/mods/ftbquests/quest/reward/$RewardClaimType"

export class $TeamData {
static readonly "VERSION": integer
static readonly "AUTO_PIN_ID": integer

constructor(teamId: $UUID$Type, file: $BaseQuestFile$Type)
constructor(teamId: $UUID$Type, file: $BaseQuestFile$Type, name: string)

public "markDirty"(): void
public "setCanEdit"(player: $Player$Type, newCanEdit: boolean): boolean
public "getCanEdit"(player: $Player$Type): boolean
public "getOnlineMembers"(): $Collection<($ServerPlayer)>
public "getStartedTime"(questId: long): $Optional<($Date)>
public "getCompletedTime"(questId: long): $Optional<($Date)>
public "getRewardClaimTime"(player: $UUID$Type, reward: $Reward$Type): $Optional<($Date)>
public "areRewardsBlocked"(): boolean
public "setRewardsBlocked"(rewardsBlocked: boolean): boolean
public "getMilliSecondsUntilRepeatable"(quest: $Quest$Type): long
public "markRewardAsClaimed"(player: $UUID$Type, reward: $Reward$Type, date: long): boolean
public "getCannotStartReason"(quest: $Quest$Type): $Component
public "mergeData"(from: $TeamData$Type): void
public "mergeClaimedRewards"(from: $TeamData$Type): void
public "checkAutoCompletion"(quest: $Quest$Type): void
public "areDependenciesComplete"(quest: $Quest$Type): boolean
public "markTaskCompleted"(task: $Task$Type): void
public "clearCachedProgress"(): void
public "addProgress"(task: $Task$Type, progress: long): void
public "isRewardClaimed"(player: $UUID$Type, reward: $Reward$Type): boolean
public "setProgress"(task: $Task$Type, progress: long): void
public "resetProgress"(task: $Task$Type): void
public "deleteReward"(reward: $Reward$Type): void
public "resetReward"(player: $UUID$Type, reward: $Reward$Type): boolean
public "claimReward"(player: $ServerPlayer$Type, reward: $Reward$Type, notify: boolean, when: long): void
public "claimReward"(player: $ServerPlayer$Type, reward: $Reward$Type, notify: boolean): void
public "getTeamId"(): $UUID
public "hasUnclaimedRewards"(player: $UUID$Type, object: $QuestObject$Type): boolean
public "getRelativeProgress"(object: $QuestObject$Type): integer
public "saveIfChanged"(): void
public "areDependenciesVisible"(quest: $Quest$Type): boolean
public "isRewardBlocked"(reward: $Reward$Type): boolean
public "getClaimType"(player: $UUID$Type, reward: $Reward$Type): $RewardClaimType
public "clearRepeatCooldown"(q: $Quest$Type): void
public "canStartTasks"(quest: $Quest$Type): boolean
public "getCompletionCount"(quest: $Quest$Type): integer
public "setLocked"(newLocked: boolean): boolean
public "isQuestPinned"(player: $Player$Type, id: long): boolean
public "setQuestPinned"(player: $Player$Type, id: long, pinned: boolean): void
public "isChapterPinned"(player: $Player$Type): boolean
public "setChapterPinned"(player: $Player$Type, pinned: boolean): void
public "isExcludedByOtherQuestline"(qo: $QuestObject$Type): boolean
public "getPinnedQuestIds"(player: $Player$Type): $LongSet
public "serializeNBT"(): $SNBTCompoundTag
public "deserializeNBT"(nbt: $SNBTCompoundTag$Type): void
public "getProgress"(taskId: long): long
public "getProgress"(task: $Task$Type): long
public "isLocked"(): boolean
public "setCompleted"(id: long, time: $Date$Type): boolean
public "isCompleted"(object: $QuestObject$Type): boolean
public "isStarted"(object: $QuestObject$Type): boolean
public "setStarted"(questId: long, time: $Date$Type): boolean
public "copyData"(from: $TeamData$Type): void
public "getName"(): string
public static "get"(player: $Player$Type): $TeamData
public "toString"(): string
public "write"(buffer: $FriendlyByteBuf$Type, self: boolean): void
public "read"(buffer: $FriendlyByteBuf$Type, self: boolean): void
public "setName"(name: string): void
public "getFile"(): $BaseQuestFile
get "onlineMembers"(): $Collection<($ServerPlayer)>
set "rewardsBlocked"(value: boolean)
get "teamId"(): $UUID
set "locked"(value: boolean)
get "locked"(): boolean
get "name"(): string
set "name"(value: string)
get "file"(): $BaseQuestFile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamData$Type = ($TeamData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamData_ = $TeamData$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/$Excludable" {
import {$TeamData, $TeamData$Type} from "packages/dev/ftb/mods/ftbquests/quest/$TeamData"

export interface $Excludable {

 "isQuestObjectExcluded"(arg0: $TeamData$Type): boolean
 "getId"(): long
}

export namespace $Excludable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Excludable$Type = ($Excludable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Excludable_ = $Excludable$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/reward/$RewardType$GuiProvider" {
import {$Quest, $Quest$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Quest"
import {$Panel, $Panel$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Panel"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Reward, $Reward$Type} from "packages/dev/ftb/mods/ftbquests/quest/reward/$Reward"

export interface $RewardType$GuiProvider {

 "openCreationGui"(arg0: $Panel$Type, arg1: $Quest$Type, arg2: $Consumer$Type<($Reward$Type)>): void

(arg0: $Panel$Type, arg1: $Quest$Type, arg2: $Consumer$Type<($Reward$Type)>): void
}

export namespace $RewardType$GuiProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardType$GuiProvider$Type = ($RewardType$GuiProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RewardType$GuiProvider_ = $RewardType$GuiProvider$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$ImageResourceConfig" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$OptionalLong, $OptionalLong$Type} from "packages/java/util/$OptionalLong"
import {$ConfigCallback, $ConfigCallback$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigCallback"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"
import {$ResourceConfigValue, $ResourceConfigValue$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ResourceConfigValue"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"
import {$SelectableResource, $SelectableResource$Type} from "packages/dev/ftb/mods/ftblibrary/config/ui/$SelectableResource"

export class $ImageResourceConfig extends $ResourceConfigValue<($ResourceLocation)> {
static readonly "NONE": $ResourceLocation
static readonly "NULL_TEXT": $Component
 "id": string

constructor()

public "addInfo"(list: $TooltipList$Type): void
public "onClicked"(clicked: $Widget$Type, button: $MouseButton$Type, callback: $ConfigCallback$Type): void
public "fixedResourceSize"(): $OptionalLong
public "allowEmptyResource"(): boolean
public "canHaveNBT"(): boolean
public static "getResourceLocation"(icon: $Icon$Type): $ResourceLocation
public "setResource"(selectedStack: $SelectableResource$Type<($ResourceLocation$Type)>): boolean
public "setAllowEmpty"(allowEmpty: boolean): void
public "isEmpty"(): boolean
public "getResource"(): $SelectableResource<($ResourceLocation)>
set "resource"(value: $SelectableResource$Type<($ResourceLocation$Type)>)
set "allowEmpty"(value: boolean)
get "empty"(): boolean
get "resource"(): $SelectableResource<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImageResourceConfig$Type = ($ImageResourceConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImageResourceConfig_ = $ImageResourceConfig$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/$ProgressionMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$NameMap, $NameMap$Type} from "packages/dev/ftb/mods/ftblibrary/config/$NameMap"

export class $ProgressionMode extends $Enum<($ProgressionMode)> {
static readonly "DEFAULT": $ProgressionMode
static readonly "LINEAR": $ProgressionMode
static readonly "FLEXIBLE": $ProgressionMode
static readonly "NAME_MAP": $NameMap<($ProgressionMode)>
static readonly "NAME_MAP_NO_DEFAULT": $NameMap<($ProgressionMode)>


public static "values"(): ($ProgressionMode)[]
public static "valueOf"(name: string): $ProgressionMode
public "getId"(): string
get "id"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressionMode$Type = (("default") | ("linear") | ("flexible")) | ($ProgressionMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressionMode_ = $ProgressionMode$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/icon/$Drawable" {
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $Drawable {

 "drawStatic"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer): void
 "draw3D"(graphics: $GuiGraphics$Type): void
 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void

(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer): void
}

export namespace $Drawable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Drawable$Type = ($Drawable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Drawable_ = $Drawable$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/block/$TaskScreenBlock$Aux" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$TaskScreenBlock, $TaskScreenBlock$Type} from "packages/dev/ftb/mods/ftbquests/block/$TaskScreenBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $TaskScreenBlock$Aux extends $TaskScreenBlock {
static readonly "FACING": $DirectionProperty
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


public "newBlockEntity"(blockPos: $BlockPos$Type, blockState: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskScreenBlock$Aux$Type = ($TaskScreenBlock$Aux);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaskScreenBlock$Aux_ = $TaskScreenBlock$Aux$Type;
}}
declare module "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyArgument$Info$Template" {
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$TeamPropertyArgument, $TeamPropertyArgument$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyArgument"
import {$TeamPropertyArgument$Info, $TeamPropertyArgument$Info$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyArgument$Info"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $TeamPropertyArgument$Info$Template implements $ArgumentTypeInfo$Template<($TeamPropertyArgument)> {

constructor(this$0: $TeamPropertyArgument$Info$Type)

public "type"(): $ArgumentTypeInfo<($TeamPropertyArgument), (any)>
public "instantiate"(commandBuildContext: $CommandBuildContext$Type): $TeamPropertyArgument
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyArgument$Info$Template$Type = ($TeamPropertyArgument$Info$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamPropertyArgument$Info$Template_ = $TeamPropertyArgument$Info$Template$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/$Movable" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Chapter, $Chapter$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Chapter"

export interface $Movable {

 "drawMoved"(graphics: $GuiGraphics$Type): void
 "getMovableID"(): long
 "copyToClipboard"(): void
 "getWidth"(): double
 "getChapter"(): $Chapter
 "onMoved"(arg0: double, arg1: double, arg2: long): void
 "getY"(): double
 "getShape"(): string
 "move"(arg0: $Chapter$Type, arg1: double, arg2: double): void
 "getTitle"(): $Component
 "getX"(): double
 "getHeight"(): double
}

export namespace $Movable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Movable$Type = ($Movable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Movable_ = $Movable$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/$ChapterGroup" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$BaseQuestFile, $BaseQuestFile$Type} from "packages/dev/ftb/mods/ftbquests/quest/$BaseQuestFile"
import {$ConfigGroup, $ConfigGroup$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigGroup"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$QuestObjectType, $QuestObjectType$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObjectType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$TeamData, $TeamData$Type} from "packages/dev/ftb/mods/ftbquests/quest/$TeamData"
import {$QuestObject, $QuestObject$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObject"
import {$QuestProgressEventData, $QuestProgressEventData$Type} from "packages/dev/ftb/mods/ftbquests/events/$QuestProgressEventData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Chapter, $Chapter$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Chapter"

export class $ChapterGroup extends $QuestObject {
readonly "id": long

constructor(id: long, file: $BaseQuestFile$Type)

public "isVisible"(data: $TeamData$Type): boolean
public "onCompleted"(data: $QuestProgressEventData$Type<(any)>): void
public "fillConfigGroup"(config: $ConfigGroup$Type): void
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "deleteSelf"(): void
public "editedFromGUI"(): void
public "onCreated"(): void
public "clearCachedData"(): void
public "getChapters"(): $List<($Chapter)>
public "isDefaultGroup"(): boolean
public "sortChapters"(c: $Comparator$Type<(any)>): void
public "addChapter"(chapter: $Chapter$Type): void
public "getVisibleChapters"(data: $TeamData$Type): $List<($Chapter)>
public "getFirstVisibleChapter"(data: $TeamData$Type): $Chapter
public "getQuestFile"(): $BaseQuestFile
public "removeChapter"(chapter: $Chapter$Type): void
public "moveChapterWithinGroup"(chapter: $Chapter$Type, movingUp: boolean): boolean
public "clearChapters"(): void
public "getRelativeProgressFromChildren"(data: $TeamData$Type): integer
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$Type, player: $UUID$Type): boolean
public "getObjectType"(): $QuestObjectType
public "getChildren"(): $Collection<(any)>
public "isFirstGroup"(): boolean
public "isLastGroup"(): boolean
public "toggleCollapsed"(): void
public "isGuiCollapsed"(): boolean
public "getFile"(): $BaseQuestFile
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "chapters"(): $List<($Chapter)>
get "defaultGroup"(): boolean
get "questFile"(): $BaseQuestFile
get "objectType"(): $QuestObjectType
get "children"(): $Collection<(any)>
get "firstGroup"(): boolean
get "lastGroup"(): boolean
get "guiCollapsed"(): boolean
get "file"(): $BaseQuestFile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChapterGroup$Type = ($ChapterGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChapterGroup_ = $ChapterGroup$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/item/$ScreenBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ScreenBlockItem$ScreenSize, $ScreenBlockItem$ScreenSize$Type} from "packages/dev/ftb/mods/ftbquests/item/$ScreenBlockItem$ScreenSize"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ScreenBlockItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(block: $Block$Type, size: $ScreenBlockItem$ScreenSize$Type)

public static "getSize"(stack: $ItemStack$Type): integer
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenBlockItem$Type = ($ScreenBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenBlockItem_ = $ScreenBlockItem$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$FluidConfig" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$OptionalLong, $OptionalLong$Type} from "packages/java/util/$OptionalLong"
import {$ConfigCallback, $ConfigCallback$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigCallback"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"
import {$ResourceConfigValue, $ResourceConfigValue$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ResourceConfigValue"
import {$FluidStack, $FluidStack$Type} from "packages/dev/architectury/fluid/$FluidStack"
import {$SelectableResource, $SelectableResource$Type} from "packages/dev/ftb/mods/ftblibrary/config/ui/$SelectableResource"

export class $FluidConfig extends $ResourceConfigValue<($FluidStack)> {
static readonly "NULL_TEXT": $Component
 "id": string

constructor(allowEmpty: boolean)
constructor(fixedSize: long)

public "onClicked"(clickedWidget: $Widget$Type, button: $MouseButton$Type, callback: $ConfigCallback$Type): void
public "fixedResourceSize"(): $OptionalLong
public "allowEmptyResource"(): boolean
public "getStringForGUI"(v: $FluidStack$Type): $Component
public "showAmount"(show: boolean): $FluidConfig
public "setResource"(selectedStack: $SelectableResource$Type<($FluidStack$Type)>): boolean
public "isEmpty"(): boolean
public "getResource"(): $SelectableResource<($FluidStack)>
set "resource"(value: $SelectableResource$Type<($FluidStack$Type)>)
get "empty"(): boolean
get "resource"(): $SelectableResource<($FluidStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidConfig$Type = ($FluidConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidConfig_ = $FluidConfig$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$LongConfig" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$NumberConfig, $NumberConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$NumberConfig"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"

export class $LongConfig extends $NumberConfig<(long)> {
static readonly "COLOR": $Color4I
readonly "min": T
readonly "max": T
 "fader": boolean
static readonly "NULL_TEXT": $Component
 "id": string

constructor(mn: long, mx: long)

public "addInfo"(list: $TooltipList$Type): void
public "scrollValue"(currentValue: long, forward: boolean): $Optional<(long)>
public "parse"(callback: $Consumer$Type<(long)>, string: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongConfig$Type = ($LongConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongConfig_ = $LongConfig$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/block/entity/$TaskScreenAuxBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$TaskScreenBlockEntity, $TaskScreenBlockEntity$Type} from "packages/dev/ftb/mods/ftbquests/block/entity/$TaskScreenBlockEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ITaskScreen, $ITaskScreen$Type} from "packages/dev/ftb/mods/ftbquests/block/entity/$ITaskScreen"
import {$Nameable, $Nameable$Type} from "packages/net/minecraft/world/$Nameable"

export class $TaskScreenAuxBlockEntity extends $BlockEntity implements $ITaskScreen, $Nameable {

constructor(blockPos: $BlockPos$Type, blockState: $BlockState$Type)

public "getSkin"(): $ItemStack
public "getTeamId"(): $UUID
public "setCoreScreen"(coreScreen: $TaskScreenBlockEntity$Type): void
public "getCoreScreen"(): $Optional<($TaskScreenBlockEntity)>
public "isInputOnly"(): boolean
public "isIndestructible"(): boolean
public "getName"(): $Component
public "load"(compoundTag: $CompoundTag$Type): void
public "getCustomName"(): $Component
public "getDisplayName"(): $Component
public "hasCustomName"(): boolean
get "skin"(): $ItemStack
get "teamId"(): $UUID
set "coreScreen"(value: $TaskScreenBlockEntity$Type)
get "coreScreen"(): $Optional<($TaskScreenBlockEntity)>
get "inputOnly"(): boolean
get "indestructible"(): boolean
get "name"(): $Component
get "customName"(): $Component
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskScreenAuxBlockEntity$Type = ($TaskScreenAuxBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaskScreenAuxBlockEntity_ = $TaskScreenAuxBlockEntity$Type;
}}
declare module "packages/dev/ftb/mods/ftbteams/data/$TeamArgument" {
import {$Dynamic2CommandExceptionType, $Dynamic2CommandExceptionType$Type} from "packages/com/mojang/brigadier/exceptions/$Dynamic2CommandExceptionType"
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$TeamArgumentProvider, $TeamArgumentProvider$Type} from "packages/dev/ftb/mods/ftbteams/data/$TeamArgumentProvider"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$DynamicCommandExceptionType, $DynamicCommandExceptionType$Type} from "packages/com/mojang/brigadier/exceptions/$DynamicCommandExceptionType"
import {$StringReader, $StringReader$Type} from "packages/com/mojang/brigadier/$StringReader"
import {$SimpleCommandExceptionType, $SimpleCommandExceptionType$Type} from "packages/com/mojang/brigadier/exceptions/$SimpleCommandExceptionType"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$Team, $Team$Type} from "packages/dev/ftb/mods/ftbteams/api/$Team"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $TeamArgument implements $ArgumentType<($TeamArgumentProvider)> {
static readonly "ALREADY_IN_PARTY": $SimpleCommandExceptionType
static readonly "PLAYER_IN_PARTY": $DynamicCommandExceptionType
static readonly "NOT_IN_PARTY": $SimpleCommandExceptionType
static readonly "TEAM_NOT_FOUND": $DynamicCommandExceptionType
static readonly "CANT_EDIT": $DynamicCommandExceptionType
static readonly "NOT_MEMBER": $Dynamic2CommandExceptionType
static readonly "NOT_OFFICER": $Dynamic2CommandExceptionType
static readonly "NOT_INVITED": $DynamicCommandExceptionType
static readonly "OWNER_CANT_LEAVE": $SimpleCommandExceptionType
static readonly "CANT_KICK_OWNER": $SimpleCommandExceptionType
static readonly "API_OVERRIDE": $SimpleCommandExceptionType
static readonly "NAME_TOO_SHORT": $SimpleCommandExceptionType
static readonly "NO_PERMISSION": $SimpleCommandExceptionType
static readonly "TEAM_ALREADY_EXISTS": $DynamicCommandExceptionType


public "listSuggestions"<S>(commandContext: $CommandContext$Type<(S)>, builder: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
public "parse"(reader: $StringReader$Type): $TeamArgumentProvider
public static "get"(context: $CommandContext$Type<($CommandSourceStack$Type)>, name: string): $Team
public static "create"(): $TeamArgument
public "getExamples"(): $Collection<(string)>
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamArgument$Type = ($TeamArgument);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamArgument_ = $TeamArgument$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/block/$DetectorBlock" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $DetectorBlock extends $BaseEntityBlock {
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

public "getRenderShape"(blockState: $BlockState$Type): $RenderShape
public "neighborChanged"(blockState: $BlockState$Type, level: $Level$Type, blockPos: $BlockPos$Type, block: $Block$Type, blockPos2: $BlockPos$Type, bl: boolean): void
public "setPlacedBy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $LivingEntity$Type, stack: $ItemStack$Type): void
public "newBlockEntity"(blockPos: $BlockPos$Type, blockState: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DetectorBlock$Type = ($DetectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DetectorBlock_ = $DetectorBlock$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$BaseScreen" {
import {$Panel, $Panel$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Panel"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModalPanel, $ModalPanel$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$ModalPanel"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$Key, $Key$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$Key"
import {$Window, $Window$Type} from "packages/com/mojang/blaze3d/platform/$Window"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ContextMenu, $ContextMenu$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$ContextMenu"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BooleanConsumer, $BooleanConsumer$Type} from "packages/dev/ftb/mods/ftblibrary/util/$BooleanConsumer"
import {$KeyModifiers, $KeyModifiers$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$KeyModifiers"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ContextMenuItem, $ContextMenuItem$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$ContextMenuItem"
import {$Theme, $Theme$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Theme"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"

export class $BaseScreen extends $Panel {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(previousScreen: $Screen$Type)
constructor()

public "getGui"(): $BaseScreen
public "isMouseOver"(widget: $Widget$Type): boolean
public "isMouseOver"(x: integer, y: integer, w: integer, h: integer): boolean
public "addMouseOverText"(list: $TooltipList$Type): void
public "updateMouseOver"(mouseX: integer, mouseY: integer): void
public "shouldAddMouseOverText"(): boolean
public "mousePressed"(button: $MouseButton$Type): boolean
public "mouseDoubleClicked"(button: $MouseButton$Type): boolean
public "setScrollX"(scroll: double): void
public "setScrollY"(scroll: double): void
public "getScrollX"(): double
public "getScrollY"(): double
public "drawBackground"(graphics: $GuiGraphics$Type, theme: $Theme$Type, x: integer, y: integer, w: integer, h: integer): void
public "initGui"(): void
public "onPostInit"(): void
public "getTheme"(): $Theme
public "shouldCloseOnEsc"(): boolean
public "pushModalPanel"(modalPanel: $ModalPanel$Type): void
public "popModalPanel"(): $ModalPanel
public "closeModalPanel"(panel: $ModalPanel$Type): void
public "anyModalPanelOpen"(): boolean
public "getPrevScreen"(): $Screen
public "usePreviousScreenOnBack"(): boolean
public "onClosedByKey"(key: $Key$Type): boolean
public "onBack"(): void
public "doesGuiPauseGame"(): boolean
public "updateGui"(mx: integer, my: integer, pt: float): void
public "getContextMenu"(): $Optional<($ModalPanel)>
public "openContextMenu"(newContextMenu: $ContextMenu$Type): void
public "openContextMenu"(menuItems: $List$Type<($ContextMenuItem$Type)>): $ContextMenu
public "drawDefaultBackground"(graphics: $GuiGraphics$Type): boolean
public "drawForeground"(graphics: $GuiGraphics$Type, theme: $Theme$Type, x: integer, y: integer, w: integer, h: integer): void
public "openYesNoFull"(title: $Component$Type, desc: $Component$Type, callback: $BooleanConsumer$Type): void
public "openYesNo"(title: $Component$Type, desc: $Component$Type, callback: $Runnable$Type): void
public "getPartialTicks"(): float
public "handleClick"(scheme: string, path: string): boolean
public "onClosed"(): void
public "closeGui"(openPrevScreen: boolean): void
public "alignWidgets"(): void
public "refreshWidgets"(): void
public "closeContextMenu"(): void
public "setFocusedWidget"(widget: $Widget$Type): void
public "openGui"(): void
public "mouseScrolled"(scroll: double): boolean
public "mouseDragged"(button: integer, dragX: double, dragY: double): boolean
public "mouseReleased"(button: $MouseButton$Type): void
public "charTyped"(c: character, modifiers: $KeyModifiers$Type): boolean
public "keyPressed"(key: $Key$Type): boolean
public "keyReleased"(key: $Key$Type): void
public "getY"(): integer
public "getScreen"(): $Window
public "onInit"(): boolean
public "draw"(graphics: $GuiGraphics$Type, theme: $Theme$Type, x: integer, y: integer, w: integer, h: integer): void
public "getX"(): integer
public "getMouseX"(): integer
public "getMouseY"(): integer
get "gui"(): $BaseScreen
set "scrollX"(value: double)
set "scrollY"(value: double)
get "scrollX"(): double
get "scrollY"(): double
get "theme"(): $Theme
get "prevScreen"(): $Screen
get "contextMenu"(): $Optional<($ModalPanel)>
get "partialTicks"(): float
set "focusedWidget"(value: $Widget$Type)
get "y"(): integer
get "screen"(): $Window
get "x"(): integer
get "mouseX"(): integer
get "mouseY"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseScreen$Type = ($BaseScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseScreen_ = $BaseScreen$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$NameMap$Builder" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NameMap, $NameMap$Type} from "packages/dev/ftb/mods/ftblibrary/config/$NameMap"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"

export class $NameMap$Builder<T> {


public "baseNameKey"(key: string): $NameMap$Builder<(T)>
public "icon"(p: $Function$Type<(T), ($Icon$Type)>): $NameMap$Builder<(T)>
public "nameKey"(p: $Function$Type<(T), (string)>): $NameMap$Builder<(T)>
public "name"(p: $Function$Type<(T), ($Component$Type)>): $NameMap$Builder<(T)>
public "id"(p: $Function$Type<(T), (string)>): $NameMap$Builder<(T)>
public "create"(): $NameMap<(T)>
public "color"(p: $Function$Type<(T), ($Color4I$Type)>): $NameMap$Builder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NameMap$Builder$Type<T> = ($NameMap$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NameMap$Builder_<T> = $NameMap$Builder$Type<(T)>;
}}
declare module "packages/dev/ftb/mods/ftbquests/item/$StageBarrierBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StageBarrierBlockItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StageBarrierBlockItem$Type = ($StageBarrierBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StageBarrierBlockItem_ = $StageBarrierBlockItem$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/$DefaultChapterGroup" {
import {$BaseQuestFile, $BaseQuestFile$Type} from "packages/dev/ftb/mods/ftbquests/quest/$BaseQuestFile"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$ChapterGroup, $ChapterGroup$Type} from "packages/dev/ftb/mods/ftbquests/quest/$ChapterGroup"

export class $DefaultChapterGroup extends $ChapterGroup {
readonly "id": long

constructor(f: $BaseQuestFile$Type)

public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
get "altTitle"(): $Component
get "altIcon"(): $Icon
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultChapterGroup$Type = ($DefaultChapterGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DefaultChapterGroup_ = $DefaultChapterGroup$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/reward/$Reward" {
import {$Quest, $Quest$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Quest"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfigGroup, $ConfigGroup$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigGroup"
import {$BaseQuestFile, $BaseQuestFile$Type} from "packages/dev/ftb/mods/ftbquests/quest/$BaseQuestFile"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$QuestObjectType, $QuestObjectType$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObjectType"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RewardAutoClaim, $RewardAutoClaim$Type} from "packages/dev/ftb/mods/ftbquests/quest/reward/$RewardAutoClaim"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Chapter, $Chapter$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Chapter"
import {$PositionedIngredient, $PositionedIngredient$Type} from "packages/dev/ftb/mods/ftblibrary/util/client/$PositionedIngredient"
import {$QuestObjectBase, $QuestObjectBase$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObjectBase"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$RecipeModHelper$Components, $RecipeModHelper$Components$Type} from "packages/dev/ftb/mods/ftbquests/integration/$RecipeModHelper$Components"
import {$ProgressChange, $ProgressChange$Type} from "packages/dev/ftb/mods/ftbquests/util/$ProgressChange"
import {$TeamData, $TeamData$Type} from "packages/dev/ftb/mods/ftbquests/quest/$TeamData"
import {$RewardType, $RewardType$Type} from "packages/dev/ftb/mods/ftbquests/quest/reward/$RewardType"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Button, $Button$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Button"

export class $Reward extends $QuestObjectBase {
readonly "id": long

constructor(id: long, q: $Quest$Type)

public "addMouseOverText"(list: $TooltipList$Type): void
public "forceProgress"(teamData: $TeamData$Type, progressChange: $ProgressChange$Type): void
public "getQuestChapter"(): $Chapter
public "getParentID"(): long
public "writeData"(nbt: $CompoundTag$Type): void
public "readData"(nbt: $CompoundTag$Type): void
public "writeNetData"(buffer: $FriendlyByteBuf$Type): void
public "readNetData"(buffer: $FriendlyByteBuf$Type): void
public "fillConfigGroup"(config: $ConfigGroup$Type): void
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "deleteSelf"(): void
public "deleteChildren"(): void
public "editedFromGUI"(): void
public "onCreated"(): void
public "createSubGroup"(group: $ConfigGroup$Type): $ConfigGroup
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "addTitleInMouseOverText"(): boolean
public "onButtonClicked"(button: $Button$Type, canClick: boolean): void
public "getButtonText"(): string
public "getExcludeFromClaimAll"(): boolean
public "isClaimAllHardcoded"(): boolean
public "automatedClaimPre"(blockEntity: $BlockEntity$Type, items: $List$Type<($ItemStack$Type)>, random: $RandomSource$Type, playerId: $UUID$Type, player: $ServerPlayer$Type): boolean
public "automatedClaimPost"(blockEntity: $BlockEntity$Type, playerId: $UUID$Type, player: $ServerPlayer$Type): void
public "isTeamReward"(): boolean
public "getAutoClaimType"(): $RewardAutoClaim
public "ignoreRewardBlocking"(): boolean
public "getQuestFile"(): $BaseQuestFile
public "getQuest"(): $Quest
public "getIngredient"(widget: $Widget$Type): $Optional<($PositionedIngredient)>
public "getObjectType"(): $QuestObjectType
public "claim"(arg0: $ServerPlayer$Type, arg1: boolean): void
public "getType"(): $RewardType
get "questChapter"(): $Chapter
get "parentID"(): long
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "buttonText"(): string
get "excludeFromClaimAll"(): boolean
get "claimAllHardcoded"(): boolean
get "teamReward"(): boolean
get "autoClaimType"(): $RewardAutoClaim
get "questFile"(): $BaseQuestFile
get "quest"(): $Quest
get "objectType"(): $QuestObjectType
get "type"(): $RewardType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reward$Type = ($Reward);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Reward_ = $Reward$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/events/$ObjectStartedEvent" {
import {$QuestObject, $QuestObject$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObject"
import {$ObjectProgressEvent, $ObjectProgressEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectProgressEvent"
import {$Event, $Event$Type} from "packages/dev/architectury/event/$Event"
import {$EventActor, $EventActor$Type} from "packages/dev/architectury/event/$EventActor"
import {$ObjectStartedEvent$QuestEvent, $ObjectStartedEvent$QuestEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectStartedEvent$QuestEvent"
import {$ObjectStartedEvent$FileEvent, $ObjectStartedEvent$FileEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectStartedEvent$FileEvent"
import {$ObjectStartedEvent$ChapterEvent, $ObjectStartedEvent$ChapterEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectStartedEvent$ChapterEvent"
import {$ObjectStartedEvent$TaskEvent, $ObjectStartedEvent$TaskEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectStartedEvent$TaskEvent"

export class $ObjectStartedEvent<T extends $QuestObject> extends $ObjectProgressEvent<(T)> {
static readonly "GENERIC": $Event<($EventActor<($ObjectStartedEvent<(any)>)>)>
static readonly "FILE": $Event<($EventActor<($ObjectStartedEvent$FileEvent)>)>
static readonly "CHAPTER": $Event<($EventActor<($ObjectStartedEvent$ChapterEvent)>)>
static readonly "QUEST": $Event<($EventActor<($ObjectStartedEvent$QuestEvent)>)>
static readonly "TASK": $Event<($EventActor<($ObjectStartedEvent$TaskEvent)>)>


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectStartedEvent$Type<T> = ($ObjectStartedEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectStartedEvent_<T> = $ObjectStartedEvent$Type<(T)>;
}}
declare module "packages/dev/ftb/mods/ftbquests/events/$ObjectCompletedEvent$TaskEvent" {
import {$Task, $Task$Type} from "packages/dev/ftb/mods/ftbquests/quest/task/$Task"
import {$Event, $Event$Type} from "packages/dev/architectury/event/$Event"
import {$ObjectCompletedEvent$QuestEvent, $ObjectCompletedEvent$QuestEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectCompletedEvent$QuestEvent"
import {$QuestProgressEventData, $QuestProgressEventData$Type} from "packages/dev/ftb/mods/ftbquests/events/$QuestProgressEventData"
import {$EventActor, $EventActor$Type} from "packages/dev/architectury/event/$EventActor"
import {$ObjectCompletedEvent$FileEvent, $ObjectCompletedEvent$FileEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectCompletedEvent$FileEvent"
import {$ObjectCompletedEvent$ChapterEvent, $ObjectCompletedEvent$ChapterEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectCompletedEvent$ChapterEvent"
import {$ObjectCompletedEvent, $ObjectCompletedEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectCompletedEvent"

export class $ObjectCompletedEvent$TaskEvent extends $ObjectCompletedEvent<($Task)> {
static readonly "GENERIC": $Event<($EventActor<($ObjectCompletedEvent<(any)>)>)>
static readonly "FILE": $Event<($EventActor<($ObjectCompletedEvent$FileEvent)>)>
static readonly "CHAPTER": $Event<($EventActor<($ObjectCompletedEvent$ChapterEvent)>)>
static readonly "QUEST": $Event<($EventActor<($ObjectCompletedEvent$QuestEvent)>)>
static readonly "TASK": $Event<($EventActor<($ObjectCompletedEvent$TaskEvent)>)>

constructor(d: $QuestProgressEventData$Type<($Task$Type)>)

public "getTask"(): $Task
get "task"(): $Task
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCompletedEvent$TaskEvent$Type = ($ObjectCompletedEvent$TaskEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCompletedEvent$TaskEvent_ = $ObjectCompletedEvent$TaskEvent$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$Widget$DrawLayer" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Widget$DrawLayer extends $Enum<($Widget$DrawLayer)> {
static readonly "BACKGROUND": $Widget$DrawLayer
static readonly "FOREGROUND": $Widget$DrawLayer


public static "values"(): ($Widget$DrawLayer)[]
public static "valueOf"(name: string): $Widget$DrawLayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Widget$DrawLayer$Type = (("background") | ("foreground")) | ($Widget$DrawLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Widget$DrawLayer_ = $Widget$DrawLayer$Type;
}}
declare module "packages/dev/ftb/mods/ftbteams/api/property/$TeamProperty" {
import {$ConfigGroup, $ConfigGroup$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigGroup"
import {$TeamPropertyType, $TeamPropertyType$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyType"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$TeamPropertyValue, $TeamPropertyValue$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyValue"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $TeamProperty<T> {


public "fromNBT"(tag: $Tag$Type): $Optional<(T)>
public "createDefaultValue"(): $TeamPropertyValue<(T)>
public "createValueFromNetwork"(buf: $FriendlyByteBuf$Type): $TeamPropertyValue<(T)>
public "createValueFromNBT"(tag: $Tag$Type): $TeamPropertyValue<(T)>
public "getTranslationKey"(prefix: string): string
public "toNBT"(value: T): $Tag
public "config"(config: $ConfigGroup$Type, value: $TeamPropertyValue$Type<(T)>): void
public "readValue"(buf: $FriendlyByteBuf$Type): T
public "fromString"(arg0: string): $Optional<(T)>
public "writeValue"(buf: $FriendlyByteBuf$Type, value: T): void
public "equals"(o: any): boolean
public "toString"(value: T): string
public "toString"(): string
public "hashCode"(): integer
public "write"(arg0: $FriendlyByteBuf$Type): void
public "getId"(): $ResourceLocation
public "getType"(): $TeamPropertyType<(T)>
public "getDefaultValue"(): T
get "id"(): $ResourceLocation
get "type"(): $TeamPropertyType<(T)>
get "defaultValue"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamProperty$Type<T> = ($TeamProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamProperty_<T> = $TeamProperty$Type<(T)>;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$ConfigWithVariants" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$ConfigCallback, $ConfigCallback$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigCallback"
import {$ConfigValue, $ConfigValue$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigValue"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"

export class $ConfigWithVariants<T> extends $ConfigValue<(T)> {
static readonly "NULL_TEXT": $Component
 "id": string

constructor()

public "onClicked"(clickedWidget: $Widget$Type, button: $MouseButton$Type, callback: $ConfigCallback$Type): void
public "getIteration"(arg0: T, arg1: boolean): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigWithVariants$Type<T> = ($ConfigWithVariants<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigWithVariants_<T> = $ConfigWithVariants$Type<(T)>;
}}
declare module "packages/dev/ftb/mods/ftblibrary/icon/$MutableColor4I" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"

export class $MutableColor4I extends $Color4I {
static readonly "TEMP": $Color4I
static readonly "BLACK": $Color4I
static readonly "DARK_GRAY": $Color4I
static readonly "GRAY": $Color4I
static readonly "WHITE": $Color4I
static readonly "RED": $Color4I
static readonly "GREEN": $Color4I
static readonly "BLUE": $Color4I
static readonly "LIGHT_RED": $Color4I
static readonly "LIGHT_GREEN": $Color4I
static readonly "LIGHT_BLUE": $Color4I


public "getJson"(): $JsonElement
public "addBrightness"(b: integer): $Color4I
public "setAlpha"(a: integer): $Color4I
public "setFromHSB"(h: float, s: float, b: float): $Color4I
public "mutable"(): $MutableColor4I
public "isMutable"(): boolean
public "set"(col: integer, a: integer): $Color4I
public "set"(r: integer, g: integer, b: integer, a: integer): $Color4I
public "set"(col: $Color4I$Type, a: integer): $Color4I
public "set"(col: $Color4I$Type): $Color4I
public "set"(col: integer): $Color4I
get "json"(): $JsonElement
set "alpha"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableColor4I$Type = ($MutableColor4I);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableColor4I_ = $MutableColor4I$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/api/event/$CustomFilterDisplayItemsEvent" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Event, $Event$Type} from "packages/dev/architectury/event/$Event"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $CustomFilterDisplayItemsEvent {
static readonly "ADD_ITEMSTACK": $Event<($Consumer<($CustomFilterDisplayItemsEvent)>)>

constructor(callback: $Consumer$Type<($ItemStack$Type)>)

public "add"(stack: $ItemStack$Type): void
public "add"(stacks: $Collection$Type<($ItemStack$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomFilterDisplayItemsEvent$Type = ($CustomFilterDisplayItemsEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomFilterDisplayItemsEvent_ = $CustomFilterDisplayItemsEvent$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$ConfigValue" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$ConfigGroup, $ConfigGroup$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigGroup"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$ConfigCallback, $ConfigCallback$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigCallback"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"

export class $ConfigValue<T> implements $Comparable<($ConfigValue<(T)>)> {
static readonly "NULL_TEXT": $Component
 "id": string

constructor()

public "addInfo"(list: $TooltipList$Type): void
public "onClicked"(arg0: $Widget$Type, arg1: $MouseButton$Type, arg2: $ConfigCallback$Type): void
public "setCanEdit"(e: boolean): $ConfigValue<(T)>
public "getStringForGUI"(): $Component
public "getStringForGUI"(v: T): $Component
public "setNameKey"(key: string): $ConfigValue<(T)>
public "setOrder"(o: integer): $ConfigValue<(T)>
public "getCanEdit"(): boolean
public "applyValue"(): void
public "setCurrentValue"(v: T): boolean
public "getTooltip"(): string
public "setIcon"(i: $Icon$Type): $ConfigValue<(T)>
public "setDefaultValue"(defaultValue: T): void
public "getColor"(v: T): $Color4I
public "getColor"(): $Color4I
public "isEqual"(v1: T, v2: T): boolean
public "getNameKey"(): string
public "getGroup"(): $ConfigGroup
public "getIcon"(v: T): $Icon
public "getIcon"(): $Icon
public "getName"(): string
public "compareTo"(o: $ConfigValue$Type<(T)>): integer
public "getValue"(): T
public static "info"(key: string, value: any): $Component
public "init"(group: $ConfigGroup$Type, id: string, value: T, setter: $Consumer$Type<(T)>, defaultValue: T): $ConfigValue<(T)>
public "setValue"(value: T): void
public "copy"(value: T): T
public "getDefaultValue"(): T
public "getPath"(): string
set "canEdit"(value: boolean)
get "stringForGUI"(): $Component
set "nameKey"(value: string)
set "order"(value: integer)
get "canEdit"(): boolean
set "currentValue"(value: T)
get "tooltip"(): string
set "icon"(value: $Icon$Type)
set "defaultValue"(value: T)
get "color"(): $Color4I
get "nameKey"(): string
get "group"(): $ConfigGroup
get "icon"(): $Icon
get "name"(): string
get "value"(): T
set "value"(value: T)
get "defaultValue"(): T
get "path"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigValue$Type<T> = ($ConfigValue<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigValue_<T> = $ConfigValue$Type<(T)>;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$ModalPanel" {
import {$Panel, $Panel$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Panel"

export class $ModalPanel extends $Panel {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(panel: $Panel$Type)

public "checkMouseOver"(mouseX: integer, mouseY: integer): boolean
public "getExtraZlevel"(): integer
public "setExtraZlevel"(extraZlevel: integer): void
get "extraZlevel"(): integer
set "extraZlevel"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModalPanel$Type = ($ModalPanel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModalPanel_ = $ModalPanel$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/loot/$LootCrate" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfigGroup, $ConfigGroup$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigGroup"
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$RewardTable, $RewardTable$Type} from "packages/dev/ftb/mods/ftbquests/quest/loot/$RewardTable"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$EntityWeight, $EntityWeight$Type} from "packages/dev/ftb/mods/ftbquests/quest/loot/$EntityWeight"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LootCrate {
static "LOOT_CRATES": $Map<(string), ($LootCrate)>

constructor(table: $RewardTable$Type, initFromTable: boolean)

public "initFromTable"(): void
public "writeData"(nbt: $CompoundTag$Type): void
public "readData"(nbt: $CompoundTag$Type): void
public "writeNetData"(data: $FriendlyByteBuf$Type): void
public "readNetData"(data: $FriendlyByteBuf$Type): void
public "fillConfigGroup"(config: $ConfigGroup$Type): void
public static "allCrateStacks"(): $Collection<($ItemStack)>
public "isGlow"(): boolean
public "getItemName"(): string
public "getStringID"(): string
public "getDrops"(): $EntityWeight
public "getColor"(): $Color4I
public "getTable"(): $RewardTable
public "createStack"(): $ItemStack
get "glow"(): boolean
get "itemName"(): string
get "stringID"(): string
get "drops"(): $EntityWeight
get "color"(): $Color4I
get "table"(): $RewardTable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCrate$Type = ($LootCrate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootCrate_ = $LootCrate$Type;
}}
declare module "packages/dev/ftb/mods/ftbteams/api/$TeamMessage" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export interface $TeamMessage {

 "sender"(): $UUID
 "text"(): $Component
 "date"(): long
}

export namespace $TeamMessage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamMessage$Type = ($TeamMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamMessage_ = $TeamMessage$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/events/$ObjectCompletedEvent$FileEvent" {
import {$BaseQuestFile, $BaseQuestFile$Type} from "packages/dev/ftb/mods/ftbquests/quest/$BaseQuestFile"
import {$ObjectCompletedEvent$TaskEvent, $ObjectCompletedEvent$TaskEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectCompletedEvent$TaskEvent"
import {$Event, $Event$Type} from "packages/dev/architectury/event/$Event"
import {$ObjectCompletedEvent$QuestEvent, $ObjectCompletedEvent$QuestEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectCompletedEvent$QuestEvent"
import {$QuestProgressEventData, $QuestProgressEventData$Type} from "packages/dev/ftb/mods/ftbquests/events/$QuestProgressEventData"
import {$EventActor, $EventActor$Type} from "packages/dev/architectury/event/$EventActor"
import {$ObjectCompletedEvent$ChapterEvent, $ObjectCompletedEvent$ChapterEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectCompletedEvent$ChapterEvent"
import {$ObjectCompletedEvent, $ObjectCompletedEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectCompletedEvent"

export class $ObjectCompletedEvent$FileEvent extends $ObjectCompletedEvent<($BaseQuestFile)> {
static readonly "GENERIC": $Event<($EventActor<($ObjectCompletedEvent<(any)>)>)>
static readonly "FILE": $Event<($EventActor<($ObjectCompletedEvent$FileEvent)>)>
static readonly "CHAPTER": $Event<($EventActor<($ObjectCompletedEvent$ChapterEvent)>)>
static readonly "QUEST": $Event<($EventActor<($ObjectCompletedEvent$QuestEvent)>)>
static readonly "TASK": $Event<($EventActor<($ObjectCompletedEvent$TaskEvent)>)>

constructor(d: $QuestProgressEventData$Type<($BaseQuestFile$Type)>)

public "getFile"(): $BaseQuestFile
get "file"(): $BaseQuestFile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCompletedEvent$FileEvent$Type = ($ObjectCompletedEvent$FileEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCompletedEvent$FileEvent_ = $ObjectCompletedEvent$FileEvent$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/events/$ObjectStartedEvent$QuestEvent" {
import {$Quest, $Quest$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Quest"
import {$Event, $Event$Type} from "packages/dev/architectury/event/$Event"
import {$QuestProgressEventData, $QuestProgressEventData$Type} from "packages/dev/ftb/mods/ftbquests/events/$QuestProgressEventData"
import {$EventActor, $EventActor$Type} from "packages/dev/architectury/event/$EventActor"
import {$ObjectStartedEvent, $ObjectStartedEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectStartedEvent"
import {$ObjectStartedEvent$FileEvent, $ObjectStartedEvent$FileEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectStartedEvent$FileEvent"
import {$ObjectStartedEvent$ChapterEvent, $ObjectStartedEvent$ChapterEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectStartedEvent$ChapterEvent"
import {$ObjectStartedEvent$TaskEvent, $ObjectStartedEvent$TaskEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectStartedEvent$TaskEvent"

export class $ObjectStartedEvent$QuestEvent extends $ObjectStartedEvent<($Quest)> {
static readonly "GENERIC": $Event<($EventActor<($ObjectStartedEvent<(any)>)>)>
static readonly "FILE": $Event<($EventActor<($ObjectStartedEvent$FileEvent)>)>
static readonly "CHAPTER": $Event<($EventActor<($ObjectStartedEvent$ChapterEvent)>)>
static readonly "QUEST": $Event<($EventActor<($ObjectStartedEvent$QuestEvent)>)>
static readonly "TASK": $Event<($EventActor<($ObjectStartedEvent$TaskEvent)>)>

constructor(d: $QuestProgressEventData$Type<($Quest$Type)>)

public "getQuest"(): $Quest
get "quest"(): $Quest
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectStartedEvent$QuestEvent$Type = ($ObjectStartedEvent$QuestEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectStartedEvent$QuestEvent_ = $ObjectStartedEvent$QuestEvent$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$EnumConfig" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NameMap, $NameMap$Type} from "packages/dev/ftb/mods/ftblibrary/config/$NameMap"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$ConfigCallback, $ConfigCallback$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigCallback"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"
import {$ConfigWithVariants, $ConfigWithVariants$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigWithVariants"

export class $EnumConfig<E> extends $ConfigWithVariants<(E)> {
readonly "nameMap": $NameMap<(E)>
static readonly "NULL_TEXT": $Component
 "id": string

constructor(nm: $NameMap$Type<(E)>)

public "addInfo"(list: $TooltipList$Type): void
public "onClicked"(clickedWidget: $Widget$Type, button: $MouseButton$Type, callback: $ConfigCallback$Type): void
public "getStringForGUI"(v: E): $Component
public "getIteration"(currentValue: E, next: boolean): E
public "getColor"(v: E): $Color4I
public "getIcon"(v: E): $Icon
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumConfig$Type<E> = ($EnumConfig<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumConfig_<E> = $EnumConfig$Type<(E)>;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$DoubleConfig" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$NumberConfig, $NumberConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$NumberConfig"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"

export class $DoubleConfig extends $NumberConfig<(double)> {
static readonly "COLOR": $Color4I
readonly "min": T
readonly "max": T
 "fader": boolean
static readonly "NULL_TEXT": $Component
 "id": string

constructor(mn: double, mx: double)

public "addInfo"(list: $TooltipList$Type): void
public "getStringFromValue"(v: double): string
public "scrollValue"(currentValue: double, forward: boolean): $Optional<(double)>
public "parse"(callback: $Consumer$Type<(double)>, string: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleConfig$Type = ($DoubleConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleConfig_ = $DoubleConfig$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$ConfigCallback" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ConfigCallback {

 "save"(arg0: boolean): void

(arg0: boolean): void
}

export namespace $ConfigCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigCallback$Type = ($ConfigCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigCallback_ = $ConfigCallback$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/util/$ProgressChange" {
import {$BaseQuestFile, $BaseQuestFile$Type} from "packages/dev/ftb/mods/ftbquests/quest/$BaseQuestFile"
import {$QuestObjectBase, $QuestObjectBase$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObjectBase"
import {$Date, $Date$Type} from "packages/java/util/$Date"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $ProgressChange {

constructor(file: $BaseQuestFile$Type, origin: $QuestObjectBase$Type, playerId: $UUID$Type)
constructor(f: $BaseQuestFile$Type, buffer: $FriendlyByteBuf$Type)

public "getPlayerId"(): $UUID
public "shouldNotify"(): boolean
public "setReset"(reset: boolean): $ProgressChange
public "withNotifications"(): $ProgressChange
public "maybeForceProgress"(teamId: $UUID$Type): void
public "shouldReset"(): boolean
public "getDate"(): $Date
public "write"(buffer: $FriendlyByteBuf$Type): void
get "playerId"(): $UUID
set "reset"(value: boolean)
get "date"(): $Date
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressChange$Type = ($ProgressChange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressChange_ = $ProgressChange$Type;
}}
declare module "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyType" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$PrivacyMode, $PrivacyMode$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$PrivacyMode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TeamProperty, $TeamProperty$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$TeamProperty"

export class $TeamPropertyType<T> {
static readonly "BOOLEAN": $TeamPropertyType<(boolean)>
static readonly "STRING": $TeamPropertyType<(string)>
static readonly "STRING_LIST": $TeamPropertyType<($List<(string)>)>
static readonly "INT": $TeamPropertyType<(integer)>
static readonly "DOUBLE": $TeamPropertyType<(double)>
static readonly "COLOR": $TeamPropertyType<($Color4I)>
static readonly "ENUM": $TeamPropertyType<(string)>
static readonly "PRIVACY_MODE": $TeamPropertyType<($PrivacyMode)>


public static "write"(buf: $FriendlyByteBuf$Type, p: $TeamProperty$Type<(any)>): void
public static "read"(buf: $FriendlyByteBuf$Type): $TeamProperty<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyType$Type<T> = ($TeamPropertyType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamPropertyType_<T> = $TeamPropertyType$Type<(T)>;
}}
declare module "packages/dev/ftb/mods/ftbquests/block/$TaskScreenBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$TaskScreenAuxBlockEntity, $TaskScreenAuxBlockEntity$Type} from "packages/dev/ftb/mods/ftbquests/block/entity/$TaskScreenAuxBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$TaskScreenBlockEntity, $TaskScreenBlockEntity$Type} from "packages/dev/ftb/mods/ftbquests/block/entity/$TaskScreenBlockEntity"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$ITaskScreen, $ITaskScreen$Type} from "packages/dev/ftb/mods/ftbquests/block/entity/$ITaskScreen"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $TaskScreenBlock extends $BaseEntityBlock {
static readonly "FACING": $DirectionProperty
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


public static "blockEntityProvider"(): $BlockEntityType$BlockEntitySupplier<($TaskScreenBlockEntity)>
public static "blockEntityAuxProvider"(): $BlockEntityType$BlockEntitySupplier<($TaskScreenAuxBlockEntity)>
public static "getMultiblockBounds"(corePos: $BlockPos$Type, size: integer, facing: $Direction$Type): $AABB
public static "hasPermissionToEdit"(player: $ServerPlayer$Type, screen: $ITaskScreen$Type): boolean
public "onRemove"(blockState: $BlockState$Type, level: $Level$Type, blockPos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(blockState: $BlockState$Type, level: $Level$Type, blockPos: $BlockPos$Type, player: $Player$Type, interactionHand: $InteractionHand$Type, blockHitResult: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "getStateForPlacement"(blockPlaceContext: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(level: $Level$Type, blockPos: $BlockPos$Type, blockState: $BlockState$Type, livingEntity: $LivingEntity$Type, itemStack: $ItemStack$Type): void
public "appendHoverText"(itemStack: $ItemStack$Type, blockGetter: $BlockGetter$Type, list: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
public "getDestroyProgress"(blockState: $BlockState$Type, player: $Player$Type, blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type): float
public "newBlockEntity"(blockPos: $BlockPos$Type, blockState: $BlockState$Type): $BlockEntity
public "getSize"(): integer
get "size"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskScreenBlock$Type = ($TaskScreenBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaskScreenBlock_ = $TaskScreenBlock$Type;
}}
declare module "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyValue" {
import {$TeamProperty, $TeamProperty$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$TeamProperty"

export class $TeamPropertyValue<T> {

constructor(property: $TeamProperty$Type<(T)>, value: T)
constructor(k: $TeamProperty$Type<(T)>)

public "getProperty"(): $TeamProperty<(T)>
public "toString"(): string
public "getValue"(): T
public "setValue"(value: T): void
public "copy"(): $TeamPropertyValue<(T)>
get "property"(): $TeamProperty<(T)>
get "value"(): T
set "value"(value: T)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyValue$Type<T> = ($TeamPropertyValue<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamPropertyValue_<T> = $TeamPropertyValue$Type<(T)>;
}}
declare module "packages/dev/ftb/mods/ftbquests/block/entity/$TaskScreenBlockEntity" {
import {$ConfigGroup, $ConfigGroup$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigGroup"
import {$Task, $Task$Type} from "packages/dev/ftb/mods/ftbquests/quest/task/$Task"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TeamData, $TeamData$Type} from "packages/dev/ftb/mods/ftbquests/quest/$TeamData"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ITaskScreen, $ITaskScreen$Type} from "packages/dev/ftb/mods/ftbquests/block/entity/$ITaskScreen"

export class $TaskScreenBlockEntity extends $BlockEntity implements $ITaskScreen {
 "fakeTextureUV": (float)[]

constructor(blockPos: $BlockPos$Type, blockState: $BlockState$Type)

public "getSkin"(): $ItemStack
public "fillConfigGroup"(data: $TeamData$Type): $ConfigGroup
public "getTeamId"(): $UUID
public "removeAllAuxScreens"(): void
public "setTeamId"(teamId: $UUID$Type): void
public "getCoreScreen"(): $Optional<($TaskScreenBlockEntity)>
public "isInputOnly"(): boolean
public "isIndestructible"(): boolean
public "getFakeTextureUV"(): (float)[]
public "setTask"(task: $Task$Type): void
public "setInputOnly"(inputOnly: boolean): void
public "getInputModeIcon"(): $ItemStack
public "setInputModeIcon"(inputModeIcon: $ItemStack$Type): void
public "setIndestructible"(indestructible: boolean): void
public "setSkin"(skin: $ItemStack$Type): void
public "isTextShadow"(): boolean
public "setTextShadow"(textShadow: boolean): void
public "getCachedTeamData"(): $TeamData
public "load"(compoundTag: $CompoundTag$Type): void
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "getUpdateTag"(): $CompoundTag
public "getTask"(): $Task
get "skin"(): $ItemStack
get "teamId"(): $UUID
set "teamId"(value: $UUID$Type)
get "coreScreen"(): $Optional<($TaskScreenBlockEntity)>
get "inputOnly"(): boolean
get "indestructible"(): boolean
get "fakeTextureUV"(): (float)[]
set "task"(value: $Task$Type)
set "inputOnly"(value: boolean)
get "inputModeIcon"(): $ItemStack
set "inputModeIcon"(value: $ItemStack$Type)
set "indestructible"(value: boolean)
set "skin"(value: $ItemStack$Type)
get "textShadow"(): boolean
set "textShadow"(value: boolean)
get "cachedTeamData"(): $TeamData
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "updateTag"(): $CompoundTag
get "task"(): $Task
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskScreenBlockEntity$Type = ($TaskScreenBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaskScreenBlockEntity_ = $TaskScreenBlockEntity$Type;
}}
declare module "packages/dev/ftb/mods/ftbxmodcompat/ftbquests/kubejs/$QuestObjectCompletedEventJS" {
import {$QuestObject, $QuestObject$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObject"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$FTBQuestsKubeJSTeamDataWrapper, $FTBQuestsKubeJSTeamDataWrapper$Type} from "packages/dev/ftb/mods/ftbxmodcompat/ftbquests/kubejs/$FTBQuestsKubeJSTeamDataWrapper"
import {$ServerEventJS, $ServerEventJS$Type} from "packages/dev/latvian/mods/kubejs/server/$ServerEventJS"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ObjectCompletedEvent, $ObjectCompletedEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectCompletedEvent"
import {$EntityArrayList, $EntityArrayList$Type} from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"

export class $QuestObjectCompletedEventJS extends $ServerEventJS {
readonly "event": $ObjectCompletedEvent<(any)>
readonly "server": $MinecraftServer

constructor(e: $ObjectCompletedEvent$Type<(any)>)

public "getNotifiedPlayers"(): $EntityArrayList
public "getOnlineMembers"(): $EntityArrayList
public "getPlayer"(): $ServerPlayer
public "getData"(): $FTBQuestsKubeJSTeamDataWrapper
public "getObject"(): $QuestObject
get "notifiedPlayers"(): $EntityArrayList
get "onlineMembers"(): $EntityArrayList
get "player"(): $ServerPlayer
get "data"(): $FTBQuestsKubeJSTeamDataWrapper
get "object"(): $QuestObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestObjectCompletedEventJS$Type = ($QuestObjectCompletedEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestObjectCompletedEventJS_ = $QuestObjectCompletedEventJS$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/events/$ObjectProgressEvent" {
import {$QuestObject, $QuestObject$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObject"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Date, $Date$Type} from "packages/java/util/$Date"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TeamData, $TeamData$Type} from "packages/dev/ftb/mods/ftbquests/quest/$TeamData"

export class $ObjectProgressEvent<T extends $QuestObject> {


public "getNotifiedPlayers"(): $List<($ServerPlayer)>
public "getOnlineMembers"(): $List<($ServerPlayer)>
public "getTime"(): $Date
public "getData"(): $TeamData
public "isCancelable"(): boolean
public "getObject"(): T
get "notifiedPlayers"(): $List<($ServerPlayer)>
get "onlineMembers"(): $List<($ServerPlayer)>
get "time"(): $Date
get "data"(): $TeamData
get "cancelable"(): boolean
get "object"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectProgressEvent$Type<T> = ($ObjectProgressEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectProgressEvent_<T> = $ObjectProgressEvent$Type<(T)>;
}}
declare module "packages/dev/ftb/mods/ftbquests/block/$LootCrateOpenerBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LootCrateOpenerBlockEntity, $LootCrateOpenerBlockEntity$Type} from "packages/dev/ftb/mods/ftbquests/block/entity/$LootCrateOpenerBlockEntity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $LootCrateOpenerBlock extends $Block implements $EntityBlock {
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

public static "blockEntityProvider"(): $BlockEntityType$BlockEntitySupplier<($LootCrateOpenerBlockEntity)>
public "use"(blockState: $BlockState$Type, level: $Level$Type, blockPos: $BlockPos$Type, player: $Player$Type, interactionHand: $InteractionHand$Type, blockHitResult: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "setPlacedBy"(level: $Level$Type, blockPos: $BlockPos$Type, blockState: $BlockState$Type, livingEntity: $LivingEntity$Type, itemStack: $ItemStack$Type): void
public "newBlockEntity"(blockPos: $BlockPos$Type, blockState: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCrateOpenerBlock$Type = ($LootCrateOpenerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootCrateOpenerBlock_ = $LootCrateOpenerBlock$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$Panel" {
import {$PositionedIngredient, $PositionedIngredient$Type} from "packages/dev/ftb/mods/ftblibrary/util/client/$PositionedIngredient"
import {$CursorType, $CursorType$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$CursorType"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$Key, $Key$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$Key"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$WidgetLayout, $WidgetLayout$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$WidgetLayout"
import {$KeyModifiers, $KeyModifiers$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$KeyModifiers"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Theme, $Theme$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Theme"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"

export class $Panel extends $Widget {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(panel: $Panel$Type)

public "addMouseOverText"(list: $TooltipList$Type): void
public "updateMouseOver"(mouseX: integer, mouseY: integer): void
public "mousePressed"(button: $MouseButton$Type): boolean
public "mouseDoubleClicked"(button: $MouseButton$Type): boolean
public "getIngredientUnderMouse"(): $Optional<($PositionedIngredient)>
public "getContentWidth"(): integer
public "getContentHeight"(): integer
public "isOffset"(): boolean
public "setScrollX"(scroll: double): void
public "setScrollY"(scroll: double): void
public "getScrollX"(): double
public "getScrollY"(): double
public "drawBackground"(graphics: $GuiGraphics$Type, theme: $Theme$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawWidget"(graphics: $GuiGraphics$Type, theme: $Theme$Type, widget: $Widget$Type, x: integer, y: integer, w: integer, h: integer): void
public "scrollPanel"(scroll: double): boolean
public "isDefaultScrollVertical"(): boolean
public "getScrollStep"(): double
public "movePanelScroll"(dx: double, dy: double): boolean
public "setScrollStep"(s: double): void
public "getWidget"(index: integer): $Widget
public "isMouseOverAnyWidget"(): boolean
public "getOnlyRenderWidgetsInside"(): boolean
public "onClosed"(): void
public "setOnlyRenderWidgetsInside"(value: boolean): void
public "getOnlyInteractWithWidgetsInside"(): boolean
public "setOnlyInteractWithWidgetsInside"(value: boolean): void
public "addWidgets"(): void
public "alignWidgets"(): void
public "clearWidgets"(): void
public "refreshWidgets"(): void
public "drawOffsetBackground"(graphics: $GuiGraphics$Type, theme: $Theme$Type, x: integer, y: integer, w: integer, h: integer): void
public "mouseScrolled"(scroll: double): boolean
public "mouseDragged"(button: integer, dragX: double, dragY: double): boolean
public "mouseReleased"(button: $MouseButton$Type): void
public "charTyped"(c: character, modifiers: $KeyModifiers$Type): boolean
public "keyPressed"(key: $Key$Type): boolean
public "keyReleased"(key: $Key$Type): void
public "tick"(): void
public "getY"(): integer
public "draw"(graphics: $GuiGraphics$Type, theme: $Theme$Type, x: integer, y: integer, w: integer, h: integer): void
public "align"(layout: $WidgetLayout$Type): integer
public "getCursor"(): $CursorType
public "getWidgets"(): $List<($Widget)>
public "getX"(): integer
public "add"(widget: $Widget$Type): void
public "addAll"(list: $Iterable$Type<(any)>): void
public "setOffset"(flag: boolean): void
get "ingredientUnderMouse"(): $Optional<($PositionedIngredient)>
get "contentWidth"(): integer
get "contentHeight"(): integer
get "offset"(): boolean
set "scrollX"(value: double)
set "scrollY"(value: double)
get "scrollX"(): double
get "scrollY"(): double
get "defaultScrollVertical"(): boolean
get "scrollStep"(): double
set "scrollStep"(value: double)
get "mouseOverAnyWidget"(): boolean
get "onlyRenderWidgetsInside"(): boolean
set "onlyRenderWidgetsInside"(value: boolean)
get "onlyInteractWithWidgetsInside"(): boolean
set "onlyInteractWithWidgetsInside"(value: boolean)
get "y"(): integer
get "cursor"(): $CursorType
get "widgets"(): $List<($Widget)>
get "x"(): integer
set "offset"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Panel$Type = ($Panel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Panel_ = $Panel$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/task/$CustomTask" {
import {$Quest, $Quest$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Quest"
import {$Task, $Task$Type} from "packages/dev/ftb/mods/ftbquests/quest/task/$Task"
import {$QuestObjectBase, $QuestObjectBase$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObjectBase"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$TaskType, $TaskType$Type} from "packages/dev/ftb/mods/ftbquests/quest/task/$TaskType"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TeamData, $TeamData$Type} from "packages/dev/ftb/mods/ftbquests/quest/$TeamData"
import {$CustomTask$Check, $CustomTask$Check$Type} from "packages/dev/ftb/mods/ftbquests/quest/task/$CustomTask$Check"
import {$Button, $Button$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Button"

export class $CustomTask extends $Task {
static readonly "PREDICATE": $Predicate<($QuestObjectBase)>
readonly "id": long

constructor(id: long, quest: $Quest$Type)

public "setCheck"(check: $CustomTask$Check$Type): void
public "setCheckTimer"(checkTimer: integer): void
public "setEnableButton"(enableButton: boolean): void
public "setMaxProgress"(maxProgress: long): void
public "getMaxProgress"(): long
public "writeNetData"(buffer: $FriendlyByteBuf$Type): void
public "readNetData"(buffer: $FriendlyByteBuf$Type): void
public "onButtonClicked"(button: $Button$Type, canClick: boolean): void
public "autoSubmitOnPlayerTick"(): integer
public "checkOnLogin"(): boolean
public "submitTask"(teamData: $TeamData$Type, player: $ServerPlayer$Type, craftedItem: $ItemStack$Type): void
public "getType"(): $TaskType
set "check"(value: $CustomTask$Check$Type)
set "checkTimer"(value: integer)
set "enableButton"(value: boolean)
set "maxProgress"(value: long)
get "maxProgress"(): long
get "type"(): $TaskType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTask$Type = ($CustomTask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTask_ = $CustomTask$Type;
}}
declare module "packages/dev/ftb/mods/ftbteams/data/$TeamArgument$Info" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$TeamArgument, $TeamArgument$Type} from "packages/dev/ftb/mods/ftbteams/data/$TeamArgument"
import {$TeamArgument$Info$Template, $TeamArgument$Info$Template$Type} from "packages/dev/ftb/mods/ftbteams/data/$TeamArgument$Info$Template"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"

export class $TeamArgument$Info implements $ArgumentTypeInfo<($TeamArgument), ($TeamArgument$Info$Template)> {

constructor()

public "serializeToNetwork"(template: $TeamArgument$Info$Template$Type, friendlyByteBuf: $FriendlyByteBuf$Type): void
public "deserializeFromNetwork"(friendlyByteBuf: $FriendlyByteBuf$Type): $TeamArgument$Info$Template
public "serializeToJson"(template: $TeamArgument$Info$Template$Type, jsonObject: $JsonObject$Type): void
public "unpack"(argumentType: $TeamArgument$Type): $TeamArgument$Info$Template
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamArgument$Info$Type = ($TeamArgument$Info);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamArgument$Info_ = $TeamArgument$Info$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/icon/$IResourceIcon" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IResourceIcon {

 "getResourceLocation"(): $ResourceLocation

(): $ResourceLocation
}

export namespace $IResourceIcon {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IResourceIcon$Type = ($IResourceIcon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IResourceIcon_ = $IResourceIcon$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/input/$KeyModifiers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $KeyModifiers {
static readonly "NONE": $KeyModifiers
readonly "modifiers": integer

constructor(m: integer)

public "numLock"(): boolean
public "capsLock"(): boolean
public "onlyControl"(): boolean
public "control"(): boolean
public "alt"(): boolean
public "start"(): boolean
public "shift"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyModifiers$Type = ($KeyModifiers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyModifiers_ = $KeyModifiers$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$ContextMenuItem" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Panel, $Panel$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Panel"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$ContextMenu, $ContextMenu$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$ContextMenu"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Theme, $Theme$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Theme"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"
import {$Button, $Button$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Button"

export class $ContextMenuItem implements $Comparable<($ContextMenuItem)> {
static readonly "SEPARATOR": $ContextMenuItem

constructor(title: $Component$Type, icon: $Icon$Type, callback: $Consumer$Type<($Button$Type)>)

public "setCloseMenu"(v: boolean): $ContextMenuItem
public static "subMenu"(title: $Component$Type, icon: $Icon$Type, subItems: $List$Type<($ContextMenuItem$Type)>): $ContextMenuItem
public "getYesNoText"(): $Component
public "setYesNoText"(s: $Component$Type): $ContextMenuItem
public "isClickable"(): boolean
public "onClicked"(button: $Button$Type, panel: $Panel$Type, mouseButton: $MouseButton$Type): void
public "addMouseOverText"(list: $TooltipList$Type): void
public "createWidget"(panel: $ContextMenu$Type): $Widget
public "drawIcon"(graphics: $GuiGraphics$Type, theme: $Theme$Type, x: integer, y: integer, w: integer, h: integer): void
public "isEnabled"(): boolean
public static "title"(title: $Component$Type): $ContextMenuItem
public "getTitle"(): $Component
public "setEnabled"(enabled: boolean): $ContextMenuItem
public "getIcon"(): $Icon
public "compareTo"(o: $ContextMenuItem$Type): integer
public static "separator"(): $ContextMenuItem
set "closeMenu"(value: boolean)
get "yesNoText"(): $Component
set "yesNoText"(value: $Component$Type)
get "clickable"(): boolean
get "enabled"(): boolean
set "enabled"(value: boolean)
get "icon"(): $Icon
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextMenuItem$Type = ($ContextMenuItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContextMenuItem_ = $ContextMenuItem$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/$Chapter" {
import {$Quest, $Quest$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Quest"
import {$BaseQuestFile, $BaseQuestFile$Type} from "packages/dev/ftb/mods/ftbquests/quest/$BaseQuestFile"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfigGroup, $ConfigGroup$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigGroup"
import {$QuestObjectType, $QuestObjectType$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObjectType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$Movable, $Movable$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Movable"
import {$TeamData, $TeamData$Type} from "packages/dev/ftb/mods/ftbquests/quest/$TeamData"
import {$ChapterImage, $ChapterImage$Type} from "packages/dev/ftb/mods/ftbquests/quest/$ChapterImage"
import {$QuestObject, $QuestObject$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObject"
import {$ProgressionMode, $ProgressionMode$Type} from "packages/dev/ftb/mods/ftbquests/quest/$ProgressionMode"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$QuestProgressEventData, $QuestProgressEventData$Type} from "packages/dev/ftb/mods/ftbquests/events/$QuestProgressEventData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$QuestLink, $QuestLink$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestLink"
import {$ChapterGroup, $ChapterGroup$Type} from "packages/dev/ftb/mods/ftbquests/quest/$ChapterGroup"

export class $Chapter extends $QuestObject {
readonly "file": $BaseQuestFile
readonly "id": long

constructor(id: long, file: $BaseQuestFile$Type, group: $ChapterGroup$Type)
constructor(id: long, file: $BaseQuestFile$Type, group: $ChapterGroup$Type, filename: string)

public "isVisible"(data: $TeamData$Type): boolean
public "onStarted"(data: $QuestProgressEventData$Type<(any)>): void
public "onCompleted"(data: $QuestProgressEventData$Type<(any)>): void
public "getQuestChapter"(): $Chapter
public "writeData"(nbt: $CompoundTag$Type): void
public "readData"(nbt: $CompoundTag$Type): void
public "writeNetData"(buffer: $FriendlyByteBuf$Type): void
public "readNetData"(buffer: $FriendlyByteBuf$Type): void
public "fillConfigGroup"(config: $ConfigGroup$Type): void
public "getAltIcon"(): $Icon
public "deleteSelf"(): void
public "deleteChildren"(): void
public "onCreated"(): void
public "clearCachedData"(): void
public "consumeItems"(): boolean
public "hideQuestDetailsUntilStartable"(): boolean
public "getQuests"(): $List<($Quest)>
public "getQuestLinks"(): $List<($QuestLink)>
public "addQuest"(quest: $Quest$Type): void
public "addQuestLink"(link: $QuestLink$Type): void
public "getDefaultQuestShape"(): string
public "getProgressionMode"(): $ProgressionMode
public "hideQuestUntilDepsComplete"(): boolean
public "isHideQuestUntilDepsVisible"(): boolean
public "addImage"(image: $ChapterImage$Type): void
public "setDefaultQuestShape"(defaultQuestShape: string): void
public "getDefaultMinWidth"(): integer
public "getImages"(): $List<($ChapterImage)>
public "hasGroup"(): boolean
public "removeImage"(image: $ChapterImage$Type): void
public "removeQuestLink"(link: $QuestLink$Type): void
public "hasAnyVisibleChildren"(): boolean
public "getAutofocus"(): $Optional<($Movable)>
public "setAutofocus"(id: long): void
public "isAutofocus"(id: long): boolean
public "getRawSubtitle"(): $List<(string)>
public "getDefaultQuestSize"(): double
public "isDefaultRepeatable"(): boolean
public "isRequireSequentialTasks"(): boolean
public "removeQuest"(quest: $Quest$Type): void
public "getQuestFile"(): $BaseQuestFile
public "isAlwaysInvisible"(): boolean
public "getRelativeProgressFromChildren"(data: $TeamData$Type): integer
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$Type, player: $UUID$Type): boolean
public "getObjectType"(): $QuestObjectType
public "getChildren"(): $Collection<(any)>
public "getGroup"(): $ChapterGroup
public "getFilename"(): string
public "getPath"(): $Optional<(string)>
public "getIndex"(): integer
get "questChapter"(): $Chapter
get "altIcon"(): $Icon
get "quests"(): $List<($Quest)>
get "questLinks"(): $List<($QuestLink)>
get "defaultQuestShape"(): string
get "progressionMode"(): $ProgressionMode
get "hideQuestUntilDepsVisible"(): boolean
set "defaultQuestShape"(value: string)
get "defaultMinWidth"(): integer
get "images"(): $List<($ChapterImage)>
get "autofocus"(): $Optional<($Movable)>
set "autofocus"(value: long)
get "rawSubtitle"(): $List<(string)>
get "defaultQuestSize"(): double
get "defaultRepeatable"(): boolean
get "requireSequentialTasks"(): boolean
get "questFile"(): $BaseQuestFile
get "alwaysInvisible"(): boolean
get "objectType"(): $QuestObjectType
get "children"(): $Collection<(any)>
get "group"(): $ChapterGroup
get "filename"(): string
get "path"(): $Optional<(string)>
get "index"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Chapter$Type = ($Chapter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Chapter_ = $Chapter$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$StringConfig" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ConfigFromString, $ConfigFromString$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigFromString"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"

export class $StringConfig extends $ConfigFromString<(string)> {
static readonly "COLOR": $Color4I
readonly "pattern": $Pattern
static readonly "NULL_TEXT": $Component
 "id": string

constructor(p: $Pattern$Type)
constructor()

public "addInfo"(list: $TooltipList$Type): void
public "getStringForGUI"(v: string): $Component
public "getColor"(v: string): $Color4I
public "parse"(callback: $Consumer$Type<(string)>, string: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringConfig$Type = ($StringConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringConfig_ = $StringConfig$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/events/$QuestProgressEventData" {
import {$QuestObject, $QuestObject$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObject"
import {$Date, $Date$Type} from "packages/java/util/$Date"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TeamData, $TeamData$Type} from "packages/dev/ftb/mods/ftbquests/quest/$TeamData"

export class $QuestProgressEventData<T extends $QuestObject> {

constructor(date: $Date$Type, teamData: $TeamData$Type, object: T, online: $Collection$Type<($ServerPlayer$Type)>, notified: $Collection$Type<($ServerPlayer$Type)>)

public "getNotifiedPlayers"(): $List<($ServerPlayer)>
public "getOnlineMembers"(): $List<($ServerPlayer)>
public "getTeamData"(): $TeamData
public "withObject"<N extends $QuestObject>(o: N): $QuestProgressEventData<(N)>
public "notifyPlayers"(id: long): void
public "getTime"(): $Date
public "setCompleted"(id: long): void
public "setStarted"(id: long): void
public "getObject"(): T
get "notifiedPlayers"(): $List<($ServerPlayer)>
get "onlineMembers"(): $List<($ServerPlayer)>
get "teamData"(): $TeamData
get "time"(): $Date
set "completed"(value: long)
set "started"(value: long)
get "object"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestProgressEventData$Type<T> = ($QuestProgressEventData<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestProgressEventData_<T> = $QuestProgressEventData$Type<(T)>;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/$ChapterImage" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfigGroup, $ConfigGroup$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigGroup"
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$Movable, $Movable$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Movable"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$TeamData, $TeamData$Type} from "packages/dev/ftb/mods/ftbquests/quest/$TeamData"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$WeakReference, $WeakReference$Type} from "packages/java/lang/ref/$WeakReference"
import {$Chapter, $Chapter$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Chapter"

export class $ChapterImage implements $Movable {
static readonly "FTBQ_IMAGE": string
static "clipboard": $WeakReference<($ChapterImage)>

constructor(c: $Chapter$Type)

public "setImage"(image: $Icon$Type): $ChapterImage
public "isAlignToCorner"(): boolean
public "getClick"(): string
public "addHoverText"(list: $TooltipList$Type): void
public "isAspectRatioOff"(): boolean
public "fixupAspectRatio"(adjustWidth: boolean): void
public "shouldShowImage"(teamData: $TeamData$Type): boolean
public static "isImageInClipboard"(): boolean
public "setPosition"(x: double, y: double): $ChapterImage
public "writeData"(nbt: $CompoundTag$Type): $CompoundTag
public "readData"(nbt: $CompoundTag$Type): void
public "writeNetData"(buffer: $FriendlyByteBuf$Type): void
public "readNetData"(buffer: $FriendlyByteBuf$Type): void
public "fillConfigGroup"(config: $ConfigGroup$Type): void
public "drawMoved"(graphics: $GuiGraphics$Type): void
public "getMovableID"(): long
public "copyToClipboard"(): void
public "getWidth"(): double
public "getChapter"(): $Chapter
public "onMoved"(x: double, y: double, chapterId: long): void
public "getAlpha"(): integer
public "getColor"(): $Color4I
public "getImage"(): $Icon
public "getY"(): double
public "getOrder"(): integer
public "getShape"(): string
public "move"(to: $Chapter$Type, _x: double, _y: double): void
public "getTitle"(): $Component
public "getX"(): double
public "getRotation"(): double
public "getHeight"(): double
public "copy"(newChapter: $Chapter$Type, newX: double, newY: double): $ChapterImage
set "image"(value: $Icon$Type)
get "alignToCorner"(): boolean
get "click"(): string
get "aspectRatioOff"(): boolean
get "imageInClipboard"(): boolean
get "movableID"(): long
get "width"(): double
get "chapter"(): $Chapter
get "alpha"(): integer
get "color"(): $Color4I
get "image"(): $Icon
get "y"(): double
get "order"(): integer
get "shape"(): string
get "title"(): $Component
get "x"(): double
get "rotation"(): double
get "height"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChapterImage$Type = ($ChapterImage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChapterImage_ = $ChapterImage$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/task/$CustomTask$Data" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$CustomTask, $CustomTask$Type} from "packages/dev/ftb/mods/ftbquests/quest/task/$CustomTask"
import {$TeamData, $TeamData$Type} from "packages/dev/ftb/mods/ftbquests/quest/$TeamData"

export class $CustomTask$Data extends $Record {

constructor(task: $CustomTask$Type, teamData: $TeamData$Type)

public "teamData"(): $TeamData
public "addProgress"(l: long): void
public "setProgress"(l: long): void
public "getProgress"(): long
public "task"(): $CustomTask
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
set "progress"(value: long)
get "progress"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTask$Data$Type = ($CustomTask$Data);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTask$Data_ = $CustomTask$Data$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/icon/$Icon" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Drawable, $Drawable$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Drawable"
import {$PixelBuffer, $PixelBuffer$Type} from "packages/dev/ftb/mods/ftblibrary/math/$PixelBuffer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $Icon implements $Drawable {

constructor()

public "withPadding"(padding: integer): $Icon
public "withTint"(color: $Color4I$Type): $Icon
public "withBorder"(color: $Color4I$Type, roundEdges: boolean): $Icon
public "withColor"(color: $Color4I$Type): $Icon
public "withUV"(u0: float, v0: float, u1: float, v1: float): $Icon
public "withUV"(x: float, y: float, w: float, h: float, tw: float, th: float): $Icon
public "hasPixelBuffer"(): boolean
public "createPixelBuffer"(): $PixelBuffer
public "aspectRatio"(): double
public "getPixelBufferFrameCount"(): integer
public "getJson"(): $JsonElement
public "getIngredient"(): any
public static "getIcon"(id: string): $Icon
public static "getIcon"(id: $ResourceLocation$Type): $Icon
public static "getIcon"(json: $JsonElement$Type): $Icon
public "combineWith"(icon: $Icon$Type): $Icon
public "combineWith"(...icons: ($Icon$Type)[]): $Icon
public "equals"(o: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "empty"(): $Color4I
public "copy"(): $Icon
public "drawStatic"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer): void
public "draw3D"(graphics: $GuiGraphics$Type): void
public "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
get "pixelBufferFrameCount"(): integer
get "json"(): $JsonElement
get "ingredient"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Icon$Type = ($Icon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Icon_ = $Icon$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/events/$ObjectCompletedEvent$ChapterEvent" {
import {$ObjectCompletedEvent$TaskEvent, $ObjectCompletedEvent$TaskEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectCompletedEvent$TaskEvent"
import {$Event, $Event$Type} from "packages/dev/architectury/event/$Event"
import {$ObjectCompletedEvent$QuestEvent, $ObjectCompletedEvent$QuestEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectCompletedEvent$QuestEvent"
import {$QuestProgressEventData, $QuestProgressEventData$Type} from "packages/dev/ftb/mods/ftbquests/events/$QuestProgressEventData"
import {$EventActor, $EventActor$Type} from "packages/dev/architectury/event/$EventActor"
import {$ObjectCompletedEvent$FileEvent, $ObjectCompletedEvent$FileEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectCompletedEvent$FileEvent"
import {$Chapter, $Chapter$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Chapter"
import {$ObjectCompletedEvent, $ObjectCompletedEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectCompletedEvent"

export class $ObjectCompletedEvent$ChapterEvent extends $ObjectCompletedEvent<($Chapter)> {
static readonly "GENERIC": $Event<($EventActor<($ObjectCompletedEvent<(any)>)>)>
static readonly "FILE": $Event<($EventActor<($ObjectCompletedEvent$FileEvent)>)>
static readonly "CHAPTER": $Event<($EventActor<($ObjectCompletedEvent$ChapterEvent)>)>
static readonly "QUEST": $Event<($EventActor<($ObjectCompletedEvent$QuestEvent)>)>
static readonly "TASK": $Event<($EventActor<($ObjectCompletedEvent$TaskEvent)>)>

constructor(d: $QuestProgressEventData$Type<($Chapter$Type)>)

public "getChapter"(): $Chapter
get "chapter"(): $Chapter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCompletedEvent$ChapterEvent$Type = ($ObjectCompletedEvent$ChapterEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCompletedEvent$ChapterEvent_ = $ObjectCompletedEvent$ChapterEvent$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$IScreenWrapper" {
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BaseScreen, $BaseScreen$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$BaseScreen"
import {$IOpenableScreen, $IOpenableScreen$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$IOpenableScreen"

export interface $IScreenWrapper extends $IOpenableScreen {

 "getGui"(): $BaseScreen
 "closeGui"(openPrevScreen: boolean): void
 "openGui"(): void
 "closeGui"(): void
 "openGuiLater"(): void
 "closeContextMenu"(): void
 "openAfter"(runnable: $Runnable$Type): $Runnable
 "run"(): void

(): $BaseScreen
}

export namespace $IScreenWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenWrapper$Type = ($IScreenWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScreenWrapper_ = $IScreenWrapper$Type;
}}
declare module "packages/dev/ftb/mods/ftbxmodcompat/ftbquests/kubejs/$FTBQuestsKubeJSPlayerData" {
import {$BaseQuestFile, $BaseQuestFile$Type} from "packages/dev/ftb/mods/ftbquests/quest/$BaseQuestFile"
import {$FTBQuestsKubeJSTeamData, $FTBQuestsKubeJSTeamData$Type} from "packages/dev/ftb/mods/ftbxmodcompat/ftbquests/kubejs/$FTBQuestsKubeJSTeamData"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TeamData, $TeamData$Type} from "packages/dev/ftb/mods/ftbquests/quest/$TeamData"

export class $FTBQuestsKubeJSPlayerData extends $FTBQuestsKubeJSTeamData {

constructor(p: $Player$Type)

public "getData"(): $TeamData
public "getFile"(): $BaseQuestFile
get "data"(): $TeamData
get "file"(): $BaseQuestFile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FTBQuestsKubeJSPlayerData$Type = ($FTBQuestsKubeJSPlayerData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FTBQuestsKubeJSPlayerData_ = $FTBQuestsKubeJSPlayerData$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/block/entity/$ITaskScreen" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$TaskScreenBlockEntity, $TaskScreenBlockEntity$Type} from "packages/dev/ftb/mods/ftbquests/block/entity/$TaskScreenBlockEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ITaskScreen {

 "getSkin"(): $ItemStack
 "getTeamId"(): $UUID
 "getCoreScreen"(): $Optional<($TaskScreenBlockEntity)>
 "isInputOnly"(): boolean
 "isIndestructible"(): boolean
}

export namespace $ITaskScreen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITaskScreen$Type = ($ITaskScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITaskScreen_ = $ITaskScreen$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$ColorConfig" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$ConfigCallback, $ConfigCallback$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigCallback"
import {$ConfigValue, $ConfigValue$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigValue"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"

export class $ColorConfig extends $ConfigValue<($Color4I)> {
static readonly "NULL_TEXT": $Component
 "id": string

constructor()

public "withAlphaEditing"(): $ColorConfig
public "isAllowAlphaEdit"(): boolean
public "onClicked"(clicked: $Widget$Type, button: $MouseButton$Type, callback: $ConfigCallback$Type): void
public "getStringForGUI"(v: $Color4I$Type): $Component
get "allowAlphaEdit"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorConfig$Type = ($ColorConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorConfig_ = $ColorConfig$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/task/$CustomTask$Check" {
import {$CustomTask$Data, $CustomTask$Data$Type} from "packages/dev/ftb/mods/ftbquests/quest/task/$CustomTask$Data"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"

export interface $CustomTask$Check {

 "check"(arg0: $CustomTask$Data$Type, arg1: $ServerPlayer$Type): void

(arg0: $CustomTask$Data$Type, arg1: $ServerPlayer$Type): void
}

export namespace $CustomTask$Check {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTask$Check$Type = ($CustomTask$Check);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTask$Check_ = $CustomTask$Check$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$ResourceConfigValue" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$OptionalLong, $OptionalLong$Type} from "packages/java/util/$OptionalLong"
import {$ConfigValue, $ConfigValue$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigValue"
import {$SelectableResource, $SelectableResource$Type} from "packages/dev/ftb/mods/ftblibrary/config/ui/$SelectableResource"

export class $ResourceConfigValue<T> extends $ConfigValue<(T)> {
static readonly "NULL_TEXT": $Component
 "id": string

constructor()

public "fixedResourceSize"(): $OptionalLong
public "allowEmptyResource"(): boolean
public "canHaveNBT"(): boolean
public "setAllowNBTEdit"(allow: boolean): $ResourceConfigValue<(T)>
public "setResource"(arg0: $SelectableResource$Type<(T)>): boolean
public "isEmpty"(): boolean
public "getResource"(): $SelectableResource<(T)>
set "allowNBTEdit"(value: boolean)
set "resource"(value: $SelectableResource$Type<(T)>)
get "empty"(): boolean
get "resource"(): $SelectableResource<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceConfigValue$Type<T> = ($ResourceConfigValue<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceConfigValue_<T> = $ResourceConfigValue$Type<(T)>;
}}
declare module "packages/dev/ftb/mods/ftblibrary/util/$TooltipList" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $TooltipList {
 "zOffset": integer
 "zOffsetItemTooltip": integer
 "backgroundColor": integer
 "borderColorStart": integer
 "borderColorEnd": integer
 "maxWidth": integer
 "xOffset": integer
 "yOffset": integer

constructor()

public "styledTranslate"(key: string, style: $Style$Type, ...objects: (any)[]): void
public "styledString"(text: string, style: $Style$Type): void
public "styledString"(text: string, color: $ChatFormatting$Type): void
public "blankLine"(): void
public "shouldRender"(): boolean
public "string"(text: string): void
public "render"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, screenWidth: integer, screenHeight: integer, font: $Font$Type): void
public "getLines"(): $List<($Component)>
public "translate"(key: string, ...objects: (any)[]): void
public "add"(component: $Component$Type): void
public "reset"(): void
get "lines"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipList$Type = ($TooltipList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TooltipList_ = $TooltipList$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/item/$TaskScreenConfiguratorItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$GlobalPos, $GlobalPos$Type} from "packages/net/minecraft/core/$GlobalPos"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TaskScreenConfiguratorItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public static "readBlockPos"(stack: $ItemStack$Type): $Optional<($GlobalPos)>
public static "storeBlockPos"(itemInHand: $ItemStack$Type, level: $Level$Type, clickedPos: $BlockPos$Type): void
public "useOn"(ctx: $UseOnContext$Type): $InteractionResult
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$Type, level: $Level$Type, list: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskScreenConfiguratorItem$Type = ($TaskScreenConfiguratorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaskScreenConfiguratorItem_ = $TaskScreenConfiguratorItem$Type;
}}
declare module "packages/dev/ftb/mods/ftbteams/api/$Team" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TeamRank, $TeamRank$Type} from "packages/dev/ftb/mods/ftbteams/api/$TeamRank"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$TeamMessage, $TeamMessage$Type} from "packages/dev/ftb/mods/ftbteams/api/$TeamMessage"
import {$TeamProperty, $TeamProperty$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$TeamProperty"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TeamPropertyCollection, $TeamPropertyCollection$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyCollection"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $Team {

 "getPlayersByRank"(arg0: $TeamRank$Type): $Map<($UUID), ($TeamRank)>
 "getTypeTranslationKey"(): string
 "isClientTeam"(): boolean
 "getColoredName"(): $Component
 "isServerTeam"(): boolean
 "getTeamInfo"(): $List<($Component)>
 "markDirty"(): void
 "sendMessage"(arg0: $UUID$Type, arg1: string): void
 "getMessageHistory"(): $List<($TeamMessage)>
 "createParty"(arg0: string, arg1: $Color4I$Type): $Team
 "getRankForPlayer"(arg0: $UUID$Type): $TeamRank
 "getOnlineMembers"(): $Collection<($ServerPlayer)>
 "isPlayerTeam"(): boolean
 "isPartyTeam"(): boolean
 "getTeamId"(): $UUID
 "isValid"(): boolean
 "getOwner"(): $UUID
 "getShortName"(): string
 "getExtraData"(): $CompoundTag
 "getName"(): $Component
 "getProperty"<T>(arg0: $TeamProperty$Type<(T)>): T
 "setProperty"<T>(arg0: $TeamProperty$Type<(T)>, arg1: T): void
 "getProperties"(): $TeamPropertyCollection
 "getId"(): $UUID
 "getMembers"(): $Set<($UUID)>
}

export namespace $Team {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Team$Type = ($Team);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Team_ = $Team$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$WidgetType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WidgetType extends $Enum<($WidgetType)> {
static readonly "NORMAL": $WidgetType
static readonly "MOUSE_OVER": $WidgetType
static readonly "DISABLED": $WidgetType


public static "mouseOver"(mouseOver: boolean): $WidgetType
public static "values"(): ($WidgetType)[]
public static "valueOf"(name: string): $WidgetType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetType$Type = (("normal") | ("mouse_over") | ("disabled")) | ($WidgetType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetType_ = $WidgetType$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$ContextMenu" {
import {$Panel, $Panel$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Panel"
import {$ModalPanel, $ModalPanel$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$ModalPanel"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ContextMenuItem, $ContextMenuItem$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$ContextMenuItem"
import {$Theme, $Theme$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Theme"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $ContextMenu extends $ModalPanel {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(panel: $Panel$Type, i: $List$Type<($ContextMenuItem$Type)>)

public "mousePressed"(button: $MouseButton$Type): boolean
public "drawBackground"(graphics: $GuiGraphics$Type, theme: $Theme$Type, x: integer, y: integer, w: integer, h: integer): void
public "addWidgets"(): void
public "alignWidgets"(): void
public "setMaxRows"(maxRows: integer): void
public "setDrawVerticalSeparators"(drawVerticalSeparators: boolean): void
public "draw"(graphics: $GuiGraphics$Type, theme: $Theme$Type, x: integer, y: integer, w: integer, h: integer): void
set "maxRows"(value: integer)
set "drawVerticalSeparators"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextMenu$Type = ($ContextMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContextMenu_ = $ContextMenu$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$Button" {
import {$Panel, $Panel$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Panel"
import {$PositionedIngredient, $PositionedIngredient$Type} from "packages/dev/ftb/mods/ftblibrary/util/client/$PositionedIngredient"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CursorType, $CursorType$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$CursorType"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Theme, $Theme$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Theme"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $Button extends $Widget {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(panel: $Panel$Type)
constructor(panel: $Panel$Type, t: $Component$Type, i: $Icon$Type)

public "setTitle"(s: $Component$Type): $Button
public "onClicked"(arg0: $MouseButton$Type): void
public "mousePressed"(button: $MouseButton$Type): boolean
public "getIngredientUnderMouse"(): $Optional<($PositionedIngredient)>
public "drawBackground"(graphics: $GuiGraphics$Type, theme: $Theme$Type, x: integer, y: integer, w: integer, h: integer): void
public "setIcon"(i: $Icon$Type): $Button
public "drawIcon"(graphics: $GuiGraphics$Type, theme: $Theme$Type, x: integer, y: integer, w: integer, h: integer): void
public "getTitle"(): $Component
public "draw"(graphics: $GuiGraphics$Type, theme: $Theme$Type, x: integer, y: integer, w: integer, h: integer): void
public "getCursor"(): $CursorType
set "title"(value: $Component$Type)
get "ingredientUnderMouse"(): $Optional<($PositionedIngredient)>
set "icon"(value: $Icon$Type)
get "title"(): $Component
get "cursor"(): $CursorType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Button$Type = ($Button);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Button_ = $Button$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/math/$PixelBuffer" {
import {$BufferedImage, $BufferedImage$Type} from "packages/java/awt/image/$BufferedImage"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"

export class $PixelBuffer {

constructor(w: integer, h: integer)

public "toImage"(type: integer): $BufferedImage
public "toByteBuffer"(alpha: boolean): $ByteBuffer
public "setRGB"(startX: integer, startY: integer, w: integer, h: integer, rgbArray: (integer)[]): void
public "setRGB"(x: integer, y: integer, col: integer): void
public "setRGB"(startX: integer, startY: integer, buffer: $PixelBuffer$Type): void
public "getWidth"(): integer
public "getRGB"(startX: integer, startY: integer, w: integer, h: integer, p: (integer)[]): (integer)[]
public "getRGB"(x: integer, y: integer): integer
public "getSubimage"(x: integer, y: integer, w: integer, h: integer): $PixelBuffer
public "getHeight"(): integer
public "setPixels"(p: (integer)[]): void
public "getPixels"(): (integer)[]
public "equals"(o: any): boolean
public "hashCode"(): integer
public "fill"(col: integer): void
public "fill"(startX: integer, startY: integer, w: integer, h: integer, col: integer): void
public static "from"(stream: $InputStream$Type): $PixelBuffer
public static "from"(img: $BufferedImage$Type): $PixelBuffer
public "copy"(): $PixelBuffer
get "width"(): integer
get "height"(): integer
set "pixels"(value: (integer)[])
get "pixels"(): (integer)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PixelBuffer$Type = ($PixelBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PixelBuffer_ = $PixelBuffer$Type;
}}
declare module "packages/dev/ftb/mods/ftbxmodcompat/ftbquests/kubejs/$QuestObjectStartedEventJS" {
import {$QuestObject, $QuestObject$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObject"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$FTBQuestsKubeJSTeamDataWrapper, $FTBQuestsKubeJSTeamDataWrapper$Type} from "packages/dev/ftb/mods/ftbxmodcompat/ftbquests/kubejs/$FTBQuestsKubeJSTeamDataWrapper"
import {$ServerEventJS, $ServerEventJS$Type} from "packages/dev/latvian/mods/kubejs/server/$ServerEventJS"
import {$ObjectStartedEvent, $ObjectStartedEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectStartedEvent"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$EntityArrayList, $EntityArrayList$Type} from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"

export class $QuestObjectStartedEventJS extends $ServerEventJS {
readonly "event": $ObjectStartedEvent<(any)>
readonly "server": $MinecraftServer

constructor(e: $ObjectStartedEvent$Type<(any)>)

public "getNotifiedPlayers"(): $EntityArrayList
public "getOnlineMembers"(): $EntityArrayList
public "getPlayer"(): $ServerPlayer
public "getData"(): $FTBQuestsKubeJSTeamDataWrapper
public "getObject"(): $QuestObject
get "notifiedPlayers"(): $EntityArrayList
get "onlineMembers"(): $EntityArrayList
get "player"(): $ServerPlayer
get "data"(): $FTBQuestsKubeJSTeamDataWrapper
get "object"(): $QuestObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestObjectStartedEventJS$Type = ($QuestObjectStartedEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestObjectStartedEventJS_ = $QuestObjectStartedEventJS$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/item/$ScreenBlockItem$ScreenSize" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ScreenBlockItem$ScreenSize extends $Enum<($ScreenBlockItem$ScreenSize)> {
static readonly "ONE_X_ONE": $ScreenBlockItem$ScreenSize
static readonly "THREE_X_THREE": $ScreenBlockItem$ScreenSize
static readonly "FIVE_X_FIVE": $ScreenBlockItem$ScreenSize
static readonly "SEVEN_X_SEVEN": $ScreenBlockItem$ScreenSize


public static "values"(): ($ScreenBlockItem$ScreenSize)[]
public static "valueOf"(name: string): $ScreenBlockItem$ScreenSize
public "getSize"(): integer
get "size"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenBlockItem$ScreenSize$Type = (("three_x_three") | ("one_x_one") | ("five_x_five") | ("seven_x_seven")) | ($ScreenBlockItem$ScreenSize);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenBlockItem$ScreenSize_ = $ScreenBlockItem$ScreenSize$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/item/$QuestBookItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $QuestBookItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(world: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $Level$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestBookItem$Type = ($QuestBookItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestBookItem_ = $QuestBookItem$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/$Quest" {
import {$Task, $Task$Type} from "packages/dev/ftb/mods/ftbquests/quest/task/$Task"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfigGroup, $ConfigGroup$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigGroup"
import {$BaseQuestFile, $BaseQuestFile$Type} from "packages/dev/ftb/mods/ftbquests/quest/$BaseQuestFile"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$QuestObjectType, $QuestObjectType$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObjectType"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Tristate, $Tristate$Type} from "packages/dev/ftb/mods/ftblibrary/config/$Tristate"
import {$QuestObject, $QuestObject$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObject"
import {$QuestProgressEventData, $QuestProgressEventData$Type} from "packages/dev/ftb/mods/ftbquests/events/$QuestProgressEventData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Reward, $Reward$Type} from "packages/dev/ftb/mods/ftbquests/quest/reward/$Reward"
import {$Chapter, $Chapter$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Chapter"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$RecipeModHelper$Components, $RecipeModHelper$Components$Type} from "packages/dev/ftb/mods/ftbquests/integration/$RecipeModHelper$Components"
import {$ProgressChange, $ProgressChange$Type} from "packages/dev/ftb/mods/ftbquests/util/$ProgressChange"
import {$Movable, $Movable$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Movable"
import {$TeamData, $TeamData$Type} from "packages/dev/ftb/mods/ftbquests/quest/$TeamData"
import {$Excludable, $Excludable$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Excludable"
import {$ProgressionMode, $ProgressionMode$Type} from "packages/dev/ftb/mods/ftbquests/quest/$ProgressionMode"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"

export class $Quest extends $QuestObject implements $Movable, $Excludable {
static readonly "PAGEBREAK_CODE": string
readonly "id": long

constructor(id: long, chapter: $Chapter$Type)

public "addTask"(task: $Task$Type): void
public "isVisible"(data: $TeamData$Type): boolean
public "onStarted"(data: $QuestProgressEventData$Type<(any)>): void
public "onCompleted"(data: $QuestProgressEventData$Type<(any)>): void
public "areDependenciesComplete"(teamData: $TeamData$Type): boolean
public "forceProgress"(teamData: $TeamData$Type, progressChange: $ProgressChange$Type): void
public "getQuestChapter"(): $Chapter
public "getParentID"(): long
public "writeData"(nbt: $CompoundTag$Type): void
public "readData"(nbt: $CompoundTag$Type): void
public "writeNetData"(buffer: $FriendlyByteBuf$Type): void
public "readNetData"(buffer: $FriendlyByteBuf$Type): void
public "fillConfigGroup"(config: $ConfigGroup$Type): void
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "deleteSelf"(): void
public "deleteChildren"(): void
public "editedFromGUI"(): void
public "onCreated"(): void
public "clearCachedData"(): void
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "allTasksCompleted"(teamData: $TeamData$Type): boolean
public "removeTask"(task: $Task$Type): void
public "removeReward"(reward: $Reward$Type): void
public "setTaskList"(tasks: $List$Type<($Task$Type)>): void
public "setRewardList"(rewards: $List$Type<($Reward$Type)>): void
public "getRepeatCooldown"(): integer
public "buildDescriptionIndex"(): $List<($Pair<(integer), (integer)>)>
public "isQuestObjectExcluded"(teamData: $TeamData$Type): boolean
public "isExclusiveQuest"(): boolean
public "moveTaskLeft"(task: $Task$Type): void
public "moveTaskRight"(task: $Task$Type): void
public "moveRewardLeft"(reward: $Reward$Type): void
public "moveRewardRight"(reward: $Reward$Type): void
public "getTasks"(): $Collection<($Task)>
public "writeTasks"(tag: $CompoundTag$Type): void
public "getRewards"(): $Collection<($Reward)>
public "writeRewards"(tag: $CompoundTag$Type): void
public "removeInvalidDependencies"(): void
public "addReward"(reward: $Reward$Type): void
public "getProgressionMode"(): $ProgressionMode
public "shouldHideDependencyLines"(): boolean
public "shouldHideLockIcon"(): boolean
public "getMovableID"(): long
public "areDependenciesVisible"(teamData: $TeamData$Type): boolean
public "streamDependencies"(): $Stream<($QuestObject)>
public "getSubtitle"(): $Component
public "hasDependency"(object: $QuestObject$Type): boolean
public "verifyDependencies"(autofix: boolean): boolean
public "copyToClipboard"(): void
public "checkRepeatable"(data: $TeamData$Type, player: $UUID$Type): boolean
public "getWidth"(): double
public "hideDetailsUntilStartable"(): boolean
public "ignoreRewardBlocking"(): boolean
public "getTasksAsList"(): $List<($Task)>
public "getMinRequiredDependencies"(): integer
public "shouldHideDependentLines"(): boolean
public "getGuidePage"(): string
public "getHideTextUntilComplete"(): $Tristate
public "showInRecipeMod"(): boolean
public "getRawSubtitle"(): string
public "setRawSubtitle"(rawSubtitle: string): void
public "getMinWidth"(): integer
public "canBeRepeated"(): boolean
public "getRawDescription"(): $List<(string)>
public "getIconScale"(): double
public "getRequireSequentialTasks"(): boolean
public "hasDependencies"(): boolean
public "clearDependencies"(): void
public "getDependants"(): $Collection<($QuestObject)>
public "getQuestFile"(): $BaseQuestFile
public "getChapter"(): $Chapter
public "getRelativeProgressFromChildren"(data: $TeamData$Type): integer
public "isSearchable"(data: $TeamData$Type): boolean
public "isCompletedRaw"(data: $TeamData$Type): boolean
public "isOptionalForProgression"(teamData: $TeamData$Type): boolean
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$Type, player: $UUID$Type): boolean
public "setX"(x: double): void
public "setY"(y: double): void
public "onMoved"(newX: double, newY: double, newChapterId: long): void
public "getY"(): double
public "getShape"(): string
public "getObjectType"(): $QuestObjectType
public "getDescription"(): $List<($Component)>
public "move"(to: $Chapter$Type, x: double, y: double): void
public "setSize"(size: double): void
public "getChildren"(): $Collection<(any)>
public "addDependency"(object: $QuestObject$Type): void
public "removeDependency"(object: $QuestObject$Type): void
public "getX"(): double
public "isOptional"(): boolean
public "getHeight"(): double
public "getSize"(): double
public "drawMoved"(graphics: $GuiGraphics$Type): void
public "getTitle"(): $Component
public "getId"(): long
get "questChapter"(): $Chapter
get "parentID"(): long
get "altTitle"(): $Component
get "altIcon"(): $Icon
set "taskList"(value: $List$Type<($Task$Type)>)
set "rewardList"(value: $List$Type<($Reward$Type)>)
get "repeatCooldown"(): integer
get "exclusiveQuest"(): boolean
get "tasks"(): $Collection<($Task)>
get "rewards"(): $Collection<($Reward)>
get "progressionMode"(): $ProgressionMode
get "movableID"(): long
get "subtitle"(): $Component
get "width"(): double
get "tasksAsList"(): $List<($Task)>
get "minRequiredDependencies"(): integer
get "guidePage"(): string
get "hideTextUntilComplete"(): $Tristate
get "rawSubtitle"(): string
set "rawSubtitle"(value: string)
get "minWidth"(): integer
get "rawDescription"(): $List<(string)>
get "iconScale"(): double
get "requireSequentialTasks"(): boolean
get "dependants"(): $Collection<($QuestObject)>
get "questFile"(): $BaseQuestFile
get "chapter"(): $Chapter
set "x"(value: double)
set "y"(value: double)
get "y"(): double
get "shape"(): string
get "objectType"(): $QuestObjectType
get "description"(): $List<($Component)>
set "size"(value: double)
get "children"(): $Collection<(any)>
get "x"(): double
get "optional"(): boolean
get "height"(): double
get "size"(): double
get "title"(): $Component
get "id"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Quest$Type = ($Quest);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Quest_ = $Quest$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/util/$BooleanConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BooleanConsumer {

 "accept"(arg0: boolean): void

(arg0: boolean): void
}

export namespace $BooleanConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanConsumer$Type = ($BooleanConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BooleanConsumer_ = $BooleanConsumer$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/$QuestObject" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfigGroup, $ConfigGroup$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigGroup"
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$QuestObjectBase, $QuestObjectBase$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObjectBase"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$QuestProgressEventData, $QuestProgressEventData$Type} from "packages/dev/ftb/mods/ftbquests/events/$QuestProgressEventData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ProgressChange, $ProgressChange$Type} from "packages/dev/ftb/mods/ftbquests/util/$ProgressChange"
import {$TeamData, $TeamData$Type} from "packages/dev/ftb/mods/ftbquests/quest/$TeamData"

export class $QuestObject extends $QuestObjectBase {
readonly "id": long

constructor(id: long)

public "isVisible"(data: $TeamData$Type): boolean
public "onStarted"(data: $QuestProgressEventData$Type<(any)>): void
public "onCompleted"(data: $QuestProgressEventData$Type<(any)>): void
public "forceProgress"(teamData: $TeamData$Type, progressChange: $ProgressChange$Type): void
public "writeData"(nbt: $CompoundTag$Type): void
public "readData"(nbt: $CompoundTag$Type): void
public "writeNetData"(buffer: $FriendlyByteBuf$Type): void
public "readNetData"(buffer: $FriendlyByteBuf$Type): void
public "fillConfigGroup"(config: $ConfigGroup$Type): void
public "getRelativeProgressFromChildren"(arg0: $TeamData$Type): integer
public static "getRelativeProgressFromChildren"(progressSum: integer, count: integer): integer
public "cacheProgress"(): boolean
public "isSearchable"(data: $TeamData$Type): boolean
public "getProgressColor"(data: $TeamData$Type, dim: boolean): $Color4I
public "getProgressColor"(data: $TeamData$Type): $Color4I
public "isCompletedRaw"(data: $TeamData$Type): boolean
public "isOptionalForProgression"(teamData: $TeamData$Type): boolean
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$Type, player: $UUID$Type): boolean
public "getChildren"(): $Collection<(any)>
get "children"(): $Collection<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestObject$Type = ($QuestObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestObject_ = $QuestObject$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/reward/$RewardClaimType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RewardClaimType extends $Enum<($RewardClaimType)> {
static readonly "CAN_CLAIM": $RewardClaimType
static readonly "CANT_CLAIM": $RewardClaimType
static readonly "CLAIMED": $RewardClaimType


public "canClaim"(): boolean
public "cantClaim"(): boolean
public "isClaimed"(): boolean
public static "values"(): ($RewardClaimType)[]
public static "valueOf"(name: string): $RewardClaimType
get "claimed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardClaimType$Type = (("can_claim") | ("claimed") | ("cant_claim")) | ($RewardClaimType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RewardClaimType_ = $RewardClaimType$Type;
}}
declare module "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyCollection" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$TeamProperty, $TeamProperty$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$TeamProperty"
import {$TeamPropertyValue, $TeamPropertyValue$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyValue"

export interface $TeamPropertyCollection {

 "updateFrom"(arg0: $TeamPropertyCollection$Type): void
 "get"<T>(arg0: $TeamProperty$Type<(T)>): T
 "set"<T>(arg0: $TeamProperty$Type<(T)>, arg1: T): void
 "write"(arg0: $FriendlyByteBuf$Type): void
 "read"(arg0: $FriendlyByteBuf$Type): void
 "forEach"<T>(arg0: $BiConsumer$Type<($TeamProperty$Type<(T)>), ($TeamPropertyValue$Type<(T)>)>): void
 "copy"(): $TeamPropertyCollection
}

export namespace $TeamPropertyCollection {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyCollection$Type = ($TeamPropertyCollection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamPropertyCollection_ = $TeamPropertyCollection$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/block/$QuestBarrierBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $QuestBarrierBlock extends $BaseEntityBlock {
static readonly "OPEN": $BooleanProperty
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


public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "skipRendering"(state: $BlockState$Type, state2: $BlockState$Type, dir: $Direction$Type): boolean
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, blockState: $BlockState$Type, blockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "setPlacedBy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $LivingEntity$Type, stack: $ItemStack$Type): void
public "getCollisionShape"(state: $BlockState$Type, bg: $BlockGetter$Type, pos: $BlockPos$Type, ctx: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(state: $BlockState$Type, bg: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getShadeBrightness"(blockState: $BlockState$Type, blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type): float
public "getVisualShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, ctx: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(blockPos: $BlockPos$Type, blockState: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestBarrierBlock$Type = ($QuestBarrierBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestBarrierBlock_ = $QuestBarrierBlock$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$NameMap" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$NameMap$Builder, $NameMap$Builder$Type} from "packages/dev/ftb/mods/ftblibrary/config/$NameMap$Builder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NameMap<E> implements $Iterable<(E)> {
readonly "defaultValue": E
readonly "map": $Map<(string), (E)>
readonly "keys": $List<(string)>
readonly "values": $List<(E)>


public "withDefault"(def: E): $NameMap<(E)>
public "getNullable"(s: string): E
public "getStringIndex"(s: string): integer
public "getRandom"(rand: $Random$Type): E
public "getColor"(value: E): $Color4I
public "getNext"(value: E): E
public "getDisplayName"(value: E): $Component
public "getPrevious"(value: E): E
public "getIcon"(v: E): $Icon
public "getName"(value: E): string
public "get"(s: string): E
public "get"(index: integer): E
public "size"(): integer
public "iterator"(): $Iterator<(E)>
public static "of"<T>(defaultValue: T, values: $List$Type<(T)>): $NameMap$Builder<(T)>
public static "of"<T>(defaultValue: T, values: (T)[]): $NameMap$Builder<(T)>
public "offset"(value: E, index: integer): E
public "write"(data: $FriendlyByteBuf$Type, object: E): void
public "read"(data: $FriendlyByteBuf$Type): E
public "getIndex"(e: E): integer
public "spliterator"(): $Spliterator<(E)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<E>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NameMap$Type<E> = ($NameMap<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NameMap_<E> = $NameMap$Type<(E)>;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/task/$TaskType" {
import {$Quest, $Quest$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Quest"
import {$Task, $Task$Type} from "packages/dev/ftb/mods/ftbquests/quest/task/$Task"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TaskType$GuiProvider, $TaskType$GuiProvider$Type} from "packages/dev/ftb/mods/ftbquests/quest/task/$TaskType$GuiProvider"

export class $TaskType {
 "internalId": integer


public "setDisplayName"(name: $Component$Type): $TaskType
public "getTypeForNBT"(): string
public "getIconSupplier"(): $Icon
public "setGuiProvider"(p: $TaskType$GuiProvider$Type): $TaskType
public "getGuiProvider"(): $TaskType$GuiProvider
public static "createTask"(id: long, quest: $Quest$Type, typeId: string): $Task
public "createTask"(id: long, quest: $Quest$Type): $Task
public "getTypeId"(): $ResourceLocation
public "getDisplayName"(): $Component
set "displayName"(value: $Component$Type)
get "typeForNBT"(): string
get "iconSupplier"(): $Icon
set "guiProvider"(value: $TaskType$GuiProvider$Type)
get "guiProvider"(): $TaskType$GuiProvider
get "typeId"(): $ResourceLocation
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskType$Type = ($TaskType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaskType_ = $TaskType$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/item/$QuestBarrierBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $QuestBarrierBlockItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestBarrierBlockItem$Type = ($QuestBarrierBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestBarrierBlockItem_ = $QuestBarrierBlockItem$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/loot/$EntityWeight" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityWeight {
 "passive": integer
 "monster": integer
 "boss": integer

constructor()

public "writeData"(nbt: $CompoundTag$Type): void
public "readData"(nbt: $CompoundTag$Type): void
public "writeNetData"(data: $FriendlyByteBuf$Type): void
public "readNetData"(data: $FriendlyByteBuf$Type): void
public "getWeight"(entity: $Entity$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityWeight$Type = ($EntityWeight);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityWeight_ = $EntityWeight$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/reward/$CustomReward" {
import {$Quest, $Quest$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Quest"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Reward, $Reward$Type} from "packages/dev/ftb/mods/ftbquests/quest/reward/$Reward"
import {$RewardType, $RewardType$Type} from "packages/dev/ftb/mods/ftbquests/quest/reward/$RewardType"

export class $CustomReward extends $Reward {
readonly "id": long

constructor(id: long, quest: $Quest$Type)

public "claim"(player: $ServerPlayer$Type, notify: boolean): void
public "getType"(): $RewardType
get "type"(): $RewardType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomReward$Type = ($CustomReward);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomReward_ = $CustomReward$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/events/$CustomRewardEvent" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Event, $Event$Type} from "packages/dev/architectury/event/$Event"
import {$EventActor, $EventActor$Type} from "packages/dev/architectury/event/$EventActor"
import {$CustomReward, $CustomReward$Type} from "packages/dev/ftb/mods/ftbquests/quest/reward/$CustomReward"

export class $CustomRewardEvent {
static readonly "EVENT": $Event<($EventActor<($CustomRewardEvent)>)>

constructor(reward: $CustomReward$Type, player: $ServerPlayer$Type, notify: boolean)

public "getNotify"(): boolean
public "getReward"(): $CustomReward
public "getPlayer"(): $ServerPlayer
get "notify"(): boolean
get "reward"(): $CustomReward
get "player"(): $ServerPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomRewardEvent$Type = ($CustomRewardEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomRewardEvent_ = $CustomRewardEvent$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$CursorType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CursorType extends $Enum<($CursorType)> {
static readonly "ARROW": $CursorType
static readonly "IBEAM": $CursorType
static readonly "CROSSHAIR": $CursorType
static readonly "HAND": $CursorType
static readonly "HRESIZE": $CursorType
static readonly "VRESIZE": $CursorType


public static "values"(): ($CursorType)[]
public static "valueOf"(name: string): $CursorType
public static "set"(type: $CursorType$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CursorType$Type = (("crosshair") | ("arrow") | ("vresize") | ("hresize") | ("ibeam") | ("hand")) | ($CursorType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CursorType_ = $CursorType$Type;
}}
declare module "packages/dev/ftb/mods/ftbxmodcompat/ftbquests/kubejs/$FTBQuestsKubeJSTeamDataWrapper" {
import {$BaseQuestFile, $BaseQuestFile$Type} from "packages/dev/ftb/mods/ftbquests/quest/$BaseQuestFile"
import {$FTBQuestsKubeJSTeamData, $FTBQuestsKubeJSTeamData$Type} from "packages/dev/ftb/mods/ftbxmodcompat/ftbquests/kubejs/$FTBQuestsKubeJSTeamData"
import {$TeamData, $TeamData$Type} from "packages/dev/ftb/mods/ftbquests/quest/$TeamData"

export class $FTBQuestsKubeJSTeamDataWrapper extends $FTBQuestsKubeJSTeamData {

constructor(d: $TeamData$Type)

public "getData"(): $TeamData
public "getFile"(): $BaseQuestFile
get "data"(): $TeamData
get "file"(): $BaseQuestFile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FTBQuestsKubeJSTeamDataWrapper$Type = ($FTBQuestsKubeJSTeamDataWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FTBQuestsKubeJSTeamDataWrapper_ = $FTBQuestsKubeJSTeamDataWrapper$Type;
}}
declare module "packages/dev/ftb/mods/ftbxmodcompat/ftbteams/kubejs/$KJSTeamWrapper" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Team, $Team$Type} from "packages/dev/ftb/mods/ftbteams/api/$Team"

export class $KJSTeamWrapper {

constructor(team: $Team$Type)

public "isPartyTeam"(): boolean
public "getName"(): string
public "getId"(): $UUID
get "partyTeam"(): boolean
get "name"(): string
get "id"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KJSTeamWrapper$Type = ($KJSTeamWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KJSTeamWrapper_ = $KJSTeamWrapper$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$Tristate" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$NameMap, $NameMap$Type} from "packages/dev/ftb/mods/ftblibrary/config/$NameMap"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"

export class $Tristate extends $Enum<($Tristate)> {
static readonly "FALSE": $Tristate
static readonly "TRUE": $Tristate
static readonly "DEFAULT": $Tristate
static readonly "VALUES": ($Tristate)[]
static readonly "NAME_MAP": $NameMap<($Tristate)>
readonly "name": string
readonly "displayName": string
readonly "result": $InteractionResult
readonly "color": $Color4I
readonly "icon": $Icon


public "getOpposite"(): $Tristate
public "isFalse"(): boolean
public "isTrue"(): boolean
public "get"(def: boolean): boolean
public "toString"(): string
public static "values"(): ($Tristate)[]
public static "valueOf"(name: string): $Tristate
public "write"(buffer: $FriendlyByteBuf$Type): void
public "write"(nbt: $CompoundTag$Type, key: string): void
public static "read"(nbt: $CompoundTag$Type, key: string): $Tristate
public static "read"(buffer: $FriendlyByteBuf$Type): $Tristate
public "isDefault"(): boolean
get "opposite"(): $Tristate
get "false"(): boolean
get "true"(): boolean
get "default"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tristate$Type = (("default") | ("false") | ("true")) | ($Tristate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Tristate_ = $Tristate$Type;
}}
declare module "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyArgument$Info" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$TeamPropertyArgument, $TeamPropertyArgument$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyArgument"
import {$TeamPropertyArgument$Info$Template, $TeamPropertyArgument$Info$Template$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyArgument$Info$Template"

export class $TeamPropertyArgument$Info implements $ArgumentTypeInfo<($TeamPropertyArgument), ($TeamPropertyArgument$Info$Template)> {

constructor()

public "serializeToNetwork"(template: $TeamPropertyArgument$Info$Template$Type, friendlyByteBuf: $FriendlyByteBuf$Type): void
public "deserializeFromNetwork"(friendlyByteBuf: $FriendlyByteBuf$Type): $TeamPropertyArgument$Info$Template
public "serializeToJson"(template: $TeamPropertyArgument$Info$Template$Type, jsonObject: $JsonObject$Type): void
public "unpack"(argumentType: $TeamPropertyArgument$Type): $TeamPropertyArgument$Info$Template
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyArgument$Info$Type = ($TeamPropertyArgument$Info);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamPropertyArgument$Info_ = $TeamPropertyArgument$Info$Type;
}}
declare module "packages/dev/ftb/mods/ftbteams/data/$TeamArgument$Info$Template" {
import {$TeamArgument, $TeamArgument$Type} from "packages/dev/ftb/mods/ftbteams/data/$TeamArgument"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$TeamArgument$Info, $TeamArgument$Info$Type} from "packages/dev/ftb/mods/ftbteams/data/$TeamArgument$Info"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $TeamArgument$Info$Template implements $ArgumentTypeInfo$Template<($TeamArgument)> {

constructor(this$0: $TeamArgument$Info$Type)

public "type"(): $ArgumentTypeInfo<($TeamArgument), (any)>
public "instantiate"(commandBuildContext: $CommandBuildContext$Type): $TeamArgument
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamArgument$Info$Template$Type = ($TeamArgument$Info$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamArgument$Info$Template_ = $TeamArgument$Info$Template$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/ui/$SelectableResource" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidStack, $FluidStack$Type} from "packages/dev/architectury/fluid/$FluidStack"

export interface $SelectableResource<T> {

 "copyWithCount"(arg0: long): $SelectableResource<(T)>
 "getTag"(): $CompoundTag
 "getCount"(): long
 "setCount"(arg0: integer): void
 "setTag"(arg0: $CompoundTag$Type): void
 "getIcon"(): $Icon
 "getName"(): $Component
 "isEmpty"(): boolean
 "stack"(): T
}

export namespace $SelectableResource {
function fluid(stack: $FluidStack$Type): $SelectableResource<($FluidStack)>
function item(stack: $ItemStack$Type): $SelectableResource<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectableResource$Type<T> = ($SelectableResource<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectableResource_<T> = $SelectableResource$Type<(T)>;
}}
declare module "packages/dev/ftb/mods/ftbquests/item/$MissingItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MissingItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "appendHoverText"(stack: $ItemStack$Type, worldIn: $Level$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "getName"(stack: $ItemStack$Type): $Component
public static "writeItem"(stack: $ItemStack$Type): $CompoundTag
public static "readItem"(tag: $CompoundTag$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MissingItem$Type = ($MissingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MissingItem_ = $MissingItem$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$BooleanConfig" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$ConfigWithVariants, $ConfigWithVariants$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigWithVariants"

export class $BooleanConfig extends $ConfigWithVariants<(boolean)> {
static readonly "TRUE_TEXT": $Component
static readonly "FALSE_TEXT": $Component
static readonly "NULL_TEXT": $Component
 "id": string

constructor()

public "getStringForGUI"(v: boolean): $Component
public "getIteration"(currentValue: boolean, next: boolean): boolean
public "getColor"(v: boolean): $Color4I
public "getIcon"(v: boolean): $Icon
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanConfig$Type = ($BooleanConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BooleanConfig_ = $BooleanConfig$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$WidgetLayout" {
import {$Panel, $Panel$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Panel"
import {$WidgetLayout$Padding, $WidgetLayout$Padding$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$WidgetLayout$Padding"

export interface $WidgetLayout {

 "getLayoutPadding"(): $WidgetLayout$Padding
 "align"(arg0: $Panel$Type): integer

(): $WidgetLayout$Padding
}

export namespace $WidgetLayout {
const NO_PADDING: $WidgetLayout$Padding
const NONE: $WidgetLayout
const VERTICAL: $WidgetLayout
const HORIZONTAL: $WidgetLayout
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetLayout$Type = ($WidgetLayout);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetLayout_ = $WidgetLayout$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$Widget" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Panel, $Panel$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Panel"
import {$PositionedIngredient, $PositionedIngredient$Type} from "packages/dev/ftb/mods/ftblibrary/util/client/$PositionedIngredient"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Widget$DrawLayer, $Widget$DrawLayer$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget$DrawLayer"
import {$CursorType, $CursorType$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$CursorType"
import {$Key, $Key$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$Key"
import {$Window, $Window$Type} from "packages/com/mojang/blaze3d/platform/$Window"
import {$IScreenWrapper, $IScreenWrapper$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$IScreenWrapper"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BaseScreen, $BaseScreen$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$BaseScreen"
import {$WidgetType, $WidgetType$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$WidgetType"
import {$KeyModifiers, $KeyModifiers$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$KeyModifiers"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Theme, $Theme$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Theme"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"

export class $Widget implements $IScreenWrapper, $Comparable<($Widget)> {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(p: $Panel$Type)

public "getGui"(): $BaseScreen
public "isMouseOver"(): boolean
public "setWidth"(v: integer): void
public "setPosAndSize"(x: integer, y: integer, w: integer, h: integer): $Widget
public "collidesWith"(x: integer, y: integer, w: integer, h: integer): boolean
public "getWidgetType"(): $WidgetType
public "addMouseOverText"(list: $TooltipList$Type): void
public "checkMouseOver"(mouseX: integer, mouseY: integer): boolean
public "updateMouseOver"(mouseX: integer, mouseY: integer): void
public "shouldAddMouseOverText"(): boolean
public "mousePressed"(button: $MouseButton$Type): boolean
public "mouseDoubleClicked"(button: $MouseButton$Type): boolean
public "getIngredientUnderMouse"(): $Optional<($PositionedIngredient)>
public "getDrawLayer"(): $Widget$DrawLayer
public "setDrawLayer"(drawLayer: $Widget$DrawLayer$Type): void
public "getPartialTicks"(): float
public "handleClick"(scheme: string, path: string): boolean
public "handleClick"(click: string): boolean
public "onClosed"(): void
public "isGhostIngredientTarget"(ingredient: any): boolean
public "acceptGhostIngredient"(ingredient: any): void
public static "isMouseButtonDown"(button: $MouseButton$Type): boolean
public static "isKeyDown"(key: integer): boolean
public static "getClipboardString"(): string
public static "setClipboardString"(string: string): void
public static "isShiftKeyDown"(): boolean
public static "isCtrlKeyDown"(): boolean
public "playClickSound"(): void
public "mouseScrolled"(scroll: double): boolean
public "mouseDragged"(button: integer, dragX: double, dragY: double): boolean
public "mouseReleased"(button: $MouseButton$Type): void
public "charTyped"(c: character, modifiers: $KeyModifiers$Type): boolean
public "keyPressed"(key: $Key$Type): boolean
public "keyReleased"(key: $Key$Type): void
public "shouldDraw"(): boolean
public "getWidth"(): integer
public "setPos"(x: integer, y: integer): void
public "setX"(v: integer): void
public "setY"(v: integer): void
public "getPosX"(): integer
public "getPosY"(): integer
public "tick"(): void
public "getY"(): integer
public "setSize"(w: integer, h: integer): void
public "isEnabled"(): boolean
public "getScreen"(): $Window
public "getTitle"(): $Component
public "draw"(graphics: $GuiGraphics$Type, theme: $Theme$Type, x: integer, y: integer, w: integer, h: integer): void
public "getCursor"(): $CursorType
public "setHeight"(v: integer): void
public "getX"(): integer
public "getMouseX"(): integer
public "getMouseY"(): integer
public "getHeight"(): integer
public "toString"(): string
public "compareTo"(widget: $Widget$Type): integer
public "getParent"(): $Panel
public "closeGui"(openPrevScreen: boolean): void
public "openGui"(): void
public "closeGui"(): void
public "openGuiLater"(): void
public "closeContextMenu"(): void
public "openAfter"(runnable: $Runnable$Type): $Runnable
public "run"(): void
get "gui"(): $BaseScreen
get "mouseOver"(): boolean
set "width"(value: integer)
get "widgetType"(): $WidgetType
get "ingredientUnderMouse"(): $Optional<($PositionedIngredient)>
get "drawLayer"(): $Widget$DrawLayer
set "drawLayer"(value: $Widget$DrawLayer$Type)
get "partialTicks"(): float
get "clipboardString"(): string
set "clipboardString"(value: string)
get "shiftKeyDown"(): boolean
get "ctrlKeyDown"(): boolean
get "width"(): integer
set "x"(value: integer)
set "y"(value: integer)
get "posX"(): integer
get "posY"(): integer
get "y"(): integer
get "enabled"(): boolean
get "screen"(): $Window
get "title"(): $Component
get "cursor"(): $CursorType
set "height"(value: integer)
get "x"(): integer
get "mouseX"(): integer
get "mouseY"(): integer
get "height"(): integer
get "parent"(): $Panel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Widget$Type = ($Widget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Widget_ = $Widget$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$IntConfig" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$NumberConfig, $NumberConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$NumberConfig"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"

export class $IntConfig extends $NumberConfig<(integer)> {
static readonly "COLOR": $Color4I
readonly "min": T
readonly "max": T
 "fader": boolean
static readonly "NULL_TEXT": $Component
 "id": string

constructor(mn: integer, mx: integer)

public "addInfo"(list: $TooltipList$Type): void
public "scrollValue"(currentValue: integer, forward: boolean): $Optional<(integer)>
public "parse"(callback: $Consumer$Type<(integer)>, string: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntConfig$Type = ($IntConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntConfig_ = $IntConfig$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/item/$CustomIconItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CustomIconItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(level: $Level$Type, player: $Player$Type, interactionHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $Level$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public static "getIcon"(stack: $ItemStack$Type): $Icon
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomIconItem$Type = ($CustomIconItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomIconItem_ = $CustomIconItem$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/core/$DisplayInfoFTBL" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $DisplayInfoFTBL {

 "getIconStackFTBL"(): $ItemStack

(): $ItemStack
}

export namespace $DisplayInfoFTBL {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayInfoFTBL$Type = ($DisplayInfoFTBL);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayInfoFTBL_ = $DisplayInfoFTBL$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/$BaseQuestFile" {
import {$Quest, $Quest$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Quest"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfigGroup, $ConfigGroup$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigGroup"
import {$Task, $Task$Type} from "packages/dev/ftb/mods/ftbquests/quest/task/$Task"
import {$QuestObjectType, $QuestObjectType$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObjectType"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$LootCrate, $LootCrate$Type} from "packages/dev/ftb/mods/ftbquests/quest/loot/$LootCrate"
import {$EntityWeight, $EntityWeight$Type} from "packages/dev/ftb/mods/ftbquests/quest/loot/$EntityWeight"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$Env, $Env$Type} from "packages/dev/architectury/utils/$Env"
import {$QuestObject, $QuestObject$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObject"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TaskType, $TaskType$Type} from "packages/dev/ftb/mods/ftbquests/quest/task/$TaskType"
import {$QuestProgressEventData, $QuestProgressEventData$Type} from "packages/dev/ftb/mods/ftbquests/events/$QuestProgressEventData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RewardAutoClaim, $RewardAutoClaim$Type} from "packages/dev/ftb/mods/ftbquests/quest/reward/$RewardAutoClaim"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$QuestLink, $QuestLink$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestLink"
import {$Reward, $Reward$Type} from "packages/dev/ftb/mods/ftbquests/quest/reward/$Reward"
import {$Chapter, $Chapter$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Chapter"
import {$QuestFile, $QuestFile$Type} from "packages/dev/ftb/mods/ftbquests/api/$QuestFile"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$QuestObjectBase, $QuestObjectBase$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObjectBase"
import {$DefaultChapterGroup, $DefaultChapterGroup$Type} from "packages/dev/ftb/mods/ftbquests/quest/$DefaultChapterGroup"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RecipeModHelper$Components, $RecipeModHelper$Components$Type} from "packages/dev/ftb/mods/ftbquests/integration/$RecipeModHelper$Components"
import {$TeamData, $TeamData$Type} from "packages/dev/ftb/mods/ftbquests/quest/$TeamData"
import {$RewardType, $RewardType$Type} from "packages/dev/ftb/mods/ftbquests/quest/reward/$RewardType"
import {$ProgressionMode, $ProgressionMode$Type} from "packages/dev/ftb/mods/ftbquests/quest/$ProgressionMode"
import {$RewardTable, $RewardTable$Type} from "packages/dev/ftb/mods/ftbquests/quest/loot/$RewardTable"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ChapterGroup, $ChapterGroup$Type} from "packages/dev/ftb/mods/ftbquests/quest/$ChapterGroup"
import {$Team, $Team$Type} from "packages/dev/ftb/mods/ftbteams/api/$Team"

export class $BaseQuestFile extends $QuestObject implements $QuestFile {
static "VERSION": integer
readonly "id": long

constructor()

public "isVisible"(data: $TeamData$Type): boolean
public "markDirty"(): void
public "canEdit"(): boolean
public "getReward"(id: long): $Reward
public "isServerSide"(): boolean
public "onStarted"(data: $QuestProgressEventData$Type<(any)>): void
public "onCompleted"(data: $QuestProgressEventData$Type<(any)>): void
public "newID"(): long
public "clearCachedProgress"(): void
public "getParentID"(): long
public "writeData"(nbt: $CompoundTag$Type): void
public "readData"(nbt: $CompoundTag$Type): void
public "writeNetData"(buffer: $FriendlyByteBuf$Type): void
public "readNetData"(buffer: $FriendlyByteBuf$Type): void
public "fillConfigGroup"(config: $ConfigGroup$Type): void
public "getAltTitle"(): $MutableComponent
public "getAltIcon"(): $Icon
public "deleteSelf"(): void
public "deleteChildren"(): void
public "refreshGui"(): void
public "clearCachedData"(): void
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "writeDataFull"(folder: $Path$Type): void
public "readDataFull"(folder: $Path$Type): void
public "readID"(id: long): long
public "readID"(tag: $Tag$Type): long
public "updateLootCrates"(): void
public "getAllObjects"(): $Collection<($QuestObjectBase)>
public "writeNetDataFull"(buffer: $FriendlyByteBuf$Type): void
public "readNetDataFull"(buffer: $FriendlyByteBuf$Type): void
public "getNullableTeamData"(id: $UUID$Type): $TeamData
public "getOrCreateTeamData"(player: $Entity$Type): $TeamData
public "getOrCreateTeamData"(team: $Team$Type): $TeamData
public "getOrCreateTeamData"(teamId: $UUID$Type): $TeamData
public "getAllTeamData"(): $Collection<($TeamData)>
public "getAllChapters"(): $List<($Chapter)>
public "getAllTasks"(): $List<($Task)>
public "getSubmitTasks"(): $List<($Task)>
public "getCraftingTasks"(): $List<($Task)>
public "getVisibleChapters"(data: $TeamData$Type): $List<($Chapter)>
public "getFirstVisibleChapter"(data: $TeamData$Type): $Chapter
public "getDefaultQuestShape"(): string
public "getProgressionMode"(): $ProgressionMode
public "getDetectionDelay"(): integer
public "isPauseGame"(): boolean
public "isDisableGui"(): boolean
public "getGridScale"(): double
public "isHideExcludedQuests"(): boolean
public "isDefaultPerTeamReward"(): boolean
public "isDefaultTeamConsumeItems"(): boolean
public "getDefaultRewardAutoClaim"(): $RewardAutoClaim
public "getEmergencyItems"(): $List<($ItemStack)>
public "getEmergencyItemsCooldown"(): integer
public "isDefaultQuestDisableJEI"(): boolean
public "isPlayerOnTeam"(arg0: $Player$Type, arg1: $TeamData$Type): boolean
public "getTaskType"(typeId: integer): $TaskType
public "getRewardType"(typeId: integer): $RewardType
public "getDefaultChapterGroup"(): $DefaultChapterGroup
public "getRewardTables"(): $List<($RewardTable)>
public "addRewardTable"(rewardTable: $RewardTable$Type): void
public "removeRewardTable"(rewardTable: $RewardTable$Type): void
public "removeEmptyRewardTables"(source: $CommandSourceStack$Type): integer
public "generateRewardTableName"(basename: string): string
public "getChapterGroups"(): $List<($ChapterGroup)>
public "forAllChapterGroups"(consumer: $Consumer$Type<($ChapterGroup$Type)>): void
public "forAllQuestLinks"(consumer: $Consumer$Type<($QuestLink$Type)>): void
public "moveChapterGroup"(id: long, movingUp: boolean): boolean
public "getLootCrateNoDrop"(): $EntityWeight
public "getQuestFile"(): $BaseQuestFile
public "showLockIcons"(): boolean
public "getFolder"(): $Path
public "forAllChapters"(consumer: $Consumer$Type<($Chapter$Type)>): void
public "forAllQuests"(consumer: $Consumer$Type<($Quest$Type)>): void
public "refreshIDMap"(): void
public "getChapter"(id: long): $Chapter
public "getChapterOrThrow"(id: long): $Chapter
public "getQuest"(id: long): $Quest
public "getRewardTable"(id: long): $RewardTable
public "getLootCrate"(id: string): $LootCrate
public "getChapterGroup"(id: long): $ChapterGroup
public "getRelativeProgressFromChildren"(data: $TeamData$Type): integer
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$Type, player: $UUID$Type): boolean
public "getTask"(id: long): $Task
public "getObjectType"(): $QuestObjectType
public "getID"(obj: any): long
public "isLoading"(): boolean
public "getChildren"(): $Collection<(any)>
public "getBase"(id: long): $QuestObjectBase
public "getSide"(): $Env
public "deleteObject"(arg0: long): void
public "addData"(data: $TeamData$Type, override: boolean): void
public "isDropLootCrates"(): boolean
public "makeRandomLootCrate"(entity: $Entity$Type, random: $RandomSource$Type): $Optional<($LootCrate)>
public "dropBookOnDeath"(): boolean
public "remove"(id: long): $QuestObjectBase
public "get"(id: long): $QuestObject
public "collect"<T extends $QuestObjectBase>(filter: $Predicate$Type<($QuestObjectBase$Type)>): $List<(T)>
public "collect"<T extends $QuestObjectBase>(clazz: $Class$Type<(T)>): $List<(T)>
public "create"(id: long, type: $QuestObjectType$Type, parent: long, extra: $CompoundTag$Type): $QuestObjectBase
get "serverSide"(): boolean
get "parentID"(): long
get "altTitle"(): $MutableComponent
get "altIcon"(): $Icon
get "allObjects"(): $Collection<($QuestObjectBase)>
get "allTeamData"(): $Collection<($TeamData)>
get "allChapters"(): $List<($Chapter)>
get "allTasks"(): $List<($Task)>
get "submitTasks"(): $List<($Task)>
get "craftingTasks"(): $List<($Task)>
get "defaultQuestShape"(): string
get "progressionMode"(): $ProgressionMode
get "detectionDelay"(): integer
get "pauseGame"(): boolean
get "disableGui"(): boolean
get "gridScale"(): double
get "hideExcludedQuests"(): boolean
get "defaultPerTeamReward"(): boolean
get "defaultTeamConsumeItems"(): boolean
get "defaultRewardAutoClaim"(): $RewardAutoClaim
get "emergencyItems"(): $List<($ItemStack)>
get "emergencyItemsCooldown"(): integer
get "defaultQuestDisableJEI"(): boolean
get "defaultChapterGroup"(): $DefaultChapterGroup
get "rewardTables"(): $List<($RewardTable)>
get "chapterGroups"(): $List<($ChapterGroup)>
get "lootCrateNoDrop"(): $EntityWeight
get "questFile"(): $BaseQuestFile
get "folder"(): $Path
get "objectType"(): $QuestObjectType
get "loading"(): boolean
get "children"(): $Collection<(any)>
get "side"(): $Env
get "dropLootCrates"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseQuestFile$Type = ($BaseQuestFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseQuestFile_ = $BaseQuestFile$Type;
}}
declare module "packages/dev/ftb/mods/ftbxmodcompat/ftbteams/kubejs/$PlayerTeamEventJS" {
import {$KJSTeamWrapper, $KJSTeamWrapper$Type} from "packages/dev/ftb/mods/ftbxmodcompat/ftbteams/kubejs/$KJSTeamWrapper"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Team, $Team$Type} from "packages/dev/ftb/mods/ftbteams/api/$Team"

export class $PlayerTeamEventJS extends $PlayerEventJS {

constructor(player: $ServerPlayer$Type, currentTeam: $Team$Type, prevTeam: $Team$Type)

public "getCurrentTeam"(): $KJSTeamWrapper
public "getPrevTeam"(): $KJSTeamWrapper
get "currentTeam"(): $KJSTeamWrapper
get "prevTeam"(): $KJSTeamWrapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTeamEventJS$Type = ($PlayerTeamEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerTeamEventJS_ = $PlayerTeamEventJS$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/block/$StageBarrierBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$QuestBarrierBlock, $QuestBarrierBlock$Type} from "packages/dev/ftb/mods/ftbquests/block/$QuestBarrierBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $StageBarrierBlock extends $QuestBarrierBlock {
static readonly "OPEN": $BooleanProperty
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

public "newBlockEntity"(blockPos: $BlockPos$Type, blockState: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StageBarrierBlock$Type = ($StageBarrierBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StageBarrierBlock_ = $StageBarrierBlock$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/task/$TaskType$GuiProvider" {
import {$Quest, $Quest$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Quest"
import {$Panel, $Panel$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Panel"
import {$Task, $Task$Type} from "packages/dev/ftb/mods/ftbquests/quest/task/$Task"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"

export interface $TaskType$GuiProvider {

 "openCreationGui"(arg0: $Panel$Type, arg1: $Quest$Type, arg2: $Consumer$Type<($Task$Type)>): void

(arg0: $Panel$Type, arg1: $Quest$Type, arg2: $Consumer$Type<($Task$Type)>): void
}

export namespace $TaskType$GuiProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskType$GuiProvider$Type = ($TaskType$GuiProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaskType$GuiProvider_ = $TaskType$GuiProvider$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$IOpenableScreen" {
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $IOpenableScreen extends $Runnable {

 "closeGui"(): void
 "closeGui"(openPrevScreen: boolean): void
 "openGuiLater"(): void
 "closeContextMenu"(): void
 "openAfter"(runnable: $Runnable$Type): $Runnable
 "openGui"(): void
 "run"(): void

(): void
}

export namespace $IOpenableScreen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOpenableScreen$Type = ($IOpenableScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOpenableScreen_ = $IOpenableScreen$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/events/$ObjectStartedEvent$TaskEvent" {
import {$Task, $Task$Type} from "packages/dev/ftb/mods/ftbquests/quest/task/$Task"
import {$Event, $Event$Type} from "packages/dev/architectury/event/$Event"
import {$QuestProgressEventData, $QuestProgressEventData$Type} from "packages/dev/ftb/mods/ftbquests/events/$QuestProgressEventData"
import {$EventActor, $EventActor$Type} from "packages/dev/architectury/event/$EventActor"
import {$ObjectStartedEvent, $ObjectStartedEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectStartedEvent"
import {$ObjectStartedEvent$QuestEvent, $ObjectStartedEvent$QuestEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectStartedEvent$QuestEvent"
import {$ObjectStartedEvent$FileEvent, $ObjectStartedEvent$FileEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectStartedEvent$FileEvent"
import {$ObjectStartedEvent$ChapterEvent, $ObjectStartedEvent$ChapterEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectStartedEvent$ChapterEvent"

export class $ObjectStartedEvent$TaskEvent extends $ObjectStartedEvent<($Task)> {
static readonly "GENERIC": $Event<($EventActor<($ObjectStartedEvent<(any)>)>)>
static readonly "FILE": $Event<($EventActor<($ObjectStartedEvent$FileEvent)>)>
static readonly "CHAPTER": $Event<($EventActor<($ObjectStartedEvent$ChapterEvent)>)>
static readonly "QUEST": $Event<($EventActor<($ObjectStartedEvent$QuestEvent)>)>
static readonly "TASK": $Event<($EventActor<($ObjectStartedEvent$TaskEvent)>)>

constructor(d: $QuestProgressEventData$Type<($Task$Type)>)

public "getTask"(): $Task
get "task"(): $Task
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectStartedEvent$TaskEvent$Type = ($ObjectStartedEvent$TaskEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectStartedEvent$TaskEvent_ = $ObjectStartedEvent$TaskEvent$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/loot/$RewardTable" {
import {$Quest, $Quest$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Quest"
import {$BaseQuestFile, $BaseQuestFile$Type} from "packages/dev/ftb/mods/ftbquests/quest/$BaseQuestFile"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfigGroup, $ConfigGroup$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigGroup"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$QuestObjectType, $QuestObjectType$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObjectType"
import {$QuestObjectBase, $QuestObjectBase$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObjectBase"
import {$LootCrate, $LootCrate$Type} from "packages/dev/ftb/mods/ftbquests/quest/loot/$LootCrate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$RecipeModHelper$Components, $RecipeModHelper$Components$Type} from "packages/dev/ftb/mods/ftbquests/integration/$RecipeModHelper$Components"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$WeightedReward, $WeightedReward$Type} from "packages/dev/ftb/mods/ftbquests/quest/loot/$WeightedReward"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $RewardTable extends $QuestObjectBase {
readonly "id": long

constructor(id: long, file: $BaseQuestFile$Type)
constructor(id: long, file: $BaseQuestFile$Type, filename: string)

public "makeWeightedItemReward"(stack: $ItemStack$Type, weight: float): $WeightedReward
public "toggleLootCrate"(): $LootCrate
public "getTotalWeight"(includeEmpty: boolean): float
public "addMouseOverText"(list: $TooltipList$Type, includeWeight: boolean, includeEmpty: boolean): void
public "shouldShowTooltip"(): boolean
public "writeData"(nbt: $CompoundTag$Type): void
public "readData"(nbt: $CompoundTag$Type): void
public "writeNetData"(buffer: $FriendlyByteBuf$Type): void
public "readNetData"(buffer: $FriendlyByteBuf$Type): void
public "fillConfigGroup"(config: $ConfigGroup$Type): void
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "deleteSelf"(): void
public "editedFromGUI"(): void
public "editedFromGUIOnServer"(): void
public "onCreated"(): void
public "clearCachedData"(): void
public "onEditButtonClicked"(gui: $Runnable$Type): void
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "removeReward"(weightedReward: $WeightedReward$Type): void
public "generateWeightedRandomRewards"(random: $RandomSource$Type, nAttempts: integer, includeEmpty: boolean): $Collection<($WeightedReward)>
public "getTitleOrElse"(def: $Component$Type): $Component
public "addReward"(weightedReward: $WeightedReward$Type): void
public "getWeightedRewards"(): $List<($WeightedReward)>
public "getQuestFile"(): $BaseQuestFile
public "getLootCrate"(): $LootCrate
public "getObjectType"(): $QuestObjectType
public "getFilename"(): string
public "getFakeQuest"(): $Quest
public "getFile"(): $BaseQuestFile
public "getPath"(): $Optional<(string)>
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "weightedRewards"(): $List<($WeightedReward)>
get "questFile"(): $BaseQuestFile
get "lootCrate"(): $LootCrate
get "objectType"(): $QuestObjectType
get "filename"(): string
get "fakeQuest"(): $Quest
get "file"(): $BaseQuestFile
get "path"(): $Optional<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardTable$Type = ($RewardTable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RewardTable_ = $RewardTable$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/events/$ObjectCompletedEvent" {
import {$ObjectCompletedEvent$TaskEvent, $ObjectCompletedEvent$TaskEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectCompletedEvent$TaskEvent"
import {$QuestObject, $QuestObject$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObject"
import {$ObjectProgressEvent, $ObjectProgressEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectProgressEvent"
import {$Event, $Event$Type} from "packages/dev/architectury/event/$Event"
import {$ObjectCompletedEvent$QuestEvent, $ObjectCompletedEvent$QuestEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectCompletedEvent$QuestEvent"
import {$EventActor, $EventActor$Type} from "packages/dev/architectury/event/$EventActor"
import {$ObjectCompletedEvent$FileEvent, $ObjectCompletedEvent$FileEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectCompletedEvent$FileEvent"
import {$ObjectCompletedEvent$ChapterEvent, $ObjectCompletedEvent$ChapterEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectCompletedEvent$ChapterEvent"

export class $ObjectCompletedEvent<T extends $QuestObject> extends $ObjectProgressEvent<(T)> {
static readonly "GENERIC": $Event<($EventActor<($ObjectCompletedEvent<(any)>)>)>
static readonly "FILE": $Event<($EventActor<($ObjectCompletedEvent$FileEvent)>)>
static readonly "CHAPTER": $Event<($EventActor<($ObjectCompletedEvent$ChapterEvent)>)>
static readonly "QUEST": $Event<($EventActor<($ObjectCompletedEvent$QuestEvent)>)>
static readonly "TASK": $Event<($EventActor<($ObjectCompletedEvent$TaskEvent)>)>


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCompletedEvent$Type<T> = ($ObjectCompletedEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCompletedEvent_<T> = $ObjectCompletedEvent$Type<(T)>;
}}
declare module "packages/dev/ftb/mods/ftbteams/api/$TeamRank" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$NameMap, $NameMap$Type} from "packages/dev/ftb/mods/ftblibrary/config/$NameMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $TeamRank extends $Enum<($TeamRank)> implements $StringRepresentable {
static readonly "ENEMY": $TeamRank
static readonly "NONE": $TeamRank
static readonly "ALLY": $TeamRank
static readonly "INVITED": $TeamRank
static readonly "MEMBER": $TeamRank
static readonly "OFFICER": $TeamRank
static readonly "OWNER": $TeamRank
static readonly "NAME_MAP": $NameMap<($TeamRank)>


public "isEnemyOrWorse"(): boolean
public "isNoneOrBetter"(): boolean
public "isAllyOrBetter"(): boolean
public "isInvitedOrBetter"(): boolean
public "isOwner"(): boolean
public "isOfficerOrBetter"(): boolean
public "isMemberOrBetter"(): boolean
public "getPower"(): integer
public "getDisplayName"(): $Component
public "isAtLeast"(rank: $TeamRank$Type): boolean
public "getSerializedName"(): string
public "getIcon"(): $Optional<($Icon)>
public static "values"(): ($TeamRank)[]
public static "valueOf"(name: string): $TeamRank
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "enemyOrWorse"(): boolean
get "noneOrBetter"(): boolean
get "allyOrBetter"(): boolean
get "invitedOrBetter"(): boolean
get "owner"(): boolean
get "officerOrBetter"(): boolean
get "memberOrBetter"(): boolean
get "power"(): integer
get "displayName"(): $Component
get "serializedName"(): string
get "icon"(): $Optional<($Icon)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamRank$Type = (("owner") | ("ally") | ("officer") | ("invited") | ("member") | ("enemy") | ("none")) | ($TeamRank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamRank_ = $TeamRank$Type;
}}
declare module "packages/dev/ftb/mods/ftbxmodcompat/ftbquests/kubejs/$CustomFilterItemEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$CustomFilterDisplayItemsEvent, $CustomFilterDisplayItemsEvent$Type} from "packages/dev/ftb/mods/ftbquests/api/event/$CustomFilterDisplayItemsEvent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $CustomFilterItemEventJS extends $EventJS {

constructor(event: $CustomFilterDisplayItemsEvent$Type)

public "addStack"(stack: $ItemStack$Type): void
public "addStacks"(stacks: $Collection$Type<($ItemStack$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomFilterItemEventJS$Type = ($CustomFilterItemEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomFilterItemEventJS_ = $CustomFilterItemEventJS$Type;
}}
declare module "packages/dev/ftb/mods/ftbteams/data/$TeamArgumentProvider" {
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$Team, $Team$Type} from "packages/dev/ftb/mods/ftbteams/api/$Team"

export interface $TeamArgumentProvider {

 "getTeam"(arg0: $CommandSourceStack$Type): $Team

(arg0: $CommandSourceStack$Type): $Team
}

export namespace $TeamArgumentProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamArgumentProvider$Type = ($TeamArgumentProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamArgumentProvider_ = $TeamArgumentProvider$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$ListConfig" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$ConfigValue, $ConfigValue$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigValue"
import {$ConfigCallback, $ConfigCallback$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigCallback"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"

export class $ListConfig<E, CV extends $ConfigValue<(E)>> extends $ConfigValue<($List<(E)>)> {
static readonly "EMPTY_LIST": $Component
static readonly "NON_EMPTY_LIST": $Component
static readonly "COLOR": $Color4I
static readonly "NULL_TEXT": $Component
 "id": string

constructor(t: CV)

public "addInfo"(l: $TooltipList$Type): void
public "onClicked"(clickedWidget: $Widget$Type, button: $MouseButton$Type, callback: $ConfigCallback$Type): void
public "getStringForGUI"(v: $List$Type<(E)>): $Component
public "getColor"(v: $List$Type<(E)>): $Color4I
public "getType"(): CV
public "copy"(v: $List$Type<(E)>): $List<(E)>
get "type"(): CV
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListConfig$Type<E, CV> = ($ListConfig<(E), (CV)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListConfig_<E, CV> = $ListConfig$Type<(E), (CV)>;
}}
declare module "packages/dev/ftb/mods/ftbquests/events/$ObjectStartedEvent$FileEvent" {
import {$BaseQuestFile, $BaseQuestFile$Type} from "packages/dev/ftb/mods/ftbquests/quest/$BaseQuestFile"
import {$Event, $Event$Type} from "packages/dev/architectury/event/$Event"
import {$QuestProgressEventData, $QuestProgressEventData$Type} from "packages/dev/ftb/mods/ftbquests/events/$QuestProgressEventData"
import {$EventActor, $EventActor$Type} from "packages/dev/architectury/event/$EventActor"
import {$ObjectStartedEvent, $ObjectStartedEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectStartedEvent"
import {$ObjectStartedEvent$QuestEvent, $ObjectStartedEvent$QuestEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectStartedEvent$QuestEvent"
import {$ObjectStartedEvent$ChapterEvent, $ObjectStartedEvent$ChapterEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectStartedEvent$ChapterEvent"
import {$ObjectStartedEvent$TaskEvent, $ObjectStartedEvent$TaskEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectStartedEvent$TaskEvent"

export class $ObjectStartedEvent$FileEvent extends $ObjectStartedEvent<($BaseQuestFile)> {
static readonly "GENERIC": $Event<($EventActor<($ObjectStartedEvent<(any)>)>)>
static readonly "FILE": $Event<($EventActor<($ObjectStartedEvent$FileEvent)>)>
static readonly "CHAPTER": $Event<($EventActor<($ObjectStartedEvent$ChapterEvent)>)>
static readonly "QUEST": $Event<($EventActor<($ObjectStartedEvent$QuestEvent)>)>
static readonly "TASK": $Event<($EventActor<($ObjectStartedEvent$TaskEvent)>)>

constructor(d: $QuestProgressEventData$Type<($BaseQuestFile$Type)>)

public "getFile"(): $BaseQuestFile
get "file"(): $BaseQuestFile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectStartedEvent$FileEvent$Type = ($ObjectStartedEvent$FileEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectStartedEvent$FileEvent_ = $ObjectStartedEvent$FileEvent$Type;
}}
declare module "packages/dev/ftb/mods/ftbxmodcompat/ftbquests/kubejs/$CustomRewardEventJS" {
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$CustomRewardEvent, $CustomRewardEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$CustomRewardEvent"
import {$CustomReward, $CustomReward$Type} from "packages/dev/ftb/mods/ftbquests/quest/reward/$CustomReward"

export class $CustomRewardEventJS extends $PlayerEventJS {

constructor(e: $CustomRewardEvent$Type)

public "getNotify"(): boolean
public "getReward"(): $CustomReward
get "notify"(): boolean
get "reward"(): $CustomReward
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomRewardEventJS$Type = ($CustomRewardEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomRewardEventJS_ = $CustomRewardEventJS$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/input/$Key" {
import {$KeyModifiers, $KeyModifiers$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$KeyModifiers"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export class $Key {
readonly "keyCode": integer
readonly "scanCode": integer
readonly "modifiers": $KeyModifiers

constructor(k: integer, s: integer, m: integer)

public "getInputMapping"(): $InputConstants$Key
public "deselectAll"(): boolean
public "escOrInventory"(): boolean
public "esc"(): boolean
public "backspace"(): boolean
public "selectAll"(): boolean
public "paste"(): boolean
public "cut"(): boolean
public "enter"(): boolean
public "copy"(): boolean
public "is"(k: integer): boolean
get "inputMapping"(): $InputConstants$Key
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Key$Type = ($Key);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Key_ = $Key$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/$QuestObjectType" {
import {$QuestObjectBase, $QuestObjectBase$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObjectBase"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$NameMap, $NameMap$Type} from "packages/dev/ftb/mods/ftblibrary/config/$NameMap"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $QuestObjectType extends $Enum<($QuestObjectType)> implements $Predicate<($QuestObjectBase)> {
static readonly "NULL": $QuestObjectType
static readonly "FILE": $QuestObjectType
static readonly "CHAPTER": $QuestObjectType
static readonly "QUEST": $QuestObjectType
static readonly "TASK": $QuestObjectType
static readonly "REWARD": $QuestObjectType
static readonly "REWARD_TABLE": $QuestObjectType
static readonly "CHAPTER_GROUP": $QuestObjectType
static readonly "QUEST_LINK": $QuestObjectType
static readonly "NAME_MAP": $NameMap<($QuestObjectType)>
static readonly "ALL_PROGRESSING": $Predicate<($QuestObjectBase)>
static readonly "ALL_PROGRESSING_OR_NULL": $Predicate<($QuestObjectBase)>


public "getCompletedMessage"(): $Component
public "getColor"(): $ChatFormatting
public "getDescription"(): $Component
public static "values"(): ($QuestObjectType)[]
public "test"(object: $QuestObjectBase$Type): boolean
public static "valueOf"(name: string): $QuestObjectType
public "getId"(): string
public "negate"(): $Predicate<($QuestObjectBase)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($QuestObjectBase)>
public static "isEqual"<T>(arg0: any): $Predicate<($QuestObjectBase)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($QuestObjectBase)>
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($QuestObjectBase)>
get "completedMessage"(): $Component
get "color"(): $ChatFormatting
get "description"(): $Component
get "id"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestObjectType$Type = (("reward") | ("chapter") | ("chapter_group") | ("file") | ("task") | ("quest_link") | ("null") | ("reward_table") | ("quest")) | ($QuestObjectType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestObjectType_ = $QuestObjectType$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$Theme" {
import {$ImageIcon, $ImageIcon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$ImageIcon"
import {$FormattedCharSequence, $FormattedCharSequence$Type} from "packages/net/minecraft/util/$FormattedCharSequence"
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$FormattedText, $FormattedText$Type} from "packages/net/minecraft/network/chat/$FormattedText"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$WidgetType, $WidgetType$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$WidgetType"

export class $Theme {
static readonly "DEFAULT": $Theme
static "renderDebugBoxes": boolean
static readonly "DARK": integer
static readonly "SHADOW": integer
static readonly "CENTERED": integer
static readonly "UNICODE": integer
static readonly "MOUSE_OVER": integer
static readonly "CENTERED_V": integer
static readonly "BACKGROUND_SQUARES": $ImageIcon

constructor()

public "getInvertedContentColor"(): $Color4I
public "drawContainerSlot"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawCheckboxBackground"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer, radioButton: boolean): void
public "drawCheckbox"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$Type, selected: boolean, radioButton: boolean): void
public "drawHorizontalTab"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer, selected: boolean): void
public "trimStringToWidthReverse"(text: string, width: integer): string
public "listFormattedStringToWidth"(text: $FormattedText$Type, width: integer): $List<($FormattedText)>
public "drawWidget"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$Type): void
public "drawGui"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$Type): void
public "drawContextMenuBackground"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawScrollBar"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$Type, vertical: boolean): void
public "drawScrollBarBackground"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$Type): void
public "drawPanelBackground"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer): void
public "getFontHeight"(): integer
public "drawSlot"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$Type): void
public "trimStringToWidth"(text: $FormattedText$Type, width: integer): $FormattedText
public "trimStringToWidth"(text: string, width: integer): string
public "drawButton"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$Type): void
public "drawTextBox"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer): void
public "getContentColor"(type: $WidgetType$Type): $Color4I
public "getStringWidth"(text: string): integer
public "getStringWidth"(text: $FormattedText$Type): integer
public "getStringWidth"(text: $FormattedCharSequence$Type): integer
public "getFont"(): $Font
public "drawString"(graphics: $GuiGraphics$Type, text: any, x: integer, y: integer, flags: integer): integer
public "drawString"(graphics: $GuiGraphics$Type, text: any, x: integer, y: integer, color: $Color4I$Type, flags: integer): integer
public "drawString"(graphics: $GuiGraphics$Type, text: any, x: integer, y: integer): integer
get "invertedContentColor"(): $Color4I
get "fontHeight"(): integer
get "font"(): $Font
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Theme$Type = ($Theme);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Theme_ = $Theme$Type;
}}
declare module "packages/dev/ftb/mods/ftbteams/api/property/$PrivacyMode" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$NameMap, $NameMap$Type} from "packages/dev/ftb/mods/ftblibrary/config/$NameMap"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $PrivacyMode extends $Enum<($PrivacyMode)> implements $StringRepresentable {
static readonly "ALLIES": $PrivacyMode
static readonly "PRIVATE": $PrivacyMode
static readonly "PUBLIC": $PrivacyMode
static readonly "VALUES": ($PrivacyMode)[]
static readonly "NAME_MAP": $NameMap<($PrivacyMode)>
readonly "name": string


public "getSerializedName"(): string
public static "values"(): ($PrivacyMode)[]
public static "valueOf"(name: string): $PrivacyMode
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrivacyMode$Type = (("private") | ("public") | ("allies")) | ($PrivacyMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrivacyMode_ = $PrivacyMode$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/events/$ObjectCompletedEvent$QuestEvent" {
import {$Quest, $Quest$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Quest"
import {$ObjectCompletedEvent$TaskEvent, $ObjectCompletedEvent$TaskEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectCompletedEvent$TaskEvent"
import {$Event, $Event$Type} from "packages/dev/architectury/event/$Event"
import {$QuestProgressEventData, $QuestProgressEventData$Type} from "packages/dev/ftb/mods/ftbquests/events/$QuestProgressEventData"
import {$EventActor, $EventActor$Type} from "packages/dev/architectury/event/$EventActor"
import {$ObjectCompletedEvent$FileEvent, $ObjectCompletedEvent$FileEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectCompletedEvent$FileEvent"
import {$ObjectCompletedEvent$ChapterEvent, $ObjectCompletedEvent$ChapterEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectCompletedEvent$ChapterEvent"
import {$ObjectCompletedEvent, $ObjectCompletedEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectCompletedEvent"

export class $ObjectCompletedEvent$QuestEvent extends $ObjectCompletedEvent<($Quest)> {
static readonly "GENERIC": $Event<($EventActor<($ObjectCompletedEvent<(any)>)>)>
static readonly "FILE": $Event<($EventActor<($ObjectCompletedEvent$FileEvent)>)>
static readonly "CHAPTER": $Event<($EventActor<($ObjectCompletedEvent$ChapterEvent)>)>
static readonly "QUEST": $Event<($EventActor<($ObjectCompletedEvent$QuestEvent)>)>
static readonly "TASK": $Event<($EventActor<($ObjectCompletedEvent$TaskEvent)>)>

constructor(d: $QuestProgressEventData$Type<($Quest$Type)>)

public "getQuest"(): $Quest
get "quest"(): $Quest
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCompletedEvent$QuestEvent$Type = ($ObjectCompletedEvent$QuestEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCompletedEvent$QuestEvent_ = $ObjectCompletedEvent$QuestEvent$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/reward/$RewardType$Provider" {
import {$Quest, $Quest$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Quest"
import {$Reward, $Reward$Type} from "packages/dev/ftb/mods/ftbquests/quest/reward/$Reward"

export interface $RewardType$Provider {

 "create"(arg0: long, arg1: $Quest$Type): $Reward

(arg0: long, arg1: $Quest$Type): $Reward
}

export namespace $RewardType$Provider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardType$Provider$Type = ($RewardType$Provider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RewardType$Provider_ = $RewardType$Provider$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/reward/$RewardAutoClaim" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$NameMap, $NameMap$Type} from "packages/dev/ftb/mods/ftblibrary/config/$NameMap"

export class $RewardAutoClaim extends $Enum<($RewardAutoClaim)> {
static readonly "DEFAULT": $RewardAutoClaim
static readonly "DISABLED": $RewardAutoClaim
static readonly "ENABLED": $RewardAutoClaim
static readonly "NO_TOAST": $RewardAutoClaim
static readonly "INVISIBLE": $RewardAutoClaim
static readonly "NAME_MAP": $NameMap<($RewardAutoClaim)>
static readonly "NAME_MAP_NO_DEFAULT": $NameMap<($RewardAutoClaim)>
 "id": string


public static "values"(): ($RewardAutoClaim)[]
public static "valueOf"(name: string): $RewardAutoClaim
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardAutoClaim$Type = (("default") | ("invisible") | ("disabled") | ("enabled") | ("no_toast")) | ($RewardAutoClaim);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RewardAutoClaim_ = $RewardAutoClaim$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$ItemStackConfig" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$OptionalLong, $OptionalLong$Type} from "packages/java/util/$OptionalLong"
import {$ConfigCallback, $ConfigCallback$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigCallback"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"
import {$ResourceConfigValue, $ResourceConfigValue$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ResourceConfigValue"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SelectableResource, $SelectableResource$Type} from "packages/dev/ftb/mods/ftblibrary/config/ui/$SelectableResource"

export class $ItemStackConfig extends $ResourceConfigValue<($ItemStack)> {
static readonly "NULL_TEXT": $Component
 "id": string

constructor(single: boolean, empty: boolean)
constructor(fixedSize: long)

public "onClicked"(clickedWidget: $Widget$Type, button: $MouseButton$Type, callback: $ConfigCallback$Type): void
public "fixedResourceSize"(): $OptionalLong
public "allowEmptyResource"(): boolean
public "getStringForGUI"(v: $ItemStack$Type): $Component
public "setResource"(selectedStack: $SelectableResource$Type<($ItemStack$Type)>): boolean
public "isEmpty"(): boolean
public "getResource"(): $SelectableResource<($ItemStack)>
public "copy"(value: $ItemStack$Type): $ItemStack
set "resource"(value: $SelectableResource$Type<($ItemStack$Type)>)
get "empty"(): boolean
get "resource"(): $SelectableResource<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackConfig$Type = ($ItemStackConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackConfig_ = $ItemStackConfig$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/reward/$RewardType" {
import {$Quest, $Quest$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Quest"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RewardType$GuiProvider, $RewardType$GuiProvider$Type} from "packages/dev/ftb/mods/ftbquests/quest/reward/$RewardType$GuiProvider"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$RewardType$Provider, $RewardType$Provider$Type} from "packages/dev/ftb/mods/ftbquests/quest/reward/$RewardType$Provider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Reward, $Reward$Type} from "packages/dev/ftb/mods/ftbquests/quest/reward/$Reward"

export class $RewardType {
 "intId": integer

constructor(typeId: $ResourceLocation$Type, provider: $RewardType$Provider$Type, iconSupplier: $Supplier$Type<($Icon$Type)>)

public "setDisplayName"(name: $Component$Type): $RewardType
public "getTypeForNBT"(): string
public "getIconSupplier"(): $Icon
public "setExcludeFromListRewards"(v: boolean): $RewardType
public "getExcludeFromListRewards"(): boolean
public "setGuiProvider"(p: $RewardType$GuiProvider$Type): $RewardType
public "getGuiProvider"(): $RewardType$GuiProvider
public "createReward"(id: long, quest: $Quest$Type): $Reward
public static "createReward"(id: long, quest: $Quest$Type, typeId: string): $Reward
public "getTypeId"(): $ResourceLocation
public "getDisplayName"(): $Component
set "displayName"(value: $Component$Type)
get "typeForNBT"(): string
get "iconSupplier"(): $Icon
set "excludeFromListRewards"(value: boolean)
get "excludeFromListRewards"(): boolean
set "guiProvider"(value: $RewardType$GuiProvider$Type)
get "guiProvider"(): $RewardType$GuiProvider
get "typeId"(): $ResourceLocation
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardType$Type = ($RewardType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RewardType_ = $RewardType$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/task/$Task" {
import {$Quest, $Quest$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Quest"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfigGroup, $ConfigGroup$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigGroup"
import {$BaseQuestFile, $BaseQuestFile$Type} from "packages/dev/ftb/mods/ftbquests/quest/$BaseQuestFile"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$QuestObjectType, $QuestObjectType$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObjectType"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$QuestObject, $QuestObject$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObject"
import {$TaskType, $TaskType$Type} from "packages/dev/ftb/mods/ftbquests/quest/task/$TaskType"
import {$QuestProgressEventData, $QuestProgressEventData$Type} from "packages/dev/ftb/mods/ftbquests/events/$QuestProgressEventData"
import {$Chapter, $Chapter$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Chapter"
import {$PositionedIngredient, $PositionedIngredient$Type} from "packages/dev/ftb/mods/ftblibrary/util/client/$PositionedIngredient"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$RecipeModHelper$Components, $RecipeModHelper$Components$Type} from "packages/dev/ftb/mods/ftbquests/integration/$RecipeModHelper$Components"
import {$ProgressChange, $ProgressChange$Type} from "packages/dev/ftb/mods/ftbquests/util/$ProgressChange"
import {$TeamData, $TeamData$Type} from "packages/dev/ftb/mods/ftbquests/quest/$TeamData"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Button, $Button$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Button"

export class $Task extends $QuestObject {
readonly "id": long

constructor(id: long, quest: $Quest$Type)

public "addMouseOverText"(list: $TooltipList$Type, teamData: $TeamData$Type): void
public "onStarted"(data: $QuestProgressEventData$Type<(any)>): void
public "onCompleted"(data: $QuestProgressEventData$Type<(any)>): void
public "getMaxProgress"(): long
public "forceProgress"(teamData: $TeamData$Type, progressChange: $ProgressChange$Type): void
public "getQuestChapter"(): $Chapter
public "getParentID"(): long
public "writeData"(nbt: $CompoundTag$Type): void
public "readData"(nbt: $CompoundTag$Type): void
public "writeNetData"(buffer: $FriendlyByteBuf$Type): void
public "readNetData"(buffer: $FriendlyByteBuf$Type): void
public "fillConfigGroup"(config: $ConfigGroup$Type): void
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "deleteSelf"(): void
public "deleteChildren"(): void
public "editedFromGUI"(): void
public "onCreated"(): void
public "createSubGroup"(group: $ConfigGroup$Type): $ConfigGroup
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "formatMaxProgress"(): string
public "formatProgress"(teamData: $TeamData$Type, progress: long): string
public "drawGUI"(teamData: $TeamData$Type, graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer): void
public "canInsertItem"(): boolean
public "consumesResources"(): boolean
public "hideProgressNumbers"(): boolean
public "addMouseOverHeader"(list: $TooltipList$Type, teamData: $TeamData$Type, advanced: boolean): void
public "addTitleInMouseOverText"(): boolean
public "onButtonClicked"(button: $Button$Type, canClick: boolean): void
public "autoSubmitOnPlayerTick"(): integer
public "getButtonText"(): $MutableComponent
public "submitItemsOnInventoryChange"(): boolean
public "checkOnLogin"(): boolean
public "submitTask"(teamData: $TeamData$Type, player: $ServerPlayer$Type, craftedItem: $ItemStack$Type): void
public "submitTask"(teamData: $TeamData$Type, player: $ServerPlayer$Type): void
public "getQuestFile"(): $BaseQuestFile
public "getQuest"(): $Quest
public "getRelativeProgressFromChildren"(data: $TeamData$Type): integer
public "cacheProgress"(): boolean
public "isOptionalForProgression"(teamData: $TeamData$Type): boolean
public "getIngredient"(widget: $Widget$Type): $Optional<($PositionedIngredient)>
public "getObjectType"(): $QuestObjectType
public "getType"(): $TaskType
get "maxProgress"(): long
get "questChapter"(): $Chapter
get "parentID"(): long
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "buttonText"(): $MutableComponent
get "questFile"(): $BaseQuestFile
get "quest"(): $Quest
get "objectType"(): $QuestObjectType
get "type"(): $TaskType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Task$Type = ($Task);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Task_ = $Task$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/$QuestLink" {
import {$Quest, $Quest$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Quest"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfigGroup, $ConfigGroup$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigGroup"
import {$BaseQuestFile, $BaseQuestFile$Type} from "packages/dev/ftb/mods/ftbquests/quest/$BaseQuestFile"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$QuestObjectType, $QuestObjectType$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObjectType"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$Movable, $Movable$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Movable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$TeamData, $TeamData$Type} from "packages/dev/ftb/mods/ftbquests/quest/$TeamData"
import {$Excludable, $Excludable$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Excludable"
import {$QuestObject, $QuestObject$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Chapter, $Chapter$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Chapter"

export class $QuestLink extends $QuestObject implements $Movable, $Excludable {
readonly "id": long

constructor(id: long, chapter: $Chapter$Type, linkId: long)

public "isVisible"(data: $TeamData$Type): boolean
public "setPosition"(qx: double, qy: double): void
public "getParentID"(): long
public "writeData"(nbt: $CompoundTag$Type): void
public "readData"(nbt: $CompoundTag$Type): void
public "writeNetData"(buffer: $FriendlyByteBuf$Type): void
public "readNetData"(buffer: $FriendlyByteBuf$Type): void
public "fillConfigGroup"(config: $ConfigGroup$Type): void
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "deleteSelf"(): void
public "editedFromGUI"(): void
public "onCreated"(): void
public "isQuestObjectExcluded"(teamData: $TeamData$Type): boolean
public "linksTo"(quest: $Quest$Type): boolean
public "getMovableID"(): long
public "copyToClipboard"(): void
public "getWidth"(): double
public "getQuestFile"(): $BaseQuestFile
public "getChapter"(): $Chapter
public "getQuest"(): $Optional<($Quest)>
public "getRelativeProgressFromChildren"(data: $TeamData$Type): integer
public "onMoved"(newX: double, newY: double, newChapterId: long): void
public "getY"(): double
public "getShape"(): string
public "getObjectType"(): $QuestObjectType
public "move"(to: $Chapter$Type, x: double, y: double): void
public "getX"(): double
public "getHeight"(): double
public "drawMoved"(graphics: $GuiGraphics$Type): void
public "getTitle"(): $Component
public "getId"(): long
get "parentID"(): long
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "movableID"(): long
get "width"(): double
get "questFile"(): $BaseQuestFile
get "chapter"(): $Chapter
get "quest"(): $Optional<($Quest)>
get "y"(): double
get "shape"(): string
get "objectType"(): $QuestObjectType
get "x"(): double
get "height"(): double
get "title"(): $Component
get "id"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestLink$Type = ($QuestLink);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestLink_ = $QuestLink$Type;
}}
declare module "packages/dev/ftb/mods/ftbxmodcompat/ftbquests/kubejs/$FTBQuestsKubeJSWrapper" {
import {$BaseQuestFile, $BaseQuestFile$Type} from "packages/dev/ftb/mods/ftbquests/quest/$BaseQuestFile"
import {$QuestObjectType, $QuestObjectType$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObjectType"
import {$QuestObjectBase, $QuestObjectBase$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObjectBase"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$FTBQuestsKubeJSPlayerData, $FTBQuestsKubeJSPlayerData$Type} from "packages/dev/ftb/mods/ftbxmodcompat/ftbquests/kubejs/$FTBQuestsKubeJSPlayerData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$TeamData, $TeamData$Type} from "packages/dev/ftb/mods/ftbquests/quest/$TeamData"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$QuestShape, $QuestShape$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestShape"

export class $FTBQuestsKubeJSWrapper {
static readonly "INSTANCE": $FTBQuestsKubeJSWrapper

constructor()

public "getQuestShapes"(): $Map<(string), ($QuestShape)>
public "getQuestObjectTypes"(): $Map<(string), ($QuestObjectType)>
public "getServerDataFromPlayer"(player: $Player$Type): $FTBQuestsKubeJSPlayerData
public "getServerDataFromSource"(source: $CommandSourceStack$Type): $FTBQuestsKubeJSPlayerData
public "getData"(level: $Level$Type, uuid: $UUID$Type): $TeamData
public "getData"(player: $Player$Type): $TeamData
public "getObject"(level: $Level$Type, id: any): $QuestObjectBase
public "getFile"(level: $Level$Type): $BaseQuestFile
get "questShapes"(): $Map<(string), ($QuestShape)>
get "questObjectTypes"(): $Map<(string), ($QuestObjectType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FTBQuestsKubeJSWrapper$Type = ($FTBQuestsKubeJSWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FTBQuestsKubeJSWrapper_ = $FTBQuestsKubeJSWrapper$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MouseButton {
static readonly "LEFT": $MouseButton
static readonly "RIGHT": $MouseButton
static readonly "MIDDLE": $MouseButton
static readonly "BACK": $MouseButton
static readonly "NEXT": $MouseButton
readonly "id": integer


public "isMiddle"(): boolean
public "isRight"(): boolean
public "isLeft"(): boolean
public static "get"(i: integer): $MouseButton
public "hashCode"(): integer
public "getId"(): integer
get "middle"(): boolean
get "right"(): boolean
get "left"(): boolean
get "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseButton$Type = ($MouseButton);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseButton_ = $MouseButton$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/core/$ItemFTBL" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"

export interface $ItemFTBL {

 "setCraftingRemainingItemFTBL"(arg0: $Item$Type): void

(arg0: $Item$Type): void
}

export namespace $ItemFTBL {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFTBL$Type = ($ItemFTBL);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFTBL_ = $ItemFTBL$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$ConfigGroup" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ConfigCallback, $ConfigCallback$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigCallback"
import {$StringConfig, $StringConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$StringConfig"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BooleanConfig, $BooleanConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$BooleanConfig"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LongConfig, $LongConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$LongConfig"
import {$Tristate, $Tristate$Type} from "packages/dev/ftb/mods/ftblibrary/config/$Tristate"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$ImageResourceConfig, $ImageResourceConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ImageResourceConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DoubleConfig, $DoubleConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$DoubleConfig"
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$ItemStackConfig, $ItemStackConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ItemStackConfig"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ConfigValue, $ConfigValue$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigValue"
import {$FluidStack, $FluidStack$Type} from "packages/dev/architectury/fluid/$FluidStack"
import {$ListConfig, $ListConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ListConfig"
import {$NameMap, $NameMap$Type} from "packages/dev/ftb/mods/ftblibrary/config/$NameMap"
import {$FluidConfig, $FluidConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$FluidConfig"
import {$EnumConfig, $EnumConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$EnumConfig"
import {$ColorConfig, $ColorConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ColorConfig"
import {$IntConfig, $IntConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$IntConfig"

export class $ConfigGroup implements $Comparable<($ConfigGroup)> {

constructor(id: string)
constructor(id: string, savedCallback: $ConfigCallback$Type)

public "getOrCreateSubgroup"(id: string): $ConfigGroup
public "getOrCreateSubgroup"(id: string, displayOrder: integer): $ConfigGroup
public "addLong"(id: string, value: long, setter: $Consumer$Type<(long)>, def: long, min: long, max: long): $LongConfig
public "addDouble"(id: string, value: double, setter: $Consumer$Type<(double)>, def: double, min: double, max: double): $DoubleConfig
public "addEnum"<E>(id: string, value: E, setter: $Consumer$Type<(E)>, nameMap: $NameMap$Type<(E)>): $EnumConfig<(E)>
public "addEnum"<E>(id: string, value: E, setter: $Consumer$Type<(E)>, nameMap: $NameMap$Type<(E)>, def: E): $EnumConfig<(E)>
public "addBool"(id: string, value: boolean, setter: $Consumer$Type<(boolean)>, def: boolean): $BooleanConfig
public "addInt"(id: string, value: integer, setter: $Consumer$Type<(integer)>, def: integer, min: integer, max: integer): $IntConfig
public "addColor"(id: string, value: $Color4I$Type, setter: $Consumer$Type<($Color4I$Type)>, def: $Color4I$Type): $ColorConfig
public "setNameKey"(key: string): $ConfigGroup
public "addString"(id: string, value: string, setter: $Consumer$Type<(string)>, def: string, pattern: $Pattern$Type): $StringConfig
public "addString"(id: string, value: string, setter: $Consumer$Type<(string)>, def: string): $StringConfig
public "getTooltip"(): $Component
public "addTristate"(id: string, value: $Tristate$Type, setter: $Consumer$Type<($Tristate$Type)>): $EnumConfig<($Tristate)>
public "addTristate"(id: string, value: $Tristate$Type, setter: $Consumer$Type<($Tristate$Type)>, def: $Tristate$Type): $EnumConfig<($Tristate)>
public "addFluidStack"(id: string, value: $FluidStack$Type, setter: $Consumer$Type<($FluidStack$Type)>, def: $FluidStack$Type, allowEmpty: boolean): $FluidConfig
public "addFluidStack"(id: string, value: $FluidStack$Type, setter: $Consumer$Type<($FluidStack$Type)>, def: $FluidStack$Type, fixedSize: long): $FluidConfig
public "addImage"(id: string, value: $ResourceLocation$Type, setter: $Consumer$Type<($ResourceLocation$Type)>, def: $ResourceLocation$Type): $ImageResourceConfig
public "getSubgroups"(): $Collection<($ConfigGroup)>
public "addItemStack"(id: string, value: $ItemStack$Type, setter: $Consumer$Type<($ItemStack$Type)>, def: $ItemStack$Type, fixedSize: integer): $ItemStackConfig
public "addItemStack"(id: string, value: $ItemStack$Type, setter: $Consumer$Type<($ItemStack$Type)>, def: $ItemStack$Type, singleItem: boolean, allowEmpty: boolean): $ItemStackConfig
public "addList"<E, CV extends $ConfigValue<(E)>>(id: string, value: $List$Type<(E)>, type: CV, setter: $Consumer$Type<($List$Type<(E)>)>, def: E): $ListConfig<(E), (CV)>
public "addList"<E, CV extends $ConfigValue<(E)>>(id: string, c: $List$Type<(E)>, type: CV, def: E): $ListConfig<(E), (CV)>
public "getNameKey"(): string
public "getValues"(): $Collection<($ConfigValue<(any)>)>
public "getName"(): $Component
public "add"<T, CV extends $ConfigValue<(T)>>(id: string, type: CV, value: T, setter: $Consumer$Type<(T)>, defaultValue: T): CV
public "compareTo"(o: $ConfigGroup$Type): integer
public "getParent"(): $ConfigGroup
public "getId"(): string
public "save"(accepted: boolean): void
public "getPath"(): string
set "nameKey"(value: string)
get "tooltip"(): $Component
get "subgroups"(): $Collection<($ConfigGroup)>
get "nameKey"(): string
get "values"(): $Collection<($ConfigValue<(any)>)>
get "name"(): $Component
get "parent"(): $ConfigGroup
get "id"(): string
get "path"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigGroup$Type = ($ConfigGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigGroup_ = $ConfigGroup$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/events/$ObjectStartedEvent$ChapterEvent" {
import {$Event, $Event$Type} from "packages/dev/architectury/event/$Event"
import {$QuestProgressEventData, $QuestProgressEventData$Type} from "packages/dev/ftb/mods/ftbquests/events/$QuestProgressEventData"
import {$EventActor, $EventActor$Type} from "packages/dev/architectury/event/$EventActor"
import {$ObjectStartedEvent, $ObjectStartedEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectStartedEvent"
import {$ObjectStartedEvent$QuestEvent, $ObjectStartedEvent$QuestEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectStartedEvent$QuestEvent"
import {$ObjectStartedEvent$FileEvent, $ObjectStartedEvent$FileEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectStartedEvent$FileEvent"
import {$Chapter, $Chapter$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Chapter"
import {$ObjectStartedEvent$TaskEvent, $ObjectStartedEvent$TaskEvent$Type} from "packages/dev/ftb/mods/ftbquests/events/$ObjectStartedEvent$TaskEvent"

export class $ObjectStartedEvent$ChapterEvent extends $ObjectStartedEvent<($Chapter)> {
static readonly "GENERIC": $Event<($EventActor<($ObjectStartedEvent<(any)>)>)>
static readonly "FILE": $Event<($EventActor<($ObjectStartedEvent$FileEvent)>)>
static readonly "CHAPTER": $Event<($EventActor<($ObjectStartedEvent$ChapterEvent)>)>
static readonly "QUEST": $Event<($EventActor<($ObjectStartedEvent$QuestEvent)>)>
static readonly "TASK": $Event<($EventActor<($ObjectStartedEvent$TaskEvent)>)>

constructor(d: $QuestProgressEventData$Type<($Chapter$Type)>)

public "getChapter"(): $Chapter
get "chapter"(): $Chapter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectStartedEvent$ChapterEvent$Type = ($ObjectStartedEvent$ChapterEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectStartedEvent$ChapterEvent_ = $ObjectStartedEvent$ChapterEvent$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/api/$QuestFile" {
import {$Quest, $Quest$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Quest"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$QuestLink, $QuestLink$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestLink"
import {$TeamData, $TeamData$Type} from "packages/dev/ftb/mods/ftbquests/quest/$TeamData"
import {$Team, $Team$Type} from "packages/dev/ftb/mods/ftbteams/api/$Team"
import {$Chapter, $Chapter$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Chapter"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $QuestFile {

 "canEdit"(): boolean
 "isServerSide"(): boolean
 "getNullableTeamData"(arg0: $UUID$Type): $TeamData
 "getOrCreateTeamData"(arg0: $Entity$Type): $TeamData
 "getOrCreateTeamData"(arg0: $Team$Type): $TeamData
 "getOrCreateTeamData"(arg0: $UUID$Type): $TeamData
 "getAllTeamData"(): $Collection<($TeamData)>
 "forAllQuestLinks"(arg0: $Consumer$Type<($QuestLink$Type)>): void
 "forAllChapters"(arg0: $Consumer$Type<($Chapter$Type)>): void
 "forAllQuests"(arg0: $Consumer$Type<($Quest$Type)>): void
}

export namespace $QuestFile {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestFile$Type = ($QuestFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestFile_ = $QuestFile$Type;
}}
declare module "packages/dev/ftb/mods/ftbxmodcompat/ftbquests/kubejs/$FTBQuestsKubeJSTeamData" {
import {$BaseQuestFile, $BaseQuestFile$Type} from "packages/dev/ftb/mods/ftbquests/quest/$BaseQuestFile"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ProgressChange, $ProgressChange$Type} from "packages/dev/ftb/mods/ftbquests/util/$ProgressChange"
import {$TeamData, $TeamData$Type} from "packages/dev/ftb/mods/ftbquests/quest/$TeamData"
import {$EntityArrayList, $EntityArrayList$Type} from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"

export class $FTBQuestsKubeJSTeamData {

constructor()

public "getOnlineMembers"(): $EntityArrayList
public "canStartQuest"(id: any): boolean
public "getTaskProgress"(id: any): long
public "getLocked"(): boolean
public "addProgress"(id: any, progress: long): boolean
public "getRelativeProgress"(id: any): integer
public "setLocked"(v: boolean): void
public "getData"(): $TeamData
public "complete"(id: any): void
public "isCompleted"(id: any): boolean
public "isStarted"(id: any): boolean
public "changeProgress"(id: any, consumer: $Consumer$Type<($ProgressChange$Type)>): void
public "reset"(id: any): void
public "getFile"(): $BaseQuestFile
get "onlineMembers"(): $EntityArrayList
get "locked"(): boolean
set "locked"(value: boolean)
get "data"(): $TeamData
get "file"(): $BaseQuestFile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FTBQuestsKubeJSTeamData$Type = ($FTBQuestsKubeJSTeamData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FTBQuestsKubeJSTeamData_ = $FTBQuestsKubeJSTeamData$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/util/client/$PositionedIngredient" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export class $PositionedIngredient extends $Record {

constructor(ingredient: any, area: $Rect2i$Type, tooltip: boolean)

public "tooltip"(): boolean
public "area"(): $Rect2i
public "ingredient"(): any
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(ingredient: any, widget: $Widget$Type, tooltip: boolean): $Optional<($PositionedIngredient)>
public static "of"(ingredient: any, widget: $Widget$Type): $Optional<($PositionedIngredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PositionedIngredient$Type = ($PositionedIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PositionedIngredient_ = $PositionedIngredient$Type;
}}
declare module "packages/dev/ftb/mods/ftbquests/quest/$QuestObjectBase" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfigGroup, $ConfigGroup$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigGroup"
import {$BaseQuestFile, $BaseQuestFile$Type} from "packages/dev/ftb/mods/ftbquests/quest/$BaseQuestFile"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$QuestObjectType, $QuestObjectType$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObjectType"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$RecipeModHelper$Components, $RecipeModHelper$Components$Type} from "packages/dev/ftb/mods/ftbquests/integration/$RecipeModHelper$Components"
import {$ProgressChange, $ProgressChange$Type} from "packages/dev/ftb/mods/ftbquests/util/$ProgressChange"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$TeamData, $TeamData$Type} from "packages/dev/ftb/mods/ftbquests/quest/$TeamData"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Chapter, $Chapter$Type} from "packages/dev/ftb/mods/ftbquests/quest/$Chapter"

export class $QuestObjectBase implements $Comparable<($QuestObjectBase)> {
readonly "id": long

constructor(id: long)

public static "getCodeString"(id: long): string
public "getCodeString"(): string
public static "getCodeString"(object: $QuestObjectBase$Type): string
public static "shouldSendNotifications"(): boolean
public "setRawIcon"(rawIcon: $ItemStack$Type): void
public "getRawTitle"(): string
public "setRawTitle"(rawTitle: string): void
public static "parseCodeString"(id: string): long
public static "parseHexId"(id: string): $Optional<(long)>
public static "titleToID"(s: string): $Optional<(string)>
public "forceProgress"(teamData: $TeamData$Type, progressChange: $ProgressChange$Type): void
public "forceProgressRaw"(teamData: $TeamData$Type, progressChange: $ProgressChange$Type): void
public "getQuestChapter"(): $Chapter
public "getParentID"(): long
public "writeData"(nbt: $CompoundTag$Type): void
public "readData"(nbt: $CompoundTag$Type): void
public "writeNetData"(buffer: $FriendlyByteBuf$Type): void
public "readNetData"(buffer: $FriendlyByteBuf$Type): void
public "fillConfigGroup"(config: $ConfigGroup$Type): void
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "getMutableTitle"(): $MutableComponent
public "deleteSelf"(): void
public "deleteChildren"(): void
public "editedFromGUI"(): void
public "editedFromGUIOnServer"(): void
public "onCreated"(): void
public "clearCachedData"(): void
public "createSubGroup"(group: $ConfigGroup$Type): $ConfigGroup
public "onEditButtonClicked"(gui: $Runnable$Type): void
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "getQuestFile"(): $BaseQuestFile
public "getTags"(): $Set<(string)>
public "hasTag"(tag: string): boolean
public "isValid"(): boolean
public "getObjectType"(): $QuestObjectType
public static "getID"(object: $QuestObjectBase$Type): long
public "getTitle"(): $Component
public "getIcon"(): $Icon
public "equals"(object: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(other: $QuestObjectBase$Type): integer
public "getId"(): long
public static "copy"<T extends $QuestObjectBase>(orig: T, factory: $Supplier$Type<(T)>): T
public "getPath"(): $Optional<(string)>
public static "isNull"(object: $QuestObjectBase$Type): boolean
get "codeString"(): string
set "rawIcon"(value: $ItemStack$Type)
get "rawTitle"(): string
set "rawTitle"(value: string)
get "questChapter"(): $Chapter
get "parentID"(): long
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "mutableTitle"(): $MutableComponent
get "questFile"(): $BaseQuestFile
get "tags"(): $Set<(string)>
get "valid"(): boolean
get "objectType"(): $QuestObjectType
get "title"(): $Component
get "icon"(): $Icon
get "id"(): long
get "path"(): $Optional<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestObjectBase$Type = ($QuestObjectBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestObjectBase_ = $QuestObjectBase$Type;
}}
