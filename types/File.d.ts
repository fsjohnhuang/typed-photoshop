/**
 * ExtendScript defines the JavaScript class File to encapsulate file-system references in a platform-independent manner.
 */
declare interface File {}
declare interface FileConstructor {
    new(path: string): File
    /** 
     * Gets current OS style full path.
     * For example:
     * E:\backup\newfile.txt in Windows
     * /e/backup/newfile.txt in Linux or MacOS
     */
    readonly fsName: string
    /**
     * Gets the full path. (E.g. /e/backup/newfile.txt)
     */
    readonly fullName: string
    /**
     * Gets the file name. (E.g. newfile.txt)
     */
    readonly displayName: string
    /**
     * True if this file is symbol link.
     */
    readonly alias: boolean
    /**
     * Gets the full path that represented in URI style.
     * Meaning that all non-ASCII characters have been converted to ASCII
     */
    readonly name: string
    /**
     * Gets the absolute full path that represented in URI style.
     * Meaning that all non-ASCII characters have been converted to ASCII
     */
    readonly absouteURI: string

    /**
     * Gets the relatie path that represented in URI style.
     * Meaning that all non-ASCII characters have been converted to ASCII
     */
    readonly relativeURI: string
    readonly created: Date
    readonly modified: Date
    /** Valid only on MacOS. Display "????"" on Windows. */
    readonly creator: string
    /** Encoding setting for reading and writing.  */
    readonly encoding: string
    /** True if cursor is at the end of the file. */
    readonly eof: boolean
    /** The error log of file system. */
    readonly error: string
    readonly exists: boolean
    /** True if the file is hidden. */
    hidden: boolean
    /** The number of bytes of the file. Truncates the file by setting the value to 0. */
    length: number
    /** CRLF style. */
    lineFeed: string
    readonly: boolean

    /** Changes file path */
    changePath(path: string): void
    close(): void
    /** Copys this file to other path. Override the existing file if there is a file as the same as the destination path. */
    copy(destination: string): void
    createAlias(path: string): void
    // TODO
    execute(): void
    getRelativeURL(root: string): string
    openDialog(title: string, filter: string | Function, multiple: boolean): File
    saveDialog(title: string, filter: string | Function): void
    read(amount: number): string
    readch(): string
    readln(): string
    write(text: string): boolean
    writeln(text: string): boolean
    seek(offset: number, mode: number): void
    tell(): number
    toSource(): string
    resolve(): File
    rename(name: string): boolean
    remove(): void
}

declare var File: FileConstructor