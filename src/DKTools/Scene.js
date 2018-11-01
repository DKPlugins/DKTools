//===========================================================================
// DKTools.Scene
//===========================================================================

DKTools.Scene.prototype = Object.create(Scene_Base.prototype);
DKTools.Scene.prototype.constructor = DKTools.Scene;

// initialize

/**
 * Initializes a class object
 *
 * @override
 *
 * @see DKTools.Scene.prototype._clearAll
 * @see DKTools.Scene.prototype._createAll
 * @see DKTools.Scene.prototype._setupAll
 * @see DKTools.Scene.prototype._addAllChildren
 * @see Scene_Base.prototype.initialize
 */
DKTools.Scene.prototype.initialize = function() {
    this._clearAll();
    this._createAll();
    this._setupAll();
    this._addAllChildren();
    Scene_Base.prototype.initialize.call(this);
};

// _clear methods

/**
 * Clears all data
 *
 * @private
 */
DKTools.Scene.prototype._clearAll = function() {
    // to be overriden by plugins
};

// _create methods

/**
 * Creates all
 *
 * @version 2.0.0
 * @private
 *
 * @see DKTools.Scene.prototype._createOptionManager
 * @see DKTools.Scene.prototype._createEventManager
 */
DKTools.Scene.prototype._createAll = function() {
    this._createOptionManager();
    this._createEventManager();
};

/**
 * Creates the option manager
 *
 * @since 2.0.0
 * @private
 */
DKTools.Scene.prototype._createOptionManager = function() {
    /**
     * @private
     * @readonly
     * @type {DKTools.OptionManager}
     */
    this._optionManager = new DKTools.OptionManager();
};

/**
 * Creates the event manager
 *
 * @since 2.0.0
 * @private
 *
 * @see DKTools.EventManager
 */
DKTools.Scene.prototype._createEventManager = function() {
    /**
     * @private
     * @readonly
     * @type {DKTools.EventManager}
     */
    this._eventManager = new DKTools.EventManager(this);
};

// _setup methods

/**
 * Sets all data
 *
 * @version 2.0.0
 * @private
 *
 * @see DKTools.Scene.prototype._setupOptions
 * @see DKTools.Scene.prototype._setupEvents
 * @see DKTools.Scene.prototype._setupAnimations
 */
DKTools.Scene.prototype._setupAll = function() {
    this._setupOptions();
    this._setupEvents();
    this._setupAnimations();
};

/**
 * Sets the options
 *
 * @since 2.0.0
 * @private
 */
DKTools.Scene.prototype._setupOptions = function() {
    // to be overriden by plugins
};

/**
 * Sets the events
 *
 * @since 2.0.0
 * @private
 */
DKTools.Scene.prototype._setupEvents = function() {
    // to be overriden by plugins
};

/**
 * Sets the animations
 *
 * @since 2.0.0
 * @private
 */
DKTools.Scene.prototype._setupAnimations = function() {
    // to be overriden by plugins
};

// _add methods

/**
 * Adds children objects to processing
 *
 * @private
 */
DKTools.Scene.prototype._addAllChildren = function() {
    // to be overriden by plugins
};

// create methods

/**
 * Creates all
 *
 * @override
 *
 * @see Scene_Base.prototype.create
 * @see DKTools.Scene.prototype.createBackground
 * @see DKTools.Scene.prototype.createAllSprites
 * @see DKTools.Scene.prototype.createWindowLayer
 * @see DKTools.Scene.prototype.createAllWindows
 * @see DKTools.Scene.prototype.createForeground
 */
DKTools.Scene.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
	this.createBackground();
	this.createAllSprites();
	this.createWindowLayer();
	this.createAllWindows();
	this.createForeground();
};

/**
 * Creates the background
 */
DKTools.Scene.prototype.createBackground = function() {
    // to be overriden by plugins
};

/**
 * Creates all sprites
 */
