//===========================================================================
// DKTools.Unit
//===========================================================================

/**
 * Unit class
 *
 * @class DKTools.Unit
 *
 * @since 2.0.0
 * @memberof DKTools
 *
 * @example
 * var unit = new DKTools.Unit({
 *      source: 100,
 *      percents: 30
 * });
 *
 * unit.getValue(); // => 30
 *
 * @see DKTools.Unit.prototype.initialize
 */
DKTools.Unit = class {

    constructor(object) {
        this.initialize.apply(this, arguments);
    }

    // initialize methods

    /**
     * Initializes the unit
     *
     * @param {DKTools.Unit | Object} [object={}] - Parameters
     *
     * @param {DKTools.Unit | Number} object.source - Source
     * @param {Function | Number} [object.percents=100] - Percents
     * @param {Function} [object.getValueHandler] - Handler of the getValue
     */
    initialize(object) {
        object = object || {};

        this.setSource(object.source);
        this.setPercents(object.percents);
        this.setGetValueHandler(object.getValueHandler);
    }

    // A methods

    /**
     * Adds the unit (parameter) to this unit
     * Returns this unit
     *
     * @param {DKTools.Unit | Number} unit - Unit
     *
     * @see DKTools.Unit.prototype._getValueFromUnit
     *
     * @returns {DKTools.Unit} This unit
     */
    add(unit) {
        if (!unit) {
            return this;
        }

        const value = this._getValueFromUnit(unit);

        if (!value) {
            return this;
        }

        if (this._source instanceof DKTools.Unit) {
            this._source.add(value);
        } else {
            this._source += value;
        }

        return this;
    }

    // C methods

    /**
     * Clones the unit
     *
     * @returns {DKTools.Unit} Cloned unit
     */
    clone() {
        return new (this.constructor)(this);
    }

    // D methods

    /**
     * Divides the unit (parameter) to this unit
     * Returns this unit
     *
     * @param {DKTools.Unit | Number} unit - Unit
     *
     * @see DKTools.Unit.prototype._getValueFromUnit
     *
     * @returns {DKTools.Unit} This unit
     */
    div(unit) {
        if (!unit) {
            return this;
        }

        const value = this._getValueFromUnit(unit);

        if (!value) {
            return this;
        }

        if (this._source instanceof DKTools.Unit) {
            this._source.div(value);
        } else {
            this._source /= value;
        }

        return this;
    }

    // E methods

    /**
     * Returns true if the unit equals unit (parameter)
     *
     * @param {DKTools.Unit} unit - Unit to compare
     * @returns {Boolean} Unit equals unit (parameter)
     */
    equals(unit) {
        if (!unit) {
            return false;
        }

        return this._source === unit.source &&
                this._percents === unit.percents;
    }

    // G methods

    /**
     * Returns value of the unit
     *
     * @private
     *
     * @param {DKTools.Unit | Number} unit - Unit
     *
     * @see DKTools.Unit.prototype.getValue
     *
     * @returns {Number} Value of the unit
     */
    _getValueFromUnit(unit) {
        if (unit instanceof DKTools.Unit) {
            return unit.getValue();
        }

        return unit;
    }

    /**
     * @returns {Number}
     */
    getPercents() {
        if (DKTools.Utils.isFunction(this._percents)) {
            return this._percents(this) || 100;
        }

        return this._percents || 100;
    }

    /**
     * Returns the value of the unit
     *
     * @see DKTools.Unit.prototype.getValueBase
     * @see DKTools.Utils.isFunction
     *
     * @returns {Number} Value of the unit
     */
    getValue() {
        let value;

        if (DKTools.Utils.isFunction(this._getValueHandler)) {
            value = this._getValueHandler(this);
        } else {
            value = this.getValueBase();
        }

        return value || 0;
    }

    /**
     * Returns the value of the unit
     *
     * @see DKTools.Unit.prototype.getPercents
     *
     * @returns {Number} Value of the unit
     */
    getValueBase() {
        const percents = this.getPercents() / 100;

        if (this._source instanceof DKTools.Unit) {
            return this._source.getValue() * percents;
        } else if (Number.isFinite(this._source)) {
            return this._source * percents;
        }

        return 0;
    }

    // M methods

    /**
     * Multiplies the unit (parameter) to this unit
     * Returns this unit
     *
     * @param {DKTools.Unit | Number} unit - Unit
     *
     * @see DKTools.Unit.prototype._getValueFromUnit
     *
     * @returns {DKTools.Unit} This unit
     */
    mul(unit) {
        if (!unit) {
            return this;
        }

        const value = this._getValueFromUnit(unit);

        if (!value) {
            return this;
        }

        if (this._source instanceof DKTools.Unit) {
            this._source.mul(value);
        } else {
            this._source *= value;
        }

        return this;
    }

    // S methods

    /**
     * Sets the getValue handler
     *
     * @param {Function} handler - Handler
     */
    setGetValueHandler(handler) {
        /**
         * @private
         * @readonly
         * @type {Function}
         */
        this._getValueHandler = handler;
    }

    /**
     * Sets the percents
     *
     * @param {Function | Number} percents - Percents
     */
    setPercents(percents = 100) {
        /**
         * @private
         * @readonly
         * @type {Function | Number}
         */
        this._percents = percents;
    }

    /**
     * Sets the source
     *
     * @param {DKTools.Unit | Number} source - Source
     */
    setSource(source) {
        /**
         * @private
         * @readonly
         * @type {DKTools.Unit | Number}
         */
        this._source = source;
    }

    /**
     * Subtracts the unit (parameter) to this unit
     * Returns this unit
     *
     * @param {DKTools.Unit | Number} unit - Unit
     *
     * @see DKTools.Unit.prototype._getValueFromUnit
     *
     * @returns {DKTools.Unit} This unit
     */
    sub(unit) {
        if (!unit) {
            return this;
        }

        const value = this._getValueFromUnit(unit);

        if (!value) {
            return this;
        }

        if (this._source instanceof DKTools.Unit) {
            this._source.rem(value);
        } else {
            this._source -= value;
        }

        return this;
    }

};

// properties

Object.defineProperties(DKTools.Unit.prototype, {

    /**
     * Source
     *
     * @readonly
     * @type {DKTools.Unit | Number}
     * @memberof DKTools.Unit.prototype
     */
    source: {
        get: function() {
            return this._source
        },
        configurable: true
    },

    /**
     * Percents
     *
     * @readonly
     * @type {Function | Number}
     * @memberof DKTools.Unit.prototype
     */
    percents: {
        get: function() {
            return this._percents;
        },
        configurable: true
    },

    /**
     * Handler of the getValue
     *
     * @readonly
     * @type {Function}
     * @memberof DKTools.Unit.prototype
     */
    getValueHandler: {
        get: function() {
            return this._getValueHandler;
        },
        configurable: true
    }

});





