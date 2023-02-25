//===========================================================================
// DKTools.Event
//===========================================================================

/**
 * Event class
 * @class
 * @memberof DKTools
 * @param {Object} [object] - Parameters
 *
 * @param {DKTools.Sprite | DKTools.Window | *} [object.target] - Target of the event
 * @param {String} [object.type] - Type of the event
 * @param {Number} [object.repeatTime] - Time of one repeat
 * @param {Number} [object.repeats] - Amount of repeats
 * @param {Number} [object.remainingPauseTime] - Remaining time of pause
 * @param {Function} [object.onStart] - Handler of the event start
 * @param {Function} [object.onUpdate] - Handler of the event update
 * @param {Function} [object.onPause] - Handler of the event pause
 * @param {Function} [object.onReset] - Handler of the event reset
 * @param {Function} [object.onRepeat] - Handler of the event repeat
 * @param {Function} [object.onSuccess] - Handler of the event success
 * @param {Function} [object.onFail] - Handler of the event fail
 */
DKTools.Event = class {

    constructor() {
        this.initialize.apply(this, arguments);
    }

    // properties

    /**
     * Gets id of the event
     * @return {Number | String} Id of the event
     */
    get id() {
        return this._id;
    }

    /**
     * Gets target of the event
     * @return {DKTools.Sprite | DKTools.Window | DKTools.Scene} Target of the event
     */
    get target() {
        return this._target;
    }

    /**
     * Gets manager of the event
     * @return {DKTools.EventsManager} Manager of the event
     */
    get manager() {
        return this._manager;
    }

    /**
     * Gets type of the event
     * @return {String} Type of the event
     */
    get type() {
        return this._type;
    }

    /**
     * Gets time of one repeat
     * @return {Number} Time of one repeat
     */
    get repeatTime() {
        return this._repeatTime;
    }

    /**
     * Gets amount of repeats
     * @return {Number} Amount of repeats
     */
    get repeats() {
        return this._repeats;
    }

    /**
     * Gets remaining time of current repeat
     * @return {Number} Remaining time of current repeat
     */
    get remainingTime() {
        return this._remainingTime;
    }

    /**
     * Sets remaining time of current repeat
     * @param {Number} value - Value
     */
    set remainingTime(value) {
        this._remainingTime = value;
    }

    /**
     * Remaining amount of repeats
     * @return {Number} Remaining amount of repeats
     */
    get remainingRepeats() {
        return this._remainingRepeats;
    }

    /**
     * Sets remaining amount of repeats
     * @param {Number} value - Value
     */
    set remainingRepeats(value) {
        this._remainingRepeats = value;
    }

    /**
     * Gets remaining time of pause
     * @return {Number} remaining time of pause
     */
    get remainingPauseTime() {
        return this._remainingPauseTime;
    }

    /**
     * Sets remaining time of pause
     * @param {Number} value - Value
     */
    set remainingPauseTime(value) {
        this._remainingPauseTime = value;
    }

    // initialize methods

    /**
     * Initializes the event
     *
     * @param {Object} [object] - Parameters
     *
     * @param {Number | String} [object.id] - ID of the event
     * @param {DKTools.Sprite | DKTools.Window | *} [object.target] - Target of the event
     * @param {String} [object.type] - Type of the event
     * @param {Number} [object.repeatTime] - Time of one repeat
     * @param {Number} [object.repeats] - Amount of repeats
     * @param {Number} [object.remainingPauseTime] - Remaining time of pause
     * @param {Function} [object.onStart] - Handler of the event start
     * @param {Function} [object.onUpdate] - Handler of the event update
     * @param {Function} [object.onPause] - Handler of the event pause
     * @param {Function} [object.onReset] - Handler of the event reset
     * @param {Function} [object.onRepeat] - Handler of the event repeat
     * @param {Function} [object.onSuccess] - Handler of the event success
     * @param {Function} [object.onFail] - Handler of the event fail
     */
    initialize(object) {
        object = object || {};

        /**
         * @private
         * @readonly
         * @type {Number | String | *}
         */
        this._id = object.id;

        /**
         * @private
         * @readonly
         * @type {DKTools.Sprite | DKTools.Window | *}
         */
        this._target = object.target;

        /**
         * @private
         * @readonly
         * @type {String}
         */
        this._type = object.type;

        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._repeatTime = object.repeatTime || -1;

        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._repeats = _.defaultTo(object.repeats, -1);

        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._remainingPauseTime = object.remainingPauseTime || 0;

        /**
         * @private
         * @readonly
         * @type {Function | null}
         */
        this._onStart = object.onStart;

        /**
         * @private
         * @readonly
         * @type {Function | null}
         */
        this._onUpdate = object.onUpdate;

        /**
         * @private
         * @readonly
         * @type {Function | null}
         */
        this._onPause = object.onPause;

        /**
         * @private
         * @readonly
         * @type {Function | null}
         */
        this._onReset = object.onReset;

        /**
         * @private
         * @readonly
         * @type {Function | null}
         */
        this._onRepeat = object.onRepeat;

        /**
         * @private
         * @readonly
         * @type {Function | null}
         */
        this._onSuccess = object.onSuccess;

        /**
         * @private
         * @readonly
         * @type {Function | null}
         */
        this._onFail = object.onFail;

        /**
         * @private
         * @readonly
         * @type {Boolean}
         */
        this._started = false;

        this._resetRemainingTime();
        this._resetRemainingRepeats();
    }

    // C methods

    /**
     * Calls on pause handler
     * @version 1.1.5
     * @private
     * @param {*} [data] - Data
     */
    _callOnPauseHandler(data) {
        if (this._canCallOnPauseHandler()) {
            this._onPause(this, data);
        }
    }

    /**
     * Calls on repeat handler
     * @version 1.1.5
     * @private
     * @param {*} [data] - Data
     */
    _callOnRepeatHandler(data) {
        if (this._canCallOnRepeatHandler()) {
            this._onRepeat(this, data);
        }
    }

    /**
     * Calls on reset handler
     * @version 1.1.5
     * @private
     * @param {*} [data] - Data
     */
    _callOnResetHandler(data) {
        if (this._canCallOnResetHandler()) {
            this._onReset(this, data);
        }
    }

    /**
     * Calls on start handler
     * @version 1.1.5
     * @private
     * @param {*} [data] - Data
     */
    _callOnStartHandler(data) {
        if (this._canCallOnStartHandler()) {
            this._onStart(this, data);
        }

        this._started = true;
    }

    /**
     * Calls on success handler
     * @version 1.1.5
     * @private
     * @param {Boolean} [forcedSuccess=false] - Forced success
     * @param {*} [data] - Data
     */
    _callOnSuccessHandler(forcedSuccess = false, data) {
        if (this._canCallOnSuccessHandler() || forcedSuccess && this.hasOnSuccessHandler()) {
            this._onSuccess(this, data);
        }
    }

    /**
     * Calls on update handler
     * @private
     * @param {*} [data] - Data
     */
    _callOnUpdateHandler(data) {
        if (this._canCallOnUpdateHandler()) {
            this._onUpdate(this, data);
        }
    }

    /**
     * Calls on failure handler
     * @version 1.1.5
     * @private
     * @param {*} [data] - Data
     */
    _callOnFailHandler(data) {
        if (this._canCallOnFailHandler()) {
            this._onFail(this, data);
        }
    }

    /**
     * Returns true if can call on pause handler
     * @private
     * @return {Boolean} Can call on pause handler
     */
    _canCallOnPauseHandler() {
        return this.hasOnPauseHandler() && this.isPaused();
    }

    /**
     * Returns true if can call on repeat handler
     * @private
     * @return {Boolean} Can call on repeat handler
     */
    _canCallOnRepeatHandler() {
        return this.hasOnRepeatHandler();
    }

    /**
     * Returns true if can call on reset handler
     * @private
     * @return {Boolean} Can call on reset handler
     */
    _canCallOnResetHandler() {
        return this.hasOnResetHandler();
    }

    /**
     * Returns true if can call on start handler
     * @private
     * @return {Boolean} Can call on start handler
     */
    _canCallOnStartHandler() {
        return this.hasOnStartHandler() && !this.isStarted();
    }

    /**
     * Returns true if can call on success handler
     * @private
     * @return {Boolean} Can call on success handler
     */
    _canCallOnSuccessHandler() {
        return this.hasOnSuccessHandler() && this.isFinished();
    }

    /**
     * Returns true if can call on update handler
     * @private
     * @return {Boolean} Can call on update handler
     */
    _canCallOnUpdateHandler() {
        return this.hasOnUpdateHandler() && this.isUpdated();
    }

    /**
     * Returns true if can call on failure handler
     * @private
     * @return {Boolean} Can call on failure handler
     */
    _canCallOnFailHandler() {
        return this.hasOnFailHandler();
    }

    /**
     * Clears the remaining time of the event repeat
     * @private
     */
    _clearRemainingRepeats() {
        this._remainingRepeats = 0;
    }

    /**
     * Clears the remaining time of the event repeat
     * @private
     */
    _clearRemainingTime() {
        this._remainingTime = 0;
    }

    // F methods

    /**
     * Fails the events
     * @since 1.1.5
     * @param {*} [data] - Data
     */
    fail(data) {
        this._callOnFailHandler(data);
        this._clearRemainingTime();
        this._clearRemainingRepeats();
    }

    /**
     * Finishes the event
     * @param {Boolean} [forcedSuccess=false] - Forced successful completion of the event
     * @param {*} [data] - Data
     */
    finish(forcedSuccess = false, data) {
        if (this.isFinished() || forcedSuccess) {
            this._callOnSuccessHandler(forcedSuccess, data);
        } else {
            this._callOnFailHandler(data);
        }

        this._clearRemainingTime();
        this._clearRemainingRepeats();
    }

    // G methods

    /**
     * Returns the elapsed repeats
     * @return {Number} Elapsed repeats
     */
    getElapsedRepeats() {
        return this._repeats - this._remainingRepeats;
    }

    /**
     * Returns the elapsed time
     * @return {Number} Elapsed time
     */
    getElapsedTime() {
        return this._repeatTime - this._remainingTime;
    }

    // H methods

    /**
     * Returns true if the event has the manager
     * @return {Boolean} Event has the manager
     */
    hasManager() {
        return !!this._manager;
    }

    /**
     * Returns true if the event has the on failure handler
     *
     * @return {Boolean} Event has the on failure handler
     */
    hasOnFailHandler() {
        return !!this._onFail;
    }

    /**
     * Returns true if the event has the on pause handler
     * @return {Boolean} Event has the on pause handler
     */
    hasOnPauseHandler() {
        return !!this._onPause;
    }

    /**
     * Returns true if the event has the on repeat handler
     * @return {Boolean} Event has the on repeat handler
     */
    hasOnRepeatHandler() {
        return !!this._onRepeat;
    }

    /**
     * Returns true if the event has the on reset handler
     * @return {Boolean} Event has the on reset handler
     */
    hasOnResetHandler() {
        return !!this._onReset;
    }

    /**
     * Returns true if the event has the on start handler
     * @return {Boolean} Event has the on start handler
     */
    hasOnStartHandler() {
        return !!this._onStart;
    }

    /**
     * Returns true if the event has the on success handler
     * @return {Boolean} Event has the on success handler
     */
    hasOnSuccessHandler() {
        return !!this._onSuccess;
    }

    /**
     * Returns true if the event has the on update handler
     * @return {Boolean} Event has the on update handler
     */
    hasOnUpdateHandler() {
        return !!this._onUpdate;
    }

    /**
     * Returns true if the event has the target
     * @return {Boolean} Event has the target
     */
    hasTarget() {
        return !!this._target;
    }

    /**
     * Returns true if the event has the type
     * @return {Boolean} Event has the type
     */
    hasType() {
        return !!this._type;
    }

    // I methods

    /**
     * Returns true if the event is animation
     *
     * @return {Boolean} Event is animation
     */
    isAnimation() {
        return this instanceof DKTools.Animation;
    }

    /**
     * Returns true if the event is action of an animation
     *
     * @return {Boolean} Event is action of an animation
     */
    isAnimationAction() {
        return this instanceof DKTools.Animation.Action;
    }

    /**
     * Returns true if the event if finished
     *
     * @return {Boolean} Event if finished
     */
    isFinished() {
        return this._remainingTime === 0 && this._remainingRepeats === 0;
    }

    /**
     * Returns true if the event is paused
     *
     * @return {Boolean} Event is paused
     */
    isPaused() {
        return this._remainingPauseTime !== 0;
    }

    /**
     * Returns true if the event is started
     *
     * @return {Boolean} Event is started
     */
    isStarted() {
        return this._started;
    }

    /**
     * Returns true if the event is updated
     *
     * @return {Boolean} Event is updated
     */
    isUpdated() {
        return this.isStarted() && !this.isPaused() && !this.isFinished();
    }

    // P methods

    /**
     * Pauses the event
     *
     * @param {Number} [duration=-1] - Duration of pause
     */
    pause(duration = -1) {
        this._remainingPauseTime = duration;
    }

    // R methods

    /**
     * Resets the remaining amount of repeats of the event
     *
     * @private
     */
    _resetRemainingRepeats() {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._remainingRepeats = this._repeats;
    }

    /**
     * Resets the remaining time of the event repeat
     *
     * @private
     */
    _resetRemainingTime() {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._remainingTime = this._repeatTime;
    }

    /**
     * Removes the event
     * Returns true if the event was removed
     * @return {Boolean} Event was removed
     */
    remove() {
        if (this.hasTarget()) {
            return this._target.removeEvent(this);
        }

        return true;
    }

    /**
     * Repeats the event
     */
    repeat() {
        if (this._remainingRepeats > 0) {
            this._remainingRepeats--;
        }

        this._resetRemainingTime();
        this._callOnRepeatHandler();
    }

    /**
     * Resets the event
     */
    reset() {
        this._resetRemainingTime();
        this._resetRemainingRepeats();
        this._callOnResetHandler();
    }

    /**
     * Resumes the event
     */
    resume() {
        this._remainingPauseTime = 0;
    }

    // S methods

    /**
     * Sets the manager
     * @param {DKTools.EventsManager} manager - Manager
     */
    setManager(manager) {
        /**
         * @private
         * @readonly
         * @type {DKTools.EventsManager}
         */
        this._manager = manager;
    }

    /**
     * Sets the on failure handler
     * @param {Function} handler - Handler
     */
    setOnFailHandler(handler) {
        this._onFail = handler;
    }

    /**
     * Sets the on pause handler
     * @param {Function} handler - Handler
     */
    setOnPauseHandler(handler) {
        this._onPause = handler;
    }

    /**
     * Sets the on repeat handler
     * @param {Function} handler - Handler
     */
    setOnRepeatHandler(handler) {
        this._onRepeat = handler;
    }

    /**
     * Sets the on reset handler
     * @param {Function} handler - Handler
     */
    setOnResetHandler(handler) {
        this._onReset = handler;
    }

    /**
     * Sets the on start handler
     * @param {Function} handler - Handler
     */
    setOnStartHandler(handler) {
        this._onStart = handler;
    }

    /**
     * Sets the on success handler
     *
     * @param {Function} handler - Handler
     */
    setOnSuccessHandler(handler) {
        this._onSuccess = handler;
    }

    /**
     * Sets the on update handler
     * @param {Function} handler - Handler
     */
    setOnUpdateHandler(handler) {
        this._onUpdate = handler;
    }

    /**
     * Sets the target
     * @param {DKTools.Sprite | DKTools.Window | *} target - Target
     */
    setTarget(target) {
        this._target = target;
    }

    /**
     * Stops the event
     * @param {Boolean} [forcedSuccess=false] - Forced successful completion of the event
     */
    stop(forcedSuccess = false) {
        this.finish(forcedSuccess);
        this.reset();
    }

    // U methods

    /**
     * Updates the event
     * @private
     * @param {*} [data] - Data
     */
    _update(data) {
        this._callOnUpdateHandler(data);
        this._updateRemainingRepeats();
    }

    /**
     * Updates the pause
     *
     * @private
     */
    _updatePause() {
        this._callOnPauseHandler();
        this._updateRemainingPauseTime();
    }

    /**
     * Updates the remaining pause time
     *
     * @private
     */
    _updateRemainingPauseTime() {
        if (this._remainingPauseTime > 0) {
            this._remainingPauseTime--;
        }
    }

    /**
     * Updates the remaining repeats
     *
     * @private
     */
    _updateRemainingRepeats() {
        if (!this.isFinished()) {
            if (this._remainingTime === 0) {
                this.repeat();
            } else {
                this._updateRemainingTime();
            }
        }
    }

    /**
     * Updates the remaining time
     *
     * @private
     */
    _updateRemainingTime() {
        if (this._remainingTime > 0) {
            this._remainingTime--;
        }
    }

    /**
     * Updates the event
     * @param {*} [data] - Data
     */
    update(data) {
        if (!this.isPaused()) {
            this._callOnStartHandler();
            this._update(data);

            if (this.isFinished()) {
                this.finish();
            }
        } else {
            this._updatePause();
        }
    }

};


