//===========================================================================
// window
//===========================================================================

const DKTools_window_onload = window.onload;
window.onload = function() {
    DKTools.Utils.initialize();
    DKTools.IO.initialize();
    DKTools.PreloadManager.initialize();
    DKTools_window_onload.call(this);
    DKTools.PluginManager.initialize();
};





//===========================================================================
// Utils
//===========================================================================
const DKTools_Utils_isNwjs = Utils.isNwjs;
Utils.isNwjs = function() {
    if (this.__isNwjs__ === undefined) {
        this.__isNwjs__ = DKTools_Utils_isNwjs.apply(this, arguments);
    }

    return this.__isNwjs__;
};

const DKTools_Utils_isMobileDevice = Utils.isMobileDevice;
Utils.isMobileDevice = function() {
    if (this.__isMobileDevice__ === undefined) {
        this.__isMobileDevice__ = DKTools_Utils_isMobileDevice.apply(this, arguments);
    }

    return this.__isMobileDevice__;
};

const DKTools_Utils_isMobileSafari = Utils.isMobileSafari;
Utils.isMobileSafari = function() {
    if (this.__isMobileSafari__ === undefined) {
        this.__isMobileSafari__ = DKTools_Utils_isMobileSafari.apply(this, arguments);
    }

    return this.__isMobileSafari__;
};

const DKTools_Utils_isAndroidChrome = Utils.isAndroidChrome;
Utils.isAndroidChrome = function() {
    if (this.__isAndroidChrome__ === undefined) {
        this.__isAndroidChrome__ = DKTools_Utils_isAndroidChrome.apply(this, arguments);
    }

    return this.__isAndroidChrome__;
};

Utils.isTest = function() {
    if (this.__isTest__ === undefined) {
        this.__isTest__ = !!this.isOptionValid('test');
    }

    return this.__isTest__;
};





//===========================================================================
// ImageCache
//===========================================================================

ImageCache.prototype.add = function(key, bitmap) {
    this._items[key] = {
        touch: Date.now(),
        bitmap,
        key
    };
};

ImageCache.prototype.reserve = function(key, bitmap, reservationId) {
    this._items[key] = {
        touch: Date.now(),
        reservationId,
        bitmap,
        key
    };

    this._truncateCache();
};

const DKTools_ImageCache_get = ImageCache.prototype.get;
ImageCache.prototype.get = function(key) {
    return DKTools_ImageCache_get.call(this, key) || DKTools.PreloadManager.getCachedImageByKey(key) || null;
};

ImageCache.prototype.has = function(key) {
    return !!this._items[key];
};

ImageCache.prototype.isReserved = function(key, reservationId) {
    const item = this._items[key];

    if (!item) {
        return false;
    }

    return (reservationId ?
        item.reservationId === reservationId : item.reservationId > 0);
};

ImageCache.prototype.release = function(key) {
    delete this._items[key];
};

ImageCache.prototype._truncateCache = function() {
    const items = this._items;
    const now = Date.now();
    let sizeLeft = ImageCache.limit;

    Object.keys(items).map(key => items[key])
        .filter(item => !this._mustBeHeld(item))
        .sort((a, b) => b.touch - a.touch)
        .forEach((item) => {
            if (DKTools.PreloadManager.isImageCachedByKey(item.key)) {
                delete items[item.key];

                return;
            }

            if (item.expiredAt > 0 && item.expiredAt > now) {
                return;
            }

            if (sizeLeft > 0) {
                const bitmap = item.bitmap;

                sizeLeft -= bitmap.width * bitmap.height;
            } else {
                delete items[item.key];
            }
        });
};





//===========================================================================
// AudioCache
//===========================================================================

class AudioCache extends ImageCache {

    // A methods

    /**
     * @param {String} key
     * @param {WebAudio} audio
     */
    add(key, audio) {
        this._items[key] = {
            touch: Date.now(),
            audio,
            key
        };
    }

    // G methods

    get(key) {
        if (this._items[key]) {
            const item = this._items[key];

            item.touch = Date.now();

            return item.audio;
        }

        return DKTools.PreloadManager.getCachedAudioByKey(key) || null;
    }

    // M methods

    _mustBeHeld(item) {
        if (item.reservationId || !item.audio.isReady()) {
            return true;
        }

        return false;
    }

    // R methods

    /**
     * @param {String} key
     * @param {WebAudio} audio
     * @param {Number} reservationId
     */
    reserve(key, audio, reservationId) {
        this._items[key] = {
            touch: Date.now(),
            reservationId,
            audio,
            key
        };

        this._truncateCache();
    }

    // T methods

    _truncateCache() {
        const items = this._items;
        const now = Date.now();
        let sizeLeft = AudioCache.limit;

        Object.keys(items).map(key => items[key])
            .filter(item => !this._mustBeHeld(item))
            .sort((a, b) => b.touch - a.touch)
            .forEach((item) => {
                if (DKTools.PreloadManager.isAudioCachedByKey(item.key)) {
                    delete items[item.key];

                    return;
                }

                if (item.expiredAt > 0 && item.expiredAt > now) {
                    return;
                }

                if (sizeLeft > 0) {
                    const audio = item.audio;

                    sizeLeft -= audio._totalTime * audio._sampleRate;
                } else {
                    delete items[item.key];
                }
            });
    }

}





//===========================================================================
// Graphics
//===========================================================================

