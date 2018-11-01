//===========================================================================
// DKTools.Sprite.ProgressBar
//===========================================================================

DKTools.Sprite.ProgressBar.prototype = Object.create(DKTools.Sprite.prototype);
DKTools.Sprite.ProgressBar.prototype.constructor = DKTools.Sprite.ProgressBar;

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

// standard methods

/**
 * Returns the standard activity of the progress bar
 *
 * @override
 * @returns {Boolean} Standard activity of the progress bar
 */
DKTools.Sprite.ProgressBar.prototype.standardActive = function() {
    return false;
};

/**
 * Returns the standard value step
 *
 * @returns {Number} Standard value step
 */
DKTools.Sprite.ProgressBar.prototype.standardValueStep = function() {
    return 1;
};

/**
 * Returns the standard maximum value
 *
 * @returns {Number} Standard maximum value
 */
DKTools.Sprite.ProgressBar.prototype.standardMaxValue = function() {
    return 100;
};

/**
 * Returns the standard value
 *
 * @returns {Number} Standard value
 */
DKTools.Sprite.ProgressBar.prototype.standardValue = function() {
    return 0;
};

/**
 * Returns the standard background color
 *
 * @returns {String} Standard background color
 */
DKTools.Sprite.ProgressBar.prototype.standardBackgroundColor = function() {
    return 'grey';
};

/**
 * Returns the standard progress color
 *
 * @returns {String} Standard progress color
 */
DKTools.Sprite.ProgressBar.prototype.standardProgressColor = function() {
    return '#33ccff';
};

/**
 * Returns the standard handler of draw of the graphic
 *
 * @returns {null} Standard handler of draw of the graphic
 */
DKTools.Sprite.ProgressBar.prototype.standardDrawGraphicHandler = function() {
    return null;
};

/**
 * Returns the standard handler of draw of the text
 *
 * @returns {null} Standard handler of draw of the text
 */
DKTools.Sprite.ProgressBar.prototype.standardDrawTextHandler = function() {
    return null;
};

// setup methods

/**
 * Sets all parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 *
 * @param {Number} [object.valueStep] - Value step
 * @param {Number} [object.maxValue] - Maximum value
 * @param {Number} [object.value] - Value
 * @param {String} [object.backgroundColor] - Background color
 * @param {String} [object.progressColor] - Progress color
 * @param {Function} [object.drawGraphicHandler] - Handler of draw of the graphic
 * @param {Function} [object.drawTextHandler] - Handler of draw of the text
 *
 * @see DKTools.Sprite.prototype.setupAll
 * @see DKTools.Sprite.ProgressBar.setupValueStep
 * @see DKTools.Sprite.ProgressBar.setupMaxValue
 * @see DKTools.Sprite.ProgressBar.setupValue
 * @see DKTools.Sprite.ProgressBar.setupBackgroundColor
 * @see DKTools.Sprite.ProgressBar.setupProgressColor
 * @see DKTools.Sprite.ProgressBar.setupDrawGraphicHandler
 * @see DKTools.Sprite.ProgressBar.setupDrawTextHandler
 */
DKTools.Sprite.ProgressBar.prototype.setupAll = function(object = {}) {
    object = object || {};

    DKTools.Sprite.prototype.setupAll.call(this, object);

    this.setupValueStep(object.valueStep);
    this.setupMaxValue(object.maxValue);
    this.setupValue(object.value);
    this.setupBackgroundColor(object.progressColor);
    this.setupProgressColor(object.progressColor);
    this.setupDrawGraphicHandler(object.drawGraphicHandler);
    this.setupDrawTextHandler(object.drawTextHandler);
};

/**
 * Sets the value step
 *
 * @param {Number} [step=this.standardValueStep()] - Value step
 *
 * @see DKTools.Sprite.ProgressBar.prototype.standardValueStep
 */
DKTools.Sprite.ProgressBar.prototype.setupValueStep = function(step) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._valueStep = step || this.standardValueStep();
};

/**
 * Sets the maximum value
 *
 * @param {Number} [max=this.standardMaxValue()] - Maximum value
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setupMaxValue
 */
