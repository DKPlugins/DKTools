//===========================================================================
// DKTools.PreloadManager
//===========================================================================

/**
 * Preload manager class
 * @since 3.0.0
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
     * @version 9.0.0
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

        params['Image Files'].forEach((data) => {
            this.preloadImage({
                path: 'img/' + data['Path'],
                hue: data['Hue'],
                caching: true
            });
        });

        const total = this.getTotal();

        if (total >= 30) {
            console.warn('Too many files to preload! Load only needed files.');
        }

        const progressParams = params['Progress Bar'] || {};
        let start = false;

        if (!progressParams['Enabled']) {
            start = true;

            this.onFileLoad(() => {
                Graphics.updateLoading();
            });

            this.onFinish(() => {
                Graphics.endLoading();
            });
        }

        if (start) {
            this.start();
        }
    }

    // C methods

    /**
     * Clears the cache
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
     * @version 9.0.0
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
     * @version 9.0.0
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
     * @since 5.0.0
     * @private
     * @static
     * @param {String} path - Path
     * @return {String} Generated key
     */
    static _generateAudioKey(path) {
        return DKTools.IO.normalizePath(path, true);
    }

    /**
     * Generates an image key
     * @since 5.0.0
     * @private
     * @static
     * @param {String} path - Path
     * @param {Number} [hue=0] - Hue
     * @return {String} Generated key
     */
    static _generateImageKey(path, hue = 0) {
        return DKTools.IO.normalizePath(ImageManager._generateCacheKey(path, hue || 0), true);
    }

    /**
     * Returns a cached audio by key
     * @since 5.0.0
     * @static
     * @param {String} key - Key of the cached audio
     * @return {WebAudio | undefined} Cached audio by key
     */
    static getCachedAudioByKey(key) {
        return this._cache.audio[key];
    }

    /**
     * Returns a cached audio by path
     * @since 5.0.0
     * @static
     * @param {String} path - Path of the cached audio
     * @return {WebAudio | undefined} Cached audio by path
     */
    static getCachedAudioByPath(path) {
        return this.getCachedAudioByKey(this._generateAudioKey(path));
    }

    /**
     * Returns a cached image by key
     * @since 5.0.0
     * @static
     * @param {String} key - Key of the cached image
     * @return {Bitmap | undefined} Cached bitmap or null
     */
    static getCachedImageByKey(key) {
        return this._cache.image[key];
    }

    /**
     * Returns a cached image by path
     * @since 5.0.0
     * @static
     * @param {String} path - Path of the cached image
     * @return {Bitmap | undefined} Cached image or null
     */
    static getCachedImageByPath(path) {
        return this.getCachedImageByKey(this._generateImageKey(path));
    }

    /**
     * Returns the total amount of resources to preload
     * @static
     * @since 8.3.0
     * @return {Number} Total amount of resources to preload
     */
    static getTotal() {
        return _.size(this._queue.audio) + _.size(this._queue.image);
    }

    // I methods

    /**
     * Returns true if the audio by key is cached
     * @since 5.0.0
     * @static
     * @param {String} key - Key of the cached audio
     * @return {Boolean} Audio by key is cached
     */
    static isAudioCachedByKey(key) {
        return !!this._cache.audio[key];
    }

    /**
     * Returns true if the audio by path is cached
     * @since 5.0.0
     * @static
     * @param {String} path - Path of the cached audio
     * @return {Boolean} Audio by path is cached
     */
    static isAudioCachedByPath(path) {
        return this.isAudioCachedByKey(this._generateAudioKey(path));
    }

    /**
     * Returns true if the preloading is finished
     * @since 5.0.0
     * @static
     * @return {Boolean} Preloading is finished
     */
    static isFinished() {
        return !!this._finishTime;
    }

    /**
     * Returns true if the preload manager is ready
     * @since 6.1.0
     * @return {Boolean} Preload manager is ready
     */
    static isReady() {
        return this.isFinished();
    }

    /**
     * Returns true if the image by key is cached
     * @since 5.0.0
     * @static
     * @param {String} key - Key of the cached image
     * @return {Boolean} Image by key is cached
     */
    static isImageCachedByKey(key) {
        return !!this._cache.image[key];
    }

    /**
     * Returns true if the image by path is cached
     * @since 5.0.0
     * @static
     * @param {String} path - Path of the cached image
     * @param {Number} [hue=0] - Hue
     * @return {Boolean} Image by path is cached
     */
    static isImageCachedByPath(path, hue) {
        return this.isImageCachedByKey(this._generateImageKey(path, hue));
    }

    /**
     * Returns true if the preloading is started
     * @since 9.0.0
     * @static
     * @return {Boolean} Preloading is started
     */
    static isStarted() {
        return !!this._startTime;
    }

    // L methods

    /**
     * Logs the message in the console
     * @version 9.0.0
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
     * @version 8.3.0
     * @since 5.0.0
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
     * @static
     * @since 8.3.0
     * @param {Function} callback - Callback
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
     * @static
     * @since 8.3.0
     * @param {Function} callback - Callback
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
     * @version 9.0.0
     * @since 5.0.0
     * @private
     * @static
     *
     * @param {String} type - Type (audio or image)
     * @param {Object} object - Object with parameters
     *
     * @param {String} object.path - Path to file or directory
     * @param {Number} [object.hue] - Hue (only for images)
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
     * @since 9.0.0
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
            } else if (AudioManager.isLoaded(folder, name)) {
                if (folder !== 'se' || !AudioManager.isStaticSe({ name })) {
                    const webAudio = AudioManager.createBuffer(folder, name);

                    this._cache.audio[this._generateAudioKey(normalizedPath)] = webAudio;

                    AudioManager.releaseBuffer(folder, name);
                }

                this._log('Audio already preloaded: ' + normalizedPath + '. Skipped...');

                return;
            }
        } else {
            const reserved = AudioManager.isReserved(folder, name);
            const loaded = AudioManager.isLoaded(folder, name);

            if (!reserved && loaded && (folder !== 'se' || !AudioManager.isStaticSe({ name }))) {
                AudioManager._audioCache.reserve(
                    AudioManager._generateCacheKey(folder, name),
                    AudioManager.createBuffer(folder, name),
                    AudioManager._defaultReservationId);
            }

            if (reserved || loaded) {
                this._log('Audio already preloaded: ' + normalizedPath + '. Skipped...');

                return;
            }
        }

        this._queue.audio[normalizedPath] = { ...object, path: normalizedPath };
    }

    /**
     * @since 9.0.0
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
            if (this.isImageCachedByPath(normalizedPath, object.hue)) {
                this._log('Image already preloaded: ' + normalizedPath + '. Skipped...');

                return;
            } else if (ImageManager.isLoaded(normalizedPath, object.hue)) {
                const bitmap = ImageManager.loadNormalBitmap(normalizedPath, object.hue);

                this._cache.image[this._generateImageKey(bitmap.url, object.hue)] = bitmap;

                ImageManager.releaseBitmap(normalizedPath);

                this._log('Image already preloaded: ' + normalizedPath + '. Skipped...');

                return;
            }
        } else {
            const reserved = ImageManager.isReserved(normalizedPath, object.hue);
            const loaded = ImageManager.isLoaded(normalizedPath, object.hue);

            if (!reserved && loaded) {
                ImageManager._imageCache.reserve(
                    ImageManager._generateCacheKey(normalizedPath, object.hue),
                    ImageManager.loadNormalBitmap(normalizedPath, object.hue),
                    ImageManager._defaultReservationId);
            }

            if (reserved || loaded) {
                this._log('Image already preloaded: ' + normalizedPath + '. Skipped...');

                return;
            }
        }

        this._queue.image[normalizedPath] = { ...object, path: normalizedPath };
    }

    /**
     * Processes audio loading
     * @version 9.0.0
     * @since 5.0.0
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
                            this._cache.audio[this._generateAudioKey(webAudio.url)] = webAudio;
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
     * @version 9.0.0
     * @since 5.0.0
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
                    if (this.isImageCachedByPath(fullPath, data.hue)) {
                        this._skipped++;
                        this._log('Image already preloaded: ' + fullPath + '. Skipped...');

                        return;
                    }

                    let bitmap;

                    if (data.caching) {
                        bitmap = DKTools.Utils.Bitmap.load({
                            ...data.options,
                            folder: file.getPath(),
                            filename: file.getName(),
                            hue: data.hue
                        });
                    } else {
                        bitmap = DKTools.Utils.Bitmap.reserve({
                            ...data.options,
                            folder: file.getPath(),
                            filename: file.getName(),
                            hue: data.hue
                        });
                    }

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

        return bitmaps.map(bitmap =>
            DKTools.Utils.Bitmap.loadAsync(bitmap)
                .then(() => this._onFileLoad(bitmap)));
    }

    /**
     * Adds the audio to preload queue
     *
     * @since 5.0.0
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
     *
     * @since 5.0.0
     * @static
     *
     * @param {Object} object - Object with parameters
     *
     * @param {String} object.path - Path to file or directory (only for local mode)
     * @param {Number} [object.hue] - Hue
     * @param {Boolean} [object.caching] - Caching
     *
     * @example
     * // folder preloading
     * const path = 'img/system/';
     *
     * DKTools.PreloadManager.preloadImage({
     *     path: path,
     *     hue: 0,
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
     *     hue: 0,
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
     * @since 5.0.0
     * @static
     * @param {String} key - Key of the cached audio
     */
    static releaseAudioByKey(key) {
        delete this._cache.audio[key];
    }

    /**
     * Releases the audio by path from a cache
     * @since 5.0.0
     * @static
     * @param {String} path - Path of the cached audio
     */
    static releaseAudioByPath(path) {
        this.releaseAudioByKey(this._generateAudioKey(path));
    }

    /**
     * Releases the image by key from a cache
     * @since 5.0.0
     * @static
     * @param {String} key - Key of the cached image
     */
    static releaseImageByKey(key) {
        delete this._cache.image[key];
    }

    /**
     * Releases the image by path from a cache
     * @since 5.0.0
     * @static
     * @param {String} path - Path of the cached image
     * @param {Number} [hue] - Hue
     */
    static releaseImageByPath(path, hue) {
        this.releaseImageByKey(this._generateImageKey(path, hue));
    }

    // S methods

    /**
     * Sets the output of debugging information to the console
     * Each finish resets debugging
     * @since 9.0.0
     * @static
     * @param {Boolean} enabled - Enable output
     */
    static setDebugging(enabled) {
        this._debugging = enabled || false;
    }

    /**
     * Starts the preloading
     * Returns the promise
     * @version 9.0.0
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
     * @since 9.0.0
     * @private
     * @readonly
     * @type {Object}
     * @memberof DKTools.PreloadManager
     */
    _files: {
        value: {}
    }

});

