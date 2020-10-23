/**
 * The type of a layer object, in ArtLayer.kind. (Note: You can create a text layer only from an empty art layer.)
 */
declare const enum LayerKind {
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
    VIDEO
}

/**
 * The value type of an action key, returned by ActionDescriptor.getType() and ActionList.getType().
 */
declare const enum DescValueType {
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
    UNITDOUBLE
}

/**
 * Controls the type of dialogs Photoshop displays when running scripts.
 */
declare const enum DialogModes {
    ALL,
    ERROR,
    NO
}

/**
 * The layer element to rasterize, using ArtLayer.rasterize().
 */
declare const enum RasterizeType {
    ENTIRELAYER,
    FILLCONTENT,
    LAYERCLIPPINGPATH,
    LINKEDLAYERS,
    SHAPE,
    TEXTCONTENTS
}