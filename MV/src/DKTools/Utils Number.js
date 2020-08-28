//===========================================================================
// DKTools.Utils.Number
//===========================================================================

/**
 * The static class that defines utility methods for Number class
 *
 * @since 4.0.0
 *
 * @class DKTools.Utils.Number
 * @memberof DKTools.Utils
 */
DKTools.Utils.Number = class {

    // C methods

    /**
     * Clamps number within the inclusive lower and upper bounds.
     *
     * @static
     *
     * @param {Number} value - The number to clamp
     * @param {Number} start - The lower bound
     * @param {Number} [end] - The upper bound
     *
     * @example
     * DKTools.Utils.Number.clamp(-10, -5, 5);
     * => -5
     *
     * @example
     * DKTools.Utils.Number.clamp(10, -5, 5);
     * => 5
     *
     * @returns {Number} Returns the clamped number
     */
    static clamp(value, start, end) {
        return _.clamp(value, start, end);
    }

    // I methods

    /**
     * Checks if value is between start and up to, but not including, end.
     * If end is not specified, it's set to start with start then set to 0.
     * If start is greater than end the params are swapped to support negative ranges.
     *
     * @static
     *
     * @param {Number} value - The number to check
     * @param {Number} start - The start of the range
     * @param {Number} [end] - The end of the range
     *
     * DKTools.Utils.Number.inRange(3, 2, 4);
     * => true
     *
     * DKTools.Utils.Number.inRange(4, 8);
     * => true
     *
     * DKTools.Utils.Number.inRange(4, 2);
     * => false
     *
     * @returns {Boolean} Returns true if number is in the range, else false
     */
    static inRange(value, start, end) {
        return _.inRange(value, start, end);
    }

};




