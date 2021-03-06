/**
 * A counted item in a document. Access through the `Document.countItems` collection.
 * See the `Document.autoCount()` method.
 * *Note:*
 * This feature is available in the Extended Version only.
 */
declare class CountItem {
    /** @readonly The position of the count item in the document. */
    readonly position: UnitValue[]
    /** @readonly The containing document. */
    readonly parent: Document
    /** @readonly The class name of the referenced CountItem object. */
    readonly typename: string

    /** Deletes the CountItem object. */
    remove(): void 
}