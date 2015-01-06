/**
 * @fileoverview Helper functions for a row xml element
 */

goog.provide('sssv.worksheet.Row');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.sssv = window.sssv || {};
window.sssv.worksheet = window.sssv.worksheet || {};
//--- intellisense end -------------------------------------------------------//

window.sssv = window.sssv || {};
window.sssv.worksheet = window.sssv.worksheet || {};
goog.require('sssv.worksheet.C');

/**
 * @constructor
 */
sssv.worksheet.Row = function (row) {
    this.element_ = row;
   
    // This index is 1 based
    this.rowIndex = window["parseInt"](row.getAttribute("r"));


    /**
     * An array of all the cells, the index will correspond
     * to the 0 based cell index.
     * @type {Array<sssv.worksheet.C>}
     */
    this.cells_ = [];

    // Map the cells to an array
    goog.array.forEach(row.childNodes, function (cell) {
        var cell = new sssv.worksheet.C(cell);
        this.cells_[cell.getIndex()] = cell;
    }, this);

    // The height in point size
    this.heightPointSize_ = row.getAttribute("ht");
    if (this.heightPointSize_ != null)
        this.heightPointSize_ = window["parseInt"](this.heightPointSize_);

    // If the row has been specified to be hidden or not
    this.hidden_ = row.getAttribute("hidden");
    if (this.hidden_ != null) this.hidden_ = !!window["parseInt"](this.hidden_);

    this.styleIndex_ = row.getAttribute("s");
    if (this.styleIndex_) this.styleIndex_ = window["parseInt"](this.styleIndex_);
};

/**
 * Get the 0 based row index
 */
sssv.worksheet.Row.prototype.getIndex = function () {
    return this.rowIndex - 1;
};


/**
 * Get the cell based on the 0 based index off parent row
 * @returns {sssv.worksheet.C|null} null if there is no record for the cell
 */
sssv.worksheet.Row.prototype.getCell = function (index) {
    return this.cells_[index] || null;
};

/**
 * Get the height 
 * @returns {number|null} The pixel height or null if not explicitly set on the
 * row. It will be null if the default size is in use instead.
 */
sssv.worksheet.Row.prototype.getHeight = function () {
    if (!this.heightPointSize_)
        return null;
    return this.heightPointSize_ * 4 / 3;
};


/**
 * Is the row hidden
 * @returns {boolean}
 */
sssv.worksheet.Row.prototype.isHidden = function () {
    return this.hidden_ || false;
};



/**
 * Get the style index. This is the index of which style element is applied
 * by default to all styles on this cell, as found in the styles table.
 * This style is only applied if customFormat is true
 * @return {number|null} 0 based style index
 */
sssv.worksheet.Row.prototype.getStyleIndex = function () {
    return this.styleIndex_;
};
