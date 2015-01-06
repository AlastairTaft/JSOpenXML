/// <reference path="~/_intellisense.js" />

/**
 * @fileoverview A spreadsheet coordinate.
 */

goog.provide('jsopenxml.math.Cell');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.math = window.jsopenxml.math || {};
//--- intellisense end -------------------------------------------------------//

//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.math = window.jsopenxml.math || {};
//----------------------------------------------------------------------------//
goog.require('jsopenxml.math.Column');
goog.require('jsopenxml.math.Row');

/**
 * @constructor
 * @param {string} column Can also be a string containing both the column
 * and row. So A, 1 would be A1
 * @param {string} row
 */
jsopenxml.math.Cell = function (column, row) {
    if ((new RegExp("[0-9]{1}")).test(column)){
        var parts = column.match(/([A-Za-z]+)([0-9]+)/);
        column = parts[1];
        row = parts[2];
    }
    this.column_ = new jsopenxml.math.Column(column);
    this.row_ = new jsopenxml.math.Row(row);
};

/**
 * Get the column index. The index is 0 based
 * @returns {Number}
 */
jsopenxml.math.Cell.prototype.getColumnIndex = function () {
    return this.column_.getIndex();
    
};


/**
 * Get the row index. The index is 0 based
 * @returns {Number}
 */
jsopenxml.math.Cell.prototype.getRowIndex = function () {
    return this.row_.getIndex();
};


/**
 * Get row 
 * @returns {string}
 */
jsopenxml.math.Cell.prototype.getRow = function () {
    return this.row_ + "";
};

/**
 * Get column 
 * @returns {string} e.g. "AB"
 */
jsopenxml.math.Cell.prototype.getColumn = function () {
    return this.column_ + "";
};

/** 
 * Convert from a goog.math.coord to an instance of this
 * @param {goog.math.coord} coord
 */
jsopenxml.math.Cell.cast = function (coord) {
    return new jsopenxml.math.Cell(
        jsopenxml.math.Column.getValueFromIndex(coord.x),
        jsopenxml.math.Row.getValueFromIndex(coord.y)
    );
};

/**
 * Overrides the value of to return the string representation of this
 * cell.
 */
jsopenxml.math.Cell.prototype["valueOf"] = function () {
    return this.getColumn() + this.getRow();
};

/**
 * Convert to a coordinate
 * @return {goog.math.Coordinate}
 */
jsopenxml.math.Cell.prototype.getCoordinate = function () {
    return new goog.math.Coordinate(
        this.getColumnIndex(),
        this.getRowIndex()
    );
};