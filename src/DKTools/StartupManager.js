//===========================================================================
// DKTools.StartupManager
//===========================================================================

/**
 * Startup manager class
 *
 * @class DKTools.StartupManager
 *
 * @since 6.3.0
 * @memberof DKTools
 */
DKTools.StartupManager = class {

    /**
     * Initializes the manager
     *
     * @static
     */
    static initialize() {
        this.checkErrors();
        this.initializeModules();
    }

    /**
     * Checks the minimal version of RPG Maker
     *
     * @private
     * @static
     */
    static _checkRPGMakerVersion() {
        if (Utils.RPGMAKER_VERSION < '1.6.0') {
            throw new Error('Required to update RPG Maker MV to minimal version 1.6.0 (Installed: %1)'.format(Utils.RPGMAKER_VERSION));
        }
    }

    /**
     * Checks whether the browser can use the "localStorage API"
     *
     * @private
     * @static
     */
    static _checkWebStorage() {
        if (!DKTools.IO.isLocalMode() && !window.hasOwnProperty('localStorage')) {
            throw new Error('Your browser does not support localStorage API');
        }
    }

    /**
     * Checks the possible errors
     *
     * @static
     */
    static checkErrors() {
        this._checkRPGMakerVersion();
        this._checkWebStorage();
    }

    /**
     * Initializes modules
     *
     * @static
     */
    static initializeModules() {
        // to be overridden by plugins
    }

};




