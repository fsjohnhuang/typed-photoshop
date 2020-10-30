/**
 * The collection of `LayerSet` objects in the document.
 * Access the top-level layer sets in a document through the `Document.layerSets` collection property.
 * Acess the nested layer sets through the `LayerSet.layerSets` collection property in the parent set.
 */
declare class LayerSets {
    readonly [index: number]: LayerSet
    /** @readonly The number of elements in the LayerSets collection. */
    readonly length: number
    /** @readonly The containing document or layer set. */
    readonly parent: Document | LayerSet
    /** @readonly The class name of the referenced LayerSets object. */
    readonly typename: string

    /** Creates a new layer set composition object and adds it into this collection. */
    add(): LayerSet
    /** Gets the first element in the collection with the provided name. */
    getByName(name: string): LayerSet
    /** Removes all member objects from the LayerSets collection. */
    removeAll(): void
}