/**
 * @fileoverview This element specifies the color and line style for the 
 * diagonal border(s) of a cell, possibly including diagonally up and diagonally 
 * down. The line style for diagonal up and diagonal down lines shall be the 
 * same.
 */

goog.provide('jsopenxml.styles.Diagonal');

/**
 * @constructor
 * @param {Element} diagonal
 */
jsopenxml.styles.Diagonal = function (diagonal) {
    goog.base(this, diagonal);
};
goog.inherits(jsopenxml.styles.Diagonal, jsopenxml.styles.Bottom);
