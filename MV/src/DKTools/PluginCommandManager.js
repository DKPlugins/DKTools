//===========================================================================
// DKTools.PluginCommandManager
//===========================================================================

/**
 * Plugin command manager class
 * @since 3.0.0
 * @class
 * @memberof DKTools
 */
DKTools.PluginCommandManager = class {

    constructor() {
        return DKTools.PluginCommandManager;
    }

    // H methods

    /**
     * Returns true if the command has the handler
     * @static
     * @param {String} pluginCommand - Name of the command
     * @return {Boolean} Command has the handler
     */
    static has(pluginCommand) {
        return !!this._pluginCommands[pluginCommand.toLowerCase()];
    }

    // P methods

    /**
     * Processes the handler of the command
     * @version 9.0.0
     * @static
     * @param {Game_Interpreter} gameInterpreter - Interpreter
     * @param {String} pluginCommand - Name of the command
     * @param {Array} args - Arguments of the command
     */
    static process(gameInterpreter, pluginCommand, args) {
        if (!pluginCommand) {
            throw new Error(`Empty plugin command!`);
        }

        const handler = this._pluginCommands[pluginCommand.toLowerCase()];

        if (DKTools.Utils.isFunction(handler)) {
            handler.call(gameInterpreter, args);
        }
    }

    // S methods

    /**
     * Sets the handler of the plugin command
     * @static
     * @param {String} pluginCommand - Name of the command
     * @param {Function} handler - Handler of the command
     */
    static set(pluginCommand, handler) {
        this._pluginCommands[pluginCommand.toLowerCase()] = handler;
    }

};

// properties

Object.defineProperties(DKTools.PluginCommandManager, {

    /**
     * Plugin commands
     *
     * @private
     * @readonly
     * @type {Object}
     * @memberof DKTools.PluginCommandManager
     */
    _pluginCommands: { value: {} }

});


