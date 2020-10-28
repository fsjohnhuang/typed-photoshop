/**
 * The collection of `ArtLayer` objects in a document or layer set.
 * Access through the `Document.artLayers` or `LayerSet.artLayers` collection.
 * For example: `var layerRef = docRef.artLayers.add()`
 */
declare class ArtLayers {
    [index: number]: ArtLayer
    /** Read-only. The nubmer of elements in the artLayers collection. */
    readonly length: number
    /** Read-only. The object's container. */
    readonly parent: Document
    /** Read-only. The class name of the referenced artLayers object. */
    readonly typename: string

    /** Creates a new layer in the document and adds the new object to this collection. */
    add(): ArtLayer
    /**
     * Gets the first element in the `artLayers` collection with the provided name. 
     */
    getByName(name: string): ArtLayer
    /**
     * Removes all elements from the `artLayers` collection.
     */
    removeAll(): void
}