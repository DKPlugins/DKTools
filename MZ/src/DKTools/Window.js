//===========================================================================
// DKTools.Window
//===========================================================================

/**
 * @class
 * @extends Window_Base
 * @mixes DKTools.Base
 */
DKTools.Window = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

DKTools.Window.prototype = Object.create(Window_Base.prototype);
Object.defineProperties(DKTools.Window.prototype,
    Object.getOwnPropertyDescriptors(DKTools.Base.prototype));
DKTools.Window.prototype.constructor = DKTools.Window;

// properties

Object.defineProperties(DKTools.Window.prototype, {

    /**
     * Bitmap of the contents sprite
     * To support functions from DKTools.Base
     * @type {Bitmap | null}
     * @memberof DKTools.Window.prototype
     */
    bitmap: {
        get: function() {
            return this.contents;
        },
        set: function(value) {
           this.contents = value;
        },
        configurable: true
    }

});

// initialize methods

/**
 * Initializes a window
 *
 * @override
 *
 * @param {Number | Graphics | Object} [object] - The X coordinate or Graphics or object with parameters
 * @param {Number} [y] - The Y coordinate (if object is Number)
 * @param {Number} [width] - Width of the window (if object is Number)
 * @param {Number | String} [height] - Height of the window or number of lines (String) (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 * @param {Number} [object.width] - Width of the window
 * @param {Number | String} [object.height] - Height of the window or number of lines (String)
 *
 * @example
 * const window = new DKTools.Window(0, 0, 100, 100);
 *
 * @example
 * const window = new DKTools.Window(Graphics);
 *
 * @example
 * const window = new DKTools.Window({ x: 0, y: 0, width: 200, height: 200 });
 *
 * @example
 * const window = new DKTools.Window(50, 50, 400, '2');
 */
DKTools.Window.prototype.initialize = function(object, y, width, height) {
    Window.prototype.initialize.apply(this, arguments);
    DKTools.Base.prototype.initialize.call(this, object, y, width, height);
    this.loadWindowskin();
    this.updateBackOpacity();
    this.createContents();
};

// A methods

/**
 * Activates the window
 * @override
 */
DKTools.Window.prototype.activate = function() {
    DKTools.Base.prototype.activate.apply(this, arguments);

    if (this._contentsSprite instanceof DKTools.Sprite) {
        this._contentsSprite.activate();
    }
};

// C methods

/**
 * Creates the contents background sprite
 * @override
 * @private
 */
DKTools.Window.prototype._createContentsBackSprite = function() {
    Window.prototype._createContentsBackSprite.apply(this, arguments);
    this._contentsBackSprite.bitmap = new Bitmap();
};

/**
 * Creates the contents sprite
 * @override
 * @private
 */
DKTools.Window.prototype._createContentsSprite = function() {
    this._contentsSprite = this.standardContentsSprite();
    this._clientArea.addChild(this._contentsSprite);
};

/**
 * Clears the window
 * Returns true if successfully completed
 * @override
 * @return {Boolean} Successfully completed
 */
DKTools.Window.prototype.clear = function() {
    if (this.contentsBack) {
        this.contentsBack.clear();
    }

    return DKTools.Base.prototype.clear.apply(this, arguments);
};

/**
 * Returns the width of the contents
 * @override
 * @return {Number} Width of the contents
 */
DKTools.Window.prototype.contentsWidth = function() {
    if (DKTools.Utils.isFunction(this._contentsWidth)) {
        return this._contentsWidth(this);
    } else if (Number.isFinite(this._contentsWidth)) {
        return this._contentsWidth;
    }

    return Window_Base.prototype.contentsWidth.apply(this, arguments);
};

/**
 * Returns the height of the contents
 * @override
 * @return {Number} Height of the contents
 */
DKTools.Window.prototype.contentsHeight = function() {
    if (DKTools.Utils.isFunction(this._contentsHeight)) {
        return this._contentsHeight(this);
    } else if (Number.isFinite(this._contentsHeight)) {
        return this._contentsHeight;
    } else if (DKTools.Utils.isString(this._contentsHeight)) { // number of lines
        return this.lineHeight() * parseFloat(this._contentsHeight);
    }

    return Window_Base.prototype.contentsHeight.apply(this, arguments);
};

/**
 * Creates all objects
 * @override
 */
DKTools.Window.prototype.createAll = function() {
    DKTools.Base.prototype.createAll.apply(this, arguments);
    this.createContents();
};

/**
 * Creates the contents
 * @override
 */
DKTools.Window.prototype.createContents = function() {
    const instanceOf = this._contentsSprite instanceof DKTools.Sprite;
    const width = this.contentsWidth();
    const height = this.contentsHeight();

    if (instanceOf) {
        this._contentsSprite.destroyBitmap();

        if (this.contentsBack) {
            this.contentsBack.destroy();
        }
    } else {
        this.destroyContents();
    }

    this.contentsBack = new Bitmap(width, height);

    if (instanceOf) {
        this._contentsSprite.setupSize(width, height);
        this._contentsSprite.start();
    } else {
        this.contents = new Bitmap(width, height);
    }

    this.resetFontSettings();
};

