declare class CountItems {
    /** Read-only. The number of elements in the CountItems collection. */
    readonly length: number
    /** Read-only. The containing document. */
    readonly parent: Document
    /** Read-only. The class name of the referenced CountItems object. */
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