/**
 * The type of a layer object, in ArtLayer.kind. (Note: You can create a text layer only from an empty art layer.)
 */
declare enum LayerKind {
     BLACKANDWHITE,
     BRIGHTNESSCONTRAST,
     CHANNELMIXER,
     COLORBALANCE,
     CURVES,
     EXPOSURE,
     GRADIENTFILL,
     GRADIENTMAP,
     HUESATURATION,
     INVERSION,
     LEVELS,
     NORMAL,
     PATTERNFILL,
     PHOTOFILTER,
     POSTERIZE,
     SELECTIVECOLOR,
     SMARTOBJECT,
     SOLIDFILL,
     TEXT,
     THRESHOLD,
     LAYER3D,
     VIBRANCE,
     VIDEO,
}

/**
 * The value type of an action key, returned by ActionDescriptor.getType() and ActionList.getType().
 */
declare enum DescValueType {
     ALIASTYPE,
     BOOLEANTYPE,
     CLASSTYPE,
     DOUBLETYPE,
     ENUMERATEDTYPE,
     INTEGERTYPE,
     LARGEINTEGERTYPE,
     LISTTYPE,
     OBJECTTYPE,
     RAWTYPE,
     REFERENCETYPE,
     STRINGTYPE,
     UNITDOUBLE,
}

/**
 * Controls the type of dialogs Photoshop displays when running scripts.
 */
declare enum DialogModes {
    ALL,
    ERROR,
    NO,
}

/**
 * The layer element to rasterize, using ArtLayer.rasterize().
 */
declare enum RasterizeType {
     ENTIRELAYER,
     FILLCONTENT,
     LAYERCLIPPINGPATH,
     LINKEDLAYERS,
     SHAPE,
     TEXTCONTENTS,
}

/**
 * The type of an `ActionReference` object, returned by `getForm()`.
 */
declare enum ReferenceFormType {
     CLASSTYPE,
     ENUMERATED,
     IDENTIFIER,
     INDEX,
     NAME,
     OFFSET,
     PROPERTY,
}

/**
 * The policy for closing a document with `Document.close()`.
 */
declare enum SaveOptions {
     DONOTSAVECHANGES,
     PROMPTTOSAVECHANGES,
     SAVECHANGES
}

/**
 * The rendering intent to use when converting from one color space to another with `Document.convertProfile()` or `Document.print()`.
 */
declare enum Intent {
     ABSOLUTECOLORIMETRIC,
     PERCEPTUAL,
     RELATIVECOLORIMETRIC,
     SATURATION
}

/**
 * Type of pixels to trim around an image, passed to `Document.trim()`.
 * `BOTTOMRIGHT` = bottom right pixel color.
 * `TOPLEFT` = top left pixel color.
 */
declare enum TrimType {
     BOTTOMRIGHT,
     TOPLEFT,
     TRANSPARENT
}

/**
 * The preferred measurement unit for type and ruler increments, set in `Preferences.rulerUnits`.
 */
declare enum Units {
     CM,
     INCHES,
     MM,
     PERCENT,
     PICAS,
     PIXELS,
     POINTS
}

/**
 * The direction in which to flip the document canvas, passed to `Docuemnt.filpCanvas()`.
 * The orientation of text in `TextItem.direction`.
 * The direction of text wraping in `TextItem.wrapDirection`.
 */
declare enum Direction {
     HORIZONTAL,
     VERTICAL
}

/**
 * The color mode of a open document, `Docuemnt.mode`. See also `Document.changeMode()`.
 */
declare enum DocumentMode {
     BITMAP,
     CMYK,
     DUOTONE,
     GRAYSCALE,
     INDEXEDCOLOR,
     LAB,
     MUTICHANNEL,
     RGB
}

/**
 * The type of export for `Document.exportDocument()`.
 * This is equivalent to choosing *File > Export > Paths To Illustrator*, or *File > Save For Web and Devices*.
 */
declare enum ExportType {
     ILLUSTRATORPATHS,
     SAVEFORWEB
}

/**
 * The policy and format for appending and extension to the filename when saving with `Document.saveAs()`.
 */
declare enum Extension {
     LOWERCASE,
     NONE,
     UPPERCASE
}

/**
 * The number of bits per color channel.
 */
declare enum BitsPerChannelType {
     EIGHT,
     ONE,
     SIXTEEN,
     THIRTYTWO
}

