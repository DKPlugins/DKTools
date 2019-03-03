//===========================================================================
// DKTools.Window
//===========================================================================

DKTools.Window.prototype = Object.create(Window_Base.prototype);
DKTools.Utils.mixin(DKTools.Window.prototype, DKTools.Base.prototype);
DKTools.Window.prototype.constructor = DKTools.Window;

// properties

Object.defineProperties(DKTools.Window.prototype, {

    /**
     * Real width of the window (not including scaling)
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Window.prototype
     */
    realWidth: {
        get: function() {
            return this._width;
        },
        set: function(value) {
            this._width = value;

            this._refreshAllParts();
        },
        configurable: true
    },

    /**
     * Real height of the window (not including scaling)
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Window.prototype
     */
    realHeight: {
        get: function() {
            return this._height;
        },
        set: function(value) {
            this._height = value;

            this._refreshAllParts();
        },
        configurable: true
    },

    /**
     * Width of the window (taking into account scaling)
     *
     * @type {Number}
     * @memberof DKTools.Window.prototype
     */
    width: {
        get: function() {
            return this.realWidth * this.scale.x;
        },
        set: function(value) {
            this._width = Math.floor(value / this.scale.x);

            this._refreshAllParts();
        },
        configurable: true
    },

    /**
     * Height of the window (taking into account scaling)
     *
     * @type {Number}
     * @memberof DKTools.Window.prototype
     */
    height: {
        get: function() {
            return this.realHeight * this.scale.y;
        },
        set: function(value) {
            this._height = Math.floor(value / this.scale.y);

            this._refreshAllParts();
        },
        configurable: true
    },

    /**
     * Origin
     *
     * @readonly
     * @type {Point}
     * @memberof DKTools.Window.prototype
     */
    origin: {
        get: function() {
            return this._origin;
        },
        configurable: true
    },

    /**
     * Opacity of the window
     *
     * @type {Number}
     * @memberof DKTools.Window.prototype
     */
    windowOpacity: {
        get: function() {
            return this._windowSpriteContainer.alpha * 255;
        },
        set: function(value) {
            this._windowSpriteContainer.alpha = DKTools.Utils.Number.clamp(value, 0, 255) / 255;
        },
        configurable: true
    },

    /**
     * Opacity of the frame
     *
     * @type {Number}
     * @memberof DKTools.Window.prototype
     */
    frameOpacity: {
        get: function() {
            return this._windowFrameSprite.alpha * 255;
        },
        set: function(value) {
            this._windowFrameSprite.alpha = DKTools.Utils.Number.clamp(value, 0, 255) / 255;
        },
        configurable: true
    },

    /**
     * Opacity of the window
     *
     * @readonly
     * @type {Object}
     * @memberof DKTools.Window.prototype
     */
    opacity: {
        get: function() {
            return this._opacity;
        },
        configurable: true
    },

    /**
     * Tone of the window
     *
     * @readonly
     * @type {Number[]}
     * @memberof DKTools.Window.prototype
     */
    tone: {
        get: function() {
            return this._tone;
        },
        configurable: true
    },

    /**
     * Sprite of the contents
     *
     * @readonly
     * @type {DKTools.Sprite}
     * @memberof DKTools.Window.prototype
     */
    contentsSprite: {
        get: function() {
            return this._windowContentsSprite;
        },
        configurable: true
    },

    /**
     * Sprite of the frame
     *
     * @readonly
     * @type {Sprite}
     * @memberof DKTools.Window.prototype
     */
    frameSprite: {
        get: function() {
            return this._windowFrameSprite;
        },
        configurable: true
    },

    /**
     * Sprite of the background
     *
     * @readonly
     * @type {Sprite}
     * @memberof DKTools.Window.prototype
     */
    backSprite: {
        get: function() {
            return this._windowBackSprite;
        },
        configurable: true
    },

    /**
     * Bitmap of the contents sprite
     * To support functions from DKTools.Base
     *
     * @type {Bitmap}
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
    },

    /**
     * Arrows of the window
     *
     * @since 6.1.0
     * @readonly
     * @type {DKTools.Sprite.Arrow[]}
     * @memberof DKTools.Window.prototype
     */
    arrows: {
        get: function() {
            return this._arrows;
        },
        configurable: true
    }

});

// initialize methods

/**
 * Initializes a class object
 *
 * @override
 *
 * @param {Number | Object} [object] - The X coordinate
 * @param {Number} [y] - The Y coordinate
 * @param {Number} [width] - Width of the window
 * @param {Number} [height] - Height of the window
 *
 * @see PIXI.Container
 * @see DKTools.Base.prototype.initialize
 */
DKTools.Window.prototype.initialize = function(object, y, width, height) {
    PIXI.Container.call(this);
    DKTools.Base.prototype.initialize.call(this, object, y, width, height);
};

// A methods

/**
 * Adds children objects to processing
 *
 * @private
 * @override
 *
 * @see DKTools.Base.prototype._addAllChildren
 * @see DKTools.Window.prototype._addAllParts
 */
DKTools.Window.prototype._addAllChildren = function() {
    DKTools.Base.prototype._addAllChildren.call(this);
    this._addAllParts();
};

/**
 * Adds all parts of the window to processing
 *
 * @version 3.1.0
 * @private
 *
 * @see DKTools.Window.prototype._addSpriteContainer
 * @see DKTools.Window.prototype._addPauseSignSprite
 */
DKTools.Window.prototype._addAllParts = function() {
    this._addSpriteContainer();
    this._addPauseSignSprite();
    this._addArrows();
};

/**
 * Adds the container of the sprites to processing
 *
 * @private
 *
 * @see DKTools.Window.prototype.hasSpriteContainer
 * @see DKTools.Window.prototype.hasBackSprite
 * @see DKTools.Window.prototype.hasFrameSprite
 */
DKTools.Window.prototype._addSpriteContainer = function() {
    if (this.hasSpriteContainer()) {
        if (this.hasBackSprite()) {
            this._windowSpriteContainer.addChild(this._windowBackSprite);
        }

        if (this.hasFrameSprite()) {
            this._windowSpriteContainer.addChild(this._windowFrameSprite);
        }

        this.addChild(this._windowSpriteContainer);
    }
};

/**
 * Adds the sprite of the contents to processing
 *
 * @private
 *
 * @see DKTools.Window.prototype.hasContentsSprite
 */
DKTools.Window.prototype._addContentsSprite = function() {
    if (this.hasContentsSprite()) {
        this.addChild(this._windowContentsSprite);
    }
};

/**
 * Adds the sprite of the pause sign to processing
 *
 * @private
 *
 * @see DKTools.Window.prototype.hasPauseSignSprite
 */
DKTools.Window.prototype._addPauseSignSprite = function() {
    if (this.hasPauseSignSprite()) {
        this.addChild(this._windowPauseSignSprite);
    }
};

/**
 * Adds the arrows to processing
 *
 * @since 3.1.0
 * @private
 */
DKTools.Window.prototype._addArrows = function() {
    _.forEach(['up', 'down', 'left', 'right'], arrowType => {
        const arrow = this.findArrow(arrowType);

        if (arrow) {
            this.addChild(arrow);
        }
    });
};

/**
 * Activates the window
 *
 * @override
 */
DKTools.Window.prototype.activate = function() {
    DKTools.Base.prototype.activate.call(this);

    if (this.hasContentsSprite()) {
        this._windowContentsSprite.activate();
    }
};

/**
 * Adds children objects to processing
 *
 * @override
 */
DKTools.Window.prototype.addAllChildren = function() {
    DKTools.Base.prototype.addAllChildren.call(this);
    this.addContentsSprite();
};

/**
 * Adds the sprite of the contents to processing
 */
DKTools.Window.prototype.addContentsSprite = function() {
    this._addContentsSprite();
    this._refreshContents();
};

// C methods

/**
 * Clears all data
 *
 * @private
 * @override
 *
 * @see DKTools.Base.prototype._clearAll
 * @see DKTools.Window.prototype._clearIsWindow
 * @see DKTools.Window.prototype._clearOpenness
 * @see DKTools.Window.prototype._clearPadding
 * @see DKTools.Window.prototype._clearMargin
 * @see DKTools.Window.prototype._clearColorTone
 * @see DKTools.Window.prototype._clearOrigin
 * @see DKTools.Window.prototype._clearArrows
 */