const DKTools_Graphics_initialize = Graphics.initialize;
Graphics.initialize = function(width, height, type) {
    DKTools_Graphics_initialize.call(this, width, height, type);

    const param = DKToolsParam.get('FPS Meter') || {};

    if (Utils.isTest() && param['Enabled']) {
        const fpsMeter = this._fpsMeter;

        if (fpsMeter) {
            this.showFps();

            if (param['Mode'] === 'FPS') {
                fpsMeter.showFps();

                this._fpsMeterToggled = false;
            } else {
                fpsMeter.showDuration();

                this._fpsMeterToggled = true;
            }
        }
    }
};

const DKTools_Graphics_printError = Graphics.printError;
Graphics.printError = function(name, message) {
    DKTools_Graphics_printError.call(this, name, message);

    if (this._errorPrinter) {
        this._updateErrorPrinter();
    }
};

const DKTools_Graphics_createFPSMeter = Graphics._createFPSMeter;
Graphics._createFPSMeter = function() {
    const param = DKToolsParam.get('FPS Meter') || {};

    if (param['Enabled']) {
        this._fpsMeter = new FPSMeter({
            theme: param['Theme'],
            history: param['History'],
            toggleOn: null,
            graph: 1,
            decimals: 0
        });

        this._fpsMeter.hide();
    } else {
        DKTools_Graphics_createFPSMeter.call(this);
    }
};

