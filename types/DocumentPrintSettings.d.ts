/**
 * The print settings for a document.
 */
declare class DocumentPrintSettings {
    /** Background color of page. */
    backgroundColor: SolidColor
    /** Bleed with. */
    bleedWidth: UnitValue
    /** Print the caption found in FileInfo. */
    caption: boolean
    /** Print center crop marks. */
    centerCropMarks: boolean
    /** Print color calibration bars. */
    colorBars: boolean
    /** Number of copies to print. */
    copies: number
    /** Print corner crop marks */
    cornerCropMarks: boolean
    /** @readonly Color handling. */
    readonly colorHandling: PrintColorHandling
    /** The current active printer. */
    activePrinter: string
    /** Flip the image horizontally. */
    filp: boolean
    /** Print a hard proof. */
    hardProof: boolean
    interpolate: boolean
    /** Prints the document title. */
    labels: boolean
    /** Map blacks. */
    mapBlack: boolean
    /** Invert the image colors. */
    negative: boolean
    /** Color conversation intent when print space is different from the source space.  */
    redenerIntent: Intent
    /** @readonly The x position of the image on page. */
    readonly posX: UnitValue
    /** @readonly The y position of the image on page. */
    readonly posY: UnitValue
    /** The width of the print border. */
    printBorder: UnitValue
    /** Name of the printer. */
    printerName: string
    /** 
     * Color space for printer. Can be nothing(meaning same as source); `Worker.RGB`, `Working.CMYK`, `Working.Gray`, `Lab.Color`
     * (meaning one of the working spaces or Lab color); or a string specifying a specific colorspace(default is same as source).
     */
    printSpace: string
    /** Print registration marks. */
    registrationMarks: boolean
    /** @readonly Scale of image on page. */
    readonly scale: number
    /** Include vector data. */
    vectorData: boolean
}