/**
 * Options for a Web gallery, created with `Application.makePhotoGallery()`.
 * *Tip:*
 * You can preserve default values for many of these properties by choosing
 * *File > Automate > Web Photo Gallery*, and then choosing *Preserve all metadata* in the Options
 * area of the Web Photo Gallery dialog.
 */
declare class GalleryOptions {
    /**
     * True to add width and height attribute for images (default: `true`).
     */
    addSizeAttributes: boolean
    /**
     * The options related to banner settings.
     */
    bannerOptions: GalleryBannerOptions
    /**
     * The options related to custom color settings.
     */
    customColorOptions: GalleryCustomColorOptions
    /**
     * The email address to show on the web page.
     */
    emailAddress: string
    /**
     * The options related to images settings.
     */
    imagesOptions: GalleryImagesOptions
    /**
     * True to include all files found in sub folders of the input folder(default: `true`).
     */
    includeSubFolders: boolean
    /**
     * The style to use for layiong out the web page(default: `CenteredFrame 1 - Basic`).
     */
    layoutStyle: string
    /**
     * True to  save metadata(default: `false`).
     */
    preserveAllMetadata: boolean
    /**
     * The options related to security settings.
     */
    securityOptions: GallerySecurityOptions
    /**
     * The options related to thumbnail image settings.
     */
    thumbnailOptions: GalleryThumbnailOptions
    readonly typename: string
    /**
     * True to use the short web page extension `.htm`. if false, use the web page extension `.html` (default: `true`).
     */
    useShortExtension: boolean
    /**
     * True to use UTF-8 encoding for the web page(default: `false`).
     */
    useUTF8Encoding: boolean
}