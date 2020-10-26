/**
 * Metadata about a `document` object..
 * Access through the `Document.info` property.
 * The values can be set interactively by choosing *File > File Info*.
 */
declare class DocumentInfo {
    author: string
    authorPosition: string
    caption: string
    captionWriter: string
    category: string
    city: string
    copyrighted: CopyrightedType
    copyrightNotice: string
    country: string
    creationDate: string
    credit: string
    exif: string[]
    headline: string
    instructions: string
    jobName: string
    keywords: string[]
    ownerUrl: string
    readonly parent: Document
    provinceState: string
    source: string
    supplementalCategories: string
    title: string
    transmissionRefernce: string
    readonly typename: string
    urgency: Urgency
}