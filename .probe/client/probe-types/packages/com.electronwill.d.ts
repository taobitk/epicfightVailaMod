declare module "packages/com/electronwill/nightconfig/core/$UnmodifiableConfig" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$ConfigFormat, $ConfigFormat$Type} from "packages/com/electronwill/nightconfig/core/$ConfigFormat"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$EnumGetMethod, $EnumGetMethod$Type} from "packages/com/electronwill/nightconfig/core/$EnumGetMethod"
import {$OptionalLong, $OptionalLong$Type} from "packages/java/util/$OptionalLong"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$LongSupplier, $LongSupplier$Type} from "packages/java/util/function/$LongSupplier"
import {$OptionalInt, $OptionalInt$Type} from "packages/java/util/$OptionalInt"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $UnmodifiableConfig {

 "valueMap"(): $Map<(string), (any)>
 "configFormat"(): $ConfigFormat<(any)>
 "getRaw"<T>(arg0: $List$Type<(string)>): T
 "getRaw"<T>(arg0: string): T
 "getOptional"<T>(arg0: $List$Type<(string)>): $Optional<(T)>
 "getOptional"<T>(arg0: string): $Optional<(T)>
 "getOrElse"<T>(arg0: string, arg1: $Supplier$Type<(T)>): T
 "getOrElse"<T>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(T)>): T
 "getOrElse"<T>(arg0: $List$Type<(string)>, arg1: T): T
 "getOrElse"<T>(arg0: string, arg1: T): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): T
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>): $Optional<(T)>
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $Supplier$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type, arg3: $Supplier$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $Supplier$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T, arg2: $EnumGetMethod$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: T, arg2: $EnumGetMethod$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type, arg3: $Supplier$Type<(T)>): T
 "getOptionalInt"(arg0: $List$Type<(string)>): $OptionalInt
 "getOptionalInt"(arg0: string): $OptionalInt
 "getIntOrElse"(arg0: string, arg1: integer): integer
 "getIntOrElse"(arg0: $List$Type<(string)>, arg1: integer): integer
 "getIntOrElse"(arg0: $List$Type<(string)>, arg1: $IntSupplier$Type): integer
 "getIntOrElse"(arg0: string, arg1: $IntSupplier$Type): integer
 "getOptionalLong"(arg0: string): $OptionalLong
 "getOptionalLong"(arg0: $List$Type<(string)>): $OptionalLong
 "getLongOrElse"(arg0: $List$Type<(string)>, arg1: long): long
 "getLongOrElse"(arg0: string, arg1: long): long
 "getLongOrElse"(arg0: string, arg1: $LongSupplier$Type): long
 "getLongOrElse"(arg0: $List$Type<(string)>, arg1: $LongSupplier$Type): long
 "getByteOrElse"(arg0: $List$Type<(string)>, arg1: byte): byte
 "getByteOrElse"(arg0: string, arg1: byte): byte
 "getShortOrElse"(arg0: $List$Type<(string)>, arg1: short): short
 "getShortOrElse"(arg0: string, arg1: short): short
 "getCharOrElse"(arg0: string, arg1: character): character
 "getCharOrElse"(arg0: $List$Type<(string)>, arg1: character): character
 "get"<T>(arg0: $List$Type<(string)>): T
 "get"<T>(arg0: string): T
 "getByte"(arg0: string): byte
 "getByte"(arg0: $List$Type<(string)>): byte
 "getShort"(arg0: $List$Type<(string)>): short
 "getShort"(arg0: string): short
 "getChar"(arg0: $List$Type<(string)>): character
 "getChar"(arg0: string): character
 "getInt"(arg0: $List$Type<(string)>): integer
 "getInt"(arg0: string): integer
 "getLong"(arg0: $List$Type<(string)>): long
 "getLong"(arg0: string): long
 "isEmpty"(): boolean
 "size"(): integer
 "apply"<T>(arg0: string): T
 "apply"<T>(arg0: $List$Type<(string)>): T
 "contains"(arg0: string): boolean
 "contains"(arg0: $List$Type<(string)>): boolean
 "entrySet"(): $Set<(any)>
 "isNull"(arg0: string): boolean
 "isNull"(arg0: $List$Type<(string)>): boolean
}

