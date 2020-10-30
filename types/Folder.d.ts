/**
 * ExtendScript defines the JavaScript class Folder to encapsulate file-system references in a platform-independent manner.
 */
declare interface Folder {}
declare interface FolderConstructor {
    new (path: string): Folder
    (path: string): Folder
}

declare var Folder: FolderConstructor