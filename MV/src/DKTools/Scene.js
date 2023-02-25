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
 * @return {DKTools.Event} Added event
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
 * @return {DKTools.Event} Added event
 */
DKTools.Scene.prototype.addOneTimeEvent = function(object) {
    return this._eventsManager.addOneTimeEvent(object);
};

/**
 * Adds the animation
 * @since 2.0.0
 * @param {DKTools.Animation} animation - Animation to add
 */
DKTools.Scene.prototype.addAnimation = function(animation) {
    this._eventsManager.addAnimation(animation);
};

// C methods

/**
 * Returns calculated window height
 * @since 11.1.0
 * @param {Number} [numLines=1] - Window lines
 * @param {Boolean} [selectable=false] - Selectable window
 * @return {Number} Calculated window height
 */
DKTools.Scene.prototype.calcWindowHeight = function(numLines = 1, selectable = false) {
    if (selectable) {
        return Window_Selectable.prototype.fittingHeight(numLines);
    } else {
        return Window_Base.prototype.fittingHeight(numLines);
    }
};

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
    this.createForeground();
};

/**
 * Creates the background
 * @version 11.1.0
 */
DKTools.Scene.prototype.createBackground = function() {
    if (this.needsBackground()) {
        Scene_MenuBase.prototype.createBackground.apply(this, arguments);
    }
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
 * Creates the help window
 * @since 11.1.0
 * @param {Function} windowClass - Window class
 * @param {Number} [rows=2] - Visible rows
 */
DKTools.Scene.prototype.createHelpWindow = function(windowClass = Window_Help, rows = 2) {
    if (windowClass === Window_Help) {
        this._helpWindow = new Window_Help(rows);
    } else {
        const rect = this.helpWindowRect(rows);

        this._helpWindow = new windowClass(rect.x, rect.y, rect.width, rect.height);
    }

    this.addWindow(this._helpWindow);
};

/**
 * Creates the foreground
 */
DKTools.Scene.prototype.createForeground = function() {
    // to be overridden by plugins
};

// H methods

/**
 * Returns true if the scene has the layer of windows
 * @return {Boolean} Scene has the layer of windows
 */
DKTools.Scene.prototype.hasWindowLayer = function() {
    return !!this._windowLayer;
};

/**
 * @since 11.1.0
 * @return {Number}
 */
DKTools.Scene.prototype.helpAreaTop = function() {
    return 0;
};

/**
 * @since 11.1.0
 * @return {Number}
 */
DKTools.Scene.prototype.helpAreaBottom = function() {
    return this.helpAreaTop() + this.helpAreaHeight();
};

/**
 * @since 11.1.0
 * @return {Number}
 */
DKTools.Scene.prototype.helpAreaHeight = function() {
    return this.calcWindowHeight(2, false);
};

/**
 * Returns the rect of the help window
 * @since 11.1.0
 * @param {Number} rows - Visible rows
 * @return {Rectangle} Rect of the help window
 */
DKTools.Scene.prototype.helpWindowRect = function(rows) {
    return new Rectangle(0, 0, Graphics.boxWidth, this.calcWindowHeight(rows));
};

// I methods

/**
 * Returns true if the object (parameter) is child of scene
 *
 * @param {Sprite | Window} object - Object
 *
 * @return {Boolean} Object (parameter) is child of scene
 */
DKTools.Scene.prototype.isChild = function(object) {
    if (object instanceof Window && this.hasWindowLayer()) {
        return this._windowLayer.children.includes(object);
    }

    return this.children.includes(object);
};

// M methods

/**
 * @since 11.1.0
 * @return {Number}
 */
DKTools.Scene.prototype.mainAreaTop = function() {
    return this.helpAreaBottom();
};

/**
 * @since 11.1.0
 * @return {Number}
 */
DKTools.Scene.prototype.mainAreaBottom = function() {
    return this.mainAreaTop() + this.mainAreaHeight();
};

/**
 * @since 11.1.0
 * @return {Number}
 */
DKTools.Scene.prototype.mainAreaHeight = function() {
    return Graphics.boxHeight - this.helpAreaHeight();
};

// N methods

/**
 * Returns true if needs create the background
 * @since 11.1.0
 * @return {Boolean} Needs create the background
 */
DKTools.Scene.prototype.needsBackground = function() {
    return false;
};

// R methods

/**
 * Removes the window from the scene
 * Returns true if the window is removed
 * @version 8.3.0
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
 * @version 10.0.0
 * @override
 */
DKTools.Scene.prototype.update = function() {
    Scene_Base.prototype.update.apply(this, arguments);
    this.updateEvents();
};

/**
 * Updates the events
 * @since 2.0.0
 */
DKTools.Scene.prototype.updateEvents = function() {
    this._eventsManager.update();
    this.updateReadyEvents();
    this.updateUpdateEvents();
    this.updateQueueEvents();
};

/**
 * Updates the events with type: ready
 * @version 8.3.0
 * @since 2.0.0
 */
DKTools.Scene.prototype.updateReadyEvents = function() {
    if (this.isReady()) {
        this._eventsManager.updateEventsContainer('ready');
    }
};

/**
 * Updates the events with type: update
 * @version 8.3.0
 * @since 2.0.0
 */
DKTools.Scene.prototype.updateUpdateEvents = function() {
    this._eventsManager.updateEventsContainer('update');
};

/**
 * Updates the events with type: queue
 * @version 8.3.0
 * @since 2.0.0
 */
DKTools.Scene.prototype.updateQueueEvents = function() {
    const container = this._eventsManager.getEventsContainerByType('queue');
    const event = container[0];

    if (event) {
        event.update();
    }
};


