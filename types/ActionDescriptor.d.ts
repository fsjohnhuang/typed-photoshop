declare class ActionDescriptor {
    // Read-only. The number of keys contained in the descriptor.
    readonly count: number
    // Read-only. The class name of the referenced actionDescriptor object.
    readonly tyepname: string

    // Clears the descriptor.
    clear(): void
    // Ereases a key from the descriptor.
    erase(key: number): void
    // Creates a descriptor from a stream of bytes; for reading from disk.
    fromStream(value: string): void
    // Gets the value of a key of type boolean.
    getBoolean(key: number): boolean
    // Gets the value of a key of type class.
    getClass(key: number): number
    // Gets raw byte data as a string value.
    getData(key: number): string
    // Gets the value of a key of type double.
    getDouble(key: number): number
    // Gets the enumeration value of a key.
    getEnumerationType(key: number): number
    // Gets the value of a key of integer.
    getInteger(key: number): number
    // Gets the ID of the Nth key, provided by index.
    getKey(index: number): number
    // Gets the value of a key of type large integer.
    getLargeInteger(key: number): number
    // Gets the value of a key of type list.
    getList(key: number): ActionList
    // Gets the class ID of an object in a key of type object.
    getObjectType(key: number): number
}