Graphics.printDetailedError = function(error) {
    if (!this._errorPrinter) {
        return;
    }

    const stack = error.stack.split(/(?:\r\n|\r|\n)/).map((value) => {
        return value.replace(/[\(](.*[\/])/, '(');
    });

    this._errorPrinter.innerHTML = this._makeDetailedErrorHtml(error.name, error.message, stack);

    this._applyCanvasFilter();
    this._clearUpperCanvas();
};

Graphics._getErrorReferenceInfo = function() {
    const scene = SceneManager._scene;
    const data = {};

    if (scene && scene.constructor.name) {
        data['Scene'] = scene.constructor.name;

        if (SceneManager.isCurrentScene(Scene_Map)) {
            const interpreter = $gameMap._interpreter;

            if (interpreter) {
                if (interpreter._mapId > 0) {
                    data['Map ID'] = interpreter._mapId;
                }

                if (interpreter._eventId > 0) {
                    data['Event ID'] = interpreter._eventId;

                    const event = $gameMap.event(interpreter._eventId);

                    if (event) {
                        data['Event Page'] = event._pageIndex + 1;
                    }
                }

                if (interpreter._list && interpreter._list.length > 0) {
                    let command = interpreter._list[interpreter._index];

                    if (command && command.code === 0 && interpreter._index > 0) {
                        command = interpreter._list[interpreter._index - 1];
                    }

                    if (command && command.code > 0) {
                        data['Last Event Command'] = command.code;
                    }
                }

                if (interpreter._params && interpreter._params.length > 0) {
                    data['Params'] = JSON.stringify(interpreter._params);
                }
            }
        }
    }

    return data;
};

Graphics._getErrorMessageForErrorPrint = function() {
    return DKToolsParam.get('Print Detailed Error', 'Error Message');
};

Graphics._getRestartMessageForErrorPrint = function() {
    return DKToolsParam.get('Print Detailed Error', 'Restart Message');
};

Graphics._makeDetailedErrorHtml = function(name, message, stack) {
    const errorMessage = this._getErrorMessageForErrorPrint();
    const restartMessage = this._getRestartMessageForErrorPrint();
    const referenceInfo = this._getErrorReferenceInfo();
    let text = '';

    if (errorMessage) {
        text = '<font color="yellow"><b>' + errorMessage + '<br>' + '</b></font><br>';
    }

    if (Object.keys(referenceInfo).length > 0) {
        text += '<font color="yellow"><b>' + 'Reference Information' + '</b></font><br>';

        _.forEach(referenceInfo, (value, key) => {
            text += '<font color="white">' + key + ': ' + value + '</font><br>';
        });

        text += '<br>';
    }

    text += '<font color="red"><b>' + message + '</b></font><br>';

    _.forEach(stack, (value) => {
        text += '<font color="white">' + value + '</font><br>';
    });

    if (restartMessage) {
        text += '<br><font color="yellow"><b>' + restartMessage + '</b></font><br><br>';
    }

    return text;
};

const DKTools_Graphics_updateErrorPrinter = Graphics._updateErrorPrinter;
Graphics._updateErrorPrinter = function() {
    DKTools_Graphics_updateErrorPrinter.call(this);

    if (!this._errorPrinter || !this._errorShowed) {
        return;
    }

    if (!DKToolsParam.get('Print Detailed Error', 'Enabled')) {
        return;
    }

    this._errorPrinter.style.textAlign = 'left';
    this._errorPrinter.height = this._height * 0.8;

    this._centerElement(this._errorPrinter);
};





//===========================================================================
// Input
//===========================================================================

if (Input.keyMapper['35'] === undefined) {
    Input.keyMapper['35'] = 'end';
}

if (Input.keyMapper['36'] === undefined) {
    Input.keyMapper['36'] = 'home';
}





//===========================================================================
// TouchInput
//===========================================================================

const DKTools_TouchInput_initialize = TouchInput.initialize;
TouchInput.initialize = function() {
    DKTools_TouchInput_initialize.call(this);

    const param = DKToolsParam.get('Cursor Graphic') || {};

    if (param['Enabled']) {
        const graphicName = param['Graphic'];

        if (graphicName) {
            document.body.style.cursor = `url('img/system/${graphicName}.png'), default`;
        }
    }
};

const DKTools_TouchInput_clear = TouchInput.clear;
TouchInput.clear = function() {
    DKTools_TouchInput_clear.call(this);

    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._mouseMoved = false;

    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._leftButtonPressed = false;

    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._middleButtonPressed = false;

    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._rightButtonPressed = false;

    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._leftButtonReleased = false;

    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._middleButtonReleased = false;

    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._rightButtonReleased = false;

    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._mouseX = 0;

    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._mouseY = 0;

    this._events.mouseMoved = false;

    this._events.leftButtonPressed = false;
    this._events.middleButtonPressed = false;
    this._events.rightButtonPressed = false;

    this._events.leftButtonReleased = false;
    this._events.middleButtonReleased = false;
    this._events.rightButtonReleased = false;
};

const DKTools_TouchInput_update = TouchInput.update;
TouchInput.update = function() {
    this._mouseMoved = this._events.mouseMoved;

    this._leftButtonPressed = this._events.leftButtonPressed;
    this._middleButtonPressed = this._events.middleButtonPressed;
    this._rightButtonPressed = this._events.rightButtonPressed;

    this._leftButtonReleased = this._events.leftButtonReleased;
    this._middleButtonReleased = this._events.middleButtonReleased;
    this._rightButtonReleased = this._events.rightButtonReleased;

    this._events.mouseMoved = false;

    this._events.leftButtonReleased = false;
    this._events.middleButtonReleased = false;
    this._events.rightButtonReleased = false;

    DKTools_TouchInput_update.call(this);
};

// is methods

/**
 * Returns true if the mouse is moving
 *
 * @static
 * @returns {Boolean} Mouse is moving
 */
TouchInput.isMouseMoved = function() {
    return this._mouseMoved;
};

/**
 * Returns true if the mouse is pressed (left, middle or right button)
 *
 * @static
 * @returns {Boolean} Mouse is pressed (left, middle or right button)
 */
TouchInput.isMousePressed = function() {
    return this.isLeftButtonPressed() || this.isMiddleButtonPressed() || this.isRightButtonPressed();
};

/**
 * Returns true if the mouse is released (left, middle or right button is released)
 *
 * @static
 * @returns {Boolean} Mouse is released (left, middle or right button is released)
 */
TouchInput.isMouseReleased = function() {
    return this.isLeftButtonReleased() || this.isMiddleButtonReleased() || this.isRightButtonReleased();
};

/**
 * Returns true if the left mouse button is pressed
 *
 * @static
 * @returns {Boolean} Left mouse button is pressed
 */
TouchInput.isLeftButtonPressed = function() {
    return this._leftButtonPressed;
};

/**
 * Returns true if the left mouse button is released
 *
 * @static
 * @returns {Boolean} Left mouse button is released
 */
TouchInput.isLeftButtonReleased = function() {
    return this._leftButtonReleased;
};

/**
 * Returns true if the middle mouse button is pressed
 *
 * @static
 * @returns {Boolean} Middle mouse button is pressed
 */
TouchInput.isMiddleButtonPressed = function() {
    return this._middleButtonPressed;
};

/**
 * Returns true if the middle mouse button is released
 *
 * @static
 * @returns {Boolean} Middle mouse button is released
 */
TouchInput.isMiddleButtonReleased = function() {
    return this._middleButtonReleased;
};

/**
 * Returns true if the right mouse button is pressed
 *
 * @static
 * @returns {Boolean} Right mouse button is pressed
 */
TouchInput.isRightButtonPressed = function() {
    return this._rightButtonPressed;
};

/**
 * Returns true if the right mouse button is released
 *
 * @static
 * @returns {Boolean} Right mouse button is released
 */
TouchInput.isRightButtonReleased = function() {
    return this._rightButtonReleased;
};

/**
 * Returns true if the screen is pressed (for mobile devices)
 *
 * @static
 * @returns {Boolean} Screen is pressed (for mobile devices)
 */
TouchInput.isScreenPressed = function() {
    return this._screenPressed;
};

// event methods

const DKTools_TouchInput_onLeftButtonDown = TouchInput._onLeftButtonDown;
TouchInput._onLeftButtonDown = function(event) {
    const x = Graphics.pageToCanvasX(event.pageX);
    const y = Graphics.pageToCanvasY(event.pageY);

    DKTools_TouchInput_onLeftButtonDown.call(this, event);

    if (Graphics.isInsideCanvas(x, y)) {
        this._events.leftButtonPressed = true;
    }
};

const DKTools_TouchInput_onMiddleButtonDown = TouchInput._onMiddleButtonDown;
TouchInput._onMiddleButtonDown = function(event) {
    const x = Graphics.pageToCanvasX(event.pageX);
    const y = Graphics.pageToCanvasY(event.pageY);

    DKTools_TouchInput_onMiddleButtonDown.call(this, event);

    if (Graphics.isInsideCanvas(x, y)) {
        this._events.middleButtonPressed = true;
    }
};

const DKTools_TouchInput_onRightButtonDown = TouchInput._onRightButtonDown;
TouchInput._onRightButtonDown = function(event) {
    const x = Graphics.pageToCanvasX(event.pageX);
    const y = Graphics.pageToCanvasY(event.pageY);

    DKTools_TouchInput_onRightButtonDown.call(this, event);

    if (Graphics.isInsideCanvas(x, y)) {
        this._events.rightButtonPressed = true;
    }
};

const DKTools_TouchInput_onMouseMove = TouchInput._onMouseMove;
TouchInput._onMouseMove = function(event) {
    const x = Graphics.pageToCanvasX(event.pageX);
    const y = Graphics.pageToCanvasY(event.pageY);

    DKTools_TouchInput_onMouseMove.call(this, event);

    if (this._mouseX !== x || this._mouseY !== y) {
        this._events.mouseMoved = true;

        this._date = Date.now();
        this._mouseX = x;
        this._mouseY = y;
    }
};

const DKTools_TouchInput_onMouseUp = TouchInput._onMouseUp;
TouchInput._onMouseUp = function(event) {
    const x = Graphics.pageToCanvasX(event.pageX);
    const y = Graphics.pageToCanvasY(event.pageY);

    DKTools_TouchInput_onMouseUp.call(this, event);

    this._events.leftButtonPressed = false;
    this._events.middleButtonPressed = false;
    this._events.rightButtonPressed = false;

    if (Graphics.isInsideCanvas(x, y)) {
        if (event.button === 0) { // left button
            this._events.leftButtonReleased = true;
        } else if (event.button === 1) { // middle button
            this._events.middleButtonReleased = true;
        } else if (event.button === 2) { // right button
            this._events.rightButtonReleased = true;
        }
    }
};

// properties

Object.defineProperties(TouchInput, {

    /**
     * The X coordinate of the mouse
     *
     * @readonly
     * @type {Number}
     * @memberof TouchInput
     */
    mouseX: {
        get: function() {
            return this._mouseX;
        },
        configurable: true
    },

    /**
     * The Y coordinate of the mouse
     *
     * @readonly
     * @type {Number}
     * @memberof TouchInput
     */
    mouseY: {
        get: function() {
            return this._mouseY;
        },
        configurable: true
    }

});






//===========================================================================
// Tilemap
//===========================================================================

const DKTools_Tilemap_initialize = Tilemap.prototype.initialize;
Tilemap.prototype.initialize = function() {
    DKTools_Tilemap_initialize.call(this);

    this._tileWidth = Tilemap.TILE_WIDTH || this._tileWidth;
    this._tileHeight = Tilemap.TILE_HEIGHT || this._tileHeight;
};

const DKTools_Tilemap_createLayers_patch19 = Tilemap.prototype._createLayers;
Tilemap.prototype._createLayers = function() {
    // fix possible memory leak
    if (this._lowerLayer) {
        this.removeChild(this._lowerLayer);
    }

    if (this._upperLayer) {
        this.removeChild(this._upperLayer);
    }

    DKTools_Tilemap_createLayers_patch19.apply(this, arguments);
};





//===========================================================================
// WebAudio
//===========================================================================

const DKTools_WebAudio_addLoadListener = WebAudio.prototype.addLoadListener;
WebAudio.prototype.addLoadListener = function(listener) {
    if (this.isReady()) {
        listener(this);
    } else {
        DKTools_WebAudio_addLoadListener.call(this, listener);
    }
};

WebAudio.prototype._onLoad = function() {
    while (this._loadListeners.length > 0) {
        const listener = this._loadListeners.shift();

        listener(this);
    }
};





//===========================================================================
// DataManager
//===========================================================================

const DKTools_DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if (!DKTools_DataManager_isDatabaseLoaded.call(this)) {
        return false;
    }

    if (!this.__isDatabaseLoaded) {
        this.__isDatabaseLoaded = true;

        this.onDatabaseLoad();
    }

    return true;
};

