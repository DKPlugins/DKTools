//===========================================================================
// DKTools.Window.Selectable
//===========================================================================

/**
 * @class
 * @extends Window_Selectable
 * @mixes DKTools.Window.Scrollable
 */
DKTools.Window.Selectable = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

DKTools.Window.Selectable.prototype = Object.create(Window_Selectable.prototype);
Object.defineProperties(DKTools.Window.Selectable.prototype,
    Object.getOwnPropertyDescriptors(DKTools.Window.Scrollable.prototype));
DKTools.Window.Selectable.prototype.constructor = DKTools.Window.Selectable;

// A methods

/**
 * Adds an item
 * @since 1.1.1
 * @param {Object} item - Item
 */
DKTools.Window.Selectable.prototype.addItem = function(item) {
    if (item.enabled === undefined) {
        item.enabled = true;
    }

    if (item.symbol && DKTools.Utils.isFunction(item.handler)) {
        this.setHandler(item.symbol, item.handler);
    }

    this._list.push(item);
};

// C methods

/**
 * Clears all
 * @version 1.1.5
 * @override
 * @private
 */
DKTools.Window.Selectable.prototype._clearAll = function() {
    DKTools.Window.Scrollable.prototype._clearAll.apply(this, arguments);
    this._canRepeat = true;
    this._handlers = {};
    this._index = 0;
};

/**
 * Calls the handler of the symbol
 * @override
 * @param {String} symbol - Symbol
 */
DKTools.Window.Selectable.prototype.callHandler = function(symbol) {
    if (this.isHandled(symbol)) {
        this._handlers[symbol](this._index, this);
    }
};

/**
 * Calls the handler of the Ok
 */
DKTools.Window.Selectable.prototype.callOkHandler = function() {
    const symbol = this.currentSymbol();

    if (this.isHandled(symbol)) {
        this.callHandler(symbol);
    } else if (this.isHandled('ok')) {
        this.callHandler('ok');
    } else {
        this.activate();
    }
};

/**
 * Changes the paint opacity
 * @override
 * @param {Boolean | Number} paintOpacity - Paint opacity
 */
DKTools.Window.Selectable.prototype.changePaintOpacity = function(paintOpacity) {
    if (typeof paintOpacity === 'boolean') {
        Window_Selectable.prototype.changePaintOpacity.apply(this, arguments);
    } else {
        this.contents.paintOpacity = paintOpacity;
    }
};

/**
 * Returns the current column
 * @since 1.1.0
 * @return {Number} Current column
 */
DKTools.Window.Selectable.prototype.col = function() {
    return this.isHorizontal() ?
        this._index : Math.floor(this._index % this.maxCols());
};

/**
 * Returns width of the contents
 * @override
 * @return {Number} Width of the contents
 */
DKTools.Window.Selectable.prototype.contentsWidth = function() {
    return this.isHorizontal() ?
        this.innerWidth + this.itemWidth() :
        Window_Selectable.prototype.contentsWidth.apply(this, arguments);
};

/**
 * Returns the current item (selected item)
 * @return {Object | null} Current item (selected item) or null
 */
DKTools.Window.Selectable.prototype.currentItem = function() {
    return this.item(this._index);
};

/**
 * Returns the current symbol
 * @since 1.1.1
 * @return {* | null} Symbol or null
 */
DKTools.Window.Selectable.prototype.currentSymbol = function() {
    return this.itemSymbol(this._index);
};

/**
 * Returns the current ext
 * @since 1.1.1
 * @return {* | null} Ext or null
 */
DKTools.Window.Selectable.prototype.currentExt = function() {
    return this.itemExt(this._index);
};

/**
 * Moves the cursor to up
 * @override
 * @param {Boolean} [wrap=false] - Wrap cursor
 */
DKTools.Window.Selectable.prototype.cursorUp = function(wrap = false) {
    if (this.isHorizontal()) {
        return;
    }

    const index = this._index;
    const maxItems = this.maxItems();
    const maxCols = this.maxCols();

    if (index >= maxCols || (wrap && (maxItems === this.maxRows() * maxCols))) {
        this.smoothSelect((index - maxCols + maxItems) % maxItems);
    }
};

