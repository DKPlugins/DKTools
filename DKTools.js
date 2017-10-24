/*
Title: DKTools
Author: DK (Denis Kuznetsov)
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 0.991 beta
Release: 24.10.2017
First release: 13.01.2016
Supported languages: Russian, English
*/

/*ru
Название: DKTools
Автор: DK (Денис Кузнецов)
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 0.991 beta
Релиз: 24.10.2017
Первый релиз: 13.01.2016
Поддерживаемые языки: Русский, Английский
*/

/*:
* @plugindesc v.0.991 beta Library for RPG Maker. Made with ♥ by DKPlugins
* @author DK (Denis Kuznetsov)
* @help

 ### Info about plugin ###
 Title: DKTools
 Author: DK (Denis Kuznetsov)
 Site: https://dk-plugins.ru
 Version: 0.991 beta
 Release: 24.10.2017
 First release: 13.01.2016
 Supported languages: Russian, English

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
 DKTools.FileManager
 DKTools.Localization
 DKTools.PluginManager
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

 * @param Quick Start
 * @parent Debug
 * @desc Quick Start
 * @type struct<QuickStart>

 * @param Screenshots
 * @default ---------------------------------

 * @param Take Screenshot
 * @parent Screenshots
 * @desc Enable the function to save the screenshot?
 * @type boolean
 * @default false

 * @param Screenshot Key Code
 * @text Key Code
 * @parent Screenshots
 * @desc The key code that is responsible for saving the screenshot. 44 - PrintScreen
 * @type number
 * @default 44

 * @param Screenshot Path
 * @text Path for saving screenshots
 * @parent Screenshots
 * @desc Local path for saving screenshots
 * @default screenshots/

 * @param Screenshot Filename
 * @parent Screenshots
 * @desc The entire list of templates is given in the help (2)
 * @default %year_%month_%day_%hours_%minutes_%seconds.png

*/

/*:ru
* @plugindesc v.0.991 beta Библиотека для RPG Maker. Сделано с ♥ от DKPlugins
* @author DK (Денис Кузнецов)
* @help

 ### Информация о плагине ###
 Название: DKTools
 Автор: DK (Денис Кузнецов)
 Сайт: https://dk-plugins.ru
 Версия: 0.991 beta
 Релиз: 24.10.2017
 Первый релиз: 13.01.2016
 Поддерживаемые языки: Русский, Английский

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
 DKTools.FileManager
 DKTools.Localization
 DKTools.PluginManager
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
 DKTools.Viewport
 DKTools.Layout
 DKTools.Window
 DKTools.Window.Selectable
 DKTools.Scene

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

 * @param Quick Start
 * @text Быстрый старт
 * @parent Debug
 * @desc Быстрый старт
 * @type struct<QuickStart>

 * @param Screenshots
 * @text Скриншоты
 * @default ---------------------------------

 * @param Take Screenshot
 * @text Сделать скриншот
 * @parent Screenshots
 * @desc Включить функцию сохранения скриншота?
 * @type boolean
 * @default false

 * @param Screenshot Key Code
 * @text Код клавиши
 * @parent Screenshots
 * @desc Код клавиши, которая отвечает за сохранение скриншота. 44 - PrintScreen
 * @type number
 * @default 44

 * @param Screenshot Path
 * @text Путь для сохранения скриншотов
 * @parent Screenshots
 * @desc Локальный путь для сохранения скриншотов
 * @default screenshots/

 * @param Screenshot Filename
 * @text Название файла скриншота
 * @parent Screenshots
 * @desc Весь список шаблонов приведен в справке (2)
 * @default %year_%month_%day_%hours_%minutes_%seconds.png
 
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

/*~struct~QuickStart:

 * @param Quick Start
 * @desc Enable the Quick Start feature?
 * @type boolean
 * @default false

 * @param Scene Name
 * @desc Name of scene which will be launched instead the title screen. Standard: Scene_Map
 * @default Scene_Map

 * @param Skip Saves
 * @desc Does it need skip the title screen if save files has exist?
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
Imported.DKTools = 0.991;

//===========================================================================
// DKTools
//===========================================================================

/**
 * @namespace DKTools
 * @type {Object}
 */
const DKTools = {};

/**
 * Версия DKTools
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
     * Версия DKTools
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
 * @see DKTools.ParameterManager.prototype.convertParameters
 */
DKTools.ParameterManager = function(pluginName, convertible) {
    this.initialize.apply(this, arguments);
};

/**
 * Статический класс, который управляет файловой системой
 *
 * @class DKTools.FileManager
 * @constructor
 * @memberOf DKTools
 */
DKTools.FileManager = function() {};

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
 * @param {Object} object - Parameters
 *
 * @param {DKTools.Sprite | DKTools.Window | *} [object.target] - The object for which the event is set
 * @param {String} [object.type] - Type of event
 * @param {Number} [object.repeatTime]
 * @param {Number} [object.repeatTime] - Длительность повтора события
 * @param {Number} [object.repeats] - Количество повторов события
 * @param {Number} [object.remainingPauseTime] - Длительность паузы
 * @param {Function} [object.onStart] - Обработчик начала работы
 * @param {Function} object.onUpdate - Обработчик обновления
 * @param {Function} [object.onPause] - Обработчик паузы события
 * @param {Function} [object.onReset] - Обработчик сброса события
 * @param {Function} [object.onRepeat] - Обработчик повтора события
 * @param {Function} [object.onSuccess] - Обработчик успешного завершения работы
 * @param {Function} [object.onFailure] - Обработчик провального завершения работы
 */
DKTools.Event = function(object) {
    this.initialize.apply(this, arguments);
};

/**
 * Класс анимации
 *
 * @class DKTools.Animation
 * @augments DKTools.Event
 *
 * @override
 * @constructor
 *
 * @memberOf DKTools
 *
 * @param {DKTools.Animation | Object} object - Анимация или Объект типа {}
 *
 * @see object properties: DKTools.Event.prototype.initialize
 */
DKTools.Animation = function(object) {
    this.initialize.apply(this, arguments);
};

/**
 * Класс действия анимации
 *
 * @class DKTools.Animation.Action
 * @augments DKTools.Event
 *
 * @override
 * @constructor
 *
 * @param {DKTools.Animation.Action | Object} object - Действие анимации или Объект типа {}
 *
 * @see object properties: DKTools.Event.prototype.initialize
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
 * @param {Number | Rectangle | Object} [object] - Координата X или Rectangle, или Bitmap, или Объект типа {}
 * @param {Number} [y] - Координата Y
 * @param {Number} [width] - Ширина
 * @param {Number} [height] - Высота
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 * @param {Number} [object.width] - Ширина
 * @param {Number} [object.height] - Высота
 *
 * @see object properties: DKTools.Base.prototype.setupAll
 */
DKTools.Base = function(object, y, width, height) {
	throw new Error('This is a static class!');
};

/**
 * Класс спрайта
 *
 * @class DKTools.Sprite
 * @augments DKTools.Base
 *
 * @override
 * @constructor
 *
 * @memberOf DKTools
 *
 * @param {Number | Bitmap | Rectangle | Object} [object] - Координата X или Rectangle, или Bitmap, или Объект типа {}
 * @param {Number} [y] - Координата Y
 * @param {Number} [width] - Ширина Bitmap
 * @param {Number} [height] - Высота Bitmap
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 * @param {Number} [object.width] - Ширина Bitmap
 * @param {Number} [object.height] - Высота Bitmap
 * @param {Bitmap | Object} [object.bitmap] - Bitmap или Объект типа {}
 *
 * @param {String} object.bitmap.folder - Путь к файлу
 * @param {String} object.bitmap.filename - Название файла
 * @param {Function} [object.bitmap.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.bitmap.hue] - Оттенок
 * @param {Boolean} [object.bitmap.smooth] - Сглаживание
 *
 * @see object properties: DKTools.Sprite.prototype.setupAll
 */
DKTools.Sprite = function(object, y, width, height) {
	this.initialize.apply(this, arguments);
};

/**
 * Класс спрайта кнопки
 *
 * @class DKTools.Sprite.Button
 * @augments DKTools.Sprite
 *
 * @override
 * @constructor
 *
 * @memberOf DKTools.Sprite
 */
DKTools.Sprite.Button = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 * Класс спрайта курсора
 *
 * @class DKTools.Sprite.Cursor
 * @augments DKTools.Sprite
 *
 * @override
 * @constructor
 *
 * @memberOf DKTools.Sprite
 */
DKTools.Sprite.Cursor = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 * @class DKTools.Sprite.Arrow
 * @augments DKTools.Sprite.Button
 *
 * @override
 * @constructor
 *
 * @memberOf DKTools.Sprite
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
 */
DKTools.Sprite.Selectable = function(object, y, width, height) {
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
 * @param {Number | Bitmap | Rectangle | Object} [object] - Координата X или Rectangle, или Bitmap, или Объект типа {}
 * @param {Number} [y] - Координата Y
 * @param {Number} [width] - Ширина Bitmap
 * @param {Number} [height] - Высота Bitmap
 *
 * @see свойства object: DKTools.Sprite.prototype.initialize
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
 * @param {Number | Object} [object] - Координата X или Объект типа {}
 * @param {Number} [y] - Координата Y
 *
 * @see свойства object: DKTools.Sprite.prototype.initialize
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
 * @param {Number | Object} [object] - Координата X
 * @param {Number} [y] - Координата Y
 * @param {Number} [width] - Ширина окна
 * @param {Number} [height] - Высота окна
 *
 * @see DKTools.Window.prototype.initialize
 */
DKTools.Window = function(object, y, width, height) {
	this.initialize.apply(this, arguments);
};

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
// DKTools Utils
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
 * @return {Boolean} The browser is Android Chrome
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
        let debugWindow = require('nw.gui').Window.get().showDevTools();
        debugWindow.moveTo(0, 0);
        window.focus();
    }
};

/**
 * Makes a screenshot
 *
 * @static
 */
DKTools.Utils.makeScreenshot = function() {
    if (!DKTools.FileManager.isLocalMode()) {
        return;
    }
    const path = DKToolsParam.get('Screenshot Path');

    const date = new Date();
    let filename = DKToolsParam.get('Screenshot Filename');
    filename = filename.replace(/%year/gi, date.getFullYear());
    filename = filename.replace(/%month/gi, date.getMonth() + 1);
    filename = filename.replace(/%day/gi, date.getDate());
    filename = filename.replace(/%hours/gi, date.getHours());
    filename = filename.replace(/%minutes/gi, date.getMinutes());
    filename = filename.replace(/%seconds/gi, date.getSeconds());

    const snap = SceneManager.snap();
    const urlData = snap._canvas.toDataURL();
    const data = urlData.replace(/^data:image\/png;base64,/, '');

    DKTools.FileManager.saveToLocalFile({
        path: path,
        filename: filename,
        data: data,
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
// DKTools Utils String
//===========================================================================

/**
 * Разделяет строку на массив строк по запятым
 *
 * @static
 * @param {String} string - Строка
 * @return {String[]} Массив строк
 */
DKTools.Utils.String.splitByComma = function(string) {
    return string.replace(/\s*\,\s*/g, ',').split(',');
};

/**
 * Переводит строку в Boolean
 *
 * @static
 * @param {String} string - Строка
 * @return {Boolean} Строка в Boolean
 */
DKTools.Utils.String.toBoolean = function(string) {
    return String(string).toLowerCase().trim() === 'true';
};

/**
 * Разделяет строку на массив чисел по запятым
 *
 * @static
 * @param {String} string - Строка
 * @return {Number[]} Массив чисел
 */
DKTools.Utils.String.toNumberArray = function(string) {
    if (_.isString(string)) {
        const array = this.splitByComma(string);
        return _.map(array, Number);
    }
    return [];
};

/**
 * Разделяет строку на массив Boolean по запятым
 *
 * @static
 * @param {String} string - Строка
 * @return {Boolean[]} Массив Boolean
 */
DKTools.Utils.String.toBooleanArray = function(string) {
    if (_.isString(string)) {
        const array = this.splitByComma(string);
        return _.map(array, this.toBoolean.bind(this));
    }
    return [];
};





//===========================================================================
// DKTools Utils Array
//===========================================================================

/**
 * Возвращает true, если array содержит item
 *
 * @static
 *
 * @param {Array} array
 * @param {*} item
 *
 * @returns {Boolean} Array содержит item
 */
DKTools.Utils.Array.contains = function(array, item) {
    return _.indexOf(array, item) >= 0;
};

/**
 * Возвращает количество item в массиве array
 *
 * @static
 *
 * @param {Array} array
 * @param {*} item
 *
 * @return {Number} Количество item в массиве
 */
DKTools.Utils.Array.count = function(array, item) {
    return _.size(array) - _.size(_.without(array, item));
};

/**
 * Возвращает сумму количества элементов items в массиве array
 *
 * @static
 *
 * @param {Array} array
 * @param {Array} items
 *
 * @return {Number} Сумма количества элементов items в массиве array
 */
DKTools.Utils.Array.counts = function(array, items) {
    return _.size(array) - _.size(_.difference(array, items));
};

/**
 * Удаляет '', null, undefined и Number.NaN из массива array
 * Изменяет исходный массив
 * Возвращает измененный исходный массив
 *
 * @static
 * @param {Array} array
 * @return {Array} Измененный исходный массив
 */
DKTools.Utils.Array.compact = function(array) {
    return _.pull(array, '', null, undefined, Number.NaN);
};

/**
 * Удаляет item из массива array
 * Изменяет исходный массив
 * Возвращает измененный исходный массив
 *
 * @static
 *
 * @param {Array} array
 * @param {*} item
 *
 * @return {Array} Измененный исходный массив
 */
DKTools.Utils.Array.remove = function(array, item) {
    return _.pull(array, item);
};

/**
 * Вставляет item в массив array
 *
 * @static
 *
 * @param {Array} array
 * @param {*} item
 * @param {Number} [index=0]
 */
DKTools.Utils.Array.insert = function(array, item, index) {
    array.splice(index || 0, 0, item);
};

/**
 * Возвращает true, если массив array пуст
 *
 * @static
 * @param {Array} array
 * @return {Boolean} Массив array пуст
 */
DKTools.Utils.Array.isEmpty = function(array) {
    return _.isArray(array) && _.isEmpty(array);
};

/**
 * Возвращает true, если массив array состоит только из Number
 *
 * @static
 * @param {Array} array
 * @return {Boolean} Массив array состоит только из Number
 */
DKTools.Utils.Array.isNumberArray = function(array) {
    return _.every(array, _.isNumber);
};

/**
 * Возвращает true, если массив array состоит только из Boolean
 *
 * @static
 * @param {Array} array
 * @return {Boolean} Массив array состоит только из Boolean
 */
DKTools.Utils.Array.isBooleanArray = function(array) {
    return _.every(array, _.isBoolean);
};

/**
 * Возвращает true, если массив array состоит только из String
 *
 * @static
 * @param {Array} array
 * @return {Boolean} Массив array состоит только из String
 */
DKTools.Utils.Array.isStringArray = function(array) {
    return _.every(array, _.isString);
};

/**
 * Возвращает true, если массив array состоит только из Bitmap
 *
 * @static
 * @param {Array} array
 * @return {Boolean} Массив array состоит только из Bitmap
 */
DKTools.Utils.Array.isBitmapArray = function(array) {
    return _.every(array, function(item) {
        return item instanceof Bitmap;
    });
};

/**
 * Возвращает true, если массив array состоит только из Sprite
 *
 * @static
 * @param {Array} array
 * @return {Boolean} Массив array состоит только из Sprite
 */
DKTools.Utils.Array.isSpriteArray = function(array) {
    return _.every(array, function(item) {
        return item instanceof Sprite;
    });
};

/**
 * Возвращает true, если массив array состоит только из Window
 *
 * @static
 * @param {Array} array
 * @return {Boolean} Массив array состоит только из Window
 */
DKTools.Utils.Array.isWindowArray = function(array) {
    return _.every(array, function(item) {
        return item instanceof Window;
    });
};

/**
 * Выполняет логическую операцию дизъюнкция
 *
 * @static
 * @param {Array} array
 * @return {Boolean} Результат выполнения логической операции дизъюнкция
 */
DKTools.Utils.Array.disjunction = function(array) {
    return _.some(array, _.isEqual.bind(this, true));
};

/**
 * Выполняет логическую операцию конъюнкция
 *
 * @static
 * @param {Array} array
 * @return {Boolean} Результат выполнения логической операции конъюнкция
 */
DKTools.Utils.Array.conjunction = function(array) {
    return _.every(array, _.isEqual.bind(this, true));
};





//===========================================================================
// DKTools Utils Bitmap
//===========================================================================

/**
 * Рисует линию
 *
 * @static
 *
 * @param {Bitmap} bitmap - Bitmap
 * @param {Number} x1 - Координата X начала линии
 * @param {Number} y1 - Координата Y начала линии
 * @param {Number} x2 - Координата X конца линии
 * @param {Number} y2 - Координата Y конца линии
 * @param {String} color - Цвет линии
 * @param {Number} [lineWidth] - Ширина линии
 */
DKTools.Utils.Bitmap.drawLine = function(bitmap, x1, y1, x2, y2, color, lineWidth) {
    const context = bitmap._context;
    context.save();
    context.lineWidth = lineWidth || 1;
    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.restore();
    bitmap._setDirty();
};

/**
 * Рисует прямоугольник без заливки
 *
 * @static
 *
 * @param {Bitmap} bitmap - Bitmap
 * @param {Number} x - Координата X
 * @param {Number} y - Координата Y
 * @param {Number} width - Ширина прямоугольника
 * @param {Number} height - Высота прямоугольника
 * @param {String} color - Цвет линии
 * @param {Number} [lineWidth] - Ширина линии
 */
DKTools.Utils.Bitmap.strokeRect = function(bitmap, x, y, width, height, color, lineWidth) {
    const context = bitmap._context;
    context.save();
    context.lineWidth = lineWidth || 10;
    context.strokeStyle = color;
    context.strokeRect(x, y, width, height);
    context.restore();
    bitmap._setDirty();
};

/**
 * Рисует дугу и заливает ее цветом
 *
 * @static
 *
 * @param {Bitmap} bitmap - Bitmap
 * @param {Number} x - Координата X
 * @param {Number} y - Координата Y
 * @param {Number} radius - Радиус дуги
 * @param {Number} startAngle - Стартовый угол
 * @param {Number} endAngle - Конечный угол
 * @param {String} color - Цвет заливки
 * @param {Boolean} [antiClockwise] - Против часовой стрелки
 */
DKTools.Utils.Bitmap.fillArc = function (bitmap, x, y, radius, startAngle, endAngle, color, antiClockwise) {
    const context = bitmap._context;
    context.save();
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, antiClockwise);
    context.fill();
    context.restore();
    bitmap._setDirty();
};

/**
 * Рисует дугу без заливки
 *
 * @static
 *
 * @param {Bitmap} bitmap - Bitmap
 * @param {Number} x - Координата X
 * @param {Number} y - Координата Y
 * @param {Number} radius - Радиус дуги
 * @param {Number} startAngle - Стартовый угол
 * @param {Number} endAngle - Конечный угол
 * @param {String} color - Цвет линии
 * @param {Boolean} [antiClockwise] - Против часовой стрелки
 * @param {Number} [lineWidth] - Ширина линии
 */
DKTools.Utils.Bitmap.strokeArc = function (bitmap, x, y, radius, startAngle, endAngle, color, antiClockwise, lineWidth) {
    const context = bitmap._context;
    context.save();
    context.lineWidth = lineWidth || 1;
    context.strokeStyle = color;
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, antiClockwise);
    context.stroke();
    context.restore();
    bitmap._setDirty();
};

/**
 * Клонирует Bitmap
 *
 * @static
 * @param {Bitmap} bitmap - Bitmap, который требуется клонировать
 * @return {Bitmap | null} Клонированный Bitmap
 */
DKTools.Utils.Bitmap.clone = function(bitmap) {
    if (!bitmap) {
        return null;
    }
    const canvas = bitmap.canvas;
    const newBitmap = new Bitmap(canvas.width, canvas.height);
    const newContext = newBitmap.context;
    newContext.drawImage(canvas, 0, 0);
    return newBitmap;
};





//===========================================================================
// DKTools Utils Point
//===========================================================================

/**
 * Конвертирует аргументы в Point, если это возможно
 *
 * @static
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Координата X или Point, или Объект типа {}
 * @param {Number} [y] - Координата Y
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 *
 * @return {Point | null} Point или null
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
 * Конвертирует Point в Array
 * Возвращает массив с координатами
 *
 * @static
 * @param {PIXI.Point | PIXI.ObservablePoint | Point} point - Point, который требуется конвертировать в Array
 * @return {Number[]} Массив с координатами
 */
DKTools.Utils.Point.convertToArray = function(point) {
    return [point.x, point.y];
};

/**
 * Сравнивает координаты точек
 * Возвращает true, если координаты точек равны
 *
 * @static
 *
 * @param {PIXI.Point | PIXI.ObservablePoint | Point} point1 - Point
 * @param {PIXI.Point | PIXI.ObservablePoint | Point} point2 - Point
 *
 * @return {Boolean} Координаты точек равны
 */
DKTools.Utils.Point.equals = function(point1, point2) {
    return point1.x === point2.x && point1.y === point2.y;
};

/**
 * Клонирует Point
 *
 * @static
 * @param {PIXI.Point | PIXI.ObservablePoint | Point} point - Point, который требуется клонировать
 * @return {Point} Клонированный Point
 */
DKTools.Utils.Point.clone = function(point) {
    const newPoint = new Point();
    newPoint.copy(point);
    return newPoint;
};





//===========================================================================
// DKTools Utils Rectangle
//===========================================================================

/**
 * Конвертирует аргументы в Rectangle, если это возможно
 *
 * @static
 *
 * @param {Number | PIXI.Rectangle | Rectangle | Object} [object] - Координата X или Rectangle, или Объект типа {}
 * @param {Number} [y] - Координата Y
 * @param {Number} [width] - Ширина прямоугольника
 * @param {Number} [height] - Высота прямоугольника
 *
 * @param {Number} [object.x] -  Координата X
 * @param {Number} [object.y] - Координата Y
 * @param {Number} [object.width] - Ширина прямоугольника
 * @param {Number} [object.height] - Высота прямоугольника
 *
 * @return {Rectangle | null} Rectangle или null
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
 * Конвертирует Rectangle в Array
 * Возвращает массив с координатами, шириной и высотой прямоугольника
 *
 * @static
 * @param {PIXI.Rectangle | Rectangle} rect - Rectangle, который требуется конвертировать в Array
 * @return {Number[]} Массив с координатами, шириной и высотой прямоугольника
 */
DKTools.Utils.Rectangle.convertToArray = function(rect) {
    return [rect.x, rect.y, rect.width, rect.height];
};

/**
 * Сравнивает координаты, ширину и высоту прямоугольников
 * Возвращает true, если координаты, ширина и высота прямоугольников равны
 *
 * @static
 *
 * @param {PIXI.Rectangle | Rectangle} rect1 - Rectangle
 * @param {PIXI.Rectangle | Rectangle} rect2 - Rectangle
 *
 * @return {Boolean} Координаты, ширина и высота прямоугольников равны
 */
DKTools.Utils.Rectangle.equals = function(rect1, rect2) {
    return rect1.x === rect2.x && rect1.y === rect2.y &&
        rect1.width === rect2.width && rect1.height === rect2.height;
};

/**
 * Клонирует Rectangle
 *
 * @static
 * @param {PIXI.Rectangle | Rectangle} rect - Rectangle, который требуется клонировать
 * @return {Rectangle} Клонированный Rectangle
 */
DKTools.Utils.Rectangle.clone = function(rect) {
    const newRect = new Rectangle();
    newRect.copy(rect);
    return newRect;
};

/**
 * Возвращает true, если rect пуст (0, 0, 0, 0)
 *
 * @static
 * @param {PIXI.Rectangle | Rectangle} rect - Rectangle
 * @returns {Boolean} rect пуст
 */
DKTools.Utils.Rectangle.isEmpty = function(rect) {
    return this.equals(rect, Rectangle.emptyRectangle);
};





//===========================================================================
// DKTools Utils Random
//===========================================================================

/**
 * @static
 * @param {Number} bound
 * @return {Number}
 */
DKTools.Utils.Random.getInt = function(max) {
    return _.random(0, max);
};

/**
 * @static
 * @param {Number} bound
 * @return {Number}
 */
DKTools.Utils.Random.getFloat = function(max) {
    return _.random(0, max, true);
};

/**
 * @static
 * @return {Boolean}
 */
DKTools.Utils.Random.getBoolean = function() {
    return this.getInt(1) % 2 === 0;
};

/**
 * Возвращает случайный цвет в формате rgba
 *
 * @static
 * @param {Number] [alpha] - Прозрачность цвета
 * @returns {String} Случайный цвет в формате rgba
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
 * Возвращает случайный цвет в формате hex
 *
 * @static
 * @returns {String} Случайный цвет в формате hex
 */
DKTools.Utils.Random.getHexColor = function() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
};





//===========================================================================
// DKTools Utils Sequence
//===========================================================================

/**
 * @param {Number} [max=Number.MAX_SAFE_INTEGER] - Максимальное число последовательности
 * @returns {Number} Следующее значение последовательности
 */
DKTools.Utils.Sequence.Number = function*(max) {
    max = max || Number.MAX_SAFE_INTEGER;
    let count = 0;
    while(count <= max) {
        yield count++;
    }
};

/**
 * @param [Boolean} [start=false] - Стартовое значение последовательности
 * @returns {Boolean} Следующее значение последовательности
 */
DKTools.Utils.Sequence.Boolean = function*(start) {
    let value = start || false;
    while(true) {
        value = !value;
        yield value;
    }
};

/**
 * @param {Boolean} [upper] - Верхний регистр
 * @returns {String} Следующее значение последовательности
 */
DKTools.Utils.Sequence.Alphabet.ru = function*(upper) {
    let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    if (upper) {
        alphabet = alphabet.toUpperCase();
    }
    yield* alphabet;
};

/**
 * @param {Boolean} [upper] - Верхний регистр
 * @returns {String} Следующее значение последовательности
 */
DKTools.Utils.Sequence.Alphabet.en = function*(upper) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    if (upper) {
        alphabet = alphabet.toUpperCase();
    }
    yield* alphabet;
};





//===========================================================================
// DKTools ParameterManager
//===========================================================================

// properties