DKTools.Scene.prototype.createAllSprites = function() {
    // to be overriden by plugins
};

/**
 * Creates all windows
 */
DKTools.Scene.prototype.createAllWindows = function() {
    // to be overriden by plugins
};

/**
 * Creates the foreground
 */
DKTools.Scene.prototype.createForeground = function() {
    // to be overriden by plugins
};

// start methods

/**
 * Starts the scene
 *
 * @override
 */
DKTools.Scene.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    this.startAllSprites();
    this.startAllWindows();
};

/**
 * Starts all sprites
 */
DKTools.Scene.prototype.startAllSprites = function() {
    // to be overriden by plugins
};

/**
 * Starts all windows
 */
DKTools.Scene.prototype.startAllWindows = function() {
    // to be overriden by plugins
};

// remove methods

/**
 * Removes the window from the scene
 *
 * @param {DKTools.Window | *} window - Window to remove
 */
DKTools.Scene.prototype.removeWindow = function(window) {
    if (this.hasWindowLayer() && this.isChild(window)) {
        this._windowLayer.removeChild(window);
    }
};

// has methods

/**
 * Returns true if the scene has the layer of windows
 *
 * @returns {Boolean} Scene has the layer of windows
 */
DKTools.Scene.prototype.hasWindowLayer = function() {
    return !!this._windowLayer;
};

// is methods

/**
 * Returns true if the object (parameter) is child of scene
 *
 * @param {Sprite | Window} object - Object
 *
 * @returns {Boolean} Object (parameter) is child of scene
 */
DKTools.Scene.prototype.isChild = function(object) {
    if (object instanceof Window && this.hasWindowLayer()) {
        return DKTools.Utils.Array.contains(this._windowLayer.children, object);
    }

    return DKTools.Utils.Array.contains(this.children, object);
};

// stop methods

/**
 * Stops the scene
 *
 * @override
 *
 * @see Scene_Base.prototype.stop
 * @see DKTools.Scene.prototype.stopAll
 */
DKTools.Scene.prototype.stop = function() {
    Scene_Base.prototype.stop.call(this);
    this.stopAll();
};

/**
 * Stops all
 */
DKTools.Scene.prototype.stopAll = function() {
    // to be overriden by plugins
};

// terminate methods

/**
 * Terminates the scene
 *
 * @override
 *
 * @see Scene_Base.prototype.terminate
 * @see DKTools.Scene.prototype.stopAll
 */
DKTools.Scene.prototype.terminate = function() {
    Scene_Base.prototype.terminate.call(this);
    this.terminateAll();
};

/**
 * Terminates all
 */
DKTools.Scene.prototype.terminateAll = function() {
    // to be overriden by plugins
};

// option methods

/**
 * Clears the options
 *
 * @since 2.0.0
 *
 * @see DKTools.OptionManager.prototype.clear
 */
DKTools.Scene.prototype.clearOptions = function() {
    this._optionManager.clear();
};

/**
 * Returns true if the option is enabled
 *
 * @since 2.0.0
 *
 * @param {String} option - Name of the option
 *
 * @see DKTools.OptionManager.prototype.isOptionEnabled
 *
 * @returns {Boolean} Option is enabled
 */
DKTools.Scene.prototype.isOptionEnabled = function(option) {
    return this._optionManager.isOptionEnabled(option);
};

/**
 * Returns conjunction of the options
 *
 * @since 2.0.0
 *
 * @param {String[] | ...String} object - Names of the options
 *
 * @see DKTools.OptionManager.prototype.isOptionsEnabled
 *
 * @returns {Boolean} Conjunction of the options
 */
DKTools.Scene.prototype.isOptionsEnabled = function(object) {
    return this._optionManager.isOptionsEnabled(object);
};

/**
 * Returns disjunction of the options
 *
 * @since 2.0.0
 *
 * @param {String[] | ...String} object - Names of the options
 *
 * @see DKTools.OptionManager.prototype.isSomeOptionsEnabled
 *
 * @returns {Boolean} Disjunction of the options
 */
