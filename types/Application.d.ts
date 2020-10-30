type batch = (inputFiles: File[], action: string, from: string, options?: BatchOptions) => string
type beep = () => void
type bringToFront = () => void
type changeProgressText = (progressString: string) => void
type charIDToTypeID = (charID: string) => number
type compareWithNumbers = (first: string, second: string) => number
type doAction = (action: string, from: string) => void
type doForceProgress = (progressString: string, javaScriptString: string) => void
type doProgress = (progressString: string, javaScriptString: string) => void
type doProgressSegmentTask = (segmentLength: number, done: number, total: number, javaScriptString: string) => boolean
type doProgressSubTask = (index: number, limit: number, javaScriptString: string) => boolean
type doProgressTask = (taskLength: number, javaScriptString: string) => boolean
type eraseCustomOptions = (key: string) => void
type executeAction = (eventID: number, descriptor?: ActionDescriptor, displayDialogs?: DialogModes) => ActionDescriptor 
type featureEnabled = (name: string) => boolean
type getCustomOptions = (key: string) => ActionDescriptor
type isQuicktimeAvailable = () => boolean
type load = (document: File) => void
type makeContactSheet = (inputFiles: File[], options?: ContactSheetOptions) => string
type makePDFPresentation = (inputFiles: File[], outputFile: File, options?: PresentationOptions) => string
type makePhotoGallery = (inputFolder: File, outputFolder: File, options?: GalleryOptions) => string
type makePhotomerge = (inputFiles: File[]) => string
type makePicturePackage = (inputFiles: File[], options?: PicturePackageOptions) => string
type open = (document: File, as?: object | OpenDocumentType, asSmartObject?: boolean) => Document
type openDialog = () => File[]
type purge = (target: PurgeTarget) => void
type putCustomOptions = (key: string, customObject: ActionDescriptor, persistent?: boolean) => void
type refresh = () => void
type refreshFonts = () => void
type runMenuItem = (menuID: number) => void
type showColorPicker = () => boolean
type stringIDToTypeID = (stringID: string) => number
type togglePalettes = () => void
type toggleSupportsBrushes = (tool: string) => boolean
type toggleSupportsBrushPresets = (tool: string) => boolean
type typeIDToCharID = (typeID: number) => string
type typeIDToStringID = (typeID: number) => string
type updateProgress = (done: number, total: number) => boolean

/**
 * The Adobe Photoshop application object, which is the root of the object model and provides access to all other objects.
 * This object provides application-wide information, such as application defaults and available fonts. 
 * It provides many important methods, such as those for opening files and loading documents.
 * To access the properties and methods, you can use the pre-defined global variable `app`.
 * The properties and methods of the `Application` object are also avaiable at the top level; 
 * you can omit references to the `Application` object altogether.
 */
declare interface Application {
    /** 
     * The frontmost document.
     * Setting this property is equivalent to clicking an open document in the Adobe Photoshop application to bring it to the front of the screen.
     * @throws If there is no open document, accessing this property throws an exception.
     */
    activeDocument: Document
    /** The default background color and color style for documents. */
    backgroundColor: SolidColor
    /** @readonly Information about the application. */
    readonly build: string
    /** @readonly Local directory for all cloud documents. */
    readonly cloudWorkAreaDirectory: string 
    /** 
     * The name of the current color settings, as selected with *Edit > Color Settings* 
     */
    colorSettings: string
    /** The name of the current tool selected. */
    currentTool: string
    /** The dialog mode for the application, which controls what types of dislogs should be displayed when running scripts. */
    displayDialogs: DialogModes
    /** 
     * @readonly The collection of open documents.
     * This is the primary point of access for documents that are currently open in the application.
     * The array allows you to access any open document, or to iterate through all open documents.
     */
    readonly documents: Documents
    /** @readonly The fonts installed on this system. */
    readonly fonts: TextFonts
    /** The default foreground color(used to paint, fill, and stroke selections). */
    foregroundColor: SolidColor
    /** @readonly The amount of unused memeory available to Adobe Photoshop. */
    readonly freeMemory: number
    /** 
     * @readonly The language location of the application.
     * An Adobe locale code consists of a 2-letter ISO-639 language code and an optional 2-letter ISO 3166 country code separated by an underscore.
     * Case is significant. For example: `en_US`, `en_UK`, `ja_JP`, `de_DE`, `fr_FR`.
     */
    readonly locale: string
    /** @readonly A list of file image types Adobe Photoshop can open. */
    macintoshFileTypes: string[]
    /** The log of measurements taken. */
    measurementLog: MeasurementLog
    /** @readonly The application's name. */
    readonly name: string
    /** @readonly The collection of notifiers currently configured(in the Scripts Events Manager menu in the Adobe Photoshop application). */
    readonly notifiers: Notifiers
    /** True if all notifiers are enabled. */
    notifierEnabled: boolean
    /** @readonly The full path to the location of Adobe Photoshop application. */
    readonly path: File
    /** The dialog mode for playback mode, which controls what types of dialog to display when playing back a recorded action with Action palette. */
    playbackDisplayDialogs: DialogModes
    /** Stores and retrieves parameters used as part of a recorded action. Can be used, for example, to control playback speed. */
    playbackParameters: ActionDescriptor
    /**
     * @readonly The application preference settings(equivalent to selecting *Edit > Preferences* in the Adobe Photoshop applicaiton in Windows or *Photoshop > Preferences* in Macs OS) 
     */
    readonly preferences: Preferences
    /** @readonly The full path to the Preferences folder. */
    readonly preferencesFolder: File
    /** @readonly Files int the Recent Files list. */
    readonly recentFiles: File[]
    /** @readonly The build date of the Scripting interface. */
    readonly scriptingBuildDate: string
    /** @readonly The version of the Scripting interface. */
    readonly scriptingVersion: string
    typename: string
    /** @readonly The version of Adobe Photoshop application you are running. */
    readonly version: string
    /** @readonly A list of file image extensions Adobe Photoshop can open. */
    readonly windowsFileTypes: string[]

