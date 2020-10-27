/**
 * Options for optimizing a document for the web or devices using the `Document.exportDocument()` method.
 * These are the options that you can provide when you choose *File > Save For Web and Devices*.
 */
declare class ExportOptionsSaveForWeb {
    /** Applies blur to the image to reduce artifacts (default: 0.0) */
    blur: number
    /**
     * The color reduction algorithm (default: ColorReductionType.SELECTIVE)
     */
    colorReduction: ColorReductionType
    /** The number of colors in the palette. */
    colors: number
    /** 
     * The type of dither (default: Dither.DIFFUSION)
     */
    dither: Dither
    /**
     * The amount of dither(default: 100)
     * Valid only when `dither = Dither.DIFFUSION`
     */
    ditherAmount: number
    /**
     * The file format to use (default: `SaveDocumentType.COMPUSERVEGIF`)
     * *Note:*
     * For this property, only `COMPUSERVEGIF`, `JPEG`, `PNG-8`, `PNG-24` and `BMP` are supported.
     */
    format: SaveDocumentType
    /**
     * True to include the document's embeded color profile (default: `false`)
     */
    includeProfile: boolean
    /**
     * True to download in multple passes; progressive(default: `false`)
     */
    interlaced: boolean
    /**
     * The amount of lossiness allowed(default: 0)
     */
    lossy: number
    /**
     * The colors to blend transparent pixels against.
     */
    matteColor: RGBColor
    /**
     * True to create smaller but less compatible files(default: `true`)
     * Valid only when `format = SaveDocumentType.JPEG`.
     */
    optimized: boolean
    /**
     * Indicates the number of bits; `true` = 8, `false` = 24(default: `true`)
     * Valid only when `format = SaveDocumentType.PNG`.
     */
    PNG8: boolean
    /**
     * The quality of the produced image as a percentage; default 0.
     */
    quality: number
    /**
     * Indication of transparent areas of the image should be included in the saved image(default: `true`)
     */
    transparency: boolean
    /**
     * The amount of transparency dither(default: 100)
     * Valid only if `transparency = true`.
     */
    transparencyAmount: number
    /**
     * The transparency dither algorithm(default: `transparencyDither = Dither.NONE`).
     */
    transparencyDither: Dither
    readonly typename: string
    /**
     * The tolerance amount within which to snap close colors to web palette colors(default: 0).
     */
    webSnap: number
}