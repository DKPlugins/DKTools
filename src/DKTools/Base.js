//===========================================================================
// DKTools.Base
//===========================================================================

/**
 * Abstract base class for sprite and window
 *
 * @class DKTools.Base
 *
 * @memberof DKTools
 *
 * @param {Number | Graphics | Object | *} [object] - The X coordinate or Graphics or object with parameters
 * @param {Number} [y] - The Y coordinate (if object is Number)
 * @param {Number} [width] - The width of the object (if object is Number)
 * @param {Number} [height] -The height of the object (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 * @param {Number} [object.width] - The width of the object
 * @param {Number} [object.height] - The height of the object
 *
 * @see DKTools.Base.prototype.initialize
 * @see DKTools.Base.prototype.setupAll
 */
DKTools.Base = class {

    constructor() {
        throw new Error('This is an abstract class!');
    }

    // initialize methods

    /**
     * Initializes a class object
     *
     * @param {Number | Graphics | Object | *} [object] - The X coordinate or Graphics or object with parameters
     * @param {Number} [y] - The Y coordinate (if object is Number)
     * @param {Number} [width] - The width of the object (if object is Number)
     * @param {Number | String} [height] - The height of the object (if object is Number)
     *
     * @param {Number} [object.x] - The X coordinate
     * @param {Number} [object.y] - The Y coordinate
     * @param {Number} [object.width] - The width of the object
     * @param {Number} [object.height] - The height of the object
     *
     * @example
     * var sprite = new DKTools.Sprite(0, 0, 100, 100);
     * => x = 0; y = 0; width = 100; height = 100;
     *
     * @example
     * var sprite = new DKTools.Sprite(Graphics);
     * => x = 0; y = 0; width = Graphics.boxWidth; height = Graphic.boxHeight;
     *
     * @example
     * var sprite = new DKTools.Sprite({ x: 0, y: 0, width: 100, height: 100 });
     * => x = 0; y = 0; width = 100; height = 100;
     *
     * @see DKTools.Base.prototype.setupAll
     */
    initialize(object, y, width, height) {
        let x;

        if (object instanceof Graphics) {
            width = Graphics.boxWidth;
            height = Graphics.boxHeight;
        } else if (object instanceof Object) {
            x = object.x;
            y = object.y;
            width = object.width;
            height = object.height;
        } else if (Number.isFinite(object)) {
            x = object;
        }

        this.move(x, y);
        this.setupSize(width, height);
        this._clearAll();
        this._createAll();
        this._setupAll();
        this._addAllChildren();
        this.setupAll(object);
    }

    // A methods

    /**
     * Adds children objects to processing
     *
     * @private
     */
    _addAllChildren() {
        // to be overriden by plugins
    }

    /**
     * Activates the object
     *
     * @see DKTools.Base.prototype.setActive
     * @see DKTools.Base.prototype.updateActivateEvents
     */
    activate() {
        if (this.setActive(true)) {
            this.updateActivateEvents();
        }
    }

    /**
     * Returns the name of the actor
     *
     * @param {Number} n - Number of the actor
     * @returns {String} Name of the actor
     */
    actorName(n) {
        const actor = n >= 1 ? $gameActors.actor(n) : null;

        return actor ? actor.name() : '';
    }

    /**
     * Adds children objects to processing
     *
     * @version 2.0.0
     *
     * @see DKTools.Base.prototype.updateAddAllChildrenEvents
     */
    addAllChildren() {
        this.updateAddAllChildrenEvents();
    }

    /**
     * Adds the animation
     *
     * @version 2.0.0
     *
     * @param {DKTools.Animation} animation - Animation to add
     *
     * @see DKTools.EventManager.addAnimation
     */
    addAnimation(animation) {
        this._eventManager.addAnimation(animation);
    }

    /**
     * Adds the event
     *
     * @version 6.0.0
     *
     * @param {DKTools.Event | Object} object - Event or object with parameters for the event
     *
     * @param {Number | String | *} [object.id] - ID of the event
     * @param {String} [object.type] - Type of the event
     * @param {Number} [object.repeatTime] - Time of one repeat
     * @param {Number} [object.repeats] - Amount of repeats
     * @param {Number} [object.remainingPauseTime] - Remaining time of pause
     * @param {Function} [object.onStart] - Handler of the event start
     * @param {Function} [object.onUpdate] - Handler of the event update
     * @param {Function} [object.onPause] - Handler of the event pause
     * @param {Function} [object.onReset] - Handler of the event reset
     * @param {Function} [object.onRepeat] - Handler of the event repeat
     * @param {Function} [object.onSuccess] - Handler of the event success
     * @param {Function} [object.onFail] - Handler of the event fail
     *
     * @see DKTools.Event
     * @see DKTools.EventManager.prototype.addEvent
     *
     * @returns {DKTools.Event} Added event
     */
    addEvent(object) {
        return this._eventManager.addEvent(object);
    }

    /**
     * Adds the one time event
     *
     * @version 6.0.0
     *
     * @param {DKTools.Event | Object} object - Event or object with parameters for the event
     *
     * @param {Number | String | *} [object.id] - ID of the event
     * @param {String} [object.type] - Type of the event
     * @param {Number} [object.remainingPauseTime] - Remaining time of pause
     * @param {Function} [object.onStart] - Handler of the event start
     * @param {Function} [object.onUpdate] - Handler of the event update
     * @param {Function} [object.onPause] - Handler of the event pause
     * @param {Function} [object.onReset] - Handler of the event reset
     * @param {Function} [object.onRepeat] - Handler of the event repeat
     * @param {Function} [object.onSuccess] - Handler of the event success
     * @param {Function} [object.onFail] - Handler of the event fail
     *
     * @see DKTools.Event
     * @see DKTools.EventManager.prototype.addOneTimeEvent
     *
     * @returns {DKTools.Event} Added event
     */
    addOneTimeEvent(object) {
        return this._eventManager.addOneTimeEvent(object);
    }

    /**
     * Adds a listener of change of the option
     *
     * @version 2.0.0
     *
     * @param {String} option - Name of the option
     * @param {Function} listener - Listener
     *
     * @see DKTools.OptionManager.prototype.addOptionChangeListener
     */
    addOptionChangeListener(option, listener) {
        this._optionManager.addOptionChangeListener(option, listener);
    }

    // С methods

    /**
     * Clears all data
     *
     * @version 2.0.0
     * @private
     *
     * @see DKTools.Base.prototype._clearWheel
     * @see DKTools.Base.prototype._clearMouseEnterTime
     */
    _clearAll() {
        this._clearMouseEnterTime();
        this._clearWheel();
    }

    /**
     * Clears time of mouse enter inside the object
     *
     * @since 2.0.0
     * @private
     */
    _clearMouseEnterTime() {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._mouseEnterTime = 0;
    }

    /**
     * Clears scrolling of mouse wheel
     *
     * @private
     *
     * @see DKTools.Base.prototype._clearWheelX
     * @see DKTools.Base.prototype._clearWheelY
     */
    _clearWheel() {
        this._clearWheelX();
        this._clearWheelY();
    }

    /**
     * Clears scrolling of mouse wheel on X axis
     *
     * @private
     */
    _clearWheelX() {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._wheelX = 0;
    }

    /**
     * Clears scrolling of mouse wheel on Y axis
     *
     * @private
     */
    _clearWheelY() {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._wheelY = 0;
    }

    /**
     * Creates all
     *
     * @version 2.0.0
     * @private
     *
     * @see DKTools.Base.prototype._createOptionManager
     * @see DKTools.Base.prototype._createEventManager
     */
    _createAll() {
        this._createOptionManager();
        this._createEventManager();
    }

    /**
     * Creates the event manager
     *
     * @since 2.0.0
     * @private
     *
     * @see DKTools.EventManager
     */
    _createEventManager() {
        /**
         * @private
         * @readonly
         * @type {DKTools.EventManager}
         */
        this._eventManager = new DKTools.EventManager(this);
    }

    /**
     * Creates the option manager
     *
     * @since 2.0.0
     * @private
     *
     * @see DKTools.OptionManager
     */
    _createOptionManager() {
        /**
         * @private
         * @readonly
         * @type {DKTools.OptionManager}
         */
        this._optionManager = new DKTools.OptionManager();
    }

    /**
     * Checks the height with the minimum height
     * Returns the normalized height of the object
     *
     * @private
     *
     * @param {Number} height - Height of the object
     *
     * @see DKTools.Base.prototype.getMinHeight
     *
     * @returns {Number} Normalized height of the object
     */
    _checkHeight(height) {
        const minHeight = this.getMinHeight();

        return height ? Math.max(minHeight, height) : minHeight;
    }

    /**
     * Checks the width with the minimum width
     * Returns the normalized width of the object
     *
     * @private
     *
     * @param {Number} width - Width of the object
     *
     * @see DKTools.Base.prototype.getMinWidth
     *
     * @returns {Number} Normalized width of the object
     */
    _checkWidth(width) {
        const minWidth = this.getMinWidth();

        return width ? Math.max(minWidth, width) : minWidth;
    }

    /**
     * @param {Object} textState - Text state
     * @param {Boolean} [all=false] - All lines
     *
     * @param {String} textState.text - Text
     * @param {Number} textState.index - Index
     *
     * @see DKTools.Base.prototype.hasBitmap
     *
     * @returns {Number} Text height
     */
    calcTextHeight(textState, all = false) {
        if (!this.hasBitmap() || !textState) {
            return 0;
        }

        const lastFontSize = this.bitmap.fontSize;
        const lines = textState.text.slice(textState.index).split('\n');
        const maxLines = all ? lines.length : 1;
        let textHeight = 0;

        for (let i = 0; i < maxLines; i++) {
            const regExp = /\x1b[\{\}]/g;
            let maxFontSize = this.bitmap.fontSize;

            for (;;) {
                const array = regExp.exec(lines[i]);

                if (array) {
                    if (array[0] === '\x1b{') {
                        this.makeFontBigger();
                    }

                    if (array[0] === '\x1b}') {
                        this.makeFontSmaller();
                    }

                    if (maxFontSize < this.bitmap.fontSize) {
                        maxFontSize = this.bitmap.fontSize;
                    }
                } else {
                    break;
                }
            }

            textHeight += maxFontSize + 8;
        }

        this.bitmap.fontSize = lastFontSize;

        return textHeight;
    }

    /**
     * Returns true if the object can be updated and redrawn
     *
     * @since 1.1.0
     *
     * @see DKTools.Base.prototype.hasBitmap
     *
     * @returns {Boolean} Object can be updated and redrawn
     */
    canRedrawAll() {
        return this.hasBitmap();
    }

    /**
     * Converts the X of the canvas to the local X
     *
     * @param {Number} x - The X of the canvas
     * @returns {Number} Local X
     */
    canvasToLocalX(x) {
        let node = this;

        while (node) {
            x -= node.x;
            node = node.parent;
        }

        return x;
    }

    /**
     * Converts the Y of the canvas to the local Y
     *
     * @param {Number} y - The Y of the canvas
     * @returns {Number} Local Y
     */
    canvasToLocalY(y) {
        let node = this;

        while (node) {
            y -= node.y;
            node = node.parent;
        }

        return y;
    }

    /**
     * Checks all
     *
     * @version 1.1.0
     *
     * @see DKTools.Base.prototype.updateCheckAllEvents
     * @see DKTools.Base.prototype.checkSize
     */
    checkAll() {
        this.updateCheckAllEvents();
        this.checkSize();
    }

    /**
     * Checks the size of the object
     */
    checkSize() {
        // to be overriden by plugins
    }

    /**
     * Clears the bitmap
     * Returns true if successfully completed
     *
     * @see DKTools.Base.prototype.clearRect
     *
     * @returns {Boolean} Successfully completed
     */
    clear() {
        return this.clearRect();
    }

    /**
     * Clears the events
     *
     * @version 2.0.0
     *
     * @param {String[] | String} object Array with event types or event type
     *
     * @see DKTools.EventManager.prototype.clearEvents
     */
    clearEvents(object) {
        this._eventManager.clearEvents(object);
    }

    /**
     * Clears a line in the bitmap
     * Returns true if successfully completed
     *
     * @since 5.0.0
     *
     * @param {Number} line - Line to clear
     *
     * @see DKTools.Base.prototype.getLineRect
     * @see DKTools.Base.prototype.clearRect
     *
     * @returns {Boolean} Successfully completed
     */
    clearLine(line) {
        return this.clearRect(this.getLineRect(line));
    }

    /**
     * Clears the options
     *
     * @since 2.0.0
     *
     * @see DKTools.OptionManager.prototype.clear
     */
    clearOptions() {
        this._optionManager.clear();
    }

    /**
     * Clears a rectangle
     * Returns true if successfully completed
     *
     * @version 6.0.0
     *
     * @param {Number | PIXI.Rectangle | Rectangle | Object} [object] - The X coordinate or Rectangle or object with parameters
     * @param {Number | String} [y] - The Y coordinate or line number (String) (if object is Number)
     * @param {Number} [width] - Width of the rectangle (if object is Number)
     * @param {Number | String} [height] - Height of the rectangle or number of lines (String) (if object is Number)
     *
     * @param {Number} [object.x] - The X coordinate
     * @param {Number | String} [object.y] - The Y coordinate or line number (String)
     * @param {Number} [object.width] - Width of the rectangle
     * @param {Number | String} [object.height] - Height of the rectangle or number of lines (String)
     *
     * @returns {Boolean} Successfully completed
     */
    clearRect(object, y, width, height) {
        if (!this.hasBitmap()) {
            return false;
        }

        let x = object; // object - Number

        if (object instanceof Object) {
            x = object.x;
            y = object.y;
            width = object.width;
            height = object.height;
        }

        if (DKTools.Utils.isString(y)) { // line number
            y = this.getLineHeight() * parseFloat(y);
        }

        if (DKTools.Utils.isString(height)) { // number of lines
            y = this.getLineHeight() * parseFloat(height);
        }

        x = x || 0;
        y = y || 0;
        width = width || this.standardDrawingWidth();
        height = height || this.standardDrawingHeight();

        this.bitmap.clearRect(x, y, width, height);

        return true;
    }

    /**
     * Clones the object
     *
     * @version 2.0.0
     *
     * @param {Object} [options={}] - Options for clone
     *
     * @param {Boolean} [options.cloneTexts] - Clone texts
     * @param {Boolean} [options.cloneOptions] - Clone options
     * @param {Boolean} [options.blockStart] - Blocking the call of the "start" function of cloned object
     * @param {Boolean} [options.activate] - Activate a cloned object
     *
     * @returns {DKTools.Sprite | DKTools.Window | *} Cloned object
     */
    clone(options = {}) {
        options = options || {};

        const clone = new (this.constructor)(this);

        if (options.cloneTexts) {
            _.forEach(this._texts, textObj => {
                clone.addText(textObj.text, { ...textObj.options });
            });
        }

        if (options.cloneOptions) {
            clone.enableOptions(this._optionManager.options);
        }

        if (!options.blockStart) {
            clone.start();
        }

        if (options.activate) {
            clone.activate();
        }

        return clone;
    }

    /**
     * Converts the escape characters
     * Returns the text with converted the escaped characters
     *
     * @param {String} text - Text
     * @returns {String} Text with converted the escaped characters
     */
    convertEscapeCharacters(text) {
        try {
            return Window_Base.prototype.convertEscapeCharacters.call(this, text);
        } catch(e) {
            text = text.replace(/\\/g, '\x1b');

            text = text.replace(/\x1b\x1b/g, '\\');

            text = text.replace(/\x1bV\[(\d+)\]/gi, function() {
                return $gameVariables.value(parseInt(arguments[1]));
            }.bind(this));

            text = text.replace(/\x1bV\[(\d+)\]/gi, function() {
                return $gameVariables.value(parseInt(arguments[1]));
            }.bind(this));

            text = text.replace(/\x1bN\[(\d+)\]/gi, function() {
                return this.actorName(parseInt(arguments[1]));
            }.bind(this));

            text = text.replace(/\x1bP\[(\d+)\]/gi, function() {
                return this.partyMemberName(parseInt(arguments[1]));
            }.bind(this));

            text = text.replace(/\x1bG/gi, TextManager.currencyUnit);

            return text;
        }
    }

    /**
     * Creates all objects
     *
     * @version 2.0.0
     *
     * @see DKTools.Base.prototype.updateCreateAllEvents
     */
    createAll() {
        this.updateCreateAllEvents();
    }

    // D methods

    /**
     * Deactivates the object
     *
     * @see DKTools.Base.prototype.setActive
     * @see DKTools.Base.prototype.updateDeactivateEvents
     */
    deactivate() {
        if (this.setActive(false)) {
            this.updateDeactivateEvents();
        }
    }

    /**
     * Turns off the option
     *
     * @version 2.0.0
     *
     * @param {String} option - Name of the option
     *
     * @see DKTools.OptionManager.prototype.disableOption
     */
    disableOption(option) {
        this._optionManager.disableOption(option);
    }

    /**
     * Turns off the options
     *
     * @version 2.0.0
     *
     * @param {String[] | ...String} object - Names of the options
     *
     * @see DKTools.OptionManager.prototype.disableOptions
     */
    disableOptions(object) {
        this._optionManager.disableOptions.apply(this._optionManager, arguments);
    }

    /**
     * Draws all
     */
    drawAll() {
        // to be overriden by plugins
    }

    /**
     * Draws an arrow
     * Returns true if successfully completed
     *
     * @since 6.0.0
     *
     * @param {String} arrowType - Type of the arrow
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {Function | PIXI.Rectangle | Rectangle | Object} [options.destination] - Destination to bitmap. Function or Rectangle or object with parameters
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.destination.x] - The X coordinate
     * @param {Number | String} [options.destination.y] - The Y coordinate or line number (String)
     * @param {Number} [options.destination.width] - Width of the rectangle
     * @param {Number | String} [options.destination.height] - Height of the rectangle or number of lines (String)
     *
     * @see DKTools.Base.prototype.drawBitmap
     *
     * @returns {Boolean} Successfully completed
     */
    drawArrow(arrowType, options = {}) {
        if (!this.hasBitmap() || !arrowType) {
            return false;
        }

        options = options || {};

        const bitmap = ImageManager.loadSystem(this.standardWindowskin());
        const source = DKTools.Sprite.Arrow.getRect(arrowType);

        return this.drawBitmap(bitmap, { ...options, source });
    }

    /**
     * Draws a bitmap
     * Returns true if successfully completed
     *
     * @version 6.1.0
     *
     * @param {Bitmap | Object} object - Bitmap or object with parameters
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {String} object.folder - Path to file
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     *
     * @param {Boolean} [options.sync] - Draw if the bitmap is ready
     * @param {Function | PIXI.Rectangle | Rectangle | Object} [options.source] - Source from bitmap. Function or Rectangle or object with parameters
     * @param {Function | PIXI.Rectangle | Rectangle | Object} [options.destination] - Destination to bitmap. Function or  Rectangle or object with parameters
     * @param {Function} [options.callback] - Callback function, which should return an object with source and destination
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.source.x] - The X coordinate
     * @param {Number | String} [options.source.y] - The Y coordinate or line number (String)
     * @param {Number} [options.source.width] - Width of the rectangle
     * @param {Number | String} [options.source.height] - Height of the rectangle or number of lines (String)
     *
     * @param {Number} [options.destination.x] - The X coordinate
     * @param {Number | String} [options.destination.y] - The Y coordinate or line number (String)
     * @param {Number} [options.destination.width] - Width of the rectangle
     * @param {Number | String} [options.destination.height] - Height of the rectangle or number of lines (String)
     *
     * @example
     * Drawing half of the bitmap
     *
     * var sprite = new DKTools.Sprite(0, 0, 200, 200);
     *
     * sprite.start();
     *
     * sprite.drawBitmap({ folder: 'img/system/', filename: 'Window' }, {
     *      callback: function(bitmap, sprite) { // loaded bitmap, sprite
     *          return {
     *              source: {
     *                  width: bitmap.width / 2,
     *                  height: bitmap.height / 2
     *              }
     *          }
     *      }
     * });
     *
     * @see DKTools.Base.prototype.hasBitmap
     * @see DKTools.Utils.Bitmap.load
     *
     * @returns {Boolean} Successfully completed
     */
    drawBitmap(object, options = {}) {
        if (!this.hasBitmap() || !object) {
            return false;
        }

        options = options || {};

        const bitmap = DKTools.Utils.Bitmap.load(object);

        if (!bitmap || options.sync && !bitmap.isReady()) {
            return false;
        }

        bitmap.addLoadListener(() => {
            const isFunction = DKTools.Utils.isFunction;
            const isString = DKTools.Utils.isString;
            const lineHeight = this.getLineHeight();
            const { paintOpacity, resetPaintOpacity } = options;
            let { source, destination } = options;
            let callbackResult = {};

            if (isFunction(options.callback)) {
                callbackResult = options.callback(bitmap, this);
            }

            source = source || callbackResult.source || {};
            destination = destination || callbackResult.destination || {};

            if (isFunction(source)) {
                source = source(bitmap, this);
            }

            if (isFunction(destination)) {
                destination = destination(bitmap, this);
            }

            const sx =  _.defaultTo(source.x, 0);
            const sw =  _.defaultTo(source.width, bitmap.width);
            let sy   =  _.defaultTo(source.y, 0);
            let sh   =  _.defaultTo(source.height, bitmap.height);

            const dx =  _.defaultTo(destination.x, 0);
            const dw =  _.defaultTo(destination.width, sw);
            let dy   =  _.defaultTo(destination.y, 0);
            let dh   =  _.defaultTo(destination.height, sh);

            if (isString(sy)) { // line number
                sy = lineHeight * parseFloat(sy);
            }

            if (isString(sh)) { // number of lines
                sh = lineHeight * parseFloat(sh);
            }

            if (isString(dy)) { // line number
                dy = lineHeight * parseFloat(dy);
            }

            if (isString(dh)) { // number of lines
                dh = lineHeight * parseFloat(dh);
            }

            if (Number.isFinite(paintOpacity)) {
                this.changePaintOpacity(paintOpacity);
            }

            this.bitmap.blt(bitmap, sx, sy, sw, sh, dx, dy, dw, dh);

            if (resetPaintOpacity) {
                this.resetPaintOpacity();
            }
        });

        return true;
    }

    /**
     * Draws a bitmap
     * Asynchronous version of DKTools.Base.prototype.drawBitmap
     * Returns true if successfully completed
     *
     * @version 6.0.0
     * @since 5.0.0
     * @async
     *
     * @param {Bitmap | Object} object - Bitmap or object with parameters
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {String} object.folder - Path to file
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     *
     * @param {Function | PIXI.Rectangle | Rectangle | Object} [options.source] - Source from bitmap. Function or Rectangle or object with parameters
     * @param {Function | PIXI.Rectangle | Rectangle | Object} [options.destination] - Destination to bitmap. Function or Rectangle or object with parameters
     * @param {Function} [options.callback] - Callback function, which should return an object with source and destination
     *
     * @param {Number} [options.source.x] - The X coordinate
     * @param {Number | String} [options.source.y] - The Y coordinate or line number (String)
     * @param {Number} [options.source.width] - Width of the rectangle
     * @param {Number | String} [options.source.height] - Height of the rectangle or number of lines (String)
     *
     * @param {Number} [options.destination.x] - The X coordinate
     * @param {Number | String} [options.destination.y] - The Y coordinate or line number (String)
     * @param {Number} [options.destination.width] - Width of the rectangle
     * @param {Number | String} [options.destination.height] - Height of the rectangle or number of lines (String)
     *
     * @see DKTools.Base.prototype.drawBitmap
     *
     * @returns {Boolean} Successfully completed
     */
    async drawBitmapAsync(object, options = {}) {
        if (!object) {
            return false;
        }

        const bitmap = await DKTools.Utils.Bitmap.loadAsync(object);

        return this.drawBitmap(bitmap, options);
    }

    /**
     * Draws a character
     * Returns true if successfully completed
     *
     * @version 6.0.0
     *
     * @param {String} characterName - Character filename
     * @param {Number} characterIndex - Character index
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [options.pos] - Position for drawing (ignores other parameters of position: x, y)
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.pos.x] - The X coordinate
     * @param {Number | String} [options.pos.y] - The Y coordinate or line number (String)
     *
     * @see DKTools.Base.prototype.hasBitmap
     * @see DKTools.Base.prototype.drawBitmap
     *
     * @returns {Boolean} Successfully completed
     */
    drawCharacter(characterName, characterIndex, options = {}) {
        if (!this.hasBitmap() || characterName == null || characterIndex == null) {
            return false;
        }

        options = options || {};

        const bitmap = ImageManager.loadCharacter(characterName);
        const big = ImageManager.isBigCharacter(characterName);
        const pw = bitmap.width / (big ? 3 : 12);
        const ph = bitmap.height / (big ? 4 : 8);
        const sx = (characterIndex % 4 * 3 + 1) * pw;
        const sy = (Math.floor(characterIndex / 4) * 4) * ph;
        const source = new Rectangle(sx, sy, pw, ph);
        const pos = options.pos;
        let { x, y } = options;

        if (pos instanceof Object) {
            x = pos.x;
            y = pos.y;
        }

        x = x || 0;
        y = y || 0;

        return this.drawBitmap(bitmap, { ...options, source, destination: { x, y } });
    }

    /**
     * Draws a circle
     * Returns true if successfully completed
     *
     * @version 6.0.0
     *
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [options.pos] - Position for drawing (ignores other parameters of position: x, y)
     * @param {Number} [options.radius] - Radius of the circle
     * @param {String} [options.color] - Color of the circle
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.pos.x] - The X coordinate
     * @param {Number | String} [options.pos.y] - The Y coordinate or line number (String)
     *
     * @see DKTools.Base.prototype.hasBitmap
     *
     * @returns {Boolean} Successfully completed
     */
    drawCircle(options = {}) {
        if (!this.hasBitmap()) {
            return false;
        }

        options = options || {};

        const { pos, radius, color, paintOpacity, resetPaintOpacity} = options;
        let { x, y } = options;

        if (pos instanceof Object) {
            x = pos.x;
            y = pos.y;
        }

        if (DKTools.Utils.isString(y)) { // line number
            y = this.getLineHeight() * parseFloat(y);
        }

        if (Number.isFinite(paintOpacity)) {
            this.changePaintOpacity(paintOpacity);
        }

        this.bitmap.drawCircle(x || 0, y || 0, radius || 1, color || 'white');

        if (resetPaintOpacity) {
            this.resetPaintOpacity();
        }

        return true;
    }

    /**
     * Draws a character face
     * Returns true if successfully completed
     *
     * @version 6.0.0
     *
     * @param {String} faceName - Face filename
     * @param {Number} faceIndex - Face index
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {Number} [options.width] - Width of the face
     * @param {Number | String} [options.height] - Height of the face or number of lines (String)
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [options.pos] - Position for drawing (ignores other parameters of position: x, y)
     * @param {PIXI.Rectangle | Rectangle | Object} [options.rect] - Rectangle for drawing (ignores other parameters of position: x, y, pos)
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.pos.x] - The X coordinate
     * @param {Number} [options.pos.y] - The Y coordinate or line number (String)
     *
     * @param {Number} [options.rect.x] - The X coordinate
     * @param {Number | String} [options.rect.y] - The Y coordinate or line number (String)
     * @param {Number} [options.rect.width] - Width of the face
     * @param {Number | String} [options.rect.height] -  Height of the face or number of lines (String)
     *
     * @see DKTools.Base.prototype.hasBitmap
     * @see DKTools.Base.prototype.drawBitmap
     *
     * @returns {Boolean} Successfully completed
     */
    drawFace(faceName, faceIndex, options = {}) {
        if (!this.hasBitmap() || faceName == null || faceIndex == null) {
            return false;
        }

        options = options || {};

        const { pos, rect } = options;
        let { x, y, width, height } = options;

        if (pos instanceof Object) {
            x = pos.x;
            y = pos.y;
        }

        if (rect instanceof Object) {
            x = rect.x;
            y = rect.y;
            width = rect.width;
            height = rect.height;
        }

        width = width || Window_Base._faceWidth;
        height = height || Window_Base._faceHeight;

        const bitmap = ImageManager.loadFace(faceName);
        const pw = Window_Base._faceWidth;
        const ph = Window_Base._faceHeight;
        const sw = Math.min(width, pw);
        const sh = Math.min(height, ph);
        const sx = faceIndex % 4 * pw + (pw - sw) / 2;
        const sy = Math.floor(faceIndex / 4) * ph + (ph - sh) / 2;
        const source = new Rectangle(sx, sy, sw, sh);

        x = Math.floor((x || 0) + Math.max(width - pw, 0) / 2);
        y = Math.floor((y || 0) + Math.max(height - ph, 0) / 2);

        return this.drawBitmap(bitmap, { ...options, source, destination: { x, y } });
    }

    /**
     * Draws an icon
     * Returns true if successfully completed
     *
     * @version 6.0.0
     *
     * @param {Number} iconIndex - Icon index
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [options.pos] - Position for drawing (ignores other parameters of position: x, y)
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.pos.x] - The X coordinate
     * @param {Number | String} [options.pos.y] - The Y coordinate or line number (String)
     *
     * @see DKTools.Base.prototype.hasBitmap
     *
     * @returns {Boolean} Successfully completed
     */
    drawIcon(iconIndex, options = {}) {
        if (!this.hasBitmap() || iconIndex == null) {
            return false;
        }

        const bitmap = ImageManager.loadSystem('IconSet');
        const pw = Window_Base._iconWidth;
        const ph = Window_Base._iconHeight;
        const sx = iconIndex % 16 * pw;
        const sy = Math.floor(iconIndex / 16) * ph;
        const source = new Rectangle(sx, sy, pw, ph);
        const pos = options.pos;
        let { x, y } = options;

        if (pos instanceof Object) {
            x = pos.x;
            y = pos.y;
        }

        return this.drawBitmap(bitmap, { ...options, source, destination: { x, y } });
    }

    /**
     * Draws a name of the item
     * Returns true if successfully completed
     *
     * @version 6.1.0
     *
     * @param {Object} item - Item
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [options.pos] - Position for drawing (ignores other parameters of position: x, y)
     * @param {Number} [options.iconX] - The X coordinate of the icon
     * @param {Number | String} [options.iconY] - The Y coordinate of the icon or line number (String)
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [options.iconPos] - Position of the icon (ignores other parameters of position: iconX, iconY)
     * @param {Number} [options.width] - Width of the item name
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.pos.x] - The X coordinate
     * @param {Number | String} [options.pos.y] - The Y coordinate or line number (String)
     *
     * @param {Number} [options.iconPos.x] - The X coordinate
     * @param {Number | String} [options.iconPos.y] - The Y coordinate or line number (String)
     *
     * @see DKTools.Base.prototype.drawIcon
     * @see DKTools.Base.prototype.drawText
     *
     * @returns {Boolean} Successfully completed
     */
    drawItemName(item, options = {}) {
        if (!this.hasBitmap() || !item) {
            return false;
        }

        options = options || {};

        const iconBoxWidth = Window_Base._iconWidth + 4;
        const { pos, iconPos, paintOpacity, resetPaintOpacity } = options;
        let { x, y, iconX, iconY } = options;

        if (pos instanceof Object) {
            x = pos.x;
            y = pos.y;
        }

        if (iconPos instanceof Object) {
            iconX = iconPos.x;
            iconY = iconPos.y;
        }

        if (DKTools.Utils.isString(y)) { // line number
            y = this.getLineHeight() * parseFloat(y);
        }

        if (Number.isFinite(paintOpacity)) {
            this.changePaintOpacity(paintOpacity);
        }

        x = x || 0;
        y = y || 0;
        iconX = _.defaultTo(iconX, x + 2);
        iconY = _.defaultTo(iconY, y + 2);

        this.drawIcon(item.iconIndex, { x: iconX, y: iconY });

        this.drawText(item.name, {
            x: x + iconBoxWidth,
            y,
            width: (options.width || 312) - iconBoxWidth,
            height: options.height,
            align: 'left',
            font: options.font,
            textColor: options.textColor,
            resetFont: options.resetFont,
            resetTextColor: options.resetTextColor
        });

        if (resetPaintOpacity) {
            this.resetPaintOpacity();
        }

        return true;
    }

    /**
     * Draws a line
     * Returns true if successfully completed
     *
     * @version 6.0.0
     *
     * @param {Object} [options=0] - Options for drawing
     *
     * @param {Number} [options.x1] - The X coordinate of start of the line
     * @param {Number | String} [options.y1] - The Y coordinate of start of the line or line number (String)
     * @param {Number} [options.x2] - The X coordinate of end of the line
     * @param {Number | String} [options.y2] - The Y coordinate of end of the line or line number (String)
     * @param {Point | Object} [options.pos1] - Position for drawing (ignores other parameters of position: x1, y1)
     * @param {Point | Object} [options.pos2] - Position for drawing (ignores other parameters of position: x2, y2)
     * @param {String} [options.color] - Line color
     * @param {Number} [options.lineWidth] - Line width
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.pos1.x] - The X coordinate of start of the line
     * @param {Number | String} [options.pos1.y] - The Y coordinate of start of the line or line number (String)
     *
     * @param {Number} [options.pos2.x] - The X coordinate of start of the line
     * @param {Number | String} [options.pos2.y] - The Y coordinate of start of the line or line number (String)
     *
     * @see DKTools.Base.prototype.hasBitmap
     *
     * @returns {Boolean} Successfully completed
     */
    drawLine(options = {}) {
        if (!this.hasBitmap()) {
            return false;
        }

        options = options || {};

        const { pos1, pos2, color, lineWidth, paintOpacity, resetPaintOpacity } = options;
        let { x1, y1, x2, y2 } = options;

        if (pos1 instanceof Object) {
            x1 = pos1.x;
            y1 = pos1.y;
        }

        if (pos2 instanceof Object) {
            x2 = pos2.x;
            y2 = pos2.y;
        }

        if (DKTools.Utils.isString(y1)) { // line number
            y1 = this.getLineHeight() * parseFloat(y1);
        }

        if (DKTools.Utils.isString(y2)) { // line number
            y2 = this.getLineHeight() * parseFloat(y2);
        }

        if (Number.isFinite(paintOpacity)) {
            this.changePaintOpacity(paintOpacity);
        }

        DKTools.Utils.Bitmap.drawLine(this.bitmap, x1 || 0, y1 || 0, x2 || 0, y2 || 0, color, lineWidth);

        if (resetPaintOpacity) {
            this.resetPaintOpacity();
        }

        return true;
    }

    /**
     * Draws a polygon
     * Returns true if successfully completed
     *
     * @version 6.0.0
     * @since 5.0.0
     *
     * @param {Object} options - Options for drawing
     *
     * @param {PIXI.Polygon | PIXI.Point[] | PIXI.ObservablePoint[] | Point[] | Object[]} [options.points] - Polygon or Points or objects with parameters
     * @param {String} [options.color] - Line color
     * @param {Number} [options.lineWidth] - Line width
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.points[].x] - The X coordinate
     * @param {Number | String} [options.points[].y] - The Y coordinate or line number (String)
     *
     * @see DKTools.Base.prototype.drawLine
     *
     * @returns {Boolean} Successfully completed
     */
    drawPolygon(options) {
        if (!this.hasBitmap()) {
            return false;
        }

        options = options || {};

        const { points, paintOpacity, resetPaintOpacity } = options;

        if (Number.isFinite(paintOpacity)) {
            this.changePaintOpacity(paintOpacity);
        }

        for (let i = 0; i < points.length - 1; i++) {
            const point = points[i], nextPoint = points[i + 1];

            this.drawLine({ ...options, pos1: point, pos2: nextPoint });
        }

        if (resetPaintOpacity) {
            this.resetPaintOpacity();
        }

        return true;
    }

    /**
     * Draws a text (special characters are supported)
     * Returns the width of the text
     *
     * @version 6.0.0
     *
     * @param {String} text - Text
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {Object} [options.wrap] - Options for text wrap
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [options.pos] - Position of the text (ignores other parameters of position: x, y)
     * @param {Number} [options.index] - Index of the text
     * @param {Number} [options.left] - Left padding
     *
     * @param {Number} [options.wrap.maxWidth] - Max width of a text line
     * @param {Number} [options.wrap.maxLines] - Max lines
     * @param {Boolean} [options.wrap.breakWords] - Breaks a words for the wrapping
     *
     * @param {Number} [options.pos.x] - The X coordinate
     * @param {Number | String} [options.pos.y] - The Y coordinate or line number (String)
     *
     * @see DKTools.Base.prototype.hasBitmap
     * @see DKTools.Base.prototype.textWrap
     * @see DKTools.Base.prototype.convertEscapeCharacters
     * @see DKTools.Base.prototype.calcTextHeight
     * @see DKTools.Base.prototype.processCharacter
     *
     * @returns {Number} Width of the text
     */
    drawTextEx(text, options = {}) {
        if (!this.hasBitmap() || text === '' || text == null) {
            return 0;
        }

        text = String(text);
        options = options || {};

        if (options.wrap instanceof Object) {
            text = this.textWrap(text, options.wrap);
        }

        const pos = options.pos;
        let { x, y, index, left } = options;

        if (pos instanceof Object) {
            x = pos.x;
            y = pos.y;
        }

        if (DKTools.Utils.isString(y)) { // line number
            y = this.getLineHeight() * parseFloat(y);
        }

        x     = _.defaultTo(x, 0);
        y     = _.defaultTo(y, 0);
        index = _.defaultTo(index, 0);
        left  = _.defaultTo(left, x);

        const textState = { x, y, index, left };

        textState.text = this.convertEscapeCharacters(text);
        textState.height = this.calcTextHeight(textState, false);

        while (textState.index < textState.text.length) {
            this.processCharacter(textState);
        }

        return textState.width || textState.x - x;
    }

    /**
     * Draws a window skin background
     * Returns true if successfully completed
     *
     * @since 6.0.0
     *
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {Number} [options.width] - Width of the rectangle
     * @param {Number | String} [options.height] - Height of the rectangle or number of lines (String)
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [options.pos] - Position for drawing (ignores other parameters of position: x, y)
     * @param {PIXI.Rectangle | Rectangle | Object} [options.rect] - Rectangle for drawing (ignores other parameters of position: x, y, width, height, pos)
     * @param {Number[]} [options.tone] - Tone of the window skin background
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.pos.x] - The X coordinate
     * @param {Number | String} [options.pos.y] - The Y coordinate or line number (String)
     *
     * @param {Number} [options.rect.x] - The X coordinate
     * @param {Number | String} [options.rect.y] - The Y coordinate or line number (String)
     * @param {Number} [options.rect.width] - Width of the rectangle
     * @param {Number | String} [options.rect.height] - Height of the rectangle or number of lines (String)
     *
     * @returns {Boolean} Successfully completed
     */
    drawWindowskinBack(options = {}) {
        if (!this.hasBitmap()) {
            return false;
        }

        options = options || {};

        const windowskin = ImageManager.loadSystem(this.standardWindowskin());

        if (!windowskin) {
            return false;
        }

        const p = 96;
        const { pos, rect } = options;
        let { x, y, width, height, tone } = options;

        if (pos instanceof Object) {
            x = pos.x;
            y = pos.y;
        }

        if (rect instanceof Object) {
            x = rect.x;
            y = rect.y;
            width = rect.width;
            height = rect.height;
        }

        try {
            tone = tone || $gameSystem.windowTone();
        } catch (e) { // eslint-disable-line no-empty
        }

        x = x || 0;
        y = y || 0;
        width = width || this.standardDrawingWidth();
        height = height || this.standardDrawingHeight();
        tone = tone || [0, 0, 0];

        const temp = new Bitmap(width, height);

        temp.blt(windowskin, 0, 0, p, p, 0, 0, width, height);

        for (let _y = 0; _y < height; _y += p) {
            for (let _x = 0; _x < width; _x += p) {
                temp.blt(windowskin, 0, p, p, p, _x, _y, p, p);
            }
        }

        temp.adjustTone(...tone);

        return this.drawBitmap(temp, { ...options, source: { width, height }, destination: { x, y } });
    }

    // E methods

    /**
     * Turns on the option
     *
     * @version 2.0.0
     *
     * @param {String} option - Name of the option
     *
     * @see DKTools.OptionManager.prototype.enableOption
     */
    enableOption(option) {
        this._optionManager.enableOption(option);
    }

    /**
     * Turns on the options
     *
     * @version 2.0.0
     *
     * @param {String[] | ...String} object - Names of the options
     *
     * @see DKTools.OptionManager.prototype.enableOptions
     */
    enableOptions(object) {
        this._optionManager.enableOptions.apply(this._optionManager, arguments);
    }

    // F methods

    /**
     * Fills the bitmap with color
     * Returns true if successfully completed
     *
     * @param {String} [color] - Color of fill
     *
     * @see DKTools.Base.prototype.fillRect
     *
     * @returns {Boolean} Successfully completed
     */
    fillAll(color) {
        return this.fillRect({ color });
    }

    /**
     * Draws an arc and fills it with color
     * Returns true if successfully completed
     *
     * @version 6.0.0
     *
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {Number} [options.radius] - Radius of the arc
     * @param {Number} [options.startAngle] - Starting angle
     * @param {Number} [options.endAngle] - End angle
     * @param {String} [options.color] - Fill color
     * @param {Boolean} [options.anticlockwise] - Draws an anticlockwise
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [options.pos] - Position of the arc (ignores other parameters of position: x, y)
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.pos.x] - The X coordinate
     * @param {Number | String} [options.pos.y] - The Y coordinate or line number (String)
     *
     * @see DKTools.Base.prototype.hasBitmap
     * @see DKTools.Utils.Bitmap.fillArc
     *
     * @returns {Boolean} Successfully completed
     */
    fillArc(options = {}) {
        if (!this.hasBitmap()) {
            return false;
        }

        options = options || {};

        const { pos, radius, color, lineWidth, anticlockwise, paintOpacity, resetPaintOpacity } = options;
        let { x, y, startAngle, endAngle } = options;

        if (pos instanceof Object) {
            x = pos.x;
            y = pos.y;
        }

        if (DKTools.Utils.isString(y)) { // line number
            y = this.getLineHeight() * parseFloat(y);
        }

        if (Number.isFinite(paintOpacity)) {
            this.changePaintOpacity(paintOpacity);
        }

        x = x || 0;
        y = y || 0;
        startAngle = startAngle || 0;
        endAngle = _.defaulTo(endAngle, Math.PI * 2);

        DKTools.Utils.Bitmap.fillArc(this.bitmap, x, y, radius, startAngle, endAngle, color, anticlockwise);

        if (resetPaintOpacity) {
            this.resetPaintOpacity();
        }

        return true;
    }

    /**
     * Fills a rectangle with color
     * Returns true if successfully completed
     *
     * @version 6.0.0
     *
     * @param {Object} [options={}] - Parameters for drawing
     *
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {Number} [options.width] - Width of the rectangle
     * @param {Number | String} [options.height] - Height of the rectangle or number of lines (String)
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [options.pos] - Position for drawing (ignores other parameters of position: x, y)
     * @param {PIXI.Rectangle | Rectangle | Object} [options.rect] - Rectangle for drawing (ignores other parameters of position: x, y, width, height, pos)
     * @param {String} [options.color] - Fill color
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.pos.x] - The X coordinate
     * @param {Number | String} [options.pos.y] - The Y coordinate or line number (String)
     *
     * @param {Number} [options.rect.x] - The X coordinate
     * @param {Number | String} [options.rect.y] - The Y coordinate or line number (String)
     * @param {Number} [options.rect.width] - Width of the rectangle
     * @param {Number | String} [options.rect.height] - Height of the rectangle or number of lines (String)
     *
     * @see DKTools.Base.prototype.hasBitmap
     * @see DKTools.Base.prototype.standardDrawingWidth
     * @see DKTools.Base.prototype.standardDrawingHeight
     *
     * @returns {Boolean} Successfully completed
     */
    fillRect(options = {}) {
        if (!this.hasBitmap()) {
            return false;
        }

        options = options || {};

        const { pos, rect, paintOpacity, resetPaintOpacity } = options;
        let { x, y, width, height, color } = options;

        if (pos instanceof Object) {
            x = pos.x;
            y = pos.y;
        }

        if (rect instanceof Object) {
            x = rect.x;
            y = rect.y;
            width = rect.width;
            height = rect.height;
        }

        if (DKTools.Utils.isString(y)) { // line number
            y = this.getLineHeight() * parseFloat(y);
        }

        if (DKTools.Utils.isString(height)) { // number of lines
            height = this.getLineHeight() * parseFloat(height);
        }

        if (Number.isFinite(paintOpacity)) {
            this.changePaintOpacity(paintOpacity);
        }

        x = x || 0;
        y = y || 0;
        width = width || this.standardDrawingWidth();
        height = height || this.standardDrawingHeight();
        color = color || 'white';

        this.bitmap.fillRect(x, y, width, height, color);

        if (resetPaintOpacity) {
            this.resetPaintOpacity();
        }

        return true;
    }

    /**
     * Returns the found animation
     *
     * @since 6.0.0
     *
     * @param {Number | String | *} id - ID of the animation
     * @param {String} [type] - Type of the animation
     *
     * @see DKTools.EventManager.prototype.findAnimation
     *
     * @returns {DKTools.Animation | undefined} Animation
     */
    findAnimation(id, type) {
        return this._eventManager.findAnimation(id, type);
    }

    /**
     * Returns the found event
     *
     * @since 6.0.0
     *
     * @param {Number | String | *} id - ID of the event
     * @param {String} [type] - Type of the event
     *
     * @see DKTools.EventManager.prototype.findEvent
     *
     * @returns {DKTools.Event | DKTools.Animation | undefined} Event
     */
    findEvent(id, type) {
        return this._eventManager.findEvent(id, type);
    }

    /**
     * Finishes the events
     *
     * @version 2.0.0
     *
     * @param {String} type - Type of the events
     * @param {Boolean} [forcedSuccess] - Forced success for the finish of the events
     *
     * @see DKTools.EventManager.prototype.finishEvents
     */
    finishEvents(type, forcedSuccess = false) {
        this._eventManager.finishEvents(type, forcedSuccess);
    }

    // G methods

    /**
     * Returns an array with the all animations or animations of a certain type
     *
     * @version 2.0.0
     *
     * @param {String} [type] - Type of animation
     *
     * @see DKTools.EventManager.prototype.getAnimations
     *
     * @returns {Array} Array with the animations
     */
    getAnimations(type) {
        return this._eventManager.getAnimations(type);
    }

    /**
     * Returns a child object by its ID
     *
     * @param {Number | String | *} id - ID of an object
     * @returns {* | undefined} Child object
     */
    getChildById(id) {
        return _.find(this.children, { id });
    }

    /**
     * Returns an index of the event in its container
     *
     * @version 2.0.0
     *
     * @param {DKTools.Event | DKTools.Animation} event - Event
     *
     * @see DKTools.EventManager.prototype.getEventIndex
     *
     * @returns {Number} Index of the event in its container
     */
    getEventIndex(event) {
        return this._eventManager.getEventIndex(event);
    }

    /**
     * Returns an array with the all events or events of a certain type
     *
     * @version 2.0.0
     *
     * @param {String} [type] - Type of the events
     *
     * @see DKTools.EventManager.prototype.getEvents
     *
     * @returns {Array} Array with the events
     */
    getEvents(type) {
        return this._eventManager.getEvents(type);
    }

    /**
     * Returns a container for the events by event
     *
     * @version 2.0.0
     *
     * @param {DKTools.Event | DKTools.Animation} event - Event
     *
     * @see DKTools.EventManager.prototype.getEventsContainer
     *
     * @returns {Array} Container for the events
     */
    getEventsContainer(event) {
        return this._eventManager.getEventsContainer(event);
    }

    /**
     * Returns a container for the events by event type
     *
     * @version 2.0.0
     *
     * @param {String} type - Type of the events
     *
     * @see DKTools.EventManager.prototype.getEventsContainerByType
     *
     * @returns {Array} Container for the events
     */
    getEventsContainerByType(type) {
        return this._eventManager.getEventsContainerByType(type);
    }

    /**
     * Returns the font height for the line height
     *
     * @param {Number} [lineHeight] - Line height
     *
     * @see DKTools.Base.prototype.getLineHeight
     * @see DKTools.Base.prototype.hasBitmap
     *
     * @returns {Number} Font height for the line height
     */
    getFontHeight(lineHeight) {
        let fontSize;

        lineHeight = lineHeight || this.getLineHeight();

        if (this.hasBitmap()) {
            fontSize = this.bitmap.fontSize;
        } else {
            fontSize = this._font.fontSize;
        }

        return lineHeight - (lineHeight - fontSize * 0.7) / 2;
    }

    /**
     * Returns the height of the line
     *
     * @returns {Number} Height of the line
     */
    getLineHeight() {
        try {
            return Window_Base.prototype.lineHeight.call(this);
        } catch (e) {
            return 36;
        }
    }

    /**
     * Returns a rectangle of the line
     *
     * @param {Number | String} line - Line number
     *
     * @see DKTools.Base.prototype.getLineHeight
     *
     * @returns {Rectangle} Rectangle of the line
     */
    getLineRect(line) {
        const lineHeight = this.getLineHeight();

        return new Rectangle(0, lineHeight * parseInt(line), this.realWidth, lineHeight);
    }

    /**
     * Returns the maximum of lines
     *
     * @see DKTools.Base.prototype.getLineHeight
     *
     * @returns {Number} Maximum of lines
     */
    getLines() {
        return this.realHeight / this.getLineHeight();
    }

    /**
     * Returns the minimum width of the bitmap
     *
     * @returns {Number} Minimum width of the bitmap
     */
    getMinWidth() {
        return 0;
    }

    /**
     * Returns the minimum height of the bitmap
     *
     * @returns {Number} Minimum height of the bitmap
     */
    getMinHeight() {
        return 0;
    }

    /**
     * Returns the minimum size of the bitmap
     *
     * @returns {{ width: Number, height: Number }} Minimum size of the bitmap
     */
    getMinSize() {
        return { width: this.getMinWidth(), height: this.getMinHeight() };
    }

    /**
     * Returns the real center of the object (not including scaling)
     *
     * @since 5.0.0
     *
     * @see DKTools.Base.prototype.getRealSize
     *
     * @returns {Point} Real center of the object (not including scaling)
     */
    getRealCenter() {
        const realSize = this.getRealSize();

        return new Point(realSize.width / 2, realSize.height / 2);
    }

    /**
     * Returns the center of the object (taking into account the scaling)
     *
     * @since 5.0.0
     *
     * @see DKTools.Base.prototype.getSize
     *
     * @returns {Point} Center of the object (taking into account the scaling)
     */
    getCenter() {
        const size = this.getSize();

        return new Point(size.width / 2, size.height / 2);
    }

    /**
     * Returns the real size of the object (not including scaling)
     *
     * @returns {{ width: Number, height: Number }} Real size of the object (not including scaling)
     */
    getRealSize() {
        return { width: this.realWidth, height: this.realHeight };
    }

    /**
     * Returns the size of the object (taking into account the scaling)
     *
     * @returns {{ width: Number, height: Number }} Size of the object (taking into account the scaling)
     */
    getSize() {
        return { width: this.width, height: this.height };
    }

    /**
     * Returns the height of the text
     *
     * @param {String | Number} text - Text
     * @param {Object} [wrap={}] - Wrap options
     *
     * @param {Number} [wrap.maxWidth] - Max width of a text line
     * @param {Number} [wrap.maxLines] - Max lines
     * @param {Boolean} [wrap.breakWords] - Breaks a words for the wrapping
     *
     * @see DKTools.Base.prototype.getTextLines
     * @see DKTools.Base.prototype.getLineHeight
     *
     * @returns {Number} Height of the text
     */
    getTextHeight(text, wrap = {}) {
        return this.getTextLines(text, wrap) * this.getLineHeight();
    }

    /**
     * Returns the height of the text (taking into account the font)
     *
     * @since 6.1.0
     *
     * @param {String | Number} text - Text
     * @param {Object} [wrap={}] - Wrap options
     *
     * @param {Number} [wrap.maxWidth] - Max width of a text line
     * @param {Number} [wrap.maxLines] - Max lines
     * @param {Boolean} [wrap.breakWords] - Breaks a words for the wrapping
     *
     * @see DKTools.Base.prototype.getTextLines
     * @see DKTools.Base.prototype.getFontHeight
     *
     * @returns {Number} Height of the text (taking into account the font)
     */
    getTextFontHeight(text, wrap = {}) {
        return this.getTextLines(text, wrap) * this.getFontHeight();
    }

    /**
     * Returns the height of the text (special characters are supported)
     *
     * @version 5.0.0
     *
     * @param {String} text - Text
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {Object} [options.wrap] - Wrap options
     *
     * @param {Number} [options.wrap.maxWidth] - Max width of a text line
     * @param {Number} [options.wrap.maxLines] - Max lines
     * @param {Boolean} [options.wrap.breakWords] - Breaks a words for the wrapping
     *
     * @see DKTools.Base.prototype.textWrap
     * @see DKTools.Base.prototype.calcTextHeight
     *
     * @returns {Number} Height of the text
     */
    getTextHeightEx(text, options = {}) {
        if (options instanceof Object && options.wrap instanceof Object) {
            text = this.textWrap(text, options.wrap);
        }

        return this.calcTextHeight({ text, index: 0 }, true);
    }

    /**
     * Returns the number of lines of the text
     *
     * @param {String | Number} text - Text
     * @param {Object} [wrap] - Wrap options
     *
     * @param {Number} [wrap.maxWidth] - Max width of a text line
     * @param {Number} [wrap.maxLines] - Max lines
     * @param {Boolean} [wrap.breakWords] - Breaks a words for the wrapping
     *
     * @see DKTools.Base.prototype.textWrap
     *
     * @returns {Number} Number of lines of the text
     */
    getTextLines(text, wrap) {
        if (wrap instanceof Object) {
            text = this.textWrap(text, wrap);
        }

        return text.split('\n').length;
    }

    /**
     * Returns the width of the text
     *
     * @param {String} text - Text
     * @returns {Number} Width of the text
     */
    getTextWidth(text) {
        if (!this.hasBitmap() || text === '' || text == null) {
            return 0;
        }

        return this.bitmap.measureTextWidth(String(text));
    }

    /**
     * Returns the width of the text (special characters are supported)
     *
     * @param {String} text - Text
     * @param {Object} [options={}] - Options for drawing
     *
     * @see DKTools.Base.prototype.drawTextEx
     *
     * @returns {Number} Width of the text
     */
    getTextWidthEx(text, options = {}) {
        try {
            return this.drawTextEx(text, { ...options, x: -Number.MAX_SAFE_INTEGER, y: -Number.MAX_SAFE_INTEGER });
        } catch(e) {
            return 0;
        }
    }

    /**
     * Returns the color from the window skin
     *
     * @param {Number} n - Color number
     *
     * @see DKTools.Base.prototype.hasWindowskin
     * @see DKTools.Base.prototype.standardWindowskin
     *
     * @returns {String} Color from the window skin
     */
    getWindowskinTextColor(n) {
        const px = 96 + (n % 8) * 12 + 6;
        const py = 144 + Math.floor(n / 8) * 12 + 6;

        if (this.hasWindowskin()) {
            return this.windowskin.getPixel(px, py);
        } else {
            const windowskin = ImageManager.loadSystem(this.standardWindowskin());

            return windowskin.getPixel(px, py);
        }
    }

    /**
     * Fills the bitmap with gradient
     * Returns true if successfully completed
     *
     * @version 6.0.0
     *
     * @param {String} [color1='black'] - First color
     * @param {String} [color2='white'] - Second color
     * @param {Boolean} [vertical=false] - Vertical gradient
     *
     * @see DKTools.Base.prototype.gradientFillRect
     *
     * @returns {Boolean} Successfully completed
     */
    gradientFillAll(color1 = 'black', color2 = 'white', vertical = false) {
        return this.gradientFillRect({ color1, color2, vertical });
    }

    /**
     * Fills a rectangle with a gradient
     * Returns true if successfully completed
     *
     * @version 6.0.0
     *
     * @param {Object} [options={}] - Parameters for drawing
     *
     * @param {String} [options.color1] - First color
     * @param {String} [options.color2] - Second color
     * @param {Boolean} [options.vertical] - Vertical gradient
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {Number} [options.width] - Width of the rectangle
     * @param {Number | String} [options.height] - Height of the rectangle or number of lines (String)
     * @param {PIXI.Rectangle | Rectangle | Object} [options.rect] - Rectangle for drawing (ignores other parameters of position: x, y, width, height)
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.rect.x] - The X coordinate
     * @param {Number | String} [options.rect.y] - The Y coordinate or line number (String)
     * @param {Number} [options.rect.width] - Width of the rectangle
     * @param {Number | String} [options.rect.height] - Height of the rectangle or number of lines (String)
     *
     * @see DKTools.Base.prototype.hasBitmap
     * @see DKTools.Base.prototype.standardDrawingWidth
     * @see DKTools.Base.prototype.standardDrawingHeight
     *
     * @returns {Boolean} Successfully completed
     */
    gradientFillRect(options = {}) {
        if (!this.hasBitmap()) {
            return false;
        }

        options = options || {};

        const { vertical, rect, paintOpacity, resetPaintOpacity } = options;
        let { color1, color2, x, y, width, height } = options;

        if (rect instanceof Object) {
            x = rect.x;
            y = rect.y;
            width = rect.width;
            height = rect.height;
        }

        if (DKTools.Utils.isString(y)) { // line number
            y = this.getLineHeight() * parseFloat(y);
        }

        if (DKTools.Utils.isString(height)) { // number of lines
            height = this.getLineHeight() * parseFloat(height);
        }

        x = x || 0;
        y = y || 0;
        width = width || this.standardDrawingWidth();
        height = height || this.standardDrawingHeight();
        color1 = color1 || 'black';
        color2 = color2 || 'white';

        if (Number.isFinite(paintOpacity)) {
            this.changePaintOpacity(paintOpacity);
        }

        this.bitmap.gradientFillRect(x, y, width, height, color1, color2, vertical);

        if (resetPaintOpacity) {
            this.resetPaintOpacity();
        }

        return true;
    }

    // H methods

    /**
     * Checks for existence of the animation in the object
     * Returns true if the animation exists
     *
     * @version 2.0.0
     *
     * @param {DKTools.Animation} animation - Animation
     *
     * @see DKTools.EventManager.prototype.hasAnimation
     *
     * @returns {Boolean} Animation exists
     */
    hasAnimation(animation) {
        return this._eventManager.hasAnimation(animation);
    }

    /**
     * Checks for existence of the animations of a certain type
     * Returns true if the animations exists
     *
     * @version 2.0.0
     *
     * @param {String} [type] - Type of the animations
     *
     * @see DKTools.EventManager.prototype.hasAnimations
     *
     * @returns {Boolean} Animations exists
     */
    hasAnimations(type) {
        return this._eventManager.hasAnimations(type);
    }

    /**
     * Returns true if the object has the bitmap
     *
     * @returns {Boolean} Object has the bitmap
     */
    hasBitmap() {
        return !!this.bitmap;
    }

    /**
     * Checks for existence of the event in the object
     * Returns true if the event exists
     *
     * @version 2.0.0
     *
     * @param {DKTools.Event | DKTools.Animation} event - Event
     *
     * @see DKTools.EventManager.prototype.hasEvent
     *
     * @returns {Boolean} Event exists
     */
    hasEvent(event) {
        return this._eventManager.hasEvent(event);
    }

    /**
     * Checks for existence of the events of a certain type
     * Returns true if the events exists
     *
     * @version 2.0.0
     *
     * @param {String} [type] - Type of the Events
     *
     * @see DKTools.EventManager.prototype.hasEvents
     *
     * @returns {Boolean} Events exists
     */
    hasEvents(type) {
        return this._eventManager.hasEvents(type);
    }

    /**
     * Returns true if the object has the mask
     *
     * @returns {Boolean} Object has the mask
     */
    hasMask() {
        return !!this.mask;
    }

    /**
     * Returns true if the object has a parent
     *
     * @since 5.0.0
     *
     * @returns {Boolean} Object has a parent
     */
    hasParent() {
        return !!this.parent;
    }

    /**
     * Returns true if the object has the window skin
     *
     * @returns {Boolean} Object has the window skin
     */
    hasWindowskin() {
        return !!this.windowskin;
    }

    /**
     * Hides the object
     *
     * @version 3.0.0
     *
     * @param {Boolean} [blockDeactivate=false] - Blocking deactivates of the object
     *
     * @see DKTools.Base.prototype.setVisible
     * @see DKTools.Base.prototype.updateHideEvents
     * @see DKTools.Base.prototype.deactivate
     */
    hide(blockDeactivate = false) {
        if (this.setVisible(false)) {
            this.updateHideEvents();
        }

        if (!blockDeactivate) {
            this.deactivate();
        }
    }

    // I methods

    /**
     * Returns true if the object is active
     *
     * @returns {Boolean} Object is active
     */
    isActive() {
        let node = this;

        while (node) {
            if (!node.visible) {
                return false;
            }

            node = node.parent;
        }

        return this.active;
    }

    /**
     * Returns true if the object is busy
     *
     * @see DKTools.Base.prototype.isReady
     *
     * @returns {Boolean} Object is busy
     */
    isBusy() {
        return !this.isReady();
    }

    /**
     * Returns true if the object is based on DKTools.Sprite.Button
     *
     * @returns {Boolean} Object is based on DKTools.Sprite.Button
     */
    isButton() {
        return this instanceof DKTools.Sprite.Button;
    }

    /**
     * Returns true if the object has a parent (if parameter is null or undefined)
     * Returns true if the object (parameter) is child of this object
     *
     * @version 2.0.0
     *
     * @param {Sprite | Window} [object] - Object
     *
     * @see DKTools.Base.prototype.hasParent
     *
     * @returns {Boolean} Object (parameter) is child of this object or object has a parent (if parameter is null or undefined)
     */
    isChild(object) {
        return object ? DKTools.Utils.Array.contains(this.children, object) : this.hasParent();
    }

    /**
     * Returns true if the object is based on DKTools.Sprite.Cursor
     *
     * @returns {Boolean} Object is based on DKTools.Sprite.Cursor
     */
    isCursor() {
        return this instanceof DKTools.Sprite.Cursor;
    }

    /**
     * Checks the events for pause
     * Returns the conjunction of pauses of the events
     *
     * @version 2.0.0
     *
     * @param {String} type - Type of the events
     *
     * @see DKTools.EventManager.prototype.isEventsPaused
     *
     * @returns {Boolean} Conjunction of pauses of the events
     */
    isEventsPaused(type) {
        return this._eventManager.isEventsPaused(type);
    }

    /**
     * Returns true if the coordinates is inside the object
     *
     * @param {Number} x - The X coordinate
     * @param {Number} y - The Y coordinate
     *
     * @returns {Boolean} Coordinates is inside the object
     */
    isInside(x, y) {
        return false;
    }

    /**
     * Returns true if the object is based on DKTools.Layout
     *
     * @returns {Boolean} Object is based on DKTools.Layout
     */
    isLayout() {
        return this instanceof DKTools.Layout;
    }

    /**
     * Returns true if the mouse is inside the object
     *
     * @see DKTools.Base.prototype.isInside
     *
     * @returns {Boolean} Mouse is inside the object
     */
    isMouseInside() {
        return this.isInside(TouchInput.mouseX, TouchInput.mouseY);
    }

    /**
     * Returns true if the option is disabled
     *
     * @version 2.0.0
     *
     * @param {String} option - Name of the option
     *
     * @see DKTools.OptionManager.prototype.isOptionDisabled
     *
     * @returns {Boolean} Option is disabled
     */
    isOptionDisabled(option) {
        return this._optionManager.isOptionDisabled(option);
    }

    /**
     * Returns true if the option is enabled
     *
     * @version 2.0.0
     *
     * @param {String} option - Name of the option
     *
     * @see DKTools.OptionManager.prototype.isOptionEnabled
     *
     * @returns {Boolean} Option is enabled
     */
    isOptionEnabled(option) {
        return this._optionManager.isOptionEnabled(option);
    }

    /**
     * Returns conjunction of the options
     *
     * @version 2.0.0
     *
     * @param {String[] | ...String} object - Names of the options
     *
     * @see DKTools.OptionManager.prototype.isOptionsDisabled
     *
     * @returns {Boolean} Conjunction of the options
     */
    isOptionsDisabled(object) {
        return this._optionManager.isOptionsDisabled.apply(this._optionManager, arguments);
    }

    /**
     * Returns conjunction of the options
     *
     * @version 2.0.0
     *
     * @param {String[] | ...String} object - Names of the options
     *
     * @see DKTools.OptionManager.prototype.isOptionsEnabled
     *
     * @returns {Boolean} Conjunction of the options
     */
    isOptionsEnabled(object) {
        return this._optionManager.isOptionsEnabled.apply(this._optionManager, arguments);
    }

    /**
     * Returns true if the coordinates is not inside the object
     *
     * @param {Number} x - The X coordinate
     * @param {Number} y - The Y coordinate
     *
     * @see DKTools.Base.prototype.isInside
     *
     * @returns {Boolean} Coordinates are not inside the object
     */
    isOutside(x, y) {
        return !this.isInside(x, y);
    }

    /**
     * Returns true if the object (parameter) is parent of this object
     *
     * @since 2.0.0
     * @param {Sprite | Window} object - Object
     * @returns {Boolean} Object (parameter) is parent of this object
     */
    isParent(object) {
        return !!object && this.parent === object;
    }

    /**
     * Returns true if the bitmap is ready
     *
     * @see DKTools.Base.prototype.hasBitmap
     *
     * @returns {Boolean} Bitmap is ready
     */
    isReady() {
        return this.hasBitmap() && this.bitmap.isReady();
    }

    /**
     * Returns true if the object is based on DKTools.Sprite.Selectable or DKTools.Window.Selectable
     *
     * @returns {Boolean} Object is based on DKTools.Sprite.Selectable or DKTools.Window.Selectable
     */
    isSelectable() {
        return this instanceof DKTools.Sprite.Selectable || this instanceof DKTools.Window.Selectable;
    }

    /**
     * Returns true if some option is enabled
     *
     * @since 2.0.0
     *
     * @see DKTools.OptionManager.prototype.isSomeOptionEnabled
     *
     * @returns {Boolean} Some option is enabled
     */
    isSomeOptionEnabled() {
        return this._optionManager.isSomeOptionEnabled();
    }

    /**
     * Returns disjunction of the options
     *
     * @since 2.0.0
     *
     * @param {String[] | ...String} object - Names of the options
     *
     * @see DKTools.OptionManager.prototype.isSomeOptionsDisabled
     *
     * @returns {Boolean} Disjunction of the options
     */
    isSomeOptionsDisabled(object) {
        return this._optionManager.isSomeOptionsDisabled.apply(this._optionManager, arguments);
    }

    /**
     * Returns disjunction of the options
     *
     * @since 2.0.0
     *
     * @param {String[] | ...String} object - Names of the options
     *
     * @see DKTools.OptionManager.prototype.isSomeOptionsEnabled
     *
     * @returns {Boolean} Disjunction of the options
     */
    isSomeOptionsEnabled(object) {
        return this._optionManager.isSomeOptionsEnabled.apply(this._optionManager, arguments);
    }

    /**
     * Returns true if the object is based on DKTools.Sprite
     *
     * @returns {Boolean} Object is based on DKTools.Sprite
     */
    isSprite() {
        return this instanceof DKTools.Sprite;
    }

    /**
     * Returns true if the object is started
     *
     * @returns {Boolean} Object is started
     */
    isStarted() {
        return this._started;
    }

    /**
     * Returns true if the object is based on DKTools.Viewport
     *
     * @returns {Boolean} Object is based on DKTools.Viewport
     */
    isViewport() {
        return this instanceof DKTools.Viewport;
    }

    /**
     * Returns true if the object is visible
     *
     * @version 2.0.0
     * @returns {Boolean} Object is visible
     */
    isVisible() {
        return this.visible;
    }

    /**
     * Returns true if the object is visible and active
     *
     * @see DKTools.Base.prototype.isVisible
     * @see DKTools.Base.prototype.isActive
     *
     * @returns {Boolean} Object is visible and active
     */
    isVisibleAndActive() {
        return this.isVisible() && this.isActive();
    }

    /**
     * Returns true if the object is based on DKTools.Window
     *
     * @returns {Boolean} Object is based on DKTools.Window
     */
    isWindow() {
        return this instanceof DKTools.Window;
    }

    /**
     * Calls the callback function for the child objects
     *
     * @param {Function} callback - Function for the child objects
     */
    iterateChildren(callback) {
        _.forEach(this.children, callback);
    }

    /**
     * Performs a callback function for the events
     *
     * @version 2.0.0
     *
     * @param {String} type - Type of the events
     * @param {Function} callback - Event processing function
     *
     * @see DKTools.EventManager.prototype.iterateEventsContainer
     */
    iterateEventsContainer(type, callback) {
        this._eventManager.iterateEventsContainer(type, callback);
    }

    // M methods

    /**
     * Makes the font size bigger
     */
    makeFontBigger() {
        if (this.hasBitmap() && this.bitmap.fontSize <= 96) {
            this.bitmap.fontSize += 12;
        }
    }

    /**
     * Makes the font size smaller
     */
    makeFontSmaller() {
        if (this.hasBitmap() && this.bitmap.fontSize >= 24) {
            this.bitmap.fontSize -= 12;
        }
    }

    /**
     * Moves the object
     *
     * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - The X coordinate or Point or object with parameters
     * @param {Number | String} [y] - The Y coordinate or line number (String) (if object is Number)
     *
     * @param {Number} [object.x] - The X coordinate
     * @param {Number | String} [object.y] - The Y coordinate or line number (String)
     *
     * @example
     * var pos = new Point(100, 100);
     * var sprite = new DKTools.Sprite();
     * sprite.move(pos);
     *
     * @example
     * var sprite = new DKTools.Sprite();
     * sprite.move(100, 100);
     *
     * @example
     * var sprite = new DKTools.Sprite();
     * sprite.move(100, '2');
     *
     * @see DKTools.Base.prototype.getLineHeight
     * @see DKTools.Utils.isString
     * @see DKTools.Utils.Point.toPoint
     */
    move(object, y) {
        if (object instanceof Object) {
            y = object.y;
        }

        if (DKTools.Utils.isString(y)) { // line number
            y = this.getLineHeight() * parseFloat(y);
        }

        const point = DKTools.Utils.Point.toPoint(object, y);

        this.position.copy(point);
    }

    /**
     * Moves the object (taking into account the anchor)
     *
     * @since 5.0.0
     *
     * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - The X coordinate or Point or object with parameters
     * @param {Number | String} [y] - The Y coordinate or line number (String) (if object is Number)
     *
     * @param {Number} [object.x] - The X coordinate
     * @param {Number | String} [object.y] - The Y coordinate or line number (String)
     *
     * @see DKTools.Base.prototype.getRealSize
     * @see DKTools.Base.prototype.move
     */
    moveWithAnchor(object, y) {
        if (object instanceof Object) {
            y = object.y;
        }

        if (DKTools.Utils.isString(y)) { // line number
            y = this.getLineHeight() * parseFloat(y);
        }

        const point = DKTools.Utils.Point.toPoint(object, y);
        const size = this.getRealSize();
        const anchor = this.anchor;

        this.move(point.x + anchor.x * size.width, point.y + anchor.y * size.height);
    }

    // O methods

    /**
     * @param {Object} textState
     */
    obtainEscapeCode(textState) {
        return Window_Base.prototype.obtainEscapeCode.call(this, textState);
    }

    /**
     * @param {Object} textState
     */
    obtainEscapeParam(textState) {
        return Window_Base.prototype.obtainEscapeParam.call(this, textState);
    }

    // P methods

    /**
     * Returns the name of the actor
     *
     * @param {Number} n - Number of the actor in the party
     * @returns {String} Name of the actor
     */
    partyMemberName(n) {
        const actor = n >= 1 ? $gameParty.members()[n - 1] : null;

        return actor ? actor.name() : '';
    }

    /**
     * Pauses the events
     *
     * @version 2.0.0
     *
     * @param {String} type - Type of the events
     * @param {Number} duration - Duration of pause
     *
     * @see DKTools.EventManager.prototype.pauseEvents
     */
    pauseEvents(type, duration) {
        this._eventManager.pauseEvents(type, duration);
    }

    /**
     * Processes all
     *
     * @version 2.0.0
     *
     * @see DKTools.Base.prototype.processMouse
     * @see DKTools.Base.prototype.processWheel
     */
    processAll() {
        this.processMouse();
        this.processWheel();
    }

    /**
     * @param {Object} textState - Text state
     *
     * @param {String} textState.text - Text
     * @param {Number} textState.index - Index
     */
    processCharacter(textState) {
        Window_Base.prototype.processCharacter.call(this, textState);
    }

    /**
     * @param {Number} iconIndex
     * @param {Object} textState
     */
    processDrawIcon(iconIndex, textState) {
        this.drawIcon(iconIndex, { x: textState.x + 2, y: textState.y + 2 });

        textState.x += Window_Base._iconWidth + 4;
    }

    /**
     * @param {String} code
     * @param {Object} textState
     */
    processEscapeCharacter(code, textState) {
        try {
            Window_Base.prototype.processEscapeCharacter.call(this, code, textState);
        } catch(e) {
            switch (code) {
                case 'C':
                    this.changeTextColor(this.getWindowskinTextColor(this.obtainEscapeParam(textState)));
                    break;
                case 'I':
                    this.processDrawIcon(this.obtainEscapeParam(textState), textState);
                    break;
                case '{':
                    this.makeFontBigger();
                    break;
                case '}':
                    this.makeFontSmaller();
                    break;
            }
        }
    }

    /**
     * Processes a mouse
     *
     * @since 2.0.0
     */
    processMouse() {
        if (this.isOptionEnabled('process-mouse') && this.isVisible() &&
            (this.isActive() || this.isOptionEnabled('process-mouse-ignore-active'))) {
                if (this.isMouseInside()) {
                    if (this._mouseEnterTime === 0) {
                        this.updateMouseEnterEvents();
                    }

                    this.updateMouseInsideEvents();

                    if (TouchInput.isMouseMoved()) {
                        this.updateMouseMoveEvents();
                    }

                    this._mouseEnterTime++;
                } else {
                    if (this._mouseEnterTime > 0) {
                        this.updateMouseLeaveEvents();
                    }

                    this.updateMouseOutsideEvents();
                    this._clearMouseEnterTime();
                }
        } else {
            this._clearMouseEnterTime();
        }
    }

    /**
     * @param {Object} textState
     *
     * @param {Number} [textState.width] - Width
     * @param {Number} textState.x - The X coordinate
     */
    processNewLine(textState) {
        if (!textState.width) {
            textState.width = textState.x;
        } else if (textState.width < textState.x) {
            textState.width = textState.x;
        }

        Window_Base.prototype.processNewLine.call(this, textState);
    }

    /**
     * @param {Object} textState
     */
    processNewPage(textState) {
        Window_Base.prototype.processNewPage.call(this, textState);
    }

    /**
     * @param {Object} textState - Text state
     *
     * @param {String} textState.text - Text
     * @param {Number} textState.index - Index
     * @param {Number} textState.x - The X coordinate
     * @param {Number} textState.y - The Y coordinate
     * @param {Number} textState.height - Height
     */
    processNormalCharacter(textState) {
        const c = textState.text[textState.index++];
        const w = this.getTextWidth(c);

        this.drawText(c, {
            align: 'left',
            pos: textState,
            width: w * 2,
            height: textState.height
        });

        textState.x += w;
    }

    /**
     * Processes a wheel
     *
     * @since 2.0.0
     */
    processWheel() {
        this._wheelX = TouchInput.wheelX;
        this._wheelY = TouchInput.wheelY;

        if (this._wheelX !== 0 || this._wheelY !== 0) {
            let type;

            if (this.isMouseInside()) {
                type = 'inside';
            } else {
                type = 'outside';
            }

            if (this._wheelX !== 0) {
                this.updateWheelXEvents(type);
            }

            if (this._wheelY !== 0) {
                this.updateWheelYEvents(type);
            }
        }
    }

    // R methods

    /**
     * Redraws all
     */
    redrawAll() {
        // to be overriden by plugins
    }

    /**
     * Updates and redraws all
     *
     * @version 1.1.0
     *
     * @see DKTools.Base.prototype.updateAll
     * @see DKTools.Base.prototype.canRedrawAll
     * @see DKTools.Base.prototype.redrawAll
     * @see DKTools.Base.prototype.updateRefreshAllEvents
     */
    refreshAll() {
        this.updateAll();

        if (this.canRedrawAll()) {
            this.redrawAll();
        }

        this.updateRefreshAllEvents();
    }

    /**
     * Removes all
     *
     * @version 2.0.0
     *
     * @see DKTools.Base.prototype.updateRemoveAllEvents
     */
    removeAll() {
        this.updateRemoveAllEvents();
    }

    /**
     * Removes children objects from processing
     *
     * @version 2.0.0
     *
     * @see DKTools.Base.prototype.updateRemoveAllChildrenEvents
     */
    removeAllChildren() {
        this.updateRemoveAllChildrenEvents();
    }

    /**
     * Removes the event from a container
     * Returns true if the event was removed
     *
     * @version 2.0.0
     *
     * @param {DKTools.Event | DKTools.Animation} event - Event
     *
     * @see DKTools.EventManager.prototype.removeEvent
     *
     * @returns {Boolean} Event was removed
     */
    removeEvent(event) {
        return this._eventManager.removeEvent(event);
    }

    /**
     * Removes the object from the parent object, if possible
     * Returns true if the deletion was successful
     *
     * @since 5.0.0
     *
     * @see DKTools.Base.prototype.hasParent
     *
     * @returns {Boolean} Deletion was successful
     */
    removeFromParent() {
        if (this.hasParent()) {
            this.parent.removeChild(this);

            return true;
        }

        return false;
    }

    /**
     * Removes the mask
     */
    removeMask() {
        this.mask = null;
    }

    /**
     * Removes the listener of change of the option
     *
     * @since 2.0.0
     *
     * @param {String} option - Name of the option
     * @param {Function} listener - Listener
     *
     * @see DKTools.OptionManager.prototype.removeOptionChangeListener
     */
    removeOptionChangeListener(option, listener) {
        this._optionManager.removeOptionChangeListener(option, listener);
    }

    /**
     * Resumes the events
     *
     * @version 2.0.0
     *
     * @param {String} type - Type of the events
     *
     * @see DKTools.EventManager.prototype.resumeEvents
     */
    resumeEvents(type) {
        this._eventManager.resumeEvents(type);
    }

    // S methods

    /**
     * Sets all data
     *
     * @private
     *
     * @see DKTools.Base.prototype._setupOptions
     * @see DKTools.Base.prototype._setupEvents
     * @see DKTools.Base.prototype._setupAnimations
     */
    _setupAll() {
        this._setupOptions();
        this._setupEvents();
        this._setupAnimations();
    }

    /**
     * Sets the animations
     *
     * @private
     */
    _setupAnimations() {
        // to be overriden by plugins
    }

    /**
     * Sets the events
     *
     * @private
     */
    _setupEvents() {
        // to be overriden by plugins
    }

    /**
     * Sets the options
     *
     * @private
     */
    _setupOptions() {
        // to be overriden by plugins
    }

    /**
     * Returns the standard activity of the object
     *
     * @returns {Boolean} Standard activity of the object
     */
    standardActive() {
        return true;
    }

    /**
     * Returns the standard height of the drawing
     *
     * @returns {Number | null} Standard height of the drawing or null
     */
    standardDrawingHeight() {
        if (this.hasBitmap()) {
            return this.bitmap.height;
        } else if (this.isSprite()) {
            return this._bitmapHeight;
        } else if (this.isWindow()) {
            return this.realHeight;
        }

        return null;
    }

    /**
     * Returns the standard width of the drawing
     *
     * @returns {Number | null} Standard width of the drawing or null
     */
    standardDrawingWidth() {
        if (this.hasBitmap()) {
            return this.bitmap.width;
        } else if (this.isSprite()) {
            return this._bitmapWidth;
        } else if (this.isWindow()) {
            return this.realWidth;
        }

        return null;
    }

    /**
     * Returns the standard pivot of the object
     *
     * @returns {Point} Standard pivot of the object
     */
    standardPivot() {
        return new Point(0, 0);
    }

    /**
     * Returns the standard rotation of the object
     *
     * @returns {Number} Standard rotation of the object
     */
    standardRotation() {
        return 0;
    }

    /**
     * Returns the standard scale of the object
     *
     * @returns {Point} Standard scale of the object
     */
    standardScale() {
        return new Point(1, 1);
    }

    /**
     * Returns the standard skew of the object
     *
     * @returns {Point} Standard skew of the object
     */
    standardSkew() {
        return new Point(0, 0);
    }

    /**
     * Returns the standard tint of the object
     *
     * @returns {Number} Standard tint of the object
     */
    standardTint() {
        return 0xFFFFFF;
    }

    /**
     * Returns the standard visibility of the object
     *
     * @returns {Boolean} Standard visibility of the object
     */
    standardVisible() {
        return true;
    }

    /**
     * Returns the standard window skin
     *
     * @returns {String} Standard window skin
     */
    standardWindowskin() {
        return 'Window';
    }

    /**
     * Sets all parameters
     *
     * @param {Object} [object={}] - Parameters
     *
     * @param {Number} [object.id] - The object ID
     * @param {Boolean} [object.visible] - Visibility of the object
     * @param {Boolean} [object.active] - Activity of the object
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.scale] - Scale of the object
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.pivot] - Pivot of the object
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.skew] - Skew of the object
     * @param {Number} [object.rotation] - Rotation of the object
     * @param {Number} [object.tint] - Tint of the object
     *
     * @param {Number} [object.scale.x] - Scale of the object on X axis
     * @param {Number} [object.scale.y] - Scale of the object on Y axis
     *
     * @param {Number} [object.pivot.x] - Pivot of the object on X axis
     * @param {Number} [object.pivot.y] - Pivot of the object on Y axis
     *
     * @param {Number} [object.skew.x] - Skew of the object on X axis
     * @param {Number} [object.skew.y] - Skew of the object on Y axis
     */
    setupAll(object = {}) {
        object = object || {};

        this.setupId(object.id);
        this.setupActive(object.active);
        this.setupVisible(object.visible);
        this.setupScale(object.scale);
        this.setupPivot(object.pivot);
        this.setupSkew(object.skew);
        this.setupRotation(object.rotation);
        this.setupTint(object.tint);
    }

    /**
     * Sets the activity of the object
     *
     * @param {Boolean} [active] - Activity of the object
     */
    setupActive(active) {
        /**
         * @type {Boolean}
         */
        this.active = _.defaultTo(active, this.standardActive());
    }

    /**
     * Sets the object ID
     *
     * @param {Number | String | null} [id] - The object ID
     */
    setupId(id) {
        /**
         * @private
         * @readonly
         * @type {Number | String | null}
         */
        this._id = _.defaultTo(id, null);
    }

    /**
     * Sets the pivot of the object
     *
     * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Pivot of the object on X axis or object with parameters
     * @param {Number} [y] - Pivot of the object on Y axis (if object is Number)
     *
     * @param {Number} [object.x] - Pivot of the object on X axis
     * @param {Number} [object.y] - Pivot of the object on Y axis
     */
    setupPivot(object, y) {
        const pivot = DKTools.Utils.Point.tryToPoint(object, y);
        const newPivot = Object.assign(this.standardPivot(), pivot);

        /**
         * @type {PIXI.ObservablePoint}
         */
        this.pivot.copy(newPivot);
    }

    /**
     * Sets the rotation of the object
     *
     * @param {Number} [rotation] - Rotation of the object
     */
    setupRotation(rotation) {
        /**
         * @type {Number}
         */
        this.rotation = _.defaultTo(rotation, this.standardRotation());
    }

    /**
     * Sets the scale of the object
     *
     * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Scale of the object on X axis or object width parameters
     * @param {Number} [y] - Scale of the object on Y axis (if object is Number)
     *
     * @param {Number} [object.x] - Scale of the object on X axis
     * @param {Number} [object.y] - Scale of the object on Y axis
     */
    setupScale(object, y) {
        const scale = DKTools.Utils.Point.tryToPoint(object, y);
        const newScale = Object.assign(this.standardScale(), scale);

        /**
         * @type {PIXI.ObservablePoint}
         */
        this.scale.copy(newScale);
    }

    /**
     * Sets the size of the object
     *
     * @param {Number | Object} [object] - Width of the object or object with parameters
     * @param {Number} [height] - Height of the object (if object is Object)
     *
     * @param {Number} [object.width] - Width of the object
     * @param {Number} [object.height] - Height of the object
     */
    setupSize(object, height) {
        // to be overriden by plugins
    }

    /**
     * Sets the skew of the object
     *
     * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Skew of the object on X axis or object with parameters
     * @param {Number} [y] - Skew of the object on Y axis (if object is Number)
     *
     * @param {Number} [object.x] - Skew of the object on X axis
     * @param {Number} [object.y] - Skew of the object on Y axis
     */
    setupSkew(object, y) {
        const skew = DKTools.Utils.Point.tryToPoint(object, y);
        const newSkew = Object.assign(this.standardSkew(), skew);

        /**
         * @type {PIXI.ObservablePoint}
         */
        this.skew.copy(newSkew);
    }

    /**
     * Sets the tint of the object
     *
     * @param {Number} [tint] - Tint of the object
     */
    setupTint(tint) {
        /**
         * @type {Number}
         */
        this.tint = _.defaultTo(tint, this.standardTint());
    }

    /**
     * Sets the visibility of the object
     *
     * @param {Boolean} [visible] - Visibility of the object
     */
    setupVisible(visible) {
        /**
         * @type {Boolean}
         */
        this.visible = _.defaultTo(visible, this.standardVisible());
    }

    /**
     * Changes all parameters
     * Returns the number of changed parameters
     *
     * @param {Object} [object={}] - Parameters
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     * @param {Boolean} [activate=false] - Activates the object
     *
     * @param {Number} [object.id] - The object ID
     * @param {Boolean} [object.visible] - Visibility of the object
     * @param {Boolean} [object.active] - Activity of the object
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.scale] - Scale of the object
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.pivot] - Pivot of the object
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.skew] - Skew of the object
     * @param {Number} [object.rotation] - Rotation of the object
     * @param {Number} [object.tint] - Tint of the object
     *
     * @param {Number} [object.scale.x] - Scale of the object on X axis
     * @param {Number} [object.scale.y] - Scale of the object on Y axis
     *
     * @param {Number} [object.pivot.x] - Pivot of the object on X axis
     * @param {Number} [object.pivot.y] - Pivot of the object on Y axis
     *
     * @param {Number} [object.skew.x] - Skew of the object on X axis
     * @param {Number} [object.skew.y] - Skew of the object on Y axis
     *
     * @returns {Number} Number of changed parameters
     */
    setAll(object = {}, blockStart = false, activate = false) {
        object = object || {};

        let changed = 0;

        if (this.setId(object.id)) {
            changed++;
        }

        if (this.setActive(object.active)) {
            changed++;
        }

        if (this.setVisible(object.visible)) {
            changed++;
        }

        if (this.setScale(object.scale)) {
            changed++;
        }

        if (this.setPivot(object.pivot)) {
            changed++;
        }

        if (this.setSkew(object.skew)) {
            changed++;
        }

        if (this.setRotation(object.rotation)) {
            changed++;
        }

        if (this.setTint(object.tint)) {
            changed++;
        }

        if (changed > 0) {
            if (!blockStart) {
                this.start();
            }

            if (activate) {
                this.activate();
            }
        }

        return changed;
    }

    /**
     * Changes the activity of the object
     *
     * @param {Boolean} [active] - Activity of the object
     * @returns {Boolean} Change occurred
     */
    setActive(active) {
        if (this.active === active) {
            return false;
        }

        const lastActive = this.active;

        this.setupActive(active);

        return this.active !== lastActive;
    }

    /**
     * Changes the object ID
     * Returns true if the change occurred
     *
     * @param {Number | String | null} [id] - The object ID
     * @returns {Boolean} Change occurred
     */
    setId(id) {
        if (this._id === id) {
            return false;
        }

        const lastId = this._id;

        this.setupId(id);

        return this._id !== lastId;
    }

    /**
     * Changes the pivot of the object
     * Returns true if the change occurred
     *
     * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Pivot of the object on X axis or object with parameters
     * @param {Number} [y] - Pivot of the object on Y axis (if object is Number)
     *
     * @param {Number} [object.x] - Pivot of the object on X axis
     * @param {Number} [object.y] - Pivot of the object on Y axis
     *
     * @returns {Boolean} Change occurred
     */
    setPivot(object, y) {
        const newPivot = DKTools.Utils.Point.toPoint(object, y);

        if (DKTools.Utils.Point.equals(this.pivot, newPivot)) {
            return false;
        }

        const lastPivot = DKTools.Utils.Point.clone(this.pivot);

        this.setupPivot(newPivot);

        return !DKTools.Utils.Point.equals(this.pivot, lastPivot);
    }

    /**
     * Changes the rotation of the object
     * Returns true if the change occurred
     *
     * @param {Number} [rotation] - Rotation of the object
     * @returns {Boolean} Change occurred
     */
    setRotation(rotation) {
        if (this.rotation === rotation) {
            return false;
        }

        const lastRotation = this.rotation;

        this.setupRotation(rotation);

        return this.rotation !== lastRotation;
    }

    /**
     * Changes the scale of the object
     * Returns true if the change occurred
     *
     * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Scale of the object on X axis or object with parameters
     * @param {Number} [y] - Scale of the object on Y axis (if object is Number)
     *
     * @param {Number} [object.x] - Scale of the object on X axis
     * @param {Number} [object.y] - Scale of the object on Y axis
     *
     * @returns {Boolean} Change occurred
     */
    setScale(object, y) {
        const newScale = DKTools.Utils.Point.toPoint(object, y);

        if (DKTools.Utils.Point.equals(this.scale, newScale)) {
            return false;
        }

        const lastScale = DKTools.Utils.Point.clone(this.scale);

        this.setupScale(newScale);

        return !DKTools.Utils.Point.equals(this.scale, lastScale);
    }

    /**
     * Changes the skew of the object
     * Returns true if the change occurred
     *
     * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Skew of the object on X axis or object with parameters
     * @param {Number} [y] - Skew of the object on Y axis (if object is Number)
     *
     * @param {Number} [object.x] - Skew of the object on X axis
     * @param {Number} [object.y] - Skew of the object on Y axis
     *
     * @returns {Boolean} Change occurred
     */
    setSkew(object, y) {
        const newSkew = DKTools.Utils.Point.toPoint(object, y);

        if (DKTools.Utils.Point.equals(this.skew, newSkew)) {
            return false;
        }

        const lastSkew = DKTools.Utils.Point.clone(this.skew);

        this.setupSkew(newSkew);

        return !DKTools.Utils.Point.equals(this.skew, lastSkew);
    }

    /**
     * Changes the tint of the object
     * Returns true if the change occurred
     *
     * @param {Number} [tint] - Tint of the object
     * @returns {Boolean} Change occurred
     */
    setTint(tint) {
        if (this.tint === tint) {
            return false;
        }

        const lastTint = this.tint;

        this.setupTint(tint);

        return this.tint !== lastTint;
    }

    /**
     * Changes the visibility of the object
     * Returns true if the change occurred
     *
     * @param {Boolean} [visible] - Visibility of the object
     * @returns {Boolean} Change occurred
     */
    setVisible(visible) {
        if (this.visible === visible) {
            return false;
        }

        const lastVisible = this.visible;

        this.setupVisible(visible);

        return this.visible !== lastVisible;
    }

    /**
     * Shows the object
     *
     * @version 3.0.0
     *
     * @param {Boolean} [activate=false] - Activates the object
     *
     * @see DKTools.Base.prototype.setVisible
     * @see DKTools.Base.prototype.updateShowEvents
     * @see DKTools.Base.prototype.activate
     */
    show(activate = false) {
        if (this.setVisible(true)) {
            this.updateShowEvents();
        }

        if (activate) {
            this.activate();
        }
    }

    /**
     * Starts the object
     *
     * @version 1.1.0
     *
     * @param {Boolean} [activate] - Activates the object
     *
     * @see DKTools.Base.prototype.removeAllChildren
     * @see DKTools.Base.prototype.terminateAll
     * @see DKTools.Base.prototype.removeAll
     * @see DKTools.Base.prototype.checkAll
     * @see DKTools.Base.prototype.createAll
     * @see DKTools.Base.prototype.addAllChildren
     * @see DKTools.Base.prototype.startAll
     * @see DKTools.Base.prototype.refreshAll
     * @see DKTools.Base.prototype.updateStartEvents
     * @see DKTools.Base.prototype.activate
     */
    start(activate = false) {
        this._started = true;

        this.removeAllChildren();
        this.terminateAll();
        this.removeAll();
        this.checkAll();
        this.createAll();
        this.startAll();
        this.addAllChildren();
        this.refreshAll();
        this.updateStartEvents();

        if (activate) {
            this.activate();
        }
    }

    /**
     * Starts all
     *
     * @version 2.0.0
     *
     * @see DKTools.Base.prototype.updateStartAllEvents
     */
    startAll() {
        this.updateStartAllEvents();
    }

    /**
     * Stops the events
     *
     * @version 2.0.0
     *
     * @param {String} type - Type of the events
     * @param {Boolean} [forcedSuccess] - Forced success for the finish of the events
     *
     * @see DKTools.EventManager.prototype.stopEvents
     */
    stopEvents(type, forcedSuccess = false) {
        this._eventManager.stopEvents(type, forcedSuccess);
    }

    /**
     * Draws an arc without fill
     * Returns true if successfully completed
     *
     * @version 6.0.0
     *
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {Number} [options.radius] - Radius of arc
     * @param {Number} [options.startAngle] - Starting angle
     * @param {Number} [options.endAngle] - End angle
     * @param {String} [options.color] - Line color
     * @param {Number} [options.lineWidth] - Line width
     * @param {Boolean} [options.anticlockwise] - Draws an anticlockwise
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [options.pos] - Position of arc (ignores other parameters of position: x, y)
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.pos.x] - The X coordinate
     * @param {Number | String} [options.pos.y] - The Y coordinate or line number (String)
     *
     * @see DKTools.Base.prototype.hasBitmap
     *
     * @returns {Boolean} Successfully completed
     */
    strokeArc(options = {}) {
        if (!this.hasBitmap()) {
            return false;
        }

        options = options || {};

        const { pos, radius,  color, lineWidth, anticlockwise, paintOpacity, resetPaintOpacity } = options;
        let { x, y, startAngle, endAngle } = options;

        if (pos instanceof Object) {
            x = pos.x;
            y = pos.y;
        }

        if (DKTools.Utils.isString(y)) { // line number
            y = this.getLineHeight() * parseFloat(y);
        }

        if (Number.isFinite(paintOpacity)) {
            this.changePaintOpacity(paintOpacity);
        }

        x = x || 0;
        y = y || 0;
        startAngle = startAngle || 0;
        endAngle = _.defaulTo(endAngle, Math.PI * 2);

        DKTools.Utils.Bitmap.strokeArc(this.bitmap, x, y, radius, startAngle, endAngle, color, lineWidth, anticlockwise);

        if (resetPaintOpacity) {
            this.resetPaintOpacity();
        }

        return true;
    }

    /**
     * Draws a rectangle without fill
     * Returns true if successfully completed
     *
     * @version 6.0.0
     *
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {Number} [options.width] - Width of the rectangle
     * @param {Number | String} [options.height] - Height of the rectangle or number of lines (String)
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [options.pos] - Position for drawing (ignores other parameters of position: x, y)
     * @param {PIXI.Rectangle | Rectangle | Object} [options.rect] - Rectangle for drawing (ignores other parameters of position: x, y, width, height, pos)
     * @param {String} [options.color] - Fill color
     * @param {Number} [options.lineWidth] - Line width
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.pos.x] - The X coordinate
     * @param {Number | String} [options.pos.y] - The Y coordinate or line number (String)
     *
     * @param {Number} [options.rect.x] - The X coordinate
     * @param {Number | String} [options.rect.y] - The Y coordinate or line number (String)
     * @param {Number} [options.rect.width] - Width of the rectangle
     * @param {Number | String} [options.rect.height] - Height of the rectangle or number of lines (String)
     *
     * @see DKTools.Base.prototype.hasBitmap
     * @see DKTools.Base.prototype.standardDrawingWidth
     * @see DKTools.Base.prototype.standardDrawingHeight
     *
     * @returns {Boolean} Successfully completed
     */
    strokeRect(options = {}) {
        if (!this.hasBitmap()) {
            return false;
        }

        options = options || {};

        const { pos, rect, lineWidth, paintOpacity, resetPaintOpacity } = options;
        let { x, y, width, height, color } = options;

        if (pos instanceof Object) {
            x = pos.x;
            y = pox.y;
        }

        if (rect instanceof Object) {
            x = rect.x;
            y = rect.y;
            width = rect.width;
            height = rect.height;
        }

        if (DKTools.Utils.isString(y)) { // line number
            y = this.getLineHeight() * parseFloat(y);
        }

        if (DKTools.Utils.isString(height)) { // number of lines
            height = this.getLineHeight() * parseFloat(height);
        }

        if (Number.isFinite(paintOpacity)) {
            this.changePaintOpacity(paintOpacity);
        }

        x = x || 0;
        y = y || 0;
        width = width || this.standardDrawingWidth();
        height = height || this.standardDrawingHeight();
        color = color || 'white';

        DKTools.Utils.Bitmap.strokeRect(this.bitmap, x, y, width, height, color, lineWidth);

        if (resetPaintOpacity) {
            this.resetPaintOpacity();
        }

        return true;
    }

    /**
     * Switches the option
     *
     * @version 2.0.0
     *
     * @param {String} option - Name of the option
     *
     * @see DKTools.OptionManager.prototype.switchOption
     */
    switchOption(option) {
        this._optionManager.switchOption(option);
    }

    /**
     * Switches the options
     *
     * @version 2.0.0
     *
     * @param {String[] | ...String} object - Names of the options
     *
     * @see DKTools.OptionManager.prototype.switchOptions
     */
    switchOptions(object) {
        this._optionManager.switchOptions.apply(this._optionManager, arguments);
    }

    // T methods

    /**
     * Terminates the object
     */
    terminate() {
        // to be overriden by plugins
    }

    /**
     * Terminates all
     *
     * @version 2.0.0
     *
     * @see DKTools.Base.prototype.updateTerminateAllEvents
     */
    terminateAll() {
        this.updateTerminateAllEvents();
    }

    /**
     * Makes a text wrap
     *
     * @param {String} text - Text
     * @param {Object} [options={}] - Wrap options
     *
     * @param {Number} [options.maxWidth] - Max width of a text line
     * @param {Number} [options.maxLines] - Max lines
     * @param {Boolean} [options.breakWords] - Breaks a words for the wrapping
     *
     * @see DKTools.Base.prototype.hasBitmap
     * @see DKTools.Base.prototype.getTextWidth
     *
     * @returns {String} Wrapped text
     */
    textWrap(text, options = {}) {
        if (!this.hasBitmap() || text === '' || text == null) {
            return '';
        }

        text = String(text);
        options = options || {};

        const lines = text.split('\n');
        const maxWidth = options.maxWidth || this.bitmap.width;
        const spaceWidth = this.getTextWidth(' ');

        let result = '', newLines = 1;

        for (let i = 0; i < lines.length; i++) {
            const words = lines[i].split(' ');
            let spaceLeft = maxWidth;

            for (let j = 0; j < words.length; j++) {
                const word = words[j];
                const wordWidth = this.getTextWidth(word);

                if (options.breakWords && wordWidth > maxWidth) {
                    const characters = word.split('');

                    for (let c = 0; c < characters.length; c++) {
                        const characterWidth = this.getTextWidth(characters[c]);

                        if (characterWidth > spaceLeft) {
                            result += '\n' + characters[c];
                            spaceLeft = maxWidth - characterWidth;
                        } else {
                            if (c === 0) {
                                result += ' ';
                            }

                            result += characters[c];
                            spaceLeft -= characterWidth;
                        }
                    }
                } else {
                    const wordWidthWithSpace = wordWidth + spaceWidth;

                    if (j === 0 || wordWidthWithSpace > spaceLeft) {
                        if (j > 0) {
                            if (options.maxLines === newLines) {
                                return result;
                            }

                            result += '\n';
                            newLines++;
                        }

                        result += word;
                        spaceLeft = maxWidth - wordWidth;
                    } else {
                        spaceLeft -= wordWidthWithSpace;
                        result += ' ' + word;
                    }
                }
            }

            if (i < lines.length - 1) {
                result += '\n';
            }
        }

        return result;
    }

    // U methods

    /**
     * Updates the object
     *
     * @see DKTools.Base.prototype.updateChildren
     * @see DKTools.Base.prototype.processAll
     * @see DKTools.Base.prototype.updateEvents
     */
    update() {
        this.updateChildren();
        this.processAll();
        this.updateEvents();
    }

    /**
     * Updates all
     *
     * @version 1.1.0
     *
     * @see DKTools.Base.prototype.updateOpacity
     * @see DKTools.Base.prototype.updateUpdateAllEvents
     */
    updateAll() {
        this.updateOpacity();
        this.updateUpdateAllEvents();
    }

    /**
     * Updates the events with type: activate
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateActivateEvents() {
        this.updateEventsContainer('activate');
    }

    /**
     * Updates the events with type: add-all-children
     *
     * @version 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateAddAllChildrenEvents() {
        this.updateEventsContainer('add-all-children');
    }

    /**
     * Updates the events with type: check-all
     *
     * @version 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateCheckAllEvents() {
        this.updateEventsContainer('check-all');
    }

    /**
     * Updates the child object
     *
     * @param {*} child - Child object
     */
    updateChild(child) {
        if (child && DKTools.Utils.isFunction(child.update)) {
            child.update();
        }
    }

    /**
     * Updates the child objects
     */
    updateChildren() {
        this.iterateChildren(this.updateChild);
    }

    /**
     * Updates the events with type: create-all
     *
     * @version 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateCreateAllEvents() {
        this.updateEventsContainer('create-all');
    }

    /**
     * Updates the events with type: deactivate
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateDeactivateEvents() {
        this.updateEventsContainer('deactivate');
    }

    /**
     * Updates the event
     *
     * @param {DKTools.Event | DKTools.Animation} event - Event
     *
     * @see DKTools.EventManager.prototype.updateEvent
     */
    updateEvent(event) {
        this._eventManager.updateEvent(event);
    }

    /**
     * Updates the events
     *
     * @version 2.0.0
     *
     * @see DKTools.EventManager.prototype.update
     * @see DKTools.Base.protoype.updateReadyEvents
     * @see DKTools.Base.protoype.updateUpdateEvents
     * @see DKTools.Base.protoype.updateQueueEvents
     * @see DKTools.Base.protoype.updateWheelEvents
     */
    updateEvents() {
        this._eventManager.update();
        this.updateReadyEvents();
        this.updateUpdateEvents();
        this.updateQueueEvents();
    }

    /**
     * Updates the events from container
     *
     * @version 2.0.0
     *
     * @param {String} type - Type of the events
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateEventsContainer(type) {
        this._eventManager.updateEventsContainer(type);
    }

    /**
     * Updates the events with type: hide
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateHideEvents() {
        this.updateEventsContainer('hide');
    }

    /**
     * Updates input data
     *
     * @see SceneManager.updateInputData
     */
    updateInputData() {
        SceneManager.updateInputData();
    }

    /**
     * Updates the events with type: mouse-enter
     *
     * @version 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateMouseEnterEvents() {
        this.updateEventsContainer('mouse-enter');
    }

    /**
     * Updates the events with type: mouse-inside
     *
     * @since 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateMouseInsideEvents() {
        this.updateEventsContainer('mouse-inside');
    }

    /**
     * Updates the events with type: mouse-leave
     *
     * @version 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateMouseLeaveEvents() {
        this.updateEventsContainer('mouse-leave');
    }

    /**
     * Updates the events with type: mouse-move
     *
     * @since 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateMouseMoveEvents() {
        this.updateEventsContainer('mouse-move');
    }

    /**
     * Updates the events with type: mouse-outside
     *
     * @since 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateMouseOutsideEvents() {
        this.updateEventsContainer('mouse-outside');
    }

    /**
     * Updates the opacity of the object
     */
    updateOpacity() {
        // to be overriden by plugins
    }

    /**
     * Updates the events with type: queue
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateQueueEvents() {
        const container = this.getEventsContainerByType('queue');
        const event = container[0];

        this.updateEvent(event);
    }

    /**
     * Updates the events with type: ready
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateReadyEvents() {
        if (this.isReady()) {
            this.updateEventsContainer('ready');
        }
    }

    /**
     * Updates the events with type: redraw-all
     *
     * @version 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateRedrawAllEvents() {
        this.updateEventsContainer('redraw-all');
    }

    /**
     * Updates the events with type: refresh-all
     *
     * @version 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateRefreshAllEvents() {
        this.updateEventsContainer('refresh-all');
    }

    /**
     * Updates the events with type: remove-all-children
     *
     * @version 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateRemoveAllChildrenEvents() {
        this.updateEventsContainer('remove-all-children');
    }

    /**
     * Updates the events with type: remove-all
     *
     * @version 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateRemoveAllEvents() {
        this.updateEventsContainer('remove-all');
    }

    /**
     * Updates the events with type: show
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateShowEvents() {
        this.updateEventsContainer('show');
    }

    /**
     * Updates the events with type: start-all
     *
     * @version 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateStartAllEvents() {
        this.updateEventsContainer('start-all');
    }

    /**
     * Updates the events with type: start
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateStartEvents() {
        if (this.isStarted()) {
            this.updateEventsContainer('start');
        }
    }

    /**
     * Updates the events with type: terminate-all-children
     *
     * @version 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateTerminateAllEvents() {
        this.updateEventsContainer('terminate-all-children');
    }

    /**
     * Updates the events with type: update-all
     *
     * @version 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateUpdateAllEvents() {
        this.updateEventsContainer('update-all');
    }

    /**
     * Updates the events with type: update
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateUpdateEvents() {
        this.updateEventsContainer('update');
    }

    /**
     * Updates the events with type: wheel-X-inside or wheel-X-outside
     *
     * @version 2.0.0
     *
     * @param {String} type Type of the wheel event (inside or outside)
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateWheelXEvents(type) {
        this.updateEventsContainer('wheel-X-' + type);
    }

    /**
     * Updates the events with type: wheel-Y-inside or wheel-Y-outside
     *
     * @version 2.0.0
     *
     * @param {String} type - Type of the wheel event (inside or outside)
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateWheelYEvents(type) {
        this.updateEventsContainer('wheel-Y-' + type);
    }

};

// properties

Object.defineProperties(DKTools.Base.prototype, {

    /**
     * The object ID
     *
     * @readonly
     * @type {Number | String | null}
     * @memberof DKTools.Base.prototype
     */
    id : {
        get: function() {
            return this._id;
        },
        configurable: true
    },

    /**
     * The X coordinate of mouse inside the object
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Base.prototype
     */
    mouseX : {
        get: function() {
            return this.canvasToLocalX(TouchInput.mouseX);
        },
        configurable: true
    },

    /**
     * The Y coordinate of mouse inside the object
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Base.prototype
     */
    mouseY : {
        get: function() {
            return this.canvasToLocalY(TouchInput.mouseY);
        },
        configurable: true
    },

    /**
     * Number of pixels scrolling mouse on X axis
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Base.prototype
     */
    wheelX: {
        get: function() {
            return this._wheelX;
        },
        configurable: true
    },

    /**
     * Number of pixels scrolling mouse on Y axis
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Base.prototype
     */
    wheelY: {
        get: function() {
            return this._wheelY;
        },
        configurable: true
    },

    /**
     * Time of mouse enter inside the object
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Base.prototype
     */
    mouseEnterTime: {
        get: function() {
            return this._mouseEnterTime;
        },
        configurable: true
    }

});