Object.defineProperties(DKTools.ParameterManager.prototype, {

    /**
     * Название плагина
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
     * Объект с параметрами плагина, полученный с помощью PluginManager.parameters
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
     * Объект с распарсенными параметрами плагина
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
 * Парсит строку (поддерживает экранирование мейкера)
 *
 * @static
 * @param {String} string - Строка для парсинга
 * @returns {Object | String} Распарсенная строка
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
 * Инициализирует объект класса
 *
 * @param {String} pluginName - Название плагина
 * @param {Object[]} [convertible] - Параметры для конвертации
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
 * Инициализирует параметры плагина
 */
DKTools.ParameterManager.prototype.initializeParams = function() {
    _.forEach(this._initialParams, function(value, key) {
        this._params[key] = DKTools.ParameterManager.parse(value);
    }.bind(this));
};

/**
 * Инициализирует параметры локализации
 */
DKTools.ParameterManager.prototype.initializeLocalization = function() {
    const localization = this.get('Localization');
    if (localization) {
        _.forEach(localization, function(value, key) {
            localization[key] = DKTools.ParameterManager._getConvertedObject(value);
        });
    }
};

/**
 * @param {Object[]} convertible
 *
 * @param {String} convertible.parameter - Название параметра
 * @param {String} convertible.property - Свойство параметра
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
 * Возвращает параметр по его названию
 *
 * @param {String} parameterName - Название параметра
 * @param {Number | String} [item] - Индекс (для массива) или Ключ (для объекта)
 *
 * @returns {* | null} Параметр по его названию или null
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
var DKToolsParam = new DKTools.ParameterManager('DKTools');





//===========================================================================
// DKTools PluginManager
//===========================================================================

/**
 * Список зарегистрированных плагинов
 *
 * @private
 * @readonly
 * @type {Object}
 * @memberOf DKTools.PluginManager
 */
DKTools.PluginManager._plugins = {};

/**
 * Список зарегистрированных требований
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
     * Список зарегистрированных плагинов
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
     * Список зарегистрированных требований
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
 * Регистрирует плагины, у которых указана версия и проверяет требования к версиям плагинов
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
 * Возвращает true, если плагин зарегистрирован
 *
 * @example
 * DKTools.PluginManager.isRegistered('DKTools'); // => true
 *
 * @static
 * @param {String} pluginName - Название плагина
 * @returns {Boolean} Плагин зарегистрирован
 */
DKTools.PluginManager.isRegistered = function(pluginName) {
    return !!this._plugins[pluginName];
};

/**
 * Возвращает true, если требование к плагину зарегистрировано
 *
 * @static
 * @param {String} pluginName - Название плагина
 * @return {Boolean} Требование зарегистрировано
 */
DKTools.PluginManager.isRequired = function(pluginName) {
    return !!this._requirements[pluginName];
};

// register methods

/**
 * Регистрирует плагин
 *
 * @static
 * @param {String} pluginName - Название плагина
 * @param {Number | String} version - Версия плагина
 */
DKTools.PluginManager.registerPlugin = function(pluginName, version) {
    if (this.isRegistered(pluginName) || !version || _.isBoolean(version)) {
        return;
    }
    this._plugins[pluginName] = version;
};

/**
 * Регистрирует несколько плагинов
 *
 * @static
 * @param {Object[]} plugins - Плагины
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
 * Регистрирует требование к минимальной версии плагина
 *
 * @example
 * DKTools.PluginManager.requirePlugin('DKTools', 0.991);
 *
 * @static
 * @param {String} pluginName - Название плагина
 * @param {Number | String} minVersion - Минимальная версия
 */
DKTools.PluginManager.requirePlugin = function(pluginName, minVersion) {
    if (!this._requirements[pluginName]) {
        this._requirements[pluginName] = [];
    }
    this._requirements[pluginName].push(minVersion);
};

/**
 * Регистрирует требования к минимальной версии нескольких плагинов
 *
 * @static
 * @param {Object[]} plugins - Плагины
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
 * Возвращает версию плагина
 *
 * @example
 * DKTools.PluginManager.pluginVersion('DKTools'); // => 0.991
 *
 * @static
 * @param {String | String} pluginName - Название плагина
 * @returns {Number | String | undefined} Версия плагина
 */
DKTools.PluginManager.pluginVersion = function(pluginName) {
    return this._plugins[pluginName];
};





//===========================================================================
// DKTools FileManager
//===========================================================================

// properties

Object.defineProperties(DKTools.FileManager, {

    /**
     * @readonly
     * @type {Object}
     * @memberOf DKTools.FileManager
     */
    fs: {
        get: function() {
            return this._fs;
        },
        configurable: true
    },

    /**
     * Путь к папке проекта
     *
     * @readonly
     * @type {String}
     * @memberOf DKTools.FileManager
     */
    basePath: {
        get: function() {
            return this._basePath;
        },
        configurable: true
    }

});

// initialize methods

/**
 * @static
 */
DKTools.FileManager.initialize = function() {
    if (this.isLocalMode()) {

        /**
         * @private
         * @type {Object}
         */
        this._fs = require('fs');

        const path = require('path');
        const base = path.dirname(process.mainModule.filename);

        /**
         * @private
         * @type {String}
         */
        this._basePath = path.join(base, '/');
    }
};

// is methods

/**
 * Возвращает true, если используется локальый режим
 *
 * @static
 * @returns {Boolean} Используется локальый режим
 */
DKTools.FileManager.isLocalMode = function() {
    return DKTools.Utils.isNwjs();
};

// other methods

/**
 * Возвращает полный путь к файлу
 *
 * @static
 *
 * @param {String} path - Путь к папке, где хранится файл
 * @param {String} filename - Название файла
 *
 * @returns {String} Полный путь к файлу
 */
DKTools.FileManager.filePath = function(path, filename) {
    return this._basePath + (path || '') + (filename || '');
};

// create methods

/**
 * Создает папку
 *
 * @static
 * @param {String} path - Путь к папке
 */
DKTools.FileManager.createFolder = function(path) {
    if (!this.isLocalMode() || this.folderExists(path)) {
        return;
    }
    const fs = this._fs;
    const folderPath = this.filePath(path);
    fs.mkdirSync(folderPath);
};

// save methods

/**
 * @static
 *
 * @param {Object} object -
 *
 * @param {String} [object.path] -
 * @param {String} object.filename -
 * @param {*} object.data -
 * @param {Boolean} object.stringify -
 * @param {Boolean} object.compress -
 */
DKTools.FileManager.saveToFile = function(object) {
    if (this.isLocalMode()) {
        this.saveToLocalFile(object);
    } else {
        this.saveToWebStorage(object);
    }
};

/**
 * @static
 *
 * @param {Object} object -
 *
 * @param {String} object.path -
 * @param {String} object.filename -
 * @param {*} object.data -
 * @param {Boolean} [object.stringify] -
 * @param {Boolean} [object.compress] -
 */
DKTools.FileManager.saveToLocalFile = function(object) {
    object = object || {};
    const fs = this._fs;
    const path = object.path;
    const filePath = this.filePath(path, object.filename);
    let data = object.data;
    if (object.stringify) {
        data = JSON.stringify(data);
    }
    if (object.compress) {
        data = LZString.compressToBase64(data);
    }
    this.createFolder(path);
    if (object.sync) {
        fs.writeFileSync(filePath, data, object.options);
    } else {
        fs.writeFile(filePath, data, object.options, object.callback);
    }
};

/**
 * @static
 *
 * @param {Object} object -
 *
 * @param {String} object.filename -
 * @param {*} object.data -
 * @param {Boolean} [object.stringify] -
 * @param {Boolean} [object.compress] -
 */
DKTools.FileManager.saveToWebStorage = function(object) {
    object = object || {};
    let key = object.filename;
    let data = object.data;
    if (object.stringify) {
        data = JSON.stringify(data);
    }
    if (object.compress) {
        data = LZString.compressToBase64(data);
    }
    localStorage.setItem(key, data);
};

// load methods

/**
 * @static
 *
 * @param {Object} object -
 *
 * @returns {*}
 */
DKTools.FileManager.loadFromFile = function(object) {
    if (this.isLocalMode()) {
        return this.loadFromLocalFile(object);
    } else {
        return this.loadFromWebStorage(object);
    }
};

/**
 * @static
 *
 * @param {Object} object -
 *
 *
 * @returns {*}
 */
DKTools.FileManager.loadFromLocalFile = function(object) {
    object = object || {};
    const fs = this._fs;
    const filePath = this.filePath(object.path, object.filename);
    let data = null;
    if (fs.existsSync(filePath)) {
        if (object.sync) {
            data = fs.readFileSync(filePath, object.options || { encoding: 'utf8' });
        } else {
            data = fs.readFile(filePath, object.options || { encoding: 'utf8' }, object.callback);
        }
        if (data) {
            if (object.decompress) {
                data = LZString.decompressFromBase64(data);
            }
            if (object.parse) {
                data = JSON.parse(data);
            }
        }
    }
    return data;
};

/**
 * @static
 *
 * @param {Object} object -
 *
 * @returns {*}
 */
DKTools.FileManager.loadFromWebStorage = function(object) {
    object = object || {};
    let key = object.filename;
    let data = localStorage.getItem(key);
    if (data) {
        if (object.decompress) {
            data = LZString.decompressFromBase64(data);
        }
        if (object.parse) {
            data = JSON.parse(data);
        }
    }
    return data;
};

// remove methods

/**
 * Удаляет файл
 *
 * @static
 *
 * @param {Object} object - Объект типа {}
 *
 * @param {String} object.path - Путь к папке, где хранится файл
 * @param {String} object.filename - Название файла
 */
DKTools.FileManager.removeFile = function(object) {
    if (this.isLocalMode()) {
        this.removeLocalFile(object);
    } else {
        this.removeWebStorage(object.filename);
    }
};

/**
 * Удаляет файл
 *
 * @static
 *
 * @param {Object} object - Объект типа {}
 *
 * @param {String} object.path - Путь к папке, где хранится файл
 * @param {String} object.filename - Название файла
 */
DKTools.FileManager.removeLocalFile = function(object) {
    object = object || {};
    const fs = this._fs;
    const filePath = this.filePath(object.path, object.filename);
    if (fs.existsSync(filePath)) {
        if (object.sync) {
            fs.unlinkSync(filePath);
        } else {
            fs.unlink(filePath);
        }
    }
};

/**
 * Удаляет файл
 *
 * @static
 * @param {String} object.filename - Название файла
 */
DKTools.FileManager.removeWebStorage = function(filename) {
    localStorage.removeItem(filename);
};

// rename methods

/**
 * Переименовывает файл
 *
 * @static
 *
 * @param {Object} object - Объект типа {}
 *
 * @param {String} object.path - Путь к папке, где хранится файл
 * @param {String} object.oldName - Старое название файла
 * @param {String} object.newName - Новое название файла
 */
DKTools.FileManager.renameFile = function(object) {
    if (this.isLocalMode()) {
        this.renameLocalFile(object);
    } else {
        this.renameWebStorage(object.oldName, object.newName);
    }
};

/**
 * Переименовывает файл
 *
 * @static
 *
 * @param {Object} object - Объект типа {}
 *
 * @param {String} object.path - Путь к папке, где хранится файл
 * @param {String} object.oldName - Старое название файла
 * @param {String} object.newName - Новое название файла
 */
DKTools.FileManager.renameLocalFile = function(object) {
    object = object || {};
    const fs = this._fs;
    const path = object.path;
    const oldFilePath = this.filePath(path, object.oldName);
    const newFilePath = this.filePath(path, object.newName);
    if (fs.existsSync(oldFilePath) && !fs.existsSync(newFilePath)) {
        if (object.sync) {
            fs.renameSync(oldFilePath, newFilePath);
        } else {
            fs.rename(oldFilePath, newFilePath, object.callback);
        }
    }
};

/**
 * Переименовывает файл
 *
 * @static
 * @param {String} oldName - Старое название файла
 * @param {String} newName - Новое название файла
 */
DKTools.FileManager.renameWebStorage = function(oldName, newName) {
    let data = localStorage.getItem(oldName);
    if (data && !localStorage.getItem(newName)) {
        localStorage.setItem(newName, data);
        localStorage.removeItem(oldName);
    }
};

// exists methods

/**
 * Возвращает true, если папка существует
 *
 * @static
 * @param {String} path - Путь к папке
 * @return {Boolean} Папка существует
 */
DKTools.FileManager.folderExists = function(path) {
    return this.isLocalMode() &&this.localFileExists(path);
};

/**
 * Возвращает true, если файл существует
 *
 * @static
 *
 * @param {Object} object - Объект типа {}
 *
 * @param {String} object.path - Путь к папке, где хранится файл
 * @param {String} object.filename - Название файла
 *
 * @returns {Boolean} Файл существует
 */
DKTools.FileManager.fileExists = function(object) {
    if (this.isLocalMode()) {
        return this.localFileExists(object.path, object.filename);
    } else {
        return this.webStorageExists(object.filename);
    }
};

/**
 * Возвращает true, если файл существует
 *
 * @static
 *
 * @param {String} path - Путь к папке, где хранится файл
 * @param {String} filename - Название файла
 *
 * @returns {Boolean}  Файл существует
 */
DKTools.FileManager.localFileExists = function(path, filename) {
    const fs = this._fs;
    const filePath = this.filePath(path, filename);
    return fs.existsSync(filePath);
};

/**
 * Возвращает true, если файл существует
 *
 * @static
 * @param {String} filename - Название файла
 * @returns {Boolean}  Файл существует
 */
DKTools.FileManager.webStorageExists = function(filename) {
    return !!localStorage.getItem(filename);
};





//===========================================================================
// DKTools Localization
//===========================================================================

/**
 * @private
 * @readonly
 * @type {String}
 * @memberOf DKTools.Localization
 */
DKTools.Localization._locale = '';

/**
 *
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
     * Список языков игры
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
     * Список локалей игры
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
     * Локаль игры
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
     * Язык игры
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
 * Инициализирует класс локализации
 * Загружает локаль игры
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

// other methods

/**
 * Сохраняет локаль в файл
 *
 * @static
 */
DKTools.Localization.saveLocale = function() {
    DKTools.FileManager.saveToFile(this._getFileObject());
};

/**
 * Загружает локаль из файла
 *
 * @static
 */
DKTools.Localization.loadLocale = function() {
    const locale = DKTools.FileManager.loadFromFile(this._getFileObject());
    if (locale) {
        this._locale = locale;
    }
};

/**
 * Удаляет файл локали
 *
 * @static
 */
DKTools.Localization.removeLocale = function() {
    DKTools.FileManager.removeFile(this._getFileObject());
};

/**
 * @private
 * @static
 * @returns {Object}
 */
DKTools.Localization._getFileObject = function() {
    if (DKTools.FileManager.isLocalMode()) {
        return {
            path: DKTools.Localization._localPath,
            filename: DKTools.Localization._localFilename,
            data: this._locale,
            sync: true
        };
    }
    return {
        filename: DKTools.Localization._webFilename,
        data: this._locale
    };
};

/**
 * Возвращает предыдущую локаль из списка
 *
 * @static
 * @returns {String | null}
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
 * Возвращает следующую локаль из списка
 *
 * @static
 * @returns {String | null}
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
 * @static
 * @returns {String | null}
 */
DKTools.Localization.getPrevLanguage = function() {
    const locale = this.getPrevLocale();
    if (locale) {
        return this._languages[locale];
    }
    return null;
};

/**
 * @static
 * @returns {String | null}
 */
DKTools.Localization.getNextLanguage = function() {
    const locale = this.getNextLocale();
    if (locale) {
        return this._languages[locale];
    }
    return null;
};

/**
 * @static
 */
DKTools.Localization.selectPrevLocale = function() {
    const locale = this.getPrevLocale();
    if (locale) {
        this._setLocale(locale);
    }
};

/**
 * @static
 */
DKTools.Localization.selectNextLocale = function() {
    const locale = this.getNextLocale();
    if (locale) {
        this._setLocale(locale);
    }
};

/**
 * @private
 * @static
 * @param {String} locale
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
 * @static
 * @param {String} locale
 * @returns {Boolean}
 */
DKTools.Localization.checkLocale = function(locale) {
    return DKTools.Utils.Array.contains(this.locales, locale);
};

/**
 * Обрабатывает изменение локали игры
 *
 * @private
 * @static
 * @param {String} lastLocale - Предыдущая локаль игры
 */
DKTools.Localization._onLocaleChange = function(lastLocale) {
    _.forEach(this._listeners, function(listener) {
        listener(lastLocale);
    });
};

/**
 * @static
 * @param {Function} listener
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
    DKTools.FileManager.initialize();
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
// Input
//===========================================================================

const DKTools_Input_onKeyUp = Input._onKeyUp;
Input._onKeyUp = function(event) {
    DKTools_Input_onKeyUp.call(this, event);
    if (DKToolsParam.get('Take Screenshot') && event.keyCode === DKToolsParam.get('Screenshot Key Code')) {
        DKTools.Utils.makeScreenshot();
    }
};





//===========================================================================
// TouchInput
//===========================================================================

// properties

Object.defineProperties(TouchInput, {

    /**
     * Координата X мыши
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
     * Координата Y мыши
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
 * Возвращает true, если мышь двигается
 *
 * @static
 * @return {Boolean} Мышь двигается
 */
TouchInput.isMouseMoved = function() {
    return this._mouseMoved;
};

/**
 * Возвращает true, если мышь нажата (левая, средняя или правая кнопка)
 *
 * @static
 * @returns {Boolean} Мышь нажата (левая, средняя или правая кнопка)
 */
TouchInput.isMousePressed = function() {
    return this.isLeftButtonPressed() || this.isMiddleButtonPressed() || this.isRightButtonPressed();
};

/**
 * @returns {Boolean}
 */
TouchInput.isMouseReleased = function() {
    return this.isLeftButtonReleased() || this.isMiddleButtonReleased() || this.isRightButtonReleased();
};

/**
 * Возвращает true, если экран нажат (для мобильных устройств)
 *
 * @static
 * @returns {Boolean} Экран нажат (для мобильных устройств)
 */
TouchInput.isScreenPressed = function() {
    return this._screenPressed;
};

/**
 * Возврашает true, если левая кнопка мыши нажата
 *
 * @static
 * @returns {Boolean} Левая кнопка мыши нажата
 */
TouchInput.isLeftButtonPressed = function() {
    return this._leftButtonPressed;
};

/**
 * @returns {Boolean}
 */
TouchInput.isLeftButtonReleased = function() {
    return this._leftButtonReleased;
};

/**
 * Возврашает true, если средняя кнопка мыши нажата
 *
 * @static
 * @returns {Boolean} Средняя кнопка мыши нажата
 */
TouchInput.isMiddleButtonPressed = function() {
    return this._middleButtonPressed;
};

/**
 * @returns {Boolean}
 */
TouchInput.isMiddleButtonReleased = function() {
    return this._middleButtonReleased;
};

/**
 * Возврашает true, если правая кнопка мыши нажата
 *
 * @static
 * @returns {Boolean} Правая кнопка мыши нажата
 */
TouchInput.isRightButtonPressed = function() {
    return this._rightButtonPressed;
};

/**
 * @returns {Boolean}
 */
TouchInput.isRightButtonReleased = function() {
    return this._rightButtonReleased;
};

// event methods

const DKTools_TouchInput_onLeftButtonDown = TouchInput._onLeftButtonDown;
TouchInput._onLeftButtonDown = function(event) {
    DKTools_TouchInput_onLeftButtonDown.call(this, event);

    let x = Graphics.pageToCanvasX(event.pageX);
    let y = Graphics.pageToCanvasY(event.pageY);
    if (Graphics.isInsideCanvas(x, y)) {
        this._events.leftButtonPressed = true;
    }
};

const DKTools_TouchInput_onMiddleButtonDown = TouchInput._onMiddleButtonDown;
TouchInput._onMiddleButtonDown = function(event) {
    DKTools_TouchInput_onMiddleButtonDown.call(this, event);

    let x = Graphics.pageToCanvasX(event.pageX);
    let y = Graphics.pageToCanvasY(event.pageY);
    if (Graphics.isInsideCanvas(x, y)) {
        this._events.middleButtonPressed = true;
    }
};

const DKTools_TouchInput_onRightButtonDown = TouchInput._onRightButtonDown;
TouchInput._onRightButtonDown = function(event) {
    DKTools_TouchInput_onRightButtonDown.call(this, event);

    let x = Graphics.pageToCanvasX(event.pageX);
    let y = Graphics.pageToCanvasY(event.pageY);
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

    let x = Graphics.pageToCanvasX(event.pageX);
    let y = Graphics.pageToCanvasY(event.pageY);
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
// DKTools Audio
//===========================================================================

/**
 * @private
 * @readonly
 * @type {String}
 */
DKTools.Audio._path = AudioManager._path || 'audio/';

// properties

Object.defineProperties(DKTools.Audio.prototype, {

    /**
     * Тип аудиофайла
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
     * Название аудиофайла
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
     * Громкость аудиофайла
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
     * Темп аудиофайла
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
     * Панорама аудиофайла
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
     * Зацикливание аудиофайла
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
     * Аудио буфер
     *
     * @readonly
     * @type {WebAudio | Html5Audio}
     * @memberOf DKTools.Audio.prototype
     */
    buffer: {
        get: function() {
            return this._buffer;
        },
        configurable: true
    },

    /**
     * Текущая позиция аудиофайла
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
 *
 *
 * @static
 * @returns {String}
 */
DKTools.Audio.audioFileExt = function() {
    if (WebAudio.canPlayOgg() && !DKTools.Utils.isMobileDevice()) {
        return '.ogg';
    }
    return '.m4a';
};

// initialize methods

/**
 * Инициализирует объект класса
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
DKTools.Audio.prototype.initialize = function(object) {
    object = object || {};

    /**
     * Тип аудиофайла
     *
     * @private
     * @readonly
     * @type {String}
     */
    this._type = object.type.toLowerCase();

    /**
     * Название аудиофайла
     *
     * @private
     * @readonly
     * @type {String}
     */
    this._name = object.name;

    /**
     * Громкость аудиофайла
     *
     * @private
     * @readonly
     * @type {Number}
     */
    this._volume = (_.isFinite(object.volume) ? object.volume : this.standardVolume());

    /**
     * Темп аудиофайла
     *
     * @private
     * @readonly
     * @type {Number}
     */
    this._pitch = (_.isFinite(object.pitch) ? object.pitch : this.standardPitch());

    /**
     * Панорама аудиофайла
     *
     * @private
     * @readonly
     * @type {Number}
     */
    this._pan = (_.isFinite(object.pan) ? object.pan : this.standardPan());

    /**
     * Зацикливание аудиофайла
     *
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._loop = (_.isBoolean(object.loop) ? object.loop : this.standardLoop());

    /**
     * Аудио буфер
     *
     * @private
     * @readonly
     * @type {WebAudio}
     */
    this._buffer = this._createBuffer();

    /**
     * Позиция паузы
     *
     * @private
     * @readonly
     * @type {Number | null}
     */
    this._pausePos = null;
};

// standard methods

/**
 * Возвращает стандартную громкость аудиофайла
 *
 * @return {Number} Стандартная громкость аудиофайла
 */
DKTools.Audio.prototype.standardVolume = function() {
    return 90;
};

/**
 * Возвращает стандартный темп аудиофайла
 *
 * @return {Number} Стандартный темп аудиофайла
 */
DKTools.Audio.prototype.standardPitch = function() {
    return 100;
};

/**
 * Возвращает стандартную панораму аудиофайла
 *
 * @return {Number} Стандартная панорама аудиофайла
 */
DKTools.Audio.prototype.standardPan = function() {
    return 0;
};

/**
 * Возвращает стандартное зацикливание аудиофайла
 *
 * @return {Boolean} Стандартное зацикливание аудиофайла
 */
DKTools.Audio.prototype.standardLoop = function() {
    return this._type === 'bgm' || this._type === 'bgs';
};

// clone methods

/**
 * Клонирует объект аудиофайла
 *
 * @return {DKTools.Audio} Клонированный объект аудиофайла
 */
DKTools.Audio.prototype.clone = function() {
    return new DKTools.Audio(this);
};

// is methods

/**
 * Возвращает true, если аудиофайл проигрывается
 *
 * @return {Boolean} Аудиофайл проигрывается
 */
DKTools.Audio.prototype.isPlaying = function() {
    return this._buffer.isPlaying();
};

/**
 * Возвращает true, если аудиофайл приостановлен
 *
 * @return {Boolean} Аудиофайл приостановлен
 */
DKTools.Audio.prototype.isPaused = function() {
    return !this.isPlaying() && this._pausePos != null;
};

// audio methods

/**
 * Проигрывает аудиофайл
 */
DKTools.Audio.prototype.play = function(pos) {
    this._buffer.play(this._loop, pos);
    this._updateBufferParameters();

    this._pausePos = null;
};

/**
 * Ставит аудиофайл на паузу
 */
DKTools.Audio.prototype.pause = function() {
    if (this.isPlaying()) {
        this._pausePos = this.seek();
        this.stop();
    }
};

/**
 * Продолжает воспроизведение аудиофайла
 */
DKTools.Audio.prototype.resume = function() {
    if (this.isPaused()) {
        this.play(this._pausePos);
    }
};

/**
 * Останавливает аудиофайл
 */
DKTools.Audio.prototype.stop = function() {
    if (this.isPlaying()) {
        this._buffer.stop();
    }
};

/**
 * Возвращает текущую позицию аудиофайла
 *
 * @return {Number} Текущая позиция аудиофайла
 */
DKTools.Audio.prototype.seek = function() {
    return this._buffer.seek();
};

/**
 * Нарастание аудиофайла
 *
 * @param {Number} duration - Длительность нарастания
 */
DKTools.Audio.prototype.fadeIn = function(duration) {
    this._buffer.fadeIn(duration);
};

/**
 * Затухание аудиофайла
 *
 * @param {Number} duration - Длительность затухания
 */
DKTools.Audio.prototype.fadeOut = function(duration) {
    this._buffer.fadeOut(duration);
};

// other methods

/**
 * Обновляет параметры аудио буфера (громкость, темп и панорама)
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
 * Создает аудио буфер
 * Возвращает созданный аудио буфер
 *
 * @private
 * @return {WebAudio | Html5Audio} Созданный аудио буфер
 */
DKTools.Audio.prototype._createBuffer = function() {
    const ext = DKTools.Audio.audioFileExt();
    const folder = this._type;
    const name = this._name;
    const url = DKTools.Audio._path + folder + '/' + encodeURIComponent(name) + ext;
    return new WebAudio(url);
};

/**
 * Возвращает true, если объекты аудиофайлов равны
 *
 * @param {DKTools.Audio | Object} object - Объект аудиофайла или Объект типа {}
 *
 * @param {String} object.type - Тип аудиофайла
 * @param {String} object.name - Названия аудиофайла
 * @param {Number} object.volume - Громкость
 * @param {Number} object.pitch - Темп
 * @param {Number} object.pan - Панорама
 * @param {Boolean} object.loop - Зацикливание аудиофайла
 *
 * @return {Boolean} Объекты аудиофайлов равны
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
// DKTools Event
//===========================================================================

// properties

Object.defineProperties(DKTools.Event.prototype, {

    /**
     * Объект, для которого установлено событие
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
     * Тип события
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
     * Количество повторов события
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
     * Оставшееся количество повторов события
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
     * Обработчик начала работы события
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
     * Обработчик обновления события
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
     * Обработчик паузы события
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
     * Обработчик сброса события
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
     * Обработчик повтора события
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
     * Обработчик успешного завершения работы события
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
     * Обработчик провального завершения работы события
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
 * @param {Object} object - Parameters
 *
 * @param {DKTools.Sprite | DKTools.Window | *} [object.target] - Объект, для которого установлено событие
 * @param {String} [object.type] - Тип события
 * @param {Number} [object.repeatTime] - Длительность повтора события
 * @param {Number} [object.repeats] - Количество повторов события
 * @param {Number} [object.remainingPauseTime] - Длительность паузы
 * @param {Function} [object.onStart] - Обработчик начала работы
 * @param {Function} object.onUpdate - Обработчик обновления
 * @param {Function} [object.onPause] - Обработчик паузы события
 * @param {Function} [object.onReset] - Обработчик сброса события
 * @param {Function} [object.onRepeat] - Обработчик повтора события
 * @param {Function} [object.onSuccess] - Обработчик успешного завершения работы
 * @param {Function} [object.onFailure] - Обработчик провального завершения работы
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
    this._repeats = (object.repeats == null ? -1 : 0);

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
 * Сбрасывает текущую длительность повтора события
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
 * Сбрасывает текущее количество повторов события
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
 * Проверяет обработчик начала работы на возможность вызова
 * Возвращает true, если можно вызвать обработчик начала работы
 *
 * @private
 * @return {Boolean} Можно вызвать обработчик начала работы
 */
DKTools.Event.prototype._canCallOnStartHandler = function() {
    return this.hasOnStartHandler() && !this.isStarted();
};

/**
 * Проверяет обработчик обновления на возможность вызова
 * Возвращает true, если можно вызвать обработчик обновления
 *
 * @private
 * @return {Boolean} Можно вызвать обработчик обновления
 */
DKTools.Event.prototype._canCallOnUpdateHandler = function() {
    return this.hasOnUpdateHandler() && this.isUpdated();
};

/**
 * Проверяет обработчик паузы на возможность вызова
 * Возвращает true, если можно вызвать обработчик паузы
 *
 * @private
 * @returns {Boolean} Можно вызвать обработчик паузы
 */
DKTools.Event.prototype._canCallOnPauseHandler = function() {
    return this.hasOnPauseHandler() && this.isPaused();
};

/**
 * Проверяет обработчик сброса события на возможность вызова
 * Возвращает true, если можно вызвать обработчик сброса события
 *
 * @private
 * @returns {Boolean} Можно вызвать обработчик сброса события
 */
DKTools.Event.prototype._canCallOnResetHandler = function() {
    return this.hasOnResetHandler();
};

/**
 * Проверяет обработчик повтора события на возможность вызова
 * Возвращает true, если можно вызвать обработчик повтора события
 *
 * @private
 * @returns {Boolean} Можно вызвать обработчик повтора события
 */
DKTools.Event.prototype._canCallOnRepeatHandler = function() {
    return this.hasOnRepeatHandler();
};

/**
 * Проверяет обработчик успешного завершения события на возможность вызова
 * Возвращает true, если можно вызвать обработчик успешного завершения события
 *
 * @private
 * @returns {Boolean} Можно вызвать обработчик успешного завершения события
 */
DKTools.Event.prototype._canCallOnSuccessHandler = function() {
    return this.hasOnSuccessHandler() && this.isFinished();
};

/**
 * Проверяет обработчик провального завершения события на возможность вызова
 * Возвращает true, если можно вызвать обработчик провального завершения события
 *
 * @private
 * @returns {Boolean} Можно вызвать обработчик провального завершения события
 */
DKTools.Event.prototype._canCallOnFailureHandler = function() {
    return this.hasOnFailureHandler();
};

// _call methods

/**
 * Вызывает обработчик начала работы
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
 * Вызывает обработчик обновления
 *
 * @private
 */
DKTools.Event.prototype._callOnUpdateHandler = function() {
    if (this._canCallOnUpdateHandler()) {
        this._onUpdate(this);
    }
};

/**
 * Вызывает обработчик паузы
 *
 * @private
 */
DKTools.Event.prototype._callOnPauseHandler = function() {
    if (this._canCallOnPauseHandler()) {
        this._onPause(this);
    }
};

/**
 * Вызывает обработчик сброса события
 *
 * @private
 */
DKTools.Event.prototype._callOnResetHandler = function() {
    if (this._canCallOnResetHandler()) {
        this._onReset(this);
    }
};

/**
 * Вызывает обработчик повторения события
 *
 * @private
 */
DKTools.Event.prototype._callOnRepeatHandler = function() {
    if (this._canCallOnRepeatHandler()) {
        this._onRepeat(this);
    }
};

/**
 * Вызывает обработчик успешного завершения события
 *
 * @private
 */
DKTools.Event.prototype._callOnSuccessHandler = function(forcedSuccess) {
    if (this._canCallOnSuccessHandler() || forcedSuccess) {
        this._onSuccess(this);
    }
};

/**
 * Вызывает обработчик провального завершения события
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
 *
 * @return {Number}
 */
DKTools.Event.prototype.getElapsedTime = function() {
    return this._repeatTime - this._remainingTime;
};

/**
 *
 * @return {Number}
 */
DKTools.Event.prototype.getElapsedRepeats = function() {
    return this._repeats - this._remainingRepeats;
};

// has methods

/**
 * Возвращает true, если цель установлена
 *
 * @returns {Boolean} Цель установлена
 */
DKTools.Event.prototype.hasTarget = function() {
    return !!this._target;
};

/**
 * Возвращает true, если тип события установлен
 *
 * @returns {Boolean} Тип события установлен
 */
DKTools.Event.prototype.hasType = function() {
    return !!this._type;
};

/**
 * @returns {Boolean}
 */
DKTools.Event.prototype.hasOnStartHandler = function() {
    return !!this._onStart;
};

/**
 * @returns {Boolean}
 */
DKTools.Event.prototype.hasOnUpdateHandler = function() {
    return !!this._onUpdate;
};

/**
 * @returns {Boolean}
 */
DKTools.Event.prototype.hasOnPauseHandler = function() {
    return !!this._onPause;
};

/**
 * @returns {Boolean}
 */
DKTools.Event.prototype.hasOnResetHandler = function() {
    return !!this._onReset;
};

/**
 * @returns {Boolean}
 */
DKTools.Event.prototype.hasOnRepeatHandler = function() {
    return !!this._onRepeat;
};

/**
 * @returns {Boolean}
 */
DKTools.Event.prototype.hasOnFailureHandler = function() {
    return !!this._onFailure;
};

/**
 * @returns {Boolean}
 */
DKTools.Event.prototype.hasOnSuccessHandler = function() {
    return !!this._onSuccess;
};

// set methods

/**
 * Устанавливает цель
 *
 * @param {DKTools.Sprite | DKTools.Window | *} target - Цель
 */
DKTools.Event.prototype.setTarget = function(target) {
    this._target = target;
};

/**
 * Устанавливает обработчик начала работы
 *
 * @param {Function} handler - Обработчик начала работы
 */
DKTools.Event.prototype.setOnStartHandler = function(handler) {
    this._onStart = handler;
};

/**
 * Устанавливает обработчик обновления
 *
 * @param {Function} handler - Обработчик обновления
 */
DKTools.Event.prototype.setOnUpdateHandler = function(handler) {
    this._onUpdate = handler;
};

/**
 * Устанавливает обработчик паузы
 *
 * @param {Function} handler - Обработчик паузы
 */
DKTools.Event.prototype.setOnPauseHandler = function(handler) {
    this._onPause = handler;
};

/**
 * Устанавливает обработчик сброса события
 *
 * @param {Function} handler - Обработчик сброса события
 */
DKTools.Event.prototype.setOnResetHandler = function(handler) {
    this._onReset = handler;
};

/**
 * Устанавливает обработчик повтора события
 *
 * @param {Function} handler - Обработчик повтора события
 */
DKTools.Event.prototype.setOnRepeatHandler = function(handler) {
    this._onRepeat = handler;
};

/**
 * Устанавливает обработчик успешного завершения события
 *
 * @param {Function} handler - Обработчик успешного завершения события
 */
DKTools.Event.prototype.setOnSuccessHandler = function(handler) {
    this._onSuccess = handler;
};

/**
 * Устанавливает обработчик провального завершения события
 *
 * @param {Function} handler - Обработчик провального завершения события
 */
DKTools.Event.prototype.setOnFailureHandler = function(handler) {
    this._onFailure = handler;
};

// other methods

/**
 * Ставит на паузу
 *
 * @param {Number} [duration] - Длительность паузы
 */
DKTools.Event.prototype.pause = function(duration) {
    this._remainingPauseTime = duration || -1;
};

/**
 * Снимает с паузы
 */
DKTools.Event.prototype.resume = function() {
    this._remainingPauseTime = 0;
};

/**
 * Удаляет событие
 *
 * @override
 */
DKTools.Event.prototype.remove = function() {
    if (this.hasTarget()) {
        this._target.removeEvent(this);
    }
};

/**
 * Клонирует событие
 *
 * @returns {DKTools.Timer | DKTools.Animation} Клонированный объект
 */
DKTools.Event.prototype.clone = function() {
    return new (this.constructor)(this);
};

/**
 * Сбрасывает событие
 */
DKTools.Event.prototype.reset = function() {
    this._resetRemainingDuration();
    this._resetRemainingRepeats();
    this._callOnResetHandler();
};

/**
 * Повторяет событие
 */
DKTools.Event.prototype.repeat = function() {
    if (this._remainingRepeats > 0) {
        this._remainingRepeats--;
    }
    this._resetRemainingTime();
    this._callOnRepeatHandler();
};

/**
 * Завершает работу события
 *
 * @param {Boolean} [forcedSuccess] - Принудительное успешное завершение событиия
 */
DKTools.Event.prototype.finish = function(forcedSuccess) {
    if (this.isFinished() || forcedSuccess) {
        this._callOnSuccessHandler(forcedSuccess);
    } else {
        this._callOnFailureHandler();
    }
};

/**
 * Завершает работу события и сбрасывает его
 *
 * @param {Boolean} [forcedSuccess] - Принудительное успешное завершение событиия
 */
DKTools.Event.prototype.stop = function(forcedSuccess) {
    this.finish(forcedSuccess);
    this.reset();
};

// is methods

/**
 * @returns {Boolean}
 */
DKTools.Event.prototype.isStarted = function() {
    return this._started;
};

/**
 * Возвращает true, если событие обновляется
 *
 * @returns {Boolean} Событие обновляется
 */
DKTools.Event.prototype.isUpdated = function() {
    return this.isStarted() && !this.isPaused() && !this.isFinished();
};

/**
 * @returns {Boolean}
 */
DKTools.Event.prototype.isFinished = function() {
    return this._remainingTime === 0 && this._remainingRepeats === 0;
};

/**
 * Проверяет событие на паузу
 * Возвращает true, если событие приостановлено
 *
 * @return {Boolean} Событие приостановлено
 */
DKTools.Event.prototype.isPaused = function() {
    return this._remainingPauseTime !== 0;
};

/**
 * @returns {Boolean}
 */
DKTools.Event.prototype.isAnimation = function() {
    return this instanceof DKTools.Animation;
};

/**
 * @returns {Boolean}
 */
DKTools.Event.prototype.isAnimationAction = function() {
    return this instanceof DKTools.Animation.Action;
};

// add methods

/**
 * @param {Number} time
 */
DKTools.Event.prototype.addRemainingTime = function(time) {
    this._remainingTime += time;
};

/**
 * @param {Number} repeats
 */
DKTools.Event.prototype.addRemainingRepeats = function(repeats) {
    this._remainingRepeats += repeats;
};

/**
 * @param {Number} time -
 */
DKTools.Event.prototype.addRemainingPauseTime = function(time) {
    this._remainingPauseTime += time;
};

// _update methods

/**
 * Обновляет длительность паузы
 *
 * @private
 */
DKTools.Event.prototype._updateRemainingPauseTime = function() {
    if (this._remainingPauseTime > 0) {
        this._remainingPauseTime--;
    }
};

/**
 * Обновляет паузу
 *
 * @private
 */
DKTools.Event.prototype._updatePause = function() {
    this._updateRemainingPauseTime();
    this._callOnPauseHandler();
};

/**
 *
 * @private
 */
DKTools.Event.prototype._updateRemainingTime = function() {
    if (this._remainingTime > 0) {
        this._remainingTime--;
    }
};

/**
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
 * Обновляет событие
 *
 * @private
 */
DKTools.Event.prototype._update = function() {
    this._callOnUpdateHandler();
    this._updateRemainingRepeats();
};

// update methods

/**
 * Обновляет событие
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
// DKTools Animation
//===========================================================================

DKTools.Animation.prototype = Object.create(DKTools.Event.prototype);
DKTools.Animation.prototype.constructor = DKTools.Animation;

// properties

Object.defineProperties(DKTools.Animation.prototype, {

    /**
     * Действия анимации
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
 * Инициализирует объект класса
 *
 * @override
 *
 * @param {DKTools.Animation | Object} object - Объект типа {}
 *
 * @see object properties: DKTools.Event.prototype.initialize
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
 * @returns {Boolean}
 */
DKTools.Animation.prototype._canUpdateAction = function(action) {
    return _.inRange(this.getElapsedTime(), action.startTime, action.endTime);
};

// has methods

/**
 * @param {DKTools.Animation.Action} action
 * @returns {Boolean}
 */
DKTools.Animation.prototype.hasAction = function(action) {
    return DKTools.Utils.Array.contains(this._actions, action);
};

/**
 * @returns {Boolean}
 */
DKTools.Animation.prototype.hasActions = function() {
    return !DKTools.Utils.Array.isEmpty(this._actions);
};

// is methods

/**
 * @param {DKTools.Animation.Action} action
 * @returns {Boolean}
 */
DKTools.Animation.prototype.isActionUpdated = function(action) {
    return action.isStarted() && !action.isPaused() && this._canUpdateAction(action);
};

/**
 * @param {DKTools.Animation.Action} action
 * @return {Boolean}
 */
DKTools.Animation.prototype.isActionFinished = function(action) {
    return action.isStarted() && !action.isPaused() && this.getElapsedTime() >= action.endTime;
};

// other methods

/**
 * Удаляет действие анимации
 *
 * @param {DKTools.Animation.Action} action - Действие анимации
 */
DKTools.Animation.prototype.removeAction = function(action) {
    if (this.hasAction(action)) {
        DKTools.Utils.Array.remove(this._actions, action);
    }
};

/**
 * Сбрасывает анимацию
 *
 * @override
 */
DKTools.Animation.prototype.reset = function() {
    this.resetActions();
    DKTools.Event.prototype.reset.call(this);
};

/**
 * Повторяет анимацию
 *
 * @override
 */
DKTools.Animation.prototype.repeat = function() {
    this.repeatActions();
    DKTools.Event.prototype.repeat.call(this);
};

/**
 * Сбрасывает действия анимации
 */
DKTools.Animation.prototype.resetActions = function() {
    _.forEach(this._actions, function(action) {
        action.reset();
    });
};

/**
 * Повторяет действия анимации
 */
DKTools.Animation.prototype.repeatActions = function() {
    _.forEach(this._actions, function(action) {
        action.repeat();
    });
};

// add methods

/**
 * Добавляет действие
 *
 * @param {DKTools.Animation.Action} action - Действие анимации
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
 * Добавляет действия
 *
 * @param {DKTools.Animation.Action[]} actions - Действия анимации
 */
DKTools.Animation.prototype.addActions = function(actions) {
    _.forEach(actions, this.addAction.bind(this));
};

// _update methods

/**
 * Обновляет действие анимации
 *
 * @private
 * @param {DKTools.Animation.Action} action - Действие анимации
 */
DKTools.Animation.prototype._updateAction = function(action) {
    if (this._canUpdateAction(action)) {
        action.update(action.endTime - this._duration);
    }
};

/**
 * Обновляет действия анимации
 *
 * @private
 */
DKTools.Animation.prototype._updateActions = function() {
    _.forEach(this._actions, this._updateAction.bind(this));
};

/**
 * @private
 * @override
 */
DKTools.Animation.prototype._update = function() {
    this._updateActions();
    DKTools.Event.prototype._update.call(this);
};





//===========================================================================
// DKTools Animation Action
//===========================================================================

DKTools.Animation.Action.prototype = Object.create(DKTools.Event.prototype);
DKTools.Animation.Action.prototype.constructor = DKTools.Animation.Action;

// properties

Object.defineProperties(DKTools.Animation.Action.prototype, {

    /**
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
 * @static
 * @param {DKTools.Animation.Action | Object} object -
 * @returns {DKTools.Animation.Action}
 */
DKTools.Animation.Action.Rotation = function(object) {
    const action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        const remainingTime = this._animation.remainingTime;
        const target = this._target;

        const rotation = (this._data - target.rotation) / remainingTime;
        const newRotation = target.rotation + rotation;
        target.setRotation(newRotation);
    }.bind(action));
    return action;
};

/**
 * @static
 * @param {DKTools.Animation.Action | Object} object -
 * @returns {DKTools.Animation.Action}
 */
DKTools.Animation.Action.OpacitySprite = function(object) {
    const action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        const remainingTime = this._animation.remainingTime;
        const target = this._target;

        const opacity = (this._data - target.opacity) / remainingTime;
        const newOpacity = target.opacity + opacity;
        target.setOpacity(newOpacity);
    }.bind(action));
    return action;
};

/**
 * @static
 * @param {DKTools.Animation.Action | Object} object -
 * @returns {DKTools.Animation.Action}
 */
DKTools.Animation.Action.OpacityWindow = function(object) {
    const action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        const remainingTime = this._animation.remainingTime;
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
 * @static
 * @param {DKTools.Animation.Action | Object} object -
 * @returns {DKTools.Animation.Action}
 */
DKTools.Animation.Action.Tint = function(object) {
    const action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        const remainingTime = this._animation.remainingTime;
        const target = this._target;

        const tint = (this._data - target.tint) / remainingTime;
        const newTint = target.tint + tint;
        target.setTint(newTint);
    }.bind(action));
    return action;
};

/**
 * @static
 * @param {DKTools.Animation.Action | Object} object -
 * @returns {DKTools.Animation.Action}
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
 * @static
 * @param {DKTools.Animation.Action | Object} object -
 * @returns {DKTools.Animation.Action}
 */
DKTools.Animation.Action.Move = function(object) {
    const action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        const remainingTime = this._animation.remainingTime;
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
 * @static
 * @param {DKTools.Animation.Action | Object} object -
 * @returns {DKTools.Animation.Action}
 */
DKTools.Animation.Action.Scale = function(object) {
    const action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        const remainingTime = this._animation.remainingTime;
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
 * @static
 * @param {DKTools.Animation.Action | Object} object -
 * @returns {DKTools.Animation.Action}
 */
DKTools.Animation.Action.Skew = function(object) {
    const action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        const remainingTime = this._animation.remainingTime;
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
 * @static
 * @param {DKTools.Animation.Action | Object} object -
 * @returns {DKTools.Animation.Action}
 */
DKTools.Animation.Action.Frame = function(object) {
    const action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        const remainingTime = this._animation.remainingTime;
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
 * @static
 * @param {DKTools.Animation.Action | Object} object -
 * @returns {DKTools.Animation.Action}
 */
DKTools.Animation.Action.Pivot = function(object) {
    const action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        const remainingTime = this._animation.remainingTime;
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
 * @static
 * @param {DKTools.Animation.Action | Object} object -
 * @returns {DKTools.Animation.Action}
 */
DKTools.Animation.Action.Anchor = function(object) {
    const action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        const remainingTime = this._animation.remainingTime;
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
 * @static
 * @param {DKTools.Animation.Action | Object} object -
 * @returns {DKTools.Animation.Action}
 */
DKTools.Animation.Action.Tone = function(object) {
    const action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        const remainingTime = this._animation.remainingTime;
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

// initialize methods

/**
 * Инициализирует объект класса
 *
 * @override
 *
 * @param {Object} object - Объект типа {}
 *
 * @param {Number} [object.startTime] -
 * @param {Number} [object.endTime] -
 * @param {*} object.data -
 *
 * @see object properties: DKTools.Event.prototype.initialize
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
 * Удаляет действие
 *
 * @override
 */
DKTools.Animation.Action.prototype.remove = function() {
    this._animation.removeAction(this);
};

/**
 * Сбрасывает действие анимации
 *
 * @override
 */
DKTools.Animation.Action.prototype.reset = function() {
    this._callOnResetHandler();
};

/**
 * Повторяет действие анимации
 *
 * @override
 */
DKTools.Animation.Action.prototype.repeat = function() {
    this._callOnRepeatHandler();
};

// set methods

/**
 * @param {DKTools.Animation} animation
 */
DKTools.Animation.Action.prototype.setAnimation = function(animation) {
    this._animation = animation;
};

// is methods

/**
 * @returns {Boolean}
 */
DKTools.Animation.Action.prototype.isUpdated = function() {
    return this._animation.isActionUpdated(this);
};

/**
 * @returns {Boolean}
 */
DKTools.Animation.Action.prototype.isFinished = function() {
    return this._animation.isActionFinished(this);
};





//===========================================================================
// DKTools Base
//===========================================================================

// properties

Object.defineProperties(DKTools.Base.prototype, {

    /**
     * ID объекта
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
     * Координата X мыши внутри объекта
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
     * Координата Y мыши внутри объекта
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
     * Количество пикселей прокрутки мыши по оси X внутри спрайта (не внутри)
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
     * Количество пикселей прокрутки мыши по оси Y внутри спрайта (не внутри)
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
     *
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
 * Инициализирует объект класса
 *
 * @param {Number | PIXI.Rectangle | Rectangle | Object} [object] - Координата X или Rectangle, или Объект типа {}
 * @param {Number} [y] - Координата Y
 * @param {Number} [width] - Ширина
 * @param {Number | String} [height] - Высота
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 * @param {Number} [object.width] - Ширина
 * @param {Number} [object.height] - Высота
 *
 * @see свойства object: DKTools.Base.prototype.setupAll
 */
DKTools.Base.prototype.initialize = function(object, y, width, height) {
    let x;
    if (object instanceof Object) {
        x = object.x;
        y = object.y || y;
        width = object.width || width;
        height = object.height || height;
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
 * Очищает все данные
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
 * Очищает слушателей изменения опций
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
 * Очищает все опции
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
 * Очищает все события
 *
 * @private
 */
DKTools.Base.prototype._clearEvents = function() {
    this.clearEvents();
};

/**
 * @private
 */
DKTools.Base.prototype._clearWheel = function() {
    this._clearWheelX();
    this._clearWheelY();
};

/**
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
 * Сбрасывает счетчик нахождения мыши внутри спрайта
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
 * Очищает события
 *
 * @param {String[] | String} object - Массив с типами событий или тип события
 */
DKTools.Base.prototype.clearEvents = function(object) {
    if (object) {
        if (object instanceof Array) {
            _.forEach(object, function(type) {
                this._events[type] = [];
            }.bind(this));
        } else { // object - String
            this._events[object] = [];
        }
    } else {
        /**
         * @private
         * @type {Object}
         */
        this._events = {};
    }
};

/**
 * Очищает Rect
 * Возвращает true, если Bitmap существует
 *
 * @param {Number | PIXI.Rectangle | Rectangle | Object} [object] - Координата X или Rectangle, или Объект типа {}
 * @param {Number} [y] - Координата Y
 * @param {Number} [width] - Ширина области
 * @param {Number} [height] - Высота области
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 * @param {Number} [object.width] - Ширина области
 * @param {Number} [object.height] - Высота области
 *
 * @return {Boolean} Bitmap существует
 */
DKTools.Base.prototype.clearRect = function(object, y, width, height) {
    if (!this.hasBitmap()) {
        return false;
    }
    if (object instanceof Object) {
        return this.clearRect(object.x, object.y, object.width, object.height);
    }
    width = width || this.standardDrawWidth();
    height = height || this.standardDrawHeight();
    // object - Number
    this.bitmap.clearRect(object || 0, y || 0, width, height);
    return true;
};

DKTools.Base.prototype.clearLine = function(line) {
    this.clearRect(this.getLineRect(line));
};

/**
 * Очищает весь Bitmap
 * Возвращает true, если Bitmap существует
 *
 * @return {Boolean} Bitmap существует
 */
DKTools.Base.prototype.clear = function() {
    return this.clearRect();
};

// _create methods

/**
 * Создает необходимые объекты
 *
 * @private
 */
DKTools.Base.prototype._createAll = function() {
    // to be overriden by plugins
};

// _setup methods

/**
 * Устанавливает все данные
 *
 * @private
 */
DKTools.Base.prototype._setupAll = function() {
    this._setupOptions();
    this._setupEvents();
    this._setupAnimations();
};

/**
 * Устанавливает опции
 *
 * @private
 */
DKTools.Base.prototype._setupOptions = function() {
    this._setupMobileDeviceOption();
};

/**
 * Устанавливает события
 *
 * @private
 */
DKTools.Base.prototype._setupEvents = function() {
    // to be overriden by plugins
};

/**
 * Устанавливает анимации
 *
 * @private
 */
DKTools.Base.prototype._setupAnimations = function() {
    // to be overriden by plugins
};

/**
 * Устанавливает опцию мобильного устройства
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
 * Добавляет объекты в обработку
 *
 * @private
 */
DKTools.Base.prototype._addAllChildren = function() {
    // to be overriden by plugins
};

// standard methods

/**
 * Возвращает стандартную ширину рисования
 *
 * @return {Number} Стандартная ширина рисования
 */
DKTools.Base.prototype.standardDrawWidth = function() {
    return this.bitmap.width;
};

/**
 * Возвращает стандартную высоту рисования
 *
 * @return {Number} Стандартная высота рисования
 */
DKTools.Base.prototype.standardDrawHeight = function() {
    return this.bitmap.height;
};

/**
 * Возвращает стандартную видимость
 *
 * @returns {Boolean} Стандартная видимость
 */
DKTools.Base.prototype.standardVisible = function() {
    return true;
};

/**
 * Возвращает стандартное значение активности
 *
 * @return {Boolean} Стандартное значение активности
 */
DKTools.Base.prototype.standardActive = function() {
    return true;
};

/**
 * Возвращает стандартное масштабирование объекта
 *
 * @return {Point} Стандартное масштабирование объекта
 */
DKTools.Base.prototype.standardScale = function() {
    return new Point(1, 1);
};

/**
 * Возвращает стандартную точку привязки
 *
 * @return {Point} Стандартная точка привязки
 */
DKTools.Base.prototype.standardPivot = function() {
    return new Point(0, 0);
};

/**
 * Возвращает стандартный перекос объекта
 *
 * @return {Point} Стандартный перекос объекта
 */
DKTools.Base.prototype.standardSkew = function() {
    return new Point(0, 0);
};

/**
 * Возвращает стандартное значение вращения
 *
 * @return {Number} Стандартное значение вращения
 */
DKTools.Base.prototype.standardRotation = function() {
    return 0;
};

/**
 * Возвращает стандартный оттенок
 *
 * @returns {Number} Стандартный оттенок
 */
DKTools.Base.prototype.standardTint = function() {
    return 0xFFFFFF;
};

/**
 * Возвращает стандартную обложку окна
 *
 * @return {String} Стандартная обложка окна
 */
DKTools.Base.prototype.standardWindowskin = function() {
    return 'Window';
};

// setup methods

/**
 * Устанавливает все параметры
 *
 * @param {Object} [object] - Объект типа {}
 *
 * @param {Number} [object.id] - ID объекта
 * @param {Boolean} [object.visible] - Видимость объекта
 * @param {Boolean} [object.active] - Активность объекта
 *
 * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.scale] - Масштабирование объекта
 * @param {PPIXI.Point | PIXI.ObservablePoint | Point | Object} [object.pivot] - Точка привязки
 * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.skew] - Перекос объекта
 * @param {Number} [object.rotation] - Вращение объекта
 * @param {Number} [object.tint] - Оттенок объекта
 *
 * @param {Number} [object.scale.x] - Масштабирование объекта по оси X
 * @param {Number} [object.scale.y] - Масштабирование объекта по оси Y
 *
 * @param {Number} [object.pivot.x] - Точка привязки по оси X
 * @param {Number} [object.pivot.y] - Точка привязки по оси Y
 *
 * @param {Number} [object.skew.x] - Перекос объекта по оси X
 * @param {Number} [object.skew.y] - Перекос объекта по оси Y
 */
DKTools.Base.prototype.setupAll = function(object) {
    object = object || {};
    this.setupId(object.id);
    this.setupVisible(object.visible);
    this.setupActive(object.active);
    this.setupScale(object.scale);
    this.setupPivot(object.pivot);
    this.setupSkew(object.skew);
    this.setupRotation(object.rotation);
    this.setupTint(object.tint);
};

/**
 * Устанавливает ID объекта
 *
 * @param {Number | String | null} [id] - ID объекта
 */
DKTools.Base.prototype.setupId = function(id) {
    /**
     * ID объекта
     *
     * @private
     * @type {Number | String | null}
     */
    this._id = (id == null ? null : id);
};

/**
 * Устанавливает видимость объекта
 *
 * @param {Boolean} [visible] - Видимость объекта
 */
DKTools.Base.prototype.setupVisible = function(visible) {
    /**
     * Видимость объекта
     *
     * @type {Boolean}
     */
    this.visible = (visible == null ? this.standardVisible() : visible);
};

/**
 * Устанавливает активность объекта
 *
 * @param {Boolean} [active] - Активность объекта
 */
DKTools.Base.prototype.setupActive = function(active) {
    /**
     * Активность объекта
     *
     * @type {Boolean}
     */
    this.active = (active == null ? this.standardActive() : active);
};

/**
 * Устанавливает масштабирование для объекта
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Масштабирование по оси X или Point, или Объект типа {}
 * @param {Number} [y] - Масштабирование по оси Y
 *
 * @param {Number} [object.x] - Масштабирование по оси X
 * @param {Number} [object.y] - Масштабирование по оси Y
 */
DKTools.Base.prototype.setupScale = function(object, y) {
    const scale = DKTools.Utils.Point.convertToPoint(object, y);
    const newScale = Object.assign(this.standardScale(), scale);

    /**
     * Масштабирование объекта
     *
     * @type {PIXI.ObservablePoint}
     */
    this.scale.copy(newScale);
};

/**
 * Устанавливает точку привязки для объекта
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Координата X или Point, или Объекти типа {}
 * @param {Number} [y] - Координата Y
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 */
DKTools.Base.prototype.setupPivot = function(object, y) {
    const pivot = DKTools.Utils.Point.convertToPoint(object, y);
    const newPivot = Object.assign(this.standardPivot(), pivot);

    /**
     * Точка привязки объекта
     *
     * @type {PIXI.ObservablePoint}
     */
    this.pivot.copy(newPivot);
};

/**
 * Устанавливает перекос объекта
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Перекос по оси X или Point, или Объект типа {}
 * @param {Number} [y] - Перекос по оси Y
 *
 * @param {Number} [object.x] - Перекос по оси X
 * @param {Number} [object.y] - Перекос по оси Y
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
 * Устанавливает вращение объекта
 *
 * @param {Number} [rotation] - Вращение объекта
 */
DKTools.Base.prototype.setupRotation = function(rotation) {
    /**
     * Вращение объекта
     *
     * @type {Number}
     */
    this.rotation = (rotation == null ? this.standardRotation() : rotation);
};

/**
 * Устанавливает оттенок объекта
 *
 * @param {Number} [tint] - Оттенок объекта
 */
DKTools.Base.prototype.setupTint = function(tint) {
    /**
     * Оттенок объекта
     *
     * @type {Number}
     */
    this.tint = (tint == null ? this.standardTint() : tint);
};

// set methods

/**
 * Изменяет все параметры
 * Возвращает количество измененных параметров
 *
 * @param {Object} [object] - Параметры объекта
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 * @param {Boolean} [activate] - Активирует объект
 *
 * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.scale] - Масштабирование объекта
 * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.pivot] - Точка привязки объекта
 * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.skew] - Перекос объекта
 * @param {Number} [object.rotation] - Вращение объекта
 *
 * @param {Number} [object.scale.x] - Масштабирование объекта по оси X
 * @param {Number} [object.scale.y] - Масштабирование объекта по оси Y
 *
 * @param {Number} [object.pivot.x] - Точка привязки по оси X
 * @param {Number} [object.pivot.y] - Точка привязки по оси Y
 *
 * @param {Number} [object.skew.x] - Перекос объекта по оси X
 * @param {Number} [object.skew.y] - Перекос объекта по оси Y
 *
 * @return {Number} Количество измененных параметров
 */
DKTools.Base.prototype.setAll = function(object, blockStart, activate) {
    object = object || {};
    const block = true;
    let changed = 0;
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
 * Изменяет видимость объекта
 * Возвращает true, если изменение произошло
 *
 * @param {Boolean} [visible] - Видимость объекта
 * @return {Boolean} Изменение произошло
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
 * Изменяет активность объекта
 *
 * @param {Boolean} [active] - Активность объекта
 * @return {Boolean} Изменение произошло
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
 * Изменяет масштабирование объекта
 * Возвращает true, если изменение произошло
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Масштабирование по оси X или Point, или Объект типа {}
 * @param {Number} [y] - Масштабирование по оси Y
 *
 * @param {Number} [object.x] - Масштабирование по оси X
 * @param {Number} [object.y] - Масштабирование по оси Y
 *
 * @return {Boolean} Изменение произошло
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
 * Изменяет точку привязки объекта
 * Возвращает true, если изменение произошло
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Координата X или Point, или Объект типа {}
 * @param {Number} [y] - Координата Y
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 *
 * @return {Boolean} Изменение произошло
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
 * Изменяет перекос объекта
 * Возвращает true, если изменение произошло
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Координата X или Point, или Объект типа {}
 * @param {Number} [y] - Координата Y
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 *
 * @return {Boolean} Изменение произошло
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
 * Изменяет вращение объекта
 * Возвращает true, если изменение произошло
 *
 * @param {Number} [rotation] - Вращение объекта
 * @return {Boolean} Изменение произошло
 */
DKTools.Base.prototype.setRotation = function(rotation) {
    if (this.rotation === rotation) {
        return false;
    }
    let lastRotation = this.rotation;
    this.setupRotation(rotation);
    return lastRotation !== this.rotation;
};

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
 * Запускает работу объекта
 *
 * @param {Boolean} [activate] - Активировать объект
 */
DKTools.Base.prototype.start = function(activate) {
    this._started = true;
    this.removeAllChildren();
    this.updateRemoveAllChildrenEvents();
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
 * Запускает работу всех объектов
 */
DKTools.Base.prototype.startAll = function() {
    // to be overriden by plugins
};

// remove methods

/**
 * Удаляет дочерние объекты из обработки
 */
DKTools.Base.prototype.removeAllChildren = function() {
    // to be overriden by plugins
};

/**
 * Удаляет все объекты
 */
DKTools.Base.prototype.removeAll = function() {
    // to be overriden by plugins
};

/**
 * Удаляет маску
 */
DKTools.Base.prototype.removeMask = function() {
    this.mask = null;
};

// _check methods

/**
 * Сравнивает ширину с минимальной и максимальной
 * Возвращает ширину из диапазона
 *
 * @private
 * @param {Number} width - Ширина
 * @returns {Number} Ширина из диапазона
 *
 */
DKTools.Base.prototype._checkWidth = function(width) {
    const minWidth = this.getMinWidth();
    return (width ? Math.max(minWidth, width) : minWidth);
};

/**
 * Сравнивает высоту с минимальной и максимальной
 * Возвращает высоту из диапазона
 *
 * @private
 * @param {Number} height - Высота
 * @returns {Number} Высота из диапазона
 *
 */
DKTools.Base.prototype._checkHeight = function(height) {
    const minHeight = this.getMinHeight();
    return (height ? Math.max(minHeight, height) : minHeight);
};

// check methods

/**
 * Проверяет все
 */
DKTools.Base.prototype.checkAll = function() {
    this.checkSize();
};

/**
 * Проверяет размер объекта
 */
DKTools.Base.prototype.checkSize = function() {
    // to be overriden by plugins
};

// create methods

/**
 * Создает все объекты
 */
DKTools.Base.prototype.createAll = function() {
    // to be overriden by plugins
};

// add methods

/**
 * Добавляет дочерние объекты в обработку
 */
DKTools.Base.prototype.addAllChildren = function() {
    // to be overriden by plugins
};

// refresh methods

/**
 * Обновляет и перерисовывает все
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
 * Перерисовывает все
 */
DKTools.Base.prototype.redrawAll = function() {
    // to be overriden by plugins
};

// get methods

/**
 * Возвращает дочерний объект по его ID
 *
 * @param {Number | String | *} id - ID объекта
 * @returns {* | undefined} Дочерний элемент
 */
DKTools.Base.prototype.getChildById = function(id) {
    return _.find(this.children, { id: id });
};

/**
 * Возвращает ширину текста
 *
 * @param {String} text - Текст
 * @returns {Number} Ширина текста
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
 * Возвращает ширину текста (учитывает специальные символы)
 *
 * @param {String} text - Текст
 * @param {Object} [options] - Опции
 *
 * @see DKTools.Base.prototype.drawTextEx
 *
 * @returns {Number} Ширина текста
 */
DKTools.Base.prototype.getTextWidthEx = function(text, options) {
    if (text == null) {
        return 0;
    }
    const clone = this.clone(options);
    return clone.drawTextEx(text, options);
};

/**
 * Возвращает цвет из обложки окна
 *
 * @param {Number} n - Номер цвета
 * @returns {String} Цвет из обложки окна
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
 * @param {Number} lineHeight
 * @returns {Number}
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
 * Возвращает размер объекта (с учетом масштабирования)
 *
 * @returns {Object} Размер объекта (с учетом масштабирования)
 */
DKTools.Base.prototype.getSize = function() {
    return { width: this.width, height: this.height };
};

/**
 * Возвращает реальный размер объекта (без учета масштабирования)
 *
 * @returns {Object} Размер объекта (без учета масштабирования)
 */
DKTools.Base.prototype.getRealSize = function() {
    return { width: this.realWidth, height: this.realHeight };
};

/**
 * Возвращает минимальную ширину Bitmap
 *
 * @return {Number} Минимальная ширина Bitmap
 */
DKTools.Base.prototype.getMinWidth = function() {
    return 0;
};

/**
 * Возвращает минимальную высоту Bitmap
 *
 * @return {Number} Минимальная высота Bitmap
 */
DKTools.Base.prototype.getMinHeight = function() {
    return 0;
};

/**
 * Возвращает минимальный размер Bitmap
 *
 * @returns {Object}
 */
DKTools.Base.prototype.getMinSize = function() {
    return { width: this.getMinWidth(), height: this.getMinHeight() };
};

/**
 * Возвращает высоту линии
 *
 * @return {Number} Высота линии
 */
DKTools.Base.prototype.getLineHeight = function() {
    try {
        return Window_Base.prototype.lineHeight.call(this);
    } catch (e) {
        return 36;
    }
};

/**
 *
 * @returns {Number}
 */
DKTools.Base.prototype.getLines = function() {
    return this.realHeight / this.getLineHeight();
};

/**
 * Возвращает количество линий текста
 *
 * @param {String | Number} text - Текст
 * @param {Object} [wrap] - Опции переноса текста
 *
 * @see DKTools.Base.prototype.textWrap
 *
 * @returns {Number} Количество линий текста
 */
DKTools.Base.prototype.getTextLines = function(text, wrap) {
    if (wrap) {
        text = this.textWrap(text, wrap);
    }
    return text.split('\n').length;
};

/**
 * Возвращает высоту текста
 *
 * @param {String | Number} text - Текста
 * @param {Object} [wrap] - Опции переноса текста
 *
 * @see DKTools.Base.prototype.textWrap
 *
 * @returns {Number} Высота текста
 */
DKTools.Base.prototype.getTextHeight = function(text, wrap) {
    return this.getTextLines(text, wrap) * this.getLineHeight();
};

/**
 * Возвращает Rectangle линии
 *
 * @param {Number | String} line - Номер линии
 * @returns {Rectangle} Rectangle линии
 */
DKTools.Base.prototype.getLineRect = function(line) {
    const lineHeight = this.getLineHeight();
    return new Rectangle(0, lineHeight * Number(line), this.realWidth, lineHeight);
};

// active methods

/**
 * Активирует объект
 */
DKTools.Base.prototype.activate = function() {
    if (this.setActive(true)) {
        this.updateActivateEvents();
    }
};

/**
 * Деактивирует объект
 */
DKTools.Base.prototype.deactivate = function() {
    if (this.setActive(false)) {
        this.updateDeactivateEvents();
    }
};

// visible methods

/**
 * Показывает объект
 *
 * @param {Boolean} [activate] - Активировать объект
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
 * Скрывает объект
 *
 * @param {Boolean} [blockDeactivate] - Блокировка деактивации объекта
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
 * Клонирует текущий объект
 *
 * @param {Object} [options] - Опции клонирования
 *
 * @param {Boolean} [options.cloneTexts] - Клонировать тексты
 * @param {Boolean} [options.cloneOptions] - Клонировать опции
 * @param {Boolean} [options.blockStart] - Блокировать вызов функции start у клонированного объекта
 * @param {Boolean} [options.activate] - Активировать клонированный объект
 *
 * @returns {DKTools.Sprite | DKTools.Window | *} Клонированный объект
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
 * Возвращает true, если объект можно обновить и перерисовать
 *
 * @return {Boolean} Объект можно обновить и перерисовать
 */
DKTools.Base.prototype.canRefreshAll = function() {
    return this.hasBitmap();
};

// move methods

/**
 * Перемещает объект
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Координата X или Позиция
 * @param {Number | String} [y] - Координата Y
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number | String} [object.y] - Координата Y
 *
 * @example
 * var sprite = new DKTools.Sprite();
 * var pos = new Point(100, 100);
 * sprite.move(pos);
 *
 * @example
 * var sprite = new DKTools.Sprite();
 * sprite.move(100, 100);
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
 * @param {Number} x
 * @returns {Number}
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
 * @param {Number} y
 * @returns {Number}
 */
DKTools.Base.prototype.canvasToLocalY = function(y) {
    let node = this;
    while (node) {
        y -= node.y;
        node = node.parent;
    }
    return y;
};

/**
 * Возвращает Bitmap из объекта или загружает его
 *
 * @param {Bitmap | Object} object - Bitmap или Объект типа {}
 *
 * @param {String} object.folder - Путь к файлу
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Bitmap | null} Bitmap из объекта или загруженный, или null
 */
DKTools.Base.prototype.bitmapFromObject = function(object) {
    if (!object) {
        return null;
    }
    let bitmap = object; // object - Bitmap
    if (object.constructor === Object) {
        bitmap = ImageManager.loadBitmap(object.folder, object.filename, object.hue, object.smooth);
        if (object.listener) {
            bitmap.addLoadListener(object.listener);
        }
    }
    return bitmap;
};

// children methods

/**
 *
 * @param {Function} callback
 */
DKTools.Base.prototype.iterateChildren = function(callback) {
    _.forEach(this.children, callback);
};

/**
 * Обновляет дочерний объект
 *
 * @param {*} child - Дочерний объект
 */
DKTools.Base.prototype.updateChild = function(child) {
    if (child && child.update) {
        child.update();
    }
};

/**
 * Обновляет дочерние объекты
 */
DKTools.Base.prototype.updateChildren = function() {
    this.iterateChildren(this.updateChild);
};

// has methods

/**
 * Проверяет объект на наличие Bitmap
 * Возвращает true, если Bitmap есть
 *
 * @return {Boolean} Bitmap есть
 */
DKTools.Base.prototype.hasBitmap = function() {
    try { // for compatibility with DKTools.Window
        return !!this.bitmap;
    } catch (e) {
        return false;
    }
};

/**
 * Проверяет объект на наличие маски
 * Возвращает true, если маска установлена
 *
 * @return {Boolean} Маска установлена
 */
DKTools.Base.prototype.hasMask = function() {
    return !!this.mask;
};

/**
 * Проверяет объект на наличие обложки окна
 * Возвращает true, если обложка окна установлена
 *
 * @return {Boolean} Обложка окна установлена
 */
DKTools.Base.prototype.hasWindowskin = function() {
    return !!this.windowskin;
};

// is methods

/**
 * Возвращает true, если объект виден
 *
 * @return {Boolean} Объект виден
 */
DKTools.Base.prototype.isVisible = function() {
    return this.visible;
};

/**
 * Возвращает true, если объект активен
 *
 * @return {Boolean} Объект активен
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
 * Возвращает true, если объект виден и активен
 *
 * @return {Boolean} Объект виден и активен
 */
DKTools.Base.prototype.isVisibleAndActive = function() {
    return this.isVisible() && this.isActive();
};

/**
 * Возвращает true, если работа объекта была запущена
 *
 * @return {Boolean} Работа объекта была запущена
 */
DKTools.Base.prototype.isStarted = function() {
    return this._started;
};

/**
 * Возвращает true, если Bitmap готов
 *
 * @return {Boolean} Bitmap готов
 */
DKTools.Base.prototype.isReady = function () {
    return this.hasBitmap() ? this.bitmap.isReady() : true;
};

/**
 * Возвращает true, если объект занят
 *
 * @return {Boolean} Объект занят
 */
DKTools.Base.prototype.isBusy = function() {
    return !this.isReady();
};

/**
 * Возвращает true, если объект является спрайтом
 *
 * @return {Boolean} Объект является спрайтом
 */
DKTools.Base.prototype.isSprite = function() {
    return this instanceof DKTools.Sprite;
};

/**
 * Возвращает true, если объект является кнопкой
 *
 * @return {Boolean} Объект является кнопкой
 */
DKTools.Base.prototype.isButton = function() {
    return this instanceof DKTools.Sprite.Button;
};

/**
 * Возвращает true, если объект является курсором
 *
 * @return {Boolean} Объект является курсором
 */
DKTools.Base.prototype.isCursor = function() {
    return this instanceof DKTools.Sprite.Cursor;
};

/**
 * Возвращает true, если объект является списком выбора
 *
 * @return {Boolean} Объект является списком выбора
 */
DKTools.Base.prototype.isSelectable = function() {
    return this instanceof DKTools.Sprite.Selectable || this instanceof DKTools.Window.Selectable;
};

/**
 * Возвращает true, если объект является окном
 *
 * @return {Boolean} Объект является окном
 */
DKTools.Base.prototype.isWindow = function() {
    return this instanceof DKTool.Window;
};

/**
 * Возвращает true, если объект является вьюпортом
 *
 * @return {Boolean} Объект является вьюпортом
 */
DKTools.Base.prototype.isViewport = function() {
    return this instanceof DKTools.Viewport;
};

/**
 * Возвращает true, если объект является объектом разметки
 *
 * @return {Boolean} Объект является объектом разметки
 */
DKTools.Base.prototype.isLayout = function() {
    return this instanceof DKTools.Layout;
};

/**
 * Возвращает true, если координаты находятся внутри объекта
 *
 * @param {Number} x - Координата X
 * @param {Number} y - Координата Y
 *
 * @return {Boolean} Координаты находятся внутри объекта
 */
DKTools.Base.prototype.isInside = function(x, y) {
    return false;
};

/**
 *
 * Возвращает true, если координаты не находятся внутри объекта
 *
 * @param {Number} x
 * @param {Number} y
 *
 * @returns {Boolean} Координаты не находятся внутри объекта
 */
DKTools.Base.prototype.isOutside = function(x, y) {
    return !this.isInside(x, y);
};

/**
 * Возвращает true, если курсор мыши находится внутри спрайта
 *
 * @return {Boolean} Курсор мыши находится внутри спрайта
 */
DKTools.Base.prototype.isMouseEntered = function() {
    return this.isInside(TouchInput.mouseX, TouchInput.mouseY);
};

/**
 *
 * @param [object]
 * @returns {Boolean}
 */
DKTools.Base.prototype.isChild = function(object) {
    if (!object) {
        return !!this.parent;
    }
    return object.parent === this;
};

// draw methods

/**
 * Рисует все
 */
DKTools.Base.prototype.drawAll = function() {
    // to be overriden by plugins
};

/**
 * Рисует текст (поддерживаются специальные символы)
 * Возвращает ширину текста
 *
 * @param {String} text - Текст
 * @param {Object} [options] - Опции
 *
 * @param {Object} [options.wrap] - Опции переноса текста
 * @param {Number} [options.x] - Координата X
 * @param {Number | String} [options.y] - Координата Y или номер линии (String)
 * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.pos] - Позиция
 *
 * @param {Number} [object.pos.x] - Координата X
 * @param {Number | String} [object.pos.y] - Координата Y или номер линии (String)
 *
 * @see DKTools.Base.prototype.textWrap
 *
 * @returns {Number} Ширина текста
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

    let x = options.x;
    let y = options.y;

    const pos = options.pos;
    if (pos instanceof Object) {
        x = pos.x;
        y = pos.y;
    }

    if (_.isString(y)) { // line
        y = this.getLineHeight() * Number(y);
    }

    x = x || 0;
    y = y || 0;

    const textState = { index: 0, x, y, left: x };
    textState.text = this.convertEscapeCharacters(text);
    textState.height = this.calcTextHeight(textState, false);
    while (textState.index < textState.text.length) {
        this.processCharacter(textState);
    }
    return textState.width || textState.x - x;
};

/**
 * Рисует линию
 * Возвращает true, если Bitmap существует
 *
 * @param {Number | Object} object - Координата X начала линии или Объект типа {}
 * @param {Number} y1 - Координата Y начала линии
 * @param {Number} x2 - Координата X конца линии
 * @param {Number} y2 - Координата Y конца линии
 * @param {String} [color] - Цвет линии
 * @param {Number} [lineWidth] - Ширина линии
 *
 * @param {Number} object.x1 - Координата X начала линии
 * @param {Number} object.y1 - Координата Y начала линии
 * @param {Number} object.x2 - Координата X конца линии
 * @param {Number} object.y2 - Координата Y конца линии
 * @param {String} [object.color] - Цвет линии
 * @param {Number} [object.lineWidth] - Ширина линии
 *
 * @return {Boolean} Bitmap существует
 */
DKTools.Base.prototype.drawLine = function(object, y1, x2, y2, color, lineWidth) {
    if (!this.hasBitmap()) {
        return false;
    }
    if (object instanceof Object) {
        return this.drawLine(object.x1, object.y1, object.x2, object.y2, object.color, object.lineWidth);
    }
    color = color || '#ffffff';
    // object - Number
    DKTools.Utils.Bitmap.drawLine(this.bitmap, object || 0, y1 || 0, x2 || 0, y2 || 0, color, lineWidth || 1);
    return true;
};

/**
 * Рисует круг
 * Возвращает true, если Bitmap существует
 *
 * @param {String} [color] - Цвет
 * @param {Number} [radius] - Радиус
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object } [object] - Координата X или Point, или Объект типа {}
 * @param {Number} [y] - Координата Y
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 *
 * @return {Boolean} Bitmap существует
 */
DKTools.Base.prototype.drawCircle = function(color, radius, object, y) {
    if (!this.hasBitmap()) {
        return false;
    }
    if (object instanceof Object) {
        return this.drawCircle(color, radius, object.x, object.y);
    }
    color = color || '#ffffff';
    // object - Number
    this.bitmap.drawCircle(object || 0, y || 0, radius || 1, color);
    return true;
};

/**
 * Рисует кусок из Bitmap (source) в Bitmap объекта (destination)
 * Возвращает true, если Bitmap существует
 *
 * @param {Bitmap | Object} object - Bitmap или Объект типа {}
 * @param {PIXI.Rectangle | Rectangle | Object} source - Rectangle или Объект типа {}
 * @param {PIXI.Rectangle | Rectangle | Object} destination - Rectangle или Объект типа {}
 *
 * @param {String} object.folder - Путь к файлу
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @param {Number} [source.x] - Координата X
 * @param {Number} [source.y] - Координата Y
 * @param {Number} [source.width] - Ширина области из Bitmap
 * @param {Number} [source.height] - Высота области из Bitmap
 *
 * @param {Number} [destination.x] - Координата X
 * @param {Number} [destination.y] - Координата Y
 * @param {Number} [destination.width] - Ширина рисуемой области
 * @param {Number} [destination.height] - Высота рисуемой области
 *
 * @return {Boolean} Bitmap существует
 */
DKTools.Base.prototype.drawBitmap = function(object, source, destination) {
    if (!this.hasBitmap() || !object) {
        return false;
    }
    let bitmap = this.bitmapFromObject(object);
    if (!bitmap) {
        return false;
    }
    source = Object.assign(source || {}, Rectangle.emptyRectangle);
    destination = Object.assign(destination || {}, Rectangle.emptyRectangle);
    bitmap.addLoadListener(function() {
        let sx = source.x || 0;
        let sy = source.y || 0;
        let sw = source.width || bitmap.width;
        let sh = source.height || bitmap.height;
        let dx = destination.x || 0;
        let dy = destination.y || 0;
        let dw = destination.width || sw;
        let dh = destination.height || sh;
        this.bitmap.blt(bitmap, sx, sy, sw, sh, dx, dy, dw, dh);
    }.bind(this));
    return true;
};

/**
 * Рисует иконку из IconSet
 * Возвращает true, если Bitmap существует
 *
 * @param {Number} iconIndex - ID иконки
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object } [object] - Координата X или Point, или Объект типа {}
 * @param {Number} [y] - Координата Y
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 *
 * @return {Boolean} Bitmap существует
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
 * Рисует лицо персонажа
 * Возвращает true, если Bitmap существует
 *
 * @param {String} faceName - Название файла
 * @param {Number} faceIndex - Номер лица
 * @param {Number | PIXI.Rectangle | Rectangle | Object} [object] - Координата X или Rectangle, или Объект типа {}
 * @param {Number} [y] - Координата Y
 * @param {Number} [width] - Ширина лица
 * @param {Number} [height] - Высота лица
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 * @param {Number} [object.width] - Ширина лица
 * @param {Number} [object.height] - Высота лица
 *
 * @return {Boolean} Bitmap существует
 */
DKTools.Base.prototype.drawFace = function(faceName, faceIndex, object, y, width, height) {
    if (!this.hasBitmap() || faceName == null || faceIndex == null) {
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
 * Рисует персонажа
 * Возвращает true, если Bitmap существует
 *
 * @param {String} characterName - Название файла
 * @param {Number} characterIndex - Номер персонажа
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object } [object] - Координата X или Point, или Объект типа {}
 * @param {Number} [y] - Координата Y
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 *
 * @return {Boolean} Bitmap существует
 */
DKTools.Base.prototype.drawCharacter = function(characterName, characterIndex, object, y) {
    if (!this.hasBitmap() || characterName == null || characterIndex == null) {
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
 * Рисует название предмета
 *
 * @param {Object} item
 * @param {Number} x
 * @param {Number} y
 * @param {Number} width
 */
DKTools.Base.prototype.drawItemName = function(item, x, y, width) {
    if (item) {
        const iconBoxWidth = Window_Base._iconWidth + 4;
        this.drawIcon(item.iconIndex, x + 2, y + 2);
        this.drawText(item.name, {
            align: 'left',
            x: x + iconBoxWidth,
            y: y,
            width: width || 312 - iconBoxWidth,
            height: this.getLineHeight()
        });
    }
};

// fill methods

/**
 * Заливает область цветом
 * Возвращает true, если Bitmap существует
 *
 * @param {String} [color] - Цвет заливки
 * @param {Number | PIXI.Rectangle | Rectangle | Object} [object] - Координата X или Rectangle, или Объект типа {}
 * @param {Number} [y] - Координата Y
 * @param {Number} [width] - Ширина области
 * @param {Number} [height] - Высота области
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 * @param {Number} [object.width] - Ширина области
 * @param {Number} [object.height] - Высота области
 *
 * @return {Boolean} Bitmap существует
 */
DKTools.Base.prototype.fillRect = function(color, object, y, width, height) {
    if (!this.hasBitmap()) {
        return false;
    }
    if (object instanceof Object) {
        return this.fillRect(color, object.x, object.y, object.width, object.height);
    }
    width = width || this.standardDrawWidth();
    height = height || this.standardDrawHeight();
    color = color || '#ffffff';
    // object - Number
    this.bitmap.fillRect(object || 0, y || 0, width, height, color);
    return true;
};

/**
 * Заливает весь Bitmap цветом
 * Возвращает true, если Bitmap существует
 *
 * @param {String} [color] - Цвет заливки
 * @return {Boolean} Bitmap существует
 */
DKTools.Base.prototype.fillAll = function(color) {
    return this.fillRect(color);
};

/**
 * Рисует дугу и заливает ее цветом
 * Возвращает true, если Bitmap существует
 *
 * @param {Number} [radius] - Радиус дуги
 * @param {Number} startAngle - Стартовый угол
 * @param {Number} endAngle - Конечный угол
 * @param {String} [color] - Цвет заливки
 * @param {Boolean} [antiClockwise] - Против часовой стрелки
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object } [object] - Координата X или Point, или Объект типа {}
 * @param {Number} [y] - Координата Y
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 *
 * @return {Boolean} Bitmap существует
 */
DKTools.Base.prototype.fillArc = function(radius, startAngle, endAngle, color, antiClockwise, object, y) {
    if (!this.hasBitmap()) {
        return false;
    }
    if (object instanceof Object) {
        return this.fillArc(radius, startAngle, endAngle, color, antiClockwise, object.x, object,y);
    }
    color = color || '#ffffff';
    // object - Number
    DKTools.Utils.Bitmap.fillArc(this.bitmap, object || 0, y || 0, radius || 1, startAngle, endAngle, color, antiClockwise);
    return true;
};

// stroke methods

/**
 * Рисует прямоугольник без заливки
 * Возвращает true, если Bitmap существует
 *
 * @param {String} [color] - Цвет линии
 * @param {Number | PIXI.Rectangle | Rectangle | Object} [object] - Координата X или Rectangle, или Объект типа {}
 * @param {Number} [y] - Координата Y
 * @param {Number} [width] - Ширина прямоугольника
 * @param {Number} [height] - Высота прямоугольника
 * @param {Number} [lineWidth] - Ширина линии
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 * @param {Number} [object.width] - Ширина прямоугольника
 * @param {Number} [object.height] - Высота прямоугольника
 *
 * @return {Boolean} Bitmap существует
 */
DKTools.Base.prototype.strokeRect = function(color, lineWidth, object, y, width, height) {
    if (!this.hasBitmap()) {
        return false;
    }
    if (object instanceof Object) {
        return this.strokeRect(color, object.x, object.y, object.width, object.height, lineWidth);
    }
    width = width || this.standardDrawWidth();
    height = height || this.standardDrawHeight();
    color = color || '#ffffff';
    // object - Number
    DKTools.Utils.Bitmap.strokeRect(this.bitmap, object || 0, y || 0, width, height, color, lineWidth || 1);
    return true;
};

/**
 * Рисует дугу без заливки
 * Возвращает true, если Bitmap существует
 *
 * @param {Number} [radius] - Радиус дуги
 * @param {Number} startAngle - Стартовый угол
 * @param {Number} endAngle - Конечный угол
 * @param {String} [color] - Цвет линии
 * @param {Boolean} [antiClockwise] - Против часовой стрелки
 * @param {Number} [lineWidth] - Ширина линии
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object } [object] - Координата X или Point, или Объект типа {}
 * @param {Number} [y] - Координата Y
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 *
 * @return {Boolean} Bitmap существует
 */
DKTools.Base.prototype.strokeArc = function(radius, startAngle, endAngle, color, antiClockwise, lineWidth, object, y) {
    if (!this.hasBitmap()) {
        return false;
    }
    if (object instanceof Object) {
        return this.strokeArc(radius, startAngle, endAngle, color, antiClockwise, lineWidth, object.x, object.y);
    }
    color = color || '#ffffff';
    // object - Number
    DKTools.Utils.Bitmap.strokeArc(this.bitmap, object || 0, y || 0, radius || 1, startAngle, endAngle, color, antiClockwise, lineWidth || 1);
    return true;
};

// gradient methods

/**
 * Заливает область градиентом
 * Возвращает true, если Bitmap существует
 *
 * @param {String} color1 - Цвет 1
 * @param {String} color2 - Цвет 2
 * @param {Boolean} vertical - Вертикальный градиент
 * @param {Number | PIXI.Rectangle | Rectangle | Object} object - Координата X или Rectangle, или Объект типа {}
 * @param {Number} y - Координата Y
 * @param {Number} width - Ширина области
 * @param {Number} height - Высота области
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 * @param {Number} [object.width] - Ширина области
 * @param {Number} [object.height] - Высота области
 *
 * @return {Boolean} Bitmap существует
 */
DKTools.Base.prototype.gradientFillRect = function(color1, color2, vertical, object, y, width, height) {
    if (!this.hasBitmap()) {
        return false;
    }
    if (object instanceof Object) {
        return this.gradientFillRect(color1, color2, vertical, object.x, object.y, object.width, object.height);
    }
    width = width || this.standardDrawWidth();
    height = height || this.standardDrawHeight();
    color1 = color1 || '#ffffff';
    color2 = color2 || '#000000';
    // object - Number
    this.bitmap.gradientFillRect(object || 0, y || 0, width, height, color1, color2, vertical);
    return true;
};

/**
 * Заливает весь Bitmap градиентом
 * Возвращает true, если Bitmap существует
 *
 * @param {String} [color1] - Цвет 1
 * @param {String} [color2] - Цвет 2
 * @param {Boolean} [vertical] - Вертикальный градиент
 *
 * @return {Boolean} Bitmap существует
 */
DKTools.Base.prototype.gradientFillAll = function(color1, color2, vertical) {
    return this.gradientFillAll(color1, color2, vertical);
};

// draw text ex methods

/**
 *
 * @param {String} text
 * @param {Object} options
 *
 * @param {Number} options.maxWidth
 * @param {Number} [options.maxLines]
 * @param {Boolean} [options.breakWords]
 *
 * @returns {String}
 */
DKTools.Base.prototype.textWrap = function(text, options) {
    text = String(text);
    options = options || {};

    const lines = text.split('\n');
    const maxWidth = options.maxWidth;
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
    return Window_Base.prototype.convertEscapeCharacters.call(this, text);
};

/**
 * Возвращает имя персонажа
 *
 * @param {Number} n - Номер персонажа
 * @returns {String} Имя персонажа
 */
DKTools.Base.prototype.actorName = function(n) {
    const actor = n >= 1 ? $gameActors.actor(n) : null;
    return actor ? actor.name() : '';
};

/**
 * Возвращает имя персонажа партии
 *
 * @param {Number} n - Номер персонажа
 * @returns {String} Имя персонажа партии
 */
DKTools.Base.prototype.partyMemberName = function(n) {
    const actor = n >= 1 ? $gameParty.members()[n - 1] : null;
    return actor ? actor.name() : '';
};

/**
 * Делает размер шрифта больше
 */
DKTools.Base.prototype.makeFontBigger = function() {
    if (this.hasBitmap() && this.bitmap.fontSize <= 96) {
        this.bitmap.fontSize += 12;
    }
};

/**
 * Делает размер шрифта меньше
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
 * Загружает Bitmap из папки img/animations/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadAnimation = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/animations/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/animations/', object, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/battlebacks1/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadBattleback1 = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/battlebacks1/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/battlebacks1/', object, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/battlebacks2/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadBattleback2 = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/battlebacks2/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/battlebacks2/', object, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/enemies/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadEnemy = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/enemies/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/enemies/', object, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/characters/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadCharacter = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/characters/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/characters/', object, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/faces/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadFace = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/faces/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/faces/', object, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/parallaxes/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadParallax = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/parallaxes/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/parallaxes/', object, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/pictures/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadPicture = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/pictures/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/pictures/', object, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/sv_actors/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadSvActor = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/sv_actors/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/sv_actors/', object, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/sv_enemies/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadSvEnemy = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/sv_enemies/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/sv_enemies/', object, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/system/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadSystem = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/system/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/system/', object, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/tilesets/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadTileset = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/tilesets/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/tilesets/', object, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/titles1/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadTitle1 = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/titles1/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/titles1/', object, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/titles2/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadTitle2 = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap('img/titles2/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.loadBitmap('img/titles2/', object, listener, hue, smooth);
};

/**
 * Загружает обложку окна из папки img/system/
 * Возвращает true, если Bitmap был объекта изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
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
 * Загружает и резервирует Bitmap из папки img/animations/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.reserveAnimation = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/animations/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/animations/', object, listener, hue, smooth);
};

/**
 * Загружает и резервирует Bitmap из папки img/battlebacks1/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.reserveBattleback1 = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/battlebacks1/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/battlebacks1/', object, listener, hue, smooth);
};

/**
 * Загружает и резервирует Bitmap из папки img/battlebacks2/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.reserveBattleback2 = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/battlebacks2/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/battlebacks2/', object, listener, hue, smooth);
};

/**
 * Загружает и резервирует Bitmap из папки img/enemies/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.reserveEnemy = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/enemies/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/enemies/', object, listener, hue, smooth);
};

/**
 * Загружает и резервирует Bitmap из папки img/characters/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.reserveCharacter = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/characters/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/characters/', object, listener, hue, smooth);
};

/**
 * Загружает и резервирует Bitmap из папки img/faces/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.reserveFace = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/faces/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/faces/', object, listener, hue, smooth);
};

/**
 * Загружает и резервирует Bitmap из папки img/parallaxes/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.reserveParallax = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/parallaxes/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/parallaxes/', object, listener, hue, smooth);
};

/**
 * Загружает и резервирует Bitmap из папки img/pictures/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.reservePicture = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/pictures/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/pictures/', object, listener, hue, smooth);
};

/**
 * Загружает и резервирует Bitmap из папки img/sv_actors/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.reserveSvActor = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/sv_actors/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/sv_actors/', object, listener, hue, smooth);
};

/**
 * Загружает и резервирует Bitmap из папки img/sv_enemies/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.reserveSvEnemy = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/sv_enemies/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/sv_enemies/', object, listener, hue, smooth);
};

/**
 * Загружает и резервирует Bitmap из папки img/system/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.reserveSystem = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/system/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/system/', object, listener, hue, smooth);
};

/**
 * Загружает и резервирует Bitmap из папки img/tilesets/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.reserveTileset = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/tilesets/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/tilesets/', object, listener, hue, smooth);
};

/**
 * Загружает и резервирует Bitmap из папки img/titles1/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.reserveTitle1 = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/titles1/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/titles1/', object, listener, hue, smooth);
};

/**
 * Загружает и резервирует Bitmap из папки img/titles2/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.reserveTitle2 = function(object, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.reserveBitmap('img/titles2/', object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
    return this.reserveBitmap('img/titles2/', object, listener, hue, smooth);
};

/**
 * Загружает и резервирует обложку окна из папки img/system/
 * Возвращает true, если Bitmap был объекта изменен
 *
 * @param {String | Object} object - Название файла или Объект типа {}
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
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
 * Возвращает true, если опция включена
 *
 * @param {String} option - Название опции
 * @return {Boolean} Опция включена
 */
DKTools.Base.prototype.isOptionEnabled = function(option) {
    return DKTools.Utils.Array.contains(this._options, option);
};

/**
 * Возвращает true, если опция выключена
 *
 * @param {String} option - Название опции
 * @return {Boolean} Опция выключена
 */
DKTools.Base.prototype.isOptionDisabled = function(option) {
    return !this.isOptionEnabled(option);
};

/**
 * Обрабатывает изменение значения опции
 *
 * @param {String} option - Название опции
 * @param {Boolean} value - Значение опции
 */
DKTools.Base.prototype.onOptionChange = function(option, value) {
    _.forEach(this._optionChangeListeners[option], function(listener) {
         listener(value, option);
    });
};

/**
 * Добавляет слушателя изменения опции
 *
 * @param {String} option - Опция
 * @param {Function} listener - Слушатель
 */
DKTools.Base.prototype.addOptionChangeListener = function(option, listener) {
    (this._optionChangeListeners[option] || (this._optionChangeListeners[option] = [])).push(listener);
};

/**
 * Включает опцию
 *
 * @param {String} option - Название опции
 */
DKTools.Base.prototype.enableOption = function(option) {
    if (this.isOptionDisabled(option)) {
        this._options.push(option);
        this.onOptionChange(option, true);
    }
};

/**
 * Включает опции
 *
 * @param {String[] | ...String} object - Массив названий опций или перечисление названий опций
 */
DKTools.Base.prototype.enableOptions = function(object) {
    let options = (arguments.length > 1 ? arguments : object);
    _.forEach(options, this.enableOption.bind(this));
};

/**
 * Выключает опцию
 *
 * @param {String} option - Название опции
 */
DKTools.Base.prototype.disableOption = function(option) {
    if (this.isOptionEnabled(option)) {
        DKTools.Utils.Array.remove(this._options, option);
        this.onOptionChange(option, false);
    }
};

/**
 * Выключает опции
 *
 * @param {String[] | ...String} object - Массив названий опций или перечисление названий опций
 */
DKTools.Base.prototype.disableOptions = function(object) {
    let options = (arguments.length > 1 ? arguments : object);
    _.forEach(options, this.disableOption.bind(this));
};

/**
 * Переключает опцию
 *
 * @param {String} option - Название опции
 */
DKTools.Base.prototype.switchOption = function(option) {
    if (this.isOptionEnabled(option)) {
        this.disableOption(option);
    } else {
        this.enableOption(option);
    }
};

/**
 * Переключает опции
 *
 * @param {String[] | ...String} object - Массив названий опций или перечисление названий опций
 */
DKTools.Base.prototype.switchOptions = function(object) {
    let options = (arguments.length > 1 ? arguments : object);
    _.forEach(options, this.switchOption.bind(this));
};

/**
 * Возвращает конъюнкцию опций
 *
 * @param {String[] | ...String} object - Массив названий опций или перечисление названий опций
 * @return {Boolean} Конъюнкция опций
 */
DKTools.Base.prototype.isOptionsEnabled = function(object) {
    let options = (arguments.length > 1 ? arguments : object);
    return _.every(options, this.isOptionEnabled.bind(this));
};

/**
 * Возвращает конъюнкцию опций
 *
 * @param {String[] | ...String} object - Массив названий опций или перечисление названий опций
 * @return {Boolean} Конъюнкция опций
 */
DKTools.Base.prototype.isOptionsDisabled = function(object) {
    let options = (arguments.length > 1 ? arguments : object);
    return _.every(options, this.isOptionDisabled.bind(this));
};

// event methods

/**
 * Проверяет событие
 *
 * @private
 * @param {DKTools.Timer | DKTools.Animation} event - Событие
 * @returns {Boolean}
 */
DKTools.Base.prototype._checkEvent = function(event) {
    return event && !event.isFinished();
};

/**
 * Проверяет контейнер с событиями, удаляя завершенные события
 *
 * @private
 * @param {Array} container - Контейнер с событиями
 * @returns {Array}
 */
DKTools.Base.prototype._checkEventsContainer = function(container) {
    return _.filter(container, this._checkEvent.bind(this));
};

/**
 * Проверяет события
 *
 * @private
 */
DKTools.Base.prototype._checkEvents = function() {
    _.forEach(this._events, function(container, type) {
        this._events[type] = this._checkEventsContainer(container);
    }.bind(this));
};

/**
 * Удаляет событие из контейнера
 * Возвращает true, если событие был удален
 *
 * @param {DKTools.Timer | DKTools.Animation} event - Событие
 * @returns {Boolean} Событие было удален
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
 * Выполняет callback функцию для событий
 *
 * @param {String} type - Тип события
 * @param {Function} callback - Функция обработки событий
 */
DKTools.Base.prototype.iterateEventsContainer = function(type, callback) {
    const container = this.getEventsContainerByType(type);
    _.forEach(container, callback);
};

/**
 * Проверяет события на паузу
 * Возвращает конъюнкцию пауз событий
 *
 * @param {String} type - Тип события
 * @return {Boolean} Конъюнкция пауз событий
 */
DKTools.Base.prototype.eventsIsPaused = function(type) {
    const container = this.getEventsContainerByType(type);
    return _.every(container, function(event) {
        return event.isPaused();
    });
};

/**
 * Ставит события на паузу
 *
 * @param {String} type - Тип события
 * @param {Number} duration - Длительность паузы
 */
DKTools.Base.prototype.pauseEvents = function(type, duration) {
    const container = this.getEventsContainerByType(type);
    _.forEach(container, function(event) {
        event.pause(duration);
    });
};

/**
 * Снимает события с паузы
 *
 * @param {String} type - Тип события
 */
DKTools.Base.prototype.resumeEvents = function(type) {
    const container = this.getEventsContainerByType(type);
    _.forEach(container, function(event) {
        event.resume();
    });
};

/**
 * Обновляет события
 */
DKTools.Base.prototype.updateEvents = function() {
    this._checkEvents();
    this.updateReadyEvents();
    this.updateUpdateEvents();
    this.updateQueueEvents();
    this.updateWheelEvents();
};

/**
 * Обновляет событие
 *
 * @param {DKTools.Timer | DKTools.Animation} event - Событие
 */
DKTools.Base.prototype.updateEvent = function(event) {
    if (event) {
        event.update();
    }
};

/**
 * Обновляет события из контейнера
 *
 * @param {String} type - Тип события
 */
DKTools.Base.prototype.updateEventsContainer = function(type) {
    const container = this.getEventsContainerByType(type);
    _.forEach(container, this.updateEvent.bind(this));
};

/**
 * Обновляет события типа removeAllChildren
 */
DKTools.Base.prototype.updateRemoveAllChildrenEvents = function() {
    this.updateEventsContainer('removeAllChildren');
};

/**
 * Обновляет события типа removeAll
 */
DKTools.Base.prototype.updateRemoveAllEvents = function() {
    this.updateEventsContainer('removeAll');
};

/**
 * Обновляет события типа checkAll
 */
DKTools.Base.prototype.updateCheckAllEvents = function() {
    this.updateEventsContainer('checkAll');
};

/**
 * Обновляет события типа createAll
 */
DKTools.Base.prototype.updateCreateAllEvents = function() {
    this.updateEventsContainer('createAll');
};

/**
 * Обновляет события типа addAllChildren
 */
DKTools.Base.prototype.updateAddAllChildrenEvents = function() {
    this.updateEventsContainer('addAllChildren');
};

/**
 * Обновляет события типа startAll
 */
DKTools.Base.prototype.updateStartAllEvents = function() {
    this.updateEventsContainer('startAll');
};

/**
 * Обновляет события типа refreshAll
 */
DKTools.Base.prototype.updateRefreshAllEvents = function() {
    this.updateEventsContainer('refreshAll');
};

/**
 * Обновляет события типа updateAll
 */
DKTools.Base.prototype.updateUpdateAllEvents = function() {
    this.updateEventsContainer('updateAll');
};

/**
 * Обновляет события типа redrawAll
 */
DKTools.Base.prototype.updateRedrawAllEvents = function() {
    this.updateEventsContainer('redrawAll');
};

/**
 * Обновляет события типа start
 */
DKTools.Base.prototype.updateStartEvents = function() {
    if (this.isStarted()) {
        this.updateEventsContainer('start');
    }
};

/**
 * Обновляет события типа ready
 */
DKTools.Base.prototype.updateReadyEvents = function() {
    if (this.isReady()) {
        this.updateEventsContainer('ready');
    }
};

/**
 * Обновляет события типа update
 */
DKTools.Base.prototype.updateUpdateEvents = function() {
    this.updateEventsContainer('update');
};

/**
 * Обновляет события типа queue
 */
DKTools.Base.prototype.updateQueueEvents = function() {
    const container = this.getEventsContainerByType('queue');
    const event = container[0];
    this.updateEvent(event);
};

/**
 * Обновляет события типа activate
 */
DKTools.Base.prototype.updateActivateEvents = function() {
    this.updateEventsContainer('activate');
};

/**
 * Обновляет события типа deactivate
 */
DKTools.Base.prototype.updateDeactivateEvents = function() {
    this.updateEventsContainer('deactivate');
};

/**
 * Обновляет события типа show
 */
DKTools.Base.prototype.updateShowEvents = function() {
    this.updateEventsContainer('show');
};

/**
 * Обновляет события типа hide
 */
DKTools.Base.prototype.updateHideEvents = function() {
    this.updateEventsContainer('hide');
};

/**
 * Обновляет события типа mouse-enter
 */
DKTools.Base.prototype.updateMouseEnterEvents = function() {
    this.updateEventsContainer('mouse-enter');
};

/**
 * Обновляет события типа mouse-stay
 */
DKTools.Base.prototype.updateMouseStayEvents = function() {
    this.updateEventsContainer('mouse-stay');
};

/**
 * Обновляет события типа mouse-leave
 */
DKTools.Base.prototype.updateMouseLeaveEvents = function() {
    this.updateEventsContainer('mouse-leave');
};

/**
 * Обновляет события типа mouse-move
 */
DKTools.Base.prototype.updateMouseMoveEvents = function() {
    if (TouchInput.isMouseMoved()) {
        this.updateEventsContainer('mouse-move');
    }
};

/**
 * Обновляет события типа wheelX-inside или wheelX-outside
 *
 * @param {String} type -
 */
DKTools.Base.prototype.updateWheelXEvents = function(type) {
    this._wheelX = TouchInput.wheelX;
    if (this._wheelX !== 0) {
        this.updateEventsContainer('wheelX-%1'.format(type));
    }
};

/**
 * Обновляет события типа wheelY-inside или wheelY-outside
 *
 * @param {String} type -
 */
DKTools.Base.prototype.updateWheelYEvents = function(type) {
    this._wheelY = TouchInput.wheelY;
    if (this._wheelY !== 0) {
        this.updateEventsContainer('wheelY-%1'.format(type));
    }
};

/**
 * Обновляет события типа wheelX и wheelY
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
 * Создает контейнер для событий
 *
 * @param {String} type - Тип события
 * @return {Array} Контейнер с событиями
 */
DKTools.Base.prototype.createEventsContainer = function(type) {
    this._events[type] = [];
    return this._events[type];
};

/**
 * Возвращает контейнер событий по типу события
 *
 * @param {String} type - Тип события
 * @return {Array} Контейнер с событиями
 */
DKTools.Base.prototype.getEventsContainerByType = function(type) {
    return this._events[type] || this.createEventsContainer(type);
};

/**
 * Возвращает контейнер для событий по событию
 *
 * @param {DKTools.Timer | DKTools.Animation} event - Событие
 * @return {Array} Контейнер с событиями
 */
DKTools.Base.prototype.getEventsContainer = function(event) {
    return this.getEventsContainerByType(event.type);
};

/**
 * Возвращает индекс события в его контейнере
 *
 * @param {DKTools.Timer | DKTools.Animation} event - Событие
 * @return {Number} Индекс события в его контейнере
 */
DKTools.Base.prototype.getEventIndex = function(event) {
    return _.indexOf(this.getEventsContainer(event), event);
};

/**
 * Возвращает массив со всеми событиями или событиями определенного типа
 *
 * @param {String} [type] - Тип события
 * @return {Array} Массив с событиями
 */
DKTools.Base.prototype.getEvents = function(type) {
    if (type) {
        return this.getEventsContainerByType(type);
    }
    let events = [];
    _.forEach(this._events, function(container) {
        events = _.concat(events, container);
    });
    return events;
};

/**
 * Проверяет существование события в объекте
 * Возвращает true, если событие есть
 *
 * @param {DKTools.Timer | DKTools.Animation} event - Событие
 * @return {Boolean} Событие есть
 */
DKTools.Base.prototype.hasEvent = function(event) {
    return this.getEventIndex(event) >= 0;
};

/**
 * Проверяет существование событий определенного типа
 * Возвращает true, если события есть
 *
 * @param {String} [type] - Тип события
 * @return {Boolean} События есть
 */
DKTools.Base.prototype.hasEvents = function(type) {
    return !DKTools.Utils.Array.isEmpty(this.getEvents(type));
};

/**
 * Добавляет событие в контейнер
 *
 * @param {DKTools.Timer | DKTools.Animation} event - Событие
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
 * Добавляет событие
 *
 * @param {DKTools.Event | Object} object - Событие или параметры события
 *
 * @param {String} [object.type] - Тип события
 * @param {Number} [object.repeatTime] - Длительность повтора события
 * @param {Number} [object.repeats] - Количество повторов события
 * @param {Number} [object.remainingPauseTime] - Длительность паузы
 * @param {Function} [object.onStart] - Обработчик начала работы
 * @param {Function} object.onUpdate - Обработчик обновления
 * @param {Function} [object.onPause] - Обработчик паузы события
 * @param {Function} [object.onReset] - Обработчик сброса события
 * @param {Function} [object.onRepeat] - Обработчик повтора события
 * @param {Function} [object.onSuccess] - Обработчик успешного завершения работы
 * @param {Function} [object.onFailure] - Обработчик провального завершения работы
 *
 * @returns {DKTools.Event} Добавленное событие
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
 * Добавляет одноразовое событие
 *
 * @param {DKTools.Event | Object} object - Событие или Объект типа {}
 *
 * @param {String} object.type - Тип события
 * @param {Function} object.onUpdate - Обработчик обновления события
 *
 * @returns {DKTools.Event} Добавленное событие
 */
DKTools.Base.prototype.addOneTimeEvent = function(object) {
    object.repeatTime = 1;
    object.repeats = 0;
    return this.addEvent(object);
};

/**
 * Добавляет анимацию
 *
 * @param {DKTools.Animation} animation - Анимация
 */
DKTools.Base.prototype.addAnimation = function(animation) {
    this.addEventToContainer(animation);
};

// process methods

/**
 * Выполняет все
 */
DKTools.Base.prototype.processAll = function() {
    if (this.isOptionEnabled('mouseEnter') && this.isOptionDisabled('mobileDevice')) {
        this.processMouseEnter();
    }
};

/**
 * Обрабатывает вхождение мыши в спрайт
 */
DKTools.Base.prototype.processMouseEnter = function() {
    if (this.isVisibleAndActive()) {
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
 * Обновляет все
 */
DKTools.Base.prototype.updateAll = function() {
    this.updateOpacity();
};

/**
 * Обновляет объект
 */
DKTools.Base.prototype.update = function() {
    this.updateChildren();
    this.processAll();
    if (this.hasEvents()) {
        this.updateEvents();
    }
};

/**
 * Обновляет прозрачность объекта
 */
DKTools.Base.prototype.updateOpacity = function() {
    // to be overriden by plugins
};

/**
 * Обновляет данные ввода
 */
DKTools.Base.prototype.updateInputData = function() {
    SceneManager.updateInputData();
};





//===========================================================================
// DKTools Sprite
//===========================================================================

DKTools.Sprite.prototype = Object.create(Sprite.prototype);
DKTools.Utils.mixin(DKTools.Sprite.prototype, DKTools.Base.prototype);
DKTools.Sprite.prototype.constructor = DKTools.Sprite;

/**
 * Счетчик созданных спрайтов
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
 * Инициализирует объект класса
 *
 * @override
 *
 * @param {Number | DKTools.Sprite | Bitmap | PIXI.Rectangle | Rectangle | Object} [object] - Координата X или Sprite, или Bitmap, или Rectangle, или Объект типа {}
 * @param {Number} [y] - Координата Y
 * @param {Number} [width] - Ширина Bitmap
 * @param {Number} [height] - Высота Bitmap
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 * @param {Number} [object.width] - Ширина Bitmap
 * @param {Number} [object.height] - Высота Bitmap
 * @param {Bitmap | Object} [object.bitmap] - Bitmap или Объект типа {}
 *
 * @param {String} object.bitmap.folder - Путь к файлу
 * @param {String} object.bitmap.filename - Название файла
 * @param {Function} [object.bitmap.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.bitmap.hue] - Оттенок
 * @param {Boolean} [object.bitmap.smooth] - Сглаживание
 *
 * @see свойства object: DKTools.Sprite.prototype.setupAll
*/
DKTools.Sprite.prototype.initialize = function(object, y, width, height) {
	Sprite.prototype.initialize.call(this);
    DKTools.Base.prototype.initialize.call(this, object, y, width, height);
    if (object instanceof DKTools.Sprite && !object.isStarted()) {
        this.setupSize(object._bitmapWidth, object._bitmapHeight);
    } else if (object instanceof Bitmap) {
        this.setupBitmap(object);
    }
    this.updateBitmap();
    DKTools.Sprite._counter++;
};

// _clear methods

/**
 * Очищает все данные
 *
 * @private
 * @override
 */
DKTools.Sprite.prototype._clearAll = function() {
    DKTools.Base.prototype._clearAll.call(this);
    this._clearTexts();
};

/**
 * Очищает все тексты
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
 * Возвращает стандартное название шрифта
 *
 * @static
 * @return {String} Стандартное название шрифта
 */
DKTools.Sprite.prototype.standardFontFace = function() {
    return 'GameFont';
};

/**
 * Возвращает стандартный размер шрифта
 *
 * @static
 * @return {String} Стандартный размер шрифта
 */
DKTools.Sprite.prototype.standardFontSize = function() {
    return 28;
};

/**
 * Возвращает стандартный курсив шрифта
 *
 * @static
 * @return {String} Стандартный курсив шрифта
 */
DKTools.Sprite.prototype.standardFontItalic = function() {
    return false;
};

/**
 * Возвращает стандартный шрифт текста
 *
 * @return {DKTools.Font} Стандартный шрифт текста
 */
DKTools.Sprite.prototype.standardFont = function() {
    return {
        fontFace: this.standardFontFace(),
        fontSize: this.standardFontSize(),
        fontItalic: this.standardFontItalic()
    };
};

/**
 * Возвращает стандартный цвет текста
 *
 * @return {String} Стандартный цвет текста
 */
DKTools.Sprite.prototype.standardTextColor = function() {
    return '#ffffff';
};

/**
 * Возвращает стандартную прозрачность рисования
 *
 * @return {Number} Стандартная прозрачность рисования
 */
DKTools.Sprite.prototype.standardPaintOpacity = function() {
    return 255;
};

/**
 * Возвращает стандартный цвет заливки
 *
 * @return {String | null} Стандартный цвет заливки
 */
DKTools.Sprite.prototype.standardFillColor = function() {
    return null;
};

/**
 * Возвращает стандартное выравнивание текста
 *
 * @return {String} Стандартное выравнивание текста
 */
DKTools.Sprite.prototype.standardAlign = function() {
    return 'center';
};

/**
 * Возвращает стандартный путь к папке с графикой
 *
 * @return {String} Стандартный путь к папке с графикой
 */
DKTools.Sprite.prototype.standardGraphicFolder = function() {
    return 'img/system/';
};

/**
 * Возвращает стандартное название файла графики
 *
 * @returns {String} Стандартное название файла графики
 */
DKTools.Sprite.prototype.standardGraphicName = function() {
    return '';
};

/**
 * Возвращает стандартную прозрачность спрайта
 *
 * @return {Number} Стандартная прозрачность спрайта
 */
DKTools.Sprite.prototype.standardOpacity = function() {
	return 255;
};

/**
 * Возвращает стандартную рамку спрайта
 *
 * @return {Rectangle} Стандартная рамка спрайта
 */
DKTools.Sprite.prototype.standardFrame = function() {
    return new Rectangle(0, 0, this.width, this.height);
};

/**
 * Возвращает стандартную точку привязки текстуры
 *
 * @returns {Point} Стандартная точка привязки текстуры
 */
DKTools.Sprite.prototype.standardAnchor = function() {
    return new Point(0, 0);
};

// setup methods

/**
 * Устанавливает все параметры спрайта
 *
 * @override
 *
 * @param {Object} [object] - Объект типа {}
 *
 * @param {Bitmap | Object} [object.bitmap] - Bitmap или Объект типа {}
 * @param {Object} [object.font] - Шрифт текста
 * @param {String} [object.textColor] - Цвет текста
 * @param {Number} [object.paintOpacity] - Прозрачность рисования
 * @param {String} [object.fillColor] - Цвет заливки
 * @param {String} [object.align] - Выравнивание текста
 * @param {Number} [object.opacity] - Прозрачность спрайта
 * @param {String} [object.graphicFolder] - Путь к файлу графики
 * @param {String} [object.graphicName] - Название файла графики
 * @param {PIXI.Rectangle | Rectangle | Object} [object.frame] - PIXI.Rectangle или Rectangle, или Объект типа {}
 * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.anchor] - Точка привязки текстуры спрайта
 *
 * @param {String} object.bitmap.folder - Путь к файлу
 * @param {String} object.bitmap.filename - Название файла
 * @param {Function} [object.bitmap.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.bitmap.hue] - Оттенок
 * @param {Boolean} [object.bitmap.smooth] - Сглаживание
 *
 * @param {String} [object.font.fontFace] - Название шрифта
 * @param {Number} [object.font.fontSize] - Размер шрифта
 * @param {Boolean} [object.font.fontItalic] - Курсив шрифта
 *
 * @param {Number} [object.anchor.x] - Координата X
 * @param {Number] [object.anchor.y] - Координата Y
 *
 * @see DKTools.Base.prototype.setupAll
*/
DKTools.Sprite.prototype.setupAll = function(object) {
	object = object || {};
    DKTools.Base.prototype.setupAll.call(this, object);
    let bitmap = object.bitmap;
    if (object instanceof DKTools.Sprite) {
        if (object.isFixedBitmap()) {
            bitmap = DKTools.Utils.Bitmap.clone(bitmap);
        } else {
            bitmap = null;
        }
    }
    this.setupBitmap(bitmap);
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
 * Устанавливает ширину Bitmap
 *
 * @param {Number} [width] - Ширина Bitmap
*/
DKTools.Sprite.prototype.setupWidth = function(width) {
    /**
     * Ширина Bitmap
     *
     * @private
     * @readonly
     * @type {Number}
     */
	this._bitmapWidth = this._checkWidth(width);
};

/**
 * Устанавливает высоту Bitmap
 *
 * @param {Number | String} [height] - Высота Bitmap
*/
DKTools.Sprite.prototype.setupHeight = function(height) {
    if (_.isString(height)) {
        height = this.getLineHeight() * Number(height);
    }

    /**
     * Высота Bitmap
     *
     * @private
     * @readonly
     * @type {Number}
     */
	this._bitmapHeight = this._checkHeight(height);
};

/**
 * Устанавливает размер Bitmap
 *
 * @param {Number | Object} [object] - Ширина Bitmap или Объекти типа {}
 * @param {Number} [height] - Высота Bitmap
 *
 * @param {Number} [object.width] - Ширина Bitmap
 * @param {Number} [object.height] - Высота Bitmap
 */
DKTools.Sprite.prototype.setupSize = function(object, height) {
    if (object instanceof Object) {
        return this.setupSize(object.width, object.height);
    }
    this.setupWidth(object);
    this.setupHeight(height);
};

/**
 * Устанавливает Bitmap для спрайта
 *
 * @param {Bitmap | Object} [object] - Bitmap или Объект типа {}
 * @param {String} object.folder - Путь к файлу
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 */
DKTools.Sprite.prototype.setupBitmap = function(object) {
    let bitmap = this.bitmapFromObject(object);
    if (bitmap) {
        this.bitmap = bitmap;
        this.bitmap.addLoadListener(function() {
            this.setupSize(bitmap.width, bitmap.height);
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
 * Устанавливает шрифт текста
 *
 * @param {Object} [font] - Объект типа {}
 *
 * @param {String} [font.fontFace] - Название шрифта
 * @param {Number} [font.fontSize] - Размер шрифта
 * @param {Boolean} [font.fontItalic] - Курсив шрифта
 */
DKTools.Sprite.prototype.setupFont = function(font) {
    /**
     * Шрифт текста
     *
     * @private
     * @type {Object}
     *
     * @property {String} fontFace - Название шрифта
     * @property {Number} fontSize - Размер шрифта
     * @property {Boolean} fontItalic - Курсив шрифта
     */
    this._font = Object.assign(this.standardFont(), font);
};

/**
 * Устанавливает цвет текста
 *
 * @param {String} [color] - Цвет текста
 */
DKTools.Sprite.prototype.setupTextColor = function(color) {
    /**
     * Цвет текста
     *
     * @private
     * @type {String}
     */
    this._textColor = color || this.standardTextColor();
};

/**
 * Устанавливает прозрачность рисования
 *
 * @param {Number} opacity - Прозрачность рисования
 */
DKTools.Sprite.prototype.setupPaintOpacity = function(opacity) {
    /**
     * Прозрачность рисования
     *
     * @private
     * @type {Number}
     */
    this._paintOpacity = (opacity == null ? this.standardPaintOpacity() : opacity);
};

/**
 * Устанавливает цвет заливки
 *
 * @param {String} [color] - Цвет заливки
 */
DKTools.Sprite.prototype.setupFillColor = function(color) {
    /**
     * Цвет заливки
     *
     * @private
     * @type {String | null}
     */
    this._fillColor = (color == null ? this.standardFillColor() : color);
};

/**
 * Устанавливает выравнивание текста
 *
 * @param {String} [align] - Выравнивание текста
 */
DKTools.Sprite.prototype.setupAlign = function(align) {
    /**
     * Выравнивание текста
     *
     * @private
     * @type {String}
     */
    this._align = align || this.standardAlign();
};

/**
 * Устанавливает прозрачность спрайта
 *
 * @param {Number} [opacity] - Прозрачность спрайта
 */
DKTools.Sprite.prototype.setupOpacity = function(opacity) {
    this._opacity = (opacity == null ? this.standardOpacity() : opacity);
};

/**
 * Устанавливает путь к файлу графики
 *
 * @param {String} [folder] - Путь к файлу графики
 */
DKTools.Sprite.prototype.setupGraphicFolder = function(folder) {
    /**
     * Путь к файлу графики
     *
     * @private
     * @readonly
     * @type {String}
     */
    this._graphicFolder = (folder == null ? this.standardGraphicFolder() : folder);
};

/**
 * Устанавливает название файла графики
 *
 * @param {String} [graphicName] - Название файла графики
 */
DKTools.Sprite.prototype.setupGraphicName = function(graphicName) {
    /**
     * Название файла графики
     *
     * @private
     * @readonly
     * @type {String}
     */
    this._graphicName = (graphicName == null ? this.standardGraphicName() : graphicName);
};

/**
 * Устанавливает рамку спрайта
 *
 * @param {Number | Rectangle | Object} [object] - Координата X или Rectangle, или Объект типа {}
 * @param {Number} [y] - Координата Y
 * @param {Number} [width] - Ширина рамки
 * @param {Number} [height] - Высота рамки
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 * @param {Number} [object.width] - Ширина рамки
 * @param {Number} [object.height] - Высота рамки
 */
DKTools.Sprite.prototype.setupFrame = function(object, y, width, height) {
    const frame = DKTools.Utils.Rectangle.convertToRectangle(object, y, width, height);
    const newFrame = Object.assign(this.standardFrame(), frame);
    Sprite.prototype.setFrame.call(this, newFrame.x, newFrame.y, newFrame.width, newFrame.height);
};

/**
 *
 * @param object
 * @param y
 */
DKTools.Sprite.prototype.setupAnchor = function(object, y) {
    const anchor = DKTools.Utils.Point.convertToPoint(object, y);
    const newAnchor = Object.assign(this.standardAnchor(), anchor);

    /**
     * Точка привязки текстуры
     *
     * @type {PIXI.ObservablePoint}
     */
    this.anchor.copy(newAnchor);
};

// set methods

/**
 * Изменяет все параметры спрайта
 * Возвращает количество измененных параметров
 *
 * @override
 *
 * @param {Object} [object] - Объект типа {}
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 * @param {Boolean} [activate] - Активирует спрайт
 *
 * @param {Object} [object.font] - Шрифт текста
 * @param {String} [object.textColor] - Цвет текста
 * @param {Number} [object.paintOpacity] - Прозрачность рисования
 * @param {String} [object.fillColor] - Цвет заливки
 * @param {String} [object.align] - Выравнивание текста
 * @param {Number} [object.opacity] - Прозрачность спрайта
 * @param {String} [object.graphicName] - Название файла графики
 *
 * @param {String} [object.font.fontFace] - Название шрифта
 * @param {Number} [object.font.fontSize] - Размер шрифта
 * @param {Boolean} [object.font.fontItalic] - Курсив шрифта
 *
 * @see DKTools.Base.prototype.setAll
 *
 * @returns {Number} Количество измененных параметров
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
 * Изменяет ширину Bitmap
 * Возвращает true, если изменение произошло
 *
 * @param {Number} [width] - Ширина Bitmap
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Sprite.prototype.setWidth = function(width, blockStart) {
    return this.resize(width, this._bitmapHeight, blockStart);
};

/**
 * Изменяет высоту Bitmap
 * Возвращает true, если изменение произошло
 *
 * @param {Number} [height] - Высота Bitmap
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Sprite.prototype.setHeight = function(height, blockStart) {
    return this.resize(this._bitmapWidth, height, blockStart);
};

/**
 * Изменяет Bitmap спрайта
 * Возвращает true, если изменение произошло
 *
 * @param {Bitmap | Object} object - Bitmap или Объект типа {}
 * @param {String} object.folder - Путь к файлу
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Sprite.prototype.setBitmap = function(object) {
    if (this.bitmap == object) {
        return false;
    }
    this.setupBitmap(object);
    return true;
};

/**
 * Изменяет шрифт текста
 * Возвращает true, если изменение произошло
 *
 * @param {Object} [font] - Шрифт текста
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @param {String} [font.fontFace] - Название шрифта
 * @param {Number} [font.fontSize] - Размер шрифта
 * @param {Boolean} [font.fontItalic] - Курсив шрифта
 *
 * @return {Boolean} Изменение произошло
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
 * Изменяет цвет текста
 * Возвращает true, если изменение произошло
 *
 * @param {String} [color] - Цвет текста
 * @param {Boolean} [blockRefresh] - Блокировка вызова функции refreshAll
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Sprite.prototype.setTextColor = function(color, blockRefresh) {
    if (this._textColor === color) {
        return false;
    }
    const lastColor = this._textColor;
    this.setupTextColor(color);
    if (lastColor === this._textColor) {
        return false;
    }
    if (!blockRefresh) {
        this.refreshAll();
    }
    return true;
};

/**
 * Изменяет прозрачность рисования
 * Возвращает true, если изменение произошло
 *
 * @param {Number} [opacity] - Прозрачность рисования
 * @param {Boolean} [blockRefresh] - Блокировка вызова функции refreshAll
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Sprite.prototype.setPaintOpacity = function(opacity, blockRefresh) {
    if (this._paintOpacity === opacity) {
        return false;
    }
    const lastOpacity = this._paintOpacity;
    this.setupPaintOpacity(opacity);
    if (lastOpacity === this._paintOpacity) {
        return false;
    }
    if (!blockRefresh) {
        this.refreshAll();
    }
    return true;
};

/**
 * Изменяет цвет заливки
 * Возвращает true, если изменение произошло
 *
 * @param {String} [color] - Цвет фона
 * @param {Boolean} [blockRefresh] - Блокировка вызова функции refreshAll
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Sprite.prototype.setFillColor = function(color, blockRefresh) {
    if (this._fillColor === color) {
        return false;
    }
    const lastColor = this._fillColor;
    this.setupFillColor(color);
    if (lastColor === this._fillColor) {
        return false;
    }
    if (!blockRefresh) {
        this.refreshAll();
    }
    return true;
};

/**
 * Изменяет выравнивание текста
 * Возвращает true, если изменение произошло
 *
 * @param {String} [align] - Выравнивание текста
 * @param {Boolean} [blockRefresh] - Блокировка вызова функции refreshAll
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Sprite.prototype.setAlign = function(align, blockRefresh) {
    if (this._align === align) {
        return false;
    }
    const lastAlign = this._align;
    this.setupAlign(align);
    if (lastAlign === this._align) {
        return false;
    }
    if (!blockRefresh) {
        this.refreshAll();
    }
    return true;
};

/**
 * Изменяет прозрачность спрайта
 * Возвращает true, если изменение произошло
 *
 * @param {Number} [opacity] - Прозрачность спрайта
 * @return {Boolean} Изменение произошло
*/
DKTools.Sprite.prototype.setOpacity = function(opacity, blockUpdate) {
	if (this._opacity === opacity) {
        return false;
    }
    const lastOpacity = this._opacity;
	this.setupOpacity(opacity);
	if (this._opacity === lastOpacity) {
	    return false;
    }
	if (!blockUpdate) {
	    this.updateOpacity();
    }
	return this._opacity !== lastOpacity;
};

/**
 * Изменяет название файла графики
 * Возвращает true, если изменение произошло
 *
 * @param {String} [graphicName] - Название файла графики
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
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
 * Изменяет рамку спрайта
 * Возвращает true, если изменение произошло
 *
 * @override
 *
 * @param {Number | PIXI.Rectangle | Rectangle | Object} [object] - Координата X или Rectangle, или Объект типа {}
 * @param {Number} [y] - Координата Y
 * @param {Number} [width] - Ширина рамки
 * @param {Number} [height] - Высота рамки
 *
 * @param {Number} [object.x] -  Координата X
 * @param {Number} [object.y] - Координата Y
 * @param {Number} [object.width] - Ширина рамки
 * @param {Number} [object.height] - Высота рамки
 *
 * @return {Boolean} Изменение произошло
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
 *
 * @param object
 * @param y
 * @returns {Boolean}
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

/**
 * Устанавливает обработчик загрузки графики
 *
 * @param {Function} listener - Обработчик загрузки графики
 */
DKTools.Sprite.prototype.setGraphicLoadListener = function(listener) {
    /**
     * @private
     * @readonly
     * @type {Function}
     */
    this._graphicLoadListener = listener;
};

// remove methods

/**
 * Удаляет Bitmap спрайта
 */
DKTools.Sprite.prototype.removeBitmap = function() {
    if (this.hasBitmap()) {
        this.setBitmap(null);
    }
};

/**
 * Удаляет название файла графики
 */
DKTools.Sprite.prototype.removeGraphicName = function() {
    if (this.hasGraphicName()) {
        this.setGraphicName(null);
    }
};

/**
 * Удаляет текст
 *
 * @param {Number | String | *} id - ID текста
 * @param {Boolean} [blockRefreshAll] - Блокировка вызова функции refreshAll
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
 * Проверяет ширину и высоту Bitmap на соответствие минимальным значениям
 * Возвращает количество измененных параметров
 *
 * @override
 * @return {Number} Количество измененных параметров
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
 * Создает все объекты
 *
 * @override
 */
DKTools.Sprite.prototype.createAll = function() {
    DKTools.Base.prototype.createAll.call(this);
    this.createBitmap();
};

/**
 * Если установлена графика, то загружает изображение из названия файла графики,
 * иначе создает Bitmap шириной _bitmapWidth и высотой _bitmapHeight
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
 * Добавляет текст
 *
 * @param {String | Number} text - Текст
 * @param {Object} options - Опции
 * @param {Boolean} [refreshAll] - Перерисовать все
 *
 * @param {String | Number} [options.id] - ID текста
 * @param {String} [options.type] - Тип рисования текста
 *
 * @see DKTools.Base.prototype.drawTextEx
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
 * Перерисовывает все
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
 * Возвращает объект текста по его ID
 *
 * @param {Number | String | *} id - ID текста
 * @returns {Object} Объект текста
 */
DKTools.Sprite.prototype.getTextById = function(id) {
    return _.find(this._texts, { id: id });
};

/**
 * Возвращает текущую прозрачность
 *
 * @returns {Number} текущая прозрачность
 */
DKTools.Sprite.prototype.getCurrentOpacity = function() {
    return this.alpha * 255;
};

// size methods

/**
 * Изменяет ширину и высоту Bitmap, если они отличаются от текущих
 * Возвращает true, если изменение произошло
 *
 * @param {Number} [width] - Ширина Bitmap
 * @param {Number} [height] - Высота Bitmap
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
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
 * Возвращает true, если спрайт можно обновить и перерисовать
 *
 * @override
 * @return {Boolean} Спрайт можно обновить и перерисовать
 */
DKTools.Sprite.prototype.canRefreshAll = function() {
    return DKTools.Base.prototype.canRefreshAll.call(this) && !this.hasGraphicName() && !this.isFixedBitmap();
};

// effects methods

/**
 * Изменяет тон
 *
 * @param {Number[]} tone -
 * @return {Boolean}
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
 *
 * Возвращает true, если Bitmap существует
 *
 * @param {Number} offset -
 * @return {Boolean} Bitmap существует
 */
DKTools.Sprite.prototype.rotateHue = function(offset) {
    if (!this.hasBitmap()) {
        return false;
    }
    this.bitmap.rotateHue(offset);
    return true;
};

/**
 * Накладывает эффект размытия
 * Возвращает true, если Bitmap существует
 *
 * @return {Boolean} Bitmap существует
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
 * Изменяет шрифт текста
 *
 * @param {Object} font - Объект типа {}
 *
 * @param {String} [font.fontFace] - Название шрифта
 * @param {Number} [font.fontSize] - Размер шрифта
 * @param {Boolean} [font.fontItalic] - Курсив шрифта
 */
DKTools.Sprite.prototype.changeFont = function(font) {
    if (this.hasBitmap()) {
        this.updateFont(font);
    }
};

/**
 * Изменяет цвет текста
 *
 * @param {String} textColor - Цвет текста
 */
DKTools.Sprite.prototype.changeTextColor = function(textColor) {
    if (this.hasBitmap()) {
        this.updateTextColor(textColor);
    }
};

/**
 * Изменяет прозрачность рисования
 *
 * @param {Number} paintOpacity - Прозрачность рисования
 */
DKTools.Sprite.prototype.changePaintOpacity = function(paintOpacity) {
    if (this.hasBitmap()) {
        this.updatePaintOpacity(paintOpacity);
    }
};

// reset methods

/**
 * Сбрасывает все
 */
DKTools.Sprite.prototype.resetAll = function() {
    this.resetFont();
    this.resetTextColor();
    this.resetPaintOpacity();
};

/**
 * Сбрасывает шрифт текста
 *
 * @override
 */
DKTools.Sprite.prototype.resetFont = function() {
    this.changeFont(this.font);
};

/**
 * Сбрасывает цвет текста
 *
 * @override
 */
DKTools.Sprite.prototype.resetTextColor = function() {
    this.changeTextColor(this.textColor);
};

/**
 * Сбрасывает прозрачность рисования
 */
DKTools.Sprite.prototype.resetPaintOpacity = function() {
    this.changePaintOpacity(this.paintOpacity);
};

// has methods

/**
 * Проверяет объект на наличие цвета заливки
 * Возвращает true, если цвет заливки установлен
 *
 * @return {Boolean} Цвет заливки установлен
 */
DKTools.Sprite.prototype.hasFillColor = function() {
    return !!this._fillColor;
};

/**
 * Проверяет объект на наличие текстов
 * Возвращает true, если тексты установлены
 *
 * @return {Boolean} Тексты установлены
 */
DKTools.Sprite.prototype.hasTexts = function() {
    return this._texts.length > 0;
};

/**
 * Проверяет спрайт на наличие названия файла графики
 * Возвращает true, если название файла графики установлено
 *
 * @return {Boolean} Название файла графики установлено
 */
DKTools.Sprite.prototype.hasGraphicName = function() {
    return !!this._graphicName;
};

// is methods

/**
 * Проверяет спрайт на установку Bitmap с помощью функции setupBitmap или setBitmap
 * Возвращает true, если Bitmap был установлен функцией setupBitmap или setBitmap, а не создан createBitmap
 *
 * @return {Boolean} Bitmap был установлен функцией setupBitmap или setBitmap
*/
DKTools.Sprite.prototype.isFixedBitmap = function() {
    return this._fixedBitmap;
};

/**
 * Возвращает true, если у спрайта можно изменить размер
 *
 * @return {Boolean}
 */
DKTools.Sprite.prototype.isResizable = function() {
    return !this.hasGraphicName() && !this.isFixedBitmap();
};

/**
 * Возвращает true, если координаты находятся внутри спрайта
 *
 * @override
 *
 * @param {Number} x - Координата X
 * @param {Number} y - Координата Y
 *
 * @return {Boolean} Координаты находятся внутри спрайта
 */
DKTools.Sprite.prototype.isInside = function(x, y) {
    const localX = this.canvasToLocalX(x);
    const localY = this.canvasToLocalY(y);
    const frame = DKTools.Utils.Rectangle.clone(this.frame);
    frame.x -= this.width * this.anchor.x;
    frame.y -= this.height * this.anchor.y;
    frame.width *= this.scale.x;
    frame.height *= this.scale.y;
    return frame.contains(localX, localY);
};

// draw methods

/**
 * Рисует все
 *
 * @override
 */
DKTools.Sprite.prototype.drawAll = function() {
    this.updateFill();
    this.drawAllTexts();
};

/**
 * Рисует все тексты
 */
DKTools.Sprite.prototype.drawAllTexts = function() {
    _.forEach(this._texts, function(obj) {
        this[obj.type](obj.text, obj.options);
    }.bind(this));
};

/**
 * Рисует текст
 * Возвращает true, если Bitmap существует
 *
 * @param {String} text - Текст
 * @param {String} [align] - Выравнивание текста
 * @param {Number | Rectangle | Object} [object] - Координата X или Rectangle, или Объект типа {}
 * @param {Number} [y] - Координата Y
 * @param {Number} [width] - Ширина области
 * @param {Number} [height] - Высота области
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 * @param {Number} [object.width] - Ширина области
 * @param {Number} [object.height] - Высота области
 *
 * @return {Boolean} Bitmap существует
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

    if (_.isString(y)) { // line
        y = this.getLineHeight() * Number(y);
    }

    if (_.isString(height)) { // lines
        height = this.getLineHeight() * Number(height);
    }

    x = x || 0;
    y = y || 0;
    width = width || this.standardDrawWidth();
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
 * Загружает Bitmap из папки
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
 * @return {Boolean} Bitmap спрайта был изменен
*/
DKTools.Sprite.prototype.loadBitmap = function(object, filename, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap(object.folder, object.filename, object.listener, object.hue, object.smooth);
    }
    // object - String
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
 * Загружает Bitmap из папки
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
 * @return {Boolean} Bitmap спрайта был изменен
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
 * Загружает графику из названия файла графики
 *
 * @private
 */
DKTools.Sprite.prototype._loadGraphic = function() {
    if (this.hasGraphicName()) {
        const folder = this.graphicFolder;
        const filename = this.graphicName;
        const listener = this._graphicLoadListener;
        this.loadBitmap(folder, filename, listener);
        this.updateReadyEvents();
    }
};

// event methods

/**
 * Обновляет события типа drawAll
 */
DKTools.Sprite.prototype.updateDrawAllEvents = function() {
    this.updateEventsContainer('drawAll');
};

// update methods

/**
 * Обновляет все
 *
 * @override
 */
DKTools.Sprite.prototype.updateAll = function() {
    DKTools.Base.prototype.updateAll.call(this);
    this.updateBitmap();
};

/**
 * Обновляет Bitmap спрайта
 */
DKTools.Sprite.prototype.updateBitmap = function() {
    if (this.hasBitmap()) {
        this.updateFont();
        this.updateTextColor();
        this.updatePaintOpacity();
    }
};

/**
 * Обновляет шрифт текста
 */
DKTools.Sprite.prototype.updateFont = function(font) {
    font = font || this.font;
    this.bitmap.fontFace = font.fontFace;
    this.bitmap.fontSize = font.fontSize;
    this.bitmap.fontItalic = font.fontItalic;
};

/**
 * Обновляет цвет текста
 */
DKTools.Sprite.prototype.updateTextColor = function(textColor) {
    this.bitmap.textColor = textColor || this.textColor;
};

/**
 * Обновление прозрачности рисования окна
 */
DKTools.Sprite.prototype.updatePaintOpacity = function(paintOpacity) {
    this.bitmap.paintOpacity = paintOpacity || this.paintOpacity;
};

/**
 * Обновляет заливку объекта
 */
DKTools.Sprite.prototype.updateFill = function() {
    if (this.hasFillColor()) {
        this.fillAll(this.fillColor);
    }
};

/**
 * Обновляет прозрачность спрайта
 *
 * @override
 *
 * @param {Number} [opacity] - Прозрачность спрайта
 */
DKTools.Sprite.prototype.updateOpacity = function(opacity) {
    if (opacity == null) {
        opacity = this._opacity;
    }
    this.alpha = opacity.clamp(0, 255) / 255;
};





//===========================================================================
// Elements based on DKTools.Sprite
//===========================================================================





//===========================================================================
// DKTools Sprite Button
//===========================================================================

DKTools.Sprite.Button.prototype = Object.create(DKTools.Sprite.prototype);
DKTools.Sprite.Button.prototype.constructor = DKTools.Sprite.Button;

// properties

Object.defineProperties(DKTools.Sprite.Button.prototype, {

    /**
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
     * Время нажатия на спрайт
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
     * Координата X нажатия внутри спрайта
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
     * Координата Y нажатия внутри спрайта
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
 * Очищает все данные
 *
 * @private
 * @override
 */
DKTools.Sprite.Button.prototype._clearAll = function() {
    DKTools.Sprite.prototype._clearAll.call(this);
    this._clearPressedTime();
};

/**
 * Очищает время нажатия на спрайт
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
 * @private
 * @override
 */
DKTools.Sprite.Button.prototype._setupEvents = function() {
    DKTools.Sprite.prototype._setupEvents.call(this);
    this._setupUpdateEvent();
};

DKTools.Sprite.Button.prototype._setupOptions = function() {
    DKTools.Sprite.prototype._setupEvents.call(this);
    this.enableOption('mouseEnter');
};

/**
 * @private
 */
DKTools.Sprite.Button.prototype._setupUpdateEvent = function() {
    this.addEvent({
        type: 'update',
        onUpdate: this.updateButtonState.bind(this)
    });
};

// standard methods

/**
 * Возвращает стандартное значение активности
 *
 * @override
 * @returns {Boolean} Стандартное значение активности
 */
DKTools.Sprite.Button.prototype.standardActive = function() {
    return false;
};

/**
 * @returns {Number}
 */
DKTools.Sprite.Button.prototype.standardLongPressInterval = function() {
    return 18;
};

// setup methods

/**
 * Устанавливает все параметры
 *
 * @override
 *
 * @param {Object} [object] -
 *
 * @param {Number} [object.longPressInterval] -
 */
DKTools.Sprite.Button.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.Sprite.prototype.setupAll.call(this, object);
    this.setupLongPressInterval(object.longPressInterval);
};

/**
 *
 * @param {Number} [interval] -
 */
DKTools.Sprite.Button.prototype.setupLongPressInterval = function(interval) {
    this._longPressInterval = interval || this.standardLongPressInterval();
};

// set methods

DKTools.Sprite.Button.prototype.setAll = function(object, blockStart, activate) {

};

DKTools.Sprite.Button.prototype.setLongPressInterval = function(interval) {

};

// is methods

/**
 * Проверяет было ли касание внутри спрайта
 * Возвращает true, если касание было внутри спрайта
 *
 * @return {Boolean} Касание было внутри спрайта
 */
DKTools.Sprite.Button.prototype.isTouched = function() {
    return this.isInside(TouchInput.x, TouchInput.y);
};

/**
 * Возвращает true, если спрайт нажат
 *
 * @returns {Boolean} Спрайт нажат
 */
DKTools.Sprite.Button.prototype.isPressed = function() {
    return this._pressedTime > 0 && !this.isLongPressed();
};

/**
 * Проверяет спрайт на длительное нажатие
 * Возвращает true, если спрайт нажимается больше интервала длительного нажатия
 *
 * @returns {Boolean} Спрайт нажимается больше интервала длительного нажатия
 */
DKTools.Sprite.Button.prototype.isLongPressed = function() {
    return this._pressedTime >= this._longPressInterval;
};

// event methods

/**
 * Обновляет события типа mouse-click-button
 *
 * @param {String} button - Кнопка мыши
 */
DKTools.Sprite.Button.prototype.updateClickEvents = function(button) {
    this.updateEventsContainer('mouse-click-%1'.format(button));
};

/**
 * Обновляет события типа mouse-longPress-button
 *
 * @param {String} button - Кнопка мыши
 */
DKTools.Sprite.Button.prototype.updateLongPressEvents = function(button) {
    this.updateEventsContainer('mouse-longPress-%1'.format(button));
};

/**
 * Обновляет события типа touch
 */
DKTools.Sprite.Button.prototype.updateTouchEvents = function() {
    this.updateEventsContainer('touch');
};

/**
 * Обновляет события типа longTouch
 */
DKTools.Sprite.Button.prototype.updateLongTouchEvents = function() {
    this.updateEventsContainer('longTouch');
};

/**
 * Обновляет события типа pressedState
 */
DKTools.Sprite.Button.prototype.updatePressedStateEvents = function() {
    this.updateEventsContainer('pressedState');
};

/**
 * Обновляет события типа normalState
 */
DKTools.Sprite.Button.prototype.updateNormalStateEvents = function() {
    this.updateEventsContainer('normalState');
};

// process methods

/**
 * Выполняет все
 *
 * @override
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
 * Выполняет нажатие мышкой
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
                }
            }
            this._clearPressedTime();
        }
    } else {
        this._clearPressedTime();
    }
};

/**
 * Выполняет нажатие пальцем
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
            }
            this._clearPressedTime();
        }
    } else {
        this._clearPressedTime();
    }
};

// update methods

DKTools.Sprite.Button.prototype.updateButtonState = function() {
    if (this.isPressed() || this.isLongPressed()) {
        this.updatePressedStateEvents();
    } else {
        this.updateNormalStateEvents();
    }
};





//===========================================================================
// DKTools Sprite Cursor
//===========================================================================

DKTools.Sprite.Cursor.prototype = Object.create(DKTools.Sprite.prototype);
DKTools.Sprite.Cursor.prototype.constructor = DKTools.Sprite.Cursor;

// properties

Object.defineProperties(DKTools.Sprite.Cursor.prototype, {

    /**
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
 * Очищает все данные
 *
 * @private
 * @override
 */
DKTools.Sprite.Cursor.prototype._clearAll = function() {
    DKTools.Sprite.prototype._clearAll.call(this);
    this._clearAnimationCount();
};

/**
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
 * Создает необходимые объекты
 *
 * @private
 * @override
 */
DKTools.Sprite.Cursor.prototype._createAll = function() {
    DKTools.Sprite.prototype._createAll.call(this);
    this._createWindowskin();
};

/**
 * Создает обложку окна
 *
 * @private
 */
DKTools.Sprite.Cursor.prototype._createWindowskin = function() {
    const filename = this.standardWindowskin();
    this._windowskin = ImageManager.loadSystem(filename);
};

// _setup methods

/**
 * Устанавливает события
 *
 * @private
 * @override
 */
DKTools.Sprite.Cursor.prototype._setupEvents = function() {
    DKTools.Sprite.prototype._setupEvents.call(this);
    this._setupUpdateEvent();
};

/**
 * Устанавливает событие типа update
 *
 * @private
 */
DKTools.Sprite.Cursor.prototype._setupUpdateEvent = function() {
    this.addEvent({
        type: 'update',
        onUpdate: this.updateCursorAnimation.bind(this)
    });
};

// standard methods

/**
 *
 * @returns {Rectangle}
 */
DKTools.Sprite.Cursor.prototype.standardCursorRect = function() {
    return new Rectangle();
};

/**
 *
 * @returns {Number}
 */
DKTools.Sprite.Cursor.prototype.standardBlinkSpeed = function() {
    return 8;
};

// setup methods

/**
 * Устанавливает все параметры
 *
 * @override
 *
 * @param {Object} [object] - Объект типа {}
 *
 * @param {PIXI.Rectangle | Rectangle | Object} [object.cursorRect] - Рамка курсора
 */
DKTools.Sprite.Cursor.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.Sprite.prototype.setupAll.call(this, object);
    this.setupCursorRect(object.cursorRect);
    this.setupBlinkSpeed(object.blinkSpeed);
}

/**
 * Устанавливает размер курсора
 *
 * @param {Number | PIXI.Rectangle | Rectangle | Object} [object] -
 * @param {Number} [y] -
 * @param {Number} [width] -
 * @param {Number} [height] -
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
 * @param {Number} [blinkSpeed]
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
 * Изменяет все параметры
 * Возвращает количество измененных параметров
 *
 * @override
 *
 * @param {Object} [object] - Параметры
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 * @param {Boolean} [activate] - Активирует спрайт
 *
 * @param {PIXI.Rectangle | Rectangle | Object} [object.cursorRect] - Размер курсора
 * @param {Number} [object.blinkSpeed] -
 *
 * @see DKTools.Sprite.prototype.setAll
 *
 * @returns {Number} Количество измененных параметров
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
 * Изменяет размер курсора
 * Возвращает true, если изменение произошло
 *
 * @param {Number | PIXI.Rectangle | Rectangle | Object} object - Координата X или Rectangle, или Объект типа {}
 * @param {Number} y - Координата Y
 * @param {Number} width - Ширина рамки
 * @param {Number} height - Высота рамки
 *
 * @returns {Boolean} Изменение произошло
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
 * @param {Number} [blinkSpeed]
 */
DKTools.Sprite.Cursor.prototype.setBlinkSpeed = function(blinkSpeed) {
    if (this._blinkSpeed === blinkSpeed) {
        return false;
    }
    let lastSpeed = this._blinkSpeed;
    this.setupBlinkSpeed(blinkSpeed);
    return this._blinkSpeed !== lastSpeed;
};

// refresh methods

/**
 * Обновляет и перерисовывает все
 *
 * @override
 */
DKTools.Sprite.Cursor.prototype.refreshAll = function() {
    DKTools.Sprite.prototype.refreshAll.call(this);
    this.refreshCursor();
};

/**
 * Обновляет курсор
 */
DKTools.Sprite.Cursor.prototype.refreshCursor = function() {
    const x = this._cursorRect.x;
    const y = this._cursorRect.y;
    const w = this._cursorRect.width;
    const h = this._cursorRect.height;
    const m = 4;
    const ox = 0;
    const oy = 0;
    const w2 = Math.min(w, this.parent.realWidth - x);
    const h2 = Math.min(h, this.parent.realHeight - y);

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
 * Обновляет анимацию курсора
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
// DKTools Sprite Arrow
//===========================================================================

DKTools.Sprite.Arrow.prototype = Object.create(DKTools.Sprite.Button.prototype);
DKTools.Sprite.Arrow.prototype.constructor = DKTools.Sprite.Arrow;

// properties

Object.defineProperties(DKTools.Sprite.Arrow.prototype, {

    /**
     * Тип стрелки
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
 * Возвращает стандартную видимость
 *
 * @override
 * @returns {Boolean}
 */
DKTools.Sprite.Arrow.prototype.standardVisible = function() {
    return false;
};

/**
 * Возвращает стандартное название файла графики
 *
 * @override
 * @returns {String} Стандартное название файла графики
 */
DKTools.Sprite.Arrow.prototype.standardGraphicName = function() {
    return this.standardWindowskin();
};

/**
 * Возвращает стандартную точку привязки текстуры
 *
 * @override
 * @returns {Point} Стандартная точка привязки текстуры
 */
DKTools.Sprite.Arrow.prototype.standardAnchor = function() {
    return new Point(0.5, 0.5);
};

/**
 * Возвращает стандартный тип стрелки
 *
 * @returns {null}
 */
DKTools.Sprite.Arrow.prototype.standardArrowType = function() {
    return null;
};

// setup methods

/**
 * Устанавливает все параметры спрайта
 *
 * @override
 *
 * @param {Object} [object] - Объект типа {}
 *
 * @param {String} [object.arrowType] - Тип стрелки
 *
 * @see DKTools.Sprite.prototype.setupAll
 */
DKTools.Sprite.Arrow.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.Sprite.Button.prototype.setupAll.call(this, object);
    this.setupArrowType(object.arrowType);
};

/**
 * Устанавливает тип стрелки
 *
 * @param {String} [type] - Тип стрелки
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
 * Изменяет все параметры спрайта
 * Возвращает количество измененных параметров
 *
 * @override
 *
 * @param {Object} [object] - Объект типа {}
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 * @param {Boolean} [activate] - Активирует спрайт
 *
 * @param {String} [object.arrowType] -
 *
 * @see DKTools.Sprite.prototype.setAll
 *
 * @returns {Number} Количество измененных параметров
 */
DKTools.Sprite.Arrow.prototype.setAll = function(object, blockStart, activate) {
    object = object || {};
    const block = true;
    let changed = DKTools.Sprite.prototype.setAll.call(this, object, block);
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
 * Изменяет тип стрелки
 * Возвращает true, если изменение произошло
 *
 * @param {String} [type] - Тип стрелки
 * @param {Boolean} [blockRefresh] - Блокировка вызова функции refreshAll
 *
 * @returns {Boolean} Изменение произошло
 */
DKTools.Sprite.Arrow.prototype.setArrowType = function(type, blockRefresh) {
    if (this._arrowType === type) {
        return false;
    }
    const lastType = this._arrowType;
    this.setupArrowType(type);
    if (this._arrowType === lastType) {
        return false;
    }
    if (!blockRefresh) {
        this.refreshAll();
    }
    return true;
};

// refresh methods

/**
 * Обновляет и перерисовывает все
 *
 * @override
 */
DKTools.Sprite.Arrow.prototype.refreshAll = function() {
    DKTools.Sprite.Button.prototype.refreshAll.call(this);
    this.refreshArrow();
};

/**
 * Обновляет и перерисовывает стрелку
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
// DKTools Sprite Selectable
//===========================================================================

DKTools.Sprite.Selectable.prototype = Object.create(DKTools.Sprite.Button.prototype);
DKTools.Sprite.Selectable.prototype.constructor = DKTools.Sprite.Selectable;

// properties

Object.defineProperties(DKTools.Sprite.Selectable.prototype, {

    /**
     * @memberOf DKTools.Sprite.Selectable.prototype
     */
    cursorSprite: {
        get: function() {
            return this._cursorSprite;
        },
        configurable: true
    },

    /**
     * Индекс
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
     * @memberOf DKTools.Sprite.Selectable.prototype
     */
    itemTextColor: {
        get: function() {
            return this._itemTextColor;
        },
        configurable: true
    },

    /**
     * @memberOf DKTools.Sprite.Selectable.prototype
     */
    itemPaintOpacity: {
        get: function() {
            return this._itemPaintOpacity;
        },
        configurable: true
    },

    /**
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
 * Очищает все данные
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

DKTools.Sprite.Selectable.prototype._clearItems = function() {
    /**
     * @private
     * @readonly
     * @type {Object[]}
     */
    this._items = [];
};

/**
 * Очищает обработчики выбора
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
 * Создает необходимые объекты
 *
 * @private
 * @override
 */
DKTools.Sprite.Selectable.prototype._createAll = function() {
    DKTools.Sprite.Button.prototype._createAll.call(this);
    this._createCursorSprite();
};

/**
 * Создает спрайт курсора
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
 * Устанавливает события
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
 * Добавляет объекты в обработку
 *
 * @private
 * @override
 */
DKTools.Sprite.Selectable.prototype._addAllChildren = function() {
    DKTools.Sprite.Button.prototype._addAllChildren.call(this);
    this._addCursorSprite();
};

/**
 * Добавляет спрайт курсора в обработку
 *
 * @private
 */
DKTools.Sprite.Selectable.prototype._addCursorSprite = function() {
    this.addChild(this._cursorSprite);
};

// standard methods

/**
 * Возвращает стандартный индекс
 *
 * @returns {Number} Стандартный индекс
 */
DKTools.Sprite.Selectable.prototype.standardIndex = function() {
    return 0;
};

/**
 * Возвращает стандартное количество столбцов
 *
 * @returns {Number} Стандартное количество столбцов
 */
DKTools.Sprite.Selectable.prototype.standardMaxCols = function() {
    return 1;
};

/**
 * @returns {Boolean}
 */
DKTools.Sprite.Selectable.prototype.standardCursorFixed = function() {
    return false;
};

/**
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
 * @returns {Number}
 */
DKTools.Sprite.Selectable.prototype.standardHorizontalSpacing = function() {
    return 0;12;
};

/**
 * @returns {Number}
 */
DKTools.Sprite.Selectable.prototype.standardVerticalSpacing = function() {
    return 0;
};

/**
 * @returns {Number}
 */
DKTools.Sprite.Selectable.prototype.standardTextPadding = function() {
    return 6;
};

/**
 * Возвращает стандартный список пунктов
 *
 * @returns {Array}
 */
DKTools.Sprite.Selectable.prototype.standardItems = function() {
    return [];
};

/**
 * @returns {Function}
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
            painOpacity: paintOpacity,
            align: align,
            rect: rect
        });
    }.bind(this);
};

/**
 * Возвращает стандартную ширину пункта
 *
 * @returns {Function} Стандартная ширина пункта
 */
DKTools.Sprite.Selectable.prototype.standardItemWidth = function() {
    return function() {
        const spacing = this._horizontalSpacing;
        return Math.floor((this.realWidth + spacing) / this.getMaxCols() - spacing);
    }.bind(this);
};

/**
 * Возвращает стандартную высоту пункта
 *
 * @returns {Function} Стандартная высота пункта
 */
DKTools.Sprite.Selectable.prototype.standardItemHeight = function() {
    return this.getLineHeight();
};

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
 * Возвращает стандартный шрифт текста пункта
 *
 * @returns {Object} Стандартный шрифт текста пункта
 */
DKTools.Sprite.Selectable.prototype.standardItemFont = function() {
    return this.font;
};

/**
 * Возвращает стандартный цвет текста пункта
 *
 * @returns {String} Стандартный цвет текста пункта
 */
DKTools.Sprite.Selectable.prototype.standardItemTextColor = function() {
    return this.textColor;
};

/**
 * Возвращает стандартную прозрачность рисования пункта
 *
 * @returns {Number} Стандартная прозрачность рисования пункта
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
 *
 * @returns {Number}
 */
DKTools.Sprite.Selectable.prototype.standardEnabledItemPaintOpacity = function() {
    return 255;
};

/**
 *
 * @returns {Number}
 */
DKTools.Sprite.Selectable.prototype.standardDisabledItemPaintOpacity = function() {
    return Window_Base.prototype.translucentOpacity.call(this);
};

/**
 * Возвращает стандартное выравнивание текста пункта
 *
 * @returns {String} Стандартное выравнивание текста пункта
 */
DKTools.Sprite.Selectable.prototype.standardItemAlign = function() {
    return this.align;
};

// setup methods

/**
 * Устанавливает все параметры
 *
 * @override
 *
 * @param {Object} [object] - Объект типа {}
 *
 * @param {Number} [object.index] - Индекс
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
 * @see DKTools.Sprite.Button.prototype.setupAll
 * @see DKTools.Sprite.Selectable.prototype.setupItems
 */
DKTools.Sprite.Selectable.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.Sprite.Button.prototype.setupAll.call(this, object);
    this.setupDrawItemHandler(object.drawItemHandler);
    this.setupIndex(object.index);
    this.setupItems(object.items);
    this.setupMaxCols(object.maxCols);
    this.setupCursorFixed(object.cursorFixed);
    this.setupCursorAll(object.cursorAll);
    this.setupSpacing(object.horizontalSpacing, object.verticalSpacing);
    this.setupTextPadding(object.textPadding);
    this.setupItemWidth(object.itemWidth);
    this.setupItemHeight(object.itemHeight);
    this.setupItemRect(object.itemRect);
    this.setupItemAlign(object.itemAlign);
    this.setupItemTextColor(object.itemTextColor);
    this.setupItemFont(object.itemFont);
    this.setupItemPaintOpacity(object.itemPaintOpacity);
    this.setupFixedHorizontal(object.fixedHorizontal);
};

/**
 * Устанавливает индекс
 *
 * @param {Number} [index] - Индекс
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
 * Устанавливает количество столбцов
 *
 * @param {Number} [cols] - Количество столбцов
 */
DKTools.Sprite.Selectable.prototype.setupMaxCols = function(cols) {
    /**
     * Количество столбцов
     *
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
 * Устанавливает горизонтальный интервал
 *
 * @param {Number} [spacing] - Интервал
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
 * Устанавливает вертикальный интервал
 *
 * @param {Number} [spacing] - Интервал
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
 * @param {Object[]} items - Пункты
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
 * Изменяет все параметры
 * Возвращает количество измененных параметров
 *
 * @override
 *
 * @param {Object} [object] - Параметры
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 * @param {Boolean} [activate] - Активировать спрайт
 *
 * @param {Number} [object.index] - Индекс
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
 * @returns {Number} Количество измененных параметров
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
 * Возвращает true, если изменение произошло
 *
 * @param {Number} index - Индекс
 * @param {Boolean} [blockRefresh=false] - Блокировка вызова функции refreshAll
 *
 * @returns {Boolean}  Изменение произошло
 */
DKTools.Sprite.Selectable.prototype.setIndex = function(index, blockRefresh) {
    if (this._index === index) {
        return false;
    }
    const lastIndex = this._index;
    this.setupIndex(index);
    if (this._index === lastIndex) {
        return false;
    }
    if (!blockRefresh) {
        this.refreshAll();
    }
    return true;
};

/**
 * Изменяет количество столбцов
 * Возвращает true, если изменение произошло
 *
 * @param {Number} [cols] - Количество столбцов
 * @param {Boolean} [blockRefresh=false] - Блокировка вызова функции refreshAll
 *
 * @returns {Boolean} Изменение произошло
 */
DKTools.Sprite.Selectable.prototype.setMaxCols = function(cols, blockRefresh) {
    if (this._maxCols === cols) {
        return false;
    }
    const lastCols = this._maxCols;
    this.setupMaxCols(cols);
    if (this._maxCols === lastCols) {
        return false;
    }
    if (!blockRefresh) {
        this.refreshAll();
    }
    return true;
};

DKTools.Sprite.Selectable.prototype.setFixedHorizontal = function(fixedHorizontal, blockRefresh) {
    if (this._fixedHorizontal === fixedHorizontal) {
        return false;
    }
    const lastFixed = this._fixedHorizontal;
    this.setupFixedHorizontal(fixedHorizontal);
    if (this._fixedHorizontal === lastFixed) {
        return false;
    }
    if (!blockRefresh) {
        this.refreshAll();
    }
    return true;
};

/**
 *
 * @param {Boolean} cursorFixed
 */
DKTools.Sprite.Selectable.prototype.setCursorFixed = function(cursorFixed, blockRefresh) {
    if (this._cursorFixed === cursorFixed) {
        return false;
    }
    const lastFixed = this._cursorFixed;
    this.setupCursorFixed(cursorFixed);
    if (this._cursorFixed === lastFixed) {
        return false;
    }
    if (!blockRefresh) {
        this.refreshAll();
    }
    return true;
};

/**
 *
 * @param {Boolean} cursorAll
 */
DKTools.Sprite.Selectable.prototype.setCursorAll = function(cursorAll, blockRefresh) {
    if (this._cursorAll === cursorAll) {
        return false;
    }
    const lastAll = this._cursorAll;
    this.setupCursorAll(cursorAll);
    if (this._cursorAll === lastAll) {
        return false;
    }
    if (!blockRefresh) {
        this.refreshAll();
    }
    return true;
};

DKTools.Sprite.Selectable.prototype.setHorizontalSpacing = function(spacing, blockRefresh) {
    if (this._horizontalSpacing === spacing) {
        return false;
    }
    const lastSpacing = this._horizontalSpacing;
    this.setupHorizontalSpacing(spacing);
    if (this._horizontalSpacing === lastSpacing) {
        return false;
    }
    if (!blockRefresh) {
        this.refreshAll();
    }
    return true;
};

DKTools.Sprite.Selectable.prototype.setVerticalSpacing = function(spacing, blockRefresh) {
    if (this._verticalSpacing === spacing) {
        return false;
    }
    const lastSpacing = this._verticalSpacing;
    this.setupVerticalSpacing(spacing);
    if (this._verticalSpacing === lastSpacing) {
        return false;
    }
    if (!blockRefresh) {
        this.refreshAll();
    }
    return true;
};

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

DKTools.Sprite.Selectable.prototype.setTextPadding = function(textPadding, blockRefresh) {
    if (this._textPadding === textPadding) {
        return false;
    }
    const lastPadding = this._textPadding;
    this.setupTextPadding(textPadding);
    if (this._textPadding === lastPadding) {
        return false;
    }
    if (!blockRefresh) {
        this.refreshAll();
    }
    return true;
};

DKTools.Sprite.Selectable.prototype.setItems = function(items, blockRefresh) {
    if (this._items == items) {
        return false;
    }
    this.setupItems(items);
    if (!blockRefresh) {
        this.refreshAll();
    }
    return true;
};

DKTools.Sprite.Selectable.prototype.setDrawItemHandler = function(handler, blockRefresh) {
    if (this._drawItemHandler === handler) {
        return false;
    }
    const lastHandler = this._drawItemHandler;
    this.setupDrawItemHandler(handler);
    if (this._drawItemHandler === lastHandler) {
        return false;
    }
    if (!blockRefresh) {
        this.refreshAll();
    }
    return true;
};

DKTools.Sprite.Selectable.prototype.setItemWidth = function(itemWidth, blockRefresh) {
    if (this._itemWidth === itemWidth) {
        return false;
    }
    const lastWidth = this._itemWidth;
    this.setupItemWidth(itemWidth);
    if (this._itemWidth === lastWidth) {
        return false;
    }
    if (!blockRefresh) {
        this.refreshAll();
    }
    return true;
};

DKTools.Sprite.Selectable.prototype.setItemHeight = function(itemHeight, blockRefresh) {
    if (this._itemHeight === itemHeight) {
        return false;
    }
    const lastHeight = this._itemHeight;
    this.setupItemHeight(itemHeight);
    if (this._itemHeight === lastHeight) {
        return false;
    }
    if (!blockRefresh) {
        this.refreshAll();
    }
    return true;
};

DKTools.Sprite.Selectable.prototype.setItemFont = function(itemFont, blockRefresh) {
    if (this._itemFont === itemFont) {
        return false;
    }
    const lastFont = this._itemFont;
    this.setupItemFont(itemFont);
    if (this._itemFont === lastFont) {
        return false;
    }
    if (!blockRefresh) {
        this.refreshAll();
    }
    return true;
};

DKTools.Sprite.Selectable.prototype.setItemTextColor = function(itemTextColor, blockRefresh) {
    if (this._itemTextColor === itemTextColor) {
        return false;
    }
    const lastTextColor = this._itemTextColor;
    this.setupItemTextColor(itemTextColor);
    if (this._itemTextColor === lastTextColor) {
        return false;
    }
    if (!blockRefresh) {
        this.refreshAll();
    }
    return true;
};

DKTools.Sprite.Selectable.prototype.setItemPaintOpacity = function(itemPaintOpacity, blockRefresh) {
    if (this._itemPaintOpacity === itemPaintOpacity) {
        return false;
    }
    const lastPaintOpacity = this._itemPaintOpacity;
    this.setupItemPaintOpacity(itemPaintOpacity);
    if (this._itemPaintOpacity === lastPaintOpacity) {
        return false;
    }
    if (!blockRefresh) {
        this.refreshAll();
    }
    return true;
};

DKTools.Sprite.Selectable.prototype.setItemAlign = function(itemAlign, blockRefresh) {
    if (this._itemAlign === itemAlign) {
        return false;
    }
    const lastAlign = this._itemAlign;
    this.setupItemAlign(itemAlign);
    if (this._itemAlign === lastAlign) {
        return false;
    }
    if (!blockRefresh) {
        this.refreshAll();
    }
    return true;
};

/**
 *
 * @param {Number} row - Номер ряда
 */
DKTools.Sprite.Selectable.prototype.setTopRow = function(row) {
    const topRow = _.clamp(row, 0, this.getMaxTopRow());
    if (this._topRow !== topRow) {
        this._topRow = topRow;
        this.refreshAll();
    }
};

/**
 *
 * @param {Number} col - Номер столбца
 */
DKTools.Sprite.Selectable.prototype.setTopCol = function(col) {
    const topCol = _.clamp(col, 0, this.getMaxTopCol());
    if (this._topCol !== topCol) {
        this._topCol = topCol;
        this.refreshAll();
    }
};

/**
 *
 * @param {Number} row - Номер ряда
 */
DKTools.Sprite.Selectable.prototype.setBottomRow = function(row) {
    this.setTopRow(row - (this.getMaxPageRows() - 1));
};

/**
 *
 * @param {Number} col - Номер столбца
 */
DKTools.Sprite.Selectable.prototype.setBottomCol = function(col) {
    this.setTopCol(col - (this.getMaxPageCols() - 1));
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
 * @returns {Boolean}
 */
DKTools.Sprite.Selectable.prototype.setCursorRect = function(object, y, width, height) {
    return this._cursorSprite.setCursorRect(object, y, width, height);
};

// get methods

/**
 * Возвращает прямоугольник пункта по индексу
 *
 * @param {Number} index - Индекс
 * @returns {Rectangle} Прямоугольник пункта по индексу
 */
DKTools.Sprite.Selectable.prototype.getItemRectByIndex = function(index) {
    return this._itemRect(index);
};

/**
 * Возвращает прямоугольник пункта
 *
 * @param {Object} item - Пункт
 * @returns {Rectangle} Прямоугольник пункта
 */
DKTools.Sprite.Selectable.prototype.getItemRect = function(item) {
    return this.getItemRectByIndex(this.getItemIndex(item));
};

/**
 * Возвращает прямоугольник пункта для текста по индексу
 *
 * @param {Number} index - Индекс
 * @returns {Rectangle} Прямоугольник пункта для текста по индексу
 */
DKTools.Sprite.Selectable.prototype.getItemRectForTextByIndex = function(index) {
    const rect = this.getItemRectByIndex(index);
    rect.x += this._textPadding;
    rect.width -= this._textPadding * 2;
    return rect;
};

/**
 * Возвращает прямоугольник пункта для текста
 *
 * @param {Object} item - Пункт
 * @returns {Rectangle} Прямоугольник пункта для текста
 */
DKTools.Sprite.Selectable.prototype.getItemRectForText = function(item) {
    return this.getItemRectForTextByIndex(this.getItemIndex(item));
};

/**
 * Возвращает ширину пункта
 *
 * @returns {Number} Ширина пункта
 */
DKTools.Sprite.Selectable.prototype.getItemWidth = function() {
    if (_.isFunction(this._itemWidth)) {
        return this._itemWidth();
    }
    return this._itemWidth;
};

/**
 * Возвращает высоту пункта
 *
 * @returns {Number} Высота пункта
 */
DKTools.Sprite.Selectable.prototype.getItemHeight = function() {
    if (_.isFunction(this._itemHeight)) {
        return this._itemHeight();
    }
    return this._itemHeight;
};

/**
 * Возвращает пункт по индексу
 *
 * @param {Number} index - Индекс
 * @returns {Object | null} Пункт по индексу
 */
DKTools.Sprite.Selectable.prototype.getItem = function(index) {
    if (index >= 0) {
        return this._items[index];
    }
    return null;
};

/**
 * Возвращает выравнивание текста пункта по индексу
 *
 * @param {Number} index - Индекс
 * @returns {String} Выравнивание текста пункта по индексу
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
 * Возвращает выравнивание текста пункта
 *
 * @param {Object} item - Пункт
 * @returns {String} Выравнивание текста пункта
 */
DKTools.Sprite.Selectable.prototype.getItemAlign = function(item) {
    return this.getItemAlignByIndex(this.getItemIndex(item));
};

/**
 * Возвращает цвет текста пункта по индексу
 *
 * @param {Number} index - Индекс
 * @returns {String} Цвет текста пункта по индексу
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
 * Возвращает цвет текста пункта
 *
 * @param {Object} item - Пункт
 * @returns {String} Цвет текста пункта
 */
DKTools.Sprite.Selectable.prototype.getItemTextColor = function(item) {
    return this.getItemTextColorByIndex(this.getItemIndex(item));
};

/**
 * Возвращает шрифт текста пункта по индексу
 *
 * @param {Number} index - Индекс
 * @returns {Object} Шрифт пункта текста по индексу
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
 * Возвращает шрифт текста пункта
 *
 * @param {Object} item - Пункт
 * @returns {Object} Шрифт текста пункта
 */
DKTools.Sprite.Selectable.prototype.getItemFont = function(item) {
    return this.getItemFontByIndex(this.getItemIndex(item));
};

/**
 * Возвращает прозрачность рисования пункта по индексу
 *
 * @param {Number} index - Индекс
 * @returns {Number} Прозрачность рисования пункта по индексу
 */
DKTools.Sprite.Selectable.prototype.getItemPaintOpacityByIndex = function(index) {
    const item = this.getItem(index);
    const itemPaintOpacity = item.paintOpacity || this._itemPaintOpacity;
    if (_.isFunction(itemPaintOpacity)) {
        return itemPaintOpacity(index);
    }
    return itemPaintOpacity;
};

/**
 * Возвращает прозрачность рисования пункта
 *
 * @param {Object} item - Пункт
 * @returns {Number} Прозрачность рисования пункта
 */
DKTools.Sprite.Selectable.prototype.getItemPaintOpacity = function(item) {
    return this.getItemPaintOpacityByIndex(this.getItemIndex(item));
};

/**
 * Возвращает следующий индекс
 *
 * @param {Boolean} [wrap=false] - Циклический выбор
 * @returns {Number} Следующий индекс
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
 * Возвращает предыдущий индекс
 *
 * @param {Boolean} [wrap=false] - Циклический выбор
 * @returns {Number} Предыдущий индекс
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
 * Возвращает следующий пункт
 *
 * @param {Boolean} [wrap=false] - Циклический выбор
 * @return {Object | null}  Следующий пункт
 */
DKTools.Sprite.Selectable.prototype.getNextItem = function(wrap) {
    return this.getItem(this.getNextIndex(wrap));
};

/**
 * Возвращает предыдущий пункт
 *
 * @param {Boolean} [wrap=false] - Циклический выбор
 * @return {Object | null} Предыдущий пункт
 */
DKTools.Sprite.Selectable.prototype.getPrevItem = function(wrap) {
    return this.getItem(this.getPrevIndex(wrap));
};

/**
 * Возвращает текущий выбранный пункт
 *
 * @returns {Object | null} Текущий выбранный пункт
 */
DKTools.Sprite.Selectable.prototype.getCurrentItem = function() {
    return this.getItem(this._index);
};

/**
 * Возвращает индекс пункта
 *
 * @param {Object} item - Пункт
 * @returns {Number} Индекс пункта
 */
DKTools.Sprite.Selectable.prototype.getItemIndex = function(item) {
    return _.indexOf(this._items, item);
};

/**
 * Возвращает видимые пункты
 *
 * @returns {Object[]} Видимые пункты
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
 * Возвращает название пункта по индексу
 *
 * @param {Number} index - Индекс
 * @returns {String | null} Название пункта по индексу
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
 * Возвращает символ пункта по индексу
 *
 * @param {Number} index - Индекс
 * @returns {String | null} Символ пункта по индексу
 */
DKTools.Sprite.Selectable.prototype.getItemSymbol = function(index) {
    const item = this.getItem(index);
    return item ? item.symbol : null;
};

/**
 * Возвращает ext пункта по индексу
 *
 * @param {Number} index - Индекс
 * @returns {* | null} ext пункта по индексу
 */
DKTools.Sprite.Selectable.prototype.getItemExt = function(index) {
    var item = this.getItem(index);
    return item ? item.ext : null;
};

/**
 * Возвращает название текущего выбранного пункта
 *
 * @returns {String | null} Название текущего выбранного пункта
 */
DKTools.Sprite.Selectable.prototype.getCurrentItemName = function() {
    return this.getItemName(this._index);
};

/**
 * Возвращает символ текущего выбранного пункта
 *
 * @returns {String | null} Символ текущего выбранного пункта
 */
DKTools.Sprite.Selectable.prototype.getCurrentItemSymbol = function() {
    return this.getItemSymbol(this._index);
};

/**
 * Возвращает ext текущего выбранного пункта
 *
 * @returns {* | null} ext текущего выбранного пункта
 */
DKTools.Sprite.Selectable.prototype.getCurrentItemExt = function() {
    return this.getItemExt(this._index);
};

/**
 * Возвращает количество пунктов
 *
 * @returns {Number} Количество пунктов
 */
DKTools.Sprite.Selectable.prototype.getMaxItems = function() {
    return this._items.length;
};

/**
 * Возвращает максимальное количество рядов
 *
 * @returns {Number} Максимальное количество рядов
 */
DKTools.Sprite.Selectable.prototype.getMaxRows = function() {
    if (this.isFixedHorizontal()) {
        return 1;
    }
    return Math.max(1, Math.ceil(this.getMaxItems() / this.getMaxCols()));
};

/**
 * Возвращает максимальное количество столбцов
 *
 * @returns {Number} Максимальное количество столбцов
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
 * @param {Number} index - Индекс
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
 * @param {Object} item - Пункт
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
 * @param {Number} index - Индекс
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
 * @param {Object} item - Пункт
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
 * Возвращает true, если курсор может перемещаться
 *
 * @returns {Boolean} Курсор может перемещаться
 */
DKTools.Sprite.Selectable.prototype.isCursorMovable = function() {
    return this.isVisibleAndActive() && !this._cursorFixed &&
            !this._cursorAll && this.getMaxItems() > 0;
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
 * Возвращает true, если курсор виден
 *
 * @returns {Boolean} Курсор виден
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
 * Возвращает true, если пункт по индексу включен
 *
 * @param {Number} index - Индекс
 * @returns {Boolean} Пункт по индексу включен
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
 * Возвращает true, если текущий выбранный пункт включен
 *
 * @returns {Boolean} Текущий выбранный пункт включен
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
 * Возвращает true, если пункт по индексу виден
 *
 * @param {Number} index - Индекс
 * @returns {Boolean} Пункт по индексу виден
 */
DKTools.Sprite.Selectable.prototype.isItemVisibleByIndex = function(index) {
    return _.inRange(index, this.getTopIndex(), this.getBottomIndex() + 1);
};

/**
 * Возвращает true, если пункт виден
 *
 * @param {Object} item - Пункт
 * @returns {Boolean} Пункт виден
 */
DKTools.Sprite.Selectable.prototype.isItemVisible = function(item) {
    return this.isItemVisibleByIndex(this.getItemIndex(item));
};

// has methods

/**
 * Возвращает true, если пункт по индексу существует
 *
 * @param {Number} index - Индекс
 * @returns {Boolean}
 */
DKTools.Sprite.Selectable.prototype.hasItemByIndex = function(index) {
    return !!this.getItem(index);
};

/**
 * Возвращает true, если пункт существует
 *
 * @param {Object} item - Пункт
 * @returns {Boolean} Пункт существует
 */
DKTools.Sprite.Selectable.prototype.hasItem = function(item) {
    return this.hasItemByIndex(this.getItemIndex(item));
};

/**
 * Возвращает true, если пункты установлены
 *
 * @returns {Boolean} Пункты установлены
 */
DKTools.Sprite.Selectable.prototype.hasItems = function() {
    return this.getMaxItems() > 0;
};

/**
 * Возвращает true, если обработчик рисования пункта установлен
 *
 * @returns {Boolean} Обработчик рисования пункта установлен
 */
DKTools.Sprite.Selectable.prototype.hasDrawItemHandler = function() {
    return !!this._drawItemHandler;
};

// active methods

/**
 * Активирует объект
 *
 * @override
 */
DKTools.Sprite.Selectable.prototype.activate = function() {
    DKTools.Sprite.Button.prototype.activate.call(this);
    this.reselect();
};

/**
 * Деактивирует объект
 *
 * @override
 * @param {Boolean} [deselect]
 */
DKTools.Sprite.Selectable.prototype.deactivate = function(deselect) {
    DKTools.Sprite.Button.prototype.deactivate.call(this);
    if (deselect) {
        this.deselect();
    }
};

// cursor methods

/**
 * Обрабатывает перемещение курсора вниз
 *
 * @param {Boolean} [wrap=false] - Циклический выбор
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
 * Обрабатывает перемещение курсора вверх
 *
 * @param {Boolean} [wrap=false] - Циклический выбор
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
 * Обрабатывает перемещение курсора вправо
 *
 * @param {Boolean} [wrap=false] - Циклический выбор
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
 * Обрабатывает перемещение курсора влево
 *
 * @param {Boolean} [wrap=false] - Циклический выбор
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
 * Обратывает перемещение страницы вниз
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
 * Обрабатывает перемещение страницы вверх
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
 * Показывает курсор
 */
DKTools.Sprite.Selectable.prototype.showCursor = function() {
    this._cursorSprite.show(true);
};

/**
 * Скрывает курсор
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
 * Рисует все
 *
 * @override
 */
DKTools.Sprite.Selectable.prototype.drawAll = function() {
    DKTools.Sprite.Button.prototype.drawAll.call(this);
    this.drawAllItems();
};

/**
 * Рисует все пункты
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
 * Рисует пункт по индексу
 *
 * @param {Number} index - Индекс
 */
DKTools.Sprite.Selectable.prototype.drawItemByIndex = function(index) {
    if (this.hasDrawItemHandler()) {
        this._drawItemHandler(index);
    }
};

/**
 * Рисует пункт
 *
 * @param {Object} item - Пункт
 */
DKTools.Sprite.Selectable.prototype.drawItem = function(item) {
    this.drawItemByIndex(this.getItemIndex(item));
};

/**
 * Очищает пункт по индексу
 *
 * @param {Number} index - Индекс
 */
DKTools.Sprite.Selectable.prototype.clearItemByIndex = function(index) {
    this.clearRect(this.getItemRectByIndex(index));
};

/**
 * Очищает пункт
 *
 * @param {Object} item - Пункт
 */
DKTools.Sprite.Selectable.prototype.clearItem = function(item) {
    this.clearItemByIndex(this.getItemIndex(item));
};

/**
 * Перерисовывает пункт по индексу
 *
 * @param {Number} index - Индекс
 */
DKTools.Sprite.Selectable.prototype.redrawItemByIndex = function(index) {
    if (index >= 0 && this.isItemVisibleByIndex(index)) {
        this.clearItemByIndex(index);
        this.drawItemByIndex(index);
    }
};

/**
 * Перерисовывает пункт
 *
 * @param {Object} item - Пункт
 */
DKTools.Sprite.Selectable.prototype.redrawItem = function(item) {
    this.redrawItemByIndex(this.getItemIndex(item));
};

/**
 * Перерисовывает текущий выбранный пункт
 */
DKTools.Sprite.Selectable.prototype.redrawCurrentItem = function() {
    this.redrawItemByIndex(this._index);
};

// sound methods

/**
 * Проигрывает звук Ok
 */
DKTools.Sprite.Selectable.prototype.playOkSound = function() {
    SoundManager.playOk();
};

/**
 * Проигрывает звук Cancel
 */
DKTools.Sprite.Selectable.prototype.playCancelSound = function() {
    SoundManager.playCancel();
};

/**
 * Проигрывает звук Cursor
 */
DKTools.Sprite.Selectable.prototype.playCursorSound = function() {
    SoundManager.playCursor();
};

/**
 * Проигрывает звук Buzzer
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
 * Обновляет события типа select
 */
DKTools.Sprite.Selectable.prototype.updateSelectEvents = function() {
    this.updateEventsContainer('select');
};

// select methods

/**
 * Выбирает пункт по индексу
 *
 * @param {Number} index - Индекс
 */
DKTools.Sprite.Selectable.prototype.selectItemByIndex = function(index) {
    this.setupIndex(index);
    this.refreshAll();
    this.updateSelectEvents();
};

/**
 * Выбирает пункт
 *
 * @param {Object} item - Пункт
 */
DKTools.Sprite.Selectable.prototype.selectItem = function(item) {
    this.selectItemByIndex(this.getItemIndex(item));
};

/**
 * Выбирает пункт по символу
 *
 * @param {String} symbol - Символ
 */
DKTools.Sprite.Selectable.prototype.selectSymbol = function(symbol) {
    const index = Math.max(0, this.findSymbol(symbol));
    this.selectItemByIndex(index);
};

/**
 * Выбирает пункт по ext
 *
 * @param {*} ext
 */
DKTools.Sprite.Selectable.prototype.selectExt = function(ext) {
    const index = Math.max(0, this.findExt(ext));
    this.selectItemByIndex(index);
};

DKTools.Sprite.Selectable.prototype.deselect = function() {
    this.selectItemByIndex(-1);
};

DKTools.Sprite.Selectable.prototype.reselect = function() {
    this.selectItemByIndex(this._index);
};

/**
 * Выбирает следующий пункт
 *
 * @param {Boolean} [wrap=false] - Циклический выбор
 */
DKTools.Sprite.Selectable.prototype.selectNext = function(wrap) {
    const index = this.getNextIndex(wrap);
    if (index >= 0) {
        this.selectItemByIndex(index);
    }
};

/**
 * Выбирает предыдущий пункт
 *
 * @param {Boolean} [wrap=false] - Циклический выбор
 */
DKTools.Sprite.Selectable.prototype.selectPrev = function(wrap) {
    const index = this.getPrevIndex(wrap);
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
 * Удаляет пункт
 *
 * @param {Object} item - Пункт
 * @param {Boolean} [blockRefresh=false] - Блокировка вызова функции refreshAll
 */
DKTools.Sprite.Selectable.prototype.removeItem = function(item, blockRefresh) {
    if (this.hasItem(item)) {
        DKTools.Utils.Array.remove(this._items, item);
        if (!blockRefresh) {
            this.refreshAll();
        }
    }
};

/**
 * Удаляет пункты
 *
 * @param {Object[]} items - Пункты
 * @param {Boolean} [blockRefresh=false] - Блокировка вызова функции refreshAll
 */
DKTools.Sprite.Selectable.prototype.removeItems = function(items, blockRefresh) {
    _.forEach(items, function(item) {
        this.removeItem(item, true);
    }.bind(this));
    if (!blockRefresh) {
        this.refreshAll();
    }
};

/**
 * Вставляет пункт
 *
 * @param {Object} item - Пункт
 * @param {Number} [index=0] - Позиция
 * @param {Boolean} [blockRefresh=false] - Блокировка вызова функции refreshAll
 */
DKTools.Sprite.Selectable.prototype.insertItem = function(item, index, blockRefresh) {
    DKTools.Utils.Array.insert(this._items, this._checkItem(item), index);
    if (!blockRefresh) {
        this.refreshAll();
    }
};

/**
 * Вставляет пункты
 *
 * @param {Object[]} items - Пункты
 * @param {Number} [index=0] - Позиция
 * @param {Boolean} [blockRefresh=false] - Блокировка вызова функции refreshAll
 */
DKTools.Sprite.Selectable.prototype.insertItems = function(items, index, blockRefresh) {
    items = _.reverse(items);
    _.forEach(items, function(item) {
        this.insertItem(item, index, true);
    }.bind(this));
    if (!blockRefresh) {
        this.refreshAll();
    }
};

/**
 * Добавляет пункт в конец
 *
 * @param {Object} item - Пункт
 * @param {Boolean} [blockRefresh=false] - Блокировка вызова функции refreshAll
 */
DKTools.Sprite.Selectable.prototype.addItem = function(item, blockRefresh) {
    this.insertItem(item, this.getMaxItems() - 1, true);
    if (!blockRefresh) {
        this.refreshAll();
    }
};

/**
 * Добавляет пункты в конец
 *
 * @param {Object[]} items - Пункты
 * @param {Boolean} [blockRefresh=false] - Блокировка вызова функции refreshAll
 */
DKTools.Sprite.Selectable.prototype.addItems = function(items, blockRefresh) {
    _.forEach(items, function(item) {
        this.addItem(item, true);
    }.bind(this));
    if (!blockRefresh) {
        this.refreshAll();
    }
};

/**
 * Заменяет пункт
 *
 * @param {Object} item - Пункт
 * @param {Number} [index=0] - Позиция
 * @param {Boolean} [blockRefresh=false] - Блокировка вызова функции refreshAll
 */
DKTools.Sprite.Selectable.prototype.replaceItem = function(item, index, blockRefresh) {
    this._items[index || 0] = this._checkItem(item);
    if (!blockRefresh) {
        this.refreshAll();
    }
};

// find methods

/**
 * Возвращает индекс пункта по символу
 *
 * @param {Symbol} symbol - Символ
 * @returns {Number} Индекс пункта по символу
 */
DKTools.Sprite.Selectable.prototype.findSymbol = function(symbol) {
    return _.findIndex(this._items, { symbol: symbol });
};

/**
 * Возвращает индекс пункта по ext
 *
 * @param {*} ext -
 * @returns {Number} Индекс пункта по ext
 */
DKTools.Sprite.Selectable.prototype.findExt = function(ext) {
    return _.findIndex(this._items, { ext: ext });
};

// scroll methods

/**
 * Сбрасывает прокручивание
 */
DKTools.Sprite.Selectable.prototype.resetScroll = function() {
    if (this._index !== 0) {
        this.selectItemByIndex(0);
    }
};

/**
 * Прокручивает вниз
 */
DKTools.Sprite.Selectable.prototype.scrollDown = function() {
    if (this.getTopRow() + 1 < this.getMaxRows()) {
        this.cursorDown();
    }
};

/**
 * Прокручивает вверх
 */
DKTools.Sprite.Selectable.prototype.scrollUp = function() {
    if (this.getTopRow() > 0) {
        this.cursorUp();
    }
};

/**
 * Прокручивает вправо
 */
DKTools.Sprite.Selectable.prototype.scrollRight = function() {
    if (this.getTopCol() + 1 < this.getMaxItems()) {
        this.cursorRight();
    }
};

/**
 * Прокручивает влево
 */
DKTools.Sprite.Selectable.prototype.scrollLeft = function() {
    if (this.getTopCol() > 0) {
        this.cursorLeft();
    }
};

// process methods

/**
 * Выполняет все
 *
 * @override
 */
DKTools.Sprite.Selectable.prototype.processAll = function() {
    DKTools.Sprite.Button.prototype.processAll.call(this);
    this.processCursorMove();
    this.processHandling();
};

/**
 * Выполняет движение курсора
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
 * Обновляет все
 *
 * @override
 */
DKTools.Sprite.Selectable.prototype.updateAll = function() {
    DKTools.Sprite.Button.prototype.updateAll.call(this);
    this.updateCursor();
};

/**
 * Обновляет курсор
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
    } else if (this.isCursorVisible()) {
        const rect = this.getItemRectByIndex(this._index);
        this.setCursorRect(rect);
    } else {
        this.setCursorRect(Rectangle.emptyRectangle);
    }
};





//===========================================================================
// DKTools Viewport
//===========================================================================

DKTools.Viewport.prototype = Object.create(DKTools.Sprite.prototype);
DKTools.Viewport.prototype.constructor = DKTools.Viewport;

// properties

Object.defineProperties(DKTools.Viewport.prototype, {

    /**
     * Форма маски
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
 * Возвращает стандартную форму маски
 *
 * @return {String} Стандартная форма маски
 */
DKTools.Viewport.prototype.standardMaskShape = function() {
    return 'rect';
};

// setup methods

/**
 * Устанавливает все параметры спрайта
 *
 * @override
 *
 * @param {Object} [object] - Параметры
 *
 * @param {String} [object.maskShape] - Форма маски
 *
 * @see DKTools.Sprite.prototype.setupAll
 */
DKTools.Viewport.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.Sprite.prototype.setupAll.call(this, object);
    this.setupMaskShape(object.maskShape);
};

/**
 * Устанавливает форму маски
 *
 * @param {String} [shape] - Форма маски
 */
DKTools.Viewport.prototype.setupMaskShape = function(shape) {
    /**
     * @readonly
     * @private
     * @type {String}
     */
    this._maskShape = shape || this.standardShape();
};

// set methods

/**
 * Изменяет все параметры спрайта
 * Возвращает количество измененных параметров
 *
 * @override
 *
 * @param {Object} [object] - Объект типа {}
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 * @param {Boolean} [activate] - Активировать спрайт
 *
 * @param {String} [object.maskShape] - Форма маски
 *
 * @see DKTools.Sprite.prototype.setAll
 *
 * @return {Number} Количество измененных параметров
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
 * Изменяет форму маски
 * Возвращает true, если изменение произошло
 *
 * @param {String} [shape] - Форма маски
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
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
 * Создает все объекты
 *
 * @override
 */
DKTools.Viewport.prototype.createAll = function() {
    DKTools.Sprite.prototype.createAll.call(this);
    this.createMask();
};

/**
 * Создает маску
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

// get methods

/**
 * @returns {PIXI.Graphics}
 */
DKTools.Viewport.prototype.getRectMask = function() {
    let mask = new PIXI.Graphics();
    mask.beginFill();
    mask.drawRect(this.x, this.y, this.bitmap.width, this.bitmap.height);
    mask.endFill();
    return mask;
};

/**
 * @returns {PIXI.Graphics}
 */
DKTools.Viewport.prototype.getCircleMask = function() {
    let mask = new PIXI.Graphics();

    mask.beginFill();

    let radius = this.bitmap.width / 2;
    let centerX = this.x + radius;
    let centerY = this.y + radius;

    mask.drawCircle(centerX, centerY, radius);
    mask.endFill();
    return mask;
};

/**
 * @returns {PIXI.Graphics}
 */
DKTools.Viewport.prototype.getEllipseMask = function() {
    let mask = new PIXI.Graphics();
    mask.beginFill();

    let width = this.bitmap.width / 2;
    let height = this.bitmap.height / 2;
    let centerX = this.x + width;
    let centerY = this.y + height;

    mask.drawEllipse(centerX, centerY, width, height);
    mask.endFill();
    return mask;
};

/**
 * @returns {PIXI.Graphics | null}
 */
DKTools.Viewport.prototype.getCustomMask = function(maskShape) {
    // to be overriden by plugins
    return null;
};





//===========================================================================
// DKTools Layout
//===========================================================================

DKTools.Layout.prototype = Object.create(DKTools.Sprite.prototype);
DKTools.Layout.prototype.constructor = DKTools.Layout;

// properties

Object.defineProperties(DKTools.Layout.prototype, {

    /**
     * Количество столбцов
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
     * @readonly
     * @type {DKTools.Sprite[]}
     * @memberOf DKTools.Layout.prototype
     */
    items: {
        get: function() {
            return this._items;
        },
        configurable: true
    },

    /**
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
     * @readonly
     * @type {Boolean}
     * @memberOf DKTools.Layout.prototype
     */
    reversed: {
        get: function () {
            return this._reversed;
        },
        configurable: true
    }

});

// initialize methods

/**
 * Инициализирует объект класса
 *
 * @override
 *
 * @param {Number | Object} [object] - Координата X или Объект типа {}
 * @param {Number} [y] - Координата Y
 *
 * @see object properties: DKTools.Sprite.prototype.initialize
 */
DKTools.Layout.prototype.initialize = function(object, y) {
    DKTools.Sprite.prototype.initialize.call(this, object, y);
};

// _clear methods

/**
 * Очищает все данные спрайта
 *
 * @private
 * @override
 */
DKTools.Layout.prototype._clearAll = function() {
    DKTools.Sprite.prototype._clearAll.call(this);
    this._clearItems();
};

/**
 * Очищает список элементов контейнера
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
 * Очищает список элементов контейнера
 *
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 */
DKTools.Layout.prototype.clearItems = function(blockStart) {
    this.removeAllItemsAsChildren();
    this._clearItems();
    if (!blockStart) {
        this.start();
    }
};

// standard methods

/**
 * Возвращает стандартное значение активности
 *
 * @override
 * @returns {Boolean} Стандартное значение активности
 */
DKTools.Layout.prototype.standardActive = function() {
    return false;
};

/**
 * Возвращает стандартное количество столбцов
 *
 * @returns {Number} Стандартное количество столбцов
 */
DKTools.Layout.prototype.standardMaxCols = function() {
    return 1;
};

/**
 * Возвращает стандартное значение отступа по оси X
 *
 * @returns {Number} Стандартное значение отступа по оси X
 */
DKTools.Layout.prototype.standardHorizontalSpacing = function() {
    return 12;
};

/**
 * Возвращает стандартное значение отступа по оси Y
 *
 * @returns {Number} Стандартное значение отступа по оси Y
 */
DKTools.Layout.prototype.standardVerticalSpacing = function() {
    return this.getLineHeight() / 2;
};

/**
 * Возвращает стандартный список элементов контейнера
 *
 * @returns {Array} Стандартный список элементов контейнера
 */
DKTools.Layout.prototype.standardItems = function() {
    return [];
};

/**
 * Возвращает стандартную высоту ряда
 *
 * @returns {Function}
 */
DKTools.Layout.prototype.standardRowHeight = function() {
    return function(row) {
        const items = this.getItemsInRow(row);
        return _.max(_.map(items, 'height'));
    }.bind(this);
};

/**
 * Возвращает стандартную ширину столбца
 *
 * @returns {Function}
 */
DKTools.Layout.prototype.standardColWidth = function() {
    return function(col) {
        const items = this.getItemsInCol(col);
        return _.max(_.map(items, 'width'));
    }.bind(this);
};

/**
 * Возвращает стандартное обратное расположение элементов
 *
 * @returns {Boolean} Стандартное обратное расположение элементов
 */
DKTools.Layout.prototype.standardReversed = function() {
    return false;
};

// setup methods

/**
 * Устанавливает все параметры спрайта
 *
 * @override
 *
 * @param {Object} [object] - Параметры
 *
 * @param {Number} [object.maxCols] - Количество столбцов
 * @param {Array} [object.items] - Массив с элементами
 * @param {Function | Number} [object.rowHeight] - Высота ряда
 * @param {Function | Number} [object.colWidth] - Ширина столбца
 * @param {Number} [object.horizontalSpacing] - Отступ между элементами контейнера по оси X
 * @param {Number} [object.verticalSpacing] - Отступ между элементами контейнера по оси Y
 * @param {Boolean} [object.reversed] - Обратное расположение элементов
 *
 * @see DKTools.Sprite.prototype.setupAll
*/
DKTools.Layout.prototype.setupAll = function(object) {
	object = object || {};
	DKTools.Sprite.prototype.setupAll.call(this, object);
    this.setupMaxCols(object.maxCols);
    this.setupSpacing(object.horizontalSpacing, object.verticalSpacing);
    this.setupItems(object.items);
    this.setupRowHeight(object.rowHeight);
    this.setupColWidth(object.colWidth);
    this.setupReversed(object.reversed);
};

/**
 * Устанавливает количество столбцов
 *
 * @param {Number} [cols] - Количество столбцов
 */
DKTools.Layout.prototype.setupMaxCols = function(cols) {
    /**
     * Количество столбцов
     *
     * @private
     * @readonly
     * @type {Number}
     */
    this._maxCols = (cols == null ? this.standardMaxCols() : cols);
};

/**
 * Устанавливает отступ между элементами контейнера по оси X
 *
 * @param {Number} [padding] - Отступ между элементами контейнера по оси X
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
 * Устанавливает отступ между элементами контейнера по оси Y
 *
 * @param {Number} [padding] - Отступ между элементами контейнера по оси Y
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
 * Устанавливает отступ между элементами контейнера по оси X и Y
 *
 * @param {Number} [xPadding] - Отступ между элементами контейнера по оси X
 * @param {Number} [yPadding] - Отступ между элементами контейнера по оси Y
 */
DKTools.Layout.prototype.setupSpacing = function(horizontalSpacing, verticalSpacing) {
    this.setupHorizontalSpacing(horizontalSpacing);
    this.setupVerticalSpacing(verticalSpacing);
};

/**
 * Устанавливает элементы контейнера
 *
 * @param {Array} items - Массив с элементами контейнера
 */
DKTools.Layout.prototype.setupItems = function(items) {
    items = items || this.standardItems();
    _.forEach(items, function(item) {
        this._items.push(item);
    }.bind(this));
};

/**
 * Устанавливает высоту ряда
 *
 * @param {Function | Number} [rowHeight] - Высота ряда
 */
DKTools.Layout.prototype.setupRowHeight = function(rowHeight) {
    /**
     * Высота ряда
     *
     * @private
     * @readonly
     * @type {Function | Number}
     */
    this._rowHeight = rowHeight || this.standardRowHeight();
};

/**
 * Устанавливает ширину столбца
 *
 * @param {Function | Number} [colWidth] - Ширина столбца
 */
DKTools.Layout.prototype.setupColWidth = function(colWidth) {
    /**
     * Высота столбца
     *
     * @private
     * @readonly
     * @type {Function | Number}
     */
    this._colWidth = colWidth || this.standardColWidth();
};

/**
 *
 *
 * @param {Boolean} [reversed] -
 */
DKTools.Layout.prototype.setupReversed = function(reversed) {
    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._reversed = (reversed == null ? this.standardReversed() : reversed);
};

// set methods

/**
 * Изменяет все параметры спрайта
 * Возвращает количество измененных параметров
 *
 * @override
 *
 * @param {Object} [object] - Параметры
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @param {Number} [object.maxCols] - Количество столбцов
 * @param {Number} [object.horizontalSpacing] - Горизонтальный интервал между элементами
 * @param {Number} [object.verticalSpacing] - Вертикальный интервал между элементами контейнера
 * @param {Array} [object.items] - Элементы
 * @param {Function | Number} [object.rowHeight] - Высота ряда
 * @param {Function | Number} [object.colWidth] - Ширина столбца
 * @param {Boolean} [object.reversed] -
 *
 * @see DKTools.Sprite.prototype.setupAll
 *
 * @return {Number} Количество измененных параметров
*/
DKTools.Layout.prototype.setAll = function(object, blockStart) {
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
    if (this.setReversed(object.reversed, block)) {
        changed++;
    }
	if (changed && !blockStart) {
        this.start();
    }
	return changed;
};

/**
 * Изменяет количество столбцов
 * Возвращает true, если изменение произошло
 *
 * @param {Number} [cols] - Количество столбцов
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
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
 * Изменяет отступ между элементами контейнера по оси X
 * Возвращает true, если изменение произошло
 *
 * @param {Number} [scacing] - Отступ между элементами контейнера по оси X
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Layout.prototype.setHorizontalSpacing = function(scacing, blockStart) {
    if (this._horizontalSpacing === scacing) {
        return false;
    }
    let lastSpacing = this._horizontalSpacing;
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
 * Изменяет отступ между элементами контейнера по оси Y
 * Возвращает true, если изменение произошло
 *
 * @param {Number} [scacing] - Отступ между элементами контейнера по оси Y
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Layout.prototype.setVerticalSpacing = function(scacing, blockStart) {
    if (this._verticalSpacing === scacing) {
        return false;
    }
    let lastSpacing = this._verticalSpacing;
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
 * Изменяет отступ между элементами контейнера по оси X и Y
 * Возвращает количество измененных параметров
 *
 * @param {Number} [horizontalSpacing] - Отступ между элементами контейнера по оси X
 * @param {Number} [verticalSpacing] - Отступ между элементами контейнера по оси Y
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Number} Количество измененных параметров
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
 * Изменяет список элементов контейнера
 * Возвращает true, если изменение произошло
 *
 * @param {Array} [items] - Массив элементов контейнера
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Layout.prototype.setItems = function(items, blockStart) {
    if (this._items == items) {
        return false;
    }
    this.removeItemsAsChildren();
    this.setupItems(items);
    if (!blockStart) {
        this.start();
    }
    return true;
};

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
 *
 * Возвращает true, если изменение произошло
 *
 * @param {Boolean} [reversed] -
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Layout.prototype.setReversed = function(reversed, blockStart) {
    if (this._reversed === reversed) {
        return false;
    }
    let lastReversed = this._reversed;
    this.setupReversed(reversed);
    if (this._reversed === lastReversed) {
        return false;
    }
    if (!blockStart) {
        this.start();
    }
    return true;
};

// start methods

/**
 * Запускает работу объекта
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
 * Если установлена графика, то загружает изображение из названия файла графики,
 * иначе создает Bitmap шириной _bitmapWidth и высотой _bitmapHeight
 *
 * @override
 */
DKTools.Layout.prototype.createBitmap = function() {
    if (this.hasGraphicName()) {
        this._loadGraphic();
    } else if (!this.isFixedBitmap()) {
        this.bitmap = new Bitmap(this.getLayoutWidth(), this.getLayoutHeight());
    }
};

// remove methods

DKTools.Layout.prototype.removeAllChildren = function() {
    DKTools.Sprite.prototype.removeAllChildren.call(this);
    this.removeAllItemsAsChildren();
};

/**
 * Удаляет элементы контейнера из обработки
 */
DKTools.Layout.prototype.removeAllItemsAsChildren = function() {
    this.removeChild.apply(this, this._items);
};

/**
 * Удаляет элемент из контейнера
 *
 * @param {DKTools.Sprite | *} item - Элемент
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
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

DKTools.Layout.prototype.removeItems = function(items, blockStart) {
    _.forEach(items, function(item) {
        this.removeItem(item, true);
    }.bind(this));
    if (!blockStart) {
        this.start();
    }
};

DKTools.Layout.prototype.removeItemByIndex = function(index, blockStart) {
    this.removeItem(this.getItem(index), blockStart);
};

// add methods

/**
 * Добавляет дочерние объекты в обработку
 *
 * @override
 */
DKTools.Layout.prototype.addAllChildren = function() {
    DKTools.Sprite.prototype.addAllChildren.call(this);
    this.addAllItemsAsChildren();
};

/**
 * Добавляет элементы контейнера в обработку
 */
DKTools.Layout.prototype.addAllItemsAsChildren = function() {
    this.addChild.apply(this, this._items);
};

/**
 * Добавляет элемент в контейнер
 *
 * @param {DKTools.Sprite | *} item - Элемент
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 */
DKTools.Layout.prototype.addItem = function(item, blockStart) {
    if (!item) {
        return;
    }
    this._items.push(item);
    if (!blockStart) {
        this.start();
    }
};

/**
 * Добавляет элементы
 *
 * @param {DKTools.Sprite[] | *} items - Элементы
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 */
DKTools.Layout.prototype.addItems = function(items, blockStart) {
    _.forEach(items, function(item) {
        this.addItem(item, true);
    }.bind(this));
    if (!blockStart) {
        this.start();
    }
};

DKTools.Layout.prototype.addCol = function() {
    this.setMaxCols(this.getMaxCols() + 1);
};

// get methods

/**
 * @returns {Number}
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
 *
 * @returns {Number}
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
 * Возвращает максимальное количество рядов
 *
 * @return {Number} Максимальное количество рядов
 */
DKTools.Layout.prototype.getMaxRows = function() {
    return Math.max(1, Math.ceil(this.getMaxItems() / this.getMaxCols()));
};

/**
 * Возвращает максимальное количество столбцов
 *
 * @return {Number} Максимальное количество столбцов
 */
DKTools.Layout.prototype.getMaxCols = function() {
    return this._maxCols;
};

/**
 * Возвращает все элементы контейнера
 *
 * @return {Array} Все элементы контейнера
 */
DKTools.Layout.prototype.getItems = function() {
    if (this.isReversed()) {
        return _.reverse(_.clone(this._items));
    }
    return this._items;
};

DKTools.Layout.prototype.getMaxItems = function() {
    return this._items.length;
};

/**
 * Возвращает индекс элемента в контейнере
 *
 * @param {DKToolsSprite} item
 * @return {Number} Индекс элемента в контейнере
 */
DKTools.Layout.prototype.getItemIndex = function(item) {
    return _.indexOf(this.getItems(), item);
};

DKTools.Layout.prototype.getItem = function(index) {
    return this.getItems()[index];
};

/**
 * Возвращает массив с элементами ряда
 *
 * @param {Number} row - Номер ряда
 * @return {Array} Массив с элементами ряда
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
 * Возвращает массив с элементами столбца
 *
 * @param {Number} col - Номер столбца
 * @return {Array} Массив с элементами столбца
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
 *
 * @param {Number} row - Ряд
 * @returns {Number}
 */
DKTools.Layout.prototype.getRowHeight = function(row) {
    if (_.isFunction(this._rowHeight)) {
        return this._rowHeight(row);
    }
    return this._rowHeight;
};

/**
 * @param {Number} col - Столбец
 * @returns {Number}
 */
DKTools.Layout.prototype.getColWidth = function(col) {
    if (_.isFunction(this._colWidth)) {
        return this._colWidth(col);
    }
    return this._colWidth;
};

/**
 * Возвращает координату Y начала ряда
 *
 * @param {Number} row - Ряд
 * @return {Number} Координату Y начала ряда
 */
DKTools.Layout.prototype.getRowY = function(row) {
    let y = 0;
    for(let i = 1; i < row; i++) {
        y += this.getRowHeight(i) + this._verticalSpacing;
    }
    return y;
};

/**
 * Возвращает координату X начала столбца
 *
 * @param {Number} col - Номер столбца
 * @return {Number} Координату X начала столбца
 */
DKTools.Layout.prototype.getColX = function(col) {
    let x = 0;
    for(let i = 1; i < col; i++) {
        x += this.getColWidth(i) + this._horizontalSpacing;
    }
    return x;
};

/**
 * Возвращает номер строки элемента контейнера
 *
 * @param {DKTools.Sprite} item - Элемент контейнера
 * @return {Number} Номер строки элемента контейнера
 */
DKTools.Layout.prototype.getItemRow = function(item) {
    const index = this.getItemIndex(item);
    if (index >= 0) {
        return Math.floor(index / this.getMaxCols()) + 1;
    }
    return -1;
};

/**
 * Возвращает номер столбца элемента контейнера
 *
 * @param {DKTools.Sprite} item - Элемент контейнера
 * @return {Number} Номер столбца элемента контейнера
 */
DKTools.Layout.prototype.getItemCol = function(item) {
    const index = this.getItemIndex(item);
    if (index >= 0) {
        return (index % this.getMaxCols()) + 1;
    }
    return -1;
};

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
 * Перемещает элемент
 *
 * @param {Number} index
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Координата X или Позиция
 * @param {Number} [y] - Координата Y
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number | String} [object.y] - Координата Y
 *
 * @see DKTools.Base.prototype.move
 */
DKTools.Layout.prototype.moveItem = function(index, object, y) {
    const item = this.getItem(index);
    if (item) {
        item.move(object, y);
    }
};

// reverse methods

/**
 * Меняет порядок расположения элементов на обратный
 */
DKTools.Layout.prototype.reverse = function() {
    this.setReversed(!this.isReversed());
};

// is methods

/**
 * Возвращает true, если контейнер не содержит элементов
 *
 * @return {Boolean} Контейнер не содержит элементов
 */
DKTools.Layout.prototype.isEmpty = function() {
    return this.getMaxItems() === 0;
};

/**
 * Возвращает true, если спрайт готов
 *
 * @override
 * @return {Boolean} Спрайт готов
*/
DKTools.Layout.prototype.isReady = function() {
    return !this.isEmpty() && _.every(this._items, function(item) {
        return item.isReady();
    });
};

/**
 *
 *
 * @return {Boolean}
 */
DKTools.Layout.prototype.isReversed = function() {
    return this._reversed;
};

DKTools.Layout.prototype.isVertical = function() {
    return this.getMaxCols() === 1;
};

DKTools.Layout.prototype.isHorizontal = function() {
    return this.getMaxRows() === 1;
};

// has methods

DKTools.Layout.prototype.hasItems = function() {
    return !this.isEmpty();
};

DKTools.Layout.prototype.hasItem = function(item) {
    return this.getItemIndex(item) >= 0;
};

// items methods

/**
 * Выполняет callback функцию для каждого элемента
 *
 * @param {Function} callback - Функция обработки для каждого элемента контейнера
 * @param {Boolean} [start] - Вызов функции start контейнера
 */
DKTools.Layout.prototype.iterateItems = function(callback, start) {
    _.forEach(this.getItems(), callback);
    if (start) {
        this.start();
    }
};

/**
 * Вызывает функцию start у всех элементов контейнера
 *
 * @param {Boolean} [blockStart] - Блокировка вызова функции start контейнера
*/
DKTools.Layout.prototype.startItems = function(activate, blockStart) {
    const callback = function(item) {
        item.start(activate);
    };
	this.iterateItems(callback, !blockStart);
};

/**
 * @param {DKTools.Sprite | *} item
 * @param {Number} width
 * @param {Number} height
 * @param {Boolean} [blockStart]
 */
DKTools.Layout.prototype.resizeItem = function(item, width, height, blockStart) {
    if (this.hasItem(item) && item.resize(width, height)) {
        if (!blockStart) {
            this.start();
        }
    }
};

DKTools.Layout.prototype.resizeItemByIndex = function(index, width, height, blockStart) {
    this.resizeItem(this.getItem(index), width, height, blockStart);
};

/**
 * Вызывает функцию resize у всех элементов контейнера
 *
 * @param {Number} [width] - Высота Bitmap
 * @param {Number} [height] - Ширина Bitmap
 * @param {Boolean} [blockStart] - Блокировка вызова функции start контейнера
*/
DKTools.Layout.prototype.resizeItems = function(width, height, blockStart) {
    const callback = function(item) {
        this.resizeItem(item, width, height, true);
    }.bind(this);
	this.iterateItems(callback, !blockStart);
};

/**
 * Вызывает функцию activate у всех элементов контейнера
 *
 * @param {Boolean} [start] - Вызов функции start контейнера
*/
DKTools.Layout.prototype.activateItems = function(start) {
    const callback = function(item) {
        item.activate();
    };
    this.iterateItems(callback, start);
};

/**
 * Вызывает функцию deactivate у всех элементов контейнера
 *
 * @param {Boolean} [start] - Вызов функции start контейнера
*/
DKTools.Layout.prototype.deactivateItems = function(start) {
    const callback = function(item) {
        item.deactivate();
    };
    this.iterateItems(callback, start);
};

/**
 * Вызывает функцию show у всех элементов контейнера
 *
 * @param {Boolean} [activate] - Активировать элементы
 * @param {Boolean} [start] - Вызов функции start контейнера
 */
DKTools.Layout.prototype.showItems = function(activate, start) {
    const callback = function(item) {
        item.show(activate);
    };
    this.iterateItems(callback, start);
};

/**
 * Вызывает функцию show у всех элементов контейнера
 *
 * @param {Boolean} [blockDeactivate] - Блокировать деактивацию элементов
 * @param {Boolean} [start] - Вызов функции start контейнера
 */
DKTools.Layout.prototype.hideItems = function(blockDeactivate, start) {
    const callback = function(item) {
        item.hide(blockDeactivate);
    };
    this.iterateItems(callback, start);
};

// align methods

/**
 * Выравнивает элемент по ширине и высоте
 *
 * @param {DKToolsSprite | Number} object - Элемент или его номер
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
 * Выравнивает все элементы строки по высоте
 *
 * @param {Number} row - Номер строки
 */
DKTools.Layout.prototype.alignRow = function(row) {
    const items = this.getItemsInRow(row);
    _.forEach(items, this.alignItem.bind(this));
};

/**
 * Выравнивает все элементы столбца по ширине
 *
 * @param {Number} col - Номер столбца
 */
DKTools.Layout.prototype.alignCol = function(col) {
    const items = this.getItemsInCol(col);
    _.forEach(items, this.alignItem.bind(this));
};

/**
 * Выравнивает все элементы контейнера по ширине и высоте
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
 * Обновляет все
 *
 * @override
 */
DKTools.Layout.prototype.updateAll = function() {
    DKTools.Sprite.prototype.updateAll.call(this);
    this.updateLayout();
};

/**
 * Обновляет расположение элементов в контейнере
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
// DKTools Window
//===========================================================================

DKTools.Window.prototype = Object.create(Window_Base.prototype);
DKTools.Utils.mixin(DKTools.Window.prototype, DKTools.Base.prototype);
DKTools.Window.prototype.constructor = DKTools.Window;

/**
 * Счетчик созданных окон
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
     * Реальная ширина окна (без учета масштабирования)
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
     * Реальная высота окна (без учета масштабирования)
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
     * Ширина окна (с учетом масштабирования)
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
     * Высота окна (с учетом масштабирования)
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
     * Прозрачность окна
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
     * Прозрачность рамки окна
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
     * Прозрачность окна
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
     * Тон окна
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
     * Спрайт контента окна
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
     * Спрайт рамки окна
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
     * Спрайт заднего фона окна
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
     * Bitmap спрайта контента
     * Для поддержки функций из DKTools.Base
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
 * Инициализирует объект класса
 *
 * @override
 *
 * @param {Number | Object} [object] - Координата X
 * @param {Number} [y] - Координата Y
 * @param {Number} [width] - Ширина окна
 * @param {Number} [height] - Высота окна
 *
 * @see DKTools.Base.prototype.initialize
 */
DKTools.Window.prototype.initialize = function(object, y, width, height) {
    PIXI.Container.call(this);
    DKTools.Base.prototype.initialize.call(this, object, y, width, height);
    DKTools.Window._counter++;
};

// _clear methods

/**
 * Очищает все данные окна
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
 * @private
 */
DKTools.Window.prototype._clearColorTone = function() {
    /**
     * @private
     * @readonly
     * @type {Number[]}
     */
    this._colorTone = this.standardColorTone();
};

/**
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
 * Создает необходимые объекты
 *
 * @private
 * @override
 */
DKTools.Window.prototype._createAll = function() {
    DKTools.Base.prototype._createAll.call(this);
    this._createAllParts();
    this._createWindowskin();
};

/**
 * Создает все части окна
 *
 * @private
 * @override
 */
DKTools.Window.prototype._createAllParts = function() {
    this._createSpriteContainer();
    this._createBackSprite();
    this._createFrameSprite();
    this._createPauseSignSprite();
};

/**
 * Создает контейнер спрайтов
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
 * Создает спрайт заднего фона окна
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
 * Создает спрайт рамки окна
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
 * Создает спрайт знака паузы
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
 * Создает обложку окна
 *
 * @private
 */
DKTools.Window.prototype._createWindowskin = function() {
    this.windowskin = this.loadWindowskin();
};

// _setup methods

/**
 *
 * @private
 * @override
 */
DKTools.Window.prototype._setupEvents = function() {
    DKTools.Base.prototype._setupEvents.call(this);
    if (this.needsCreateArrowSprites()) {
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
 * Добавляет объекты в обработку
 *
 * @private
 * @override
 */
DKTools.Window.prototype._addAllChildren = function() {
    DKTools.Base.prototype._addAllChildren.call(this);
    this._addAllParts();
};

/**
 * Добавляет все части окна в обработку
 *
 * @private
 */
DKTools.Window.prototype._addAllParts = function() {
    this._addSpriteContainer();
    this._addPauseSignSprite();
};

/**
 * Добавляет контейнер спрайтов в обработку
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
 * Добавляет спрайт контента в обработку
 *
 * @private
 */
DKTools.Window.prototype._addContentsSprite = function() {
    if (this.hasContentsSprite()) {
        this.addChild(this._windowContentsSprite);
    }
};

/**
 * Добавляет спрайт знака паузы в обработку
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
 * @returns {Number}
 */
DKTools.Window.prototype.standardOpenness = function() {
    return 255;
};

/**
 * @returns {number}
 */
DKTools.Window.prototype.standardMargin = function() {
    return 4;
};

/**
 * @returns {Number[]}
 */
DKTools.Window.prototype.standardColorTone = function() {
    return [0, 0, 0];
};

/**
 * @returns {Point}
 */
DKTools.Window.prototype.standardOrigin = function() {
    return new Point();
};

/**
 *
 * @returns {DKTools.Sprite}
 */
DKTools.Window.prototype.standardContentsSprite = function() {
    return new DKTools.Sprite();
};

/**
 * Возвращает стандартное значение коодинаты X для спрайта
 *
 * @return {Number} Стандартное значение коодинаты X для спрайта
*/
DKTools.Window.prototype.standardChildX = function() {
	return this.standardPadding();
};

/**
 * Возвращает стандартное значение коодинаты Y для спрайта
 *
 * @return {Number} Стандартное значение коодинаты Y для спрайта
*/
DKTools.Window.prototype.standardChildY = function() {
	return this.standardPadding();
};

/**
 * Возвращает стандартную позицию для спрайта
 *
 * @return {Point} Стандартная позиция для спрайта
 */
DKTools.Window.prototype.standardChildPosition = function() {
    return new Point(this.standardChildX(), this.standardChildY());
};

/**
 * Возвращает стандартную позицию для содержимого окна
 *
 * @returns {Point} Стандартная позиция для содержимого окна
 */
DKTools.Window.prototype.standardContentsPosition = function() {
    return this.standardChildPosition();
};

/**
 * Возвращает стандартную видимость заднего фона окна
 *
 * @return {Boolean} Стандартная видимость заднего фона окна
 */
DKTools.Window.prototype.standardBackVisible = function() {
    return true;
};

/**
 * Возвращает стандартную видимость рамки окна
 *
 * @return {Boolean} Стандартная видимость рамки окна
 */
DKTools.Window.prototype.standardFrameVisible = function() {
    return true;
};

/**
 * Возвращает стандартную ширину содержимого окна
 *
 * @returns {Function} Стандартную ширина содержимого окна
 */
DKTools.Window.prototype.standardContentsWidth = function() {
    return function() {
        return this._width - this.standardPadding() * 2;
    }.bind(this);
};

/**
 * Возвращает стандартную высоту содержимого окна
 *
 * @returns {Function} Стандартную высота содержимого окна
 */
DKTools.Window.prototype.standardContentsHeight = function() {
    return function() {
        return this._height - this.standardPadding() * 2;
    }.bind(this);
};

/**
 * Возвращает стандартную прозрачность окна
 *
 * @return {Number} Стандартная прозрачность окна
 */
DKTools.Window.prototype.standardWindowOpacity = function() {
    return 255;
};

/**
 * Возвращает стандартную прозрачность контента окна
 *
 * @return {Number} Стандартная прозрачность контента окна
 */
DKTools.Window.prototype.standardContentsOpacity = function() {
    return 255;
};

/**
 * Возвращает стандартную прозрачность рамки окна
 *
 * @return {Number} Стандартная прозрачность рамки окна
 */
DKTools.Window.prototype.standardFrameOpacity = function() {
    return 255;
};

/**
 * Возвращает стандартную прозрачность
 *
 * @return {Object} Стандартная прозрачность
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
 * Возвращает стандартный тон окна
 *
 * @return {Number[]} Стандартный тон окна
*/
DKTools.Window.prototype.standardTone = function() {
    return $gameSystem.windowTone();
};

// setup methods

/**
 * Устанавливает все параметры окна
 *
 * @override
 *
 * @param {Object} [object] - Объект типа {}
 *
 * @param {Function | Number} [object.contentsWidth] - Ширина содержимого окна
 * @param {Function | Number} [object.contentsHeight] - Высота содержимого окна
 * @param {Object} [object.opacity] - Прозрачность окна
 * @param {Number[]} [object.tone] - Тон окна
 *
 * @param {Number} [object.opacity.windowOpacity] - Прозрачность окна
 * @param {Number} [object.opacity.contentsOpacity] - Прозрачность контента окна
 * @param {Number} [object.opacity.frameOpacity] - Прозрачность рамки окна
 * @param {Number} [object.opacity.backOpacity] - Прозрачность заднего фона окна
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
 * Устанавливает ширину окна
 *
 * @param {Number} [width] - Ширина окна
 */
DKTools.Window.prototype.setupWidth = function(width) {
    this.realWidth = this._checkWidth(width);
};

/**
 * Устанавливает высоту окна
 *
 * @param {Number | String} [height] - Высота окна
 */
DKTools.Window.prototype.setupHeight = function(height) {
    if (_.isString(height)) {
        height = this.getLineHeight() * Number(height);
    }
    this.realHeight = this._checkHeight(height);
};

/**
 * Устанавливает размер окна
 *
 * @param {Number | Object} [object] - Ширина окна или Объекти типа {}
 * @param {Number | String} [height] - Высота окна
 *
 * @param {Number} [object.width] - Ширина окна
 * @param {Number | String} [object.height] - Высота окна
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
 * Устанавливает ширину содержимого окна
 *
 * @param {Function | Number} contentsWidth - Ширина содержимого окна
 */
DKTools.Window.prototype.setupContentsWidth = function(contentsWidth) {
    this._contentsWidth = contentsWidth || this.standardContentsWidth();
};

/**
 * Устанавливает высоту содержимого окна
 *
 * @param {Function | Number} contentsHeight - Высота содержимого окна
 */
DKTools.Window.prototype.setupContentsHeight = function(contentsHeight) {
    this._contentsHeight = contentsHeight || this.standardContentsHeight();
};

DKTools.Window.prototype.setupContentsSprite = function(contentsSprite) {
    /**
     * @private
     * @readonly
     * @type {DKTools.Sprite | *}
     */
    this._windowContentsSprite = contentsSprite || this.standardContentsSprite();
};

/**
 *
 * @param [object]
 * @param {Number} [y] - Координата Y
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
 * Устанавливает прозрачность окна
 *
 * @param {Object} [opacity] - Прозрачность
 *
 * @param {Number} [opacity.windowOpacity] - Прозрачность окна
 * @param {Number} [opacity.contentsOpacity] - Прозрачность контента окна
 * @param {Number} [opacity.frameOpacity] - Прозрачность рамки окна
 * @param {Number} [opacity.backOpacity] - Прозрачность заднего фона окна
*/
DKTools.Window.prototype.setupOpacity = function(opacity) {
    /**
     * @private
     * @type {Object}
     */
    this._opacity = Object.assign(this.standardOpacity(), opacity);
};

/**
 * Устанавливает тон окна
 *
 * @param {Number[]} [tone] - Тон окна
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
 * Изменяет все параметры окна
 * Возвращает количество измененных параметров
 *
 * @override
 *
 * @param {Object} [object] - Параметры
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 * @param {Boolean} [activate] - Активировать окно
 *
 * @param {Object} [object.opacity] - Прозрачность окна
 * @param {Number[]} [object.tone] - Тон окна
 *
 * @param {Number} [object.windowOpacity] - Прозрачность окна
 * @param {Number} [object.contentsOpacity] - Прозрачность контента окна
 * @param {Number} [object.frameOpacity] - Прозрачность рамки окна
 * @param {Number} [object.backOpacity] - Прозрачность заднего фона окна
 *
 * @see DKTools.Base.prototype.setAll
 *
 * @return {Number} Количество измененных параметров
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
 * Изменяет ширину окна
 * Возвращает true, если изменение произошло
 *
 * @param {Number} [width] - Ширина окна
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Window.prototype.setWidth = function(width, blockStart, activate) {
    return this.resize(width, this._height, blockStart, activate);
};

/**
 * Изменяет высоту окна
 * Возвращает true, если изменение произошло
 *
 * @param {Number} [height] - Высота окна
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Window.prototype.setHeight = function(height, blockStart, activate) {
    return this.resize(this._width, height, blockStart, activate);
};

DKTools.Window.prototype.setContentsSprite = function(contentsSprite, blockStart, activate) {
    this.removeContentsSprite();
    this.setupContentsSprite(contentsSprite);
    this.addContentsSprite();
    if (!blockStart) {
        this.start();
    }
    if (activate) {
        this.activate();
    }
};

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
    return !DKTools.Utils.Point.equals(this.scale, lastPos);
};

/**
 * Изменяет прозрачность окна
 * Возвращает true, если изменение произошло
 *
 * @param {Object} [opacity] - Прозрачность окна
 * @param {Boolean} [blockUpdate] - Блокировка вызова функции updateOpacity
 *
 * @param {Number} [opacity.windowOpacity] - Прозрачность окна
 * @param {Number} [opacity.contentsOpacity] - Прозрачность контента окна
 * @param {Number} [opacity.frameOpacity] - Прозрачность рамки окна
 * @param {Number} [opacity.backOpacity] - Прозрачность заднего фона окна
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Window.prototype.setOpacity = function(opacity, blockUpdate) {
    if (_.isEqual(this._opacity, Object.assign(this.standardOpacity(), opacity))) {
        return false;
    }
    this.setupOpacity(opacity);
    if (!blockUpdate) {
        this.updateOpacity();
    }
    return true;
};

/**
 * Изменяет тон окна
 * Возвращает true, если изменение произошло
 *
 * @override
 *
 * @param {Number[]} [tone] - Тон окна
 * @param {Boolean} [blockUpdate] - Блокировка вызова функции updateTone
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Window.prototype.setTone = function(tone, blockUpdate) {
    const standardTone = _.clone(this.standardTone());
    if (_.isEqual(this._tone, Object.assign(standardTone, tone))) {
        return false;
    }
    this.setupTone(tone);
    if (!blockUpdate) {
        this.updateTone();
    }
    return true;
};

// get methods

/**
 * Возвращает минимальную ширину окна
 *
 * @override
 * @return {Number} Минимальная ширина окна
 */
DKTools.Window.prototype.getMinWidth = function() {
    return this.standardPadding() * 2 + DKTools.Base.prototype.getMinWidth.call(this);
};

/**
 * Возвращает минимальную высоту окна
 *
 * @override
 * @return {Number} Минимальная высота окна
 */
DKTools.Window.prototype.getMinHeight = function() {
    return this.standardPadding() * 2 + DKTools.Base.prototype.getMinHeight.call(this);
};

/**
 * Возвращает ширину содержимого окна
 *
 * @returns {Number} Ширина содержимого окна
 */
DKTools.Window.prototype.getContentsWidth = function() {
    if (_.isFunction(this._contentsWidth)) {
        return this._contentsWidth();
    }
    return this._contentsWidth;
};

/**
 * Возвращает высоту содержимого окна
 *
 * @returns {Number} Высота содержимого окна
 */
DKTools.Window.prototype.getContentsHeight = function() {
    if (_.isFunction(this._contentsHeight)) {
        return this._contentsHeight();
    }
    return this._contentsHeight;
};

/**
 *
 * @returns {Object}
 */
DKTools.Window.prototype.getContentsSize = function() {
    return { width: this.getContentsWidth(), height: this.getContentsHeight() };
};

/**
 * Возвращает спрайт стрелки по id
 *
 * @param {*} id
 * @returns {DKTools.Sprite.Arrow | undefined} Спрайт стрелки или undefined
 */
DKTools.Window.prototype.getArrow = function(id) {
    return _.find(this._arrows, { id: id });
};

DKTools.Window.prototype.getCurrentOpacity = function() {
    return this.windowOpacity;
};

// needs create methods

/**
 * Возвращает true, если нужно создать спрайт заднего фона окна
 *
 * @return {Boolean} Нужно создать спрайт заднего фона окна
 */
DKTools.Window.prototype.needsCreateBackSprite = function() {
    return true;
};

/**
 * Возвращает true, если нужно создать спрайт рамки окна
 *
 * @return {Boolean} Нужно создать спрайт рамки окна
 */
DKTools.Window.prototype.needsCreateFrameSprite = function() {
    return true;
};

/**
 * Возвращает true, если нужно создать спрайты стрелок
 *
 * @return {Boolean} Нужно создать спрайты стрелок
 */
DKTools.Window.prototype.needsCreateArrowSprites = function() {
    return false;
};

/**
 * Возвращает true, если нужно создать спрайт стрелки вниз
 *
 * @return {Boolean} Нужно создать спрайт стрелки вниз
 */
DKTools.Window.prototype.needsCreateDownArrowSprite = function() {
    return true;
};

/**
 * Возвращает true, если нужно создать спрайт стрелки вверх
 *
 * @return {Boolean} Нужно создать спрайт стрелки вверх
 */
DKTools.Window.prototype.needsCreateUpArrowSprite = function() {
    return true;
};

/**
 * Возвращает true, если нужно создать спрайт стрелки влево
 *
 * @return {Boolean} Нужно создать спрайт стрелки влево
 */
DKTools.Window.prototype.needsCreateLeftArrowSprite = function() {
    return true;
};

/**
 * Возвращает true, если нужно создать спрайт стрелки вправо
 *
 * @return {Boolean} Нужно создать спрайт стрелки вправо
 */
DKTools.Window.prototype.needsCreateRightArrowSprite = function() {
    return true;
};

/**
 * Возвращает true, если нужно создать спрайт знака паузы
 *
 * @return {Boolean} Нужно создать спрайт знака паузы
 */
DKTools.Window.prototype.needsCreatePauseSignSprite = function() {
    return true;
};

// _refresh methods

/**
 * Обновляет все части окна
 *
 * @private
 * @override
 */
DKTools.Window.prototype._refreshAllParts = function() {
    this._refreshBack();
    this._refreshFrame();
    this._refreshContents();
    this._refreshPauseSign();
};

/**
 * Обновляет спрайт заднего фона окна
 *
 * @private
 * @override
 */
DKTools.Window.prototype._refreshBack = function() {
    if (this.hasBackSprite()) {
        Window.prototype._refreshBack.call(this);
    }
};

/**
 * Обновляет спрайт рамки окна
 *
 * @private
 * @override
 */
DKTools.Window.prototype._refreshFrame = function() {
    if (this.hasFrameSprite()) {
        Window.prototype._refreshFrame.call(this);
    }
};

/**
 * Обновляет спрайт контента окна
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
 * Обновляет спрайт знака паузы
 *
 * @private
 * @override
 */
DKTools.Window.prototype._refreshPauseSign = function() {
    if (this.hasPauseSignSprite()) {
        Window.prototype._refreshPauseSign.call(this);
    }
};

// start methods

/**
 * Запускает работу окна
 *
 * @param {Boolean} [activate] - Активировать окно
 */
DKTools.Window.prototype.start = function(activate) {
    DKTools.Base.prototype.start.call(this, activate);
    if (this.hasContentsSprite()) {
        const contentsSprite = this._windowContentsSprite;
        contentsSprite.resize(this.getContentsWidth(), this.getContentsHeight(), true);
        contentsSprite.start(activate);
    }
};

// remove methods

/**
 * Удаляет дочерние объекты из обработки
 *
 * @override
 */
DKTools.Window.prototype.removeAllChildren = function() {
    DKTools.Base.prototype.removeAllChildren.call(this);
    this.removeContentsSprite();
};

DKTools.Window.prototype.removeContentsSprite = function() {
    if (this.hasContentsSprite()) {
        this.removeChild(this._windowContentsSprite);
    }
};

DKTools.Window.prototype.removeArrow = function(id) {
    const arrow = this.getArrow(id);
    if (arrow) {
        DKTools.Utils.Array.remove(this._arrows, arrow);
        this.removeChild(arrow);
    }
};

// check methods

/**
 * Проверяет ширину и высоту окна на соответствие минимальным значениям
 * Возвращает количество измененных параметров
 *
 * @override
 * @return {Number} Количество измененных параметров
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
 * Создает стрелку
 *
 * @param {String} type - Тип стрелки
 * @param {Number | String | *} id - ID стрелки
 * @param {Function} onUpdate -
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Координата X или Позиция
 * @param {Number | String} [y] - Координата Y
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number | String} [object.y] - Координата Y
 *
 * @see DKTools.Event.prototype.onUpdate
 * @see DKTools.Sprite.Arrow
 *
 * @returns {DKTools.Sprite.Arrow}
 */
DKTools.Window.prototype.createArrow = function(type, id, onUpdate, object, y) {
    if (object instanceof Object) {
        return this.createArrow(type, id, object.x, object, y);
    }
    const x = object; // object - Number
    const arrow = new DKTools.Sprite.Arrow({
        x: x,
        y: y,
        id: id,
        arrowType: type
    });
    arrow.start();
    arrow.addEvent({
        type: 'update',
        onUpdate: onUpdate
    });
    this._arrows.push(arrow);
    this.addChild(arrow);
    return arrow;
};

/**
 * Создает стрелки
 */
DKTools.Window.prototype.createArrows = function() {
    const w = this._width;
    const h = this._height;
    const q = 12;
    if (this.needsCreateUpArrowSprite()) {
        this.createArrow('up', 'up', this.updateUpArrow.bind(this), w / 2, q);
    }
    if (this.needsCreateDownArrowSprite()) {
        this.createArrow('down', 'down', this.updateDownArrow.bind(this), w / 2, h - q);
    }
    if (this.needsCreateLeftArrowSprite()) {
        this.createArrow('left', 'left', this.updateLeftArrow.bind(this), q, h / 2);
    }
    if (this.needsCreateRightArrowSprite()) {
        this.createArrow('right', 'right', this.updateRightArrow.bind(this), w - q, h / 2);
    }
};

// add methods

/**
 * @override
 */
DKTools.Window.prototype.addAllChildren = function() {
    DKTools.Base.prototype.addAllChildren.call(this);
    this.addContentsSprite();
};

DKTools.Window.prototype.addContentsSprite = function() {
    this._addContentsSprite();
    this._refreshContents();
};

// refresh methods

/**
 * Обновляет и перерисовывает все
 *
 * @override
 */
DKTools.Window.prototype.refreshAll = function() {
    DKTools.Base.prototype.refreshAll.call(this);
    if (this.canRefreshAll()) {
        this._windowContentsSprite.refreshAll();
    }
};

// can methods

/**
 * Возвращает true, если объект можно обновить и перерисовать
 *
 * @override
 * @returns {Boolean} Объект можно обновить и перерисовать
 */
DKTools.Window.prototype.canRefreshAll = function() {
    return this.hasContentsSprite() && DKTools.Base.prototype.canRefreshAll.call(this);
};

// draw methods

DKTools.Window.prototype.drawText = function(text, options) {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.drawText(text, options);
    }
};

// frame methods

/**
 * Показывает рамку окна
 */
DKTools.Window.prototype.showFrame = function() {
    if (this.hasFrameSprite()) {
        this._windowFrameSprite.visible = true;
    }
};

/**
 * Скрывает рамку окна
 */
DKTools.Window.prototype.hideFrame = function() {
    if (this.hasFrameSprite()) {
        this._windowFrameSprite.visible = false;
    }
};

// back methods

/**
 * Показывает задний фон окна
 */
DKTools.Window.prototype.showBack = function() {
    if (this.hasBackSprite()) {
        this._windowBackSprite.visible = true;
    }
};

/**
 * Скрывает задний фон окна
 */
DKTools.Window.prototype.hideBack = function() {
    if (this.hasBackSprite()) {
        this._windowBackSprite.visible = false;
    }
};

// contents methods

/**
 * Показывает содерживое окна
 *
 * @param {Boolean} [activate]
 */
DKTools.Window.prototype.showContents = function(activate) {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.show(activate);
    }
};

/**
 * Скрывает содержимое окна
 */
DKTools.Window.prototype.hideContents = function() {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.hide();
    }
};

// is method

/**
 * Возвращает true, если окно открыто и его видно
 *
 * @return {Boolean} Окно открыто и его видно
 */
DKTools.Window.prototype.isOpenAndVisible = function() {
    return this.isOpen() && this.isVisible();
};

/**
 * Возвращает true, если окно открыто и активно
 *
 * @return {Boolean} Окно открыто и активно
 */
DKTools.Window.prototype.isOpenAndActive = function() {
    return this.isOpen() && this.isActive();
};

/**
 * Возвращает true, если координаты находятся внутри окна
 *
 * @override
 *
 * @param {Number} x - Координата X
 * @param {Number} y - Координата Y
 *
 * @return {Boolean} Координаты находятся внутри окна
 */
DKTools.Window.prototype.isInside = function(x, y) {
    const localX = this.canvasToLocalX(x);
    const localY = this.canvasToLocalY(y);
    const frame = new Rectangle(this.x, this.y, this.width, this.height);
    return frame.contains(localX, localY);
};

// has methods

/**
 * Возвращает true, если окно содержит контейнер спрайтов
 *
 * @return {Boolean} Окно содержит контейнер спрайтов
 */
DKTools.Window.prototype.hasSpriteContainer = function() {
    return !!this._windowSpriteContainer;
};

/**
 * Возвращает true, если окно содержит спрайт заднего фона
 *
 * @return {Boolean} Окно содержит спрайт заднего фона
 */
DKTools.Window.prototype.hasBackSprite = function() {
    return !!this._windowBackSprite;
};

/**
 * Возвращает true, если окно содержит спрайт рамки окна
 *
 * @return {Boolean} Окно содержит спрайт рамки окна
 */
DKTools.Window.prototype.hasFrameSprite = function() {
    return !!this._windowFrameSprite;
};

/**
 * Возвращает true, если окно содержит спрайт контента окна
 *
 * @return {Boolean} Окно содержит спрайт контента окна
 */
DKTools.Window.prototype.hasContentsSprite = function() {
    return !!this._windowContentsSprite;
};

/**
 *
 * @param {*} id
 * @returns {Boolean}
 */
DKTools.Window.prototype.hasArrow = function(id) {
    return !!this.getArrow(id);
};

/**
 * Возвращает true, если окно содержит спрайты стрелок
 *
 * @return {Boolean} Окно содержит спрайты стрелок
 */
DKTools.Window.prototype.hasArrowSprites = function() {
    return this.hasUpArrowSprite() && this.hasDownArrowSprite() &&
            this.hasLeftArrowSprite() && this.hasRightArrowSprite();
};

/**
 * Возвращает true, если окно содержит спрайт стрелки вверх
 *
 * @return {Boolean} Окно содержит спрайт стрелки вверх
 */
DKTools.Window.prototype.hasUpArrowSprite = function() {
    return this.hasArrow('up');
};

/**
 * Возвращает true, если окно содержит спрайт стрелки вниз
 *
 * @return {Boolean} Окно содержит спрайт стрелки вниз
 */
DKTools.Window.prototype.hasDownArrowSprite = function() {
    return this.hasArrow('down');
};

/**
 * Возвращает true, если окно содержит спрайт стрелки влево
 *
 * @return {Boolean} Окно содержит спрайт стрелки влево
 */
DKTools.Window.prototype.hasLeftArrowSprite = function() {
    return this.hasArrow('left');
};

/**
 * Возвращает true, если окно содержит спрайт стрелки вправо
 *
 * @return {Boolean} Окно содержит спрайт стрелки вправо
 */
DKTools.Window.prototype.hasRightArrowSprite = function() {
    return this.hasArrow('right');
};

/**
 * Возвращает true, если окно содержит спрайт знака паузы
 *
 * @return {Boolean} Окно содержит спрайт знака паузы
 */
DKTools.Window.prototype.hasPauseSignSprite = function() {
    return !!this._windowPauseSignSprite;
};

/**
 * @returns {Boolean}
 */
DKTools.Window.prototype.hasBackgroundDimmer = function() {
    return !!this._dimmerSprite;
};

// active methods

/**
 * Активирует объект
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
 * Деактивирует объект
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
 * Устанавливает ширину и высоту окна, если они отличаются от текущих
 * Возвращает true, если изменение произошло
 *
 * @param {Number} [width] - Ширина окна
 * @param {Number} [height] - Высота окна
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 * @param {Boolean} [activate]
 *
 * @return {Boolean} Изменение произошло
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
 * Загружает Bitmap из папки
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
 * @return {Bitmap} Bitmap объекта был изменен
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
 * Загружает и резервирует Bitmap из папки
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
 * @return {Bitmap} Bitmap объекта был изменен
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
 * Обновляет события типа open
 */
DKTools.Window.prototype.updateOpenEvents = function() {
    this.updateEventsContainer('open');
};

/**
 * Обновляет события типа close
 */
DKTools.Window.prototype.updateCloseEvents = function() {
    this.updateEventsContainer('close');
};

// _update methods

/**
 * Обновляет спрайт контента окна
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
 * Обновляет спрайт знака паузы
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
 * Обновляет все
 *
 * @override
 */
DKTools.Window.prototype.updateAll = function() {
    DKTools.Base.prototype.updateAll.call(this);
    this.updateTone();
};

/**
 * Обновляет спрайт контента окна
 */
DKTools.Window.prototype.updateContents = function() {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.updateAll();
    }
};

/**
 * Обновляет части окна
 */
DKTools.Window.prototype.updateTransform = function() {
    this._updateContents();
    this._updatePauseSign();
    PIXI.Container.prototype.updateTransform.call(this);
};

/**
 * Обновляет прозрачность окна
 *
 * @override
 *
 * @param {Object} [opacity] - Прозрачность окна
 *
 * @param {Number} [opacity.windowOpacity] - Прозрачность окна
 * @param {Number} [opacity.contentsOpacity] - Прозрачность контента окна
 * @param {Number} [opacity.frameOpacity] - Прозрачность рамки окна
 * @param {Number} [opacity.backOpacity] - Прозрачность заднего фона окна
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
 * Обновляет тон окна
 *
 * @override
 *
 * @param {Number[]} [tone] - Тон окна
*/
DKTools.Window.prototype.updateTone = function(tone) {
    if (!tone) {
        tone = this.tone;
    }
    if (this.hasBackSprite()) {
        Window.prototype.setTone.apply(this, tone);
    }
};

/**
 * Обновляет открытие окна
 *
 * @override
*/
DKTools.Window.prototype.updateOpen = function() {
	if (!this._opening) {
        return;
    }
	this.openness += 32;
	if (this.isOpen()) {
		this._opening = false;
        this.updateOpenEvents();
	}
};

/**
 * Обновляет закрытие окна
 *
 * @override
*/
DKTools.Window.prototype.updateClose = function() {
	if (!this._closing) {
        return;
    }
	this.openness -= 32;
	if (this.isClosed()) {
		this._closing = false;
        this.updateCloseEvents();
	}
};

DKTools.Window.prototype.updateUpArrow = function(event) {
    // to be overriden by plugins
};

DKTools.Window.prototype.updateDownArrow = function(event) {
    // to be overriden by plugins
};

DKTools.Window.prototype.updateLeftArrow = function(event) {
    // to be overriden by plugins
};

DKTools.Window.prototype.updateRightArrow = function(event) {
    // to be overriden by plugins
};

/**
 * Обновляет окно
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
// DKTools Window Selectable
//===========================================================================

DKTools.Window.Selectable.prototype = Object.create(DKTools.Window.prototype);
DKTools.Window.Selectable.prototype.constructor = DKTools.Window.Selectable;

// standard methods

/**
 * @override
 */
DKTools.Window.Selectable.prototype.standardContentsSprite = function() {
    return new DKTools.Sprite.Selectable();
};

// needs create methods

/**
 * @override
 * @returns {Boolean}
 */
DKTools.Window.Selectable.prototype.needsCreateArrowSprites = function() {
    return true;
};

// upddate methods

/**
 * @override
 * @param {DKTools.Event} event
 */
DKTools.Window.Selectable.prototype.updateUpArrow = function(event) {
    if (this.hasContentsSprite()) {
        const contentsSprite = this._windowContentsSprite;
        if (this.isChild(contentsSprite) && contentsSprite.isVisible() && contentsSprite.isSelectable() && contentsSprite.isVertical()) {
            event.target.setVisible(contentsSprite.getTopRow() > 0);
        } else {
            event.target.setVisible(false);
        }
    }
};

/**
 * @override
 * @param {DKTools.Event} event
 */
DKTools.Window.Selectable.prototype.updateDownArrow = function(event) {
    if (this.hasContentsSprite()) {
        const contentsSprite = this._windowContentsSprite;
        if (this.isChild(contentsSprite) && contentsSprite.isVisible() && contentsSprite.isSelectable() && contentsSprite.isVertical()) {
            const topRow = contentsSprite.getTopRow();
            const maxTopRow = contentsSprite.getMaxTopRow();
            event.target.setVisible(maxTopRow > 0 && topRow < maxTopRow);
        } else {
            event.target.setVisible(false);
        }
    }
};

/**
 * @override
 * @param {DKTools.Event} event
 */
DKTools.Window.Selectable.prototype.updateLeftArrow = function(event) {
    if (this.hasContentsSprite()) {
        const contentsSprite = this._windowContentsSprite;
        if (this.isChild(contentsSprite) && contentsSprite.isVisible() && contentsSprite.isSelectable() && contentsSprite.isHorizontal()) {
            event.target.setVisible(contentsSprite.getTopCol() > 0);
        } else {
            event.target.setVisible(false);
        }
    }
};

/**
 * @override
 * @param {DKTools.Event} event
 */
DKTools.Window.Selectable.prototype.updateRightArrow = function(event) {
    if (this.hasContentsSprite()) {
        const contentsSprite = this._windowContentsSprite;
        if (this.isChild(contentsSprite) && contentsSprite.isVisible() && contentsSprite.isSelectable() && contentsSprite.isHorizontal()) {
            const topCol = contentsSprite.getTopCol();
            const maxTopCol = contentsSprite.getMaxTopCol();
            event.target.setVisible(maxTopCol > 0 && topCol < maxTopCol);
        }
    }
};





//===========================================================================
// DKTools Scene
//===========================================================================

DKTools.Scene.prototype = Object.create(Scene_Base.prototype);
DKTools.Scene.prototype.constructor = DKTools.Scene;

// initialize

/**
 * Инициализирует объект класса
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
 * Очищает все данные
 *
 * @private
 */
DKTools.Scene.prototype._clearAll = function() {
    // to be overriden by plugins
};

// _create methods

/**
 * Создает необходимые объекты
 *
 * @private
 */
DKTools.Scene.prototype._createAll = function() {
    // to be overriden by plugins
};

// _setup methods

/**
 * Устанавливает все данные
 *
 * @private
 */
DKTools.Scene.prototype._setupAll = function() {
    // to be overriden by plugins
};

// _add methods

DKTools.Scene.prototype._addAllChildren = function() {
    // to be overriden by plugins
};

// create methods

/**
 * Создает объекты в сцене
 *
 * @override
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
 * Создает задний фон
 */
DKTools.Scene.prototype.createBackground = function() {
    // to be overriden by plugins
};

/**
 * Создает все спрайты в сцене
 */
DKTools.Scene.prototype.createAllSprites = function() {
    // to be overriden by plugins
};

/**
 * Создает все окна в сцене
 */
DKTools.Scene.prototype.createAllWindows = function() {
    // to be overriden by plugins
};

/**
 * Создает передний фон
 */
DKTools.Scene.prototype.createForeground = function() {
    // to be overriden by plugins
};

// start methods

/**
 * Запускает работу сцены
 *
 * @override
 */
DKTools.Scene.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    this.startAllSprites();
    this.startAllWindows();
};

/**
 * Запускает работу всех спрайтов
 */
DKTools.Scene.prototype.startAllSprites = function() {
};

/**
 * Запускает работу всех окон
 */
DKTools.Scene.prototype.startAllWindows = function() {
};

// remove methods

/**
 * Удаляет окно из обработки сцены
 *
 * @param {DKTools.Window | *} window - Окно, которое надо удалить
 */
DKTools.Scene.prototype.removeWindow = function(window) {
    if (this.hasWindowLayer()) {
        this._windowLayer.removeChild(window);
    }

};

// has methods

/**
 * Возвращает true, если у сцены есть слой для окон
 *
 * @return {Boolean} У сцены есть слой для окон
 */
DKTools.Scene.prototype.hasWindowLayer = function() {
    return !!this._windowLayer;
};

// is methods

DKTools.Scene.prototype.isChild = function(object) {
    if (this.hasWindowLayer() && object instanceof Window) {
        return object.parent === this._windowLayer;
    }
    return object.parent === this;
};

// update methods

/**
 * Обновляет сцену
 */
DKTools.Scene.prototype.update = function() {
    this.updateChildren();
    this.updateFade();
};

/**
 * Обновляет дочерние объекты
 */
DKTools.Scene.prototype.updateChildren = function() {
    this.iterateChildren(this.updateChild);
};

/**
 * Обновляет дочерний объект
 *
 * @param {*} child - Дочерний объект
 */
DKTools.Scene.prototype.updateChild = function(child) {
    if (child && child.update) {
        child.update();
    }
};

// other methods

/**
 * Выполняет callback функцию для каждого объекта сцены
 *
 * @param {Function} callback - Функция обработки для каждого объекта сцены
 */
DKTools.Scene.prototype.iterateChildren = function(callback) {
    _.forEach(this.children, callback);
};