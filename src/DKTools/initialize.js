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
 * Button class
 *
 * @class DKTools.Sprite.Button
 * @extends DKTools.Sprite
 *
 * @override
 * @constructor
 *
 * @memberof DKTools.Sprite
 *
 * @see DKTools.Sprite.Button.prototype.initialize
 */
DKTools.Sprite.Button = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 * Cursor class
 *
 * @class DKTools.Sprite.Cursor
 * @extends DKTools.Sprite
 *
 * @override
 * @constructor
 *
 * @memberof DKTools.Sprite
 *
 * @see DKTools.Sprite.Cursor.prototype.initialize
 */
DKTools.Sprite.Cursor = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 * Arrow class
 *
 * @class DKTools.Sprite.Arrow
 * @extends DKTools.Sprite.Button
 *
 * @override
 * @constructor
 *
 * @memberof DKTools.Sprite
 *
 * @see DKTools.Sprite.Arrow.prototype.initialize
 */
DKTools.Sprite.Arrow = function(object, y) {
    this.initialize.apply(this, arguments);
};

/**
 * Selectable class
 *
 * @class DKTools.Sprite.Selectable
 * @extends DKTools.Sprite.Button
 *
 * @override
 * @constructor
 *
 * @memberof DKTools.Sprite
 *
 * @see DKTools.Sprite.Selectable.prototype.initialize
 */
DKTools.Sprite.Selectable = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 * Progress bar class
 *
 * @class DKTools.Sprite.ProgressBar
 * @extends DKTools.Sprite
 *
 * @override
 * @constructor
 *
 * @memberof DKTools.Sprite
 *
 * @see DKTools.Sprite.ProgressBar.prototype.initialize
 */
DKTools.Sprite.ProgressBar = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 * Progress bar class
 *
 * @class DKTools.Sprite.ProgressBar.Rectangle
 * @extends DKTools.Sprite.ProgressBar
 *
 * @override
 * @constructor
 *
 * @memberof DKTools.Sprite.ProgressBar
 *
 * @see DKTools.Sprite.ProgressBar.Rectangle.prototype.initialize
 */
DKTools.Sprite.ProgressBar.Rectangle = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 * Progress bar class
 *
 * @class DKTools.Sprite.ProgressBar.Circle
 * @extends DKTools.Sprite.ProgressBar
 *
 * @override
 * @constructor
 *
 * @memberof DKTools.Sprite.ProgressBar
 *
 * @see DKTools.Sprite.ProgressBar.Circle.prototype.initialize
 */
DKTools.Sprite.ProgressBar.Circle = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 * Progress bar class
 *
 * @class DKTools.Sprite.ProgressBar.SemiCircle
 * @extends DKTools.Sprite.ProgressBar.Circle
 *
 * @override
 * @constructor
 *
 * @memberof DKTools.Sprite.ProgressBar
 *
 * @see DKTools.Sprite.ProgressBar.SemiCircle.prototype.initialize
 */
DKTools.Sprite.ProgressBar.SemiCircle = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 * Checkbox class
 *
 * @class DKTools.Sprite.CheckBox
 * @extends DKTools.Sprite.Button
 *
 * @override
 * @constructor
 *
 * @memberof DKTools.Sprite
 *
 * @see DKTools.Sprite.CheckBox.prototype.initialize
 */
DKTools.Sprite.CheckBox = function(object, y) {
    this.initialize.apply(this, arguments);
};

/**
 * Viewport class
 *
 * @class DKTools.Viewport
 * @extends DKTools.Sprite
 *
 * @override
 * @constructor
 *
 * @memberof DKTools
 *
 * @see DKTools.Viewport.prototype.initialize
 */
DKTools.Viewport = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 * Layout class
 *
 * @class DKTools.Layout
 * @extends DKTools.Sprite
 *
 * @override
 * @constructor
 *
 * @memberof DKTools
 *
 * @see DKTools.Layout.prototype.initialize
 */
DKTools.Layout = function(object, y) {
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
 * Window selectable class
 *
 * @class DKTools.Window.Selectable
 * @extends DKTools.Window
 *
 * @override
 * @constructor
 *
 * @memberof DKTools.Window
 *
 * @see DKTools.Window.Selectable.prototype.initialize
 */
DKTools.Window.Selectable = function(object, y, width, height) {
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




