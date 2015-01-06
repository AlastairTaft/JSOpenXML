/**
 * @fileoverview Handles the mergeCell element
 */

goog.provide('jsopenxml.worksheet.MergeCell');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.worksheet = window.jsopenxml.worksheet || {};
//--- intellisense end -------------------------------------------------------//

/**
 * @constructor
 * @param {Element} mergeCell
 */
jsopenxml.worksheet.MergeCell = function (mergeCell) {
    this.element = mergeCell;

    var ref = mergeCell.getAttribute("ref");
    this.range = new jsopenxml.math.Range(ref);
};


/**
 * Get the range this merge covers.
 * @return {jsopenxml.math.Range}
 */
jsopenxml.worksheet.MergeCell.prototype.getRange = function () {
    return this.range;
};
