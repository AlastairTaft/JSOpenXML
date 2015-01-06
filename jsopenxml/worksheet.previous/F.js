/**
 * @fileoverview Helper functions for a F element (Formula).
 */

goog.provide('sssv.worksheet.F');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.sssv = window.sssv || {};
window.sssv.worksheet = window.sssv.worksheet || {};
//--- intellisense end -------------------------------------------------------//

window.sssv = window.sssv || {};
window.sssv.worksheet = window.sssv.worksheet || {};
goog.require('goog.userAgent');

/**
 * @constructor
 * @param {Element} f The f xml element, formula
 */
sssv.worksheet.F = function (f) {
    this.element_ = f;

    this.formula_ = (goog.userAgent.IE) ? f.text : f.textContent;
};

