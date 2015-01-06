/**
 * @fileoverview This element contains all font definitions for this workbook.
 */


goog.provide('jsopenxml.styles.Fonts');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.styles = window.jsopenxml.styles || {};
//--- intellisense end -------------------------------------------------------//

goog.require('jsopenxml.styles.Font');
goog.require('jsopenxml.types.ElementArray');

/**
 * @constructor
 * @param {Element} fonts
 */
jsopenxml.styles.Fonts = function (fonts, openXmlDocument) {
    this.element = fonts;
    this.openXmlDocument = openXmlDocument;

    this.count = fonts.getAttribute("count");
    if (this.count) this.count = window.parseInt(this.count);
};
goog.inherits(jsopenxml.styles.Fonts, jsopenxml.types.ElementArray);


/**
 * Get a child record.
 * @param {number} index 0 based index.
 * @return {jsopenxml.styles.Xf}
 */
jsopenxml.styles.Fonts.prototype.getChild = function (index) {
    // We will keep a cache_ of nodes we've previously asked for, this means
    // we don't have to search for them more than once.
    this.cache_ = this.cache_ || [];

    // If we've previously retrieved the value it will be in the cache
    if (this.cache_[index]) return this.cache_[index];

    this.cache_[index] = new jsopenxml.styles.Font(
        goog.base(this, 'getChild', index), this.openXmlDocument);

    return this.cache_[index];
};