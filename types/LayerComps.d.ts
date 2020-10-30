/**
 * The collection of `LayerComp` objects in the docuent.
 * Access through the `Document.layerComps` collection property.
 * For example:
 * `app.activeDocument.layerComps.add("myLayerComp", "View from Shoreline", true, true, true)`
 */
declare class LayerComps {
    readonly [index: number]: LayerComp
    /** @readonly The number of elements in the LayerComps collection. */
    readonly length: number
    /** @readonly The containing document. */
    readonly parent: Document
    /** @readonly The class name of the referenced LayerComps object. */
    readonly typename: string

    /** Creates a new layer composition object and adds it into this collection. */
    add(name: string, comment: string, appearanec: boolean, postion: boolean, visibility: boolean, childlayerCompState: boolean): LayerComp
    /** Gets the first element in the collection with the provided name. */
    getByName(name: string): LayerComp
    /** Removes all member objects from the LayerComps collection. */
    removeAll(): void
 
}