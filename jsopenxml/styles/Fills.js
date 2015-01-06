/**
 * @fileoverview This element contains the master formatting records (xf) which 
 * define the formatting applied to cells in this workbook. These records are 
 * the starting point for determining the formatting for a cell. Cells in the 
 * Sheet Part reference the xf records by zero-based index.
 * 
 * A cell can have both direct formatting (e.g., bold) and a cell style (e.g., 
 * Explanatory) applied to it. Therefore, both the cell style xf records and 
 * cell xf records shall be read to understand the full set of formatting 
 * applied to a cell.
 */


goog.provide('jsopenxml.styles.Fills');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.styles = window.jsopenxml.styles || {};
//--- intellisense end -------------------------------------------------------//

goog.require('jsopenxml.styles.Fill');
goog.require('jsopenxml.types.ElementArray');

/**
 * @constructor
 * @param {Element} cellXfs
 */
jsopenxml.styles.Fills = function (fills, openXmlDocument) {
    this.element = fills;
    this.openXmlDocument = openXmlDocument;

    this.count = fills.getAttribute("count");
    if (this.count) this.count = window.parseInt(this.count);
};
goog.inherits(jsopenxml.styles.Fills, jsopenxml.types.ElementArray);


/**
 * Get a child record.
 * @param {number} index 0 based index.
 * @return {jsopenxml.styles.Xf}
 */
jsopenxml.styles.Fills.prototype.getChild = function (index) {
    // We will keep a cache_ of nodes we've previously asked for, this means
    // we don't have to search for them more than once.
    this.cache_ = this.cache_ || [];

    // If we've previously retrieved the value it will be in the cache
    if (this.cache_[index]) return this.cache_[index];

    this.cache_[index] = new jsopenxml.styles.Fill(
        goog.base(this, 'getChild', index), this.openXmlDocument);

    return this.cache_[index];
};