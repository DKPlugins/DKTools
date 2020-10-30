//===========================================================================
// DKTools.Utils.Bitmap
//===========================================================================

/**
 * The static class that defines utility methods for Bitmap class
 * @class
 * @memberof DKTools.Utils
 */
DKTools.Utils.Bitmap = class {
    // D methods

    /**
     * Draws the line to the bitmap
     * @static
     * @param {Bitmap} bitmap - Bitmap
     * @param {Number} x1 - The X coordinate of start of the line
     * @param {Number} y1 - The Y coordinate of start of the line
     * @param {Number} x2 - The X coordinate of end of the line
     * @param {Number} y2 - The Y coordinate of end of the line
     * @param {String} [color='white'] - Line color
     * @param {Number} [lineWidth=1] - Line width
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

    // G methods

    /**
     * Returns base64 of the bitmap
     * @since 5.0.0
     * @static
     * @param {Bitmap} bitmap - Bitmap
     * @return {String | null} Base64 of the bitmap
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
     * @return {Bitmap | null} Loaded bitmap or null
     */
    static load(object, filename, listener, hue, smooth) {
        if (!object) {
            return null;
        } else if (object instanceof Bitmap) {
            return object;
        } else if (Array.isArray(object) || String(object) === '[object Arguments]') {
            return this.load.apply(this, object);
        } else if (object instanceof Object) {
            return this.load(
                object.folder, object.filename, object.listener, object.hue, object.smooth);
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
     * @return {Promise<Bitmap | null>} Loaded bitmap or null
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
     * DKTools.Utils.Bitmap.loadBitmaps(bitmaps, (allBitmaps) => {
     *     // all loaded bitmaps
     * });
     */
    static loadBitmaps(bitmaps, onLoadAllBitmaps, onLoadSomeBitmap) {
        if (!DKTools.Utils.isFunction(onLoadAllBitmaps)) {
            return;
        }

        bitmaps = bitmaps.map(bitmap => this.load(bitmap));

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

        bitmaps.forEach((bitmap, index) => {
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
     * @return {Promise<Bitmap[]>} Loaded bitmaps
     */
    static async loadBitmapsAsync(bitmaps) {
        return Promise.all(bitmaps.map(bitmap => this.loadAsync(bitmap)));
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
     * @return {Bitmap | null} Loaded bitmap or null
     */
    static reserve(object, filename, listener, hue, smooth, reservationId) {
        if (!object) {
            return null;
        } else if (object instanceof Bitmap) {
            return object;
        } else if (Array.isArray(object) || String(object) === '[object Arguments]') {
            return this.reserve.apply(this, object);
        } else if (object instanceof Object) {
            return this.reserve(
                object.folder, object.filename, object.listener, object.hue, object.smooth, object.reservationId);
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
     * @return {Promise<Bitmap | null>} Loaded bitmap or null
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
     */
    static reserveBitmaps(bitmaps, onLoadAllBitmaps, onLoadSomeBitmap) {
        if (!DKTools.Utils.isFunction(onLoadAllBitmaps)) {
            return;
        }

        bitmaps = bitmaps.map(bitmap => this.reserve(bitmap));

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

        bitmaps.forEach((bitmap, index) => {
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
     * @return {Promise<Bitmap[]>} Loaded bitmaps
     */
    static async reserveBitmapsAsync(bitmaps) {
        return Promise.all(bitmaps.map(bitmap => this.reserveAsync(bitmap)));
    }

};


