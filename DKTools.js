/*
Title: DKTools
Author: DK (Denis Kuznetsov)
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 1.0
Release: 13.01.2018
First release: 13.01.2016
Supported languages: Russian, English
*/

/*ru
Название: DKTools
Автор: DK (Денис Кузнецов)
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 1.0
Релиз: 13.01.2018
Первый релиз: 13.01.2016
Поддерживаемые языки: Русский, Английский
*/

/*:
* @plugindesc v.1.0 Library for RPG Maker. Made with ♥ by DKPlugins
* @author DK (Denis Kuznetsov)
* @help

 ### Info about plugin ###
 Title: DKTools
 Author: DK (Denis Kuznetsov)
 Site: https://dk-plugins.ru
 Version: 1.0
 Release: 13.01.2018
 First release: 13.01.2016
 Supported languages: Russian, English
 Thank you for your support: https://dk-plugins.ru/donate

 ### Requirements and dependencies ###
 The presence of lodash.js in the js/libs/
 Version of RPG Maker 1.5+

 ### 1 ### Installation ###
 1. Copy lodash.js to the js/libs/ of your project
 2. Copy DKTools.js to the js/plugins/ of your project
 3. Enable DKTools in the plugin manager
 4. Add at least one game language in the parameters of the DKTools

 ### 2 ### Templates for the filename of the screenshot ###
 %year - Year
 %month - Month
 %day - Day
 %hours - Hours
 %minutes - Minutes
 %seconds - Seconds

 ### Elements ###
 DKTools.Utils
 DKTools.Utils.String
 DKTools.Utils.Array
 DKTools.Utils.Bitmap
 DKTools.Utils.Point
 DKTools.Utils.Rectangle
 DKTools.Utils.Random
 DKTools.Utils.Sequence
 DKTools.Utils.Sequence.Alphabet
 DKTools.ParameterManager
 DKTools.PluginManager
 DKTools.IO
 DKTools.IO.Entity
 DKTools.IO.File
 DKTools.IO.Directory
 DKTools.IO.WebStorage
 DKTools.Localization
 DKTools.Audio
 DKTools.Event
 DKTools.Animation
 DKTools.Animation.Action
 DKTools.Base
 DKTools.Sprite
 DKTools.Sprite.Button
 DKTools.Sprite.Cursor
 DKTools.Sprite.Arrow
 DKTools.Sprite.Selectable
 DKTools.Sprite.ProgressBar
 DKTools.Sprite.ProgressBar.Rectangle
 DKTools.Sprite.ProgressBar.Circle
 DKTools.Sprite.ProgressBar.SemiCircle
 DKTools.Sprite.CheckBox
 DKTools.Viewport
 DKTools.Layout
 DKTools.Window
 DKTools.Window.Selectable
 DKTools.Scene

 ### License and terms of use ###

 Recent information about the terms of use: https://dk-plugins.ru/terms-of-use

 You can:
 -Free use the plugin for your commercial and non commercial projects.
 -Translate the plugin to other languages (please, inform, if you do this)

 You can't:
 -Delete or change any information about plugin (Title, authorship, contact information, version and release)
 -Change code of plugin out of border "Plugin settings" and "End of plugin settings" (if you found a bug contact me)

 * @param Localization
 * @text Localization
 * @default ---------------------------------

 * @param Languages
 * @text Game languages
 * @parent Localization
 * @desc List of game languages
 * @type struct<Language>[]
 * @default ["{\"Language\":\"English\",\"Locale\":\"en\",\"Primary\":\"true\"}"]

 * @param Local Path
 * @text Local path
 * @parent Localization
 * @desc Local path to save the language of the game
 * @default save/

 * @param Local Filename
 * @text Local filename
 * @parent Localization
 * @desc The name of the local file to save the language of the game
 * @default locale.rpgsave

 * @param Web Filename
 * @text Web filename
 * @parent Localization
 * @desc The name of the web file to save the language of the game
 * @default RPG Locale

 * @param Debug
 * @text Debug
 * @default ---------------------------------

 * @param Open Console
 * @text Debug console
 * @parent Debug
 * @desc Open the debug console when the game starts?
 * @type boolean
 * @default false

 * @param Show FPS
 * @parent Debug
 * @desc Show the FPS counter when the game starts?
 * @type boolean
 * @default false

 * @param Functions
 * @default ---------------------------------

 * @param Screen
 * @parent Functions
 * @desc Screen settings
 * @type struct<Screen>
 * @default {"Screen Resolution":"false","Screen Width":"816","Screen Height":"624"}

 * @param Quick Start
 * @parent Functions
 * @desc Quick Start
 * @type struct<QuickStart>
 * @default {"Quick Start":"false","Scene Name":"Scene_Map","Skip Saves":"false"}

 * @param Screenshots
 * @parent Functions
 * @desc Screenshots
 * @type struct<Screenshots>
 * @default {"Take Screenshot":"false","Screenshot Key Code":"44","Screenshot Path":"screenshots/","Screenshot Filename":"%year_%month_%day_%hours_%minutes_%seconds.png"}

*/

/*:ru
* @plugindesc v.1.0 Библиотека для RPG Maker. Сделано с ♥ от DKPlugins
* @author DK (Денис Кузнецов)
* @help

 ### Информация о плагине ###
 Название: DKTools
 Автор: DK (Денис Кузнецов)
 Сайт: https://dk-plugins.ru
 Версия: 1.0
 Релиз: 13.01.2018
 Первый релиз: 13.01.2016
 Поддерживаемые языки: Русский, Английский
 Спасибо за Вашу поддержку: https://dk-plugins.ru/donate

 ### Требования и зависимости ###
 Наличие lodash.js в папке js/libs/
 Версия мейкера 1.5+

 ### 1 ### Установка ###
 1. Скопировать lodash.js в папку js/libs/ вашего проекта
 2. Скопировать DKTools.js в папку js/plugins/ вашего проекта
 3. Включить плагин DKTools в менеджере плагинов
 4. Добавить хотя бы один язык игры в параметрах плагина DKTools

 ### 2 ### Шаблоны для названия файла скриншота ###
 %year - Год
 %month - Месяц
 %day - День
 %hours - Часы
 %minutes - Минуты
 %seconds - Секунды

 ### Элементы ###
 DKTools.Utils
 DKTools.Utils.String
 DKTools.Utils.Array
 DKTools.Utils.Bitmap
 DKTools.Utils.Point
 DKTools.Utils.Rectangle
 DKTools.Utils.Random
 DKTools.Utils.Sequence
 DKTools.Utils.Sequence.Alphabet
 DKTools.ParameterManager
 DKTools.PluginManager
 DKTools.IO
 DKTools.IO.Entity
 DKTools.IO.File
 DKTools.IO.Directory
 DKTools.IO.WebStorage
 DKTools.Localization
 DKTools.Audio
 DKTools.Event
 DKTools.Animation
 DKTools.Animation.Action
 DKTools.Base
 DKTools.Sprite
 DKTools.Sprite.Button
 DKTools.Sprite.Cursor
 DKTools.Sprite.Arrow
 DKTools.Sprite.Selectable
 DKTools.Sprite.ProgressBar
 DKTools.Sprite.ProgressBar.Rectangle
 DKTools.Sprite.ProgressBar.Circle
 DKTools.Sprite.ProgressBar.SemiCircle
 DKTools.Sprite.CheckBox
 DKTools.Viewport
 DKTools.Layout
 DKTools.Window
 DKTools.Window.Selectable
 DKTools.Scene

 ### Список действий анимации ###
 Sprite, Window:
 Rotation -
 Tint -
 Sound -
 Move -
 Scale -
 Pivot -
 Skew -

 Sprite:
 OpacitySprite -
 Frame -
 Anchor -

 Window:
 OpacityWindow -
 Tone -
 Open -
 Close -

 ### Список событий ###
 Sprite, Window:
 removeAllChildren -
 removeAll -
 checkAll -
 createAll -
 addAllChildren -
 startAll -
 refreshAll -
 updateAll -
 redrawAll -
 start -
 ready -
 update -
 queue -
 activate -
 deactivate -
 show -
 hide -
 mouseEnter -
 mouseLeave -
 mouseMove -
 wheel-X-inside -
 wheel-X-outside -
 wheel-Y-inside -
 wheel-Y-outside -

 Sprite.Button:
 mouse-click-left -
 mouse-click-middle -
 mouse-click-right -
 mouse-longPress-left -
 mouse-longPress-middle -
 mouse-longPress-right -
 touch -
 longTouch -
 pressedState -
 normalState -

 Sprite.Selectable:
 select -

 ### Список опций ###
 Sprite, Window:
 mobileDevice -
 mouseEnter -
 wheelScroll -

 Sprite.Selectable:
 mouseHover -

 ### Лицензия и правила использования плагина ###

 Актуальная информация о правилах использования: https://dk-plugins.ru/terms-of-use

 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)

 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)

 * @param Localization
 * @text Локализация
 * @default ---------------------------------

 * @param Languages
 * @text Языки игры
 * @parent Localization
 * @desc Список языков игры
 * @type struct<Language>[]
 * @default ["{\"Language\":\"Русский\",\"Locale\":\"ru\",\"Primary\":\"true\"}"]

 * @param Local Path
 * @text Локальный путь
 * @parent Localization
 * @desc Локальный путь для сохранения языка игры
 * @default save/

 * @param Local Filename
 * @text Название локального файла
 * @parent Localization
 * @desc Название локального файла для сохранения языка игры
 * @default locale.rpgsave

 * @param Web Filename
 * @text Название веб-файла
 * @parent Localization
 * @desc Название веб-файла для сохранения языка игры
 * @default RPG Locale

 * @param Debug
 * @text Отладка
 * @default ---------------------------------

 * @param Open Console
 * @text Отладочная консоль
 * @parent Debug
 * @desc Открыть отладочную консоль при запуске игры?
 * @type boolean
 * @default false

 * @param Show FPS
 * @text Отобразить FPS
 * @parent Debug
 * @desc Показать счетчик FPS при запуске игры?
 * @type boolean
 * @default false

 * @param Functions
 * @text Функции
 * @default ---------------------------------

 * @param Screen
 * @text Экран
 * @parent Functions
 * @desc Настройки экрана
 * @type struct<Screen>
 * @default {"Screen Resolution":"false","Screen Width":"816","Screen Height":"624"}

 * @param Quick Start
 * @text Быстрый старт
 * @parent Functions
 * @desc Быстрый старт
 * @type struct<QuickStart>
 * @default {"Quick Start":"false","Scene Name":"Scene_Map","Skip Saves":"false"}

 * @param Screenshots
 * @text Скриншоты
 * @parent Functions
 * @desc Скриншоты
 * @type struct<Screenshots>
 * @default {"Take Screenshot":"false","Screenshot Key Code":"44","Screenshot Path":"screenshots/","Screenshot Filename":"%year_%month_%day_%hours_%minutes_%seconds.png"}

*/

/*~struct~Language:

 * @param Language
 * @text Language name
 * @desc Language name

 * @param Locale
 * @text Short language name
 * @desc Short language name (locale)

 * @param Primary
 * @text Primary language
 * @desc Is this the primary language of the game ?
 * @type boolean
 * @default false

 */

/*~struct~Language:ru

 * @param Language
 * @text Название языка
 * @desc Название языка

 * @param Locale
 * @text Короткое название языка
 * @desc Короткое название языка (локаль)

 * @param Primary
 * @text Основной язык
 * @desc Это основной язык игры ?
 * @type boolean
 * @default false

 */

/*~struct~Screen:

 * @param Screen Resolution
 * @desc Enable the Screen Resolution function?
 * @type boolean
 * @default false

 * @param Screen Width
 * @desc Screen Width
 * @type number
 * @min 0
 * @default 816

 * @param Screen Height
 * @desc Screen Height
 * @type number
 * @min 0
 * @default 624

 */

/*~struct~Screen:ru

 * @param Screen Resolution
 * @text Разрешение экрана
 * @desc Включить функцию изменения разрешения экрана?
 * @type boolean
 * @default false

 * @param Screen Width
 * @text Ширина экрана
 * @desc Ширина экрана
 * @type number
 * @min 0
 * @default 816

 * @param Screen Height
 * @text Высота экрана
 * @desc Высота экрана
 * @type number
 * @min 0
 * @default 624

 */

/*~struct~QuickStart:

 * @param Quick Start
 * @desc Enable the Quick Start function?
 * @type boolean
 * @default false

 * @param Scene Name
 * @desc Name of scene which will be launched instead the title screen. Standard: Scene_Map
 * @default Scene_Map

 * @param Skip Saves
 * @desc Does it need skip the title screen if save files exists?
 * @type boolean
 * @default false

 */

/*~struct~QuickStart:ru

 * @param Quick Start
 * @text Быстрый старт
 * @desc Включить функцию быстрого старта?
 * @type boolean
 * @default false

 * @param Scene Name
 * @text Название сцены
 * @desc Название сцены, которая запускается вместо титульного экрана. Стандартно: Scene_Map
 * @default Scene_Map

 * @param Skip Saves
 * @text Пропуск сохранений
 * @desc Пропускать титульный экран, если есть сохранения?
 * @type boolean
 * @default false

 */

/*~struct~Screenshots:

 * @param Take Screenshot
 * @desc Enable the Take Screenshot function?
 * @type boolean
 * @default false

 * @param Screenshot Key Code
 * @text Key Code
 * @desc The key code that is responsible for saving the screenshot. 44 - PrintScreen
 * @type number
 * @default 44

 * @param Screenshot Path
 * @text Path for saving screenshots
 * @desc Local path for saving screenshots
 * @default screenshots/

 * @param Screenshot Filename
 * @desc The entire list of templates is given in the help (2)
 * @default %year_%month_%day_%hours_%minutes_%seconds.png

 */

/*~struct~Screenshots:ru

 * @param Take Screenshot
 * @text Сделать скриншот
 * @desc Включить функцию сохранения скриншота?
 * @type boolean
 * @default false

 * @param Screenshot Key Code
 * @text Код клавиши
 * @desc Код клавиши, которая отвечает за сохранение скриншота. 44 - PrintScreen
 * @type number
 * @default 44

 * @param Screenshot Path
 * @text Путь для сохранения скриншотов
 * @desc Локальный путь для сохранения скриншотов
 * @default screenshots/

 * @param Screenshot Filename
 * @text Название файла скриншота
 * @desc Весь список шаблонов приведен в справке (2)
 * @default %year_%month_%day_%hours_%minutes_%seconds.png

 */

'use strict';

try {
    var _ = require('./js/libs/lodash');
} catch(e) {
    throw new Error('Error loading lodash! See Help of plugin: 1');
}

/**
 * @global
 * @type {Object}
 */
var Imported = Imported || {};
Imported.DKTools = 1.0;

//===========================================================================
// DKTools
//===========================================================================

/**
 * @namespace DKTools
 * @type {Object}
 */
const DKTools = {};

/**
 * Version of DKTools
 *
 * @private
 * @readonly
 * @type {Number}
 * @memberOf DKTools
 */
DKTools._version = Imported.DKTools;

// properties

Object.defineProperties(DKTools, {

    /**
     * Version of DKTools
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools
     */
    version: {
        get: function() {
            return this._version;
        }
    }

});

// classes

/**
 * The static class that defines utility methods
 *
 * @class DKTools.Utils
 * @constructor
 * @memberOf DKTools
 */
DKTools.Utils = function() {};

/**
 * The static class that defines utility methods for String class
 *
 * @class DKTools.Utils.String
 * @constructor
 * @memberOf DKTools.Utils
 */
DKTools.Utils.String = function() {};

/**
 * The static class that defines utility methods for Array class
 *
 * @class DKTools.Utils.Array
 * @constructor
 * @memberOf DKTools.Utils
 */
DKTools.Utils.Array = function() {};

/**
 * The static class that defines utility methods for Bitmap class
 *
 * @class DKTools.Utils.Bitmap
 * @constructor
 * @memberOf DKTools.Utils
 */
DKTools.Utils.Bitmap = function() {};

/**
 * The static class that defines utility methods for Point class
 *
 * @class DKTools.Utils.Point
 * @constructor
 * @memberOf DKTools.Utils
 */
DKTools.Utils.Point = function() {};

/**
 * The static class that defines utility methods for Rectangle class
 *
 * @class DKTools.Utils.Rectangle
 * @constructor
 * @memberOf DKTools.Utils
 */
DKTools.Utils.Rectangle = function() {};

/**
 * The static class that defines the functions for a random
 *
 * @class DKTools.Utils.Random
 * @constructor
 * @memberOf DKTools.Utils
 */
DKTools.Utils.Random = function() {};

/**
 * The static class that defines the functions for a sequence
 *
 * @class DKTools.Utils.Sequence
 * @constructor
 * @memberOf DKTools.Utils
 */
DKTools.Utils.Sequence = function() {};

/**
 * The static class that defines the functions for a sequence of alphabet
 *
 * @class DKTools.Utils.Sequence.Alphabet
 * @constructor
 * @memberOf DKTools.Utils.Sequence
 */
DKTools.Utils.Sequence.Alphabet = function() {};

/**
 * Class of plugin parameters. Manages plugin parameters (supports all types of parameters)
 *
 * @class DKTools.ParameterManager
 * @constructor
 *
 * @memberOf DKTools
 *
 * @param {String} pluginName - Name of the plugin
 * @param {Object[]} convertible - Parameters for converting
 *
 * @example
 * var params = new DKTools.ParameterManager('DKTools');
 *
 * @example
 * var params = new DKTools.ParameterManager('DKTools', [
 * {
 * parameter: paramName,
 * property: propertyName
 * }
 * ]);
 *
 * @see DKTools.ParameterManager.prototype.initialize
 * @see DKTools.ParameterManager.prototype.convertParameters
 */
DKTools.ParameterManager = function(pluginName, convertible) {
    this.initialize.apply(this, arguments);
};

/**
 * @class DKTools.IO
 * @constructor
 * @memberOf DKTools
 */
DKTools.IO = function() {};

/**
 * @class DKTools.IO.Entity
 * @constructor
 * @memberOf DKTools.IO
 */
DKTools.IO.Entity = function(path, name) {
    this.initialize.apply(this, arguments);
};

/**
 * @class DKTools.IO.File
 * @extends DKTools.IO.Entity
 *
 * @override
 * @constructor
 *
 * @memberOf DKTools.IO
 */
DKTools.IO.File = function(path, name) {
    this.initialize.apply(this, arguments);
};

/**
 * @class DKTools.IO.Directory
 * @extends DKTools.IO.Entity
 *
 * @override
 * @constructor
 *
 * @memberOf DKTools.IO
 */
DKTools.IO.Directory = function(path, name) {
    this.initialize.apply(this, arguments);
};

/**
 * @class DKTools.IO.WebStorage
 * @constructor
 * @memberOf DKTools.IO
 */
DKTools.IO.WebStorage = function() {};

/**
 * Статический класс локализации
 *
 * @class DKTools.Localization
 * @constructor
 * @memberOf DKTools
 */
DKTools.Localization = function() {};

/**
 * Статический класс, который управляет плагинами
 *
 * @class DKTools.PluginManager
 * @constructor
 * @memberOf DKTools
 */
DKTools.PluginManager = function() {};

/**
 * Класс аудиофайла
 *
 * @class DKTools.Audio
 * @constructor
 *
 * @memberOf DKTools
 *
 * @param {DKTools.Audio | Object} object - Объект аудиофайла или Объект типа {}
 *
 * @param {String} object.type - Тип аудиофайла
 * @param {String} object.name - Название аудиофайла
 * @param {Number} [object.volume] - Громкость аудиофайла
 * @param {Number} [object.pitch] - Темп аудиофайла
 * @param {Number} [object.pan] - Панорама аудиофайла
 * @param {Boolean} [object.loop] - Зацикливание аудиофайла
 */
DKTools.Audio = function(object) {
    this.initialize.apply(this, arguments);
};

/**
 * Event class
 *
 * @class DKTools.Event
 * @constructor
 *
 * @memberOf DKTools
 *
 * @param {Object} [object] - Parameters
 *
 * @param {DKTools.Sprite | DKTools.Window | *} [object.target] - Target of the event
 * @param {String} [object.type] - Type of the event
 * @param {Number} [object.repeatTime] - Time of one repeat
 * @param {Number} [object.repeats] - Amount of repeats
 * @param {Number} [object.remainingPauseTime] - Remaining time of pause
 * @param {Function} [object.onStart] - Handler of the event start
 * @param {Function} [object.onUpdate] - Handler of the event update
 * @param {Function} [object.onPause] - Handler of the event pause
 * @param {Function} [object.onReset] - Handler of the event reset
 * @param {Function} [object.onRepeat] - Handler of the event repeat
 * @param {Function} [object.onSuccess] - Handler of the event success
 * @param {Function} [object.onFailure] - Handler of the event failure
 *
 * @see DKTools.Event.prototype.initialize
 */
DKTools.Event = function(object) {
    this.initialize.apply(this, arguments);
};

/**
 * Animation class
 *
 * @class DKTools.Animation
 * @extends DKTools.Event
 *
 * @override
 * @constructor
 *
 * @memberOf DKTools
 *
 * @param {DKTools.Animation | Object} object - Animation or object with parameters
 *
 * @see DKTools.Event.prototype.initialize
 */
DKTools.Animation = function(object) {
    this.initialize.apply(this, arguments);
};

/**
 * Action class
 *
 * @class DKTools.Animation.Action
 * @extends DKTools.Event
 *
 * @override
 * @constructor
 *
 * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
 *
 * @see DKTools.Event.prototype.initialize
 */
DKTools.Animation.Action = function(object) {
    this.initialize.apply(this, arguments);
};

/**
 * Абстрактный базовый класс для спрайта и окна
 *
 * @class DKTools.Base
 * @constructor
 *
 * @memberOf DKTools
 *
 * @param {Number | Rectangle | Object} [object] - The X coordinate или Rectangle, или Bitmap, или Объект типа {}
 * @param {Number} [y] - The Y coordinate
 * @param {Number} [width] - Ширина
 * @param {Number} [height] - Высота
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 * @param {Number} [object.width] - Ширина
 * @param {Number} [object.height] - Высота
 *
 * @see object properties: DKTools.Base.prototype.setupAll
 */
DKTools.Base = function(object, y, width, height) {
	throw new Error('This is a static class!');
};

/**
 * Sprite class
 *
 * @class DKTools.Sprite
 * @extends DKTools.Base
 *
 * @override
 * @constructor
 *
 * @memberOf DKTools
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
 * @memberOf DKTools.Sprite
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
 * @memberOf DKTools.Sprite
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
 * @memberOf DKTools.Sprite
 *
 * @see DKTools.Sprite.Arrow.prototype.initialize
 */
DKTools.Sprite.Arrow = function(object, y) {
    this.initialize.apply(this, arguments);
};

/**
 *
 *
 * @class DKTools.Sprite.Selectable
 * @extends DKTools.Sprite.Button
 *
 * @override
 * @constructor
 *
 * @memberOf DKTools.Sprite
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
 * @memberOf DKTools.Sprite
 *
 * @see DKTools.Sprite.ProgressBar.prototype.initialize
 */
DKTools.Sprite.ProgressBar = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 *
 *
 * @class DKTools.Sprite.ProgressBar.Rectangle
 * @extends DKTools.Sprite.ProgressBar
 *
 * @override
 * @constructor
 *
 * @memberOf DKTools.Sprite.ProgressBar
 *
 * @see DKTools.Sprite.ProgressBar.Rectangle.prototype.initialize
 */
DKTools.Sprite.ProgressBar.Rectangle = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 *
 *
 * @class DKTools.Sprite.ProgressBar.Circle
 * @extends DKTools.Sprite.ProgressBar
 *
 * @override
 * @constructor
 *
 * @memberOf DKTools.Sprite.ProgressBar
 *
 * @see DKTools.Sprite.ProgressBar.Circle.prototype.initialize
 */
DKTools.Sprite.ProgressBar.Circle = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 *
 *
 * @class DKTools.Sprite.ProgressBar.SemiCircle
 * @extends DKTools.Sprite.ProgressBar.Circle
 *
 * @override
 * @constructor
 *
 * @memberOf DKTools.Sprite.ProgressBar
 *
 * @see DKTools.Sprite.ProgressBar.SemiCircle.prototype.initialize
 */
DKTools.Sprite.ProgressBar.SemiCircle = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 *
 *
 * @class DKTools.Sprite.CheckBox
 * @extends DKTools.Sprite.Button
 *
 * @override
 * @constructor
 *
 * @memberOf DKTools.Sprite
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
 * @memberOf DKTools
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
 * @memberOf DKTools
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
 * @memberOf DKTools
 *
 * @see DKTools.Window.prototype.initialize
 */
DKTools.Window = function(object, y, width, height) {
	this.initialize.apply(this, arguments);
};

/**
 *
 *
 * @class DKTools.Window.Selectable
 * @extends DKTools.Window
 *
 * @override
 * @constructor
 *
 * @memberOf DKTools.Window
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
 * @memberOf DKTools
 */
DKTools.Scene = function() {
	this.initialize.apply(this, arguments);
};





//===========================================================================
// DKTools.Utils
//===========================================================================

/**
 * @private
 * @readonly
 * @type {Boolean}
 * @memberOf DKTools.Utils
 */
DKTools.Utils._saidHello = false;

/**
 * @static
 */
DKTools.Utils.initialize = function() {

    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._isNwjs = Utils.isNwjs();

    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._isMobileDevice = Utils.isMobileDevice();

    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._isMobileSafari = Utils.isMobileSafari();

    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._isAndroidChrome = Utils.isAndroidChrome();

    this._sayHello();

    if (Utils.isOptionValid('test') && DKToolsParam.get('Open Console')) {
        this.openConsole();
    }
};

/**
 * Checks whether the platform is NW.js
 *
 * @static
 * @returns {Boolean} The platform is NW.js
 */
DKTools.Utils.isNwjs = function() {
    return this._isNwjs;
};

/**
 * Checks whether the platform is a mobile device.
 *
 * @static
 * @returns {Boolean} The platform is a mobile device
 */
DKTools.Utils.isMobileDevice = function() {
    return this._isMobileDevice;
};

/**
 * Checks whether the browser is Mobile Safari
 *
 * @static
 * @returns {Boolean} The browser is Mobile Safari
 */
DKTools.Utils.isMobileSafari = function() {
    return this._isMobileSafari;
};

/**
 * Checks whether the browser is Android Chrome
 *
 * @static
 * @returns {Boolean} The browser is Android Chrome
 */
DKTools.Utils.isAndroidChrome = function() {
    return this._isAndroidChrome;
};

/**
 * Copies properties of one object to another. Handles get/set properties correctly. Doesn't clone sub-objects
 *
 * @static
 * @param {Object} target - A target to copy properties
 * @param {Object} source - The source of properties
*/
DKTools.Utils.mixin = function(target, source) {
    const properties = Object.getOwnPropertyNames(source);
    _.forEach(properties, function(property) {
        const descriptor = Object.getOwnPropertyDescriptor(source, property);
        Object.defineProperty(target, property, descriptor);
    });
};

/**
 * Opens the console
 *
 * @static
 */
DKTools.Utils.openConsole = function() {
    if (this.isNwjs() && Utils.isOptionValid('test')) {
        const window = require('nw.gui').Window.get();
        if (window) {
            try {
                window.showDevTools(null, function() {
                    window.focus();
                });
            } catch(e) {
                console.error('DKTools can not open the console');
            }
        }
    }
};

/**
 * Makes a screenshot
 *
 * @static
 */
DKTools.Utils.makeScreenshot = function() {
    if (!DKTools.Utils.isNwjs()) {
        return;
    }

    const path = DKToolsParam.get('Screenshots', 'Screenshot Path');

    const date = new Date();
    let filename = DKToolsParam.get('Screenshots', 'Screenshot Filename');
    filename = filename.replace(/%year/gi, date.getFullYear());
    filename = filename.replace(/%month/gi, date.getMonth() + 1);
    filename = filename.replace(/%day/gi, date.getDate());
    filename = filename.replace(/%hours/gi, date.getHours());
    filename = filename.replace(/%minutes/gi, date.getMinutes());
    filename = filename.replace(/%seconds/gi, date.getSeconds());

    const snap = SceneManager.snap();
    const urlData = snap._canvas.toDataURL();
    const data = urlData.replace(/^data:image\/png;base64,/, '');

    const file = new DKTools.IO.File(path, filename);
    file.save(data, {
        createDirectory: true,
        options: 'base64',
        callback: function() {
            console.log('The screenshot is saved with the name: ' + filename);
        }
    });
};

/**
 * Displays information about the plugin in the debug console
 *
 * @private
 * @static
 */
DKTools.Utils._sayHello = function() {
    if (this._saidHello) {
        return;
    }

    if (navigator.userAgent.toLowerCase().indexOf('chrome') >= 0) {
        const args = ['\n %c %c %c DKTools.js ' + DKTools.version + ' %c  %c  https://www.dk-plugins.ru/  %c \n\n',
            'background: #4CCBF5; padding:5px 0;',
            'background: #4CCBF5; padding:5px 0;',
            'color: #4CCBF5; background: #030307; padding:5px 0;',
            'background: #4CCBF5; padding:5px 0;',
            'background: #BDE5F2; padding:5px 0;',
            'background: #4CCBF5; padding:5px 0;'];

        console.log.apply(console, args);
    } else if (window.console) {
        console.log('DKTools.js ' + DKTools.version + ' - https://www.dk-plugins.ru/');
    }

    this._saidHello = true;
}





//===========================================================================
// DKTools.Utils.String
//===========================================================================

/**
 * Splits a string by commas into an array of string
 *
 * @static
 * @param {String} string - String
 *
 * @example
 * var array = DKTools.Utils.String.toStringArray('1, 2, 3');
 * => ['1', '2', '3']
 *
 * var array = DKTools.Utils.String.toStringArray('1,2,3');
 * => ['1', '2', '3']
 *
 * @returns {String[]} Array of strings
 */
DKTools.Utils.String.toStringArray = function(string) {
    return string.replace(/\s*\,\s*/g, ',').split(',');
};

/**
 * Splits a string by commas into an array of numbers
 *
 * @static
 * @param {String} string - String
 *
 * @example
 * var array = DKTools.Utils.String.toNumberArray('1, 2, 3');
 * => [1, 2, 3]
 *
 * var array = DKTools.Utils.String.toNumberArray('1,2,3');
 * => [1, 2, 3]
 *
 * @see DKTools.Utils.String.toStringArray
 * @returns {Number[]} Array of numbers
 */
DKTools.Utils.String.toNumberArray = function(string) {
    return _.map(this.toStringArray(string), Number);
};

/**
 * Splits a string by commas into an array of booleans
 *
 * @static
 * @param {String} string - String
 *
 * @example
 * var array = DKTools.Utils.String.toBooleanArray('1, 2, 3');
 * => [true, true, true]
 *
 * var array = DKTools.Utils.String.toBooleanArray('1,2,');
 * => [true, true, false]
 *
 * @see DKTools.Utils.String.toStringArray
 * @returns {Boolean[]} Array of booleans
 */
DKTools.Utils.String.toBooleanArray = function(string) {
    return _.map(this.toStringArray(string), Boolean);
};





//===========================================================================
// DKTools.Utils.Array
//===========================================================================

/**
 * Checks whether the array contains a given item
 *
 * @static
 *
 * @param {Array} array - The array in which the search is performed
 * @param {*} item - The item to search
 *
 * @example
 * var array = [1, 2];
 * DKTools.Utils.Array.contains(array, 1);
 * => true
 *
 * var array = [1, 2];
 * DKTools.Utils.Array.contains(array, 3);
 * => false
 *
 * @returns {Boolean} Array contains a given item
 */
DKTools.Utils.Array.contains = function(array, item) {
    return _.includes(array, item);
};

/**
 * Returns the number of item in the array
 *
 * @static
 *
 * @param {Array} array - The array in which the search is performed
 * @param {*} item - The item to search
 *
 * @example
 * var array = [1, 1, 2];
 * DKTools.Utils.Array.contains(array, 1);
 * => 2
 *
 * var array = [1, 1, 2];
 * DKTools.Utils.Array.contains(array, 2);
 * => 1
 *
 * @returns {Number} Number of item in the array
 */
DKTools.Utils.Array.count = function(array, item) {
    return _.size(array) - _.size(_.without(array, item));
};

/**
 * Returns the sum of the number of items in the array
 *
 * @static
 *
 * @param {Array} array - The array in which the search is performed
 * @param {Array} items - The items to search
 *
 * @example
 * var array1 = [1, 1, 2];
 * var array2 = [1, 2];
 * DKTools.Utils.Array.counts(array1, array2);
 * => 3
 *
 * @returns {Number} Sum of the number of items in the array
 */
DKTools.Utils.Array.counts = function(array, items) {
    return _.size(array) - _.size(_.difference(array, items));
};

/**
 * Removes '', null, undefined and NaN from the array.
 * This method mutates array
 *
 * @static
 * @param {Array} array - The array to compact
 *
 * @example
 * var array = [null, 1, undefined];
 * DKTools.Utils.Array.compact(array);
 * => [1];
 *
 * @returns {Array} Mutated array
 */
DKTools.Utils.Array.compact = function(array) {
    return _.pull(array, '', null, undefined, Number.NaN);
};

/**
 * Removes item from the array.
 * This method mutates array
 *
 * @static
 *
 * @param {Array} array - The array to remove
 * @param {*} item - The item to remove
 *
 * @example
 * var array = [1, 2, 3];
 * DKTools.Utils.Array.remove(array, 1);
 * => [2, 3];
 *
 * @returns {Array} Mutated array
 */
DKTools.Utils.Array.remove = function(array, item) {
    return _.pull(array, item);
};

/**
 * Inserts the item into the array.
 * This method mutates array
 *
 * @static
 *
 * @param {Array} array - The array to insert
 * @param {*} item - The item to insert
 * @param {Number} [index=0] - The index to insert
 *
 * @example
 * var array = [1, 2, 4];
 * DKTools.Utils.Array.insert(array, 3, 2);
 * => [1, 2, 3, 4];
 */
DKTools.Utils.Array.insert = function(array, item, index) {
    array.splice(index || 0, 0, item);
};

/**
 * Checks whether the array is empty
 *
 * @static
 * @param {Array} array - The array to check
 * @returns {Boolean} Array is empty
 */
DKTools.Utils.Array.isEmpty = function(array) {
    return _.isArray(array) && _.isEmpty(array);
};

/**
 * Checks whether all elements of the array are of type Number
 *
 * @static
 * @param {Array} array - The array to check
 *
 * @example
 * var array = [1, 2];
 * DKTools.Utils.Array.isNumberArray(array);
 * => true
 *
 * var array = ['1', 2];
 * DKTools.Utils.Array.isNumberArray(array);
 * => false
 *
 * @returns {Boolean} All elements of the array are of type Number
 */
DKTools.Utils.Array.isNumberArray = function(array) {
    return _.every(array, _.isNumber);
};

/**
 * Checks whether all elements of the array are of type Boolean
 *
 * @static
 * @param {Array} array - The array to check
 *
 * @example
 * var array = [true, false];
 * DKTools.Utils.Array.isBooleanArray(array);
 * => true
 *
 * var array = ['1', false];
 * DKTools.Utils.Array.isBooleanArray(array);
 * => false
 *
 * @returns {Boolean} All elements of the array are of type Boolean
 */
DKTools.Utils.Array.isBooleanArray = function(array) {
    return _.every(array, _.isBoolean);
};

/**
 * Checks whether all elements of the array are of type String
 *
 * @static
 * @param {Array} array - The array to check
 *
 * @example
 * var array = ['1', '2'];
 * DKTools.Utils.Array.isStringArray(array);
 * => true
 *
 * var array = ['1', 2];
 * DKTools.Utils.Array.isStringArray(array);
 * => false
 *
 * @returns {Boolean} All elements of the array are of type String
 */
DKTools.Utils.Array.isStringArray = function(array) {
    return _.every(array, _.isString);
};

/**
 * Checks whether all elements of the array are of type Bitmap
 *
 * @static
 * @param {Array} array - The array to check
 *
 * @example
 * var array = [new Bitmap()];
 * DKTools.Utils.Array.isBitmapArray(array);
 * => true
 *
 * var array = [new Bitmap(), 2];
 * DKTools.Utils.Array.isBitmapArray(array);
 * => false
 *
 * @returns {Boolean} All elements of the array are of type Bitmap
 */
DKTools.Utils.Array.isBitmapArray = function(array) {
    return _.every(array, function(item) {
        return item instanceof Bitmap;
    });
};

/**
 * Checks whether all elements of the array are of type Sprite
 *
 * @static
 * @param {Array} array - The array to check
 *
 * @example
 * var array = [new Sprite()];
 * DKTools.Utils.Array.isSpriteArray(array);
 * => true
 *
 * var array = [new Sprite(), 2];
 * DKTools.Utils.Array.isSpriteArray(array);
 * => false
 *
 * @returns {Boolean} All elements of the array are of type Sprite
 */
DKTools.Utils.Array.isSpriteArray = function(array) {
    return _.every(array, function(item) {
        return item instanceof Sprite;
    });
};

/**
 * Checks whether all elements of the array are of type Window
 *
 * @static
 * @param {Array} array - The array to check
 *
 * @example
 * var array = [new Window()];
 * DKTools.Utils.Array.isWindowArray(array);
 * => true
 *
 * var array = [new Window(), 2];
 * DKTools.Utils.Array.isWindowArray(array);
 * => false
 *
 * @returns {Boolean} All elements of the array are of type Window
 */
DKTools.Utils.Array.isWindowArray = function(array) {
    return _.every(array, function(item) {
        return item instanceof Window;
    });
};

/**
 * Performs a logical operation of the disjunction
 *
 * @static
 * @param {Array} array - The array to perform
 *
 * @example
 * var array = [true, false, false];
 * DKTools.Utils.Array.disjunction(array);
 * => true
 *
 * var array = [false, false];
 * DKTools.Utils.Array.disjunction(array);
 * => false
 *
 * @returns {Boolean} Result of operation
 */
DKTools.Utils.Array.disjunction = function(array) {
    return _.some(array, _.isEqual.bind(this, true));
};

/**
 * Performs a logical operation of the conjunction
 *
 * @static
 * @param {Array} array - The array to perform
 *
 * @example
 * var array = [true, true];
 * DKTools.Utils.Array.conjunction(array);
 * => true
 *
 * var array = [true, false];
 * DKTools.Utils.Array.conjunction(array);
 * => false
 *
 * @returns {Boolean} Result of operation
 */
DKTools.Utils.Array.conjunction = function(array) {
    return _.every(array, _.isEqual.bind(this, true));
};





//===========================================================================
// DKTools.Utils.Bitmap
//===========================================================================

/**
 * Loads and returns the bitmap
 *
 * @static
 *
 * @param {String | Bitmap | DKTools.Sprite | Object} object - Path to file or Bitmap or sprite based on DKTools.Sprite or object with parameters
 * @param {String | Object} filename - Name of file
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Bitmap | null} Bitmap or null
 */
DKTools.Utils.Bitmap.load = function(object, filename, listener, hue, smooth) {
    if (!object || _.isEmpty(object) || _.isArray(object)) {
        return null;
    } else if (object instanceof Bitmap) {
        return object;
    } else if (object instanceof DKTools.Sprite) {
        if (object.isFixedBitmap() && object.canCloneFixedBitmap()) {
            return this.clone(object.bitmap);
        } else {
            return null;
        }
    } else if (object instanceof Object) {
        return this.load(object.folder, object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String (folder)
    const bitmap = ImageManager.loadBitmap(object, filename, hue, smooth);
    if (listener) {
        bitmap.addLoadListener(listener);
    }
    return bitmap;
};

/**
 * Loads the bitmaps and call the callback function when loading all bitmaps
 *
 * @static
 *
 * @param {Bitmap[] | Object[]} bitmaps - Bitmaps to load
 * @param {Function} callback - Function that is called when all bitmaps are loaded
 *
 * @example
 * var bitmaps = [];
 * bitmaps[0] = ImageManager.loadSystem('Window');
 * bitmaps[1] = {
 *  folder: 'img/system/',
 *  filename: 'IconSet'
 * };
 *
 * DKTools.Utils.Bitmap.loadBitmaps(bitmaps, function(bitmaps) {
 *  // all loaded bitmaps
 * });
 *
 * @see DKTools.Utils.Bitmap.load
 */
DKTools.Utils.Bitmap.loadBitmaps = function(bitmaps, callback) {
    if (!_.isFunction(callback)) {
        return;
    }

    bitmaps = _.map(bitmaps, function(bitmap) {
        return this.load(bitmap);
    }.bind(this));

    _.forEach(bitmaps, function(bitmap) {
        bitmap.addLoadListener(function() {
            if (!callback) {
                return;
            }
            const loaded = _.every(bitmaps, function(bitmap) {
                return bitmap.isReady();
            });
            if (loaded) {
                callback(bitmaps);
                callback = null;
            }
        });
    });
};

/**
 * Draws the line to the bitmap
 *
 * @static
 *
 * @param {Bitmap} bitmap - Bitmap
 * @param {Number} x1 - The X coordinate of start of the line
 * @param {Number} y1 - The Y coordinate of start of the line
 * @param {Number} x2 - The X coordinate of end of the line
 * @param {Number} y2 - The Y coordinate of end of the line
 * @param {String} [color='white'] - Line color
 * @param {Number} [lineWidth=1] - Line width
 *
 * @see CanvasRenderingContext2D.lineTo
 */
DKTools.Utils.Bitmap.drawLine = function(bitmap, x1, y1, x2, y2, color, lineWidth) {
    const context = bitmap._context;
    context.save();
    context.strokeStyle = color || 'white';
    context.lineWidth = lineWidth || 1;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.restore();
    bitmap._setDirty();
};

/**
 * Draws a rectangle without fill
 *
 * @static
 *
 * @param {Bitmap} bitmap - Bitmap
 * @param {Number} x - The X coordinate
 * @param {Number} y - The Y coordinate
 * @param {Number} width - Width of the rectangle
 * @param {Number} height - Height of the rectangle
 * @param {String} [color='white'] - Line color
 * @param {Number} [lineWidth=1] - Line width
 *
 * @see CanvasRenderingContext2D.strokeRect
 */
DKTools.Utils.Bitmap.strokeRect = function(bitmap, x, y, width, height, color, lineWidth) {
    const context = bitmap._context;
    context.save();
    context.strokeStyle = color || 'white';
    context.lineWidth = lineWidth || 1;
    context.strokeRect(x, y, width, height);
    context.restore();
    bitmap._setDirty();
};

/**
 * Draws an arc and fills it with color
 *
 * @static
 *
 * @param {Bitmap} bitmap - Bitmap
 * @param {Number} x - The X coordinate
 * @param {Number} y - The Y coordinate
 * @param {Number} radius - Radius of the arc
 * @param {Number} startAngle - Starting angle
 * @param {Number} endAngle - End angle
 * @param {String} [color='white'] - Fill color
 * @param {Boolean} [anticlockwise=false] - Anticlockwise
 *
 * @see CanvasRenderingContext2D.arc
 */
DKTools.Utils.Bitmap.fillArc = function(bitmap, x, y, radius, startAngle, endAngle, color, anticlockwise) {
    const context = bitmap._context;
    context.save();
    context.fillStyle = color || 'white';
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    context.fill();
    context.restore();
    bitmap._setDirty();
};

/**
 * Draws an arc without fill
 *
 * @static
 *
 * @param {Bitmap} bitmap - Bitmap
 * @param {Number} x - The X coordinate
 * @param {Number} y - The Y coordinate
 * @param {Number} radius - Radius of the arc
 * @param {Number} startAngle - Starting angle
 * @param {Number} endAngle - End angle
 * @param {String} [color='white'] - Line color
 * @param {Number} [lineWidth=1] - Line width
 * @param {Boolean} [anticlockwise=false] - Anticlockwise
 *
 * @see CanvasRenderingContext2D.arc
 */
DKTools.Utils.Bitmap.strokeArc = function(bitmap, x, y, radius, startAngle, endAngle, color, lineWidth, anticlockwise) {
    const context = bitmap._context;
    context.save();
    context.strokeStyle = color || 'white';
    context.lineWidth = lineWidth || 1;
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    context.stroke();
    context.restore();
    bitmap._setDirty();
};

/**
 * Clones the bitmap
 *
 * @static
 * @param {Bitmap} bitmap - The bitmap to be cloned
 * @returns {Bitmap | null} Cloned bitmap
 */
DKTools.Utils.Bitmap.clone = function(bitmap) {
    if (!bitmap) {
        return null;
    }
    if (bitmap.url) {
        return bitmap;
    }
    const canvas = bitmap.canvas;
    const newBitmap = new Bitmap(canvas.width, canvas.height);
    const newContext = newBitmap.context;
    newContext.drawImage(canvas, 0, 0);
    return newBitmap;
};





//===========================================================================
// DKTools.Utils.Point
//===========================================================================

/**
 * Converts arguments to Point, if possible
 *
 * @static
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} object - The X coordinate or Point or object with parameters
 * @param {Number} [y] - The Y coordinate (if object is Number)
 *
 * @param {Number} object.x - The X coordinate
 * @param {Number} object.y - The Y coordinate
 *
 * @example
 * var point = DKTools.Utils.Point.convertToPoint(0, 0);
 * => Point
 * var point = DKTools.Utils.Point.convertToPoint(new Point(0, 0));
 * => Point
 * var point = DKTools.Utils.Point.convertToPoint({ x: 0, y: 0});
 * => Point
 * var point = DKTools.Utils.Point.convertToPoint();
 * => null
 *
 * @returns {Point | null} Point or null
 */
DKTools.Utils.Point.convertToPoint = function(object, y) {
    let pointX, pointY;
    if (object instanceof Object) {
        pointX = object.x;
        pointY = object.y;
    } else { // object - Number
        pointX = object;
        pointY = y;
    }
    let point = null;
    if (DKTools.Utils.Array.isNumberArray([pointX, pointY])) {
        point = new Point(pointX, pointY);
    }
    return point;
};

/**
 * Converts the point into an array
 *
 * @static
 * @param {PIXI.Point | PIXI.ObservablePoint | Point} point - The point to convert
 *
 * @example
 * var point = new Point(0, 0);
 * DKTools.Utils.Point.convertToArray(point);
 * => [0, 0]
 *
 * @returns {Number[]} Array with coordinates
 */
DKTools.Utils.Point.convertToArray = function(point) {
    return [point.x, point.y];
};

/**
 * Compares the coordinates of the points
 *
 * @static
 *
 * @param {PIXI.Point | PIXI.ObservablePoint | Point} point1 - The first point to compare
 * @param {PIXI.Point | PIXI.ObservablePoint | Point} point2 - The second point to compare
 *
 * @example
 * var point1 = new Point(0, 0);
 * var point2 = new Point(0, 0);
 * DKTools.Utils.Point.equals(point1, point2);
 * => true
 *
 * var point1 = new Point(0, 0);
 * var point2 = new Point(0, 1);
 * DKTools.Utils.Point.equals(point1, point2);
 * => false
 *
 * @returns {Boolean} Comparison result
 */
DKTools.Utils.Point.equals = function(point1, point2) {
    return point1.x === point2.x && point1.y === point2.y;
};

/**
 * Clones the point
 *
 * @static
 * @param {PIXI.Point | PIXI.ObservablePoint | Point} point - The point to be cloned
 * @returns {Point} Cloned point
 */
DKTools.Utils.Point.clone = function(point) {
    const newPoint = new Point();
    newPoint.copy(point);
    return newPoint;
};





//===========================================================================
// DKTools.Utils.Rectangle
//===========================================================================

/**
 * Converts arguments to Rectangle, if possible
 *
 * @static
 *
 * @param {Number | PIXI.Rectangle | Rectangle | Object} object - The X coordinate or Object
 * @param {Number} [y] - The Y coordinate (if object is Number)
 * @param {Number} [width] - The rectangle width (if object is Number)
 * @param {Number} [height] - ВThe rectangle height (if object is Number)
 *
 * @param {Number} object.x - The X coordinate
 * @param {Number} object.y - The Y coordinate
 * @param {Number} object.width - The rectangle width
 * @param {Number} object.height - The rectangle height
 *
 * @example
 * var rect = DKTools.Utils.Rectangle.convertToRectangle(0, 0, 0, 0);
 * => Rectangle
 * var rect = DKTools.Utils.Rectangle.convertToRectangle(new Rectangle(0, 0, 0, 0));
 * => Rectangle
 * var rect = DKTools.Utils.Rectangle.convertToRectangle({ x: 0, y: 0, width: 0, height: 0});
 * => Rectangle
 * var rect = DKTools.Utils.Rectangle.convertToRectangle();
 * => null
 *
 * @returns {Rectangle | null} Rectangle or null
 */
DKTools.Utils.Rectangle.convertToRectangle = function(object, y, width, height) {
    let frameX, frameY, frameWidth, frameHeight;
    if (object instanceof Object) {
        frameX = object.x;
        frameY = object.y;
        frameWidth = object.width;
        frameHeight = object.height;
    } else { // object - Number
        frameX = object;
        frameY = y;
        frameWidth = width;
        frameHeight = height;
    }
    let frame = null;
    if (DKTools.Utils.Array.isNumberArray([frameX, frameY, frameWidth, frameHeight])) {
        frame = new Rectangle(frameX, frameY, frameWidth, frameHeight);
    }
    return frame;
};

/**
 * Converts the rect into an array
 *
 * @static
 * @param {PIXI.Rectangle | Rectangle} rect - The rectangle to convert
 *
 * @example
 * var rect = new Rectangle(0, 0, 0, 0);
 * DKTools.Utils.Rectangle.convertToArray(rect);
 * => [0, 0, 0, 0]
 *
 * @returns {Number[]} Array with coordinates, width and height of the rect
 */
DKTools.Utils.Rectangle.convertToArray = function(rect) {
    return [rect.x, rect.y, rect.width, rect.height];
};

/**
 * Compares the coordinates, width and height of the rectangles
 *
 * @static
 *
 * @param {PIXI.Rectangle | Rectangle} rect1 - The first rectangle to compare
 * @param {PIXI.Rectangle | Rectangle} rect2 - The first rectangle to compare
 *
 * @example
 * var rect1 = new Rectangle(0, 0, 0, 0);
 * var rect2 = new Rectangle(0, 0, 0, 0);
 * DKTools.Utils.Rectangle.equals(rect1, rect2);
 * => true
 *
 * var rect1 = new Rectangle(0, 0, 0, 0);
 * var rect2 = new Rectangle(0, 0, 0, 1);
 * DKTools.Utils.Rectangle.equals(rect1, rect2);
 * => false
 *
 * @returns {Boolean} Comparison result
 */
DKTools.Utils.Rectangle.equals = function(rect1, rect2) {
    return rect1.x === rect2.x && rect1.y === rect2.y &&
        rect1.width === rect2.width && rect1.height === rect2.height;
};

/**
 * Checks whether the rect is empty (0, 0, 0, 0)
 *
 * @static
 * @param {PIXI.Rectangle | Rectangle} rect - Rectangle to check
 *
 * @example
 * var rect = new Rectangle(0, 0, 100, 100);
 * DKTools.Utils.Rectangle.isEmpty(rect);
 * => false
 *
 * var rect = new Rectangle(0, 0, 0, 0);
 * DKTools.Utils.Rectangle.isEmpty(rect);
 * => true
 *
 * @see DKTools.Utils.Rectangle.equals
 *
 * @returns {Boolean} The rect is empty
 */
DKTools.Utils.Rectangle.isEmpty = function(rect) {
    return this.equals(rect, Rectangle.emptyRectangle);
};

/**
 * Clones the rect
 *
 * @static
 * @param {PIXI.Rectangle | Rectangle} rect - The rect to be cloned
 * @returns {Rectangle} Cloned rect
 */
DKTools.Utils.Rectangle.clone = function(rect) {
    const newRect = new Rectangle();
    newRect.copy(rect);
    return newRect;
};





//===========================================================================
// DKTools.Utils.Random
//===========================================================================

/**
 * Returns a random integer not exceeding max
 *
 * @static
 * @param {Number} [max=1] - The maximum value of an integer
 * @returns {Number} Random integer not exceeding max
 */
DKTools.Utils.Random.getInt = function(max) {
    return _.random(0, max || 1);
};

/**
 * Returns a random float number not exceeding max
 *
 * @static
 * @param {Number} [max=1] - The maximum value of a float number
 * @returns {Number} Random float number not exceeding max
 */
DKTools.Utils.Random.getFloat = function(max) {
    return _.random(0, max || 1, true);
};

/**
 * Returns a random boolean
 *
 * @static
 * @returns {Boolean} Random boolean
 */
DKTools.Utils.Random.getBoolean = function() {
    return this.getInt(1) % 2 === 0;
};

/**
 * Returns a random color in rgba format
 *
 * @static
 * @param {Number] [alpha=1] - The color opacity
 * @returns {String} Random color in rgba format
 */
DKTools.Utils.Random.getRgbaColor = function(alpha) {
    const r = this.getInt(255);
    const g = this.getInt(255);
    const b = this.getInt(255);
    let a = 1;
    if (!_.isUndefined(alpha)) {
        a = alpha;
    }
    return 'rgba(%1, %2, %3, %4)'.format(r, g, b, a);
};

/**
 * Returns a random color in hex format
 *
 * @static
 * @returns {String} Random color in hex format
 */
DKTools.Utils.Random.getHexColor = function() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
};





//===========================================================================
// DKTools.Utils.Sequence
//===========================================================================

/**
 * Generator. Generates a sequence of integers. The number of values is limited by max.
 *
 * @param {Number} [max=Number.MAX_SAFE_INTEGER] - Number of sequence elements
 * @returns {Number} The next value of the sequence
 */
DKTools.Utils.Sequence.Number = function*(max) {
    max = max || Number.MAX_SAFE_INTEGER;
    let count = 0;
    while(count <= max) {
        yield count++;
    }
};

/**
 * Generator. Generates a sequence of booleans.
 *
 * @param [Boolean} [start=false] - The initial value of the sequence
 * @returns {Boolean} The next value of the sequence
 */
DKTools.Utils.Sequence.Boolean = function*(start) {
    let value = start || false;
    while(true) {
        value = !value;
        yield value;
    }
};





//===========================================================================
// DKTools.Utils.Sequence.Alphabet
//===========================================================================

/**
 * Generator. Generates a sequence of characters of the Russian alphabet
 *
 * @param {Boolean} [upper] - Characters in uppercase
 * @returns {String} The next value of the sequence
 */
DKTools.Utils.Sequence.Alphabet.ru = function*(upper) {
    let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    if (upper) {
        alphabet = alphabet.toUpperCase();
    }
    yield* alphabet;
};

/**
 * Generator. Generates a sequence of characters of the English alphabet
 *
 * @param {Boolean} [upper] - Characters in uppercase
 * @returns {String} The next value of the sequence
 */
DKTools.Utils.Sequence.Alphabet.en = function*(upper) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    if (upper) {
        alphabet = alphabet.toUpperCase();
    }
    yield* alphabet;
};





//===========================================================================
// DKTools.ParameterManager
//===========================================================================

// properties

Object.defineProperties(DKTools.ParameterManager.prototype, {

    /**
     * Name of the plugin
     *
     * @readonly
     * @type {String}
     * @memberOf DKTools.ParameterManager.prototype
     */
    pluginName: {
        get: function() {
            return this._pluginName;
        },
        configurable: true
    },

    /**
     * Parameters obtained using PluginManager.parameters
     *
     * @readonly
     * @type {Object}
     * @memberOf DKTools.ParameterManager.prototype
     */
    initialParams: {
        get: function() {
            return this._initialParams;
        },
        configurable: true
    },

    /**
     * Parameters of the plugin
     *
     * @readonly
     * @type {Object}
     * @memberOf DKTools.ParameterManager.prototype
     */
    params: {
        get: function() {
            return this._params;
        },
        configurable: true
    }

});

// static methods

/**
 * Parse a string (supports escape characters of the RPG Maker 1.5+)
 *
 * @static
 * @param {String} string - String to parse
 * @returns {Object | String} Parsed string
 */
DKTools.ParameterManager.parse = function(string) {
    try {
        return JSON.parse(string, function(key, value) {
            try {
                return this.parse(value);
            } catch (e) {
                return value;
            }
        }.bind(this));
    } catch(e) {
        return string;
    }
};

/**
 * @private
 * @static
 *
 * @param {Array} array
 *
 * @returns {Object}
 */
DKTools.ParameterManager._getConvertedObject = function(array) {
    const converted = {};
    _.forEach(array, function(value) {
        converted[value.Locale] = value.Data;
    });
    return converted;
};

// methods

/**
 * @param {String} pluginName - Name of the plugin
 * @param {Object[]} [convertible] - Parameters for conversion
 *
 * @see DKTools.ParameterManager.prototype.convertParameters
 */
DKTools.ParameterManager.prototype.initialize = function(pluginName, convertible) {
    this._pluginName = pluginName;
    this._initialParams = PluginManager.parameters(pluginName);
    this._params = {};
    if (_.isEmpty(this._initialParams)) {
        console.warn(`Plugin "${pluginName}" do not have a parameters`);
    }
    this.initializeParams();
    this.initializeLocalization();
    this.convertParameters(convertible);
};

/**
 * Initializes plugin parameters
 */
DKTools.ParameterManager.prototype.initializeParams = function() {
    _.forEach(this._initialParams, function(value, key) {
        this._params[key] = DKTools.ParameterManager.parse(value);
    }.bind(this));
};

/**
 * Initializes localization parameters
 */
DKTools.ParameterManager.prototype.initializeLocalization = function() {
    const localization = this.get('Localization');
    if (localization instanceof Object) {
        _.forEach(localization, function(value, key) {
            if (_.isArray(value)) {
                localization[key] = DKTools.ParameterManager._getConvertedObject(value);
            }
        });
    }
};

/**
 * Converts a parameters for localization
 *
 * @param {Object[]} convertible
 *
 * @param {String} convertible.parameter - Name of parameter
 * @param {String} convertible.property - Property of parameter
 */
DKTools.ParameterManager.prototype.convertParameters = function(convertible) {
    _.forEach(convertible, function(object) {
        const parameter = object.parameter;
        const property = object.property;
        _.forEach(this.get(parameter), function(obj) {
            obj[property] = DKTools.ParameterManager._getConvertedObject(obj[property]);
        });
    }.bind(this));
};

/**
 * Returns a parameter by its name
 *
 * @param {String} parameterName - Name of parameter
 * @param {Number | String} [item] - Index (for an array) or property (for an object)
 *
 * @example
 * var parameters = new DKTools.ParameterManager('DKTools');
 * var languages = parameters.get('Languages');
 *
 * @returns {* | null} Parameter by its name or null
 */
DKTools.ParameterManager.prototype.get = function(parameterName, item) {
    let param = this._params[parameterName];
    if (_.isUndefined(param) && parameterName !== 'Localization') {
        const localization = this.get('Localization');
        if (localization) {
            param = localization[parameterName];
            if (param) {
                const locale = DKTools.Localization.locale;
                const localizedParam = param[locale];
                if (_.isUndefined(localizedParam)) {
                    throw new Error('Localized param is undefined for locale: ' + locale);
                }
                param = localizedParam;
            }
        }
    }
    if (param && !_.isUndefined(item)) {
        param = param[item];
    }
    if (!_.isUndefined(param)) {
        return param;
    }
    return null;
};





//===========================================================================
// initialize parameters
//===========================================================================

/**
 * @global
 * @readonly
 * @type {DKTools.ParameterManager}
 */
const DKToolsParam = new DKTools.ParameterManager('DKTools');





//===========================================================================
// DKTools.PluginManager
//===========================================================================

/**
 * List of registered plugins
 *
 * @private
 * @readonly
 * @type {Object}
 * @memberOf DKTools.PluginManager
 */
DKTools.PluginManager._plugins = {};

/**
 * List of registered requirements
 *
 * @private
 * @readonly
 * @type {Object}
 * @memberOf DKTools.MovuleManager
 */
DKTools.PluginManager._requirements = {};

// properties

Object.defineProperties(DKTools.PluginManager, {

    /**
     * List of registered plugins
     *
     * @readonly
     * @type {Object}
     * @memberOf DKTools.PluginManager
     */
    plugins: {
        get: function() {
            return this._plugins;
        },
        configurable: true
    },

    /**
     * List of registered requirements
     *
     * @readonly
     * @type {Object}
     * @memberOf DKTools.PluginManager
     */
    requirements: {
        get: function() {
            return this._requirements;
        },
        configurable: true
    }

});

// initialize methods

/**
 * Registers a plugins from Imported, which have a version and checks the requirements for the versions of plugins
 *
 * @static
 */
DKTools.PluginManager.initialize = function() {
    this.registerPlugins(Imported);
    this._checkRequirements();
};

// _check methods

/**
 * Проверяет требования к версиям плагинов
 *
 * @private
 * @static
 */
DKTools.PluginManager._checkRequirements = function() {
    _.forEach(this._requirements, function(pluginInfo, pluginName) {
        const maxVersion = _.max(pluginInfo);
        const pluginVersion = this.pluginVersion(pluginName);
        if (_.isUndefined(pluginVersion)) {
            const error = 'Required to install the plugin "%1". Minimal version: %2'.format(pluginName, maxVersion);
            throw new Error(error);
        } else if (pluginVersion < maxVersion) {
            const error = 'Required to update the plugin "%1" to minimal version %2 (Installed: %3)'.format(pluginName,
                maxVersion, pluginVersion);
            throw new Error(error);
        }
    }.bind(this));
};

// is methods

/**
 * Returns true if plugin is registered
 *
 * @example
 * DKTools.PluginManager.isRegistered('DKTools'); // => true
 *
 * @static
 * @param {String} pluginName - Name of plugin
 * @returns {Boolean} Plugin is registered
 */
DKTools.PluginManager.isRegistered = function(pluginName) {
    return !!this._plugins[pluginName];
};

/**
 * Returns true if plugin requirement is registered
 *
 * @static
 * @param {String} pluginName - Name of plugin
 * @returns {Boolean} Requirement is registered
 */
DKTools.PluginManager.isRequired = function(pluginName) {
    return !!this._requirements[pluginName];
};

// register methods

/**
 * Registers a plugin
 *
 * @static
 * @param {String} pluginName - Name of plugin
 * @param {Number | String} version - Version of plugin
 */
DKTools.PluginManager.registerPlugin = function(pluginName, version) {
    if (this.isRegistered(pluginName) || !version || _.isBoolean(version)) {
        return;
    }
    this._plugins[pluginName] = version;
};

/**
 * Registers a several plugins
 *
 * @static
 * @param {Object[]} plugins - Plugins
 *
 * @see DKTools.PluginManager.registerPlugin
 */
DKTools.PluginManager.registerPlugins = function(plugins) {
    _.forEach(plugins, function(version, pluginName) {
        this.registerPlugin(pluginName, version);
    }.bind(this));
};

// require methods

/**
 * Registers a requirement of minimum version of plugin
 *
 * @example
 * DKTools.PluginManager.requirePlugin('DKTools', 1.0);
 *
 * @static
 * @param {String} pluginName - Name of plugin
 * @param {Number | String} minVersion - Minimum version of plguin
 */
DKTools.PluginManager.requirePlugin = function(pluginName, minVersion) {
    if (!this._requirements[pluginName]) {
        this._requirements[pluginName] = [];
    }
    this._requirements[pluginName].push(minVersion);
};

/**
 * Registers a several requirements of minimum version of plugins
 *
 * @static
 * @param {Object[]} plugins - Plugins
 *
 * @see DKTools.PluginManager.requirePlugin
 */
DKTools.PluginManager.requirePlugins = function(plugins) {
    _.forEach(plugins, function(version, pluginName) {
        this.requirePlugin(pluginName, version);
    }.bind(this));
};

// other methods

/**
 * Returns a version of plugin
 *
 * @example
 * DKTools.PluginManager.pluginVersion('DKTools'); // => 1.0
 *
 * @static
 * @param {String | String} pluginName - Name of plugin
 * @returns {Number | String | undefined} Version of plugin
 */
DKTools.PluginManager.pluginVersion = function(pluginName) {
    return this._plugins[pluginName];
};





//===========================================================================
// DKTools.IO
//===========================================================================

// properties

Object.defineProperties(DKTools.IO, {

    /**
     * File system
     *
     * @readonly
     * @type {FileSystem}
     * @memberOf DKTools.IO
     */
    fs: {
        get: function() {
            return this._fs;
        },
        configurable: true
    },

    /**
     * Path
     *
     * @readonly
     * @type {Path}
     * @memberOf DKTools.IO
     */
    path: {
        get: function() {
            return this._path;
        },
        configurable: true
    },

    /**
     * Path to the project folder
     *
     * @readonly
     * @type {String}
     * @memberOf DKTools.IO
     */
    projectPath: {
        get: function() {
            return this._projectPath;
        },
        configurable: true
    },

    /**
     * Operation completed successfully
     *
     * @readonly
     * @constant
     * @type {Number}
     * @memberOf DKTools.IO
     */
    OK: { value: 0 },

    /**
     * Wait until the asynchronous operation calls the callback function
     *
     * @readonly
     * @constant
     * @type {Number}
     * @memberOf DKTools.IO
     */
    WAIT_FOR_ASYNC_OPERATION: { value: 1 },

    /**
     * Platform is not equal to NW.js
     *
     * @readonly
     * @constant
     * @type {Number}
     * @memberOf DKTools.IO
     */
    ERROR_NOT_LOCAL_MODE: { value: 2 },

    /**
     * Path does not exist
     *
     * @readonly
     * @constant
     * @type {Number}
     * @memberOf DKTools.IO
     */
    ERROR_PATH_DOES_NOT_EXIST: { value: 3 },

    /**
     * The callback function is not available for an asynchronous operation
     *
     * @readonly
     * @constant
     * @type {Number}
     * @memberOf DKTools.IO
     */
    ERROR_CALLBACK_IS_NOT_AVAILABLE: { value: 4 },

    /**
     * Directory already exists
     *
     * @readonly
     * @constant
     * @type {Number}
     * @memberOf DKTools.IO
     */
    ERROR_DIRECTORY_ALREADY_EXISTS: { value: 5 },

    /**
     * Directory is not empty
     *
     * @readonly
     * @constant
     * @type {Number}
     * @memberOf DKTools.IO
     */
    ERROR_DIRECTORY_IS_NOT_EMPTY: { value: 6 },

    /**
     * A new name is missing or a file with this name already exists
     *
     * @readonly
     * @constant
     * @type {Number}
     * @memberOf DKTools.IO
     */
    ERROR_NEW_NAME_IS_NOT_AVAILABLE: { value: 7 },

    /**
     * A key is missing
     *
     * @readonly
     * @constant
     * @type {Number}
     * @memberOf DKTools.IO
     */
    ERROR_KEY_IS_NOT_AVAILABLE: { value: 7 },

});

// initialize methods

/**
 * @static
 */
DKTools.IO.initialize = function() {
    if (this.isLocalMode()) {

        /**
         * @private
         * @type {Object}
         */
        this._fs = require('fs');

        /**
         * @private
         * @readonly
         * @type {Object}
         */
        this._path = require('path');

        const projectPath = this._path.dirname(process.mainModule.filename);

        /**
         * @private
         * @type {String}
         */
        this._projectPath = this._path.join(projectPath, '/');
    }
};

// is methods

/**
 * Returns true if local mode is used
 *
 * @static
 * @returns {Boolean} Local mode is used
 */
DKTools.IO.isLocalMode = function() {
    return DKTools.Utils.isNwjs();
};

/**
 * Returns true if a full path contains the file
 *
 * @static
 *
 * @param {String | Object} object - Path to file
 * @param {String} [name] - Name of file (only if object is String)
 *
 * @param {String} [object.basePath] - Path to file
 * @param {String} [object.name] - Name of file
 *
 * @see DKTools.IO.makeFullPath
 * @see DKTools.IO.pathExists
 * @see FileSystem.lstatSync
 *
 * @returns {Boolean} Full path contains the file
 */
DKTools.IO.isFile = function(object, name) {
    if (object instanceof Object) {
        return this.isFile(object.basePath, object.name);
    }
    // object - String (path)
    const fs = this._fs;
    const fullPath = this.makeFullPath(object, name);
    if (this.pathExists(fullPath)) {
        return fs.lstatSync(fullPath).isFile();
    }
    return false;
};

/**
 * Returns true if a full path contains the directory
 *
 * @static
 *
 * @param {String | Object} object - Path to file
 * @param {String} [name] - Name of file (only if object is String)
 *
 * @param {String} [object.basePath] - Path to directory
 * @param {String} [object.name] - Name of directory
 *
 * @see DKTools.IO.makeFullPath
 * @see DKTools.IO.pathExists
 * @see FileSystem.lstatSync
 *
 * @returns {Boolean} Full path contains the directory
 */
DKTools.IO.isDirectory = function(object, name) {
    if (object instanceof Object) {
        return this.isFile(object.basePath, object.name);
    }
    // object - String (path)
    const fs = this._fs;
    const fullPath = this.makeFullPath(object, name);
    if (this.pathExists(fullPath)) {
        return fs.lstatSync(fullPath).isDirectory();
    }
    return false;
};

// other methods

/**
 * Returns a normalized path
 *
 * @static
 *
 * @param {String} path - Path for normalize
 *
 * @see Path.normalize
 *
 * @returns {String} Normalized path
 */
DKTools.IO.normalizePath = function(path) {
    return this._path.normalize(path);
};

/**
 * Returns a full path to file or directory
 *
 * @static
 *
 * @param {String} [path] - Path to folder where file or directory is stored
 * @param {String} [name] - Name of file or directory
 *
 * @returns {String} Full path to file or directory
 */
DKTools.IO.makeFullPath = function(path, name) {
    return this.normalizePath(this._path.join(this._projectPath, (path || ''), (name || '')));
};

/**
 * Returns true if the path exists
 *
 * @static
 *
 * @param {String} path - Path
 *
 * @see FileSystem.existsSync
 *
 * @returns {Boolean} Path exists
 */
DKTools.IO.pathExists = function(path) {
    return this._fs.existsSync(path);
};

/**
 * Returns true if the path exists
 *
 * @static
 *
 * @param {String} path - Path to folder where file or directory is stored
 * @param {String} [name] - Name of file or directory
 *
 * @see DKTools.IO.makeFullPath
 * @see DKTools.IO.pathExists
 *
 * @returns {Boolean} Path exists
 */
DKTools.IO.exists = function(path, name) {
    return this.pathExists(this.makeFullPath(path, name));
};





//===========================================================================
// DKTools.IO.Entity
//===========================================================================

Object.defineProperties(DKTools.IO.Entity.prototype, {

    /**
     * @readonly
     * @type {String}
     * @memberOf DKTools.IO.Entity.prototype
     */
    basePath: {
        get: function() {
            return this._basePath;
        },
        configurable: true
    },

    /**
     * @readonly
     * @type {String}
     * @memberOf DKTools.IO.Entity.prototype
     */
    name: {
        get: function() {
            return this._name;
        },
        configurable: true
    }

});

// get methods

/**
 * Returns a path
 *
 * @returns {String} Path
 */
DKTools.IO.Entity.prototype.getPath = function() {
    return DKTools.IO.path.join(this._basePath, '/', this._name);
};

/**
 * Returns a full path
 *
 * @returns {String} Full path
 */
DKTools.IO.Entity.prototype.getFullPath = function() {
    return DKTools.IO.makeFullPath(this._basePath, this._name);
};

/**
 * Returns a full name
 *
 * @returns {String} Full name
 */
DKTools.IO.Entity.prototype.getFullName = function() {
    return this._name;
};

// other methods

/**
 * Returns true if the full path exists
 *
 * @returns {Boolean} Full path exists
 */
DKTools.IO.Entity.prototype.exists = function() {
    return DKTools.IO.pathExists(this.getFullPath());
};

/**
 * Renames the file
 *
 * Possible results:
 * DKTools.IO.OK
 * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
 * DKTools.IO.ERROR_NOT_LOCAL_MODE
 * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
 * DKTools.IO.ERROR_NEW_NAME_IS_NOT_AVAILABLE
 *
 * @param {Object} object - Options of an operation
 *
 * @param {String} object.newName - New name of file
 * @param {Boolean} [object.sync] - Use synchronous version of rename
 * @param {String | Object} [object.options] - Options for rename or renameSync
 * @param {Function} [object.callback] - Callback function upon completion of an operation (only for object.sync == false)
 *
 * @see FileSystem.rename
 * @see FileSystem.renameSync
 *
 * @returns {Number} Code of the result of an operation
 */
DKTools.IO.Entity.prototype.rename = function(object) {
    if (!DKTools.IO.isLocalMode()) {
        return DKTools.IO.ERROR_NOT_LOCAL_MODE;
    }
    if (!object.newName) {
        return DKTools.IO.ERROR_NEW_NAME_IS_NOT_AVAILABLE;
    }
    if (!this.exists()) {
        return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;
    }
    const fs = DKTools.IO.fs;
    const newName = object.newName;
    const oldFullPath = this.getFullPath();
    const newFullPath = DKTools.IO.makeFullPath(this._basePath, newName);

    if (!DKTools.IO.pathExists(newFullPath)) {
        if (object.sync) {
            fs.renameSync(oldFullPath, newFullPath);
            this._name = newName;
            return DKTools.IO.OK;
        } else {
            fs.rename(oldFullPath, newFullPath, function(error) {
                if (error) {
                    throw error;
                } else {
                    this._name = newName;
                }
                object.callback(this);
            }.bind(this));
            return DKTools.IO.WAIT_FOR_ASYNC_OPERATION;
        }
    }
    return DKTools.IO.ERROR_NEW_NAME_IS_NOT_AVAILABLE;
};





//===========================================================================
// DKTools.IO.File
//===========================================================================

DKTools.IO.File.prototype = Object.create(DKTools.IO.Entity.prototype);
DKTools.IO.File.prototype.constructor = DKTools.IO.File;

// initialize methods

/**
 * @override
 *
 * @param {String} path - Path to file
 * @param {String} name - Name of file
 *
 * @example
 * var file = new DKTools.IO.File('/', 'index.html');
 */
DKTools.IO.File.prototype.initialize = function(path, name) {
    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._basePath = DKTools.IO.normalizePath(path + '/');

    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._name = name;
};

// is methods

/**
 * Returns true if an extension of the file is equal to .ogg or .m4a
 *
 * @returns {Boolean} Extension of the file is equal to .ogg or .m4a
 */
DKTools.IO.File.prototype.isAudio = function() {
    const extension = this.getExtension();
    return extension === '.ogg' || extension === '.m4a';
};

/**
 * Returns true if an extension of the file is equal to .png
 *
 * @returns {Boolean} Extension of the file is equal to .png
 */
DKTools.IO.File.prototype.isImage = function() {
    return this.getExtension() === '.png';
};

/**
 *  Returns true if an extension of the file is equal to .js
 *
 * @returns {Boolean} Extension of the file is equal to .js
 */
DKTools.IO.File.prototype.isScript = function() {
    return this.getExtension() === '.js';
};

/**
 * Returns true if an extension of the file is equal to .mp4 or .webm
 *
 * @returns {Boolean} Extension of the file is equal to .mp4 or .webm
 */
DKTools.IO.File.prototype.isVideo = function() {
    const extension = this.getExtension();
    return extension === '.mp4' || extension === '.webm';
};

/**
 * Returns true if an extension of the file is equal to .rpgsave
 *
 * @returns {Boolean} Extension of the file is equal to .rpgsave
 */
DKTools.IO.File.prototype.isSave = function() {
    return this.getExtension() === '.rpgsave';
};

/**
 * Returns true if an extension of the file is equal to .json
 *
 * @returns {Boolean} Extension of the file is equal to .json
 */
DKTools.IO.File.prototype.isJson = function() {
    return this.getExtension() === '.json';
};

// get methods

/**
 * Returns a name of the file without an extension
 *
 * @returns {String} Name of the file without an extension
 */
DKTools.IO.File.prototype.getBaseName = function() {
    return DKTools.IO.path.basename(this.getFullName(), this.getExtension());
};

/**
 * Returns an extension of the file
 *
 * @returns {String} Extension of the file
 */
DKTools.IO.File.prototype.getExtension = function() {
    return DKTools.IO.path.extname(this._name);
};

/**
 * Returns a directory of the file
 *
 * @returns {DKTools.IO.Directory} Directory of the file
 */
DKTools.IO.File.prototype.getDirectory = function() {
    const path = DKTools.IO.path.dirname(this._basePath);
    return new DKTools.IO.Directory(path, this._basePath);
};

// other methods

/**
 * Loads a data
 *
 * Returns an object with 2 properties:
 * status - Result of an operation
 * data - Loaded data (only if the status is equal to DKTools.IO.OK)
 * if the status is not equal to DKTools.IO.OK then data will be null
 *
 * Possible results:
 * DKTools.IO.OK
 * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
 * DKTools.IO.ERROR_NOT_LOCAL_MODE
 * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
 * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
 *
 * @param {Object} object - Options of an operation
 *
 * @param {Boolean} [object.sync] - Use synchronous version of readFile
 * @param {String | Object} [object.options] - Options for readFile or readFileSync
 * @param {Function} [object.callback] - Callback function upon completion of an operation (only for object.sync == false)
 * @param {Boolean} [object.decompress] - Use LZString.decompressFromBase64 for a data
 * @param {Boolean} [object.parse] - Use JSON.parse for a data
 *
 * @see FileSystem.readFile
 * @see FileSystem.readFileSync
 *
 * @returns {Object} Loaded data
 */
DKTools.IO.File.prototype.load = function(object) {
    if (!DKTools.IO.isLocalMode()) {
        return { data: null, status: DKTools.IO.ERROR_NOT_LOCAL_MODE };
    }
    if (!this.exists()) {
        return { data: null, status: DKTools.IO.ERROR_PATH_DOES_NOT_EXIST };
    }
    const fs = DKTools.IO.fs;
    const fullPath = this.getFullPath();
    const options = object.options || { encoding: 'utf8' };
    let data = null;

    if (object.sync) {
        data = fs.readFileSync(fullPath, options);
        if (data) {
            if (object.decompress) {
                data = LZString.decompressFromBase64(data);
            }
            if (object.parse) {
                data = JSON.parse(data);
            }
        }
        return { data: data, status: DKTools.IO.OK };
    } else if (_.isFunction(object.callback)) {
        fs.readFile(fullPath, options, function(error, data) {
            if (error) {
                throw error;
            }
            if (data) {
                if (object.decompress) {
                    data = LZString.decompressFromBase64(data);
                }
                if (object.parse) {
                    data = JSON.parse(data);
                }
            }
            object.callback(data, this);
        });
        return { data: null, status: DKTools.IO.WAIT_FOR_ASYNC_OPERATION };
    }
    return { data: null, status: DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE };
};

/**
 * Saves the data
 * Returns a code of the result of an operation
 *
 * Possible results:
 * DKTools.IO.OK
 * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
 * DKTools.IO.ERROR_NOT_LOCAL_MODE
 * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
 *
 * @param {*} data - Data to save
 * @param {Object} object - Options of an operation
 *
 * @param {Boolean} [object.stringify] - Use JSON.stringify for the data
 * @param {Boolean} [object.compress] - Use LZString.compressToBase64 for the data
 * @param {Boolean} [object.createDirectory] - Create a directory for the file
 * @param {Boolean} [object.sync] - Use synchronous version of writeFile
 * @param {String | Object} [object.options] - Options for writeFile or writeFileSync
 * @param {Function} [object.callback] - Callback function upon completion of an operation (only for object.sync == false)
 *
 * @see FileSystem.writeFile
 * @see FileSystem.writeFileSync
 *
 * @returns {Number} Code of the result of an operation
 */
DKTools.IO.File.prototype.save = function(data, object) {
    if (!DKTools.IO.isLocalMode()) {
        return DKTools.IO.ERROR_NOT_LOCAL_MODE;
    }
    const fs = DKTools.IO.fs;
    const fullPath = this.getFullPath();
    const directory = this.getDirectory();
    if (object.stringify) {
        data = JSON.stringify(data);
    }
    if (object.compress) {
        data = LZString.compressToBase64(data);
    }
    if (object.createDirectory) {
        if (!directory.exists()) {
            directory.create();
        }
    }
    if (directory.exists()) {
        if (object.sync) {
            fs.writeFileSync(fullPath, data, object.options);
            return DKTools.IO.OK;
        } else {
            const callback = object.callback;
            fs.writeFile(fullPath, data, object.options, function(error) {
                if (error) {
                    throw error;
                }
                if (_.isFunction(callback)) {
                    callback(this);
                }
            }.bind(this));
            return DKTools.IO.WAIT_FOR_ASYNC_OPERATION;
        }
    }
    return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;
};

/**
 * Removes the file
 * Returns a code of the result of an operation
 *
 * Possible results:
 * DKTools.IO.OK
 * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
 * DKTools.IO.ERROR_NOT_LOCAL_MODE
 * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
 *
 * @param {Object} [object] - Options of an operation
 *
 * @param {Boolean} [object.sync] - Use synchronous version of unlink
 * @param {String | Object} [object.options] - Options for unlink or unlinkSync
 * @param {Function} [object.callback] - Callback function upon completion of an operation (only for object.sync == false)
 *
 * @see FileSystem.unlink
 * @see FileSystem.unlinkSync
 *
 * @returns {Number} Code of the result of an operation
 */
DKTools.IO.File.prototype.remove = function(object) {
    if (!DKTools.IO.isLocalMode()) {
        return DKTools.IO.ERROR_NOT_LOCAL_MODE;
    }
    if (!this.exists()) {
        return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;
    }
    object = object || {};
    const fs = DKTools.IO.fs;
    const fullPath = this.getFullPath();
    if (object.sync) {
        fs.unlinkSync(fullPath);
        return DKTools.IO.OK;
    } else {
        const callback = object.callback;
        fs.unlink(fullPath, function(error) {
            if (error) {
                throw error;
            }
            if (_.isFunction(callback)) {
                callback(this);
            }
        }.bind(this));
        return DKTools.IO.WAIT_FOR_ASYNC_OPERATION;
    }
};





//===========================================================================
// DKTools.IO.Directory
//===========================================================================

DKTools.IO.Directory.prototype = Object.create(DKTools.IO.Entity.prototype);
DKTools.IO.Directory.prototype.constructor = DKTools.IO.Directory;

// static methods

/**
 * Returns the project directory
 *
 * @static
 * @returns {DKTools.IO.Directory} The project directory
 */
DKTools.IO.Directory.getRootDirectory = function() {
    return new DKTools.IO.Directory('/', '/');
};

// initialize methods

/**
 * @override
 *
 * @param {String} [path] - Path to directory
 * @param {String} [name] - Name of directory
 *
 * @example
 * var directory = new DKTools.IO.Directory('/', 'save/');
 */
DKTools.IO.Directory.prototype.initialize = function(path, name) {
    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._basePath = DKTools.IO.normalizePath((path || '') + '/');

    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._name = DKTools.IO.normalizePath((name || '') + '/');
};

// is methods

/**
 * Returns true if the directory does not contain files and other directories
 *
 * @returns {Boolean} Directory does not contain files and other directories
 */
DKTools.IO.Directory.prototype.isEmpty = function() {
    const data = this.getAll({ sync: true }).data;
    return !data || data && data.length === 0;
};

// get methods

/**
 * Returns all files and directories
 *
 * Returns an object with 2 properties:
 * status - Result of an operation
 * data - Array with files and directories (only if the status is equal to DKTools.IO.OK)
 * if the status is not equal to DKTools.IO.OK then data will be null
 *
 * Possible results:
 * DKTools.IO.OK
 * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
 * DKTools.IO.ERROR_NOT_LOCAL_MODE
 * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
 * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
 *
 * @param {Object} object - Options of an operation
 *
 * @param {Boolean} [object.sync] - Use synchronous version of readdir
 * @param {String | Object} [object.options] - Options for readdir or readdirSync
 * @param {Function} [object.callback] - Callback function upon completion of an operation (only for object.sync == false)
 * @param {RegExp} [object.template] - Template for filtering
 *
 * @see FileSystem.readdir
 * @see FileSystem.readdirSync
 *
 * @returns {Object} All files and directories
 */
DKTools.IO.Directory.prototype.getAll = function(object) {
    if (!DKTools.IO.isLocalMode()) {
        return { data: null, status: DKTools.IO.ERROR_NOT_LOCAL_MODE };
    }
    if (!this.exists()) {
        return { data: null, status: DKTools.IO.ERROR_PATH_DOES_NOT_EXIST };
    }
    const fs = DKTools.IO.fs;
    const fullPath = this.getFullPath();
    if (object.sync) {
        let names = fs.readdirSync(fullPath, object.options);
        if (object.template instanceof RegExp) {
            names = _.filter(names, function(name) {
                return name.match(object.template);
            });
        }
        const path = this.getPath();
        const data = _.map(names, function(name) {
            if (DKTools.IO.isFile(path, name)) {
                return new DKTools.IO.File(path, name);
            } else if (DKTools.IO.isDirectory(path, name)) {
                return new DKTools.IO.Directory(path, name);
            }
            return null;
        });
        return { data: data, status: DKTools.IO.OK };
    } else if (_.isFunction(object.callback)) {
        fs.readdir(fullPath, object.options, function(error, names) {
            if (error) {
                throw error;
            }
            if (object.template instanceof RegExp) {
                names = _.filter(names, function(name) {
                    return name.match(object.template);
                });
            }
            const path = this.getPath();
            const data = _.map(names, function(name) {
                if (DKTools.IO.isFile(path, name)) {
                    return new DKTools.IO.File(path, name);
                } else if (DKTools.IO.isDirectory(path, name)) {
                    return new DKTools.IO.Directory(path, name);
                }
                return null;
            });
            object.callback(data, this);
        }.bind(this));
        return { data: null, status: DKTools.IO.WAIT_FOR_ASYNC_OPERATION };
    }
    return { data: null, status: DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE };
};

/**
 * Returns all files
 *
 * Returns an object with 2 properties:
 * status - Result of an operation
 * data - Array with files and directories (only if the status is equal to DKTools.IO.OK)
 * if the status is not equal to DKTools.IO.OK then data will be null
 *
 * Possible results:
 * DKTools.IO.OK
 * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
 * DKTools.IO.ERROR_NOT_LOCAL_MODE
 * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
 * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
 *
 * @param {Object} object - Options of an operation
 *
 * @param {Boolean} [object.sync] - Use synchronous version of readdir
 * @param {String | Object} [object.options] - Options for readdir or readdirSync
 * @param {Function} [object.callback] - Callback function upon completion of an operation (only for object.sync == false)
 * @param {RegExp} [object.template] - Template for filtering
 *
 * @see DKTools.IO.Directory.prototype.getAll
 * @see FileSystem.readdir
 * @see FileSystem.readdirSync
 *
 * @returns {Object} All files
 */
DKTools.IO.Directory.prototype.getFiles = function(object) {
    if (!DKTools.IO.isLocalMode()) {
        return { data: null, status: DKTools.IO.ERROR_NOT_LOCAL_MODE };
    }
    if (object.sync) {
        const result = this.getAll(object);
        if (result.status === DKTools.IO.OK) {
            const files = _.filter(result.data, function(entity) {
                return entity instanceof DKTools.IO.File;
            });
            return { data: files, status: DKTools.IO.OK };
        }
        return result;
    } else if (_.isFunction(object.callback)) {
        const callback = object.callback;
        object.callback = function(data, directory) {
            const files = _.filter(data, function(entity) {
                return entity instanceof DKTools.IO.File;
            });
            callback(files, directory);
        };
        return this.getAll(object);
    }
    return { data: null, status: DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE };
};

/**
 * Returns all directories
 *
 * Returns an object with 2 properties:
 * status - Result of an operation
 * data - Array with files and directories (only if the status is equal to DKTools.IO.OK)
 * if the status is not equal to DKTools.IO.OK then data will be null
 *
 * Possible results:
 * DKTools.IO.OK
 * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
 * DKTools.IO.ERROR_NOT_LOCAL_MODE
 * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
 * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
 *
 * @param {Object} object - Options of an operation
 *
 * @param {Boolean} [object.sync] - Use synchronous version of readdir
 * @param {String | Object} [object.options] - Options for readdir or readdirSync
 * @param {Function} [object.callback] - Callback function upon completion of an operation (only for object.sync == false)
 * @param {RegExp} [object.template] - Template for filtering
 *
 * @see DKTools.IO.Directory.prototype.getAll
 * @see FileSystem.readdir
 * @see FileSystem.readdirSync
 *
 * @returns {Object} All directories
 */
DKTools.IO.Directory.prototype.getDirectories = function(object) {
    if (!DKTools.IO.isLocalMode()) {
        return { data: null, status: DKTools.IO.ERROR_NOT_LOCAL_MODE };
    }
    if (object.sync) {
        const result = this.getAll(object);
        if (result.status === DKTools.IO.OK) {
            const directories = _.filter(result.data, function(entity) {
                return entity instanceof DKTools.IO.Directory;
            });
            return { data: directories, status: DKTools.IO.OK };
        }
        return result;
    } else if (_.isFunction(object.callback)) {
        const callback = object.callback;
        object.callback = function(data, directory) {
            const directories = _.filter(data, function(entity) {
                return entity instanceof DKTools.IO.Directory;
            });
            callback(directories, directory);
        };
        return this.getAll(object);
    }
    return { data: null, status: DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE };
};

// other methods

/**
 * Creates the directory
 * Returns a code of the result of an operation
 *
 * Possible results:
 * DKTools.IO.OK
 * DKTools.IO.ERROR_NOT_LOCAL_MODE
 * DKTools.IO.ERROR_DIRECTORY_ALREADY_EXISTS
 *
 * @example
 * var directory = new DKTools.IO.Directory('/', 'saves/');
 * directory.create();
 *
 * @see FileSystem.mkdirSync
 *
 * @returns {Number} Code of the result of an operation
 */
DKTools.IO.Directory.prototype.create = function() {
    if (!DKTools.IO.isLocalMode()) {
        return DKTools.IO.ERROR_NOT_LOCAL_MODE;
    }
    if (this.exists()) {
        return DKTools.IO.ERROR_DIRECTORY_ALREADY_EXISTS;
    }
    DKTools.IO.fs.mkdirSync(this.getFullPath());
    return DKTools.IO.OK;
};

/**
 * Removes the directory
 * Returns a code of the result of an operation
 *
 * Possible results:
 * DKTools.IO.OK
 * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
 * DKTools.IO.ERROR_NOT_LOCAL_MODE
 * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
 * DKTools.IO.ERROR_DIRECTORY_IS_NOT_EMPTY
 *
 * @param {Object} [object] - Options of an operation
 *
 * @param {Boolean} [object.sync] - Use synchronous version of rmdir
 * @param {Function} [object.callback] - Callback function upon completion of an operation (only for object.sync == false)
 *
 * @see FileSystem.rmdir
 * @see FileSystem.rmdirSync
 *
 * @returns {Number} Code of the result of an operation
 */
DKTools.IO.Directory.prototype.remove = function(object) {
    if (!DKTools.IO.isLocalMode()) {
        return DKTools.IO.ERROR_NOT_LOCAL_MODE;
    }

    if (!this.exists()) {
        return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;
    }

    if (!this.isEmpty()) {
        return DKTools.IO.ERROR_DIRECTORY_IS_NOT_EMPTY;
    }

    object = object || {};
    const fs = DKTools.IO.fs;
    const fullPath = this.getFullPath();
    if (object.sync) {
        fs.rmdirSync(fullPath);
        return DKTools.IO.OK;
    } else {
        fs.rmdir(fullPath, function(error) {
            if (error) {
                throw error;
            }
            if (_.isFunction(object.callback)) {
                object.callback(this);
            }
        }.bind(this));
        return DKTools.IO.WAIT_FOR_ASYNC_OPERATION;
    }
};





//===========================================================================
// DKTools.IO.WebStorage
//===========================================================================

/**
 * Returns true if the key exists
 *
 * @static
 * @param {String} key - Key
 * @returns {Boolean} Key exists
 */
DKTools.IO.WebStorage.exists = function(key) {
    return localStorage.hasOwnProperty(key);
};

/**
 * Loads a data
 *
 * Returns an object with 2 properties:
 * status - Result of an operation
 * data - Loaded data (only if the status is equal to DKTools.IO.OK)
 * if the status is not equal to DKTools.IO.OK then data will be null
 *
 * Possible results:
 * DKTools.IO.OK
 * DKTools.IO.ERROR_KEY_IS_NOT_AVAILABLE
 *
 * @static
 *
 * @param {String} key - Key
 * @param {Object} [options] - Options of an operation
 *
 * @param {Boolean} [options.decompress] - Use LZString.decompressFromBase64 for a data
 * @param {Boolean} [options.parse] - Use JSON.parse for a data
 *
 * @returns {Object} Loded data
 */
DKTools.IO.WebStorage.load = function(key, options) {
    if (!this.exists(key)) {
        return { data: null, status: DKTools.IO.ERROR_KEY_IS_NOT_AVAILABLE };
    }
    options = options || {};
    let data = localStorage.getItem(key);
    if (data) {
        if (options.decompress) {
            data = LZString.decompressFromBase64(data);
        }
        if (options.parse) {
            data = JSON.parse(data);
        }
    }
    return { data: data, status: DKTools.IO.OK };
};

/**
 * Saves the data
 * Returns a code of the result of an operation
 *
 * Possible results:
 * DKTools.IO.OK
 * DKTools.IO.ERROR_KEY_IS_NOT_AVAILABLE
 *
 * @static
 *
 * @param {String} key - Key
 * @param {*} data - Data to save
 * @param options - Options of an operation
 *
 * @param {Boolean} [options.stringify] - Use JSON.stringify for the data
 * @param {Boolean} [options.compress] - Use LZString.compressToBase64 for the data
 *
 * @returns {Number} Code of the result of an operation
 */
DKTools.IO.WebStorage.save = function(key, data, options) {
    if (key == null) {
        return DKTools.IO.ERROR_KEY_IS_NOT_AVAILABLE;
    }
    options = options || {};
    if (options.stringify) {
        data = JSON.stringify(data);
    }
    if (options.compress) {
        data = LZString.compressToBase64(data);
    }
    localStorage.setItem(key, data);
    return DKTools.IO.OK;
};

/**
 * Removes a data
 * Returns a code of the result of an operation
 *
 * Possible results:
 * DKTools.IO.OK
 * DKTools.IO.ERROR_KEY_IS_NOT_AVAILABLE
 *
 * @static
 * @param {String} key - Key
 * @returns {Number} Code of the result of an operation
 */
DKTools.IO.WebStorage.remove = function(key) {
    if (!this.exists(key)) {
        return DKTools.IO.ERROR_KEY_IS_NOT_AVAILABLE;
    }
    localStorage.removeItem(key);
    return DKTools.IO.OK;
};

/**
 * Renames a data
 * Returns a code of the result of an operation
 *
 * Possible results:
 * DKTools.IO.OK
 * DKTools.IO.ERROR_KEY_IS_NOT_AVAILABLE
 * DKTools.IO.ERROR_NEW_NAME_IS_NOT_AVAILABLE
 *
 * @static
 * @param {String} oldkey - Old key
 * @param {String} newkey - New key
 * @returns {Number} Code of the result of an operation
 */
DKTools.IO.WebStorage.rename = function(oldKey, newKey) {
    if (!this.exists(oldKey)) {
        return DKTools.IO.ERROR_KEY_IS_NOT_AVAILABLE;
    }
    if (this.exists(newKey) || newKey == null) {
        return DKTools.IO.ERROR_NEW_NAME_IS_NOT_AVAILABLE;
    }
    const data = localStorage.getItem(oldKey);
    localStorage.setItem(newKey, data);
    localStorage.removeItem(oldKey);
    return DKTools.IO.OK;
};





//===========================================================================
// DKTools.Localization
//===========================================================================

/**
 * Locale of the game
 *
 * @private
 * @readonly
 * @type {String}
 * @memberOf DKTools.Localization
 */
DKTools.Localization._locale = '';

/**
 * Languages of the game
 *
 * @private
 * @readonly
 * @type {Object[]}
 * @memberOf DKTools.Localization
 */
DKTools.Localization._languages = {};

/**
 *
 *
 * @private
 * @readonly
 * @type {String}
 * @memberOf DKTools.Localization
 */
DKTools.Localization._localPath = DKToolsParam.get('Local Path');

/**
 *
 *
 * @private
 * @readonly
 * @type {String}
 * @memberOf DKTools.Localization
 */
DKTools.Localization._localFilename = DKToolsParam.get('Local Filename');

/**
 *
 *
 * @private
 * @readonly
 * @type {String}
 * @memberOf DKTools.Localization
 */
DKTools.Localization._webFilename = DKToolsParam.get('Web Filename');

/**
 * @private
 * @readonly
 * @type {Function[]}
 */
DKTools.Localization._listeners = [];

// properties

Object.defineProperties(DKTools.Localization, {

    /**
     * Languages of the game
     *
     * @readonly
     * @type {String[]}
     * @memberOf DKTools.Localization
     */
    languages: {
        get: function() {
            return _.values(this._languages);
        },
        configurable: true
    },

    /**
     * Locales of the game
     *
     * @readonly
     * @type {String[]}
     * @memberOf DKTools.Localization
     */
    locales: {
        get: function() {
            return _.keys(this._languages);
        },
        configurable: true
    },

    /**
     * Locale of the game
     *
     * @type {String}
     * @memberOf DKTools.Localization
     */
    locale: {
        get: function() {
            return this._locale;
        },
        set: function(value) {
            if (value && this._locale !== value) {
                this._setLocale(value);
            }
        },
        configurable: true
    },

    /**
     * Language of the game
     *
     * @readonly
     * @type {String}
     * @memberOf DKTools.Localization
     */
    language: {
        get: function() {
            return this._languages[this._locale];
        },
        configurable: true
    }

});

// initialize methods

/**
 * Initializes the Localization class (loads the game locale)
 *
 * @static
 */
DKTools.Localization.initialize = function() {

    /**
     * @private
     * @readonly
     * @type {Object}
     */
    this._languages = {};

    _.forEach(DKToolsParam.get('Languages'), function(object) {
        this._languages[object.Locale] = object.Language;
        if (object.Primary) {
            this._locale = object.Locale;
        }
    }.bind(this));

    const locales = this.locales;
    if (!DKTools.Utils.Array.isEmpty(locales)) {
        this.loadLocale();
        if (!this._locale) {
            this._locale = locales[0];
            console.warn('You have not installed the primary language of the game! Automatically selected locale: ' + this._locale);
            this.saveLocale();
        }
    } else {
        this.removeLocale();
        throw new Error('Add at least one language! See help of plugin: 1');
    }
};

// get methods

/**
 * Returns the previous locale from the list
 *
 * @static
 * @returns {String | null} Previous locale from the list
 */
DKTools.Localization.getPrevLocale = function() {
    const locales = this.locales;
    let index = _.indexOf(locales, this._locale);
    if (index >= 0) {
        index--;
        if (index < 0) {
            index = locales.length - 1;
        }
        return locales[index];
    }
    return null;
};

/**
 * Returns the next locale from the list
 *
 * @static
 * @returns {String | null} Next locale from the list or null
 */
DKTools.Localization.getNextLocale = function() {
    const locales = this.locales;
    let index = _.indexOf(locales, this._locale);
    if (index >= 0) {
        index++;
        if (index === locales.length) {
            index = 0;
        }
        return locales[index];
    }
    return null;
};

/**
 * Returns the previous language from the list
 *
 * @static
 * @returns {String | null} Previous language from the list or null
 */
DKTools.Localization.getPrevLanguage = function() {
    const locale = this.getPrevLocale();
    if (locale) {
        return this._languages[locale];
    }
    return null;
};

/**
 * Returns the next language from the list
 *
 * @static
 * @returns {String | null} Next language from the list or null
 */
DKTools.Localization.getNextLanguage = function() {
    const locale = this.getNextLocale();
    if (locale) {
        return this._languages[locale];
    }
    return null;
};

/**
 * Returns the language of the game by the locale of the game
 *
 * @static
 *
 * @param {String} locale - Locale
 *
 * @returns {String | undefined} Language or undefined
 */
DKTools.Localization.getLanguageByLocale = function(locale) {
    return this._languages[locale] || undefined;
};

/**
 * Returns the locale of the game by the name of the language
 *
 * @static
 *
 * @param {String} language - Language
 *
 * @returns {String | undefined} Locale or undefined
 */
DKTools.Localization.getLocaleByLanguage = function(language) {
    const languages = _.reduce(this._languages, function(acc, value, key) {
         acc[value] = key;
         return acc;
    }, {});
    return languages[language] || undefined;
};

// other methods

/**
 * @private
 * @static
 * @returns {DKTools.IO.File | null}
 */
DKTools.Localization._getFile = function() {
    if (!DKTools.IO.isLocalMode()) {
        return null;
    }
    const path = DKTools.Localization._localPath;
    const name = DKTools.Localization._localFilename;
    return new DKTools.IO.File(path, name);
};

/**
 * Saves the locale
 *
 * @static
 */
DKTools.Localization.saveLocale = function() {
    if (DKTools.IO.isLocalMode()) {
        const file = this._getFile();
        file.save(this._locale, { sync: true });
    } else {
        DKTools.IO.WebStorage.save(DKTools.Localization._webFilename, this._locale);
    }
};

/**
 * Loads the locale
 *
 * @static
 */
DKTools.Localization.loadLocale = function() {
    let locale;

    if (DKTools.IO.isLocalMode()) {
        const file = this._getFile();
        if (file) {
            const result = file.load({ sync: true });
            locale = result.data;
        }
    } else {
        const result = DKTools.IO.WebStorage.load(DKTools.Localization._webFilename);
        locale = result.data;
    }

    if (this.checkLocale(locale)) {
        this._locale = locale;
    } else {
        this.removeLocale();
    }
};

/**
 * Removes the locale
 *
 * @static
 */
DKTools.Localization.removeLocale = function() {
    if (DKTools.IO.isLocalMode()) {
        const file = this._getFile();
        file.remove({ sync: true });
    } else {
        DKTools.IO.WebStorage.remove(DKTools.Localization._webFilename);
    }
};

/**
 * Selects the previous locale from the list
 *
 * @static
 */
DKTools.Localization.selectPrevLocale = function() {
    const locale = this.getPrevLocale();
    if (locale) {
        this._setLocale(locale);
    }
};

/**
 * Selects the next locale from the list
 *
 * @static
 */
DKTools.Localization.selectNextLocale = function() {
    const locale = this.getNextLocale();
    if (locale) {
        this._setLocale(locale);
    }
};

/**
 * Returns true if locale is valid
 *
 * @static
 * @param {String} locale - Locale
 * @returns {Boolean} Locale is valid
 */
DKTools.Localization.checkLocale = function(locale) {
    return DKTools.Utils.Array.contains(this.locales, locale);
};

/**
 * Sets the game locale
 *
 * @private
 * @static
 *
 * @param {String} locale - Locale
 *
 * @see DKTools.Localization.checkLocale
 */
DKTools.Localization._setLocale = function(locale) {
    if (this.checkLocale(locale)) {
        if (this._locale !== locale) {
            const lastLocale = this._locale;
            this._locale = locale;
            this.saveLocale();
            this._onLocaleChange(lastLocale);
        }
    } else {
        throw new Error('You are trying to establish a non-existent locale: ' + locale);
    }
};

/**
 * Handles the change of the game locale
 *
 * @private
 * @static
 * @param {String} previousLocale - Previous locale
 *
 * @see DKTools.Localization.addChangeLocaleListener
 */
DKTools.Localization._onLocaleChange = function(previousLocale) {
    _.forEach(this._listeners, function(listener) {
        listener(previousLocale);
    });
};

/**
 * Adds a listener of change of the game locale
 *
 * @static
 * @param {Function} listener - Listener
 */
DKTools.Localization.addChangeLocaleListener = function(listener) {
    this._listeners.push(listener);
};





//===========================================================================
// window
//===========================================================================

const DKTools_window_onload = window.onload;
window.onload = function() {
    DKTools.Utils.initialize();
    DKTools.IO.initialize();
    DKTools.Localization.initialize();
    DKTools_window_onload.call(this);
    DKTools.PluginManager.initialize();
};





//===========================================================================
// Graphics
//===========================================================================

const DKTools_Graphics_initialize = Graphics.initialize;
Graphics.initialize = function(width, height, type) {
    DKTools_Graphics_initialize.apply(this, arguments);
    if (Utils.isOptionValid('test') && DKToolsParam.get('Show FPS')) {
        this.showFps();
    }
};





//===========================================================================
// DKTools.Input
//===========================================================================

DKTools.Input = function() {};



//===========================================================================
// Input
//===========================================================================

const DKTools_Input_onKeyUp = Input._onKeyUp;
Input._onKeyUp = function(event) {
    DKTools_Input_onKeyUp.call(this, event);
    if (DKToolsParam.get('Screenshots', 'Take Screenshot') && event.keyCode === DKToolsParam.get('Screenshots', 'Screenshot Key Code')) {
        DKTools.Utils.makeScreenshot();
    }
};





//===========================================================================
// TouchInput
//===========================================================================

// properties

Object.defineProperties(TouchInput, {

    /**
     * The X coordinate of the mouse
     *
     * @readonly
     * @type {Number}
     * @memberOf TouchInput
     */
    mouseX: {
        get: function() {
            return this._mouseX;
        },
        configurable: true
    },

    /**
     * The Y coordinate of the mouse
     *
     * @readonly
     * @type {Number}
     * @memberOf TouchInput
     */
    mouseY: {
        get: function() {
            return this._mouseY;
        },
        configurable: true
    }

});

// methods

const DKTools_TouchInput_clear = TouchInput.clear;
TouchInput.clear = function() {
    DKTools_TouchInput_clear.call(this);

    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._mouseMoved = false;

    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._leftButtonPressed = false;

    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._middleButtonPressed = false;

    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._rightButtonPressed = false;

    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._leftButtonReleased = false;

    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._middleButtonReleased = false;

    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._rightButtonReleased = false;

    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._mouseX = 0;

    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._mouseY = 0;

    this._events.mouseMoved = false;

    this._events.leftButtonPressed = false;
    this._events.middleButtonPressed = false;
    this._events.rightButtonPressed = false;

    this._events.leftButtonReleased = false;
    this._events.middleButtonReleased = false;
    this._events.rightButtonReleased = false;
};

const DKTools_TouchInput_update = TouchInput.update;
TouchInput.update = function() {
    this._mouseMoved = this._events.mouseMoved;

    this._leftButtonPressed = this._events.leftButtonPressed;
    this._middleButtonPressed = this._events.middleButtonPressed;
    this._rightButtonPressed = this._events.rightButtonPressed;

    this._leftButtonReleased = this._events.leftButtonReleased;
    this._middleButtonReleased = this._events.middleButtonReleased;
    this._rightButtonReleased = this._events.rightButtonReleased;

    this._events.mouseMoved = false;

    this._events.leftButtonReleased = false;
    this._events.middleButtonReleased = false;
    this._events.rightButtonReleased = false;

    DKTools_TouchInput_update.call(this);
};

// is methods

/**
 * Returns true if the mouse is moving
 *
 * @static
 * @returns {Boolean} Mouse is moving
 */
TouchInput.isMouseMoved = function() {
    return this._mouseMoved;
};

/**
 * Returns true if the mouse is pressed (left, middle or right button)
 *
 * @static
 * @returns {Boolean} Mouse is pressed (left, middle or right button)
 */
TouchInput.isMousePressed = function() {
    return this.isLeftButtonPressed() || this.isMiddleButtonPressed() || this.isRightButtonPressed();
};

/**
 * Returns true if the mouse is released (left, middle or right button is released)
 *
 * @static
 * @returns {Boolean} Mouse is released (left, middle or right button is released)
 */
TouchInput.isMouseReleased = function() {
    return this.isLeftButtonReleased() || this.isMiddleButtonReleased() || this.isRightButtonReleased();
};

/**
 * Returns true if the screen is pressed (for mobile devices)
 *
 * @static
 * @returns {Boolean} Screen is pressed (for mobile devices)
 */
TouchInput.isScreenPressed = function() {
    return this._screenPressed;
};

/**
 * Returns true if the left mouse button is pressed
 *
 * @static
 * @returns {Boolean} Left mouse button is pressed
 */
TouchInput.isLeftButtonPressed = function() {
    return this._leftButtonPressed;
};

/**
 * Returns true if the left mouse button is released
 *
 * @static
 * @returns {Boolean} Left mouse button is released
 */
TouchInput.isLeftButtonReleased = function() {
    return this._leftButtonReleased;
};

/**
 * Returns true if the middle mouse button is pressed
 *
 * @static
 * @returns {Boolean} Middle mouse button is pressed
 */
TouchInput.isMiddleButtonPressed = function() {
    return this._middleButtonPressed;
};

/**
 * Returns true if the middle mouse button is released
 *
 * @static
 * @returns {Boolean} Middle mouse button is released
 */
TouchInput.isMiddleButtonReleased = function() {
    return this._middleButtonReleased;
};

/**
 * Returns true if the right mouse button is pressed
 *
 * @static
 * @returns {Boolean} Right mouse button is pressed
 */
TouchInput.isRightButtonPressed = function() {
    return this._rightButtonPressed;
};

/**
 * Returns true if the right mouse button is released
 *
 * @static
 * @returns {Boolean} Right mouse button is released
 */
TouchInput.isRightButtonReleased = function() {
    return this._rightButtonReleased;
};

// event methods

const DKTools_TouchInput_onLeftButtonDown = TouchInput._onLeftButtonDown;
TouchInput._onLeftButtonDown = function(event) {
    DKTools_TouchInput_onLeftButtonDown.call(this, event);
    const x = Graphics.pageToCanvasX(event.pageX);
    const y = Graphics.pageToCanvasY(event.pageY);
    if (Graphics.isInsideCanvas(x, y)) {
        this._events.leftButtonPressed = true;
    }
};

const DKTools_TouchInput_onMiddleButtonDown = TouchInput._onMiddleButtonDown;
TouchInput._onMiddleButtonDown = function(event) {
    DKTools_TouchInput_onMiddleButtonDown.call(this, event);
    const x = Graphics.pageToCanvasX(event.pageX);
    const y = Graphics.pageToCanvasY(event.pageY);
    if (Graphics.isInsideCanvas(x, y)) {
        this._events.middleButtonPressed = true;
    }
};

const DKTools_TouchInput_onRightButtonDown = TouchInput._onRightButtonDown;
TouchInput._onRightButtonDown = function(event) {
    DKTools_TouchInput_onRightButtonDown.call(this, event);
    const x = Graphics.pageToCanvasX(event.pageX);
    const y = Graphics.pageToCanvasY(event.pageY);
    if (Graphics.isInsideCanvas(x, y)) {
        this._events.rightButtonPressed = true;
    }
};

const DKTools_TouchInput_onMouseMove = TouchInput._onMouseMove;
TouchInput._onMouseMove = function(event) {
    DKTools_TouchInput_onMouseMove.call(this, event);
    const x = Graphics.pageToCanvasX(event.pageX);
    const y = Graphics.pageToCanvasY(event.pageY);
    if (this._mouseX !== x || this._mouseY !== y) {
        this._events.mouseMoved = true;
        this._mouseX = x;
        this._mouseY = y;
    }
};

const DKTools_TouchInput_onMouseUp = TouchInput._onMouseUp;
TouchInput._onMouseUp = function(event) {
    DKTools_TouchInput_onMouseUp.call(this, event);
    this._events.leftButtonPressed = false;
    this._events.middleButtonPressed = false;
    this._events.rightButtonPressed = false;
    const x = Graphics.pageToCanvasX(event.pageX);
    const y = Graphics.pageToCanvasY(event.pageY);
    if (Graphics.isInsideCanvas(x, y)) {
        if (event.button === 0) { // left button
            this._events.leftButtonReleased = true;
        } else if (event.button === 1) { // middle button
            this._events.middleButtonReleased = true;
        } else if (event.button === 2) { // right button
            this._events.rightButtonReleased = true;
        }
    }
};





//===========================================================================
// SceneManager
//===========================================================================

const DKTools_SceneManager_initGraphics = SceneManager.initGraphics;
SceneManager.initGraphics = function() {
    const param = DKToolsParam.get('Screen');
    if (param['Screen Resolution']) {
        const width = param['Screen Width'];
        const height = param['Screen Height'];
        this._screenWidth = this._boxWidth = width;
        this._screenHeight = this._boxHeight = height;
        DKTools_SceneManager_initGraphics.call(this);
        if (DKTools.Utils.isNwjs()) {
            this.updateResolution();
        }
    } else {
        DKTools_SceneManager_initGraphics.call(this);
    }
};

SceneManager.updateResolution = function() {
    const resizeWidth = this._screenWidth - window.innerWidth;
    const resizeHeight = this._screenHeight - window.innerHeight;
    if (!Imported.ScreenResolution && resizeWidth && resizeHeight) {
        window.moveBy(-1 * resizeWidth / 2, -1 * resizeHeight / 2);
        window.resizeBy(resizeWidth, resizeHeight);
    }
};





//===========================================================================
// Scene_Boot
//===========================================================================

const DKTools_Scene_Boot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
    const quickStart = DKToolsParam.get('Quick Start');
    if (quickStart['Quick Start']) {
        DKTools_Scene_Boot_start.call(this);
        const saveExists = DataManager.isAnySavefileExists();
        if (!DataManager.isBattleTest() && !DataManager.isEventTest() && (quickStart['Skip Saves']) || !saveExists) {
            Scene_Base.prototype.start.call(this);
            SoundManager.preloadImportantSounds();
            this.checkPlayerLocation();
            DataManager.setupNewGame();
            this.updateDocumentTitle();
            SceneManager.goto(window[quickStart['Scene Name']]);
        }
    } else {
        DKTools_Scene_Boot_start.call(this);
    }
};





//===========================================================================
// DKTools.Audio
//===========================================================================

/**
 * @private
 * @readonly
 * @type {String}
 */
DKTools.Audio._basePath = AudioManager._basePath || 'audio/';

// properties

Object.defineProperties(DKTools.Audio.prototype, {

    /**
     * Type of the audio file
     *
     * @readonly
     * @type {String}
     * @memberOf DKTools.Audio.prototype
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
     * @memberOf DKTools.Audio.prototype
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
     * @memberOf DKTools.Audio.prototype
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
     * @memberOf DKTools.Audio.prototype
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
     * @memberOf DKTools.Audio.prototype
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
     * @memberOf DKTools.Audio.prototype
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
     * @memberOf DKTools.Audio.prototype
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
     * @memberOf DKTools.Audio.prototype
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

// static methods

/**
 * Returns the extension of the audio file
 *
 * @static
 * @returns {String} Extension of the audio file
 */
DKTools.Audio.audioFileExt = function() {
    if (WebAudio.canPlayOgg() && !DKTools.Utils.isMobileDevice()) {
        return '.ogg';
    }
    return '.m4a';
};

// initialize methods

/**
 * @param {DKTools.Audio | Object} object - DKTools.Audio or object with parameters
 *
 * @param {String} object.type - Type of the audio file
 * @param {String} object.name - Name of the audio file
 * @param {Number} [object.volume=this.standardVolume()] - Volume of the audio file
 * @param {Number} [object.pitch=this.standardPitch()] - Pitch of the audio file
 * @param {Number} [object.pan=this.standardPan()] - Panorama of the audio file
 * @param {Boolean} [object.loop=this.standardLoop()] - Looping of the audio file
 */
DKTools.Audio.prototype.initialize = function(object) {
    object = object || {};

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
    this._volume = (_.isFinite(object.volume) ? object.volume : this.standardVolume());

    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._pitch = (_.isFinite(object.pitch) ? object.pitch : this.standardPitch());

    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._pan = (_.isFinite(object.pan) ? object.pan : this.standardPan());

    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._loop = (_.isBoolean(object.loop) ? object.loop : this.standardLoop());

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
};

// standard methods

/**
 * Returns the standard volume of the audio file
 *
 * @returns {Number} Standard volume of the audio file
 */
DKTools.Audio.prototype.standardVolume = function() {
    return 90;
};

/**
 * Returns the standard pitch of the audio file
 *
 * @returns {Number} Standard pitch of the audio file
 */
DKTools.Audio.prototype.standardPitch = function() {
    return 100;
};

/**
 * Returns the standard panorama of the audio file
 *
 * @returns {Number} Standard panorama of the audio file
 */
DKTools.Audio.prototype.standardPan = function() {
    return 0;
};

/**
 * Returns the standard looping of the audio file
 *
 * @returns {Boolean} Standard looping of the audio file
 */
DKTools.Audio.prototype.standardLoop = function() {
    return this._type === 'bgm' || this._type === 'bgs';
};

// clone methods

/**
 * Clones the audio file
 *
 * @returns {DKTools.Audio} Cloned audio file
 */
DKTools.Audio.prototype.clone = function() {
    return new DKTools.Audio(this);
};

// is methods

/**
 * Returns true if the audio file is playing
 *
 * @see WebAudio.prototype.isPlaying
 *
 * @returns {Boolean} Audio file is playing
 */
DKTools.Audio.prototype.isPlaying = function() {
    return this._buffer.isPlaying();
};

/**
 * Returns true if the audio file is paused
 *
 * @returns {Boolean} Audio file is paused
 */
DKTools.Audio.prototype.isPaused = function() {
    return !this.isPlaying() && this._pausePos != null;
};

// audio methods

/**
 * Plays the audio file
 *
 * @param {Number} [pos = 0] - Playback position
 *
 * @see WebAudio.prototype.play
 */
DKTools.Audio.prototype.play = function(pos) {
    this._buffer.play(this._loop, pos || 0);
    this._updateBufferParameters();

    this._pausePos = null;
};

/**
 * Pauses the audio file
 */
DKTools.Audio.prototype.pause = function() {
    if (this.isPlaying()) {
        this._pausePos = this.seek();
        this.stop();
    }
};

/**
 * Continues playing the audio file
 */
DKTools.Audio.prototype.resume = function() {
    if (this.isPaused()) {
        this.play(this._pausePos);
    }
};

/**
 * Stops the audio file
 *
 * @see WebAudio.prototype.stop
 */
DKTools.Audio.prototype.stop = function() {
    if (this.isPlaying()) {
        this._buffer.stop();
    }
};

/**
 * Returns the current position of the audio file
 *
 * @see WebAudio.prototype.seek
 *
 * @returns {Number} Current position of the audio file
 */
DKTools.Audio.prototype.seek = function() {
    return this._buffer.seek();
};

/**
 * Performs the audio file fade-in
 *
 * @param {Number} [duration=0] - Fade-in time in seconds
 *
 * @see WebAudio.prototype.fadeIn
 */
DKTools.Audio.prototype.fadeIn = function(duration) {
    this._buffer.fadeIn(duration || 0);
};

/**
 * Performs the audio file fade-out
 *
 * @param {Number} [duration=0] - Fade-out time in seconds
 *
 * @see WebAudio.prototype.fadeOut
 */
DKTools.Audio.prototype.fadeOut = function(duration) {
    this._buffer.fadeOut(duration || 0);
};

// other methods

/**
 * Updates the buffer parameters (volume, pitch and panorama)
 *
 * @private
 */
DKTools.Audio.prototype._updateBufferParameters = function() {
    const configVolume = AudioManager[this._type + 'Volume'];
    const buffer = this._buffer;
    buffer.volume = configVolume * this._volume / 10000;
    buffer.pitch = this._pitch / 100;
    buffer.pan = this._pan / 100;
};

/**
 * Creates the audio buffer
 * Returns the created buffer
 *
 * @private
 * @returns {WebAudio} Created buffer
 */
DKTools.Audio.prototype._createBuffer = function() {
    const ext = DKTools.Audio.audioFileExt();
    const folder = this._type;
    const name = this._name;
    const url = DKTools.Audio._basePath + folder + '/' + encodeURIComponent(name) + ext;
    return new WebAudio(url);
};

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
DKTools.Audio.prototype.equals = function(object) {
    if (!object) {
        return false;
    }
    return this._type === object.type && this._name === object.name &&
            this._volume === object.volume && this._pitch === object.pitch &&
            this._pan === object.pan && this._loop === object.loop;
};





//===========================================================================
// DKTools.Event
//===========================================================================

// properties

Object.defineProperties(DKTools.Event.prototype, {

    /**
     * Target of the event
     *
     * @readonly
     * @type {DKTools.Sprite | DKTools.Window | *}
     * @memberOf DKTools.Event.prototype
     */
    target: {
        get: function() {
            return this._target;
        },
        configurable: true
    },

    /**
     * Type of the event
     *
     * @readonly
     * @type {String}
     * @memberOf DKTools.Event.prototype
     */
    type: {
        get: function() {
            return this._type;
        },
        configurable: true
    },

    /**
     * Time of one repeat
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Event.prototype
     */
    repeatTime: {
        get: function() {
            return this._duration;
        },
        configurable: true
    },

    /**
     * Amount of repeats
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Event.prototype
     */
    repeats: {
        get: function() {
            return this._repeats;
        },
        configurable: true
    },

    /**
     * Remaining time of current repeat
     *
     * @type {Number}
     * @memberOf DKTools.Event.prototype
     */
    remainingTime: {
        get: function() {
            return this._remainingTime;
        },
        set: function(value) {
            this._remainingTime = value;
        },
        configurable: true
    },

    /**
     * Remaining amount of repeats
     *
     * @type {Number}
     * @memberOf DKTools.Event.prototype
     */
    remainingRepeats: {
        get: function() {
            return this._remainingRepeats;
        },
        set: function(value) {
            this._remainingRepeats = value;
        },
        configurable: true
    },

    /**
     * Remaining time of pause
     *
     * @type {Number}
     * @memberOf DKTools.Event.prototype
     */
    remainingPauseTime: {
        get: function() {
            return this._remainingPauseTime;
        },
        set: function(value) {
            this._remainingPauseTime = value;
        },
        configurable: true
    },

    /**
     * Handler of the event start
     *
     * @readonly
     * @type {Function}
     * @memberOf DKTools.Event.prototype
     */
    onStart: {
        get: function() {
            return this._onStart;
        },
        configurable: true
    },

    /**
     * Handler of the event update
     *
     * @readonly
     * @type {Function}
     * @memberOf DKTools.Event.prototype
     */
    onUpdate: {
        get: function() {
            return this._onUpdate;
        },
        configurable: true
    },

    /**
     * Handler of the event pause
     *
     * @readonly
     * @type {Function}
     * @memberOf DKTools.Event.prototype
     */
    onPause: {
        get: function() {
            return this._onPause;
        },
        configurable: true
    },

    /**
     * Handler of the event reset
     *
     * @readonly
     * @type {Function}
     * @memberOf DKTools.Event.prototype
     */
    onReset: {
        get: function() {
            return this._onReset;
        },
        configurable: true
    },

    /**
     * Handler of the event repeat
     *
     * @readonly
     * @type {Function}
     * @memberOf DKTools.Event.prototype
     */
    onRepeat: {
        get: function() {
            return this._onRepeat;
        },
        configurable: true
    },

    /**
     * Handler of the event success
     *
     * @readonly
     * @type {Function}
     * @memberOf DKTools.Event.prototype
     */
    onSuccess: {
        get: function() {
            return this._onSuccess;
        },
        configurable: true
    },

    /**
     * Handler of the event failure
     *
     * @readonly
     * @type {Function}
     * @memberOf DKTools.Event.prototype
     */
    onFailure: {
        get: function() {
            return this._onFailure;
        },
        configurable: true
    }

});

// initialize methods

/**
 * @param {Object} [object] - Parameters
 *
 * @param {DKTools.Sprite | DKTools.Window | *} [object.target] - Target of the event
 * @param {String} [object.type] - Type of the event
 * @param {Number} [object.repeatTime] - Time of one repeat
 * @param {Number} [object.repeats] - Amount of repeats
 * @param {Number} [object.remainingPauseTime] - Remaining time of pause
 * @param {Function} [object.onStart] - Handler of the event start
 * @param {Function} [object.onUpdate] - Handler of the event update
 * @param {Function} [object.onPause] - Handler of the event pause
 * @param {Function} [object.onReset] - Handler of the event reset
 * @param {Function} [object.onRepeat] - Handler of the event repeat
 * @param {Function} [object.onSuccess] - Handler of the event success
 * @param {Function} [object.onFailure] - Handler of the event failure
 */
DKTools.Event.prototype.initialize = function(object) {
    object = object || {};

    /**
     * @private
     * @readonly
     * @type {DKTools.Sprite | DKTools.Window | *}
     */
    this._target = object.target;

    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._type = object.type;

    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._repeatTime = object.repeatTime || -1;

    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._repeats = (object.repeats == null ? -1 : object.repeats);

    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._remainingPauseTime = object.remainingPauseTime || 0;

    /**
     * @private
     * @readonly
     * @type {Funciton | null}
     */
    this._onStart = object.onStart;

    /**
     * @private
     * @readonly
     * @type {Function | null}
     */
    this._onUpdate = object.onUpdate;

    /**
     * @private
     * @readonly
     * @type {Funciton | null}
     */
    this._onPause = object.onPause;

    /**
     * @private
     * @readonly
     * @type {Function | null}
     */
    this._onReset = object.onReset;

    /**
     * @private
     * @readonly
     * @type {Function | null}
     */
    this._onRepeat = object.onRepeat;

    /**
     * @private
     * @readonly
     * @type {Function | null}
     */
    this._onSuccess = object.onSuccess;

    /**
     * @private
     * @readonly
     * @type {Function | null}
     */
    this._onFailure = object.onFailure;

    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._started = false;

    this._resetRemainingTime();
    this._resetRemainingRepeats();
};

// _reset methods

/**
 * Clears the remaining time of the event repeat
 *
 * @private
 */
DKTools.Event.prototype._resetRemainingTime = function() {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._remainingTime = this._repeatTime;
};

/**
 * Clears the remaining amount of repeats of the event
 *
 * @private
 */
DKTools.Event.prototype._resetRemainingRepeats = function() {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._remainingRepeats = this._repeats;
};

// _can methods

/**
 * Returns true if can call on start handler
 *
 * @private
 * @returns {Boolean} Can call on start handler
 */
DKTools.Event.prototype._canCallOnStartHandler = function() {
    return this.hasOnStartHandler() && !this.isStarted();
};

/**
 * Returns true if can call on update handler
 *
 * @private
 * @returns {Boolean} Can call on update handler
 */
DKTools.Event.prototype._canCallOnUpdateHandler = function() {
    return this.hasOnUpdateHandler() && this.isUpdated();
};

/**
 * Returns true if can call on pause handler
 *
 * @private
 * @returns {Boolean} Can call on pause handler
 */
DKTools.Event.prototype._canCallOnPauseHandler = function() {
    return this.hasOnPauseHandler() && this.isPaused();
};

/**
 * Returns true if can call on reset handler
 *
 * @private
 * @returns {Boolean} Can call on reset handler
 */
DKTools.Event.prototype._canCallOnResetHandler = function() {
    return this.hasOnResetHandler();
};

/**
 * Returns true if can call on repeat handler
 *
 * @private
 * @returns {Boolean} Can call on repeat handler
 */
DKTools.Event.prototype._canCallOnRepeatHandler = function() {
    return this.hasOnRepeatHandler();
};

/**
 * Returns true if can call on success handler
 *
 * @private
 * @returns {Boolean} Can call on success handler
 */
DKTools.Event.prototype._canCallOnSuccessHandler = function() {
    return this.hasOnSuccessHandler() && this.isFinished();
};

/**
 * Returns true if can call on failure handler
 *
 * @private
 * @returns {Boolean} Can call on failure handler
 */
DKTools.Event.prototype._canCallOnFailureHandler = function() {
    return this.hasOnFailureHandler();
};

// _call methods

/**
 * Calls on start handler
 *
 * @private
 */
DKTools.Event.prototype._callOnStartHandler = function() {
    if (this._canCallOnStartHandler()) {
        this._onStart(this);
    }
    this._started = true;
};

/**
 * Calls on update handler
 *
 * @private
 */
DKTools.Event.prototype._callOnUpdateHandler = function() {
    if (this._canCallOnUpdateHandler()) {
        this._onUpdate(this);
    }
};

/**
 * Calls on pause handler
 *
 * @private
 */
DKTools.Event.prototype._callOnPauseHandler = function() {
    if (this._canCallOnPauseHandler()) {
        this._onPause(this);
    }
};

/**
 * Calls on reset handler
 *
 * @private
 */
DKTools.Event.prototype._callOnResetHandler = function() {
    if (this._canCallOnResetHandler()) {
        this._onReset(this);
    }
};

/**
 * Calls on repeat handler
 *
 * @private
 */
DKTools.Event.prototype._callOnRepeatHandler = function() {
    if (this._canCallOnRepeatHandler()) {
        this._onRepeat(this);
    }
};

/**
 * Calls on success handler
 *
 * @private
 */
DKTools.Event.prototype._callOnSuccessHandler = function(forcedSuccess) {
    if (this._canCallOnSuccessHandler() || forcedSuccess) {
        this._onSuccess(this);
    }
};

/**
 * Calls on failure handler
 *
 * @private
 */
DKTools.Event.prototype._callOnFailureHandler = function() {
    if (this._canCallOnFailureHandler()) {
        this._onFailure(this);
    }
};

// get methods

/**
 * Returns the elapsed time
 *
 * @returns {Number} Elapsed time
 */
DKTools.Event.prototype.getElapsedTime = function() {
    return this._repeatTime - this._remainingTime;
};

/**
 * Returns the elapsed repeats
 *
 * @returns {Number} Elapsed repeats
 */
DKTools.Event.prototype.getElapsedRepeats = function() {
    return this._repeats - this._remainingRepeats;
};

// has methods

/**
 * Returns true if the event has the target
 *
 * @returns {Boolean} Event has the target
 */
DKTools.Event.prototype.hasTarget = function() {
    return !!this._target;
};

/**
 * Returns true if the event has the type
 *
 * @returns {Boolean} Event has the type
 */
DKTools.Event.prototype.hasType = function() {
    return !!this._type;
};

/**
 * Returns true if the event has the on start handler
 *
 * @returns {Boolean} Event has the on start handler
 */
DKTools.Event.prototype.hasOnStartHandler = function() {
    return !!this._onStart;
};

/**
 * Returns true if the event has the on update handler
 *
 * @returns {Boolean} Event has the on update handler
 */
DKTools.Event.prototype.hasOnUpdateHandler = function() {
    return !!this._onUpdate;
};

/**
 * Returns true if the event has the on pause handler
 *
 * @returns {Boolean} Event has the on pause handler
 */
DKTools.Event.prototype.hasOnPauseHandler = function() {
    return !!this._onPause;
};

/**
 * Returns true if the event has the on reset handler
 *
 * @returns {Boolean} Event has the on reset handler
 */
DKTools.Event.prototype.hasOnResetHandler = function() {
    return !!this._onReset;
};

/**
 * Returns true if the event has the on repeat handler
 *
 * @returns {Boolean} Event has the on repeat handler
 */
DKTools.Event.prototype.hasOnRepeatHandler = function() {
    return !!this._onRepeat;
};

/**
 * Returns true if the event has the on failure handler
 *
 * @returns {Boolean} Event has the on failure handler
 */
DKTools.Event.prototype.hasOnFailureHandler = function() {
    return !!this._onFailure;
};

/**
 * Returns true if the event has the on success handler
 *
 * @returns {Boolean} Event has the on success handler
 */
DKTools.Event.prototype.hasOnSuccessHandler = function() {
    return !!this._onSuccess;
};

// set methods

/**
 * Sets the target
 *
 * @param {DKTools.Sprite | DKTools.Window | *} target - Target
 */
DKTools.Event.prototype.setTarget = function(target) {
    this._target = target;
};

/**
 * Sets the on start handler
 *
 * @param {Function} handler - Handler
 */
DKTools.Event.prototype.setOnStartHandler = function(handler) {
    this._onStart = handler;
};

/**
 * Sets the on update handler
 *
 * @param {Function} handler - Handler
 */
DKTools.Event.prototype.setOnUpdateHandler = function(handler) {
    this._onUpdate = handler;
};

/**
 * Sets the on pause handler
 *
 * @param {Function} handler - Handler
 */
DKTools.Event.prototype.setOnPauseHandler = function(handler) {
    this._onPause = handler;
};

/**
 * Sets the on reset handler
 *
 * @param {Function} handler - Handler
 */
DKTools.Event.prototype.setOnResetHandler = function(handler) {
    this._onReset = handler;
};

/**
 * Sets the on repeat handler
 *
 * @param {Function} handler - Handler
 */
DKTools.Event.prototype.setOnRepeatHandler = function(handler) {
    this._onRepeat = handler;
};

/**
 * Sets the on success handler
 *
 * @param {Function} handler - Handler
 */
DKTools.Event.prototype.setOnSuccessHandler = function(handler) {
    this._onSuccess = handler;
};

/**
 * Sets the on failuer handler
 *
 * @param {Function} handler - Handler
 */
DKTools.Event.prototype.setOnFailureHandler = function(handler) {
    this._onFailure = handler;
};

// other methods

/**
 * Pauses the event
 *
 * @param {Number} [duration=-1] - Duration of pause
 */
DKTools.Event.prototype.pause = function(duration) {
    this._remainingPauseTime = duration || -1;
};

/**
 * Resumes the event
 */
DKTools.Event.prototype.resume = function() {
    this._remainingPauseTime = 0;
};

/**
 * Removes the event
 */
DKTools.Event.prototype.remove = function() {
    if (this.hasTarget()) {
        this._target.removeEvent(this);
    }
};

/**
 * Clones the event
 *
 * @returns {DKTools.Event | DKTools.Animation | DKTools.Animation.Action} Cloned event
 */
DKTools.Event.prototype.clone = function() {
    return new (this.constructor)(this);
};

/**
 * Resets the event
 */
DKTools.Event.prototype.reset = function() {
    this._resetRemainingDuration();
    this._resetRemainingRepeats();
    this._callOnResetHandler();
};

/**
 * Repeats the event
 */
DKTools.Event.prototype.repeat = function() {
    if (this._remainingRepeats > 0) {
        this._remainingRepeats--;
    }
    this._resetRemainingTime();
    this._callOnRepeatHandler();
};

/**
 * Finishes the event
 *
 * @param {Boolean} [forcedSuccess=false] - Forced successful completion of the event
 */
DKTools.Event.prototype.finish = function(forcedSuccess) {
    if (this.isFinished() || forcedSuccess) {
        this._callOnSuccessHandler(forcedSuccess);
    } else {
        this._callOnFailureHandler();
    }
};

/**
 * Stops the event
 *
 * @param {Boolean} [forcedSuccess=false] - Forced successful completion of the event
 */
DKTools.Event.prototype.stop = function(forcedSuccess) {
    this.finish(forcedSuccess);
    this.reset();
};

// is methods

/**
 * Returns true if the event is started
 *
 * @returns {Boolean} Event is started
 */
DKTools.Event.prototype.isStarted = function() {
    return this._started;
};

/**
 * Returns true if the event is updated
 *
 * @returns {Boolean} Event is updated
 */
DKTools.Event.prototype.isUpdated = function() {
    return this.isStarted() && !this.isPaused() && !this.isFinished();
};

/**
 * Returns true if the event if finished
 *
 * @returns {Boolean} Event if finished
 */
DKTools.Event.prototype.isFinished = function() {
    return this._remainingTime === 0 && this._remainingRepeats === 0;
};

/**
 * Returns true if the event is paused
 *
 * @returns {Boolean} Event is paused
 */
DKTools.Event.prototype.isPaused = function() {
    return this._remainingPauseTime !== 0;
};

/**
 * Returns true if the event is animation
 *
 * @returns {Boolean} Event is animation
 */
DKTools.Event.prototype.isAnimation = function() {
    return this instanceof DKTools.Animation;
};

/**
 * Returns true if the event is action of an animation
 *
 * @returns {Boolean} Event is action of an animation
 */
DKTools.Event.prototype.isAnimationAction = function() {
    return this instanceof DKTools.Animation.Action;
};

// add methods

/**
 * Adds the remaining time to the event
 *
 * @param {Number} time - Time
 */
DKTools.Event.prototype.addRemainingTime = function(time) {
    this._remainingTime += time;
};

/**
 * Adds the remaining repeats to the event
 *
 * @param {Number} repeats - Repeats
 */
DKTools.Event.prototype.addRemainingRepeats = function(repeats) {
    this._remainingRepeats += repeats;
};

/**
 * Adds the remaining pause time to the event
 *
 * @param {Number} time - Time
 */
DKTools.Event.prototype.addRemainingPauseTime = function(time) {
    this._remainingPauseTime += time;
};

// _update methods

/**
 * Updates the remaining pause time
 *
 * @private
 */
DKTools.Event.prototype._updateRemainingPauseTime = function() {
    if (this._remainingPauseTime > 0) {
        this._remainingPauseTime--;
    }
};

/**
 * Updates the pause
 *
 * @private
 */
DKTools.Event.prototype._updatePause = function() {
    this._updateRemainingPauseTime();
    this._callOnPauseHandler();
};

/**
 * Updates the remaining time
 *
 * @private
 */
DKTools.Event.prototype._updateRemainingTime = function() {
    if (this._remainingTime > 0) {
        this._remainingTime--;
    }
};

/**
 * Updates the remaining repeats
 *
 * @private
 */
DKTools.Event.prototype._updateRemainingRepeats = function() {
    if (!this.isFinished()) {
        if (this._remainingTime === 0) {
            this.repeat();
        } else {
            this._updateRemainingTime();
        }
    }
};

/**
 * Updates the event
 *
 * @private
 */
DKTools.Event.prototype._update = function() {
    this._callOnUpdateHandler();
    this._updateRemainingRepeats();
};

// update methods

/**
 * Updates the event
 */
DKTools.Event.prototype.update = function() {
    if (!this.isPaused()) {
        this._callOnStartHandler();
        this._update();
        if (this.isFinished()) {
            this.finish();
        }
    } else {
        this._updatePause();
    }
};





//===========================================================================
// DKTools.Animation
//===========================================================================

DKTools.Animation.prototype = Object.create(DKTools.Event.prototype);
DKTools.Animation.prototype.constructor = DKTools.Animation;

// properties

Object.defineProperties(DKTools.Animation.prototype, {

    /**
     * Actions of the animation
     *
     * @readonly
     * @type {Array}
     * @memberOf DKTools.Animation.prototype
     */
    actions: {
        get: function() {
            return this._actions;
        },
        configurable: true
    }

});

// initialize methods

/**
 * @override
 *
 * @param {DKTools.Animation | Object} [object] - DKTools.Animation or parameters
 *
 * @see DKTools.Event.prototype.initialize
 */
DKTools.Animation.prototype.initialize = function(object) {

    /**
     * @private
     * @readonly
     * @type {Array}
     */
    this._actions = [];

    DKTools.Event.prototype.initialize.call(this, object);
};

// _can methods

/**
 * Returns true if can update the action
 *
 * @private
 * @returns {Boolean} Can update the action
 */
DKTools.Animation.prototype._canUpdateAction = function(action) {
    return _.inRange(this.getElapsedTime(), action.startTime, action.endTime);
};

// has methods

/**
 * Returns true if the animation has the action
 *
 * @param {DKTools.Animation.Action} action - Action
 * @returns {Boolean} Animation has the action
 */
DKTools.Animation.prototype.hasAction = function(action) {
    return DKTools.Utils.Array.contains(this._actions, action);
};

/**
 * Returns true if the animation has the actions
 *
 * @returns {Boolean} Animation has the actions
 */
DKTools.Animation.prototype.hasActions = function() {
    return !DKTools.Utils.Array.isEmpty(this._actions);
};

// is methods

/**
 * Returns true if the action is updated
 *
 * @param {DKTools.Animation.Action} action - Action
 * @returns {Boolean} Action is updated
 */
DKTools.Animation.prototype.isActionUpdated = function(action) {
    return action.isStarted() && !action.isPaused() && this._canUpdateAction(action);
};

/**
 * Returns true if the action is finished
 *
 * @param {DKTools.Animation.Action} action - Action
 * @returns {Boolean} Action is finished
 */
DKTools.Animation.prototype.isActionFinished = function(action) {
    return action.isStarted() && !action.isPaused() && this.getElapsedTime() >= action.endTime;
};

// other methods

/**
 * Removes the action
 *
 * @param {DKTools.Animation.Action} action - Action
 */
DKTools.Animation.prototype.removeAction = function(action) {
    if (this.hasAction(action)) {
        DKTools.Utils.Array.remove(this._actions, action);
    }
};

/**
 * Resets the animation
 *
 * @override
 */
DKTools.Animation.prototype.reset = function() {
    this.resetActions();
    DKTools.Event.prototype.reset.call(this);
};

/**
 * Repeats the animation
 *
 * @override
 */
DKTools.Animation.prototype.repeat = function() {
    this.repeatActions();
    DKTools.Event.prototype.repeat.call(this);
};

/**
 * Resets the actions
 */
DKTools.Animation.prototype.resetActions = function() {
    _.forEach(this._actions, function(action) {
        action.reset();
    });
};

/**
 * Repeats the actions
 */
DKTools.Animation.prototype.repeatActions = function() {
    _.forEach(this._actions, function(action) {
        action.repeat();
    });
};

// add methods

/**
 * Adds the action
 *
 * @param {DKTools.Animation.Action} action - Action
 */
DKTools.Animation.prototype.addAction = function(action) {
    if (!action) {
        return;
    }
    if (!_.isFinite(action.startTime)) {
        action.startTime = 0;
    }
    if (!_.isFinite(action.endTime)) {
        action.endTime = this._finishDuration;
    }
    action.setAnimation(this);
    this._actions.push(action);
};

/**
 * Adds the actions
 *
 * @param {DKTools.Animation.Action[]} actions - Actions
 */
DKTools.Animation.prototype.addActions = function(actions) {
    _.forEach(actions, this.addAction.bind(this));
};

// _update methods

/**
 * Updates the action
 *
 * @private
 * @param {DKTools.Animation.Action} action - Action
 */
DKTools.Animation.prototype._updateAction = function(action) {
    if (this._canUpdateAction(action)) {
        action.update();
    }
};

/**
 * Updates the actions
 *
 * @private
 */
DKTools.Animation.prototype._updateActions = function() {
    _.forEach(this._actions, this._updateAction.bind(this));
};

/**
 * Updates the animation
 *
 * @private
 * @override
 */
DKTools.Animation.prototype._update = function() {
    this._updateActions();
    DKTools.Event.prototype._update.call(this);
};





//===========================================================================
// DKTools.Animation.Action
//===========================================================================

DKTools.Animation.Action.prototype = Object.create(DKTools.Event.prototype);
DKTools.Animation.Action.prototype.constructor = DKTools.Animation.Action;

// properties

Object.defineProperties(DKTools.Animation.Action.prototype, {

    /**
     * Animation
     *
     * @readonly
     * @type {DKTools.Animation}
     * @memberOf DKTools.Animation.Action.prototype
     */
    animation: {
        get: function() {
            return this._animation;
        },
        configurable: true
    },

    /**
     * Start time of the action
     *
     * @type {Number}
     * @memberOf DKTools.Animation.Action.prototype
     */
    startTime: {
        get: function() {
            return this._startTime;
        },
        set: function(value) {
            this._startTime = value;
        },
        configurable: true
    },

    /**
     * End time of the action
     *
     * @type {Number}
     * @memberOf DKTools.Animation.Action.prototype
     */
    endTime: {
        get: function() {
            return this._endTime;
        },
        set : function(value) {
            this._endTime = value;
        },
        configurable: true
    },

    /**
     * Data of the action
     *
     * @readonly
     * @type {*}
     * @memberOf DKTools.Animation.Action.prototype
     */
    data: {
        get: function() {
            return this._data;
        },
        configurable: true
    }

});

// actions

/**
 * Creates an action to rotate a target
 * Returns the action
 *
 * @static
 *
 * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
 *
 * @see DKTools.Animation.Action.prototype.initialize
 *
 * @returns {DKTools.Animation.Action} Action
 */
DKTools.Animation.Action.Rotation = function(object) {
    const action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        const remainingTime = this.getRemainingTime();
        const target = this._target;

        const rotation = (this._data - target.rotation) / remainingTime;
        const newRotation = target.rotation + rotation;
        target.setRotation(newRotation);
    }.bind(action));
    return action;
};

/**
 * Creates an action to change the opacity of a target
 * Returns the action
 * Only for sprites
 *
 * @static
 *
 * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
 *
 * @see DKTools.Animation.Action.prototype.initialize
 *
 * @returns {DKTools.Animation.Action} Action
 */
DKTools.Animation.Action.OpacitySprite = function(object) {
    const action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        const remainingTime = this.getRemainingTime();
        const target = this._target;

        const opacity = (this._data - target.opacity) / remainingTime;
        const newOpacity = target.opacity + opacity;
        target.setOpacity(newOpacity);
    }.bind(action));
    return action;
};

/**
 * Creates an action to change the opacity of a target
 * Returns the action
 * Only for windows
 *
 * @static
 *
 * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
 *
 * @see DKTools.Animation.Action.prototype.initialize
 *
 * @returns {DKTools.Animation.Action} Action
 */
DKTools.Animation.Action.OpacityWindow = function(object) {
    const action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        const remainingTime = this.getRemainingTime();
        const target = this._target;

        const windowOpacity = (this._data.windowOpacity - target.windowOpacity) / remainingTime;
        const contentsOpacity = (this._data.contentsOpacity - target.contentsOpacity) / remainingTime;
        const frameOpacity = (this._data.frameOpacity - target.frameOpacity) / remainingTime;
        const backOpacity = (this._data.backOpacity - target.backOpacity) / remainingTime;
        const newOpacity = {
            windowOpacity: target.windowOpacity + windowOpacity,
            contentsOpacity: target.contentsOpacity + contentsOpacity,
            frameOpacity: target.frameOpacity + frameOpacity,
            backOpacity: target.backOpacity + backOpacity
        };
        target.setOpacity(newOpacity);
    }.bind(action));
    return action;
};

/**
 * Creates an action to change the tint of a target
 * Returns the action
 *
 * @static
 *
 * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
 *
 * @see DKTools.Animation.Action.prototype.initialize
 *
 * @returns {DKTools.Animation.Action} Action
 */
DKTools.Animation.Action.Tint = function(object) {
    const action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        const remainingTime = this.getRemainingTime();
        const target = this._target;

        const tint = (this._data - target.tint) / remainingTime;
        const newTint = target.tint + tint;
        target.setTint(newTint);
    }.bind(action));
    return action;
};

/**
 * Creates an action to play a sound
 * Returns the action
 *
 * @static
 *
 * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
 *
 * @see DKTools.Animation.Action.prototype.initialize
 *
 * @returns {DKTools.Animation.Action} Action
 */
DKTools.Animation.Action.Sound = function(object) {
    const action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        const audio = this._data;
        if (!audio.isPlaying()) {
            audio.play();
        }
    }.bind(action));
    return action;
};

/**
 * Creates an action to move a target
 * Returns the action
 *
 * @static
 *
 * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
 *
 * @see DKTools.Animation.Action.prototype.initialize
 *
 * @returns {DKTools.Animation.Action} Action
 */
DKTools.Animation.Action.Move = function(object) {
    const action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        const remainingTime = this.getRemainingTime();
        const target = this._target;

        const x = (this._data.x - target.x) / remainingTime;
        const y = (this._data.y - target.y) / remainingTime;
        const newX = target.x + x;
        const newY = target.y + y;
        target.move(newX, newY);
    }.bind(action));
    return action;
};

/**
 * Creates an action to change the scale of a target
 * Returns the action
 * Only for sprites
 *
 * @static
 *
 * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
 *
 * @see DKTools.Animation.Action.prototype.initialize
 *
 * @returns {DKTools.Animation.Action} Action
 */
DKTools.Animation.Action.Scale = function(object) {
    const action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        const remainingTime = this.getRemainingTime();
        const target = this._target;
        const data = this._data;
        const scale = target.scale;

        const x = (data.x - scale.x) / remainingTime;
        const y = (data.y - scale.y) / remainingTime;
        const newX = scale.x + x;
        const newY = scale.y + y;
        target.setScale(newX, newY);
    }.bind(action));
    return action;
};

/**
 * Creates an action to change the pivot of a target
 * Returns the action
 *
 * @static
 *
 * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
 *
 * @see DKTools.Animation.Action.prototype.initialize
 *
 * @returns {DKTools.Animation.Action} Action
 */
DKTools.Animation.Action.Pivot = function(object) {
    const action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        const remainingTime = this.getRemainingTime();
        const target = this._target;
        const data = this._data;
        const pivot = target.pivot;

        const x = (data.x - pivot.x) / remainingTime;
        const y = (data.y - pivot.y) / remainingTime;
        const newX = pivot.x + x;
        const newY = pivot.y + y;
        target.setPivot(newX, newY);
    }.bind(action));
    return action;
};

/**
 * Creates an action to change the skew of a target
 * Returns the action
 *
 * @static
 *
 * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
 *
 * @see DKTools.Animation.Action.prototype.initialize
 *
 * @returns {DKTools.Animation.Action} Action
 */
DKTools.Animation.Action.Skew = function(object) {
    const action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        const remainingTime = this.getRemainingTime();
        const target = this._target;
        const data = this._data;
        const skew = target.skew;

        const x = (data.x - skew.x) / remainingTime;
        const y = (data.y - skew.y) / remainingTime;
        const newX = skew.x + x;
        const newY = skew.y + y;
        target.setSkew(newX, newY);
    }.bind(action));
    return action;
};

/**
 * Creates an action to change the frame of a target
 * Returns the action
 * Only for sprites
 *
 * @static
 *
 * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
 *
 * @see DKTools.Animation.Action.prototype.initialize
 *
 * @returns {DKTools.Animation.Action} Action
 */
DKTools.Animation.Action.Frame = function(object) {
    const action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        const remainingTime = this.getRemainingTime();
        const target = this._target;
        const data = this._data;
        const frame = target.frame;

        const x = (data.x - frame.x) / remainingTime;
        const y = (data.y - frame.y) / remainingTime;
        const width = (data.width - frame.width) / remainingTime;
        const height = (data.height - frame.height) / remainingTime;
        const newFrame = new Rectangle(frame.x + x, frame.y + y, frame.width + width, frame.height + height);
        target.setFrame(newFrame);
    }.bind(action));
    return action;
};

/**
 * Creates an action to change the anchor of a target
 * Returns the action
 * Only for sprites
 *
 * @static
 *
 * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
 *
 * @see DKTools.Animation.Action.prototype.initialize
 *
 * @returns {DKTools.Animation.Action} Action
 */
DKTools.Animation.Action.Anchor = function(object) {
    const action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        const remainingTime = this.getRemainingTime();
        const target = this._target;
        const data = this._data;
        const anchor = target.anchor;

        const x = (data.x - anchor.x) / remainingTime;
        const y = (data.y - anchor.y) / remainingTime;
        const newX = anchor.x + x;
        const newY = anchor.y + y;
        target.setAnchor(newX, newY);
    }.bind(action));
    return action;
};

/**
 * Creates an action to change the tone of a target
 * Returns the action
 * Only for windows
 *
 * @static
 *
 * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
 *
 * @see DKTools.Animation.Action.prototype.initialize
 *
 * @returns {DKTools.Animation.Action} Action
 */
DKTools.Animation.Action.Tone = function(object) {
    const action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        const remainingTime = this.getRemainingTime();
        const target = this._target;
        const tone = target.tone;

        const toneR = (this._data[0] - tone[0]) / remainingTime;
        const toneG = (this._data[1] - tone[1]) / remainingTime;
        const toneB = (this._data[2] - tone[2]) / remainingTime;

        const newR = tone[0] + toneR;
        const newG = tone[1] + toneG;
        const newB = tone[2] + toneB;
        target.setTone([newR, newG, newB]);
    }.bind(action));
    return action;
};

/**
 * Creates an action to open a target
 * Returns the action
 * Only for windows
 *
 * @static
 *
 * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
 *
 * @see DKTools.Animation.Action.prototype.initialize
 *
 * @returns {DKTools.Animation.Action} Action
 */
DKTools.Animation.Action.Open = function(object) {
    const action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        const remainingTime = this.getRemainingTime();
        const target = this._target;

        const openness = (255 - target.openness) / remainingTime;
        const newOpennes = target.openness + openness;
        target.openness = newOpennes;
    }.bind(action));
    return action;
};

/**
 * Creates an action to close a target
 * Returns the action
 * Only for windows
 *
 * @static
 *
 * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
 *
 * @see DKTools.Animation.Action.prototype.initialize
 *
 * @returns {DKTools.Animation.Action} Action
 */
DKTools.Animation.Action.Close = function(object) {
    const action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        const remainingTime = this.getRemainingTime();
        const target = this._target;

        const openness = -target.openness / remainingTime;
        const newOpennes = target.openness + openness;
        target.openness = newOpennes;
    }.bind(action));
    return action;
};

// initialize methods

/**
 * @override
 *
 * @param {Object} object - Parameters
 *
 * @param {Number} object.startTime - Start time of the action
 * @param {Number} object.endTime - End time of the action
 * @param {*} object.data - Data of the action
 *
 * @see DKTools.Event.prototype.initialize
 */
DKTools.Animation.Action.prototype.initialize = function(object) {
    object = object || {};

    /**
     * @private
     * @readonly
     * @type {DKTools.Animation}
     */
    this._animation = null;

    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._startTime = object.startTime;

    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._endTime = object.endTime;

    /**
     * @private
     * @readonly
     * @type {*}
     */
    this._data = object.data;

    DKTools.Event.prototype.initialize.call(this, object);
};

// other methods

/**
 * Removes the action
 *
 * @override
 */
DKTools.Animation.Action.prototype.remove = function() {
    this._animation.removeAction(this);
};

/**
 * Resets the action
 *
 * @override
 */
DKTools.Animation.Action.prototype.reset = function() {
    this._callOnResetHandler();
};

/**
 * Repeats the action
 *
 * @override
 */
DKTools.Animation.Action.prototype.repeat = function() {
    this._callOnRepeatHandler();
};

// get methods

/**
 * Returns the elapsed time
 *
 * @override
 * @returns {Number} Elapsed time
 */
DKTools.Animation.Action.prototype.getElapsedTime = function() {
    return this._animation.getElapsedTime() - this._startTime;
};

/**
 * Returns the remaining time
 *
 * @override
 * @returns {Number} Remaining time
 */
DKTools.Animation.Action.prototype.getRemainingTime = function() {
    return this._endTime - this._animation.getElapsedTime();
};

// set methods

/**
 * Sets the animation
 *
 * @param {DKTools.Animation} animation - Animation
 */
DKTools.Animation.Action.prototype.setAnimation = function(animation) {
    this._animation = animation;
};

// is methods

/**
 * Returns true if the action is updated
 *
 * @override
 * @returns {Boolean} Action is updated
 */
DKTools.Animation.Action.prototype.isUpdated = function() {
    return this._animation.isActionUpdated(this);
};

/**
 * Returns true if the action if finished
 *
 * @override
 * @returns {Boolean} Action if finished
 */
DKTools.Animation.Action.prototype.isFinished = function() {
    return this._animation.isActionFinished(this);
};





//===========================================================================
// DKTools.Base
//===========================================================================

// properties

Object.defineProperties(DKTools.Base.prototype, {

    /**
     * The object ID
     *
     * @readonly
     * @type {Number | String | null}
     * @memberOf DKTools.Base.prototype
     */
    id : {
        get: function() {
            return this._id;
        },
        configurable: true
    },

    /**
     * The X coordinate of mouse inside the object
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Base.prototype
     */
    mouseX : {
        get: function() {
            return this.canvasToLocalX(TouchInput.mouseX);
        },
        configurable: true
    },

    /**
     * The Y coordinate of mouse inside the object
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Base.prototype
     */
    mouseY : {
        get: function() {
            return this.canvasToLocalY(TouchInput.mouseY);
        },
        configurable: true
    },

    /**
     * Number of pixels scrolling mouse on X axis
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Base.prototype
     */
    wheelX: {
        get: function() {
            return this._wheelX;
        },
        configurable: true
    },

    /**
     * Number of pixels scrolling mouse on Y axis
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Base.prototype
     */
    wheelY: {
        get: function() {
            return this._wheelY;
        },
        configurable: true
    },

    /**
     * Time of mouse enter inside the object
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Base.prototype
     */
    mouseEnteredTime: {
        get: function() {
            return this._mouseEnteredTime;
        },
        configurable: true
    }

});

// initialize methods

/**
 * Initializes a class object
 *
 * @param {Number | Graphics | Object | *} [object] - The X coordinate or Graphics or object with parameters
 * @param {Number} [y] - The Y coordinate (if object is Number)
 * @param {Number} [width] - The width of the object (if object is Number)
 * @param {Number | String} [height] - The height of the object (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 * @param {Number} [object.width] - The width of the object
 * @param {Number} [object.height] - The height of the object
 *
 * @example
 * var sprite = new DKTools.Sprite(0, 0, 100, 100);
 * => x = 0; y = 0; width = 100; height = 100;
 *
 * @example
 * var sprite = new DKTools.Sprite(Graphics);
 * => x = 0; y = 0; width = Graphics.boxWidth; height = Graphic.boxHeight;
 *
 * @example
 * var sprite = new DKTools.Sprite({ x: 0, y: 0, width: 100, height: 100 });
 * => x = 0; y = 0; width = 100; height = 100;
 *
 * @see DKTools.Base.prototype.setupAll
 */
DKTools.Base.prototype.initialize = function(object, y, width, height) {
    let x;
    if (object instanceof Graphics) {
        width = Graphics.boxWidth;
        height = Graphics.boxHeight;
    } else if (object instanceof Object) {
        x = object.x;
        y = object.y;
        width = object.width;
        height = object.height;
    } else if (_.isFinite(object)) { // object - Number
        x = object;
    }
    this.move(x, y);
    this.setupSize(width, height);
    this._clearAll();
    this._createAll();
    this._setupAll();
    this._addAllChildren();
    this.setupAll(object);
};

// _clear methods

/**
 * Clears all data
 *
 * @private
 */
DKTools.Base.prototype._clearAll = function() {
    this._clearOptionChangeListeners();
    this._clearOptions();
    this._clearEvents();
    this._clearWheel();
    this._clearMouseEnteredTime();
};

/**
 * Clears listeners of the options change
 *
 * @private
 */
DKTools.Base.prototype._clearOptionChangeListeners = function() {
    /**
     * @private
     * @readonly
     * @type {Object}
     */
    this._optionChangeListeners = {};
};

/**
 * Clears the all options
 *
 * @private
 */
DKTools.Base.prototype._clearOptions = function() {
    /**
     * @private
     * @type {String[]}
     */
    this._options = [];
};

/**
 * Clears the all events
 *
 * @private
 */
DKTools.Base.prototype._clearEvents = function() {
    this.clearEvents();
};

/**
 * Clears scrolling of mouse wheel
 *
 * @private
 */
DKTools.Base.prototype._clearWheel = function() {
    this._clearWheelX();
    this._clearWheelY();
};

/**
 * Clears scrolling of mouse wheel on X axis
 *
 * @private
 */
DKTools.Base.prototype._clearWheelX = function() {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._wheelX = 0;
};

/**
 * Clears scrolling of mouse wheel on Y axis
 *
 * @private
 */
DKTools.Base.prototype._clearWheelY = function() {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._wheelY = 0;
};

/**
 * Clears time of mouse enter inside the object
 *
 * @private
 */
DKTools.Base.prototype._clearMouseEnteredTime = function() {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._mouseEnteredTime = 0;
};

// clear methods

/**
 * Clears the events
 *
 * @param {String[] | String} object - Array with event types or event type
 */
DKTools.Base.prototype.clearEvents = function(object) {
    if (object) {
        if (_.isArry(object)) {
            _.forEach(object, function(type) {
                this.__events[type] = [];
            }.bind(this));
        } else { // object - String
            this.__events[object] = [];
        }
    } else {
        /**
         * @private
         * @type {Object}
         */
        this.__events = {};
    }
};

/**
 * Clears a rectangle
 * Returns true if bitmap exists
 *
 * @param {Number | PIXI.Rectangle | Rectangle | Object} [object] - The X coordinate или Rectangle, или Объект типа {}
 * @param {Number} [y] - The Y coordinate
 * @param {Number} [width] - Width of the rectangle
 * @param {Number} [height] - Height of the rectangle
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 * @param {Number} [object.width] - Width of the rectangle
 * @param {Number} [object.height] - Height of the rectangle
 *
 * @returns {Boolean} Bitmap exists
 */
DKTools.Base.prototype.clearRect = function(object, y, width, height) {
    if (!this.hasBitmap()) {
        return false;
    }
    if (object instanceof Object) {
        return this.clearRect(object.x, object.y, object.width, object.height);
    }
    width = width || this.standardDrawingWidth();
    height = height || this.standardDrawingHeight();
    // object - Number
    this.bitmap.clearRect(object || 0, y || 0, width, height);
    return true;
};

/**
 * Clears a line in the bitmap
 *
 * @param {Number} line - Line to clear
 */
DKTools.Base.prototype.clearLine = function(line) {
    this.clearRect(this.getLineRect(line));
};

/**
 * Clears the bitmap
 * Returns true if bitmap exists
 *
 * @returns {Boolean} Bitmap exists
 */
DKTools.Base.prototype.clear = function() {
    return this.clearRect();
};

// _create methods

/**
 * Creates all
 *
 * @private
 */
DKTools.Base.prototype._createAll = function() {
    // to be overriden by plugins
};

// _setup methods

/**
 * Sets all data
 *
 * @private
 */
DKTools.Base.prototype._setupAll = function() {
    this._setupOptions();
    this._setupEvents();
    this._setupAnimations();
};

/**
 * Sets the options
 *
 * @private
 */
DKTools.Base.prototype._setupOptions = function() {
    this._setupMobileDeviceOption();
};

/**
 * Sets the events
 *
 * @private
 */
DKTools.Base.prototype._setupEvents = function() {
    // to be overriden by plugins
};

/**
 * Sets the animations
 *
 * @private
 */
DKTools.Base.prototype._setupAnimations = function() {
    // to be overriden by plugins
};

/**
 * Sets a mobile device option
 *
 * @private
 */
DKTools.Base.prototype._setupMobileDeviceOption = function() {
    if (DKTools.Utils.isMobileDevice()) {
        this.enableOption('mobileDevice');
    }
};

// _add methods

/**
 * Adds children objects to processing
 *
 * @private
 */
DKTools.Base.prototype._addAllChildren = function() {
    // to be overriden by plugins
};

// standard methods

/**
 * Returns the standard width of the drawing
 *
 * @returns {Number | null} Standard width of the drawing or null
 */
DKTools.Base.prototype.standardDrawingWidth = function() {
    if (this.hasBitmap()) {
        return this.bitmap.width;
    } else if (this.isSprite()) {
        return this._bitmapWidth;
    } else if (this.isWindow()) {
        return this.realWidth;
    }
    return null;
};

/**
 * Returns the standard height of the drawing
 *
 * @returns {Number | null} Standard height of the drawing or null
 */
DKTools.Base.prototype.standardDrawingHeight = function() {
    if (this.hasBitmap()) {
        return this.bitmap.height;
    } else if (this.isSprite()) {
        return this._bitmapHeight;
    } else if (this.isWindow()) {
        return this.realHeight;
    }
    return null;
};

/**
 * Returns the standard activity of the object
 *
 * @returns {Boolean} Standard activity of the object
 */
DKTools.Base.prototype.standardActive = function() {
    return true;
};

/**
 * Returns the standard visibility of the object
 *
 * @returns {Boolean} Standard visibility of the object
 */
DKTools.Base.prototype.standardVisible = function() {
    return true;
};

/**
 * Returns the standard scale of the object
 *
 * @returns {Point} Standard scale of the object
 */
DKTools.Base.prototype.standardScale = function() {
    return new Point(1, 1);
};

/**
 * Returns the standard pivot of the object
 *
 * @returns {Point} Standard pivot of the object
 */
DKTools.Base.prototype.standardPivot = function() {
    return new Point(0, 0);
};

/**
 * Returns the standard skew of the object
 *
 * @returns {Point} Standard skew of the object
 */
DKTools.Base.prototype.standardSkew = function() {
    return new Point(0, 0);
};

/**
 * Returns the standard rotation of the object
 *
 * @returns {Number} Standard rotation of the object
 */
DKTools.Base.prototype.standardRotation = function() {
    return 0;
};

/**
 * Returns the standard tint of the object
 *
 * @returns {Number} Standard tint of the object
 */
DKTools.Base.prototype.standardTint = function() {
    return 0xFFFFFF;
};

/**
 * Returns the standard windowskin
 *
 * @returns {String} Standard windowskin
 */
DKTools.Base.prototype.standardWindowskin = function() {
    return 'Window';
};

// setup methods

/**
 * Sets all parameters
 *
 * @param {Object} [object] - Parameters
 *
 * @param {Number} [object.id] - The object ID
 * @param {Boolean} [object.visible] - Visibility of the object
 * @param {Boolean} [object.active] - Activity of the object
 * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.scale] - Scale of the object
 * @param {PPIXI.Point | PIXI.ObservablePoint | Point | Object} [object.pivot] - Pivot of the object
 * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.skew] - Skew of the object
 * @param {Number} [object.rotation] - Rotation of the object
 * @param {Number} [object.tint] - Tint of the object
 *
 * @param {Number} [object.scale.x] - Scale of the object on X axis
 * @param {Number} [object.scale.y] - Scale of the object on Y axis
 *
 * @param {Number} [object.pivot.x] - Pivot of the object on X axis
 * @param {Number} [object.pivot.y] - Pivot of the object on Y axis
 *
 * @param {Number} [object.skew.x] - Skew of the object on X axis
 * @param {Number} [object.skew.y] - Skew of the object on Y axis
 */
DKTools.Base.prototype.setupAll = function(object) {
    object = object || {};
    this.setupId(object.id);
    this.setupActive(object.active);
    this.setupVisible(object.visible);
    this.setupScale(object.scale);
    this.setupPivot(object.pivot);
    this.setupSkew(object.skew);
    this.setupRotation(object.rotation);
    this.setupTint(object.tint);
};

/**
 * Sets the object ID
 *
 * @param {Number | String | null} [id] - The object ID
 */
DKTools.Base.prototype.setupId = function(id) {
    /**
     * @private
     * @readonly
     * @type {Number | String | null}
     */
    this._id = (id == null ? null : id);
};

/**
 * Sets the activity of the object
 *
 * @param {Boolean} [active] - Activity of the object
 */
DKTools.Base.prototype.setupActive = function(active) {
    /**
     * @type {Boolean}
     */
    this.active = (active == null ? this.standardActive() : active);
};

/**
 * Sets the visibility of the object
 *
 * @param {Boolean} [visible] - Visibility of the object
 */
DKTools.Base.prototype.setupVisible = function(visible) {
    /**
     * @type {Boolean}
     */
    this.visible = (visible == null ? this.standardVisible() : visible);
};

/**
 * Sets the scale of the object
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Scale of the object on X axis or object width parameters
 * @param {Number} [y] - Scale of the object on Y axis
 *
 * @param {Number} [object.x] - Scale of the object on X axis
 * @param {Number} [object.y] - Scale of the object on Y axis
 */
DKTools.Base.prototype.setupScale = function(object, y) {
    const scale = DKTools.Utils.Point.convertToPoint(object, y);
    const newScale = Object.assign(this.standardScale(), scale);

    /**
     * @type {PIXI.ObservablePoint}
     */
    this.scale.copy(newScale);
};

/**
 * Sets the pivot of the object
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Pivot of the object on X axis or object with parameters
 * @param {Number} [y] - Pivot of the object on Y axis
 *
 * @param {Number} [object.x] - Pivot of the object on X axis
 * @param {Number} [object.y] - Pivot of the object on Y axis
 */
DKTools.Base.prototype.setupPivot = function(object, y) {
    const pivot = DKTools.Utils.Point.convertToPoint(object, y);
    const newPivot = Object.assign(this.standardPivot(), pivot);

    /**
     * @type {PIXI.ObservablePoint}
     */
    this.pivot.copy(newPivot);
};

/**
 * Sets the skew of the object
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Skew of the object on X axis or object with parameters
 * @param {Number} [y] - Skew of the object on Y axis
 *
 * @param {Number} [object.x] - Skew of the object on X axis
 * @param {Number} [object.y] - Skew of the object on Y axis
 */
DKTools.Base.prototype.setupSkew = function(object, y) {
    const skew = DKTools.Utils.Point.convertToPoint(object, y);
    const newSkew = Object.assign(this.standardSkew(), skew);

    /**
     * Перекос объекта
     *
     * @type {PIXI.ObservablePoint}
     */
    this.skew.copy(newSkew);
};

/**
 * Sets the rotation of the object
 *
 * @param {Number} [rotation] - Rotation of the object
 */
DKTools.Base.prototype.setupRotation = function(rotation) {
    /**
     * @type {Number}
     */
    this.rotation = (rotation == null ? this.standardRotation() : rotation);
};

/**
 * Sets the tint of the object
 *
 * @param {Number} [tint] - Tint of the object
 */
DKTools.Base.prototype.setupTint = function(tint) {
    /**
     * @type {Number}
     */
    this.tint = (tint == null ? this.standardTint() : tint);
};

// set methods

/**
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @param {Object} [object] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the object
 *
 * @param {Number} [object.id] - The object ID
 * @param {Boolean} [object.visible] - Visibility of the object
 * @param {Boolean} [object.active] - Activity of the object
 * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.scale] - Scale of the object
 * @param {PPIXI.Point | PIXI.ObservablePoint | Point | Object} [object.pivot] - Pivot of the object
 * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.skew] - Skew of the object
 * @param {Number} [object.rotation] - Rotation of the object
 * @param {Number} [object.tint] - Tint of the object
 *
 * @param {Number} [object.scale.x] - Scale of the object on X axis
 * @param {Number} [object.scale.y] - Scale of the object on Y axis
 *
 * @param {Number} [object.pivot.x] - Pivot of the object on X axis
 * @param {Number} [object.pivot.y] - Pivot of the object on Y axis
 *
 * @param {Number} [object.skew.x] - Skew of the object on X axis
 * @param {Number} [object.skew.y] - Skew of the object on Y axis
 *
 * @returns {Number} Number of changed parameters
 */
DKTools.Base.prototype.setAll = function(object, blockStart, activate) {
    object = object || {};
    let changed = 0;
    if (this.setId(object.id)) {
        changed++;
    }
    if (this.setActive(object.active)) {
        changed++;
    }
    if (this.setVisible(object.visible)) {
        changed++;
    }
    if (this.setScale(object.scale)) {
        changed++;
    }
    if (this.setPivot(object.pivot)) {
        changed++;
    }
    if (this.setSkew(object.skew)) {
        changed++;
    }
    if (this.setRotation(object.rotation)) {
        changed++;
    }
    if (this.setTint(object.tint)) {
        changed++;
    }
    if (changed) {
        if (!blockStart) {
            this.start();
        }
        if (activate) {
            this.activate();
        }
    }
    return changed;
};

/**
 * Changes the object ID
 * Returns true if the change occurred
 *
 * @param {Number | String | null} [id] - The object ID
 * @returns {Boolean} Change occurred
 */
DKTools.Base.prototype.setId = function(id) {
    if (this._id === id) {
        return false;
    }
    const lastId = this._id;
    this.setupId(id);
    return this._id !== lastId;
};

/**
 * Changes the activity of the object
 *
 * @param {Boolean} [active] - Activity of the object
 * @returns {Boolean} Change occurred
 */
DKTools.Base.prototype.setActive = function(active) {
    if (this.active === active) {
        return false;
    }
    const lastActive = this.active;
    this.setupActive(active);
    return lastActive !== this.active;
};

/**
 * Changes the visibility of the object
 * Returns true if the change occurred
 *
 * @param {Boolean} [visible] - Visibility of the object
 * @returns {Boolean} Change occurred
 */
DKTools.Base.prototype.setVisible = function(visible) {
    if (this.visible === visible) {
        return false;
    }
    const lastVisible = this.visible;
    this.setupVisible(visible);
    return lastVisible !== this.visible;
};

/**
 * Changes the scale of the object
 * Returns true if the change occurred
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Scale of the object on X axis or object with parameters
 * @param {Number} [y] - Scale of the object on Y axis
 *
 * @param {Number} [object.x] - Scale of the object on X axis
 * @param {Number} [object.y] - Scale of the object on Y axis
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Base.prototype.setScale = function(object, y) {
    if (object instanceof Object) {
        return this.setScale(object.x, object.y);
    }
    // object - Number
    const newScale = DKTools.Utils.Point.convertToPoint(object, y);
    if (DKTools.Utils.Point.equals(this.scale, newScale)) {
        return false;
    }
    const lastScale = DKTools.Utils.Point.clone(this.scale);
    this.setupScale(newScale);
    return !DKTools.Utils.Point.equals(this.scale, lastScale);
};

/**
 * Changes the pivot of the object
 * Returns true if the change occurred
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Pivot of the object on X axis or object with parameters
 * @param {Number} [y] - Pivot of the object on Y axis
 *
 * @param {Number} [object.x] - Pivot of the object on X axis
 * @param {Number} [object.y] - Pivot of the object on Y axis
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Base.prototype.setPivot = function(object, y) {
    if (object instanceof Object) {
        return this.setPivot(object.x, object.y);
    }
    // object - Number
    let newPivot = DKTools.Utils.Point.convertToPoint(object, y);
    if (DKTools.Utils.Point.equals(this.pivot, newPivot)) {
        return false;
    }
    let lastPivot = DKTools.Utils.Point.clone(this.pivot);
    this.setupPivot(newPivot);
    return !DKTools.Utils.Point.equals(this.pivot, lastPivot);
};

/**
 * Changes the skew of the object
 * Returns true if the change occurred
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Skew of the object on X axis or object with parameters
 * @param {Number} [y] - Skew of the object on Y axis
 *
 * @param {Number} [object.x] - Skew of the object on X axis
 * @param {Number} [object.y] - Skew of the object on Y axis
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Base.prototype.setSkew = function(object, y) {
    if (object instanceof Object) {
        return this.setSkew(object.x, object.y);
    }
    // object - Number
    let newSkew = DKTools.Utils.Point.convertToPoint(object, y);
    if (DKTools.Utils.Point.equals(this.skew, newSkew)) {
        return false;
    }
    let lastSkew = DKTools.Utils.Point.clone(this.skew);
    this.setupSkew(newSkew);
    return !DKTools.Utils.Point.equals(this.skew, lastSkew);
};

/**
 * Changes the rotation of the object
 * Returns true if the change occurred
 *
 * @param {Number} [rotation] - Rotation of the object
 * @returns {Boolean} Change occurred
 */
DKTools.Base.prototype.setRotation = function(rotation) {
    if (this.rotation === rotation) {
        return false;
    }
    let lastRotation = this.rotation;
    this.setupRotation(rotation);
    return lastRotation !== this.rotation;
};

/**
 * Changes the tint of the object
 * Returns true if the change occurred
 *
 * @param {Number} [tint] - Tint of the object
 * @returns {Boolean} Change occurred
 */
DKTools.Base.prototype.setTint = function(tint) {
    if (this.tint === tint) {
        return false;
    }
    const lastTint = this.tint;
    this.setupTint(tint);
    return lastTint !== this.tint;
};

// start methods

/**
 * Starts the object
 *
 * @param {Boolean} [activate=false] - Activates the object
 *
 * @see DKTools.Base.prototype.removeAllChildren
 * @see DKTools.Base.prototype.updateRemoveAllChildrenEvents
 * @see DKTools.Base.prototype.terminateAll
 * @see DKTools.Base.prototype.updateTerminateAllEvents
 * @see DKTools.Base.prototype.removeAll
 * @see DKTools.Base.prototype.updateRemoveAllEvents
 * @see DKTools.Base.prototype.checkAll
 * @see DKTools.Base.prototype.updateCheckAllEvents
 * @see DKTools.Base.prototype.createAll
 * @see DKTools.Base.prototype.updateCreateAllEvents
 * @see DKTools.Base.prototype.addAllChildren
 * @see DKTools.Base.prototype.updateAddAllChildrenEvents
 * @see DKTools.Base.prototype.startAll
 * @see DKTools.Base.prototype.updateStartAllEvents
 * @see DKTools.Base.prototype.refreshAll
 * @see DKTools.Base.prototype.updateRefreshAllEvents
 * @see DKTools.Base.prototype.updateStartEvents
 * @see DKTools.Base.prototype.activate
 */
DKTools.Base.prototype.start = function(activate) {
    this._started = true;
    this.removeAllChildren();
    this.updateRemoveAllChildrenEvents();
    this.terminateAll();
    this.updateTerminateAllEvents();
    this.removeAll();
    this.updateRemoveAllEvents();
    this.checkAll();
    this.updateCheckAllEvents();
    this.createAll();
    this.updateCreateAllEvents();
    this.addAllChildren();
    this.updateAddAllChildrenEvents();
    this.startAll();
    this.updateStartAllEvents();
    this.refreshAll();
    this.updateRefreshAllEvents();
    this.updateStartEvents();
    if (activate) {
        this.activate();
    }
};

/**
 * Starts all
 */
DKTools.Base.prototype.startAll = function() {
    // to be overriden by plugins
};

// remove methods

/**
 * Removes children objects from processing
 */
DKTools.Base.prototype.removeAllChildren = function() {
    // to be overriden by plugins
};

/**
 * Removes all
 */
DKTools.Base.prototype.removeAll = function() {
    // to be overriden by plugins
};

/**
 * Removes the mask
 */
DKTools.Base.prototype.removeMask = function() {
    this.mask = null;
};

// terminate methods

/**
 * Terminates the object
 */
DKTools.Base.prototype.terminate = function() {
    // to be overriden by plugins
};

/**
 * Terminates all
 */
DKTools.Base.prototype.terminateAll = function() {
    // to be overriden by plugins
};

// _check methods

/**
 * Checks the width with the minimum width
 * Returns the normalized width of the object
 *
 * @private
 * @param {Number} width - Width of the object
 * @returns {Number} Normalized width of the object
 *
 */
DKTools.Base.prototype._checkWidth = function(width) {
    const minWidth = this.getMinWidth();
    return (width ? Math.max(minWidth, width) : minWidth);
};

/**
 * Checks the height with the minimum height
 * Returns the normalized height of the object
 *
 * @private
 * @param {Number} height - Height of the object
 * @returns {Number} Normalized height of the object
 *
 */
DKTools.Base.prototype._checkHeight = function(height) {
    const minHeight = this.getMinHeight();
    return (height ? Math.max(minHeight, height) : minHeight);
};

// check methods

/**
 * Checks all
 */
DKTools.Base.prototype.checkAll = function() {
    this.checkSize();
};

/**
 * Checks the size of the object
 */
DKTools.Base.prototype.checkSize = function() {
    // to be overriden by plugins
};

// create methods

/**
 * Creates all objects
 */
DKTools.Base.prototype.createAll = function() {
    // to be overriden by plugins
};

// add methods

/**
 * Adds children objects to processing
 */
DKTools.Base.prototype.addAllChildren = function() {
    // to be overriden by plugins
};

// refresh methods

/**
 * Updates and redraws all
 *
 * @see DKTools.Base.prototype.canRefreshAll
 */
DKTools.Base.prototype.refreshAll = function() {
    if (this.canRefreshAll()) {
        this.updateAll();
        this.updateUpdateAllEvents();
        this.redrawAll();
        this.updateRedrawAllEvents();
    }
};

// redraw methods

/**
 * Redraws all
 */
DKTools.Base.prototype.redrawAll = function() {
    // to be overriden by plugins
};

// get methods

/**
 * Returns a child object by its ID
 *
 * @param {Number | String | *} id - ID of an object
 * @returns {* | undefined} Child object
 */
DKTools.Base.prototype.getChildById = function(id) {
    return _.find(this.children, { id: id });
};

/**
 * Returns the width of the text
 *
 * @param {String} text - Text
 * @returns {Number} Width of the text
 */
DKTools.Base.prototype.getTextWidth = function(text) {
    if (text == null) {
        return 0;
    }
    text = String(text);
    if (this.hasBitmap()) {
        return this.bitmap.measureTextWidth(text);
    }
    return 0;
};

/**
 * Returns the width of the text (special characters are supported)
 *
 * @param {String} text - Text
 * @param {Object} [options] - Options for drawing
 *
 * @see DKTools.Base.prototype.drawTextEx
 *
 * @returns {Number} Width of the text
 */
DKTools.Base.prototype.getTextWidthEx = function(text, options) {
    if (text == null) {
        return 0;
    }
    options = options || {};
    try {
        options.x = -Number.MAX_SAFE_INTEGER;
        options.y = -Number.MAX_SAFE_INTEGER;
        return this.drawTextEx(text, options);
    } catch(e) {
    }
    try {
        options.blockStart = false;
        const clone = this.clone(options);
        return clone.drawTextEx(text, options);
    } catch(e) {
    }
    return 0;
};

/**
 * Returns the height of the text (special characters are supported)
 *
 * @param {String} text - Text
 * @param {Object} [options] - Options for drawing
 *
 * @see DKTools.Base.prototype.drawTextEx
 *
 * @returns {Number} Height of the text
 */
DKTools.Base.prototype.getTextHeightEx = function(text, options) {
    if (text == null) {
        return 0;
    }
    options = options || {};
    if (options.wrap) {
        text = this.textWrap(text, options.wrap);
    }
    return this.calcTextHeight({ text: text, index: 0 }, true);
};

/**
 * Returns the color from the windowskin
 *
 * @param {Number} n - Color number
 * @returns {String} Color from the windowskin
 */
DKTools.Base.prototype.getWindowskinTextColor = function(n) {
    const px = 96 + (n % 8) * 12 + 6;
    const py = 144 + Math.floor(n / 8) * 12 + 6;
    if (this.hasWindowskin()) {
        return this.windowskin.getPixel(px, py);
    } else {
        const windowskin = ImageManager.loadSystem(this.standardWindowskin());
        return windowskin.getPixel(px, py);
    }
};

/**
 * Returns the font height for the line height
 *
 * @param {Number} lineHeight - Line height
 * @returns {Number} Font height for the line height
 */
DKTools.Base.prototype.getFontHeight = function(lineHeight) {
    lineHeight = lineHeight || this.getLineHeight();
    let fontSize;
    if (this.hasBitmap()) {
        fontSize = this.bitmap.fontSize;
    } else {
        fontSize = this.font.fontSize;
    }
    return lineHeight - (lineHeight - fontSize * 0.7) / 2;
};

/**
 * Returns the size of the object (taking into account the scaling)
 *
 * @returns {Object} Size of the object (taking into account the scaling)
 */
DKTools.Base.prototype.getSize = function() {
    return { width: this.width, height: this.height };
};

/**
 * Returns the real size of the object (not including scaling)
 *
 * @returns {Object} Real size of the object (not including scaling)
 */
DKTools.Base.prototype.getRealSize = function() {
    return { width: this.realWidth, height: this.realHeight };
};

/**
 * Returns the minimum width of the bitmap
 *
 * @returns {Number} Minimum width of the bitmap
 */
DKTools.Base.prototype.getMinWidth = function() {
    return 0;
};

/**
 * Returns the minimum height of the bitmap
 *
 * @returns {Number} Minimum height of the bitmap
 */
DKTools.Base.prototype.getMinHeight = function() {
    return 0;
};

/**
 * Returns the minimum size of the bitmap
 *
 * @returns {Object} Minimum size of the bitmap
 */
DKTools.Base.prototype.getMinSize = function() {
    return { width: this.getMinWidth(), height: this.getMinHeight() };
};

/**
 * Returns the height of the line
 *
 * @returns {Number} Height of the line
 */
DKTools.Base.prototype.getLineHeight = function() {
    try {
        return Window_Base.prototype.lineHeight.call(this);
    } catch (e) {
        return 36;
    }
};

/**
 * Returns the maximum of lines
 *
 * @returns {Number} Maximum of lines
 */
DKTools.Base.prototype.getLines = function() {
    return this.realHeight / this.getLineHeight();
};

/**
 * Returns the number of lines of the text
 *
 * @param {String | Number} text - Text
 * @param {Object} [wrap=undefined] - Wrap options
 *
 * @see DKTools.Base.prototype.textWrap
 *
 * @returns {Number} Number of lines of the text
 */
DKTools.Base.prototype.getTextLines = function(text, wrap) {
    if (wrap) {
        text = this.textWrap(text, wrap);
    }
    return text.split('\n').length;
};

/**
 * Returns the height of the text
 *
 * @param {String | Number} text - Text
 * @param {Object} [wrap] - Wrap options
 *
 * @see DKTools.Base.prototype.getTextLines
 * @see DKTools.Base.prototype.getLineHeight
 *
 * @returns {Number} Height of the text
 */
DKTools.Base.prototype.getTextHeight = function(text, wrap) {
    return this.getTextLines(text, wrap) * this.getLineHeight();
};

/**
 * Returns a rectangle of the line
 *
 * @param {Number | String} line - Line number
 * @returns {Rectangle} Rectangle of the line
 */
DKTools.Base.prototype.getLineRect = function(line) {
    const lineHeight = this.getLineHeight();
    return new Rectangle(0, lineHeight * Number(line), this.realWidth, lineHeight);
};

// active methods

/**
 * Activates the object
 */
DKTools.Base.prototype.activate = function() {
    if (this.setActive(true)) {
        this.updateActivateEvents();
    }
};

/**
 * Deactivates the object
 */
DKTools.Base.prototype.deactivate = function() {
    if (this.setActive(false)) {
        this.updateDeactivateEvents();
    }
};

// visible methods

/**
 * Shows the object
 *
 * @param {Boolean} [activate=false] - Activates the object
 */
DKTools.Base.prototype.show = function(activate) {
    if (this.setVisible(true)) {
        this.updateShowEvents();
        if (activate) {
            this.activate();
        }
    }
};

/**
 * Hides the object
 *
 * @param {Boolean} [blockDeactivate] - Blocking deactivates of the object
 */
DKTools.Base.prototype.hide = function(blockDeactivate) {
    if (this.setVisible(false)) {
        this.updateHideEvents();
        if (!blockDeactivate) {
            this.deactivate();
        }
    }
};

// clone mthods

/**
 * Clones the object
 *
 * @param {Object} [options] - Options for clone
 *
 * @param {Boolean} [options.cloneTexts] - Clone texts
 * @param {Boolean} [options.cloneOptions] - Clone options
 * @param {Boolean} [options.blockStart] - Blocking the call of the "start" function of cloned object
 * @param {Boolean} [options.activate] - Activate a cloned object
 *
 * @returns {DKTools.Sprite | DKTools.Window | *} Cloned object
 */
DKTools.Base.prototype.clone = function(options) {
    options = options || {};

    const clone = new (this.constructor)(this);

    if (options.cloneTexts) {
        _.forEach(this._texts, function(textObj) {
            clone.addText(textObj.text, textObj.options);
        });
    }

    if (options.cloneOptions) {
        clone.enableOptions(this._options);
    }

    if (!options.blockStart) {
        clone.start();
    }

    if (options.activate) {
        clone.activate();
    }

    return clone;
};

// can methods

/**
 * Returns true if the object can be updated and redrawn
 *
 * @returns {Boolean} Object can be updated and redrawn
 */
DKTools.Base.prototype.canRefreshAll = function() {
    return this.hasBitmap();
};

// move methods

/**
 * Moves the object
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - The X coordinate or object with parameters
 * @param {Number | String} [y] - The Y coordinate or line number (String)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number | String} [object.y] - The Y coordinate or line number (String)
 *
 * @example
 * var sprite = new DKTools.Sprite();
 * var pos = new Point(100, 100);
 * sprite.move(pos);
 *
 * @example
 * var sprite = new DKTools.Sprite();
 * sprite.move(100, 100);
 *
 * @example
 * var sprite = new DKTools.Sprite();
 * sprite.move(100, '2');
 *
 * @see DKTools.Base.prototype.getLineHeight
 */
DKTools.Base.prototype.move = function(object, y) {
    let x = object; // object - Number
    if (object instanceof Object) {
        x = object.x;
        y = object.y;
    }
    if (_.isString(y)) {
        y = this.getLineHeight() * Number(y);
    }
    this.x = x || 0;
    this.y = y || 0;
};

// other methods

/**
 * Converts the X of the canvas to the local X
 *
 * @param {Number} x - The X of the canvas
 * @returns {Number} Local X
 */
DKTools.Base.prototype.canvasToLocalX = function(x) {
    let node = this;
    while (node) {
        x -= node.x;
        node = node.parent;
    }
    return x;
};

/**
 * Converts the Y of the canvas to the local Y
 *
 * @param {Number} y - The Y of the canvas
 * @returns {Number} Local Y
 */
DKTools.Base.prototype.canvasToLocalY = function(y) {
    let node = this;
    while (node) {
        y -= node.y;
        node = node.parent;
    }
    return y;
};

// children methods

/**
 * Calls the callback function for the child objects
 *
 * @param {Function} callback - Function for the child objects
 */
DKTools.Base.prototype.iterateChildren = function(callback) {
    _.forEach(this.children, callback);
};

/**
 * Updates the child object
 *
 * @param {*} child - Child object
 */
DKTools.Base.prototype.updateChild = function(child) {
    if (child && child.update) {
        child.update();
    }
};

/**
 * Updates the child objects
 */
DKTools.Base.prototype.updateChildren = function() {
    this.iterateChildren(this.updateChild);
};

// has methods

/**
 * Returns true if the object has the bitmap
 *
 * @returns {Boolean} Object has the bitmap
 */
DKTools.Base.prototype.hasBitmap = function() {
    try { // for compatibility with DKTools.Window
        return !!this.bitmap;
    } catch (e) {
        return false;
    }
};

/**
 * Returns true if the object has the mask
 *
 * @returns {Boolean} Object has the mask
 */
DKTools.Base.prototype.hasMask = function() {
    return !!this.mask;
};

/**
 * Returns true if the object has the windowskin
 *
 * @returns {Boolean} Object has the windowskin
 */
DKTools.Base.prototype.hasWindowskin = function() {
    return !!this.windowskin;
};

// is methods

/**
 * Returns true if the object is active
 *
 * @returns {Boolean} Object is active
 */
DKTools.Base.prototype.isActive = function() {
    let node = this;
    while (node) {
        if (!node.visible) {
            return false;
        }
        node = node.parent;
    }
    return this.active;
};

/**
 * Returns true if the object is visible
 *
 * @returns {Boolean} Object is visible
 */
DKTools.Base.prototype.isVisible = function() {
    return this.visible;
};

/**
 * ВReturns true if the object is visible and active
 *
 * @returns {Boolean} Object is visible and active
 */
DKTools.Base.prototype.isVisibleAndActive = function() {
    return this.isVisible() && this.isActive();
};

/**
 * Returns true if the object is started
 *
 * @returns {Boolean} Object is started
 */
DKTools.Base.prototype.isStarted = function() {
    return this._started;
};

/**
 * Returns true if the bitmap is ready
 *
 * @returns {Boolean} Bitmap is ready
 */
DKTools.Base.prototype.isReady = function () {
    return this.hasBitmap() && this.bitmap.isReady();
};

/**
 * Returns true if the object is busy
 *
 * @returns {Boolean} Object is busy
 */
DKTools.Base.prototype.isBusy = function() {
    return !this.isReady();
};

/**
 * Returns true if the object is based on DKTools.Sprite
 *
 * @returns {Boolean} Object is based on DKTools.Sprite
 */
DKTools.Base.prototype.isSprite = function() {
    return this instanceof DKTools.Sprite;
};

/**
 * Returns true if the object is based on DKTools.Sprite.Button
 *
 * @returns {Boolean} Object is based on DKTools.Sprite.Button
 */
DKTools.Base.prototype.isButton = function() {
    return this instanceof DKTools.Sprite.Button;
};

/**
 * Returns true if the object is based on DKTools.Sprite.Cursor
 *
 * @returns {Boolean} Object is based on DKTools.Sprite.Cursor
 */
DKTools.Base.prototype.isCursor = function() {
    return this instanceof DKTools.Sprite.Cursor;
};

/**
 * Returns true if the object is based on DKTools.Sprite.Selectable or DKTools.Window.Selectable
 *
 * @returns {Boolean} Object is based on DKTools.Sprite.Selectable or DKTools.Window.Selectable
 */
DKTools.Base.prototype.isSelectable = function() {
    return this instanceof DKTools.Sprite.Selectable || this instanceof DKTools.Window.Selectable;
};

/**
 * Returns true if the object is based on DKTools.Window
 *
 * @returns {Boolean} Object is based on DKTools.Window
 */
DKTools.Base.prototype.isWindow = function() {
    return this instanceof DKTools.Window;
};

/**
 * Returns true if the object is based on DKTools.Viewport
 *
 * @returns {Boolean} Object is based on DKTools.Viewport
 */
DKTools.Base.prototype.isViewport = function() {
    return this instanceof DKTools.Viewport;
};

/**
 * Returns true if the object is based on DKTools.Layout
 *
 * @returns {Boolean} Object is based on DKTools.Layout
 */
DKTools.Base.prototype.isLayout = function() {
    return this instanceof DKTools.Layout;
};

/**
 * Returns true if the coordinates is inside the object
 *
 * @param {Number} x - The X coordinate
 * @param {Number} y - The Y coordinate
 *
 * @returns {Boolean} Coordinates is inside the object
 */
DKTools.Base.prototype.isInside = function(x, y) {
    return false;
};

/**
 * Returns true if the coordinates is not inside the object
 *
 * @param {Number} x - The X coordinate
 * @param {Number} y - The Y coordinate
 *
 * @returns {Boolean} Coordinates are not inside the object
 */
DKTools.Base.prototype.isOutside = function(x, y) {
    return !this.isInside(x, y);
};

/**
 * Returns true if the mouse is inside the object
 *
 * @returns {Boolean} Mouse is inside the object
 */
DKTools.Base.prototype.isMouseEntered = function() {
    return this.isInside(TouchInput.mouseX, TouchInput.mouseY);
};

/**
 * Returns true if the object has the parent (if parameter is null or undefined)
 * Returns true if the object is an parent of the object (parameter)
 *
 * @param [object=undefined] - Object
 * @returns {Boolean}
 */
DKTools.Base.prototype.isChild = function(object) {
    return object ? this === object.parent : !!this.parent;
};

// draw methods

/**
 * Draws all
 */
DKTools.Base.prototype.drawAll = function() {
    // to be overriden by plugins
};

/**
 * Draws a text (special characters are supported)
 * Returns the width of the text
 *
 * @param {String} text - Text
 * @param {Object} [options={}] - Options for drawing
 *
 * @param {Object} [options.wrap] - Options for text wrap
 * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.pos=undefined] - Position of the text
 * @param {Number} [options.x=0] - The X coordinate (if object.pos is undefined or null)
 * @param {Number | String} [options.y=0] - The Y coordinate or line number (String) (if object.pos is undefined or null)
 *
 * @param {Number} [options.wrap.maxWidth] - Max width of a text line
 * @param {Number} [options.wrap.maxLines] - Max lines
 * @param {Boolean} [options.wrap.breakWords] - Breaks a words for the wrapping
 *
 * @param {Number} [object.pos.x=0] - The X coordinate
 * @param {Number | String} [object.pos.y=0] - The Y coordinate or line number (String)
 *
 * @see DKTools.Base.prototype.textWrap
 *
 * @returns {Number} Width of the text
 */
DKTools.Base.prototype.drawTextEx = function(text, options) {
    text = String(text);
    options = options || {};

    if (!this.hasBitmap() || !text) {
        return 0;
    }

    if (options.wrap) {
        text = this.textWrap(text, options.wrap);
    }

    let x, y;
    if (options.pos instanceof Object) {
        x = options.pos.x;
        y = options.pos.y;
    } else {
        x = options.x;
        y = options.y;
    }

    if (_.isString(y)) { // line
        y = this.getLineHeight() * Number(y);
    }

    x = x || 0;
    y = y || 0;

    const textState = { index: 0, x: x, y: y, left: x };
    textState.text = this.convertEscapeCharacters(text);
    textState.height = this.calcTextHeight(textState, false);
    while (textState.index < textState.text.length) {
        this.processCharacter(textState);
    }
    return textState.width || textState.x - x;
};

/**
 * Draws a line
 * Returns true if bitmap exists
 *
 * @param {Number | Object} [object=0] - The X coordinate of start of the line or object with parameters
 * @param {Number} [y1=0] - The Y coordinate of start of the line
 * @param {Number} [x2=0] - The X coordinate of end of the line
 * @param {Number} [y2=0] - The Y coordinate of end of the line
 * @param {String} [color'white'] - Line color
 * @param {Number} [lineWidth=1] - Line width
 *
 * @param {Number} [object.x1=0] - The X coordinate of start of the line
 * @param {Number} [object.y1=0] - The Y coordinate of start of the line
 * @param {Number} [object.x2=0] - The X coordinate of end of the line
 * @param {Number} [object.y2=0] - The Y coordinate of end of the line
 * @param {String} [object.color='white'] - Line color
 * @param {Number} [object.lineWidth=1] - Line width
 *
 * @returns {Boolean} Bitmap exists
 */
DKTools.Base.prototype.drawLine = function(object, y1, x2, y2, color, lineWidth) {
    if (!this.hasBitmap()) {
        return false;
    }
    if (object instanceof Object) {
        return this.drawLine(object.x1, object.y1, object.x2, object.y2, object.color, object.lineWidth);
    }
    // object - Number
    DKTools.Utils.Bitmap.drawLine(this.bitmap, object || 0, y1 || 0, x2 || 0, y2 || 0, color || 'white', lineWidth || 1);
    return true;
};

/**
 * Draws a circle
 * Returns true if bitmap exists
 *
 * @param {String} [color='white'] - Color
 * @param {Number} [radius=1] - Radius of the circle
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object } [object=0] - The X coordinate or Point or object with parameters
 * @param {Number} [y=0] - The Y coordinate (if object is Number)
 *
 * @param {Number} [object.x=0] - The X coordinate
 * @param {Number} [object.y=0] - The Y coordinate
 *
 * @returns {Boolean} Bitmap exists
 */
DKTools.Base.prototype.drawCircle = function(color, radius, object, y) {
    if (!this.hasBitmap()) {
        return false;
    }
    if (object instanceof Object) {
        return this.drawCircle(color, radius, object.x, object.y);
    }
    // object - Number
    this.bitmap.drawCircle(object || 0, y || 0, radius || 1, color || 'white');
    return true;
};

/**
 * Draws a bitmap
 * Returns true if bitmap exists
 *
 * @param {Bitmap | Object} object - Bitmap or object with parameters
 * @param {Object} [options] - Options for drawing
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @param {PIXI.Rectangle | Rectangle | Object} [options.source] - Source from bitmap. Rectangle or object with parameters
 * @param {PIXI.Rectangle | Rectangle | Object} [options.destination] - Destination to bitmap. Rectangle or object with parameters
 * @param {Function} [options.callback] - Callback function, which should return an object with source and destination
 *
 * @param {Number} [options.source.x] - The X coordinate
 * @param {Number} [options.source.y] - The Y coordinate
 * @param {Number} [options.source.width] - Width of the rectangle
 * @param {Number} [options.source.height] - Height of the rectangle
 *
 * @param {Number} [options.destination.x] - The X coordinate
 * @param {Number} [options.destination.y] - The Y coordinate
 * @param {Number} [options.destination.width] - Width of the rectangle
 * @param {Number} [options.destination.height] - Height of the rectangle
 *
 * @see DKTools.Utils.Bitmap.load
 *
 * @returns {Boolean} Bitmap exists
 */
DKTools.Base.prototype.drawBitmap = function(object, options) {
    if (!this.hasBitmap() || !object) {
        return false;
    }
    options = options || {};
    const bitmap = DKTools.Utils.Bitmap.load(object);
    if (!bitmap) {
        return false;
    }
    bitmap.addLoadListener(function() {
        let source, destination;
        if (_.isFunction(options.callback)) {
            const result = options.callback(bitmap, this);
            source = result.source;
            destination = result.destination;
        }
        source = source || options.source || {};
        destination = destination || options.destination || {};
        const sx = source.x || 0;
        let sy = source.y || 0;
        if (_.isString(sy)) {
            sy = this.getLineHeight() * Number(sy);
        }
        let sw = source.width == null ? bitmap.width : source.width;
        let sh = source.height == null ? bitmap.height : source.height;
        if (_.isString(sw) && sw.match(/(\d+)\s*%/)) {
            sw = bitmap.width * Number(RegExp.$1) / 100;
        }
        if (_.isString(sh)) {
            if (sh.match(/(\d+)\s*%/)) {
                sh = bitmap.height * Number(RegExp.$1) / 100;
            } else {
                sh = this.getLineHeight() * Number(sh);
            }
        }
        const dx = destination.x || 0;
        let dy = destination.y || 0;
        if (_.isString(dy)) {
            dy = this.getLineHeight() * Number(dy);
        }
        let dw = destination.width == null ? sw : destination.width;
        if (_.isString(dw) && dw.match(/(\d+)\s*%/)) {
            dw = sw *  Number(RegExp.$1) / 100;
        }
        let dh = destination.height == null ? sh : destination.height;
        if (_.isString(dh) && dh.match(/(\d+)\s*%/)) {
            dh = sh *  Number(RegExp.$1) / 100;
        }
        this.bitmap.blt(bitmap, sx, sy, sw, sh, dx, dy, dw, dh);
    }.bind(this));
    return true;
};

/**
 * Draws an icon
 * Returns true if bitmap exists
 *
 * @param {Number} iconIndex - Icon index
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object } [object=0] - The X coordinate or Point or object with parameters
 * @param {Number} [y=0] - The Y coordinate (if object is Number)
 *
 * @param {Number} [object.x=0] - The X coordinate
 * @param {Number} [object.y=0] - The Y coordinate
 *
 * @returns {Boolean} Bitmap exists
 */
DKTools.Base.prototype.drawIcon = function(iconIndex, object, y) {
    if (!this.hasBitmap() || iconIndex == null) {
        return false;
    }
    if (object instanceof Object) {
        return this.drawIcon(iconIndex, object.x, object.y);
    }
    const bitmap = ImageManager.loadSystem('IconSet');
    const pw = Window_Base._iconWidth;
    const ph = Window_Base._iconHeight;
    const sx = iconIndex % 16 * pw;
    const sy = Math.floor(iconIndex / 16) * ph;
    // object - Number
    this.bitmap.blt(bitmap, sx, sy, pw, ph, object || 0, y || 0);
    return true;
};

/**
 * Draws a character face
 * Returns true if bitmap exists
 *
 * @param {String} faceName - Face filename
 * @param {Number} faceIndex - Face index
 * @param {Number | PIXI.Rectangle | Rectangle | Object} [object=0] - The X coordinate or Rectangle or object with parameters
 * @param {Number} [y=0] - The Y coordinate (if object is Number)
 * @param {Number} [width=Window_Base._faceWidth] - Width of the face (if object is Number)
 * @param {Number} [height=Window_Base._faceHeight] - Height of the face (if object is Number)
 *
 * @param {Number} [object.x=0] - The X coordinate
 * @param {Number} [object.y=0] - The Y coordinate
 * @param {Number} [object.width=Window_Base._faceWidth] - Width of the face
 * @param {Number} [object.height=Window_Base._faceHeight] - Height of the face
 *
 * @returns {Boolean} Bitmap exists
 */
DKTools.Base.prototype.drawFace = function(faceName, faceIndex, object, y, width, height) {
    if (!this.hasBitmap()) {
        return false;
    }
    if (object instanceof Object) {
        return this.drawFace(faceName, faceIndex, object.x, object.y, object.width, object.height);
    }
    width = width || Window_Base._faceWidth;
    height = height || Window_Base._faceHeight;
    const bitmap = ImageManager.loadFace(faceName);
    const pw = Window_Base._faceWidth;
    const ph = Window_Base._faceHeight;
    const sw = Math.min(width, pw);
    const sh = Math.min(height, ph);
    // object - Number
    const dx = Math.floor(object || 0 + Math.max(width - pw, 0) / 2);
    const dy = Math.floor(y || 0 + Math.max(height - ph, 0) / 2);
    const sx = faceIndex % 4 * pw + (pw - sw) / 2;
    const sy = Math.floor(faceIndex / 4) * ph + (ph - sh) / 2;
    this.bitmap.blt(bitmap, sx, sy, sw, sh, dx, dy);
    return true;
};

/**
 * Draws a character
 * Returns true if bitmap exists
 *
 * @param {String} characterName - Character filename
 * @param {Number} characterIndex - Character index
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object } [object=0] - The X coordinate or Point or object with parameters
 * @param {Number} [y=0] - The Y coordinate (if object is Number)
 *
 * @param {Number} [object.x=0] - The X coordinate
 * @param {Number} [object.y=0] - The Y coordinate
 *
 * @returns {Boolean} Bitmap exists
 */
DKTools.Base.prototype.drawCharacter = function(characterName, characterIndex, object, y) {
    if (!this.hasBitmap()) {
        return false;
    }
    if (object instanceof Object) {
        return this.drawCharacter(characterName, characterIndex, object.x, object.y);
    }
    const bitmap = ImageManager.loadCharacter(characterName);
    const big = ImageManager.isBigCharacter(characterName);
    const pw = bitmap.width / (big ? 3 : 12);
    const ph = bitmap.height / (big ? 4 : 8);
    const n = characterIndex;
    const sx = (n % 4 * 3 + 1) * pw;
    const sy = (Math.floor(n / 4) * 4) * ph;
    // object - Number
    this.bitmap.blt(bitmap, sx, sy, pw, ph, object || 0 - pw / 2, y || 0 - ph);
    return true;
};

/**
 * Draws the name of the item
 *
 * @param {Object} item - Item
 * @param {Number} [x=0] - The X coordinate
 * @param {Number} [y=0] - The Y coordinate
 * @param {Number} [width=312] - Width of the name
 */
DKTools.Base.prototype.drawItemName = function(item, x, y, width) {
    if (!item) {
        return;
    }
    const iconBoxWidth = Window_Base._iconWidth + 4;
    x = x || 0;
    y = y || 0;
    this.drawIcon(item.iconIndex, x + 2, y + 2);
    this.drawText(item.name, {
        x: x + iconBoxWidth,
        y: y,
        width: width || 312 - iconBoxWidth,
        align: 'left'
    });
};

// fill methods

/**
 * Fills a rectangle with color
 * Returns true if bitmap exists
 *
 * @param {Object} [object={}] - Parameters for drawing
 *
 * @param {String} [object.color='white'] - Fill color
 * @param {PIXI.Rectangle | Rectangle | Object | null} [object.rect=undefined] - Rectangle for drawing
 * @param {Number} [object.x=0] - The X coordinate (if object.rect is undefined or null)
 * @param {Number} [object.y=0] - The Y coordinate (if object.rect is undefined or null)
 * @param {Number} [object.width=this.standardDrawingWidth()] - Width of the rectangle (if object.rect is undefined or null)
 * @param {Number} [object.height=this.standardDrawingHeight()] - Height of the rectangle (if object.rect is undefined or null)
 *
 * @param {Number} [object.rect.x=0] - The X coordinate
 * @param {Number} [object.rect.y=0] - The Y coordinate
 * @param {Number} [object.rect.width] - Width of the rectangle
 * @param {Number} [object.rect.height] - Height of the rectangle
 *
 * @see Bitmap.prototype.fillRect
 *
 * @returns {Boolean} Bitmap exists
 */
DKTools.Base.prototype.fillRect = function(object) {
    if (!this.hasBitmap()) {
        return false;
    }
    let x, y, width, height;
    if (object.rect instanceof Object) {
        x = object.rect.x;
        y = object.rect.y;
        width = object.rect.width;
        height = object.rect.height;
    } else {
        x = object.x;
        y = object.y;
        width = object.width;
        height = object.height;
    }
    this.bitmap.fillRect(x || 0, y || 0, width || this.standardDrawingWidth(), height || this.standardDrawingHeight(), object.color);
    return true;
};

/**
 * Fills the bitmap with color
 * Returns true if bitmap exists
 *
 * @param {String} [color] - Color of fill
 *
 * @see DKTools.Base.prototype.fillRect
 *
 * @returns {Boolean} Bitmap exists
 */
DKTools.Base.prototype.fillAll = function(color) {
    return this.fillRect({ color: color });
};

/**
 * Draws an arc and fills it with color
 * Returns true if bitmap exists
 *
 * @param {Object} [object={}] - Parameters for drawing
 *
 * @param {Number} [object.radius=1] - Radius of the arc
 * @param {Number} [object.startAngle=0] - Starting angle
 * @param {Number} [object.endAngle=Math.PI*2] - End angle
 * @param {String} [object.color='white'] - Fill color
 * @param {Boolean} [object.anticlockwise=false] - Draws an anticlockwise
 * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object | null) [object.pos=undefined] - Position of the arc
 * @param {Number} [object.x=0] - The X coordinate (if object.pos is undefined or null)
 * @param {Number} [object.y=0] - The Y coordinate (if object.pos is undefined or null)
 *
 * @param {Number} [object.pos.x=0] - The X coordinate
 * @param {Number} [object.pos.y=0] - The Y coordinate
 *
 * @see DKTools.Utils.Bitmap.fillArc
 *
 * @returns {Boolean} Bitmap exists
 */
DKTools.Base.prototype.fillArc = function(object) {
    if (!this.hasBitmap()) {
        return false;
    }
    object = object || {};
    const startAngle = object.startAngle || 0;
    const endAngle = _.isNumber(object.endAngle) ? object.endAngle : Math.PI * 2;
    const radius = object.radius || 1;
    const color = object.color || 'white';
    const anticlockwise = object.anticlockwise || false;
    let x, y;
    if (object.pos instanceof Object) {
        x = object.pos.x;
        y = object.pos.y;
    } else {
        x = object.x;
        y = object.y;
    }
    DKTools.Utils.Bitmap.fillArc(this.bitmap, x || 0, y || 0, radius, startAngle, endAngle, color, anticlockwise);
    return true;
};

// stroke methods

/**
 * Draws a rectangle without fill
 * Returns true if bitmap exists
 *
 * @param {Object} [object={}] - Parameters for drawing
 *
 * @param {String} [object.color='white'] - Fill color
 * @param {Number} [object.lineWidth=1] - Line width
 * @param {PIXI.Rectangle | Rectangle | Object | null} [object.rect=undefined] - Rectangle for drawing
 * @param {Number} [object.x=0] - The X coordinate (if object.rect is undefined or null)
 * @param {Number} [object.y=0] - The Y coordinate (if object.rect is undefined or null)
 * @param {Number} [object.width=this.standardDrawingWidth()] - Width of the rectangle (if object.rect is undefined or null)
 * @param {Number} [object.height=this.standardDrawingHeight()] - Height of the rectangle (if object.rect is undefined or null)
 *
 * @param {Number} [object.rect.x=0] - The X coordinate
 * @param {Number} [object.rect.y=0] - The Y coordinate
 * @param {Number} [object.rect.width] - Width of the rectangle
 * @param {Number} [object.rect.height] - Height of the rectangle
 *
 * @see DKTools.Utils.Bitmap.strokeRect
 *
 * @returns {Boolean} Bitmap exists
 */
DKTools.Base.prototype.strokeRect = function(object) {
    if (!this.hasBitmap()) {
        return false;
    }
    let x, y, width, height;
    if (object.rect instanceof Object) {
        x = object.rect.x;
        y = object.rect.y;
        width = object.rect.width;
        height = object.rect.height;
    } else {
        x = object.x;
        y = object.y;
        width = object.width;
        height = object.height;
    }
    DKTools.Utils.Bitmap.strokeRect(this.bitmap, x || 0, y || 0, width || this.standardDrawingWidth(), height || this.standardDrawingHeight(), object.color, object.lineWidth);
    return true;
};

/**
 * Draws an arc without fill
 * Returns true if bitmap exists
 *
 * @param {Object} [object={}] - Parameters for drawing
 *
 * @param {Number} [object.radius=1] - Radius of arc
 * @param {Number} [object.startAngle=0] - Starting angle
 * @param {Number} [object.endAngle=Math.PI*2] - End angle
 * @param {String} [object.color='white'] - Line color
 * @param {Number} [object.lineWidth=1] - Line width
 * @param {Boolean} [object.anticlockwise=false] - Draws an anticlockwise
 * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object | null) [object.pos=undefined] - Position of arc
 * @param {Number} [object.x=0] - The X coordinate (if object.pos is undefined or null)
 * @param {Number} [object.y=0] - The Y coordinate (if object.pos is undefined or null)
 *
 * @param {Number} [object.pos.x=0] - The X coordinate
 * @param {Number} [object.pos.y=0] - The Y coordinate
 *
 * @see DKTools.Utils.Bitmap.strokeArc
 *
 * @returns {Boolean} Bitmap exists
 */
DKTools.Base.prototype.strokeArc = function(object) {
    if (!this.hasBitmap()) {
        return false;
    }
    object = object || {};
    const startAngle = object.startAngle || 0;
    const endAngle = _.isNumber(object.endAngle) ? object.endAngle : Math.PI * 2;
    const radius = object.radius || 1;
    const color = object.color || 'white';
    const lineWidth = object.lineWidth || 1;
    const anticlockwise = object.anticlockwise || false;
    let x, y;
    if (object.pos) {
        x = object.pos.x;
        y = object.pos.y;
    } else {
        x = object.x;
        y = object.y;
    }
    DKTools.Utils.Bitmap.strokeArc(this.bitmap, x || 0, y || 0, radius, startAngle, endAngle, color, lineWidth, anticlockwise);
    return true;
};

// gradient methods

/**
 * Fills a rectangle with a gradient
 * Returns true if bitmap exists
 *
 * @param {String} [object.color1='black'] - First color
 * @param {String} [object.color2='white'] - Second color
 * @param {Boolean} [object.vertical=false] - Vertical gradient
 * @param {Number | String} [object.x=0] - The X coordinate
 * @param {Number | String} [object.y=0] - The Y coordinate or line number (String)
 * @param {Number | String} [object.width=this.standardDrawingWidth()] - Width of the rectangle
 * @param {Number | String} [object.height=this.standardDrawingHeight()] - Height of the rectangle or number of lines (String)
 * @param {PIXI.Rectangle | Rectangle | Object | null} [object.rect=undefined] - Rectangle for drawing (ignores other parameters of position: x, y, width, height)
 *
 * @param {Number | String} [object.rect.x=0] - The X coordinate
 * @param {Number | String} [object.rect.y=0] - The Y coordinate or line number (String)
 * @param {Number | String} [object.rect.width=this.standardDrawingWidth()] - Width of the rectangle
 * @param {Number | String} [object.rect.height=this.standardDrawingHeight()] - Height of the rectangle or number of lines (String)
 *
 * @see Bitmap.prototype.gradientFillRect
 * @see DKTools.Base.prototype.getConvertedX
 * @see DKTools.Base.prototype.getConvertedY
 * @see DKTools.Base.prototype.getConvertedWidth
 * @see DKTools.Base.prototype.getConvertedHeight
 *
 * @returns {Boolean} Bitmap exists
 */
DKTools.Base.prototype.gradientFillRect = function(object) {
    if (!this.hasBitmap()) {
        return false;
    }
    const color1 = object.color1 || 'black';
    const color2 = object.color2 || 'white';
    let x, y, width, height;
    if (object.rect instanceof Object) {
        x = object.rect.x;
        y = object.rect.y;
        width = object.rect.width;
        height = object.rect.height;
    } else {
        x = object.x;
        y = object.y;
        width = object.width;
        height = object.height;
    }
    x = this.getConvertedX(x) || 0;
    y = this.getConvertedY(y) || 0;
    width = this.getConvertedWidth(width) || this.standardDrawingWidth();
    height = this.getConvertedHeight(height) || this.standardDrawingHeight();
    this.bitmap.gradientFillRect(x, y, width, height, color1, color2, object.vertical || false);
    return true;
};

/**
 * Fills the bitmap with gradient
 * Returns true if bitmap exists
 *
 * @param {String} [object.color1='black'] - First color
 * @param {String} [object.color2='white'] - Second color
 * @param {Boolean} [vertical=false] - Vertical gradient
 *
 * @see DKTools.Base.prototype.gradientFillRect
 *
 * @returns {Boolean} Bitmap exists
 */
DKTools.Base.prototype.gradientFillAll = function(color1, color2, vertical) {
    return this.gradientFillAll({ color1: color1, color2: color2, vartical: vertical });
};

// draw text ex methods

/**
 * Makes a text wrap
 *
 * @param {String} text - Text
 * @param {Object} options - Wrap options
 *
 * @param {Number} [options.maxWidth] - Max width of a text line
 * @param {Number} [options.maxLines] - Max lines
 * @param {Boolean} [options.breakWords] - Breaks a words for the wrapping
 *
 * @returns {String} Wrapped text
 */
DKTools.Base.prototype.textWrap = function(text, options) {
    text = String(text);
    options = options || {};

    if (!text) {
        return '';
    }

    const lines = text.split('\n');
    const maxWidth = options.maxWidth || (this.hasBitmap() ? this.bitmap.width : 0);

    const spaceWidth = this.getTextWidth(' ');

    let result = '';
    let newLines = 1;

    for (let i = 0; i < lines.length; i++) {
        let spaceLeft = maxWidth;
        const words = lines[i].split(' ');

        for (let j = 0; j < words.length; j++) {
            const wordWidth = this.getTextWidth(words[j]);

            if (options.breakWords && wordWidth > maxWidth) {
                const characters = words[j].split('');
                for (let c = 0; c < characters.length; c++) {
                    const characterWidth = this.getTextWidth(characters[c]);

                    if (characterWidth > spaceLeft) {
                        result += '\n' + characters[c];
                        spaceLeft = maxWidth - characterWidth;
                    } else {
                        if (c === 0) {
                            result += ' ';
                        }
                        result += characters[c];
                        spaceLeft -= characterWidth;
                    }
                }
            } else {
                const wordWidthWithSpace = wordWidth + spaceWidth;

                if (j === 0 || wordWidthWithSpace > spaceLeft) {
                    if (j > 0) {
                        if (options.maxLines === newLines) {
                            return result;
                        }
                        result += '\n';
                        newLines++;
                    }
                    result += words[j];
                    spaceLeft = maxWidth - wordWidth;
                } else {
                    spaceLeft -= wordWidthWithSpace;
                    result += ' ' + words[j];
                }
            }
        }

        if (i < lines.length - 1) {
            result += '\n';
        }
    }

    return result;
};

/**
 * Конвертирует экранированные символы
 * Возвращает текст с конвертированными символами
 *
 * @param {String} text - Текст
 * @returns {String} Текст с конвертированными символами
 */
DKTools.Base.prototype.convertEscapeCharacters = function(text) {
    try {
        return Window_Base.prototype.convertEscapeCharacters.call(this, text);
    } catch(e) {
        text = text.replace(/\\/g, '\x1b');
        text = text.replace(/\x1b\x1b/g, '\\');
        text = text.replace(/\x1bV\[(\d+)\]/gi, function() {
            return $gameVariables.value(parseInt(arguments[1]));
        }.bind(this));
        text = text.replace(/\x1bV\[(\d+)\]/gi, function() {
            return $gameVariables.value(parseInt(arguments[1]));
        }.bind(this));
        text = text.replace(/\x1bN\[(\d+)\]/gi, function() {
            return this.actorName(parseInt(arguments[1]));
        }.bind(this));
        text = text.replace(/\x1bP\[(\d+)\]/gi, function() {
            return this.partyMemberName(parseInt(arguments[1]));
        }.bind(this));
        text = text.replace(/\x1bG/gi, TextManager.currencyUnit);
        return text;
    }
};

/**
 * Returns the name of the actor
 *
 * @param {Number} n - Number of the actor
 * @returns {String} Name of the actor
 */
DKTools.Base.prototype.actorName = function(n) {
    const actor = n >= 1 ? $gameActors.actor(n) : null;
    return actor ? actor.name() : '';
};

/**
 * Returns the name of the actor
 *
 * @param {Number} n - Number of the actor in the party
 * @returns {String} Name of the actor
 */
DKTools.Base.prototype.partyMemberName = function(n) {
    const actor = n >= 1 ? $gameParty.members()[n - 1] : null;
    return actor ? actor.name() : '';
};

/**
 * Makes the font size bigger
 */
DKTools.Base.prototype.makeFontBigger = function() {
    if (this.hasBitmap() && this.bitmap.fontSize <= 96) {
        this.bitmap.fontSize += 12;
    }
};

/**
 * Makes the font size smaller
 */
DKTools.Base.prototype.makeFontSmaller = function() {
    if (this.hasBitmap() && this.bitmap.fontSize >= 24) {
        this.bitmap.fontSize -= 12;
    }
};

/**
 * @param {Object} textState -
 * @param {Boolean} all -
 * @returns {Number}
 */
DKTools.Base.prototype.calcTextHeight = function(textState, all) {
    if (!textState || !this.hasBitmap()) {
        return 0;
    }
    const lastFontSize = this.bitmap.fontSize;
    const lines = textState.text.slice(textState.index).split('\n');
    const maxLines = all ? lines.length : 1;
    let textHeight = 0;

    for (let i = 0; i < maxLines; i++) {
        const regExp = /\x1b[\{\}]/g;
        let maxFontSize = this.bitmap.fontSize;
        for (;;) {
            const array = regExp.exec(lines[i]);
            if (array) {
                if (array[0] === '\x1b{') {
                    this.makeFontBigger();
                }
                if (array[0] === '\x1b}') {
                    this.makeFontSmaller();
                }
                if (maxFontSize < this.bitmap.fontSize) {
                    maxFontSize = this.bitmap.fontSize;
                }
            } else {
                break;
            }
        }
        textHeight += maxFontSize + 8;
    }
    this.bitmap.fontSize = lastFontSize;
    return textHeight;
};

/**
 * @param {Object} textState
 */
DKTools.Base.prototype.processCharacter = function(textState) {
    Window_Base.prototype.processCharacter.call(this, textState);
};

/**
 * @param {Object} textState
 */
DKTools.Base.prototype.processNormalCharacter = function(textState) {
    const c = textState.text[textState.index++];
    const w = this.getTextWidth(c);
    this.drawText(c, {
        align: 'left',
        pos: textState,
        width: w * 2,
        height: textState.height
    });
    textState.x += w;
};

/**
 * @param {Object} textState
 */
DKTools.Base.prototype.processNewLine = function(textState) {
    if (!textState.width) {
        textState.width = textState.x;
    } else if (textState.width < textState.x) {
        textState.width = textState.x;
    }
    Window_Base.prototype.processNewLine.call(this, textState);
};

/**
 * @param {Object} textState
 */
DKTools.Base.prototype.processNewPage = function(textState) {
    Window_Base.prototype.processNewPage.call(this, textState);
};

/**
 * @param {String} code
 * @param {Object} textState
 */
DKTools.Base.prototype.processEscapeCharacter = function(code, textState) {
    switch (code) {
        case 'C':
            this.changeTextColor(this.getWindowskinTextColor(this.obtainEscapeParam(textState)));
            break;
        case 'I':
            this.processDrawIcon(this.obtainEscapeParam(textState), textState);
            break;
        case '{':
            this.makeFontBigger();
            break;
        case '}':
            this.makeFontSmaller();
            break;
    }
};

/**
 * @param {Number} iconIndex
 * @param {Object} textState
 */
DKTools.Base.prototype.processDrawIcon = function(iconIndex, textState) {
    Window_Base.prototype.processDrawIcon.call(this, iconIndex, textState);
};

/**
 * @param {Object} textState
 */
DKTools.Base.prototype.obtainEscapeCode = function(textState) {
    return Window_Base.prototype.obtainEscapeCode.call(this, textState);
};

/**
 * @param {Object} textState
 */
DKTools.Base.prototype.obtainEscapeParam = function(textState) {
    return Window_Base.prototype.obtainEscapeParam.call(this, textState);
};

// load methods

/**
 * Loads a bitmap from a folder img/animations/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.loadAnimation = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/animations/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/animations/', object, listener, hue, smooth);
};

/**
 * Loads a bitmap from a folder img/battlebacks1/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.loadBattleback1 = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/battlebacks1/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/battlebacks1/', object, listener, hue, smooth);
};

/**
 * Loads a bitmap from a folder img/battlebacks2/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.loadBattleback2 = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/battlebacks2/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/battlebacks2/', object, listener, hue, smooth);
};

/**
 * Loads a bitmap from a folder img/enemies/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.loadEnemy = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/enemies/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/enemies/', object, listener, hue, smooth);
};

/**
 * Loads a bitmap from a folder img/characters/
 * Returns true if the bitmap of the object has been changed
 *
 * @@param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.loadCharacter = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/characters/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/characters/', object, listener, hue, smooth);
};

/**
 * Loads a bitmap from a folder img/faces/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.loadFace = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/faces/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/faces/', object, listener, hue, smooth);
};

/**
 * Loads a bitmap from a folder img/parallaxes/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.loadParallax = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/parallaxes/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/parallaxes/', object, listener, hue, smooth);
};

/**
 * Loads a bitmap from a folder img/pictures/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.loadPicture = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/pictures/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/pictures/', object, listener, hue, smooth);
};

/**
 * Loads a bitmap from a folder img/sv_actors/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.loadSvActor = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/sv_actors/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/sv_actors/', object, listener, hue, smooth);
};

/**
 * Loads a bitmap from a folder img/sv_enemies/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.loadSvEnemy = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/sv_enemies/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/sv_enemies/', object, listener, hue, smooth);
};

/**
 * Loads a bitmap from a folder img/system/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.loadSystem = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/system/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/system/', object, listener, hue, smooth);
};

/**
 * Loads a bitmap from a folder img/tilesets/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.loadTileset = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/tilesets/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/tilesets/', object, listener, hue, smooth);
};

/**
 * Loads a bitmap from a folder img/titles1/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.loadTitle1 = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/titles1/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/titles1/', object, listener, hue, smooth);
};

/**
 * Loads a bitmap from a folder img/titles2/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.loadTitle2 = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/titles2/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/titles2/', object, listener, hue, smooth);
};

/**
 * Loads a windowskin from a folder img/system/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.loadWindowskin = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadSystem(object.filename || this.standardWindowskin(), object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadSystem(object || this.standardWindowskin(), listener, hue, smooth);
};

// reserve methods

/**
 * Loads and reserves a bitmap from a folder img/animations/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.reserveAnimation = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/animations/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/animations/', object, listener, hue, smooth);
};

/**
 * Loads and reserves a bitmap from a folder img/battlebacks1/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.reserveBattleback1 = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/battlebacks1/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/battlebacks1/', object, listener, hue, smooth);
};

/**
 * Loads and reserves a bitmap from a folder img/battlebacks2/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.reserveBattleback2 = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/battlebacks2/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/battlebacks2/', object, listener, hue, smooth);
};

/**
 * Loads and reserves a bitmap from a folder img/enemies/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.reserveEnemy = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/enemies/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/enemies/', object, listener, hue, smooth);
};

/**
 * Loads and reserves a bitmap from a folder img/characters/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.reserveCharacter = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/characters/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/characters/', object, listener, hue, smooth);
};

/**
 * Loads and reserves a bitmap from a folder img/faces/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.reserveFace = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/faces/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/faces/', object, listener, hue, smooth);
};

/**
 * Loads and reserves a bitmap from a folder img/parallaxes/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.reserveParallax = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/parallaxes/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/parallaxes/', object, listener, hue, smooth);
};

/**
 * Loads and reserves a bitmap from a folder img/pictures/
 * Returns true if the bitmap of the object has been changed
 *
 * @@param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.reservePicture = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/pictures/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/pictures/', object, listener, hue, smooth);
};

/**
 * Loads and reserves a bitmap from a folder img/sv_actors/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.reserveSvActor = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/sv_actors/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/sv_actors/', object, listener, hue, smooth);
};

/**
 * Loads and reserves a bitmap from a folder img/sv_enemies/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.reserveSvEnemy = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/sv_enemies/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/sv_enemies/', object, listener, hue, smooth);
};

/**
 * Loads and reserves a bitmap from a folder img/system/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.reserveSystem = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/system/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/system/', object, listener, hue, smooth);
};

/**
 * Loads and reserves a bitmap from a folder img/tilesets/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.reserveTileset = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/tilesets/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/tilesets/', object, listener, hue, smooth);
};

/**
 * Loads and reserves a bitmap from a folder img/titles1/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.reserveTitle1 = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/titles1/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/titles1/', object, listener, hue, smooth);
};

/**
 * Loads and reserves a bitmap from a folder img/titles2/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.reserveTitle2 = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/titles2/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/titles2/', object, listener, hue, smooth);
};

/**
 * Loads and reserves a windowskin img/system/
 * Returns true if the bitmap of the object has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Bitmap.prototype.addLoadListener
 *
 * @returns {Boolean} Bitmap of the object has been changed
 */
DKTools.Base.prototype.reserveWindowskin = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveSystem(object.filename || this.standardWindowskin(), object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveSystem(object || this.standardWindowskin(), listener, hue, smooth);
};

// options methods

/**
 * Returns true if this option is enabled
 *
 * @param {String} option - Name of the option
 * @returns {Boolean} Option is enabled
 */
DKTools.Base.prototype.isOptionEnabled = function(option) {
    return DKTools.Utils.Array.contains(this._options, option);
};

/**
 * Returns true if this option is disabled
 *
 * @param {String} option - Name of the option
 * @returns {Boolean} Option is disabled
 */
DKTools.Base.prototype.isOptionDisabled = function(option) {
    return !this.isOptionEnabled(option);
};

/**
 * Processes the change of the option
 *
 * @param {String} option - Name of the option
 * @param {Boolean} value - Value of the option
 */
DKTools.Base.prototype.onOptionChange = function(option, value) {
    _.forEach(this._optionChangeListeners[option], function(listener) {
         listener(option, value);
    });
};

/**
 * Adds a listener of change of the option
 *
 * @param {String} option - Name of the option
 * @param {Function} listener - Listener
 */
DKTools.Base.prototype.addOptionChangeListener = function(option, listener) {
    (this._optionChangeListeners[option] || (this._optionChangeListeners[option] = [])).push(listener);
};

/**
 * Turns on the option
 *
 * @param {String} option - Name of the option
 */
DKTools.Base.prototype.enableOption = function(option) {
    if (this.isOptionDisabled(option)) {
        this._options.push(option);
        this.onOptionChange(option, true);
    }
};

/**
 * Turns on the options
 *
 * @param {String[] | ...String} object - Names of the options
 */
DKTools.Base.prototype.enableOptions = function(object) {
    let options = (arguments.length > 1 ? arguments : object);
    _.forEach(options, this.enableOption.bind(this));
};

/**
 * Turns off the option
 *
 * @param {String} option - Name of the option
 */
DKTools.Base.prototype.disableOption = function(option) {
    if (this.isOptionEnabled(option)) {
        DKTools.Utils.Array.remove(this._options, option);
        this.onOptionChange(option, false);
    }
};

/**
 * Turns off the options
 *
 * @param {String[] | ...String} object - Names of the options
 */
DKTools.Base.prototype.disableOptions = function(object) {
    const options = (arguments.length > 1 ? arguments : object);
    _.forEach(options, this.disableOption.bind(this));
};

/**
 * Switches the option
 *
 * @param {String} option - Name of the option
 */
DKTools.Base.prototype.switchOption = function(option) {
    if (this.isOptionEnabled(option)) {
        this.disableOption(option);
    } else {
        this.enableOption(option);
    }
};

/**
 * Switches the options
 *
 * @param {String[] | ...String} object - Names of the options
 */
DKTools.Base.prototype.switchOptions = function(object) {
    const options = (arguments.length > 1 ? arguments : object);
    _.forEach(options, this.switchOption.bind(this));
};

/**
 * Returns conjunction of the options
 *
 * @param {String[] | ...String} object - Names of the options
 * @returns {Boolean} conjunction of the options
 */
DKTools.Base.prototype.isOptionsEnabled = function(object) {
    const options = (arguments.length > 1 ? arguments : object);
    return _.every(options, this.isOptionEnabled.bind(this));
};

/**
 * Returns conjunction of the options
 *
 * @param {String[] | ...String} object - Names of the options
 * @returns {Boolean} conjunction of the options
 */
DKTools.Base.prototype.isOptionsDisabled = function(object) {
    const options = (arguments.length > 1 ? arguments : object);
    return _.every(options, this.isOptionDisabled.bind(this));
};

// event methods

/**
 * Checks the event
 *
 * @private
 * @param {DKTools.Event | DKTools.Animation} event - Event
 * @returns {Boolean}
 */
DKTools.Base.prototype._checkEvent = function(event) {
    return event && !event.isFinished();
};

/**
 * Checks a container with the events and removes the completed events
 *
 * @private
 * @param {Array} container - Container for the events
 * @returns {Array} Filtered array
 */
DKTools.Base.prototype._checkEventsContainer = function(container) {
    return _.filter(container, this._checkEvent.bind(this));
};

/**
 * Checks the events
 *
 * @private
 */
DKTools.Base.prototype._checkEvents = function() {
    _.forEach(this.__events, function(container, type) {
        this.__events[type] = this._checkEventsContainer(container);
    }.bind(this));
};

/**
 * Removes the event from a container
 * Returns true if the event was removed
 *
 * @param {DKTools.Event | DKTools.Animation} event - Event
 * @returns {Boolean} Event was removed
 */
DKTools.Base.prototype.removeEvent = function(event) {
    const index = this.getEventIndex(event);
    if (index >= 0) {
        const container = this.getEventsContainer(event);
        container[index] = null;
        return true;
    }
    return false;
};

/**
 * Performs a callback function for the events
 *
 * @param {String} type - Type of event
 * @param {Function} callback - Event processing function
 */
DKTools.Base.prototype.iterateEventsContainer = function(type, callback) {
    const container = this.getEventsContainerByType(type);
    _.forEach(container, callback);
};

/**
 * Checks the events for pause
 * Returns the conjunction of pauses of the events
 *
 * @param {String} type - Type of event
 * @returns {Boolean} Conjunction of pauses of the events
 */
DKTools.Base.prototype.isEventsPaused = function(type) {
    const container = this.getEventsContainerByType(type);
    return _.every(container, function(event) {
        return event.isPaused();
    });
};

/**
 * Pauses the events
 *
 * @param {String} type - Type of event
 * @param {Number} duration - Duration of pause
 */
DKTools.Base.prototype.pauseEvents = function(type, duration) {
    this.iterateEventsContainer(type, function(event) {
        event.pause(duration);
    });
};

/**
 * Resumes the events
 *
 * @param {String} type - Type of event
 */
DKTools.Base.prototype.resumeEvents = function(type) {
    this.iterateEventsContainer(type, function(event) {
        event.resume();
    });
};

/**
 * Finishes the events
 *
 * @param {String} type - Type of event
 * @param {Boolean} [forcedSuccess] - Forced success for the finish of the events
 *
 * @see DKTools.Event.prototype.finish
 */
DKTools.Base.prototype.finishEvents = function(type, forcedSuccess) {
    this.iterateEventsContainer(type, function(event) {
        event.finish(forcedSuccess);
    });
};

/**
 * Stops the events
 *
 * @param {String} type - Type of event
 * @param {Boolean} [forcedSuccess] - Forced success for the finish of the events
 *
 * @see DKTools.Event.prototype.stop
 */
DKTools.Base.prototype.stopEvents = function(type, forcedSuccess) {
    this.iterateEventsContainer(type, function(event) {
        event.stop(forcedSuccess);
    });
};

/**
 * Updates the events
 *
 * @see DKTools.Base.prototype._checkEvents
 * @see DKTools.Base.prototype.updateReadyEvents
 * @see DKTools.Base.prototype.updateUpdateEvents
 * @see DKTools.Base.prototype.updateQueueEvents
 * @see DKTools.Base.prototype.updateWheelEvents
 */
DKTools.Base.prototype.updateEvents = function() {
    this._checkEvents();
    this.updateReadyEvents();
    this.updateUpdateEvents();
    this.updateQueueEvents();
    this.updateWheelEvents();
};

/**
 * Updates the event
 *
 * @param {DKTools.Event | DKTools.Animation} event - Event
 */
DKTools.Base.prototype.updateEvent = function(event) {
    if (event) {
        event.update();
    }
};

/**
 * Updates the events from container
 *
 * @param {String} type - Type of event
 */
DKTools.Base.prototype.updateEventsContainer = function(type) {
    this.iterateEventsContainer(type, this.updateEvent.bind(this));
};

/**
 * Updates the events with type: removeAllChildren
 */
DKTools.Base.prototype.updateRemoveAllChildrenEvents = function() {
    this.updateEventsContainer('removeAllChildren');
};

/**
 * Updates the events with type: terminateAll
 */
DKTools.Base.prototype.updateTerminateAllEvents = function() {
    this.updateEventsContainer('terminateAll');
};

/**
 * Updates the events with type: removeAll
 */
DKTools.Base.prototype.updateRemoveAllEvents = function() {
    this.updateEventsContainer('removeAll');
};

/**
 * Updates the events with type: checkAll
 */
DKTools.Base.prototype.updateCheckAllEvents = function() {
    this.updateEventsContainer('checkAll');
};

/**
 * Updates the events with type: createAll
 */
DKTools.Base.prototype.updateCreateAllEvents = function() {
    this.updateEventsContainer('createAll');
};

/**
 * Updates the events with type: addAllChildren
 */
DKTools.Base.prototype.updateAddAllChildrenEvents = function() {
    this.updateEventsContainer('addAllChildren');
};

/**
 * Updates the events with type: startAll
 */
DKTools.Base.prototype.updateStartAllEvents = function() {
    this.updateEventsContainer('startAll');
};

/**
 * Updates the events with type: refreshAll
 */
DKTools.Base.prototype.updateRefreshAllEvents = function() {
    this.updateEventsContainer('refreshAll');
};

/**
 * Updates the events with type: updateAll
 */
DKTools.Base.prototype.updateUpdateAllEvents = function() {
    this.updateEventsContainer('updateAll');
};

/**
 * Updates the events with type: redrawAll
 */
DKTools.Base.prototype.updateRedrawAllEvents = function() {
    this.updateEventsContainer('redrawAll');
};

/**
 * Updates the events with type: start
 */
DKTools.Base.prototype.updateStartEvents = function() {
    if (this.isStarted()) {
        this.updateEventsContainer('start');
    }
};

/**
 * Updates the events with type: ready
 */
DKTools.Base.prototype.updateReadyEvents = function() {
    if (this.isReady()) {
        this.updateEventsContainer('ready');
    }
};

/**
 * Updates the events with type: update
 */
DKTools.Base.prototype.updateUpdateEvents = function() {
    this.updateEventsContainer('update');
};

/**
 * Updates the events with type: queue
 */
DKTools.Base.prototype.updateQueueEvents = function() {
    const container = this.getEventsContainerByType('queue');
    const event = container[0];
    this.updateEvent(event);
};

/**
 * Updates the events with type: activate
 */
DKTools.Base.prototype.updateActivateEvents = function() {
    this.updateEventsContainer('activate');
};

/**
 * Updates the events with type: deactivate
 */
DKTools.Base.prototype.updateDeactivateEvents = function() {
    this.updateEventsContainer('deactivate');
};

/**
 * Updates the events with type: show
 */
DKTools.Base.prototype.updateShowEvents = function() {
    this.updateEventsContainer('show');
};

/**
 * Updates the events with type: hide
 */
DKTools.Base.prototype.updateHideEvents = function() {
    this.updateEventsContainer('hide');
};

/**
 * Updates the events with type: mouse-enter
 */
DKTools.Base.prototype.updateMouseEnterEvents = function() {
    this.updateEventsContainer('mouse-enter');
};

/**
 * Updates the events with type: mouse-stay
 */
DKTools.Base.prototype.updateMouseStayEvents = function() {
    this.updateEventsContainer('mouse-stay');
};

/**
 * Updates the events with type: mouse-leave
 */
DKTools.Base.prototype.updateMouseLeaveEvents = function() {
    this.updateEventsContainer('mouse-leave');
};

/**
 * Updates the events with type: mouse-move
 */
DKTools.Base.prototype.updateMouseMoveEvents = function() {
    if (TouchInput.isMouseMoved()) {
        this.updateEventsContainer('mouse-move');
    }
};

/**
 * Updates the events with type: wheelX-inside или wheelX-outside
 *
 * @param {String} type -
 */
DKTools.Base.prototype.updateWheelXEvents = function(type) {
    this._wheelX = TouchInput.wheelX;
    if (this._wheelX !== 0) {
        this.updateEventsContainer('wheelX-' + type);
    }
};

/**
 * Updates the events with type: wheelY-inside или wheelY-outside
 *
 * @param {String} type -
 */
DKTools.Base.prototype.updateWheelYEvents = function(type) {
    this._wheelY = TouchInput.wheelY;
    if (this._wheelY !== 0) {
        this.updateEventsContainer('wheelY-' + type);
    }
};

/**
 * Updates the events with type: wheelX и wheelY
 */
DKTools.Base.prototype.updateWheelEvents = function() {
    let type;
    if (this.isMouseEntered()) {
        type = 'inside';
    } else {
        type = 'outside';
    }
    this.updateWheelXEvents(type);
    this.updateWheelYEvents(type);
};

/**
 * Creates a container for the events
 *
 * @param {String} type - Type of event
 * @returns {Array} Container for the events
 */
DKTools.Base.prototype.createEventsContainer = function(type) {
    this.__events[type] = [];
    return this.__events[type];
};

/**
 * Returns a container for the events by event type
 *
 * @param {String} type - Type of event
 * @returns {Array} Container for the events
 */
DKTools.Base.prototype.getEventsContainerByType = function(type) {
    return this.__events[type] || this.createEventsContainer(type);
};

/**
 * Returns a container for the events by event
 *
 * @param {DKTools.Event | DKTools.Animation} event - Event
 * @returns {Array} Container for the events
 */
DKTools.Base.prototype.getEventsContainer = function(event) {
    return this.getEventsContainerByType(event.type);
};

/**
 * Returns an index of the event in its container
 *
 * @param {DKTools.Event | DKTools.Animation} event - Event
 * @returns {Number} Index of the event in its container
 */
DKTools.Base.prototype.getEventIndex = function(event) {
    return _.indexOf(this.getEventsContainer(event), event);
};

/**
 * Returns an array with the all events or events of a certain type
 *
 * @param {String} [type] - Type of event
 * @returns {Array} Array with the events
 */
DKTools.Base.prototype.getEvents = function(type) {
    if (type) {
        return this.getEventsContainerByType(type);
    }
    let events = [];
    _.forEach(this.__events, function(container) {
        events = _.concat(events, container);
    });
    return events;
};

/**
 * Returns an array with the all animations or animations of a certain type
 *
 * @param {String} [type] - Type of animation
 * @returns {Array} Array with the animations
 */
DKTools.Base.prototype.getAnimations = function(type) {
    return _.filter(this.getEvents(type), function(event) {
        return event instanceof DKTools.Animation;
    });
};

/**
 * Checks for existence of the event in the object
 * Returns true if the event exists
 *
 * @param {DKTools.Event | DKTools.Animation} event - Event
 * @returns {Boolean} Event exists
 */
DKTools.Base.prototype.hasEvent = function(event) {
    return this.getEventIndex(event) >= 0;
};

/**
 * Checks for existence of the events of a certain type
 * Returns true if the events exists
 *
 * @param {String} [type] - Type of event
 * @returns {Boolean} Events exists
 */
DKTools.Base.prototype.hasEvents = function(type) {
    return !DKTools.Utils.Array.isEmpty(this.getEvents(type));
};

/**
 * Checks for existence of the animation in the object
 * Returns true if the animation exists
 *
 * @param {DKTools.Animation} event - Animation
 * @returns {Boolean} Animation exists
 */
DKTools.Base.prototype.hasAnimation = function(animation) {
    return animation instanceof DKTools.Animation && this.getEventIndex(animation) >= 0;
};

/**
 * Checks for existence of the animations of a certain type
 * Returns true if the animations exists
 *
 * @param {String} [type] - Type of animation
 * @returns {Boolean} Animations exists
 */
DKTools.Base.prototype.hasAnimations = function(type) {
    return !DKTools.Utils.Array.isEmpty(this.getAnimations(type));
};

/**
 * Adds the event to container
 *
 * @param {DKTools.Event | DKTools.Animation} event - Event
 */
DKTools.Base.prototype.addEventToContainer = function(event) {
    if (event) {
        if (!event.hasTarget()) {
            event.setTarget(this);
        }
        const container = this.getEventsContainer(event);
        container.push(event);
    }
};

/**
 * Adds the event
 *
 * @param {DKTools.Event | Object} object - Event or object with parameters for the event
 *
 * @param {String} [object.type] - Type of the event
 * @param {Number} [object.repeatTime] - Time of one repeat
 * @param {Number} [object.repeats] - Amount of repeats
 * @param {Number} [object.remainingPauseTime] - Remaining time of pause
 * @param {Function} [object.onStart] - Handler of the event start
 * @param {Function} [object.onUpdate] - Handler of the event update
 * @param {Function} [object.onPause] - Handler of the event pause
 * @param {Function} [object.onReset] - Handler of the event reset
 * @param {Function} [object.onRepeat] - Handler of the event repeat
 * @param {Function} [object.onSuccess] - Handler of the event success
 * @param {Function} [object.onFailure] - Handler of the event failure
 *
 * @returns {DKTools.Event} Added event
 */
DKTools.Base.prototype.addEvent = function(object) {
    let event;
    if (object instanceof DKTools.Event) {
        event = object;
    } else {
        event = new DKTools.Event(object);
    }
    this.addEventToContainer(event);
    return event;
};

/**
 * Adds the one time event
 *
 * @param {DKTools.Event | Object} object - Event or object with parameters for the event
 *
 * @param {String} [object.type] - Type of the event
 * @param {Number} [object.remainingPauseTime] - Remaining time of pause
 * @param {Function} [object.onStart] - Handler of the event start
 * @param {Function} [object.onUpdate] - Handler of the event update
 * @param {Function} [object.onPause] - Handler of the event pause
 * @param {Function} [object.onReset] - Handler of the event reset
 * @param {Function} [object.onRepeat] - Handler of the event repeat
 * @param {Function} [object.onSuccess] - Handler of the event success
 * @param {Function} [object.onFailure] - Handler of the event failure
 *
 * @see DKTools.Event
 * @see DKTools.Base.prototype.addEvent
 *
 * @returns {DKTools.Event} Added event
 */
DKTools.Base.prototype.addOneTimeEvent = function(object) {
    object.repeatTime = 1;
    object.repeats = 0;
    return this.addEvent(object);
};

/**
 * Adds the animation
 *
 * @param {DKTools.Animation} animation - Animation to add
 */
DKTools.Base.prototype.addAnimation = function(animation) {
    this.addEventToContainer(animation);
};

// process methods

/**
 * Processes all
 */
DKTools.Base.prototype.processAll = function() {
    if (this.isOptionEnabled('mouseEnter') && this.isOptionDisabled('mobileDevice')) {
        this.processMouseEnter();
    }
};

/**
 * Processes the entering of a mouse in the object
 */
DKTools.Base.prototype.processMouseEnter = function() {
    if (this.isVisible() && (this.isActive() || this.isOptionEnabled('mouseEnter-ignoreActive'))) {
        if (this.isMouseEntered()) {
            if (this._mouseEnteredTime === 0) {
                this.updateMouseEnterEvents();
            } else {
                this.updateMouseStayEvents();
            }
            this._mouseEnteredTime++;
            this.updateMouseMoveEvents();
        } else {
            if (this._mouseEnteredTime > 0) {
                this.updateMouseLeaveEvents();
            }
            this._clearMouseEnteredTime();
        }
    } else {
        this._clearMouseEnteredTime();
    }
};

// update methods

/**
 * Updates all
 */
DKTools.Base.prototype.updateAll = function() {
    this.updateOpacity();
};

/**
 * Updates the object
 */
DKTools.Base.prototype.update = function() {
    this.updateChildren();
    this.processAll();
    if (this.hasEvents()) {
        this.updateEvents();
    }
};

/**
 * Updates the opacity of the object
 */
DKTools.Base.prototype.updateOpacity = function() {
    // to be overriden by plugins
};

/**
 * Updates input data
 *
 * @see SceneManager.updateInputData
 */
DKTools.Base.prototype.updateInputData = function() {
    SceneManager.updateInputData();
};





//===========================================================================
// DKTools.Sprite
//===========================================================================

DKTools.Sprite.prototype = Object.create(Sprite.prototype);
DKTools.Utils.mixin(DKTools.Sprite.prototype, DKTools.Base.prototype);
DKTools.Sprite.prototype.constructor = DKTools.Sprite;

/**
 * Counter of created sprites
 *
 * @private
 * @readonly
 * @type {Number}
 * @memberOf DKTools.Sprite
 */
DKTools.Sprite._counter = 0;

// properties

Object.defineProperties(DKTools.Sprite.prototype, {

    /**
     * Обложка окна
     *
     * @readonly
     * @type {Bitmap | null}
     * @memberOf DKTools.Sprite.prototype
     */
    windowskin: {
        get: function() {
            return this._windowskin;
        },
        configurable: true
    },

    /**
     * Рамка спрайта
     *
     * @readonly
     * @type {Rectangle}
     * @memberOf DKTools.Sprite.prototype
     */
    frame: {
        get: function() {
            return this._frame;
        },
        configurable: true
    },

    /**
     * Реальная ширина спрайта (без учета масштабирования)
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Sprite.prototype
     */
    realWidth: {
        get: function() {
            return this._frame.width;
        },
        set: function(value) {
            this._frame.width = value;
            this._refresh();
        },
        configurable: true
    },

    /**
     * Реальная высота спрайта (без учета масштабирования)
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Sprite.prototype
     */
    realHeight: {
        get: function() {
            return this._frame.height;
        },
        set: function(value) {
            this._frame.height = value;
            this._refresh();
        },
        configurable: true
    },

    /**
     * Ширина спрайта (с учетом масштабирования)
     *
     * @type {Number}
     * @memberOf DKTools.Sprite.prototype
     */
    width: {
        get: function() {
            return this.realWidth * this.scale.x;
        },
        set: function(value) {
            this.realWidth = Math.floor(value / this.scale.x);
        },
        configurable: true
    },

    /**
     * Высота спрайта (с учетом масштабирования)
     *
     * @type {Number}
     * @memberOf DKTools.Sprite.prototype
     */
    height: {
        get: function() {
            return this.realHeight * this.scale.y;
        },
        set: function(value) {
            this.realHeight = Math.floor(value / this.scale.y);
        },
        configurable: true
    },

    /**
     * Шрифт текста
     *
     * @readonly
     * @type {Object}
     * @memberOf DKTools.Sprite.prototype
     */
    font: {
        get: function() {
            return this._font;
        },
        configurable: true
    },

    /**
     * Цвет текста
     *
     * @readonly
     * @type {String}
     * @memberOf DKTools.Sprite.prototype
     */
    textColor: {
        get: function() {
            return this._textColor;
        },
        configurable: true
    },

    /**
     * Прозрачность рисования
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Sprite.prototype
     */
    paintOpacity: {
        get: function() {
            return this._paintOpacity;
        },
        configurable: true
    },

    /**
     * Цвет заливки
     *
     * @readonly
     * @type {String | null}
     * @memberOf DKTools.Sprite.prototype
     */
    fillColor: {
        get: function() {
            return this._fillColor;
        },
        configurable: true
    },

    /**
     * Выравнивание текста
     *
     * @readonly
     * @type {String}
     * @memberOf DKTools.Sprite.prototype
     */
    align: {
        get: function() {
            return this._align;
        },
        configurable: true
    },

    /**
     * Отображаемые тексты
     *
     * @readonly
     * @type {Object[]}
     * @memberOf DKTools.Sprite.prototype
     */
    texts: {
        get: function() {
            return this._texts;
        },
        configurable: true
    },

    /**
     * Прозрачность спрайта
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Sprite.prototype
     */
    opacity: {
        get: function() {
            return this._opacity;
        },
        configurable: true
    },

    /**
     * Путь к файлу графики
     *
     * @readonly
     * @type {String}
     * @memberOf DKTools.Sprite.prototype
     */
    graphicFolder: {
        get: function() {
            return this._graphicFolder;
        },
        configurable: true
    },

    /**
     * Название файла графики
     *
     * @readonly
     * @type {String}
     * @memberOf DKTools.Sprite.prototype
     */
    graphicName: {
        get: function() {
            return this._graphicName;
        },
        configurable: true
    },

});

// initialize methods

/**
 * Initializes a class object
 *
 * @override
 *
 * @param {Number | DKTools.Sprite | Bitmap | PIXI.Rectangle | Rectangle | Object} [object] - The X coordinate or Sprite or Bitmap or Rectangle or object with properties
 * @param {Number} [y] - The Y coordinate (if object is Number)
 * @param {Number} [width] - Width of the bitmap (if object is Number)
 * @param {Number} [height] - Height of the bitmap (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 * @param {Number} [object.width] - Width of the bitmap
 * @param {Number} [object.height] - Height of the bitmap
 * @param {Bitmap | Object} [object] - Bitmap or object with parameters
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Sprite.prototype.initialize
 * @see DKTools.Base.prototype.initialize
 * @see DKTools.Sprite.prototype.setupAll
 * @see DKTools.Sprite.prototype.setupSize
 * @see DKTools.Sprite.prototype.setupBitmap
 * @see DKTools.Sprite.prototype.updateBitmap
*/
DKTools.Sprite.prototype.initialize = function(object, y, width, height) {
	Sprite.prototype.initialize.call(this);
    DKTools.Base.prototype.initialize.call(this, object, y, width, height);
    if (object instanceof DKTools.Sprite && !object.isStarted() && !object.isFixedBitmap()) {
        this.setupSize(object._bitmapWidth, object._bitmapHeight);
    } else if (object instanceof Bitmap) {
        this.setupBitmap(object);
    }
    this.updateBitmap();
    DKTools.Sprite._counter++;
};

// _clear methods

/**
 * Clears all data
 *
 * @private
 * @override
 */
DKTools.Sprite.prototype._clearAll = function() {
    DKTools.Base.prototype._clearAll.call(this);
    this._clearTexts();
};

/**
 * Clears all texts
 *
 * @private
 */
DKTools.Sprite.prototype._clearTexts = function() {
    /**
     * @private
     * @readonly
     * @type {Object[]}
     */
    this._texts = [];
};

// standard methods

/**
 * Returns the standard font face
 *
 * @returns {String} Standard font face
 */
DKTools.Sprite.prototype.standardFontFace = function() {
    return 'GameFont';
};

/**
 * Returns the standard font size
 *
 * @returns {String} Standard font size
 */
DKTools.Sprite.prototype.standardFontSize = function() {
    return 28;
};

/**
 * Returns the standard font italic
 *
 * @returns {String} Standard font italic
 */
DKTools.Sprite.prototype.standardFontItalic = function() {
    return false;
};

/**
 * Returns the standard font
 *
 * @returns {Object} Standard font
 */
DKTools.Sprite.prototype.standardFont = function() {
    return {
        fontFace: this.standardFontFace(),
        fontSize: this.standardFontSize(),
        fontItalic: this.standardFontItalic()
    };
};

/**
 * Returns the standard text color
 *
 * @returns {String} Standard text color
 */
DKTools.Sprite.prototype.standardTextColor = function() {
    return '#ffffff';
};

/**
 * Returns the standard paint opacity
 *
 * @returns {Number} Standard paint opacity
 */
DKTools.Sprite.prototype.standardPaintOpacity = function() {
    return 255;
};

/**
 * Returns the standard fill color
 *
 * @returns {String | null} Standard fill color
 */
DKTools.Sprite.prototype.standardFillColor = function() {
    return null;
};

/**
 * Returns the standard text align
 *
 * @returns {String} Standard text align
 */
DKTools.Sprite.prototype.standardAlign = function() {
    return 'center';
};

/**
 * Returns the standard graphic folder
 *
 * @returns {String} Standard graphic folder
 */
DKTools.Sprite.prototype.standardGraphicFolder = function() {
    return 'img/system/';
};

/**
 * Returns the standard graphic name
 *
 * @returns {String} standard graphic name
 */
DKTools.Sprite.prototype.standardGraphicName = function() {
    return '';
};

/**
 * Returns the standard opacity
 *
 * @returns {Number} Standard opacity
 */
DKTools.Sprite.prototype.standardOpacity = function() {
	return 255;
};

/**
 * Returns the standard frame
 *
 * @returns {Rectangle} Standard frame
 */
DKTools.Sprite.prototype.standardFrame = function() {
    return new Rectangle(0, 0, this.width, this.height);
};

/**
 * Returns the standard anchor
 *
 * @returns {Point} Standard anchor
 */
DKTools.Sprite.prototype.standardAnchor = function() {
    return new Point(0, 0);
};

// setup methods

/**
 * Sets all parameters
 *
 * @override
 *
 * @param {Object} [object] - Parameters
 *
 * @param {Bitmap | Object} [object.bitmap] - Bitmap or object with parameters
 * @param {Object} [object.font] - Text font
 * @param {String} [object.textColor] - Text color
 * @param {Number} [object.paintOpacity] - Paint opacity
 * @param {String} [object.fillColor] - Fill color
 * @param {String} [object.align] - Text align
 * @param {Number} [object.opacity] - Opacity
 * @param {String} [object.graphicFolder] - Graphic folder
 * @param {String} [object.graphicName] - Graphic name
 * @param {PIXI.Rectangle | Rectangle | Object} [object.frame] - Rectangle or object with parameters
 * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.anchor] - Anchor of the sprite
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @param {String} [object.font.fontFace] - Font face
 * @param {Number} [object.font.fontSize] - Font size
 * @param {Boolean} [object.font.fontItalic] - Font italic
 *
 * @param {Number} [object.frame.x] - The X coordinate
 * @param {Number} [object.frame.y] - The Y coordinate
 * @param {Number} [object.frame.width] - Width of the frame
 * @param {Number} [object.frame.height] - Height of the frame
 *
 * @param {Number} [object.anchor.x] - The X coordinate
 * @param {Number] [object.anchor.y] - The Y coordinate
 *
 * @see DKTools.Base.prototype.setupAll
 * @see DKTools.Sprite.prototype.setupBitmap
 * @see DKTools.Sprite.prototype.setupFont
 * @see DKTools.Sprite.prototype.setupTextColor
 * @see DKTools.Sprite.prototype.setupPaintOpacity
 * @see DKTools.Sprite.prototype.setupFillColor
 * @see DKTools.Sprite.prototype.setupAlign
 * @see DKTools.Sprite.prototype.setupOpacity
 * @see DKTools.Sprite.prototype.setupGraphicFolder
 * @see DKTools.Sprite.prototype.setupGraphicName
 * @see DKTools.Sprite.prototype.setupFrame
 * @see DKTools.Sprite.prototype.setupAnchor
*/
DKTools.Sprite.prototype.setupAll = function(object) {
	object = object || {};
    DKTools.Base.prototype.setupAll.call(this, object);
    this.setupBitmap(object);
    this.setupFont(object.font);
    this.setupTextColor(object.textColor);
    this.setupPaintOpacity(object.paintOpacity);
    this.setupFillColor(object.fillColor);
    this.setupAlign(object.align);
    this.setupOpacity(object.opacity);
    this.setupGraphicFolder(object.graphicFolder);
    this.setupGraphicName(object.graphicName);
    this.setupFrame(object.frame);
    this.setupAnchor(object.anchor);
};

/**
 * Sets the width of the bitmap
 *
 * @param {Number} [width] - Width of the bitmap
 *
 * @see DKTools.Base.prototype._checkWidth
*/
DKTools.Sprite.prototype.setupWidth = function(width) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
	this._bitmapWidth = this._checkWidth(width);
};

/**
 * Sets the height of the bitmap
 *
 * @param {Number | String} [height] - Height of the bitmap or number of lines
 *
 * @see DKTools.Base.prototype.getLineHeight
 * @see DKTools.Base.prototype._checkHeight
*/
DKTools.Sprite.prototype.setupHeight = function(height) {
    if (_.isString(height)) {
        height = this.getLineHeight() * Number(height);
    }

    /**
     * @private
     * @readonly
     * @type {Number}
     */
	this._bitmapHeight = this._checkHeight(height);
};

/**
 * Sets the size of the bitmap
 *
 * @param {Number | Object} [object] - Width of the bitmap or object with parameters
 * @param {Number} [height] - Height of the bitmap (if object is Object)
 *
 * @param {Number} [object.width] - Width of the bitmap
 * @param {Number} [object.height] - Height of the bitmap
 *
 * @see DKTools.Sprite.prototype.setupWidth
 * @see DKTools.Sprite.prototype.setupHeight
 */
DKTools.Sprite.prototype.setupSize = function(object, height) {
    if (object instanceof Object) {
        return this.setupSize(object.width, object.height);
    }
    this.setupWidth(object);
    this.setupHeight(height);
};

/**
 * Sets the bitmap
 *
 * @param {Bitmap | Object} [object] - Bitmap or object with parameters
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see DKTools.Utils.Bitmap.load
 */
DKTools.Sprite.prototype.setupBitmap = function(object) {
    const bitmap = DKTools.Utils.Bitmap.load(object);
    if (bitmap) {
        this.bitmap = bitmap;
        this.bitmap.addLoadListener(function() {
            this.setupSize(bitmap);
        }.bind(this));
    } else {
        this.bitmap = null;
    }

    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._fixedBitmap = !!this.bitmap;
};

/**
 * Sets the font of the bitmap
 *
 * @param {Object} [font=this.standardFont()] - Text font
 *
 * @param {String} [object.font.fontFace] - Font face
 * @param {Number} [object.font.fontSize] - Font size
 * @param {Boolean} [object.font.fontItalic] - Font italic
 *
 * @see DKTools.Sprite.prototype.standardFont
 */
DKTools.Sprite.prototype.setupFont = function(font) {
    /**
     * @private
     * @readonly
     * @type {Object}
     */
    this._font = Object.assign(this.standardFont(), font);
};

/**
 * Sets the color of the text
 *
 * @param {String} [color=this.standardTextColor()] - Text color
 *
 * @see DKTools.Sprite.prototype.standardTextColor
 */
DKTools.Sprite.prototype.setupTextColor = function(color) {
    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._textColor = color || this.standardTextColor();
};

/**
 * Sets the paint opacity
 *
 * @param {Number} [opacity=this.standardPaintOpacity()] - Paint opacity
 *
 * @see DKTools.Sprite.prototype.standardPaintOpacity
 */
DKTools.Sprite.prototype.setupPaintOpacity = function(opacity) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._paintOpacity = (opacity == null ? this.standardPaintOpacity() : opacity);
};

/**
 * Sets the fill color
 *
 * @param {String} [color=this.standardFillColor()] - Fill color
 *
 * @see DKTools.Sprite.prototype.standardFillColor
 */
DKTools.Sprite.prototype.setupFillColor = function(color) {
    /**
     * @private
     * @readonly
     * @type {String | null}
     */
    this._fillColor = (color == null ? this.standardFillColor() : color);
};

/**
 * Sets the align
 *
 * @param {String} [align=this.standardAlign()] - Text align
 *
 * @see DKTools.Sprite.prototype.standardAlign
 */
DKTools.Sprite.prototype.setupAlign = function(align) {
    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._align = align || this.standardAlign();
};

/**
 * Sets the opacity of the sprite
 *
 * @param {Number} [opacity=this.standardOpacity()] - Opacity
 *
 * @see DKTools.Sprite.prototype.standardOpacity
 */
DKTools.Sprite.prototype.setupOpacity = function(opacity) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._opacity = (opacity == null ? this.standardOpacity() : opacity);
};

/**
 * Sets the graphic folder
 *
 * @param {String} [folder=this.standardGraphicFolder()] - Path to folder
 *
 * @see DKTools.Sprite.prototype.standardGraphicFolder
 */
DKTools.Sprite.prototype.setupGraphicFolder = function(folder) {
    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._graphicFolder = (folder == null ? this.standardGraphicFolder() : folder);
};

/**
 * Sets the graphic name
 *
 * @param {String} [graphicName=this.standardGraphicName()] - Graphic name
 *
 * @see DKTools.Sprite.prototype.standardGraphicName
 */
DKTools.Sprite.prototype.setupGraphicName = function(graphicName) {
    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._graphicName = (graphicName == null ? this.standardGraphicName() : graphicName);
};

/**
 * Sets the frame of the sprite
 *
 * @param {Number | Rectangle | Object} [object] - The X coordinate or Rectangle or object with parameters
 * @param {Number} [y] - The Y coordinate (if object is Number)
 * @param {Number} [width] - Width of the frame (if object is Number)
 * @param {Number} [height] - Height of the frame (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 * @param {Number} [object.width] - Width of the frame
 * @param {Number} [object.height] - Height of the frame
 *
 * @see DKTools.Utils.Rectangle.convertToRectangle
 * @see DKTools.Sprite.prototype.standardFrame
 * @see Sprite.prototype.setFrame
 * @see DKTools.Sprite.prototype.isFixedBitmap
 */
DKTools.Sprite.prototype.setupFrame = function(object, y, width, height) {
    const frame = DKTools.Utils.Rectangle.convertToRectangle(object, y, width, height);
    const newFrame = Object.assign(this.standardFrame(), frame);
    Sprite.prototype.setFrame.call(this, newFrame.x, newFrame.y, newFrame.width, newFrame.height);
    if (this.isFixedBitmap() && !this.bitmap.isReady()) {
        this._refreshFrame = true;
    }
};

/**
 * Sets the anchor of the sprite
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object=this.standardAnchor()] - The X coordinate or Point or object with parameters
 * @param {Number} [y=undefined] - The Y coordinate (is object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number] [object.y] - The Y coordinate
 *
 * @see DKTools.Utils.Point.convertToPoint
 * @see DKTools.Sprite.prototype.standardAnchor
 */
DKTools.Sprite.prototype.setupAnchor = function(object, y) {
    const anchor = DKTools.Utils.Point.convertToPoint(object, y);
    const newAnchor = Object.assign(this.standardAnchor(), anchor);

    /**
     * @type {PIXI.ObservablePoint}
     */
    this.anchor.copy(newAnchor);
};

/**
 * Sets the listener on load of graphic
 *
 * @param {Function} listener - Listener
 */
DKTools.Sprite.prototype.setupGraphicLoadListener = function(listener) {
    /**
     * @private
     * @readonly
     * @type {Function}
     */
    this._graphicLoadListener = listener || null;
};

// set methods

/**
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the sprite
 *
 * @param {Object} [object.font] - Text font
 * @param {String} [object.textColor] - Text color
 * @param {Number} [object.paintOpacity] - Paint opacity
 * @param {String} [object.fillColor] - Fill color
 * @param {String} [object.align] - Text align
 * @param {Number} [object.opacity] - Opacity
 * @param {String} [object.graphicFolder] - Graphic folder
 * @param {String} [object.graphicName] - Graphic name
 *
 * @param {String} [object.font.fontFace] - Название шрифта
 * @param {Number} [object.font.fontSize] - Размер шрифта
 * @param {Boolean} [object.font.fontItalic] - Курсив шрифта
 *
 * @see DKTools.Base.prototype.setAll
 * @see DKTools.Sprite.prototype.setFont
 * @see DKTools.Sprite.prototype.setTextColor
 * @see DKTools.Sprite.prototype.setPaintOpacity
 * @see DKTools.Sprite.prototype.setFillColor
 * @see DKTools.Sprite.prototype.setAlign
 * @see DKTools.Sprite.prototype.setOpacity
 * @see DKTools.Sprite.prototype.setGraphicFolder
 * @see DKTools.Sprite.prototype.setGraphicName
 * @see DKTools.Sprite.prototype.start
 * @see DKTools.Sprite.prototype.activate
 *
 * @returns {Number} Number of changed parameters
*/
DKTools.Sprite.prototype.setAll = function(object, blockStart, activate) {
	object = object || {};
    const block = true;
    let changed = DKTools.Base.prototype.setAll.call(this, object, block);
    if (this.setFont(object.font, block)) {
        changed++;
    }
    if (this.setTextColor(object.textColor, block)) {
        changed++;
    }
    if (this.setPaintOpacity(object.paintOpacity, block)) {
        changed++;
    }
    if (this.setFillColor(object.fillColor, block)) {
        changed++;
    }
    if (this.setAlign(object.align, block)) {
        changed++;
    }
    if (this.setOpacity(object.opacity, block)) {
        changed++;
    }
    if (this.setGraphicFolder(object.graphicFolder), block) {
        changed++;
    }
    if (this.setGraphicName(object.graphicName, block)) {
        changed++;
    }
    if (changed) {
        if (!blockStart) {
            this.start();
        }
        if (activate) {
            this.activate();
        }
    }
	return changed;
};

/**
 * Changes the width of the bitmap
 * Returns true if the change occurred
 *
 * @param {Number} [width] - Width of the bitmap
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Sprite.prototype.resize
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setWidth = function(width, blockStart) {
    return this.resize(width, this._bitmapHeight, blockStart);
};

/**
 * hanges the width of the bitmap
 * Returns true if the change occurred
 *
 * @param {Number} [height] - Height of the bitmap
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Sprite.prototype.resize
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setHeight = function(height, blockStart) {
    return this.resize(this._bitmapWidth, height, blockStart);
};

/**
 * Changes the bitmap
 * Returns true if the change occurred
 *
 * @param {Bitmap | Object} [object] - Bitmap or object with parameters
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see DKTools.Sprite.prototype.setupBitmap
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setBitmap = function(object) {
    if (this.bitmap == object) {
        return false;
    }
    this.setupBitmap(object);
    return true;
};

/**
 * Changes the font of the bitmap
 * Returns true if the change occurred
 *
 * @param {Object} [font] - Text font
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @param {String} [object.font.fontFace] - Font face
 * @param {Number} [object.font.fontSize] - Font size
 * @param {Boolean} [object.font.fontItalic] - Font italic
 *
 * @see DKTools.Sprite.prototype.standardFont
 * @see DKTools.Sprite.prototype.setupFont
 * @see DKTools.Sprite.prototype.start
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setFont = function(font, blockStart) {
    if (_.isEqual(this._font, Object.assign(this.standardFont(), font))) {
        return false;
    }
    this.setupFont(font);
    if (!blockStart) {
        this.start();
    }
    return true;
};

/**
 * Changes the text color
 * Returns true if the change occurred
 *
 * @param {String} [color] - Text color
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.prototype.setupTextColor
 * @see DKTools.Sprite.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setTextColor = function(color, blockRefreshAll) {
    if (this._textColor === color) {
        return false;
    }
    const lastColor = this._textColor;
    this.setupTextColor(color);
    if (this._textColor === lastColor) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

/**
 * Changes the paint opacity
 * Returns true if the change occurred
 *
 * @param {Number} [opacity] - Paint opacity
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.prototype.setupPaintOpacity
 * @see DKTools.Sprite.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setPaintOpacity = function(opacity, blockRefreshAll) {
    if (this._paintOpacity === opacity) {
        return false;
    }
    const lastOpacity = this._paintOpacity;
    this.setupPaintOpacity(opacity);
    if (this._paintOpacity === lastOpacity) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

/**
 * Changes the fill color
 * Returns true if the change occurred
 *
 * @param {String} [color] - Fill color
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.prototype.setupFillColor
 * @see DKTools.Sprite.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setFillColor = function(color, blockRefreshAll) {
    if (this._fillColor === color) {
        return false;
    }
    const lastColor = this._fillColor;
    this.setupFillColor(color);
    if (this._fillColor === lastColor) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

/**
 * Changes the align
 * Returns true if the change occurred
 *
 * @param {String} [align] - Text align
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.prototype.setupAlign
 * @see DKTools.Sprite.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setAlign = function(align, blockRefreshAll) {
    if (this._align === align) {
        return false;
    }
    const lastAlign = this._align;
    this.setupAlign(align);
    if (this._align === lastAlign) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

/**
 * Changes the opacity of the sprite
 * Returns true if the change occurred
 *
 * @param {Number} [opacity] - Opacity of the sprite
 * @param {Boolean} [blockUpdateOpacity=false] - Blocking the call of the "updateOpacity" function
 *
 * @see DKTools.Sprite.prototype.setupOpacity
 * @see DKTools.Sprite.prototype.updateOpacity
 *
 * @returns {Boolean} Change occurred
*/
DKTools.Sprite.prototype.setOpacity = function(opacity, blockUpdateOpacity) {
	if (this._opacity === opacity) {
        return false;
    }
    const lastOpacity = this._opacity;
	this.setupOpacity(opacity);
	if (this._opacity === lastOpacity) {
	    return false;
    }
	if (!blockUpdateOpacity) {
	    this.updateOpacity();
    }
	return true;
};

/**
 * Changes the graphic folder
 * Returns true if the change occurred
 *
 * @param {String} [graphicName] - Graphic folder
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Sprite.prototype.setupGraphicFolder
 * @see DKTools.Sprite.prototype.start
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setGraphicFolder = function(folder, blockStart) {
    if (this._graphicFolder === folder) {
        return false;
    }
    const lastFolder = this._graphicFolder;
    this.setupGraphicFolder(folder);
    if (this._graphicFolder === lastFolder) {
        return false;
    }
    if (!blockStart) {
        this.start();
    }
    return true;
};

/**
 * Changes the graphic name
 * Returns true if the change occurred
 *
 * @param {String} [graphicName] - Graphic name
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Sprite.prototype.setupGraphicName
 * @see DKTools.Sprite.prototype.start
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setGraphicName = function(graphicName, blockStart) {
    if (this._graphicName === graphicName) {
        return false;
    }
    const lastGraphic = this._graphicName;
    this.setupGraphicName(graphicName);
    if (this._graphicName === lastGraphic) {
        return false;
    }
    if (!blockStart) {
        this.start();
    }
    return true;
};

/**
 * Changes the frame of the sprite
 * Returns true if the change occurred
 *
 * @override
 *
 * @param {Number | Rectangle | Object} [object] - The X coordinate or Rectangle or object with parameters
 * @param {Number} [y] - The Y coordinate (if object is Number)
 * @param {Number} [width] - Width of the frame (if object is Number)
 * @param {Number} [height] - Height of the frame (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 * @param {Number} [object.width] - Width of the frame
 * @param {Number} [object.height] - Height of the frame
 *
 * @see DKTools.Utils.Rectangle.convertToRectangle
 * @see DKTools.Utils.Rectangle.equals
 * @see DKTools.Utils.Rectangle.clone
 * @see DKTools.Sprite.prototype.setupFrame
 * @see DKTools.Utils.Rectangle.equals
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setFrame = function(object, y, width, height) {
    if (object instanceof Object) {
        return this.setFrame(object.x, object.y, object.width, object.height);
    }
    // object - Number
    const newFrame = DKTools.Utils.Rectangle.convertToRectangle(object, y, width, height);
    if (DKTools.Utils.Rectangle.equals(this._frame, newFrame)) {
        return false;
    }
    const lastFrame = DKTools.Utils.Rectangle.clone(this._frame);
    this.setupFrame(newFrame);
    return !DKTools.Utils.Rectangle.equals(this._frame, lastFrame);
};

/**
 * Changes the anchor of the sprite
 * Returns true if the change occurred
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - The X coordinate or Point or object with parameters
 * @param {Number} [y=undefined] - The Y coordinate (is object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number] [object.y] - The Y coordinate
 *
 * @see DKTools.Utils.Point.convertToPoint
 * @see DKTools.Utils.Point.clone
 * @see DKTools.Sprite.prototype.setupAnchor
 * @see DKTools.Utils.Point.equals
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setAnchor = function(object, y) {
    if (object instanceof Object) {
        return this.setAnchor(object.x, object.y);
    }
    // object - Number
    const newAnchor = DKTools.Utils.Point.convertToPoint(object, y);
    if (DKTools.Utils.Point.equals(this.anchor, newAnchor)) {
        return false;
    }
    const lastAnchor = DKTools.Utils.Point.clone(this.anchor);
    this.setupAnchor(newAnchor);
    return !DKTools.Utils.Point.equals(this.anchor, lastAnchor);
};

// remove methods

/**
 * Removes the bitmap
 */
DKTools.Sprite.prototype.removeBitmap = function() {
    if (this.hasBitmap()) {
        this.setBitmap(null);
    }
};

/**
 * Removes the graphic name
 */
DKTools.Sprite.prototype.removeGraphicName = function() {
    if (this.hasGraphicName()) {
        this.setGraphicName(null);
    }
};

/**
 * Removes the text by ID
 *
 * @param {Number | String | *} id - ID of the text
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.prototype.getTextById
 * @see DKTools.Utils.Array.remove
 * @see DKTools.Sprite.prototype.refreshAll
 */
DKTools.Sprite.prototype.removeText = function(id, blockRefreshAll) {
    const textObj = this.getTextById(id);
    if (textObj) {
        DKTools.Utils.Array.remove(this._texts, textObj);
        if (!blockRefreshAll) {
            this.refreshAll();
        }
    }
};

// check methods

/**
 * Checks the size of the sprirte
 * Returns the number of changed parameters
 *
 * @override
 *
 * @see DKTools.Sprite.prototype.getMinWidth
 * @see DKTools.Sprite.prototype.getMinHeight
 * @see DKTools.Sprite.prototype.setupWidth
 * @see DKTools.Sprite.prototype.setupHeight
 *
 * @returns {Number} Number of changed parameters
 */
DKTools.Sprite.prototype.checkSize = function() {
    const minWidth = this.getMinWidth();
    const minHeight = this.getMinHeight();
    let changed = 0;
    if (this._bitmapWidth < minWidth) {
        this.setupWidth(minWidth);
        changed++;
    }
    if (this._bitmapHeight < minHeight) {
        this.setupHeight(minHeight);
        changed++;
    }
    return changed;
};

// create methods

/**
 * Creates all objects
 *
 * @override
 */
DKTools.Sprite.prototype.createAll = function() {
    DKTools.Base.prototype.createAll.call(this);
    this.createBitmap();
};

/**
 * Loads an image by graphic name (if exists) or create the bitmap (if the fixed bitmap does not exist)
 *
 * @see DKTools.Sprite.prototype.hasGraphicName
 * @see DKTools.Sprite.prototype._loadGraphic
 * @see DKTools.Sprite.prototype.isFixedBitmap
 * @see Bitmap
 */
DKTools.Sprite.prototype.createBitmap = function() {
    if (this.hasGraphicName()) {
        this._loadGraphic();
    } else if (!this.isFixedBitmap()) {
        this.bitmap = new Bitmap(this._bitmapWidth, this._bitmapHeight);
    }
};

// add methods

/**
 * Adds the text
 *
 * @param {String | Number} text - Text
 * @param {Object} options - Options
 * @param {Boolean} [refreshAll] - Refreshes all
 *
 * @param {String | Number} [options.id] - ID of the text
 * @param {String} [options.type='drawText'] - Type of the text ('drawText' or 'drawTextEx')
 *
 * @see DKTools.Sprite.prototype.drawTextEx
 * @see DKTools.Sprite.prototype.drawText
 */
DKTools.Sprite.prototype.addText = function(text, options, refreshAll) {
    text = String(text);
    options = options || {};

    this._texts.push({
        text: text,
        id: options.id,
        options: options,
        type: options.type || 'drawText'
    });

    if (refreshAll) {
        this.refreshAll();
    }
};

// redraw methods

/**
 * Redraws all
 *
 * @override
 */
DKTools.Sprite.prototype.redrawAll = function() {
    this.clear();
    this.drawAll();
    this.updateDrawAllEvents();
};

// get methods

/**
 * Returns an object of text by its ID
 *
 *
 * @param {Number | String | *} id - ID of object of text
 * @returns {Object} Object of text
 */
DKTools.Sprite.prototype.getTextById = function(id) {
    return _.find(this._texts, { id: id });
};

/**
 * Returns the current opacity of the sprite
 *
 * @returns {Number} Current opacity of the sprite
 */
DKTools.Sprite.prototype.getCurrentOpacity = function() {
    return this.alpha * 255;
};

// size methods

/**
 * Changes the width and height of the sprite
 * Returns true if the change occurred
 *
 * @param {Number} [width] - Width of the sprite
 * @param {Number} [height] - Height of the sprite
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Sprite.prototype.isResizable
 * @see DKTools.Sprite.prototype.getMinWidth
 * @see DKTools.Sprite.prototype.getMinHeight
 * @see DKTools.Sprite.prototype.setupSize
 * @see DKTools.Sprite.prototype.start
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.resize = function(width, height, blockStart) {
    if (!this.isResizable()) {
        return false;
    }
    width = (width == null ? this.getMinWidth() : width);
    height = (height == null ? this.getMinHeight() : height);
    if (_.isString(height)) {
        height = this.getLineHeight() * Number(height);
    }
    if (this._bitmapWidth === width && this._bitmapHeight === height) {
        return false;
    }
    const lastWidth = this._bitmapWidth;
    const lastHeight = this._bitmapHeight;
    this.setupSize(width, height);
    if (this._bitmapWidth === lastWidth  && this._bitmapHeight === lastHeight) {
        return false;
    }
    if (!blockStart) {
        this.start();
    }
    return true;
};

// can methods

/**
 * Returns true if the sprite can be updated and redrawn
 *
 * @override
 *
 * @see DKTools.Base.prototype.canRefreshAll
 * @see DKTools.Sprite.prototype.hasGraphicName
 * @see DKTools.Sprite.prototype.isFixedBitmap
 *
 * @returns {Boolean} Sprite can be updated and redrawn
 */
DKTools.Sprite.prototype.canRefreshAll = function() {
    return DKTools.Base.prototype.canRefreshAll.call(this) && !this.hasGraphicName() && !this.isFixedBitmap();
};

/**
 * Returns true if the sprite can clone the fixed bitmap
 *
 * @returns {Boolean} Sprite can clone the fixed bitmap
 */
DKTools.Sprite.prototype.canCloneFixedBitmap = function() {
    return true;
};

// effects methods

/**
 * Changes the tone of the bitmap
 * Returns true if bitmap exists
 *
 * @param {Number[]} tone - Tone (RGB)
 * @returns {Boolean} Bitmap exists
 */
DKTools.Sprite.prototype.adjustTone = function(tone) {
    if (!this.hasBitmap()) {
        return false;
    }
    if (DKTools.Utils.Array.isNumberArray(tone) && tone.length === 3) {
        Bitmap.prototype.adjustTone.apply(this.bitmap, tone);
        return true;
    }
    return false;
};

/**
 * Rotates the hue of the bitmap
 * Returns true if bitmap exists
 *
 * @param {Number} offset - Offset
 * @returns {Boolean} Bitmap exists
 */
DKTools.Sprite.prototype.rotateHue = function(offset) {
    if (!this.hasBitmap()) {
        return false;
    }
    this.bitmap.rotateHue(offset);
    return true;
};

/**
 * Imposes a blur effect on the bitmap
 * Returns true if bitmap exists
 *
 * @returns {Boolean} Bitmap exists
 */
DKTools.Sprite.prototype.blur = function() {
    if (!this.hasBitmap()) {
        return false;
    }
    this.bitmap.blur();
    return true;
};

// change methods

/**
 * Changes the font of the bitmap
 *
 * @param {Object} font - Text font
 *
 * @param {String} [object.font.fontFace] - Font face
 * @param {Number} [object.font.fontSize] - Font size
 * @param {Boolean} [object.font.fontItalic] - Font italic
 *
 * @see DKTools.Sprite.prototype.hasBitmap
 * @see DKTools.Sprite.prototype.updateFont
 */
DKTools.Sprite.prototype.changeFont = function(font) {
    if (this.hasBitmap()) {
        this.updateFont(font);
    }
};

/**
 * Changes the text color
 *
 * @param {String} textColor - Text color
 *
 * @see DKTools.Sprite.prototype.hasBitmap
 * @see DKTools.Sprite.prototype.updateTextColor
 */
DKTools.Sprite.prototype.changeTextColor = function(textColor) {
    if (this.hasBitmap()) {
        this.updateTextColor(textColor);
    }
};

/**
 * Changes the paint opacity
 *
 * @param {Number} paintOpacity - Paint opacity
 *
 * @see DKTools.Sprite.prototype.hasBitmap
 * @see DKTools.Sprite.prototype.updatePaintOpacity
 */
DKTools.Sprite.prototype.changePaintOpacity = function(paintOpacity) {
    if (this.hasBitmap()) {
        this.updatePaintOpacity(paintOpacity);
    }
};

// reset methods

/**
 * Resets all
 *
 * @see DKTools.Sprite.prototype.resetFont
 * @see DKTools.Sprite.prototype.resetTextColor
 * @see DKTools.Sprite.prototype.resetPaintOpacity
 */
DKTools.Sprite.prototype.resetAll = function() {
    this.resetFont();
    this.resetTextColor();
    this.resetPaintOpacity();
};

/**
 * Resets the font
 *
 * @see DKTools.Sprite.prototype.changeFont
 */
DKTools.Sprite.prototype.resetFont = function() {
    this.changeFont(this.font);
};

/**
 * Resets the text color
 *
 * @see DKTools.Sprite.prototype.changeTextColor
 */
DKTools.Sprite.prototype.resetTextColor = function() {
    this.changeTextColor(this.textColor);
};

/**
 * Resets the paint opacity
 *
 * @see DKTools.Sprite.prototype.changePaintOpacity
 */
DKTools.Sprite.prototype.resetPaintOpacity = function() {
    this.changePaintOpacity(this.paintOpacity);
};

// has methods

/**
 * Returns true if the sprite has the fill color
 *
 * @returns {Boolean} Sprite has the fill color
 */
DKTools.Sprite.prototype.hasFillColor = function() {
    return !!this._fillColor;
};

/**
 * Returns true if the sprite has the texts
 *
 * @returns {Boolean} Sprite has the texts
 */
DKTools.Sprite.prototype.hasTexts = function() {
    return this._texts.length > 0;
};

/**
 * Returns true if the sprite has the graphic folder
 *
 * @returns {Boolean} Sprite has the graphic folder
 */
DKTools.Sprite.prototype.hasGraphicFolder = function() {
    return !!this._graphicFolder;
};

/**
 * Returns true if the sprite has the graphic name
 *
 * @returns {Boolean} Sprite has the graphic name
 */
DKTools.Sprite.prototype.hasGraphicName = function() {
    return !!this._graphicName;
};

// is methods

/**
 * Returns true if the sprite is visible
 *
 * @override
 *
 * @see DKTools.Base.prototype.isVisible
 * @see DKTools.Sprite.prototype.hasBitmap
 *
 * @returns {Boolean} Sprite is visible
 */
DKTools.Sprite.prototype.isVisible = function() {
    return DKTools.Base.prototype.isVisible.call(this) && this.hasBitmap() && this.opacity > 0 && this.scale.x !== 0 && this.scale.y !== 0;
};

/**
 * Returns true if the sprite has fixed bitmap (setted using setupBitmap or setBitmap)
 *
 * @returns {Boolean} Sprite has fixed bitmap (setted using setupBitmap or setBitmap)
*/
DKTools.Sprite.prototype.isFixedBitmap = function() {
    return this._fixedBitmap;
};

/**
 * Returns true if you can change the size of the sprite
 *
 * @returns {Boolean} You can change the size of the sprite
 */
DKTools.Sprite.prototype.isResizable = function() {
    return !this.hasGraphicName() && !this.isFixedBitmap();
};

/**
 * Returns true if the coordinates is inside the sprite
 *
 * @override
 *
 * @param {Number} x - The X coordinate
 * @param {Number} y - The Y coordinate
 *
 * @returns {Boolean} Coordinates is inside the sprite
 */
DKTools.Sprite.prototype.isInside = function(x, y) {
    const localX = this.canvasToLocalX(x);
    const localY = this.canvasToLocalY(y);
    const width = this.width;
    const height = this.height;
    const anchor = this.anchor;
    const frame = new Rectangle(-width * anchor.x, -height * anchor.y, width, height);
    return frame.contains(localX, localY);
};

// draw methods

/**
 * Draws all
 *
 * @override
 */
DKTools.Sprite.prototype.drawAll = function() {
    this.updateFill();
    this.drawAllTexts();
};

/**
 * Draws all texts
 */
DKTools.Sprite.prototype.drawAllTexts = function() {
    _.forEach(this._texts, function(obj) {
        this[obj.type](obj.text, obj.options);
    }.bind(this));
};

/**
 * Draws the text
 * Returns true if bitmap exists
 *
 * @param {String} text - Text
 * @param {Object} [options={}] - Options for drawing
 *
 * @param {Object} [options.font=this.font] - Use custom font
 * @param {String} [options.textColor=this.textColor] - Use custom text color
 * @param {Number} [options.paintOpacity=this.paintOpacity] - Use custom paint opacity
 * @param {String} [options.align=this.align] - Align
 * @param {Boolean} [options.resetFont=false] - Use standard font after drawing the text
 * @param {String} [options.resetTextColor=false] - Use standard text color after drawing the text
 * @param {String} [options.resetPaintOpacity=false] - Use standard paint opacity after drawing the text
 * @param {Number} [options.x=0] - The X coordinate
 * @param {Number | String} [options.y=0] - The Y coordinate or line number (String)
 * @param {Number | String} [options.width=this.standardDrawingWidth()] - Width of the rectangle
 * @param {Number | String} [options.height=this.getLineHeight()] - Height of the rectangle or number of lines (String)
 * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [options.pos=undefined] - Position of the text (ignores other parameters of position: x, y, width, height)
 * @param {PIXI.Rectangle | Rectangle | Object} [options.rect=undefined] - Rectangle for drawing (ignores other parameters of position: x, y, width, height, pos)
 *
 * @param {Number} [options.pos.x=0] - The X coordinate
 * @param {Number | String} [options.pos.y=0] - The Y coordinate or line number (String)
 *
 * @param {Number} [options.rect.x=0] - The X coordinate
 * @param {Number | String} [options.rect.y=0] - The Y coordinate or line number (String)
 * @param {Number | String} [options.rect.width=this.standardDrawingWidth()] - Width of the rectangle
 * @param {Number | String} [options.rect.height=this.getLineHeight()] - Height of the rectangle or number of lines (String)
 *
 * @example
 * var sprite = new DKTools.Sprite(0, 0, 100, 36);
 * sprite.start();
 * sprite.drawText('Text', {
 * y: '1',
 * width: '50%',
 * height: '75%'
 * });
 *
 * @see DKTools.Base.prototype.hasBitmap
 * @see DKTools.Sprite.prototype.changeFont
 * @see DKTools.Sprite.prototype.changeTextColor
 * @see DKTools.Sprite.prototype.changePaintOpacity
 * @see DKTools.Base.prototype.standardDrawingWidth
 * @see DKTools.Base.prototype.standardDrawingHeight
 * @see DKTools.Base.prototype.getLineHeight
 * @see DKTools.Sprite.prototype.resetFont
 * @see DKTools.Sprite.prototype.resetTextColor
 * @see DKTools.Sprite.prototype.resetPaintOpacity
 * @see Bitmap.prototype.drawText
 *
 * @returns {Boolean} Bitmap exists
 */
DKTools.Sprite.prototype.drawText = function(text, options) {
    text = String(text);
    options = options || {};

    if (!this.hasBitmap() || !text) {
        return false;
    }

    if (options.font) {
        this.changeFont(options.font);
    }
    if (options.textColor) {
        this.changeTextColor(options.textColor);
    }
    if (options.paintOpacity) {
        this.changePaintOpacity(options.paintOpacity);
    }

    let x = options.x;
    let y = options.y;
    let width = options.width;
    let height = options.height;

    const pos = options.pos;
    if (pos instanceof Object) {
        x = pos.x;
        y = pos.y;
    }

    const rect = options.rect;
    if (rect instanceof Object) {
        x = rect.x;
        y = rect.y;
        width = rect.width;
        height = rect.height;
    }

    if (_.isString(y)) { // line number
        y = this.getLineHeight() * Number(y);
    }

    if (_.isString(width) && width.match(/(\d+)\s*%/)) { // percents
        width = this.standardDrawingWidth() * Number(RegExp.$1) / 100;
    }

    if (_.isString(height)) { // percents or number of lines
        if (height.match(/(\d+)\s*%/)) {
            height = this.standardDrawingHeight() * Number(RegExp.$1) / 100;
        } else {
            height = this.getLineHeight() * Number(height);
        }
    }

    x = x || 0;
    y = y || 0;
    width = width || this.standardDrawingWidth();
    height = height || this.getLineHeight();

    const align = options.align || this.align;

    this.bitmap.drawText(text, x, y, width, height, align);

    if (options.resetFont) {
        this.resetFont();
    }
    if (options.resetTextColor) {
        this.resetTextColor();
    }
    if (options.resetPaintOpacity) {
        this.resetPaintOpacity();
    }

    return true;
};

// load methods

/**
 * Loads a bitmap from a folder
 * Returns true if the bitmap of the sprite has been changed
 *
 * @param {String | Object} object - Path to file or object with parameters
 * @param {String} filename - Name of file
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see ImageManager.loadBitmap
 * @see DKTools.Sprite.prototype.setBitmap
 *
 * @returns {Boolean} Bitmap of the sprite has been changed
*/
DKTools.Sprite.prototype.loadBitmap = function(object, filename, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap(object.folder, object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String (folder)
    const bitmap = ImageManager.loadBitmap(object, filename, hue, smooth);
    if (this.setBitmap(bitmap)) {
		if (listener) {
            this.bitmap.addLoadListener(listener);
        }
		return true;
    }
    return false;
};

// reserve methods

/**
 * Loads a bitmap from a folder
 * Возвращает true, если Bitmap спрайта был изменен
 *
 * @param {String | Object} object - Путь к файлу или Объект типа {}
 * @param {String} filename - Название файла
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.folder - Путь к файлу
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @returns {Boolean} Bitmap спрайта был изменен
 */
DKTools.Sprite.prototype.reserveBitmap = function(object, filename, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap(object.folder, object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    const bitmap = ImageManager.reserveBitmap(object, filename, hue, smooth);
    if (this.setBitmap(bitmap)) {
        if (listener) {
            this.bitmap.addLoadListener(listener);
        }
        return true;
    }
    return false;
};

// graphic methods

/**
 * Loads the graphic (using graphic folder and graphic name)
 *
 * @private
 *
 * @see DKTools.Sprite.prototype.hasGraphicFolder
 * @see DKTools.Sprite.prototype.hasGraphicName
 * @see DKTools.Sprite.prototype.loadBitmap
 * @see DKTools.Sprite.prototype.hasBitmap
 * @see DKTools.Sprite.prototype.updateReadyEvents
 */
DKTools.Sprite.prototype._loadGraphic = function() {
    if (this.hasGraphicFolder() && this.hasGraphicName()) {
        const folder = this.graphicFolder;
        const filename = this.graphicName;
        const listener = this._graphicLoadListener;
        this.loadBitmap(folder, filename);
        if (listener && this.hasBitmap()) {
            this.bitmap.addLoadListener(listener);
        }
        this.updateReadyEvents();
    }
};

// event methods

/**
 * Updates the events with type: drawAll
 *
 * @see DKTools.Sprite.prototype.updateEventsContainer
 */
DKTools.Sprite.prototype.updateDrawAllEvents = function() {
    this.updateEventsContainer('drawAll');
};

// update methods

/**
 * Updates all
 *
 * @override
 */
DKTools.Sprite.prototype.updateAll = function() {
    DKTools.Base.prototype.updateAll.call(this);
    this.updateBitmap();
};

/**
 * Updates the bitmap
 */
DKTools.Sprite.prototype.updateBitmap = function() {
    if (this.hasBitmap()) {
        this.updateFont();
        this.updateTextColor();
        this.updatePaintOpacity();
    }
};

/**
 * Updates the font of the bitmap
 *
 * @param {Object} [font=this.font] - Text font
 *
 * @param {String} [font.fontFace] - Font face
 * @param {Number} [font.fontSize] - Font size
 * @param {Boolean} [font.fontItalic] - Font italic
 */
DKTools.Sprite.prototype.updateFont = function(font) {
    font = font || this.font;
    if (_.isString(font.fontFace)) {
        this.bitmap.fontFace = font.fontFace;
    }
    if (_.isFinite(font.fontSize)) {
        this.bitmap.fontSize = font.fontSize;
    }
    this.bitmap.fontItalic = !!font.fontItalic;
};

/**
 * Updates the text color
 *
 * @param {String} [textColor=this.textColor] - Text color
 */
DKTools.Sprite.prototype.updateTextColor = function(textColor) {
    this.bitmap.textColor = textColor || this.textColor;
};

/**
 * Updates the paint opacity
 *
 * @param {Number} [paintOpacity=this.paintOpacity] - Paint opacity
 */
DKTools.Sprite.prototype.updatePaintOpacity = function(paintOpacity) {
    if (_.isFinite(paintOpacity)) {
        this.bitmap.paintOpacity = paintOpacity;
    } else {
        this.bitmap.paintOpacity = this.paintOpacity;
    }
};

/**
 * Updates the fill of the sprite
 *
 * @see DKTools.Sprite.prototype.hasFillColor
 * @see DKTools.Sprite.prototype.fillAll
 */
DKTools.Sprite.prototype.updateFill = function() {
    if (this.hasFillColor()) {
        this.fillAll(this.fillColor);
    }
};

/**
 * Updates the opacity of the sprite
 *
 * @override
 *
 * @param {Number} [opacity=this.opacity] - Opacity of the sprite
 */
DKTools.Sprite.prototype.updateOpacity = function(opacity) {
    if (!_.isFinite(opacity)) {
        opacity = this.opacity;
    }
    this.alpha = opacity.clamp(0, 255) / 255;
};





//===========================================================================
// Elements based on DKTools.Sprite
//===========================================================================





//===========================================================================
// DKTools.Sprite.Button
//===========================================================================

DKTools.Sprite.Button.prototype = Object.create(DKTools.Sprite.prototype);
DKTools.Sprite.Button.prototype.constructor = DKTools.Sprite.Button;

// properties

Object.defineProperties(DKTools.Sprite.Button.prototype, {

    /**
     * Interval of long pressing
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Sprite.Button.prototype
     */
    longPressInterval: {
        get: function() {
            return this._longPressInterval;
        },
        configurable: true
    },

    /**
     * Pressed time
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Sprite.Button.prototype
     */
    pressedTime: {
        get: function() {
            return this._pressedTime;
        },
        configurable: true
    },

    /**
     * The X coordinate of press inside the sprite
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Sprite.Button.prototype
     */
    pressX : {
        get: function() {
            return this.canvasToLocalX(TouchInput.x);
        },
        configurable: true
    },

    /**
     * The Y coordinate of press inside the sprite
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Sprite.Button.prototype
     */
    pressY : {
        get: function() {
            return this.canvasToLocalY(TouchInput.y);
        },
        configurable: true
    }

});

// _clear methods

/**
 * Clears all data
 *
 * @private
 * @override
 */
DKTools.Sprite.Button.prototype._clearAll = function() {
    DKTools.Sprite.prototype._clearAll.call(this);
    this._clearPressedTime();
};

/**
 * Clears pressed time
 *
 * @private
 */
DKTools.Sprite.Button.prototype._clearPressedTime = function() {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._pressedTime = 0;
};

// _setup methods

/**
 * Sets the events
 *
 * @private
 * @override
 *
 * @see DKTools.Sprite.prototype._setupEvents
 * @see DKTools.Sprite.Button.prototype._setupUpdateEvent
 */
DKTools.Sprite.Button.prototype._setupEvents = function() {
    DKTools.Sprite.prototype._setupEvents.call(this);
    this._setupUpdateEvent();
};

/**
 * Sets the options
 *
 * @private
 * @override
 *
 * @see DKTools.Sprite.prototype._setupOptions
 * @see DKTools.Sprite.Button.prototype.enableOption
 */
DKTools.Sprite.Button.prototype._setupOptions = function() {
    DKTools.Sprite.prototype._setupOptions.call(this);
    this.enableOption('mouseEnter');
};

/**
 * Sets the update event
 *
 * @private
 *
 * @see DKTools.Sprite.Button.prototype.addEvent
 * @see DKTools.Sprite.Button.prototype.updateButtonState
 */
DKTools.Sprite.Button.prototype._setupUpdateEvent = function() {
    this.addEvent({
        type: 'update',
        onUpdate: this.updateButtonState.bind(this)
    });
};

// standard methods

/**
 * Returns the standard activity of the button
 *
 * @override
 * @returns {Boolean} Standard activity of the button
 */
DKTools.Sprite.Button.prototype.standardActive = function() {
    return false;
};

/**
 * Returns the standard interval of long pressing
 *
 * @returns {Number} Standard interval of long pressing
 */
DKTools.Sprite.Button.prototype.standardLongPressInterval = function() {
    return 18;
};

// setup methods

/**
 * Sets all parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 *
 * @param {Number} [object.longPressInterval] - Interval of long pressing
 *
 * @see DKTools.Sprite.prototype.setupAll
 * @see DKTools.Sprite.Button.prototype.setupLongPressInterval
 */
DKTools.Sprite.Button.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.Sprite.prototype.setupAll.call(this, object);
    this.setupLongPressInterval(object.longPressInterval);
};

/**
 * Sets the interval of long pressing
 *
 * @param {Number} [interval=this.standardLongPressInterval()] - Interval of long pressing
 *
 * @see DKTools.Sprite.Button.prototype.standardLongPressInterval
 */
DKTools.Sprite.Button.prototype.setupLongPressInterval = function(interval) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._longPressInterval = interval || this.standardLongPressInterval();
};

// set methods

/**
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the button
 *
 * @param {Number} [object.longPressInterval] - Interval of long pressing
 *
 * @see DKTools.Sprite.prototype.setAll
 * @see DKTools.Sprite.Button.prototype.setLongPressInterval
 *
 * @returns {Number} Number of changed parameters
 */
DKTools.Sprite.Button.prototype.setAll = function(object, blockStart, activate) {
    object = object || {};
    const block = true;
    let changed = DKTools.Sprite.prototype.setAll.call(this, object, block);
    if (this.setLongPressInterval(object.longPressInterval)) {
        changed++;
    }
    if (changed) {
        if (!blockStart) {
            this.start();
        }
        if (activate) {
            this.activate();
        }
    }
};

/**
 * Changes the interval of long pressing
 * Returns true if the change occurred
 *
 * @param {Number} [interval] - Interval of long pressing
 *
 * @see DKTools.Sprite.Button.prototype.setupLongPressInterval
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.Button.prototype.setLongPressInterval = function(interval) {
    if (this._longPressInterval === interval) {
        return false;
    }
    const lastInterval = this._longPressInterval;
    this.setupLongPressInterval(interval);
    return this._longPressInterval !== lastInterval;
};

// is methods

/**
 * Returns true if the touch inside the sprite
 *
 * @see DKTools.Sprite.Button.prototype.isInside
 *
 * @returns {Boolean} Touch inside the sprite
 */
DKTools.Sprite.Button.prototype.isTouched = function() {
    return this.isInside(TouchInput.x, TouchInput.y);
};

/**
 * Returns true if the button is pressed
 *
 * @see DKTools.Sprite.Button.prototype.isLongPressed
 *
 * @returns {Boolean} Button is pressed
 */
DKTools.Sprite.Button.prototype.isPressed = function() {
    return this._pressedTime > 0 && !this.isLongPressed();
};

/**
 * Returns true if the button is pressed longer than the long press interval
 *
 * @returns {Boolean} Button is pressed longer than the long press interval
 */
DKTools.Sprite.Button.prototype.isLongPressed = function() {
    return this._pressedTime >= this._longPressInterval;
};

// event methods

/**
 * Updates the events with type: mouse-click-button
 *
 * @param {String} button - Mouse button
 *
 * @see DKTools.Sprite.Button.prototype.updateEventsContainer
 */
DKTools.Sprite.Button.prototype.updateClickEvents = function(button) {
    this.updateEventsContainer('mouse-click-' + button);
};

/**
 * Updates the events with type: mouse-longPress-button
 *
 * @param {String} button - Mouse button
 *
 * @see DKTools.Sprite.Button.prototype.updateEventsContainer
 */
DKTools.Sprite.Button.prototype.updateLongPressEvents = function(button) {
    this.updateEventsContainer('mouse-longPress-' + button);
};

/**
 * Updates the events with type: touch
 *
 * @see DKTools.Sprite.Button.prototype.updateEventsContainer
 */
DKTools.Sprite.Button.prototype.updateTouchEvents = function() {
    this.updateEventsContainer('touch');
};

/**
 * Updates the events with type: longTouch
 *
 * @see DKTools.Sprite.Button.prototype.updateEventsContainer
 */
DKTools.Sprite.Button.prototype.updateLongTouchEvents = function() {
    this.updateEventsContainer('longTouch');
};

/**
 * Updates the events with type: pressedState
 *
 * @see DKTools.Sprite.Button.prototype.updateEventsContainer
 */
DKTools.Sprite.Button.prototype.updatePressedStateEvents = function() {
    this.updateEventsContainer('pressedState');
};

/**
 * Updates the events with type: normalState
 *
 * @see DKTools.Sprite.Button.prototype.updateEventsContainer
 */
DKTools.Sprite.Button.prototype.updateNormalStateEvents = function() {
    this.updateEventsContainer('normalState');
};

// process methods

/**
 * Processes all
 *
 * @override
 *
 * @see DKTools.Sprite.prototype.processAll
 * DKTools.Sprite.Button.prototype.isOptionDisabled
 * DKTools.Sprite.Button.prototype.processMousePress
 * DKTools.Sprite.Button.prototype.processTouch
 */
DKTools.Sprite.Button.prototype.processAll = function() {
    DKTools.Sprite.prototype.processAll.call(this);
    if (this.isOptionDisabled('mobileDevice')) {
        this.processMousePress();
    } else {
        this.processTouch();
    }
};

/**
 * Processes a mouse press
 *
 * @see DKTools.Sprite.Button.prototype.isVisibleAndActive
 * @see TouchInput.isMousePressed
 * @see DKTools.Sprite.Button.prototype.isMouseEntered
 * @see DKTools.Sprite.Button.prototype.isLongPressed
 * @see TouchInput.isLeftButtonPressed
 * @see TouchInput.isMiddleButtonPressed
 * @see TouchInput.isRightButtonPressed
 * @see DKTools.Sprite.Button.prototype.updateLongPressEvents
 * @see DKTools.Sprite.Button.prototype.isPressed
 * @see DKTools.Sprite.Button.prototype.updateClickEvents
 * @see DKTools.Sprite.Button.prototype._clearPressedTime
 */
DKTools.Sprite.Button.prototype.processMousePress = function() {
    if (this.isVisibleAndActive()) {
        if (TouchInput.isMousePressed() && this.isMouseEntered()) {
            this._pressedTime++;
            if (this.isLongPressed()) {
                let button;
                if (TouchInput.isLeftButtonPressed()) {
                    button = 'left';
                } else if (TouchInput.isMiddleButtonPressed()) {
                    button = 'middle';
                } else if (TouchInput.isRightButtonPressed()) {
                    button = 'right';
                }
                if (button) {
                    this.updateLongPressEvents(button);
                }
            }
        } else {
            if (this.isPressed()) {
                let button;
                if (TouchInput.isLeftButtonReleased()) {
                    button = 'left';
                } else if (TouchInput.isMiddleButtonReleased()) {
                    button = 'middle';
                } else if (TouchInput.isRightButtonReleased()) {
                    button = 'right';
                }
                if (button) {
                    this.updateClickEvents(button);
                    this._clearPressedTime();
                }
            } else {
                this._clearPressedTime();
            }
        }
    } else {
        this._clearPressedTime();
    }
};

/**
 * Processes a touches
 *
 * @see DKTools.Sprite.Button.prototype.isVisibleAndActive
 * @see TouchInput.isScreenPressed
 * @see DKTools.Sprite.Button.prototype.isTouched
 * @see DKTools.Sprite.Button.prototype.isLongPressed
 * @see DKTools.Sprite.Button.prototype.updateLongTouchEvents
 * @see DKTools.Sprite.Button.prototype.isPressed
 * @see DKTools.Sprite.Button.prototype.updateTouchEvents
 * @see DKTools.Sprite.Button.prototype._clearPressedTime
 */
DKTools.Sprite.Button.prototype.processTouch = function() {
    if (this.isVisibleAndActive()) {
        if (TouchInput.isScreenPressed() && this.isTouched()) {
            this._pressedTime++;
            if (this.isLongPressed()) {
                this.updateLongTouchEvents();
            }
        } else {
            if (this.isPressed()) {
                this.updateTouchEvents();
                this._clearPressedTime();
            } else {
                this._clearPressedTime();
            }
        }
    } else {
        this._clearPressedTime();
    }
};

// update methods

/**
 * Updates the button state
 *
 * @see DKTools.Sprite.Button.prototype.isPressed
 * @see DKTools.Sprite.Button.prototype.isLongPressed
 * @see DKTools.Sprite.Button.prototype.updatePressedStateEvents
 * @see DKTools.Sprite.Button.prototype.updateNormalStateEvents
 */
DKTools.Sprite.Button.prototype.updateButtonState = function() {
    if (this.isPressed() || this.isLongPressed()) {
        this.updatePressedStateEvents();
    } else {
        this.updateNormalStateEvents();
    }
};





//===========================================================================
// DKTools.Sprite.Cursor
//===========================================================================

DKTools.Sprite.Cursor.prototype = Object.create(DKTools.Sprite.prototype);
DKTools.Sprite.Cursor.prototype.constructor = DKTools.Sprite.Cursor;

// properties

Object.defineProperties(DKTools.Sprite.Cursor.prototype, {

    /**
     * Rectangle of the cursor
     *
     * @readonly
     * @type {Rectangle}
     * @memberOf DKTools.Sprite.Cursor.prototype
     */
    cursorRect: {
        get: function() {
            return this._cursorRect;
        },
        configurable: true
    },

    /**
     * Blink speed
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Sprite.Cursor.prototype
     */
    blinkSpeed: {
        get: function() {
            return this._blinkSpeed;
        },
        configurable: true
    }

});

// _clear methods

/**
 * Clears all data
 *
 * @private
 * @override
 */
DKTools.Sprite.Cursor.prototype._clearAll = function() {
    DKTools.Sprite.prototype._clearAll.call(this);
    this._clearAnimationCount();
};

/**
 * Clears the animation count
 *
 * @private
 */
DKTools.Sprite.Cursor.prototype._clearAnimationCount = function() {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._animationCount = 0;
};

// _create methods

/**
 * Creates all
 *
 * @private
 * @override
 *
 * @see DKTools.Sprite.prototype._createAll
 * @see DKTools.Sprite.Cursor.prototype._createWindowskin
 */
DKTools.Sprite.Cursor.prototype._createAll = function() {
    DKTools.Sprite.prototype._createAll.call(this);
    this._createWindowskin();
};

/**
 * Creates the window skin
 *
 * @private
 *
 * @see DKTools.Sprite.Cursor.prototype.standardWindowskin
 */
DKTools.Sprite.Cursor.prototype._createWindowskin = function() {
    const filename = this.standardWindowskin();
    this._windowskin = ImageManager.loadSystem(filename);
};

// _setup methods

/**
 * Sets the events
 *
 * @private
 * @override
 *
 * @see DKTools.Sprite.prototype._setupEvents
 * @see DKTools.Sprite.Cursor.prototype._setupUpdateEvent
 */
DKTools.Sprite.Cursor.prototype._setupEvents = function() {
    DKTools.Sprite.prototype._setupEvents.call(this);
    this._setupUpdateEvent();
};

/**
 * Sets the update event
 *
 * @private
 *
 * @see DKTools.Sprite.Cursor.prototype.addEvent
 */
DKTools.Sprite.Cursor.prototype._setupUpdateEvent = function() {
    this.addEvent({
        type: 'update',
        onUpdate: this.updateCursorAnimation.bind(this)
    });
};

// standard methods

/**
 * Returns the standard rectangle of the cursor
 *
 * @returns {Rectangle} Standard rectangle of the cursor
 */
DKTools.Sprite.Cursor.prototype.standardCursorRect = function() {
    return new Rectangle(0, 0, 0, 0);
};

/**
 * Returns the standard blink speed
 *
 * @returns {Number} Standard blink speed
 */
DKTools.Sprite.Cursor.prototype.standardBlinkSpeed = function() {
    return 8;
};

// setup methods

/**
 * Sets all parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 *
 * @param {PIXI.Rectangle | Rectangle | Object} [object.cursorRect] - Rectangle of the cursor
 * @param {Number} [object.blinkSpeed] - Blink speed
 *
 * @param {Number} [object.cursorRect.x] - The X coordinate
 * @param {Number} [object.cursorRect.y] - The Y coordinate
 * @param {Number} [object.cursorRect.width] - Width of the rectangle
 * @param {Number} [object.cursorRect.height] - Height of the rectangle
 *
 * @see DKTools.Sprite.prototype.setupAll
 * @see DKTools.Sprite.Cursor.prototype.setupCursorRect
 * @see DKTools.Sprite.Cursor.prototype.setupBlinkSpeed
 */
DKTools.Sprite.Cursor.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.Sprite.prototype.setupAll.call(this, object);
    this.setupCursorRect(object.cursorRect);
    this.setupBlinkSpeed(object.blinkSpeed);
}

/**
 * Sets the rectangle of the cursor
 *
 * @param {Number | PIXI.Rectangle | Rectangle | Object} [object=this.standardCursorRect()] - The X coordinate or Rectangle or object with parameters
 * @param {Number} [y] - The Y coordinate (if object is Number)
 * @param {Number} [width] - Width of the rectangle (if object is Number)
 * @param {Number} [height] - Height of the rectangle (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 * @param {Number} [object.width] - Width of the rectangle
 * @param {Number} [object.height] - Height of the rectangle
 *
 * @see DKTools.Utils.Rectangle.convertToRectangle
 * @see DKTools.Sprite.Cursor.prototype.standardCursorRect
 */
DKTools.Sprite.Cursor.prototype.setupCursorRect = function(object, y, width, height) {
    const rect = DKTools.Utils.Rectangle.convertToRectangle(object, y, width, height);

    /**
     * @private
     * @readonly
     * @type {Rectangle}
     */
    this._cursorRect = Object.assign(this.standardCursorRect(), rect);
};

/**
 * Sets the blink speed
 *
 * @param {Number} [blinkSpeed=this.standardBlinkSpeed()] - Blink speed
 *
 * @see DKTools.Sprite.Cursor.prototype.standardBlinkSpeed
 */
DKTools.Sprite.Cursor.prototype.setupBlinkSpeed = function(blinkSpeed) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._blinkSpeed = blinkSpeed || this.standardBlinkSpeed();
};

// set methods

/**
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the cursor
 *
 * @param {PIXI.Rectangle | Rectangle | Object} [object.cursorRect] - Rectangle of the cursor
 * @param {Number} [object.blinkSpeed] - Blink speed
 *
 * @param {Number} [object.cursorRect.x] - The X coordinate
 * @param {Number} [object.cursorRect.y] - The Y coordinate
 * @param {Number} [object.cursorRect.width] - Width of the rectangle
 * @param {Number} [object.cursorRect.height] - Height of the rectangle
 *
 * @see DKTools.Sprite.prototype.setAll
 * @see DKTools.Sprite.Cursor.prototype.setCursorRect
 * @see DKTools.Sprite.Cursor.prototype.setBlinkSpeed
 * @see DKTools.Sprite.Cursor.prototype.start
 * @see DKTools.Sprite.Cursor.prototype.activate
 *
 * @returns {Number} Number of changed parameters
 */
DKTools.Sprite.Cursor.prototype.setAll = function(object, blockStart, activate) {
    object = object || {};
    const block = true;
    let changed = DKTools.Sprite.prototype.setAll.call(this, object, block);
    if (this.setCursorRect(object.cursorRect)) {
        changed++;
    }
    if (this.setBlinkSpeed(object.blinkSpeed)) {
        changed++;
    }
    if (changed) {
        if (!blockStart) {
            this.start();
        }
        if (activate) {
            this.activate();
        }
    }
    return changed;
};

/**
 * Changes the rectangle of the cursor
 * Returns true if the change occurred
 *
 * @param {Number | PIXI.Rectangle | Rectangle | Object} [object] - The X coordinate or Rectangle or object with parameters
 * @param {Number} [y] - The Y coordinate (if object is Number)
 * @param {Number} [width] - Width of the rectangle (if object is Number)
 * @param {Number} [height] - Height of the rectangle (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 * @param {Number} [object.width] - Width of the rectangle
 * @param {Number} [object.height] - Height of the rectangle
 *
 * @see DKTools.Utils.Rectangle.convertToRectangle
 * @see DKTools.Utils.Rectangle.equals
 * @see DKTools.Sprite.Cursor.prototype.setupCursorRect
 * @see DKTools.Sprite.Cursor.prototype.refreshCursor
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.Cursor.prototype.setCursorRect = function(object, y, width, height) {
    if (object instanceof Object) {
        return this.setCursorRect(object.x, object.y, object.width, object.height);
    }
    const newRect = DKTools.Utils.Rectangle.convertToRectangle(object, y, width, height);
    if (DKTools.Utils.Rectangle.equals(this._cursorRect, newRect)) {
        return false;
    }
    const lastRect = DKTools.Utils.Rectangle.clone(this._cursorRect);
    this.setupCursorRect(newRect);
    if (!DKTools.Utils.Rectangle.equals(this._cursorRect, lastRect)) {
        this.refreshCursor();
        return true;
    }
    return false;
};

/**
 * Changes the blink speed
 * Returns true if the change occurred
 *
 * @param {Number} [blinkSpeed] - Blink speed
 *
 * @see DKTools.Sprite.Cursor.prototype.setupBlinkSpeed
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.Cursor.prototype.setBlinkSpeed = function(blinkSpeed) {
    if (this._blinkSpeed === blinkSpeed) {
        return false;
    }
    const lastSpeed = this._blinkSpeed;
    this.setupBlinkSpeed(blinkSpeed);
    return this._blinkSpeed !== lastSpeed;
};

// refresh methods

/**
 * Updates and redraws all
 *
 * @override
 *
 * @see DKTools.Sprite.prototype.refreshAll
 * DKTools.Sprite.Cursor.prototype.refreshCursor
 */
DKTools.Sprite.Cursor.prototype.refreshAll = function() {
    DKTools.Sprite.prototype.refreshAll.call(this);
    this.refreshCursor();
};

/**
 * Updates the cursor
 */
DKTools.Sprite.Cursor.prototype.refreshCursor = function() {
    const x = this._cursorRect.x;
    const y = this._cursorRect.y;
    const w = this._cursorRect.width;
    const h = this._cursorRect.height;
    const m = 4;
    const ox = 0;
    const oy = 0;
    const parent = this.parent;
    const w2 = Math.min(w, parent.realWidth - x);
    const h2 = Math.min(h, parent.realHeight - y);

    this.move(x, y);

    if (w > 0 && h > 0) {
        const skin = this._windowskin;
        const bitmap = new Bitmap(w2, h2);
        const p = 96;
        const q = 48;
        bitmap.blt(skin, p+m, p+m, q-m*2, q-m*2, ox+m, oy+m, w-m*2, h-m*2);
        bitmap.blt(skin, p+m, p+0, q-m*2, m, ox+m, oy+0, w-m*2, m);
        bitmap.blt(skin, p+m, p+q-m, q-m*2, m, ox+m, oy+h-m, w-m*2, m);
        bitmap.blt(skin, p+0, p+m, m, q-m*2, ox+0, oy+m, m, h-m*2);
        bitmap.blt(skin, p+q-m, p+m, m, q-m*2, ox+w-m, oy+m, m, h-m*2);
        bitmap.blt(skin, p+0, p+0, m, m, ox+0, oy+0, m, m);
        bitmap.blt(skin, p+q-m, p+0, m, m, ox+w-m, oy+0, m, m);
        bitmap.blt(skin, p+0, p+q-m, m, m, ox+0, oy+h-m, m, m);
        bitmap.blt(skin, p+q-m, p+q-m, m, m, ox+w-m, oy+h-m, m, m);
        this.setupBitmap(bitmap);
    }
};

// update methods

/**
 * Updates the cursor animation
 *
 * @see DKTools.Sprite.Cursor.prototype.setOpacity
 */
DKTools.Sprite.Cursor.prototype.updateCursorAnimation = function() {
    const blinkCount = this._animationCount % 40;
    let parentOpacity = this.parent.getCurrentOpacity();
    if (this.parent.isVisibleAndActive()) {
        this._animationCount++;
        if (blinkCount < 20) {
            parentOpacity -= blinkCount * this._blinkSpeed;
        } else {
            parentOpacity -= (40 - blinkCount) * this._blinkSpeed;
        }
    }
    this.setOpacity(parentOpacity);
};





//===========================================================================
// DKTools.Sprite.Arrow
//===========================================================================

DKTools.Sprite.Arrow.prototype = Object.create(DKTools.Sprite.Button.prototype);
DKTools.Sprite.Arrow.prototype.constructor = DKTools.Sprite.Arrow;

// properties

Object.defineProperties(DKTools.Sprite.Arrow.prototype, {

    /**
     * Type of the arrow
     *
     * @readonly
     * @type {String}
     * @memberOf DKTools.Sprite.Arrow.prototype
     */
    arrowType: {
        get: function() {
            return this._arrowType;
        },
        configurable: true
    }

});

// standard methods

/**
 * Returns the standard visibility of the arrow
 *
 * @override
 * @returns {Boolean} Standard visibility of the arrow
 */
DKTools.Sprite.Arrow.prototype.standardVisible = function() {
    return false;
};

/**
 * Returns the standard graphic name
 *
 * @override
 *
 * @see DKTools.Base.prototype.standardWindowskin
 *
 * @returns {String} Standard graphic name
 */
DKTools.Sprite.Arrow.prototype.standardGraphicName = function() {
    return this.standardWindowskin();
};

/**
 * Returns the standard anchor
 *
 * @override
 * @returns {Point} Standard anchor
 */
DKTools.Sprite.Arrow.prototype.standardAnchor = function() {
    return new Point(0.5, 0.5);
};

/**
 * Returns the standard type of the arrow
 *
 * @returns {null} Standard type of the arrow
 */
DKTools.Sprite.Arrow.prototype.standardArrowType = function() {
    return null;
};

// setup methods

/**
 * Sets all parameters
 *
 * @override
 *
 * @param {Object} [object] - Parameters
 *
 * @param {String} [object.arrowType] - Type of the arrow
 *
 * @see DKTools.Sprite.Button.prototype.setupAll
 * @see DKTools.Sprite.Arrow.prototype.setupArrowType
 */
DKTools.Sprite.Arrow.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.Sprite.Button.prototype.setupAll.call(this, object);
    this.setupArrowType(object.arrowType);
};

/**
 * Sets the type of the arrow
 *
 * @param {String} [type] - Type of the arrow
 */
DKTools.Sprite.Arrow.prototype.setupArrowType = function(type) {
    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._arrowType = type || this.standardArrowType();
};

// set methods

/**
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @override
 *
 * @param {Object} [object] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the arrow
 *
 * @param {String} [object.arrowType] - Type of the arrow
 *
 * @see DKTools.Sprite.Button.prototype.setAll
 * @see DKTools.Sprite.Arrow.prototype.setArrowType
 *
 * @returns {Number} Number of changed parameters
 */
DKTools.Sprite.Arrow.prototype.setAll = function(object, blockStart, activate) {
    object = object || {};
    const block = true;
    let changed = DKTools.Sprite.Button.prototype.setAll.call(this, object, block);
    if (this.setArrowType(object.arrowType, block)) {
        changed++;
    }
    if (changed) {
        if (!blockStart) {
            this.start();
        }
        if (activate) {
            this.activate();
        }
    }
    return changed;
};

/**
 * Changes the type of the arrow
 * Returns true if the change occurred
 *
 * @param {String} [type] - Type of the arrow
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.Arrow.prototype.setArrowType = function(type, blockRefreshAll) {
    if (this._arrowType === type) {
        return false;
    }
    const lastType = this._arrowType;
    this.setupArrowType(type);
    if (this._arrowType === lastType) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

// refresh methods

/**
 *  Updates and redraws all
 *
 * @override
 */
DKTools.Sprite.Arrow.prototype.refreshAll = function() {
    DKTools.Sprite.Button.prototype.refreshAll.call(this);
    this.refreshArrow();
};

/**
 *  Updates and redraws the arrow
 */
DKTools.Sprite.Arrow.prototype.refreshArrow = function() {
    const p = 24;
    const q = p / 2;
    const sx = 96 + p;
    const sy = p;
    switch (this._arrowType) {
        case 'up':
            this.setFrame(sx + q, sy, p, q);
            break;
        case 'down':
            this.setFrame(sx + q, sy + q + p, p, q);
            break;
        case 'left':
            this.setFrame(sx, sy + q, q, p);
            break;
        case 'right':
            this.setFrame(sx + q + p, sy + q, q, p);
            break;
        default:
            throw new Error('Arrow does not have an arrowType!');
            break;
    }

};






//===========================================================================
// DKTools.Sprite.Selectable
//===========================================================================

DKTools.Sprite.Selectable.prototype = Object.create(DKTools.Sprite.Button.prototype);
DKTools.Sprite.Selectable.prototype.constructor = DKTools.Sprite.Selectable;

// properties

Object.defineProperties(DKTools.Sprite.Selectable.prototype, {

    /**
     * @readonly
     * @type {DKTools.Sprite.Cursor}
     * @memberOf DKTools.Sprite.Selectable.prototype
     */
    cursorSprite: {
        get: function() {
            return this._cursorSprite;
        },
        configurable: true
    },

    /**
     * Index
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Sprite.Selectable.prototype
     */
    index: {
        get: function() {
            return this._index;
        },
        configurable: true
    },

    /**
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Sprite.Selectable.prototype
     */
    maxCols: {
        get: function() {
            return this._maxCols;
        },
        configurable: true
    },

    /**
     * @readonly
     * @type {Boolean}
     * @memberOf DKTools.Sprite.Selectable.prototype
     */
    cursorFixed: {
        get: function() {
            return this._cursorFixed;
        },
        configurable: true
    },

    /**
     * @readonly
     * @type {Boolean}
     * @memberOf DKTools.Sprite.Selectable.prototype
     */
    cursorAll: {
        get: function() {
            return this._cursorAll;
        },
        configurable: true
    },

    /**
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Sprite.Selectable.prototype
     */
    horizontalSpacing: {
        get: function() {
            return this._horizontalSpacing;
        },
        configurable: true
    },

    /**
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Sprite.Selectable.prototype
     */
    verticalSpacing: {
        get: function() {
            return this._verticalSpacing;
        },
        configurable: true
    },

    /**
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Sprite.Selectable.prototype
     */
    textPadding: {
        get: function() {
            return this._textPadding;
        },
        configurable: true
    },

    /**
     * @readonly
     * @type {Object[]}
     * @memberOf DKTools.Sprite.Selectable.prototype
     */
    items: {
        get: function() {
            return this._items;
        },
        configurable: true
    },

    /**
     * @readonly
     * @type {Function | null}
     * @memberOf DKTools.Sprite.Selectable.prototype
     */
    drawItemHandler: {
        get: function() {
            return this._drawItemHandler;
        },
        configurable: true
    },

    /**
     * Ширина пункта
     *
     * @readonly
     * @type {Function | Number}
     * @memberOf DKTools.Sprite.Selectable.prototype
     */
    itemWidth: {
        get: function() {
            return this._itemWidth;
        },
        configurable: true
    },

    /**
     * Высота пункта
     *
     * @readonly
     * @type {Function | Number}
     * @memberOf DKTools.Sprite.Selectable.prototype
     */
    itemHeight: {
        get: function() {
            return this._itemHeight;
        },
        configurable: true
    },

    /**
     * Шрифт текста пункта
     *
     * @readonly
     * @type {Function | Object}
     * @memberOf DKTools.Sprite.Selectable.prototype
     */
    itemFont: {
        get: function() {
            return this._itemFont;
        },
        configurable: true
    },

    /**
     * @readonly
     * @type {Function | String}
     * @memberOf DKTools.Sprite.Selectable.prototype
     */
    itemTextColor: {
        get: function() {
            return this._itemTextColor;
        },
        configurable: true
    },

    /**
     * @readonly
     * @type {Function | Number}
     * @memberOf DKTools.Sprite.Selectable.prototype
     */
    itemPaintOpacity: {
        get: function() {
            return this._itemPaintOpacity;
        },
        configurable: true
    },

    /**
     * @readonly
     * @type {Function | String}
     * @memberOf DKTools.Sprite.Selectable.prototype
     */
    itemAlign: {
        get: function() {
            return this._itemAlign;
        },
        configurable: true
    }

});

// _clear methods

/**
 * Clears all data
 *
 * @private
 * @override
 */
DKTools.Sprite.Selectable.prototype._clearAll = function() {
    DKTools.Sprite.Button.prototype._clearAll.call(this);
    this._clearItems();
    this._clearHandlers();
    this._clearTopRow();
    this._clearTopCol();
};

/**
 * Clears items
 *
 * @private
 */
DKTools.Sprite.Selectable.prototype._clearItems = function() {
    /**
     * @private
     * @readonly
     * @type {Object[]}
     */
    this._items = [];
};

/**
 * Clears the selection handlers
 *
 * @private
 */
DKTools.Sprite.Selectable.prototype._clearHandlers = function() {
    /**
     * @readonly
     * @private
     * @type {Object}
     */
    this._handlers = {};
};

/**
 * Clears the top row
 *
 * @private
 */
DKTools.Sprite.Selectable.prototype._clearTopRow = function() {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._topRow = 0;
};

/**
 * Clears the top col
 *
 * @private
 */
DKTools.Sprite.Selectable.prototype._clearTopCol = function() {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._topCol = 0;
};

// _create methods

/**
 * Creates all
 *
 * @private
 * @override
 */
DKTools.Sprite.Selectable.prototype._createAll = function() {
    DKTools.Sprite.Button.prototype._createAll.call(this);
    this._createCursorSprite();
};

/**
 * Creates sprite of the cursor
 *
 * @private
 */
DKTools.Sprite.Selectable.prototype._createCursorSprite = function() {
    /**
     * @private
     * @readonly
     * @type {DKTools.Sprite.Cursor}
     */
    this._cursorSprite = new DKTools.Sprite.Cursor();
};

// _setup methods

/**
 * Sets the events
 *
 * @private
 * @override
 */
DKTools.Sprite.Selectable.prototype._setupEvents = function() {
    DKTools.Sprite.Button.prototype._setupEvents.call(this);
    this._setupPressEvent();
    this._setupLongPressEvent();
    this._setupMouseHoverEvents();
    this._setupWheelScrollEvents();
};

/**
 * Устанавливает таймер нажатия (типа mouse-click-left)
 *
 * @private
 */
DKTools.Sprite.Selectable.prototype._setupPressEvent = function() {
    this.addEvent({
        type: 'mouse-click-left',
        onUpdate: this._onTouch.bind(this, true)
    });
};

/**
 * Устанавливает таймер длительного нажатия (типа mouse-longPress-left)
 *
 * @private
 */
DKTools.Sprite.Selectable.prototype._setupLongPressEvent = function() {
    this.addEvent({
        type: 'mouse-longPress-left',
        onUpdate: this._onTouch.bind(this, false)
    });
};

/**
 * Устанавливает таймеры наведения мыши (типа mouse-enter и mouse-move)
 *
 * @private
 */
DKTools.Sprite.Selectable.prototype._setupMouseHoverEvents = function() {
    this.addEvent({
        type: 'mouse-enter',
        onUpdate: this.processMouseHover.bind(this)
    });
    this.addEvent({
        type: 'mouse-move',
        onUpdate: this.processMouseHover.bind(this)
    });
};

/**
 * Устанавливает таймеры прокручивания мыши (типа wheelY-inside и wheel-outside)
 *
 * @private
 */
DKTools.Sprite.Selectable.prototype._setupWheelScrollEvents = function() {
    this.addEvent({
        type: 'wheelY-inside',
        onUpdate: this.processWheelScroll.bind(this)
    });
    this.addEvent({
        type: 'wheelY-outside',
        onUpdate: this.processWheelScroll.bind(this)
    });
};

// _add methods

/**
 * Adds children objects to processing
 *
 * @private
 * @override
 */
DKTools.Sprite.Selectable.prototype._addAllChildren = function() {
    DKTools.Sprite.Button.prototype._addAllChildren.call(this);
    this._addCursorSprite();
};

/**
 * Adds sprite of the cursor to processing
 *
 * @private
 */
DKTools.Sprite.Selectable.prototype._addCursorSprite = function() {
    this.addChild(this._cursorSprite);
};

// standard methods

/**
 * Returns the standard index
 *
 * @returns {Number} Standard index
 */
DKTools.Sprite.Selectable.prototype.standardIndex = function() {
    return 0;
};

/**
 * Returns the standard number of columns
 *
 * @returns {Number} Standard number of columns
 */
DKTools.Sprite.Selectable.prototype.standardMaxCols = function() {
    return 1;
};

/**
 * Returns the standard fixed cursor
 *
 * @returns {Boolean} Standard fixed cursor
 */
DKTools.Sprite.Selectable.prototype.standardCursorFixed = function() {
    return false;
};

/**
 *
 *
 * @returns {Boolean}
 */
DKTools.Sprite.Selectable.prototype.standardCursorAll = function() {
    return false;
};

/**
 * @returns {Boolean}
 */
DKTools.Sprite.Selectable.prototype.standardFixedHorizontal = function() {
    return false;
};

/**
 * Returns the standard horizontal spacing
 *
 * @returns {Number} Standard horizontal spacing
 */
DKTools.Sprite.Selectable.prototype.standardHorizontalSpacing = function() {
    return 0;12;
};

/**
 * Returns the standard vertical spacing
 *
 * @returns {Number} Standard vertical spacing
 */
DKTools.Sprite.Selectable.prototype.standardVerticalSpacing = function() {
    return 0;
};

/**
 * Returns the standard text padding
 *
 * @returns {Number} Standard text padding
 */
DKTools.Sprite.Selectable.prototype.standardTextPadding = function() {
    return 6;
};

/**
 * Returns the standard list of the items
 *
 * @returns {Array} Standard list of the items
 */
DKTools.Sprite.Selectable.prototype.standardItems = function() {
    return [];
};

/**
 * Returns the standard handler of draw of the item
 *
 * @returns {Function} Standard handler of draw of the item
 */
DKTools.Sprite.Selectable.prototype.standardDrawItemHandler = function() {
    return function(index) {
        const name = this.getItemName(index);
        const font = this.getItemFontByIndex(index);
        const textColor = this.getItemTextColorByIndex(index);
        const paintOpacity = this.getItemPaintOpacityByIndex(index);
        const align = this.getItemAlignByIndex(index);
        const rect = this.getItemRectForTextByIndex(index);
        this.drawText(name, {
            font: font,
            textColor: textColor,
            paintOpacity: paintOpacity,
            align: align,
            rect: rect,
            resetFont: true,
            resetTextColor: true,
            resetPaintOpacity: true
        });
    }.bind(this);
};

/**
 * Returns the standard item width
 *
 * @returns {Function} Standard item width
 */
DKTools.Sprite.Selectable.prototype.standardItemWidth = function() {
    return function() {
        const spacing = this._horizontalSpacing;
        return Math.floor((this.realWidth + spacing) / this.getMaxCols() - spacing);
    }.bind(this);
};

/**
 * Returns the standard item height
 *
 * @returns {Function} Standard item height
 */
DKTools.Sprite.Selectable.prototype.standardItemHeight = function() {
    return this.getLineHeight();
};

/**
 * Returns the standard item rect
 *
 * @returns {Function} Standard item rect
 */
DKTools.Sprite.Selectable.prototype.standardItemRect = function() {
    return function(index) {
        const rect = new Rectangle();
        const maxCols = this.getMaxCols();
        rect.width = this.getItemWidth();
        rect.height = this.getItemHeight();
        if (this.isHorizontal()) {
            rect.x = (index - this.getTopCol()) * (rect.width + this._horizontalSpacing);
            rect.y = 0;
        } else {
            rect.x = index % maxCols * (rect.width + this._horizontalSpacing);
            rect.y = (Math.floor(index / maxCols) - this.getTopRow()) * (rect.height + this._verticalSpacing);
        }
        return rect;
    }.bind(this);
};

/**
 * Returns the standard item font
 *
 * @returns {Object} Standard item font
 */
DKTools.Sprite.Selectable.prototype.standardItemFont = function() {
    return this.font;
};

/**
 * Returns the standard text color of the item
 *
 * @returns {String} Standard text color of the item
 */
DKTools.Sprite.Selectable.prototype.standardItemTextColor = function() {
    return this.textColor;
};

/**
 * Returns the standard paint opacity of the item
 *
 * @returns {Number} Standard paint opacity of the item
 */
DKTools.Sprite.Selectable.prototype.standardItemPaintOpacity = function() {
    return function(index) {
        if (this.isItemEnabled(index)) {
            return this.standardEnabledItemPaintOpacity();
        } else {
            return this.standardDisabledItemPaintOpacity();
        }
    }.bind(this);
};

/**
 * Returns the standard paint opacity of the enabled item
 *
 * @returns {Number} Standard paint opacity of the enabled item
 */
DKTools.Sprite.Selectable.prototype.standardEnabledItemPaintOpacity = function() {
    return 255;
};

/**
 * Returns the standard paint opacity of the disabled item
 *
 * @returns {Number} Standard paint opacity of the disabled item
 */
DKTools.Sprite.Selectable.prototype.standardDisabledItemPaintOpacity = function() {
    try {
        return Window_Base.prototype.translucentOpacity.call(this);
    } catch(e) {
        return 160;
    }
};

/**
 * Returns the standard item align
 *
 * @returns {String} Standard item align
 */
DKTools.Sprite.Selectable.prototype.standardItemAlign = function() {
    return this.align;
};

// setup methods

/**
 * Sets all parameters
 *
 * @override
 *
 * @param {Object} [object] - Parameters
 *
 * @param {Number} [object.index] - Index
 * @param {Number} [object.maxCols] - Number of columns
 * @param {Boolean} [object.fixedHorizontal] -
 * @param {Boolean} [object.cursorFixed] -
 * @param {Boolean} [object.cursorAll] -
 * @param {Number} [object.horizontalSpacing] - Horizontal spacing
 * @param {Number} [object.verticalSpacing] - Vertical spacing
 * @param {Number} [object.textPadding] - Text padding
 * @param {Object[]} [object.items] - List of the items
 * @param {Function} [object.drawItemHandler] - Handler of draw of the item
 * @param {Function | Number} [object.itemWidth] - Width of the item
 * @param {Function | Number} [object.itemHeight] - Height of the item
 * @param {Function} [object.itemRect] - Rectangle of the item
 * @param {Function | Object} [object.itemFont] - Font of the item
 * @param {Function | String} [object.itemTextColor] - Text color of the item
 * @param {Function | Number} [object.itemPaintOpacity] - Paint opacity of the item
 * @param {Function | String} [object.itemAlign] - Align of the item
 *
 * @param {String} [object.font.fontFace] - Font face
 * @param {Number} [object.font.fontSize] - Font size
 * @param {Boolean} [object.font.fontItalic] - Font italic
 *
 * @see DKTools.Sprite.Button.prototype.setupAll
 * @see DKTools.Sprite.Selectable.prototype.setupItems
 */
DKTools.Sprite.Selectable.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.Sprite.Button.prototype.setupAll.call(this, object);
    this.setupIndex(object.index);
    this.setupMaxCols(object.maxCols);
    this.setupFixedHorizontal(object.fixedHorizontal);
    this.setupCursorFixed(object.cursorFixed);
    this.setupCursorAll(object.cursorAll);
    this.setupSpacing(object.horizontalSpacing, object.verticalSpacing);
    this.setupTextPadding(object.textPadding);
    this.setupItems(object.items);
    this.setupDrawItemHandler(object.drawItemHandler);
    this.setupItemWidth(object.itemWidth);
    this.setupItemHeight(object.itemHeight);
    this.setupItemRect(object.itemRect);
    this.setupItemFont(object.itemFont);
    this.setupItemTextColor(object.itemTextColor);
    this.setupItemPaintOpacity(object.itemPaintOpacity);
    this.setupItemAlign(object.itemAlign);
};

/**
 * Sets the index
 *
 * @param {Number} [index=this.standardIndex()] - Index
 *
 * @see DKTools.Sprite.Selectable.prototype.standardIndex
 */
DKTools.Sprite.Selectable.prototype.setupIndex = function(index) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._index = (index == null ? this.standardIndex() : index);
};

/**
 * Sets the number of columns
 *
 * @param {Number} [cols=this.standardMaxCols()] - Number of columns
 *
 * @see DKTools.Sprite.Selectable.prototype.standardMaxCols
 */
DKTools.Sprite.Selectable.prototype.setupMaxCols = function(cols) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._maxCols = cols || this.standardMaxCols();
};

/**
 *
 * @param {Boolean} [fixedHorizontal] -
 */
DKTools.Sprite.Selectable.prototype.setupFixedHorizontal = function(fixedHorizontal) {
    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._fixedHorizontal = (fixedHorizontal == null ? this.standardFixedHorizontal() : fixedHorizontal);
};

/**
 * @param {Boolean} cursorFixed
 */
DKTools.Sprite.Selectable.prototype.setupCursorFixed = function(cursorFixed) {
    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._cursorFixed = (cursorFixed == null ? this.standardCursorFixed() : cursorFixed);
};

/**
 * @param {Boolean} cursorAll
 */
DKTools.Sprite.Selectable.prototype.setupCursorAll = function(cursorAll) {
    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._cursorAll = (cursorAll == null ? this.standardCursorAll() : cursorAll);
};

/**
 * Sets the horizontal spacing
 *
 * @param {Number} [spacing=this.standardHorizontalSpacing()] - Horizontal spacing
 *
 * @see DKTools.Sprite.Selectable.prototype.standardHorizontalSpacing
 */
DKTools.Sprite.Selectable.prototype.setupHorizontalSpacing = function(spacing) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._horizontalSpacing = (spacing == null ? this.standardHorizontalSpacing() : spacing);
};

/**
 * Sets the vertical spacing
 *
 * @param {Number} [spacing=this.standardVerticalSpacing()] - Vertical spacing
 *
 * @see DKTools.Sprite.Selectable.prototype.standardVerticalSpacing
 */
DKTools.Sprite.Selectable.prototype.setupVerticalSpacing = function(spacing) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._verticalSpacing = (spacing == null ? this.standardVerticalSpacing() : spacing);
};

/**
 * Устанавливает горизонтальный и вертикальный интервалы
 *
 * @param {Number} [horizontalSpacing] - Горизонтальный интервал
 * @param {Number} [verticalSpacing] - Вертикальный интервал
 */
DKTools.Sprite.Selectable.prototype.setupSpacing = function(horizontalSpacing, verticalSpacing) {
    this.setupHorizontalSpacing(horizontalSpacing);
    this.setupVerticalSpacing(verticalSpacing);
};

/**
 * Устанавливает отступ текста
 *
 * @param {Number} [textPadding] - Отступ текста
 */
DKTools.Sprite.Selectable.prototype.setupTextPadding = function(textPadding) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._textPadding = (textPadding == null ? this.standardTextPadding() : textPadding);
};

/**
 * Устанавливает список пунктов
 *
 * @param {Object[]} items - Itemы
 * @param {Function | String} items[].name - Название пункта
 * @param {Function | String} [items[].align] - Выравнивание текста пункта
 * @param {Function | String} [items[].textColor] - Цвет текста пункта
 * @param {Function | Object} [items[].font] - Шрифт текста пункта
 * @param {Function | Number} [items[].paintOpacity] - Прозрачность рисования пункта
 * @param {Function | Boolean} [items[].enabled] - Активность пункта
 * @param {String} [items[].symbol] - Символ пункта
 * @param {Function} [items[].handler] - Обработчик выбора
 * @param {String} [items[].font.fontFace] - Название шрифта
 * @param {Number} [items[].font.fontSize] - Размер шрифта
 * @param {Boolean} [items[].font.fontItalic] - Курсив шрифта
 */
DKTools.Sprite.Selectable.prototype.setupItems = function(items) {
    if (items == null) {
        items = this.standardItems();
    }

    _.forEach(items, this._checkItem.bind(this));

    this._items = items;
};

/**
 * Устанавливает обработчик рисования пункта
 *
 * @param {Function} handler - Обработчик рисования пункта
 */
DKTools.Sprite.Selectable.prototype.setupDrawItemHandler = function(handler) {
    /**
     * Обработчик рисования пункта
     *
     * @private
     * @readonly
     * @type {Function | null}
     */
    this._drawItemHandler = handler || this.standardDrawItemHandler();
};

/**
 * Устанавливает ширину пункта
 *
 * @param {Function | Number} [itemWidth] - Ширина пункта
 */
DKTools.Sprite.Selectable.prototype.setupItemWidth = function(itemWidth) {
    /**
     * Ширина пункта
     *
     * @private
     * @readonly
     * @type {Function | Number}
     */
    this._itemWidth = itemWidth || this.standardItemWidth();
};

/**
 * Устанавливает высоту пункта
 *
 * @param {Function | Number} [itemHeight] - Высота пункта
 */
DKTools.Sprite.Selectable.prototype.setupItemHeight = function(itemHeight) {
    /**
     * Высота пункта
     *
     * @private
     * @readonly
     * @type {Function | Number}
     */
    this._itemHeight = itemHeight || this.standardItemHeight();
};

/**
 * @param {Function} [itemRect]
 */
DKTools.Sprite.Selectable.prototype.setupItemRect = function(itemRect) {
    /**
     * @private
     * @readonly
     * @type {Function}
     */
    this._itemRect = itemRect || this.standardItemRect();
};

/**
 * Устанавливает шрифт текста пункта
 *
 * @param {Function | Object} [itemFont] - Шрифт текста пункта
 *
 * @param {String} [itemFont.fontFace] - Название шрифта
 * @param {Number} [itemFont.fontSize] - Размер шрифта
 * @param {Boolean} [itemFont.fontItalic] - Курсив шрифта
 */
DKTools.Sprite.Selectable.prototype.setupItemFont = function(itemFont) {
    /**
     *  Шрифт текста пункта
     *
     * @private
     * @readonly
     * @type {Function | Object}
     */
    this._itemFont = itemFont || this.standardItemFont();
};

/**
 * Устанавливает цвет текста пункта
 *
 * @param {Function | String} [itemTextColor] - Цвет текста пункта
 */
DKTools.Sprite.Selectable.prototype.setupItemTextColor = function(itemTextColor) {
    /**
     * Цвет текста пункта
     *
     * @private
     * @readonly
     * @type {Function | String}
     */
    this._itemTextColor = itemTextColor || this.standardItemTextColor();
};

/**
 * Устанавливает прозрачность рисования пункта
 *
 * @param {Function | Number} [itemPaintOpacity] - Прозрачность рисования пункта
 */
DKTools.Sprite.Selectable.prototype.setupItemPaintOpacity = function(itemPaintOpacity) {
    /**
     * Прозрачность рисования пункта
     *
     * @private
     * @readonly
     * @type {Function | Number}
     */
    this._itemPaintOpacity = itemPaintOpacity || this.standardItemPaintOpacity();
};

/**
 * Устанавливает выравнивание текста пункта
 *
 * @param {Function | String} [itemAlign] - Выравнивание текста пункта
 */
DKTools.Sprite.Selectable.prototype.setupItemAlign = function(itemAlign) {
    /**
     * Выравнивание текста пункта
     *
     * @private
     * @readonly
     * @type {Function | String}
     */
    this._itemAlign = itemAlign || this.standardItemAlign();
};

// set methods

/**
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the object
 *
 * @param {Number} [object.index] - Index
 * @param {Number} [object.maxCols] - Количество столбцов
 * @param {Boolean} [object.fixedHorizontal] -
 * @param {Boolean} [object.cursorFixed] -
 * @param {Boolean} [object.cursorAll] -
 * @param {Number} [object.horizontalSpacing] -
 * @param {Number} [object.verticalSpacing] -
 * @param {Number} [object.textPadding] - Отступ для текста
 * @param {Object[]} [object.items] - Список пунктов
 * @param {Function} [object.drawItemHandler] - Обработчик рисования пункта
 * @param {Function | Number} [object.itemWidth] - Ширина пункта
 * @param {Function | Number} [object.itemHeight] - Высота пункта
 * @param {Function} [object.itemRect] -
 * @param {Function | Object} [object.itemFont] - Шрифт текста пункта
 * @param {Function | String} [object.itemTextColor] - Цвет текста пункта
 * @param {Function | Number} [object.itemPaintOpacity] - Прозрачность рисования пункта
 * @param {Function | String} [object.itemAlign] - Выравнивание текста пункта
 *
 * @param {String} [object.itemFont.fontFace] - Название шрифта
 * @param {Number} [object.itemFont.fontSize] - Размер шрифта
 * @param {Boolean} [object.itemFont.fontItalic] - Курсив шрифта
 *
 * @see DKTools.Sprite.Button.prototype.setAll
 *
 * @returns {Number} Number of changed parameters
 */
DKTools.Sprite.Selectable.prototype.setAll = function(object, blockStart, activate) {
    object = object || {};
    const block = true;
    let changed = DKTools.Sprite.Button.prototype.setAll.call(this, object, block);
    if (this.setIndex(object.index, block)) {
        changed++;
    }
    if (this.setMaxCols(object.maxCols, block)) {
        changed++;
    }
    if (this.setFixedHorizontal(object.fixedHorizontal, block)) {
        changed++;
    }
    if (this.setCursorFixed(object.cursorFixed, block)) {
        changed++;
    }
    if (this.setCursorAll(object.cursorAll, block)) {
        changed++;
    }
    changed += this.setSpacing(object.horizontalSpacing, object.verticalSpacing, block);
    if (this.setTextPadding(object.textPadding, block)) {
        changed++;
    }
    if (this.setItems(object.items, block)) {
        changed++;
    }
    if (this.setDrawItemHandler(object.drawItemHandler, block)) {
        changed++;
    }
    if (this.setItemWidth(object.itemWidth, block)) {
        changed++;
    }
    if (this.setItemHeight(object.itemHeight, block)) {
        changed++;
    }
    if (this.setItemRect(object.itemRect, block)) {
        changed++;
    }
    if (this.setItemFont(object.itemFont, block)) {
        changed++;
    }
    if (this.setItemTextColor(object.itemTextColor, block)) {
        changed++;
    }
    if (this.setItemPaintOpacity(object.itemPaintOpacity, block)) {
        changed++;
    }
    if (this.setItemAlign(object.itemAlign, block)) {
        changed++;
    }
    if (changed) {
        if (!blockStart) {
            this.start();
        }
        if (activate) {
            this.activate();
        }
    }
    return changed;
};

/**
 * Изменяет индекс
 * Returns true if the change occurred
 *
 * @param {Number} index - Index
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.Selectable.prototype.setIndex = function(index, blockRefreshAll) {
    if (this._index === index) {
        return false;
    }
    const lastIndex = this._index;
    this.setupIndex(index);
    if (this._index === lastIndex) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

/**
 * Изменяет количество столбцов
 * Returns true if the change occurred
 *
 * @param {Number} [cols] - Количество столбцов
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.Selectable.prototype.setMaxCols = function(cols, blockRefreshAll) {
    if (this._maxCols === cols) {
        return false;
    }
    const lastCols = this._maxCols;
    this.setupMaxCols(cols);
    if (this._maxCols === lastCols) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

DKTools.Sprite.Selectable.prototype.setFixedHorizontal = function(fixedHorizontal, blockRefreshAll) {
    if (this._fixedHorizontal === fixedHorizontal) {
        return false;
    }
    const lastFixed = this._fixedHorizontal;
    this.setupFixedHorizontal(fixedHorizontal);
    if (this._fixedHorizontal === lastFixed) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

/**
 *
 * @param {Boolean} cursorFixed
 */
DKTools.Sprite.Selectable.prototype.setCursorFixed = function(cursorFixed, blockRefreshAll) {
    if (this._cursorFixed === cursorFixed) {
        return false;
    }
    const lastFixed = this._cursorFixed;
    this.setupCursorFixed(cursorFixed);
    if (this._cursorFixed === lastFixed) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

/**
 *
 * @param {Boolean} cursorAll
 */
DKTools.Sprite.Selectable.prototype.setCursorAll = function(cursorAll, blockRefreshAll) {
    if (this._cursorAll === cursorAll) {
        return false;
    }
    const lastAll = this._cursorAll;
    this.setupCursorAll(cursorAll);
    if (this._cursorAll === lastAll) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

/**
 * Changes the horizontal spacing
 * Returns true if the change occurred
 *
 * @param {Number} [spacing] - Horizontal spacing
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.setupHorizontalSpacing
 * @see DKTools.Base.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.Selectable.prototype.setHorizontalSpacing = function(spacing, blockRefreshAll) {
    if (this._horizontalSpacing === spacing) {
        return false;
    }
    const lastSpacing = this._horizontalSpacing;
    this.setupHorizontalSpacing(spacing);
    if (this._horizontalSpacing === lastSpacing) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

/**
 * Changes the horizontal spacing
 * Returns true if the change occurred
 *
 * @param {Number} [spacing] - Vertical spacing
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.setupVerticalSpacing
 * @see DKTools.Base.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.Selectable.prototype.setVerticalSpacing = function(spacing, blockRefreshAll) {
    if (this._verticalSpacing === spacing) {
        return false;
    }
    const lastSpacing = this._verticalSpacing;
    this.setupVerticalSpacing(spacing);
    if (this._verticalSpacing === lastSpacing) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

/**
 *
 * @param {Number} [horizontalSpacing] -
 * @param {Number} [verticalSpacing] -
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @returns {Number}
 */
DKTools.Sprite.Selectable.prototype.setSpacing = function(horizontalSpacing, verticalSpacing, blockRefreshAll) {
    const block = true;
    let changed = 0;
    if (this.setHorizontalSpacing(horizontalSpacing, block)) {
        changed++;
    }
    if (this.setVerticalSpacing(verticalSpacing, block)) {
        changed++;
    }
    if (changed && !blockRefreshAll) {
        this.refreshAll();
    }
    return changed;
};

DKTools.Sprite.Selectable.prototype.setTextPadding = function(textPadding, blockRefreshAll) {
    if (this._textPadding === textPadding) {
        return false;
    }
    const lastPadding = this._textPadding;
    this.setupTextPadding(textPadding);
    if (this._textPadding === lastPadding) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

DKTools.Sprite.Selectable.prototype.setItems = function(items, blockRefreshAll) {
    if (this._items == items) {
        return false;
    }
    this.setupItems(items);
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

DKTools.Sprite.Selectable.prototype.setDrawItemHandler = function(handler, blockRefreshAll) {
    if (this._drawItemHandler === handler) {
        return false;
    }
    const lastHandler = this._drawItemHandler;
    this.setupDrawItemHandler(handler);
    if (this._drawItemHandler === lastHandler) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

DKTools.Sprite.Selectable.prototype.setItemWidth = function(itemWidth, blockRefreshAll) {
    if (this._itemWidth === itemWidth) {
        return false;
    }
    const lastWidth = this._itemWidth;
    this.setupItemWidth(itemWidth);
    if (this._itemWidth === lastWidth) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

DKTools.Sprite.Selectable.prototype.setItemHeight = function(itemHeight, blockRefreshAll) {
    if (this._itemHeight === itemHeight) {
        return false;
    }
    const lastHeight = this._itemHeight;
    this.setupItemHeight(itemHeight);
    if (this._itemHeight === lastHeight) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

DKTools.Sprite.Selectable.prototype.setItemFont = function(itemFont, blockRefreshAll) {
    if (this._itemFont === itemFont) {
        return false;
    }
    const lastFont = this._itemFont;
    this.setupItemFont(itemFont);
    if (this._itemFont === lastFont) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

DKTools.Sprite.Selectable.prototype.setItemTextColor = function(itemTextColor, blockRefreshAll) {
    if (this._itemTextColor === itemTextColor) {
        return false;
    }
    const lastTextColor = this._itemTextColor;
    this.setupItemTextColor(itemTextColor);
    if (this._itemTextColor === lastTextColor) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

DKTools.Sprite.Selectable.prototype.setItemPaintOpacity = function(itemPaintOpacity, blockRefreshAll) {
    if (this._itemPaintOpacity === itemPaintOpacity) {
        return false;
    }
    const lastPaintOpacity = this._itemPaintOpacity;
    this.setupItemPaintOpacity(itemPaintOpacity);
    if (this._itemPaintOpacity === lastPaintOpacity) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

DKTools.Sprite.Selectable.prototype.setItemAlign = function(itemAlign, blockRefreshAll) {
    if (this._itemAlign === itemAlign) {
        return false;
    }
    const lastAlign = this._itemAlign;
    this.setupItemAlign(itemAlign);
    if (this._itemAlign === lastAlign) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

/**
 *
 * @param {Number} row - Номер ряда
 */
DKTools.Sprite.Selectable.prototype.setTopRow = function(row, blockRefreshAll) {
    const topRow = _.clamp(row, 0, this.getMaxTopRow());
    if (this._topRow !== topRow) {
        this._topRow = topRow;
        if (!blockRefreshAll) {
            this.refreshAll();
        }
    }
};

/**
 *
 * @param {Number} col - Номер столбца
 */
DKTools.Sprite.Selectable.prototype.setTopCol = function(col, blockRefreshAll) {
    const topCol = _.clamp(col, 0, this.getMaxTopCol());
    if (this._topCol !== topCol) {
        this._topCol = topCol;
        if (!blockRefreshAll) {
            this.refreshAll();
        }
    }
};

/**
 *
 * @param {Number} row - Номер ряда
 */
DKTools.Sprite.Selectable.prototype.setBottomRow = function(row, blockRefreshAll) {
    this.setTopRow(row - (this.getMaxPageRows() - 1), blockRefreshAll);
};

/**
 *
 * @param {Number} col - Номер столбца
 */
DKTools.Sprite.Selectable.prototype.setBottomCol = function(col, blockRefreshAll) {
    this.setTopCol(col - (this.getMaxPageCols() - 1), blockRefreshAll);
};

/**
 *
 * @param {String} symbol - Символ
 * @param {Function} handler - Обработчик выбора
 */
DKTools.Sprite.Selectable.prototype.setHandler = function(symbol, handler) {
    this._handlers[symbol] = handler;
};

/**
 * @param {PIXI.Rectangle | Rectangle | Object | Number} object -
 * @param {Number} y -
 * @param {Number} width -
 * @param {Number} height -
 *
 * @see DKTools.Sprite.Cursor.prototype.setCursorRect
 *
 * @returns {Boolean}
 */
DKTools.Sprite.Selectable.prototype.setCursorRect = function(object, y, width, height) {
    return this._cursorSprite.setCursorRect(object, y, width, height);
};

// get methods

/**
 * Returns the rectangle of the item by index
 *
 * @param {Number} index - Index
 * @returns {Rectangle} Rectangle of the item by index
 */
DKTools.Sprite.Selectable.prototype.getItemRectByIndex = function(index) {
    return this._itemRect(index);
};

/**
 * Returns the rectangle of the item
 *
 * @param {Object} item - Item
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemIndex
 * @see DKTools.Sprite.Selectable.prototype.getItemRectByIndex
 *
 * @returns {Rectangle} Rectangle of the item
 */
DKTools.Sprite.Selectable.prototype.getItemRect = function(item) {
    return this.getItemRectByIndex(this.getItemIndex(item));
};

/**
 * Returns the rectangle of the current item (selected item)
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemRectByIndex
 *
 * @returns {Rectangle} Rectangle of the current item (selected item)
 */
DKTools.Sprite.Selectable.prototype.getCurrentItemRect = function() {
    return this.getItemRectByIndex(this._index);
};

/**
 * Returns the rectangle of text of the item by index
 *
 * @param {Number} index - Index
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemRectByIndex
 *
 * @returns {Rectangle} Rectangle of text of the item by index
 */
DKTools.Sprite.Selectable.prototype.getItemRectForTextByIndex = function(index) {
    const rect = this.getItemRectByIndex(index);
    rect.x += this._textPadding;
    rect.width -= this._textPadding * 2;
    return rect;
};

/**
 * Returns the rectangle of text of the item
 *
 * @param {Object} item - Item
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemIndex
 * @see DKTools.Sprite.Selectable.prototype.getItemRectForTextByIndex
 *
 * @returns {Rectangle} Rectangle of text of the item
 */
DKTools.Sprite.Selectable.prototype.getItemRectForText = function(item) {
    return this.getItemRectForTextByIndex(this.getItemIndex(item));
};

/**
 * Returns the width of the item
 *
 * @returns {Number} Width of the item
 */
DKTools.Sprite.Selectable.prototype.getItemWidth = function() {
    if (_.isFunction(this._itemWidth)) {
        return this._itemWidth();
    }
    return this._itemWidth;
};

/**
 * Returns the height of the item
 *
 * @returns {Number} Height of the item
 */
DKTools.Sprite.Selectable.prototype.getItemHeight = function() {
    if (_.isFunction(this._itemHeight)) {
        return this._itemHeight();
    } else if (_.isString(this._itemHeight)) {
        return Number(this._itemHeight) * this.getLineHeight();
    }
    return this._itemHeight;
};

/**
 * Returns the item by index
 *
 * @param {Number} index - Index
 * @returns {Object | null} Item or null
 */
DKTools.Sprite.Selectable.prototype.getItem = function(index) {
    return this._items[index] || null;
};

/**
 * Returns the font of the item by index
 *
 * @param {Number} index - Index
 * @returns {Object} Font of the item by index
 */
DKTools.Sprite.Selectable.prototype.getItemFontByIndex = function(index) {
    const item = this.getItem(index);
    const itemFont = item.font || this._itemFont;
    if (_.isFunction(itemFont)) {
        return itemFont(index);
    }
    return itemFont;
};

/**
 * Returns the font of the item
 *
 * @param {Object} item - Item
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemIndex
 * @see DKTools.Sprite.Selectable.prototype.getItemFontByIndex
 *
 * @returns {Object} Font of the item
 */
DKTools.Sprite.Selectable.prototype.getItemFont = function(item) {
    return this.getItemFontByIndex(this.getItemIndex(item));
};

/**
 * Returns the text color of the item by index
 *
 * @param {Number} index - Index
 * @returns {String} Text color of the item by index
 */
DKTools.Sprite.Selectable.prototype.getItemTextColorByIndex = function(index) {
    const item = this.getItem(index);
    const itemTextColor = item.textColor || this._itemTextColor;
    if (_.isFunction(itemTextColor)) {
        return itemTextColor(index);
    }
    return itemTextColor;
};

/**
 * Returns the text color of the item
 *
 * @param {Object} item - Item
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemIndex
 * @see DKTools.Sprite.Selectable.prototype.getItemTextColorByIndex
 *
 * @returns {String} Text color of the item
 */
DKTools.Sprite.Selectable.prototype.getItemTextColor = function(item) {
    return this.getItemTextColorByIndex(this.getItemIndex(item));
};

/**
 * Returns the paint opacity of the item by index
 *
 * @param {Number} index - Index
 * @returns {Number} Paint opacity of the item by index
 */
DKTools.Sprite.Selectable.prototype.getItemPaintOpacityByIndex = function(index) {
    const item = this.getItem(index);
    const itemPaintOpacity = _.isFinite(item.paintOpacity) ? item.paintOpacity : this._itemPaintOpacity;
    if (_.isFunction(itemPaintOpacity)) {
        return itemPaintOpacity(index);
    }
    return itemPaintOpacity;
};

/**
 * Returns the paint opacity of the item
 *
 * @param {Object} item - Item
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemIndex
 * @see DKTools.Sprite.Selectable.prototype.getItemPaintOpacityByIndex
 *
 * @returns {Number} Paint opacity of the item
 */
DKTools.Sprite.Selectable.prototype.getItemPaintOpacity = function(item) {
    return this.getItemPaintOpacityByIndex(this.getItemIndex(item));
};

/**
 * Returns the align of the item by index
 *
 * @param {Number} index - Index
 * @returns {String} Align of the item by index
 */
DKTools.Sprite.Selectable.prototype.getItemAlignByIndex = function(index) {
    const item = this.getItem(index);
    const itemAlign = item.align || this._itemAlign;
    if (_.isFunction(itemAlign)) {
        return itemAlign(index);
    }
    return itemAlign;
};

/**
 * Returns the align of the item
 *
 * @param {Object} item - Item
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemIndex
 * @see DKTools.Sprite.Selectable.prototype.getItemAlignByIndex
 *
 * @returns {String} Align of the item by index
 */
DKTools.Sprite.Selectable.prototype.getItemAlign = function(item) {
    return this.getItemAlignByIndex(this.getItemIndex(item));
};

/**
 * Returns the previous index
 *
 * @param {Boolean} [wrap=false] - Cyclic selection
 * @returns {Number} Previous index
 */
DKTools.Sprite.Selectable.prototype.getPrevIndex = function(wrap) {
    if (this._index > 0) {
        return this._index - 1;
    } else if (wrap) {
        return this.getMaxItems() - 1;
    }
    return -1;
};

/**
 * Returns the next index
 *
 * @param {Boolean} [wrap=false] - Cyclic selection
 * @returns {Number} Next index
 */
DKTools.Sprite.Selectable.prototype.getNextIndex = function(wrap) {
    if (this._index < this.getMaxItems() - 1) {
        return this._index + 1;
    } else if (wrap) {
        return 0;
    }
    return -1;
};

/**
 * Returns the previous item
 *
 * @param {Boolean} [wrap=false] - Cyclic selection
 *
 * @see DKTools.Sprite.Selectable.prototype.getPrevIndex
 * @see DKTools.Sprite.Selectable.prototype.getItem
 *
 * @returns {Object | null} Previous item or null
 */
DKTools.Sprite.Selectable.prototype.getPrevItem = function(wrap) {
    return this.getItem(this.getPrevIndex(wrap));
};

/**
 * Returns the next item
 *
 * @param {Boolean} [wrap=false] - Cyclic selection
 *
 * @see DKTools.Sprite.Selectable.prototype.getNextIndex
 * @see DKTools.Sprite.Selectable.prototype.getItem
 *
 * @returns {Object | null} Next item or null
 */
DKTools.Sprite.Selectable.prototype.getNextItem = function(wrap) {
    return this.getItem(this.getNextIndex(wrap));
};

/**
 * Returns the current item (selected item)
 *
 * @see DKTools.Sprite.Selectable.prototype.getItem
 *
 * @returns {Object | null} Current item (selected item) or null
 */
DKTools.Sprite.Selectable.prototype.getCurrentItem = function() {
    return this.getItem(this._index);
};

/**
 * Returns the index of the item
 *
 * @param {Object} item - item
 * @returns {Number} Index of the item
 */
DKTools.Sprite.Selectable.prototype.getItemIndex = function(item) {
    return _.indexOf(this._items, item);
};

/**
 * Returns the visible items
 *
 * @returns {Object[]} Visible items
 */
DKTools.Sprite.Selectable.prototype.getVisibleItems = function() {
    const maxPageItems = this.getMaxPageItems();
    const maxItems = this.getMaxItems();
    let index = this.getTopIndex();
    let items = [];
    for(let i = 0; i < maxPageItems && index < maxItems; i++, index++) {
        items.push(this.getItem(index));
    }
    return items;
};

/**
 * Returns the name of the item by index
 *
 * @param {Number} index - Index
 * @returns {String | null} Name of the item by index or null
 */
DKTools.Sprite.Selectable.prototype.getItemName = function(index) {
    const item = this.getItem(index);
    if (item) {
        const name = item.name;
        if (_.isFunction(name)) {
            return name(index);
        }
        return name;
    }
    return null;
};

/**
 * Returns the symbol of the item by index
 *
 * @param {Number} index - Index
 * @returns {String | null} Symbol of the item by index or null
 */
DKTools.Sprite.Selectable.prototype.getItemSymbol = function(index) {
    const item = this.getItem(index);
    return item ? item.symbol : null;
};

/**
 * Returns the ext of the item by index
 *
 * @param {Number} index - Index
 * @returns {* | null} Ext of the item by index or null
 */
DKTools.Sprite.Selectable.prototype.getItemExt = function(index) {
    var item = this.getItem(index);
    return item ? item.ext : null;
};

/**
 * Returns the name of the current item (selected item)
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemName
 *
 * @returns {String | null} Name of the current item (selected item) or null
 */
DKTools.Sprite.Selectable.prototype.getCurrentItemName = function() {
    return this.getItemName(this._index);
};

/**
 * Returns the symbol of the current item (selected item)
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemSymbol
 *
 * @returns {String | null} Symbol of the current item (selected item) or null
 */
DKTools.Sprite.Selectable.prototype.getCurrentItemSymbol = function() {
    return this.getItemSymbol(this._index);
};

/**
 * Returns the ext of the current item (selected item)
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemExt
 *
 * @returns {* | null} Ext of the current item (selected item) or null
 */
DKTools.Sprite.Selectable.prototype.getCurrentItemExt = function() {
    return this.getItemExt(this._index);
};

/**
 * Returns the number of the items
 *
 * @returns {Number} Number of the items
 */
DKTools.Sprite.Selectable.prototype.getMaxItems = function() {
    return this._items.length;
};

/**
 * Returns the maximum number of rows
 *
 * @returns {Number} Maximum number of rows
 */
DKTools.Sprite.Selectable.prototype.getMaxRows = function() {
    if (this.isFixedHorizontal()) {
        return 1;
    }
    return Math.max(1, Math.ceil(this.getMaxItems() / this.getMaxCols()));
};

/**
 * Returns the maximum number of columns
 *
 * @returns {Number} Maximum number of columns
 */
DKTools.Sprite.Selectable.prototype.getMaxCols = function() {
    return this._maxCols;
};

/**
 * @returns {Number}
 */
DKTools.Sprite.Selectable.prototype.getMaxTopRow = function() {
    return Math.max(0, this.getMaxRows() - this.getMaxPageRows());
};

/**
 * @returns {Number}
 */
DKTools.Sprite.Selectable.prototype.getMaxTopCol = function() {
    return Math.max(0, this.getMaxItems() - this.getMaxPageCols());
};

/**
 * @returns {Number}
 */
DKTools.Sprite.Selectable.prototype.getMaxPageRows = function() {
    const spacing = this._verticalSpacing;
    const realHeight = this.realHeight;
    const itemHeight = this.getItemHeight();
    const maxRows = this.getMaxRows();
    let rows = 0, height = 0;
    for(; rows < maxRows && height + itemHeight + spacing <= realHeight && height + itemHeight <= realHeight; rows++) {
        height += itemHeight + spacing;
    }
    return rows;
};

/**
 * @returns {Number}
 */
DKTools.Sprite.Selectable.prototype.getMaxPageCols = function() {
    return this.getMaxCols();
};

/**
 * @returns {Number}
 */
DKTools.Sprite.Selectable.prototype.getMaxPageItems = function() {
    if (this.isHorizontal()) {
        return this.getMaxPageCols();
    }
    return this.getMaxPageRows() * this.getMaxPageCols();
};

/**
 * Возврашает номер ряда по индексу
 *
 * @param {Number} index - Index
 * @returns {Number} Номер ряда по индексу
 */
DKTools.Sprite.Selectable.prototype.getRowByIndex = function(index) {
    return Math.floor(index / this.getMaxCols());
};

/**
 * Возвращает номер текущего выбранного ряда
 *
 * @returns {Number} Номер текущего выбранного ряда
 */
DKTools.Sprite.Selectable.prototype.getCurrentRow = function() {
    return this.getRowByIndex(this._index);
};

/**
 * Возвращает номер ряда пункта
 *
 * @param {Object} item - Item
 * @returns {Number} Номер ряда пункта
 */
DKTools.Sprite.Selectable.prototype.getItemRow = function(item) {
    return this.getRowByIndex(this.getItemIndex(item));
};

/**
 * Возвращает пункты по номеру ряда
 *
 * @param {Number} row - Номер ряда
 * @returns {Object[]} Пункты по номеру ряда
 */
DKTools.Sprite.Selectable.prototype.getRowItems = function(row) {
    let items = [];
    if (_.inRange(row, 0, this.getMaxRows())) {
        let index = row * this.getMaxCols();
        const maxPageItems = this.getMaxPageItems();
        const maxItems = this.getMaxItems();
        for(var i = 0; i < maxPageItems && index < maxItems && this.getRowByIndex(index) === row; i++, index++) {
            items.push(this.getItem(index));
        }
    }
    return items;
};

/**
 * Возврашает номер столбца по индексу
 *
 * @param {Number} index - Index
 * @returns {Number} Номер столбца по индексу
 */
DKTools.Sprite.Selectable.prototype.getColByIndex = function(index) {
    return Math.floor(index % this.getMaxCols());
};

/**
 * Возвращает номер текущего выбранного столбца
 *
 * @returns {Number} Номер текущего выбранного столбца
 */
DKTools.Sprite.Selectable.prototype.getCurrentCol = function() {
    if (this.isHorizontal()) {
        return this._index;
    }
    return this.getColByIndex(this._index);
};

/**
 * Возвращает номер столбца пункта
 *
 * @param {Object} item - Item
 * @returns {Number} Номер столбца пункта
 */
DKTools.Sprite.Selectable.prototype.getItemCol = function(item) {
    return this.getColByIndex(this.getItemIndex(item));
};

/**
 * Возвращает пункты по номеру столбца
 *
 * @param {Number} col - Номер столбца
 * @returns {Object[]} Пункты по номеру столбца
 */
DKTools.Sprite.Selectable.prototype.getColItems = function(col) {
    let items = [];
    if (_.inRange(col, 0, this.getMaxCols())) {
        const maxItems = this.getMaxItems();
        for(var index = 0; index < maxItems; index++) {
            if (this.getColByIndex(index) === col) {
                items.push(this.getItem(index));
            }
        }
    }
    return items;
};

/**
 * @returns {Number}
 */
DKTools.Sprite.Selectable.prototype.getTopIndex = function() {
    if (this.isHorizontal()) {
        return this.getTopCol();
    }
    return this.getTopRow() * this.getMaxCols();
};

/**
 * @returns {Number}
 */
DKTools.Sprite.Selectable.prototype.getTopRow = function() {
    return this._topRow;
};

/**
 * @returns {Number}
 */
DKTools.Sprite.Selectable.prototype.getTopCol = function() {
    return this._topCol;
};

/**
 * @returns {Number}
 */
DKTools.Sprite.Selectable.prototype.getBottomRow = function() {
    return Math.max(0, this.getTopRow() + this.getMaxPageRows() - 1);
};

/**
 * @returns {Number}
 */
DKTools.Sprite.Selectable.prototype.getBottomCol = function() {
    return Math.max(0, this.getTopCol() + this.getMaxPageCols() - 1);
};

/**
 * @returns {Number}
 */
DKTools.Sprite.Selectable.prototype.getBottomIndex = function() {
    return Math.min(this.getTopIndex() + this.getMaxPageItems(), this.getMaxItems()) - 1;
};

// is methods

/**
 * Возвращает true, если установлено фиксированное горизонтальное расположение пунктов (в один ряд)
 *
 * @returns {Boolean} Установлено фиксированное горизонтальное расположение пунктов (в один ряд)
 */
DKTools.Sprite.Selectable.prototype.isFixedHorizontal = function() {
    return this._fixedHorizontal;
};

/**
 * Возвращает true, если пункты располагаются горизонтально (в один ряд)
 *
 * @returns {Boolean} Пункты располагаются горизонтально (в один ряд)
 */
DKTools.Sprite.Selectable.prototype.isHorizontal = function() {
    return this.isFixedHorizontal() || this.getMaxPageRows() === 1;
};

/**
 * Возвращает true, если пункты располагаются вертикально (больше одного ряда)
 *
 * @returns {Boolean} Пункты располагаются вертикально (больше одного ряда)
 */
DKTools.Sprite.Selectable.prototype.isVertical = function() {
    return !this.isHorizontal();
};

/**
 * Returns true if the cursor can move
 *
 * @returns {Boolean} Cursor can move
 */
DKTools.Sprite.Selectable.prototype.isCursorMovable = function() {
    return this.isVisibleAndActive() && !this.isCursorFixed() && !this.isCursorAll() && this.getMaxItems() > 0;
};

/**
 * @returns {Boolean}
 */
DKTools.Sprite.Selectable.prototype.isOkEnabled = function() {
    return true;
};

/**
 * @returns {Boolean}
 */
DKTools.Sprite.Selectable.prototype.isCancelEnabled = function() {
    return this.isHandled('cancel');
};

/**
 * @returns {Boolean}
 */
DKTools.Sprite.Selectable.prototype.isOkTriggered = function() {
    return Input.isRepeated('ok');
};

/**
 * @returns {Boolean}
 */
DKTools.Sprite.Selectable.prototype.isCancelTriggered = function() {
    return Input.isRepeated('cancel') || TouchInput.isCancelled();
};

/**
 * Returns true if the cursor is visible
 *
 * @returns {Boolean} Cursor is visible
 */
DKTools.Sprite.Selectable.prototype.isCursorVisible = function() {
    if (!this._cursorSprite.isVisible()) {
        return false;
    }
    if (this.isHorizontal()) {
        const col = this.getCurrentCol();
        return col >= this.getTopCol() && col <= this.getBottomCol();
    }
    const row = this.getCurrentRow();
    return row >= this.getTopRow() && row <= this.getBottomRow();
};

/**
 * Returns true if the item by index is enabled
 *
 * @param {Number} index - Index
 * @returns {Boolean} Item by index is enabled
 */
DKTools.Sprite.Selectable.prototype.isItemEnabled = function(index) {
    const item = this.getItem(index);
    if (item) {
        const enabled = item.enabled;
        if (_.isFunction(enabled)) {
            return enabled(index);
        }
        return enabled;
    }
    return false;
};

/**
 * Returns true if the current item (selected item) is enabled
 *
 * @see DKTools.Sprite.Selectable.prototype.isItemEnabled
 *
 * @returns {Boolean} Current item (selected item) is enabled
 */
DKTools.Sprite.Selectable.prototype.isCurrentItemEnabled = function() {
    return this.isItemEnabled(this._index);
};

/**
 * Возвращает true, если для символа установлен обработчик выбора
 *
 * @param {String} symbol - Символ
 * @returns {Boolean} Для символа установлен обработчик выбора
 */
DKTools.Sprite.Selectable.prototype.isHandled = function(symbol) {
    return !!this._handlers[symbol];
};

/**
 * Возвращает true, если курсор фиксирован
 *
 * @returns {Boolean} Курсор фиксирован
 */
DKTools.Sprite.Selectable.prototype.isCursorFixed = function() {
    return this._cursorFixed;
};

/**
 * Возвращает true, если выбраны все пункты
 *
 * @returns {Boolean} Выбраны все пункты
 */
DKTools.Sprite.Selectable.prototype.isCursorAll = function() {
    return this._cursorAll;
};

/**
 * Returns true if the item by index is visible
 *
 * @param {Number} index - Index
 * @returns {Boolean} Item by index is visible
 */
DKTools.Sprite.Selectable.prototype.isItemVisibleByIndex = function(index) {
    return _.inRange(index, this.getTopIndex(), this.getBottomIndex() + 1);
};

/**
 * Returns true if the item is visible
 *
 * @param {Object} item - Item
 *
 * @see DKTools.Sprite.Selectable.prototype.isItemVisibleByIndex
 *
 * @returns {Boolean} Item is visible
 */
DKTools.Sprite.Selectable.prototype.isItemVisible = function(item) {
    return this.isItemVisibleByIndex(this.getItemIndex(item));
};

// has methods

/**
 * Returns true if the item by index exists
 *
 * @param {Number} index - Index
 *
 * @see DKTools.Sprite.Selectable.prototype.getItem
 *
 * @returns {Boolean} Item by index exists
 */
DKTools.Sprite.Selectable.prototype.hasItemByIndex = function(index) {
    return !!this.getItem(index);
};

/**
 * Returns true if the item exists
 *
 * @param {Object} item - item
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemIndex
 * @see DKTools.Sprite.Selectable.prototype.hasItemByIndex
 *
 * @returns {Boolean} Item exists
 */
DKTools.Sprite.Selectable.prototype.hasItem = function(item) {
    return this.hasItemByIndex(this.getItemIndex(item));
};

/**
 * Returns true if the items exists
 *
 * @see DKTools.Sprite.Selectable.prototype.getMaxItems
 *
 * @returns {Boolean} Items exists
 */
DKTools.Sprite.Selectable.prototype.hasItems = function() {
    return this.getMaxItems() > 0;
};

/**
 * Returns true if the handler of draw of the item exists
 *
 * @returns {Boolean} Handler of draw of the item exists
 */
DKTools.Sprite.Selectable.prototype.hasDrawItemHandler = function() {
    return !!this._drawItemHandler;
};

// active methods

/**
 * Activates the object
 *
 * @override
 */
DKTools.Sprite.Selectable.prototype.activate = function() {
    DKTools.Sprite.Button.prototype.activate.call(this);
    this.reselect();
};

/**
 * Deactivates the object
 *
 * @override
 * @param {Boolean} [deselect=false] - Deselects the current item (selected item)
 *
 * @see DKTools.Sprite.Selectable.prototype.deselect
 */
DKTools.Sprite.Selectable.prototype.deactivate = function(deselect) {
    DKTools.Sprite.Button.prototype.deactivate.call(this);
    if (deselect) {
        this.deselect();
    }
};

// cursor methods

/**
 * Moves the cursor to down
 *
 * @param {Boolean} [wrap=false] - Cyclic selection
 */
DKTools.Sprite.Selectable.prototype.cursorDown = function(wrap) {
    if (this.isHorizontal()) {
        return;
    }
    const index = this._index;
    const maxItems = this.getMaxItems();
    const maxCols = this.getMaxCols();
    if (index < maxItems - maxCols || (wrap && maxItems === this.getMaxRows() * maxCols)) {
        this.selectItemByIndex((index + maxCols) % maxItems);
    }
};

/**
 * Moves the cursor to up
 *
 * @param {Boolean} [wrap=false] - Cyclic selection
 */
DKTools.Sprite.Selectable.prototype.cursorUp = function(wrap) {
    if (this.isHorizontal()) {
        return;
    }
    const index = this._index;
    const maxItems = this.getMaxItems();
    const maxCols = this.getMaxCols();
    if (index >= maxCols || (wrap && maxItems === this.getMaxRows() * maxCols)) {
        this.selectItemByIndex((index - maxCols + maxItems) % maxItems);
    }
};

/**
 * Moves the cursor to right
 *
 * @param {Boolean} [wrap=false] - Cyclic selection
 */
DKTools.Sprite.Selectable.prototype.cursorRight = function(wrap) {
    const maxItems = this.getMaxItems();
    if (maxItems < 2) {
        return;
    }
    if (this.isHorizontal()) {
        this.selectNext(wrap);
        return;
    }
    const index = this._index;
    const maxCols = this.getMaxCols();
    if (maxCols >= 2 && (index < maxItems - 1 || wrap)) {
        this.selectItemByIndex((index + 1) % maxItems);
    }
};

/**
 * Moves the cursor to left
 *
 * @param {Boolean} [wrap=false] - Cyclic selection
 */
DKTools.Sprite.Selectable.prototype.cursorLeft = function(wrap) {
    const maxItems = this.getMaxItems();
    if (maxItems < 2) {
        return;
    }
    if (this.isHorizontal()) {
        this.selectPrev(wrap);
        return;
    }
    const index = this._index;
    const maxCols = this.getMaxCols();
    if (maxCols >= 2 && (index > 0 || wrap)) {
        this.selectItemByIndex((index - 1 + maxItems) % maxItems);
    }
};

/**
 * Moves the cursor to lower page
 */
DKTools.Sprite.Selectable.prototype.cursorPagedown = function() {
    if (this.isHorizontal()) {
        const topCol = this.getTopCol();
        if (topCol + this.getMaxPageCols() < this.getMaxItems()) {
            this.setTopCol(topCol + this.getMaxPageCols());
            this.selectItemByIndex(Math.min(this._index + this.getMaxPageItems(), this.getMaxItems() - 1));
        }
    } else {
        const topRow = this.getTopRow();
        if (topRow + this.getMaxPageRows() < this.getMaxRows()) {
            this.setTopRow(topRow + this.getMaxPageRows());
            this.selectItemByIndex(Math.min(this._index + this.getMaxPageItems(), this.getMaxItems() - 1));
        }
    }
};

/**
 * Moves the cursor to upper page
 */
DKTools.Sprite.Selectable.prototype.cursorPageup = function() {
    if (this.isHorizontal()) {
        const topCol = this.getTopCol();
        if (topCol > 0) {
            this.setTopCol(topCol - this.getMaxPageCols());
            this.selectItemByIndex(Math.max(0, this._index - this.getMaxPageItems()));
        }
    } else {
        const topRow = this.getTopRow();
        if (topRow > 0) {
            this.setTopRow(topRow - this.getMaxPageRows());
            this.selectItemByIndex(Math.max(0, this._index - this.getMaxPageItems()));
        }
    }
};

/**
 * Shows the cursor
 */
DKTools.Sprite.Selectable.prototype.showCursor = function() {
    this._cursorSprite.show(true);
};

/**
 * Hides the cursor
 */
DKTools.Sprite.Selectable.prototype.hideCursor = function() {
    this._cursorSprite.hide();
};

// touch methods

/**
 * @private
 * @param {Boolean} triggered
 */
DKTools.Sprite.Selectable.prototype._onTouch = function(triggered) {
    const lastIndex = this._index;
    const x = TouchInput.x;
    const y = TouchInput.y;
    const hitIndex = this.hitTest(x, y);
    if (hitIndex >= 0) {
        if (this._index === hitIndex) {
            if (triggered && this.isOkEnabled()) {
                this.processOk();
            }
        } else if (this.isCursorMovable()) {
            this.selectItemByIndex(hitIndex);
        }
    }
    if (this._index !== lastIndex) {
        this.playCursorSound();
    }
};

/**
 * @param {Number} x
 * @param {Number} y
 * @returns {Number}
 */
DKTools.Sprite.Selectable.prototype.hitTest = function(x, y) {
    if (this.isInside(x, y)) {
        const localX = this.canvasToLocalX(x);
        const localY = this.canvasToLocalY(y);
        const maxPageItems = this.getMaxPageItems();
        const maxItems = this.getMaxItems();
        let index = this.getTopIndex();
        for(let i = 0; i < maxPageItems && index < maxItems; i++, index++) {
            const rect = this.getItemRectByIndex(index);
            const scale = this.scale;
            rect.x *= scale.x;
            rect.y *= scale.y;
            rect.width *= scale.x;
            rect.height *= scale.y;
            if (rect.contains(localX, localY)) {
                return index;
            }
        }
    }
    return -1;
};

// draw methods

/**
 * Draws all
 *
 * @override
 */
DKTools.Sprite.Selectable.prototype.drawAll = function() {
    DKTools.Sprite.Button.prototype.drawAll.call(this);
    this.drawAllItems();
};

/**
 * Draws all items
 */
DKTools.Sprite.Selectable.prototype.drawAllItems = function() {
    const maxPageItems = this.getMaxPageItems();
    const maxItems = this.getMaxItems();
    let index = this.getTopIndex();
    for(let i = 0; i < maxPageItems && index < maxItems; i++, index++) {
        this.drawItemByIndex(index);
    }
};

/**
 * Draws the item by index
 *
 * @param {Number} index - Index
 */
DKTools.Sprite.Selectable.prototype.drawItemByIndex = function(index) {
    if (this.hasDrawItemHandler()) {
        this._drawItemHandler(index);
    }
};

/**
 * Draws the item
 *
 * @param {Object} item - Item
 */
DKTools.Sprite.Selectable.prototype.drawItem = function(item) {
    this.drawItemByIndex(this.getItemIndex(item));
};

/**
 * Clears the item by index
 *
 * @param {Number} index - Index
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemRectByIndex
 * @see DKTools.Sprite.Selectable.prototype.clearRect
 */
DKTools.Sprite.Selectable.prototype.clearItemByIndex = function(index) {
    this.clearRect(this.getItemRectByIndex(index));
};

/**
 * Clears the item
 *
 * @param {Object} item - Item
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemIndex
 * @see DKTools.Sprite.Selectable.prototype.clearItemByIndex
 */
DKTools.Sprite.Selectable.prototype.clearItem = function(item) {
    this.clearItemByIndex(this.getItemIndex(item));
};

/**
 * Redraws the item by index
 *
 * @param {Number} index - Index
 *
 * @see DKTools.Sprite.Selectable.prototype.clearItemByIndex
 * @see DKTools.Sprite.Selectable.prototype.drawItemByIndex
 */
DKTools.Sprite.Selectable.prototype.redrawItemByIndex = function(index) {
    if (index >= 0 && this.isItemVisibleByIndex(index)) {
        this.clearItemByIndex(index);
        this.drawItemByIndex(index);
    }
};

/**
 * Redraws the item
 *
 * @param {Object} item - Item
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemIndex
 * @see DKTools.Sprite.Selectable.prototype.redrawItemByIndex
 */
DKTools.Sprite.Selectable.prototype.redrawItem = function(item) {
    this.redrawItemByIndex(this.getItemIndex(item));
};

/**
 * Redraws the current item (selected item)
 *
 * @see DKTools.Sprite.Selectable.prototype.redrawItemByIndex
 */
DKTools.Sprite.Selectable.prototype.redrawCurrentItem = function() {
    this.redrawItemByIndex(this._index);
};

// sound methods

/**
 * Plays "ok" sound
 *
 * @see SoundManager.playOk
 */
DKTools.Sprite.Selectable.prototype.playOkSound = function() {
    SoundManager.playOk();
};

/**
 * Plays "cancel" sound
 *
 * @see SoundManager.playCancel
 */
DKTools.Sprite.Selectable.prototype.playCancelSound = function() {
    SoundManager.playCancel();
};

/**
 * Plays "cursor" sound
 *
 * @see SoundManager.playCursor
 */
DKTools.Sprite.Selectable.prototype.playCursorSound = function() {
    SoundManager.playCursor();
};

/**
 * Plays "buzzer" sound
 *
 * @see SoundManager.playBuzzer
 */
DKTools.Sprite.Selectable.prototype.playBuzzerSound = function() {
    SoundManager.playBuzzer();
};

// call methods

/**
 * Вызывает обработчик выбора по символу
 *
 * @param {String} symbol - Символ
 */
DKTools.Sprite.Selectable.prototype.callHandler = function(symbol) {
    if (this.isHandled(symbol)) {
        this._handlers[symbol](this._index);
    }
};

/**
 * Вызывает обработчик выбора символа ok
 */
DKTools.Sprite.Selectable.prototype.callOkHandler = function() {
    const symbol = this.getCurrentItemSymbol();
    if (this.isHandled(symbol)) {
        this.callHandler(symbol);
    } else if (this.isHandled('ok')) {
        this.callHandler('ok');
    } else {
        this.activate();
    }
};

/**
 * Вызывает обработчик выбора символа cancel
 */
DKTools.Sprite.Selectable.prototype.callCancelHandler = function() {
    this.callHandler('cancel');
};

// event methods

/**
 * Updates the events with type: select
 */
DKTools.Sprite.Selectable.prototype.updateSelectEvents = function() {
    this.updateEventsContainer('select');
};

// select methods

/**
 * Selects the item by index
 *
 * @param {Number} index - Index
 *
 * @see DKTools.Sprite.Selectable.prototype.setupIndex
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 * @see DKTools.Sprite.Selectable.prototype.updateSelectEvents
 */
DKTools.Sprite.Selectable.prototype.selectItemByIndex = function(index) {
    this.setupIndex(index);
    this.refreshAll();
    this.updateSelectEvents();
};

/**
 * Selects the item
 *
 * @param {Object} item - Item
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemIndex
 * @see DKTools.Sprite.Selectable.prototype.selectItemByIndex
 */
DKTools.Sprite.Selectable.prototype.selectItem = function(item) {
    this.selectItemByIndex(this.getItemIndex(item));
};

/**
 * Selects the item by symbol
 *
 * @param {String} symbol - Symbol
 *
 * @see DKTools.Sprite.Selectable.prototype.findSymbol
 * @see DKTools.Sprite.Selectable.prototype.selectItemByIndex
 */
DKTools.Sprite.Selectable.prototype.selectSymbol = function(symbol) {
    const index = Math.max(0, this.findSymbol(symbol));
    this.selectItemByIndex(index);
};

/**
 * Selects the item by ext
 *
 * @param {*} ext - Ext of the item
 *
 * @see DKTools.Sprite.Selectable.prototype.findExt
 * @see DKTools.Sprite.Selectable.prototype.selectItemByIndex
 */
DKTools.Sprite.Selectable.prototype.selectExt = function(ext) {
    const index = Math.max(0, this.findExt(ext));
    this.selectItemByIndex(index);
};

/**
 * Deselects the current item (selected item)
 */
DKTools.Sprite.Selectable.prototype.deselect = function() {
    this.selectItemByIndex(-1);
};

/**
 * Reselects the current item (selected item)
 */
DKTools.Sprite.Selectable.prototype.reselect = function() {
    this.selectItemByIndex(this._index);
};

/**
 * Selects the previous item
 *
 * @param {Boolean} [wrap=false] - Cyclic selection
 *
 * @see DKTools.Sprite.Selectable.prototype.getPrevIndex
 * @see DKTools.Sprite.Selectable.prototype.selectItemByIndex
 */
DKTools.Sprite.Selectable.prototype.selectPrev = function(wrap) {
    const index = this.getPrevIndex(wrap);
    if (index >= 0) {
        this.selectItemByIndex(index);
    }
};

/**
 * Selects the next item
 *
 * @param {Boolean} [wrap=false] - Cyclic selection
 *
 * @see DKTools.Sprite.Selectable.prototype.getNextIndex
 * @see DKTools.Sprite.Selectable.prototype.selectItemByIndex
 */
DKTools.Sprite.Selectable.prototype.selectNext = function(wrap) {
    const index = this.getNextIndex(wrap);
    if (index >= 0) {
        this.selectItemByIndex(index);
    }
};

// remove methods

/**
 * Удаляет обработчик выбора по символу
 *
 * @param {String} symbol - Символ
 */
DKTools.Sprite.Selectable.prototype.removeHandler = function(symbol) {
    delete this._handlers[symbol];
};

// item methods

/**
 * @private
 * @param {Object} item
 * @returns {Object}
 */
DKTools.Sprite.Selectable.prototype._checkItem = function(item) {
    if (_.isUndefined(item.enabled)) {
        item.enabled = true;
    }
    if (_.isUndefined(item.ext)) {
        item.ext = null;
    }
    if (item.symbol && item.handler) {
        this.setHandler(item.symbol, item.handler);
    }
    return item;
};

/**
 * Removes the item
 *
 * @param {Object} item - Item
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.hasItem
 * @see DKTools.Utils.Array.remove
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 *
 * @returns {Object | null} Removed item or null
 */
DKTools.Sprite.Selectable.prototype.removeItem = function(item, blockRefreshAll) {
    if (!this.hasItem(item)) {
        return null;
    }
    DKTools.Utils.Array.remove(this._items, item);
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return item;
};

/**
 * Removes the item by index
 *
 * @param {Number] index - Index
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.getItem
 * @see DKTools.Sprite.Selectable.prototype.removeItem
 *
 * @returns {Object | null} Removed item or null
 */
DKTools.Sprite.Selectable.prototype.removeItemByIndex = function(index, blockRefreshAll) {
    return this.removeItem(this.getItem(index), blockRefreshAll);
};

/**
 * Removes the items
 *
 * @param {Object[]} items - Items
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.removeItem
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 *
 * @returns {Object[]} Removed items
 */
DKTools.Sprite.Selectable.prototype.removeItems = function(items, blockRefreshAll) {
    const removed = [];
    _.forEach(items, function(item) {
        const removedItem = this.removeItem(item, true);
        if (removedItem) {
            removed.push(removedItem);
        }
    }.bind(this));
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return removed;
};

/**
 * Inserts the item
 *
 * @param {Object} item - Item
 * @param {Number} [index=0] - Index to insert
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Utils.Array.insert
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 */
DKTools.Sprite.Selectable.prototype.insertItem = function(item, index, blockRefreshAll) {
    DKTools.Utils.Array.insert(this._items, this._checkItem(item), index);
    if (!blockRefreshAll) {
        this.refreshAll();
    }
};

/**
 * Inserts the items
 *
 * @param {Object[]} items - Items
 * @param {Number} [index=0] - Index to insert
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.insertItem
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 */
DKTools.Sprite.Selectable.prototype.insertItems = function(items, index, blockRefreshAll) {
    items = _.reverse(items);
    _.forEach(items, function(item) {
        this.insertItem(item, index, true);
    }.bind(this));
    if (!blockRefreshAll) {
        this.refreshAll();
    }
};

/**
 * Adds the item
 *
 * @param {Object} item - Item
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.insertItem
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 */
DKTools.Sprite.Selectable.prototype.addItem = function(item, blockRefreshAll) {
    this.insertItem(item, this.getMaxItems() - 1, true);
    if (!blockRefreshAll) {
        this.refreshAll();
    }
};

/**
 * Adds the items
 *
 * @param {Object[]} items - Items
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.addItem
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 */
DKTools.Sprite.Selectable.prototype.addItems = function(items, blockRefreshAll) {
    _.forEach(items, function(item) {
        this.addItem(item, true);
    }.bind(this));
    if (!blockRefreshAll) {
        this.refreshAll();
    }
};

/**
 * Replaces the item
 *
 * @param {Object} item - Item
 * @param {Number} [index=0] - Index
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 */
DKTools.Sprite.Selectable.prototype.replaceItem = function(item, index, blockRefreshAll) {
    this._items[index || 0] = this._checkItem(item);
    if (!blockRefreshAll) {
        this.refreshAll();
    }
};

/**
 * Enables the item
 *
 * @param {Object} item - Item
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.hasItem
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 */
DKTools.Sprite.Selectable.prototype.enableItem = function(item, blockRefreshAll) {
    if (!this.hasItem(item)) {
        return;
    }
    item.enabled = true;
    if (!blockRefreshAll) {
        this.refreshAll();
    }
};

/**
 * Enables the item by index
 *
 * @param {Number} index - Index
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.getItem
 * @see DKTools.Sprite.Selectable.prototype.enableItem
 */
DKTools.Sprite.Selectable.prototype.enableItemByIndex = function(index, blockRefreshAll) {
    this.enableItem(this.getItem(index), blockRefreshAll);
};

/**
 * Disables the item
 *
 * @param {Object} item - Item
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.hasItem
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 */
DKTools.Sprite.Selectable.prototype.disableItem = function(item, blockRefreshAll) {
    if (!this.hasItem(item)) {
        return;
    }
    item.enabled = false;
    if (!blockRefreshAll) {
        this.refreshAll();
    }
};

/**
 * Disables the item by index
 *
 * @param {Number} index - Index
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.getItem
 * @see DKTools.Sprite.Selectable.prototype.disableItem
 */
DKTools.Sprite.Selectable.prototype.disableItemByIndex = function(index, blockRefreshAll) {
    this.disableItem(this.getItem(index), blockRefreshAll);
};

// find methods

/**
 * Returns the index of the item by symbol
 *
 * @param {Symbol} symbol - Symbol
 * @returns {Number} Index of the item by symbol
 */
DKTools.Sprite.Selectable.prototype.findSymbol = function(symbol) {
    return _.findIndex(this._items, { symbol: symbol });
};

/**
 * Returns the index of the item by ext
 *
 * @param {*} ext - Ext
 * @returns {Number} Index of the item by ext
 */
DKTools.Sprite.Selectable.prototype.findExt = function(ext) {
    return _.findIndex(this._items, { ext: ext });
};

// scroll methods

/**
 * Resets the scroll
 */
DKTools.Sprite.Selectable.prototype.resetScroll = function() {
    if (this._index !== 0) {
        this.selectItemByIndex(0);
    }
};

/**
 * Scrolls down
 */
DKTools.Sprite.Selectable.prototype.scrollDown = function() {
    if (this.getTopRow() + 1 < this.getMaxRows()) {
        this.cursorDown();
    }
};

/**
 * Scrolls up
 */
DKTools.Sprite.Selectable.prototype.scrollUp = function() {
    if (this.getTopRow() > 0) {
        this.cursorUp();
    }
};

/**
 * Scrolls right
 */
DKTools.Sprite.Selectable.prototype.scrollRight = function() {
    if (this.getTopCol() + 1 < this.getMaxItems()) {
        this.cursorRight();
    }
};

/**
 * Scrolls left
 */
DKTools.Sprite.Selectable.prototype.scrollLeft = function() {
    if (this.getTopCol() > 0) {
        this.cursorLeft();
    }
};

// process methods

/**
 * Processes all
 *
 * @override
 */
DKTools.Sprite.Selectable.prototype.processAll = function() {
    DKTools.Sprite.Button.prototype.processAll.call(this);
    this.processCursorMove();
    this.processHandling();
};

/**
 * Processes the move of the cursor
 */
DKTools.Sprite.Selectable.prototype.processCursorMove = function() {
    if (this.isCursorMovable()) {
        const lastIndex = this._index;
        if (Input.isRepeated('down')) {
            this.cursorDown(Input.isTriggered('down'));
        }
        if (Input.isRepeated('up')) {
            this.cursorUp(Input.isTriggered('up'));
        }
        if (Input.isRepeated('right')) {
            this.cursorRight(Input.isTriggered('right'));
        }
        if (Input.isRepeated('left')) {
            this.cursorLeft(Input.isTriggered('left'));
        }
        if (!this.isHandled('pagedown') && Input.isTriggered('pagedown')) {
            this.cursorPagedown();
        }
        if (!this.isHandled('pageup') && Input.isTriggered('pageup')) {
            this.cursorPageup();
        }
        if (this._index !== lastIndex) {
            this.playCursorSound();
        }
    }
};

DKTools.Sprite.Selectable.prototype.processHandling = function() {
    if (this.isVisibleAndActive()) {
        if (this.isOkEnabled() && this.isOkTriggered()) {
            this.processOk();
        } else if (this.isCancelEnabled() && this.isCancelTriggered()) {
            this.processCancel();
        } else if (this.isHandled('pagedown') && Input.isTriggered('pagedown')) {
            this.processPagedown();
        } else if (this.isHandled('pageup') && Input.isTriggered('pageup')) {
            this.processPageup();
        }
    }
};

/**
 * Processes the hover of the mouse
 */
DKTools.Sprite.Selectable.prototype.processMouseHover = function() {
    if (this.isOptionEnabled('mouseHover') && this.isOptionDisabled('mobileDevice') && this.isCursorMovable()) {
        const lastIndex = this._index;
        const x = TouchInput.mouseX;
        const y = TouchInput.mouseY;
        const hitIndex = this.hitTest(x, y);
        if (hitIndex >= 0 && hitIndex !== lastIndex) {
            this.selectItemByIndex(hitIndex);
            this.playCursorSound();
        }
    }
};

/**
 * Processes the scroll of the mouse wheel
 */
DKTools.Sprite.Selectable.prototype.processWheelScroll = function() {
    if (this.isOptionEnabled('wheelScroll') && this.isVisibleAndActive()) {
        const wheelY = this.wheelY;
        if (wheelY > 0) {
            if (this.isHorizontal()) {
                this.scrollRight();
            } else {
                this.scrollDown();
            }
        } else {
            if (this.isHorizontal()) {
                this.scrollLeft();
            } else {
                this.scrollUp();
            }
        }
    }
};

DKTools.Sprite.Selectable.prototype.processOk = function() {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.deactivate();
        this.callOkHandler();
    } else {
        this.playBuzzerSound();
    }
};

DKTools.Sprite.Selectable.prototype.processCancel = function() {
    this.playCancelSound();
    this.updateInputData();
    this.deactivate();
    this.callCancelHandler();
};

DKTools.Sprite.Selectable.prototype.processPageup = function() {
    this.playCursorSound();
    this.updateInputData();
    this.deactivate();
    this.callHandler('pageup');
};

DKTools.Sprite.Selectable.prototype.processPagedown = function() {
    this.playCursorSound();
    this.updateInputData();
    this.deactivate();
    this.callHandler('pagedown');
};

// update methods

/**
 * Updates all
 *
 * @override
 */
DKTools.Sprite.Selectable.prototype.updateAll = function() {
    DKTools.Sprite.Button.prototype.updateAll.call(this);
    this.updateCursor();
};

/**
 * Updates the cursor
 */
DKTools.Sprite.Selectable.prototype.updateCursor = function() {
    if (this.isHorizontal()) {
        const col = this.getCurrentCol();
        if (col < this.getTopCol()) {
            this.setTopCol(col);
        } else if (col > this.getBottomCol()) {
            this.setBottomCol(col);
        }
    } else {
        const row = this.getCurrentRow();
        if (row < this.getTopRow()) {
            this.setTopRow(row);
        } else if (row > this.getBottomRow()) {
            this.setBottomRow(row);
        }
    }
    if (this.isCursorAll()) {
        const allRowsHeight = this.getMaxRows() * this.getItemHeight();
        this.setCursorRect(0, 0, this.realWidth, allRowsHeight);
        this.resetScroll();
    } else if (this.isCursorVisible() || !this._cursorSprite.hasBitmap()) {
        const rect = this.getItemRectByIndex(this._index);
        this.setCursorRect(rect);
    } else {
        this.setCursorRect(Rectangle.emptyRectangle);
    }
};





//===========================================================================
// DKTools.Sprite.ProgressBar
//===========================================================================

DKTools.Sprite.ProgressBar.prototype = Object.create(DKTools.Sprite.prototype);
DKTools.Sprite.ProgressBar.prototype.constructor = DKTools.Sprite.ProgressBar;

// properties

Object.defineProperties(DKTools.Sprite.ProgressBar.prototype, {

    /**
     * Value step
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Sprite.ProgressBar.prototype
     */
    valueStep: {
        get: function() {
            return this._valueStep;
        },
        configurable: true
    },

    /**
     * Maximum value
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Sprite.ProgressBar.prototype
     */
    maxValue: {
        get: function() {
            return this._maxValue;
        },
        configurable: true
    },

    /**
     * Value
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Sprite.ProgressBar.prototype
     */
    value: {
        get: function() {
            return this._value;
        },
        configurable: true
    },

    /**
     * Background color
     *
     * @readonly
     * @type {String}
     * @memberOf DKTools.Sprite.ProgressBar.prototype
     */
    backgroundColor: {
        get: function() {
            return this._backgroundColor;
        },
        configurable: true
    },

    /**
     * Progress color
     *
     * @readonly
     * @type {String}
     * @memberOf DKTools.Sprite.ProgressBar.prototype
     */
    progressColor: {
        get: function() {
            return this._progressColor;
        },
        configurable: true
    },

    /**
     * Handler of draw of graphic
     *
     * @readonly
     * @type {Function}
     * @memberOf DKTools.Sprite.ProgressBar.prototype
     */
    drawGraphicHandler: {
        get: function() {
            return this._drawGraphicHandler;
        },
        configurable: true
    },

    /**
     * Handler of draw of text
     *
     * @readonly
     * @type {Function}
     * @memberOf DKTools.Sprite.ProgressBar.prototype
     */
    drawTextHandler: {
        get: function() {
            return this._drawTextHandler;
        },
        configurable: true
    }

});

// standard methods

/**
 * Returns the standard activity of the progress bar
 *
 * @override
 * @returns {Boolean} Standard activity of the progress bar
 */
DKTools.Sprite.ProgressBar.prototype.standardActive = function() {
    return false;
};

/**
 * Returns the standard value step
 *
 * @returns {Number} Standard value step
 */
DKTools.Sprite.ProgressBar.prototype.standardValueStep = function() {
    return 1;
};

/**
 * Returns the standard maximum value
 *
 * @returns {Number} Standard maximum value
 */
DKTools.Sprite.ProgressBar.prototype.standardMaxValue = function() {
    return 100;
};

/**
 * Returns the standard value
 *
 * @returns {Number} Standard value
 */
DKTools.Sprite.ProgressBar.prototype.standardValue = function() {
    return 0;
};

/**
 * Returns the standard background color
 *
 * @returns {String} Standard background color
 */
DKTools.Sprite.ProgressBar.prototype.standardBackgroundColor = function() {
    return 'grey';
};

/**
 * Returns the standard progress color
 *
 * @returns {String} Standard progress color
 */
DKTools.Sprite.ProgressBar.prototype.standardProgressColor = function() {
    return '#33ccff';
};

/**
 * Returns the standard handler of draw of graphic
 *
 * @returns {null} Standard handler of draw of graphic
 */
DKTools.Sprite.ProgressBar.prototype.standardDrawGraphicHandler = function() {
    return null;
};

/**
 * Returns the standard handler of draw of text
 *
 * @returns {null} Standard handler of draw of text
 */
DKTools.Sprite.ProgressBar.prototype.standardDrawTextHandler = function() {
    return null;
};

// setup methods

/**
 * Sets all parameters
 *
 * @override
 *
 * @param {Object | null} [object={}] - Parameters
 *
 * @param {Number} [object.valueStep] - Value step
 * @param {Number} [object.maxValue] - Maximum value
 * @param {Number} [object.value] - Value
 * @param {String} [object.backgroundColor] - Background color
 * @param {String} [object.progressColor] - Progress color
 * @param {Function} [object.drawGraphicHandler] - Handler of draw of graphic
 * @param {Function} [object.drawTextHandler] - Handler of draw of text
 *
 * @see DKTools.Sprite.prototype.setupAll
 * @see DKTools.Sprite.ProgressBar.setupValueStep
 * @see DKTools.Sprite.ProgressBar.setupMaxValue
 * @see DKTools.Sprite.ProgressBar.setupValue
 * @see DKTools.Sprite.ProgressBar.setupBackgroundColor
 * @see DKTools.Sprite.ProgressBar.setupProgressColor
 * @see DKTools.Sprite.ProgressBar.setupDrawGraphicHandler
 * @see DKTools.Sprite.ProgressBar.setupDrawTextHandler
 */
DKTools.Sprite.ProgressBar.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.Sprite.prototype.setupAll.call(this, object);
    this.setupValueStep(object.valueStep);
    this.setupMaxValue(object.maxValue);
    this.setupValue(object.value);
    this.setupBackgroundColor(object.progressColor);
    this.setupProgressColor(object.progressColor);
    this.setupDrawGraphicHandler(object.drawGraphicHandler);
    this.setupDrawTextHandler(object.drawTextHandler);
};

/**
 * Sets the value step
 *
 * @param {Number} [step=this.standardValueStep()] - Value step
 *
 * @see DKTools.Sprite.ProgressBar.prototype.standardValueStep
 */
DKTools.Sprite.ProgressBar.prototype.setupValueStep = function(step) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._valueStep = step || this.standardValueStep();
};

/**
 * Sets the maximum value
 *
 * @param {Number} [max=this.standardMaxValue()] - Maximum value
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setupMaxValue
 */
DKTools.Sprite.ProgressBar.prototype.setupMaxValue = function(max) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._maxValue = max || this.standardMaxValue();
};

/**
 * Sets the value
 *
 * @param {Number} [value=this.standardValue()] - Value
 *
 * @see DKTools.Sprite.ProgressBar.prototype.standardValue
 */
DKTools.Sprite.ProgressBar.prototype.setupValue = function(value) {
    const max = this._maxValue;
    const newValue = Math.max(0, Math.min(value, max));

    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._value = Number.isNaN(newValue) ? this.standardValue() : newValue;
};

/**
 * Sets the background color
 *
 * @param {String} [color=this.standardBackgroundColor()] - Background color
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setupBackgroundColor
 */
DKTools.Sprite.ProgressBar.prototype.setupBackgroundColor = function(color) {
    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._backgroundColor = color || this.standardBackgroundColor();
};

/**
 * Sets the progress color
 *
 * @param {String} [color=this.standardProgressColor()] - Progress color
 *
 * @see DKTools.Sprite.ProgressBar.prototype.standardProgressColor
 */
DKTools.Sprite.ProgressBar.prototype.setupProgressColor = function(color) {
    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._progressColor = color || this.standardProgressColor();
};

/**
 * Sets the handler of draw of graphic
 *
 * @param {Function} [handler=this.standardDrawGraphicHandler()] - Handler of draw of graphic
 *
 * @see DKTools.Sprite.ProgressBar.prototype.standardDrawGraphicHandler
 */
DKTools.Sprite.ProgressBar.prototype.setupDrawGraphicHandler = function(handler) {
    /**
     * @private
     * @readonly
     * @type {Function}
     */
    this._drawGraphicHandler = handler || this.standardDrawGraphicHandler();
};

/**
 * Sets the handler of draw of text
 *
 * @param {Function} [handler=this.standardDrawTextHandler()] - Handler of draw of text
 *
 * @see DKTools.Sprite.ProgressBar.prototype.standardDrawTextHandler
 */
DKTools.Sprite.ProgressBar.prototype.setupDrawTextHandler = function(handler) {
    /**
     * @private
     * @readonly
     * @type {Function}
     */
    this._drawTextHandler = handler || this.standardDrawTextHandler();
};

// set methods

/**
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the progress bar
 *
 * @param {Number} [object.valueStep] - Value step
 * @param {Number} [object.maxValue] - Maximum value
 * @param {Number} [object.value] - Value
 * @param {String} [object.backgroundColor] - Background color
 * @param {String} [object.progressColor] - Progress color
 * @param {Function} [object.drawGraphicHandler] - Handler of draw of graphic
 * @param {Function} [object.drawTextHandler] - Handler of draw of text
 *
 * @see DKTools.Sprite.prototype.setAll
 * @see DKTools.Sprite.ProgressBar.prototype.setValueStep
 * @see DKTools.Sprite.ProgressBar.prototype.setMaxValue
 * @see DKTools.Sprite.ProgressBar.prototype.setValue
 * @see DKTools.Sprite.ProgressBar.prototype.setBackgroundColor
 * @see DKTools.Sprite.ProgressBar.prototype.setProgressColor
 * @see DKTools.Sprite.ProgressBar.prototype.setDrawGraphicHandler
 * @see DKTools.Sprite.ProgressBar.prototype.setDrawTextHandler
 * @see DKTools.Sprite.ProgressBar.prototype.start
 * @see DKTools.Sprite.ProgressBar.prototype.activate
 *
 * @returns {Number} Number of changed parameters
 */
DKTools.Sprite.ProgressBar.prototype.setAll = function(object, blockStart, activate) {
    object = object || {};
    const block = true;
    let changed = DKTools.Sprite.prototype.setAll.call(this, object, block);
    if (this.setValueStep(object.valueStep, block)) {
        changed++;
    }
    if (this.setMaxValue(object.maxValue, block)) {
        changed++;
    }
    if (this.setValue(object.value, block)) {
        changed++;
    }
    if (this.setBackgroundColor(object.backgroundColor, block)) {
        changed++;
    }
    if (this.setProgressColor(object.progressColor, block)) {
        changed++;
    }
    if (this.setDrawGraphicHandler(object.drawGraphicHandler, block)) {
        changed++;
    }
    if (this.setDrawTextHandler(object.drawTextHandler, block)) {
        changed++;
    }
    if (changed) {
        if (!blockStart) {
            this.start();
        }
        if (activate) {
            this.activate();
        }
    }
    return changed;
};

/**
 * Changes the value step
 * Returns true if the change occurred
 *
 * @param {Number} [step] - Шаг значения
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setupValueStep
 * @see DKTools.Sprite.ProgressBar.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.ProgressBar.prototype.setValueStep = function(step, blockRefreshAll) {
    if (this._valueStep === step) {
        return false;
    }
    const lastStep = this._valueStep;
    this.setupValueStep(step);
    if (this._valueStep === lastStep) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

/**
 * Changes the maximum value
 * Returns true if the change occurred
 *
 * @param {Number} [max] - Maximum value
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setupMaxValue
 * @see DKTools.Sprite.ProgressBar.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.ProgressBar.prototype.setMaxValue = function(max, blockRefreshAll) {
    if (this._maxValue === max) {
        return false;
    }
    const lastMax = this._maxValue;
    this.setupMaxValue(max);
    if (this._maxValue === lastMax) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

/**
 * Changes the value
 * Returns true if the change occurred
 *
 * @param {Number} [value] - Value
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setupValue
 * @see DKTools.Sprite.ProgressBar.prototype.refreshAll
 * @see DKTools.Sprite.ProgressBar.prototype.updateValueEvents
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.ProgressBar.prototype.setValue = function(value, blockRefreshAll) {
    if (this._value === value) {
        return false;
    }
    const lastValue = this._value;
    this.setupValue(value);
    if (this._value === lastValue) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    this.updateValueEvents();
    return true;
};

/**
 * Changes the background color
 * Returns true if the change occurred
 *
 * @param {String} [color] - Background color
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setupBackgroundColor
 * @see DKTools.Sprite.ProgressBar.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.ProgressBar.prototype.setBackgroundColor = function(color, blockRefreshAll) {
    if (this._backgroundColor === color) {
        return false;
    }
    const lastColor = this._backgroundColor;
    this.setupBackgroundColor(color);
    if (this._backgroundColor === lastColor) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

/**
 * Changes the progress color
 * Returns true if the change occurred
 *
 * @param {String} [color] - Progress color
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setupProgressColor
 * @see DKTools.Sprite.ProgressBar.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.ProgressBar.prototype.setProgressColor = function(color, blockRefreshAll) {
    if (this._progressColor === color) {
        return false;
    }
    const lastColor = this._progressColor;
    this.setupProgressColor(color);
    if (this._progressColor === lastColor) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

/**
 * Changes the handler of draw of graphic
 * Returns true if the change occurred
 *
 * @param {Funciton} [handler] - Handler of draw of graphic
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setupDrawGraphicHandler
 * @see DKTools.Sprite.ProgressBar.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.ProgressBar.prototype.setDrawGraphicHandler = function(handler, blockRefreshAll) {
    if (this._drawGraphicHandler === handler) {
        return false;
    }
    this.setupDrawGraphicHandler(handler);
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

/**
 * Changes the handler of draw of text
 * Returns true if the change occurred
 *
 * @param {Funciton} [handler] - Handler of draw of text
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setupDrawTextHandler
 * @see DKTools.Sprite.ProgressBar.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.ProgressBar.prototype.setDrawTextHandler = function(handler, blockRefreshAll) {
    if (this._drawTextHandler === handler) {
        return false;
    }
    this.setupDrawTextHandler(handler);
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

// can methods

/**
 * Returns true if the progress bar can clone the fixed bitmap
 *
 * @override
 * @returns {Boolean} Progress bar can clone the fixed bitmap
 */
DKTools.Sprite.ProgressBar.prototype.canCloneFixedBitmap = function() {
    return false;
};

// is methods

/**
 * Returns true if the progress bar is horizontal
 *
 * @returns {Boolean} Progress bar is horizontal
 */
DKTools.Sprite.ProgressBar.prototype.isHorizontal = function() {
    return this.width > this.height;
};

/**
 * Returns true if the progress bar is vertical
 *
 * @see DKTools.Sprite.ProgressBar.prototype.isHorizontal
 *
 * @returns {Boolean} Progress bar is vertical
 */
DKTools.Sprite.ProgressBar.prototype.isVertical = function() {
    return !this.isHorizontal();
};

/**
 * Returns true if the progress bar is empty
 *
 * @returns {Boolean} Progress bar is empty
 */
DKTools.Sprite.ProgressBar.prototype.isEmpty = function() {
    return this._value === 0;
};

/**
 * Returns true if the progress bar is full
 *
 * @returns {Boolean} Progress bar is full
 */
DKTools.Sprite.ProgressBar.prototype.isFull = function() {
    return this._value === this._maxValue;
};

// events methods

/**
 * Updates the events
 *
 * @override
 *
 * @see DKTools.Sprite.prototype.updateEvents
 * @see DKTools.Sprite.ProgressBar.prototype.updateEmptyEvents
 * @see DKTools.Sprite.ProgressBar.prototype.updateFullEvents
 */
DKTools.Sprite.ProgressBar.prototype.updateEvents = function() {
    DKTools.Sprite.prototype.updateEvents.call(this);
    this.updateEmptyEvents();
    this.updateFullEvents();
};

/**
 * Updates the events with type: value
 *
 * @see DKTools.Sprite.ProgressBar.prototype.updateEventsContainer
 */
DKTools.Sprite.ProgressBar.prototype.updateValueEvents = function() {
    this.updateEventsContainer('value');
};

/**
 * Updates the events with type: empty
 *
 * @see DKTools.Sprite.ProgressBar.prototype.isEmpty
 * @see DKTools.Sprite.ProgressBar.prototype.updateEventsContainer
 */
DKTools.Sprite.ProgressBar.prototype.updateEmptyEvents = function() {
    if (this.isEmpty()) {
        this.updateEventsContainer('empty');
    }
};

/**
 * Updates the events with type: full
 *
 * @see DKTools.Sprite.ProgressBar.prototype.isFull
 * @see DKTools.Sprite.ProgressBar.prototype.updateEventsContainer
 */
DKTools.Sprite.ProgressBar.prototype.updateFullEvents = function() {
    if (this.isFull()) {
        this.updateEventsContainer('full');
    }
};

/**
 * Handler of update of animate the value
 *
 * @private
 *
 * @param {Number} value - Value
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setValue
 */
DKTools.Sprite.ProgressBar.prototype._updateAnimateValue = function(value, event) {
    const remainingTime = event.remainingTime;
    const newValue = (this._value * (remainingTime - 1) + value) / remainingTime;
    this.setValue(newValue);
};

/**
 * Animates the value
 * Returns the update event
 *
 * @param {Number} value - Value
 * @param {Number} duration - Duration of animation
 *
 * @see DKTools.Sprite.ProgressBar.prototype.addEvent
 * @see DKTools.Sprite.ProgressBar.prototype._updateAnimateValue
 *
 * @returns {DKTools.Event} Update event
 */
DKTools.Sprite.ProgressBar.prototype.animateValue = function(value, duration) {
    return this.addEvent({
        type: 'update',
        repeatTime: duration,
        repeats: 0,
        onUpdate: this._updateAnimateValue.bind(this, value)
    });
};

/**
 * Animates the empty value
 * Returns the update event
 *
 * @param {Number} duration - Duration of animation
 *
 * @see DKTools.Sprite.ProgressBar.prototype.animateValue
 *
 * @returns {DKTools.Event} Update event
 */
DKTools.Sprite.ProgressBar.prototype.animateEmpty = function(duration) {
    return this.animateValue(0, duration);
};

/**
 * Animates the full value
 * Returns the update event
 *
 * @param {Number} duration - Duration of animation
 *
 * @see DKTools.Sprite.ProgressBar.prototype.animateValue
 *
 * @returns {DKTools.Event} Update event
 */
DKTools.Sprite.ProgressBar.prototype.aimateFull = function(duration) {
    return this.animateValue(this._maxValue, duration);
};

// _draw methods

/**
 * Draws the graphic of progress
 *
 * @private
 *
 * @see DKTools.Sprite.ProgressBar.prototype.hasDrawGraphicHandler
 */
DKTools.Sprite.ProgressBar.prototype._drawProgressGraphic = function() {
    if (this.hasDrawGraphicHandler()) {
        this._drawGraphicHandler(this);
    }
};

/**
 * Draws the text of progress
 *
 * @private
 *
 * @see DKTools.Sprite.ProgressBar.prototype.hasDrawTextHandler
 */
DKTools.Sprite.ProgressBar.prototype._drawProgressText = function() {
    if (this.hasDrawTextHandler()) {
        this._drawTextHandler(this);
    }
};

// draw methods

/**
 * Draws all
 *
 * @override
 */
DKTools.Sprite.ProgressBar.prototype.drawAll = function() {
    DKTools.Sprite.prototype.drawAll.call(this);
    this.drawProgress();
};

/**
 * Draws the progress
 *
 * @see DKTools.Sprite.ProgressBar.prototype._drawProgressGraphic
 * @see DKTools.Sprite.ProgressBar.prototype._drawProgressText
 */
DKTools.Sprite.ProgressBar.prototype.drawProgress = function() {
    this._drawProgressGraphic();
    this._drawProgressText();
};

// has methods

/**
 * Returns true if the progress bar has the handler of draw of graphic
 *
 * @returns {Boolean} Progress bar has the handler of draw of graphic
 */
DKTools.Sprite.ProgressBar.prototype.hasDrawGraphicHandler = function() {
    return !!this._drawGraphicHandler;
};

/**
 * Returns true if the progress bar has the handler of draw of text
 *
 * @returns {Boolean} Progress bar has the handler of draw of text
 */
DKTools.Sprite.ProgressBar.prototype.hasDrawTextHandler = function() {
    return !!this._drawTextHandler;
};

// get methods

/**
 * Returns the current value in percent
 *
 * @returns {Number} Current value in percent
 */
DKTools.Sprite.ProgressBar.prototype.getPercents = function() {
    return Math.ceil(this._value / this._maxValue * 100);
};

/**
 * Returns the previous value
 *
 * @returns {Number} Previous value
 */
DKTools.Sprite.ProgressBar.prototype.getPrevValue = function() {
    return Math.max(0, this._value - this._valueStep);
};

/**
 * Returns the next value
 *
 * @returns {Number} Next value
 */
DKTools.Sprite.ProgressBar.prototype.getNextValue = function() {
    return Math.min(this._value + this._valueStep, this._maxValue);
};

// add methods

/**
 * Adds the value
 *
 * @param {Number} value - Value
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setValue
 */
DKTools.Sprite.ProgressBar.prototype.addValue = function(value) {
    if (value) {
        this.setValue(this._value + value);
    }
};

// remove methods

/**
 * Removes the value
 *
 * @param {Number} value - Value
 *
 * @see DKTools.Sprite.ProgressBar.prototype.addValue
 */
DKTools.Sprite.ProgressBar.prototype.removeValue = function(value) {
    this.addValue(-value);
};

// value methods

/**
 * Sets the previous value
 * Returns true if the change occurred
 *
 * @see DKTools.Sprite.ProgressBar.prototype.getPrevValue
 * @see DKTools.Sprite.ProgressBar.prototype.setValue
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.ProgressBar.prototype.prevValue = function() {
    return this.setValue(this.getPrevValue());
};

/**
 * Sets the next value
 * Returns true if the change occurred
 *
 * @see DKTools.Sprite.ProgressBar.prototype.getNextValue
 * @see DKTools.Sprite.ProgressBar.prototype.setValue
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.ProgressBar.prototype.nextValue = function() {
    return this.setValue(this.getNextValue());
};

/**
 * Makes the progress bar empty
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setValue
 */
DKTools.Sprite.ProgressBar.prototype.makeEmpty = function() {
    this.setValue(0);
};

/**
 * Makes the progress bar full
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setValue
 */
DKTools.Sprite.ProgressBar.prototype.makeFull = function() {
    this.setValue(this._maxValue);
};





//===========================================================================
// DKTools.Sprite.ProgressBar.Rectangle
//===========================================================================

DKTools.Sprite.ProgressBar.Rectangle.prototype = Object.create(DKTools.Sprite.ProgressBar.prototype);
DKTools.Sprite.ProgressBar.Rectangle.prototype.constructor = DKTools.Sprite.ProgressBar.Rectangle;

// standard methods

/**
 * Returns the standard handler of draw of graphic for horizontal progress bar
 *
 * @returns {Function} Standard handler of draw of graphic for horizontal progress bar
 */
DKTools.Sprite.ProgressBar.Rectangle.prototype.standardHorizontalDrawGraphicHandler = function() {
    return function() {
        this.fillAll(this._backgroundColor);
        if (!this.isEmpty()) {
            this.fillRect({
                color: this._progressColor,
                width: this._value * this.realWidth / this._maxValue
            });
        }
    }.bind(this);
};

/**
 * Returns the standard handler of draw of graphic for vertical progress bar
 *
 * @returns {Function} Standard handler of draw of graphic for vertical progress bar
 */
DKTools.Sprite.ProgressBar.Rectangle.prototype.standardVerticalDrawGraphicHandler = function() {
    return function() {
        this.fillAll(this._backgroundColor);
        if (!this.isEmpty()) {
            const realHeight = this.realHeight;
            const height = this._value * realHeight / this._maxValue;
            this.fillRect({
                color: this._progressColor,
                y: realHeight - height,
                width: this.realWidth,
                height: height
            });
        }
    }.bind(this);
};

/**
 * Returns the standard handler of draw of graphic
 *
 * @override
 *
 * @see DKTools.Sprite.ProgressBar.Rectangle.prototype.isHorizontal
 * @see DKTools.Sprite.ProgressBar.Rectangle.prototype.standardHorizontalDrawGraphicHandler
 * @see DKTools.Sprite.ProgressBar.Rectangle.prototype.standardVerticalDrawGraphicHandler
 *
 * @returns {Function} Standard handler of draw of graphic
 */
DKTools.Sprite.ProgressBar.Rectangle.prototype.standardDrawGraphicHandler = function() {
    return function(progressBar) {
        let handler;
        if (this.isHorizontal()) {
            handler = this.standardHorizontalDrawGraphicHandler();
        } else {
            handler = this.standardVerticalDrawGraphicHandler();
        }
        if (handler) {
            handler(progressBar);
        }
    }.bind(this);
};

/**
 * Returns the standard handler of draw of text
 *
 * @override
 * @returns {Function} Standard handler of draw of text
 */
DKTools.Sprite.ProgressBar.Rectangle.prototype.standardDrawTextHandler = function() {
    return function() {
        const percents = this.getPercents();
        const text = `${percents}%`;
        this.drawText(text, {
            height: this.realHeight
        });
    }.bind(this);
};





//===========================================================================
// DKTools.Sprite.ProgressBar.Circle
//===========================================================================

DKTools.Sprite.ProgressBar.Circle.prototype = Object.create(DKTools.Sprite.ProgressBar.prototype);
DKTools.Sprite.ProgressBar.Circle.prototype.constructor = DKTools.Sprite.ProgressBar.Circle;

// properties

Object.defineProperties(DKTools.Sprite.ProgressBar.Circle.prototype, {

    /**
     * Line width
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Sprite.ProgressBar.Circle.prototype
     */
    lineWidth: {
        get: function() {
            return this._lineWidth;
        },
        configurable: true
    }

});

// standard methods

/**
 * Returns the standard handler of draw of graphic
 *
 * @override
 * @returns {Function} Standard handler of draw of graphic
 */
DKTools.Sprite.ProgressBar.Circle.prototype.standardDrawGraphicHandler = function() {
    return function() {
        const lineWidth = this._lineWidth;
        const realWidth = this.realWidth;
        const radius = (realWidth - lineWidth) / 2;
        const x = radius + lineWidth / 2;
        const y = x;

        this.strokeArc({
            radius: radius,
            color: this._backgroundColor,
            lineWidth: lineWidth,
            x: x,
            y: y
        });

        this.strokeArc({
            radius: radius,
            startAngle: -Math.PI / 2,
            endAngle: -Math.PI / 2 + Math.PI * 2 * this._value / this._maxValue,
            color: this._progressColor,
            lineWidth: lineWidth,
            x: x,
            y: y
        });
    }.bind(this);
};

/**
 * Returns the standard handler of draw of text
 *
 * @override
 * @returns {Function} Standard handler of draw of text
 */
DKTools.Sprite.ProgressBar.Circle.prototype.standardDrawTextHandler = function() {
    return function() {
        const percents = this.getPercents();
        const text = `${percents}%`;
        this.drawText(text, { height: this.realHeight });
    }.bind(this);
};

/**
 * Returns the standard line width
 *
 * @returns {Number} Standard line width
 */
DKTools.Sprite.ProgressBar.Circle.prototype.standardLineWidth = function() {
    return 10;
};

// setup methods

/**
 * Sets all parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 *
 * @param {Number} [object.lineWidth] - Line width
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setupAll
 * @see DKTools.Sprite.ProgressBar.Circle.prototype.setupLineWidth
 */
DKTools.Sprite.ProgressBar.Circle.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.Sprite.ProgressBar.prototype.setupAll.call(this, object);
    this.setupLineWidth(object.lineWidth);
};

/**
 * Sets the line width
 *
 * @param {Number} [width=this.standardLineWidth()] - Line width
 *
 * @see DKTools.Sprite.ProgressBar.Circle.prototype.standardLineWidth
 */
DKTools.Sprite.ProgressBar.Circle.prototype.setupLineWidth = function(width) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._lineWidth = width || this.standardLineWidth();
};

// set methods

/**
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the progress bar
 *
 * @param {Number} [object.lineWidth] - Line width
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setAll
 * @see DKTools.Sprite.ProgressBar.Circle.prototype.setLineWidth
 * DKTools.Sprite.ProgressBar.Circle.prototype.start
 * DKTools.Sprite.ProgressBar.Circle.prototype.activate
 *
 * @returns {Number} Number of changed parameters
 */
DKTools.Sprite.ProgressBar.Circle.prototype.setAll = function(object, blockStart, activate) {
    object = object || {};
    const block = true;
    let changed = DKTools.Sprite.ProgressBar.prototype.setAll.call(this, object, block);
    if (this.setLineWidth(object.lineWidth, block)) {
        changed++;
    }
    if (changed) {
        if (!blockStart) {
            this.start();
        }
        if (activate) {
            this.activate();
        }
    }
    return changed;
};

/**
 * Changes the line width
 * Returns true if the change occurred
 *
 * @param {Number} [width] - Line width
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.ProgressBar.Circle.prototype.setupLineWidth
 * @see DKTools.Sprite.ProgressBar.Circle.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.ProgressBar.Circle.prototype.setLineWidth = function(width, blockRefreshAll) {
    if (this._lineWidth === width) {
        return false;
    }
    const lastWidth = this._lineWidth;
    this.setupLineWidth(width);
    if (this._lineWidth === lastWidth) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};





//===========================================================================
// DKTools.Sprite.ProgressBar.SemiCircle
//===========================================================================

DKTools.Sprite.ProgressBar.SemiCircle.prototype = Object.create(DKTools.Sprite.ProgressBar.Circle.prototype);
DKTools.Sprite.ProgressBar.SemiCircle.prototype.constructor = DKTools.Sprite.ProgressBar.SemiCircle;

/**
 * Returns the standard handler of draw of graphic
 *
 * @override
 * @returns {Function} Standard handler of draw of graphic
 */
DKTools.Sprite.ProgressBar.SemiCircle.prototype.standardDrawGraphicHandler = function() {
    return function() {
        const lineWidth = this._lineWidth;
        const realWidth = this.realWidth;
        const radius = (realWidth - lineWidth) / 2;
        const x = radius + lineWidth / 2;
        const y = this.realHeight;

        this.strokeArc({
            radius: radius,
            startAngle: Math.PI,
            color: this._backgroundColor,
            lineWidth: lineWidth,
            x: x,
            y: y
        });

        this.strokeArc({
            radius: radius,
            startAngle: Math.PI,
            endAngle: -Math.PI + Math.PI * this._value / this._maxValue,
            color: this._progressColor,
            lineWidth: lineWidth,
            x: x,
            y: y
        });
    }.bind(this);
};





//===========================================================================
// DKTools.Sprite.CheckBox
//===========================================================================

DKTools.Sprite.CheckBox.prototype = Object.create(DKTools.Sprite.Button.prototype);
DKTools.Sprite.CheckBox.prototype.constructor = DKTools.Sprite.CheckBox;

// properties

Object.defineProperties(DKTools.Sprite.CheckBox.prototype, {

    /**
     * @readonly
     * @type {Boolean}
     * @memberOf DKTools.Sprite.CheckBox.prototype
     */
    checked: {
        get: function() {
            return this._checked;
        },
        configurable: true
    },

    /**
     * @readonly
     * @type {Bitmap | String | Object}
     * @memberOf DKTools.Sprite.CheckBox.prototype
     */
    checkedGraphic: {
        get: function() {
            return this._checkedGraphic;
        },
        configurable: true
    },

    /**
     * @readonly
     * @type {Bitmap | String | Object}
     * @memberOf DKTools.Sprite.CheckBox.prototype
     */
    uncheckedGraphic: {
        get: function() {
            return this._uncheckedGraphic;
        },
        configurable: true
    },

});

// standard methods

/**
 * Returns the stadnard
 *
 * @returns {Boolean}
 */
DKTools.Sprite.CheckBox.prototype.standardChecked = function() {
    return false;
};

/**
 * Returns the stadnard
 *
 * @returns {null}
 */
DKTools.Sprite.CheckBox.prototype.standardCheckedGraphic = function() {
    return null;
};

/**
 * Returns the stadnard
 *
 * @returns {null}
 */
DKTools.Sprite.CheckBox.prototype.standardUncheckedGraphic = function() {
    return null;
};

// setup methods

/**
 * Sets all parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 *
 * @param {Boolean} [object.checked] -
 * @param {Bitmap | String | Object} [object.checkedGraphic] -
 * @param {Bitmap | String | Object} [object.uncheckedGraphic] -
 *
 * @see DKTools.Sprite.Button.prototype.setupAll
 * @see DKTools.Sprite.CheckBox.prototype.setupChecked
 * @see DKTools.Sprite.CheckBox.prototype.setupCheckedGraphic
 * @see DKTools.Sprite.CheckBox.prototype.setupUncheckedGraphic
 */
DKTools.Sprite.CheckBox.prototype.setupAll = function(object) {
    DKTools.Sprite.Button.prototype.setupAll.call(this, object);
    this.setupChecked(object.checked);
    this.setupCheckedGraphic(object.checkedGraphic);
    this.setupUncheckedGraphic(object.uncheckedGraphic);
};

/**
 * Sets the
 *
 * @param {Boolean} [checked=this.standardChecked()] -
 *
 * @see DKTools.Sprite.CheckBox.prototype.standardChecked
 */
DKTools.Sprite.CheckBox.prototype.setupChecked = function(checked) {
    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._checked = checked == null ? this.standardChecked() : checked;
};

/**
 * Sets the
 *
 * @param {Bitmap | String | Object} [graphic=this.standardCheckedGraphic()] -
 *
 * @see DKTools.Sprite.CheckBox.prototype.standardCheckedGraphic
 */
DKTools.Sprite.CheckBox.prototype.setupCheckedGraphic = function(graphic) {
    /**
     * @private
     * @readonly
     * @type {Bitmap | String | Object}
     */
    this._checkedGraphic = graphic || this.standardCheckedGraphic();
};

/**
 * Sets the
 *
 * @param {Bitmap | String | Object} [graphic=this.standardUncheckedGraphic()] -
 *
 * @see DKTools.Sprite.CheckBox.prototype.standardUncheckedGraphic
 */
DKTools.Sprite.CheckBox.prototype.setupUncheckedGraphic = function(graphic) {
    /**
     * @private
     * @readonly
     * @type {Bitmap | String | Object}
     */
    this._uncheckedGraphic = graphic || this.standardUncheckedGraphic();
};

// set methods

/**
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the check box
 *
 *
 *
 * @see DKTools.Sprite.Button.prototype.setAll
 * @see DKTools.Sprite.CheckBox.prototype.setChecked
 * @see DKTools.Sprite.CheckBox.prototype.setCheckedGraphic
 * @see DKTools.Sprite.CheckBox.prototype.setUncheckedGraphic
 * @see DKTools.Sprite.CheckBox.prototype.start
 * @see DKTools.Sprite.CheckBox.prototype.activate
 *
 * @returns {Number} Number of changed parameters
 */
DKTools.Sprite.CheckBox.prototype.setAll = function(object, blockStart, activate) {
    object = object || {};
    const block = true;
    let changed = DKTools.Sprite.Button.prototype.setAll.call(this, object, block);
    if (this.setChecked(object.checked, block)) {
        changed++;
    }
    if (this.setCheckedGraphic(object.checkedGraphic, block)) {
        changed++;
    }
    if (this.setUncheckedGraphic(object.uncheckedGraphic, block)) {
        changed++;
    }
    if (changed) {
        if (!blockStart) {
            this.start();
        }
        if (activate) {
            this.activate();
        }
    }
    return changed;
};

/**
 * Changes the
 * Returns true if the change occurred
 *
 * @param {Boolean} [checked] -
 * @param {Boolean} [blockRefreshAll=false] -
 *
 * @see DKTools.Sprite.CheckBox.prototype.setupChecked
 * @see DKTools.Sprite.CheckBox.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.CheckBox.prototype.setChecked = function(checked, blockRefreshAll) {
    if (this._checked === checked) {
        return false;
    }
    const lastChecked = this._checked;
    this.setupChecked(checked);
    if (this._checked === lastChecked) {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

/**
 * Changes the
 * Returns true if the change occurred
 *
 * @param {Bitmap | String | Object} [graphic] -
 * @param {Boolean} [blockRefreshAll=false]
 *
 * @see DKTools.Sprite.CheckBox.prototype.setupCheckedGraphic
 * @see DKTools.Sprite.CheckBox.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.CheckBox.prototype.setCheckedGraphic = function(graphic, blockRefreshAll) {
    const checkedGraphic = this._checkedGraphic;
    if (checkedGraphic == graphic) {
        return false;
    }
    if (checkedGraphic instanceof Bitmap) {
        this.setupCheckedGraphic(graphic);
    } else if (_.isString(checkedGraphic) || checkedGraphic instanceof Object) {
        const lastGraphic = checkedGraphic;
        this.setupCheckedGraphic(graphic);
        if (_.isEqual(this._checkedGraphic, lastGraphic)) {
            return false;
        }
    } else {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

/**
 * Changes the
 * Returns true if the change occurred
 *
 * @param {Bitmap | String | Object} [graphic] -
 * @param {Boolean} [blockRefreshAll=false]
 *
 * @see DKTools.Sprite.CheckBox.prototype.setupUncheckedGraphic
 * @see DKTools.Sprite.CheckBox.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.CheckBox.prototype.setUncheckedGraphic = function(graphic, blockRefreshAll) {
    const uncheckedGraphic = this._uncheckedGraphic;
    if (uncheckedGraphic == graphic) {
        return false;
    }
    if (uncheckedGraphic instanceof Bitmap) {
        this.setupUncheckedGraphic(graphic);
    } else if (_.isString(uncheckedGraphic) || uncheckedGraphic instanceof Object) {
        const lastGraphic = uncheckedGraphic;
        this.setupUncheckedGraphic(graphic);
        if (_.isEqual(this._uncheckedGraphic, lastGraphic)) {
            return false;
        }
    } else {
        return false;
    }
    if (!blockRefreshAll) {
        this.refreshAll();
    }
    return true;
};

// _refresh methods

/**
 * @private
 */
DKTools.Sprite.CheckBox.prototype._refreshCheckedGraphic = function() {
    let bitmapObject = null;
    if (_.isString(this._checkedGraphic)) {
        bitmapObject = {
            folder: this._graphicFolder,
            filename: this._checkedGraphic
        };
    } else if (this._checkedGraphic instanceof Object) {
        bitmapObject = this._checkedGraphic;
    }
    if (bitmapObject) {
        this.loadBitmap(bitmapObject);
    }
};

/**
 * @private
 */
DKTools.Sprite.CheckBox.prototype._refreshUncheckedGraphic = function() {
    let bitmapObject = null;
    if (_.isString(this._uncheckedGraphic)) {
        bitmapObject = {
            folder: this._graphicFolder,
            filename: this._uncheckedGraphic
        };
    } else if (this._uncheckedGraphic instanceof Object) {
        bitmapObject = this._uncheckedGraphic;
    }
    if (bitmapObject) {
        this.loadBitmap(bitmapObject);
    }
};

/**
 * @private
 */
DKTools.Sprite.CheckBox.prototype._refreshGraphic = function() {
    if (this.isChecked()) {
        this._refreshCheckedGraphic();
    } else {
        this._refreshUncheckedGraphic();
    }
};

// refresh methods

/**
 * Updates and redraws all
 *
 * @override
 * @see DKTools.Base.prototype.canRefreshAll
 */
DKTools.Sprite.CheckBox.prototype.refreshAll = function() {
    this._refreshGraphic();
    DKTools.Sprite.Button.prototype.refreshAll.call(this);
};

// is methods

/**
 *
 * @returns {Boolean}
 */
DKTools.Sprite.CheckBox.prototype.isChecked = function() {
    return this._checked;
};

// event methods

/**
 * Updates the events with type: mouse-click-button
 *
 * @param {String} button - Mouse button
 *
 * @see DKTools.Sprite.CheckBox.prototype.switch
 * @see DKTools.Sprite.Button.prototype.updateClickEvents
 */
DKTools.Sprite.CheckBox.prototype.updateClickEvents = function(button) {
    this.switch();
    DKTools.Sprite.Button.prototype.updateClickEvents.call(this, button);
};

/**
 * Updates the events with type: checked
 *
 * @see DKTools.Sprite.CheckBox.prototype.updateEventsContainer
 */
DKTools.Sprite.CheckBox.prototype.updateCheckedEvents = function() {
    this.updateEventsContainer('checked');
};

/**
 * Updates the events with type: unchecked
 *
 * @see DKTools.Sprite.CheckBox.prototype.updateEventsContainer
 */
DKTools.Sprite.CheckBox.prototype.updateUncheckedEvents = function() {
    this.updateEventsContainer('unchecked');
};

// other methods

/**
 * Switches the check box
 *
 * @see DKTools.Sprite.CheckBox.prototype.isChecked
 * @see DKTools.Sprite.CheckBox.prototype.setChecked
 */
DKTools.Sprite.CheckBox.prototype.switch = function() {
    this.setChecked(!this.isChecked());
};

/**
 *
 *
 * @see DKTools.Sprite.CheckBox.prototype.isChecked
 * @see DKTools.Sprite.CheckBox.prototype.switch
 * @see DKTools.Sprite.CheckBox.prototype.updateCheckedEvents
 */
DKTools.Sprite.CheckBox.prototype.check = function() {
    if (!this.isChecked()) {
        this.switch();
        this.updateCheckedEvents();
    }
};

/**
 *
 *
 * @see DKTools.Sprite.CheckBox.prototype.isChecked
 * @see DKTools.Sprite.CheckBox.prototype.switch
 * @see DKTools.Sprite.CheckBox.prototype.updateUncheckedEvents
 */
DKTools.Sprite.CheckBox.prototype.uncheck = function() {
    if (this.isChecked()) {
        this.switch();
        this.updateUncheckedEvents();
    }
};





//===========================================================================
// DKTools.Viewport
//===========================================================================

DKTools.Viewport.prototype = Object.create(DKTools.Sprite.prototype);
DKTools.Viewport.prototype.constructor = DKTools.Viewport;

// properties

Object.defineProperties(DKTools.Viewport.prototype, {

    /**
     * Shape of the mask
     *
     * @readonly
     * @type {PIXI.Graphics}
     * @memberOf DKTools.Viewport.prototype
     */
    maskShape: {
        get: function() {
            return this._maskShape;
        },
        configurable: true
    }

});

// standard methods

/**
 * Returns the standard mask shape
 *
 * @returns {String} Standard mask shape
 */
DKTools.Viewport.prototype.standardMaskShape = function() {
    return 'rect';
};

// setup methods

/**
 * Sets all parameters
 *
 * @override
 *
 * @param {Object} [object] - Parameters
 *
 * @param {String} [object.maskShape] - Shape of the mask
 *
 * @see DKTools.Sprite.prototype.setupAll
 */
DKTools.Viewport.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.Sprite.prototype.setupAll.call(this, object);
    this.setupMaskShape(object.maskShape);
};

/**
 * Sets the shape of the mask
 *
 * @param {String} [shape] - Shape of the mask
 */
DKTools.Viewport.prototype.setupMaskShape = function(shape) {
    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._maskShape = shape || this.standardMaskShape();
};

// set methods

/**
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @override
 *
 * @param {Object} [object] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the object
 *
 * @param {String} [object.maskShape] - Shape of the mask
 *
 * @see DKTools.Sprite.prototype.setAll
 *
 * @returns {Number} Number of changed parameters
 */
DKTools.Viewport.prototype.setAll = function(object, blockStart, activate) {
    object = object || {};
    const block = true;
    let changed = DKTools.Sprite.prototype.setAll.call(this, object, block);
    if (this.setMaskShape(object.maskShape, block)) {
        changed++;
    }
    if (changed) {
        if (!blockStart) {
            this.start();
        }
        if (activate) {
            this.activate();
        }
    }
    return changed;
};

/**
 * Changes the shape of the mask
 * Returns true if the change occurred
 *
 * @param {String} [shape] - Shape of the mask
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Viewport.prototype.setMaskShape = function(shape, blockStart) {
    if (this._maskShape === shape) {
        return false;
    }
    const lastShape = this._maskShape;
    this.setupShape(shape);
    if (this._maskShape === lastShape) {
        return false;
    }
    if (!blockStart) {
        this.start();
    }
    return true;
};

// create methods

/**
 * Creates all objects
 *
 * @override
 */
DKTools.Viewport.prototype.createAll = function() {
    DKTools.Sprite.prototype.createAll.call(this);
    this.createMask();
};

/**
 * Creates a mask
 */
DKTools.Viewport.prototype.createMask = function() {
    let mask;
    switch (this._maskShape) {
        case 'rect':
            mask = this.getRectMask();
            break;
        case 'circle':
            mask = this.getCircleMask();
            break;
        case 'ellipse':
            mask = this.getEllipseMask();
            break;
        default:
            mask = this.getCustomMask(this._maskShape);
            break;
    }
    this.mask = mask;
};

// can methods

/**
 * Returns true if the viewport can clone the fixed bitmap
 *
 * @override
 * @returns {Boolean} Viewport can clone the fixed bitmap
 */
DKTools.Viewport.prototype.canCloneFixedBitmap = function() {
    return false;
};

// get methods

/**
 * Returns a mask in the form of a rectangle
 *
 * @returns {PIXI.Graphics} Mask in the form of a rectangle
 */
DKTools.Viewport.prototype.getRectMask = function() {
    const mask = new PIXI.Graphics();
    mask.beginFill();
    mask.drawRect(this.x, this.y, this.bitmap.width, this.bitmap.height);
    mask.endFill();
    return mask;
};

/**
 * Returns a mask in the form of a circle
 *
 * @returns {PIXI.Graphics} Mask in the form of a circle
 */
DKTools.Viewport.prototype.getCircleMask = function() {
    const mask = new PIXI.Graphics();
    const radius = this.bitmap.width / 2;
    const centerX = this.x + radius;
    const centerY = this.y + radius;
    mask.beginFill();
    mask.drawCircle(centerX, centerY, radius);
    mask.endFill();
    return mask;
};

/**
 * Returns a mask in the form of an ellipse
 *
 * @returns {PIXI.Graphics} Mask in the form of an ellipse
 */
DKTools.Viewport.prototype.getEllipseMask = function() {
    const mask = new PIXI.Graphics();
    const width = this.bitmap.width / 2;
    const height = this.bitmap.height / 2;
    const centerX = this.x + width;
    const centerY = this.y + height;
    mask.beginFill();
    mask.drawEllipse(centerX, centerY, width, height);
    mask.endFill();
    return mask;
};

/**
 * Returns a custom mask
 * Must be overridden by user
 *
 * @param {String} maskShape - Shape of the mask
 * @returns {null} Custom mask
 */
DKTools.Viewport.prototype.getCustomMask = function(maskShape) {
    // to be overriden by plugins
    return null;
};





//===========================================================================
// DKTools.Layout
//===========================================================================

DKTools.Layout.prototype = Object.create(DKTools.Sprite.prototype);
DKTools.Layout.prototype.constructor = DKTools.Layout;

// properties

Object.defineProperties(DKTools.Layout.prototype, {

    /**
     * Number of the columns
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Layout.prototype
     */
    maxCols: {
        get: function () {
            return this._maxCols;
        },
        configurable: true
    },

    /**
     * Items
     *
     * @readonly
     * @type {DKTools.Sprite[] | *}
     * @memberOf DKTools.Layout.prototype
     */
    items: {
        get: function() {
            return this._items;
        },
        configurable: true
    },

    /**
     * Height of the row
     *
     * @readonly
     * @type {Function | Number}
     * @memberOf DKTools.Layout.prototype
     */
    rowHeight: {
        get: function () {
            return this._rowHeight;
        },
        configurable: true
    },

    /**
     * Width of the column
     *
     * @readonly
     * @type {Function | Number}
     * @memberOf DKTools.Layout.prototype
     */
    colWidth: {
        get: function () {
            return this._colWidth;
        },
        configurable: true
    },

    /**
     * Horizontal spacing
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Layout.prototype
     */
    horizontalSpacing: {
        get: function () {
            return this._horizontalSpacing;
        },
        configurable: true
    },

    /**
     * Vertical spacing
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Layout.prototype
     */
    verticalSpacing: {
        get: function () {
            return this._verticalSpacing;
        },
        configurable: true
    },

    /**
     * Value of the invert
     *
     * @readonly
     * @type {Boolean}
     * @memberOf DKTools.Layout.prototype
     */
    inverted: {
        get: function () {
            return this._inverted;
        },
        configurable: true
    }

});

// _clear methods

/**
 * Clears all data
 *
 * @private
 * @override
 *
 * @see DKTools.Sprite.prototype._clearAll
 * @see DKTools.Layout.prototype._clearItems
 */
DKTools.Layout.prototype._clearAll = function() {
    DKTools.Sprite.prototype._clearAll.call(this);
    this._clearItems();
};

/**
 * Clears items
 *
 * @private
 */
DKTools.Layout.prototype._clearItems = function() {
    /**
     * @private
     * @readonly
     * @type {Array}
     */
    this._items = [];
};

// clear methods

/**
 * Clears items
 *
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.removeAllItems
 * @see DKTools.Layout.prototype._clearItems
 * @see DKTools.Layout.prototype.start
 */
DKTools.Layout.prototype.clearItems = function(blockStart) {
    this.removeAllItems();
    this._clearItems();
    if (!blockStart) {
        this.start();
    }
};

// standard methods

/**
 * Returns the standard activity of the layout
 *
 * @override
 * @returns {Boolean} Standard activity of the layout
 */
DKTools.Layout.prototype.standardActive = function() {
    return false;
};

/**
 * Returns the standard number of the columns
 *
 * @returns {Number} Standard number of columns
 */
DKTools.Layout.prototype.standardMaxCols = function() {
    return 1;
};

/**
 * Returns the standard horizontal spacing
 *
 * @returns {Number} Standard horizontal spacing
 */
DKTools.Layout.prototype.standardHorizontalSpacing = function() {
    return 12;
};

/**
 * Returns the standard vertical spacing
 *
 * @returns {Number} Standard vertical spacing
 */
DKTools.Layout.prototype.standardVerticalSpacing = function() {
    return this.getLineHeight() / 2;
};

/**
 * Returns the standard list of the items
 *
 * @returns {Array} Standard list of the items
 */
DKTools.Layout.prototype.standardItems = function() {
    return [];
};

/**
 * Returns the standard height of the row
 *
 * @returns {Function} Standard height of the row
 */
DKTools.Layout.prototype.standardRowHeight = function() {
    return function(row) {
        const items = this.getItemsInRow(row);
        return _.max(_.map(items, 'height'));
    }.bind(this);
};

/**
 * Returns the standard width of the column
 *
 * @returns {Function} Standard width of the column
 */
DKTools.Layout.prototype.standardColWidth = function() {
    return function(col) {
        const items = this.getItemsInCol(col);
        return _.max(_.map(items, 'width'));
    }.bind(this);
};

/**
 * Returns the standard value of the invert
 *
 * @returns {Boolean} Standard value of the invert
 */
DKTools.Layout.prototype.standardInverted = function() {
    return false;
};

// setup methods

/**
 * Sets all parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 *
 * @param {Number} [object.maxCols] - Columns
 * @param {Number} [object.horizontalSpacing] - Horizontal spacing
 * @param {Number} [object.verticalSpacing] - Vertical spacing
 * @param {Array} [object.items] - Items
 * @param {Function | Number} [object.rowHeight] - Height of the row
 * @param {Function | Number} [object.colWidth] - Width of the column
 * @param {Boolean} [object.inverted] - Value of the invert
 *
 * @see DKTools.Sprite.prototype.setupAll
 * @see DKTools.Layout.prototype.setupMaxCols
 * @see DKTools.Layout.prototype.setupSpacing
 * @see DKTools.Layout.prototype.setupItems
 * @see DKTools.Layout.prototype.setupRowHeight
 * @see DKTools.Layout.prototype.setupColWidth
 * @see DKTools.Layout.prototype.setupInverted
*/
DKTools.Layout.prototype.setupAll = function(object) {
	object = object || {};
	DKTools.Sprite.prototype.setupAll.call(this, object);
    this.setupMaxCols(object.maxCols);
    this.setupSpacing(object.horizontalSpacing, object.verticalSpacing);
    this.setupItems(object.items);
    this.setupRowHeight(object.rowHeight);
    this.setupColWidth(object.colWidth);
    this.setupInverted(object.inverted);
};

/**
 * Sets the number of the columns
 *
 * @param {Number} [cols=this.standardMaxCols()] - Columns
 *
 * @see DKTools.Layout.prototype.standardMaxCols
 */
DKTools.Layout.prototype.setupMaxCols = function(cols) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._maxCols = (cols == null ? this.standardMaxCols() : cols);
};

/**
 * Sets the horizontal spacing
 *
 * @param {Number} [spacing=this.standardHorizontalSpacing()] - Horizontal spacing
 *
 * @see DKTools.Layout.prototype.standardHorizontalSpacing
 */
DKTools.Layout.prototype.setupHorizontalSpacing = function(spacing) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._horizontalSpacing = (spacing == null ? this.standardHorizontalSpacing() : spacing);
};

/**
 * Sets the vertical spacing
 *
 * @param {Number} [spacing=this.standardVerticalSpacing()] - Vertical spacing
 *
 * @see DKTools.Layout.prototype.standardVerticalSpacing
 */
DKTools.Layout.prototype.setupVerticalSpacing = function(spacing) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._verticalSpacing = (spacing == null ? this.standardVerticalSpacing() : spacing);
};

/**
 * Sets the horizontal and vertical spacing
 *
 * @param {Number} [horizontalSpacing] - Horizontal spacing
 * @param {Number} [verticalSpacing] - Vertical spacing
 *
 * @see DKTools.Layout.prototype.setupHorizontalSpacing
 * @see DKTools.Layout.prototype.setupVerticalSpacing
 */
DKTools.Layout.prototype.setupSpacing = function(horizontalSpacing, verticalSpacing) {
    this.setupHorizontalSpacing(horizontalSpacing);
    this.setupVerticalSpacing(verticalSpacing);
};

/**
 * Sets the items
 *
 * @param {DKTools.Sprite[] | *} [items=this.standardItems()] - Items
 *
 * @see DKTools.Layout.prototype.standardItems
 */
DKTools.Layout.prototype.setupItems = function(items) {
    items = items || this.standardItems();
    _.forEach(items, function(item) {
        this._items.push(item);
    }.bind(this));
};

/**
 * Sets the height of the row
 *
 * @param {Function | Number} [rowHeight=this.standardRowHeight()] - Height of the row
 *
 * @see DKTools.Layout.prototype.standardRowHeight
 */
DKTools.Layout.prototype.setupRowHeight = function(rowHeight) {
    /**
     * @private
     * @readonly
     * @type {Function | Number}
     */
    this._rowHeight = rowHeight || this.standardRowHeight();
};

/**
 * Sets the width of the column
 *
 * @param {Function | Number} [colWidth=this.standardColWidth()] - Width of the column
 *
 * @see DKTools.Layout.prototype.standardColWidth
 */
DKTools.Layout.prototype.setupColWidth = function(colWidth) {
    /**
     * @private
     * @readonly
     * @type {Function | Number}
     */
    this._colWidth = colWidth || this.standardColWidth();
};

/**
 * Sets the value of the invert
 *
 * @param {Boolean} [inverted=this.standardInverted()] - Value of the ivnert
 *
 * @see DKTools.Layout.prototype.standardInverted
 */
DKTools.Layout.prototype.setupInverted = function(inverted) {
    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._inverted = (inverted == null ? this.standardInverted() : inverted);
};

// set methods

/**
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the layout
 *
 * @param {Number} [object.maxCols] - Columns
 * @param {Number} [object.horizontalSpacing] - Horizontal spacing
 * @param {Number} [object.verticalSpacing] - Vertical spacing
 * @param {Array} [object.items] - Items
 * @param {Function | Number} [object.rowHeight] - Height of the row
 * @param {Function | Number} [object.colWidth] - Width of the column
 * @param {Boolean} [object.inverted] - Value of the invert
 *
 * @see DKTools.Sprite.prototype.setupAll
 * @see DKTools.Layout.prototype.setMaxCols
 * @see DKTools.Layout.prototype.setSpacing
 * @see DKTools.Layout.prototype.setItems
 * @see DKTools.Layout.prototype.setRowHeight
 * @see DKTools.Layout.prototype.setColWidth
 * @see DKTools.Layout.prototype.setInverted
 * @see DKTools.Layout.prototype.start
 * @see DKTools.Layout.prototype.activate
 *
 * @returns {Number} Number of changed parameters
*/
DKTools.Layout.prototype.setAll = function(object, blockStart, activate) {
	object = object || {};
	const block = true;
	let changed = DKTools.Sprite.prototype.setAll.call(this, object, block);
    if (this.setMaxCols(object.maxCols, block)) {
        changed++;
    }
    changed += this.setSpacing(object.horizontalSpacing, object.verticalSpacing, block);
    if (this.setItems(object.items, block)) {
        changed++;
    }
    if (this.setRowHeight(object.rowHeight, block)) {
        changed++;
    }
    if (this.setColWidth(object.colWidth, block)) {
        changed++;
    }
    if (this.setInverted(object.reversed, block)) {
        changed++;
    }
    if (changed) {
        if (!blockStart) {
            this.start();
        }
        if (activate) {
            this.activate();
        }
    }
	return changed;
};

/**
 * Changes the number of the columns
 * Returns true if the change occurred
 *
 * @param {Number} [cols] - Columns
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.setupMaxCols
 * @see DKTools.Layout.prototype.start
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Layout.prototype.setMaxCols = function(cols, blockStart) {
    if (this._maxCols === cols) {
        return false;
    }
    const lastCols = this._maxCols;
    this.setupMaxCols(cols);
    if (this._maxCols === lastCols) {
        return false;
    }
    if (!blockStart) {
        this.start();
    }
    return true;
};

/**
 * Changes the horizontal spacing
 * Returns true if the change occurred
 *
 * @param {Number} [scacing] - Horizontal spacing
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.setupHorizontalSpacing
 * @see DKTools.Layout.prototype.start
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Layout.prototype.setHorizontalSpacing = function(scacing, blockStart) {
    if (this._horizontalSpacing === scacing) {
        return false;
    }
    const lastSpacing = this._horizontalSpacing;
    this.setupHorizontalSpacing(scacing);
    if (this._horizontalSpacing === lastSpacing) {
        return false;
    }
    if (!blockStart) {
        this.start();
    }
    return true;
};

/**
 * Changes the vertical spacing
 * Returns true if the change occurred
 *
 * @param {Number} [scacing] - Vertical spacing
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.setupVerticalSpacing
 * @see DKTools.Layout.prototype.start
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Layout.prototype.setVerticalSpacing = function(scacing, blockStart) {
    if (this._verticalSpacing === scacing) {
        return false;
    }
    const lastSpacing = this._verticalSpacing;
    this.setupVerticalSpacing(scacing);
    if (this._verticalSpacing === lastSpacing) {
        return false;
    }
    if (!blockStart) {
        this.start();
    }
    return true;
};

/**
 * Changes the horizontal and vertical spacing
 * Returns the number of changed parameters
 *
 * @param {Number} [horizontalSpacing] - Horizontal spacing
 * @param {Number} [verticalSpacing] - Vertical spacing
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.setHorizontalSpacing
 * @see DKTools.Layout.prototype.setVerticalSpacing
 * @see DKTools.Layout.prototype.start
 *
 * @returns {Number} Number of changed parameters
 */
DKTools.Layout.prototype.setSpacing = function(horizontalSpacing, verticalSpacing, blockStart) {
    const block = true;
    let changed = 0;
    if (this.setHorizontalSpacing(horizontalSpacing, block)) {
        changed++;
    }
    if (this.setVerticalSpacing(verticalSpacing, block)) {
        changed++;
    }
    if (changed && !blockStart) {
        this.start();
    }
    return changed;
};

/**
 * Changes the items
 * Returns true if the change occurred
 *
 * @param {DKTools.Sprite[] | *} [items] - Items
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.removeAllItems
 * @see DKTools.Layout.prototype.setupItems
 * @see DKTools.Layout.prototype.start
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Layout.prototype.setItems = function(items, blockStart) {
    if (this._items == items) {
        return false;
    }
    this.removeAllItems();
    this.setupItems(items);
    if (!blockStart) {
        this.start();
    }
    return true;
};

/**
 * Changes the height of the row
 * Returns true if the change occurred
 *
 * @param @param {Function | Number} [rowHeight] - Height of the row
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.setupRowHeight
 * @see DKTools.Layout.prototype.start
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Layout.prototype.setRowHeight = function(rowHeight, blockStart) {
    if (this._rowHeight === rowHeight) {
        return false;
    }
    const lastHeight = this._rowHeight;
    this.setupRowHeight(rowHeight);
    if (this._rowHeight === lastHeight) {
        return false;
    }
    if (!blockStart) {
        this.start();
    }
    return true;
};

/**
 * Changes the width of the column
 * Returns true if the change occurred
 *
 * @param {Function | Number} [colWidth] - Width of the column
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.setupColWidth
 * @see DKTools.Layout.prototype.start
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Layout.prototype.setColWidth = function(colWidth, blockStart) {
    if (this._colWidth === colWidth) {
        return false;
    }
    const lastWidth = this._colWidth;
    this.setupColWidth(colWidth);
    if (this._colWidth === lastWidth) {
        return false;
    }
    if (!blockStart) {
        this.start();
    }
    return true;
};

/**
 * Changes the value of the invert
 * Returns true if the change occurred
 *
 * @param {Boolean} [inverted] - Value of the invert
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.setupInverted
 * @see DKTools.Layout.prototype.start
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Layout.prototype.setInverted = function(inverted, blockStart) {
    if (this._inverted === inverted) {
        return false;
    }
    const lastReversed = this._inverted;
    this.setupInverted(inverted);
    if (this._inverted === lastReversed) {
        return false;
    }
    if (!blockStart) {
        this.start();
    }
    return true;
};

// start methods

/**
 * Starts the layout
 *
 * @override
 */
DKTools.Layout.prototype.start = function() {
    this._started = true;
    if (this.isReady()) {
        DKTools.Sprite.prototype.start.call(this);
    } else {
        this.addOneTimeEvent({
            type: 'ready',
            onSuccess: this.start.bind(this)
        });
    }
};

// create methods

/**
 * Loads an image by graphic name (if exists) or create the bitmap (if the fixed bitmap does not exist)
 *
 * @override
 *
 * @see DKTools.Sprite.prototype.hasGraphicName
 * @see DKTools.Sprite.prototype._loadGraphic
 * @see DKTools.Sprite.prototype.isFixedBitmap
 * @see DKTools.Sprite.prototype.getLayoutWidth
 * @see DKTools.Sprite.prototype.getLayoutHeight
 * @see Bitmap
 */
DKTools.Layout.prototype.createBitmap = function() {
    if (this.hasGraphicName()) {
        this._loadGraphic();
    } else if (!this.isFixedBitmap()) {
        this.bitmap = new Bitmap(this.getLayoutWidth(), this.getLayoutHeight());
    }
};

// remove methods

/**
 * Removes children objects from processing
 *
 * @override
 *
 * @see DKTools.Sprite.prototype.removeAllChildren
 * @see DKTools.Layout.prototype.removeAllItems
 */
DKTools.Layout.prototype.removeAllChildren = function() {
    DKTools.Sprite.prototype.removeAllChildren.call(this);
    this.removeAllItems();
};

/**
 * Removes items from processing
 *
 * @see DKTools.Layout.prototype.removeChild
 */
DKTools.Layout.prototype.removeAllItems = function() {
    this.removeChild.apply(this, this._items);
};

/**
 * Removes the item
 *
 * @param {DKTools.Sprite | *} item - Item
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.hasItem
 * @see DKTools.Layout.prototype.removeChild
 * @see DKTools.Utils.Array.remove
 * @see DKTools.Layout.prototype.start
 */
DKTools.Layout.prototype.removeItem = function(item, blockStart) {
    if (!this.hasItem(item)) {
        return;
    }
    this.removeChild(item);
    DKTools.Utils.Array.remove(this._items, item);
    if (!blockStart) {
        this.start();
    }
};

/**
 * Removes the items
 *
 * @param {Array} items - Items
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.removeItem
 * @see DKTools.Layout.prototype.start
 */
DKTools.Layout.prototype.removeItems = function(items, blockStart) {
    _.forEach(items, function(item) {
        this.removeItem(item, true);
    }.bind(this));
    if (!blockStart) {
        this.start();
    }
};

/**
 * Removes the item by index
 *
 * @param {Number} index - Index
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.getItem
 * @see DKTools.Layout.prototype.removeItem
 */
DKTools.Layout.prototype.removeItemByIndex = function(index, blockStart) {
    this.removeItem(this.getItem(index), blockStart);
};

/**
 * Removes the columns
 *
 * @param {Number} cols - Columns
 *
 * @see DKTools.Layout.prototype.getMaxCols
 * @see DKTools.Layout.prototype.addCols
 */
DKTools.Layout.prototype.removeCols = function(cols) {
    if (this.getMaxCols() - cols >= 1) {
        this.addCols(-cols);
    }
};

/**
 * Removes the column
 *
 * @see DKTools.Layout.prototype.removeCols
 */
DKTools.Layout.prototype.removeCol = function() {
    this.removeCols(1);
};

// add methods

/**
 * Adds children objects to processing
 *
 * @override
 */
DKTools.Layout.prototype.addAllChildren = function() {
    DKTools.Sprite.prototype.addAllChildren.call(this);
    this.addAllItems();
};

/**
 * Adds the itemns to processing
 *
 * @see DKTools.Layout.prototype.addChild
 */
DKTools.Layout.prototype.addAllItems = function() {
    this.addChild.apply(this, this._items);
};

/**
 * Adds the item
 *
 * @param {DKTools.Sprite | *} item - Item
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.start
 */
DKTools.Layout.prototype.addItem = function(item, blockStart) {
    if (!(item instanceof DKTools.Sprite)) {
        return;
    }
    this._items.push(item);
    if (!blockStart) {
        this.start();
    }
};

/**
 * Adds the items
 *
 * @param {DKTools.Sprite[] | *} items - Items
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.addItem
 * @see DKTools.Layout.prototype.start
 */
DKTools.Layout.prototype.addItems = function(items, blockStart) {
    _.forEach(items, function(item) {
        this.addItem(item, true);
    }.bind(this));
    if (!blockStart) {
        this.start();
    }
};

/**
 * Adds the columns
 *
 * @param {Number} cols - Columns
 *
 * @see DKTools.Layout.prototype.getMaxCols
 * @see DKTools.Layout.prototype.setMaxCols
 */
DKTools.Layout.prototype.addCols = function(cols) {
    this.setMaxCols(this.getMaxCols() + cols);
};

/**
 * Adds the column
 *
 * @see DKTools.Layout.prototype.addCols
 */
DKTools.Layout.prototype.addCol = function() {
    this.addCols(1);
};

// can methods

/**
 * Returns true if the layout can clone the fixed bitmap
 *
 * @override
 * @returns {Boolean} Layout can clone the fixed bitmap
 */
DKTools.Layout.prototype.canCloneFixedBitmap = function() {
    return false;
};

// get methods

/**
 * Returns the width of the layout
 *
 * @see DKTools.Layout.prototype.getMaxCols
 * @see DKTools.Layout.prototype.getColWidth
 *
 * @returns {Number} Width of the layout
 */
DKTools.Layout.prototype.getLayoutWidth = function() {
    let width = 0;
    const maxCols = this.getMaxCols();
    for(let i = 1; i <= maxCols; i++) {
        width += this.getColWidth(i) + this._horizontalSpacing;
    }
    return width - this._horizontalSpacing;
};

/**
 * Returns the height of the layout
 *
 * @see DKTools.Layout.prototype.getMaxRows
 * @see DKTools.Layout.prototype.getRowHeight
 *
 * @returns {Number} Height of the layout
 */
DKTools.Layout.prototype.getLayoutHeight = function() {
    let height = 0;
    const maxRows = this.getMaxRows();
    for(let i = 1; i <= maxRows; i++) {
        height += this.getRowHeight(i) + this._verticalSpacing;
    }
    return height - this._verticalSpacing;
};

/**
 * Returns the maximum number of rows
 *
 * @see DKTools.Layout.prototype.getMaxItems
 * @see DKTools.Layout.prototype.getMaxCols
 *
 * @returns {Number} Maximum number of rows
 */
DKTools.Layout.prototype.getMaxRows = function() {
    return Math.max(1, Math.ceil(this.getMaxItems() / this.getMaxCols()));
};

/**
 * Returns the maximum number of columns
 *
 * @returns {Number} Maximum number of columns
 */
DKTools.Layout.prototype.getMaxCols = function() {
    return this._maxCols;
};

/**
 * Returns the items
 *
 * @see DKTools.Layout.prototype.isInverted
 *
 * @returns {DKTools.Sprite[] | *} Items
 */
DKTools.Layout.prototype.getItems = function() {
    if (this.isInverted()) {
        return _.reverse(_.clone(this._items));
    }
    return this._items;
};

/**
 * Returns the number of the items
 *
 * @return {Number} Number of the items
 */
DKTools.Layout.prototype.getMaxItems = function() {
    return this._items.length;
};

/**
 * Returns the index of the item
 *
 * @param {DKTools.Sprite | *} item - Item
 *
 * @see DKTools.Layout.prototype.getItems
 *
 * @returns {Number} Index of the item
 */
DKTools.Layout.prototype.getItemIndex = function(item) {
    return _.indexOf(this.getItems(), item);
};

/**
 * Returns the item by index
 *
 * @param {Number} index - Index
 *
 * @see DKTools.Layout.prototype.getItems
 *
 * @returns {DKTools.Sprite | * | undefined} Item by index or undefined
 */
DKTools.Layout.prototype.getItem = function(index) {
    return index >= 0 ? this.getItems()[index] : undefined;
};

/**
 * Returns the items in the row
 *
 * @param {Number} row - Row
 *
 * @see DKTools.Layout.prototype.getMaxCols
 * @see DKTools.Layout.prototype.getMaxRows
 * @see DKTools.Layout.prototype.getItem
 *
 * @returns {DKTools.Sprite[] | *} Items in the row
 */
DKTools.Layout.prototype.getItemsInRow = function(row) {
    const items = [];
    const maxCols = this.getMaxCols();
    if (row < 1 || row > this.getMaxRows()) {
        return items;
    }
    const startIndex = maxCols * (row - 1);
    for(let i = 0; i < maxCols; i++) {
        const item = this.getItem(startIndex + i);
        items.push(item);
    }
    return items;
};

/**
 * Returns the items in the column
 *
 * @param {Number} col - Column
 *
 * @see DKTools.Layout.prototype.getMaxRows
 * @see DKTools.Layout.prototype.getMaxCols
 * @see DKTools.Layout.prototype.getItem
 *
 * @returns {DKTools.Sprite[] | *} Items in the column
 */
DKTools.Layout.prototype.getItemsInCol = function(col) {
    const items = [];
    const maxRows = this.getMaxRows();
    const maxCols = this.getMaxCols();
    if (col < 1 || col > maxCols) {
        return items;
    }
    const startIndex = col - 1;
    for(let i = 0; i < maxRows; i++) {
        const item = this.getItem(startIndex + maxCols * i);
        items.push(item);
    }
    return items;
};

/**
 * Returns the height of the row
 *
 * @param {Number} row - Row
 * @returns {Number} Height of the row
 */
DKTools.Layout.prototype.getRowHeight = function(row) {
    if (_.isFunction(this._rowHeight)) {
        return this._rowHeight(row);
    }
    return this._rowHeight;
};

/**
 * Returns the width of the column
 *
 * @param {Number} col - Column
 * @returns {Number} Width of the column
 */
DKTools.Layout.prototype.getColWidth = function(col) {
    if (_.isFunction(this._colWidth)) {
        return this._colWidth(col);
    }
    return this._colWidth;
};

/**
 * Returns the Y coordinate of the row
 *
 * @param {Number} row - Row
 *
 * @see DKTools.Layout.prototype.getRowHeight
 *
 * @returns {Number} The Y coordinate of the row
 */
DKTools.Layout.prototype.getRowY = function(row) {
    let y = 0;
    for(let i = 1; i < row; i++) {
        y += this.getRowHeight(i) + this._verticalSpacing;
    }
    return y;
};

/**
 * Returns the X coordinate of the column
 *
 * @param {Number} col - Column
 *
 * @see DKTools.Layout.prototype.getColWidth
 *
 * @returns {Number} The X coordinate of the column
 */
DKTools.Layout.prototype.getColX = function(col) {
    let x = 0;
    for(let i = 1; i < col; i++) {
        x += this.getColWidth(i) + this._horizontalSpacing;
    }
    return x;
};

/**
 * Returns the row of the item
 *
 * @param {DKTools.Sprite | *} item - Item
 *
 * @see DKTools.Layout.prototype.getItemIndex
 * @see DKTools.Layout.prototype.getMaxCols
 *
 * @returns {Number} Row of the item or -1
 */
DKTools.Layout.prototype.getItemRow = function(item) {
    const index = this.getItemIndex(item);
    if (index >= 0) {
        return Math.floor(index / this.getMaxCols()) + 1;
    }
    return -1;
};

/**
 * Returns the column of the item
 *
 * @param {DKTools.Sprite | *} item - Item
 *
 * @see DKTools.Layout.prototype.getItemIndex
 * @see DKTools.Layout.prototype.getMaxCols
 *
 * @returns {Number} Column of the item or -1
 */
DKTools.Layout.prototype.getItemCol = function(item) {
    const index = this.getItemIndex(item);
    if (index >= 0) {
        return (index % this.getMaxCols()) + 1;
    }
    return -1;
};

/**
 * Returns the cell by row and column
 *
 * @param {Number} row - Row
 * @param {Number} col - Col
 *
 * @see DKTools.Layout.prototype.getMaxCols
 * @see DKTools.Layout.prototype.getColX
 * @see DKTools.Layout.prototype.getRowY
 * @see DKTools.Layout.prototype.getColWidth
 * @see DKTools.Layout.prototype.getRowHeight
 *
 * @returns {{ item: (DKTools.Sprite | * | undefined), x: Number, y: Number, width: Number, height: Number }}
 */
DKTools.Layout.prototype.getCell = function(row, col) {
    const index = this.getMaxCols() * (row - 1) + (col - 1);
    return {
        item: this.getItem(index),
        x: this.getColX(col),
        y: this.getRowY(row),
        width: this.getColWidth(col),
        height: this.getRowHeight(row)
    };
};

// move methods

/**
 * Moves the item
 *
 * @param {Number} index - Index
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - The X coordinate or Point or object with parameters
 * @param {Number} [y] - The Y coordinate (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 *
 * @see DKTools.Layout.prototype.getItem
 * @see DKTools.Sprite.prototype.move
 */
DKTools.Layout.prototype.moveItem = function(index, object, y) {
    const item = this.getItem(index);
    if (item) {
        item.move(object, y);
    }
};

// invert methods

/**
 * Inverts the layout
 *
 * @see DKTools.Layout.prototype.isInverted
 * @see DKTools.Layout.prototype.setInverted
 */
DKTools.Layout.prototype.invert = function() {
    this.setInverted(!this.isInverted());
};

// is methods

/**
 * Returns true if the layout is empty
 *
 * @see DKTools.Layout.prototype.getMaxItems
 *
 * @returns {Boolean} Layout is empty
 */
DKTools.Layout.prototype.isEmpty = function() {
    return this.getMaxItems() === 0;
};

/**
 * Returns true if the layout is ready
 *
 * @override
 *
 * @see DKTools.Layout.prototype.isEmpty
 *
 * @returns {Boolean} Layout is ready
*/
DKTools.Layout.prototype.isReady = function() {
    return this.isEmpty() || _.every(this._items, function(item) {
        return item.isReady();
    });
};

/**
 * Returns true if the layout is inverted
 *
 * @returns {Boolean} Layout is inverted
 */
DKTools.Layout.prototype.isInverted = function() {
    return this._inverted;
};

/**
 * Returns true if the layout is horizontal
 *
 * @see DKTools.Layout.prototype.getMaxRows
 *
 * @returns {boolean} Layout is horizontal
 */
DKTools.Layout.prototype.isHorizontal = function() {
    return this.getMaxRows() === 1;
};

/**
 * Returns true if the layout is vertical
 *
 * @see DKTools.Layout.prototype.getMaxCols
 *
 * @returns {boolean} Layout is vertical
 */
DKTools.Layout.prototype.isVertical = function() {
    return this.getMaxCols() === 1;
};

// has methods

/**
 * Returns true if the layout has the items
 *
 * @see DKTools.Layout.prototype.isEmpty
 *
 * @returns {Boolean} Layout has the items
 */
DKTools.Layout.prototype.hasItems = function() {
    return !this.isEmpty();
};

/**
 * Returns true if the layout has the item
 *
 * @param {DKTools.Sprite | *} item - Item
 *
 * @see DKTools.Layout.prototype.getItemIndex
 *
 * @returns {Boolean} Layout has the item
 */
DKTools.Layout.prototype.hasItem = function(item) {
    return this.getItemIndex(item) >= 0;
};

// items methods

/**
 * Calls the callback function for the items
 *
 * @param {Function} callback - Function for the items
 * @param {Boolean} [start=false] - Call of the "start" function
 *
 * @see DKTools.Layout.prototype.getItems
 * @see DKTools.Layout.prototype.start
 */
DKTools.Layout.prototype.iterateItems = function(callback, start) {
    _.forEach(this.getItems(), callback);
    if (start) {
        this.start();
    }
};

/**
 * Starts the items
 *
 * @param {Boolean} [activate=false] - Activates the item
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.iterateItems
*/
DKTools.Layout.prototype.startItems = function(activate, blockStart) {
    const callback = function(item) {
        item.start(activate);
    };
	this.iterateItems(callback, !blockStart);
};

/**
 * Resizes the item
 *
 * @param {DKTools.Sprite | *} item - Item
 * @param {Number} [width] - Width of the item
 * @param {Number} [height] - Height of the item
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.hasItem
 * @see DKTools.Layout.prototype.start
 */
DKTools.Layout.prototype.resizeItem = function(item, width, height, blockStart) {
    if (this.hasItem(item) && item.resize(width, height)) {
        if (!blockStart) {
            this.start();
        }
    }
};

/**
 * Resizes the item by index
 *
 * @param {Number} index - Index
 * @param {Number} [width] - Width of the item
 * @param {Number} [height] - Height of the item
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.getItem
 * @see DKTools.Layout.prototype.resizeItem
 */
DKTools.Layout.prototype.resizeItemByIndex = function(index, width, height, blockStart) {
    this.resizeItem(this.getItem(index), width, height, blockStart);
};

/**
 * Resizes the items
 *
 * @param {Number} [width] - Width of the item
 * @param {Number} [height] - Height of the item
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.resizeItem
 * @see DKTools.Layout.prototype.iterateItems
*/
DKTools.Layout.prototype.resizeItems = function(width, height, blockStart) {
    const callback = function(item) {
        this.resizeItem(item, width, height, true);
    }.bind(this);
	this.iterateItems(callback, !blockStart);
};

/**
 * Activates the items
 *
 * @param {Boolean} [start=false] - Call of the "start" function
 *
 * @see DKTools.Layout.prototype.iterateItems
*/
DKTools.Layout.prototype.activateItems = function(start) {
    const callback = function(item) {
        item.activate();
    };
    this.iterateItems(callback, start);
};

/**
 * Deactivates the items
 *
 * @param {Boolean} [start=false] - Call of the "start" function
 *
 * @see DKTools.Layout.prototype.iterateItems
*/
DKTools.Layout.prototype.deactivateItems = function(start) {
    const callback = function(item) {
        item.deactivate();
    };
    this.iterateItems(callback, start);
};

/**
 * Shows the items
 *
 * @param {Boolean} [activate=false] - Activates the items
 * @param {Boolean} [start=false] - Call of the "start" function
 *
 * @see DKTools.Layout.prototype.iterateItems
 */
DKTools.Layout.prototype.showItems = function(activate, start) {
    const callback = function(item) {
        item.show(activate);
    };
    this.iterateItems(callback, start);
};

/**
 * Hides the items
 *
 * @param {Boolean} [blockDeactivate=false] - Block deactivation of the items
 * @param {Boolean} [start=false] - Call of the "start" function
 *
 * @see DKTools.Layout.prototype.iterateItems
 */
DKTools.Layout.prototype.hideItems = function(blockDeactivate, start) {
    const callback = function(item) {
        item.hide(blockDeactivate);
    };
    this.iterateItems(callback, start);
};

// align methods

/**
 * Aligns the item
 *
 * @param {DKTools.Sprite | * | Number} item - Item or index
 *
 * @see DKTools.Layout.prototype.isReady
 * @see DKTools.Layout.prototype.getItemRow
 * @see DKTools.Layout.prototype.getItemCol
 * @see DKTools.Layout.prototype.getRowHeight
 * @see DKTools.Layout.prototype.getColWidth
 * @see DKTools.Layout.prototype.getColX
 * @see DKTools.Layout.prototype.getRowY
 * @see DKTools.Layout.prototype.addOneTimeEvent
 */
DKTools.Layout.prototype.alignItem = function(item) {
    if (this.isReady()) {
        const itemRow = this.getItemRow(item);
        const itemCol = this.getItemCol(item);
        const rowHeight = this.getRowHeight(itemRow);
        const colWidth = this.getColWidth(itemCol);
        const x = this.getColX(itemCol) + (colWidth - item.width) / 2;
        const y = this.getRowY(itemRow) + (rowHeight - item.height) / 2;
        item.move(x, y);
    } else {
        this.addOneTimeEvent({
            type: 'ready',
            onSuccess: this.alignItem.bind(this, item)
        });
    }
};

/**
 * Aligns the row
 *
 * @param {Number} row - Row
 *
 * @see DKTools.Layout.prototype.getItemsInRow
 * @see DKTools.Layout.prototype.alignItem
 */
DKTools.Layout.prototype.alignRow = function(row) {
    const items = this.getItemsInRow(row);
    _.forEach(items, this.alignItem.bind(this));
};

/**
 * Aligns the column
 *
 * @param {Number} col - Column
 *
 * @see DKTools.Layout.prototype.getItemsInCol
 * @see DKTools.Layout.prototype.alignItem
 */
DKTools.Layout.prototype.alignCol = function(col) {
    const items = this.getItemsInCol(col);
    _.forEach(items, this.alignItem.bind(this));
};

/**
 * Aligns the items
 *
 * @see DKTools.Layout.prototype.addOneTimeEvent
 * @see DKTools.Layout.prototype.iterateItems
 * @see DKTools.Layout.prototype.alignItem
 */
DKTools.Layout.prototype.alignItems = function() {
    this.addOneTimeEvent({
        type: 'ready',
        onSuccess: function() {
            this.iterateItems(this.alignItem.bind(this))
        }.bind(this)
    });
};

// update methods

/**
 * Updates all
 *
 * @override
 *
 * @see DKTools.Sprite.prototype.updateAll
 * @see DKTools.Layout.prototype.updateLayout
 */
DKTools.Layout.prototype.updateAll = function() {
    DKTools.Sprite.prototype.updateAll.call(this);
    this.updateLayout();
};

/**
 * Updates the layout
 *
 * @see DKTools.Layout.prototype.getMaxItems
 * @see DKTools.Layout.prototype.getMaxRows
 * @see DKTools.Layout.prototype.getMaxCols
 * @see DKTools.Layout.prototype.getColX
 * @see DKTools.Layout.prototype.getRowY
 * @see DKTools.Layout.prototype.moveItem
*/
DKTools.Layout.prototype.updateLayout = function() {
    const maxItems = this.getMaxItems();
    const maxRows = this.getMaxRows();
    const maxCols = this.getMaxCols();
    let index = 0;
    for(let i = 1; i <= maxRows && index < maxItems; i++) {
        for(let j = 1; j <= maxCols && index < maxItems; j++) {
            const x = this.getColX(j);
            const y = this.getRowY(i);
            this.moveItem(index++, x, y);
        }
    }
};





//===========================================================================
// DKTools.Window
//===========================================================================

DKTools.Window.prototype = Object.create(Window_Base.prototype);
DKTools.Utils.mixin(DKTools.Window.prototype, DKTools.Base.prototype);
DKTools.Window.prototype.constructor = DKTools.Window;

/**
 * Counter of created windows
 *
 * @private
 * @readonly
 * @type {Number}
 * @memberOf DKTools.Window
 */
DKTools.Window._counter = 0;

// properties

Object.defineProperties(DKTools.Window.prototype, {

    /**
     * Real width of the window (not including scaling)
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Window.prototype
     */
    realWidth: {
        get: function() {
            return this._width;
        },
        set: function(value) {
            this._width = value;
            this._refreshAllParts();
        },
        configurable: true
    },

    /**
     * Real height of the window (not including scaling)
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Window.prototype
     */
    realHeight: {
        get: function() {
            return this._height;
        },
        set: function(value) {
            this._height = value;
            this._refreshAllParts();
        },
        configurable: true
    },

    /**
     * Width of the window (taking into account scaling)
     *
     * @type {Number}
     * @memberOf DKTools.Window.prototype
     */
    width: {
        get: function() {
            return this.realWidth * this.scale.x;
        },
        set: function(value) {
            this._width = Math.floor(value / this.scale.x);
            this._refreshAllParts();
        },
        configurable: true
    },

    /**
     * Height of the window (taking into account scaling)
     *
     * @type {Number}
     * @memberOf DKTools.Window.prototype
     */
    height: {
        get: function() {
            return this.realHeight * this.scale.y;
        },
        set: function(value) {
            this._height = Math.floor(value / this.scale.y);
            this._refreshAllParts();
        },
        configurable: true
    },

    /**
     * Origin
     *
     * @readonly
     * @type {Point}
     * @memberOf DKTools.Window.prototype
     */
    origin: {
        get: function() {
            return this._origin;
        },
        configurable: true
    },

    /**
     * Opacity of the window
     *
     * @type {Number}
     * @memberOf DKTools.Window.prototype
     */
    windowOpacity: {
        get: function() {
            return this._windowSpriteContainer.alpha * 255;
        },
        set: function(value) {
            this._windowSpriteContainer.alpha = _.clamp(value, 0, 255) / 255;
        },
        configurable: true
    },

    /**
     * Opacity of the frame
     *
     * @type {Number}
     * @memberOf DKTools.Window.prototype
     */
    frameOpacity: {
        get: function() {
            return this._windowFrameSprite.alpha * 255;
        },
        set: function(value) {
            this._windowFrameSprite.alpha = _.clamp(value, 0, 255) / 255;
        },
        configurable: true
    },

    /**
     * Opacity of the window
     *
     * @readonly
     * @type {Object}
     * @memberOf DKTools.Window.prototype
     */
    opacity: {
        get: function() {
            return this._opacity;
        },
        configurable: true
    },

    /**
     * Tone of the window
     *
     * @readonly
     * @type {Number[]}
     * @memberOf DKTools.Window.prototype
     */
    tone: {
        get: function() {
            return this._tone;
        },
        configurable: true
    },

    /**
     * Sprite of the contents
     *
     * @readonly
     * @type {DKTools.Sprite}
     * @memberOf DKTools.Window.prototype
     */
    contentsSprite: {
        get: function() {
            return this._windowContentsSprite;
        },
        configurable: true
    },

    /**
     * Sprite of the frame
     *
     * @readonly
     * @type {Sprite}
     * @memberOf DKTools.Window.prototype
     */
    frameSprite: {
        get: function() {
            return this._windowFrameSprite;
        },
        configurable: true
    },

    /**
     * Sprite of the background
     *
     * @readonly
     * @type {Sprite}
     * @memberOf DKTools.Window.prototype
     */
    backSprite: {
        get: function() {
            return this._windowBackSprite;
        },
        configurable: true
    },

    /**
     * Bitmap of sprite of the contents
     * To support functions from DKTools.Base
     *
     * @type {Bitmap}
     * @memberOf DKTools.Window.prototype
     */
    bitmap: {
        get: function() {
            return this.contents;
        },
        set: function(value) {
           this.contents = value;
        },
        configurable: true
    }

});

// initialize methods

/**
 * Initializes a class object
 *
 * @override
 *
 * @param {Number | Object} [object] - The X coordinate
 * @param {Number} [y] - The Y coordinate
 * @param {Number} [width] - Width of the window
 * @param {Number} [height] - Height of the window
 *
 * @see PIXI.Container
 * @see DKTools.Base.prototype.initialize
 */
DKTools.Window.prototype.initialize = function(object, y, width, height) {
    PIXI.Container.call(this);
    DKTools.Base.prototype.initialize.call(this, object, y, width, height);
    DKTools.Window._counter++;
};

// _clear methods

/**
 * Clears all data
 *
 * @private
 * @override
 */
DKTools.Window.prototype._clearAll = function() {
    DKTools.Base.prototype._clearAll.call(this);
    this._clearIsWindow();
    this._clearOpenness();
    this._clearPadding();
    this._clearMargin();
    this._clearColorTone();
    this._clearOrigin();
    this._clearArrows();
};

/**
 * Clears the "isWindow"
 *
 * @private
 */
DKTools.Window.prototype._clearIsWindow = function() {
    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._isWindow = true;
};

/**
 * Clears the openness
 *
 * @private
 */
DKTools.Window.prototype._clearOpenness = function() {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._openness = this.standardOpenness();
};

/**
 * Clears the padding
 *
 * @private
 */
DKTools.Window.prototype._clearPadding = function() {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._padding = this.standardPadding();
};

/**
 * Clears the margin
 *
 * @private
 */
DKTools.Window.prototype._clearMargin = function() {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._margin = this.standardMargin();
};

/**
 * Clears the color tone
 *
 * @private
 */
DKTools.Window.prototype._clearColorTone = function() {
    /**
     * @private
     * @readonly
     * @type {Number[]}
     */
    this._colorTone = this.standardTone();
};

/**
 * Clears the origin
 *
 * @private
 */
DKTools.Window.prototype._clearOrigin = function() {
    /**
     * @private
     * @readonly
     * @type {Point}
     */
    this._origin = this.standardOrigin();
};

/**
 * Clears the arrows
 *
 * @private
 */
DKTools.Window.prototype._clearArrows = function() {
    /**
     * @private
     * @readonly
     * @type {DKTools.Sprite.Arrow[]}
     */
    this._arrows = [];
};

// _create methods

/**
 * Creates all
 *
 * @private
 * @override
 *
 * @see DKTools.Base.prototype._createAll
 * @see DKTools.Window.prototype._createAllParts
 * @see DKTools.Window.prototype._createWindowskin
 */
DKTools.Window.prototype._createAll = function() {
    DKTools.Base.prototype._createAll.call(this);
    this._createAllParts();
    this._createWindowskin();
};

/**
 * Creates all parts of the window
 *
 * @private
 * @override
 *
 * @see DKTools.Window.prototype._createSpriteContainer
 * @see DKTools.Window.prototype._createBackSprite
 * @see DKTools.Window.prototype._createFrameSprite
 * @see DKTools.Window.prototype._createPauseSignSprite
 */
DKTools.Window.prototype._createAllParts = function() {
    this._createSpriteContainer();
    this._createBackSprite();
    this._createFrameSprite();
    this._createPauseSignSprite();
};

/**
 * Creates the container of the sprites
 *
 * @private
 */
DKTools.Window.prototype._createSpriteContainer = function() {
    /**
     * @private
     * @readonly
     * @type {PIXI.Container}
     */
    this._windowSpriteContainer = new PIXI.Container();
};

/**
 * Creates the sprite of the background
 *
 * @private
 */
DKTools.Window.prototype._createBackSprite = function() {
    if (this.needsCreateBackSprite()) {
        /**
         * @private
         * @readonly
         * @type {Sprite}
         */
        this._windowBackSprite = new Sprite();
        this._windowBackSprite.opacity = this.standardBackOpacity();
        this._windowBackSprite.visible = this.standardBackVisible();
    }
};

/**
 * Creates the sprtie of the frame
 *
 * @private
 */
DKTools.Window.prototype._createFrameSprite = function() {
    if (this.needsCreateFrameSprite()) {
        /**
         * @private
         * @readonly
         * @type {Sprite}
         */
        this._windowFrameSprite = new Sprite();
        this._windowFrameSprite.visible = this.standardFrameVisible();
    }
};

/**
 * Creates the sprite of the pause sign
 *
 * @private
 */
DKTools.Window.prototype._createPauseSignSprite = function() {
    if (this.needsCreatePauseSignSprite()) {
        /**
         * @private
         * @readonly
         * @type {Sprite}
         */
        this._windowPauseSignSprite = new Sprite();
    }
};

/**
 * Creates the window skin
 *
 * @private
 *
 * @see DKTools.Window.prototype.loadWindowskin
 */
DKTools.Window.prototype._createWindowskin = function() {
    this.windowskin = this.loadWindowskin();
};

// _setup methods

/**
 * Sets the events
 *
 * @private
 * @override
 *
 * @see DKTools.Base.prototype._setupEvents
 * @see DKTools.Base.prototype.needsCreateArrowsSprites
 * @see DKTools.Base.prototype._setupCreateAllEvent
 */
DKTools.Window.prototype._setupEvents = function() {
    DKTools.Base.prototype._setupEvents.call(this);
    if (this.needsCreateArrowsSprites()) {
        this._setupCreateAllEvent();
    }
};

/**
 * @private
 */
DKTools.Window.prototype._setupCreateAllEvent = function() {
     this.addOneTimeEvent({
         type: 'createAll',
         onSuccess: this.createArrows.bind(this)
     });
};

// _add methods

/**
 * Adds children objects to processing
 *
 * @private
 * @override
 *
 * @see DKTools.Base.prototype._addAllChildren
 * @see DKTools.Window.prototype._addAllParts
 */
DKTools.Window.prototype._addAllChildren = function() {
    DKTools.Base.prototype._addAllChildren.call(this);
    this._addAllParts();
};

/**
 * Adds all parts of the window to processing
 *
 * @private
 *
 * @see DKTools.Window.prototype._addSpriteContainer
 * @see DKTools.Window.prototype._addPauseSignSprite
 */
DKTools.Window.prototype._addAllParts = function() {
    this._addSpriteContainer();
    this._addPauseSignSprite();
};

/**
 * Adds the container of the sprites to processing
 *
 * @private
 */
DKTools.Window.prototype._addSpriteContainer = function() {
    if (this.hasSpriteContainer()) {
        if (this.hasBackSprite()) {
            this._windowSpriteContainer.addChild(this._windowBackSprite);
        }
        if (this.hasFrameSprite()) {
            this._windowSpriteContainer.addChild(this._windowFrameSprite);
        }
        this.addChild(this._windowSpriteContainer);
    }
};

/**
 * Adds the sprite of the contents to processing
 *
 * @private
 */
DKTools.Window.prototype._addContentsSprite = function() {
    if (this.hasContentsSprite()) {
        this.addChild(this._windowContentsSprite);
    }
};

/**
 * Adds the sprite of the pause sign to processing
 *
 * @private
 */
DKTools.Window.prototype._addPauseSignSprite = function() {
    if (this.hasPauseSignSprite()) {
        this.addChild(this._windowPauseSignSprite);
    }
};

// standard methods

/**
 * Returns the standard openness of the window
 *
 * @returns {Number} Standard openness of the window
 */
DKTools.Window.prototype.standardOpenness = function() {
    return 255;
};

/**
 * Returns the standard openness speed of the window
 *
 * @returns {Number} Standard openness speed of the window
 */
DKTools.Window.prototype.standardOpennessSpeed = function() {
    return 16;
};

/**
 * Returns the standard margin of the window
 *
 * @returns {Number} Standard margin of the window
 */
DKTools.Window.prototype.standardMargin = function() {
    return 4;
};

/**
 * Returns the standard origin of the window
 *
 * @returns {Point} Standard origin of the window
 */
DKTools.Window.prototype.standardOrigin = function() {
    return new Point(0, 0);
};

/**
 * Returns the standard normal state of the arrow
 *
 * @returns {Function} Standard normal state of the arrow
 */
DKTools.Window.prototype.standardArrowNormalState = function() {
    return function(event) {
        const arrow = event.target;
        arrow.setScale(1, 1);
        arrow.setOpacity(255);
    };
};

/**
 * Returns the standard pressed state of the arrow
 *
 * @returns {Function} Standard pressed state of the arrow
 */
DKTools.Window.prototype.standardArrowPressedState = function() {
    return function(event) {
        const arrow = event.target;
        arrow.setScale(0.9, 0.9);
        arrow.setOpacity(160);
    };
};

/**
 * Returns the standard sprite of the contents
 *
 * @returns {DKTools.Sprite} Standard sprite of the contents
 */
DKTools.Window.prototype.standardContentsSprite = function() {
    return new DKTools.Sprite();
};

/**
 * Returns the standard X coordinate of the child
 *
 * @returns {Number} Standard X coordinate of the child
*/
DKTools.Window.prototype.standardChildX = function() {
	return this.standardPadding();
};

/**
 * Returns the standard Y coordinate of the child
 *
 * @returns {Number} Standard Y coordinate of the child
*/
DKTools.Window.prototype.standardChildY = function() {
	return this.standardPadding();
};

/**
 * Returns the standard position of the child
 *
 * @returns {Point} Standard position of the child
 */
DKTools.Window.prototype.standardChildPosition = function() {
    return new Point(this.standardChildX(), this.standardChildY());
};

/**
 * Returns the standard position of the contents
 *
 * @returns {Point} Standard position of the contents
 */
DKTools.Window.prototype.standardContentsPosition = function() {
    return this.standardChildPosition();
};

/**
 * Returns the standard visibility of the background
 *
 * @returns {Boolean} Standard visibility of the background
 */
DKTools.Window.prototype.standardBackVisible = function() {
    return true;
};

/**
 * Returns the standard visibility of the frame
 *
 * @returns {Boolean} Standard visibility of the frame
 */
DKTools.Window.prototype.standardFrameVisible = function() {
    return true;
};

/**
 * Returns the standard width of the contents
 *
 * @returns {Function} Standard width of the contents
 */
DKTools.Window.prototype.standardContentsWidth = function() {
    return function() {
        return this._width - this.standardPadding() * 2;
    }.bind(this);
};

/**
 * Returns the standard height of the contents
 *
 * @returns {Function} Standard height of the contents
 */
DKTools.Window.prototype.standardContentsHeight = function() {
    return function() {
        return this._height - this.standardPadding() * 2;
    }.bind(this);
};

/**
 * Returns the standard opacity of the window
 *
 * @returns {Number} Standard opacity of the window
 */
DKTools.Window.prototype.standardWindowOpacity = function() {
    return 255;
};

/**
 * Returns the standard opacity of the contents
 *
 * @returns {Number} Standard opacity of the contents
 */
DKTools.Window.prototype.standardContentsOpacity = function() {
    return 255;
};

/**
 * Returns the standard opacity of the frame
 *
 * @returns {Number} Standard opacity of the frame
 */
DKTools.Window.prototype.standardFrameOpacity = function() {
    return 255;
};

/**
 * Returns the standard opacity
 *
 * @see DKTools.Window.prototype.standardWindowOpacity
 * @see DKTools.Window.prototype.standardContentsOpacity
 * @see DKTools.Window.prototype.standardFrameOpacity
 * @see DKTools.Window.prototype.standardBackOpacity
 *
 * @returns {Object} Standard opacity
 */
DKTools.Window.prototype.standardOpacity = function() {
    return {
        windowOpacity: this.standardWindowOpacity(),
        contentsOpacity: this.standardContentsOpacity(),
        frameOpacity: this.standardFrameOpacity(),
        backOpacity: this.standardBackOpacity()
    };
};

/**
 * Returns the standard tone of the window
 *
 * @returns {Number[]} Standard tone of the window
*/
DKTools.Window.prototype.standardTone = function() {
    try {
        return $gameSystem.windowTone();
    } catch(e) {
    }
    return [0, 0, 0];
};

// setup methods

/**
 * Sets all parameters
 *
 * @override
 *
 * @param {Object} [object] - Parameters
 *
 * @param {Function | Number} [object.contentsWidth] - Width of thw window
 * @param {Function | Number} [object.contentsHeight] - Height of thw window
 * @param {Object} [object.opacity] - Opacity of the window
 * @param {Number[]} [object.tone] - Tone of the window
 *
 * @param {Number} [opacity.windowOpacity] - Opacity of the window
 * @param {Number} [opacity.contentsOpacity] - Opacity of the contents
 * @param {Number} [opacity.frameOpacity] - Opacity of the frame
 * @param {Number} [opacity.backOpacity] - Opacity of the background
 *
 * @see свойства object: DKTools.Base.prototype.setupAll
*/
DKTools.Window.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.Base.prototype.setupAll.call(this, object);
    let contentsSprite = object.contentsSprite;
    if (object instanceof DKTools.Window && contentsSprite instanceof DKTools.Sprite) {
        contentsSprite = contentsSprite.clone({ blockStart: true });
    }
    this.setupContentsWidth(object.contentsWidth);
    this.setupContentsHeight(object.contentsHeight);
    this.setupContentsSprite(contentsSprite);
    this.setupContentsPosition(object.contentsPosition);
    this.setupOpacity(object.opacity);
	this.setupTone(object.tone);
};

/**
 * Sets the width of the window
 *
 * @param {Number} [width] - Width of the window
 */
DKTools.Window.prototype.setupWidth = function(width) {
    this.realWidth = this._checkWidth(width);
};

/**
 * Sets the height of the window
 *
 * @param {Number | String} [height] - Height of the window
 */
DKTools.Window.prototype.setupHeight = function(height) {
    if (_.isString(height)) {
        height = this.getLineHeight() * Number(height);
    }
    this.realHeight = this._checkHeight(height);
};

/**
 * Sets the size of the window
 *
 * @param {Number | Object} [object] - Width of the window or object with parameters
 * @param {Number | String} [height] - Height of the window
 *
 * @param {Number} [object.width] - Width of the window
 * @param {Number | String} [object.height] - Height of the window
 *
 * @see DKTools.Window.prototype._checkWidth
 * @see DKTools.Window.prototype._checkHeight
 * @see Window.prototype.move
 */
DKTools.Window.prototype.setupSize = function(object, height) {
    if (object instanceof Object) {
        return this.setupSize(object.width, object.height);
    }
    if (_.isString(height)) {
        height = this.getLineHeight() * Number(height);
    }
    // object - Number
    object = this._checkWidth(object);
    height = this._checkHeight(height);
    Window.prototype.move.call(this, this.x, this.y, object, height);
};

/**
 * Sets the width of the contents
 *
 * @param {Function | Number} [contentsWidth=this.standardContentsWidth()] - Width of the contents
 *
 * @see DKTools.Window.prototype.standardContentsWidth
 */
DKTools.Window.prototype.setupContentsWidth = function(contentsWidth) {
    this._contentsWidth = contentsWidth || this.standardContentsWidth();
};

/**
 * Sets the height of the contents
 *
 * @param {Function | Number} [contentsHeight=this.standardContentsHeight()] - Height of the contents
 *
 * @see DKTools.Window.prototype.standardContentsHeight
 */
DKTools.Window.prototype.setupContentsHeight = function(contentsHeight) {
    this._contentsHeight = contentsHeight || this.standardContentsHeight();
};

/**
 * Sets the sprite of the contents
 *
 * @param {DKTools.Sprite | *} [contentsSprite=this.standardContentsSprite()] - Sprite of the contents
 *
 * @see DKTools.Window.prototype.standardContentsSprite
 */
DKTools.Window.prototype.setupContentsSprite = function(contentsSprite) {
    /**
     * @private
     * @readonly
     * @type {DKTools.Sprite | *}
     */
    this._windowContentsSprite = contentsSprite || this.standardContentsSprite();
};

/**
 * Sets the position of the contents
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object=this.standardContentsPosition()] - The X coordinate or Point or object with parameters
 * @param {Number} [y=undefined] - The Y coordinate (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 *
 * @see DKTools.Utils.Point.convertToPoint
 * @see DKTools.Utils.Point.standardContentsPosition
 */
DKTools.Window.prototype.setupContentsPosition = function(object, y) {
    const position = DKTools.Utils.Point.convertToPoint(object, y);
    const newPosition = Object.assign(this.standardContentsPosition(), position);

    /**
     * @private
     * @readonly
     * @type {Point}
     */
    this._contentsPosition = new Point(newPosition.x, newPosition.y);
};

/**
 * Sets the opacity of the window
 *
 * @param {Object} [opacity=this.standardOpacity()] - Opacity of the window
 *
 * @param {Number} [opacity.windowOpacity] - Opacity of the window
 * @param {Number} [opacity.contentsOpacity] - Opacity of the contents
 * @param {Number} [opacity.frameOpacity] - Opacity of the frame
 * @param {Number} [opacity.backOpacity] - Opacity of the background
 *
 * @see DKTools.Window.prototype.standardOpacity
*/
DKTools.Window.prototype.setupOpacity = function(opacity) {
    /**
     * @private
     * @type {Object}
     */
    this._opacity = Object.assign(this.standardOpacity(), opacity);
};

/**
 * Sets the tone of the window
 *
 * @param {Number[]} [tone=this.standardTone()] - Tone of the window
 *
 * @see DKTools.Window.prototype.standardTone
 */
DKTools.Window.prototype.setupTone = function(tone) {
    const standardTone = _.clone(this.standardTone());

    /**
     * @private
     * @type {Number[]}
     */
    this._tone = Object.assign(standardTone, tone);
};

// set methods

/**
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @override
 *
 * @param {Object} [object] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the window
 *
 * @param {Object} [object.opacity] - Opacity of the window
 * @param {Number[]} [object.tone] - Tone of the window
 *
 * @param {Number} [object.opacity.windowOpacity] - Opacity of the window
 * @param {Number} [object.opacity.contentsOpacity] - Opacity of the contents
 * @param {Number} [object.opacity.frameOpacity] - Opacity of the frame
 * @param {Number} [object.opacity.backOpacity] - Opacity of the background
 *
 * @see DKTools.Base.prototype.setAll
 * @see DKTools.Window.prototype.setOpacity
 * @see DKTools.Window.prototype.setTone
 * @see DKTools.Window.prototype.start
 * @see DKTools.Window.prototype.activate
 *
 * @returns {Number} Number of changed parameters
*/
DKTools.Window.prototype.setAll = function(object, blockStart, activate) {
	object = object || {};
	const block = true;
	let changed = DKTools.Base.prototype.setAll.call(this, object, block);
	if (this.setOpacity(object.opacity, block)) {
        changed++;
    }
    if (this.setTone(object.tone, block)) {
        changed++;
    }
    if (changed) {
        if (!blockStart) {
            this.start();
        }
        if (activate) {
            this.activate();
        }
    }
	return changed;
};

/**
 * Changes the width of the window
 * Returns true if the change occurred
 *
 * @param {Number} [width] - Width of the window
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the window
 *
 * @see DKTools.Window.prototype.resize
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Window.prototype.setWidth = function(width, blockStart, activate) {
    return this.resize(width, this._height, blockStart, activate);
};

/**
 * Changes the height of the window
 * Returns true if the change occurred
 *
 * @param {Number} [height] - Height of the window
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the window
 *
 * @see DKTools.Window.prototype.resize
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Window.prototype.setHeight = function(height, blockStart, activate) {
    return this.resize(this._width, height, blockStart, activate);
};

/**
 * Changes the sprite of the contents
 * Returns true if the change occurred
 *
 * @param {DKTools.Sprite | *} [contentsSprite]
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the window
 *
 * @see DKTools.Window.prototype.removeContentsSprite
 * @see DKTools.Window.prototype.setupContentsSprite
 * @see DKTools.Window.prototype.addContentsSprite
 * @see DKTools.Window.prototype.activate
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Window.prototype.setContentsSprite = function(contentsSprite, blockStart, activate) {
    if (this._windowContentsSprite == contentsSprite) {
        return false;
    }
    // TODO: проверить
    this.removeContentsSprite();
    this.setupContentsSprite(contentsSprite);
    this.addContentsSprite();
    if (!blockStart) {
        this.start();
    }
    if (activate) {
        this.activate();
    }
    return true;
};

/**
 * Changes the position of the contents
 * Returns true if the change occurred
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - The X coordinate or Point or object with parameters
 * @param {Number} [y=undefined] - The Y coordinate (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 *
 * @see DKTools.Utils.Point.convertToPoint
 * @see DKTools.Utils.Point.equals
 * @see DKTools.Utils.Point.clone
 * @see DKTools.Window.prototype.setupContentsPosition
 * @see DKTools.Window.prototype._refreshContents
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Window.prototype.setContentsPosition = function(object, y) {
    if (object instanceof Object) {
        return this.setContentsPosition(object, y);
    }
    // object - Number
    const newPos = DKTools.Utils.Point.convertToPoint(object, y);
    if (DKTools.Utils.Point.equals(this._contentsPosition, newPos)) {
        return false;
    }
    const lastPos = DKTools.Utils.Point.clone(this._contentsPosition);
    this.setupContentsPosition(newPos);
    if (!DKTools.Utils.Point.equals(this._contentsPosition, lastPos)) {
        this._refreshContents();
        return true;
    }
    return false;
};

/**
 * Changes the opacity of the window
 * Returns true if the change occurred
 *
 * @param {Object} [opacity] - Opacity of the window
 * {Boolean} [blockUpdateOpacity=false] - Blocking the call of the "updateOpacity" function
 *
 * @param {Number} [opacity.windowOpacity] - Opacity of the window
 * @param {Number} [opacity.contentsOpacity] - Opacity of the contents
 * @param {Number} [opacity.frameOpacity] - Opacity of the frame
 * @param {Number} [opacity.backOpacity] - Opacity of the background
 *
 * @see DKTools.Window.prototype.setupOpacity
 * @see DKTools.Window.prototype.updateOpacity
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Window.prototype.setOpacity = function(opacity, blockUpdateOpacity) {
    if (_.isEqual(this._opacity, Object.assign(this.standardOpacity(), opacity))) {
        return false;
    }
    this.setupOpacity(opacity);
    if (!blockUpdateOpacity) {
        this.updateOpacity();
    }
    return true;
};

/**
 * Changes the tone of the window
 * Returns true if the change occurred
 *
 * @override
 *
 * @param {Number[]} [tone] - Tone of the window
 * @param {Boolean} [blockUpdateTone=false] - Blocking the call of the "updateTone" function
 *
 * @see DKTools.Window.prototype.setupTone
 * @see DKTools.Window.prototype.updateTone
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Window.prototype.setTone = function(tone, blockUpdateTone) {
    const standardTone = _.clone(this.standardTone());
    if (_.isEqual(this._tone, Object.assign(standardTone, tone))) {
        return false;
    }
    this.setupTone(tone);
    if (!blockUpdateTone) {
        this.updateTone();
    }
    return true;
};

// get methods

/**
 * Returns the minimum width of the window
 *
 * @override
 *
 * @see DKTools.Window.prototype.standardPadding
 * @see DKTools.Base.prototype.getMinWidth
 *
 * @returns {Number} Minimum width of the window
 */
DKTools.Window.prototype.getMinWidth = function() {
    return this.standardPadding() * 2 + DKTools.Base.prototype.getMinWidth.call(this);
};

/**
 * Returns the minimum height of the window
 *
 * @override
 *
 * @see DKTools.Window.prototype.standardPadding
 * @see DKTools.Base.prototype.getMinHeight
 *
 * @returns {Number} Minimum height of the window
 */
DKTools.Window.prototype.getMinHeight = function() {
    return this.standardPadding() * 2 + DKTools.Base.prototype.getMinHeight.call(this);
};

/**
 * Returns the width of the contents
 *
 * @returns {Number} Width of the contents
 */
DKTools.Window.prototype.getContentsWidth = function() {
    if (_.isFunction(this._contentsWidth)) {
        return this._contentsWidth();
    }
    return this._contentsWidth;
};

/**
 * Returns the height of the contents
 *
 * @returns {Number} Height of the contents
 */
DKTools.Window.prototype.getContentsHeight = function() {
    if (_.isFunction(this._contentsHeight)) {
        return this._contentsHeight();
    }
    return this._contentsHeight;
};

/**
 * Returns the size of the contents
 *
 * @see DKTools.Window.prototype.getContentsWidth
 * @see DKTools.Window.prototype.getContentsHeight
 *
 * @returns {Object} Size of the contents
 */
DKTools.Window.prototype.getContentsSize = function() {
    return { width: this.getContentsWidth(), height: this.getContentsHeight() };
};

/**
 * Returns the arrow by ID
 *
 * @param {Number | String} id - ID of the arrow
 * @returns {DKTools.Sprite.Arrow | undefined} Sprite of the arrow or undefined
 */
DKTools.Window.prototype.getArrow = function(id) {
    return _.find(this._arrows, { id: id });
};

/**
 * Returns the current opacity of the window
 *
 * @returns {Number} Current opacity of the window
 */
DKTools.Window.prototype.getCurrentOpacity = function() {
    return this.windowOpacity;
};

// needs create methods

/**
 * Returns true if needs to create the sprite of the background
 *
 * @returns {Boolean} Needs to create the sprite of the background
 */
DKTools.Window.prototype.needsCreateBackSprite = function() {
    return true;
};

/**
 * Returns true if needs to create the sprite of the frame
 *
 * @returns {Boolean} Needs to create the sprite of the frame
 */
DKTools.Window.prototype.needsCreateFrameSprite = function() {
    return true;
};

/**
 * Returns true if needs to create the sprites of the arrows
 *
 * @returns {Boolean} Needs to create the sprites of the arrows
 */
DKTools.Window.prototype.needsCreateArrowsSprites = function() {
    return false;
};

/**
 * Returns true if needs to create the sprite of the down arrow
 *
 * @returns {Boolean} Needs to create the sprite of the down arrow
 */
DKTools.Window.prototype.needsCreateDownArrowSprite = function() {
    return true;
};

/**
 * Returns true if needs to create the sprite of the up arrow
 *
 * @returns {Boolean} Needs to create the sprite of the up arrow
 */
DKTools.Window.prototype.needsCreateUpArrowSprite = function() {
    return true;
};

/**
 * Returns true if needs to create the sprite of the left arrow
 *
 * @returns {Boolean} Needs to create the sprite of the left arrow
 */
DKTools.Window.prototype.needsCreateLeftArrowSprite = function() {
    return true;
};

/**
 * Returns true if needs to create the sprite of the right arrow
 *
 * @returns {Boolean} Needs to create the sprite of the right arrow
 */
DKTools.Window.prototype.needsCreateRightArrowSprite = function() {
    return true;
};

/**
 * Returns true if needs to create the sprite of the pause sign
 *
 * @returns {Boolean} Needs to create the sprite of the pause sign
 */
DKTools.Window.prototype.needsCreatePauseSignSprite = function() {
    return true;
};

// _refresh methods

/**
 * Updates all parts of the window
 *
 * @private
 * @override
 *
 * @see DKTools.Window.prototype._refreshBack
 * @see DKTools.Window.prototype._refreshFrame
 * @see DKTools.Window.prototype._refreshContents
 * @see DKTools.Window.prototype._refreshPauseSign
 */
DKTools.Window.prototype._refreshAllParts = function() {
    this._refreshBack();
    this._refreshFrame();
    this._refreshContents();
    this._refreshPauseSign();
};

/**
 * Updates the background of the window
 *
 * @private
 * @override
 *
 * @see Window.prototype._refreshBack
 */
DKTools.Window.prototype._refreshBack = function() {
    if (this.hasBackSprite()) {
        Window.prototype._refreshBack.call(this);
    }
};

/**
 * Updates the frame of the window
 *
 * @private
 * @override
 *
 * @see Window.prototype._refreshFrame
 */
DKTools.Window.prototype._refreshFrame = function() {
    if (this.hasFrameSprite()) {
        Window.prototype._refreshFrame.call(this);
    }
};

/**
 * Updates the contents
 *
 * @private
 * @override
 */
DKTools.Window.prototype._refreshContents = function() {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.move(this._contentsPosition);
    }
};

/**
 * Updates the sprite of the pause sign
 *
 * @private
 * @override
 *
 * @see Window.prototype._refreshPauseSign
 */
DKTools.Window.prototype._refreshPauseSign = function() {
    if (this.hasPauseSignSprite()) {
        Window.prototype._refreshPauseSign.call(this);
    }
};

// start methods

/**
 * Starts the window
 *
 * @param {Boolean} [activate=false] - Activates the window
 *
 * @see DKTools.Base.prototype.start
 */
DKTools.Window.prototype.start = function(activate) {
    if (this.hasContentsSprite()) {
        const contentsSprite = this._windowContentsSprite;
        contentsSprite.resize(this.getContentsWidth(), this.getContentsHeight(), true);
        contentsSprite.start(activate);
    }
    DKTools.Base.prototype.start.call(this, activate);
};

// remove methods

/**
 * Removes children objects from processing
 *
 * @override
 */
DKTools.Window.prototype.removeAllChildren = function() {
    DKTools.Base.prototype.removeAllChildren.call(this);
    this.removeContentsSprite();
};

/**
 * Removes the sprite of the contents from processing
 */
DKTools.Window.prototype.removeContentsSprite = function() {
    if (this.hasContentsSprite()) {
        this.removeChild(this._windowContentsSprite);
    }
};

/**
 * Removes the arrow by ID
 *
 * @param {Number | String} id - ID of the arrow
 *
 * @see DKTools.Window.prototype.getArrow
 * @see DKTools.Utils.Array.remove
 * @see DKTools.Window.prototype.removeChild
 */
DKTools.Window.prototype.removeArrow = function(id) {
    const arrow = this.getArrow(id);
    if (arrow) {
        DKTools.Utils.Array.remove(this._arrows, arrow);
        this.removeChild(arrow);
    }
};

// check methods

/**
 * Checks size of the window
 * Returns the number of changed parameters
 *
 * @override
 *
 * @see DKTools.Window.prototype.getMinWidth
 * @see DKTools.Window.prototype.getMinHeight
 *
 * @returns {Number} Number of changed parameters
 */
DKTools.Window.prototype.checkSize = function() {
    const minWidth = this.getMinWidth();
    const minHeight = this.getMinHeight();
    let changed = 0;
    if (this._width < minWidth) {
        this.setupWidth(minWidth);
        changed++;
    }
    if (this._height < minHeight) {
        this.setupHeight(minHeight);
        changed++;
    }
    return changed;
};

// create methods

/**
 * Creates the arrow
 *
 * @param {String} type - Type of the arrow
 * @param {Number | String | *} id - ID of the arrow
 * @param {Function} onUpdate -
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - The X coordinate или Позиция
 * @param {Number | String} [y] - The Y coordinate
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number | String} [object.y] - The Y coordinate
 *
 * @see DKTools.Event.prototype.onUpdate
 * @see DKTools.Sprite.Arrow
 *
 * @returns {DKTools.Sprite.Arrow}
 */
DKTools.Window.prototype.createArrow = function(type, id, options) {
    const arrow = new DKTools.Sprite.Arrow({
        x: options.x,
        y: options.y,
        id: id,
        arrowType: type
    });
    arrow.start();
    arrow.addEvent({
        type: 'update',
        onUpdate: function(event) {
            if (this.isOpenAndVisible()) {
                arrow.show();
            } else {
                arrow.hide();
            }
            options.onUpdate(event);
        }.bind(this)
    });
    if (_.isFunction(options.onClick)) {
        arrow.addEvent({
            type: 'mouse-click-left',
            onUpdate: options.onClick
        });
    }
    if (_.isFunction(options.onLongPress)) {
        arrow.addEvent({
            type: 'mouse-longPress-left',
            onUpdate: options.onLongPress
        });
    }
    if (_.isFunction(options.onNormalState)) {
        arrow.addEvent({
            type: 'normalState',
            onUpdate: options.onNormalState
        });
    }
    if (_.isFunction(options.onPressedState)) {
        arrow.addEvent({
            type: 'pressedState',
            onUpdate: options.onPressedState
        });
    }
    this._arrows.push(arrow);
    this.addChild(arrow);
    return arrow;
};

/**
 * Creates the arrows
 *
 * @see DKTools.Window.prototype.needsCreateDownArrowSprite
 * @see DKTools.Window.prototype.needsCreateUpArrowSprite
 * @see DKTools.Window.prototype.needsCreateRightArrowSprite
 * @see DKTools.Window.prototype.needsCreateLeftArrowSprite
 * @see DKTools.Window.prototype.createArrow
 * @see DKTools.Window.prototype.onUpdateDownArrow
 * @see DKTools.Window.prototype.onClickDownArrow
 * @see DKTools.Window.prototype.onLongPressDownArrow
 * @see DKTools.Window.prototype.onUpdateUpArrow
 * @see DKTools.Window.prototype.onClickUpArrow
 * @see DKTools.Window.prototype.onLongPressUpArrow
 * @see DKTools.Window.prototype.onUpdateRightArrow
 * @see DKTools.Window.prototype.onClickRightArrow
 * @see DKTools.Window.prototype.onLongPressRightArrow
 * @see DKTools.Window.prototype.onUpdateLeftArrow
 * @see DKTools.Window.prototype.onClickLeftArrow
 * @see DKTools.Window.prototype.onLongPressLeftArrow
 * @see DKTools.Window.prototype.standardArrowNormalState
 * @see DKTools.Window.prototype.standardArrowPressedState
 */
DKTools.Window.prototype.createArrows = function() {
    const w = this._width;
    const h = this._height;
    const q = 12;
    if (this.needsCreateDownArrowSprite()) {
        this.createArrow('down', 'down', {
            x: w / 2,
            y: h - q,
            onUpdate: this.onUpdateDownArrow.bind(this),
            onClick: this.onClickDownArrow.bind(this),
            onLongPress: this.onLongPressDownArrow.bind(this),
            onNormalState: this.standardArrowNormalState(),
            onPressedState: this.standardArrowPressedState()
        });
    }
    if (this.needsCreateUpArrowSprite()) {
        this.createArrow('up', 'up', {
            x: w / 2,
            y: q,
            onUpdate: this.onUpdateUpArrow.bind(this),
            onClick: this.onClickUpArrow.bind(this),
            onLongPress: this.onLongPressUpArrow.bind(this),
            onNormalState: this.standardArrowNormalState(),
            onPressedState: this.standardArrowPressedState()
        });
    }
    if (this.needsCreateRightArrowSprite()) {
        this.createArrow('right', 'right', {
            x: w - q,
            y: h / 2,
            onUpdate: this.onUpdateRightArrow.bind(this),
            onClick: this.onClickRightArrow.bind(this),
            onLongPress: this.onLongPressRightArrow.bind(this),
            onNormalState: this.standardArrowNormalState(),
            onPressedState: this.standardArrowPressedState()
        });
    }
    if (this.needsCreateLeftArrowSprite()) {
        this.createArrow('left', 'left', {
            x: q,
            y: h / 2,
            onUpdate: this.onUpdateLeftArrow.bind(this),
            onClick: this.onClickLeftArrow.bind(this),
            onLongPress: this.onLongPressLeftArrow.bind(this),
            onNormalState: this.standardArrowNormalState(),
            onPressedState: this.standardArrowPressedState()
        });
    }
};

// add methods

/**
 * Adds children objects to processing
 *
 * @override
 */
DKTools.Window.prototype.addAllChildren = function() {
    DKTools.Base.prototype.addAllChildren.call(this);
    this.addContentsSprite();
};

/**
 * Adds the sprite of the contents to processing
 */
DKTools.Window.prototype.addContentsSprite = function() {
    this._addContentsSprite();
    this._refreshContents();
};

// refresh methods

/**
 * Updates and redraws all
 *
 * @override
 */
DKTools.Window.prototype.refreshAll = function() {
    DKTools.Base.prototype.refreshAll.call(this); // TODO: проверить, чтобы вызывался updateAll
    if (this.canRefreshAll()) {
        this._windowContentsSprite.refreshAll();
    }
};

// can methods

/**
 * Returns true if the window can be updated and redrawn
 *
 * @override
 * @returns {Boolean} Window can be updated and redrawn
 */
DKTools.Window.prototype.canRefreshAll = function() {
    return this.hasContentsSprite() && DKTools.Base.prototype.canRefreshAll.call(this);
};

// draw methods

/**
 * Draws the text
 *
 * @override
 *
 * @param {String} text - Text
 * @param {Object} [options={}] - Options for drawing
 *
 * @see DKTools.Window.prototype.hasContentsSprite
 * @see DKTools.Sprite.prototype.drawText
 */
DKTools.Window.prototype.drawText = function(text, options) {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.drawText(text, options);
    }
};

// frame methods

/**
 * Shows the frame
 */
DKTools.Window.prototype.showFrame = function() {
    if (this.hasFrameSprite()) {
        this._windowFrameSprite.visible = true;
    }
};

/**
 * Hides the frame
 */
DKTools.Window.prototype.hideFrame = function() {
    if (this.hasFrameSprite()) {
        this._windowFrameSprite.visible = false;
    }
};

// back methods

/**
 * Shows the background
 *
 * @see DKTools.Window.prototype.hasBackSprite
 */
DKTools.Window.prototype.showBack = function() {
    if (this.hasBackSprite()) {
        this._windowBackSprite.visible = true;
    }
};

/**
 * Hides the background
 *
 * @see DKTools.Window.prototype.hasBackSprite
 */
DKTools.Window.prototype.hideBack = function() {
    if (this.hasBackSprite()) {
        this._windowBackSprite.visible = false;
    }
};

// contents methods

/**
 * Shows the contents
 *
 * @param {Boolean} [activate=false] - Activates the contents
 *
 * @see DKTools.Window.prototype.hasContentsSprite
 */
DKTools.Window.prototype.showContents = function(activate) {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.show(activate);
    }
};

/**
 * Hides the contents
 */
DKTools.Window.prototype.hideContents = function() {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.hide();
    }
};

// is method

/**
 * Returns true if the window is visible
 *
 * @returns {Boolean} Window is visible
 */
DKTools.Window.prototype.isVisible = function() {
    return DKTools.Base.prototype.isVisible.call(this) && this.windowOpacity > 0 && this.openness > 0 && this.width > 0 && this.height > 0;
};

/**
 * Returns true if the window is open and visible
 *
 * @returns {Boolean} Window is open and visible
 */
DKTools.Window.prototype.isOpenAndVisible = function() {
    return this.isOpen() && this.isVisible();
};

/**
 * Returns true if the window is open and active
 *
 * @returns {Boolean} Window is open and active
 */
DKTools.Window.prototype.isOpenAndActive = function() {
    return this.isOpen() && this.isActive();
};

/**
 * Returns true if the coordinates is inside the window
 *
 * @override
 *
 * @param {Number} x - The X coordinate
 * @param {Number} y - The Y coordinate
 *
 * @returns {Boolean} Coordinates is inside the window
 */
DKTools.Window.prototype.isInside = function(x, y) {
    const localX = this.canvasToLocalX(x);
    const localY = this.canvasToLocalY(y);
    const frame = new Rectangle(0, 0, this.width, this.height);
    return frame.contains(localX, localY);
};

// has methods

/**
 * Returns true if the window has the container of the sprites
 *
 * @returns {Boolean} Window has the container of the sprites
 */
DKTools.Window.prototype.hasSpriteContainer = function() {
    return !!this._windowSpriteContainer;
};

/**
 * Returns true if the window has the sprite of the background
 *
 * @returns {Boolean} Window has the sprite of the background
 */
DKTools.Window.prototype.hasBackSprite = function() {
    return !!this._windowBackSprite;
};

/**
 * Returns true if the window has the sprite of the frame
 *
 * @returns {Boolean} Window has the sprite of the frame
 */
DKTools.Window.prototype.hasFrameSprite = function() {
    return !!this._windowFrameSprite;
};

/**
 * Returns true if the window has the sprite of the contents
 *
 * @returns {Boolean} Window has the sprite of the contents
 */
DKTools.Window.prototype.hasContentsSprite = function() {
    return !!this._windowContentsSprite;
};

/**
 * Returns true if the window has the arrow by ID
 *
 * @param {Number | String | *} id - ID of the arrow
 *
 * @see DKTools.Window.prototype.getArrow
 *
 * @returns {Boolean} Window has the arrow by ID
 */
DKTools.Window.prototype.hasArrow = function(id) {
    return !!this.getArrow(id);
};

/**
 * Returns true if the window has the sprites of the arrows
 *
 * @returns {Boolean} Window has the sprites of the arrows
 */
DKTools.Window.prototype.hasArrowSprites = function() {
    return this.hasUpArrowSprite() && this.hasDownArrowSprite() &&
            this.hasLeftArrowSprite() && this.hasRightArrowSprite();
};

/**
 * Returns true if the window has the sprite of the arrow of up
 *
 * @see DKTools.Window.prototype.hasArrow
 *
 * @returns {Boolean} Window has the sprite of the arrow of up
 */
DKTools.Window.prototype.hasUpArrowSprite = function() {
    return this.hasArrow('up');
};

/**
 * Returns true if the window has the sprite of the arrow of down
 *
 * @see DKTools.Window.prototype.hasArrow
 *
 * @returns {Boolean} Window has the sprite of the arrow of down
 */
DKTools.Window.prototype.hasDownArrowSprite = function() {
    return this.hasArrow('down');
};

/**
 * Returns true if the window has the sprite of the arrow of left
 *
 * @see DKTools.Window.prototype.hasArrow
 *
 * @returns {Boolean} Window has the sprite of the arrow of left
 */
DKTools.Window.prototype.hasLeftArrowSprite = function() {
    return this.hasArrow('left');
};

/**
 * Returns true if the window has the sprite of the arrow of right
 *
 * @see DKTools.Window.prototype.hasArrow
 *
 * @returns {Boolean} Window has the sprite of the arrow of right
 */
DKTools.Window.prototype.hasRightArrowSprite = function() {
    return this.hasArrow('right');
};

/**
 * Returns true if the window has the sprite of the pause sign
 *
 * @returns {Boolean} Window has the sprite of the pause sign
 */
DKTools.Window.prototype.hasPauseSignSprite = function() {
    return !!this._windowPauseSignSprite;
};

/**
 * Returns true if the window has the sprite of the background dimmer
 *
 * @returns {Boolean} Window has the sprite of the background dimmer
 */
DKTools.Window.prototype.hasBackgroundDimmer = function() {
    return !!this._dimmerSprite;
};

// active methods

/**
 * Activates the window
 *
 * @override
 */
DKTools.Window.prototype.activate = function() {
    DKTools.Base.prototype.activate.call(this);
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.activate();
    }
};

/**
 * Deactivates the window
 *
 * @override
 */
DKTools.Window.prototype.deactivate = function() {
    DKTools.Base.prototype.deactivate.call(this);
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.deactivate();
    }
};

// size methods

/**
 * Changes the size of the window if they are different from the current ones
 * Returns true if the change occurred
 *
 * @override
 *
 * @param {Number} [width] - Width of the window
 * @param {Number} [height] - Height of the window
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the window
 *
 * @see DKTools.Window.prototype.getMinWidth
 * @see DKTools.Window.prototype.getMinHeight
 * @see DKTools.Window.prototype.setupSize
 * @see DKTools.Window.prototype.start
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Window.prototype.resize = function(width, height, blockStart, activate) {
    width = (width == null ? this.getMinWidth() : width);
    height = (height == null ? this.getMinHeight() : height);
    if (_.isString(height)) {
        height = this.getLineHeight() * Number(height);
    }
    if (this._width === width && this._height === height) {
        return false;
    }
    const lastWidth = this._width;
    const lastHeight = this._height;
    this.setupSize(width, height);
    if (this._width === lastWidth && this._height === lastHeight) {
        return false;
    }
    if (!blockStart) {
        this.start(activate);
    }
    return true;
};

// load methods

/**
 * Loads a bitmap from a folder
 * Возвращает загруженный Bitmap
 *
 * @param {String | Object} folder - Путь к файлу или Объект типа {}
 * @param {String} filename - Название файла
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.folder - Путь к файлу
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @returns {Bitmap}
 */
DKTools.Window.prototype.loadBitmap = function(object, filename, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap(object.folder, object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    let bitmap = ImageManager.loadBitmap(object, filename, hue, smooth);
	if (listener) {
        bitmap.addLoadListener(listener);
    }
	return bitmap;
};

// reserve methods

/**
 * Loads and reserves a bitmap from a folder
 * Возвращает загруженный Bitmap
 *
 * @param {String | Object} folder - Путь к файлу или Объект типа {}
 * @param {String} filename - Название файла
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.folder - Путь к файлу
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @returns {Bitmap}
 */
DKTools.Window.prototype.reserveBitmap = function(object, filename, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap(object.folder, object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    let bitmap = ImageManager.reserveBitmap(object, filename, hue, smooth);
    if (listener) {
        bitmap.addLoadListener(listener);
    }
    return bitmap;
};

// events methods

/**
 * Updates the events with type: open
 */
DKTools.Window.prototype.updateOpenEvents = function() {
    this.updateEventsContainer('open');
};

/**
 * Updates the events with type: close
 */
DKTools.Window.prototype.updateCloseEvents = function() {
    this.updateEventsContainer('close');
};

// arrow methods

/**
 * Callback function that will be processing update of the up arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onUpdateUpArrow = function(event) {
    // to be overriden by plugins
};

/**
 * Callback function that will be processing update of the down arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onUpdateDownArrow = function(event) {
    // to be overriden by plugins
};

/**
 * Callback function that will be processing update of the left arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onUpdateLeftArrow = function(event) {
    // to be overriden by plugins
};

/**
 * Callback function that will be processing update of the right arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onUpdateRightArrow = function(event) {
    // to be overriden by plugins
};

/**
 * Callback function that will be processing click of the up arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onClickUpArrow = function(event) {
    // to be overriden by plugins
};

/**
 * Callback function that will be processing click of the down arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onClickDownArrow = function(event) {
    // to be overriden by plugins
};

/**
 * Callback function that will be processing click of the left arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onClickLeftArrow = function(event) {
    // to be overriden by plugins
};

/**
 * Callback function that will be processing click of the right arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onClickRightArrow = function(event) {
    // to be overriden by plugins
};

/**
 * Callback function that will be processing long press of the up arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onLongPressUpArrow = function(event) {
    // to be overriden by plugins
};

/**
 * Callback function that will be processing long press of the down arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onLongPressDownArrow = function(event) {
    // to be overriden by plugins
};

/**
 * Callback function that will be processing long press of the left arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onLongPressLeftArrow = function(event) {
    // to be overriden by plugins
};

/**
 * Callback function that will be processing long press of the right arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onLongPressRightArrow = function(event) {
    // to be overriden by plugins
};

// _update methods

/**
 * Updates the contents
 *
 * @private
 * @override
 */
DKTools.Window.prototype._updateContents = function() {
    if (this.hasContentsSprite()) {
        Window.prototype._updateContents.call(this);
    }
};

/**
 * Updates the sprite of the pause sign
 *
 * @private
 * @override
 */
DKTools.Window.prototype._updatePauseSign = function() {
    if (this.hasPauseSignSprite()) {
        Window.prototype._updatePauseSign.call(this);
    }
};

// update methods

/**
 * Updates all
 *
 * @override
 */
DKTools.Window.prototype.updateAll = function() {
    DKTools.Base.prototype.updateAll.call(this);
    this.updateTone();
};

/**
 * Updates the contents
 */
DKTools.Window.prototype.updateContents = function() {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.updateAll();
    }
};

/**
 * Updates the transform
 *
 * @override
 *
 * @see DKTools.Window.prototype._updateContents
 * @see DKTools.Window.prototype._updatePauseSign
 * @see PIXI.Container.prototype.updateTransform
 */
DKTools.Window.prototype.updateTransform = function() {
    this._updateContents();
    this._updatePauseSign();
    PIXI.Container.prototype.updateTransform.call(this);
};

/**
 * Updates the opaciy of thw window
 *
 * @override
 *
 * @param {Object} [opacity] - Opacity
 *
 * @param {Number} [opacity.windowOpacity] - Opacity of the window
 * @param {Number} [opacity.contentsOpacity] - Opacity of the contents
 * @param {Number} [opacity.frameOpacity] - Opacity of the frame
 * @param {Number} [opacity.backOpacity] - Opacity of the background
 */
DKTools.Window.prototype.updateOpacity = function(opacity) {
    opacity = opacity || this.opacity;
    if (this.hasSpriteContainer()) {
        this.windowOpacity = opacity.windowOpacity;
    }
    if (this.hasContentsSprite()) {
        this.contentsOpacity = opacity.contentsOpacity;
    }
    if (this.hasFrameSprite()) {
        this.frameOpacity = opacity.frameOpacity;
    }
    if (this.hasBackSprite()) {
        this.backOpacity = opacity.backOpacity;
    }
};

/**
 * Updates the tone of the window
 *
 * @override
 *
 * @see Window.prototype.setTone
 *
 * @param {Number[]} [tone] - Tone of the window
*/
DKTools.Window.prototype.updateTone = function(tone) {
    tone = tone || this.tone;
    if (this.hasBackSprite()) {
        Window.prototype.setTone.apply(this, tone);
    }
};

/**
 * Updates the opening of the window
 *
 * @override
*/
DKTools.Window.prototype.updateOpen = function() {
	if (!this._opening) {
        return;
    }
	this.openness += this.standardOpennessSpeed();
	if (this.isOpen()) {
		this._opening = false;
        this.updateOpenEvents();
	}
};

/**
 * Updates the closing of the window
 *
 * @override
*/
DKTools.Window.prototype.updateClose = function() {
	if (!this._closing) {
        return;
    }
	this.openness -= this.standardOpennessSpeed();
	if (this.isClosed()) {
		this._closing = false;
        this.updateCloseEvents();
	}
};

/**
 * Updates the window
 *
 * @override
 */
DKTools.Window.prototype.update = function() {
    DKTools.Base.prototype.update.call(this);
	this.updateOpen();
	this.updateClose();
	this.updateBackgroundDimmer();
};





//===========================================================================
// DKTools.Window.Selectable
//===========================================================================

DKTools.Window.Selectable.prototype = Object.create(DKTools.Window.prototype);
DKTools.Window.Selectable.prototype.constructor = DKTools.Window.Selectable;

// standard methods

/**
 * Returns the standard sprite of the contents
 *
 * @override
 *
 * @see DKTools.Sprite.Selectable
 *
 * @returns {DKTools.Sprite.Selectable} Standard sprite of the contents
 */
DKTools.Window.Selectable.prototype.standardContentsSprite = function() {
    return new DKTools.Sprite.Selectable();
};

// needs create methods

/**
 * Returns true if needs to create the sprites of the arrows
 *
 * @override
 *
 * @returns {Boolean} Needs to create the sprites of the arrows
 */
DKTools.Window.Selectable.prototype.needsCreateArrowsSprites = function() {
    return true;
};

// arrow methods

/**
 * Callback function that will be processing update of the up arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onUpdateUpArrow = function(event) {
    const arrow = event.target;
    arrow.hide();
    if (this.hasContentsSprite()) {
        const contentsSprite = this._windowContentsSprite;
        if (this.isChild(contentsSprite) && contentsSprite.isVisible() && contentsSprite.isSelectable() && contentsSprite.isVertical()) {
            if (contentsSprite.getTopRow() > 0) {
                arrow.show(this.isVisibleAndActive() && contentsSprite.isActive());
            }
        }
    }
};

/**
 * Callback function that will be processing update of the down arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onUpdateDownArrow = function(event) {
    const arrow = event.target;
    arrow.hide();
    if (this.hasContentsSprite()) {
        const contentsSprite = this._windowContentsSprite;
        if (this.isChild(contentsSprite) && contentsSprite.isVisible() && contentsSprite.isSelectable() && contentsSprite.isVertical()) {
            const topRow = contentsSprite.getTopRow();
            const maxTopRow = contentsSprite.getMaxTopRow();
            if (maxTopRow > 0 && topRow < maxTopRow) {
                arrow.show(this.isVisibleAndActive() && contentsSprite.isActive());
            }
        }
    }
};

/**
 * Callback function that will be processing update of the left arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onUpdateLeftArrow = function(event) {
    const arrow = event.target;
    arrow.hide();
    if (this.hasContentsSprite()) {
        const contentsSprite = this._windowContentsSprite;
        if (this.isChild(contentsSprite) && contentsSprite.isVisible() && contentsSprite.isSelectable() && contentsSprite.isHorizontal()) {
            if (contentsSprite.getTopCol() > 0) {
                arrow.show(this.isVisibleAndActive() && contentsSprite.isActive());
            }
        }
    }
};

/**
 * Callback function that will be processing update of the right arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onUpdateRightArrow = function(event) {
    const arrow = event.target;
    arrow.hide();
    if (this.hasContentsSprite()) {
        const contentsSprite = this._windowContentsSprite;
        if (this.isChild(contentsSprite) && contentsSprite.isVisible() && contentsSprite.isSelectable() && contentsSprite.isHorizontal()) {
            const topCol = contentsSprite.getTopCol();
            const maxTopCol = contentsSprite.getMaxTopCol();
            if (maxTopCol > 0 && topCol < maxTopCol) {
                arrow.show(this.isVisibleAndActive() && contentsSprite.isActive());
            }
        }
    }
};

/**
 * Callback function that will be processing click of the up arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onClickUpArrow = function(event) {
    const arrow = event.target;
    if (arrow.isVisibleAndActive()) {
        this._windowContentsSprite.selectPrev();
    }
};

/**
 * Callback function that will be processing click of the down arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onClickDownArrow = function(event) {
    const arrow = event.target;
    if (arrow.isVisibleAndActive()) {
        this._windowContentsSprite.selectNext();
    }
};

/**
 * Callback function that will be processing click of the left arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onClickLeftArrow = function(event) {
    const arrow = event.target;
    if (arrow.isVisibleAndActive()) {
        this._windowContentsSprite.selectPrev();
    }
};

/**
 * Callback function that will be processing click of the right arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onClickRightArrow = function(event) {
    const arrow = event.target;
    if (arrow.isVisibleAndActive()) {
        this._windowContentsSprite.selectNext();
    }
};

/**
 * Callback function that will be processing long press of the up arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onLongPressUpArrow = function(event) {
   this.onClickUpArrow(event);
};

/**
 * Callback function that will be processing long press of the down arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onLongPressDownArrow = function(event) {
    this.onClickDownArrow(event);
};

/**
 * Callback function that will be processing long press of the left arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onLongPressLeftArrow = function(event) {
    this.onClickLeftArrow(event);
};

/**
 * Callback function that will be processing long press of the right arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onLongPressRightArrow = function(event) {
    this.onClickRightArrow(event);
};





//===========================================================================
// DKTools.Scene
//===========================================================================

DKTools.Scene.prototype = Object.create(Scene_Base.prototype);
DKTools.Scene.prototype.constructor = DKTools.Scene;

// initialize

/**
 * Initializes a class object
 *
 * @override
 *
 * @see DKTools.Scene.prototype._clearAll
 * @see DKTools.Scene.prototype._createAll
 * @see DKTools.Scene.prototype._setupAll
 * @see DKTools.Scene.prototype._addAllChildren
 * @see Scene_Base.prototype.initialize
 */
DKTools.Scene.prototype.initialize = function() {
    this._clearAll();
    this._createAll();
    this._setupAll();
    this._addAllChildren();
    Scene_Base.prototype.initialize.call(this);
};

// _clear methods

/**
 * Clears all data
 *
 * @private
 */
DKTools.Scene.prototype._clearAll = function() {
    // to be overriden by plugins
};

// _create methods

/**
 * Creates all
 *
 * @private
 */
DKTools.Scene.prototype._createAll = function() {
    // to be overriden by plugins
};

// _setup methods

/**
 * Sets all data
 *
 * @private
 */
DKTools.Scene.prototype._setupAll = function() {
    // to be overriden by plugins
};

// _add methods

/**
 * Adds children objects to processing
 *
 * @private
 */
DKTools.Scene.prototype._addAllChildren = function() {
    // to be overriden by plugins
};

// create methods

/**
 * Creates all
 *
 * @override
 *
 * @see Scene_Base.prototype.create
 * @see DKTools.Scene.prototype.createBackground
 * @see DKTools.Scene.prototype.createAllSprites
 * @see DKTools.Scene.prototype.createWindowLayer
 * @see DKTools.Scene.prototype.createAllWindows
 * @see DKTools.Scene.prototype.createForeground
 */
DKTools.Scene.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
	this.createBackground();
	this.createAllSprites();
	this.createWindowLayer();
	this.createAllWindows();
	this.createForeground();
};

/**
 * Creates the background
 */
DKTools.Scene.prototype.createBackground = function() {
    // to be overriden by plugins
};

/**
 * Creates all sprites
 */
DKTools.Scene.prototype.createAllSprites = function() {
    // to be overriden by plugins
};

/**
 * Creates all windows
 */
DKTools.Scene.prototype.createAllWindows = function() {
    // to be overriden by plugins
};

/**
 * Creates the foreground
 */
DKTools.Scene.prototype.createForeground = function() {
    // to be overriden by plugins
};

// start methods

/**
 * Starts the scene
 *
 * @override
 */
DKTools.Scene.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    this.startAllSprites();
    this.startAllWindows();
};

/**
 * Starts all sprites
 */
DKTools.Scene.prototype.startAllSprites = function() {
    // to be overriden by plugins
};

/**
 * Starts all windows
 */
DKTools.Scene.prototype.startAllWindows = function() {
    // to be overriden by plugins
};

// remove methods

/**
 * Removes the window from the scene
 *
 * @param {DKTools.Window | *} window - Window to remove
 */
DKTools.Scene.prototype.removeWindow = function(window) {
    if (this.hasWindowLayer() && this.isChild(window)) {
        this._windowLayer.removeChild(window);
    }
};

// has methods

/**
 * Returns true if the scene has the layer of windows
 *
 * @returns {Boolean} Scene has the layer of windows
 */
DKTools.Scene.prototype.hasWindowLayer = function() {
    return !!this._windowLayer;
};

// is methods

/**
 * Returns true if the window has the parent (if parameter is null or undefined)
 * Returns true if the window is an parent of the object (parameter)
 *
 * @param [object=undefined] - Object
 * @returns {Boolean}
 */
DKTools.Scene.prototype.isChild = function(object) {
    if (this.hasWindowLayer() && object instanceof Window) {
        return object.parent === this._windowLayer;
    }
    return object && object.parent === this;
};

// update methods

/**
 * Updates the scene
 *
 * @override
 *
 * @see DKTools.Scene.prototype.updateChildren
 * @see DKTools.Scene.prototype.updateFade
 */
DKTools.Scene.prototype.update = function() {
    this.updateChildren();
    this.updateFade();
};

/**
 * Updates the child object
 *
 * @param {*} child - Child object
 */
DKTools.Scene.prototype.updateChild = function(child) {
    if (child && child.update) {
        child.update();
    }
};

/**
 * Updates the child objects
 *
 * @override
 *
 * @see DKTools.Scene.prototype.iterateChildren
 * @see DKTools.Scene.prototype.updateChild
 */
DKTools.Scene.prototype.updateChildren = function() {
    this.iterateChildren(this.updateChild);
};

// stop methods

/**
 * Stops the scene
 *
 * @override
 *
 * @see Scene_Base.prototype.stop
 * @see DKTools.Scene.prototype.stopAll
 */
DKTools.Scene.prototype.stop = function() {
    Scene_Base.prototype.stop.call(this);
    this.stopAll();
};

/**
 * Stops all
 */
DKTools.Scene.prototype.stopAll = function() {
    // to be overriden by plugins
};

// terminate methods

/**
 * Terminates the scene
 *
 * @override
 *
 * @see Scene_Base.prototype.terminate
 * @see DKTools.Scene.prototype.stopAll
 */
DKTools.Scene.prototype.terminate = function() {
    Scene_Base.prototype.terminate.call(this);
    this.terminateAll();
};

/**
 * Terminates all
 */
DKTools.Scene.prototype.terminateAll = function() {
    // to be overriden by plugins
};

// other methods

/**
 * Calls the callback function for the child objects
 *
 * @param {Function} callback - Function for the child objects
 */
DKTools.Scene.prototype.iterateChildren = function(callback) {
    _.forEach(this.children, callback);
};