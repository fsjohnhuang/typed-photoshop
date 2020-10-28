/**
 * An object within a document that contains the visual elements of the image(equivalent to  a layer in the Adobe Photoshop application)
 * Access an art layer in a document through the `Document.artLayers` collection. You can access a layer by name;
 * For example: `var layerRef = app.activeDocument.artLayers.getByName('my layer'); layerRef.allLocked = true;`
 * Access the art layer in a layer set through the `LayerSet.astLayers` collection in the parent set. 
 */
declare class ArtLayer {
    /** Read-write. True to completely lock the contents and settings of this layer. */
    allLocked: boolean
    blendMode: BlendMode
    bounds: UnitValue[]
    boundsNoEffects: UnitValue[]
    fillOpacity: number 
    filterMaskDensity: number
    filterMaskFeather: number
    grouped: boolean
    isBackgroundLayer: boolean
    kind: LayerKind
    layerMaskDensity: number
    layerMaskFeather: number
    readonly linkedLayers: ArtLayer[] | LayerSet
    name: string
    opacity: number
    readonly parent: Document
    pixelsLocked: boolean
    positionLocked: boolean
    textItem: TextItem
    transparentPixelsLocked: boolean
    readonly typename: string
    vectorMaskDensity: number
    vectorMaskFeather: number
    visible: boolean
    xmpMeatdata: xmpMetadata

    adjustBrightnessContrast(brightness: number, contrast: number): void
    adjustColorBalance(shadows?: number[], midtones?: number[], highlights?: number[], preserveLuminosity?: boolean): void
    adjustCurves(curveShape: [number, number][]): void
    adjustLevels(inputRangeStart: number, inputRangeEnd: number, inputRangeGamma: number, outputRangeStart: number, outputRangeEnd: number): void
    applyAddNoise(amount: number, distribution: NoiseDistribution, monochromatic: boolean): void
    applyAverage(): void
    applyBlur(): void
    applyBlurMore(): void
    applyClouds(): void
    applyCustomFilter(characteristics: number[], scale: number, offset: number): void
    applyDeInterlace(eliminateFields: EliminateFields, createFields: CreateFields): void
    applyDespeckle(): void
    applyDifferenceClouds(): void
    applyDiffuseGlow(graininess: number, glowAmount: number, clearAmount: number): void
    applyDisplace(horizontalScale: number, verticalScale: number, displacement: DisplacementMapType, undefinedareas: UndefinedAreas, displacementMapFiles: File): void
    applyDustAndScrathces(radius: number, threshold: number): void
    applyGaussianBlur(radius: number): void
    applyGlassEffect(distortion: number, smoothness: number, scaling: number, invert?: boolean, texture?: TextureType, textureFile?: File): void
    applyHighPass(radius: number): void
    applyLensBlur(source?: DepthMapSource, focalDistance?: number, invertDepthMap?: boolean, shape?: Geometry, radius?: number, bladeCurvature?: number, rotation?: number, brightness?: number, threshold?: number, amount?: number, distribution?: NoiseDistribution, monchromatic?: boolean): void
    applyLensFlare(brightness: number, flareCenter: UnitValue[], lensType: LensType): void
    applyMaximum(radius: number): void
    applyMedianNoise(radius: number): void
    appllyMinimum(radius: number): void
    applyMontionBlur(angle: number, radius: number): void
    applyNTSC(): void
    applyOceanRipple(size: number, magnitude: number): void
    applyOffset(horizontal: UnitValue, vertical: UnitValue, undefinedAreas: OffsetUndefinedAreas): void
    applyPinch(amount: number): void
    applyPolarCooridinates(converison: PolarConversionType): void
    applyRadialBlur(amount: number, blurMethod: RadialBlurMethod, blurQuality: RadialBlurQuality, blurCenter?: UnitValue): void
    applyRipple(amount: number, size: RippleSize): void
    applySharpen(): void
    applySharpenEdges(): void
    applySharpenMore(): void
    applyShear(curve: number[], undefinedAreas: UndefinedAreas): void
    applySmartBlur(radius: number, threshold: number, blurQuality: SmartBlurQuality, mode: SmartBlurMode): void
    applySpherize(amount: number, mode: SpherizeMode): void
    applyStyle(styleName: string): void
    applyTextureFill(textureFile: File): void
    applyTwirl(angle: number): void
    applyUnSharpMask(amount: number, radius: number, threshold: number): void
    applyWave(generatorNumber: number, minimumWavelength: number, maximumWavelength: number, minimumAmplitude: number, maximumAmplitude: number, horizontalScale: number, verticalScale: number, waveType: WaveType, undefinedAreas: UndefinedAreas, randomSeed: number): void
    appllyZigZag(amount: number, ridges: number, style: ZigZagType): void
    autoContrast(): void
    autoLevels(): void
    clear(): void
    copy(merge?: boolean): void
    cut(): void
    desaturate(): void
    duplicate(relativeObject?: ArtLayer | LayerSet, insertionLocation?: ElementPlacement): ArtLayer | LayerSet
    equalize(): void
    invert(): void
    link(other: ArtLayer | LayerSet): void
    merge(): ArtLayer
    mixChannels(outputChannels: number[], monochrome?: boolean): void
    move(relativeObject: ArtLayer | LayerSet, insertionLocation: ElementPlacement): void
    photoFilter(fillColor?: SolidColor, density?: number, preserveLuminosity?: boolean): void
    posterize(levels: number): void
    rasterie(target: RasterizeType): void
    remove(): void
    resize(horizontal?: number, veritcal?: number, anchor?: AnchorPosition): void
    rotate(angle: number, anchor?: AnchorPosition): void
    selectiveColor(selectionMethod: AdjustmentReference, reds?: number[], yellows?: number[], greens?: number[], cyans?: number[], blues?: number[], magentas?: number[], whites?: number[], neutrals?: number[], blacks?: number[]): void
    shadowHighlight(shadowAmount?: number, shadowWidth?: number, shadowRadius?: number, highlightAmount?: number, highlightWidth?: number, highlightRadius?: number, colorCorrection?: number, midtioneContrast?: number, blackClip?: number, whiteClips?: number): void
    threshold(level: number): void
    translate(deltaX?: UnitValue, deltaY?: UnitValue): void
    unlink(): void
}