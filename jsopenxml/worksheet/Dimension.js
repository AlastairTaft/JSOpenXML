/**
 * @fileoverview 
 */


goog.provide('jsopenxml.worksheet.Dimension');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.worksheet = window.jsopenxml.worksheet || {};
//--- intellisense end -------------------------------------------------------//

goog.require('jsopenxml.math.Range');

/**
 * @constructor
 */
jsopenxml.worksheet.Dimension = function (col) {
    this.element = col;

    var ref = col.getAttribute("ref");
    this.range = new jsopenxml.math.Range(ref);
};

/**
 * Get the range of the document
 * @return {jsopenxml.math.Range}
 */
jsopenxml.worksheet.Dimension.prototype.getRange = function () {
    return this.range;
};


