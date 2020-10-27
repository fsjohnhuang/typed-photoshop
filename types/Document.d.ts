/**
 * The active containment object for layers and all other objects in the script; the basic canvas for the file. 
 * Access the object for the currently active document through `Application.activeDocument`.
 * You can access other documents, or iterate through all open documents using the list in the `Application.documents` collection.
 * You can access individual documents in the list by index, or use `Documents.getByName()` to retrieve them by name.
 * Create documents programmatically using the `Documents.add()` method.
 * *Note:* 
 * In Adobe Photoshop, a document can also be referred to as an image or a canvas.
 * The term image refers to the entire document and its contents. You can trim or crop an image. You resize an image using the `resizeImage()` method.
 * The term canvas refers to the space in which the document sits on the screen. You can rotate or flip the canvas. You resize the canvas using the `resizeCanvas()` method.
 */
declare class Document {
    /** Read-write. The selected channels. */
    activeChannels: Channel[]
    /** Read-write. The history state to use with the history brush. */
    activeHistoryBrushSource: Guide
    /** 
     * Read-write. The selected `HistoryState` object. 
     */
    activeHistoryState: Guide
    /** Read-write. The selected layer. */
    activeLayer: ArtLayer | LayerSet
    /** Read-only. The art layers collection. */
    readonly activeLayers: ArtLayers
    /** Read-only. The background layer of the document. */
    readonly backgroundLayer: ArtLayer
    /** Read-write. The number of bits per channel. */
    bitsPerChannel: BitsPerChannelType
    /** Read-only. The channels collection. */
    readonly channels: Channels
    /** Read-only. This document is in the cloud. */
    readonly cloudDocument: boolean
    /** Read-only. Local directory for this cloud document. */
    readonly cloudWorkAreaDirectory: any 
    /** 
     * Read-write. The name of the color profile.
     * Valid only when `colorProfileType` = `ColorProfile.CUSTOM` or `WORKING`.
     */
    colorProfileName: string
    /** Read-write. Whether the document uses the working color profile, a custom profile, or no profile. */
    colorProfileType: ColorProfileType
    /** Read-only. The current color samplers associated with this document. */
    readonly colorSamplers: ColorSamplers
    /** 
     * Read-only. The color channels that make up the document;
     * for instance, the Red, Green and Blue channels for and RGB document.
     */
    readonly componentChannels: Channel[]
    /** Read-only. The current count items. */
    readonly countItem: CountItem
    /** Read-only. The full path name of the document. */
    readonly fullName: File
    /** Read-only. The guides collection. */
    readonly guides: Guides
    /** Read-only. The height of the document(unit value). */
    readonly height: UnitValue
    /** 
     * Read-only. A histogram showing the number of pixels at each color intensity level for the composite channel.
     * The array contains 256 members.
     * Valid only when `mode` = `DocumentMode.RGB`, `CMYK` or `INDEXEDCOLOR`
     */
    readonly histogram: number[]
    /** Read-only. The history states collection. */
    readonly historyStates: HistoryStates
    /** Read-only. Metadata about the document. */
    readonly info: DocumentInfo
    /** Read-only. The layer compositions collection. */
    readonly layerComps: LayerComps
    /** Read-only. The layers collection. */
    readonly layers: Layers
    /** Read-only. The layer set collection. */
    readonly layerSets: LayerSets
    /** Read-only. True if the document is a workgroup document. */
    readonly managed: boolean
    /** 
     * Read-only. The measurement scale for the document.
     * *Note:*
     * The measurement scale feature is available in the Extended version only.
     */
    readonly measurementScale: MeasurementScale
    /** Read-only. The color profile. */
    readonly mode: DocumentMode
    /** Read-only. The document's name. */
    readonly name: string
    /** Read-only. The application object that contains this document. */
    readonly parent: Application
    /** Read-only. The path to the document. */
    readonly path: File
    /** Read-only. The path items collection. */
    readonly pathItems: PathItems
    /** Read-write. The (custom) pixel aspect ratio to use. */
    pixelAspectRatio: number
    /** Read-only. The print settings for the document. */
    readonly printSettings: DocumentPrintSettings
    /** Read-write. True if the document is in Quick Mask mode. */
    quickMaskMode: boolean
    /** Read-only. The document's resolution(in pixels per inch). */
    readonly resolution: number
    /** Read-only. True if the document has been saved since the last change. */
    readonly saved: boolean
    /** Read-only. The selected area of the document. */
    readonly selection: Selection
    /** 
     * Read-only. The class name of the `Document` object.
     */
    readonly typename: string
    /** Read-only. The width of the document(unit value). */
    readonly width: UnitValue
    /** Read-only. XMP metadata for the document. Camera RAW settings for the image are stored here for example. */
    readonly xmpMetadata: xmpMetadata

