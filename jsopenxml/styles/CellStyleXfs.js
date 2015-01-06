/**
 * @fileoverview This element contains the master formatting records (xf's) 
 * which define the formatting for all named cell styles in this workbook. 
 * Master formatting records reference individual elements of formatting 
 * (e.g., number format, font definitions, cell fills, etc) by specifying a 
 * zero-based index into those collections. Master formatting records also 
 * specify whether to apply or ignore particular aspects of formatting. 
 * [Example: Whether to apply a border or not. end example]
 * 
 * A cell can have both direct formatting (e.g., bold) and a cell style (e.g., 
 * Explanatory) applied to it. Therefore, both the cell style xf records and 
 * cell xf records shall be read to understand the full set of formatting 
 * applied to a cell. 
 *
 * [Example: This example shows 4 master formatting records, 
 * each defining formatting for a named cell style (expressed in the cellStyles 
 * collection). Note that 0th record does not express any "apply" attributes, 
 * while the other records do express "apply" attribute values. For example, the 
 * last record specifies that number format, alignment, and protection 
 * formatting will not be applied to the cell, even when that information is 
 * specified in related formatting records.
 * 
 * Page 1763 of spec...
 */


goog.provide('jsopenxml.styles.CellStyleXfs');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.styles = window.jsopenxml.styles || {};
//--- intellisense end -------------------------------------------------------//

goog.require('jsopenxml.styles.CellXfs');


/**
 * @constructor
 * @param {Element} cellStyleXfs
 */
jsopenxml.styles.CellStyleXfs = function (cellStyleXfs) {
    goog.base(this, cellStyleXfs);
};
goog.inherits(jsopenxml.styles.CellStyleXfs, jsopenxml.styles.CellXfs)