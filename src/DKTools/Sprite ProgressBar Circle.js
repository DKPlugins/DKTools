//===========================================================================
// DKTools.Sprite.ProgressBar.Circle
//===========================================================================

/**
 * Progress bar class
 *
 * @class DKTools.Sprite.ProgressBar.Circle
 * @extends DKTools.Sprite.ProgressBar
 *
 * @memberof DKTools.Sprite.ProgressBar
 *
 * @see DKTools.Sprite.ProgressBar.Circle.prototype.initialize
 */
DKTools.Sprite.ProgressBar.Circle = class extends DKTools.Sprite.ProgressBar {

    // S methods

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
    setAll(object = {}, blockStart = false, activate = false) {
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
    }

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
    setLineWidth(width, blockRefreshAll = false) {
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
    }

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
    setupAll(object = {}) {
        object = object || {};

        DKTools.Sprite.ProgressBar.prototype.setupAll.call(this, object);

        this.setupLineWidth(object.lineWidth);
    }

    /**
     * Sets the line width
     *
     * @param {Number} [width=this.standardLineWidth()] - Line width
     *
     * @see DKTools.Sprite.ProgressBar.Circle.prototype.standardLineWidth
     */
    setupLineWidth(width) {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._lineWidth = width || this.standardLineWidth();
    }

    /**
     * Returns the standard handler of draw of the graphic
     *
     * @version 8.0.0
     *
     * @override
     *
     * @returns {Function} Standard handler of draw of the graphic
     */
    standardDrawGraphicHandler() {
        return () => {
            const lineWidth = this._lineWidth;
            const radius = (this.width - lineWidth) / 2;
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
    }

    /**
     * Returns the standard handler of draw of the text
     *
     * @override
     * @returns {Function} Standard handler of draw of the text
     */
    standardDrawTextHandler() {
        return () => {
            const percents = this.getPercents();
            const text = `${percents}%`;

            this.drawText(text, { height: this.height });
        };
    }

    /**
     * Returns the standard line width
     *
     * @returns {Number} Standard line width
     */
    standardLineWidth() {
        return 10;
    }

};

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




