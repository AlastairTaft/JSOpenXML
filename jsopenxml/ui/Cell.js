/**
 * @fileoverview Decorates, provides the content and formats a cell
 */

goog.provide('jsopenxml.ui.Cell')
goog.require('goog.ui.Component');
goog.require('jsopenxml.types.ST_CellType');
goog.require('jsopenxml.types.ST_HorizontalAlignment');
goog.require('jsopenxml.types.ST_BorderStyle');

/**
 * @constructor
 * @extends {goog.ui.Component}
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 * @param {jsopenxml.worksheet.C} cell
 * @param {jsopenxml.types.OpenXmlDocument} openXmlDocument
 */
jsopenxml.ui.Cell = function (cell, openXmlDocument, opt_domHelper) {
    goog.base(this, opt_domHelper);

    this.cell = cell;
    this.openXmlDocument = openXmlDocument;
};
goog.inherits(jsopenxml.ui.Cell, goog.ui.Component);


/**
 * Builds the itl.ui.CategoryDataDisplay's DOM tree and stores its root in 
 * this.element_.
 */
jsopenxml.ui.Cell.prototype.createDom = function () {
    this.decorateInternal(this.dom_.createElement('div'));
};


/**
 * Takes an Element that is already present in the document, performs any 
 * transformations necessary to turn it into a structure equivalent to the 
 * structure created by createDom(), and stores it in this.element_.
 * @param {Element} element
 */
jsopenxml.ui.Cell.prototype.decorateInternal = function (element) {
    this.setElementInternal(element);
    goog.dom.classes.add(element, "cell");

    

    // Set the value
    var value = this.cell.getValue();
    if (this.cell.getDataType() == jsopenxml.types.ST_CellType.SHARED_STRING) {
        var stringTable = this.openXmlDocument.getStringTable();
        value = stringTable.getValue(value);
    }
    if (value != null)
        element.innerHTML = value;


    // Add any formatting
    var styleSheet = this.openXmlDocument.getStyleSheet();
    var styleIndex = this.cell.getStyleIndex();
    if (!styleIndex) return;
    var xf = styleSheet.getCellXf(styleIndex);

    // If the xf element has an xfId attribute it uses the xf element
    // contained within cellStyleXfs instead
    // TODO Both the formatting from a cellStyleXf record and a cellXf record
    // should be applied, see CellStyleXfs.js description.
    var xfId = xf.getXfId();
    if (xfId != null) {
        var styleXf = styleSheet.getCellStyleXf(xfId);
        this.applyXfFormatting(styleXf);
    }
    this.applyXfFormatting(xf);

    // TODO Apply the formatting for the xf element

    // The lines above are what should currently be developed with but
    // these 4 lines work for some basic colour formatting.
    /*var fill = styleSheet.getCellFill(this.cell);
    if (fill) {
        element.style.backgroundColor = fill;
    }*/
    /*
    // Testing built in styles
    var styleIndex = this.cell.getStyleIndex();
    if (styleIndex != null) {
        var cellStyle = styleSheet.getCellStyle(styleIndex);
        var builtinId = cellStyle.getBuiltInId();
        if (builtinId) {
            var styleSheet = this.openXmlDocument.getBuiltInStyleSheet(builtinId);
            var fill = styleSheet.getCellFill(this.cell);
            if (fill) {
                element.style.backgroundColor = fill;
            }
        }
    }*/
};


/**
 * Post-DOM-Building Initialization of the jsopenxml.ui.Cell
 * @private
 */
jsopenxml.ui.Cell.prototype.enterDocument = function () {

};


/**
 * Apply the formatting for an xf element
 * @param {jsopenxml.styles.Xf} xf
 */
