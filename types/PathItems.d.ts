/**
 * The collection of `PathItem` objects in the document.
 */
declare class PathItems {
    readonly [index: number]: PathItem
    /** @readonly The number of elements in the PathItems collection. */
    readonly length: number
    /** @readonly The containing document. */
    readonly parent: Document 
    /** @readonly The class name of the referenced PathItems object. */
    readonly typename: string

    /** Creates a new layer set composition object and adds it into this collection. */
    add(name: string, entirePath: SubPathInfo[]): PathItem
    /** Gets the first element in the collection with the provided name. */
    getByName(name: string): LayerSet
    /** Removes all member objects from the PathItems collection. */
    removeAll(): void
}