    /**
     * Runs the batch automation routine(similar to the *File > Automate > Bath* command).
     * The `inputFiles` parameter specifies the sources for the files to be manipulated by the batch command.
     */
    batch: batch
    /**
     * Causes a "beep" sound.
     */
    beep: beep
    /**
     * Makes Adobe Photoshop the active (front-most) application. 
     */
    bringToFront: bringToFront
    /**
     * Changes the text that appears in the progress window.
     * The `progressString` parameter is the string to show in the progress window.
     */
    changeProgressText: changeProgressText
    /** Converts from a character code(character ID) to a number ID. */
    charIDToTypeID: charIDToTypeID
    /**
     * 0: They are equal.
     * Less than 0: Either the value of the first character that does not match is lower in th compared string,
     * or all compared characters match but the compared string is shorter.
     * Greater than 0: Either the value of the first character that does not match is greater in the compared string,
     * or all compared characters match but the compared string is longer.
     * When a number is encountered it is converted from a string to a number.
     * For example, A1, A2, A10 would be the sorting order, instead of A1, A10, A2 with the normal sort routine.
     */
    compareWithNumbers: compareWithNumbers
    /**
     * Plays an action from the Actions palette. The `action` parameters is the name of the action, the `from`
     * parameter is the name of the action set.
     */
    doAction: doAction
    /**
     * Performs a task with a progress bar.
     * Forces progress bar to display, ignoring the normal heuristic that keep it from showing unnecessarily(for example, during very short tasks).
     * Other progress APIs must be called periodically to update the progress bar and allow canceling.
     * The `progressString` parameter is the string to show in the progress window, the `javaScriptString` parameter is the string to execute.
     */
    doForceProgress: doForceProgress
    /**
     * Performs a task with a progress bar.
     * Other progress APIs must be called periodically to update the progress bar and allow canceling.
     * The `progressString` parameter is the string to show in the progress window, the `javaScriptString` parameter is the string to execute.
     */
    doProgress: doProgress
    /**
     * Sections-off a portion of the unused progress bar for execution of a subtask. Returns false on cancel.
     * This method sholud be used when iterating a list of tasks with unequal run times.
     * The `segmentLength` parameter is the length of the current task, the `done` parameter is the total length of all completed tasks, the `total` parameter is the total length of all tasks.
     * The `javaScriptString` parameter is the string to execute.
     */
    doProgressSegmentTask: doProgressSegmentTask
    /**
     * Sections-off a portion of the unused progress bar for execution of a subtask. Returns false on cancel.
     * This method should be used when iterating a list of tasks with equal run times.
     * The `index` parameter is the 0-based index of the current task, the `limit` parameter is the total number of tasks, and the `javaScriptString` parameter is the string to execute.
     */
    doProgressSubTask: doProgressSubTask
    /**
     * Sections-off a portion of the unused progress bar for execution of a subtask. Returns false on cancel.
     * The `taskLength` parameter is the amount of the unused progress bar to sections-off between 0.0 and 1.0.
     * The `javaScriptString` parameter is the string to execute.
     */
    doProgressTask: doProgressTask
    /**
     * Erases the user object with specified ID value from the Photoshop registry.
     */
    eraseCustomOptions: eraseCustomOptions
    /** Plays an Action Manager event. */
    executeAction: executeAction
    /**
     * Obtains information about a predefined or recorded action.
     */
    featureEnabled: featureEnabled
    /**
     * Retrieves user objects in the Photoshop registry for the ID with value `key`.
     */
    getCustomOptions: getCustomOptions
    /**
     * Returns true if Quicktime is installed.
     */
    isQuicktimeAvailable: isQuicktimeAvailable
    /** Loads a support file(as opposed to a Photoshop image document) from the specified location. */
    load: load
    /**
     * @deprecated For Adobe Photoshop CS4.
     */
    makeContactSheet: makeContactSheet
    /**
     * @deprecated For Adobe Photoshop CS4.
     */
    makePDFPresentation: makePDFPresentation
    /**
     * @deprecated For Adobe Photoshop CS4.
     */
    makePhotoGallery: makePhotoGallery
    /**
     * @deprecated For Adobe Photoshop.
     * Use provided script:
     * `runphotomergeFromScript = true; $.evalFile(app.path + "Presets/Scripts/Photomerge.jsx"); photomerge.createPanoram(fileList, displayDialog);`
     * Merges multiple files into one, with user interaction required.
     */
    makePhotomerge: makePhotomerge
    /**
     * @deprecated For Adobe Photoshop CS4.
     */
    makePicturePackage: makePicturePackage
    /**
     * Opens the specified document.
     * User the optional `as` parameter to specify the file format using the constrains in `OpenDocumentType`;
     * or, you can specify a file format together with its open options using these objects:
     * `CamerRAWOpenOptions`
     * `DICOMOpenOptions`
     * `EPSOpenOptions`
     * `PDFOpenOptions`
     * `PhotoCDOpenOptions`
     * `RawFormatOpenOptions`
     * Use the optional parameter `asSmartObject` (default: `false`) to create a smart object aroudn the opened document.
     * See the Application sample scripts for an example of using the `File` object in the open method.
     */
    open: open
    /**
     * Invokes the Photoshop Open dialog box for the user to select files.
     * Returns an array of `File` objects for the files selected in the dialog.
     */
    openDialog: openDialog
    /**
     * Purges one or more caches.
     */
    purge: purge
    /**
     * Saves a customized settings object in the Photoshop registry.
     * `key` is the unique identifier for your custom settings.
     * `customObject` is the object to save in the registry.
     * `persistent` indicates whether the object should persist once the script has finished.
     */
    putCustomOptions: putCustomOptions
    /**
     * Pauses the script while the application refreshes.
     * Use to slow down execution and show the results to the users as the script runs much more slowly when using this method.
     */
    refresh: refresh
    /**
     * Force the font list to get updated.
     */
    refreshFonts: refreshFonts
    /**
     * Run a menu item given the menu ID.
     */
    runMenuItem: runMenuItem
    /**
     * Returns false if dialog is cancelled, true otherwise.
     */
    showColorPicker: showColorPicker
    /** Converts from a string ID to a runtime ID. */
    stringIDToTypeID: stringIDToTypeID
    /**
     * Toggle palette visibility.
     */
    togglePalettes: togglePalettes
    /**
     * Returns true if the specified tool supports brushes, false otherwise.
     */
    toggleSupportsBrushes: toggleSupportsBrushes
    /**
     * Returns true if the brush supports presets.
     */
    toggleSupportsBrushPresets: toggleSupportsBrushPresets
    /**
     * Converts from a runtime ID to a character ID.
     */
    typeIDToCharID: typeIDToCharID
    /**
     * Converts from a runtime ID to a string ID.
     */
    typeIDToStringID: typeIDToStringID
    /**
     * Updates the progress bar started by `doProgress` method.
     * This method should be used for manual non-task based progress updating.
     * Returns false on cancel.
     * The `done` parameter is the number of tasks completed and the `total` parameter the total number of tasks.
     */
    updateProgress: updateProgress
}

