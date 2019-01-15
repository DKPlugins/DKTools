//===========================================================================
// DKTools.IO.File
//===========================================================================

/**
 * File class
 *
 * @class DKTools.IO.File
 * @extends DKTools.IO.Entity
 *
 * @override
 *
 * @memberof DKTools.IO
 */
DKTools.IO.File = class extends DKTools.IO.Entity {

    // initialize methods

    /**
     * Initializes the file
     *
     * @version 5.0.0
     * @override
     *
     * @param {String} fullPath - Path to file
     */
    initialize(fullPath) {
        DKTools.IO.Entity.prototype.initialize.call(this, fullPath);

        this._detectExtension();
    }

    // D methods

    /**
     * Detects the extension
     *
     * @since 5.0.0
     * @private
     */
    _detectExtension() {
        let newExtension = this._extension;

        if (this.isAudio()) {
            newExtension = AudioManager.audioFileExt();
        } else if (this.isImage()) {
            newExtension = '.png';
        } else if (this.isVideo()) {
            if (Graphics.canPlayVideoType('video/webm') && !DKTools.Utils.isMobileDevice()) {
                newExtension = '.webm';
            } else {
                newExtension = '.mp4';
            }
        }

        this._extension = newExtension;
    }

    // E methods

    /**
     * Returns true if the entity exists
     *
     * @version 6.2.1
     * @override
     *
     * @returns {Boolean} Entity exists
     */
    exists() {
        if (DKTools.IO.isLocalMode()) {
            if (Decrypter.hasEncryptedAudio && this.isAudio() || Decrypter.hasEncryptedImages && this.isImage()) {
                const path = DKTools.IO.normalizePath(this.getPath() + '/' + Decrypter.extToEncryptExt(this.getFullName()));

                return DKTools.IO.pathExists(path);
            }
        }

        return DKTools.IO.Entity.prototype.exists.call(this);
    }

    // G methods

    /**
     * Returns the directory of the file
     *
     * @returns {DKTools.IO.Directory} Directory of the file
     */
    getDirectory() {
        return new DKTools.IO.Directory(this._path);
    }

    /**
     * Returns the directory name
     *
     * @since 6.1.0
     *
     * @see DKTools.IO.File.prototype.getDirectory
     *
     * @returns {String} Directory name
     */
    getDirectoryName() {
        const directory = this.getDirectory();

        return directory.getName();
    }

    // I methods

    /**
     * Returns true if an extension of the file is equal to .ogg or .m4a or .rpgmvo
     *
     * @version 3.0.0
     * @returns {Boolean} Extension of the file is equal to .ogg or .m4a or .rpgmvo
     */
    isAudio() {
        return this._extension === '.ogg' || this._extension === '.m4a' || this._extension === '.rpgmvo';
    }

    /**
     * Returns true if an extension of the file is equal to .json
     *
     * @returns {Boolean} Extension of the file is equal to .json
     */
    isJson() {
        return this._extension === '.json';
    }

    /**
     * Returns true if an extension of the file is equal to .txt
     *
     * @since 5.0.0
     * @returns {Boolean} Extension of the file is equal to .txt
     */
    isTxt() {
        return this._extension === '.txt';
    }

    /**
     * Returns true if an extension of the file is equal to .png, .rpgmvp or .webp
     *
     * @version 6.2.1
     * @returns {Boolean} Extension of the file is equal to .png, .rpgmvp or .webp
     */
    isImage() {
        return this._extension === '.png' || this._extension === '.rpgmvp' || this._extension === '.webp';
    }

    /**
     * Returns true if an extension of the file is equal to .js
     *
     * @returns {Boolean} Extension of the file is equal to .js
     */
    isScript() {
        return this._extension === '.js';
    }

    /**
     * Returns true if an extension of the file is equal to .mp4 or .webm
     *
     * @returns {Boolean} Extension of the file is equal to .mp4 or .webm
     */
    isVideo() {
        return this._extension === '.webm' || this._extension === '.mp4';
    }

    /**
     * Returns true if an extension of the file is equal to .rpgsave
     *
     * @returns {Boolean} Extension of the file is equal to .rpgsave
     */
    isSave() {
        return this._extension === '.rpgsave';
    }

    // L methods

    /**
     * Loads and returns a data
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Loaded data (only if the status is equal to DKTools.IO.OK)
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     * DKTools.IO.ERROR_OPTIONS_IS_NOT_AVAILABLE
     *
     * @version 6.1.0
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.readFile
     * @param {String | Object} [object.options] - Options for FileSystem.readFile or FileSystem.readFileSync
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     * @param {Boolean} [object.decompress] - Use LZString.decompressFromBase64 for a data
     * @param {Boolean | Object} [object.parse] - Use JSON.parse for a data
     *
     * @param {Function} [object.parse.reviver] - A function that transforms the results
     *
     * @see FileSystem.readFile
     * @see FileSystem.readFileSync
     *
     * @returns {{ data: Object, status: Number }} Loaded data
     */
    load(object) {
        if (!object) {
            return { data: null, status: DKTools.IO.ERROR_OPTIONS_IS_NOT_AVAILABLE };
        }

        if (!object.sync && !DKTools.Utils.isFunction(object.onSuccess)) {
            return { data: null, status: DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};
        }

        const absolutePath = this.getAbsolutePath();
        const processData = (data) => {
            if (data) {
                if (object.decompress) {
                    data = LZString.decompressFromBase64(data);
                }

                if (object.parse instanceof Object) {
                    data = JSON.parse(data, object.parse.reviver);
                } else if (object.parse) {
                    data = JSON.parse(data);
                }
            }

            return { data, status: DKTools.IO.OK };
        };

        if (DKTools.IO.isLocalMode()) {
            if (!this.exists()) {
                return { data: null, status: DKTools.IO.ERROR_PATH_DOES_NOT_EXIST };
            }

            const fs = DKTools.IO.fs;
            const options = object.options || { encoding: 'utf8' };

            if (object.sync) {
                const data = fs.readFileSync(absolutePath, options);

                return processData(data);
            } else {
                fs.readFile(absolutePath, options, (error, data) => {
                    if (error) {
                        this.__processError(error, object.onError);
                    } else {
                        object.onSuccess(processData(data), this);
                    }
                });
            }
        } else {
            const xhr = new XMLHttpRequest();

            xhr.open('GET', absolutePath, !object.sync);
            xhr.overrideMimeType(object.mimeType || 'application/json');

            xhr.onload = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        object.onSuccess(processData(xhr.responseText), this);
                    } else {
                        this.__processError(xhr, object.onError);
                    }
                }
            };

            xhr.onerror = () => {
                this.__processError(xhr, object.onError);
            };

            try {
                xhr.send();
            } catch (e) { // eslint-disable-line no-empty
            }
        }

        return { data: null, status: DKTools.IO.WAIT_FOR_ASYNC_OPERATION };
    }

    /**
     * Loads and returns a data
     * Asynchronous version of DKTools.IO.File.prototype.load
     * Promise resolves a loaded data or null
     *
     * Promise resolves an object with 2 properties:
     * status - Result of an operation
     * data - Loaded data (only if the status is equal to DKTools.IO.OK)
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @version 6.1.0
     * @since 4.0.0
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.readFile
     * @param {Boolean} [object.decompress] - Use LZString.decompressFromBase64 for a data
     * @param {Boolean | Object} [object.parse] - Use JSON.parse for a data
     *
     * @param {Function} [object.parse.reviver] - A function that transforms the results
     *
     * @see DKTools.IO.File.prototype.load
     *
     * @returns {Promise} Loaded data
     */
    async loadAsync(object = {}) {
        return new Promise((resolve, reject) => {
            const result = this.load({
                ...object,
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (result.status !== DKTools.IO.WAIT_FOR_ASYNC_OPERATION) {
                resolve(result);
            }
        });
    }

    /**
     * Loads the audio file
     *
     * @since 3.0.0
     * @returns {WebAudio | null} Audio file or null
     */
    loadAudio() {
        if (!this.isAudio() || DKTools.IO.isLocalMode() && !this.exists()) {
            return null;
        }

        return DKTools.Utils.WebAudio.load(this.getDirectoryName(), this.getName());
    }

    /**
     * Loads the audio file
     * Asynchronous version of DKTools.IO.File.prototype.loadAudio
     * Promise resolves a loaded audio file or null
     *
     * @since 5.0.0
     * @async
     *
     * @see DKTools.IO.File.prototype.loadAudio
     *
     * @returns {Promise} Loaded audio file or null
     */
    async loadAudioAsync() {
        return DKTools.Utils.WebAudio.loadAsync(this.loadAudio());
    }

    /**
     * Loads the JSON data
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Loaded data (only if the status is equal to DKTools.IO.OK)
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @version 6.1.0
     * @since 3.0.0
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.readFile
     * @param {String | Object} [object.options] - Options for FileSystem.readFile or FileSystem.readFileSync
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     * @param {Boolean} [object.decompress] - Use LZString.decompressFromBase64 for a data
     * @param {Boolean | Object} [object.parse] - Use JSON.parse for a data
     *
     * @param {Function} [object.parse.reviver] - A function that transforms the results
     *
     * @see DKTools.IO.File.prototype.load
     *
     * @returns {{ data: Object, status: Number }} Loaded data
     */
    loadJson(object = {}) {
        object = object || {};

        if (!object.parse) {
            object.parse = true;
        }

        return this.load(object);
    }

    /**
     * Loads the JSON data
     * Asynchronous version of DKTools.IO.File.prototype.loadJson
     *
     * Promise resolves an object with 2 properties:
     * status - Result of an operation
     * data - Loaded data (only if the status is equal to DKTools.IO.OK)
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @version 6.1.0
     * @since 4.0.0
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.readFile or FileSystem.readFileSync
     * @param {Boolean} [object.decompress] - Use LZString.decompressFromBase64 for a data
     * @param {Boolean | Object} [object.parse] - Use JSON.parse for a data
     *
     * @param {Function} [object.parse.reviver] - A function that transforms the results
     *
     * @see DKTools.IO.File.prototype.loadJson
     *
     * @returns {Promise} Loaded data
     */
    async loadJsonAsync(object = {}) {
        return new Promise((resolve, reject) => {
            const result = this.loadJson({
                ...object,
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (result.status !== DKTools.IO.WAIT_FOR_ASYNC_OPERATION) {
                resolve(result);
            }
        });
    }

    /**
     * Loads and returns a bitmap
     *
     * @since 3.0.0
     *
     * @param {Function | Object} object - Function of processing after loading a bitmap or object with parameters
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     *
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     *
     * @see DKTools.IO.File.prototype.isImage
     * @see DKTools.IO.File.prototype.exists
     * @see DKTools.Utils.Bitmap.load
     *
     * @returns {Bitmap | null} Loaded bitmap or null
     */
    loadBitmap(object, hue, smooth) {
        if (object instanceof Object) {
            return this.loadBitmap(object.listener, object.hue, object.smooth);
        }

        if (!this.isImage() || DKTools.IO.isLocalMode() && !this.exists()) {
            return null;
        }

        return DKTools.Utils.Bitmap.load({
            folder: this.getPath(),
            filename: this.getName(),
            listener: object,
            hue,
            smooth
        });
    }

    /**
     * Loads and returns a bitmap
     * Asynchronous version of DKTools.IO.File.prototype.loadBitmap
     * Promise resolves a loaded bitmap or null
     *
     * @version 5.0.0
     * @since 4.0.0
     * @async
     *
     * @param {Function | Object} object - Function of processing after loading a bitmap or object with parameters
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     *
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     *
     * @see DKTools.IO.File.prototype.loadBitmap
     * @see DKTools.Utils.Bitmap.loadAsync
     *
     * @returns {Promise} Loaded bitmap or null
     */
    async loadBitmapAsync(object, hue, smooth) {
        return DKTools.Utils.Bitmap.loadAsync(this.loadBitmap(object, hue, smooth));
    }

    // R methods

    /**
     * Removes the file
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @version 6.1.0
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.unlink
     * @param {String | Object} [object.options] - Options for FileSystem.unlink or FileSystem.unlinkSync
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @see FileSystem.unlink
     * @see FileSystem.unlinkSync
     *
     * @returns {Number} Code of the result of an operation
     */
    remove(object = {}) {
        if (!DKTools.IO.isLocalMode()) {
            return DKTools.IO.ERROR_NOT_LOCAL_MODE;
        }

        if (!this.exists()) {
            return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;
        }

        const fs = DKTools.IO.fs;
        const absolutePath = this.getAbsolutePath();

        if (object.sync) {
            fs.unlinkSync(absolutePath);

            return DKTools.IO.OK;
        } else {
            fs.unlink(absolutePath, (error) => {
                if (error) {
                    this.__processError(error, object.onError);
                } else if (DKTools.Utils.isFunction(object.onSuccess)) {
                    object.onSuccess(DKTools.IO.OK, this);
                }
            });

            return DKTools.IO.WAIT_FOR_ASYNC_OPERATION;
        }
    }

    /**
     * Removes the file
     * Asynchronous version of DKTools.IO.File.prototype.remove
     * Promise resolves a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @version 6.1.0
     * @since 4.0.0
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.unlink
     *
     * @see DKTools.IO.File.prototype.remove
     *
     * @returns {Promise} Code of the result of an operation
     */
    async removeAsync(object = {}) {
        return new Promise((resolve, reject) => {
            const status = this.remove({
                ...object,
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (status !== DKTools.IO.WAIT_FOR_ASYNC_OPERATION) {
                resolve(status);
            }
        });
    }

    /**
     * Loads, reserves and returns a bitmap
     *
     * @since 3.0.0
     *
     * @param {Function | Object} object - Function of processing after loading a bitmap or object with parameters
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     * @param {Number} [reservationId] - Reservation ID (if object is String)
     *
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     * @param {Number} [object.reservationId] - Reservation ID
     *
     * @see DKTools.IO.File.prototype.isImage
     * @see DKTools.IO.File.prototype.exists
     * @see DKTools.Utils.Bitmap.reserve
     *
     * @returns {Bitmap | null} Loaded bitmap or null
     */
    reserveBitmap(object, hue, smooth, reservationId) {
        if (object instanceof Object) {
            return this.reserveBitmap(object.listener, object.hue, object.smooth, object.reservationId);
        }

        if (!this.isImage() || !this.exists()) {
            return null;
        }

        return DKTools.Utils.Bitmap.reserve({
            folder: this.getPath(),
            filename: this.getName(),
            listener: object,
            hue,
            smooth,
            reservationId
        });
    }

    /**
     * Loads, reserves and returns a bitmap
     * Asynchronous version of DKTools.IO.File.prototype.reserveBitmap
     * Promise resolves a loaded bitmap or null
     *
     * @since 4.0.0
     * @async
     *
     * @param {Function | Object} object - Function of processing after loading a bitmap or object with parameters
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     * @param {Number} [reservationId] - Reservation ID (if object is String)
     *
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     * @param {Number} [object.reservationId] - Reservation ID
     *
     * @see DKTools.IO.File.prototype.isImage
     * @see DKTools.IO.File.prototype.exists
     * @see DKTools.IO.File.prototype.reserveBitmap
     * @see DKTools.Utils.Bitmap.reserveAsync
     *
     * @returns {Promise} Loaded bitmap or null
     */
    async reserveBitmapAsync(object, hue, smooth, reservationId) {
        if (object instanceof Object) {
            return this.reserveBitmapAsync(object.listener, object.hue, object.smooth, object.reservationId);
        }

        if (!this.isImage() || !this.exists()) {
            return null;
        }

        return DKTools.Utils.Bitmap.reserveAsync({
            folder: this.getPath(),
            filename: this.getName(),
            listener: object,
            hue,
            smooth,
            reservationId
        });
    }

    // S methods

    /**
     * Saves the data
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @version 6.1.0
     *
     * @param {*} data - Data to save
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {Boolean | Object} [object.stringify] - Use JSON.stringify for the data
     * @param {Boolean} [object.compress] - Use LZString.compressToBase64 for the data
     * @param {Boolean} [object.createDirectory] - Create a directory for the file
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.writeFile
     * @param {String | Object} [object.options] - Options for FileSystem.writeFile or FileSystem.writeFileSync
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @param {Function | Array} [object.stringify.replacer] - A function that transforms the results
     * @param {Number | String} [object.stringify.space] - Insert white space into the output JSON string for readability purposes
     *
     * @see FileSystem.writeFile
     * @see FileSystem.writeFileSync
     * @see JSON.stringify
     *
     * @returns {Number} Code of the result of an operation
     */
    save(data, object = {}) {
        if (!DKTools.IO.isLocalMode()) {
            return DKTools.IO.ERROR_NOT_LOCAL_MODE;
        }

        const fs = DKTools.IO.fs;
        const absolutePath = this.getAbsolutePath();
        const directory = this.getDirectory();

        object = object || {};

        if (object.createDirectory && !directory.exists()) {
            directory.create();
        }

        if (!directory.exists()) {
            return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;
        }

        if (object.stringify instanceof Object) {
            data = JSON.stringify(data, object.stringify.replacer, object.stringify.space);
        } else if (object.stringify) {
            data = JSON.stringify(data);
        }

        if (object.compress) {
            data = LZString.compressToBase64(data);
        }

        if (object.sync) {
            fs.writeFileSync(absolutePath, data, object.options);

            return DKTools.IO.OK;
        } else {
            fs.writeFile(absolutePath, data, object.options, (error) => {
                if (error) {
                    this.__processError(error, object.onError);
                } else if (DKTools.Utils.isFunction(object.onSuccess)) {
                    object.onSuccess(DKTools.IO.OK, this);
                }
            });

            return DKTools.IO.WAIT_FOR_ASYNC_OPERATION;
        }
    }

    /**
     * Saves the data
     * Asynchronous version of DKTools.IO.File.prototype.save
     * Promise resolves a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @version 6.1.0
     * @since 4.0.0
     * @async
     *
     * @param {*} data - Data to save
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {Boolean} [object.stringify] - Use JSON.stringify for the data
     * @param {Boolean} [object.compress] - Use LZString.compressToBase64 for the data
     * @param {Boolean} [object.createDirectory] - Create a directory for the file
     * @param {String | Object} [object.options] - Options for FileSystem.writeFile
     *
     * @param {Function | Array} [object.stringify.replacer] - A function that transforms the results
     * @param {Number | String} [object.stringify.space] - Insert white space into the output JSON string for readability purposes
     *
     * @see DKTools.IO.File.prototype.save
     *
     * @returns {Promise} Code of the result of an operation
     */
    async saveAsync(data, object = {}) {
        return new Promise((resolve, reject) => {
            const status = this.save(data, {
                ...object,
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (status !== DKTools.IO.WAIT_FOR_ASYNC_OPERATION) {
                resolve(status);
            }
        });
    }

    /**
     * Saves the JSON data
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @since 6.1.0
     *
     * @param {Array | Object} data - Data to save
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {Object} [object.stringify] - Use JSON.stringify for the data
     * @param {Boolean} [object.compress] - Use LZString.compressToBase64 for the data
     * @param {Boolean} [object.createDirectory] - Create a directory for the file
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.writeFile
     * @param {String | Object} [object.options] - Options for FileSystem.writeFile
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @param {Function | Array} [object.stringify.replacer] - A function that transforms the results
     * @param {Number | String} [object.stringify.space] - Insert white space into the output JSON string for readability purposes
     *
     * @see DKTools.IO.File.prototype.save
     *
     * @returns {Number} Code of the result of an operation
     */
    saveJson(data, object = {}) {
        object = object || {};

        if (!object.stringify) {
            object.stringify = { space: '\t' };
        }

        return this.save(data, object);
    }

    /**
     * Saves the JSON data
     * Asynchronous version of DKTools.IO.File.prototype.saveJson
     * Promise resolves a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @since 6.1.0
     * @async
     *
     * @param {Array | Object} data - Data to save
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {Object} [object.stringify] - Use JSON.stringify for the data
     * @param {Boolean} [object.compress] - Use LZString.compressToBase64 for the data
     * @param {Boolean} [object.createDirectory] - Create a directory for the file
     * @param {String | Object} [object.options] - Options for FileSystem.writeFile
     *
     * @param {Function | Array} [object.stringify.replacer] - A function that transforms the results
     * @param {Number | String} [object.stringify.space] - Insert white space into the output JSON string for readability purposes
     *
     * @see DKTools.IO.File.prototype.saveJson
     *
     * @returns {Promise} Code of the result of an operation
     */
    async saveJsonAsync(data, object = {}) {
        return new Promise((resolve, reject) => {
            const status = this.saveJson(data, {
                ...object,
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (status !== DKTools.IO.WAIT_FOR_ASYNC_OPERATION) {
                resolve(status);
            }
        });
    }

};




