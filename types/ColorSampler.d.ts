/**
 * A color sampler for a document. Access through the `Doucment.colorSamplers` collection.
 * For example:
 * `var colorSamplerRef = app.activeDocument.colorSamplers[0]`
 */
declare class ColorSampler {
    /** Read-only. The color of the color sampler */
    readonly color: SolidColor
    /** 
     * Read-only. The position of the color sampler in the document.
     * The array (x, y) represents the horizontal and vertical locaiton of the count item.
     */
    readonly position: UnitValue[]
    /** Read-only. The containing document. */
    readonly parent: Document
    /** 
     * Read-only. The class name of the referenced `ColorSampler` object.
     */
    readonly typename: string

    /**
     * Moves the color sampler to a new location in the document.
     * The `position` parameter(x,y) represents the new horizontal and vertical locations of the moved color sampler.
     */
    move(position: UnitValue[]): void
    /** Deletes the ColorSampler object. */
    remove(): void
}