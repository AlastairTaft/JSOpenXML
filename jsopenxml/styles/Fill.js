
/**
 * @fileoverview Handle the fill element, decorate an element to fill that 
 * element
 */

goog.provide('jsopenxml.styles.Fill');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.styles = window.jsopenxml.styles || {};
//--- intellisense end -------------------------------------------------------//

window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.styles = window.jsopenxml.styles || {};
goog.require('jsopenxml.styles.PatternFill');


/**
 * @constructor
 * @param {Element} fillElement An xml fill element.
 */
jsopenxml.styles.Fill = function (fillElement, openXmlDocument) {
    this.element = fillElement;
    this.openXmlDocument = openXmlDocument;

    goog.array.forEach(this.element.childNodes, function (childElement) {
        if (childElement.nodeType != 1) return;
        switch (childElement.nodeName) {
            case "patternFill":
                this.patternFill =
                    new jsopenxml.styles.PatternFill(childElement, openXmlDocument);
                break;
        }
    }, this);
};

/**
 * Get the background fill colour
 * @return {string} css colour string
 */
jsopenxml.styles.Fill.prototype.getCssColour = function () {
    return this.patternFill.getCssColour();
};


/**
 * Get background colour
 */
jsopenxml.styles.Fill.prototype.getPatternColour = function () {
    return this.patternFill.getPatternColour();
};


/**
 * Get the pattern type
 */
jsopenxml.styles.Fill.prototype.getPattern = function () {
    return this.patternFill.getPattern();
};

