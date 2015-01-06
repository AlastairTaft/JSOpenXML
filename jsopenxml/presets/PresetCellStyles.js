/**
 * @fileoverview Handles the presetCellStyles xml document, this is embedded
 * in the spreadsheet viewer and should not be configurable.
 */

goog.provide('jsopenxml.presets.PresetCellStyles');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.presets = window.jsopenxml.presets || {};
//--- intellisense end -------------------------------------------------------//

goog.require('jsopenxml.styles.StyleSheet');
goog.require('goog.array');
goog.require('goog.userAgent');

/**
 * @constructor
 * @param {Document} presetCellStylesDocument
 */
jsopenxml.presets.PresetCellStyles = function (presetCellStylesDocument) {
    this.document = presetCellStylesDocument;


    this.presetCellStyles = presetCellStylesDocument.firstChild;

    // If the first node is a processing instruction, skip over it. This occurs 
    // in IE 11, the first node is the xml declaration node.
    if (this.presetCellStyles.nodeType == 7) {
        this.presetCellStyles = this.presetCellStyles.nextSibling;
    }

    // Lookup the stylesheet by name.
    this.tagNameLookup_ = {};

    // Lookup the stylesheet by builtinId
    this.builtinIdLookup_ = [];
    // Lookup the name of the stylesheet by builtinId
    this.builtinIdLookupToName_ = [];

    goog.array.forEach(
        this.presetCellStyles.childNodes,
        function (childElement) {
            // We're not interested in non element nodes 
            if (childElement.nodeType != 1) return;

            var stylesheet;
            if (goog.userAgent.IE || goog.userAgent.SAFARI) {
                stylesheet = childElement.firstChild;
                while (stylesheet.nodeType != 1 && stylesheet.nextSibling)
                    stylesheet = stylesheet.nextSibling;
            } else {
                stylesheet = childElement.firstElementChild;
            }
            stylesheet = new jsopenxml.styles.StyleSheet(stylesheet);
            this.tagNameLookup_[childElement.tagName] = stylesheet;
            var builtinId = window["parseInt"](
                childElement.getAttribute("builtinId"));

            if (window["isNaN"](builtinId)) {

                // Before throwing an error try the incorrectly spelt 
                // 'builtinID' as the spec seemed to contain this value on
                // the style with name 'accent3'.
                builtinId = window["parseInt"](
                    childElement.getAttribute("builtinID"));

                if (window["isNaN"](builtinId)) {
                    throw "'builtinId' is a required attribute.";
                }
            }
            this.builtinIdLookup_[builtinId] = stylesheet;
            this.builtinIdLookupToName_[builtinId] = childElement.tagName;
        },
        this
    );
};



/**
 * Get a stylesheet by builtinId. Returns null if there is no built in style for
 * the provided builtinId.
 * @param {number} builtinId
 * @return {jsopenxml.styles.StyleSheet|null} 
 */
jsopenxml.presets.PresetCellStyles.prototype.getStyleSheet =
function (builtinId) {
    return this.builtinIdLookup_[builtinId] || null;
};



/**
 * Get a stylesheet by it's name. Returns null if there is no built in style for
 * the provided name.
 * @param {string} name
 * @return {jsopenxml.styles.StyleSheet|null} 
 */
jsopenxml.presets.PresetCellStyles.prototype.getStyleSheetByName =
function (name) {
    return this.tagNameLookup_[name] || null;
};

/**
 * Get the style sheet's name. Returns null if there is no built in style for
 * the provided builtinId.
 * @param {string} name
 * @return {jsopenxml.styles.StyleSheet|null} 
 */
jsopenxml.presets.PresetCellStyles.prototype.getStyleSheetName =
function (builtinId) {
    return this.builtinIdLookupToName_[builtinId] || null;
};
