//===========================================================================
// DKTools.Base
//===========================================================================

/**
 * Abstract base class for sprite and window
 *
 * @class
 * @abstract
 * @mixin
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
 */
DKTools.Base = class {

    constructor() {
        throw new Error('This is an abstract class!');
    }

    // properties

    /**
     * Gets the coordinates of mouse inside the object
     * @since 8.0.0
     * @return {PIXI.Point} Coordinates of mouse inside the object
     */
    get mouse() {
        return this.getLocalPoint(TouchInput.mouseX, TouchInput.mouseY);
    }

    /**
     * Gets time of mouse enter inside the object
     * @return {Number} Time of mouse enter inside the object
     */
    get mouseEnterTime() {
        return this._mouseEnterTime;
    }

    /**
     * Gets the coordinates of touch inside the object
     * @since 9.0.0
     * @return {Point} Coordinates of touch inside the object
     */
    get touch() {
        return this.getLocalPoint(TouchInput.x, TouchInput.y);
    }

    /**
     * Gets number of pixels scrolling mouse on X axis
     * @return {Number} Number of pixels scrolling mouse on X axis
     */
    get wheelX() {
        return this._wheelX;
    }

    /**
     * Gets number of pixels scrolling mouse on Y axis
     * @return {Number} Number of pixels scrolling mouse on Y axis
     */
    get wheelY() {
        return this._wheelY;
    }

    /**
     * Gets events manager
     * @since 9.0.0
     * @return {DKTools.EventsManager} Events manager
     */
    get eventsManager() {
        return this._eventsManager;
    }

    // initialize methods

    /**
     * Initializes a class object
     *
     * @param {Number | Object | *} [object] - The X coordinate or Graphics or object with parameters
     * @param {Number} [y] - The Y coordinate (if object is Number)
     * @param {Number} [width] - The width of the object (if object is Number)
     * @param {Number | String} [height] - The height of the object (if object is Number)
     *
     * @param {Number} [object.x] - The X coordinate
     * @param {Number} [object.y] - The Y coordinate
     * @param {Number} [object.width] - The width of the object
     * @param {Number | String} [object.height] - The height of the object
     *
     * @example
     * const sprite = new DKTools.Sprite(0, 0, 100, 100);
     * => x = 0; y = 0; width = 100; height = 100;
     *
     * @example
     * const sprite = new DKTools.Sprite(Graphics);
     * => x = 0; y = 0; width = Graphics.boxWidth; height = Graphic.boxHeight;
     *
     * @example
     * const sprite = new DKTools.Sprite({ x: 0, y: 0, width: 100, height: 100 });
     * => x = 0; y = 0; width = 100; height = 100;
     */
    initialize(object, y, width, height) {
        let x;

        if (object instanceof Object) {
            x = object.x;
            y = object.y;
            width = object.width;
            height = object.height;
        } else if (Number.isFinite(object)) {
            x = object;
        }

        this._clearAll();
        this._createEventsManager();

        this.move(x, y);
        this.setupSize(width, height);
        this.setupAll();
    }

    // A methods

    /**
     * Activates the object
     */
    activate() {
        if (this.setActive(true)) {
            this.updateActivateEvents();
        }
    }

    /**
     * Returns the name of the actor
     * @param {Number} n - Number of the actor
     * @return {String} Name of the actor
     */
    actorName(n) {
        return Window_Base.prototype.actorName.apply(this, arguments);
    }

    /**
     * Adds the animation
     * @version 10.0.0
     * @param {DKTools.Animation} animation - Animation to add
     * @return {DKTools.Animation} Animation
     */
    addAnimation(animation) {
        return this._eventsManager.addAnimation(animation);
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
     * @example
     * const sprite = new DKTools.Sprite();
     *
     * sprite.addEvent({
     *      type: 'update',
     *      onUpdate: () => {
     *          // code
     *      }
     * });
     *
     * @example
     * const sprite = new DKTools.Sprite();
     *
     * sprite.addEvent({
     *      type: 'update',
     *      repeats: 0,
     *      repeatTime: 60,
     *      onSuccess: () => {
     *          // code
     *      }
     * });
     *
     * @return {DKTools.Event} Added event
     */
    addEvent(object) {
        return this._eventsManager.addEvent(object);
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
     * @return {DKTools.Event} Added event
     */
    addOneTimeEvent(object) {
        return this._eventsManager.addOneTimeEvent(object);
    }

    /**
     * Adds the filter
     * @since 6.2.0
     * @param {*} filter - Filter
     */
    addFilter(filter) {
        if (!filter) {
            return;
        }

        // pixi v4 property returns sliced array
        const filters = this.filters;

        if (filters && filters.length > 0) {
            filters.push(filter);

            this.filters = filters;
        } else {
            this.filters = [filter];
        }
    }

    // С methods

    /**
     * Clears all data
     * @version 9.2.0
     * @private
     */
    _clearAll() {
        this._mouseEnterTime = 0;
        this._wheelX = 0;
        this._wheelY = 0;
    }

    /**
     * Creates the event manager
     * @since 9.0.0
     * @private
     */
    _createEventsManager() {
        if (!this._eventsManager) {
            this._eventsManager = new DKTools.EventsManager(this);
        }
    }

    /**
     * @param {Object} textState - Text state
     * @param {Boolean} [all=false] - All lines
     * @return {Number} Text height
     */
    calcTextHeight(textState, all = false) {
        if (!this.hasBitmap() || !textState) {
            return 0;
        }

        return Window_Base.prototype.calcTextHeight.apply(this, arguments);
    }

    /**
     * Returns true if the object can be updated and redrawn
     * @since 1.1.0
     * @return {Boolean} Object can be updated and redrawn
     */
    canRedrawAll() {
        return this.hasBitmap();
    }

    /**
     * Checks all
     * @version 10.0.0
     */
    checkAll() {
        this.updateCheckAllEvents();
    }

    /**
     * Clears the bitmap
     * Returns true if successfully completed
     * @return {Boolean} Successfully completed
     */
    clear() {
        return this.clearRect();
    }

    /**
     * Clears a rectangle
     * Returns true if successfully completed
     *
     * @version 6.0.0
     *
     * @param {Number | Rectangle | Object} [object] - The X coordinate or Rectangle or object with parameters
     * @param {Number | String} [y] - The Y coordinate or line number (String) (if object is Number)
     * @param {Number} [width] - Width of the rectangle (if object is Number)
     * @param {Number | String} [height] - Height of the rectangle or number of lines (String) (if object is Number)
     *
     * @param {Number} [object.x] - The X coordinate
     * @param {Number | String} [object.y] - The Y coordinate or line number (String)
     * @param {Number} [object.width] - Width of the rectangle
     * @param {Number | String} [object.height] - Height of the rectangle or number of lines (String)
     *
     * @return {Boolean} Successfully completed
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
            y = this.lineHeight() * parseFloat(y);
        }

        if (DKTools.Utils.isString(height)) { // number of lines
            y = this.lineHeight() * parseFloat(height);
        }

        x = x || 0;
        y = y || 0;
        width = width || this.standardDrawingWidth();
        height = height || this.standardDrawingHeight();

        this.bitmap.clearRect(x, y, width, height);

        return true;
    }

    /**
     * Converts the escape characters
     * Returns the text with converted the escaped characters
     * @param {String} text - Text
     * @return {String} Text with converted the escaped characters
     */
    convertEscapeCharacters(text) {
        try {
            return Window_Base.prototype.convertEscapeCharacters.apply(this, arguments);
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
     * @version 2.0.0
     */
    createAll() {
        this.updateCreateAllEvents();
    }

    // D methods

    /**
     * Deactivates the object
     */
    deactivate() {
        if (this.setActive(false)) {
            this.updateDeactivateEvents();
        }
    }

    /**
     * Draws all
     * @version 10.0.0
     */
    drawAll() {
        this.updateDrawAllEvents();
    }

    /**
     * Draws a bitmap
     * Returns true if successfully completed
     *
     * @version 6.3.0
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
     * @param {Function | Rectangle | Object} [options.source] - Source from bitmap. Function or Rectangle or object with parameters
     * @param {Function | Rectangle | Object} [options.destination] - Destination to bitmap. Function or  Rectangle or object with parameters
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
     * const sprite = new DKTools.Sprite(0, 0, 200, 200);
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
     * @return {Boolean} Successfully completed
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

        let result = true;

        bitmap.addLoadListener(() => {
            const isFunction = DKTools.Utils.isFunction;
            const isString = DKTools.Utils.isString;
            const lineHeight = this.lineHeight();
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

            if (sw === 0 || sh === 0 || dw === 0 || dh === 0) {
                result = false;

                return;
            }

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

        return result;
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
     * @param {Function | Rectangle | Object} [options.source] - Source from bitmap. Function or Rectangle or object with parameters
     * @param {Function | Rectangle | Object} [options.destination] - Destination to bitmap. Function or Rectangle or object with parameters
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
     * @return {Boolean} Successfully completed
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
     * @param {Point | Object} [options.pos] - Position for drawing (ignores other parameters of position: x, y)
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.pos.x] - The X coordinate
     * @param {Number | String} [options.pos.y] - The Y coordinate or line number (String)
     *
     * @return {Boolean} Successfully completed
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
     * @version 6.3.0
     *
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {Point | Object} [options.pos] - Position for drawing (ignores other parameters of position: x, y)
     * @param {Number} [options.radius] - Radius of the circle
     * @param {String} [options.color] - Color of the circle
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.pos.x] - The X coordinate
     * @param {Number | String} [options.pos.y] - The Y coordinate or line number (String)
     *
     * @return {Boolean} Successfully completed
     */
    drawCircle(options = {}) {
        if (!this.hasBitmap()) {
            return false;
        }

        options = options || {};

        const { pos, radius, color, paintOpacity, resetPaintOpacity} = options;
        let { x, y } = options;

        if (radius === 0) {
            return false;
        }

        if (pos instanceof Object) {
            x = pos.x;
            y = pos.y;
        }

        if (DKTools.Utils.isString(y)) { // line number
            y = this.lineHeight() * parseFloat(y);
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
     * @version 8.1.0
     *
     * @param {String} faceName - Face filename
     * @param {Number} faceIndex - Face index
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {Number} [options.width] - Width of the face
     * @param {Number | String} [options.height] - Height of the face or number of lines (String)
     * @param {Point | Object} [options.pos] - Position for drawing (ignores other parameters of position: x, y)
     * @param {Rectangle | Object} [options.rect] - Rectangle for drawing (ignores other parameters of position: x, y, pos)
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
     * @return {Boolean} Successfully completed
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
     * Draws a gauge
     * Returns true if successfully completed
     *
     * @since 6.3.0
     *
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {Number} [options.width] - Width of the rectangle
     * @param {Number | String} [options.height] - Height of the rectangle or number of lines (String)
     * @param {Point | Object} [options.pos] - Position for drawing (ignores other parameters of position: x, y)
     * @param {Rectangle | Object} [options.rect] - Rectangle for drawing (ignores other parameters of position: x, y, width, height, pos)
     * @param {Number} [options.rate] - Gauge width rate
     * @param {String} [options.type] - Gauge type (horizontal or vertical)
     * @param {Boolean} [options.reversed] - Reversed gauge
     * @param {String} [options.gradient] - Gradient type (horizontal or vertical)
     * @param {String} [options.backgroundColor] - Background fill color
     * @param {String} [options.color] - Fill color
     * @param {String} [options.color1] - First gradient color (ignores other parameters: color)
     * @param {String} [options.color2] - Second gradient color (ignores other parameters: color)
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
     * @return {Boolean} Successfully completed
     */
    drawGauge(options = {}) {
        if (!this.hasBitmap()) {
            return false;
        }

        const { pos, rect, reversed, gradient, paintOpacity, resetPaintOpacity } = options;
        let { x, y, width, height, type, rate, backgroundColor, color, color1, color2 } = options;

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
            y = this.lineHeight() * parseFloat(y);
        }

        if (DKTools.Utils.isString(height)) { // number of lines
            height = this.lineHeight() * parseFloat(height);
        }

        if (width === 0 || height === 0) {
            return false;
        }

        x = x || 0;
        y = y || 0;
        width = width || this.standardDrawingWidth();
        height = height || this.standardDrawingHeight();
        backgroundColor = _.defaultTo(backgroundColor, 'black');
        color = _.defaultTo(color, 'white');
        color1 = _.defaultTo(color1, color);
        color2 = _.defaultTo(color2, color);
        type = _.defaultTo(type, 'horizontal');
        rate = _.defaultTo(rate, 1);

        const gradientRect = { x, y, width, height };

        if (type === 'horizontal') {
            gradientRect.width *= rate;

            if (reversed) {
                gradientRect.x += width - gradientRect.width;
            }
        } else if (type === 'vertical') {
            gradientRect.height *= rate;

            if (reversed) {
                gradientRect.y += height - gradientRect.height;
            }
        } else {
            return false;
        }

        if (Number.isFinite(paintOpacity)) {
            this.changePaintOpacity(paintOpacity);
        }

        this.fillRect({ x, y, width, height, color: backgroundColor });

        this.gradientFillRect({ rect: gradientRect, color1, color2, vertical: gradient === 'vertical' });

        if (resetPaintOpacity) {
            this.resetPaintOpacity();
        }

        return true;
    }

    /**
     * Draws an icon
     * Returns true if successfully completed
     *
     * @version 8.1.0
     *
     * @param {Number} iconIndex - Icon index
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {Point | Object} [options.pos] - Position for drawing (ignores other parameters of position: x, y)
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.pos.x] - The X coordinate
     * @param {Number | String} [options.pos.y] - The Y coordinate or line number (String)
     *
     * @return {Boolean} Successfully completed
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
     * @version 8.1.0
     *
     * @param {Object} item - Item
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {Point | Object} [options.pos] - Position for drawing (ignores other parameters of position: x, y)
     * @param {Number} [options.iconX] - The X coordinate of the icon
     * @param {Number | String} [options.iconY] - The Y coordinate of the icon or line number (String)
     * @param {Point | Object} [options.iconPos] - Position of the icon (ignores other parameters of position: iconX, iconY)
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
     * @return {Boolean} Successfully completed
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
            y = this.lineHeight() * parseFloat(y);
        }

        x = x || 0;
        y = y || 0;
        iconX = _.defaultTo(iconX, x + 2);
        iconY = _.defaultTo(iconY, y + 2);

        if (Number.isFinite(paintOpacity)) {
            this.changePaintOpacity(paintOpacity);
        }

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
     * @version 6.3.0
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
     * @return {Boolean} Successfully completed
     */
    drawLine(options = {}) {
        if (!this.hasBitmap()) {
            return false;
        }

        options = options || {};

        const { pos1, pos2, color, lineWidth, paintOpacity, resetPaintOpacity } = options;
        let { x1, y1, x2, y2 } = options;

        if (lineWidth === 0) {
            return false;
        }

        if (pos1 instanceof Object) {
            x1 = pos1.x;
            y1 = pos1.y;
        }

        if (pos2 instanceof Object) {
            x2 = pos2.x;
            y2 = pos2.y;
        }

        if (DKTools.Utils.isString(y1)) { // line number
            y1 = this.lineHeight() * parseFloat(y1);
        }

        if (DKTools.Utils.isString(y2)) { // line number
            y2 = this.lineHeight() * parseFloat(y2);
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
     * @version 6.3.0
     * @since 5.0.0
     *
     * @param {Object} options - Options for drawing
     *
     * @param {Point[] | Object[]} [options.points] - Points or objects with parameters
     * @param {String} [options.color] - Line color
     * @param {Number} [options.lineWidth] - Line width
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.points[].x] - The X coordinate
     * @param {Number | String} [options.points[].y] - The Y coordinate or line number (String)
     *
     * @return {Boolean} Successfully completed
     */
    drawPolygon(options) {
        if (!this.hasBitmap()) {
            return false;
        }

        options = options || {};

        const { points, paintOpacity, resetPaintOpacity } = options;

        if (!Array.isArray(points) || points.length === 0) {
            return false;
        }

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
     * @param {Point | Object} [options.pos] - Position of the text (ignores other parameters of position: x, y)
     * @param {Number} [options.index] - Index of the text
     * @param {Number} [options.left] - Left padding
     *
     * @param {Number} [options.wrap.maxWidth] - Max width of a text line
     * @param {Number} [options.wrap.maxLines] - Max lines
     *
     * @param {Number} [options.pos.x] - The X coordinate
     * @param {Number | String} [options.pos.y] - The Y coordinate or line number (String)
     *
     * @return {Number} Width of the text
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
            y = this.lineHeight() * parseFloat(y);
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

    // F methods

    /**
     * Fills the bitmap with color
     * Returns true if successfully completed
     * @param {String} [color] - Color of fill
     * @return {Boolean} Successfully completed
     */
    fillAll(color) {
        return this.fillRect({ color });
    }

    /**
     * Fills a rectangle with color
     * Returns true if successfully completed
     *
     * @version 6.3.0
     *
     * @param {Object} [options={}] - Parameters for drawing
     *
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {Number} [options.width] - Width of the rectangle
     * @param {Number | String} [options.height] - Height of the rectangle or number of lines (String)
     * @param {Point | Object} [options.pos] - Position for drawing (ignores other parameters of position: x, y)
     * @param {Rectangle | Object} [options.rect] - Rectangle for drawing (ignores other parameters of position: x, y, width, height, pos)
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
     * @return {Boolean} Successfully completed
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
            y = this.lineHeight() * parseFloat(y);
        }

        if (DKTools.Utils.isString(height)) { // number of lines
            height = this.lineHeight() * parseFloat(height);
        }

        if (width === 0 || height === 0) {
            return false;
        }

        x = x || 0;
        y = y || 0;
        width = width || this.standardDrawingWidth();
        height = height || this.standardDrawingHeight();
        color = color || 'white';

        if (Number.isFinite(paintOpacity)) {
            this.changePaintOpacity(paintOpacity);
        }

        this.bitmap.fillRect(x, y, width, height, color);

        if (resetPaintOpacity) {
            this.resetPaintOpacity();
        }

        return true;
    }

    /**
     * Returns the font height for the line height
     * @since 10.0.0
     * @param {Number} [lineHeight] - Line height
     * @return {Number} Font height for the line height
     */
    fontHeight(lineHeight) {
        let fontSize;

        lineHeight = lineHeight || this.lineHeight();

        if (this.hasBitmap()) {
            fontSize = this.bitmap.fontSize;
        } else {
            fontSize = this._font.fontSize || this.standardFontSize();
        }

        return lineHeight - (lineHeight - fontSize * 0.7) / 2;
    }

    // G methods

    /**
     * Returns the local point (coordinates inside the object)
     *
     * @version 10.0.1
     * @since 8.0.0
     *
     * @param {Number | Point} [object] - The X coordinate or Point
     * @param {Number} [y] - The Y coordinate (if object is Number)
     *
     * @return {PIXI.Point} Local point (coordinates inside the object)
     */
    getLocalPoint(object, y) {
        const point = arguments.length === 2 ?
            new Point(object, y) : new Point(object.x, object.y);

        return this.worldTransform.applyInverse(point);
    }

    /**
     * Returns the color from the window skin
     * @param {Number} n - Color number
     * @return {String} Color from the window skin
     */
    getWindowskinTextColor(n) {
        const px = 96 + (n % 8) * 12 + 6;
        const py = 144 + Math.floor(n / 8) * 12 + 6;

        if (this.hasWindowskin()) {
            return this.windowskin.getPixel(px, py);
        } else {
            this._windowskin = ImageManager.loadSystem(this.standardWindowskin());

            return this.windowskin.getPixel(px, py);
        }
    }

    /**
     * Fills the bitmap with gradient
     * Returns true if successfully completed
     * @version 6.0.0
     * @param {String} [color1='black'] - First color
     * @param {String} [color2='white'] - Second color
     * @param {Boolean} [vertical=false] - Vertical gradient
     * @return {Boolean} Successfully completed
     */
    gradientFillAll(color1 = 'black', color2 = 'white', vertical = false) {
        return this.gradientFillRect({ color1, color2, vertical });
    }

    /**
     * Fills a rectangle with a gradient
     * Returns true if successfully completed
     *
     * @version 6.3.0
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
     * @param {Rectangle} [options.rect] - Rectangle for drawing (ignores other parameters of position: x, y, width, height)
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @return {Boolean} Successfully completed
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
            y = this.lineHeight() * parseFloat(y);
        }

        if (DKTools.Utils.isString(height)) { // number of lines
            height = this.lineHeight() * parseFloat(height);
        }

        if (width === 0 || height === 0) {
            return false;
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
     * Returns true if the object has the bitmap
     * @return {Boolean} Object has the bitmap
     */
    hasBitmap() {
        return !!this.bitmap;
    }

    /**
     * Returns true if the object has a parent
     * @since 5.0.0
     * @return {Boolean} Object has a parent
     */
    hasParent() {
        return !!this.parent;
    }

    /**
     * Returns true if the object has the window skin
     * @return {Boolean} Object has the window skin
     */
    hasWindowskin() {
        return !!this.windowskin;
    }

    /**
     * Hides the object
     * @version 3.0.0
     * @param {Boolean} [blockDeactivate=false] - Blocking deactivates of the object
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
     * @return {Boolean} Object is active
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
     * @return {Boolean} Object is busy
     */
    isBusy() {
        return !this.isReady();
    }

    /**
     * Returns true if the object has a parent (if parameter is null or undefined)
     * Returns true if the object (parameter) is child of this object
     * @version 10.0.0
     * @param {Sprite | Window} [object] - Object
     * @return {Boolean} Object (parameter) is child of this object or object has a parent (if parameter is null or undefined)
     */
    isChild(object) {
        return object ?
            this.children.includes(object) : this.hasParent();
    }

    /**
     * Returns true if the object was destroyed
     * @since 8.0.0
     * @return {Boolean} Object was destroyed
     */
    isDestroyed() {
        return this._destroyed;
    }

    /**
     * Returns true if the coordinates is inside the object
     * @version 8.0.0
     * @param {Number} x - The X coordinate
     * @param {Number} y - The Y coordinate
     * @return {Boolean} Coordinates is inside the object
     */
    isInside(x, y) {
        const point = this.getLocalPoint(x, y);
        const frame = new Rectangle(0, 0, this.width, this.height);
        const mask = this.mask;

        if (mask && DKTools.Utils.isFunction(mask.containsPoint)) {
            if (!mask.containsPoint(point)) {
                return false;
            }
        }

        if (!frame.contains(point.x, point.y)) {
            return false;
        }

        const area = this.hitArea;

        if (!area) {
            return true;
        }

        return area.contains(point.x, point.y);
    }

    /**
     * Returns true if the mouse is inside the object
     * @return {Boolean} Mouse is inside the object
     */
    isMouseInside() {
        return this.isInside(TouchInput.mouseX, TouchInput.mouseY);
    }

    /**
     * Returns true if the coordinates is not inside the object
     * @param {Number} x - The X coordinate
     * @param {Number} y - The Y coordinate
     * @return {Boolean} Coordinates are not inside the object
     */
    isOutside(x, y) {
        return !this.isInside(x, y);
    }

    /**
     * Returns true if the object (parameter) is parent of this object
     * @since 2.0.0
     * @param {Sprite | Window} object - Object
     * @return {Boolean} Object (parameter) is parent of this object
     */
    isParent(object) {
        return !!object && this.parent === object;
    }

    /**
     * Returns true if the bitmap is ready
     * @return {Boolean} Bitmap is ready
     */
    isReady() {
        return this.hasBitmap() && this.bitmap.isReady();
    }

    /**
     * Returns true if the object is started
     * @return {Boolean} Object is started
     */
    isStarted() {
        return this._started || false;
    }

    /**
     * Returns true if the touch is inside the object
     * @version 10.0.6
     * @return {Boolean} Touch is inside the object
     */
    isTouchInside() {
        return this.isInside(TouchInput.x, TouchInput.y);
    }

    /**
     * Returns true if the object is visible
     * @version 2.0.0
     * @return {Boolean} Object is visible
     */
    isVisible() {
        return this.visible;
    }

    /**
     * Returns true if the object is visible and active
     * @return {Boolean} Object is visible and active
     */
    isVisibleAndActive() {
        return this.isVisible() && this.isActive();
    }

    // M methods

    /**
     * Makes the font size bigger
     */
    makeFontBigger() {
        if (this.hasBitmap()) {
            Window_Base.prototype.makeFontBigger.apply(this, arguments);
        }
    }

    /**
     * Makes the font size smaller
     */
    makeFontSmaller() {
        if (this.hasBitmap()) {
            Window_Base.prototype.makeFontSmaller.apply(this, arguments);
        }
    }

    /**
     * Moves the object
     * @version 10.0.0
     * @param {Number} [x] - The X coordinate
     * @param {Number | String} [y] - The Y coordinate or line number (String)
     * @example
     * const sprite = new DKTools.Sprite();
     * sprite.move(100, 100);
     * @example
     * const sprite = new DKTools.Sprite();
     * sprite.move(100, '2');
     */
    move(x, y) {
        if (DKTools.Utils.isString(y)) { // line number
            y = this.lineHeight() * parseFloat(y);
        }

        this.position.set(x || 0, y || 0);
    }

    // O methods

    /**
     * @param {Object} textState
     * @return {String}
     */
    obtainEscapeCode(textState) {
        return Window_Base.prototype.obtainEscapeCode.apply(this, arguments);
    }

    /**
     * @param {Object} textState
     * @return {Number | String}
     */
    obtainEscapeParam(textState) {
        return Window_Base.prototype.obtainEscapeParam.apply(this, arguments);
    }

    /**
     * Handles item change
     * @since 11.1.0
     * @param {*} item - Item
     * @param {*} lastItem - Last item
     */
    onItemChange(item, lastItem) {
        // to be overridden by plugins
    }

    // P methods

    /**
     * Returns the name of the actor
     * @param {Number} n - Number of the actor in the party
     * @return {String | null} Name of the actor
     */
    partyMemberName(n) {
        return Window_Base.prototype.partyMemberName.apply(this, arguments);
    }

    /**
     * Processes all
     * @version 9.1.0
     */
    processAll() {
        if (!Utils.isMobileDevice()) {
            this.processMouseEvents();
            this.processWheelEvents();
        }
    }

    /**
     * @param {Object} textState
     */
    processCharacter(textState) {
        return Window_Base.prototype.processCharacter.apply(this, arguments);
    }

    /**
     * @version 8.1.0
     * @param {Number} iconIndex
     * @param {Object} textState
     */
    processDrawIcon(iconIndex, textState) {
        this.drawIcon(iconIndex, { x: textState.x + 2, y: textState.y + 2 });

        textState.x += Window_Base._iconWidth + 4;
    }

    /**
     * @version 8.2.0
     * @param {String} code
     * @param {Object} textState
     */
    processEscapeCharacter(code, textState) {
        try {
            const state = { ...textState };

            Window_Base.prototype.processEscapeCharacter.call(this, code, state);

            Object.assign(textState, state);
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
     * @version 10.0.0
     * @since 2.0.0
     */
    processMouseEvents() {
        if (this.isVisibleAndActive()) {
            if (this.isMouseInside()) {
                if (this._mouseEnterTime === 0) {
                    this.updateMouseEnterEvents();
                }

                this.updateMouseInsideEvents();

                if (TouchInput.isMoved()) {
                    this.updateMouseMoveEvents();
                }

                this._mouseEnterTime++;
            } else {
                if (this._mouseEnterTime > 0) {
                    this.updateMouseLeaveEvents();
                }

                this.updateMouseOutsideEvents();

                this._mouseEnterTime = 0;
            }
        } else {
            this._mouseEnterTime = 0;
        }
    }

    /**
     * @param {Object} textState
     */
    processNewLine(textState) {
        if (!textState.width) {
            textState.width = textState.x;
        } else if (textState.width < textState.x) {
            textState.width = textState.x;
        }

        return Window_Base.prototype.processNewLine.call(this, textState);
    }

    /**
     * @param {Object} textState
     */
    processNewPage(textState) {
        Window_Base.prototype.processNewPage.apply(this, arguments);
    }

    /**
     * @param {Object} textState - Text state
     */
    processNormalCharacter(textState) {
        const c = textState.text[textState.index++];
        const w = this.textWidth(c);

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
     * @since 2.0.0
     */
    processWheelEvents() {
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
     * @version 10.0.0
     */
    redrawAll() {
        this.clear();
        this.drawAll();
        this.updateRedrawAllEvents();
    }

    /**
     * Updates and redraws all
     * @version 1.1.0
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
     * @version 2.0.0
     */
    removeAll() {
        this.updateRemoveAllEvents();
    }

    /**
     * Removes the event from a container
     * Returns true if the event was removed
     * @version 2.0.0
     * @param {DKTools.Event | DKTools.Animation} event - Event
     * @return {Boolean} Event was removed
     */
    removeEvent(event) {
        return this._eventsManager.removeEvent(event);
    }

    /**
     * Removes the filter
     * @param {*} filter - Filter
     */
    removeFilter(filter) {
        if (!this.filters || !filter) {
            return;
        }

        const filters = this.filters;

        _.pull(filters, filter);

        if (filters.length > 0) {
            this.filters = filters;
        } else if (filters.length === 0) {
            this.filters = null;
        }
    }

    /**
     * Removes the object from the parent object, if possible
     * Returns true if the deletion was successful
     * @since 5.0.0
     * @return {Boolean} Deletion was successful
     */
    removeFromParent() {
        if (this.hasParent()) {
            this.parent.removeChild(this);

            return true;
        }

        return false;
    }

    /**
     * Changes the width and height of the object
     * Returns true if the change occurred
     * @since 10.0.0
     * @param {Number} width - Width of the object
     * @param {Number | String} height - Height of the object or number of lines (String)
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     * @return {Boolean} Change occurred
     */
    resize(width, height, blockStart = false) {
        if (DKTools.Utils.isString(height)) { // number of lines
            height = this.lineHeight() * parseFloat(height);
        }

        if (this.width === width && this.height === height) {
            return false;
        }

        const lastWidth = this.width;
        const lastHeight = this.height;

        this.setupSize(width, height);

        if (this.width === lastWidth && this.height === lastHeight) {
            return false;
        }

        if (!blockStart) {
            this.start();
        }

        return true;
    }

    // S methods

    // standard methods

    /**
     * Returns the standard activity of the object
     * @return {Boolean} Standard activity of the object
     */
    standardActive() {
        return true;
    }

    /**
     * Returns the standard width of the drawing
     * @version 8.0.0
     * @return {Number} Standard width of the drawing or null
     */
    standardDrawingWidth() {
        if (this.hasBitmap()) {
            return this.bitmap.width;
        } else if (this.isSprite()) {
            return this._bitmapWidth;
        } else if (this.isWindow()) {
            return this.width;
        }

        return 0;
    }

    /**
     * Returns the standard height of the drawing
     * @version 8.0.0
     * @return {Number} Standard height of the drawing or null
     */
    standardDrawingHeight() {
        if (this.hasBitmap()) {
            return this.bitmap.height;
        } else if (this instanceof DKTools.Sprite) {
            return this._bitmapHeight;
        } else if (this instanceof DKTools.Window) {
            return this.height;
        }

        return 0;
    }

    /**
     * Returns the standard opacity of the object
     * @since 10.0.0
     * @return {Number} Standard opacity of the object
     */
    standardOpacity() {
        return 255;
    }

    /**
     * Returns the standard pivot of the object
     * @return {Point} Standard pivot of the object
     */
    standardPivot() {
        return new Point(0, 0);
    }

    /**
     * Returns the standard rotation of the object
     * @return {Number} Standard rotation of the object
     */
    standardRotation() {
        return 0;
    }

    /**
     * Returns the standard scale of the object
     * @return {Point} Standard scale of the object
     */
    standardScale() {
        return new Point(1, 1);
    }

    /**
     * Returns the standard skew of the object
     * @return {Point} Standard skew of the object
     */
    standardSkew() {
        return new Point(0, 0);
    }

    /**
     * Returns the standard visibility of the object
     * @return {Boolean} Standard visibility of the object
     */
    standardVisible() {
        return true;
    }

    /**
     * Returns the standard window skin
     * @return {String} Standard window skin
     */
    standardWindowskin() {
        return 'Window';
    }

    // setup methods

    /**
     * Sets all parameters
     * @version 10.0.1
     * @param {Object} [object={}] - Parameters
     *
     * @param {Boolean} [object.visible] - Visibility of the object
     * @param {Boolean} [object.active] - Activity of the object
     * @param {Point | Object} [object.scale] - Scale of the object
     * @param {Point | Object} [object.pivot] - Pivot of the object
     * @param {Point | Object} [object.skew] - Skew of the object
     * @param {Number} [object.rotation] - Rotation of the object
     * @param {Number} [object.opacity] - Opacity of the object
     */
    setupAll(object = {}) {
        object = object || {};

        this.setupActive(object.active);
        this.setupVisible(object.visible);
        this.setupScale(object.scale);
        this.setupPivot(object.pivot);
        this.setupSkew(object.skew);
        this.setupRotation(object.rotation);
        this.setupOpacity(object.opacity);
    }

    /**
     * Sets the activity of the object
     * @param {Boolean} [active] - Activity of the object
     */
    setupActive(active) {
        /**
         * @type {Boolean}
         */
        this.active = _.defaultTo(active, this.standardActive());
    }

    /**
     * Sets the pivot of the object
     * @version 10.0.0
     * @param {Number | Point} [object] - The X coordinate or Point
     * @param {Number} [y] - The Y coordinate (if object is Number)
     */
    setupPivot(object, y) {
        let pivot;

        if (object instanceof Object) {
            pivot = object;
        } else if (arguments.length === 2) {
            pivot = new Point(object, y);
        } else {
            pivot = this.standardPivot();
        }

        this.pivot.copy(pivot);
    }

    /**
     * Sets the rotation of the object
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
     * @version 10.0.0
     * @param {Number | Point} [object] - The X coordinate or Point
     * @param {Number} [y] - The Y coordinate (if object is Number)
     */
    setupScale(object, y) {
        let scale;

        if (object instanceof Object) {
            scale = object;
        } else if (arguments.length === 2) {
            scale = new Point(object, y);
        } else {
            scale = this.standardScale();
        }

        this.scale.copy(scale);
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
        // to be overridden by plugins
    }

    /**
     * Sets the skew of the object
     * @version 10.0.0
     * @param {Number | Point} [object] - The X coordinate or Point
     * @param {Number} [y] - The Y coordinate (if object is Number)
     */
    setupSkew(object, y) {
        let skew;

        if (object instanceof Object) {
            skew = object;
        } else if (arguments.length === 2) {
            skew = new Point(object, y);
        } else {
            skew = this.standardSkew();
        }

        this.skew.copy(skew);
    }

    /**
     * Sets the visibility of the object
     * @param {Boolean} [visible] - Visibility of the object
     */
    setupVisible(visible) {
        /**
         * @type {Boolean}
         */
        this.visible = _.defaultTo(visible, this.standardVisible());
    }

    /**
     * Sets the opacity of the object
     * @since 10.0.0
     * @param {Number} [opacity] - Opacity of the object
     */
    setupOpacity(opacity) {
        this.opacity = _.defaultTo(opacity, this.standardOpacity());
    }

    // set methods

    /**
     * Changes the activity of the object
     * Returns true if the change occurred
     * @param {Boolean} [active] - Activity of the object
     * @return {Boolean} Change occurred
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
     * Sets the item
     * @since 11.1.0
     * @param {*} item - Item
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     */
    setItem(item, blockStart = false) {
        if (this._item !== item) {
            const lastItem = this._item;

            this._item = item;
            this.onItemChange(this._item, lastItem);

            if (!blockStart) {
                this.start();
            }
        }
    }

    /**
     * Changes the visibility of the object
     * Returns true if the change occurred
     * @param {Boolean} [visible] - Visibility of the object
     * @return {Boolean} Change occurred
     */
    setVisible(visible) {
        if (this.visible === visible) {
            return false;
        }

        const lastVisible = this.visible;

        this.setupVisible(visible);

        return this.visible !== lastVisible;
    }

    // other S methods

    /**
     * Shows the object
     * @version 3.0.0
     * @param {Boolean} [activate=false] - Activates the object
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
     * @version 10.0.0
     * @param {Boolean} [activate] - Activates the object
     */
    start(activate = false) {
        this._started = true;

        this.removeAll();
        this.checkAll();
        this.createAll();
        this.refreshAll();
        this.updateStartEvents();

        if (activate) {
            this.activate();
        }
    }

    // T methods

    /**
     * Returns the height of the text (taking into account the font)
     *
     * @since 10.0.0
     *
     * @param {String | Number} text - Text
     * @param {Object} [wrap={}] - Wrap options
     *
     * @param {Number} [wrap.maxWidth] - Max width of a text line
     * @param {Number} [wrap.maxLines] - Max lines
     *
     * @return {Number} Height of the text (taking into account the font)
     */
    textFontHeight(text, wrap = {}) {
        return this.textLines(text, wrap) * this.fontHeight();
    }

    /**
     * Returns the number of lines of the text
     *
     * @param {String | Number} text - Text
     * @param {Object} [wrap] - Wrap options
     *
     * @param {Number} [wrap.maxWidth] - Max width of a text line
     * @param {Number} [wrap.maxLines] - Max lines
     *
     * @return {Number} Number of lines of the text
     */
    textLines(text, wrap) {
        if (wrap instanceof Object) {
            text = this.textWrap(text, wrap);
        }

        return text.split('\n').length;
    }

    /**
     * Returns the width of the text
     * @since 10.0.0
     * @param {String} text - Text
     * @return {Number} Width of the text
     */
    textWidth(text) {
        if (!this.hasBitmap() || text === '' || text == null) {
            return 0;
        }

        return Window_Base.prototype.textWidth.apply(this, arguments);
    }

    /**
     * Returns the width of the text (special characters are supported)
     * @since 10.0.0
     * @param {String} text - Text
     * @param {Object} [options={}] - Options for drawing
     * @return {Number} Width of the text
     */
    textWidthEx(text, options = {}) {
        try {
            return this.drawTextEx(text, {
                ...options, x: -Number.MAX_SAFE_INTEGER, y: -Number.MAX_SAFE_INTEGER });
        } catch(e) {
            return 0;
        }
    }

    /**
     * Returns the height of the text
     *
     * @since 10.0.0
     *
     * @param {String | Number} text - Text
     * @param {Object} [wrap={}] - Wrap options
     *
     * @param {Number} [wrap.maxWidth] - Max width of a text line
     * @param {Number} [wrap.maxLines] - Max lines
     *
     * @return {Number} Height of the text
     */
    textHeight(text, wrap = {}) {
        return this.textLines(text, wrap) * this.lineHeight();
    }

    /**
     * Returns the height of the text (special characters are supported)
     *
     * @since 10.0.0
     *
     * @param {String} text - Text
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {Object} [options.wrap] - Wrap options
     *
     * @param {Number} [options.wrap.maxWidth] - Max width of a text line
     * @param {Number} [options.wrap.maxLines] - Max lines
     *
     * @return {Number} Height of the text
     */
    textHeightEx(text, options = {}) {
        if (options instanceof Object && options.wrap instanceof Object) {
            text = this.textWrap(text, options.wrap);
        }

        return this.calcTextHeight({ text, index: 0 }, true);
    }

    /**
     * Makes a text wrap
     *
     * @version 10.0.0
     *
     * @param {String} text - Text
     * @param {Object} [options={}] - Wrap options
     *
     * @param {Number} [options.maxWidth] - Max width of a text line
     * @param {Number} [options.maxLines] - Max lines
     *
     * @return {String} Wrapped text
     */
    textWrap(text, options = {}) {
        if (!this.hasBitmap() || text === '' || text == null) {
            return '';
        }

        text = String(text);
        options = options || {};

        const lines = text.split('\n');
        const maxWidth = options.maxWidth || this.bitmap.width;
        const spaceWidth = this.textWidth(' ');
        let result = '', newLines = 1;

        for (let i = 0; i < lines.length; i++) {
            const words = lines[i].split(' ');
            let spaceLeft = maxWidth;

            for (let j = 0; j < words.length; j++) {
                const word = words[j];
                const wordWidth = this.textWidthEx(word);
                let wordWidthWithSpace = wordWidth + spaceWidth;

                if (wordWidth === 0) {
                    wordWidthWithSpace -= spaceWidth;
                }

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

            if (i < lines.length - 1) {
                result += '\n';
            }
        }

        return result;
    }

    // U methods

    /**
     * Updates the object
     * @version 10.0.0
     */
    update() {
        this.processAll();
        this.updateEvents();
    }

    /**
     * Updates all
     * @version 10.0.0
     */
    updateAll() {
        this.updateUpdateAllEvents();
    }

    /**
     * Updates the child objects
     */
    updateChildren() {
        for (const child of this.children) {
            if (child && child.update) {
                child.update();
            }
        }
    }

    // events methods

    /**
     * Updates the events with type: activate
     */
    updateActivateEvents() {
        this._eventsManager.updateEventsContainer('activate');
    }

    /**
     * Updates the events with type: check-all
     * @version 2.0.0
     */
    updateCheckAllEvents() {
        this._eventsManager.updateEventsContainer('check-all');
    }

    /**
     * Updates the events with type: create-all
     * @version 2.0.0
     */
    updateCreateAllEvents() {
        this._eventsManager.updateEventsContainer('create-all');
    }

    /**
     * Updates the events with type: deactivate
     */
    updateDeactivateEvents() {
        this._eventsManager.updateEventsContainer('deactivate');
    }

    /**
     * Updates the events
     * @version 2.0.0
     */
    updateEvents() {
        this._eventsManager.update();
        this.updateReadyEvents();
        this.updateUpdateEvents();
        this.updateQueueEvents();
    }

    /**
     * Updates the events with type: hide
     */
    updateHideEvents() {
        this._eventsManager.updateEventsContainer('hide');
    }

    /**
     * Updates the events with type: mouse-enter
     * @version 2.0.0
     */
    updateMouseEnterEvents() {
        this._eventsManager.updateEventsContainer('mouse-enter');
    }

    /**
     * Updates the events with type: mouse-inside
     * @since 2.0.0
     */
    updateMouseInsideEvents() {
        this._eventsManager.updateEventsContainer('mouse-inside');
    }

    /**
     * Updates the events with type: mouse-leave
     * @version 2.0.0
     */
    updateMouseLeaveEvents() {
        this._eventsManager.updateEventsContainer('mouse-leave');
    }

    /**
     * Updates the events with type: mouse-move
     * @since 2.0.0
     */
    updateMouseMoveEvents() {
        this._eventsManager.updateEventsContainer('mouse-move');
    }

    /**
     * Updates the events with type: mouse-outside
     * @since 2.0.0
     */
    updateMouseOutsideEvents() {
        this._eventsManager.updateEventsContainer('mouse-outside');
    }

    /**
     * Updates the events with type: queue
     */
    updateQueueEvents() {
        const container = this._eventsManager.getEventsContainerByType('queue');
        const event = container[0];

        if (event) {
            event.update();
        }
    }

    /**
     * Updates the events with type: ready
     */
    updateReadyEvents() {
        if (this.isReady()) {
            this._eventsManager.updateEventsContainer('ready');
        }
    }

    /**
     * Updates the events with type: redraw-all
     * @version 2.0.0
     */
    updateRedrawAllEvents() {
        this._eventsManager.updateEventsContainer('redraw-all');
    }

    /**
     * Updates the events with type: draw-all
     * @since 10.0.0
     */
    updateDrawAllEvents() {
        this._eventsManager.updateEventsContainer('draw-all');
    }

    /**
     * Updates the events with type: refresh-all
     * @version 2.0.0
     */
    updateRefreshAllEvents() {
        this._eventsManager.updateEventsContainer('refresh-all');
    }

    /**
     * Updates the events with type: remove-all
     * @version 2.0.0
     */
    updateRemoveAllEvents() {
        this._eventsManager.updateEventsContainer('remove-all');
    }

    /**
     * Updates the events with type: show
     */
    updateShowEvents() {
        this._eventsManager.updateEventsContainer('show');
    }

    /**
     * Updates the events with type: start
     */
    updateStartEvents() {
        if (this.isStarted()) {
            this._eventsManager.updateEventsContainer('start');
        }
    }

    /**
     * Updates the events with type: update-all
     * @version 2.0.0
     */
    updateUpdateAllEvents() {
        this._eventsManager.updateEventsContainer('update-all');
    }

    /**
     * Updates the events with type: update
     */
    updateUpdateEvents() {
        this._eventsManager.updateEventsContainer('update');
    }

    /**
     * Updates the events with type: wheel-X-inside or wheel-X-outside
     * @version 2.0.0
     * @param {String} type - Type of the wheel event (inside or outside)
     */
    updateWheelXEvents(type) {
        this._eventsManager.updateEventsContainer('wheel-X-' + type);
    }

    /**
     * Updates the events with type: wheel-Y-inside or wheel-Y-outside
     * @version 2.0.0
     * @param {String} type - Type of the wheel event (inside or outside)
     */
    updateWheelYEvents(type) {
        this._eventsManager.updateEventsContainer('wheel-Y-' + type);
    }

};