jsopenxml.ui.Cell.prototype.applyXfFormatting = function (xf) {
    var styleSheet = this.openXmlDocument.getStyleSheet();

    if (xf.applyFill) {
        var fillId = xf.getFillId();
        var fill = styleSheet.getFill(fillId);
        this.element_.style.backgroundColor = fill.getCssColour();
    }

    if (xf.applyFont) {
        var font = styleSheet.getFont(xf.getFontId());
        if (font.isBold()) {
            this.element_.style.fontWeight = "bold";
        }
        // Set the font size.
        var fontSize = font.getFontSize();
        if (fontSize != null) {
            this.element_.style.fontSize = fontSize + "pt";
        }
        // Set the font colour.
        var colour = font.getCssColour();
        if (colour != null) {
            this.element_.style.color = colour;
        }
        // Set the font family.
        var fontFamily = font.getFontFamily();
        if (fontFamily != null) {
            this.element_.style.fontFamily = fontFamily;
        }


    }


    if (xf.applyAlignment) {
        var alignment = xf.getAlignment();
        if (alignment) {
            switch (alignment.getHorizontal()) {
                case jsopenxml.types.ST_HorizontalAlignment.left:
                    this.element_.style.textAlign = "left"; break;
                case jsopenxml.types.ST_HorizontalAlignment.right:
                    this.element_.style.textAlign = "right"; break;
                case jsopenxml.types.ST_HorizontalAlignment.centre:
                    this.element_.style.textAlign = "center"; break;
                case jsopenxml.types.ST_HorizontalAlignment.justify:
                    this.element_.style.textAlign = "justify"; break;
                    // TODO There are other alignment values.
            }
            // TODO There are other alignment properties.
        }
    }

    if (xf.applyBorder) {
        var borderId = xf.getBorderId();
        var border = styleSheet.getBorder(borderId);

        this.applyBorder(border);
    }
};



/**
 * Apply a border
 * @param {jsopenxml.styles.Border} border
 */