DKTools.Window.prototype._clearAll = function() {
    DKTools.Base.prototype._clearAll.call(this);
    this._clearIsWindow();
    this._clearOpenness();
    this._clearPadding();
    this._clearMargin();
    this._clearColorTone();
    this._clearOrigin();
    this._clearArrows();
};

/**
 * Clears the "isWindow"
 *
 * @private
 */
DKTools.Window.prototype._clearIsWindow = function() {
    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._isWindow = true;
};

/**
 * Clears the openness
 *
 * @private
 *
 * @see DKTools.Window.prototype.standardOpenness
 */
DKTools.Window.prototype._clearOpenness = function() {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._openness = this.standardOpenness();
};

/**
 * Clears the padding
 *
 * @private
 *
 * @see DKTools.Window.prototype.standardPadding
 */
DKTools.Window.prototype._clearPadding = function() {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._padding = this.standardPadding();
};

/**
 * Clears the margin
 *
 * @private
 *
 * @see DKTools.Window.prototype.standardMargin
 */
DKTools.Window.prototype._clearMargin = function() {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._margin = this.standardMargin();
};

/**
 * Clears the color tone
 *
 * @private
 *
 * @see DKTools.Window.prototype.standardTone
 */
DKTools.Window.prototype._clearColorTone = function() {
    /**
     * @private
     * @readonly
     * @type {Number[]}
     */
    this._colorTone = this.standardTone();
};

/**
 * Clears the origin
 *
 * @private
 *
 * @see DKTools.Window.prototype.standardOrigin
 */
DKTools.Window.prototype._clearOrigin = function() {
    /**
     * @private
     * @readonly
     * @type {Point}
     */
    this._origin = this.standardOrigin();
};

/**
 * Clears the arrows
 *
 * @private
 */
DKTools.Window.prototype._clearArrows = function() {
    /**
     * @private
     * @readonly
     * @type {DKTools.Sprite.Arrow[]}
     */
    this._arrows = [];
};

/**
 * Creates all
 *
 * @private
 * @override
 *
 * @see DKTools.Base.prototype._createAll
 * @see DKTools.Window.prototype._createAllParts
 * @see DKTools.Window.prototype._createWindowskin
 */
DKTools.Window.prototype._createAll = function() {
    DKTools.Base.prototype._createAll.call(this);
    this._createAllParts();
    this._createWindowskin();
};

/**
 * Creates all parts of the window
 *
 * @version 3.1.0
 * @private
 * @override
 *
 * @see DKTools.Window.prototype._createSpriteContainer
 * @see DKTools.Window.prototype._createBackSprite
 * @see DKTools.Window.prototype._createFrameSprite
 * @see DKTools.Window.prototype._createPauseSignSprite
 */
DKTools.Window.prototype._createAllParts = function() {
    this._createSpriteContainer();
    this._createBackSprite();
    this._createFrameSprite();
    this._createPauseSignSprite();
    this._createArrows();
};

/**
 * Creates the container of the sprites
 *
 * @private
 *
 * @see PIXI.Container
 */
DKTools.Window.prototype._createSpriteContainer = function() {
    /**
     * @private
     * @readonly
     * @type {PIXI.Container}
     */
    this._windowSpriteContainer = new PIXI.Container();
};

/**
 * Creates the sprite of the background
 *
 * @private
 *
 * @see DKTools.Window.prototype.needsCreateBackSprite
 * @see DKTools.Window.prototype.standardBackOpacity
 * @see DKTools.Window.prototype.standardBackVisible
 */
DKTools.Window.prototype._createBackSprite = function() {
    if (this.needsCreateBackSprite()) {
        /**
         * @private
         * @readonly
         * @type {Sprite}
         */
        this._windowBackSprite = new Sprite();

        this._windowBackSprite.opacity = this.standardBackOpacity();
        this._windowBackSprite.visible = this.standardBackVisible();
    }
};

/**
 * Creates the sprtie of the frame
 *
 * @private
 *
 * @see DKTools.Window.prototype.needsCreateFrameSprite
 * @see DKTools.Window.prototype.standardFrameVisible
 */
DKTools.Window.prototype._createFrameSprite = function() {
    if (this.needsCreateFrameSprite()) {
        /**
         * @private
         * @readonly
         * @type {Sprite}
         */
        this._windowFrameSprite = new Sprite();

        this._windowFrameSprite.visible = this.standardFrameVisible();
    }
};

/**
 * Creates the sprite of the pause sign
 *
 * @private
 *
 * @see DKTools.Window.prototype.needsCreatePauseSignSprite
 */
DKTools.Window.prototype._createPauseSignSprite = function() {
    if (this.needsCreatePauseSignSprite()) {
        /**
         * @private
         * @readonly
         * @type {Sprite}
         */
        this._windowPauseSignSprite = new Sprite();
    }
};

/**
 * Creates the arrows
 *
 * @since 3.1.0
 * @static
 *
 * @see DKTools.Window.prototype.needsCreateDownArrowSprite
 * @see DKTools.Window.prototype.needsCreateUpArrowSprite
 * @see DKTools.Window.prototype.needsCreateRightArrowSprite
 * @see DKTools.Window.prototype.needsCreateLeftArrowSprite
 * @see DKTools.Window.prototype.createArrow
 * @see DKTools.Window.prototype.onDownArrowUpdate
 * @see DKTools.Window.prototype.onDownArrowMouseClick
 * @see DKTools.Window.prototype.onDownArrowMouseLongPress
 * @see DKTools.Window.prototype.onUpArrowUpdate
 * @see DKTools.Window.prototype.onUpArrowMouseClick
 * @see DKTools.Window.prototype.onUpArrowMouseLongPress
 * @see DKTools.Window.prototype.onRightArrowUpdate
 * @see DKTools.Window.prototype.onRightArrowMouseClick
 * @see DKTools.Window.prototype.onRightArrowMouseLongPress
 * @see DKTools.Window.prototype.onLeftArrowUpdate
 * @see DKTools.Window.prototype.onLeftArrowMouseClick
 * @see DKTools.Window.prototype.onLeftArrowMouseLongPress
 * @see DKTools.Window.prototype.standardArrowStateNormal
 * @see DKTools.Window.prototype.standardArrowStatePressed
 */
DKTools.Window.prototype._createArrows = function() {
    if (!this.needsCreateArrowsSprites()) {
        return;
    }

    if (this.needsCreateUpArrowSprite()) {
        this.createArrow('up', 'up', {
            onUpdate: this.onUpArrowUpdate.bind(this),
            onMouseClick: this.onUpArrowMouseClick.bind(this),
            onMouseLongPress: this.onUpArrowMouseLongPress.bind(this),
            onStateNormal: this.standardArrowStateNormal(),
            onStatePressed: this.standardArrowStatePressed()
        });
    }

    if (this.needsCreateDownArrowSprite()) {
        this.createArrow('down', 'down', {
            onUpdate: this.onDownArrowUpdate.bind(this),
            onMouseClick: this.onDownArrowMouseClick.bind(this),
            onMouseLongPress: this.onDownArrowMouseLongPress.bind(this),
            onStateNormal: this.standardArrowStateNormal(),
            onStatePressed: this.standardArrowStatePressed()
        });
    }

    if (this.needsCreateLeftArrowSprite()) {
        this.createArrow('left', 'left', {
            onUpdate: this.onLeftArrowUpdate.bind(this),
            onMouseClick: this.onLeftArrowMouseClick.bind(this),
            onMouseLongPress: this.onLeftArrowMouseLongPress.bind(this),
            onStateNormal: this.standardArrowStateNormal(),
            onStatePressed: this.standardArrowStatePressed()
        });
    }

    if (this.needsCreateRightArrowSprite()) {
        this.createArrow('right', 'right', {
            onUpdate: this.onRightArrowUpdate.bind(this),
            onMouseClick: this.onRightArrowMouseClick.bind(this),
            onMouseLongPress: this.onRightArrowMouseLongPress.bind(this),
            onStateNormal: this.standardArrowStateNormal(),
            onStatePressed: this.standardArrowStatePressed()
        });
    }
};

/**
 * Creates the window skin
 *
 * @version 3.1.1
 * @private
 *
 * @see DKTools.Window.prototype.loadWindowskin
 */
DKTools.Window.prototype._createWindowskin = function() {
    this.windowskin = DKTools.Utils.Bitmap.load({
        folder: 'img/system',
        filename: this.standardWindowskin()
    });
};

