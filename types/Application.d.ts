/** 
 * Read-write.The frontmost document.
 * Setting this property is equivalent to clicking an open document in the Adobe Photoshop application to bring it to the front of the screen.
 * @throws If there is no open document, accessing this property throws an exception.
 */
type activeDocument = Document
type version = string 

/** Plays an Action Manager event. */
type executeAction = (eventID: number, descriptor?: ActionDescriptor, displayDialogs?: DialogModes) => ActionDescriptor 

/**
 * The Adobe Photoshop application object, which is the root of the object model and provides access to all other objects.
 * This object provides application-wide information, such as application defaults and available fonts. 
 * It provides many important methods, such as those for opening files and loading documents.
 * To access the properties and methods, you can use the pre-defined global variable `app`.
 * The properties and methods of the `Application` object are also avaiable at the top level; 
 * you can omit references to the `Application` object altogether.
 */
declare type Application = {
    readonly activeDocument: activeDocument
    version: version,

    executeAction: executeAction
}

declare var app: Application
declare var activeDocument: activeDocument
declare var version: version 
declare var executeAction: executeAction 