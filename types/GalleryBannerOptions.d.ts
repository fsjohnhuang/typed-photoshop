/**
 * Options for `bannerOptions` property of the `GalleryOptions` object.
 * *Tip:*
 * You can preserve default values for many of these properties by choosing
 * *File > Automate > Web Photo Gallery*, and then choosing *Preserve all metadata* in the Options
 * area of the Web Photo Gallery dialog.
 */
declare class GalleryBannerOptions {
    /**
     * The web photo gallery contact info.
     */
    contactInfo: string
    /**
     * The web photo gallery date(default: current date)
     */
    date: string
    /**
     * The font setting for the banner text(default: `GalleryFontType.ARIAL`).
     */
    font: GalleryFontType
    /**
     * The font size for the banner text(default: `3`).
     */
    fontSize: number
    /**
     * The web photo gallery photographer.
     */
    photographer: string
    /**
     * The web photo gallery site name(default: `Adobe Web Photo Gallery`).
     */
    siteName: string
    readonly typename: string
}