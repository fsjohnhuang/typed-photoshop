type Unit = 'px' | 'pt' | 'in' | 'pc' | 'cm' | '%' | 'mm'

/**
 * Notes:
 * 1. Addition and substraction on different units would return `NaN`.
 * 2. Multipilication and division on different units, all elements would convert to the unit as the same as the first factor.
 * 3. Relational Operators on different units work as that on the same untis.
 * TypeScript's rules:
 * 1. Operator '>' cannot be applied to types 'UnitValue' and 'number'.
 * 2. The left-hand side and the right-hand side of an arithmetic operator must be of type `any`, `number`, `bigint` or an `enum` type.
 * 3. Converion of type `number` to type `UnitValue` may not be a mistake because neither type sufficiently overlaps with the other.
 * Solutions for TypeScript's rules:
 * ```
 * let a = UnitValue(1,'px'), b = UnitValue(2, 'px')
 * let c1: UnitValue = <UnitValue><Number>(<any>a + <any>b)
 * let c2: UnitValue = <UnitValue><Number>(<number><Number>a + <number><Number>b)
 * let c3: UnitValue = <UnitValue><unknow>(<any>a + <any>b)
 * ```
 */
declare interface UnitValue extends Number {
    /**
     * Converts to the value represented in indicated unit without change the original one.
     * @example
     * var a = UnitValue("22 px")
     * a.as("cm") // 0.7761111
     * a // 22 px
     */
    as(unit: Unit): number
    /**
     * Converts the variable to the value represented in indicated unit.
     * @example
     * var a = UnitValue("22 px")
     * a.convert("cm") // true
     * a // 0.7761111
     */
    convert(unit: Unit): boolean
}

declare interface UnitValueConstructor {
    new (value: number, unit: string): UnitValue
    new (unitValue: string): UnitValue
    (unitValue: string): UnitValue
    (value: number, unit: string): UnitValue
}

declare var UnitValue: UnitValueConstructor & object
