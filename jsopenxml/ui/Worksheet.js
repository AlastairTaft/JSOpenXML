/**
 * @fileoverview Displays a worksheet in a grid. Make sure to set the element
 * to the size of the grid to display.
 */


goog.provide('jsopenxml.ui.Worksheet');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.ui = window.jsopenxml.ui || {};
//--- intellisense end -------------------------------------------------------//

goog.require('goog.ui.Component');
goog.require('jsopenxml.math.Cell');
goog.require('jsopenxml.types.ST_Pane');
goog.require('jsopenxml.ui.Cell');

/**
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 * @constructor
 * @extends {goog.ui.Component}
 * @param {jsopenxml.Worksheet} worksheet
 * @param {jsopenxml.types.OpenXmlDocument} openXmlDoc
 */
jsopenxml.ui.Worksheet = function (worksheet, openXmlDoc, opt_domHelper) {
    goog.base(this, opt_domHelper);

    this.worksheet = worksheet;
    this.openXmlDocument = openXmlDoc;
    // Only going to focus on the first sheet view, does not support multiple
    // sheet views.
    this.sheetView_ = this.worksheet.getSheetViews()[0];
    var pane = this.sheetView_.getPane();
    if (pane && pane.getActivePane() == jsopenxml.types.ST_Pane.bottomLeft) {
        this.topLeftCell_ = pane.getTopLeftCell();
    } else {
        this.topLeftCell_ = new jsopenxml.math.Cell("A1");
    }
};
goog.inherits(jsopenxml.ui.Worksheet, goog.ui.Component);

/**
 * Builds the itl.ui.CategoryDataDisplay's DOM tree and stores its root in 
 * this.element_.
 */
jsopenxml.ui.Worksheet.prototype.createDom = function () {
    this.decorateInternal(this.dom_.createElement('div'));
};


/**
 * Takes an Element that is already present in the document, performs any 
 * transformations necessary to turn it into a structure equivalent to the 
 * structure created by createDom(), and stores it in this.element_.
 * @param {Element} element
 */
jsopenxml.ui.Worksheet.prototype.decorateInternal = function (element) {
    this.setElementInternal(element);
    goog.dom.classes.add(element, "jsopenxml-worksheet");

    if (this.sheetView_.hasGridLines()) {
        goog.dom.classes.add(element, "gridLines");
    }
};


/**
 * Post-DOM-Building Initialization of the jsopenxml.ui.Worksheet
 * @private
 */
jsopenxml.ui.Worksheet.prototype.enterDocument = function () {
    this.createCells();
};

/**
 * Make only render available
 */
jsopenxml.ui.Worksheet.prototype.canDecorate = function () {
    return false;
};



/**
 * Adjust the size of the displayed grid so that it fills the container element.
 * Creates the cells.
 */