/**
 * The type of color profile used to manage this document, set in `Document.colorProfileType`.
 */
declare enum ColorProfileType {
     CUSTOM,
     NOEN,
     WORKING
}

/**
 * The color model to use for a `SolidColor`.
 */
declare enum ColorModel {
     CMYK,
     GRAYSCALE,
     HSB,
     LAB,
     NONE,
     RGB
}

/**
 * The copyright status of a document.
 * Used in `DocumentPrintSettings.copyrighted`.
 */
declare enum CopyrightedType {
     COPYRIGHTEDWORK,
     PUBLICDOMAIN,
     UNMARKED
}

/**
 * The editorial urgency status of a document, set in 
 * `DocumentPrintSettings.urgency`.
 */
declare enum Urgency {
     FOUR,
     HIGH,
     LOW,
     NONE,
     NORMAL,
     SEVEN,
     SIX,
     THREE,
     TWO
}

/**
 * The role of `PathPoint` plays in a `PathItem`.
 */
declare enum PointKind {
     CORNERPOINT,
     SMOOTHPOINT
}

/**
 * How to combine the shapes if the destination path already has a section.
 * Set for `SubPathInfo.operation`, stored in the resulting `SubPathItem`.  
 */
declare enum ShapeOperation {
     SHAPEADD,
     SHAPEINTERSECT,
     SHAPESUBTRACT,
     SHAPEXOR
}

/**
 * The type of `PathItem`
 */
declare enum PathKind {
     CLIPPINGPATH,
     NORMALPATH,
     TEXTMASK,
     VECTORMASK,
     WORKPATH
}

/**
 * The way color should be blended in a fill or stroke operation.
 * Pass to `PathItem.fillPath()`, `Selection.fill()`, `Selection.stroke()`.
 */
declare enum ColorBlendMode {
     BEHIND,
     CLEAR,
     COLOR,
     COLORBURN,
     COLORDODGE,
     DARKEN,
     DARKERCOLOR,
     DIFFERENCE,
     DISSOLVE,
     EXCLUSION,
     HARDLIGHT,
     HARDMIXBLEND,
     HUE,
     LIGHTEN,
     LIGHTERCOLOR,
     LINEARBURN,
     LINERDODGE,
     LINEARLIGHT,
     LUMINOSITY,
     MULTIPLY,
     NORMAL,
     OVERLAY,
     PRINLIGHT,
     SATURATION,
     SCREEN,
     SOFTLIGHT,
     VIVIDLIGHT
}

/**
 * The selection behavior when a selection already exists:
 * `DIMINISH`: Removes the selection from the already selected area.
 * `EXTEND`: Add the selection to an already selected area.
 * `INTERSECT`: Make the selection only the area where the new selection intersects the already selected area.
 * Use in `PathItem.makeSelection()`, `Selection.load()`, `Selection.select()`, and `Selection.store()`.
 */
declare enum SelectionType {
     DIMINISH,
     EXTEND,
     INTERSECT,
     REPLACE
}

/**
 * The tool to use with `PathItem.strokePath()`.
 */
declare enum ToolType {
     ARTHISTORYBRUSH,
     BACKGROUNDERASER,
     BLUR,
     BRUSH,
     CLONESTAMP,
     COLORREPLACEMENTTOOL,
     DODGE,
     ERASER,
     HEALINGBRUSH,
     HISTORYBRUSH,
     PATTERNSTAMP,
     PENCIL,
     SHARPEN,
     SMUDGE,
     SPONGE
}

/**
 * The new color profile or mode for a document, specified in `Document.changeMode()`.
 * *Note:*
 * Color images must be changed to `GRAYSCALE` mode before you can change them to `BITMAP` mode.
 */
declare enum ChangeMode {
     BITMAP,
     CMYK,
     GRAYSCALE,
     INDEXEDCOLOR,
     LAB,
     MULTICHANNEL,
     RGB
}

/**
 * The color space for source when printing with `Document.print()`.
 */
declare enum SourceSpaceType {
     DOCUMENT,
     PROOF
}

/**
 * The point around which to transform an object.
 * This is the point that does not move when an object is rotated or resized using methods
 * in `ArtLayer`, `LayerSet` and `Selection`, or when the entire canvas is resized with `Document.resizeCanvas()`.
 */
declare enum AnchorPosition {
     BOTTOMCENTER,
     BOTTOMLEFT,
     BOTTOMRIGHT,
     MIDDLECENTER,
     MIDDLELEFT,
     MIDDLERIGHT,
     TOPCENTER,
     TOPLEFT,
     TOPRIGHT,
}