export namespace $UnmodifiableConfig {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnmodifiableConfig$Type = ($UnmodifiableConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnmodifiableConfig_ = $UnmodifiableConfig$Type;
}}
declare module "packages/com/electronwill/nightconfig/core/$UnmodifiableCommentedConfig" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$ConfigFormat, $ConfigFormat$Type} from "packages/com/electronwill/nightconfig/core/$ConfigFormat"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$EnumGetMethod, $EnumGetMethod$Type} from "packages/com/electronwill/nightconfig/core/$EnumGetMethod"
import {$OptionalLong, $OptionalLong$Type} from "packages/java/util/$OptionalLong"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$LongSupplier, $LongSupplier$Type} from "packages/java/util/function/$LongSupplier"
import {$OptionalInt, $OptionalInt$Type} from "packages/java/util/$OptionalInt"
import {$UnmodifiableCommentedConfig$CommentNode, $UnmodifiableCommentedConfig$CommentNode$Type} from "packages/com/electronwill/nightconfig/core/$UnmodifiableCommentedConfig$CommentNode"
import {$UnmodifiableConfig, $UnmodifiableConfig$Type} from "packages/com/electronwill/nightconfig/core/$UnmodifiableConfig"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $UnmodifiableCommentedConfig extends $UnmodifiableConfig {

 "getComment"(arg0: string): string
 "getComment"(arg0: $List$Type<(string)>): string
 "getOptionalComment"(arg0: string): $Optional<(string)>
 "getOptionalComment"(arg0: $List$Type<(string)>): $Optional<(string)>
 "containsComment"(arg0: $List$Type<(string)>): boolean
 "containsComment"(arg0: string): boolean
 "commentMap"(): $Map<(string), (string)>
 "getComments"(): $Map<(string), ($UnmodifiableCommentedConfig$CommentNode)>
 "getComments"(arg0: $Map$Type<(string), ($UnmodifiableCommentedConfig$CommentNode$Type)>): void
 "entrySet"(): $Set<(any)>
 "valueMap"(): $Map<(string), (any)>
 "configFormat"(): $ConfigFormat<(any)>
 "getRaw"<T>(arg0: $List$Type<(string)>): T
 "getRaw"<T>(arg0: string): T
 "getOptional"<T>(arg0: $List$Type<(string)>): $Optional<(T)>
 "getOptional"<T>(arg0: string): $Optional<(T)>
 "getOrElse"<T>(arg0: string, arg1: $Supplier$Type<(T)>): T
 "getOrElse"<T>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(T)>): T
 "getOrElse"<T>(arg0: $List$Type<(string)>, arg1: T): T
 "getOrElse"<T>(arg0: string, arg1: T): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): T
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>): $Optional<(T)>
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $Supplier$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type, arg3: $Supplier$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $Supplier$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T, arg2: $EnumGetMethod$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: T, arg2: $EnumGetMethod$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type, arg3: $Supplier$Type<(T)>): T
 "getOptionalInt"(arg0: $List$Type<(string)>): $OptionalInt
 "getOptionalInt"(arg0: string): $OptionalInt
 "getIntOrElse"(arg0: string, arg1: integer): integer
 "getIntOrElse"(arg0: $List$Type<(string)>, arg1: integer): integer
 "getIntOrElse"(arg0: $List$Type<(string)>, arg1: $IntSupplier$Type): integer
 "getIntOrElse"(arg0: string, arg1: $IntSupplier$Type): integer
 "getOptionalLong"(arg0: string): $OptionalLong
 "getOptionalLong"(arg0: $List$Type<(string)>): $OptionalLong
 "getLongOrElse"(arg0: $List$Type<(string)>, arg1: long): long
 "getLongOrElse"(arg0: string, arg1: long): long
 "getLongOrElse"(arg0: string, arg1: $LongSupplier$Type): long
 "getLongOrElse"(arg0: $List$Type<(string)>, arg1: $LongSupplier$Type): long
 "getByteOrElse"(arg0: $List$Type<(string)>, arg1: byte): byte
 "getByteOrElse"(arg0: string, arg1: byte): byte
 "getShortOrElse"(arg0: $List$Type<(string)>, arg1: short): short
 "getShortOrElse"(arg0: string, arg1: short): short
 "getCharOrElse"(arg0: string, arg1: character): character
 "getCharOrElse"(arg0: $List$Type<(string)>, arg1: character): character
 "get"<T>(arg0: $List$Type<(string)>): T
 "get"<T>(arg0: string): T
 "getByte"(arg0: string): byte
 "getByte"(arg0: $List$Type<(string)>): byte
 "getShort"(arg0: $List$Type<(string)>): short
 "getShort"(arg0: string): short
 "getChar"(arg0: $List$Type<(string)>): character
 "getChar"(arg0: string): character
 "getInt"(arg0: $List$Type<(string)>): integer
 "getInt"(arg0: string): integer
 "getLong"(arg0: $List$Type<(string)>): long
 "getLong"(arg0: string): long
 "isEmpty"(): boolean
 "size"(): integer
 "apply"<T>(arg0: string): T
 "apply"<T>(arg0: $List$Type<(string)>): T
 "contains"(arg0: string): boolean
 "contains"(arg0: $List$Type<(string)>): boolean
 "isNull"(arg0: string): boolean
 "isNull"(arg0: $List$Type<(string)>): boolean
}

export namespace $UnmodifiableCommentedConfig {
function fake(arg0: $UnmodifiableConfig$Type): $UnmodifiableCommentedConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnmodifiableCommentedConfig$Type = ($UnmodifiableCommentedConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnmodifiableCommentedConfig_ = $UnmodifiableCommentedConfig$Type;
}}
declare module "packages/com/electronwill/nightconfig/core/file/$FileNotFoundAction" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$File, $File$Type} from "packages/java/io/$File"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$URL, $URL$Type} from "packages/java/net/$URL"
import {$ConfigFormat, $ConfigFormat$Type} from "packages/com/electronwill/nightconfig/core/$ConfigFormat"

export interface $FileNotFoundAction {

 "run"(arg0: $Path$Type, arg1: $ConfigFormat$Type<(any)>): boolean

(arg0: $Path$Type): $FileNotFoundAction
}

