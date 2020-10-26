/**
 * ExtendScript defines the JavaScript class File to encapsulate file-system references in a platform-independent manner.
 */
declare interface File {}
declare interface FileConstructor {
    new(path: string): File
}

declare var File: FileConstructor