//===========================================================================
// DKTools.Utils.Bitmap
//===========================================================================

/**
 * The static class that defines utility methods for Bitmap class
 *
 * @class DKTools.Utils.Bitmap
 * @memberof DKTools.Utils
 */
DKTools.Utils.Bitmap = class {

    // C methods

    /**
     * Clones the bitmap
     *
     * @static
     * @param {Bitmap} bitmap - The bitmap to be cloned
     * @returns {Bitmap | null} Cloned bitmap
     */
    static clone(bitmap) {
        if (!bitmap || bitmap.url) {
            return bitmap;
        }

        const canvas = bitmap.canvas;
        const newBitmap = new Bitmap(canvas.width, canvas.height);
        const newContext = newBitmap.context;

        newContext.drawImage(canvas, 0, 0);

        return newBitmap;
    }

    // D methods

    /**
     * Draws the line to the bitmap
     *
     * @static
     *
     * @param {Bitmap} bitmap - Bitmap
     * @param {Number} x1 - The X coordinate of start of the line
     * @param {Number} y1 - The Y coordinate of start of the line
     * @param {Number} x2 - The X coordinate of end of the line
     * @param {Number} y2 - The Y coordinate of end of the line
     * @param {String} [color='white'] - Line color
     * @param {Number} [lineWidth=1] - Line width
     *
     * @see CanvasRenderingContext2D.lineTo
     */
    static drawLine(bitmap, x1, y1, x2, y2, color = 'white', lineWidth = 1) {
        const context = bitmap.context;

        context.save();
        context.strokeStyle = color;
        context.lineWidth = lineWidth;
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        context.restore();

        bitmap._setDirty();
    }

    // F methods

    /**
     * Draws an arc and fills it with color
     *
     * @static
     *
     * @param {Bitmap} bitmap - Bitmap
     * @param {Number} x - The X coordinate
     * @param {Number} y - The Y coordinate
     * @param {Number} radius - Radius of the arc
     * @param {Number} startAngle - Starting angle
     * @param {Number} endAngle - End angle
     * @param {String} [color='white'] - Fill color
     * @param {Boolean} [anticlockwise=false] - Anticlockwise
     *
     * @see CanvasRenderingContext2D.arc
     */
    static fillArc(bitmap, x, y, radius, startAngle, endAngle, color = 'white', anticlockwise = false) {
        const context = bitmap.context;

        context.save();
        context.fillStyle = color;
        context.beginPath();
        context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        context.fill();
        context.restore();

        bitmap._setDirty();
    }

    // G methods

    /**
     * Returns base64 of the bitmap
     *
     * @since 5.0.0
     * @static
     *
     * @param {Bitmap} bitmap - Bitmap
     *
     * @returns {String | null} Base64 of the bitmap
     */
    static getBase64(bitmap) {
        if (!bitmap || !bitmap.canvas) {
            return null;
        }

        return bitmap.canvas.toDataURL('image/png');
    }

    // L methods

    /**
     * Loads and returns a bitmap
     *
     * @version 6.1.0
     * @static
     *
     * @param {String | Bitmap | Array | Object} object - Path to file or Bitmap or array with parameters or object with parameters
     * @param {String | Object} filename - Name of file (if object is String)
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     *
     * @param {String} object.folder - Path to file
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Bitmap | null} Loaded bitmap or null
     */
    static load(object, filename, listener, hue, smooth) {
        if (!object) {
            return null;
        } else if (object instanceof Bitmap) {
            return object;
        } else if (DKTools.Utils.isArrayLike(object)) {
            return this.load.apply(this, object);
        } else if (object instanceof Object) {
            return this.load(object.folder, object.filename, object.listener, object.hue, object.smooth);
        } else if (!DKTools.Utils.isString(object)) {
            return null;
        }

        // object - String (folder)
        const folder = DKTools.IO.normalizePath(object + '/', true);
        const bitmap = ImageManager.loadBitmap(folder, filename, hue, smooth);

        if (DKTools.Utils.isFunction(listener)) {
            bitmap.addLoadListener(listener);
        }

        return bitmap;
    }

    /**
     * Loads and returns a bitmap
     * Asynchronous version of DKTools.Utils.Bitmap.load
     * Promise resolves a loaded bitmap
     *
     * @since 4.0.0
     * @static
     * @async
     *
     * @param {String | Bitmap | Array | Object} object - Path to file or Bitmap or array with parameters or object with parameters
     * @param {String | Object} [filename] - Name of file (if object is String)
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     *
     * @param {String} object.folder - Path to file
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     *
     * @see DKTools.Utils.Bitmap.load
     *
     * @returns {Promise} Loaded bitmap or null
     */
    static async loadAsync(object, filename, listener, hue, smooth) {
        return new Promise((resolve) => {
            const bitmap = this.load(object, filename, listener, hue, smooth);

            if (bitmap) {
                bitmap.addLoadListener(() => resolve(bitmap));
            } else {
                resolve(bitmap);
            }
        });
    }

    /**
     * Loads a bitmaps and call the callback function when all bitmaps are ready
     *
     * @version 3.0.0
     * @static
     *
     * @param {Bitmap[] | Object[]} bitmaps - Bitmaps to load
     * @param {Function} onLoadAllBitmaps - Function that is called when all bitmaps are loaded and ready
     * @param {Function} [onLoadSomeBitmap] - Function that is called when some bitmap are loaded and ready
     *
     * @param {String} bitmaps[].folder - Path to file
     * @param {String} bitmaps[].filename - Name of file
     * @param {Function} [bitmaps[].listener] - Function of processing after loading a bitmap
     * @param {Number} [bitmaps[].hue] - Hue of bitmap
     * @param {Boolean} [bitmaps[].smooth] - Smooth of bitmap
     *
     * @example
     * var bitmaps = [];
     * bitmaps[0] = ImageManager.loadSystem('Window');
     * bitmaps[1] = {
     *  folder: 'img/system/',
     *  filename: 'IconSet'
     * };
     *
     * DKTools.Utils.Bitmap.loadBitmaps(bitmaps, function(allBitmaps) {
     *     // all loaded bitmaps
     * });
     *
     * @see DKTools.Utils.Bitmap.load
     */
    static loadBitmaps(bitmaps, onLoadAllBitmaps, onLoadSomeBitmap) {
        if (!DKTools.Utils.isFunction(onLoadAllBitmaps)) {
            return;
        }

        bitmaps = _.map(bitmaps, bitmap => this.load(bitmap));

        const loadedBitmaps = [];
        let loaded = 0;

        const loadListener = (index, loadedBitmap) => {
            if (!onLoadAllBitmaps) {
                return;
            }

            loadedBitmaps[index] = loadedBitmap;
            loaded++;

            if (DKTools.Utils.isFunction(onLoadSomeBitmap)) {
                onLoadSomeBitmap(loadedBitmap, loadedBitmaps, bitmaps);
            }

            if (bitmaps.length === loaded) {
                onLoadAllBitmaps(bitmaps);

                onLoadAllBitmaps = null;
            }
        };

        _.forEach(bitmaps, (bitmap, index) => {
            if (bitmap instanceof Bitmap) {
                bitmap.addLoadListener(bitmap => loadListener(index, bitmap));
            } else {
                loadListener(index, bitmap);
            }
        });
    }

    /**
     * Asynchronously loads a bitmaps
     * Promise resolves a loaded bitmaps
     *
     * @since 4.0.0
     * @static
     * @async
     *
     * @param {Bitmap[] | Object[]} bitmaps - Bitmaps to load
     *
     * @param {String} bitmaps[].folder - Path to file
     * @param {String} bitmaps[].filename - Name of file
     * @param {Function} [bitmaps[].listener] - Function of processing after loading a bitmap
     * @param {Number} [bitmaps[].hue] - Hue of bitmap
     * @param {Boolean} [bitmaps[].smooth] - Smooth of bitmap
     *
     * @see DKTools.Utils.Bitmap.loadAsync
     *
     * @returns {Promise} Loaded bitmaps
     */
    static async loadBitmapsAsync(bitmaps) {
        if (!Array.isArray(bitmaps)) {
            bitmaps = [bitmaps];
        }

        const promises = _.map(bitmaps, bitmap => this.loadAsync(bitmap));

        return Promise.all(promises);
    }

    // R methods

    /**
     * Loads, reserves and reserves a bitmap
     *
     * @version 6.1.0
     * @since 3.0.0
     * @static
     *
     * @param {String | Bitmap | Array | Object} object - Path to file or Bitmap or array with parameters or object with parameters
     * @param {String | Object} filename - Name of file (if object is String)
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     * @param {Number} [reservationId] - Reservation ID (if object is String)
     *
     * @param {String} object.folder - Path to file
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     * @param {Number} [object.reservationId] - Reservation ID
     *
     * @returns {Bitmap | null} Loaded bitmap or null
     */
    static reserve(object, filename, listener, hue, smooth, reservationId) {
        if (!object) {
            return null;
        } else if (object instanceof Bitmap) {
            return object;
        } else if (DKTools.Utils.isArrayLike(object)) {
            return this.reserve.apply(this, object);
        } else if (object instanceof Object) {
            return this.reserve(object.folder, object.filename, object.listener, object.hue, object.smooth, object.reservationId);
        } else if (!DKTools.Utils.isString(object)) {
            return null;
        }

        // object - String (folder)
        const folder = DKTools.IO.normalizePath(object + '/', true);
        const bitmap = ImageManager.reserveBitmap(folder, filename, hue, smooth, reservationId);

        if (DKTools.Utils.isFunction(listener)) {
            bitmap.addLoadListener(listener);
        }

        return bitmap;
    }

    /**
     * Loads, reserves and returns a bitmap
     * Asynchronous version of DKTools.Utils.Bitmap.reserve
     * Promise resolves a loaded bitmap
     *
     * @since 4.0.0
     * @static
     * @async
     *
     * @param {String | Bitmap | Array | Object} object - Path to file or Bitmap or array with parameters or object with parameters
     * @param {String | Object} filename - Name of file (if object is String)
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     * @param {Number} [reservationId] - Reservation ID (if object is String)
     *
     * @param {String} object.folder - Path to file
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     * @param {Number} [object.reservationId] - Reservation ID
     *
     * @see DKTools.Utils.Bitmap.reserve
     *
     * @returns {Promise} Loaded bitmap or null
     */
    static async reserveAsync(object, filename, listener, hue, smooth, reservationId) {
        return new Promise(resolve => {
            const bitmap = this.reserve(object, filename, listener, hue, smooth, reservationId);

            if (bitmap) {
                bitmap.addLoadListener(() => resolve(bitmap));
            } else {
                resolve(bitmap);
            }
        });
    }

    /**
     * Loads and reserves a bitmaps and call the callback function when all bitmaps are ready
     *
     * @since 3.0.0
     * @static
     *
     * @param {Bitmap[] | Object[]} bitmaps - Bitmaps to load
     * @param {Function} onLoadAllBitmaps - Function that is called when all bitmaps are loaded and ready
     * @param {Function} [onLoadSomeBitmap] - Function that is called when some bitmap are loaded and ready
     *
     * @param {String} object[].folder - Path to file
     * @param {String} object[].filename - Name of file
     * @param {Function} [object[].listener] - Function of processing after loading a bitmap
     * @param {Number} [object[].hue] - Hue of bitmap
     * @param {Boolean} [object[].smooth] - Smooth of bitmap
     * @param {Number} [object[].reservationId] - Reservation ID
     *
     * @example
     * var bitmaps = [];
     * bitmaps[0] = ImageManager.reserveSystem('Window');
     * bitmaps[1] = {
     *  folder: 'img/system/',
     *  filename: 'IconSet'
     * };
     *
     * DKTools.Utils.Bitmap.reserveBitmaps(bitmaps, function(allBitmaps) {
     *     // all loaded bitmaps
     * });
     *
     * @see DKTools.Utils.Bitmap.reserve
     */
    static reserveBitmaps(bitmaps, onLoadAllBitmaps, onLoadSomeBitmap) {
        if (!DKTools.Utils.isFunction(onLoadAllBitmaps)) {
            return;
        }

        bitmaps = _.map(bitmaps, bitmap => this.reserve(bitmap));

        const loadedBitmaps = [];
        let loaded = 0;

        const loadListener = (index, loadedBitmap) => {
            if (!onLoadAllBitmaps) {
                return;
            }

            loadedBitmaps[index] = loadedBitmap;
            loaded++;

            if (DKTools.Utils.isFunction(onLoadSomeBitmap)) {
                onLoadSomeBitmap(loadedBitmap, loadedBitmaps, bitmaps);
            }

            if (bitmaps.length === loaded) {
                onLoadAllBitmaps(bitmaps);
                onLoadAllBitmaps = null;
            }
        };

        _.forEach(bitmaps, (bitmap, index) => {
            if (bitmap instanceof Bitmap) {
                bitmap.addLoadListener(bitmap => loadListener(index, bitmap));
            } else {
                loadListener(index, bitmap);
            }
        });
    }

    /**
     * Asynchronously loads and reserves a bitmaps
     * Promise resolves a loaded bitmaps
     *
     * @since 4.0.0
     * @static
     * @async
     *
     * @param {Bitmap[] | Object[]} bitmaps - Bitmaps to load
     *
     * @param {String} object[].folder - Path to file
     * @param {String} object[].filename - Name of file
     * @param {Function} [object[].listener] - Function of processing after loading a bitmap
     * @param {Number} [object[].hue] - Hue of bitmap
     * @param {Boolean} [object[].smooth] - Smooth of bitmap
     * @param {Number} [object[].reservationId] - Reservation ID
     *
     * @see DKTools.Utils.Bitmap.reserveAsync
     *
     * @returns {Promise} Loaded bitmaps
     */
    static async reserveBitmapsAsync(bitmaps) {
        if (!Array.isArray(bitmaps)) {
            bitmaps = [bitmaps];
        }

        const promises = _.map(bitmaps, bitmap => this.reserveAsync(bitmap));

        return Promise.all(promises);
    }

    // S methods

    /**
     * Draws an arc without fill
     *
     * @static
     *
     * @param {Bitmap} bitmap - Bitmap
     * @param {Number} x - The X coordinate
     * @param {Number} y - The Y coordinate
     * @param {Number} radius - Radius of the arc
     * @param {Number} startAngle - Starting angle
     * @param {Number} endAngle - End angle
     * @param {String} [color='white'] - Line color
     * @param {Number} [lineWidth=1] - Line width
     * @param {Boolean} [anticlockwise=false] - Anticlockwise
     *
     * @see CanvasRenderingContext2D.arc
     */
    static strokeArc(bitmap, x, y, radius, startAngle, endAngle, color = 'white', lineWidth = 1, anticlockwise = false) {
        const context = bitmap.context;

        context.save();
        context.strokeStyle = color;
        context.lineWidth = lineWidth;
        context.beginPath();
        context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        context.stroke();
        context.restore();

        bitmap._setDirty();
    }

    /**
     * Draws a rectangle without fill
     *
     * @static
     *
     * @param {Bitmap} bitmap - Bitmap
     * @param {Number} x - The X coordinate
     * @param {Number} y - The Y coordinate
     * @param {Number} width - Width of the rectangle
     * @param {Number} height - Height of the rectangle
     * @param {String} [color='white'] - Line color
     * @param {Number} [lineWidth=1] - Line width
     *
     * @see CanvasRenderingContext2D.strokeRect
     */
    static strokeRect(bitmap, x, y, width, height, color = 'white', lineWidth = 1) {
        const context = bitmap.context;

        context.save();
        context.strokeStyle = color;
        context.lineWidth = lineWidth;
        context.strokeRect(x, y, width, height);
        context.restore();

        bitmap._setDirty();
    }

};




