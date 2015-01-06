/**
 * @fileoverview Handles the sheet element inside the workbook document.
 */


goog.provide('jsopenxml.workbook.Sheet');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.workbook = window.jsopenxml.workbook || {};
//--- intellisense end -------------------------------------------------------//

window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.workbook = window.jsopenxml.workbook || {};

goog.require('jsopenxml.types.ST_SheetState');


/**
 * @constructor
 * @param {Element} sheet
 */
jsopenxml.workbook.Sheet = function (sheet) {
    this.id = sheet.getAttribute("r:id");
    goog.asserts.assertString(this.id, "The relationship id is required.");

    this.name = sheet.getAttribute("name");

    this.sheetId = sheet.getAttribute("sheetId");

    /**
     * @type {jsopenxml.types.ST_SheetState}
     */
    this.state = sheet.getAttribute("state")
        // Defaults to visible
        || jsopenxml.types.ST_SheetState.Visible;
};

/**
 * Get the relationship id, this is the id that links it to a worksheet.
 * @return {string}
 */
jsopenxml.workbook.Sheet.prototype.getRelationshipId = function () {
    return this.id;
};

/**
 * Get the name
 * @return {string}
 */
jsopenxml.workbook.Sheet.prototype.getName = function () {
    return this.name;
};
