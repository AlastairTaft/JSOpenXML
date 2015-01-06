/**
 * @fileoverview This element specifies the color and line style for the bottom 
 * border of a cell.
 * 
 * Page 1761 of the spec.
 */

goog.provide('jsopenxml.styles.Bottom');

/**
 * @constructor
 * @param {Element} bottom
 */
jsopenxml.styles.Bottom = function (bottom) {
    this.element = bottom;

    /**
     * @type {jsopenxml.types.ST_BorderStyle}
     */
    this.style = this.element.getAttribute("style");


    goog.array.forEach(this.element.childNodes, function (childElement) {
        if (childElement.nodeType != 1) return;
        switch (childElement.nodeName) {
            case "color": this.color = new jsopenxml.worksheet.Color(childElement); break;
        }
    }, this);
};

/**
 * Get border style
 * @return {jsopenxml.types.ST_BorderStyle}
 */
jsopenxml.styles.Bottom.prototype.getStyle = function () {
    return this.style;
};

/**
 * Get the colour
 * @return {jsopenxml.styles.Color|null}
 */
jsopenxml.styles.Bottom.prototype.getColour = function () {
    return this.color || null;
};