export namespace $FileNotFoundAction {
const CREATE_EMPTY: $FileNotFoundAction
const READ_NOTHING: $FileNotFoundAction
const THROW_ERROR: $FileNotFoundAction
function copyData(arg0: $Path$Type): $FileNotFoundAction
function copyData(arg0: $InputStream$Type): $FileNotFoundAction
function copyData(arg0: $File$Type): $FileNotFoundAction
function copyData(arg0: $URL$Type): $FileNotFoundAction
function copyResource(arg0: string): $FileNotFoundAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileNotFoundAction$Type = ($FileNotFoundAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FileNotFoundAction_ = $FileNotFoundAction$Type;
}}
declare module "packages/com/electronwill/nightconfig/core/io/$ConfigWriter" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$WritingMode, $WritingMode$Type} from "packages/com/electronwill/nightconfig/core/io/$WritingMode"
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$File, $File$Type} from "packages/java/io/$File"
import {$URL, $URL$Type} from "packages/java/net/$URL"
import {$Charset, $Charset$Type} from "packages/java/nio/charset/$Charset"
import {$Writer, $Writer$Type} from "packages/java/io/$Writer"
import {$UnmodifiableConfig, $UnmodifiableConfig$Type} from "packages/com/electronwill/nightconfig/core/$UnmodifiableConfig"

export interface $ConfigWriter {

 "writeToString"(arg0: $UnmodifiableConfig$Type): string
 "write"(arg0: $UnmodifiableConfig$Type, arg1: $File$Type, arg2: $WritingMode$Type): void
 "write"(arg0: $UnmodifiableConfig$Type, arg1: $File$Type, arg2: $WritingMode$Type, arg3: $Charset$Type): void
 "write"(arg0: $UnmodifiableConfig$Type, arg1: $URL$Type): void
 "write"(arg0: $UnmodifiableConfig$Type, arg1: $Writer$Type): void
 "write"(arg0: $UnmodifiableConfig$Type, arg1: $OutputStream$Type, arg2: $Charset$Type): void
 "write"(arg0: $UnmodifiableConfig$Type, arg1: $OutputStream$Type): void
 "write"(arg0: $UnmodifiableConfig$Type, arg1: $Path$Type, arg2: $WritingMode$Type): void
 "write"(arg0: $UnmodifiableConfig$Type, arg1: $Path$Type, arg2: $WritingMode$Type, arg3: $Charset$Type): void

(arg0: $UnmodifiableConfig$Type): string
}

export namespace $ConfigWriter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigWriter$Type = ($ConfigWriter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigWriter_ = $ConfigWriter$Type;
}}
declare module "packages/com/electronwill/nightconfig/core/utils/$WriterSupplier" {
import {$Writer, $Writer$Type} from "packages/java/io/$Writer"

export interface $WriterSupplier {

 "get"(): $Writer

(): $Writer
}

export namespace $WriterSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WriterSupplier$Type = ($WriterSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WriterSupplier_ = $WriterSupplier$Type;
}}
declare module "packages/com/electronwill/nightconfig/core/utils/$UnmodifiableConfigWrapper" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$ConfigFormat, $ConfigFormat$Type} from "packages/com/electronwill/nightconfig/core/$ConfigFormat"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$EnumGetMethod, $EnumGetMethod$Type} from "packages/com/electronwill/nightconfig/core/$EnumGetMethod"
import {$OptionalLong, $OptionalLong$Type} from "packages/java/util/$OptionalLong"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$LongSupplier, $LongSupplier$Type} from "packages/java/util/function/$LongSupplier"
import {$OptionalInt, $OptionalInt$Type} from "packages/java/util/$OptionalInt"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$UnmodifiableConfig, $UnmodifiableConfig$Type} from "packages/com/electronwill/nightconfig/core/$UnmodifiableConfig"

