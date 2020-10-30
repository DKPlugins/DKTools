//===========================================================================
// DKTools.ScenePreloader
//===========================================================================

/**
 * Scene preloader class
 * @since 6.1.0
 * @class
 * @memberof DKTools.Scene
 */
DKTools.Scene.Preloader = class {

    constructor() {
        this.initialize.apply(this, arguments);
    }

    // initialize methods

    /**
     * Initializes the preloader
     */
    initialize() {

        /**
         * @private
         * @readonly
         * @type {Promise[]}
         */
        this._queue = [];

        /**
         * @private
         * @readonly
         * @type {Boolean}
         */
        this._finished = false;

        /**
         * @private
         * @readonly
         * @type {Boolean}
         */
        this._running = false;

        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._errors = 0;
    }

    // A methods

    /**
     * Adds the resource to preloading
     * @param {Promise | Bitmap | WebAudio} resource - Resource
     */
    add(resource) {
        if (resource instanceof Bitmap) {
            resource = DKTools.Utils.Bitmap.reserveAsync(resource);
        } else if (resource instanceof WebAudio) {
            resource = DKTools.Utils.WebAudio.loadAsync(resource);
        }

        if (resource instanceof Promise) {
            this._queue.push(resource);
        }
    }

    // F methods

    /**
     * Finishes the preloading
     * @version 9.1.0
     */
    finish() {
        this._queue = [];
        this._finished = true;
        this._running = false;
    }

    // H methods

    /**
     * Returns true if the preloader has errors
     * @return {Boolean} Preloader has errors
     */
    hasErrors() {
        return this._errors > 0;
    }

    // I methods

    /**
     * Returns true if the preloader is running
     * @since 9.1.0
     * @return {Boolean} Preloader is running
     */
    isRunning() {
        return this._running;
    }

    /**
     * Returns true if the preloader is ready
     * @return {Boolean} Preloader is ready
     */
    isReady() {
        return this._finished;
    }

    // O methods

    /**
     * Processes the loading error
     * @private
     */
    _onError() {
        this._errors++;
    }

    // S methods

    /**
     * Starts the preloading
     * @version 9.1.0
     */
    start() {
        if (this._queue.length === 0) {
            this.finish();

            return;
        }

        const promises = this._queue.map((promise) => {
            return promise.catch((result) => {
                this._onError();

                throw result;
            });
        });

        Promise.all(promises).then(() => this.finish());

        this._running = true;
        this._finished = false;
    }

};


