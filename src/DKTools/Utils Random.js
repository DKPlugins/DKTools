//===========================================================================
// DKTools.Utils.Random
//===========================================================================

/**
 * The static class that defines the functions for a random
 *
 * @class DKTools.Utils.Random
 * @memberof DKTools.Utils
 */
DKTools.Utils.Random = class {

    constructor() {
        return DKTools.Utils.Random;
    }

    // G methods

    /**
     * Returns a random boolean
     *
     * @static
     * @returns {Boolean} Random boolean
     */
    static getBoolean() {
        return this.getInt(1) % 2 === 0;
    }

    /**
     * Returns a random float number not exceeding max
     *
     * @static
     * @param {Number} [max=1] - The maximum value of a float number
     * @returns {Number} Random float number not exceeding max
     */
    static getFloat(max = 1) {
        return _.random(0, max, true);
    }

    /**
     * Returns a random color in hex format
     *
     * @static
     * @returns {String} Random color in hex format
     */
    static getHexColor() {
        return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    }

    /**
     * Returns a random integer not exceeding max
     *
     * @static
     * @param {Number} [max=1] - The maximum value of an integer
     * @returns {Number} Random integer not exceeding max
     */
    static getInt(max = 1) {
        return _.random(0, max);
    }

    /**
     * Returns a random color in rgba format
     *
     * @static
     * @param {Number} [alpha=1] - The color opacity
     * @returns {String} Random color in rgba format
     */
    static getRgbaColor(alpha = 1) {
        const r = this.getInt(255);
        const g = this.getInt(255);
        const b = this.getInt(255);

        return 'rgba(%1, %2, %3, %4)'.format(r, g, b, alpha);
    }

};




