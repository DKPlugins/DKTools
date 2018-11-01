//===========================================================================
// initialize plugin commands
//===========================================================================

DKTools.PluginCommandManager.set('DKPluginsCheckUpdates', () => {
    DKTools.Utils.openConsole();
    DKTools.Utils._checkUpdates();
});




