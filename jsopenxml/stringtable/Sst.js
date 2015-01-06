/**
 * @fileoverview Manages the shared string table
 */


goog.provide('jsopenxml.stringtable.Sst');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.stringtable = window.jsopenxml.stringtable || {};
//--- intellisense end -------------------------------------------------------//

goog.require('jsopenxml.types.ElementArray');

/**
 * @constructor
 * @param {Document} sstXml The sstXml element
 */
jsopenxml.stringtable.Sst = function (sstXml) {
    this.sstXml = sstXml.firstChild;
    // If the first node is a processing instruction, skip over it. This occurs 
    // in IE 11, the first node is the xml declaration node.
    if (this.sstXml.nodeType == 7) {
        this.sstXml = this.sstXml.nextSibling;
    }

    goog.base(this, this.sstXml);
};
goog.inherits(jsopenxml.stringtable.Sst, jsopenxml.types.ElementArray);


/**
 * An alias for getValue
 */
jsopenxml.stringtable.Sst.prototype.getValue = function (index) {
    return this.getChild(index);
};


/**
 * Get the string value at a specific index.
 * @param {Number} index
 */
jsopenxml.stringtable.Sst.prototype.getChild = function (index) {
    var node = goog.base(this, 'getChild', index);
    return (goog.userAgent.IE) ? node.text : node.textContent;
};
