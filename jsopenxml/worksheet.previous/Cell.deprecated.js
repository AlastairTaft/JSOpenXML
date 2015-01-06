/**
 * @fileoverview Renders a cell
 */


//goog.provide('sssv.worksheet.Cell');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.sssv = window.sssv || {};
window.sssv.worksheet = window.sssv.worksheet || {};
//--- intellisense end -------------------------------------------------------//

goog.require('goog.userAgent');

/**
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 * @constructor
 * @extends {goog.ui.Component}
 * @param {Element} c Expects an xml node with tagName 'x:c'.
 * @param {sssv.StringTable} opt_stringTable If a string table is used for the
 * spreadsheet values you can provide it as a constructor parameter.
 * @param {sssv.Styles} opt_styles
 * @param opt_stringTable If cell's values are string index pointers, this is 
 * required.
 */
sssv.worksheet.Cell = function (c, opt_stringTable, opt_styles, opt_domHelper) {
    goog.base(this, opt_domHelper);

    this.cElement_ = c;

    this.stringTable_ = opt_stringTable;
    this.styles_ = opt_styles;
    // e.g. B9
    this.location_ = c.getAttribute("r");

    // As we parse the xml generate the result in a document fragment
    //this.documentFragment = document.createDocumentFragment();

    this.dataType_ = c.getAttribute("t");

    goog.array.forEach(c.childNodes, function (childElement) {
        switch (childElement.nodeName) {
            case "x:f": this.parseFormula_(childElement); break;
            case "x:v": this.parseValue_(childElement); break;
            case "x:is": this.parseIs_(childElement); break;
        }
    }, this);
};
goog.inherits(sssv.worksheet.Cell, goog.ui.Component);

/**
 * Builds the itl.ui.CategoryDataDisplay's DOM tree and stores its root in 
 * this.element_.
 */
sssv.worksheet.Cell.prototype.createDom = function () {
    this.decorateInternal(this.dom_.createDom('td'));
};


/**
 * Takes an Element that is already present in the document, performs any 
 * transformations necessary to turn it into a structure equivalent to the 
 * structure created by createDom(), and stores it in this.element_.
 * @param {Element} element
 */
sssv.worksheet.Cell.prototype.decorateInternal = function (element) {
    this.setElementInternal(element);


    element.innerHTML = this.getDisplayValue();

    // TODO Incorporate the formula

    // Add formatting

    // Decorate the cell with the correct formatting
    var styleIndex = this.cElement_.getAttribute("s");
    if (styleIndex != null) {
        var cellStyle =
            this.styles_.getCellXf(window["parseInt"](styleIndex));

        cellStyle.decorate(element);
    }
};


/**
 * Post-DOM-Building Initialization of the sssv.worksheet.Cell
 * @private
 */
sssv.worksheet.Cell.prototype.enterDocument = function () {

};


/**
 * Gets the formula attached to the cell if it has one.
 */
sssv.worksheet.Cell.prototype.getFormula = function () {
    return this.formula_ || null;
};


/**
 * Parse the formula element
 * @private
 * @param {Element} element The formula element
 */
sssv.worksheet.Cell.prototype.parseFormula_ = function (element) {
    // TODO: innerHTML might not be the correct method
    this.formula_ = (goog.userAgent.IE) ? element.text : element.textContent;
};


/**
 * Parse the value element
 * @private
 * @param {Element} element The value element
 */
sssv.worksheet.Cell.prototype.parseValue_ = function (element) {
    /**
     * This is the internal value not the actual value displayed to the user
     */
    this.value_ = (goog.userAgent.IE) ? element.text : element.textContent;
};


/**
 * Parse the is element, used when the value is a literal
 * @private
 * @param {Element} element The is element
 */
sssv.worksheet.Cell.prototype.parseIs_ = function (element) {
    var t = element.firstChild;
    if (t.tagName != "t")
        throw "Unhandled xml structure for 'is' element";
    this.value_ = (goog.userAgent.IE) ? t.text : t.textContent;
};


/**
 * Set the reference to the shared string table. This is required if the cell's
 * value is an index pointer to it's value in the shared string table.
 */
sssv.worksheet.Cell.prototype.setStringTable = function (stringTable) {
    this.stringTable_ = stringTable;
};




/**
 * @enum The data types available for a cell value (see section 18.18.11 of the 
 * ECMA-376 sepc).
 */
sssv.worksheet.ST_CellType = {
    BOOLEAN: "b",
    DATE: "d",
    ERROR: "e",
    INLINE_STRING: "inlineStr",
    NUMBER: "n",
    SHARED_STRING: "s",
    FORMULA_STRING: "str"
}


/**
 * Get the value to be displayed to the user for the cell
 */
sssv.worksheet.Cell.prototype.getDisplayValue = function () {

    var displayValue;
    if (this.dataType_ == sssv.worksheet.ST_CellType.SHARED_STRING) {
        if (! this.stringTable_) {
            throw "String table must be set to read this spreadsheet.";
        }
        return this.stringTable_.getValue(this.value_)
    }
    return this.value_ || "";
};


/**
 * Get the string table that's in use. Returns null if there isn't one.
 * @returns {sssv.StringTable|null}
 */
sssv.worksheet.Cell.prototype.getStringTable = function () {
    return this.stringTable_ || null;
};

