//===========================================================================
// DKTools.ParameterManager
//===========================================================================

/**
 * Class of plugin parameters
 * Manages plugin parameters (supports all types of parameters)
 *
 * @class DKTools.ParameterManager
 * @memberof DKTools
 *
 * @param {String} pluginName - Name of the plugin
 *
 * @example
 * var params = new DKTools.ParameterManager('DKTools');
 *
 * @see DKTools.ParameterManager.prototype.initialize
 */
DKTools.ParameterManager = class {

    constructor() {
        this.initialize.apply(this, arguments);
    }

    // initialize methods

    /**
     * Initializes the manager
     *
     * @version 6.0.0
     * @param {String} pluginName - Name of the plugin
     */
    initialize(pluginName) {

        /**
         * @private
         * @readonly
         * @type {String}
         */
        this._pluginName = pluginName;

        /**
         * @private
         * @readonly
         * @type {Object}
         */
        this._params = {};

        this.initializeParams();
    }

    /**
     * Initializes plugin parameters
     *
     * @version 6.0.0
     */
    initializeParams() {
        _.forEach(PluginManager.parameters(this._pluginName), (value, key) => {
            this._params[key] = DKTools.ParameterManager.parse(value);
        });
    }

    // G methods

    /**
     * Returns a parameter by its name
     *
     * @version 3.0.0
     *
     * @param {String} parameterName - Name of parameter
     * @param {Number | String | Object} [item] - Index (for an array) or property (for an object) or object with properties to find
     * @param {Object} [options] - Options for finded item
     *
     * @param {String} [options.key] - Key (property) of item
     * @param {Number} [options.index] - Index of item
     *
     * @returns {* | undefined} Parameter by its name or undefined
     */
    get(parameterName, item, options) {
        if (!DKTools.Utils.isString(parameterName)) {
            console.error('Parameter name is not a string!', this._pluginName, parameterName, item, options);

            return undefined;
        }

        let param = this._params[parameterName];

        if (param === undefined) {
            return undefined;
        }

        if (item instanceof Object) {
            param = _.find(param, item);
        } else if (item !== undefined) { // number or string
            param = param[item];
        }

        if (param instanceof Object) {
            if (options instanceof Object) {
                if (options.key !== undefined) {
                    param = param[options.key];
                }

                if (options.index !== undefined) {
                    param = param[options.index];
                }
            } else if (options !== undefined) { // number or string
                param = param[options];
            }
        }

        return param;
    }

    // P methods

    /**
     * Parse a string (supports escape characters of the RPG Maker 1.5+)
     *
     * @version 5.0.0
     * @static
     *
     * @param {String} string - String to parse
     *
     * @returns {Object | String} Parsed string
     */
    static parse(string) {
        try {
            if (DKTools.Utils.isNumber(string) || DKTools.Utils.isBoolean(string)) {
                return string;
            }

            return JSON.parse(string, (key, value) => {
                if (Array.isArray(value)) {
                    return _.map(value, val => this.parse(val));
                } else {
                    try {
                        return this.parse(value);
                    } catch (e) {
                        return value;
                    }
                }
            });
        } catch (e) {
            return string;
        }
    }

};

// properties

Object.defineProperties(DKTools.ParameterManager.prototype, {

    /**
     * Name of the plugin
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.ParameterManager.prototype
     */
    pluginName: {
        get: function() {
            return this._pluginName;
        },
        configurable: true
    },

    /**
     * Parameters obtained using PluginManager.parameters
     *
     * @readonly
     * @type {Object}
     * @memberof DKTools.ParameterManager.prototype
     */
    initialParams: {
        get: function() {
            if (!this._initialParams) {
                this._initialParams = PluginManager.parameters(this._pluginName);
            }

            return this._initialParams;
        },
        configurable: true
    },

    /**
     * Parameters of the plugin
     *
     * @readonly
     * @type {Object}
     * @memberof DKTools.ParameterManager.prototype
     */
    params: {
        get: function() {
            return this._params;
        },
        configurable: true
    }

});