    /**
     * Counts the number of objects in a docuemnt. Available in the Extended Version only.
     * Creates a CountItem object for each object counted.
     */
    autoCount(channel: Channel, threshold: number): void
    /** Changes the color profile of the document. */
    changeMode(destinationMode: ChangeMode, options?: BitmapConversionOptions | IndexedConversionOptions): void
    /**
     * Closes the document. If any changes have been made, the script presents an alert with three options: save, do not save, prompt to save.
     * The optional parameter specifies a selection in the alert box(default: SaveOptionsType.PROMPTTOSAVECHANGES)
     */
    close(saving?: SaveOptions): void
    /**
     * Chnages the color profile.
     * The `desitinationProfile` parameter must be either a string that names the color mode or `Working RGB`, `Working CMYK`
     * , `Working Gray`, `Lab Color` (meaning one of the working color spaces or Lab color).
     */
    convertProfile(destinationProfile: string, intent: Intent, blackPointCompensation: boolean, dither: boolean): void
    /**
     * Crops the document. The `bounds` parameter is an array of four coordinates for the region remaining after cropping,[left,top,right,bottom].
     */
    crop(bounds: [UnitValue,UnitValue,UnitValue,UnitValue], angle?: number, width?: UnitValue, height?: UnitValue): void
    /**
     * Creates a duplicate of the document object.
     * The optional parameter `name` provides the name of the duplicated document.
     * The optional parameter `mergeLayersOnly` indicates whether to only duplicate merged layers.
     */
    duplicate(name?: string, mergeLayersOnly?: boolean): Document
    /**
     * Exports the paths in the document to an illustrator file, or exports the document to a file with Web or device viewing optimizations.
     * This is equivalent to choosing *File > Export > Paths To Illustrator*, or *File > Export > Save For Web and Devices*.
     */
    exportDocument(exportIn: File, exportAs: ExportType, options?: ExportOptionsIllustrator | ExportOptionsSaveForWeb): void
    /** Flatten all layers in the document. */
    flatten(): void
    /** Flips the image within the canvas in the specified direction. */
    flipCanvas(direction: Direction): void
    /** Imports annotations into the document. */
    importAnnotations(file: File): void
    /** Flattens all visible layers in the document. */
    mergeVisibleLayers():void
    /**
     * Pastes the contents of the clipboard into the document.
     * If the optional argument is set to `true` and a selection is active, the contents are pasted into the selection.
     */
    paste(intoSelection?: boolean): ArtLayer
    /**
     * Prints the document.
     * `printSpace` specifies the color space for the printer.
     * Valid vlaues are `nothing`(that is, the same as the source); or `Working RGB`, `Working CMYK`, `Working Gray`
     * , `Lab Color`(meaning one of the working color spaces of Lab color); or a string specifing a specific colorspace(default is same as source).
     */
    print(sourceSpace?: SourceSpaceType, printSpace?: string, intent?: Intent, blackPointCompensation?: boolean): void
    /** Print one copy of the document. */
    printOneCopy(): void
    /** Rasterizes all layers. */
    rasterizeAllLayers(): void
    /** Record measurements of document. */
    recordMeasurements(source?: MeasurementSource, dataPoints?: string[]): void
    /**
     * Changes the size of the canvas to display more or less of the image but does not change the image size. See `resizeImage`. 
     */
    resizeCanvas(width?: UnitValue, height?: UnitValue, anchor?: AnchorPosition): void
    /**
     * Changes the size of the image.
     * The `amount` parameter controls the amount of noise value when using preserve details(Range:0-100)
     */
    reiszeImage(width?: UnitValue, height?: UnitValue, resolution?: number, resampleMethod?: ResampleMethod, amount?: number): void
    /** Expands the document to show clipped sections. */
    revealAll(): void
    /** Rotates the canvas(including the image) in clockwise direction. */
    rotateCanvas(angle: number): void
    /** Saves the document. */
    save(): void
    /**
     * Saves the document in a specific format.
     * Specify the save optiosn appropriate to the format by passing one of these objects:
     * `BMPSaveOptions`
     * `DCS1 SaveOptions`
     * `DCS2 SaveOptions`
     * `EPSSaveOptions`
     * `GIFSaveOptions`
     * `JPEGSaveOptions`
     * `PDFSaveOptions`
     * `PhotoshopSaveOptions`
     * `PICTFileSaveOptions`
     * `PICTResourceSaveOptions`
     * `PixarSaveOptions`
     * `PNGSaveOptions`
     * `RawSaveOptions`
     * `SGIRGBSaveOptions`
     * `TargaSaveOptions`
     * `TiffSaveOptions`
     */
    saveAs(saveIn: File, options?: object, asCopy?: boolean, extensionType?: Extension): void
    /** Splits the document channels into separate images. */
    splitChannels(): Document[]
    /**
     * Provides a single entry in history states for the entire script provided by `javaScriptString`.
     * Allows a single undo for all actions taken in the script.
     * The `historyString` parameter provides the string to use for the history state.
     * The `javaScriptString` parameter provides a string of JavaScript code to execute while history is suspended.
     */
    suspendHistory(historyString: string, javaScriptString: string): void
    /**
     * Applies trapping to a CMYK document.
     * Valid only when `docRef.mode` = `DocumentMode.CMYK`. 
     */
    trap(width: number): void
    /** 
     * Trims the transparent area around the image on the specified sides of the canvas.
     * Default is `true` for all Boolean parameters.
     */
    trim(type?: TrimType, top?: boolean, left?: boolean, bottom?: boolean, right?: boolean): void
}