DKTools.Scene.prototype.isSomeOptionsEnabled = function(object) {
    return this._optionManager.isSomeOptionsEnabled(object);
};

/**
 * Returns true if the option is disabled
 *
 * @since 2.0.0
 *
 * @param {String} option - Name of the option
 *
 * @see DKTools.OptionManager.prototype.isOptionDisabled
 *
 * @returns {Boolean} Option is disabled
 */
DKTools.Scene.prototype.isOptionDisabled = function(option) {
    return this._optionManager.isOptionDisabled(option);
};

/**
 * Returns conjunction of the options
 *
 * @since 2.0.0
 *
 * @param {String[] | ...String} object - Names of the options
 *
 * @see DKTools.OptionManager.prototype.isOptionsDisabled
 *
 * @returns {Boolean} Conjunction of the options
 */
DKTools.Scene.prototype.isOptionsDisabled = function(object) {
    return this._optionManager.isOptionsDisabled(object);
};

/**
 * Returns disjunction of the options
 *
 * @since 2.0.0
 *
 * @param {String[] | ...String} object - Names of the options
 *
 * @see DKTools.OptionManager.prototype.isSomeOptionsDisabled
 *
 * @returns {Boolean} Disjunction of the options
 */
DKTools.Scene.prototype.isSomeOptionsDisabled = function(object) {
    return this._optionManager.isSomeOptionsDisabled(object);
};

/**
 * Returns true if some option is enabled
 *
 * @since 2.0.0
 *
 * @see DKTools.OptionManager.prototype.isSomeOptionEnabled
 *
 * @returns {Boolean} Some option is enabled
 */
DKTools.Scene.prototype.isSomeOptionEnabled = function() {
    return this._optionManager.isSomeOptionEnabled();
};

/**
 * Adds a listener of change of the option
 *
 * @since 2.0.0
 *
 * @param {String} option - Name of the option
 * @param {Function} listener - Listener
 *
 * @see DKTools.OptionManager.prototype.addOptionChangeListener
 */
DKTools.Scene.prototype.addOptionChangeListener = function(option, listener) {
    this._optionManager.addOptionChangeListener(option, listener);
};

/**
 * Removes the listener of change of the option
 *
 * @since 2.0.0
 *
 * @param {String} option - Name of the option
 * @param {Function} listener - Listener
 *
 * @see DKTools.OptionManager.prototype.removeOptionsChangeListener
 */
DKTools.Scene.prototype.removeOptionChangeListener = function(option, listener) {
    this._optionManager.removeOptionChangeListener(option, listener);
};

/**
 * Turns on the option
 *
 * @since 2.0.0
 *
 * @param {String} option - Name of the option
 *
 * @see DKTools.OptionManager.prototype.enableOption
 */
DKTools.Scene.prototype.enableOption = function(option) {
    this._optionManager.enableOption(option);
};

/**
 * Turns on the options
 *
 * @since 2.0.0
 *
 * @param {String[] | ...String} object - Names of the options
 *
 * @see DKTools.OptionManager.prototype.enableOptions
 */
DKTools.Scene.prototype.enableOptions = function(object) {
    this._optionManager.enableOption(object);
};

/**
 * Turns off the option
 *
 * @since 2.0.0
 *
 * @param {String} option - Name of the option
 *
 * @see DKTools.OptionManager.prototype.disableOption
 */
DKTools.Scene.prototype.disableOption = function(option) {
    this._optionManager.disableOption(option);
};

/**
 * Turns off the options
 *
 * @since 2.0.0
 *
 * @param {String[] | ...String} object - Names of the options
 *
 * @see DKTools.OptionManager.prototype.disableOptions
 */
DKTools.Scene.prototype.disableOptions = function(object) {
    this._optionManager.disableOption(object);
};