export class $UnmodifiableConfigWrapper<C extends $UnmodifiableConfig> implements $UnmodifiableConfig {


public "valueMap"(): $Map<(string), (any)>
public "configFormat"(): $ConfigFormat<(any)>
public "getRaw"<T>(arg0: $List$Type<(string)>): T
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public "size"(): integer
public "contains"(arg0: $List$Type<(string)>): boolean
public "entrySet"(): $Set<(any)>
public "getRaw"<T>(arg0: string): T
public "getOptional"<T>(arg0: $List$Type<(string)>): $Optional<(T)>
public "getOptional"<T>(arg0: string): $Optional<(T)>
public "getOrElse"<T>(arg0: string, arg1: $Supplier$Type<(T)>): T
public "getOrElse"<T>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(T)>): T
public "getOrElse"<T>(arg0: $List$Type<(string)>, arg1: T): T
public "getOrElse"<T>(arg0: string, arg1: T): T
public "getEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>): T
public "getEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): T
public "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>): T
public "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): T
public "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): $Optional<(T)>
public "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>): $Optional<(T)>
public "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): $Optional<(T)>
public "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>): $Optional<(T)>
public "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $Supplier$Type<(T)>): T
public "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: T): T
public "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type, arg3: $Supplier$Type<(T)>): T
public "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $Supplier$Type<(T)>): T
public "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T, arg2: $EnumGetMethod$Type): T
public "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T): T
public "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: T, arg2: $EnumGetMethod$Type): T
public "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type, arg3: $Supplier$Type<(T)>): T
public "getOptionalInt"(arg0: $List$Type<(string)>): $OptionalInt
public "getOptionalInt"(arg0: string): $OptionalInt
public "getIntOrElse"(arg0: string, arg1: integer): integer
public "getIntOrElse"(arg0: $List$Type<(string)>, arg1: integer): integer
public "getIntOrElse"(arg0: $List$Type<(string)>, arg1: $IntSupplier$Type): integer
public "getIntOrElse"(arg0: string, arg1: $IntSupplier$Type): integer
public "getOptionalLong"(arg0: string): $OptionalLong
public "getOptionalLong"(arg0: $List$Type<(string)>): $OptionalLong
public "getLongOrElse"(arg0: $List$Type<(string)>, arg1: long): long
public "getLongOrElse"(arg0: string, arg1: long): long
public "getLongOrElse"(arg0: string, arg1: $LongSupplier$Type): long
public "getLongOrElse"(arg0: $List$Type<(string)>, arg1: $LongSupplier$Type): long
public "getByteOrElse"(arg0: $List$Type<(string)>, arg1: byte): byte
public "getByteOrElse"(arg0: string, arg1: byte): byte
public "getShortOrElse"(arg0: $List$Type<(string)>, arg1: short): short
public "getShortOrElse"(arg0: string, arg1: short): short
public "getCharOrElse"(arg0: string, arg1: character): character
public "getCharOrElse"(arg0: $List$Type<(string)>, arg1: character): character
public "get"<T>(arg0: $List$Type<(string)>): T
public "get"<T>(arg0: string): T
public "getByte"(arg0: string): byte
public "getByte"(arg0: $List$Type<(string)>): byte
public "getShort"(arg0: $List$Type<(string)>): short
public "getShort"(arg0: string): short
public "getChar"(arg0: $List$Type<(string)>): character
public "getChar"(arg0: string): character
public "getInt"(arg0: $List$Type<(string)>): integer
public "getInt"(arg0: string): integer
public "getLong"(arg0: $List$Type<(string)>): long
public "getLong"(arg0: string): long
public "apply"<T>(arg0: string): T
public "apply"<T>(arg0: $List$Type<(string)>): T
public "contains"(arg0: string): boolean
public "isNull"(arg0: string): boolean
public "isNull"(arg0: $List$Type<(string)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnmodifiableConfigWrapper$Type<C> = ($UnmodifiableConfigWrapper<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnmodifiableConfigWrapper_<C> = $UnmodifiableConfigWrapper$Type<(C)>;
}}
declare module "packages/com/electronwill/nightconfig/core/$CommentedConfig" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$ConfigFormat, $ConfigFormat$Type} from "packages/com/electronwill/nightconfig/core/$ConfigFormat"
import {$Config, $Config$Type} from "packages/com/electronwill/nightconfig/core/$Config"
import {$UnmodifiableCommentedConfig, $UnmodifiableCommentedConfig$Type} from "packages/com/electronwill/nightconfig/core/$UnmodifiableCommentedConfig"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$EnumGetMethod, $EnumGetMethod$Type} from "packages/com/electronwill/nightconfig/core/$EnumGetMethod"
import {$OptionalLong, $OptionalLong$Type} from "packages/java/util/$OptionalLong"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$LongSupplier, $LongSupplier$Type} from "packages/java/util/function/$LongSupplier"
import {$OptionalInt, $OptionalInt$Type} from "packages/java/util/$OptionalInt"
import {$UnmodifiableCommentedConfig$CommentNode, $UnmodifiableCommentedConfig$CommentNode$Type} from "packages/com/electronwill/nightconfig/core/$UnmodifiableCommentedConfig$CommentNode"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$UnmodifiableConfig, $UnmodifiableConfig$Type} from "packages/com/electronwill/nightconfig/core/$UnmodifiableConfig"

export interface $CommentedConfig extends $UnmodifiableCommentedConfig, $Config {