DataManager.onDatabaseLoad = function() {
    // to be overriden by plugins
};





//===========================================================================
// ImageManager
//===========================================================================

Object.defineProperties(ImageManager, {

    /**
     * Parallaxes folder
     *
     * @since 8.1.0
     * @readonly
     * @type {String}
     * @memberof ImageManager
     */
    PARALLAXES_FOLDER: {
        get: function() {
            if (this.__parallaxesFolder__ === undefined) {
                const param = DKToolsParam.get('Tile Size') || {};
                const defaultFolder = 'img/parallaxes/';

                if (param['Enabled']) {
                    const folder = param['Parallaxes Folder'];

                    this.__parallaxesFolder__ = (folder ?
                        DKTools.IO.normalizePath(folder + '/') : defaultFolder);
                } else {
                    this.__parallaxesFolder__ = defaultFolder;
                }
            }

            return this.__parallaxesFolder__;
        },
        configurable: true
    },

    /**
     * Tilesets folder
     *
     * @since 8.1.0
     * @readonly
     * @type {String}
     * @memberof ImageManager
     */
    TILESETS_FOLDER: {
        get: function() {
            if (this.__tilesetsFolder__ === undefined) {
                const param = DKToolsParam.get('Tile Size') || {};
                const defaultFolder = 'img/tilesets/';

                if (param['Enabled']) {
                    const folder = param['Tilesets Folder'];

                    this.__tilesetsFolder__ = (folder ?
                        DKTools.IO.normalizePath(folder + '/') : defaultFolder);
                } else {
                    this.__tilesetsFolder__ = defaultFolder;
                }
            }

            return this.__tilesetsFolder__;
        },
        configurable: true
    }

});

ImageManager.loadParallax = function(filename, hue) {
    return this.loadBitmap(ImageManager.PARALLAXES_FOLDER, filename, hue, true);
};

ImageManager.loadTileset = function(filename, hue) {
    return this.loadBitmap(ImageManager.TILESETS_FOLDER, filename, hue, false);
};

