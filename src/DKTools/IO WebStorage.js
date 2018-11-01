//===========================================================================
// DKTools.IO.WebStorage
//===========================================================================

/**
 * Web storage class
 *
 * @class DKTools.IO.WebStorage
 * @memberof DKTools.IO
 */
DKTools.IO.WebStorage = class {

    // E methods

    /**
     * Returns true if the key exists
     *
     * @static
     * @param {String} key - Key
     * @returns {Boolean} Key exists
     */
    static exists(key) {
        return localStorage.hasOwnProperty(key);
    }

    // L methods

    /**
     * Loads a data
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Loaded data (only if the status is equal to DKTools.IO.OK)
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_KEY_IS_NOT_AVAILABLE
     *
     * @static
     *
     * @param {String} key - Key
     * @param {Object} [options={}] - Options of an operation
     *
     * @param {Boolean} [options.decompress] - Use LZString.decompressFromBase64 for a data
     * @param {Boolean} [options.parse] - Use JSON.parse for a data
     *
     * @returns {{ data: Object, status: Number }} Loded data
     */
    static load(key, options = {}) {
        if (!this.exists(key)) {
            return { data: null, status: DKTools.IO.ERROR_KEY_IS_NOT_AVAILABLE };
        }

        let data = localStorage.getItem(key);

        if (data) {
            if (options.decompress) {
                data = LZString.decompressFromBase64(data);
            }

            if (options.parse) {
                data = JSON.parse(data);
            }
        }

        return { data, status: DKTools.IO.OK };
    }

    // R methods

    /**
     * Removes a data
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_KEY_IS_NOT_AVAILABLE
     *
     * @static
     * @param {String} key - Key
     * @returns {Number} Code of the result of an operation
     */
    static remove(key) {
        if (!this.exists(key)) {
            return DKTools.IO.ERROR_KEY_IS_NOT_AVAILABLE;
        }

        localStorage.removeItem(key);

        return DKTools.IO.OK;
    }

    /**
     * Renames a data
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_KEY_IS_NOT_AVAILABLE
     * DKTools.IO.ERROR_NEW_NAME_IS_NOT_AVAILABLE
     *
     * @static
     * @param {String} oldKey - Old key
     * @param {String} newKey - New key
     * @returns {Number} Code of the result of an operation
     */
    static rename(oldKey, newKey) {
        if (!this.exists(oldKey)) {
            return DKTools.IO.ERROR_KEY_IS_NOT_AVAILABLE;
        }

        if (this.exists(newKey) || newKey == null) {
            return DKTools.IO.ERROR_NEW_NAME_IS_NOT_AVAILABLE;
        }

        const data = localStorage.getItem(oldKey);

        localStorage.setItem(newKey, data);
        localStorage.removeItem(oldKey);

        return DKTools.IO.OK;
    }

    // S methods

    /**
     * Saves the data
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_KEY_IS_NOT_AVAILABLE
     *
     * @version 3.0.0
     * @static
     *
     * @param {String} key - Key
     * @param {*} data - Data to save
     * @param {Object} [options={}] - Options of an operation
     *
     * @param {Boolean} [options.stringify] - Use JSON.stringify for the data
     * @param {Boolean} [options.compress] - Use LZString.compressToBase64 for the data
     *
     * @returns {Number} Code of the result of an operation
     */
    static save(key, data, options = {}) {
        if (key == null || key === '') {
            return DKTools.IO.ERROR_KEY_IS_NOT_AVAILABLE;
        }

        if (options.stringify) {
            data = JSON.stringify(data);
        }

        if (options.compress) {
            data = LZString.compressToBase64(data);
        }

        localStorage.setItem(key, data);

        return DKTools.IO.OK;
    }

};