DKTools.Sprite.ProgressBar.prototype.setupMaxValue = function(max) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._maxValue = max || this.standardMaxValue();
};

/**
 * Sets the value
 *
 * @param {Number} [value=this.standardValue()] - Value
 *
 * @see DKTools.Sprite.ProgressBar.prototype.standardValue
 */
DKTools.Sprite.ProgressBar.prototype.setupValue = function(value) {
    const max = this._maxValue;
    const newValue = Math.max(0, Math.min(value, max));

    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._value = _.defaultTo(newValue, this.standardValue());
};

/**
 * Sets the background color
 *
 * @param {String} [color=this.standardBackgroundColor()] - Background color
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setupBackgroundColor
 */
DKTools.Sprite.ProgressBar.prototype.setupBackgroundColor = function(color) {
    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._backgroundColor = color || this.standardBackgroundColor();
};

/**
 * Sets the progress color
 *
 * @param {String} [color=this.standardProgressColor()] - Progress color
 *
 * @see DKTools.Sprite.ProgressBar.prototype.standardProgressColor
 */
DKTools.Sprite.ProgressBar.prototype.setupProgressColor = function(color) {
    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._progressColor = color || this.standardProgressColor();
};

/**
 * Sets the handler of draw of the graphic
 *
 * @param {Function} [handler=this.standardDrawGraphicHandler()] - Handler of draw of the graphic
 *
 * @see DKTools.Sprite.ProgressBar.prototype.standardDrawGraphicHandler
 */
DKTools.Sprite.ProgressBar.prototype.setupDrawGraphicHandler = function(handler) {
    /**
     * @private
     * @readonly
     * @type {Function}
     */
    this._drawGraphicHandler = handler || this.standardDrawGraphicHandler();
};

/**
 * Sets the handler of draw of the text
 *
 * @param {Function} [handler=this.standardDrawTextHandler()] - Handler of draw of the text
 *
 * @see DKTools.Sprite.ProgressBar.prototype.standardDrawTextHandler
 */