const DKTools_ImageManager_loadNormalBitmap = ImageManager.loadNormalBitmap;
ImageManager.loadNormalBitmap = function(path, hue) {
    return DKTools_ImageManager_loadNormalBitmap.call(
        this, DKTools.IO.reverseSlashes(path), hue);
};

ImageManager.reserveParallax = function(filename, hue, reservationId) {
    return this.reserveBitmap(ImageManager.PARALLAXES_FOLDER, filename, hue, false, reservationId);
};

ImageManager.reserveTileset = function(filename, hue, reservationId) {
    return this.reserveBitmap(ImageManager.TILESETS_FOLDER, filename, hue, false, reservationId);
};

const DKTools_ImageManager_reserveNormalBitmap = ImageManager.reserveNormalBitmap;
ImageManager.reserveNormalBitmap = function(path, hue, reservationId) {
    return DKTools_ImageManager_reserveNormalBitmap.call(
        this, DKTools.IO.reverseSlashes(path), hue, reservationId);
};

ImageManager.requestParallax = function(filename, hue) {
    return this.requestBitmap(ImageManager.PARALLAXES_FOLDER, filename, hue, true);
};

ImageManager.requestTileset = function(filename, hue) {
    return this.requestBitmap(ImageManager.TILESETS_FOLDER, filename, hue, false);
};

const DKTools_ImageManager_requestNormalBitmap = ImageManager.requestNormalBitmap;
ImageManager.requestNormalBitmap = function(path, hue) {
    return DKTools_ImageManager_requestNormalBitmap.call(
        this, DKTools.IO.reverseSlashes(path), hue);
};

ImageManager.isLoaded = function(path, hue) {
    return this._imageCache.has(this._generateCacheKey(path, hue || 0));
};

ImageManager.isReserved = function(path, hue, reservationId) {
    const key = this._generateCacheKey(path, hue || 0);

    return this._imageCache.isReserved(key, reservationId) || DKTools.PreloadManager.isImageCachedByKey(key);
};

ImageManager.releaseBitmap = function(path, hue) {
    this._imageCache.release(this._generateCacheKey(path, hue || 0));
};





//===========================================================================
// AudioManager
//===========================================================================

/**
 * @since 9.0.0
 * @private
 * @static
 * @type {AudioCache}
 */
AudioManager._audioCache = new AudioCache();

/**
 * @since 9.0.0
 * @private
 * @static
 * @param {String} folder
 * @param {String} name
 * @returns {String}
 */
AudioManager._generateCacheKey = function(folder, name) {
    return DKTools.IO.reverseSlashes(
        this._path + folder + '/' + encodeURIComponent(name) + this.audioFileExt());
};

/**
 * @override
 * @static
 * @param {String} folder
 * @param {String} name
 * @param {Number} [reservationId]
 * @returns {WebAudio | Html5Audio}
 */
AudioManager.createBuffer = function(folder, name, reservationId) {
    const url = this._generateCacheKey(folder, name);

    if (this.shouldUseHtml5Audio() && folder === 'bgm') {
        if (this._blobUrl) {
            Html5Audio.setup(this._blobUrl);
        } else {
            Html5Audio.setup(url);
        }

        return Html5Audio;
    } else {
        let audio = this._audioCache.get(url);

        if (!audio) {
            audio = new WebAudio(url);

            this._audioCache.reserve(url, audio, reservationId || this._defaultReservationId);
        }

        return audio;
    }
};

/**
 * @since 9.0.0
 * @static
 * @param {Number} reservationId
 */
AudioManager.releaseReservation = function(reservationId) {
    this._audioCache.releaseReservation(reservationId);
};

/**
 * @since 9.0.0
 * @static
 * @param {Number} reservationId
 */
AudioManager.setDefaultReservationId = function(reservationId) {
    this._defaultReservationId = reservationId;
};

/**
 * @since 9.0.0
 * @static
 * @param {String} folder
 * @param {String} name
 * @returns {Boolean}
 */
AudioManager.isLoaded = function(folder, name) {
    return this._audioCache.has(this._generateCacheKey(folder, name));
};

/**
 * @since 9.0.0
 * @static
 * @param {String} folder
 * @param {String} name
 * @param {Number} [reservationId]
 * @returns {Boolean}
 */
AudioManager.isReserved = function(folder, name, reservationId) {
    if (folder === 'se' && this._staticBuffers.some(b => b._reservedSeName === name)) {
        return true;
    }

    const key = this._generateCacheKey(folder, name);

    return this._audioCache.isReserved(key, reservationId)
        || DKTools.PreloadManager.isAudioCachedByKey(key);
};

/**
 * @since 9.0.0
 * @static
 * @param {String} folder
 * @param {String} name
 */
AudioManager.releaseBuffer = function(folder, name) {
    this._audioCache.release(this._generateCacheKey(folder, name));
};





//===========================================================================
// SceneManager
//===========================================================================

const DKTools_SceneManager_initialize = SceneManager.initialize;
SceneManager.initialize = async function() {
    await DKTools_SceneManager_initialize.call(this);
    await DKTools.StartupManager.initialize();

    const needsShowProgressBar = DKToolsParam.get('Initial Preloading', 'Enabled')
        && DKToolsParam.get('Initial Preloading', 'Progress Bar', { key: 'Enabled' })
        && DKTools.PreloadManager.getTotal() > 0;

    if (needsShowProgressBar) {
        await this.goto(DKTools.PreloadManager.Scene);
    }
};

