
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Proveedor
 * 
 */
export type Proveedor = $Result.DefaultSelection<Prisma.$ProveedorPayload>
/**
 * Model Producto
 * 
 */
export type Producto = $Result.DefaultSelection<Prisma.$ProductoPayload>
/**
 * Model Venta
 * 
 */
export type Venta = $Result.DefaultSelection<Prisma.$VentaPayload>
/**
 * Model DetalleVenta
 * 
 */
export type DetalleVenta = $Result.DefaultSelection<Prisma.$DetalleVentaPayload>
/**
 * Model Movimiento
 * 
 */
export type Movimiento = $Result.DefaultSelection<Prisma.$MovimientoPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Rol
 * 
 */
export type Rol = $Result.DefaultSelection<Prisma.$RolPayload>
/**
 * Model Permiso
 * 
 */
export type Permiso = $Result.DefaultSelection<Prisma.$PermisoPayload>
/**
 * Model RolPermiso
 * 
 */
export type RolPermiso = $Result.DefaultSelection<Prisma.$RolPermisoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoMovimiento: {
  ENTRADA: 'ENTRADA',
  SALIDA: 'SALIDA',
  AJUSTE: 'AJUSTE'
};

export type TipoMovimiento = (typeof TipoMovimiento)[keyof typeof TipoMovimiento]


export const MetodoPago: {
  EFECTIVO: 'EFECTIVO',
  TARJETA: 'TARJETA',
  TRANSFERENCIA: 'TRANSFERENCIA'
};

export type MetodoPago = (typeof MetodoPago)[keyof typeof MetodoPago]

}

export type TipoMovimiento = $Enums.TipoMovimiento

export const TipoMovimiento: typeof $Enums.TipoMovimiento

export type MetodoPago = $Enums.MetodoPago

