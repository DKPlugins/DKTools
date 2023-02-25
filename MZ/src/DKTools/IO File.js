//===========================================================================
// DKTools.IO.File
//===========================================================================

/**
 * File class
 * @class
 * @extends DKTools.IO.Entity
 * @memberof DKTools.IO
 */
DKTools.IO.File = class extends DKTools.IO.Entity {

    // initialize methods

    /**
     * Initializes the file
     * @override
     * @param {String} fullPath - Path to file
     */
    initialize(fullPath = '') {
        super.initialize(fullPath);
        this._detectExtension();
    }

    // C methods

    /**
     * Copies file
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     *
     * @param {String} destination - Destination filename of the copy operation
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.copyFile
     * @param {Boolean | Object} [object.createDirectory] - Create a directory for the file
     * @param {Number} [object.flags] - Modifiers for copy operation
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @param {Object} [object.createDirectory.options] - Options for FileSystem.mkdir or FileSystem.mkdirSync
     *
     * @param {Boolean} [object.createDirectory.options.recursive] - Parent folders should be created
     * @param {Number | String} [object.createDirectory.options.mode] - Directory permission
     *
     * @return {Number} Code of the result of an operation
     */
    copy(destination, object = {}) {
        if (!object) {
            return DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE;
        }

        if (!Utils.isNwjs()) {
            return DKTools.IO.ERROR_NOT_LOCAL_MODE;
        }

        if (!this.exists()) {
            return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;
        }

        const fs = DKTools.IO.fs;
        const absolutePath = this.getAbsolutePath();
        const file = new DKTools.IO.File(destination);
        const directory = file.getDirectory();

        if (object.createDirectory && !directory.exists()) {
            const options = (object.createDirectory instanceof Object ? object.createDirectory : null);
            const status = directory.create({ sync: true, options });

            if (status !== DKTools.IO.OK) {
                this.__processError(new Error(`Failed to create directory: ${directory.getFullPath()}`), object.onError);
            }
        }

        if (!directory.exists()) {
            return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;
        }

        if (object.sync) {
            try {
                fs.copyFileSync(absolutePath, destination, object.flags);

                return DKTools.IO.OK;
            } catch (error) {
                this.__processError(error, object.onError);
            }
        } else {
            fs.copyFile(absolutePath, destination, object.flags, (error) => {
                if (error) {
                    this.__processError(error, object.onError);
                } else if (DKTools.Utils.isFunction(object.onSuccess)) {
                    object.onSuccess(DKTools.IO.OK, this);
                }
            });

            return DKTools.IO.EXPECT_CALLBACK;
        }
    }

    /**
     * Copies file
     * Asynchronous version of DKTools.IO.File.prototype.copy
     * Promise resolves a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     *
     * @param {String} destination - Destination filename of the copy operation
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {Boolean | Object} [object.createDirectory] - Create a directory for the file
     * @param {Number} [object.flags] - Modifiers for copy operation
     *
     * @param {Object} [object.createDirectory.options] - Options for FileSystem.mkdir or FileSystem.mkdirSync
     *
     * @param {Boolean} [object.createDirectory.options.recursive] - Parent folders should be created
     * @param {Number | String} [object.createDirectory.options.mode] - Directory permission
     *
     * @return {Promise<Number>} Code of the result of an operation
     */
    async copyAsync(destination, object = {}) {
        return new Promise((resolve, reject) => {
            const status = this.copy(destination, {
                ...object,
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (status !== DKTools.IO.EXPECT_CALLBACK) {
                resolve(status);
            }
        });
    }

    // D methods

    /**
     * Detects the extension
     *
     * @private
     */
    _detectExtension() {
        let newExtension = this._extension;

        if (this.isAudio()) {
            newExtension = AudioManager.audioFileExt();
        } else if (this.isImage()) {
            newExtension = ImageManager.imageFileExt();
        } else if (this.isVideo()) {
            newExtension = Video.videoFileExt();
        }

        this._extension = newExtension;
    }

    // G methods

    /**
     * Returns the directory of the file
     *
     * @return {DKTools.IO.Directory} Directory of the file
     */
    getDirectory() {
        return new DKTools.IO.Directory(this._path);
    }

    /**
     * Returns the directory name
     * @return {String} Directory name
     */
    getDirectoryName() {
        return this.getDirectory().getName();
    }

    /**
     * Returns the extension of the file
     * @version 1.2.0
     * @override
     * @return {String} Extension of the file
     */
    getExtension() {
        let extension = super.getExtension();

        if (Utils.hasEncryptedAudio() && extension === AudioManager.audioFileExt()
            || Utils.hasEncryptedImages() && extension === ImageManager.imageFileExt()) {
                extension += Utils.getEncryptedFileExtension();
        }

        return extension;
    }

    // I methods

    /**
     * Returns true if an extension of the file is equal to .ogg or .ogg_
     * @return {Boolean} Extension of the file is equal to .ogg or .ogg_
     */
    isAudio() {
        return this._extension === '.ogg' || this._extension === '.ogg_';
    }

    /**
     * Returns true if an extension of the file is equal to .json
     * @return {Boolean} Extension of the file is equal to .json
     */
    isJson() {
        return this._extension === '.json';
    }

    /**
     * Returns true if an extension of the file is equal to .dds
     * @since 1.1.0
     * @return {Boolean} Extension of the file is equal to .dds
     */
    isTexture() {
        return this._extension === '.dds';
    }

    /**
     * Returns true if an extension of the file is equal to .txt
     * @return {Boolean} Extension of the file is equal to .txt
     */
    isTxt() {
        return this._extension === '.txt';
    }

    /**
     * Returns true if an extension of the file is equal to .png, .png_ or .webp
     * @return {Boolean} Extension of the file is equal to .png, .png_ or .webp
     */
    isImage() {
        return this._extension === '.png'
            || this._extension === '.png_'
            || this._extension === '.webp';
    }

    /**
     * Returns true if an extension of the file is equal to .mp4 or .webm
     * @return {Boolean} Extension of the file is equal to .mp4 or .webm
     */
    isVideo() {
        return this._extension === '.webm' || this._extension === '.mp4';
    }

    /**
     * Returns true if an extension of the file is equal to .rmmzsave
     * @return {Boolean} Extension of the file is equal to .rmmzsave
     */
    isSave() {
        return this._extension === '.rmmzsave';
    }

    // L methods

    /**
     * Loads and returns a data
     *
     * Returns an object with 3 properties:
     * status - Result of an operation
     * data - Loaded data
     * error - Error of an operation
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     * DKTools.IO.ERROR_DECOMPRESSING_DATA
     * DKTools.IO.ERROR_PARSING_DATA
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.readFile
     * @param {String | Object} [object.options] - Options for FileSystem.readFile or FileSystem.readFileSync
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     * @param {Boolean} [object.decompress] - Use LZString.decompressFromBase64 for a data
     * @param {Boolean | Object} [object.parse] - Use JSON.parse for a data
     * @param {String} [object.mimeType] - Mime type (only for XMLHttpRequest)
     *
     * @param {String} [object.options.encoding] - Encoding
     * @param {String} [object.options.flag] - File system flag
     *
     * @param {Function} [object.parse.reviver] - A function that transforms the results
     *
     * @example
     * const file = new DKTools.IO.File('data/System.json');
     * const result = file.load({ sync: true, parse: true });
     *
     * if (result.status === DKTools.IO.OK) {
     *     console.log(result.data); // data loaded synchronously
     * }
     *
     * @example
     * const file = new DKTools.IO.File('data/System.json');
     *
     * file.load({
     *      sync: false,
     *      parse: true,
     *      onSuccess: function(result, file) {
     *          if (result.status === DKTools.IO.OK) {
     *              console.log(result.data); // data loaded asynchronously
     *          }
     *      }
     * });
     *
     * @return {{ data: String | Buffer | Object | null, status: Number, error: Error | undefined }} Loaded data
     */
    load(object) {
        if (!object) {
            return { data: null, status: DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE };
        }

        const absolutePath = this.getAbsolutePath();
        const processData = (data) => {
            if (data) {
                if (object.decompress) {
                    try {
                        data = pako.inflate(data, { to: 'string' });
                    } catch (error) {
                        return { data: null, status: DKTools.IO.ERROR_DECOMPRESSING_DATA, error };
                    }
                }

                if (object.parse) {
                    try {
                        data = JSON.parse(data, object.parse.reviver);
                    } catch (error) {
                        return { data: null, status: DKTools.IO.ERROR_PARSING_DATA, error };
                    }
                }
            }

            return { data, status: DKTools.IO.OK };
        };

        if (Utils.isNwjs()) {
            if (!this.exists()) {
                return { data: null, status: DKTools.IO.ERROR_PATH_DOES_NOT_EXIST };
            }

            const fs = DKTools.IO.fs;
            const options = object.options || { encoding: 'utf8' };

            if (object.sync) {
                try {
                    const data = fs.readFileSync(absolutePath, options);

                    return processData(data);
                } catch (error) {
                    this.__processError(error, object.onError);
                }
            } else {
                if (!DKTools.Utils.isFunction(object.onSuccess)) {
                    return { data: null, status: DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE };
                }

                fs.readFile(absolutePath, options, (error, data) => {
                    if (error) {
                        this.__processError(error, object.onError);
                    } else {
                        object.onSuccess(processData(data), this);
                    }
                });
            }
        } else {
            if (!DKTools.Utils.isFunction(object.onSuccess)) {
                return { data: null, status: DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE };
            }

            if (DKTools.IO.mode === DKTools.IO.MODE_NWJS_STAMP && this.getFullName() !== 'Stamp.json' && !this.exists()) {
                return { data: null, status: DKTools.IO.ERROR_PATH_DOES_NOT_EXIST };
            }

            const xhr = new XMLHttpRequest();

            xhr.open('GET', absolutePath, !object.sync);
            xhr.overrideMimeType(object.mimeType || 'application/json');

            xhr.onload = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 0 || xhr.status === 200) {
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

        return { data: null, status: DKTools.IO.EXPECT_CALLBACK };
    }

    /**
     * Loads and returns a data
     * Asynchronous version of DKTools.IO.File.prototype.load
     * Promise resolves a loaded data or null
     *
     * Promise resolves an object with 3 properties:
     * status - Result of an operation
     * data - Loaded data
     * error - Error of an operation
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_DECOMPRESSING_DATA
     * DKTools.IO.ERROR_PARSING_DATA
     *
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.readFile
     * @param {Boolean} [object.decompress] - Use LZString.decompressFromBase64 for a data
     * @param {Boolean | Object} [object.parse] - Use JSON.parse for a data
     *
     * @param {String} [object.options.encoding] - Encoding
     * @param {String} [object.options.flag] - File system flag
     *
     * @param {Function} [object.parse.reviver] - A function that transforms the results
     *
     * @return {Promise<{ status: Number, data: * | null }>} Loaded data
     */
    async loadAsync(object = {}) {
        return new Promise((resolve, reject) => {
            const result = this.load({
                ...object,
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (result.status !== DKTools.IO.EXPECT_CALLBACK) {
                resolve(result);
            }
        });
    }

    /**
     * Loads an audio file and returns a WebAudio
     * @version 1.1.4
     * @return {WebAudio | null} Audio file or null
     */
    loadAudio() {
        if (!this.isAudio()) {
            return null;
        }

        if ((Utils.isNwjs() || DKTools.IO.mode === DKTools.IO.MODE_NWJS_STAMP) && !this.exists()) {
            return null;
        }

        return DKTools.Utils.WebAudio.load(this.getDirectoryName(), this.getName());
    }

    /**
     * Loads an audio file and returns a WebAudio
     * Asynchronous version of DKTools.IO.File.prototype.loadAudio
     * Promise resolves a loaded audio file or null
     * @async
     * @return {Promise<WebAudio | null>} Loaded audio file or null
     */
    async loadAudioAsync() {
        return DKTools.Utils.WebAudio.loadAsync(this.loadAudio());
    }

    /**
     * Loads the JSON data
     *
     * Returns an object with 3 properties:
     * status - Result of an operation
     * data - Loaded data
     * error - Error of an operation
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     * DKTools.IO.ERROR_DECOMPRESSING_DATA
     * DKTools.IO.ERROR_PARSING_DATA
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
     * @param {String} [object.options.encoding] - Encoding
     * @param {String} [object.options.flag] - File system flag
     *
     * @param {Function} [object.parse.reviver] - A function that transforms the results
     *
     * @example
     * const file = new DKTools.IO.File('data/System.json');
     * const result = file.loadJson({ sync: true });
     *
     * if (result.status === DKTools.IO.OK) {
     *     console.log(result.data); // data loaded synchronously
     * }
     *
     * @example
     * const file = new DKTools.IO.File('data/System.json');
     *
     * file.loadJson({
     *      sync: false,
     *      onSuccess: function(result, file) {
     *          if (result.status === DKTools.IO.OK) {
     *              console.log(result.data); // data loaded asynchronously
     *          }
     *      }
     * });
     *
     * @return {{ data: Object | null, status: Number, error: Error | undefined }} Loaded data
     */
    loadJson(object) {
        if (!object) {
            return { data: null, status: DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE };
        }

        if (!object.parse) {
            object.parse = true;
        }

        return this.load(object);
    }

    /**
     * Loads the JSON data
     * Asynchronous version of DKTools.IO.File.prototype.loadJson
     *
     * Promise resolves an object with 3 properties:
     * status - Result of an operation
     * data - Loaded data
     * error - Error of an operation
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_DECOMPRESSING_DATA
     * DKTools.IO.ERROR_PARSING_DATA
     *
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.readFile or FileSystem.readFileSync
     * @param {Boolean} [object.decompress] - Use LZString.decompressFromBase64 for a data
     * @param {Boolean | Object} [object.parse] - Use JSON.parse for a data
     *
     * @param {String} [object.options.encoding] - Encoding
     * @param {String} [object.options.flag] - File system flag
     *
     * @param {Function} [object.parse.reviver] - A function that transforms the results
     *
     * @example
     * const file = new DKTools.IO.File('data/System.json');
     * const data = await file.loadJsonAsync();
     *
     * @return {Promise<{ status: Number, data: * | null, error: Error | undefined }>} Loaded data
     */
    async loadJsonAsync(object = {}) {
        return new Promise((resolve, reject) => {
            const result = this.loadJson({
                ...object,
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (result.status !== DKTools.IO.EXPECT_CALLBACK) {
                resolve(result);
            }
        });
    }

    /**
     * Loads and returns a bitmap
     *
     * @param {Function | Object} object - Function of processing after loading a bitmap or object with parameters
     *
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     *
     * @example
     * const file = new DKTools.IO.File('img/system/Window.png');
     * const bitmap = file.loadBitmap();
     *
     * @return {Bitmap | null} Loaded bitmap or null
     */
    loadBitmap(object) {
        if (object instanceof Object) {
            return this.loadBitmap(object.listener);
        }

        if (!this.isImage()) {
            return null;
        }

        if ((Utils.isNwjs() || DKTools.IO.mode === DKTools.IO.MODE_NWJS_STAMP) && !this.exists()) {
            return null;
        }

        return DKTools.Utils.Bitmap.load({
            folder: this.getPath(),
            filename: this.getName(),
            listener: object
        });
    }

    /**
     * Loads and returns a bitmap
     * Asynchronous version of DKTools.IO.File.prototype.loadBitmap
     * Promise resolves a loaded bitmap or null
     * @async
     * @param {Function | Object} object - Function of processing after loading a bitmap or object with parameters
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     *
     * @example
     * const file = new DKTools.IO.File('img/system/Window.png');
     * const bitmap = await file.loadBitmapAsync();
     *
     * @return {Promise<Bitmap>} Loaded bitmap or null
     */
    async loadBitmapAsync(object) {
        return DKTools.Utils.Bitmap.loadAsync(this.loadBitmap(object));
    }

    // R methods

    /**
     * Removes the file
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.unlink
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @return {Number} Code of the result of an operation
     */
    remove(object = {}) {
        object = object || {};

        if (!Utils.isNwjs()) {
            return DKTools.IO.ERROR_NOT_LOCAL_MODE;
        }

        if (!this.exists()) {
            return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;
        }

        const fs = DKTools.IO.fs;
        const absolutePath = this.getAbsolutePath();

        if (object.sync) {
            try {
                fs.unlinkSync(absolutePath);

                return DKTools.IO.OK;
            } catch (error) {
                this.__processError(error, object.onError);
            }
        } else {
            fs.unlink(absolutePath, (error) => {
                if (error) {
                    this.__processError(error, object.onError);
                } else if (DKTools.Utils.isFunction(object.onSuccess)) {
                    object.onSuccess(DKTools.IO.OK, this);
                }
            });

            return DKTools.IO.EXPECT_CALLBACK;
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
     * @async
     * @return {Promise<Number>} Code of the result of an operation
     */
    async removeAsync() {
        return new Promise((resolve, reject) => {
            const status = this.remove({
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (status !== DKTools.IO.EXPECT_CALLBACK) {
                resolve(status);
            }
        });
    }

    // S methods

    /**
     * Saves the data
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @param {*} data - Data to save
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {Boolean | Object} [object.stringify] - Use JSON.stringify for the data
     * @param {Boolean} [object.compress] - Use LZString.compressToBase64 for the data
     * @param {Boolean | Object} [object.createDirectory] - Create a directory for the file
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.writeFile
     * @param {String | Object} [object.options] - Options for FileSystem.writeFile or FileSystem.writeFileSync
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @param {Function | Array} [object.stringify.replacer] - A function that transforms the results
     * @param {Number | String} [object.stringify.space] - Insert white space into the output JSON string for readability purposes
     *
     * @param {Object} [object.createDirectory.options] - Options for FileSystem.mkdir or FileSystem.mkdirSync
     *
     * @param {Boolean} [object.createDirectory.options.recursive] - Parent folders should be created
     * @param {Number | String} [object.createDirectory.options.mode] - Directory permission
     *
     * @example
     * const file = new DKTools.IO.File('test.txt');
     * const status = file.save('Hello world!', { sync: true });
     *
     * if (status === DKTools.IO.OK) {
     *     console.log('saved!'); // data saved synchronously
     * }
     *
     * @example
     * const file = new DKTools.IO.File('test.txt');
     *
     * file.save('Hello world!', {
     *      sync: false,
     *      onSuccess: function(status, file) {
     *          if (status === DKTools.IO.OK) {
     *              console.log('saved!'); // data saved asynchronously
     *          }
     *      }
     * });
     *
     * @return {Number} Code of the result of an operation
     */
    save(data, object = {}) {
        if (!Utils.isNwjs()) {
            return DKTools.IO.ERROR_NOT_LOCAL_MODE;
        }

        const fs = DKTools.IO.fs;
        const absolutePath = this.getAbsolutePath();
        const directory = this.getDirectory();

        object = object || {};

        if (object.createDirectory && !directory.exists()) {
            const options = (object.createDirectory instanceof Object ? object.createDirectory : null);
            const status = directory.create({ sync: true, options });

            if (status !== DKTools.IO.OK) {
                this.__processError(new Error(`Failed to create directory: ${directory.getFullPath()}`), object.onError);
            }
        }

        if (!directory.exists()) {
            return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;
        }

        if (object.stringify) {
            data = JSON.stringify(data, object.stringify.replacer, object.stringify.space);
        }

        if (object.compress) {
            data = pako.deflate(data, { to: 'string', level: 1 });
        }

        if (object.sync) {
            try {
                fs.writeFileSync(absolutePath, data, object.options);

                return DKTools.IO.OK;
            } catch (error) {
                this.__processError(error, object.onError);
            }
        } else {
            fs.writeFile(absolutePath, data, object.options, (error) => {
                if (error) {
                    this.__processError(error, object.onError);
                } else if (DKTools.Utils.isFunction(object.onSuccess)) {
                    object.onSuccess(DKTools.IO.OK, this);
                }
            });

            return DKTools.IO.EXPECT_CALLBACK;
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
     * @return {Promise<Number>} Code of the result of an operation
     */
    async saveAsync(data, object = {}) {
        return new Promise((resolve, reject) => {
            const status = this.save(data, {
                ...object,
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (status !== DKTools.IO.EXPECT_CALLBACK) {
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
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
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
     * @example
     * const data = { message: 'Hello world' };
     * const file = new DKTools.IO.File('test.json');
     * const status = file.saveJson(data, { sync: true });
     *
     * if (status === DKTools.IO.OK) {
     *     console.log('saved!'); // data saved synchronously
     * }
     *
     * @example
     * const data = { message: 'Hello world' };
     * const file = new DKTools.IO.File('test.json');
     *
     * file.saveJson(data, {
     *      sync: false,
     *      onSuccess: function(status, file) {
     *          if (status === DKTools.IO.OK) {
     *              console.log('saved!'); // data saved asynchronously
     *          }
     *      }
     * });
     *
     * @return {Number} Code of the result of an operation
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
     * @return {Promise<Number>} Code of the result of an operation
     */
    async saveJsonAsync(data, object = {}) {
        return new Promise((resolve, reject) => {
            const status = this.saveJson(data, {
                ...object,
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (status !== DKTools.IO.EXPECT_CALLBACK) {
                resolve(status);
            }
        });
    }

};




