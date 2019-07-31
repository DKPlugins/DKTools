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

            this.drawText(text, { height: this.height });
        };
    }

    /**
     * Returns the standard handler of draw of the graphic for horizontal progress bar
     *
     * @version 6.3.0
     *
     * @returns {Function} Standard handler of draw of the graphic for horizontal progress bar
     */
    standardHorizontalDrawGraphicHandler() {
        return () => {
            this.drawGauge({
                backgroundColor: this._backgroundColor,
                color: this._progressColor,
                rate: this._value / this._maxValue
            });
        };
    }

    /**
     * Returns the standard handler of draw of the graphic for vertical progress bar
     *
     * @version 6.3.0
     *
     * @returns {Function} Standard handler of draw of the graphic for vertical progress bar
     */
    standardVerticalDrawGraphicHandler() {
        return () => {
            this.drawGauge({
                backgroundColor: this._backgroundColor,
                color: this._progressColor,
                rate: this._value / this._maxValue,
                type: 'vertical',
                reversed: true
            });
        };
    }

};