const DKTools_SceneManager_initGraphics = SceneManager.initGraphics;
SceneManager.initGraphics = function() {
    const param = DKToolsParam.get('Screen Resolution') || {};

    if (param['Enabled']) {
        const width = param['Width'];
        const height = param['Height'];

        this._boxWidth = width;
        this._screenWidth = width;
        this._boxHeight = height;
        this._screenHeight = height;

        this.updateResolution();
    }

    DKTools_SceneManager_initGraphics.call(this);
};

SceneManager.updateResolution = function() {
    const resizeWidth = this._screenWidth - window.innerWidth;
    const resizeHeight = this._screenHeight - window.innerHeight;

    if (resizeWidth !== 0 && resizeHeight !== 0) {
        window.moveBy(-1 * resizeWidth / 2, -1 * resizeHeight / 2);
        window.resizeBy(resizeWidth, resizeHeight);
    }
};

const DKTools_SceneManager_onKeyDown = SceneManager.onKeyDown;
SceneManager.onKeyDown = function(event) {
    DKTools_SceneManager_onKeyDown.call(this, event);

    if (event.ctrlKey || event.altKey) {
        return;
    }

    const quickLoadKeyCode = DKToolsParam.get('Quick Load', 'Key Code');
    const screenshotKeyCode = DKToolsParam.get('Screenshots', 'Key Code');
    const gridKeyCode = DKToolsParam.get('Grid', 'Key Code');
    const keyCode = event.keyCode;

    switch (keyCode) {
        case quickLoadKeyCode: {
            DKTools.Utils.__quickLoad();

            break;
        }

        case screenshotKeyCode: {
            if (DKToolsParam.get('Screenshots', 'Enabled')) {
                DKTools.Utils.makeScreenshot();
            }

            break;
        }

        case gridKeyCode: {
            DKTools.Utils.__showGrid();

            break;
        }
    }
};

const DKTools_SceneManager_catchException = SceneManager.catchException;
SceneManager.catchException = function(error) {
    DKTools_SceneManager_catchException.call(this, error);

    if (error instanceof Error && DKToolsParam.get('Print Detailed Error', 'Enabled')) {
        Graphics.printDetailedError(error);
    }

    DKTools.Utils.logError(error);

    if (DKToolsParam.get('Debugging Console', 'Open On Error')) {
        DKTools.Utils.openConsole();
    }
};

const DKTools_SceneManager_onError = SceneManager.onError;
SceneManager.onError = function(e) {
    DKTools_SceneManager_onError.call(this, e);

    DKTools.Utils.logError(e);

    if (DKToolsParam.get('Debugging Console', 'Open On Error')) {
        DKTools.Utils.openConsole();
    }
};

SceneManager.changeScene = function() {
    if (this.isSceneChanging() && !this.isCurrentSceneBusy()) {
        if (this._scene) {
            this._scene.terminate();
            this._scene.detachReservation();

            this._previousClass = this._scene.constructor;
        }

        this._scene = this._nextScene;

        if (this._scene) {
            this._scene.attachReservation();
            this._scene.startPreloading();

            this._sceneCreated = false;
            this._sceneStarted = false;
            this._nextScene = null;

            if (this._scene.isPreloaded()) {
                this._scene.create();
                this._sceneCreated = true;

                this.onSceneCreate();
            }
        }

        if (this._exiting) {
            this.terminate();
        }
    }
};

SceneManager.updateScene = function() {
    if (this._scene) {
        if (!this._sceneCreated && this._scene.isPreloaded()) {
            this._scene.create();
            this._sceneCreated = true;

            this.onSceneCreate();
        }

        if (this._sceneCreated && !this._sceneStarted) {
            try {
                if (this._scene.isReady()) {
                    this._scene.start();
                    this._sceneStarted = true;

                    this.onSceneStart();
                }
            } catch (e) {
                console.error(e);

                DKTools.Utils.logError(e);

                this._scene.start();
                this._sceneStarted = true;

                this.onSceneStart();
            }
        }

        if (this.isCurrentSceneStarted()) {
            this._scene.update();
        }
    }
};

/**
 * @version 8.0.0
 * @since 6.1.0
 *
 * @returns {Boolean}
 */
SceneManager.isCurrentScene = function(sceneClass) {
    return !!this._scene && this._scene.constructor === sceneClass;
};

const DKTools_SceneManager_goto = SceneManager.goto;
SceneManager.goto = function(sceneClass) {
    DKTools_SceneManager_goto.call(this, sceneClass);
    DKTools.Utils.__hideGrid();
};





//===========================================================================
// Scene_Base
//===========================================================================

const DKTools_Scene_Base_initialize = Scene_Base.prototype.initialize;
Scene_Base.prototype.initialize = function() {
    /**
     * @private
     * @readonly
     * @type {DKTools.Scene.Preloader}
     */
    this._preloader = new DKTools.Scene.Preloader();

    DKTools_Scene_Base_initialize.apply(this, arguments);
};

const DKTools_Scene_Base_attachReservation = Scene_Base.prototype.attachReservation;
Scene_Base.prototype.attachReservation = function() {
    DKTools_Scene_Base_attachReservation.apply(this, arguments);

    this._audioReservationId = this._imageReservationId;

    AudioManager.setDefaultReservationId(this._audioReservationId);
};