/**
 * Moves the cursor to down
 * @override
 * @param {Boolean} [wrap=false] - Wrap cursor
 */
DKTools.Window.Selectable.prototype.cursorDown = function(wrap = false) {
    if (this.isHorizontal()) {
        return;
    }

    const index = this._index;
    const maxItems = this.maxItems();
    const maxCols = this.maxCols();

    if (index < maxItems - maxCols || (wrap && (maxItems === this.maxRows() * maxCols))) {
        this.smoothSelect((index + maxCols) % maxItems);
    }
};

/**
 * Moves the cursor to left
 * @override
 * @param {Boolean} [wrap=false] - Wrap cursor
 */
DKTools.Window.Selectable.prototype.cursorLeft = function(wrap = false) {
    const index = Math.max(0, this._index);
    const maxItems = this.maxItems();
    const maxCols = this.maxCols();
    const horizontal = this.isHorizontal();

    if (!horizontal) {
        if (maxCols >= 2 && (index > 0 || wrap)) {
            this.smoothSelect((index - 1 + maxItems) % maxItems);
        }
    } else {
        this.selectPrevItem(wrap, true);
    }
};

/**
 * Moves the cursor to right
 * @override
 * @param {Boolean} [wrap=false] - Wrap cursor
 */
DKTools.Window.Selectable.prototype.cursorRight = function(wrap = false) {
    const index = this._index;
    const maxItems = this.maxItems();
    const maxCols = this.maxCols();
    const horizontal = this.isHorizontal();

    if (!horizontal) {
        if (maxCols >= 2 && (index < maxItems - 1 || wrap)) {
            this.smoothSelect((index + 1) % maxItems);
        }
    } else {
        this.selectNextItem(wrap, true);
    }
};

// D methods

/**
 * Disables the items background
 * @since 1.1.5
 */
DKTools.Window.Selectable.prototype.disableItemsBackground = function() {
    this._itemsBackgroundDisabled = true;
};

/**
 * Draws all
 * @override
 */
DKTools.Window.Selectable.prototype.drawAll = function() {
    this.drawAllItems();
};

/**
 * Draws all items
 * @override
 */
DKTools.Window.Selectable.prototype.drawAllItems = function() {
    const maxVisibleItems = this.maxVisibleItems();
    const maxItems = this.maxItems();
    const itemBackgroundEnabled = this.isItemsBackgroundEnabled();
    let index = this.topIndex();

    for (let i = 0; i < maxVisibleItems && index < maxItems; i++, index++) {
        if (itemBackgroundEnabled) {
            this.drawItemBackground(index);
        }

        this.drawItem(index);
    }
};

/**
 * Draws the item
 * @override
 * @param {Number} index - Index
 */
DKTools.Window.Selectable.prototype.drawItem = function(index) {
    const item = this.item(index) || {};

    if (DKTools.Utils.isFunction(item.drawHandler)) {
        item.drawHandler(index, this);
    } else if (DKTools.Utils.isFunction(this._itemDrawHandler)) {
        this._itemDrawHandler(index, this);
    }
};

// E methods

/**
 * @override
 * @param {Boolean} [smooth=false] - Smooth
 */
DKTools.Window.Selectable.prototype.ensureCursorVisible = function(smooth = false) {
    if (this.isHorizontal()) {
        const currentCol = this.col();
        const innerWidth = this.innerWidth;

        if (innerWidth > 0 && currentCol >= 0) {
            const scrollX = this.scrollX();
            const itemWidth = this.itemWidth();
            const itemTop = currentCol * itemWidth;
            const itemBottom = itemTop + itemWidth;
            const scrollMin = itemBottom - innerWidth;

            if (scrollX > itemTop) {
                if (smooth) {
                    this.smoothScrollTo(itemTop, 0);
                } else {
                    this.scrollTo(itemTop, 0);
                }
            } else if (scrollX < scrollMin) {
                if (smooth) {
                    this.smoothScrollTo(scrollMin, 0);
                } else {
                    this.scrollTo(scrollMin, 0);
                }
            }
        }
    } else {
        Window_Selectable.prototype.ensureCursorVisible.apply(this, arguments);
    }
};

