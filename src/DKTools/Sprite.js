//===========================================================================
// DKTools.Sprite
//===========================================================================

DKTools.Sprite.prototype = Object.create(Sprite.prototype);
DKTools.Utils.mixin(DKTools.Sprite.prototype, DKTools.Base.prototype);
DKTools.Sprite.prototype.constructor = DKTools.Sprite;

// properties

Object.defineProperties(DKTools.Sprite.prototype, {

    /**
     * Bitmap of the sprite
     * To support functions from DKTools.Base
     *
     * @since 7.0.0
     * @type {Bitmap | null}
     * @memberof DKTools.Sprite.prototype
     */
    contents: {
        get: function() {
            return this.bitmap;
        },
        set: function(value) {
            this.bitmap = value;
        },
        configurable: true
    },

    /**
     * Window skin
     *
     * @readonly
     * @type {Bitmap | null}
     * @memberof DKTools.Sprite.prototype
     */
    windowskin: {
        get: function() {
            return this._windowskin;
        },
        configurable: true
    },

    /**
     * Frame of the sprite
     *
     * @readonly
     * @type {Rectangle}
     * @memberof DKTools.Sprite.prototype
     */
    frame: {
        get: function() {
            return this._frame;
        },
        configurable: true
    },

    /**
     * Real width of the sprite
     *
     * @deprecated 8.0.0
     * @version 8.0.0
     *
     * @type {Number}
     * @memberof DKTools.Sprite.prototype
     */
    realWidth: {
        get: function() {
            return this.width;
        },
        set: function(value) {
            this.width = value;
        },
        configurable: true
    },

    /**
     * Real height of the sprite
     *
     * @deprecated 8.0.0
     * @version 8.0.0
     *
     * @type {Number}
     * @memberof DKTools.Sprite.prototype
     */
    realHeight: {
        get: function() {
            return this.height;
        },
        set: function(value) {
            this.height = value;
        },
        configurable: true
    },

    /**
     * Width of the sprite
     *
     * @version 8.0.0
     *
     * @type {Number}
     * @memberof DKTools.Sprite.prototype
     */
    width: {
        get: function() {
            return this._frame.width;
        },
        set: function(value) {
            this._frame.width = value;

            this._refresh();
        },
        configurable: true
    },

    /**
     * Height of the sprite
     *
     * @version 8.0.0
     *
     * @type {Number}
     * @memberof DKTools.Sprite.prototype
     */
    height: {
        get: function() {
            return this._frame.height;
        },
        set: function(value) {
            this._frame.height = value;

            this._refresh();
        },
        configurable: true
    },

    /**
     * The coordinates of mouse inside the object
     *
     * @since 8.0.0
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Base.prototype
     */
    mouse: {
        get: function() {
            return this.getLocalPoint(TouchInput.mouseX, TouchInput.mouseY);
        },
        configurable: true
    },

    /**
     * Text align
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.Sprite.prototype
     */
    align: {
        get: function() {
            return this._align;
        },
        configurable: true
    },

    /**
     * Text font
     *
     * @readonly
     * @type {Object}
     * @memberof DKTools.Sprite.prototype
     */
    font: {
        get: function() {
            return this._font;
        },
        configurable: true
    },

    /**
     * Text color
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.Sprite.prototype
     */
    textColor: {
        get: function() {
            return this._textColor;
        },
        configurable: true
    },

    /**
     * Paint opacity
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.prototype
     */
    paintOpacity: {
        get: function() {
            return this._paintOpacity;
        },
        configurable: true
    },

    /**
     * Fill color
     *
     * @readonly
     * @type {String | null}
     * @memberof DKTools.Sprite.prototype
     */
    fillColor: {
        get: function() {
            return this._fillColor;
        },
        configurable: true
    },

    /**
     * Opacity
     *
     * @version 6.0.0
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.prototype
     */
    opacity: {
        get: function() {
            return this._opacity;
        },
        configurable: true
    },

    /**
     * Graphic folder
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.Sprite.prototype
     */
    graphicFolder: {
        get: function() {
            return this._graphicFolder;
        },
        configurable: true
    },

    /**
     * Graphic name
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.Sprite.prototype
     */
    graphicName: {
        get: function() {
            return this._graphicName;
        },
        configurable: true
    },

    /**
     * Texts
     *
     * @readonly
     * @type {Object[]}
     * @memberof DKTools.Sprite.prototype
     */
    texts: {
        get: function() {
            return this._texts;
        },
        configurable: true
    }

});

// initialize methods

/**
 * Initializes a class object
 *
 * @version 3.0.0
 *
 * @override
 *
 * @param {Number | DKTools.Sprite | Bitmap | PIXI.Rectangle | Rectangle | Object} [object] - The X coordinate or Sprite or Bitmap or Rectangle or object with properties
 * @param {Number} [y] - The Y coordinate (if object is Number)
 * @param {Number} [width] - Width of the bitmap (if object is Number)
 * @param {Number} [height] - Height of the bitmap (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 * @param {Number} [object.width] - Width of the bitmap
 * @param {Number} [object.height] - Height of the bitmap
 * @param {Bitmap | Object} [object] - Bitmap or object with parameters
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Sprite.prototype.initialize
 * @see DKTools.Base.prototype.initialize
 * @see DKTools.Sprite.prototype.setupAll
 * @see DKTools.Sprite.prototype.setupSize
 * @see DKTools.Sprite.prototype.setupBitmap
 * @see DKTools.Sprite.prototype.updateBitmap
 */
DKTools.Sprite.prototype.initialize = function(object, y, width, height) {
	Sprite.prototype.initialize.call(this);
    DKTools.Base.prototype.initialize.call(this, object, y, width, height);

    if (object instanceof DKTools.Sprite && !object.isStarted() && !object.hasFixedBitmap()) {
        this.setupSize(object._getBitmapWidth(), object._getBitmapHeight());
    } else if (object instanceof Bitmap) {
        this.setupBitmap(object);
    }

    this.updateBitmap();
};

// A methods

/**
 * Adds the text
 *
 * @version 5.0.0
 *
 * @param {String | Number} text - Text
 * @param {Object} [options={}] - Options
 * @param {Boolean} [refreshAll=false] - Refreshes all
 *
 * @param {String | Number} [options.id] - ID of the text
 * @param {String} [options.type='drawText'] - Type of the text (drawText or drawTextEx)
 *
 * @see DKTools.Sprite.prototype.drawTextEx
 * @see DKTools.Sprite.prototype.drawText
 */
DKTools.Sprite.prototype.addText = function(text, options = {}, refreshAll = false) {
    if (text == null || text === '') {
        return;
    }

    text = String(text);
    options = options || {};

    this._texts.push({
        text,
        options,
        id: options.id,
        type: options.type || 'drawText'
    });

    if (refreshAll) {
        this.refreshAll();
    }
};

/**
 * Changes the tone of the bitmap
 * Returns true if successfully completed
 *
 * @param {Number[]} tone - Tone (RGB)
 *
 * @see DKTools.Sprite.prototype.hasBitmap
 * @see Bitmap.prototype.adjustTone
 *
 * @returns {Boolean} Successfully completed
 */
DKTools.Sprite.prototype.adjustTone = function(tone) {
    if (!this.hasBitmap() || !tone) {
        return false;
    }

    Bitmap.prototype.adjustTone.apply(this.bitmap, tone);

    return true;
};

// B methods

/**
 * Imposes a blur effect on the bitmap
 * Returns true if successfully completed
 *
 * @see DKTools.Sprite.prototype.hasBitmap
 *
 * @returns {Boolean} Successfully completed
 */
DKTools.Sprite.prototype.blur = function() {
    if (!this.hasBitmap()) {
        return false;
    }

    this.bitmap.blur();

    return true;
};

// C methods

/**
 * Clears all data
 *
 * @private
 * @override
 *
 * @see DKTools.Base.prototype._clearAll
 * @see DKTools.Sprite.prototype._clearTexts
 */
DKTools.Sprite.prototype._clearAll = function() {
    DKTools.Base.prototype._clearAll.call(this);
    this._clearTexts();
};

/**
 * Clears all texts
 *
 * @private
 */
DKTools.Sprite.prototype._clearTexts = function() {
    /**
     * @private
     * @readonly
     * @type {Object[]}
     */
    this._texts = [];
};

/**
 * Returns true if the sprite can clone the fixed bitmap
 *
 * @returns {Boolean} Sprite can clone the fixed bitmap
 */
DKTools.Sprite.prototype.canCloneFixedBitmap = function() {
    return true;
};

/**
 * Returns true if the sprite can be updated and redrawn
 *
 * @since 1.1.0
 *
 * @override
 *
 * @see DKTools.Base.prototype.canRedrawAll
 * @see DKTools.Sprite.prototype.hasGraphicName
 * @see DKTools.Sprite.prototype.hasFixedBitmap
 *
 * @returns {Boolean} Sprite can be updated and redrawn
 */
