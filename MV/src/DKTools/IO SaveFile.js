
/**
 * Save file class
 * @class
 * @extends DKTools.IO.File
 * @memberof DKTools.IO
 */
DKTools.IO.SaveFile = class extends DKTools.IO.File {

    /**
     * Initializes the save file
     * @override
     * @param {String} fullPath - Path to file
     */
    initialize(fullPath = '') {
        super.initialize(`save/${fullPath}.rpgsave`);
    }

};


