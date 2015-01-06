/**
 * @fileoverview 
 */


goog.provide('jsopenxml.worksheet.Cols');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.worksheet = window.jsopenxml.worksheet || {};
//--- intellisense end -------------------------------------------------------//

goog.require('jsopenxml.worksheet.Col');

/**
 * @constructor
 */
jsopenxml.worksheet.Cols = function (cols) {
    this.element = cols;

    this.cols = goog.array.map(
        // Filter out the non element nodes
        goog.array.filter(
            cols.childNodes,
            function(col){
                // If not an element node skip
                return (col.nodeType == 1);
            }, 
            this
        ), function (col) {
        return new jsopenxml.worksheet.Col(col);
    }, this);
};

/**
 * Get column width
 * @param {number} columnIndex
 * @param {number|null} Returns the column width or null if a column index
 * has been specified out of bounds.
 */
jsopenxml.worksheet.Cols.prototype.getColumnWidth = function (columnIndex) {
    var col = goog.array.find(this.cols, function (col) {
        return goog.math.Range.containsPoint(col.getRange(), columnIndex);
    }, this);
    if (!col) return null;
    return col.getWidth();
};

