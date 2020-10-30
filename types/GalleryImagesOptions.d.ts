/**
 * Options for the `imagesOptions` property of the `GalleryOptions` object.
 * *Tip:*
 * You can preserve default values for many of these properties by choosing
 * *File > Automate > Web Photo Gallery*, and then choosing *Preserve all metadata* in the Options
 * area of the Web Photo Gallery dialog.
 */
declare class GalleryImagesOptions {
    /**
     * The size (in pixels) of the border that separates images (default: `0`).
     */
    border: number
    /**
     * True to generate image captions (default: `false`).
     */
    caption: boolean
    /**
     * The resized image dimensions in pixels (default: `350`).
     * Valid only when `resizeImages = true`.
     */
    dimension: number
    /**
     * The font to use for image captions (default: `GalleryFontType.ARIAL`).
     */
    font: GalleryFontType
    /**
     * The font size for image captions (default: `3`).
     */
    fontSize: number
    /**
     * The quality setting for a JPEG image (default: `5`).
     */
    imageQuality: number
    /**
     * True to include copyright information in captions (default: `false`).
     * Valid only when `caption = true`.
     */
    includeCopyright: boolean
    /**
     * True to include the credits in image captions (default: `false`).
     * Valid only when `caption = true`.
     */
    includeCredits: boolean
    /**
     * True to include the file name in image captions (default: `false`).
     * Valid only when `caption = true`.
     */
    includeFilename: boolean
    /**
     *  True to include the title in image captions (default: `true`)
     */ 
    inlcudeTitle: boolean
    /**
     * True to add numeric links (default: `true`).
     */
    numericLinks: boolean
    /**
     * The image dimensions to constrain in the gallery image (default: `GalleryConstrainType.CONSTRAINBOTH`).
     * Valid only when `resizeImages = true`. 
     */
    resizeConstraint: GalleryConstrainType
    /**
     * True to automatically resize images for placement on the gallery pages (defualt: `true`).
     */
    resizeImages: boolean
    readonly typename: string
}