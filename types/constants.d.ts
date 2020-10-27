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
