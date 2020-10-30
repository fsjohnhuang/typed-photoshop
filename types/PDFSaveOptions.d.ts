/**
 * Options for saving a document in Adobe PDF format using the `Document.saveAs()` method.
 */
declare class PDFSaveOptions {
    /**
     * True to save the alpha channels with the file.
     */
    alphaChannels: boolean
    /**
     * True to save comments with the file.
     */
    annotations: boolean
    /**
     * True to convert the color profile to a destination profile.
     */
    colorConversion: boolean
    /**
     * True to convert a 16-bit image to 8-bit for better compatibility with other applications.
     */
    convertToEightBit: boolean
    /**
     * Description of the save options to use.
     */
    description: string
    /**
     * Description of the final RGB or CMYK output device, such as a monitor or a press standard.
     */
    destinationProfile: string
    /**
     * @deprecated For Adobe Photoshop.
     */
    downgradeColorProfile: boolean
    /**
     * The down sample method to use.
     */
    downSample: PDFResample
    /**
     * The size to downsample images if they exceed the limit in pixels per inch.
     */
    downSampleSize: number
    /**
     * Limits downsampling or subsampling to images that exceed this value in pixels per inch.
     */
    downSampleSizeLimit: number
    /**
     * True to embed the color profile in the document.
     */
    embedColorProfile: boolean
    /**
     * @deprecated For Adobe Photoshop.
     */
    embedFonts: boolean
    /**
     * True to include a small preview image in Adobe PDF files.
     */
    embedThumbnail: boolean
    /**
     * The type of compression to use (default: `PDFEncoding.PDFZIP`).
     */
    encoding: PDFEncoding
    /**
     * @deprecated For Adobe Photoshop.
     */
    interpolation: boolean
    /**
     * The quality of the produced image, which is inversely proportionate to the compression amount.
     */
    jpegQuality: number
    /**
     * True to save the document's layers.
     */
    layers: boolean
    /**
     * True to improve performance of PDF files on Web servers.
     */
    optimizeForWeb: boolean
    /**
     * An optional comment field for inserting descriptions of the output condition.
     * The text is stored in the PDF/X file.
     */
    outputCondition: string
    /**
     * Indentifier for the output condition.
     */
    outputConditionID: string
    /**
     * The PDF version to make the document compatible with.
     */
    PDFCompatibility: PDFCompatibility
    /**
     * The PDF standard to make the document compatible with.
     */
    PDFStandard: PDFStandard
    /**
     * True to reopen the PDF in Adobe Photoshop with native Photoshop data intact.
     */
    preserveEditing: boolean
    /**
     * The preset file to use for settings.
     * *Note:* This option override other settings.
     */
    presetFile: string
    /**
     * True to show which profiles to include.
     */
    profileInclusionPolicy: boolean
    /**
     * URL where the output condition is registered.
     */
    registryName: string
    /**
     * True to save spot colors.
     */
    spotColors: boolean
    /**
     * Compression option.
     * Valid only when `encoding = PDFEncoding.JPEG2000`.
     */
    tileSize: number
    /**
     * @deprecated For Adobe Photoshop.
     */
    transparency: boolean
    readonly typename: string
    /**
     * @deprecated For Adobe Photoshop.
     */
    useOutlines: boolean
    /**
     * @deprecated For Adobe Photoshop.
     */
    vectorData: boolean
    /**
     * True to open the saved PDF in Adobe Acrobat.
     */
    view: boolean
}