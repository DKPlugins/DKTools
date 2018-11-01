//===========================================================================
// DKTools.Utils.Event
//===========================================================================

/**
 * The static class that defines the functions for an events
 *
 * @since 3.0.0
 *
 * @class DKTools.Utils.Event
 * @memberof DKTools.Utils
 */
DKTools.Utils.Event = class {

    // G methods

    /**
     * Returns the comments of the all pages
     *
     * @static
     *
     * @param {Number | Game_Event} event - Event ID or Game_Event
     *
     * @example
     * var eventId = 1;
     *
     * DKTools.Utils.Event.getAllComments(eventId);
     *
     * @example
     * var eventId = 1;
     * var event = $gameMap.event(eventId);
     *
     * DKTools.Utils.Event.getAllComments(event);
     *
     * @returns {Object} Сomments of the all pages
     */
    static getAllComments(event) {
        if (Number.isFinite(event)) {
            event = $gameMap.events()[event];
        }

        if (!event) {
            return [];
        }

        if (event instanceof Game_Event) {
            event = event.event();
        }

        return _.reduce(event.pages, (acc, page, index) => {
            acc[index + 1] = _.reduce(page.list, (comments, command) => {
                if (command.code === 108 || command.code === 408) {
                    comments.push(command.parameters[0]);
                }

                return comments;
            }, []);

            return acc;
        }, {});
    }

    /**
     * Returns the comments of the current page
     *
     * @version 3.1.0
     * @static
     *
     * @param {Number | Game_Event} event - Event ID or Game_Event
     *
     * @example
     * var eventId = 1;
     *
     * DKTools.Utils.Event.getComments(eventId);
     *
     * @example
     * var eventId = 1;
     * var event = $gameMap.event(eventId);
     *
     * DKTools.Utils.Event.getComments(event);
     *
     * @returns {String[]} Сomments of the current page
     */
    static getComments(event) {
        if (Number.isFinite(event)) {
            event = $gameMap.events()[event];
        }

        if (!event || !event.page()) {
            return [];
        }

        return _.reduce(event.list(), (comments, command) => {
            if (command.code === 108 || command.code === 408) {
                comments.push(command.parameters[0]);
            }

            return comments;
        }, []);
    }

};




