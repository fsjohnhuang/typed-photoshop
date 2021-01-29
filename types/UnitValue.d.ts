type Unit = 'px' | 'pt' | 'in' | 'pc' | 'cm' | '%' | 'mm'

declare interface UnitValue {
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
