//===========================================================================
// DKTools.Event
//===========================================================================

/**
 * Event class
 *
 * @class DKTools.Event
 *
 * @memberof DKTools
 *
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
 *
 * @see DKTools.Event.prototype.initialize
 */
DKTools.Event = class {

    constructor() {
        this.initialize.apply(this, arguments);
    }

    // initialize methods

    /**
     * Initializes the event
     *
     * @version 6.0.0
     *
     * @param {Object} [object] - Parameters
     *
     * @param {Number | String | *} [object.id] - ID of the event
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

    // A methods

    /**
     * Adds the remaining pause time to the event
     *
     * @param {Number} [time=1] - Time
     */
    addRemainingPauseTime(time = 1) {
        this._remainingPauseTime += time;
    }

    /**
     * Adds the remaining repeats to the event
     *
     * @param {Number} [repeats=1] - Repeats
     */
    addRemainingRepeats(repeats = 1) {
        this._remainingRepeats += repeats;
    }

    /**
     * Adds the remaining time to the event
     *
     * @param {Number} [time=1] - Time
     */
    addRemainingTime(time = 1) {
        this._remainingTime += time;
    }

    // C methods

    /**
     * Calls on pause handler
     *
     * @private
     */
    _callOnPauseHandler() {
        if (this._canCallOnPauseHandler()) {
            this._onPause(this);
        }
    }

    /**
     * Calls on repeat handler
     *
     * @private
     */
    _callOnRepeatHandler() {
        if (this._canCallOnRepeatHandler()) {
            this._onRepeat(this);
        }
    }

    /**
     * Calls on reset handler
     *
     * @private
     */
    _callOnResetHandler() {
        if (this._canCallOnResetHandler()) {
            this._onReset(this);
        }
    }

    /**
     * Calls on start handler
     *
     * @private
     */
    _callOnStartHandler() {
        if (this._canCallOnStartHandler()) {
            this._onStart(this);
        }

        this._started = true;
    }

    /**
     * Calls on success handler
     *
     * @private
     *
     * @param {Boolean} [forcedSuccess=false]
     */
    _callOnSuccessHandler(forcedSuccess = false) {
        if (this._canCallOnSuccessHandler() || forcedSuccess && this.hasOnSuccessHandler()) {
            this._onSuccess(this);
        }
    }

    /**
     * Calls on update handler
     *
     * @private
     */
    _callOnUpdateHandler() {
        if (this._canCallOnUpdateHandler()) {
            this._onUpdate(this);
        }
    }

    /**
     * Calls on failure handler
     *
     * @private
     */
    _callOnFailHandler() {
        if (this._canCallonFailHandler()) {
            this._onFail(this);
        }
    }

    /**
     * Returns true if can call on pause handler
     *
     * @private
     * @returns {Boolean} Can call on pause handler
     */
    _canCallOnPauseHandler() {
        return this.hasOnPauseHandler() && this.isPaused();
    }

    /**
     * Returns true if can call on repeat handler
     *
     * @private
     * @returns {Boolean} Can call on repeat handler
     */
    _canCallOnRepeatHandler() {
        return this.hasOnRepeatHandler();
    }

    /**
     * Returns true if can call on reset handler
     *
     * @private
     * @returns {Boolean} Can call on reset handler
     */
    _canCallOnResetHandler() {
        return this.hasOnResetHandler();
    }

    /**
     * Returns true if can call on start handler
     *
     * @private
     * @returns {Boolean} Can call on start handler
     */
    _canCallOnStartHandler() {
        return this.hasOnStartHandler() && !this.isStarted();
    }

    /**
     * Returns true if can call on success handler
     *
     * @private
     * @returns {Boolean} Can call on success handler
     */
    _canCallOnSuccessHandler() {
        return this.hasOnSuccessHandler() && this.isFinished();
    }

    /**
     * Returns true if can call on update handler
     *
     * @private
     * @returns {Boolean} Can call on update handler
     */
    _canCallOnUpdateHandler() {
        return this.hasOnUpdateHandler() && this.isUpdated();
    }

    /**
     * Returns true if can call on failure handler
     *
     * @private
     * @returns {Boolean} Can call on failure handler
     */
    _canCallonFailHandler() {
        return this.hasonFailHandler();
    }

    /**
     * Clears the remaining time of the event repeat
     *
     * @since 1.1.0
     * @private
     */
    _clearRemainingRepeats() {
        this._remainingRepeats = 0;
    }

    /**
     * Clears the remaining time of the event repeat
     *
     * @since 1.1.0
     * @private
     */
    _clearRemainingTime() {
        this._remainingTime = 0;
    }

    /**
     * Clones the event
     *
     * @returns {DKTools.Event | DKTools.Animation | DKTools.Animation.Action} Cloned event
     */
    clone() {
        return new (this.constructor)(this);
    }

    // F methods

    /**
     * Finishes the event
     *
     * @version 1.1.0
     * @param {Boolean} [forcedSuccess=false] - Forced successful completion of the event
     */
    finish(forcedSuccess = false) {
        if (this.isFinished() || forcedSuccess) {
            this._callOnSuccessHandler(forcedSuccess);
        } else {
            this._callOnFailHandler();
        }

        this._clearRemainingTime();
        this._clearRemainingRepeats();
    }

    // G methods

    /**
     * Returns the elapsed repeats
     *
     * @returns {Number} Elapsed repeats
     */
    getElapsedRepeats() {
        return this._repeats - this._remainingRepeats;
    }

    /**
     * Returns the elapsed time
     *
     * @returns {Number} Elapsed time
     */
    getElapsedTime() {
        return this._repeatTime - this._remainingTime;
    }

    // H methods

    /**
     * Returns true if the event has the manager
     *
     * @since 5.0.0
     * @returns {Boolean} Event has the manager
     */
    hasManager() {
        return !!this._manager;
    }

    /**
     * Returns true if the event has the on pause handler
     *
     * @returns {Boolean} Event has the on pause handler
     */
    hasOnPauseHandler() {
        return !!this._onPause;
    }

    /**
     * Returns true if the event has the on repeat handler
     *
     * @returns {Boolean} Event has the on repeat handler
     */
    hasOnRepeatHandler() {
        return !!this._onRepeat;
    }

    /**
     * Returns true if the event has the on reset handler
     *
     * @returns {Boolean} Event has the on reset handler
     */
    hasOnResetHandler() {
        return !!this._onReset;
    }

    /**
     * Returns true if the event has the on start handler
     *
     * @returns {Boolean} Event has the on start handler
     */
    hasOnStartHandler() {
        return !!this._onStart;
    }

    /**
     * Returns true if the event has the on success handler
     *
     * @returns {Boolean} Event has the on success handler
     */
    hasOnSuccessHandler() {
        return !!this._onSuccess;
    }

    /**
     * Returns true if the event has the on update handler
     *
     * @returns {Boolean} Event has the on update handler
     */
    hasOnUpdateHandler() {
        return !!this._onUpdate;
    }

    /**
     * Returns true if the event has the target
     *
     * @returns {Boolean} Event has the target
     */
    hasTarget() {
        return !!this._target;
    }

    /**
     * Returns true if the event has the type
     *
     * @returns {Boolean} Event has the type
     */
    hasType() {
        return !!this._type;
    }

    /**
     * Returns true if the event has the on failure handler
     *
     * @returns {Boolean} Event has the on failure handler
     */
    hasonFailHandler() {
        return !!this._onFail;
    }

    // I methods

    /**
     * Returns true if the event is animation
     *
     * @returns {Boolean} Event is animation
     */
    isAnimation() {
        return this instanceof DKTools.Animation;
    }

    /**
     * Returns true if the event is action of an animation
     *
     * @returns {Boolean} Event is action of an animation
     */
    isAnimationAction() {
        return this instanceof DKTools.Animation.Action;
    }

    /**
     * Returns true if the event if finished
     *
     * @returns {Boolean} Event if finished
     */
    isFinished() {
        return this._remainingTime === 0 && this._remainingRepeats === 0;
    }

    /**
     * Returns true if the event is paused
     *
     * @returns {Boolean} Event is paused
     */
    isPaused() {
        return this._remainingPauseTime !== 0;
    }

    /**
     * Returns true if the event is started
     *
     * @returns {Boolean} Event is started
     */
    isStarted() {
        return this._started;
    }

    /**
     * Returns true if the event is updated
     *
     * @returns {Boolean} Event is updated
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
     *
     * @version 8.0.0
     *
     * @returns {Boolean} Event was removed
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
     *
     * @version 1.1.0
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
     *
     * @since 5.0.0
     *
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
     * Sets the on pause handler
     *
     * @param {Function} handler - Handler
     */
    setOnPauseHandler(handler) {
        this._onPause = handler;
    }

    /**
     * Sets the on repeat handler
     *
     * @param {Function} handler - Handler
     */
    setOnRepeatHandler(handler) {
        this._onRepeat = handler;
    }

    /**
     * Sets the on reset handler
     *
     * @param {Function} handler - Handler
     */
    setOnResetHandler(handler) {
        this._onReset = handler;
    }

    /**
     * Sets the on start handler
     *
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
     *
     * @param {Function} handler - Handler
     */
    setOnUpdateHandler(handler) {
        this._onUpdate = handler;
    }

    /**
     * Sets the target
     *
     * @param {DKTools.Sprite | DKTools.Window | *} target - Target
     */
    setTarget(target) {
        this._target = target;
    }

    /**
     * Sets the on failuer handler
     *
     * @param {Function} handler - Handler
     */
    setonFailHandler(handler) {
        this._onFail = handler;
    }

    /**
     * Stops the event
     *
     * @param {Boolean} [forcedSuccess=false] - Forced successful completion of the event
     */
    stop(forcedSuccess = false) {
        this.finish(forcedSuccess);
        this.reset();
    }

    // U methods

    /**
     * Updates the event
     *
     * @private
     */
    _update() {
        this._callOnUpdateHandler();
        this._updateRemainingRepeats();
    }

    /**
     * Updates the pause
     *
     * @version 3.1.0
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
     */
    update() {
        if (!this.isPaused()) {
            this._callOnStartHandler();
            this._update();

            if (this.isFinished()) {
                this.finish();
            }
        } else {
            this._updatePause();
        }
    }

};

