//===========================================================================
// window
//===========================================================================

const DKTools_window_onload = window.onload;
window.onload = function() {
    DKTools.Utils.initialize();
    DKTools.IO.initialize();
    DKTools_window_onload.call(this);
    DKTools.PluginManager.initialize();
};





//===========================================================================
// ImageCache
//===========================================================================

const DKTools_ImageCache_get = ImageCache.prototype.get;
ImageCache.prototype.get = function(key) {
    return DKTools_ImageCache_get.call(this, key) || DKTools.PreloadManager.getCachedImageByKey(key);
};

ImageCache.prototype._truncateCache = function() {
    const items = this._items;
    let sizeLeft = ImageCache.limit;

    Object.keys(items).map(key => items[key])
        .filter(item => !this._mustBeHeld(item))
        .sort((a, b) => b.touch - a.touch)
        .forEach((item) => {
            if (sizeLeft > 0 && !DKTools.PreloadManager.isImageCachedByKey(item.key)) {
                const bitmap = item.bitmap;

                sizeLeft -= bitmap.width * bitmap.height;
            } else {
                delete items[item.key];
            }
        });
};

const DKTools_ImageCache_mustBeHeld = ImageCache.prototype._mustBeHeld;
ImageCache.prototype._mustBeHeld = function(item) {
    if (DKTools.PreloadManager.isImageCachedByKey(item.key)) {
        return false;
    }

    return DKTools_ImageCache_mustBeHeld.call(this, item);
};





//===========================================================================
// Graphics
//===========================================================================

const DKTools_Graphics_printLoadingError = Graphics.printLoadingError;
Graphics.printLoadingError = function(url) {
    DKTools_Graphics_printLoadingError.call(this, url);
    DKTools.Utils.logError(`Failed to load: ${url}`);
};

const DKTools_Graphics_initialize = Graphics.initialize;
Graphics.initialize = function(width, height, type) {
    DKTools_Graphics_initialize.call(this, width, height, type);

    const param = DKToolsParam.get('FPS Meter');

    if (DKTools.Utils.isTest() && param.Enabled) {
        const fpsMeter = this._fpsMeter;

        if (fpsMeter) {
            this.showFps();

            if (param.Mode === 'FPS') {
                fpsMeter.showFps();

                this._fpsMeterToggled = false;
            } else {
                fpsMeter.showDuration();

                this._fpsMeterToggled = true;
            }
        }
    }
};

const DKTools_Graphics_createFPSMeter = Graphics._createFPSMeter;
Graphics._createFPSMeter = function() {
    const param = DKToolsParam.get('FPS Meter');

    if (param.Enabled) {
        this._fpsMeter = new FPSMeter({
            theme: param.Theme,
            history: param.History,
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

    text += '<font color="yellow"><b>' + message + '</b></font><br>';

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

    if (!this._errorPrinter || !DKToolsParam.get('Print Detailed Error', 'Enabled')) {
        return;
    }

    this._errorPrinter.style.textAlign = 'left';
    this._errorPrinter.height = this._height * 0.8;

    this._centerElement(this._errorPrinter);
};





//===========================================================================
// TouchInput
//===========================================================================

const DKTools_TouchInput_initialize = TouchInput.initialize;
TouchInput.initialize = function() {
    DKTools_TouchInput_initialize.call(this);

    const param = DKToolsParam.get('Cursor Graphic');

    if (param.Enabled) {
        const graphicName = param.Graphic;

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
    DKTools.PreloadManager.initialize();
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
            const param = DKToolsParam.get('Tile Size');

            if (param['Enabled']) {
                return DKTools.IO.normalizePath(param['Parallaxes Folder'] + '/');
            }

            return 'img/parallaxes/';
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
            const param = DKToolsParam.get('Tile Size');

            if (param['Enabled']) {
                return DKTools.IO.normalizePath(param['Tilesets Folder'] + '/');
            }

            return 'img/tilesets/';
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

ImageManager.reserveParallax = function(filename, hue, reservationId) {
    return this.reserveBitmap(ImageManager.PARALLAXES_FOLDER, filename, hue, false, reservationId);
};

ImageManager.reserveTileset = function(filename, hue, reservationId) {
    return this.reserveBitmap(ImageManager.TILESETS_FOLDER, filename, hue, false, reservationId);
};

ImageManager.requestParallax = function(filename, hue) {
    return this.requestBitmap(ImageManager.PARALLAXES_FOLDER, filename, hue, true);
};

ImageManager.requestTileset = function(filename, hue) {
    return this.requestBitmap(ImageManager.TILESETS_FOLDER, filename, hue, false);
};





//===========================================================================
// AudioManager
//===========================================================================

const DKTools_AudioManager_createBuffer = AudioManager.createBuffer;
AudioManager.createBuffer = function(folder, name) {
    const ext = this.audioFileExt();
    const url = this._path + folder + '/' + encodeURIComponent(name) + ext;

    if (DKTools.PreloadManager.isAudioCachedByPath(url)) {
        return DKTools.PreloadManager.getCachedAudioByPath(url);
    }

    return DKTools_AudioManager_createBuffer.call(this, folder, name);
};





//===========================================================================
// SceneManager
//===========================================================================

const DKTools_SceneManager_initialize = SceneManager.initialize;
SceneManager.initialize = async function() {
    await DKTools_SceneManager_initialize.call(this);
    await DKTools.StartupManager.initialize();
};

const DKTools_SceneManager_initGraphics = SceneManager.initGraphics;
SceneManager.initGraphics = function() {
    const param = DKToolsParam.get('Screen Resolution');

    if (param.Enabled) {
        const width = param.Width;
        const height = param.Height;

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
    DKTools_Scene_Base_initialize.call(this);

    /**
     * @private
     * @readonly
     * @type {DKTools.Scene.Preloader}
     */
    this._preloader = new DKTools.Scene.Preloader();
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
        && DKTools.StartupManager.isReady()
        && DKTools.PreloadManager.isReady();
};

const DKTools_Scene_Boot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
    const quickStart = DKToolsParam.get('Quick Start');

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

const DKTools_Scene_Map_isReady = Scene_Map.prototype.isReady;
Scene_Map.prototype.isReady = function() {
    if (!this.isPreloaded()) {
        return false;
    }

    return DKTools_Scene_Map_isReady.call(this);
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