// scene

DKTools.PreloadManager.Scene = function() {
    this.initialize.apply(this, arguments);
};

DKTools.PreloadManager.Scene.prototype = Object.create(Scene_Base.prototype);
DKTools.PreloadManager.Scene.prototype.constructor = DKTools.PreloadManager.Scene;

DKTools.PreloadManager.Scene.prototype.initialize = function() {
    Scene_Base.prototype.initialize.apply(this, arguments);

    this._params = DKToolsParam.get('Initial Preloading', 'Progress Bar');
    this._total = DKTools.PreloadManager.getTotal();
    this._nextScene = Scene_Boot;
    this._counter = 0;
};

// prepare

DKTools.PreloadManager.Scene.prototype.prepare = function(nextScene) {
    this._nextScene = nextScene;
};

// preloading

DKTools.PreloadManager.Scene.prototype.setupPreloading = function() {
    Scene_Base.prototype.setupPreloading.apply(this, arguments);

    if (this._params['Progress Bar Style'] === 'images') {
        this._preloader.add(DKTools.Utils.Bitmap.reserveAsync({
            folder: 'img/system/',
            filename: this._params['Progress Bar Background Image']
        }).then((bitmap) => {
            this._backgroundBitmap = bitmap;
        }));

        this._preloader.add(DKTools.Utils.Bitmap.reserveAsync({
            folder: 'img/system/',
            filename: this._params['Progress Bar Progress Image']
        }).then((bitmap) => {
            this._progressBitmap = bitmap;
        }));
    }
};

