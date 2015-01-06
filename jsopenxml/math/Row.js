/**
 * @fileoverview A spreadsheet row is a numerical value. But the displayed value
 * starts at a base index of 1.
 */

goog.provide('jsopenxml.math.Row');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.math = window.jsopenxml.math || {};
//--- intellisense end -------------------------------------------------------//

window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.math = window.jsopenxml.math || {};

/**
 * @constructor
 * @param {Number} row The row number starting at a base index of 1.
 */
jsopenxml.math.Row = function (row) {
    if (!goog.string.isNumeric(row)) {
        throw "The row must be a valid integer.";
    }
    this.row_ = row.toString();

    this.rowIndex_ = jsopenxml.math.Row.calculateIndex(this.row_);

    this["valueOf"] = this.valueOf;
};

/**
 * Get the numerical 0 based index, which is always 1 lest than the row value
 */
jsopenxml.math.Row.prototype.getIndex = function () {
    return this.rowIndex_;
};


/**
 * Calculate the 0 based index for a row 1 based index index.
 * Use this for readability or just minus 1 from the original value.
 */
jsopenxml.math.Row.calculateIndex = function (row) {
    return window["parseInt"](row) - 1;
};

/**
 * Calculate the 1 based index from a 0 based index
 */
jsopenxml.math.Row.getValueFromIndex = function (index) {
    return index + 1;
};

/**
 * Get the excel row value. (1 based index).
 * @returns {string}
 */
jsopenxml.math.Row.prototype.valueOf = function () {
    return this.row_;
};
