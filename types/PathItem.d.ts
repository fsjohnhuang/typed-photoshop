declare class PathItem {
    /** Read-write. The type. */
    kind: PathKind
    /** Read-write. The name. */
    name: string
    readonly parent: Document
    /** Read-write. The contained sub-path objects. */
    subPathItems: SubPathItems
    readonly typename: string

    /** 
     * Deselects this `pathItem` object. 
     */
    deselect(): void
    /**
     * Duplicates this `pathItem` object with the new name. 
     */
    duplicate(name: string): void
    /**
     * Fills the area enclosed by this path.
     * `opacity` is a percentage.
     * `feather` is in pixels.
     * If `wholePath` is true, all subpaths are used when doing the fill(defualt: true) 
     */
    filePath(fillColor?: SolidColor, mode?: ColorBlendMode, opacity?: number, preserveTransparency?: boolean, feather?: number, wholePath?: boolean, antiAlias?: boolean): void
    /**
     * Makes the clipping path for this document.
     * `flatness` tells the PostScript printer how to approximate curves in the path.
     */
    makeClippingPath(flatness?: number): void
    /**
     * Makes a `Selection` object whose border is this path.
     * `feather` is in pixels. 
     */
    makeSelection(feather?: number, antiAlias?: boolean, operation?: SelectionType): void
    /** Deletes this object. */
    remove(): void
    /** 
     * Makes this the active or selected `PathItem` object.
     */
    select(): void
    /** Strokes the path with the specified tool */
    strokePath(tool?: ToolType, simulatePressure?: boolean): void
}