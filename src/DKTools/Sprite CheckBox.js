//===========================================================================
// DKTools.Sprite.CheckBox
//===========================================================================

DKTools.Sprite.CheckBox.prototype = Object.create(DKTools.Sprite.Button.prototype);
DKTools.Sprite.CheckBox.prototype.constructor = DKTools.Sprite.CheckBox;

// properties

Object.defineProperties(DKTools.Sprite.CheckBox.prototype, {

    /**
     * Checked
     *
     * @readonly
     * @type {Boolean}
     * @memberof DKTools.Sprite.CheckBox.prototype
     */
    checked: {
        get: function() {
            return this._checked;
        },
        configurable: true
    },

    /**
     * Checked graphic
     *
     * @readonly
     * @type {Bitmap | String | Object}
     * @memberof DKTools.Sprite.CheckBox.prototype
     */
    checkedGraphic: {
        get: function() {
            return this._checkedGraphic;
        },
        configurable: true
    },

    /**
     * Unchecked graphic
     *
     * @readonly
     * @type {Bitmap | String | Object}
     * @memberof DKTools.Sprite.CheckBox.prototype
     */
    uncheckedGraphic: {
        get: function() {
            return this._uncheckedGraphic;
        },
        configurable: true
    },

});

// standard methods

/**
 * Returns the stadnard checked
 *
 * @returns {Boolean} Checked
 */
DKTools.Sprite.CheckBox.prototype.standardChecked = function() {
    return false;
};

/**
 * Returns the stadnard checked graphic
 *
 * @returns {null} Checked graphic
 */
DKTools.Sprite.CheckBox.prototype.standardCheckedGraphic = function() {
    return null;
};

/**
 * Returns the stadnard unchecked graphic
 *
 * @returns {null} Unchecked graphic
 */
DKTools.Sprite.CheckBox.prototype.standardUncheckedGraphic = function() {
    return null;
};

// setup methods

/**
 * Sets all parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 *
 * @param {Boolean} [object.checked] - Checked
 * @param {Bitmap | String | Object} [object.checkedGraphic] - Checked graphic
 * @param {Bitmap | String | Object} [object.uncheckedGraphic] - Unchecked graphic
 *
 * @see DKTools.Sprite.Button.prototype.setupAll
 * @see DKTools.Sprite.CheckBox.prototype.setupChecked
 * @see DKTools.Sprite.CheckBox.prototype.setupCheckedGraphic
 * @see DKTools.Sprite.CheckBox.prototype.setupUncheckedGraphic
 */
DKTools.Sprite.CheckBox.prototype.setupAll = function(object = {}) {
    object = object || {};

    DKTools.Sprite.Button.prototype.setupAll.call(this, object);

    this.setupChecked(object.checked);
    this.setupCheckedGraphic(object.checkedGraphic);
    this.setupUncheckedGraphic(object.uncheckedGraphic);
};

/**
 * Sets the checked
 *
 * @param {Boolean} [checked=this.standardChecked()] - Checked
 *
 * @see DKTools.Sprite.CheckBox.prototype.standardChecked
 */
DKTools.Sprite.CheckBox.prototype.setupChecked = function(checked) {
    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._checked = _.defaultTo(checked, this.standardChecked());
};

/**
 * Sets the checked graphic
 *
 * @param {Bitmap | String | Object} [graphic=this.standardCheckedGraphic()] - Checked graphic
 *
 * @see DKTools.Sprite.CheckBox.prototype.standardCheckedGraphic
 */
DKTools.Sprite.CheckBox.prototype.setupCheckedGraphic = function(graphic) {
    /**
     * @private
     * @readonly
     * @type {Bitmap | String | Object}
     */
    this._checkedGraphic = graphic || this.standardCheckedGraphic();
};

/**
 * Sets the unchecked graphic
 *
 * @param {Bitmap | String | Object} [graphic=this.standardUncheckedGraphic()] - Unchecked graphic
 *
 * @see DKTools.Sprite.CheckBox.prototype.standardUncheckedGraphic
 */
DKTools.Sprite.CheckBox.prototype.setupUncheckedGraphic = function(graphic) {
    /**
     * @private
     * @readonly
     * @type {Bitmap | String | Object}
     */
    this._uncheckedGraphic = graphic || this.standardUncheckedGraphic();
};

