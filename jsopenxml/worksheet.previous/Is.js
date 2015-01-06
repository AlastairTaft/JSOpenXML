/**
 * @fileoverview Helper functions for a is element.
 */

goog.provide('sssv.worksheet.Is');
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
 * @param {Element} is The is xml element, literal value
 */
sssv.worksheet.Is = function (is) {
    this.element_ = is;

    var t = is.firstChild;
    if (t.tagName != "t")
        throw "Unhandled xml structure for 'is' element";
    this.value_ = (goog.userAgent.IE) ? t.text : t.textContent;
};

/**
 * Get the value
 * @returns {string}
 */
sssv.worksheet.Is.prototype.getValue = function () {
    return this.value_;
};
