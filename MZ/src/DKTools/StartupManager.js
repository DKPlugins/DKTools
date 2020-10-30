//===========================================================================
// DKTools.StartupManager
//===========================================================================

/**
 * Startup manager class
 * @class
 * @memberof DKTools
 */
DKTools.StartupManager = class {

    // initialize methods

    /**
     * Initializes the manager
     *
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
     * @static
     * @async
     */
    static async initializeModules() {
        // to be overridden by plugins
    }

    // C methods

    /**
     * Checks the minimal version of RPG Maker
     * @private
     * @static
     */
    static _checkRPGMakerVersion() {
        const version = '1.0.0';

        if (!Utils.checkRMVersion(version)) {
            throw new Error('Required to update RPG Maker MZ to minimal version %1 (Installed: %2)'
                .format(version, Utils.RPGMAKER_VERSION));
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
     * @static
     * @return {Boolean} Manager is ready
     */
    static isReady() {
        return this._isReady;
    }

};


