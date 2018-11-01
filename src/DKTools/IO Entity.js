//===========================================================================
// DKTools.IO.Entity
//===========================================================================

/**
 * Abstract class of entity (file or directory)
 *
 * @class DKTools.IO.Entity
 * @memberof DKTools.IO
 *
 * @example
 * var file = new DKTools.IO.File('/index.html');
 *
 * @example
 * var directory = new DKTools.IO.Directory('img/system/');
 */
DKTools.IO.Entity = class {

    constructor() {
        this.initialize.apply(this, arguments);
    }

    // initialize

    /**
     * Initializes the entity
     *
     * @version 5.0.0
     * @since 3.0.0
     *
     * @param {String} fullPath - Path to entity
     */
    initialize(fullPath) {
        const data = DKTools.IO.parsePath(fullPath);

        /**
         * @private
         * @readonly
         * @type {String}
         */
        this._path = DKTools.IO.normalizePath(data.dir + '/');

        /**
         * @private
         * @readonly
         * @type {String}
         */
        this._name = data.name;

        /**
         * @private
         * @readonly
         * @type {String}
         */
        this._initialExtension = data.ext;

        /**
         * @private
         * @readonly
         * @type {String}
         */
        this._extension = data.ext;
    }

    // E methods

    /**
     * Returns true if the entity exists
     *
     * @version 3.0.0
     *
     * @returns {Boolean} Entity exists
     */
    exists() {
        return DKTools.IO.absolutePathExists(this.getAbsolutePath());
    }

    // G methods

    /**
     * Returns the path
     *
     * @since 3.0.0
     *
     * @returns {String} Path
     */
    getPath() {
        return this._path;
    }

    /**
     * Returns the name of the entity without an extension
     *
     * @since 3.0.0
     *
     * @returns {String} Name of the entity without an extension
     */
    getName() {
        return this._name;
    }

    /**
     * Returns the extension of the entity
     *
     * @since 3.0.0
     *
     * @returns {String} Extension of the entity
     */
    getExtension() {
        return this._extension;
    }

    /**
     * Returns the full path
     *
     * @version 3.0.0
     *
     * @returns {String} Full Path
     */
    getFullPath() {
        return DKTools.IO.joinPath(this.getPath(), '/', this.getFullName());
    }

    /**
     * Returns the full name
     *
     * @since 3.0.0
     *
     * @returns {String} Full name
     */
    getFullName() {
        return this._name + this._extension;
    }

    /**
     * Returns the absolute path
     *
     * @since 3.0.0
     *
     * @returns {String} Absolute path
     */
    getAbsolutePath() {
        return DKTools.IO.getAbsolutePath(this.getFullPath());
    }

    /**
     * Returns a stats
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Loaded data (only if the status is equal to DKTools.IO.OK)
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     * DKTools.IO.ERROR_OPTIONS_IS_NOT_AVAILABLE
     *
     * @version 6.1.0
     * @since 2.0.0
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of stat
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @see FileSystem.stat
     * @see FileSystem.statSync
     *
     * @returns {{ data: Object, status: Number }} Loaded stats
     */
    getStats(object) {
        if (!object) {
            return { data: null, status: DKTools.IO.ERROR_OPTIONS_IS_NOT_AVAILABLE };
        }

        if (!DKTools.IO.isLocalMode()) {
            return { data: null, status: DKTools.IO.ERROR_NOT_LOCAL_MODE };
        }

        if (!this.exists()) {
            return { data: null, status: DKTools.IO.ERROR_PATH_DOES_NOT_EXIST };
        }

        const fs = DKTools.IO.fs;
        const absolutePath = this.getAbsolutePath();

        if (object.sync) {
            const data = fs.statSync(absolutePath);

            return { data, status: DKTools.IO.OK };
        } else {
            if (!DKTools.Utils.isFunction(object.onSuccess)) {
                return { data: null, status: DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE };
            }

            fs.stat(absolutePath, (error, data) => {
                if (error) {
                    this.__processError(error, object.onError);
                } else {
                    object.onSuccess({ data, status: DKTools.IO.OK }, this);
                }
            });

            return { data: null, status: DKTools.IO.WAIT_FOR_ASYNC_OPERATION };
        }
    }

    /**
     * Returns a stats
     * Asynchronous version of DKTools.IO.Entity.prototype.getStats
     *
     * Promise resolves an object with 2 properties:
     * status - Result of an operation
     * data - Loaded data (only if the status is equal to DKTools.IO.OK)
     * if the status is not equal to DKTools.IO.OK then data will be null
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
     * @see DKTools.IO.Entity.prototype.getStats
     *
     * @return {Promise} Loaded stats
     */
    async getStatsAsync() {
        return new Promise((resolve, reject) => {
            const result = this.getStats({
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (result.status !== DKTools.IO.WAIT_FOR_ASYNC_OPERATION) {
                resolve(result);
            }
        });
    }

    // H methods

    /**
     * Returns true if the entity has an extension
     *
     * @since 5.0.0
     *
     * @returns {Boolean} Entity has an extension
     */
    hasExtension() {
        return !!this._extension;
    }

    // I methods

    /**
     * Returns true if the entity is a file
     *
     * @version 5.0.0
     * @since 2.0.0
     *
     * @returns {Boolean} Entity is a file
     */
    isFile() {
        if (this instanceof DKTools.IO.File) {
            if (DKTools.IO.isLocalMode()) {
                return DKTools.IO.isFile(this.getFullPath());
            } else {
                return !!this.hasExtension();
            }
        }

        return false;
    }

    /**
     * Returns true if the entity is a directory
     *
     * @version 5.0.0
     * @since 2.0.0
     *
     * @returns {Boolean} Entity is a directory
     */
    isDirectory() {
        if (this instanceof DKTools.IO.Directory) {
            if (DKTools.IO.isLocalMode()) {
                return DKTools.IO.isDirectory(this.getFullPath());
            } else {
                return !this.hasExtension();
            }
        }

        return false;
    }

    // P methods

    /**
     * @since 6.1.0
     * @private
     *
     * @param {*} error - Error
     * @param {Function} [onError] - Callback function upon completion of an operation with error
     */
    __processError(error, onError) {
        if (DKTools.Utils.isFunction(onError)) {
            onError(error, this);
        } else {
            DKTools.Utils.throwError(error);
        }
    }

    // R methods

    /**
     * Renames the entity (file or directory)
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_NEW_NAME_IS_NOT_AVAILABLE
     * DKTools.IO.ERROR_OPTIONS_IS_NOT_AVAILABLE
     *
     * @version 6.1.0
     *
     * @param {Object} object - Options of an operation
     *
     * @param {String} object.newName - New name of entity without the extension
     * @param {Boolean} [object.sync] - Use synchronous version of rename
     * @param {String | Object} [object.options] - Options for FileSystem.rename or FileSystem.renameSync
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @see FileSystem.rename
     * @see FileSystem.renameSync
     *
     * @returns {Number} Code of the result of an operation
     */
    rename(object) {
        if (!object) {
            return DKTools.IO.ERROR_OPTIONS_IS_NOT_AVAILABLE;
        }

        if (!DKTools.IO.isLocalMode()) {
            return DKTools.IO.ERROR_NOT_LOCAL_MODE;
        }

        if (!object.newName) {
            return DKTools.IO.ERROR_NEW_NAME_IS_NOT_AVAILABLE;
        }

        if (!this.exists()) {
            return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;
        }

        const fs = DKTools.IO.fs;
        const newName = object.newName;
        const oldAbsolutePath = this.getAbsolutePath();
        const newPath = DKTools.IO.normalizePath(this._path + '/' + newName + '.' + this._extension);
        const newAbsolutePath = DKTools.IO.getAbsolutePath(newPath);

        if (!DKTools.IO.absolutePathExists(newAbsolutePath)) {
            return DKTools.IO.ERROR_NEW_NAME_IS_NOT_AVAILABLE;
        }

        if (object.sync) {
            fs.renameSync(oldAbsolutePath, newAbsolutePath);

            this._name = newName;

            return DKTools.IO.OK;
        } else {
            fs.rename(oldAbsolutePath, newAbsolutePath, (error) => {
                if (error) {
                    this.__processError(error, object.onError);
                } else {
                    this._name = newName;

                    if (DKTools.Utils.isFunction(object.onSuccess)) {
                        object.onSuccess(DKTools.IO.OK, this);
                    }
                }
            });

            return DKTools.IO.WAIT_FOR_ASYNC_OPERATION;
        }
    }

    /**
     * Renames the entity (file or directory)
     * Asynchronous version of DKTools.IO.Entity.prototype.rename
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_NEW_NAME_IS_NOT_AVAILABLE
     *
     * @version 6.1.0
     * @since 4.0.0
     * @async
     *
     * @param {Object} object - Options of an operation
     *
     * @param {String} object.newName - New name of entity without the extension
     * @param {String | Object} [object.options] - Options for FileSystem.rename
     *
     * @see DKTools.IO.Entity.prototype.rename
     *
     * @returns {Promise} Code of the result of an operation
     */
    async renameAsync(object) {
        return new Promise((resolve, reject) => {
            const status = this.rename({
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

// properties

Object.defineProperties(DKTools.IO.Entity.prototype, {

    /**
     * Path of the entity
     *
     * @since 3.0.0
     * @readonly
     * @type {String}
     * @memberof DKTools.IO.Entity.prototype
     */
    path: {
        get: function() {
            return this._path;
        },
        configurable: true
    },

    /**
     * Name of the entity
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.IO.Entity.prototype
     */
    name: {
        get: function() {
            return this._name;
        },
        configurable: true
    },

    /**
     * Initial extension of the entity
     *
     * @since 5.0.0
     * @readonly
     * @type {String}
     * @memberof DKTools.IO.Entity.prototype
     */
    initialExtension: {
        get: function() {
            return this._initialExtension;
        },
        configurable: true
    },

    /**
     * Extension of the entity
     *
     * @since 3.0.0
     * @readonly
     * @type {String}
     * @memberof DKTools.IO.Entity.prototype
     */
    extension: {
        get: function() {
            return this._extension;
        },
        configurable: true
    }

});




