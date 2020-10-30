/**
 * The collection of open `Document` objects.
 * Access this list through the `Application.documents` collection property, which is a available through the `app` global variable,
 * or directly at the top level.
 * @example
 * app.documents.add(800, 500, 72, "myDocument", NewDocumentMode.RGB)
 */
declare class Documents {
    readonly [index: number]: Document
    readonly length: number
    readonly parent: Application
    readonly typename: string

    /**
     * Creates a new document object and adds it into this collection.
     * `pixelAspectRatio`: Default is 0, a square aspect ratio. 
     * `bitsPerChannelType`: Default is `BitsPerChannelTYpe.EIGHT`.
     */
    add(width?: UnitValue | number, height?: UnitValue | number, resolution?: number, name?: string, mode?: NewDocumentMode, initialFill?: DocumentFill, pixelAspectRatio?: number, bitsPerChannel?: BitsPerChannelType, colorProfileName?: string): Document
    getByName(name: string): Document
}