/**
 * @fileoverview Helper functions for a V element (Value).
 */

goog.provide('jsopenxml.worksheet.V');
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
 * @param {Element} v The v xml element, value.
 */
jsopenxml.worksheet.V = function (v) {
    this.element_ = v;

    /**
     * This is the internal value not the actual value displayed to the user
     */
    this.value_ = (goog.userAgent.IE) ? v.text : v.textContent;
};


/**
 * Get the value
 * @returns {string}
 */
jsopenxml.worksheet.V.prototype.getValue = function () {
    return this.value_;
};
