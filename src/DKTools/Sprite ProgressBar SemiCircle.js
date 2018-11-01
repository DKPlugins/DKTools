//===========================================================================
// DKTools.Sprite.ProgressBar.SemiCircle
//===========================================================================

DKTools.Sprite.ProgressBar.SemiCircle.prototype = Object.create(DKTools.Sprite.ProgressBar.Circle.prototype);
DKTools.Sprite.ProgressBar.SemiCircle.prototype.constructor = DKTools.Sprite.ProgressBar.SemiCircle;

// standard methods

/**
 * Returns the standard handler of draw of the graphic
 *
 * @override
 * @returns {Function} Standard handler of draw of the graphic
 */
DKTools.Sprite.ProgressBar.SemiCircle.prototype.standardDrawGraphicHandler = function() {
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
};





