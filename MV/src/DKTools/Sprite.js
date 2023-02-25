//===========================================================================
// DKTools.Sprite
//===========================================================================

/**
 * @class
 * @extends Sprite
 * @mixes DKTools.Base
 */
DKTools.Sprite = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

DKTools.Sprite.prototype = Object.create(Sprite.prototype);
Object.defineProperties(DKTools.Sprite.prototype,
    Object.getOwnPropertyDescriptors(DKTools.Base.prototype));
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
    }

});

// initialize methods

/**
 * Initializes a class object
 *
 * @version 10.0.0
 *
 * @override
 *
 * @param {Number | DKTools.Sprite | Bitmap | Rectangle | Object} [object] - The X coordinate or Sprite or Bitmap or Rectangle or object with properties
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
 */
DKTools.Sprite.prototype.initialize = function(object, y, width, height) {
	Sprite.prototype.initialize.call(this);
    DKTools.Base.prototype.initialize.apply(this, arguments);

    if (object instanceof Bitmap) {
        this.setupBitmap(object);
    }

    this.updateBitmap();
};

// C methods

/**
 * Returns true if the sprite can be updated and redrawn
 * @since 1.1.0
 * @override
 * @return {Boolean} Sprite can be updated and redrawn
 */
DKTools.Sprite.prototype.canRedrawAll = function() {
    return DKTools.Base.prototype.canRedrawAll.apply(this, arguments)
        && !this.hasGraphicName() && !this.hasFixedBitmap();
};

/**
 * Changes the font of the bitmap
 *
 * @param {Object} font - Text font
 *
 * @param {String} [font.fontFace] - Font face
 * @param {Number} [font.fontSize] - Font size
 * @param {Boolean} [font.fontItalic] - Font italic
 */
DKTools.Sprite.prototype.changeFont = function(font) {
    if (this.hasBitmap()) {
        this.updateFont(font);
    }
};

/**
 * Changes the paint opacity of the bitmap
 * @param {Number} paintOpacity - Paint opacity
 */
DKTools.Sprite.prototype.changePaintOpacity = function(paintOpacity) {
    if (this.hasBitmap()) {
        this.updatePaintOpacity(paintOpacity);
    }
};

/**
 * Changes the text color of the bitmap
 * @param {String} textColor - Text color
 */
DKTools.Sprite.prototype.changeTextColor = function(textColor) {
    if (this.hasBitmap()) {
        this.updateTextColor(textColor);
    }
};

/**
 * Creates all objects
 * @version 10.0.0
 * @override
 */
DKTools.Sprite.prototype.createAll = function() {
    DKTools.Base.prototype.createAll.apply(this, arguments);
    this.createBitmap();
};

/**
 * Loads an image by graphic name (if exists) or create the bitmap (if the fixed bitmap does not exist)
 * @version 1.1.0
 */
DKTools.Sprite.prototype.createBitmap = function() {
    if (this.hasGraphicName()) {
        this._loadGraphic();
    } else if (!this.hasFixedBitmap()) {
        this.bitmap = new Bitmap(this._bitmapWidth, this._bitmapHeight);
    }
};

// D methods

/**
 * Draws all
 * @override
 */
