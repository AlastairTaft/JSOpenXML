/**
 * @fileoverview This enumeration value indicates the type of vertical alignment
 * for a cell, i.e., whether it is aligned top, bottom, vertically centered, 
 * justified or distributed.
 *
 * Page 2512 of the spec
 */

goog.provide('jsopenxml.types.ST_VerticalAlignment');
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
jsopenxml.types.ST_HorizontalSlignment = {
    /** 
     * The vertical alignment is aligned-to-bottom.
     */
    bottom: "bottom",

    /**
     * The vertical alignment is centered across the height of
     * the cell.
     */
    center: "center",

    /**
     * When text direction is horizontal: the vertical
     * alignment of lines of text is distributed vertically,
     * where each line of text inside the cell is evenly
     * distributed across the height of the cell, with flush top
     * and bottom margins.
     * When text direction is vertical: behaves exactly as
     * distributed horizontal alignment. The first words in a
     * line of text (appearing at the top of the cell) are flush
     * with the top edge of the cell, and the last words of a
     * line of text are flush with the bottom edge of the cell,
     * and the line of text is distributed evenly from top to
     * bottom.
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
    justify: "justify",

    /**
     * The vertical alignment is aligned-to-top.
     */
    top: "top",

};
