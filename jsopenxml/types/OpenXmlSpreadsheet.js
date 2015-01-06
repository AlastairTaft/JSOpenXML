/**
 * @fileoverview Makes working with an open xml spreadsheet easier.
 */

goog.provide('jsopenxml.types.OpenXmlSpreadsheet');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.types = window.jsopenxml.types || {};
//--- intellisense end -------------------------------------------------------//

window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.types = window.jsopenxml.types || {};

goog.require('jsopenxml.types.OpenXmlDocument');


/**
 * @constructor
 * @param {jsopenxml.types.OpenXmlDocumentData} data
 * @extends {jsopenxml.types.OpenXmlDocument}
 */
jsopenxml.types.OpenXmlSpreadsheet = function (data) {
    goog.base(this, data);
};
goog.inherits(jsopenxml.types.OpenXmlSpreadsheet,
    jsopenxml.types.OpenXmlDocument);




/**
 * Get all worksheets in this document.
 * @return {Array<Document>}
 */
jsopenxml.types.OpenXmlSpreadsheet.prototype.getWorksheets = function () {
    return this.worksheets || [];
};


/**
 * Get the related worksheet from the workbook.
 * @param {jsopenxml.workbook.Sheer|string} sheet A sheet or a relationshipId
 */
jsopenxml.types.OpenXmlSpreadsheet.prototype.getWorksheet =
function (sheet) {
    var relationalId;
    if (sheet instanceof jsopenxml.workbook.Sheet)
        relationalId = sheet.getRelationshipId();
    else
        relationalId = sheet; // Assume the id was passed in

    var target = this.workbookReference_.getTargetById(relationalId);
    var endSlice = this.workbookPartName.lastIndexOf("/");
    if (endSlice == -1) endSlice = 0;
    var worksheetPartName = this.workbookPartName.slice(0, endSlice) +
        "/" + target;

    return this.worksheets[worksheetPartName];
    
};


/**
 * Get the workbook
 * @return 
 */
jsopenxml.types.OpenXmlSpreadsheet.prototype.getWorkbook = function () {
    return this.workbook;

};


/**
 * Get the shared string table
 * @return {jsopenxml.stringtable.Sst}
 */
jsopenxml.types.OpenXmlSpreadsheet.prototype.getStringTable = function () {
    return this.sharedStringTable;
};

/**
 * Get the style sheet 
 * @return {jsopenxml.styles.StyleSheet}
 */
jsopenxml.types.OpenXmlSpreadsheet.prototype.getStyleSheet = function () {
    return this.styleSheet;
};


/**
 * Get a built in stylesheet
 */
jsopenxml.types.OpenXmlSpreadsheet.prototype.getBuiltInStyleSheet =
function (builtinId) {
    return this.presets_.getBuiltInStyleSheet(builtinId);
};

