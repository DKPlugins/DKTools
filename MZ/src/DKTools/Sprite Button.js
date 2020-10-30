//===========================================================================
// DKTools.Sprite.Button
//===========================================================================

/**
 * Button class
 * @class
 * @extends DKTools.Sprite
 * @memberof DKTools.Sprite
 */
DKTools.Sprite.Button = class extends DKTools.Sprite {

    // properties

    /**
     * Gets interval of long pressing
     * @return {Number} Interval of long pressing
     */
    get longPressInterval() {
        return this._longPressInterval;
    }

    /**
     * Gets mouse press time
     * @return {Number} Mouse press time
     */
    get mousePressTime() {
        return this._mousePressTime;
    }

    /**
     * Gets touch press time
     * @return {Number} Touch press time
     */
    get touchPressTime() {
        return this._touchPressTime;
    }

    // I methods

    /**
     * Returns true if the button is pressed longer than the long press interval
     * @return {Boolean} Button is pressed longer than the long press interval
     */
    isLongPressed() {
        return this._mousePressTime >= this._longPressInterval;
    }

    /**
     * Returns true if touched longer than the long press interval
     * @return {Boolean} Touched longer than the long press interval
     */
    isLongTouched() {
        return this._touchPressTime >= this._longPressInterval;
    }

    /**
     * Returns true if the button is pressed
     * @return {Boolean} Button is pressed
     */
    isPressed() {
        return this._mousePressTime > 0 && !this.isLongPressed();
    }

    /**
     * Returns true if touched
     * @return {Boolean} Touched
     */
    isTouched() {
        return this._touchPressTime > 0 && !this.isLongTouched();
    }

    // S methods

    // standard methods

    /**
     * Returns the standard activity of the button
     * @override
     * @return {Boolean} Standard activity of the button
     */
    standardActive() {
        return false;
    }

    /**
     * Returns the standard interval of long pressing
     * @return {Number} Standard interval of long pressing
     */
    standardLongPressInterval() {
        return 18;
    }

    // setup methods

    /**
     * Sets all parameters
     * @override
     * @param {Object} [object={}] - Parameters
     * @param {Number} [object.longPressInterval] - Interval of long pressing
     */
    setupAll(object = {}) {
        object = object || {};

        super.setupAll(object);

        this.setupLongPressInterval(object.longPressInterval);
    }

    /**
     * Sets the interval of long pressing
     * @param {Number} [interval=this.standardLongPressInterval()] - Interval of long pressing
     */
    setupLongPressInterval(interval) {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._longPressInterval = interval || this.standardLongPressInterval();
    }

    // P methods

    /**
     * Processes all
     * @override
     */
    processAll() {
        super.processAll();

        if (Utils.isMobileDevice()) {
            this.processTouch();
        } else {
            this.processMousePress();
        }
    }

    /**
     * Processes a mouse press
     */
    processMousePress() {
        if (this.isVisibleAndActive() && this.isMouseInside()) {
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

                this._mousePressTime = 0;
            }
        } else {
            this._mousePressTime = 0;
        }
    }

    /**
     * Processes a touches
     */
    processTouch() {
        if (this.isVisibleAndActive() && this.isTouchInside()) {
            if (TouchInput.isScreenPressed()) {
                this._touchPressTime++;

                this.updateTouchDownEvents();

                if (this.isLongTouched()) {
                    if (this._touchPressTime === this._longPressInterval) {
                        this.updateLongTouchStartedEvents();
                    }

                    this.updateLongTouchEvents();
                }
            } else {
                if (this.isLongTouched()) {
                    this.updateLongTouchFinishedEvents();
                } else if (this.isTouched()) {
                    this.updateTouchEvents();
                }

                if (this._touchPressTime > 0) {
                    this.updateTouchUpEvents();
                }

                this._touchPressTime = 0;
            }
        } else {
            this._touchPressTime = 0;
        }
    }

    // U methods

    /**
     * Updates the button
     * @version 1.1.0
     * @override
     */
    update() {
        super.update.apply(this, arguments);
        this.updateButtonState();
    }

    /**
     * Updates the button state
     */
    updateButtonState() {
        if (Utils.isMobileDevice()) {
            if (this._touchPressTime > 0) {
                this.updateStatePressedEvents();
            } else {
                this.updateStateNormalEvents();
            }
        } else {
            if (this._mousePressTime > 0) {
                this.updateStatePressedEvents();
            } else {
                this.updateStateNormalEvents();
            }
        }
    }

    // events methods

    /**
     * Updates the events with type: long-touch
     */
    updateLongTouchEvents() {
        this._eventsManager.updateEventsContainer('long-touch');
    }

    /**
     * Updates the events with type: mouse-long-press-finished
     */
    updateLongTouchFinishedEvents() {
        this._eventsManager.updateEventsContainer('long-touch-finished');
    }

    /**
     * Updates the events with type: mouse-long-press-started
     */
    updateLongTouchStartedEvents() {
        this._eventsManager.updateEventsContainer('long-touch-started');
    }

    /**
     * Updates the events with type: mouse-down-button
     * @param {String} button - Mouse button (left, middle or right)
     */
    updateMouseDownEvents(button) {
        this._eventsManager.updateEventsContainer('mouse-down-' + button);
    }

    /**
     * Updates the events with type: mouse-up-button
     * @param {String} button - Mouse button (left, middle or right)
     */
    updateMouseUpEvents(button) {
        this._eventsManager.updateEventsContainer('mouse-up-' + button);
    }

    /**
     * Updates the events with type: mouse-click-button
     * @param {String} button - Mouse button (left, middle or right)
     */
    updateMouseClickEvents(button) {
        this._eventsManager.updateEventsContainer('mouse-click-' + button);
    }

    /**
     * Updates the events with type: mouse-long-press-button
     * @param {String} button - Mouse button (left, middle or right)
     */
    updateMouseLongPressEvents(button) {
        this._eventsManager.updateEventsContainer('mouse-long-press-' + button);
    }

    /**
     * Updates the events with type: mouse-long-press-button-started
     * @param {String} button - Mouse button (left, middle or right)
     */
    updateMouseLongPressStartedEvents(button) {
        this._eventsManager.updateEventsContainer(`mouse-long-press-${button}-started`);
    }

    /**
     * Updates the events with type: mouse-long-press-button-finished
     * @param {String} button - Mouse button (left, middle or right)
     */
    updateMouseLongPressFinishedEvents(button) {
        this._eventsManager.updateEventsContainer(`mouse-long-press-${button}-finished`);
    }

    /**
     * Updates the events with type: state-normal
     */
    updateStateNormalEvents() {
        this._eventsManager.updateEventsContainer('state-normal');
    }

    /**
     * Updates the events with type: state-pressed
     */
    updateStatePressedEvents() {
        this._eventsManager.updateEventsContainer('state-pressed');
    }

    /**
     * Updates the events with type: touch
     */
    updateTouchEvents() {
        this._eventsManager.updateEventsContainer('touch');
    }

    /**
     * Updates the events with type: touch-down
     */
    updateTouchDownEvents() {
        this._eventsManager.updateEventsContainer('touch-down');
    }

    /**
     * Updates the events with type: touch-up
     */
    updateTouchUpEvents() {
        this._eventsManager.updateEventsContainer('touch-up');
    }

};


