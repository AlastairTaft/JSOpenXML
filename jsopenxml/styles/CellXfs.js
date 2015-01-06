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


goog.provide('jsopenxml.styles.CellXfs');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.styles = window.jsopenxml.styles || {};
//--- intellisense end -------------------------------------------------------//

goog.require('jsopenxml.styles.Xf');
goog.require('jsopenxml.types.ElementArray');

/**
 * @constructor
 * @param {Element} cellXfs
 */
jsopenxml.styles.CellXfs = function (cellXfs) {
    this.element = cellXfs;

    this.count = cellXfs.getAttribute("count");
    if (this.count) this.count = window.parseInt(this.count);
};
goog.inherits(jsopenxml.styles.CellXfs, jsopenxml.types.ElementArray);


/**
 * Get a child record.
 * @param {number} index 0 based index.
 * @return {jsopenxml.styles.Xf}
 */
jsopenxml.styles.CellXfs.prototype.getChild = function (index) {
    // We will keep a cache_ of nodes we've previously asked for, this means
    // we don't have to search for them more than once.
    this.cache_ = this.cache_ || [];

    // If we've previously retrieved the value it will be in the cache
    if (this.cache_[index]) return this.cache_[index];

    this.cache_[index] = new jsopenxml.styles.Xf(
        goog.base(this, 'getChild', index));

    return this.cache_[index];
};