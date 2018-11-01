//===========================================================================
// DKTools.Sprite.Arrow
//===========================================================================

DKTools.Sprite.Arrow.prototype = Object.create(DKTools.Sprite.Button.prototype);
DKTools.Sprite.Arrow.prototype.constructor = DKTools.Sprite.Arrow;

// properties

Object.defineProperties(DKTools.Sprite.Arrow.prototype, {

    /**
     * Type of the arrow
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.Sprite.Arrow.prototype
     */
    arrowType: {
        get: function() {
            return this._arrowType;
        },
        configurable: true
    }

});

// static methods

/**
 * Returns the rectangle of the arrow or null
 *
 * @since 6.0.0
 * @static
 *
 * @param {String} arrowType - Type of the arrow
 *
 * @returns {Rectangle | null} Rectangle of the arrow or null
 */
DKTools.Sprite.Arrow.getRect = function(arrowType) {
    const p = 24;
    const q = p / 2;
    const sx = 96 + p;
    const sy = p;
    let x, y, width, height;

    switch (arrowType) {
        case 'up':
            x = sx + q;
            y = sy;
            width = p;
            height = q;

            break;
        case 'down':
            x = sx + q;
            y = sy + q + p;
            width = p;
            height = q;

            break;
        case 'left':
            x = sx;
            y = sy + q;
            width = q;
            height = p;

            break;
        case 'right':
            x = sx + q + p;
            y = sy + q;
            width = q;
            height = p;

            break;
    }

    return DKTools.Utils.Rectangle.tryToRectangle(x, y, width, height);
};

// R methods

/**
 * Updates and redraws all
 *
 * @override
 *
 * @see DKTools.Sprite.Button.prototype.refreshAll
 * @see DKTools.Sprite.Arrow.prototype.refreshArrow
 */
DKTools.Sprite.Arrow.prototype.refreshAll = function() {
    DKTools.Sprite.Button.prototype.refreshAll.call(this);
    this.refreshArrow();
};

/**
 *  Updates and redraws the arrow
 *
 * @see DKTools.Sprite.Arrow.prototype.setFrame
 */
DKTools.Sprite.Arrow.prototype.refreshArrow = function() {
    this.setFrame(DKTools.Sprite.Arrow.getRect(this._arrowType));
};

// S methods

/**
 * Returns the standard visibility of the arrow
 *
 * @override
 * @returns {Boolean} Standard visibility of the arrow
 */
DKTools.Sprite.Arrow.prototype.standardVisible = function() {
    return false;
};

/**
 * Returns the standard graphic name
 *
 * @override
 *
 * @see DKTools.Base.prototype.standardWindowskin
 *
 * @returns {String} Standard graphic name
 */
DKTools.Sprite.Arrow.prototype.standardGraphicName = function() {
    return this.standardWindowskin();
};

/**
 * Returns the standard anchor
 *
 * @override
 * @returns {Point} Standard anchor
 */
DKTools.Sprite.Arrow.prototype.standardAnchor = function() {
    return new Point(0.5, 0.5);
};

/**
 * Returns the standard type of the arrow
 *
 * @returns {null} Standard type of the arrow
 */
DKTools.Sprite.Arrow.prototype.standardArrowType = function() {
    return null;
};

/**
 * Sets all parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 *
 * @param {String} [object.arrowType] - Type of the arrow
 *
 * @see DKTools.Sprite.Button.prototype.setupAll
 * @see DKTools.Sprite.Arrow.prototype.setupArrowType
 */
DKTools.Sprite.Arrow.prototype.setupAll = function(object = {}) {
    object = object || {};
    DKTools.Sprite.Button.prototype.setupAll.call(this, object);
    this.setupArrowType(object.arrowType);
};

/**
 * Sets the type of the arrow
 *
 * @param {String} [type] - Type of the arrow
 *
 * @see DKTools.Sprite.Arrow.prototype.standardArrowType
 */
DKTools.Sprite.Arrow.prototype.setupArrowType = function(type) {
    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._arrowType = type || this.standardArrowType();
};

/**
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the arrow
 *
 * @param {String} [object.arrowType] - Type of the arrow
 *
 * @see DKTools.Sprite.Button.prototype.setAll
 * @see DKTools.Sprite.Arrow.prototype.setArrowType
 * @see DKTools.Sprite.Arrow.prototype.start
 * @see DKTools.Sprite.Arrow.prototype.activate
 *
 * @returns {Number} Number of changed parameters
 */
DKTools.Sprite.Arrow.prototype.setAll = function(object = {}, blockStart = false, activate = false) {
    object = object || {};

    const block = true;
    let changed = DKTools.Sprite.Button.prototype.setAll.call(this, object, block);

    if (this.setArrowType(object.arrowType, block)) {
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
 * Changes the type of the arrow
 * Returns true if the change occurred
 *
 * @param {String} [type] - Type of the arrow
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Arrow.prototype.setupArrowType
 * @see DKTools.Sprite.Arrow.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.Arrow.prototype.setArrowType = function(type, blockRefreshAll = false) {
    if (this._arrowType === type) {
        return false;
    }

    const lastType = this._arrowType;

    this.setupArrowType(type);

    if (this._arrowType === lastType) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};