jsopenxml.ui.Worksheet.prototype.createCells = function () {

    // Get the size first, else this will return an incorrect value once the
    // element has been removed from the document.
    var size = goog.style.getBounds(this.element_);


    // We'll take the element out of the document so that it's only re-drawn
    // once when it's done processing the size adjust/move.
    this.offDocument();

    // Clear all existing cells
    this.element_.innerHTML = "";



    var totalWidth = 0, i = this.topLeftCell_.getColumnIndex()
    while (totalWidth < size.width) {
        totalWidth += this.worksheet.getColumnWidth(i);
        i++;
    }

    var yPos = 0;

    var yHeightOffset = 0;

    // We'll only focus on the first sheetview.
    var sheetView = this.worksheet.getSheetViews()[0];
    var pane = sheetView.getPane();
    if (pane && pane.getYSplit() != null) {
        var ySplit = pane.getYSplit();

        for (var a = 0; a < ySplit && size.height > 0; a++) {

            var rowXml = this.worksheet.getRow(a);
            if (rowXml && rowXml.isHidden()) continue;

            // Add row
            //var row = this.dom_.createDom("div", { "class": "row" });
            var rowHeight = this.worksheet.getRowHeight(a);
            //row.style.height = rowHeight + "px";
            var xPos = 0;
            for (
                var b = this.topLeftCell_.getColumnIndex() ;
                b < i; b++) {
                var cell = this.dom_.createDom("div", { "class": "cell" });

                var cellPos = jsopenxml.math.Cell.cast(
                    new goog.math.Coordinate(b, a));


                var width = this.worksheet.getColumnWidth(b),
                    height = rowHeight;

                var offsetWidth = undefined, offsetHeight = undefined;

                /**
                 * @type {jsopenxml.worksheet.MergeCell}
                 */
                var mergeCell = this.worksheet.getMergeCell(cellPos);
                if (mergeCell) {
                    //...
                    var mergeRange = mergeCell.getRange();

                    // Check if the merge range falls outside the visible area
                    // on the top or left plane
                    // TODO ....
                    if (mergeRange.getColumnStartIndex() < this.topLeftCell_.getColumnIndex()
                        || mergeRange.getRowStartIndex() < this.topLeftCell_.getRowIndex()) {
                        var offset = new goog.math.Size(
                            this.topLeftCell_.getColumnIndex() - mergeRange.getColumnStartIndex(),
                            this.topLeftCell_.getRowIndex() - mergeRange.getRowStartIndex()
                        );

                        offsetWidth = 0;
                        offsetHeight = 0;
                        for (var g = mergeRange.getColumnStartIndex(), gLimit = g + offset.width; 
                            g < gLimit;
                            g++) {
                            offsetWidth += this.worksheet.getColumnWidth(g);
                            // Need to adjust the column index by the merge cell size
                            columnIndex -= 1;
                        }

                        for (var e = mergeRange.getRowStartIndex(), eLimit = e + offset.height;
                            e < eLimit;
                            e++) {
                            offsetHeight += this.worksheet.getRowHeight(e);
                            // Need to adjust the row index by the merge cell size
                            rowIndex -= 1;
                        }


                        var sizeM = this.worksheet.getRangePixelSize(mergeRange);
                        width = sizeM.width;
                        height = sizeM.height;
                    } 
                    // If current cell is top left cell of merged cells
                    else if (cellPos.getColumnIndex() == mergeRange.getColumnStartIndex()
                        && cellPos.getRowIndex() == mergeRange.getRowStartIndex()) {
                        var sizeM = this.worksheet.getRangePixelSize(mergeRange);
                        width = sizeM.width;
                        height = sizeM.height;
                    } else {
                        // Not top left cell, it's already been processed so 
                        // skip
                        continue;
                    }
                    // Adjust row and column index by merge cell size.
                    columnIndex += mergeRange.getWidth() -1;
                    rowIndex += mergeRange.getHeight() -1;
                }

                // Set the dimensions
                cell.style.width = width + "px";
                cell.style.height = height + "px";
                cell.style.top = yPos + "px";
                cell.style.left = xPos + "px";
                if (offsetWidth) {
                    cell.style.left = "-" + offsetWidth + "px";
                }
                if (offsetHeight) {
                    cell.style.top = "-" + offsetHeight + "px";
                }
                // A cell record may not exist
                var cellXml = this.worksheet.getCell(cellPos);
                if (cellXml) {
                    var cellUi = new jsopenxml.ui.Cell(cellXml, this.openXmlDocument);
                    cellUi.decorate(cell);

                    // Adjust so borders overlap
                    if (cellUi.getBorderRightWidth() > 0) {
                        cell.style.width =
                            width + cellUi.getBorderRightWidth() + "px";
                    }
                    // Adjust so borders overlap
                    if (cellUi.getBorderBottomWidth() > 0) {
                        cell.style.height =
                            height + cellUi.getBorderBottomWidth() + "px";
                    }

                }
                this.element_.appendChild(cell);
                xPos += (width - (offsetWidth || 0));

            }
            //this.element_.appendChild(row);
            yPos += (rowHeight - (offsetHeight || 0));
            size.height -= rowHeight;
            yHeightOffset += rowHeight;
        }

        // Add in a bar indicating the split
        var ySplitBar = this.dom_.createDom("div", { "class": "split-bar y" });
        ySplitBar.style.top = yPos + "px";
        this.element_.appendChild(ySplitBar);
    }

    this.subCreateCells(size.height, i, yPos, yHeightOffset);


    this.onDocument();
};


/**
 * Set the top left cell
 * @param {jsopenxml.math.Cell} topLeftCell
 */
jsopenxml.ui.Worksheet.prototype.setTopLeftCell = function (topLeftCell) {
    this.topLeftCell_ = topLeftCell;
    this.createCells();
};


/**
 * Get the top left cell
 * @return {jsopenxml.math.Cell}
 */
jsopenxml.ui.Worksheet.prototype.getTopLeftCell = function () {
    return this.topLeftCell_;
};


/**
 * Take the element out of the document
 * @param {goog.ui.Component} this
 */
jsopenxml.ui.Worksheet.prototype.offDocument= function () {
    if (this.element_ == null ||
        this.odi_attachedToDocument == false)
        return;

    if (this.odi_docfrag == null)
        this.odi_docfrag = document.createDocumentFragment();

    // Assertain the position within the parents child nodes.
    this.odi_parentNode = this.element_.parentNode;
    if (this.odi_parentNode == null)
        return;

    var nodesOnLevel = goog.dom.getChildren(this.odi_parentNode);
    for (var i = 0; i < nodesOnLevel.length; i++) {
        if (this.element_ == nodesOnLevel[i]) {
            this.odi_nodeIndexOnLevel = i;
            break;
        }
    }
    if (i == nodesOnLevel.length) {
        throw "Error finding node";
    }

    this.odi_docfrag.appendChild(this.element_);
    this.odi_attachedToDocument = false;
};



/**
 * Add the element back into the document
 * @param {goog.ui.Component} this
 */
jsopenxml.ui.Worksheet.prototype.onDocument = function () {
    if (this.element_ == null || this.odi_attachedToDocument
        || this.odi_parentNode == null)
        return;
    goog.dom.insertChildAt(this.odi_parentNode, this.element_,
        this.odi_nodeIndexOnLevel);
    this.odi_attachedToDocument = true;
};


