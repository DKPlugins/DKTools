//===========================================================================
// DKTools.Sprite.ProgressBar.Rectangle
//===========================================================================

/**
 * Progress bar class
 *
 * @class DKTools.Sprite.ProgressBar.Rectangle
 * @extends DKTools.Sprite.ProgressBar
 *
 * @memberof DKTools.Sprite.ProgressBar
 *
 * @see DKTools.Sprite.ProgressBar.Rectangle.prototype.initialize
 */
DKTools.Sprite.ProgressBar.Rectangle = class extends DKTools.Sprite.ProgressBar {

    // S methods

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
    standardDrawGraphicHandler() {
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

            this.drawText(text, { height: this.realHeight });
        };
    }

    /**
     * Returns the standard handler of draw of the graphic for horizontal progress bar
     *
     * @returns {Function} Standard handler of draw of the graphic for horizontal progress bar
     */
    standardHorizontalDrawGraphicHandler() {
        return () => {
            this.fillAll(this._backgroundColor);

            if (!this.isEmpty()) {
                this.fillRect({
                    color: this._progressColor,
                    width: this._value * this.realWidth / this._maxValue
                });
            }
        };
    }

    /**
     * Returns the standard handler of draw of the graphic for vertical progress bar
     *
     * @returns {Function} Standard handler of draw of the graphic for vertical progress bar
     */
    standardVerticalDrawGraphicHandler() {
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
    }

};




