//===========================================================================
// DKTools.Sprite.Selectable
//===========================================================================

/**
 * Selectable class
 *
 * @class DKTools.Sprite.Selectable
 * @extends DKTools.Sprite.Button
 *
 * @memberof DKTools.Sprite
 *
 * @see DKTools.Sprite.Selectable.prototype.initialize
 */
DKTools.Sprite.Selectable = class extends DKTools.Sprite.Button {

    // A methods

    /**
     * Adds children objects to processing
     *
     * @private
     * @override
     *
     * @see DKTools.Sprite.Button.prototype._addAllChildren
     * @see DKTools.Sprite.Selectable.prototype._addCursorSprite
     */
    _addAllChildren() {
        DKTools.Sprite.Button.prototype._addAllChildren.call(this);
        this._addCursorSprite();
    }

    /**
     * Adds sprite of the cursor to processing
     *
     * @private
     */
    _addCursorSprite() {
        this.addChild(this._cursorSprite);
    }

    /**
     * Activates the object
     *
     * @override
     */
    activate() {
        DKTools.Sprite.Button.prototype.activate.call(this);
        this.reselect();
    }

    /**
     * Adds the item
     * Returns added item or null
     *
     * @version 5.0.0
     *
     * @param {Object} item - Item
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.getMaxItems
     * @see DKTools.Sprite.Selectable.prototype.insertItem
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Object | null} Added item or null
     */
    addItem(item, blockRefreshAll = false) {
        const addedItem = this.insertItem(item, this.getMaxItems() - 1, true);

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return addedItem;
    }

    /**
     * Adds the items
     * Returns added items
     *
     * @version 5.0.0
     *
     * @param {Object[]} items - Items
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.addItem
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Object[]} Added items
     */
    addItems(items, blockRefreshAll = false) {
        const addedItems = _.map(items, item => this.addItem(item, true));

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return addedItems;
    }

    // C methods

    /**
     * Clears all data
     *
     * @private
     * @override
     *
     * @see DKTools.Sprite.Button.prototype._clearAll
     * @see DKTools.Sprite.Selectable.prototype._clearItems
     * @see DKTools.Sprite.Selectable.prototype._clearHandlers
     * @see DKTools.Sprite.Selectable.prototype._clearTopRow
     * @see DKTools.Sprite.Selectable.prototype._clearTopCol
     */
    _clearAll() {
        DKTools.Sprite.Button.prototype._clearAll.call(this);
        this._clearItems();
        this._clearHandlers();
        this._clearTopRow();
        this._clearTopCol();
    }

    /**
     * Clears items
     *
     * @private
     */
    _clearItems() {
        /**
         * @private
         * @readonly
         * @type {Object[]}
         */
        this._items = [];
    }

    /**
     * Clears the selection handlers
     *
     * @private
     */
    _clearHandlers() {
        /**
         * @readonly
         * @private
         * @type {Object}
         */
        this._handlers = {};
    }

    /**
     * Clears the top row
     *
     * @private
     */
    _clearTopRow() {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._topRow = 0;
    }

    /**
     * Clears the top col
     *
     * @private
     */
    _clearTopCol() {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._topCol = 0;
    }

    /**
     * Creates all
     *
     * @private
     * @override
     *
     * @see DKTools.Sprite.Button.prototype._createAll
     * @see DKTools.Sprite.Selectable.prototype._createCursorSprite
     */
    _createAll() {
        DKTools.Sprite.Button.prototype._createAll.call(this);
        this._createCursorSprite();
    }

    /**
     * Creates sprite of the cursor
     *
     * @private
     *
     * @see DKTools.Sprite.Cursor
     */
    _createCursorSprite() {
        /**
         * @private
         * @readonly
         * @type {DKTools.Sprite.Cursor}
         */
        this._cursorSprite = new DKTools.Sprite.Cursor();
    }

    /**
     * Checks the item
     * Returns the checked item
     *
     * @private
     *
     * @param {Object} item - Item
     *
     * @see DKTools.Sprite.Selectable.prototype.setHandler
     *
     * @returns {Object} Checked item
     */
    _checkItem(item) {
        if (item.enabled === undefined) {
            item.enabled = true;
        }

        if (item.ext === undefined) {
            item.ext = null;
        }

        if (item.symbol && DKTools.Utils.isFunction(item.handler)) {
            this.setHandler(item.symbol, item.handler);
        }

        return item;
    }

    /**
     * Calls the handler of the symbol
     *
     * @param {String} symbol - Symbol
     *
     * @see DKTools.Sprite.Selectable.prototype.isHandled
     */
    callHandler(symbol) {
        if (this.isHandled(symbol)) {
            this._handlers[symbol](this._index, this);
        }
    }

    /**
     * Calls the handler of the Ok
     *
     * @see DKTools.Sprite.Selectable.prototype.getCurrentItemSymbol
     * @see DKTools.Sprite.Selectable.prototype.isHandled
     * @see DKTools.Sprite.Selectable.prototype.callHandler
     * @see DKTools.Sprite.Selectable.prototype.activate
     */
    callOkHandler() {
        const symbol = this.getCurrentItemSymbol();

        if (this.isHandled(symbol)) {
            this.callHandler(symbol);
        } else if (this.isHandled('ok')) {
            this.callHandler('ok');
        } else {
            this.activate();
        }
    }

    /**
     * Calls the handler of the cancel
     *
     * @see DKTools.Sprite.Selectable.prototype.callHandler
     */
    callCancelHandler() {
        this.callHandler('cancel');
    }

    /**
     * Clears the item
     *
     * @version 6.0.0
     *
     * @param {Number} index - Index
     *
     * @see DKTools.Sprite.Selectable.prototype.getItemRect
     * @see DKTools.Sprite.Selectable.prototype.clearRect
     */
    clearItem(index) {
        this.clearRect(this.getItemRect(index));
    }

    /**
     * Moves the cursor to down
     *
     * @version 6.1.0
     *
     * @param {Boolean} [wrap=false] - Cyclic selection
     *
     * @see DKTools.Sprite.Selectable.prototype.hasCursorDownHandler
     */
    cursorDown(wrap = false) {
        if (this.hasCursorDownHandler()) {
            this._cursorDownHandler(wrap, this);
        }
    }

    /**
     * Moves the cursor to up
     *
     * @version 6.1.0
     *
     * @param {Boolean} [wrap=false] - Cyclic selection
     *
     * @see DKTools.Sprite.Selectable.prototype.hasCursorUpHandler
     */
    cursorUp(wrap = false) {
        if (this.hasCursorUpHandler()) {
            this._cursorUpHandler(wrap, this);
        }
    }

    /**
     * Moves the cursor to right
     *
     * @version 6.1.0
     *
     * @param {Boolean} [wrap=false] - Cyclic selection
     *
     * @see DKTools.Sprite.Selectable.prototype.hasCursorRightHandler
     */
    cursorRight(wrap = false) {
        if (this.hasCursorRightHandler()) {
            this._cursorRightHandler(wrap, this);
        }
    }

    /**
     * Moves the cursor to left
     *
     * @version 6.1.0
     *
     * @param {Boolean} [wrap=false] - Cyclic selection
     *
     * @see DKTools.Sprite.Selectable.prototype.hasCursorRightHandler
     */
    cursorLeft(wrap = false) {
        if (this.hasCursorLeftHandler()) {
            this._cursorLeftHandler(wrap, this);
        }
    }

    /**
     * Moves the cursor to lower page
     *
     * @since 6.1.0
     *
     * @see DKTools.Sprite.Selectable.prototype.hasCursorPageDownHandler
     */
    cursorPageDown() {
        if (this.hasCursorPageDownHandler()) {
            this._cursorPageDownHandler(this);
        }
    }

    /**
     * Moves the cursor to upper page
     *
     * @since 6.1.0
     *
     * @see DKTools.Sprite.Selectable.prototype.hasCursorPageUpHandler
     */
    cursorPageUp() {
        if (this.hasCursorPageUpHandler()) {
            this._cursorPageUpHandler(this);
        }
    }

    // D methods

    /**
     * Deactivates the object
     *
     * @override
     *
     * @param {Boolean} [deselect=false] - Deselects the current item (selected item)
     *
     * @see DKTools.Sprite.Selectable.prototype.deselect
     */
    deactivate(deselect = false) {
        DKTools.Sprite.Button.prototype.deactivate.call(this);

        if (deselect) {
            this.deselect();
        }
    }

    /**
     * Deselects the current item (selected item)
     *
     * @see DKTools.Sprite.Selectable.prototype.selectItem
     */
    deselect() {
        this.selectItem(-1);
    }

    /**
     * Disables the item
     *
     * @version 6.0.0
     *
     * @param {Number} index - Index
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.getItem
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     */
    disableItem(index, blockRefreshAll = false) {
        const item = this.getItem(index) || {};

        item.enabled = false;

        if (!blockRefreshAll) {
            this.refreshAll();
        }
    }

    /**
     * Draws all
     *
     * @override
     */
    drawAll() {
        DKTools.Sprite.Button.prototype.drawAll.call(this);
        this.drawAllItems();
    }

    /**
     * Draws all items
     *
     * @version 5.0.0
     *
     * @see DKTools.Sprite.Selectable.prototype.getMaxPageItems
     * @see DKTools.Sprite.Selectable.prototype.getMaxItems
     * @see DKTools.Sprite.Selectable.prototype.getTopIndex
     * @see DKTools.Sprite.Selectable.prototype.drawItem
     */
    drawAllItems() {
        const maxPageItems = this.getMaxPageItems();
        const maxItems = this.getMaxItems();
        let index = this.getTopIndex();

        for (let i = 0; i < maxPageItems && index < maxItems; i++, index++) {
            this.drawItem(index);
        }
    }

    /**
     * Draws the item
     *
     * @version 6.0.0
     *
     * @param {Number} index - Index
     *
     * @see DKTools.Sprite.Selectable.prototype.getItem
     * @see DKTools.Sprite.Selectable.prototype.hasDrawItemHandler
     */
    drawItem(index) {
        const item = this.getItem(index) || {};

        if (DKTools.Utils.isFunction(item.drawHandler)) {
            item.drawHandler(index, this);
        } else if (this.hasDrawItemHandler()) {
            this._itemDrawHandler(index, this);
        }
    }

    // E methods

    /**
     * Enables the item
     *
     * @version 6.0.0
     *
     * @param {Number} index - Index
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.getItem
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     */
    enableItem(index, blockRefreshAll = false) {
        const item = this.getItem(index) || {};

        item.enabled = true;

        if (!blockRefreshAll) {
            this.refreshAll();
        }
    }

    // F methods

    /**
     * Returns the index of the item by symbol
     *
     * @param {Symbol} symbol - Symbol
     * @returns {Number} Index of the item by symbol
     */
    findSymbol(symbol) {
        return _.findIndex(this._items, { symbol });
    }

    /**
     * Returns the index of the item by ext
     *
     * @param {*} ext - Ext of the item
     * @returns {Number} Index of the item by ext
     */
    findExt(ext) {
        return _.findIndex(this._items, { ext });
    }

    // G methods

    /**
     * Returns the name of the item
     *
     * @version 6.0.0
     *
     * @param {Number} index - Index
     *
     * @returns {String | undefined} Name of the item
     */
    getItemName(index) {
        const item = this.getItem(index) || {};

        if (DKTools.Utils.isFunction(item.name)) {
            return item.name(index, this);
        }

        return item.name;
    }

    /**
     * Returns the name of the current item (selected item)
     *
     * @see DKTools.Sprite.Selectable.prototype.getItemName
     *
     * @returns {String | undefined} Name of the current item (selected item) or undefined
     */
    getCurrentItemName() {
        return this.getItemName(this._index);
    }

    /**
     * Returns the name of the last selected item
     *
     * @since 6.3.0
     *
     * @see DKTools.Sprite.Selectable.prototype.getItemName
     *
     * @returns {String | undefined} Name of the last selected item or undefined
     */
    getLastItemName() {
        return this.getItemName(this._lastIndex);
    }

    /**
     * Returns the rectangle of the item
     *
     * @version 6.0.0
     *
     * @param {Number} index - Index
     *
     * @see DKTools.Sprite.Selectable.prototype.getItem
     *
     * @returns {Rectangle} Rectangle of the item
     */
    getItemRect(index) {
        const item = this.getItem(index) || {};
        const itemRect = item.rect || this._itemRect;

        if (DKTools.Utils.isFunction(itemRect)) {
            return itemRect(index, this);
        }

        return itemRect;
    }

    /**
     * Returns the rectangle of the current item (selected item)
     *
     * @version 5.0.0
     *
     * @see DKTools.Sprite.Selectable.prototype.getItemRect
     *
     * @returns {Rectangle} Rectangle of the current item (selected item)
     */
    getCurrentItemRect() {
        return this.getItemRect(this._index);
    }

    /**
     * Returns the rectangle of the last selected item
     *
     * @since 6.3.0
     *
     * @see DKTools.Sprite.Selectable.prototype.getItemRect
     *
     * @returns {Rectangle} Rectangle of the last selected item
     */
    getLastItemRect() {
        return this.getItemRect(this._lastIndex);
    }

    /**
     * Returns the rectangle of text of the item
     *
     * @version 6.0.0
     *
     * @param {Number} index - Index
     *
     * @see DKTools.Sprite.Selectable.prototype.getItemRect
     *
     * @returns {Rectangle} Rectangle of text of the item
     */
    getItemRectForText(index) {
        const rect = this.getItemRect(index);

        rect.x += this._textPadding;
        rect.width -= this._textPadding * 2;

        return rect;
    }

    /**
     * Returns the rectangle of text of the current item (selected item)
     *
     * @since 6.3.0
     *
     * @see DKTools.Sprite.Selectable.prototype.getItemRectForText
     *
     * @returns {Rectangle} Rectangle of text of the current item (selected item)
     */
    getCurrentItemRectForText() {
        return this.getItemRectForText(this._index);
    }

    /**
     * Returns the rectangle of text of the last selected item
     *
     * @since 6.3.0
     *
     * @see DKTools.Sprite.Selectable.prototype.getItemRectForText
     *
     * @returns {Rectangle} Rectangle of text of the last selected item
     */
    getLastItemRectForText() {
        return this.getItemRectForText(this._lastIndex);
    }

    /**
     * Returns the width of the item
     *
     * @returns {Number} Width of the item
     */
    getItemWidth() {
        if (DKTools.Utils.isFunction(this._itemWidth)) {
            return this._itemWidth(this);
        }

        return this._itemWidth;
    }

    /**
     * Returns the height of the item
     *
     * @returns {Number} Height of the item
     */
    getItemHeight() {
        if (DKTools.Utils.isFunction(this._itemHeight)) {
            return this._itemHeight(this);
        } else if (DKTools.Utils.isString(this._itemHeight)) { // number of lines
            return this.getLineHeight() * parseFloat(this._itemHeight);
        }

        return this._itemHeight;
    }

    /**
     * Returns the item by index
     *
     * @param {Number} index - Index
     * @returns {Object | null} Item or null
     */
    getItem(index) {
        return this._items[index] || null;
    }

    /**
     * Returns the index of the item
     *
     * @param {Object} item - item
     * @returns {Number} Index of the item
     */
    getItemIndex(item) {
        return _.indexOf(this._items, item);
    }

    /**
     * Returns the font of the item
     *
     * @version 6.0.0
     *
     * @param {Number} index - Index
     *
     * @see DKTools.Sprite.Selectable.prototype.getItem
     *
     * @returns {Object} Font of the item
     */
    getItemFont(index) {
        const item = this.getItem(index) || {};
        const itemFont = item.font || this._itemFont;

        if (DKTools.Utils.isFunction(itemFont)) {
            return itemFont(index, this);
        }

        return itemFont;
    }

    /**
     * Returns the text color of the item
     *
     * @version 6.0.0
     *
     * @param {Number} index - Index
     *
     * @see DKTools.Sprite.Selectable.prototype.getItem
     *
     * @returns {String} Text color of the item
     */
    getItemTextColor(index) {
        const item = this.getItem(index) || {};
        const itemTextColor = item.textColor || this._itemTextColor;

        if (DKTools.Utils.isFunction(itemTextColor)) {
            return itemTextColor(index, this);
        }

        return itemTextColor;
    }

    /**
     * Returns the paint opacity of the item
     *
     * @version 6.0.0
     *
     * @param {Number} index - Index
     *
     * @see DKTools.Sprite.Selectable.prototype.getItem
     *
     * @returns {Number} Paint opacity of the item
     */
    getItemPaintOpacity(index) {
        const item = this.getItem(index) || {};

        if (DKTools.Utils.isFunction(item.paintOpacity)) {
            return item.paintOpacity(index, this);
        } else if (DKTools.Utils.isNumber(item.paintOpacity)) {
            return item.paintOpacity;
        } else if (DKTools.Utils.isFunction(this._itemPaintOpacity)) {
            return this._itemPaintOpacity(index, this);
        }

        return this._itemPaintOpacity;
    }

    /**
     * Returns the align of the item
     *
     * @version 6.0.0
     *
     * @param {Number} index - Index
     *
     * @see DKTools.Sprite.Selectable.prototype.getItem
     *
     * @returns {String} Align of the item
     */
    getItemAlign(index) {
        const item = this.getItem(index) || {};
        const itemAlign = item.align || this._itemAlign;

        if (DKTools.Utils.isFunction(itemAlign)) {
            return itemAlign(index, this);
        }

        return itemAlign;
    }

    /**
     * Returns the full info of the item
     *
     * @version 6.3.0
     * @since 6.0.0
     *
     * @param {Number} index - Index
     *
     * @returns {{ index: Number, item: Object, name: String, enabled: Boolean, handled: Boolean, selected: Boolean, rect: Rectangle, rectForText: Rectangle, font: Object, textColor: String, paintOpacity: Number, align: String }} Full info of the item
     */
    getItemFullInfo(index) {
        const item = this.getItem(index);

        return {
            ...item,
            index,
            item,
            name: this.getItemName(index),
            enabled: this.isItemEnabled(index),
            handled: this.isItemHandled(index),
            selected: this.isItemSelected(index),
            rect: this.getItemRect(index),
            rectForText: this.getItemRectForText(index),
            font: this.getItemFont(index),
            textColor: this.getItemTextColor(index),
            paintOpacity: this.getItemPaintOpacity(index),
            align: this.getItemAlign(index)
        };
    }

    /**
     * Returns the full info of the current item (selected item)
     *
     * @since 6.3.0
     *
     * @see DKTools.Sprite.prototype.getItemFullInfo
     *
     * @returns {{ index: Number, item: Object, name: String, enabled: Boolean, handled: Boolean, selected: Boolean, rect: Rectangle, rectForText: Rectangle, font: Object, textColor: String, paintOpacity: Number, align: String }} Full info
     */
    getCurrentItemFullInfo() {
        return this.getItemFullInfo(this._index);
    }

    /**
     * Returns the full info of the last selected item
     *
     * @since 6.3.0
     *
     * @see DKTools.Sprite.prototype.getItemFullInfo
     *
     * @returns {{ index: Number, item: Object, name: String, enabled: Boolean, handled: Boolean, selected: Boolean, rect: Rectangle, rectForText: Rectangle, font: Object, textColor: String, paintOpacity: Number, align: String }} Full info
     */
    getLastItemFullInfo() {
        return this.getItemFullInfo(this._lastIndex);
    }

    /**
     * Returns the previous index
     *
     * @param {Boolean} [wrap=false] - Cyclic selection
     * @returns {Number} Previous index
     */
    getPrevIndex(wrap = false) {
        if (this._index > 0) {
            return this._index - 1;
        } else if (wrap) {
            return this.getMaxItems() - 1;
        }

        return -1;
    }

    /**
     * Returns the next index
     *
     * @param {Boolean} [wrap=false] - Cyclic selection
     * @returns {Number} Next index
     */
    getNextIndex(wrap = false) {
        if (this._index < this.getMaxItems() - 1) {
            return this._index + 1;
        } else if (wrap) {
            return 0;
        }

        return -1;
    }

    /**
     * Returns the previous item
     *
     * @param {Boolean} [wrap=false] - Cyclic selection
     *
     * @see DKTools.Sprite.Selectable.prototype.getPrevIndex
     * @see DKTools.Sprite.Selectable.prototype.getItem
     *
     * @returns {Object | null} Previous item or null
     */
    getPrevItem(wrap = false) {
        return this.getItem(this.getPrevIndex(wrap));
    }

    /**
     * Returns the next item
     *
     * @param {Boolean} [wrap=false] - Cyclic selection
     *
     * @see DKTools.Sprite.Selectable.prototype.getNextIndex
     * @see DKTools.Sprite.Selectable.prototype.getItem
     *
     * @returns {Object | null} Next item or null
     */
    getNextItem(wrap = false) {
        return this.getItem(this.getNextIndex(wrap));
    }

    /**
     * Returns the current item (selected item)
     *
     * @see DKTools.Sprite.Selectable.prototype.getItem
     *
     * @returns {Object | null} Current item (selected item) or null
     */
    getCurrentItem() {
        return this.getItem(this._index);
    }

    /**
     * Returns the last selected item
     *
     * @since 6.3.0
     *
     * @see DKTools.Sprite.Selectable.prototype.getItem
     *
     * @returns {Object | null} Last selected item or null
     */
    getLastItem() {
        return this.getItem(this._lastIndex);
    }

    /**
     * Returns the visible items
     *
     * @returns {Object[]} Visible items
     */
    getVisibleItems() {
        const maxPageItems = this.getMaxPageItems();
        const maxItems = this.getMaxItems();
        const items = [];
        let index = this.getTopIndex();

        for (let i = 0; i < maxPageItems && index < maxItems; i++, index++) {
            items.push(this.getItem(index));
        }

        return items;
    }

    /**
     * Returns the symbol of the item by index
     *
     * @param {Number} index - Index
     * @returns {String | null} Symbol of the item by index or null
     */
    getItemSymbol(index) {
        const item = this.getItem(index);

        return item ? item.symbol : null;
    }

    /**
     * Returns the ext of the item by index
     *
     * @param {Number} index - Index
     * @returns {* | null} Ext of the item by index or null
     */
    getItemExt(index) {
        const item = this.getItem(index);

        return item ? item.ext : null;
    }

    /**
     * Returns the symbol of the current item (selected item)
     *
     * @see DKTools.Sprite.Selectable.prototype.getItemSymbol
     *
     * @returns {String | null} Symbol of the current item (selected item) or null
     */
    getCurrentItemSymbol() {
        return this.getItemSymbol(this._index);
    }

    /**
     * Returns the symbol of the last selected item
     *
     * @since 6.3.0
     *
     * @see DKTools.Sprite.Selectable.prototype.getItemSymbol
     *
     * @returns {String | null} Symbol of the last selected item or null
     */
    getLastItemSymbol() {
        return this.getItemSymbol(this._lastIndex);
    }

    /**
     * Returns the ext of the current item (selected item)
     *
     * @see DKTools.Sprite.Selectable.prototype.getItemExt
     *
     * @returns {* | null} Ext of the current item (selected item) or null
     */
    getCurrentItemExt() {
        return this.getItemExt(this._index);
    }

    /**
     * Returns the ext of the last selected item
     *
     * @since 6.3.0
     *
     * @see DKTools.Sprite.Selectable.prototype.getItemExt
     *
     * @returns {* | null} Ext of the last selected item or null
     */
    getLastItemExt() {
        return this.getItemExt(this._lastIndex);
    }

    /**
     * Returns the number of the items
     *
     * @returns {Number} Number of the items
     */
    getMaxItems() {
        return this._items.length;
    }

    /**
     * Returns the maximum number of the rows
     *
     * @returns {Number} Maximum number of the rows
     */
    getMaxRows() {
        if (this.isFixedHorizontal()) {
            return 1;
        }

        return Math.max(1, Math.ceil(this.getMaxItems() / this.getMaxCols()));
    }

    /**
     * Returns the maximum number of the columns
     *
     * @returns {Number} Maximum number of the columns
     */
    getMaxCols() {
        return this._maxCols;
    }

    /**
     * Returns the maximum top row
     *
     * @see DKTools.Sprite.Selectable.prototype.getMaxRows
     * @see DKTools.Sprite.Selectable.prototype.getMaxPageRows
     *
     * @returns {Number} Maximum top row
     */
    getMaxTopRow() {
        return Math.max(0, this.getMaxRows() - this.getMaxPageRows());
    }

    /**
     * Returns the maximum top column
     *
     * @see DKTools.Sprite.Selectable.prototype.getMaxItems
     * @see DKTools.Sprite.Selectable.prototype.getMaxPageCols
     *
     * @returns {Number} Maximum top column
     */
    getMaxTopCol() {
        return Math.max(0, this.getMaxItems() - this.getMaxPageCols());
    }

    /**
     * Returns the maximum page rows
     *
     * @version 8.0.0
     *
     * @see DKTools.Sprite.Selectable.prototype.getItemHeight
     * @see DKTools.Sprite.Selectable.prototype.getMaxRows
     *
     * @returns {Number} Maximum page rows
     */
    getMaxPageRows() {
        const spacing = this._verticalSpacing;
        const itemHeight = this.getItemHeight();
        const maxRows = this.getMaxRows();
        let height = this.height;
        let rows = 0;

        for (; rows < maxRows; rows++) {
            if (rows === maxRows - 1) {
                if (height - itemHeight < 0) {
                    break;
                }
            } else if (height - itemHeight - spacing < 0) {
                break;
            }

            height -= itemHeight + spacing;
        }

        return rows;
    }

    /**
     * Returns the maximum page columns
     *
     * @see DKTools.Sprite.Selectable.prototype.getMaxCols
     *
     * @returns {Number} Maximum page columns
     */
    getMaxPageCols() {
        return this.getMaxCols();
    }

    /**
     * Returns the maximum page items
     *
     * @see DKTools.Sprite.Selectable.prototype.isHorizontal
     * @see DKTools.Sprite.Selectable.prototype.getMaxPageCols
     * @see DKTools.Sprite.Selectable.prototype.getMaxPageRows
     *
     * @returns {Number} Maximum page items
     */
    getMaxPageItems() {
        if (this.isHorizontal()) {
            return this.getMaxPageCols();
        }

        return this.getMaxPageRows() * this.getMaxPageCols();
    }

    /**
     * Returns the row
     *
     * @since 6.0.0
     *
     * @param {Number} index - Index
     *
     * @see DKTools.Sprite.Selectable.prototype.getMaxCols
     *
     * @returns {Number} Row
     */
    getRow(index) {
        return Math.floor(index / this.getMaxCols());
    }

    /**
     * Returns the current row
     *
     * @see DKTools.Sprite.Selectable.prototype.getRow
     *
     * @returns {Number} Current row
     */
    getCurrentRow() {
        return this.getRow(this._index);
    }

    /**
     * Returns the row of the item
     *
     * @version 6.0.0
     *
     * @param {Number} index - Index
     *
     * @see DKTools.Sprite.Selectable.prototype.hasItem
     * @see DKTools.Sprite.Selectable.prototype.getRow
     *
     * @returns {Number} Row of the item or -1
     */
    getItemRow(index) {
        if (!this.hasItem(index)) {
            return -1;
        }

        return this.getRow(index);
    }

    /**
     * Returns the list of the items by row
     *
     * @param {Number} row - Row
     *
     * @see DKTools.Sprite.Selectable.prototype.getMaxRows
     * @see DKTools.Sprite.Selectable.prototype.getMaxPageItems
     * @see DKTools.Sprite.Selectable.prototype.getMaxItems
     * @see DKTools.Sprite.Selectable.prototype.getMaxCols
     * @see DKTools.Sprite.Selectable.prototype.getRow
     * @see DKTools.Sprite.Selectable.prototype.getItem
     *
     * @returns {Object[]} List of the items by row
     */
    getRowItems(row) {
        const items = [];

        if (DKTools.Utils.Number.inRange(row, 0, this.getMaxRows())) {
            const maxPageItems = this.getMaxPageItems();
            const maxItems = this.getMaxItems();
            let index = row * this.getMaxCols();

            for (let i = 0; i < maxPageItems && index < maxItems && this.getRow(index) === row; i++, index++) {
                items.push(this.getItem(index));
            }
        }

        return items;
    }

    /**
     * Returns the column
     *
     * @since 6.0.0
     *
     * @param {Number} index - Index
     *
     * @see DKTools.Sprite.Selectable.prototype.getMaxCols
     *
     * @returns {Number} Column
     */
    getCol(index) {
        return Math.floor(index % this.getMaxCols());
    }

    /**
     * Returns the current column
     *
     * @see DKTools.Sprite.Selectable.prototype.isHorizontal
     * @see DKTools.Sprite.Selectable.prototype.getCol
     *
     * @returns {Number} Current column
     */
    getCurrentCol() {
        if (this.isHorizontal()) {
            return this._index;
        }

        return this.getCol(this._index);
    }

    /**
     * Returns the column of the item
     *
     * @version 6.0.0
     *
     * @param {Number} index - Index or Item
     *
     * @see DKTools.Sprite.Selectable.prototype.hasItem
     * @see DKTools.Sprite.Selectable.prototype.getCol
     *
     * @returns {Number} Column of the item or -1
     */
    getItemCol(index) {
        if (!this.hasItem(index)) {
            return -1;
        }

        return this.getCol(index);
    }

    /**
     * Returns the list of the items by column
     *
     * @param {Number} col - Column
     *
     * @see DKTools.Sprite.Selectable.prototype.getMaxCols
     * @see DKTools.Sprite.Selectable.prototype.getMaxItems
     * @see DKTools.Sprite.Selectable.prototype.getCol
     * @see DKTools.Sprite.Selectable.prototype.getItem
     *
     * @returns {Object[]} List of the items by column
     */
    getColItems(col) {
        const items = [];

        if (DKTools.Utils.Number.inRange(col, 0, this.getMaxCols())) {
            const maxItems = this.getMaxItems();

            for (let index = 0; index < maxItems; index++) {
                if (this.getCol(index) === col) {
                    items.push(this.getItem(index));
                }
            }
        }

        return items;
    }

    /**
     * Returns the top index
     *
     * @see DKTools.Sprite.Selectable.prototype.isHorizontal
     * @see DKTools.Sprite.Selectable.prototype.getTopCol
     * @see DKTools.Sprite.Selectable.prototype.getTopRow
     * @see DKTools.Sprite.Selectable.prototype.getMaxCols
     *
     * @returns {Number} Top index
     */
    getTopIndex() {
        if (this.isHorizontal()) {
            return this.getTopCol();
        }

        return this.getTopRow() * this.getMaxCols();
    }

    /**
     * Returns the top row
     *
     * @returns {Number} Top row
     */
    getTopRow() {
        return this._topRow;
    }

    /**
     * Returns the top column
     *
     * @returns {Number} Top column
     */
    getTopCol() {
        return this._topCol;
    }

    /**
     * Returns the bottom row
     *
     * @see DKTools.Sprite.Selectable.prototype.getTopRow
     * @see DKTools.Sprite.Selectable.prototype.getMaxPageRows
     *
     * @returns {Number} Bottom row
     */
    getBottomRow() {
        return Math.max(0, this.getTopRow() + this.getMaxPageRows() - 1);
    }

    /**
     * Returns the bottom column
     *
     * @see DKTools.Sprite.Selectable.prototype.getTopCol
     * @see DKTools.Sprite.Selectable.prototype.getMaxPageCols
     *
     * @returns {Number} Bottom column
     */
    getBottomCol() {
        return Math.max(0, this.getTopCol() + this.getMaxPageCols() - 1);
    }

    /**
     * Returns the bottom index
     *
     * @see DKTools.Sprite.Selectable.prototype.getTopIndex
     * @see DKTools.Sprite.Selectable.prototype.getMaxPageItems
     * @see DKTools.Sprite.Selectable.prototype.getMaxItems
     *
     * @returns {Number} Bottom index
     */
    getBottomIndex() {
        return Math.min(this.getTopIndex() + this.getMaxPageItems(), this.getMaxItems()) - 1;
    }

    // H methods

    /**
     * Returns true if the item exists
     *
     * @version 6.0.0
     *
     * @param {Number} index - Index
     *
     * @see DKTools.Sprite.Selectable.prototype.getItem
     *
     * @returns {Boolean} Item exists
     */
    hasItem(index) {
        return !!this.getItem(index);
    }

    /**
     * Returns true if the items exists
     *
     * @see DKTools.Sprite.Selectable.prototype.getMaxItems
     *
     * @returns {Boolean} Items exists
     */
    hasItems() {
        return this.getMaxItems() > 0;
    }

    /**
     * Returns true if the item with symbol exists
     *
     * @since 6.1.0
     * @param {String} symbol - Symbol
     *
     * @returns {Boolean} Item with symbol exists
     */
    hasSymbol(symbol) {
        return _.includes(this._items, { symbol });
    }

    /**
     * Returns true if the item with ext exists
     *
     * @since 6.1.0
     * @param {*} ext - Ext
     *
     * @returns {Boolean} Item with ext exists
     */
    hasExt(ext) {
        return _.includes(this._items, { ext });
    }

    /**
     * Returns true if the handler of cursor down exists
     *
     * @since 6.1.0
     * @returns {Boolean} Handler of cursor down exists
     */
    hasCursorDownHandler() {
        return !!this._cursorDownHandler;
    }

    /**
     * Returns true if the handler of cursor up exists
     *
     * @since 6.1.0
     * @returns {Boolean} Handler of cursor up exists
     */
    hasCursorUpHandler() {
        return !!this._cursorUpHandler;
    }

    /**
     * Returns true if the handler of cursor right exists
     *
     * @since 6.1.0
     * @returns {Boolean} Handler of cursor right exists
     */
    hasCursorRightHandler() {
        return !!this._cursorRightHandler;
    }

    /**
     * Returns true if the handler of cursor left exists
     *
     * @since 6.1.0
     * @returns {Boolean} Handler of cursor left exists
     */
    hasCursorLeftHandler() {
        return !!this._cursorLeftHandler;
    }

    /**
     * Returns true if the handler of cursor page down exists
     *
     * @since 6.1.0
     * @returns {Boolean} Handler of cursor page down exists
     */
    hasCursorPageDownHandler() {
        return !!this._cursorPageDownHandler;
    }

    /**
     * Returns true if the handler of cursor page up exists
     *
     * @since 6.1.0
     * @returns {Boolean} Handler of cursor page up exists
     */
    hasCursorPageUpHandler() {
        return !!this._cursorPageUpHandler;
    }

    /**
     * Returns true if the handler of draw of the item exists
     *
     * @returns {Boolean} Handler of draw of the item exists
     */
    hasDrawItemHandler() {
        return !!this._itemDrawHandler;
    }

    /**
     * Hides the cursor
     */
    hideCursor() {
        this._cursorSprite.hide();
    }

    /**
     * @version 8.0.0
     *
     * @param {Number} x - The X coordinate
     * @param {Number} y - The Y coordinate
     *
     * @see DKTools.Sprite.Selectable.prototype.isOutside
     * @see DKTools.Sprite.Selectable.prototype.getLocalPoint
     * @see DKTools.Sprite.Selectable.prototype.getMaxPageItems
     * @see DKTools.Sprite.Selectable.prototype.getMaxItems
     * @see DKTools.Sprite.Selectable.prototype.getTopIndex
     * @see DKTools.Sprite.Selectable.prototype.getItemRect
     *
     * @returns {Number}
     */
    hitTest(x, y) {
        if (this.isOutside(x, y)) {
            return -1;
        }

        const scale = this.scale;
        const localPoint = this.getLocalPoint(x, y);
        const maxPageItems = this.getMaxPageItems();
        const maxItems = this.getMaxItems();
        let index = this.getTopIndex();

        for (let i = 0; i < maxPageItems && index < maxItems; i++, index++) {
            const rect = this.getItemRect(index);

            rect.x *= scale.x;
            rect.y *= scale.y;
            rect.width *= scale.x;
            rect.height *= scale.y;

            if (rect.contains(localPoint.x, localPoint.y)) {
                return index;
            }
        }

        return -1;
    }

    // I methods

    /**
     * Inserts the item
     * Returns inserted item or null
     *
     * @version 5.0.0
     *
     * @param {Object} item - Item
     * @param {Number} [index=0] - Index to insert
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype._checkItem
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Object | null} Inserted item or null
     */
    insertItem(item, index, blockRefreshAll = false) {
        const checkedItem = this._checkItem(item);

        DKTools.Utils.Array.insert(this._items, checkedItem, index);

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return checkedItem;
    }

    /**
     * Inserts the items
     * Returns inserted items
     *
     * @version 5.0.0
     *
     * @param {Object[]} items - Items
     * @param {Number} [index=0] - Index to insert
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.insertItem
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Object[]} Inserted items
     */
    insertItems(items, index, blockRefreshAll = false) {
        index = index || 0;

        const insertedItems = _.map(items, (item, i) => this.insertItem(item, index + i, true));

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return insertedItems;
    }

    /**
     * Returns true if the cursor is fixed
     *
     * @returns {Boolean} Cursor is fixed
     */
    isCursorFixed() {
        return this._cursorFixed;
    }

    /**
     * Returns true if the cursor all
     *
     * @returns {Boolean} Cursor all
     */
    isCursorAll() {
        return this._cursorAll;
    }

    /**
     * Returns true if the fixed horizontal position of the items
     *
     * @returns {Boolean} Fixed horizontal position of the items
     */
    isFixedHorizontal() {
        return this._fixedHorizontal;
    }

    /**
     * Returns true if the position of the items is horizontal
     *
     * @see DKTools.Sprite.Selectable.prototype.isFixedHorizontal
     * @see DKTools.Sprite.Selectable.prototype.getMaxPageRows
     *
     * @returns {Boolean} Position of the items is horizontal
     */
    isHorizontal() {
        return this.isFixedHorizontal() || this.getMaxPageRows() === 1;
    }

    /**
     * Returns true if the position of the items is vertical
     *
     * @see DKTools.Sprite.Selectable.prototype.isHorizontal
     *
     * @returns {Boolean} Position of the items is vertical
     */
    isVertical() {
        return !this.isHorizontal();
    }

    /**
     * Returns true if the cursor can move
     *
     * @see DKTools.Sprite.Selectable.prototype.isVisibleAndActive
     * @see DKTools.Sprite.Selectable.prototype.isCursorFixed
     * @see DKTools.Sprite.Selectable.prototype.isCursorAll
     * @see DKTools.Sprite.Selectable.prototype.hasItems
     *
     * @returns {Boolean} Cursor can move
     */
    isCursorMovable() {
        return this.isVisibleAndActive() && !this.isCursorFixed() && !this.isCursorAll() && this.hasItems();
    }

    /**
     * Returns true if the Ok is enabled
     *
     * @returns {Boolean} Ok is enabled
     */
    isOkEnabled() {
        return true;
    }

    /**
     * Returns true if the cancel is enabled
     *
     * @see DKTools.Sprite.Selectable.prototype.isHandled
     *
     * @returns {Boolean} Cancel is enabled
     */
    isCancelEnabled() {
        return this.isHandled('cancel');
    }

    /**
     * Returns true if the Ok is triggered
     *
     * @returns {Boolean} Ok is triggered
     */
    isOkTriggered() {
        return Input.isRepeated('ok');
    }

    /**
     * Returns true if the cancel is triggered
     *
     * @returns {Boolean} Cancel is triggered
     */
    isCancelTriggered() {
        return Input.isRepeated('cancel') || TouchInput.isCancelled();
    }

    /**
     * Returns true if the cursor is visible
     *
     * @see DKTools.Sprite.Selectable.prototype.isHorizontal
     * @see DKTools.Sprite.Selectable.prototype.getTopCol
     * @see DKTools.Sprite.Selectable.prototype.getBottomCol
     * @see DKTools.Sprite.Selectable.prototype.getCurrentRow
     * @see DKTools.Sprite.Selectable.prototype.getTopRow
     * @see DKTools.Sprite.Selectable.prototype.getBottomRow
     *
     * @returns {Boolean} Cursor is visible
     */
    isCursorVisible() {
        if (!this._cursorSprite.isVisible()) {
            return false;
        }

        if (this.isHorizontal()) {
            const col = this.getCurrentCol();

            return col >= this.getTopCol() && col <= this.getBottomCol();
        }

        const row = this.getCurrentRow();

        return row >= this.getTopRow() && row <= this.getBottomRow();
    }

    /**
     * Returns true if the item is enabled
     *
     * @version 6.0.0
     *
     * @param {Number} index - Index
     *
     * @see DKTools.Sprite.Selectable.prototype.getItem
     *
     * @returns {Boolean} Item is enabled
     */
    isItemEnabled(index) {
        const item = this.getItem(index) || {};
        const itemEnabled = item.enabled;

        if (DKTools.Utils.isFunction(itemEnabled)) {
            return itemEnabled(index, this);
        }

        return itemEnabled;
    }

    /**
     * Returns true if the current item (selected item) is enabled
     *
     * @see DKTools.Sprite.Selectable.prototype.isItemEnabled
     *
     * @returns {Boolean} Current item (selected item) is enabled
     */
    isCurrentItemEnabled() {
        return this.isItemEnabled(this._index);
    }

    /**
     * Returns true if the item is visible
     *
     * @version 6.0.0
     *
     * @param {Number} index - Index
     *
     * @see DKTools.Sprite.Selectable.prototype.getTopIndex
     * @see DKTools.Sprite.Selectable.prototype.getBottomIndex
     *
     * @returns {Boolean} Item is visible
     */
    isItemVisible(index) {
        return DKTools.Utils.Number.inRange(index, this.getTopIndex(), this.getBottomIndex() + 1);
    }

    /**
     * Returns true if the item is selected
     *
     * @since 6.0.0
     *
     * @param {Number} index - Index
     *
     * @returns {Boolean} Item is selected
     */
    isItemSelected(index) {
        return this._index === index;
    }

    /**
     * Returns true if the symbol is handling
     *
     * @param {String} symbol - Symbol
     * @returns {Boolean} Symbol is handling
     */
    isHandled(symbol) {
        return !!this._handlers[symbol];
    }

    /**
     * Returns true if the item is handling
     *
     * @since 6.1.0
     *
     * @param {Number} index - Index
     *
     * @see DKTools.Sprite.Selectable.prototype.getItem
     * @see DKTools.Sprite.Selectable.prototype.isHandled
     *
     * @returns {Boolean} Item is handling
     */
    isItemHandled(index) {
        const item = this.getItem(index) || {};

        return this.isHandled(item.symbol) || DKTools.Utils.isFunction(item.okHandler);
    }

    /**
     * Returns true if the current item (selected item) is handling
     *
     * @since 6.1.0
     *
     * DKTools.Sprite.Selectable.prototype.isItemHandled
     *
     * @returns {Boolean} Current item (selected item) is handling
     */
    isCurrentItemHandled() {
        return this.isItemHandled(this._index);
    }

    // O methods

    /**
     * @private
     * @param {Boolean} [triggered=false]
     *
     * @see DKTools.Sprite.Selectable.prototype.hitTest
     * @see DKTools.Sprite.Selectable.prototype.isOkEnabled
     * @see DKTools.Sprite.Selectable.prototype.isCursorMovable
     * @see DKTools.Sprite.Selectable.prototype.processOk
     * @see DKTools.Sprite.Selectable.prototype.selectItem
     * @see DKTools.Sprite.Selectable.prototype.playCursorSound
     */
    _onTouch(triggered = false) {
        const lastIndex = this._index;
        const x = TouchInput.x;
        const y = TouchInput.y;
        const hitIndex = this.hitTest(x, y);

        if (hitIndex >= 0) {
            if (this._index === hitIndex) {
                if (triggered && this.isOkEnabled()) {
                    this.processOk();
                }
            } else if (this.isCursorMovable()) {
                this.selectItem(hitIndex);
            }
        }

        if (this._index !== lastIndex) {
            this.playCursorSound();
        }
    }

    // P methods

    /**
     * Plays "ok" sound
     *
     * @see SoundManager.playOk
     */
    playOkSound() {
        SoundManager.playOk();
    }

    /**
     * Plays "cancel" sound
     *
     * @see SoundManager.playCancel
     */
    playCancelSound() {
        SoundManager.playCancel();
    }

    /**
     * Plays "cursor" sound
     *
     * @see SoundManager.playCursor
     */
    playCursorSound() {
        SoundManager.playCursor();
    }

    /**
     * Plays "buzzer" sound
     *
     * @see SoundManager.playBuzzer
     */
    playBuzzerSound() {
        SoundManager.playBuzzer();
    }

    /**
     * Processes all
     *
     * @override
     *
     * @see DKTools.Sprite.Selectable.prototype.processCursorMove
     * @see DKTools.Sprite.Selectable.prototype.processHandling
     */
    processAll() {
        DKTools.Sprite.Button.prototype.processAll.call(this);

        this.processCursorMove();
        this.processHandling();
    }

    /**
     * Processes the move of the cursor
     *
     * @see DKTools.Sprite.Selectable.prototype.isCursorMovable
     * @see DKTools.Sprite.Selectable.prototype.isHandled
     * @see DKTools.Sprite.Selectable.prototype.cursorDown
     * @see DKTools.Sprite.Selectable.prototype.cursorUp
     * @see DKTools.Sprite.Selectable.prototype.cursorRight
     * @see DKTools.Sprite.Selectable.prototype.cursorLeft
     * @see DKTools.Sprite.Selectable.prototype.cursorPageDown
     * @see DKTools.Sprite.Selectable.prototype.cursorPageUp
     * @see DKTools.Sprite.Selectable.prototype.playCursorSound
     */
    processCursorMove() {
        if (!this.isCursorMovable()) {
            return;
        }

        const lastIndex = this._index;

        if (Input.isRepeated('down')) {
            this.cursorDown(Input.isTriggered('down'));
        }

        if (Input.isRepeated('up')) {
            this.cursorUp(Input.isTriggered('up'));
        }

        if (Input.isRepeated('right')) {
            this.cursorRight(Input.isTriggered('right'));
        }

        if (Input.isRepeated('left')) {
            this.cursorLeft(Input.isTriggered('left'));
        }

        if (Input.isTriggered('pagedown')) {
            this.cursorPageDown();
        }

        if (Input.isTriggered('pageup')) {
            this.cursorPageUp();
        }

        if (this._index !== lastIndex) {
            this.playCursorSound();
        }
    }

    /**
     * Processes the handling
     *
     * @see DKTools.Sprite.Selectable.prototype.isVisibleAndActive
     * @see DKTools.Sprite.Selectable.prototype.isOkEnabled
     * @see DKTools.Sprite.Selectable.prototype.isOkTriggered
     * @see DKTools.Sprite.Selectable.prototype.isCancelEnabled
     * @see DKTools.Sprite.Selectable.prototype.isCancelTriggered
     * @see DKTools.Sprite.Selectable.prototype.isHandled
     * @see DKTools.Sprite.Selectable.prototype.processOk
     * @see DKTools.Sprite.Selectable.prototype.processCancel
     * @see DKTools.Sprite.Selectable.prototype.processPageDown
     * @see DKTools.Sprite.Selectable.prototype.processPageUp
     */
    processHandling() {
        if (!this.isVisibleAndActive()) {
            return;
        }

        if (this.isOkEnabled() && this.isOkTriggered()) {
            this.processOk();
        } else if (this.isCancelEnabled() && this.isCancelTriggered()) {
            this.processCancel();
        }
    }

    /**
     * Processes the hover of the mouse
     *
     * @version 8.0.0
     *
     * @see DKTools.Sprite.Selectable.prototype.isOptionEnabled
     * @see DKTools.Sprite.Selectable.prototype.isCursorMovable
     * @see DKTools.Sprite.Selectable.prototype.hitTest
     * @see DKTools.Sprite.Selectable.prototype.selectItem
     * @see DKTools.Sprite.Selectable.prototype.playCursorSound
     */
    processMouseHover() {
        if (this.isOptionEnabled('process-mouse-hover') && this.isCursorMovable() && TouchInput.date > Input.date) {
            const lastIndex = this._index;
            const x = TouchInput.mouseX;
            const y = TouchInput.mouseY;
            const hitIndex = this.hitTest(x, y);

            if (hitIndex >= 0 && hitIndex !== lastIndex) {
                this.selectItem(hitIndex, true);
            }
        }
    }

    /**
     * Processes the scroll of the mouse wheel
     *
     * @see DKTools.Sprite.Selectable.prototype.isOptionEnabled
     * @see DKTools.Sprite.Selectable.prototype.isVisibleAndActive
     * @see DKTools.Sprite.Selectable.prototype.isHorizontal
     * @see DKTools.Sprite.Selectable.prototype.scrollRight
     * @see DKTools.Sprite.Selectable.prototype.scrollDown
     * @see DKTools.Sprite.Selectable.prototype.scrollLeft
     * @see DKTools.Sprite.Selectable.prototype.scrollUp
     */
    processWheelScroll() {
        if (this.isOptionEnabled('process-wheel-scroll') && this.isVisibleAndActive()) {
            const wheelY = this._wheelY;

            if (wheelY > 0) {
                if (this.isHorizontal()) {
                    this.scrollRight();
                } else {
                    this.scrollDown();
                }
            } else {
                if (this.isHorizontal()) {
                    this.scrollLeft();
                } else {
                    this.scrollUp();
                }
            }
        }
    }

    /**
     * Processes ok
     *
     * @version 6.0.0
     *
     * @see DKTools.Sprite.Selectable.prototype.isCurrentItemEnabled
     * @see DKTools.Sprite.Selectable.prototype.updateInputData
     * @see DKTools.Sprite.Selectable.prototype.deactivate
     * @see DKTools.Sprite.Selectable.prototype.callOkHandler
     * @see DKTools.Sprite.Selectable.prototype.playOkSound
     * @see DKTools.Sprite.Selectable.prototype.playBuzzerSound
     */
    processOk() {
        if (this.isCurrentItemEnabled()) {
            this.playOkSound();
            this.updateInputData();
            this.deactivate();

            const item = this.getCurrentItem() || {};

            if (DKTools.Utils.isFunction(item.okHandler)) {
                item.okHandler(this._index, this);
            } else {
                this.callOkHandler();
            }
        } else {
            this.playBuzzerSound();
        }
    }

    /**
     * Processes cancel
     *
     * @version 6.0.0
     *
     * @see DKTools.Sprite.Selectable.prototype.playCancelSound
     * @see DKTools.Sprite.Selectable.prototype.updateInputData
     * @see DKTools.Sprite.Selectable.prototype.deactivate
     * @see DKTools.Sprite.Selectable.prototype.callCancelHandler
     */
    processCancel() {
        this.playCancelSound();
        this.updateInputData();
        this.deactivate();

        const item = this.getCurrentItem();

        if (item && DKTools.Utils.isFunction(item.cancelHandler)) {
            item.cancelHandler(this._index, this);
        } else {
            this.callCancelHandler();
        }
    }

    // R methods

    /**
     * Redraws the item
     *
     * @version 6.0.0
     *
     * @param {Number} index - Index
     *
     * @see DKTools.Sprite.Selectable.prototype.isItemVisible
     * @see DKTools.Sprite.Selectable.prototype.clearItem
     * @see DKTools.Sprite.Selectable.prototype.drawItem
     */
    redrawItem(index) {
        if (this.isItemVisible(index)) {
            this.clearItem(index);
            this.drawItem(index);
        }
    }

    /**
     * Redraws the current item (selected item)
     *
     * @see DKTools.Sprite.Selectable.prototype.redrawItem
     */
    redrawCurrentItem() {
        this.redrawItem(this._index);
    }

    /**
     * Removes the handler of the symbol
     *
     * @param {String} symbol - Symbol
     */
    removeHandler(symbol) {
        delete this._handlers[symbol];
    }

    /**
     * Removes the item
     * Returns the removed item or null
     *
     * @version 6.0.0
     *
     * @param {Number} index - Index
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.getItem
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Object | null} Removed item or null
     */
    removeItem(index, blockRefreshAll = false) {
        const item = this.getItem(index);

        if (!item) {
            return null;
        }

        DKTools.Utils.Array.remove(this._items, item);

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return item;
    }

    /**
     * Removes the items
     * Returns removed items
     *
     * @version 6.0.0
     *
     * @param {Number[]} items - Indexes
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.removeItem
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Object[]} Removed items
     */
    removeItems(items, blockRefreshAll = false) {
        const removedItems = _.map(items, item => this.removeItem(item, true));

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return removedItems;
    }

    /**
     * Replaces the item
     * Returns replaced item or null
     *
     * @version 5.0.0
     *
     * @param {Object} item - Item
     * @param {Number} [index=0] - Index
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype._checkItem
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Object | null} Replaced item
     */
    replaceItem(item, index, blockRefreshAll = false) {
        const checkedItem = this._checkItem(item);

        index = index || 0;

        const replacedItem = this._items[index];

        this._items[index] = checkedItem;

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return replacedItem;
    }

    /**
     * Reselects the current item (selected item)
     *
     * @see DKTools.Sprite.Selectable.prototype.selectItem
     */
    reselect() {
        this.selectItem(this._index);
    }

    /**
     * Resets the scroll
     *
     * @see DKTools.Sprite.Selectable.prototype.selectItem
     */
    resetScroll() {
        if (this._index !== 0) {
            this.selectItem(0);
        }
    }

    // S methods

    /**
     * Sets the events
     *
     * @version 3.0.0
     * @private
     * @override
     *
     * @see DKTools.Sprite.Button.prototype._setupEvents
     * @see DKTools.Sprite.Selectable.prototype._setupMouseClickEvent
     * @see DKTools.Sprite.Selectable.prototype._setupMouseLongPressEvent
     * @see DKTools.Sprite.Selectable.prototype._setupMouseHoverEvents
     * @see DKTools.Sprite.Selectable.prototype._setupWheelScrollEvents
     */
    _setupEvents() {
        DKTools.Sprite.Button.prototype._setupEvents.call(this);
        this._setupMouseClickEvent();
        this._setupMouseLongPressEvent();
        this._setupMouseHoverEvents();
        this._setupWheelScrollEvents();
    }

    /**
     * Sets the event of the click (mouse-click-left)
     *
     * @private
     *
     * @see DKTools.Sprite.Selectable.prototype.addEvent
     */
    _setupMouseClickEvent() {
        this.addEvent({
            type: 'mouse-click-left',
            onUpdate: this._onTouch.bind(this, true)
        });
    }

    /**
     * Sets the event of the long press (mouse-long-press-left)
     *
     * @private
     *
     * @see DKTools.Sprite.Selectable.prototype.addEvent
     */
    _setupMouseLongPressEvent() {
        this.addEvent({
            type: 'mouse-long-press-left',
            onUpdate: this._onTouch.bind(this, false)
        });
    }

    /**
     * Sets the events of the mouse hover (mouse-enter and mouse-move)
     *
     * @private
     *
     * @see DKTools.Sprite.Selectable.prototype.addEvent
     */
    _setupMouseHoverEvents() {
        this.addEvent({
            type: 'mouse-enter',
            onUpdate: this.processMouseHover.bind(this)
        });

        this.addEvent({
            type: 'mouse-move',
            onUpdate: this.processMouseHover.bind(this)
        });
    }

    /**
     * Sets the events of the wheel scrolling (wheel-Y-inside and wheel-Y-outside)
     *
     * @private
     *
     * @see DKTools.Sprite.Selectable.prototype.addEvent
     */
    _setupWheelScrollEvents() {
        this.addEvent({
            type: 'wheel-Y-inside',
            onUpdate: this.processWheelScroll.bind(this)
        });

        this.addEvent({
            type: 'wheel-Y-outside',
            onUpdate: this.processWheelScroll.bind(this)
        });
    }

    /**
     * Returns the standard index
     *
     * @returns {Number} Standard index
     */
    standardIndex() {
        return 0;
    }

    /**
     * Returns the standard number of the columns
     *
     * @returns {Number} Standard number of the columns
     */
    standardMaxCols() {
        return 1;
    }

    /**
     * Returns the standard fixed cursor
     *
     * @returns {Boolean} Standard fixed cursor
     */
    standardCursorFixed() {
        return false;
    }

    /**
     * Returns the standard cursor all
     *
     * @returns {Boolean} Standard cursor all
     */
    standardCursorAll() {
        return false;
    }

    /**
     * Returns the standard fixed horizontal position
     *
     * @returns {Boolean} Standard fixed horizontal position
     */
    standardFixedHorizontal() {
        return false;
    }

    /**
     * Returns the standard horizontal spacing
     *
     * @returns {Number} Standard horizontal spacing
     */
    standardHorizontalSpacing() {
        return 0;
    }

    /**
     * Returns the standard vertical spacing
     *
     * @returns {Number} Standard vertical spacing
     */
    standardVerticalSpacing() {
        return 0;
    }

    /**
     * Returns the standard text padding
     *
     * @returns {Number} Standard text padding
     */
    standardTextPadding() {
        return 6;
    }

    /**
     * Returns the standard handler of cursor down
     *
     * @since 6.1.0
     *
     * @returns {Function} Standard handler of cursor down
     */
    standardCursorDownHandler() {
        return (wrap) => {
            if (this.isHorizontal()) {
                return;
            }

            const index = this._index;
            const maxItems = this.getMaxItems();
            const maxCols = this.getMaxCols();

            if (index < maxItems - maxCols || (wrap && maxItems === this.getMaxRows() * maxCols)) {
                this.selectItem((index + maxCols) % maxItems);
            }
        };
    }

    /**
     * Returns the standard handler of cursor up
     *
     * @since 6.1.0
     *
     * @returns {Function} Standard handler of cursor up
     */
    standardCursorUpHandler() {
        return (wrap) => {
            if (this.isHorizontal()) {
                return;
            }

            const index = this._index;
            const maxItems = this.getMaxItems();
            const maxCols = this.getMaxCols();

            if (index >= maxCols || (wrap && maxItems === this.getMaxRows() * maxCols)) {
                this.selectItem((index - maxCols + maxItems) % maxItems);
            }
        };
    }

    /**
     * Returns the standard handler of cursor right
     *
     * @since 6.1.0
     *
     * @returns {Function} Standard handler of cursor right
     */
    standardCursorRightHandler() {
        return (wrap) => {
            const maxItems = this.getMaxItems();

            if (maxItems < 2) {
                return;
            }

            if (this.isVertical()) {
                const index = this._index;
                const maxCols = this.getMaxCols();

                if (maxCols >= 2 && (index < maxItems - 1 || wrap)) {
                    this.selectItem((index + 1) % maxItems);
                }
            } else {
                this.selectNextItem(wrap);
            }
        };
    }

    /**
     * Returns the standard handler of cursor left
     *
     * @since 6.1.0
     *
     * @returns {Function} Standard handler of cursor left
     */
    standardCursorLeftHandler() {
        return (wrap) => {
            const maxItems = this.getMaxItems();

            if (maxItems < 2) {
                return;
            }

            if (this.isVertical()) {
                const index = this._index;
                const maxCols = this.getMaxCols();

                if (maxCols >= 2 && (index > 0 || wrap)) {
                    this.selectItem((index - 1 + maxItems) % maxItems);
                }
            } else {
                this.selectPrevItem(wrap);
            }
        };
    }

    /**
     * Returns the standard handler of cursor page down
     *
     * @since 6.1.0
     *
     * @returns {Function} Standard handler of cursor page down
     */
    standardCursorPageDownHandler() {
        return () => {
            if (this.isHorizontal()) {
                const topCol = this.getTopCol();
                const maxPageCols = this.getMaxPageCols();
                const maxItems = this.getMaxItems();

                if (topCol + maxPageCols < maxItems) {
                    this.setTopCol(topCol + maxPageCols);
                    this.selectItem(Math.min(this._index + this.getMaxPageItems(), maxItems - 1));
                }
            } else {
                const topRow = this.getTopRow();
                const maxPageRows = this.getMaxPageRows();

                if (topRow + maxPageRows < this.getMaxRows()) {
                    this.setTopRow(topRow + maxPageRows);
                    this.selectItem(Math.min(this._index + this.getMaxPageItems(), this.getMaxItems() - 1));
                }
            }
        };
    }

    /**
     * Returns the standard handler of cursor page up
     *
     * @since 6.1.0
     *
     * @returns {Function} Standard handler of cursor page up
     */
    standardCursorPageUpHandler() {
        return () => {
            if (this.isHorizontal()) {
                const topCol = this.getTopCol();

                if (topCol > 0) {
                    this.setTopCol(topCol - this.getMaxPageCols());
                    this.selectItem(Math.max(0, this._index - this.getMaxPageItems()));
                }
            } else {
                const topRow = this.getTopRow();

                if (topRow > 0) {
                    this.setTopRow(topRow - this.getMaxPageRows());
                    this.selectItem(Math.max(0, this._index - this.getMaxPageItems()));
                }
            }
        };
    }

    /**
     * Returns the standard list of the items
     *
     * @returns {Array} Standard list of the items
     */
    standardItems() {
        return [];
    }

    /**
     * Returns the standard handler of draw of the item
     *
     * @returns {Function} Standard handler of draw of the item
     */
    standardItemDrawHandler() {
        return index => {
            const name = this.getItemName(index);
            const font = this.getItemFont(index);
            const textColor = this.getItemTextColor(index);
            const paintOpacity = this.getItemPaintOpacity(index);
            const align = this.getItemAlign(index);
            const rect = this.getItemRectForText(index);

            this.drawText(name, {
                font,
                textColor,
                paintOpacity,
                align,
                rect,
                resetFont: true,
                resetTextColor: true,
                resetPaintOpacity: true
            });
        };
    }

    /**
     * Returns the standard item width
     *
     * @version 8.0.0
     * @returns {Function} Standard item width
     */
    standardItemWidth() {
        return () => Math.floor((this.width + this._horizontalSpacing) / this.getMaxCols() - this._horizontalSpacing);
    }

    /**
     * Returns the standard item height
     *
     * @returns {Function} Standard item height
     */
    standardItemHeight() {
        return this.getLineHeight();
    }

    /**
     * Returns the standard item rect
     *
     * @returns {Function} Standard item rect
     */
    standardItemRect() {
        return index => {
            const rect = new Rectangle(0, 0, this.getItemWidth(), this.getItemHeight());
            const maxCols = this.getMaxCols();

            if (this.isHorizontal()) {
                rect.x = (index - this.getTopCol()) * (rect.width + this._horizontalSpacing);
                rect.y = 0;
            } else {
                rect.x = (index % maxCols) * (rect.width + this._horizontalSpacing);
                rect.y = (Math.floor(index / maxCols) - this.getTopRow()) * (rect.height + this._verticalSpacing);
            }

            return rect;
        };
    }

    /**
     * Returns the standard item font
     *
     * @version 5.0.0
     *
     * @returns {Object} Standard item font
     */
    standardItemFont() {
        return () => this.font;
    }

    /**
     * Returns the standard text color of the item
     *
     * @version 5.0.0
     *
     * @returns {String} Standard text color of the item
     */
    standardItemTextColor() {
        return () => this.textColor;
    }

    /**
     * Returns the standard paint opacity of the item
     *
     * @returns {Number} Standard paint opacity of the item
     */
    standardItemPaintOpacity() {
        return index => {
            if (this.isItemEnabled(index)) {
                return this.standardEnabledItemPaintOpacity();
            } else {
                return this.standardDisabledItemPaintOpacity();
            }
        };
    }

    /**
     * Returns the standard paint opacity of the enabled item
     *
     * @returns {Number} Standard paint opacity of the enabled item
     */
    standardEnabledItemPaintOpacity() {
        return 255;
    }

    /**
     * Returns the standard paint opacity of the disabled item
     *
     * @returns {Number} Standard paint opacity of the disabled item
     */
    standardDisabledItemPaintOpacity() {
        try {
            return Window_Base.prototype.translucentOpacity.call(this);
        } catch (e) {
            return 160;
        }
    }

    /**
     * Returns the standard item align
     *
     * @returns {String} Standard item align
     */
    standardItemAlign() {
        return this.align;
    }

    /**
     * Sets all parameters
     *
     * @version 6.1.0
     * @override
     *
     * @param {Object} [object={}] - Parameters
     *
     * @param {Number} [object.index] - Index
     * @param {Number} [object.maxCols] - Number of the columns
     * @param {Boolean} [object.fixedHorizontal] - Fixed horizontal position
     * @param {Boolean} [object.cursorFixed] - Fixed cursor
     * @param {Boolean} [object.cursorAll] - Cursor all
     * @param {Number} [object.horizontalSpacing] - Horizontal spacing
     * @param {Number} [object.verticalSpacing] - Vertical spacing
     * @param {Number} [object.textPadding] - Text padding
     * @param {Object[]} [object.items] - List of the items
     * @param {Function} [object.drawItemHandler] - Handler of draw of the item
     * @param {Function | Number} [object.itemWidth] - Width of the item
     * @param {Function | Number} [object.itemHeight] - Height of the item
     * @param {Function} [object.itemRect] - Rectangle of the item
     * @param {Function | Object} [object.itemFont] - Font of the item
     * @param {Function | String} [object.itemTextColor] - Text color of the item
     * @param {Function | Number} [object.itemPaintOpacity] - Paint opacity of the item
     * @param {Function | String} [object.itemAlign] - Align of the item
     *
     * @param {String} [object.font.fontFace] - Font face
     * @param {Number} [object.font.fontSize] - Font size
     * @param {Boolean} [object.font.fontItalic] - Font italic
     *
     * @see DKTools.Sprite.Button.prototype.setupAll
     * @see DKTools.Sprite.Selectable.prototype.setupIndex
     * @see DKTools.Sprite.Selectable.prototype.setupMaxCols
     * @see DKTools.Sprite.Selectable.prototype.setupFixedHorizontal
     * @see DKTools.Sprite.Selectable.prototype.setupCursorFixed
     * @see DKTools.Sprite.Selectable.prototype.setupCursorAll
     * @see DKTools.Sprite.Selectable.prototype.setupSpacing
     * @see DKTools.Sprite.Selectable.prototype.setupTextPadding
     * @see DKTools.Sprite.Selectable.prototype.setupItems
     * @see DKTools.Sprite.Selectable.prototype.setupItemDrawHandler
     * @see DKTools.Sprite.Selectable.prototype.setupItemWidth
     * @see DKTools.Sprite.Selectable.prototype.setupItemHeight
     * @see DKTools.Sprite.Selectable.prototype.setupItemRect
     * @see DKTools.Sprite.Selectable.prototype.setupItemFont
     * @see DKTools.Sprite.Selectable.prototype.setupItemTextColor
     * @see DKTools.Sprite.Selectable.prototype.setupItemPaintOpacity
     * @see DKTools.Sprite.Selectable.prototype.setupItemAlign
     */
    setupAll(object = {}) {
        object = object || {};

        DKTools.Sprite.Button.prototype.setupAll.call(this, object);

        this.setupIndex(object.index);
        this.setupMaxCols(object.maxCols);
        this.setupFixedHorizontal(object.fixedHorizontal);
        this.setupCursorFixed(object.cursorFixed);
        this.setupCursorAll(object.cursorAll);
        this.setupCursorDownHandler(object.cursorDownHandler);
        this.setupCursorUpHandler(object.cursorUpHandler);
        this.setupCursorRightHandler(object.cursorRightHandler);
        this.setupCursorLeftHandler(object.cursorLeftHandler);
        this.setupCursorPageDownHandler(object.cursorPageDownHandler);
        this.setupCursorPageUpHandler(object.cursorPageUpHandler);
        this.setupSpacing(object.horizontalSpacing, object.verticalSpacing);
        this.setupTextPadding(object.textPadding);
        this.setupItems(object.items);
        this.setupItemDrawHandler(object.drawItemHandler);
        this.setupItemWidth(object.itemWidth);
        this.setupItemHeight(object.itemHeight);
        this.setupItemRect(object.itemRect);
        this.setupItemFont(object.itemFont);
        this.setupItemTextColor(object.itemTextColor);
        this.setupItemPaintOpacity(object.itemPaintOpacity);
        this.setupItemAlign(object.itemAlign);
    }

    /**
     * Sets the index
     *
     * @version 6.0.0
     *
     * @param {Number} [index=this.standardIndex()] - Index
     *
     * @see DKTools.Sprite.Selectable.prototype.standardIndex
     */
    setupIndex(index) {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._lastIndex = this._index;

        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._index = _.defaultTo(index, this.standardIndex());
    }

    /**
     * Sets the number of the columns
     *
     * @param {Number} [cols=this.standardMaxCols()] - Number of the columns
     *
     * @see DKTools.Sprite.Selectable.prototype.standardMaxCols
     */
    setupMaxCols(cols) {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._maxCols = cols || this.standardMaxCols();
    }

    /**
     * Sets the fixed horizontal position
     *
     * @param {Boolean} [fixedHorizontal=this.standardFixedHorizontal()] - Fixed horizontal position
     *
     * @see DKTools.Sprite.Selectable.prototype.standardFixedHorizontal
     */
    setupFixedHorizontal(fixedHorizontal) {
        /**
         * @private
         * @readonly
         * @type {Boolean}
         */
        this._fixedHorizontal = _.defaultTo(fixedHorizontal, this.standardFixedHorizontal());
    }

    /**
     * Sets the fixed cursor
     *
     * @param {Boolean} [cursorFixed=this.standardCursorFixed()] - Fixed cursor
     *
     * @see DKTools.Sprite.Selectable.prototype.standardCursorFixed
     */
    setupCursorFixed(cursorFixed) {
        /**
         * @private
         * @readonly
         * @type {Boolean}
         */
        this._cursorFixed = _.defaultTo(cursorFixed, this.standardCursorFixed());
    }

    /**
     * Sets the cursor all
     *
     * @param {Boolean} [cursorAll=this.standardCursorAll()] - Cursor all
     *
     * @see DKTools.Sprite.Selectable.prototype.standardCursorAll
     */
    setupCursorAll(cursorAll) {
        /**
         * @private
         * @readonly
         * @type {Boolean}
         */
        this._cursorAll = _.defaultTo(cursorAll, this.standardCursorAll());
    }

    /**
     * Sets the handler of cursor down
     *
     * @since 6.1.0
     *
     * @param {Function} [handler] - Handler of cursor down
     *
     * @see DKTools.Sprite.Selectable.prototype.standardCursorDownHandler
     */
    setupCursorDownHandler(handler) {
        this._cursorDownHandler = handler || this.standardCursorDownHandler();
    }

    /**
     * Sets the handler of cursor up
     *
     * @since 6.1.0
     *
     * @param {Function} [handler] - Handler of cursor up
     *
     * @see DKTools.Sprite.Selectable.prototype.standardCursorUpHandler
     */
    setupCursorUpHandler(handler) {
        this._cursorUpHandler = handler || this.standardCursorUpHandler();
    }

    /**
     * Sets the handler of cursor right
     *
     * @since 6.1.0
     *
     * @param {Function} [handler] - Handler of cursor right
     *
     * @see DKTools.Sprite.Selectable.prototype.standardCursorRightHandler
     */
    setupCursorRightHandler(handler) {
        this._cursorRightHandler = handler || this.standardCursorRightHandler();
    }

    /**
     * Sets the handler of cursor left
     *
     * @since 6.1.0
     *
     * @param {Function} [handler] - Handler of cursor left
     *
     * @see DKTools.Sprite.Selectable.prototype.standardCursorLeftHandler
     */
    setupCursorLeftHandler(handler) {
        this._cursorLeftHandler = handler || this.standardCursorLeftHandler();
    }

    /**
     * Sets the handler of cursor page down
     *
     * @since 6.1.0
     *
     * @param {Function} [handler] - Handler of cursor page down
     *
     * @see DKTools.Sprite.Selectable.prototype.standardCursorPageDownHandler
     */
    setupCursorPageDownHandler(handler) {
        this._cursorPageDownHandler = handler || this.standardCursorPageDownHandler();
    }

    /**
     * Sets the handler of cursor page up
     *
     * @since 6.1.0
     *
     * @param {Function} [handler] - Handler of cursor page up
     *
     * @see DKTools.Sprite.Selectable.prototype.standardCursorPageUpHandler
     */
    setupCursorPageUpHandler(handler) {
        this._cursorPageUpHandler = handler || this.standardCursorPageUpHandler();
    }

    /**
     * Sets the horizontal spacing
     *
     * @param {Number} [spacing] - Horizontal spacing
     *
     * @see DKTools.Sprite.Selectable.prototype.standardHorizontalSpacing
     */
    setupHorizontalSpacing(spacing) {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._horizontalSpacing = _.defaultTo(spacing, this.standardHorizontalSpacing());
    }

    /**
     * Sets the vertical spacing
     *
     * @param {Number} [spacing] - Vertical spacing
     *
     * @see DKTools.Sprite.Selectable.prototype.standardVerticalSpacing
     */
    setupVerticalSpacing(spacing) {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._verticalSpacing = _.defaultTo(spacing, this.standardVerticalSpacing());
    }

    /**
     * Sets the horizontal and vertical spacings
     *
     * @param {Number} [horizontalSpacing] - Horizontal spacing
     * @param {Number} [verticalSpacing] - Vertical spacing
     *
     * @see DKTools.Sprite.Selectable.prototype.setupHorizontalSpacing
     * @see DKTools.Sprite.Selectable.prototype.setupVerticalSpacing
     */
    setupSpacing(horizontalSpacing, verticalSpacing) {
        this.setupHorizontalSpacing(horizontalSpacing);
        this.setupVerticalSpacing(verticalSpacing);
    }

    /**
     * Sets the text padding
     *
     * @param {Number} [textPadding] - Text padding
     *
     * @see DKTools.Sprite.Selectable.prototype.standardTextPadding
     */
    setupTextPadding(textPadding) {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._textPadding = _.defaultTo(textPadding, this.standardTextPadding());
    }

    /**
     * Sets the list of the items
     *
     * @version 6.1.0
     *
     * @param {Object[]} [items] - Items
     *
     * @param {Function | String} [items[].name] - Item name
     * @param {Function | PIXI.Rectangle | Rectangle | Object} [items[].rect] - Item rect
     * @param {Function | String} [items[].align] - Item align
     * @param {Function | String} [items[].textColor] - Item text color
     * @param {Function | Object} [items[].font] - Item font
     * @param {Function | Number} [items[].paintOpacity] - Item paint opacity
     * @param {Function | Boolean} [items[].enabled] - Item activity
     * @param {String} [items[].symbol] - Item symbol
     * @param {Function} [items[].handler] - Symbol handler
     * @param {Function} [items[].drawHandler] - Handler of draw of the item
     * @param {Function} [items[].selectHandler] - Item select handler
     * @param {Function} [items[].okHandler] - Item ok handler
     * @param {Function} [items[].cancelHandler] - Item cancel handler
     *
     * @param {Number} [items[].rect.x] - The X coordinate
     * @param {Number} [items[].rect.y] - The Y coordinate
     * @param {Number} [items[].rect.width] - Width of the rectangle
     * @param {Number} [items[].rect.height] - Height of the rectangle
     *
     * @param {String} [items[].font.fontFace] - Font face
     * @param {Boolean} [items[].font.fontItalic] - Font italic
     * @param {Number} [items[].font.fontSize] - Font size
     *
     * @see DKTools.Sprite.Selectable.prototype.standardItems
     */
    setupItems(items) {
        this._items = _.map(items || this.standardItems(), item => this._checkItem(item));
    }

    /**
     * Sets the handler of draw of the item
     *
     * @since 6.1.0
     *
     * @param {Function} [handler] - Handler of draw of the item
     *
     * @see DKTools.Sprite.Selectable.prototype.standardItemDrawHandler
     */
    setupItemDrawHandler(handler) {
        /**
         * @since 6.1.0
         * @private
         * @readonly
         * @type {Function}
         */
        this._itemDrawHandler = handler || this.standardItemDrawHandler();
    }

    /**
     * Sets the width of the item
     *
     * @param {Function | Number} [itemWidth] - Width of the item
     *
     * @see DKTools.Sprite.Selectable.prototype.standardItemWidth
     */
    setupItemWidth(itemWidth) {
        /**
         * @private
         * @readonly
         * @type {Function | Number}
         */
        this._itemWidth = itemWidth || this.standardItemWidth();
    }

    /**
     * Sets the height of the item
     *
     * @param {Function | Number} [itemHeight] - Height of the item
     *
     * @see DKTools.Sprite.Selectable.prototype.standardItemHeight
     */
    setupItemHeight(itemHeight) {
        /**
         * @private
         * @readonly
         * @type {Function | Number}
         */
        this._itemHeight = itemHeight || this.standardItemHeight();
    }

    /**
     * Sets the rectangle of the item
     *
     * @param {Function | PIXI.Rectangle | Rectangle | Object} [itemRect] - Rectangle of the item
     *
     * @param {Number} [itemRect.x] - The X coordinate
     * @param {Number} [itemRect.y] - The Y coordinate
     * @param {Number} [itemRect.width] - Width of the rectangle
     * @param {Number} [itemRect.height] - Height of the rectangle
     *
     * @see DKTools.Sprite.Selectable.prototype.standardItemRect
     */
    setupItemRect(itemRect) {
        /**
         * @private
         * @readonly
         * @type {Function | PIXI.Rectangle | Rectangle | Object}
         */
        this._itemRect = itemRect || this.standardItemRect();
    }

    /**
     * Sets the font of the item
     *
     * @param {Function | Object} [itemFont=this.standardItemFont()] - Font of the item
     *
     * @param {String} [itemFont.fontFace] - Font face
     * @param {Number} [itemFont.fontSize] - Font size
     * @param {Boolean} [itemFont.fontItalic] - Font italic
     *
     * @see DKTools.Sprite.Selectable.prototype.standardItemFont
     */
    setupItemFont(itemFont) {
        /**
         * @private
         * @readonly
         * @type {Function | Object}
         */
        this._itemFont = itemFont || this.standardItemFont();
    }

    /**
     * Sets the text color of the item
     *
     * @param {Function | String} [itemTextColor=this.standardItemTextColor()] - Text color of the item
     *
     * @see DKTools.Sprite.Selectable.prototype.standardItemTextColor
     */
    setupItemTextColor(itemTextColor) {
        /**
         * @private
         * @readonly
         * @type {Function | String}
         */
        this._itemTextColor = itemTextColor || this.standardItemTextColor();
    }

    /**
     * Sets the paint opacity of the item
     *
     * @param {Function | Number} [itemPaintOpacity=this.standardItemPaintOpacity()] - Paint opacity of the item
     *
     * @see DKTools.Sprite.Selectable.prototype.standardItemPaintOpacity
     */
    setupItemPaintOpacity(itemPaintOpacity) {
        /**
         * @private
         * @readonly
         * @type {Function | Number}
         */
        this._itemPaintOpacity = itemPaintOpacity || this.standardItemPaintOpacity();
    }

    /**
     * Sets the align of the item
     *
     * @param {Function | String} [itemAlign=this.standardItemAlign()] - Align of the item
     *
     * @see DKTools.Sprite.Selectable.prototype.standardItemAlign
     */
    setupItemAlign(itemAlign) {
        /**
         * @private
         * @readonly
         * @type {Function | String}
         */
        this._itemAlign = itemAlign || this.standardItemAlign();
    }

    /**
     * Changes all parameters
     * Returns the number of changed parameters
     *
     * @version 6.1.0
     * @override
     *
     * @param {Object} [object={}] - Parameters
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     * @param {Boolean} [activate=false] - Activates the object
     *
     * @param {Number} [object.index] - Index
     * @param {Number} [object.maxCols] - Number of the columns
     * @param {Boolean} [object.fixedHorizontal] - Fixed horizontal position
     * @param {Boolean} [object.cursorFixed] - Fixed cursor
     * @param {Boolean} [object.cursorAll] - Cursor all
     * @param {Number} [object.horizontalSpacing] - Horizontal spacing
     * @param {Number} [object.verticalSpacing] - Vertical spacing
     * @param {Number} [object.textPadding] - Text padding
     * @param {Object[]} [object.items] - List of the items
     * @param {Function} [object.drawItemHandler] - Handler of draw of the item
     * @param {Function | Number} [object.itemWidth] - Width of the item
     * @param {Function | Number} [object.itemHeight] - Height of the item
     * @param {Function} [object.itemRect] - Rectangle of the item
     * @param {Function | Object} [object.itemFont] - Font of the item
     * @param {Function | String} [object.itemTextColor] - Text color of the item
     * @param {Function | Number} [object.itemPaintOpacity] - Paint opacity of the item
     * @param {Function | String} [object.itemAlign] - Align of the item
     *
     * @param {String} [object.font.fontFace] - Font face
     * @param {Number} [object.font.fontSize] - Font size
     * @param {Boolean} [object.font.fontItalic] - Font italic
     *
     * @see DKTools.Sprite.Button.prototype.setAll
     * @see DKTools.Sprite.Selectable.prototype.setIndex
     * @see DKTools.Sprite.Selectable.prototype.setMaxCols
     * @see DKTools.Sprite.Selectable.prototype.setFixedHorizontal
     * @see DKTools.Sprite.Selectable.prototype.setCursorFixed
     * @see DKTools.Sprite.Selectable.prototype.setCursorAll
     * @see DKTools.Sprite.Selectable.prototype.setSpacing
     * @see DKTools.Sprite.Selectable.prototype.setTextPadding
     * @see DKTools.Sprite.Selectable.prototype.setItems
     * @see DKTools.Sprite.Selectable.prototype.setItemDrawHandler
     * @see DKTools.Sprite.Selectable.prototype.setItemWidth
     * @see DKTools.Sprite.Selectable.prototype.setItemHeight
     * @see DKTools.Sprite.Selectable.prototype.setItemRect
     * @see DKTools.Sprite.Selectable.prototype.setItemFont
     * @see DKTools.Sprite.Selectable.prototype.setItemTextColor
     * @see DKTools.Sprite.Selectable.prototype.setItemPaintOpacity
     * @see DKTools.Sprite.Selectable.prototype.setItemAlign
     * @see DKTools.Sprite.Selectable.prototype.start
     * @see DKTools.Sprite.Selectable.prototype.activate
     *
     * @returns {Number} Number of changed parameters
     */
    setAll(object = {}, blockStart = false, activate = false) {
        object = object || {};

        const block = true;
        let changed = DKTools.Sprite.Button.prototype.setAll.call(this, object, block);

        if (this.setIndex(object.index, block)) {
            changed++;
        }

        if (this.setMaxCols(object.maxCols, block)) {
            changed++;
        }

        if (this.setFixedHorizontal(object.fixedHorizontal, block)) {
            changed++;
        }

        if (this.setCursorFixed(object.cursorFixed, block)) {
            changed++;
        }

        if (this.setCursorAll(object.cursorAll, block)) {
            changed++;
        }

        if (this.setCursorDownHandler(object.cursorDownHandler, block)) {
            changed++;
        }

        if (this.setCursorUpHandler(object.cursorUpHandler, block)) {
            changed++;
        }

        if (this.setCursorRightHandler(object.cursorRightHandler, block)) {
            changed++;
        }

        if (this.setCursorLeftHandler(object.cursorLeftHandler, block)) {
            changed++;
        }

        if (this.setCursorPageDownHandler(object.cursorPageDownHandler, block)) {
            changed++;
        }

        if (this.setCursorPageUpHandler(object.cursorPageUpHandler, block)) {
            changed++;
        }

        changed += this.setSpacing(object.horizontalSpacing, object.verticalSpacing, block);

        if (this.setTextPadding(object.textPadding, block)) {
            changed++;
        }

        if (this.setItems(object.items, block)) {
            changed++;
        }

        if (this.setItemDrawHandler(object.drawItemHandler, block)) {
            changed++;
        }

        if (this.setItemWidth(object.itemWidth, block)) {
            changed++;
        }

        if (this.setItemHeight(object.itemHeight, block)) {
            changed++;
        }

        if (this.setItemRect(object.itemRect, block)) {
            changed++;
        }

        if (this.setItemFont(object.itemFont, block)) {
            changed++;
        }

        if (this.setItemTextColor(object.itemTextColor, block)) {
            changed++;
        }

        if (this.setItemPaintOpacity(object.itemPaintOpacity, block)) {
            changed++;
        }

        if (this.setItemAlign(object.itemAlign, block)) {
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
     * Changes the index
     * Returns true if the change occurred
     *
     * @param {Number} [index] - Index
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.setupIndex
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Boolean} Change occurred
     */
    setIndex(index, blockRefreshAll = false) {
        if (this._index === index) {
            return false;
        }

        this.setupIndex(index);

        if (this._index === this._lastIndex) {
            return false;
        }

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the number of the columns
     * Returns true if the change occurred
     *
     * @param {Number} [cols] - Number of the columns
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.setupMaxCols
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Boolean} Change occurred
     */
    setMaxCols(cols, blockRefreshAll = false) {
        if (this._maxCols === cols) {
            return false;
        }

        const lastCols = this._maxCols;

        this.setupMaxCols(cols);

        if (this._maxCols === lastCols) {
            return false;
        }

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the fixed horizontal position
     * Returns true if the change occurred
     *
     * @param {Boolean} [fixedHorizontal] - Fixed horizontal position
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.setupFixedHorizontal
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Boolean} Change occurred
     */
    setFixedHorizontal(fixedHorizontal, blockRefreshAll = false) {
        if (this._fixedHorizontal === fixedHorizontal) {
            return false;
        }

        const lastFixed = this._fixedHorizontal;

        this.setupFixedHorizontal(fixedHorizontal);

        if (this._fixedHorizontal === lastFixed) {
            return false;
        }

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the fixed cursor
     * Returns true if the change occurred
     *
     * @param {Boolean} [cursorFixed] - Fixed cursor
     * @param {Boolean} [blockRefreshAll=false] Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.setupCursorFixed
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Boolean} Change occurred
     */
    setCursorFixed(cursorFixed, blockRefreshAll = false) {
        if (this._cursorFixed === cursorFixed) {
            return false;
        }

        const lastFixed = this._cursorFixed;

        this.setupCursorFixed(cursorFixed);

        if (this._cursorFixed === lastFixed) {
            return false;
        }

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the cursor all
     * Returns true if the change occurred
     *
     * @param {Boolean} [cursorAll] - Cursor all
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.setupCursorAll
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Boolean} Change occurred
     */
    setCursorAll(cursorAll, blockRefreshAll = false) {
        if (this._cursorAll === cursorAll) {
            return false;
        }

        const lastAll = this._cursorAll;

        this.setupCursorAll(cursorAll);

        if (this._cursorAll === lastAll) {
            return false;
        }

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the handler of cursor down
     * Returns true if the change occurred
     *
     * @since 6.1.0
     *
     * @param {Function} [handler] - Handler of cursor down
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.setupCursorDownHandler
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Boolean} Change occurred
     */
    setCursorDownHandler(handler, blockRefreshAll = false) {
        if (this._cursorDownHandler === handler) {
            return false;
        }

        const lastHandler = this._cursorDownHandler;

        this.setupCursorDownHandler(handler);

        if (this._cursorDownHandler === lastHandler) {
            return false;
        }

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the handler of cursor up
     * Returns true if the change occurred
     *
     * @since 6.1.0
     *
     * @param {Function} [handler] - Handler of cursor up
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.setupCursorUpHandler
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Boolean} Change occurred
     */
    setCursorUpHandler(handler, blockRefreshAll = false) {
        if (this._cursorUpHandler === handler) {
            return false;
        }

        const lastHandler = this._cursorUpHandler;

        this.setupCursorUpHandler(handler);

        if (this._cursorUpHandler === lastHandler) {
            return false;
        }

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the handler of cursor right
     * Returns true if the change occurred
     *
     * @since 6.1.0
     *
     * @param {Function} [handler] - Handler of cursor right
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.setupCursorRightHandler
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Boolean} Change occurred
     */
    setCursorRightHandler(handler, blockRefreshAll = false) {
        if (this._cursorRightHandler === handler) {
            return false;
        }

        const lastHandler = this._cursorRightHandler;

        this.setupCursorRightHandler(handler);

        if (this._cursorRightHandler === lastHandler) {
            return false;
        }

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the handler of cursor left
     * Returns true if the change occurred
     *
     * @since 6.1.0
     *
     * @param {Function} [handler] - Handler of cursor left
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.setupCursorLeftHandler
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Boolean} Change occurred
     */
    setCursorLeftHandler(handler, blockRefreshAll = false) {
        if (this._cursorLeftHandler === handler) {
            return false;
        }

        const lastHandler = this._cursorLeftHandler;

        this.setupCursorLeftHandler(handler);

        if (this._cursorLeftHandler === lastHandler) {
            return false;
        }

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the handler of cursor page down
     * Returns true if the change occurred
     *
     * @since 6.1.0
     *
     * @param {Function} [handler] - Handler of cursor page down
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.setupCursorPageDownHandler
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Boolean} Change occurred
     */
    setCursorPageDownHandler(handler, blockRefreshAll = false) {
        if (this._cursorPageDownHandler === handler) {
            return false;
        }

        const lastHandler = this._cursorPageDownHandler;

        this.setupCursorPageDownHandler(handler);

        if (this._cursorPageDownHandler === lastHandler) {
            return false;
        }

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the handler of cursor page up
     * Returns true if the change occurred
     *
     * @since 6.1.0
     *
     * @param {Function} [handler] - Handler of cursor page up
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.setupCursorPageUpHandler
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Boolean} Change occurred
     */
    setCursorPageUpHandler(handler, blockRefreshAll = false) {
        if (this._cursorPageUpHandler === handler) {
            return false;
        }

        const lastHandler = this._cursorPageUpHandler;

        this.setupCursorPageUpHandler(handler);

        if (this._cursorPageUpHandler === lastHandler) {
            return false;
        }

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the horizontal spacing
     * Returns true if the change occurred
     *
     * @param {Number} [spacing] - Horizontal spacing
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.setupHorizontalSpacing
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Boolean} Change occurred
     */
    setHorizontalSpacing(spacing, blockRefreshAll = false) {
        if (this._horizontalSpacing === spacing) {
            return false;
        }

        const lastSpacing = this._horizontalSpacing;

        this.setupHorizontalSpacing(spacing);

        if (this._horizontalSpacing === lastSpacing) {
            return false;
        }

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the vertical spacing
     * Returns true if the change occurred
     *
     * @param {Number} [spacing] - Vertical spacing
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.setupVerticalSpacing
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Boolean} Change occurred
     */
    setVerticalSpacing(spacing, blockRefreshAll = false) {
        if (this._verticalSpacing === spacing) {
            return false;
        }

        const lastSpacing = this._verticalSpacing;

        this.setupVerticalSpacing(spacing);

        if (this._verticalSpacing === lastSpacing) {
            return false;
        }

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the horizontal and vertical spacings
     * Returns the number of changed parameters
     *
     * @param {Number} [horizontalSpacing] - Horizontal spacing
     * @param {Number} [verticalSpacing] - Vertical spacing
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.setHorizontalSpacing
     * @see DKTools.Sprite.Selectable.prototype.setVerticalSpacing
     *
     * @returns {Number} Number of changed parameters
     */
    setSpacing(horizontalSpacing, verticalSpacing, blockRefreshAll = false) {
        const block = true;
        let changed = 0;

        if (this.setHorizontalSpacing(horizontalSpacing, block)) {
            changed++;
        }

        if (this.setVerticalSpacing(verticalSpacing, block)) {
            changed++;
        }

        if (changed > 0 && !blockRefreshAll) {
            this.refreshAll();
        }

        return changed;
    }

    /**
     * Changes the text padding
     * Returns true if the change occurred
     *
     * @param {Number} [textPadding] - Text padding
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.setupTextPadding
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Boolean} Change occurred
     */
    setTextPadding(textPadding, blockRefreshAll = false) {
        if (this._textPadding === textPadding) {
            return false;
        }

        const lastPadding = this._textPadding;

        this.setupTextPadding(textPadding);

        if (this._textPadding === lastPadding) {
            return false;
        }

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the items
     * Returns true if the change occurred
     *
     * @param {Object[]} [items] - List of the items
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.setupItems
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Boolean} Change occurred
     */
    setItems(items, blockRefreshAll = false) {
        if (this._items == items) {
            return false;
        }

        this.setupItems(items);

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the handler of draw of the item
     * Returns true if the change occurred
     *
     * @since 6.1.0
     *
     * @param {Function} [handler] - Handler of draw of the item
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.setupItemDrawHandler
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Boolean} Change occurred
     */
    setItemDrawHandler(handler, blockRefreshAll = false) {
        if (this._itemDrawHandler === handler) {
            return false;
        }

        const lastHandler = this._itemDrawHandler;

        this.setupItemDrawHandler(handler);

        if (this._itemDrawHandler === lastHandler) {
            return false;
        }

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the width of the item
     * Returns true if the change occurred
     *
     * @param {Function | Number} [itemWidth] - Width of the item
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.setupItemWidth
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Boolean} Change occurred
     */
    setItemWidth(itemWidth, blockRefreshAll = false) {
        if (this._itemWidth === itemWidth) {
            return false;
        }

        const lastWidth = this._itemWidth;

        this.setupItemWidth(itemWidth);

        if (this._itemWidth === lastWidth) {
            return false;
        }

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the height of the item
     * Returns true if the change occurred
     *
     * @param {Function | Number} [itemHeight] - Height of the item
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.setupItemHeight
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Boolean} Change occured
     */
    setItemHeight(itemHeight, blockRefreshAll = false) {
        if (this._itemHeight === itemHeight) {
            return false;
        }

        const lastHeight = this._itemHeight;

        this.setupItemHeight(itemHeight);

        if (this._itemHeight === lastHeight) {
            return false;
        }

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the font of the item
     * Returns true if the change occurred
     *
     * @param {Function | Object} [itemFont] - Font of the item
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.setupItemFont
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Boolean} Change occured
     */
    setItemFont(itemFont, blockRefreshAll = false) {
        if (this._itemFont === itemFont) {
            return false;
        }

        const lastFont = this._itemFont;

        this.setupItemFont(itemFont);

        if (this._itemFont === lastFont) {
            return false;
        }

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the text color of the item
     * Returns true if the change occurred
     *
     * @param {Function | String} [itemTextColor] - Text color of the item
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.setupItemTextColor
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Boolean} Change occured
     */
    setItemTextColor(itemTextColor, blockRefreshAll = false) {
        if (this._itemTextColor === itemTextColor) {
            return false;
        }

        const lastTextColor = this._itemTextColor;

        this.setupItemTextColor(itemTextColor);

        if (this._itemTextColor === lastTextColor) {
            return false;
        }

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the item paint opacity
     * Returns true if the change occurred
     *
     * @param {Function | Number} [itemPaintOpacity] - Paint opacity of the item
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.setupItemPaintOpacity
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Boolean} Change occured
     */
    setItemPaintOpacity(itemPaintOpacity, blockRefreshAll = false) {
        if (this._itemPaintOpacity === itemPaintOpacity) {
            return false;
        }

        const lastPaintOpacity = this._itemPaintOpacity;

        this.setupItemPaintOpacity(itemPaintOpacity);

        if (this._itemPaintOpacity === lastPaintOpacity) {
            return false;
        }

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the align of the item
     * Returns true if the change occurred
     *
     * @param {Function | String} [itemAlign] - Align of the item
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.setupItemAlign
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     *
     * @returns {Boolean} Change occured
     */
    setItemAlign(itemAlign, blockRefreshAll = false) {
        if (this._itemAlign === itemAlign) {
            return false;
        }

        const lastAlign = this._itemAlign;

        this.setupItemAlign(itemAlign);

        if (this._itemAlign === lastAlign) {
            return false;
        }

        if (!blockRefreshAll) {
            this.refreshAll();
        }

        return true;
    }

    /**
     * Changes the top row
     *
     * @param {Number} row - Row
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.getMaxTopRow
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     */
    setTopRow(row, blockRefreshAll = false) {
        const topRow = DKTools.Utils.Number.clamp(row, 0, this.getMaxTopRow());

        if (this._topRow !== topRow) {
            this._topRow = topRow;

            if (!blockRefreshAll) {
                this.refreshAll();
            }
        }
    }

    /**
     * Changes the top column
     *
     * @param {Number} col - Column
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.getMaxTopCol
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     */
    setTopCol(col, blockRefreshAll = false) {
        const topCol = DKTools.Utils.Number.clamp(col, 0, this.getMaxTopCol());

        if (this._topCol !== topCol) {
            this._topCol = topCol;

            if (!blockRefreshAll) {
                this.refreshAll();
            }
        }
    }

    /**
     * Chagnes the bottom row
     *
     * @param {Number} row - Row
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.getMaxPageRows
     * @see DKTools.Sprite.Selectable.prototype.setTopRow
     */
    setBottomRow(row, blockRefreshAll = false) {
        this.setTopRow(row - (this.getMaxPageRows() - 1), blockRefreshAll);
    }

    /**
     * Chagnes the bottom column
     *
     * @param {Number} col - Column
     * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
     *
     * @see DKTools.Sprite.Selectable.prototype.getMaxPageCols
     * @see DKTools.Sprite.Selectable.prototype.setTopCol
     */
    setBottomCol(col, blockRefreshAll = false) {
        this.setTopCol(col - (this.getMaxPageCols() - 1), blockRefreshAll);
    }

    /**
     * Changes the handler of the symbol
     *
     * @param {String} symbol - Symbol
     * @param {Function} [handler] - Handler
     */
    setHandler(symbol, handler) {
        this._handlers[symbol] = handler;
    }

    /**
     * Changes the cursor rect
     * Returns true if the change occurred
     *
     * @param {PIXI.Rectangle | Rectangle | Object | Number} object - The X coordinate or Rectangle
     * @param {Number} [y] - The Y coordinate
     * @param {Number} [width] - Width of the rect
     * @param {Number} [height] - Height of the rect
     *
     * @param {Number} object.x - The X coordinate
     * @param {Number} object.y - The Y coordinate
     * @param {Number} object.width - Width of the rect
     * @param {Number} object.height - Height of the rect
     *
     * @see DKTools.Sprite.Cursor.prototype.setCursorRect
     *
     * @returns {Boolean} Change occured
     */
    setCursorRect(object, y, width, height) {
        return this._cursorSprite.setCursorRect(object, y, width, height);
    }

    /**
     * Shows the cursor
     */
    showCursor() {
        this._cursorSprite.show(true);
    }

    /**
     * Selects the item
     *
     * @version 6.0.0
     *
     * @param {Number} index - Index
     * @param {Boolean} [playCursor=false] - Play "cursor" sound
     *
     * @see DKTools.Sprite.Selectable.prototype.setupIndex
     * @see DKTools.Sprite.Selectable.prototype.refreshAll
     * @see DKTools.Sprite.Selectable.prototype.playCursorSound
     * @see DKTools.Sprite.Selectable.prototype.updateSelectEvents
     */
    selectItem(index, playCursor = false) {
        const item = this.getItem(index);

        this.setupIndex(index);
        this.refreshAll();

        if (playCursor) {
            this.playCursorSound();
        }

        if (item && DKTools.Utils.isFunction(item.selectHandler)) {
            item.selectHandler(index, this);
        }

        this.updateSelectEvents();
    }

    /**
     * Selects the item by symbol
     *
     * @param {String} symbol - Symbol
     *
     * @see DKTools.Sprite.Selectable.prototype.findSymbol
     * @see DKTools.Sprite.Selectable.prototype.selectItem
     */
    selectSymbol(symbol) {
        const index = Math.max(0, this.findSymbol(symbol));

        this.selectItem(index);
    }

    /**
     * Selects the item by ext
     *
     * @param {*} ext - Ext of the item
     *
     * @see DKTools.Sprite.Selectable.prototype.findExt
     * @see DKTools.Sprite.Selectable.prototype.selectItem
     */
    selectExt(ext) {
        const index = Math.max(0, this.findExt(ext));

        this.selectItem(index);
    }

    /**
     * Selects the previous item
     *
     * @version 6.0.0
     *
     * @param {Boolean} [wrap=false] - Cyclic selection
     * @param {Boolean} [playCursor=false] - Play "cursor" sound
     *
     * @see DKTools.Sprite.Selectable.prototype.getPrevIndex
     * @see DKTools.Sprite.Selectable.prototype.selectItem
     */
    selectPrevItem(wrap = false, playCursor = false) {
        const index = this.getPrevIndex(wrap);

        if (index >= 0) {
            this.selectItem(index, playCursor);
        }
    }

    /**
     * Selects the next item
     *
     * @version 6.0.0
     *
     * @param {Boolean} [wrap=false] - Cyclic selection
     * @param {Boolean} [playCursor=false] - Play "cursor" sound
     *
     * @see DKTools.Sprite.Selectable.prototype.getNextIndex
     * @see DKTools.Sprite.Selectable.prototype.selectItem
     */
    selectNextItem(wrap = false, playCursor = false) {
        const index = this.getNextIndex(wrap);

        if (index >= 0) {
            this.selectItem(index, playCursor);
        }
    }

    /**
     * Selects the last item
     *
     * @since 6.1.0
     *
     * @param {Boolean} [playCursor=false] - Play "cursor" sound
     *
     * @see DKTools.Sprite.Selectable.prototype.getMaxItems
     * @see DKTools.Sprite.Selectable.prototype.selectItem
     */
    selectLastItem(playCursor = false) {
        this.selectItem(this.getMaxItems() - 1, playCursor);
    }

    /**
     * Scrolls down
     *
     * @see DKTools.Sprite.Selectable.prototype.getTopRow
     * @see DKTools.Sprite.Selectable.prototype.getMaxRows
     * @see DKTools.Sprite.Selectable.prototype.cursorDown
     */
    scrollDown() {
        if (this.getTopRow() + 1 < this.getMaxRows()) {
            this.cursorDown();
        }
    }

    /**
     * Scrolls up
     *
     * @version 3.0.0
     *
     * @see DKTools.Sprite.Selectable.prototype.getTopRow
     * @see DKTools.Sprite.Selectable.prototype.cursorUp
     */
    scrollUp() {
        if (this.getCurrentRow() > 0) {
            this.cursorUp();
        }
    }

    /**
     * Scrolls right
     *
     * @see DKTools.Sprite.Selectable.prototype.getTopCol
     * @see DKTools.Sprite.Selectable.prototype.getMaxItems
     * @see DKTools.Sprite.Selectable.prototype.cursorRight
     */
    scrollRight() {
        if (this.getTopCol() + 1 < this.getMaxItems()) {
            this.cursorRight();
        }
    }

    /**
     * Scrolls left
     *
     * @version 3.0.0
     *
     * @see DKTools.Sprite.Selectable.prototype.getTopCol
     * @see DKTools.Sprite.Selectable.prototype.cursorLeft
     */
    scrollLeft() {
        if (this.getCurrentCol() > 0) {
            this.cursorLeft();
        }
    }

    // U methods

    /**
     * Updates all
     *
     * @override
     *
     * @see DKTools.Sprite.Selectable.prototype.updateCursor
     */
    updateAll() {
        DKTools.Sprite.Button.prototype.updateAll.call(this);
        this.updateCursor();
    }

    /**
     * Updates the cursor
     *
     * @version 8.0.0
     *
     * @see DKTools.Sprite.Selectable.prototype.isHorizontal
     * @see DKTools.Sprite.Selectable.prototype.isCursorAll
     * @see DKTools.Sprite.Selectable.prototype.isCursorVisible
     * @see DKTools.Sprite.Selectable.prototype.getCurrentCol
     * @see DKTools.Sprite.Selectable.prototype.getCurrentRow
     * @see DKTools.Sprite.Selectable.prototype.getTopCol
     * @see DKTools.Sprite.Selectable.prototype.getTopRow
     * @see DKTools.Sprite.Selectable.prototype.getBottomCol
     * @see DKTools.Sprite.Selectable.prototype.getBottomRow
     * @see DKTools.Sprite.Selectable.prototype.getMaxRows
     * @see DKTools.Sprite.Selectable.prototype.getItemHeight
     * @see DKTools.Sprite.Selectable.prototype.setTopCol
     * @see DKTools.Sprite.Selectable.prototype.setTopRow
     * @see DKTools.Sprite.Selectable.prototype.setBottomCol
     * @see DKTools.Sprite.Selectable.prototype.setBottomRow
     * @see DKTools.Sprite.Selectable.prototype.setCursorRect
     * @see DKTools.Sprite.Selectable.prototype.resetScroll
     * @see DKTools.Sprite.Selectable.prototype.getItemRect
     */
    updateCursor() {
        if (this.isHorizontal()) {
            const col = this.getCurrentCol();

            if (col < this.getTopCol()) {
                this.setTopCol(col);
            } else if (col > this.getBottomCol()) {
                this.setBottomCol(col);
            }
        } else {
            const row = this.getCurrentRow();

            if (row < this.getTopRow()) {
                this.setTopRow(row);
            } else if (row > this.getBottomRow()) {
                this.setBottomRow(row);
            }
        }

        if (this.isCursorAll()) {
            const allRowsHeight = this.getMaxRows() * this.getItemHeight();

            this.setCursorRect(0, 0, this.width, allRowsHeight);
            this.resetScroll();
        } else if (this.isCursorVisible() || !this._cursorSprite.hasBitmap()) {
            const rect = this.getItemRect(this._index);

            this.setCursorRect(rect);
        } else {
            this.setCursorRect(Rectangle.emptyRectangle);
        }
    }

    /**
     * Updates the events with type: select
     *
     * @see DKTools.Sprite.Selectable.prototype.updateEventsContainer
     */
    updateSelectEvents() {
        this.updateEventsContainer('select');
    }

};

// properties

Object.defineProperties(DKTools.Sprite.Selectable.prototype, {

    /**
     * Cursor sprite
     *
     * @readonly
     * @type {DKTools.Sprite.Cursor}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    cursorSprite: {
        get: function() {
            return this._cursorSprite;
        },
        configurable: true
    },

    /**
     * Last index
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    lastIndex: {
        get: function() {
            return this._lastIndex;
        },
        configurable: true
    },

    /**
     * Index
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    index: {
        get: function() {
            return this._index;
        },
        configurable: true
    },

    /**
     * Maximum of the columns
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    maxCols: {
        get: function() {
            return this._maxCols;
        },
        configurable: true
    },

    /**
     * Fixed cursor
     *
     * @readonly
     * @type {Boolean}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    cursorFixed: {
        get: function() {
            return this._cursorFixed;
        },
        configurable: true
    },

    /**
     * Cursor all
     *
     * @readonly
     * @type {Boolean}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    cursorAll: {
        get: function() {
            return this._cursorAll;
        },
        configurable: true
    },

    /**
     * Handler of cursor down
     *
     * @since 6.1.0
     * @readonly
     * @type {Function}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    cursorDownHandler: {
        get: function() {
            return this._cursorDownHandler;
        },
        configurable: true
    },

    /**
     * Handler of cursor up
     *
     * @since 6.1.0
     * @readonly
     * @type {Function}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    cursorUpHandler: {
        get: function() {
            return this._cursorUpHandler;
        },
        configurable: true
    },

    /**
     * Handler of cursor right
     *
     * @since 6.1.0
     * @readonly
     * @type {Function}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    cursorRightHandler: {
        get: function() {
            return this._cursorRightHandler;
        },
        configurable: true
    },

    /**
     * Handler of cursor left
     *
     * @since 6.1.0
     * @readonly
     * @type {Function}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    cursorLeftHandler: {
        get: function() {
            return this._cursorLeftHandler;
        },
        configurable: true
    },

    /**
     * Handler of cursor page down
     *
     * @since 6.1.0
     * @readonly
     * @type {Function}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    cursorPageDownHandler: {
        get: function() {
            return this._cursorPageDownHandler;
        },
        configurable: true
    },

    /**
     * Handler of cursor page up
     *
     * @since 6.1.0
     * @readonly
     * @type {Function}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    cursorPageUpHandler: {
        get: function() {
            return this._cursorPageUpHandler;
        },
        configurable: true
    },

    /**
     * Horizontal spacing
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    horizontalSpacing: {
        get: function() {
            return this._horizontalSpacing;
        },
        configurable: true
    },

    /**
     * Vertical spacing
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    verticalSpacing: {
        get: function() {
            return this._verticalSpacing;
        },
        configurable: true
    },

    /**
     * Text padding
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    textPadding: {
        get: function() {
            return this._textPadding;
        },
        configurable: true
    },

    /**
     * List of the items
     *
     * @readonly
     * @type {Object[]}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    items: {
        get: function() {
            return this._items;
        },
        configurable: true
    },

    /**
     * Handler of draw of the item
     *
     * @since 6.1.0
     * @readonly
     * @type {Function | null}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    itemDrawHandler: {
        get: function() {
            return this._itemDrawHandler;
        },
        configurable: true
    },

    /**
     * Width of the item
     *
     * @readonly
     * @type {Function | Number}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    itemWidth: {
        get: function() {
            return this._itemWidth;
        },
        configurable: true
    },

    /**
     * Height of the item
     *
     * @readonly
     * @type {Function | Number}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    itemHeight: {
        get: function() {
            return this._itemHeight;
        },
        configurable: true
    },

    /**
     * Font of the item
     *
     * @readonly
     * @type {Function | Object}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    itemFont: {
        get: function() {
            return this._itemFont;
        },
        configurable: true
    },

    /**
     * Text color of the item
     *
     * @readonly
     * @type {Function | String}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    itemTextColor: {
        get: function() {
            return this._itemTextColor;
        },
        configurable: true
    },

    /**
     * Paint opacity of the item
     *
     * @readonly
     * @type {Function | Number}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    itemPaintOpacity: {
        get: function() {
            return this._itemPaintOpacity;
        },
        configurable: true
    },

    /**
     * Align of the item
     *
     * @readonly
     * @type {Function | String}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    itemAlign: {
        get: function() {
            return this._itemAlign;
        },
        configurable: true
    }

});




