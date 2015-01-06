/**
 * @fileoverview Handles the _rels/.rels.xml documents. These documents link
 * the relationships between different xml docs.
 * This is used by jsopenxml.types.OpenXmlDocument so it's inner working are
 * abstracted away by the class, nothing else should use this as only that class
 * works with the relational document.
 */


goog.provide('jsopenxml.Relationships');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
//--- intellisense end -------------------------------------------------------//

window.jsopenxml = window.jsopenxml || {};

goog.require('jsopenxml.relationships.Relationship');

/**
 * @constructor
 * @param 
 */
jsopenxml.Relationships = function (rels) {
    this.document = rels;

    var relationships = rels.firstChild;
    // If the first node is a processing instruction, skip over it. This occurs 
    // in IE 11, the first node is the xml declaration node.
    if (relationships.nodeType == 7) {
        relationships = relationships.nextSibling;
    }
    this.relationships = [];
    goog.array.forEach(relationships.childNodes, function (relationship) {
        // If not an element node skip
        if (relationship.nodeType != 1) return;

        this.relationships.push(
            new jsopenxml.relationships.Relationship(relationship));
    }, this);
    
};

/**
 * Get the relationship target based on relationship id.
 * @param {ST_Relation} id
 */
jsopenxml.Relationships.prototype.getTargetById = function (id) {
    var relationship = goog.array.find(
        this.relationships,
        function (relationship) {
            return (relationship.getId() == id);
        },
        this);

    // Relationship with that id was not found
    if (!relationship) return null;

    return relationship.getTarget();
};
