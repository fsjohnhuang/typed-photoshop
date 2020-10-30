/**
 * Represents the anchor and control-handle endpoints for a path segment.
 * Each point(the anchor point, left-direction point, and right-direction point) is an array containing X and Y coordinates.
 * Use the `PathPoint` object to retrieve information about the points that describe existing path segments. 
 * The properties are read-only. Access `PathPoint` objects through the `SubPathItem.pathPoints` property.
 * Use `PathPointInfo` with `PathItems.add()` to create path points. The properties are writeable.
 * For paths that are straight segments(not curved), the coordinates of all three points are the same.
 * For curved segment, the coordinates are different. The difference between the anchor point and the left or right direction points determines the arc of the curve.
 * You use the left direction point to bend the curve "outward" or make it convex;
 * you use the right direction point to bend the curve "inward" or make it concave.
 */
declare class PathPoint {
    /** @readonly The X and Y coordinates of the anchor point of the curve. */
    readonly anchor: number[]
    /** @readonly The role(corner or smooth) this point plays in the containing path segment. */
    readonly kind: PointKind
    /** @readonly The location of the left-direction endpoint(`in` position) */
    readonly leftDirection: number[]
    readonly parent: SubPathItem
    /** @readonly The location of the right-direction endpoint(`out` position) */
    readonly rightDirection: number[]
    readonly typename: string
}