 "setComment"(arg0: string, arg1: string): string
 "setComment"(arg0: $List$Type<(string)>, arg1: string): string
 "putAllComments"(arg0: $UnmodifiableCommentedConfig$Type): void
 "putAllComments"(arg0: $Map$Type<(string), ($UnmodifiableCommentedConfig$CommentNode$Type)>): void
 "commentMap"(): $Map<(string), (string)>
 "removeComment"(arg0: string): string
 "removeComment"(arg0: $List$Type<(string)>): string
 "clearComments"(): void
 "entrySet"(): $Set<(any)>
 "getComment"(arg0: string): string
 "getComment"(arg0: $List$Type<(string)>): string
 "getOptionalComment"(arg0: string): $Optional<(string)>
 "getOptionalComment"(arg0: $List$Type<(string)>): $Optional<(string)>
 "containsComment"(arg0: $List$Type<(string)>): boolean
 "containsComment"(arg0: string): boolean
 "getComments"(): $Map<(string), ($UnmodifiableCommentedConfig$CommentNode)>
 "getComments"(arg0: $Map$Type<(string), ($UnmodifiableCommentedConfig$CommentNode$Type)>): void
 "valueMap"(): $Map<(string), (any)>
 "add"(arg0: string, arg1: any): boolean
 "add"(arg0: $List$Type<(string)>, arg1: any): boolean
 "remove"<T>(arg0: $List$Type<(string)>): T
 "remove"<T>(arg0: string): T
 "update"(arg0: string, arg1: any): void
 "update"(arg0: $List$Type<(string)>, arg1: any): void
 "clear"(): void
 "addAll"(arg0: $UnmodifiableConfig$Type): void
 "putAll"(arg0: $UnmodifiableConfig$Type): void
 "set"<T>(arg0: string, arg1: any): T
 "set"<T>(arg0: $List$Type<(string)>, arg1: any): T
 "removeAll"(arg0: $UnmodifiableConfig$Type): void
 "configFormat"(): $ConfigFormat<(any)>
 "getRaw"<T>(arg0: $List$Type<(string)>): T
 "getRaw"<T>(arg0: string): T
 "getOptional"<T>(arg0: $List$Type<(string)>): $Optional<(T)>
 "getOptional"<T>(arg0: string): $Optional<(T)>
 "getOrElse"<T>(arg0: string, arg1: $Supplier$Type<(T)>): T
 "getOrElse"<T>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(T)>): T
 "getOrElse"<T>(arg0: $List$Type<(string)>, arg1: T): T
 "getOrElse"<T>(arg0: string, arg1: T): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): T
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>): $Optional<(T)>
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $Supplier$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type, arg3: $Supplier$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $Supplier$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T, arg2: $EnumGetMethod$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: T, arg2: $EnumGetMethod$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type, arg3: $Supplier$Type<(T)>): T
 "getOptionalInt"(arg0: $List$Type<(string)>): $OptionalInt
 "getOptionalInt"(arg0: string): $OptionalInt
 "getIntOrElse"(arg0: string, arg1: integer): integer
 "getIntOrElse"(arg0: $List$Type<(string)>, arg1: integer): integer
 "getIntOrElse"(arg0: $List$Type<(string)>, arg1: $IntSupplier$Type): integer
 "getIntOrElse"(arg0: string, arg1: $IntSupplier$Type): integer
 "getOptionalLong"(arg0: string): $OptionalLong
 "getOptionalLong"(arg0: $List$Type<(string)>): $OptionalLong
 "getLongOrElse"(arg0: $List$Type<(string)>, arg1: long): long
 "getLongOrElse"(arg0: string, arg1: long): long
 "getLongOrElse"(arg0: string, arg1: $LongSupplier$Type): long
 "getLongOrElse"(arg0: $List$Type<(string)>, arg1: $LongSupplier$Type): long
 "getByteOrElse"(arg0: $List$Type<(string)>, arg1: byte): byte
 "getByteOrElse"(arg0: string, arg1: byte): byte
 "getShortOrElse"(arg0: $List$Type<(string)>, arg1: short): short
 "getShortOrElse"(arg0: string, arg1: short): short
 "getCharOrElse"(arg0: string, arg1: character): character
 "getCharOrElse"(arg0: $List$Type<(string)>, arg1: character): character
 "get"<T>(arg0: $List$Type<(string)>): T
 "get"<T>(arg0: string): T
 "getByte"(arg0: string): byte
 "getByte"(arg0: $List$Type<(string)>): byte
 "getShort"(arg0: $List$Type<(string)>): short
 "getShort"(arg0: string): short
 "getChar"(arg0: $List$Type<(string)>): character
 "getChar"(arg0: string): character
 "getInt"(arg0: $List$Type<(string)>): integer
 "getInt"(arg0: string): integer
 "getLong"(arg0: $List$Type<(string)>): long
 "getLong"(arg0: string): long
 "isEmpty"(): boolean
 "size"(): integer
 "apply"<T>(arg0: string): T
 "apply"<T>(arg0: $List$Type<(string)>): T
 "contains"(arg0: string): boolean
 "contains"(arg0: $List$Type<(string)>): boolean
 "isNull"(arg0: string): boolean
 "isNull"(arg0: $List$Type<(string)>): boolean
}

