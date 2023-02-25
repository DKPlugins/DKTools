//===========================================================================
// DKTools.IO.Directory
//===========================================================================

/**
 * Directory class
 * @class
 * @extends DKTools.IO.Entity
 * @memberof DKTools.IO
 */
DKTools.IO.Directory = class extends DKTools.IO.Entity {

    // C methods

    /**
     * Creates the directory
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     * DKTools.IO.ERROR_DIRECTORY_ALREADY_EXISTS
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.mkdir
     * @param {Object} [object.options] - Options for FileSystem.mkdir or FileSystem.mkdirSync
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @param {Boolean} [object.options.recursive] - Parent folders should be created
     * @param {Number | String} [object.options.mode] - Directory permission
     *
     * @example
     * const directory = new DKTools.IO.Directory('test/');
     * const status = directory.create({ sync: true });
     *
     * if (status === DKTools.IO.OK) {
     *      console.log('created!');
     * }
     *
     * @return {Number} Code of the result of an operation
     */
    create(object) {
        if (!object) {
            return DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE;
        }

        if (!object.sync && !DKTools.Utils.isFunction(object.onSuccess)) {
            return DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE;
        }

        if (!Utils.isNwjs()) {
            return DKTools.IO.ERROR_NOT_LOCAL_MODE;
        }

        if (this.exists()) {
            return DKTools.IO.ERROR_DIRECTORY_ALREADY_EXISTS;
        }

        const fs = DKTools.IO.fs;
        const absolutePath = this.getAbsolutePath();

        if (object.sync) {
            try {
                fs.mkdirSync(absolutePath, object.options);

                return DKTools.IO.OK;
            } catch (error) {
                this.__processError(error, object.onError);
            }
        } else {
            fs.mkdir(absolutePath, object.options, (error) => {
                if (error) {
                    this.__processError(error, object.onError);
                } else {
                    object.onSuccess(DKTools.IO.OK, this);
                }
            });

            return DKTools.IO.EXPECT_CALLBACK;
        }
    }

    /**
     * Creates the directory
     * Asynchronous version of DKTools.IO.Directory.prototype.create
     * Promise resolves a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_DIRECTORY_ALREADY_EXISTS
     *
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.mkdir or FileSystem.mkdirSync
     *
     * @param {Boolean} [object.options.recursive] - Parent folders should be created
     * @param {Number | String} [object.options.mode] - Directory permission
     *
     * @example
     * const directory = new DKTools.IO.Directory('test/');
     * const status = await directory.createAsync();
     *
     * if (status === DKTools.IO.OK) {
     *      console.log('created!');
     * }
     *
     * @return {Promise<Number>} Code of the result of an operation
     */
    async createAsync(object = {}) {
        return new Promise((resolve, reject) => {
            const status = this.create({
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
     * Creates the new directory
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     * DKTools.IO.ERROR_DIRECTORY_ALREADY_EXISTS
     *
     *
     * @param {String} name - Name of the directory
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.mkdir
     * @param {Object} [object.options] - Options for FileSystem.mkdir or FileSystem.mkdirSync
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @param {Boolean} [object.options.recursive] - Parent folders should be created
     * @param {Number | String} [object.options.mode] - Directory permission
     *
     * @example
     * const directory = new DKTools.IO.Directory('save/');
     * const status = directory.createDirectory('backup', { sync: true });
     *
     * if (status === DKTools.IO.OK) {
     *      console.log('created!');
     * }
     *
     * @return {Number} Code of the result of an operation
     */
    createDirectory(name, object) {
        const fullPath = DKTools.IO.normalizePath(this.getFullPath() + '/' + name);
        const directory = new DKTools.IO.Directory(fullPath);

        return directory.create(object);
    }

    /**
     * Creates the new directory
     * Asynchronous version of DKTools.IO.Directory.prototype.createDirectory
     * Promise resolves a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_DIRECTORY_ALREADY_EXISTS
     *
     * @async
     *
     * @param {String} name - Name of the directory
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.mkdir or FileSystem.mkdirSync
     *
     * @param {Boolean} [object.options.recursive] - Parent folders should be created
     * @param {Number | String} [object.options.mode] - Directory permission
     *
     * @example
     * const directory = new DKTools.IO.Directory('save/');
     * const status = await directory.createDirectoryAsync('backup');
     *
     * if (status === DKTools.IO.OK) {
     *      console.log('created!');
     * }
     *
     * @return {Promise<Number>} Code of the result of an operation
     */
    async createDirectoryAsync(name, object = {}) {
        const fullPath = DKTools.IO.normalizePath(this.getFullPath() + '/' + name);
        const directory = new DKTools.IO.Directory(fullPath);

        return directory.createAsync(object);
    }

    // F methods

    /**
     * Finds the files
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @version 1.3.2
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.readdir
     * @param {String | Object} [object.options] - Options for FileSystem.readdir or FileSystem.readdirSync
     * @param {RegExp | String} [object.template] - Template for filtering
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     * @param {Number} [object.searchLimit] - Search limit
     *
     * @example
     * const directory = new DKTools.IO.Directory('img/');
     * const result = directory.findFiles({ sync: true, template: 'Window.png' });
     *
     * if (result.status === DKTools.IO.OK) {
     *     console.log(result.data);
     * }
     *
     * @return {{ data: DKTools.IO.Entity[] | null, status: Number }} All files
     */
    findFiles(object) {
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

        const searchLimit = object.searchLimit || 1;
        const files = [];
        let total = 1, processed = 0;

        const processData = (data) => {
            _.forEach(data, (entity) => {
                if (entity.isFile()) {
                    const fullName = entity.getFullName();

                    if (object.template instanceof RegExp && object.template.test(fullName)) {
                        files.push(entity);
                    } else if (!object.template || fullName === object.template) {
                        files.push(entity);
                    }
                } else if (total < searchLimit && entity.isDirectory()) {
                    total++;
                    processDirectory(entity);
                }
            });
        };

        const processDirectory = (directory) => {
            if (object.sync) {
                const data = directory.getAll({ sync: true, options: object.options }).data;

                processData(data);
            } else {
                directory.getAll({
                    sync: false,
                    options: object.options,
                    onError: object.onError,
                    onSuccess: (result) => {
                        processed++;

                        processData(result.data);

                        if (total === processed) {
                            object.onSuccess({ data: files, status: DKTools.IO.OK });
                        }
                    }
                });
            }
        };

        processDirectory(this);

        if (object.sync) {
            return { data: files, status: DKTools.IO.OK };
        } else {
            return { data: null, status: DKTools.IO.EXPECT_CALLBACK };
        }
    }

    /**
     * Finds the files
     * Asynchronous version of DKTools.IO.Directory.prototype.findFiles
     *
     * Promise resolves an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.readdir
     * @param {RegExp | String} [object.template] - Template for filtering
     * @param {Number} [object.searchLimit] - Search limit
     *
     * @return {Promise<{ status: Number, data: DKTools.IO.File[] | null }>} All files
     */
    async findFilesAsync(object = {}) {
        return new Promise((resolve, reject) => {
            const result = this.findFiles({
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
     * Finds the directories
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with directories
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.readdir
     * @param {String | Object} [object.options] - Options for FileSystem.readdir or FileSystem.readdirSync
     * @param {RegExp | String} [object.template] - Template for filtering
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     * @param {Number} [object.searchLimit] - Search limit
     *
     * @example
     * const directory = new DKTools.IO.Directory('img/');
     * const result = directory.findDirectories({ sync: true, template: 'system' });
     *
     * if (result.status === DKTools.IO.OK) {
     *     console.log(result.data);
     * }
     *
     * @return {{ data: DKTools.IO.Directory[] | null, status: Number }} All directories
     */
    findDirectories(object) {
        if (!object) {
            return { data: null, status: DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE };
        }

        if (!object.sync && !DKTools.Utils.isFunction(object.onSuccess)) {
            return { data: null, status: DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE };
        }

        if (!Utils.isNwjs()) {
            return { data: null, status: DKTools.IO.ERROR_NOT_LOCAL_MODE };
        }

        if (!this.exists()) {
            return { data: null, status: DKTools.IO.ERROR_PATH_DOES_NOT_EXIST };
        }

        const searchLimit = object.searchLimit || 1;
        const directories = [];
        let total = 1, processed = 0;

        const processData = (data) => {
            _.forEach(data, (directory) => {
                const fullName = directory.getFullName();

                if (object.template instanceof RegExp && object.template.test(fullName)) {
                    directories.push(directory);
                } else if (!object.template || fullName === object.template) {
                    directories.push(directory);
                }

                if (total < searchLimit) {
                    total++;

                    processDirectory(directory);
                }
            });
        };

        const processDirectory = (directory) => {
            if (object.sync) {
                const data = directory.getDirectories({
                    sync: true,
                    options: object.options
                }).data;

                processData(data);
            } else {
                directory.getDirectories({
                    sync: false,
                    options: object.options,
                    onError: object.onError,
                    onSuccess: (result) => {
                        processed++;

                        processData(result.data);

                        if (total === processed) {
                            object.onSuccess({ data: directories, status: DKTools.IO.OK });
                        }
                    }
                });
            }
        };

        processDirectory(this);

        if (object.sync) {
            return { data: directories, status: DKTools.IO.OK };
        } else {
            return { data: null, status: DKTools.IO.EXPECT_CALLBACK };
        }
    }

    /**
     * Finds the directories
     * Asynchronous version of DKTools.IO.Directory.prototype.findDirectories
     *
     * Promise resolves an object with 2 properties:
     * status - Result of an operation
     * data - Array with directories
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.readdir
     * @param {RegExp | String} [object.template] - Template for filtering
     * @param {Number} [object.searchLimit] - Search limit
     *
     * @return {Promise<{ status: Number, data: DKTools.IO.Directory[] | null }>} All directories
     */
    async findDirectoriesAsync(object = {}) {
        return new Promise((resolve, reject) => {
            const result = this.findDirectories({
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

    // G methods

    /**
     * Returns all files and directories
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with files and directories
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @version 1.3.4
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.readdir
     * @param {String | Object} [object.options] - Options for FileSystem.readdir or FileSystem.readdirSync
     * @param {RegExp | String} [object.template] - Template for filtering
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @return {{ data: DKTools.IO.Entity[] | null, status: Number }} All files and directories
     */
    getAll(object) {
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

        const path = this.getFullPath();

        const processData = (names) => {
            if (object.template instanceof RegExp) {
                names = names.filter(name => object.template.test(name));
            } else if (DKTools.Utils.isString(object.template)) {
                names = names.filter(name => name === object.template);
            }

            const data = names.reduce((acc, name) => {
                const fullPath = DKTools.IO.normalizePath(path + '/' + name);

                if (DKTools.IO.isFile(fullPath)) {
                    acc.push(new DKTools.IO.File(fullPath));
                } else if (DKTools.IO.isDirectory(fullPath)) {
                    acc.push(new DKTools.IO.Directory(fullPath));
                }

                return acc;
            }, []);

            return { data, status: DKTools.IO.OK };
        };

        if (!Utils.isNwjs() && DKTools.IO.mode === DKTools.IO.MODE_NWJS_STAMP) {
            const parts = this.getFullPath().split(DKTools.IO.sep).filter(part => !!part);
            const temp = _.get(DKTools.IO.stamp, parts, {});
            const names = Object.keys(temp);

            if (object.sync) {
                return processData(names);
            } else {
                object.onSuccess(processData(names), this);

                return { data: null, status: DKTools.IO.EXPECT_CALLBACK };
            }
        }

        const fs = DKTools.IO.fs;
        const absolutePath = this.getAbsolutePath();

        if (object.sync) {
            try {
                const names = fs.readdirSync(absolutePath, object.options);

                return processData(names);
            } catch (error) {
                this.__processError(error, object.onError);
            }
        } else {
            fs.readdir(absolutePath, object.options, (error, names) => {
                if (error) {
                    this.__processError(error, object.onError);
                } else {
                    object.onSuccess(processData(names), this);
                }
            });

            return { data: null, status: DKTools.IO.EXPECT_CALLBACK };
        }
    }

    /**
     * Returns all files and directories
     * Asynchronous version of DKTools.IO.Directory.prototype.getAll
     *
     * Promise resolves an object with 2 properties:
     * status - Result of an operation
     * data - Array with files and directories
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.readdir
     * @param {RegExp | String} [object.template] - Template for filtering
     *
     * @return {Promise<{ status: Number, data: DKTools.IO.Entity[] | null }>} All files and directories
     */
    async getAllAsync(object = {}) {
        return new Promise((resolve, reject) => {
            const result = this.getAll({
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
     * Returns all files
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.readdir
     * @param {String | Object} [object.options] - Options for FileSystem.readdir or FileSystem.readdirSync
     * @param {RegExp} [object.template] - Template for filtering
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @return {{ status: Number, data: DKTools.IO.File[] | null }} All files
     */
    getFiles(object) {
        if (!object) {
            return { data: null, status: DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE };
        }

        if (!object.sync && !DKTools.Utils.isFunction(object.onSuccess)) {
            return { data: null, status: DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE };
        }

        const processData =
            (entities) => entities.filter(entity => entity.isFile());

        if (object.sync) {
            const result = this.getAll(object);

            if (result.status === DKTools.IO.OK) {
                return { ...result, data: processData(result.data) };
            }

            return result;
        } else {
            const onSuccess = object.onSuccess;

            object.onSuccess = (result, directory) => {
                if (result.status === DKTools.IO.OK) {
                    onSuccess({ ...result, data: processData(result.data) }, directory);
                } else {
                    onSuccess(result, directory);
                }
            };

            return this.getAll(object);
        }
    }

    /**
     * Returns all files
     * Asynchronous version of DKTools.IO.Directory.prototype.getFiles
     *
     * Promise resolves an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.readdir
     * @param {RegExp | String} [object.template] - Template for filtering
     *
     * @return {Promise<{ status: Number, data: DKTools.IO.File[] | null }>} All files
     */
    async getFilesAsync(object = {}) {
        return this.getAllAsync(object).then((result) => {
            if (result.status === DKTools.IO.OK) {
                const data = _.filter(result.data, entity => entity.isFile());

                return { ...result, data };
            }

            return result;
        });
    }

    /**
     * Returns all directories
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with directories
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.readdir
     * @param {String | Object} [object.options] - Options for FileSystem.readdir or FileSystem.readdirSync
     * @param {RegExp} [object.template] - Template for filtering
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @return {{ status: Number, data: DKTools.IO.Directory[] | null }} All directories
     */
    getDirectories(object) {
        if (!object) {
            return { data: null, status: DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE };
        }

        if (!object.sync && !DKTools.Utils.isFunction(object.onSuccess)) {
            return { data: null, status: DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE };
        }

        const processData = (entities) => _.filter(entities, entity => entity.isDirectory());

        if (object.sync) {
            const result = this.getAll(object);

            if (result.status === DKTools.IO.OK) {
                return { ...result, data: processData(result.data) };
            }

            return result;
        } else {
            const onSuccess = object.onSuccess;

            object.onSuccess = (result, directory) => {
                if (result.status === DKTools.IO.OK) {
                    onSuccess({ ...result, data: processData(result.data) }, directory);
                } else {
                    onSuccess(result, directory);
                }
            };

            return this.getAll(object);
        }
    }

    /**
     * Returns all directories
     * Asynchronous version of DKTools.IO.Directory.prototype.getDirectories
     *
     * Promise resolves an object with 2 properties:
     * status - Result of an operation
     * data - Array with directories
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.readdir
     * @param {RegExp | String} [object.template] - Template for filtering
     *
     * @return {Promise<{ status: Number, data: DKTools.IO.Directory[] | null }>} All directories
     */
    async getDirectoriesAsync(object = {}) {
        return this.getAllAsync(object).then((result) => {
            if (result.status === DKTools.IO.OK) {
                const data = _.filter(result.data, entity => entity.isDirectory());

                return { ...result, data };
            }

            return result;
        });
    }

    /**
     * Returns all audio files
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.readdir
     * @param {String | Object} [object.options] - Options for FileSystem.readdir or FileSystem.readdirSync
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @return {{ status: Number, data: DKTools.IO.File[] | null }} All audio files
     */
    getAudioFiles(object) {
        return this.getFiles({ ...object, template: /(.ogg)/ });
    }

    /**
     * Returns all audio files
     * Asynchronous version of DKTools.IO.Directory.prototype.getAudioFiles
     *
     * Promise resolves an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.readdir
     *
     * @return {Promise<{ status: Number, data: DKTools.IO.File[] | null }>} All audio files
     */
    async getAudioFilesAsync(object = {}) {
        return new Promise((resolve, reject) => {
            const result = this.getAudioFiles({
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
     * Returns all JSON files
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.readdir
     * @param {String | Object} [object.options] - Options for FileSystem.readdir or FileSystem.readdirSync
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @return {{ status: Number, data: DKTools.IO.File[] | null }} All JSON files
     */
    getJsonFiles(object) {
        return this.getFiles({ ...object, template: /(.json)/ });
    }

    /**
     * Returns all JSON files
     * Asynchronous version of DKTools.IO.Directory.prototype.getJsonFiles
     *
     * Promise resolves an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     * @param {Object} [object={}] - Options of an operation
     * @param {String | Object} [object.options] - Options for FileSystem.readdir
     * @return {Promise<{ status: Number, data: DKTools.IO.File[] | null }>} All JSON files
     */
    async getJsonFilesAsync(object = {}) {
        return new Promise((resolve, reject) => {
            const result = this.getJsonFiles({
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
     * Returns all txt files
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.readdir
     * @param {String | Object} [object.options] - Options for FileSystem.readdir or FileSystem.readdirSync
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @return {{ status: Number, data: DKTools.IO.File[] | null }} All txt files
     */
    getTxtFiles(object) {
        return this.getFiles({ ...object, template: /(.txt)/ });
    }

    /**
     * Returns all txt files
     * Asynchronous version of DKTools.IO.Directory.prototype.getTxtFiles
     *
     * Promise resolves an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.readdir
     *
     * @return {Promise<{ status: Number, data: DKTools.IO.File[] | null }>} All txt files
     */
    async getTxtFilesAsync(object = {}) {
        return new Promise((resolve, reject) => {
            const result = this.getTxtFiles({
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
     * Returns all image files
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.readdir
     * @param {String | Object} [object.options] - Options for FileSystem.readdir or FileSystem.readdirSync
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @return {{ status: Number, data: DKTools.IO.File[] | null }} All image files
     */
    getImageFiles(object) {
        return this.getFiles({ ...object, template: /(.png|.webp)/ });
    }

    /**
     * Returns all image files
     * Asynchronous version of DKTools.IO.Directory.prototype.getImageFiles
     *
     * Promise resolves an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.readdir
     *
     * @return {Promise<{ status: Number, data: DKTools.IO.File[] | null }>} All image files
     */
    async getImageFilesAsync(object = {}) {
        return new Promise((resolve, reject) => {
            const result = this.getImageFiles({
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
     * Returns all video files
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.readdir
     * @param {String | Object} [object.options] - Options for FileSystem.readdir or FileSystem.readdirSync
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @return {{ data: DKTools.IO.File[] | null, status: Number }} All video files
     */
    getVideoFiles(object) {
        return this.getFiles({ ...object, template: /(.webm|.mp4)/ });
    }

    /**
     * Returns all video files
     * Asynchronous version of DKTools.IO.Directory.prototype.getVideoFiles
     *
     * Promise resolves an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.readdir
     *
     * @return {Promise<{ status: Number, data: DKTools.IO.File[] | null }>} All video files
     */
    async getVideoFilesAsync(object = {}) {
        return new Promise((resolve, reject) => {
            const result = this.getVideoFiles({
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
     * Returns the root directory
     * @return {DKTools.IO.Directory} Root directory
     */
    getRootDirectory() {
        return new DKTools.IO.Directory(this.getPath());
    }

    // I methods

    /**
     * Returns true if the directory does not contain files and other directories
     * @return {Boolean} Directory does not contain files and other directories
     */
    isEmpty() {
        const data = this.getAll({ sync: true }).data;

        return !data || data.length === 0;
    }

    // L methods

    /**
     * Loads and returns an audio files
     * @return {WebAudio[]} Loaded audio files
     */
    loadAudioFiles() {
        const result = this.getAudioFiles({ sync: true });

        if (result.status !== DKTools.IO.OK) {
            return [];
        }

        return result.data.map(file => file.loadAudio());
    }

    /**
     * Loads and returns an audio files
     * Asynchronous version of DKTools.IO.Directory.prototype.loadAudioFiles
     * Promise resolves a loaded audio files (WebAudio[])
     * @async
     * @return {Promise<WebAudio[]>} Loaded audio files
     */
    async loadAudioFilesAsync() {
        const result = await this.getAudioFilesAsync();

        if (result.status !== DKTools.IO.OK) {
            return [];
        }

        return Promise.all(result.data.map(file => file.loadAudioAsync()));
    }

    /**
     * Loads and returns a bitmaps
     * @param {Function | Object} [object] - Function of processing after loading a bitmap or object with parameter
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @return {Bitmap[]} Loaded bitmaps
     */
    loadBitmaps(object) {
        const result = this.getImageFiles({ sync: true });

        if (result.status !== DKTools.IO.OK) {
            return [];
        }

        return result.data.map(file => file.loadBitmap(object));
    }

    /**
     * Loads and returns a bitmaps
     * Asynchronous version of DKTools.IO.Directory.prototype.loadBitmaps
     * Promise resolves a loaded bitmaps (Bitmap[])
     * @async
     * @param {Function | Object} [object] - Function of processing after loading a bitmap or object with parameter
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @return {Promise<Bitmap[]>} Loaded bitmaps
     */
    async loadBitmapsAsync(object) {
         const result = await this.getImageFilesAsync();

        if (result.status !== DKTools.IO.OK) {
            return [];
        }

        return Promise.all(result.data.map(file => file.loadBitmapAsync(object)));
    }

    // R methods

    /**
     * Removes the directory
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_DIRECTORY_IS_NOT_EMPTY
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.rmdir
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @return {Number} Code of the result of an operation
     */
    remove(object = {}) {
        if (!Utils.isNwjs()) {
            return DKTools.IO.ERROR_NOT_LOCAL_MODE;
        }

        if (!this.exists()) {
            return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;
        }

        if (!this.isEmpty()) {
            return DKTools.IO.ERROR_DIRECTORY_IS_NOT_EMPTY;
        }

        const fs = DKTools.IO.fs;
        const absolutePath = this.getAbsolutePath();

        if (object.sync) {
            try {
                fs.rmdirSync(absolutePath);

                return DKTools.IO.OK;
            } catch (error) {
                this.__processError(error, object.onError);
            }
        } else {
            fs.rmdir(absolutePath, (error) => {
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
     * Removes the directory
     * Asynchronous version of DKTools.IO.Directory.prototype.remove
     * Promise resolves a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_DIRECTORY_IS_NOT_EMPTY
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

};




