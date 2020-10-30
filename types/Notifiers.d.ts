/**
 * The collection of `Notifier` objects in the document. Access through the `Application.notifiers` collection property.
 * Notifiers must be enabled using the `Application.notifiersEnabled` property.
 * @example
 * var notRef = app.notifiers.add("OnClickGoButton", eventFile)
 */
declare class Notifiers {
    readonly [index: number]: Notifier
    readonly length: number
    readonly parent: Application
    readonly typename: string

    /**
     * Creates a notifier object and add it to this collection.
     * `event` defines the class ID of the event; use a 4-characters code or a unique string. See Appendix A:Event ID Codes.
     * `eventFile` defines the script file that executes when the event occurs.
     * When an event applies to multiple types of objects, use the `eventClass` (a 4-character ID or unique string) to distinguish which object this
     * `Notifier` applies to.
     * For example, the Make event("Mk  ") applies to documents("Dcmn"), channels("Chnl") and other objects.
     * *Tip:*
     * When specifying an event or event class with a 4-character ID code, omit the single quotes in your code.
     */
    add(event: string, eventFile: File, eventClass?: string): Notifier
    /**
     * Removes all member objects from the `notifiers` collection.
     * You can alswo remove a `notifier` object from the Script Events Manager drop-down list by deleting the file named `Script Events Manager.xml` from the 
     * Photoshop preferences folder. See Adobe Photoshop help for more information.
     */
    removeAll(): void
}