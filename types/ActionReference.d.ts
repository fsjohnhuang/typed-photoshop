/**
 * This object provides information about what the action is referring to.
 * For example, when referring to the name of something you might use keyName.
 * The reference would also need to know what name you are referring to.
 * In this case you could use classDocument for the name of the document or classLayer for the name of the layer.
 * It can be used for low-level access into Photoshop. Contains data associated with an `ActionDescriptor`.
 */
declare class ActionReference{
    /** 
     * @readonly The class name of the referenced `ActionReference` object 
     */
    readonly typename: string

    /** 
     * Gets the reference contained in this reference. 
     * Container references provide additional pieces of the reference.
     * This looks like another reference, but it is actually part of the same reference.
     */
    getContainer(): ActionReference
    /** Gets a number representing the class of the object. */
    getDesiredClass(): number
    /** Gets the enumeration type. */
    getEnumeratedType(): number
    /** Gets the enumeration value. */
    getEnumeratedValue(): number
    /** Gets the form of this action reference. */
    getForm(): ReferenceFormType
    /** Gets the identifier value for a reference whose form is identifier. */
    getIdentifier(): number
    /** Gets the index value for a reference in a list or array. */
    getIndex(): number
    /** Gets the name of a reference */
    getName(): number
    /** Gets the offset of the object's index value. */
    getOffset(): number
    /** Gets the property ID value. */
    getProperty(): number
    /** Puts a new class form and class type into the reference. */
    putClass(desiredClass: number): void
    /** Puts an enumeration type and ID into a reference along with the desired class for the reference. */
    putEnumerated(desiredClass: number, enumType: number, value: number): void
    /** Puts a new identifier and value into the reference. */
    putIdentifier(desiredClass: number, value: number): void
    /** Puts a new index and value into the reference. */
    putIndex(desiredClass: number, vlaue: number): void
    /** Puts a new name and value into the reference. */
    putName(desiredClass: number, vlaue: number): void
    /** Puts a new offset and value into the reference. */
    putOffset(desiredClass: number, vlaue: number): void
    /** Puts a new property and value into the reference. */
    putProperty(desiredClass: number, vlaue: number): void
}