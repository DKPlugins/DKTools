//===========================================================================
// DKTools.Unit.Function
//===========================================================================

/**
 * Unit class
 *
 * @class DKTools.Unit.Function
 * @extends DKTools.Unit
 *
 * @since 2.0.0
 * @memberof DKTools.Unit
 *
 * @example
 * var func = function() {
 *      return 100;
 * };
 *
 * var unit = new DKTools.Unit.Function({
 *      source: func,
 *      percents: 200
 * });
 *
 * unit.getValue(); // => 200
 *
 * @see DKTools.Unit.Function.prototype.initialize
 */
DKTools.Unit.Function = class extends DKTools.Unit {

    // A methods

    /**
     * Doing nothing
     *
     * @override
     * @returns {DKTools.Unit.Function} This unit
     */
    add() {
        return this;
    }

    // D methods

    /**
     * Doing nothing
     *
     * @override
     * @returns {DKTools.Unit.Function} This unit
     */
    div() {
        return this;
    }

    // G methods

    /**
     * Returns the value of the unit
     *
     * @version 6.3.0
     *
     * @override
     *
     * @see DKTools.Unit.Function.prototype.getPercents
     *
     * @returns {Number} Value of the unit
     */
    getValueBase() {
        if (!this.hasSource()) {
            return Number.NaN;
        }

        const percents = this.getPercents() / 100;

        if (percents === 0) {
            return 0;
        }

        return this._source(this) * percents;
    }

    // H methods

    /**
     * Returns true if the unit has the source
     *
     * @since 6.3.0
     *
     * @override
     *
     * @returns {Boolean} Unit has the source
     */
    hasSource() {
        return DKTools.Utils.isFunction(this._source);
    }

    // M methods

    /**
     * Doing nothing
     *
     * @override
     * @returns {DKTools.Unit.Function} This unit
     */
    mul() {
        return this;
    }

    // S methods

    /**
     * Doing nothing
     *
     * @override
     * @returns {DKTools.Unit.Function} This unit
     */
    sub() {
        return this;
    }

};





