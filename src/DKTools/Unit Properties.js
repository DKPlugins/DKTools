//===========================================================================
// DKTools.Unit.Properties
//===========================================================================

/**
 * Unit class
 *
 * @class DKTools.Unit.Properties
 * @extends DKTools.Unit
 *
 * @since 2.0.0
 * @memberof DKTools
 *
 * @example
 * var object = { width: 100, height: 50 };
 * var unit = new DKTools.Unit.Properties({
 *      source: object,
 *      percents: { width: 50, height: 50 },
 *      properties: ['width', 'height']
 * });
 *
 * unit.getValue(); // => { width: 50, height: 25 }
 *
 * @see DKTools.Unit.Properties.initialize
 */
DKTools.Unit.Properties = class extends DKTools.Unit {

    // initialize methods

    /**
     * Initializes the unit
     *
     * @override
     *
     * @param {Object} [object] Parameters
     *
     * @param {String[]} object.properties - Properties
     *
     * @see DKTools.Unit.prototype.initialize
     */
    initialize(object) {
        object = object || {};

        DKTools.Unit.prototype.initialize.call(this, object);

        this.setProperties(object.properties);
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
     * @see DKTools.Unit.Properties.prototype._getValueFromUnit
     *
     * @returns {DKTools.Properties} This unit
     */
    add(unit) {
        if (!unit) {
            return this;
        }

        let properties = this._properties;

        if (DKTools.Utils.isFunction(properties)) {
            properties = properties(this);
        }

        _.forEach(properties, property => {
            let value = this._getValueFromUnit(unit);

            if (value instanceof Object) {
                value = value[property];
            }

            if (!value) {
                return;
            }

            if (this._source[property] instanceof DKTools.Unit) {
                this._source[property].add(value);
            } else {
                this._source[property] += value;
            }

        });

        return this;
    }

    /**
     * Adds the property
     *
     * @param {String} property - Property
     */
    addProperty(property) {
        if (Array.isArray(this._properties)) {
            this._properties.push(property);
        }
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
     * @see DKTools.Unit.Properties.prototype._getValueFromUnit
     *
     * @returns {DKTools.Properties} This unit
     */
    div(unit) {
        if (!unit) {
            return this;
        }

        let properties = this._properties;

        if (DKTools.Utils.isFunction(properties)) {
            properties = properties(this);
        }

        _.forEach(properties, property => {
            let value = this._getValueFromUnit(unit);

            if (value instanceof Object) {
                value = value[property];
            }

            if (!value) {
                return;
            }

            if (this._source[property] instanceof DKTools.Unit) {
                this._source[property].div(value);
            } else {
                this._source[property] /= value;
            }

        });

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
                _.isEqual(this._percents, unit.percents) &&
                _.isEqual(this._properties, unit.properties);
    }

    // G methods

    /**
     * Returns the percents
     *
     * @override
     * @param {String} [property] - Property
     * @returns {Number}
     */
    getPercents(property) {
        if (DKTools.Utils.isFunction(this._percents)) {
            return this._percents(property, this) || 100;
        }

        if (this._percents instanceof Object) {
            if (DKTools.Utils.isFunction(this._percents[property])) {
                return this._percents[property](this) || 100;
            }

            return this._percents[property] || 100;
        }

        return this._percents || 100;
    }

    /**
     * Returns the value of the unit
     *
     * @override
     *
     * @param {String} [property] - Property
     *
     * @see DKTools.Unit.Properties.prototype.getValueBase
     * @see DKTools.Utils.isFunction
     *
     * @returns {Number} Value of the unit
     */
    getValue(property) {
        if (DKTools.Utils.isFunction(this._getValueHandler)) {
            return this._getValueHandler(property, this);
        }

        return this.getValueBase(property);
    }

    /**
     * Returns the value of the unit
     *
     * @override
     * @param {String} [property] - Property
     * @returns {Object | Number} Value of the unit
     */
    getValueBase(property) {
        const handler = property => {
            const percents = this.getPercents(property);

            if (this._source[property] instanceof DKTools.Unit) {
                return this._source[property].getValue(property) * percents / 100;
            }

            const unit = new DKTools.Unit.Property({ source: this._source, property, percents });

            return unit.getValue();
        };

        if (property) {
            return handler(property);
        }

        return _.reduce(this._properties, (acc, property) => {
            acc[property] = handler(property);

            return acc;
        }, {});
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
     * @see DKTools.Unit.Properties.prototype._getValueFromUnit
     *
     * @returns {DKTools.Properties} This unit
     */
    mul(unit) {
        if (!unit) {
            return this;
        }

        let properties = this._properties;

        if (DKTools.Utils.isFunction(properties)) {
            properties = properties(this);
        }

        _.forEach(properties, property => {
            let value = this._getValueFromUnit(unit);

            if (value instanceof Object) {
                value = value[property];
            }

            if (!value) {
                return;
            }

            if (this._source[property] instanceof DKTools.Unit) {
                this._source[property].mul(value);
            } else {
                this._source[property] *= value;
            }

        });

        return this;
    }

    // R methods

    /**
     * Removes the property
     *
     * @param {String} property - Property
     */
    removeProperty(property) {
        if (Array.isArray(this._properties)) {
            DKTools.Utils.Array.remove(this._properties, property);
        }
    }

    // S methods

    /**
     * Sets the properties
     *
     * @param {Function | String[]} properties - Properties
     */
    setProperties(properties) {
        /**
         * @private
         * @readonly
         * @type {Function | String[]}
         */
        this._properties = DKTools.Utils.isFunction(properties) ? properties : _.clone(properties);
    }

    /**
     * Subtracts the unit (parameter) to this unit
     * Returns this unit
     *
     * @override
     *
     * @param {DKTools.Unit | Object | Number} unit - Unit
     *
     * @see DKTools.Unit.Properties.prototype._getValueFromUnit
     *
     * @returns {DKTools.Properties} This unit
     */
    sub(unit) {
        if (!unit) {
            return this;
        }

        let properties = this._properties;

        if (DKTools.Utils.isFunction(properties)) {
            properties = properties(this);
        }

        _.forEach(properties, property => {
            let value = this._getValueFromUnit(unit);

            if (value instanceof Object) {
                value = value[property];
            }

            if (!value) {
                return;
            }

            if (this._source[property] instanceof DKTools.Unit) {
                this._source[property].rem(value);
            } else {
                this._source[property] -= value;
            }

        });

        return this;
    }

};

// properties

Object.defineProperties(DKTools.Unit.Properties.prototype, {

    /**
     * Properties
     *
     * @readonly
     * @type {Function | String[]}
     * @memberof DKTools.Unit.Properties.prototype
     */
    properties: {
        get: function() {
            return this._properties;
        },
        configurable: true
    }

});





