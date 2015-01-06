/**
 * @fileoverview Provides an enum of all the common content types. Used in
 * association with the [Content_Types].xml file.
 */

goog.provide('jsopenxml.types.ContentTypes');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.types = window.jsopenxml.types || {};
//--- intellisense end -------------------------------------------------------//

window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.types = window.jsopenxml.types || {};

/**
 * NOTE Have pulled this list from examples, could do with updating with all
 * types available. If this value can be constructed differently to represent 
 * the same type, all code using this enum will need to be altered. At the 
 * moment it's used by only the jsopenxml.types.Document class. Keep the use 
 * of this to a minimum as I fear it will need to be changed.
 * @enum
 */
jsopenxml.types.ContentTypes = {
    Macro_Workbook: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
    Workbook: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
    Worksheet: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
    Shared_String_Table: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
    Styles: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
    Theme: "application/vnd.openxmlformats-officedocument.theme+xml"
}   