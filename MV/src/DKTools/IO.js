//===========================================================================
// DKTools.IO
//===========================================================================

/**
 * File system class
 *
 * @class DKTools.IO
 * @memberof DKTools
 */
DKTools.IO = class {

    constructor() {
        return DKTools.IO;
    }

    // initialize methods

    /**
     * @version 8.0.0
     * @static
     */
    static initialize() {
        let projectPath = '';

        if (this.isLocalMode()) {
            /**
             * @private
             * @readonly
             * @type {Object}
             */
            this._fs = require('fs');

            /**
             * @private
             * @readonly
             * @type {Object}
             */
            this._os = require('os');

            /**
             * @private
             * @readonly
             * @type {Object}
             */
            this._path = require('path');

            projectPath = this.joinPath(this._path.dirname(process.mainModule.filename), '/');
        }

        /**
         * @private
         * @readonly
         * @type {String}
         */
        this._projectPath = projectPath;

        /**
         * @since 8.0.0
         * @private
         * @readonly
         * @type {Number}
         */
        this._mode = DKToolsParam.get('File System', 'Mode');

        /**
         * @since 8.0.0
         * @private
         * @readonly
         * @type {Object}
         */
        this._stamp = {};

        this._loadStamp();
        this._createStamp();
    }

    // A methods

    /**
     * Returns true if the absolute path exists
     *
     * @version 8.0.0
     * @since 3.0.0
     * @static
     *
     * @param {String} path - Path
     *
     * @see FileSystem.existsSync
     *
     * @returns {Boolean} Absolute path exists
     */
    static absolutePathExists(path) {
        if (this.isLocalMode()) {
            return this._fs.existsSync(path);
        } else if (this.mode === DKTools.IO.MODE_NWJS_STAMP && path.startsWith(this._projectPath)) {
            if (this.isFile(path)) {
                return true;
            } else if (this.isDirectory(path)) {
                return true;
            }
        }

        return false;
    }

    // C methods

    /**
     * Creates the file system stamp
     *
     * @since 8.0.0
     * @private
     * @static
     */
    static _createStamp() {
        if (!Utils.isTest() || !this.isLocalMode() || this.mode === DKTools.IO.MODE_NWJS) {
            return;
        }

        const ignoredDirectories = DKToolsParam.get('File System', 'Ignored Directories')
                                                        .map(path => new DKTools.IO.Directory(path));
        const directory = DKTools.IO.getRootDirectory();
        const stamp = this._stamp;
        let timeout = null;

        const processDirectory = (directory) => {
            if (ignoredDirectories.some(dir => dir.getFullPath() === directory.getFullPath())) {
                return;
            }

            directory.getAllAsync().then(result => result.data).then((data) => {
                data.forEach((entity) => {
                    entity.getStatsAsync().then(result => result.data).then((stats) => {
                        const fullPath = entity.getFullPath().substring(1).split('\\');

                        if (entity.isFile()) {
                            _.set(stamp, fullPath, { __stats__: { ...stats, type: 'file' } });
                        } else {
                            _.set(stamp, fullPath, { __stats__: { ...stats, type: 'directory' } });
                        }

                        if (timeout) {
                            clearTimeout(timeout);
                        }

                        timeout = setTimeout(() => {
                            const file = new DKTools.IO.File('data/Stamp.json');

                            file.saveJsonAsync(stamp, { compress: true });
                        });
                    });

                    if (entity.isDirectory()) {
                        processDirectory(entity);
                    }
                });
            });
        };

        processDirectory(directory);
    }

    // G methods

    /**
     * Returns the project directory
     *
     * @since 4.0.0
     * @static
     *
     * @returns {DKTools.IO.Directory} Project directory
     */
    static getRootDirectory() {
        return new DKTools.IO.Directory();
    }

    /**
     * Returns the absolute path to file or directory
     *
     * @since 3.0.0
     * @static
     *
     * @param {String} path - Path
     *
     * @returns {String} Absolute path to file or directory
     */
    static getAbsolutePath(path) {
        const absolutePath = this.joinPath(this._projectPath, (path || ''));

        return this.normalizePath(absolutePath);
    }

    // I methods

    /**
     * Returns true if the local mode is used
     *
     * @static
     * @returns {Boolean} Local mode is used
     */
    static isLocalMode() {
        return Utils.isNwjs();
    }

    /**
     * Returns true if the full path is a file
     *
     * @version 8.0.0
     * @static
     *
     * @param {String} fullPath - Path to file
     *
     * @see DKTools.IO.getAbsolutePath
     * @see DKTools.IO.absolutePathExists
     * @see FileSystem.lstatSync
     *
     * @returns {Boolean} Full path is a file
     */
    static isFile(fullPath) {
        if (this.isLocalMode()) {
            const absolutePath = this.getAbsolutePath(fullPath);

            if (this.absolutePathExists(absolutePath)) {
                return this._fs.lstatSync(absolutePath).isFile();
            }
        } else if (this.mode === DKTools.IO.MODE_NWJS_STAMP) {
            const parts = this.normalizePath(fullPath).split('\\');
            const extension = _.last(parts);

            if (extension.includes('.')) {
                return _.get(this._stamp, parts.concat('__stats__'), {}).type === 'file';
            }
        }

        return false;
    }

    /**
     * Returns true if the full path is a directory
     *
     * @version 8.0.0
     * @static
     *
     * @param {String} fullPath - Path to directory
     *
     * @see DKTools.IO.getAbsolutePath
     * @see DKTools.IO.absolutePathExists
     * @see FileSystem.lstatSync
     *
     * @returns {Boolean} Full path is a directory
     */
    static isDirectory(fullPath) {
        if (this.isLocalMode()) {
            const absolutePath = this.getAbsolutePath(fullPath);

            if (this.absolutePathExists(absolutePath)) {
                return this._fs.lstatSync(absolutePath).isDirectory();
            }
        } else if (this.mode === DKTools.IO.MODE_NWJS_STAMP) {
            const parts = this.normalizePath(fullPath).split('\\').filter(part => !!part);
            const extension = _.last(parts);

            if (!extension.includes('.')) {
                return _.get(this._stamp, parts.concat('__stats__'), {}).type === 'directory';
            }
        }

        return false;
    }

    // J methods

    /**
     * Joins all given path segments together using the platform specific separator as a delimiter,
     * then normalizes the resulting path.
     *
     * @since 5.0.0
     * @static
     *
     * @param {...String} paths - Path segments
     *
     * @see DKTools.IO.isLocalMode
     * @see DKTools.IO.normalizePath
     * @see Path.join
     *
     * @returns {String}
     */
    static joinPath() {
        if (this.isLocalMode()) {
            return this._path.join(...arguments);
        }

        const paths = _.filter(arguments, arg => DKTools.Utils.isString(arg));
        let joined = paths.join('\\');

        if (!/^[\\\/]{2}[^\\\/]/.test(paths[0])) {
            joined = joined.replace(/^[\\\/]{2,}/, '\\');
        }

        return this.normalizePath(joined);
    }

    // L methods

    /**
     * Loads the file system stamp
     *
     * @since 8.0.0
     * @private
     * @static
     */
    static _loadStamp() {
        if (this.isLocalMode() || this.mode === DKTools.IO.MODE_NWJS) {
            return;
        }

        const file = new DKTools.IO.File('data/Stamp.json');

        file.loadJson({
            sync: true,
            decompress: true,
            onSuccess: (result) => {
                this._stamp = result.data || this._stamp;
            }
        });
    }

    // N methods

    /**
     * Returns a normalized path
     *
     * @version 6.1.0
     * @static
     *
     * @param {String} path - Path for normalize
     * @param {Boolean} [reverseSlash=false] - Reversing slash
     *
     * @see Path.normalize
     *
     * @returns {String} Normalized path
     */
    static normalizePath(path, reverseSlash = false) {
        if (this.isLocalMode()) {
            const normalizedPath = this._path.normalize(path);

            if (!reverseSlash) {
                return normalizedPath;
            }

            return normalizedPath.replace(/\\/g, '/');
        }

        const result = this._statPath(path),
            isUnc = result.isUnc,
            isAbsolute = result.isAbsolute;

        let device = result.device,
            tail = result.tail;

        const trailingSlash = /[\\\/]$/.test(tail);
        const parts = _.filter(tail.split(/[\\\/]+/), part => part && part !== '.');
        const tailParts = [];

        for (const p of parts) {
            if (p === '..') {
                if (tailParts.length > 0 && tailParts[tailParts.length - 1] !== '..') {
                    tailParts.pop();
                } else if (!isAbsolute) {
                    tailParts.push('..');
                }
            } else {
                tailParts.push(p);
            }
        }

        tail = tailParts.join('\\');

        if (!tail && !isAbsolute) {
            tail = '.';
        }

        if (tail && trailingSlash) {
            tail += '\\';
        }

        if (isUnc) {
            device = '\\\\' + device.replace(/^[\\\/]+/, '').replace(/[\\\/]+/g, '\\');
        }

        const normalizedPath = device + (isAbsolute ? '\\' : '') + tail;

        if (!reverseSlash) {
            return normalizedPath;
        }

        return normalizedPath.replace(/\\/g, '/');
    }

    // P methods

    /**
     * Returns an object whose properties represent significant elements of the path.
     * Trailing directory separators are ignored.
     *
     * @since 5.0.0
     * @static
     *
     * @param {String} path - Path
     *
     * @see DKTools.IO._splitPath
     * @see Path.parse
     *
     * @returns {{ root: String, dir: String, base: String, ext: String, name: String }}
     */
    static parsePath(path) {
        if (this.isLocalMode()) {
            return this._path.parse(path);
        }

        const allParts = this._splitPath(path);

        return {
            root: allParts[0],
            dir: allParts[0] + allParts[1].slice(0, -1),
            base: allParts[2],
            ext: allParts[3],
            name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
        };
    }

    /**
     * Returns true if the path exists
     *
     * @version 3.0.0
     * @static
     *
     * @param {String} path - Path
     *
     * @example
     * DKTools.IO.pathExists('img/system/'); // => true
     *
     * @see DKTools.IO.getAbsolutePath
     * @see DKTools.IO.absolutePathExists
     *
     * @returns {Boolean} Path exists
     */
    static pathExists(path) {
        return this.absolutePathExists(this.getAbsolutePath(path));
    }

    // R methods

    /**
     * Reverses slashes on "/"
     *
     * @since 9.0.0
     * @static
     * @param {String} path - Path
     * @returns {String} Path with reversed slashes "/"
     */
    static reverseSlashes(path) {
        return path.replace(/\\/g, '/');
    }

    // S methods

    /**
     * Returns the stats of the path
     *
     * @since 5.0.0
     * @private
     * @static
     *
     * @param {String} path - Path
     *
     * @returns {{ device: String, isUnc: Boolean, isAbsolute: Boolean, tail: String }}
     */
    static _statPath(path) {
        const deviceRegex = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,
            result = deviceRegex.exec(path),
            device = result[1] || '',
            isUnc = !!device && device[1] !== ':';

        return { device, isUnc, isAbsolute: isUnc || !!result[2], tail: result[3] };
    }

    /**
     * Splits the path
     *
     * @since 5.0.0
     * @private
     * @static
     *
     * @param {String} path - Path
     *
     * @returns {String[]} Splitted path
     */
    static _splitPath(path) {
        const deviceRegex = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,
            tailRegex = /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;

        const result = deviceRegex.exec(path),
            device = (result[1] || '') + (result[2] || ''),
            tail = result[3] || '';

        const result2 = tailRegex.exec(tail),
            dir = result2[1],
            basename = result2[2],
            ext = result2[3];

        return [device, dir, basename, ext];
    }

};

