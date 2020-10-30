/**
 * The collection of `Guide` objects in the document.
 * Access through `Document.historyStates` collection property.
 */
declare class HistoryStates {
    /** @readonly The number of elements in the HistoryStates collection. */
    readonly length: number
    /** @readonly The containing document. */
    readonly parent: Document
    /** @readonly The class name of the referenced HistoryStates object. */
    readonly typename: string

    /**
     * Gets the first element in the `HistoryStates` collection with the provided name.
     */
    getByName(name: string): Guide
}