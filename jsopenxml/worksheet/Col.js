/**
 * @fileoverview 
 */


goog.provide('jsopenxml.worksheet.Col');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.worksheet = window.jsopenxml.worksheet || {};
//--- intellisense end -------------------------------------------------------//

goog.require('goog.math.Range');

/**
 * @constructor
 */
jsopenxml.worksheet.Col = function (col) {
    this.element = col;

    var min = window["parseInt"](col.getAttribute("max")),
        max = window["parseInt"](col.getAttribute("min")),
        width = window["parseFloat"](col.getAttribute("width"));

    // This is the 0 based index column range this record affects.
    this.range_ = new goog.math.Range(min - 1, max - 1);

    // TODO This should be the maximum digit width for the current font 
    // in this cell. The maxium width for a number digit.
    // Should not hard code this and it may change based on font type
    var maxDigitWidth = 7;

    // Convert the width to pixels
    this.widthPixels_ = Math.floor(
        ((256 * width + Math.floor(128 / maxDigitWidth)) / 256)
        * maxDigitWidth);

    // NOTE: There are 4 pixels of margin
    // padding (two on each side), plus 1 pixel padding for the gridlines.


    this.styleIndex_ = col.getAttribute("s");
    if (this.styleIndex_) this.styleIndex_ = window["parseInt"](this.styleIndex_);

    this.bestFit_ = col.getAttribute("bestFit");
    if (this.bestFit_) this.bestFit_ = !!window["parseInt"](this.bestFit_);

    this.collapsed_ = col.getAttribute("collapsed");
    if (this.collapsed_) this.collapsed_ = !!window["parseInt"](this.collapsed_);

    this.customWidth_ = col.getAttribute("customWidth");
    if (this.customWidth_) this.customWidth_ = !!window["parseInt"](this.customWidth_);

    this.hidden_ = col.getAttribute("hidden");
    if (this.hidden_) this.hidden_ = !!window["parseInt"](this.hidden_);


    this.phonetic_ = col.getAttribute("phonetic");
    if (this.phonetic_) this.phonetic_ = !!window["parseInt"](this.phonetic_);
};




/**
 * Gets the 0 based index range this element represents.
 * @returns {goog.math.Range}
 */
jsopenxml.worksheet.Col.prototype.getRange = function () {
    return this.range_;
};

/**
 * Get the width of a column in this range
 * @returns {goog.math.Range}
 */
jsopenxml.worksheet.Col.prototype.getWidth = function () {
    return this.widthPixels_;
};



/**
 * Get the style index. This is the index of which style element is applied
 * by default to all styles on this cell, as found in the styles table.
 * @return {number|null} 0 based style index
 */
jsopenxml.worksheet.Col.prototype.getStyleIndex = function () {
    return this.styleIndex_;
};

/**
 * If this is true the column width should be auto resized after the user enters
 * a value into the field, should never resize to be smaller, but increase in
 * size if applicable.
 * @returns {boolean}
 */
jsopenxml.worksheet.Col.prototype.isBestFit = function () {
    if (this.customWidth_) return false;
    if (this.bestFit_) return true;
    return false;
};

/**
 * Is the column hidden
 * @returns {boolean}
 */
jsopenxml.worksheet.Col.prototype.isHidden = function () {
    return this.hidden_ || false;
};