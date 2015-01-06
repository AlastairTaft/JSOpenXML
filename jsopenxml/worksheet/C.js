/**
 * @fileoverview Helper functions for a c xml element (cell).
 */

goog.provide('jsopenxml.worksheet.C');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.worksheet = window.jsopenxml.worksheet || {};
//--- intellisense end -------------------------------------------------------//

window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.worksheet = window.jsopenxml.worksheet || {};
goog.require('jsopenxml.math.Cell');
goog.require('jsopenxml.worksheet.F');
goog.require('jsopenxml.worksheet.V');
goog.require('jsopenxml.worksheet.Is');

/**
 * @constructor
 */
jsopenxml.worksheet.C = function (c) {
    this.element_ = c;
   
    // This index is 1 based
    this.coordinate_ = new jsopenxml.math.Cell(c.getAttribute("r"));


    this.dataType_ = c.getAttribute("t");

    goog.array.forEach(c.childNodes, function (childElement) {
        switch (childElement.nodeName) {
            case "f": this.formula_ = new jsopenxml.worksheet.F(childElement); break;
            case "v": this.v_ = new jsopenxml.worksheet.V(childElement); break;
            case "is": this.is_ = new jsopenxml.worksheet.Is(childElement); break;
        }
    }, this);

    var temp = (this.v_ || this.is_);
    if (temp) this.value_ = temp.getValue();

    this.styleIndex_ = c.getAttribute("s");
    if (this.styleIndex_) this.styleIndex_ = window["parseInt"](this.styleIndex_);
};

/**
 * Get the 0 based cell index relative to it's parent row
 */
jsopenxml.worksheet.C.prototype.getIndex = function () {
    return this.coordinate_.getColumnIndex();
};

/**
 * Get the position of the cell in the spreadsheet
 * @returns {jsopenxml.math.Cell}
 */
jsopenxml.worksheet.C.prototype.getPosition = function () {
    return this.coordinate_;
};


/**
 * Get the value to be displayed to the user for the cell
 * @param {jsopenxml.StringTable} opt_stringTable If the value isn't an inline
 * string then it needs to look in the string table.
 */
jsopenxml.worksheet.C.prototype.getValue = function (opt_stringTable) {

    if (!this.value_) return null;

    /*var displayValue;
    if (this.dataType_ == jsopenxml.worksheet.ST_CellType.SHARED_STRING) {
        if (!opt_stringTable) {
            throw "String table must be set to read this spreadsheet.";
        }
        return opt_stringTable.getValue(this.value_)
    }*/
    //return this.value_ || "";

    return this.value_;
};

/**
 * Get the style index. This is the index of which style element is applied
 * to this cell, as found in the styles table.
 * @return {number|null} 0 based style index
 */
jsopenxml.worksheet.C.prototype.getStyleIndex = function () {
    return this.styleIndex_;
};


/**
 * Get the data type.
 * @return {jsopenxml.worksheet.ST_CellType}
 */
jsopenxml.worksheet.C.prototype.getDataType = function () {
    return this.dataType_;
};