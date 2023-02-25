//===========================================================================
// window
//===========================================================================

const DKTools_main_onEffekseerLoad = main.onEffekseerLoad;
main.onEffekseerLoad = function() {
    DKTools.Utils.initialize();
    DKTools.IO.initialize();
    DKTools_main_onEffekseerLoad.apply(this, arguments);
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
        this.__isTest__ = this.isOptionValid('test');
    }

    return this.__isTest__;
};

Utils.getEncryptedFileExtension = function() {
    return '_';
};



//===========================================================================
// Graphics
//===========================================================================

const DKTools_Graphics_initialize = Graphics.initialize;
Graphics.initialize = function(width, height, type) {
    DKTools_Graphics_initialize.apply(this, arguments);

    const param = DKToolsParam.get('FPS Meter') || {};

    if (Utils.isTest() && param['Enabled']) {
        const fpsMeter = this._fpsCounter;

        if (fpsMeter) {
            fpsMeter._showFps = false;

            if (param['Mode'] === 'FPS') {
                fpsMeter.switchMode();
            } else {
                fpsMeter.switchMode();
                fpsMeter.switchMode();
            }
        }
    }

    return !!this._app;
};

const DKTools_Graphics_printError = Graphics.printError;
Graphics.printError = function(name, message, error = null) {
    DKTools_Graphics_printError.apply(this, arguments);

    if (this._errorPrinter) {
        this._updateErrorPrinter();
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
};

Graphics._makeDetailedErrorHtml = function(name, message, stack) {
    const params = DKToolsParam.get('Print Detailed Error');
    const referenceInfo = DKTools.Utils._getErrorLogData();
    let errorMessage = params['Error Message'];
    let restartMessage = params['Restart Message'];
    let text = '';

    if (Imported['DKTools_Localization']) {
        if (errorMessage) {
            errorMessage = DKTools.Localization.getText(errorMessage);
        }

        if (restartMessage) {
            restartMessage = DKTools.Localization.getText(restartMessage);
        }
    }

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

    if (!this._errorPrinter || !DKToolsParam.get('Print Detailed Error', 'Enabled')) {
        return;
    }

    this._errorPrinter.style.textAlign = 'left';
    this._errorPrinter.style.height = (this._app.view.height * 0.8) + 'px';
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
    DKTools_TouchInput_initialize.apply(this, arguments);

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
    DKTools_TouchInput_clear.apply(this, arguments);

    this._leftButtonPressed = false;
    this._middleButtonPressed = false;
    this._rightButtonPressed = false;
};

// is methods

/**
 * Returns true if the mouse is pressed (left, middle or right button)
 * @static
 * @returns {Boolean} Mouse is pressed (left, middle or right button)
 */
TouchInput.isMousePressed = function() {
    return this.isLeftButtonPressed() || this.isMiddleButtonPressed() || this.isRightButtonPressed();
};

/**
 * Returns true if the mouse is released (left, middle or right button is released)
 * @static
 * @returns {Boolean} Mouse is released (left, middle or right button is released)
 */
TouchInput.isMouseReleased = function() {
    return this.isLeftButtonReleased() || this.isMiddleButtonReleased() || this.isRightButtonReleased();
};

/**
 * Returns true if the left mouse button is pressed
 * @static
 * @returns {Boolean} Left mouse button is pressed
 */
TouchInput.isLeftButtonPressed = function() {
    return this._leftButtonPressed || false;
};

/**
 * Returns true if the left mouse button is released
 * @static
 * @returns {Boolean} Left mouse button is released
 */
TouchInput.isLeftButtonReleased = function() {
    return this._currentState.leftButtonReleased || false;
};

/**
 * Returns true if the middle mouse button is pressed
 * @static
 * @returns {Boolean} Middle mouse button is pressed
 */
TouchInput.isMiddleButtonPressed = function() {
    return this._middleButtonPressed || false;
};

/**
 * Returns true if the middle mouse button is released
 * @static
 * @returns {Boolean} Middle mouse button is released
 */
TouchInput.isMiddleButtonReleased = function() {
    return this._currentState.middleButtonReleased || false;
};

/**
 * Returns true if the right mouse button is pressed
 * @static
 * @returns {Boolean} Right mouse button is pressed
 */
TouchInput.isRightButtonPressed = function() {
    return this._rightButtonPressed || false;
};

/**
 * Returns true if the right mouse button is released
 * @static
 * @returns {Boolean} Right mouse button is released
 */
TouchInput.isRightButtonReleased = function() {
    return this._currentState.rightButtonReleased || false;
};

/**
 * Returns true if the screen is pressed (for mobile devices)
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

    DKTools_TouchInput_onLeftButtonDown.apply(this, arguments);

    if (Graphics.isInsideCanvas(x, y)) {
        this._leftButtonPressed = true;
    }
};

const DKTools_TouchInput_onMiddleButtonDown = TouchInput._onMiddleButtonDown;
TouchInput._onMiddleButtonDown = function(event) {
    const x = Graphics.pageToCanvasX(event.pageX);
    const y = Graphics.pageToCanvasY(event.pageY);

    DKTools_TouchInput_onMiddleButtonDown.apply(this, arguments);

    if (Graphics.isInsideCanvas(x, y)) {
        this._middleButtonPressed = true;
    }
};

const DKTools_TouchInput_onRightButtonDown = TouchInput._onRightButtonDown;
TouchInput._onRightButtonDown = function(event) {
    const x = Graphics.pageToCanvasX(event.pageX);
    const y = Graphics.pageToCanvasY(event.pageY);

    DKTools_TouchInput_onRightButtonDown.apply(this, arguments);

    if (Graphics.isInsideCanvas(x, y)) {
        this._rightButtonPressed = true;
    }
};

const DKTools_TouchInput_onMouseUp = TouchInput._onMouseUp;
TouchInput._onMouseUp = function(event) {
    const x = Graphics.pageToCanvasX(event.pageX);
    const y = Graphics.pageToCanvasY(event.pageY);

    DKTools_TouchInput_onMouseUp.apply(this, arguments);

    this._leftButtonPressed = false;
    this._middleButtonPressed = false;
    this._rightButtonPressed = false;

    if (Graphics.isInsideCanvas(x, y)) {
        if (event.button === 0) { // left button
            this._newState.leftButtonReleased = true;
        } else if (event.button === 1) { // middle button
            this._newState.middleButtonReleased = true;
        } else if (event.button === 2) { // right button
            this._newState.rightButtonReleased = true;
        }
    }
};



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
// Sprite
//===========================================================================

Object.defineProperties(Sprite.prototype, {

    frame: {
        get: function() {
            return this._frame;
        },
        set: function(value) {
            this.setFrame(value);
        },
        configurable: true
    }

});



//===========================================================================
// Window
//===========================================================================

Object.defineProperties(Window.prototype, {

    frameOpacity: {
        get: function() {
            return this._frameSprite.alpha * 255;
        },
        set: function(value) {
            this._frameSprite.alpha = value.clamp(0, 255) / 255;
        },
        configurable: true
    },

    contentsSprite: {
        get: function() {
            return this._contentsSprite;
        },
        configurable: true
    }

});



//===========================================================================
// WebAudio
//===========================================================================

const DKTools_WebAudio_addLoadListener = WebAudio.prototype.addLoadListener;
WebAudio.prototype.addLoadListener = function(listener) {
    if (this.isReady()) {
        listener(this);
    } else {
        DKTools_WebAudio_addLoadListener.apply(this, arguments);
    }
};

WebAudio.prototype._onLoad = function() {
    while (this._loadListeners.length > 0) {
        const listener = this._loadListeners.shift();

        listener(this);
    }
};



//===========================================================================
// Video
//===========================================================================

Video.videoFileExt = function() {
    if (Utils.canPlayWebm()) {
        return '.webm';
    }

    return '.mp4';
};



//===========================================================================
// DataManager
//===========================================================================

const DKTools_DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if (!DKTools_DataManager_isDatabaseLoaded.apply(this, arguments)) {
        return false;
    }

    if (!this.__isDatabaseLoaded) {
        this.__isDatabaseLoaded = true;

        this.onDatabaseLoad();
    }

    return true;
};

DataManager.onDatabaseLoad = function() {
    // to be overridden by plugins
};



//===========================================================================
// ImageManager
//===========================================================================

Object.defineProperties(ImageManager, {

    /**
     * Parallaxes folder
     *
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

ImageManager.imageFileExt = function() {
    return '.png';
};

ImageManager.loadParallax = function(filename) {
    return this.loadBitmap(ImageManager.PARALLAXES_FOLDER, filename);
};

ImageManager.loadTileset = function(filename) {
    return this.loadBitmap(ImageManager.TILESETS_FOLDER, filename);
};



//===========================================================================
// ColorManager
//===========================================================================

ColorManager.randomColor = function() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
};



//===========================================================================
// SceneManager
//===========================================================================

const DKTools_SceneManager_initialize = SceneManager.initialize;
SceneManager.initialize = async function() {
    await DKTools_SceneManager_initialize.apply(this, arguments);
    await DKTools.StartupManager.initialize();
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

SceneManager.showDevTools = function() {
    if (!Utils.isTest() || !Utils.isNwjs()) {
        return;
    }

    try {
        const window = require('nw.gui').Window.get();

        window.showDevTools(null, () => window.focus());
    } catch (e) {
        DKTools.Utils.logError(e);

        console.error('Can not open the dev tools!');
    }
};

const DKTools_SceneManager_catchException = SceneManager.catchException;
SceneManager.catchException = function(error) {
    DKTools_SceneManager_catchException.apply(this, arguments);

    if (error instanceof Error && DKToolsParam.get('Print Detailed Error', 'Enabled')) {
        Graphics.printDetailedError(error);
    }

    DKTools.Utils.logError(error);

    if (DKToolsParam.get('Debugging Console', 'Open On Error')) {
        this.showDevTools();
    }
};

const DKTools_SceneManager_onError = SceneManager.onError;
SceneManager.onError = function(error) {
    DKTools_SceneManager_onError.apply(this, arguments);

    DKTools.Utils.logError(error);

    if (DKToolsParam.get('Debugging Console', 'Open On Error')) {
        this.showDevTools();
    }
};

SceneManager.changeScene = function() {
    if (this.isSceneChanging() && !this.isCurrentSceneBusy()) {
        if (this._scene) {
            this._scene.terminate();

            this.onSceneTerminate();
        }

        this._scene = this._nextScene;

        if (this._scene) {
            this._scene.startPreloading();

            this._sceneCreated = false;
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
        if (this._scene.isStarted() && this.isGameActive()) {
            this._scene.update();
        }

        if (!this._sceneCreated && this._scene.isPreloaded()) {
            this._scene.create();

            this._sceneCreated = true;

            this.onSceneCreate();
        }

        if (this._sceneCreated && !this._scene.isStarted()) {
            try {
                if (this._scene.isReady()) {
                    this.onBeforeSceneStart();

                    this._scene.start();

                    this.onSceneStart();
                }
            } catch (e) {
                console.error(e);

                DKTools.Utils.logError(e);

                if (Array.isArray(e) && e[0] === 'LoadError') {
                    throw e;
                }

                this.onBeforeSceneStart();

                this._scene.start();

                this.onSceneStart();
            }
        }
    }
};

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

const DKTools_Scene_Base_create = Scene_Base.prototype.create;
Scene_Base.prototype.create = function() {
    if (this !== SceneManager._scene) {
        this.startPreloading();
    }

    DKTools_Scene_Base_create.apply(this, arguments);
};

Scene_Base.prototype.activate = function() {
    this._active = true;
};

Scene_Base.prototype.deactivate = function() {
    this._active = false;
};

/**
 * Returns true if the scene is preloaded
 * @returns {Boolean} Scene is preloaded
 */
Scene_Base.prototype.isPreloaded = function() {
    return this._preloader.isReady();
};

const DKTools_Scene_Base_isReady = Scene_Base.prototype.isReady;
Scene_Base.prototype.isReady = function() {
    return DKTools_Scene_Base_isReady.apply(this, arguments) && this.isPreloaded();
};

/**
 * Setups for the preloading
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
 */
Scene_Base.prototype.startPreloading = function() {
    this.setupPreloading();

    this._preloader.start();
};

const DKTools_Scene_Base_terminate = Scene_Base.prototype.terminate;
Scene_Base.prototype.terminate = function() {
    this._preloader.finish();

    DKTools_Scene_Base_terminate.apply(this, arguments);
};



//===========================================================================
// Scene_Boot
//===========================================================================

const DKTools_Scene_Boot_isReady = Scene_Boot.prototype.isReady;
Scene_Boot.prototype.isReady = function() {
    return DKTools_Scene_Boot_isReady.apply(this, arguments)
        && DKTools.StartupManager.isReady();
};

const DKTools_Scene_Boot_isBusy = Scene_Boot.prototype.isBusy;
Scene_Boot.prototype.isBusy = function() {
    return DKTools_Scene_Boot_isBusy.apply(this, arguments)
        || !DKTools.PreloadManager.isReady();
};

const DKTools_Scene_Boot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
    const quickStart = DKToolsParam.get('Quick Start') || {};

    if (quickStart['Enabled']) {
        DKTools_Scene_Boot_start.apply(this, arguments);

        if (!DataManager.isBattleTest() && !DataManager.isEventTest() &&
            (quickStart['Skip Saves'] || !DataManager.isAnySavefileExists())) {
            Scene_Base.prototype.start.apply(this, arguments);
            SoundManager.preloadImportantSounds();
            this.checkPlayerLocation();
            DataManager.setupNewGame();
            this.resizeScreen();
            this.updateDocumentTitle();
            SceneManager.goto(window[quickStart['Scene Name']]);
        }
    } else {
        DKTools_Scene_Boot_start.apply(this, arguments);
    }

    DKTools.PreloadManager.initialize();
};