DKTools.Sprite.prototype.canRedrawAll = function() {
    return DKTools.Base.prototype.canRedrawAll.call(this) && !this.hasGraphicName() && !this.hasFixedBitmap();
};

/**
 * Changes the font of the bitmap
 *
 * @param {Object} font - Text font
 *
 * @param {String} [font.fontFace] - Font face
 * @param {Number} [font.fontSize] - Font size
 * @param {Boolean} [font.fontItalic] - Font italic
 *
 * @see DKTools.Sprite.prototype.hasBitmap
 * @see DKTools.Sprite.prototype.updateFont
 */
DKTools.Sprite.prototype.changeFont = function(font) {
    if (this.hasBitmap()) {
        this.updateFont(font);
    }
};

/**
 * Changes the paint opacity of the bitmap
 *
 * @param {Number} paintOpacity - Paint opacity
 *
 * @see DKTools.Sprite.prototype.hasBitmap
 * @see DKTools.Sprite.prototype.updatePaintOpacity
 */
DKTools.Sprite.prototype.changePaintOpacity = function(paintOpacity) {
    if (this.hasBitmap()) {
        this.updatePaintOpacity(paintOpacity);
    }
};

/**
 * Changes the text color of the bitmap
 *
 * @param {String} textColor - Text color
 *
 * @see DKTools.Sprite.prototype.hasBitmap
 * @see DKTools.Sprite.prototype.updateTextColor
 */
DKTools.Sprite.prototype.changeTextColor = function(textColor) {
    if (this.hasBitmap()) {
        this.updateTextColor(textColor);
    }
};

/**
 * Checks the size of the sprirte
 * Returns the number of changed parameters
 *
 * @override
 *
 * @see DKTools.Sprite.prototype.getMinWidth
 * @see DKTools.Sprite.prototype.getMinHeight
 * @see DKTools.Sprite.prototype.setupWidth
 * @see DKTools.Sprite.prototype.setupHeight
 *
 * @returns {Number} Number of changed parameters
 */
DKTools.Sprite.prototype.checkSize = function() {
    const minWidth = this.getMinWidth();
    const minHeight = this.getMinHeight();
    let changed = 0;

    if (this._bitmapWidth < minWidth) {
        this.setupWidth(minWidth);

        changed++;
    }

    if (this._bitmapHeight < minHeight) {
        this.setupHeight(minHeight);

        changed++;
    }

    return changed;
};

/**
 * Creates all objects
 *
 * @version 2.0.0
 *
 * @override
 *
 * @see DKTools.Base.prototype.createAll
 * @see DKTools.Sprite.prototype.createBitmap
 * @see DKTools.Sprite.prototype.createMask
 */
DKTools.Sprite.prototype.createAll = function() {
    DKTools.Base.prototype.createAll.call(this);
    this.createBitmap();
    this.createMask();
};

/**
 * Loads an image by graphic name (if exists) or create the bitmap (if the fixed bitmap does not exist)
 *
 * @version 1.1.0
 *
 * @see DKTools.Sprite.prototype.hasGraphicName
 * @see DKTools.Sprite.prototype.hasFixedBitmap
 * @see DKTools.Sprite.prototype._loadGraphic
 * @see DKTools.Sprite.prototype._getBitmapWidth
 * @see DKTools.Sprite.prototype._getBitmapHeight
 */
DKTools.Sprite.prototype.createBitmap = function() {
    if (this.hasGraphicName()) {
        this._loadGraphic();
    } else if (!this.hasFixedBitmap()) {
        this.bitmap = new Bitmap(this._getBitmapWidth(), this._getBitmapHeight());
    }
};

/**
 * Creates a mask in the form of a rectangle
 *
 * @since 2.0.0
 *
 * @see DKTools.Sprite.prototype.setMask
 * @see PIXI.Graphics
 */
DKTools.Sprite.prototype.createRectMask = function() {
    const mask = new PIXI.Graphics();

    mask.beginFill();
    mask.drawRect(this.x, this.y, this.bitmap.width, this.bitmap.height);
    mask.endFill();

    this.setMask(mask);
};

/**
 * Creates a mask in the form of a circle
 *
 * @since 2.0.0
 *
 * @see DKTools.Sprite.prototype.setMask
 * @see PIXI.Graphics
 */
DKTools.Sprite.prototype.createCircleMask = function() {
    const mask = new PIXI.Graphics();
    const radius = this.bitmap.width / 2;
    const centerX = this.x + radius;
    const centerY = this.y + radius;

    mask.beginFill();
    mask.drawCircle(centerX, centerY, radius);
    mask.endFill();

    this.setMask(mask);
};

/**
 * Creates a mask in the form of an ellipse
 *
 * @since 2.0.0
 *
 * @see DKTools.Sprite.prototype.setMask
 * @see PIXI.Graphics
 */
DKTools.Sprite.prototype.createEllipseMask = function() {
    const mask = new PIXI.Graphics();
    const width = this.bitmap.width / 2;
    const height = this.bitmap.height / 2;
    const centerX = this.x + width;
    const centerY = this.y + height;

    mask.beginFill();
    mask.drawEllipse(centerX, centerY, width, height);
    mask.endFill();

    this.setMask(mask);
};

/**
 * Creates a mask
 *
 * @since 2.0.0
 *
 * @see DKTools.Sprite.prototype.createRectMask
 * @see DKTools.Sprite.prototype.createCircleMask
 * @see DKTools.Sprite.prototype.createEllipseMask
 */
DKTools.Sprite.prototype.createMask = function(maskShape) {
    switch (maskShape) {
        case 'rect':
            this.createRectMask();
            break;
        case 'circle':
            this.createCircleMask();
            break;
        case 'ellipse':
            this.createEllipseMask();
            break;
    }
};

// D methods

/**
 * Destroys the sprite
 *
 * @version 8.0.0
 *
 * @override
 *
 * @param {Object | Boolean} [options] - Destroy options
 *
 * @see DKTools.Base.prototype.destroy
 * @see Sprite.prototype.destroy
 */
DKTools.Sprite.prototype.destroy = function(options) {
    DKTools.Base.prototype.destroy.call(this, options);
    Sprite.prototype.destroy.call(this, options);
};

/**
 * Draws all
 *
 * @version 1.1.0
 * @override
 *
 * @see DKTools.Sprite.prototype.updateFill
 * @see DKTools.Sprite.prototype.drawAllTexts
 * @see DKTools.Sprite.prototype.updateDrawAllEvents
 */
DKTools.Sprite.prototype.drawAll = function() {
    this.updateFill();
    this.drawAllTexts();
    this.updateDrawAllEvents();
};

/**
 * Draws all texts
 */
DKTools.Sprite.prototype.drawAllTexts = function() {
    _.forEach(this._texts, (text) => {
        this[text.type](text.text, text.options);
    });
};

/**
 * Draws a text
 * Returns true if successfully completed
 *
 * @version 6.3.0
 *
 * @param {String} text - Text
 * @param {Object} [options={}] - Options for drawing
 *
 * @param {Object} [options.font] - Use custom font
 * @param {String} [options.textColor] - Use custom text color
 * @param {Number} [options.paintOpacity] - Use custom paint opacity
 * @param {String} [options.align] - Align
 * @param {Boolean} [options.resetFont] - Use standard font after drawing the text
 * @param {String} [options.resetTextColor] - Use standard text color after drawing the text
 * @param {String} [options.resetPaintOpacity] - Use standard paint opacity after drawing the text
 * @param {Number} [options.x] - The X coordinate
 * @param {Number | String} [options.y] - The Y coordinate or line number (String)
 * @param {Number} [options.width] - Width of the rectangle
 * @param {Number | String} [options.height] - Height of the rectangle or number of lines (String)
 * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [options.pos] - Position of the text (ignores other parameters of position: x, y)
 * @param {PIXI.Rectangle | Rectangle | Object} [options.rect] - Rectangle for drawing (ignores other parameters of position: x, y, width, height, pos)
 *
 * @param {Number} [options.pos.x] - The X coordinate
 * @param {Number | String} [options.pos.y] - The Y coordinate or line number (String)
 *
 * @param {Number} [options.rect.x] - The X coordinate
 * @param {Number | String} [options.rect.y] - The Y coordinate or line number (String)
 * @param {Number | String} [options.rect.width] - Width of the rectangle
 * @param {Number | String} [options.rect.height] - Height of the rectangle or number of lines (String)
 *
 * @example
 * var sprite = new DKTools.Sprite(0, 0, 100, 36);
 *
 * sprite.start();
 *
 * sprite.drawText('Text', { y: '1' });
 *
 * @see DKTools.Base.prototype.hasBitmap
 * @see DKTools.Sprite.prototype.changeFont
 * @see DKTools.Sprite.prototype.changeTextColor
 * @see DKTools.Sprite.prototype.changePaintOpacity
 * @see DKTools.Base.prototype.standardDrawingWidth
 * @see DKTools.Base.prototype.standardDrawingHeight
 * @see DKTools.Base.prototype.getLineHeight
 * @see DKTools.Sprite.prototype.resetFont
 * @see DKTools.Sprite.prototype.resetTextColor
 * @see DKTools.Sprite.prototype.resetPaintOpacity
 * @see Bitmap.prototype.drawText
 *
 * @returns {Boolean} Successfully completed
 */
