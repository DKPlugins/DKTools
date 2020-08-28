//===========================================================================
// DKTools.Audio
//===========================================================================

/**
 * Audio file class
 *
 * @class DKTools.Audio
 *
 * @deprecated 9.1.0
 * @memberof DKTools
 *
 * @param {DKTools.Audio | Object} object - DKTools.Audio or object with parameters
 *
 * @param {String} object.type - Type of the audio file (bgm, bgs, se, me)
 * @param {String} object.name - Name of the audio file
 * @param {Number} [object.volume] - Volume of the audio file
 * @param {Number} [object.pitch] - Pitch of the audio file
 * @param {Number} [object.pan] - Panorama of the audio file
 * @param {Boolean} [object.loop] - Looping of the audio file
 */
DKTools.Audio = class {

    constructor() {
        this.initialize.apply(this, arguments);
    }

    // initialize methods

    /**
     * Initializes the audio file
     *
     * @version 6.0.0
     *
     * @param {DKTools.Audio | Object} object - DKTools.Audio or object with parameters
     *
     * @param {Number | String | *} object.id - ID of the audio file
     * @param {String} object.type - Type of the audio file
     * @param {String} object.name - Name of the audio file
     * @param {Number} [object.volume=this.standardVolume()] - Volume of the audio file
     * @param {Number} [object.pitch=this.standardPitch()] - Pitch of the audio file
     * @param {Number} [object.pan=this.standardPan()] - Panorama of the audio file
     * @param {Boolean} [object.loop=this.standardLoop()] - Looping of the audio file
     */
    initialize(object) {
        object = object || {};

        /**
         * @since 6.0.0
         * @private
         * @readonly
         * @type {String}
         */
        this._id = object.id;

        /**
         * @private
         * @readonly
         * @type {String}
         */
        this._type = object.type.toLowerCase();

        /**
         * @private
         * @readonly
         * @type {String}
         */
        this._name = object.name;

        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._volume = _.defaultTo(object.volume, this.standardVolume());

        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._pitch = _.defaultTo(object.pitch, this.standardPitch());

        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._pan = _.defaultTo(object.pan, this.standardPan());

        /**
         * @private
         * @readonly
         * @type {Boolean}
         */
        this._loop = _.defaultTo(object.loop, this.standardLoop());

        /**
         * @private
         * @readonly
         * @type {WebAudio}
         */
        this._buffer = this._createBuffer();

        /**
         * @private
         * @readonly
         * @type {Number | null}
         */
        this._pausePos = null;
    }

    // C methods

    /**
     * Creates the audio buffer
     * Returns the created buffer
     *
     * @version 3.0.0
     * @private
     * @returns {WebAudio} Created buffer
     */
    _createBuffer() {
        return AudioManager.createBuffer(this._type, this._name);
    }

    /**
     * Clones the audio file
     *
     * @returns {DKTools.Audio} Cloned audio file
     */
    clone() {
        return new DKTools.Audio(this);
    }

    // E methods

    /**
     * Returns true if the audio files objects are equal
     *
     * @param {DKTools.Audio | Object} object - DKTools.Audio or object with parameters
     *
     * @param {String} object.type - Type of the audio file
     * @param {String} object.name - Name of the audio file
     * @param {Number} object.volume - Volume of the audio file
     * @param {Number} object.pitch - Pitch of the audio file
     * @param {Number} object.pan - Panorama of the audio file
     * @param {Boolean} object.loop - Looping of the audio file
     *
     * @returns {Boolean} Audio files objects are equal
     */
    equals(object) {
        if (!object) {
            return false;
        }

        return this._type === object.type && this._name === object.name &&
            this._volume === object.volume && this._pitch === object.pitch &&
            this._pan === object.pan && this._loop === object.loop;
    }

    // F methods

    /**
     * Performs the audio file fade-in
     *
     * @param {Number} [duration=0] - Fade-in time in seconds
     *
     * @see WebAudio.prototype.fadeIn
     */
    fadeIn(duration = 0) {
        this._buffer.fadeIn(duration);
    }

    /**
     * Performs the audio file fade-out
     *
     * @param {Number} [duration=0] - Fade-out time in seconds
     *
     * @see WebAudio.prototype.fadeOut
     */
    fadeOut(duration = 0) {
        this._buffer.fadeOut(duration);
    }

    // I methods

    /**
     * Returns true if the audio file is paused
     *
     * @returns {Boolean} Audio file is paused
     */
    isPaused() {
        return !this.isPlaying() && this._pausePos != null;
    }

    /**
     * Returns true if the audio file is playing
     *
     * @see WebAudio.prototype.isPlaying
     *
     * @returns {Boolean} Audio file is playing
     */
    isPlaying() {
        return this._buffer.isPlaying();
    }

    // P methods

    /**
     * Pauses the audio file
     */
    pause() {
        if (this.isPlaying()) {
            this._pausePos = this.seek();

            this.stop();
        }
    }

    /**
     * Plays the audio file
     *
     * @param {Number} [pos = 0] - Playback position
     *
     * @see WebAudio.prototype.play
     */
    play(pos = 0) {
        this._buffer.play(this._loop, pos);
        this._updateBufferParameters();

        this._pausePos = null;
    }

    // R methods

    /**
     * Continues playing the audio file
     */
    resume() {
        if (this.isPaused()) {
            this.play(this._pausePos);
        }
    }

    // S methods

    /**
     * Returns the current position of the audio file
     *
     * @see WebAudio.prototype.seek
     *
     * @returns {Number} Current position of the audio file
     */
    seek() {
        return this._buffer.seek();
    }

    /**
     * Returns the standard looping of the audio file
     *
     * @returns {Boolean} Standard looping of the audio file
     */
    standardLoop() {
        return this._type === 'bgm' || this._type === 'bgs';
    }

    /**
     * Returns the standard panorama of the audio file
     *
     * @returns {Number} Standard panorama of the audio file
     */
    standardPan() {
        return 0;
    }

    /**
     * Returns the standard pitch of the audio file
     *
     * @returns {Number} Standard pitch of the audio file
     */
    standardPitch() {
        return 100;
    }

    /**
     * Returns the standard volume of the audio file
     *
     * @returns {Number} Standard volume of the audio file
     */
    standardVolume() {
        return 90;
    }

    /**
     * Stops the audio file
     *
     * @see WebAudio.prototype.stop
     */
    stop() {
        if (this.isPlaying()) {
            this._buffer.stop();
        }
    }

    // U methods

    /**
     * Updates the buffer parameters (volume, pitch and panorama)
     *
     * @private
     */
    _updateBufferParameters() {
        const buffer = this._buffer;
        let configVolume = AudioManager[this._type + 'Volume'];

        if (!Number.isFinite(configVolume)) {
            configVolume = 100;
        }

        buffer.volume = configVolume * this._volume / 10000;
        buffer.pitch = this._pitch / 100;
        buffer.pan = this._pan / 100;
    }

};

