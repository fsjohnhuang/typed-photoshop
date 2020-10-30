/**
 * Represents a subpaths; a collection of subpaths make up a `PathItem`.
 * Create these objects by passing `SubPathInfo` objects to the `PathItems.add()` method. This method creates a `SubPathItem` object of each `SubPathInfo` object,
 * and creates and returns a new `PathItem` object for the path representd by all of the subaths. Access these objects in the `PathItem.subPathItems` collection.
 * Use `SubPathInfo` to create subpaths; the properties are writable.
 * Use the `SubPathItem` object to retrieve information about existing subpaths. The properties are read-only.
 */
declare class SubPathItem {
    /** @readonly True if the path is closed. */
    readonly closed: boolean
    /** 
     * @readonly How this object behaves when is intersects another `SubPathItem` object.
     * Specifies how to combine the shapes if the destination path already has a selection.
     */
    readonly operation: ShapeOperation
    readonly parent: PathItem
    /**
     * @readonly The `PathPoitns` collection.
     */
    readonly pathPoints: PathPoints
    readonly typename: string
}