DKTools.Sprite.prototype.drawText = function(text, options = {}) {
    if (!this.hasBitmap() || text == null || text === '') {
        return false;
    }

    text = String(text);
    options = options || {};

    const { pos, rect, font, textColor, paintOpacity, resetFont, resetTextColor, resetPaintOpacity } = options;
    let { x, y, width, height, align } = options;

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

    if (width === 0 || height === 0) {
        return false;
    }

    x = x || 0;
    y = y || 0;
    width = width || this.standardDrawingWidth();
    height = height || this.getLineHeight();
    align = align || this.align;

    if (font) {
        this.changeFont(font);
    }

    if (textColor) {
        this.changeTextColor(textColor);
    }

    if (Number.isFinite(paintOpacity)) {
        this.changePaintOpacity(paintOpacity);
    }

    this.bitmap.drawText(text, x, y, width, height, align);

    if (resetFont) {
        this.resetFont();
    }

    if (resetTextColor) {
        this.resetTextColor();
    }

    if (resetPaintOpacity) {
        this.resetPaintOpacity();
    }

    return true;
};

// F methods

/**
 * Returns an object of text by its ID
 *
 * @param {Number | String | *} id - ID of object of text
 * @returns {Object} Object of text
 */
DKTools.Sprite.prototype.findText = function(id) {
    return _.find(this._texts, { id });
};

// G methods

/**
 * Returns the height of the bitmap
 *
 * @since 2.0.0
 * @private
 *
 * @returns {Number} Height of the bitmap
 */
DKTools.Sprite.prototype._getBitmapHeight = function() {
    return this._bitmapHeight;
};

/**
 * Returns the width of the bitmap
 *
 * @since 2.0.0
 * @private
 *
 * @returns {Number} Width of the bitmap
 */
DKTools.Sprite.prototype._getBitmapWidth = function() {
    return this._bitmapWidth;
};

/**
 * Returns the current opacity of the sprite
 *
 * @returns {Number} Current opacity of the sprite
 */
DKTools.Sprite.prototype.getCurrentOpacity = function() {
    return this.alpha * 255;
};

/**
 * Returns the local point (coordinates inside the sprite)
 *
 * @since 8.0.0
 *
 * @override
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - The X coordinate or Point or object with parameters
 * @param {Number} [y] - The Y coordinate (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 *
 * @see DKTools.Base.prototype.getLocalPoint
 *
 * @returns {PIXI.Point} Local point (coordinates inside the sprite)
 */
DKTools.Sprite.prototype.getLocalPoint = function(object, y) {
    const localPoint = DKTools.Base.prototype.getLocalPoint.call(this, object, y);
    const anchor = this.anchor;

    localPoint.x += this.width * anchor.x;
    localPoint.y += this.height * anchor.y;

    return localPoint;
};

// H methods

/**
 * Returns true if the sprite has the fill color
 *
 * @returns {Boolean} Sprite has the fill color
 */
DKTools.Sprite.prototype.hasFillColor = function() {
    return !!this._fillColor;
};

/**
 * Returns true if the sprite has fixed bitmap (setted using setupBitmap or setBitmap)
 *
 * @since 1.1.0
 * @returns {Boolean} Sprite has fixed bitmap (setted using setupBitmap or setBitmap)
 */
DKTools.Sprite.prototype.hasFixedBitmap = function() {
    return !!this._fixedBitmap;
};

/**
 * Returns true if the sprite has the graphic folder
 *
 * @returns {Boolean} Sprite has the graphic folder
 */
DKTools.Sprite.prototype.hasGraphicFolder = function() {
    return !!this._graphicFolder;
};

/**
 * Returns true if the sprite has the graphic name
 *
 * @returns {Boolean} Sprite has the graphic name
 */
DKTools.Sprite.prototype.hasGraphicName = function() {
    return !!this._graphicName;
};

/**
 * Returns true if the sprite has the texts
 *
 * @returns {Boolean} Sprite has the texts
 */
DKTools.Sprite.prototype.hasTexts = function() {
    return this._texts.length > 0;
};

// I methods

/**
 * Returns true if you can change the size of the sprite
 *
 * @version 1.1.0
 *
 * @see DKTools.Sprite.prototype.hasGraphicName
 * @see DKTools.Sprite.prototype.hasFixedBitmap
 *
 * @returns {Boolean} You can change the size of the sprite
 */
DKTools.Sprite.prototype.isResizable = function() {
    return !this.hasGraphicName() && !this.hasFixedBitmap();
};

// L methods

/**
 * Loads the graphic (using graphic folder and graphic name)
 *
 * @private
 *
 * @see DKTools.Sprite.prototype.hasGraphicFolder
 * @see DKTools.Sprite.prototype.hasGraphicName
 * @see DKTools.Sprite.prototype.loadBitmap
 * @see DKTools.Sprite.prototype.hasBitmap
 * @see DKTools.Sprite.prototype.updateReadyEvents
 */
DKTools.Sprite.prototype._loadGraphic = function() {
    if (this.hasGraphicFolder() && this.hasGraphicName()) {
        const folder = this._graphicFolder;
        const filename = this._graphicName;
        const listener = this._graphicLoadListener;

        this.loadBitmap(folder, filename, listener);
        this.updateReadyEvents();
    }
};

