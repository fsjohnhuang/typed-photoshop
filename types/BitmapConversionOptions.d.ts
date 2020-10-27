/**
 * Options for converting an image to bitmap mode, using `Document.changeMode()` with `ChangeMode.Bitmap`.
 * Convert color images to grayscale before converting the image to bitmap mode. See the `ArtLayer.desaturate()` method.
 */
declare class BitmapConversionOptions {
    /**
     * The angle(in degrees) at which to orient individual dots. See `shape`.
     * Valid only when `method` = `BitmapConversionType.HALFTONESCREEN`
     */
    angle: number
    /**
     * The number of printer dots(per inch) to use.
     * Valid only when `method` = `BitmapConversionType.HALFTONESCREEN`
     */
    frequency: number
    /**
     * The conversion method to use (default: `BitmapConversionType.DIFFUSIONDITHER`)
     */
    method: BitmapConversionType
    /**
     * The name of the pattern to use.
     * For information about pre-installed valid patterns,
     * see Adobe Photoshop Help on the bitmap conversion command, or view the options available in the Custom Color drop down box after choosing the bitmap conversion command.
     * Valid only when `method` = `BitmapConversionType.CUSTOMPATTERN`.
     */
    patternName: string
    /** The output resolutino in pixels per inch(default: 72.0) */
    resolution: number
    /** 
     * The dot shape to use.
     * Valid only when `method` = `BitmapConversionType.HALFTONESCREEN`
     */
    shape: BitmapHalfToneType
    typename: string
}