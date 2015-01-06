/**
 * @fileoverview This element represents the point size (1/72 of an inch) of the
 * Latin and East Asian text.
 */

goog.provide('jsopenxml.stringtable.Sz');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.stringtable = window.jsopenxml.stringtable || {};
//--- intellisense end -------------------------------------------------------//

/**
 * @constructor
 */
jsopenxml.stringtable.Sz = function (sz) {
    this.element = sz;

    this.val = window["parseInt"](this.element.getAttribute("val"));
};

/** 
 * Get the font size in pt (1/72 of an inch).
 * @return {number}
 */
jsopenxml.stringtable.Sz.prototype.getFontSize = function () {
    return this.val;
};