/**
 * The placement of path or selection boundary strokes. Pass to `Selection.stroke()`.
 */
declare enum StrokeLocation {
     CENTER,
     INSIDE,
     OUTSIDE
}

/**
 * Specifies the quality of an image you are converted to bitmap mode.
 * Used in `BitmapConversionOptions`.
 */
declare enum BitmapConversionType {
     CUSTOMPATTERN,
     DIFFUSIONDITHER,
     HALFTHRESHOLD,
     HALFTONESCREEN,
     PATTERNDITHER
}

/** 
 * Specifies the shape of the dots(ink deposits) in the halftone sreen.
 * Used in `BitmapConverionOptions`.
 */
declare enum BitmapHalfToneType {
     CROSS,
     DIAMOND,
     ELLIPSE,
     LINE,
     ROUND,
     SQUARE
}

/**
 * The type of dithering to use in `GIFSaveOptions`, `IndexedConversionOptions` and `ExportOptionsSaveForWeb`.
 */
declare enum Dither {
     DIFFUSION,
     NOISE,
     NONE,
     PATTERN
}

/**
 * The type of colors to be included the color table regardless of their usage.
 * Used in `GIFSaveOptions` and `IndexedConversionOptions`.
 * `BLACKWHITE`: Pure black and pure white.
 * `NONE`: None
 * `PRIMARIES`: Red, green, blue, cyan, magenta, yellow, black and white.
 * `WEB`: the 216 web-sefe colors.
 */
declare enum ForcedColors {
     BLACKWHITE,
     NONE,
     PRIMARIES,
     WEB
}

/**
 * The color to use to fill anti-aliased edges adjacent to transparent areas of the image.
 * When transparency is turned off for an image, the matte color is applied to transparent areas.
 * Used in `GIFSaveOptions`, `IndexedConversionOptions` and `JPEGSaveOptions`.
 */
declare enum MatteType {
     BACKGROUND,
     BLACK,
     FOREGROUND,
     NETSCAPE,
     NONE,
     SEMIGRAY,
     WHITE
}

/**
 * The palette type to use in `GIFSaveOptions` and `IndexedConversionOptions`.
 */
declare enum PaletteType {
     EXACT,
     LOCALADAPTIVE,
     LOCALPERCEPTUAL,
     LOCALSELECTIVE,
     MACOSPALETTE,
     MACOSADAPTIVE,
     MACOSPERCEPTUAL,
     MACOSSELECTIVE,
     PREVIOUSPALETTE,
     UNIFORM,
     WEBPALETTE,
     WINDOWSPALETTE
}

/**
 * The paths to export to illustrator file using `Document.exportDocument()`.
 */
declare enum IllustratorPathType {
     ALLPATHS,
     DOCUMENTBOUNDS,
     NAMEDPATH
}

/**
 * The color reduction algorithm option for `ExportOptionsSaveForWeb`.
 */
declare enum ColorReductionType {
     ADAPTIVE,
     BLACKWHITE,
     CUSTOM,
     GRAYSCALE,
     MACINTOSH,
     PERCEPTUAL,
     RESTRICTIVE,
     SELECTIVE,
     WINDOWS
}

/**
 * The format in which to save a document when exporting with `Document.exportDocument()`.
 * Pass in `ExportOptionsSaveForWeb.format`, to specify the type of file to write.
 * Only the following are supported for export `COMPUSERVEGIF, JPEG, PNG-8, PNG-24` and `BMP`.
 */
declare enum SaveDocumentType {
     ALIASPIX,
     BMP,
     COMPUSERVEGIT,
     ELECTRICIMAGE,
     JPEG,
     PCX,
     PHOTOSHOP,
     PHOTOSHOPDCS_1,
     PHOTOSHOPDCS_2,
     PHOTOSHOPEPS,
     PHOTOSHOPPDF,
     PICTFileFORMAT,
     PICTRESOUCEFORMAT,
     PIXAR,
     PNG,
     PORTABLEBITMAP,
     RAW,
     SCITEXCT,
     SGIRGB,
     SOFTIMAGE,
     TARGA,
     TIFF,
     WAVEFRONTRLA,
     WIRELESSBITMAP
}

/**
 * The measurement to act upon. Pass to `MeasurementLog` methods.
 */
