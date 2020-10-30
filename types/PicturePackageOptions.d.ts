/**
 * Options for a picture package created with `Application.makePicturePackage()`.
 */
declare class PicturePackageOptions {
    /**
     * The content information (default: `PicturePackageTextType.NONE`).
     */
    content: PicturePackageTextType
    /**
     * True if layers in the final document are flattened(default: `true`).
     */
    flatten: boolean
    /**
     * The font to use for image captions (default: `GalleryFontType.ARIAL`).
     */
    font: GalleryFontType
    /**
     * The font size for image captions (default: `3`).
     */
    fontSize: number
    /**
     * The layout to use to generate the picture package (default: `(2) 5x7`).
     */
    layout: string
    /**
     * The color profile to use as the document mode (default: `NewDocumentMode.RGB`).
     */
    mode: NewDocumentMode
    /**
     * The web page security opacity as a percent(default: `100`).
     */
    opacity: number
    /**
     * The resolution of the document in pixels per inch (default: `72.0`).
     */
    resolution: number
    /**
     * The picture package custom text.
     * Valid only when `content = PicturePackageType.USER`.
     */
    text: string
    /**
     * The web photo gallery security text color.
     */
    textColor: GallerySecurityTextColorType
    /**
     * The web photo gallery security text position(default: `GallerySecurityTextPositionType.CENTERED`).
     */
    textPosition: GallerySecurityTextPositionType
    /**
     * The web photo gallery security text orientation to use (default: `GallerySecurityTextRotateType.ZERO`).
     */
    textRotate: GallerySecurityTextRotateType
    readonly typename: string
}