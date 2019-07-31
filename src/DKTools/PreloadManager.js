//===========================================================================
// DKTools.PreloadManager
//===========================================================================

/**
 * Preload manager class
 *
 * @class DKTools.PreloadManager
 *
 * @since 3.0.0
 * @memberof DKTools
 */
DKTools.PreloadManager = class {

    constructor() {
        return DKTools.PreloadManager;
    }

    // initialize methods

    /**
     * Initializes the manager
     *
     * @static
     */
    static initialize() {
        this.clearCache();

        const param = DKToolsParam.get('Preload Manager');

        /**
         * @private
         * @readonly
         * @type {Boolean}
         */
        this._enabled = param['Enabled'];

        if (!this.isEnabled()) {
            return;
        }

        _.forEach(param['Audio Files'], data => {
            this.preloadAudio({
                path: data.Path,
                caching: data.Caching
            });
        });

        _.forEach(param['Image Files'], data => {
            this.preloadImage({
                path: data.Path,
                hue: data.Hue,
                caching: data.Caching
            });
        });

        this.start();
    }

    // C methods

    /**
     * Clears the cache
     *
     * @version 5.0.0
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
     *
     * @version 5.0.0
     * @static
     */
    static clearQueue() {
        /**
         * @private
         * @readonly
         * @type {Object[]}
         */
        this._queue = { audio: [], image: [] };
    }

    // F methods

    /**
     * Finishes the preloading
     *
     * @private
     * @static
     *
     * @see DKTools.PreloadManager.clearQueue
     */
    static _finish() {
        this._finishTime = new Date();

        this.clearQueue();

        this._log('Preloading complete! \n' +
            'Loaded/Skipped/Total: ' + this._loaded + '/' + this._skipped + '/' + this._total + '\n' +
            'Preloading time: ' + (this._finishTime - this._startTime) / 1000 + ' sec');

        Graphics.endLoading();
    }

    // G methods

    /**
     * Generates an audio key
     *
     * @since 5.0.0
     * @private
     * @static
     *
     * @param {String} path - Path
     *
     * @returns {String} Generated key
     */
    static _generateAudioKey(path) {
        return DKTools.IO.normalizePath(path, true);
    }

    /**
     * Generates an image key
     *
     * @since 5.0.0
     * @private
     * @static
     *
     * @param {String} path - Path
     * @param {Number} [hue=0] - Hue
     *
     * @see ImageManager._generateCacheKey
     *
     * @returns {String} Generated key
     */
    static _generateImageKey(path, hue = 0) {
        return DKTools.IO.normalizePath(ImageManager._generateCacheKey(path, hue || 0), true);
    }

    /**
     * Returns a cached audio by key
     *
     * @since 5.0.0
     * @static
     *
     * @param {String} key - Key of the cached audio
     *
     * @returns {WebAudio | undefined} Cached audio by key
     */
    static getCachedAudioByKey(key) {
        return this._cache.audio[key];
    }

    /**
     * Returns a cached audio by path
     *
     * @since 5.0.0
     * @static
     *
     * @param {String} path - Path of the cached audio
     *
     * @see DKTools.PreloadManager.getCachedAudioByKey
     * @see DKTools.PreloadManager._generateAudioKey
     *
     * @returns {WebAudio | undefined} Cached audio by path
     */
    static getCachedAudioByPath(path) {
        return this.getCachedAudioByKey(this._generateAudioKey(path));
    }

    /**
     * Returns a cached image by key
     *
     * @since 5.0.0
     * @static
     *
     * @param {String} key - Key of the cached image
     *
     * @returns {Bitmap | undefined} Cached bitmap or null
     */
    static getCachedImageByKey(key) {
        return this._cache.image[key];
    }

    /**
     * Returns a cached image by path
     *
     * @since 5.0.0
     * @static
     *
     * @param {String} path - Path of the cached image
     *
     * @see DKTools.PreloadManager.getCachedImageByKey
     * @see DKTools.PreloadManager._generateImageKey
     *
     * @returns {Bitmap | undefined} Cached image or null
     */
    static getCachedImageByPath(path) {
        return this.getCachedImageByKey(this._generateImageKey(path));
    }

    // I methods

    /**
     * Returns true if the audio by key is cached
     *
     * @since 5.0.0
     * @static
     *
     * @param {String} key - Key of the cached audio
     *
     * @returns {Boolean} Audio by key is cached
     */
    static isAudioCachedByKey(key) {
        return !!this._cache.audio[key];
    }

    /**
     * Returns true if the audio by path is cached
     *
     * @since 5.0.0
     * @static
     *
     * @param {String} path - Path of the cached audio
     *
     * @returns {Boolean} Audio by path is cached
     */
    static isAudioCachedByPath(path) {
        return this.isAudioCachedByKey(this._generateAudioKey(path));
    }

    /**
     * Returns true if the manager is enabled
     *
     * @since 5.0.0
     * @static
     *
     * @returns {Boolean} Manager is enabled
     */
    static isEnabled() {
        return this._enabled;
    }

    /**
     * Returns true if the preloading is finished
     *
     * @since 5.0.0
     * @static
     *
     * @returns {Boolean} Preloading is finished
     */
    static isFinished() {
        return !!this._finishTime;
    }

    /**
     * Returns true if the preload manager is ready
     *
     * @since 6.1.0
     *
     * @returns {Boolean} Preload manager is ready
     */
    static isReady() {
        return !this.isEnabled() || this.isFinished();
    }

    /**
     * Returns true if the image by key is cached
     *
     * @since 5.0.0
     * @static
     *
     * @param {String} key - Key of the cached image
     *
     * @returns {Boolean} Image by key is cached
     */
    static isImageCachedByKey(key) {
        return !!this._cache.image[key];
    }

    /**
     * Returns true if the image by path is cached
     *
     * @since 5.0.0
     * @static
     *
     * @param {String} path - Path of the cached image
     * @param {Number} [hue=0] - Hue
     *
     * @see DKTools.PreloadManager.isImageCachedByKey
     * @see DKTools.PreloadManager._generateImageKey
     *
     * @returns {Boolean} Image by path is cached
     */
    static isImageCachedByPath(path, hue) {
        return this.isImageCachedByKey(this._generateImageKey(path, hue));
    }

    // L methods

    /**
     * Logs the message in the console
     *
     * @private
     * @static
     *
     * @param {String} message - Message
     */
    static _log(message) {
        if (!this.isEnabled() || !DKTools.Utils.isTest() || !DKToolsParam.get('Preload Manager', 'Debugging') || !message) {
            return;
        }

        console.log(message);
    }

    // O methods

    /**
     * Processes the loading of the data
     *
     * @since 5.0.0
     * @private
     * @static
     *
     * @param {WebAudio | Bitmap} data - Data
     */
    static _onFileLoad(data) {
        this._loaded++;

        this._log(`Loaded ${data instanceof WebAudio ? 'audio': 'image'}: ${data.url}`);

        Graphics.updateLoading();
    }

    // P methods

    /**
     * Adds the object to preload queue
     *
     * @since 5.0.0
     * @private
     * @static
     *
     * @param {String} type - Type (audio or image)
     * @param {Object} object - Object with parameters
     *
     * @param {String} object.path - Path to file or directory (only for local mode)
     * @param {Number} [object.hue] - Hue (only for images)
     * @param {Boolean} [object.caching] - Caching
     */
    static _preload(type, object) {
        if (!this.isEnabled()) {
            return;
        }

        if (object instanceof Object && DKTools.Utils.isString(object.path)) {
            const entity = new DKTools.IO.Directory(object.path);

            if (entity.isDirectory()) {
                if (DKTools.IO.isLocalMode()) {
                    const options = { sync: true };
                    let files = [];

                    if (type === 'audio') {
                        files = entity.getAudioFiles(options).data;
                    } else if (type === 'image') {
                        files = entity.getImageFiles(options).data;
                    }

                    _.forEach(files, file => {
                        const fullPath = file.getFullPath();

                        if (this._queue[type][fullPath]) {
                            return;
                        }

                        this._queue[type][fullPath] = {
                            ...object,
                            path: fullPath
                        };
                    });
                } else {
                    throw new Error('Web browsers and mobile phones cannot load directories!');
                }
            } else {
                const file = new DKTools.IO.File(object.path);
                const fullPath = file.getFullPath();

                if (file.isFile()) {
                    if (!this._queue[type][fullPath]) {
                        this._queue[type][fullPath] = object;
                    }
                } else {
                    console.error('This is not a file: ' + fullPath);
                }
            }
        }
    }

    /**
     * Processes audio loading
     *
     * @since 5.0.0
     * @static
     * @private
     *
     * @returns {Promise[]} Loaded audio files
     */
    static _processLoadAudioFiles() {
        const buffers = [];

        _.forEach(this._queue.audio, data => {
            const file = new DKTools.IO.File(data.path);
            const fullPath = file.getFullPath();

            if (file.isFile()) {
                if (file.isAudio()) {
                    if (this.isAudioCachedByPath(fullPath)) {
                        this._skipped++;
                        this._log('Audio already preloaded: ' + fullPath + '. Skipped...');

                        return;
                    }

                    const buffer = file.loadAudio();

                    if (buffer) {
                        if (data.caching) {
                            this._cache.audio[this._generateAudioKey(buffer.url)] = buffer;
                        }

                        buffers.push(buffer);
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

        return _.map(buffers, buffer => DKTools.Utils.WebAudio.loadAsync(buffer).then(() => this._onFileLoad(buffer)));
    }

    /**
     * Processes image loading
     *
     * @since 5.0.0
     * @static
     * @private
     *
     * @returns {Promise[]} Loaded image files
     */
    static _processLoadImageFiles() {
        const bitmaps = [];

        _.forEach(this._queue.image, data => {
            const file = new DKTools.IO.File(data.path);
            const fullPath = file.getFullPath();

            if (file.isFile()) {
                if (file.isImage()) {
                    if (this.isImageCachedByPath(fullPath, data.hue)) {
                        this._skipped++;
                        this._log('Image already preloaded: ' + fullPath + '. Skipped...');

                        return;
                    }

                    const bitmap = DKTools.Utils.Bitmap.reserve({
                        folder: file.getPath(),
                        filename: file.getName(),
                        hue: data.hue
                    });

                    if (bitmap) {
                        if (data.caching) {
                            this._cache.image[this._generateImageKey(bitmap.url, data.hue)] = bitmap;
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

        return _.map(bitmaps, bitmap => DKTools.Utils.Bitmap.loadAsync(bitmap).then(() => this._onFileLoad(bitmap)));
    }

    /**
     * Adds the audio to preload queue
     *
     * @since 5.0.0
     * @static
     *
     * @param {Object} object - Object with parameters
     *
     * @param {String} object.path - Path to file or driectory (only for local mode)
     * @param {Boolean} [object.caching] - Caching
     *
     * @see DKTools.PreloadManager._preload
     */
    static preloadAudio(object) {
        this._preload('audio', object);
    }

    /**
     * Adds the image to preload queue
     *
     * @since 5.0.0
     * @static
     *
     * @param {Object} object - Object with parameters
     *
     * @param {String} object.path - Path to file or driectory (only for local mode)
     * @param {Number} [object.hue] - Hue
     * @param {Boolean} [object.caching] - Caching
     *
     * @see DKTools.PreloadManager._preload
     */
    static preloadImage(object) {
        this._preload('image', object);
    }

    // R methods

    /**
     * Releases the audio by key from a cache
     *
     * @since 5.0.0
     * @static
     *
     * @param {String} key - Key of the cached audio
     */
    static releaseAudioByKey(key) {
        this._cache.audio[key] = undefined;
    }

    /**
     * Releases the audio by path from a cache
     *
     * @since 5.0.0
     * @static
     *
     * @param {String} path - Path of the cached audio
     */
    static releaseAudioByPath(path) {
        this.releaseAudioByKey(this._generateAudioKey(path));
    }

    /**
     * Releases the image by key from a cache
     *
     * @since 5.0.0
     * @static
     *
     * @param {String} key - Key of the cached image
     */
    static releaseImageByKey(key) {
        this._cache.image[key] = undefined;
    }

    /**
     * Releases the image by path from a cache
     *
     * @since 5.0.0
     * @static
     *
     * @param {String} path - Path of the cached image
     * @param {Number} [hue] - Hue
     *
     * @see DKTools.PreloadManager.releaseImageByKey
     * @see DKTools.PreloadManager._generateImageKey
     */
    static releaseImageByPath(path, hue) {
        this.releaseImageByKey(this._generateImageKey(path, hue));
    }

    // S methods

    /**
     * Starts the preloading
     *
     * @version 5.0.0
     * @static
     */
    static start() {
        if (!this.isEnabled()) {
            return;
        }

        this._loaded = 0;
        this._skipped = 0;
        this._total = _.size(this._queue.audio) + _.size(this._queue.image);
        this._startTime = new Date();
        this._finishTime = null;

        this._log('DKTools Preload Manager is running... \n' +
            'Total files to load: ' + this._total);

        if (this._total === 0) {
            this._finish();

            return;
        }

        const audioPromise = Promise.all(this._processLoadAudioFiles());
        const imagePromise = Promise.all(this._processLoadImageFiles());

        Promise.all([audioPromise, imagePromise]).then(() => this._finish());
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
        value: { audio: [], image: [] },
        writable: true
    }

});




