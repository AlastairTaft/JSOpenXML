/**
 * @fileoverview This element specifies the color and line style for the top 
 * border of a cell.
 */

goog.provide('jsopenxml.styles.Top');

/**
 * @constructor
 * @param {Element} top
 */
jsopenxml.styles.Top = function (top) {
    goog.base(this, top);
};
goog.inherits(jsopenxml.styles.Top, jsopenxml.styles.Bottom);
