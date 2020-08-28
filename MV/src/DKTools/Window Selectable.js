//===========================================================================
// DKTools.Window.Selectable
//===========================================================================

/**
 * Window selectable class
 *
 * @class DKTools.Window.Selectable
 * @extends DKTools.Window
 *
 * @memberof DKTools.Window
 *
 * @see DKTools.Window.Selectable.prototype.initialize
 */
DKTools.Window.Selectable = class extends DKTools.Window {

    // N methods

    /**
     * Returns true if needs to create the sprites of the arrows
     *
     * @override
     *
     * @returns {Boolean} Needs to create the sprites of the arrows
     */
    needsCreateArrowsSprites() {
        return true;
    }

    // O methods

    /**
     * Callback function that will be processing update of the arrow of up
     *
     * @param {DKTools.Event} event - Event
     *
     * @see DKTools.Window.prototype.createArrows
     */
    onUpArrowUpdate(event) {
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
    }

    /**
     * Callback function that will be processing update of the arrow of down
     *
     * @param {DKTools.Event} event - Event
     *
     * @see DKTools.Window.prototype.createArrows
     */
    onDownArrowUpdate(event) {
        const arrow = event.target;

        arrow.hide();

        if (this.hasContentsSprite()) {
            const contentsSprite = this._windowContentsSprite;

            if (this.isChild(contentsSprite) && contentsSprite.isVisible() &&
                contentsSprite.isSelectable() && contentsSprite.isVertical()) {
                    const topRow = contentsSprite.getTopRow();
                    const maxTopRow = contentsSprite.getMaxTopRow();

                    if (maxTopRow > 0 && topRow < maxTopRow) {
                        arrow.show(this.isVisibleAndActive() && contentsSprite.isActive());
                    }
            }
        }
    }

    /**
     * Callback function that will be processing update of the arrow of left
     *
     * @param {DKTools.Event} event - Event
     *
     * @see DKTools.Window.prototype.createArrows
     */
    onLeftArrowUpdate(event) {
        const arrow = event.target;

        arrow.hide();

        if (this.hasContentsSprite()) {
            const contentsSprite = this._windowContentsSprite;

            if (this.isChild(contentsSprite) && contentsSprite.isVisible() &&
                contentsSprite.isSelectable() && contentsSprite.isHorizontal()) {
                    if (contentsSprite.getTopCol() > 0) {
                        arrow.show(this.isVisibleAndActive() && contentsSprite.isActive());
                    }
            }
        }
    }

    /**
     * Callback function that will be processing update of the arrow of right
     *
     * @param {DKTools.Event} event - Event
     *
     * @see DKTools.Window.prototype.createArrows
     */
    onRightArrowUpdate(event) {
        const arrow = event.target;

        arrow.hide();

        if (this.hasContentsSprite()) {
            const contentsSprite = this._windowContentsSprite;

            if (this.isChild(contentsSprite) && contentsSprite.isVisible() &&
                contentsSprite.isSelectable() && contentsSprite.isHorizontal()) {
                    const topCol = contentsSprite.getTopCol();
                    const maxTopCol = contentsSprite.getMaxTopCol();

                    if (maxTopCol > 0 && topCol < maxTopCol) {
                        arrow.show(this.isVisibleAndActive() && contentsSprite.isActive());
                    }
            }
        }
    }

    /**
     * Callback function that will be processing click of the arrow of up
     *
     * @param {DKTools.Event} event - Event
     *
     * @see DKTools.Window.prototype.createArrows
     */
    onUpArrowMouseClick(event) {
        const arrow = event.target;

        if (arrow.isVisibleAndActive()) {
            this._windowContentsSprite.selectPrevItem();
        }
    }

    /**
     * Callback function that will be processing click of the arrow of down
     *
     * @param {DKTools.Event} event - Event
     *
     * @see DKTools.Window.prototype.createArrows
     */
    onDownArrowMouseClick(event) {
        const arrow = event.target;

        if (arrow.isVisibleAndActive()) {
            this._windowContentsSprite.selectNextItem();
        }
    }

    /**
     * Callback function that will be processing click of the arrow of left
     *
     * @param {DKTools.Event} event - Event
     *
     * @see DKTools.Window.prototype.createArrows
     */
    onLeftArrowMouseClick(event) {
        const arrow = event.target;

        if (arrow.isVisibleAndActive()) {
            this._windowContentsSprite.selectPrevItem();
        }
    }

    /**
     * Callback function that will be processing click of the arrow of right
     *
     * @param {DKTools.Event} event - Event
     *
     * @see DKTools.Window.prototype.createArrows
     */
    onRightArrowMouseClick(event) {
        const arrow = event.target;

        if (arrow.isVisibleAndActive()) {
            this._windowContentsSprite.selectNextItem();
        }
    }

    /**
     * Callback function that will be processing long press of the arrow of up
     *
     * @param {DKTools.Event} event - Event
     *
     * @see DKTools.Window.prototype.createArrows
     */
    onUpArrowMouseLongPress(event) {
        this.onUpArrowMouseClick(event);
    }

    /**
     * Callback function that will be processing long press of the arrow of down
     *
     * @param {DKTools.Event} event - Event
     *
     * @see DKTools.Window.prototype.createArrows
     */
    onDownArrowMouseLongPress(event) {
        this.onDownArrowMouseClick(event);
    }

    /**
     * Callback function that will be processing long press of the arrow of left
     *
     * @param {DKTools.Event} event - Event
     *
     * @see DKTools.Window.prototype.createArrows
     */
    onLeftArrowMouseLongPress(event) {
        this.onLeftArrowMouseClick(event);
    }

    /**
     * Callback function that will be processing long press of the arrow of right
     *
     * @param {DKTools.Event} event - Event
     *
     * @see DKTools.Window.prototype.createArrows
     */
    onRightArrowMouseLongPress(event) {
        this.onRightArrowMouseClick(event);
    }

    // S methods

    /**
     * Returns the standard sprite of the contents
     *
     * @override
     *
     * @see DKTools.Sprite.Selectable
     *
     * @returns {DKTools.Sprite.Selectable} Standard sprite of the contents
     */
    standardContentsSprite() {
        return new DKTools.Sprite.Selectable();
    }

};




