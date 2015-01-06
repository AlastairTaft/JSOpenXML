
/**
 * @fileoverview Provides helper functions for working with a worksheet 
 * document.
 */

goog.provide('sssv.Worksheet');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.sssv = window.sssv || {};
//--- intellisense end -------------------------------------------------------//

window.sssv = window.sssv || {};
window.sssv.worksheet = window.sssv.worksheet || {};
goog.require('sssv.ui.CellFormatting');
goog.require('sssv.worksheet.Cols');
goog.require('sssv.math.Range');
goog.require('sssv.worksheet.SheetData');
goog.require('sssv.worksheet.SheetFormatPr');

/**
 * @constructor
 * @implements {sssv.ui.CellFormatting}
 */
sssv.Worksheet = function (worksheetDoc) {
    this.xml = worksheetDoc;

    var worksheet = this.xml.firstChild;
    goog.array.forEach(worksheet.childNodes, function (childElement) {
        // TODO Make sure the parse functions are called in the order layed
        // out below. As some may require on previous ones being setup.
        switch (childElement.nodeName) {
            case "x:dimension": this.parseDimension_(childElement); break;
            case "x:cols": this.cols_ = new sssv.worksheet.Cols(childElement); break;
            case "x:sheetData": this.sheetData_ = new sssv.worksheet.SheetData(childElement); break;
            case "x:sheetFormatPr": this.sheetFormatProperties_ = new sssv.worksheet.SheetFormatPr(childElement); break;
        }
    }, this);
};
//goog.implements2(sssv.Worksheet, sssv.ui.CellFormatting);


/**
 * Formats a grid cell
 * @param {Element} cell A td cell
 * @param {sssv.math.Coordinate} coordinate
 */
sssv.Worksheet.prototype.formatCell = function (cell, coord) {
    var cellFormatter = new sssv.worksheet.Cell()
};


/**
 * Parse the dimension element
 * @private
 * @param {Element} element The dimension element
 */
sssv.Worksheet.prototype.parseDimension_ = function (element) {
    // Optional gets something back like "A1:L189"
    var ref = element.getAttribute("ref");
    //var parts = ref.split(":");
    this.range_ = new sssv.math.Range(ref);
};



/**
 * Gets the worksheet range
 * @returns {sssv.math.Range}
 */
sssv.Worksheet.prototype.getRange = function () {
    return this.range_;
};



/**
 * Parse the sheetData element
 * @private
 * @param {Element} sheetData The sheetData element
 */
sssv.Worksheet.prototype.parseSheetData_ = function (sheetData) {

    //var sheetDataElement = new sssv.ui.Grid(sheetData, this.range_, this.stringTable_, this.styles_);
    //sheetDataElement.decorate(this.tableGridTbody);
};




/**
 * Get column widths for a range
 * @param {goog.math.Range} range Should be the 0 based indexs for columns
 */
sssv.Worksheet.prototype.getColumnWidths = function (range) {
    return this.cols_.getColumnWidths(range);
};

/**
 * Get a cell xml element
 * @returns {sssv.worksheet.C|null} A 'c' element that represents a cell or null
 * if it doesn't exist.
 * @param {goog.math.Coordinate|sssv.math.Coordinate} coord
 */
sssv.Worksheet.prototype.getCell = function (coord) {
    return this.sheetData_.getCell(coord);
};





/**
 * Get column widths for a range
 * @param {goog.math.Column|string|number} index The column index, if a number
 * is 0 based, if a numeric string is 1 based. Or can be a letter
 */
sssv.Worksheet.prototype.getColumnWidth = function (index) {
    return this.cols_.getColumnWidth(index);
};



/**
 * Get the total columns of the worksheet
 * @returns {number}
 */
sssv.Worksheet.prototype.getTotalColumns = function () {
    return this.range_.getWidth();
};


/**
 * Get the total rows of the worksheet
 * @returns {number}
 */
sssv.Worksheet.prototype.getTotalRows = function () {
    return this.range_.getHeight();
};



/**
 * Get row height
 * @param {goog.math.Row|string|number} index The row index, if a number
 * is 0 based, if a numeric string is 1 based.
 */
sssv.Worksheet.prototype.getRowHeight = function (index) {
    var height = this.sheetData_.getRowHeight(index);
    if (height != null) return height;

    // Get the default height
    return this.sheetFormatProperties_.getDefaultRowHeight();
};


/**
 * Is a row hidden
 * @param {goog.math.Row|string|number} index The row index, if a number
 * is 0 based, if a numeric string is 1 based.
 * @returns {boolean} 
 */
sssv.Worksheet.prototype.isRowHidden = function (index) {
    return this.sheetData_.isRowHidden(index);
};


/**
 * Get column
 * @param {number|string|sssv.math.Column}
 * @returns {sssv.worksheet.Col}
 */
sssv.Worksheet.prototype.getColumn = function (col) {
    return this.cols_.getColumn(col);
};


/**
 * Get row
 * @param {number|string|sssv.math.Row}
 * @returns {sssv.worksheet.Row}
 */
sssv.Worksheet.prototype.getRow = function (row) {
    return this.sheetData_.getRow(row);
};

