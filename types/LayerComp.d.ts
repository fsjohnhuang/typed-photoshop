/**
 * A snapshot of a state of the layers in a document, which can be used to view different page layouts or compositions.
 * Access through `Document.layerComps` collection. You can access a layer comp by its name.
 */
declare class LayerComp {
    /** Read-write. True to use layer appearance(layer styles) settings. */
    appearance: boolean
    /** Read-write. True to track child Smark Obects layer comp. */
    childLayerCompState: boolean
    /** Read-write. A description of the layer comp. */
    comment: string
    /** Read-write. The name of the layer comp. */
    name: string
    readonly parent: Document
    /** Read-write. True to use layer position. */
    position: boolean
    /** Read-only. True if the layer comp is currently selected. */
    readonly selected: boolean
    readonly typename: string
    /** Read-write. True to use layer visibility settings. */
    visibility: boolean

    /** Applies the layer comp to the document. */
    apply(): void
    /** Recaptures the current layer state(s) for this layer comp. */
    recapture(): void
    /** Deletes the layerComp object. */
    remove(): void
    /** Resets the layer comp state to the document state. */
    resetfromComp(): void
}