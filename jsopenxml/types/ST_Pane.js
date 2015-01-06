/**
 * @fileoverview Defines the names of the four possible panes into which the 
 * view of a workbook in the application can be split.
 */

goog.provide('jsopenxml.types.ST_Pane');
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
 * @enum
 */
jsopenxml.types.ST_Pane = {
    /**
     * Bottom left pane, when both vertical and horizontal
     * splits are applied.
     * This value is also used when only a horizontal split has
     * been applied, dividing the pane into upper and lower
     * regions. In that case, this value specifies the bottom
     * pane.
     */
    bottomLeft: "bottomLeft",

    /**
     * Bottom right pane, when both vertical and horizontal
     * splits are applied. 
     */
    bottomRight: "bottomRight",

    /**
     * Top left pane, when both vertical and horizontal splits
     * are applied.
     * This value is also used when only a horizontal split has
     * been applied, dividing the pane into upper and lower
     * regions. In that case, this value specifies the top pane.
     * This value is also used when only a vertical split has
     * been applied, dividing the pane into right and left
     * regions. In that case, this value specifies the left pane
     */
    topLeft: "topLeft",

    /**
     * Top right pane, when both vertical and horizontal
     * splits are applied.
     * This value is also used when only a vertical split has
     * been applied, dividing the pane into right and left
     * regions. In that case, this value specifies the right
     * pane.
     */
    topRight: "topRight"
};