/**
 * Options for Adobe PDF presentations created using `Application.makePDFPresentation()`.
 */
declare class PresentationOptions {
    /**
     * True to auto advance images when viewing the presentation(default: `true`).
     * Valid only when `presentation = true`
     */
    autoAdvance: boolean
    /**
     * True to include the file name for the image (default: `false`). 
     */
    includeFilename: boolean
    /**
     * The time in seconds before the view is auto advanced(default: `5`).
     * Valid only when `autoAdvance = true`.
     */
    interval: number
    /**
     * True to begin the presentation again after the last page(default: `false`). 
     * Valid only when `autoAdvance = true`.
     */
    loop: boolean
    /** The magnification type to use when viewing the image. */
    magnification: MagnificationType
    /** Options to use when creating the PDF file. */
    PDFFileOtions: PDFSaveOptions
    /**
     * True if the output will be presentation(default: `false`); when `false`, the output is a Multi-Page document.
     */
    presentation: boolean
    /**
     * The method for transition from one image to the next(default: `TransitionType.NONE`).
     * Valid only when `autoAdvance = true`.
     */
    transition: TransitionType
    readonly typename: string
}