jsopenxml.ui.Cell.prototype.applyBorder = function (border) {
    // TODO Doesn't fully support all border styles.

    var left = border.getLeft();
    if (left != null) {

        this.element_.style.borderLeftWidth = "1px";

        var style = left.getStyle();
        switch (style) {
            case jsopenxml.types.ST_BorderStyle.dashed:
            case jsopenxml.types.ST_BorderStyle.dashDot:
            case jsopenxml.types.ST_BorderStyle.mediumDashed:
            case jsopenxml.types.ST_BorderStyle.slantDashDot:
                this.element_.style.borderLeftStyle = "dashed"; break;
            case jsopenxml.types.ST_BorderStyle.dotted:
            case jsopenxml.types.ST_BorderStyle.dashDotDot:
            case jsopenxml.types.ST_BorderStyle.mediumDashDot:
            case jsopenxml.types.ST_BorderStyle.mediumDashDotDot:
                this.element_.style.borderLeftStyle = "dotted"; break;
            case jsopenxml.types.ST_BorderStyle["double"]:
                this.element_.style.borderLeftStyle = "double"; break;
            case jsopenxml.types.ST_BorderStyle.hair:
            case jsopenxml.types.ST_BorderStyle.medium:
            case jsopenxml.types.ST_BorderStyle.thick:
            case jsopenxml.types.ST_BorderStyle.thin:
                this.element_.style.borderLeftStyle = "solid"; break;
            case jsopenxml.types.ST_BorderStyle.none:
            default: this.element_.borderLeftStyle = "none"; break;
        }

        var colour = left.getColour();
        if (colour != null) {
            this.element_.style.borderLeftColor = colour.getCssColour();
        }
    }

    var right = border.getRight();
    if (right != null) {
        this.borderRightWidth_ = 1;
        this.element_.style.borderRightWidth = "1px";
        // Have the cell overlap the right
        //var width = this.worksheet.getColumnWidth(this.cell.getPosition().x);
        //this.element_.style.width = width + 1 + "px";
        

        var style = right.getStyle();
        switch (style) {
            case jsopenxml.types.ST_BorderStyle.dashed:
            case jsopenxml.types.ST_BorderStyle.dashDot:
            case jsopenxml.types.ST_BorderStyle.mediumDashed:
            case jsopenxml.types.ST_BorderStyle.slantDashDot:
                this.element_.style.borderRightStyle = "dashed"; break;
            case jsopenxml.types.ST_BorderStyle.dotted:
            case jsopenxml.types.ST_BorderStyle.dashDotDot:
            case jsopenxml.types.ST_BorderStyle.mediumDashDot:
            case jsopenxml.types.ST_BorderStyle.mediumDashDotDot:
                this.element_.style.borderRightStyle = "dotted"; break;
            case jsopenxml.types.ST_BorderStyle["double"]:
                this.element_.style.borderRightStyle = "double"; break;
            case jsopenxml.types.ST_BorderStyle.hair:
            case jsopenxml.types.ST_BorderStyle.medium:
            case jsopenxml.types.ST_BorderStyle.thick:
            case jsopenxml.types.ST_BorderStyle.thin:
                this.element_.style.borderRightStyle = "solid"; break;
            case jsopenxml.types.ST_BorderStyle.none:
            default: this.element_.borderRightStyle = "none"; break;
        }

        var colour = right.getColour();
        if (colour != null) {
            this.element_.style.borderRightColor = colour.getCssColour();
        }
    }

    var top = border.getTop();
    if (top != null) {

        this.element_.style.borderTopWidth = "1px";

        var style = top.getStyle();
        switch (style) {
            case jsopenxml.types.ST_BorderStyle.dashed:
            case jsopenxml.types.ST_BorderStyle.dashDot:
            case jsopenxml.types.ST_BorderStyle.mediumDashed:
            case jsopenxml.types.ST_BorderStyle.slantDashDot:
                this.element_.style.borderTopStyle = "dashed"; break;
            case jsopenxml.types.ST_BorderStyle.dotted:
            case jsopenxml.types.ST_BorderStyle.dashDotDot:
            case jsopenxml.types.ST_BorderStyle.mediumDashDot:
            case jsopenxml.types.ST_BorderStyle.mediumDashDotDot:
                this.element_.style.borderTopStyle = "dotted"; break;
            case jsopenxml.types.ST_BorderStyle["double"]:
                this.element_.style.borderTopStyle = "double"; break;
            case jsopenxml.types.ST_BorderStyle.hair:
            case jsopenxml.types.ST_BorderStyle.medium:
            case jsopenxml.types.ST_BorderStyle.thick:
            case jsopenxml.types.ST_BorderStyle.thin:
                this.element_.style.borderTopStyle = "solid"; break;
            case jsopenxml.types.ST_BorderStyle.none:
            default: this.element_.borderTopStyle = "none"; break;
        }

        var colour = top.getColour();
        if (colour != null) {
            this.element_.style.borderTopColor = colour.getCssColour();
        }
    }

    var bottom = border.getBottom();
    if (bottom != null) {

        this.borderBottomWidth_ = 1;
        this.element_.style.borderBottomWidth = "1px";
        // Have the cell overlap the bottom
        //var height = this.worksheet.getRowHeight(this.cell.getPosition().y);
        //this.element_.style.height = height + 1 + "px";

        var style = bottom.getStyle();
        switch (style) {
            case jsopenxml.types.ST_BorderStyle.dashed: 
            case jsopenxml.types.ST_BorderStyle.dashDot: 
            case jsopenxml.types.ST_BorderStyle.mediumDashed: 
            case jsopenxml.types.ST_BorderStyle.slantDashDot: 
                this.element_.style.borderBottomStyle = "dashed"; break;
            case jsopenxml.types.ST_BorderStyle.dotted:
            case jsopenxml.types.ST_BorderStyle.dashDotDot:
            case jsopenxml.types.ST_BorderStyle.mediumDashDot: 
            case jsopenxml.types.ST_BorderStyle.mediumDashDotDot: 
                this.element_.style.borderBottomStyle = "dotted"; break;
            case jsopenxml.types.ST_BorderStyle["double"]: 
                this.element_.style.borderBottomStyle = "double"; break;
            case jsopenxml.types.ST_BorderStyle.hair: 
            case jsopenxml.types.ST_BorderStyle.medium: 
            case jsopenxml.types.ST_BorderStyle.thick:
            case jsopenxml.types.ST_BorderStyle.thin:
                this.element_.style.borderBottomStyle = "solid"; break;
            case jsopenxml.types.ST_BorderStyle.none:
            default: this.element_.borderBottomStyle = "none"; break;
        }

        var colour = bottom.getColour();
        if (colour != null) {
            this.element_.style.borderBottomColor = colour.getCssColour();
        }

       
    }


    // TODO Does not cover diagonal
};


/**
 * Get the width of the border on the right, if there is no border returns 0.
 * @return {number}
 */
jsopenxml.ui.Cell.prototype.getBorderRightWidth = function () {
    return this.borderRightWidth_ || 0;
};


/**
 * Get the width of the border on the bottom, if there is no border returns 0.
 * @return {number}
 */
jsopenxml.ui.Cell.prototype.getBorderBottomWidth = function () {
    return this.borderBottomWidth_ || 0;
};