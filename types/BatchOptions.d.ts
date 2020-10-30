/**
 * Options for running a batch operation using the `Application.batch()` method.
 * JavaScript only supports folders as sources for batch commands. Specify the batch source folder as the `inputFiles` parameters of the `Application.batch()` method.
 */
declare class BatchOptions {
    /**
     * The type of destination for the processed files(default: `BatchDestinationType.NODESTINATION`).
     */
    destination: BatchDestinationType
    /**
     * The folder location for the processed files.
     * Valid only when `destination = BatchDesinationType.FOLDER`.
     */
    destinationFolder: Folder
    /**
     * The file in which to log errors encountered.
     * To display errors on the screen(and stop batch processing when errors occur) leave blank.
     */
    errorFile: File
    /**
     * A list of file naming options(maximum: 6).
     * Valid only when `destinatino = BatchDestinationType.FOLDER`.
     */
    fileNaming: FileNamingType[]
    /**
     * True to make the final file names Macintosh compatible(default: `true`).
     * Valid only when `destinatino = BatchDestinationType.FOLDER`.
     */
    macintoshCompatible: boolean
    /**
     * True to override action open commands(default: `true`).
     */
    overrideOpen: boolean
    /**
     * True to override save as action steps with the specified destination(default: `false`).
     * Valid only when `destinatino = BatchDestinationType.FOLDER` or `SAVEANDCLOSE`.
     */
    overrideSave: boolean
    /**
     * The starting serial number to use in naming files(default: `1`). 
     * Valid only when `destinatino = BatchDestinationType.FOLDER`.
     */
    startingSerial: number
    /**
     * True to suppress the file open options dialogs(default: `false`).
     */
    suppressOpen: boolean
    /**
     * True to suppress the color profile warnings(default: `false`).
     */
    suppressProfile: boolean
    readonly typename: string
    /**
     * True to make the final file names Unix compatible (default: `true`).
     * Valid only when `destinatino = BatchDestinationType.FOLDER`.
     */
    unixCompatible: boolean
    /**
     * True to make the final file names Windows compatible (default: `true`).
     * Valid only when `destinatino = BatchDestinationType.FOLDER`.
     */
    windowsCompatible: boolean
}