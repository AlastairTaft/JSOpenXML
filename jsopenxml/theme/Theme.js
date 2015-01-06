/**
 * @fileoverview An instance of this part type contains information about a 
 * document's theme, which is a combination of color scheme, font scheme, and 
 * format scheme (the latter also being referred to as effects). For a 
 * WordprocessingML document, the choice of theme affects the color and style of 
 * headings, among other things. For a SpreadsheetML document, the choice of 
 * theme affects the color and style of cell contents and charts, among other 
 * things. For a PresentationML document, the choice of theme affects the 
 * formatting of slides, handouts, and notes via the associated master, among 
 * other things. A WordprocessingML or SpreadsheetML package shall contain zero 
 * or one Theme part, which shall be the target of an implicit relationship in 
 * a Main Document (�11.3.10) or Workbook (�12.3.23) part.
 * 
 * Page 146 of the spec
 */


goog.provide('jsopenxml.Theme');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
//--- intellisense end -------------------------------------------------------//

goog.require('jsopenxml.theme.ThemeElements');

/**
 * @constructor
 * @param {Document|Element} theme The theme xml document or theme element.
 */
jsopenxml.Theme = function (theme) {
    if (theme.nodeName && theme.nodeName == "a:theme") {
        // The PresetCellStyles class needs to construct a StyleSheet object
        // directly from the element without using a document.
        this.element = theme;
    } else {
        this.document = theme;
        this.element = this.document.firstChild;
    }
    // If the first node is a processing instruction, skip over it. This occurs 
    // in IE 11, the first node is the xml declaration node.
    if (this.element.nodeType == 7) {
        this.element = this.element.nextSibling;
    }

    goog.array.forEach(this.element.childNodes, function (childElement) {
        switch (childElement.nodeName) {
            case "a:themeElements": this.themeElements = new jsopenxml.theme.ThemeElements(childElement); break;
        }
    }, this);
}

/**
 * Get the clrScheme instance
 * @return {jsopenxml.theme.ClrScheme}
 */
jsopenxml.Theme.prototype.getClrScheme = function () {
    return this.themeElements.getClrScheme();
};


/**
 * Get the fontScheme instance
 * @return {jsopenxml.theme.FontScheme}
 */
jsopenxml.Theme.prototype.getFontScheme = function () {
    return this.themeElements.getFontScheme();
};


/**
 * Get the fmtScheme instance
 * @return {jsopenxml.theme.FmtScheme}
 */
jsopenxml.Theme.prototype.getFmtScheme = function () {
    return this.themeElements.getFmtScheme();
};