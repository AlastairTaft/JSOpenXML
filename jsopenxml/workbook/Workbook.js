/**
 * @fileoverview Handles the workbook xml document.
 */


goog.provide('jsopenxml.Workbook');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
//--- intellisense end -------------------------------------------------------//

window.jsopenxml = window.jsopenxml || {};

goog.require('jsopenxml.workbook.Sheet');

/**
 * @constructor
 * @param {Document} workbook
 * @param {Document} reference This is the workbook reference document 
 * ('_rels/workbook.xml.rels')
 */
jsopenxml.Workbook = function (workbook) {
    this.document = workbook;

    this.workbook = workbook.firstChild;
    // If the first node is a processing instruction, skip over it. This occurs 
    // in IE 11, the first node is the xml declaration node.
    if (this.workbook.nodeType == 7) {
        this.workbook = this.workbook.nextSibling;
    }

    goog.array.forEach(this.workbook.childNodes, function (childElement) {
        switch (childElement.nodeName) {
            case "sheets":
                this.sheets = [];
                goog.array.forEach(childElement.childNodes,
                    function (sheetElement) {
                        // If not an element node skip
                        if (sheetElement.nodeType != 1) return;

                        this.sheets.push(
                            new jsopenxml.workbook.Sheet(sheetElement));
                    }, this);
                break;
        }
    }, this);

};

// This function should only exist in the jsopenxml.types.OpenXmlDocument class.
/**
 * Get a worksheet that corresponds to a sheet element
 * @param {jsopenxml.workbook.Sheet|string} sheet This can be a sheet record
 * or that sheets relationship id.
 *
/*jsopenxml.Workbook.prototype.getWorksheet = function (sheet) {
    var relationshipId;
    if (sheet instanceof jsopenxml.types.ST_Relation) {
        relationshipId = sheet;
    } else if (sheet instanceof jsopenxml.workbook.Sheet) {
        relationshipId = sheet.getRelationshipId();
    } else {
        throw "Invalid parameter.";
    }
    
};*/


/**
 * Get all the sheets in this workbook.
 * @return {Array<jsopenxml.workbook.Sheet>}
 */
jsopenxml.Workbook.prototype.getSheets = function () {
    return this.sheets || [];
};
