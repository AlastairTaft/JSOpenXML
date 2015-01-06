
goog.provide('jsopenxml.types.CT_BooleanProperty');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.types = window.jsopenxml.types || {};
//--- intellisense end -------------------------------------------------------//

goog.require('jsopenxml.types.PropertyVal');

/**
 * @constructor
 * @param {Element} element
 */
jsopenxml.types.CT_BooleanProperty = function (element) {

    goog.base(this, element);

    /** 
     * A boolean value for the property specified by the parent XML element.
     * If omitted, the default value is true.
     */
    if (this.val != null)
        this.val = !!(window["parseInt"](this.val));
    else
        this.val = true; // Default is true
};
goog.inherits(jsopenxml.types.CT_BooleanProperty, jsopenxml.types.PropertyVal);


