/**
 * @fileoverview The font family this font belongs to. The font name overrides 
 * when there are conflicting values.
 */

goog.provide('jsopenxml.styles.Family');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.styles = window.jsopenxml.styles || {};
//--- intellisense end -------------------------------------------------------//

goog.require('jsopenxml.types.ST_FontFamily');

/**
 * @constructor
 * @param {Element} family
 */
jsopenxml.styles.Family = function (family) {
    goog.base(this, family);
};
goog.inherits(jsopenxml.styles.Family, jsopenxml.types.PropertyVal);


/**
 * Get value
 * @return {jsopenxml.types.ST_FontFamily}
 */
jsopenxml.styles.Family.prototype.getValue = function () {
    return goog.base(this, 'getValue');
};
