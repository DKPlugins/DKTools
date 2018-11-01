//===========================================================================
// DKTools.Window.Selectable
//===========================================================================

DKTools.Window.Selectable.prototype = Object.create(DKTools.Window.prototype);
DKTools.Window.Selectable.prototype.constructor = DKTools.Window.Selectable;

// standard methods

/**
 * Returns the standard sprite of the contents
 *
 * @override
 *
 * @see DKTools.Sprite.Selectable
 *
 * @returns {DKTools.Sprite.Selectable} Standard sprite of the contents
 */
DKTools.Window.Selectable.prototype.standardContentsSprite = function() {
    return new DKTools.Sprite.Selectable();
};

// needs create methods

/**
 * Returns true if needs to create the sprites of the arrows
 *
 * @override
 *
 * @returns {Boolean} Needs to create the sprites of the arrows
 */
DKTools.Window.Selectable.prototype.needsCreateArrowsSprites = function() {
    return true;
};

// arrow methods

/**
 * Callback function that will be processing update of the arrow of up
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onUpArrowUpdate = function(event) {
    const arrow = event.target;

    arrow.hide();

    if (this.hasContentsSprite()) {
        const contentsSprite = this._windowContentsSprite;

        if (this.isChild(contentsSprite) &&
            contentsSprite.isVisible() &&
            contentsSprite.isSelectable() &&
            contentsSprite.isVertical()) {
                if (contentsSprite.getTopRow() > 0) {
                    arrow.show(this.isVisibleAndActive() && contentsSprite.isActive());
                }
        }
    }
};

/**
 * Callback function that will be processing update of the arrow of down
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onDownArrowUpdate = function(event) {
    const arrow = event.target;

    arrow.hide();

    if (this.hasContentsSprite()) {
        const contentsSprite = this._windowContentsSprite;

        if (this.isChild(contentsSprite) &&
            contentsSprite.isVisible() &&
            contentsSprite.isSelectable() &&
            contentsSprite.isVertical()) {
                const topRow = contentsSprite.getTopRow();
                const maxTopRow = contentsSprite.getMaxTopRow();

                if (maxTopRow > 0 && topRow < maxTopRow) {
                    arrow.show(this.isVisibleAndActive() && contentsSprite.isActive());
                }
        }
    }
};

/**
 * Callback function that will be processing update of the arrow of left
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onLeftArrowUpdate = function(event) {
    const arrow = event.target;

    arrow.hide();

    if (this.hasContentsSprite()) {
        const contentsSprite = this._windowContentsSprite;

        if (this.isChild(contentsSprite) &&
            contentsSprite.isVisible() &&
            contentsSprite.isSelectable() &&
            contentsSprite.isHorizontal()) {
                if (contentsSprite.getTopCol() > 0) {
                    arrow.show(this.isVisibleAndActive() && contentsSprite.isActive());
                }
        }
    }
};

/**
 * Callback function that will be processing update of the arrow of right
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onRightArrowUpdate = function(event) {
    const arrow = event.target;

    arrow.hide();

    if (this.hasContentsSprite()) {
        const contentsSprite = this._windowContentsSprite;

        if (this.isChild(contentsSprite) &&
            contentsSprite.isVisible() &&
            contentsSprite.isSelectable() &&
            contentsSprite.isHorizontal()) {
                const topCol = contentsSprite.getTopCol();
                const maxTopCol = contentsSprite.getMaxTopCol();

                if (maxTopCol > 0 && topCol < maxTopCol) {
                    arrow.show(this.isVisibleAndActive() && contentsSprite.isActive());
                }
        }
    }
};

/**
 * Callback function that will be processing click of the arrow of up
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onUpArrowMouseClick = function(event) {
    const arrow = event.target;

    if (arrow.isVisibleAndActive()) {
        this._windowContentsSprite.selectPrevItem();
    }
};

/**
 * Callback function that will be processing click of the arrow of down
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onDownArrowMouseClick = function(event) {
    const arrow = event.target;

    if (arrow.isVisibleAndActive()) {
        this._windowContentsSprite.selectNextItem();
    }
};

/**
 * Callback function that will be processing click of the arrow of left
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onLeftArrowMouseClick = function(event) {
    const arrow = event.target;

    if (arrow.isVisibleAndActive()) {
        this._windowContentsSprite.selectPrevItem();
    }
};

/**
 * Callback function that will be processing click of the arrow of right
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onRightArrowMouseClick = function(event) {
    const arrow = event.target;

    if (arrow.isVisibleAndActive()) {
        this._windowContentsSprite.selectNextItem();
    }
};

/**
 * Callback function that will be processing long press of the arrow of up
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onUpArrowMouseLongPress = function(event) {
   this.onUpArrowMouseClick(event);
};

/**
 * Callback function that will be processing long press of the arrow of down
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onDownArrowMouseLongPress = function(event) {
    this.onDownArrowMouseClick(event);
};

/**
 * Callback function that will be processing long press of the arrow of left
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onLeftArrowMouseLongPress = function(event) {
    this.onLeftArrowMouseClick(event);
};

/**
 * Callback function that will be processing long press of the arrow of right
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onRightArrowMouseLongPress = function(event) {
    this.onRightArrowMouseClick(event);
};





