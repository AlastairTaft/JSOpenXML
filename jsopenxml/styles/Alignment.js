/**
 * @fileoverview Formatting information pertaining to text alignment in cells. 
 * There are a variety of choices for how text is aligned both horizontally and 
 * vertically, as well as indentation settings, and so on. 
 * 
 * Page 1754 of the spec.
 */

goog.provide('jsopenxml.styles.Alignment');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.styles = window.jsopenxml.styles || {};
//--- intellisense end -------------------------------------------------------//

/**
 * @constructor
 * @param {Element} alignment
 */
jsopenxml.styles.Alignment = function (alignment) {
    this.element = alignment;

    /**
     * @type {jsopenxml.types.ST_HorizontalAlignment}
     */
    this.horizontal = this.element.getAttribute("horizontal");


    // An integer value, where an increment of 1 represents 3 spaces. Indicates 
    // the number of spaces (of the normal style font) of indentation for text 
    // in a cell.
    this.indent = this.element.getAttribute("indent");

    // A boolean value indicating if the cells justified or distributed 
    // alignment should be used on the last line of text. (This is typical for 
    // East Asian alignments but not typical in other contexts.)
    this.justifyLastLine = this.element.getAttribute("justifyLastLine");
    if (this.justifyLastLine != null)
        this.justifyLastLine = !!(window["parseInt"](this.justifyLastLine));


    // An integer value indicating whether the reading order (bidirectionality) 
    // of the cell is leftto-right, right-to-left, or context dependent.
    // 0 - Context Dependent - reading order is determined by scanning the text 
    // for the first non-whitespace character: if it is a strong right-to-left 
    // character, the reading order is right-to-left; otherwise, the reading 
    // order left-to-right.
    // 1 - Left-to-Right- reading order is left-to-right in the cell, as in 
    // English.
    // 2 - Right-to-Left - reading order is right-to-left in the cell, as in 
    // Hebrew.
    this.readingOrder = this.element.getAttribute("readingOrder");
    if (this.readingOrder)
        this.readingOrder = window["parseInt"](this.readingOrder);

    // An integer value (used only in a dxf element) to indicate the additional 
    // number of spaces of indentation to adjust for text in a cell.
    this.relativeIndent = this.element.getAttribute("relativeIndent");
    if (this.relativeIndent)
        this.relativeIndent = window["parseInt"](this.relativeIndent);


    // A boolean value indicating if the displayed text in the cell should be 
    // shrunk to fit the cell width. Not applicable when a cell contains 
    // multiple lines of text.
    this.shrinkToFit = this.element.getAttribute("shrinkToFit");
    if (this.shrinkToFit != null)
        this.shrinkToFit = !!(window["parseInt"](this.shrinkToFit));

    // Text rotation in cells. Expressed in degrees. Values are in the range 0 
    // to 180. The first letter of the text is considered the center-point of 
    // the arc. For 0 - 90, the value represents degrees above horizon. 
    // For 91-180 the degrees below the horizon is calculated as:
    this.textRotation = this.element.getAttribute("textRotation");
    if (this.textRotation != null)
        this.textRotation = window["parseInt"](this.textRotation);


    /**
     * @type {jsopenxml.types.ST_VerticalAlignment}
     */
    this.vertical = this.element.getAttribute("vertical");


    // A boolean value indicating if the text in a cell should be line-wrapped 
    // within the cell.
    this.wrapText = this.element.getAttribute("wrapText");
    if (this.wrapText != null)
        this.wrapText = !!window["parseInt"](this.wrapText);
};



/**
 * Get the horizontal setting
 * @return {jsopenxml.types.ST_HorizontalAlignment}
 */
jsopenxml.styles.Alignment.prototype.getHorizontal = function () {
    return this.horizontal || null;
};

