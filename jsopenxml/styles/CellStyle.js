
/**
 * @fileoverview Handles a cell style element
 * 
 * This element represents the name and related formatting records for a named cell style in this workbook.
 *
 * Annex G contains a listing of cellStyles whose corresponding formatting records are implied rather than
 * explicitly saved in the file. In this case, a builtinId attribute is written on the cellStyle record, but no
 * corresponding formatting records are written.
 *
 * For all built-in cell styles, the builtinId determines the style, not the name. For all cell styles, Normal is applied
 * by default.
 */

goog.provide('jsopenxml.styles.CellStyle');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.styles = window.jsopenxml.styles || {};
//--- intellisense end -------------------------------------------------------//

/**
 * @constructor
 * @param {Element} cellStyleElement 
 */
jsopenxml.styles.CellStyle = function (cellStyleElement) {
    this.cellStyleElement_ = cellStyleElement;

    var formatIndex = this.cellStyleElement_.getAttribute("xfId");
    //this.cellFormat_ = this.styles_.getCellStyleXf(formatIndex);

    // The index of a built-in cell style
    this.builtinId = cellStyleElement.getAttribute("builtinId") || null;
    if (this.builtinId != null)
        this.builtinId = window["parseInt"](this.builtinId);

    // True indicates that this built-in cell style has been customized.
    // By default built-in styles are not persisted when not in use. This flag indicates that a
    // built-in style has been modified, and therefore should be saved with the workbook, even
    // if not currently in use.
    this.customBuiltin = cellStyleElement.getAttribute("customBuiltin");

    // If 'true' do not show this style in the application UI.
    this.hidden = cellStyleElement.getAttribute("hidden");

    // Indicates that this formatting is for an outline style . When styles are applied to outline
    // levels (using the outline feature), this value is set and the formatting specified on this cell
    // style is applied to the corresponding level of the outline.
    this.iLevel = cellStyleElement.getAttribute("iLevel");

    // The name of the cell style.
    this.name = cellStyleElement.getAttribute("name");

    // The name of the cell style.
    this.xfId = cellStyleElement.getAttribute("xfId");

};



/**
 * Get the built in id.
 * @return {number}
 */
jsopenxml.styles.CellStyle.prototype.getBuiltInId = function () {
    return this.builtinId;
};


