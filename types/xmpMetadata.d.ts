/**
 * Camera RAW image XMP metadata.
 * 
 * For camera RAW image files, the XMP metadata is stored in a sidecard file, which is a file in the same folder as the RAW file with the same base name and an XMP extension.
 */
declare class xmpMetadata {
    readonly parent: Document
    /**
     * A string containing the XMP metadata in XML(RDF) format. See the XMP Specification for details of this format.
     */
    rawData: string
    readonly typename: string
}