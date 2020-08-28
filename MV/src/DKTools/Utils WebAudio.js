//===========================================================================
// DKTools.Utils.WebAudio
//===========================================================================

/**
 * The static class that defines utility methods for WebAudio class
 *
 * @since 5.0.0
 *
 * @class DKTools.Utils.WebAudio
 * @memberof DKTools.Utils
 */
DKTools.Utils.WebAudio = class {

    // L methods

    /**
     * Loads and returns an audio file
     *
     * @static
     *
     * @param {String | WebAudio | Array | Object} object - Path to file or WebAudio or array with parameters or object with parameters
     * @param {String} [filename] - Name of file (if object is String)
     * @param {Function} [listener] - Function of processing after loading an audio file (if object is String)
     *
     * @param {String} object.folder - Path to file
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading an audio file
     *
     * @see WebAudio.prototype.addLoadListener
     *
     * @returns {WebAudio | null} Loaded audio file or null
     */
    static load(object, filename, listener) {
        if (!object) {
            return null;
        } else if (object instanceof WebAudio) {
            return object;
        } else if (DKTools.Utils.isArrayLike(object)) {
            return this.load.apply(this, object);
        } else if (object instanceof Object) {
            return this.load(object.folder, object.filename, object.listener, object.hue, object.smooth);
        } else if (!DKTools.Utils.isString(object)) {
            return null;
        }

        // object - String (folder)
        const buffer = AudioManager.createBuffer(object, filename);

        if (DKTools.Utils.isFunction(listener)) {
            buffer.addLoadListener(listener);
        }

        return buffer;
    }

    /**
     * Loads and returns an audio file
     * Asynchronous version of DKTools.Utils.WebAudio.load
     * Promise resolves a loaded audio file
     *
     * @static
     * @async
     *
     * @param {String | WebAudio | Array | Object} object - Path to file or WebAudio or array with parameters or object with parameters
     * @param {String} [filename] - Name of file (if object is String)
     * @param {Function} [listener] - Function of processing after loading an audio file (if object is String)
     *
     * @param {String} object.folder - Path to file
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading an audio file
     *
     * @see DKTools.Utils.WebAudio.load
     *
     * @returns {Promise} Loaded audio file or null
     */
    static async loadAsync(object, filename, listener) {
        return new Promise(resolve => {
            const buffer = this.load(object, filename, listener);

            if (buffer) {
                buffer.addLoadListener(() => resolve(buffer));
            } else {
                resolve(buffer);
            }
        });
    }

    /**
     * Loads a audio files and call the callback function when all audio files are ready
     *
     * @static
     *
     * @param {WebAudio[] | Object[]} buffers - Audio files to load
     * @param {Function} onLoadAllBuffers - Function that is called when all audio files are loaded and ready
     * @param {Function} [onLoadSomeBuffer] - Function that is called when some audio file are loaded and ready
     *
     * @param {String} object[].folder - Path to file
     * @param {String} object[].filename - Name of file
     * @param {Function} [object[].listener] - Function of processing after loading an audio file
     *
     * @example
     * var buffers = [];
     * buffers[0] = AudioManager.createBuffer('bgm', 'Battle1');
     * buffers[1] = {
     *  folder: 'bgm',
     *  filename: 'Battle2'
     * };
     *
     * DKTools.Utils.WebAudio.loadBuffers(buffers, function(allBuffers) {
     *     // all loaded buffers
     * });
     *
     * @see DKTools.Utils.WebAudio.load
     */
    static loadBuffers(buffers, onLoadAllBuffers, onLoadSomeBuffer) {
        if (!DKTools.Utils.isFunction(onLoadAllBuffers)) {
            return;
        }

        buffers = _.map(buffers, buffer => this.load(buffer));

        const loadedBuffers = [];
        let loaded = 0;

        const loadListener = (index, loadedBuffer) => {
            if (!onLoadAllBuffers) {
                return;
            }

            loadedBuffers[index] = loadedBuffer;
            loaded++;

            if (DKTools.Utils.isFunction(onLoadSomeBuffer)) {
                onLoadSomeBuffer(loadedBuffer, loadedBuffers, buffers);
            }

            if (buffers.length === loaded) {
                onLoadAllBuffers(buffers);

                onLoadAllBuffers = null;
            }
        };

        _.forEach(buffers, (buffer, index) => {
            if (buffer instanceof WebAudio) {
                buffer.addLoadListener(buffer => loadListener(index, buffer));
            } else {
                loadListener(index, buffer);
            }
        });
    }

    /**
     * Asynchronously loads an audio files
     * Promise resolves a loaded audio files
     *
     * @static
     * @async
     *
     * @param {WebAudio[] | Object[]} buffers - Audio files to load
     *
     * @param {String} object[].folder - Path to file
     * @param {String} object[].filename - Name of file
     * @param {Function} [object[].listener] - Function of processing after loading an audio file
     *
     * @see DKTools.Utils.WebAudio.loadAsync
     *
     * @returns {Promise} Loaded audio files
     */
    static async loadBuffersAsync(buffers) {
        const promises = _.map(buffers, buffer => this.loadAsync(buffer));

        return Promise.all(promises);
    }

};