// F methods

/**
 * Finds the symbol
 * Returns index
 * @param {String} symbol - Symbol
 * @return {Number} Index
 */
DKTools.Window.Selectable.prototype.findSymbol = function(symbol) {
    return this._list.findIndex(item => item.symbol === symbol);
};

/**
 * Finds the ext
 * Returns index
 * @param {*} ext - Ext
 * @return {Number} Index
 */
DKTools.Window.Selectable.prototype.findExt = function(ext) {
    return this._list.findIndex(item => item.ext === ext);
};

// H methods

/**
 * Returns true if the items exists
 * @return {Boolean} Items exists
 */
DKTools.Window.Selectable.prototype.hasItems = function() {
    return this.maxItems() > 0;
};

/**
 * Returns true if the item with symbol exists
 * @param {String} symbol - Symbol
 * @return {Boolean} Item with symbol exists
 */
DKTools.Window.Selectable.prototype.hasSymbol = function(symbol) {
    return this._list.some(item => item.symbol === symbol);
};

/**
 * Hides the cursor
 * Returns the event with "update" type
 * @override
 * @return {DKTools.Event} Event
 */
DKTools.Window.Selectable.prototype.hideCursor = function() {
    return this.addEvent({
        type: 'update',
        onUpdate: DKTools.Window.prototype.hideCursor.bind(this)
    });
};

// I methods

/**
 * Returns the item by index
 * @since 1.1.0
 * @param {Number} index - Index
 * @return {Object | null} Item or null
 */
DKTools.Window.Selectable.prototype.item = function(index) {
    return this._list[index] || null;
};

/**
 * Returns the name of the item
 * @since 1.1.1
 * @param {Number} index - Index
 * @return {String | undefined} Name of the item
 */
DKTools.Window.Selectable.prototype.itemName = function(index) {
    const item = this.item(index) || {};

    if (DKTools.Utils.isFunction(item.name)) {
        return item.name(index, this);
    }

    return item.name;
};

/**
 * Returns the command symbol
 * @since 1.1.1
 * @param {Number} index - Index
 * @return {String | null} Command symbol
 */
DKTools.Window.Selectable.prototype.itemSymbol = function(index) {
    const item = this.item(index);

    return item ? item.symbol : null;
};

/**
 * Returns the command ext
 * @since 1.1.1
 * @param {Number} index - Index
 * @return {* | null} Command ext
 */
DKTools.Window.Selectable.prototype.itemExt = function(index) {
    const item = this.item(index);

    return item ? item.ext : null;
};

/**
 * Returns the width of the item
 * @override
 * @return {Number} Width of the item
 */
DKTools.Window.Selectable.prototype.itemWidth = function() {
    if (DKTools.Utils.isFunction(this._itemWidth)) {
        return this._itemWidth(this);
    } else if (Number.isFinite(this._itemWidth)) {
        return this._itemWidth;
    }

    return Window_Selectable.prototype.itemWidth.apply(this, arguments);
};

/**
 * Returns the height of the item
 * @override
 * @return {Number} Height of the item
 */
DKTools.Window.Selectable.prototype.itemHeight = function() {
    if (DKTools.Utils.isFunction(this._itemHeight)) {
        return this._itemHeight(this);
    } else if (Number.isFinite(this._itemHeight)) {
        return this._itemHeight;
    } else if (DKTools.Utils.isString(this._itemHeight)) { // number of lines
        return this.lineHeight() * parseFloat(this._itemHeight);
    }

    return Window_Selectable.prototype.itemHeight.apply(this, arguments);
};

/**
 * @version 1.2.5
 * @override
 * @param {Number} index - Item index
 */
