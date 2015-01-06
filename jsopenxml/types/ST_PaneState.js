/**
 * @fileoverview State of the sheet's pane.
 */

goog.provide('jsopenxml.types.ST_PaneState');
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
jsopenxml.types.ST_PaneState = {
    /**
     * Panes are frozen, but were not split being frozen. In
     * this state, when the panes are unfrozen again, a single
     * pane results, with no split.
     * In this state, the split bars are not adjustable.
     */
    frozen: "frozen",

    /**
     * Panes are frozen and were split before being frozen. In
     * this state, when the panes are unfrozen again, the split
     * remains, but is adjustable.
     */
    frozenSplit: "frozenSplit",

    /**
     * Panes are split, but not frozen. In this state, the split
     * bars are adjustable by the user.
     */
    split: "split"

};