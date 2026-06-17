
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model G7E_AudioFile
 * 
 */
export type G7E_AudioFile = $Result.DefaultSelection<Prisma.$G7E_AudioFilePayload>
/**
 * Model ImuReading
 * 
 */
export type ImuReading = $Result.DefaultSelection<Prisma.$ImuReadingPayload>
/**
 * Model GasMeasure
 * 
 */
export type GasMeasure = $Result.DefaultSelection<Prisma.$GasMeasurePayload>
/**
 * Model CapteurReculHistory
 * 
 */
export type CapteurReculHistory = $Result.DefaultSelection<Prisma.$CapteurReculHistoryPayload>
/**
 * Model MesureCapteur
 * 
 */
export type MesureCapteur = $Result.DefaultSelection<Prisma.$MesureCapteurPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more G7E_AudioFiles
 * const g7E_AudioFiles = await prisma.g7E_AudioFile.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more G7E_AudioFiles
   * const g7E_AudioFiles = await prisma.g7E_AudioFile.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.g7E_AudioFile`: Exposes CRUD operations for the **G7E_AudioFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more G7E_AudioFiles
    * const g7E_AudioFiles = await prisma.g7E_AudioFile.findMany()
    * ```
    */
  get g7E_AudioFile(): Prisma.G7E_AudioFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imuReading`: Exposes CRUD operations for the **ImuReading** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImuReadings
    * const imuReadings = await prisma.imuReading.findMany()
    * ```
    */
  get imuReading(): Prisma.ImuReadingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gasMeasure`: Exposes CRUD operations for the **GasMeasure** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GasMeasures
    * const gasMeasures = await prisma.gasMeasure.findMany()
    * ```
    */
  get gasMeasure(): Prisma.GasMeasureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.capteurReculHistory`: Exposes CRUD operations for the **CapteurReculHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CapteurReculHistories
    * const capteurReculHistories = await prisma.capteurReculHistory.findMany()
    * ```
    */
  get capteurReculHistory(): Prisma.CapteurReculHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mesureCapteur`: Exposes CRUD operations for the **MesureCapteur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MesureCapteurs
    * const mesureCapteurs = await prisma.mesureCapteur.findMany()
    * ```
    */
  get mesureCapteur(): Prisma.MesureCapteurDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    G7E_AudioFile: 'G7E_AudioFile',
    ImuReading: 'ImuReading',
    GasMeasure: 'GasMeasure',
    CapteurReculHistory: 'CapteurReculHistory',
    MesureCapteur: 'MesureCapteur'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "g7E_AudioFile" | "imuReading" | "gasMeasure" | "capteurReculHistory" | "mesureCapteur"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      G7E_AudioFile: {
        payload: Prisma.$G7E_AudioFilePayload<ExtArgs>
        fields: Prisma.G7E_AudioFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.G7E_AudioFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_AudioFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.G7E_AudioFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_AudioFilePayload>
          }
          findFirst: {
            args: Prisma.G7E_AudioFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_AudioFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.G7E_AudioFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_AudioFilePayload>
          }
          findMany: {
            args: Prisma.G7E_AudioFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_AudioFilePayload>[]
          }
          create: {
            args: Prisma.G7E_AudioFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_AudioFilePayload>
          }
          createMany: {
            args: Prisma.G7E_AudioFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.G7E_AudioFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_AudioFilePayload>
          }
          update: {
            args: Prisma.G7E_AudioFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_AudioFilePayload>
          }
          deleteMany: {
            args: Prisma.G7E_AudioFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.G7E_AudioFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.G7E_AudioFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_AudioFilePayload>
          }
          aggregate: {
            args: Prisma.G7E_AudioFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateG7E_AudioFile>
          }
          groupBy: {
            args: Prisma.G7E_AudioFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<G7E_AudioFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.G7E_AudioFileCountArgs<ExtArgs>
            result: $Utils.Optional<G7E_AudioFileCountAggregateOutputType> | number
          }
        }
      }
      ImuReading: {
        payload: Prisma.$ImuReadingPayload<ExtArgs>
        fields: Prisma.ImuReadingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImuReadingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImuReadingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImuReadingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImuReadingPayload>
          }
          findFirst: {
            args: Prisma.ImuReadingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImuReadingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImuReadingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImuReadingPayload>
          }
          findMany: {
            args: Prisma.ImuReadingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImuReadingPayload>[]
          }
          create: {
            args: Prisma.ImuReadingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImuReadingPayload>
          }
          createMany: {
            args: Prisma.ImuReadingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ImuReadingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImuReadingPayload>
          }
          update: {
            args: Prisma.ImuReadingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImuReadingPayload>
          }
          deleteMany: {
            args: Prisma.ImuReadingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImuReadingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ImuReadingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImuReadingPayload>
          }
          aggregate: {
            args: Prisma.ImuReadingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImuReading>
          }
          groupBy: {
            args: Prisma.ImuReadingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImuReadingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImuReadingCountArgs<ExtArgs>
            result: $Utils.Optional<ImuReadingCountAggregateOutputType> | number
          }
        }
      }
      GasMeasure: {
        payload: Prisma.$GasMeasurePayload<ExtArgs>
        fields: Prisma.GasMeasureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GasMeasureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GasMeasurePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GasMeasureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GasMeasurePayload>
          }
          findFirst: {
            args: Prisma.GasMeasureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GasMeasurePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GasMeasureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GasMeasurePayload>
          }
          findMany: {
            args: Prisma.GasMeasureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GasMeasurePayload>[]
          }
          create: {
            args: Prisma.GasMeasureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GasMeasurePayload>
          }
          createMany: {
            args: Prisma.GasMeasureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GasMeasureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GasMeasurePayload>
          }
          update: {
            args: Prisma.GasMeasureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GasMeasurePayload>
          }
          deleteMany: {
            args: Prisma.GasMeasureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GasMeasureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GasMeasureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GasMeasurePayload>
          }
          aggregate: {
            args: Prisma.GasMeasureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGasMeasure>
          }
          groupBy: {
            args: Prisma.GasMeasureGroupByArgs<ExtArgs>
            result: $Utils.Optional<GasMeasureGroupByOutputType>[]
          }
          count: {
            args: Prisma.GasMeasureCountArgs<ExtArgs>
            result: $Utils.Optional<GasMeasureCountAggregateOutputType> | number
          }
        }
      }
      CapteurReculHistory: {
        payload: Prisma.$CapteurReculHistoryPayload<ExtArgs>
        fields: Prisma.CapteurReculHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CapteurReculHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurReculHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CapteurReculHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurReculHistoryPayload>
          }
          findFirst: {
            args: Prisma.CapteurReculHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurReculHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CapteurReculHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurReculHistoryPayload>
          }
          findMany: {
            args: Prisma.CapteurReculHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurReculHistoryPayload>[]
          }
          create: {
            args: Prisma.CapteurReculHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurReculHistoryPayload>
          }
          createMany: {
            args: Prisma.CapteurReculHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CapteurReculHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurReculHistoryPayload>
          }
          update: {
            args: Prisma.CapteurReculHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurReculHistoryPayload>
          }
          deleteMany: {
            args: Prisma.CapteurReculHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CapteurReculHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CapteurReculHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurReculHistoryPayload>
          }
          aggregate: {
            args: Prisma.CapteurReculHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCapteurReculHistory>
          }
          groupBy: {
            args: Prisma.CapteurReculHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CapteurReculHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CapteurReculHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<CapteurReculHistoryCountAggregateOutputType> | number
          }
        }
      }
      MesureCapteur: {
        payload: Prisma.$MesureCapteurPayload<ExtArgs>
        fields: Prisma.MesureCapteurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MesureCapteurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesureCapteurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MesureCapteurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesureCapteurPayload>
          }
          findFirst: {
            args: Prisma.MesureCapteurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesureCapteurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MesureCapteurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesureCapteurPayload>
          }
          findMany: {
            args: Prisma.MesureCapteurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesureCapteurPayload>[]
          }
          create: {
            args: Prisma.MesureCapteurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesureCapteurPayload>
          }
          createMany: {
            args: Prisma.MesureCapteurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MesureCapteurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesureCapteurPayload>
          }
          update: {
            args: Prisma.MesureCapteurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesureCapteurPayload>
          }
          deleteMany: {
            args: Prisma.MesureCapteurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MesureCapteurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MesureCapteurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesureCapteurPayload>
          }
          aggregate: {
            args: Prisma.MesureCapteurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMesureCapteur>
          }
          groupBy: {
            args: Prisma.MesureCapteurGroupByArgs<ExtArgs>
            result: $Utils.Optional<MesureCapteurGroupByOutputType>[]
          }
          count: {
            args: Prisma.MesureCapteurCountArgs<ExtArgs>
            result: $Utils.Optional<MesureCapteurCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    g7E_AudioFile?: G7E_AudioFileOmit
    imuReading?: ImuReadingOmit
    gasMeasure?: GasMeasureOmit
    capteurReculHistory?: CapteurReculHistoryOmit
    mesureCapteur?: MesureCapteurOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model G7E_AudioFile
   */

  export type AggregateG7E_AudioFile = {
    _count: G7E_AudioFileCountAggregateOutputType | null
    _avg: G7E_AudioFileAvgAggregateOutputType | null
    _sum: G7E_AudioFileSumAggregateOutputType | null
    _min: G7E_AudioFileMinAggregateOutputType | null
    _max: G7E_AudioFileMaxAggregateOutputType | null
  }

  export type G7E_AudioFileAvgAggregateOutputType = {
    id: number | null
    fileSize: number | null
    duration: number | null
  }

  export type G7E_AudioFileSumAggregateOutputType = {
    id: number | null
    fileSize: number | null
    duration: number | null
  }

  export type G7E_AudioFileMinAggregateOutputType = {
    id: number | null
    filename: string | null
    minioBucket: string | null
    minioPath: string | null
    fileSize: number | null
    duration: number | null
    uploadedAt: Date | null
  }

  export type G7E_AudioFileMaxAggregateOutputType = {
    id: number | null
    filename: string | null
    minioBucket: string | null
    minioPath: string | null
    fileSize: number | null
    duration: number | null
    uploadedAt: Date | null
  }

  export type G7E_AudioFileCountAggregateOutputType = {
    id: number
    filename: number
    minioBucket: number
    minioPath: number
    fileSize: number
    duration: number
    uploadedAt: number
    _all: number
  }


  export type G7E_AudioFileAvgAggregateInputType = {
    id?: true
    fileSize?: true
    duration?: true
  }

  export type G7E_AudioFileSumAggregateInputType = {
    id?: true
    fileSize?: true
    duration?: true
  }

  export type G7E_AudioFileMinAggregateInputType = {
    id?: true
    filename?: true
    minioBucket?: true
    minioPath?: true
    fileSize?: true
    duration?: true
    uploadedAt?: true
  }

  export type G7E_AudioFileMaxAggregateInputType = {
    id?: true
    filename?: true
    minioBucket?: true
    minioPath?: true
    fileSize?: true
    duration?: true
    uploadedAt?: true
  }

  export type G7E_AudioFileCountAggregateInputType = {
    id?: true
    filename?: true
    minioBucket?: true
    minioPath?: true
    fileSize?: true
    duration?: true
    uploadedAt?: true
    _all?: true
  }

  export type G7E_AudioFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which G7E_AudioFile to aggregate.
     */
    where?: G7E_AudioFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of G7E_AudioFiles to fetch.
     */
    orderBy?: G7E_AudioFileOrderByWithRelationInput | G7E_AudioFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: G7E_AudioFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` G7E_AudioFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` G7E_AudioFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned G7E_AudioFiles
    **/
    _count?: true | G7E_AudioFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: G7E_AudioFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: G7E_AudioFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: G7E_AudioFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: G7E_AudioFileMaxAggregateInputType
  }

  export type GetG7E_AudioFileAggregateType<T extends G7E_AudioFileAggregateArgs> = {
        [P in keyof T & keyof AggregateG7E_AudioFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateG7E_AudioFile[P]>
      : GetScalarType<T[P], AggregateG7E_AudioFile[P]>
  }




  export type G7E_AudioFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: G7E_AudioFileWhereInput
    orderBy?: G7E_AudioFileOrderByWithAggregationInput | G7E_AudioFileOrderByWithAggregationInput[]
    by: G7E_AudioFileScalarFieldEnum[] | G7E_AudioFileScalarFieldEnum
    having?: G7E_AudioFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: G7E_AudioFileCountAggregateInputType | true
    _avg?: G7E_AudioFileAvgAggregateInputType
    _sum?: G7E_AudioFileSumAggregateInputType
    _min?: G7E_AudioFileMinAggregateInputType
    _max?: G7E_AudioFileMaxAggregateInputType
  }

  export type G7E_AudioFileGroupByOutputType = {
    id: number
    filename: string | null
    minioBucket: string | null
    minioPath: string | null
    fileSize: number | null
    duration: number | null
    uploadedAt: Date
    _count: G7E_AudioFileCountAggregateOutputType | null
    _avg: G7E_AudioFileAvgAggregateOutputType | null
    _sum: G7E_AudioFileSumAggregateOutputType | null
    _min: G7E_AudioFileMinAggregateOutputType | null
    _max: G7E_AudioFileMaxAggregateOutputType | null
  }

  type GetG7E_AudioFileGroupByPayload<T extends G7E_AudioFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<G7E_AudioFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof G7E_AudioFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], G7E_AudioFileGroupByOutputType[P]>
            : GetScalarType<T[P], G7E_AudioFileGroupByOutputType[P]>
        }
      >
    >


  export type G7E_AudioFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    minioBucket?: boolean
    minioPath?: boolean
    fileSize?: boolean
    duration?: boolean
    uploadedAt?: boolean
  }, ExtArgs["result"]["g7E_AudioFile"]>



  export type G7E_AudioFileSelectScalar = {
    id?: boolean
    filename?: boolean
    minioBucket?: boolean
    minioPath?: boolean
    fileSize?: boolean
    duration?: boolean
    uploadedAt?: boolean
  }

  export type G7E_AudioFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "minioBucket" | "minioPath" | "fileSize" | "duration" | "uploadedAt", ExtArgs["result"]["g7E_AudioFile"]>

  export type $G7E_AudioFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "G7E_AudioFile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      filename: string | null
      minioBucket: string | null
      minioPath: string | null
      fileSize: number | null
      duration: number | null
      uploadedAt: Date
    }, ExtArgs["result"]["g7E_AudioFile"]>
    composites: {}
  }

  type G7E_AudioFileGetPayload<S extends boolean | null | undefined | G7E_AudioFileDefaultArgs> = $Result.GetResult<Prisma.$G7E_AudioFilePayload, S>

  type G7E_AudioFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<G7E_AudioFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: G7E_AudioFileCountAggregateInputType | true
    }

  export interface G7E_AudioFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['G7E_AudioFile'], meta: { name: 'G7E_AudioFile' } }
    /**
     * Find zero or one G7E_AudioFile that matches the filter.
     * @param {G7E_AudioFileFindUniqueArgs} args - Arguments to find a G7E_AudioFile
     * @example
     * // Get one G7E_AudioFile
     * const g7E_AudioFile = await prisma.g7E_AudioFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends G7E_AudioFileFindUniqueArgs>(args: SelectSubset<T, G7E_AudioFileFindUniqueArgs<ExtArgs>>): Prisma__G7E_AudioFileClient<$Result.GetResult<Prisma.$G7E_AudioFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one G7E_AudioFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {G7E_AudioFileFindUniqueOrThrowArgs} args - Arguments to find a G7E_AudioFile
     * @example
     * // Get one G7E_AudioFile
     * const g7E_AudioFile = await prisma.g7E_AudioFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends G7E_AudioFileFindUniqueOrThrowArgs>(args: SelectSubset<T, G7E_AudioFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__G7E_AudioFileClient<$Result.GetResult<Prisma.$G7E_AudioFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first G7E_AudioFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_AudioFileFindFirstArgs} args - Arguments to find a G7E_AudioFile
     * @example
     * // Get one G7E_AudioFile
     * const g7E_AudioFile = await prisma.g7E_AudioFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends G7E_AudioFileFindFirstArgs>(args?: SelectSubset<T, G7E_AudioFileFindFirstArgs<ExtArgs>>): Prisma__G7E_AudioFileClient<$Result.GetResult<Prisma.$G7E_AudioFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first G7E_AudioFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_AudioFileFindFirstOrThrowArgs} args - Arguments to find a G7E_AudioFile
     * @example
     * // Get one G7E_AudioFile
     * const g7E_AudioFile = await prisma.g7E_AudioFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends G7E_AudioFileFindFirstOrThrowArgs>(args?: SelectSubset<T, G7E_AudioFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__G7E_AudioFileClient<$Result.GetResult<Prisma.$G7E_AudioFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more G7E_AudioFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_AudioFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all G7E_AudioFiles
     * const g7E_AudioFiles = await prisma.g7E_AudioFile.findMany()
     * 
     * // Get first 10 G7E_AudioFiles
     * const g7E_AudioFiles = await prisma.g7E_AudioFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const g7E_AudioFileWithIdOnly = await prisma.g7E_AudioFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends G7E_AudioFileFindManyArgs>(args?: SelectSubset<T, G7E_AudioFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$G7E_AudioFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a G7E_AudioFile.
     * @param {G7E_AudioFileCreateArgs} args - Arguments to create a G7E_AudioFile.
     * @example
     * // Create one G7E_AudioFile
     * const G7E_AudioFile = await prisma.g7E_AudioFile.create({
     *   data: {
     *     // ... data to create a G7E_AudioFile
     *   }
     * })
     * 
     */
    create<T extends G7E_AudioFileCreateArgs>(args: SelectSubset<T, G7E_AudioFileCreateArgs<ExtArgs>>): Prisma__G7E_AudioFileClient<$Result.GetResult<Prisma.$G7E_AudioFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many G7E_AudioFiles.
     * @param {G7E_AudioFileCreateManyArgs} args - Arguments to create many G7E_AudioFiles.
     * @example
     * // Create many G7E_AudioFiles
     * const g7E_AudioFile = await prisma.g7E_AudioFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends G7E_AudioFileCreateManyArgs>(args?: SelectSubset<T, G7E_AudioFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a G7E_AudioFile.
     * @param {G7E_AudioFileDeleteArgs} args - Arguments to delete one G7E_AudioFile.
     * @example
     * // Delete one G7E_AudioFile
     * const G7E_AudioFile = await prisma.g7E_AudioFile.delete({
     *   where: {
     *     // ... filter to delete one G7E_AudioFile
     *   }
     * })
     * 
     */
    delete<T extends G7E_AudioFileDeleteArgs>(args: SelectSubset<T, G7E_AudioFileDeleteArgs<ExtArgs>>): Prisma__G7E_AudioFileClient<$Result.GetResult<Prisma.$G7E_AudioFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one G7E_AudioFile.
     * @param {G7E_AudioFileUpdateArgs} args - Arguments to update one G7E_AudioFile.
     * @example
     * // Update one G7E_AudioFile
     * const g7E_AudioFile = await prisma.g7E_AudioFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends G7E_AudioFileUpdateArgs>(args: SelectSubset<T, G7E_AudioFileUpdateArgs<ExtArgs>>): Prisma__G7E_AudioFileClient<$Result.GetResult<Prisma.$G7E_AudioFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more G7E_AudioFiles.
     * @param {G7E_AudioFileDeleteManyArgs} args - Arguments to filter G7E_AudioFiles to delete.
     * @example
     * // Delete a few G7E_AudioFiles
     * const { count } = await prisma.g7E_AudioFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends G7E_AudioFileDeleteManyArgs>(args?: SelectSubset<T, G7E_AudioFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more G7E_AudioFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_AudioFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many G7E_AudioFiles
     * const g7E_AudioFile = await prisma.g7E_AudioFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends G7E_AudioFileUpdateManyArgs>(args: SelectSubset<T, G7E_AudioFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one G7E_AudioFile.
     * @param {G7E_AudioFileUpsertArgs} args - Arguments to update or create a G7E_AudioFile.
     * @example
     * // Update or create a G7E_AudioFile
     * const g7E_AudioFile = await prisma.g7E_AudioFile.upsert({
     *   create: {
     *     // ... data to create a G7E_AudioFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the G7E_AudioFile we want to update
     *   }
     * })
     */
    upsert<T extends G7E_AudioFileUpsertArgs>(args: SelectSubset<T, G7E_AudioFileUpsertArgs<ExtArgs>>): Prisma__G7E_AudioFileClient<$Result.GetResult<Prisma.$G7E_AudioFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of G7E_AudioFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_AudioFileCountArgs} args - Arguments to filter G7E_AudioFiles to count.
     * @example
     * // Count the number of G7E_AudioFiles
     * const count = await prisma.g7E_AudioFile.count({
     *   where: {
     *     // ... the filter for the G7E_AudioFiles we want to count
     *   }
     * })
    **/
    count<T extends G7E_AudioFileCountArgs>(
      args?: Subset<T, G7E_AudioFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], G7E_AudioFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a G7E_AudioFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_AudioFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends G7E_AudioFileAggregateArgs>(args: Subset<T, G7E_AudioFileAggregateArgs>): Prisma.PrismaPromise<GetG7E_AudioFileAggregateType<T>>

    /**
     * Group by G7E_AudioFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_AudioFileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends G7E_AudioFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: G7E_AudioFileGroupByArgs['orderBy'] }
        : { orderBy?: G7E_AudioFileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, G7E_AudioFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetG7E_AudioFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the G7E_AudioFile model
   */
  readonly fields: G7E_AudioFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for G7E_AudioFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__G7E_AudioFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the G7E_AudioFile model
   */
  interface G7E_AudioFileFieldRefs {
    readonly id: FieldRef<"G7E_AudioFile", 'Int'>
    readonly filename: FieldRef<"G7E_AudioFile", 'String'>
    readonly minioBucket: FieldRef<"G7E_AudioFile", 'String'>
    readonly minioPath: FieldRef<"G7E_AudioFile", 'String'>
    readonly fileSize: FieldRef<"G7E_AudioFile", 'Int'>
    readonly duration: FieldRef<"G7E_AudioFile", 'Int'>
    readonly uploadedAt: FieldRef<"G7E_AudioFile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * G7E_AudioFile findUnique
   */
  export type G7E_AudioFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_AudioFile
     */
    select?: G7E_AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_AudioFile
     */
    omit?: G7E_AudioFileOmit<ExtArgs> | null
    /**
     * Filter, which G7E_AudioFile to fetch.
     */
    where: G7E_AudioFileWhereUniqueInput
  }

  /**
   * G7E_AudioFile findUniqueOrThrow
   */
  export type G7E_AudioFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_AudioFile
     */
    select?: G7E_AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_AudioFile
     */
    omit?: G7E_AudioFileOmit<ExtArgs> | null
    /**
     * Filter, which G7E_AudioFile to fetch.
     */
    where: G7E_AudioFileWhereUniqueInput
  }

  /**
   * G7E_AudioFile findFirst
   */
  export type G7E_AudioFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_AudioFile
     */
    select?: G7E_AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_AudioFile
     */
    omit?: G7E_AudioFileOmit<ExtArgs> | null
    /**
     * Filter, which G7E_AudioFile to fetch.
     */
    where?: G7E_AudioFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of G7E_AudioFiles to fetch.
     */
    orderBy?: G7E_AudioFileOrderByWithRelationInput | G7E_AudioFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for G7E_AudioFiles.
     */
    cursor?: G7E_AudioFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` G7E_AudioFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` G7E_AudioFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of G7E_AudioFiles.
     */
    distinct?: G7E_AudioFileScalarFieldEnum | G7E_AudioFileScalarFieldEnum[]
  }

  /**
   * G7E_AudioFile findFirstOrThrow
   */
  export type G7E_AudioFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_AudioFile
     */
    select?: G7E_AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_AudioFile
     */
    omit?: G7E_AudioFileOmit<ExtArgs> | null
    /**
     * Filter, which G7E_AudioFile to fetch.
     */
    where?: G7E_AudioFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of G7E_AudioFiles to fetch.
     */
    orderBy?: G7E_AudioFileOrderByWithRelationInput | G7E_AudioFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for G7E_AudioFiles.
     */
    cursor?: G7E_AudioFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` G7E_AudioFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` G7E_AudioFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of G7E_AudioFiles.
     */
    distinct?: G7E_AudioFileScalarFieldEnum | G7E_AudioFileScalarFieldEnum[]
  }

  /**
   * G7E_AudioFile findMany
   */
  export type G7E_AudioFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_AudioFile
     */
    select?: G7E_AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_AudioFile
     */
    omit?: G7E_AudioFileOmit<ExtArgs> | null
    /**
     * Filter, which G7E_AudioFiles to fetch.
     */
    where?: G7E_AudioFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of G7E_AudioFiles to fetch.
     */
    orderBy?: G7E_AudioFileOrderByWithRelationInput | G7E_AudioFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing G7E_AudioFiles.
     */
    cursor?: G7E_AudioFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` G7E_AudioFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` G7E_AudioFiles.
     */
    skip?: number
    distinct?: G7E_AudioFileScalarFieldEnum | G7E_AudioFileScalarFieldEnum[]
  }

  /**
   * G7E_AudioFile create
   */
  export type G7E_AudioFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_AudioFile
     */
    select?: G7E_AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_AudioFile
     */
    omit?: G7E_AudioFileOmit<ExtArgs> | null
    /**
     * The data needed to create a G7E_AudioFile.
     */
    data?: XOR<G7E_AudioFileCreateInput, G7E_AudioFileUncheckedCreateInput>
  }

  /**
   * G7E_AudioFile createMany
   */
  export type G7E_AudioFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many G7E_AudioFiles.
     */
    data: G7E_AudioFileCreateManyInput | G7E_AudioFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * G7E_AudioFile update
   */
  export type G7E_AudioFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_AudioFile
     */
    select?: G7E_AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_AudioFile
     */
    omit?: G7E_AudioFileOmit<ExtArgs> | null
    /**
     * The data needed to update a G7E_AudioFile.
     */
    data: XOR<G7E_AudioFileUpdateInput, G7E_AudioFileUncheckedUpdateInput>
    /**
     * Choose, which G7E_AudioFile to update.
     */
    where: G7E_AudioFileWhereUniqueInput
  }

  /**
   * G7E_AudioFile updateMany
   */
  export type G7E_AudioFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update G7E_AudioFiles.
     */
    data: XOR<G7E_AudioFileUpdateManyMutationInput, G7E_AudioFileUncheckedUpdateManyInput>
    /**
     * Filter which G7E_AudioFiles to update
     */
    where?: G7E_AudioFileWhereInput
    /**
     * Limit how many G7E_AudioFiles to update.
     */
    limit?: number
  }

  /**
   * G7E_AudioFile upsert
   */
  export type G7E_AudioFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_AudioFile
     */
    select?: G7E_AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_AudioFile
     */
    omit?: G7E_AudioFileOmit<ExtArgs> | null
    /**
     * The filter to search for the G7E_AudioFile to update in case it exists.
     */
    where: G7E_AudioFileWhereUniqueInput
    /**
     * In case the G7E_AudioFile found by the `where` argument doesn't exist, create a new G7E_AudioFile with this data.
     */
    create: XOR<G7E_AudioFileCreateInput, G7E_AudioFileUncheckedCreateInput>
    /**
     * In case the G7E_AudioFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<G7E_AudioFileUpdateInput, G7E_AudioFileUncheckedUpdateInput>
  }

  /**
   * G7E_AudioFile delete
   */
  export type G7E_AudioFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_AudioFile
     */
    select?: G7E_AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_AudioFile
     */
    omit?: G7E_AudioFileOmit<ExtArgs> | null
    /**
     * Filter which G7E_AudioFile to delete.
     */
    where: G7E_AudioFileWhereUniqueInput
  }

  /**
   * G7E_AudioFile deleteMany
   */
  export type G7E_AudioFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which G7E_AudioFiles to delete
     */
    where?: G7E_AudioFileWhereInput
    /**
     * Limit how many G7E_AudioFiles to delete.
     */
    limit?: number
  }

  /**
   * G7E_AudioFile without action
   */
  export type G7E_AudioFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_AudioFile
     */
    select?: G7E_AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_AudioFile
     */
    omit?: G7E_AudioFileOmit<ExtArgs> | null
  }


  /**
   * Model ImuReading
   */

  export type AggregateImuReading = {
    _count: ImuReadingCountAggregateOutputType | null
    _avg: ImuReadingAvgAggregateOutputType | null
    _sum: ImuReadingSumAggregateOutputType | null
    _min: ImuReadingMinAggregateOutputType | null
    _max: ImuReadingMaxAggregateOutputType | null
  }

  export type ImuReadingAvgAggregateOutputType = {
    id: number | null
    accX: number | null
    accY: number | null
    accZ: number | null
    gyroX: number | null
    gyroY: number | null
    gyroZ: number | null
    roll: number | null
    pitch: number | null
    dRoll: number | null
    dPitch: number | null
    vibCount: number | null
  }

  export type ImuReadingSumAggregateOutputType = {
    id: number | null
    accX: number | null
    accY: number | null
    accZ: number | null
    gyroX: number | null
    gyroY: number | null
    gyroZ: number | null
    roll: number | null
    pitch: number | null
    dRoll: number | null
    dPitch: number | null
    vibCount: number | null
  }

  export type ImuReadingMinAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    accX: number | null
    accY: number | null
    accZ: number | null
    gyroX: number | null
    gyroY: number | null
    gyroZ: number | null
    roll: number | null
    pitch: number | null
    dRoll: number | null
    dPitch: number | null
    vibCount: number | null
    state: string | null
  }

  export type ImuReadingMaxAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    accX: number | null
    accY: number | null
    accZ: number | null
    gyroX: number | null
    gyroY: number | null
    gyroZ: number | null
    roll: number | null
    pitch: number | null
    dRoll: number | null
    dPitch: number | null
    vibCount: number | null
    state: string | null
  }

  export type ImuReadingCountAggregateOutputType = {
    id: number
    timestamp: number
    accX: number
    accY: number
    accZ: number
    gyroX: number
    gyroY: number
    gyroZ: number
    roll: number
    pitch: number
    dRoll: number
    dPitch: number
    vibCount: number
    state: number
    _all: number
  }


  export type ImuReadingAvgAggregateInputType = {
    id?: true
    accX?: true
    accY?: true
    accZ?: true
    gyroX?: true
    gyroY?: true
    gyroZ?: true
    roll?: true
    pitch?: true
    dRoll?: true
    dPitch?: true
    vibCount?: true
  }

  export type ImuReadingSumAggregateInputType = {
    id?: true
    accX?: true
    accY?: true
    accZ?: true
    gyroX?: true
    gyroY?: true
    gyroZ?: true
    roll?: true
    pitch?: true
    dRoll?: true
    dPitch?: true
    vibCount?: true
  }

  export type ImuReadingMinAggregateInputType = {
    id?: true
    timestamp?: true
    accX?: true
    accY?: true
    accZ?: true
    gyroX?: true
    gyroY?: true
    gyroZ?: true
    roll?: true
    pitch?: true
    dRoll?: true
    dPitch?: true
    vibCount?: true
    state?: true
  }

  export type ImuReadingMaxAggregateInputType = {
    id?: true
    timestamp?: true
    accX?: true
    accY?: true
    accZ?: true
    gyroX?: true
    gyroY?: true
    gyroZ?: true
    roll?: true
    pitch?: true
    dRoll?: true
    dPitch?: true
    vibCount?: true
    state?: true
  }

  export type ImuReadingCountAggregateInputType = {
    id?: true
    timestamp?: true
    accX?: true
    accY?: true
    accZ?: true
    gyroX?: true
    gyroY?: true
    gyroZ?: true
    roll?: true
    pitch?: true
    dRoll?: true
    dPitch?: true
    vibCount?: true
    state?: true
    _all?: true
  }

  export type ImuReadingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImuReading to aggregate.
     */
    where?: ImuReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImuReadings to fetch.
     */
    orderBy?: ImuReadingOrderByWithRelationInput | ImuReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImuReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImuReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImuReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImuReadings
    **/
    _count?: true | ImuReadingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImuReadingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImuReadingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImuReadingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImuReadingMaxAggregateInputType
  }

  export type GetImuReadingAggregateType<T extends ImuReadingAggregateArgs> = {
        [P in keyof T & keyof AggregateImuReading]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImuReading[P]>
      : GetScalarType<T[P], AggregateImuReading[P]>
  }




  export type ImuReadingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImuReadingWhereInput
    orderBy?: ImuReadingOrderByWithAggregationInput | ImuReadingOrderByWithAggregationInput[]
    by: ImuReadingScalarFieldEnum[] | ImuReadingScalarFieldEnum
    having?: ImuReadingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImuReadingCountAggregateInputType | true
    _avg?: ImuReadingAvgAggregateInputType
    _sum?: ImuReadingSumAggregateInputType
    _min?: ImuReadingMinAggregateInputType
    _max?: ImuReadingMaxAggregateInputType
  }

  export type ImuReadingGroupByOutputType = {
    id: number
    timestamp: Date
    accX: number
    accY: number
    accZ: number
    gyroX: number
    gyroY: number
    gyroZ: number
    roll: number
    pitch: number
    dRoll: number
    dPitch: number
    vibCount: number
    state: string
    _count: ImuReadingCountAggregateOutputType | null
    _avg: ImuReadingAvgAggregateOutputType | null
    _sum: ImuReadingSumAggregateOutputType | null
    _min: ImuReadingMinAggregateOutputType | null
    _max: ImuReadingMaxAggregateOutputType | null
  }

  type GetImuReadingGroupByPayload<T extends ImuReadingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImuReadingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImuReadingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImuReadingGroupByOutputType[P]>
            : GetScalarType<T[P], ImuReadingGroupByOutputType[P]>
        }
      >
    >


  export type ImuReadingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    accX?: boolean
    accY?: boolean
    accZ?: boolean
    gyroX?: boolean
    gyroY?: boolean
    gyroZ?: boolean
    roll?: boolean
    pitch?: boolean
    dRoll?: boolean
    dPitch?: boolean
    vibCount?: boolean
    state?: boolean
  }, ExtArgs["result"]["imuReading"]>



  export type ImuReadingSelectScalar = {
    id?: boolean
    timestamp?: boolean
    accX?: boolean
    accY?: boolean
    accZ?: boolean
    gyroX?: boolean
    gyroY?: boolean
    gyroZ?: boolean
    roll?: boolean
    pitch?: boolean
    dRoll?: boolean
    dPitch?: boolean
    vibCount?: boolean
    state?: boolean
  }

  export type ImuReadingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "accX" | "accY" | "accZ" | "gyroX" | "gyroY" | "gyroZ" | "roll" | "pitch" | "dRoll" | "dPitch" | "vibCount" | "state", ExtArgs["result"]["imuReading"]>

  export type $ImuReadingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImuReading"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      timestamp: Date
      accX: number
      accY: number
      accZ: number
      gyroX: number
      gyroY: number
      gyroZ: number
      roll: number
      pitch: number
      dRoll: number
      dPitch: number
      vibCount: number
      state: string
    }, ExtArgs["result"]["imuReading"]>
    composites: {}
  }

  type ImuReadingGetPayload<S extends boolean | null | undefined | ImuReadingDefaultArgs> = $Result.GetResult<Prisma.$ImuReadingPayload, S>

  type ImuReadingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImuReadingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImuReadingCountAggregateInputType | true
    }

  export interface ImuReadingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImuReading'], meta: { name: 'ImuReading' } }
    /**
     * Find zero or one ImuReading that matches the filter.
     * @param {ImuReadingFindUniqueArgs} args - Arguments to find a ImuReading
     * @example
     * // Get one ImuReading
     * const imuReading = await prisma.imuReading.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImuReadingFindUniqueArgs>(args: SelectSubset<T, ImuReadingFindUniqueArgs<ExtArgs>>): Prisma__ImuReadingClient<$Result.GetResult<Prisma.$ImuReadingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImuReading that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImuReadingFindUniqueOrThrowArgs} args - Arguments to find a ImuReading
     * @example
     * // Get one ImuReading
     * const imuReading = await prisma.imuReading.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImuReadingFindUniqueOrThrowArgs>(args: SelectSubset<T, ImuReadingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImuReadingClient<$Result.GetResult<Prisma.$ImuReadingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImuReading that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImuReadingFindFirstArgs} args - Arguments to find a ImuReading
     * @example
     * // Get one ImuReading
     * const imuReading = await prisma.imuReading.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImuReadingFindFirstArgs>(args?: SelectSubset<T, ImuReadingFindFirstArgs<ExtArgs>>): Prisma__ImuReadingClient<$Result.GetResult<Prisma.$ImuReadingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImuReading that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImuReadingFindFirstOrThrowArgs} args - Arguments to find a ImuReading
     * @example
     * // Get one ImuReading
     * const imuReading = await prisma.imuReading.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImuReadingFindFirstOrThrowArgs>(args?: SelectSubset<T, ImuReadingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImuReadingClient<$Result.GetResult<Prisma.$ImuReadingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImuReadings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImuReadingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImuReadings
     * const imuReadings = await prisma.imuReading.findMany()
     * 
     * // Get first 10 ImuReadings
     * const imuReadings = await prisma.imuReading.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imuReadingWithIdOnly = await prisma.imuReading.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImuReadingFindManyArgs>(args?: SelectSubset<T, ImuReadingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImuReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImuReading.
     * @param {ImuReadingCreateArgs} args - Arguments to create a ImuReading.
     * @example
     * // Create one ImuReading
     * const ImuReading = await prisma.imuReading.create({
     *   data: {
     *     // ... data to create a ImuReading
     *   }
     * })
     * 
     */
    create<T extends ImuReadingCreateArgs>(args: SelectSubset<T, ImuReadingCreateArgs<ExtArgs>>): Prisma__ImuReadingClient<$Result.GetResult<Prisma.$ImuReadingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImuReadings.
     * @param {ImuReadingCreateManyArgs} args - Arguments to create many ImuReadings.
     * @example
     * // Create many ImuReadings
     * const imuReading = await prisma.imuReading.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImuReadingCreateManyArgs>(args?: SelectSubset<T, ImuReadingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ImuReading.
     * @param {ImuReadingDeleteArgs} args - Arguments to delete one ImuReading.
     * @example
     * // Delete one ImuReading
     * const ImuReading = await prisma.imuReading.delete({
     *   where: {
     *     // ... filter to delete one ImuReading
     *   }
     * })
     * 
     */
    delete<T extends ImuReadingDeleteArgs>(args: SelectSubset<T, ImuReadingDeleteArgs<ExtArgs>>): Prisma__ImuReadingClient<$Result.GetResult<Prisma.$ImuReadingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImuReading.
     * @param {ImuReadingUpdateArgs} args - Arguments to update one ImuReading.
     * @example
     * // Update one ImuReading
     * const imuReading = await prisma.imuReading.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImuReadingUpdateArgs>(args: SelectSubset<T, ImuReadingUpdateArgs<ExtArgs>>): Prisma__ImuReadingClient<$Result.GetResult<Prisma.$ImuReadingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImuReadings.
     * @param {ImuReadingDeleteManyArgs} args - Arguments to filter ImuReadings to delete.
     * @example
     * // Delete a few ImuReadings
     * const { count } = await prisma.imuReading.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImuReadingDeleteManyArgs>(args?: SelectSubset<T, ImuReadingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImuReadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImuReadingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImuReadings
     * const imuReading = await prisma.imuReading.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImuReadingUpdateManyArgs>(args: SelectSubset<T, ImuReadingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ImuReading.
     * @param {ImuReadingUpsertArgs} args - Arguments to update or create a ImuReading.
     * @example
     * // Update or create a ImuReading
     * const imuReading = await prisma.imuReading.upsert({
     *   create: {
     *     // ... data to create a ImuReading
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImuReading we want to update
     *   }
     * })
     */
    upsert<T extends ImuReadingUpsertArgs>(args: SelectSubset<T, ImuReadingUpsertArgs<ExtArgs>>): Prisma__ImuReadingClient<$Result.GetResult<Prisma.$ImuReadingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImuReadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImuReadingCountArgs} args - Arguments to filter ImuReadings to count.
     * @example
     * // Count the number of ImuReadings
     * const count = await prisma.imuReading.count({
     *   where: {
     *     // ... the filter for the ImuReadings we want to count
     *   }
     * })
    **/
    count<T extends ImuReadingCountArgs>(
      args?: Subset<T, ImuReadingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImuReadingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImuReading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImuReadingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImuReadingAggregateArgs>(args: Subset<T, ImuReadingAggregateArgs>): Prisma.PrismaPromise<GetImuReadingAggregateType<T>>

    /**
     * Group by ImuReading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImuReadingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImuReadingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImuReadingGroupByArgs['orderBy'] }
        : { orderBy?: ImuReadingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImuReadingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImuReadingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImuReading model
   */
  readonly fields: ImuReadingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImuReading.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImuReadingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ImuReading model
   */
  interface ImuReadingFieldRefs {
    readonly id: FieldRef<"ImuReading", 'Int'>
    readonly timestamp: FieldRef<"ImuReading", 'DateTime'>
    readonly accX: FieldRef<"ImuReading", 'Float'>
    readonly accY: FieldRef<"ImuReading", 'Float'>
    readonly accZ: FieldRef<"ImuReading", 'Float'>
    readonly gyroX: FieldRef<"ImuReading", 'Float'>
    readonly gyroY: FieldRef<"ImuReading", 'Float'>
    readonly gyroZ: FieldRef<"ImuReading", 'Float'>
    readonly roll: FieldRef<"ImuReading", 'Float'>
    readonly pitch: FieldRef<"ImuReading", 'Float'>
    readonly dRoll: FieldRef<"ImuReading", 'Float'>
    readonly dPitch: FieldRef<"ImuReading", 'Float'>
    readonly vibCount: FieldRef<"ImuReading", 'Int'>
    readonly state: FieldRef<"ImuReading", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ImuReading findUnique
   */
  export type ImuReadingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImuReading
     */
    select?: ImuReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImuReading
     */
    omit?: ImuReadingOmit<ExtArgs> | null
    /**
     * Filter, which ImuReading to fetch.
     */
    where: ImuReadingWhereUniqueInput
  }

  /**
   * ImuReading findUniqueOrThrow
   */
  export type ImuReadingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImuReading
     */
    select?: ImuReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImuReading
     */
    omit?: ImuReadingOmit<ExtArgs> | null
    /**
     * Filter, which ImuReading to fetch.
     */
    where: ImuReadingWhereUniqueInput
  }

  /**
   * ImuReading findFirst
   */
  export type ImuReadingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImuReading
     */
    select?: ImuReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImuReading
     */
    omit?: ImuReadingOmit<ExtArgs> | null
    /**
     * Filter, which ImuReading to fetch.
     */
    where?: ImuReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImuReadings to fetch.
     */
    orderBy?: ImuReadingOrderByWithRelationInput | ImuReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImuReadings.
     */
    cursor?: ImuReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImuReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImuReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImuReadings.
     */
    distinct?: ImuReadingScalarFieldEnum | ImuReadingScalarFieldEnum[]
  }

  /**
   * ImuReading findFirstOrThrow
   */
  export type ImuReadingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImuReading
     */
    select?: ImuReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImuReading
     */
    omit?: ImuReadingOmit<ExtArgs> | null
    /**
     * Filter, which ImuReading to fetch.
     */
    where?: ImuReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImuReadings to fetch.
     */
    orderBy?: ImuReadingOrderByWithRelationInput | ImuReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImuReadings.
     */
    cursor?: ImuReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImuReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImuReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImuReadings.
     */
    distinct?: ImuReadingScalarFieldEnum | ImuReadingScalarFieldEnum[]
  }

  /**
   * ImuReading findMany
   */
  export type ImuReadingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImuReading
     */
    select?: ImuReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImuReading
     */
    omit?: ImuReadingOmit<ExtArgs> | null
    /**
     * Filter, which ImuReadings to fetch.
     */
    where?: ImuReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImuReadings to fetch.
     */
    orderBy?: ImuReadingOrderByWithRelationInput | ImuReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImuReadings.
     */
    cursor?: ImuReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImuReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImuReadings.
     */
    skip?: number
    distinct?: ImuReadingScalarFieldEnum | ImuReadingScalarFieldEnum[]
  }

  /**
   * ImuReading create
   */
  export type ImuReadingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImuReading
     */
    select?: ImuReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImuReading
     */
    omit?: ImuReadingOmit<ExtArgs> | null
    /**
     * The data needed to create a ImuReading.
     */
    data: XOR<ImuReadingCreateInput, ImuReadingUncheckedCreateInput>
  }

  /**
   * ImuReading createMany
   */
  export type ImuReadingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImuReadings.
     */
    data: ImuReadingCreateManyInput | ImuReadingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImuReading update
   */
  export type ImuReadingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImuReading
     */
    select?: ImuReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImuReading
     */
    omit?: ImuReadingOmit<ExtArgs> | null
    /**
     * The data needed to update a ImuReading.
     */
    data: XOR<ImuReadingUpdateInput, ImuReadingUncheckedUpdateInput>
    /**
     * Choose, which ImuReading to update.
     */
    where: ImuReadingWhereUniqueInput
  }

  /**
   * ImuReading updateMany
   */
  export type ImuReadingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImuReadings.
     */
    data: XOR<ImuReadingUpdateManyMutationInput, ImuReadingUncheckedUpdateManyInput>
    /**
     * Filter which ImuReadings to update
     */
    where?: ImuReadingWhereInput
    /**
     * Limit how many ImuReadings to update.
     */
    limit?: number
  }

  /**
   * ImuReading upsert
   */
  export type ImuReadingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImuReading
     */
    select?: ImuReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImuReading
     */
    omit?: ImuReadingOmit<ExtArgs> | null
    /**
     * The filter to search for the ImuReading to update in case it exists.
     */
    where: ImuReadingWhereUniqueInput
    /**
     * In case the ImuReading found by the `where` argument doesn't exist, create a new ImuReading with this data.
     */
    create: XOR<ImuReadingCreateInput, ImuReadingUncheckedCreateInput>
    /**
     * In case the ImuReading was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImuReadingUpdateInput, ImuReadingUncheckedUpdateInput>
  }

  /**
   * ImuReading delete
   */
  export type ImuReadingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImuReading
     */
    select?: ImuReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImuReading
     */
    omit?: ImuReadingOmit<ExtArgs> | null
    /**
     * Filter which ImuReading to delete.
     */
    where: ImuReadingWhereUniqueInput
  }

  /**
   * ImuReading deleteMany
   */
  export type ImuReadingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImuReadings to delete
     */
    where?: ImuReadingWhereInput
    /**
     * Limit how many ImuReadings to delete.
     */
    limit?: number
  }

  /**
   * ImuReading without action
   */
  export type ImuReadingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImuReading
     */
    select?: ImuReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImuReading
     */
    omit?: ImuReadingOmit<ExtArgs> | null
  }


  /**
   * Model GasMeasure
   */

  export type AggregateGasMeasure = {
    _count: GasMeasureCountAggregateOutputType | null
    _avg: GasMeasureAvgAggregateOutputType | null
    _sum: GasMeasureSumAggregateOutputType | null
    _min: GasMeasureMinAggregateOutputType | null
    _max: GasMeasureMaxAggregateOutputType | null
  }

  export type GasMeasureAvgAggregateOutputType = {
    id: number | null
    gasValue: number | null
    humidity: number | null
    temperature: number | null
    dangerLevel: number | null
  }

  export type GasMeasureSumAggregateOutputType = {
    id: number | null
    gasValue: number | null
    humidity: number | null
    temperature: number | null
    dangerLevel: number | null
  }

  export type GasMeasureMinAggregateOutputType = {
    id: number | null
    sensorName: string | null
    gasType: string | null
    gasValue: number | null
    humidity: number | null
    temperature: number | null
    dangerLevel: number | null
    createdAt: Date | null
  }

  export type GasMeasureMaxAggregateOutputType = {
    id: number | null
    sensorName: string | null
    gasType: string | null
    gasValue: number | null
    humidity: number | null
    temperature: number | null
    dangerLevel: number | null
    createdAt: Date | null
  }

  export type GasMeasureCountAggregateOutputType = {
    id: number
    sensorName: number
    gasType: number
    gasValue: number
    humidity: number
    temperature: number
    dangerLevel: number
    createdAt: number
    _all: number
  }


  export type GasMeasureAvgAggregateInputType = {
    id?: true
    gasValue?: true
    humidity?: true
    temperature?: true
    dangerLevel?: true
  }

  export type GasMeasureSumAggregateInputType = {
    id?: true
    gasValue?: true
    humidity?: true
    temperature?: true
    dangerLevel?: true
  }

  export type GasMeasureMinAggregateInputType = {
    id?: true
    sensorName?: true
    gasType?: true
    gasValue?: true
    humidity?: true
    temperature?: true
    dangerLevel?: true
    createdAt?: true
  }

  export type GasMeasureMaxAggregateInputType = {
    id?: true
    sensorName?: true
    gasType?: true
    gasValue?: true
    humidity?: true
    temperature?: true
    dangerLevel?: true
    createdAt?: true
  }

  export type GasMeasureCountAggregateInputType = {
    id?: true
    sensorName?: true
    gasType?: true
    gasValue?: true
    humidity?: true
    temperature?: true
    dangerLevel?: true
    createdAt?: true
    _all?: true
  }

  export type GasMeasureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GasMeasure to aggregate.
     */
    where?: GasMeasureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GasMeasures to fetch.
     */
    orderBy?: GasMeasureOrderByWithRelationInput | GasMeasureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GasMeasureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GasMeasures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GasMeasures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GasMeasures
    **/
    _count?: true | GasMeasureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GasMeasureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GasMeasureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GasMeasureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GasMeasureMaxAggregateInputType
  }

  export type GetGasMeasureAggregateType<T extends GasMeasureAggregateArgs> = {
        [P in keyof T & keyof AggregateGasMeasure]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGasMeasure[P]>
      : GetScalarType<T[P], AggregateGasMeasure[P]>
  }




  export type GasMeasureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GasMeasureWhereInput
    orderBy?: GasMeasureOrderByWithAggregationInput | GasMeasureOrderByWithAggregationInput[]
    by: GasMeasureScalarFieldEnum[] | GasMeasureScalarFieldEnum
    having?: GasMeasureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GasMeasureCountAggregateInputType | true
    _avg?: GasMeasureAvgAggregateInputType
    _sum?: GasMeasureSumAggregateInputType
    _min?: GasMeasureMinAggregateInputType
    _max?: GasMeasureMaxAggregateInputType
  }

  export type GasMeasureGroupByOutputType = {
    id: number
    sensorName: string
    gasType: string
    gasValue: number
    humidity: number | null
    temperature: number | null
    dangerLevel: number
    createdAt: Date | null
    _count: GasMeasureCountAggregateOutputType | null
    _avg: GasMeasureAvgAggregateOutputType | null
    _sum: GasMeasureSumAggregateOutputType | null
    _min: GasMeasureMinAggregateOutputType | null
    _max: GasMeasureMaxAggregateOutputType | null
  }

  type GetGasMeasureGroupByPayload<T extends GasMeasureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GasMeasureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GasMeasureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GasMeasureGroupByOutputType[P]>
            : GetScalarType<T[P], GasMeasureGroupByOutputType[P]>
        }
      >
    >


  export type GasMeasureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sensorName?: boolean
    gasType?: boolean
    gasValue?: boolean
    humidity?: boolean
    temperature?: boolean
    dangerLevel?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["gasMeasure"]>



  export type GasMeasureSelectScalar = {
    id?: boolean
    sensorName?: boolean
    gasType?: boolean
    gasValue?: boolean
    humidity?: boolean
    temperature?: boolean
    dangerLevel?: boolean
    createdAt?: boolean
  }

  export type GasMeasureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sensorName" | "gasType" | "gasValue" | "humidity" | "temperature" | "dangerLevel" | "createdAt", ExtArgs["result"]["gasMeasure"]>

  export type $GasMeasurePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GasMeasure"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sensorName: string
      gasType: string
      gasValue: number
      humidity: number | null
      temperature: number | null
      dangerLevel: number
      createdAt: Date | null
    }, ExtArgs["result"]["gasMeasure"]>
    composites: {}
  }

  type GasMeasureGetPayload<S extends boolean | null | undefined | GasMeasureDefaultArgs> = $Result.GetResult<Prisma.$GasMeasurePayload, S>

  type GasMeasureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GasMeasureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GasMeasureCountAggregateInputType | true
    }

  export interface GasMeasureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GasMeasure'], meta: { name: 'GasMeasure' } }
    /**
     * Find zero or one GasMeasure that matches the filter.
     * @param {GasMeasureFindUniqueArgs} args - Arguments to find a GasMeasure
     * @example
     * // Get one GasMeasure
     * const gasMeasure = await prisma.gasMeasure.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GasMeasureFindUniqueArgs>(args: SelectSubset<T, GasMeasureFindUniqueArgs<ExtArgs>>): Prisma__GasMeasureClient<$Result.GetResult<Prisma.$GasMeasurePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GasMeasure that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GasMeasureFindUniqueOrThrowArgs} args - Arguments to find a GasMeasure
     * @example
     * // Get one GasMeasure
     * const gasMeasure = await prisma.gasMeasure.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GasMeasureFindUniqueOrThrowArgs>(args: SelectSubset<T, GasMeasureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GasMeasureClient<$Result.GetResult<Prisma.$GasMeasurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GasMeasure that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GasMeasureFindFirstArgs} args - Arguments to find a GasMeasure
     * @example
     * // Get one GasMeasure
     * const gasMeasure = await prisma.gasMeasure.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GasMeasureFindFirstArgs>(args?: SelectSubset<T, GasMeasureFindFirstArgs<ExtArgs>>): Prisma__GasMeasureClient<$Result.GetResult<Prisma.$GasMeasurePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GasMeasure that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GasMeasureFindFirstOrThrowArgs} args - Arguments to find a GasMeasure
     * @example
     * // Get one GasMeasure
     * const gasMeasure = await prisma.gasMeasure.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GasMeasureFindFirstOrThrowArgs>(args?: SelectSubset<T, GasMeasureFindFirstOrThrowArgs<ExtArgs>>): Prisma__GasMeasureClient<$Result.GetResult<Prisma.$GasMeasurePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GasMeasures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GasMeasureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GasMeasures
     * const gasMeasures = await prisma.gasMeasure.findMany()
     * 
     * // Get first 10 GasMeasures
     * const gasMeasures = await prisma.gasMeasure.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gasMeasureWithIdOnly = await prisma.gasMeasure.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GasMeasureFindManyArgs>(args?: SelectSubset<T, GasMeasureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GasMeasurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GasMeasure.
     * @param {GasMeasureCreateArgs} args - Arguments to create a GasMeasure.
     * @example
     * // Create one GasMeasure
     * const GasMeasure = await prisma.gasMeasure.create({
     *   data: {
     *     // ... data to create a GasMeasure
     *   }
     * })
     * 
     */
    create<T extends GasMeasureCreateArgs>(args: SelectSubset<T, GasMeasureCreateArgs<ExtArgs>>): Prisma__GasMeasureClient<$Result.GetResult<Prisma.$GasMeasurePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GasMeasures.
     * @param {GasMeasureCreateManyArgs} args - Arguments to create many GasMeasures.
     * @example
     * // Create many GasMeasures
     * const gasMeasure = await prisma.gasMeasure.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GasMeasureCreateManyArgs>(args?: SelectSubset<T, GasMeasureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GasMeasure.
     * @param {GasMeasureDeleteArgs} args - Arguments to delete one GasMeasure.
     * @example
     * // Delete one GasMeasure
     * const GasMeasure = await prisma.gasMeasure.delete({
     *   where: {
     *     // ... filter to delete one GasMeasure
     *   }
     * })
     * 
     */
    delete<T extends GasMeasureDeleteArgs>(args: SelectSubset<T, GasMeasureDeleteArgs<ExtArgs>>): Prisma__GasMeasureClient<$Result.GetResult<Prisma.$GasMeasurePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GasMeasure.
     * @param {GasMeasureUpdateArgs} args - Arguments to update one GasMeasure.
     * @example
     * // Update one GasMeasure
     * const gasMeasure = await prisma.gasMeasure.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GasMeasureUpdateArgs>(args: SelectSubset<T, GasMeasureUpdateArgs<ExtArgs>>): Prisma__GasMeasureClient<$Result.GetResult<Prisma.$GasMeasurePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GasMeasures.
     * @param {GasMeasureDeleteManyArgs} args - Arguments to filter GasMeasures to delete.
     * @example
     * // Delete a few GasMeasures
     * const { count } = await prisma.gasMeasure.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GasMeasureDeleteManyArgs>(args?: SelectSubset<T, GasMeasureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GasMeasures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GasMeasureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GasMeasures
     * const gasMeasure = await prisma.gasMeasure.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GasMeasureUpdateManyArgs>(args: SelectSubset<T, GasMeasureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GasMeasure.
     * @param {GasMeasureUpsertArgs} args - Arguments to update or create a GasMeasure.
     * @example
     * // Update or create a GasMeasure
     * const gasMeasure = await prisma.gasMeasure.upsert({
     *   create: {
     *     // ... data to create a GasMeasure
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GasMeasure we want to update
     *   }
     * })
     */
    upsert<T extends GasMeasureUpsertArgs>(args: SelectSubset<T, GasMeasureUpsertArgs<ExtArgs>>): Prisma__GasMeasureClient<$Result.GetResult<Prisma.$GasMeasurePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GasMeasures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GasMeasureCountArgs} args - Arguments to filter GasMeasures to count.
     * @example
     * // Count the number of GasMeasures
     * const count = await prisma.gasMeasure.count({
     *   where: {
     *     // ... the filter for the GasMeasures we want to count
     *   }
     * })
    **/
    count<T extends GasMeasureCountArgs>(
      args?: Subset<T, GasMeasureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GasMeasureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GasMeasure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GasMeasureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GasMeasureAggregateArgs>(args: Subset<T, GasMeasureAggregateArgs>): Prisma.PrismaPromise<GetGasMeasureAggregateType<T>>

    /**
     * Group by GasMeasure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GasMeasureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GasMeasureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GasMeasureGroupByArgs['orderBy'] }
        : { orderBy?: GasMeasureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GasMeasureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGasMeasureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GasMeasure model
   */
  readonly fields: GasMeasureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GasMeasure.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GasMeasureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GasMeasure model
   */
  interface GasMeasureFieldRefs {
    readonly id: FieldRef<"GasMeasure", 'Int'>
    readonly sensorName: FieldRef<"GasMeasure", 'String'>
    readonly gasType: FieldRef<"GasMeasure", 'String'>
    readonly gasValue: FieldRef<"GasMeasure", 'Float'>
    readonly humidity: FieldRef<"GasMeasure", 'Float'>
    readonly temperature: FieldRef<"GasMeasure", 'Float'>
    readonly dangerLevel: FieldRef<"GasMeasure", 'Int'>
    readonly createdAt: FieldRef<"GasMeasure", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GasMeasure findUnique
   */
  export type GasMeasureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GasMeasure
     */
    select?: GasMeasureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GasMeasure
     */
    omit?: GasMeasureOmit<ExtArgs> | null
    /**
     * Filter, which GasMeasure to fetch.
     */
    where: GasMeasureWhereUniqueInput
  }

  /**
   * GasMeasure findUniqueOrThrow
   */
  export type GasMeasureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GasMeasure
     */
    select?: GasMeasureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GasMeasure
     */
    omit?: GasMeasureOmit<ExtArgs> | null
    /**
     * Filter, which GasMeasure to fetch.
     */
    where: GasMeasureWhereUniqueInput
  }

  /**
   * GasMeasure findFirst
   */
  export type GasMeasureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GasMeasure
     */
    select?: GasMeasureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GasMeasure
     */
    omit?: GasMeasureOmit<ExtArgs> | null
    /**
     * Filter, which GasMeasure to fetch.
     */
    where?: GasMeasureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GasMeasures to fetch.
     */
    orderBy?: GasMeasureOrderByWithRelationInput | GasMeasureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GasMeasures.
     */
    cursor?: GasMeasureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GasMeasures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GasMeasures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GasMeasures.
     */
    distinct?: GasMeasureScalarFieldEnum | GasMeasureScalarFieldEnum[]
  }

  /**
   * GasMeasure findFirstOrThrow
   */
  export type GasMeasureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GasMeasure
     */
    select?: GasMeasureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GasMeasure
     */
    omit?: GasMeasureOmit<ExtArgs> | null
    /**
     * Filter, which GasMeasure to fetch.
     */
    where?: GasMeasureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GasMeasures to fetch.
     */
    orderBy?: GasMeasureOrderByWithRelationInput | GasMeasureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GasMeasures.
     */
    cursor?: GasMeasureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GasMeasures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GasMeasures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GasMeasures.
     */
    distinct?: GasMeasureScalarFieldEnum | GasMeasureScalarFieldEnum[]
  }

  /**
   * GasMeasure findMany
   */
  export type GasMeasureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GasMeasure
     */
    select?: GasMeasureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GasMeasure
     */
    omit?: GasMeasureOmit<ExtArgs> | null
    /**
     * Filter, which GasMeasures to fetch.
     */
    where?: GasMeasureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GasMeasures to fetch.
     */
    orderBy?: GasMeasureOrderByWithRelationInput | GasMeasureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GasMeasures.
     */
    cursor?: GasMeasureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GasMeasures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GasMeasures.
     */
    skip?: number
    distinct?: GasMeasureScalarFieldEnum | GasMeasureScalarFieldEnum[]
  }

  /**
   * GasMeasure create
   */
  export type GasMeasureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GasMeasure
     */
    select?: GasMeasureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GasMeasure
     */
    omit?: GasMeasureOmit<ExtArgs> | null
    /**
     * The data needed to create a GasMeasure.
     */
    data: XOR<GasMeasureCreateInput, GasMeasureUncheckedCreateInput>
  }

  /**
   * GasMeasure createMany
   */
  export type GasMeasureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GasMeasures.
     */
    data: GasMeasureCreateManyInput | GasMeasureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GasMeasure update
   */
  export type GasMeasureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GasMeasure
     */
    select?: GasMeasureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GasMeasure
     */
    omit?: GasMeasureOmit<ExtArgs> | null
    /**
     * The data needed to update a GasMeasure.
     */
    data: XOR<GasMeasureUpdateInput, GasMeasureUncheckedUpdateInput>
    /**
     * Choose, which GasMeasure to update.
     */
    where: GasMeasureWhereUniqueInput
  }

  /**
   * GasMeasure updateMany
   */
  export type GasMeasureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GasMeasures.
     */
    data: XOR<GasMeasureUpdateManyMutationInput, GasMeasureUncheckedUpdateManyInput>
    /**
     * Filter which GasMeasures to update
     */
    where?: GasMeasureWhereInput
    /**
     * Limit how many GasMeasures to update.
     */
    limit?: number
  }

  /**
   * GasMeasure upsert
   */
  export type GasMeasureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GasMeasure
     */
    select?: GasMeasureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GasMeasure
     */
    omit?: GasMeasureOmit<ExtArgs> | null
    /**
     * The filter to search for the GasMeasure to update in case it exists.
     */
    where: GasMeasureWhereUniqueInput
    /**
     * In case the GasMeasure found by the `where` argument doesn't exist, create a new GasMeasure with this data.
     */
    create: XOR<GasMeasureCreateInput, GasMeasureUncheckedCreateInput>
    /**
     * In case the GasMeasure was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GasMeasureUpdateInput, GasMeasureUncheckedUpdateInput>
  }

  /**
   * GasMeasure delete
   */
  export type GasMeasureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GasMeasure
     */
    select?: GasMeasureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GasMeasure
     */
    omit?: GasMeasureOmit<ExtArgs> | null
    /**
     * Filter which GasMeasure to delete.
     */
    where: GasMeasureWhereUniqueInput
  }

  /**
   * GasMeasure deleteMany
   */
  export type GasMeasureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GasMeasures to delete
     */
    where?: GasMeasureWhereInput
    /**
     * Limit how many GasMeasures to delete.
     */
    limit?: number
  }

  /**
   * GasMeasure without action
   */
  export type GasMeasureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GasMeasure
     */
    select?: GasMeasureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GasMeasure
     */
    omit?: GasMeasureOmit<ExtArgs> | null
  }


  /**
   * Model CapteurReculHistory
   */

  export type AggregateCapteurReculHistory = {
    _count: CapteurReculHistoryCountAggregateOutputType | null
    _avg: CapteurReculHistoryAvgAggregateOutputType | null
    _sum: CapteurReculHistorySumAggregateOutputType | null
    _min: CapteurReculHistoryMinAggregateOutputType | null
    _max: CapteurReculHistoryMaxAggregateOutputType | null
  }

  export type CapteurReculHistoryAvgAggregateOutputType = {
    id: number | null
    valeurBrute: number | null
  }

  export type CapteurReculHistorySumAggregateOutputType = {
    id: number | null
    valeurBrute: number | null
  }

  export type CapteurReculHistoryMinAggregateOutputType = {
    id: number | null
    valeurBrute: number | null
    distanceCm: string | null
    statut: string | null
    dateEvenement: Date | null
  }

  export type CapteurReculHistoryMaxAggregateOutputType = {
    id: number | null
    valeurBrute: number | null
    distanceCm: string | null
    statut: string | null
    dateEvenement: Date | null
  }

  export type CapteurReculHistoryCountAggregateOutputType = {
    id: number
    valeurBrute: number
    distanceCm: number
    statut: number
    dateEvenement: number
    _all: number
  }


  export type CapteurReculHistoryAvgAggregateInputType = {
    id?: true
    valeurBrute?: true
  }

  export type CapteurReculHistorySumAggregateInputType = {
    id?: true
    valeurBrute?: true
  }

  export type CapteurReculHistoryMinAggregateInputType = {
    id?: true
    valeurBrute?: true
    distanceCm?: true
    statut?: true
    dateEvenement?: true
  }

  export type CapteurReculHistoryMaxAggregateInputType = {
    id?: true
    valeurBrute?: true
    distanceCm?: true
    statut?: true
    dateEvenement?: true
  }

  export type CapteurReculHistoryCountAggregateInputType = {
    id?: true
    valeurBrute?: true
    distanceCm?: true
    statut?: true
    dateEvenement?: true
    _all?: true
  }

  export type CapteurReculHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CapteurReculHistory to aggregate.
     */
    where?: CapteurReculHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapteurReculHistories to fetch.
     */
    orderBy?: CapteurReculHistoryOrderByWithRelationInput | CapteurReculHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CapteurReculHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapteurReculHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapteurReculHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CapteurReculHistories
    **/
    _count?: true | CapteurReculHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CapteurReculHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CapteurReculHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CapteurReculHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CapteurReculHistoryMaxAggregateInputType
  }

  export type GetCapteurReculHistoryAggregateType<T extends CapteurReculHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCapteurReculHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCapteurReculHistory[P]>
      : GetScalarType<T[P], AggregateCapteurReculHistory[P]>
  }




  export type CapteurReculHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CapteurReculHistoryWhereInput
    orderBy?: CapteurReculHistoryOrderByWithAggregationInput | CapteurReculHistoryOrderByWithAggregationInput[]
    by: CapteurReculHistoryScalarFieldEnum[] | CapteurReculHistoryScalarFieldEnum
    having?: CapteurReculHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CapteurReculHistoryCountAggregateInputType | true
    _avg?: CapteurReculHistoryAvgAggregateInputType
    _sum?: CapteurReculHistorySumAggregateInputType
    _min?: CapteurReculHistoryMinAggregateInputType
    _max?: CapteurReculHistoryMaxAggregateInputType
  }

  export type CapteurReculHistoryGroupByOutputType = {
    id: number
    valeurBrute: number
    distanceCm: string
    statut: string
    dateEvenement: Date | null
    _count: CapteurReculHistoryCountAggregateOutputType | null
    _avg: CapteurReculHistoryAvgAggregateOutputType | null
    _sum: CapteurReculHistorySumAggregateOutputType | null
    _min: CapteurReculHistoryMinAggregateOutputType | null
    _max: CapteurReculHistoryMaxAggregateOutputType | null
  }

  type GetCapteurReculHistoryGroupByPayload<T extends CapteurReculHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CapteurReculHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CapteurReculHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CapteurReculHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], CapteurReculHistoryGroupByOutputType[P]>
        }
      >
    >


  export type CapteurReculHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valeurBrute?: boolean
    distanceCm?: boolean
    statut?: boolean
    dateEvenement?: boolean
  }, ExtArgs["result"]["capteurReculHistory"]>



  export type CapteurReculHistorySelectScalar = {
    id?: boolean
    valeurBrute?: boolean
    distanceCm?: boolean
    statut?: boolean
    dateEvenement?: boolean
  }

  export type CapteurReculHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "valeurBrute" | "distanceCm" | "statut" | "dateEvenement", ExtArgs["result"]["capteurReculHistory"]>

  export type $CapteurReculHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CapteurReculHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      valeurBrute: number
      distanceCm: string
      statut: string
      dateEvenement: Date | null
    }, ExtArgs["result"]["capteurReculHistory"]>
    composites: {}
  }

  type CapteurReculHistoryGetPayload<S extends boolean | null | undefined | CapteurReculHistoryDefaultArgs> = $Result.GetResult<Prisma.$CapteurReculHistoryPayload, S>

  type CapteurReculHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CapteurReculHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CapteurReculHistoryCountAggregateInputType | true
    }

  export interface CapteurReculHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CapteurReculHistory'], meta: { name: 'CapteurReculHistory' } }
    /**
     * Find zero or one CapteurReculHistory that matches the filter.
     * @param {CapteurReculHistoryFindUniqueArgs} args - Arguments to find a CapteurReculHistory
     * @example
     * // Get one CapteurReculHistory
     * const capteurReculHistory = await prisma.capteurReculHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CapteurReculHistoryFindUniqueArgs>(args: SelectSubset<T, CapteurReculHistoryFindUniqueArgs<ExtArgs>>): Prisma__CapteurReculHistoryClient<$Result.GetResult<Prisma.$CapteurReculHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CapteurReculHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CapteurReculHistoryFindUniqueOrThrowArgs} args - Arguments to find a CapteurReculHistory
     * @example
     * // Get one CapteurReculHistory
     * const capteurReculHistory = await prisma.capteurReculHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CapteurReculHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CapteurReculHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CapteurReculHistoryClient<$Result.GetResult<Prisma.$CapteurReculHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CapteurReculHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapteurReculHistoryFindFirstArgs} args - Arguments to find a CapteurReculHistory
     * @example
     * // Get one CapteurReculHistory
     * const capteurReculHistory = await prisma.capteurReculHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CapteurReculHistoryFindFirstArgs>(args?: SelectSubset<T, CapteurReculHistoryFindFirstArgs<ExtArgs>>): Prisma__CapteurReculHistoryClient<$Result.GetResult<Prisma.$CapteurReculHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CapteurReculHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapteurReculHistoryFindFirstOrThrowArgs} args - Arguments to find a CapteurReculHistory
     * @example
     * // Get one CapteurReculHistory
     * const capteurReculHistory = await prisma.capteurReculHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CapteurReculHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CapteurReculHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CapteurReculHistoryClient<$Result.GetResult<Prisma.$CapteurReculHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CapteurReculHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapteurReculHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CapteurReculHistories
     * const capteurReculHistories = await prisma.capteurReculHistory.findMany()
     * 
     * // Get first 10 CapteurReculHistories
     * const capteurReculHistories = await prisma.capteurReculHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const capteurReculHistoryWithIdOnly = await prisma.capteurReculHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CapteurReculHistoryFindManyArgs>(args?: SelectSubset<T, CapteurReculHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapteurReculHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CapteurReculHistory.
     * @param {CapteurReculHistoryCreateArgs} args - Arguments to create a CapteurReculHistory.
     * @example
     * // Create one CapteurReculHistory
     * const CapteurReculHistory = await prisma.capteurReculHistory.create({
     *   data: {
     *     // ... data to create a CapteurReculHistory
     *   }
     * })
     * 
     */
    create<T extends CapteurReculHistoryCreateArgs>(args: SelectSubset<T, CapteurReculHistoryCreateArgs<ExtArgs>>): Prisma__CapteurReculHistoryClient<$Result.GetResult<Prisma.$CapteurReculHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CapteurReculHistories.
     * @param {CapteurReculHistoryCreateManyArgs} args - Arguments to create many CapteurReculHistories.
     * @example
     * // Create many CapteurReculHistories
     * const capteurReculHistory = await prisma.capteurReculHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CapteurReculHistoryCreateManyArgs>(args?: SelectSubset<T, CapteurReculHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CapteurReculHistory.
     * @param {CapteurReculHistoryDeleteArgs} args - Arguments to delete one CapteurReculHistory.
     * @example
     * // Delete one CapteurReculHistory
     * const CapteurReculHistory = await prisma.capteurReculHistory.delete({
     *   where: {
     *     // ... filter to delete one CapteurReculHistory
     *   }
     * })
     * 
     */
    delete<T extends CapteurReculHistoryDeleteArgs>(args: SelectSubset<T, CapteurReculHistoryDeleteArgs<ExtArgs>>): Prisma__CapteurReculHistoryClient<$Result.GetResult<Prisma.$CapteurReculHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CapteurReculHistory.
     * @param {CapteurReculHistoryUpdateArgs} args - Arguments to update one CapteurReculHistory.
     * @example
     * // Update one CapteurReculHistory
     * const capteurReculHistory = await prisma.capteurReculHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CapteurReculHistoryUpdateArgs>(args: SelectSubset<T, CapteurReculHistoryUpdateArgs<ExtArgs>>): Prisma__CapteurReculHistoryClient<$Result.GetResult<Prisma.$CapteurReculHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CapteurReculHistories.
     * @param {CapteurReculHistoryDeleteManyArgs} args - Arguments to filter CapteurReculHistories to delete.
     * @example
     * // Delete a few CapteurReculHistories
     * const { count } = await prisma.capteurReculHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CapteurReculHistoryDeleteManyArgs>(args?: SelectSubset<T, CapteurReculHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CapteurReculHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapteurReculHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CapteurReculHistories
     * const capteurReculHistory = await prisma.capteurReculHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CapteurReculHistoryUpdateManyArgs>(args: SelectSubset<T, CapteurReculHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CapteurReculHistory.
     * @param {CapteurReculHistoryUpsertArgs} args - Arguments to update or create a CapteurReculHistory.
     * @example
     * // Update or create a CapteurReculHistory
     * const capteurReculHistory = await prisma.capteurReculHistory.upsert({
     *   create: {
     *     // ... data to create a CapteurReculHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CapteurReculHistory we want to update
     *   }
     * })
     */
    upsert<T extends CapteurReculHistoryUpsertArgs>(args: SelectSubset<T, CapteurReculHistoryUpsertArgs<ExtArgs>>): Prisma__CapteurReculHistoryClient<$Result.GetResult<Prisma.$CapteurReculHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CapteurReculHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapteurReculHistoryCountArgs} args - Arguments to filter CapteurReculHistories to count.
     * @example
     * // Count the number of CapteurReculHistories
     * const count = await prisma.capteurReculHistory.count({
     *   where: {
     *     // ... the filter for the CapteurReculHistories we want to count
     *   }
     * })
    **/
    count<T extends CapteurReculHistoryCountArgs>(
      args?: Subset<T, CapteurReculHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CapteurReculHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CapteurReculHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapteurReculHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CapteurReculHistoryAggregateArgs>(args: Subset<T, CapteurReculHistoryAggregateArgs>): Prisma.PrismaPromise<GetCapteurReculHistoryAggregateType<T>>

    /**
     * Group by CapteurReculHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapteurReculHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CapteurReculHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CapteurReculHistoryGroupByArgs['orderBy'] }
        : { orderBy?: CapteurReculHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CapteurReculHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCapteurReculHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CapteurReculHistory model
   */
  readonly fields: CapteurReculHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CapteurReculHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CapteurReculHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CapteurReculHistory model
   */
  interface CapteurReculHistoryFieldRefs {
    readonly id: FieldRef<"CapteurReculHistory", 'Int'>
    readonly valeurBrute: FieldRef<"CapteurReculHistory", 'Int'>
    readonly distanceCm: FieldRef<"CapteurReculHistory", 'String'>
    readonly statut: FieldRef<"CapteurReculHistory", 'String'>
    readonly dateEvenement: FieldRef<"CapteurReculHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CapteurReculHistory findUnique
   */
  export type CapteurReculHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapteurReculHistory
     */
    select?: CapteurReculHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapteurReculHistory
     */
    omit?: CapteurReculHistoryOmit<ExtArgs> | null
    /**
     * Filter, which CapteurReculHistory to fetch.
     */
    where: CapteurReculHistoryWhereUniqueInput
  }

  /**
   * CapteurReculHistory findUniqueOrThrow
   */
  export type CapteurReculHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapteurReculHistory
     */
    select?: CapteurReculHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapteurReculHistory
     */
    omit?: CapteurReculHistoryOmit<ExtArgs> | null
    /**
     * Filter, which CapteurReculHistory to fetch.
     */
    where: CapteurReculHistoryWhereUniqueInput
  }

  /**
   * CapteurReculHistory findFirst
   */
  export type CapteurReculHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapteurReculHistory
     */
    select?: CapteurReculHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapteurReculHistory
     */
    omit?: CapteurReculHistoryOmit<ExtArgs> | null
    /**
     * Filter, which CapteurReculHistory to fetch.
     */
    where?: CapteurReculHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapteurReculHistories to fetch.
     */
    orderBy?: CapteurReculHistoryOrderByWithRelationInput | CapteurReculHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CapteurReculHistories.
     */
    cursor?: CapteurReculHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapteurReculHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapteurReculHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CapteurReculHistories.
     */
    distinct?: CapteurReculHistoryScalarFieldEnum | CapteurReculHistoryScalarFieldEnum[]
  }

  /**
   * CapteurReculHistory findFirstOrThrow
   */
  export type CapteurReculHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapteurReculHistory
     */
    select?: CapteurReculHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapteurReculHistory
     */
    omit?: CapteurReculHistoryOmit<ExtArgs> | null
    /**
     * Filter, which CapteurReculHistory to fetch.
     */
    where?: CapteurReculHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapteurReculHistories to fetch.
     */
    orderBy?: CapteurReculHistoryOrderByWithRelationInput | CapteurReculHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CapteurReculHistories.
     */
    cursor?: CapteurReculHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapteurReculHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapteurReculHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CapteurReculHistories.
     */
    distinct?: CapteurReculHistoryScalarFieldEnum | CapteurReculHistoryScalarFieldEnum[]
  }

  /**
   * CapteurReculHistory findMany
   */
  export type CapteurReculHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapteurReculHistory
     */
    select?: CapteurReculHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapteurReculHistory
     */
    omit?: CapteurReculHistoryOmit<ExtArgs> | null
    /**
     * Filter, which CapteurReculHistories to fetch.
     */
    where?: CapteurReculHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapteurReculHistories to fetch.
     */
    orderBy?: CapteurReculHistoryOrderByWithRelationInput | CapteurReculHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CapteurReculHistories.
     */
    cursor?: CapteurReculHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapteurReculHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapteurReculHistories.
     */
    skip?: number
    distinct?: CapteurReculHistoryScalarFieldEnum | CapteurReculHistoryScalarFieldEnum[]
  }

  /**
   * CapteurReculHistory create
   */
  export type CapteurReculHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapteurReculHistory
     */
    select?: CapteurReculHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapteurReculHistory
     */
    omit?: CapteurReculHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a CapteurReculHistory.
     */
    data: XOR<CapteurReculHistoryCreateInput, CapteurReculHistoryUncheckedCreateInput>
  }

  /**
   * CapteurReculHistory createMany
   */
  export type CapteurReculHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CapteurReculHistories.
     */
    data: CapteurReculHistoryCreateManyInput | CapteurReculHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CapteurReculHistory update
   */
  export type CapteurReculHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapteurReculHistory
     */
    select?: CapteurReculHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapteurReculHistory
     */
    omit?: CapteurReculHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a CapteurReculHistory.
     */
    data: XOR<CapteurReculHistoryUpdateInput, CapteurReculHistoryUncheckedUpdateInput>
    /**
     * Choose, which CapteurReculHistory to update.
     */
    where: CapteurReculHistoryWhereUniqueInput
  }

  /**
   * CapteurReculHistory updateMany
   */
  export type CapteurReculHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CapteurReculHistories.
     */
    data: XOR<CapteurReculHistoryUpdateManyMutationInput, CapteurReculHistoryUncheckedUpdateManyInput>
    /**
     * Filter which CapteurReculHistories to update
     */
    where?: CapteurReculHistoryWhereInput
    /**
     * Limit how many CapteurReculHistories to update.
     */
    limit?: number
  }

  /**
   * CapteurReculHistory upsert
   */
  export type CapteurReculHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapteurReculHistory
     */
    select?: CapteurReculHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapteurReculHistory
     */
    omit?: CapteurReculHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the CapteurReculHistory to update in case it exists.
     */
    where: CapteurReculHistoryWhereUniqueInput
    /**
     * In case the CapteurReculHistory found by the `where` argument doesn't exist, create a new CapteurReculHistory with this data.
     */
    create: XOR<CapteurReculHistoryCreateInput, CapteurReculHistoryUncheckedCreateInput>
    /**
     * In case the CapteurReculHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CapteurReculHistoryUpdateInput, CapteurReculHistoryUncheckedUpdateInput>
  }

  /**
   * CapteurReculHistory delete
   */
  export type CapteurReculHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapteurReculHistory
     */
    select?: CapteurReculHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapteurReculHistory
     */
    omit?: CapteurReculHistoryOmit<ExtArgs> | null
    /**
     * Filter which CapteurReculHistory to delete.
     */
    where: CapteurReculHistoryWhereUniqueInput
  }

  /**
   * CapteurReculHistory deleteMany
   */
  export type CapteurReculHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CapteurReculHistories to delete
     */
    where?: CapteurReculHistoryWhereInput
    /**
     * Limit how many CapteurReculHistories to delete.
     */
    limit?: number
  }

  /**
   * CapteurReculHistory without action
   */
  export type CapteurReculHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapteurReculHistory
     */
    select?: CapteurReculHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapteurReculHistory
     */
    omit?: CapteurReculHistoryOmit<ExtArgs> | null
  }


  /**
   * Model MesureCapteur
   */

  export type AggregateMesureCapteur = {
    _count: MesureCapteurCountAggregateOutputType | null
    _avg: MesureCapteurAvgAggregateOutputType | null
    _sum: MesureCapteurSumAggregateOutputType | null
    _min: MesureCapteurMinAggregateOutputType | null
    _max: MesureCapteurMaxAggregateOutputType | null
  }

  export type MesureCapteurAvgAggregateOutputType = {
    id: number | null
    distanceCm: number | null
    humiditePourcent: number | null
    latitude: number | null
    longitude: number | null
    altitude: number | null
  }

  export type MesureCapteurSumAggregateOutputType = {
    id: number | null
    distanceCm: number | null
    humiditePourcent: number | null
    latitude: number | null
    longitude: number | null
    altitude: number | null
  }

  export type MesureCapteurMinAggregateOutputType = {
    id: number | null
    dateEnregistrement: Date | null
    distanceCm: number | null
    humiditePourcent: number | null
    latitude: number | null
    longitude: number | null
    altitude: number | null
  }

  export type MesureCapteurMaxAggregateOutputType = {
    id: number | null
    dateEnregistrement: Date | null
    distanceCm: number | null
    humiditePourcent: number | null
    latitude: number | null
    longitude: number | null
    altitude: number | null
  }

  export type MesureCapteurCountAggregateOutputType = {
    id: number
    dateEnregistrement: number
    distanceCm: number
    humiditePourcent: number
    latitude: number
    longitude: number
    altitude: number
    _all: number
  }


  export type MesureCapteurAvgAggregateInputType = {
    id?: true
    distanceCm?: true
    humiditePourcent?: true
    latitude?: true
    longitude?: true
    altitude?: true
  }

  export type MesureCapteurSumAggregateInputType = {
    id?: true
    distanceCm?: true
    humiditePourcent?: true
    latitude?: true
    longitude?: true
    altitude?: true
  }

  export type MesureCapteurMinAggregateInputType = {
    id?: true
    dateEnregistrement?: true
    distanceCm?: true
    humiditePourcent?: true
    latitude?: true
    longitude?: true
    altitude?: true
  }

  export type MesureCapteurMaxAggregateInputType = {
    id?: true
    dateEnregistrement?: true
    distanceCm?: true
    humiditePourcent?: true
    latitude?: true
    longitude?: true
    altitude?: true
  }

  export type MesureCapteurCountAggregateInputType = {
    id?: true
    dateEnregistrement?: true
    distanceCm?: true
    humiditePourcent?: true
    latitude?: true
    longitude?: true
    altitude?: true
    _all?: true
  }

  export type MesureCapteurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MesureCapteur to aggregate.
     */
    where?: MesureCapteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MesureCapteurs to fetch.
     */
    orderBy?: MesureCapteurOrderByWithRelationInput | MesureCapteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MesureCapteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MesureCapteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MesureCapteurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MesureCapteurs
    **/
    _count?: true | MesureCapteurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MesureCapteurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MesureCapteurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MesureCapteurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MesureCapteurMaxAggregateInputType
  }

  export type GetMesureCapteurAggregateType<T extends MesureCapteurAggregateArgs> = {
        [P in keyof T & keyof AggregateMesureCapteur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMesureCapteur[P]>
      : GetScalarType<T[P], AggregateMesureCapteur[P]>
  }




  export type MesureCapteurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MesureCapteurWhereInput
    orderBy?: MesureCapteurOrderByWithAggregationInput | MesureCapteurOrderByWithAggregationInput[]
    by: MesureCapteurScalarFieldEnum[] | MesureCapteurScalarFieldEnum
    having?: MesureCapteurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MesureCapteurCountAggregateInputType | true
    _avg?: MesureCapteurAvgAggregateInputType
    _sum?: MesureCapteurSumAggregateInputType
    _min?: MesureCapteurMinAggregateInputType
    _max?: MesureCapteurMaxAggregateInputType
  }

  export type MesureCapteurGroupByOutputType = {
    id: number
    dateEnregistrement: Date | null
    distanceCm: number | null
    humiditePourcent: number | null
    latitude: number | null
    longitude: number | null
    altitude: number | null
    _count: MesureCapteurCountAggregateOutputType | null
    _avg: MesureCapteurAvgAggregateOutputType | null
    _sum: MesureCapteurSumAggregateOutputType | null
    _min: MesureCapteurMinAggregateOutputType | null
    _max: MesureCapteurMaxAggregateOutputType | null
  }

  type GetMesureCapteurGroupByPayload<T extends MesureCapteurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MesureCapteurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MesureCapteurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MesureCapteurGroupByOutputType[P]>
            : GetScalarType<T[P], MesureCapteurGroupByOutputType[P]>
        }
      >
    >


  export type MesureCapteurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateEnregistrement?: boolean
    distanceCm?: boolean
    humiditePourcent?: boolean
    latitude?: boolean
    longitude?: boolean
    altitude?: boolean
  }, ExtArgs["result"]["mesureCapteur"]>



  export type MesureCapteurSelectScalar = {
    id?: boolean
    dateEnregistrement?: boolean
    distanceCm?: boolean
    humiditePourcent?: boolean
    latitude?: boolean
    longitude?: boolean
    altitude?: boolean
  }

  export type MesureCapteurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dateEnregistrement" | "distanceCm" | "humiditePourcent" | "latitude" | "longitude" | "altitude", ExtArgs["result"]["mesureCapteur"]>

  export type $MesureCapteurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MesureCapteur"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dateEnregistrement: Date | null
      distanceCm: number | null
      humiditePourcent: number | null
      latitude: number | null
      longitude: number | null
      altitude: number | null
    }, ExtArgs["result"]["mesureCapteur"]>
    composites: {}
  }

  type MesureCapteurGetPayload<S extends boolean | null | undefined | MesureCapteurDefaultArgs> = $Result.GetResult<Prisma.$MesureCapteurPayload, S>

  type MesureCapteurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MesureCapteurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MesureCapteurCountAggregateInputType | true
    }

  export interface MesureCapteurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MesureCapteur'], meta: { name: 'MesureCapteur' } }
    /**
     * Find zero or one MesureCapteur that matches the filter.
     * @param {MesureCapteurFindUniqueArgs} args - Arguments to find a MesureCapteur
     * @example
     * // Get one MesureCapteur
     * const mesureCapteur = await prisma.mesureCapteur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MesureCapteurFindUniqueArgs>(args: SelectSubset<T, MesureCapteurFindUniqueArgs<ExtArgs>>): Prisma__MesureCapteurClient<$Result.GetResult<Prisma.$MesureCapteurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MesureCapteur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MesureCapteurFindUniqueOrThrowArgs} args - Arguments to find a MesureCapteur
     * @example
     * // Get one MesureCapteur
     * const mesureCapteur = await prisma.mesureCapteur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MesureCapteurFindUniqueOrThrowArgs>(args: SelectSubset<T, MesureCapteurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MesureCapteurClient<$Result.GetResult<Prisma.$MesureCapteurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MesureCapteur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureCapteurFindFirstArgs} args - Arguments to find a MesureCapteur
     * @example
     * // Get one MesureCapteur
     * const mesureCapteur = await prisma.mesureCapteur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MesureCapteurFindFirstArgs>(args?: SelectSubset<T, MesureCapteurFindFirstArgs<ExtArgs>>): Prisma__MesureCapteurClient<$Result.GetResult<Prisma.$MesureCapteurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MesureCapteur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureCapteurFindFirstOrThrowArgs} args - Arguments to find a MesureCapteur
     * @example
     * // Get one MesureCapteur
     * const mesureCapteur = await prisma.mesureCapteur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MesureCapteurFindFirstOrThrowArgs>(args?: SelectSubset<T, MesureCapteurFindFirstOrThrowArgs<ExtArgs>>): Prisma__MesureCapteurClient<$Result.GetResult<Prisma.$MesureCapteurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MesureCapteurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureCapteurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MesureCapteurs
     * const mesureCapteurs = await prisma.mesureCapteur.findMany()
     * 
     * // Get first 10 MesureCapteurs
     * const mesureCapteurs = await prisma.mesureCapteur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mesureCapteurWithIdOnly = await prisma.mesureCapteur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MesureCapteurFindManyArgs>(args?: SelectSubset<T, MesureCapteurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MesureCapteurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MesureCapteur.
     * @param {MesureCapteurCreateArgs} args - Arguments to create a MesureCapteur.
     * @example
     * // Create one MesureCapteur
     * const MesureCapteur = await prisma.mesureCapteur.create({
     *   data: {
     *     // ... data to create a MesureCapteur
     *   }
     * })
     * 
     */
    create<T extends MesureCapteurCreateArgs>(args: SelectSubset<T, MesureCapteurCreateArgs<ExtArgs>>): Prisma__MesureCapteurClient<$Result.GetResult<Prisma.$MesureCapteurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MesureCapteurs.
     * @param {MesureCapteurCreateManyArgs} args - Arguments to create many MesureCapteurs.
     * @example
     * // Create many MesureCapteurs
     * const mesureCapteur = await prisma.mesureCapteur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MesureCapteurCreateManyArgs>(args?: SelectSubset<T, MesureCapteurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MesureCapteur.
     * @param {MesureCapteurDeleteArgs} args - Arguments to delete one MesureCapteur.
     * @example
     * // Delete one MesureCapteur
     * const MesureCapteur = await prisma.mesureCapteur.delete({
     *   where: {
     *     // ... filter to delete one MesureCapteur
     *   }
     * })
     * 
     */
    delete<T extends MesureCapteurDeleteArgs>(args: SelectSubset<T, MesureCapteurDeleteArgs<ExtArgs>>): Prisma__MesureCapteurClient<$Result.GetResult<Prisma.$MesureCapteurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MesureCapteur.
     * @param {MesureCapteurUpdateArgs} args - Arguments to update one MesureCapteur.
     * @example
     * // Update one MesureCapteur
     * const mesureCapteur = await prisma.mesureCapteur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MesureCapteurUpdateArgs>(args: SelectSubset<T, MesureCapteurUpdateArgs<ExtArgs>>): Prisma__MesureCapteurClient<$Result.GetResult<Prisma.$MesureCapteurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MesureCapteurs.
     * @param {MesureCapteurDeleteManyArgs} args - Arguments to filter MesureCapteurs to delete.
     * @example
     * // Delete a few MesureCapteurs
     * const { count } = await prisma.mesureCapteur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MesureCapteurDeleteManyArgs>(args?: SelectSubset<T, MesureCapteurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MesureCapteurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureCapteurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MesureCapteurs
     * const mesureCapteur = await prisma.mesureCapteur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MesureCapteurUpdateManyArgs>(args: SelectSubset<T, MesureCapteurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MesureCapteur.
     * @param {MesureCapteurUpsertArgs} args - Arguments to update or create a MesureCapteur.
     * @example
     * // Update or create a MesureCapteur
     * const mesureCapteur = await prisma.mesureCapteur.upsert({
     *   create: {
     *     // ... data to create a MesureCapteur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MesureCapteur we want to update
     *   }
     * })
     */
    upsert<T extends MesureCapteurUpsertArgs>(args: SelectSubset<T, MesureCapteurUpsertArgs<ExtArgs>>): Prisma__MesureCapteurClient<$Result.GetResult<Prisma.$MesureCapteurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MesureCapteurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureCapteurCountArgs} args - Arguments to filter MesureCapteurs to count.
     * @example
     * // Count the number of MesureCapteurs
     * const count = await prisma.mesureCapteur.count({
     *   where: {
     *     // ... the filter for the MesureCapteurs we want to count
     *   }
     * })
    **/
    count<T extends MesureCapteurCountArgs>(
      args?: Subset<T, MesureCapteurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MesureCapteurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MesureCapteur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureCapteurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MesureCapteurAggregateArgs>(args: Subset<T, MesureCapteurAggregateArgs>): Prisma.PrismaPromise<GetMesureCapteurAggregateType<T>>

    /**
     * Group by MesureCapteur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureCapteurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MesureCapteurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MesureCapteurGroupByArgs['orderBy'] }
        : { orderBy?: MesureCapteurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MesureCapteurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMesureCapteurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MesureCapteur model
   */
  readonly fields: MesureCapteurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MesureCapteur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MesureCapteurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MesureCapteur model
   */
  interface MesureCapteurFieldRefs {
    readonly id: FieldRef<"MesureCapteur", 'Int'>
    readonly dateEnregistrement: FieldRef<"MesureCapteur", 'DateTime'>
    readonly distanceCm: FieldRef<"MesureCapteur", 'Float'>
    readonly humiditePourcent: FieldRef<"MesureCapteur", 'Float'>
    readonly latitude: FieldRef<"MesureCapteur", 'Float'>
    readonly longitude: FieldRef<"MesureCapteur", 'Float'>
    readonly altitude: FieldRef<"MesureCapteur", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * MesureCapteur findUnique
   */
  export type MesureCapteurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesureCapteur
     */
    select?: MesureCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MesureCapteur
     */
    omit?: MesureCapteurOmit<ExtArgs> | null
    /**
     * Filter, which MesureCapteur to fetch.
     */
    where: MesureCapteurWhereUniqueInput
  }

  /**
   * MesureCapteur findUniqueOrThrow
   */
  export type MesureCapteurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesureCapteur
     */
    select?: MesureCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MesureCapteur
     */
    omit?: MesureCapteurOmit<ExtArgs> | null
    /**
     * Filter, which MesureCapteur to fetch.
     */
    where: MesureCapteurWhereUniqueInput
  }

  /**
   * MesureCapteur findFirst
   */
  export type MesureCapteurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesureCapteur
     */
    select?: MesureCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MesureCapteur
     */
    omit?: MesureCapteurOmit<ExtArgs> | null
    /**
     * Filter, which MesureCapteur to fetch.
     */
    where?: MesureCapteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MesureCapteurs to fetch.
     */
    orderBy?: MesureCapteurOrderByWithRelationInput | MesureCapteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MesureCapteurs.
     */
    cursor?: MesureCapteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MesureCapteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MesureCapteurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MesureCapteurs.
     */
    distinct?: MesureCapteurScalarFieldEnum | MesureCapteurScalarFieldEnum[]
  }

  /**
   * MesureCapteur findFirstOrThrow
   */
  export type MesureCapteurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesureCapteur
     */
    select?: MesureCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MesureCapteur
     */
    omit?: MesureCapteurOmit<ExtArgs> | null
    /**
     * Filter, which MesureCapteur to fetch.
     */
    where?: MesureCapteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MesureCapteurs to fetch.
     */
    orderBy?: MesureCapteurOrderByWithRelationInput | MesureCapteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MesureCapteurs.
     */
    cursor?: MesureCapteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MesureCapteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MesureCapteurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MesureCapteurs.
     */
    distinct?: MesureCapteurScalarFieldEnum | MesureCapteurScalarFieldEnum[]
  }

  /**
   * MesureCapteur findMany
   */
  export type MesureCapteurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesureCapteur
     */
    select?: MesureCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MesureCapteur
     */
    omit?: MesureCapteurOmit<ExtArgs> | null
    /**
     * Filter, which MesureCapteurs to fetch.
     */
    where?: MesureCapteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MesureCapteurs to fetch.
     */
    orderBy?: MesureCapteurOrderByWithRelationInput | MesureCapteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MesureCapteurs.
     */
    cursor?: MesureCapteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MesureCapteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MesureCapteurs.
     */
    skip?: number
    distinct?: MesureCapteurScalarFieldEnum | MesureCapteurScalarFieldEnum[]
  }

  /**
   * MesureCapteur create
   */
  export type MesureCapteurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesureCapteur
     */
    select?: MesureCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MesureCapteur
     */
    omit?: MesureCapteurOmit<ExtArgs> | null
    /**
     * The data needed to create a MesureCapteur.
     */
    data?: XOR<MesureCapteurCreateInput, MesureCapteurUncheckedCreateInput>
  }

  /**
   * MesureCapteur createMany
   */
  export type MesureCapteurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MesureCapteurs.
     */
    data: MesureCapteurCreateManyInput | MesureCapteurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MesureCapteur update
   */
  export type MesureCapteurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesureCapteur
     */
    select?: MesureCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MesureCapteur
     */
    omit?: MesureCapteurOmit<ExtArgs> | null
    /**
     * The data needed to update a MesureCapteur.
     */
    data: XOR<MesureCapteurUpdateInput, MesureCapteurUncheckedUpdateInput>
    /**
     * Choose, which MesureCapteur to update.
     */
    where: MesureCapteurWhereUniqueInput
  }

  /**
   * MesureCapteur updateMany
   */
  export type MesureCapteurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MesureCapteurs.
     */
    data: XOR<MesureCapteurUpdateManyMutationInput, MesureCapteurUncheckedUpdateManyInput>
    /**
     * Filter which MesureCapteurs to update
     */
    where?: MesureCapteurWhereInput
    /**
     * Limit how many MesureCapteurs to update.
     */
    limit?: number
  }

  /**
   * MesureCapteur upsert
   */
  export type MesureCapteurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesureCapteur
     */
    select?: MesureCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MesureCapteur
     */
    omit?: MesureCapteurOmit<ExtArgs> | null
    /**
     * The filter to search for the MesureCapteur to update in case it exists.
     */
    where: MesureCapteurWhereUniqueInput
    /**
     * In case the MesureCapteur found by the `where` argument doesn't exist, create a new MesureCapteur with this data.
     */
    create: XOR<MesureCapteurCreateInput, MesureCapteurUncheckedCreateInput>
    /**
     * In case the MesureCapteur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MesureCapteurUpdateInput, MesureCapteurUncheckedUpdateInput>
  }

  /**
   * MesureCapteur delete
   */
  export type MesureCapteurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesureCapteur
     */
    select?: MesureCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MesureCapteur
     */
    omit?: MesureCapteurOmit<ExtArgs> | null
    /**
     * Filter which MesureCapteur to delete.
     */
    where: MesureCapteurWhereUniqueInput
  }

  /**
   * MesureCapteur deleteMany
   */
  export type MesureCapteurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MesureCapteurs to delete
     */
    where?: MesureCapteurWhereInput
    /**
     * Limit how many MesureCapteurs to delete.
     */
    limit?: number
  }

  /**
   * MesureCapteur without action
   */
  export type MesureCapteurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesureCapteur
     */
    select?: MesureCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MesureCapteur
     */
    omit?: MesureCapteurOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const G7E_AudioFileScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    minioBucket: 'minioBucket',
    minioPath: 'minioPath',
    fileSize: 'fileSize',
    duration: 'duration',
    uploadedAt: 'uploadedAt'
  };

  export type G7E_AudioFileScalarFieldEnum = (typeof G7E_AudioFileScalarFieldEnum)[keyof typeof G7E_AudioFileScalarFieldEnum]


  export const ImuReadingScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    accX: 'accX',
    accY: 'accY',
    accZ: 'accZ',
    gyroX: 'gyroX',
    gyroY: 'gyroY',
    gyroZ: 'gyroZ',
    roll: 'roll',
    pitch: 'pitch',
    dRoll: 'dRoll',
    dPitch: 'dPitch',
    vibCount: 'vibCount',
    state: 'state'
  };

  export type ImuReadingScalarFieldEnum = (typeof ImuReadingScalarFieldEnum)[keyof typeof ImuReadingScalarFieldEnum]


  export const GasMeasureScalarFieldEnum: {
    id: 'id',
    sensorName: 'sensorName',
    gasType: 'gasType',
    gasValue: 'gasValue',
    humidity: 'humidity',
    temperature: 'temperature',
    dangerLevel: 'dangerLevel',
    createdAt: 'createdAt'
  };

  export type GasMeasureScalarFieldEnum = (typeof GasMeasureScalarFieldEnum)[keyof typeof GasMeasureScalarFieldEnum]


  export const CapteurReculHistoryScalarFieldEnum: {
    id: 'id',
    valeurBrute: 'valeurBrute',
    distanceCm: 'distanceCm',
    statut: 'statut',
    dateEvenement: 'dateEvenement'
  };

  export type CapteurReculHistoryScalarFieldEnum = (typeof CapteurReculHistoryScalarFieldEnum)[keyof typeof CapteurReculHistoryScalarFieldEnum]


  export const MesureCapteurScalarFieldEnum: {
    id: 'id',
    dateEnregistrement: 'dateEnregistrement',
    distanceCm: 'distanceCm',
    humiditePourcent: 'humiditePourcent',
    latitude: 'latitude',
    longitude: 'longitude',
    altitude: 'altitude'
  };

  export type MesureCapteurScalarFieldEnum = (typeof MesureCapteurScalarFieldEnum)[keyof typeof MesureCapteurScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const G7E_AudioFileOrderByRelevanceFieldEnum: {
    filename: 'filename',
    minioBucket: 'minioBucket',
    minioPath: 'minioPath'
  };

  export type G7E_AudioFileOrderByRelevanceFieldEnum = (typeof G7E_AudioFileOrderByRelevanceFieldEnum)[keyof typeof G7E_AudioFileOrderByRelevanceFieldEnum]


  export const ImuReadingOrderByRelevanceFieldEnum: {
    state: 'state'
  };

  export type ImuReadingOrderByRelevanceFieldEnum = (typeof ImuReadingOrderByRelevanceFieldEnum)[keyof typeof ImuReadingOrderByRelevanceFieldEnum]


  export const GasMeasureOrderByRelevanceFieldEnum: {
    sensorName: 'sensorName',
    gasType: 'gasType'
  };

  export type GasMeasureOrderByRelevanceFieldEnum = (typeof GasMeasureOrderByRelevanceFieldEnum)[keyof typeof GasMeasureOrderByRelevanceFieldEnum]


  export const CapteurReculHistoryOrderByRelevanceFieldEnum: {
    distanceCm: 'distanceCm',
    statut: 'statut'
  };

  export type CapteurReculHistoryOrderByRelevanceFieldEnum = (typeof CapteurReculHistoryOrderByRelevanceFieldEnum)[keyof typeof CapteurReculHistoryOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type G7E_AudioFileWhereInput = {
    AND?: G7E_AudioFileWhereInput | G7E_AudioFileWhereInput[]
    OR?: G7E_AudioFileWhereInput[]
    NOT?: G7E_AudioFileWhereInput | G7E_AudioFileWhereInput[]
    id?: IntFilter<"G7E_AudioFile"> | number
    filename?: StringNullableFilter<"G7E_AudioFile"> | string | null
    minioBucket?: StringNullableFilter<"G7E_AudioFile"> | string | null
    minioPath?: StringNullableFilter<"G7E_AudioFile"> | string | null
    fileSize?: IntNullableFilter<"G7E_AudioFile"> | number | null
    duration?: IntNullableFilter<"G7E_AudioFile"> | number | null
    uploadedAt?: DateTimeFilter<"G7E_AudioFile"> | Date | string
  }

  export type G7E_AudioFileOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrderInput | SortOrder
    minioBucket?: SortOrderInput | SortOrder
    minioPath?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    _relevance?: G7E_AudioFileOrderByRelevanceInput
  }

  export type G7E_AudioFileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: G7E_AudioFileWhereInput | G7E_AudioFileWhereInput[]
    OR?: G7E_AudioFileWhereInput[]
    NOT?: G7E_AudioFileWhereInput | G7E_AudioFileWhereInput[]
    filename?: StringNullableFilter<"G7E_AudioFile"> | string | null
    minioBucket?: StringNullableFilter<"G7E_AudioFile"> | string | null
    minioPath?: StringNullableFilter<"G7E_AudioFile"> | string | null
    fileSize?: IntNullableFilter<"G7E_AudioFile"> | number | null
    duration?: IntNullableFilter<"G7E_AudioFile"> | number | null
    uploadedAt?: DateTimeFilter<"G7E_AudioFile"> | Date | string
  }, "id">

  export type G7E_AudioFileOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrderInput | SortOrder
    minioBucket?: SortOrderInput | SortOrder
    minioPath?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    _count?: G7E_AudioFileCountOrderByAggregateInput
    _avg?: G7E_AudioFileAvgOrderByAggregateInput
    _max?: G7E_AudioFileMaxOrderByAggregateInput
    _min?: G7E_AudioFileMinOrderByAggregateInput
    _sum?: G7E_AudioFileSumOrderByAggregateInput
  }

  export type G7E_AudioFileScalarWhereWithAggregatesInput = {
    AND?: G7E_AudioFileScalarWhereWithAggregatesInput | G7E_AudioFileScalarWhereWithAggregatesInput[]
    OR?: G7E_AudioFileScalarWhereWithAggregatesInput[]
    NOT?: G7E_AudioFileScalarWhereWithAggregatesInput | G7E_AudioFileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"G7E_AudioFile"> | number
    filename?: StringNullableWithAggregatesFilter<"G7E_AudioFile"> | string | null
    minioBucket?: StringNullableWithAggregatesFilter<"G7E_AudioFile"> | string | null
    minioPath?: StringNullableWithAggregatesFilter<"G7E_AudioFile"> | string | null
    fileSize?: IntNullableWithAggregatesFilter<"G7E_AudioFile"> | number | null
    duration?: IntNullableWithAggregatesFilter<"G7E_AudioFile"> | number | null
    uploadedAt?: DateTimeWithAggregatesFilter<"G7E_AudioFile"> | Date | string
  }

  export type ImuReadingWhereInput = {
    AND?: ImuReadingWhereInput | ImuReadingWhereInput[]
    OR?: ImuReadingWhereInput[]
    NOT?: ImuReadingWhereInput | ImuReadingWhereInput[]
    id?: IntFilter<"ImuReading"> | number
    timestamp?: DateTimeFilter<"ImuReading"> | Date | string
    accX?: FloatFilter<"ImuReading"> | number
    accY?: FloatFilter<"ImuReading"> | number
    accZ?: FloatFilter<"ImuReading"> | number
    gyroX?: FloatFilter<"ImuReading"> | number
    gyroY?: FloatFilter<"ImuReading"> | number
    gyroZ?: FloatFilter<"ImuReading"> | number
    roll?: FloatFilter<"ImuReading"> | number
    pitch?: FloatFilter<"ImuReading"> | number
    dRoll?: FloatFilter<"ImuReading"> | number
    dPitch?: FloatFilter<"ImuReading"> | number
    vibCount?: IntFilter<"ImuReading"> | number
    state?: StringFilter<"ImuReading"> | string
  }

  export type ImuReadingOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    accX?: SortOrder
    accY?: SortOrder
    accZ?: SortOrder
    gyroX?: SortOrder
    gyroY?: SortOrder
    gyroZ?: SortOrder
    roll?: SortOrder
    pitch?: SortOrder
    dRoll?: SortOrder
    dPitch?: SortOrder
    vibCount?: SortOrder
    state?: SortOrder
    _relevance?: ImuReadingOrderByRelevanceInput
  }

  export type ImuReadingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImuReadingWhereInput | ImuReadingWhereInput[]
    OR?: ImuReadingWhereInput[]
    NOT?: ImuReadingWhereInput | ImuReadingWhereInput[]
    timestamp?: DateTimeFilter<"ImuReading"> | Date | string
    accX?: FloatFilter<"ImuReading"> | number
    accY?: FloatFilter<"ImuReading"> | number
    accZ?: FloatFilter<"ImuReading"> | number
    gyroX?: FloatFilter<"ImuReading"> | number
    gyroY?: FloatFilter<"ImuReading"> | number
    gyroZ?: FloatFilter<"ImuReading"> | number
    roll?: FloatFilter<"ImuReading"> | number
    pitch?: FloatFilter<"ImuReading"> | number
    dRoll?: FloatFilter<"ImuReading"> | number
    dPitch?: FloatFilter<"ImuReading"> | number
    vibCount?: IntFilter<"ImuReading"> | number
    state?: StringFilter<"ImuReading"> | string
  }, "id">

  export type ImuReadingOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    accX?: SortOrder
    accY?: SortOrder
    accZ?: SortOrder
    gyroX?: SortOrder
    gyroY?: SortOrder
    gyroZ?: SortOrder
    roll?: SortOrder
    pitch?: SortOrder
    dRoll?: SortOrder
    dPitch?: SortOrder
    vibCount?: SortOrder
    state?: SortOrder
    _count?: ImuReadingCountOrderByAggregateInput
    _avg?: ImuReadingAvgOrderByAggregateInput
    _max?: ImuReadingMaxOrderByAggregateInput
    _min?: ImuReadingMinOrderByAggregateInput
    _sum?: ImuReadingSumOrderByAggregateInput
  }

  export type ImuReadingScalarWhereWithAggregatesInput = {
    AND?: ImuReadingScalarWhereWithAggregatesInput | ImuReadingScalarWhereWithAggregatesInput[]
    OR?: ImuReadingScalarWhereWithAggregatesInput[]
    NOT?: ImuReadingScalarWhereWithAggregatesInput | ImuReadingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ImuReading"> | number
    timestamp?: DateTimeWithAggregatesFilter<"ImuReading"> | Date | string
    accX?: FloatWithAggregatesFilter<"ImuReading"> | number
    accY?: FloatWithAggregatesFilter<"ImuReading"> | number
    accZ?: FloatWithAggregatesFilter<"ImuReading"> | number
    gyroX?: FloatWithAggregatesFilter<"ImuReading"> | number
    gyroY?: FloatWithAggregatesFilter<"ImuReading"> | number
    gyroZ?: FloatWithAggregatesFilter<"ImuReading"> | number
    roll?: FloatWithAggregatesFilter<"ImuReading"> | number
    pitch?: FloatWithAggregatesFilter<"ImuReading"> | number
    dRoll?: FloatWithAggregatesFilter<"ImuReading"> | number
    dPitch?: FloatWithAggregatesFilter<"ImuReading"> | number
    vibCount?: IntWithAggregatesFilter<"ImuReading"> | number
    state?: StringWithAggregatesFilter<"ImuReading"> | string
  }

  export type GasMeasureWhereInput = {
    AND?: GasMeasureWhereInput | GasMeasureWhereInput[]
    OR?: GasMeasureWhereInput[]
    NOT?: GasMeasureWhereInput | GasMeasureWhereInput[]
    id?: IntFilter<"GasMeasure"> | number
    sensorName?: StringFilter<"GasMeasure"> | string
    gasType?: StringFilter<"GasMeasure"> | string
    gasValue?: FloatFilter<"GasMeasure"> | number
    humidity?: FloatNullableFilter<"GasMeasure"> | number | null
    temperature?: FloatNullableFilter<"GasMeasure"> | number | null
    dangerLevel?: IntFilter<"GasMeasure"> | number
    createdAt?: DateTimeNullableFilter<"GasMeasure"> | Date | string | null
  }

  export type GasMeasureOrderByWithRelationInput = {
    id?: SortOrder
    sensorName?: SortOrder
    gasType?: SortOrder
    gasValue?: SortOrder
    humidity?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    dangerLevel?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    _relevance?: GasMeasureOrderByRelevanceInput
  }

  export type GasMeasureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GasMeasureWhereInput | GasMeasureWhereInput[]
    OR?: GasMeasureWhereInput[]
    NOT?: GasMeasureWhereInput | GasMeasureWhereInput[]
    sensorName?: StringFilter<"GasMeasure"> | string
    gasType?: StringFilter<"GasMeasure"> | string
    gasValue?: FloatFilter<"GasMeasure"> | number
    humidity?: FloatNullableFilter<"GasMeasure"> | number | null
    temperature?: FloatNullableFilter<"GasMeasure"> | number | null
    dangerLevel?: IntFilter<"GasMeasure"> | number
    createdAt?: DateTimeNullableFilter<"GasMeasure"> | Date | string | null
  }, "id">

  export type GasMeasureOrderByWithAggregationInput = {
    id?: SortOrder
    sensorName?: SortOrder
    gasType?: SortOrder
    gasValue?: SortOrder
    humidity?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    dangerLevel?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: GasMeasureCountOrderByAggregateInput
    _avg?: GasMeasureAvgOrderByAggregateInput
    _max?: GasMeasureMaxOrderByAggregateInput
    _min?: GasMeasureMinOrderByAggregateInput
    _sum?: GasMeasureSumOrderByAggregateInput
  }

  export type GasMeasureScalarWhereWithAggregatesInput = {
    AND?: GasMeasureScalarWhereWithAggregatesInput | GasMeasureScalarWhereWithAggregatesInput[]
    OR?: GasMeasureScalarWhereWithAggregatesInput[]
    NOT?: GasMeasureScalarWhereWithAggregatesInput | GasMeasureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GasMeasure"> | number
    sensorName?: StringWithAggregatesFilter<"GasMeasure"> | string
    gasType?: StringWithAggregatesFilter<"GasMeasure"> | string
    gasValue?: FloatWithAggregatesFilter<"GasMeasure"> | number
    humidity?: FloatNullableWithAggregatesFilter<"GasMeasure"> | number | null
    temperature?: FloatNullableWithAggregatesFilter<"GasMeasure"> | number | null
    dangerLevel?: IntWithAggregatesFilter<"GasMeasure"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"GasMeasure"> | Date | string | null
  }

  export type CapteurReculHistoryWhereInput = {
    AND?: CapteurReculHistoryWhereInput | CapteurReculHistoryWhereInput[]
    OR?: CapteurReculHistoryWhereInput[]
    NOT?: CapteurReculHistoryWhereInput | CapteurReculHistoryWhereInput[]
    id?: IntFilter<"CapteurReculHistory"> | number
    valeurBrute?: IntFilter<"CapteurReculHistory"> | number
    distanceCm?: StringFilter<"CapteurReculHistory"> | string
    statut?: StringFilter<"CapteurReculHistory"> | string
    dateEvenement?: DateTimeNullableFilter<"CapteurReculHistory"> | Date | string | null
  }

  export type CapteurReculHistoryOrderByWithRelationInput = {
    id?: SortOrder
    valeurBrute?: SortOrder
    distanceCm?: SortOrder
    statut?: SortOrder
    dateEvenement?: SortOrderInput | SortOrder
    _relevance?: CapteurReculHistoryOrderByRelevanceInput
  }

  export type CapteurReculHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CapteurReculHistoryWhereInput | CapteurReculHistoryWhereInput[]
    OR?: CapteurReculHistoryWhereInput[]
    NOT?: CapteurReculHistoryWhereInput | CapteurReculHistoryWhereInput[]
    valeurBrute?: IntFilter<"CapteurReculHistory"> | number
    distanceCm?: StringFilter<"CapteurReculHistory"> | string
    statut?: StringFilter<"CapteurReculHistory"> | string
    dateEvenement?: DateTimeNullableFilter<"CapteurReculHistory"> | Date | string | null
  }, "id">

  export type CapteurReculHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    valeurBrute?: SortOrder
    distanceCm?: SortOrder
    statut?: SortOrder
    dateEvenement?: SortOrderInput | SortOrder
    _count?: CapteurReculHistoryCountOrderByAggregateInput
    _avg?: CapteurReculHistoryAvgOrderByAggregateInput
    _max?: CapteurReculHistoryMaxOrderByAggregateInput
    _min?: CapteurReculHistoryMinOrderByAggregateInput
    _sum?: CapteurReculHistorySumOrderByAggregateInput
  }

  export type CapteurReculHistoryScalarWhereWithAggregatesInput = {
    AND?: CapteurReculHistoryScalarWhereWithAggregatesInput | CapteurReculHistoryScalarWhereWithAggregatesInput[]
    OR?: CapteurReculHistoryScalarWhereWithAggregatesInput[]
    NOT?: CapteurReculHistoryScalarWhereWithAggregatesInput | CapteurReculHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CapteurReculHistory"> | number
    valeurBrute?: IntWithAggregatesFilter<"CapteurReculHistory"> | number
    distanceCm?: StringWithAggregatesFilter<"CapteurReculHistory"> | string
    statut?: StringWithAggregatesFilter<"CapteurReculHistory"> | string
    dateEvenement?: DateTimeNullableWithAggregatesFilter<"CapteurReculHistory"> | Date | string | null
  }

  export type MesureCapteurWhereInput = {
    AND?: MesureCapteurWhereInput | MesureCapteurWhereInput[]
    OR?: MesureCapteurWhereInput[]
    NOT?: MesureCapteurWhereInput | MesureCapteurWhereInput[]
    id?: IntFilter<"MesureCapteur"> | number
    dateEnregistrement?: DateTimeNullableFilter<"MesureCapteur"> | Date | string | null
    distanceCm?: FloatNullableFilter<"MesureCapteur"> | number | null
    humiditePourcent?: FloatNullableFilter<"MesureCapteur"> | number | null
    latitude?: FloatNullableFilter<"MesureCapteur"> | number | null
    longitude?: FloatNullableFilter<"MesureCapteur"> | number | null
    altitude?: FloatNullableFilter<"MesureCapteur"> | number | null
  }

  export type MesureCapteurOrderByWithRelationInput = {
    id?: SortOrder
    dateEnregistrement?: SortOrderInput | SortOrder
    distanceCm?: SortOrderInput | SortOrder
    humiditePourcent?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    altitude?: SortOrderInput | SortOrder
  }

  export type MesureCapteurWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MesureCapteurWhereInput | MesureCapteurWhereInput[]
    OR?: MesureCapteurWhereInput[]
    NOT?: MesureCapteurWhereInput | MesureCapteurWhereInput[]
    dateEnregistrement?: DateTimeNullableFilter<"MesureCapteur"> | Date | string | null
    distanceCm?: FloatNullableFilter<"MesureCapteur"> | number | null
    humiditePourcent?: FloatNullableFilter<"MesureCapteur"> | number | null
    latitude?: FloatNullableFilter<"MesureCapteur"> | number | null
    longitude?: FloatNullableFilter<"MesureCapteur"> | number | null
    altitude?: FloatNullableFilter<"MesureCapteur"> | number | null
  }, "id">

  export type MesureCapteurOrderByWithAggregationInput = {
    id?: SortOrder
    dateEnregistrement?: SortOrderInput | SortOrder
    distanceCm?: SortOrderInput | SortOrder
    humiditePourcent?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    altitude?: SortOrderInput | SortOrder
    _count?: MesureCapteurCountOrderByAggregateInput
    _avg?: MesureCapteurAvgOrderByAggregateInput
    _max?: MesureCapteurMaxOrderByAggregateInput
    _min?: MesureCapteurMinOrderByAggregateInput
    _sum?: MesureCapteurSumOrderByAggregateInput
  }

  export type MesureCapteurScalarWhereWithAggregatesInput = {
    AND?: MesureCapteurScalarWhereWithAggregatesInput | MesureCapteurScalarWhereWithAggregatesInput[]
    OR?: MesureCapteurScalarWhereWithAggregatesInput[]
    NOT?: MesureCapteurScalarWhereWithAggregatesInput | MesureCapteurScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MesureCapteur"> | number
    dateEnregistrement?: DateTimeNullableWithAggregatesFilter<"MesureCapteur"> | Date | string | null
    distanceCm?: FloatNullableWithAggregatesFilter<"MesureCapteur"> | number | null
    humiditePourcent?: FloatNullableWithAggregatesFilter<"MesureCapteur"> | number | null
    latitude?: FloatNullableWithAggregatesFilter<"MesureCapteur"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"MesureCapteur"> | number | null
    altitude?: FloatNullableWithAggregatesFilter<"MesureCapteur"> | number | null
  }

  export type G7E_AudioFileCreateInput = {
    filename?: string | null
    minioBucket?: string | null
    minioPath?: string | null
    fileSize?: number | null
    duration?: number | null
    uploadedAt?: Date | string
  }

  export type G7E_AudioFileUncheckedCreateInput = {
    id?: number
    filename?: string | null
    minioBucket?: string | null
    minioPath?: string | null
    fileSize?: number | null
    duration?: number | null
    uploadedAt?: Date | string
  }

  export type G7E_AudioFileUpdateInput = {
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    minioBucket?: NullableStringFieldUpdateOperationsInput | string | null
    minioPath?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type G7E_AudioFileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    minioBucket?: NullableStringFieldUpdateOperationsInput | string | null
    minioPath?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type G7E_AudioFileCreateManyInput = {
    id?: number
    filename?: string | null
    minioBucket?: string | null
    minioPath?: string | null
    fileSize?: number | null
    duration?: number | null
    uploadedAt?: Date | string
  }

  export type G7E_AudioFileUpdateManyMutationInput = {
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    minioBucket?: NullableStringFieldUpdateOperationsInput | string | null
    minioPath?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type G7E_AudioFileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    minioBucket?: NullableStringFieldUpdateOperationsInput | string | null
    minioPath?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImuReadingCreateInput = {
    timestamp: Date | string
    accX: number
    accY: number
    accZ: number
    gyroX: number
    gyroY: number
    gyroZ: number
    roll: number
    pitch: number
    dRoll: number
    dPitch: number
    vibCount?: number
    state?: string
  }

  export type ImuReadingUncheckedCreateInput = {
    id?: number
    timestamp: Date | string
    accX: number
    accY: number
    accZ: number
    gyroX: number
    gyroY: number
    gyroZ: number
    roll: number
    pitch: number
    dRoll: number
    dPitch: number
    vibCount?: number
    state?: string
  }

  export type ImuReadingUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    accX?: FloatFieldUpdateOperationsInput | number
    accY?: FloatFieldUpdateOperationsInput | number
    accZ?: FloatFieldUpdateOperationsInput | number
    gyroX?: FloatFieldUpdateOperationsInput | number
    gyroY?: FloatFieldUpdateOperationsInput | number
    gyroZ?: FloatFieldUpdateOperationsInput | number
    roll?: FloatFieldUpdateOperationsInput | number
    pitch?: FloatFieldUpdateOperationsInput | number
    dRoll?: FloatFieldUpdateOperationsInput | number
    dPitch?: FloatFieldUpdateOperationsInput | number
    vibCount?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
  }

  export type ImuReadingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    accX?: FloatFieldUpdateOperationsInput | number
    accY?: FloatFieldUpdateOperationsInput | number
    accZ?: FloatFieldUpdateOperationsInput | number
    gyroX?: FloatFieldUpdateOperationsInput | number
    gyroY?: FloatFieldUpdateOperationsInput | number
    gyroZ?: FloatFieldUpdateOperationsInput | number
    roll?: FloatFieldUpdateOperationsInput | number
    pitch?: FloatFieldUpdateOperationsInput | number
    dRoll?: FloatFieldUpdateOperationsInput | number
    dPitch?: FloatFieldUpdateOperationsInput | number
    vibCount?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
  }

  export type ImuReadingCreateManyInput = {
    id?: number
    timestamp: Date | string
    accX: number
    accY: number
    accZ: number
    gyroX: number
    gyroY: number
    gyroZ: number
    roll: number
    pitch: number
    dRoll: number
    dPitch: number
    vibCount?: number
    state?: string
  }

  export type ImuReadingUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    accX?: FloatFieldUpdateOperationsInput | number
    accY?: FloatFieldUpdateOperationsInput | number
    accZ?: FloatFieldUpdateOperationsInput | number
    gyroX?: FloatFieldUpdateOperationsInput | number
    gyroY?: FloatFieldUpdateOperationsInput | number
    gyroZ?: FloatFieldUpdateOperationsInput | number
    roll?: FloatFieldUpdateOperationsInput | number
    pitch?: FloatFieldUpdateOperationsInput | number
    dRoll?: FloatFieldUpdateOperationsInput | number
    dPitch?: FloatFieldUpdateOperationsInput | number
    vibCount?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
  }

  export type ImuReadingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    accX?: FloatFieldUpdateOperationsInput | number
    accY?: FloatFieldUpdateOperationsInput | number
    accZ?: FloatFieldUpdateOperationsInput | number
    gyroX?: FloatFieldUpdateOperationsInput | number
    gyroY?: FloatFieldUpdateOperationsInput | number
    gyroZ?: FloatFieldUpdateOperationsInput | number
    roll?: FloatFieldUpdateOperationsInput | number
    pitch?: FloatFieldUpdateOperationsInput | number
    dRoll?: FloatFieldUpdateOperationsInput | number
    dPitch?: FloatFieldUpdateOperationsInput | number
    vibCount?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
  }

  export type GasMeasureCreateInput = {
    sensorName: string
    gasType: string
    gasValue: number
    humidity?: number | null
    temperature?: number | null
    dangerLevel: number
    createdAt?: Date | string | null
  }

  export type GasMeasureUncheckedCreateInput = {
    id?: number
    sensorName: string
    gasType: string
    gasValue: number
    humidity?: number | null
    temperature?: number | null
    dangerLevel: number
    createdAt?: Date | string | null
  }

  export type GasMeasureUpdateInput = {
    sensorName?: StringFieldUpdateOperationsInput | string
    gasType?: StringFieldUpdateOperationsInput | string
    gasValue?: FloatFieldUpdateOperationsInput | number
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    dangerLevel?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GasMeasureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sensorName?: StringFieldUpdateOperationsInput | string
    gasType?: StringFieldUpdateOperationsInput | string
    gasValue?: FloatFieldUpdateOperationsInput | number
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    dangerLevel?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GasMeasureCreateManyInput = {
    id?: number
    sensorName: string
    gasType: string
    gasValue: number
    humidity?: number | null
    temperature?: number | null
    dangerLevel: number
    createdAt?: Date | string | null
  }

  export type GasMeasureUpdateManyMutationInput = {
    sensorName?: StringFieldUpdateOperationsInput | string
    gasType?: StringFieldUpdateOperationsInput | string
    gasValue?: FloatFieldUpdateOperationsInput | number
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    dangerLevel?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GasMeasureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sensorName?: StringFieldUpdateOperationsInput | string
    gasType?: StringFieldUpdateOperationsInput | string
    gasValue?: FloatFieldUpdateOperationsInput | number
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    dangerLevel?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CapteurReculHistoryCreateInput = {
    valeurBrute: number
    distanceCm: string
    statut: string
    dateEvenement?: Date | string | null
  }

  export type CapteurReculHistoryUncheckedCreateInput = {
    id?: number
    valeurBrute: number
    distanceCm: string
    statut: string
    dateEvenement?: Date | string | null
  }

  export type CapteurReculHistoryUpdateInput = {
    valeurBrute?: IntFieldUpdateOperationsInput | number
    distanceCm?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    dateEvenement?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CapteurReculHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    valeurBrute?: IntFieldUpdateOperationsInput | number
    distanceCm?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    dateEvenement?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CapteurReculHistoryCreateManyInput = {
    id?: number
    valeurBrute: number
    distanceCm: string
    statut: string
    dateEvenement?: Date | string | null
  }

  export type CapteurReculHistoryUpdateManyMutationInput = {
    valeurBrute?: IntFieldUpdateOperationsInput | number
    distanceCm?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    dateEvenement?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CapteurReculHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    valeurBrute?: IntFieldUpdateOperationsInput | number
    distanceCm?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    dateEvenement?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MesureCapteurCreateInput = {
    dateEnregistrement?: Date | string | null
    distanceCm?: number | null
    humiditePourcent?: number | null
    latitude?: number | null
    longitude?: number | null
    altitude?: number | null
  }

  export type MesureCapteurUncheckedCreateInput = {
    id?: number
    dateEnregistrement?: Date | string | null
    distanceCm?: number | null
    humiditePourcent?: number | null
    latitude?: number | null
    longitude?: number | null
    altitude?: number | null
  }

  export type MesureCapteurUpdateInput = {
    dateEnregistrement?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distanceCm?: NullableFloatFieldUpdateOperationsInput | number | null
    humiditePourcent?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MesureCapteurUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateEnregistrement?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distanceCm?: NullableFloatFieldUpdateOperationsInput | number | null
    humiditePourcent?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MesureCapteurCreateManyInput = {
    id?: number
    dateEnregistrement?: Date | string | null
    distanceCm?: number | null
    humiditePourcent?: number | null
    latitude?: number | null
    longitude?: number | null
    altitude?: number | null
  }

  export type MesureCapteurUpdateManyMutationInput = {
    dateEnregistrement?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distanceCm?: NullableFloatFieldUpdateOperationsInput | number | null
    humiditePourcent?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MesureCapteurUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateEnregistrement?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distanceCm?: NullableFloatFieldUpdateOperationsInput | number | null
    humiditePourcent?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type G7E_AudioFileOrderByRelevanceInput = {
    fields: G7E_AudioFileOrderByRelevanceFieldEnum | G7E_AudioFileOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type G7E_AudioFileCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    minioBucket?: SortOrder
    minioPath?: SortOrder
    fileSize?: SortOrder
    duration?: SortOrder
    uploadedAt?: SortOrder
  }

  export type G7E_AudioFileAvgOrderByAggregateInput = {
    id?: SortOrder
    fileSize?: SortOrder
    duration?: SortOrder
  }

  export type G7E_AudioFileMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    minioBucket?: SortOrder
    minioPath?: SortOrder
    fileSize?: SortOrder
    duration?: SortOrder
    uploadedAt?: SortOrder
  }

  export type G7E_AudioFileMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    minioBucket?: SortOrder
    minioPath?: SortOrder
    fileSize?: SortOrder
    duration?: SortOrder
    uploadedAt?: SortOrder
  }

  export type G7E_AudioFileSumOrderByAggregateInput = {
    id?: SortOrder
    fileSize?: SortOrder
    duration?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ImuReadingOrderByRelevanceInput = {
    fields: ImuReadingOrderByRelevanceFieldEnum | ImuReadingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ImuReadingCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    accX?: SortOrder
    accY?: SortOrder
    accZ?: SortOrder
    gyroX?: SortOrder
    gyroY?: SortOrder
    gyroZ?: SortOrder
    roll?: SortOrder
    pitch?: SortOrder
    dRoll?: SortOrder
    dPitch?: SortOrder
    vibCount?: SortOrder
    state?: SortOrder
  }

  export type ImuReadingAvgOrderByAggregateInput = {
    id?: SortOrder
    accX?: SortOrder
    accY?: SortOrder
    accZ?: SortOrder
    gyroX?: SortOrder
    gyroY?: SortOrder
    gyroZ?: SortOrder
    roll?: SortOrder
    pitch?: SortOrder
    dRoll?: SortOrder
    dPitch?: SortOrder
    vibCount?: SortOrder
  }

  export type ImuReadingMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    accX?: SortOrder
    accY?: SortOrder
    accZ?: SortOrder
    gyroX?: SortOrder
    gyroY?: SortOrder
    gyroZ?: SortOrder
    roll?: SortOrder
    pitch?: SortOrder
    dRoll?: SortOrder
    dPitch?: SortOrder
    vibCount?: SortOrder
    state?: SortOrder
  }

  export type ImuReadingMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    accX?: SortOrder
    accY?: SortOrder
    accZ?: SortOrder
    gyroX?: SortOrder
    gyroY?: SortOrder
    gyroZ?: SortOrder
    roll?: SortOrder
    pitch?: SortOrder
    dRoll?: SortOrder
    dPitch?: SortOrder
    vibCount?: SortOrder
    state?: SortOrder
  }

  export type ImuReadingSumOrderByAggregateInput = {
    id?: SortOrder
    accX?: SortOrder
    accY?: SortOrder
    accZ?: SortOrder
    gyroX?: SortOrder
    gyroY?: SortOrder
    gyroZ?: SortOrder
    roll?: SortOrder
    pitch?: SortOrder
    dRoll?: SortOrder
    dPitch?: SortOrder
    vibCount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type GasMeasureOrderByRelevanceInput = {
    fields: GasMeasureOrderByRelevanceFieldEnum | GasMeasureOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GasMeasureCountOrderByAggregateInput = {
    id?: SortOrder
    sensorName?: SortOrder
    gasType?: SortOrder
    gasValue?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
    dangerLevel?: SortOrder
    createdAt?: SortOrder
  }

  export type GasMeasureAvgOrderByAggregateInput = {
    id?: SortOrder
    gasValue?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
    dangerLevel?: SortOrder
  }

  export type GasMeasureMaxOrderByAggregateInput = {
    id?: SortOrder
    sensorName?: SortOrder
    gasType?: SortOrder
    gasValue?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
    dangerLevel?: SortOrder
    createdAt?: SortOrder
  }

  export type GasMeasureMinOrderByAggregateInput = {
    id?: SortOrder
    sensorName?: SortOrder
    gasType?: SortOrder
    gasValue?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
    dangerLevel?: SortOrder
    createdAt?: SortOrder
  }

  export type GasMeasureSumOrderByAggregateInput = {
    id?: SortOrder
    gasValue?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
    dangerLevel?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CapteurReculHistoryOrderByRelevanceInput = {
    fields: CapteurReculHistoryOrderByRelevanceFieldEnum | CapteurReculHistoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CapteurReculHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    valeurBrute?: SortOrder
    distanceCm?: SortOrder
    statut?: SortOrder
    dateEvenement?: SortOrder
  }

  export type CapteurReculHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    valeurBrute?: SortOrder
  }

  export type CapteurReculHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    valeurBrute?: SortOrder
    distanceCm?: SortOrder
    statut?: SortOrder
    dateEvenement?: SortOrder
  }

  export type CapteurReculHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    valeurBrute?: SortOrder
    distanceCm?: SortOrder
    statut?: SortOrder
    dateEvenement?: SortOrder
  }

  export type CapteurReculHistorySumOrderByAggregateInput = {
    id?: SortOrder
    valeurBrute?: SortOrder
  }

  export type MesureCapteurCountOrderByAggregateInput = {
    id?: SortOrder
    dateEnregistrement?: SortOrder
    distanceCm?: SortOrder
    humiditePourcent?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
  }

  export type MesureCapteurAvgOrderByAggregateInput = {
    id?: SortOrder
    distanceCm?: SortOrder
    humiditePourcent?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
  }

  export type MesureCapteurMaxOrderByAggregateInput = {
    id?: SortOrder
    dateEnregistrement?: SortOrder
    distanceCm?: SortOrder
    humiditePourcent?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
  }

  export type MesureCapteurMinOrderByAggregateInput = {
    id?: SortOrder
    dateEnregistrement?: SortOrder
    distanceCm?: SortOrder
    humiditePourcent?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
  }

  export type MesureCapteurSumOrderByAggregateInput = {
    id?: SortOrder
    distanceCm?: SortOrder
    humiditePourcent?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}