DKTools.Window.Selectable.prototype.itemRect = function(index) {
    if (!this.isHorizontal()) {
        return Window_Selectable.prototype.itemRect.apply(this, arguments);
    }

    const itemWidth = this.itemWidth();
    const itemHeight = this.itemHeight();
    const colSpacing = this.colSpacing();
    const rowSpacing = this.rowSpacing();
    const width = itemWidth - colSpacing;
    const height = itemHeight - rowSpacing;
    const rect = new Rectangle(0, 0, width, height);

    if (this.isHorizontal()) {
        rect.x = index * itemWidth + colSpacing / 2 - this.scrollBaseX();
    }

    return rect;
};

/**
 * Returns the ext of the item by index
 * @param {Number} index - Index
 * @return {* | null} Ext of the item by index or null
 */
DKTools.Window.Selectable.prototype.itemExt = function(index) {
    const item = this.item(index);

    return item ? item.ext : null;
};

/**
 * Returns the align of the item
 * @override
 * @param {Number} index - Index
 * @return {String} Align of the item
 */
DKTools.Window.Selectable.prototype.itemTextAlign = function(index) {
    const item = this.item(index) || {};

    if (DKTools.Utils.isFunction(item.align)) {
        return item.align(index, this);
    }

    if (DKTools.Utils.isFunction(this._itemTextAlign)) {
        return this._itemTextAlign(index, this);
    }

    return item.align || this.standardItemTextAlign();
};

/**
 * Returns the text color of the item
 * @param {Number} index - Index
 * @return {String} Text color of the item
 */
DKTools.Window.Selectable.prototype.itemTextColor = function(index) {
    const item = this.item(index) || {};
    const itemTextColor = item.textColor || this._itemTextColor;

    if (DKTools.Utils.isFunction(itemTextColor)) {
        return itemTextColor(index, this);
    }

    return itemTextColor || ColorManager.normalColor();
};

/**
 * Returns the paint opacity of the item
 * @param {Number} index - Index
 * @return {Number} Paint opacity of the item
 */
DKTools.Window.Selectable.prototype.itemPaintOpacity = function(index) {
    const item = this.item(index) || {};

    if (DKTools.Utils.isFunction(item.paintOpacity)) {
        return item.paintOpacity(index, this);
    } else if (Number.isFinite(item.paintOpacity)) {
        return item.paintOpacity;
    } else if (DKTools.Utils.isFunction(this._itemPaintOpacity)) {
        return this._itemPaintOpacity(index, this);
    }

    return this.isItemEnabled(index) ?
        255 : this.translucentOpacity();
};

/**
 * Returns true if the item is enabled
 * @param {Number} index - Index
 * @return {Boolean} Item is enabled
 */
DKTools.Window.Selectable.prototype.isItemEnabled = function(index) {
    const item = this.item(index) || {};
    const itemEnabled = item.enabled;

    if (DKTools.Utils.isFunction(itemEnabled)) {
        return itemEnabled(index, this);
    }

    return itemEnabled;
};

/**
 * Returns true if the item is selected
 * @since 1.1.5
 * @param {Number} index - Index
 * @return {Boolean} Item is selected
 */
DKTools.Window.Selectable.prototype.isItemSelected = function(index) {
    return this._index === index;
};

/**
 * Returns true if the items background enabled
 * @since 1.1.5
 * @return {Boolean} Items background enabled
 */
DKTools.Window.Selectable.prototype.isItemsBackgroundEnabled = function() {
    return !this._itemsBackgroundDisabled;
};

/**
 * Returns true if the current item (selected item) is enabled
 * @override
 * @return {Boolean} Current item (selected item) is enabled
 */
DKTools.Window.Selectable.prototype.isCurrentItemEnabled = function() {
    return this.isItemEnabled(this._index);
};

/**
 * Returns true if the horizontal scrolling
 * @override
 * @return {Boolean} Horizontal scrolling
 */
DKTools.Window.Selectable.prototype.isHorizontal = function() {
    return Window_Selectable.prototype.isHorizontal.apply(this, arguments);
};

/**
 * Returns true if the OK enabled
 * @override
 * @return {Boolean} OK enabled
 */
DKTools.Window.Selectable.prototype.isOkEnabled = function() {
    return true;
};

