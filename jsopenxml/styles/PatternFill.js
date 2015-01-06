

/**
 * @fileoverview The patternFill element, decorate an element with a patternFill
 */


goog.provide('jsopenxml.styles.PatternFill');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.styles = window.jsopenxml.styles || {};
//--- intellisense end -------------------------------------------------------//

window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.styles = window.jsopenxml.styles || {};
goog.require('jsopenxml.types.ST_PatternType');
goog.require('jsopenxml.styles.BgColor');
goog.require('jsopenxml.styles.FgColor');


/**
 * @constructor
 */
jsopenxml.styles.PatternFill = function (patternFillElement, openXmlDocument) {
    this.element = patternFillElement;
    this.openXmlDocument = openXmlDocument;

    goog.array.forEach(this.element.childNodes, function (childElement) {
        switch (childElement.nodeName) {
            case "fgColor":
                this.fgColor = new jsopenxml.styles.FgColor(childElement, openXmlDocument);
                break;
            case "bgColor":
                this.bgColor = new jsopenxml.styles.BgColor(childElement, openXmlDocument);
                break;
        }
    }, this);

    this.patternType = this.element.getAttribute("patternType");

    // TODO Support the other pattern types
    /*switch (patternType) {
        case jsopenxml.types.ST_PatternType.SOLID:
            // Only the fgColor is used
            this.element.style.backgroundColor = 
            break;
    }*/
};

/**
 * Get the background fill css colour
 * @return {string} A css colour string
 */
jsopenxml.styles.PatternFill.prototype.getCssColour = function () {
    
    if (this.patternType == jsopenxml.types.ST_PatternType.NONE) {
        return null;
    } else if (this.patternType == jsopenxml.types.ST_PatternType.SOLID) {
        return this.fgColor.getCssColour()
            // Test falling back on the background colour.
            || this.bgColor.getCssColour();
    } else if (this.patternType == jsopenxml.types.ST_PatternType.GRAY_125) {
        // This fill style is a grey scale of 1/8
        return "#dfdfdf";
    } else if (this.patternType == jsopenxml.types.ST_PatternType.GRAY_0625) {
        // This fill style is a grey scale of 1/16
        return "#bfbfbf";
    } else {
        return this.bgColor.getCssColour();
    }
};


/**
 * Get background colour
 */
jsopenxml.styles.PatternFill.prototype.getPatternColour = function () {
    return (this.fgColor) ? this.fgColor.getColour() : null;
};


/**
 * Get the pattern type
 */
jsopenxml.styles.PatternFill.prototype.getPattern = function () {
    return this.patternType;
};


/**
 * Get the background colour explicitly, consider using just getColour as this
 * function won't return a solid fills colour.
 * @return {string|null} Returns a hex string
 */
jsopenxml.styles.PatternFill.prototype.getBackgroundColour = function () {
    return (this.bgColor) ? this.bgColor.getColour() : null;
};
