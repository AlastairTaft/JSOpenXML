
/**
 * @fileoverview Handle the fill element, decorate an element to fill that 
 * element
 */

goog.provide('jsopenxml.styles.Font');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.styles = window.jsopenxml.styles || {};
//--- intellisense end -------------------------------------------------------//

goog.require('jsopenxml.styles.B');
goog.require('jsopenxml.stringtable.Sz');
goog.require('jsopenxml.worksheet.Color');
goog.require('jsopenxml.styles.Family');
goog.require('jsopenxml.styles.Name');

/**
 * @constructor
 * @param {Element} fillElement An xml fill element.
 */
jsopenxml.styles.Font = function (fillElement, openXmlDocument) {
    this.element = fillElement;
    this.openXmlDocument = openXmlDocument;

    goog.array.forEach(this.element.childNodes, function (childElement) {
        if (childElement.nodeType != 1) return;
        switch (childElement.nodeName) {
            case "b": this.b = new jsopenxml.styles.B(childElement); break;
            case "sz": this.sz = new jsopenxml.stringtable.Sz(childElement); break;
            case "color": this.color = new jsopenxml.worksheet.Color(childElement, this.openXmlDocument); break;
            case "family": this.family = new jsopenxml.styles.Family(childElement); break;
            case "name": this.name = new jsopenxml.styles.Name(childElement); break;
        }
    }, this);
};

/**
 * Is the font bold
 * @return {boolean}
 */
jsopenxml.styles.Font.prototype.isBold = function () {
    return (this.b) ? this.b.getValue() : false;
};

/**
 * Get the font size in pt (1/72 of an inch).
 * @return {number|null}
 */
jsopenxml.styles.Font.prototype.getFontSize = function () {
    return (this.sz) ? this.sz.getFontSize() : null;
};

/**
 * Get font colour
 * @return {string|null} A ccs hex string
 */
jsopenxml.styles.Font.prototype.getCssColour = function () {
    return (this.font) ? this.color.getCssColour() : null;
};

/**
 * Get font family
 * @return {string} The css font-family string.
 */
jsopenxml.styles.Font.prototype.getFontFamily = function () {
    // Ignore the family tag for now but if this is provided and a name isn't
    // it should probably be used to return a more suitable default font.
    //this.family

    return (this.name) ? this.name.getValue() : null;
}