const DKTools_Scene_Base_detachReservation = Scene_Base.prototype.detachReservation;
Scene_Base.prototype.detachReservation = function() {
    DKTools_Scene_Base_detachReservation.apply(this, arguments);
    AudioManager.releaseReservation(this._audioReservationId);
};

const DKTools_Scene_Base_create = Scene_Base.prototype.create;
Scene_Base.prototype.create = function() {
    if (this !== SceneManager._scene) {
        this.startPreloading();
    }

    DKTools_Scene_Base_create.apply(this, arguments);
};

/**
 * Activates the scene
 *
 * @since 8.0.0
 */
Scene_Base.prototype.activate = function() {
    this._active = true;
};

/**
 * Deactivates the scene
 *
 * @since 8.0.0
 */
Scene_Base.prototype.deactivate = function() {
    this._active = false;
};

/**
 * Returns true if the scene is preloaded
 *
 * @since 6.1.0
 *
 * @returns {Boolean} Scene is preloaded
 */
Scene_Base.prototype.isPreloaded = function() {
    return this._preloader.isReady();
};

const DKTools_Scene_Base_isReady = Scene_Base.prototype.isReady;
Scene_Base.prototype.isReady = function() {
    return DKTools_Scene_Base_isReady.call(this) && this.isPreloaded();
};

/**
 * Setups for the preloading
 *
 * @since 6.1.0
 *
 * @example
 * var bitmap = ImageManager.loadSystem('Window')
 *
 * this._preloader.add(bitmap);
 */
Scene_Base.prototype.setupPreloading = function() {
    // to be overridden by plugins
};

/**
 * Starts the preloading
 *
 * @since 6.1.0
 */
Scene_Base.prototype.startPreloading = function() {
    this.setupPreloading();

    this._preloader.start();
};

const DKTools_Scene_Base_terminate = Scene_Base.prototype.terminate;
Scene_Base.prototype.terminate = function() {
    DKTools_Scene_Base_terminate.call(this);

    this._preloader.finish();
};





//===========================================================================
// Scene_Boot
//===========================================================================

const DKTools_Scene_Boot_isReady = Scene_Boot.prototype.isReady;
Scene_Boot.prototype.isReady = function() {
    return DKTools_Scene_Boot_isReady.call(this)
        && DKTools.StartupManager.isReady();
};

const DKTools_Scene_Boot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
    const quickStart = DKToolsParam.get('Quick Start') || {};

    if (quickStart['Enabled']) {
        DKTools_Scene_Boot_start.call(this);

        if (!DataManager.isBattleTest() && !DataManager.isEventTest() &&
            (quickStart['Skip Saves'] || !DataManager.isAnySavefileExists())) {
            Scene_Base.prototype.start.call(this);
            SoundManager.preloadImportantSounds();
            this.checkPlayerLocation();
            DataManager.setupNewGame();
            this.updateDocumentTitle();
            SceneManager.goto(window[quickStart['Scene Name']]);
        }
    } else {
        DKTools_Scene_Boot_start.call(this);
    }
};





//===========================================================================
// Scene_Map
//===========================================================================

Scene_Map.prototype.setupPreloading = function() {
    Scene_Base.prototype.setupPreloading.call(this);
    this._setupMapPreloading();
};

Scene_Map.prototype._setupMapPreloading = function() {
    const params = DKToolsParam.get('Maps Preloading') || {};

    if (!params['Enabled']) {
        return;
    }

    const mapId = ($gamePlayer.isTransferring() ? $gamePlayer.newMapId() : $gameMap.mapId());
    const preset = _.find(params['Maps'], { 'Map Id': mapId });

    if (!preset) {
        return;
    }

    DKTools.PreloadManager.setDebugging(params['Debugging']);

    preset['Audio Files'].forEach((path) => {
       DKTools.PreloadManager.preloadAudio({ path: 'audio/' + path });
    });

    preset['Image Files'].forEach((data) => {
        DKTools.PreloadManager.preloadImage({
            path: 'img/' + data['Path'],
            hue: data['Hue']
        });
    });

    if (DKTools.PreloadManager.getTotal() === 0) {
        return;
    }

    DKTools.PreloadManager.onFileLoad(() => {
        Graphics.updateLoading();
    });

    DKTools.PreloadManager.onFinish(() => {
        Graphics.endLoading();
    });

    this._preloader.add(DKTools.PreloadManager.start());
};

const DKTools_Scene_Map_isReady = Scene_Map.prototype.isReady;
Scene_Map.prototype.isReady = function() {
    if (!this.isPreloaded()) {
        return false;
    }

    return DKTools_Scene_Map_isReady.call(this);
};

const DKTools_Scene_Map_terminate = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function() {
    if (!SceneManager.isNextScene(Scene_Map)) {
        const stamp = Date.now() + 30 * 1000; // 30 seconds

        Object.values(ImageManager._imageCache._items).forEach((item) => {
            if (item.reservationId === this._imageReservationId) {
                item.expiredAt = stamp;

                delete item.reservationId;
            }
        });

        Object.values(AudioManager._audioCache._items).forEach((item) => {
            if (item.reservationId === this._audioReservationId) {
                item.expiredAt = stamp;

                delete item.reservationId;
            }
        });
    }

    DKTools_Scene_Map_terminate.apply(this, arguments);
};





//===========================================================================
// Game_Map
//===========================================================================

const DKTools_Game_Map_tileWidth = Game_Map.prototype.tileWidth;
Game_Map.prototype.tileWidth = function() {
    return Tilemap.TILE_WIDTH || DKTools_Game_Map_tileWidth.call(this);
};

