/**
 * Options for exporting `PathItem` objects on an Adobe Illustrator file using the `Document.exportDocument()` method.
 * These options are the options that you can provide when you choose *File > Export > Paths To Illustrator*.
 */
declare class ExportOptionsIllustrator  {
    /**
     * The type of path to export(default: IllustratorPathType.DOCUMENTBOUNDS)
     */
    path: IllustratorPathType
    /**
     * The name of the path to export.
     * Valid only when `path` = `IllustratorPathType.NAMEDPATH`.
     */
    pathName: string
    readonly typename: string
}