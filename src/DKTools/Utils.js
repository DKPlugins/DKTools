//===========================================================================
// DKTools.Utils
//===========================================================================

/**
 * The static class that defines utility methods
 *
 * @class DKTools.Utils
 * @memberof DKTools
 */
DKTools.Utils = class {

    constructor() {
        return DKTools.Utils;
    }

    // initialize methods

    /**
     * Initializes the utils
     *
     * @version 5.0.0
     * @static
     */
    static initialize() {

        /**
         * @private
         * @readonly
         * @type {Boolean}
         */
        this._saidHello = false;

        /**
         * @private
         * @readonly
         * @type {Boolean}
         */
        this._isNwjs = Utils.isNwjs();

        /**
         * @private
         * @readonly
         * @type {Boolean}
         */
        this._isTest = !!Utils.isOptionValid('test');

        /**
         * @private
         * @readonly
         * @type {Boolean}
         */
        this._isMobileDevice = Utils.isMobileDevice();

        /**
         * @private
         * @readonly
         * @type {Boolean}
         */
        this._isMobileSafari = Utils.isMobileSafari();

        /**
         * @private
         * @readonly
         * @type {Boolean}
         */
        this._isAndroidChrome = Utils.isAndroidChrome();

        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._gridSize = 64;

        this._sayHello();

        this.__tileSize();

        this.__imageCacheLimit();

        if (DKToolsParam.get('Debugging Console', 'Enabled')) {
            this.openConsole();
        }

        if (DKToolsParam.get('Check Updates', 'Enabled')) {
            this._checkUpdates();
        }
    }

    // C methods

    /**
     * Checks the updates
     *
     * @version 6.0.0
     * @since 3.0.0
     * @private
     * @static
     * @async
     */
    static async _checkUpdates() {
        if (!this.isNwjs() || !this.isTest()) {
            return;
        }

        let plugins = [];

        try {
            const body = new FormData();

            body.append('version', DKTools.VERSION);

            plugins = await DKTools.Network.fetchJson(`${DKTools.SITE}/plugins.php`, { method: 'POST', body });
        } catch(e) {
            console.error('DKTools can not check updates');

            return;
        }

        if (!plugins || plugins.length === 0) {
            return;
        }

        const showNewPlugins = DKToolsParam.get('Check Updates', 'Show New Plugins');

        _.forEach(plugins, plugin => {
            const newVersion = plugin.version;

            if (DKTools.PluginManager.isRegistered(plugin.name)) {
                const currentVersion = DKTools.PluginManager.getVersion(plugin.name);

                if (newVersion > currentVersion) {
                    const args = [`Available a new version of ${plugin.name}: ${newVersion} \n`,
                        `Visit site: ${plugin.url} \n`,
                        `Download: ${DKTools.SITE}/download/${plugin.name}.js`];

                    console.log.apply(console, args);
                }
            } else if (showNewPlugins) {
                const args = [
                    `Try the new plugin: ${plugin.name} \n`,
                    `Description: ${plugin.description} \n`,
                    `Visit site: ${plugin.url} \n`,
                    `Download: ${DKTools.SITE}/download/${plugin.name}.js`];

                console.log.apply(console, args);
            }
        });
    }

    // G methods

    /**
     * Returns the data for error logging
     *
     * @since 8.0.0
     * @private
     * @static
     *
     * @see DKTools.Utils.logError
     *
     * @returns {Object} Data for error logging
     */
    static _getErrorLogData() {
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
    }

    // H methods

    /**
     * @since 4.0.0
     * @private
     * @static
     */
    static __hideGrid() {
        if (this._gridSprite) {
            SceneManager._scene.removeChild(this._gridSprite);

            this._gridSprite = null;
        }
    }

    // I methods

    /**
     * @since 6.2.0
     * @private
     * @static
     */
    static __imageCacheLimit() {
        const param = DKToolsParam.get('Image Cache Limit');

        if (param.Enabled) {
            ImageCache.limit = param.Limit;
        }
    }

    /**
     * Checks whether the browser is Android Chrome
     *
     * @static
     * @returns {Boolean} The browser is Android Chrome
     */
    static isAndroidChrome() {
        return this._isAndroidChrome;
    }

    /**
     * Returns true if the value is an array or object Arguments
     *
     * @since 1.1.0
     * @static
     * @param {*} value - Value
     * @returns {Boolean} Value is an array or object Arguments
     */
    static isArrayLike(value) {
        if (Array.isArray(value)) {
            return true;
        }

        return String(value) === '[object Arguments]';
    }

    /**
     * Returns true if the value is a boolean
     *
     * @since 1.1.0
     * @static
     * @param {*} value - Value
     * @returns {Boolean} Value is a boolean
     */
    static isBoolean(value) {
        return typeof value === 'boolean';
    }

    /**
     * Returns true if the value is a function
     *
     * @since 1.1.0
     * @static
     * @param {*} value - Value
     * @returns {Boolean} Value is a function
     */
    static isFunction(value) {
        return typeof value === 'function';
    }

    /**
     * Checks whether the platform is a mobile device.
     *
     * @static
     * @returns {Boolean} The platform is a mobile device
     */
    static isMobileDevice() {
        return this._isMobileDevice;
    }

    /**
     * Checks whether the browser is Mobile Safari
     *
     * @static
     * @returns {Boolean} The browser is Mobile Safari
     */
    static isMobileSafari() {
        return this._isMobileSafari;
    }

    /**
     * Returns true if the value is a finite number
     *
     * @since 5.0.0
     * @static
     * @param {*} value - Value
     * @returns {Boolean} Value is a finite number
     */
    static isNumber(value) {
        return Number.isFinite(value);
    }

    /**
     * Checks whether the platform is NW.js
     *
     * @static
     * @returns {Boolean} The platform is NW.js
     */
    static isNwjs() {
        return this._isNwjs;
    }

    /**
     * Returns true if the value is a string
     *
     * @since 1.1.0
     * @static
     * @param {*} value - Value
     * @returns {Boolean} Value is a string
     */
    static isString(value) {
        return !!value && typeof value === 'string';
    }

    /**
     * Returns true if the game test is running
     *
     * @since 3.1.0
     * @static
     * @returns {Boolean} Game test is running
     */
    static isTest() {
        return this._isTest;
    }

    // L methods

    /**
     * Logs the error to file
     *
     * @version 8.0.0
     * @since 3.1.0
     * @static
     * @async
     *
     * @param {Error | Object | String} error - Error
     *
     * @param {String} error.name
     * @param {String} error.message
     * @param {String} [error.filename]
     * @param {String} [error.lineNumber]
     * @param {String} [error.columnNumber]
     * @param {String} [error.stack]
     *
     * @see DKTools.Utils._getErrorLogData
     */
    static async logError(error) {
        if (!error || !this.isNwjs()) {
            return;
        }

        const param = DKToolsParam.get('Errors Log');
        const isTest = DKTools.Utils.isTest();
        const enabled = param['Enabled'];

        if (enabled === 'None' ||
            enabled === 'Only Game' && isTest ||
            enabled === 'Only Test' && !isTest) {
            return;
        }

        const fs = DKTools.IO.fs;
        const os = DKTools.IO.os;

        if (!fs || !os) {
            return;
        }

        const fileSize = param['File Size'] * 1024 * 1024;
        const filename = param['Filename'];
        const file = new DKTools.IO.File(filename);
        const stats = await file.getStatsAsync().then(result => result.data);

        if (stats && stats.size > fileSize) {
            const newFilename = DKTools.IO.parsePath(filename).name;
            const now = new Date();
            const day = String(now.getDate()).padZero(2);
            const month = String(now.getMonth() + 1).padZero(2);
            const year = now.getFullYear();
            const hours = String(now.getHours()).padZero(2);
            const minutes = String(now.getMinutes()).padZero(2);
            const seconds = String(now.getSeconds()).padZero(2);

            await file.renameAsync(`${day}.${month}.${year}_${hours}.${minutes}.${seconds}_${newFilename}`);
        }

        const fileDescriptor = await fs.openSync(filename, 'a');
        const errorData = this._getErrorLogData();
        let data = `Date: ${new Date().toString()}` + os.EOL;

        _.forEach(errorData, (value, key) => {
            data += key + ': ' + value + os.EOL;
        });

        if (error instanceof Object) {
            data += `Name: ${error.name}` + os.EOL;
            data += `Message: ${error.message}` + os.EOL;

            if (error.filename !== undefined) {
                data += `Filename: ${error.filename}` + os.EOL;
            }

            if (error.lineNumber !== undefined) {
                data += `Line: ${error.lineNumber}` + os.EOL;
            }

            if (error.columnNumber !== undefined) {
                data += `Column: ${error.columnNumber}` + os.EOL;
            }

            data += `Stack: ${error.stack}` + os.EOL + os.EOL;
        } else {
            data += `Error: ${error}` + os.EOL + os.EOL;
        }

        await fs.writeSync(fileDescriptor, data);
        await fs.closeSync(fileDescriptor);
    }

    // M methods

    /**
     * Makes a screenshot
     *
     * @version 5.0.0
     * @static
     */
    static makeScreenshot() {
        if (!this.isNwjs()) {
            return;
        }

        const param = DKToolsParam.get('Screenshots');
        const path = param.Path;
        const type = param.Type;
        const quality = param.Quality;
        const snap = SceneManager.snap();
        const urlData = snap.canvas.toDataURL('image/' + type, quality);
        const regex = new RegExp(`^data:image\/${type};base64,`);
        const data = urlData.replace(regex, '');
        const date = new Date();

        let filename = param.Filename;

        filename = filename.replace(/%year/gi, date.getFullYear());
        filename = filename.replace(/%month/gi, date.getMonth() + 1);
        filename = filename.replace(/%day/gi, date.getDate());
        filename = filename.replace(/%hours/gi, date.getHours());
        filename = filename.replace(/%minutes/gi, date.getMinutes());
        filename = filename.replace(/%seconds/gi, date.getSeconds());

        const fullName = filename + '.' + type;
        const fullPath = DKTools.IO.normalizePath(path + '/' + fullName);

        const file = new DKTools.IO.File(fullPath);

        file.save(data, { createDirectory: true, options: 'base64' });

        console.log('The screenshot is saved with the name: ' + fullName);
    }

    /**
     * Copies properties of one object to another.
     * Handles get/set properties correctly.
     * Doesn't clone sub-objects.
     *
     * @static
     *
     * @param {Object} target - A target to copy properties
     * @param {Object} source - The source of properties
     */
    static mixin(target, source) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    }

    // O methods

    /**
     * Opens the debug console
     *
     * @version 5.0.0
     * @static
     */
    static openConsole() {
        if (!this.isTest() || !this.isNwjs()) {
            return;
        }

        try {
            const window = require('nw.gui').Window.get();

            window.showDevTools(null, () => window.focus());
        } catch (e) {
            this.logError(e);

            console.error('DKTools can not open the console');
        }
    }

    // T methods

    /**
     * @since 6.1.0
     * @private
     * @static
     */
    static __tileSize() {
        const param = DKToolsParam.get('Tile Size');

        if (param.Enabled) {
            Tilemap.TILE_WIDTH = param.Size;
            Tilemap.TILE_HEIGHT = param.Size;
        }
    }

    /**
     * Throws the error
     *
     * @since 6.1.0
     * @static
     *
     * @param {*} error - Error
     */
    static throwError(error) {
        setTimeout(() => {
            throw error;
        }, 0);
    }

    // Q methods

    /**
     * @since 4.0.0
     * @private
     * @static
     */
    static __quickLoad() {
        if (!DKTools.Utils.isTest() || !DKToolsParam.get('Quick Load', 'Enabled')) {
            return;
        }

        const savefileId = DKToolsParam.get('Quick Load', 'Savefile ID');
        const scene = SceneManager._scene;

        if (savefileId > 0) {
            if (DataManager.loadGame(savefileId)) {
                SoundManager.playLoad();

                if (scene instanceof Scene_Base) {
                    scene.fadeOutAll();
                }

                if ($gameSystem.versionId() !== $dataSystem.versionId) {
                    $gamePlayer.reserveTransfer($gameMap.mapId(), $gamePlayer.x, $gamePlayer.y);
                    $gamePlayer.requestMapReload();
                }

                SceneManager.goto(Scene_Map);
            }
        } else if (!(scene instanceof Scene_Load)) {
            SceneManager.push(Scene_Load);
        }
    }

    // S methods

    /**
     * Displays information about the plugin in the debug console
     *
     * @version 5.0.0
     * @private
     * @static
     */
    static _sayHello() {
        if (this._saidHello) {
            return;
        }

        if (navigator.userAgent.toLowerCase().indexOf('chrome') >= 0) {
            const args = [`%c %c %c DKTools.js ${DKTools.VERSION} %c  %c  ${DKTools.SITE}  %c \n`,
                'background: #279EE8; padding:5px 0;',
                'background: #279EE8; padding:5px 0;',
                'color: #4CCBF5; background: #030307; padding:5px 0;',
                'background: #279EE8; padding:5px 0;',
                'background: #BDE5F2; padding:5px 0;',
                'background: #279EE8; padding:5px 0;'];

            console.log.apply(console, args);
        } else if (window.console) {
            console.log(`DKTools.js ${DKTools.VERSION} - ${DKTools.SITE}`);
        }

        this._saidHello = true;
    }

    /**
     * @version 5.0.0
     * @since 4.0.0
     * @private
     * @static
     */
    static __showGrid() {
        if (!DKTools.Utils.isTest() || !DKToolsParam.get('Grid', 'Enabled')) {
            return;
        }

        if (this._gridSprite) {
            if (this._gridSize >= 32) {
                this._gridSize -= 16;
                this._gridSprite.refreshAll();
            } else {
                this._gridSize = 64;
                this.__hideGrid();
            }

            return;
        }

        const param = DKToolsParam.get('Grid');
        let line = null;

        this._gridSprite = new DKTools.Sprite.Button(Graphics);

        this._gridSprite.addEvent({
            type: 'draw-all',
            onUpdate: () => {
                const width = Graphics.boxWidth;
                const height = Graphics.boxHeight;
                const size = this._gridSize;
                const color = param['Grid Color'];
                const lineWidth = param['Grid Width'];

                _.times(Math.ceil(width / size), count => {
                    this._gridSprite.drawLine({
                        x1: size * count,
                        y1: 0,
                        x2: size * count,
                        y2: height,
                        color,
                        lineWidth
                    });
                });

                _.times(Math.ceil(height / size), count => {
                    this._gridSprite.drawLine({
                        x1: 0,
                        y1: size * count,
                        x2: width,
                        y2: size * count,
                        color,
                        lineWidth
                    });
                });

                if (line) {
                    this._gridSprite.drawLine({
                        x1: line.x,
                        y1: line.y,
                        x2: TouchInput.mouseX,
                        y2: TouchInput.mouseY,
                        color: line.color,
                        lineWidth: param['Ruler Width']
                    });
                }
            }
        });

        this._gridSprite.addEvent({
            type: 'mouse-inside',
            onUpdate: () => {
                const mouseX = TouchInput.mouseX;
                const mouseY = TouchInput.mouseY;
                const width = Graphics.boxWidth;
                const height = Graphics.boxHeight;

                let x = mouseX + 8;
                let y = mouseY + 8;

                if (x + mouseSprite.width > width) {
                    x = mouseX - mouseSprite.width - 8;
                }

                if (y + mouseSprite.height > height) {
                    y = mouseY - mouseSprite.height - 8;
                }

                mouseSprite.move(x, y);
                mouseSprite.refreshAll();
            }
        });

        this._gridSprite.addEvent({
            type: 'mouse-down-middle',
            onUpdate: () => {
                if (!line) {
                    line = {
                        x: TouchInput.mouseX,
                        y: TouchInput.mouseY,
                        color: param['Ruler Color'] || DKTools.Utils.Random.getHexColor()
                    };
                }

                this._gridSprite.refreshAll();
            }
        });

        this._gridSprite.addEvent({
            type: 'mouse-up-middle',
            onUpdate: () => {
                line = null;

                this._gridSprite.refreshAll();
            }
        });

        this._gridSprite.start(true);

        const mouseSprite = new DKTools.Sprite(0, 0, 220, '2');

        mouseSprite.addEvent({
            type: 'draw-all',
            onUpdate: () => {
                if (line) {
                    const point2 = { x: TouchInput.mouseX, y: TouchInput.mouseY };
                    const distance = Math.floor(DKTools.Utils.Point.getDistance(line, point2));

                    mouseSprite.drawText(`line: ${distance} (${line.x}, ${line.y})`, { y: '0', align: 'left' });
                }

                mouseSprite.drawText(`x: ${TouchInput.mouseX}, y: ${TouchInput.mouseY}`, { y: '1', align: 'left' });
            }
        });

        mouseSprite.start();

        this._gridSprite.addChild(mouseSprite);

        this._gridSprite.updateMouseInsideEvents();

        SceneManager._scene.addChild(this._gridSprite);
    }

};




