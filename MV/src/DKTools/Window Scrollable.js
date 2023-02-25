//===========================================================================
// DKTools.Window.Scrollable
//===========================================================================

/**
 * @class
 * @since 11.0.0
 * @extends Window_Base
 * @mixes DKTools.Window
 */
DKTools.Window.Scrollable = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

DKTools.Window.Scrollable.prototype = Object.create(Window_Base.prototype);
Object.defineProperties(DKTools.Window.Scrollable.prototype,
    Object.getOwnPropertyDescriptors(DKTools.Window.prototype));
DKTools.Window.Scrollable.prototype.constructor = DKTools.Window.Scrollable;

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
    this.clearScrollStatus();
};

/**
 * @override
 * @private
 */
DKTools.Window.Scrollable.prototype._createArrowSprites = function() {
    DKTools.Window.prototype._createArrowSprites.apply(this, arguments);

    this._leftArrowSprite = new Sprite();
    this._rightArrowSprite = new Sprite();

    this.addChild(this._leftArrowSprite);
    this.addChild(this._rightArrowSprite);
};

/**
 * Clears the scroll status
 */
DKTools.Window.Scrollable.prototype.clearScrollStatus = function() {
    this._scrollTargetX = 0;
    this._scrollTargetY = 0;
    this._scrollDuration = 0;
    this._scrollAccelX = 0;
    this._scrollAccelY = 0;
    this._scrollTouching = false;
    this._scrollLastTouchX = 0;
    this._scrollLastTouchY = 0;
};

// I methods

/**
 * Returns the width of the item
 * @return {Number} Width of the item
 */
DKTools.Window.Scrollable.prototype.itemWidth = function() {
    if (typeof this._itemWidth === 'function') {
        return this._itemWidth(this);
    } else if (Number.isFinite(this._itemWidth)) {
        return this._itemWidth;
    }

    return this.innerWidth;
};

/**
 * Returns the height of the item
 * @return {Number} Height of the item
 */
DKTools.Window.Scrollable.prototype.itemHeight = function() {
    if (typeof this._itemHeight === 'function') {
        return this._itemHeight(this);
    } else if (Number.isFinite(this._itemHeight)) {
        return this._itemHeight;
    } else if (typeof this._itemHeight === 'string') { // number of lines
        return this.lineHeight() * parseFloat(this._itemHeight);
    }

    return this.lineHeight();
};

/**
 * Returns true if the horizontal scrolling
 * @return {Boolean} Horizontal scrolling
 */
DKTools.Window.Scrollable.prototype.isHorizontal = function() {
    return this.maxScrollX() > 0;
};

/**
 * Returns true if the scroll enabled
 * @return {Boolean} Scroll enabled
 */
DKTools.Window.Scrollable.prototype.isScrollEnabled = function() {
    return true;
};

/**
 * Returns true if touched inside the frame
 * @return {Boolean} Touched inside the frame
 */
DKTools.Window.Scrollable.prototype.isTouchedInsideFrame = function() {
    const touchPos = new Point(TouchInput.mouseX, TouchInput.mouseY);
    const localPos = this.worldTransform.applyInverse(touchPos);

    return this.innerRect.contains(localPos.x, localPos.y);
};

/**
 * Returns true if the touch scroll enabled
 * @return {Boolean} Touch scroll enabled
 */
DKTools.Window.Scrollable.prototype.isTouchScrollEnabled = function() {
    return this.isScrollEnabled();
};

/**
 * Returns true if the wheel scroll enabled
 * @return {Boolean} Wheel scroll enabled
 */
DKTools.Window.Scrollable.prototype.isWheelScrollEnabled = function() {
    return this.isScrollEnabled();
};

// M methods

/**
 * Returns the max scroll X
 * @return {Number} Max scroll X
 */
DKTools.Window.Scrollable.prototype.maxScrollX = function() {
    return Math.max(0, this.overallWidth() - this.innerWidth);
};

/**
 * Returns the max scroll Y
 * @return {Number} Max scroll Y
 */
DKTools.Window.Scrollable.prototype.maxScrollY = function() {
    return Math.max(0, this.overallHeight() - this.innerHeight);
};

// O methods

/**
 * Handles the start of the scroll
 */
