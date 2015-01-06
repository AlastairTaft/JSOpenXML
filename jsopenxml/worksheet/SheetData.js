
/**
 * @fileoverview Provides helper functions for the sheetData xml element
 */

goog.provide('jsopenxml.worksheet.SheetData');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.worksheet = window.jsopenxml.worksheet || {};
//--- intellisense end -------------------------------------------------------//

window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.worksheet = window.jsopenxml.worksheet || {};
goog.require('jsopenxml.worksheet.Row');

/**
 * @constructor
 */
jsopenxml.worksheet.SheetData = function (sheetData) {
    this.element = sheetData;

    /**
     * An array of all the rows, the index will correspond
     * to the 0 based row index. This array will have gaps where rows are
     * blank and default settings are used.
     * @type {Array<jsopenxml.worksheet.Row>}
     */
    this.rows = [];

    goog.array.forEach(sheetData.childNodes, function (row, i) {
        // If not an element node skip
        if (row.nodeType != 1) return;

        var row = new jsopenxml.worksheet.Row(row);

        this.rows[row.getIndex()] = row;
    }, this);
};


/**
 * Get row height
 * @param {goog.math.Row|string|number} index The row index, if a number
 * is 0 based, if a numeric string is 1 based.
 * @returns {number|null} Returns null if the height is not explicitly set
 * on the row.
 */
jsopenxml.worksheet.SheetData.prototype.getRowHeight = function (index) {  
    var row = this.getRow(index);
    if (!row) return null;
    return row.getHeight();
};


/**
 * Get row
 * @param {number} 0 based index.
 * @returns {jsopenxml.worksheet.Row|null} Returns null if a row at this index 
 * doesn't exist.
 */
jsopenxml.worksheet.SheetData.prototype.getRow = function (index) {
    // TODO Improve effeciency
    return this.rows[index];
};



/**
 * Get a cell xml element
 * @returns {jsopenxml.worksheet.C|null} A 'c' element that represents a cell or 
 * null if it doesn't exist.
 * @param {goog.math.Coordinate|jsopenxml.math.Cell} coord
 */
jsopenxml.worksheet.SheetData.prototype.getCell = function (coord) {
    var top, left;
    if (coord instanceof jsopenxml.math.Cell) {
        top = coord.getRowIndex();
        left = coord.getColumnIndex();
    } else {
        top = coord.y;
        left = coord.x;
    }

    var row = this.rows[top]
    if (!row) return null;
    return row.getCell(left);
};