//===========================================================================
// Scene_Map
//===========================================================================

Scene_Map.prototype.setupPreloading = function() {
    Scene_Base.prototype.setupPreloading.apply(this, arguments);
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

    preset['Image Files'].forEach((path) => {
        DKTools.PreloadManager.preloadImage({ path: 'img/' + path });
    });

    if (DKTools.PreloadManager.getTotal() === 0) {
        return;
    }

    this._preloader.add(DKTools.PreloadManager.start());
};

const DKTools_Scene_Map_isReady = Scene_Map.prototype.isReady;
Scene_Map.prototype.isReady = function() {
    if (!this.isPreloaded()) {
        return false;
    }

    return DKTools_Scene_Map_isReady.apply(this, arguments);
};



//===========================================================================
// Game_Map
//===========================================================================

const DKTools_Game_Map_tileWidth = Game_Map.prototype.tileWidth;
Game_Map.prototype.tileWidth = function() {
    return Tilemap.TILE_WIDTH || DKTools_Game_Map_tileWidth.apply(this, arguments);
};

const DKTools_Game_Map_tileHeight = Game_Map.prototype.tileHeight;
Game_Map.prototype.tileHeight = function() {
    return Tilemap.TILE_HEIGHT || DKTools_Game_Map_tileHeight.apply(this, arguments);
};



