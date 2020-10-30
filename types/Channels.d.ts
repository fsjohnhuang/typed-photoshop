/**
 * The collection of `Channel` objects in a document.
 * Access through the `Document.channels` collection property. For example:
 * `var channelRef = app.activeDocument.channels.add()`
 */
declare class Channels {
    readonly [index: number]: Channel
    /** @readonly The number of elements in the Channels collection. */
    readonly length: number
    /** @readonly The containing document. */
    readonly parent: Document
    /** @readonly The class name of the referenced Channels object. */
    readonly typename: string

    /**
     * Creates a new count item object and adds it to this collection.
     * The `position` parameter(x,y) represents the new horizontal and vertical locations, respectively, of the Channel object.
     */
    add(): Channel
    /**
     * Gets the first element in the Channels collection with the provided name. 
     */
    getByName(name: string): Channel
    /**
     * Removes all `Channel` objects from the `Channels` collection.
     */
    removeAll(): void
}