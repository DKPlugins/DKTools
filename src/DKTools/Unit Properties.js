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
 * @memberof DKTools.Unit
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
 * unit.getValue('width'); // => 50
 * unit.getValue('height'); // => 25
 *
 * @see DKTools.Unit.Properties.prototype.initialize
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
     * @version 6.3.0
     *
     * @override
     *
     * @param {DKTools.Unit | Object | Number} unit - Unit
     *
     * @see DKTools.Unit.Properties.prototype._getProperties
     * @see DKTools.Unit.Properties.prototype._getValueFromUnit
     *
     * @returns {DKTools.Properties} This unit
     */
    add(unit) {
        if (!unit) {
            return this;
        }

        const properties = this._getProperties();

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
     * @version 6.3.0
     *
     * @override
     *
     * @param {DKTools.Unit | Object | Number} unit - Unit
     *
     * @see DKTools.Unit.Properties.prototype._getProperties
     * @see DKTools.Unit.Properties.prototype._getValueFromUnit
     *
     * @returns {DKTools.Properties} This unit
     */
    div(unit) {
        if (!unit) {
            return this;
        }

        const properties = this._getProperties();

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
     * @version 6.3.0
     *
     * @override
     *
     * @param {DKTools.Unit} unit - Unit to compare
     *
     * @returns {Boolean} Unit equals unit (parameter)
     */
    equals(unit) {
        if (!unit) {
            return false;
        }

        if (this === unit) {
            return true;
        }

        return _.isEqual(this._source, unit.source) &&
                _.isEqual(this._percents, unit.percents) &&
                _.isEqual(this._properties, unit.properties);
    }

    // G methods

    /**
     * Returns the properties
     *
     * @since 6.3.0
     *
     * @private
     *
     * @returns {String[]} Properties
     */
    _getProperties() {
        let properties = this._properties;

        if (DKTools.Utils.isFunction(properties)) {
            properties = properties(this);
        }

        return Array.isArray(properties) ? properties : [];
    }

    /**
     * Returns the percents
     *
     * @version 6.3.0
     *
     * @override
     *
     * @param {String} [property] - Property
     *
     * @returns {Number} Percents
     */
    getPercents(property) {
        if (Number.isFinite(this._percents)) {
            return this._percents;
        }

        if (DKTools.Utils.isFunction(this._percents)) {
            const percents = this._percents(property, this);

            return Number.isFinite(percents) ? percents : 100;
        }

        if (this._percents instanceof Object) {
            if (DKTools.Utils.isFunction(this._percents[property])) {
                const percents = this._percents[property](this);

                return Number.isFinite(percents) ? percents : 100;
            }

            return Number.isFinite(this._percents[property]) ? this._percents[property] : 100;
        }

        return 100;
    }

    /**
     * Returns the value of the unit
     *
     * @version 6.3.0
     *
     * @override
     *
     * @param {String} [property] - Property
     *
     * @see DKTools.Unit.Properties.prototype.hasGetValueHandler
     * @see DKTools.Unit.Properties.prototype.getValueBase
     * @see DKTools.Utils.isFunction
     *
     * @returns {Number} Value of the unit
     */
    getValue(property) {
        if (this.hasGetValueHandler()) {
            return this._getValueHandler(property, this);
        }

        return this.getValueBase(property);
    }

    /**
     * Returns the value of the unit
     *
     * @version 6.3.0
     *
     * @override
     *
     * @param {String} [property] - Property
     *
     * @returns {Object | Number} Value of the unit
     */
    getValueBase(property) {
        const handler = property => {
            if (!this.hasSource()) {
                return Number.NaN;
            }

            const source = this._source;
            const percents = this.getPercents(property);

            if (percents === 0) {
                return 0;
            }

            if (source[property] instanceof DKTools.Unit) {
                return source[property].getValue(property) * percents / 100;
            }

            const unit = new DKTools.Unit.Property({ source, percents, property });

            return unit.getValue();
        };

        if (property) {
            return handler(property);
        }

        const properties = this._getProperties();

        return _.reduce(properties, (acc, property) => {
            acc[property] = handler(property);

            return acc;
        }, {});
    }

    // H methods

    /**
     * Returns true if the unit has the property
     *
     * @since 6.3.0
     *
     * @param {String} property - Property
     *
     * @returns {Boolean} Unit has the property
     */
    hasProperty(property) {
        const properties = this._getProperties();

        return properties.includes(property);
    }

    /**
     * Returns true if the unit has the properties
     *
     * @version 8.0.0
     * @since 6.3.0
     *
     * @returns {Boolean} Unit has the properties
     */
    hasProperties() {
        const properties = this._getProperties();

        return properties.length > 0;
    }

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
        return this._source instanceof Object;
    }

    // M methods

    /**
     * Multiplies the unit (parameter) to this unit
     * Returns this unit
     *
     * @version 6.3.0
     *
     * @override
     *
     * @param {DKTools.Unit | Object | Number} unit - Unit
     *
     * @see DKTools.Unit.Properties.prototype._getProperties
     * @see DKTools.Unit.Properties.prototype._getValueFromUnit
     *
     * @returns {DKTools.Properties} This unit
     */
    mul(unit) {
        if (!unit) {
            return this;
        }

        const properties = this._getProperties();

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
     * @version 6.3.0
     *
     * @override
     *
     * @param {DKTools.Unit | Object | Number} unit - Unit
     *
     * @see DKTools.Unit.Properties.prototype._getProperties
     * @see DKTools.Unit.Properties.prototype._getValueFromUnit
     *
     * @returns {DKTools.Properties} This unit
     */
    sub(unit) {
        if (!unit) {
            return this;
        }

        const properties = this._getProperties();

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





