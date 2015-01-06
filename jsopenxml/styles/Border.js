
/**
 * @fileoverview Expresses a single set of cell border formats (left, right, 
 * top, bottom, diagonal). Color is optional. When missing, 'automatic' is 
 * implied.
 */

goog.provide('jsopenxml.styles.Border');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.styles = window.jsopenxml.styles || {};
//--- intellisense end -------------------------------------------------------//

goog.require('jsopenxml.styles.Left');
goog.require('jsopenxml.styles.Right');
goog.require('jsopenxml.styles.Top');
goog.require('jsopenxml.styles.Bottom');
goog.require('jsopenxml.styles.Diagonal');


/**
 * @constructor
 * @param {Element} border
 */
jsopenxml.styles.Border = function (border) {
    this.element = border;

    // A boolean value indicating if the cell's diagonal border includes a 
    // diagonal line, starting at the top left corner of the cell and moving 
    // down to the bottom right corner of the cell.
    this.diagonalDown = this.element.getAttribute("diagonalDown");
    if (this.diagonalDown != null)
        this.diagonalDown = !!window["parseInt"](this.diagonalDown);

    // A boolean value indicating if the cell's diagonal border includes a 
    // diagonal line, starting at the bottom left corner of the cell and moving 
    // up to the top right corner of the cell.
    this.diagonalUp = this.element.getAttribute("diagonalUp");
    if (this.diagonalUp != null)
        this.diagonalUp = !!window["parseInt"](this.diagonalUp);

    // A boolean value indicating if left, right, top, and bottom borders should 
    // be applied only to outside borders of a cell range.
    this.outline = this.element.getAttribute("outline");
    if (this.outline != null)
        this.outline = !!window["parseInt"](this.outline);

    goog.array.forEach(this.element.childNodes, function (childElement) {
        if (childElement.nodeType != 1) return;
        switch (childElement.nodeName) {
            case "left": this.left = new jsopenxml.styles.Left(childElement); break;
            case "right": this.right = new jsopenxml.styles.Right(childElement); break;
            case "top": this.top = new jsopenxml.styles.Top(childElement); break;
            case "bottom": this.bottom = new jsopenxml.styles.Bottom(childElement); break;
            case "diagonal": this.diagonal = new jsopenxml.styles.Diagonal(childElement); break;
        }
    }, this);

};


/**
 * Get left border.
 * @return {jsopenxml.styles.Left}
 */
jsopenxml.styles.Border.prototype.getLeft = function () {
    return this.left;
};


/**
 * Get right border.
 * @return {jsopenxml.styles.Left}
 */
jsopenxml.styles.Border.prototype.getRight = function () {
    return this.right;
};


/**
 * Get top border.
 * @return {jsopenxml.styles.Top}
 */
jsopenxml.styles.Border.prototype.getTop = function () {
    return this.top;
};

/**
 * Get bottom border.
 * @return {jsopenxml.styles.Bottom}
 */
jsopenxml.styles.Border.prototype.getBottom = function () {
    return this.bottom;
};

/**
 * Get diagonal border.
 * @return {jsopenxml.styles.Diagonal}
 */
jsopenxml.styles.Border.prototype.getDiagonal = function () {
    return this.diagonal;
};
