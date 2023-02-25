//===========================================================================
// DKTools.Window.Scrollable
//===========================================================================

/**
 * @class
 * @since 1.1.5
 * @extends Window_Scrollable
 * @mixes DKTools.Window
 */
DKTools.Window.Scrollable = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

DKTools.Window.Scrollable.prototype = Object.create(Window_Scrollable.prototype);
Object.defineProperties(DKTools.Window.Scrollable.prototype,
    Object.getOwnPropertyDescriptors(DKTools.Window.prototype));
DKTools.Window.Scrollable.prototype.constructor = DKTools.Window.Scrollable;

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
 * const window = new DKTools.Window.Scrollable(0, 0, 100, 100);
 *
 * @example
 * const window = new DKTools.Window.Scrollable(Graphics);
 *
 * @example
 * const window = new DKTools.Window.Scrollable({ x: 0, y: 0, width: 200, height: 200 });
 *
 * @example
 * const window = new DKTools.Window.Scrollable(50, 50, 400, '2');
 */
DKTools.Window.Scrollable.prototype.initialize = function(object, y, width, height) {
    DKTools.Window.prototype.initialize.apply(this, arguments);
    this.clearScrollStatus();
};

// C methods

/**
 * Clears all data
 * @override
 * @private
 */
DKTools.Window.Scrollable.prototype._clearAll = function() {
    DKTools.Window.prototype._clearAll.apply(this, arguments);
    this._scrollX = 0;
    this._scrollY = 0;
    this._scrollBaseX = 0;
    this._scrollBaseY = 0;
};

/**
 * @override
 */
DKTools.Window.Scrollable.prototype._createArrowSprites = function() {
    DKTools.Window.prototype._createArrowSprites.apply(this, arguments);

    this._leftArrowSprite = new Sprite();
    this._rightArrowSprite = new Sprite();

    this.addChild(this._leftArrowSprite);
    this.addChild(this._rightArrowSprite);
};

// I methods

/**
 * Returns the width of the item
 * @override
 * @return {Number} Width of the item
 */
DKTools.Window.Scrollable.prototype.itemWidth = function() {
    if (DKTools.Utils.isFunction(this._itemWidth)) {
        return this._itemWidth(this);
    } else if (Number.isFinite(this._itemWidth)) {
        return this._itemWidth;
    }

    return Window_Scrollable.prototype.itemWidth.apply(this, arguments);
};

/**
 * Returns the height of the item
 * @override
 * @return {Number} Height of the item
 */
DKTools.Window.Scrollable.prototype.itemHeight = function() {
    if (DKTools.Utils.isFunction(this._itemHeight)) {
        return this._itemHeight(this);
    } else if (Number.isFinite(this._itemHeight)) {
        return this._itemHeight;
    } else if (DKTools.Utils.isString(this._itemHeight)) { // number of lines
        return this.lineHeight() * parseFloat(this._itemHeight);
    }

    return Window_Scrollable.prototype.itemHeight.apply(this, arguments);
};

/**
 * Returns true if the horizontal scrolling
 * @return {Boolean} Horizontal scrolling
 */
DKTools.Window.Scrollable.prototype.isHorizontal = function() {
    return this.maxScrollX() > 0;
};

// O methods

/**
 * @override
 * @return {Number}
 */
DKTools.Window.Scrollable.prototype.overallWidth = function() {
    return this.hasBitmap() ?
        this.contents.width : 0;
};

/**
 * @override
 * @return {Number}
 */
DKTools.Window.Scrollable.prototype.overallHeight = function() {
    return this.hasBitmap() ?
        this.contents.height : 0;
};

/**
 * Handles item change
 * @override
 * @param {*} item - Item
 * @param {*} lastItem - Last item
 */
DKTools.Window.Scrollable.prototype.onItemChange = function(item, lastItem) {
    DKTools.Window.prototype.onItemChange.apply(this, arguments);
    this.scrollTo(0, 0);
};

// P methods

/**
 * Processes page scroll
 * @override
 */
DKTools.Window.Scrollable.prototype.processPageScroll = function() {
    if (Input.isRepeated('pageup')) {
        if (this.isHorizontal()) {
            this.smoothScrollRight(1);
        } else {
            this.smoothScrollUp(1);
        }
    }

    if (Input.isRepeated('pagedown')) {
        if (this.isHorizontal()) {
            this.smoothScrollLeft(1);
        } else {
            this.smoothScrollDown(1);
        }
    }
};

/**
 * Processes wheel scroll
 * @override
 */
