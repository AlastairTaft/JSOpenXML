/**
 * @fileoverview This element contains borders formatting information, 
 * specifying all border definitions for all cells in the workbook.
 */


goog.provide('jsopenxml.styles.Borders');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.styles = window.jsopenxml.styles || {};
//--- intellisense end -------------------------------------------------------//

goog.require('jsopenxml.styles.Border');
goog.require('jsopenxml.types.ElementArray');

/**
 * @constructor
 * @param {Element} borders
 */
jsopenxml.styles.Borders = function (borders) {
    this.element = borders;

    this.count = borders.getAttribute("count");
    if (this.count) this.count = window.parseInt(this.count);
};
goog.inherits(jsopenxml.styles.Borders, jsopenxml.types.ElementArray);


/**
 * Get a child record.
 * @param {number} index 0 based index.
 * @return {jsopenxml.styles.Border}
 */
jsopenxml.styles.Borders.prototype.getChild = function (index) {
    // We will keep a cache_ of nodes we've previously asked for, this means
    // we don't have to search for them more than once.
    this.cache_ = this.cache_ || [];

    // If we've previously retrieved the value it will be in the cache
    if (this.cache_[index]) return this.cache_[index];

    this.cache_[index] = new jsopenxml.styles.Border(
        goog.base(this, 'getChild', index), this.openXmlDocument);

    return this.cache_[index];
};