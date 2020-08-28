//===========================================================================
// DKTools.Animation
//===========================================================================

/**
 * Animation class
 *
 * @class DKTools.Animation
 * @extends DKTools.Event
 *
 * @override
 *
 * @memberof DKTools
 *
 * @param {DKTools.Animation | Object} object - Animation or object with parameters
 *
 * @see DKTools.Event
 */
DKTools.Animation = class extends DKTools.Event {

    // initialize methods

    /**
     * @override
     *
     * @param {DKTools.Animation | Object} [object] - DKTools.Animation or parameters
     *
     * @see DKTools.Event.prototype.initialize
     */
    initialize(object) {

        /**
         * @private
         * @readonly
         * @type {Array}
         */
        this._actions = [];

        DKTools.Event.prototype.initialize.call(this, object);
    }

    // A methods

    /**
     * Adds the action
     *
     * @param {DKTools.Animation.Action} action - Action
     */
    addAction(action) {
        if (!action) {
            return;
        }

        if (!Number.isFinite(action.startTime)) {
            action.startTime = 0;
        }

        if (!Number.isFinite(action.endTime)) {
            action.endTime = this._repeatTime;
        }

        action.setAnimation(this);

        this._actions.push(action);
    }

    /**
     * Adds the actions
     *
     * @param {DKTools.Animation.Action[]} actions - Actions
     */
    addActions(actions) {
        _.forEach(actions, this.addAction.bind(this));
    }

    // C methods

    /**
     * Returns true if can update the action
     *
     * @private
     * @returns {Boolean} Can update the action
     */
    _canUpdateAction(action) {
        return _.inRange(this.getElapsedTime(), action.startTime, action.endTime);
    }

    // H methods

    /**
     * Returns true if the animation has the action
     *
     * @param {DKTools.Animation.Action} action - Action
     * @returns {Boolean} Animation has the action
     */
    hasAction(action) {
        return DKTools.Utils.Array.contains(this._actions, action);
    }

    /**
     * Returns true if the animation has the actions
     *
     * @returns {Boolean} Animation has the actions
     */
    hasActions() {
        return this._actions.length > 0;
    }

    // I methods

    /**
     * Returns true if the action is finished
     *
     * @param {DKTools.Animation.Action} action - Action
     * @returns {Boolean} Action is finished
     */
    isActionFinished(action) {
        return action.isStarted() && !action.isPaused() && this.getElapsedTime() >= action.endTime;
    }

    /**
     * Returns true if the action is updated
     *
     * @param {DKTools.Animation.Action} action - Action
     * @returns {Boolean} Action is updated
     */
    isActionUpdated(action) {
        return action.isStarted() && !action.isPaused() && this._canUpdateAction(action);
    }

    /**
     * Returns true if the animation if finished
     *
     * @version 1.1.0
     * @override
     * @returns {Boolean} Animation if finished
     */
    isFinished() {
        return DKTools.Event.prototype.isFinished.call(this) || !this.hasActions();
    }

    // R methods

    /**
     * Removes the action
     *
     * @param {DKTools.Animation.Action} action - Action
     */
    removeAction(action) {
        if (this.hasAction(action)) {
            DKTools.Utils.Array.remove(this._actions, action);
        }
    }

    /**
     * Repeats the animation
     *
     * @override
     */
    repeat() {
        this.repeatActions();
        DKTools.Event.prototype.repeat.call(this);
    }

    /**
     * Repeats the actions
     */
    repeatActions() {
        _.forEach(this._actions, function(action) {
            action.repeat();
        });
    }

    /**
     * Resets the animation
     *
     * @override
     */
    reset() {
        this.resetActions();
        DKTools.Event.prototype.reset.call(this);
    }

    /**
     * Resets the actions
     */
    resetActions() {
        _.forEach(this._actions, function(action) {
            action.reset();
        });
    }

    // U methods

    /**
     * Updates the animation
     *
     * @private
     * @override
     */
    _update() {
        this._updateActions();
        DKTools.Event.prototype._update.call(this);
    }

    /**
     * Updates the action
     *
     * @version 1.1.0
     * @private
     * @param {DKTools.Animation.Action} action - Action
     */
    _updateAction(action) {
        if (this._canUpdateAction(action)) {
            action.update();
        } else if (this.getElapsedTime() === action.endTime && this.isActionFinished(action)) {
            action.finish();
        }
    }

    /**
     * Updates the actions
     *
     * @private
     */
    _updateActions() {
        _.forEach(this._actions, this._updateAction.bind(this));
    }

};

// properties

Object.defineProperties(DKTools.Animation.prototype, {

    /**
     * Actions of the animation
     *
     * @readonly
     * @type {Array}
     * @memberof DKTools.Animation.prototype
     */
    actions: {
        get: function() {
            return this._actions;
        },
        configurable: true
    }

});





