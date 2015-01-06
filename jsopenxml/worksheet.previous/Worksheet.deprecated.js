/**
 * @fileoverview Render a worksheet
 */


//goog.provide('sssv.Worksheet');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.sssv = window.sssv || {};
//--- intellisense end -------------------------------------------------------//

goog.require('goog.ui.Component');
goog.require('goog.array');

goog.require('sssv.ui.Grid');
goog.require('sssv.math.Range');
/**
 * @param {Document} xml The xml document for a worksheet, in the format 
 * specified by Ecma-376.
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 * @param {sssv.StringTable} opt_stringTable If a string table is used for the
 * spreadsheet values you can provide it as a constructor parameter.
 * @constructor
 * @param {sssv.Styles} opt_styles
 * @extends {goog.ui.Component}
 */
sssv.Worksheet = function (xml, opt_stringTable, opt_styles, opt_domHelper) {
    goog.base(this, opt_domHelper);

    this.xml = xml;
    this.stringTable_ = opt_stringTable;
    this.styles_ = opt_styles;
    
};
goog.inherits(sssv.Worksheet, goog.ui.Component);

/**
 * Builds the itl.ui.CategoryDataDisplay's DOM tree and stores its root in 
 * this.element_.
 */
sssv.Worksheet.prototype.createDom = function () {
    this.decorateInternal(this.dom_.createElement('div'));
};


/**
 * Takes an Element that is already present in the document, performs any 
 * transformations necessary to turn it into a structure equivalent to the 
 * structure created by createDom(), and stores it in this.element_.
 * @param {Element} element
 */
sssv.Worksheet.prototype.decorateInternal = function (element) {
    this.setElementInternal(element);

    // Add the base elements to the document fragment
    this.addBaseElements_();

    var worksheet = this.xml.firstChild;
    goog.array.forEach(worksheet.childNodes, function (childElement) {
        // TODO Make sure the parse functions are called in the order layed
        // out below. As some may require on previous ones being setup.
        switch (childElement.nodeName) {
            case "x:dimension": this.parseDimension_(childElement); break;
            case "x:cols": this.parseCols_(childElement); break;
            case "x:sheetData": this.parseSheetData_(childElement); break;
        }
    }, this);

};


/**
 * Post-DOM-Building Initialization of the sssv.Worksheet
 * @private
 */
sssv.Worksheet.prototype.enterDocument = function () {

};


/**
 * Gets the xml for the current workbook state.
 */
sssv.Worksheet.prototype.getXml = function () {
    // TODO
};




/**
 * Adds the base elements to the document fragment.
 * @private
 */
sssv.Worksheet.prototype.addBaseElements_ = function () {
    this.tableGrid_ = this.dom_.createDom("table", {
        "cellpadding": "0",
        "cellspacing": "0"
        },
        this.tableGridColGroup_ = this.dom_.createDom("colgroup"),
        this.dom_.createDom("thead"),
        this.tableGridTbody = this.dom_.createDom("tbody", {
            "class": goog.getCssName("sssv") + "-grid"
        })
    );
    this.element_.appendChild(this.tableGrid_);
};



/**
 * Parse the dimension element
 * @private
 * @param {Element} element The dimension element
 */
sssv.Worksheet.prototype.parseDimension_ = function (element) {
    // Optional gets something back like "A1:L189"
    var ref = element.getAttribute("ref");
    //var parts = ref.split(":");
    this.range_ = new sssv.math.Range(ref);
};



/**
 * Parse the sheetData element
 * @private
 * @param {Element} sheetData The sheetData element
 */
sssv.Worksheet.prototype.parseSheetData_ = function (sheetData) {
    
    var sheetDataElement = new sssv.ui.Grid(sheetData, this.range_, this.stringTable_, this.styles_);
    sheetDataElement.decorate(this.tableGridTbody);
};


/**
 * Parse the cols element
 * @private
 * @param {Element} element The cols element
 */
sssv.Worksheet.prototype.parseCols_ = function (element) {

    var colElements = element.childNodes;
    // NOTE: Assume it's already in sorted order.
    // Ensure it's in ascending order
    /*goog.array.sort(colElements, function (a, b) {
        a = a.getAttribute("min");
        b = b.getAttribute("max");
        if (a < b)
            return -1;
        else if (a > b)
            return 1;
        return 0;
    });*/

    goog.array.forEach(colElements, function (col) {
        var min = window["parseInt"](col.getAttribute("max")),
            max = window["parseInt"](col.getAttribute("min")),
            width = window["parseFloat"](col.getAttribute("width"));

        
        // TODO This should be the maximum digit width for the current font 
        // in this cell. The maxium width for a number digit.
        var maxDigitWidth = 7;

        // Convert the width to pixels
        var widthPixels = Math.floor(
            ((256 * width + Math.floor(128 / maxDigitWidth)) / 256)
            * maxDigitWidth);

        // NOTE: There are 4 pixels of margin
        // padding (two on each side), plus 1 pixel padding for the gridlines.

        // Add all columns this col element is applying to
        for (var i = min; i <= max; i++) {
            this.tableGridColGroup_.appendChild(
                this.dom_.createDom("col", { "width": widthPixels + "px" })
            );
        }
    }, this);
};
 
/**
 * Set the string table to use
 * @param {sssv.StringTable}
 */
sssv.Worksheet.prototype.setStringTable = function (stringTable) {
    this.stringTable_ = stringTable;
};

/**
 * Get the string table that's in use. Returns null if there isn't one.
 * @returns {sssv.StringTable|null}
 */
sssv.Worksheet.prototype.getStringTable = function () {
    return this.stringTable_ || null;
};
