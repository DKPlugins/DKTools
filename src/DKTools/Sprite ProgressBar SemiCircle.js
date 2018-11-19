//===========================================================================
// DKTools.Sprite.ProgressBar.SemiCircle
//===========================================================================

/**
 * Progress bar class
 *
 * @class DKTools.Sprite.ProgressBar.SemiCircle
 * @extends DKTools.Sprite.ProgressBar.Circle
 *
 * @memberof DKTools.Sprite.ProgressBar
 *
 * @see DKTools.Sprite.ProgressBar.SemiCircle.prototype.initialize
 */
DKTools.Sprite.ProgressBar.SemiCircle = class extends DKTools.Sprite.ProgressBar.Circle {

    // S methods

    /**
     * Returns the standard handler of draw of the graphic
     *
     * @override
     * @returns {Function} Standard handler of draw of the graphic
     */
    standardDrawGraphicHandler() {
        return () => {
            const lineWidth = this._lineWidth;
            const realWidth = this.realWidth;
            const radius = (realWidth - lineWidth) / 2;
            const x = radius + lineWidth / 2;
            const y = this.realHeight;

            this.strokeArc({
                x, y,
                radius,
                startAngle: Math.PI,
                color: this._backgroundColor,
                lineWidth
            });

            this.strokeArc({
                x, y,
                radius,
                startAngle: Math.PI,
                endAngle: -Math.PI + Math.PI * this._value / this._maxValue,
                color: this._progressColor,
                lineWidth
            });
        };
    }

};