/**
 * Switches the option
 *
 * @since 2.0.0
 *
 * @param {String} option - Name of the option
 *
 * @see DKTools.OptionManager.prototype.switchOption
 */
DKTools.Scene.prototype.switchOption = function(option) {
    this._optionManager.disableOption(option);
};

/**
 * Switches the options
 *
 * @since 2.0.0
 *
 * @param {String[] | ...String} object - Names of the options
 *
 * @see DKTools.OptionManager.prototype.switchOptions
 */
DKTools.Scene.prototype.switchOptions = function(object) {
    this._optionManager.switchOptions(object);
};

// events methods

/**
 * Clears the events
 *
 * @version 2.0.0
 *
 * @param {String[] | String} object Array with event types or event type
 *
 * @see DKTools.EventManager.prototype.clearEvents
 */
DKTools.Scene.prototype.clearEvents = function(object) {
    this._eventManager.clearEvents(object);
};

/**
 * Removes the event from a container
 * Returns true if the event was removed
 *
 * @since 2.0.0
 *
 * @param {DKTools.Event | DKTools.Animation} event - Event
 *
 * @see DKTools.EventManager.prototype.removeEvent
 *
 * @returns {Boolean} Event was removed
 */
DKTools.Scene.prototype.removeEvent = function(event) {
    return this._eventManager.removeEvent(event);
};

/**
 * Performs a callback function for the events
 *
 * @since 2.0.0
 *
 * @param {String} type - Type of the events
 * @param {Function} callback - Event processing function
 *
 * @see DKTools.EventManager.prototype.iterateEventsContainer
 */
DKTools.Scene.prototype.iterateEventsContainer = function(type, callback) {
    this._eventManager.iterateEventsContainer(type, callback);
};

/**
 * Checks the events for pause
 * Returns the conjunction of pauses of the events
 *
 * @since 2.0.0
 *
 * @param {String} type - Type of the events
 *
 * @see DKTools.EventManager.prototype.isEventsPaused
 *
 * @returns {Boolean} Conjunction of pauses of the events
 */
DKTools.Scene.prototype.isEventsPaused = function(type) {
    return this._eventManager.isEventsPaused(type);
};

/**
 * Pauses the events
 *
 * @since 2.0.0
 *
 * @param {String} type - Type of the events
 * @param {Number} duration - Duration of pause
 *
 * @see DKTools.EventManager.prototype.pauseEvents
 */
DKTools.Scene.prototype.pauseEvents = function(type, duration) {
    this._eventManager.pauseEvents(type, duration);
};

/**
 * Resumes the events
 *
 * @since 2.0.0
 *
 * @param {String} type - Type of the events
 *
 * @see DKTools.EventManager.prototype.resumeEvents
 */
DKTools.Scene.prototype.resumeEvents = function(type) {
    this._eventManager.resumeEvents(type);
};

/**
 * Finishes the events
 *
 * @since 2.0.0
 *
 * @param {String} type - Type of the events
 * @param {Boolean} [forcedSuccess] - Forced success for the finish of the events
 *
 * @see DKTools.EventManager.prototype.finishEvents
 */
DKTools.Scene.prototype.finishEvents = function(type, forcedSuccess = false) {
    this._eventManager.finishEvents(type, forcedSuccess);
};

/**
 * Stops the events
 *
 * @since 2.0.0
 *
 * @param {String} type - Type of the events
 * @param {Boolean} [forcedSuccess] - Forced success for the finish of the events
 *
 * @see DKTools.EventManager.prototype.stopEvents
 */
DKTools.Scene.prototype.stopEvents = function(type, forcedSuccess = false) {
    this._eventManager.stopEvents(type, forcedSuccess);
};

/**
 * Updates the events
 *
 * @since 2.0.0
 *
 * @see DKTools.EventManager.prototype.update
 * @see DKTools.Base.protoype.updateReadyEvents
 * @see DKTools.Base.protoype.updateUpdateEvents
 * @see DKTools.Base.protoype.updateQueueEvents
 * @see DKTools.Base.protoype.updateWheelEvents
 */
