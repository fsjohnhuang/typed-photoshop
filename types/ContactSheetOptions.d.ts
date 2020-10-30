/**
 * Options for creating a contact sheet with the `Application.makeContactSheet()` method.
 */
declare class ContactSheetOptions {
    /**
     * True to place the images horizontally(left to right, then top to bottom) first(default: `true`).
     */
    acrossFirst: boolean
    /**
     * True to rotate images for the best fit (default: `false`).
     */
    bestFit: boolean
    /**
     * True to use the filename as a caption for the image (default `true`)
     */
    caption: boolean
    /**
     * The number of columns to include(default: `5`)
     */
    columnCount: number
    /**
     * True to flatten all layers in the final document(default: `true`)
     */
    flatten: boolean
    /**
     * The font used for the caption(default: `GalleryFontType.ARIAL`).
     */
    font: GalleryFontType
    /**
     * The font size to use for the caption(default: `12`).
     */
    fontSize: number
    /**
     * The height(in pixels) of the resulting document(default: `720`).
     */
    height: number
    /**
     * The horizontal spacing(in pixels) between images(default: `1`)
     */
    horizontal: number
    /**
     * The document color mode(default: `NewDocumentMode.RGB`).
     */
    mode: NewDocumentMode
    /**
     * The resolution of the document in pixels per inch(default: `72.0`).
     */
    resolution: number
    /**
     * The number of rows to use(default: `6`).
     */
    rowCount: number
    readonly typename: string
    /**
     * True to auto space the images(default: `true`).
     */
    useAutoSpacing: boolean
    /**
     * The vertical spacing(in pixels) between images(default: `1`).
     */
    vertical: number
    /**
     * The width(in pixels) of the resulting document(default: `576`).
     */
    width: number
}