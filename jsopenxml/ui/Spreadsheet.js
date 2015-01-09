/**
 * @fileoverview Displays a spreadsheet
 */


goog.provide('jsopenxml.ui.Spreadsheet');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.ui = window.jsopenxml.ui || {};
//--- intellisense end -------------------------------------------------------//

window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.ui = window.jsopenxml.ui || {};
goog.require('goog.ui.Component');
goog.require('goog.asserts');
goog.require('jsopenxml.ui.Worksheet');
goog.require('goog.ui.TabBar');
goog.require('goog.ui.Slider');
goog.require('goog.math.Coordinate');
goog.require('goog.dom.classes');

/**
 * @param {jsopenxml.types.OpenXmlDocument} openXmlDocument
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 * @constructor
 * @extends {goog.ui.Component}
 */
jsopenxml.ui.Spreadsheet = function (openXmlDocument, opt_domHelper) {
    goog.base(this, opt_domHelper);

    this.openXmlDocument = openXmlDocument;
    goog.asserts.assert(this.openXmlDocument.isSpreadsheet(),
        "Must be a valid spreadsheet.");


    this.workbook = this.openXmlDocument.getWorkbook();
};
goog.inherits(jsopenxml.ui.Spreadsheet, goog.ui.Component);

/**
 * Builds the itl.ui.CategoryDataDisplay's DOM tree and stores its root in 
 * this.element_.
 */
jsopenxml.ui.Spreadsheet.prototype.createDom = function () {
    this.decorateInternal(
        this.dom_.createDom("div", null,
            this.dom_.createDom("div", {"class":"middle"},
                this.dom_.createDom("div", { "class": "jsopenxml-worksheet-container" }),
                this.dom_.createDom("div", { "class": "jsopenxml-vertical-slider-container" })
            ),
            this.dom_.createDom("div", {"class":"bottom-bar"}, 
                this.dom_.createDom("div", { "class": "jsopenxml-tabbar-container" }),
                this.dom_.createDom("div", { "class": "jsopenxml-horizontal-slider-container" })
            )
        )
    );
};


/**
 * Takes an Element that is already present in the document, performs any 
 * transformations necessary to turn it into a structure equivalent to the 
 * structure created by createDom(), and stores it in this.element_.
 * @param {Element} element
 */
jsopenxml.ui.Spreadsheet.prototype.decorateInternal = function (element) {
    this.setElementInternal(element);
    goog.dom.classes.add(element, "jsopenxml-spreadsheet");

    // Create the tab bar
    this.sheetTabs = new goog.ui.TabBar();
    goog.array.forEach(this.workbook.getSheets(), function (sheet) {
        var name = sheet.getName(), tab;
        
        this.sheetTabs.addChild(tab = new goog.ui.Tab(name), true);
        tab.setModel(sheet);
    }, this);
    this.sheetTabs.render(
        goog.dom.getElementByClass("jsopenxml-tabbar-container", element));

    this.worksheetContainer =
        goog.dom.getElementByClass("jsopenxml-worksheet-container", element);




    // Create the scroll bars
    this.verticalSlider_ = new goog.ui.Slider;
    this.verticalSlider_.setOrientation(goog.ui.Slider.Orientation.VERTICAL);
    this.verticalSlider_.render(
        goog.dom.getElementByClass("jsopenxml-vertical-slider-container", element));


    this.horizontalSlider_ = new goog.ui.Slider;
    this.horizontalSlider_.setOrientation(goog.ui.Slider.Orientation.HORIZONTAL);
    //this.horizontalSlider_.render(this.horizontalSliderContainer_);
    this.horizontalSlider_.render(
        goog.dom.getElementByClass("jsopenxml-horizontal-slider-container", element));

};


/**
 * Post-DOM-Building Initialization of the jsopenxml.ui.Spreadsheet
 * @private
 */
jsopenxml.ui.Spreadsheet.prototype.enterDocument = function () {
    goog.events.listen(this.sheetTabs, "action", function (e) {
        var tab = e.target, sheet = tab.getModel();
        var worksheet = this.openXmlDocument.getWorksheet(sheet);
           

        this.loadWorksheet(worksheet);
    }, false, this);

};


/**
 * Loads a worksheet
 * @param {jsopenxml.Worksheet} worksheet
 */
jsopenxml.ui.Spreadsheet.prototype.loadWorksheet = function (worksheet) {
    if (this.worksheetDisplay)
        this.worksheetDisplay.dispose();
    this.worksheetDisplay = new jsopenxml.ui.Worksheet(worksheet,
        this.openXmlDocument);
    this.worksheetDisplay.render(this.worksheetContainer);


    var size = worksheet.getSize();


    // Remove listeners from the sliders
    goog.events.unlisten(this.verticalSlider_, "change", this.refreshWorksheetDisplay, false, this);
    goog.events.unlisten(this.horizontalSlider_, "change", this.refreshWorksheetDisplay, false, this);

    this.verticalSlider_.setMaximum(size.height);
    this.verticalSlider_.setMinimum(0);
    var sheetView = worksheet.getSheetViews()[0];
    // Don't let the user scroll past the y split pane.
    if (sheetView.getPane() && sheetView.getPane().getYSplit()) {
        this.verticalSlider_.setMinimum(sheetView.getPane().getYSplit());
    }
    this.horizontalSlider_.setMaximum(size.width);
    this.horizontalSlider_.setMinimum(0);
    var topLeftCell = this.worksheetDisplay.getTopLeftCell();
    this.verticalSlider_.setValue(size.height - topLeftCell.getRowIndex());
    this.horizontalSlider_.setValue(topLeftCell.getColumnIndex());

    // Add listeners to the sliders
    goog.events.listen(this.verticalSlider_, "change", this.refreshWorksheetDisplay, false, this);
    goog.events.listen(this.horizontalSlider_, "change", this.refreshWorksheetDisplay, false, this);
};

/***/
jsopenxml.ui.Spreadsheet.prototype.refreshWorksheetDisplay = function () {
    if (!this.worksheetDisplay) return;

    var rowOffset = this.getInvertedVerticalSliderValue_();
    var columnOffset = this.horizontalSlider_.getValue();

    var topLeftCoord = new goog.math.Coordinate(columnOffset, rowOffset);
    var topLeftCell = jsopenxml.math.Cell.cast(topLeftCoord);

    this.worksheetDisplay.setTopLeftCell(topLeftCell);
};



/**
 * Check if the element can be decorated
 */
jsopenxml.ui.Spreadsheet.prototype.canDecorate = function (element) {
    return 
        goog.dom.getElementByClass("jsopenxml-worksheet-container", element)
        && goog.dom.getElementByClass("jsopenxml-vertical-slider-container", element)
        && goog.dom.getElementByClass("jsopenxml-tabbar-container", element)
        && goog.dom.getElementByClass("jsopenxml-horizontal-slider-container", element)
    ;
}

/**
 * Gets the inverted vertical slider value.
 * @private
 */
jsopenxml.ui.Spreadsheet.prototype.getInvertedVerticalSliderValue_ =
function () {
    var min = this.verticalSlider_.getMinimum(),
        max = this.verticalSlider_.getMaximum(),
        range = max - min,
        value = this.verticalSlider_.getValue();

    // 2 * min + range - value
    return min + (range - (value - min));
};


