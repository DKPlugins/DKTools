//===========================================================================
// initialize plugin commands
//===========================================================================

PluginManager.registerCommand('DKTools', 'UpdateFileSystemStamp', () => {
    DKTools.IO._createStamp().then(() => {
        window.alert('System stamp updated!');
    });
});


