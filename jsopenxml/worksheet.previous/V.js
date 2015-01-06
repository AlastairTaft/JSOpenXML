/**
 * @fileoverview Helper functions for a V element (Value).
 */

goog.provide('sssv.worksheet.V');
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
 * @param {Element} v The v xml element, value.
 */
sssv.worksheet.V = function (v) {
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
sssv.worksheet.V.prototype.getValue = function () {
    return this.value_;
};
