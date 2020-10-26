declare class HSBColor {
    /** Read-write. The brightness value. (as percent in [0.0..100.00]) */
    brightness: number
    /** Read-write. The hue value. (as percent in [0.0..100.00]) */
    hue: number
    /** Read-write. The saturation value. (as percent in [0.0..100.00]) */
    saturation: number
    /** Read-only. The class name of the referenced HSBColor object. */
    readonly typename: string
}