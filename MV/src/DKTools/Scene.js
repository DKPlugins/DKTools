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

    Scene_Base.prototype.initialize.apply(this, arguments);
};

// A methods

/**
 * Adds children objects to processing
 *
 * @deprecated 9.2.0
 * @private
 */
DKTools.Scene.prototype._addAllChildren = function() {
    // to be overridden by plugins
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
 * @see DKTools.EventsManager.prototype.addEvent
 *
 * @returns {DKTools.Event} Added event
 */
DKTools.Scene.prototype.addEvent = function(object) {
    return this._eventsManager.addEvent(object);
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
 * @see DKTools.EventsManager.prototype.addOneTimeEvent
 *
 * @returns {DKTools.Event} Added event
 */
DKTools.Scene.prototype.addOneTimeEvent = function(object) {
    return this._eventsManager.addOneTimeEvent(object);
};

/**
 * Adds the animation
 *
 * @since 2.0.0
 *
 * @param {DKTools.Animation} animation - Animation to add
 *
 * @see DKTools.EventsManager.addAnimation
 */
DKTools.Scene.prototype.addAnimation = function(animation) {
    this._eventsManager.addAnimation(animation);
};

// C methods

/**
 * Clears all data
 *
 * @private
 */
DKTools.Scene.prototype._clearAll = function() {
    // to be overridden by plugins
};

/**
 * Creates all
 *
 * @version 9.0.0
 * @private
 *
 * @see DKTools.Scene.prototype._createOptionManager
 * @see DKTools.Scene.prototype._createEventManager
 */
DKTools.Scene.prototype._createAll = function() {
    this._createOptionsManager();
    this._createEventsManager();
};

/**
 * Creates the option manager
 *
 * @deprecated 9.2.0
 * @since 9.0.0
 * @private
 */
DKTools.Scene.prototype._createOptionsManager = function() {
    /**
     * @private
     * @readonly
     * @type {DKTools.OptionsManager}
     */
    this._optionsManager = new DKTools.OptionsManager();
};

/**
 * Creates the event manager
 *
 * @since 9.0.0
 * @private
 *
 * @see DKTools.EventsManager
 */
DKTools.Scene.prototype._createEventsManager = function() {
    /**
     * @private
     * @readonly
     * @type {DKTools.EventsManager}
     */
    this._eventsManager = new DKTools.EventsManager(this);
};

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
    Scene_Base.prototype.create.apply(this, arguments);
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
    // to be overridden by plugins
};

/**
 * Creates all sprites
 */
DKTools.Scene.prototype.createAllSprites = function() {
    // to be overridden by plugins
};

/**
 * Creates all windows
 */
DKTools.Scene.prototype.createAllWindows = function() {
    // to be overridden by plugins
};

/**
 * Creates the foreground
 */
DKTools.Scene.prototype.createForeground = function() {
    // to be overridden by plugins
};

// D methods

/**
 * Destroys the scene
 *
 * @version 8.0.0
 *
 * @override
 *
 * @param {Object | Boolean} [options] - Destroy options
 *
 * @see Stage.prototype.destroy
 */
DKTools.Scene.prototype.destroy = function(options) {
    this._clearAll();

    this._eventsManager.clearEvents();

    this.deactivate();

    Stage.prototype.destroy.call(this, options);
};

// H methods

/**
 * Returns true if the scene has the layer of windows
 *
 * @returns {Boolean} Scene has the layer of windows
 */
DKTools.Scene.prototype.hasWindowLayer = function() {
    return !!this._windowLayer;
};

// I methods

/**
 * Calls the callback function for the child objects
 *
 * @param {Function} callback - Function for the child objects
 */
DKTools.Scene.prototype.iterateChildren = function(callback) {
    this.children.forEach(callback);
};

/**
 * Returns true if the object (parameter) is child of scene
 *
 * @param {Sprite | Window} object - Object
 *
 * @returns {Boolean} Object (parameter) is child of scene
 */
DKTools.Scene.prototype.isChild = function(object) {
    if (object instanceof Window && this.hasWindowLayer()) {
        return this._windowLayer.children.includes(object);
    }

    return this.children.includes(object);
};

/**
 * Returns true if the scene was destroyed
 *
 * @since 8.0.0
 *
 * @returns {Boolean} Scene was destroyed
 */
DKTools.Scene.prototype.isDestroyed = function() {
    return this._destroyed;
};

// R methods

/**
 * Removes the window from the scene
 * Returns true if the window is removed
 *
 * @version 8.3.0
 *
 * @param {DKTools.Window | *} window - Window to remove
 *
 * @returns {Boolean} Window is removed
 */
DKTools.Scene.prototype.removeWindow = function(window) {
    if (this.hasWindowLayer() && this.isChild(window)) {
        this._windowLayer.removeChild(window);

        return true;
    }

    return false;
};

// S methods

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
 * @deprecated 9.2.0
 * @since 2.0.0
 * @private
 */
DKTools.Scene.prototype._setupOptions = function() {
    // to be overridden by plugins
};

/**
 * Sets the events
 *
 * @since 2.0.0
 * @private
 */
DKTools.Scene.prototype._setupEvents = function() {
    // to be overridden by plugins
};

/**
 * Sets the animations
 *
 * @since 2.0.0
 * @private
 */
DKTools.Scene.prototype._setupAnimations = function() {
    // to be overridden by plugins
};

/**
 * Starts the scene
 *
 * @override
 */
DKTools.Scene.prototype.start = function() {
    Scene_Base.prototype.start.apply(this, arguments);
    this.startAllSprites();
    this.startAllWindows();
};

/**
 * Starts all sprites
 */
DKTools.Scene.prototype.startAllSprites = function() {
    // to be overridden by plugins
};

/**
 * Starts all windows
 */
DKTools.Scene.prototype.startAllWindows = function() {
    // to be overridden by plugins
};

/**
 * Stops the scene
 *
 * @override
 *
 * @see Scene_Base.prototype.stop
 * @see DKTools.Scene.prototype.stopAll
 */
DKTools.Scene.prototype.stop = function() {
    Scene_Base.prototype.stop.apply(this, arguments);
    this.stopAll();
};

/**
 * Stops all
 */
DKTools.Scene.prototype.stopAll = function() {
    // to be overridden by plugins
};

// T methods

/**
 * Terminates the scene
 *
 * @override
 *
 * @see Scene_Base.prototype.terminate
 * @see DKTools.Scene.prototype.stopAll
 */
DKTools.Scene.prototype.terminate = function() {
    Scene_Base.prototype.terminate.apply(this, arguments);
    this.terminateAll();
};

/**
 * Terminates all
 */
DKTools.Scene.prototype.terminateAll = function() {
    // to be overridden by plugins
};

// U methods

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

/**
 * Updates the events
 *
 * @since 2.0.0
 *
 * @see DKTools.EventsManager.prototype.update
 * @see DKTools.Base.protoype.updateReadyEvents
 * @see DKTools.Base.protoype.updateUpdateEvents
 * @see DKTools.Base.protoype.updateQueueEvents
 * @see DKTools.Base.protoype.updateWheelEvents
 */
DKTools.Scene.prototype.updateEvents = function() {
    this._eventsManager.update();
    this.updateReadyEvents();
    this.updateUpdateEvents();
    this.updateQueueEvents();
};

/**
 * Updates the events with type: ready
 *
 * @version 8.3.0
 * @since 2.0.0
 *
 * @see DKTools.EventsManager.prototype.updateEventsContainer
 */
DKTools.Scene.prototype.updateReadyEvents = function() {
    if (this.isReady()) {
        this._eventsManager.updateEventsContainer('ready');
    }
};

/**
 * Updates the events with type: update
 *
 * @version 8.3.0
 * @since 2.0.0
 *
 * @see DKTools.EventsManager.prototype.updateEventsContainer
 */
DKTools.Scene.prototype.updateUpdateEvents = function() {
    this._eventsManager.updateEventsContainer('update');
};

/**
 * Updates the events with type: queue
 *
 * @version 8.3.0
 * @since 2.0.0
 *
 * @see DKTools.EventsManager.prototype.updateEventsContainer
 */
DKTools.Scene.prototype.updateQueueEvents = function() {
    const container = this._eventsManager.getEventsContainerByType('queue');
    const event = container[0];

    this._eventsManager.updateEvent(event);
};




