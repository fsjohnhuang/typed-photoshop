declare class LabColor {
    /** Read-write. The a-value(as percent in [0.0..100.00]). */
    a: number
    /** Read-write. The b-value(as percent in [0.0..100.00]). */
    b: number
    /** Read-write. The l-value(as percent in [0.0..100.00]). */
    l: number
    /** Read-only. The class name of referenced LabColor object. */
    readonly typename: string
}