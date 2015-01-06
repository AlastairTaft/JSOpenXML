/**
 * @fileoverview A base class if an element is typically only made up of child 
 * elements all of the same type.
 */

goog.provide('jsopenxml.types.ElementArray');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.types = window.jsopenxml.types || {};
//--- intellisense end -------------------------------------------------------//

/**
 * @constructor
 * @param {Element} element
 */
jsopenxml.types.ElementArray = function (element) {
    this.element = element;
};



/**
 * Get a child record.
 * @param {number} index 0 based index.
 * @return {Element}
 */
jsopenxml.types.ElementArray.prototype.getChild = function (index) {
    // We will keep a elementCache_ of nodes we've previously iterated over, this means
    // we don't have to loop through more than once.
    this.elementCache_ = this.elementCache_ || [];



    // If we've presiouly iterated over the value it will be in the cache
    if (this.elementCache_[index]) return this.elementCache_[index];


    var getNextElementNode = function (node) {
        do {
            node = node.nextSibling;
            if (!node) return null;
        } while (node.nodeType != 1);
        return node;
    };


    // We dont have the value in the cache, so start looking at the end of the
    // cache
    var lastNode = (this.elementCache_.length > 0)
        ? this.elementCache_[this.elementCache_.length - 1]
        : null;


    var node;
    for (var i = this.elementCache_.length; i <= index; i++) {
        if (lastNode != null) {
            // Get the next node
            node = getNextElementNode(lastNode);
        } else {
            // Get the first node
            node = this.element.firstChild;
            while (node.nodeType != 1) {
                // A first element value does not exist
                if (node.nextSibling == null) return null;
                node = node.nextSibling;
            }
        }
        this.elementCache_[i] = node;
        lastNode = node;
    };

    return this.elementCache_[index];


};