DKTools.Scene.prototype.updateEvents = function() {
    this._eventManager.update();
    this.updateReadyEvents();
    this.updateUpdateEvents();
    this.updateQueueEvents();
};

/**
 * Updates the event
 *
 * @since 2.0.0
 *
 * @param {DKTools.Event | DKTools.Animation} event - Event
 *
 * @see DKTools.EventManager.prototype.updateEvent
 */
DKTools.Scene.prototype.updateEvent = function(event) {
    this._eventManager.updateEvent(event);
};

/**
 * Updates the events from container
 *
 * @since 2.0.0
 *
 * @param {String} type - Type of the events
 *
 * @see DKTools.EventManager.prototype.updateEventsContainer
 */
DKTools.Scene.prototype.updateEventsContainer = function(type) {
    this._eventManager.updateEventsContainer(type);
};

/**
 * Updates the events with type: ready
 *
 * @since 2.0.0
 *
 * @see DKTools.EventManager.prototype.updateEventsContainer
 */
DKTools.Scene.prototype.updateReadyEvents = function() {
    if (this.isReady()) {
        this.updateEventsContainer('ready');
    }
};

/**
 * Updates the events with type: update
 *
 * @since 2.0.0
 *
 * @see DKTools.EventManager.prototype.updateEventsContainer
 */
DKTools.Scene.prototype.updateUpdateEvents = function() {
    this.updateEventsContainer('update');
};

/**
 * Updates the events with type: queue
 *
 * @since 2.0.0
 *
 * @see DKTools.EventManager.prototype.updateEventsContainer
 */
DKTools.Scene.prototype.updateQueueEvents = function() {
    const container = this.getEventsContainerByType('queue');
    const event = container[0];

    this.updateEvent(event);
};

/**
 * Returns a container for the events by event type
 *
 * @since 2.0.0
 *
 * @param {String} type - Type of the events
 *
 * @see DKTools.EventManager.prototype.getEventsContainerByType
 *
 * @returns {Array} Container for the events
 */
DKTools.Scene.prototype.getEventsContainerByType = function(type) {
    return this._eventManager.getEventsContainerByType(type);
};

/**
 * Returns a container for the events by event
 *
 * @since 2.0.0
 *
 * @param {DKTools.Event | DKTools.Animation} event - Event
 *
 * @see DKTools.EventManager.prototype.getEventsContainer
 *
 * @returns {Array} Container for the events
 */
DKTools.Scene.prototype.getEventsContainer = function(event) {
    return this._eventManager.getEventsContainer(event);
};

/**
 * Returns an index of the event in its container
 *
 * @since 2.0.0
 *
 * @param {DKTools.Event | DKTools.Animation} event - Event
 *
 * @see DKTools.EventManager.prototype.getEventIndex
 *
 * @returns {Number} Index of the event in its container
 */
DKTools.Scene.prototype.getEventIndex = function(event) {
    return this._eventManager.getEventIndex(event);
};

/**
 * Returns an array with the all events or events of a certain type
 *
 * @since 2.0.0
 *
 * @param {String} [type] - Type of the events
 *
 * @see DKTools.EventManager.prototype.getEvents
 *
 * @returns {Array} Array with the events
 */
DKTools.Scene.prototype.getEvents = function(type) {
    return this._eventManager.getEvents(type);
};

/**
 * Returns an array with the all animations or animations of a certain type
 *
 * @since 2.0.0
 *
 * @param {String} [type] - Type of animation
 *
 * @see DKTools.EventManager.prototype.getAnimations
 *
 * @returns {Array} Array with the animations
 */
DKTools.Scene.prototype.getAnimations = function(type) {
    return this._eventManager.getAnimations(type);
};

