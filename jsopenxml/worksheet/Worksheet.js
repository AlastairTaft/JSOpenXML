/**
 * @fileoveview Handles a worksheet document.
 */


goog.provide('jsopenxml.Worksheet');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
//--- intellisense end -------------------------------------------------------//

window.jsopenxml = window.jsopenxml || {};
goog.require('jsopenxml.worksheet.Cols');
goog.require('jsopenxml.worksheet.SheetData');
goog.require('jsopenxml.worksheet.SheetFormatPr');
goog.require('jsopenxml.worksheet.Dimension');
goog.require('jsopenxml.worksheet.SheetView');
goog.require('jsopenxml.worksheet.MergeCells');

/**
 * @constructor
 * @param {Document} worksheet
 */
jsopenxml.Worksheet = function (worksheet) {
    this.document = worksheet;

    this.worksheet = worksheet.firstChild;
    // If the first node is a processing instruction, skip over it. This occurs 
    // in IE 11, the first node is the xml declaration node.
    if (this.worksheet.nodeType == 7) {
        this.worksheet = this.worksheet.nextSibling;
    }
    goog.array.forEach(this.worksheet.childNodes, function (childElement) {
        // TODO Make sure the parse functions are called in the order layed
        // out below. As some may require on previous ones being setup.
        switch (childElement.nodeName) {
            case "dimension": this.dimension = new jsopenxml.worksheet.Dimension(childElement); break;
            case "cols": this.cols = new jsopenxml.worksheet.Cols(childElement); break;
            case "sheetData": this.sheetData = new jsopenxml.worksheet.SheetData(childElement); break;
            //case "x:sheetFormatPr": this.sheetFormatProperties_ = new sssv.worksheet.SheetFormatPr(childElement); break;
            case "sheetFormatPr": this.sheetFormatPr = new jsopenxml.worksheet.SheetFormatPr(childElement); break;
            case "sheetViews":
                this.sheetViews = [];
                goog.array.forEach(childElement.childNodes, function (sheetViewElement) {
                    // If not an element node skip
                    if (sheetViewElement.nodeType != 1) return;

                    this.sheetViews.push(new jsopenxml.worksheet.SheetView(sheetViewElement));
                }, this);
                
                break;
            case "mergeCells": this.mergeCells = new jsopenxml.worksheet.MergeCells(childElement); break;
                
        }
    }, this);
};


/**
 * Get column width. If the column does not have a width set it will return the
 * default width.
 * @param {number} columnIndex
 */
jsopenxml.Worksheet.prototype.getColumnWidth = function (columnIndex) {
    if (columnIndex != null && this.cols) {
        var width = this.cols.getColumnWidth(columnIndex);
        if (width != null) return width;
    }
    return this.sheetFormatPr.getDefaultColumnWidth();
};

/**
 * Get the height of a row, if the row does not have a height set, it will 
 * return the default row height
  * @param {number} rowIndex
 */
jsopenxml.Worksheet.prototype.getRowHeight = function (rowIndex) {
    if (rowIndex != null) {
        var height = this.sheetData.getRowHeight(rowIndex);
        if (height != null) return height;
    }
    return this.sheetFormatPr.getDefaultRowHeight();
};

/**
 * Get the range of the spreadsheet, the active area.
 * @return {jsopenxml.math.Range}
 */
jsopenxml.Worksheet.prototype.getRange = function () {
    return this.dimension.getRange();
};


/**
 * Get the size of the active area of the spreadsheet
 * @param 
 */
jsopenxml.Worksheet.prototype.getSize = function () {
    var range = this.getRange();
    return new goog.math.Size(range.getWidth(), range.getHeight());
};



/**
 * Get the sheetview
 * @return {Array<jsdoc.worksheet.SheetView>}
 */
jsopenxml.Worksheet.prototype.getSheetViews = function () {
    return this.sheetViews;
};

/**
 * Get row
 * @param {number} index 0 based index
 * @returns {jsopenxml.worksheet.Row}
 */
jsopenxml.Worksheet.prototype.getRow = function (index) {
    return this.sheetData.getRow(index);
};


/**
 * Get a cell
 * @param {jsopenxml.math.Cell} pos
 * @returns {sssv.worksheet.C|null} A 'c' element that represents a cell or null
 * if it doesn't exist.
 */
jsopenxml.Worksheet.prototype.getCell = function (pos) {
    return this.sheetData.getCell(pos);
};


/**
 * Get the merge cell record if position is part of a merged cell collection.
 * @param {jsopenxml.math.Cell} pos
 * @return {jsopenxml.worksheet.MergeCell}
 */
jsopenxml.Worksheet.prototype.getMergeCell = function (pos) {
    if (!this.mergeCells) return null;
    return this.mergeCells.getMergeCell(pos);
};


/**
 * Gets the width and height of a range in pixels
 * @param {jsopenxml.math.Range} range
 * @return {goog.math.Size}
 */
jsopenxml.Worksheet.prototype.getRangePixelSize = function (range) {
    
    var width = 0, height = 0;
    // Get the width
    for (
        var colIndex = range.getColumnStartIndex(), 
        colEndIndex = range.getColumnEndIndex(); 
        colIndex <= colEndIndex;
        colIndex++
        ) {

        width += this.getColumnWidth(colIndex);
    }
    // Get the height
    for (
        var rowIndex = range.getRowStartIndex(),
        rowEndIndex = range.getRowEndIndex() ;
        rowIndex <= rowEndIndex;
        rowIndex++) {

        height += this.getRowHeight(rowIndex);
    }

    return new goog.math.Size(width, height);
};


