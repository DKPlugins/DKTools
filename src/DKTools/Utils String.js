//===========================================================================
// DKTools.Utils.String
//===========================================================================

/**
 * The static class that defines utility methods for String class
 *
 * @class DKTools.Utils.String
 * @memberof DKTools.Utils
 */
DKTools.Utils.String = class {

    // T methods

    /**
     * Splits a string by commas into an array of booleans
     *
     * @static
     *
     * @param {String} string - String to split
     *
     * @example
     * var array = DKTools.Utils.String.toBooleanArray('1, 2, 3');
     * => [true, true, true]
     *
     * @example
     * var array = DKTools.Utils.String.toBooleanArray('1,2,');
     * => [true, true, false]
     *
     * @see DKTools.Utils.String.toStringArray
     *
     * @returns {Boolean[]} Array of booleans
     */
    static toBooleanArray(string) {
        return _.map(this.toStringArray(string), Boolean);
    }

    /**
     * Splits a string by commas into an array of numbers
     *
     * @static
     *
     * @param {String} string - String to split
     *
     * @example
     * var array = DKTools.Utils.String.toNumberArray('1, 2, 3');
     * => [1, 2, 3]
     *
     * @example
     * var array = DKTools.Utils.String.toNumberArray('1,2,3');
     * => [1, 2, 3]
     *
     * @see DKTools.Utils.String.toStringArray
     *
     * @returns {Number[]} Array of numbers
     */
    static toNumberArray(string) {
        return _.map(this.toStringArray(string), Number);
    }

    /**
     * Splits a string by commas into an array of string
     *
     * @version 5.0.0
     * @static
     *
     * @param {String} string - String
     *
     * @example
     * var array = DKTools.Utils.String.toStringArray('1, 2, 3');
     * => ['1', '2', '3']
     *
     * @example
     * var array = DKTools.Utils.String.toStringArray('1,2,3');
     * => ['1', '2', '3']
     *
     * @returns {String[]} Array of strings
     */
    static toStringArray(string) {
        return string.trim().replace(/\s*\,\s*/g, ',').split(',');
    }

};




