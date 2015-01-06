/**
 * @fileoverview Handles a ThemeElements element in a theme document 
 */

goog.provide('jsopenxml.theme.ThemeElements');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.theme = window.jsopenxml.theme || {};
//--- intellisense end -------------------------------------------------------//

goog.require('jsopenxml.theme.ClrScheme');
goog.require('jsopenxml.theme.FontScheme');
goog.require('jsopenxml.theme.FmtScheme');

/**
 * @constructor
 * @param {Element} themeElements
 */
jsopenxml.theme.ThemeElements = function (themeElements) {
    this.element = themeElements;

    goog.array.forEach(this.element.childNodes, function (childElement) {
        switch (childElement.nodeName) {
            case "a:clrScheme": this.clrScheme = new jsopenxml.theme.ClrScheme(childElement); break;
            case "a:fontScheme": this.fontScheme = new jsopenxml.theme.FontScheme(childElement); break;
            case "a:fmtScheme": this.fmtScheme = new jsopenxml.theme.FmtScheme(childElement); break;
        }
    }, this);
};




/**
 * Get the clrScheme instance
 * @return {jsopenxml.theme.ClrScheme}
 */
jsopenxml.theme.ThemeElements.prototype.getClrScheme = function () {
    return this.clrScheme;
};


/**
 * Get the fontScheme instance
 * @return {jsopenxml.theme.FontScheme}
 */
jsopenxml.theme.ThemeElements.prototype.getFontScheme = function () {
    return this.fontScheme;
};


/**
 * Get the fmtScheme instance
 * @return {jsopenxml.theme.FmtScheme}
 */
jsopenxml.theme.ThemeElements.prototype.getFmtScheme = function () {
    return this.fmtScheme;
};