DKTools.Window.Scrollable.prototype.onTouchScrollStart = function() {
    this._scrollTouching = true;
    this._scrollLastTouchX = TouchInput.mouseX;
    this._scrollLastTouchY = TouchInput.mouseY;
    this.setScrollAccel(0, 0);
};

/**
 * Handles the scroll
 */
DKTools.Window.Scrollable.prototype.onTouchScroll = function() {
    const accelX = this._scrollLastTouchX - TouchInput.mouseX;
    const accelY = this._scrollLastTouchY - TouchInput.mouseY;

    this.setScrollAccel(accelX, accelY);

    this._scrollLastTouchX = TouchInput.mouseX;
    this._scrollLastTouchY = TouchInput.mouseY;
};

/**
 * Handles the end of the scroll
 */
DKTools.Window.Scrollable.prototype.onTouchScrollEnd = function() {
    this._scrollTouching = false;
};

/**
 * Returns the overall width
 * @return {Number} Overall width
 */
DKTools.Window.Scrollable.prototype.overallWidth = function() {
    return this.hasBitmap() ?
        this.contents.width : 0;
};

/**
 * Returns the overall width
 * @return {Number} Overall height
 */
DKTools.Window.Scrollable.prototype.overallHeight = function() {
    return this.hasBitmap() ?
        this.contents.height : 0;
};

// P methods

/**
 * Processes page scroll
 * @since 11.1.0
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
 * Processes touch scroll
 */
DKTools.Window.Scrollable.prototype.processTouchScroll = function() {
    if (this.isTouchScrollEnabled()) {
        if (TouchInput.isTriggered() && this.isTouchedInsideFrame()) {
            this.onTouchScrollStart();
        }

        if (this._scrollTouching) {
            if (TouchInput.isReleased()) {
                this.onTouchScrollEnd();
            } else if (TouchInput.isMouseMoved()) {
                this.onTouchScroll();
            }
        }
    }
};

/**
 * Processes wheel scroll
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

// set methods

/**
 * Sets the scroll accel
 * @param {Number} x - The X coordinate
 * @param {Number} y - The Y coordinate
 */
DKTools.Window.Scrollable.prototype.setScrollAccel = function(x, y) {
    this._scrollAccelX = x;
    this._scrollAccelY = y;
};

// other S methods

/**
 * Returns the width of the scroll block
 * @version 11.1.0
 * @return {Number} Width of the scroll block
 */
DKTools.Window.Scrollable.prototype.scrollBlockWidth = function() {
    return this.itemWidth();
};

/**
 * Returns the height of the scroll block
 * @version 11.1.0
 * @return {Number} Height of the scroll block
 */
DKTools.Window.Scrollable.prototype.scrollBlockHeight = function() {
    return this.itemHeight();
};

/**
 * Returns the scroll base X
 * @return {Number} Scroll base X
 */
DKTools.Window.Scrollable.prototype.scrollBaseX = function() {
    return this._scrollBaseX;
};

/**
 * Returns the scroll base Y
 * @return {Number} Scroll base Y
 */
DKTools.Window.Scrollable.prototype.scrollBaseY = function() {
    return this._scrollBaseY;
};

/**
 * Scrolling by coordinates offset
 * @param {Number} x - The X coordinate
 * @param {Number} y - The Y coordinate
 */
DKTools.Window.Scrollable.prototype.scrollBy = function(x, y) {
    this.scrollTo(this._scrollX + x, this._scrollY + y);
};

/**
 * Scroll to coordinates
 * @param {Number} x - The X coordinate
 * @param {Number} y - The Y coordinate
 */
DKTools.Window.Scrollable.prototype.scrollTo = function(x, y) {
    const scrollX = x.clamp(0, this.maxScrollX());
    const scrollY = y.clamp(0, this.maxScrollY());

    if (this._scrollX !== scrollX || this._scrollY !== scrollY) {
        this._scrollX = scrollX;
        this._scrollY = scrollY;
        this.updateOrigin();
    }
};

/**
 * Returns the scroll X
 * @return {Number} Scroll X
 */
DKTools.Window.Scrollable.prototype.scrollX = function() {
    return this._scrollX;
};

/**
 * Returns the scroll Y
 * @return {Number} Scroll Y
 */
DKTools.Window.Scrollable.prototype.scrollY = function() {
    return this._scrollY;
};

