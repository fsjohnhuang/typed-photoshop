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
declare enum MeasurementSource {
     ALLMEASUREMENTS,
     ACTIVEMEASUREMENTS
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