declare enum MeasurementRange {
     ALLMEASUREMENTS,
     ACTIVEMEASUREMENTS
}

/**
 * The source for recording measurements.
 * Pass to `Document.recordMeasurements()`.
 */
declare enum MeasurementSource {
     MEASURESELECTION,
     MEASURECOUNTTOOL,
     MEASURERULERTOOL
}

/**
 * The method to use for image interpolation. Passed to `Document.resizeImage()` and used as the value of `Preferences.interpolation`.
 */
declare enum ResampleMethod {
     AUTOMATIC,
     BICUBIC,
     BICUBICAUTOMATIC,
     BICUBISHARPER,
     BICUBISMOOTHER,
     BILINEAR,
     NEARESTNEIGHBOR,
     NONE,
     PRESERVEDETAILS
}

/**
 * The type of a color channel:
 * `COMPONENT`: related to doucument color mode.
 * `MASKEDAREA`: Alpha channel where color indicates masked area.
 * `SELECTEDAREA`: Alpha channel where color indicates selected are.
 * `SPOTAREA`: Alpha channel to store a spot color.
 */
declare enum ChannelType {
     COMPONENT,
     MASKEDAREA,
     SELECTEDAREA,
     SPOTCOLOR
}

/**
 * Controls how pixels in an image are blended when a filter is applied.
 * The value of `ArtLayer.blendMode` and `LayerSet.blendMode`.
 */
declare enum BlendMode {
     COLORBLEND,
     COLORBURN,
     COLORDODGE,
     DARKEN,
     DIFFERENCE,
     DISSOLVE,
     DIVIDE,
     EXCLUSION,
     HARDLIGHT,
     HARDMIX,
     HUE,
     LIGHTEN,
     LINEARBURN,
     LINEARDODGE,
     LINEARLIGHT,
     LUMINOSITY,
     MULITPLY,
     NORMAL,
     OVERLAY,
     PASSTHROUGH,
     PINLIGHT,
     SATURATION,
     SCREEN,
     SOFTLIGHT,
     SUBTRACT,
     VIVIDLIGHT
}

/**
 * The object's position in the Layers palette.
 * *Note:*
 * Not all values are valid for all object types. See the specific object description to make sure you are using a valid value.
 */
declare enum ElementPlacement {
     INSIDE,
     PLACEATBEGINNING,
     PLACEATEND,
     PLACEBEFORE,
     PLACEAFTER
}

/**
 * Distribution method to use when applying an Add Noise filter.
 * Pass to `ArtLayer.applyAddNoise()`.
 */
declare enum NoiseDistribution {
     GAUSSIAN,
     UNIFORM
}

/**
 * The type of fields to eliminate.
 * Pass to `ArtLayer.applyDeInterlace()`.
 */
declare enum EliminateFields {
     EVENFIELDS,
     ODDFIELDS
}

/**
 * The method to use for creating fields.
 * Pass to `ArtLayer.applyDeInterlace()`.
 */
declare enum CreateFields {
     DUPLICATION,
     INTERPOLATION
}

/**
 * The source to use for the depth map.
 * Pass to `ArtLayer.applyLensBlur()`.
 */
declare enum DepthMapSource {
     IMAGEHIGHTLIGHT,
     LAYERMASK,
     NONE,
     TANSPARENCYCHANNEL
}

/**
 * Describes how the displacement map fits the image if the image is not the same size as the map.
 * Pass to `ArtLayer.applyDisplace()`.
 */
declare enum DisplacementMapType {
     STRETCHTOFIT,
     TILE
}

/**
 * Method to use to fill the empty space left by offseting an image or selection.
 * Pass to `ArtLayer.applyOffset()`.
 */
declare enum OffsetUndefinedAreas {
     REPEATEDGEPIXELS,
     SETTOBACKGROUND,
     WRAPAROUND
}

/**
 * The method to use to treat undistorted areas or areas left blank in an image to which the a filter in the Distort category has been applied.
 * Pass to `ArtLayer.applyDisplace()`, `applyShear()`, `applyWave()`.
 */
declare enum UndefinedAreas {
     REPEATEDGEPIXELS,
     WRAPAROUND
}

/**
 * The type of texture or glass surface image to load for a texturizer or glass filter.
 * Pass to `ArtLayer.applyGlassEffect()`.
 */
declare enum TextureType {
     BLOCKS,
     CANVAS,
     FILE,
     FROSTED,
     TINYLENS
}

