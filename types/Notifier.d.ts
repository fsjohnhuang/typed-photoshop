/**
 * An event-handler object that tells a script to execute specified code when a specified event occurs.
 * Notifiers must be enabled using the `Application.notifiersEnabled` property.
 * Access through the `Application.notifiers` collection.
 * *Note:*
 * Events that occur with scripts do not generally trigger notifiers, because the occur inside a "play script" event.
 */
declare class Notifier {
    /**
     * @readonly The event identifier, a four-character code or a unique string.
     * For a list of four-character codes, see Appendix A:Event ID Codes.
     */
    readonly event: string
    /**
     * @readonly The class identifier, a four-character code or a unique string.
     */
    readonly eventClass: string
    /** @readonly The path to the file to execute when the event occurs and activates the notifier. */
    readonly eventFile: File
    readonly parent: Application
    readonly typename: string

    /**
     * Deletes this object.
     * You can also remove a `Notifier` object from the Script Events Manager drop-down list by deleting the file named
     * `Script Events Manager.xml` from the Photoshop preferences folder. See Adobe Photoshop help for more information.
     */
    remove(): void
}