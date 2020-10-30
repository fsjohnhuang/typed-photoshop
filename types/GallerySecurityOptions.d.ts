/**
 * Options for the `securityOptions` property of the `GalleryOptions` object.
 * *Tip:*
 * You can preserve default values for many of these properties by choosing
 * *File > Automate > Web Photo Gallery*, and then choosing *Preserve all metadata* in the Options
 * area of the Web Photo Gallery dialog.
 */
declare class GallerySecurityOptions {
    /**
     * The web photo gallery security content(default: `GallerySecurityType.NONE`).
     */
    content: GallerySecurityType
    /**
     * The web photo gallery security font(default: `GalleryFontType.ARIAL`).
     */
    font: GalleryFontType
    /**
     * The web photo gallery security font size(default: `3`).
     */
    fontSize: number
    /**
     * The web photo gallery security opacity as a percent(default: `100`).
     */
    opacity: number
    /**
     * The web photo gallery security custom text.
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