//===========================================================================
// Window_Scrollable
//===========================================================================

Window_Scrollable.prototype.processPageScroll = function() {
    if (Input.isRepeated('pageup')) {
        this.smoothScrollUp(1);
    }

    if (Input.isRepeated('pagedown')) {
        this.smoothScrollDown(1);
    }
};

const DKTools_Window_Scrollable_update =
    Window_Scrollable.prototype.update;
Window_Scrollable.prototype.update = function() {
    DKTools_Window_Scrollable_update.apply(this, arguments);
    this.processPageScroll();
};



//===========================================================================
// Window_Selectable
//===========================================================================

const DKTools_Window_Selectable_processCursorMove =
    Window_Selectable.prototype.processCursorMove;
Window_Selectable.prototype.processCursorMove = function() {
    if (this.isCursorMovable()) {
        const lastIndex = this._index;

        if (Input.isTriggered('home')) {
            this.forceSelect(0);
        }

        if (Input.isTriggered('end')) {
            this.forceSelect(Math.max(0, this.maxItems() - 1));
        }

        if (this._index !== lastIndex) {
            SoundManager.playCursor();
        }
    }

    DKTools_Window_Selectable_processCursorMove.apply(this, arguments);
};



//===========================================================================
// applying plugin parameters
//===========================================================================