//

DKTools.PreloadManager.Scene.prototype.isGameFontLoaded = Scene_Boot.prototype.isGameFontLoaded;

//

DKTools.PreloadManager.Scene.prototype.create = function() {
    if (this._total === 0) {
        SceneManager.goto(this._nextScene);

        return;
    }

    if (this._params['Background']) {
        this.createBackground();
    }

    this.createProgressBar();
};

DKTools.PreloadManager.Scene.prototype.createBackground = function() {
    this._background = new Sprite(ImageManager.loadSystem(this._params['Background']));
    this.addChild(this._background);
};

DKTools.PreloadManager.Scene.prototype.createProgressBar = function() {
    const params = this._params;
    const style = params['Progress Bar Style'] || 'colors';
    let width, height;

    if (style === 'colors') {
        width = eval(params['Progress Bar Width']);
        height = eval(params['Progress Bar Height']);
    } else {
        if (this._backgroundBitmap.width !== this._progressBitmap.width) {
            console.warn(`PreloadManager: different width of background and progress!`);
        }

        if (this._backgroundBitmap.height !== this._progressBitmap.height) {
            console.warn(`PreloadManager: different height of background and progress!`);
        }

        width = Math.max(this._backgroundBitmap.width, this._progressBitmap.width);
        height = Math.max(this._backgroundBitmap.height, this._progressBitmap.height);
    }

    const x = eval(params['Progress Bar X']) || 0;
    const y = eval(params['Progress Bar Y']) || 0;

    this._progressBar = new DKTools.Sprite(x, y, width, height);

    this._progressBar.setupFont({ fontSize: params['Progress Bar Text Size'] });

    if (style === 'colors') {
        this._progressBar.addEvent({
            type: 'draw-all',
            onUpdate: () => {
                this._progressBar.fillAll(params['Progress Bar Background Color']);
                this._progressBar.fillRect({
                    width: this._progressBar.width * this._counter / this._total,
                    color: params['Progress Bar Progress Color']
                });
            }
        });
    } else {
        this._progressBar.addEvent({
            type: 'draw-all',
            onUpdate: () => {
                this._progressBar.drawBitmap(this._backgroundBitmap);
                this._progressBar.drawBitmap(this._progressBitmap, {
                    source: (bitmap) => ({ width: bitmap.width * this._counter / this._total })
                });
            }
        });
    }

    if (params['Progress Bar Text']) {
        this._progressBar.addEvent({
            type: 'draw-all',
            onUpdate: () => {
                if (!this._progressBar.progressData) {
                    return;
                }

                const text = params['Progress Bar Text'].format(
                    ...[...this._progressBar.progressData,
                        Math.floor(this._counter * 100 / this._total).clamp(0, 100)]);

                this._progressBar.drawText(text, { height: this._progressBar.height });
            }
        });
    }

    this._progressBar.start();

    this.addChild(this._progressBar);
};

DKTools.PreloadManager.Scene.prototype.isReady = function() {
    return Scene_Base.prototype.isReady.apply(this, arguments)
        && DKTools.StartupManager.isReady()
        && this.isGameFontLoaded();
};

DKTools.PreloadManager.Scene.prototype.start = function() {
    const total = this._total;
    const maxFrames = 180;
    const repeatTime = (total > maxFrames ? 1 : Math.ceil(maxFrames / total));

    DKTools.PreloadManager.onFileLoad((data) => {
        this._progressBar.addEvent({
            type: 'queue',
            repeats: 0,
            repeatTime,
            onStart: () => {
                this._counter++;
                this._progressBar.progressData = [data.file.url, data.loaded, data.total];
                this._progressBar.refreshAll();
            }
        });
    });

    this._progressBar.addEvent({
        type: 'update',
        onUpdate: () => {
            if (this._counter >= total) {
                SceneManager.goto(this._nextScene);
            }
        }
    });

    DKTools.PreloadManager.start();
};