DKTools.Sprite.prototype.drawAll = function() {
    this.updateFill();
    DKTools.Base.prototype.drawAll.apply(this, arguments);
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
 * @param {Point | Object} [options.pos] - Position of the text (ignores other parameters of position: x, y)
 * @param {Rectangle | Object} [options.rect] - Rectangle for drawing (ignores other parameters of position: x, y, width, height, pos)
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
 * @return {Boolean} Successfully completed
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
    height = height || this.lineHeight();
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

// G methods

/**
 * Returns the local point (coordinates inside the sprite)
 *
 * @since 8.0.0
 * @override
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - The X coordinate or Point or object with parameters
 * @param {Number} [y] - The Y coordinate (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 *
 * @return {PIXI.Point} Local point (coordinates inside the sprite)
 */
DKTools.Sprite.prototype.getLocalPoint = function(object, y) {
    const localPoint = DKTools.Base.prototype.getLocalPoint.apply(this, arguments);
    const anchor = this.anchor;

    localPoint.x += this.width * anchor.x;
    localPoint.y += this.height * anchor.y;

    return localPoint;
};

// H methods

/**
 * Returns true if the sprite has the fill color
 * @return {Boolean} Sprite has the fill color
 */
DKTools.Sprite.prototype.hasFillColor = function() {
    return !!this._fillColor;
};

/**
 * Returns true if the sprite has fixed bitmap (setted using setupBitmap or setBitmap)
 * @since 1.1.0
 * @return {Boolean} Sprite has fixed bitmap (setted using setupBitmap or setBitmap)
 */
DKTools.Sprite.prototype.hasFixedBitmap = function() {
    return !!this._fixedBitmap;
};

/**
 * Returns true if the sprite has the graphic folder
 * @return {Boolean} Sprite has the graphic folder
 */
DKTools.Sprite.prototype.hasGraphicFolder = function() {
    return !!this._graphicFolder;
};

/**
 * Returns true if the sprite has the graphic name
 * @return {Boolean} Sprite has the graphic name
 */
DKTools.Sprite.prototype.hasGraphicName = function() {
    return !!this._graphicName;
};

// I methods

/**
 * Returns true if you can change the size of the sprite
 * @version 1.1.0
 * @return {Boolean} You can change the size of the sprite
 */
DKTools.Sprite.prototype.isResizable = function() {
    return !this.hasGraphicName() && !this.hasFixedBitmap();
};

// L methods

/**
 * Loads the graphic (using graphic folder and graphic name)
 * @private
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
 * Returns the height of the line
 * @return {Number} Height of the line
 */
DKTools.Sprite.prototype.lineHeight = function() {
    try {
        return Window_Base.prototype.lineHeight.apply(this, arguments);
    } catch (e) {
        return 36;
    }
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
 * @return {Boolean} Bitmap has been changed
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
 * @return {Boolean} Bitmap has been changed
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
 * @return {Boolean} Bitmap has been changed
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
 * @version 10.0.0
 * @since 5.0.0
 * @param {Number} [x] - The X coordinate or Point or object with parameters
 * @param {Number | String} [y] - The Y coordinate or line number (String) (if object is Number)
 */
DKTools.Sprite.prototype.moveWithAnchor = function(x, y) {
    const anchor = this.anchor;

    if (DKTools.Utils.isString(y)) { // line number
        y = this.lineHeight() * parseFloat(y);
    }

    this.move(x + this.width * anchor.x, y + this.height * anchor.y);
};

// S methods

// standard methods

/**
 * Returns the standard text align
 * @return {String} Standard text align
 */
DKTools.Sprite.prototype.standardAlign = function() {
    return 'center';
};

/**
 * Returns the standard anchor
 * @return {Point} Standard anchor
 */
DKTools.Sprite.prototype.standardAnchor = function() {
    return new Point(0, 0);
};

/**
 * Returns the standard fill color
 * @return {String | null} Standard fill color
 */
DKTools.Sprite.prototype.standardFillColor = function() {
    return null;
};

/**
 * Returns the standard font
 * @version 10.0.5
 * @return {{ fontFace: String, fontSize: Number, fontItalic: Boolean, fontBold: Boolean }} Standard font
 */
DKTools.Sprite.prototype.standardFont = function() {
    return {
        fontFace: this.standardFontFace(),
        fontBold: this.standardFontBold(),
        fontItalic: this.standardFontItalic(),
        fontSize: this.standardFontSize()
    };
};

/**
 * Returns the standard font face
 * @version 8.2.0
 * @return {String} Standard font face
 */
DKTools.Sprite.prototype.standardFontFace = function() {
    try {
        return Window_Base.prototype.standardFontFace.apply(this, arguments);
    } catch (e) {
        return 'GameFont';
    }
};

/**
 * Returns the standard font bold
 * @since 10.0.5
 * @return {Boolean} Standard font bold
 */
DKTools.Sprite.prototype.standardFontBold = function() {
    return false;
};

/**
 * Returns the standard font italic
 * @return {Boolean} Standard font italic
 */
DKTools.Sprite.prototype.standardFontItalic = function() {
    return false;
};

/**
 * Returns the standard font size
 * @version 8.2.0
 * @return {Number} Standard font size
 */
DKTools.Sprite.prototype.standardFontSize = function() {
    try {
        return Window_Base.prototype.standardFontSize.apply(this, arguments);
    } catch (e) {
        return 28;
    }
};

/**
 * Returns the standard frame
 * @version 8.0.0
 * @return {Rectangle} Standard frame
 */
DKTools.Sprite.prototype.standardFrame = function() {
    return new Rectangle(0, 0, this.width, this.height);
};

/**
 * Returns the standard graphic folder
 * @return {String} Standard graphic folder
 */
DKTools.Sprite.prototype.standardGraphicFolder = function() {
    return 'img/system/';
};

/**
 * Returns the standard graphic name
 * @return {String} standard graphic name
 */
DKTools.Sprite.prototype.standardGraphicName = function() {
    return '';
};

/**
 * Returns the standard paint opacity
 * @return {Number} Standard paint opacity
 */
DKTools.Sprite.prototype.standardPaintOpacity = function() {
    return 255;
};

/**
 * Returns the standard text color
 * @return {String} Standard text color
 */
DKTools.Sprite.prototype.standardTextColor = function() {
    return '#ffffff';
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
 * @param {Bitmap | Object} [object.bitmap] - Bitmap or object with parameters
 * @param {Rectangle} [object.frame] - Frame of the sprite
 * @param {Point} [object.anchor] - Anchor of the sprite
 * @param {String} [object.align] - Text align
 * @param {Object} [object.font] - Text font
 * @param {String} [object.textColor] - Text color
 * @param {Number} [object.paintOpacity] - Paint opacity
 * @param {String} [object.fillColor] - Fill color
 * @param {String} [object.graphicFolder] - Graphic folder
 * @param {String} [object.graphicName] - Graphic name
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @param {String} [object.font.fontFace] - Font face
 * @param {Number} [object.font.fontSize] - Font size
 * @param {Boolean} [object.font.fontItalic] - Font italic
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
    this.setupGraphicFolder(object.graphicFolder);
    this.setupGraphicName(object.graphicName);
};

/**
 * Sets the align
 * @param {String} [align=this.standardAlign()] - Text align
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
 * @version 10.0.0
 * @param {Number | Point} [object] - The X coordinate or Point
 * @param {Number} [y] - The Y coordinate (if object is Number)
 */
DKTools.Sprite.prototype.setupAnchor = function(object, y) {
    let anchor;

    if (object instanceof Object) {
        anchor = object;
    } else if (arguments.length === 2) {
        anchor = new Point(object, y);
    } else {
        anchor = this.standardAnchor();
    }

    this.anchor.copy(anchor);
};

/**
 * Sets the bitmap
 *
 * @version 10.0.0
 *
 * @param {Bitmap | Object} [object] - Bitmap or object with parameters
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 */
DKTools.Sprite.prototype.setupBitmap = function(object) {
    let bitmap = null;

    if (object instanceof Object) {
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
 * @param {String} [color] - Fill color
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
 * @version 10.0.0
 * @param {Number | Rectangle} [object] - The X coordinate or Rectangle
 * @param {Number} [y] - The Y coordinate (if object is Number)
 * @param {Number} [width] - Width of the frame (if object is Number)
 * @param {Number} [height] - Height of the frame (if object is Number)
 */
DKTools.Sprite.prototype.setupFrame = function(object, y, width, height) {
    let frame;

    if (object instanceof Object) {
        frame = object;
    } else if (arguments.length === 4) {
        frame = new Rectangle(object, y, width, height);
    } else {
        frame = this.standardFrame();
    }

    Sprite.prototype.setFrame.call(this, frame.x, frame.y, frame.width, frame.height);
};

/**
 * Sets the graphic folder
 * @param {String} [folder] - Path to folder
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
 * @param {String} [graphicName] - Graphic name
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
 * Sets the paint opacity
 * @param {Number} [opacity] - Paint opacity
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
 * Sets the color of the text
 * @param {String} [color] - Text color
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
 * Sets the size of the bitmap
 * @version 10.0.0
 * @param {Number} [width] - Width of the bitmap
 * @param {Number | String} [height] - Height of the bitmap
 */
DKTools.Sprite.prototype.setupSize = function(width, height) {
    if (DKTools.Utils.isString(height)) { // number of lines
        height = this.lineHeight() * parseFloat(height);
    }

    this._bitmapWidth = width;
    this._bitmapHeight = height;
};

// set methods

/**
 * Changes the align
 * Returns true if the change occurred
 * @param {String} [align] - Text align
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 * @return {Boolean} Change occurred
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
 * @return {Boolean} Change occurred
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
 * @param {String} [color] - Fill color
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 * @return {Boolean} Change occurred
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
 * @return {Boolean} Change occurred
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
 * Changes the graphic folder
 * Returns true if the change occurred
 * @param {String} [folder] - Graphic folder
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @return {Boolean} Change occurred
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
 * @param {String} [graphicName] - Graphic name
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @return {Boolean} Change occurred
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
 * Changes the paint opacity
 * Returns true if the change occurred
 * @param {Number} [opacity] - Paint opacity
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 * @return {Boolean} Change occurred
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
 * @param {String} [color] - Text color
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 * @return {Boolean} Change occurred
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

// R methods

/**
 * Removes the bitmap
 */
DKTools.Sprite.prototype.removeBitmap = function() {
    if (this.hasBitmap()) {
        this.setBitmap(null);
    }
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
 * @return {Boolean} Bitmap has been changed
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
 * @return {Boolean} Bitmap has been changed
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
 * Resets all
 */
DKTools.Sprite.prototype.resetAll = function() {
    this.resetFont();
    this.resetPaintOpacity();
    this.resetTextColor();
};

/**
 * Resets the font of the bitmap
 */
DKTools.Sprite.prototype.resetFont = function() {
    this.changeFont(this.font);
};

/**
 * Resets the paint opacity of the bitmap
 */
DKTools.Sprite.prototype.resetPaintOpacity = function() {
    this.changePaintOpacity(this.paintOpacity);
};

/**
 * Resets the text color of the bitmap
 */
DKTools.Sprite.prototype.resetTextColor = function() {
    this.changeTextColor(this.textColor);
};

/**
 * Changes the width and height of the sprite
 * Returns true if the change occurred
 * @version 10.0.0
 * @override
 * @param {Number} width - Width of the sprite
 * @param {Number | String} height - Height of the sprite or number of lines (String)
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @return {Boolean} Change occurred
 */
DKTools.Sprite.prototype.resize = function(width, height, blockStart = false) {
    if (!this.isResizable()) {
        return false;
    }

    if (DKTools.Utils.isString(height)) { // number of lines
        height = this.lineHeight() * parseFloat(height);
    }

    width = Math.floor(width);
    height = Math.floor(height);

    if (this.width === width && this.height === height) {
        return false;
    }

    const lastWidth = this.width;
    const lastHeight = this.height;

    this.setupSize(width, height);

    if (this._bitmapWidth === lastWidth && this._bitmapHeight === lastHeight) {
        return false;
    }

    if (!blockStart) {
        this.start();
    }

    return true;
};

// U methods

/**
 * Updates the sprite
 * @override
 */
DKTools.Sprite.prototype.update = function() {
    DKTools.Base.prototype.update.apply(this, arguments);
    this.updateChildren();
};

/**
 * Updates all
 * @override
 */
DKTools.Sprite.prototype.updateAll = function() {
    DKTools.Base.prototype.updateAll.apply(this, arguments);
    this.updateBitmap();
};

/**
 * Updates the bitmap
 */
DKTools.Sprite.prototype.updateBitmap = function() {
    if (this.hasBitmap()) {
        this.updateFont();
        this.updatePaintOpacity();
        this.updateTextColor();
    }
};

/**
 * Updates the fill of the sprite
 */
DKTools.Sprite.prototype.updateFill = function() {
    if (this.hasFillColor()) {
        this.fillAll(this.fillColor);
    }
};

/**
 * Updates the font of the bitmap
 * @param {Object} [font={}] - Text font
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
 * @param {String} [textColor] - Text color
 */
DKTools.Sprite.prototype.updateTextColor = function(textColor) {
    this.bitmap.textColor = textColor || this.textColor;
};



//===========================================================================
// Sprites based on DKTools.Sprite
//===========================================================================