/**
 * Loads a bitmap from img/animations/
 * Returns true if the bitmap has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.loadAnimation = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap(
            'img/animations/',
            object.filename,
            object.listener,
            object.hue,
            object.smooth);
    }

    // object - String
    return this.loadBitmap('img/animations/', object, listener, hue, smooth);
};

/**
 * Loads a bitmap from img/battlebacks1/
 * Returns true if the bitmap has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.loadBattleback1 = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap(
            'img/battlebacks1/',
            object.filename,
            object.listener,
            object.hue,
            object.smooth);
    }

    // object - String
    return this.loadBitmap('img/battlebacks1/', object, listener, hue, smooth);
};

/**
 * Loads a bitmap from img/battlebacks2/
 * Returns true if the bitmap has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.loadBattleback2 = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap(
            'img/battlebacks2/',
            object.filename,
            object.listener,
            object.hue,
            object.smooth);
    }

    // object - String
    return this.loadBitmap('img/battlebacks2/', object, listener, hue, smooth);
};

/**
 * Loads a bitmap
 * Returns true if the bitmap has been changed
 *
 * @version 3.0.0
 *
 * @param {String | Object} object - Path to file or object with parameters
 * @param {String} filename - Name of file (if object is String)
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see DKTools.Sprite.prototype.setBitmap
 * @see DKTools.Utils.Bitmap.load
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.loadBitmap = function(object, filename, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap(
            object.folder,
            object.filename,
            object.listener,
            object.hue,
            object.smooth);
    }

    // object - String (folder)
    const bitmap = DKTools.Utils.Bitmap.load(object, filename, null, hue, smooth);

    if (this.setBitmap(bitmap)) {
        if (DKTools.Utils.isFunction(listener) && this.hasBitmap()) {
            this.bitmap.addLoadListener(listener);
        }

        return true;
    }

    return false;
};

/**
 * Loads a bitmap from img/characters/
 * Returns true if the bitmap has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.loadCharacter = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap(
            'img/characters/',
            object.filename,
            object.listener,
            object.hue,
            object.smooth);
    }

    // object - String
    return this.loadBitmap('img/characters/', object, listener, hue, smooth);
};

/**
 * Loads a bitmap from img/enemies/
 * Returns true if the bitmap has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.loadEnemy = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap(
            'img/enemies/',
            object.filename,
            object.listener,
            object.hue,
            object.smooth);
    }

    // object - String
    return this.loadBitmap('img/enemies/', object, listener, hue, smooth);
};

/**
 * Loads a bitmap from img/faces/
 * Returns true if the bitmap has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.loadFace = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap(
            'img/faces/',
            object.filename,
            object.listener,
            object.hue,
            object.smooth);
    }

    // object - String
    return this.loadBitmap('img/faces/', object, listener, hue, smooth);
};

/**
 * Loads a bitmap from img/parallaxes/
 * Returns true if the bitmap has been changed
 *
 * @version 8.1.0
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.loadParallax = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap(
            ImageManager.PARALLAXES_FOLDER,
            object.filename,
            object.listener,
            object.hue,
            object.smooth);
    }

    // object - String
    return this.loadBitmap(ImageManager.PARALLAXES_FOLDER, object, listener, hue, smooth);
};

/**
 * Loads a bitmap from img/pictures/
 * Returns true if the bitmap has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.loadPicture = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap(
            'img/pictures/',
            object.filename,
            object.listener,
            object.hue,
            object.smooth);
    }

    // object - String
    return this.loadBitmap('img/pictures/', object, listener, hue, smooth);
};

/**
 * Loads a bitmap from img/sv_actors/
 * Returns true if the bitmap has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.loadSvActor = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap(
            'img/sv_actors/',
            object.filename,
            object.listener,
            object.hue,
            object.smooth);
    }

    // object - String
    return this.loadBitmap('img/sv_actors/', object, listener, hue, smooth);
};

/**
 * Loads a bitmap from img/sv_enemies/
 * Returns true if the bitmap has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.loadSvEnemy = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap(
            'img/sv_enemies/',
            object.filename,
            object.listener,
            object.hue,
            object.smooth);
    }

    // object - String
    return this.loadBitmap('img/sv_enemies/', object, listener, hue, smooth);
};

/**
 * Loads a bitmap from img/system/
 * Returns true if the bitmap has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.loadSystem = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap(
            'img/system/',
            object.filename,
            object.listener,
            object.hue,
            object.smooth);
    }

    // object - String
    return this.loadBitmap('img/system/', object, listener, hue, smooth);
};

/**
 * Loads a bitmap from img/tilesets/
 * Returns true if the bitmap has been changed
 *
 * @version 8.1.0
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.loadTileset = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap(
            ImageManager.TILESETS_FOLDER,
            object.filename,
            object.listener,
            object.hue,
            object.smooth);
    }

    // object - String
    return this.loadBitmap(ImageManager.TILESETS_FOLDER, object, listener, hue, smooth);
};

/**
 * Loads a bitmap from img/titles1/
 * Returns true if the bitmap has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.loadTitle1 = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap(
            'img/titles1/',
            object.filename,
            object.listener,
            object.hue,
            object.smooth);
    }

    // object - String
    return this.loadBitmap('img/titles1/', object, listener, hue, smooth);
};

/**
 * Loads a bitmap from img/titles2/
 * Returns true if the bitmap has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.loadTitle2 = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap(
            'img/titles2/',
            object.filename,
            object.listener,
            object.hue,
            object.smooth);
    }

    // object - String
    return this.loadBitmap('img/titles2/', object, listener, hue, smooth);
};

/**
 * Loads a window skin from img/system/
 * Returns true if the bitmap has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see DKTools.Sprite.prototype.standardWindowskin
 * @see DKTools.Sprite.prototype.loadSystem
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.loadWindowskin = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadSystem(
            object.filename || this.standardWindowskin(),
            object.listener,
            object.hue,
            object.smooth);
    }

    // object - String
    return this.loadSystem(object || this.standardWindowskin(), listener, hue, smooth);
};

// M methods

/**
 * Moves the sprite (taking into account the anchor)
 *
 * @since 5.0.0
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - The X coordinate or Point or object with parameters
 * @param {Number | String} [y] - The Y coordinate or line number (String) (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number | String} [object.y] - The Y coordinate or line number (String)
 *
 * @see DKTools.Base.prototype.move
 */
DKTools.Sprite.prototype.moveWithAnchor = function(object, y) {
    if (object instanceof Object) {
        y = object.y;
    }

    if (DKTools.Utils.isString(y)) { // line number
        y = this.getLineHeight() * parseFloat(y);
    }

    const point = DKTools.Utils.Point.toPoint(object, y);
    const anchor = this.anchor;

    this.move(point.x + this.width * anchor.x, point.y + this.height * anchor.y);
};

// S methods

/**
 * Returns the standard text align
 *
 * @returns {String} Standard text align
 */
DKTools.Sprite.prototype.standardAlign = function() {
    return 'center';
};

/**
 * Returns the standard anchor
 *
 * @returns {Point} Standard anchor
 */
DKTools.Sprite.prototype.standardAnchor = function() {
    return new Point(0, 0);
};

/**
 * Returns the standard fill color
 *
 * @returns {String | null} Standard fill color
 */
DKTools.Sprite.prototype.standardFillColor = function() {
    return null;
};

/**
 * Returns the standard font
 *
 * @see DKTools.Sprite.prototype.standardFontFace
 * @see DKTools.Sprite.prototype.standardFontSize
 * @see DKTools.Sprite.prototype.standardFontItalic
 *
 * @returns {{ fontFace: String, fontSize: Number, fontItalic: Boolean }} Standard font
 */
DKTools.Sprite.prototype.standardFont = function() {
    return {
        fontFace: this.standardFontFace(),
        fontItalic: this.standardFontItalic(),
        fontSize: this.standardFontSize()
    };
};

/**
 * Returns the standard font face
 *
 * @version 8.2.0
 * @returns {String} Standard font face
 */
DKTools.Sprite.prototype.standardFontFace = function() {
    try {
        return Window_Base.prototype.standardFontFace.call(this);
    } catch (e) {
        return 'GameFont';
    }
};

/**
 * Returns the standard font italic
 *
 * @returns {String} Standard font italic
 */
DKTools.Sprite.prototype.standardFontItalic = function() {
    return false;
};

/**
 * Returns the standard font size
 *
 * @version 8.2.0
 * @returns {String} Standard font size
 */
DKTools.Sprite.prototype.standardFontSize = function() {
    try {
        return Window_Base.prototype.standardFontSize.call(this);
    } catch (e) {
        return 28;
    }
};

/**
 * Returns the standard frame
 *
 * @version 8.0.0
 * @returns {Rectangle} Standard frame
 */
DKTools.Sprite.prototype.standardFrame = function() {
    return new Rectangle(0, 0, this.width, this.height);
};

/**
 * Returns the standard graphic folder
 *
 * @returns {String} Standard graphic folder
 */
DKTools.Sprite.prototype.standardGraphicFolder = function() {
    return 'img/system/';
};

/**
 * Returns the standard graphic name
 *
 * @returns {String} standard graphic name
 */
DKTools.Sprite.prototype.standardGraphicName = function() {
    return '';
};

/**
 * Returns the standard opacity
 *
 * @returns {Number} Standard opacity
 */
DKTools.Sprite.prototype.standardOpacity = function() {
    return 255;
};

/**
 * Returns the standard paint opacity
 *
 * @returns {Number} Standard paint opacity
 */
DKTools.Sprite.prototype.standardPaintOpacity = function() {
    return 255;
};

/**
 * Returns the standard text color
 *
 * @returns {String} Standard text color
 */
DKTools.Sprite.prototype.standardTextColor = function() {
    return '#ffffff';
};

/**
 * Returns the standard mask
 *
 * @since 6.1.0
 * @returns {null} Standard mask
 */
DKTools.Sprite.prototype.standardMask = function() {
    return null;
};

/**
 * Sets all parameters
 *
 * @version 6.1.0
 * @override
 *
 * @param {Object} [object={}] - Parameters
 *
 * @param {Bitmap | Object} [object.bitmap] - Bitmap or object with parameters
 * @param {PIXI.Rectangle | Rectangle | Object} [object.frame] - Rectangle or object with parameters
 * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.anchor] - Anchor of the sprite
 * @param {String} [object.align] - Text align
 * @param {Object} [object.font] - Text font
 * @param {String} [object.textColor] - Text color
 * @param {Number} [object.paintOpacity] - Paint opacity
 * @param {String} [object.fillColor] - Fill color
 * @param {Number} [object.opacity] - Opacity
 * @param {String} [object.graphicFolder] - Graphic folder
 * @param {String} [object.graphicName] - Graphic name
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @param {Number} [object.frame.x] - The X coordinate
 * @param {Number} [object.frame.y] - The Y coordinate
 * @param {Number} [object.frame.width] - Width of the frame
 * @param {Number} [object.frame.height] - Height of the frame
 *
 * @param {String} [object.font.fontFace] - Font face
 * @param {Number} [object.font.fontSize] - Font size
 * @param {Boolean} [object.font.fontItalic] - Font italic
 *
 * @param {Number} [object.anchor.x] - The X coordinate
 * @param {Number} [object.anchor.y] - The Y coordinate
 *
 * @see DKTools.Base.prototype.setupAll
 * @see DKTools.Sprite.prototype.setupBitmap
 * @see DKTools.Sprite.prototype.setupFrame
 * @see DKTools.Sprite.prototype.setupAnchor
 * @see DKTools.Sprite.prototype.setupFont
 * @see DKTools.Sprite.prototype.setupTextColor
 * @see DKTools.Sprite.prototype.setupPaintOpacity
 * @see DKTools.Sprite.prototype.setupFillColor
 * @see DKTools.Sprite.prototype.setupAlign
 * @see DKTools.Sprite.prototype.setupOpacity
 * @see DKTools.Sprite.prototype.setupGraphicFolder
 * @see DKTools.Sprite.prototype.setupGraphicName
 */
