/**
 * @fileoverview Helper functions for a c xml element (cell).
 */

goog.provide('sssv.worksheet.C');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.sssv = window.sssv || {};
window.sssv.worksheet = window.sssv.worksheet || {};
//--- intellisense end -------------------------------------------------------//

window.sssv = window.sssv || {};
window.sssv.worksheet = window.sssv.worksheet || {};
goog.require('sssv.math.Coordinate');
goog.require('sssv.worksheet.F');
goog.require('sssv.worksheet.V');
goog.require('sssv.worksheet.Is');

/**
 * @constructor
 */
sssv.worksheet.C = function (c) {
    this.element_ = c;
   
    // This index is 1 based
    this.coordinate_ = new sssv.math.Coordinate(c.getAttribute("r"));


    this.dataType_ = c.getAttribute("t");

    goog.array.forEach(c.childNodes, function (childElement) {
        switch (childElement.nodeName) {
            case "x:f": this.formula_ = new sssv.worksheet.F(childElement); break;
            case "x:v": this.v_ = new sssv.worksheet.V(childElement); break;
            case "x:is": this.is_ = new sssv.worksheet.Is(childElement); break;
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
sssv.worksheet.C.prototype.getIndex = function () {
    return this.coordinate_.getColumnIndex();
};

/**
 * Get the coordinate position of the cell in the spreadsheet
 * @returns {goog.math.Coordinate}
 */
sssv.worksheet.C.prototype.getCoordinate = function () {
    return this.coordinate_;
};


/**
 * Get the value to be displayed to the user for the cell
 * @param {sssv.StringTable} opt_stringTable If the value isn't an inline
 * string then it needs to look in the string table.
 */
sssv.worksheet.C.prototype.getValue = function (opt_stringTable) {

    if (!this.value_) return null;

    var displayValue;
    if (this.dataType_ == sssv.worksheet.ST_CellType.SHARED_STRING) {
        if (!opt_stringTable) {
            throw "String table must be set to read this spreadsheet.";
        }
        return opt_stringTable.getValue(this.value_)
    }
    return this.value_ || "";
};

/**
 * Get the style index. This is the index of which style element is applied
 * to this cell, as found in the styles table.
 * @return {number|null} 0 based style index
 */
sssv.worksheet.C.prototype.getStyleIndex = function () {
    return this.styleIndex_;
};
