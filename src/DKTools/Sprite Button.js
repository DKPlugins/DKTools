//===========================================================================
// DKTools.Sprite.Button
//===========================================================================

/**
 * Button class
 *
 * @class DKTools.Sprite.Button
 * @extends DKTools.Sprite
 *
 * @memberof DKTools.Sprite
 *
 * @see DKTools.Sprite.Button.prototype.initialize
 */
DKTools.Sprite.Button = class extends DKTools.Sprite {

    // C methods

    /**
     * Clears all data
     *
     * @version 2.0.0
     * @private
     * @override
     *
     * @see DKTools.Sprite.prototype._clearAll
     * @see DKTools.Sprite.Button.prototype._clearMousePressTime
     */
    _clearAll() {
        DKTools.Sprite.prototype._clearAll.call(this);
        this._clearMousePressTime();
    }

    /**
     * Clears pressed time
     *
     * @since 2.0.0
     * @private
     */
    _clearMousePressTime() {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._mousePressTime = 0;
    }

    // I methods

    /**
     * Returns true if the button is pressed
     *
     * @see DKTools.Sprite.Button.prototype.isLongPressed
     *
     * @returns {Boolean} Button is pressed
     */
    isPressed() {
        return this._mousePressTime > 0 && !this.isLongPressed();
    }

    /**
     * Returns true if the button is pressed longer than the long press interval
     *
     * @returns {Boolean} Button is pressed longer than the long press interval
     */
    isLongPressed() {
        return this._mousePressTime >= this._longPressInterval;
    }

    // S methods

    /**
     * Sets the events
     *
     * @version 2.0.0
     * @private
     * @override
     *
     * @see DKTools.Sprite.prototype._setupEvents
     * @see DKTools.Sprite.Button.prototype._setupUpdateButtonStateEvent
     */
    _setupEvents() {
        DKTools.Sprite.prototype._setupEvents.call(this);
        this._setupUpdateButtonStateEvent();
    }

    /**
     * Sets the options
     *
     * @version 2.0.0
     * @private
     * @override
     *
     * @see DKTools.Sprite.prototype._setupOptions
     * @see DKTools.Sprite.Button.prototype._setupProcessMouseOption
     */
    _setupOptions() {
        DKTools.Sprite.prototype._setupOptions.call(this);
        this._setupProcessMouseOption();
    }

    /**
     * Sets the update event
     *
     * @since 2.0.0
     * @private
     *
     * @see DKTools.Sprite.Button.prototype.addEvent
     * @see DKTools.Sprite.Button.prototype.updateButtonState
     */
    _setupUpdateButtonStateEvent() {
        this.addEvent({
            type: 'update',
            onUpdate: this.updateButtonState.bind(this)
        });
    }

    /**
     * Sets the option process-mouse
     *
     * @since 2.0.0
     * @private
     *
     * @see DKTools.Sprite.Button.prototype.enableOption
     */
    _setupProcessMouseOption() {
        this.enableOption('process-mouse');
    }

    /**
     * Returns the standard activity of the button
     *
     * @override
     * @returns {Boolean} Standard activity of the button
     */
    standardActive() {
        return false;
    }

    /**
     * Returns the standard interval of long pressing
     *
     * @returns {Number} Standard interval of long pressing
     */
    standardLongPressInterval() {
        return 18;
    }

    /**
     * Sets all parameters
     *
     * @override
     *
     * @param {Object} [object={}] - Parameters
     *
     * @param {Number} [object.longPressInterval] - Interval of long pressing
     *
     * @see DKTools.Sprite.prototype.setupAll
     * @see DKTools.Sprite.Button.prototype.setupLongPressInterval
     */
    setupAll(object = {}) {
        object = object || {};

        DKTools.Sprite.prototype.setupAll.call(this, object);

        this.setupLongPressInterval(object.longPressInterval);
    }

    /**
     * Sets the interval of long pressing
     *
     * @param {Number} [interval=this.standardLongPressInterval()] - Interval of long pressing
     *
     * @see DKTools.Sprite.Button.prototype.standardLongPressInterval
     */
    setupLongPressInterval(interval) {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._longPressInterval = interval || this.standardLongPressInterval();
    }

    /**
     * Changes all parameters
     * Returns the number of changed parameters
     *
     * @version 2.0.0
     * @override
     *
     * @param {Object} [object={}] - Parameters
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     * @param {Boolean} [activate=false] - Activates the button
     *
     * @param {Number} [object.longPressInterval] - Interval of long pressing
     *
     * @see DKTools.Sprite.prototype.setAll
     * @see DKTools.Sprite.Button.prototype.setLongPressInterval
     *
     * @returns {Number} Number of changed parameters
     */
    setAll(object = {}, blockStart = false, activate = false) {
        object = object || {};

        const block = true;
        let changed = DKTools.Sprite.prototype.setAll.call(this, object, block);

        if (this.setLongPressInterval(object.longPressInterval)) {
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
     * Changes the interval of long pressing
     * Returns true if the change occurred
     *
     * @param {Number} [interval] - Interval of long pressing
     *
     * @see DKTools.Sprite.Button.prototype.setupLongPressInterval
     *
     * @returns {Boolean} Change occurred
     */
    setLongPressInterval(interval) {
        if (this._longPressInterval === interval) {
            return false;
        }

        const lastInterval = this._longPressInterval;

        this.setupLongPressInterval(interval);

        return this._longPressInterval !== lastInterval;
    }

    // P methods

    /**
     * Processes all
     *
     * @override
     *
     * @see DKTools.Sprite.prototype.processAll
     * @see DKTools.Sprite.Button.prototype.isOptionDisabled
     * @see DKTools.Sprite.Button.prototype.processMousePress
     */
    processAll() {
        DKTools.Sprite.prototype.processAll.call(this);
        this.processMousePress();
    }

    /**
     * Processes a mouse press
     *
     * @version 2.0.0
     *
     * @see DKTools.Sprite.Button.prototype.isVisibleAndActive
     * @see TouchInput.isMousePressed
     * @see DKTools.Sprite.Button.prototype.isMouseInside
     * @see DKTools.Sprite.Button.prototype.isLongPressed
     * @see TouchInput.isLeftButtonPressed
     * @see TouchInput.isMiddleButtonPressed
     * @see TouchInput.isRightButtonPressed
     * @see DKTools.Sprite.Button.prototype.updateMouseLongPressEvents
     * @see DKTools.Sprite.Button.prototype.isPressed
     * @see DKTools.Sprite.Button.prototype.updateMouseClickEvents
     * @see DKTools.Sprite.Button.prototype._clearMousePressTime
     */
    processMousePress() {
        if (this.isVisible() && this.isMouseInside() &&
            (this.isActive() || this.isOptionEnabled('process-mouse-press-ignore-active'))) {
            if (TouchInput.isMousePressed()) {
                this._mousePressTime++;

                let button;

                if (TouchInput.isLeftButtonPressed()) {
                    button = 'left';
                } else if (TouchInput.isMiddleButtonPressed()) {
                    button = 'middle';
                } else if (TouchInput.isRightButtonPressed()) {
                    button = 'right';
                }

                if (button) {
                    this.updateMouseDownEvents(button);

                    if (this.isLongPressed()) {
                        if (this._mousePressTime === this._longPressInterval) {
                            this.updateMouseLongPressStartedEvents(button);
                        }

                        this.updateMouseLongPressEvents(button);
                    }
                }
            } else {
                let button;

                if (TouchInput.isLeftButtonReleased()) {
                    button = 'left';
                } else if (TouchInput.isMiddleButtonReleased()) {
                    button = 'middle';
                } else if (TouchInput.isRightButtonReleased()) {
                    button = 'right';
                }

                if (button) {
                    if (this.isLongPressed()) {
                        this.updateMouseLongPressFinishedEvents(button);
                    } else if (this.isPressed()) {
                        this.updateMouseClickEvents(button);
                    }

                    if (this._mousePressTime > 0) {
                        this.updateMouseUpEvents(button);
                    }
                }

                this._clearMousePressTime();
            }
        } else {
            this._clearMousePressTime();
        }
    }

    // U methods

    /**
     * Updates the events with type: mouse-down-button
     *
     * @since 2.0.0
     *
     * @param {String} button - Mouse button (left, middle or right)
     *
     * @see DKTools.Sprite.Button.prototype.updateEventsContainer
     */
    updateMouseDownEvents(button) {
        this.updateEventsContainer('mouse-down-' + button);
    }

    /**
     * Updates the events with type: mouse-up-button
     *
     * @since 2.0.0
     *
     * @param {String} button - Mouse button (left, middle or right)
     *
     * @see DKTools.Sprite.Button.prototype.updateEventsContainer
     */
    updateMouseUpEvents(button) {
        this.updateEventsContainer('mouse-up-' + button);
    }

    /**
     * Updates the events with type: mouse-click-button
     *
     * @since 2.0.0
     *
     * @param {String} button - Mouse button (left, middle or right)
     *
     * @see DKTools.Sprite.Button.prototype.updateEventsContainer
     */
    updateMouseClickEvents(button) {
        this.updateEventsContainer('mouse-click-' + button);
    }

    /**
     * Updates the events with type: mouse-long-press-button
     *
     * @since 2.0.0
     *
     * @param {String} button - Mouse button (left, middle or right)
     *
     * @see DKTools.Sprite.Button.prototype.updateEventsContainer
     */
    updateMouseLongPressEvents(button) {
        this.updateEventsContainer('mouse-long-press-' + button);
    }

    /**
     * Updates the events with type: mouse-long-press-button-started
     *
     * @since 2.0.0
     *
     * @param {String} button - Mouse button (left, middle or right)
     *
     * @see DKTools.Sprite.Button.prototype.updateEventsContainer
     */
    updateMouseLongPressStartedEvents(button) {
        this.updateEventsContainer(`mouse-long-press-${button}-started`);
    }

    /**
     * Updates the events with type: mouse-long-press-button-finished
     *
     * @since 2.0.0
     *
     * @param {String} button - Mouse button (left, middle or right)
     *
     * @see DKTools.Sprite.Button.prototype.updateEventsContainer
     */
    updateMouseLongPressFinishedEvents(button) {
        this.updateEventsContainer(`mouse-long-press-${button}-finished`);
    }

    /**
     * Updates the events with type: state-normal
     *
     * @since 2.0.0
     *
     * @see DKTools.Sprite.Button.prototype.updateEventsContainer
     */
    updateStateNormalEvents() {
        this.updateEventsContainer('state-normal');
    }

    /**
     * Updates the events with type: state-pressed
     *
     * @since 2.0.0
     *
     * @see DKTools.Sprite.Button.prototype.updateEventsContainer
     */
    updateStatePressedEvents() {
        this.updateEventsContainer('state-pressed');
    }

    /**
     * Updates the button state
     *
     * @see DKTools.Sprite.Button.prototype.isPressed
     * @see DKTools.Sprite.Button.prototype.isLongPressed
     * @see DKTools.Sprite.Button.prototype.updateStatePressedEvents
     * @see DKTools.Sprite.Button.prototype.updateStateNormalEvents
     */
    updateButtonState() {
        if (this._mousePressTime > 0) {
            this.updateStatePressedEvents();
        } else {
            this.updateStateNormalEvents();
        }
    }

};

// properties

Object.defineProperties(DKTools.Sprite.Button.prototype, {

    /**
     * Interval of long pressing
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.Button.prototype
     */
    longPressInterval: {
        get: function() {
            return this._longPressInterval;
        },
        configurable: true
    },

    /**
     * Mouse press time
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.Button.prototype
     */
    mousePressTime: {
        get: function() {
            return this._mousePressTime;
        },
        configurable: true
    }

});