/**
 * Returns true if the refreshing when the item is selected
 * @since 1.1.5
 * @return {Boolean} Refreshing when the item is selected
 */
DKTools.Window.Selectable.prototype.isRefreshOnSelect = function() {
    return !!this._refreshOnSelect;
};

/**
 * Returns true if the scroll enabled
 * @override
 * @return {Boolean} Scroll enabled
 */
DKTools.Window.Selectable.prototype.isScrollEnabled = function() {
    return Window_Selectable.prototype.isScrollEnabled.apply(this, arguments);
};

// M methods

/**
 * Returns max cols
 * @override
 * @return {Number} Max cols
 */
DKTools.Window.Selectable.prototype.maxCols = function() {
    return this._maxCols;
};

/**
 * Returns max items
 * @override
 * @return {Number} Max items
 */
DKTools.Window.Selectable.prototype.maxItems = function() {
    return this._list.length;
};

/**
 * Returns page items
 * @override
 * @return {Number} Page items
 */
DKTools.Window.Selectable.prototype.maxPageItems = function() {
    return this.isHorizontal() ?
        this.maxCols() : Window_Selectable.prototype.maxPageItems.apply(this, arguments);
};

/**
 * Returns max visible items
 * @override
 * @return {Number} Max visible items
 */
DKTools.Window.Selectable.prototype.maxVisibleItems = function() {
    return this.isHorizontal() ?
        Math.ceil(this.contentsWidth() / this.itemWidth()):
        Window_Selectable.prototype.maxVisibleItems.apply(this, arguments);

};

// N methods

/**
 * Returns the next index
 * @since 1.1.0
 * @param {Boolean} [wrap=false] - Wrap cursor
 * @return {Number} Next index
 */
DKTools.Window.Selectable.prototype.nextIndex = function(wrap = false) {
    if (this._index < this.maxItems() - 1) {
        return this._index + 1;
    } else if (wrap) {
        return 0;
    }

    return -1;
};

/**
 * Returns the next item
 * @since 1.1.0
 * @param {Boolean} [wrap=false] - Wrap cursor
 * @return {Object | null} Next item or null
 */
DKTools.Window.Selectable.prototype.nextItem = function(wrap = false) {
    return this.item(this.nextIndex(wrap));
};

// O methods

/**
 * Returns the overall width
 * @override
 * @return {Number} Overall width
 */
DKTools.Window.Selectable.prototype.overallWidth = function() {
    return this.isHorizontal() ?
        this.maxItems() * this.itemWidth() :
        Window_Selectable.prototype.overallWidth.apply(this, arguments);
};

/**
 * Returns the overall height
 * @override
 * @return {Number} Overall height
 */
DKTools.Window.Selectable.prototype.overallHeight = function() {
    return this.isHorizontal() ?
        this.itemHeight() : Window_Selectable.prototype.overallHeight.apply(this, arguments);
};

// P methods

/**
 * @override
 */
DKTools.Window.Selectable.prototype.paint = function() {
    this.refreshAll();
};

/**
 * Plays "cursor" sound
 */
DKTools.Window.Selectable.prototype.playCursorSound = function() {
    SoundManager.playCursor();
};

/**
 * Returns the previous index
 * @since 1.1.0
 * @param {Boolean} [wrap=false] - Wrap cursor
 * @return {Number} Previous index
 */
DKTools.Window.Selectable.prototype.prevIndex = function(wrap = false) {
    if (this._index > 0) {
        return this._index - 1;
    } else if (wrap) {
        return this.maxItems() - 1;
    }

    return -1;
};

/**
 * Returns the previous item
 * @since 1.1.0
 * @param {Boolean} [wrap=false] - Wrap cursor
 * @return {Object | null} Previous item or null
 */
DKTools.Window.Selectable.prototype.prevItem = function(wrap = false) {
    return this.item(this.prevIndex(wrap));
};

/**
 * Processes cancel
 * @override
 */
DKTools.Window.Selectable.prototype.processCancel = function() {
    SoundManager.playCancel();

    this.updateInputData();
    this.deactivate();

    const item = this.currentItem();

    if (item && DKTools.Utils.isFunction(item.cancelHandler)) {
        item.cancelHandler(this._index, this);
    } else {
        this.callCancelHandler();
    }
};

