//===========================================================================
// DKTools.Utils.Rectangle
//===========================================================================

/**
 * The static class that defines utility methods for Rectangle class
 *
 * @class DKTools.Utils.Rectangle
 * @memberof DKTools.Utils
 */
DKTools.Utils.Rectangle = class {

    // C methods

    /**
     * Clones the rectangle
     *
     * @version 5.0.0
     * @static
     *
     * @param {Number | PIXI.Rectangle | Rectangle | Object} [object=0] - The X coordinate or Rectangle or object with paramters
     * @param {Number} [y=0] - The Y coordinate (if object is Number)
     * @param {Number} [width=0] - The rectangle width (if object is Number)
     * @param {Number} [height=0] - The rectangle height (if object is Number)
     *
     * @param {Number} [object.x] - The X coordinate
     * @param {Number} [object.y] - The Y coordinate
     * @param {Number} [object.width] - The rectangle width
     * @param {Number} [object.height] - The rectangle height
     *
     * @see DKTools.Utils.Rectanlge.toRectangle
     *
     * @returns {Rectangle} Cloned rectangle
     */
    static clone(object = 0, y = 0, width = 0, height = 0) {
        return this.toRectangle(object, y, width, height);
    }

    // E methods

    /**
     * Compares the coordinates, width and height of the rectangles
     *
     * @version 5.0.0
     * @static
     *
     * @param {PIXI.Rectangle | Rectangle | Object} rect1 -  Rectangle or object with paramters
     * @param {Number | PIXI.Rectangle | Rectangle | Object} [object=0] - The X coordinate or Rectangle or object with paramters
     * @param {Number} [y=0] - The Y coordinate (if object is Number)
     * @param {Number} [width=0] - The rectangle width (if object is Number)
     * @param {Number} [height=0] - The rectangle height (if object is Number)
     *
     * @param {Number} [object.x] - The X coordinate
     * @param {Number} [object.y] - The Y coordinate
     * @param {Number} [object.width] - The rectangle width
     * @param {Number} [object.height] - The rectangle height
     *
     * @example
     * var rect1 = new Rectangle(0, 0, 0, 0);
     * var rect2 = new Rectangle(0, 0, 0, 0);
     * DKTools.Utils.Rectangle.equals(rect1, rect2);
     * => true
     *
     * @example
     * var rect1 = new Rectangle(0, 0, 0, 0);
     * var rect2 = new Rectangle(0, 0, 0, 1);
     * DKTools.Utils.Rectangle.equals(rect1, rect2);
     * => false
     *
     * @example
     * DKTools.Utils.Rectangle.equals();
     * => false
     *
     * @see DKTools.Utils.Rectanlge.toRectangle
     *
     * @returns {Boolean} Comparison result
     */
    static equals(rect1, object = 0, y = 0, width = 0, height = 0) {
        if (arguments.length === 0) {
            return false;
        }

        const rect2 = this.toRectangle(object, y, width, height);

        rect1 = this.toRectangle(rect1);

        return rect1.x === rect2.x && rect1.y === rect2.y &&
            rect1.width === rect2.width && rect1.height === rect2.height;
    }

    // I methods

    /**
     * Checks whether the rectangle is empty (0, 0, 0, 0)
     *
     * @version 5.0.0
     * @static
     *
     * @param {PIXI.Rectangle | Rectangle | Object} object - Rectangle or object with parameters
     *
     * @param {Number} [object.x] - The X coordinate
     * @param {Number} [object.y] - The Y coordinate
     * @param {Number} [object.width] - The rectangle width
     * @param {Number} [object.height] - The rectangle height
     *
     * @example
     * var rect = new Rectangle(0, 0, 100, 100);
     * DKTools.Utils.Rectangle.isEmpty(rect);
     * => false
     *
     * @example
     * var rect = new Rectangle(0, 0, 0, 0);
     * DKTools.Utils.Rectangle.isEmpty(rect);
     * => true
     *
     * @see DKTools.Utils.Rectangle.equals
     *
     * @returns {Boolean} The rectangle is empty
     */
    static isEmpty(object) {
        return this.equals(object, Rectangle.emptyRectangle);
    }

    // T methods

    /**
     * Converts the rect into an array
     *
     * @version 5.0.0
     * @since 2.0.0
     * @static
     *
     * @param {PIXI.Rectangle | Rectangle | Object} object - Rectanlge or object with parameters
     *
     * @param {Number} [object.x] - The X coordinate
     * @param {Number} [object.y] - The Y coordinate
     * @param {Number} [object.width] - The rectangle width
     * @param {Number} [object.height] - The rectangle height
     *
     * @example
     * var rect = new Rectangle(0, 0, 0, 0);
     * DKTools.Utils.Rectangle.toArray(rect);
     * => [0, 0, 0, 0]
     *
     * @returns {Number[]} Array with coordinates, width and height of the rect
     */
    static toArray(object) {
        return [object.x, object.y, object.width, object.height];
    }

    /**
     * Converts arguments to Rectangle
     *
     * @version 5.0.0
     * @since 2.0.0
     * @static
     *
     * @param {Number | PIXI.Rectangle | Rectangle | Object} [object=0] - The X coordinate or Rectangle or object with parameters
     * @param {Number} [y=0] - The Y coordinate (if object is Number)
     * @param {Number} [width=0] - The rectangle width (if object is Number)
     * @param {Number} [height=0] - ВThe rectangle height (if object is Number)
     *
     * @param {Number} [object.x] - The X coordinate
     * @param {Number} [object.y] - The Y coordinate
     * @param {Number} [object.width] - The rectangle width
     * @param {Number} [object.height] - The rectangle height
     *
     * @example
     * var rect = DKTools.Utils.Rectangle.toRectangle(0, 0, 0, 0);
     * => Rectangle
     *
     * @example
     * var rect = DKTools.Utils.Rectangle.toRectangle(new Rectangle(0, 0, 0, 0));
     * => Rectangle
     *
     * @example
     * var rect = DKTools.Utils.Rectangle.toRectangle({ x: 0, y: 0, width: 0, height: 0});
     * => Rectangle
     *
     * @example
     * var rect = DKTools.Utils.Rectangle.toRectangle();
     * => Rectangle // x = 0, y = 0, width = 0, height = 0
     *
     * @see DKTools.Utils.Rectangle.tryToRectangle
     *
     * @returns {Rectangle} Rectangle
     */
    static toRectangle(object = 0, y = 0, width = 0, height = 0) {
        const rect = this.tryToRectangle(object, y, width, height);

        if (rect) {
            return rect;
        }

        const toFinite = (value) => {
            return Number.isFinite(value) ? value : 0;
        };
        let x;

        if (object instanceof Object) {
            x = object.x;
            y = object.y;
            width = object.width;
            height = object.height;
        }

        x = toFinite(x);
        y = toFinite(y);
        width = toFinite(width);
        height = toFinite(height);

        return new Rectangle(x, y, width, height);
    }

    /**
     * Converts arguments to Rectangle, if possible
     *
     * @since 5.0.0
     * @static
     *
     * @param {Number | PIXI.Rectangle | Rectangle | Object} [object] - The X coordinate or Rectangle or object with parameters
     * @param {Number} [y] - The Y coordinate (if object is Number)
     * @param {Number} [width] - The rectangle width (if object is Number)
     * @param {Number} [height] - ВThe rectangle height (if object is Number)
     *
     * @param {Number} [object.x] - The X coordinate
     * @param {Number} [object.y] - The Y coordinate
     * @param {Number} [object.width] - The rectangle width
     * @param {Number} [object.height] - The rectangle height
     *
     * @returns {Rectangle | null} Rectangle or null
     */
    static tryToRectangle(object, y, width, height) {
        let rectX, rectY, rectWidth, rectHeight;

        if (object instanceof Object) {
            rectX = object.x;
            rectY = object.y;
            rectWidth = object.width;
            rectHeight = object.height;
        } else { // object - Number
            rectX = object;
            rectY = y;
            rectWidth = width;
            rectHeight = height;
        }

        if (DKTools.Utils.Array.isNumberArray([rectX, rectY, rectWidth, rectHeight])) {
            return new Rectangle(rectX, rectY, rectWidth, rectHeight);
        }

        return null;
    }

};




