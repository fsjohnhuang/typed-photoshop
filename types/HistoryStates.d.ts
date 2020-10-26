/**
 * The collection of `Guide` objects in the document.
 * Access through `Document.historyStates` collection property.
 */
declare class HistoryStates {
    /** Read-only. The number of elements in the HistoryStates collection. */
    readonly length: number
    /** Read-only. The containing document. */
    readonly parent: Document
    /** Read-only. The class name of the referenced HistoryStates object. */
    readonly typename: string

    /**
     * Gets the first element in the `HistoryStates` collection with the provided name.
     */
    getByName(name: string): Guide
}