/**
 * Processes ok
 * @override
 */
DKTools.Window.Selectable.prototype.processOk = function() {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.deactivate();

        const item = this.currentItem() || {};

        if (DKTools.Utils.isFunction(item.okHandler)) {
            item.okHandler(this._index, this);
        } else {
            this.callOkHandler();
        }
    } else {
        this.playBuzzerSound();
    }
};

// R methods

/**
 * Refreshes the window
 * @override
 */
DKTools.Window.Selectable.prototype.refreshAll = function() {
    DKTools.Window.prototype.refreshAll.apply(this, arguments);
    this.refreshCursor();
};

/**
 * Enables refreshing when the item is selected
 * @since 1.1.5
 */
DKTools.Window.Selectable.prototype.refreshOnSelect = function() {
    this._refreshOnSelect = true;
};

// S methods

// standard methods

/**
 * Returns the standard sprite of the contents
 * @override
 * @return {Sprite} Standard sprite of the contents
 */
DKTools.Window.Selectable.prototype.standardContentsSprite = function() {
    return new Sprite();
};

/**
 * Returns the standard items
 * @return {Object[]} Standard items
 */
DKTools.Window.Selectable.prototype.standardItems = function() {
    return [];
};

/**
 * Returns the standard number of the columns
 * @return {Number} Standard number of the columns
 */
DKTools.Window.Selectable.prototype.standardMaxCols = function() {
    return 1;
};

/**
 * Returns the standard handler of draw of the item
 * @version 1.1.0
 * @return {Function} Standard handler of draw of the item
 */
DKTools.Window.Selectable.prototype.standardItemDrawHandler = function() {
    return function(index) {
        const textColor = this.itemTextColor(index);
        const paintOpacity = this.itemPaintOpacity(index);
        const align = this.itemTextAlign(index);
        const rect = this.itemLineRect(index);

        this.changeTextColor(textColor);
        this.changePaintOpacity(paintOpacity);

        this.contents.drawText(
            this.itemName(index), rect.x, rect.y, rect.width, rect.height, align);
    }.bind(this);
};

/**
 * Returns the standard text align
 * @since 1.1.1
 * @return {String} Standard text align
 */
DKTools.Window.Selectable.prototype.standardItemTextAlign = function() {
    return 'center';
};

// setup methods

/**
 * Sets all parameters
 *
 * @param {Object} [object={}] - Parameters
 *
 * @param {Number} [object.maxCols] - Number of the columns
 * @param {Object[]} [object.items] - List of the items
 * @param {Function} [object.drawItemHandler] - Handler of draw of the item
 * @param {Function | String} [object.itemTextColor] - Text color of the item
 * @param {Function | Number} [object.itemPaintOpacity] - Paint opacity of the item
 * @param {Function | String} [object.itemAlign] - Align of the item
 * @param {Function} [object.itemDrawHandler] - Handler of draw of the item
 */
DKTools.Window.Selectable.prototype.setupAll = function(object = {}) {
    object = object || {};

    DKTools.Window.prototype.setupAll.apply(this, arguments);

    this.setupMaxCols(object.maxCols);
    this.setupItems(object.items);
    this.setupItemTextColor(object.itemTextColor);
    this.setupItemPaintOpacity(object.itemPaintOpacity);
    this.setupItemAlign(object.itemAlign);
    this.setupItemDrawHandler(object.itemDrawHandler);
};

/**
 * Sets the number of the columns
 * @param {Number} [cols=this.standardMaxCols()] - Number of the columns
 */
DKTools.Window.Selectable.prototype.setupMaxCols = function(cols = 1) {
    this._maxCols = cols || this.standardMaxCols();
};

