
/** 
 * @fileoverview Provides helper functions for the col element
 */

goog.provide('sssv.worksheet.Cols');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.sssv = window.sssv || {};
window.sssv.worksheet = window.sssv.worksheet || {};
//--- intellisense end -------------------------------------------------------//

window.sssv = window.sssv || {};
window.sssv.worksheet = window.sssv.worksheet || {};
goog.require('sssv.worksheet.Col');


/**
 * @constructor
 * @param {Element} cols
 */
sssv.worksheet.Cols = function (cols) {
    this.element_ = cols;

    this.cols_ = goog.array.map(cols.childNodes, function (col) {
        return new sssv.worksheet.Col(col);
    }, this);

};


/**
 * Get column widths for a range
 * @param {goog.math.Range} range Should be the 0 based indexs for columns
 */
sssv.worksheet.Cols.prototype.getColumnWidths = function (range) {
    var widths = [], currentRange, currentColumnPoint;
    for (var i = range.start; i <= range.end; i++) {
        currentColumnPoint = range[i];
        var col = this.getColumn(currentColumnPoint);
        widths.push(col.getWidth());
    };
};

/**
 * Get width for a specific column
 * @returns {number}
 * @param {number|string|sssv.math.Column} If number is 0 based index
 */
sssv.worksheet.Cols.prototype.getColumnWidth = function (index) {
    var column = this.getColumn(index);
    return column.getWidth();
};

/**
 * Get column
 * @param {number|string|sssv.math.Column}
 * @returns {sssv.worksheet.Col}
 */
sssv.worksheet.Cols.prototype.getColumn = function (col) {
    var index;
    if (col instanceof sssv.math.Column) {
        index = col.getIndex();
    } else if ((typeof col) == "string") {
        index = sssv.math.Column.calculateIndex(col);
    } else {
        index = col;
    }

    var j = 0;
    currentRange = this.cols_[j].getRange();
    while (!goog.math.Range.containsPoint(
        currentRange, (index + 1))) {
        j++;
        if (j >= this.cols_.length) {
            throw "Value out of spreadsheet range";
        }
        currentRange = this.cols_[j].getRange();
    };
    return this.cols_[j];
};