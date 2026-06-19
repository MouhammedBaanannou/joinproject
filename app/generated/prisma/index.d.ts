
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
 * Model G7E_User
 * 
 */
export type G7E_User = $Result.DefaultSelection<Prisma.$G7E_UserPayload>
/**
 * Model G7E_AudioFile
 * 
 */
export type G7E_AudioFile = $Result.DefaultSelection<Prisma.$G7E_AudioFilePayload>
/**
 * Model G7E_Account
 * 
 */
export type G7E_Account = $Result.DefaultSelection<Prisma.$G7E_AccountPayload>
/**
 * Model G7E_Session
 * 
 */
export type G7E_Session = $Result.DefaultSelection<Prisma.$G7E_SessionPayload>
/**
 * Model G7E_VerificationToken
 * 
 */
export type G7E_VerificationToken = $Result.DefaultSelection<Prisma.$G7E_VerificationTokenPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more G7E_Users
 * const g7E_Users = await prisma.g7E_User.findMany()
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
   * // Fetch zero or more G7E_Users
   * const g7E_Users = await prisma.g7E_User.findMany()
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
   * `prisma.g7E_User`: Exposes CRUD operations for the **G7E_User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more G7E_Users
    * const g7E_Users = await prisma.g7E_User.findMany()
    * ```
    */
  get g7E_User(): Prisma.G7E_UserDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.g7E_Account`: Exposes CRUD operations for the **G7E_Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more G7E_Accounts
    * const g7E_Accounts = await prisma.g7E_Account.findMany()
    * ```
    */
  get g7E_Account(): Prisma.G7E_AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.g7E_Session`: Exposes CRUD operations for the **G7E_Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more G7E_Sessions
    * const g7E_Sessions = await prisma.g7E_Session.findMany()
    * ```
    */
  get g7E_Session(): Prisma.G7E_SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.g7E_VerificationToken`: Exposes CRUD operations for the **G7E_VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more G7E_VerificationTokens
    * const g7E_VerificationTokens = await prisma.g7E_VerificationToken.findMany()
    * ```
    */
  get g7E_VerificationToken(): Prisma.G7E_VerificationTokenDelegate<ExtArgs, ClientOptions>;
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
    G7E_User: 'G7E_User',
    G7E_AudioFile: 'G7E_AudioFile',
    G7E_Account: 'G7E_Account',
    G7E_Session: 'G7E_Session',
    G7E_VerificationToken: 'G7E_VerificationToken'
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
      modelProps: "g7E_User" | "g7E_AudioFile" | "g7E_Account" | "g7E_Session" | "g7E_VerificationToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      G7E_User: {
        payload: Prisma.$G7E_UserPayload<ExtArgs>
        fields: Prisma.G7E_UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.G7E_UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.G7E_UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_UserPayload>
          }
          findFirst: {
            args: Prisma.G7E_UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.G7E_UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_UserPayload>
          }
          findMany: {
            args: Prisma.G7E_UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_UserPayload>[]
          }
          create: {
            args: Prisma.G7E_UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_UserPayload>
          }
          createMany: {
            args: Prisma.G7E_UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.G7E_UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_UserPayload>
          }
          update: {
            args: Prisma.G7E_UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_UserPayload>
          }
          deleteMany: {
            args: Prisma.G7E_UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.G7E_UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.G7E_UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_UserPayload>
          }
          aggregate: {
            args: Prisma.G7E_UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateG7E_User>
          }
          groupBy: {
            args: Prisma.G7E_UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<G7E_UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.G7E_UserCountArgs<ExtArgs>
            result: $Utils.Optional<G7E_UserCountAggregateOutputType> | number
          }
        }
      }
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
      G7E_Account: {
        payload: Prisma.$G7E_AccountPayload<ExtArgs>
        fields: Prisma.G7E_AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.G7E_AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.G7E_AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_AccountPayload>
          }
          findFirst: {
            args: Prisma.G7E_AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.G7E_AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_AccountPayload>
          }
          findMany: {
            args: Prisma.G7E_AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_AccountPayload>[]
          }
          create: {
            args: Prisma.G7E_AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_AccountPayload>
          }
          createMany: {
            args: Prisma.G7E_AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.G7E_AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_AccountPayload>
          }
          update: {
            args: Prisma.G7E_AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_AccountPayload>
          }
          deleteMany: {
            args: Prisma.G7E_AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.G7E_AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.G7E_AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_AccountPayload>
          }
          aggregate: {
            args: Prisma.G7E_AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateG7E_Account>
          }
          groupBy: {
            args: Prisma.G7E_AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<G7E_AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.G7E_AccountCountArgs<ExtArgs>
            result: $Utils.Optional<G7E_AccountCountAggregateOutputType> | number
          }
        }
      }
      G7E_Session: {
        payload: Prisma.$G7E_SessionPayload<ExtArgs>
        fields: Prisma.G7E_SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.G7E_SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.G7E_SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_SessionPayload>
          }
          findFirst: {
            args: Prisma.G7E_SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.G7E_SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_SessionPayload>
          }
          findMany: {
            args: Prisma.G7E_SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_SessionPayload>[]
          }
          create: {
            args: Prisma.G7E_SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_SessionPayload>
          }
          createMany: {
            args: Prisma.G7E_SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.G7E_SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_SessionPayload>
          }
          update: {
            args: Prisma.G7E_SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_SessionPayload>
          }
          deleteMany: {
            args: Prisma.G7E_SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.G7E_SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.G7E_SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_SessionPayload>
          }
          aggregate: {
            args: Prisma.G7E_SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateG7E_Session>
          }
          groupBy: {
            args: Prisma.G7E_SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<G7E_SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.G7E_SessionCountArgs<ExtArgs>
            result: $Utils.Optional<G7E_SessionCountAggregateOutputType> | number
          }
        }
      }
      G7E_VerificationToken: {
        payload: Prisma.$G7E_VerificationTokenPayload<ExtArgs>
        fields: Prisma.G7E_VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.G7E_VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.G7E_VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.G7E_VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.G7E_VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.G7E_VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.G7E_VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.G7E_VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.G7E_VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_VerificationTokenPayload>
          }
          update: {
            args: Prisma.G7E_VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.G7E_VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.G7E_VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.G7E_VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$G7E_VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.G7E_VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateG7E_VerificationToken>
          }
          groupBy: {
            args: Prisma.G7E_VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<G7E_VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.G7E_VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<G7E_VerificationTokenCountAggregateOutputType> | number
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
    g7E_User?: G7E_UserOmit
    g7E_AudioFile?: G7E_AudioFileOmit
    g7E_Account?: G7E_AccountOmit
    g7E_Session?: G7E_SessionOmit
    g7E_VerificationToken?: G7E_VerificationTokenOmit
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
   * Count Type G7E_UserCountOutputType
   */

  export type G7E_UserCountOutputType = {
    sessions: number
    accounts: number
  }

  export type G7E_UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | G7E_UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | G7E_UserCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * G7E_UserCountOutputType without action
   */
  export type G7E_UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_UserCountOutputType
     */
    select?: G7E_UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * G7E_UserCountOutputType without action
   */
  export type G7E_UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: G7E_SessionWhereInput
  }

  /**
   * G7E_UserCountOutputType without action
   */
  export type G7E_UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: G7E_AccountWhereInput
  }


  /**
   * Models
   */

  /**
   * Model G7E_User
   */

  export type AggregateG7E_User = {
    _count: G7E_UserCountAggregateOutputType | null
    _min: G7E_UserMinAggregateOutputType | null
    _max: G7E_UserMaxAggregateOutputType | null
  }

  export type G7E_UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    username: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type G7E_UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    username: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type G7E_UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    password: number
    username: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type G7E_UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    username?: true
    createdAt?: true
    updatedAt?: true
  }

  export type G7E_UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    username?: true
    createdAt?: true
    updatedAt?: true
  }

  export type G7E_UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    username?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type G7E_UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which G7E_User to aggregate.
     */
    where?: G7E_UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of G7E_Users to fetch.
     */
    orderBy?: G7E_UserOrderByWithRelationInput | G7E_UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: G7E_UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` G7E_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` G7E_Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned G7E_Users
    **/
    _count?: true | G7E_UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: G7E_UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: G7E_UserMaxAggregateInputType
  }

  export type GetG7E_UserAggregateType<T extends G7E_UserAggregateArgs> = {
        [P in keyof T & keyof AggregateG7E_User]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateG7E_User[P]>
      : GetScalarType<T[P], AggregateG7E_User[P]>
  }




  export type G7E_UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: G7E_UserWhereInput
    orderBy?: G7E_UserOrderByWithAggregationInput | G7E_UserOrderByWithAggregationInput[]
    by: G7E_UserScalarFieldEnum[] | G7E_UserScalarFieldEnum
    having?: G7E_UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: G7E_UserCountAggregateInputType | true
    _min?: G7E_UserMinAggregateInputType
    _max?: G7E_UserMaxAggregateInputType
  }

  export type G7E_UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    username: string | null
    createdAt: Date
    updatedAt: Date
    _count: G7E_UserCountAggregateOutputType | null
    _min: G7E_UserMinAggregateOutputType | null
    _max: G7E_UserMaxAggregateOutputType | null
  }

  type GetG7E_UserGroupByPayload<T extends G7E_UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<G7E_UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof G7E_UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], G7E_UserGroupByOutputType[P]>
            : GetScalarType<T[P], G7E_UserGroupByOutputType[P]>
        }
      >
    >


  export type G7E_UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    username?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | G7E_User$sessionsArgs<ExtArgs>
    accounts?: boolean | G7E_User$accountsArgs<ExtArgs>
    _count?: boolean | G7E_UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["g7E_User"]>



  export type G7E_UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    username?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type G7E_UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "password" | "username" | "createdAt" | "updatedAt", ExtArgs["result"]["g7E_User"]>
  export type G7E_UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | G7E_User$sessionsArgs<ExtArgs>
    accounts?: boolean | G7E_User$accountsArgs<ExtArgs>
    _count?: boolean | G7E_UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $G7E_UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "G7E_User"
    objects: {
      sessions: Prisma.$G7E_SessionPayload<ExtArgs>[]
      accounts: Prisma.$G7E_AccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      password: string | null
      username: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["g7E_User"]>
    composites: {}
  }

  type G7E_UserGetPayload<S extends boolean | null | undefined | G7E_UserDefaultArgs> = $Result.GetResult<Prisma.$G7E_UserPayload, S>

  type G7E_UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<G7E_UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: G7E_UserCountAggregateInputType | true
    }

  export interface G7E_UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['G7E_User'], meta: { name: 'G7E_User' } }
    /**
     * Find zero or one G7E_User that matches the filter.
     * @param {G7E_UserFindUniqueArgs} args - Arguments to find a G7E_User
     * @example
     * // Get one G7E_User
     * const g7E_User = await prisma.g7E_User.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends G7E_UserFindUniqueArgs>(args: SelectSubset<T, G7E_UserFindUniqueArgs<ExtArgs>>): Prisma__G7E_UserClient<$Result.GetResult<Prisma.$G7E_UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one G7E_User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {G7E_UserFindUniqueOrThrowArgs} args - Arguments to find a G7E_User
     * @example
     * // Get one G7E_User
     * const g7E_User = await prisma.g7E_User.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends G7E_UserFindUniqueOrThrowArgs>(args: SelectSubset<T, G7E_UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__G7E_UserClient<$Result.GetResult<Prisma.$G7E_UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first G7E_User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_UserFindFirstArgs} args - Arguments to find a G7E_User
     * @example
     * // Get one G7E_User
     * const g7E_User = await prisma.g7E_User.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends G7E_UserFindFirstArgs>(args?: SelectSubset<T, G7E_UserFindFirstArgs<ExtArgs>>): Prisma__G7E_UserClient<$Result.GetResult<Prisma.$G7E_UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first G7E_User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_UserFindFirstOrThrowArgs} args - Arguments to find a G7E_User
     * @example
     * // Get one G7E_User
     * const g7E_User = await prisma.g7E_User.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends G7E_UserFindFirstOrThrowArgs>(args?: SelectSubset<T, G7E_UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__G7E_UserClient<$Result.GetResult<Prisma.$G7E_UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more G7E_Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all G7E_Users
     * const g7E_Users = await prisma.g7E_User.findMany()
     * 
     * // Get first 10 G7E_Users
     * const g7E_Users = await prisma.g7E_User.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const g7E_UserWithIdOnly = await prisma.g7E_User.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends G7E_UserFindManyArgs>(args?: SelectSubset<T, G7E_UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$G7E_UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a G7E_User.
     * @param {G7E_UserCreateArgs} args - Arguments to create a G7E_User.
     * @example
     * // Create one G7E_User
     * const G7E_User = await prisma.g7E_User.create({
     *   data: {
     *     // ... data to create a G7E_User
     *   }
     * })
     * 
     */
    create<T extends G7E_UserCreateArgs>(args: SelectSubset<T, G7E_UserCreateArgs<ExtArgs>>): Prisma__G7E_UserClient<$Result.GetResult<Prisma.$G7E_UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many G7E_Users.
     * @param {G7E_UserCreateManyArgs} args - Arguments to create many G7E_Users.
     * @example
     * // Create many G7E_Users
     * const g7E_User = await prisma.g7E_User.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends G7E_UserCreateManyArgs>(args?: SelectSubset<T, G7E_UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a G7E_User.
     * @param {G7E_UserDeleteArgs} args - Arguments to delete one G7E_User.
     * @example
     * // Delete one G7E_User
     * const G7E_User = await prisma.g7E_User.delete({
     *   where: {
     *     // ... filter to delete one G7E_User
     *   }
     * })
     * 
     */
    delete<T extends G7E_UserDeleteArgs>(args: SelectSubset<T, G7E_UserDeleteArgs<ExtArgs>>): Prisma__G7E_UserClient<$Result.GetResult<Prisma.$G7E_UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one G7E_User.
     * @param {G7E_UserUpdateArgs} args - Arguments to update one G7E_User.
     * @example
     * // Update one G7E_User
     * const g7E_User = await prisma.g7E_User.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends G7E_UserUpdateArgs>(args: SelectSubset<T, G7E_UserUpdateArgs<ExtArgs>>): Prisma__G7E_UserClient<$Result.GetResult<Prisma.$G7E_UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more G7E_Users.
     * @param {G7E_UserDeleteManyArgs} args - Arguments to filter G7E_Users to delete.
     * @example
     * // Delete a few G7E_Users
     * const { count } = await prisma.g7E_User.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends G7E_UserDeleteManyArgs>(args?: SelectSubset<T, G7E_UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more G7E_Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many G7E_Users
     * const g7E_User = await prisma.g7E_User.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends G7E_UserUpdateManyArgs>(args: SelectSubset<T, G7E_UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one G7E_User.
     * @param {G7E_UserUpsertArgs} args - Arguments to update or create a G7E_User.
     * @example
     * // Update or create a G7E_User
     * const g7E_User = await prisma.g7E_User.upsert({
     *   create: {
     *     // ... data to create a G7E_User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the G7E_User we want to update
     *   }
     * })
     */
    upsert<T extends G7E_UserUpsertArgs>(args: SelectSubset<T, G7E_UserUpsertArgs<ExtArgs>>): Prisma__G7E_UserClient<$Result.GetResult<Prisma.$G7E_UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of G7E_Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_UserCountArgs} args - Arguments to filter G7E_Users to count.
     * @example
     * // Count the number of G7E_Users
     * const count = await prisma.g7E_User.count({
     *   where: {
     *     // ... the filter for the G7E_Users we want to count
     *   }
     * })
    **/
    count<T extends G7E_UserCountArgs>(
      args?: Subset<T, G7E_UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], G7E_UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a G7E_User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends G7E_UserAggregateArgs>(args: Subset<T, G7E_UserAggregateArgs>): Prisma.PrismaPromise<GetG7E_UserAggregateType<T>>

    /**
     * Group by G7E_User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_UserGroupByArgs} args - Group by arguments.
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
      T extends G7E_UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: G7E_UserGroupByArgs['orderBy'] }
        : { orderBy?: G7E_UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, G7E_UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetG7E_UserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the G7E_User model
   */
  readonly fields: G7E_UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for G7E_User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__G7E_UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends G7E_User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, G7E_User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$G7E_SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends G7E_User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, G7E_User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$G7E_AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the G7E_User model
   */
  interface G7E_UserFieldRefs {
    readonly id: FieldRef<"G7E_User", 'String'>
    readonly name: FieldRef<"G7E_User", 'String'>
    readonly email: FieldRef<"G7E_User", 'String'>
    readonly emailVerified: FieldRef<"G7E_User", 'DateTime'>
    readonly image: FieldRef<"G7E_User", 'String'>
    readonly password: FieldRef<"G7E_User", 'String'>
    readonly username: FieldRef<"G7E_User", 'String'>
    readonly createdAt: FieldRef<"G7E_User", 'DateTime'>
    readonly updatedAt: FieldRef<"G7E_User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * G7E_User findUnique
   */
  export type G7E_UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_User
     */
    select?: G7E_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_User
     */
    omit?: G7E_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_UserInclude<ExtArgs> | null
    /**
     * Filter, which G7E_User to fetch.
     */
    where: G7E_UserWhereUniqueInput
  }

  /**
   * G7E_User findUniqueOrThrow
   */
  export type G7E_UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_User
     */
    select?: G7E_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_User
     */
    omit?: G7E_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_UserInclude<ExtArgs> | null
    /**
     * Filter, which G7E_User to fetch.
     */
    where: G7E_UserWhereUniqueInput
  }

  /**
   * G7E_User findFirst
   */
  export type G7E_UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_User
     */
    select?: G7E_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_User
     */
    omit?: G7E_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_UserInclude<ExtArgs> | null
    /**
     * Filter, which G7E_User to fetch.
     */
    where?: G7E_UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of G7E_Users to fetch.
     */
    orderBy?: G7E_UserOrderByWithRelationInput | G7E_UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for G7E_Users.
     */
    cursor?: G7E_UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` G7E_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` G7E_Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of G7E_Users.
     */
    distinct?: G7E_UserScalarFieldEnum | G7E_UserScalarFieldEnum[]
  }

  /**
   * G7E_User findFirstOrThrow
   */
  export type G7E_UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_User
     */
    select?: G7E_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_User
     */
    omit?: G7E_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_UserInclude<ExtArgs> | null
    /**
     * Filter, which G7E_User to fetch.
     */
    where?: G7E_UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of G7E_Users to fetch.
     */
    orderBy?: G7E_UserOrderByWithRelationInput | G7E_UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for G7E_Users.
     */
    cursor?: G7E_UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` G7E_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` G7E_Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of G7E_Users.
     */
    distinct?: G7E_UserScalarFieldEnum | G7E_UserScalarFieldEnum[]
  }

  /**
   * G7E_User findMany
   */
  export type G7E_UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_User
     */
    select?: G7E_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_User
     */
    omit?: G7E_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_UserInclude<ExtArgs> | null
    /**
     * Filter, which G7E_Users to fetch.
     */
    where?: G7E_UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of G7E_Users to fetch.
     */
    orderBy?: G7E_UserOrderByWithRelationInput | G7E_UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing G7E_Users.
     */
    cursor?: G7E_UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` G7E_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` G7E_Users.
     */
    skip?: number
    distinct?: G7E_UserScalarFieldEnum | G7E_UserScalarFieldEnum[]
  }

  /**
   * G7E_User create
   */
  export type G7E_UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_User
     */
    select?: G7E_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_User
     */
    omit?: G7E_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_UserInclude<ExtArgs> | null
    /**
     * The data needed to create a G7E_User.
     */
    data: XOR<G7E_UserCreateInput, G7E_UserUncheckedCreateInput>
  }

  /**
   * G7E_User createMany
   */
  export type G7E_UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many G7E_Users.
     */
    data: G7E_UserCreateManyInput | G7E_UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * G7E_User update
   */
  export type G7E_UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_User
     */
    select?: G7E_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_User
     */
    omit?: G7E_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_UserInclude<ExtArgs> | null
    /**
     * The data needed to update a G7E_User.
     */
    data: XOR<G7E_UserUpdateInput, G7E_UserUncheckedUpdateInput>
    /**
     * Choose, which G7E_User to update.
     */
    where: G7E_UserWhereUniqueInput
  }

  /**
   * G7E_User updateMany
   */
  export type G7E_UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update G7E_Users.
     */
    data: XOR<G7E_UserUpdateManyMutationInput, G7E_UserUncheckedUpdateManyInput>
    /**
     * Filter which G7E_Users to update
     */
    where?: G7E_UserWhereInput
    /**
     * Limit how many G7E_Users to update.
     */
    limit?: number
  }

  /**
   * G7E_User upsert
   */
  export type G7E_UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_User
     */
    select?: G7E_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_User
     */
    omit?: G7E_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_UserInclude<ExtArgs> | null
    /**
     * The filter to search for the G7E_User to update in case it exists.
     */
    where: G7E_UserWhereUniqueInput
    /**
     * In case the G7E_User found by the `where` argument doesn't exist, create a new G7E_User with this data.
     */
    create: XOR<G7E_UserCreateInput, G7E_UserUncheckedCreateInput>
    /**
     * In case the G7E_User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<G7E_UserUpdateInput, G7E_UserUncheckedUpdateInput>
  }

  /**
   * G7E_User delete
   */
  export type G7E_UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_User
     */
    select?: G7E_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_User
     */
    omit?: G7E_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_UserInclude<ExtArgs> | null
    /**
     * Filter which G7E_User to delete.
     */
    where: G7E_UserWhereUniqueInput
  }

  /**
   * G7E_User deleteMany
   */
  export type G7E_UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which G7E_Users to delete
     */
    where?: G7E_UserWhereInput
    /**
     * Limit how many G7E_Users to delete.
     */
    limit?: number
  }

  /**
   * G7E_User.sessions
   */
  export type G7E_User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_Session
     */
    select?: G7E_SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_Session
     */
    omit?: G7E_SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_SessionInclude<ExtArgs> | null
    where?: G7E_SessionWhereInput
    orderBy?: G7E_SessionOrderByWithRelationInput | G7E_SessionOrderByWithRelationInput[]
    cursor?: G7E_SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: G7E_SessionScalarFieldEnum | G7E_SessionScalarFieldEnum[]
  }

  /**
   * G7E_User.accounts
   */
  export type G7E_User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_Account
     */
    select?: G7E_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_Account
     */
    omit?: G7E_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_AccountInclude<ExtArgs> | null
    where?: G7E_AccountWhereInput
    orderBy?: G7E_AccountOrderByWithRelationInput | G7E_AccountOrderByWithRelationInput[]
    cursor?: G7E_AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: G7E_AccountScalarFieldEnum | G7E_AccountScalarFieldEnum[]
  }

  /**
   * G7E_User without action
   */
  export type G7E_UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_User
     */
    select?: G7E_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_User
     */
    omit?: G7E_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_UserInclude<ExtArgs> | null
  }


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
   * Model G7E_Account
   */

  export type AggregateG7E_Account = {
    _count: G7E_AccountCountAggregateOutputType | null
    _avg: G7E_AccountAvgAggregateOutputType | null
    _sum: G7E_AccountSumAggregateOutputType | null
    _min: G7E_AccountMinAggregateOutputType | null
    _max: G7E_AccountMaxAggregateOutputType | null
  }

  export type G7E_AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type G7E_AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type G7E_AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type G7E_AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type G7E_AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type G7E_AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type G7E_AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type G7E_AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type G7E_AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type G7E_AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type G7E_AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which G7E_Account to aggregate.
     */
    where?: G7E_AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of G7E_Accounts to fetch.
     */
    orderBy?: G7E_AccountOrderByWithRelationInput | G7E_AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: G7E_AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` G7E_Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` G7E_Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned G7E_Accounts
    **/
    _count?: true | G7E_AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: G7E_AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: G7E_AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: G7E_AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: G7E_AccountMaxAggregateInputType
  }

  export type GetG7E_AccountAggregateType<T extends G7E_AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateG7E_Account]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateG7E_Account[P]>
      : GetScalarType<T[P], AggregateG7E_Account[P]>
  }




  export type G7E_AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: G7E_AccountWhereInput
    orderBy?: G7E_AccountOrderByWithAggregationInput | G7E_AccountOrderByWithAggregationInput[]
    by: G7E_AccountScalarFieldEnum[] | G7E_AccountScalarFieldEnum
    having?: G7E_AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: G7E_AccountCountAggregateInputType | true
    _avg?: G7E_AccountAvgAggregateInputType
    _sum?: G7E_AccountSumAggregateInputType
    _min?: G7E_AccountMinAggregateInputType
    _max?: G7E_AccountMaxAggregateInputType
  }

  export type G7E_AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: G7E_AccountCountAggregateOutputType | null
    _avg: G7E_AccountAvgAggregateOutputType | null
    _sum: G7E_AccountSumAggregateOutputType | null
    _min: G7E_AccountMinAggregateOutputType | null
    _max: G7E_AccountMaxAggregateOutputType | null
  }

  type GetG7E_AccountGroupByPayload<T extends G7E_AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<G7E_AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof G7E_AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], G7E_AccountGroupByOutputType[P]>
            : GetScalarType<T[P], G7E_AccountGroupByOutputType[P]>
        }
      >
    >


  export type G7E_AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | G7E_UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["g7E_Account"]>



  export type G7E_AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type G7E_AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["g7E_Account"]>
  export type G7E_AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | G7E_UserDefaultArgs<ExtArgs>
  }

  export type $G7E_AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "G7E_Account"
    objects: {
      user: Prisma.$G7E_UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["g7E_Account"]>
    composites: {}
  }

  type G7E_AccountGetPayload<S extends boolean | null | undefined | G7E_AccountDefaultArgs> = $Result.GetResult<Prisma.$G7E_AccountPayload, S>

  type G7E_AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<G7E_AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: G7E_AccountCountAggregateInputType | true
    }

  export interface G7E_AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['G7E_Account'], meta: { name: 'G7E_Account' } }
    /**
     * Find zero or one G7E_Account that matches the filter.
     * @param {G7E_AccountFindUniqueArgs} args - Arguments to find a G7E_Account
     * @example
     * // Get one G7E_Account
     * const g7E_Account = await prisma.g7E_Account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends G7E_AccountFindUniqueArgs>(args: SelectSubset<T, G7E_AccountFindUniqueArgs<ExtArgs>>): Prisma__G7E_AccountClient<$Result.GetResult<Prisma.$G7E_AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one G7E_Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {G7E_AccountFindUniqueOrThrowArgs} args - Arguments to find a G7E_Account
     * @example
     * // Get one G7E_Account
     * const g7E_Account = await prisma.g7E_Account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends G7E_AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, G7E_AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__G7E_AccountClient<$Result.GetResult<Prisma.$G7E_AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first G7E_Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_AccountFindFirstArgs} args - Arguments to find a G7E_Account
     * @example
     * // Get one G7E_Account
     * const g7E_Account = await prisma.g7E_Account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends G7E_AccountFindFirstArgs>(args?: SelectSubset<T, G7E_AccountFindFirstArgs<ExtArgs>>): Prisma__G7E_AccountClient<$Result.GetResult<Prisma.$G7E_AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first G7E_Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_AccountFindFirstOrThrowArgs} args - Arguments to find a G7E_Account
     * @example
     * // Get one G7E_Account
     * const g7E_Account = await prisma.g7E_Account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends G7E_AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, G7E_AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__G7E_AccountClient<$Result.GetResult<Prisma.$G7E_AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more G7E_Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all G7E_Accounts
     * const g7E_Accounts = await prisma.g7E_Account.findMany()
     * 
     * // Get first 10 G7E_Accounts
     * const g7E_Accounts = await prisma.g7E_Account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const g7E_AccountWithIdOnly = await prisma.g7E_Account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends G7E_AccountFindManyArgs>(args?: SelectSubset<T, G7E_AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$G7E_AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a G7E_Account.
     * @param {G7E_AccountCreateArgs} args - Arguments to create a G7E_Account.
     * @example
     * // Create one G7E_Account
     * const G7E_Account = await prisma.g7E_Account.create({
     *   data: {
     *     // ... data to create a G7E_Account
     *   }
     * })
     * 
     */
    create<T extends G7E_AccountCreateArgs>(args: SelectSubset<T, G7E_AccountCreateArgs<ExtArgs>>): Prisma__G7E_AccountClient<$Result.GetResult<Prisma.$G7E_AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many G7E_Accounts.
     * @param {G7E_AccountCreateManyArgs} args - Arguments to create many G7E_Accounts.
     * @example
     * // Create many G7E_Accounts
     * const g7E_Account = await prisma.g7E_Account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends G7E_AccountCreateManyArgs>(args?: SelectSubset<T, G7E_AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a G7E_Account.
     * @param {G7E_AccountDeleteArgs} args - Arguments to delete one G7E_Account.
     * @example
     * // Delete one G7E_Account
     * const G7E_Account = await prisma.g7E_Account.delete({
     *   where: {
     *     // ... filter to delete one G7E_Account
     *   }
     * })
     * 
     */
    delete<T extends G7E_AccountDeleteArgs>(args: SelectSubset<T, G7E_AccountDeleteArgs<ExtArgs>>): Prisma__G7E_AccountClient<$Result.GetResult<Prisma.$G7E_AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one G7E_Account.
     * @param {G7E_AccountUpdateArgs} args - Arguments to update one G7E_Account.
     * @example
     * // Update one G7E_Account
     * const g7E_Account = await prisma.g7E_Account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends G7E_AccountUpdateArgs>(args: SelectSubset<T, G7E_AccountUpdateArgs<ExtArgs>>): Prisma__G7E_AccountClient<$Result.GetResult<Prisma.$G7E_AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more G7E_Accounts.
     * @param {G7E_AccountDeleteManyArgs} args - Arguments to filter G7E_Accounts to delete.
     * @example
     * // Delete a few G7E_Accounts
     * const { count } = await prisma.g7E_Account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends G7E_AccountDeleteManyArgs>(args?: SelectSubset<T, G7E_AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more G7E_Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many G7E_Accounts
     * const g7E_Account = await prisma.g7E_Account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends G7E_AccountUpdateManyArgs>(args: SelectSubset<T, G7E_AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one G7E_Account.
     * @param {G7E_AccountUpsertArgs} args - Arguments to update or create a G7E_Account.
     * @example
     * // Update or create a G7E_Account
     * const g7E_Account = await prisma.g7E_Account.upsert({
     *   create: {
     *     // ... data to create a G7E_Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the G7E_Account we want to update
     *   }
     * })
     */
    upsert<T extends G7E_AccountUpsertArgs>(args: SelectSubset<T, G7E_AccountUpsertArgs<ExtArgs>>): Prisma__G7E_AccountClient<$Result.GetResult<Prisma.$G7E_AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of G7E_Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_AccountCountArgs} args - Arguments to filter G7E_Accounts to count.
     * @example
     * // Count the number of G7E_Accounts
     * const count = await prisma.g7E_Account.count({
     *   where: {
     *     // ... the filter for the G7E_Accounts we want to count
     *   }
     * })
    **/
    count<T extends G7E_AccountCountArgs>(
      args?: Subset<T, G7E_AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], G7E_AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a G7E_Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends G7E_AccountAggregateArgs>(args: Subset<T, G7E_AccountAggregateArgs>): Prisma.PrismaPromise<GetG7E_AccountAggregateType<T>>

    /**
     * Group by G7E_Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_AccountGroupByArgs} args - Group by arguments.
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
      T extends G7E_AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: G7E_AccountGroupByArgs['orderBy'] }
        : { orderBy?: G7E_AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, G7E_AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetG7E_AccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the G7E_Account model
   */
  readonly fields: G7E_AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for G7E_Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__G7E_AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends G7E_UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, G7E_UserDefaultArgs<ExtArgs>>): Prisma__G7E_UserClient<$Result.GetResult<Prisma.$G7E_UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the G7E_Account model
   */
  interface G7E_AccountFieldRefs {
    readonly id: FieldRef<"G7E_Account", 'String'>
    readonly userId: FieldRef<"G7E_Account", 'String'>
    readonly type: FieldRef<"G7E_Account", 'String'>
    readonly provider: FieldRef<"G7E_Account", 'String'>
    readonly providerAccountId: FieldRef<"G7E_Account", 'String'>
    readonly refresh_token: FieldRef<"G7E_Account", 'String'>
    readonly access_token: FieldRef<"G7E_Account", 'String'>
    readonly expires_at: FieldRef<"G7E_Account", 'Int'>
    readonly token_type: FieldRef<"G7E_Account", 'String'>
    readonly scope: FieldRef<"G7E_Account", 'String'>
    readonly id_token: FieldRef<"G7E_Account", 'String'>
    readonly session_state: FieldRef<"G7E_Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * G7E_Account findUnique
   */
  export type G7E_AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_Account
     */
    select?: G7E_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_Account
     */
    omit?: G7E_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_AccountInclude<ExtArgs> | null
    /**
     * Filter, which G7E_Account to fetch.
     */
    where: G7E_AccountWhereUniqueInput
  }

  /**
   * G7E_Account findUniqueOrThrow
   */
  export type G7E_AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_Account
     */
    select?: G7E_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_Account
     */
    omit?: G7E_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_AccountInclude<ExtArgs> | null
    /**
     * Filter, which G7E_Account to fetch.
     */
    where: G7E_AccountWhereUniqueInput
  }

  /**
   * G7E_Account findFirst
   */
  export type G7E_AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_Account
     */
    select?: G7E_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_Account
     */
    omit?: G7E_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_AccountInclude<ExtArgs> | null
    /**
     * Filter, which G7E_Account to fetch.
     */
    where?: G7E_AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of G7E_Accounts to fetch.
     */
    orderBy?: G7E_AccountOrderByWithRelationInput | G7E_AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for G7E_Accounts.
     */
    cursor?: G7E_AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` G7E_Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` G7E_Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of G7E_Accounts.
     */
    distinct?: G7E_AccountScalarFieldEnum | G7E_AccountScalarFieldEnum[]
  }

  /**
   * G7E_Account findFirstOrThrow
   */
  export type G7E_AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_Account
     */
    select?: G7E_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_Account
     */
    omit?: G7E_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_AccountInclude<ExtArgs> | null
    /**
     * Filter, which G7E_Account to fetch.
     */
    where?: G7E_AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of G7E_Accounts to fetch.
     */
    orderBy?: G7E_AccountOrderByWithRelationInput | G7E_AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for G7E_Accounts.
     */
    cursor?: G7E_AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` G7E_Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` G7E_Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of G7E_Accounts.
     */
    distinct?: G7E_AccountScalarFieldEnum | G7E_AccountScalarFieldEnum[]
  }

  /**
   * G7E_Account findMany
   */
  export type G7E_AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_Account
     */
    select?: G7E_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_Account
     */
    omit?: G7E_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_AccountInclude<ExtArgs> | null
    /**
     * Filter, which G7E_Accounts to fetch.
     */
    where?: G7E_AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of G7E_Accounts to fetch.
     */
    orderBy?: G7E_AccountOrderByWithRelationInput | G7E_AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing G7E_Accounts.
     */
    cursor?: G7E_AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` G7E_Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` G7E_Accounts.
     */
    skip?: number
    distinct?: G7E_AccountScalarFieldEnum | G7E_AccountScalarFieldEnum[]
  }

  /**
   * G7E_Account create
   */
  export type G7E_AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_Account
     */
    select?: G7E_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_Account
     */
    omit?: G7E_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a G7E_Account.
     */
    data: XOR<G7E_AccountCreateInput, G7E_AccountUncheckedCreateInput>
  }

  /**
   * G7E_Account createMany
   */
  export type G7E_AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many G7E_Accounts.
     */
    data: G7E_AccountCreateManyInput | G7E_AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * G7E_Account update
   */
  export type G7E_AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_Account
     */
    select?: G7E_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_Account
     */
    omit?: G7E_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a G7E_Account.
     */
    data: XOR<G7E_AccountUpdateInput, G7E_AccountUncheckedUpdateInput>
    /**
     * Choose, which G7E_Account to update.
     */
    where: G7E_AccountWhereUniqueInput
  }

  /**
   * G7E_Account updateMany
   */
  export type G7E_AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update G7E_Accounts.
     */
    data: XOR<G7E_AccountUpdateManyMutationInput, G7E_AccountUncheckedUpdateManyInput>
    /**
     * Filter which G7E_Accounts to update
     */
    where?: G7E_AccountWhereInput
    /**
     * Limit how many G7E_Accounts to update.
     */
    limit?: number
  }

  /**
   * G7E_Account upsert
   */
  export type G7E_AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_Account
     */
    select?: G7E_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_Account
     */
    omit?: G7E_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the G7E_Account to update in case it exists.
     */
    where: G7E_AccountWhereUniqueInput
    /**
     * In case the G7E_Account found by the `where` argument doesn't exist, create a new G7E_Account with this data.
     */
    create: XOR<G7E_AccountCreateInput, G7E_AccountUncheckedCreateInput>
    /**
     * In case the G7E_Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<G7E_AccountUpdateInput, G7E_AccountUncheckedUpdateInput>
  }

  /**
   * G7E_Account delete
   */
  export type G7E_AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_Account
     */
    select?: G7E_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_Account
     */
    omit?: G7E_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_AccountInclude<ExtArgs> | null
    /**
     * Filter which G7E_Account to delete.
     */
    where: G7E_AccountWhereUniqueInput
  }

  /**
   * G7E_Account deleteMany
   */
  export type G7E_AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which G7E_Accounts to delete
     */
    where?: G7E_AccountWhereInput
    /**
     * Limit how many G7E_Accounts to delete.
     */
    limit?: number
  }

  /**
   * G7E_Account without action
   */
  export type G7E_AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_Account
     */
    select?: G7E_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_Account
     */
    omit?: G7E_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_AccountInclude<ExtArgs> | null
  }


  /**
   * Model G7E_Session
   */

  export type AggregateG7E_Session = {
    _count: G7E_SessionCountAggregateOutputType | null
    _min: G7E_SessionMinAggregateOutputType | null
    _max: G7E_SessionMaxAggregateOutputType | null
  }

  export type G7E_SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type G7E_SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type G7E_SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type G7E_SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type G7E_SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type G7E_SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type G7E_SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which G7E_Session to aggregate.
     */
    where?: G7E_SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of G7E_Sessions to fetch.
     */
    orderBy?: G7E_SessionOrderByWithRelationInput | G7E_SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: G7E_SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` G7E_Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` G7E_Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned G7E_Sessions
    **/
    _count?: true | G7E_SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: G7E_SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: G7E_SessionMaxAggregateInputType
  }

  export type GetG7E_SessionAggregateType<T extends G7E_SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateG7E_Session]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateG7E_Session[P]>
      : GetScalarType<T[P], AggregateG7E_Session[P]>
  }




  export type G7E_SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: G7E_SessionWhereInput
    orderBy?: G7E_SessionOrderByWithAggregationInput | G7E_SessionOrderByWithAggregationInput[]
    by: G7E_SessionScalarFieldEnum[] | G7E_SessionScalarFieldEnum
    having?: G7E_SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: G7E_SessionCountAggregateInputType | true
    _min?: G7E_SessionMinAggregateInputType
    _max?: G7E_SessionMaxAggregateInputType
  }

  export type G7E_SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: G7E_SessionCountAggregateOutputType | null
    _min: G7E_SessionMinAggregateOutputType | null
    _max: G7E_SessionMaxAggregateOutputType | null
  }

  type GetG7E_SessionGroupByPayload<T extends G7E_SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<G7E_SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof G7E_SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], G7E_SessionGroupByOutputType[P]>
            : GetScalarType<T[P], G7E_SessionGroupByOutputType[P]>
        }
      >
    >


  export type G7E_SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | G7E_UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["g7E_Session"]>



  export type G7E_SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type G7E_SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["g7E_Session"]>
  export type G7E_SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | G7E_UserDefaultArgs<ExtArgs>
  }

  export type $G7E_SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "G7E_Session"
    objects: {
      user: Prisma.$G7E_UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["g7E_Session"]>
    composites: {}
  }

  type G7E_SessionGetPayload<S extends boolean | null | undefined | G7E_SessionDefaultArgs> = $Result.GetResult<Prisma.$G7E_SessionPayload, S>

  type G7E_SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<G7E_SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: G7E_SessionCountAggregateInputType | true
    }

  export interface G7E_SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['G7E_Session'], meta: { name: 'G7E_Session' } }
    /**
     * Find zero or one G7E_Session that matches the filter.
     * @param {G7E_SessionFindUniqueArgs} args - Arguments to find a G7E_Session
     * @example
     * // Get one G7E_Session
     * const g7E_Session = await prisma.g7E_Session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends G7E_SessionFindUniqueArgs>(args: SelectSubset<T, G7E_SessionFindUniqueArgs<ExtArgs>>): Prisma__G7E_SessionClient<$Result.GetResult<Prisma.$G7E_SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one G7E_Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {G7E_SessionFindUniqueOrThrowArgs} args - Arguments to find a G7E_Session
     * @example
     * // Get one G7E_Session
     * const g7E_Session = await prisma.g7E_Session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends G7E_SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, G7E_SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__G7E_SessionClient<$Result.GetResult<Prisma.$G7E_SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first G7E_Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_SessionFindFirstArgs} args - Arguments to find a G7E_Session
     * @example
     * // Get one G7E_Session
     * const g7E_Session = await prisma.g7E_Session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends G7E_SessionFindFirstArgs>(args?: SelectSubset<T, G7E_SessionFindFirstArgs<ExtArgs>>): Prisma__G7E_SessionClient<$Result.GetResult<Prisma.$G7E_SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first G7E_Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_SessionFindFirstOrThrowArgs} args - Arguments to find a G7E_Session
     * @example
     * // Get one G7E_Session
     * const g7E_Session = await prisma.g7E_Session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends G7E_SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, G7E_SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__G7E_SessionClient<$Result.GetResult<Prisma.$G7E_SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more G7E_Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all G7E_Sessions
     * const g7E_Sessions = await prisma.g7E_Session.findMany()
     * 
     * // Get first 10 G7E_Sessions
     * const g7E_Sessions = await prisma.g7E_Session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const g7E_SessionWithIdOnly = await prisma.g7E_Session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends G7E_SessionFindManyArgs>(args?: SelectSubset<T, G7E_SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$G7E_SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a G7E_Session.
     * @param {G7E_SessionCreateArgs} args - Arguments to create a G7E_Session.
     * @example
     * // Create one G7E_Session
     * const G7E_Session = await prisma.g7E_Session.create({
     *   data: {
     *     // ... data to create a G7E_Session
     *   }
     * })
     * 
     */
    create<T extends G7E_SessionCreateArgs>(args: SelectSubset<T, G7E_SessionCreateArgs<ExtArgs>>): Prisma__G7E_SessionClient<$Result.GetResult<Prisma.$G7E_SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many G7E_Sessions.
     * @param {G7E_SessionCreateManyArgs} args - Arguments to create many G7E_Sessions.
     * @example
     * // Create many G7E_Sessions
     * const g7E_Session = await prisma.g7E_Session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends G7E_SessionCreateManyArgs>(args?: SelectSubset<T, G7E_SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a G7E_Session.
     * @param {G7E_SessionDeleteArgs} args - Arguments to delete one G7E_Session.
     * @example
     * // Delete one G7E_Session
     * const G7E_Session = await prisma.g7E_Session.delete({
     *   where: {
     *     // ... filter to delete one G7E_Session
     *   }
     * })
     * 
     */
    delete<T extends G7E_SessionDeleteArgs>(args: SelectSubset<T, G7E_SessionDeleteArgs<ExtArgs>>): Prisma__G7E_SessionClient<$Result.GetResult<Prisma.$G7E_SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one G7E_Session.
     * @param {G7E_SessionUpdateArgs} args - Arguments to update one G7E_Session.
     * @example
     * // Update one G7E_Session
     * const g7E_Session = await prisma.g7E_Session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends G7E_SessionUpdateArgs>(args: SelectSubset<T, G7E_SessionUpdateArgs<ExtArgs>>): Prisma__G7E_SessionClient<$Result.GetResult<Prisma.$G7E_SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more G7E_Sessions.
     * @param {G7E_SessionDeleteManyArgs} args - Arguments to filter G7E_Sessions to delete.
     * @example
     * // Delete a few G7E_Sessions
     * const { count } = await prisma.g7E_Session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends G7E_SessionDeleteManyArgs>(args?: SelectSubset<T, G7E_SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more G7E_Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many G7E_Sessions
     * const g7E_Session = await prisma.g7E_Session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends G7E_SessionUpdateManyArgs>(args: SelectSubset<T, G7E_SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one G7E_Session.
     * @param {G7E_SessionUpsertArgs} args - Arguments to update or create a G7E_Session.
     * @example
     * // Update or create a G7E_Session
     * const g7E_Session = await prisma.g7E_Session.upsert({
     *   create: {
     *     // ... data to create a G7E_Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the G7E_Session we want to update
     *   }
     * })
     */
    upsert<T extends G7E_SessionUpsertArgs>(args: SelectSubset<T, G7E_SessionUpsertArgs<ExtArgs>>): Prisma__G7E_SessionClient<$Result.GetResult<Prisma.$G7E_SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of G7E_Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_SessionCountArgs} args - Arguments to filter G7E_Sessions to count.
     * @example
     * // Count the number of G7E_Sessions
     * const count = await prisma.g7E_Session.count({
     *   where: {
     *     // ... the filter for the G7E_Sessions we want to count
     *   }
     * })
    **/
    count<T extends G7E_SessionCountArgs>(
      args?: Subset<T, G7E_SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], G7E_SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a G7E_Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends G7E_SessionAggregateArgs>(args: Subset<T, G7E_SessionAggregateArgs>): Prisma.PrismaPromise<GetG7E_SessionAggregateType<T>>

    /**
     * Group by G7E_Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_SessionGroupByArgs} args - Group by arguments.
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
      T extends G7E_SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: G7E_SessionGroupByArgs['orderBy'] }
        : { orderBy?: G7E_SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, G7E_SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetG7E_SessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the G7E_Session model
   */
  readonly fields: G7E_SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for G7E_Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__G7E_SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends G7E_UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, G7E_UserDefaultArgs<ExtArgs>>): Prisma__G7E_UserClient<$Result.GetResult<Prisma.$G7E_UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the G7E_Session model
   */
  interface G7E_SessionFieldRefs {
    readonly id: FieldRef<"G7E_Session", 'String'>
    readonly sessionToken: FieldRef<"G7E_Session", 'String'>
    readonly userId: FieldRef<"G7E_Session", 'String'>
    readonly expires: FieldRef<"G7E_Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * G7E_Session findUnique
   */
  export type G7E_SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_Session
     */
    select?: G7E_SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_Session
     */
    omit?: G7E_SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_SessionInclude<ExtArgs> | null
    /**
     * Filter, which G7E_Session to fetch.
     */
    where: G7E_SessionWhereUniqueInput
  }

  /**
   * G7E_Session findUniqueOrThrow
   */
  export type G7E_SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_Session
     */
    select?: G7E_SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_Session
     */
    omit?: G7E_SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_SessionInclude<ExtArgs> | null
    /**
     * Filter, which G7E_Session to fetch.
     */
    where: G7E_SessionWhereUniqueInput
  }

  /**
   * G7E_Session findFirst
   */
  export type G7E_SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_Session
     */
    select?: G7E_SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_Session
     */
    omit?: G7E_SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_SessionInclude<ExtArgs> | null
    /**
     * Filter, which G7E_Session to fetch.
     */
    where?: G7E_SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of G7E_Sessions to fetch.
     */
    orderBy?: G7E_SessionOrderByWithRelationInput | G7E_SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for G7E_Sessions.
     */
    cursor?: G7E_SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` G7E_Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` G7E_Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of G7E_Sessions.
     */
    distinct?: G7E_SessionScalarFieldEnum | G7E_SessionScalarFieldEnum[]
  }

  /**
   * G7E_Session findFirstOrThrow
   */
  export type G7E_SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_Session
     */
    select?: G7E_SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_Session
     */
    omit?: G7E_SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_SessionInclude<ExtArgs> | null
    /**
     * Filter, which G7E_Session to fetch.
     */
    where?: G7E_SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of G7E_Sessions to fetch.
     */
    orderBy?: G7E_SessionOrderByWithRelationInput | G7E_SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for G7E_Sessions.
     */
    cursor?: G7E_SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` G7E_Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` G7E_Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of G7E_Sessions.
     */
    distinct?: G7E_SessionScalarFieldEnum | G7E_SessionScalarFieldEnum[]
  }

  /**
   * G7E_Session findMany
   */
  export type G7E_SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_Session
     */
    select?: G7E_SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_Session
     */
    omit?: G7E_SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_SessionInclude<ExtArgs> | null
    /**
     * Filter, which G7E_Sessions to fetch.
     */
    where?: G7E_SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of G7E_Sessions to fetch.
     */
    orderBy?: G7E_SessionOrderByWithRelationInput | G7E_SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing G7E_Sessions.
     */
    cursor?: G7E_SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` G7E_Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` G7E_Sessions.
     */
    skip?: number
    distinct?: G7E_SessionScalarFieldEnum | G7E_SessionScalarFieldEnum[]
  }

  /**
   * G7E_Session create
   */
  export type G7E_SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_Session
     */
    select?: G7E_SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_Session
     */
    omit?: G7E_SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a G7E_Session.
     */
    data: XOR<G7E_SessionCreateInput, G7E_SessionUncheckedCreateInput>
  }

  /**
   * G7E_Session createMany
   */
  export type G7E_SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many G7E_Sessions.
     */
    data: G7E_SessionCreateManyInput | G7E_SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * G7E_Session update
   */
  export type G7E_SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_Session
     */
    select?: G7E_SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_Session
     */
    omit?: G7E_SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a G7E_Session.
     */
    data: XOR<G7E_SessionUpdateInput, G7E_SessionUncheckedUpdateInput>
    /**
     * Choose, which G7E_Session to update.
     */
    where: G7E_SessionWhereUniqueInput
  }

  /**
   * G7E_Session updateMany
   */
  export type G7E_SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update G7E_Sessions.
     */
    data: XOR<G7E_SessionUpdateManyMutationInput, G7E_SessionUncheckedUpdateManyInput>
    /**
     * Filter which G7E_Sessions to update
     */
    where?: G7E_SessionWhereInput
    /**
     * Limit how many G7E_Sessions to update.
     */
    limit?: number
  }

  /**
   * G7E_Session upsert
   */
  export type G7E_SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_Session
     */
    select?: G7E_SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_Session
     */
    omit?: G7E_SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the G7E_Session to update in case it exists.
     */
    where: G7E_SessionWhereUniqueInput
    /**
     * In case the G7E_Session found by the `where` argument doesn't exist, create a new G7E_Session with this data.
     */
    create: XOR<G7E_SessionCreateInput, G7E_SessionUncheckedCreateInput>
    /**
     * In case the G7E_Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<G7E_SessionUpdateInput, G7E_SessionUncheckedUpdateInput>
  }

  /**
   * G7E_Session delete
   */
  export type G7E_SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_Session
     */
    select?: G7E_SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_Session
     */
    omit?: G7E_SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_SessionInclude<ExtArgs> | null
    /**
     * Filter which G7E_Session to delete.
     */
    where: G7E_SessionWhereUniqueInput
  }

  /**
   * G7E_Session deleteMany
   */
  export type G7E_SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which G7E_Sessions to delete
     */
    where?: G7E_SessionWhereInput
    /**
     * Limit how many G7E_Sessions to delete.
     */
    limit?: number
  }

  /**
   * G7E_Session without action
   */
  export type G7E_SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_Session
     */
    select?: G7E_SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_Session
     */
    omit?: G7E_SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: G7E_SessionInclude<ExtArgs> | null
  }


  /**
   * Model G7E_VerificationToken
   */

  export type AggregateG7E_VerificationToken = {
    _count: G7E_VerificationTokenCountAggregateOutputType | null
    _min: G7E_VerificationTokenMinAggregateOutputType | null
    _max: G7E_VerificationTokenMaxAggregateOutputType | null
  }

  export type G7E_VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type G7E_VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type G7E_VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type G7E_VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type G7E_VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type G7E_VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type G7E_VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which G7E_VerificationToken to aggregate.
     */
    where?: G7E_VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of G7E_VerificationTokens to fetch.
     */
    orderBy?: G7E_VerificationTokenOrderByWithRelationInput | G7E_VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: G7E_VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` G7E_VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` G7E_VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned G7E_VerificationTokens
    **/
    _count?: true | G7E_VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: G7E_VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: G7E_VerificationTokenMaxAggregateInputType
  }

  export type GetG7E_VerificationTokenAggregateType<T extends G7E_VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateG7E_VerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateG7E_VerificationToken[P]>
      : GetScalarType<T[P], AggregateG7E_VerificationToken[P]>
  }




  export type G7E_VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: G7E_VerificationTokenWhereInput
    orderBy?: G7E_VerificationTokenOrderByWithAggregationInput | G7E_VerificationTokenOrderByWithAggregationInput[]
    by: G7E_VerificationTokenScalarFieldEnum[] | G7E_VerificationTokenScalarFieldEnum
    having?: G7E_VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: G7E_VerificationTokenCountAggregateInputType | true
    _min?: G7E_VerificationTokenMinAggregateInputType
    _max?: G7E_VerificationTokenMaxAggregateInputType
  }

  export type G7E_VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: G7E_VerificationTokenCountAggregateOutputType | null
    _min: G7E_VerificationTokenMinAggregateOutputType | null
    _max: G7E_VerificationTokenMaxAggregateOutputType | null
  }

  type GetG7E_VerificationTokenGroupByPayload<T extends G7E_VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<G7E_VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof G7E_VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], G7E_VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], G7E_VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type G7E_VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["g7E_VerificationToken"]>



  export type G7E_VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type G7E_VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["g7E_VerificationToken"]>

  export type $G7E_VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "G7E_VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["g7E_VerificationToken"]>
    composites: {}
  }

  type G7E_VerificationTokenGetPayload<S extends boolean | null | undefined | G7E_VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$G7E_VerificationTokenPayload, S>

  type G7E_VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<G7E_VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: G7E_VerificationTokenCountAggregateInputType | true
    }

  export interface G7E_VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['G7E_VerificationToken'], meta: { name: 'G7E_VerificationToken' } }
    /**
     * Find zero or one G7E_VerificationToken that matches the filter.
     * @param {G7E_VerificationTokenFindUniqueArgs} args - Arguments to find a G7E_VerificationToken
     * @example
     * // Get one G7E_VerificationToken
     * const g7E_VerificationToken = await prisma.g7E_VerificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends G7E_VerificationTokenFindUniqueArgs>(args: SelectSubset<T, G7E_VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__G7E_VerificationTokenClient<$Result.GetResult<Prisma.$G7E_VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one G7E_VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {G7E_VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a G7E_VerificationToken
     * @example
     * // Get one G7E_VerificationToken
     * const g7E_VerificationToken = await prisma.g7E_VerificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends G7E_VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, G7E_VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__G7E_VerificationTokenClient<$Result.GetResult<Prisma.$G7E_VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first G7E_VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_VerificationTokenFindFirstArgs} args - Arguments to find a G7E_VerificationToken
     * @example
     * // Get one G7E_VerificationToken
     * const g7E_VerificationToken = await prisma.g7E_VerificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends G7E_VerificationTokenFindFirstArgs>(args?: SelectSubset<T, G7E_VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__G7E_VerificationTokenClient<$Result.GetResult<Prisma.$G7E_VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first G7E_VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a G7E_VerificationToken
     * @example
     * // Get one G7E_VerificationToken
     * const g7E_VerificationToken = await prisma.g7E_VerificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends G7E_VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, G7E_VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__G7E_VerificationTokenClient<$Result.GetResult<Prisma.$G7E_VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more G7E_VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all G7E_VerificationTokens
     * const g7E_VerificationTokens = await prisma.g7E_VerificationToken.findMany()
     * 
     * // Get first 10 G7E_VerificationTokens
     * const g7E_VerificationTokens = await prisma.g7E_VerificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const g7E_VerificationTokenWithIdentifierOnly = await prisma.g7E_VerificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends G7E_VerificationTokenFindManyArgs>(args?: SelectSubset<T, G7E_VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$G7E_VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a G7E_VerificationToken.
     * @param {G7E_VerificationTokenCreateArgs} args - Arguments to create a G7E_VerificationToken.
     * @example
     * // Create one G7E_VerificationToken
     * const G7E_VerificationToken = await prisma.g7E_VerificationToken.create({
     *   data: {
     *     // ... data to create a G7E_VerificationToken
     *   }
     * })
     * 
     */
    create<T extends G7E_VerificationTokenCreateArgs>(args: SelectSubset<T, G7E_VerificationTokenCreateArgs<ExtArgs>>): Prisma__G7E_VerificationTokenClient<$Result.GetResult<Prisma.$G7E_VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many G7E_VerificationTokens.
     * @param {G7E_VerificationTokenCreateManyArgs} args - Arguments to create many G7E_VerificationTokens.
     * @example
     * // Create many G7E_VerificationTokens
     * const g7E_VerificationToken = await prisma.g7E_VerificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends G7E_VerificationTokenCreateManyArgs>(args?: SelectSubset<T, G7E_VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a G7E_VerificationToken.
     * @param {G7E_VerificationTokenDeleteArgs} args - Arguments to delete one G7E_VerificationToken.
     * @example
     * // Delete one G7E_VerificationToken
     * const G7E_VerificationToken = await prisma.g7E_VerificationToken.delete({
     *   where: {
     *     // ... filter to delete one G7E_VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends G7E_VerificationTokenDeleteArgs>(args: SelectSubset<T, G7E_VerificationTokenDeleteArgs<ExtArgs>>): Prisma__G7E_VerificationTokenClient<$Result.GetResult<Prisma.$G7E_VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one G7E_VerificationToken.
     * @param {G7E_VerificationTokenUpdateArgs} args - Arguments to update one G7E_VerificationToken.
     * @example
     * // Update one G7E_VerificationToken
     * const g7E_VerificationToken = await prisma.g7E_VerificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends G7E_VerificationTokenUpdateArgs>(args: SelectSubset<T, G7E_VerificationTokenUpdateArgs<ExtArgs>>): Prisma__G7E_VerificationTokenClient<$Result.GetResult<Prisma.$G7E_VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more G7E_VerificationTokens.
     * @param {G7E_VerificationTokenDeleteManyArgs} args - Arguments to filter G7E_VerificationTokens to delete.
     * @example
     * // Delete a few G7E_VerificationTokens
     * const { count } = await prisma.g7E_VerificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends G7E_VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, G7E_VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more G7E_VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many G7E_VerificationTokens
     * const g7E_VerificationToken = await prisma.g7E_VerificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends G7E_VerificationTokenUpdateManyArgs>(args: SelectSubset<T, G7E_VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one G7E_VerificationToken.
     * @param {G7E_VerificationTokenUpsertArgs} args - Arguments to update or create a G7E_VerificationToken.
     * @example
     * // Update or create a G7E_VerificationToken
     * const g7E_VerificationToken = await prisma.g7E_VerificationToken.upsert({
     *   create: {
     *     // ... data to create a G7E_VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the G7E_VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends G7E_VerificationTokenUpsertArgs>(args: SelectSubset<T, G7E_VerificationTokenUpsertArgs<ExtArgs>>): Prisma__G7E_VerificationTokenClient<$Result.GetResult<Prisma.$G7E_VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of G7E_VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_VerificationTokenCountArgs} args - Arguments to filter G7E_VerificationTokens to count.
     * @example
     * // Count the number of G7E_VerificationTokens
     * const count = await prisma.g7E_VerificationToken.count({
     *   where: {
     *     // ... the filter for the G7E_VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends G7E_VerificationTokenCountArgs>(
      args?: Subset<T, G7E_VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], G7E_VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a G7E_VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends G7E_VerificationTokenAggregateArgs>(args: Subset<T, G7E_VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetG7E_VerificationTokenAggregateType<T>>

    /**
     * Group by G7E_VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {G7E_VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends G7E_VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: G7E_VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: G7E_VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, G7E_VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetG7E_VerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the G7E_VerificationToken model
   */
  readonly fields: G7E_VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for G7E_VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__G7E_VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the G7E_VerificationToken model
   */
  interface G7E_VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"G7E_VerificationToken", 'String'>
    readonly token: FieldRef<"G7E_VerificationToken", 'String'>
    readonly expires: FieldRef<"G7E_VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * G7E_VerificationToken findUnique
   */
  export type G7E_VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_VerificationToken
     */
    select?: G7E_VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_VerificationToken
     */
    omit?: G7E_VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which G7E_VerificationToken to fetch.
     */
    where: G7E_VerificationTokenWhereUniqueInput
  }

  /**
   * G7E_VerificationToken findUniqueOrThrow
   */
  export type G7E_VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_VerificationToken
     */
    select?: G7E_VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_VerificationToken
     */
    omit?: G7E_VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which G7E_VerificationToken to fetch.
     */
    where: G7E_VerificationTokenWhereUniqueInput
  }

  /**
   * G7E_VerificationToken findFirst
   */
  export type G7E_VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_VerificationToken
     */
    select?: G7E_VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_VerificationToken
     */
    omit?: G7E_VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which G7E_VerificationToken to fetch.
     */
    where?: G7E_VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of G7E_VerificationTokens to fetch.
     */
    orderBy?: G7E_VerificationTokenOrderByWithRelationInput | G7E_VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for G7E_VerificationTokens.
     */
    cursor?: G7E_VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` G7E_VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` G7E_VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of G7E_VerificationTokens.
     */
    distinct?: G7E_VerificationTokenScalarFieldEnum | G7E_VerificationTokenScalarFieldEnum[]
  }

  /**
   * G7E_VerificationToken findFirstOrThrow
   */
  export type G7E_VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_VerificationToken
     */
    select?: G7E_VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_VerificationToken
     */
    omit?: G7E_VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which G7E_VerificationToken to fetch.
     */
    where?: G7E_VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of G7E_VerificationTokens to fetch.
     */
    orderBy?: G7E_VerificationTokenOrderByWithRelationInput | G7E_VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for G7E_VerificationTokens.
     */
    cursor?: G7E_VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` G7E_VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` G7E_VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of G7E_VerificationTokens.
     */
    distinct?: G7E_VerificationTokenScalarFieldEnum | G7E_VerificationTokenScalarFieldEnum[]
  }

  /**
   * G7E_VerificationToken findMany
   */
  export type G7E_VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_VerificationToken
     */
    select?: G7E_VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_VerificationToken
     */
    omit?: G7E_VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which G7E_VerificationTokens to fetch.
     */
    where?: G7E_VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of G7E_VerificationTokens to fetch.
     */
    orderBy?: G7E_VerificationTokenOrderByWithRelationInput | G7E_VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing G7E_VerificationTokens.
     */
    cursor?: G7E_VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` G7E_VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` G7E_VerificationTokens.
     */
    skip?: number
    distinct?: G7E_VerificationTokenScalarFieldEnum | G7E_VerificationTokenScalarFieldEnum[]
  }

  /**
   * G7E_VerificationToken create
   */
  export type G7E_VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_VerificationToken
     */
    select?: G7E_VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_VerificationToken
     */
    omit?: G7E_VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a G7E_VerificationToken.
     */
    data: XOR<G7E_VerificationTokenCreateInput, G7E_VerificationTokenUncheckedCreateInput>
  }

  /**
   * G7E_VerificationToken createMany
   */
  export type G7E_VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many G7E_VerificationTokens.
     */
    data: G7E_VerificationTokenCreateManyInput | G7E_VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * G7E_VerificationToken update
   */
  export type G7E_VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_VerificationToken
     */
    select?: G7E_VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_VerificationToken
     */
    omit?: G7E_VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a G7E_VerificationToken.
     */
    data: XOR<G7E_VerificationTokenUpdateInput, G7E_VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which G7E_VerificationToken to update.
     */
    where: G7E_VerificationTokenWhereUniqueInput
  }

  /**
   * G7E_VerificationToken updateMany
   */
  export type G7E_VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update G7E_VerificationTokens.
     */
    data: XOR<G7E_VerificationTokenUpdateManyMutationInput, G7E_VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which G7E_VerificationTokens to update
     */
    where?: G7E_VerificationTokenWhereInput
    /**
     * Limit how many G7E_VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * G7E_VerificationToken upsert
   */
  export type G7E_VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_VerificationToken
     */
    select?: G7E_VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_VerificationToken
     */
    omit?: G7E_VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the G7E_VerificationToken to update in case it exists.
     */
    where: G7E_VerificationTokenWhereUniqueInput
    /**
     * In case the G7E_VerificationToken found by the `where` argument doesn't exist, create a new G7E_VerificationToken with this data.
     */
    create: XOR<G7E_VerificationTokenCreateInput, G7E_VerificationTokenUncheckedCreateInput>
    /**
     * In case the G7E_VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<G7E_VerificationTokenUpdateInput, G7E_VerificationTokenUncheckedUpdateInput>
  }

  /**
   * G7E_VerificationToken delete
   */
  export type G7E_VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_VerificationToken
     */
    select?: G7E_VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_VerificationToken
     */
    omit?: G7E_VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which G7E_VerificationToken to delete.
     */
    where: G7E_VerificationTokenWhereUniqueInput
  }

  /**
   * G7E_VerificationToken deleteMany
   */
  export type G7E_VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which G7E_VerificationTokens to delete
     */
    where?: G7E_VerificationTokenWhereInput
    /**
     * Limit how many G7E_VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * G7E_VerificationToken without action
   */
  export type G7E_VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the G7E_VerificationToken
     */
    select?: G7E_VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the G7E_VerificationToken
     */
    omit?: G7E_VerificationTokenOmit<ExtArgs> | null
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


  export const G7E_UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    password: 'password',
    username: 'username',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type G7E_UserScalarFieldEnum = (typeof G7E_UserScalarFieldEnum)[keyof typeof G7E_UserScalarFieldEnum]


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


  export const G7E_AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type G7E_AccountScalarFieldEnum = (typeof G7E_AccountScalarFieldEnum)[keyof typeof G7E_AccountScalarFieldEnum]


  export const G7E_SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type G7E_SessionScalarFieldEnum = (typeof G7E_SessionScalarFieldEnum)[keyof typeof G7E_SessionScalarFieldEnum]


  export const G7E_VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type G7E_VerificationTokenScalarFieldEnum = (typeof G7E_VerificationTokenScalarFieldEnum)[keyof typeof G7E_VerificationTokenScalarFieldEnum]


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


  export const G7E_UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    image: 'image',
    password: 'password',
    username: 'username'
  };

  export type G7E_UserOrderByRelevanceFieldEnum = (typeof G7E_UserOrderByRelevanceFieldEnum)[keyof typeof G7E_UserOrderByRelevanceFieldEnum]


  export const G7E_AudioFileOrderByRelevanceFieldEnum: {
    filename: 'filename',
    minioBucket: 'minioBucket',
    minioPath: 'minioPath'
  };

  export type G7E_AudioFileOrderByRelevanceFieldEnum = (typeof G7E_AudioFileOrderByRelevanceFieldEnum)[keyof typeof G7E_AudioFileOrderByRelevanceFieldEnum]


  export const G7E_AccountOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type G7E_AccountOrderByRelevanceFieldEnum = (typeof G7E_AccountOrderByRelevanceFieldEnum)[keyof typeof G7E_AccountOrderByRelevanceFieldEnum]


  export const G7E_SessionOrderByRelevanceFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId'
  };

  export type G7E_SessionOrderByRelevanceFieldEnum = (typeof G7E_SessionOrderByRelevanceFieldEnum)[keyof typeof G7E_SessionOrderByRelevanceFieldEnum]


  export const G7E_VerificationTokenOrderByRelevanceFieldEnum: {
    identifier: 'identifier',
    token: 'token'
  };

  export type G7E_VerificationTokenOrderByRelevanceFieldEnum = (typeof G7E_VerificationTokenOrderByRelevanceFieldEnum)[keyof typeof G7E_VerificationTokenOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type G7E_UserWhereInput = {
    AND?: G7E_UserWhereInput | G7E_UserWhereInput[]
    OR?: G7E_UserWhereInput[]
    NOT?: G7E_UserWhereInput | G7E_UserWhereInput[]
    id?: StringFilter<"G7E_User"> | string
    name?: StringNullableFilter<"G7E_User"> | string | null
    email?: StringNullableFilter<"G7E_User"> | string | null
    emailVerified?: DateTimeNullableFilter<"G7E_User"> | Date | string | null
    image?: StringNullableFilter<"G7E_User"> | string | null
    password?: StringNullableFilter<"G7E_User"> | string | null
    username?: StringNullableFilter<"G7E_User"> | string | null
    createdAt?: DateTimeFilter<"G7E_User"> | Date | string
    updatedAt?: DateTimeFilter<"G7E_User"> | Date | string
    sessions?: G7E_SessionListRelationFilter
    accounts?: G7E_AccountListRelationFilter
  }

  export type G7E_UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: G7E_SessionOrderByRelationAggregateInput
    accounts?: G7E_AccountOrderByRelationAggregateInput
    _relevance?: G7E_UserOrderByRelevanceInput
  }

  export type G7E_UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: G7E_UserWhereInput | G7E_UserWhereInput[]
    OR?: G7E_UserWhereInput[]
    NOT?: G7E_UserWhereInput | G7E_UserWhereInput[]
    name?: StringNullableFilter<"G7E_User"> | string | null
    emailVerified?: DateTimeNullableFilter<"G7E_User"> | Date | string | null
    image?: StringNullableFilter<"G7E_User"> | string | null
    password?: StringNullableFilter<"G7E_User"> | string | null
    createdAt?: DateTimeFilter<"G7E_User"> | Date | string
    updatedAt?: DateTimeFilter<"G7E_User"> | Date | string
    sessions?: G7E_SessionListRelationFilter
    accounts?: G7E_AccountListRelationFilter
  }, "id" | "email" | "username">

  export type G7E_UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: G7E_UserCountOrderByAggregateInput
    _max?: G7E_UserMaxOrderByAggregateInput
    _min?: G7E_UserMinOrderByAggregateInput
  }

  export type G7E_UserScalarWhereWithAggregatesInput = {
    AND?: G7E_UserScalarWhereWithAggregatesInput | G7E_UserScalarWhereWithAggregatesInput[]
    OR?: G7E_UserScalarWhereWithAggregatesInput[]
    NOT?: G7E_UserScalarWhereWithAggregatesInput | G7E_UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"G7E_User"> | string
    name?: StringNullableWithAggregatesFilter<"G7E_User"> | string | null
    email?: StringNullableWithAggregatesFilter<"G7E_User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"G7E_User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"G7E_User"> | string | null
    password?: StringNullableWithAggregatesFilter<"G7E_User"> | string | null
    username?: StringNullableWithAggregatesFilter<"G7E_User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"G7E_User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"G7E_User"> | Date | string
  }

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

  export type G7E_AccountWhereInput = {
    AND?: G7E_AccountWhereInput | G7E_AccountWhereInput[]
    OR?: G7E_AccountWhereInput[]
    NOT?: G7E_AccountWhereInput | G7E_AccountWhereInput[]
    id?: StringFilter<"G7E_Account"> | string
    userId?: StringFilter<"G7E_Account"> | string
    type?: StringFilter<"G7E_Account"> | string
    provider?: StringFilter<"G7E_Account"> | string
    providerAccountId?: StringFilter<"G7E_Account"> | string
    refresh_token?: StringNullableFilter<"G7E_Account"> | string | null
    access_token?: StringNullableFilter<"G7E_Account"> | string | null
    expires_at?: IntNullableFilter<"G7E_Account"> | number | null
    token_type?: StringNullableFilter<"G7E_Account"> | string | null
    scope?: StringNullableFilter<"G7E_Account"> | string | null
    id_token?: StringNullableFilter<"G7E_Account"> | string | null
    session_state?: StringNullableFilter<"G7E_Account"> | string | null
    user?: XOR<G7E_UserScalarRelationFilter, G7E_UserWhereInput>
  }

  export type G7E_AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: G7E_UserOrderByWithRelationInput
    _relevance?: G7E_AccountOrderByRelevanceInput
  }

  export type G7E_AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: G7E_AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: G7E_AccountWhereInput | G7E_AccountWhereInput[]
    OR?: G7E_AccountWhereInput[]
    NOT?: G7E_AccountWhereInput | G7E_AccountWhereInput[]
    userId?: StringFilter<"G7E_Account"> | string
    type?: StringFilter<"G7E_Account"> | string
    provider?: StringFilter<"G7E_Account"> | string
    providerAccountId?: StringFilter<"G7E_Account"> | string
    refresh_token?: StringNullableFilter<"G7E_Account"> | string | null
    access_token?: StringNullableFilter<"G7E_Account"> | string | null
    expires_at?: IntNullableFilter<"G7E_Account"> | number | null
    token_type?: StringNullableFilter<"G7E_Account"> | string | null
    scope?: StringNullableFilter<"G7E_Account"> | string | null
    id_token?: StringNullableFilter<"G7E_Account"> | string | null
    session_state?: StringNullableFilter<"G7E_Account"> | string | null
    user?: XOR<G7E_UserScalarRelationFilter, G7E_UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type G7E_AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: G7E_AccountCountOrderByAggregateInput
    _avg?: G7E_AccountAvgOrderByAggregateInput
    _max?: G7E_AccountMaxOrderByAggregateInput
    _min?: G7E_AccountMinOrderByAggregateInput
    _sum?: G7E_AccountSumOrderByAggregateInput
  }

  export type G7E_AccountScalarWhereWithAggregatesInput = {
    AND?: G7E_AccountScalarWhereWithAggregatesInput | G7E_AccountScalarWhereWithAggregatesInput[]
    OR?: G7E_AccountScalarWhereWithAggregatesInput[]
    NOT?: G7E_AccountScalarWhereWithAggregatesInput | G7E_AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"G7E_Account"> | string
    userId?: StringWithAggregatesFilter<"G7E_Account"> | string
    type?: StringWithAggregatesFilter<"G7E_Account"> | string
    provider?: StringWithAggregatesFilter<"G7E_Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"G7E_Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"G7E_Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"G7E_Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"G7E_Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"G7E_Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"G7E_Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"G7E_Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"G7E_Account"> | string | null
  }

  export type G7E_SessionWhereInput = {
    AND?: G7E_SessionWhereInput | G7E_SessionWhereInput[]
    OR?: G7E_SessionWhereInput[]
    NOT?: G7E_SessionWhereInput | G7E_SessionWhereInput[]
    id?: StringFilter<"G7E_Session"> | string
    sessionToken?: StringFilter<"G7E_Session"> | string
    userId?: StringFilter<"G7E_Session"> | string
    expires?: DateTimeFilter<"G7E_Session"> | Date | string
    user?: XOR<G7E_UserScalarRelationFilter, G7E_UserWhereInput>
  }

  export type G7E_SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: G7E_UserOrderByWithRelationInput
    _relevance?: G7E_SessionOrderByRelevanceInput
  }

  export type G7E_SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: G7E_SessionWhereInput | G7E_SessionWhereInput[]
    OR?: G7E_SessionWhereInput[]
    NOT?: G7E_SessionWhereInput | G7E_SessionWhereInput[]
    userId?: StringFilter<"G7E_Session"> | string
    expires?: DateTimeFilter<"G7E_Session"> | Date | string
    user?: XOR<G7E_UserScalarRelationFilter, G7E_UserWhereInput>
  }, "id" | "sessionToken">

  export type G7E_SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: G7E_SessionCountOrderByAggregateInput
    _max?: G7E_SessionMaxOrderByAggregateInput
    _min?: G7E_SessionMinOrderByAggregateInput
  }

  export type G7E_SessionScalarWhereWithAggregatesInput = {
    AND?: G7E_SessionScalarWhereWithAggregatesInput | G7E_SessionScalarWhereWithAggregatesInput[]
    OR?: G7E_SessionScalarWhereWithAggregatesInput[]
    NOT?: G7E_SessionScalarWhereWithAggregatesInput | G7E_SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"G7E_Session"> | string
    sessionToken?: StringWithAggregatesFilter<"G7E_Session"> | string
    userId?: StringWithAggregatesFilter<"G7E_Session"> | string
    expires?: DateTimeWithAggregatesFilter<"G7E_Session"> | Date | string
  }

  export type G7E_VerificationTokenWhereInput = {
    AND?: G7E_VerificationTokenWhereInput | G7E_VerificationTokenWhereInput[]
    OR?: G7E_VerificationTokenWhereInput[]
    NOT?: G7E_VerificationTokenWhereInput | G7E_VerificationTokenWhereInput[]
    identifier?: StringFilter<"G7E_VerificationToken"> | string
    token?: StringFilter<"G7E_VerificationToken"> | string
    expires?: DateTimeFilter<"G7E_VerificationToken"> | Date | string
  }

  export type G7E_VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _relevance?: G7E_VerificationTokenOrderByRelevanceInput
  }

  export type G7E_VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: G7E_VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: G7E_VerificationTokenWhereInput | G7E_VerificationTokenWhereInput[]
    OR?: G7E_VerificationTokenWhereInput[]
    NOT?: G7E_VerificationTokenWhereInput | G7E_VerificationTokenWhereInput[]
    identifier?: StringFilter<"G7E_VerificationToken"> | string
    expires?: DateTimeFilter<"G7E_VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type G7E_VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: G7E_VerificationTokenCountOrderByAggregateInput
    _max?: G7E_VerificationTokenMaxOrderByAggregateInput
    _min?: G7E_VerificationTokenMinOrderByAggregateInput
  }

  export type G7E_VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: G7E_VerificationTokenScalarWhereWithAggregatesInput | G7E_VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: G7E_VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: G7E_VerificationTokenScalarWhereWithAggregatesInput | G7E_VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"G7E_VerificationToken"> | string
    token?: StringWithAggregatesFilter<"G7E_VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"G7E_VerificationToken"> | Date | string
  }

  export type G7E_UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: G7E_SessionCreateNestedManyWithoutUserInput
    accounts?: G7E_AccountCreateNestedManyWithoutUserInput
  }

  export type G7E_UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: G7E_SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: G7E_AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type G7E_UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: G7E_SessionUpdateManyWithoutUserNestedInput
    accounts?: G7E_AccountUpdateManyWithoutUserNestedInput
  }

  export type G7E_UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: G7E_SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: G7E_AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type G7E_UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type G7E_UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type G7E_UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type G7E_AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: G7E_UserCreateNestedOneWithoutAccountsInput
  }

  export type G7E_AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type G7E_AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: G7E_UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type G7E_AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type G7E_AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type G7E_AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type G7E_AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type G7E_SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: G7E_UserCreateNestedOneWithoutSessionsInput
  }

  export type G7E_SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type G7E_SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: G7E_UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type G7E_SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type G7E_SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type G7E_SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type G7E_SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type G7E_VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type G7E_VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type G7E_VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type G7E_VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type G7E_VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type G7E_VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type G7E_VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type G7E_SessionListRelationFilter = {
    every?: G7E_SessionWhereInput
    some?: G7E_SessionWhereInput
    none?: G7E_SessionWhereInput
  }

  export type G7E_AccountListRelationFilter = {
    every?: G7E_AccountWhereInput
    some?: G7E_AccountWhereInput
    none?: G7E_AccountWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type G7E_SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type G7E_AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type G7E_UserOrderByRelevanceInput = {
    fields: G7E_UserOrderByRelevanceFieldEnum | G7E_UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type G7E_UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type G7E_UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type G7E_UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type G7E_UserScalarRelationFilter = {
    is?: G7E_UserWhereInput
    isNot?: G7E_UserWhereInput
  }

  export type G7E_AccountOrderByRelevanceInput = {
    fields: G7E_AccountOrderByRelevanceFieldEnum | G7E_AccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type G7E_AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type G7E_AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type G7E_AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type G7E_AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type G7E_AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type G7E_AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type G7E_SessionOrderByRelevanceInput = {
    fields: G7E_SessionOrderByRelevanceFieldEnum | G7E_SessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type G7E_SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type G7E_SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type G7E_SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type G7E_VerificationTokenOrderByRelevanceInput = {
    fields: G7E_VerificationTokenOrderByRelevanceFieldEnum | G7E_VerificationTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type G7E_VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type G7E_VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type G7E_VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type G7E_VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type G7E_SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<G7E_SessionCreateWithoutUserInput, G7E_SessionUncheckedCreateWithoutUserInput> | G7E_SessionCreateWithoutUserInput[] | G7E_SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: G7E_SessionCreateOrConnectWithoutUserInput | G7E_SessionCreateOrConnectWithoutUserInput[]
    createMany?: G7E_SessionCreateManyUserInputEnvelope
    connect?: G7E_SessionWhereUniqueInput | G7E_SessionWhereUniqueInput[]
  }

  export type G7E_AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<G7E_AccountCreateWithoutUserInput, G7E_AccountUncheckedCreateWithoutUserInput> | G7E_AccountCreateWithoutUserInput[] | G7E_AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: G7E_AccountCreateOrConnectWithoutUserInput | G7E_AccountCreateOrConnectWithoutUserInput[]
    createMany?: G7E_AccountCreateManyUserInputEnvelope
    connect?: G7E_AccountWhereUniqueInput | G7E_AccountWhereUniqueInput[]
  }

  export type G7E_SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<G7E_SessionCreateWithoutUserInput, G7E_SessionUncheckedCreateWithoutUserInput> | G7E_SessionCreateWithoutUserInput[] | G7E_SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: G7E_SessionCreateOrConnectWithoutUserInput | G7E_SessionCreateOrConnectWithoutUserInput[]
    createMany?: G7E_SessionCreateManyUserInputEnvelope
    connect?: G7E_SessionWhereUniqueInput | G7E_SessionWhereUniqueInput[]
  }

  export type G7E_AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<G7E_AccountCreateWithoutUserInput, G7E_AccountUncheckedCreateWithoutUserInput> | G7E_AccountCreateWithoutUserInput[] | G7E_AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: G7E_AccountCreateOrConnectWithoutUserInput | G7E_AccountCreateOrConnectWithoutUserInput[]
    createMany?: G7E_AccountCreateManyUserInputEnvelope
    connect?: G7E_AccountWhereUniqueInput | G7E_AccountWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type G7E_SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<G7E_SessionCreateWithoutUserInput, G7E_SessionUncheckedCreateWithoutUserInput> | G7E_SessionCreateWithoutUserInput[] | G7E_SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: G7E_SessionCreateOrConnectWithoutUserInput | G7E_SessionCreateOrConnectWithoutUserInput[]
    upsert?: G7E_SessionUpsertWithWhereUniqueWithoutUserInput | G7E_SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: G7E_SessionCreateManyUserInputEnvelope
    set?: G7E_SessionWhereUniqueInput | G7E_SessionWhereUniqueInput[]
    disconnect?: G7E_SessionWhereUniqueInput | G7E_SessionWhereUniqueInput[]
    delete?: G7E_SessionWhereUniqueInput | G7E_SessionWhereUniqueInput[]
    connect?: G7E_SessionWhereUniqueInput | G7E_SessionWhereUniqueInput[]
    update?: G7E_SessionUpdateWithWhereUniqueWithoutUserInput | G7E_SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: G7E_SessionUpdateManyWithWhereWithoutUserInput | G7E_SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: G7E_SessionScalarWhereInput | G7E_SessionScalarWhereInput[]
  }

  export type G7E_AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<G7E_AccountCreateWithoutUserInput, G7E_AccountUncheckedCreateWithoutUserInput> | G7E_AccountCreateWithoutUserInput[] | G7E_AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: G7E_AccountCreateOrConnectWithoutUserInput | G7E_AccountCreateOrConnectWithoutUserInput[]
    upsert?: G7E_AccountUpsertWithWhereUniqueWithoutUserInput | G7E_AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: G7E_AccountCreateManyUserInputEnvelope
    set?: G7E_AccountWhereUniqueInput | G7E_AccountWhereUniqueInput[]
    disconnect?: G7E_AccountWhereUniqueInput | G7E_AccountWhereUniqueInput[]
    delete?: G7E_AccountWhereUniqueInput | G7E_AccountWhereUniqueInput[]
    connect?: G7E_AccountWhereUniqueInput | G7E_AccountWhereUniqueInput[]
    update?: G7E_AccountUpdateWithWhereUniqueWithoutUserInput | G7E_AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: G7E_AccountUpdateManyWithWhereWithoutUserInput | G7E_AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: G7E_AccountScalarWhereInput | G7E_AccountScalarWhereInput[]
  }

  export type G7E_SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<G7E_SessionCreateWithoutUserInput, G7E_SessionUncheckedCreateWithoutUserInput> | G7E_SessionCreateWithoutUserInput[] | G7E_SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: G7E_SessionCreateOrConnectWithoutUserInput | G7E_SessionCreateOrConnectWithoutUserInput[]
    upsert?: G7E_SessionUpsertWithWhereUniqueWithoutUserInput | G7E_SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: G7E_SessionCreateManyUserInputEnvelope
    set?: G7E_SessionWhereUniqueInput | G7E_SessionWhereUniqueInput[]
    disconnect?: G7E_SessionWhereUniqueInput | G7E_SessionWhereUniqueInput[]
    delete?: G7E_SessionWhereUniqueInput | G7E_SessionWhereUniqueInput[]
    connect?: G7E_SessionWhereUniqueInput | G7E_SessionWhereUniqueInput[]
    update?: G7E_SessionUpdateWithWhereUniqueWithoutUserInput | G7E_SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: G7E_SessionUpdateManyWithWhereWithoutUserInput | G7E_SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: G7E_SessionScalarWhereInput | G7E_SessionScalarWhereInput[]
  }

  export type G7E_AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<G7E_AccountCreateWithoutUserInput, G7E_AccountUncheckedCreateWithoutUserInput> | G7E_AccountCreateWithoutUserInput[] | G7E_AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: G7E_AccountCreateOrConnectWithoutUserInput | G7E_AccountCreateOrConnectWithoutUserInput[]
    upsert?: G7E_AccountUpsertWithWhereUniqueWithoutUserInput | G7E_AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: G7E_AccountCreateManyUserInputEnvelope
    set?: G7E_AccountWhereUniqueInput | G7E_AccountWhereUniqueInput[]
    disconnect?: G7E_AccountWhereUniqueInput | G7E_AccountWhereUniqueInput[]
    delete?: G7E_AccountWhereUniqueInput | G7E_AccountWhereUniqueInput[]
    connect?: G7E_AccountWhereUniqueInput | G7E_AccountWhereUniqueInput[]
    update?: G7E_AccountUpdateWithWhereUniqueWithoutUserInput | G7E_AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: G7E_AccountUpdateManyWithWhereWithoutUserInput | G7E_AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: G7E_AccountScalarWhereInput | G7E_AccountScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type G7E_UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<G7E_UserCreateWithoutAccountsInput, G7E_UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: G7E_UserCreateOrConnectWithoutAccountsInput
    connect?: G7E_UserWhereUniqueInput
  }

  export type G7E_UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<G7E_UserCreateWithoutAccountsInput, G7E_UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: G7E_UserCreateOrConnectWithoutAccountsInput
    upsert?: G7E_UserUpsertWithoutAccountsInput
    connect?: G7E_UserWhereUniqueInput
    update?: XOR<XOR<G7E_UserUpdateToOneWithWhereWithoutAccountsInput, G7E_UserUpdateWithoutAccountsInput>, G7E_UserUncheckedUpdateWithoutAccountsInput>
  }

  export type G7E_UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<G7E_UserCreateWithoutSessionsInput, G7E_UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: G7E_UserCreateOrConnectWithoutSessionsInput
    connect?: G7E_UserWhereUniqueInput
  }

  export type G7E_UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<G7E_UserCreateWithoutSessionsInput, G7E_UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: G7E_UserCreateOrConnectWithoutSessionsInput
    upsert?: G7E_UserUpsertWithoutSessionsInput
    connect?: G7E_UserWhereUniqueInput
    update?: XOR<XOR<G7E_UserUpdateToOneWithWhereWithoutSessionsInput, G7E_UserUpdateWithoutSessionsInput>, G7E_UserUncheckedUpdateWithoutSessionsInput>
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

  export type G7E_SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type G7E_SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type G7E_SessionCreateOrConnectWithoutUserInput = {
    where: G7E_SessionWhereUniqueInput
    create: XOR<G7E_SessionCreateWithoutUserInput, G7E_SessionUncheckedCreateWithoutUserInput>
  }

  export type G7E_SessionCreateManyUserInputEnvelope = {
    data: G7E_SessionCreateManyUserInput | G7E_SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type G7E_AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type G7E_AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type G7E_AccountCreateOrConnectWithoutUserInput = {
    where: G7E_AccountWhereUniqueInput
    create: XOR<G7E_AccountCreateWithoutUserInput, G7E_AccountUncheckedCreateWithoutUserInput>
  }

  export type G7E_AccountCreateManyUserInputEnvelope = {
    data: G7E_AccountCreateManyUserInput | G7E_AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type G7E_SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: G7E_SessionWhereUniqueInput
    update: XOR<G7E_SessionUpdateWithoutUserInput, G7E_SessionUncheckedUpdateWithoutUserInput>
    create: XOR<G7E_SessionCreateWithoutUserInput, G7E_SessionUncheckedCreateWithoutUserInput>
  }

  export type G7E_SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: G7E_SessionWhereUniqueInput
    data: XOR<G7E_SessionUpdateWithoutUserInput, G7E_SessionUncheckedUpdateWithoutUserInput>
  }

  export type G7E_SessionUpdateManyWithWhereWithoutUserInput = {
    where: G7E_SessionScalarWhereInput
    data: XOR<G7E_SessionUpdateManyMutationInput, G7E_SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type G7E_SessionScalarWhereInput = {
    AND?: G7E_SessionScalarWhereInput | G7E_SessionScalarWhereInput[]
    OR?: G7E_SessionScalarWhereInput[]
    NOT?: G7E_SessionScalarWhereInput | G7E_SessionScalarWhereInput[]
    id?: StringFilter<"G7E_Session"> | string
    sessionToken?: StringFilter<"G7E_Session"> | string
    userId?: StringFilter<"G7E_Session"> | string
    expires?: DateTimeFilter<"G7E_Session"> | Date | string
  }

  export type G7E_AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: G7E_AccountWhereUniqueInput
    update: XOR<G7E_AccountUpdateWithoutUserInput, G7E_AccountUncheckedUpdateWithoutUserInput>
    create: XOR<G7E_AccountCreateWithoutUserInput, G7E_AccountUncheckedCreateWithoutUserInput>
  }

  export type G7E_AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: G7E_AccountWhereUniqueInput
    data: XOR<G7E_AccountUpdateWithoutUserInput, G7E_AccountUncheckedUpdateWithoutUserInput>
  }

  export type G7E_AccountUpdateManyWithWhereWithoutUserInput = {
    where: G7E_AccountScalarWhereInput
    data: XOR<G7E_AccountUpdateManyMutationInput, G7E_AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type G7E_AccountScalarWhereInput = {
    AND?: G7E_AccountScalarWhereInput | G7E_AccountScalarWhereInput[]
    OR?: G7E_AccountScalarWhereInput[]
    NOT?: G7E_AccountScalarWhereInput | G7E_AccountScalarWhereInput[]
    id?: StringFilter<"G7E_Account"> | string
    userId?: StringFilter<"G7E_Account"> | string
    type?: StringFilter<"G7E_Account"> | string
    provider?: StringFilter<"G7E_Account"> | string
    providerAccountId?: StringFilter<"G7E_Account"> | string
    refresh_token?: StringNullableFilter<"G7E_Account"> | string | null
    access_token?: StringNullableFilter<"G7E_Account"> | string | null
    expires_at?: IntNullableFilter<"G7E_Account"> | number | null
    token_type?: StringNullableFilter<"G7E_Account"> | string | null
    scope?: StringNullableFilter<"G7E_Account"> | string | null
    id_token?: StringNullableFilter<"G7E_Account"> | string | null
    session_state?: StringNullableFilter<"G7E_Account"> | string | null
  }

  export type G7E_UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: G7E_SessionCreateNestedManyWithoutUserInput
  }

  export type G7E_UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: G7E_SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type G7E_UserCreateOrConnectWithoutAccountsInput = {
    where: G7E_UserWhereUniqueInput
    create: XOR<G7E_UserCreateWithoutAccountsInput, G7E_UserUncheckedCreateWithoutAccountsInput>
  }

  export type G7E_UserUpsertWithoutAccountsInput = {
    update: XOR<G7E_UserUpdateWithoutAccountsInput, G7E_UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<G7E_UserCreateWithoutAccountsInput, G7E_UserUncheckedCreateWithoutAccountsInput>
    where?: G7E_UserWhereInput
  }

  export type G7E_UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: G7E_UserWhereInput
    data: XOR<G7E_UserUpdateWithoutAccountsInput, G7E_UserUncheckedUpdateWithoutAccountsInput>
  }

  export type G7E_UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: G7E_SessionUpdateManyWithoutUserNestedInput
  }

  export type G7E_UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: G7E_SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type G7E_UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: G7E_AccountCreateNestedManyWithoutUserInput
  }

  export type G7E_UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: G7E_AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type G7E_UserCreateOrConnectWithoutSessionsInput = {
    where: G7E_UserWhereUniqueInput
    create: XOR<G7E_UserCreateWithoutSessionsInput, G7E_UserUncheckedCreateWithoutSessionsInput>
  }

  export type G7E_UserUpsertWithoutSessionsInput = {
    update: XOR<G7E_UserUpdateWithoutSessionsInput, G7E_UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<G7E_UserCreateWithoutSessionsInput, G7E_UserUncheckedCreateWithoutSessionsInput>
    where?: G7E_UserWhereInput
  }

  export type G7E_UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: G7E_UserWhereInput
    data: XOR<G7E_UserUpdateWithoutSessionsInput, G7E_UserUncheckedUpdateWithoutSessionsInput>
  }

  export type G7E_UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: G7E_AccountUpdateManyWithoutUserNestedInput
  }

  export type G7E_UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: G7E_AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type G7E_SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type G7E_AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type G7E_SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type G7E_SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type G7E_SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type G7E_AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type G7E_AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type G7E_AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
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