DKTools.Sprite.prototype.setupAll = function(object = {}) {
    object = object || {};

    DKTools.Base.prototype.setupAll.call(this, object);

    this.setupBitmap(object);
    this.setupFrame(object.frame);
    this.setupAnchor(object.anchor);
    this.setupAlign(object.align);
    this.setupFont(object.font);
    this.setupTextColor(object.textColor);
    this.setupPaintOpacity(object.paintOpacity);
    this.setupFillColor(object.fillColor);
    this.setupOpacity(object.opacity);
    this.setupGraphicFolder(object.graphicFolder);
    this.setupGraphicName(object.graphicName);
};

/**
 * Sets the align
 *
 * @param {String} [align=this.standardAlign()] - Text align
 *
 * @see DKTools.Sprite.prototype.standardAlign
 */
DKTools.Sprite.prototype.setupAlign = function(align) {
    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._align = align || this.standardAlign();
};

/**
 * Sets the anchor of the sprite
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object=this.standardAnchor()] - The X coordinate or Point or object with parameters
 * @param {Number} [y] - The Y coordinate (is object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 *
 * @see DKTools.Utils.Point.toPoint
 * @see DKTools.Sprite.prototype.standardAnchor
 */
DKTools.Sprite.prototype.setupAnchor = function(object, y) {
    const anchor = DKTools.Utils.Point.tryToPoint(object, y);
    const newAnchor = Object.assign(this.standardAnchor(), anchor);

    /**
     * @type {PIXI.ObservablePoint}
     */
    this.anchor.copy(newAnchor);
};

/**
 * Sets the bitmap
 *
 * @version 3.1.0
 *
 * @param {Bitmap | Object} [object] - Bitmap or object with parameters
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see DKTools.Utils.Bitmap.load
 */
DKTools.Sprite.prototype.setupBitmap = function(object) {
    let bitmap = null;

    if (object instanceof DKTools.Sprite && object.hasFixedBitmap() && object.canCloneFixedBitmap()) {
        bitmap = DKTools.Utils.Bitmap.clone(object.bitmap);
    } else if (object instanceof Object) {
        bitmap = DKTools.Utils.Bitmap.load(object.bitmap || object);
    }

    if (bitmap) {
        this.bitmap = bitmap;

        this.bitmap.addLoadListener(this.setupSize.bind(this));
    } else {
        this.bitmap = null;
    }

    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._fixedBitmap = !!this.bitmap;
};

/**
 * Sets the fill color
 *
 * @param {String} [color] - Fill color
 *
 * @see DKTools.Sprite.prototype.standardFillColor
 */
DKTools.Sprite.prototype.setupFillColor = function(color) {
    /**
     * @private
     * @readonly
     * @type {String | null}
     */
    this._fillColor = (color !== null ? _.defaultTo(color, this.standardFillColor()) : null);
};

/**
 * Sets the font of the bitmap
 *
 * @param {Object} [font] - Text font
 *
 * @param {String} [font.fontFace] - Font face
 * @param {Number} [font.fontSize] - Font size
 * @param {Boolean} [font.fontItalic] - Font italic
 *
 * @see DKTools.Sprite.prototype.standardFont
 */
DKTools.Sprite.prototype.setupFont = function(font) {
    /**
     * @private
     * @readonly
     * @type {Object}
     */
    this._font = Object.assign(this.standardFont(), font);
};

/**
 * Sets the frame of the sprite
 *
 * @version 3.1.0
 *
 * @param {Number | Rectangle | Object} [object] - The X coordinate or Rectangle or object with parameters
 * @param {Number} [y] - The Y coordinate (if object is Number)
 * @param {Number} [width] - Width of the frame (if object is Number)
 * @param {Number} [height] - Height of the frame (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 * @param {Number} [object.width] - Width of the frame
 * @param {Number} [object.height] - Height of the frame
 *
 * @see DKTools.Utils.Rectangle.toRectangle
 * @see DKTools.Sprite.prototype.standardFrame
 * @see Sprite.prototype.setFrame
 * @see DKTools.Sprite.prototype.hasFixedBitmap
 */
DKTools.Sprite.prototype.setupFrame = function(object, y, width, height) {
    const frame = DKTools.Utils.Rectangle.tryToRectangle(object, y, width, height);
    const newFrame = Object.assign(this.standardFrame(), frame);

    Sprite.prototype.setFrame.call(this, newFrame.x, newFrame.y, newFrame.width, newFrame.height);
};

/**
 * Sets the graphic folder
 *
 * @param {String} [folder] - Path to folder
 *
 * @see DKTools.Sprite.prototype.standardGraphicFolder
 */
DKTools.Sprite.prototype.setupGraphicFolder = function(folder) {
    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._graphicFolder = _.defaultTo(folder, this.standardGraphicFolder());
};

/**
 * Sets the listener on load of graphic
 *
 * @param {Function} listener - Listener
 */
DKTools.Sprite.prototype.setupGraphicLoadListener = function(listener) {
    /**
     * @private
     * @readonly
     * @type {Function}
     */
    this._graphicLoadListener = listener || null;
};

/**
 * Sets the graphic name
 *
 * @param {String} [graphicName] - Graphic name
 *
 * @see DKTools.Sprite.prototype.standardGraphicName
 */
DKTools.Sprite.prototype.setupGraphicName = function(graphicName) {
    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._graphicName = (graphicName !== null ? _.defaultTo(graphicName, this.standardGraphicName()) : null);
};

/**
 * Sets the height of the bitmap
 *
 * @param {Number | String} [height] - Height of the bitmap or number of lines
 *
 * @see DKTools.Base.prototype.getLineHeight
 * @see DKTools.Base.prototype._checkHeight
 */
DKTools.Sprite.prototype.setupHeight = function(height) {
    if (DKTools.Utils.isString(height)) { // number of lines
        height = this.getLineHeight() * parseFloat(height);
    }

    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._bitmapHeight = this._checkHeight(height);
};

/**
 * Sets the mask
 *
 * @since 2.0.0
 * @param {PIXI.Graphics} [mask] - Mask
 */
DKTools.Sprite.prototype.setupMask = function(mask) {
    this.mask = (mask !== null ? _.defaultTo(mask, this.standardMask()) : null);
};

/**
 * Sets the opacity of the sprite
 *
 * @param {Number} [opacity] - Opacity
 *
 * @see DKTools.Sprite.prototype.standardOpacity
 */
DKTools.Sprite.prototype.setupOpacity = function(opacity) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._opacity = DKTools.Utils.Number.clamp(_.defaultTo(opacity, this.standardOpacity(), 0, 255));
};

/**
 * Sets the paint opacity
 *
 * @param {Number} [opacity] - Paint opacity
 *
 * @see DKTools.Sprite.prototype.standardPaintOpacity
 */
DKTools.Sprite.prototype.setupPaintOpacity = function(opacity) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._paintOpacity = _.defaultTo(opacity, this.standardPaintOpacity());
};

/**
 * Sets the size of the bitmap
 *
 * @param {Number | Object} [object] - Width of the bitmap or object with parameters
 * @param {Number} [height] - Height of the bitmap (if object is Number)
 *
 * @param {Number} [object.width] - Width of the bitmap
 * @param {Number} [object.height] - Height of the bitmap
 *
 * @see DKTools.Sprite.prototype.setupWidth
 * @see DKTools.Sprite.prototype.setupHeight
 */
DKTools.Sprite.prototype.setupSize = function(object, height) {
    if (object instanceof Object) {
        return this.setupSize(object.width, object.height);
    }

    this.setupWidth(object);
    this.setupHeight(height);
};

/**
 * Sets the color of the text
 *
 * @param {String} [color] - Text color
 *
 * @see DKTools.Sprite.prototype.standardTextColor
 */
DKTools.Sprite.prototype.setupTextColor = function(color) {
    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._textColor = color || this.standardTextColor();
};

/**
 * Sets the width of the bitmap
 *
 * @param {Number} [width] - Width of the bitmap
 *
 * @see DKTools.Base.prototype._checkWidth
 */
DKTools.Sprite.prototype.setupWidth = function(width) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._bitmapWidth = this._checkWidth(width);
};

