/**
 * @fileoverview This element specifies the color and line style for the left 
 * border of a cell.
 */

goog.provide('jsopenxml.styles.Left');

/**
 * @constructor
 * @param {Element} left
 */
jsopenxml.styles.Left = function (left) {
    goog.base(this, left);
};
goog.inherits(jsopenxml.styles.Left, jsopenxml.styles.Bottom);
