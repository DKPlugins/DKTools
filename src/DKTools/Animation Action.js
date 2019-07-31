//===========================================================================
// DKTools.Animation.Action
//===========================================================================

/**
 * Animation action class
 *
 * @class DKTools.Animation.Action
 * @extends DKTools.Event
 *
 * @override
 *
 * @memberof DKTools.Animation
 *
 * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
 *
 * @see DKTools.Event
 */
DKTools.Animation.Action = class extends DKTools.Event {

    // actions

    /**
     * Creates an action to change the anchor of a target
     * Returns the action
     * Only for sprites
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static Anchor(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this._target;
            const data = this._data;
            const anchor = target.anchor;

            const x = (data.x - anchor.x) / remainingTime;
            const y = (data.y - anchor.y) / remainingTime;
            const newX = anchor.x + x;
            const newY = anchor.y + y;

            target.setAnchor(newX, newY);
        }.bind(action));

        return action;
    }

    /**
     * Creates an action to close a target
     * Returns the action
     * Only for windows
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static Close(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this._target;

            const openness = -target.openness / remainingTime;
            const newOpennes = target.openness + openness;

            target.openness = newOpennes;
        }.bind(action));

        return action;
    }

    /**
     * Creates an action to change the frame of a target
     * Returns the action
     * Only for sprites
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static Frame(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this._target;
            const data = this._data;
            const frame = target.frame;

            const x = (data.x - frame.x) / remainingTime;
            const y = (data.y - frame.y) / remainingTime;
            const width = (data.width - frame.width) / remainingTime;
            const height = (data.height - frame.height) / remainingTime;
            const newFrame = new Rectangle(frame.x + x, frame.y + y, frame.width + width, frame.height + height);

            target.setFrame(newFrame);
        }.bind(action));

        return action;
    }

    /**
     * Creates an action to move a target
     * Returns the action
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static Move(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this._target;

            const x = (this._data.x - target.x) / remainingTime;
            const y = (this._data.y - target.y) / remainingTime;
            const newX = target.x + x;
            const newY = target.y + y;

            target.move(newX, newY);
        }.bind(action));

        return action;
    }

    /**
     * Creates an action to change the opacity of a target
     * Returns the action
     * Only for sprites
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static OpacitySprite(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this._target;

            const opacity = (this._data - target.opacity) / remainingTime;
            const newOpacity = target.opacity + opacity;

            target.setOpacity(newOpacity);
        }.bind(action));

        return action;
    }

    /**
     * Creates an action to change the opacity of a target
     * Returns the action
     * Only for windows
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static OpacityWindow(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this._target;

            const windowOpacity = (this._data.windowOpacity - target.windowOpacity) / remainingTime;
            const contentsOpacity = (this._data.contentsOpacity - target.contentsOpacity) / remainingTime;
            const frameOpacity = (this._data.frameOpacity - target.frameOpacity) / remainingTime;
            const backOpacity = (this._data.backOpacity - target.backOpacity) / remainingTime;

            const newOpacity = {
                windowOpacity: target.windowOpacity + windowOpacity,
                contentsOpacity: target.contentsOpacity + contentsOpacity,
                frameOpacity: target.frameOpacity + frameOpacity,
                backOpacity: target.backOpacity + backOpacity
            };

            target.setOpacity(newOpacity);
        }.bind(action));

        return action;
    }

    /**
     * Creates an action to open a target
     * Returns the action
     * Only for windows
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static Open(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this._target;
            const openness = (255 - target.openness) / remainingTime;

            target.openness = target.openness + openness;
        }.bind(action));

        return action;
    }

    /**
     * Creates an action to change the pivot of a target
     * Returns the action
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static Pivot(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this._target;
            const data = this._data;
            const pivot = target.pivot;

            const x = (data.x - pivot.x) / remainingTime;
            const y = (data.y - pivot.y) / remainingTime;
            const newX = pivot.x + x;
            const newY = pivot.y + y;

            target.setPivot(newX, newY);
        }.bind(action));

        return action;
    }

    /**
     * Creates an action to rotate a target
     * Returns the action
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static Rotation(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this._target;

            const rotation = (this._data - target.rotation) / remainingTime;
            const newRotation = target.rotation + rotation;

            target.setRotation(newRotation);
        }.bind(action));

        return action;
    }

    /**
     * Creates an action to change the scale of a target
     * Returns the action
     * Only for sprites
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static Scale(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this._target;
            const data = this._data;
            const scale = target.scale;

            const x = (data.x - scale.x) / remainingTime;
            const y = (data.y - scale.y) / remainingTime;
            const newX = scale.x + x;
            const newY = scale.y + y;

            target.setScale(newX, newY);
        }.bind(action));

        return action;
    }

    /**
     * Creates an action to change the skew of a target
     * Returns the action
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static Skew(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this._target;
            const data = this._data;
            const skew = target.skew;

            const x = (data.x - skew.x) / remainingTime;
            const y = (data.y - skew.y) / remainingTime;
            const newX = skew.x + x;
            const newY = skew.y + y;

            target.setSkew(newX, newY);
        }.bind(action));

        return action;
    }

    /**
     * Creates an action to play a sound
     * Returns the action
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static Sound(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const audio = this._data;

            if (!audio.isPlaying()) {
                audio.play();
            }
        }.bind(action));

        return action;
    }

    /**
     * Creates an action to change the tint of a target
     * Returns the action
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static Tint(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this._target;

            const tint = (this._data - target.tint) / remainingTime;
            const newTint = target.tint + tint;

            target.setTint(newTint);
        }.bind(action));

        return action;
    }

    /**
     * Creates an action to change the tone of a target
     * Returns the action
     * Only for windows
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static Tone(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this._target;
            const tone = target.tone;

            const toneR = (this._data[0] - tone[0]) / remainingTime;
            const toneG = (this._data[1] - tone[1]) / remainingTime;
            const toneB = (this._data[2] - tone[2]) / remainingTime;

            const newR = tone[0] + toneR;
            const newG = tone[1] + toneG;
            const newB = tone[2] + toneB;

            target.setTone([newR, newG, newB]);
        }.bind(action));

        return action;
    }

    // initialize methods

    /**
     * @override
     *
     * @param {Object} object - Parameters
     *
     * @param {Number} object.startTime - Start time of the action
     * @param {Number} object.endTime - End time of the action
     * @param {*} object.data - Data of the action
     *
     * @see DKTools.Event.prototype.initialize
     */
    initialize(object) {
        object = object || {};

        /**
         * @private
         * @readonly
         * @type {DKTools.Animation}
         */
        this._animation = null;

        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._startTime = object.startTime;

        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._endTime = object.endTime;

        /**
         * @private
         * @readonly
         * @type {*}
         */
        this._data = object.data;

        DKTools.Event.prototype.initialize.call(this, object);
    }

    // G methods

    /**
     * Returns the elapsed time
     *
     * @override
     * @returns {Number} Elapsed time
     */
    getElapsedTime() {
        return this._animation.getElapsedTime() - this._startTime;
    }

    /**
     * Returns the remaining time
     *
     * @override
     * @returns {Number} Remaining time
     */
    getRemainingTime() {
        return this._endTime - this._animation.getElapsedTime();
    }

    // I methods

    /**
     * Returns true if the action if finished
     *
     * @override
     * @returns {Boolean} Action if finished
     */
    isFinished() {
        return this._animation.isActionFinished(this);
    }

    /**
     * Returns true if the action is updated
     *
     * @override
     * @returns {Boolean} Action is updated
     */
    isUpdated() {
        return this._animation.isActionUpdated(this);
    }

    // R methods

    /**
     * Removes the action
     *
     * @override
     */
    remove() {
        this._animation.removeAction(this);
    }

    /**
     * Repeats the action
     *
     * @override
     */
    repeat() {
        this._callOnRepeatHandler();
    }

    /**
     * Resets the action
     *
     * @override
     */
    reset() {
        this._callOnResetHandler();
    }

    // S methods

    /**
     * Sets the animation
     *
     * @param {DKTools.Animation} animation - Animation
     */
    setAnimation(animation) {
        this._animation = animation;
    }

};

// properties

Object.defineProperties(DKTools.Animation.Action.prototype, {

    /**
     * Animation
     *
     * @readonly
     * @type {DKTools.Animation}
     * @memberof DKTools.Animation.Action.prototype
     */
    animation: {
        get: function() {
            return this._animation;
        },
        configurable: true
    },

    /**
     * Start time of the action
     *
     * @type {Number}
     * @memberof DKTools.Animation.Action.prototype
     */
    startTime: {
        get: function() {
            return this._startTime;
        },
        set: function(value) {
            this._startTime = value;
        },
        configurable: true
    },

    /**
     * End time of the action
     *
     * @type {Number}
     * @memberof DKTools.Animation.Action.prototype
     */
    endTime: {
        get: function() {
            return this._endTime;
        },
        set : function(value) {
            this._endTime = value;
        },
        configurable: true
    },

    /**
     * Data of the action
     *
     * @readonly
     * @type {*}
     * @memberof DKTools.Animation.Action.prototype
     */
    data: {
        get: function() {
            return this._data;
        },
        configurable: true
    }

});





