/**
 * The measurement scale for the document. Access through the `Document.measurementScale` property.
 * For example:
 * `app.activeDocument.measurementScale.pixelLength = 25`
 * *Note:*
 * This feature is available in the Extended Version only.
 */
declare class MeasurementScale {
    /** Read-write. The length in pixels this scale equals to. */
    pixelLength: number
    /** Read-write. The length in logical length this scale equals to. */
    logicalLength: number
    /** Read-write. The logical units for this scale. */
    logicalUnits: string
}