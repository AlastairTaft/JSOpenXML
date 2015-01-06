/**
 * @fileoverview A spreadsheet column is a letter value. This helps convert
 * between the letters and it's numerical index.
 */

goog.provide('jsopenxml.math.Column');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.math = window.jsopenxml.math || {};
//--- intellisense end -------------------------------------------------------//

window.sssv = window.sssv || {};
window.sssv.math = window.sssv.math || {};

/**
 * @constructor
 * @param {string} column The column letter, for example B for the second 
 * column.
 */
jsopenxml.math.Column = function (column) {
    if (!goog.string.isAlpha(column)) {
        throw "The column must only contain letters.";
    }

    this.column_ = column;

    this.columnIndex_ = jsopenxml.math.Column.calculateIndex(column);

    this["valueOf"] = this.valueOf;
};

/**
 * Get the numerical 0 based index, so for the letter B this will return 1.
 */
jsopenxml.math.Column.prototype.getIndex = function () {
    return this.columnIndex_;
};


/**
 * Calculate the 0 based index for a column letter index
 * @param {string} column
 */
jsopenxml.math.Column.calculateIndex = function (column) {
    column = column.toUpperCase();

    var base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', i, j, result = 0;

    for (i = 0, j = column.length - 1; i < column.length; i += 1, j -= 1) {
        result += Math.pow(base.length, j) * (base.indexOf(column[i]) + 1);
    }

    return result - 1;
};


/**
 * Get the excel column value. Made up of letters.
 * @returns {string}
 */
jsopenxml.math.Column.prototype.valueOf = function () {
    return this.column_;
};

/**
 * Calculate the column letter abbreviation from a 0 based index
 * @param {Number} value
 * @returns {string}
 */
jsopenxml.math.Column.getValueFromIndex = function (value) {
    var base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    value++;
    var remainder, result = "";
    do {
        remainder = value % 26;
        result = base[(remainder || 26) - 1] + result;
        value = Math.floor(value / 26);
    } while (value > 0);
    return result;
};
