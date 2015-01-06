/**
 * @fileoverview A single xf element describes all of the formatting for a cell.
 */

goog.provide('jsopenxml.styles.Xf');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.styles = window.jsopenxml.styles || {};
//--- intellisense end -------------------------------------------------------//

goog.require('jsopenxml.styles.Alignment');

/**
 * @constructor
 * @param {Element} xfElement 
 * @param {jsopenxml.Styles} styles
 */
jsopenxml.styles.Xf = function (xfElement) {

    this.element = xfElement;


    // Grab the attributes
   
    this.borderId = window["parseInt"](this.element.getAttribute("borderId"));
    this.fontId = window["parseInt"](this.element.getAttribute("fontId"));
    this.numFmtId = window["parseInt"](this.element.getAttribute("numFmtId"));
    // TODO Implement these
    this.pivotButton = !!window["parseInt"](this.element.getAttribute("pivotButton"));
    this.quotePrefix = !!window["parseInt"](this.element.getAttribute("quotePrefix"));
    this.xfId = window["parseInt"](this.element.getAttribute("xfId"));
    this.fillId = this.element.getAttribute("fillId");



    // We don't apply explicitly set not to
    this.applyAlignment = !(this.element.getAttribute("applyAlignment") == "0");
    this.applyBorder = !(this.element.getAttribute("applyBorder") == "0");
    this.applyFill = !(this.element.getAttribute("applyBorder") == "0");
    this.applyFont = !(this.element.getAttribute("applyBorder") == "0");
    this.applyNumberFormat = !(this.element.getAttribute("applyBorder") == "0");
    this.applyProtection = !(this.element.getAttribute("applyBorder") == "0");


    // Process and child nodes
    goog.array.forEach(this.element.childNodes, function (childElement) {
        switch (childElement.nodeName) {
            case "alignment": this.alignment = new jsopenxml.styles.Alignment(childElement); break;
            //case "protection": this.parseProtection_(childElement); break;
        }
    }, this);

};


/**
 * Get fill id
 * @return {number}
 */
jsopenxml.styles.Xf.prototype.getFillId = function () {
    return this.fillId;
};


/**
 * Get the xf id
 * @return {number}
 */
jsopenxml.styles.Xf.prototype.getXfId = function () {
    return this.xfId;
};

/**
 * Get font id
 * @return {number}
 */
jsopenxml.styles.Xf.prototype.getFontId = function () {
    return this.fontId;
};

/**
 * Get alignment
 * @return {jsopenxml.styles.Alignment|null}
 */
jsopenxml.styles.Xf.prototype.getAlignment = function () {
    return this.alignment || null;
};

/**
 * Get border id
 * @return {number}
 */
jsopenxml.styles.Xf.prototype.getBorderId = function () {
    return this.borderId;
};