/**
 * Returns true if the window can be updated and redrawn
 *
 * @since 1.1.0
 * @override
 * @returns {Boolean} Window can be updated and redrawn
 */
DKTools.Window.prototype.canRedrawAll = function() {
    return this.hasContentsSprite() && DKTools.Base.prototype.canRedrawAll.call(this);
};

/**
 * Changes the font of the contents
 *
 * @since 6.0.0
 *
 * @param {Object} font - Text font
 *
 * @param {String} [font.fontFace] - Font face
 * @param {Number} [font.fontSize] - Font size
 * @param {Boolean} [font.fontItalic] - Font italic
 *
 * @see DKTools.Window.prototype.hasContentsSprite
 * @see DKTools.Sprite.prototype.changeFont
 */
DKTools.Window.prototype.changeFont = function(font) {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.changeFont(font);
    }
};

/**
 * Changes the text color of the contents
 *
 * @since 6.0.0
 * @override
 *
 * @param {String} textColor - Text color
 *
 * @see DKTools.Window.prototype.hasContentsSprite
 * @see DKTools.Sprite.prototype.changeTextColor
 */
DKTools.Window.prototype.changeTextColor = function(textColor) {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.changeTextColor(textColor);
    }
};

/**
 * Changes the paint opacity of the contents
 *
 * @since 6.0.0
 * @override
 *
 * @param {Number} paintOpacity - Paint opacity
 *
 * @see DKTools.Window.prototype.hasContentsSprite
 * @see DKTools.Sprite.prototype.changePaintOpacity
 */
DKTools.Window.prototype.changePaintOpacity = function(paintOpacity) {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.changePaintOpacity(paintOpacity);
    }
};

/**
 * Checks size of the window
 * Returns the number of changed parameters
 *
 * @override
 *
 * @see DKTools.Window.prototype.getMinWidth
 * @see DKTools.Window.prototype.getMinHeight
 *
 * @returns {Number} Number of changed parameters
 */
DKTools.Window.prototype.checkSize = function() {
    const minWidth = this.getMinWidth();
    const minHeight = this.getMinHeight();
    let changed = 0;

    if (this._width < minWidth) {
        this.setupWidth(minWidth);

        changed++;
    }

    if (this._height < minHeight) {
        this.setupHeight(minHeight);

        changed++;
    }

    return changed;
};

/**
 * Creates the arrow
 *
 * @version 3.0.0
 *
 * @param {String} arrowType - Type
 * @param {Number | String | *} id - ID
 * @param {Object} [options={}] - Options
 *
 * @param {Number} [options.x] - The X coordinate
 * @param {Number | String} [options.y] - The Y coordinate or line number (String)
 * @param {Function} [options.onMouseDown] -
 * @param {Function} [options.onMouseUp] -
 * @param {Function} [options.onMouseClick] -
 * @param {Function} [options.onMouseLongPress] -
 * @param {Function} [options.onMouseLongPressStarted] -
 * @param {Function} [options.onMouseLongPressFinished] -
 * @param {Function} [options.onStateNormal] -
 * @param {Function} [options.onStatePressed] -
 *
 * @see DKTools.Sprite.Arrow
 * @see DKTools.Event.prototype.onUpdate
 *
 * @returns {DKTools.Sprite.Arrow} Created arrow
 */
DKTools.Window.prototype.createArrow = function(arrowType, id, options = {}) {
    const arrow = new DKTools.Sprite.Arrow({ ...options, id, arrowType });

    arrow.start();

    arrow.addEvent({
        type: 'update',
        onUpdate: event => {
            if (this.isOpenAndVisible()) {
                arrow.show();
            } else {
                arrow.hide();
            }

            if (DKTools.Utils.isFunction(options.onUpdate)) {
                options.onUpdate(event);
            }
        }
    });

    if (DKTools.Utils.isFunction(options.onMouseDown)) {
        arrow.addEvent({
            type: 'mouse-down-left',
            onUpdate: options.onMouseDown
        });
    }

    if (DKTools.Utils.isFunction(options.onMouseUp)) {
        arrow.addEvent({
            type: 'mouse-up-left',
            onUpdate: options.onMouseUp
        });
    }

    if (DKTools.Utils.isFunction(options.onMouseClick)) {
        arrow.addEvent({
            type: 'mouse-click-left',
            onUpdate: options.onMouseClick
        });
    }

    if (DKTools.Utils.isFunction(options.onMouseLongPress)) {
        arrow.addEvent({
            type: 'mouse-long-press-left',
            onUpdate: options.onMouseLongPress
        });
    }

    if (DKTools.Utils.isFunction(options.onMouseLongPressStarted)) {
        arrow.addEvent({
            type: 'mouse-long-press-left-started',
            onUpdate: options.onMouseLongPressStarted
        });
    }

    if (DKTools.Utils.isFunction(options.onMouseLongPressFinished)) {
        arrow.addEvent({
            type: 'mouse-long-press-left-finished',
            onUpdate: options.onMouseLongPressFinished
        });
    }

    if (DKTools.Utils.isFunction(options.onStateNormal)) {
        arrow.addEvent({
            type: 'state-normal',
            onUpdate: options.onStateNormal
        });
    }

    if (DKTools.Utils.isFunction(options.onStatePressed)) {
        arrow.addEvent({
            type: 'state-pressed',
            onUpdate: options.onStatePressed
        });
    }

    this._arrows.push(arrow);

    this.addChild(arrow);

    return arrow;
};

// D methods

/**
 * Deactivates the window
 *
 * @override
 */
DKTools.Window.prototype.deactivate = function() {
    DKTools.Base.prototype.deactivate.call(this);

    if (this.hasContentsSprite()) {
        this._windowContentsSprite.deactivate();
    }
};

/**
 * Draws the text
 * Returns true if successfully completed
 *
 * @version 6.0.0
 * @override
 *
 * @param {String} text - Text
 * @param {Object} [options={}] - Options for drawing
 *
 * @see DKTools.Window.prototype.hasContentsSprite
 * @see DKTools.Sprite.prototype.drawText
 *
 * @returns {Boolean} Successfully completed
 */
DKTools.Window.prototype.drawText = function(text, options) {
    if (this.hasContentsSprite()) {
        return this._windowContentsSprite.drawText(text, options);
    }

    return false;
};

// F methods

/**
 * Returns the arrow by ID
 *
 * @since 6.0.0
 *
 * @param {Number | String} id - ID of the arrow
 *
 * @returns {DKTools.Sprite.Arrow | undefined} Sprite of the arrow or undefined
 */
DKTools.Window.prototype.findArrow = function(id) {
    return _.find(this._arrows, { id });
};

// G methods

/**
 * Returns the minimum width of the window
 *
 * @override
 *
 * @see DKTools.Window.prototype.standardPadding
 * @see DKTools.Base.prototype.getMinWidth
 *
 * @returns {Number} Minimum width of the window
 */
DKTools.Window.prototype.getMinWidth = function() {
    return this.standardPadding() * 2 + DKTools.Base.prototype.getMinWidth.call(this);
};

/**
 * Returns the minimum height of the window
 *
 * @override
 *
 * @see DKTools.Window.prototype.standardPadding
 * @see DKTools.Base.prototype.getMinHeight
 *
 * @returns {Number} Minimum height of the window
 */
DKTools.Window.prototype.getMinHeight = function() {
    return this.standardPadding() * 2 + DKTools.Base.prototype.getMinHeight.call(this);
};

/**
 * Returns the width of the contents
 *
 * @returns {Number} Width of the contents
 */
DKTools.Window.prototype.getContentsWidth = function() {
    if (DKTools.Utils.isFunction(this._contentsWidth)) {
        return this._contentsWidth(this);
    }

    return this._contentsWidth;
};

/**
 * Returns the height of the contents
 *
 * @returns {Number} Height of the contents
 */
DKTools.Window.prototype.getContentsHeight = function() {
    if (DKTools.Utils.isFunction(this._contentsHeight)) {
        return this._contentsHeight(this);
    }

    return this._contentsHeight;
};

/**
 * Returns the size of the contents
 *
 * @see DKTools.Window.prototype.getContentsWidth
 * @see DKTools.Window.prototype.getContentsHeight
 *
 * @returns {{ width: Number, height: Number }} Size of the contents
 */
