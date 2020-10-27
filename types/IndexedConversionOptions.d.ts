/**
 * Options for converting an RGB image to an indexed color modle using `Document.changeMode()`.
 */
declare class IndexedConversionOptions {
    /** 
     * The number of palette colors.
     * Valid only when `palette` = 
     * `Palette.LOCALADAPTIVE, LOCALPERCEPTUAL, LOCALSELECTIVE, MACOSPALETTE, UNIFORM, WEBPALETTE` or `WINDOWSPALETTE`
     */
    colors: number
    /** The dither type. */
    dither: Dither
    /**
     * The amount of dither.
     * Valid only when `dither` = `Dither.diffusion`
     */
    ditherAmount: number
    /** The type of colors to force into the color palette. */
    forced: ForcedColors
    /**
     * The color to use to fill anti-aliased edges adjacent to transparent areas of the image(default: MatteType.WHITE).
     * When `transparency` = `false`, the matte color is applied to transparent areas.
     */
    matte: MatteType
    /**
     * The palette type (default: Palette.EXACT)
     */
    palette: PaletteType
    /**
     * True to protect colors in the image that contain entries in the color table from being dithered.
     * Valid only when `dither` = `Dither.DIFFUSION`.
     */
    preserveExactColors: boolean
    /** True to preserve transparent areas of the image during conversion to GIF format. */
    transparency: boolean
    readonly typename: string
}