export namespace $CommentedConfig {
function fake(arg0: $Config$Type): $CommentedConfig
function inMemory(): $CommentedConfig
function ofConcurrent(arg0: $ConfigFormat$Type<(any)>): $CommentedConfig
function inMemoryConcurrent(): $CommentedConfig
function concurrentCopy(arg0: $UnmodifiableConfig$Type): $CommentedConfig
function concurrentCopy(arg0: $UnmodifiableCommentedConfig$Type, arg1: $ConfigFormat$Type<(any)>): $CommentedConfig
function concurrentCopy(arg0: $UnmodifiableCommentedConfig$Type): $CommentedConfig
function concurrentCopy(arg0: $UnmodifiableConfig$Type, arg1: $ConfigFormat$Type<(any)>): $CommentedConfig
function wrap(arg0: $Map$Type<(string), (any)>, arg1: $ConfigFormat$Type<(any)>): $CommentedConfig
function of(arg0: $ConfigFormat$Type<(any)>): $CommentedConfig
function of(arg0: $Supplier$Type<($Map$Type<(string), (any)>)>, arg1: $ConfigFormat$Type<(any)>): $CommentedConfig
function copy(arg0: $UnmodifiableCommentedConfig$Type, arg1: $Supplier$Type<($Map$Type<(string), (any)>)>, arg2: $ConfigFormat$Type<(any)>): $CommentedConfig
function copy(arg0: $UnmodifiableConfig$Type, arg1: $Supplier$Type<($Map$Type<(string), (any)>)>, arg2: $ConfigFormat$Type<(any)>): $CommentedConfig
function copy(arg0: $UnmodifiableConfig$Type, arg1: $ConfigFormat$Type<(any)>): $CommentedConfig
function copy(arg0: $UnmodifiableConfig$Type, arg1: $Supplier$Type<($Map$Type<(string), (any)>)>): $CommentedConfig
function copy(arg0: $UnmodifiableConfig$Type): $CommentedConfig
function copy(arg0: $UnmodifiableCommentedConfig$Type, arg1: $ConfigFormat$Type<(any)>): $CommentedConfig
function copy(arg0: $UnmodifiableCommentedConfig$Type, arg1: $Supplier$Type<($Map$Type<(string), (any)>)>): $CommentedConfig
function copy(arg0: $UnmodifiableCommentedConfig$Type): $CommentedConfig
function fake(arg0: $UnmodifiableConfig$Type): $UnmodifiableCommentedConfig
function inMemoryUniversal(): $Config
function inMemoryUniversalConcurrent(): $Config
function isInsertionOrderPreserved(): boolean
function setInsertionOrderPreserved(arg0: boolean): void
function getDefaultMapCreator<T>(arg0: boolean, arg1: boolean): $Supplier<($Map<(string), (T)>)>
function getDefaultMapCreator<T>(arg0: boolean): $Supplier<($Map<(string), (T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommentedConfig$Type = ($CommentedConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommentedConfig_ = $CommentedConfig$Type;
}}
declare module "packages/com/electronwill/nightconfig/core/io/$ParsingMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Config, $Config$Type} from "packages/com/electronwill/nightconfig/core/$Config"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ParsingMode extends $Enum<($ParsingMode)> {
static readonly "REPLACE": $ParsingMode
static readonly "MERGE": $ParsingMode
static readonly "ADD": $ParsingMode


public "prepareParsing"(arg0: $Config$Type): void
public "put"(arg0: $Map$Type<(string), (any)>, arg1: string, arg2: any): any
public "put"(arg0: $Config$Type, arg1: string, arg2: any): any
public "put"(arg0: $Config$Type, arg1: $List$Type<(string)>, arg2: any): any
public static "values"(): ($ParsingMode)[]
public static "valueOf"(arg0: string): $ParsingMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParsingMode$Type = (("add") | ("merge") | ("replace")) | ($ParsingMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParsingMode_ = $ParsingMode$Type;
}}
declare module "packages/com/electronwill/nightconfig/core/$ConfigSpec$CorrectionListener" {
import {$ConfigSpec$CorrectionAction, $ConfigSpec$CorrectionAction$Type} from "packages/com/electronwill/nightconfig/core/$ConfigSpec$CorrectionAction"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $ConfigSpec$CorrectionListener {

 "onCorrect"(arg0: $ConfigSpec$CorrectionAction$Type, arg1: $List$Type<(string)>, arg2: any, arg3: any): void

(arg0: $ConfigSpec$CorrectionAction$Type, arg1: $List$Type<(string)>, arg2: any, arg3: any): void
}

export namespace $ConfigSpec$CorrectionListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigSpec$CorrectionListener$Type = ($ConfigSpec$CorrectionListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigSpec$CorrectionListener_ = $ConfigSpec$CorrectionListener$Type;
}}
declare module "packages/com/electronwill/nightconfig/core/$ConfigSpec$CorrectionAction" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ConfigSpec$CorrectionAction extends $Enum<($ConfigSpec$CorrectionAction)> {
static readonly "ADD": $ConfigSpec$CorrectionAction
static readonly "REPLACE": $ConfigSpec$CorrectionAction
static readonly "REMOVE": $ConfigSpec$CorrectionAction


public static "values"(): ($ConfigSpec$CorrectionAction)[]
public static "valueOf"(arg0: string): $ConfigSpec$CorrectionAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigSpec$CorrectionAction$Type = (("add") | ("replace") | ("remove")) | ($ConfigSpec$CorrectionAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigSpec$CorrectionAction_ = $ConfigSpec$CorrectionAction$Type;
}}
declare module "packages/com/electronwill/nightconfig/core/$UnmodifiableCommentedConfig$CommentNode" {
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UnmodifiableCommentedConfig$CommentNode {

constructor(arg0: string, arg1: $Map$Type<(string), ($UnmodifiableCommentedConfig$CommentNode$Type)>)

public "getComment"(): string
public "getChildren"(): $Map<(string), ($UnmodifiableCommentedConfig$CommentNode)>
get "comment"(): string
get "children"(): $Map<(string), ($UnmodifiableCommentedConfig$CommentNode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnmodifiableCommentedConfig$CommentNode$Type = ($UnmodifiableCommentedConfig$CommentNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnmodifiableCommentedConfig$CommentNode_ = $UnmodifiableCommentedConfig$CommentNode$Type;
}}
declare module "packages/com/electronwill/nightconfig/core/$EnumGetMethod" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $EnumGetMethod extends $Enum<($EnumGetMethod)> {
static readonly "NAME": $EnumGetMethod
static readonly "NAME_IGNORECASE": $EnumGetMethod
static readonly "ORDINAL_OR_NAME": $EnumGetMethod
static readonly "ORDINAL_OR_NAME_IGNORECASE": $EnumGetMethod


public "isOrdinalOk"(): boolean
public "isCaseSensitive"(): boolean
public "get"<T extends $Enum<(T)>>(arg0: any, arg1: $Class$Type<(T)>): T
public static "values"(): ($EnumGetMethod)[]
public static "valueOf"(arg0: string): $EnumGetMethod
public "validate"<T extends $Enum<(T)>>(arg0: any, arg1: $Class$Type<(T)>): boolean
get "ordinalOk"(): boolean
get "caseSensitive"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumGetMethod$Type = (("name_ignorecase") | ("name") | ("ordinal_or_name") | ("ordinal_or_name_ignorecase")) | ($EnumGetMethod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumGetMethod_ = $EnumGetMethod$Type;
}}
declare module "packages/com/electronwill/nightconfig/core/$ConfigFormat" {
import {$WriterSupplier, $WriterSupplier$Type} from "packages/com/electronwill/nightconfig/core/utils/$WriterSupplier"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$ConfigParser, $ConfigParser$Type} from "packages/com/electronwill/nightconfig/core/io/$ConfigParser"
import {$File, $File$Type} from "packages/java/io/$File"
import {$ConfigWriter, $ConfigWriter$Type} from "packages/com/electronwill/nightconfig/core/io/$ConfigWriter"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Config, $Config$Type} from "packages/com/electronwill/nightconfig/core/$Config"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ConfigFormat<C extends $Config> {

 "isInMemory"(): boolean
 "createConfig"(): C
 "createConfig"(arg0: $Supplier$Type<($Map$Type<(string), (any)>)>): C
 "createConcurrentConfig"(): C
 "createWriter"(): $ConfigWriter
 "createParser"(): $ConfigParser<(C)>
 "supportsComments"(): boolean
 "supportsType"(arg0: $Class$Type<(any)>): boolean
 "initEmptyFile"(arg0: $WriterSupplier$Type): void
 "initEmptyFile"(arg0: $File$Type): void
 "initEmptyFile"(arg0: $Path$Type): void
}

export namespace $ConfigFormat {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigFormat$Type<C> = ($ConfigFormat<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigFormat_<C> = $ConfigFormat$Type<(C)>;
}}
declare module "packages/com/electronwill/nightconfig/core/io/$WritingMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WritingMode extends $Enum<($WritingMode)> {
static readonly "REPLACE": $WritingMode
static readonly "APPEND": $WritingMode


public static "values"(): ($WritingMode)[]
public static "valueOf"(arg0: string): $WritingMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WritingMode$Type = (("replace") | ("append")) | ($WritingMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WritingMode_ = $WritingMode$Type;
}}
declare module "packages/com/electronwill/nightconfig/core/io/$ConfigParser" {
import {$ParsingMode, $ParsingMode$Type} from "packages/com/electronwill/nightconfig/core/io/$ParsingMode"
import {$FileNotFoundAction, $FileNotFoundAction$Type} from "packages/com/electronwill/nightconfig/core/file/$FileNotFoundAction"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$File, $File$Type} from "packages/java/io/$File"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$URL, $URL$Type} from "packages/java/net/$URL"
import {$ConfigFormat, $ConfigFormat$Type} from "packages/com/electronwill/nightconfig/core/$ConfigFormat"
import {$Charset, $Charset$Type} from "packages/java/nio/charset/$Charset"
import {$Config, $Config$Type} from "packages/com/electronwill/nightconfig/core/$Config"
import {$Reader, $Reader$Type} from "packages/java/io/$Reader"