/**
 * Sets the list of the items
 *
 * @param {Object[]} [items] - Items
 *
 * @param {Function | String} [items[].name] - Item name
 * @param {Function | String} [items[].align] - Item align
 * @param {Function | String} [items[].textColor] - Item text color
 * @param {Function | Number} [items[].paintOpacity] - Item paint opacity
 * @param {Function | Boolean} [items[].enabled] - Item activity
 * @param {String} [items[].symbol] - Item symbol
 * @param {Function} [items[].handler] - Symbol handler
 * @param {Function} [items[].drawHandler] - Handler of draw of the item
 * @param {Function} [items[].selectHandler] - Item select handler
 * @param {Function} [items[].okHandler] - Item ok handler
 * @param {Function} [items[].cancelHandler] - Item cancel handler
 */
DKTools.Window.Selectable.prototype.setupItems = function(items) {
    this._list = [];

    (items || this.standardItems()).forEach((item) => {
        this.addItem(item);
    });
};

/**
 * Sets the text color of the item
 * @param {Function | String} [itemTextColor] - Text color of the item
 */
DKTools.Window.Selectable.prototype.setupItemTextColor = function(itemTextColor) {
    /**
     * @private
     * @readonly
     * @type {Function | String}
     */
    this._itemTextColor = itemTextColor;
};

/**
 * Sets the paint opacity of the item
 * @param {Function | Number} [itemPaintOpacity] - Paint opacity of the item
 */
DKTools.Window.Selectable.prototype.setupItemPaintOpacity = function(itemPaintOpacity) {
    /**
     * @private
     * @readonly
     * @type {Function | Number}
     */
    this._itemPaintOpacity = itemPaintOpacity;
};

/**
 * Sets the align of the item
 * @param {Function | String} itemAlign - Align of the item
 */
DKTools.Window.Selectable.prototype.setupItemAlign = function(itemAlign) {
    this._itemAlign = itemAlign;
};

/**
 * Sets the handler of draw of the item
 * @param {Function} [handler] - Handler of draw of the item
 */
DKTools.Window.Selectable.prototype.setupItemDrawHandler = function(handler) {
    this._itemDrawHandler = handler || this.standardItemDrawHandler();
};

/**
 * Sets the size of the window
 * @override
 * @param {Number | Object} [width] - Width of the window
 * @param {Number | String} [height] - Height of the window or number of lines (String)
 */
DKTools.Window.Selectable.prototype.setupSize = function(width, height) {
    if (DKTools.Utils.isString(height)) { // number of lines
        height = this.itemHeight() * parseFloat(height) + this._padding * 2;
    }

    Window.prototype.move.call(this, this.x, this.y, width, height);
};

// set methods

/**
 * Sets the items
 * Returns true if the change occurred
 * @param {Object[]} items - Items
 * @param {Boolean} [blockStart=false] - Blocking call of the "start" function
 * @return {Boolean} Change occurred
 */
DKTools.Window.Selectable.prototype.setItems = function(items, blockStart = false) {
    if (this._list == items) {
        return false;
    }

    this.setupItems(items);

    if (!blockStart) {
        this.start();
    }

    return true;
};

/**
 * Sets the max cols
 * Returns true if the change occurred
 * @param {Number} maxCols - Max cols
 * @param {Boolean} [blockStart=false] - Blocking call of the "start" function
 * @return {Boolean} Change occurred
 */
DKTools.Window.Selectable.prototype.setMaxCols = function(maxCols, blockStart = false) {
    if (this._maxCols === maxCols) {
        return false;
    }

    const lastMaxCols = this._maxCols;

    this.setupMaxCols(maxCols);

    if (this._maxCols === lastMaxCols) {
        return false;
    }

    if (!blockStart) {
        this.start();
    }

    return true;
};

// other S methods

/**
 * Selects the item
 * @version 1.1.5
 * @override
 * @param {Number} index - Index
 * @param {Boolean} [playCursor=false] - Play "cursor" sound
 */
DKTools.Window.Selectable.prototype.select = function(index, playCursor = false) {
    const item = this.item(index);

    Window_Selectable.prototype.select.call(this, index);

    if (this.isRefreshOnSelect()) {
        this.refreshAll();
    }

    if (playCursor) {
        this.playCursorSound();
    }

    if (item && DKTools.Utils.isFunction(item.selectHandler)) {
        item.selectHandler(index, this);
    }

    this.updateSelectEvents();
};