DKTools.Window.prototype.getContentsSize = function() {
    return { width: this.getContentsWidth(), height: this.getContentsHeight() };
};

/**
 * Returns the current opacity of the window
 *
 * @returns {Number} Current opacity of the window
 */
DKTools.Window.prototype.getCurrentOpacity = function() {
    return this.windowOpacity;
};

// H methods

/**
 * Returns true if the window has the bitmap
 *
 * @version 6.0.0
 * @override
 *
 * @see DKTools.Window.prototype.hasContentsSprite
 *
 * @returns {Boolean} Window has the bitmap
 */
DKTools.Window.prototype.hasBitmap = function() {
    if (this.hasContentsSprite()) {
        return this._windowContentsSprite.hasBitmap();
    }

    return false;
};

/**
 * Returns true if the window has the container of the sprites
 *
 * @returns {Boolean} Window has the container of the sprites
 */
DKTools.Window.prototype.hasSpriteContainer = function() {
    return !!this._windowSpriteContainer;
};

/**
 * Returns true if the window has the sprite of the background
 *
 * @returns {Boolean} Window has the sprite of the background
 */
DKTools.Window.prototype.hasBackSprite = function() {
    return !!this._windowBackSprite;
};

/**
 * Returns true if the window has the sprite of the frame
 *
 * @returns {Boolean} Window has the sprite of the frame
 */
DKTools.Window.prototype.hasFrameSprite = function() {
    return !!this._windowFrameSprite;
};

/**
 * Returns true if the window has the sprite of the contents
 *
 * @returns {Boolean} Window has the sprite of the contents
 */
DKTools.Window.prototype.hasContentsSprite = function() {
    return !!this._windowContentsSprite;
};

/**
 * Returns true if the window has the arrow by ID
 *
 * @param {Number | String | *} id - ID of the arrow
 *
 * @see DKTools.Window.prototype.findArrow
 *
 * @returns {Boolean} Window has the arrow by ID
 */
DKTools.Window.prototype.hasArrow = function(id) {
    return !!this.findArrow(id);
};

/**
 * Returns true if the window has the sprites of the arrows
 *
 * @returns {Boolean} Window has the sprites of the arrows
 */
DKTools.Window.prototype.hasArrowSprites = function() {
    return this.hasUpArrowSprite() && this.hasDownArrowSprite() &&
        this.hasLeftArrowSprite() && this.hasRightArrowSprite();
};

/**
 * Returns true if the window has the sprite of the arrow of up
 *
 * @see DKTools.Window.prototype.hasArrow
 *
 * @returns {Boolean} Window has the sprite of the arrow of up
 */
DKTools.Window.prototype.hasUpArrowSprite = function() {
    return this.hasArrow('up');
};

/**
 * Returns true if the window has the sprite of the arrow of down
 *
 * @see DKTools.Window.prototype.hasArrow
 *
 * @returns {Boolean} Window has the sprite of the arrow of down
 */
DKTools.Window.prototype.hasDownArrowSprite = function() {
    return this.hasArrow('down');
};

/**
 * Returns true if the window has the sprite of the arrow of left
 *
 * @see DKTools.Window.prototype.hasArrow
 *
 * @returns {Boolean} Window has the sprite of the arrow of left
 */
DKTools.Window.prototype.hasLeftArrowSprite = function() {
    return this.hasArrow('left');
};

/**
 * Returns true if the window has the sprite of the arrow of right
 *
 * @see DKTools.Window.prototype.hasArrow
 *
 * @returns {Boolean} Window has the sprite of the arrow of right
 */
DKTools.Window.prototype.hasRightArrowSprite = function() {
    return this.hasArrow('right');
};

/**
 * Returns true if the window has the sprite of the pause sign
 *
 * @returns {Boolean} Window has the sprite of the pause sign
 */
DKTools.Window.prototype.hasPauseSignSprite = function() {
    return !!this._windowPauseSignSprite;
};

/**
 * Returns true if the window has the sprite of the background dimmer
 *
 * @returns {Boolean} Window has the sprite of the background dimmer
 */
DKTools.Window.prototype.hasBackgroundDimmer = function() {
    return !!this._dimmerSprite;
};

/**
 * Hides the background
 *
 * @see DKTools.Window.prototype.hasBackSprite
 */
DKTools.Window.prototype.hideBack = function() {
    if (this.hasBackSprite()) {
        this._windowBackSprite.visible = false;
    }
};

/**
 * Hides the contents
 */
DKTools.Window.prototype.hideContents = function() {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.hide();
    }
};

/**
 * Hides the frame
 */
DKTools.Window.prototype.hideFrame = function() {
    if (this.hasFrameSprite()) {
        this._windowFrameSprite.visible = false;
    }
};

// I method

/**
 * Returns true if the window is open and visible
 *
 * @returns {Boolean} Window is open and visible
 */
DKTools.Window.prototype.isOpenAndVisible = function() {
    return this.isOpen() && this.isVisible();
};

/**
 * Returns true if the window is open and active
 *
 * @returns {Boolean} Window is open and active
 */
DKTools.Window.prototype.isOpenAndActive = function() {
    return this.isOpen() && this.isActive();
};

/**
 * Returns true if the coordinates is inside the window
 *
 * @override
 *
 * @param {Number} x - The X coordinate
 * @param {Number} y - The Y coordinate
 *
 * @returns {Boolean} Coordinates is inside the window
 */
DKTools.Window.prototype.isInside = function(x, y) {
    const localX = this.canvasToLocalX(x);
    const localY = this.canvasToLocalY(y);
    const frame = new Rectangle(0, 0, this.width, this.height);

    return frame.contains(localX, localY);
};

// N methods

/**
 * Returns true if needs to create the sprite of the background
 *
 * @returns {Boolean} Needs to create the sprite of the background
 */
DKTools.Window.prototype.needsCreateBackSprite = function() {
    return true;
};

/**
 * Returns true if needs to create the sprite of the frame
 *
 * @returns {Boolean} Needs to create the sprite of the frame
 */
DKTools.Window.prototype.needsCreateFrameSprite = function() {
    return true;
};

/**
 * Returns true if needs to create the sprites of the arrows
 *
 * @returns {Boolean} Needs to create the sprites of the arrows
 */
DKTools.Window.prototype.needsCreateArrowsSprites = function() {
    return false;
};

/**
 * Returns true if needs to create the sprite of the down arrow
 *
 * @returns {Boolean} Needs to create the sprite of the down arrow
 */
DKTools.Window.prototype.needsCreateDownArrowSprite = function() {
    return true;
};

/**
 * Returns true if needs to create the sprite of the up arrow
 *
 * @returns {Boolean} Needs to create the sprite of the up arrow
 */
DKTools.Window.prototype.needsCreateUpArrowSprite = function() {
    return true;
};

/**
 * Returns true if needs to create the sprite of the left arrow
 *
 * @returns {Boolean} Needs to create the sprite of the left arrow
 */
DKTools.Window.prototype.needsCreateLeftArrowSprite = function() {
    return true;
};

/**
 * Returns true if needs to create the sprite of the right arrow
 *
 * @returns {Boolean} Needs to create the sprite of the right arrow
 */
DKTools.Window.prototype.needsCreateRightArrowSprite = function() {
    return true;
};

/**
 * Returns true if needs to create the sprite of the pause sign
 *
 * @returns {Boolean} Needs to create the sprite of the pause sign
 */
DKTools.Window.prototype.needsCreatePauseSignSprite = function() {
    return true;
};

// O methods