/**
 * Create a grid of cells
 * @param {number} sizeHeight The height in pixels of the area to fill.
 * @param {number} i The column index limit, so this is the index of the first
 * column that will not be visible.
 * @param {number} yPos The height of the current space taken up by rows in 
 * pixels.
 * @param {number} yHeightOffset The cummilative total of all the previously 
 * added row's heights in pixels.
 */
jsopenxml.ui.Worksheet.prototype.subCreateCells =
function (sizeHeight, i, yPos, yHeightOffset) {
    // Add remaining rows
    // Create a div for each cell on display
    for (
        var rowIndex = this.topLeftCell_.getRowIndex() ;
        sizeHeight > 0;
        rowIndex++) {


        var rowXml = this.worksheet.getRow(rowIndex);
        if (rowXml && rowXml.isHidden()) continue;

        //var row = this.dom_.createDom("div", { "class": "row" });
        var rowHeight = this.worksheet.getRowHeight(rowIndex);
        //row.style.height = rowHeight + "px";
        var xPos = 0;
        for (
            var columnIndex = this.topLeftCell_.getColumnIndex() ;
            columnIndex < i;
            columnIndex++) {

            var cell = this.dom_.createDom("div", { "class": "cell" });

            var cellPos = jsopenxml.math.Cell.cast(
                    new goog.math.Coordinate(columnIndex, rowIndex));


            var width = this.worksheet.getColumnWidth(columnIndex),
                height = rowHeight;

            var offsetWidth = undefined, offsetHeight = undefined;

            /**
             * @type {jsopenxml.worksheet.MergeCell}
             */
            var mergeCell = this.worksheet.getMergeCell(cellPos);
            if (mergeCell) {
                //...
                var mergeRange = mergeCell.getRange();
                // Check if the merge range falls outside the visible area
                // on the top or left plane
                // TODO ....
                if (mergeRange.getColumnStartIndex() < this.topLeftCell_.getColumnIndex()
                    || mergeRange.getRowStartIndex() < this.topLeftCell_.getRowIndex()) {
                    var offset = new goog.math.Size(
                        this.topLeftCell_.getColumnIndex() - mergeRange.getColumnStartIndex(),
                        this.topLeftCell_.getRowIndex() - mergeRange.getRowStartIndex()
                    );

                    offsetWidth = 0;
                    offsetHeight = 0;
                    for (var g = mergeRange.getColumnStartIndex(), gLimit = g + offset.width;
                        g < gLimit;
                        g++) {
                        offsetWidth += this.worksheet.getColumnWidth(g);
                        // Need to adjust the column index by the merge cell size
                        columnIndex -= 1;
                    }

                    for (var e = mergeRange.getRowStartIndex(), eLimit = e + offset.height;
                        e < eLimit;
                        e++) {
                        offsetHeight += this.worksheet.getRowHeight(e);
                        // Need to adjust the row index by the merge cell size
                        rowIndex -= 1;
                    }


                    var sizeM = this.worksheet.getRangePixelSize(mergeRange);
                    width = sizeM.width;
                    height = sizeM.height;

                }
                    // If current cell is top left cell of merged cells
                else if (cellPos.getColumnIndex() == mergeRange.getColumnStartIndex()
                   && cellPos.getRowIndex() == mergeRange.getRowStartIndex()) {
                    var sizeM = this.worksheet.getRangePixelSize(mergeRange);
                    width = sizeM.width;
                    height = sizeM.height;
                } else {
                    // Not top left cell, it's already been processed so 
                    // skip
                    continue;
                }


                // Adjust row and column index by merge cell size.
                columnIndex += mergeRange.getWidth() - 1;
                rowIndex += mergeRange.getHeight() - 1;
            }


            // Set the dimensions
            cell.style.width = width + "px";
            cell.style.height = height + "px";
            cell.style.top = yPos + "px";
            cell.style.left = xPos + "px";
            if (offsetWidth) {
                cell.style.left = "-" + offsetWidth + "px";
            }
            if (offsetHeight) {
                cell.style.top = "-" + (offsetHeight + (yHeightOffset || 0)) + "px";
            }
            // A cell record may not exist
            var cellXml = this.worksheet.getCell(cellPos);
            if (cellXml) {
                var cellUi = new jsopenxml.ui.Cell(cellXml, this.openXmlDocument);
                cellUi.decorate(cell);

                // Adjust so borders overlap
                if (cellUi.getBorderRightWidth() > 0) {
                    cell.style.width =
                        width + cellUi.getBorderRightWidth() + "px";
                }
                // Adjust so borders overlap
                if (cellUi.getBorderBottomWidth() > 0) {
                    cell.style.height =
                        height + cellUi.getBorderBottomWidth() + "px";
                }
            }
            this.element_.appendChild(cell);
            xPos += (width - (offsetWidth || 0));

        }
        //this.element_.appendChild(row);

        yPos += (rowHeight - (offsetHeight || 0));
        sizeHeight -= rowHeight;
    }
};