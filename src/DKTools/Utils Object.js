//===========================================================================
// DKTools.Utils.Object
//===========================================================================

/**
 * The static class that defines utility methods for Object class
 *
 * @since 6.0.0
 *
 * @class DKTools.Utils.Object
 * @memberof DKTools.Utils
 */
DKTools.Utils.Object = class {

    // T methods

    /**
     * Converts the properties to camelcase
     * Returns the object with converted properties
     *
     * @static
     *
     * @param {Object} object - Object
     *
     * @returns {Object} Object with converted properties
     */
    static toCamelCase(object) {
        _.forEach(_.keys(object), key => {
            const camelCaseKey = _.camelCase(key);

            if (camelCaseKey !== key) {
                object[camelCaseKey] = object[key];

                delete object[key];
            }
        });

        return object;
    }

};




