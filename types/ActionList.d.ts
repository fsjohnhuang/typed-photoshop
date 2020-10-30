declare interface ActionList {
    /** @readonly The number of commands that comprise the action. */
    readonly count: number
    /** 
     * @readonly The class name of the referenced `ActionReference` object 
     */
    readonly typename: string

    clear(): void
    getBoolean(index: number): boolean
    getClass(index: number): number
    getData(index: number): string
    getDouble(index: number): number
    getEnumerationType(index: number): number
    getEnumerationValue(index: number): number
    getInteger(index: number): number
    getLargeInteger(index: number): number
    getList(index: number): ActionList
    getObjectType(index: number): number
    getObjectValue(index: number): ActionDescriptor
    getPath(index: number): File
    getReference(index: number): ActionReference
    getString(index: number): string
    getType(index: number): DescValueType
    getUnitDoubleType(index: number): number
    getUnitDoubleValue(index: number): number
    putBoolean(value: boolean): void
    putClass(value: number): void
    putData(value: string): void
    putDouble(value: number): void
    putEnumerated(enumType: number, value: number): void
    putInteger(value: number): void
    putLargeInteger(value: number): void
    putList(value: ActionList): void
    putObject(classID: number, value: ActionDescriptor): void
    putPath(value: File): void
    putReference(value: ActionReference): void
    putString(value: string): void
    putUnitDouble(classID: number, value: number): void
}