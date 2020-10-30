/**
 * The collection of fonts available on your computer. Fonts are represented by `TextFont` objects.
 */
declare class TextFonts {
    readonly [index: number]: TextFont
    readonly length: number
    readonly parent: Application
    readonly typename: string

    getByName(name: string): TextFont
}