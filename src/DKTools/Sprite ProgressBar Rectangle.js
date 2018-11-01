//===========================================================================
// DKTools.Sprite.ProgressBar.Rectangle
//===========================================================================

DKTools.Sprite.ProgressBar.Rectangle.prototype = Object.create(DKTools.Sprite.ProgressBar.prototype);
DKTools.Sprite.ProgressBar.Rectangle.prototype.constructor = DKTools.Sprite.ProgressBar.Rectangle;

// standard methods

/**
 * Returns the standard handler of draw of the graphic for horizontal progress bar
 *
 * @returns {Function} Standard handler of draw of the graphic for horizontal progress bar
 */
DKTools.Sprite.ProgressBar.Rectangle.prototype.standardHorizontalDrawGraphicHandler = function() {
    return () => {
        this.fillAll(this._backgroundColor);

        if (!this.isEmpty()) {
            this.fillRect({
                color: this._progressColor,
                width: this._value * this.realWidth / this._maxValue
            });
        }
    };
};

/**
 * Returns the standard handler of draw of the graphic for vertical progress bar
 *
 * @returns {Function} Standard handler of draw of the graphic for vertical progress bar
 */
DKTools.Sprite.ProgressBar.Rectangle.prototype.standardVerticalDrawGraphicHandler = function() {
    return () => {
        this.fillAll(this._backgroundColor);

        if (!this.isEmpty()) {
            const realHeight = this.realHeight;
            const height = this._value * realHeight / this._maxValue;

            this.fillRect({
                color: this._progressColor,
                y: realHeight - height,
                width: this.realWidth,
                height
            });
        }
    };
};

/**
 * Returns the standard handler of draw of the graphic
 *
 * @override
 *
 * @see DKTools.Sprite.ProgressBar.Rectangle.prototype.isHorizontal
 * @see DKTools.Sprite.ProgressBar.Rectangle.prototype.standardHorizontalDrawGraphicHandler
 * @see DKTools.Sprite.ProgressBar.Rectangle.prototype.standardVerticalDrawGraphicHandler
 *
 * @returns {Function} Standard handler of draw of the graphic
 */
DKTools.Sprite.ProgressBar.Rectangle.prototype.standardDrawGraphicHandler = function() {
    return () => {
        let handler;

        if (this.isHorizontal()) {
            handler = this.standardHorizontalDrawGraphicHandler();
        } else {
            handler = this.standardVerticalDrawGraphicHandler();
        }

        if (DKTools.Utils.isFunction(handler)) {
            handler(this);
        }
    };
};

/**
 * Returns the standard handler of draw of the text
 *
 * @override
 * @returns {Function} Standard handler of draw of the text
 */
DKTools.Sprite.ProgressBar.Rectangle.prototype.standardDrawTextHandler = function() {
    return () => {
        const percents = this.getPercents();
        const text = `${percents}%`;

        this.drawText(text, { height: this.realHeight });
    };
};





