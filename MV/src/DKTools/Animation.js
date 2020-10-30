//===========================================================================
// DKTools.Animation
//===========================================================================

/**
 * Animation class
 * @class
 * @extends DKTools.Event
 * @memberof DKTools
 * @param {Object} object - object with parameters
 */
DKTools.Animation = class extends DKTools.Event {

    // properties

    /**
     * Gets actions of the animation
     * @return {DKTools.Animation.Action[]} Actions of the animation
     */
    get actions() {
        return this._actions;
    }

    // initialize methods

    /**
     * Initializes the animation
     * @override
     * @param {DKTools.Animation | Object} [object] - DKTools.Animation or parameters
     */
    initialize(object) {

        /**
         * @private
         * @readonly
         * @type {Array}
         */
        this._actions = [];

        super.initialize.apply(this, arguments);
    }

    // A methods

    /**
     * Adds the action
     * @param {DKTools.Animation.Action} action - Action
     */
    addAction(action) {
        if (!action) {
            return;
        }

        if (!Number.isFinite(action.startTime)) {
            action.startTime = 0;
        }

        if (!Number.isFinite(action.endTime) && Number.isFinite(this._repeatTime)) {
            action.endTime = this._repeatTime;
        }

        action.setAnimation(this);

        this._actions.push(action);
    }

    /**
     * Adds the actions
     * @param {DKTools.Animation.Action[]} actions - Actions
     */
    addActions(actions) {
        actions.forEach((action) => {
            this.addAction(action);
        });
    }

    // C methods

    /**
     * Returns true if can update the action
     *
     * @private
     * @return {Boolean} Can update the action
     */
    _canUpdateAction(action) {
        return _.inRange(this.getElapsedTime(), action.startTime, action.endTime);
    }

    // H methods

    /**
     * Returns true if the animation has the action
     * @param {DKTools.Animation.Action} action - Action
     * @return {Boolean} Animation has the action
     */
    hasAction(action) {
        return this._actions.includes(action);
    }

    /**
     * Returns true if the animation has the actions
     * @return {Boolean} Animation has the actions
     */
    hasActions() {
        return this._actions.length > 0;
    }

    // I methods

    /**
     * Returns true if the action is finished
     * @param {DKTools.Animation.Action} action - Action
     * @return {Boolean} Action is finished
     */
    isActionFinished(action) {
        return action.isStarted() && !action.isPaused() && this.getElapsedTime() + 1 >= action.endTime;
    }

    /**
     * Returns true if the action is updated
     * @param {DKTools.Animation.Action} action - Action
     * @return {Boolean} Action is updated
     */
    isActionUpdated(action) {
        return action.isStarted() && !action.isPaused() && this._canUpdateAction(action);
    }

    /**
     * Returns true if the animation if finished
     * @version 1.1.0
     * @override
     * @return {Boolean} Animation if finished
     */
    isFinished() {
        return super.isFinished.apply(this, arguments) || !this.hasActions();
    }

    // R methods

    /**
     * Removes the action
     * @param {DKTools.Animation.Action} action - Action
     */
    removeAction(action) {
        if (this.hasAction(action)) {
            _.pull(this._actions, action);
        }
    }

    /**
     * Repeats the animation
     * @override
     */
    repeat() {
        this.repeatActions();

        super.repeat.apply(this, arguments);
    }

    /**
     * Repeats the actions
     */
    repeatActions() {
        this._actions.forEach((action) => {
            action.repeat();
        });
    }

    /**
     * Resets the animation
     * @override
     */
    reset() {
        this.resetActions();

        super.reset.apply(this, arguments);
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
     * @private
     * @override
     * @param {*} [data] - Data
     */
    _update(data) {
        this._updateActions();

        super._update.apply(this, arguments);
    }

    /**
     * Updates the action
     * @private
     * @param {DKTools.Animation.Action} action - Action
     */
    _updateAction(action) {
        if (this._canUpdateAction(action)) {
            action.update();
        } else if (this.getElapsedTime() + 1 === action.endTime && this.isActionFinished(action)) {
            action.finish();
        }
    }

    /**
     * Updates the actions
     * @private
     */
    _updateActions() {
        this._actions.forEach((action) => {
            this._updateAction(action);
        });
    }

};


