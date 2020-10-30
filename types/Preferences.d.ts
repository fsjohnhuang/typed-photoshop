/**
 * Represent application preferences for Photoshop. Access this object through the `Application.preferences` property.
 * Setting values in this object is equivalent to selecting *Edit > Preferences* (in Windows) or *Photoshop > Preferences* (in Mac OS) in the Adobe Photoshop application.
 * For explanations of individual settings, see Adobe Photoshop Help.
 * @example
 * app.preferences.rulerUnits = Units.PIXELS 
 * app.preferences.typeUnits = TypeUnits.PIXELS 
 */
declare class Preferences {
    /**
     * The path to an additional plug-in folder.
     * Valid only when `useAdditionalPluginFolder = true`.
     */
    additionalPluginFolder: File
    /**
     * The preferred policy for writing file extensions in Windows.
     */
    appendExtension: SaveBehavior
    /**
     * True to ask the user to verify layer preservation options when saving a file in TIFF format.
     */
    askBeforeSavingLayerTIFF: boolean
    /**
     * True to automatically update open documents.
     */
    autoUpdateOpenDocuments: boolean
    /**
     * True to beep when a process finishes.
     */
    beepWhenDone: boolean
    /**
     * True to display component channels in th Channels palette in color.
     */
    colorChannelsInColor: boolean
    /**
     * The preferred color selection tool.
     */
    colorPicker: ColorPicker
    /**
     * The width of the column gutters (in points).
     */
    columnGutter: number
    /**
     * Column width(in points).
     */
    columnWidth: number
    /**
     * True to automatically make the first snapshot when a new document is created.
     */
    createFirstSnapshot: boolean
    /**
     * True if dynamic color sliders appear in the Color palette.
     */
    dynamicColorSliders: boolean
    /**
     * The preferred level of detail in the history log.
     * Valid only when `useHistoryLog = true`.
     */
    editLogItems: EditLogItemsType
    /**
     * True to retain Adobe Photoshop contents on the clipboard after you exit the application.
     */
    exportClipboard: boolean
    /**
     * The preferred type size to use for font previews in the type tool font menus.
     */
    fontPreviewSize: FontPreviewType
    /**
     * True to show image preview as a full size image, false to show thumbnail(in Mac OS only).
     */
    fullSizePreview: boolean
    /**
     * Opacity value as a percentage.
     */
    gamutWarningOpacity: number
    /**
     * The preferred size to use for squares in the grid.
     */
    grideSize: GridSize
    /**
     * The preferred formatting style for non-printing guide lines.
     */
    gridStyle: GridLineStyle
    /**
     * Number of grid subdivisions.
     */
    gridSubDivisions: number
    /**
     * The preferred formatting style for non-printing grid lines.
     */
    guideStyle: GuideLineStyle
    /**
     * True to use icon previews(in Mac OS only).
     */
    iconPreview: boolean
    /**
     * The number of images to hold in the caches.
     */
    imageCacheLevels: number
    /**
     * The preferred policy for writing image previews in Windows.
     */
    imagePreviews: SaveBehavior
    /**
     * The method to use to assign color values to any new pixels created when an image is resampled or resized.
     */
    interpolation: ResampleMethod
    /**
     * True to automatically resize the window when zooming in or out using keyboard shortcuts.
     */
    keyboardZoomResizesWindows: boolean
    /**
     * True to create thumbnail when saving the image (in Mac OS only).
     */
    macOSThumbnail: boolean
    /**
     * The preferred policy for checking whether to maximize compatibility when opening PSD files.
     */
    maximizeCompatibility: QueryStateType
    /**
     * The maximum percentage of available RAM used by Adobe Photoshop(5-100).
     */
    maxRAMuse: number
    /**
     * True to allow non-linear history.
     */
    nonLinearHistory: boolean
    /**
     * The number of history states to preserve.
     */
    numberofHistoryStates: number
    /**
     * The preferred type of pointer to use with certain tools.
     */
    otherCursors: OtherPaintingCursors
    /**
     * The preferred type of pointer to use with certain tools.
     */
    paintingCursors: PaintingCursors
    readonly parent: Application
    /**
     * True to have the resolution(double the size of pixels) to make previews display more quickly.
     */
    pixelDoubling: boolean
    /**
     * The point/pica size.
     */
    pointSize: PointType
    /**
     * The number of items in the recent file list.
     */
    recentFileListLength: number
    /**
     * The unit the scripting system will use when receiving and returning values.
     */
    rulerUnits: Units
    /**
     * The preferred location of history log data when saving the history items.
     */
    saveLogItems: SaveLogItemsType
    /**
     * The path to the history log file, when the preferred location is a file.
     */
    saveLotItemsFile: File
    /**
     * True to make new palette locations the default location.
     */
    savePaletteLocations: boolean
    /**
     * True to display Asian text options in the Paragraph palette.
     */
    showAsianTextOptions: boolean
    /**
     * True to list Asian font names in English.
     */
    showEnglishFontNames: boolean
    /**
     * True to display slice number in the document window when using the Slice tool.
     */
    showSliceNumber: boolean
    /**
     * True to show pop up definitions on mouse over.
     */
    showToolTips: boolean
    /**
     * True to use curly, false to use straight quote marks.
     */
    smartQuotes: boolean
    /**
     * Size of small font used in panels and dialogs.
     */
    textFontSize: FontSize
    readonly typename: string
    /**
     * The preferred unit for text character measurements.
     */
    typeUnits: TypeUnits 
    /**
     * True to use an additional folder for compatible plugin-ins stored with different application.
     */
    useAdditionalPluginFolder: boolean
    /**
     * True to create a log file for history states.
     */
    useHitoryLog: boolean
    /**
     * True to use lowercase for file extensions.
     */
    useLowerCaseExtension: boolean
    /**
     * True to enable cycling through a set of hidden tools.
     */
    useShiftKeyForToolSwitch: boolean
    /**
     * True to enable Adobe Photoshop to send transparency to your computer's video board.(Requires hardware support.)
     */
    useVideoAlpha: boolean
    /**
     * True to create a thumbnail when saving the image in Windows.(Requires hardware support.)
     */
    windowsThumbnail: boolean
}