/**
 * Callback function that will be processing update of the arrow of up
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onUpArrowUpdate = function(event) {
    // to be overridden by plugins
};

/**
 * Callback function that will be processing update of the arrow of down
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onDownArrowUpdate = function(event) {
    // to be overridden by plugins
};

/**
 * Callback function that will be processing update of the arrow of left
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onLeftArrowUpdate = function(event) {
    // to be overridden by plugins
};

/**
 * Callback function that will be processing update of the arrow of right
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onRightArrowUpdate = function(event) {
    // to be overridden by plugins
};

/**
 * Callback function that will be processing click of the arrow of up
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onUpArrowMouseClick = function(event) {
    // to be overridden by plugins
};

/**
 * Callback function that will be processing click of the arrow of down
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onDownArrowMouseClick = function(event) {
    // to be overridden by plugins
};

/**
 * Callback function that will be processing click of the arrow of left
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onLeftArrowMouseClick = function(event) {
    // to be overridden by plugins
};

/**
 * Callback function that will be processing click of the arrow of right
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onRightArrowMouseClick = function(event) {
    // to be overridden by plugins
};

/**
 * Callback function that will be processing long press of the arrow of up
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onUpArrowMouseLongPress = function(event) {
    // to be overridden by plugins
};

/**
 * Callback function that will be processing long press of the arrow of down
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onDownArrowMouseLongPress = function(event) {
    // to be overridden by plugins
};

/**
 * Callback function that will be processing long press of the arrow of left
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onLeftArrowMouseLongPress = function(event) {
    // to be overridden by plugins
};

/**
 * Callback function that will be processing long press of the arrow of right
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onRightArrowMouseLongPress = function(event) {
    // to be overridden by plugins
};

// R methods

/**
 * Updates all parts of the window
 *
 * @version 3.1.0
 * @private
 * @override
 *
 * @see DKTools.Window.prototype._refreshBack
 * @see DKTools.Window.prototype._refreshFrame
 * @see DKTools.Window.prototype._refreshContents
 * @see DKTools.Window.prototype._refreshPauseSign
 * @see DKTools.Window.prototype._refreshArrows
 */
DKTools.Window.prototype._refreshAllParts = function() {
    this._refreshBack();
    this._refreshFrame();
    this._refreshContents();
    this._refreshPauseSign();
    this._refreshArrows();
};

/**
 * Updates the background of the window
 *
 * @private
 * @override
 *
 * @see Window.prototype._refreshBack
 */
DKTools.Window.prototype._refreshBack = function() {
    if (this.hasBackSprite()) {
        Window.prototype._refreshBack.call(this);
    }
};

/**
 * Updates the frame of the window
 *
 * @private
 * @override
 *
 * @see Window.prototype._refreshFrame
 */
DKTools.Window.prototype._refreshFrame = function() {
    if (this.hasFrameSprite()) {
        Window.prototype._refreshFrame.call(this);
    }
};

/**
 * Updates the contents
 *
 * @private
 * @override
 */
DKTools.Window.prototype._refreshContents = function() {
    if (this.hasContentsSprite()) {
        let position = this._contentsPosition;

        if (DKTools.Utils.isFunction(position)) {
            position = position(this);
        }

        this._windowContentsSprite.move(position);
    }
};

/**
 * Updates the sprite of the pause sign
 *
 * @private
 * @override
 *
 * @see Window.prototype._refreshPauseSign
 */
DKTools.Window.prototype._refreshPauseSign = function() {
    if (this.hasPauseSignSprite()) {
        Window.prototype._refreshPauseSign.call(this);
    }
};

/**
 * Updates the arrows
 *
 * @since 3.1.0
 * @private
 * @override
 */
DKTools.Window.prototype._refreshArrows = function() {
    const arrows = {
        up: this.standardUpArrowPosition(),
        down: this.standardDownArrowPosition(),
        left: this.standardLeftArrowPosition(),
        right: this.standardRightArrowPosition()
    };

    _.forEach(arrows, (position, arrowType) => {
        const arrow = this.findArrow(arrowType);

        if (arrow) {
            arrow.move(position);
        }
    });
};

/**
 * Redraws all
 *
 * @version 1.1.0
 */
DKTools.Window.prototype.redrawAll = function() {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.redrawAll();
    }
};

/**
 * Updates and redraws all
 *
 * @version 6.0.0
 * @override
 *
 * @see DKTools.Base.prototype.refreshAll
 */
DKTools.Window.prototype.refreshAll = function() {
    this._refreshAllParts();
    DKTools.Base.prototype.refreshAll.call(this);
};

/**
 * Refreshes the arrows
 *
 * @since 2.0.0
 */
DKTools.Window.prototype.refreshArrows = function() {
    _.forEach(this._arrows, arrow => {
        arrow.refreshAll();
    });
};

/**
 * Removes children objects from processing
 *
 * @override
 */
DKTools.Window.prototype.removeAllChildren = function() {
    DKTools.Base.prototype.removeAllChildren.call(this);
    this.removeContentsSprite();
};

/**
 * Removes the sprite of the contents from processing
 */
DKTools.Window.prototype.removeContentsSprite = function() {
    if (this.hasContentsSprite()) {
        this.removeChild(this._windowContentsSprite);
    }
};

/**
 * Removes the arrow by ID
 *
 * @param {Number | String} id - ID of the arrow
 *
 * @see DKTools.Window.prototype.findArrow
 * @see DKTools.Utils.Array.remove
 * @see DKTools.Window.prototype.removeChild
 */
DKTools.Window.prototype.removeArrow = function(id) {
    const arrow = this.findArrow(id);

    if (arrow) {
        DKTools.Utils.Array.remove(this._arrows, arrow);

        this.removeChild(arrow);
    }
};

/**
 * Resets all
 *
 * @since 6.0.0
 *
 * @see DKTools.Window.prototype.hasContentsSprite
 * @see DKTools.Sprite.prototype.resetAll
 */
DKTools.Window.prototype.resetAll = function() {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.resetAll();
    }
};

/**
 * Resets the font of the contents
 *
 * @since 6.0.0
 *
 * @see DKTools.Window.prototype.hasContentsSprite
 * @see DKTools.Sprite.prototype.resetFont
 */
DKTools.Window.prototype.resetFont = function() {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.resetFont();
    }
};

/**
 * Resets the text color of the contents
 *
 * @since 6.0.0
 * @override
 *
 * @see DKTools.Window.prototype.hasContentsSprite
 * @see DKTools.Sprite.prototype.resetTextColor
 */
DKTools.Window.prototype.resetTextColor = function() {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.resetTextColor();
    }
};

/**
 * Resets the paint opacity of the contents
 *
 * @since 6.0.0
 *
 * @see DKTools.Window.prototype.hasContentsSprite
 * @see DKTools.Sprite.prototype.resetPaintOpacity
 */
DKTools.Window.prototype.resetPaintOpacity = function() {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.resetPaintOpacity();
    }
};

/**
 * Changes the size of the window if they are different from the current ones
 * Returns true if the change occurred
 *
 * @override
 *
 * @param {Number} [width] - Width of the window
 * @param {Number} [height] - Height of the window
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activate the window
 *
 * @see DKTools.Window.prototype.getMinWidth
 * @see DKTools.Window.prototype.getMinHeight
 * @see DKTools.Window.prototype.setupSize
 * @see DKTools.Window.prototype.start
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Window.prototype.resize = function(width, height, blockStart = false, activate = false) {
    width = _.defaultTo(width, this.getMinWidth());
    height = _.defaultTo(height, this.getMinHeight());

    if (DKTools.Utils.isString(height)) { // number of lines
        height = this.getLineHeight() * parseFloat(height);
    }

    if (this._width === width && this._height === height) {
        return false;
    }

    const lastWidth = this._width;
    const lastHeight = this._height;

    this.setupSize(width, height);

    if (this._width === lastWidth && this._height === lastHeight) {
        return false;
    }

    if (!blockStart) {
        this.start();
    }

    if (activate) {
        this.activate();
    }

    return true;
};

// S methods

/**
 * Returns the standard openness of the window
 *
 * @returns {Number} Standard openness of the window
 */
DKTools.Window.prototype.standardOpenness = function() {
    return 255;
};

/**
 * Returns the standard openness speed of the window
 *
 * @returns {Number} Standard openness speed of the window
 */
DKTools.Window.prototype.standardOpennessSpeed = function() {
    return 16;
};

/**
 * Returns the standard margin of the window
 *
 * @returns {Number} Standard margin of the window
 */
DKTools.Window.prototype.standardMargin = function() {
    return 4;
};

/**
 * Returns the standard origin of the window
 *
 * @returns {Point} Standard origin of the window
 */
DKTools.Window.prototype.standardOrigin = function() {
    return new Point(0, 0);
};

/**
 * Returns the standard position of the arrow of up
 *
 * @since 3.1.0
 * @returns {Point} Standard position of the arrow of up
 */
DKTools.Window.prototype.standardUpArrowPosition = function() {
    return new Point(this._width / 2, 12);
};

/**
 * Returns the standard position of the arrow of down
 *
 * @since 3.1.0
 * @returns {Point} Standard position of the arrow of down
 */
