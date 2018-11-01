//===========================================================================
// DKTools.Sprite.ProgressBar.Circle
//===========================================================================

DKTools.Sprite.ProgressBar.Circle.prototype = Object.create(DKTools.Sprite.ProgressBar.prototype);
DKTools.Sprite.ProgressBar.Circle.prototype.constructor = DKTools.Sprite.ProgressBar.Circle;

// properties

Object.defineProperties(DKTools.Sprite.ProgressBar.Circle.prototype, {

    /**
     * Line width
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.ProgressBar.Circle.prototype
     */
    lineWidth: {
        get: function() {
            return this._lineWidth;
        },
        configurable: true
    }

});

// standard methods

/**
 * Returns the standard handler of draw of the graphic
 *
 * @override
 * @returns {Function} Standard handler of draw of the graphic
 */
DKTools.Sprite.ProgressBar.Circle.prototype.standardDrawGraphicHandler = function() {
    return () => {
        const lineWidth = this._lineWidth;
        const realWidth = this.realWidth;
        const radius = (realWidth - lineWidth) / 2;
        const x = radius + lineWidth / 2;
        const y = x;

        this.strokeArc({
            x, y,
            radius,
            color: this._backgroundColor,
            lineWidth
        });

        this.strokeArc({
            x, y,
            radius,
            startAngle: -Math.PI / 2,
            endAngle: -Math.PI / 2 + Math.PI * 2 * this._value / this._maxValue,
            color: this._progressColor,
            lineWidth
        });
    };
};

/**
 * Returns the standard handler of draw of the text
 *
 * @override
 * @returns {Function} Standard handler of draw of the text
 */
DKTools.Sprite.ProgressBar.Circle.prototype.standardDrawTextHandler = function() {
    return () => {
        const percents = this.getPercents();
        const text = `${percents}%`;

        this.drawText(text, { height: this.realHeight });
    };
};

/**
 * Returns the standard line width
 *
 * @returns {Number} Standard line width
 */
DKTools.Sprite.ProgressBar.Circle.prototype.standardLineWidth = function() {
    return 10;
};

// setup methods

/**
 * Sets all parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 *
 * @param {Number} [object.lineWidth] - Line width
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setupAll
 * @see DKTools.Sprite.ProgressBar.Circle.prototype.setupLineWidth
 */
DKTools.Sprite.ProgressBar.Circle.prototype.setupAll = function(object = {}) {
    object = object || {};

    DKTools.Sprite.ProgressBar.prototype.setupAll.call(this, object);

    this.setupLineWidth(object.lineWidth);
};

/**
 * Sets the line width
 *
 * @param {Number} [width=this.standardLineWidth()] - Line width
 *
 * @see DKTools.Sprite.ProgressBar.Circle.prototype.standardLineWidth
 */
DKTools.Sprite.ProgressBar.Circle.prototype.setupLineWidth = function(width) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._lineWidth = width || this.standardLineWidth();
};

// set methods

/**
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the progress bar
 *
 * @param {Number} [object.lineWidth] - Line width
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setAll
 * @see DKTools.Sprite.ProgressBar.Circle.prototype.setLineWidth
 * @see DKTools.Sprite.ProgressBar.Circle.prototype.start
 * @see DKTools.Sprite.ProgressBar.Circle.prototype.activate
 *
 * @returns {Number} Number of changed parameters
 */
DKTools.Sprite.ProgressBar.Circle.prototype.setAll = function(object = {}, blockStart = false, activate = false) {
    object = object || {};
    const block = true;

    let changed = DKTools.Sprite.ProgressBar.prototype.setAll.call(this, object, block);

    if (this.setLineWidth(object.lineWidth, block)) {
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
 * Changes the line width
 * Returns true if the change occurred
 *
 * @param {Number} [width] - Line width
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.ProgressBar.Circle.prototype.setupLineWidth
 * @see DKTools.Sprite.ProgressBar.Circle.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.ProgressBar.Circle.prototype.setLineWidth = function(width, blockRefreshAll = false) {
    if (this._lineWidth === width) {
        return false;
    }

    const lastWidth = this._lineWidth;

    this.setupLineWidth(width);

    if (this._lineWidth === lastWidth) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};





