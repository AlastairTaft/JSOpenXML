/**
 * @fileoverview Helper functions for a pane xml element (sheet view pane).
 */

goog.provide('sssv.worksheet.Pane');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.sssv = window.sssv || {};
window.sssv.worksheet = window.sssv.worksheet || {};
//--- intellisense end -------------------------------------------------------//

window.sssv = window.sssv || {};
window.sssv.worksheet = window.sssv.worksheet || {};

/**
 * @constructor
 */
sssv.worksheet.Pane = function (sheetView) {
    this.element_ = sheetView;
   

    /**
     * @type {sssv.types.ST_Pane}
     */
    this.activePane = this.element_.getAttribute("activePane");

    /**
     * @type {sssv.types.ST_PaneState}
     */
    this.state = this.element_.getAttribute("state");

    /**
     * @type {sssv.types.ST_CellRef}
     */
    this.topLeftCell = this.element_.getAttribute("topLeftCell")
    if (!this.topLeftCell) this.topLeftCell =
        new sssv.types.CellRef(this.topLeftCell);

    /**
     * @type {number}
     */
    this.xSplit = window["parseInt"](this.element_.getAttribute("xSplit"));

    /**
     * @type {number}
     */
    this.ySplit = window["parseInt"](this.element_.getAttribute("ySplit"));

};
