/**
 * The selected area of a document or layer. Access through the `Document.selection` property.
 * For example:
 * `app.activeDocument.selection.fill(app.foregroundColor)`
 * Many of the properties and methods use the `UnitValue` type, which combines measurement values with the measurement unit.
 */
declare class Selection {
    /** @readonly The bounding rectangle of the entire selection. */
    readonly bounds: UnitValue[]    
    readonly parent: Document
    /** @readonly True if the bounding rectangle is a solid. */
    readonly solid: boolean
    readonly typename: string

    /** Clears the selection and does not copy it to the clipboard. */
    clear(): void
    /** Contracts(reduces) the selection by the specified amount. */
    contract(by: UnitValue): void
    /**
     * Copies the selection to the clipboard. When the optional argument is used and set to `true`, a merged copy is performed(all visible layers in the selection are copied). 
     */
    copy(merge?: boolean): void
    /** Clears the current selection and copies it to the clipboard. */
    cut(): void
    /** Deselects the current selection. */
    deselect(): void
    /** Expands the selection by the specified amount. */
    expand(by: UnitValue): void
    /** Feathers the edges of the selection by the specified amount. */
    feather(by: UnitValue): void
    /**
     * Fills the selection.
     * `opacity` is a percentage value. 
     */
    fill(filltype: SolidColor, mode?: ColorBlendMode, opacity?: number, preserveTransparency?: boolean): void
    /** Grows the selection to include all adjacent pixels falling within the specified tolerance range. */
    grow(tolerance: number, antiAlias: boolean): void
    /**
     * Inverts the selection(deselect the selection and selects the rest of the layer or document).
     * *Tip:*
     * To flip the selection shape, see `rotate`.
     */
    invert(): void
    /** Loads the selection from the specified channel. */
    load(from: Channel, combination?: SelectionType, inverting?: boolean): void
    /** Makes this selection item the work path for this document. */
    makeWorkPath(tolerance?: number): void
    /** Resizes the selected area to the specified dimensions and anchor position. */
    resize(horizontal?: number, vertical?: number, anchor?: AnchorPosition): void
    /** Changes the size of the selection to the specified dimensions around the specified anchor. */
    resizeBoundary(horizontal?: number, vertical?: number, anchor?: AnchorPosition): void
    /** Rotates the selection by the specified amount around the specified anchor point. */
    rotate(angle: number, anchor?: AnchorPosition): void
    /** Rotates the boundary of selection around the specified anchor. */
    rotateBoundary(angle: number, anchor?: AnchorPosition): void
    /**
     * Selects the specified region, The `region` parameter is an array of four coordinates, [left, top, right, bottom].
     */
    select(region: number[], type?: SelectionType, feather?: number, antiAlias?: boolean): void
    /** Selects the entire layer. */
    selectAll(): void
    /** Selects the selection border only;subsequent actions do not affect the selected area within th borders. */
    selectBorder(width: UnitValue): void
    /** Grows the selection to include pixels throughout the image falling within the tolerance amount. */
    similar(tolerance?: number, antiAlias?: boolean): void
    /** Cleans up stray pixels left inside or outside a color-based selection(within the radius specified in pixels).  */
    smooth(radius: number): void
    /** Saves the selection as a channel. */
    store(into: Channel, combination?: SelectionType): void
    /**
     * Strokes the selection border. `opacity` is a percentage value.
     */
    stroke(strokeColor: SolidColor, width: number, location?: StrokeLocation, mode?: ColorBlendMode, opacity?: number, preserveTransparency?: boolean): void
    /** Moves the entire selection relative to its current position. */
    translate(deltaX?: UnitValue, deltaY?: UnitValue): void
    /** Moves the selection relative to its current position. */
    translateBoundary(deltaX?: UnitValue, deltaY?: UnitValue): void
}