/**
 * Checks for existence of the event in the object
 * Returns true if the event exists
 *
 * @since 2.0.0
 *
 * @param {DKTools.Event | DKTools.Animation} event - Event
 *
 * @see DKTools.EventManager.prototype.hasEvent
 *
 * @returns {Boolean} Event exists
 */
DKTools.Scene.prototype.hasEvent = function(event) {
    return this._eventManager.hasEvent(event);
};

/**
 * Checks for existence of the events of a certain type
 * Returns true if the events exists
 *
 * @since 2.0.0
 *
 * @param {String} [type] - Type of the Events
 *
 * @see DKTools.EventManager.prototype.hasEvents
 *
 * @returns {Boolean} Events exists
 */
DKTools.Scene.prototype.hasEvents = function(type) {
    return this._eventManager.hasEvents(type);
};

/**
 * Checks for existence of the animation in the object
 * Returns true if the animation exists
 *
 * @since 2.0.0
 *
 * @param {DKTools.Animation} animation - Animation
 *
 * @see DKTools.EventManager.prototype.hasAnimation
 *
 * @returns {Boolean} Animation exists
 */
DKTools.Scene.prototype.hasAnimation = function(animation) {
    return this._eventManager.hasAnimation(animation);
};

/**
 * Checks for existence of the animations of a certain type
 * Returns true if the animations exists
 *
 * @since 2.0.0
 *
 * @param {String} [type] - Type of the animations
 *
 * @see DKTools.EventManager.prototype.hasAnimations
 *
 * @returns {Boolean} Animations exists
 */
DKTools.Scene.prototype.hasAnimations = function(type) {
    return this._eventManager.hasAnimations(type);
};

/**
 * Adds the event
 *
 * @since 2.0.0
 *
 * @param {DKTools.Event | Object} object - Event or object with parameters for the event
 *
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
 * @see DKTools.Event
 * @see DKTools.EventManager.prototype.addEvent
 *
 * @returns {DKTools.Event} Added event
 */
DKTools.Scene.prototype.addEvent = function(object) {
    return this._eventManager.addEvent(object);
};

/**
 * Adds the one time event
 *
 * @since 2.0.0
 *
 * @param {DKTools.Event | Object} object - Event or object with parameters for the event
 *
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
 * @see DKTools.EventManager.prototype.addOneTimeEvent
 *
 * @returns {DKTools.Event} Added event
 */
DKTools.Scene.prototype.addOneTimeEvent = function(object) {
    return this._eventManager.addOneTimeEvent(object);
};

/**
 * Adds the animation
 *
 * @since 2.0.0
 *
 * @param {DKTools.Animation} animation - Animation to add
 *
 * @see DKTools.EventManager.addAnimation
 */
DKTools.Scene.prototype.addAnimation = function(animation) {
    this._eventManager.addAnimation(animation);
};

// other methods

/**
 * Calls the callback function for the child objects
 *
 * @param {Function} callback - Function for the child objects
 */
DKTools.Scene.prototype.iterateChildren = function(callback) {
    _.forEach(this.children, callback);
};

// update methods

/**
 * Updates the scene
 *
 * @version 2.0.0
 * @override
 *
 * @see DKTools.Scene.prototype.updateChildren
 * @see DKTools.Scene.prototype.updateFade
 */
DKTools.Scene.prototype.update = function() {
    this.updateChildren();
    this.updateFade();
    this.updateEvents();
};

/**
 * Updates the child object
 *
 * @param {*} child - Child object
 */
DKTools.Scene.prototype.updateChild = function(child) {
    if (child && DKTools.Utils.isFunction(child.update)) {
        child.update();
    }
};

/**
 * Updates the child objects
 *
 * @override
 *
 * @see DKTools.Scene.prototype.iterateChildren
 * @see DKTools.Scene.prototype.updateChild
 */
DKTools.Scene.prototype.updateChildren = function() {
    this.iterateChildren(this.updateChild);
};





