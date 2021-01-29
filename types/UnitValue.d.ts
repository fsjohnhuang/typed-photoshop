type Unit = 'px' | 'pt' | 'in' | 'pc' | 'cm' | '%' | 'mm'

/**
 * Notes:
 * 1. Addition and substraction on different units would return `NaN`.
 * 2. Multipilication and division on different units, all elements would convert to the unit as the same as the first factor.
 * 3. Relational Operators on different units work as that on the same untis.
 * 4. TypeScript's rule: The left-hand side and the right-hand side of an arithmetic operator must be of type `any`, `number`, `bigint` or an `enum` type.
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