// properties

Object.defineProperties(DKTools.Audio.prototype, {

    /**
     * ID of the audio file
     *
     * @since 6.0.0
     * @readonly
     * @type {String}
     * @memberof DKTools.Audio.prototype
     */
    id: {
        get: function() {
            return this._id;
        },
        configurable: true
    },

    /**
     * Type of the audio file
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.Audio.prototype
     */
    type: {
        get: function() {
            return this._type;
        },
        configurable: true
    },

    /**
     * Name of the audio file
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.Audio.prototype
     */
    name: {
        get: function() {
            return this._name;
        },
        configurable: true
    },

    /**
     * Volume of the audio file
     *
     * @type {Number}
     * @memberof DKTools.Audio.prototype
     */
    volume: {
        get: function() {
            return this._volume;
        },
        set: function(value) {
            if (this._volume !== value) {
                this._volume = value;
                this._updateBufferParameters();
            }

        },
        configurable: true
    },

    /**
     * Pitch of the audio file
     *
     * @type {Number}
     * @memberof DKTools.Audio.prototype
     */
    pitch: {
        get: function() {
            return this._pitch;
        },
        set: function(value) {
            if (this._pitch !== value) {
                this._pitch = value;
                this._updateBufferParameters();
            }
        },
        configurable: true
    },

    /**
     * Panorama of the audio file
     *
     * @type {Number}
     * @memberof DKTools.Audio.prototype
     */
    pan: {
        get: function() {
            return this._pan;
        },
        set: function(value) {
            if (this._pan !== value) {
                this._pan = value;
                this._updateBufferParameters();
            }
        },
        configurable: true
    },

    /**
     * Looping of the audio file
     *
     * @readonly
     * @type {Boolean}
     * @memberof DKTools.Audio.prototype
     */
    loop: {
        get: function() {
            return this._loop;
        },
        configurable: true
    },

    /**
     * Buffer
     *
     * @readonly
     * @type {WebAudio}
     * @memberof DKTools.Audio.prototype
     */
    buffer: {
        get: function() {
            return this._buffer;
        },
        configurable: true
    },

    /**
     * Current position of the audio file
     *
     * @type {Number}
     * @memberof DKTools.Audio.prototype
     */
    pos: {
        get: function() {
            return this.seek();
        },
        set: function(value) {
            this.play(value);
        },
        configurable: true
    }

});





