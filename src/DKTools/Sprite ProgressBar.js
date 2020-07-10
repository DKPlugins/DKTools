//===========================================================================
// DKTools.Sprite.ProgressBar
//===========================================================================

/**
 * Progress bar class
 *
 * @class DKTools.Sprite.ProgressBar
 * @extends DKTools.Sprite
 *
 * @memberof DKTools.Sprite
 *
 * @see DKTools.Sprite.ProgressBar.prototype.initialize
 */
DKTools.Sprite.ProgressBar = class extends DKTools.Sprite {

    // A methods

    /**
     * Adds the value
     *
     * @param {Number} value - Value
     *
     * @see DKTools.Sprite.ProgressBar.prototype.setValue
     */
    addValue(value) {
        if (value) {
            this.setValue(this._value + value);
        }
    }

    /**
     * Animates the full value
     * Returns the update event
     *
     * @param {Number} duration - Duration of animation
     *
     * @see DKTools.Sprite.ProgressBar.prototype.animateValue
     *
     * @returns {DKTools.Event} Update event
     */
    aimateFull(duration) {
        return this.animateValue(this._maxValue, duration);
    }

    /**
     * Animates the empty value
     * Returns the update event
     *
     * @version 9.0.0
     * @param {Number} duration - Duration of animation
     *
     * @see DKTools.Sprite.ProgressBar.prototype.animateValue
     *
     * @returns {DKTools.Event} Update event
     */
    animateEmpty(duration) {
        return this.animateValue(this._minValue, duration);
    }

    /**
     * Animates the value
     * Returns the update event
     *
     * @param {Number} value - Value
     * @param {Number} duration - Duration of animation
     *
     * @see DKTools.Sprite.ProgressBar.prototype.addEvent
     * @see DKTools.Sprite.ProgressBar.prototype._updateAnimateValue
     *
     * @returns {DKTools.Event} Update event
     */
    animateValue(value, duration) {
        return this.addEvent({
            type: 'update',
            repeatTime: duration,
            repeats: 0,
            onUpdate: this._updateAnimateValue.bind(
                this, DKTools.Utils.Number.clamp(value, this._minValue, this._maxValue))
        });
    }

    // C methods

    /**
     * Returns true if the progress bar can clone the fixed bitmap
     *
     * @override
     * @returns {Boolean} Progress bar can clone the fixed bitmap
     */
    canCloneFixedBitmap() {
        return false;
    }

    /**
     * Checks all
     *
     * @override 9.0.0
     *
     * @see DKTools.Sprite.prototype.checkAll
     */
    checkAll() {
        super.checkAll();
        this.checkValue();
    }

    /**
     * Checks the value
     *
     * @since 9.0.0
     */
    checkValue() {
        if (this._value < this._minValue) {
            this._value = this._minValue;
        }

        if (this._value > this._maxValue) {
            this._value = this._maxValue;
        }
    }

    // D methods

    /**
     * Draws the graphic of progress
     *
     * @private
     *
     * @see DKTools.Sprite.ProgressBar.prototype.hasDrawGraphicHandler
     */
    _drawProgressGraphic() {
        if (this.hasDrawGraphicHandler()) {
            this._drawGraphicHandler(this);
        }
    }

    /**
     * Draws the text of progress
     *
     * @private
     *
     * @see DKTools.Sprite.ProgressBar.prototype.hasDrawTextHandler
     */
    _drawProgressText() {
        if (this.hasDrawTextHandler()) {
            this._drawTextHandler(this);
        }
    }

    /**
     * Draws all
     *
     * @override
     */
    drawAll() {
        DKTools.Sprite.prototype.drawAll.call(this);
        this.drawProgress();
    }

    /**
     * Draws the progress
     *
     * @see DKTools.Sprite.ProgressBar.prototype._drawProgressGraphic
     * @see DKTools.Sprite.ProgressBar.prototype._drawProgressText
     */
    drawProgress() {
        this._drawProgressGraphic();
        this._drawProgressText();
    }

    // G methods

    /**
     * Returns the elapsed value
     *
     * @since 9.0.0
     * @private
     *
     * @returns {Number} Elapsed value
     */
    _getElapsed() {
        return Math.abs(this._value - this._minValue);
    }

    /**
     * Returns the elapsed steps
     *
     * @since 9.0.0
     *
     * @returns {Number} Elapsed steps
     */
    getElapsedSteps() {
        return this._getElapsed() / this._valueStep;
    }

    /**
     * Returns the next value
     *
     * @returns {Number} Next value
     */
    getNextValue() {
        return Math.min(this._value + this._valueStep, this._maxValue);
    }

    /**
     * Returns the current value in percents
     *
     * @version 9.0.0
     * @returns {Number} Current value in percents
     */
    getPercents() {
        return DKTools.Utils.Number.clamp(
            Math.abs(Math.ceil(this._getElapsed() * 100 / this.getRange())), 0, 100);
    }

    /**
     * Returns the previous value
     *
     * @version 9.0.0
     * @returns {Number} Previous value
     */
    getPrevValue() {
        return Math.max(this._minValue, this._value - this._valueStep);
    }

    /**
     * Returns the range
     *
     * @since 9.0.0
     *
     * @returns {Number} range
     */
    getRange() {
        return this._maxValue - this._minValue;
    }

    /**
     * Returns the remaining steps
     *
     * @since 9.0.0
     *
     * @see DKTools.Sprite.ProgressBar.prototype.getSteps
     * @see DKTools.Sprite.ProgressBar.prototype.getElapsedSteps
     *
     * @returns {Number} Remaining steps
     */
    getRemainingSteps() {
        return this.getSteps() - this.getElapsedSteps();
    }

    /**
     * Returns the total steps
     *
     * @since 9.0.0
     *
     * @see DKTools.Sprite.ProgressBar.prototype.getRange
     *
     * @returns {Number} Total steps
     */
    getSteps() {
        return this.getRange() / this._valueStep;
    }

    // H methods

    /**
     * Returns true if the progress bar has the handler of draw of the graphic
     *
     * @returns {Boolean} Progress bar has the handler of draw of the graphic
     */
    hasDrawGraphicHandler() {
        return !!this._drawGraphicHandler;
    }

    /**
     * Returns true if the progress bar has the handler of draw of the text
     *
     * @returns {Boolean} Progress bar has the handler of draw of the text
     */
    hasDrawTextHandler() {
        return !!this._drawTextHandler;
    }

    // I methods

    /**
     * Returns true if the progress bar is empty
     *
     * @version 9.0.0
     * @returns {Boolean} Progress bar is empty
     */
    isEmpty() {
        return this._value === this._minValue;
    }

    /**
     * Returns true if the progress bar is full
     *
     * @returns {Boolean} Progress bar is full
     */
    isFull() {
        return this._value === this._maxValue;
    }

    /**
     * Returns true if the progress bar is horizontal
     *
     * @returns {Boolean} Progress bar is horizontal
     */
    isHorizontal() {
        return this.width > this.height;
    }

    /**
     * Returns true if the progress bar is vertical
     *
     * @see DKTools.Sprite.ProgressBar.prototype.isHorizontal
     *
     * @returns {Boolean} Progress bar is vertical
     */
    isVertical() {
        return !this.isHorizontal();
    }

    // M methods

    /**
     * Makes the progress bar empty
     *
     * @version 9.0.0
     * @see DKTools.Sprite.ProgressBar.prototype.setValue
     */
    makeEmpty() {
        this.setValue(this._minValue);
    }

    /**
     * Makes the progress bar full
     *
     * @see DKTools.Sprite.ProgressBar.prototype.setValue
     */
    makeFull() {
        this.setValue(this._maxValue);
    }

    // N methods

    /**
     * Sets the next value
     * Returns true if the change occurred
     *
     * @see DKTools.Sprite.ProgressBar.prototype.getNextValue
     * @see DKTools.Sprite.ProgressBar.prototype.setValue
     *
     * @returns {Boolean} Change occurred
     */
    nextValue() {
        return this.setValue(this.getNextValue());
    }

    // P methods

    /**
     * Sets the previous value
     * Returns true if the change occurred
     *
     * @see DKTools.Sprite.ProgressBar.prototype.getPrevValue
     * @see DKTools.Sprite.ProgressBar.prototype.setValue
     *
     * @returns {Boolean} Change occurred
     */
    prevValue() {
        return this.setValue(this.getPrevValue());
    }

    // S methods

    /**
     * Changes all parameters
     * Returns the number of changed parameters
     *
     * @version 9.0.0
     * @override
     *
     * @param {Object} [object={}] - Parameters
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     * @param {Boolean} [activate=false] - Activates the progress bar
     *
     * @param {Number} [object.valueStep] - Value step
     * @param {Number} [object.maxValue] - Maximum value
     * @param {Number} [object.minValue] - Minimum value
     * @param {Number} [object.value] - Value
     * @param {String} [object.backgroundColor] - Background color
     * @param {String} [object.progressColor] - Progress color
     * @param {Function} [object.drawGraphicHandler] - Handler of draw of the graphic
     * @param {Function} [object.drawTextHandler] - Handler of draw of the text
     *
     * @see DKTools.Sprite.prototype.setAll
     * @see DKTools.Sprite.ProgressBar.prototype.setValueStep
     * @see DKTools.Sprite.ProgressBar.prototype.setMaxValue
     * @see DKTools.Sprite.ProgressBar.prototype.setMinValue
     * @see DKTools.Sprite.ProgressBar.prototype.setValue
     * @see DKTools.Sprite.ProgressBar.prototype.setBackgroundColor
     * @see DKTools.Sprite.ProgressBar.prototype.setProgressColor
     * @see DKTools.Sprite.ProgressBar.prototype.setDrawGraphicHandler
     * @see DKTools.Sprite.ProgressBar.prototype.setDrawTextHandler
     * @see DKTools.Sprite.ProgressBar.prototype.start
     * @see DKTools.Sprite.ProgressBar.prototype.activate
     *
     * @returns {Number} Number of changed parameters
     */
    setAll(object = {}, blockStart = false, activate = false) {
        object = object || {};

        const block = true;
        let changed = DKTools.Sprite.prototype.setAll.call(this, object, block);

        if (this.setValueStep(object.valueStep, block)) {
            changed++;
        }

        if (this.setMaxValue(object.maxValue, block)) {
            changed++;
        }

        if (this.setMinValue(object.minValue, block)) {
            changed++;
        }

        if (this.setValue(object.value, block)) {
            changed++;
        }

        if (this.setBackgroundColor(object.backgroundColor, block)) {
            changed++;
        }

        if (this.setProgressColor(object.progressColor, block)) {
            changed++;
        }

        if (this.setDrawGraphicHandler(object.drawGraphicHandler, block)) {
            changed++;
        }

        if (this.setDrawTextHandler(object.drawTextHandler, block)) {
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
     * Changes the background color
     * Returns true if the change occurred
     *
     * @param {String} [color] - Background color
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.ProgressBar.prototype.setupBackgroundColor
     * @see DKTools.Sprite.ProgressBar.prototype.refreshAll
     *
     * @returns {Boolean} Change occurred
     */
    setBackgroundColor(color, blockRefreshAll = false) {
        if (this._backgroundColor === color) {
            return false;
        }

        const lastColor = this._backgroundColor;

        this.setupBackgroundColor(color);

        if (this._backgroundColor === lastColor) {
            return false;
        }

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the handler of draw of the graphic
     * Returns true if the change occurred
     *
     * @param {Function} [handler] - Handler of draw of the graphic
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.ProgressBar.prototype.setupDrawGraphicHandler
     * @see DKTools.Sprite.ProgressBar.prototype.refreshAll
     *
     * @returns {Boolean} Change occurred
     */
    setDrawGraphicHandler(handler, blockRefreshAll = false) {
        if (this._drawGraphicHandler === handler) {
            return false;
        }

        this.setupDrawGraphicHandler(handler);

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the handler of draw of the text
     * Returns true if the change occurred
     *
     * @param {Function} [handler] - Handler of draw of the text
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.ProgressBar.prototype.setupDrawTextHandler
     * @see DKTools.Sprite.ProgressBar.prototype.refreshAll
     *
     * @returns {Boolean} Change occurred
     */
    setDrawTextHandler(handler, blockRefreshAll = false) {
        if (this._drawTextHandler === handler) {
            return false;
        }

        this.setupDrawTextHandler(handler);

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the maximum value
     * Returns true if the change occurred
     *
     * @param {Number} [max] - Maximum value
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.ProgressBar.prototype.setupMaxValue
     * @see DKTools.Sprite.ProgressBar.prototype.refreshAll
     *
     * @returns {Boolean} Change occurred
     */
    setMaxValue(max, blockRefreshAll = false) {
        if (this._maxValue === max) {
            return false;
        }

        const lastMax = this._maxValue;

        this.setupMaxValue(max);

        if (this._maxValue === lastMax) {
            return false;
        }

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the minimum value
     * Returns true if the change occurred
     *
     * @since 9.0.0
     * @param {Number} [min] - Minimum value
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.ProgressBar.prototype.setupMinValue
     * @see DKTools.Sprite.ProgressBar.prototype.refreshAll
     *
     * @returns {Boolean} Change occurred
     */
    setMinValue(min, blockRefreshAll = false) {
        if (this._minValue === min) {
            return false;
        }

        const lastMin = this._minValue;

        this.setupMinValue(min);

        if (this._minValue === lastMin) {
            return false;
        }

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the progress color
     * Returns true if the change occurred
     *
     * @param {String} [color] - Progress color
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.ProgressBar.prototype.setupProgressColor
     * @see DKTools.Sprite.ProgressBar.prototype.refreshAll
     *
     * @returns {Boolean} Change occurred
     */
    setProgressColor(color, blockRefreshAll = false) {
        if (this._progressColor === color) {
            return false;
        }

        const lastColor = this._progressColor;

        this.setupProgressColor(color);

        if (this._progressColor === lastColor) {
            return false;
        }

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the value
     * Returns true if the change occurred
     *
     * @param {Number} [value] - Value
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.ProgressBar.prototype.setupValue
     * @see DKTools.Sprite.ProgressBar.prototype.refreshAll
     * @see DKTools.Sprite.ProgressBar.prototype.updateValueEvents
     *
     * @returns {Boolean} Change occurred
     */
    setValue(value, blockRefreshAll = false) {
        if (this._value === value) {
            return false;
        }

        const lastValue = this._value;

        this.setupValue(value);

        if (this._value === lastValue) {
            return false;
        }

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        this.updateValueEvents();

        return true;
    }

    /**
     * Changes the value step
     * Returns true if the change occurred
     *
     * @param {Number} [step] - Шаг значения
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.ProgressBar.prototype.setupValueStep
     * @see DKTools.Sprite.ProgressBar.prototype.refreshAll
     *
     * @returns {Boolean} Change occurred
     */
    setValueStep(step, blockRefreshAll = false) {
        if (this._valueStep === step) {
            return false;
        }

        const lastStep = this._valueStep;

        this.setupValueStep(step);

        if (this._valueStep === lastStep) {
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
     * @version 9.0.0
     * @override
     *
     * @param {Object} [object={}] - Parameters
     *
     * @param {Number} [object.valueStep] - Value step
     * @param {Number} [object.maxValue] - Maximum value
     * @param {Number} [object.minValue] - Minimum value
     * @param {Number} [object.value] - Value
     * @param {String} [object.backgroundColor] - Background color
     * @param {String} [object.progressColor] - Progress color
     * @param {Function} [object.drawGraphicHandler] - Handler of draw of the graphic
     * @param {Function} [object.drawTextHandler] - Handler of draw of the text
     *
     * @see DKTools.Sprite.prototype.setupAll
     * @see DKTools.Sprite.ProgressBar.setupValueStep
     * @see DKTools.Sprite.ProgressBar.setupMaxValue
     * @see DKTools.Sprite.ProgressBar.setupMinValue
     * @see DKTools.Sprite.ProgressBar.setupValue
     * @see DKTools.Sprite.ProgressBar.setupBackgroundColor
     * @see DKTools.Sprite.ProgressBar.setupProgressColor
     * @see DKTools.Sprite.ProgressBar.setupDrawGraphicHandler
     * @see DKTools.Sprite.ProgressBar.setupDrawTextHandler
     */
    setupAll(object = {}) {
        object = object || {};

        DKTools.Sprite.prototype.setupAll.call(this, object);

        this.setupValueStep(object.valueStep);
        this.setupMaxValue(object.maxValue);
        this.setupMinValue(object.minValue);
        this.setupValue(object.value);
        this.setupBackgroundColor(object.progressColor);
        this.setupProgressColor(object.progressColor);
        this.setupDrawGraphicHandler(object.drawGraphicHandler);
        this.setupDrawTextHandler(object.drawTextHandler);
    }

    /**
     * Sets the background color
     *
     * @param {String} [color=this.standardBackgroundColor()] - Background color
     *
     * @see DKTools.Sprite.ProgressBar.prototype.setupBackgroundColor
     */
    setupBackgroundColor(color) {
        /**
         * @private
         * @readonly
         * @type {String}
         */
        this._backgroundColor = color || this.standardBackgroundColor();
    }

    /**
     * Sets the handler of draw of the graphic
     *
     * @param {Function} [handler=this.standardDrawGraphicHandler()] - Handler of draw of the graphic
     *
     * @see DKTools.Sprite.ProgressBar.prototype.standardDrawGraphicHandler
     */
    setupDrawGraphicHandler(handler) {
        /**
         * @private
         * @readonly
         * @type {Function}
         */
        this._drawGraphicHandler = handler || this.standardDrawGraphicHandler();
    }

    /**
     * Sets the handler of draw of the text
     *
     * @param {Function} [handler=this.standardDrawTextHandler()] - Handler of draw of the text
     *
     * @see DKTools.Sprite.ProgressBar.prototype.standardDrawTextHandler
     */
    setupDrawTextHandler(handler) {
        /**
         * @private
         * @readonly
         * @type {Function}
         */
        this._drawTextHandler = handler || this.standardDrawTextHandler();
    }

    /**
     * Sets the maximum value
     *
     * @param {Number} [max=this.standardMaxValue()] - Maximum value
     *
     * @see DKTools.Sprite.ProgressBar.prototype.standardMaxValue
     */
    setupMaxValue(max) {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._maxValue = _.defaultTo(max, this.standardMaxValue());
    }

    /**
     * Sets the minimum value
     *
     * @since 9.0.0
     * @param {Number} [min=this.standardMinValue()] - Minimum value
     *
     * @see DKTools.Sprite.ProgressBar.prototype.standardMinValue
     */
    setupMinValue(min) {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._minValue = _.defaultTo(min, this.standardMinValue());
    }

    /**
     * Sets the progress color
     *
     * @param {String} [color=this.standardProgressColor()] - Progress color
     *
     * @see DKTools.Sprite.ProgressBar.prototype.standardProgressColor
     */
    setupProgressColor(color) {
        /**
         * @private
         * @readonly
         * @type {String}
         */
        this._progressColor = color || this.standardProgressColor();
    }

    /**
     * Sets the value
     *
     * @version 9.0.0
     * @param {Number} [value=this.standardValue()] - Value
     *
     * @see DKTools.Sprite.ProgressBar.prototype.standardValue
     */
    setupValue(value) {
        const min = this._minValue;
        const max = this._maxValue;
        const newValue = DKTools.Utils.Number.clamp(value, min, max);

        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._value = _.defaultTo(newValue, this.standardValue());
    }

    /**
     * Sets the value step
     *
     * @param {Number} [step=this.standardValueStep()] - Value step
     *
     * @see DKTools.Sprite.ProgressBar.prototype.standardValueStep
     */
    setupValueStep(step) {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._valueStep = step || this.standardValueStep();
    }

    /**
     * Returns the standard activity of the progress bar
     *
     * @override
     * @returns {Boolean} Standard activity of the progress bar
     */
    standardActive() {
        return false;
    }

    /**
     * Returns the standard background color
     *
     * @returns {String} Standard background color
     */
    standardBackgroundColor() {
        return 'grey';
    }

    /**
     * Returns the standard handler of draw of the graphic
     *
     * @returns {null} Standard handler of draw of the graphic
     */
    standardDrawGraphicHandler() {
        return null;
    }

    /**
     * Returns the standard handler of draw of the text
     *
     * @returns {null} Standard handler of draw of the text
     */
    standardDrawTextHandler() {
        return null;
    }

    /**
     * Returns the standard maximum value
     *
     * @returns {Number} Standard maximum value
     */
    standardMaxValue() {
        return 100;
    }

    /**
     * Returns the standard minimum value
     *
     * @since 9.0.0
     * @returns {Number} Standard minimum value
     */
    standardMinValue() {
        return 0;
    }

    /**
     * Returns the standard progress color
     *
     * @returns {String} Standard progress color
     */
    standardProgressColor() {
        return '#33ccff';
    }

    /**
     * Returns the standard value
     *
     * @returns {Number} Standard value
     */
    standardValue() {
        return 0;
    }

    /**
     * Returns the standard value step
     *
     * @returns {Number} Standard value step
     */
    standardValueStep() {
        return 1;
    }

    /**
     * Subtracts the value
     *
     * @param {Number} value - Value
     *
     * @see DKTools.Sprite.ProgressBar.prototype.addValue
     */
    subValue(value) {
        this.addValue(-value);
    }

    // U methods

    /**
     * Handler of update of animate the value
     *
     * @private
     *
     * @param {Number} value - Value
     * @param {DKTools.Event} event - Event
     *
     * @see DKTools.Sprite.ProgressBar.prototype.setValue
     */
    _updateAnimateValue(value, event) {
        const remainingTime = event.remainingTime;
        const newValue = (this._value * (remainingTime - 1) + value) / remainingTime;

        this.setValue(newValue);
    }

    /**
     * Updates the events with type: empty
     *
     * @see DKTools.Sprite.ProgressBar.prototype.isEmpty
     * @see DKTools.Sprite.ProgressBar.prototype.updateEventsContainer
     */
    updateEmptyEvents() {
        if (this.isEmpty()) {
            this.updateEventsContainer('empty');
        }
    }

    /**
     * Updates the events
     *
     * @override
     *
     * @see DKTools.Sprite.prototype.updateEvents
     * @see DKTools.Sprite.ProgressBar.prototype.updateEmptyEvents
     * @see DKTools.Sprite.ProgressBar.prototype.updateFullEvents
     */
    updateEvents() {
        DKTools.Sprite.prototype.updateEvents.call(this);
        this.updateEmptyEvents();
        this.updateFullEvents();
    }

    /**
     * Updates the events with type: full
     *
     * @see DKTools.Sprite.ProgressBar.prototype.isFull
     * @see DKTools.Sprite.ProgressBar.prototype.updateEventsContainer
     */
    updateFullEvents() {
        if (this.isFull()) {
            this.updateEventsContainer('full');
        }
    }

    /**
     * Updates the events with type: value
     *
     * @see DKTools.Sprite.ProgressBar.prototype.updateEventsContainer
     */
    updateValueEvents() {
        this.updateEventsContainer('value');
    }

};

// properties

Object.defineProperties(DKTools.Sprite.ProgressBar.prototype, {

    /**
     * Value step
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.ProgressBar.prototype
     */
    valueStep: {
        get: function() {
            return this._valueStep;
        },
        configurable: true
    },

    /**
     * Maximum value
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.ProgressBar.prototype
     */
    maxValue: {
        get: function() {
            return this._maxValue;
        },
        configurable: true
    },

    /**
     * Minimum value
     *
     * @since 9.0.0
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.ProgressBar.prototype
     */
    minValue: {
        get: function() {
            return this._minValue;
        },
        configurable: true
    },

    /**
     * Value
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.ProgressBar.prototype
     */
    value: {
        get: function() {
            return this._value;
        },
        configurable: true
    },

    /**
     * Background color
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.Sprite.ProgressBar.prototype
     */
    backgroundColor: {
        get: function() {
            return this._backgroundColor;
        },
        configurable: true
    },

    /**
     * Progress color
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.Sprite.ProgressBar.prototype
     */
    progressColor: {
        get: function() {
            return this._progressColor;
        },
        configurable: true
    },

    /**
     * Handler of draw of the graphic
     *
     * @readonly
     * @type {Function}
     * @memberof DKTools.Sprite.ProgressBar.prototype
     */
    drawGraphicHandler: {
        get: function() {
            return this._drawGraphicHandler;
        },
        configurable: true
    },

    /**
     * Handler of draw of the text
     *
     * @readonly
     * @type {Function}
     * @memberof DKTools.Sprite.ProgressBar.prototype
     */
    drawTextHandler: {
        get: function() {
            return this._drawTextHandler;
        },
        configurable: true
    }

});