/**
 * Geometric options for shapes, such as the iris shape in the Lens Blur Filter.
 * Pass to `ArtLayer.applyLensBlur()`.
 */
declare enum Geometry {
     HEPTAGON,
     HEXAGON,
     OCTAGON,
     PENTAGON,
     SQUARE,
     TRIANGLE
}

/**
 * The type of lens to use.
 * Pass to `ArtLayer.applyLensFlare()`.
 */
declare enum LensType {
     MOVIEPRIME,
     PRIME105,
     PRIME35,
     ZOOMLENS
}

/**
 * The method of polar distortion to use.
 * Pass to `ArtLayer.applyPolarCoordinates()`.
 */
declare enum PolarConversionType {
     POLARTORECTANGULAR,
     RETANGULARTOPOLAR
}

/**
 * The blur method to use.
 * Pass to `ArtLayer.applyRadialBlur()`.
 */
declare enum RadialBlurMethod {
     SPIN,
     ZOOM
}

/**
 * The smoothes or graininess of the blurred image.
 * Pass to `ArtLayer.applyRadialBlur()`.
 */
declare enum RadialBlurQuality {
     BEST,
     DRAFT,
     GOOD
}

/**
 * The size of undulations to use.
 * Pass to `ArtLayer.applyRipple().`
 */
declare enum RippleSize {
     LARGE,
     MEDIUM,
     SMALL
}

/**
 * The method to use for smart blurring:
 * `EDGEONLY`, `OVERLAYEDGE`: Apply blur only to edges of color transitions.
 * `NORMAL`: Apply blur to entire image.
 * Pass to `ArtLayer.applySmartBlur()`.
 */
declare enum SmartBlurMode {
     EDGEONLY,
     NORMAL,
     OVERLAYEDGE
}

/**
 * The blur quality to use.
 * Pass to `ArtLayer.applySmartBlur()`.
 */
declare enum SmartBlurQuality {
     HIGH,
     LOW,
     MEDIUM
}

/**
 * The curve(or stretch shape) to use for the distortion.
 * Pass to `ArtLayer.applySpherize()`.
 */
declare enum SpherizeMode {
     HORIZONTAL,
     NORMAL,
     VERTICAL
}

/**
 * The method of zigzagging to use.
 * Pass to `ArtLayer.applyZigZag()`.
 */
declare enum ZigZagType {
     AROUNDCENTER,
     OUTFROMCENTER,
     PONDRIPPLES
}

/**
 * Method to use for interpreting selective color adjustment specifications:
 * `ABSOLUTE = %` of the whole.
 * `RELATIVE = %` of the existing color amount.
 * Pass to `ArtLayer.selectiveColor()`.
 */
declare enum AdjustmentReference {
     ABSOULTE,
     RELATIVE
}

/**
 * The type of wave to use.
 * Pass to `ArtLayer.applyWave()`.
 */
declare enum WaveType {
     SINE,
     SQUARE,
     TRIANGULAR
}

/**
 * The color profile to use for a new document.
 * Pass to `Document.add()`.
 * Also used in `ContractSheetOptions` and `PicturePackageOptions`.
 */
declare enum NewDocumentMode {
     BITMAP,
     CMYK,
     GRAYSCALE,
     LAB,
     RGB
}

/**
 * The fill type of a new document, passed to `Document.add()`.
 */
declare enum DocumentFill {
     BACKGROUNDCOLOR,
     TRANSPARENT,
     WHITE
}

/**
 * The destination, if any, for batch-processed files, specified in the `BatchOptions` used with the `Application.batch()` method.
 * `FOLDER`: Save modified versions of the files to a new location(leaving the originals unchanged).
 * `NODESTINATION`: Leaves all files open.
 * `SAVEANDCLOSE`: Save changes and close the files.
 */
declare enum BatchDestinationType {
     FOLDER,
     NODESTINATION,
     SAVEANDCLOSE
}

/**
 * File naming options for the `BatchOptions` used with the `Application.batch()` method.
 */
declare enum FileNamingType {
     DDMM,
     DDMMYY,
     DOCUMENTNAMELOWER,
     DOCUMENTNAMEMIXED,
     DOCUMENTNAMEUPPER,
     EXTENDSIONLOWER,
     EXTENDSIONUPPER,
     MMDD,
     MMDDYY,
     SERIALLETTERLOWER,
     SERIALLETTERUPPER,
     SERIALNUMBER1,
     SERIALNUMBER2,
     SERIALNUMBER3,
     SERIALNUMBER4,
     YYDDMM,
     YYMMDD,
     YYYYMMDD
}

