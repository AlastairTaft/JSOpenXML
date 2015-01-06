
/**
 * @fileoverview Provides helper functions for the sheetData xml element
 */

goog.provide('sssv.worksheet.SheetData');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.sssv = window.sssv || {};
window.sssv.worksheet = window.sssv.worksheet || {};
//--- intellisense end -------------------------------------------------------//

window.sssv = window.sssv || {};
window.sssv.worksheet = window.sssv.worksheet || {};
goog.require('sssv.worksheet.Row');

/**
 * @constructor
 */
sssv.worksheet.SheetData = function (sheetData) {
    this.element_ = sheetData;

    /**
     * An array of all the rows, the index will correspond
     * to the 0 based row index. This array will have gaps where rows are
     * blank.
     * @type {Array<sssv.worksheet.Row>}
     */
    this.rows_ = [];

    // Map the rows to easily lookup-able objects
    goog.array.forEach(sheetData.childNodes, function(row){
        var row = new sssv.worksheet.Row(row);
        this.rows_[row.getIndex()] = row;
    }, this);
};

/**
 * Get a cell xml element
 * @returns {sssv.worksheet.C|null} A 'c' element that represents a cell or null
 * if it doesn't exist.
 * @param {goog.math.Coordinate|sssv.math.Coordinate} coord
 */
sssv.worksheet.SheetData.prototype.getCell = function (coord) {
    var top, left;
    if (coord instanceof sssv.math.Coordinate) {
        top = coord.getRowIndex();
        left = coord.getColumnIndex();
    } else {
        top = coord.y;
        left = coord.x;
    }

    var row = this.rows_[top]
    if (!row) return null;
    return row.getCell(left);
};



/**
 * Get row height
 * @param {goog.math.Row|string|number} index The row index, if a number
 * is 0 based, if a numeric string is 1 based.
 * @returns {number|null} Returns null if the height is not explicitly set
 * on the row.
 */
sssv.worksheet.SheetData.prototype.getRowHeight = function (index) {
    var row = this.rows_[this.parseRowIndex_(index)];
    if (!row) return null;
    return row.getHeight();
};

/**
 * Check if the row is hidden
 * @param {goog.math.Row|string|number} index The row index, if a number
 * is 0 based, if a numeric string is 1 based.
 * @returns {boolean}
 */
sssv.worksheet.SheetData.prototype.isRowHidden = function (index) {
    var row = this.rows_[this.parseRowIndex_(index)];
    if (row) return row.isHidden();
    return false;
};


/**
 * Parses multiple row index parameter types and returns the 0 based
 * index.
 * @returns {number}
 * @param {goog.math.Row|string|number} index The row index, if a number
 * is 0 based, if a numeric string is 1 based.
 * @private
 */
sssv.worksheet.SheetData.prototype.parseRowIndex_ = function (index) {
    if ((typeof index) == "string") {
        index = window["parseInt"](index) - 1;
    } else if (index instanceof sssv.math.Row) {
        index = index.getIndex();
    }
    return index;
};


/**
 * Get row
 * @param {number|string|sssv.math.Row} If a number is the 0 based index, if a 
 * string is the 1 based index.
 * @returns {sssv.worksheet.Row|null} Returns null if a row at this index 
 * doesn't exist.
 */
sssv.worksheet.SheetData.prototype.getRow = function (index) {
    index = this.parseRowIndex_(index);
    return this.rows_[index] || null;
};