DKTools.Sprite.ProgressBar.prototype.setupDrawTextHandler = function(handler) {
    /**
     * @private
     * @readonly
     * @type {Function}
     */
    this._drawTextHandler = handler || this.standardDrawTextHandler();
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
 * @param {Number} [object.valueStep] - Value step
 * @param {Number} [object.maxValue] - Maximum value
 * @param {Number} [object.value] - Value
 * @param {String} [object.backgroundColor] - Background color
 * @param {String} [object.progressColor] - Progress color
 * @param {Function} [object.drawGraphicHandler] - Handler of draw of the graphic
 * @param {Function} [object.drawTextHandler] - Handler of draw of the text
 *
 * @see DKTools.Sprite.prototype.setAll
 * @see DKTools.Sprite.ProgressBar.prototype.setValueStep
 * @see DKTools.Sprite.ProgressBar.prototype.setMaxValue
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
DKTools.Sprite.ProgressBar.prototype.setAll = function(object = {}, blockStart = false, activate = false) {
    object = object || {};
    const block = true;

    let changed = DKTools.Sprite.prototype.setAll.call(this, object, block);

    if (this.setValueStep(object.valueStep, block)) {
        changed++;
    }

    if (this.setMaxValue(object.maxValue, block)) {
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
};

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
DKTools.Sprite.ProgressBar.prototype.setValueStep = function(step, blockRefreshAll = false) {
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
};

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
DKTools.Sprite.ProgressBar.prototype.setMaxValue = function(max, blockRefreshAll = false) {
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
};

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
DKTools.Sprite.ProgressBar.prototype.setValue = function(value, blockRefreshAll = false) {
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
};

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
DKTools.Sprite.ProgressBar.prototype.setBackgroundColor = function(color, blockRefreshAll = false) {
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
};

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
DKTools.Sprite.ProgressBar.prototype.setProgressColor = function(color, blockRefreshAll = false) {
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
};

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
DKTools.Sprite.ProgressBar.prototype.setDrawGraphicHandler = function(handler, blockRefreshAll = false) {
    if (this._drawGraphicHandler === handler) {
        return false;
    }

    this.setupDrawGraphicHandler(handler);

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

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
DKTools.Sprite.ProgressBar.prototype.setDrawTextHandler = function(handler, blockRefreshAll = false) {
    if (this._drawTextHandler === handler) {
        return false;
    }

    this.setupDrawTextHandler(handler);

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

// can methods

/**
 * Returns true if the progress bar can clone the fixed bitmap
 *
 * @override
 * @returns {Boolean} Progress bar can clone the fixed bitmap
 */
DKTools.Sprite.ProgressBar.prototype.canCloneFixedBitmap = function() {
    return false;
};

// is methods

/**
 * Returns true if the progress bar is horizontal
 *
 * @returns {Boolean} Progress bar is horizontal
 */
DKTools.Sprite.ProgressBar.prototype.isHorizontal = function() {
    return this.width > this.height;
};

/**
 * Returns true if the progress bar is vertical
 *
 * @see DKTools.Sprite.ProgressBar.prototype.isHorizontal
 *
 * @returns {Boolean} Progress bar is vertical
 */
DKTools.Sprite.ProgressBar.prototype.isVertical = function() {
    return !this.isHorizontal();
};

/**
 * Returns true if the progress bar is empty
 *
 * @returns {Boolean} Progress bar is empty
 */
DKTools.Sprite.ProgressBar.prototype.isEmpty = function() {
    return this._value === 0;
};

/**
 * Returns true if the progress bar is full
 *
 * @returns {Boolean} Progress bar is full
 */
DKTools.Sprite.ProgressBar.prototype.isFull = function() {
    return this._value === this._maxValue;
};

// events methods

/**
 * Updates the events
 *
 * @override
 *
 * @see DKTools.Sprite.prototype.updateEvents
 * @see DKTools.Sprite.ProgressBar.prototype.updateEmptyEvents
 * @see DKTools.Sprite.ProgressBar.prototype.updateFullEvents
 */
DKTools.Sprite.ProgressBar.prototype.updateEvents = function() {
    DKTools.Sprite.prototype.updateEvents.call(this);
    this.updateEmptyEvents();
    this.updateFullEvents();
};

/**
 * Updates the events with type: value
 *
 * @see DKTools.Sprite.ProgressBar.prototype.updateEventsContainer
 */
DKTools.Sprite.ProgressBar.prototype.updateValueEvents = function() {
    this.updateEventsContainer('value');
};

/**
 * Updates the events with type: empty
 *
 * @see DKTools.Sprite.ProgressBar.prototype.isEmpty
 * @see DKTools.Sprite.ProgressBar.prototype.updateEventsContainer
 */
DKTools.Sprite.ProgressBar.prototype.updateEmptyEvents = function() {
    if (this.isEmpty()) {
        this.updateEventsContainer('empty');
    }
};

/**
 * Updates the events with type: full
 *
 * @see DKTools.Sprite.ProgressBar.prototype.isFull
 * @see DKTools.Sprite.ProgressBar.prototype.updateEventsContainer
 */
DKTools.Sprite.ProgressBar.prototype.updateFullEvents = function() {
    if (this.isFull()) {
        this.updateEventsContainer('full');
    }
};

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
DKTools.Sprite.ProgressBar.prototype._updateAnimateValue = function(value, event) {
    const remainingTime = event.remainingTime;
    const newValue = (this._value * (remainingTime - 1) + value) / remainingTime;

    this.setValue(newValue);
};

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
DKTools.Sprite.ProgressBar.prototype.animateValue = function(value, duration) {
    return this.addEvent({
        type: 'update',
        repeatTime: duration,
        repeats: 0,
        onUpdate: this._updateAnimateValue.bind(this, value)
    });
};

/**
 * Animates the empty value
 * Returns the update event
 *
 * @param {Number} duration - Duration of animation
 *
 * @see DKTools.Sprite.ProgressBar.prototype.animateValue
 *
 * @returns {DKTools.Event} Update event
 */
DKTools.Sprite.ProgressBar.prototype.animateEmpty = function(duration) {
    return this.animateValue(0, duration);
};

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
DKTools.Sprite.ProgressBar.prototype.aimateFull = function(duration) {
    return this.animateValue(this._maxValue, duration);
};

// _draw methods

/**
 * Draws the graphic of progress
 *
 * @private
 *
 * @see DKTools.Sprite.ProgressBar.prototype.hasDrawGraphicHandler
 */
DKTools.Sprite.ProgressBar.prototype._drawProgressGraphic = function() {
    if (this.hasDrawGraphicHandler()) {
        this._drawGraphicHandler(this);
    }
};

/**
 * Draws the text of progress
 *
 * @private
 *
 * @see DKTools.Sprite.ProgressBar.prototype.hasDrawTextHandler
 */
DKTools.Sprite.ProgressBar.prototype._drawProgressText = function() {
    if (this.hasDrawTextHandler()) {
        this._drawTextHandler(this);
    }
};

// draw methods

/**
 * Draws all
 *
 * @override
 */
DKTools.Sprite.ProgressBar.prototype.drawAll = function() {
    DKTools.Sprite.prototype.drawAll.call(this);
    this.drawProgress();
};

/**
 * Draws the progress
 *
 * @see DKTools.Sprite.ProgressBar.prototype._drawProgressGraphic
 * @see DKTools.Sprite.ProgressBar.prototype._drawProgressText
 */
DKTools.Sprite.ProgressBar.prototype.drawProgress = function() {
    this._drawProgressGraphic();
    this._drawProgressText();
};

// has methods

/**
 * Returns true if the progress bar has the handler of draw of the graphic
 *
 * @returns {Boolean} Progress bar has the handler of draw of the graphic
 */
DKTools.Sprite.ProgressBar.prototype.hasDrawGraphicHandler = function() {
    return !!this._drawGraphicHandler;
};

/**
 * Returns true if the progress bar has the handler of draw of the text
 *
 * @returns {Boolean} Progress bar has the handler of draw of the text
 */
DKTools.Sprite.ProgressBar.prototype.hasDrawTextHandler = function() {
    return !!this._drawTextHandler;
};

// get methods

/**
 * Returns the current value in percent
 *
 * @returns {Number} Current value in percent
 */
DKTools.Sprite.ProgressBar.prototype.getPercents = function() {
    return Math.ceil(this._value / this._maxValue * 100);
};

/**
 * Returns the previous value
 *
 * @returns {Number} Previous value
 */
DKTools.Sprite.ProgressBar.prototype.getPrevValue = function() {
    return Math.max(0, this._value - this._valueStep);
};

/**
 * Returns the next value
 *
 * @returns {Number} Next value
 */
DKTools.Sprite.ProgressBar.prototype.getNextValue = function() {
    return Math.min(this._value + this._valueStep, this._maxValue);
};

// value methods

/**
 * Adds the value
 *
 * @param {Number} value - Value
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setValue
 */
DKTools.Sprite.ProgressBar.prototype.addValue = function(value) {
    if (value) {
        this.setValue(this._value + value);
    }
};

/**
 * Subtracts the value
 *
 * @param {Number} value - Value
 *
 * @see DKTools.Sprite.ProgressBar.prototype.addValue
 */
DKTools.Sprite.ProgressBar.prototype.subValue = function(value) {
    this.addValue(-value);
};

/**
 * Sets the previous value
 * Returns true if the change occurred
 *
 * @see DKTools.Sprite.ProgressBar.prototype.getPrevValue
 * @see DKTools.Sprite.ProgressBar.prototype.setValue
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.ProgressBar.prototype.prevValue = function() {
    return this.setValue(this.getPrevValue());
};

/**
 * Sets the next value
 * Returns true if the change occurred
 *
 * @see DKTools.Sprite.ProgressBar.prototype.getNextValue
 * @see DKTools.Sprite.ProgressBar.prototype.setValue
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.ProgressBar.prototype.nextValue = function() {
    return this.setValue(this.getNextValue());
};

/**
 * Makes the progress bar empty
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setValue
 */
DKTools.Sprite.ProgressBar.prototype.makeEmpty = function() {
    this.setValue(0);
};

/**
 * Makes the progress bar full
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setValue
 */
DKTools.Sprite.ProgressBar.prototype.makeFull = function() {
    this.setValue(this._maxValue);
};





