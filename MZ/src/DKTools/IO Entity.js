//===========================================================================
// DKTools.IO.Entity
//===========================================================================

/**
 * Abstract class of entity (file or directory)
 *
 * @class
 * @abstract
 * @memberof DKTools.IO
 *
 * @example
 * var file = new DKTools.IO.File('index.html');
 *
 * @example
 * var directory = new DKTools.IO.Directory('img/system/');
 */
DKTools.IO.Entity = class {

    constructor() {
        this.initialize.apply(this, arguments);
    }

    // properties

    /**
     * Gets path of the entity
     * @return {String} Path of the entity
     */
    get path() {
        return this._path;
    }

    /**
     * Gets name of the entity
     * @return {String} Name of the entity
     */
    get name() {
        return this._name;
    }

    /**
     * Gets initial extension of the entity
     * @return {String} Initial extension of the entity
     */
    get initialExtension() {
        return this._initialExtension;
    }

    /**
     * Gets extension of the entity
     * @return {String} Extension of the entity
     */
    get extension() {
        return this._extension;
    }

    // initialize

    /**
     * Initializes the entity
     *
     * @param {String} fullPath - Path to entity
     */
    initialize(fullPath = '') {
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
     * @return {Boolean} Entity exists
     */
    exists() {
        return DKTools.IO.absolutePathExists(this.getAbsolutePath());
    }

    // G methods

    /**
     * Returns the path
     * @return {String} Path
     */
    getPath() {
        return this._path;
    }

    /**
     * Returns the name of the entity without an extension
     * @return {String} Name of the entity without an extension
     */
    getName() {
        return this._name;
    }

    /**
     * Returns the extension of the entity
     * @return {String} Extension of the entity
     */
    getExtension() {
        return this._extension;
    }

    /**
     * Returns the full path
     * @return {String} Full Path
     */
    getFullPath() {
        return DKTools.IO.joinPath(this.getPath(), '/', this.getFullName());
    }

    /**
     * Returns the full name
     * @return {String} Full name
     */
    getFullName() {
        return this._name + this._extension;
    }

    /**
     * Returns the absolute path
     * @return {String} Absolute path
     */
    getAbsolutePath() {
        return DKTools.IO.getAbsolutePath(this.getFullPath());
    }

    /**
     * Returns a stats
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Loaded data
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of stat
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @return {{ status: Number, data: Object }} Loaded stats
     */
    getStats(object) {
        if (!object) {
            return { data: null, status: DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE };
        }

        if (!object.sync && !DKTools.Utils.isFunction(object.onSuccess)) {
            return { data: null, status: DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE };
        }

        if (!Utils.isNwjs() && DKTools.IO.mode === DKTools.IO.MODE_NWJS) {
            return { data: null, status: DKTools.IO.ERROR_NOT_LOCAL_MODE };
        }

        if (!this.exists()) {
            return { data: null, status: DKTools.IO.ERROR_PATH_DOES_NOT_EXIST };
        }

        if (!Utils.isNwjs() && DKTools.IO.mode === DKTools.IO.MODE_NWJS_STAMP) {
            const parts = this.getFullPath().split('\\').filter(part => !!part);
            const data = _.get(DKTools.IO.stamp, parts.concat('__stats__'), {});

            return { data, status: DKTools.IO.OK };
        }

        const fs = DKTools.IO.fs;
        const absolutePath = this.getAbsolutePath();

        if (object.sync) {
            try {
                const data = fs.statSync(absolutePath);

                return { data, status: DKTools.IO.OK };
            } catch (error) {
                this.__processError(error, object.onError);
            }
        } else {
            fs.stat(absolutePath, (error, data) => {
                if (error) {
                    this.__processError(error, object.onError);
                } else {
                    object.onSuccess({ data, status: DKTools.IO.OK }, this);
                }
            });

            return { data: null, status: DKTools.IO.EXPECT_CALLBACK };
        }
    }

    /**
     * Returns a stats
     * Asynchronous version of DKTools.IO.Entity.prototype.getStats
     *
     * Promise resolves an object with 2 properties:
     * status - Result of an operation
     * data - Loaded data
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     * @return {Promise<Object>} Loaded stats
     */
    async getStatsAsync() {
        return new Promise((resolve, reject) => {
            const result = this.getStats({
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (result.status !== DKTools.IO.EXPECT_CALLBACK) {
                resolve(result);
            }
        });
    }

    // H methods

    /**
     * Returns true if the entity has an extension
     * @return {Boolean} Entity has an extension
     */
    hasExtension() {
        return !!this._extension;
    }

    // I methods

    /**
     * Returns true if the entity is a file
     *
     * @return {Boolean} Entity is a file
     */
    isFile() {
        if (this instanceof DKTools.IO.File) {
            if (Utils.isNwjs()) {
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
     * @return {Boolean} Entity is a directory
     */
    isDirectory() {
        if (this instanceof DKTools.IO.Directory) {
            if (Utils.isNwjs()) {
                return DKTools.IO.isDirectory(this.getFullPath());
            } else {
                return !this.hasExtension();
            }
        }

        return false;
    }

    // P methods

    /**
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
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OVERWRITING_IS_NOT_AVAILABLE
     *
     * @param {String} newName - New name of entity (file or directory) without the extension
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of rename
     * @param {Boolean} [object.overwrite] - Overwrite existing entity
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @return {Number} Code of the result of an operation
     */
    rename(newName, object = {}) {
        object = object || {};

        if (!Utils.isNwjs()) {
            return DKTools.IO.ERROR_NOT_LOCAL_MODE;
        }

        if (!this.exists()) {
            return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;
        }

        const fs = DKTools.IO.fs;
        const oldAbsolutePath = this.getAbsolutePath();
        const newPath = DKTools.IO.normalizePath(this._path + '/' + newName + this._extension);
        const newAbsolutePath = DKTools.IO.getAbsolutePath(newPath);

        if (!object.overwrite && DKTools.IO.absolutePathExists(newAbsolutePath)) {
            return DKTools.IO.ERROR_OVERWRITING_IS_NOT_AVAILABLE;
        }

        if (object.sync) {
            try {
                fs.renameSync(oldAbsolutePath, newAbsolutePath);

                this._name = newName;

                return DKTools.IO.OK;
            } catch (error) {
                this.__processError(error, object.onError);
            }
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

            return DKTools.IO.EXPECT_CALLBACK;
        }
    }

    /**
     * Renames the entity (file or directory)
     * Asynchronous version of DKTools.IO.Entity.prototype.rename
     * Promise resolves a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OVERWRITING_IS_NOT_AVAILABLE
     *
     * @async
     *
     * @param {String} newName - New name of entity without the extension
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {Boolean} [object.overwrite] - Overwrite existing entity
     *
     * @return {Promise<Number>} Code of the result of an operation
     */
    async renameAsync(newName, object = {}) {
        return new Promise((resolve, reject) => {
            const status = this.rename(newName, {
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


