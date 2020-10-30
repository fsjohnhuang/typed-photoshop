/**
 * The measurement log for the application.
 * Access through the `Application.measurementLog` property.
 * *Note:*
 * This feature is available in the Extened Version only.
 */
declare class MeasurementLog {
    exportMeasurements(file?: File, range?: MeasurementRange, dataPoints?: string[]): void
    deleteMeasurements(range?: MeasurementRange): void
}