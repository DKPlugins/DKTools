//===========================================================================
// DKTools.IO
//===========================================================================

/**
 * File system class
 * @class
 * @memberof DKTools
 */
DKTools.IO = class {

    constructor() {
        return DKTools.IO;
    }

    // initialize methods

    /**
     * @version 11.2.4
     * @static
     */
    static initialize() {
        let projectPath = '';

        /**
         * @private
         * @readonly
         * @type {Boolean}
         */
        this._isReady = false;

        if (Utils.isNwjs()) {
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

            projectPath = this.joinPath(this.path.dirname(process.mainModule.filename), '/');
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

        if (!DKToolsParam.get('File System', 'Disable Auto Create Stamp')) {
            this._createStamp();
        }

        this._isReady = true;
    }

    // A methods

    /**
     * Returns true if the absolute path exists
     * @version 8.0.0
     * @since 3.0.0
     * @static
     * @param {String} path - Path
     * @return {Boolean} Absolute path exists
     */
    static absolutePathExists(path) {
        if (Utils.isNwjs()) {
            return this.fs.existsSync(path);
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
     * @version 11.2.1
     * @since 8.0.0
     * @async
     * @private
     * @static
     */
    static async _createStamp() {
        if (!Utils.isTest() || !Utils.isNwjs() || this.mode === DKTools.IO.MODE_NWJS) {
            return;
        }

        const ignoredDirectories = DKToolsParam.get('File System', 'Ignored Directories')
                                                .filter(path => !['locales'].includes(path))
                                                .map(path => new DKTools.IO.Directory(path));
        const directory = DKTools.IO.getRootDirectory();
        const file = new DKTools.IO.File('data/Stamp.json');
        const stamp = {};

        const processDirectory = async (directory) => {
            const entities = await directory.getAllAsync().then(result => result.data);

            for (const entity of entities) {
                const isDirectory = entity.isDirectory();

                if (isDirectory) {
                    if (ignoredDirectories.some(dir => dir.equals(entity))) {
                        continue;
                    }
                }

                const stats = await entity.getStatsAsync().then(result => result.data);
                const fullPath = entity.getFullPath().substring(1).split(DKTools.IO.sep);

                if (isDirectory) {
                    _.set(stamp, fullPath, { __stats__: { ...stats, type: 'directory' } });
                } else {
                    _.set(stamp, fullPath, { __stats__: { ...stats, type: 'file' } });
                }

                if (isDirectory) {
                    await processDirectory(entity);
                }
            }
        };

        await processDirectory(directory);
        await file.saveJsonAsync(stamp, { compress: true });

        this._stamp = stamp;
    }

    // G methods

    /**
     * Returns the project directory
     * @since 4.0.0
     * @static
     * @return {DKTools.IO.Directory} Project directory
     */
    static getRootDirectory() {
        return new DKTools.IO.Directory();
    }

    /**
     * Returns the absolute path to file or directory
     * @since 3.0.0
     * @static
     * @param {String} path - Path
     * @return {String} Absolute path to file or directory
     */
    static getAbsolutePath(path) {
        const absolutePath = this.joinPath(this._projectPath, (path || ''));

        return this.normalizePath(absolutePath);
    }

    // I methods

    /**
     * Returns true if the full path is a file
     * @version 11.2.3
     * @static
     * @param {String} fullPath - Path to file
     * @return {Boolean} Full path is a file
     */
    static isFile(fullPath) {
        if (Utils.isNwjs()) {
            const absolutePath = this.getAbsolutePath(fullPath);

            if (this.absolutePathExists(absolutePath)) {
                return this.fs.lstatSync(absolutePath).isFile();
            }
        } else if (this.mode === DKTools.IO.MODE_NWJS_STAMP) {
            const parts = this.normalizePath(fullPath).split(DKTools.IO.sep).filter(part => !!part);
            const extension = _.last(parts);

            if (extension.includes('.')) {
                return _.get(this._stamp, parts.concat('__stats__'), {}).type === 'file';
            }
        }

        return false;
    }

    /**
     * Returns true if the full path is a directory
     * @version 11.2.3
     * @static
     * @param {String} fullPath - Path to directory
     * @return {Boolean} Full path is a directory
     */
    static isDirectory(fullPath) {
        if (Utils.isNwjs()) {
            const absolutePath = this.getAbsolutePath(fullPath);

            if (this.absolutePathExists(absolutePath)) {
                return this.fs.lstatSync(absolutePath).isDirectory();
            }
        } else if (this.mode === DKTools.IO.MODE_NWJS_STAMP) {
            const parts = this.normalizePath(fullPath).split(DKTools.IO.sep).filter(part => !!part);
            const extension = _.last(parts);

            if (!extension.includes('.')) {
                return _.get(this._stamp, parts.concat('__stats__'), {}).type === 'directory';
            }
        }

        return false;
    }

    /**
     * Returns true if the manager is ready
     * @since 11.2.4
     * @static
     * @return {Boolean} Manager is ready
     */
    static isReady() {
        return this._isReady;
    }

    // J methods

    /**
     * Joins all given path segments together using the platform specific separator as a delimiter,
     * then normalizes the resulting path.
     * @since 5.0.0
     * @static
     * @param {...String} paths - Path segments
     * @return {String}
     */
    static joinPath() {
        if (Utils.isNwjs()) {
            return this.path.join(...arguments);
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
     * @since 8.0.0
     * @private
     * @static
     */
    static _loadStamp() {
        if (Utils.isNwjs() || this.mode === DKTools.IO.MODE_NWJS) {
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
     * @version 11.2.3
     * @static
     * @param {String} path - Path for normalize
     * @param {Boolean} [reverseSlash=false] - Reversing slash
     * @return {String} Normalized path
     */
    static normalizePath(path, reverseSlash = false) {
        if (Utils.isNwjs()) {
            const normalizedPath = this.path.normalize(path);

            if (!reverseSlash) {
                return normalizedPath;
            }

            return normalizedPath.replace(/\\/g, '/');
        }

        const result = this._statPath(path),
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

        if (result.isUnc) {
            device = '\\\\' + device.replace(/^[\\\/]+/, '')
                                     .replace(/[\\\/]+/g, '\\');
        }

        let fullPath = (device + (isAbsolute ? '\\' : '') + tail)
        .replace(/\\/g, DKTools.IO.sep);

        if (fullPath[0] === DKTools.IO.sep) {
            fullPath = fullPath.substring(1);
        }

        return fullPath;
    }

    // P methods

    /**
     * Returns an object whose properties represent significant elements of the path.
     * Trailing directory separators are ignored.
     * @since 5.0.0
     * @static
     * @param {String} path - Path
     * @return {{ root: String, dir: String, base: String, ext: String, name: String }}
     */
    static parsePath(path) {
        if (Utils.isNwjs()) {
            return this.path.parse(path);
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
     * @return {Boolean} Path exists
     */
    static pathExists(path) {
        return this.absolutePathExists(this.getAbsolutePath(path));
    }

    // R methods

    /**
     * Reverses slashes on "/"
     * @since 9.0.0
     * @static
     * @param {String} path - Path
     * @return {String} Path with reversed slashes "/"
     */
    static reverseSlashes(path) {
        return path.replace(/\\/g, '/');
    }

    // S methods

    /**
     * Returns the stats of the path
     * @since 5.0.0
     * @private
     * @static
     * @param {String} path - Path
     * @return {{ device: String, isUnc: Boolean, isAbsolute: Boolean, tail: String }}
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
     * @since 5.0.0
     * @private
     * @static
     * @param {String} path - Path
     * @return {String[]} Splitted path
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
     * For mobile phones and browsers always return '/'
     * @since 7.0.0
     * @readonly
     * @type {String}
     * @memberof DKTools.IO
     */
    sep: {
        get: function() {
            return Utils.isNwjs() ? this.path.sep : '/';
        },
        configurable: true
    },

    /**
     * Path to the project folder
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
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    OK: { value: 0 },

    /**
     * Expect until an asynchronous operation calls the callback function
     * @since 7.0.0
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    EXPECT_CALLBACK: { value: 1 },

    /**
     * Platform is not equal to NW.js
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_NOT_LOCAL_MODE: { value: 2 },

    /**
     * Path does not exist
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_PATH_DOES_NOT_EXIST: { value: 3 },

    /**
     * The callback function is not available for an asynchronous operation
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_CALLBACK_IS_NOT_AVAILABLE: { value: 4 },

    /**
     * Directory already exists
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_DIRECTORY_ALREADY_EXISTS: { value: 5 },

    /**
     * Directory is not empty
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_DIRECTORY_IS_NOT_EMPTY: { value: 6 },

    /**
     * Overwriting is not available
     * @since 7.0.0
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_OVERWRITING_IS_NOT_AVAILABLE: { value: 7 },

    /**
     * The options are not available for an operation
     * @since 7.0.0
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_OPTIONS_ARE_NOT_AVAILABLE: { value: 8 },

    /**
     * Failed decompressing data
     * @since 7.0.0
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_DECOMPRESSING_DATA: { value: 9 },

    /**
     * Failed parsing data
     * @since 7.0.0
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_PARSING_DATA: { value: 10 },

    /**
     * Nwjs + Stamp file system mode
     * @since 8.0.0
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    MODE_NWJS_STAMP: { value: 0 },

    /**
     * Nwjs file system mode
     * @since 8.0.0
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    MODE_NWJS: { value: 1 }

});


