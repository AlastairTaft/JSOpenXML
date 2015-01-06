/**
 * @fileoverview A handler for getting all the preset documents. The idea of 
 * using this is so that the method for getting the present documents 
 * can be changed in the future or the documents updated.
 */


goog.provide('jsopenxml.Presets');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
//--- intellisense end -------------------------------------------------------//

goog.require('jsopenxml.presets.PresetCellStyles');

/**
 * @constructor
 */
jsopenxml.Presets = function () {


    this.cache_ = {};

    // Preload known files
    this.presetCellStyles_ = new jsopenxml.presets.PresetCellStyles(
        this.getDocument("presetCellStyles.xml"));

};
goog.addSingletonGetter(jsopenxml.Presets);


/**
 * Get an xml document
 * @return {Document}
 */
jsopenxml.Presets.prototype.getDocument = function (filename) {
    if (this.cache_[filename]) return this.cache_[filename];

    var document;
    var request = new XMLHttpRequest();
    //var uri = window.location.href;
    // TODO Replace this method with something not hardcoded.
    var uri = "http://localhost:1050/Scripts/jsopenxml/presets/";
    uri = uri.slice(0, uri.lastIndexOf("/"));
    request.open("GET", uri + "/" + filename, false);
    request.onreadystatechange = function () {
        switch (request.readyState) {
            case 4: // Got a response
                document = request.responseXML;
                break;
            default:
                break;
        }
    }
    request.send(null);
    this.cache_[filename] = document;
    return document;
};


/**
 * Get the preset cell styles
 * @return {jsopenxml.preset.PresetCellStyles}
 */
jsopenxml.Presets.prototype.getPresetCellStyles = function () {
    return this.presetCellStyles_;
};





/**
 * Get a stylesheet by builtinId. Returns null if there is no built in style for
 * the provided builtinId.
 * @param {number} builtinId
 * @return {jsopenxml.styles.StyleSheet|null} 
 */
jsopenxml.Presets.prototype.getBuiltInStyleSheet =
function (builtinId) {
    return this.presetCellStyles_.getStyleSheet(builtinId);
};





// Initiate it to load up straight away.
jsopenxml.Presets.getInstance();