if (DKToolsParam.get('Line Height', 'Enabled')) {

    Window_Base.prototype.lineHeight = function() {
        return DKToolsParam.get('Line Height', 'Height');
    };

}

if (DKToolsParam.get('Window Padding', 'Enabled')) {

    Game_System.prototype.windowPadding = function() {
        return DKToolsParam.get('Window Padding', 'Padding');
    };

}

if (DKToolsParam.get('Disable Item Background', 'Enabled')) {

    Window_Selectable.prototype.drawItemBackground = function() {};

}

if (DKToolsParam.get('Title Menu Command Window', 'Enabled')) {

    const DKTools_Scene_Title_commandWindowRect = Scene_Title.prototype.commandWindowRect;
    Scene_Title.prototype.commandWindowRect = function() {
        const rect = DKTools_Scene_Title_commandWindowRect.apply(this, arguments);
        const offsetX = $dataSystem.titleCommandWindow.offsetX;

        rect.width = eval(DKToolsParam.get('Title Menu Command Window', 'Width'));
        rect.x = (Graphics.boxWidth - rect.width) / 2 + offsetX;

        return rect;
    };

}

if (DKToolsParam.get('Title Menu Exit Command', 'Enabled') && Utils.isNwjs()) {

    const DKTools_Window_TitleCommand_paint = Window_TitleCommand.prototype.paint;
    Window_TitleCommand.prototype.paint = function() {
        if (this.findSymbol('exit') === -1) {
            // add here because the exit command should always be the last in the list
            this.addCommand(
                DKToolsParam.get('Title Menu Exit Command', 'Command Name'),
                'exit');
        }

        DKTools_Window_TitleCommand_paint.apply(this, arguments);
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
        return (DKToolsParam.get('Max Savefiles', 'Max Savefiles') || 1) + 1;
    };

}

if (Utils.isMobileDevice() || DKToolsParam.get('Active In Background', 'Enabled')) {

    SceneManager.isGameActive = function() {
        return true;
    };

}
