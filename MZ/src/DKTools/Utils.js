//===========================================================================
// DKTools.Utils
//===========================================================================

/**
 * The static class that defines utility methods
 * @class
 * @memberof DKTools
 */
DKTools.Utils = class {

    constructor() {
        return DKTools.Utils;
    }

    // initialize methods

    /**
     * Initializes the utils
     * @static
     */
    static initialize() {

        this.__tileSize();

        if (DKToolsParam.get('Debugging Console', 'Enabled')) {
            SceneManager.showDevTools();
        }

        if (DKToolsParam.get('Check Updates', 'Enabled')) {
            this._checkUpdates();
        }
    }

    // C methods

    /**
     * Checks the updates
     * @private
     * @static
     * @async
     */
    static async _checkUpdates() {
        if (!Utils.isNwjs() || !Utils.isTest()) {
            return;
        }

        let plugins = [];

        try {
            const params = { version: DKTools.VERSION, maker: Utils.RPGMAKER_NAME };
            const queryParams = Object.entries(params)
                                       .map(([key, value]) => `${key}=${value}`)
                                        .join('&');

            plugins = await DKTools.Network.fetchJson(`${DKTools.SITE}/plugins.php?${queryParams}`) || [];

            if (plugins.length === 0) {
                return;
            }
        } catch(e) {
            console.error('DKTools cannot check updates');

            return;
        }

        const showNewPlugins = DKToolsParam.get('Check Updates', 'Show New Plugins');

        plugins.forEach((plugin) => {
            const newVersion = plugin.version;

            if (DKTools.PluginManager.isRegistered(plugin.name)) {
                if (!DKTools.PluginManager.checkVersion(plugin.name, newVersion)) {
                    const currentVersion = DKTools.PluginManager.getVersion(plugin.name);
                    const args = [`Available a new ${plugin.beta ? 'beta ' : ''}version of ${plugin.name}: ${newVersion}\n`,
                        `Installed: ${currentVersion}\n`,
                        `Visit site: ${plugin.url}`];

                    if (plugin.download_url) {
                        args.push(`\nDownload: ${plugin.download_url}`)
                    }

                    if (plugin.download_demo_url) {
                        args.push(`\nDownload demo project: ${plugin.download_demo_url}`);
                    }

                    console.log.apply(console, args);
                }
            } else if (showNewPlugins) {
                const args = [
                    `Try the new plugin: ${plugin.name}\n`,
                    `Description: ${plugin.description}\n`,
                    `Visit site: ${plugin.url} \n`];

                if (plugin.download_url) {
                    args.push(`\nDownload: ${plugin.download_url}`)
                }

                if (plugin.download_demo_url) {
                    args.push(`\nDownload demo project: ${plugin.download_demo_url}`);
                }

                console.log.apply(console, args);
            }
        });
    }

    // G methods

    /**
     * Returns the data for error logging
     * @private
     * @static
     * @return {Object} Data for error logging
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
     * Returns true if the value is a function
     * @static
     * @param {*} value - Value
     * @return {Boolean} Value is a function
     */
    static isFunction(value) {
        return typeof value === 'function';
    }

    /**
     * Returns true if the value is a string
     * @static
     * @param {*} value - Value
     * @return {Boolean} Value is a string
     */
    static isString(value) {
        return !!value && typeof value === 'string';
    }

    // L methods

    /**
     * Logs the error to file
     * @static
     * @async
     * @param {Error | Object | String} error - Error
     * @param {String} error.name
     * @param {String} error.message
     * @param {String} [error.filename]
     * @param {String} [error.lineNumber]
     * @param {String} [error.columnNumber]
     * @param {String} [error.stack]
     */
    static async logError(error) {
        if (!error || !Utils.isNwjs()) {
            return;
        }

        const param = DKToolsParam.get('Errors Log') || {};
        const isTest = Utils.isTest();
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
     * @static
     */
    static makeScreenshot() {
        if (!Utils.isNwjs()) {
            return;
        }

        const param = DKToolsParam.get('Screenshots');
        const path = param['Path'];
        const type = param['Type'];
        const quality = param['Quality'];
        const snap = SceneManager.snap();
        const urlData = snap.canvas.toDataURL('image/' + type, quality);
        const regex = new RegExp(`^data:image\/${type};base64,`);
        const data = urlData.replace(regex, '');
        const date = new Date();

        let filename = param['Filename'];

        filename = filename.replace(/%year/gi, date.getFullYear());
        filename = filename.replace(/%month/gi, date.getMonth() + 1);
        filename = filename.replace(/%day/gi, date.getDate());
        filename = filename.replace(/%hours/gi, date.getHours());
        filename = filename.replace(/%minutes/gi, date.getMinutes());
        filename = filename.replace(/%seconds/gi, date.getSeconds());

        const fullName = filename + '.' + type;
        const fullPath = DKTools.IO.normalizePath(path + '/' + fullName);

        const file = new DKTools.IO.File(fullPath);

        file.save(data, {
            createDirectory: true,
            options: 'base64',
            onSuccess: () => {
                console.log('The screenshot is saved with the name: ' + fullName);
            }
        });
    }

    // S methods

    /**
     * @private
     * @static
     */
    static __showGrid() {
        if (!Utils.isTest() || !DKToolsParam.get('Grid', 'Enabled')) {
            return;
        }

        const param = DKToolsParam.get('Grid');
        const sizes = param['Grid Sizes'] || [64, 48, 32, 16];

        if (this._gridSprite) {
            if (this._gridSprite._gridSizeIndex < sizes.length - 1) {
                this._gridSprite._gridSizeIndex++;
                this._gridSprite.refreshAll();
            } else {
                this.__hideGrid();
            }

            return;
        }


        let line = null;

        this._gridSprite = new DKTools.Sprite.Button(Graphics);

        this._gridSprite._gridSizeIndex = 0;

        this._gridSprite.addEvent({
            type: 'draw-all',
            onUpdate: () => {
                const width = Graphics.boxWidth;
                const height = Graphics.boxHeight;
                const color = param['Grid Color'];
                const lineWidth = param['Grid Width'];
                const size = sizes[this._gridSprite._gridSizeIndex];

                _.times(Math.ceil(width / size), (count) => {
                    this._gridSprite.drawLine({
                        x1: size * count,
                        y1: 0,
                        x2: size * count,
                        y2: height,
                        color,
                        lineWidth
                    });
                });

                _.times(Math.ceil(height / size), (count) => {
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
                        x2: TouchInput.x,
                        y2: TouchInput.y,
                        color: line.color,
                        lineWidth: param['Ruler Width']
                    });
                }
            }
        });

        this._gridSprite.addEvent({
            type: 'mouse-inside',
            onUpdate: () => {
                const mouseX = TouchInput.x;
                const mouseY = TouchInput.y;
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
                        x: TouchInput.x,
                        y: TouchInput.y,
                        color: param['Ruler Color'] || ColorManager.randomColor()
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
                    const mouse = { x: TouchInput.x, y: TouchInput.y };
                    const distance =
                        Math.floor(
                            Math.sqrt(
                                Math.pow(line.x - mouse.x, 2) + Math.pow(line.y - mouse.y, 2)));

                    mouseSprite.drawText(`line: ${distance} (${line.x}, ${line.y})`, { y: '0', align: 'left' });
                }

                mouseSprite.drawText(`x: ${TouchInput.x}, y: ${TouchInput.y}`,
                    { y: '1', align: 'left' });
            }
        });

        mouseSprite.start();

        this._gridSprite.addChild(mouseSprite);

        this._gridSprite.updateMouseInsideEvents();

        SceneManager._scene.addChild(this._gridSprite);
    }

    // T methods

    /**
     * @private
     * @static
     */
    static __tileSize() {
        const param = DKToolsParam.get('Tile Size') || {};

        if (param['Enabled']) {
            Tilemap.TILE_WIDTH = param['Size'];
            Tilemap.TILE_HEIGHT = param['Size'];
        }
    }

    /**
     * Throws the error
     * @static
     * @param {*} error - Error
     */
    static throwError(error) {
        setTimeout(() => {
            throw error;
        }, 0);
    }

    // Q methods

    /**
     * @private
     * @static
     */
    static __quickLoad() {
        if (!Utils.isTest() || !DKToolsParam.get('Quick Load', 'Enabled')) {
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

};