export interface $ConfigParser<C extends $Config> {

 "getFormat"(): $ConfigFormat<(C)>
 "parse"(arg0: $File$Type, arg1: $Config$Type, arg2: $ParsingMode$Type, arg3: $FileNotFoundAction$Type, arg4: $Charset$Type): void
 "parse"(arg0: $Path$Type, arg1: $FileNotFoundAction$Type): C
 "parse"(arg0: $Path$Type, arg1: $FileNotFoundAction$Type, arg2: $Charset$Type): C
 "parse"(arg0: $File$Type, arg1: $Config$Type, arg2: $ParsingMode$Type, arg3: $FileNotFoundAction$Type): void
 "parse"(arg0: $File$Type, arg1: $FileNotFoundAction$Type, arg2: $Charset$Type): C
 "parse"(arg0: $URL$Type, arg1: $Config$Type, arg2: $ParsingMode$Type): void
 "parse"(arg0: $URL$Type): C
 "parse"(arg0: $Path$Type, arg1: $Config$Type, arg2: $ParsingMode$Type, arg3: $FileNotFoundAction$Type, arg4: $Charset$Type): void
 "parse"(arg0: $Path$Type, arg1: $Config$Type, arg2: $ParsingMode$Type, arg3: $FileNotFoundAction$Type): void
 "parse"(arg0: $InputStream$Type): C
 "parse"(arg0: string, arg1: $Config$Type, arg2: $ParsingMode$Type): void
 "parse"(arg0: string): C
 "parse"(arg0: $Reader$Type, arg1: $Config$Type, arg2: $ParsingMode$Type): void
 "parse"(arg0: $Reader$Type): C
 "parse"(arg0: $File$Type, arg1: $FileNotFoundAction$Type): C
 "parse"(arg0: $InputStream$Type, arg1: $Config$Type, arg2: $ParsingMode$Type, arg3: $Charset$Type): void
 "parse"(arg0: $InputStream$Type, arg1: $Config$Type, arg2: $ParsingMode$Type): void
 "parse"(arg0: $InputStream$Type, arg1: $Charset$Type): C
}

export namespace $ConfigParser {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigParser$Type<C> = ($ConfigParser<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigParser_<C> = $ConfigParser$Type<(C)>;
}}
declare module "packages/com/electronwill/nightconfig/core/$Config" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$ConfigFormat, $ConfigFormat$Type} from "packages/com/electronwill/nightconfig/core/$ConfigFormat"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$EnumGetMethod, $EnumGetMethod$Type} from "packages/com/electronwill/nightconfig/core/$EnumGetMethod"
import {$OptionalLong, $OptionalLong$Type} from "packages/java/util/$OptionalLong"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$LongSupplier, $LongSupplier$Type} from "packages/java/util/function/$LongSupplier"
import {$OptionalInt, $OptionalInt$Type} from "packages/java/util/$OptionalInt"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$UnmodifiableConfig, $UnmodifiableConfig$Type} from "packages/com/electronwill/nightconfig/core/$UnmodifiableConfig"

export interface $Config extends $UnmodifiableConfig {

