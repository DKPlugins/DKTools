//===========================================================================
// DKTools.Utils.Array
//===========================================================================

/**
 * The static class that defines utility methods for Array class
 *
 * @class DKTools.Utils.Array
 * @memberof DKTools.Utils
 */
DKTools.Utils.Array = class {

    // A methods

    /**
     * Returns the average of array values
     *
     * @since 4.0.0
     * @static
     *
     * @param {Number[]} array - Array
     *
     * @example
     * var array = [1, 2, 3];
     * DKTools.Utils.Array.avg(array);
     * => 2
     *
     * @returns {Number} Average of array values
     */
    static avg(array) {
        return this.sum(array) / array.length;
    }

    // C methods

    /**
     * Removes '', null, undefined and NaN from the array.
     * This method mutates array
     *
     * @static
     *
     * @param {Array} array - The array to compact
     *
     * @example
     * var array = [null, 1, undefined];
     * DKTools.Utils.Array.compact(array);
     * => [1];
     *
     * @returns {Array} Mutated array
     */
    static compact(array) {
        return _.pull(array, '', null, undefined, Number.NaN);
    }

    /**
     * Performs a logical operation of the conjunction
     *
     * @static
     *
     * @param {Array} array - The array to perform
     *
     * @example
     * var array = [true, true];
     * DKTools.Utils.Array.conjunction(array);
     * => true
     *
     * @example
     * var array = [true, false];
     * DKTools.Utils.Array.conjunction(array);
     * => false
     *
     * @returns {Boolean} Result of operation
     */
    static conjunction(array) {
        return _.every(array, _.isEqual.bind(this, true));
    }

    /**
     * Checks whether the array contains a given item
     *
     * @deprecated 9.0.0
     * @static
     *
     * @param {Array} array - The array in which the search is performed
     * @param {*} item - The item to search
     *
     * @example
     * var array = [1, 2];
     * DKTools.Utils.Array.contains(array, 1);
     * => true
     *
     * @example
     * var array = [1, 2];
     * DKTools.Utils.Array.contains(array, 3);
     * => false
     *
     * @example
     * var array = null;
     * DKTools.Utils.Array.contains(array, 1);
     * => false
     *
     * @returns {Boolean} Array contains a given item
     */
    static contains(array, item) {
        return _.includes(array, item);
    }

    /**
     * Returns the number of item in the array
     *
     * @static
     *
     * @param {Array} array - The array in which the search is performed
     * @param {*} item - The item to search
     *
     * @example
     * var array = [1, 1, 2];
     * DKTools.Utils.Array.count(array, 1);
     * => 2
     *
     * @example
     * var array = [1, 1, 2];
     * DKTools.Utils.Array.count(array, 2);
     * => 1
     *
     * @returns {Number} Number of item in the array
     */
    static count(array, item) {
        return _.size(array) - _.size(_.without(array, item));
    }

    /**
     * Returns the sum of the number of items in the array
     *
     * @static
     *
     * @param {Array} array - The array in which the search is performed
     * @param {Array} items - The items to search
     *
     * @example
     * var array1 = [1, 1, 2];
     * var array2 = [1, 2];
     * DKTools.Utils.Array.counts(array1, array2);
     * => 3
     *
     * @returns {Number} Sum of the number of items in the array
     */
    static counts(array, items) {
        return _.size(array) - _.size(_.difference(array, items));
    }

    // D methods

    /**
     * Performs a logical operation of the disjunction
     *
     * @static
     *
     * @param {Array} array - The array to perform
     *
     * @example
     * var array = [true, false, false];
     * DKTools.Utils.Array.disjunction(array);
     * => true
     *
     * @example
     * var array = [false, false];
     * DKTools.Utils.Array.disjunction(array);
     * => false
     *
     * @returns {Boolean} Result of operation
     */
    static disjunction(array) {
        return _.some(array, _.isEqual.bind(this, true));
    }

    // I methods

    /**
     * Inserts the item into the array.
     * This method mutates array
     *
     * @static
     *
     * @param {Array} array - The array to insert
     * @param {*} item - The item to insert
     * @param {Number} [index=0] - The index to insert
     *
     * @example
     * var array = [1, 2, 4];
     * DKTools.Utils.Array.insert(array, 3, 2);
     * console.log(array); // => [1, 2, 3, 4];
     */
    static insert(array, item, index = 0) {
        array.splice(index, 0, item);
    }

    /**
     * Checks whether all elements of the array are of type Bitmap
     *
     * @deprecated 9.1.0
     * @static
     *
     * @param {Array} array - The array to check
     *
     * @example
     * var array = [new Bitmap()];
     * DKTools.Utils.Array.isBitmapArray(array);
     * => true
     *
     * @example
     * var array = [new Bitmap(), 2];
     * DKTools.Utils.Array.isBitmapArray(array);
     * => false
     *
     * @returns {Boolean} All elements of the array are of type Bitmap
     */
    static isBitmapArray(array) {
        return _.every(array, item => item instanceof Bitmap);
    }

    /**
     * Checks whether all elements of the array are of type Boolean
     *
     * @deprecated 9.1.0
     * @static
     *
     * @param {Array} array - The array to check
     *
     * @example
     * var array = [true, false];
     * DKTools.Utils.Array.isBooleanArray(array);
     * => true
     *
     * @example
     * var array = ['1', false];
     * DKTools.Utils.Array.isBooleanArray(array);
     * => false
     *
     * @returns {Boolean} All elements of the array are of type Boolean
     */
    static isBooleanArray(array) {
        return _.every(array, item => DKTools.Utils.isBoolean(item));
    }

    /**
     * Checks whether the array is empty
     *
     * @deprecated 9.0.0
     * @version 2.0.0
     * @static
     *
     * @param {Array} array - The array to check
     *
     * @returns {Boolean} Array is empty
     */
    static isEmpty(array) {
        return _.isEmpty(array);
    }

    /**
     * Checks whether all elements of the array are of type Number
     *
     * @deprecated 9.1.0
     * @static
     *
     * @param {Array} array - The array to check
     *
     * @example
     * var array = [1, 2];
     * DKTools.Utils.Array.isNumberArray(array);
     * => true
     *
     * @example
     * var array = ['1', 2];
     * DKTools.Utils.Array.isNumberArray(array);
     * => false
     *
     * @returns {Boolean} All elements of the array are of type Number
     */
    static isNumberArray(array) {
        return _.every(array, item => DKTools.Utils.isNumber(item));
    }

    /**
     * Checks whether all elements of the array are of type Sprite
     *
     * @deprecated 9.1.0
     * @static
     *
     * @param {Array} array - The array to check
     *
     * @example
     * var array = [new Sprite()];
     * DKTools.Utils.Array.isSpriteArray(array);
     * => true
     *
     * @example
     * var array = [new Sprite(), 2];
     * DKTools.Utils.Array.isSpriteArray(array);
     * => false
     *
     * @returns {Boolean} All elements of the array are of type Sprite
     */
    static isSpriteArray(array) {
        return _.every(array, item => item instanceof Sprite);
    }

    /**
     * Checks whether all elements of the array are of type String
     *
     * @deprecated 9.1.0
     * @version 2.0.0
     * @static
     *
     * @param {Array} array - The array to check
     *
     * @example
     * var array = ['1', '2'];
     * DKTools.Utils.Array.isStringArray(array);
     * => true
     *
     * @example
     * var array = ['1', 2];
     * DKTools.Utils.Array.isStringArray(array);
     * => false
     *
     * @returns {Boolean} All elements of the array are of type String
     */
    static isStringArray(array) {
        return _.every(array, item => DKTools.Utils.isString(item));
    }

    /**
     * Checks whether all elements of the array are of type Window
     *
     * @deprecated 9.1.0
     * @static
     *
     * @param {Array} array - The array to check
     *
     * @example
     * var array = [new Window()];
     * DKTools.Utils.Array.isWindowArray(array);
     * => true
     *
     * @example
     * var array = [new Window(), 2];
     * DKTools.Utils.Array.isWindowArray(array);
     * => false
     *
     * @returns {Boolean} All elements of the array are of type Window
     */
    static isWindowArray(array) {
        return _.every(array, item => item instanceof Window);
    }

    // M methods

    /**
     * Returns the maximum value from array
     *
     * @since 4.0.0
     * @static
     *
     * @param {Number[]} array - Array
     *
     * @example
     * var array = [1, 2, 3];
     * DKTools.Utils.Array.max(array);
     * => 3
     *
     * @returns {Number} Maximum value
     */
    static max(array) {
        return Math.max.apply(Math, array);
    }

    /**
     * Returns the minimum value from array
     *
     * @since 4.0.0
     * @static
     *
     * @param {Number[]} array - Array
     *
     * @example
     * var array = [1, 2, 3];
     * DKTools.Utils.Array.min(array);
     * => 1
     *
     * @returns {Number} Minimum value
     */
    static min(array) {
        return Math.min.apply(Math, array);
    }

    // R methods

    /**
     * Removes item from the array.
     * This method mutates array
     *
     * @static
     *
     * @param {Array} array - The array to remove
     * @param {*} item - The item to remove
     *
     * @example
     * var array = [1, 2, 3];
     * DKTools.Utils.Array.remove(array, 1);
     * => [2, 3];
     *
     * @returns {Array} Mutated array
     */
    static remove(array, item) {
        return _.pull(array, item);
    }

    // S methods

    /**
     * Returns the sum of array values
     *
     * @version 9.1.0
     * @since 4.0.0
     * @static
     *
     * @param {Number[]} array - Array
     *
     * @example
     * var array = [1, 2, 3];
     * DKTools.Utils.Array.sum(array);
     * => 6
     *
     * @example
     * var array = null;
     * DKTools.Utils.Array.sum(array);
     * => Number.NaN
     *
     * @returns {Number | Number.NaN} Sum of array values
     */
    static sum(array) {
        return Array.isArray(array) ?
            array.reduce((acc, value) => acc + value, 0)
            : Number.NaN;
    }

};