export const MetodoPago: typeof $Enums.MetodoPago

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Categorias
 * const categorias = await prisma.categoria.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Categorias
   * const categorias = await prisma.categoria.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proveedor`: Exposes CRUD operations for the **Proveedor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proveedors
    * const proveedors = await prisma.proveedor.findMany()
    * ```
    */
  get proveedor(): Prisma.ProveedorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **Producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.ProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venta`: Exposes CRUD operations for the **Venta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ventas
    * const ventas = await prisma.venta.findMany()
    * ```
    */
  get venta(): Prisma.VentaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalleVenta`: Exposes CRUD operations for the **DetalleVenta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetalleVentas
    * const detalleVentas = await prisma.detalleVenta.findMany()
    * ```
    */
  get detalleVenta(): Prisma.DetalleVentaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movimiento`: Exposes CRUD operations for the **Movimiento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movimientos
    * const movimientos = await prisma.movimiento.findMany()
    * ```
    */
  get movimiento(): Prisma.MovimientoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rol`: Exposes CRUD operations for the **Rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rols
    * const rols = await prisma.rol.findMany()
    * ```
    */
  get rol(): Prisma.RolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permiso`: Exposes CRUD operations for the **Permiso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permisos
    * const permisos = await prisma.permiso.findMany()
    * ```
    */
  get permiso(): Prisma.PermisoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rolPermiso`: Exposes CRUD operations for the **RolPermiso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolPermisos
    * const rolPermisos = await prisma.rolPermiso.findMany()
    * ```
    */
  get rolPermiso(): Prisma.RolPermisoDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    Categoria: 'Categoria',
    Proveedor: 'Proveedor',
    Producto: 'Producto',
    Venta: 'Venta',
    DetalleVenta: 'DetalleVenta',
    Movimiento: 'Movimiento',
    Usuario: 'Usuario',
    Rol: 'Rol',
    Permiso: 'Permiso',
    RolPermiso: 'RolPermiso'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "categoria" | "proveedor" | "producto" | "venta" | "detalleVenta" | "movimiento" | "usuario" | "rol" | "permiso" | "rolPermiso"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Proveedor: {
        payload: Prisma.$ProveedorPayload<ExtArgs>
        fields: Prisma.ProveedorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProveedorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProveedorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          findFirst: {
            args: Prisma.ProveedorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProveedorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          findMany: {
            args: Prisma.ProveedorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>[]
          }
          create: {
            args: Prisma.ProveedorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          createMany: {
            args: Prisma.ProveedorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProveedorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>[]
          }
          delete: {
            args: Prisma.ProveedorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          update: {
            args: Prisma.ProveedorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          deleteMany: {
            args: Prisma.ProveedorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProveedorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProveedorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>[]
          }
          upsert: {
            args: Prisma.ProveedorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          aggregate: {
            args: Prisma.ProveedorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProveedor>
          }
          groupBy: {
            args: Prisma.ProveedorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProveedorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProveedorCountArgs<ExtArgs>
            result: $Utils.Optional<ProveedorCountAggregateOutputType> | number
          }
        }
      }
      Producto: {
        payload: Prisma.$ProductoPayload<ExtArgs>
        fields: Prisma.ProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findFirst: {
            args: Prisma.ProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findMany: {
            args: Prisma.ProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          create: {
            args: Prisma.ProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          createMany: {
            args: Prisma.ProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          delete: {
            args: Prisma.ProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          update: {
            args: Prisma.ProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          deleteMany: {
            args: Prisma.ProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          upsert: {
            args: Prisma.ProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.ProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      Venta: {
        payload: Prisma.$VentaPayload<ExtArgs>
        fields: Prisma.VentaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VentaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VentaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          findFirst: {
            args: Prisma.VentaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VentaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          findMany: {
            args: Prisma.VentaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>[]
          }
          create: {
            args: Prisma.VentaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          createMany: {
            args: Prisma.VentaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VentaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>[]
          }
          delete: {
            args: Prisma.VentaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          update: {
            args: Prisma.VentaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          deleteMany: {
            args: Prisma.VentaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VentaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VentaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>[]
          }
          upsert: {
            args: Prisma.VentaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          aggregate: {
            args: Prisma.VentaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenta>
          }
          groupBy: {
            args: Prisma.VentaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VentaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VentaCountArgs<ExtArgs>
            result: $Utils.Optional<VentaCountAggregateOutputType> | number
          }
        }
      }
      DetalleVenta: {
        payload: Prisma.$DetalleVentaPayload<ExtArgs>
        fields: Prisma.DetalleVentaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetalleVentaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleVentaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetalleVentaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleVentaPayload>
          }
          findFirst: {
            args: Prisma.DetalleVentaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleVentaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetalleVentaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleVentaPayload>
          }
          findMany: {
            args: Prisma.DetalleVentaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleVentaPayload>[]
          }
          create: {
            args: Prisma.DetalleVentaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleVentaPayload>
          }
          createMany: {
            args: Prisma.DetalleVentaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetalleVentaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleVentaPayload>[]
          }
          delete: {
            args: Prisma.DetalleVentaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleVentaPayload>
          }
          update: {
            args: Prisma.DetalleVentaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleVentaPayload>
          }
          deleteMany: {
            args: Prisma.DetalleVentaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetalleVentaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DetalleVentaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleVentaPayload>[]
          }
          upsert: {
            args: Prisma.DetalleVentaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleVentaPayload>
          }
          aggregate: {
            args: Prisma.DetalleVentaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalleVenta>
          }
          groupBy: {
            args: Prisma.DetalleVentaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetalleVentaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetalleVentaCountArgs<ExtArgs>
            result: $Utils.Optional<DetalleVentaCountAggregateOutputType> | number
          }
        }
      }
      Movimiento: {
        payload: Prisma.$MovimientoPayload<ExtArgs>
        fields: Prisma.MovimientoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovimientoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovimientoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoPayload>
          }
          findFirst: {
            args: Prisma.MovimientoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovimientoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoPayload>
          }
          findMany: {
            args: Prisma.MovimientoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoPayload>[]
          }
          create: {
            args: Prisma.MovimientoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoPayload>
          }
          createMany: {
            args: Prisma.MovimientoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovimientoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoPayload>[]
          }
          delete: {
            args: Prisma.MovimientoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoPayload>
          }
          update: {
            args: Prisma.MovimientoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoPayload>
          }
          deleteMany: {
            args: Prisma.MovimientoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovimientoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovimientoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoPayload>[]
          }
          upsert: {
            args: Prisma.MovimientoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoPayload>
          }
          aggregate: {
            args: Prisma.MovimientoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovimiento>
          }
          groupBy: {
            args: Prisma.MovimientoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovimientoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovimientoCountArgs<ExtArgs>
            result: $Utils.Optional<MovimientoCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Rol: {
        payload: Prisma.$RolPayload<ExtArgs>
        fields: Prisma.RolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findFirst: {
            args: Prisma.RolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findMany: {
            args: Prisma.RolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          create: {
            args: Prisma.RolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          createMany: {
            args: Prisma.RolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          delete: {
            args: Prisma.RolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          update: {
            args: Prisma.RolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          deleteMany: {
            args: Prisma.RolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          upsert: {
            args: Prisma.RolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          aggregate: {
            args: Prisma.RolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol>
          }
          groupBy: {
            args: Prisma.RolGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolCountArgs<ExtArgs>
            result: $Utils.Optional<RolCountAggregateOutputType> | number
          }
        }
      }
      Permiso: {
        payload: Prisma.$PermisoPayload<ExtArgs>
        fields: Prisma.PermisoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermisoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermisoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          findFirst: {
            args: Prisma.PermisoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermisoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          findMany: {
            args: Prisma.PermisoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>[]
          }
          create: {
            args: Prisma.PermisoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          createMany: {
            args: Prisma.PermisoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermisoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>[]
          }
          delete: {
            args: Prisma.PermisoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          update: {
            args: Prisma.PermisoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          deleteMany: {
            args: Prisma.PermisoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermisoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermisoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>[]
          }
          upsert: {
            args: Prisma.PermisoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          aggregate: {
            args: Prisma.PermisoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermiso>
          }
          groupBy: {
            args: Prisma.PermisoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermisoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermisoCountArgs<ExtArgs>
            result: $Utils.Optional<PermisoCountAggregateOutputType> | number
          }
        }
      }
      RolPermiso: {
        payload: Prisma.$RolPermisoPayload<ExtArgs>
        fields: Prisma.RolPermisoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolPermisoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolPermisoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          findFirst: {
            args: Prisma.RolPermisoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolPermisoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          findMany: {
            args: Prisma.RolPermisoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>[]
          }
          create: {
            args: Prisma.RolPermisoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          createMany: {
            args: Prisma.RolPermisoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolPermisoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>[]
          }
          delete: {
            args: Prisma.RolPermisoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          update: {
            args: Prisma.RolPermisoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          deleteMany: {
            args: Prisma.RolPermisoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolPermisoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolPermisoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>[]
          }
          upsert: {
            args: Prisma.RolPermisoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          aggregate: {
            args: Prisma.RolPermisoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolPermiso>
          }
          groupBy: {
            args: Prisma.RolPermisoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolPermisoGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolPermisoCountArgs<ExtArgs>
            result: $Utils.Optional<RolPermisoCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    categoria?: CategoriaOmit
    proveedor?: ProveedorOmit
    producto?: ProductoOmit
    venta?: VentaOmit
    detalleVenta?: DetalleVentaOmit
    movimiento?: MovimientoOmit
    usuario?: UsuarioOmit
    rol?: RolOmit
    permiso?: PermisoOmit
    rolPermiso?: RolPermisoOmit
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
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    productos: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | CategoriaCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
  }


  /**
   * Count Type ProveedorCountOutputType
   */

  export type ProveedorCountOutputType = {
    productos: number
  }

  export type ProveedorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | ProveedorCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * ProveedorCountOutputType without action
   */
  export type ProveedorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProveedorCountOutputType
     */
    select?: ProveedorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProveedorCountOutputType without action
   */
  export type ProveedorCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
  }


  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    detalleVentas: number
    movimientos: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalleVentas?: boolean | ProductoCountOutputTypeCountDetalleVentasArgs
    movimientos?: boolean | ProductoCountOutputTypeCountMovimientosArgs
  }

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountDetalleVentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleVentaWhereInput
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountMovimientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimientoWhereInput
  }


  /**
   * Count Type VentaCountOutputType
   */

  export type VentaCountOutputType = {
    detalles: number
  }

  export type VentaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | VentaCountOutputTypeCountDetallesArgs
  }

  // Custom InputTypes
  /**
   * VentaCountOutputType without action
   */
  export type VentaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaCountOutputType
     */
    select?: VentaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VentaCountOutputType without action
   */
  export type VentaCountOutputTypeCountDetallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleVentaWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    ventas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas?: boolean | UsuarioCountOutputTypeCountVentasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountVentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaWhereInput
  }


  /**
   * Count Type RolCountOutputType
   */

  export type RolCountOutputType = {
    usuarios: number
    permisos: number
  }

  export type RolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | RolCountOutputTypeCountUsuariosArgs
    permisos?: boolean | RolCountOutputTypeCountPermisosArgs
  }

  // Custom InputTypes
  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolCountOutputType
     */
    select?: RolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountPermisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolPermisoWhereInput
  }


  /**
   * Count Type PermisoCountOutputType
   */

  export type PermisoCountOutputType = {
    roles: number
  }

  export type PermisoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | PermisoCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * PermisoCountOutputType without action
   */
  export type PermisoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermisoCountOutputType
     */
    select?: PermisoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermisoCountOutputType without action
   */
  export type PermisoCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolPermisoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
    descuento: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
    descuento: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    descuento: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    descuento: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    descuento: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
    descuento?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
    descuento?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    descuento?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    descuento?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    descuento?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    descuento: number
    createdAt: Date
    updatedAt: Date
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    descuento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productos?: boolean | Categoria$productosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    descuento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    descuento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    descuento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "descuento" | "createdAt" | "updatedAt", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | Categoria$productosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      productos: Prisma.$ProductoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
      descuento: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
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
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends Categoria$productosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly nombre: FieldRef<"Categoria", 'String'>
    readonly descripcion: FieldRef<"Categoria", 'String'>
    readonly descuento: FieldRef<"Categoria", 'Float'>
    readonly createdAt: FieldRef<"Categoria", 'DateTime'>
    readonly updatedAt: FieldRef<"Categoria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.productos
   */
  export type Categoria$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    cursor?: ProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Proveedor
   */

  export type AggregateProveedor = {
    _count: ProveedorCountAggregateOutputType | null
    _avg: ProveedorAvgAggregateOutputType | null
    _sum: ProveedorSumAggregateOutputType | null
    _min: ProveedorMinAggregateOutputType | null
    _max: ProveedorMaxAggregateOutputType | null
  }

  export type ProveedorAvgAggregateOutputType = {
    id: number | null
  }

  export type ProveedorSumAggregateOutputType = {
    id: number | null
  }

  export type ProveedorMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    telefono: string | null
    email: string | null
    direccion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProveedorMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    telefono: string | null
    email: string | null
    direccion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProveedorCountAggregateOutputType = {
    id: number
    nombre: number
    telefono: number
    email: number
    direccion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProveedorAvgAggregateInputType = {
    id?: true
  }

  export type ProveedorSumAggregateInputType = {
    id?: true
  }

  export type ProveedorMinAggregateInputType = {
    id?: true
    nombre?: true
    telefono?: true
    email?: true
    direccion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProveedorMaxAggregateInputType = {
    id?: true
    nombre?: true
    telefono?: true
    email?: true
    direccion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProveedorCountAggregateInputType = {
    id?: true
    nombre?: true
    telefono?: true
    email?: true
    direccion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProveedorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proveedor to aggregate.
     */
    where?: ProveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedors to fetch.
     */
    orderBy?: ProveedorOrderByWithRelationInput | ProveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proveedors
    **/
    _count?: true | ProveedorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProveedorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProveedorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProveedorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProveedorMaxAggregateInputType
  }

  export type GetProveedorAggregateType<T extends ProveedorAggregateArgs> = {
        [P in keyof T & keyof AggregateProveedor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProveedor[P]>
      : GetScalarType<T[P], AggregateProveedor[P]>
  }




  export type ProveedorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProveedorWhereInput
    orderBy?: ProveedorOrderByWithAggregationInput | ProveedorOrderByWithAggregationInput[]
    by: ProveedorScalarFieldEnum[] | ProveedorScalarFieldEnum
    having?: ProveedorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProveedorCountAggregateInputType | true
    _avg?: ProveedorAvgAggregateInputType
    _sum?: ProveedorSumAggregateInputType
    _min?: ProveedorMinAggregateInputType
    _max?: ProveedorMaxAggregateInputType
  }

  export type ProveedorGroupByOutputType = {
    id: number
    nombre: string
    telefono: string | null
    email: string | null
    direccion: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProveedorCountAggregateOutputType | null
    _avg: ProveedorAvgAggregateOutputType | null
    _sum: ProveedorSumAggregateOutputType | null
    _min: ProveedorMinAggregateOutputType | null
    _max: ProveedorMaxAggregateOutputType | null
  }

  type GetProveedorGroupByPayload<T extends ProveedorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProveedorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProveedorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProveedorGroupByOutputType[P]>
            : GetScalarType<T[P], ProveedorGroupByOutputType[P]>
        }
      >
    >


  export type ProveedorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    telefono?: boolean
    email?: boolean
    direccion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productos?: boolean | Proveedor$productosArgs<ExtArgs>
    _count?: boolean | ProveedorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proveedor"]>

  export type ProveedorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    telefono?: boolean
    email?: boolean
    direccion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["proveedor"]>

  export type ProveedorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    telefono?: boolean
    email?: boolean
    direccion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["proveedor"]>

  export type ProveedorSelectScalar = {
    id?: boolean
    nombre?: boolean
    telefono?: boolean
    email?: boolean
    direccion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProveedorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "telefono" | "email" | "direccion" | "createdAt" | "updatedAt", ExtArgs["result"]["proveedor"]>
  export type ProveedorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | Proveedor$productosArgs<ExtArgs>
    _count?: boolean | ProveedorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProveedorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProveedorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProveedorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proveedor"
    objects: {
      productos: Prisma.$ProductoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      telefono: string | null
      email: string | null
      direccion: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["proveedor"]>
    composites: {}
  }

  type ProveedorGetPayload<S extends boolean | null | undefined | ProveedorDefaultArgs> = $Result.GetResult<Prisma.$ProveedorPayload, S>

  type ProveedorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProveedorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProveedorCountAggregateInputType | true
    }

  export interface ProveedorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proveedor'], meta: { name: 'Proveedor' } }
    /**
     * Find zero or one Proveedor that matches the filter.
     * @param {ProveedorFindUniqueArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProveedorFindUniqueArgs>(args: SelectSubset<T, ProveedorFindUniqueArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proveedor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProveedorFindUniqueOrThrowArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProveedorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProveedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proveedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorFindFirstArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProveedorFindFirstArgs>(args?: SelectSubset<T, ProveedorFindFirstArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proveedor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorFindFirstOrThrowArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProveedorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProveedorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proveedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proveedors
     * const proveedors = await prisma.proveedor.findMany()
     * 
     * // Get first 10 Proveedors
     * const proveedors = await prisma.proveedor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proveedorWithIdOnly = await prisma.proveedor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProveedorFindManyArgs>(args?: SelectSubset<T, ProveedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proveedor.
     * @param {ProveedorCreateArgs} args - Arguments to create a Proveedor.
     * @example
     * // Create one Proveedor
     * const Proveedor = await prisma.proveedor.create({
     *   data: {
     *     // ... data to create a Proveedor
     *   }
     * })
     * 
     */
    create<T extends ProveedorCreateArgs>(args: SelectSubset<T, ProveedorCreateArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proveedors.
     * @param {ProveedorCreateManyArgs} args - Arguments to create many Proveedors.
     * @example
     * // Create many Proveedors
     * const proveedor = await prisma.proveedor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProveedorCreateManyArgs>(args?: SelectSubset<T, ProveedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proveedors and returns the data saved in the database.
     * @param {ProveedorCreateManyAndReturnArgs} args - Arguments to create many Proveedors.
     * @example
     * // Create many Proveedors
     * const proveedor = await prisma.proveedor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proveedors and only return the `id`
     * const proveedorWithIdOnly = await prisma.proveedor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProveedorCreateManyAndReturnArgs>(args?: SelectSubset<T, ProveedorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proveedor.
     * @param {ProveedorDeleteArgs} args - Arguments to delete one Proveedor.
     * @example
     * // Delete one Proveedor
     * const Proveedor = await prisma.proveedor.delete({
     *   where: {
     *     // ... filter to delete one Proveedor
     *   }
     * })
     * 
     */
    delete<T extends ProveedorDeleteArgs>(args: SelectSubset<T, ProveedorDeleteArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proveedor.
     * @param {ProveedorUpdateArgs} args - Arguments to update one Proveedor.
     * @example
     * // Update one Proveedor
     * const proveedor = await prisma.proveedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProveedorUpdateArgs>(args: SelectSubset<T, ProveedorUpdateArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proveedors.
     * @param {ProveedorDeleteManyArgs} args - Arguments to filter Proveedors to delete.
     * @example
     * // Delete a few Proveedors
     * const { count } = await prisma.proveedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProveedorDeleteManyArgs>(args?: SelectSubset<T, ProveedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proveedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proveedors
     * const proveedor = await prisma.proveedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProveedorUpdateManyArgs>(args: SelectSubset<T, ProveedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proveedors and returns the data updated in the database.
     * @param {ProveedorUpdateManyAndReturnArgs} args - Arguments to update many Proveedors.
     * @example
     * // Update many Proveedors
     * const proveedor = await prisma.proveedor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Proveedors and only return the `id`
     * const proveedorWithIdOnly = await prisma.proveedor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProveedorUpdateManyAndReturnArgs>(args: SelectSubset<T, ProveedorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proveedor.
     * @param {ProveedorUpsertArgs} args - Arguments to update or create a Proveedor.
     * @example
     * // Update or create a Proveedor
     * const proveedor = await prisma.proveedor.upsert({
     *   create: {
     *     // ... data to create a Proveedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proveedor we want to update
     *   }
     * })
     */
    upsert<T extends ProveedorUpsertArgs>(args: SelectSubset<T, ProveedorUpsertArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proveedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorCountArgs} args - Arguments to filter Proveedors to count.
     * @example
     * // Count the number of Proveedors
     * const count = await prisma.proveedor.count({
     *   where: {
     *     // ... the filter for the Proveedors we want to count
     *   }
     * })
    **/
    count<T extends ProveedorCountArgs>(
      args?: Subset<T, ProveedorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProveedorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proveedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProveedorAggregateArgs>(args: Subset<T, ProveedorAggregateArgs>): Prisma.PrismaPromise<GetProveedorAggregateType<T>>

    /**
     * Group by Proveedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorGroupByArgs} args - Group by arguments.
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
      T extends ProveedorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProveedorGroupByArgs['orderBy'] }
        : { orderBy?: ProveedorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProveedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProveedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proveedor model
   */
  readonly fields: ProveedorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proveedor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProveedorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends Proveedor$productosArgs<ExtArgs> = {}>(args?: Subset<T, Proveedor$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Proveedor model
   */
  interface ProveedorFieldRefs {
    readonly id: FieldRef<"Proveedor", 'Int'>
    readonly nombre: FieldRef<"Proveedor", 'String'>
    readonly telefono: FieldRef<"Proveedor", 'String'>
    readonly email: FieldRef<"Proveedor", 'String'>
    readonly direccion: FieldRef<"Proveedor", 'String'>
    readonly createdAt: FieldRef<"Proveedor", 'DateTime'>
    readonly updatedAt: FieldRef<"Proveedor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Proveedor findUnique
   */
  export type ProveedorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedor to fetch.
     */
    where: ProveedorWhereUniqueInput
  }

  /**
   * Proveedor findUniqueOrThrow
   */
  export type ProveedorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedor to fetch.
     */
    where: ProveedorWhereUniqueInput
  }

  /**
   * Proveedor findFirst
   */
  export type ProveedorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedor to fetch.
     */
    where?: ProveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedors to fetch.
     */
    orderBy?: ProveedorOrderByWithRelationInput | ProveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proveedors.
     */
    cursor?: ProveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proveedors.
     */
    distinct?: ProveedorScalarFieldEnum | ProveedorScalarFieldEnum[]
  }

  /**
   * Proveedor findFirstOrThrow
   */
  export type ProveedorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedor to fetch.
     */
    where?: ProveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedors to fetch.
     */
    orderBy?: ProveedorOrderByWithRelationInput | ProveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proveedors.
     */
    cursor?: ProveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proveedors.
     */
    distinct?: ProveedorScalarFieldEnum | ProveedorScalarFieldEnum[]
  }

  /**
   * Proveedor findMany
   */
  export type ProveedorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedors to fetch.
     */
    where?: ProveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedors to fetch.
     */
    orderBy?: ProveedorOrderByWithRelationInput | ProveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proveedors.
     */
    cursor?: ProveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proveedors.
     */
    distinct?: ProveedorScalarFieldEnum | ProveedorScalarFieldEnum[]
  }

  /**
   * Proveedor create
   */
  export type ProveedorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * The data needed to create a Proveedor.
     */
    data: XOR<ProveedorCreateInput, ProveedorUncheckedCreateInput>
  }

  /**
   * Proveedor createMany
   */
  export type ProveedorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proveedors.
     */
    data: ProveedorCreateManyInput | ProveedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proveedor createManyAndReturn
   */
  export type ProveedorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * The data used to create many Proveedors.
     */
    data: ProveedorCreateManyInput | ProveedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proveedor update
   */
  export type ProveedorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * The data needed to update a Proveedor.
     */
    data: XOR<ProveedorUpdateInput, ProveedorUncheckedUpdateInput>
    /**
     * Choose, which Proveedor to update.
     */
    where: ProveedorWhereUniqueInput
  }

  /**
   * Proveedor updateMany
   */
  export type ProveedorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proveedors.
     */
    data: XOR<ProveedorUpdateManyMutationInput, ProveedorUncheckedUpdateManyInput>
    /**
     * Filter which Proveedors to update
     */
    where?: ProveedorWhereInput
    /**
     * Limit how many Proveedors to update.
     */
    limit?: number
  }

  /**
   * Proveedor updateManyAndReturn
   */
  export type ProveedorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * The data used to update Proveedors.
     */
    data: XOR<ProveedorUpdateManyMutationInput, ProveedorUncheckedUpdateManyInput>
    /**
     * Filter which Proveedors to update
     */
    where?: ProveedorWhereInput
    /**
     * Limit how many Proveedors to update.
     */
    limit?: number
  }

  /**
   * Proveedor upsert
   */
  export type ProveedorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * The filter to search for the Proveedor to update in case it exists.
     */
    where: ProveedorWhereUniqueInput
    /**
     * In case the Proveedor found by the `where` argument doesn't exist, create a new Proveedor with this data.
     */
    create: XOR<ProveedorCreateInput, ProveedorUncheckedCreateInput>
    /**
     * In case the Proveedor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProveedorUpdateInput, ProveedorUncheckedUpdateInput>
  }

  /**
   * Proveedor delete
   */
  export type ProveedorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter which Proveedor to delete.
     */
    where: ProveedorWhereUniqueInput
  }

  /**
   * Proveedor deleteMany
   */
  export type ProveedorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proveedors to delete
     */
    where?: ProveedorWhereInput
    /**
     * Limit how many Proveedors to delete.
     */
    limit?: number
  }

  /**
   * Proveedor.productos
   */
  export type Proveedor$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    cursor?: ProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Proveedor without action
   */
  export type ProveedorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
  }


  /**
   * Model Producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    id: number | null
    precio: number | null
    stock: number | null
    stockMinimo: number | null
    descuento: number | null
    categoriaId: number | null
    proveedorId: number | null
  }

  export type ProductoSumAggregateOutputType = {
    id: number | null
    precio: number | null
    stock: number | null
    stockMinimo: number | null
    descuento: number | null
    categoriaId: number | null
    proveedorId: number | null
  }

  export type ProductoMinAggregateOutputType = {
    id: number | null
    codigoBarra: string | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    stock: number | null
    stockMinimo: number | null
    descuento: number | null
    categoriaId: number | null
    proveedorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductoMaxAggregateOutputType = {
    id: number | null
    codigoBarra: string | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    stock: number | null
    stockMinimo: number | null
    descuento: number | null
    categoriaId: number | null
    proveedorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductoCountAggregateOutputType = {
    id: number
    codigoBarra: number
    nombre: number
    descripcion: number
    precio: number
    stock: number
    stockMinimo: number
    descuento: number
    categoriaId: number
    proveedorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    id?: true
    precio?: true
    stock?: true
    stockMinimo?: true
    descuento?: true
    categoriaId?: true
    proveedorId?: true
  }

  export type ProductoSumAggregateInputType = {
    id?: true
    precio?: true
    stock?: true
    stockMinimo?: true
    descuento?: true
    categoriaId?: true
    proveedorId?: true
  }

  export type ProductoMinAggregateInputType = {
    id?: true
    codigoBarra?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    stockMinimo?: true
    descuento?: true
    categoriaId?: true
    proveedorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductoMaxAggregateInputType = {
    id?: true
    codigoBarra?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    stockMinimo?: true
    descuento?: true
    categoriaId?: true
    proveedorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductoCountAggregateInputType = {
    id?: true
    codigoBarra?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    stockMinimo?: true
    descuento?: true
    categoriaId?: true
    proveedorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producto to aggregate.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type ProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithAggregationInput | ProductoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: ProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    id: number
    codigoBarra: string | null
    nombre: string
    descripcion: string | null
    precio: number
    stock: number
    stockMinimo: number
    descuento: number
    categoriaId: number
    proveedorId: number
    createdAt: Date
    updatedAt: Date
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type ProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigoBarra?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    stockMinimo?: boolean
    descuento?: boolean
    categoriaId?: boolean
    proveedorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    proveedor?: boolean | ProveedorDefaultArgs<ExtArgs>
    detalleVentas?: boolean | Producto$detalleVentasArgs<ExtArgs>
    movimientos?: boolean | Producto$movimientosArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigoBarra?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    stockMinimo?: boolean
    descuento?: boolean
    categoriaId?: boolean
    proveedorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    proveedor?: boolean | ProveedorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigoBarra?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    stockMinimo?: boolean
    descuento?: boolean
    categoriaId?: boolean
    proveedorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    proveedor?: boolean | ProveedorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectScalar = {
    id?: boolean
    codigoBarra?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    stockMinimo?: boolean
    descuento?: boolean
    categoriaId?: boolean
    proveedorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigoBarra" | "nombre" | "descripcion" | "precio" | "stock" | "stockMinimo" | "descuento" | "categoriaId" | "proveedorId" | "createdAt" | "updatedAt", ExtArgs["result"]["producto"]>
  export type ProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    proveedor?: boolean | ProveedorDefaultArgs<ExtArgs>
    detalleVentas?: boolean | Producto$detalleVentasArgs<ExtArgs>
    movimientos?: boolean | Producto$movimientosArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    proveedor?: boolean | ProveedorDefaultArgs<ExtArgs>
  }
  export type ProductoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    proveedor?: boolean | ProveedorDefaultArgs<ExtArgs>
  }

  export type $ProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producto"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      proveedor: Prisma.$ProveedorPayload<ExtArgs>
      detalleVentas: Prisma.$DetalleVentaPayload<ExtArgs>[]
      movimientos: Prisma.$MovimientoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigoBarra: string | null
      nombre: string
      descripcion: string | null
      precio: number
      stock: number
      stockMinimo: number
      descuento: number
      categoriaId: number
      proveedorId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = $Result.GetResult<Prisma.$ProductoPayload, S>

  type ProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface ProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producto'], meta: { name: 'Producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {ProductoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoFindUniqueArgs>(args: SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoFindFirstArgs>(args?: SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productoWithIdOnly = await prisma.producto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductoFindManyArgs>(args?: SelectSubset<T, ProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producto.
     * @param {ProductoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends ProductoCreateArgs>(args: SelectSubset<T, ProductoCreateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {ProductoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoCreateManyArgs>(args?: SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productos and returns the data saved in the database.
     * @param {ProductoCreateManyAndReturnArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productos and only return the `id`
     * const productoWithIdOnly = await prisma.producto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Producto.
     * @param {ProductoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends ProductoDeleteArgs>(args: SelectSubset<T, ProductoDeleteArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producto.
     * @param {ProductoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoUpdateArgs>(args: SelectSubset<T, ProductoUpdateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {ProductoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoDeleteManyArgs>(args?: SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoUpdateManyArgs>(args: SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos and returns the data updated in the database.
     * @param {ProductoUpdateManyAndReturnArgs} args - Arguments to update many Productos.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productos and only return the `id`
     * const productoWithIdOnly = await prisma.producto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Producto.
     * @param {ProductoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends ProductoUpsertArgs>(args: SelectSubset<T, ProductoUpsertArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductoCountArgs>(
      args?: Subset<T, ProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGroupByArgs} args - Group by arguments.
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
      T extends ProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoGroupByArgs['orderBy'] }
        : { orderBy?: ProductoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producto model
   */
  readonly fields: ProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    proveedor<T extends ProveedorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProveedorDefaultArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    detalleVentas<T extends Producto$detalleVentasArgs<ExtArgs> = {}>(args?: Subset<T, Producto$detalleVentasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movimientos<T extends Producto$movimientosArgs<ExtArgs> = {}>(args?: Subset<T, Producto$movimientosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Producto model
   */
  interface ProductoFieldRefs {
    readonly id: FieldRef<"Producto", 'Int'>
    readonly codigoBarra: FieldRef<"Producto", 'String'>
    readonly nombre: FieldRef<"Producto", 'String'>
    readonly descripcion: FieldRef<"Producto", 'String'>
    readonly precio: FieldRef<"Producto", 'Float'>
    readonly stock: FieldRef<"Producto", 'Int'>
    readonly stockMinimo: FieldRef<"Producto", 'Int'>
    readonly descuento: FieldRef<"Producto", 'Float'>
    readonly categoriaId: FieldRef<"Producto", 'Int'>
    readonly proveedorId: FieldRef<"Producto", 'Int'>
    readonly createdAt: FieldRef<"Producto", 'DateTime'>
    readonly updatedAt: FieldRef<"Producto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Producto findUnique
   */
  export type ProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findUniqueOrThrow
   */
  export type ProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findFirst
   */
  export type ProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findFirstOrThrow
   */
  export type ProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findMany
   */
  export type ProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto create
   */
  export type ProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a Producto.
     */
    data: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
  }

  /**
   * Producto createMany
   */
  export type ProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto createManyAndReturn
   */
  export type ProductoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Producto update
   */
  export type ProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a Producto.
     */
    data: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
    /**
     * Choose, which Producto to update.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto updateMany
   */
  export type ProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto updateManyAndReturn
   */
  export type ProductoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Producto upsert
   */
  export type ProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the Producto to update in case it exists.
     */
    where: ProductoWhereUniqueInput
    /**
     * In case the Producto found by the `where` argument doesn't exist, create a new Producto with this data.
     */
    create: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
    /**
     * In case the Producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
  }

  /**
   * Producto delete
   */
  export type ProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter which Producto to delete.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto deleteMany
   */
  export type ProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to delete.
     */
    limit?: number
  }

  /**
   * Producto.detalleVentas
   */
  export type Producto$detalleVentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleVenta
     */
    omit?: DetalleVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleVentaInclude<ExtArgs> | null
    where?: DetalleVentaWhereInput
    orderBy?: DetalleVentaOrderByWithRelationInput | DetalleVentaOrderByWithRelationInput[]
    cursor?: DetalleVentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleVentaScalarFieldEnum | DetalleVentaScalarFieldEnum[]
  }

  /**
   * Producto.movimientos
   */
  export type Producto$movimientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimiento
     */
    select?: MovimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimiento
     */
    omit?: MovimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInclude<ExtArgs> | null
    where?: MovimientoWhereInput
    orderBy?: MovimientoOrderByWithRelationInput | MovimientoOrderByWithRelationInput[]
    cursor?: MovimientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimientoScalarFieldEnum | MovimientoScalarFieldEnum[]
  }

  /**
   * Producto without action
   */
  export type ProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
  }


  /**
   * Model Venta
   */

  export type AggregateVenta = {
    _count: VentaCountAggregateOutputType | null
    _avg: VentaAvgAggregateOutputType | null
    _sum: VentaSumAggregateOutputType | null
    _min: VentaMinAggregateOutputType | null
    _max: VentaMaxAggregateOutputType | null
  }

  export type VentaAvgAggregateOutputType = {
    id: number | null
    total: number | null
    descuentoTotal: number | null
    userId: number | null
    autorizadoPorId: number | null
  }

  export type VentaSumAggregateOutputType = {
    id: number | null
    total: number | null
    descuentoTotal: number | null
    userId: number | null
    autorizadoPorId: number | null
  }

  export type VentaMinAggregateOutputType = {
    id: number | null
    total: number | null
    descuentoTotal: number | null
    metodoPago: $Enums.MetodoPago | null
    tieneStockInsuficiente: boolean | null
    userId: number | null
    autorizadoPorId: number | null
    motivoAutorizacion: string | null
    createdAt: Date | null
  }

  export type VentaMaxAggregateOutputType = {
    id: number | null
    total: number | null
    descuentoTotal: number | null
    metodoPago: $Enums.MetodoPago | null
    tieneStockInsuficiente: boolean | null
    userId: number | null
    autorizadoPorId: number | null
    motivoAutorizacion: string | null
    createdAt: Date | null
  }

  export type VentaCountAggregateOutputType = {
    id: number
    total: number
    descuentoTotal: number
    metodoPago: number
    tieneStockInsuficiente: number
    userId: number
    autorizadoPorId: number
    motivoAutorizacion: number
    createdAt: number
    _all: number
  }


  export type VentaAvgAggregateInputType = {
    id?: true
    total?: true
    descuentoTotal?: true
    userId?: true
    autorizadoPorId?: true
  }

  export type VentaSumAggregateInputType = {
    id?: true
    total?: true
    descuentoTotal?: true
    userId?: true
    autorizadoPorId?: true
  }

  export type VentaMinAggregateInputType = {
    id?: true
    total?: true
    descuentoTotal?: true
    metodoPago?: true
    tieneStockInsuficiente?: true
    userId?: true
    autorizadoPorId?: true
    motivoAutorizacion?: true
    createdAt?: true
  }

  export type VentaMaxAggregateInputType = {
    id?: true
    total?: true
    descuentoTotal?: true
    metodoPago?: true
    tieneStockInsuficiente?: true
    userId?: true
    autorizadoPorId?: true
    motivoAutorizacion?: true
    createdAt?: true
  }

  export type VentaCountAggregateInputType = {
    id?: true
    total?: true
    descuentoTotal?: true
    metodoPago?: true
    tieneStockInsuficiente?: true
    userId?: true
    autorizadoPorId?: true
    motivoAutorizacion?: true
    createdAt?: true
    _all?: true
  }

  export type VentaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venta to aggregate.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ventas
    **/
    _count?: true | VentaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VentaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VentaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VentaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VentaMaxAggregateInputType
  }

  export type GetVentaAggregateType<T extends VentaAggregateArgs> = {
        [P in keyof T & keyof AggregateVenta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenta[P]>
      : GetScalarType<T[P], AggregateVenta[P]>
  }




  export type VentaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaWhereInput
    orderBy?: VentaOrderByWithAggregationInput | VentaOrderByWithAggregationInput[]
    by: VentaScalarFieldEnum[] | VentaScalarFieldEnum
    having?: VentaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VentaCountAggregateInputType | true
    _avg?: VentaAvgAggregateInputType
    _sum?: VentaSumAggregateInputType
    _min?: VentaMinAggregateInputType
    _max?: VentaMaxAggregateInputType
  }

  export type VentaGroupByOutputType = {
    id: number
    total: number
    descuentoTotal: number
    metodoPago: $Enums.MetodoPago
    tieneStockInsuficiente: boolean
    userId: number
    autorizadoPorId: number | null
    motivoAutorizacion: string | null
    createdAt: Date
    _count: VentaCountAggregateOutputType | null
    _avg: VentaAvgAggregateOutputType | null
    _sum: VentaSumAggregateOutputType | null
    _min: VentaMinAggregateOutputType | null
    _max: VentaMaxAggregateOutputType | null
  }

  type GetVentaGroupByPayload<T extends VentaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VentaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VentaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VentaGroupByOutputType[P]>
            : GetScalarType<T[P], VentaGroupByOutputType[P]>
        }
      >
    >


  export type VentaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    descuentoTotal?: boolean
    metodoPago?: boolean
    tieneStockInsuficiente?: boolean
    userId?: boolean
    autorizadoPorId?: boolean
    motivoAutorizacion?: boolean
    createdAt?: boolean
    detalles?: boolean | Venta$detallesArgs<ExtArgs>
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | VentaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venta"]>

  export type VentaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    descuentoTotal?: boolean
    metodoPago?: boolean
    tieneStockInsuficiente?: boolean
    userId?: boolean
    autorizadoPorId?: boolean
    motivoAutorizacion?: boolean
    createdAt?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venta"]>

  export type VentaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    descuentoTotal?: boolean
    metodoPago?: boolean
    tieneStockInsuficiente?: boolean
    userId?: boolean
    autorizadoPorId?: boolean
    motivoAutorizacion?: boolean
    createdAt?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venta"]>

  export type VentaSelectScalar = {
    id?: boolean
    total?: boolean
    descuentoTotal?: boolean
    metodoPago?: boolean
    tieneStockInsuficiente?: boolean
    userId?: boolean
    autorizadoPorId?: boolean
    motivoAutorizacion?: boolean
    createdAt?: boolean
  }

  export type VentaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "total" | "descuentoTotal" | "metodoPago" | "tieneStockInsuficiente" | "userId" | "autorizadoPorId" | "motivoAutorizacion" | "createdAt", ExtArgs["result"]["venta"]>
  export type VentaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | Venta$detallesArgs<ExtArgs>
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | VentaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VentaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type VentaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $VentaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venta"
    objects: {
      detalles: Prisma.$DetalleVentaPayload<ExtArgs>[]
      user: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      total: number
      descuentoTotal: number
      metodoPago: $Enums.MetodoPago
      tieneStockInsuficiente: boolean
      userId: number
      autorizadoPorId: number | null
      motivoAutorizacion: string | null
      createdAt: Date
    }, ExtArgs["result"]["venta"]>
    composites: {}
  }

  type VentaGetPayload<S extends boolean | null | undefined | VentaDefaultArgs> = $Result.GetResult<Prisma.$VentaPayload, S>

  type VentaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VentaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VentaCountAggregateInputType | true
    }

  export interface VentaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venta'], meta: { name: 'Venta' } }
    /**
     * Find zero or one Venta that matches the filter.
     * @param {VentaFindUniqueArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VentaFindUniqueArgs>(args: SelectSubset<T, VentaFindUniqueArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VentaFindUniqueOrThrowArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VentaFindUniqueOrThrowArgs>(args: SelectSubset<T, VentaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindFirstArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VentaFindFirstArgs>(args?: SelectSubset<T, VentaFindFirstArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindFirstOrThrowArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VentaFindFirstOrThrowArgs>(args?: SelectSubset<T, VentaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ventas
     * const ventas = await prisma.venta.findMany()
     * 
     * // Get first 10 Ventas
     * const ventas = await prisma.venta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ventaWithIdOnly = await prisma.venta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VentaFindManyArgs>(args?: SelectSubset<T, VentaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venta.
     * @param {VentaCreateArgs} args - Arguments to create a Venta.
     * @example
     * // Create one Venta
     * const Venta = await prisma.venta.create({
     *   data: {
     *     // ... data to create a Venta
     *   }
     * })
     * 
     */
    create<T extends VentaCreateArgs>(args: SelectSubset<T, VentaCreateArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ventas.
     * @param {VentaCreateManyArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const venta = await prisma.venta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VentaCreateManyArgs>(args?: SelectSubset<T, VentaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ventas and returns the data saved in the database.
     * @param {VentaCreateManyAndReturnArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const venta = await prisma.venta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ventas and only return the `id`
     * const ventaWithIdOnly = await prisma.venta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VentaCreateManyAndReturnArgs>(args?: SelectSubset<T, VentaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Venta.
     * @param {VentaDeleteArgs} args - Arguments to delete one Venta.
     * @example
     * // Delete one Venta
     * const Venta = await prisma.venta.delete({
     *   where: {
     *     // ... filter to delete one Venta
     *   }
     * })
     * 
     */
    delete<T extends VentaDeleteArgs>(args: SelectSubset<T, VentaDeleteArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venta.
     * @param {VentaUpdateArgs} args - Arguments to update one Venta.
     * @example
     * // Update one Venta
     * const venta = await prisma.venta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VentaUpdateArgs>(args: SelectSubset<T, VentaUpdateArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ventas.
     * @param {VentaDeleteManyArgs} args - Arguments to filter Ventas to delete.
     * @example
     * // Delete a few Ventas
     * const { count } = await prisma.venta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VentaDeleteManyArgs>(args?: SelectSubset<T, VentaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ventas
     * const venta = await prisma.venta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VentaUpdateManyArgs>(args: SelectSubset<T, VentaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventas and returns the data updated in the database.
     * @param {VentaUpdateManyAndReturnArgs} args - Arguments to update many Ventas.
     * @example
     * // Update many Ventas
     * const venta = await prisma.venta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ventas and only return the `id`
     * const ventaWithIdOnly = await prisma.venta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VentaUpdateManyAndReturnArgs>(args: SelectSubset<T, VentaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Venta.
     * @param {VentaUpsertArgs} args - Arguments to update or create a Venta.
     * @example
     * // Update or create a Venta
     * const venta = await prisma.venta.upsert({
     *   create: {
     *     // ... data to create a Venta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venta we want to update
     *   }
     * })
     */
    upsert<T extends VentaUpsertArgs>(args: SelectSubset<T, VentaUpsertArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaCountArgs} args - Arguments to filter Ventas to count.
     * @example
     * // Count the number of Ventas
     * const count = await prisma.venta.count({
     *   where: {
     *     // ... the filter for the Ventas we want to count
     *   }
     * })
    **/
    count<T extends VentaCountArgs>(
      args?: Subset<T, VentaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VentaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VentaAggregateArgs>(args: Subset<T, VentaAggregateArgs>): Prisma.PrismaPromise<GetVentaAggregateType<T>>

    /**
     * Group by Venta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaGroupByArgs} args - Group by arguments.
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
      T extends VentaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VentaGroupByArgs['orderBy'] }
        : { orderBy?: VentaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venta model
   */
  readonly fields: VentaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VentaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detalles<T extends Venta$detallesArgs<ExtArgs> = {}>(args?: Subset<T, Venta$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Venta model
   */
  interface VentaFieldRefs {
    readonly id: FieldRef<"Venta", 'Int'>
    readonly total: FieldRef<"Venta", 'Float'>
    readonly descuentoTotal: FieldRef<"Venta", 'Float'>
    readonly metodoPago: FieldRef<"Venta", 'MetodoPago'>
    readonly tieneStockInsuficiente: FieldRef<"Venta", 'Boolean'>
    readonly userId: FieldRef<"Venta", 'Int'>
    readonly autorizadoPorId: FieldRef<"Venta", 'Int'>
    readonly motivoAutorizacion: FieldRef<"Venta", 'String'>
    readonly createdAt: FieldRef<"Venta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Venta findUnique
   */
  export type VentaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta findUniqueOrThrow
   */
  export type VentaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta findFirst
   */
  export type VentaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta findFirstOrThrow
   */
  export type VentaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta findMany
   */
  export type VentaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Ventas to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta create
   */
  export type VentaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The data needed to create a Venta.
     */
    data: XOR<VentaCreateInput, VentaUncheckedCreateInput>
  }

  /**
   * Venta createMany
   */
  export type VentaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ventas.
     */
    data: VentaCreateManyInput | VentaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venta createManyAndReturn
   */
  export type VentaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * The data used to create many Ventas.
     */
    data: VentaCreateManyInput | VentaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Venta update
   */
  export type VentaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The data needed to update a Venta.
     */
    data: XOR<VentaUpdateInput, VentaUncheckedUpdateInput>
    /**
     * Choose, which Venta to update.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta updateMany
   */
  export type VentaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ventas.
     */
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyInput>
    /**
     * Filter which Ventas to update
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to update.
     */
    limit?: number
  }

  /**
   * Venta updateManyAndReturn
   */
  export type VentaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * The data used to update Ventas.
     */
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyInput>
    /**
     * Filter which Ventas to update
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Venta upsert
   */
  export type VentaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The filter to search for the Venta to update in case it exists.
     */
    where: VentaWhereUniqueInput
    /**
     * In case the Venta found by the `where` argument doesn't exist, create a new Venta with this data.
     */
    create: XOR<VentaCreateInput, VentaUncheckedCreateInput>
    /**
     * In case the Venta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VentaUpdateInput, VentaUncheckedUpdateInput>
  }

  /**
   * Venta delete
   */
  export type VentaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter which Venta to delete.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta deleteMany
   */
  export type VentaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ventas to delete
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to delete.
     */
    limit?: number
  }

  /**
   * Venta.detalles
   */
  export type Venta$detallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleVenta
     */
    omit?: DetalleVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleVentaInclude<ExtArgs> | null
    where?: DetalleVentaWhereInput
    orderBy?: DetalleVentaOrderByWithRelationInput | DetalleVentaOrderByWithRelationInput[]
    cursor?: DetalleVentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleVentaScalarFieldEnum | DetalleVentaScalarFieldEnum[]
  }

  /**
   * Venta without action
   */
  export type VentaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
  }


  /**
   * Model DetalleVenta
   */

  export type AggregateDetalleVenta = {
    _count: DetalleVentaCountAggregateOutputType | null
    _avg: DetalleVentaAvgAggregateOutputType | null
    _sum: DetalleVentaSumAggregateOutputType | null
    _min: DetalleVentaMinAggregateOutputType | null
    _max: DetalleVentaMaxAggregateOutputType | null
  }

  export type DetalleVentaAvgAggregateOutputType = {
    id: number | null
    ventaId: number | null
    productoId: number | null
    cantidad: number | null
    precioUnit: number | null
    descuento: number | null
    subtotal: number | null
  }

  export type DetalleVentaSumAggregateOutputType = {
    id: number | null
    ventaId: number | null
    productoId: number | null
    cantidad: number | null
    precioUnit: number | null
    descuento: number | null
    subtotal: number | null
  }

  export type DetalleVentaMinAggregateOutputType = {
    id: number | null
    ventaId: number | null
    productoId: number | null
    cantidad: number | null
    precioUnit: number | null
    descuento: number | null
    subtotal: number | null
    stockInsuficiente: boolean | null
  }

  export type DetalleVentaMaxAggregateOutputType = {
    id: number | null
    ventaId: number | null
    productoId: number | null
    cantidad: number | null
    precioUnit: number | null
    descuento: number | null
    subtotal: number | null
    stockInsuficiente: boolean | null
  }

  export type DetalleVentaCountAggregateOutputType = {
    id: number
    ventaId: number
    productoId: number
    cantidad: number
    precioUnit: number
    descuento: number
    subtotal: number
    stockInsuficiente: number
    _all: number
  }


  export type DetalleVentaAvgAggregateInputType = {
    id?: true
    ventaId?: true
    productoId?: true
    cantidad?: true
    precioUnit?: true
    descuento?: true
    subtotal?: true
  }

  export type DetalleVentaSumAggregateInputType = {
    id?: true
    ventaId?: true
    productoId?: true
    cantidad?: true
    precioUnit?: true
    descuento?: true
    subtotal?: true
  }

  export type DetalleVentaMinAggregateInputType = {
    id?: true
    ventaId?: true
    productoId?: true
    cantidad?: true
    precioUnit?: true
    descuento?: true
    subtotal?: true
    stockInsuficiente?: true
  }

  export type DetalleVentaMaxAggregateInputType = {
    id?: true
    ventaId?: true
    productoId?: true
    cantidad?: true
    precioUnit?: true
    descuento?: true
    subtotal?: true
    stockInsuficiente?: true
  }

  export type DetalleVentaCountAggregateInputType = {
    id?: true
    ventaId?: true
    productoId?: true
    cantidad?: true
    precioUnit?: true
    descuento?: true
    subtotal?: true
    stockInsuficiente?: true
    _all?: true
  }

  export type DetalleVentaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleVenta to aggregate.
     */
    where?: DetalleVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleVentas to fetch.
     */
    orderBy?: DetalleVentaOrderByWithRelationInput | DetalleVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetalleVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleVentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetalleVentas
    **/
    _count?: true | DetalleVentaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetalleVentaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetalleVentaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetalleVentaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetalleVentaMaxAggregateInputType
  }

  export type GetDetalleVentaAggregateType<T extends DetalleVentaAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalleVenta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalleVenta[P]>
      : GetScalarType<T[P], AggregateDetalleVenta[P]>
  }




  export type DetalleVentaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleVentaWhereInput
    orderBy?: DetalleVentaOrderByWithAggregationInput | DetalleVentaOrderByWithAggregationInput[]
    by: DetalleVentaScalarFieldEnum[] | DetalleVentaScalarFieldEnum
    having?: DetalleVentaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetalleVentaCountAggregateInputType | true
    _avg?: DetalleVentaAvgAggregateInputType
    _sum?: DetalleVentaSumAggregateInputType
    _min?: DetalleVentaMinAggregateInputType
    _max?: DetalleVentaMaxAggregateInputType
  }

  export type DetalleVentaGroupByOutputType = {
    id: number
    ventaId: number
    productoId: number
    cantidad: number
    precioUnit: number
    descuento: number
    subtotal: number
    stockInsuficiente: boolean
    _count: DetalleVentaCountAggregateOutputType | null
    _avg: DetalleVentaAvgAggregateOutputType | null
    _sum: DetalleVentaSumAggregateOutputType | null
    _min: DetalleVentaMinAggregateOutputType | null
    _max: DetalleVentaMaxAggregateOutputType | null
  }

  type GetDetalleVentaGroupByPayload<T extends DetalleVentaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetalleVentaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetalleVentaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetalleVentaGroupByOutputType[P]>
            : GetScalarType<T[P], DetalleVentaGroupByOutputType[P]>
        }
      >
    >


  export type DetalleVentaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ventaId?: boolean
    productoId?: boolean
    cantidad?: boolean
    precioUnit?: boolean
    descuento?: boolean
    subtotal?: boolean
    stockInsuficiente?: boolean
    venta?: boolean | VentaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleVenta"]>

  export type DetalleVentaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ventaId?: boolean
    productoId?: boolean
    cantidad?: boolean
    precioUnit?: boolean
    descuento?: boolean
    subtotal?: boolean
    stockInsuficiente?: boolean
    venta?: boolean | VentaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleVenta"]>

  export type DetalleVentaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ventaId?: boolean
    productoId?: boolean
    cantidad?: boolean
    precioUnit?: boolean
    descuento?: boolean
    subtotal?: boolean
    stockInsuficiente?: boolean
    venta?: boolean | VentaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleVenta"]>

  export type DetalleVentaSelectScalar = {
    id?: boolean
    ventaId?: boolean
    productoId?: boolean
    cantidad?: boolean
    precioUnit?: boolean
    descuento?: boolean
    subtotal?: boolean
    stockInsuficiente?: boolean
  }

  export type DetalleVentaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ventaId" | "productoId" | "cantidad" | "precioUnit" | "descuento" | "subtotal" | "stockInsuficiente", ExtArgs["result"]["detalleVenta"]>
  export type DetalleVentaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venta?: boolean | VentaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }
  export type DetalleVentaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venta?: boolean | VentaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }
  export type DetalleVentaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venta?: boolean | VentaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $DetalleVentaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetalleVenta"
    objects: {
      venta: Prisma.$VentaPayload<ExtArgs>
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ventaId: number
      productoId: number
      cantidad: number
      precioUnit: number
      descuento: number
      subtotal: number
      stockInsuficiente: boolean
    }, ExtArgs["result"]["detalleVenta"]>
    composites: {}
  }

  type DetalleVentaGetPayload<S extends boolean | null | undefined | DetalleVentaDefaultArgs> = $Result.GetResult<Prisma.$DetalleVentaPayload, S>

  type DetalleVentaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetalleVentaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetalleVentaCountAggregateInputType | true
    }

  export interface DetalleVentaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetalleVenta'], meta: { name: 'DetalleVenta' } }
    /**
     * Find zero or one DetalleVenta that matches the filter.
     * @param {DetalleVentaFindUniqueArgs} args - Arguments to find a DetalleVenta
     * @example
     * // Get one DetalleVenta
     * const detalleVenta = await prisma.detalleVenta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetalleVentaFindUniqueArgs>(args: SelectSubset<T, DetalleVentaFindUniqueArgs<ExtArgs>>): Prisma__DetalleVentaClient<$Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetalleVenta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetalleVentaFindUniqueOrThrowArgs} args - Arguments to find a DetalleVenta
     * @example
     * // Get one DetalleVenta
     * const detalleVenta = await prisma.detalleVenta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetalleVentaFindUniqueOrThrowArgs>(args: SelectSubset<T, DetalleVentaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetalleVentaClient<$Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleVenta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleVentaFindFirstArgs} args - Arguments to find a DetalleVenta
     * @example
     * // Get one DetalleVenta
     * const detalleVenta = await prisma.detalleVenta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetalleVentaFindFirstArgs>(args?: SelectSubset<T, DetalleVentaFindFirstArgs<ExtArgs>>): Prisma__DetalleVentaClient<$Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleVenta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleVentaFindFirstOrThrowArgs} args - Arguments to find a DetalleVenta
     * @example
     * // Get one DetalleVenta
     * const detalleVenta = await prisma.detalleVenta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetalleVentaFindFirstOrThrowArgs>(args?: SelectSubset<T, DetalleVentaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetalleVentaClient<$Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetalleVentas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleVentaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetalleVentas
     * const detalleVentas = await prisma.detalleVenta.findMany()
     * 
     * // Get first 10 DetalleVentas
     * const detalleVentas = await prisma.detalleVenta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detalleVentaWithIdOnly = await prisma.detalleVenta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetalleVentaFindManyArgs>(args?: SelectSubset<T, DetalleVentaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetalleVenta.
     * @param {DetalleVentaCreateArgs} args - Arguments to create a DetalleVenta.
     * @example
     * // Create one DetalleVenta
     * const DetalleVenta = await prisma.detalleVenta.create({
     *   data: {
     *     // ... data to create a DetalleVenta
     *   }
     * })
     * 
     */
    create<T extends DetalleVentaCreateArgs>(args: SelectSubset<T, DetalleVentaCreateArgs<ExtArgs>>): Prisma__DetalleVentaClient<$Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetalleVentas.
     * @param {DetalleVentaCreateManyArgs} args - Arguments to create many DetalleVentas.
     * @example
     * // Create many DetalleVentas
     * const detalleVenta = await prisma.detalleVenta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetalleVentaCreateManyArgs>(args?: SelectSubset<T, DetalleVentaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DetalleVentas and returns the data saved in the database.
     * @param {DetalleVentaCreateManyAndReturnArgs} args - Arguments to create many DetalleVentas.
     * @example
     * // Create many DetalleVentas
     * const detalleVenta = await prisma.detalleVenta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DetalleVentas and only return the `id`
     * const detalleVentaWithIdOnly = await prisma.detalleVenta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DetalleVentaCreateManyAndReturnArgs>(args?: SelectSubset<T, DetalleVentaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DetalleVenta.
     * @param {DetalleVentaDeleteArgs} args - Arguments to delete one DetalleVenta.
     * @example
     * // Delete one DetalleVenta
     * const DetalleVenta = await prisma.detalleVenta.delete({
     *   where: {
     *     // ... filter to delete one DetalleVenta
     *   }
     * })
     * 
     */
    delete<T extends DetalleVentaDeleteArgs>(args: SelectSubset<T, DetalleVentaDeleteArgs<ExtArgs>>): Prisma__DetalleVentaClient<$Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetalleVenta.
     * @param {DetalleVentaUpdateArgs} args - Arguments to update one DetalleVenta.
     * @example
     * // Update one DetalleVenta
     * const detalleVenta = await prisma.detalleVenta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetalleVentaUpdateArgs>(args: SelectSubset<T, DetalleVentaUpdateArgs<ExtArgs>>): Prisma__DetalleVentaClient<$Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetalleVentas.
     * @param {DetalleVentaDeleteManyArgs} args - Arguments to filter DetalleVentas to delete.
     * @example
     * // Delete a few DetalleVentas
     * const { count } = await prisma.detalleVenta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetalleVentaDeleteManyArgs>(args?: SelectSubset<T, DetalleVentaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetalleVentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleVentaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetalleVentas
     * const detalleVenta = await prisma.detalleVenta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetalleVentaUpdateManyArgs>(args: SelectSubset<T, DetalleVentaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetalleVentas and returns the data updated in the database.
     * @param {DetalleVentaUpdateManyAndReturnArgs} args - Arguments to update many DetalleVentas.
     * @example
     * // Update many DetalleVentas
     * const detalleVenta = await prisma.detalleVenta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DetalleVentas and only return the `id`
     * const detalleVentaWithIdOnly = await prisma.detalleVenta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DetalleVentaUpdateManyAndReturnArgs>(args: SelectSubset<T, DetalleVentaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DetalleVenta.
     * @param {DetalleVentaUpsertArgs} args - Arguments to update or create a DetalleVenta.
     * @example
     * // Update or create a DetalleVenta
     * const detalleVenta = await prisma.detalleVenta.upsert({
     *   create: {
     *     // ... data to create a DetalleVenta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetalleVenta we want to update
     *   }
     * })
     */
    upsert<T extends DetalleVentaUpsertArgs>(args: SelectSubset<T, DetalleVentaUpsertArgs<ExtArgs>>): Prisma__DetalleVentaClient<$Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetalleVentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleVentaCountArgs} args - Arguments to filter DetalleVentas to count.
     * @example
     * // Count the number of DetalleVentas
     * const count = await prisma.detalleVenta.count({
     *   where: {
     *     // ... the filter for the DetalleVentas we want to count
     *   }
     * })
    **/
    count<T extends DetalleVentaCountArgs>(
      args?: Subset<T, DetalleVentaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetalleVentaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetalleVenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleVentaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DetalleVentaAggregateArgs>(args: Subset<T, DetalleVentaAggregateArgs>): Prisma.PrismaPromise<GetDetalleVentaAggregateType<T>>

    /**
     * Group by DetalleVenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleVentaGroupByArgs} args - Group by arguments.
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
      T extends DetalleVentaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetalleVentaGroupByArgs['orderBy'] }
        : { orderBy?: DetalleVentaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DetalleVentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalleVentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetalleVenta model
   */
  readonly fields: DetalleVentaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetalleVenta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetalleVentaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venta<T extends VentaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VentaDefaultArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DetalleVenta model
   */
  interface DetalleVentaFieldRefs {
    readonly id: FieldRef<"DetalleVenta", 'Int'>
    readonly ventaId: FieldRef<"DetalleVenta", 'Int'>
    readonly productoId: FieldRef<"DetalleVenta", 'Int'>
    readonly cantidad: FieldRef<"DetalleVenta", 'Int'>
    readonly precioUnit: FieldRef<"DetalleVenta", 'Float'>
    readonly descuento: FieldRef<"DetalleVenta", 'Float'>
    readonly subtotal: FieldRef<"DetalleVenta", 'Float'>
    readonly stockInsuficiente: FieldRef<"DetalleVenta", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * DetalleVenta findUnique
   */
  export type DetalleVentaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleVenta
     */
    omit?: DetalleVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleVentaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleVenta to fetch.
     */
    where: DetalleVentaWhereUniqueInput
  }

  /**
   * DetalleVenta findUniqueOrThrow
   */
  export type DetalleVentaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleVenta
     */
    omit?: DetalleVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleVentaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleVenta to fetch.
     */
    where: DetalleVentaWhereUniqueInput
  }

  /**
   * DetalleVenta findFirst
   */
  export type DetalleVentaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleVenta
     */
    omit?: DetalleVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleVentaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleVenta to fetch.
     */
    where?: DetalleVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleVentas to fetch.
     */
    orderBy?: DetalleVentaOrderByWithRelationInput | DetalleVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleVentas.
     */
    cursor?: DetalleVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleVentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleVentas.
     */
    distinct?: DetalleVentaScalarFieldEnum | DetalleVentaScalarFieldEnum[]
  }

  /**
   * DetalleVenta findFirstOrThrow
   */
  export type DetalleVentaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleVenta
     */
    omit?: DetalleVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleVentaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleVenta to fetch.
     */
    where?: DetalleVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleVentas to fetch.
     */
    orderBy?: DetalleVentaOrderByWithRelationInput | DetalleVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleVentas.
     */
    cursor?: DetalleVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleVentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleVentas.
     */
    distinct?: DetalleVentaScalarFieldEnum | DetalleVentaScalarFieldEnum[]
  }

  /**
   * DetalleVenta findMany
   */
  export type DetalleVentaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleVenta
     */
    omit?: DetalleVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleVentaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleVentas to fetch.
     */
    where?: DetalleVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleVentas to fetch.
     */
    orderBy?: DetalleVentaOrderByWithRelationInput | DetalleVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetalleVentas.
     */
    cursor?: DetalleVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleVentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleVentas.
     */
    distinct?: DetalleVentaScalarFieldEnum | DetalleVentaScalarFieldEnum[]
  }

  /**
   * DetalleVenta create
   */
  export type DetalleVentaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleVenta
     */
    omit?: DetalleVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleVentaInclude<ExtArgs> | null
    /**
     * The data needed to create a DetalleVenta.
     */
    data: XOR<DetalleVentaCreateInput, DetalleVentaUncheckedCreateInput>
  }

  /**
   * DetalleVenta createMany
   */
  export type DetalleVentaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetalleVentas.
     */
    data: DetalleVentaCreateManyInput | DetalleVentaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetalleVenta createManyAndReturn
   */
  export type DetalleVentaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleVenta
     */
    omit?: DetalleVentaOmit<ExtArgs> | null
    /**
     * The data used to create many DetalleVentas.
     */
    data: DetalleVentaCreateManyInput | DetalleVentaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleVentaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetalleVenta update
   */
  export type DetalleVentaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleVenta
     */
    omit?: DetalleVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleVentaInclude<ExtArgs> | null
    /**
     * The data needed to update a DetalleVenta.
     */
    data: XOR<DetalleVentaUpdateInput, DetalleVentaUncheckedUpdateInput>
    /**
     * Choose, which DetalleVenta to update.
     */
    where: DetalleVentaWhereUniqueInput
  }

  /**
   * DetalleVenta updateMany
   */
  export type DetalleVentaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetalleVentas.
     */
    data: XOR<DetalleVentaUpdateManyMutationInput, DetalleVentaUncheckedUpdateManyInput>
    /**
     * Filter which DetalleVentas to update
     */
    where?: DetalleVentaWhereInput
    /**
     * Limit how many DetalleVentas to update.
     */
    limit?: number
  }

  /**
   * DetalleVenta updateManyAndReturn
   */
  export type DetalleVentaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleVenta
     */
    omit?: DetalleVentaOmit<ExtArgs> | null
    /**
     * The data used to update DetalleVentas.
     */
    data: XOR<DetalleVentaUpdateManyMutationInput, DetalleVentaUncheckedUpdateManyInput>
    /**
     * Filter which DetalleVentas to update
     */
    where?: DetalleVentaWhereInput
    /**
     * Limit how many DetalleVentas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleVentaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetalleVenta upsert
   */
  export type DetalleVentaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleVenta
     */
    omit?: DetalleVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleVentaInclude<ExtArgs> | null
    /**
     * The filter to search for the DetalleVenta to update in case it exists.
     */
    where: DetalleVentaWhereUniqueInput
    /**
     * In case the DetalleVenta found by the `where` argument doesn't exist, create a new DetalleVenta with this data.
     */
    create: XOR<DetalleVentaCreateInput, DetalleVentaUncheckedCreateInput>
    /**
     * In case the DetalleVenta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetalleVentaUpdateInput, DetalleVentaUncheckedUpdateInput>
  }

  /**
   * DetalleVenta delete
   */
  export type DetalleVentaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleVenta
     */
    omit?: DetalleVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleVentaInclude<ExtArgs> | null
    /**
     * Filter which DetalleVenta to delete.
     */
    where: DetalleVentaWhereUniqueInput
  }

  /**
   * DetalleVenta deleteMany
   */
  export type DetalleVentaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleVentas to delete
     */
    where?: DetalleVentaWhereInput
    /**
     * Limit how many DetalleVentas to delete.
     */
    limit?: number
  }

  /**
   * DetalleVenta without action
   */
  export type DetalleVentaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleVenta
     */
    omit?: DetalleVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleVentaInclude<ExtArgs> | null
  }


  /**
   * Model Movimiento
   */

  export type AggregateMovimiento = {
    _count: MovimientoCountAggregateOutputType | null
    _avg: MovimientoAvgAggregateOutputType | null
    _sum: MovimientoSumAggregateOutputType | null
    _min: MovimientoMinAggregateOutputType | null
    _max: MovimientoMaxAggregateOutputType | null
  }

  export type MovimientoAvgAggregateOutputType = {
    id: number | null
    productoId: number | null
    cantidad: number | null
    stockAntes: number | null
    stockDespues: number | null
  }

  export type MovimientoSumAggregateOutputType = {
    id: number | null
    productoId: number | null
    cantidad: number | null
    stockAntes: number | null
    stockDespues: number | null
  }

  export type MovimientoMinAggregateOutputType = {
    id: number | null
    productoId: number | null
    tipo: $Enums.TipoMovimiento | null
    cantidad: number | null
    motivo: string | null
    stockAntes: number | null
    stockDespues: number | null
    createdAt: Date | null
  }

  export type MovimientoMaxAggregateOutputType = {
    id: number | null
    productoId: number | null
    tipo: $Enums.TipoMovimiento | null
    cantidad: number | null
    motivo: string | null
    stockAntes: number | null
    stockDespues: number | null
    createdAt: Date | null
  }

  export type MovimientoCountAggregateOutputType = {
    id: number
    productoId: number
    tipo: number
    cantidad: number
    motivo: number
    stockAntes: number
    stockDespues: number
    createdAt: number
    _all: number
  }


  export type MovimientoAvgAggregateInputType = {
    id?: true
    productoId?: true
    cantidad?: true
    stockAntes?: true
    stockDespues?: true
  }

  export type MovimientoSumAggregateInputType = {
    id?: true
    productoId?: true
    cantidad?: true
    stockAntes?: true
    stockDespues?: true
  }

  export type MovimientoMinAggregateInputType = {
    id?: true
    productoId?: true
    tipo?: true
    cantidad?: true
    motivo?: true
    stockAntes?: true
    stockDespues?: true
    createdAt?: true
  }

  export type MovimientoMaxAggregateInputType = {
    id?: true
    productoId?: true
    tipo?: true
    cantidad?: true
    motivo?: true
    stockAntes?: true
    stockDespues?: true
    createdAt?: true
  }

  export type MovimientoCountAggregateInputType = {
    id?: true
    productoId?: true
    tipo?: true
    cantidad?: true
    motivo?: true
    stockAntes?: true
    stockDespues?: true
    createdAt?: true
    _all?: true
  }

  export type MovimientoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movimiento to aggregate.
     */
    where?: MovimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimientos to fetch.
     */
    orderBy?: MovimientoOrderByWithRelationInput | MovimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movimientos
    **/
    _count?: true | MovimientoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovimientoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovimientoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovimientoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovimientoMaxAggregateInputType
  }

  export type GetMovimientoAggregateType<T extends MovimientoAggregateArgs> = {
        [P in keyof T & keyof AggregateMovimiento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovimiento[P]>
      : GetScalarType<T[P], AggregateMovimiento[P]>
  }




  export type MovimientoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimientoWhereInput
    orderBy?: MovimientoOrderByWithAggregationInput | MovimientoOrderByWithAggregationInput[]
    by: MovimientoScalarFieldEnum[] | MovimientoScalarFieldEnum
    having?: MovimientoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovimientoCountAggregateInputType | true
    _avg?: MovimientoAvgAggregateInputType
    _sum?: MovimientoSumAggregateInputType
    _min?: MovimientoMinAggregateInputType
    _max?: MovimientoMaxAggregateInputType
  }

  export type MovimientoGroupByOutputType = {
    id: number
    productoId: number
    tipo: $Enums.TipoMovimiento
    cantidad: number
    motivo: string | null
    stockAntes: number
    stockDespues: number
    createdAt: Date
    _count: MovimientoCountAggregateOutputType | null
    _avg: MovimientoAvgAggregateOutputType | null
    _sum: MovimientoSumAggregateOutputType | null
    _min: MovimientoMinAggregateOutputType | null
    _max: MovimientoMaxAggregateOutputType | null
  }

  type GetMovimientoGroupByPayload<T extends MovimientoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovimientoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovimientoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovimientoGroupByOutputType[P]>
            : GetScalarType<T[P], MovimientoGroupByOutputType[P]>
        }
      >
    >


  export type MovimientoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productoId?: boolean
    tipo?: boolean
    cantidad?: boolean
    motivo?: boolean
    stockAntes?: boolean
    stockDespues?: boolean
    createdAt?: boolean
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimiento"]>

  export type MovimientoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productoId?: boolean
    tipo?: boolean
    cantidad?: boolean
    motivo?: boolean
    stockAntes?: boolean
    stockDespues?: boolean
    createdAt?: boolean
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimiento"]>

  export type MovimientoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productoId?: boolean
    tipo?: boolean
    cantidad?: boolean
    motivo?: boolean
    stockAntes?: boolean
    stockDespues?: boolean
    createdAt?: boolean
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimiento"]>

  export type MovimientoSelectScalar = {
    id?: boolean
    productoId?: boolean
    tipo?: boolean
    cantidad?: boolean
    motivo?: boolean
    stockAntes?: boolean
    stockDespues?: boolean
    createdAt?: boolean
  }

  export type MovimientoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productoId" | "tipo" | "cantidad" | "motivo" | "stockAntes" | "stockDespues" | "createdAt", ExtArgs["result"]["movimiento"]>
  export type MovimientoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }
  export type MovimientoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }
  export type MovimientoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $MovimientoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movimiento"
    objects: {
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productoId: number
      tipo: $Enums.TipoMovimiento
      cantidad: number
      motivo: string | null
      stockAntes: number
      stockDespues: number
      createdAt: Date
    }, ExtArgs["result"]["movimiento"]>
    composites: {}
  }

  type MovimientoGetPayload<S extends boolean | null | undefined | MovimientoDefaultArgs> = $Result.GetResult<Prisma.$MovimientoPayload, S>

  type MovimientoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovimientoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovimientoCountAggregateInputType | true
    }

  export interface MovimientoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movimiento'], meta: { name: 'Movimiento' } }
    /**
     * Find zero or one Movimiento that matches the filter.
     * @param {MovimientoFindUniqueArgs} args - Arguments to find a Movimiento
     * @example
     * // Get one Movimiento
     * const movimiento = await prisma.movimiento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovimientoFindUniqueArgs>(args: SelectSubset<T, MovimientoFindUniqueArgs<ExtArgs>>): Prisma__MovimientoClient<$Result.GetResult<Prisma.$MovimientoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movimiento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovimientoFindUniqueOrThrowArgs} args - Arguments to find a Movimiento
     * @example
     * // Get one Movimiento
     * const movimiento = await prisma.movimiento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovimientoFindUniqueOrThrowArgs>(args: SelectSubset<T, MovimientoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovimientoClient<$Result.GetResult<Prisma.$MovimientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movimiento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoFindFirstArgs} args - Arguments to find a Movimiento
     * @example
     * // Get one Movimiento
     * const movimiento = await prisma.movimiento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovimientoFindFirstArgs>(args?: SelectSubset<T, MovimientoFindFirstArgs<ExtArgs>>): Prisma__MovimientoClient<$Result.GetResult<Prisma.$MovimientoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movimiento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoFindFirstOrThrowArgs} args - Arguments to find a Movimiento
     * @example
     * // Get one Movimiento
     * const movimiento = await prisma.movimiento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovimientoFindFirstOrThrowArgs>(args?: SelectSubset<T, MovimientoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovimientoClient<$Result.GetResult<Prisma.$MovimientoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movimientos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movimientos
     * const movimientos = await prisma.movimiento.findMany()
     * 
     * // Get first 10 Movimientos
     * const movimientos = await prisma.movimiento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movimientoWithIdOnly = await prisma.movimiento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovimientoFindManyArgs>(args?: SelectSubset<T, MovimientoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movimiento.
     * @param {MovimientoCreateArgs} args - Arguments to create a Movimiento.
     * @example
     * // Create one Movimiento
     * const Movimiento = await prisma.movimiento.create({
     *   data: {
     *     // ... data to create a Movimiento
     *   }
     * })
     * 
     */
    create<T extends MovimientoCreateArgs>(args: SelectSubset<T, MovimientoCreateArgs<ExtArgs>>): Prisma__MovimientoClient<$Result.GetResult<Prisma.$MovimientoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movimientos.
     * @param {MovimientoCreateManyArgs} args - Arguments to create many Movimientos.
     * @example
     * // Create many Movimientos
     * const movimiento = await prisma.movimiento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovimientoCreateManyArgs>(args?: SelectSubset<T, MovimientoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movimientos and returns the data saved in the database.
     * @param {MovimientoCreateManyAndReturnArgs} args - Arguments to create many Movimientos.
     * @example
     * // Create many Movimientos
     * const movimiento = await prisma.movimiento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movimientos and only return the `id`
     * const movimientoWithIdOnly = await prisma.movimiento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovimientoCreateManyAndReturnArgs>(args?: SelectSubset<T, MovimientoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimientoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Movimiento.
     * @param {MovimientoDeleteArgs} args - Arguments to delete one Movimiento.
     * @example
     * // Delete one Movimiento
     * const Movimiento = await prisma.movimiento.delete({
     *   where: {
     *     // ... filter to delete one Movimiento
     *   }
     * })
     * 
     */
    delete<T extends MovimientoDeleteArgs>(args: SelectSubset<T, MovimientoDeleteArgs<ExtArgs>>): Prisma__MovimientoClient<$Result.GetResult<Prisma.$MovimientoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movimiento.
     * @param {MovimientoUpdateArgs} args - Arguments to update one Movimiento.
     * @example
     * // Update one Movimiento
     * const movimiento = await prisma.movimiento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovimientoUpdateArgs>(args: SelectSubset<T, MovimientoUpdateArgs<ExtArgs>>): Prisma__MovimientoClient<$Result.GetResult<Prisma.$MovimientoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movimientos.
     * @param {MovimientoDeleteManyArgs} args - Arguments to filter Movimientos to delete.
     * @example
     * // Delete a few Movimientos
     * const { count } = await prisma.movimiento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovimientoDeleteManyArgs>(args?: SelectSubset<T, MovimientoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movimientos
     * const movimiento = await prisma.movimiento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovimientoUpdateManyArgs>(args: SelectSubset<T, MovimientoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movimientos and returns the data updated in the database.
     * @param {MovimientoUpdateManyAndReturnArgs} args - Arguments to update many Movimientos.
     * @example
     * // Update many Movimientos
     * const movimiento = await prisma.movimiento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Movimientos and only return the `id`
     * const movimientoWithIdOnly = await prisma.movimiento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MovimientoUpdateManyAndReturnArgs>(args: SelectSubset<T, MovimientoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimientoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Movimiento.
     * @param {MovimientoUpsertArgs} args - Arguments to update or create a Movimiento.
     * @example
     * // Update or create a Movimiento
     * const movimiento = await prisma.movimiento.upsert({
     *   create: {
     *     // ... data to create a Movimiento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movimiento we want to update
     *   }
     * })
     */
    upsert<T extends MovimientoUpsertArgs>(args: SelectSubset<T, MovimientoUpsertArgs<ExtArgs>>): Prisma__MovimientoClient<$Result.GetResult<Prisma.$MovimientoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoCountArgs} args - Arguments to filter Movimientos to count.
     * @example
     * // Count the number of Movimientos
     * const count = await prisma.movimiento.count({
     *   where: {
     *     // ... the filter for the Movimientos we want to count
     *   }
     * })
    **/
    count<T extends MovimientoCountArgs>(
      args?: Subset<T, MovimientoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovimientoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movimiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovimientoAggregateArgs>(args: Subset<T, MovimientoAggregateArgs>): Prisma.PrismaPromise<GetMovimientoAggregateType<T>>

    /**
     * Group by Movimiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoGroupByArgs} args - Group by arguments.
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
      T extends MovimientoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovimientoGroupByArgs['orderBy'] }
        : { orderBy?: MovimientoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovimientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movimiento model
   */
  readonly fields: MovimientoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movimiento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovimientoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Movimiento model
   */
  interface MovimientoFieldRefs {
    readonly id: FieldRef<"Movimiento", 'Int'>
    readonly productoId: FieldRef<"Movimiento", 'Int'>
    readonly tipo: FieldRef<"Movimiento", 'TipoMovimiento'>
    readonly cantidad: FieldRef<"Movimiento", 'Int'>
    readonly motivo: FieldRef<"Movimiento", 'String'>
    readonly stockAntes: FieldRef<"Movimiento", 'Int'>
    readonly stockDespues: FieldRef<"Movimiento", 'Int'>
    readonly createdAt: FieldRef<"Movimiento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Movimiento findUnique
   */
  export type MovimientoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimiento
     */
    select?: MovimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimiento
     */
    omit?: MovimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInclude<ExtArgs> | null
    /**
     * Filter, which Movimiento to fetch.
     */
    where: MovimientoWhereUniqueInput
  }

  /**
   * Movimiento findUniqueOrThrow
   */
  export type MovimientoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimiento
     */
    select?: MovimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimiento
     */
    omit?: MovimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInclude<ExtArgs> | null
    /**
     * Filter, which Movimiento to fetch.
     */
    where: MovimientoWhereUniqueInput
  }

  /**
   * Movimiento findFirst
   */
  export type MovimientoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimiento
     */
    select?: MovimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimiento
     */
    omit?: MovimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInclude<ExtArgs> | null
    /**
     * Filter, which Movimiento to fetch.
     */
    where?: MovimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimientos to fetch.
     */
    orderBy?: MovimientoOrderByWithRelationInput | MovimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movimientos.
     */
    cursor?: MovimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movimientos.
     */
    distinct?: MovimientoScalarFieldEnum | MovimientoScalarFieldEnum[]
  }

  /**
   * Movimiento findFirstOrThrow
   */
  export type MovimientoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimiento
     */
    select?: MovimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimiento
     */
    omit?: MovimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInclude<ExtArgs> | null
    /**
     * Filter, which Movimiento to fetch.
     */
    where?: MovimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimientos to fetch.
     */
    orderBy?: MovimientoOrderByWithRelationInput | MovimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movimientos.
     */
    cursor?: MovimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movimientos.
     */
    distinct?: MovimientoScalarFieldEnum | MovimientoScalarFieldEnum[]
  }

  /**
   * Movimiento findMany
   */
  export type MovimientoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimiento
     */
    select?: MovimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimiento
     */
    omit?: MovimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInclude<ExtArgs> | null
    /**
     * Filter, which Movimientos to fetch.
     */
    where?: MovimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimientos to fetch.
     */
    orderBy?: MovimientoOrderByWithRelationInput | MovimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movimientos.
     */
    cursor?: MovimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movimientos.
     */
    distinct?: MovimientoScalarFieldEnum | MovimientoScalarFieldEnum[]
  }

  /**
   * Movimiento create
   */
  export type MovimientoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimiento
     */
    select?: MovimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimiento
     */
    omit?: MovimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInclude<ExtArgs> | null
    /**
     * The data needed to create a Movimiento.
     */
    data: XOR<MovimientoCreateInput, MovimientoUncheckedCreateInput>
  }

  /**
   * Movimiento createMany
   */
  export type MovimientoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movimientos.
     */
    data: MovimientoCreateManyInput | MovimientoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movimiento createManyAndReturn
   */
  export type MovimientoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimiento
     */
    select?: MovimientoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movimiento
     */
    omit?: MovimientoOmit<ExtArgs> | null
    /**
     * The data used to create many Movimientos.
     */
    data: MovimientoCreateManyInput | MovimientoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movimiento update
   */
  export type MovimientoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimiento
     */
    select?: MovimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimiento
     */
    omit?: MovimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInclude<ExtArgs> | null
    /**
     * The data needed to update a Movimiento.
     */
    data: XOR<MovimientoUpdateInput, MovimientoUncheckedUpdateInput>
    /**
     * Choose, which Movimiento to update.
     */
    where: MovimientoWhereUniqueInput
  }

  /**
   * Movimiento updateMany
   */
  export type MovimientoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movimientos.
     */
    data: XOR<MovimientoUpdateManyMutationInput, MovimientoUncheckedUpdateManyInput>
    /**
     * Filter which Movimientos to update
     */
    where?: MovimientoWhereInput
    /**
     * Limit how many Movimientos to update.
     */
    limit?: number
  }

  /**
   * Movimiento updateManyAndReturn
   */
  export type MovimientoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimiento
     */
    select?: MovimientoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movimiento
     */
    omit?: MovimientoOmit<ExtArgs> | null
    /**
     * The data used to update Movimientos.
     */
    data: XOR<MovimientoUpdateManyMutationInput, MovimientoUncheckedUpdateManyInput>
    /**
     * Filter which Movimientos to update
     */
    where?: MovimientoWhereInput
    /**
     * Limit how many Movimientos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movimiento upsert
   */
  export type MovimientoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimiento
     */
    select?: MovimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimiento
     */
    omit?: MovimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInclude<ExtArgs> | null
    /**
     * The filter to search for the Movimiento to update in case it exists.
     */
    where: MovimientoWhereUniqueInput
    /**
     * In case the Movimiento found by the `where` argument doesn't exist, create a new Movimiento with this data.
     */
    create: XOR<MovimientoCreateInput, MovimientoUncheckedCreateInput>
    /**
     * In case the Movimiento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovimientoUpdateInput, MovimientoUncheckedUpdateInput>
  }

  /**
   * Movimiento delete
   */
  export type MovimientoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimiento
     */
    select?: MovimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimiento
     */
    omit?: MovimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInclude<ExtArgs> | null
    /**
     * Filter which Movimiento to delete.
     */
    where: MovimientoWhereUniqueInput
  }

  /**
   * Movimiento deleteMany
   */
  export type MovimientoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movimientos to delete
     */
    where?: MovimientoWhereInput
    /**
     * Limit how many Movimientos to delete.
     */
    limit?: number
  }

  /**
   * Movimiento without action
   */
  export type MovimientoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimiento
     */
    select?: MovimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimiento
     */
    omit?: MovimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    rolId: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    rolId: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    passwordHash: string | null
    pinAutorizacionHash: string | null
    rolId: number | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    passwordHash: string | null
    pinAutorizacionHash: string | null
    rolId: number | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    passwordHash: number
    pinAutorizacionHash: number
    rolId: number
    activo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    rolId?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    rolId?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    passwordHash?: true
    pinAutorizacionHash?: true
    rolId?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    passwordHash?: true
    pinAutorizacionHash?: true
    rolId?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    passwordHash?: true
    pinAutorizacionHash?: true
    rolId?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    email: string
    passwordHash: string
    pinAutorizacionHash: string | null
    rolId: number
    activo: boolean
    createdAt: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    passwordHash?: boolean
    pinAutorizacionHash?: boolean
    rolId?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
    ventas?: boolean | Usuario$ventasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    passwordHash?: boolean
    pinAutorizacionHash?: boolean
    rolId?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    passwordHash?: boolean
    pinAutorizacionHash?: boolean
    rolId?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    passwordHash?: boolean
    pinAutorizacionHash?: boolean
    rolId?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "passwordHash" | "pinAutorizacionHash" | "rolId" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
    ventas?: boolean | Usuario$ventasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      rol: Prisma.$RolPayload<ExtArgs>
      ventas: Prisma.$VentaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string
      passwordHash: string
      pinAutorizacionHash: string | null
      rolId: number
      activo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rol<T extends RolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolDefaultArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ventas<T extends Usuario$ventasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$ventasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly passwordHash: FieldRef<"Usuario", 'String'>
    readonly pinAutorizacionHash: FieldRef<"Usuario", 'String'>
    readonly rolId: FieldRef<"Usuario", 'Int'>
    readonly activo: FieldRef<"Usuario", 'Boolean'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.ventas
   */
  export type Usuario$ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    where?: VentaWhereInput
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    cursor?: VentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Rol
   */

  export type AggregateRol = {
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  export type RolAvgAggregateOutputType = {
    id: number | null
  }

  export type RolSumAggregateOutputType = {
    id: number | null
  }

  export type RolMinAggregateOutputType = {
    id: number | null
    codigo: string | null
    nombre: string | null
    descripcion: string | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RolMaxAggregateOutputType = {
    id: number | null
    codigo: string | null
    nombre: string | null
    descripcion: string | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RolCountAggregateOutputType = {
    id: number
    codigo: number
    nombre: number
    descripcion: number
    activo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RolAvgAggregateInputType = {
    id?: true
  }

  export type RolSumAggregateInputType = {
    id?: true
  }

  export type RolMinAggregateInputType = {
    id?: true
    codigo?: true
    nombre?: true
    descripcion?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RolMaxAggregateInputType = {
    id?: true
    codigo?: true
    nombre?: true
    descripcion?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RolCountAggregateInputType = {
    id?: true
    codigo?: true
    nombre?: true
    descripcion?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rol to aggregate.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rols
    **/
    _count?: true | RolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolMaxAggregateInputType
  }

  export type GetRolAggregateType<T extends RolAggregateArgs> = {
        [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRol[P]>
      : GetScalarType<T[P], AggregateRol[P]>
  }




  export type RolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolWhereInput
    orderBy?: RolOrderByWithAggregationInput | RolOrderByWithAggregationInput[]
    by: RolScalarFieldEnum[] | RolScalarFieldEnum
    having?: RolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolCountAggregateInputType | true
    _avg?: RolAvgAggregateInputType
    _sum?: RolSumAggregateInputType
    _min?: RolMinAggregateInputType
    _max?: RolMaxAggregateInputType
  }

  export type RolGroupByOutputType = {
    id: number
    codigo: string
    nombre: string
    descripcion: string | null
    activo: boolean
    createdAt: Date
    updatedAt: Date
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  type GetRolGroupByPayload<T extends RolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolGroupByOutputType[P]>
            : GetScalarType<T[P], RolGroupByOutputType[P]>
        }
      >
    >


  export type RolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    nombre?: boolean
    descripcion?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarios?: boolean | Rol$usuariosArgs<ExtArgs>
    permisos?: boolean | Rol$permisosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol"]>

  export type RolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    nombre?: boolean
    descripcion?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rol"]>

  export type RolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    nombre?: boolean
    descripcion?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rol"]>

  export type RolSelectScalar = {
    id?: boolean
    codigo?: boolean
    nombre?: boolean
    descripcion?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigo" | "nombre" | "descripcion" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["rol"]>
  export type RolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Rol$usuariosArgs<ExtArgs>
    permisos?: boolean | Rol$permisosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rol"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
      permisos: Prisma.$RolPermisoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigo: string
      nombre: string
      descripcion: string | null
      activo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rol"]>
    composites: {}
  }

  type RolGetPayload<S extends boolean | null | undefined | RolDefaultArgs> = $Result.GetResult<Prisma.$RolPayload, S>

  type RolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolCountAggregateInputType | true
    }

  export interface RolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rol'], meta: { name: 'Rol' } }
    /**
     * Find zero or one Rol that matches the filter.
     * @param {RolFindUniqueArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolFindUniqueArgs>(args: SelectSubset<T, RolFindUniqueArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolFindUniqueOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolFindUniqueOrThrowArgs>(args: SelectSubset<T, RolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolFindFirstArgs>(args?: SelectSubset<T, RolFindFirstArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolFindFirstOrThrowArgs>(args?: SelectSubset<T, RolFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rols
     * const rols = await prisma.rol.findMany()
     * 
     * // Get first 10 Rols
     * const rols = await prisma.rol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolWithIdOnly = await prisma.rol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolFindManyArgs>(args?: SelectSubset<T, RolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rol.
     * @param {RolCreateArgs} args - Arguments to create a Rol.
     * @example
     * // Create one Rol
     * const Rol = await prisma.rol.create({
     *   data: {
     *     // ... data to create a Rol
     *   }
     * })
     * 
     */
    create<T extends RolCreateArgs>(args: SelectSubset<T, RolCreateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rols.
     * @param {RolCreateManyArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolCreateManyArgs>(args?: SelectSubset<T, RolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rols and returns the data saved in the database.
     * @param {RolCreateManyAndReturnArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rols and only return the `id`
     * const rolWithIdOnly = await prisma.rol.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolCreateManyAndReturnArgs>(args?: SelectSubset<T, RolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rol.
     * @param {RolDeleteArgs} args - Arguments to delete one Rol.
     * @example
     * // Delete one Rol
     * const Rol = await prisma.rol.delete({
     *   where: {
     *     // ... filter to delete one Rol
     *   }
     * })
     * 
     */
    delete<T extends RolDeleteArgs>(args: SelectSubset<T, RolDeleteArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rol.
     * @param {RolUpdateArgs} args - Arguments to update one Rol.
     * @example
     * // Update one Rol
     * const rol = await prisma.rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolUpdateArgs>(args: SelectSubset<T, RolUpdateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rols.
     * @param {RolDeleteManyArgs} args - Arguments to filter Rols to delete.
     * @example
     * // Delete a few Rols
     * const { count } = await prisma.rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolDeleteManyArgs>(args?: SelectSubset<T, RolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolUpdateManyArgs>(args: SelectSubset<T, RolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols and returns the data updated in the database.
     * @param {RolUpdateManyAndReturnArgs} args - Arguments to update many Rols.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rols and only return the `id`
     * const rolWithIdOnly = await prisma.rol.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RolUpdateManyAndReturnArgs>(args: SelectSubset<T, RolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rol.
     * @param {RolUpsertArgs} args - Arguments to update or create a Rol.
     * @example
     * // Update or create a Rol
     * const rol = await prisma.rol.upsert({
     *   create: {
     *     // ... data to create a Rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol we want to update
     *   }
     * })
     */
    upsert<T extends RolUpsertArgs>(args: SelectSubset<T, RolUpsertArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolCountArgs} args - Arguments to filter Rols to count.
     * @example
     * // Count the number of Rols
     * const count = await prisma.rol.count({
     *   where: {
     *     // ... the filter for the Rols we want to count
     *   }
     * })
    **/
    count<T extends RolCountArgs>(
      args?: Subset<T, RolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolAggregateArgs>(args: Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>

    /**
     * Group by Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolGroupByArgs} args - Group by arguments.
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
      T extends RolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolGroupByArgs['orderBy'] }
        : { orderBy?: RolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rol model
   */
  readonly fields: RolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Rol$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Rol$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    permisos<T extends Rol$permisosArgs<ExtArgs> = {}>(args?: Subset<T, Rol$permisosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Rol model
   */
  interface RolFieldRefs {
    readonly id: FieldRef<"Rol", 'Int'>
    readonly codigo: FieldRef<"Rol", 'String'>
    readonly nombre: FieldRef<"Rol", 'String'>
    readonly descripcion: FieldRef<"Rol", 'String'>
    readonly activo: FieldRef<"Rol", 'Boolean'>
    readonly createdAt: FieldRef<"Rol", 'DateTime'>
    readonly updatedAt: FieldRef<"Rol", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rol findUnique
   */
  export type RolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findUniqueOrThrow
   */
  export type RolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findFirst
   */
  export type RolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findFirstOrThrow
   */
  export type RolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findMany
   */
  export type RolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rols to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol create
   */
  export type RolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to create a Rol.
     */
    data: XOR<RolCreateInput, RolUncheckedCreateInput>
  }

  /**
   * Rol createMany
   */
  export type RolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol createManyAndReturn
   */
  export type RolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol update
   */
  export type RolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to update a Rol.
     */
    data: XOR<RolUpdateInput, RolUncheckedUpdateInput>
    /**
     * Choose, which Rol to update.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol updateMany
   */
  export type RolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol updateManyAndReturn
   */
  export type RolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol upsert
   */
  export type RolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The filter to search for the Rol to update in case it exists.
     */
    where: RolWhereUniqueInput
    /**
     * In case the Rol found by the `where` argument doesn't exist, create a new Rol with this data.
     */
    create: XOR<RolCreateInput, RolUncheckedCreateInput>
    /**
     * In case the Rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolUpdateInput, RolUncheckedUpdateInput>
  }

  /**
   * Rol delete
   */
  export type RolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter which Rol to delete.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol deleteMany
   */
  export type RolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rols to delete
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to delete.
     */
    limit?: number
  }

  /**
   * Rol.usuarios
   */
  export type Rol$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Rol.permisos
   */
  export type Rol$permisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    where?: RolPermisoWhereInput
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    cursor?: RolPermisoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * Rol without action
   */
  export type RolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
  }


  /**
   * Model Permiso
   */

  export type AggregatePermiso = {
    _count: PermisoCountAggregateOutputType | null
    _avg: PermisoAvgAggregateOutputType | null
    _sum: PermisoSumAggregateOutputType | null
    _min: PermisoMinAggregateOutputType | null
    _max: PermisoMaxAggregateOutputType | null
  }

  export type PermisoAvgAggregateOutputType = {
    id: number | null
  }

  export type PermisoSumAggregateOutputType = {
    id: number | null
  }

  export type PermisoMinAggregateOutputType = {
    id: number | null
    codigo: string | null
    modulo: string | null
    descripcion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermisoMaxAggregateOutputType = {
    id: number | null
    codigo: string | null
    modulo: string | null
    descripcion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermisoCountAggregateOutputType = {
    id: number
    codigo: number
    modulo: number
    descripcion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PermisoAvgAggregateInputType = {
    id?: true
  }

  export type PermisoSumAggregateInputType = {
    id?: true
  }

  export type PermisoMinAggregateInputType = {
    id?: true
    codigo?: true
    modulo?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermisoMaxAggregateInputType = {
    id?: true
    codigo?: true
    modulo?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermisoCountAggregateInputType = {
    id?: true
    codigo?: true
    modulo?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PermisoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permiso to aggregate.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permisos
    **/
    _count?: true | PermisoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermisoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermisoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermisoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermisoMaxAggregateInputType
  }

  export type GetPermisoAggregateType<T extends PermisoAggregateArgs> = {
        [P in keyof T & keyof AggregatePermiso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermiso[P]>
      : GetScalarType<T[P], AggregatePermiso[P]>
  }




  export type PermisoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermisoWhereInput
    orderBy?: PermisoOrderByWithAggregationInput | PermisoOrderByWithAggregationInput[]
    by: PermisoScalarFieldEnum[] | PermisoScalarFieldEnum
    having?: PermisoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermisoCountAggregateInputType | true
    _avg?: PermisoAvgAggregateInputType
    _sum?: PermisoSumAggregateInputType
    _min?: PermisoMinAggregateInputType
    _max?: PermisoMaxAggregateInputType
  }

  export type PermisoGroupByOutputType = {
    id: number
    codigo: string
    modulo: string
    descripcion: string | null
    createdAt: Date
    updatedAt: Date
    _count: PermisoCountAggregateOutputType | null
    _avg: PermisoAvgAggregateOutputType | null
    _sum: PermisoSumAggregateOutputType | null
    _min: PermisoMinAggregateOutputType | null
    _max: PermisoMaxAggregateOutputType | null
  }

  type GetPermisoGroupByPayload<T extends PermisoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermisoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermisoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermisoGroupByOutputType[P]>
            : GetScalarType<T[P], PermisoGroupByOutputType[P]>
        }
      >
    >


  export type PermisoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    modulo?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roles?: boolean | Permiso$rolesArgs<ExtArgs>
    _count?: boolean | PermisoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permiso"]>

  export type PermisoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    modulo?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["permiso"]>

  export type PermisoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    modulo?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["permiso"]>

  export type PermisoSelectScalar = {
    id?: boolean
    codigo?: boolean
    modulo?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PermisoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigo" | "modulo" | "descripcion" | "createdAt" | "updatedAt", ExtArgs["result"]["permiso"]>
  export type PermisoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Permiso$rolesArgs<ExtArgs>
    _count?: boolean | PermisoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermisoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PermisoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PermisoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permiso"
    objects: {
      roles: Prisma.$RolPermisoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigo: string
      modulo: string
      descripcion: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["permiso"]>
    composites: {}
  }

  type PermisoGetPayload<S extends boolean | null | undefined | PermisoDefaultArgs> = $Result.GetResult<Prisma.$PermisoPayload, S>

  type PermisoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermisoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermisoCountAggregateInputType | true
    }

  export interface PermisoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permiso'], meta: { name: 'Permiso' } }
    /**
     * Find zero or one Permiso that matches the filter.
     * @param {PermisoFindUniqueArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermisoFindUniqueArgs>(args: SelectSubset<T, PermisoFindUniqueArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permiso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermisoFindUniqueOrThrowArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermisoFindUniqueOrThrowArgs>(args: SelectSubset<T, PermisoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permiso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoFindFirstArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermisoFindFirstArgs>(args?: SelectSubset<T, PermisoFindFirstArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permiso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoFindFirstOrThrowArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermisoFindFirstOrThrowArgs>(args?: SelectSubset<T, PermisoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permisos
     * const permisos = await prisma.permiso.findMany()
     * 
     * // Get first 10 Permisos
     * const permisos = await prisma.permiso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permisoWithIdOnly = await prisma.permiso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermisoFindManyArgs>(args?: SelectSubset<T, PermisoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permiso.
     * @param {PermisoCreateArgs} args - Arguments to create a Permiso.
     * @example
     * // Create one Permiso
     * const Permiso = await prisma.permiso.create({
     *   data: {
     *     // ... data to create a Permiso
     *   }
     * })
     * 
     */
    create<T extends PermisoCreateArgs>(args: SelectSubset<T, PermisoCreateArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permisos.
     * @param {PermisoCreateManyArgs} args - Arguments to create many Permisos.
     * @example
     * // Create many Permisos
     * const permiso = await prisma.permiso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermisoCreateManyArgs>(args?: SelectSubset<T, PermisoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permisos and returns the data saved in the database.
     * @param {PermisoCreateManyAndReturnArgs} args - Arguments to create many Permisos.
     * @example
     * // Create many Permisos
     * const permiso = await prisma.permiso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permisos and only return the `id`
     * const permisoWithIdOnly = await prisma.permiso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermisoCreateManyAndReturnArgs>(args?: SelectSubset<T, PermisoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permiso.
     * @param {PermisoDeleteArgs} args - Arguments to delete one Permiso.
     * @example
     * // Delete one Permiso
     * const Permiso = await prisma.permiso.delete({
     *   where: {
     *     // ... filter to delete one Permiso
     *   }
     * })
     * 
     */
    delete<T extends PermisoDeleteArgs>(args: SelectSubset<T, PermisoDeleteArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permiso.
     * @param {PermisoUpdateArgs} args - Arguments to update one Permiso.
     * @example
     * // Update one Permiso
     * const permiso = await prisma.permiso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermisoUpdateArgs>(args: SelectSubset<T, PermisoUpdateArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permisos.
     * @param {PermisoDeleteManyArgs} args - Arguments to filter Permisos to delete.
     * @example
     * // Delete a few Permisos
     * const { count } = await prisma.permiso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermisoDeleteManyArgs>(args?: SelectSubset<T, PermisoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permisos
     * const permiso = await prisma.permiso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermisoUpdateManyArgs>(args: SelectSubset<T, PermisoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permisos and returns the data updated in the database.
     * @param {PermisoUpdateManyAndReturnArgs} args - Arguments to update many Permisos.
     * @example
     * // Update many Permisos
     * const permiso = await prisma.permiso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permisos and only return the `id`
     * const permisoWithIdOnly = await prisma.permiso.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PermisoUpdateManyAndReturnArgs>(args: SelectSubset<T, PermisoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permiso.
     * @param {PermisoUpsertArgs} args - Arguments to update or create a Permiso.
     * @example
     * // Update or create a Permiso
     * const permiso = await prisma.permiso.upsert({
     *   create: {
     *     // ... data to create a Permiso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permiso we want to update
     *   }
     * })
     */
    upsert<T extends PermisoUpsertArgs>(args: SelectSubset<T, PermisoUpsertArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoCountArgs} args - Arguments to filter Permisos to count.
     * @example
     * // Count the number of Permisos
     * const count = await prisma.permiso.count({
     *   where: {
     *     // ... the filter for the Permisos we want to count
     *   }
     * })
    **/
    count<T extends PermisoCountArgs>(
      args?: Subset<T, PermisoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermisoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermisoAggregateArgs>(args: Subset<T, PermisoAggregateArgs>): Prisma.PrismaPromise<GetPermisoAggregateType<T>>

    /**
     * Group by Permiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoGroupByArgs} args - Group by arguments.
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
      T extends PermisoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermisoGroupByArgs['orderBy'] }
        : { orderBy?: PermisoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermisoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermisoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permiso model
   */
  readonly fields: PermisoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permiso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermisoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends Permiso$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Permiso$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Permiso model
   */
  interface PermisoFieldRefs {
    readonly id: FieldRef<"Permiso", 'Int'>
    readonly codigo: FieldRef<"Permiso", 'String'>
    readonly modulo: FieldRef<"Permiso", 'String'>
    readonly descripcion: FieldRef<"Permiso", 'String'>
    readonly createdAt: FieldRef<"Permiso", 'DateTime'>
    readonly updatedAt: FieldRef<"Permiso", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Permiso findUnique
   */
  export type PermisoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso findUniqueOrThrow
   */
  export type PermisoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso findFirst
   */
  export type PermisoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permisos.
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permisos.
     */
    distinct?: PermisoScalarFieldEnum | PermisoScalarFieldEnum[]
  }

  /**
   * Permiso findFirstOrThrow
   */
  export type PermisoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permisos.
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permisos.
     */
    distinct?: PermisoScalarFieldEnum | PermisoScalarFieldEnum[]
  }

  /**
   * Permiso findMany
   */
  export type PermisoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permisos to fetch.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permisos.
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permisos.
     */
    distinct?: PermisoScalarFieldEnum | PermisoScalarFieldEnum[]
  }

  /**
   * Permiso create
   */
  export type PermisoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * The data needed to create a Permiso.
     */
    data: XOR<PermisoCreateInput, PermisoUncheckedCreateInput>
  }

  /**
   * Permiso createMany
   */
  export type PermisoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permisos.
     */
    data: PermisoCreateManyInput | PermisoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permiso createManyAndReturn
   */
  export type PermisoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * The data used to create many Permisos.
     */
    data: PermisoCreateManyInput | PermisoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permiso update
   */
  export type PermisoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * The data needed to update a Permiso.
     */
    data: XOR<PermisoUpdateInput, PermisoUncheckedUpdateInput>
    /**
     * Choose, which Permiso to update.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso updateMany
   */
  export type PermisoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permisos.
     */
    data: XOR<PermisoUpdateManyMutationInput, PermisoUncheckedUpdateManyInput>
    /**
     * Filter which Permisos to update
     */
    where?: PermisoWhereInput
    /**
     * Limit how many Permisos to update.
     */
    limit?: number
  }

  /**
   * Permiso updateManyAndReturn
   */
  export type PermisoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * The data used to update Permisos.
     */
    data: XOR<PermisoUpdateManyMutationInput, PermisoUncheckedUpdateManyInput>
    /**
     * Filter which Permisos to update
     */
    where?: PermisoWhereInput
    /**
     * Limit how many Permisos to update.
     */
    limit?: number
  }

  /**
   * Permiso upsert
   */
  export type PermisoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * The filter to search for the Permiso to update in case it exists.
     */
    where: PermisoWhereUniqueInput
    /**
     * In case the Permiso found by the `where` argument doesn't exist, create a new Permiso with this data.
     */
    create: XOR<PermisoCreateInput, PermisoUncheckedCreateInput>
    /**
     * In case the Permiso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermisoUpdateInput, PermisoUncheckedUpdateInput>
  }

  /**
   * Permiso delete
   */
  export type PermisoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter which Permiso to delete.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso deleteMany
   */
  export type PermisoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permisos to delete
     */
    where?: PermisoWhereInput
    /**
     * Limit how many Permisos to delete.
     */
    limit?: number
  }

  /**
   * Permiso.roles
   */
  export type Permiso$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    where?: RolPermisoWhereInput
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    cursor?: RolPermisoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * Permiso without action
   */
  export type PermisoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
  }


  /**
   * Model RolPermiso
   */

  export type AggregateRolPermiso = {
    _count: RolPermisoCountAggregateOutputType | null
    _avg: RolPermisoAvgAggregateOutputType | null
    _sum: RolPermisoSumAggregateOutputType | null
    _min: RolPermisoMinAggregateOutputType | null
    _max: RolPermisoMaxAggregateOutputType | null
  }

  export type RolPermisoAvgAggregateOutputType = {
    rolId: number | null
    permisoId: number | null
  }

  export type RolPermisoSumAggregateOutputType = {
    rolId: number | null
    permisoId: number | null
  }

  export type RolPermisoMinAggregateOutputType = {
    rolId: number | null
    permisoId: number | null
  }

  export type RolPermisoMaxAggregateOutputType = {
    rolId: number | null
    permisoId: number | null
  }

  export type RolPermisoCountAggregateOutputType = {
    rolId: number
    permisoId: number
    _all: number
  }


  export type RolPermisoAvgAggregateInputType = {
    rolId?: true
    permisoId?: true
  }

  export type RolPermisoSumAggregateInputType = {
    rolId?: true
    permisoId?: true
  }

  export type RolPermisoMinAggregateInputType = {
    rolId?: true
    permisoId?: true
  }

  export type RolPermisoMaxAggregateInputType = {
    rolId?: true
    permisoId?: true
  }

  export type RolPermisoCountAggregateInputType = {
    rolId?: true
    permisoId?: true
    _all?: true
  }

  export type RolPermisoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolPermiso to aggregate.
     */
    where?: RolPermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolPermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolPermisos
    **/
    _count?: true | RolPermisoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolPermisoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolPermisoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolPermisoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolPermisoMaxAggregateInputType
  }

  export type GetRolPermisoAggregateType<T extends RolPermisoAggregateArgs> = {
        [P in keyof T & keyof AggregateRolPermiso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolPermiso[P]>
      : GetScalarType<T[P], AggregateRolPermiso[P]>
  }




  export type RolPermisoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolPermisoWhereInput
    orderBy?: RolPermisoOrderByWithAggregationInput | RolPermisoOrderByWithAggregationInput[]
    by: RolPermisoScalarFieldEnum[] | RolPermisoScalarFieldEnum
    having?: RolPermisoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolPermisoCountAggregateInputType | true
    _avg?: RolPermisoAvgAggregateInputType
    _sum?: RolPermisoSumAggregateInputType
    _min?: RolPermisoMinAggregateInputType
    _max?: RolPermisoMaxAggregateInputType
  }

  export type RolPermisoGroupByOutputType = {
    rolId: number
    permisoId: number
    _count: RolPermisoCountAggregateOutputType | null
    _avg: RolPermisoAvgAggregateOutputType | null
    _sum: RolPermisoSumAggregateOutputType | null
    _min: RolPermisoMinAggregateOutputType | null
    _max: RolPermisoMaxAggregateOutputType | null
  }

  type GetRolPermisoGroupByPayload<T extends RolPermisoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolPermisoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolPermisoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolPermisoGroupByOutputType[P]>
            : GetScalarType<T[P], RolPermisoGroupByOutputType[P]>
        }
      >
    >


  export type RolPermisoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rolId?: boolean
    permisoId?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolPermiso"]>

  export type RolPermisoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rolId?: boolean
    permisoId?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolPermiso"]>

  export type RolPermisoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rolId?: boolean
    permisoId?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolPermiso"]>

  export type RolPermisoSelectScalar = {
    rolId?: boolean
    permisoId?: boolean
  }

  export type RolPermisoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"rolId" | "permisoId", ExtArgs["result"]["rolPermiso"]>
  export type RolPermisoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }
  export type RolPermisoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }
  export type RolPermisoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }

  export type $RolPermisoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolPermiso"
    objects: {
      rol: Prisma.$RolPayload<ExtArgs>
      permiso: Prisma.$PermisoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      rolId: number
      permisoId: number
    }, ExtArgs["result"]["rolPermiso"]>
    composites: {}
  }

  type RolPermisoGetPayload<S extends boolean | null | undefined | RolPermisoDefaultArgs> = $Result.GetResult<Prisma.$RolPermisoPayload, S>

  type RolPermisoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolPermisoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolPermisoCountAggregateInputType | true
    }

  export interface RolPermisoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolPermiso'], meta: { name: 'RolPermiso' } }
    /**
     * Find zero or one RolPermiso that matches the filter.
     * @param {RolPermisoFindUniqueArgs} args - Arguments to find a RolPermiso
     * @example
     * // Get one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolPermisoFindUniqueArgs>(args: SelectSubset<T, RolPermisoFindUniqueArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RolPermiso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolPermisoFindUniqueOrThrowArgs} args - Arguments to find a RolPermiso
     * @example
     * // Get one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolPermisoFindUniqueOrThrowArgs>(args: SelectSubset<T, RolPermisoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolPermiso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoFindFirstArgs} args - Arguments to find a RolPermiso
     * @example
     * // Get one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolPermisoFindFirstArgs>(args?: SelectSubset<T, RolPermisoFindFirstArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolPermiso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoFindFirstOrThrowArgs} args - Arguments to find a RolPermiso
     * @example
     * // Get one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolPermisoFindFirstOrThrowArgs>(args?: SelectSubset<T, RolPermisoFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RolPermisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolPermisos
     * const rolPermisos = await prisma.rolPermiso.findMany()
     * 
     * // Get first 10 RolPermisos
     * const rolPermisos = await prisma.rolPermiso.findMany({ take: 10 })
     * 
     * // Only select the `rolId`
     * const rolPermisoWithRolIdOnly = await prisma.rolPermiso.findMany({ select: { rolId: true } })
     * 
     */
    findMany<T extends RolPermisoFindManyArgs>(args?: SelectSubset<T, RolPermisoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RolPermiso.
     * @param {RolPermisoCreateArgs} args - Arguments to create a RolPermiso.
     * @example
     * // Create one RolPermiso
     * const RolPermiso = await prisma.rolPermiso.create({
     *   data: {
     *     // ... data to create a RolPermiso
     *   }
     * })
     * 
     */
    create<T extends RolPermisoCreateArgs>(args: SelectSubset<T, RolPermisoCreateArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RolPermisos.
     * @param {RolPermisoCreateManyArgs} args - Arguments to create many RolPermisos.
     * @example
     * // Create many RolPermisos
     * const rolPermiso = await prisma.rolPermiso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolPermisoCreateManyArgs>(args?: SelectSubset<T, RolPermisoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RolPermisos and returns the data saved in the database.
     * @param {RolPermisoCreateManyAndReturnArgs} args - Arguments to create many RolPermisos.
     * @example
     * // Create many RolPermisos
     * const rolPermiso = await prisma.rolPermiso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RolPermisos and only return the `rolId`
     * const rolPermisoWithRolIdOnly = await prisma.rolPermiso.createManyAndReturn({
     *   select: { rolId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolPermisoCreateManyAndReturnArgs>(args?: SelectSubset<T, RolPermisoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RolPermiso.
     * @param {RolPermisoDeleteArgs} args - Arguments to delete one RolPermiso.
     * @example
     * // Delete one RolPermiso
     * const RolPermiso = await prisma.rolPermiso.delete({
     *   where: {
     *     // ... filter to delete one RolPermiso
     *   }
     * })
     * 
     */
    delete<T extends RolPermisoDeleteArgs>(args: SelectSubset<T, RolPermisoDeleteArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RolPermiso.
     * @param {RolPermisoUpdateArgs} args - Arguments to update one RolPermiso.
     * @example
     * // Update one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolPermisoUpdateArgs>(args: SelectSubset<T, RolPermisoUpdateArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RolPermisos.
     * @param {RolPermisoDeleteManyArgs} args - Arguments to filter RolPermisos to delete.
     * @example
     * // Delete a few RolPermisos
     * const { count } = await prisma.rolPermiso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolPermisoDeleteManyArgs>(args?: SelectSubset<T, RolPermisoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolPermisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolPermisos
     * const rolPermiso = await prisma.rolPermiso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolPermisoUpdateManyArgs>(args: SelectSubset<T, RolPermisoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolPermisos and returns the data updated in the database.
     * @param {RolPermisoUpdateManyAndReturnArgs} args - Arguments to update many RolPermisos.
     * @example
     * // Update many RolPermisos
     * const rolPermiso = await prisma.rolPermiso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RolPermisos and only return the `rolId`
     * const rolPermisoWithRolIdOnly = await prisma.rolPermiso.updateManyAndReturn({
     *   select: { rolId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RolPermisoUpdateManyAndReturnArgs>(args: SelectSubset<T, RolPermisoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RolPermiso.
     * @param {RolPermisoUpsertArgs} args - Arguments to update or create a RolPermiso.
     * @example
     * // Update or create a RolPermiso
     * const rolPermiso = await prisma.rolPermiso.upsert({
     *   create: {
     *     // ... data to create a RolPermiso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolPermiso we want to update
     *   }
     * })
     */
    upsert<T extends RolPermisoUpsertArgs>(args: SelectSubset<T, RolPermisoUpsertArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RolPermisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoCountArgs} args - Arguments to filter RolPermisos to count.
     * @example
     * // Count the number of RolPermisos
     * const count = await prisma.rolPermiso.count({
     *   where: {
     *     // ... the filter for the RolPermisos we want to count
     *   }
     * })
    **/
    count<T extends RolPermisoCountArgs>(
      args?: Subset<T, RolPermisoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolPermisoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolPermiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolPermisoAggregateArgs>(args: Subset<T, RolPermisoAggregateArgs>): Prisma.PrismaPromise<GetRolPermisoAggregateType<T>>

    /**
     * Group by RolPermiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoGroupByArgs} args - Group by arguments.
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
      T extends RolPermisoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolPermisoGroupByArgs['orderBy'] }
        : { orderBy?: RolPermisoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolPermisoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolPermisoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolPermiso model
   */
  readonly fields: RolPermisoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolPermiso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolPermisoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rol<T extends RolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolDefaultArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    permiso<T extends PermisoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermisoDefaultArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RolPermiso model
   */
  interface RolPermisoFieldRefs {
    readonly rolId: FieldRef<"RolPermiso", 'Int'>
    readonly permisoId: FieldRef<"RolPermiso", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RolPermiso findUnique
   */
  export type RolPermisoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermiso to fetch.
     */
    where: RolPermisoWhereUniqueInput
  }

  /**
   * RolPermiso findUniqueOrThrow
   */
  export type RolPermisoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermiso to fetch.
     */
    where: RolPermisoWhereUniqueInput
  }

  /**
   * RolPermiso findFirst
   */
  export type RolPermisoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermiso to fetch.
     */
    where?: RolPermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolPermisos.
     */
    cursor?: RolPermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolPermisos.
     */
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * RolPermiso findFirstOrThrow
   */
  export type RolPermisoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermiso to fetch.
     */
    where?: RolPermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolPermisos.
     */
    cursor?: RolPermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolPermisos.
     */
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * RolPermiso findMany
   */
  export type RolPermisoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermisos to fetch.
     */
    where?: RolPermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolPermisos.
     */
    cursor?: RolPermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolPermisos.
     */
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * RolPermiso create
   */
  export type RolPermisoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * The data needed to create a RolPermiso.
     */
    data: XOR<RolPermisoCreateInput, RolPermisoUncheckedCreateInput>
  }

  /**
   * RolPermiso createMany
   */
  export type RolPermisoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolPermisos.
     */
    data: RolPermisoCreateManyInput | RolPermisoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolPermiso createManyAndReturn
   */
  export type RolPermisoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * The data used to create many RolPermisos.
     */
    data: RolPermisoCreateManyInput | RolPermisoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolPermiso update
   */
  export type RolPermisoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * The data needed to update a RolPermiso.
     */
    data: XOR<RolPermisoUpdateInput, RolPermisoUncheckedUpdateInput>
    /**
     * Choose, which RolPermiso to update.
     */
    where: RolPermisoWhereUniqueInput
  }

  /**
   * RolPermiso updateMany
   */
  export type RolPermisoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolPermisos.
     */
    data: XOR<RolPermisoUpdateManyMutationInput, RolPermisoUncheckedUpdateManyInput>
    /**
     * Filter which RolPermisos to update
     */
    where?: RolPermisoWhereInput
    /**
     * Limit how many RolPermisos to update.
     */
    limit?: number
  }

  /**
   * RolPermiso updateManyAndReturn
   */
  export type RolPermisoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * The data used to update RolPermisos.
     */
    data: XOR<RolPermisoUpdateManyMutationInput, RolPermisoUncheckedUpdateManyInput>
    /**
     * Filter which RolPermisos to update
     */
    where?: RolPermisoWhereInput
    /**
     * Limit how many RolPermisos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolPermiso upsert
   */
  export type RolPermisoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * The filter to search for the RolPermiso to update in case it exists.
     */
    where: RolPermisoWhereUniqueInput
    /**
     * In case the RolPermiso found by the `where` argument doesn't exist, create a new RolPermiso with this data.
     */
    create: XOR<RolPermisoCreateInput, RolPermisoUncheckedCreateInput>
    /**
     * In case the RolPermiso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolPermisoUpdateInput, RolPermisoUncheckedUpdateInput>
  }

  /**
   * RolPermiso delete
   */
  export type RolPermisoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter which RolPermiso to delete.
     */
    where: RolPermisoWhereUniqueInput
  }

  /**
   * RolPermiso deleteMany
   */
  export type RolPermisoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolPermisos to delete
     */
    where?: RolPermisoWhereInput
    /**
     * Limit how many RolPermisos to delete.
     */
    limit?: number
  }

  /**
   * RolPermiso without action
   */
  export type RolPermisoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
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


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    descuento: 'descuento',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const ProveedorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    telefono: 'telefono',
    email: 'email',
    direccion: 'direccion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProveedorScalarFieldEnum = (typeof ProveedorScalarFieldEnum)[keyof typeof ProveedorScalarFieldEnum]


  export const ProductoScalarFieldEnum: {
    id: 'id',
    codigoBarra: 'codigoBarra',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio',
    stock: 'stock',
    stockMinimo: 'stockMinimo',
    descuento: 'descuento',
    categoriaId: 'categoriaId',
    proveedorId: 'proveedorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const VentaScalarFieldEnum: {
    id: 'id',
    total: 'total',
    descuentoTotal: 'descuentoTotal',
    metodoPago: 'metodoPago',
    tieneStockInsuficiente: 'tieneStockInsuficiente',
    userId: 'userId',
    autorizadoPorId: 'autorizadoPorId',
    motivoAutorizacion: 'motivoAutorizacion',
    createdAt: 'createdAt'
  };

  export type VentaScalarFieldEnum = (typeof VentaScalarFieldEnum)[keyof typeof VentaScalarFieldEnum]


  export const DetalleVentaScalarFieldEnum: {
    id: 'id',
    ventaId: 'ventaId',
    productoId: 'productoId',
    cantidad: 'cantidad',
    precioUnit: 'precioUnit',
    descuento: 'descuento',
    subtotal: 'subtotal',
    stockInsuficiente: 'stockInsuficiente'
  };

  export type DetalleVentaScalarFieldEnum = (typeof DetalleVentaScalarFieldEnum)[keyof typeof DetalleVentaScalarFieldEnum]


  export const MovimientoScalarFieldEnum: {
    id: 'id',
    productoId: 'productoId',
    tipo: 'tipo',
    cantidad: 'cantidad',
    motivo: 'motivo',
    stockAntes: 'stockAntes',
    stockDespues: 'stockDespues',
    createdAt: 'createdAt'
  };

  export type MovimientoScalarFieldEnum = (typeof MovimientoScalarFieldEnum)[keyof typeof MovimientoScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    passwordHash: 'passwordHash',
    pinAutorizacionHash: 'pinAutorizacionHash',
    rolId: 'rolId',
    activo: 'activo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const RolScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    nombre: 'nombre',
    descripcion: 'descripcion',
    activo: 'activo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum]


  export const PermisoScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    modulo: 'modulo',
    descripcion: 'descripcion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PermisoScalarFieldEnum = (typeof PermisoScalarFieldEnum)[keyof typeof PermisoScalarFieldEnum]


  export const RolPermisoScalarFieldEnum: {
    rolId: 'rolId',
    permisoId: 'permisoId'
  };

  export type RolPermisoScalarFieldEnum = (typeof RolPermisoScalarFieldEnum)[keyof typeof RolPermisoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MetodoPago'
   */
  export type EnumMetodoPagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetodoPago'>
    


  /**
   * Reference to a field of type 'MetodoPago[]'
   */
  export type ListEnumMetodoPagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetodoPago[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TipoMovimiento'
   */
  export type EnumTipoMovimientoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMovimiento'>
    


  /**
   * Reference to a field of type 'TipoMovimiento[]'
   */
  export type ListEnumTipoMovimientoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMovimiento[]'>
    
  /**
   * Deep Input Types
   */


  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nombre?: StringFilter<"Categoria"> | string
    descripcion?: StringNullableFilter<"Categoria"> | string | null
    descuento?: FloatFilter<"Categoria"> | number
    createdAt?: DateTimeFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeFilter<"Categoria"> | Date | string
    productos?: ProductoListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    descuento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productos?: ProductoOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    descripcion?: StringNullableFilter<"Categoria"> | string | null
    descuento?: FloatFilter<"Categoria"> | number
    createdAt?: DateTimeFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeFilter<"Categoria"> | Date | string
    productos?: ProductoListRelationFilter
  }, "id" | "nombre">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    descuento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    nombre?: StringWithAggregatesFilter<"Categoria"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Categoria"> | string | null
    descuento?: FloatWithAggregatesFilter<"Categoria"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
  }

  export type ProveedorWhereInput = {
    AND?: ProveedorWhereInput | ProveedorWhereInput[]
    OR?: ProveedorWhereInput[]
    NOT?: ProveedorWhereInput | ProveedorWhereInput[]
    id?: IntFilter<"Proveedor"> | number
    nombre?: StringFilter<"Proveedor"> | string
    telefono?: StringNullableFilter<"Proveedor"> | string | null
    email?: StringNullableFilter<"Proveedor"> | string | null
    direccion?: StringNullableFilter<"Proveedor"> | string | null
    createdAt?: DateTimeFilter<"Proveedor"> | Date | string
    updatedAt?: DateTimeFilter<"Proveedor"> | Date | string
    productos?: ProductoListRelationFilter
  }

  export type ProveedorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productos?: ProductoOrderByRelationAggregateInput
  }

  export type ProveedorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: ProveedorWhereInput | ProveedorWhereInput[]
    OR?: ProveedorWhereInput[]
    NOT?: ProveedorWhereInput | ProveedorWhereInput[]
    nombre?: StringFilter<"Proveedor"> | string
    telefono?: StringNullableFilter<"Proveedor"> | string | null
    direccion?: StringNullableFilter<"Proveedor"> | string | null
    createdAt?: DateTimeFilter<"Proveedor"> | Date | string
    updatedAt?: DateTimeFilter<"Proveedor"> | Date | string
    productos?: ProductoListRelationFilter
  }, "id" | "email">

  export type ProveedorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProveedorCountOrderByAggregateInput
    _avg?: ProveedorAvgOrderByAggregateInput
    _max?: ProveedorMaxOrderByAggregateInput
    _min?: ProveedorMinOrderByAggregateInput
    _sum?: ProveedorSumOrderByAggregateInput
  }

  export type ProveedorScalarWhereWithAggregatesInput = {
    AND?: ProveedorScalarWhereWithAggregatesInput | ProveedorScalarWhereWithAggregatesInput[]
    OR?: ProveedorScalarWhereWithAggregatesInput[]
    NOT?: ProveedorScalarWhereWithAggregatesInput | ProveedorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Proveedor"> | number
    nombre?: StringWithAggregatesFilter<"Proveedor"> | string
    telefono?: StringNullableWithAggregatesFilter<"Proveedor"> | string | null
    email?: StringNullableWithAggregatesFilter<"Proveedor"> | string | null
    direccion?: StringNullableWithAggregatesFilter<"Proveedor"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Proveedor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Proveedor"> | Date | string
  }

  export type ProductoWhereInput = {
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    id?: IntFilter<"Producto"> | number
    codigoBarra?: StringNullableFilter<"Producto"> | string | null
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringNullableFilter<"Producto"> | string | null
    precio?: FloatFilter<"Producto"> | number
    stock?: IntFilter<"Producto"> | number
    stockMinimo?: IntFilter<"Producto"> | number
    descuento?: FloatFilter<"Producto"> | number
    categoriaId?: IntFilter<"Producto"> | number
    proveedorId?: IntFilter<"Producto"> | number
    createdAt?: DateTimeFilter<"Producto"> | Date | string
    updatedAt?: DateTimeFilter<"Producto"> | Date | string
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    proveedor?: XOR<ProveedorScalarRelationFilter, ProveedorWhereInput>
    detalleVentas?: DetalleVentaListRelationFilter
    movimientos?: MovimientoListRelationFilter
  }

  export type ProductoOrderByWithRelationInput = {
    id?: SortOrder
    codigoBarra?: SortOrderInput | SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    stock?: SortOrder
    stockMinimo?: SortOrder
    descuento?: SortOrder
    categoriaId?: SortOrder
    proveedorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    proveedor?: ProveedorOrderByWithRelationInput
    detalleVentas?: DetalleVentaOrderByRelationAggregateInput
    movimientos?: MovimientoOrderByRelationAggregateInput
  }

  export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigoBarra?: string
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringNullableFilter<"Producto"> | string | null
    precio?: FloatFilter<"Producto"> | number
    stock?: IntFilter<"Producto"> | number
    stockMinimo?: IntFilter<"Producto"> | number
    descuento?: FloatFilter<"Producto"> | number
    categoriaId?: IntFilter<"Producto"> | number
    proveedorId?: IntFilter<"Producto"> | number
    createdAt?: DateTimeFilter<"Producto"> | Date | string
    updatedAt?: DateTimeFilter<"Producto"> | Date | string
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    proveedor?: XOR<ProveedorScalarRelationFilter, ProveedorWhereInput>
    detalleVentas?: DetalleVentaListRelationFilter
    movimientos?: MovimientoListRelationFilter
  }, "id" | "codigoBarra">

  export type ProductoOrderByWithAggregationInput = {
    id?: SortOrder
    codigoBarra?: SortOrderInput | SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    stock?: SortOrder
    stockMinimo?: SortOrder
    descuento?: SortOrder
    categoriaId?: SortOrder
    proveedorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductoCountOrderByAggregateInput
    _avg?: ProductoAvgOrderByAggregateInput
    _max?: ProductoMaxOrderByAggregateInput
    _min?: ProductoMinOrderByAggregateInput
    _sum?: ProductoSumOrderByAggregateInput
  }

  export type ProductoScalarWhereWithAggregatesInput = {
    AND?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    OR?: ProductoScalarWhereWithAggregatesInput[]
    NOT?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Producto"> | number
    codigoBarra?: StringNullableWithAggregatesFilter<"Producto"> | string | null
    nombre?: StringWithAggregatesFilter<"Producto"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Producto"> | string | null
    precio?: FloatWithAggregatesFilter<"Producto"> | number
    stock?: IntWithAggregatesFilter<"Producto"> | number
    stockMinimo?: IntWithAggregatesFilter<"Producto"> | number
    descuento?: FloatWithAggregatesFilter<"Producto"> | number
    categoriaId?: IntWithAggregatesFilter<"Producto"> | number
    proveedorId?: IntWithAggregatesFilter<"Producto"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Producto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Producto"> | Date | string
  }

  export type VentaWhereInput = {
    AND?: VentaWhereInput | VentaWhereInput[]
    OR?: VentaWhereInput[]
    NOT?: VentaWhereInput | VentaWhereInput[]
    id?: IntFilter<"Venta"> | number
    total?: FloatFilter<"Venta"> | number
    descuentoTotal?: FloatFilter<"Venta"> | number
    metodoPago?: EnumMetodoPagoFilter<"Venta"> | $Enums.MetodoPago
    tieneStockInsuficiente?: BoolFilter<"Venta"> | boolean
    userId?: IntFilter<"Venta"> | number
    autorizadoPorId?: IntNullableFilter<"Venta"> | number | null
    motivoAutorizacion?: StringNullableFilter<"Venta"> | string | null
    createdAt?: DateTimeFilter<"Venta"> | Date | string
    detalles?: DetalleVentaListRelationFilter
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type VentaOrderByWithRelationInput = {
    id?: SortOrder
    total?: SortOrder
    descuentoTotal?: SortOrder
    metodoPago?: SortOrder
    tieneStockInsuficiente?: SortOrder
    userId?: SortOrder
    autorizadoPorId?: SortOrderInput | SortOrder
    motivoAutorizacion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    detalles?: DetalleVentaOrderByRelationAggregateInput
    user?: UsuarioOrderByWithRelationInput
  }

  export type VentaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VentaWhereInput | VentaWhereInput[]
    OR?: VentaWhereInput[]
    NOT?: VentaWhereInput | VentaWhereInput[]
    total?: FloatFilter<"Venta"> | number
    descuentoTotal?: FloatFilter<"Venta"> | number
    metodoPago?: EnumMetodoPagoFilter<"Venta"> | $Enums.MetodoPago
    tieneStockInsuficiente?: BoolFilter<"Venta"> | boolean
    userId?: IntFilter<"Venta"> | number
    autorizadoPorId?: IntNullableFilter<"Venta"> | number | null
    motivoAutorizacion?: StringNullableFilter<"Venta"> | string | null
    createdAt?: DateTimeFilter<"Venta"> | Date | string
    detalles?: DetalleVentaListRelationFilter
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type VentaOrderByWithAggregationInput = {
    id?: SortOrder
    total?: SortOrder
    descuentoTotal?: SortOrder
    metodoPago?: SortOrder
    tieneStockInsuficiente?: SortOrder
    userId?: SortOrder
    autorizadoPorId?: SortOrderInput | SortOrder
    motivoAutorizacion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: VentaCountOrderByAggregateInput
    _avg?: VentaAvgOrderByAggregateInput
    _max?: VentaMaxOrderByAggregateInput
    _min?: VentaMinOrderByAggregateInput
    _sum?: VentaSumOrderByAggregateInput
  }

  export type VentaScalarWhereWithAggregatesInput = {
    AND?: VentaScalarWhereWithAggregatesInput | VentaScalarWhereWithAggregatesInput[]
    OR?: VentaScalarWhereWithAggregatesInput[]
    NOT?: VentaScalarWhereWithAggregatesInput | VentaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Venta"> | number
    total?: FloatWithAggregatesFilter<"Venta"> | number
    descuentoTotal?: FloatWithAggregatesFilter<"Venta"> | number
    metodoPago?: EnumMetodoPagoWithAggregatesFilter<"Venta"> | $Enums.MetodoPago
    tieneStockInsuficiente?: BoolWithAggregatesFilter<"Venta"> | boolean
    userId?: IntWithAggregatesFilter<"Venta"> | number
    autorizadoPorId?: IntNullableWithAggregatesFilter<"Venta"> | number | null
    motivoAutorizacion?: StringNullableWithAggregatesFilter<"Venta"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Venta"> | Date | string
  }

  export type DetalleVentaWhereInput = {
    AND?: DetalleVentaWhereInput | DetalleVentaWhereInput[]
    OR?: DetalleVentaWhereInput[]
    NOT?: DetalleVentaWhereInput | DetalleVentaWhereInput[]
    id?: IntFilter<"DetalleVenta"> | number
    ventaId?: IntFilter<"DetalleVenta"> | number
    productoId?: IntFilter<"DetalleVenta"> | number
    cantidad?: IntFilter<"DetalleVenta"> | number
    precioUnit?: FloatFilter<"DetalleVenta"> | number
    descuento?: FloatFilter<"DetalleVenta"> | number
    subtotal?: FloatFilter<"DetalleVenta"> | number
    stockInsuficiente?: BoolFilter<"DetalleVenta"> | boolean
    venta?: XOR<VentaScalarRelationFilter, VentaWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type DetalleVentaOrderByWithRelationInput = {
    id?: SortOrder
    ventaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnit?: SortOrder
    descuento?: SortOrder
    subtotal?: SortOrder
    stockInsuficiente?: SortOrder
    venta?: VentaOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
  }

  export type DetalleVentaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DetalleVentaWhereInput | DetalleVentaWhereInput[]
    OR?: DetalleVentaWhereInput[]
    NOT?: DetalleVentaWhereInput | DetalleVentaWhereInput[]
    ventaId?: IntFilter<"DetalleVenta"> | number
    productoId?: IntFilter<"DetalleVenta"> | number
    cantidad?: IntFilter<"DetalleVenta"> | number
    precioUnit?: FloatFilter<"DetalleVenta"> | number
    descuento?: FloatFilter<"DetalleVenta"> | number
    subtotal?: FloatFilter<"DetalleVenta"> | number
    stockInsuficiente?: BoolFilter<"DetalleVenta"> | boolean
    venta?: XOR<VentaScalarRelationFilter, VentaWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "id">

  export type DetalleVentaOrderByWithAggregationInput = {
    id?: SortOrder
    ventaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnit?: SortOrder
    descuento?: SortOrder
    subtotal?: SortOrder
    stockInsuficiente?: SortOrder
    _count?: DetalleVentaCountOrderByAggregateInput
    _avg?: DetalleVentaAvgOrderByAggregateInput
    _max?: DetalleVentaMaxOrderByAggregateInput
    _min?: DetalleVentaMinOrderByAggregateInput
    _sum?: DetalleVentaSumOrderByAggregateInput
  }

  export type DetalleVentaScalarWhereWithAggregatesInput = {
    AND?: DetalleVentaScalarWhereWithAggregatesInput | DetalleVentaScalarWhereWithAggregatesInput[]
    OR?: DetalleVentaScalarWhereWithAggregatesInput[]
    NOT?: DetalleVentaScalarWhereWithAggregatesInput | DetalleVentaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DetalleVenta"> | number
    ventaId?: IntWithAggregatesFilter<"DetalleVenta"> | number
    productoId?: IntWithAggregatesFilter<"DetalleVenta"> | number
    cantidad?: IntWithAggregatesFilter<"DetalleVenta"> | number
    precioUnit?: FloatWithAggregatesFilter<"DetalleVenta"> | number
    descuento?: FloatWithAggregatesFilter<"DetalleVenta"> | number
    subtotal?: FloatWithAggregatesFilter<"DetalleVenta"> | number
    stockInsuficiente?: BoolWithAggregatesFilter<"DetalleVenta"> | boolean
  }

  export type MovimientoWhereInput = {
    AND?: MovimientoWhereInput | MovimientoWhereInput[]
    OR?: MovimientoWhereInput[]
    NOT?: MovimientoWhereInput | MovimientoWhereInput[]
    id?: IntFilter<"Movimiento"> | number
    productoId?: IntFilter<"Movimiento"> | number
    tipo?: EnumTipoMovimientoFilter<"Movimiento"> | $Enums.TipoMovimiento
    cantidad?: IntFilter<"Movimiento"> | number
    motivo?: StringNullableFilter<"Movimiento"> | string | null
    stockAntes?: IntFilter<"Movimiento"> | number
    stockDespues?: IntFilter<"Movimiento"> | number
    createdAt?: DateTimeFilter<"Movimiento"> | Date | string
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type MovimientoOrderByWithRelationInput = {
    id?: SortOrder
    productoId?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    motivo?: SortOrderInput | SortOrder
    stockAntes?: SortOrder
    stockDespues?: SortOrder
    createdAt?: SortOrder
    producto?: ProductoOrderByWithRelationInput
  }

  export type MovimientoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MovimientoWhereInput | MovimientoWhereInput[]
    OR?: MovimientoWhereInput[]
    NOT?: MovimientoWhereInput | MovimientoWhereInput[]
    productoId?: IntFilter<"Movimiento"> | number
    tipo?: EnumTipoMovimientoFilter<"Movimiento"> | $Enums.TipoMovimiento
    cantidad?: IntFilter<"Movimiento"> | number
    motivo?: StringNullableFilter<"Movimiento"> | string | null
    stockAntes?: IntFilter<"Movimiento"> | number
    stockDespues?: IntFilter<"Movimiento"> | number
    createdAt?: DateTimeFilter<"Movimiento"> | Date | string
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "id">

  export type MovimientoOrderByWithAggregationInput = {
    id?: SortOrder
    productoId?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    motivo?: SortOrderInput | SortOrder
    stockAntes?: SortOrder
    stockDespues?: SortOrder
    createdAt?: SortOrder
    _count?: MovimientoCountOrderByAggregateInput
    _avg?: MovimientoAvgOrderByAggregateInput
    _max?: MovimientoMaxOrderByAggregateInput
    _min?: MovimientoMinOrderByAggregateInput
    _sum?: MovimientoSumOrderByAggregateInput
  }

  export type MovimientoScalarWhereWithAggregatesInput = {
    AND?: MovimientoScalarWhereWithAggregatesInput | MovimientoScalarWhereWithAggregatesInput[]
    OR?: MovimientoScalarWhereWithAggregatesInput[]
    NOT?: MovimientoScalarWhereWithAggregatesInput | MovimientoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Movimiento"> | number
    productoId?: IntWithAggregatesFilter<"Movimiento"> | number
    tipo?: EnumTipoMovimientoWithAggregatesFilter<"Movimiento"> | $Enums.TipoMovimiento
    cantidad?: IntWithAggregatesFilter<"Movimiento"> | number
    motivo?: StringNullableWithAggregatesFilter<"Movimiento"> | string | null
    stockAntes?: IntWithAggregatesFilter<"Movimiento"> | number
    stockDespues?: IntWithAggregatesFilter<"Movimiento"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Movimiento"> | Date | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    passwordHash?: StringFilter<"Usuario"> | string
    pinAutorizacionHash?: StringNullableFilter<"Usuario"> | string | null
    rolId?: IntFilter<"Usuario"> | number
    activo?: BoolFilter<"Usuario"> | boolean
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
    ventas?: VentaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    pinAutorizacionHash?: SortOrderInput | SortOrder
    rolId?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rol?: RolOrderByWithRelationInput
    ventas?: VentaOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    passwordHash?: StringFilter<"Usuario"> | string
    pinAutorizacionHash?: StringNullableFilter<"Usuario"> | string | null
    rolId?: IntFilter<"Usuario"> | number
    activo?: BoolFilter<"Usuario"> | boolean
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
    ventas?: VentaListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    pinAutorizacionHash?: SortOrderInput | SortOrder
    rolId?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    passwordHash?: StringWithAggregatesFilter<"Usuario"> | string
    pinAutorizacionHash?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    rolId?: IntWithAggregatesFilter<"Usuario"> | number
    activo?: BoolWithAggregatesFilter<"Usuario"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type RolWhereInput = {
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    id?: IntFilter<"Rol"> | number
    codigo?: StringFilter<"Rol"> | string
    nombre?: StringFilter<"Rol"> | string
    descripcion?: StringNullableFilter<"Rol"> | string | null
    activo?: BoolFilter<"Rol"> | boolean
    createdAt?: DateTimeFilter<"Rol"> | Date | string
    updatedAt?: DateTimeFilter<"Rol"> | Date | string
    usuarios?: UsuarioListRelationFilter
    permisos?: RolPermisoListRelationFilter
  }

  export type RolOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
    permisos?: RolPermisoOrderByRelationAggregateInput
  }

  export type RolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigo?: string
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    nombre?: StringFilter<"Rol"> | string
    descripcion?: StringNullableFilter<"Rol"> | string | null
    activo?: BoolFilter<"Rol"> | boolean
    createdAt?: DateTimeFilter<"Rol"> | Date | string
    updatedAt?: DateTimeFilter<"Rol"> | Date | string
    usuarios?: UsuarioListRelationFilter
    permisos?: RolPermisoListRelationFilter
  }, "id" | "codigo">

  export type RolOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RolCountOrderByAggregateInput
    _avg?: RolAvgOrderByAggregateInput
    _max?: RolMaxOrderByAggregateInput
    _min?: RolMinOrderByAggregateInput
    _sum?: RolSumOrderByAggregateInput
  }

  export type RolScalarWhereWithAggregatesInput = {
    AND?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    OR?: RolScalarWhereWithAggregatesInput[]
    NOT?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rol"> | number
    codigo?: StringWithAggregatesFilter<"Rol"> | string
    nombre?: StringWithAggregatesFilter<"Rol"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Rol"> | string | null
    activo?: BoolWithAggregatesFilter<"Rol"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Rol"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rol"> | Date | string
  }

  export type PermisoWhereInput = {
    AND?: PermisoWhereInput | PermisoWhereInput[]
    OR?: PermisoWhereInput[]
    NOT?: PermisoWhereInput | PermisoWhereInput[]
    id?: IntFilter<"Permiso"> | number
    codigo?: StringFilter<"Permiso"> | string
    modulo?: StringFilter<"Permiso"> | string
    descripcion?: StringNullableFilter<"Permiso"> | string | null
    createdAt?: DateTimeFilter<"Permiso"> | Date | string
    updatedAt?: DateTimeFilter<"Permiso"> | Date | string
    roles?: RolPermisoListRelationFilter
  }

  export type PermisoOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    modulo?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roles?: RolPermisoOrderByRelationAggregateInput
  }

  export type PermisoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigo?: string
    AND?: PermisoWhereInput | PermisoWhereInput[]
    OR?: PermisoWhereInput[]
    NOT?: PermisoWhereInput | PermisoWhereInput[]
    modulo?: StringFilter<"Permiso"> | string
    descripcion?: StringNullableFilter<"Permiso"> | string | null
    createdAt?: DateTimeFilter<"Permiso"> | Date | string
    updatedAt?: DateTimeFilter<"Permiso"> | Date | string
    roles?: RolPermisoListRelationFilter
  }, "id" | "codigo">

  export type PermisoOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    modulo?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PermisoCountOrderByAggregateInput
    _avg?: PermisoAvgOrderByAggregateInput
    _max?: PermisoMaxOrderByAggregateInput
    _min?: PermisoMinOrderByAggregateInput
    _sum?: PermisoSumOrderByAggregateInput
  }

  export type PermisoScalarWhereWithAggregatesInput = {
    AND?: PermisoScalarWhereWithAggregatesInput | PermisoScalarWhereWithAggregatesInput[]
    OR?: PermisoScalarWhereWithAggregatesInput[]
    NOT?: PermisoScalarWhereWithAggregatesInput | PermisoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Permiso"> | number
    codigo?: StringWithAggregatesFilter<"Permiso"> | string
    modulo?: StringWithAggregatesFilter<"Permiso"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Permiso"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Permiso"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Permiso"> | Date | string
  }

  export type RolPermisoWhereInput = {
    AND?: RolPermisoWhereInput | RolPermisoWhereInput[]
    OR?: RolPermisoWhereInput[]
    NOT?: RolPermisoWhereInput | RolPermisoWhereInput[]
    rolId?: IntFilter<"RolPermiso"> | number
    permisoId?: IntFilter<"RolPermiso"> | number
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
    permiso?: XOR<PermisoScalarRelationFilter, PermisoWhereInput>
  }

  export type RolPermisoOrderByWithRelationInput = {
    rolId?: SortOrder
    permisoId?: SortOrder
    rol?: RolOrderByWithRelationInput
    permiso?: PermisoOrderByWithRelationInput
  }

  export type RolPermisoWhereUniqueInput = Prisma.AtLeast<{
    rolId_permisoId?: RolPermisoRolIdPermisoIdCompoundUniqueInput
    AND?: RolPermisoWhereInput | RolPermisoWhereInput[]
    OR?: RolPermisoWhereInput[]
    NOT?: RolPermisoWhereInput | RolPermisoWhereInput[]
    rolId?: IntFilter<"RolPermiso"> | number
    permisoId?: IntFilter<"RolPermiso"> | number
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
    permiso?: XOR<PermisoScalarRelationFilter, PermisoWhereInput>
  }, "rolId_permisoId">

  export type RolPermisoOrderByWithAggregationInput = {
    rolId?: SortOrder
    permisoId?: SortOrder
    _count?: RolPermisoCountOrderByAggregateInput
    _avg?: RolPermisoAvgOrderByAggregateInput
    _max?: RolPermisoMaxOrderByAggregateInput
    _min?: RolPermisoMinOrderByAggregateInput
    _sum?: RolPermisoSumOrderByAggregateInput
  }

  export type RolPermisoScalarWhereWithAggregatesInput = {
    AND?: RolPermisoScalarWhereWithAggregatesInput | RolPermisoScalarWhereWithAggregatesInput[]
    OR?: RolPermisoScalarWhereWithAggregatesInput[]
    NOT?: RolPermisoScalarWhereWithAggregatesInput | RolPermisoScalarWhereWithAggregatesInput[]
    rolId?: IntWithAggregatesFilter<"RolPermiso"> | number
    permisoId?: IntWithAggregatesFilter<"RolPermiso"> | number
  }

  export type CategoriaCreateInput = {
    nombre: string
    descripcion?: string | null
    descuento?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    productos?: ProductoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    descuento?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    productos?: ProductoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    descuento?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: ProductoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    descuento?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: ProductoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    descuento?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    descuento?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    descuento?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProveedorCreateInput = {
    nombre: string
    telefono?: string | null
    email?: string | null
    direccion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productos?: ProductoCreateNestedManyWithoutProveedorInput
  }

  export type ProveedorUncheckedCreateInput = {
    id?: number
    nombre: string
    telefono?: string | null
    email?: string | null
    direccion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productos?: ProductoUncheckedCreateNestedManyWithoutProveedorInput
  }

  export type ProveedorUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: ProductoUpdateManyWithoutProveedorNestedInput
  }

  export type ProveedorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: ProductoUncheckedUpdateManyWithoutProveedorNestedInput
  }

  export type ProveedorCreateManyInput = {
    id?: number
    nombre: string
    telefono?: string | null
    email?: string | null
    direccion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProveedorUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProveedorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoCreateInput = {
    codigoBarra?: string | null
    nombre: string
    descripcion?: string | null
    precio: number
    stock?: number
    stockMinimo?: number
    descuento?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoria: CategoriaCreateNestedOneWithoutProductosInput
    proveedor: ProveedorCreateNestedOneWithoutProductosInput
    detalleVentas?: DetalleVentaCreateNestedManyWithoutProductoInput
    movimientos?: MovimientoCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateInput = {
    id?: number
    codigoBarra?: string | null
    nombre: string
    descripcion?: string | null
    precio: number
    stock?: number
    stockMinimo?: number
    descuento?: number
    categoriaId: number
    proveedorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    detalleVentas?: DetalleVentaUncheckedCreateNestedManyWithoutProductoInput
    movimientos?: MovimientoUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoUpdateInput = {
    codigoBarra?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stockMinimo?: IntFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
    proveedor?: ProveedorUpdateOneRequiredWithoutProductosNestedInput
    detalleVentas?: DetalleVentaUpdateManyWithoutProductoNestedInput
    movimientos?: MovimientoUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoBarra?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stockMinimo?: IntFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    proveedorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detalleVentas?: DetalleVentaUncheckedUpdateManyWithoutProductoNestedInput
    movimientos?: MovimientoUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateManyInput = {
    id?: number
    codigoBarra?: string | null
    nombre: string
    descripcion?: string | null
    precio: number
    stock?: number
    stockMinimo?: number
    descuento?: number
    categoriaId: number
    proveedorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductoUpdateManyMutationInput = {
    codigoBarra?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stockMinimo?: IntFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoBarra?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stockMinimo?: IntFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    proveedorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VentaCreateInput = {
    total: number
    descuentoTotal?: number
    metodoPago?: $Enums.MetodoPago
    tieneStockInsuficiente?: boolean
    autorizadoPorId?: number | null
    motivoAutorizacion?: string | null
    createdAt?: Date | string
    detalles?: DetalleVentaCreateNestedManyWithoutVentaInput
    user: UsuarioCreateNestedOneWithoutVentasInput
  }

  export type VentaUncheckedCreateInput = {
    id?: number
    total: number
    descuentoTotal?: number
    metodoPago?: $Enums.MetodoPago
    tieneStockInsuficiente?: boolean
    userId: number
    autorizadoPorId?: number | null
    motivoAutorizacion?: string | null
    createdAt?: Date | string
    detalles?: DetalleVentaUncheckedCreateNestedManyWithoutVentaInput
  }

  export type VentaUpdateInput = {
    total?: FloatFieldUpdateOperationsInput | number
    descuentoTotal?: FloatFieldUpdateOperationsInput | number
    metodoPago?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    tieneStockInsuficiente?: BoolFieldUpdateOperationsInput | boolean
    autorizadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    motivoAutorizacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: DetalleVentaUpdateManyWithoutVentaNestedInput
    user?: UsuarioUpdateOneRequiredWithoutVentasNestedInput
  }

  export type VentaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    descuentoTotal?: FloatFieldUpdateOperationsInput | number
    metodoPago?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    tieneStockInsuficiente?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    autorizadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    motivoAutorizacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: DetalleVentaUncheckedUpdateManyWithoutVentaNestedInput
  }

  export type VentaCreateManyInput = {
    id?: number
    total: number
    descuentoTotal?: number
    metodoPago?: $Enums.MetodoPago
    tieneStockInsuficiente?: boolean
    userId: number
    autorizadoPorId?: number | null
    motivoAutorizacion?: string | null
    createdAt?: Date | string
  }

  export type VentaUpdateManyMutationInput = {
    total?: FloatFieldUpdateOperationsInput | number
    descuentoTotal?: FloatFieldUpdateOperationsInput | number
    metodoPago?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    tieneStockInsuficiente?: BoolFieldUpdateOperationsInput | boolean
    autorizadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    motivoAutorizacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VentaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    descuentoTotal?: FloatFieldUpdateOperationsInput | number
    metodoPago?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    tieneStockInsuficiente?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    autorizadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    motivoAutorizacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetalleVentaCreateInput = {
    cantidad: number
    precioUnit: number
    descuento?: number
    subtotal: number
    stockInsuficiente?: boolean
    venta: VentaCreateNestedOneWithoutDetallesInput
    producto: ProductoCreateNestedOneWithoutDetalleVentasInput
  }

  export type DetalleVentaUncheckedCreateInput = {
    id?: number
    ventaId: number
    productoId: number
    cantidad: number
    precioUnit: number
    descuento?: number
    subtotal: number
    stockInsuficiente?: boolean
  }

  export type DetalleVentaUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnit?: FloatFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    stockInsuficiente?: BoolFieldUpdateOperationsInput | boolean
    venta?: VentaUpdateOneRequiredWithoutDetallesNestedInput
    producto?: ProductoUpdateOneRequiredWithoutDetalleVentasNestedInput
  }

  export type DetalleVentaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnit?: FloatFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    stockInsuficiente?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DetalleVentaCreateManyInput = {
    id?: number
    ventaId: number
    productoId: number
    cantidad: number
    precioUnit: number
    descuento?: number
    subtotal: number
    stockInsuficiente?: boolean
  }

  export type DetalleVentaUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnit?: FloatFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    stockInsuficiente?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DetalleVentaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnit?: FloatFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    stockInsuficiente?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MovimientoCreateInput = {
    tipo: $Enums.TipoMovimiento
    cantidad: number
    motivo?: string | null
    stockAntes: number
    stockDespues: number
    createdAt?: Date | string
    producto: ProductoCreateNestedOneWithoutMovimientosInput
  }

  export type MovimientoUncheckedCreateInput = {
    id?: number
    productoId: number
    tipo: $Enums.TipoMovimiento
    cantidad: number
    motivo?: string | null
    stockAntes: number
    stockDespues: number
    createdAt?: Date | string
  }

  export type MovimientoUpdateInput = {
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    stockAntes?: IntFieldUpdateOperationsInput | number
    stockDespues?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producto?: ProductoUpdateOneRequiredWithoutMovimientosNestedInput
  }

  export type MovimientoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    stockAntes?: IntFieldUpdateOperationsInput | number
    stockDespues?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimientoCreateManyInput = {
    id?: number
    productoId: number
    tipo: $Enums.TipoMovimiento
    cantidad: number
    motivo?: string | null
    stockAntes: number
    stockDespues: number
    createdAt?: Date | string
  }

  export type MovimientoUpdateManyMutationInput = {
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    stockAntes?: IntFieldUpdateOperationsInput | number
    stockDespues?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimientoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    stockAntes?: IntFieldUpdateOperationsInput | number
    stockDespues?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateInput = {
    nombre: string
    email: string
    passwordHash: string
    pinAutorizacionHash?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rol: RolCreateNestedOneWithoutUsuariosInput
    ventas?: VentaCreateNestedManyWithoutUserInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    email: string
    passwordHash: string
    pinAutorizacionHash?: string | null
    rolId: number
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ventas?: VentaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    pinAutorizacionHash?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
    ventas?: VentaUpdateManyWithoutUserNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    pinAutorizacionHash?: NullableStringFieldUpdateOperationsInput | string | null
    rolId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ventas?: VentaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    email: string
    passwordHash: string
    pinAutorizacionHash?: string | null
    rolId: number
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    pinAutorizacionHash?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    pinAutorizacionHash?: NullableStringFieldUpdateOperationsInput | string | null
    rolId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolCreateInput = {
    codigo: string
    nombre: string
    descripcion?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UsuarioCreateNestedManyWithoutRolInput
    permisos?: RolPermisoCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateInput = {
    id?: number
    codigo: string
    nombre: string
    descripcion?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutRolInput
    permisos?: RolPermisoUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUpdateManyWithoutRolNestedInput
    permisos?: RolPermisoUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutRolNestedInput
    permisos?: RolPermisoUncheckedUpdateManyWithoutRolNestedInput
  }

  export type RolCreateManyInput = {
    id?: number
    codigo: string
    nombre: string
    descripcion?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermisoCreateInput = {
    codigo: string
    modulo: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RolPermisoCreateNestedManyWithoutPermisoInput
  }

  export type PermisoUncheckedCreateInput = {
    id?: number
    codigo: string
    modulo: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RolPermisoUncheckedCreateNestedManyWithoutPermisoInput
  }

  export type PermisoUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    modulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RolPermisoUpdateManyWithoutPermisoNestedInput
  }

  export type PermisoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    modulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RolPermisoUncheckedUpdateManyWithoutPermisoNestedInput
  }

  export type PermisoCreateManyInput = {
    id?: number
    codigo: string
    modulo: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermisoUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    modulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermisoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    modulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolPermisoCreateInput = {
    rol: RolCreateNestedOneWithoutPermisosInput
    permiso: PermisoCreateNestedOneWithoutRolesInput
  }

  export type RolPermisoUncheckedCreateInput = {
    rolId: number
    permisoId: number
  }

  export type RolPermisoUpdateInput = {
    rol?: RolUpdateOneRequiredWithoutPermisosNestedInput
    permiso?: PermisoUpdateOneRequiredWithoutRolesNestedInput
  }

  export type RolPermisoUncheckedUpdateInput = {
    rolId?: IntFieldUpdateOperationsInput | number
    permisoId?: IntFieldUpdateOperationsInput | number
  }

  export type RolPermisoCreateManyInput = {
    rolId: number
    permisoId: number
  }

  export type RolPermisoUpdateManyMutationInput = {

  }

  export type RolPermisoUncheckedUpdateManyInput = {
    rolId?: IntFieldUpdateOperationsInput | number
    permisoId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProductoListRelationFilter = {
    every?: ProductoWhereInput
    some?: ProductoWhereInput
    none?: ProductoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    descuento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
    descuento?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    descuento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    descuento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
    descuento?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProveedorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    direccion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProveedorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProveedorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    direccion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProveedorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    direccion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProveedorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type ProveedorScalarRelationFilter = {
    is?: ProveedorWhereInput
    isNot?: ProveedorWhereInput
  }

  export type DetalleVentaListRelationFilter = {
    every?: DetalleVentaWhereInput
    some?: DetalleVentaWhereInput
    none?: DetalleVentaWhereInput
  }

  export type MovimientoListRelationFilter = {
    every?: MovimientoWhereInput
    some?: MovimientoWhereInput
    none?: MovimientoWhereInput
  }

  export type DetalleVentaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovimientoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductoCountOrderByAggregateInput = {
    id?: SortOrder
    codigoBarra?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    stockMinimo?: SortOrder
    descuento?: SortOrder
    categoriaId?: SortOrder
    proveedorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductoAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    stockMinimo?: SortOrder
    descuento?: SortOrder
    categoriaId?: SortOrder
    proveedorId?: SortOrder
  }

  export type ProductoMaxOrderByAggregateInput = {
    id?: SortOrder
    codigoBarra?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    stockMinimo?: SortOrder
    descuento?: SortOrder
    categoriaId?: SortOrder
    proveedorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductoMinOrderByAggregateInput = {
    id?: SortOrder
    codigoBarra?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    stockMinimo?: SortOrder
    descuento?: SortOrder
    categoriaId?: SortOrder
    proveedorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductoSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    stockMinimo?: SortOrder
    descuento?: SortOrder
    categoriaId?: SortOrder
    proveedorId?: SortOrder
  }

  export type EnumMetodoPagoFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPago | EnumMetodoPagoFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPago[] | ListEnumMetodoPagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetodoPago[] | ListEnumMetodoPagoFieldRefInput<$PrismaModel>
    not?: NestedEnumMetodoPagoFilter<$PrismaModel> | $Enums.MetodoPago
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type VentaCountOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    descuentoTotal?: SortOrder
    metodoPago?: SortOrder
    tieneStockInsuficiente?: SortOrder
    userId?: SortOrder
    autorizadoPorId?: SortOrder
    motivoAutorizacion?: SortOrder
    createdAt?: SortOrder
  }

  export type VentaAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    descuentoTotal?: SortOrder
    userId?: SortOrder
    autorizadoPorId?: SortOrder
  }

  export type VentaMaxOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    descuentoTotal?: SortOrder
    metodoPago?: SortOrder
    tieneStockInsuficiente?: SortOrder
    userId?: SortOrder
    autorizadoPorId?: SortOrder
    motivoAutorizacion?: SortOrder
    createdAt?: SortOrder
  }

  export type VentaMinOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    descuentoTotal?: SortOrder
    metodoPago?: SortOrder
    tieneStockInsuficiente?: SortOrder
    userId?: SortOrder
    autorizadoPorId?: SortOrder
    motivoAutorizacion?: SortOrder
    createdAt?: SortOrder
  }

  export type VentaSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    descuentoTotal?: SortOrder
    userId?: SortOrder
    autorizadoPorId?: SortOrder
  }

  export type EnumMetodoPagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPago | EnumMetodoPagoFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPago[] | ListEnumMetodoPagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetodoPago[] | ListEnumMetodoPagoFieldRefInput<$PrismaModel>
    not?: NestedEnumMetodoPagoWithAggregatesFilter<$PrismaModel> | $Enums.MetodoPago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetodoPagoFilter<$PrismaModel>
    _max?: NestedEnumMetodoPagoFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type VentaScalarRelationFilter = {
    is?: VentaWhereInput
    isNot?: VentaWhereInput
  }

  export type ProductoScalarRelationFilter = {
    is?: ProductoWhereInput
    isNot?: ProductoWhereInput
  }

  export type DetalleVentaCountOrderByAggregateInput = {
    id?: SortOrder
    ventaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnit?: SortOrder
    descuento?: SortOrder
    subtotal?: SortOrder
    stockInsuficiente?: SortOrder
  }

  export type DetalleVentaAvgOrderByAggregateInput = {
    id?: SortOrder
    ventaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnit?: SortOrder
    descuento?: SortOrder
    subtotal?: SortOrder
  }

  export type DetalleVentaMaxOrderByAggregateInput = {
    id?: SortOrder
    ventaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnit?: SortOrder
    descuento?: SortOrder
    subtotal?: SortOrder
    stockInsuficiente?: SortOrder
  }

  export type DetalleVentaMinOrderByAggregateInput = {
    id?: SortOrder
    ventaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnit?: SortOrder
    descuento?: SortOrder
    subtotal?: SortOrder
    stockInsuficiente?: SortOrder
  }

  export type DetalleVentaSumOrderByAggregateInput = {
    id?: SortOrder
    ventaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnit?: SortOrder
    descuento?: SortOrder
    subtotal?: SortOrder
  }

  export type EnumTipoMovimientoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimiento | EnumTipoMovimientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimiento[] | ListEnumTipoMovimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimiento[] | ListEnumTipoMovimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimientoFilter<$PrismaModel> | $Enums.TipoMovimiento
  }

  export type MovimientoCountOrderByAggregateInput = {
    id?: SortOrder
    productoId?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    motivo?: SortOrder
    stockAntes?: SortOrder
    stockDespues?: SortOrder
    createdAt?: SortOrder
  }

  export type MovimientoAvgOrderByAggregateInput = {
    id?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    stockAntes?: SortOrder
    stockDespues?: SortOrder
  }

  export type MovimientoMaxOrderByAggregateInput = {
    id?: SortOrder
    productoId?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    motivo?: SortOrder
    stockAntes?: SortOrder
    stockDespues?: SortOrder
    createdAt?: SortOrder
  }

  export type MovimientoMinOrderByAggregateInput = {
    id?: SortOrder
    productoId?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    motivo?: SortOrder
    stockAntes?: SortOrder
    stockDespues?: SortOrder
    createdAt?: SortOrder
  }

  export type MovimientoSumOrderByAggregateInput = {
    id?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    stockAntes?: SortOrder
    stockDespues?: SortOrder
  }

  export type EnumTipoMovimientoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimiento | EnumTipoMovimientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimiento[] | ListEnumTipoMovimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimiento[] | ListEnumTipoMovimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimientoWithAggregatesFilter<$PrismaModel> | $Enums.TipoMovimiento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoMovimientoFilter<$PrismaModel>
    _max?: NestedEnumTipoMovimientoFilter<$PrismaModel>
  }

  export type RolScalarRelationFilter = {
    is?: RolWhereInput
    isNot?: RolWhereInput
  }

  export type VentaListRelationFilter = {
    every?: VentaWhereInput
    some?: VentaWhereInput
    none?: VentaWhereInput
  }

  export type VentaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    pinAutorizacionHash?: SortOrder
    rolId?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    pinAutorizacionHash?: SortOrder
    rolId?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    pinAutorizacionHash?: SortOrder
    rolId?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type RolPermisoListRelationFilter = {
    every?: RolPermisoWhereInput
    some?: RolPermisoWhereInput
    none?: RolPermisoWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolPermisoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RolMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PermisoCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    modulo?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermisoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PermisoMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    modulo?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermisoMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    modulo?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermisoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PermisoScalarRelationFilter = {
    is?: PermisoWhereInput
    isNot?: PermisoWhereInput
  }

  export type RolPermisoRolIdPermisoIdCompoundUniqueInput = {
    rolId: number
    permisoId: number
  }

  export type RolPermisoCountOrderByAggregateInput = {
    rolId?: SortOrder
    permisoId?: SortOrder
  }

  export type RolPermisoAvgOrderByAggregateInput = {
    rolId?: SortOrder
    permisoId?: SortOrder
  }

  export type RolPermisoMaxOrderByAggregateInput = {
    rolId?: SortOrder
    permisoId?: SortOrder
  }

  export type RolPermisoMinOrderByAggregateInput = {
    rolId?: SortOrder
    permisoId?: SortOrder
  }

  export type RolPermisoSumOrderByAggregateInput = {
    rolId?: SortOrder
    permisoId?: SortOrder
  }

  export type ProductoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type ProductoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutCategoriaInput | ProductoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutCategoriaInput | ProductoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutCategoriaInput | ProductoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutCategoriaInput | ProductoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutCategoriaInput | ProductoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutCategoriaInput | ProductoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type ProductoCreateNestedManyWithoutProveedorInput = {
    create?: XOR<ProductoCreateWithoutProveedorInput, ProductoUncheckedCreateWithoutProveedorInput> | ProductoCreateWithoutProveedorInput[] | ProductoUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutProveedorInput | ProductoCreateOrConnectWithoutProveedorInput[]
    createMany?: ProductoCreateManyProveedorInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type ProductoUncheckedCreateNestedManyWithoutProveedorInput = {
    create?: XOR<ProductoCreateWithoutProveedorInput, ProductoUncheckedCreateWithoutProveedorInput> | ProductoCreateWithoutProveedorInput[] | ProductoUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutProveedorInput | ProductoCreateOrConnectWithoutProveedorInput[]
    createMany?: ProductoCreateManyProveedorInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type ProductoUpdateManyWithoutProveedorNestedInput = {
    create?: XOR<ProductoCreateWithoutProveedorInput, ProductoUncheckedCreateWithoutProveedorInput> | ProductoCreateWithoutProveedorInput[] | ProductoUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutProveedorInput | ProductoCreateOrConnectWithoutProveedorInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutProveedorInput | ProductoUpsertWithWhereUniqueWithoutProveedorInput[]
    createMany?: ProductoCreateManyProveedorInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutProveedorInput | ProductoUpdateWithWhereUniqueWithoutProveedorInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutProveedorInput | ProductoUpdateManyWithWhereWithoutProveedorInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type ProductoUncheckedUpdateManyWithoutProveedorNestedInput = {
    create?: XOR<ProductoCreateWithoutProveedorInput, ProductoUncheckedCreateWithoutProveedorInput> | ProductoCreateWithoutProveedorInput[] | ProductoUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutProveedorInput | ProductoCreateOrConnectWithoutProveedorInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutProveedorInput | ProductoUpsertWithWhereUniqueWithoutProveedorInput[]
    createMany?: ProductoCreateManyProveedorInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutProveedorInput | ProductoUpdateWithWhereUniqueWithoutProveedorInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutProveedorInput | ProductoUpdateManyWithWhereWithoutProveedorInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type CategoriaCreateNestedOneWithoutProductosInput = {
    create?: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProductosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type ProveedorCreateNestedOneWithoutProductosInput = {
    create?: XOR<ProveedorCreateWithoutProductosInput, ProveedorUncheckedCreateWithoutProductosInput>
    connectOrCreate?: ProveedorCreateOrConnectWithoutProductosInput
    connect?: ProveedorWhereUniqueInput
  }

  export type DetalleVentaCreateNestedManyWithoutProductoInput = {
    create?: XOR<DetalleVentaCreateWithoutProductoInput, DetalleVentaUncheckedCreateWithoutProductoInput> | DetalleVentaCreateWithoutProductoInput[] | DetalleVentaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleVentaCreateOrConnectWithoutProductoInput | DetalleVentaCreateOrConnectWithoutProductoInput[]
    createMany?: DetalleVentaCreateManyProductoInputEnvelope
    connect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
  }

  export type MovimientoCreateNestedManyWithoutProductoInput = {
    create?: XOR<MovimientoCreateWithoutProductoInput, MovimientoUncheckedCreateWithoutProductoInput> | MovimientoCreateWithoutProductoInput[] | MovimientoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: MovimientoCreateOrConnectWithoutProductoInput | MovimientoCreateOrConnectWithoutProductoInput[]
    createMany?: MovimientoCreateManyProductoInputEnvelope
    connect?: MovimientoWhereUniqueInput | MovimientoWhereUniqueInput[]
  }

  export type DetalleVentaUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<DetalleVentaCreateWithoutProductoInput, DetalleVentaUncheckedCreateWithoutProductoInput> | DetalleVentaCreateWithoutProductoInput[] | DetalleVentaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleVentaCreateOrConnectWithoutProductoInput | DetalleVentaCreateOrConnectWithoutProductoInput[]
    createMany?: DetalleVentaCreateManyProductoInputEnvelope
    connect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
  }

  export type MovimientoUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<MovimientoCreateWithoutProductoInput, MovimientoUncheckedCreateWithoutProductoInput> | MovimientoCreateWithoutProductoInput[] | MovimientoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: MovimientoCreateOrConnectWithoutProductoInput | MovimientoCreateOrConnectWithoutProductoInput[]
    createMany?: MovimientoCreateManyProductoInputEnvelope
    connect?: MovimientoWhereUniqueInput | MovimientoWhereUniqueInput[]
  }

  export type CategoriaUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProductosInput
    upsert?: CategoriaUpsertWithoutProductosInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutProductosInput, CategoriaUpdateWithoutProductosInput>, CategoriaUncheckedUpdateWithoutProductosInput>
  }

  export type ProveedorUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<ProveedorCreateWithoutProductosInput, ProveedorUncheckedCreateWithoutProductosInput>
    connectOrCreate?: ProveedorCreateOrConnectWithoutProductosInput
    upsert?: ProveedorUpsertWithoutProductosInput
    connect?: ProveedorWhereUniqueInput
    update?: XOR<XOR<ProveedorUpdateToOneWithWhereWithoutProductosInput, ProveedorUpdateWithoutProductosInput>, ProveedorUncheckedUpdateWithoutProductosInput>
  }

  export type DetalleVentaUpdateManyWithoutProductoNestedInput = {
    create?: XOR<DetalleVentaCreateWithoutProductoInput, DetalleVentaUncheckedCreateWithoutProductoInput> | DetalleVentaCreateWithoutProductoInput[] | DetalleVentaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleVentaCreateOrConnectWithoutProductoInput | DetalleVentaCreateOrConnectWithoutProductoInput[]
    upsert?: DetalleVentaUpsertWithWhereUniqueWithoutProductoInput | DetalleVentaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: DetalleVentaCreateManyProductoInputEnvelope
    set?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    disconnect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    delete?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    connect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    update?: DetalleVentaUpdateWithWhereUniqueWithoutProductoInput | DetalleVentaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: DetalleVentaUpdateManyWithWhereWithoutProductoInput | DetalleVentaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: DetalleVentaScalarWhereInput | DetalleVentaScalarWhereInput[]
  }

  export type MovimientoUpdateManyWithoutProductoNestedInput = {
    create?: XOR<MovimientoCreateWithoutProductoInput, MovimientoUncheckedCreateWithoutProductoInput> | MovimientoCreateWithoutProductoInput[] | MovimientoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: MovimientoCreateOrConnectWithoutProductoInput | MovimientoCreateOrConnectWithoutProductoInput[]
    upsert?: MovimientoUpsertWithWhereUniqueWithoutProductoInput | MovimientoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: MovimientoCreateManyProductoInputEnvelope
    set?: MovimientoWhereUniqueInput | MovimientoWhereUniqueInput[]
    disconnect?: MovimientoWhereUniqueInput | MovimientoWhereUniqueInput[]
    delete?: MovimientoWhereUniqueInput | MovimientoWhereUniqueInput[]
    connect?: MovimientoWhereUniqueInput | MovimientoWhereUniqueInput[]
    update?: MovimientoUpdateWithWhereUniqueWithoutProductoInput | MovimientoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: MovimientoUpdateManyWithWhereWithoutProductoInput | MovimientoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: MovimientoScalarWhereInput | MovimientoScalarWhereInput[]
  }

  export type DetalleVentaUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<DetalleVentaCreateWithoutProductoInput, DetalleVentaUncheckedCreateWithoutProductoInput> | DetalleVentaCreateWithoutProductoInput[] | DetalleVentaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleVentaCreateOrConnectWithoutProductoInput | DetalleVentaCreateOrConnectWithoutProductoInput[]
    upsert?: DetalleVentaUpsertWithWhereUniqueWithoutProductoInput | DetalleVentaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: DetalleVentaCreateManyProductoInputEnvelope
    set?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    disconnect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    delete?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    connect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    update?: DetalleVentaUpdateWithWhereUniqueWithoutProductoInput | DetalleVentaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: DetalleVentaUpdateManyWithWhereWithoutProductoInput | DetalleVentaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: DetalleVentaScalarWhereInput | DetalleVentaScalarWhereInput[]
  }

  export type MovimientoUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<MovimientoCreateWithoutProductoInput, MovimientoUncheckedCreateWithoutProductoInput> | MovimientoCreateWithoutProductoInput[] | MovimientoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: MovimientoCreateOrConnectWithoutProductoInput | MovimientoCreateOrConnectWithoutProductoInput[]
    upsert?: MovimientoUpsertWithWhereUniqueWithoutProductoInput | MovimientoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: MovimientoCreateManyProductoInputEnvelope
    set?: MovimientoWhereUniqueInput | MovimientoWhereUniqueInput[]
    disconnect?: MovimientoWhereUniqueInput | MovimientoWhereUniqueInput[]
    delete?: MovimientoWhereUniqueInput | MovimientoWhereUniqueInput[]
    connect?: MovimientoWhereUniqueInput | MovimientoWhereUniqueInput[]
    update?: MovimientoUpdateWithWhereUniqueWithoutProductoInput | MovimientoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: MovimientoUpdateManyWithWhereWithoutProductoInput | MovimientoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: MovimientoScalarWhereInput | MovimientoScalarWhereInput[]
  }

  export type DetalleVentaCreateNestedManyWithoutVentaInput = {
    create?: XOR<DetalleVentaCreateWithoutVentaInput, DetalleVentaUncheckedCreateWithoutVentaInput> | DetalleVentaCreateWithoutVentaInput[] | DetalleVentaUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: DetalleVentaCreateOrConnectWithoutVentaInput | DetalleVentaCreateOrConnectWithoutVentaInput[]
    createMany?: DetalleVentaCreateManyVentaInputEnvelope
    connect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
  }

  export type UsuarioCreateNestedOneWithoutVentasInput = {
    create?: XOR<UsuarioCreateWithoutVentasInput, UsuarioUncheckedCreateWithoutVentasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVentasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DetalleVentaUncheckedCreateNestedManyWithoutVentaInput = {
    create?: XOR<DetalleVentaCreateWithoutVentaInput, DetalleVentaUncheckedCreateWithoutVentaInput> | DetalleVentaCreateWithoutVentaInput[] | DetalleVentaUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: DetalleVentaCreateOrConnectWithoutVentaInput | DetalleVentaCreateOrConnectWithoutVentaInput[]
    createMany?: DetalleVentaCreateManyVentaInputEnvelope
    connect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
  }

  export type EnumMetodoPagoFieldUpdateOperationsInput = {
    set?: $Enums.MetodoPago
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DetalleVentaUpdateManyWithoutVentaNestedInput = {
    create?: XOR<DetalleVentaCreateWithoutVentaInput, DetalleVentaUncheckedCreateWithoutVentaInput> | DetalleVentaCreateWithoutVentaInput[] | DetalleVentaUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: DetalleVentaCreateOrConnectWithoutVentaInput | DetalleVentaCreateOrConnectWithoutVentaInput[]
    upsert?: DetalleVentaUpsertWithWhereUniqueWithoutVentaInput | DetalleVentaUpsertWithWhereUniqueWithoutVentaInput[]
    createMany?: DetalleVentaCreateManyVentaInputEnvelope
    set?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    disconnect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    delete?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    connect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    update?: DetalleVentaUpdateWithWhereUniqueWithoutVentaInput | DetalleVentaUpdateWithWhereUniqueWithoutVentaInput[]
    updateMany?: DetalleVentaUpdateManyWithWhereWithoutVentaInput | DetalleVentaUpdateManyWithWhereWithoutVentaInput[]
    deleteMany?: DetalleVentaScalarWhereInput | DetalleVentaScalarWhereInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutVentasNestedInput = {
    create?: XOR<UsuarioCreateWithoutVentasInput, UsuarioUncheckedCreateWithoutVentasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVentasInput
    upsert?: UsuarioUpsertWithoutVentasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutVentasInput, UsuarioUpdateWithoutVentasInput>, UsuarioUncheckedUpdateWithoutVentasInput>
  }

  export type DetalleVentaUncheckedUpdateManyWithoutVentaNestedInput = {
    create?: XOR<DetalleVentaCreateWithoutVentaInput, DetalleVentaUncheckedCreateWithoutVentaInput> | DetalleVentaCreateWithoutVentaInput[] | DetalleVentaUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: DetalleVentaCreateOrConnectWithoutVentaInput | DetalleVentaCreateOrConnectWithoutVentaInput[]
    upsert?: DetalleVentaUpsertWithWhereUniqueWithoutVentaInput | DetalleVentaUpsertWithWhereUniqueWithoutVentaInput[]
    createMany?: DetalleVentaCreateManyVentaInputEnvelope
    set?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    disconnect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    delete?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    connect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    update?: DetalleVentaUpdateWithWhereUniqueWithoutVentaInput | DetalleVentaUpdateWithWhereUniqueWithoutVentaInput[]
    updateMany?: DetalleVentaUpdateManyWithWhereWithoutVentaInput | DetalleVentaUpdateManyWithWhereWithoutVentaInput[]
    deleteMany?: DetalleVentaScalarWhereInput | DetalleVentaScalarWhereInput[]
  }

  export type VentaCreateNestedOneWithoutDetallesInput = {
    create?: XOR<VentaCreateWithoutDetallesInput, VentaUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: VentaCreateOrConnectWithoutDetallesInput
    connect?: VentaWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutDetalleVentasInput = {
    create?: XOR<ProductoCreateWithoutDetalleVentasInput, ProductoUncheckedCreateWithoutDetalleVentasInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutDetalleVentasInput
    connect?: ProductoWhereUniqueInput
  }

  export type VentaUpdateOneRequiredWithoutDetallesNestedInput = {
    create?: XOR<VentaCreateWithoutDetallesInput, VentaUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: VentaCreateOrConnectWithoutDetallesInput
    upsert?: VentaUpsertWithoutDetallesInput
    connect?: VentaWhereUniqueInput
    update?: XOR<XOR<VentaUpdateToOneWithWhereWithoutDetallesInput, VentaUpdateWithoutDetallesInput>, VentaUncheckedUpdateWithoutDetallesInput>
  }

  export type ProductoUpdateOneRequiredWithoutDetalleVentasNestedInput = {
    create?: XOR<ProductoCreateWithoutDetalleVentasInput, ProductoUncheckedCreateWithoutDetalleVentasInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutDetalleVentasInput
    upsert?: ProductoUpsertWithoutDetalleVentasInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutDetalleVentasInput, ProductoUpdateWithoutDetalleVentasInput>, ProductoUncheckedUpdateWithoutDetalleVentasInput>
  }

  export type ProductoCreateNestedOneWithoutMovimientosInput = {
    create?: XOR<ProductoCreateWithoutMovimientosInput, ProductoUncheckedCreateWithoutMovimientosInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutMovimientosInput
    connect?: ProductoWhereUniqueInput
  }

  export type EnumTipoMovimientoFieldUpdateOperationsInput = {
    set?: $Enums.TipoMovimiento
  }

  export type ProductoUpdateOneRequiredWithoutMovimientosNestedInput = {
    create?: XOR<ProductoCreateWithoutMovimientosInput, ProductoUncheckedCreateWithoutMovimientosInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutMovimientosInput
    upsert?: ProductoUpsertWithoutMovimientosInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutMovimientosInput, ProductoUpdateWithoutMovimientosInput>, ProductoUncheckedUpdateWithoutMovimientosInput>
  }

  export type RolCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuariosInput
    connect?: RolWhereUniqueInput
  }

  export type VentaCreateNestedManyWithoutUserInput = {
    create?: XOR<VentaCreateWithoutUserInput, VentaUncheckedCreateWithoutUserInput> | VentaCreateWithoutUserInput[] | VentaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutUserInput | VentaCreateOrConnectWithoutUserInput[]
    createMany?: VentaCreateManyUserInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type VentaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VentaCreateWithoutUserInput, VentaUncheckedCreateWithoutUserInput> | VentaCreateWithoutUserInput[] | VentaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutUserInput | VentaCreateOrConnectWithoutUserInput[]
    createMany?: VentaCreateManyUserInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type RolUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuariosInput
    upsert?: RolUpsertWithoutUsuariosInput
    connect?: RolWhereUniqueInput
    update?: XOR<XOR<RolUpdateToOneWithWhereWithoutUsuariosInput, RolUpdateWithoutUsuariosInput>, RolUncheckedUpdateWithoutUsuariosInput>
  }

  export type VentaUpdateManyWithoutUserNestedInput = {
    create?: XOR<VentaCreateWithoutUserInput, VentaUncheckedCreateWithoutUserInput> | VentaCreateWithoutUserInput[] | VentaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutUserInput | VentaCreateOrConnectWithoutUserInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutUserInput | VentaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VentaCreateManyUserInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutUserInput | VentaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutUserInput | VentaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type VentaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VentaCreateWithoutUserInput, VentaUncheckedCreateWithoutUserInput> | VentaCreateWithoutUserInput[] | VentaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutUserInput | VentaCreateOrConnectWithoutUserInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutUserInput | VentaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VentaCreateManyUserInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutUserInput | VentaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutUserInput | VentaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type UsuarioCreateNestedManyWithoutRolInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type RolPermisoCreateNestedManyWithoutRolInput = {
    create?: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput> | RolPermisoCreateWithoutRolInput[] | RolPermisoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutRolInput | RolPermisoCreateOrConnectWithoutRolInput[]
    createMany?: RolPermisoCreateManyRolInputEnvelope
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type RolPermisoUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput> | RolPermisoCreateWithoutRolInput[] | RolPermisoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutRolInput | RolPermisoCreateOrConnectWithoutRolInput[]
    createMany?: RolPermisoCreateManyRolInputEnvelope
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
  }

  export type UsuarioUpdateManyWithoutRolNestedInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutRolInput | UsuarioUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutRolInput | UsuarioUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutRolInput | UsuarioUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type RolPermisoUpdateManyWithoutRolNestedInput = {
    create?: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput> | RolPermisoCreateWithoutRolInput[] | RolPermisoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutRolInput | RolPermisoCreateOrConnectWithoutRolInput[]
    upsert?: RolPermisoUpsertWithWhereUniqueWithoutRolInput | RolPermisoUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: RolPermisoCreateManyRolInputEnvelope
    set?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    disconnect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    delete?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    update?: RolPermisoUpdateWithWhereUniqueWithoutRolInput | RolPermisoUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: RolPermisoUpdateManyWithWhereWithoutRolInput | RolPermisoUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutRolInput | UsuarioUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutRolInput | UsuarioUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutRolInput | UsuarioUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type RolPermisoUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput> | RolPermisoCreateWithoutRolInput[] | RolPermisoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutRolInput | RolPermisoCreateOrConnectWithoutRolInput[]
    upsert?: RolPermisoUpsertWithWhereUniqueWithoutRolInput | RolPermisoUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: RolPermisoCreateManyRolInputEnvelope
    set?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    disconnect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    delete?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    update?: RolPermisoUpdateWithWhereUniqueWithoutRolInput | RolPermisoUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: RolPermisoUpdateManyWithWhereWithoutRolInput | RolPermisoUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
  }

  export type RolPermisoCreateNestedManyWithoutPermisoInput = {
    create?: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput> | RolPermisoCreateWithoutPermisoInput[] | RolPermisoUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutPermisoInput | RolPermisoCreateOrConnectWithoutPermisoInput[]
    createMany?: RolPermisoCreateManyPermisoInputEnvelope
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
  }

  export type RolPermisoUncheckedCreateNestedManyWithoutPermisoInput = {
    create?: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput> | RolPermisoCreateWithoutPermisoInput[] | RolPermisoUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutPermisoInput | RolPermisoCreateOrConnectWithoutPermisoInput[]
    createMany?: RolPermisoCreateManyPermisoInputEnvelope
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
  }

  export type RolPermisoUpdateManyWithoutPermisoNestedInput = {
    create?: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput> | RolPermisoCreateWithoutPermisoInput[] | RolPermisoUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutPermisoInput | RolPermisoCreateOrConnectWithoutPermisoInput[]
    upsert?: RolPermisoUpsertWithWhereUniqueWithoutPermisoInput | RolPermisoUpsertWithWhereUniqueWithoutPermisoInput[]
    createMany?: RolPermisoCreateManyPermisoInputEnvelope
    set?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    disconnect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    delete?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    update?: RolPermisoUpdateWithWhereUniqueWithoutPermisoInput | RolPermisoUpdateWithWhereUniqueWithoutPermisoInput[]
    updateMany?: RolPermisoUpdateManyWithWhereWithoutPermisoInput | RolPermisoUpdateManyWithWhereWithoutPermisoInput[]
    deleteMany?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
  }

  export type RolPermisoUncheckedUpdateManyWithoutPermisoNestedInput = {
    create?: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput> | RolPermisoCreateWithoutPermisoInput[] | RolPermisoUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutPermisoInput | RolPermisoCreateOrConnectWithoutPermisoInput[]
    upsert?: RolPermisoUpsertWithWhereUniqueWithoutPermisoInput | RolPermisoUpsertWithWhereUniqueWithoutPermisoInput[]
    createMany?: RolPermisoCreateManyPermisoInputEnvelope
    set?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    disconnect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    delete?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    update?: RolPermisoUpdateWithWhereUniqueWithoutPermisoInput | RolPermisoUpdateWithWhereUniqueWithoutPermisoInput[]
    updateMany?: RolPermisoUpdateManyWithWhereWithoutPermisoInput | RolPermisoUpdateManyWithWhereWithoutPermisoInput[]
    deleteMany?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
  }

  export type RolCreateNestedOneWithoutPermisosInput = {
    create?: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
    connectOrCreate?: RolCreateOrConnectWithoutPermisosInput
    connect?: RolWhereUniqueInput
  }

  export type PermisoCreateNestedOneWithoutRolesInput = {
    create?: XOR<PermisoCreateWithoutRolesInput, PermisoUncheckedCreateWithoutRolesInput>
    connectOrCreate?: PermisoCreateOrConnectWithoutRolesInput
    connect?: PermisoWhereUniqueInput
  }

  export type RolUpdateOneRequiredWithoutPermisosNestedInput = {
    create?: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
    connectOrCreate?: RolCreateOrConnectWithoutPermisosInput
    upsert?: RolUpsertWithoutPermisosInput
    connect?: RolWhereUniqueInput
    update?: XOR<XOR<RolUpdateToOneWithWhereWithoutPermisosInput, RolUpdateWithoutPermisosInput>, RolUncheckedUpdateWithoutPermisosInput>
  }

  export type PermisoUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<PermisoCreateWithoutRolesInput, PermisoUncheckedCreateWithoutRolesInput>
    connectOrCreate?: PermisoCreateOrConnectWithoutRolesInput
    upsert?: PermisoUpsertWithoutRolesInput
    connect?: PermisoWhereUniqueInput
    update?: XOR<XOR<PermisoUpdateToOneWithWhereWithoutRolesInput, PermisoUpdateWithoutRolesInput>, PermisoUncheckedUpdateWithoutRolesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMetodoPagoFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPago | EnumMetodoPagoFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPago[] | ListEnumMetodoPagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetodoPago[] | ListEnumMetodoPagoFieldRefInput<$PrismaModel>
    not?: NestedEnumMetodoPagoFilter<$PrismaModel> | $Enums.MetodoPago
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumMetodoPagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPago | EnumMetodoPagoFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPago[] | ListEnumMetodoPagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetodoPago[] | ListEnumMetodoPagoFieldRefInput<$PrismaModel>
    not?: NestedEnumMetodoPagoWithAggregatesFilter<$PrismaModel> | $Enums.MetodoPago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetodoPagoFilter<$PrismaModel>
    _max?: NestedEnumMetodoPagoFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTipoMovimientoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimiento | EnumTipoMovimientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimiento[] | ListEnumTipoMovimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimiento[] | ListEnumTipoMovimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimientoFilter<$PrismaModel> | $Enums.TipoMovimiento
  }

  export type NestedEnumTipoMovimientoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimiento | EnumTipoMovimientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimiento[] | ListEnumTipoMovimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimiento[] | ListEnumTipoMovimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimientoWithAggregatesFilter<$PrismaModel> | $Enums.TipoMovimiento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoMovimientoFilter<$PrismaModel>
    _max?: NestedEnumTipoMovimientoFilter<$PrismaModel>
  }

  export type ProductoCreateWithoutCategoriaInput = {
    codigoBarra?: string | null
    nombre: string
    descripcion?: string | null
    precio: number
    stock?: number
    stockMinimo?: number
    descuento?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    proveedor: ProveedorCreateNestedOneWithoutProductosInput
    detalleVentas?: DetalleVentaCreateNestedManyWithoutProductoInput
    movimientos?: MovimientoCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutCategoriaInput = {
    id?: number
    codigoBarra?: string | null
    nombre: string
    descripcion?: string | null
    precio: number
    stock?: number
    stockMinimo?: number
    descuento?: number
    proveedorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    detalleVentas?: DetalleVentaUncheckedCreateNestedManyWithoutProductoInput
    movimientos?: MovimientoUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput>
  }

  export type ProductoCreateManyCategoriaInputEnvelope = {
    data: ProductoCreateManyCategoriaInput | ProductoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type ProductoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    update: XOR<ProductoUpdateWithoutCategoriaInput, ProductoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput>
  }

  export type ProductoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    data: XOR<ProductoUpdateWithoutCategoriaInput, ProductoUncheckedUpdateWithoutCategoriaInput>
  }

  export type ProductoUpdateManyWithWhereWithoutCategoriaInput = {
    where: ProductoScalarWhereInput
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type ProductoScalarWhereInput = {
    AND?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
    OR?: ProductoScalarWhereInput[]
    NOT?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
    id?: IntFilter<"Producto"> | number
    codigoBarra?: StringNullableFilter<"Producto"> | string | null
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringNullableFilter<"Producto"> | string | null
    precio?: FloatFilter<"Producto"> | number
    stock?: IntFilter<"Producto"> | number
    stockMinimo?: IntFilter<"Producto"> | number
    descuento?: FloatFilter<"Producto"> | number
    categoriaId?: IntFilter<"Producto"> | number
    proveedorId?: IntFilter<"Producto"> | number
    createdAt?: DateTimeFilter<"Producto"> | Date | string
    updatedAt?: DateTimeFilter<"Producto"> | Date | string
  }

  export type ProductoCreateWithoutProveedorInput = {
    codigoBarra?: string | null
    nombre: string
    descripcion?: string | null
    precio: number
    stock?: number
    stockMinimo?: number
    descuento?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoria: CategoriaCreateNestedOneWithoutProductosInput
    detalleVentas?: DetalleVentaCreateNestedManyWithoutProductoInput
    movimientos?: MovimientoCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutProveedorInput = {
    id?: number
    codigoBarra?: string | null
    nombre: string
    descripcion?: string | null
    precio: number
    stock?: number
    stockMinimo?: number
    descuento?: number
    categoriaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    detalleVentas?: DetalleVentaUncheckedCreateNestedManyWithoutProductoInput
    movimientos?: MovimientoUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutProveedorInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutProveedorInput, ProductoUncheckedCreateWithoutProveedorInput>
  }

  export type ProductoCreateManyProveedorInputEnvelope = {
    data: ProductoCreateManyProveedorInput | ProductoCreateManyProveedorInput[]
    skipDuplicates?: boolean
  }

  export type ProductoUpsertWithWhereUniqueWithoutProveedorInput = {
    where: ProductoWhereUniqueInput
    update: XOR<ProductoUpdateWithoutProveedorInput, ProductoUncheckedUpdateWithoutProveedorInput>
    create: XOR<ProductoCreateWithoutProveedorInput, ProductoUncheckedCreateWithoutProveedorInput>
  }

  export type ProductoUpdateWithWhereUniqueWithoutProveedorInput = {
    where: ProductoWhereUniqueInput
    data: XOR<ProductoUpdateWithoutProveedorInput, ProductoUncheckedUpdateWithoutProveedorInput>
  }

  export type ProductoUpdateManyWithWhereWithoutProveedorInput = {
    where: ProductoScalarWhereInput
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyWithoutProveedorInput>
  }

  export type CategoriaCreateWithoutProductosInput = {
    nombre: string
    descripcion?: string | null
    descuento?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriaUncheckedCreateWithoutProductosInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    descuento?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriaCreateOrConnectWithoutProductosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
  }

  export type ProveedorCreateWithoutProductosInput = {
    nombre: string
    telefono?: string | null
    email?: string | null
    direccion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProveedorUncheckedCreateWithoutProductosInput = {
    id?: number
    nombre: string
    telefono?: string | null
    email?: string | null
    direccion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProveedorCreateOrConnectWithoutProductosInput = {
    where: ProveedorWhereUniqueInput
    create: XOR<ProveedorCreateWithoutProductosInput, ProveedorUncheckedCreateWithoutProductosInput>
  }

  export type DetalleVentaCreateWithoutProductoInput = {
    cantidad: number
    precioUnit: number
    descuento?: number
    subtotal: number
    stockInsuficiente?: boolean
    venta: VentaCreateNestedOneWithoutDetallesInput
  }

  export type DetalleVentaUncheckedCreateWithoutProductoInput = {
    id?: number
    ventaId: number
    cantidad: number
    precioUnit: number
    descuento?: number
    subtotal: number
    stockInsuficiente?: boolean
  }

  export type DetalleVentaCreateOrConnectWithoutProductoInput = {
    where: DetalleVentaWhereUniqueInput
    create: XOR<DetalleVentaCreateWithoutProductoInput, DetalleVentaUncheckedCreateWithoutProductoInput>
  }

  export type DetalleVentaCreateManyProductoInputEnvelope = {
    data: DetalleVentaCreateManyProductoInput | DetalleVentaCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type MovimientoCreateWithoutProductoInput = {
    tipo: $Enums.TipoMovimiento
    cantidad: number
    motivo?: string | null
    stockAntes: number
    stockDespues: number
    createdAt?: Date | string
  }

  export type MovimientoUncheckedCreateWithoutProductoInput = {
    id?: number
    tipo: $Enums.TipoMovimiento
    cantidad: number
    motivo?: string | null
    stockAntes: number
    stockDespues: number
    createdAt?: Date | string
  }

  export type MovimientoCreateOrConnectWithoutProductoInput = {
    where: MovimientoWhereUniqueInput
    create: XOR<MovimientoCreateWithoutProductoInput, MovimientoUncheckedCreateWithoutProductoInput>
  }

  export type MovimientoCreateManyProductoInputEnvelope = {
    data: MovimientoCreateManyProductoInput | MovimientoCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaUpsertWithoutProductosInput = {
    update: XOR<CategoriaUpdateWithoutProductosInput, CategoriaUncheckedUpdateWithoutProductosInput>
    create: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutProductosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutProductosInput, CategoriaUncheckedUpdateWithoutProductosInput>
  }

  export type CategoriaUpdateWithoutProductosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    descuento?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    descuento?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProveedorUpsertWithoutProductosInput = {
    update: XOR<ProveedorUpdateWithoutProductosInput, ProveedorUncheckedUpdateWithoutProductosInput>
    create: XOR<ProveedorCreateWithoutProductosInput, ProveedorUncheckedCreateWithoutProductosInput>
    where?: ProveedorWhereInput
  }

  export type ProveedorUpdateToOneWithWhereWithoutProductosInput = {
    where?: ProveedorWhereInput
    data: XOR<ProveedorUpdateWithoutProductosInput, ProveedorUncheckedUpdateWithoutProductosInput>
  }

  export type ProveedorUpdateWithoutProductosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProveedorUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetalleVentaUpsertWithWhereUniqueWithoutProductoInput = {
    where: DetalleVentaWhereUniqueInput
    update: XOR<DetalleVentaUpdateWithoutProductoInput, DetalleVentaUncheckedUpdateWithoutProductoInput>
    create: XOR<DetalleVentaCreateWithoutProductoInput, DetalleVentaUncheckedCreateWithoutProductoInput>
  }

  export type DetalleVentaUpdateWithWhereUniqueWithoutProductoInput = {
    where: DetalleVentaWhereUniqueInput
    data: XOR<DetalleVentaUpdateWithoutProductoInput, DetalleVentaUncheckedUpdateWithoutProductoInput>
  }

  export type DetalleVentaUpdateManyWithWhereWithoutProductoInput = {
    where: DetalleVentaScalarWhereInput
    data: XOR<DetalleVentaUpdateManyMutationInput, DetalleVentaUncheckedUpdateManyWithoutProductoInput>
  }

  export type DetalleVentaScalarWhereInput = {
    AND?: DetalleVentaScalarWhereInput | DetalleVentaScalarWhereInput[]
    OR?: DetalleVentaScalarWhereInput[]
    NOT?: DetalleVentaScalarWhereInput | DetalleVentaScalarWhereInput[]
    id?: IntFilter<"DetalleVenta"> | number
    ventaId?: IntFilter<"DetalleVenta"> | number
    productoId?: IntFilter<"DetalleVenta"> | number
    cantidad?: IntFilter<"DetalleVenta"> | number
    precioUnit?: FloatFilter<"DetalleVenta"> | number
    descuento?: FloatFilter<"DetalleVenta"> | number
    subtotal?: FloatFilter<"DetalleVenta"> | number
    stockInsuficiente?: BoolFilter<"DetalleVenta"> | boolean
  }

  export type MovimientoUpsertWithWhereUniqueWithoutProductoInput = {
    where: MovimientoWhereUniqueInput
    update: XOR<MovimientoUpdateWithoutProductoInput, MovimientoUncheckedUpdateWithoutProductoInput>
    create: XOR<MovimientoCreateWithoutProductoInput, MovimientoUncheckedCreateWithoutProductoInput>
  }

  export type MovimientoUpdateWithWhereUniqueWithoutProductoInput = {
    where: MovimientoWhereUniqueInput
    data: XOR<MovimientoUpdateWithoutProductoInput, MovimientoUncheckedUpdateWithoutProductoInput>
  }

  export type MovimientoUpdateManyWithWhereWithoutProductoInput = {
    where: MovimientoScalarWhereInput
    data: XOR<MovimientoUpdateManyMutationInput, MovimientoUncheckedUpdateManyWithoutProductoInput>
  }

  export type MovimientoScalarWhereInput = {
    AND?: MovimientoScalarWhereInput | MovimientoScalarWhereInput[]
    OR?: MovimientoScalarWhereInput[]
    NOT?: MovimientoScalarWhereInput | MovimientoScalarWhereInput[]
    id?: IntFilter<"Movimiento"> | number
    productoId?: IntFilter<"Movimiento"> | number
    tipo?: EnumTipoMovimientoFilter<"Movimiento"> | $Enums.TipoMovimiento
    cantidad?: IntFilter<"Movimiento"> | number
    motivo?: StringNullableFilter<"Movimiento"> | string | null
    stockAntes?: IntFilter<"Movimiento"> | number
    stockDespues?: IntFilter<"Movimiento"> | number
    createdAt?: DateTimeFilter<"Movimiento"> | Date | string
  }

  export type DetalleVentaCreateWithoutVentaInput = {
    cantidad: number
    precioUnit: number
    descuento?: number
    subtotal: number
    stockInsuficiente?: boolean
    producto: ProductoCreateNestedOneWithoutDetalleVentasInput
  }

  export type DetalleVentaUncheckedCreateWithoutVentaInput = {
    id?: number
    productoId: number
    cantidad: number
    precioUnit: number
    descuento?: number
    subtotal: number
    stockInsuficiente?: boolean
  }

  export type DetalleVentaCreateOrConnectWithoutVentaInput = {
    where: DetalleVentaWhereUniqueInput
    create: XOR<DetalleVentaCreateWithoutVentaInput, DetalleVentaUncheckedCreateWithoutVentaInput>
  }

  export type DetalleVentaCreateManyVentaInputEnvelope = {
    data: DetalleVentaCreateManyVentaInput | DetalleVentaCreateManyVentaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutVentasInput = {
    nombre: string
    email: string
    passwordHash: string
    pinAutorizacionHash?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rol: RolCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateWithoutVentasInput = {
    id?: number
    nombre: string
    email: string
    passwordHash: string
    pinAutorizacionHash?: string | null
    rolId: number
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutVentasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutVentasInput, UsuarioUncheckedCreateWithoutVentasInput>
  }

  export type DetalleVentaUpsertWithWhereUniqueWithoutVentaInput = {
    where: DetalleVentaWhereUniqueInput
    update: XOR<DetalleVentaUpdateWithoutVentaInput, DetalleVentaUncheckedUpdateWithoutVentaInput>
    create: XOR<DetalleVentaCreateWithoutVentaInput, DetalleVentaUncheckedCreateWithoutVentaInput>
  }

  export type DetalleVentaUpdateWithWhereUniqueWithoutVentaInput = {
    where: DetalleVentaWhereUniqueInput
    data: XOR<DetalleVentaUpdateWithoutVentaInput, DetalleVentaUncheckedUpdateWithoutVentaInput>
  }

  export type DetalleVentaUpdateManyWithWhereWithoutVentaInput = {
    where: DetalleVentaScalarWhereInput
    data: XOR<DetalleVentaUpdateManyMutationInput, DetalleVentaUncheckedUpdateManyWithoutVentaInput>
  }

  export type UsuarioUpsertWithoutVentasInput = {
    update: XOR<UsuarioUpdateWithoutVentasInput, UsuarioUncheckedUpdateWithoutVentasInput>
    create: XOR<UsuarioCreateWithoutVentasInput, UsuarioUncheckedCreateWithoutVentasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutVentasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutVentasInput, UsuarioUncheckedUpdateWithoutVentasInput>
  }

  export type UsuarioUpdateWithoutVentasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    pinAutorizacionHash?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutVentasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    pinAutorizacionHash?: NullableStringFieldUpdateOperationsInput | string | null
    rolId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VentaCreateWithoutDetallesInput = {
    total: number
    descuentoTotal?: number
    metodoPago?: $Enums.MetodoPago
    tieneStockInsuficiente?: boolean
    autorizadoPorId?: number | null
    motivoAutorizacion?: string | null
    createdAt?: Date | string
    user: UsuarioCreateNestedOneWithoutVentasInput
  }

  export type VentaUncheckedCreateWithoutDetallesInput = {
    id?: number
    total: number
    descuentoTotal?: number
    metodoPago?: $Enums.MetodoPago
    tieneStockInsuficiente?: boolean
    userId: number
    autorizadoPorId?: number | null
    motivoAutorizacion?: string | null
    createdAt?: Date | string
  }

  export type VentaCreateOrConnectWithoutDetallesInput = {
    where: VentaWhereUniqueInput
    create: XOR<VentaCreateWithoutDetallesInput, VentaUncheckedCreateWithoutDetallesInput>
  }

  export type ProductoCreateWithoutDetalleVentasInput = {
    codigoBarra?: string | null
    nombre: string
    descripcion?: string | null
    precio: number
    stock?: number
    stockMinimo?: number
    descuento?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoria: CategoriaCreateNestedOneWithoutProductosInput
    proveedor: ProveedorCreateNestedOneWithoutProductosInput
    movimientos?: MovimientoCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutDetalleVentasInput = {
    id?: number
    codigoBarra?: string | null
    nombre: string
    descripcion?: string | null
    precio: number
    stock?: number
    stockMinimo?: number
    descuento?: number
    categoriaId: number
    proveedorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    movimientos?: MovimientoUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutDetalleVentasInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutDetalleVentasInput, ProductoUncheckedCreateWithoutDetalleVentasInput>
  }

  export type VentaUpsertWithoutDetallesInput = {
    update: XOR<VentaUpdateWithoutDetallesInput, VentaUncheckedUpdateWithoutDetallesInput>
    create: XOR<VentaCreateWithoutDetallesInput, VentaUncheckedCreateWithoutDetallesInput>
    where?: VentaWhereInput
  }

  export type VentaUpdateToOneWithWhereWithoutDetallesInput = {
    where?: VentaWhereInput
    data: XOR<VentaUpdateWithoutDetallesInput, VentaUncheckedUpdateWithoutDetallesInput>
  }

  export type VentaUpdateWithoutDetallesInput = {
    total?: FloatFieldUpdateOperationsInput | number
    descuentoTotal?: FloatFieldUpdateOperationsInput | number
    metodoPago?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    tieneStockInsuficiente?: BoolFieldUpdateOperationsInput | boolean
    autorizadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    motivoAutorizacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsuarioUpdateOneRequiredWithoutVentasNestedInput
  }

  export type VentaUncheckedUpdateWithoutDetallesInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    descuentoTotal?: FloatFieldUpdateOperationsInput | number
    metodoPago?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    tieneStockInsuficiente?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    autorizadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    motivoAutorizacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoUpsertWithoutDetalleVentasInput = {
    update: XOR<ProductoUpdateWithoutDetalleVentasInput, ProductoUncheckedUpdateWithoutDetalleVentasInput>
    create: XOR<ProductoCreateWithoutDetalleVentasInput, ProductoUncheckedCreateWithoutDetalleVentasInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutDetalleVentasInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutDetalleVentasInput, ProductoUncheckedUpdateWithoutDetalleVentasInput>
  }

  export type ProductoUpdateWithoutDetalleVentasInput = {
    codigoBarra?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stockMinimo?: IntFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
    proveedor?: ProveedorUpdateOneRequiredWithoutProductosNestedInput
    movimientos?: MovimientoUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutDetalleVentasInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoBarra?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stockMinimo?: IntFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    proveedorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movimientos?: MovimientoUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateWithoutMovimientosInput = {
    codigoBarra?: string | null
    nombre: string
    descripcion?: string | null
    precio: number
    stock?: number
    stockMinimo?: number
    descuento?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoria: CategoriaCreateNestedOneWithoutProductosInput
    proveedor: ProveedorCreateNestedOneWithoutProductosInput
    detalleVentas?: DetalleVentaCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutMovimientosInput = {
    id?: number
    codigoBarra?: string | null
    nombre: string
    descripcion?: string | null
    precio: number
    stock?: number
    stockMinimo?: number
    descuento?: number
    categoriaId: number
    proveedorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    detalleVentas?: DetalleVentaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutMovimientosInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutMovimientosInput, ProductoUncheckedCreateWithoutMovimientosInput>
  }

  export type ProductoUpsertWithoutMovimientosInput = {
    update: XOR<ProductoUpdateWithoutMovimientosInput, ProductoUncheckedUpdateWithoutMovimientosInput>
    create: XOR<ProductoCreateWithoutMovimientosInput, ProductoUncheckedCreateWithoutMovimientosInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutMovimientosInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutMovimientosInput, ProductoUncheckedUpdateWithoutMovimientosInput>
  }

  export type ProductoUpdateWithoutMovimientosInput = {
    codigoBarra?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stockMinimo?: IntFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
    proveedor?: ProveedorUpdateOneRequiredWithoutProductosNestedInput
    detalleVentas?: DetalleVentaUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutMovimientosInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoBarra?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stockMinimo?: IntFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    proveedorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detalleVentas?: DetalleVentaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type RolCreateWithoutUsuariosInput = {
    codigo: string
    nombre: string
    descripcion?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    permisos?: RolPermisoCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateWithoutUsuariosInput = {
    id?: number
    codigo: string
    nombre: string
    descripcion?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    permisos?: RolPermisoUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolCreateOrConnectWithoutUsuariosInput = {
    where: RolWhereUniqueInput
    create: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
  }

  export type VentaCreateWithoutUserInput = {
    total: number
    descuentoTotal?: number
    metodoPago?: $Enums.MetodoPago
    tieneStockInsuficiente?: boolean
    autorizadoPorId?: number | null
    motivoAutorizacion?: string | null
    createdAt?: Date | string
    detalles?: DetalleVentaCreateNestedManyWithoutVentaInput
  }

  export type VentaUncheckedCreateWithoutUserInput = {
    id?: number
    total: number
    descuentoTotal?: number
    metodoPago?: $Enums.MetodoPago
    tieneStockInsuficiente?: boolean
    autorizadoPorId?: number | null
    motivoAutorizacion?: string | null
    createdAt?: Date | string
    detalles?: DetalleVentaUncheckedCreateNestedManyWithoutVentaInput
  }

  export type VentaCreateOrConnectWithoutUserInput = {
    where: VentaWhereUniqueInput
    create: XOR<VentaCreateWithoutUserInput, VentaUncheckedCreateWithoutUserInput>
  }

  export type VentaCreateManyUserInputEnvelope = {
    data: VentaCreateManyUserInput | VentaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RolUpsertWithoutUsuariosInput = {
    update: XOR<RolUpdateWithoutUsuariosInput, RolUncheckedUpdateWithoutUsuariosInput>
    create: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    where?: RolWhereInput
  }

  export type RolUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: RolWhereInput
    data: XOR<RolUpdateWithoutUsuariosInput, RolUncheckedUpdateWithoutUsuariosInput>
  }

  export type RolUpdateWithoutUsuariosInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permisos?: RolPermisoUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permisos?: RolPermisoUncheckedUpdateManyWithoutRolNestedInput
  }

  export type VentaUpsertWithWhereUniqueWithoutUserInput = {
    where: VentaWhereUniqueInput
    update: XOR<VentaUpdateWithoutUserInput, VentaUncheckedUpdateWithoutUserInput>
    create: XOR<VentaCreateWithoutUserInput, VentaUncheckedCreateWithoutUserInput>
  }

  export type VentaUpdateWithWhereUniqueWithoutUserInput = {
    where: VentaWhereUniqueInput
    data: XOR<VentaUpdateWithoutUserInput, VentaUncheckedUpdateWithoutUserInput>
  }

  export type VentaUpdateManyWithWhereWithoutUserInput = {
    where: VentaScalarWhereInput
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyWithoutUserInput>
  }

  export type VentaScalarWhereInput = {
    AND?: VentaScalarWhereInput | VentaScalarWhereInput[]
    OR?: VentaScalarWhereInput[]
    NOT?: VentaScalarWhereInput | VentaScalarWhereInput[]
    id?: IntFilter<"Venta"> | number
    total?: FloatFilter<"Venta"> | number
    descuentoTotal?: FloatFilter<"Venta"> | number
    metodoPago?: EnumMetodoPagoFilter<"Venta"> | $Enums.MetodoPago
    tieneStockInsuficiente?: BoolFilter<"Venta"> | boolean
    userId?: IntFilter<"Venta"> | number
    autorizadoPorId?: IntNullableFilter<"Venta"> | number | null
    motivoAutorizacion?: StringNullableFilter<"Venta"> | string | null
    createdAt?: DateTimeFilter<"Venta"> | Date | string
  }

  export type UsuarioCreateWithoutRolInput = {
    nombre: string
    email: string
    passwordHash: string
    pinAutorizacionHash?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ventas?: VentaCreateNestedManyWithoutUserInput
  }

  export type UsuarioUncheckedCreateWithoutRolInput = {
    id?: number
    nombre: string
    email: string
    passwordHash: string
    pinAutorizacionHash?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ventas?: VentaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsuarioCreateOrConnectWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput>
  }

  export type UsuarioCreateManyRolInputEnvelope = {
    data: UsuarioCreateManyRolInput | UsuarioCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type RolPermisoCreateWithoutRolInput = {
    permiso: PermisoCreateNestedOneWithoutRolesInput
  }

  export type RolPermisoUncheckedCreateWithoutRolInput = {
    permisoId: number
  }

  export type RolPermisoCreateOrConnectWithoutRolInput = {
    where: RolPermisoWhereUniqueInput
    create: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput>
  }

  export type RolPermisoCreateManyRolInputEnvelope = {
    data: RolPermisoCreateManyRolInput | RolPermisoCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutRolInput, UsuarioUncheckedUpdateWithoutRolInput>
    create: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutRolInput, UsuarioUncheckedUpdateWithoutRolInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutRolInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutRolInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    passwordHash?: StringFilter<"Usuario"> | string
    pinAutorizacionHash?: StringNullableFilter<"Usuario"> | string | null
    rolId?: IntFilter<"Usuario"> | number
    activo?: BoolFilter<"Usuario"> | boolean
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
  }

  export type RolPermisoUpsertWithWhereUniqueWithoutRolInput = {
    where: RolPermisoWhereUniqueInput
    update: XOR<RolPermisoUpdateWithoutRolInput, RolPermisoUncheckedUpdateWithoutRolInput>
    create: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput>
  }

  export type RolPermisoUpdateWithWhereUniqueWithoutRolInput = {
    where: RolPermisoWhereUniqueInput
    data: XOR<RolPermisoUpdateWithoutRolInput, RolPermisoUncheckedUpdateWithoutRolInput>
  }

  export type RolPermisoUpdateManyWithWhereWithoutRolInput = {
    where: RolPermisoScalarWhereInput
    data: XOR<RolPermisoUpdateManyMutationInput, RolPermisoUncheckedUpdateManyWithoutRolInput>
  }

  export type RolPermisoScalarWhereInput = {
    AND?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
    OR?: RolPermisoScalarWhereInput[]
    NOT?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
    rolId?: IntFilter<"RolPermiso"> | number
    permisoId?: IntFilter<"RolPermiso"> | number
  }

  export type RolPermisoCreateWithoutPermisoInput = {
    rol: RolCreateNestedOneWithoutPermisosInput
  }

  export type RolPermisoUncheckedCreateWithoutPermisoInput = {
    rolId: number
  }

  export type RolPermisoCreateOrConnectWithoutPermisoInput = {
    where: RolPermisoWhereUniqueInput
    create: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput>
  }

  export type RolPermisoCreateManyPermisoInputEnvelope = {
    data: RolPermisoCreateManyPermisoInput | RolPermisoCreateManyPermisoInput[]
    skipDuplicates?: boolean
  }

  export type RolPermisoUpsertWithWhereUniqueWithoutPermisoInput = {
    where: RolPermisoWhereUniqueInput
    update: XOR<RolPermisoUpdateWithoutPermisoInput, RolPermisoUncheckedUpdateWithoutPermisoInput>
    create: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput>
  }

  export type RolPermisoUpdateWithWhereUniqueWithoutPermisoInput = {
    where: RolPermisoWhereUniqueInput
    data: XOR<RolPermisoUpdateWithoutPermisoInput, RolPermisoUncheckedUpdateWithoutPermisoInput>
  }

  export type RolPermisoUpdateManyWithWhereWithoutPermisoInput = {
    where: RolPermisoScalarWhereInput
    data: XOR<RolPermisoUpdateManyMutationInput, RolPermisoUncheckedUpdateManyWithoutPermisoInput>
  }

  export type RolCreateWithoutPermisosInput = {
    codigo: string
    nombre: string
    descripcion?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UsuarioCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateWithoutPermisosInput = {
    id?: number
    codigo: string
    nombre: string
    descripcion?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolCreateOrConnectWithoutPermisosInput = {
    where: RolWhereUniqueInput
    create: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
  }

  export type PermisoCreateWithoutRolesInput = {
    codigo: string
    modulo: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermisoUncheckedCreateWithoutRolesInput = {
    id?: number
    codigo: string
    modulo: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermisoCreateOrConnectWithoutRolesInput = {
    where: PermisoWhereUniqueInput
    create: XOR<PermisoCreateWithoutRolesInput, PermisoUncheckedCreateWithoutRolesInput>
  }

  export type RolUpsertWithoutPermisosInput = {
    update: XOR<RolUpdateWithoutPermisosInput, RolUncheckedUpdateWithoutPermisosInput>
    create: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
    where?: RolWhereInput
  }

  export type RolUpdateToOneWithWhereWithoutPermisosInput = {
    where?: RolWhereInput
    data: XOR<RolUpdateWithoutPermisosInput, RolUncheckedUpdateWithoutPermisosInput>
  }

  export type RolUpdateWithoutPermisosInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateWithoutPermisosInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutRolNestedInput
  }

  export type PermisoUpsertWithoutRolesInput = {
    update: XOR<PermisoUpdateWithoutRolesInput, PermisoUncheckedUpdateWithoutRolesInput>
    create: XOR<PermisoCreateWithoutRolesInput, PermisoUncheckedCreateWithoutRolesInput>
    where?: PermisoWhereInput
  }

  export type PermisoUpdateToOneWithWhereWithoutRolesInput = {
    where?: PermisoWhereInput
    data: XOR<PermisoUpdateWithoutRolesInput, PermisoUncheckedUpdateWithoutRolesInput>
  }

  export type PermisoUpdateWithoutRolesInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    modulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermisoUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    modulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoCreateManyCategoriaInput = {
    id?: number
    codigoBarra?: string | null
    nombre: string
    descripcion?: string | null
    precio: number
    stock?: number
    stockMinimo?: number
    descuento?: number
    proveedorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductoUpdateWithoutCategoriaInput = {
    codigoBarra?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stockMinimo?: IntFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proveedor?: ProveedorUpdateOneRequiredWithoutProductosNestedInput
    detalleVentas?: DetalleVentaUpdateManyWithoutProductoNestedInput
    movimientos?: MovimientoUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoBarra?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stockMinimo?: IntFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    proveedorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detalleVentas?: DetalleVentaUncheckedUpdateManyWithoutProductoNestedInput
    movimientos?: MovimientoUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoBarra?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stockMinimo?: IntFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    proveedorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoCreateManyProveedorInput = {
    id?: number
    codigoBarra?: string | null
    nombre: string
    descripcion?: string | null
    precio: number
    stock?: number
    stockMinimo?: number
    descuento?: number
    categoriaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductoUpdateWithoutProveedorInput = {
    codigoBarra?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stockMinimo?: IntFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
    detalleVentas?: DetalleVentaUpdateManyWithoutProductoNestedInput
    movimientos?: MovimientoUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutProveedorInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoBarra?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stockMinimo?: IntFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detalleVentas?: DetalleVentaUncheckedUpdateManyWithoutProductoNestedInput
    movimientos?: MovimientoUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateManyWithoutProveedorInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoBarra?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stockMinimo?: IntFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetalleVentaCreateManyProductoInput = {
    id?: number
    ventaId: number
    cantidad: number
    precioUnit: number
    descuento?: number
    subtotal: number
    stockInsuficiente?: boolean
  }

  export type MovimientoCreateManyProductoInput = {
    id?: number
    tipo: $Enums.TipoMovimiento
    cantidad: number
    motivo?: string | null
    stockAntes: number
    stockDespues: number
    createdAt?: Date | string
  }

  export type DetalleVentaUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnit?: FloatFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    stockInsuficiente?: BoolFieldUpdateOperationsInput | boolean
    venta?: VentaUpdateOneRequiredWithoutDetallesNestedInput
  }

  export type DetalleVentaUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnit?: FloatFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    stockInsuficiente?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DetalleVentaUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnit?: FloatFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    stockInsuficiente?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MovimientoUpdateWithoutProductoInput = {
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    stockAntes?: IntFieldUpdateOperationsInput | number
    stockDespues?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimientoUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    stockAntes?: IntFieldUpdateOperationsInput | number
    stockDespues?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimientoUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    stockAntes?: IntFieldUpdateOperationsInput | number
    stockDespues?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetalleVentaCreateManyVentaInput = {
    id?: number
    productoId: number
    cantidad: number
    precioUnit: number
    descuento?: number
    subtotal: number
    stockInsuficiente?: boolean
  }

  export type DetalleVentaUpdateWithoutVentaInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnit?: FloatFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    stockInsuficiente?: BoolFieldUpdateOperationsInput | boolean
    producto?: ProductoUpdateOneRequiredWithoutDetalleVentasNestedInput
  }

  export type DetalleVentaUncheckedUpdateWithoutVentaInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnit?: FloatFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    stockInsuficiente?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DetalleVentaUncheckedUpdateManyWithoutVentaInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnit?: FloatFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    stockInsuficiente?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VentaCreateManyUserInput = {
    id?: number
    total: number
    descuentoTotal?: number
    metodoPago?: $Enums.MetodoPago
    tieneStockInsuficiente?: boolean
    autorizadoPorId?: number | null
    motivoAutorizacion?: string | null
    createdAt?: Date | string
  }

  export type VentaUpdateWithoutUserInput = {
    total?: FloatFieldUpdateOperationsInput | number
    descuentoTotal?: FloatFieldUpdateOperationsInput | number
    metodoPago?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    tieneStockInsuficiente?: BoolFieldUpdateOperationsInput | boolean
    autorizadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    motivoAutorizacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: DetalleVentaUpdateManyWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    descuentoTotal?: FloatFieldUpdateOperationsInput | number
    metodoPago?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    tieneStockInsuficiente?: BoolFieldUpdateOperationsInput | boolean
    autorizadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    motivoAutorizacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: DetalleVentaUncheckedUpdateManyWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    descuentoTotal?: FloatFieldUpdateOperationsInput | number
    metodoPago?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    tieneStockInsuficiente?: BoolFieldUpdateOperationsInput | boolean
    autorizadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    motivoAutorizacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateManyRolInput = {
    id?: number
    nombre: string
    email: string
    passwordHash: string
    pinAutorizacionHash?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolPermisoCreateManyRolInput = {
    permisoId: number
  }

  export type UsuarioUpdateWithoutRolInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    pinAutorizacionHash?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ventas?: VentaUpdateManyWithoutUserNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    pinAutorizacionHash?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ventas?: VentaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    pinAutorizacionHash?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolPermisoUpdateWithoutRolInput = {
    permiso?: PermisoUpdateOneRequiredWithoutRolesNestedInput
  }

  export type RolPermisoUncheckedUpdateWithoutRolInput = {
    permisoId?: IntFieldUpdateOperationsInput | number
  }

  export type RolPermisoUncheckedUpdateManyWithoutRolInput = {
    permisoId?: IntFieldUpdateOperationsInput | number
  }

  export type RolPermisoCreateManyPermisoInput = {
    rolId: number
  }

  export type RolPermisoUpdateWithoutPermisoInput = {
    rol?: RolUpdateOneRequiredWithoutPermisosNestedInput
  }

  export type RolPermisoUncheckedUpdateWithoutPermisoInput = {
    rolId?: IntFieldUpdateOperationsInput | number
  }

  export type RolPermisoUncheckedUpdateManyWithoutPermisoInput = {
    rolId?: IntFieldUpdateOperationsInput | number
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