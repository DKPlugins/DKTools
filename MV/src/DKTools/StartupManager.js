//===========================================================================
// DKTools.StartupManager
//===========================================================================

/**
 * Startup manager class
 * @since 6.3.0
 * @class
 * @memberof DKTools
 */
DKTools.StartupManager = class {

    // initialize methods

    /**
     * Initializes the manager
     * @version 7.0.0
     * @static
     * @async
     */
    static async initialize() {

        /**
         * @private
         * @readonly
         * @type {Boolean}
         */
        this._isReady = false;

        await this.checkErrors();
        await this.initializeModules();

        this._isReady = true;
    }

    /**
     * Initializes modules
     * @version 9.0.0
     * @static
     * @async
     */
    static async initializeModules() {
        // to be overriden by plugins
    }

    // C methods

    /**
     * Checks the minimal version of RPG Maker
     * @private
     * @static
     */
    static _checkRPGMakerVersion() {
        if (Utils.RPGMAKER_VERSION < '1.6.0') {
            throw new Error('Required to update RPG Maker MV to minimal version 1.6.0 (Installed: %1)'
                .format(Utils.RPGMAKER_VERSION));
        }
    }

    /**
     * Checks whether the browser can use the "localStorage API"
     * @private
     * @static
     */
    static _checkWebStorage() {
        if (!Utils.isNwjs() && !window.hasOwnProperty('localStorage')) {
            throw new Error('Your browser does not support localStorage API');
        }
    }

    /**
     * Checks the possible errors
     * @version 7.0.0
     * @static
     * @async
     */
    static async checkErrors() {
        await this._checkRPGMakerVersion();
        await this._checkWebStorage();
    }

    // I methods

    /**
     * Returns true if the manager is ready
     * @since 7.0.0
     * @static
     * @return {Boolean} Manager is ready
     */
    static isReady() {
        return this._isReady;
    }

};