DKTools.Window.prototype.standardDownArrowPosition = function() {
    return new Point(this._width / 2, this._height - 12);
};

/**
 * Returns the standard position of the arrow of left
 *
 * @since 3.1.0
 * @returns {Point} Standard position of the arrow of left
 */
DKTools.Window.prototype.standardLeftArrowPosition = function() {
    return new Point(12, this._height / 2);
};

/**
 * Returns the standard position of the arrow of right
 *
 * @since 3.1.0
 * @returns {Point} Standard position of the arrow of right
 */
DKTools.Window.prototype.standardRightArrowPosition = function() {
    return new Point(this._width - 12, this._height / 2);
};

/**
 * Returns the standard normal state of the arrow
 *
 * @returns {Function} Standard normal state of the arrow
 */
DKTools.Window.prototype.standardArrowStateNormal = function() {
    return event => {
        const arrow = event.target;

        arrow.setScale(1, 1);
        arrow.setOpacity(255);
    };
};

/**
 * Returns the standard pressed state of the arrow
 *
 * @returns {Function} Standard pressed state of the arrow
 */
DKTools.Window.prototype.standardArrowStatePressed = function() {
    return event => {
        const arrow = event.target;

        arrow.setScale(0.9, 0.9);
        arrow.setOpacity(160);
    };
};

/**
 * Returns the standard sprite of the contents
 *
 * @returns {DKTools.Sprite} Standard sprite of the contents
 */
DKTools.Window.prototype.standardContentsSprite = function() {
    return new DKTools.Sprite();
};

/**
 * Returns the standard X coordinate of the child
 *
 * @version 6.0.0
 * @returns {Number} Standard X coordinate of the child
 */
DKTools.Window.prototype.standardChildX = function() {
	return this._padding;
};

/**
 * Returns the standard Y coordinate of the child
 *
 * @version 6.0.0
 * @returns {Number} Standard Y coordinate of the child
 */
DKTools.Window.prototype.standardChildY = function() {
	return this._padding;
};

/**
 * Returns the standard position of the child
 *
 * @version 6.0.0
 * @returns {Function} Standard position of the child
 */
DKTools.Window.prototype.standardChildPosition = function() {
    return () => new Point(this.standardChildX(), this.standardChildY());
};

/**
 * Returns the standard position of the contents
 *
 * @version 6.0.0
 * @returns {Function} Standard position of the contents
 */
DKTools.Window.prototype.standardContentsPosition = function() {
    return this.standardChildPosition();
};

/**
 * Returns the standard visibility of the background
 *
 * @returns {Boolean} Standard visibility of the background
 */
DKTools.Window.prototype.standardBackVisible = function() {
    return true;
};

/**
 * Returns the standard visibility of the frame
 *
 * @returns {Boolean} Standard visibility of the frame
 */
DKTools.Window.prototype.standardFrameVisible = function() {
    return true;
};

/**
 * Returns the standard width of the contents
 *
 * @version 6.0.0
 * @returns {Function} Standard width of the contents
 */
DKTools.Window.prototype.standardContentsWidth = function() {
    return () => this._width - this._padding * 2;
};

/**
 * Returns the standard height of the contents
 *
 * @version 6.0.0
 * @returns {Function} Standard height of the contents
 */
DKTools.Window.prototype.standardContentsHeight = function() {
    return () => this._height - this._padding * 2;
};

/**
 * Returns the standard opacity of the window
 *
 * @returns {Number} Standard opacity of the window
 */
DKTools.Window.prototype.standardWindowOpacity = function() {
    return 255;
};

/**
 * Returns the standard opacity of the contents
 *
 * @returns {Number} Standard opacity of the contents
 */
DKTools.Window.prototype.standardContentsOpacity = function() {
    return 255;
};

/**
 * Returns the standard opacity of the frame
 *
 * @returns {Number} Standard opacity of the frame
 */
DKTools.Window.prototype.standardFrameOpacity = function() {
    return 255;
};

/**
 * Returns the standard opacity
 *
 * @see DKTools.Window.prototype.standardWindowOpacity
 * @see DKTools.Window.prototype.standardContentsOpacity
 * @see DKTools.Window.prototype.standardFrameOpacity
 * @see DKTools.Window.prototype.standardBackOpacity
 *
 * @returns {{ windowOpacity: Number, contentsOpacity: Number, frameOpacity: Number, backOpacity: Number }} Standard opacity
 */
DKTools.Window.prototype.standardOpacity = function() {
    return {
        windowOpacity: this.standardWindowOpacity(),
        contentsOpacity: this.standardContentsOpacity(),
        frameOpacity: this.standardFrameOpacity(),
        backOpacity: this.standardBackOpacity()
    };
};

/**
 * Returns the standard tone of the window
 *
 * @returns {Number[]} Standard tone of the window
 */
DKTools.Window.prototype.standardTone = function() {
    try {
        return _.clone($gameSystem.windowTone());
    } catch (e) {
        return [0, 0, 0];
    }
};

/**
 * Sets all parameters
 *
 * @version 6.0.0
 * @override
 *
 * @param {Object} [object={}] - Parameters
 *
 * @param {Number} [object.padding] - Padding of the window
 * @param {Number} [object.margin] - Margin of the window
 * @param {Function | Number} [object.contentsWidth] - Width of the contents
 * @param {Function | Number} [object.contentsHeight] - Height of the contents
 * @param {Sprite} [object.contentsSprite] - Contents sprite
 * @param {Function | PIXI.Point | PIXI.ObservablePoint | Object} [object.contentsPosition] - Position of the contents sprite
 * @param {Object} [object.opacity] - Opacity of the window
 * @param {Number[]} [object.tone] - Tone of the window
 *
 * @param {Number} [object.contentsPosition.x] - The X coordinate
 * @param {Number | String} [object.contentsPosition.y] - The Y coordinate or line number (String)
 *
 * @param {Number} [object.opacity.windowOpacity] - Opacity of the window
 * @param {Number} [object.opacity.contentsOpacity] - Opacity of the contents
 * @param {Number} [object.opacity.frameOpacity] - Opacity of the frame
 * @param {Number} [object.opacity.backOpacity] - Opacity of the background
 *
 * @see DKTools.Base.prototype.setupAll
 * @see DKTools.Window.prototype.setupPadding
 * @see DKTools.Window.prototype.setupMargin
 * @see DKTools.Window.prototype.setupContentsWidth
 * @see DKTools.Window.prototype.setupContentsHeight
 * @see DKTools.Window.prototype.setupContentsSprite
 * @see DKTools.Window.prototype.setupContentsPosition
 * @see DKTools.Window.prototype.setupOpacity
 * @see DKTools.Window.prototype.setupTone
 */
DKTools.Window.prototype.setupAll = function(object = {}) {
    object = object || {};

    DKTools.Base.prototype.setupAll.call(this, object);

    let contentsSprite = object.contentsSprite;

    if (object instanceof DKTools.Window && contentsSprite instanceof DKTools.Sprite) {
        contentsSprite = contentsSprite.clone({ blockStart: true });
    }

    this.setupPadding(object.padding);
    this.setupMargin(object.margin);
    this.setupContentsWidth(object.contentsWidth);
    this.setupContentsHeight(object.contentsHeight);
    this.setupContentsSprite(contentsSprite);
    this.setupContentsPosition(object.contentsPosition);
    this.setupOpacity(object.opacity);
	this.setupTone(object.tone);
};

/**
 * Sets the width of the window
 *
 * @param {Number} [width] - Width of the window
 *
 * @see DKTools.Window.prototype._checkWidth
 */
DKTools.Window.prototype.setupWidth = function(width) {
    this.realWidth = this._checkWidth(width);
};

/**
 * Sets the height of the window
 *
 * @param {Number | String} [height] - Height of the window of number of lines (String)
 *
 * @see DKTools.Window.prototype._checkHeight
 */
DKTools.Window.prototype.setupHeight = function(height) {
    if (DKTools.Utils.isString(height)) { // number of lines
        height = this.getLineHeight() * parseFloat(height);
    }

    this.realHeight = this._checkHeight(height);
};

/**
 * Sets the size of the window
 *
 * @param {Number | Object} [object] - Width of the window or object with parameters
 * @param {Number | String} [height] - Height of the window or number of lines (String) (if object is Number)
 *
 * @param {Number} [object.width] - Width of the window
 * @param {Number | String} [object.height] - Height of the window or number of lines (String)
 *
 * @see DKTools.Window.prototype.getLineHeight
 * @see DKTools.Window.prototype._checkWidth
 * @see DKTools.Window.prototype._checkHeight
 * @see Window.prototype.move
 */
