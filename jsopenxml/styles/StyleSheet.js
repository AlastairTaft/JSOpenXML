
/**
 * Handles the styles document. This is the go to class for parsing the styles
 * xml page.
 */

goog.provide('jsopenxml.styles.StyleSheet');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.styles = window.jsopenxml.styles || {};
//--- intellisense end -------------------------------------------------------//

window.jsopenxml = window.jsopenxml || {};
goog.require('jsopenxml.styles.CellStyle');
goog.require('jsopenxml.styles.Xf');
goog.require('jsopenxml.styles.Fill');
goog.require('jsopenxml.styles.CellXfs');
goog.require('jsopenxml.styles.CellStyleXfs');
goog.require('jsopenxml.styles.Fills');
goog.require('jsopenxml.styles.Fonts');
goog.require('jsopenxml.styles.Borders');

/**
 * @constructor
 */
jsopenxml.styles.StyleSheet = function (stylesDocument, openXmlDocument) {
    if (stylesDocument.nodeName && stylesDocument.nodeName == "styleSheet") {
        // The PresetCellStyles class needs to construct a StyleSheet object
        // directly from the element without using a document.
        this.element = stylesDocument;
    } else {
        this.document = stylesDocument;
        this.element = this.document.firstChild;
    }
    // If the first node is a processing instruction, skip over it. This occurs 
    // in IE 11, the first node is the xml declaration node.
    if (this.element.nodeType == 7) {
        this.element = this.element.nextSibling;
    }
    this.openXmlDocument = openXmlDocument;


    goog.array.forEach(this.element.childNodes, function (childElement) {
        switch (childElement.nodeName) {
            case "cellStyles": this.cellStyles = childElement; break;
            case "cellStyleXfs": this.cellStyleXfs = new jsopenxml.styles.CellStyleXfs(childElement); break;
            case "cellXfs": this.cellXfs = new jsopenxml.styles.CellXfs(childElement); break;
            case "fills": this.fills = new jsopenxml.styles.Fills(childElement, this.openXmlDocument); break;
            case "fonts": this.fonts = new jsopenxml.styles.Fonts(childElement, this.openXmlDocument); break;
            case "borders": this.borders = new jsopenxml.styles.Borders(childElement); break;
        }
    }, this);
};

/**
 * Get the cell style
 * @param {Number} The cell style index
 * @returns {jsopenxml.styles.CellStyle}
 */
jsopenxml.styles.StyleSheet.prototype.getCellStyle = function (index) {
    // TODO Update this to worth the same way with an instance used like
    // getCellFx or getCellStyleFx
    throw "Needs updating to not create a new instance every time, should " 
        + "reference an existing instance.";
    var cellStyleElement = this.cellStyles.childNodes[index];
    return new jsopenxml.styles.CellStyle(cellStyleElement, this);
};

/**
 * Get an xf record from the cellStyleXfs element
 * @returns {jsopenxml.styles.Xf} An xf element
 */
jsopenxml.styles.StyleSheet.prototype.getCellStyleXf = function (index) {
    return this.cellStyleXfs.getChild(index);
};


/**
 * Get an xf record from the cellXfs element. These are what individual
 * cells in the worksheet reference.
 * @returns {jsopenxml.styles.Xf} An xf element
 */
jsopenxml.styles.StyleSheet.prototype.getCellXf = function (index) {
    return this.cellXfs.getChild(index);
};

/**
 * Get a fill element
 * @param {Number} index
 * @returns {jsopenxml.styles.Fill}
 */
jsopenxml.styles.StyleSheet.prototype.getFill = function (index) {
    return this.fills.getChild(index);
};

/**
 * Get cell fill
 * @param {jsopenxml.workbook.C} cell
 * @returns {string|null} If the cell doesn't have a specific fill will return 
 * null, this doesn't mean the row or column doesn't have a default fill.
 * TODO Does not cater for pattern fills.
 */
jsopenxml.styles.StyleSheet.prototype.getCellFill = function (cell) {
    throw "Method needs removing or updating.";

    /*var styleIndex = cell.getStyleIndex();
    if (!styleIndex)
        return null;

    var xf = this.getCellXf(styleIndex);
    // Should fill be applied
    if (!xf.applyFill) return;
    var fillId = xf.getFillId("fillId");
    var fill = this.getFill(fillId);
    return fill.getColour();*/
};


/**
 * Get font
 * @param {number} index
 * @return {jsopenxml.styles.Font}
 */
jsopenxml.styles.StyleSheet.prototype.getFont = function (index) {
    return this.fonts.getChild(index);
};


/**
 * Get a border element
 * @param {Number} index
 * @returns {jsopenxml.styles.Border}
 */
jsopenxml.styles.StyleSheet.prototype.getBorder = function (index) {
    return this.borders.getChild(index);
};
