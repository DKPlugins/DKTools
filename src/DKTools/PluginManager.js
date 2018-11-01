//===========================================================================
// DKTools.PluginManager
//===========================================================================

/**
 * Plugin manager class
 *
 * @class DKTools.PluginManager
 * @memberof DKTools
 */
DKTools.PluginManager = class {

    constructor() {
        return DKTools.PluginManager;
    }

    // initialize methods

    /**
     * Registers a plugins from Imported, which have a version and checks the requirements for the versions of plugins
     *
     * @static
     */
    static initialize() {
        this.registerPlugins(Imported);
        this._checkRequirements();
    }

    // C methods

    /**
     * Checks the requirements for plugins
     *
     * @private
     * @static
     */
    static _checkRequirements() {
        _.forEach(this._requirements, (pluginInfo, pluginName) => {
            const maxVersion = _.max(pluginInfo);
            const pluginVersion = this.getVersion(pluginName);

            if (pluginVersion === undefined) {
                const error = 'Required to install the plugin "%1". Minimal version: %2'
                    .format(pluginName, maxVersion);

                throw new Error(error);
            } else if (pluginVersion < maxVersion) {
                const error = 'Required to update the plugin "%1" to minimal version %2 (Installed: %3)'
                    .format(pluginName, maxVersion, pluginVersion);

                throw new Error(error);
            }
        });
    }

    // G methods

    /**
     * Returns a version of plugin
     *
     * @since 3.1.0
     * @static
     *
     * @param {String} pluginName - Name of plugin
     *
     * @example
     * DKTools.PluginManager.getVersion('DKTools');
     *
     * @returns {Number | String | undefined} Version of plugin
     */
    static getVersion(pluginName) {
        return this._plugins[pluginName];
    }

    // I methods

    /**
     * Returns true if plugin is registered
     *
     * @example
     * DKTools.PluginManager.isRegistered('DKTools'); // => true
     *
     * @static
     * @param {String} pluginName - Name of plugin
     * @returns {Boolean} Plugin is registered
     */
    static isRegistered(pluginName) {
        return !!this._plugins[pluginName];
    }

    /**
     * Returns true if plugin requirement is registered
     *
     * @static
     * @param {String} pluginName - Name of plugin
     * @returns {Boolean} Requirement is registered
     */
    static isRequired(pluginName) {
        return !!this._requirements[pluginName];
    }

    // R methods

    /**
     * Registers a plugin
     *
     * @static
     * @param {String} pluginName - Name of plugin
     * @param {Number | String} version - Version of plugin
     */
    static registerPlugin(pluginName, version) {
        if (!version || this.isRegistered(pluginName) || DKTools.Utils.isBoolean(version)) {
            return;
        }

        this._plugins[pluginName] = version;
    }

    /**
     * Registers a several plugins
     *
     * @static
     * @param {Object[]} plugins - Plugins
     *
     * @see DKTools.PluginManager.registerPlugin
     */
    static registerPlugins(plugins) {
        _.forEach(plugins, (version, pluginName) => {
            this.registerPlugin(pluginName, version);
        });
    }

    /**
     * Registers a requirement of minimum version of plugin
     *
     * @example
     * DKTools.PluginManager.requirePlugin('DKTools', '3.0.0');
     *
     * @static
     * @param {String} pluginName - Name of plugin
     * @param {Number | String} minVersion - Minimum version of plguin
     */
    static requirePlugin(pluginName, minVersion) {
        if (!this._requirements[pluginName]) {
            this._requirements[pluginName] = [];
        }

        this._requirements[pluginName].push(minVersion);
    }

    /**
     * Registers a several requirements of minimum version of plugins
     *
     * @static
     * @param {Object[]} plugins - Plugins
     *
     * @see DKTools.PluginManager.requirePlugin
     */
    static requirePlugins(plugins) {
        _.forEach(plugins, (version, pluginName) => {
            this.requirePlugin(pluginName, version);
        });
    }

};

// properties

Object.defineProperties(DKTools.PluginManager, {

    /**
     * List of registered plugins
     *
     * @private
     * @readonly
     * @type {Object}
     * @memberof DKTools.PluginManager
     */
    _plugins: { value: {} },

    /**
     * List of registered requirements
     *
     * @private
     * @readonly
     * @type {Object}
     * @memberof DKTools.PluginManager
     */
    _requirements: { value: {} },

    /**
     * List of registered plugins
     *
     * @readonly
     * @type {Object}
     * @memberof DKTools.PluginManager
     */
    plugins: {
        get: function() {
            return this._plugins;
        },
        configurable: true
    },

    /**
     * List of registered requirements
     *
     * @readonly
     * @type {Object}
     * @memberof DKTools.PluginManager
     */
    requirements: {
        get: function() {
            return this._requirements;
        },
        configurable: true
    }

});





