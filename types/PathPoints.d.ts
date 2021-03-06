/**
 * A collection of `PathPoint` objects that define a subpath, kept in the `SubpathItem.pathPoints` property.
 */
declare class PathPoints {
    readonly [index: number]: PathPoint
    readonly length: number
    readonly parent: SubPathItem
    readonly typename: string
}