// D methods

/**
 * Deactivates the window
 * @override
 */
DKTools.Window.prototype.deactivate = function() {
    DKTools.Base.prototype.deactivate.apply(this, arguments);

    if (this._contentsSprite instanceof DKTools.Sprite) {
        this._contentsSprite.deactivate();
    }
};

/**
 * Draws the text
 * Returns true if successfully completed
 * @override
 * @param {String} text - Text
 * @param {Object} [options={}] - Options for drawing
 */
DKTools.Window.prototype.drawText = function(text, options) {
    if (arguments.length <= 2 && this._contentsSprite instanceof DKTools.Sprite) {
        this._contentsSprite.drawText(text, options);
    } else {
        Window_Base.prototype.drawText.apply(this, arguments);
    }
};

/**
 * Draws the text
 * @version 1.1.0
 * @override
 * @param {String} text - Text
 * @param {Object} [options={}] - Options for drawing
 */
DKTools.Window.prototype.drawTextEx = function(text, options) {
    if (arguments.length <= 2 && this._contentsSprite instanceof DKTools.Sprite) {
        DKTools.Base.prototype.drawTextEx.apply(this, arguments);
    } else {
        Window_Base.prototype.drawTextEx.apply(this, arguments);
    }
};

// H methods

/**
 * Hides the background
 */
DKTools.Window.prototype.hideBack = function() {
    this._backSprite.visible = false;
};

/**
 * Hides the cursor
 */
DKTools.Window.prototype.hideCursor = function() {
    this.cursorVisible = false;

    this._cursorSprite.visible = false;
};

/**
 * Hides the contents background
 */
DKTools.Window.prototype.hideContentsBack = function() {
    this._contentsBackSprite.visible = false;
};

/**
 * Hides the frame
 */
DKTools.Window.prototype.hideFrame = function() {
    this.frameVisible = false;

    this._frameSprite.visible = false;
};

// I method

/**
 * Returns true if the window is open and visible
 * @return {Boolean} Window is open and visible
 */
DKTools.Window.prototype.isOpenAndVisible = function() {
    return this.isOpen() && this.isVisible();
};

/**
 * Returns true if the window is open and active
 * @return {Boolean} Window is open and active
 */
DKTools.Window.prototype.isOpenAndActive = function() {
    return this.isOpen() && this.isActive();
};

// L methods

/**
 * Loads the window skin
 * @override
 */
DKTools.Window.prototype.loadWindowskin = function() {
    this.windowskin = DKTools.Utils.Bitmap.load({
        folder: 'img/system',
        filename: this.standardWindowskin()
    });
};

// O methods

/**
 * Handles item change
 * @override
 * @param {*} item - Item
 * @param {*} lastItem - Last item
 */
DKTools.Window.prototype.onItemChange = function(item, lastItem) {
    DKTools.Base.prototype.onItemChange.apply(this, arguments);

    if (DKTools.Utils.isFunction(this._contentsSprite.setItem)) {
        this._contentsSprite.setItem(item);
    }
};

// R methods

/**
 * Updates and redraws all
 * @override
 */
DKTools.Window.prototype.refreshAll = function() {
    this._refreshAllParts();
    DKTools.Base.prototype.refreshAll.apply(this, arguments);
};

/**
 * Resets the font settings
 * @override
 */
DKTools.Window.prototype.resetFontSettings = function() {
    if (this._contentsSprite instanceof DKTools.Sprite) {
        this._contentsSprite.resetFont();

        this.resetTextColor();
    } else {
        Window_Base.prototype.resetFontSettings.apply(this, arguments);
    }
};

/**
 * Resets the text color
 * @override
 */
DKTools.Window.prototype.resetTextColor = function() {
    if (this._contentsSprite instanceof DKTools.Sprite) {
        this._contentsSprite.resetTextColor();
    } else {
        Window_Base.prototype.resetTextColor.apply(this, arguments);
    }
};

/**
 * Resets the paint opacity of the bitmap
 * @since 1.1.5
 */
DKTools.Window.prototype.resetPaintOpacity = function() {
    this.changePaintOpacity(255);
};

/**
 * Changes the size of the window
 * Returns true if the change occurred
 * @override
 * @param {Number} width - Width of the window
 * @param {Number | String} height - Height of the window or number of lines (String)
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @return {Boolean} Change occurred
 */
DKTools.Window.prototype.resize = function(width, height, blockStart = false) {
    if (DKTools.Utils.isString(height)) { // number of lines
        height = this.itemHeight() * parseFloat(height) + this._padding * 2;
    }

    return DKTools.Base.prototype.resize.call(this, width, height, blockStart);
};

// S methods