/**
 * The fonts to use for the Web photo gallery captions and other text.
 * Used in `GalleryBannerOptions`, `GalleryImagesOptions` and `GalleryThumbnailOptions`.
 * Also used in `PicturePackageOptions`.
 */
declare enum GalleryFontType {
     ARIAL,
     COURIERNEW,
     HELVETICA,
     TIMESNEWROMAN
}

/**
 * The type of magnification to use when viewing an image.
 * Used in `PresentationOptions`.
 */
declare enum MagnificationType {
     ACTUALSIZE,
     FITPAGE
}

/**
 * The method to use for transition from one image to the next in a PDF presentation.
 * Used in `PresentationOptions`.
 */
declare enum TransitionType {
     BLINDSHORIZONTAL,
     BLINDSVERTICAL,
     BOXIN,
     BOXOUT,
     DISSOLVE,
     GLITTERDOWN,
     GLITTERRIGHT,
     GLITTERRIGHTDOWN,
     NONE,
     RANDOM,
     SPLITHORIZONTALIN,
     SPLITHORIZONTALOUT,
     SPLITVERTICALOUT,
     WIPEDOWN,
     WIPELEFT,
     WIPERIGHT,
     WIPEUP
}

/**
 * The color to use for text displayed over gallery images as an antitheft deterrent.
 * Used in `GallerySecurityOptions`.
 * Also used in `PicturePackageOptions`.
 */
declare enum GallerySecurityTextColorType {
     BLACK,
     CUSTOM,
     WHITE
}

/**
 * The position of the text displayed over gallery images as an antitheft deterrent.
 * Used in `GalleryOptions`.
 * Also used in `PicturePackageOptions`.
 */
declare enum GallerySecurityTextPositionType {
     CENTERED,
     LOWERLEFT,
     LOWERRIGHT,
     UPPERLEFT,
     UPPERRIGHT
}

/**
 * The orientation of the text displayed over gallery iimages as an antitheft deterrent.
 * Used in `GalleryOptions`.
 * Also used in `PicturePackageOptions`.
 */
declare enum GallerySecurityTextRotateType {
     CLOCKWISE45,
     CLOCKWISE90,
     COUNTERCLOCKWISE45,
     COUNTERCLOCKWISE90,
     ZERO
}

/**
 * The content to use for text displayed over gallery images as an antitheft deterrent.
 * Used in `GallerySecurityOptions`.
 * *Note:*
 * All types draw from the image's file information except `CUSTOMTEXT`.
 */
declare enum GallerySecurityType {
     CAPTION,
     COPYRIGHT,
     CREDIT,
     CUSTOMTEXT,
     FILENAME,
     NONE,
     TITLE
}

/**
 * The size of thumbnail images in the web photo gallery.
 * Used in `GalleryThumbnailOptions`.
 */
declare enum GalleryThumbSizeType {
     CUSTOM,
     LARGE,
     MEDIUM,
     SMALL
}

/**
 * The type of proportions to constrain for images.
 * Used in `GalleryImagesOptions`.
 */
declare enum GalleryConstrainType {
     CONSTRAINBOTH,
     CONSTRAINHEIGHT,
     CONSTRAINWIDTH
}

/**
 * The function or meaning of text in a Picture Package.
 * Used in `PicturePackageOptions`.
 */
declare enum PicturePackageTextType {
     CAPTION,
     COPYRIGHT,
     CREDIT,
     FILENAME,
     NONE,
     ORIGIN,
     USER
}

/**
 * The format in which to open the document, using `app.open()`.
 * *Note:* `PHOTOCD` is deprecated. Kodak PhotoCD is now found in the Goodies folder on the Adobe Photoshop Install DVD.
 * *Note:* The `DICOM` options is for the Extended Version only.
 */
declare enum OpenDocumentType {
     ALIASPIX,
     BMP,
     CAMERARAW,
     COMPUSERVERGIF,
     DICOM,
     ELECTRICIMAGE,
     EPS,
     EPSPICTUREVIEW,
     EPSTIFFPREVIEW,
     FILMSTRIP,
     JPEG,
     PCX,
     PDF,
     PHOTOCD,
     PHOTOSHOP,
     PHOTOSHOPDCS_1,
     PHOTOSHOPDCS_2,
     PHOTOSHOPEPS,
     PHOTOSHOPPDF,
     PICTFILEFORMAT,
     PICTRESOURCEFORMAT,
     PIXAR,
     PNG,
     PORTABLEBITMAP,
     RAW,
     SCITEXCT,
     SGIRGB,
     SOFTIMAGE,
     TARGA,
     TIFF,
     WAVEFRONTRLA,
     WIRELESSBITMAP
}

