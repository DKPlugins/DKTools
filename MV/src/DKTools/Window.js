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
     *
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
    Window_Base.prototype.initialize.apply(this, arguments);
    DKTools.Base.prototype.initialize.call(this, object, y, width, height);
    this.createContents();
};

// A methods

/**
 * Activates the window
 * @version 10.0.0
 * @override
 */
DKTools.Window.prototype.activate = function() {
    DKTools.Base.prototype.activate.apply(this, arguments);

    if (this._windowContentsSprite instanceof DKTools.Sprite) {
        this._windowContentsSprite.activate();
    }
};

// D methods

/**
 * Deactivates the window
 * @version 10.0.0
 * @override
 */
DKTools.Window.prototype.deactivate = function() {
    DKTools.Base.prototype.deactivate.apply(this, arguments);

    if (this._windowContentsSprite instanceof DKTools.Sprite) {
        this._windowContentsSprite.deactivate();
    }
};

/**
 * Draws the text
 * @version 10.0.0
 * @override
 * @param {String} text - Text
 * @param {Object} [options={}] - Options for drawing
 */
DKTools.Window.prototype.drawText = function(text, options) {
    if (arguments.length <= 2 && this._windowContentsSprite instanceof DKTools.Sprite) {
        this._windowContentsSprite.drawText(text, options);
    } else {
        Window_Base.prototype.drawText.apply(this, arguments);
    }
};

/**
 * Draws the text
 * @version 10.0.0
 * @override
 * @param {String} text - Text
 * @param {Object} [options={}] - Options for drawing
 */
DKTools.Window.prototype.drawTextEx = function(text, options) {
    if (arguments.length <= 2 && this._windowContentsSprite instanceof DKTools.Sprite) {
        DKTools.Base.prototype.drawTextEx.apply(this, arguments);
    } else {
        Window_Base.prototype.drawTextEx.apply(this, arguments);
    }
};

// G methods

/**
 * Returns the width of the contents
 * @override
 * @return {Number} Width of the contents
 */
DKTools.Window.prototype.contentsWidth = function() {
    if (DKTools.Utils.isFunction(this._contentsWidth)) {
        return this._contentsWidth(this);
    }

    return this._contentsWidth;
};

/**
 * Returns the height of the contents
 * @override
 * @return {Number} Height of the contents
 */
DKTools.Window.prototype.contentsHeight = function() {
    if (DKTools.Utils.isFunction(this._contentsHeight)) {
        return this._contentsHeight(this);
    }

    return this._contentsHeight;
};

/**
 * Creates the contents
 * @override
 */
DKTools.Window.prototype.createContents = function() {
    const width = this.contentsWidth();
    const height = this.contentsHeight();

    if (this._windowContentsSprite instanceof DKTools.Sprite) {
        this._windowContentsSprite.setupSize(width, height);
        this._windowContentsSprite.start();
    } else {
        this.contents = new Bitmap(width, height);
    }

    this.resetFontSettings();
};

// H methods

/**
 * Hides the background
 */
DKTools.Window.prototype.hideBack = function() {
    this._windowBackSprite.visible = false;
};

/**
 * Hides the cursor
 * @since 10.0.0
 */
DKTools.Window.prototype.hideCursor = function() {
    this._windowCursorSprite.visible = false;
};

/**
 * Hides the frame
 */
DKTools.Window.prototype.hideFrame = function() {
    this._windowFrameSprite.visible = false;
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

// R methods

/**
 * Updates and redraws all
 * @version 6.0.0
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
    if (this._windowContentsSprite instanceof DKTools.Sprite) {
        this._windowContentsSprite.resetFont();

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
    if (this._windowContentsSprite instanceof DKTools.Sprite) {
        this._windowContentsSprite.resetTextColor();
    } else {
        Window_Base.prototype.resetTextColor.apply(this, arguments);
    }
};

/**
 * Changes the size of the window
 * Returns true if the change occurred
 * @version 10.0.0
 * @override
 * @param {Number} width - Width of the window
 * @param {Number | String} height - Height of the window or number of lines (String)
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @return {Boolean} Change occurred
 */
DKTools.Window.prototype.resize = function(width, height, blockStart = false) {
    if (DKTools.Utils.isString(height)) { // number of lines
        height = this.lineHeight() * parseFloat(height) + this._padding * 2;
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
 * @return {DKTools.Sprite} Standard sprite of the contents
 */
DKTools.Window.prototype.standardContentsSprite = function() {
    return new DKTools.Sprite();
};

/**
 * Returns the standard width of the contents
 * @version 6.0.0
 * @return {Function} Standard width of the contents
 */
DKTools.Window.prototype.standardContentsWidth = function() {
    return () => this._width - this._padding * 2;
};

/**
 * Returns the standard height of the contents
 * @version 6.0.0
 * @return {Function} Standard height of the contents
 */
DKTools.Window.prototype.standardContentsHeight = function() {
    return () => this._height - this._padding * 2;
};
// setup methods

/**
 * Sets all parameters
 *
 * @version 10.0.0
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
 * @version 10.0.0
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
    this._contentsWidth = contentsWidth || this.standardContentsWidth();
};

/**
 * Sets the height of the contents
 * @param {Function | Number} [contentsHeight=this.standardContentsHeight()] - Height of the contents
 */
DKTools.Window.prototype.setupContentsHeight = function(contentsHeight) {
    this._contentsHeight = contentsHeight || this.standardContentsHeight();
};

/**
 * Sets the sprite of the contents
 * @param {DKTools.Sprite | *} [contentsSprite=this.standardContentsSprite()] - Contents sprite
 */
DKTools.Window.prototype.setupContentsSprite = function(contentsSprite) {
    if (this._windowContentsSprite) {
        this.removeChild(this._windowContentsSprite);
    }

    /**
     * @private
     * @readonly
     * @type {DKTools.Sprite | *}
     */
    this._windowContentsSprite = contentsSprite || this.standardContentsSprite();

    this.addChildAt(this._windowContentsSprite,
        this.children.indexOf(this._windowCursorSprite));
};

// U methods

/**
 * Updates the window
 * @version 10.0.0
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
 * @version 10.0.0
 */
DKTools.Window.prototype.updateContents = function() {
    if (DKTools.Utils.isFunction(this._windowContentsSprite.updateAll)) {
        this._windowContentsSprite.updateAll();
    }
};

/**
 * Updates the opening of the window
 * @override
 * @version 10.0.5
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
 * @version 10.0.5
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


