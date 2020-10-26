/**
 * This object provides a dictionary-style mechanism for storing data as key-value pairs.
 * It can be used for low-level access into Photoshop.
 */
declare class ActionDescriptor {
    /** Read-only. The number of keys contained in the descriptor. */ 
    readonly count: number
    /** Read-only. The class name of the referenced ActionDescriptor object. */
    readonly typename: string

    /** Clears the descriptor. */
    clear(): void
    /** Ereases a key from the descriptor. */
    erase(key: number): void
    /** Creates a descriptor from a stream of bytes; for reading from disk. */
    fromStream(value: string): void
    /** Gets the value of a key of type boolean. */
    getBoolean(key: number): boolean
    /** Gets the value of a key of type class. */
    getClass(key: number): number
    /** Gets raw byte data as a string value. */
    getData(key: number): string
    /** Gets the value of a key of type double. */
    getDouble(key: number): number
    /** Gets the enumeration value of a key. */
    getEnumerationType(key: number): number
    /** Gets the value of a key of integer. */
    getInteger(key: number): number
    /** Gets the ID of the Nth key, provided by index. */
    getKey(index: number): number
    /** Gets the value of a key of type large integer. */
    getLargeInteger(key: number): number
    /** Gets the value of a key of type list. */
    getList(key: number): ActionList
    /** Gets the class ID of an object in a key of type object. */
    getObjectType(key: number): number
    /** Gets the value of a key of type object. */
    getObjectValue(key: number): ActionDescriptor
    /** Gets the value of a key of type File. */
    getPath(key: number): File
    /** Gets the value of a key of type ActionReference. */
    getReference(key: number): ActionReference
    /** Gets the value of a key of type string. */
    getString(key: number): string
    /** Gets the type of a key. */
    getType(key: number): DescValueType
    /** Gets the unit type of a key of type UnitDouble. */ 
    getUnitDoubleType(key: number): number
    /** Gets the value of a key of type UnitDouble. */ 
    getUnitDoubleValue(key: number): number
    /** Checks whether the descriptor contains the provided key. */ 
    hasKey(key: number): boolean
    /** Determines whether the descriptor is the same as another descriptor. */
    isEqual(otherDesc: ActionDescriptor): boolean
    /** Sets the value for a key whose type is boolean. */
    putBoolean(key: number, value: boolean): void 
    /** Sets the value for a key whose type is class. */
    putClass(key: number, value: number): void 
    /** Puts raw byte data as a string value. */
    putData(key: number, value: string): void 
    /** Sets the value for a key whose type is double. */
    putDouble(key: number, value: number): void 
    /** Sets the enumeration type and value for a key. */
    putEnumerated(key: number, enumType: number, value: number): void 
    /** Sets the value for a key whose type is integer. */
    putInteger(key: number, value: number): void
    /** Sets the value for a key whose type is large integer. */
    putLargeInteger(key: number, value: number): void
    /** Sets the value for a key whose type is an ActionList object. */
    putList(key: number, value: ActionList):void
    /** Sets the value for a key whose type is an object, represented by an ActioDescriptor. */
    putObject(key: number, classID: number, value: ActionDescriptor): void
    /** Sets the value for a key whose type is path. */
    putPath(key: number, value: File): void
    /** Sets the value for a key whose type is an object reference.*/
    putReference(key: number, value: ActionReference): void
    /** Sets the value for a key whose type is string. */
    putString(key: number, value: string): void
    /** Sets the value for a key whose type is an unit value formatted as a dobule. */
    putUnitDouble(key: number, unitID: number, value: number): void
    /** Gets the entire descriptor as a stream of bytes, for writing to disk. */
    toStream(): string
}