/**
 * Cache to be targeted in an `Application.purge()` operation.
 */
declare enum PurgeTarget {
     ALLCACHES,
     CLIPBOARDCACHE,
     HISTORYCACHES,
     UNDOCACHES
}

/**
 * The down sample method to use.
 * Used in `PDFSaveOptions`.
 */
declare enum PDFResample {
     NONE,
     PDFAVERAGE,
     PDFBICUBIC,
     PDFSUBSAMPLE
}

/**
 * The type of compression to use when saveing a document in PDF format.
 * Used in `PDFSaveOptions`.
 */
declare enum PDFEncoding {
     JPEG,
     JPEG2000HIGH,
     JPEG2000LOSSLESS,
     JPEG2000LOW,
     JPEG2000MED,
     JPEG2000MEDHIGH,
     JPEG2000MEDLOW,
     JPEGHIGH,
     JPEGLOW,
     JPEGMED,
     JPEGMEDHIGH,
     JPEGMEDLOW,
     NONE,
     PDFZIP,
     PDFZIP4BIT
}

/**
 * The PDF version to make the document compatible with.
 * Used in `PDFSaveOptions`.
 */
declare enum PDFCompatibility {
     PDF13,
     PDF14,
     PDF15,
     PDF16,
     PDF17,
}

/**
 * The PDF standard to make the document compatible with.
 * Used in `PDFSaveOptions`.
 */
declare enum PDFStandard {
     NONE,
     PDFX1A2001,
     PDFX1A2003,
     PDFX32002,
     PDFX32003,
     PDFX42008
}

/**
 * The application's preferred behavior when saving a document.
 * See `Preferences.appendExtension` and `imagePreviews`.
 */
declare enum SaveBehavior {
     ALWAYSSAVE,
     ASKWHENSAVING,
     NEVERSAVE
}

/**
 * The preferred color-selection tool, set in `Preferences`.
 */
declare enum ColorPicker {
     ADOBE,
     APPLE,
     PLUGIN,
     WINDOWS
}

/**
 * The preferred level of detail in the history log, set in `Preferences`:
 * `CONCISE`: Save a concise history log.
 * `DETAILED`: Save a detailed history log.
 * `SESSIONONLY`: Save history log only for a session.
 */
declare enum EditLogItemsType {
     CONCISE,
     DETAILED,
     SESSIONONLY
}

/**
 * The preferred type size to use for font previews in the type tool font menus, set in `Preferences`.
 */
declare enum FontPreviewType {
     HUGE,
     EXTRALARGE,
     LARGE,
     MEDIUM,
     NONE,
     SMALL
}

/**
 * The preferred line style for the nonprinting grid displayed over images, set in `Preferences`.
 */
declare enum GridLineStyle {
     DASHED,
     DOTTED,
     SOLID
}

/**
 * The preferred size of grid line spacing, set in `Preferences`.
 */
declare enum GridSize {
     LARGE,
     MEDIUM,
     NONE,
     SMALL
}

/**
 * The preferred line style for the nonprinting grid displayed over images, set in `Preferences`.
 */
declare enum GuideLineStyle {
     DASHED,
     SOLID
}

/**
 * The preferred policy for checking whether to maximize compatibility when opening PSD files, set in `Preferences.maximizeCompatibility`.
 */
declare enum QueryStateType {
     ALWAYS,
     ASK,
     NEVER
}

/**
 * The preferred pointer for the following tools:
 * Eraser, Pencil, Paintbrush, Healing Brush, Rubber Stamp, Pattern Stamp, Smudge, Blur, Sharpen, Dodge, Burn, Sponge.
 * Set in `Preferences`.
 */
declare enum OtherPaintingCursors {
     PRECISEOTHER,
     STANDARDOTHER
}

/**
 * The preferred pointer for the following tools:
 * Marquee, Lasso, Polygonal Lasso, Magic Wand, Crop, Slice, Patch Eyedropper, Pen, Gradient, Line, Paint Bucket, Magnetic Lasso, Magnetic Pen, Freeform Pen, Measure, Color Sampler.
 * Set in `Preferences`.
 */
