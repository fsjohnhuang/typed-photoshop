/**
 * A group of layer objects, which can include `ArtLayer` objects and other(nested) `LayerSet` objects. A single command can manipulate all layers in the set.
 * Access top-level layer sets in a document through the `Document.layerSets` collection.
 * You can access a layer set by name. For example, the following sets the `allLocked` value for 'myLayerSet'.
 * `app.activeDocument.layerSets.getByName("myLayerSet).allLocked=true`
 * Access nested layer sets through the `LayerSet.layerSets` collection in the parent set. For example:
 * `app.activeDocument.layerSets[0].layerSets[0]`
 */
declare class LayerSet {
    /** True if the contents in the layers in this set are not editable. */
    allLocked: boolean
    /** The art layers in this layer set. */
    readonly artLayers: ArtLayer
    /** The blend mode to use for the layer set. */
    blendMode: BlendMode
    /** The bounding rectangle of the layer set. */
    readonly bounds: UnitValue[]
    /** 
     * The channels enabled for the layer set; must be a list of component channels. See `Channel.kind`.
     */
    enableChannels: Channel[]
    /** The layers in this set. */
    readonly layers: Layers
    /** Nested layer sets contained within this layer set. */
    readonly layerSets: LayerSets
    /** The layers linked to this layerSet object. */
    readonly linkedLayers: ArtLayer[] | LayerSet[]
    /** The name of this layer set. */
    name: string
    /** The master opacity of the set. */
    opactiy: number
    readonly parent: Document | LayerSet
    readonly typename: string
    /** True if the set is visible. */
    visible: boolean

    /** Creates a duplicate of the object. */
    duplicate(relativeObject?: ArtLayer | LayerSet, insertionLocation?: ElementPlacement): LayerSet
    /** Links the layer set with another layer. */
    link(another: ArtLayer | LayerSet): void
    /** Merges the layerset; returns a reference to the art layer created by this method. */
    merge(): ArtLayer
    /** Moves the object. */
    move(relativeObject?: ArtLayer | LayerSet, insertionLocation?: ElementPlacement): void
    /** Deletes the object. */
    remove(): void
    /**
     * Resizes all layers in the layer set to the specified dimensions(as a percentage of its current size) and places the layer set in the specified position. 
     */
    resize(horizontal?: number, vertical?: number, anchor?: AnchorPosition): void
    /**
     * Rotates all layers in the layer set around the specified anchor point (default: `AnchorPosition.MIDDLECENTER`)
     */
    rotate(angle: number, anchor?: AnchorPosition): void
    /** Moves the position relative to its current position. */
    translate(deltaX?: UnitValue, deltaY?: UnitValue): void
    /** Unlinks the layer set. */
    unlink(): void
}