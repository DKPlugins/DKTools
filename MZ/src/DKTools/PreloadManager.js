//===========================================================================
// DKTools.PreloadManager
//===========================================================================

/**
 * Preload manager class
 * @class
 * @memberof DKTools
 */
DKTools.PreloadManager = class {

    constructor() {
        return DKTools.PreloadManager;
    }

    // initialize methods

    /**
     * Initializes preloading
     * @static
     */
    static initialize() {
        const params = DKToolsParam.get('Initial Preloading') || {};

        if (!params['Enabled']) {
            this.start();

            return;
        }

        this.setDebugging(params['Debugging']);

        params['Audio Files'].forEach((path) => {
            this.preloadAudio({
                path: 'audio/' + path,
                caching: true
            });
        });

        params['Image Files'].forEach((path) => {
            this.preloadImage({
                path: 'img/' + path,
                caching: true
            });
        });

        const total = this.getTotal();

        if (total >= 30) {
            console.warn('Too many files to preload! Load only needed files.');
        }

        this.start();
    }

    // C methods

    /**
     * Clears the cache
     * @static
     */
    static clearCache() {
        /**
         * @private
         * @readonly
         * @type {Object}
         */
        this._cache = { audio: {}, image: {} };
    }

    /**
     * Clears the preload queue
     * @static
     */
    static clearQueue() {
        /**
         * @private
         * @readonly
         * @type {Object[]}
         */
        this._queue = { audio: {}, image: {} };
    }

    // F methods

    /**
     * Finishes the preloading
     * @private
     * @static
     */
    static _finish() {
        this._finishTime = new Date();
        this._debugging = false;

        const preloadingTime = (this._finishTime - this._startTime) / 1000;
        const total = this.getTotal();

        if (total > 0) {
            this._log('Preloading complete! \n' +
                'Loaded/Skipped/Total: ' + this._loaded + '/' + this._skipped + '/' + total + '\n' +
                'Preloading time: ' + preloadingTime + ' sec');
        }

        if (this._finishListeners) {
            const data = {
                loaded: this._loaded,
                skipped: this._skipped,
                preloadingTime,
                total
            };

            while (this._finishListeners.length > 0) {
                const handler = this._finishListeners.shift();

                handler(data);
            }

            delete this._finishListeners;
        }

        if (this._fileLoadListeners) {
            delete this._fileLoadListeners;
        }

        this.clearQueue();
    }

    // G methods

    /**
     * Generates an audio key
     * @private
     * @static
     * @param {String} path - Path
     * @return {String} Generated key
     */
    static _generateKey(path) {
        return DKTools.IO.normalizePath(path, true);
    }

    /**
     * Returns a cached audio by key
     * @static
     * @param {String} key - Key of the cached audio
     * @return {WebAudio | undefined} Cached audio by key
     */
    static getCachedAudioByKey(key) {
        return this._cache.audio[key];
    }

    /**
     * Returns a cached audio by path
     * @static
     * @param {String} path - Path of the cached audio
     * @return {WebAudio | undefined} Cached audio by path
     */
    static getCachedAudioByPath(path) {
        return this.getCachedAudioByKey(this._generateKey(path));
    }

    /**
     * Returns a cached image by key
     * @static
     * @param {String} key - Key of the cached image
     * @return {Bitmap | undefined} Cached bitmap or null
     */
    static getCachedImageByKey(key) {
        return this._cache.image[key];
    }

    /**
     * Returns a cached image by path
     * @static
     * @param {String} path - Path of the cached image
     * @return {Bitmap | undefined} Cached image or null
     */
    static getCachedImageByPath(path) {
        return this.getCachedImageByKey(this._generateKey(path));
    }

    /**
     * Returns the total amount of resources to preload
     * @static
     * @return {Number} Total amount of resources to preload
     */
    static getTotal() {
        return _.size(this._queue.audio) + _.size(this._queue.image);
    }

    // I methods

    /**
     * Returns true if the audio by key is cached
     * @static
     * @param {String} key - Key of the cached audio
     * @return {Boolean} Audio by key is cached
     */
    static isAudioCachedByKey(key) {
        return !!this._cache.audio[key];
    }

    /**
     * Returns true if the audio by path is cached
     * @static
     * @param {String} path - Path of the cached audio
     * @return {Boolean} Audio by path is cached
     */
    static isAudioCachedByPath(path) {
        return this.isAudioCachedByKey(this._generateKey(path));
    }

    /**
     * Returns true if the preloading is finished
     * @static
     * @return {Boolean} Preloading is finished
     */
    static isFinished() {
        return !!this._finishTime;
    }

    /**
     * Returns true if the preload manager is ready
     * @return {Boolean} Preload manager is ready
     */
    static isReady() {
        return this.isFinished();
    }

    /**
     * Returns true if the image by key is cached
     * @static
     * @param {String} key - Key of the cached image
     * @return {Boolean} Image by key is cached
     */
    static isImageCachedByKey(key) {
        return !!this._cache.image[key];
    }

    /**
     * Returns true if the image by path is cached
     * @static
     * @param {String} path - Path of the cached image
     * @return {Boolean} Image by path is cached
     */
    static isImageCachedByPath(path) {
        return this.isImageCachedByKey(this._generateKey(path));
    }

    /**
     * Returns true if the preloading is started
     * @static
     * @return {Boolean} Preloading is started
     */
    static isStarted() {
        return !!this._startTime;
    }

    // L methods

    /**
     * Logs the message in the console
     * @private
     * @static
     * @param {String} message - Message
     */
    static _log(message) {
        if (!this._debugging || !message) {
            return;
        }

        console.log(message);
    }

    // O methods

    /**
     * Processes the loading of the data
     * @private
     * @static
     * @param {WebAudio | Bitmap} data - Data
     */
    static _onFileLoad(data) {
        this._loaded++;

        this._log(`Loaded ${data instanceof WebAudio ? 'audio': 'image'}: ${data.url}`);

        if (this._fileLoadListeners) {
            const obj = {
                file: data,
                loadded: this._loaded,
                total: this.getTotal()
            };

            this._fileLoadListeners.forEach((callback) => {
                callback(obj);
            });
        }
    }

    /**
     * Adds a callback function to handle file load
     * All callback functions will be cleared after the preload is finished
     * Callback function takes 1 argument - object with following properties:
     * file (WebAudio or Bitmap), loaded, total
     *
     * @static
     *
     * @param {Function} callback - Callback
     *
     * @example
     * DKTools.PreloadManager.onFileLoad(() => {
     *     Graphics.updateLoading();
     * });
     */
    static onFileLoad(callback) {
        if (!this._fileLoadListeners) {
            this._fileLoadListeners = [];
        }

        this._fileLoadListeners.push(callback);
    }

    /**
     * Adds a callback function to handle finish of preloading
     * All callback functions will be cleared after the preload is finished
     * Callback function takes 1 argument - object with following properties:
     * loaded, skipped, preloadingTime (seconds), total
     *
     * @static
     *
     * @param {Function} callback - Callback
     *
     * @example
     * DKTools.PreloadManager.onFinish(() => {
     *     Graphics.endLoading();
     * });
     */
    static onFinish(callback) {
        if (!this._finishListeners) {
            this._finishListeners = [];
        }

        this._finishListeners.push(callback);
    }

    // P methods

    /**
     * Adds the object to preload queue
     *
     * @private
     * @static
     *
     * @param {String} type - Type (audio or image)
     * @param {Object} object - Object with parameters
     *
     * @param {String} object.path - Path to file or directory
     * @param {Boolean} [object.caching] - Caching
     */
    static _preload(type, object) {
        if (object instanceof Object && DKTools.Utils.isString(object.path)) {
            const entity = new DKTools.IO.Directory(object.path);

            if (entity.isDirectory()) {
                if (Utils.isNwjs() || DKTools.IO.mode === DKTools.IO.MODE_NWJS_STAMP) {
                    const options = { sync: true };
                    let files = [];

                    if (this._files[object.path]) {
                        files = this._files[object.path];
                    } else {
                        if (type === 'audio') {
                            files = entity.getAudioFiles(options).data || [];
                        } else if (type === 'image') {
                            files = entity.getImageFiles(options).data || [];
                        }

                        this._files[object.path] = files;
                    }

                    files.forEach((file) => {
                        const fullPath = file.getFullPath();

                        if (this._queue[type][fullPath]) {
                            return;
                        }

                        if (type === 'audio') {
                            this._processAudioFile(file, object);
                        } else if (type === 'image') {
                            this._processImageFile(file, object);
                        }
                    });
                } else {
                    throw new Error('Web browsers and mobile phones cannot load directories!');
                }
            } else {
                let path = object.path;

                if (!path.includes('.')) {
                    if (type === 'image') {
                        path += '.png';
                    } else if (type === 'audio') {
                        path += '.ogg';
                    }
                }

                const file = new DKTools.IO.File(path);
                const fullPath = file.getFullPath();

                if (this._queue[type][fullPath]) {
                    return;
                }

                if (file.isFile()) {
                    if (type === 'audio') {
                        this._processAudioFile(file, object);
                    } else if (type === 'image') {
                        this._processImageFile(file, object);
                    }
                } else {
                    console.error('This is not a file: ' + fullPath);
                }
            }
        }
    }

    /**
     * @private
     * @param {DKTools.IO.File} file
     * @param {Object} object
     */
    static _processAudioFile(file, object) {
        const fullPath = file.getFullPath();
        const normalizedPath = DKTools.IO.reverseSlashes(fullPath);

        if (this._queue.audio[normalizedPath]) {
            return;
        }

        const folder = file.getDirectoryName();
        const name = file.getName();

        if (object.caching) {
            if (this.isAudioCachedByPath(normalizedPath)) {
                this._log('Audio already preloaded: ' + normalizedPath + '. Skipped...');

                if (folder === 'se' && AudioManager.isStaticSe({ name })) {
                    this.releaseAudioByPath(normalizedPath);
                }

                return;
            }
        }

        this._queue.audio[normalizedPath] = { ...object, path: normalizedPath };
    }

    /**
     * @private
     * @param {DKTools.IO.File} file
     * @param {Object} object
     */
    static _processImageFile(file, object) {
        const fullPath = file.getFullPath();
        const normalizedPath = DKTools.IO.reverseSlashes(fullPath);

        if (this._queue.image[normalizedPath]) {
            return;
        }

        if (object.caching) {
            if (this.isImageCachedByPath(normalizedPath)) {
                this._log('Image already preloaded: ' + normalizedPath + '. Skipped...');

                return;
            }
        }

        this._queue.image[normalizedPath] = { ...object, path: normalizedPath };
    }

    /**
     * Processes audio loading
     * @static
     * @private
     * @return {Promise[]} Loaded audio files
     */
    static _processLoadAudioFiles() {
        const buffers = [];

        _.forEach(this._queue.audio, (data) => {
            const file = new DKTools.IO.File(data.path);
            const fullPath = file.getFullPath();

            if (file.isFile()) {
                if (file.isAudio()) {
                    if (this.isAudioCachedByPath(fullPath)) {
                        this._skipped++;
                        this._log('Audio already preloaded: ' + fullPath + '. Skipped...');

                        return;
                    }

                    const webAudio = file.loadAudio({ ...data.options });

                    if (webAudio) {
                        if (data.caching) {
                            this._cache.audio[this._generateKey(webAudio.url)] = webAudio;
                        }

                        buffers.push(webAudio);
                    } else {
                        this._skipped++;
                        this._log('Cannot load an audio: ' + fullPath + '. Skipped...');
                    }
                } else {
                    this._skipped++;
                    this._log('This is not an audio: ' + fullPath + '. Skipped...');
                }
            } else {
                this._skipped++;
                this._log('This is not a file: ' + data.path + '. Skipped...');
            }
        });

        return buffers.map(buffer => DKTools.Utils.WebAudio.loadAsync(buffer).then(() => this._onFileLoad(buffer)));
    }

    /**
     * Processes image loading
     * @static
     * @private
     * @return {Promise[]} Loaded image files
     */
    static _processLoadImageFiles() {
        const bitmaps = [];

        _.forEach(this._queue.image, (data) => {
            const file = new DKTools.IO.File(data.path);
            const fullPath = file.getFullPath();

            if (file.isFile()) {
                if (file.isImage()) {
                    if (this.isImageCachedByPath(fullPath)) {
                        this._skipped++;
                        this._log('Image already preloaded: ' + fullPath + '. Skipped...');

                        return;
                    }

                    const bitmap = DKTools.Utils.Bitmap.load({
                        ...data.options,
                        folder: file.getPath(),
                        filename: file.getName()
                    });

                    if (bitmap) {
                        if (data.caching) {
                            this._cache.image[this._generateKey(bitmap.url)] = bitmap;
                        }

                        bitmaps.push(bitmap);
                    } else {
                        this._skipped++;
                        this._log('Cannot load an image: ' + fullPath + '. Skipped...');
                    }
                } else {
                    this._skipped++;
                    this._log('This is not an image: ' + fullPath + '. Skipped...');
                }
            } else {
                this._skipped++;
                this._log('This is not a file: ' + data.path + '. Skipped...');
            }
        });

        return bitmaps.map(bitmap =>
            DKTools.Utils.Bitmap.loadAsync(bitmap)
                .then(() => this._onFileLoad(bitmap)));
    }

    /**
     * Adds the audio to preload queue
     * @static
     *
     * @param {Object} object - Object with parameters
     *
     * @param {String} object.path - Path to file or directory (only for local mode)
     * @param {Boolean} [object.caching] - Caching
     *
     * @example
     * // folder preloading
     * const path = 'audio/se/';
     *
     * DKTools.PreloadManager.preloadAudio({
     *     path: path,
     *     caching: false
     * });
     *
     * DKTools.PreloadManager.start();
     *
     * @example
     * // file preloading
     * // auto converts extension for mobile devices
     * const path = 'audio/se/Cancel1.ogg';
     *
     * DKTools.PreloadManager.preloadAudio({
     *     path: path,
     *     caching: false
     * });
     *
     * DKTools.PreloadManager.start();
     */
    static preloadAudio(object) {
        this._preload('audio', object);
    }

    /**
     * Adds the image to preload queue
     * @static
     *
     * @param {Object} object - Object with parameters
     *
     * @param {String} object.path - Path to file or directory (only for local mode)
     * @param {Boolean} [object.caching] - Caching
     *
     * @example
     * // folder preloading
     * const path = 'img/system/';
     *
     * DKTools.PreloadManager.preloadImage({
     *     path: path,
     *     caching: false
     * });
     *
     * DKTools.PreloadManager.start();
     *
     * @example
     * // file preloading
     * const path = 'img/system/Window.png';
     *
     * DKTools.PreloadManager.preloadImage({
     *     path: path,
     *     caching: false
     * });
     *
     * DKTools.PreloadManager.start();
     */
    static preloadImage(object) {
        this._preload('image', object);
    }

    // R methods

    /**
     * Releases the audio by key from a cache
     * @static
     * @param {String} key - Key of the cached audio
     */
    static releaseAudioByKey(key) {
        delete this._cache.audio[key];
    }

    /**
     * Releases the audio by path from a cache
     * @static
     * @param {String} path - Path of the cached audio
     */
    static releaseAudioByPath(path) {
        this.releaseAudioByKey(this._generateKey(path));
    }

    /**
     * Releases the image by key from a cache
     * @static
     * @param {String} key - Key of the cached image
     */
    static releaseImageByKey(key) {
        delete this._cache.image[key];
    }

    /**
     * Releases the image by path from a cache
     * @static
     * @param {String} path - Path of the cached image
     */
    static releaseImageByPath(path) {
        this.releaseImageByKey(this._generateKey(path));
    }

    // S methods

    /**
     * Sets the output of debugging information to the console
     * Each finish resets debugging
     * @static
     * @param {Boolean} enabled - Enable output
     */
    static setDebugging(enabled) {
        this._debugging = enabled || false;
    }

    /**
     * Starts the preloading
     * Returns the promise
     * @static
     * @return {Promise}
     */
    static start() {
        const total = this.getTotal();

        this._loaded = 0;
        this._skipped = 0;
        this._startTime = new Date();
        this._finishTime = null;

        if (total === 0) {
            return Promise.resolve()
                .then(() => this._finish());
        }

        this._log('DKTools Preload Manager is running... \n' +
            'Total files to load: ' + total);

        const audioPromise = Promise.all(this._processLoadAudioFiles());
        const imagePromise = Promise.all(this._processLoadImageFiles());

        return Promise.all([audioPromise, imagePromise])
            .then(() => this._finish());
    }

};

// properties

Object.defineProperties(DKTools.PreloadManager, {

    /**
     * @private
     * @readonly
     * @type {Object[]}
     * @memberof DKTools.PreloadManager
     */
    _queue: {
        value: { audio: {}, image: {} },
        writable: true
    },

    /**
     * @private
     * @readonly
     * @type {Object}
     * @memberof DKTools.PreloadManager
     */
    _cache: {
        value: { audio: {}, image: {} },
        writable: true
    },

    /**
     * @private
     * @readonly
     * @type {Object}
     * @memberof DKTools.PreloadManager
     */
    _files: {
        value: {}
    }

});


