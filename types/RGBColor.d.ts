declare class RGBColor {
    /** Read-write. The blue color value(default:255, range in [0..255]) */
    blue: number
    /** Read-write. The green color value(default:255, range in [0..255]) */
    green: number
    /** Read-write. The hexadecimal representation of the color */
    hexValue: string
    /** Read-write. The red color value(default:255, range in [0..255]) */
    red: number
    /** Read-only. The class name of the referenced RGBColor object. */
    readonly typename: string
}