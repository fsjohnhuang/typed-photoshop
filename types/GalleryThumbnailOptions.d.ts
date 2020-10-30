/**
 * Options for `thumbnailOptions` property of `GalleryOptions` object.
 * *Tip:*
 * You can preserve default values for many of these properties by choosing
 * *File > Automate > Web Photo Gallery*, and then choosing *Preserve all metadata* in the Options
 * area of the Web Photo Gallery dialog.
 */
declare class GalleryThumbnailOptions {
    /**
     * The amount of border pixels you want around your thumbnail iamges(default: `0`).
     */
    border: number    
    /**
     * True if there is a caption(default: `false`).
     */
    caption: boolean
    /**
     * The number of columns on the page (default: `5`)
     */
    columnCount: number
    /**
     * The web photo gallery thumbnail dimension in pixels (default: `75`).
     */
    dimension: number
    /**
     * 
     * The web photo gallery font (default: `GalleryFontType.ARIAL`).
     */
    font: GalleryFontType
    /**
     * The font size for thumbnail images text (default: `3`).
     */
    fontSize: number
    /**
     * True to include copyright informatino for thumbnails (default: `false`).
     */
    includeCopyright: boolean
    /**
     * True to include credits for thumbnails(default: `false`).
     */
    includeCredits: boolean
    /**
     * True to include file names for thumbnails(default: `false`).
     */
    includeFilename: boolean
    /**
     * True to include title for thumbnails(default: `false`).
     */
    includeTitle: boolean
    /**
     * The number of rows on the page(default: `3`).
     */
    rowCount: number
    /**
     * The thumbnail image size(default `false`).
     */
    size: GalleryThumbSizeType
    readonly typename: string
}