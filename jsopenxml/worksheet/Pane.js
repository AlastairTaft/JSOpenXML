/**
 * @fileoverview Worksheet view pane.
 */


goog.provide('jsopenxml.worksheet.Pane');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.worksheet = window.jsopenxml.worksheet || {};
//--- intellisense end -------------------------------------------------------//

/**
 * @constructor
 * @param {Element} pane
 */
jsopenxml.worksheet.Pane = function (pane) {

    /**
     * The pane that is active.
     * @type {jsopenxml.types.ST_Pane}
     */
    this.activePane = pane.getAttribute("activePane");

    /**
     * Indicates whether the pane has horizontal / vertical splits, and whether 
     * those splits are frozen.
     * @type {jsopenxml.types.ST_PaneState}
     */
    this.state = pane.getAttribute("state");

    /**
     * Location of the top left visible cell in the bottom right pane (when in 
     * Left-To-Right mode).
     * @type {jsopenxml.math.Cell}
     */
    this.topLeftCell = pane.getAttribute("topLeftCell");
    if (this.topLeftCell)
        this.topLeftCell = new jsopenxml.math.Cell(this.topLeftCell);

    
    // Horizontal position of the split, in 1/20th of a point; 0 (zero) if none. 
    // If the pane is frozen, this value indicates the number of columns visible 
    // in the top pane.
    this.xSplit = pane.getAttribute("xSplit");
    if (this.ySplit) this.ySplit = window["parseInt"](this.ySplit);

    // Vertical position of the split, in 1/20th of a point; 0 (zero) if none. 
    // If the pane is frozen, this value indicates the number of rows visible 
    // in the left pane.
    this.ySplit = pane.getAttribute("ySplit");
    if (this.ySplit) this.ySplit = window["parseInt"](this.ySplit);
};


/**
 * Get the y split value.
 * @return {number|null}
 */
jsopenxml.worksheet.Pane.prototype.getYSplit = function () {
    return this.ySplit;
};

/**
 * Get state
 * @return {jsopenxml.types.ST_PaneState|null}
 */
jsopenxml.worksheet.Pane.prototype.getState = function () {
    return this.state;
};


/**
 * Get active pane
 */
jsopenxml.worksheet.Pane.prototype.getActivePane = function () {
    return this.activePane;
};


/**
 * Get top left cell
 */
jsopenxml.worksheet.Pane.prototype.getTopLeftCell = function () {
    return this.topLeftCell;
};
