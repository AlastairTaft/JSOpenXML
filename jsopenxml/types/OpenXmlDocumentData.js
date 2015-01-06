/**
 * @fileoverview A class representing an openxml document.
 */


goog.provide('jsopenxml.types.OpenXmlDocumentData');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.types = window.jsopenxml.types || {};
//--- intellisense end -------------------------------------------------------//

/**
 * @constructor
 */
jsopenxml.types.OpenXmlDocumentData = function () {
    // After loading or opening an open xml document and unziping it's contents.
    // All the data should be stored against on object of this type.
    // The key is the file structure path and the value is the Document.
    // The value should be of type Document.
    // TODO How to handle images and other content types?
};


// NOTE: Should not prototype any methdos here as the keys are used to represent
// document paths.