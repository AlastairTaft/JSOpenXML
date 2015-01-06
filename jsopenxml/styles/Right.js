/**
 * @fileoverview This element specifies the color and line style for the right 
 * border of a cell.
 */

goog.provide('jsopenxml.styles.Right');

/**
 * @constructor
 * @param {Element} right
 */
jsopenxml.styles.Right = function (right) {
    goog.base(this, right);
};
goog.inherits(jsopenxml.styles.Right, jsopenxml.styles.Bottom);