declare enum PaintingCursors {
     BRUSHSIZE,
     PRECISE,
     STANDARD
}

/**
 * The preferred measurement to use for type points, set in `Preferences.pointSize`:
 * `POSTSCRIPT` = 72 points/inch.
 * `TRADITIONAL` = 72.27 points/inch.
 */
declare enum PointType {
     POSTSCRIPT,
     TRADITIONAL
}

/**
 * The preferred location of history log data, set in `Preferences.saveLogItems`.
 */
declare enum SaveLogItemsType {
     LOGFILE,
     LOGFILEANDMETADATA,
     METADATA
}

/**
 * The preferred type size to use for panels and dialogs, set in `Preferences`.
 */
declare enum FontSize {
     LARGE, 
     MEDIUM,
     SMALL
}

/**
 * The preferred unit for text character measurements, set in `Preferences`.
 */
declare enum TypeUnits {
     MM, 
     PIXELS,
     POINTS
}

/**
 * The type fo color handling to use for ColorHandling.
 */
declare enum PrintColorHandling {
     PRINTERMANAGED,
     PHOTOSHOPMANAGED,
     SEPARATIONS
}

/**
 * Method to use to smooth edges by softening the color transition between edge pixels and background pixels.
 * Used in `TextItem.antiAliasMethod`.
 */
declare enum AntiAlias {
     CRISP,
     NONE,
     SHARP,
     SMOOTH,
     STRONG
}

/**
 * The type of kerning to use for characters.
 * Used in `TextItem.autoKerning`.
 */
declare enum AutoKernType {
     MANUAL,
     METRICS,
     OPTICAL
}

/**
 * The type of text, used in `TextItem.kind`.
 * `PARAGRAPHTEXT`: Text that wraps within a bounding box.
 * `POINTTEXT`: Text that does not wrap.
 */
declare enum TextType {
     PARAGRAPHTEXT,
     POINTTEXT
}

/**
 * The capitalization style to use in text.
 * Used in `TextItem.capitalization`.
 */
declare enum TextCase {
     ALLCAPS,
     NORMAL,
     SMALLCAPS
}

/**
 * The placement of paragraph text within the bounding box.
 * Used in `TextItem.justification`.
 */
declare enum Justification {
     CENTER,
     CENTERJUSTIFIED,
     FULLYJUSTIFIED,
     LEFT,
     LEFTJUSTIFIED,
     RIGHT,
     RIGHTJUSTIFIED
}

/**
 * The language to use for text. Used in `TextItem.language`.
 */
declare enum Language {
     BRAZILLIANPORTUGUESE,
     CANADIANFRENCH,
     DANISH,
     DUTCH,
     ENGLISHUK,
     ENGLISHUSA,
     FINNISH,
     FRENCH,
     GERMAN,
     ITALIAN,
     NORWEGIAN,
     NYNORSKNORWEGIAN,
     OLDGERMAN,
     PORTUGUESE,
     SPANISH,
     SWEDISH,
     SWISSGERMAN
}

/**
 * The composition method to use to optimize the specified hyphenation and justification options.
 * Used in `TextItem.textComposer`.
 */
declare enum TextComposer {
     ADOBEEVERYLINE,
     ADBOESINGLELINE     
}

/**
 * The placement of text underlining.
 * Used in `TextItem.underline`.
 * *Note:*
 * `UNDERLINELEFT` and `UNDERLINERIGHT` are valid only when `direction = Direction.VERTICAL`.
 */
declare enum UnderlineType {
     UNDERLINELEFT,
     UNDERLINEOFF,
     UNDERLINERIGHT
}

/**
 * The warp style to use for text.
 * Used in `TextItem.warpStyle`.
 */
declare enum WarpStyle {
     ARC,
     ARCH,
     ARCLOWER,
     ARCUPPER,
     BULGE,
     FISH,
     FISHEYE,
     FLAG,
     INFLATE,
     NONE,
     RISE,
     SHELLLOWER,
     SHELLUPPER,
     SQUEEZE,
     TWIST,
     WAVE
}

/**
 * The style of strikethrough to use in text.
 * Used in `TextItem.strikeThru`.
 */

declare enum StrikeThruType {
     STRIKEBOX,
     STRIKEHEIGHT,
     STRIKEOFF
}