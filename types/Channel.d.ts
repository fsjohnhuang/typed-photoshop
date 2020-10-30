/**
 * Information about a color element in the image.
 * Access through the `Document.channels` collection. You can access an individual channel object in this list by index or by name.
 * For example, this accesses a channel object in the active document by name and assigns an opacity value:
 * `app.activeDocument.channels.getByName('my Channel').opacity = 22`
 * A channel is analogous to a plate in the printing process that applies a single color. The document's color mode determines the number of default channels.
 * for example, an RGB document has three channels, red, green, and blue. A color can also have an alpha channel, which stores selections as masks, or a spot channel, which stores spot colors.
 */
declare class Channel {
    /**
     * The color of the channel.
     * Not valid when `kind = ChannelType.COMPONENT`.
     */
    color: SolidColor
    /**
     * @readonly A histogram of the color of the channel.
     * The array contains 256 members.
     * Not valid when `kind = ChannelType.COMPONENT`. For component channel histogram values,
     * use the histogram property of the Document object instead.
     */
    readonly histogram: number[]
    /**
     * The type of channel.
     */
    kind: ChannelType
    /**
     * The name of channel.
     */
    name: string
    /**
     * The opacity to use for alpha channels or the solidity to use for spot channels.
     * Valid only when `kind = ChannelType.MASKEDAREA` or `SELECTEDAREA`.
     */
    opacity: number[]
    readonly parent: Document
    readonly typename: string
    /**
     * True if the channel is visible.
     */
    visible: boolean

    /** Duplicates the channel. */
    duplicate(targetDocument?: Document): Channel
    /** Merges a spot channel into the component channels. */
    merge(): void
    /** Deletes the channel. */
    remove(): void
}