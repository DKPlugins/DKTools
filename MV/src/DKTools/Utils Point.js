//===========================================================================
// DKTools.Utils.Point
//===========================================================================

/**
 * The static class that defines utility methods for Point class
 *
 * @class DKTools.Utils.Point
 * @memberof DKTools.Utils
 */
DKTools.Utils.Point = class {

    // C methods

    /**
     * Clones the point
     *
     * @version 5.0.0
     * @static
     *
     * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object=0] - The X coordinate or Point or object with parameters
     * @param {Number} [y=0] - The Y coordinate
     *
     * @param {Number} [object.x] - The X coordinate
     * @param {Number} [object.y] - The Y coordinate
     *
     * @see DKTools.Utils.Point.toPoint
     *
     * @returns {Point} Cloned point
     */
    static clone(object = 0, y = 0) {
        return this.toPoint(object, y);
    }

    // E methods

    /**
     * Compares the coordinates of the points
     *
     * @version 5.0.0
     * @static
     *
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} point1 - Point or object with parameters
     * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object=0] - The X coordinate or Point or object with parameters
     * @param {Number} [y=0] - The Y coordinate (if object is Number)
     *
     * @param {Number} [point1.x] - The X coordinate
     * @param {Number} [point1.y] - The Y coordinate
     *
     * @param {Number} [object.x] - The X coordinate
     * @param {Number} [object.y] - The Y coordinate
     *
     * @example
     * var point1 = new Point(0, 0);
     * var point2 = new Point(0, 0);
     * DKTools.Utils.Point.equals(point1, point2);
     * => true
     *
     * @example
     * var point1 = new Point(0, 0);
     * DKTools.Utils.Point.equals(point1, 0, 1);
     * => false
     *
     * @example
     * DKTools.Utils.Point.equals();
     * => false
     *
     * @see DKTools.Utils.Point.toPoint
     *
     * @returns {Boolean} Comparison result
     */
    static equals(point1, object = 0, y = 0) {
        if (arguments.length === 0) {
            return false;
        }

        const point2 = this.toPoint(object, y);

        point1 = this.toPoint(point1);

        return point1.x === point2.x && point1.y === point2.y;
    }

    // G methods

    /**
     * Returns the distance between points
     *
     * @since 5.0.0
     * @static
     *
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} point1 - Point or object with parameters
     * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object=0] - The X coordinate or Point or object with parameters
     * @param {Number} [y=0] - The Y coordinate (if object is Number)
     *
     * @param {Number} [point1.x] - The X coordinate
     * @param {Number} [point1.y] - The Y coordinate
     *
     * @param {Number} [object.x] - The X coordinate
     * @param {Number} [object.y] - The Y coordinate
     *
     * @see DKTools.Utils.Point.toPoint
     *
     * @returns {Number} Distance between points
     */
    static getDistance(point1, object = 0, y = 0) {
        const point2 = this.toPoint(object, y);

        point1 = this.toPoint(point1);

        return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
    }

    // T methods

    /**
     * Converts the point into an array
     *
     * @version 5.0.0
     * @since 2.0.0
     * @static
     *
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} object - Point or object with parameters
     *
     * @param {Number} object.x - The X coordinate
     * @param {Number} object.y - The Y coordinate
     *
     * @example
     * DKTools.Utils.Point.toArray(new Point(0, 0));
     * => [0, 0]
     *
     * @example
     * DKTools.Utils.Point.toArray({ x: 0, y: 1 });
     * => [0, 1]
     *
     * @returns {Number[]} Array with coordinates
     */
    static toArray(object) {
        return [object.x, object.y];
    }

    /**
     * Converts arguments to Point
     *
     * @version 5.0.0
     * @since 2.0.0
     * @static
     *
     * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object=0] - The X coordinate or Point or object with parameters
     * @param {Number} [y=0] - The Y coordinate (if object is Number)
     *
     * @param {Number} [object.x] - The X coordinate
     * @param {Number} [object.y] - The Y coordinate
     *
     * @example
     * var point = DKTools.Utils.Point.toPoint(0, 0);
     * => Point
     *
     * @example
     * var point = DKTools.Utils.Point.toPoint(new Point(0, 0));
     * => Point
     *
     * @example
     * var point = DKTools.Utils.Point.toPoint({ x: 0, y: 0 });
     * => Point
     *
     * @example
     * var point = DKTools.Utils.Point.toPoint();
     * => Point // x = 0, y = 0
     *
     * @see DKTools.Utils.Point.tryToPoint
     *
     * @returns {Point} Point
     */
    static toPoint(object = 0, y = 0) {
        const point = this.tryToPoint(object, y);

        if (point !== null) {
            return point;
        }

        const toFinite = (value) => {
            return (Number.isFinite(value) ? value : 0);
        };
        let x;

        if (object instanceof Object) {
            x = object.x;
            y = object.y;
        }

        x = toFinite(x);
        y = toFinite(y);

        return new Point(x, y);
    }

    /**
     * Converts arguments to Point, if possible
     *
     * @since 5.0.0
     * @static
     *
     * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} object - The X coordinate or Point or object with parameters
     * @param {Number} [y] - The Y coordinate (if object is Number)
     *
     * @param {Number} [object.x] - The X coordinate
     * @param {Number} [object.y] - The Y coordinate
     *
     * @returns {Point | null} Point or null
     */
    static tryToPoint(object, y) {
        let pointX, pointY;

        if (object instanceof Object) {
            pointX = object.x;
            pointY = object.y;
        } else { // object - Number
            pointX = object;
            pointY = y;
        }

        if (DKTools.Utils.Array.isNumberArray([pointX, pointY])) {
            return new Point(pointX, pointY);
        }

        return null;
    }

};




