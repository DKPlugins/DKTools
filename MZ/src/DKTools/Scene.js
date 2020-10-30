//===========================================================================
// DKTools.Scene
//===========================================================================

/**
 * @class
 * @extends Scene_Base
 */
DKTools.Scene = function() {
    this.initialize.apply(this, arguments);
};

DKTools.Scene.prototype = Object.create(Scene_Base.prototype);
DKTools.Scene.prototype.constructor = DKTools.Scene;

// initialize

/**
 * Initializes a class object
 * @override
 */
DKTools.Scene.prototype.initialize = function() {
    /**
     * @private
     * @readonly
     * @type {DKTools.EventsManager}
     */
    this._eventsManager = new DKTools.EventsManager(this);

    Scene_Base.prototype.initialize.apply(this, arguments);
};

// A methods

/**
 * Adds the event
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
 * @return {DKTools.Event} Added event
 */
DKTools.Scene.prototype.addEvent = function(object) {
    return this._eventsManager.addEvent(object);
};

/**
 * Adds the one time event
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
 * @return {DKTools.Event} Added event
 */
DKTools.Scene.prototype.addOneTimeEvent = function(object) {
    return this._eventsManager.addOneTimeEvent(object);
};

/**
 * Adds the animation
 * @param {DKTools.Animation} animation - Animation to add
 */
DKTools.Scene.prototype.addAnimation = function(animation) {
    this._eventsManager.addAnimation(animation);
};

// C methods

/**
 * Creates all
 * @override
 */
DKTools.Scene.prototype.create = function() {
    Scene_Base.prototype.create.apply(this, arguments);
    this.createBackground();
    this.createAllSprites();
    this.createWindowLayer();
    this.createAllWindows();

    if (ConfigManager.touchUI) {
        this.createUI();
    }

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
 * Creates the mobile UI
 */
DKTools.Scene.prototype.createUI = function() {
    if (this.needsCancelButton()) {
        this.createCancelButton();
    }

    if (this.needsPageButtons()) {
        this.createPageButtons();
    }
};

/**
 * Creates the foreground
 */
DKTools.Scene.prototype.createForeground = function() {
    // to be overridden by plugins
};

/**
 * Creates the cancel button
 */
DKTools.Scene.prototype.createCancelButton = function() {
    this._cancelButton = new Sprite_Button('cancel');
    this._cancelButton.move(
        Graphics.boxWidth - this._cancelButton.width - 4, this.buttonY());

    this.addWindow(this._cancelButton);
};

/**
 * Creates the page buttons
 */
DKTools.Scene.prototype.createPageButtons = function() {
    const buttonY = this.buttonY();

    this._pageupButton = new Sprite_Button('pageup');
    this._pageupButton.move(4, buttonY);

    this._pagedownButton = new Sprite_Button('pagedown');
    this._pagedownButton.move(
        this._pageupButton.x + this._pageupButton.width + 4, buttonY);

    this.addWindow(this._pageupButton);
    this.addWindow(this._pagedownButton);

    this._pageupButton.setClickHandler(this.onPageUpButton.bind(this));
    this._pagedownButton.setClickHandler(this.onPageDownButton.bind(this));
};

// H methods

/**
 * Returns true if the scene has the layer of windows
 * @return {Boolean} Scene has the layer of windows
 */
DKTools.Scene.prototype.hasWindowLayer = function() {
    return !!this._windowLayer;
};

// I methods

/**
 * Returns true if the object (parameter) is child of scene
 * @param {Sprite | Window} object - Object
 * @return {Boolean} Object (parameter) is child of scene
 */
DKTools.Scene.prototype.isChild = function(object) {
    if (object instanceof Window && this.hasWindowLayer()) {
        return this._windowLayer.children.includes(object);
    }

    return this.children.includes(object);
};

// N methods

/**
 * Returns true if needs create the cancel button
 * @return {Boolean} Needs create the cancel button
 */
DKTools.Scene.prototype.needsCancelButton = function() {
    return false;
};

/**
 * Returns true if needs create the page buttons
 * @return {Boolean} Needs create the page buttons
 */
DKTools.Scene.prototype.needsPageButtons = function() {
    return false;
};

// O methods

DKTools.Scene.prototype.onPageUpButton = function() {
    // to be overridden by plugins
};

DKTools.Scene.prototype.onPageDownButton = function() {
    // to be overridden by plugins
};

// R methods

/**
 * Removes the window from the scene
 * Returns true if the window is removed
 * @param {DKTools.Window | *} window - Window to remove
 * @return {Boolean} Window is removed
 */
DKTools.Scene.prototype.removeWindow = function(window) {
    if (this.hasWindowLayer() && this.isChild(window)) {
        this._windowLayer.removeChild(window);

        return true;
    }

    return false;
};

// U methods

/**
 * Updates the scene
 * @override
 */
DKTools.Scene.prototype.update = function() {
    Scene_Base.prototype.update.apply(this, arguments);
    this.updateEvents();
};

/**
 * Updates the events
 */
DKTools.Scene.prototype.updateEvents = function() {
    this._eventsManager.update();
    this.updateReadyEvents();
    this.updateUpdateEvents();
    this.updateQueueEvents();
};

/**
 * Updates the events with type: ready
 */
DKTools.Scene.prototype.updateReadyEvents = function() {
    if (this.isReady()) {
        this._eventsManager.updateEventsContainer('ready');
    }
};

/**
 * Updates the events with type: update
 */
DKTools.Scene.prototype.updateUpdateEvents = function() {
    this._eventsManager.updateEventsContainer('update');
};

/**
 * Updates the events with type: queue
 */
DKTools.Scene.prototype.updateQueueEvents = function() {
    const container = this._eventsManager.getEventsContainerByType('queue');
    const event = container[0];

    if (event) {
        event.update();
    }
};