// properties

Object.defineProperties(DKTools.IO, {

    /**
     * File system
     *
     * @readonly
     * @type {Object}
     * @memberof DKTools.IO
     */
    fs: {
        get: function() {
            return this._fs;
        },
        configurable: true
    },

    /**
     * OS
     *
     * @readonly
     * @type {Object}
     * @memberof DKTools.IO
     */
    os: {
        get: function() {
            return this._os;
        },
        configurable: true
    },

    /**
     * Path
     *
     * @readonly
     * @type {Object}
     * @memberof DKTools.IO
     */
    path: {
        get: function() {
            return this._path;
        },
        configurable: true
    },

    /**
     * Provides the platform-specific path segment separator
     * For mobile phones and browsers always returns '/'
     *
     * @since 7.0.0
     * @readonly
     * @type {String}
     * @memberof DKTools.IO
     */
    sep: {
        get: function() {
            return this.isLocalMode() ? this._path.sep : '/';
        },
        configurable: true
    },

    /**
     * Path to the project folder
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.IO
     */
    projectPath: {
        get: function() {
            return this._projectPath;
        },
        configurable: true
    },

    /**
     * File system mode
     *
     * @since 8.0.0
     * @readonly
     * @type {Number}
     * @memberof DKTools.IO
     */
    mode: {
        get: function() {
            return this._mode;
        },
        configurable: true
    },

    /**
     * File system stamp
     *
     * @since 8.0.0
     * @readonly
     * @type {Object}
     * @memberof DKTools.IO
     */
    stamp: {
        get: function() {
            return this._stamp;
        },
        configurable: true
    },

    /**
     * Operation completed successfully
     *
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    OK: { value: 0 },

    /**
     * Expect until an asynchronous operation calls the callback function
     *
     * @since 7.0.0
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    EXPECT_CALLBACK: { value: 1 },

    /**
     * Platform is not equal to NW.js
     *
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_NOT_LOCAL_MODE: { value: 2 },

    /**
     * Path does not exist
     *
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_PATH_DOES_NOT_EXIST: { value: 3 },

    /**
     * The callback function is not available for an asynchronous operation
     *
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_CALLBACK_IS_NOT_AVAILABLE: { value: 4 },

    /**
     * Directory already exists
     *
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_DIRECTORY_ALREADY_EXISTS: { value: 5 },

    /**
     * Directory is not empty
     *
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_DIRECTORY_IS_NOT_EMPTY: { value: 6 },

    /**
     * Overwriting is not available
     *
     * @since 7.0.0
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_OVERWRITING_IS_NOT_AVAILABLE: { value: 7 },

    /**
     * The options are not available for an operation
     *
     * @since 7.0.0
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_OPTIONS_ARE_NOT_AVAILABLE: { value: 8 },

    /**
     * Failed decompressing data
     *
     * @since 7.0.0
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_DECOMPRESSING_DATA: { value: 9 },

    /**
     * Failed parsing data
     *
     * @since 7.0.0
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_PARSING_DATA: { value: 10 },

    /**
     * Nwjs + Stamp file system mode
     *
     * @since 8.0.0
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    MODE_NWJS_STAMP: { value: 0 },

    /**
     * Nwjs file system mode
     *
     * @since 8.0.0
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    MODE_NWJS: { value: 1 }

});




