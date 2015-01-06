
/**
 * @fileoverview Helper functions for the sheetFormatPr element (sheet 
 * formatting properties)
 */

goog.provide('sssv.worksheet.SheetFormatPr');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.sssv = window.sssv || {};
window.sssv.worksheet = window.sssv.worksheet || {};
//--- intellisense end -------------------------------------------------------//

window.sssv = window.sssv || {};
window.sssv.worksheet = window.sssv.worksheet || {};

/**
 * @constructor
 * @param {Element} sheetFormatPr Xml element
 */
sssv.worksheet.SheetFormatPr = function (sheetFormatPr) {
    this.element_ = sheetFormatPr;

    this.defaultRowHeightPointSize_ = sheetFormatPr.getAttribute("defaultRowHeight");
    if (this.defaultRowHeightPointSize_) 
        this.defaultRowHeightPointSize_ = window["parseInt"](this.defaultRowHeightPointSize_);
    
};

/**
 * Get the default row height
 * @returns {number} The height in pixels
 */
sssv.worksheet.SheetFormatPr.prototype.getDefaultRowHeight = function () {
    return this.defaultRowHeightPointSize_ * 4 / 3;
};
