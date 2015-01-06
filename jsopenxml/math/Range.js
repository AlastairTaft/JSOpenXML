/// <reference path="~/_intellisense.js" />

/**
 * @fileoverview A spreadsheet coordinate.
 */

goog.provide('jsopenxml.math.Range');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.math = window.jsopenxml.math || {};
//--- intellisense end -------------------------------------------------------//

window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.math = window.jsopenxml.math || {};
goog.require('jsopenxml.math.Cell');

/**
 * @constructor
 * @param {string|jsopenxml.math.SpreadsheetCoordinate} coordA Can be a string 
 * coordinate like "E5" or an instance of spreadsheet coordinate or
 * a string representing a range (e.g. "A1:D7"), if it is this then the second 
 * parameter is ommitted.
 * @param {string|jsopenxml.math.SpreadsheetCoordinate} coordB
 */
jsopenxml.math.Range = function (coordA, coordB) {
    if (typeof(coordA) == "string" && goog.string.contains(coordA, ":")) {
        // First parameter is a range
        var parts = coordA.split(":");
        coordA = parts[0];
        coordB = parts[1];
    }
    if (typeof (coordA) == "string") {
        coordA = new jsopenxml.math.Cell(coordA);
    }
    if (typeof (coordB) == "string") {
        coordB = new jsopenxml.math.Cell(coordB);
    }

    if (coordA.getRowIndex() <= coordB.getRowIndex()) {
        this.firstCoordinate_ = coordA;
        this.secondCoordinate_ = coordB;
    } else {
        this.firstCoordinate_ = coordB;
        this.secondCoordinate_ = coordA;
    }
    
};


/**
 * Get the width of the range
 * @returns {Number} An integer of how many columns the range spans
 */
jsopenxml.math.Range.prototype.getWidth = function () {
    return this.secondCoordinate_.getColumnIndex()
        - this.firstCoordinate_.getColumnIndex() + 1;
};



/**
 * Get the height of the range
 * @returns {Number} An integer of how many rows the range spans
 */
jsopenxml.math.Range.prototype.getHeight = function () {
    return this.secondCoordinate_.getRowIndex()
        - this.firstCoordinate_.getRowIndex() + 1;
};


/**
 * For each position in the range
 * @param {Function} f The first parameter is a jsopenxml.math.Cell which is
 * located within this range.
 * @param {object} opt_context Optional context for the callback function.
 */
jsopenxml.math.Range.prototype.forEach = function (f, opt_context) {
    var box = this.getBox();
    for (var y = box.top; y <= box.bottom; y++) {
        for (var x = box.left; x <= box.right; x++) {
            f.call(opt_context || this, 
                jsopenxml.math.Cell.cast(new goog.math.Coordinate(x, y)));
        }
    }
};


/**
 * Get start column index
 * @return {number}
 */
jsopenxml.math.Range.prototype.getColumnStartIndex = function () {
    var box = this.getBox();

    return box.left;
};


/**
 * Get end column index
 * @return {number}
 */
jsopenxml.math.Range.prototype.getColumnEndIndex = function () {
    var box = this.getBox();

    return box.right;
};


/**
 * Get start row index
 * @return {number}
 */
jsopenxml.math.Range.prototype.getRowStartIndex = function () {
    var box = this.getBox();

    return box.top;
};


/**
 * Get end row index
 * @return {number}
 */
jsopenxml.math.Range.prototype.getRowEndIndex = function () {
    var box = this.getBox();

    return box.bottom;
};

/**
 * Converts to a goog box.
 * @return {goog.math.Box}
 */
jsopenxml.math.Range.prototype.getBox = function () {
    return goog.math.Box.boundingBox(
        this.firstCoordinate_.getCoordinate(),
        this.secondCoordinate_.getCoordinate()
    );
};