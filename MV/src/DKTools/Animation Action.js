//===========================================================================
// DKTools.Animation.Action
//===========================================================================

/**
 * Animation action class
 * @class
 * @extends DKTools.Event
 * @memberof DKTools.Animation
 * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
 */
DKTools.Animation.Action = class extends DKTools.Event {

    // actions

    /**
     * Creates an action to change the frame of a target
     * Returns the action
     * Only for sprites
     * @version 10.0.0
     * @static
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     * @return {DKTools.Animation.Action} Action
     */
    static Frame(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this.target;
            const frame = target.frame;

            const x = (this._data.x - frame.x) / remainingTime;
            const y = (this._data.y - frame.y) / remainingTime;
            const width = (this._data.width - frame.width) / remainingTime;
            const height = (this._data.height - frame.height) / remainingTime;
            const newFrame = new Rectangle(frame.x + x, frame.y + y,
                frame.width + width, frame.height + height);

            target.setFrame(newFrame.x, newFrame.y, newFrame.width, newFrame.height);
        }.bind(action));

        action.setOnSuccessHandler(function() {
            this.target.setFrame(
                this._data.x, this._data.y, this._data.width, this._data.height);
        }.bind(action));

        return action;
    }

    /**
     * Creates an action to move a target
     * Returns the action
     * @version 10.0.0
     * @static
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     * @return {DKTools.Animation.Action} Action
     */
    static Move(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this.target;

            const x = (this._data.x - target.x) / remainingTime;
            const y = (this._data.y - target.y) / remainingTime;
            const newX = target.x + x;
            const newY = target.y + y;

            target.position.set(newX, newY);
        }.bind(action));

        action.setOnSuccessHandler(function() {
            this.target.position.set(this._data.x, this._data.y);
        }.bind(action));

        return action;
    }

    /**
     * Creates an action to change the opacity of a target
     * Returns the action
     * @version 10.0.0
     * @static
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     * @return {DKTools.Animation.Action} Action
     */
    static Opacity(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this.target;

            target.opacity = target.opacity + (this._data - target.opacity) / remainingTime;
        }.bind(action));

        action.setOnSuccessHandler(function() {
            this.target.opacity = this._data;
        }.bind(action));

        return action;
    }

    /**
     * Creates an action to rotate a target
     * Returns the action
     * @version 10.0.1
     * @static
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     * @return {DKTools.Animation.Action} Action
     */
    static Rotation(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this.target;
            const rotation = (this._data - target.rotation) / remainingTime;

            target.rotation = target.rotation + rotation;
        }.bind(action));

        action.setOnSuccessHandler(function() {
            this.target.rotation = this._data;
        }.bind(action));

        return action;
    }

    /**
     * Creates an action to change the scale of a target
     * Returns the action
     * Only for sprites
     * @version 10.0.0
     * @static
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     * @return {DKTools.Animation.Action} Action
     */
    static Scale(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this.target;
            const scale = target.scale;

            const x = (this._data.x - scale.x) / remainingTime;
            const y = (this._data.y - scale.y) / remainingTime;
            const newX = scale.x + x;
            const newY = scale.y + y;

            target.scale.set(newX, newY);
        }.bind(action));

        action.setOnSuccessHandler(function() {
            this.target.scale.set(this._data.x, this._data.y);
        }.bind(action));

        return action;
    }

    // properties

    /**
     * Gets animation
     * @return {DKTools.Animation} Animation
     */
    get animation() {
        return this._animation;
    }

    /**
     * Gets start time of the action
     * @return {Number} Start time of the action
     */
    get startTime() {
        return this._startTime;
    }

    /**
     * Sets start time of the action
     * @param {Number} value - Value
     */
    set startTime(value) {
        this._startTime = value;
    }

    /**
     * Gets end time of the action
     * @return {Number} End time of the action
     */
    get endTime() {
        return this._endTime;
    }

    /**
     * Sets end time of the action
     * @param {Number} value - Value
     */
    set endTime(value) {
        this._endTime = value;
    }

    /**
     * Gets data of the action
     * @return {*} Data of the action
     */
    get data() {
        return this._data;
    }

    /**
     * Gets the target
     * @return {DKTools.Sprite | DKTools.Window | DKTools.Scene | null} Target
     */
    get target() {
        return this._target || (this._animation ? this._animation.target : null);
    }

    // initialize methods

    /**
     * Initializes the action
     * @override
     * @param {Object} object - Parameters
     * @param {Number} object.startTime - Start time of the action
     * @param {Number} object.endTime - End time of the action
     * @param {*} object.data - Data of the action
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

        super.initialize.apply(this, arguments);
    }

    // G methods

    /**
     * Returns the elapsed time
     * @override
     * @return {Number} Elapsed time
     */
    getElapsedTime() {
        return this._animation.getElapsedTime() - this._startTime;
    }

    /**
     * Returns the remaining time
     * @override
     * @return {Number} Remaining time
     */
    getRemainingTime() {
        return this._endTime - this._animation.getElapsedTime();
    }

    // I methods

    /**
     * Returns true if the action if finished
     * @override
     * @return {Boolean} Action if finished
     */
    isFinished() {
        return this._animation.isActionFinished(this);
    }

    /**
     * Returns true if the action is updated
     * @override
     * @return {Boolean} Action is updated
     */
    isUpdated() {
        return this._animation.isActionUpdated(this);
    }

    // R methods

    /**
     * Removes the action
     * @override
     */
    remove() {
        this._animation.removeAction(this);
    }

    /**
     * Repeats the action
     * @override
     */
    repeat() {
        this._callOnRepeatHandler();
    }

    /**
     * Resets the action
     * @override
     */
    reset() {
        this._callOnResetHandler();
    }

    // S methods

    /**
     * Sets the animation
     * @param {DKTools.Animation} animation - Animation
     */
    setAnimation(animation) {
        this._animation = animation;
    }

};