DKTools.Window.prototype.setupSize = function(object, height) {
    if (object instanceof Object) {
        return this.setupSize(object.width, object.height);
    }

    if (DKTools.Utils.isString(height)) { // number of lines
        height = this.getLineHeight() * parseFloat(height);
    }

    // object - Number
    object = this._checkWidth(object);
    height = this._checkHeight(height);

    Window.prototype.move.call(this, this.x, this.y, object, height);
};

/**
 * Sets the padding of the window
 *
 * @since 6.0.0
 *
 * @param {Number} [padding=this.standardPadding()] - Padding
 *
 * @see DKTools.Window.prototype.standardPadding
 */
DKTools.Window.prototype.setupPadding = function(padding) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._padding = _.defaultTo(padding, this.standardPadding());
};

/**
 * Sets the margin of the window
 *
 * @since 6.0.0
 *
 * @param {Number} [margin=this.standardMargin()] - Margin
 *
 * @see DKTools.Window.prototype.this.standardMargin
 */
DKTools.Window.prototype.setupMargin = function(margin) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._margin = _.defaultTo(margin, this.standardMargin());
};

/**
 * Sets the width of the contents
 *
 * @param {Function | Number} [contentsWidth=this.standardContentsWidth()] - Width of the contents
 *
 * @see DKTools.Window.prototype.standardContentsWidth
 */
DKTools.Window.prototype.setupContentsWidth = function(contentsWidth) {
    this._contentsWidth = contentsWidth || this.standardContentsWidth();
};

/**
 * Sets the height of the contents
 *
 * @param {Function | Number} [contentsHeight=this.standardContentsHeight()] - Height of the contents
 *
 * @see DKTools.Window.prototype.standardContentsHeight
 */
DKTools.Window.prototype.setupContentsHeight = function(contentsHeight) {
    this._contentsHeight = contentsHeight || this.standardContentsHeight();
};

/**
 * Sets the sprite of the contents
 *
 * @param {DKTools.Sprite | *} [contentsSprite=this.standardContentsSprite()] - Sprite of the contents
 *
 * @see DKTools.Window.prototype.standardContentsSprite
 */
DKTools.Window.prototype.setupContentsSprite = function(contentsSprite) {
    /**
     * @private
     * @readonly
     * @type {DKTools.Sprite | *}
     */
    this._windowContentsSprite = contentsSprite || this.standardContentsSprite();
};

/**
 * Sets the position of the contents
 *
 * @version 6.0.0
 *
 * @param {Number | Function | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object=this.standardContentsPosition()] - The X coordinate or Function or Point or object with parameters
 * @param {Number} [y] - The Y coordinate (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 *
 * @see DKTools.Utils.Point.tryToPoint
 * @see DKTools.Utils.Point.standardContentsPosition
 */
DKTools.Window.prototype.setupContentsPosition = function(object, y) {
    let newPosition = object;

    if (!DKTools.Utils.isFunction(object)) {
        newPosition = DKTools.Utils.Point.tryToPoint(object, y) || this.standardContentsPosition();
    }

    /**
     * @private
     * @readonly
     * @type {Function | Point}
     */
    this._contentsPosition = newPosition;
};

/**
 * Sets the opacity of the window
 *
 * @param {Object} [opacity=this.standardOpacity()] - Opacity of the window
 *
 * @param {Number} [opacity.windowOpacity] - Opacity of the window
 * @param {Number} [opacity.contentsOpacity] - Opacity of the contents
 * @param {Number} [opacity.frameOpacity] - Opacity of the frame
 * @param {Number} [opacity.backOpacity] - Opacity of the background
 *
 * @see DKTools.Window.prototype.standardOpacity
 */
DKTools.Window.prototype.setupOpacity = function(opacity) {
    /**
     * @private
     * @readonly
     * @type {Object}
     */
    this._opacity = Object.assign(this.standardOpacity(), opacity);
};

/**
 * Sets the tone of the window
 *
 * @param {Number[]} [tone=this.standardTone()] - Tone of the window
 *
 * @see DKTools.Window.prototype.standardTone
 */
DKTools.Window.prototype.setupTone = function(tone) {
    /**
     * @private
     * @readonly
     * @type {Number[]}
     */
    this._tone = Object.assign(this.standardTone(), tone);
};

/**
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @version 6.0.0
 * @override
 *
 * @param {Object} [object={}] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the window
 *
 * @param {Number} [object.padding] - Padding of the window
 * @param {Number} [object.margin] - Margin of the window
 * @param {Object} [object.opacity] - Opacity of the window
 * @param {Number[]} [object.tone] - Tone of the window
 *
 * @param {Number} [object.opacity.windowOpacity] - Opacity of the window
 * @param {Number} [object.opacity.contentsOpacity] - Opacity of the contents
 * @param {Number} [object.opacity.frameOpacity] - Opacity of the frame
 * @param {Number} [object.opacity.backOpacity] - Opacity of the background
 *
 * @see DKTools.Base.prototype.setAll
 * @see DKTools.Window.prototype.setPadding
 * @see DKTools.Window.prototype.setMargin
 * @see DKTools.Window.prototype.setOpacity
 * @see DKTools.Window.prototype.setTone
 * @see DKTools.Window.prototype.start
 * @see DKTools.Window.prototype.activate
 *
 * @returns {Number} Number of changed parameters
 */
