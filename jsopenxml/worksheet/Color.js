/**
 * @fileoverview One of the colors associated with the data bar or color scale.
 * The auto attribute shall not be used in the context of data bars.
 */

goog.provide('jsopenxml.worksheet.Color');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.worksheet = window.jsopenxml.worksheet || {};
//--- intellisense end -------------------------------------------------------//

goog.require('jsopenxml.types.defaultIndexedColors');

/**
 * @constructor
 * @param {Element} color
 */
jsopenxml.worksheet.Color = function (color, openXmlDocument) {
    this.element = color;
    this.openXmlDocument = openXmlDocument;
    
    // A boolean value indicating the color is automatic and system color 
    // dependent.
    this.auto = this.element.getAttribute("auto");
    if (this.auto != null) this.auto = !!window["parseInt"](this.auto);


    // Indexed color value. Only used for backwards compatibility. References a 
    // color in indexedColors.
    this.indexed = this.element.getAttribute("indexed");
    if (this.indexed != null)
        this.indexed = window["parseInt"](this.indexed);

    // Standard Alpha Red Green Blue color value (ARGB).
    this.rgb = this.element.getAttribute("rgb");

    // A zero-based index into the <clrScheme> collection (�20.1.6.2), 
    // referencing a particular <sysClr> or <srgbClr> value expressed in the 
    // Theme part.
    this.theme = this.element.getAttribute("theme");
    if (this.theme) this.theme = window["parseInt"](this.theme);

    // Specifies the tint value applied to the color.
    // See page 1608 of the spec.
    this.tint = this.element.getAttribute("tint");
    if (this.tint) window["parseFloat"](this.tint);
};


/**
 * Return the auto value
 * @return {boolean}
 */
jsopenxml.worksheet.Color.prototype.isAuto = function () {
    return this.auto;
};

/**
 * Get the indexed value
 * @return {number}
 */
jsopenxml.worksheet.Color.prototype.getIndexed = function () {
    return this.indexed;
};

/**
 * Get the theme id
 * @return {number}
 */
jsopenxml.worksheet.Color.prototype.getThemeId = function () {
    return this.theme;
};


/**
 * Get the tint value
 * @return {number}
 */
jsopenxml.worksheet.Color.prototype.getTint = function () {
    return this.tint;
};


/**
 * Get the css colour value
 * @return {string} hex string including the hash.
 */
jsopenxml.worksheet.Color.prototype.getCssColour = function () {
    // TODO Apply tint and other attributes

    if (this.auto) {
        // System colour, use black
        return "#000000";
    }

    // This is in the format "AARRGGBB";
    if (this.rgb != null)
        return "#" + this.rgb.slice(2, 4) + this.rgb.slice(4, 6)
            + this.rgb.slice(6, 8);


    if (
        // Ignore the theme for now as the colour it sets doesn't seem to be
        // correct.
        false
        && this.theme != null) {
        var theme = this.openXmlDocument.getTheme();
        var themeElement = theme.getClrScheme().getChild(this.theme);
        var sysClr = themeElement.firstChild;
        while (sysClr.nodeType != 1) {
            sysClr = sysClr.nextSibling;
            if (!sysClr) break;
        };
        var rgbColour = sysClr.getAttribute("val");
        if (goog.color.isValidHexColor_("#" + rgbColour)) {
            return "#" + rgbColour;
        } else {
            throw "Unhandled colour value.";
        }
    }


    if (this.indexed != null) {
        // Check if the stylesheet has any indexedColor records. 
        //var stylesheet = this.openXmlDocument.getStyleSheet();
        // TODO...




        // If stylesheet does not contain any indexed colours use the default
        // values.
        var argbColour = jsopenxml.types.defaultIndexedColors[this.indexed];
        return "#" + argbColour.slice(2, 4) + argbColour.slice(4, 6)
            + argbColour.slice(6, 8);
    }

    return null;
};
