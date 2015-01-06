/**
 * @fileoverview Helps with handling the merged cells
 */

goog.provide('jsopenxml.worksheet.MergeCells');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.worksheet = window.jsopenxml.worksheet || {};
//--- intellisense end -------------------------------------------------------//

goog.require('jsopenxml.worksheet.MergeCell');

/**
 * @constructor
 * @param {Element} mergeCells
 */
jsopenxml.worksheet.MergeCells = function (mergeCells) {
    this.element = mergeCells;

    // An array of all the mergeCell records.
    this.mergedCells = [];
    goog.array.forEach(mergeCells.childNodes, function (childElement) {
        // If not an element node skip
        if (childElement.nodeType != 1) return;

        var mergeCell = new jsopenxml.worksheet.MergeCell(childElement);
        this.mergedCells.push(mergeCell);

        // Create a map of which grid positions map to which merge cells
        this.gridMap = this.gridMap || {};
        mergeCell.getRange().forEach(function (pos) {
            var x = pos.getColumnIndex();
            var y = pos.getRowIndex();
            this.gridMap[x] = this.gridMap[x] || {};
            this.gridMap[x][y] = mergeCell;
        }, this);
    }, this);
};


/**
 * Get the merged cell record for a given position
 * @param {jsopenxml.math.Cell} pos
 * @return {jsopenxml.worksheet.MergeCell|null}
 */
jsopenxml.worksheet.MergeCells.prototype.getMergeCell = function (pos) {
    var x = pos.getColumnIndex();
    var y = pos.getRowIndex();
    var xMap = this.gridMap[x];
    if (!xMap) return null;
    return xMap[y] || null;
};