 "valueMap"(): $Map<(string), (any)>
 "unmodifiable"(): $UnmodifiableConfig
 "createSubConfig"(): $Config
 "add"(arg0: string, arg1: any): boolean
 "add"(arg0: $List$Type<(string)>, arg1: any): boolean
 "remove"<T>(arg0: $List$Type<(string)>): T
 "remove"<T>(arg0: string): T
 "update"(arg0: string, arg1: any): void
 "update"(arg0: $List$Type<(string)>, arg1: any): void
 "clear"(): void
 "addAll"(arg0: $UnmodifiableConfig$Type): void
 "entrySet"(): $Set<(any)>
 "putAll"(arg0: $UnmodifiableConfig$Type): void
 "set"<T>(arg0: string, arg1: any): T
 "set"<T>(arg0: $List$Type<(string)>, arg1: any): T
 "checked"(): $Config
 "removeAll"(arg0: $UnmodifiableConfig$Type): void
 "configFormat"(): $ConfigFormat<(any)>
 "getRaw"<T>(arg0: $List$Type<(string)>): T
 "getRaw"<T>(arg0: string): T
 "getOptional"<T>(arg0: $List$Type<(string)>): $Optional<(T)>
 "getOptional"<T>(arg0: string): $Optional<(T)>
 "getOrElse"<T>(arg0: string, arg1: $Supplier$Type<(T)>): T
 "getOrElse"<T>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(T)>): T
 "getOrElse"<T>(arg0: $List$Type<(string)>, arg1: T): T
 "getOrElse"<T>(arg0: string, arg1: T): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): T
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>): $Optional<(T)>
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $Supplier$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type, arg3: $Supplier$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $Supplier$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T, arg2: $EnumGetMethod$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: T, arg2: $EnumGetMethod$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type, arg3: $Supplier$Type<(T)>): T
 "getOptionalInt"(arg0: $List$Type<(string)>): $OptionalInt
 "getOptionalInt"(arg0: string): $OptionalInt
 "getIntOrElse"(arg0: string, arg1: integer): integer
 "getIntOrElse"(arg0: $List$Type<(string)>, arg1: integer): integer
 "getIntOrElse"(arg0: $List$Type<(string)>, arg1: $IntSupplier$Type): integer
 "getIntOrElse"(arg0: string, arg1: $IntSupplier$Type): integer
 "getOptionalLong"(arg0: string): $OptionalLong
 "getOptionalLong"(arg0: $List$Type<(string)>): $OptionalLong
 "getLongOrElse"(arg0: $List$Type<(string)>, arg1: long): long
 "getLongOrElse"(arg0: string, arg1: long): long
 "getLongOrElse"(arg0: string, arg1: $LongSupplier$Type): long
 "getLongOrElse"(arg0: $List$Type<(string)>, arg1: $LongSupplier$Type): long
 "getByteOrElse"(arg0: $List$Type<(string)>, arg1: byte): byte
 "getByteOrElse"(arg0: string, arg1: byte): byte
 "getShortOrElse"(arg0: $List$Type<(string)>, arg1: short): short
 "getShortOrElse"(arg0: string, arg1: short): short
 "getCharOrElse"(arg0: string, arg1: character): character
 "getCharOrElse"(arg0: $List$Type<(string)>, arg1: character): character
 "get"<T>(arg0: $List$Type<(string)>): T
 "get"<T>(arg0: string): T
 "getByte"(arg0: string): byte
 "getByte"(arg0: $List$Type<(string)>): byte
 "getShort"(arg0: $List$Type<(string)>): short
 "getShort"(arg0: string): short
 "getChar"(arg0: $List$Type<(string)>): character
 "getChar"(arg0: string): character
 "getInt"(arg0: $List$Type<(string)>): integer
 "getInt"(arg0: string): integer
 "getLong"(arg0: $List$Type<(string)>): long
 "getLong"(arg0: string): long
 "isEmpty"(): boolean
 "size"(): integer
 "apply"<T>(arg0: string): T
 "apply"<T>(arg0: $List$Type<(string)>): T
 "contains"(arg0: string): boolean
 "contains"(arg0: $List$Type<(string)>): boolean
 "isNull"(arg0: string): boolean
 "isNull"(arg0: $List$Type<(string)>): boolean
}

export namespace $Config {
function inMemory(): $Config
function ofConcurrent(arg0: $ConfigFormat$Type<(any)>): $Config
function inMemoryUniversal(): $Config
function inMemoryConcurrent(): $Config
function inMemoryUniversalConcurrent(): $Config
function concurrentCopy(arg0: $UnmodifiableConfig$Type, arg1: $ConfigFormat$Type<(any)>): $Config
function concurrentCopy(arg0: $UnmodifiableConfig$Type): $Config
function isInsertionOrderPreserved(): boolean
function setInsertionOrderPreserved(arg0: boolean): void
function getDefaultMapCreator<T>(arg0: boolean, arg1: boolean): $Supplier<($Map<(string), (T)>)>
function getDefaultMapCreator<T>(arg0: boolean): $Supplier<($Map<(string), (T)>)>
function wrap(arg0: $Map$Type<(string), (any)>, arg1: $ConfigFormat$Type<(any)>): $Config
function of(arg0: $Supplier$Type<($Map$Type<(string), (any)>)>, arg1: $ConfigFormat$Type<(any)>): $Config
function of(arg0: $ConfigFormat$Type<(any)>): $Config
function copy(arg0: $UnmodifiableConfig$Type, arg1: $ConfigFormat$Type<(any)>): $Config
function copy(arg0: $UnmodifiableConfig$Type): $Config
function copy(arg0: $UnmodifiableConfig$Type, arg1: $Supplier$Type<($Map$Type<(string), (any)>)>, arg2: $ConfigFormat$Type<(any)>): $Config
function copy(arg0: $UnmodifiableConfig$Type, arg1: $Supplier$Type<($Map$Type<(string), (any)>)>): $Config
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Config$Type = ($Config);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Config_ = $Config$Type;
}}