declare var app: Application

/** @see app.activeDocument */
declare var activeDocument: Document
/** @see app.backgroundColor */
declare var backgroundColor: SolidColor
/** @see app.build */
declare var build: string
/** @see app.cloudWorkAreaDirectory */
declare var cloudWorkAreaDirectory: string
/** @see app.colorSettings */
declare var colorSettings: string
/** @see app.currentTool */
declare var currentTool: string
/** @see app.displayDialogs */
declare var displayDialogs: DialogModes
/** @see app.documents */
declare var documents: Documents
/** @see app.fonts */
declare var fonts: TextFonts
/** @see app.foregroundColor */
declare var foregroundColor: SolidColor
/** @see app.freeMemory */
declare var freeMemory: number
/** @see app.locale */
declare var locale: string
/** @see app.macintoshFileTypes */
declare var macintoshFileTypes: string[]
/** @see app.measurementLog */
declare var measurementLog: MeasurementLog
/** @see app.name */
declare var name: string
/** @see app.notifiers */
declare var notifiers: Notifiers
/** @see app.notifierEnabled */
declare var notifierEnabled: boolean
/** @see app.path */
declare var path: File
/** @see app.playbackDisplayDialogs */
declare var playbackDisplayDialogs: DialogModes
/** @see app.playbackParameters */
declare var playbackParameters: ActionDescriptor
/** @see app.preferences */
declare var preferences: Preferences
/** @see app.preferencesFolder */
declare var preferencesFolder: File
/** @see app.recentFiles */
declare var recentFiles: File[]
/** @see app.scriptingBuildDate */
declare var scriptingBuildDate: string
/** @see app.scriptingVersion */
declare var scriptingVersion: string
/** @see app.typename */
declare var typename: string
/** @see app.version */
declare var version: string
/** @see app.windowsFileTypes */
declare var windowsFileTypes: string[]

