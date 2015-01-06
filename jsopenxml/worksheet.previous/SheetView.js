/**
 * @fileoverview Helper functions for a c xml element (cell).
 */

goog.provide('sssv.worksheet.SheetView');
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
sssv.worksheet.SheetView = function (sheetView) {
    this.element_ = sheetView;
   

    this.colourId_ = this.element_.getAttribute("colorId");
    if (this.colourId_) window["parseInt"](this.colourId_);


    this.defaultGridColour_ = this.element_.getAttribute("defaultGridColor");
    if (this.defaultGridColour_) this.defaultGridColour_ = !!window["parseInt"](this.defaultGridColour_);

    this.rightToLeft_ = this.element_.getAttribute("rightToLeft");
    if (this.rightToLeft_) this.rightToLeft_ = !!window["parseInt"](this.rightToLeft_);

    this.showFormulas_ = this.element_.getAttribute("showFormulas");
    if (this.showFormulas_) this.showFormulas_ = !!window["parseInt"](this.showFormulas_);

    this.showGridLines_ = this.element_.getAttribute("showGridLines");
    if (this.showGridLines_) this.showGridLines_ = !!window["parseInt"](this.showGridLines_);

    this.showOutlineSymbols_ = this.element_.getAttribute("showOutlineSymbols");
    if (this.showOutlineSymbols_) this.showOutlineSymbols_ = !!window["parseInt"](this.showOutlineSymbols_);

    this.showRowColHeaders_ = this.element_.getAttribute("showRowColHeaders");
    if (this.showRowColHeaders_) this.showRowColHeaders_ = !!window["parseInt"](this.showRowColHeaders_);

    this.showRuler_ = this.element_.getAttribute("showRuler");
    if (this.showRuler_) this.showRuler_ = !!window["parseInt"](this.showRuler_);

    this.showWhiteSpace_ = this.element_.getAttribute("showWhiteSpace");
    if (this.showWhiteSpace_) this.showWhiteSpace_ = !!window["parseInt"](this.showWhiteSpace_);

    this.showZeros_ = this.element_.getAttribute("showZeros");
    if (this.showZeros_) this.showZeros_ = !!window["parseInt"](this.showZeros_);

    // Flag indicating whether this sheet is selected. When only 1 sheet is selected and active,
    // this value should be in synch with the activeTab value. In case of a conflict, the Start Part
    // setting wins and sets the active sheet tab.
    // Multiple sheets can be selected, but only one sheet shall be active at one time.
    this.tabSelected_ = this.element_.getAttribute("tabSelected");
    if (this.tabSelected_) this.tabSelected_ = !!window["parseInt"](this.tabSelected_);

    // Location of the top left visible cell Location of the top left visible cell in the bottom right
    // pane (when in Left-to-Right mode).
    this.topLeftCell_ = this.element_.getAttribute("topLeftCell");
    if (this.topLeftCell_) this.topLeftCell_ = new sssv.math.Coordinate(this.topLeftCell_);

    // Indicates the view type.
    // The view type TODO: Add ST_SheetViewType 's
    this.view_ = this.element_.getAttribute("view");

    // Flag indicating whether the panes in the window are locked due to workbook protection.
    // This is an option when the workbook structure is protected.
    this.windowProtection_ = this.element_.getAttribute("windowProtection");
    if (this.windowProtection_) this.windowProtection_ = !!window["parseInt"](this.windowProtection_);

    // Zero-based index of this workbook view, pointing to a workbookView element in the
    // bookViews collection.
    this.workbookViewId_ = window["parseInt"](this.element_.getAttribute("workbookViewId"));

    // Window zoom magnification for current view representing percent values. This attribute
    // is restricted to values ranging from 10 to 400. Horizontal & Vertical scale together.
    // [Example:
    // 10 - 10%
    // 20 - 20%
    // �
    // 100 - 100%
    // �
    // 400 - 400%
    // end example]
    // Current view can be Normal, Page Layout, or Page Break Preview.
    this.zoomScale_ = this.element_.getAttribute("zoomScale");
    if (this.zoomScale_) this.zoomScale_ = window["parseInt"](this.zoomScale_);

    
    this.zoomScalePageLayoutView_ = this.element_.getAttribute("zoomScalePageLayoutView");
    if (this.zoomScalePageLayoutView_) this.zoomScaleNormal_ = window["parseInt"](this.zoomScalePageLayoutView_);

    
    this.zoomScaleSheetLayoutView_ = this.element_.getAttribute("zoomScaleSheetLayoutView");
    if (this.zoomScaleSheetLayoutView_) this.zoomScaleSheetLayoutView_ = window["parseInt"](this.zoomScaleSheetLayoutView_);

    
    goog.array.forEach(sheetView.childNodes, function (childElement) {
        switch (childElement.nodeName) {
            case "pane": this.pane = new sssv.worksheet.Pane(childElement); break;
            //case "selection": this.selection_ = new sssv.worksheet.Selection(childElement); break;
        }
    }, this);

};
