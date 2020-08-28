//===========================================================================
// DKTools
//===========================================================================

/**
 * @global
 * @namespace DKTools
 * @type {Object}
 */
window.DKTools = {};

// properties

Object.defineProperties(DKTools, {

    /**
     * DKPlugins site url
     *
     * @since 6.0.0
     * @constant
     * @type {String}
     * @memberof DKTools
     */
    SITE: { value: 'https://dk-plugins.ru' },

    /**
     * Version of DKTools
     *
     * @constant
     * @type {String}
     * @memberof DKTools
     */
    VERSION: { value: Imported.DKTools }

});

// classes

/**
 * Sprite class
 *
 * @class DKTools.Sprite
 * @extends DKTools.Base
 *
 * @override
 * @constructor
 *
 * @memberof DKTools
 *
 * @see DKTools.Sprite.prototype.initialize
 */
DKTools.Sprite = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 * Window class
 *
 * @class DKTools.Window
 * @extends DKTools.Base
 *
 * @override
 * @constructor
 *
 * @memberof DKTools
 *
 * @see DKTools.Window.prototype.initialize
 */
DKTools.Window = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 * Scene class
 *
 * @class DKTools.Scene
 * @extends Scene_Base
 *
 * @constructor
 *
 * @memberof DKTools
 */
DKTools.Scene = function() {
    this.initialize.apply(this, arguments);
};




