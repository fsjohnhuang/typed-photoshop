/**
 * Options for the `customColorOptions` property of the GalleryOptiosn object.
 * *Tip:*
 * You can preserve default values for many of these properties by choosing
 * *File > Automate > Web Photo Gallery*, and then choosing *Preserve all metadata* in the Options
 * area of the Web Photo Gallery dialog.
 */
declare class GalleryCustomColorOptions {
    /**
     * The color to use to indicate an active link.
     */
    activeLinkColor: RGBColor
    /**
     * The background color.
     */
    backgroundColor: RGBColor
    /**
     * The banner color.
     */
    bannerColor: RGBColor
    /**
     * The color to use to indicate a link.
     */
    linkColor: RGBColor
    /**
     * The text color.
     */
    textColor: RGBColor
    readonly typename: string
    /**
     * The color to use to indicate a visited link.
     */
    visiteLinkColor: RGBColor
}