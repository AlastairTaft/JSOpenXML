/**
 * @fileoverview The enumeration value indicating the portion of Cell Alignment 
 * in a cell format (XF) that is horizontal alignment, i.e., whether it is 
 * aligned general, left, right, horizontally centered, filled (replicated), 
 * justified, centered across multiple cells, or distributed.
 *
 * Page 2459 of the spec
 */

goog.provide('jsopenxml.types.ST_HorizontalAlignment');
//----------------------------------------------------------------------------//
//--- Automatically generated to provide intellisense for visual studio, -----//
//--- please do not edit manually. -------------------------------------------//
//----------------------------------------------------------------------------//
window.jsopenxml = window.jsopenxml || {};
window.jsopenxml.types = window.jsopenxml.types || {};
//--- intellisense end -------------------------------------------------------//

/**
 * @enum
 */
jsopenxml.types.ST_HorizontalAlignment = {
    /** 
     * The horizontal alignment is centered, meaning the text
     * is centered across the cell.
     */
    centre: "center",

    /**
     * The horizontal alignment is centered across multiple
     * cells. The information about how many cells to span is
     * expressed in the Sheet Part, in the row of the cell in
     * question. For each cell that is spanned in the
     * alignment, a cell element needs to be written out, with
     * the same style Id which references the
     * centerContinuous alignment.
     */
    centerContinuous: "centerContinuous",

    /**
     * Indicates that each 'word' in each line of text inside
     * the cell is evenly distributed across the width of the
     * cell, with flush right and left margins.
     * When there is also an indent value to apply, both the
     * left and right side of the cell are padded by the indent
     * value.
     * A 'word' is a set of characters with no space character
     * in them.
     * Two lines inside a cell are separated by a carriage
     * return.
     */
    distributed: "distributed",

    /**
     * Indicates that the value of the cell should be filled
     * across the entire width of the cell. If blank cells to the
     * right also have the fill alignment, they are also filled
     * with the value, using a convention similar to
     * centerContinuous.
     * Additional rules:
     *  Only whole values can be appended, not
     * partial values.
     *  The column will not be widened to 'best fit'
     * the filled value
     *  If appending an additional occurrence of the
     * value exceeds the boundary of the cell
     * left/right edge, don't append the additional
     * occurrence of the value.
     *  The display value of the cell is filled, not the
     * underlying raw number.
     */  
    fill: "fill",

    /**
     * The horizontal alignment is general-aligned. Text data
     * is left-aligned. Numbers, dates, and times are rightaligned.
     * Boolean types are centered. Changing the
     * alignment does not change the type of data.
     */
    general: "general",

    /**
     * The horizontal alignment is justified (flush left and
     * right). For each line of text, aligns each line of the
     * wrapped text in a cell to the right and left (except the
     * last line). If no single line of text wraps in the cell, then
     * the text is not justified.
     */
    justify: "justify",

    /**
     * The horizontal alignment is left-aligned, even in Right18.
     * to-Left mode. Aligns contents at the left edge of the
     * cell. If an indent amount is specified, the contents of
     * the cell is indented from the left by the specified
     * number of character spaces. The character spaces are
     * based on the
     */
    left: "left",

    /**
     * The horizontal alignment is right-aligned, meaning that
     * cell contents are aligned at the right edge of the cell,
     * even in Right-to-Left mode.
     */
    right: "right"
};