// set methods

/**
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the check box
 *
 * @param {Boolean} [object.checked] - Checked
 * @param {Bitmap | String | Object} [object.checkedGraphic] - Checked graphic
 * @param {Bitmap | String | Object} [object.uncheckedGraphic] - Unchecked graphic
 *
 * @see DKTools.Sprite.Button.prototype.setAll
 * @see DKTools.Sprite.CheckBox.prototype.setChecked
 * @see DKTools.Sprite.CheckBox.prototype.setCheckedGraphic
 * @see DKTools.Sprite.CheckBox.prototype.setUncheckedGraphic
 * @see DKTools.Sprite.CheckBox.prototype.start
 * @see DKTools.Sprite.CheckBox.prototype.activate
 *
 * @returns {Number} Number of changed parameters
 */
DKTools.Sprite.CheckBox.prototype.setAll = function(object = {}, blockStart = false, activate = false) {
    object = object || {};

    const block = true;
    let changed = DKTools.Sprite.Button.prototype.setAll.call(this, object, block);

    if (this.setChecked(object.checked, block)) {
        changed++;
    }

    if (this.setCheckedGraphic(object.checkedGraphic, block)) {
        changed++;
    }

    if (this.setUncheckedGraphic(object.uncheckedGraphic, block)) {
        changed++;
    }

    if (changed > 0) {
        if (!blockStart) {
            this.start();
        }

        if (activate) {
            this.activate();
        }
    }

    return changed;
};

/**
 * Changes the checked
 * Returns true if the change occurred
 *
 * @param {Boolean} [checked] - Checked
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.CheckBox.prototype.setupChecked
 * @see DKTools.Sprite.CheckBox.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.CheckBox.prototype.setChecked = function(checked, blockRefreshAll = false) {
    if (this._checked === checked) {
        return false;
    }

    const lastChecked = this._checked;

    this.setupChecked(checked);

    if (this._checked === lastChecked) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the checked graphic
 * Returns true if the change occurred
 *
 * @param {Bitmap | String | Object} [graphic] - Checked graphic
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.CheckBox.prototype.setupCheckedGraphic
 * @see DKTools.Sprite.CheckBox.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.CheckBox.prototype.setCheckedGraphic = function(graphic, blockRefreshAll = false) {
    const checkedGraphic = this._checkedGraphic;

    if (checkedGraphic == graphic) {
        return false;
    }

    if (checkedGraphic instanceof Bitmap) {
        this.setupCheckedGraphic(graphic);
    } else if (DKTools.Utils.isString(checkedGraphic) || checkedGraphic instanceof Object) {
        const lastGraphic = checkedGraphic;

        this.setupCheckedGraphic(graphic);

        if (_.isEqual(this._checkedGraphic, lastGraphic)) {
            return false;
        }
    } else {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the unchecked graphic
 * Returns true if the change occurred
 *
 * @param {Bitmap | String | Object} [graphic] - Unchecked graphic
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.CheckBox.prototype.setupUncheckedGraphic
 * @see DKTools.Sprite.CheckBox.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.CheckBox.prototype.setUncheckedGraphic = function(graphic, blockRefreshAll = false) {
    const uncheckedGraphic = this._uncheckedGraphic;

    if (uncheckedGraphic == graphic) {
        return false;
    }

    if (uncheckedGraphic instanceof Bitmap) {
        this.setupUncheckedGraphic(graphic);
    } else if (DKTools.Utils.isString(uncheckedGraphic) || uncheckedGraphic instanceof Object) {
        const lastGraphic = uncheckedGraphic;

        this.setupUncheckedGraphic(graphic);

        if (_.isEqual(this._uncheckedGraphic, lastGraphic)) {
            return false;
        }
    } else {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

// _refresh methods

/**
 * Refreshes the checked graphic
 *
 * @private
 *
 * @see DKTools.Sprite.CheckBox.prototype.loadBitmap
 */
DKTools.Sprite.CheckBox.prototype._refreshCheckedGraphic = function() {
    let bitmapObject = null;

    if (DKTools.Utils.isString(this._checkedGraphic)) {
        bitmapObject = {
            folder: this._graphicFolder,
            filename: this._checkedGraphic
        };
    } else if (this._checkedGraphic instanceof Object) {
        bitmapObject = this._checkedGraphic;
    }

    if (bitmapObject) {
        this.loadBitmap(bitmapObject);
    }
};

