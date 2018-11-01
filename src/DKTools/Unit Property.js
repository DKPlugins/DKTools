//===========================================================================
// DKTools.Unit.Property
//===========================================================================

/**
 * Unit class
 *
 * @class DKTools.Unit.Property
 * @extends DKTools.Unit
 *
 * @since 2.0.0
 * @memberof DKTools
 *
 * @example
 * var object = { width: 100 };
 * var unit = new DKTools.Unit.Property({
 *      source: object,
 *      percents: 30,
 *      property: 'width'
 * });
 *
 * unit.getValue(); // => 30
 *
 * @see DKTools.Unit.Property.prototype.initialize
 */
DKTools.Unit.Property = class extends DKTools.Unit {

    // initialize methods

    /**
     * Initializes the unit
     *
     * @override
     *
     * @param {Object} [object={}] Parameters
     *
     * @param {String} object.property - Property
     *
     * @see DKTools.Unit.prototype.initialize
     */
    initialize(object) {
        object = object || {};

        DKTools.Unit.prototype.initialize.call(this, object);

        this.setProperty(object.property);
    }

    // A methods

    /**
     * Adds the unit (parameter) to this unit
     * Returns this unit
     *
     * @override
     *
     * @param {DKTools.Unit | Object | Number} unit - Unit
     *
     * @see DKTools.Unit.Property.prototype._getValueFromUnit
     *
     * @returns {DKTools.Property} This unit
     */
    add(unit) {
        if (!unit) {
            return this;
        }

        const property = this._property;
        const source = this._source[property];
        let value = this._getValueFromUnit(unit);

        if (value instanceof Object) {
            value = value[property];
        }

        if (!value) {
            return this;
        }

        if (source instanceof DKTools.Unit) {
            source.add(value);
        } else {
            this._source[property] += value;
        }

        return this;
    }

    // D methods

    /**
     * Divides the unit (parameter) to this unit
     * Returns this unit
     *
     * @override
     *
     * @param {DKTools.Unit | Object | Number} unit - Unit
     *
     * @see DKTools.Unit.Property.prototype._getValueFromUnit
     *
     * @returns {DKTools.Property} This unit
     */
    div(unit) {
        if (!unit) {
            return this;
        }

        const property = this._property;
        const source = this._source[property];
        let value = this._getValueFromUnit(unit);

        if (value instanceof Object) {
            value = value[property];
        }

        if (!value) {
            return this;
        }

        if (source instanceof DKTools.Unit) {
            source.div(value);
        } else {
            this._source[property] /= value;
        }

        return this;
    }

    // E methods

    /**
     * Returns true if the unit equals unit (parameter)
     *
     * @override
     * @param {DKTools.Unit} unit - Unit to compare
     * @returns {Boolean} Unit equals unit (parameter)
     */
    equals(unit) {
        if (!unit) {
            return false;
        }

        return _.isEqual(this._source, unit.source) &&
                this._percents === unit.percents &&
                this._property === unit.property;
    }

    // G methods

    /**
     * Returns the value of the unit
     *
     * @override
     *
     * @see DKTools.Unit.Property.prototype.getPercents
     *
     * @returns {Number} Value of the unit
     */
    getValueBase() {
        if (!(this._source instanceof Object)) {
            return 0;
        }

        const unit = new DKTools.Unit({
            source: this._source[this._property],
            percents: this.getPercents()
        });

        return unit.getValue();
    }

    // M methods

    /**
     * Multiplies the unit (parameter) to this unit
     * Returns this unit
     *
     * @override
     *
     * @param {DKTools.Unit | Object | Number} unit - Unit
     *
     * @see DKTools.Unit.Property.prototype._getValueFromUnit
     *
     * @returns {DKTools.Property} This unit
     */
    mul(unit) {
        if (!unit) {
            return this;
        }

        const property = this._property;
        const source = this._source[property];
        let value = this._getValueFromUnit(unit);

        if (value instanceof Object) {
            value = value[property];
        }

        if (!value) {
            return this;
        }

        if (source instanceof DKTools.Unit) {
            source.mul(value);
        } else {
            this._source[property] *= value;
        }

        return this;
    }

    // S methods

    /**
     * Sets the property
     *
     * @param {String} property - Property
     */
    setProperty(property) {
        /**
         * @private
         * @readonly
         * @type {String}
         */
        this._property = property;
    }

    /**
     * Subtracts the unit (parameter) to this unit
     * Returns this unit
     *
     * @override
     *
     * @param {DKTools.Unit | Object | Number} unit - Unit
     *
     * @see DKTools.Unit.Property.prototype._getValueFromUnit
     *
     * @returns {DKTools.Property} This unit
     */
    sub(unit) {
        if (!unit) {
            return this;
        }

        const property = this._property;
        const source = this._source[property];
        let value = this._getValueFromUnit(unit);

        if (value instanceof Object) {
            value = value[property];
        }

        if (!value) {
            return this;
        }

        if (source instanceof DKTools.Unit) {
            source.rem(value);
        } else {
            this._source[property] -= value;
        }

        return this;
    }

};

// properties

Object.defineProperties(DKTools.Unit.Property.prototype, {

    /**
     * Property
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.Unit.Property.prototype
     */
    property: {
        get: function() {
            return this._property;
        },
        configurable: true
    }

});





