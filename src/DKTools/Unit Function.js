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
 * @memberof DKTools
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
 * @see DKTools.Unit.Function.initialize
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
     * @override
     *
     * @see DKTools.Unit.Function.prototype.getPercents
     *
     * @returns {Number} Value of the unit
     */
    getValueBase() {
        return this._source(this) * this.getPercents() / 100;
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





