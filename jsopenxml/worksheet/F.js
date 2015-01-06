/**
 * @fileoverview Helper functions for a F element (Formula).
 */

goog.provide('jsopenxml.worksheet.F');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.worksheet = window.jsopenxml.worksheet || {};
//--- intellisense end -------------------------------------------------------//

window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.worksheet = window.jsopenxml.worksheet || {};
goog.require('goog.userAgent');

/**
 * @constructor
 * @param {Element} f The f xml element, formula
 */
jsopenxml.worksheet.F = function (f) {
    this.element_ = f;

    this.formula_ = (goog.userAgent.IE) ? f.text : f.textContent;
};

