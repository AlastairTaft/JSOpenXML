/**
 * @fileoverview This simple type defines the possible states for sheet visibility.
 */

goog.provide('jsopenxml.types.ST_SheetState');
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
 * Pattern fill types
 * @enum
 */
jsopenxml.types.ST_SheetState = {
    /**
     * Indicates the workbook window is hidden, but can be
     * shown by the user via the user interface.
     */
    hidden: "hidden",

    /**
     * Indicates the sheet is hidden and cannot be shown in
     * the user interface (UI). This state is only available
     * programmatically.
     */
    veryHidden: "veryHidden",

    /**
     * Indicates the sheet is visible.
     */
    visible: "visible"
}