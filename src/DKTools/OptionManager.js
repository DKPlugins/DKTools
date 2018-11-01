//===========================================================================
// DKTools.OptionManager
//===========================================================================

/**
 * Option manager class
 *
 * @class DKTools.OptionManager
 *
 * @since 2.0.0
 * @memberof DKTools
 *
 * @see DKTools.OptionManager.prototype.initialize
 */
DKTools.OptionManager = class {

    constructor() {
        this.initialize.apply(this, arguments);
    }

    // initialize methods

    /**
     * Initializes the option manager
     */
    initialize() {
        this.clear();
    }

    // A methods

    /**
     * Adds the listener of change of the option
     *
     * @param {String} option - Name of the option
     * @param {Function} listener - Listener
     */
    addOptionChangeListener(option, listener) {
        if (!this._optionChangeListeners[option]) {
            this._optionChangeListeners[option] = [];
        }

        this._optionChangeListeners[option].push(listener);
    }

    // C methods

    /**
     * Clears the manager
     */
    clear() {
        /**
         * @private
         * @readonly
         * @type {String[]}
         */
        this._options = [];

        /**
         * @private
         * @readonly
         * @type {Object}
         */
        this._optionChangeListeners = {};
    }

    /**
     * Clones the manager
     *
     * @param {Boolean} [cloneListeners=false] - Clone the option change listeners
     *
     * @returns {DKTools.OptionManager} Cloned manager
     */
    clone(cloneListeners = false) {
        const optionManager = new DKTools.OptionManager();

        optionManager.enableOptions(this._options);

        if (cloneListeners) {
            _.forEach(this._optionChangeListeners, (listeners, option) => {
                _.forEach(listeners, listener => {
                    optionManager.addOptionChangeListener(option, listener);
                });
            });
        }

        return optionManager;
    }

    // D methods

    /**
     * Turns off the option
     *
     * @param {String} option - Name of the option
     */
    disableOption(option) {
        if (this.isOptionEnabled(option)) {
            DKTools.Utils.Array.remove(this._options, option);
            this._onOptionChange(option, false);
        }
    }

    /**
     * Turns off the options
     *
     * @param {String[] | ...String} object - Names of the options
     *
     * @see DKTools.OptionManager.prototype.disableOption
     */
    disableOptions(object) {
        const options = (arguments.length > 1 ? arguments : object);

        _.forEach(options, this.disableOption.bind(this));
    }

    // E methods

    /**
     * Turns on the option
     *
     * @param {String} option - Name of the option
     */
    enableOption(option) {
        if (this.isOptionDisabled(option)) {
            this._options.push(option);
            this._onOptionChange(option, true);
        }
    }

    /**
     * Turns on the options
     *
     * @param {String[] | ...String} object - Names of the options
     *
     * @see DKTools.OptionManager.prototype.enableOption
     */
    enableOptions(object) {
        const options = (arguments.length > 1 ? arguments : object);

        _.forEach(options, this.enableOption.bind(this));
    }

    /**
     * @param {DKTools.OptionManager} optionManager - Option manager
     *
     * @returns {Boolean}
     */
    equals(optionManager) {
        return optionManager instanceof DKTools.OptionManager && _.isEqual(this._options, optionManager.options);
    }

    // I methods

    /**
     * Returns true if the option is disabled
     *
     * @param {String} option - Name of the option
     *
     * @see DKTools.OptionManager.prototype.isOptionEnabled
     *
     * @returns {Boolean} Option is disabled
     */
    isOptionDisabled(option) {
        return !this.isOptionEnabled(option);
    }

    /**
     * Returns true if the option is enabled
     *
     * @param {String} option - Name of the option
     *
     * @see DKTools.Utils.Array.contains
     *
     * @returns {Boolean} Option is enabled
     */
    isOptionEnabled(option) {
        return DKTools.Utils.Array.contains(this._options, option);
    }

    /**
     * Returns conjunction of the options
     *
     * @param {String[] | ...String} object - Names of the options
     *
     * @see DKTools.OptionManager.prototype.isOptionDisabled
     *
     * @returns {Boolean} Conjunction of the options
     */
    isOptionsDisabled(object) {
        const options = (arguments.length > 1 ? arguments : object);

        return _.every(options, this.isOptionDisabled.bind(this));
    }

    /**
     * Returns conjunction of the options
     *
     * @param {String[] | ...String} object - Names of the options
     *
     * @see DKTools.OptionManager.prototype.isOptionEnabled
     *
     * @returns {Boolean} Conjunction of the options
     */
    isOptionsEnabled(object) {
        const options = (arguments.length > 1 ? arguments : object);

        return _.every(options, this.isOptionEnabled.bind(this));
    }

    /**
     * Returns true if some option is enabled
     *
     * @returns {Boolean} Some option is enabled
     */
    isSomeOptionEnabled() {
        return this._options.length > 0;
    }

    /**
     * Returns disjunction of the options
     *
     * @param {String[] | ...String} object - Names of the options
     *
     * @see DKTools.OptionManager.prototype.isOptionDisabled
     *
     * @returns {Boolean} Disjunction of the options
     */
    isSomeOptionsDisabled(object) {
        const options = (arguments.length > 1 ? arguments : object);

        return _.some(options, this.isOptionDisabled.bind(this));
    }

    /**
     * Returns disjunction of the options
     *
     * @param {String[] | ...String} object - Names of the options
     *
     * @see DKTools.OptionManager.prototype.isOptionEnabled
     *
     * @returns {Boolean} Disjunction of the options
     */
    isSomeOptionsEnabled(object) {
        const options = (arguments.length > 1 ? arguments : object);

        return _.some(options, this.isOptionEnabled.bind(this));
    }

    // O methods

    /**
     * Processes the change of the option
     *
     * @private
     *
     * @param {String} option - Name of the option
     * @param {Boolean} value - Value of the option
     */
    _onOptionChange(option, value) {
        _.forEach(this._optionChangeListeners[option], listener => {
            listener(option, value);
        });
    }

    // R methods

    /**
     * Removes the listener of change of the option
     *
     * @param {String} option - Name of the option
     * @param {Function} listener - Listener
     *
     * @see DKTools.Utils.Array.remove
     */
    removeOptionChangeListener(option, listener) {
        DKTools.Utils.Array.remove(this._optionChangeListeners[option], listener);
    }

    // S methods

    /**
     * Switches the option
     *
     * @param {String} option - Name of the option
     *
     * @see DKTools.OptionManager.prototype.isOptionEnabled
     * @see DKTools.OptionManager.prototype.disableOption
     * @see DKTools.OptionManager.prototype.enableOption
     */
    switchOption(option) {
        if (this.isOptionEnabled(option)) {
            this.disableOption(option);
        } else {
            this.enableOption(option);
        }
    }

    /**
     * Switches the options
     *
     * @param {String[] | ...String} object - Names of the options
     *
     * @see DKTools.OptionManager.prototype.switchOption
     */
    switchOptions(object) {
        const options = (arguments.length > 1 ? arguments : object);

        _.forEach(options, this.switchOption.bind(this));
    }

};

// properties

Object.defineProperties(DKTools.OptionManager, {

    /**
     * Options
     *
     * @readonly
     * @type {String[]}
     * @memberof DKTools.OptionManager.prototype
     */
    options: {
        get: function() {
            return this._options;
        },
        configurable: true
    }

});




