/**
 * The collection of layer objects, including `ArtLayer` and `LayerSet` objects, in the document.
 * Access through `Documenet.layers`, or the `LayerSet.layers` collection properties.
 */
declare class Layers {
    readonly [index: number]: ArtLayer | LayerSet
    /** @readonly The number of elements in the Layers collection. */
    readonly length: number
    /** @readonly The containing document or layer set. */
    readonly parent: Document | LayerSet
    /** @readonly The class name of the referenced Layers object. */
    readonly typename: string

    /** Gets the first element in the collection with provided name. */
    getByName(name: string): ArtLayer | LayerSet
    /** Removes all member objects from the Layers collection. */
    removeAll(): void
}
