declare class CountItems {
    readonly [index: number]: CountItem
    /** @readonly The number of elements in the CountItems collection. */
    readonly length: number
    /** @readonly The containing document. */
    readonly parent: Document
    /** @readonly The class name of the referenced CountItems object. */
    readonly typename: string

    /**
     * Creates a new count item object and adds it to this collection.
     * The `position` parameter(x,y) represents the new horizontal and vertical locations, respectively, of the CountItem object.
     */
    add(position: UnitValue[]): CountItem
    /**
     * Gets the first element in the CountItems collection with the provided name. 
     */
    getByName(name: string): CountItem
    /**
     * Removes all `CountItem` objects from the `CountItems` collection.
     */
    removeAll(): void
}