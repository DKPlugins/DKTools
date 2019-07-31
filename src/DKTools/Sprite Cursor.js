//===========================================================================
// DKTools.Sprite.Cursor
//===========================================================================

/**
 * Cursor class
 *
 * @class DKTools.Sprite.Cursor
 * @extends DKTools.Sprite
 *
 * @memberof DKTools.Sprite
 *
 * @see DKTools.Sprite.Cursor.prototype.initialize
 */
DKTools.Sprite.Cursor = class extends DKTools.Sprite {

    // C methods

    /**
     * Clears all data
     *
     * @private
     * @override
     *
     * @see DKTools.Sprite.prototype._clearAll
     * @see DKTools.Sprite.Cursor.prototype._clearAnimationCount
     */
    _clearAll() {
        DKTools.Sprite.prototype._clearAll.call(this);
        this._clearAnimationCount();
    }

    /**
     * Clears the animation count
     *
     * @private
     */
    _clearAnimationCount() {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._animationCount = 0;
    }

    /**
     * Creates all
     *
     * @private
     * @override
     *
     * @see DKTools.Sprite.prototype._createAll
     * @see DKTools.Sprite.Cursor.prototype._createWindowskin
     */
    _createAll() {
        DKTools.Sprite.prototype._createAll.call(this);
        this._createWindowskin();
    }

    /**
     * Creates the window skin
     *
     * @private
     *
     * @see DKTools.Sprite.Cursor.prototype.standardWindowskin
     */
    _createWindowskin() {
        this._windowskin = ImageManager.loadSystem(this.standardWindowskin());
    }

    // R methods

    /**
     * Updates and redraws all
     *
     * @override
     *
     * @see DKTools.Sprite.prototype.refreshAll
     * @see DKTools.Sprite.Cursor.prototype.refreshCursor
     */
    refreshAll() {
        DKTools.Sprite.prototype.refreshAll.call(this);
        this.refreshCursor();
    }

    /**
     * Updates the cursor
     *
     * @version 8.0.0
     *
     * @see DKTools.Sprite.Cursor.prototype.move
     * @see DKTools.Sprite.Cursor.prototype.setupBitmap
     */
    refreshCursor() {
        const x = this._cursorRect.x;
        const y = this._cursorRect.y;
        const w = this._cursorRect.width;
        const h = this._cursorRect.height;
        const parent = this.parent;
        const m = 4;
        const ox = 0;
        const oy = 0;
        const w2 = Math.min(w, parent.width - x);
        const h2 = Math.min(h, parent.height - y);

        this.move(x, y);

        if (w > 0 && h > 0) {
            const skin = this._windowskin;
            const bitmap = new Bitmap(w2, h2);
            const p = 96;
            const q = 48;

            bitmap.blt(skin, p + m, p + m, q - m * 2, q - m * 2, ox + m, oy + m, w - m * 2, h - m * 2);
            bitmap.blt(skin, p + m, p, q - m * 2, m, ox + m, oy, w - m * 2, m);
            bitmap.blt(skin, p + m, p + q - m, q - m * 2, m, ox + m, oy + h - m, w - m * 2, m);
            bitmap.blt(skin, p, p + m, m, q - m * 2, ox, oy + m, m, h - m * 2);
            bitmap.blt(skin, p + q - m, p + m, m, q - m * 2, ox + w - m, oy + m, m, h - m * 2);
            bitmap.blt(skin, p, p, m, m, ox, oy, m, m);
            bitmap.blt(skin, p + q - m, p, m, m, ox + w - m, oy, m, m);
            bitmap.blt(skin, p, p + q - m, m, m, ox, oy + h - m, m, m);
            bitmap.blt(skin, p + q - m, p + q - m, m, m, ox + w - m, oy + h - m, m, m);

            this.setupBitmap(bitmap);
        }
    }

    // S methods

    /**
     * Returns the standard blink speed
     *
     * @returns {Number} Standard blink speed
     */
    standardBlinkSpeed() {
        return 8;
    }

    /**
     * Returns the standard rectangle of the cursor
     *
     * @returns {Rectangle} Standard rectangle of the cursor
     */
    standardCursorRect() {
        return new Rectangle(0, 0, 0, 0);
    }

    /**
     * Sets all parameters
     *
     * @override
     *
     * @param {Object} [object={}] - Parameters
     *
     * @param {Number} [object.blinkSpeed] - Blink speed
     * @param {PIXI.Rectangle | Rectangle | Object} [object.cursorRect] - Rectangle of the cursor
     *
     * @param {Number} [object.cursorRect.x] - The X coordinate
     * @param {Number} [object.cursorRect.y] - The Y coordinate
     * @param {Number} [object.cursorRect.width] - Width of the rectangle
     * @param {Number} [object.cursorRect.height] - Height of the rectangle
     *
     * @see DKTools.Sprite.prototype.setupAll
     * @see DKTools.Sprite.Cursor.prototype.setupBlinkSpeed
     * @see DKTools.Sprite.Cursor.prototype.setupCursorRect
     */
    setupAll(object = {}) {
        object = object || {};

        DKTools.Sprite.prototype.setupAll.call(this, object);

        this.setupBlinkSpeed(object.blinkSpeed);
        this.setupCursorRect(object.cursorRect);
    }

    /**
     * Sets the blink speed
     *
     * @param {Number} [blinkSpeed=this.standardBlinkSpeed()] - Blink speed
     *
     * @see DKTools.Sprite.Cursor.prototype.standardBlinkSpeed
     */
    setupBlinkSpeed(blinkSpeed) {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._blinkSpeed = _.defaultTo(blinkSpeed, this.standardBlinkSpeed());
    }

    /**
     * Sets the rectangle of the cursor
     *
     * @param {Number | PIXI.Rectangle | Rectangle | Object} [object=this.standardCursorRect()] - The X coordinate or Rectangle or object with parameters
     * @param {Number} [y] - The Y coordinate (if object is Number)
     * @param {Number} [width] - Width of the rectangle (if object is Number)
     * @param {Number} [height] - Height of the rectangle (if object is Number)
     *
     * @param {Number} [object.x] - The X coordinate
     * @param {Number} [object.y] - The Y coordinate
     * @param {Number} [object.width] - Width of the rectangle
     * @param {Number} [object.height] - Height of the rectangle
     *
     * @see DKTools.Utils.Rectangle.toRectangle
     * @see DKTools.Sprite.Cursor.prototype.standardCursorRect
     */
    setupCursorRect(object, y, width, height) {
        const rect = DKTools.Utils.Rectangle.tryToRectangle(object, y, width, height);

        /**
         * @private
         * @readonly
         * @type {Rectangle}
         */
        this._cursorRect = Object.assign(this.standardCursorRect(), rect);
    }

    /**
     * Changes all parameters
     * Returns the number of changed parameters
     *
     * @override
     *
     * @param {Object} [object={}] - Parameters
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     * @param {Boolean} [activate=false] - Activates the cursor
     *
     * @param {Number} [object.blinkSpeed] - Blink speed
     * @param {PIXI.Rectangle | Rectangle | Object} [object.cursorRect] - Rectangle of the cursor
     *
     * @param {Number} [object.cursorRect.x] - The X coordinate
     * @param {Number} [object.cursorRect.y] - The Y coordinate
     * @param {Number} [object.cursorRect.width] - Width of the rectangle
     * @param {Number} [object.cursorRect.height] - Height of the rectangle
     *
     * @see DKTools.Sprite.prototype.setAll
     * @see DKTools.Sprite.Cursor.prototype.setBlinkSpeed
     * @see DKTools.Sprite.Cursor.prototype.setCursorRect
     * @see DKTools.Sprite.Cursor.prototype.start
     * @see DKTools.Sprite.Cursor.prototype.activate
     *
     * @returns {Number} Number of changed parameters
     */
    setAll(object = {}, blockStart = false, activate = false) {
        object = object || {};

        const block = true;
        let changed = DKTools.Sprite.prototype.setAll.call(this, object, block);

        if (this.setBlinkSpeed(object.blinkSpeed)) {
            changed++;
        }

        if (this.setCursorRect(object.cursorRect)) {
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
     * Changes the blink speed
     * Returns true if the change occurred
     *
     * @param {Number} [blinkSpeed] - Blink speed
     *
     * @see DKTools.Sprite.Cursor.prototype.setupBlinkSpeed
     *
     * @returns {Boolean} Change occurred
     */
    setBlinkSpeed(blinkSpeed) {
        if (this._blinkSpeed === blinkSpeed) {
            return false;
        }

        const lastSpeed = this._blinkSpeed;

        this.setupBlinkSpeed(blinkSpeed);

        return this._blinkSpeed !== lastSpeed;
    }

    /**
     * Changes the rectangle of the cursor
     * Returns true if the change occurred
     *
     * @param {Number | PIXI.Rectangle | Rectangle | Object} [object] - The X coordinate or Rectangle or object with parameters
     * @param {Number} [y] - The Y coordinate (if object is Number)
     * @param {Number} [width] - Width of the rectangle (if object is Number)
     * @param {Number} [height] - Height of the rectangle (if object is Number)
     *
     * @param {Number} [object.x] - The X coordinate
     * @param {Number} [object.y] - The Y coordinate
     * @param {Number} [object.width] - Width of the rectangle
     * @param {Number} [object.height] - Height of the rectangle
     *
     * @see DKTools.Utils.Rectangle.toRectangle
     * @see DKTools.Utils.Rectangle.equals
     * @see DKTools.Sprite.Cursor.prototype.setupCursorRect
     * @see DKTools.Sprite.Cursor.prototype.refreshCursor
     *
     * @returns {Boolean} Change occurred
     */
    setCursorRect(object, y, width, height) {
        const newRect = DKTools.Utils.Rectangle.toRectangle(object, y, width, height);

        if (DKTools.Utils.Rectangle.equals(this._cursorRect, newRect)) {
            return false;
        }

        const lastRect = DKTools.Utils.Rectangle.clone(this._cursorRect);

        this.setupCursorRect(newRect);

        if (!DKTools.Utils.Rectangle.equals(this._cursorRect, lastRect)) {
            this.refreshCursor();

            return true;
        }

        return false;
    }

    // P methods

    /**
     * Processes all
     *
     * @version 6.1.0
     * @override
     *
     * @see DKTools.Sprite.prototype.processAll
     */
    processAll() {
        DKTools.Sprite.prototype.processAll.call(this);
        this.processCursorAnimation();
    }

    /**
     * Processes the cursor animation
     *
     * @since 6.1.0
     *
     * @see DKTools.Sprite.Cursor.prototype.setOpacity
     */
    processCursorAnimation() {
        const blinkCount = this._animationCount % 40;
        let parentOpacity = this.parent.getCurrentOpacity();

        if (this.parent.isVisibleAndActive()) {
            this._animationCount++;

            if (blinkCount < 20) {
                parentOpacity -= blinkCount * this._blinkSpeed;
            } else {
                parentOpacity -= (40 - blinkCount) * this._blinkSpeed;
            }
        }

        this.setOpacity(parentOpacity);
    }

};

// properties

Object.defineProperties(DKTools.Sprite.Cursor.prototype, {

    /**
     * Rectangle of the cursor
     *
     * @readonly
     * @type {Rectangle}
     * @memberof DKTools.Sprite.Cursor.prototype
     */
    cursorRect: {
        get: function() {
            return this._cursorRect;
        },
        configurable: true
    },

    /**
     * Blink speed
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.Cursor.prototype
     */
    blinkSpeed: {
        get: function() {
            return this._blinkSpeed;
        },
        configurable: true
    }

});




