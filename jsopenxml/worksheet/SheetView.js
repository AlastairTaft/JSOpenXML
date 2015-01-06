/**
 * @fileoverview
 */

goog.provide('jsopenxml.worksheet.SheetView');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.worksheet = window.jsopenxml.worksheet || {};
//--- intellisense end -------------------------------------------------------//

goog.require('jsopenxml.worksheet.Pane');


/**
 * @constructor
 * @param {Element} sheetView
 */
jsopenxml.worksheet.SheetView = function (sheetView) {
    
    // Index to the color value for row/column text headings and gridlines. 
    // This is an 'index color value' (ICV) rather than rgb value.
    this.colorId = window["parseInt"](sheetView.getAttribute("colorId"));

    // Flag indicating that the consuming application should use the default 
    // grid lines color (system dependent). Overrides any color specified in 
    // colorId.
    this.defaultGridColor =
        !!window["parseInt"](sheetView.getAttribute("colorId"));

    // Flag indicating whether the sheet is in 'right to left' display mode. 
    // When in this mode, Column A is on the far right, Column B ;is one column 
    // left of Column A, and so on. Also, information in cells is displayed in 
    // the Right to Left format.
    this.rightToLeft =
        !!window["parseInt"](sheetView.getAttribute("rightToLeft"));

    // Flag indicating whether this sheet should display formulas.
    this.showFormulas =
        !!window["parseInt"](sheetView.getAttribute("showFormulas"));

    // Flag indicating whether this sheet should display gridlines.
    this.showGridLines =
        !!window["parseInt"](sheetView.getAttribute("showGridLines"));

    // Flag indicating whether the sheet has outline symbols visible. This flag 
    // shall always override SheetPr element's outlinePr child element whose 
    // attribute is named showOutlineSymbols when there is a conflict.
    this.showOutlineSymbols =
        !!window["parseInt"](sheetView.getAttribute("showOutlineSymbols"));

    // Flag indicating whether the sheet should display row and column headings.
    this.showRowColHeaders =
        !!window["parseInt"](sheetView.getAttribute("showRowColHeaders"));

    // Show the ruler in Page Layout View.
    this.showRuler =
        !!window["parseInt"](sheetView.getAttribute("showRuler"));

    // Flag indicating whether page layout view shall display margins. False 
    // means do not display left, right, top (header), and bottom (footer) 
    // margins (even when there is data in the header or footer).
    this.showWhiteSpace =
        !!window["parseInt"](sheetView.getAttribute("showWhiteSpace"));

    // Flag indicating whether the window should show 0 (zero) in cells 
    // containing zero value. When false, cells with zero value appear blank 
    // instead of showing the number zero.
    this.showZeros =
        !!window["parseInt"](sheetView.getAttribute("showZeros"));

    // Flag indicating whether this sheet is selected. When only 1 sheet is 
    // selected and active, this value should be in synch with the activeTab 
    // value. In case of a conflict, the Start Part setting wins and sets the 
    // active sheet tab.
    // 
    // Multiple sheets can be selected, but only one sheet shall be active at one time.
    this.tabSelected =
        !!window["parseInt"](sheetView.getAttribute("tabSelected"));

    // Location of the top left visible cell Location of the top left visible 
    // cell in the bottom right pane (when in Left-to-Right mode).
    var topLeftCell = sheetView.getAttribute("topLeftCell");
    this.topLeftCell = (topLeftCell)
        ? new jsopenxml.math.Cell(topLeftCell)
        : new jsopenxml.math.Cell("A1"); // Default top left first cell

    /** 
     * Indicates the view type.
     * @type {jsopenxml.types.ST_SheetViewType}
     */
    this.view = sheetView.getAttribute("view");

    // Flag indicating whether the panes in the window are locked due to 
    // workbook protection. This is an option when the workbook structure is 
    // protected.
    this.windowProtection =
        !!window["parseInt"](sheetView.getAttribute("windowProtection"));

    // Zero-based index of this workbook view, pointing to a workbookView 
    // element in the bookViews collection.
    this.workbookViewId =
        window["parseInt"](sheetView.getAttribute("workbookViewId"));

    // Window zoom magnification for current view representing percent values. 
    // This attribute is restricted to values ranging from 10 to 400. Horizontal 
    // & Vertical scale together.
    this.zoomScale = window["parseInt"]((sheetView.getAttribute("zoomScale")));

    // Zoom magnification to use when in normal view, representing percent 
    // values. This attribute is restricted to values ranging from 10 to 400. 
    // Horizontal & Vertical scale together.
    this.zoomScaleNormal =
        window["parseInt"]((sheetView.getAttribute("zoomScaleNormal")));

    // Zoom magnification to use when in page layout view, representing percent 
    // values. This attribute is restricted to values ranging from 10 to 400. 
    // Horizontal & Vertical scale together.
    this.zoomScalePageLayoutView =
        window["parseInt"]((sheetView.getAttribute("zoomScalePageLayoutView")));

    // Zoom magnification to use when in page break preview, representing 
    // percent values. This attribute is restricted to values ranging from 10 to 
    // 400. Horizontal & Vertical scale together.
    this.zoomScaleSheetLayoutView =
        window["parseInt"]((sheetView.getAttribute("zoomScaleSheetLayoutView")));


    goog.array.forEach(sheetView.childNodes, function (childElement) {
        switch (childElement.nodeName) {
            case "pane":
                this.pane = new jsopenxml.worksheet.Pane(childElement);
                break;
            case "selection": /* TODO */ break;
        }
    }, this);
};


/**
 * Get the sheetview pane if there is one.
 * @return {jsopenxml.worksheet.Pane|null}
 */
jsopenxml.worksheet.SheetView.prototype.getPane = function () {
    return this.pane || null;
};


/**
 * Does the sheet display gridlines?
 * @return {boolean}
 */
jsopenxml.worksheet.SheetView.prototype.hasGridLines = function () {
    return this.showGridLines;
};