/**
 * An array of `PathPoint` objects that describes a straight or curved segment of a path, used to create a `SubPathItem`.
 * Pass an array of these objets to the `PathItems.add()` method. This method creates a `SubPathItem` object for each `SubPathInfo` object,
 * and creates and return s a new `PathItem` object for the path represented by all of the supaths.
 * Use `SubPathInfo` to create subpaths; the properties are writable.
 * Use the `SubPathItem` object to retrieve information about existing subpaths. The properties are read-only.
 */
declare class SubPathInfo {
    /** Read-write. True if the path describes an enclosed area. */
    closed: boolean
    entireSubPath: PathPoint[]
    /**
     * Read-write. The subpath's operation on other subpaths.
     * Specifies how to combine the shaps if the destination path already has a selection.
     */
    operation: ShapeOperation
    readonly typename: string
}