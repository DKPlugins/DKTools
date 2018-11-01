//===========================================================================
// DKTools.EventManager
//===========================================================================

/**
 * Event manager class
 *
 * @class DKTools.EventManager
 *
 * @since 2.0.0
 * @memberof DKTools
 *
 * @see DKTools.EventManager.prototype.initialize
 */
DKTools.EventManager = class {

    constructor() {
        this.initialize.apply(this, arguments);
    }

    // initialize methods

    /**
     * Initializes the event manager
     *
     * @param {DKTools.Sprite | DKTools.Window | DKTools.Scene} target - Target
     */
    initialize(target) {

        /**
         * @private
         * @readonly
         * @type {DKTools.Sprite | DKTools.Window | DKTools.Scene}
         */
        this._target = target;

        /**
         * @private
         * @readonly
         * @type {Object}
         */
        this._events = {};
    }

    // A methods

    /**
     * Adds the animation
     *
     * @version 6.0.0
     *
     * @param {DKTools.Animation} animation - Animation to add
     *
     * @returns {DKTools.Animation | null} Added animation or null
     */
    addAnimation(animation) {
        return this.addEventToContainer(animation);
    }

    /**
     * Adds the event
     *
     * @version 6.0.0
     *
     * @param {DKTools.Event | DKTools.Animation | Object} object - Event or object with parameters for the event
     *
     * @param {Number | String | *} [object.id] - ID of the event
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
     * @returns {DKTools.Event | DKTools.Animation | null} Added event or null
     */
    addEvent(object) {
        let event;

        if (object instanceof DKTools.Event || object instanceof DKTools.Animation) {
            event = object;
        } else if (object instanceof Object) {
            event = new DKTools.Event(object);
        }

        return this.addEventToContainer(event);
    }

    /**
     * Adds the event to container
     *
     * @version 6.0.0
     *
     * @param {DKTools.Event | DKTools.Animation} event - Event
     *
     * @returns {DKTools.Event | DKTools.Animation | null} Added event or null
     */
    addEventToContainer(event) {
        if (!event) {
            return null;
        }

        if (!event.hasTarget()) {
            event.setTarget(this._target);
        }

        event.setManager(this);

        const container = this.getEventsContainer(event);

        container.push(event);

        return event;
    }

    /**
     * Adds the one time event
     *
     * @version 6.0.0
     *
     * @param {DKTools.Event | Object} object - Event or object with parameters for the event
     *
     * @param {Number | String | *} [object.id] - ID of the event
     * @param {String} [object.type] - Type of the event
     * @param {Number} [object.remainingPauseTime] - Remaining time of pause
     * @param {Function} [object.onStart] - Handler of the event start
     * @param {Function} [object.onUpdate] - Handler of the event update
     * @param {Function} [object.onPause] - Handler of the event pause
     * @param {Function} [object.onReset] - Handler of the event reset
     * @param {Function} [object.onRepeat] - Handler of the event repeat
     * @param {Function} [object.onSuccess] - Handler of the event success
     * @param {Function} [object.onFail] - Handler of the event fail
     *
     * @see DKTools.Event
     * @see DKTools.EventManager.prototype.addEvent
     *
     * @returns {DKTools.Event} Added event
     */
    addOneTimeEvent(object) {
        object.repeatTime = 1;
        object.repeats = 0;

        return this.addEvent(object);
    }

    // C methods

    /**
     * Checks the event
     *
     * @private
     * @param {DKTools.Event | DKTools.Animation} event - Event
     * @returns {Boolean}
     */
    _checkEvent(event) {
        return event && !event.isFinished();
    }

    /**
     * Checks the events
     *
     * @private
     */
    _checkEvents() {
        _.forEach(this._events, (container, type) => {
            this._events[type] = this._checkEventsContainer(container);
        });
    }

    /**
     * Checks a container with the events and removes the completed events
     *
     * @private
     * @param {Array} container - Container for the events
     * @returns {Array} Filtered array
     */
    _checkEventsContainer(container) {
        return _.filter(container, this._checkEvent.bind(this));
    }

    /**
     * Clears the events
     *
     * @param {String[] | String} [object] - Array with event types or event type
     */
    clearEvents(object) {
        if (object) {
            if (Array.isArray(object)) {
                _.forEach(object, type => {
                    this._events[type] = [];
                });
            } else { // object - String
                this._events[object] = [];
            }
        } else {
            this._events = {};
        }
    }

    /**
     * Creates a container for the events
     *
     * @param {String} type - Type of the events
     * @returns {Array} Container for the events
     */
    createEventsContainer(type) {
        this._events[type] = [];

        return this._events[type];
    }

    // F methods

    /**
     * Returns the found animation
     *
     * @since 6.0.0
     *
     * @param {Number | String | *} id - ID of the animation
     * @param {String} [type] - Type of the animation
     *
     * @returns {DKTools.Animation | undefined} Animation
     */
    findAnimation(id, type) {
        return _.find(this.getAnimations(type), { id });
    }

    /**
     * Returns the found event
     *
     * @since 6.0.0
     *
     * @param {Number | String | *} id - ID of the event
     * @param {String} [type] - Type of the event
     *
     * @returns {DKTools.Event | DKTools.Animation | undefined} Event
     */
    findEvent(id, type) {
        return _.find(this.getEvents(type), { id });
    }

    /**
     * Finishes the events
     *
     * @param {String} type - Type of the events
     * @param {Boolean} [forcedSuccess=false] - Forced success for the finish of the events
     *
     * @see DKTools.Event.prototype.finish
     */
    finishEvents(type, forcedSuccess = false) {
        this.iterateEventsContainer(type, event => {
            event.finish(forcedSuccess);
        });
    }

    // G methods

    /**
     * Returns an array with the all animations or animations of a certain type
     *
     * @param {String} [type] - Type of animation
     * @returns {Array} Array with the animations
     */
    getAnimations(type) {
        return _.filter(this.getEvents(type), event => event instanceof DKTools.Animation);
    }

    /**
     * Returns an index of the event in its container
     *
     * @param {DKTools.Event | DKTools.Animation} event - Event
     * @returns {Number} Index of the event in its container
     */
    getEventIndex(event) {
        return this.getEventsContainer(event).indexOf(event);
    }

    /**
     * Returns an array with the all events or events of a certain type
     *
     * @param {String} [type] - Type of the events
     * @returns {Array} Array with the events
     */
    getEvents(type) {
        if (type) {
            return this.getEventsContainerByType(type);
        }

        let events = [];

        _.forEach(this._events, container => {
            events = events.concat(container);
        });

        return events;
    }

    /**
     * Returns a container for the events by event
     *
     * @param {DKTools.Event | DKTools.Animation} event - Event
     * @returns {Array} Container for the events
     */
    getEventsContainer(event) {
        return this.getEventsContainerByType(event.type);
    }

    /**
     * Returns a container for the events by event type
     *
     * @param {String} type - Type of the events
     * @returns {Array} Container for the events
     */
    getEventsContainerByType(type) {
        return this._events[type] || this.createEventsContainer(type);
    }

    // H methods

    /**
     * Checks for existence of the animation in the object
     * Returns true if the animation exists
     *
     * @param {DKTools.Animation} animation - Animation
     * @returns {Boolean} Animation exists
     */
    hasAnimation(animation) {
        return animation instanceof DKTools.Animation && this.getEventIndex(animation) >= 0;
    }

    /**
     * Checks for existence of the animations of a certain type
     * Returns true if the animations exists
     *
     * @param {String} [type] - Type of the animations
     * @returns {Boolean} Animations exists
     */
    hasAnimations(type) {
        return !DKTools.Utils.Array.isEmpty(this.getAnimations(type));
    }

    /**
     * Checks for existence of the event in the object
     * Returns true if the event exists
     *
     * @param {DKTools.Event | DKTools.Animation} event - Event
     * @returns {Boolean} Event exists
     */
    hasEvent(event) {
        return this.getEventIndex(event) >= 0;
    }

    /**
     * Checks for existence of the events of a certain type
     * Returns true if the events exists
     *
     * @param {String} [type] - Type of the events
     * @returns {Boolean} Events exists
     */
    hasEvents(type) {
        return !DKTools.Utils.Array.isEmpty(this.getEvents(type));
    }

    // I methods

    /**
     * Checks the events for pause
     * Returns the conjunction of pauses of the events
     *
     * @param {String} type - Type of the events
     * @returns {Boolean} Conjunction of pauses of the events
     */
    isEventsPaused(type) {
        const container = this.getEventsContainerByType(type);

        return _.every(container, event => event.isPaused());
    }

    /**
     * Performs a callback function for the events
     *
     * @param {String} type - Type of the events
     * @param {Function} callback - Event processing function
     */
    iterateEventsContainer(type, callback) {
        const container = this.getEventsContainerByType(type);

        _.forEach(container, callback);
    }

    // P methods

    /**
     * Pauses the events
     *
     * @param {String} type - Type of the events
     * @param {Number} [duration=-1] - Duration of the pause
     *
     * @see DKTools.Event.prototype.pause
     */
    pauseEvents(type, duration = -1) {
        this.iterateEventsContainer(type, event => {
            event.pause(duration);
        });
    }

    // R methods

    /**
     * Removes the event from a container
     * Returns true if the event was removed
     *
     * @param {DKTools.Event | DKTools.Animation} event - Event
     * @returns {Boolean} Event was removed
     */
    removeEvent(event) {
        const index = this.getEventIndex(event);

        if (index >= 0) {
            const container = this.getEventsContainer(event);

            container[index] = null;

            return true;
        }

        return false;
    }

    /**
     * Resumes the events
     *
     * @param {String} type - Type of the events
     *
     * @see DKTools.Event.prototype.resume
     */
    resumeEvents(type) {
        this.iterateEventsContainer(type, event => {
            event.resume();
        });
    }

    // S methods

    /**
     * Stops the events
     *
     * @param {String} type - Type of the events
     * @param {Boolean} [forcedSuccess=false] - Forced success for the finish of the events
     *
     * @see DKTools.Event.prototype.stop
     */
    stopEvents(type, forcedSuccess = false) {
        this.iterateEventsContainer(type, event => {
            event.stop(forcedSuccess);
        });
    }

    // U methods

    /**
     * Updates the manager
     *
     * @see DKTools.EventManager._checkEvents
     */
    update() {
        this._checkEvents();
    }

    /**
     * Updates the event
     *
     * @param {DKTools.Event | DKTools.Animation} event - Event
     *
     * @see DKTools.Event.prototype.update
     */
    updateEvent(event) {
        if (event) {
            event.update();
        }
    }

    /**
     * Updates the events from container
     *
     * @param {String} type - Type of the events
     */
    updateEventsContainer(type) {
        this.iterateEventsContainer(type, this.updateEvent.bind(this));
    }

};

// properties

Object.defineProperties(DKTools.EventManager, {

    /**
     * Events
     *
     * @readonly
     * @type {Object}
     * @memberof DKTools.EventManager.prototype
     */
    events: {
        get: function() {
            return this._events;
        },
        configurable: true
    }

});