/**
 * Smooth scrolling by coordinates offset
 * @param {Number} x - The X coordinate
 * @param {Number} y - The Y coordinate
 */
DKTools.Window.Scrollable.prototype.smoothScrollBy = function(x, y) {
    if (this._scrollDuration === 0) {
        this._scrollTargetX = this.scrollX();
        this._scrollTargetY = this.scrollY();
    }

    this.smoothScrollTo(this._scrollTargetX + x, this._scrollTargetY + y);
};

/**
 * Smooth scrolls to down
 * @param {Number} rows - Rows to scroll
 */
DKTools.Window.Scrollable.prototype.smoothScrollDown = function(rows) {
    this.smoothScrollBy(0, this.itemHeight() * rows);
};

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

/**
 * Smooth scroll to coordinates
 * @param {Number} x - The X coordinate
 * @param {Number} y - The Y coordinate
 */
DKTools.Window.Scrollable.prototype.smoothScrollTo = function(x, y) {
    this._scrollTargetX = x.clamp(0, this.maxScrollX());
    this._scrollTargetY = y.clamp(0, this.maxScrollY());
    this._scrollDuration = Input.keyRepeatInterval;
};

/**
 * Smooth scrolls to up
 * @param {Number} rows - Rows to scroll
 */
DKTools.Window.Scrollable.prototype.smoothScrollUp = function(rows) {
    this.smoothScrollBy(0, -this.itemHeight() * rows);
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
 */
DKTools.Window.Scrollable.prototype.updateArrows = function() {
    this.leftArrowVisible = this._scrollX > 0;
    this.rightArrowVisible = this._scrollX < this.maxScrollX();
    this.downArrowVisible = this._scrollY < this.maxScrollY();
    this.upArrowVisible = this._scrollY > 0;
};

/**
 * Updates the origin
 */
DKTools.Window.Scrollable.prototype.updateOrigin = function() {
    const blockWidth = this.scrollBlockWidth() || 1;
    const blockHeight = this.scrollBlockHeight() || 1;
    const baseX = this._scrollX - (this._scrollX % blockWidth);
    const baseY = this._scrollY - (this._scrollY % blockHeight);

    if (baseX !== this._scrollBaseX || baseY !== this._scrollBaseY) {
        this.updateScrollBase(baseX, baseY);
    }

    this.origin.set(this._scrollX, this._scrollY);
};

/**
 * Updates the smooth scroll
 */
DKTools.Window.Scrollable.prototype.updateSmoothScroll = function() {
    if (this._scrollDuration > 0) {
        const duration = this._scrollDuration;
        const deltaX = (this._scrollTargetX - this._scrollX) / duration;
        const deltaY = (this._scrollTargetY - this._scrollY) / duration;

        this.scrollBy(deltaX, deltaY);

        this._scrollDuration--;
    }
};

/**
 * Updates the scroll accel
 */
DKTools.Window.Scrollable.prototype.updateScrollAccel = function() {
    if (this._scrollAccelX !== 0 || this._scrollAccelY !== 0) {
        this.scrollBy(this._scrollAccelX, this._scrollAccelY);

        this._scrollAccelX *= 0.92;
        this._scrollAccelY *= 0.92;

        if (Math.abs(this._scrollAccelX) < 1) {
            this._scrollAccelX = 0;
        }

        if (Math.abs(this._scrollAccelY) < 1) {
            this._scrollAccelY = 0;
        }
    }
};

/**
 * Updates the scroll base
 * @param {Number} baseX - The X base coordinate
 * @param {Number} baseY - The Y base coordinate
 */
DKTools.Window.Scrollable.prototype.updateScrollBase = function(baseX, baseY) {
    const deltaX = baseX - this._scrollBaseX;
    const deltaY = baseY - this._scrollBaseY;

    this._scrollBaseX = baseX;
    this._scrollBaseY = baseY;

    this.moveInnerChildrenBy(-deltaX, -deltaY);
};

/**
 * Updates the window
 * @override
 */
DKTools.Window.Scrollable.prototype.update = function() {
    Window_Base.prototype.update.apply(this, arguments);
    DKTools.Base.prototype.update.apply(this, arguments);
    this.processWheelScroll();
    this.processTouchScroll();
    this.processPageScroll();
    this.updateSmoothScroll();
    this.updateScrollAccel();
    this.updateArrows();
    this.updateOrigin();
};


