declare class ColorSamplers {
    readonly [index: number]: ColorSampler
    /** @readonly The number of elements in the ColorSamplers collection. */
    readonly length: number
    /** @readonly The containing document. */
    readonly parent: Document
    /** @readonly The class name of the referenced ColorSamplers object. */
    readonly type: string

    /**
     * Creates a new color sampler object and adds it to this collection.
     * The `position` parameter(x,y) represents the new horizontal and vertical locations of the moved color sampler.
     */
    add(position: UnitValue[]): void
    /** 
     * Removes all `ColorSampler` objects from the `ColorSamplers` collection.
     */
    removeAll(): void
}