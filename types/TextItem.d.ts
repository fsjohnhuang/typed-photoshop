/**
 * The text in a ArtLayer object whose `kind` property is `LayerKind.TEXT`.
 * Access this object in the `ArtLayer.textItem` property.
 * Many of the properties use the `UnitValue` type, which combines a measurement value with a measurement unit. For informatin about this type, see the JavaScript Tools Guide.
 * @example
 * myLayers[1].textItem.contents = "Layer in " + textArray[i] + " Set Inside "
 */
declare class TextItem {
    /**
     * True to use alternate ligatures.
     * *Note:*
     * Alternate ligatures are the same as Discretionary Ligatures. See Adobe Photoshop Help for more information.
     */
    alternateLigatures: boolean
    /**
     * The method of anti aliasing to use.
     */
    antiAliasMethod: AntiAlias
    /**
     * The auto kerning option to use.
     */
    autoKerning: AutoKernType
    /**
     * The percentage to use for auto(default) leading(in points).
     * Valid only when `useAutoLeading = true`.
     */
    autoLeadingAmount: number
    /**
     * The unit value to use in the baseline offset of text.
     */
    baselineShift: UnitValue
    /**
     * The text case.
     */
    capitalization: TextCase
    /**
     * The text color.
     */
    color: SolidColor
    /**
     * The actual text in the layer.
     */
    contents: string
    /**
     * The disired amount by which to scale the horizontal size of the text letters.
     * A percentage value; at 100, the width of characters is not scaled.
     * Valid only when `justification = Justification.CENTERJUSTIFIED, FULLYJUSTIFIED, LEFTJUSTIFIED, RIGHTJUSTIFIED`.
     * When used, the `minimumGlyphScaling` and `maximumGlyphScaling` values are also requried.
     */
    desiredGlyphScaling: number
    /**
     * The amount of space between letters(at 0, no space is added between letters).
     * Equivalent to *Letter Spacing* in the Justification dialog(Select *Justification* on the Paragraphs palette menu).
     * Valid only when `justification = Justification.CENTERJUSTIFIED, FULLYJUSTIFIED, LEFTJUSTIFIED, RIGHTJUSTIFIED`.
     * When used, the `minimumLetterScaling` and `maximumLetterScaling` values are also requried.
     */   
    desiredLetterScaling: number
    /**
     * The amount (percentage) of space between words(at 100, no additional space is added between words).
     * Equivalent to *Word Spacing* in the Justification dialog(Select *Justification* on the Paragraphs palette menu).
     * Valid only when `justification = Justification.CENTERJUSTIFIED, FULLYJUSTIFIED, LEFTJUSTIFIED, RIGHTJUSTIFIED`.
     * When used, the `minimumWordScaling` and `maximumWordScaling` values are also requried.
     */   
    desiredWordScaling: number
    /** The text orientation. */
    direction: Direction
    /**
     * True to use faux bold (default: `false`)
     * Setting this to true is equivalent to selecting text and clicking Faux Bold in the Character palette.
     */
    fauxBold: boolean
    /**
     * True to use faux italic(default `false`)
     * Setting this to true is equivalent to selecting text and clicking Faux Italic in the Character palette.
     */
    fauxItalic: boolean
    /**
     * The amount (unit value) to indent the first line of paragraphs.
     */
    firstLineIndent: UnitValue
    /**
     * The text face of the character. Use the PostScript Name of the font.
     * See `TextFont` and use the `postScritName` property.
     */
    font: string
    /**
     * True to use Roman hanging punctuation.
     */
    hangingPunctuation: boolean
    /**
     * The height of the bounding box (unit value) for paragraph text.
     * Valid only when `kind = TextType.PARAGRAPHTEXT`
     */
    height: UnitValue
    /**
     * Character scaling (horizontal) in proportion to verticalScale (in percentage value).
     */
    horizontalScale: number
    /**
     * The number of letters after which the hyphenation in word wrap is allowed.
     */
    hyphenateAfterFirst: number
    /**
     * The number of letters before which hyphenation in word wrap is allowed.
     */
    hyphenateBeforeLast: number
    /**
     * True to allow hyphenation in word wrap of capitalized words.
     */
    hyphenateCapitalWords: boolean
    /**
     * The minimum number of letters a word must have in order for hyphenation in word wrap to be allowed.
     */
    hyphenateWordsLongerThan: number
    /**
     * True to use hyphenation in word wrap.
     */
    hyphenation: boolean
    /**
     * The distance at the end of a line that will cause a word to break in unjustified type.
     */
    hyphenationZone: UnitValue
    /**
     * The maximum number of consecutive lines that can be end with a hyphentated word.
     */
    hyphenLimit: number
    /**
     * The paragraph justification.
     */
    justification: Justification
    /**
     * The text-wrap type.
     */
    kind: TextType
    /**
     * The language to use.
     */
    language: Language
    /**
     * The leading amount.
     */
    leading: UnitValue
    /**
     * The amount of space to indent text from the left.
     */
    leftIndent: UnitValue
    /**
     * True to use ligatures.
     */
    ligatures: boolean
    /**
     * The maximum amount by which to scale the horizontal size of the text letters.
     * A percentage value; at 100, the width of characters is not scaled.
     * Valid only when `justification = Justification.CENTERJUSTIFIED, FULLYJUSTIFIED, LEFTJUSTIFIED, RIGHTJUSTIFIED`.
     * When used, the `minimumGlyphScaling` and `maximumGlyphScaling` values are also requried.
     */
    maximumGlyphScaling: number
    /**
     * The maximum amount of space between letters(at 0, no space is added between letters).
     * Equivalent to *Letter Spacing* in the Justification dialog(Select *Justification* on the Paragraphs palette menu).
     * Valid only when `justification = Justification.CENTERJUSTIFIED, FULLYJUSTIFIED, LEFTJUSTIFIED, RIGHTJUSTIFIED`.
     * When used, the `minimumLetterScaling` and `maximumLetterScaling` values are also requried.
     */   
    maximumLetterScaling: number
    /**
     * The maximum amount (percentage) of space between words(at 100, no additional space is added between words).
     * Equivalent to *Word Spacing* in the Justification dialog(Select *Justification* on the Paragraphs palette menu).
     * Valid only when `justification = Justification.CENTERJUSTIFIED, FULLYJUSTIFIED, LEFTJUSTIFIED, RIGHTJUSTIFIED`.
     * When used, the `minimumWordScaling` and `maximumWordScaling` values are also requried.
     */   
    maximumWordScaling: number
    /**
     * The minimum amount by which to scale the horizontal size of the text letters.
     * A percentage value; at 100, the width of characters is not scaled.
     * Valid only when `justification = Justification.CENTERJUSTIFIED, FULLYJUSTIFIED, LEFTJUSTIFIED, RIGHTJUSTIFIED`.
     * When used, the `minimumGlyphScaling` and `maximumGlyphScaling` values are also requried.
     */
    minimumGlyphScaling: number
    /**
     * The minimum amount of space between letters(at 0, no space is added between letters).
     * Equivalent to *Letter Spacing* in the Justification dialog(Select *Justification* on the Paragraphs palette menu).
     * Valid only when `justification = Justification.CENTERJUSTIFIED, FULLYJUSTIFIED, LEFTJUSTIFIED, RIGHTJUSTIFIED`.
     * When used, the `minimumLetterScaling` and `maximumLetterScaling` values are also requried.
     */   
    minimumLetterScaling: number
    /**
     * The minimum amount (percentage) of space between words(at 100, no additional space is added between words).
     * Equivalent to *Word Spacing* in the Justification dialog(Select *Justification* on the Paragraphs palette menu).
     * Valid only when `justification = Justification.CENTERJUSTIFIED, FULLYJUSTIFIED, LEFTJUSTIFIED, RIGHTJUSTIFIED`.
     * When used, the `minimumWordScaling` and `maximumWordScaling` values are also requried.
     */   
    minimumWordScaling: number
    /**
     * True to disallow line break in this text.
     * *Tip*: When true for many consecutive characters, can prevent word wrap and thus may prevent some text from appearing on the screen.
     */
    noBreak: boolean
    /**
     * True to use old style type.
     */
    oldStyle: boolean
    readonly parent: ArtLayer
    /**
     * The position of origin for the text.
     * The array members specify the X and Y coordinates.
     * Equivalent to clicking the text tool at a point in the document to create the point of origin for the text.
     */
    position: UnitValue[]
    /**
     * The amount of space to indent text from the right.
     */
    rightIndent: UnitValue
    /**
     * The font size in `UnitValue`. NOTE: Type was `points` for CS3 and older.
     */
    size: UnitValue
    /**
     * The amount of space to use after each paragraph.
     */
    spaceAfter: UnitValue
    /**
     * The amount of space to use before each paragraph.
     */
    spaceBefore: UnitValue
    /**
     * The text strike-through option to use.
     */
    strikeThru: StrikeThruType
    /**
     * The composition method to use to evaluate line breaks and optimize the specified hyphenation and justifcation options.
     * Valid only when `kind = TextType.PARAGRAPHTEXT`
     */
    textComposer: TextComposer
    /**
     * The amount of uniform spacing between multiple characters.
     * Tracking units are 1/1000 of an em space. The width of an em space is relative to the current type size.
     * In a 1-point font, 1 em equals to 1 point; in a 10-point font, 1 em equals to 10 points. So, for example, 100 units in a 10-point font are equivalent to 1 point.
     */
    tracking: number
    readonly typename: string
    /**
     * The text underlining option.
     */
    underline: UnderlineType
    /**
     * True to use a font's built-in leading information.
     */
    useAutoLeading: boolean
    /**
     * Vertical character scaling in proportion to `horizontalScale`(a percentage value).
     */
    verticalScale: number
    /**
     * The warp direction.
     */
    warpDirection: Direction
    /**
     * The horizontal distortion of warp(a percentage value).
     */
    warpHorizontalDistortion: number
    /**
     * The style of warp to use.
     */
    warpStyle: WarpStyle
    /**
     * The vertical distortion of warp(a percentage value).
     */
    warpVerticalDistortion: number
    /**
     * The width of the bounding box for text paragraph.
     * Valid only when `kind = TextType.PARAGRAPHTEXT`
     */
    width: UnitValue

    /**
     * Converts the text item and its containing layer to a fill layer with the text changed to a clipping path.
     */
    convertToShape(): void
    /**
     * Creates a clipping path from the outlines of the actual text items (such as letters or words).
     */
    createPath(): void
}