//===========================================================================
// initialize plugin commands
//===========================================================================

DKTools.PluginCommandManager.set('UpdateFileSystemStamp', () => {
    DKTools.IO._createStamp();
});