const DKTools_Game_Map_tileHeight = Game_Map.prototype.tileHeight;
Game_Map.prototype.tileHeight = function() {
    return Tilemap.TILE_HEIGHT || DKTools_Game_Map_tileHeight.call(this);
};





//===========================================================================
// Game_Interpreter
//===========================================================================

const DKTools_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    DKTools_Game_Interpreter_pluginCommand.call(this, command, args);
    DKTools.PluginCommandManager.process(this, command, args);
};





//===========================================================================
// Window_Base
//===========================================================================

Window_Base.prototype.processNewLine = function(textState) {
    textState.x = textState.left;
    textState.y += textState.height;
    textState.index++; // fix text height
    textState.height = this.calcTextHeight(textState, false);
};





//===========================================================================
// Window_Selectable
//===========================================================================

const DKTools_Window_Selectable_processCursorMove = Window_Selectable.prototype.processCursorMove;
Window_Selectable.prototype.processCursorMove = function() {
    if (this.isCursorMovable()) {
        const lastIndex = this.index();

        if (Input.isTriggered('home')) {
            this.select(0);
        }

        if (Input.isTriggered('end')) {
            this.select(Math.max(0, this.maxItems() - 1));
        }

        if (this.index() !== lastIndex) {
            SoundManager.playCursor();
        }
    }

    DKTools_Window_Selectable_processCursorMove.call(this);
};





//===========================================================================
// applying plugin parameters
//===========================================================================

if (DKToolsParam.get('Font Size', 'Enabled')) {

    Window_Base.prototype.standardFontSize = function() {
        return DKToolsParam.get('Font Size', 'Size');
    };

    DKTools.Sprite.prototype.standardFontSize = function() {
        try {
            return Window_Base.prototype.standardFontSize.call(this);
        } catch (e) {
            return DKToolsParam.get('Font Size', 'Size');
        }
    };

}

if (DKToolsParam.get('Line Height', 'Enabled')) {

    Window_Base.prototype.lineHeight = function() {
        return DKToolsParam.get('Line Height', 'Height');
    };

    DKTools.Base.prototype.getLineHeight = function() {
        try {
            return Window_Base.prototype.lineHeight.call(this);
        } catch (e) {
            return DKToolsParam.get('Line Height', 'Height');
        }
    };

    DKTools.Sprite.prototype.getLineHeight = function() {
        return DKTools.Base.prototype.getLineHeight.call(this);
    };

    DKTools.Window.prototype.getLineHeight = function() {
        return DKTools.Base.prototype.getLineHeight.call(this);
    };

}

if (DKToolsParam.get('Window Padding', 'Enabled')) {

    Window_Base.prototype.standardPadding = function() {
        return DKToolsParam.get('Window Padding', 'Padding');
    };

}

if (DKToolsParam.get('Mouse Hover', 'Enabled')) {

    const DKTools_Window_Selectable_initialize = Window_Selectable.prototype.initialize;
    Window_Selectable.prototype.initialize = function(x, y, width, height) {
        DKTools_Window_Selectable_initialize.apply(this, arguments);
        this._lastMouseX = TouchInput.mouseX;
        this._lastMouseY = TouchInput.mouseY;
    };

    const DKTools_Window_Selectable_update = Window_Selectable.prototype.update;
    Window_Selectable.prototype.update = function() {
        DKTools_Window_Selectable_update.apply(this, arguments);

        if (this.isCursorMovable()) {
            const x = TouchInput.mouseX;
            const y = TouchInput.mouseY;

            if (this._lastMouseX !== x || this._lastMouseY !== y) {
                this._lastMouseX = x;
                this._lastMouseY = y;

                const index = this.hitTest(this.canvasToLocalX(x), this.canvasToLocalY(y));

                if (index >= 0) {
                    this.select(index);
                }
            }
        }
    };

}

if (DKToolsParam.get('Title Menu Command Window', 'Enabled')) {

    Window_TitleCommand.prototype.windowWidth = function() {
        return eval(DKToolsParam.get('Title Menu Command Window', 'Width'));
    };

    Window_TitleCommand.prototype.updatePlacement = function() {
        const params = DKToolsParam.get('Title Menu Command Window');

        this.x = eval(params['X']);
        this.y = eval(params['Y']);
    };

}

if (DKToolsParam.get('Title Menu Exit Command', 'Enabled')) {

    const DKTools_Window_TitleCommand_createContents = Window_TitleCommand.prototype.createContents;
    Window_TitleCommand.prototype.createContents = function() {
        if (this.findSymbol('exit') === -1) {
            // add here because the exit command should always be the last in the list
            this.addCommand(
                DKToolsParam.get('Title Menu Exit Command', 'Command Name'),
                'exit');
        }

        DKTools_Window_TitleCommand_createContents.apply(this, arguments);
    };

    const DKTools_Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
    Scene_Title.prototype.createCommandWindow = function() {
        DKTools_Scene_Title_createCommandWindow.apply(this, arguments);

        if (this._commandWindow) {
            this._commandWindow.setHandler('exit', this.commandExit.bind(this));
        }
    };

    Scene_Title.prototype.commandExit = function() {
        this.fadeOutAll();
        SceneManager.exit();
    };

}

if (DKToolsParam.get('Max Savefiles', 'Enabled')) {

    DataManager.maxSavefiles = function() {
        return DKToolsParam.get('Max Savefiles', 'Max Savefiles') || 1;
    };

}