/**
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the sprite
 *
 * @param {Object} [object.font] - Text font
 * @param {String} [object.textColor] - Text color
 * @param {Number} [object.paintOpacity] - Paint opacity
 * @param {String} [object.fillColor] - Fill color
 * @param {String} [object.align] - Text align
 * @param {Number} [object.opacity] - Opacity
 * @param {String} [object.graphicFolder] - Graphic folder
 * @param {String} [object.graphicName] - Graphic name
 *
 * @param {String} [object.font.fontFace] - Font face
 * @param {Number} [object.font.fontSize] - Font size
 * @param {Boolean} [object.font.fontItalic] - Font italic
 *
 * @see DKTools.Base.prototype.setAll
 * @see DKTools.Sprite.prototype.setFont
 * @see DKTools.Sprite.prototype.setTextColor
 * @see DKTools.Sprite.prototype.setPaintOpacity
 * @see DKTools.Sprite.prototype.setFillColor
 * @see DKTools.Sprite.prototype.setAlign
 * @see DKTools.Sprite.prototype.setOpacity
 * @see DKTools.Sprite.prototype.setGraphicFolder
 * @see DKTools.Sprite.prototype.setGraphicName
 * @see DKTools.Sprite.prototype.start
 * @see DKTools.Sprite.prototype.activate
 *
 * @returns {Number} Number of changed parameters
 */
