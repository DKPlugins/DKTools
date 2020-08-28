//===========================================================================
// DKTools.Utils.Object
//===========================================================================

/**
 * The static class that defines utility methods for Object class
 *
 * @deprecated 9.2.0
 * @since 6.0.0
 *
 * @class DKTools.Utils.Object
 * @memberof DKTools.Utils
 */
DKTools.Utils.Object = class {

    // T methods

    /**
     * Converts the properties to camelcase
     * Returns the new object with converted properties
     *
     * @version 8.1.0
     * @static
     *
     * @param {Object} object - Object
     *
     * @returns {Object} New object with converted properties
     */
    static toCamelCase(object) {
        return _.reduce(object, (acc, value, key) => ({ ...acc, [_.camelCase(key)]: value }), {});
    }

};