/**
 * Select symbol
 * @param {String} symbol - Symbol
 */
DKTools.Window.Selectable.prototype.selectSymbol = function(symbol) {
    const index = this.findSymbol(symbol);

    if (index >= 0) {
        this.forceSelect(index);
    } else {
        this.forceSelect(0);
    }
};

/**
 * Selects ext
 * @param {*} ext - Ext
 */
DKTools.Window.Selectable.prototype.selectExt = function(ext) {
    const index = this.findExt(ext);

    if (index >= 0) {
        this.forceSelect(index);
    } else {
        this.forceSelect(0);
    }
};

/**
 * Selects the first item
 * @param {Boolean} [smooth=false] - Smooth select
 * @param {Boolean} [playCursor=false] - Play "cursor" sound
 */
DKTools.Window.Selectable.prototype.selectFirstItem = function(smooth = false, playCursor = false) {
    if (smooth) {
        this.smoothSelect(0);
    } else {
        this.forceSelect(0);
    }

    if (playCursor) {
        this.playCursorSound();
    }
};

/**
 * Selects the last item
 * @param {Boolean} [smooth=false] - Smooth select
 * @param {Boolean} [playCursor=false] - Play "cursor" sound
 */
DKTools.Window.Selectable.prototype.selectLasItem = function(smooth = false, playCursor = false) {
    const index = this.maxItems() - 1;

    if (index === -1) {
        return;
    }

    if (smooth) {
        this.smoothSelect(index);
    } else {
        this.forceSelect(index);
    }

    if (playCursor) {
        this.playCursorSound();
    }
};

/**
 * Selects the previous item
 * @param {Boolean} [wrap=false] - Wrap cursor
 * @param {Boolean} [smooth=false] - Smooth select
 * @param {Boolean} [playCursor=false] - Play "cursor" sound
 */
DKTools.Window.Selectable.prototype.selectPrevItem = function(wrap = false, smooth = false, playCursor = false) {
    const index = this.prevIndex(wrap);

    if (index >= 0) {
        if (smooth) {
            this.smoothSelect(index);
        } else {
            this.forceSelect(index);
        }

        if (playCursor) {
            this.playCursorSound();
        }
    }
};

/**
 * Selects the next item
 * @param {Boolean} [wrap=false] - Wrap cursor
 * @param {Boolean} [smooth=false] - Smooth select
 * @param {Boolean} [playCursor=false] - Play "cursor" sound
 */
DKTools.Window.Selectable.prototype.selectNextItem = function(wrap = false, smooth = false, playCursor = false) {
    const index = this.nextIndex(wrap);

    if (index >= 0) {
        if (smooth) {
            this.smoothSelect(index);
        } else {
            this.forceSelect(index);
        }

        if (playCursor) {
            this.playCursorSound();
        }
    }
};

// T methods

/**
 * Returns the top column
 * @return {Number} Top column
 */
DKTools.Window.Selectable.prototype.topCol = function() {
    return Math.floor(this.scrollX() / this.itemWidth());
};

/**
 * Returns the top index
 * @override
 * @return {Number} Top index
 */
DKTools.Window.Selectable.prototype.topIndex = function() {
   return this.isHorizontal() ?
       this.topCol() : Window_Selectable.prototype.topIndex.apply(this, arguments);
};

// U methods

/**
 * Updates the origin
 * @override
 */
DKTools.Window.Selectable.prototype.updateOrigin = function() {
    Window_Selectable.prototype.updateOrigin.apply(this, arguments);
};

/**
 * Updates the window
 * @override
 */
DKTools.Window.Selectable.prototype.update = function() {
    Window_Selectable.prototype.update.apply(this, arguments);
    DKTools.Base.prototype.update.apply(this, arguments);
};

// events methods

/**
 * Updates the events with type: select
 * @version 1.1.6
 */
DKTools.Window.Selectable.prototype.updateSelectEvents = function() {
    this._eventsManager.updateEventsContainer('select', this._index);
};


