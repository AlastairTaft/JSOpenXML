/**
 * @fileoverview Handles the Relationship attribute in a .rels.xml file.
 */

goog.provide('jsopenxml.relationships.Relationship');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.relationships = window.jsopenxml.relationships || {};
//--- intellisense end -------------------------------------------------------//

window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.relationships = window.jsopenxml.relationships || {}; 

/**
 * @constructor
 */
jsopenxml.relationships.Relationship = function (relationship) {
    this.id = relationship.getAttribute("Id");
    goog.asserts.assertString(this.id, "Missing relationship id.");

    this.type = relationship.getAttribute("Type");
    // TODO: Handle type

    this.target = relationship.getAttribute("Target");
};

/**
 * Get the target. The target is the path relative to this document to get
 * the target document.
 * @return {string}
 */
jsopenxml.relationships.Relationship.prototype.getTarget = function () {
    return this.target;
};

/**
 * Get the relationship id.
 * @return {jsopenxml.types.ST_Relation}
 */
jsopenxml.relationships.Relationship.prototype.getId = function () {
    return this.id;
};
