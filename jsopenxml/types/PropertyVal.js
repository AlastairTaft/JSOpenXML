/**
 * @fileoverview A simple type when the element only contains one attribute 
 * 'val' with the element value.
 */

goog.provide('jsopenxml.types.PropertyVal');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.types = window.jsopenxml.types || {};
//--- intellisense end -------------------------------------------------------//

/** 
 * @constructor
 * @param {Element} element;
 */
jsopenxml.types.PropertyVal = function (element) {
    this.element = element;

    
    this.val = this.element.getAttribute("val");
};


/** 
 * Get value
 * @return {string}
 */
jsopenxml.types.PropertyVal.prototype.getValue = function () {
    return this.val;
};

/**
 * Get value
 * @return {string}
 */
jsopenxml.types.PropertyVal.prototype["valueOf"] = function () {
    return this.getValue();
};