/** @see app.batch */
declare var batch: batch
/** @see app.beep */
declare var beep: beep
/** @see app.bringToFront */
declare var bringToFront: bringToFront
/** @see app.changeProgressText */
declare var changeProgressText: changeProgressText
/** @see app.charIDToTypeID */
declare var charIDToTypeID: charIDToTypeID
/** @see app.compareWithNumbers */
declare var compareWithNumbers: compareWithNumbers
/** @see app.doAction */
declare var doAction: doAction
/** @see app.doForceProgress */
declare var doForceProgress: doForceProgress
/** @see app.doProgress */
declare var doProgress: doProgress
/** @see app.doProgressSegmentTask */
declare var doProgressSegmentTask: doProgressSegmentTask
/** @see app.doProgressSubTask */
declare var doProgressSubTask: doProgressSubTask
/** @see app.doProgressTask */
declare var doProgressTask: doProgressTask
/** @see app.eraseCustomOptions */
declare var eraseCustomOptions: eraseCustomOptions
/** @see app.executeAction */
declare var executeAction: executeAction
/** @see app.featureEnabled */
declare var featureEnabled: featureEnabled
/** @see app.getCustomOptions */
declare var getCustomOptions: getCustomOptions
/** @see app.isQuicktimeAvailable */
declare var isQuicktimeAvailable: isQuicktimeAvailable
/** @see app.load */
declare var load: load
/** @see app.makeContactSheet */
declare var makeContactSheet: makeContactSheet
/** @see app.makePDFPresentation */
declare var makePDFPresentation: makePDFPresentation
/** @see app.makePhotoGallery */
declare var makePhotoGallery: makePhotoGallery
/** @see app.makePhotomerge */
declare var makePhotomerge: makePhotomerge
/** @see app.makePicturePackage */
declare var makePicturePackage: makePicturePackage
/** @see app.open */
declare var open: open
/** @see app.openDialog */
declare var openDialog: openDialog
/** @see app.purge */
declare var purge: purge
/** @see app.putCustomOptions */
declare var putCustomOptions: putCustomOptions
/** @see app.refresh */
declare var refresh: refresh
/** @see app.refreshFonts */
declare var refreshFonts: refreshFonts
/** @see app.runMenuItem */
declare var runMenuItem: runMenuItem
/** @see app.showColorPicker */
declare var showColorPicker: showColorPicker
/** @see app.stringIDToTypeID */
declare var stringIDToTypeID: stringIDToTypeID
/** @see app.togglePalettes */
declare var togglePalettes: togglePalettes
/** @see app.toggleSupportsBrushes */
declare var toggleSupportsBrushes: toggleSupportsBrushes
/** @see app.toggleSupportsBrushPresets */
declare var toggleSupportsBrushPresets: toggleSupportsBrushPresets
/** @see app.typeIDToCharID */
declare var typeIDToCharID: typeIDToCharID
/** @see app.typeIDToStringID */
declare var typeIDToStringID: typeIDToStringID
/** @see app.updateProgress */
declare var updateProgress: updateProgress