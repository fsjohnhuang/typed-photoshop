/**
 * Describes a font that is available to the application. Access this object in the `Application.fonts` collection.
 */
declare class TextFont {
    /** @readonly The font family. */
    readonly family: string
    /** @readonly The name of the font. */
    readonly name: string
    /** @readonly The containing application. */
    readonly parent: Application
    /** @readonly The PostScript name of the font. */
    readonly postScriptName: string
    /** @readonly The font style. */
    readonly style: string
    /** @readonly The class name of the referenced TextFont object. */
    readonly typename: string
}