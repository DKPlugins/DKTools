//===========================================================================
// DKTools.PluginManager
//===========================================================================

/**
 * Plugin manager class
 * @class
 * @memberof DKTools
 */
DKTools.PluginManager = class {

    constructor() {
        return DKTools.PluginManager;
    }

    // initialize methods

    /**
     * Checks the requirements for the plugins
     * @version 9.2.0
     * @static
     */
    static initialize() {
        this._checkRequirements();
    }

    // C methods

    /**
     * Checks the requirements for plugins
     * @version 10.0.0
     * @private
     * @static
     */
    static _checkRequirements() {
        Object.keys(this._requirements).forEach((pluginName) => {
            const pluginVersion = this.getVersion(pluginName);
            const maxVersion = this._getMaxVersion(pluginName);

            if (pluginVersion === null) {
                const error = 'Required to install the plugin "%1". Minimal version: %2'
                    .format(pluginName, maxVersion);

                throw new Error(error);
            } else if (!this._compareVersions(pluginVersion, maxVersion)) {
                const error = 'Required to update the plugin "%1" to minimal version %2 (Installed: %3)'
                    .format(pluginName, maxVersion, pluginVersion);

                throw new Error(error);
            }
        });
    }

    /**
     * @private
     * @static
     * @param {String} v1 - First version
     * @param {String} v2 - Second version
     * @return {Boolean}
     */
    static _compareVersions(v1, v2) {
        if (v1 === v2) {
            return true;
        }

        if (!v1 || !v2) {
            return false;
        }

        const array1 = v1.split('.');
        const array2 = v2.split('.');

        for (let i = 0; i < array1.length; i++) {
            const v1 = parseInt(array1[i]);
            const v2 = parseInt(array2[i]);

            if (v1 > v2) {
                return true;
            } else if (v1 < v2) {
                return false;
            }
        }

        return true;
    }

    /**
     * Checks the plugin version
     * Returns true if the current version is greater than or equal to the given version
     * @static
     * @param {String} pluginName - Plugin name
     * @param {String} version - Plugin version
     * @return {Boolean} Current version is greater than or equal to the given version
     */
    static checkVersion(pluginName, version) {
        return this._compareVersions(this.getVersion(pluginName), version);
    }

    // G methods

    /**
     * @private
     * @static
     * @param {String} pluginName - Plugin name
     * @return {String | undefined}
     */
    static _getMaxVersion(pluginName) {
        return (this._requirements[pluginName] || [])
            .slice()
            .sort((a, b) => (this._compareVersions(a, b) ? -1 : 1))[0];
    }

    /**
     * Returns a version of plugin
     * @version 10.0.4
     * @since 3.1.0
     * @static
     * @param {String} pluginName - Plugin name
     * @example
     * DKTools.PluginManager.getVersion('DKTools');
     * @return {String | undefined} Version of plugin
     */
    static getVersion(pluginName) {
        const version = Imported[pluginName];

        if (DKTools.Utils.isString(version)) {
            return version;
        } else if (Number.isFinite(version)) {
            return String(version);
        }

        return null;
    }

    // I methods

    /**
     * Returns true if plugin is registered
     * @version 10.0.3
     * @static
     * @param {String} pluginName - Name of plugin
     * @return {Boolean} Plugin is registered
     */
    static isRegistered(pluginName) {
        return DKTools.Utils.isString(this.getVersion(pluginName)) ||
            $plugins.some(plugin => plugin.name === pluginName && plugin.status);
    }

    // R methods

    /**
     * Registers a requirement of minimum version of plugin
     * @version 10.0.0
     * @static
     * @param {String} pluginName - Name of plugin
     * @param {String | Object} data - Plugin versions or versions (RPG Maker MV and MZ)
     * @example
     * // Plugin only for RPG Maker MV
     * DKTools.PluginManager.requirePlugin('DKTools', '10.0.0');
     * @example
     * // Plugin for RPG Maker MV and MZ
     * DKTools.PluginManager.requirePlugin('DKTools', {
     *     MV: '10.0.0',
     *     MZ: '1.0.2'
     * });
     */
    static requirePlugin(pluginName, data) {
        if (!this._requirements[pluginName]) {
            this._requirements[pluginName] = [];
        }

        let minVersion;

        if (data instanceof Object) {
            minVersion = data[Utils.RPGMAKER_NAME];
        } else if (DKTools.Utils.isString(data)) {
            minVersion = data;
        } else {
            console.error(`Unknown version type (${pluginName}): ${typeof data}`);

            return;
        }

        this._requirements[pluginName].push(minVersion);
    }

};

// properties

Object.defineProperties(DKTools.PluginManager, {

    /**
     * List of registered requirements
     * @private
     * @readonly
     * @type {Object}
     * @memberof DKTools.PluginManager
     */
    _requirements: { value: {} }

});


