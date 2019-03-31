//===========================================================================
// DKTools.Layout
//===========================================================================

/**
 * Layout class
 *
 * @class DKTools.Layout
 * @extends DKTools.Sprite
 *
 * @override
 *
 * @memberof DKTools
 *
 * @see DKTools.Layout.prototype.initialize
 */
DKTools.Layout = class extends DKTools.Sprite {

    // A methods

    /**
     * Activates the items
     *
     * @param {Boolean} [start=false] - Call of the "start" function
     *
     * @see DKTools.Layout.prototype.iterateItems
     */
    activateItems(start = false) {
        const callback = item => {
            item.activate();
        };

        this.iterateItems(callback, start);
    }

    /**
     * Adds children objects to processing
     *
     * @override
     *
     * @see DKTools.Sprite.prototype.addAllChildren
     * @see DKTools.Layout.prototype.addAllItems
     */
    addAllChildren() {
        DKTools.Sprite.prototype.addAllChildren.call(this);
        this.addAllItems();
    }

    /**
     * Adds the itemns to processing
     *
     * @see DKTools.Layout.prototype.addChild
     */
    addAllItems() {
        if (this.hasItems()) {
            this.addChild.apply(this, this._items);
        }
    }

    /**
     * Adds the column
     *
     * @see DKTools.Layout.prototype.addCols
     */
    addCol() {
        this.addCols(1);
    }

    /**
     * Adds the columns
     *
     * @param {Number} cols - Columns
     *
     * @see DKTools.Layout.prototype.getMaxCols
     * @see DKTools.Layout.prototype.setMaxCols
     */
    addCols(cols) {
        this.setMaxCols(this.getMaxCols() + cols);
    }

    /**
     * Adds the item
     * Returns the added item or null
     *
     * @version 5.0.0
     *
     * @param {DKTools.Sprite | *} item - Item
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     *
     * @see DKTools.Layout.prototype.start
     *
     * @returns {DKTools.Sprite | * | null} Added item or null
     */
    addItem(item, blockStart = false) {
        if (!(item instanceof DKTools.Sprite)) {
            return null;
        }

        this._items.push(item);

        if (!blockStart) {
            this.start();
        }

        return item;
    }

    /**
     * Adds the items
     * Returns the added items
     *
     * @version 5.0.0
     *
     * @param {DKTools.Sprite[] | Array} items - Items
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     *
     * @see DKTools.Layout.prototype.addItem
     * @see DKTools.Layout.prototype.start
     *
     * @returns {DKTools.Sprite[] | Array} Added items
     */
    addItems(items, blockStart = false) {
        const addedItems = _.map(items, item => this.addItem(item, true));

        if (addedItems.length > 0 && !blockStart) {
            this.start();
        }

        return addedItems;
    }

    /**
     * Aligns the column
     *
     * @param {Number} col - Column
     *
     * @see DKTools.Layout.prototype.getItemsInCol
     * @see DKTools.Layout.prototype.alignItem
     */
    alignCol(col) {
        _.forEach(this.getItemsInCol(col), this.alignItem.bind(this));
    }

    /**
     * Aligns the item
     *
     * @param {DKTools.Sprite | * | Number} item - Item or index
     *
     * @see DKTools.Layout.prototype.isReady
     * @see DKTools.Layout.prototype.getItemRow
     * @see DKTools.Layout.prototype.getItemCol
     * @see DKTools.Layout.prototype.getRowHeight
     * @see DKTools.Layout.prototype.getColWidth
     * @see DKTools.Layout.prototype.getColX
     * @see DKTools.Layout.prototype.getRowY
     * @see DKTools.Layout.prototype.addOneTimeEvent
     */
    alignItem(item) {
        if (this.isReady()) {
            const itemRow = this.getItemRow(item);
            const itemCol = this.getItemCol(item);
            const rowHeight = this.getRowHeight(itemRow);
            const colWidth = this.getColWidth(itemCol);
            const x = this.getColX(itemCol) + (colWidth - item.width) / 2;
            const y = this.getRowY(itemRow) + (rowHeight - item.height) / 2;

            item.move(x, y);
        } else {
            this.addOneTimeEvent({
                type: 'ready',
                onSuccess: this.alignItem.bind(this, item)
            });
        }
    }

    /**
     * Aligns the items
     *
     * @see DKTools.Layout.prototype.addOneTimeEvent
     * @see DKTools.Layout.prototype.iterateItems
     * @see DKTools.Layout.prototype.alignItem
     */
    alignItems() {
        this.addOneTimeEvent({
            type: 'ready',
            onSuccess: () => {
                this.iterateItems(this.alignItem.bind(this))
            }
        });
    }

    /**
     * Aligns the row
     *
     * @param {Number} row - Row
     *
     * @see DKTools.Layout.prototype.getItemsInRow
     * @see DKTools.Layout.prototype.alignItem
     */
    alignRow(row) {
        _.forEach(this.getItemsInRow(row), this.alignItem.bind(this));
    }

    // C methods

    /**
     * Clears all data
     *
     * @private
     * @override
     *
     * @see DKTools.Sprite.prototype._clearAll
     * @see DKTools.Layout.prototype._clearItems
     */
    _clearAll() {
        DKTools.Sprite.prototype._clearAll.call(this);
        this._clearItems();
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
         * @type {Array}
         */
        this._items = [];
    }

    /**
     * Returns true if the layout can clone the fixed bitmap
     *
     * @override
     * @returns {Boolean} Layout can clone the fixed bitmap
     */
    canCloneFixedBitmap() {
        return false;
    }

    /**
     * Clears items
     *
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     *
     * @see DKTools.Layout.prototype.removeAllItems
     * @see DKTools.Layout.prototype._clearItems
     * @see DKTools.Layout.prototype.start
     */
    clearItems(blockStart = false) {
        this.removeAllItems();
        this._clearItems();

        if (!blockStart) {
            this.start();
        }
    }

    // D methods

    /**
     * Deactivates the items
     *
     * @param {Boolean} [start=false] - Call of the "start" function
     *
     * @see DKTools.Layout.prototype.iterateItems
     */
    deactivateItems(start = false) {
        const callback = item => {
            item.deactivate();
        };

        this.iterateItems(callback, start);
    }

    // G methods

    /**
     * Returns the height of the bitmap
     *
     * @since 2.0.0
     * @private
     * @override
     *
     * @see DKTools.Layout.prototype.getMaxRows
     * @see DKTools.Layout.prototype.getRowHeight
     *
     * @returns {Number} Height of the bitmap
     */
    _getBitmapHeight() {
        let height = 0;
        const maxRows = this.getMaxRows();

        for (let i = 1; i <= maxRows; i++) {
            height += this.getRowHeight(i) + this._verticalSpacing;
        }

        return height - this._verticalSpacing;
    }

    /**
     * Returns the width of the bitmap
     *
     * @since 2.0.0
     * @private
     * @override
     *
     * @see DKTools.Layout.prototype.getMaxCols
     * @see DKTools.Layout.prototype.getColWidth
     *
     * @returns {Number} Width of the bitmap
     */
    _getBitmapWidth() {
        let width = 0;
        const maxCols = this.getMaxCols();

        for (let i = 1; i <= maxCols; i++) {
            width += this.getColWidth(i) + this._horizontalSpacing;
        }

        return width - this._horizontalSpacing;
    }

    /**
     * Returns the cell by row and column
     *
     * @param {Number} row - Row
     * @param {Number} col - Col
     *
     * @see DKTools.Layout.prototype.getMaxCols
     * @see DKTools.Layout.prototype.getColX
     * @see DKTools.Layout.prototype.getRowY
     * @see DKTools.Layout.prototype.getColWidth
     * @see DKTools.Layout.prototype.getRowHeight
     *
     * @returns {{ item: (DKTools.Sprite | * | undefined), x: Number, y: Number, width: Number, height: Number }}
     */
    getCell(row, col) {
        const index = this.getMaxCols() * (row - 1) + (col - 1);

        return {
            item: this.getItem(index),
            x: this.getColX(col),
            y: this.getRowY(row),
            width: this.getColWidth(col),
            height: this.getRowHeight(row)
        };
    }

    /**
     * Returns the width of the column
     *
     * @param {Number} col - Column
     * @returns {Number} Width of the column
     */
    getColWidth(col) {
        if (DKTools.Utils.isFunction(this._colWidth)) {
            return this._colWidth(col, this);
        }

        return this._colWidth;
    }

    /**
     * Returns the X coordinate of the column
     *
     * @param {Number} col - Column
     *
     * @see DKTools.Layout.prototype.getColWidth
     *
     * @returns {Number} The X coordinate of the column
     */
    getColX(col) {
        let x = 0;

        for (let i = 1; i < col; i++) {
            x += this.getColWidth(i) + this._horizontalSpacing;
        }

        return x;
    }

    /**
     * Returns the item by index
     *
     * @param {Number} index - Index
     *
     * @see DKTools.Layout.prototype.getItems
     *
     * @returns {DKTools.Sprite | * | undefined} Item by index or undefined
     */
    getItem(index) {
        return this.getItems()[index];
    }

    /**
     * Returns the column of the item
     *
     * @param {DKTools.Sprite | *} item - Item
     *
     * @see DKTools.Layout.prototype.getItemIndex
     * @see DKTools.Layout.prototype.getMaxCols
     *
     * @returns {Number} Column of the item or -1
     */
    getItemCol(item) {
        const index = this.getItemIndex(item);

        if (index >= 0) {
            return (index % this.getMaxCols()) + 1;
        }

        return -1;
    }

    /**
     * Returns the index of the item
     *
     * @param {DKTools.Sprite | *} item - Item
     *
     * @see DKTools.Layout.prototype.getItems
     *
     * @returns {Number} Index of the item
     */
    getItemIndex(item) {
        return _.indexOf(this.getItems(), item);
    }

    /**
     * Returns the row of the item
     *
     * @param {DKTools.Sprite | *} item - Item
     *
     * @see DKTools.Layout.prototype.getItemIndex
     * @see DKTools.Layout.prototype.getMaxCols
     *
     * @returns {Number} Row of the item or -1
     */
    getItemRow(item) {
        const index = this.getItemIndex(item);

        if (index >= 0) {
            return Math.floor(index / this.getMaxCols()) + 1;
        }

        return -1;
    }

    /**
     * Returns the items
     *
     * @see DKTools.Layout.prototype.isInverted
     *
     * @returns {DKTools.Sprite[] | *} Items
     */
    getItems() {
        if (this.isInverted()) {
            return _.reverse(_.clone(this._items));
        }

        return this._items;
    }

    /**
     * Returns the items in the column
     *
     * @param {Number} col - Column
     *
     * @see DKTools.Layout.prototype.getMaxRows
     * @see DKTools.Layout.prototype.getMaxCols
     * @see DKTools.Layout.prototype.getItem
     *
     * @returns {DKTools.Sprite[] | *} Items in the column
     */
    getItemsInCol(col) {
        const items = [];
        const maxRows = this.getMaxRows();
        const maxCols = this.getMaxCols();

        if (col < 1 || col > maxCols) {
            return items;
        }

        const startIndex = col - 1;

        for (let i = 0; i < maxRows; i++) {
            items.push(this.getItem(startIndex + maxCols * i));
        }

        return items;
    }

    /**
     * Returns the items in the row
     *
     * @param {Number} row - Row
     *
     * @see DKTools.Layout.prototype.getMaxCols
     * @see DKTools.Layout.prototype.getMaxRows
     * @see DKTools.Layout.prototype.getItem
     *
     * @returns {DKTools.Sprite[] | *} Items in the row
     */
    getItemsInRow(row) {
        const items = [];
        const maxCols = this.getMaxCols();

        if (row < 1 || row > this.getMaxRows()) {
            return items;
        }

        const startIndex = maxCols * (row - 1);

        for (let i = 0; i < maxCols; i++) {
            items.push(this.getItem(startIndex + i));
        }

        return items;
    }

    /**
     * Returns the maximum number of columns
     *
     * @returns {Number} Maximum number of columns
     */
    getMaxCols() {
        return this._maxCols;
    }

    /**
     * Returns the number of the items
     *
     * @return {Number} Number of the items
     */
    getMaxItems() {
        return this._items.length;
    }

    /**
     * Returns the maximum number of rows
     *
     * @see DKTools.Layout.prototype.getMaxItems
     * @see DKTools.Layout.prototype.getMaxCols
     *
     * @returns {Number} Maximum number of rows
     */
    getMaxRows() {
        return Math.max(1, Math.ceil(this.getMaxItems() / this.getMaxCols()));
    }

    /**
     * Returns the height of the row
     *
     * @param {Number} row - Row
     * @returns {Number} Height of the row
     */
    getRowHeight(row) {
        if (DKTools.Utils.isFunction(this._rowHeight)) {
            return this._rowHeight(row, this);
        }

        return this._rowHeight;
    }

    /**
     * Returns the Y coordinate of the row
     *
     * @param {Number} row - Row
     *
     * @see DKTools.Layout.prototype.getRowHeight
     *
     * @returns {Number} The Y coordinate of the row
     */
    getRowY(row) {
        let y = 0;

        for (let i = 1; i < row; i++) {
            y += this.getRowHeight(i) + this._verticalSpacing;
        }

        return y;
    }

    // H methods

    /**
     * Returns true if the layout has the item
     *
     * @param {DKTools.Sprite | *} item - Item
     *
     * @see DKTools.Layout.prototype.getItemIndex
     *
     * @returns {Boolean} Layout has the item
     */
    hasItem(item) {
        return this.getItemIndex(item) >= 0;
    }

    /**
     * Returns true if the layout has the items
     *
     * @see DKTools.Layout.prototype.isEmpty
     *
     * @returns {Boolean} Layout has the items
     */
    hasItems() {
        return !this.isEmpty();
    }

    /**
     * Hides the items
     *
     * @param {Boolean} [blockDeactivate=false] - Block deactivation of the items
     * @param {Boolean} [start=false] - Call of the "start" function
     *
     * @see DKTools.Layout.prototype.iterateItems
     */
    hideItems(blockDeactivate = false, start = false) {
        const callback = item => {
            item.hide(blockDeactivate);
        };

        this.iterateItems(callback, start);
    }

    // I methods

    /**
     * Inserts the item
     * Returns inserted item or null
     *
     * @since 5.0.0
     *
     * @param {DKTools.Sprite | *} item - Item
     * @param {Number} [index=0] - Index
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     *
     * @returns {DKTools.Sprite | * | null} Inserted item or null
     */
    insertItem(item, index, blockStart = false) {
        if (!(item instanceof DKTools.Sprite)) {
            return null;
        }

        DKTools.Utils.Array.insert(this._items, item, index);

        if (!blockStart) {
            this.start();
        }

        return item;
    }

    /**
     * Inserts the items
     * Returns inserted items
     *
     * @since 5.0.0
     *
     * @param {DKTools.Sprite[] | Array} items - Items
     * @param {Number} [index=0] - Index
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     *
     * @returns {DKTools.Sprite[] | Array} Inserted items
     */
    insertItems(items, index, blockStart = false) {
        index = index || 0;

        const insertedItems = _.map(items, (item, i) => this.insertItem(item, index + i, true));

        if (insertedItems.length > 0 && !blockStart) {
            this.start();
        }

        return insertedItems;
    }

    /**
     * Inverts the layout
     *
     * @see DKTools.Layout.prototype.isInverted
     * @see DKTools.Layout.prototype.setInverted
     */
    invert() {
        this.setInverted(!this.isInverted());
    }

    /**
     * Returns true if the layout is empty
     *
     * @see DKTools.Layout.prototype.getMaxItems
     *
     * @returns {Boolean} Layout is empty
     */
    isEmpty() {
        return this.getMaxItems() === 0;
    }

    /**
     * Returns true if the layout is horizontal
     *
     * @see DKTools.Layout.prototype.getMaxRows
     *
     * @returns {boolean} Layout is horizontal
     */
    isHorizontal() {
        return this.getMaxRows() === 1;
    }

    /**
     * Returns true if the layout is inverted
     *
     * @returns {Boolean} Layout is inverted
     */
    isInverted() {
        return this._inverted;
    }

    /**
     * Returns true if the layout is ready
     *
     * @override
     *
     * @see DKTools.Layout.prototype.isEmpty
     *
     * @returns {Boolean} Layout is ready
     */
    isReady() {
        return this.isEmpty() || _.every(this._items, item => item.isReady());
    }

    /**
     * Returns true if the layout is vertical
     *
     * @see DKTools.Layout.prototype.getMaxCols
     *
     * @returns {boolean} Layout is vertical
     */
    isVertical() {
        return this.getMaxCols() === 1;
    }

    /**
     * Calls the callback function for the items
     *
     * @param {Function} callback - Function for the items
     * @param {Boolean} [start=false] - Call of the "start" function
     *
     * @see DKTools.Layout.prototype.getItems
     * @see DKTools.Layout.prototype.start
     */
    iterateItems(callback, start = false) {
        _.forEach(this.getItems(), callback);

        if (start) {
            this.start();
        }
    }

    // M methods

    /**
     * Moves the item
     *
     * @param {Number} index - Index
     * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - The X coordinate or Point or object with parameters
     * @param {Number} [y] - The Y coordinate (if object is Number)
     *
     * @param {Number} [object.x] - The X coordinate
     * @param {Number} [object.y] - The Y coordinate
     *
     * @see DKTools.Layout.prototype.getItem
     */
    moveItem(index, object, y) {
        const item = this.getItem(index);

        if (item) {
            item.move(object, y);
        }
    }

    // R methods

    /**
     * Removes children objects from processing
     *
     * @override
     *
     * @see DKTools.Sprite.prototype.removeAllChildren
     * @see DKTools.Layout.prototype.removeAllItems
     */
    removeAllChildren() {
        DKTools.Sprite.prototype.removeAllChildren.call(this);
        this.removeAllItems();
    }

    /**
     * Removes items from processing
     *
     * @see DKTools.Layout.prototype.removeChild
     */
    removeAllItems() {
        if (this.hasItems()) {
            this.removeChild.apply(this, this._items);
        }
    }

    /**
     * Removes the column
     *
     * @see DKTools.Layout.prototype.removeCols
     */
    removeCol() {
        this.removeCols(1);
    }

    /**
     * Removes the columns
     *
     * @param {Number} cols - Columns
     *
     * @see DKTools.Layout.prototype.getMaxCols
     * @see DKTools.Layout.prototype.addCols
     */
    removeCols(cols) {
        if (this.getMaxCols() - cols >= 1) {
            this.addCols(-cols);
        }
    }

    /**
     * Removes the item
     * Returns the removed item or null
     *
     * @version 6.0.0
     *
     * @param {DKTools.Sprite | Number} item - Item or Index
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     *
     * @see DKTools.Layout.prototype.getItem
     * @see DKTools.Layout.prototype.hasItem
     * @see DKTools.Layout.prototype.removeChild
     * @see DKTools.Layout.prototype.start
     *
     * @returns {DKTools.Sprite | null} Removed item or null
     */
    removeItem(item, blockStart = false) {
        if (Number.isFinite(item)) {
            item = this.getItem(item);
        }

        if (!this.hasItem(item)) {
            return null;
        }

        this.removeChild(item);

        DKTools.Utils.Array.remove(this._items, item);

        if (!blockStart) {
            this.start();
        }

        return item;
    }

    /**
     * Removes the items
     * Returns the removed items
     *
     * @version 6.0.0
     *
     * @param {DKTools.Sprite[] | Number[]} items - Items or Indexes
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     *
     * @see DKTools.Layout.prototype.removeItem
     * @see DKTools.Layout.prototype.start
     *
     * @returns {DKTools.Sprite[]} Removed items
     */
    removeItems(items, blockStart = false) {
        const removedItems = _.map(items, item => this.removeItem(item, true));

        if (removedItems.length > 0 && !blockStart) {
            this.start();
        }

        return removedItems;
    }

    /**
     * Resizes the item
     *
     * @version 6.0.0
     *
     * @param {DKTools.Sprite | Number} item - Item or Index
     * @param {Number} [width] - Width of the item
     * @param {Number} [height] - Height of the item
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     *
     * @see DKTools.Layout.prototype.getItem
     * @see DKTools.Layout.prototype.hasItem
     * @see DKTools.Layout.prototype.start
     */
    resizeItem(item, width, height, blockStart = false) {
        if (Number.isFinite(item)) {
            item = this.getItem(item);
        }

        if (this.hasItem(item) && item.resize(width, height)) {
            if (!blockStart) {
                this.start();
            }
        }
    }

    /**
     * Resizes the items
     *
     * @param {Number} [width] - Width of the item
     * @param {Number} [height] - Height of the item
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     *
     * @see DKTools.Layout.prototype.resizeItem
     * @see DKTools.Layout.prototype.iterateItems
     */
    resizeItems(width, height, blockStart = false) {
        const callback = item => {
            this.resizeItem(item, width, height, true);
        };

        this.iterateItems(callback, !blockStart);
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
     * @param {Boolean} [activate=false] - Activates the layout
     *
     * @param {Number} [object.maxCols] - Columns
     * @param {Number} [object.horizontalSpacing] - Horizontal spacing
     * @param {Number} [object.verticalSpacing] - Vertical spacing
     * @param {Array} [object.items] - Items
     * @param {Function | Number} [object.rowHeight] - Height of the row
     * @param {Function | Number} [object.colWidth] - Width of the column
     * @param {Boolean} [object.inverted] - Value of the invert
     *
     * @see DKTools.Sprite.prototype.setupAll
     * @see DKTools.Layout.prototype.setMaxCols
     * @see DKTools.Layout.prototype.setSpacing
     * @see DKTools.Layout.prototype.setItems
     * @see DKTools.Layout.prototype.setRowHeight
     * @see DKTools.Layout.prototype.setColWidth
     * @see DKTools.Layout.prototype.setInverted
     * @see DKTools.Layout.prototype.start
     * @see DKTools.Layout.prototype.activate
     *
     * @returns {Number} Number of changed parameters
     */
    setAll(object, blockStart = false, activate = false) {
        object = object || {};

        const block = true;
        let changed = DKTools.Sprite.prototype.setAll.call(this, object, block);

        if (this.setMaxCols(object.maxCols, block)) {
            changed++;
        }

        changed += this.setSpacing(object.horizontalSpacing, object.verticalSpacing, block);

        if (this.setItems(object.items, block)) {
            changed++;
        }

        if (this.setRowHeight(object.rowHeight, block)) {
            changed++;
        }

        if (this.setColWidth(object.colWidth, block)) {
            changed++;
        }

        if (this.setInverted(object.reversed, block)) {
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
     * Changes the width of the column
     * Returns true if the change occurred
     *
     * @param {Function | Number} [colWidth] - Width of the column
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     *
     * @see DKTools.Layout.prototype.setupColWidth
     * @see DKTools.Layout.prototype.start
     *
     * @returns {Boolean} Change occurred
     */
    setColWidth(colWidth, blockStart = false) {
        if (this._colWidth === colWidth) {
            return false;
        }

        const lastWidth = this._colWidth;

        this.setupColWidth(colWidth);

        if (this._colWidth === lastWidth) {
            return false;
        }

        if (!blockStart) {
            this.start();
        }

        return true;
    }

    /**
     * Changes the horizontal spacing
     * Returns true if the change occurred
     *
     * @param {Number} [scacing] - Horizontal spacing
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     *
     * @see DKTools.Layout.prototype.setupHorizontalSpacing
     * @see DKTools.Layout.prototype.start
     *
     * @returns {Boolean} Change occurred
     */
    setHorizontalSpacing(scacing, blockStart = false) {
        if (this._horizontalSpacing === scacing) {
            return false;
        }

        const lastSpacing = this._horizontalSpacing;

        this.setupHorizontalSpacing(scacing);

        if (this._horizontalSpacing === lastSpacing) {
            return false;
        }

        if (!blockStart) {
            this.start();
        }

        return true;
    }

    /**
     * Changes the value of the invert
     * Returns true if the change occurred
     *
     * @param {Boolean} [inverted] - Value of the invert
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     *
     * @see DKTools.Layout.prototype.setupInverted
     * @see DKTools.Layout.prototype.start
     *
     * @returns {Boolean} Change occurred
     */
    setInverted(inverted, blockStart = false) {
        if (this._inverted === inverted) {
            return false;
        }

        const lastReversed = this._inverted;

        this.setupInverted(inverted);

        if (this._inverted === lastReversed) {
            return false;
        }

        if (!blockStart) {
            this.start();
        }

        return true;
    }

    /**
     * Changes the items
     * Returns true if the change occurred
     *
     * @param {DKTools.Sprite[] | *} [items] - Items
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     *
     * @see DKTools.Layout.prototype.removeAllItems
     * @see DKTools.Layout.prototype.setupItems
     * @see DKTools.Layout.prototype.start
     *
     * @returns {Boolean} Change occurred
     */
    setItems(items, blockStart = false) {
        if (this._items == items) {
            return false;
        }

        this.removeAllItems();
        this.setupItems(items);

        if (!blockStart) {
            this.start();
        }

        return true;
    }

    /**
     * Changes the number of the columns
     * Returns true if the change occurred
     *
     * @param {Number} [cols] - Columns
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     *
     * @see DKTools.Layout.prototype.setupMaxCols
     * @see DKTools.Layout.prototype.start
     *
     * @returns {Boolean} Change occurred
     */
    setMaxCols(cols, blockStart = false) {
        if (this._maxCols === cols) {
            return false;
        }

        const lastCols = this._maxCols;

        this.setupMaxCols(cols);

        if (this._maxCols === lastCols) {
            return false;
        }

        if (!blockStart) {
            this.start();
        }

        return true;
    }

    /**
     * Changes the height of the row
     * Returns true if the change occurred
     *
     * @param {Function | Number} [rowHeight] - Height of the row
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     *
     * @see DKTools.Layout.prototype.setupRowHeight
     * @see DKTools.Layout.prototype.start
     *
     * @returns {Boolean} Change occurred
     */
    setRowHeight(rowHeight, blockStart = false) {
        if (this._rowHeight === rowHeight) {
            return false;
        }

        const lastHeight = this._rowHeight;

        this.setupRowHeight(rowHeight);

        if (this._rowHeight === lastHeight) {
            return false;
        }

        if (!blockStart) {
            this.start();
        }

        return true;
    }

    /**
     * Changes the horizontal and vertical spacing
     * Returns the number of changed parameters
     *
     * @param {Number} [horizontalSpacing] - Horizontal spacing
     * @param {Number} [verticalSpacing] - Vertical spacing
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     *
     * @see DKTools.Layout.prototype.setHorizontalSpacing
     * @see DKTools.Layout.prototype.setVerticalSpacing
     * @see DKTools.Layout.prototype.start
     *
     * @returns {Number} Number of changed parameters
     */
    setSpacing(horizontalSpacing, verticalSpacing, blockStart = false) {
        const block = true;
        let changed = 0;

        if (this.setHorizontalSpacing(horizontalSpacing, block)) {
            changed++;
        }

        if (this.setVerticalSpacing(verticalSpacing, block)) {
            changed++;
        }

        if (changed > 0 && !blockStart) {
            this.start();
        }

        return changed;
    }

    /**
     * Changes the vertical spacing
     * Returns true if the change occurred
     *
     * @param {Number} [scacing] - Vertical spacing
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     *
     * @see DKTools.Layout.prototype.setupVerticalSpacing
     * @see DKTools.Layout.prototype.start
     *
     * @returns {Boolean} Change occurred
     */
    setVerticalSpacing(scacing, blockStart = false) {
        if (this._verticalSpacing === scacing) {
            return false;
        }

        const lastSpacing = this._verticalSpacing;

        this.setupVerticalSpacing(scacing);

        if (this._verticalSpacing === lastSpacing) {
            return false;
        }

        if (!blockStart) {
            this.start();
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
     * @param {Number} [object.maxCols] - Columns
     * @param {Number} [object.horizontalSpacing] - Horizontal spacing
     * @param {Number} [object.verticalSpacing] - Vertical spacing
     * @param {Array} [object.items] - Items
     * @param {Function | Number} [object.rowHeight] - Height of the row
     * @param {Function | Number} [object.colWidth] - Width of the column
     * @param {Boolean} [object.inverted] - Value of the invert
     *
     * @see DKTools.Sprite.prototype.setupAll
     * @see DKTools.Layout.prototype.setupMaxCols
     * @see DKTools.Layout.prototype.setupSpacing
     * @see DKTools.Layout.prototype.setupItems
     * @see DKTools.Layout.prototype.setupRowHeight
     * @see DKTools.Layout.prototype.setupColWidth
     * @see DKTools.Layout.prototype.setupInverted
     */
    setupAll(object = {}) {
        object = object || {};

        DKTools.Sprite.prototype.setupAll.call(this, object);

        this.setupMaxCols(object.maxCols);
        this.setupSpacing(object.horizontalSpacing, object.verticalSpacing);
        this.setupItems(object.items);
        this.setupRowHeight(object.rowHeight);
        this.setupColWidth(object.colWidth);
        this.setupInverted(object.inverted);
    }

    /**
     * Sets the width of the column
     *
     * @param {Function | Number} [colWidth=this.standardColWidth()] - Width of the column
     *
     * @see DKTools.Layout.prototype.standardColWidth
     */
    setupColWidth(colWidth) {
        /**
         * @private
         * @readonly
         * @type {Function | Number}
         */
        this._colWidth = colWidth || this.standardColWidth();
    }

    /**
     * Sets the horizontal spacing
     *
     * @param {Number} [spacing=this.standardHorizontalSpacing()] - Horizontal spacing
     *
     * @see DKTools.Layout.prototype.standardHorizontalSpacing
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
     * Sets the value of the invert
     *
     * @param {Boolean} [inverted=this.standardInverted()] - Value of the ivnert
     *
     * @see DKTools.Layout.prototype.standardInverted
     */
    setupInverted(inverted) {
        /**
         * @private
         * @readonly
         * @type {Boolean}
         */
        this._inverted = _.defaultTo(inverted, this.standardInverted());
    }

    /**
     * Sets the items
     *
     * @param {DKTools.Sprite[] | *} [items=this.standardItems()] - Items
     *
     * @see DKTools.Layout.prototype.standardItems
     */
    setupItems(items) {
        this._items = _.clone(items || this.standardItems());
    }

    /**
     * Sets the number of the columns
     *
     * @param {Number} [cols=this.standardMaxCols()] - Columns
     *
     * @see DKTools.Layout.prototype.standardMaxCols
     */
    setupMaxCols(cols) {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._maxCols = _.defaultTo(cols, this.standardMaxCols());
    }

    /**
     * Sets the height of the row
     *
     * @param {Function | Number} [rowHeight=this.standardRowHeight()] - Height of the row
     *
     * @see DKTools.Layout.prototype.standardRowHeight
     */
    setupRowHeight(rowHeight) {
        /**
         * @private
         * @readonly
         * @type {Function | Number}
         */
        this._rowHeight = rowHeight || this.standardRowHeight();
    }

    /**
     * Sets the horizontal and vertical spacing
     *
     * @param {Number} [horizontalSpacing] - Horizontal spacing
     * @param {Number} [verticalSpacing] - Vertical spacing
     *
     * @see DKTools.Layout.prototype.setupHorizontalSpacing
     * @see DKTools.Layout.prototype.setupVerticalSpacing
     */
    setupSpacing(horizontalSpacing, verticalSpacing) {
        this.setupHorizontalSpacing(horizontalSpacing);
        this.setupVerticalSpacing(verticalSpacing);
    }

    /**
     * Sets the vertical spacing
     *
     * @param {Number} [spacing=this.standardVerticalSpacing()] - Vertical spacing
     *
     * @see DKTools.Layout.prototype.standardVerticalSpacing
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
     * Shows the items
     *
     * @param {Boolean} [activate=false] - Activates the items
     * @param {Boolean} [start=false] - Call of the "start" function
     *
     * @see DKTools.Layout.prototype.iterateItems
     */
    showItems(activate = false, start = false) {
        const callback = item => {
            item.show(activate);
        };

        this.iterateItems(callback, start);
    }

    /**
     * Returns the standard activity of the layout
     *
     * @override
     * @returns {Boolean} Standard activity of the layout
     */
    standardActive() {
        return false;
    }

    /**
     * Returns the standard width of the column
     *
     * @returns {Function} Standard width of the column
     */
    standardColWidth() {
        return col => {
            const items = this.getItemsInCol(col);

            return _.max(_.map(items, 'width'));
        };
    }

    /**
     * Returns the standard horizontal spacing
     *
     * @returns {Number} Standard horizontal spacing
     */
    standardHorizontalSpacing() {
        return 12;
    }

    /**
     * Returns the standard value of the invert
     *
     * @returns {Boolean} Standard value of the invert
     */
    standardInverted() {
        return false;
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
     * Returns the standard number of the columns
     *
     * @returns {Number} Standard number of columns
     */
    standardMaxCols() {
        return 1;
    }

    /**
     * Returns the standard height of the row
     *
     * @returns {Function} Standard height of the row
     */
    standardRowHeight() {
        return row => {
            const items = this.getItemsInRow(row);

            return _.max(_.map(items, 'height'));
        };
    }

    /**
     * Returns the standard vertical spacing
     *
     * @returns {Number} Standard vertical spacing
     */
    standardVerticalSpacing() {
        return this.getLineHeight() / 2;
    }

    /**
     * Starts the layout
     *
     * @override
     *
     * @see DKTools.Sprite.prototype.start
     * @see DKTools.Layout.prototype.isReady
     * @see DKTools.Layout.prototype.addOneTimeEvent
     */
    start() {
        this._started = true;

        if (this.isReady()) {
            DKTools.Sprite.prototype.start.call(this);
        } else {
            this.addOneTimeEvent({
                type: 'ready',
                onSuccess: this.start.bind(this)
            });
        }
    }

    /**
     * Starts the items
     *
     * @param {Boolean} [activate=false] - Activates the item
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     *
     * @see DKTools.Layout.prototype.iterateItems
     */
    startItems(activate = false, blockStart = false) {
        const callback = item => {
            item.start(activate);
        };

        this.iterateItems(callback, !blockStart);
    }

    // U methods

    /**
     * Updates all
     *
     * @override
     *
     * @see DKTools.Sprite.prototype.updateAll
     * @see DKTools.Layout.prototype.updateLayout
     */
    updateAll() {
        DKTools.Sprite.prototype.updateAll.call(this);
        this.updateLayout();
    }

    /**
     * Updates the layout
     *
     * @see DKTools.Layout.prototype.getMaxItems
     * @see DKTools.Layout.prototype.getMaxRows
     * @see DKTools.Layout.prototype.getMaxCols
     * @see DKTools.Layout.prototype.getColX
     * @see DKTools.Layout.prototype.getRowY
     * @see DKTools.Layout.prototype.moveItem
     */
    updateLayout() {
        const maxItems = this.getMaxItems();
        const maxRows = this.getMaxRows();
        const maxCols = this.getMaxCols();
        let index = 0;

        for (let i = 1; i <= maxRows && index < maxItems; i++) {
            for (let j = 1; j <= maxCols && index < maxItems; j++) {
                const x = this.getColX(j);
                const y = this.getRowY(i);

                this.moveItem(index++, x, y);
            }
        }
    }

};

// properties

Object.defineProperties(DKTools.Layout.prototype, {

    /**
     * Number of the columns
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Layout.prototype
     */
    maxCols: {
        get: function() {
            return this._maxCols;
        },
        configurable: true
    },

    /**
     * Items
     *
     * @readonly
     * @type {DKTools.Sprite[] | *}
     * @memberof DKTools.Layout.prototype
     */
    items: {
        get: function() {
            return this._items;
        },
        configurable: true
    },

    /**
     * Height of the row
     *
     * @readonly
     * @type {Function | Number}
     * @memberof DKTools.Layout.prototype
     */
    rowHeight: {
        get: function() {
            return this._rowHeight;
        },
        configurable: true
    },

    /**
     * Width of the column
     *
     * @readonly
     * @type {Function | Number}
     * @memberof DKTools.Layout.prototype
     */
    colWidth: {
        get: function() {
            return this._colWidth;
        },
        configurable: true
    },

    /**
     * Horizontal spacing
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Layout.prototype
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
     * @memberof DKTools.Layout.prototype
     */
    verticalSpacing: {
        get: function() {
            return this._verticalSpacing;
        },
        configurable: true
    },

    /**
     * Value of the invert
     *
     * @readonly
     * @type {Boolean}
     * @memberof DKTools.Layout.prototype
     */
    inverted: {
        get: function() {
            return this._inverted;
        },
        configurable: true
    }

});