// properties

Object.defineProperties(DKTools.Event.prototype, {

    /**
     * ID of the event
     *
     * @since 6.0.0
     * @readonly
     * @type {Number | String | *}
     * @memberof DKTools.Event.prototype
     */
    id: {
        get: function() {
            return this._id;
        },
        configurable: true
    },

    /**
     * Target of the event
     *
     * @readonly
     * @type {DKTools.Sprite | DKTools.Window | *}
     * @memberof DKTools.Event.prototype
     */
    target: {
        get: function() {
            return this._target;
        },
        configurable: true
    },

    /**
     * Manager of the event
     *
     * @readonly
     * @type {DKTools.EventsManager}
     * @memberof DKTools.Event.prototype
     */
    manager: {
        get: function() {
            return this._manager;
        },
        configurable: true
    },

    /**
     * Type of the event
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.Event.prototype
     */
    type: {
        get: function() {
            return this._type;
        },
        configurable: true
    },

    /**
     * Time of one repeat
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Event.prototype
     */
    repeatTime: {
        get: function() {
            return this._duration;
        },
        configurable: true
    },

    /**
     * Amount of repeats
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Event.prototype
     */
    repeats: {
        get: function() {
            return this._repeats;
        },
        configurable: true
    },

    /**
     * Remaining time of current repeat
     *
     * @type {Number}
     * @memberof DKTools.Event.prototype
     */
    remainingTime: {
        get: function() {
            return this._remainingTime;
        },
        set: function(value) {
            this._remainingTime = value;
        },
        configurable: true
    },

    /**
     * Remaining amount of repeats
     *
     * @type {Number}
     * @memberof DKTools.Event.prototype
     */
    remainingRepeats: {
        get: function() {
            return this._remainingRepeats;
        },
        set: function(value) {
            this._remainingRepeats = value;
        },
        configurable: true
    },

    /**
     * Remaining time of pause
     *
     * @type {Number}
     * @memberof DKTools.Event.prototype
     */
    remainingPauseTime: {
        get: function() {
            return this._remainingPauseTime;
        },
        set: function(value) {
            this._remainingPauseTime = value;
        },
        configurable: true
    },

    /**
     * Handler of the event start
     *
     * @readonly
     * @type {Function}
     * @memberof DKTools.Event.prototype
     */
    onStart: {
        get: function() {
            return this._onStart;
        },
        configurable: true
    },

    /**
     * Handler of the event update
     *
     * @readonly
     * @type {Function}
     * @memberof DKTools.Event.prototype
     */
    onUpdate: {
        get: function() {
            return this._onUpdate;
        },
        configurable: true
    },

    /**
     * Handler of the event pause
     *
     * @readonly
     * @type {Function}
     * @memberof DKTools.Event.prototype
     */
    onPause: {
        get: function() {
            return this._onPause;
        },
        configurable: true
    },

    /**
     * Handler of the event reset
     *
     * @readonly
     * @type {Function}
     * @memberof DKTools.Event.prototype
     */
    onReset: {
        get: function() {
            return this._onReset;
        },
        configurable: true
    },

    /**
     * Handler of the event repeat
     *
     * @readonly
     * @type {Function}
     * @memberof DKTools.Event.prototype
     */
    onRepeat: {
        get: function() {
            return this._onRepeat;
        },
        configurable: true
    },

    /**
     * Handler of the event success
     *
     * @readonly
     * @type {Function}
     * @memberof DKTools.Event.prototype
     */
    onSuccess: {
        get: function() {
            return this._onSuccess;
        },
        configurable: true
    },

    /**
     * Handler of the event fail
     *
     * @readonly
     * @type {Function}
     * @memberof DKTools.Event.prototype
     */
    onFail: {
        get: function() {
            return this._onFail;
        },
        configurable: true
    }

});