DKTools.Window.prototype.setAll = function(object = {}, blockStart = false, activate = false) {
	object = object || {};
    const block = true;

    let changed = DKTools.Base.prototype.setAll.call(this, object, block);

    if (this.setPadding(object.padding, block)) {
        changed++;
    }

    if (this.setMargin(object.margin, block)) {
        changed++;
    }

	if (this.setOpacity(object.opacity, block)) {
        changed++;
    }

    if (this.setTone(object.tone, block)) {
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
};

/**
 * Changes the width of the window
 * Returns true if the change occurred
 *
 * @param {Number} [width] - Width of the window
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the window
 *
 * @see DKTools.Window.prototype.resize
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Window.prototype.setWidth = function(width, blockStart = false, activate = false) {
    return this.resize(width, this._height, blockStart, activate);
};

/**
 * Changes the height of the window
 * Returns true if the change occurred
 *
 * @param {Number} [height] - Height of the window
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the window
 *
 * @see DKTools.Window.prototype.resize
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Window.prototype.setHeight = function(height, blockStart = false, activate = false) {
    return this.resize(this._width, height, blockStart, activate);
};

/**
 * Changes the padding of the window
 * Returns true if the change occurred
 *
 * @since 6.0.0
 *
 * @param {Number} [padding] - Padding
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Window.prototype.setupPadding
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Window.prototype.setPadding = function(padding, blockStart = false) {
    if (this._padding === padding) {
        return false;
    }

    const lastPadding = this._padding;

    this.setupPadding(padding);

    if (this._padding === lastPadding) {
        return false;
    }

    if (!blockStart) {
        this.start();
    }

    return true;
};

/**
 * Changed the margin of the window
 * Returns true if the change occurred
 *
 * @since 6.0.0
 *
 * @param {Number} [margin] - Margin
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Window.prototype.setupMargin
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Window.prototype.setMargin = function(margin, blockStart = false) {
    if (this._margin === margin) {
        return false;
    }

    const lastMargin = this._margin;

    this.setupMargin(padding);

    if (this._margin === lastMargin) {
        return false;
    }

    if (!blockStart) {
        this.start();
    }

    return true;
};

/**
 * Changes the sprite of the contents
 * Returns true if the change occurred
 *
 * @param {DKTools.Sprite | *} [contentsSprite]
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the window
 *
 * @see DKTools.Window.prototype.removeContentsSprite
 * @see DKTools.Window.prototype.setupContentsSprite
 * @see DKTools.Window.prototype.addContentsSprite
 * @see DKTools.Window.prototype.activate
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Window.prototype.setContentsSprite = function(contentsSprite, blockStart = false, activate = false) {
    if (this._windowContentsSprite == contentsSprite) {
        return false;
    }

    this.removeContentsSprite();
    this.setupContentsSprite(contentsSprite);
    this.addContentsSprite();

    if (!blockStart) {
        this.start();
    }

    if (activate) {
        this.activate();
    }

    return true;
};

/**
 * Changes the position of the contents
 * Returns true if the change occurred
 *
 * @version 6.0.0
 *
 * @param {Number | Function | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - The X coordinate or Function or Point or object with parameters
 * @param {Number} [y] - The Y coordinate (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 *
 * @see DKTools.Window.prototype.setupContentsPosition
 * @see DKTools.Window.prototype._refreshContents
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Window.prototype.setContentsPosition = function(object, y) {
    const isFunction = DKTools.Utils.isFunction;
    const positionIsFunction = isFunction(this._contentsPosition);
    const objectIsFunction = isFunction(object);

    if (!positionIsFunction && !objectIsFunction) {
        const newPos = DKTools.Utils.Point.toPoint(object, y);

        if (DKTools.Utils.Point.equals(this._contentsPosition, newPos)) {
            return false;
        }

        const lastPos = DKTools.Utils.Point.clone(this._contentsPosition);

        this.setupContentsPosition(newPos);

        if (DKTools.Utils.Point.equals(this._contentsPosition, lastPos)) {
            return false;
        }
    } else {
        if (this._contentsPosition === object) {
            return false;
        }

        this.setupContentsPosition(object, y);
    }

    this._refreshContents();

    return true;
};

/**
 * Changes the opacity of the window
 * Returns true if the change occurred
 *
 * @param {Object} [opacity] - Opacity of the window
 * @param {Boolean} [blockUpdateOpacity=false] - Blocking the call of the "updateOpacity" function
 *
 * @param {Number} [opacity.windowOpacity] - Opacity of the window
 * @param {Number} [opacity.contentsOpacity] - Opacity of the contents
 * @param {Number} [opacity.frameOpacity] - Opacity of the frame
 * @param {Number} [opacity.backOpacity] - Opacity of the background
 *
 * @see DKTools.Window.prototype.setupOpacity
 * @see DKTools.Window.prototype.updateOpacity
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Window.prototype.setOpacity = function(opacity, blockUpdateOpacity = false) {
    if (_.isEqual(this._opacity, Object.assign(this.standardOpacity(), opacity))) {
        return false;
    }

    const lastOpacity = _.clone(this._opacity);

    this.setupOpacity(opacity);

    if (_.isEqual(this._opacity, lastOpacity)) {
        return false;
    }

    if (!blockUpdateOpacity) {
        this.updateOpacity();
    }

    return true;
};

/**
 * Changes the tone of the window
 * Returns true if the change occurred
 *
 * @override
 *
 * @param {Number[]} [tone] - Tone of the window
 * @param {Boolean} [blockUpdateTone=false] - Blocking the call of the "updateTone" function
 *
 * @see DKTools.Window.prototype.setupTone
 * @see DKTools.Window.prototype.updateTone
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Window.prototype.setTone = function(tone, blockUpdateTone = false) {
    if (_.isEqual(this._tone, Object.assign(this.standardTone(), tone))) {
        return false;
    }

    const lastTone = _.clone(this._tone);

    this.setupTone(tone);

    if (_.isEqual(this._tone, lastTone)) {
        return false;
    }

    if (!blockUpdateTone) {
        this.updateTone();
    }

    return true;
};

/**
 * Starts the window
 *
 * @param {Boolean} [activate=false] - Activates the window
 *
 * @see DKTools.Base.prototype.start
 */
DKTools.Window.prototype.start = function(activate = false) {
    if (this.hasContentsSprite()) {
        const contentsSprite = this._windowContentsSprite;

        contentsSprite.resize(this.getContentsWidth(), this.getContentsHeight(), true);

        contentsSprite.start(activate);
    }

    DKTools.Base.prototype.start.call(this, activate);
};

/**
 * Shows the background
 *
 * @see DKTools.Window.prototype.hasBackSprite
 */
DKTools.Window.prototype.showBack = function() {
    if (this.hasBackSprite()) {
        this._windowBackSprite.visible = true;
    }
};

/**
 * Shows the contents
 *
 * @param {Boolean} [activate=false] - Activates the contents
 *
 * @see DKTools.Window.prototype.hasContentsSprite
 */
DKTools.Window.prototype.showContents = function(activate = false) {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.show(activate);
    }
};

/**
 * Shows the frame
 */
DKTools.Window.prototype.showFrame = function() {
    if (this.hasFrameSprite()) {
        this._windowFrameSprite.visible = true;
    }
};

// U methods

/**
 * Updates the contents
 *
 * @private
 * @override
 */
DKTools.Window.prototype._updateContents = function() {
    if (this.hasContentsSprite()) {
        Window.prototype._updateContents.call(this);
    }
};

/**
 * Updates the sprite of the pause sign
 *
 * @private
 * @override
 */
DKTools.Window.prototype._updatePauseSign = function() {
    if (this.hasPauseSignSprite()) {
        Window.prototype._updatePauseSign.call(this);
    }
};

/**
 * Updates the events with type: open
 */
DKTools.Window.prototype.updateOpenEvents = function() {
    this.updateEventsContainer('open');
};

/**
 * Updates the events with type: close
 */
DKTools.Window.prototype.updateCloseEvents = function() {
    this.updateEventsContainer('close');
};

/**
 * Updates all
 *
 * @override
 */
DKTools.Window.prototype.updateAll = function() {
    this.updateContents();

    DKTools.Base.prototype.updateAll.call(this);

    this.updateTone();
};

/**
 * Updates the contents
 */
DKTools.Window.prototype.updateContents = function() {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.updateAll();
    }
};

/**
 * Updates the transform
 *
 * @override
 *
 * @see DKTools.Window.prototype._updateContents
 * @see DKTools.Window.prototype._updatePauseSign
 * @see PIXI.Container.prototype.updateTransform
 */
DKTools.Window.prototype.updateTransform = function() {
    this._updateContents();
    this._updatePauseSign();
    PIXI.Container.prototype.updateTransform.call(this);
};

/**
 * Updates the opaciy of thw window
 *
 * @version 6.1.0
 * @override
 *
 * @param {Object} [opacity={}] - Opacity
 *
 * @param {Number} [opacity.windowOpacity] - Opacity of the window
 * @param {Number} [opacity.contentsOpacity] - Opacity of the contents
 * @param {Number} [opacity.frameOpacity] - Opacity of the frame
 * @param {Number} [opacity.backOpacity] - Opacity of the background
 */
DKTools.Window.prototype.updateOpacity = function(opacity = {}) {
    opacity = opacity || {};

    if (this.hasSpriteContainer()) {
        this.windowOpacity = _.defaultTo(opacity.windowOpacity, this.opacity.windowOpacity);
    }

    if (this.hasContentsSprite()) {
        this.contentsOpacity = _.defaultTo(opacity.contentsOpacity, this.opacity.contentsOpacity);
    }

    if (this.hasFrameSprite()) {
        this.frameOpacity = _.defaultTo(opacity.frameOpacity, this.opacity.frameOpacity);
    }

    if (this.hasBackSprite()) {
        this.backOpacity = _.defaultTo(opacity.backOpacity, this.opacity.backOpacity);
    }
};

/**
 * Updates the tone of the window
 *
 * @override
 *
 * @see Window.prototype.setTone
 *
 * @param {Number[]} [tone] - Tone of the window
 */
DKTools.Window.prototype.updateTone = function(tone) {
    tone = tone || this.tone;

    if (this.hasBackSprite()) {
        Window.prototype.setTone.apply(this, tone);
    }
};

/**
 * Updates the opening of the window
 *
 * @override
 */
DKTools.Window.prototype.updateOpen = function() {
	if (!this._opening) {
        return;
    }

    this.openness += this.standardOpennessSpeed();

	if (this.isOpen()) {
        this._opening = false;

        this.updateOpenEvents();
	}
};

/**
 * Updates the closing of the window
 *
 * @override
 */
DKTools.Window.prototype.updateClose = function() {
	if (!this._closing) {
        return;
    }

    this.openness -= this.standardOpennessSpeed();

	if (this.isClosed()) {
        this._closing = false;

        this.updateCloseEvents();
	}
};

/**
 * Updates the window
 *
 * @override
 */
DKTools.Window.prototype.update = function() {
    DKTools.Base.prototype.update.call(this);

	this.updateOpen();
	this.updateClose();
	this.updateBackgroundDimmer();
};





