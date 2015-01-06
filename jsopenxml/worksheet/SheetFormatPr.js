/**
 * @fileoverview
 */

goog.provide('jsopenxml.worksheet.SheetFormatPr');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.worksheet = window.jsopenxml.worksheet || {};
//--- intellisense end -------------------------------------------------------//

/**
 * @constructor
 * @param {Element} sheetFormatPr
 */
jsopenxml.worksheet.SheetFormatPr = function (sheetFormatPr) {
    this.element = sheetFormatPr;

    var baseColWidth = 
        window["parseFloat"](sheetFormatPr.getAttribute("baseColWidth"));
    var defaultColWidth = 
        window["parseFloat"](sheetFormatPr.getAttribute("defaultColWidth"));

    // TODO This should be the maximum digit width for the current font 
    // in this cell. The maxium width for a number digit.
    // Should not hard code this and it may change based on font type
    var maxDigitWidth = 7;

    // Convert the width to pixels
    this.baseColWidthPixels_ = baseColWidth * maxDigitWidth;

    // {margin padding (2 pixels on each side, totalling 4 pixels)} + 
    // {gridline (1pixel)}
    this.defaultColWidthPixels_ = baseColWidth + 5;


    var customHeight = sheetFormatPr.getAttribute("customHeight");
    this.customHeight = !!customHeight;


    // This is in point size.
    var defaultRowHeight =
        window["parseFloat"](sheetFormatPr.getAttribute("defaultRowHeight"));
    // TODO Make this conversion between point size and pixels more solid.
    this.defaultRowHeightPixels_ = defaultRowHeight / 3 * 4;


    var zeroHeight = sheetFormatPr.getAttribute("zeroHeight");
    this.zeroHeight = !!zeroHeight;

    // If zero height is true then set the default height to 0
    if (this.zeroHeight) this.defaultRowHeightPixels_ = 0;

    // Unhandled attributes // TODO
    var outlinelevelCol = sheetFormatPr.getAttribute("outlineLevelCol");
    var outlinelevelRow = sheetFormatPr.getAttribute("outlineLevelRow");
    var thickBottom = sheetFormatPr.getAttribute("thickBottom");
    var thickTop = sheetFormatPr.getAttribute("thickTop");
};

/**
 * Get default column width.
 */
jsopenxml.worksheet.SheetFormatPr.prototype.getDefaultColumnWidth = function () {
    return this.baseColWidthPixels_;
};


/**
 * Get default row height.
 */
jsopenxml.worksheet.SheetFormatPr.prototype.getDefaultRowHeight = function () {
    return this.defaultRowHeightPixels_;
};
