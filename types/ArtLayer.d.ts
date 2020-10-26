/**
 * An object within a document that contains the visual elements of the image(equivalent to  a layer in the Adobe Photoshop application)
 * Access an art layer in a document through the `Document.artLayers` collection. You can access a layer by name;
 * For example: `var layerRef = app.activeDocument.artLayers.getByName('my layer'); layerRef.allLocked = true;`
 * Access the art layer in a layer set through the `LayerSet.astLayers` collection in the parent set. 
 */
declare class ArtLayer {
    /** Read-write. True to completely lock the contents and settings of this layer. */
    allLocked: boolean
}