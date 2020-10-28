/**
 * The collection of `Guide` objects.
 * Access this list through the `Document.guides` collection property, which is available through the `activeDocument` object.
 * For example, the following adds a new guides to the collection:
 * `activeDocument.guides.add(Direction.HORIZONTAL, UnitValue(20,20))`
 */
declare class Guides {
    [index: number]: Guide
    readonly length: number
    readonly parent: Document
    readonly typename: string

    /** Creates a new guide object and adds it to this collection. */
    add(direction: Direction, coordinate: UnitValue): Guide
    /** 
     * Gets the first element in the `guides` collection with the provided name.
     */
    getByName(name: string): Guide
}