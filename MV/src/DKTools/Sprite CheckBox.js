//===========================================================================
// DKTools.Sprite.CheckBox
//===========================================================================

/**
 * Checkbox class
 *
 * @deprecated 9.2.0
 * @class DKTools.Sprite.CheckBox
 * @extends DKTools.Sprite.Button
 *
 * @memberof DKTools.Sprite
 *
 * @see DKTools.Sprite.CheckBox.prototype.initialize
 */
DKTools.Sprite.CheckBox = class extends DKTools.Sprite.Button {

    // C methods

    /**
     * Checks the checkbox
     *
     * @see DKTools.Sprite.CheckBox.prototype.isChecked
     * @see DKTools.Sprite.CheckBox.prototype.switch
     * @see DKTools.Sprite.CheckBox.prototype.updateCheckedEvents
     */
    check() {
        if (!this.isChecked()) {
            this.switch();
            this.updateCheckedEvents();
        }
    }

    // I methods

    /**
     * Returns true if the checkbox is checked
     *
     * @returns {Boolean} Checkbox is checked
     */
    isChecked() {
        return this._checked;
    }

    // R methods

    /**
     * Refreshes the checked graphic
     *
     * @private
     *
     * @see DKTools.Sprite.CheckBox.prototype.loadBitmap
     */
    _refreshCheckedGraphic() {
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
    }

    /**
     * Refreshes graphic
     *
     * @private
     *
     * @see DKTools.Sprite.CheckBox.prototype.isChecked
     * @see DKTools.Sprite.CheckBox.prototype._refreshCheckedGraphic
     * @see DKTools.Sprite.CheckBox.prototype._refreshUncheckedGraphic
     */
    _refreshGraphic() {
        if (this.isChecked()) {
            this._refreshCheckedGraphic();
        } else {
            this._refreshUncheckedGraphic();
        }
    }

    /**
     * Refreshes the unchecked graphic
     *
     * @private
     *
     * @see DKTools.Sprite.CheckBox.prototype.loadBitmap
     */
    _refreshUncheckedGraphic() {
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
    }

    /**
     * Updates and redraws all
     *
     * @override
     *
     * @see DKTools.Sprite.CheckBox.prototype._refreshGraphic
     * @see DKTools.Sprite.Button.prototype.refreshAll
     */
    refreshAll() {
        this._refreshGraphic();
        DKTools.Sprite.Button.prototype.refreshAll.call(this);
    }

    // S methods

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
    setAll(object = {}, blockStart = false, activate = false) {
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
    }

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
    setChecked(checked, blockRefreshAll = false) {
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
    }

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
    setCheckedGraphic(graphic, blockRefreshAll = false) {
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
    }

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
    setUncheckedGraphic(graphic, blockRefreshAll = false) {
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
    }

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
    setupAll(object = {}) {
        object = object || {};

        DKTools.Sprite.Button.prototype.setupAll.call(this, object);

        this.setupChecked(object.checked);
        this.setupCheckedGraphic(object.checkedGraphic);
        this.setupUncheckedGraphic(object.uncheckedGraphic);
    }

    /**
     * Sets the checked
     *
     * @param {Boolean} [checked=this.standardChecked()] - Checked
     *
     * @see DKTools.Sprite.CheckBox.prototype.standardChecked
     */
    setupChecked(checked) {
        /**
         * @private
         * @readonly
         * @type {Boolean}
         */
        this._checked = _.defaultTo(checked, this.standardChecked());
    }

    /**
     * Sets the checked graphic
     *
     * @param {Bitmap | String | Object} [graphic=this.standardCheckedGraphic()] - Checked graphic
     *
     * @see DKTools.Sprite.CheckBox.prototype.standardCheckedGraphic
     */
    setupCheckedGraphic(graphic) {
        /**
         * @private
         * @readonly
         * @type {Bitmap | String | Object}
         */
        this._checkedGraphic = graphic || this.standardCheckedGraphic();
    }

    /**
     * Sets the unchecked graphic
     *
     * @param {Bitmap | String | Object} [graphic=this.standardUncheckedGraphic()] - Unchecked graphic
     *
     * @see DKTools.Sprite.CheckBox.prototype.standardUncheckedGraphic
     */
    setupUncheckedGraphic(graphic) {
        /**
         * @private
         * @readonly
         * @type {Bitmap | String | Object}
         */
        this._uncheckedGraphic = graphic || this.standardUncheckedGraphic();
    }

    /**
     * Returns the stadnard checked
     *
     * @returns {Boolean} Checked
     */
    standardChecked() {
        return false;
    }

    /**
     * Returns the stadnard checked graphic
     *
     * @returns {null} Checked graphic
     */
    standardCheckedGraphic() {
        return null;
    }

    /**
     * Returns the stadnard unchecked graphic
     *
     * @returns {null} Unchecked graphic
     */
    standardUncheckedGraphic() {
        return null;
    }

    /**
     * Switches the checkbox
     *
     * @see DKTools.Sprite.CheckBox.prototype.isChecked
     * @see DKTools.Sprite.CheckBox.prototype.setChecked
     */
    switch() {
        this.setChecked(!this.isChecked());
    }

    // U methods

    /**
     * Unchecks the checkbox
     *
     * @see DKTools.Sprite.CheckBox.prototype.isChecked
     * @see DKTools.Sprite.CheckBox.prototype.switch
     * @see DKTools.Sprite.CheckBox.prototype.updateUncheckedEvents
     */
    uncheck() {
        if (this.isChecked()) {
            this.switch();
            this.updateUncheckedEvents();
        }
    }

    /**
     * Updates the events with type: checked
     *
     * @see DKTools.Sprite.CheckBox.prototype.updateEventsContainer
     */
    updateCheckedEvents() {
        this.updateEventsContainer('checked');
    }

    /**
     * Updates the events with type: mouse-click-button
     *
     * @override
     *
     * @param {String} button - Mouse button (left, middle or right)
     *
     * @see DKTools.Sprite.CheckBox.prototype.switch
     * @see DKTools.Sprite.Button.prototype.updateMouseClickEvents
     */
    updateMouseClickEvents(button) {
        this.switch();
        super.updateMouseClickEvents(button);
    }

    /**
     * Updates the events with type: touch
     *
     * @override 9.0.0
     *
     * @see DKTools.Sprite.CheckBox.prototype.switch
     * @see DKTools.Sprite.Button.prototype.updateTouchEvents
     */
    updateTouchEvents() {
        this.switch();
        super.updateTouchEvents();
    }

    /**
     * Updates the events with type: unchecked
     *
     * @see DKTools.Sprite.CheckBox.prototype.updateEventsContainer
     */
    updateUncheckedEvents() {
        this.updateEventsContainer('unchecked');
    }

};

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