DKTools.Sprite.prototype.setAll = function(object = {}, blockStart = false, activate = false) {
    object = object || {};

    const block = true;
    let changed = DKTools.Base.prototype.setAll.call(this, object, block);

    if (this.setAlign(object.align, block)) {
        changed++;
    }

    if (this.setAnchor(object.anchor)) {
        changed++;
    }

    if (this.setFont(object.font, block)) {
        changed++;
    }

    if (this.setTextColor(object.textColor, block)) {
        changed++;
    }

    if (this.setPaintOpacity(object.paintOpacity, block)) {
        changed++;
    }

    if (this.setFillColor(object.fillColor, block)) {
        changed++;
    }

    if (this.setOpacity(object.opacity, block)) {
        changed++;
    }

    if (this.setGraphicFolder(object.graphicFolder, block)) {
        changed++;
    }

    if (this.setGraphicName(object.graphicName, block)) {
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
 * Changes the align
 * Returns true if the change occurred
 *
 * @param {String} [align] - Text align
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.prototype.setupAlign
 * @see DKTools.Sprite.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setAlign = function(align, blockRefreshAll = false) {
    if (this._align === align) {
        return false;
    }

    const lastAlign = this._align;

    this.setupAlign(align);

    if (this._align === lastAlign) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the anchor of the sprite
 * Returns true if the change occurred
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - The X coordinate or Point or object with parameters
 * @param {Number} [y] - The Y coordinate (is object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 *
 * @see DKTools.Utils.Point.toPoint
 * @see DKTools.Utils.Point.clone
 * @see DKTools.Sprite.prototype.setupAnchor
 * @see DKTools.Utils.Point.equals
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setAnchor = function(object, y) {
    const newAnchor = DKTools.Utils.Point.toPoint(object, y);

    if (DKTools.Utils.Point.equals(this.anchor, newAnchor)) {
        return false;
    }

    const lastAnchor = DKTools.Utils.Point.clone(this.anchor);

    this.setupAnchor(newAnchor);

    return !DKTools.Utils.Point.equals(this.anchor, lastAnchor);
};

/**
 * Changes the bitmap
 * Returns true if the change occurred
 *
 * @param {Bitmap | Object} [object] - Bitmap or object with parameters
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see DKTools.Sprite.prototype.setupBitmap
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setBitmap = function(object) {
    if (this.bitmap === object) {
        return false;
    }

    this.setupBitmap(object);

    return true;
};

/**
 * Changes the fill color
 * Returns true if the change occurred
 *
 * @param {String} [color] - Fill color
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.prototype.setupFillColor
 * @see DKTools.Sprite.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setFillColor = function(color, blockRefreshAll = false) {
    if (this._fillColor === color) {
        return false;
    }

    const lastColor = this._fillColor;

    this.setupFillColor(color);

    if (this._fillColor === lastColor) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the font of the bitmap
 * Returns true if the change occurred
 *
 * @param {Object} [font] - Text font
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @param {String} [font.fontFace] - Font face
 * @param {Number} [font.fontSize] - Font size
 * @param {Boolean} [font.fontItalic] - Font italic
 *
 * @see DKTools.Sprite.prototype.standardFont
 * @see DKTools.Sprite.prototype.setupFont
 * @see DKTools.Sprite.prototype.start
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setFont = function(font, blockStart = false) {
    if (_.isEqual(this._font, Object.assign(this.standardFont(), font))) {
        return false;
    }

    const lastFont = { ...this._font };

    this.setupFont(font);

    if (_.isEqual(this._font, lastFont)) {
        return false;
    }

    if (!blockStart) {
        this.start();
    }

    return true;
};

/**
 * Changes the frame of the sprite
 * Returns true if the change occurred
 *
 * @override
 *
 * @param {Number | Rectangle | Object} [object] - The X coordinate or Rectangle or object with parameters
 * @param {Number} [y] - The Y coordinate (if object is Number)
 * @param {Number} [width] - Width of the frame (if object is Number)
 * @param {Number} [height] - Height of the frame (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 * @param {Number} [object.width] - Width of the frame
 * @param {Number} [object.height] - Height of the frame
 *
 * @see DKTools.Utils.Rectangle.toRectangle
 * @see DKTools.Utils.Rectangle.equals
 * @see DKTools.Utils.Rectangle.clone
 * @see DKTools.Sprite.prototype.setupFrame
 * @see DKTools.Utils.Rectangle.equals
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setFrame = function(object, y, width, height) {
    const newFrame = DKTools.Utils.Rectangle.toRectangle(object, y, width, height);

    if (DKTools.Utils.Rectangle.equals(this._frame, newFrame)) {
        return false;
    }

    const lastFrame = DKTools.Utils.Rectangle.clone(this._frame);

    this.setupFrame(newFrame);

    return !DKTools.Utils.Rectangle.equals(this._frame, lastFrame);
};

/**
 * Changes the graphic folder
 * Returns true if the change occurred
 *
 * @param {String} [folder] - Graphic folder
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Sprite.prototype.setupGraphicFolder
 * @see DKTools.Sprite.prototype.start
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setGraphicFolder = function(folder, blockStart = false) {
    if (this._graphicFolder === folder) {
        return false;
    }

    const lastFolder = this._graphicFolder;

    this.setupGraphicFolder(folder);

    if (this._graphicFolder === lastFolder) {
        return false;
    }

    if (!blockStart) {
        this.start();
    }

    return true;
};

/**
 * Changes the graphic name
 * Returns true if the change occurred
 *
 * @param {String} [graphicName] - Graphic name
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Sprite.prototype.setupGraphicName
 * @see DKTools.Sprite.prototype.start
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setGraphicName = function(graphicName, blockStart = false) {
    if (this._graphicName === graphicName) {
        return false;
    }

    const lastGraphic = this._graphicName;

    this.setupGraphicName(graphicName);

    if (this._graphicName === lastGraphic) {
        return false;
    }

    if (!blockStart) {
        this.start();
    }

    return true;
};

/**
 * Changes the height of the bitmap
 * Returns true if the change occurred
 *
 * @version 3.1.0
 *
 * @param {Number} [height] - Height of the bitmap
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Sprite.prototype._getBitmapWidth
 * @see DKTools.Sprite.prototype.resize
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setHeight = function(height, blockStart = false) {
    return this.resize(this._getBitmapWidth(), height, blockStart);
};

/**
 * Changes the mask
 * Returns true if the change occurred
 *
 * @since 2.0.0
 * @param {PIXI.Graphics} [mask] - Mask
 *
 * @see DKTools.Sprite.prototype.setupMask
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setMask = function(mask) {
    if (this.mask === mask) {
        return false;
    }

    this.setupMask(mask);

    return true;
};

/**
 * Changes the opacity of the sprite
 * Returns true if the change occurred
 *
 * @param {Number} [opacity] - Opacity of the sprite
 * @param {Boolean} [blockUpdateOpacity=false] - Blocking the call of the "updateOpacity" function
 *
 * @see DKTools.Sprite.prototype.setupOpacity
 * @see DKTools.Sprite.prototype.updateOpacity
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setOpacity = function(opacity, blockUpdateOpacity = false) {
    if (this._opacity === opacity) {
        return false;
    }

    const lastOpacity = this._opacity;

    this.setupOpacity(opacity);

    if (this._opacity === lastOpacity) {
        return false;
    }

    if (!blockUpdateOpacity) {
        this.updateOpacity();
    }

    return true;
};

/**
 * Changes the paint opacity
 * Returns true if the change occurred
 *
 * @param {Number} [opacity] - Paint opacity
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.prototype.setupPaintOpacity
 * @see DKTools.Sprite.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setPaintOpacity = function(opacity, blockRefreshAll = false) {
    if (this._paintOpacity === opacity) {
        return false;
    }

    const lastOpacity = this._paintOpacity;

    this.setupPaintOpacity(opacity);

    if (this._paintOpacity === lastOpacity) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the text color
 * Returns true if the change occurred
 *
 * @param {String} [color] - Text color
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.prototype.setupTextColor
 * @see DKTools.Sprite.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setTextColor = function(color, blockRefreshAll = false) {
    if (this._textColor === color) {
        return false;
    }

    const lastColor = this._textColor;

    this.setupTextColor(color);

    if (this._textColor === lastColor) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the width of the bitmap
 * Returns true if the change occurred
 *
 * @version 3.1.0
 *
 * @param {Number} [width] - Width of the bitmap
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Sprite.prototype._getBitmapHeight
 * @see DKTools.Sprite.prototype.resize
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setWidth = function(width, blockStart = false) {
    return this.resize(width, this._getBitmapHeight(), blockStart);
};

// R methods

/**
 * Redraws all
 *
 * @version 1.1.0
 * @override
 *
 * @see DKTools.Sprite.prototype.clear
 * @see DKTools.Sprite.prototype.drawAll
 * @see DKTools.Sprite.prototype.updateRedrawAllEvents
 */
DKTools.Sprite.prototype.redrawAll = function() {
    this.clear();
    this.drawAll();
    this.updateRedrawAllEvents();
};

/**
 * Removes the bitmap
 *
 * @see DKTools.Sprite.prototype.hasBitmap
 * @see DKTools.Sprite.prototype.setBitmap
 */
DKTools.Sprite.prototype.removeBitmap = function() {
    if (this.hasBitmap()) {
        this.setBitmap(null);
    }
};

/**
 * Removes the fill color
 *
 * @since 6.1.0
 *
 * @see DKTools.Sprite.prototype.hasFillColor
 * @see DKTools.Sprite.prototype.setFillColor
 */
DKTools.Sprite.prototype.removeFillColor = function() {
    if (this.hasFillColor()) {
        this.setFillColor(null);
    }
};

/**
 * Removes the graphic name
 *
 * @see DKTools.Sprite.prototype.hasGraphicName
 * @see DKTools.Sprite.prototype.setGraphicName
 */
DKTools.Sprite.prototype.removeGraphicName = function() {
    if (this.hasGraphicName()) {
        this.setGraphicName(null);
    }
};

/**
 * Removes the text by ID
 * Returns the removed text or null
 *
 * @version 5.0.0
 *
 * @param {Number | String | *} id - ID of the text
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.prototype.findText
 * @see DKTools.Sprite.prototype.refreshAll
 *
 * @returns {Object | null} Removed text or null
 */
DKTools.Sprite.prototype.removeText = function(id, blockRefreshAll = false) {
    const textObj = this.findText(id);

    if (!textObj) {
        return null;
    }

    DKTools.Utils.Array.remove(this._texts, textObj);

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return textObj;
};

/**
 * Loads and reserves a bitmap from img/animations/
 * Returns true if the bitmap has been changed
 *
 * @version 3.0.0
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.reserveAnimation = function(object, listener, hue, smooth, reservationId) {
    if (object instanceof Object) {
        return this.reserveBitmap(
            'img/animations/',
            object.filename,
            object.listener,
            object.hue,
            object.smooth,
            object.reservationId);
    }

    // object - String
    return this.reserveBitmap('img/animations/', object, listener, hue, smooth, reservationId);
};

/**
 * Loads and reserves a bitmap from img/battlebacks1/
 * Returns true if the bitmap has been changed
 *
 * @version 3.0.0
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.reserveBattleback1 = function(object, listener, hue, smooth, reservationId) {
    if (object instanceof Object) {
        return this.reserveBitmap(
            'img/battlebacks1/',
            object.filename,
            object.listener,
            object.hue,
            object.smooth,
            object.reservationId);
    }

    // object - String
    return this.reserveBitmap('img/battlebacks1/', object, listener, hue, smooth, reservationId);
};

/**
 * Loads and reserves a bitmap from img/battlebacks2/
 * Returns true if the bitmap has been changed
 *
 * @version 3.0.0
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.reserveBattleback2 = function(object, listener, hue, smooth, reservationId) {
    if (object instanceof Object) {
        return this.reserveBitmap(
            'img/battlebacks2/',
            object.filename,
            object.listener,
            object.hue,
            object.smooth,
            object.reservationId);
    }

    // object - String
    return this.reserveBitmap('img/battlebacks2/', object, listener, hue, smooth, reservationId);
};

/**
 * Loads and reserves a bitmap
 * Returns true if the bitmap has been changed
 *
 * @version 3.0.0
 *
 * @param {String | Object} object - Path to file or object with parameters
 * @param {String} filename - Name of file (if object is String)
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see DKTools.Sprite.prototype.setBitmap
 * @see DKTools.Utils.Bitmap.reserve
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.reserveBitmap = function(object, filename, listener, hue, smooth, reservationId) {
    if (object instanceof Object) {
        return this.reserveBitmap(
            object.folder,
            object.filename,
            object.listener,
            object.hue,
            object.smooth,
            object.reservationId);
    }

    // object - String (folder)
    const bitmap = DKTools.Utils.Bitmap.reserve(object, filename, null, hue, smooth, reservationId);

    if (this.setBitmap(bitmap)) {
        if (DKTools.Utils.isFunction(listener) && this.hasBitmap()) {
            this.bitmap.addLoadListener(listener);
        }

        return true;
    }

    return false;
};

/**
 * Loads and reserves a bitmap from img/characters/
 * Returns true if the bitmap has been changed
 *
 * @version 3.0.0
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.reserveCharacter = function(object, listener, hue, smooth, reservationId) {
    if (object instanceof Object) {
        return this.reserveBitmap(
            'img/characters/',
            object.filename,
            object.listener,
            object.hue,
            object.smooth,
            object.reservationId);
    }

    // object - String
    return this.reserveBitmap('img/characters/', object, listener, hue, smooth, reservationId);
};

/**
 * Loads and reserves a bitmap from img/enemies/
 * Returns true if the bitmap has been changed
 *
 * @version 3.0.0
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.reserveEnemy = function(object, listener, hue, smooth, reservationId) {
    if (object instanceof Object) {
        return this.reserveBitmap(
            'img/enemies/',
            object.filename,
            object.listener,
            object.hue,
            object.smooth,
            object.reservationId);
    }

    // object - String
    return this.reserveBitmap('img/enemies/', object, listener, hue, smooth, reservationId);
};

/**
 * Loads and reserves a bitmap from img/faces/
 * Returns true if the bitmap has been changed
 *
 * @version 3.0.0
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.reserveFace = function(object, listener, hue, smooth, reservationId) {
    if (object instanceof Object) {
        return this.reserveBitmap(
            'img/faces/',
            object.filename,
            object.listener,
            object.hue,
            object.smooth,
            object.reservationId);
    }

    // object - String
    return this.reserveBitmap('img/faces/', object, listener, hue, smooth, reservationId);
};

/**
 * Loads and reserves a bitmap from img/parallaxes/
 * Returns true if the bitmap has been changed
 *
 * @version 8.1.0
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.reserveParallax = function(object, listener, hue, smooth, reservationId) {
    if (object instanceof Object) {
        return this.reserveBitmap(
            ImageManager.PARALLAXES_FOLDER,
            object.filename,
            object.listener,
            object.hue,
            object.smooth,
            object.reservationId);
    }

    // object - String
    return this.reserveBitmap(ImageManager.PARALLAXES_FOLDER, object, listener, hue, smooth, reservationId);
};

/**
 * Loads and reserves a bitmap from img/pictures/
 * Returns true if the bitmap has been changed
 *
 * @version 3.0.0
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.reservePicture = function(object, listener, hue, smooth, reservationId) {
    if (object instanceof Object) {
        return this.reserveBitmap(
            'img/pictures/',
            object.filename,
            object.listener,
            object.hue,
            object.smooth,
            object.reservationId);
    }

    // object - String
    return this.reserveBitmap('img/pictures/', object, listener, hue, smooth, reservationId);
};

/**
 * Loads and reserves a bitmap from img/sv_actors/
 * Returns true if the bitmap has been changed
 *
 * @version 3.0.0
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.reserveSvActor = function(object, listener, hue, smooth, reservationId) {
    if (object instanceof Object) {
        return this.reserveBitmap(
            'img/sv_actors/',
            object.filename,
            object.listener,
            object.hue,
            object.smooth,
            object.reservationId);
    }

    // object - String
    return this.reserveBitmap('img/sv_actors/', object, listener, hue, smooth, reservationId);
};

/**
 * Loads and reserves a bitmap from img/sv_enemies/
 * Returns true if the bitmap has been changed
 *
 * @version 3.0.0
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.reserveSvEnemy = function(object, listener, hue, smooth, reservationId) {
    if (object instanceof Object) {
        return this.reserveBitmap(
            'img/sv_enemies/',
            object.filename,
            object.listener,
            object.hue,
            object.smooth,
            object.reservationId);
    }

    // object - String
    return this.reserveBitmap('img/sv_enemies/', object, listener, hue, smooth, reservationId);
};

/**
 * Loads and reserves a bitmap from img/system/
 * Returns true if the bitmap has been changed
 *
 * @version 3.0.0
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.reserveSystem = function(object, listener, hue, smooth, reservationId) {
    if (object instanceof Object) {
        return this.reserveBitmap(
            'img/system/',
            object.filename,
            object.listener,
            object.hue,
            object.smooth,
            object.reservationId);
    }

    // object - String
    return this.reserveBitmap('img/system/', object, listener, hue, smooth, reservationId);
};

/**
 * Loads and reserves a bitmap from img/tilesets/
 * Returns true if the bitmap has been changed
 *
 * @version 8.1.0
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.reserveTileset = function(object, listener, hue, smooth, reservationId) {
    if (object instanceof Object) {
        return this.reserveBitmap(
            ImageManager.TILESETS_FOLDER,
            object.filename,
            object.listener,
            object.hue,
            object.smooth,
            object.reservationId);
    }

    // object - String
    return this.reserveBitmap(ImageManager.TILESETS_FOLDER, object, listener, hue, smooth, reservationId);
};

/**
 * Loads and reserves a bitmap from img/titles1/
 * Returns true if the bitmap has been changed
 *
 * @version 3.0.0
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.reserveTitle1 = function(object, listener, hue, smooth, reservationId) {
    if (object instanceof Object) {
        return this.reserveBitmap(
            'img/titles1/',
            object.filename,
            object.listener,
            object.hue,
            object.smooth,
            object.reservationId);
    }

    // object - String
    return this.reserveBitmap('img/titles1/', object, listener, hue, smooth, reservationId);
};

/**
 * Loads and reserves a bitmap from img/titles2/
 * Returns true if the bitmap has been changed
 *
 * @version 3.0.0
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see DKTools.Base.prototype.reserveBitmap
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.reserveTitle2 = function(object, listener, hue, smooth, reservationId) {
    if (object instanceof Object) {
        return this.reserveBitmap(
            'img/titles2/',
            object.filename,
            object.listener,
            object.hue,
            object.smooth,
            object.reservationId);
    }

    // object - String
    return this.reserveBitmap('img/titles2/', object, listener, hue, smooth, reservationId);
};

/**
 * Loads and reserves a window skin from img/system/
 * Returns true if the bitmap has been changed
 *
 * @version 3.0.0
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see DKTools.Sprite.prototype.standardWindowskin
 * @see DKTools.Sprite.prototype.reserveSystem
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.reserveWindowskin = function(object, listener, hue, smooth, reservationId) {
    if (object instanceof Object) {
        return this.reserveSystem(
            object.filename || this.standardWindowskin(),
            object.listener,
            object.hue,
            object.smooth,
            object.reservationId);
    }

    // object - String (filename)
    return this.reserveSystem(object || this.standardWindowskin(), listener, hue, smooth, reservationId);
};

/**
 * Resets all
 *
 * @see DKTools.Sprite.prototype.resetFont
 * @see DKTools.Sprite.prototype.resetPaintOpacity
 * @see DKTools.Sprite.prototype.resetTextColor
 */
DKTools.Sprite.prototype.resetAll = function() {
    this.resetFont();
    this.resetPaintOpacity();
    this.resetTextColor();
};

/**
 * Resets the font of the bitmap
 *
 * @see DKTools.Sprite.prototype.changeFont
 */
DKTools.Sprite.prototype.resetFont = function() {
    this.changeFont(this.font);
};

/**
 * Resets the paint opacity of the bitmap
 *
 * @see DKTools.Sprite.prototype.changePaintOpacity
 */
DKTools.Sprite.prototype.resetPaintOpacity = function() {
    this.changePaintOpacity(this.paintOpacity);
};

/**
 * Resets the text color of the bitmap
 *
 * @see DKTools.Sprite.prototype.changeTextColor
 */
DKTools.Sprite.prototype.resetTextColor = function() {
    this.changeTextColor(this.textColor);
};

/**
 * Changes the width and height of the sprite
 * Returns true if the change occurred
 *
 * @version 5.0.0
 *
 * @param {Number} [width] - Width of the sprite
 * @param {Number | String} [height] - Height of the sprite or number of lines (String)
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activate the sprite
 *
 * @see DKTools.Sprite.prototype.isResizable
 * @see DKTools.Sprite.prototype.getMinWidth
 * @see DKTools.Sprite.prototype.getMinHeight
 * @see DKTools.Sprite.prototype.setupSize
 * @see DKTools.Sprite.prototype.start
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.resize = function(width, height, blockStart = false, activate = false) {
    if (!this.isResizable()) {
        return false;
    }

    width = _.defaultTo(width, this.getMinWidth());
    height = _.defaultTo(height, this.getMinHeight());

    if (DKTools.Utils.isString(height)) { // number of lines
        height = this.getLineHeight() * parseFloat(height);
    }

    if (this._bitmapWidth === width && this._bitmapHeight === height) {
        return false;
    }

    const lastWidth = this._bitmapWidth;
    const lastHeight = this._bitmapHeight;

    this.setupSize(width, height);

    if (this._bitmapWidth === lastWidth && this._bitmapHeight === lastHeight) {
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

/**
 * Rotates the hue of the bitmap
 * Returns true if successfully completed
 *
 * @param {Number} offset - Offset
 *
 * @see DKTools.Sprite.prototype.hasBitmap
 * @see Bitmap.prototype.rotateHue
 *
 * @returns {Boolean} Successfully completed
 */
DKTools.Sprite.prototype.rotateHue = function(offset) {
    if (!this.hasBitmap() || !offset) {
        return false;
    }

    this.bitmap.rotateHue(offset);

    return true;
};

// U methods

/**
 * Updates all
 *
 * @override
 *
 * @see DKTools.Base.prototype.updateAll
 * @see DKTools.Sprite.prototype.updateBitmap
 */
DKTools.Sprite.prototype.updateAll = function() {
    DKTools.Base.prototype.updateAll.call(this);
    this.updateBitmap();
};

/**
 * Updates the bitmap
 *
 * @see DKTools.Sprite.prototype.hasBitmap
 * @see DKTools.Sprite.prototype.updateFont
 * @see DKTools.Sprite.prototype.updateTextColor
 * @see DKTools.Sprite.prototype.updatePaintOpacity
 */
DKTools.Sprite.prototype.updateBitmap = function() {
    if (this.hasBitmap()) {
        this.updateFont();
        this.updatePaintOpacity();
        this.updateTextColor();
    }
};

/**
 * Updates the events with type: draw-all
 *
 * @see DKTools.Sprite.prototype.updateEventsContainer
 */
DKTools.Sprite.prototype.updateDrawAllEvents = function() {
    this.updateEventsContainer('draw-all');
};

/**
 * Updates the fill of the sprite
 *
 * @see DKTools.Sprite.prototype.hasFillColor
 * @see DKTools.Sprite.prototype.fillAll
 */
DKTools.Sprite.prototype.updateFill = function() {
    if (this.hasFillColor()) {
        this.fillAll(this.fillColor);
    }
};

/**
 * Updates the font of the bitmap
 *
 * @param {Object} [font={}] - Text font
 *
 * @param {String} [font.fontFace] - Font face
 * @param {Number} [font.fontSize] - Font size
 * @param {Boolean} [font.fontItalic] - Font italic
 */
DKTools.Sprite.prototype.updateFont = function(font = {}) {
    font = font || {};

    this.bitmap.fontFace = font.fontFace || this.font.fontFace;
    this.bitmap.fontItalic = !!font.fontItalic;
    this.bitmap.fontSize = font.fontSize || this.font.fontSize;
};

/**
 * Updates the paint opacity
 *
 * @param {Number} [paintOpacity] - Paint opacity
 */
DKTools.Sprite.prototype.updatePaintOpacity = function(paintOpacity) {
    if (!Number.isFinite(paintOpacity)) {
        paintOpacity = this.paintOpacity;
    }

    this.bitmap.paintOpacity = paintOpacity;
};

/**
 * Updates the text color
 *
 * @param {String} [textColor] - Text color
 */
DKTools.Sprite.prototype.updateTextColor = function(textColor) {
    this.bitmap.textColor = textColor || this.textColor;
};

/**
 * Updates the opacity of the sprite
 *
 * @override
 *
 * @param {Number} [opacity=this._opacity] - Opacity of the sprite
 */
DKTools.Sprite.prototype.updateOpacity = function(opacity) {
    if (!Number.isFinite(opacity)) {
        opacity = this.opacity;
    }

    this.alpha = DKTools.Utils.Number.clamp(opacity, 0, 255) / 255;
};





//===========================================================================
// Sprites based on DKTools.Sprite
//===========================================================================