/**
 * Refreshes the unchecked graphic
 *
 * @private
 *
 * @see DKTools.Sprite.CheckBox.prototype.loadBitmap
 */
DKTools.Sprite.CheckBox.prototype._refreshUncheckedGraphic = function() {
    let bitmapObject = null;

    if (DKTools.Utils.isString(this._uncheckedGraphic)) {
        bitmapObject = {
            folder: this._graphicFolder,
            filename: this._uncheckedGraphic
        };
    } else if (this._uncheckedGraphic instanceof Object) {
        bitmapObject = this._uncheckedGraphic;
    }

    if (bitmapObject) {
        this.loadBitmap(bitmapObject);
    }
};

/**
 * Refreshes graphic
 *
 * @private
 *
 * @see DKTools.Sprite.CheckBox.prototype.isChecked
 * @see DKTools.Sprite.CheckBox.prototype._refreshCheckedGraphic
 * @see DKTools.Sprite.CheckBox.prototype._refreshUncheckedGraphic
 */
DKTools.Sprite.CheckBox.prototype._refreshGraphic = function() {
    if (this.isChecked()) {
        this._refreshCheckedGraphic();
    } else {
        this._refreshUncheckedGraphic();
    }
};

// refresh methods

/**
 * Updates and redraws all
 *
 * @override
 *
 * @see DKTools.Sprite.CheckBox.prototype._refreshGraphic
 * @see DKTools.Sprite.Button.prototype.refreshAll
 */
DKTools.Sprite.CheckBox.prototype.refreshAll = function() {
    this._refreshGraphic();
    DKTools.Sprite.Button.prototype.refreshAll.call(this);
};

// is methods

/**
 * Returns true if the checkbox is checked
 *
 * @returns {Boolean} Checkbox is checked
 */
DKTools.Sprite.CheckBox.prototype.isChecked = function() {
    return this._checked;
};

// event methods

/**
 * Updates the events with type: mouse-click-button
 *
 * @param {String} button - Mouse button
 *
 * @see DKTools.Sprite.CheckBox.prototype.switch
 * @see DKTools.Sprite.Button.prototype.updateMouseClickEvents
 */
DKTools.Sprite.CheckBox.prototype.updateMouseClickEvents = function(button) {
    this.switch();
    DKTools.Sprite.Button.prototype.updateMouseClickEvents.call(this, button);
};

/**
 * Updates the events with type: checked
 *
 * @see DKTools.Sprite.CheckBox.prototype.updateEventsContainer
 */
DKTools.Sprite.CheckBox.prototype.updateCheckedEvents = function() {
    this.updateEventsContainer('checked');
};

/**
 * Updates the events with type: unchecked
 *
 * @see DKTools.Sprite.CheckBox.prototype.updateEventsContainer
 */
DKTools.Sprite.CheckBox.prototype.updateUncheckedEvents = function() {
    this.updateEventsContainer('unchecked');
};

// other methods

/**
 * Switches the checkbox
 *
 * @see DKTools.Sprite.CheckBox.prototype.isChecked
 * @see DKTools.Sprite.CheckBox.prototype.setChecked
 */
DKTools.Sprite.CheckBox.prototype.switch = function() {
    this.setChecked(!this.isChecked());
};

/**
 * Checks the checkbox
 *
 * @see DKTools.Sprite.CheckBox.prototype.isChecked
 * @see DKTools.Sprite.CheckBox.prototype.switch
 * @see DKTools.Sprite.CheckBox.prototype.updateCheckedEvents
 */
DKTools.Sprite.CheckBox.prototype.check = function() {
    if (!this.isChecked()) {
        this.switch();
        this.updateCheckedEvents();
    }
};

/**
 * Unchecks the checkbox
 *
 * @see DKTools.Sprite.CheckBox.prototype.isChecked
 * @see DKTools.Sprite.CheckBox.prototype.switch
 * @see DKTools.Sprite.CheckBox.prototype.updateUncheckedEvents
 */
DKTools.Sprite.CheckBox.prototype.uncheck = function() {
    if (this.isChecked()) {
        this.switch();
        this.updateUncheckedEvents();
    }
};





