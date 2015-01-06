/**
 * @fileoverview Handles an OpenXmlDocument. And provides helper functions for
 * working with the document.
 */

goog.provide('jsopenxml.types.OpenXmlDocument');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.types = window.jsopenxml.types || {};
//--- intellisense end -------------------------------------------------------//

window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.types = window.jsopenxml.types || {};

goog.require('jsopenxml.types.ContentTypes');
goog.require('jsopenxml.Relationships');
goog.require('jsopenxml.Workbook');
goog.require('jsopenxml.Worksheet');
goog.require('jsopenxml.stringtable.Sst');
goog.require('jsopenxml.styles.StyleSheet');
goog.require('jsopenxml.Presets');
goog.require('jsopenxml.Theme');

/**
 * @constructor
 * @param {jsopenxml.types.OpenXmlDocumentData} data
 */
jsopenxml.types.OpenXmlDocument = function (data) {

    /**
     * All the preset data can be accessed through this.
     * @type {jsopenxml.Presets}
     */
    this.presets_ = jsopenxml.Presets.getInstance();

    this.data = data;

    var contentTypesXmlDocument = data["[Content_Types].xml"];
    var types = contentTypesXmlDocument.firstChild;
    // If the first node is a processing instruction, skip over it. This occurs 
    // in IE 11, the first node is the xml declaration node.
    if (types.nodeType == 7) {
        types = types.nextSibling;
    }
    if (!types) {
        throw "An open xml document requires a content types xml file.";
    }

    goog.array.forEach(types.childNodes, function (defaultNode) {
        // If not an element node skip
        if (defaultNode.nodeType != 1) return;


        var contentType = defaultNode.getAttribute("ContentType");
        var partName = defaultNode.getAttribute("PartName");
        if ((!partName) || (!contentType))
            return; // Skip over this node as it doesn't conform to the spec.

        // If partName starts with a forward slash, remove it.
        if (partName.slice(0, 1) == "/") partName = partName.slice(1);

        switch (contentType) {
            case jsopenxml.types.ContentTypes.Macro_Workbook:
            case jsopenxml.types.ContentTypes.Workbook:
                this.isSpreadsheet_ = true;
                this.workbook = new jsopenxml.Workbook(data[partName]);
                this.workbookPartName = partName;
                // Get the reference document for the workbook
                var endSlice = partName.lastIndexOf("/");
                if (endSlice == -1) endSlice = 0;
                var workbookReferencePartName = partName.slice(0, endSlice) +
                    "/_rels/workbook.xml.rels";

                // TODO Need to use this to rely on references
                this.workbookReference_ =
                    new jsopenxml.Relationships(data[workbookReferencePartName]);
                
                break;
            case jsopenxml.types.ContentTypes.Worksheet:
                // We'll link part names to Worksheet instances
                this.worksheets = this.worksheets || {};
                this.worksheets[partName] = new jsopenxml.Worksheet(data[partName]);
                break;
            case jsopenxml.types.ContentTypes.Shared_String_Table:
                this.sharedStringTable = new jsopenxml.stringtable.Sst(data[partName]);
                break;
            case jsopenxml.types.ContentTypes.Styles:
                this.styleSheet = new jsopenxml.styles.StyleSheet(data[partName], this);
                break;
            case jsopenxml.types.ContentTypes.Theme:
                // Only zero or one theme can exist
                this.theme = new jsopenxml.Theme(data[partName]);
        };
    }, this);

    if (this.isSpreadsheet() && this.getWorksheets().length == 0) {
        throw "A spreadsheet requires at least one worksheet.";
    }
};


/**
 * Is this document a spreadsheet?
 * @return {boolean}
 */
jsopenxml.types.OpenXmlDocument.prototype.isSpreadsheet = function () {
    return this.isSpreadsheet || false;
};




/**
 * Get the theme
 * @return {jsopenxml.Theme|null}
 */
jsopenxml.types.OpenXmlDocument.prototype.getTheme = function () {
    return this.theme;
};