DKTools.Window.Scrollable.prototype.processWheelScroll = function() {
    if (this.isWheelScrollEnabled() && this.isTouchedInsideFrame()) {
        const threshold = 20;

        if (TouchInput.wheelY >= threshold) {
            if (this.isHorizontal()) {
                this.smoothScrollLeft(1);
            } else {
                this.smoothScrollDown(1);
            }
        }

        if (TouchInput.wheelY <= -threshold) {
            if (this.isHorizontal()) {
                this.smoothScrollRight(1);
            } else {
                this.smoothScrollUp(1);
            }
        }
    }
};

// R methods

/**
 * Refreshes arrows
 * @override
 */
DKTools.Window.Scrollable.prototype._refreshArrows = function() {
    DKTools.Window.prototype._refreshArrows.apply(this, arguments);

    const w = this._width;
    const h = this._height;
    const p = 24;
    const q = p / 2;
    const sx = 96 + p;
    const sy = 0 + p;

    this._leftArrowSprite.bitmap = this._windowskin;
    this._leftArrowSprite.anchor.set(0.5, 0.5);
    this._leftArrowSprite.setFrame(sx, sy + q, q, p);
    this._leftArrowSprite.move(q / 2, h / 2);

    this._rightArrowSprite.bitmap = this._windowskin;
    this._rightArrowSprite.anchor.set(0.5, 0.5);
    this._rightArrowSprite.setFrame(sx + q + p, sy + q, q, p);
    this._rightArrowSprite.move(w - q, h / 2);
};

// S methods

// setup methods

/**
 * Sets all parameters
 *
 * @param {Object} [object={}] - Parameters
 *
 * @param {Function | Number} [object.itemWidth] - Width of the item
 * @param {Function | Number} [object.itemHeight] - Height of the item
 * @param {Function | Number} [object.scrollBlockWidth] - Width of the scroll block
 * @param {Function | Number} [object.scrollBlockHeight] - Height of the scroll block
 */
DKTools.Window.Scrollable.prototype.setupAll = function(object = {}) {
    object = object || {};
    DKTools.Window.prototype.setupAll.apply(this, arguments);
    this.setupItemWidth(object.itemWidth);
    this.setupItemHeight(object.itemHeight);
};

/**
 * Sets the width of the item
 * @param {Function | Number} [width] - Width of the item
 */
DKTools.Window.Scrollable.prototype.setupItemWidth = function(width) {
    this._itemWidth = width;
};

/**
 * Sets the height of the item
 * @param {Function | Number} [height] - Height of the item
 */
DKTools.Window.Scrollable.prototype.setupItemHeight = function(height) {
    this._itemHeight = height;
};

// other S methods

/**
 * Smooth scrolls to left
 * @param {Number} cols - Cols to scroll
 */
DKTools.Window.Scrollable.prototype.smoothScrollLeft = function(cols) {
    this.smoothScrollBy(this.itemWidth() * cols, 0);
};

/**
 * Smooth scrolls to right
 * @param {Number} cols - Cols to scroll
 */
DKTools.Window.Scrollable.prototype.smoothScrollRight = function(cols) {
    this.smoothScrollBy(-this.itemWidth() * cols, 0);
};

// U methods

/**
 * @override
 * @private
 */
DKTools.Window.Scrollable.prototype._updateArrows = function() {
    const isOpen = this.isOpen();

    this._leftArrowSprite.visible = isOpen && this.leftArrowVisible;
    this._rightArrowSprite.visible = isOpen && this.rightArrowVisible;
    this._downArrowSprite.visible = isOpen && this.downArrowVisible;
    this._upArrowSprite.visible = isOpen && this.upArrowVisible;
};

/**
 * Updates the arrows
 * @override
 */
DKTools.Window.Scrollable.prototype.updateArrows = function() {
    this.leftArrowVisible = this._scrollX > 0;
    this.rightArrowVisible = this._scrollX < this.maxScrollX();
    this.downArrowVisible = this._scrollY < this.maxScrollY();
    this.upArrowVisible = this._scrollY > 0;
};

/**
 * Updates the origin
 * @override
 */
DKTools.Window.Scrollable.prototype.updateOrigin = function() {
    Window_Scrollable.prototype.updateOrigin.apply(this, arguments);
    this.origin.set(this._scrollX, this._scrollY);
};

/**
 * Updates the window
 * @override
 */
DKTools.Window.Scrollable.prototype.update = function() {
    Window_Scrollable.prototype.update.apply(this, arguments);
    DKTools.Base.prototype.update.apply(this, arguments);
};


