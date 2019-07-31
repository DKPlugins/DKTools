//===========================================================================
// DKTools.Network
//===========================================================================

/**
 * Network class
 *
 * @since 4.0.0
 * @class DKTools.Network
 * @memberof DKTools
 */
DKTools.Network = class {

    constructor() {
        return DKTools.Network;
    }

    // F methods

    /**
     * Executes the request
     * Promise resolves an ArrayBuffer
     *
     * @static
     * @async
     *
     * @param {String | Request} url - URL or Request
     * @param {Object} [options={}] - Options of request
     *
     * @see fetch
     *
     * @returns {Promise} ArrayBuffer
     */
    static async fetchFile(url, options = {}) {
        return fetch(url, options).then((response) => {
            if (response.ok) {
                return this._toFile(response);
            }

            throw response;
        });
    }

    /**
     * Executes the request
     * Promise resolves a JSON data
     *
     * @static
     * @async
     *
     * @param {String | Request} url - URL or Request
     * @param {Object} [options={}] - Options of request
     *
     * @see fetch
     *
     * @returns {Promise} JSON data
     */
    static async fetchJson(url, options = {}) {
        if (!options.headers) {
            options.headers = {};
        }

        options.headers.Accept = 'application/json';

        return fetch(url, options).then((response) => {
            if (response.ok) {
                return this._toJson(response);
            }

            throw response;
        });
    }

    // T methods

    /**
     * Promise resolves an ArrayBuffer
     *
     * @private
     * @static
     * @async
     *
     * @param {Response} response - Response
     *
     * @returns {Promise} ArrayBuffer
     */
    static async _toFile(response) {
        return response.arrayBuffer().then(data => data, () => null);
    }

    /**
     * Promise resolves a JSON data
     *
     * @private
     * @static
     * @async
     *
     * @param {Response} response - Response
     *
     * @returns {Promise} JSON data
     */
    static async _toJson(response) {
        return response.json().then(data => data, () => null);
    }

};