/**
 * Returns the standard openness speed of the window
 * @return {Number} Standard openness speed of the window
 */
DKTools.Window.prototype.standardOpennessSpeed = function() {
    return 32;
};

/**
 * Returns the standard sprite of the contents
 * @return {DKTools.Sprite | Sprite} Standard sprite of the contents
 */
DKTools.Window.prototype.standardContentsSprite = function() {
    return new DKTools.Sprite();
};

/**
 * Just for compatibility with MV plugins
 * Returns the window padding
 * @since 1.2.4
 * @return {Number} Window padding
 */
DKTools.Window.prototype.standardPadding = function() {
    return $gameSystem.windowPadding();
};

// setup methods

/**
 * Sets all parameters
 * @version 1.1.0
 * @override
 *
 * @param {Object} [object={}] - Parameters
 *
 * @param {Function | Number} [object.contentsWidth] - Width of the contents
 * @param {Function | Number} [object.contentsHeight] - Height of the contents
 * @param {Sprite} [object.contentsSprite] - Contents sprite
 */
DKTools.Window.prototype.setupAll = function(object = {}) {
    object = object || {};

    DKTools.Base.prototype.setupAll.call(this, object);

    this.setupContentsWidth(object.contentsWidth);
    this.setupContentsHeight(object.contentsHeight);
    this.setupContentsSprite(object.contentsSprite);
};

/**
 * Sets the size of the window
 * @version 1.1.0
 * @param {Number | Object} [width] - Width of the window
 * @param {Number | String} [height] - Height of the window or number of lines (String)
 */
DKTools.Window.prototype.setupSize = function(width, height) {
    if (DKTools.Utils.isString(height)) { // number of lines
        height = this.lineHeight() * parseFloat(height) + this._padding * 2;
    }

    Window.prototype.move.call(this, this.x, this.y, width, height);
};

/**
 * Sets the width of the contents
 * @param {Function | Number} [contentsWidth=this.standardContentsWidth()] - Width of the contents
 */
DKTools.Window.prototype.setupContentsWidth = function(contentsWidth) {
    this._contentsWidth = contentsWidth;
};

/**
 * Sets the height of the contents
 * @param {Function | Number} [contentsHeight=this.standardContentsHeight()] - Height of the contents
 */
DKTools.Window.prototype.setupContentsHeight = function(contentsHeight) {
    this._contentsHeight = contentsHeight;
};

/**
 * Sets the sprite of the contents
 * @param {DKTools.Sprite | *} [contentsSprite=this.standardContentsSprite()] - Contents sprite
 */
DKTools.Window.prototype.setupContentsSprite = function(contentsSprite) {
    if (this._contentsSprite) {
        this._clientArea.removeChild(this._contentsSprite);

        if (this._contentsSprite.bitmap) {
            this._contentsSprite.bitmap.destroy();
        }

        this._contentsSprite.destroy();
    }

    /**
     * @private
     * @readonly
     * @type {DKTools.Sprite | *}
     */
    this._contentsSprite = contentsSprite || this.standardContentsSprite();

    this._clientArea.addChild(this._contentsSprite);
};

// U methods

/**
 * Updates the window
 * @override
 */
DKTools.Window.prototype.update = function() {
    Window_Base.prototype.update.apply(this, arguments);
    DKTools.Base.prototype.update.apply(this, arguments);
};

/**
 * Updates all
 * @override
 */
DKTools.Window.prototype.updateAll = function() {
    this.updateContents();
    DKTools.Base.prototype.updateAll.apply(this, arguments);
};

/**
 * Updates the contents
 */
DKTools.Window.prototype.updateContents = function() {
    if (DKTools.Utils.isFunction(this._contentsSprite.updateAll)) {
        this._contentsSprite.updateAll();
    }
};

/**
 * Updates the opening of the window
 * @override
 * @version 1.1.5
 */
DKTools.Window.prototype.updateOpen = function() {
    if (!this._opening) {
        return;
    }

    this.openness += this.standardOpennessSpeed();

    if (this.isOpen()) {
        this._opening = false;
        this._eventsManager.finishEvents('open', true);
    } else {
        this.updateOpenEvents();
    }
};

/**
 * Updates the closing of the window
 * @override
 * @version 1.1.5
 */
DKTools.Window.prototype.updateClose = function() {
    if (!this._closing) {
        return;
    }

    this.openness -= this.standardOpennessSpeed();

    if (this.isClosed()) {
        this._closing = false;
        this._eventsManager.finishEvents('close', true);
    } else {
        this.updateCloseEvents();
    }
};

// events methods

/**
 * Updates the events with type: open
 */
DKTools.Window.prototype.updateOpenEvents = function() {
    this._eventsManager.updateEventsContainer('open');
};

/**
 * Updates the events with type: close
 */
DKTools.Window.prototype.updateCloseEvents = function() {
    this._eventsManager.updateEventsContainer('close');
};


