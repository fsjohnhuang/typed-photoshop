/**
 * A color definition used in the document. Maps a color to equivalents in all available color models.
 * Used in `Application.backgroundColor` and `foregroundColor` properties, in `Channel.color`, in `ColorSampler.color` and in `TextItem.color`.
 * Passed to `PathItem.fillPath()`, `Selection.fill()` and `Selection.stroke()`.
 */
declare class SolidColor {
    /** Read-write. The CMYK color mode. */
    cmyk: CMYKColor
    /** Read-write. The Grayscale color mode. */
    gray: GrayColor
    /** Read-write. The HSB color mode. */
    hsb: HSBColor
    /** Read-write. The LAB color mode. */
    lab: LabColor
    /** Read-write. The color mode. */
    model: ColorModel
    /** Read-write. The nearest web color to the current color. */
    readonly nearestWebColor: RGBColor
    /** Read-write. The RGB color mode. */
    rgb: RGBColor
    /** @readonly The class name of the referenced ColoSolid object. */
    readonly typename: string

    /** True if the SolidColor object is visually equal to the specified color. */
    isEqual(color: SolidColor): boolean
}