/*
Title: DKTools
Author: DK (Denis Kuznetsov)
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 0.98 beta
Release: 31.07.2017
First release: 13.01.2016
Supported languages: Russian, English
*/

/*ru
Название: DKTools
Автор: DK (Денис Кузнецов)
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 0.98 beta
Релиз: 31.07.2017
Первый релиз: 13.01.2016
Поддерживаемые языки: Русский, Английский
*/

/*:
* @plugindesc v.0.98 beta Basic elements
* @author DK (Denis Kuznetsov)
* @help

 ### Info about plugin ###
 Title: DKTools
 Author: DK (Denis Kuznetsov)
 Site: http://dk-plugins.ru
 Version: 0.98 beta
 Release: 31.07.2017
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

 ### Elements ###
 1. DKTools.Sprite
 2. DKTools.Sprite.Button
 3. DKTools.Sprite.Selectable
 4. DKTools.Sprite.Command
 5. DKTools.Sprite.Tab
 6. DKTools.Viewport
 7. DKTools.Layout
 8. DKTools.Window
 9. DKTools.Window.Selectable
 10. DKTools.Window.Command
 11. DKTools.Window.Tab
 12. DKTools.Scene

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
 * @default ["{"Language":"English","Locale":"en","Primary":"true"}"]

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

 * @param Updates
 * @text Checking for updates
 * @default ---------------------------------

 * @param Auto Updates
 * @text Automatic check for updates
 * @parent Updates
 * @desc Check for plugin updates automatically? Information is output to the debug console.
 * @type boolean
 * @default false

 * @param Beta Updates
 * @text Beta updates
 * @parent Updates
 * @desc Check for beta updates?
 * @type boolean
 * @default false

 * @param Updates Language
 * @text Interface language
 * @parent Updates
 * @desc Interface language when checking for updates
 * @type select
 * @option English
 * @value en
 * @option Russian
 * @value ru
 * @default en

*/

/*:ru
* @plugindesc v.0.98 beta Базовые элементы
* @author DK (Денис Кузнецов)
* @help

 ### Информация о плагине ###
 Название: DKTools
 Автор: DK (Денис Кузнецов)
 Сайт: https://dk-plugins.ru
 Версия: 0.98 beta
 Релиз: 31.07.2017
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

 ### Элементы ###
 1. DKTools.Sprite
 2. DKTools.Sprite.Button
 3. DKTools.Sprite.Selectable
 4. DKTools.Sprite.Command
 5. DKTools.Sprite.Tab
 6. DKTools.Viewport
 7. DKTools.Layout
 8. DKTools.Window
 9. DKTools.Window.Selectable
 10. DKTools.Window.Command
 11. DKTools.Window.Tab
 12. DKTools.Scene
 
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
 * @default ["{"Language":"Русский","Locale":"ru","Primary":"true"}"]

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
 * @desc Открыть отладочную консоль при запуске игры ?
 * @type boolean
 * @default false

 * @param Updates
 * @text Проверка обновлений
 * @default ---------------------------------

 * @param Auto Updates
 * @text Автоматическая проверка обновлений
 * @parent Updates
 * @desc Проверять обновления для плагинов автоматически ? Информация выводится в отладочную консоль.
 * @type boolean
 * @default false

 * @param Beta Updates
 * @text Бета обновления
 * @parent Updates
 * @desc Проверять бета версии обновлений ?
 * @type boolean
 * @default false

 * @param Updates Language
 * @text Язык интерфейса
 * @parent Updates
 * @desc Язык интерфейса при проверке обновлений
 * @type select
 * @option Русский
 * @value ru
 * @option Английский
 * @value en
 * @default ru
 
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
Imported.DKTools = 0.98;

//===========================================================================
// DKTools
//===========================================================================

/**
 * @class DKTools
 * @constructor
 *
 * @namespace DKTools
 */
function DKTools() {
	throw new Error('This is a static class!');
}

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
        },
        configurable: true
    }

});

// classes

/**
 * Статический класс утилит
 *
 * @class DKTools.Utils
 * @constructor
 *
 * @memberOf DKTools
 */
DKTools.Utils = function() {
    throw new Error('This is a static class!');
};

/**
 * Статический класс, содержащий функции для String
 *
 * @class DKTools.Utils.String
 * @constructor
 *
 * @memberOf DKTools.Utils
 */
DKTools.Utils.String = function() {
    throw new Error('This is a static class!');
};

/**
 * Статический класс, содержащий функции для Array
 *
 * @class DKTools.Utils.Array
 * @constructor
 *
 * @memberOf DKTools.Utils
 */
DKTools.Utils.Array = function() {
    throw new Error('This is a static class!');
};

/**
 * Статический класс, содержащий функции для Bitmap
 *
 * @class DKTools.Utils.Bitmap
 * @constructor
 *
 * @memberOf DKTools.Utils
 */
DKTools.Utils.Bitmap = function() {
    throw new Error('This is a static class!');
};

/**
 * Статический класс, содержащий функции для Point
 *
 * @class DKTools.Utils.Point
 * @constructor
 *
 * @memberOf DKTools.Utils
 */
DKTools.Utils.Point = function() {
    throw new Error('This is a static class!');
};

/**
 * Статический класс, содержащий функции для Rectangle
 *
 * @class DKTools.Utils.Rectangle
 * @constructor
 *
 * @memberOf DKTools.Utils
 */
DKTools.Utils.Rectangle = function() {
    throw new Error('This is a static class!');
};

/**
 * Статический класс, содержащий функции рандома
 *
 * @class DKTools.Utils.Random
 * @constructor
 *
 * @memberOf DKTools.Utils
 */
DKTools.Utils.Random = function() {
    throw new Error('This is a static class!');
};

/**
 * @class DKTools.ParameterManager
 * @constructor
 *
 * @memberOf DKTools
 *
 * @param {String} pluginName - Название плагина
 * @param {Object[]} convertible - Параметры для конвертации
 */
DKTools.ParameterManager = function(pluginName, convertible) {
    this.initialize.apply(this, arguments);
};

/**
 * Статический класс, который управляет файловой системой
 *
 * @class DKTools.FileManager
 * @constructor
 *
 * @memberOf DKTools
 */
DKTools.FileManager = function() {
    throw new Error('This is a static class!');
};

/**
 * Статический класс локализации
 *
 * @class DKTools.Localization
 * @constructor
 *
 * @memberOf DKTools
 */
DKTools.Localization = function() {
    throw new Error('This is a static class!');
};

/**
 * Статический класс, который управляет плагинами
 *
 * @class DKTools.PluginManager
 * @constructor
 *
 * @memberOf DKTools
 */
DKTools.PluginManager = function() {
    throw new Error('This is a static class!');
};

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
 * Класс события
 *
 * @class DKTools.Event
 * @constructor
 *
 * @memberOf DKTools
 *
 * @param {Object} object - Объект типа {}
 *
 * @param {DKTools.Sprite | DKTools.Window | *} [object.target] - Объект, для которого установлено событие
 * @param {String} [object.type] - Тип события
 * @param {Function} [object.onStart] - Обработчик начала работы события
 * @param {Function} object.onUpdate - Обработчик события
 * @param {Function} [object.onFinish] - Обработчик окончания работы события
 * @param {Function} [object.onPause] - Обработчик паузы события
 * @param {Number} [object.remainingPauseTime] - Длительность паузы события
 * // TODO: добавить остальные свойства
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
 * @class DKTools.Sprite.Selectable
 * @augments DKTools.Sprite.Button
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
 * @class DKTools.Sprite.Command
 * @augments DKTools.Sprite.Selectable
 *
 * @override
 * @constructor
 *
 * @memberOf DKTools.Sprite
 */
DKTools.Sprite.Command = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 * @class DKTools.Sprite.Tab
 * @augments DKTools.Sprite
 *
 * @override
 * @constructor
 *
 * @memberOf DKTools.Sprite
 */
DKTools.Sprite.Tab = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 * Класс вьюпорта
 *
 * @class DKTools.Viewport
 * @augments DKTools.Sprite
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
 * Класс разметки
 *
 * @class DKTools.Layout
 * @augments DKTools.Sprite
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
 * Класс окна
 *
 * @class DKTools.Window
 * @augments DKTools.Base
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
 * @see object properties: DKTools.Base.prototype.initialize
 */
DKTools.Window = function(object, y, width, height) {
	this.initialize.apply(this, arguments);
};

DKTools.Window.Selectable = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

DKTools.Window.Tab = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 * Класс сцены
 *
 * @class DKTools.Scene
 * @augments Scene_Base
 *
 * @constructor
 *
 * @memberOf DKTools
 */
DKTools.Scene = function() {
	this.initialize.apply(this, arguments);
};

DKTools.Updates = function() {
    throw new Error('This is a static class!');
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

    if (DKToolsParam.get('Open Console')) {
        this.openConsole();
    }
};

/**
 * Возвращает true, если платформой является NW.js
 *
 * @static
 * @returns {Boolean} Платформой является NW.js
 */
DKTools.Utils.isNwjs = function() {
    return this._isNwjs;
};

/**
 * Возвращает true, если используется мобильный телефон
 *
 * @static
 * @return {Boolean} Используется мобильный телефон
 */
DKTools.Utils.isMobileDevice = function() {
    return this._isMobileDevice;
};

/**
 * Возвращает true, если используется мобильный браузер Safari
 *
 * @static
 * @returns {Boolean} Используется мобильный браузер Safari
 */
DKTools.Utils.isMobileSafari = function() {
    return this._isMobileSafari;
};

/**
 * Возвращает true, если используется браузер Android Chrome
 *
 * @static
 * @return {Boolean} Используется браузер Android Chrome
 */
DKTools.Utils.isAndroidChrome = function() {
    return this._isAndroidChrome;
};

/**
 * Копирует функции и свойства из одного класса в другой
 *
 * @static
 * @param {Object} target - Куда копируем
 * @param {Object} source - Откуда копируем
*/
DKTools.Utils.mixin = function(target, source) {
    let keys = Object.getOwnPropertyNames(source);
    _.forEach(keys, function(key) {
        var property = Object.getOwnPropertyDescriptor(source, key);
        Object.defineProperty(target, key, property);
    });
};

/**
 * Открывает консоль
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
 * Выводит информацию о плагине в отладочную консоль
 *
 * @private
 * @static
 */
DKTools.Utils._sayHello = function() {
    if (this._saidHello) {
        return;
    }

    if (navigator.userAgent.toLowerCase().indexOf('chrome') >= 0) {
        let args = ['\n %c %c %c DKTools.js ' + DKTools.version + ' %c  %c  https://www.dk-plugins.ru/  %c \n\n',
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
        let array = this.splitByComma(string);
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
        let array = this.splitByComma(string);
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
    let context = bitmap._context;
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
    let context = bitmap._context;
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
    let context = bitmap._context;
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
    let context = bitmap._context;
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
    let canvas = bitmap.canvas;
    let newBitmap = new Bitmap(canvas.width, canvas.height);
    let newContext = newBitmap.context;
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
 * @return {*} Клонированный Point
 */
DKTools.Utils.Point.clone = function(point) {
    let newPoint;
    if (point instanceof PIXI.ObservablePoint) {
        newPoint = new PIXI.ObservablePoint();
    } else {
        newPoint = new (point.constructor)();
    }
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
    let newRect = new (rect.constructor)();
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
    return this.getInt(2) % 2 === 0;
};

/**
 * Возвращает случайный цвет в формате rgba
 *
 * @static
 * @param {Number] [alpha] - Прозрачность цвета
 * @returns {String} Случайный цвет в формате rgba
 */
DKTools.Utils.Random.getRgbaColor = function(alpha) {
    let r = this.getInt(255);
    let g = this.getInt(255);
    let b = this.getInt(255);
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
// DKTools Parameter Manager
//===========================================================================

// properties

Object.defineProperties(DKTools.ParameterManager.prototype, {

    /**
     * Название плагина
     *
     * @readonly
     * @type {String}
     * @memberOf DKTools.ParameterManager
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
     * @memberOf DKTools.ParameterManager
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
     * @memberOf DKTools.ParameterManager
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
    } catch (e) {
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
    let converted = {};
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
    let localization = this.get('Localization');
    if (localization) {
        _.forEach(localization, function(value, key) {
            localization[key] = DKTools.ParameterManager._getConvertedObject(value);
        });
    }
};

/**
 * @param {Object[]} convertible
 */
DKTools.ParameterManager.prototype.convertParameters = function(convertible) {
    _.forEach(convertible, function(object) {
        let parameter = object.parameter;
        let property = object.property;
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
        let localization = this.get('Localization');
        if (localization) {
            param = localization[parameterName];
            if (param) {
                let locale = DKTools.Localization.locale;
                let localizedParam = param[locale];
                if (_.isUndefined(localizedParam)) {
                    throw new Error('Localized param is undefined'); // TODO: норм описание (про локаль)
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
// DKTools Plugin Manager
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
        let maxVersion = _.max(pluginInfo);
        let pluginVersion = this.pluginVersion(pluginName);
        if (_.isUndefined(pluginVersion)) {
            var error = 'Required to install the plugin "%1". Minimal version: %2'.format(pluginName, maxVersion);
            throw new Error(error);
        } else if (pluginVersion < maxVersion) {
            var error = 'Required to update the plugin "%1" to minimal version %2 (Installed: %3)'.format(pluginName,
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
 * @param {Number} version - Версия плагина
 */
DKTools.PluginManager.registerPlugin = function(pluginName, version) {
    if (this.isRegistered(pluginName)) {
        return;
    }
    if (!_.isFinite(version)) {
        console.warn('Version is not a Number: ' + pluginName); // TODO: норм описание
        return;
    }
    this._plugins[pluginName] = version;
};

/**
 * Регистрирует несколько плагинов
 *
 * @static
 * @param {Object[]} plugins - Плагины
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
 * DKTools.PluginManager.requirePlugin('DKTools', 0.98);
 *
 * @static
 * @param {String} pluginName - Название плагина
 * @param {Number} minVersion - Минимальная версия
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
 * DKTools.PluginManager.pluginVersion('DKTools'); // => 0.98
 *
 * @static
 * @param {String} pluginName - Название плагина
 * @returns {Number | undefined} Версия плагина
 */
DKTools.PluginManager.pluginVersion = function(pluginName) {
    return this._plugins[pluginName];
};





//===========================================================================
// DKTools File Manager
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

        let path = require('path');
        let base = path.dirname(process.mainModule.filename);

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
    let fs = this._fs;
    let folderPath = this.filePath(path);
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
    let fs = this._fs;
    let path = object.path;
    let filePath = this.filePath(path, object.filename);
    let data = object.data;
    if (object.stringify) {
        data = JSON.stringify(data);
    }
    if (object.compress) {
        data = LZString.compressToBase64(data);
    }
    this.createFolder(path);
    fs.writeFileSync(filePath, data);
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
    let fs = this._fs;
    let filePath = this.filePath(object.path, object.filename);
    let data = null;
    if (fs.existsSync(filePath)) {
        data = fs.readFileSync(filePath, { encoding: 'utf8' });
        if (object.decompress) {
            data = LZString.decompressFromBase64(data);
        }
        if (object.parse) {
            data = JSON.parse(data);
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
    let fs = this._fs;
    let filePath = this.filePath(object.path, object.filename);
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
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
    let fs = this._fs;
    let path = object.path;
    let oldFilePath = this.filePath(path, object.oldName);
    let newFilePath = this.filePath(path, object.newName);
    if (fs.existsSync(oldFilePath) && !fs.existsSync(newFilePath)) {
        fs.renameSync(oldFilePath, newFilePath);
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
    let fs = this._fs;
    let filePath = this.filePath(path, filename);
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

    let locales = this.locales;
    if (!DKTools.Utils.Array.isEmpty(locales)) {
        this.loadLocale();
        if (!this._locale) {
            this._locale = locales[0];
            console.warn('Вы не установили основной язык игры! Автоматически установлена локаль: ' + this._locale); // TODO локализация
            this.saveLocale();
        }
    } else {
        this.removeLocale();
        throw new Error('Добавьте хотя бы один язык! See help of plugin: 1'); // TODO локализация
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
    let locale = DKTools.FileManager.loadFromFile(this._getFileObject());
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
            data: this._locale
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
    let locales = this.locales;
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
    let locales = this.locales;
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
    let locale = this.getPrevLocale();
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
    let locale = this.getNextLocale();
    if (locale) {
        return this._languages[locale];
    }
    return null;
};

/**
 * @static
 */
DKTools.Localization.selectPrevLocale = function() {
    let locale = this.getPrevLocale();
    if (locale) {
        this._setLocale(locale);
    }
};

/**
 * @static
 */
DKTools.Localization.selectNextLocale = function() {
    let locale = this.getNextLocale();
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
            let lastLocale = this._locale;
            this._locale = locale;
            this.saveLocale();
            this.onLocaleChange(lastLocale);
        }
    } else {
        throw new Error('Вы пытаетесь установить несуществующую локаль'); // TODO локализация
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
 * @static
 * @param {String} lastLocale - Предыдущая локаль игры
 */
DKTools.Localization.onLocaleChange = function(lastLocale) {
    // to be overridden by plugins
};





//===========================================================================
// window
//===========================================================================

let DKTools_window_onload = window.onload;
window.onload = function() {
    DKTools.Utils.initialize();
    DKTools.FileManager.initialize();
    DKTools.Localization.initialize();
    DKTools_window_onload.call(this);
    DKTools.PluginManager.initialize();
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

let DKTools_TouchInput_clear = TouchInput.clear;
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

let DKTools_TouchInput_update = TouchInput.update;
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

let DKTools_TouchInput_onLeftButtonDown = TouchInput._onLeftButtonDown;
TouchInput._onLeftButtonDown = function(event) {
    DKTools_TouchInput_onLeftButtonDown.call(this, event);

    let x = Graphics.pageToCanvasX(event.pageX);
    let y = Graphics.pageToCanvasY(event.pageY);
    if (Graphics.isInsideCanvas(x, y)) {
        this._events.leftButtonPressed = true;
    }
};

let DKTools_TouchInput_onMiddleButtonDown = TouchInput._onMiddleButtonDown;
TouchInput._onMiddleButtonDown = function(event) {
    DKTools_TouchInput_onMiddleButtonDown.call(this, event);

    let x = Graphics.pageToCanvasX(event.pageX);
    let y = Graphics.pageToCanvasY(event.pageY);
    if (Graphics.isInsideCanvas(x, y)) {
        this._events.middleButtonPressed = true;
    }
};

let DKTools_TouchInput_onRightButtonDown = TouchInput._onRightButtonDown;
TouchInput._onRightButtonDown = function(event) {
    DKTools_TouchInput_onRightButtonDown.call(this, event);

    let x = Graphics.pageToCanvasX(event.pageX);
    let y = Graphics.pageToCanvasY(event.pageY);
    if (Graphics.isInsideCanvas(x, y)) {
        this._events.rightButtonPressed = true;
    }
};

let DKTools_TouchInput_onMouseMove = TouchInput._onMouseMove;
TouchInput._onMouseMove = function(event) {
    DKTools_TouchInput_onMouseMove.call(this, event);
    let x = Graphics.pageToCanvasX(event.pageX);
    let y = Graphics.pageToCanvasY(event.pageY);
    if (this._mouseX !== x || this._mouseY !== y) {
        this._events.mouseMoved = true;
        this._mouseX = x;
        this._mouseY = y;
    }
};

let DKTools_TouchInput_onMouseUp = TouchInput._onMouseUp;
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
     * @memberOf DKTools.Audio
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
     * @memberOf DKTools.Audio
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
     * @memberOf DKTools.Audio
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
     * @memberOf DKTools.Audio
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
     * @memberOf DKTools.Audio
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
     * @memberOf DKTools.Audio
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
     * @memberOf DKTools.Audio
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
     * @memberOf DKTools.Audio
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
    var configVolume = AudioManager[this._type + 'Volume'];
    var buffer = this._buffer;
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
    var ext = DKTools.Audio.audioFileExt();
    var folder = this._type;
    var name = this._name;
    var url = DKTools.Audio._path + folder + '/' + encodeURIComponent(name) + ext;
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
     * @memberOf DKTools.Event
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
     * @memberOf DKTools.Event
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
     * @memberOf DKTools.Event
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
     * @memberOf DKTools.Event
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
     * @memberOf DKTools.Event
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
     * @memberOf DKTools.Event
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
     * @memberOf DKTools.Event
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
     * @memberOf DKTools.Event
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
     * @memberOf DKTools.Event
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
     * @memberOf DKTools.Event
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
     * @memberOf DKTools.Event
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
     * @memberOf DKTools.Event
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
     * @memberOf DKTools.Event
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
     * @memberOf DKTools.Event
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
 * Инициализирует объект класса
 *
 * @param {Object} object - Объект типа {}
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
     * @memberOf DKTools.Animation
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
     * @memberOf DKTools.Animation.Action
     */
    animation: {
        get: function() {
            return this._animation;
        },
        configurable: true
    },

    /**
     * @type {Number}
     * @memberOf DKTools.Animation.Action
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
     * @memberOf DKTools.Animation.Action
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
     * @memberOf DKTools.Animation.Action
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
    var action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        var remainingTime = this._animation.remainingTime;
        var target = this._target;

        var rotation = (this._data - target.rotation) / remainingTime;
        var newRotation = target.rotation + rotation;
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
    var action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        var remainingTime = this._animation.remainingTime;
        var target = this._target;

        var opacity = (this._data - target.opacity) / remainingTime;
        var newOpacity = target.opacity + opacity;
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
    var action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        var remainingTime = this._animation.remainingTime;
        var target = this._target;

        var windowOpacity = (this._data.windowOpacity - target.windowOpacity) / remainingTime;
        var contentsOpacity = (this._data.contentsOpacity - target.contentsOpacity) / remainingTime;
        var frameOpacity = (this._data.frameOpacity - target.frameOpacity) / remainingTime;
        var backOpacity = (this._data.backOpacity - target.backOpacity) / remainingTime;
        var newOpacity = {
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
    var action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        var remainingTime = this._animation.remainingTime;
        var target = this._target;

        var tint = (this._data - target.tint) / remainingTime;
        var newTint = target.tint + tint;
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
    var action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        var audio = this._data;
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
    var action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        var remainingTime = this._animation.remainingTime;
        var target = this._target;

        var x = (this._data.x - target.x) / remainingTime;
        var y = (this._data.y - target.y) / remainingTime;
        var newX = target.x + x;
        var newY = target.y + y;
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
    var action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        var remainingTime = this._animation.remainingTime;
        var target = this._target;
        var data = this._data;
        var scale = target.scale;

        var x = (data.x - scale.x) / remainingTime;
        var y = (data.y - scale.y) / remainingTime;
        var newX = scale.x + x;
        var newY = scale.y + y;
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
    var action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        var remainingTime = this._animation.remainingTime;
        var target = this._target;
        var data = this._data;
        var skew = target.skew;

        var x = (data.x - skew.x) / remainingTime;
        var y = (data.y - skew.y) / remainingTime;
        var newX = skew.x + x;
        var newY = skew.y + y;
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
    var action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        var remainingTime = this._animation.remainingTime;
        var target = this._target;
        var data = this._data;
        var frame = target.frame;

        var x = (data.x - frame.x) / remainingTime;
        var y = (data.y - frame.y) / remainingTime;
        var width = (data.width - frame.width) / remainingTime;
        var height = (data.height - frame.height) / remainingTime;
        var newFrame = new Rectangle(frame.x + x, frame.y + y, frame.width + width, frame.height + height);
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
    var action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        var remainingTime = this._animation.remainingTime;
        var target = this._target;
        var data = this._data;
        var pivot = target.pivot;

        var x = (data.x - pivot.x) / remainingTime;
        var y = (data.y - pivot.y) / remainingTime;
        var newX = pivot.x + x;
        var newY = pivot.y + y;
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
    var action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        var remainingTime = this._animation.remainingTime;
        var target = this._target;
        var data = this._data;
        var anchor = target.anchor;

        var x = (data.x - anchor.x) / remainingTime;
        var y = (data.y - anchor.y) / remainingTime;
        var newX = anchor.x + x;
        var newY = anchor.y + y;
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
    var action = new DKTools.Animation.Action(object);
    action.setOnUpdateHandler(function() {
        var remainingTime = this._animation.remainingTime;
        var target = this._target;
        var tone = target.tone;

        var toneR = (this._data[0] - tone[0]) / remainingTime;
        var toneG = (this._data[1] - tone[1]) / remainingTime;
        var toneB = (this._data[2] - tone[2]) / remainingTime;

        var newR = tone[0] + toneR;
        var newG = tone[1] + toneG;
        var newB = tone[2] + toneB;
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
     * @memberOf DKTools.Base
     */
    id : {
        get: function() {
            return this._id;
        },
        configurable: true
    },

    /**
     * Шрифт текста
     *
     * @readonly
     * @type {Object}
     * @memberOf DKTools.Base
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
     * @memberOf DKTools.Base
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
     * @memberOf DKTools.Base
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
     * @memberOf DKTools.Base
     */
    fillColor: {
        get: function() {
            return this._fillColor;
        },
        configurable: true
    },

    /**
     * Отображаемый текст
     *
     * @readonly
     * @type {String}
     * @memberOf DKTools.Base
     */
    text: {
        get: function() {
            return this._text;
        },
        configurable: true
    },

    /**
     * Выравнивание текста
     *
     * @readonly
     * @type {String}
     * @memberOf DKTools.Base
     */
    align: {
        get: function() {
            return this._align;
        },
        configurable: true
    },

    /**
     * Координата X мыши внутри объекта
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Base
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
     * @memberOf DKTools.Base
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
     * @memberOf DKTools.Base
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
     * @memberOf DKTools.Base
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
     * @memberOf DKTools.Base
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
    this._clearAll();
    this._createAll();
    this._setupAll();
    this._addAllChildren();
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
    this.setupAll(object);
    this.setupSize(width, height);
};

// _clear methods

/**
 * Очищает все данные
 *
 * @private
 */
DKTools.Base.prototype._clearAll = function() {
    this._clearOptions();
    this._clearEvents();
    this._clearWheel();
    this._clearMouseEnteredTime();
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

/**
 * Очищает весь Bitmap
 * Возвращает true, если Bitmap существует
 *
 * @return {Boolean} Bitmap существует
 */
DKTools.Base.prototype.clear = function() {
    return this.clearRect();
};

/**
 * Очищает отображаемый текст
 *
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 */
DKTools.Base.prototype.clearText = function(blockStart) {
    this.setText('', blockStart); // или null
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
 * @return {Boolean} Стандартная видимость
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
 * Возвращает стандартное название шрифта
 *
 * @static
 * @return {String} Стандартное название шрифта
 */
DKTools.Base.prototype.standardFontFace = function() {
    return 'GameFont';
};

/**
 * Возвращает стандартный размер шрифта
 *
 * @static
 * @return {String} Стандартный размер шрифта
 */
DKTools.Base.prototype.standardFontSize = function() {
    return 28;
};

/**
 * Возвращает стандартный курсив шрифта
 *
 * @static
 * @return {String} Стандартный курсив шрифта
 */
DKTools.Base.prototype.standardFontItalic = function() {
    return false;
};

/**
 * Возвращает стандартный шрифт текста
 *
 * @return {DKTools.Font} Стандартный шрифт текста
 */
DKTools.Base.prototype.standardFont = function() {
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
DKTools.Base.prototype.standardTextColor = function() {
    return '#ffffff';
};

/**
 * Возвращает стандартную прозрачность рисования
 *
 * @return {Number} Стандартная прозрачность рисования
 */
DKTools.Base.prototype.standardPaintOpacity = function() {
    return 255;
};

/**
 * Возвращает стандартный цвет заливки
 *
 * @return {String | null} Стандартный цвет заливки
 */
DKTools.Base.prototype.standardFillColor = function() {
    return null;
};

/**
 * Возвращает стандартный текст
 *
 * @return {String} Стандартный текст
 */
DKTools.Base.prototype.standardText = function() {
    return '';
};

/**
 * Возвращает стандартное выравнивание текста
 *
 * @return {String} Стандартное выравнивание текста
 */
DKTools.Base.prototype.standardAlign = function() {
    return 'center';
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

/**
 * Возвращает стандартный стиль текста
 *
 * @return {Object} Стандартный стиль текста
 */
DKTools.Base.prototype.standardTextStyle = function() {
    var style = {
        fill: 'white',
        strokeThickness: 3,
        fontFamily: this.standardFontFace(),
        fontSize: this.standardFontSize()
    };
    if (this.standardFontItalic()) {
        style.fontStyle = 'italic';
    }
    return style;
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
 * @param {Object} [object.font] - Шрифт текста
 * @param {String} [object.textColor] - Цвет текста
 * @param {Number} [object.paintOpacity] - Прозрачность рисования
 * @param {String} [object.fillColor] - Цвет заливки
 * @param {String} [object.text] - Текст
 * @param {String} [object.align] - Выравнивание текста
 * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.scale] - Масштабирование объекта
 * @param {PPIXI.Point | PIXI.ObservablePoint | Point | Object} [object.pivot] - Точка привязки
 * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.skew] - Перекос объекта
 * @param {Number} [object.rotation] - Вращение объекта
 * @param {Number} [object.tint] - Оттенок объекта
 *
 * @param {String} [object.font.fontFace] - Название шрифта
 * @param {Number} [object.font.fontSize] - Размер шрифта
 * @param {Boolean} [object.font.fontItalic] - Курсив шрифта
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
    this.setupFont(object.font);
    this.setupTextColor(object.textColor);
    this.setupPaintOpacity(object.paintOpacity);
    this.setupFillColor(object.fillColor);
    this.setupText(object.text);
    this.setupAlign(object.align);
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
 * Устанавливает шрифт текста
 *
 * @param {Object} [font] - Объект типа {}
 *
 * @param {String} [font.fontFace] - Название шрифта
 * @param {Number} [font.fontSize] - Размер шрифта
 * @param {Boolean} [font.fontItalic] - Курсив шрифта
 */
DKTools.Base.prototype.setupFont = function(font) {
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
DKTools.Base.prototype.setupTextColor = function(color) {
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
DKTools.Base.prototype.setupPaintOpacity = function(opacity) {
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
DKTools.Base.prototype.setupFillColor = function(color) {
    /**
     * Цвет заливки
     *
     * @private
     * @type {String | null}
     */
    this._fillColor = (color == null ? this.standardFillColor() : color);
};

/**
 * Устанавливает отображаемый текст
 *
 * @param {String} text - Отображаемый текст
 */
DKTools.Base.prototype.setupText = function(text) {
    /**
     * Отображаемый текст
     *
     * @private
     * @type {String}
     */
    this._text = (text == null ? this.standardText() : String(text));
};

/**
 * Устанавливает выравнивание текста
 *
 * @param {String} [align] - Выравнивание текста
 */
DKTools.Base.prototype.setupAlign = function(align) {
    /**
     * Выравнивание текста
     *
     * @private
     * @type {String}
     */
    this._align = align || this.standardAlign();
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
    let scale = DKTools.Utils.Point.convertToPoint(object, y);
    let newScale = Object.assign(this.standardScale(), scale);

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
    let pivot = DKTools.Utils.Point.convertToPoint(object, y);
    let newPivot = Object.assign(this.standardPivot(), pivot);

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
    let skew = DKTools.Utils.Point.convertToPoint(object, y);
    let newSkew = Object.assign(this.standardSkew(), skew);

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
 * @param {Object} [object] - Объект типа {}
 *
 * @param {Object} [object.font] - Шрифт текста
 * @param {String} [object.textColor] - Цвет текста
 * @param {Number} [object.paintOpacity] - Прозрачность рисования
 * @param {String} [object.fillColor] - Цвет заливки
 * @param {String} [object.text] - Текст
 * @param {String} [object.align] - Выравнивание текста
 * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.scale] - Масштабирование объекта
 * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.pivot] - Точка привязки объекта
 * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.skew] - Перекос объекта
 * @param {Number} [object.rotation] - Вращение объекта
 *
 * @param {String} [object.font.fontFace] - Название шрифта
 * @param {Number} [object.font.fontSize] - Размер шрифта
 * @param {Boolean} [object.font.fontItalic] - Курсив шрифта
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
DKTools.Base.prototype.setAll = function(object) {
    object = object || {};
    var changed = 0;
    var block = true;
    if (this.setFont(object.font, block)) {
        changed++;
    }
    if (this.setTextColor(object.textColor, block)) {
        changed++;
    }
    if (this.setPaintOpacity(object.paintOpacity, block)) {
        changed++;
    }
    if (this.setBackgroundColor(object.backgroundColor, block)) {
        changed++;
    }
    if (this.setText(object.text, block)) {
        changed++;
    }
    if (this.setAlign(object.align, block)) {
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
    var lastVisible = this.visible;
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
    var lastActive = this.active;
    this.setupActive(active);
    return lastActive !== this.active;
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
DKTools.Base.prototype.setFont = function(font, blockStart) {
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
DKTools.Base.prototype.setTextColor = function(color, blockRefresh) {
    if (this._textColor === color) {
        return false;
    }
    var lastColor = this._textColor;
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
DKTools.Base.prototype.setPaintOpacity = function(opacity, blockRefresh) {
    if (this._paintOpacity === opacity) {
        return false;
    }
    var lastOpacity = this._paintOpacity;
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
DKTools.Base.prototype.setFillColor = function(color, blockRefresh) {
    if (this._fillColor === color) {
        return false;
    }
    var lastColor = this._fillColor;
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
 * Изменяет отображаемый текст
 * Возвращает true, если изменение произошло
 *
 * @param {String} [text] - Отображаемый текст
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Base.prototype.setText = function(text, blockStart) {
    if (this._text === text) {
        return false;
    }
    var lastText = this._text;
    this.setupText(text);
    if (lastText === this._text) {
        return false;
    }
    if (!blockStart) {
        this.start();
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
DKTools.Base.prototype.setAlign = function(align, blockRefresh) {
    if (this._align === align) {
        return false;
    }
    var lastAlign = this._align;
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
    let newScale = DKTools.Utils.Point.convertToPoint(object, y);
    if (DKTools.Utils.Point.equals(this.scale, newScale)) {
        return false;
    }
    let lastScale = DKTools.Utils.Point.clone(this.scale);
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
    let lastTint = this.tint;
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
 * Удаляет текст, добвленный с помощью addText
 *
 * @param {PIXI.Text} text - Объект текста
 */
DKTools.Base.prototype.removeText = function(text) {
    if (text instanceof PIXI.Text) {
        this.removeChild(text);
    }
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
    let minWidth = this.getMinWidth();
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
    let minHeight = this.getMinHeight();
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

DKTools.Base.prototype.addAllChildren = function() {
    // to be overriden by plugins
};

/**
 * Добавляет текст в объект
 * Возвращает добавленный текст
 *
 * @param {String | PIXI.Text} text - Текст или Объект типа PIXI.Text
 * @param {PIXI.TextStyle | Object} [style] - Стиль текста
 *
 * @see свойства style: PIXI.TextStyle
 *
 * @return {PIXI.Text} Добавленный текст
 */
DKTools.Base.prototype.addText = function(text, style) {
    let textSprite;
    if (text instanceof PIXI.Text) {
        textSprite = text;
    } else {
        textSprite = new PIXI.Text(text, Object.assign(this.standardTextStyle(), style));
    }
    this.addChild(textSprite);
    return textSprite;
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
    this.clear();
    this.drawAll();
    this.updateDrawAllEvents();
};

// get methods

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
 * Возвращает цвет из обложки окна
 *
 * @param {Number} n - Номер цвета
 * @returns {String} Цвет из обложки окна
 */
DKTools.Base.prototype.getWindowskinTextColor = function(n) {
    let px = 96 + (n % 8) * 12 + 6;
    let py = 144 + Math.floor(n / 8) * 12 + 6;
    if (this.hasWindowskin()) {
        return this.windowskin.getPixel(px, py);
    } else {
        let windowskin = ImageManager.loadSystem(this.standardWindowskin());
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
    return (this.hasText() ? this.getTextWidth(this.text) : 0);
};

/**
 * Возвращает минимальную высоту Bitmap
 *
 * @return {Number} Минимальная высота Bitmap
 */
DKTools.Base.prototype.getMinHeight = function() {
    return (this.hasText() ? this.getLineHeight() : 0);
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
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 * @return {DKToolsSprite | DKToolsWindow | *} Клонированный объект
 */
DKTools.Base.prototype.clone = function(blockStart) {
    let clone = new (this.constructor)(this);
    if (!blockStart) {
        clone.start();
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
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Координата X или Point, или Объект типа {}
 * @param {Number} [y] - Координата Y
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 */
DKTools.Base.prototype.move = function(object, y) {
    let x = object; // object - Number
    if (object instanceof Object) {
        x = object.x;
        y = object.y;
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
 *
 * @param {*} child
 */
DKTools.Base.prototype.updateChild = function(child) {
    if (child && child.update) {
        child.update();
    }
};

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
 * Проверяет объект на наличие цвета заливки
 * Возвращает true, если цвет заливки установлен
 *
 * @return {Boolean} Цвет заливки установлен
 */
DKTools.Base.prototype.hasFillColor = function() {
    return !!this.fillColor;
};

/**
 * Проверяет объект на наличие текста
 * Возвращает true, если текст установлен
 *
 * @return {Boolean} Текст установлен
 */
DKTools.Base.prototype.hasText = function() {
    return !!this.text;
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

// draw methods

/**
 * Рисует все
 */
DKTools.Base.prototype.drawAll = function() {
    this.updateFill();
    this.updateText();
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
DKTools.Base.prototype.drawText = function(text, align, object, y, width, height) {
    text = String(text);
    if (!this.hasBitmap() || !text) {
        return false;
    }
    if (object instanceof Object) {
        return this.drawText(text, align, object.x, object.y, object.width, object.height);
    }
    width = width || this.standardDrawWidth();
    height = height || this.standardDrawHeight();
    this.bitmap.drawText(text, object || 0, y || 0, width, height, align || this.align);
    return true;
};

/**
 * Рисует текст (поддерживаются специальные символы)
 * Возвращает ширину текста
 *
 * @param {String} text - Текст
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Координата X или Point, или Объект типа {}
 * @param {Number} [y] - Координата Y
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 *
 * @returns {Number} Ширина текста
 */
DKTools.Base.prototype.drawTextEx = function(text, object, y) {
    text = String(text);
    if (!this.hasBitmap() || !text) {
        return 0;
    }
    if (object instanceof Object) {
        return this.drawTextEx(text, object.x, object.y);
    }
    let x = object || 0; // object - Number
    y = y || 0;
    let textState = { index: 0, x: x, y: y, left: x };
    textState.text = this.convertEscapeCharacters(text);
    textState.height = this.calcTextHeight(textState, false);
    while (textState.index < textState.text.length) {
        this.processCharacter(textState);
    }
    return textState.x - x;
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
    let bitmap = ImageManager.loadSystem('IconSet');
    let pw = Window_Base._iconWidth;
    let ph = Window_Base._iconHeight;
    let sx = iconIndex % 16 * pw;
    let sy = Math.floor(iconIndex / 16) * ph;
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
    let bitmap = ImageManager.loadFace(faceName);
    let pw = Window_Base._faceWidth;
    let ph = Window_Base._faceHeight;
    let sw = Math.min(width, pw);
    let sh = Math.min(height, ph);
    // object - Number
    let dx = Math.floor(object || 0 + Math.max(width - pw, 0) / 2);
    let dy = Math.floor(y || 0 + Math.max(height - ph, 0) / 2);
    let sx = faceIndex % 4 * pw + (pw - sw) / 2;
    let sy = Math.floor(faceIndex / 4) * ph + (ph - sh) / 2;
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
    let bitmap = ImageManager.loadCharacter(characterName);
    let big = ImageManager.isBigCharacter(characterName);
    let pw = bitmap.width / (big ? 3 : 12);
    let ph = bitmap.height / (big ? 4 : 8);
    let n = characterIndex;
    let sx = (n % 4 * 3 + 1) * pw;
    let sy = (Math.floor(n / 4) * 4) * ph;
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
    width = width || 312;
    if (item) {
        let iconBoxWidth = Window_Base._iconWidth + 4;
        this.drawIcon(item.iconIndex, x + 2, y + 2);
        this.drawText(item.name, 'left', x + iconBoxWidth, y, width - iconBoxWidth, this.getLineHeight());
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

// change methods

/**
 * Изменяет цвет текста
 *
 * @param {String} color - Цвет текста
 */
DKTools.Base.prototype.changeTextColor = function(color) {
    if (this.hasBitmap() && this.setTextColor(color, true)) {
        this.updateTextColor();
    }
};

/**
 * Изменяет шрифт текста
 *
 * @param {Object} font - Объект типа {}
 *
 * @param {String} [font.fontFace] - Название шрифта
 * @param {Number} [font.fontSize] - Размер шрифта
 * @param {Boolean} [font.fontItalic] - Курсив шрифта
 */
DKTools.Base.prototype.changeFont = function(font) {
    if (this.hasBitmap() && this.setFont(font, true)) {
        this.updateFont();
    }
};

/**
 * Изменяет прозрачность рисования
 *
 * @param {Number} paintOpacity - Прозрачность рисования
 */
DKTools.Base.prototype.changePaintOpacity = function(paintOpacity) {
    if (this.hasBitmap() && this.setPaintOpacity(paintOpacity, true)) {
        this.updatePaintOpacity();
    }
};

// draw text ex methods

/**
 * Конвертирует экранированные символы
 * Возвращает текст с конвертированными символами
 *
 * @param {String} text - Текст
 * @returns {String} Текст с конвертированными символами
 */
DKTools.Base.prototype.convertEscapeCharacters = function(text) {
    text = text.replace(/\\/g, '\x1b');
    text = text.replace(/\x1b\x1b/g, '\\');
    text = text.replace(/\x1bV\[(\d+)\]/gi, function() {
        return $gameVariables.value(parseInt(arguments[1]));
    }.bind(this));
    text = text.replace(/\x1bV\[(\d+)\]/gi, function() {
        return $gameVariables.value(parseInt(arguments[1]));
    }.bind(this));
    text = text.replace(/\x1bG/gi, TextManager.currencyUnit);
    return text;
};

/**
 * Делает размер шрифта больше
 */
DKTools.Base.prototype.makeFontBigger = function() {
    if (this.bitmap.fontSize <= 96) {
        this.bitmap.fontSize += 12;
    }
};

/**
 * Делает размер шрифта меньше
 */
DKTools.Base.prototype.makeFontSmaller = function() {
    if (this.bitmap.fontSize >= 24) {
        this.bitmap.fontSize -= 12;
    }
};

/**
 * @param {Object} textState -
 * @param {Boolean} all -
 * @returns {Number}
 */
DKTools.Base.prototype.calcTextHeight = function(textState, all) {
    var lastFontSize = this.bitmap.fontSize;
    var textHeight = 0;
    var lines = textState.text.slice(textState.index).split('\n');
    var maxLines = all ? lines.length : 1;

    for (var i = 0; i < maxLines; i++) {
        var maxFontSize = this.bitmap.fontSize;
        var regExp = /\x1b[\{\}]/g;
        for (;;) {
            var array = regExp.exec(lines[i]);
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
    let c = textState.text[textState.index++];
    let w = this.getTextWidth(c);
    this.bitmap.drawText(c, textState.x, textState.y, w * 2, textState.height);
    textState.x += w;
};

/**
 * @param {Object} textState
 */
DKTools.Base.prototype.processNewLine = function(textState) {
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
    // to be overridden by plugins
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
    let index = this.getEventIndex(event);
    if (index >= 0) {
        let container = this.getEventsContainer(event);
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
    let container = this.getEventsContainerByType(type);
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
    let container = this.getEventsContainerByType(type);
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
    let container = this.getEventsContainerByType(type);
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
    let container = this.getEventsContainerByType(type);
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
    let container = this.getEventsContainerByType(type);
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
 * Обновляет события типа drawAll
 */
DKTools.Base.prototype.updateDrawAllEvents = function() {
    this.updateEventsContainer('drawAll');
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
    var container = this.getEventsContainerByType('queue');
    var event = container[0];
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
    var type;
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
        let container = this.getEventsContainer(event);
        container.push(event);
    }
};

/**
 * Добавляет событие
 *
 * @param {DKTools.Event | Object} object - Таймер или Объект типа {}
 *
 * @param {String} object.type - Тип таймера
 * @param {Number} [object.totalDuration] - Длительность события
 * @param {Number} [object.totalRepeats] -
 * @param {Function} [object.onStart] - Обработчик начала работы события
 * @param {Function} object.onUpdate - Обработчик события
 * @param {Function} [object.onFinish] - Обработчик окончания работы события
 * @param {Function} [object.onPause] - Обработчик паузы события
 * // TODO: добавить остальные обработчики
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
    // to be overriden by plugins
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
 * Обновляет шрифт текста
 */
DKTools.Base.prototype.updateFont = function() {
    this.bitmap.fontFace = this.font.fontFace;
    this.bitmap.fontSize = this.font.fontSize;
    this.bitmap.fontItalic = this.font.fontItalic;
};

/**
 * Обновляет цвет текста
 */
DKTools.Base.prototype.updateTextColor = function() {
    this.bitmap.textColor = this.textColor;
};

/**
 * Обновление прозрачности рисования окна
 */
DKTools.Base.prototype.updatePaintOpacity = function() {
    this.bitmap.paintOpacity = this.paintOpacity;
};

/**
 * Обновляет заливку объекта
 */
DKTools.Base.prototype.updateFill = function() {
    if (this.hasFillColor()) {
        this.fillAll(this.fillColor);
    }
};

/**
 * Обновляет отображаемый текст
 */
DKTools.Base.prototype.updateText = function() {
    if (this.hasText()) {
        this.drawText(this.text, this.align);
    }
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
     * @memberOf DKTools.Sprite
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
     * @memberOf DKTools.Sprite
     */
    frame: {
        get: function() {
            return this._frame;
        },
        configurable: true
    },

    /**
     * Ширина спрайта (с учетом масштабирования)
     *
     * @type {Number}
     * @memberOf DKTools.Sprite
     */
    width: {
        get: function() {
            return this._frame.width * this.scale.x;
        },
        set: function(value) {
            this._frame.width = value;
            this._refresh();
        },
        configurable: true
    },

    /**
     * Высота спрайта (с учетом масштабирования)
     *
     * @type {Number}
     * @memberOf DKTools.Sprite
     */
    height: {
        get: function() {
            return this._frame.height * this.scale.y;
        },
        set: function(value) {
            this._frame.height = value;
            this._refresh();
        },
        configurable: true
    },

    /**
     * Реальная ширина спрайта (без учета масштабирования)
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Sprite
     */
    realWidth: {
        get: function() {
            return this._frame.width;
        },
        configurable: true
    },

    /**
     * Реальная высота спрайта (без учета масштабирования)
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Sprite
     */
    realHeight: {
        get: function() {
            return this._frame.height;
        },
        configurable: true
    },

    /**
     * Путь к файлу графики
     *
     * @readonly
     * @type {String}
     * @memberOf DKTools.Sprite
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
     * @memberOf DKTools.Sprite
     */
    graphicName: {
        get: function() {
            return this._graphicName;
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

// standard methods

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
 * @return {String} Стандартное название файла графики
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
 * @return {Point} Стандартная точка привязки текстуры
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
 * @param {Number} [object.anchor.x] - Координата X
 * @param {Number] [object.anchor.y] - Координата Y
 *
 * @see свойства object: DKTools.Base.prototype.setupAll
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
 * @param {Number} [height] - Высота Bitmap
*/
DKTools.Sprite.prototype.setupHeight = function(height) {
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
    if (_.isString(height)) {
        height = this.getLineHeight() * Number(height);
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
 * Устанавливает прозрачность спрайта
 *
 * @param {Number} [opacity] - Прозрачность спрайта
 */
DKTools.Sprite.prototype.setupOpacity = function(opacity) {
    this.opacity = (opacity == null ? this.standardOpacity() : opacity); // TODO: или this._opacity ?
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
    let frame = DKTools.Utils.Rectangle.convertToRectangle(object, y, width, height);
    let newFrame = Object.assign(this.standardFrame(), frame);
    Sprite.prototype.setFrame.call(this, newFrame.x, newFrame.y, newFrame.width, newFrame.height);
};

/**
 *
 * @param object
 * @param y
 */
DKTools.Sprite.prototype.setupAnchor = function(object, y) {
    let anchor = DKTools.Utils.Point.convertToPoint(object, y);
    let newAnchor = Object.assign(this.standardAnchor(), anchor);

    /**
     * Точка привязки текстуры
     *
     * @type {PIXI.ObservablePoint}
     */
    this.anchor.copy(newAnchor);
};

// set methods

// TODO: проверить setAll у всех

/**
 * Изменяет все параметры спрайта
 * Возвращает количество измененных параметров
 *
 * @override
 *
 * @param {Object} [object] - Объект типа {}
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @param {Number} [object.opacity] - Прозрачность спрайта
 * @param {String} [object.graphicName] - Название файла графики
 *
 * @see свойства object: DKTools.Base.prototype.setAll
 *
 * @return {Number} Количество измененных параметров
*/
DKTools.Sprite.prototype.setAll = function(object, blockStart) {
	object = object || {};
    let block = true;
    let changed = DKTools.Base.prototype.setAll.call(this, object);
    if (this.setGraphicName(object.graphicName, block)) {
        changed++;
    }
    if (changed && !blockStart) {
        this.start();
    }
    if (this.setOpacity(object.opacity)) {
        changed++;
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
    let lastGraphic = this._graphicName;
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
 * Изменяет прозрачность спрайта
 * Возвращает true, если изменение произошло
 *
 * @param {Number} [opacity] - Прозрачность спрайта
 * @return {Boolean} Изменение произошло
*/
DKTools.Sprite.prototype.setOpacity = function(opacity) {
	if (this.opacity === opacity) {
        return false;
    }
    let lastOpacity = this.opacity;
	this.setupOpacity(opacity);
	return this.opacity !== lastOpacity;
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
    let newFrame = DKTools.Utils.Rectangle.convertToRectangle(object, y, width, height);
    if (DKTools.Utils.Rectangle.equals(this._frame, newFrame)) {
        return false;
    }
    let lastFrame = DKTools.Utils.Rectangle.clone(this._frame);
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
    let newAnchor = DKTools.Utils.Point.convertToPoint(object, y);
    if (DKTools.Utils.Point.equals(this.anchor, newAnchor)) {
        return false;
    }
    let lastAnchor = DKTools.Utils.Point.clone(this.anchor);
    this.setupAnchor(newAnchor);
    return !DKTools.Utils.Point.equals(this.anchor, lastAnchor);
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
    let minWidth = this.getMinWidth();
    let minHeight = this.getMinHeight();
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

// uncategorized methods

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
    if (this._bitmapWidth === width && this._bitmapHeight === height) {
        return false;
    }
    let lastWidth = this._bitmapWidth;
    let lastHeight = this._bitmapHeight;
    this.setupSize(width, height);
    if (this._bitmapWidth === lastWidth  && this._bitmapHeight === lastHeight) {
        return false;
    }
    if (!blockStart) {
        this.start();
    }
    return true;
};

// has methods

/**
 * Проверяет спрайт на наличие названия файла графики
 * Возвращает true, если название файла графики установлено
 *
 * @return {Boolean} Название файла графики установлено
 */
DKTools.Sprite.prototype.hasGraphicName = function() {
    return !!this._graphicName;
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

// remove methods

/**
 * Удаляет Bitmap спрайта
 */
DKTools.Sprite.prototype.removeBitmap = function() {
    if (this.hasBitmap()) {
        this.setBitmap();
    }
};

/**
 * Удаляет название файла графики
 */
DKTools.Sprite.prototype.removeGraphicName = function() {
    if (this.hasGraphicName()) {
        this.setGraphicName();
    }
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
    let localX = this.canvasToLocalX(x);
    let localY = this.canvasToLocalY(y);
    let frame = DKTools.Utils.Rectangle.clone(this.frame);
    frame.x -= this.width * this.anchor.x;
    frame.y -= this.height * this.anchor.y;
    frame.width *= this.scale.x;
    frame.height *= this.scale.y;
    return frame.contains(localX, localY);
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
    let bitmap = ImageManager.loadBitmap(object, filename, hue, smooth);
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
    let bitmap = ImageManager.reserveBitmap(object, filename, hue, smooth);
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
 * Обрабатывает загрузку графики
 */
DKTools.Sprite.prototype.onGraphicLoad = function() {
    // TODO: сделать через параметр
    // to be overriden by plugins
};

/**
 * Загружает графику из названия файла графики
 *
 * @private
 */
DKTools.Sprite.prototype._loadGraphic = function() {
    if (this.hasGraphicName()) {
        let folder = this.graphicFolder;
        let filename = this.graphicName;
        let listener = this.onGraphicLoad.bind(this);
        this.loadBitmap(folder, filename, listener);
        this.updateReadyEvents();
    }
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





//===========================================================================
// Elements based on DKTools.Sprite
// Элементы, основанные на DKTools.Sprite
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
     * @memberOf DKTools.Sprite.Button
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
     * @memberOf DKTools.Sprite.Button
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
     * @memberOf DKTools.Sprite.Button
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
     * @memberOf DKTools.Sprite.Button
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
    DKTools.Sprite.prototype.setupAll.call(this);
    this.setupLongPressInterval(object.longPressInterval);
};

/**
 *
 * @param {Number} [interval] -
 */
DKTools.Sprite.Button.prototype.setupLongPressInterval = function(interval) {
    this._longPressInterval = interval || this.standardLongPressInterval();
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
     * @memberOf DKTools.Sprite.Cursor
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
     * @memberOf DKTools.Sprite.Cursor
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
    let filename = this.standardWindowskin();
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
 * Устанавливает рамку курсора
 *
 * @param {Number | PIXI.Rectangle | Rectangle | Object} [object] -
 * @param {Number} [y] -
 * @param {Number} [width] -
 * @param {Number} [height] -
 */
DKTools.Sprite.Cursor.prototype.setupCursorRect = function(object, y, width, height) {
    let rect = DKTools.Utils.Rectangle.convertToRectangle(object, y, width, height);

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
 *
 *
 * @override
 *
 * @param {Object} [object] - Объект типа {}
 * @param {Boolean} [blockStart=false] - Блокировка вызова функции start
 *
 * @returns {Number}
 */
DKTools.Sprite.Cursor.prototype.setAll = function(object, blockStart) {
    object = object || {};
    let block = true;
    let changed = DKTools.Sprite.prototype.setAll.call(this, object, block);
    if (changed && !blockStart) {
        this.start();
    }
    if (this.setCursorRect(object.cursorRect)) {
        changed++;
    }
    if (this.setBlinkSpeed(object.blinkSpeed)) {
        changed++;
    }
    return changed;
};

/**
 * Изменяет рамку курсора
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
        return this.setCursorRect(object.x, object.y, object.width, object.height)
    }
    let newRect = DKTools.Utils.Rectangle.convertToRectangle(object, y, width, height);
    if (DKTools.Utils.Rectangle.equals(this._cursorRect, newRect)) {
        return false;
    }
    let lastRect = DKTools.Utils.Rectangle.clone(this._cursorRect);
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
    let x = this._cursorRect.x;
    let y = this._cursorRect.y;
    let w = this._cursorRect.width;
    let h = this._cursorRect.height;
    let m = 4;
    let ox = 0;
    let oy = 0;
    let w2 = Math.min(w, this.parent.width - x);
    let h2 = Math.min(h, this.parent.height - y);

    this.move(x, y);

    if (w > 0 && h > 0) {
        let skin = this._windowskin;
        let bitmap = new Bitmap(w2, h2);
        let p = 96;
        let q = 48;
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
    let blinkCount = this._animationCount % 40;
    let parentOpacity = this.parent.opacity;
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
// DKTools Sprite Selectable
//===========================================================================

// TODO: при клонировании могут клонироваться обработчики item с bind на клонируемый объект
// TODO: Написать про осторожность клонирования

DKTools.Sprite.Selectable.prototype = Object.create(DKTools.Sprite.Button.prototype);
DKTools.Sprite.Selectable.prototype.constructor = DKTools.Sprite.Selectable;

// properties

Object.defineProperties(DKTools.Sprite.Selectable.prototype, {

    /**
     * Индекс
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Sprite.Selectable
     */
    index: {
        get: function() {
            return this._index;
        },
        configurable: true
    },

    /**
     * @readonly
     * @type {Boolean}
     * @memberOf DKTools.Sprite.Selectable
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
     * @memberOf DKTools.Sprite.Selectable
     */
    cursorAll: {
        get: function() {
            return this._cursorAll;
        },
        configurable: true
    },

    /**
     * @readonly
     * @type {Function | null}
     * @memberOf DKTools.Sprite.Selectable
     */
    drawItemHandler: {
        get: function() {
            return this._drawItemHandler;
        },
        configurable: true
    },

    /**
     * @readonly
     * @type {Object[]}
     * @memberOf DKTools.Sprite.Selectable
     */
    items: {
        get: function() {
            return this._items;
        },
        configurable: true
    },

    /**
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Sprite.Selectable
     */
    cols: {
        get: function() {
            return this._cols;
        },
        configurable: true
    },

    /**
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Sprite.Selectable
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
     * @memberOf DKTools.Sprite.Selectable
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
     * @memberOf DKTools.Sprite.Selectable
     */
    textPadding: {
        get: function() {
            return this._textPadding;
        },
        configurable: true
    },

    /**
     * Ширина пункта
     *
     * @readonly
     * @type {Function | Number}
     * @memberOf DKTools.Sprite.Selectable
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
     * @memberOf DKTools.Sprite.Selectable
     */
    itemHeight: {
        get: function() {
            return this._itemHeight;
        },
        configurable: true
    },

    itemAlign: {
        get: function() {
            return this._itemAlign;
        },
        configurable: true
    },

    itemTextColor: {
        get: function() {
            return this._itemTextColor;
        },
        configurable: true
    },

    itemFont: {
        get: function() {
            return this._itemFont;
        },
        configurable: true
    },

    itemPaintOpacity: {
        get: function() {
            return this._itemPaintOpacity;
        },
        configurable: true
    },

    scrollX: {
        get: function() {
            return this._scrollX;
        },
        configurable: true
    },

    scrollY: {
        get: function() {
            return this._scrollY;
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
    this._clearScroll();
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
 * Очищает прокручивание
 *
 * @private
 */
DKTools.Sprite.Selectable.prototype._clearScroll = function() {
    this._clearScrollX();
    this._clearScrollY();
};

/**
 * Очищает прокручивание по оси X
 *
 * @private
 */
DKTools.Sprite.Selectable.prototype._clearScrollX = function() {
    /**
     * @readonly
     * @private
     * @type {Number}
     */
    this._scrollX = 0;
};

/**
 * Очищает прокручивание по оси Y
 *
 * @private
 */
DKTools.Sprite.Selectable.prototype._clearScrollY = function() {
    /**
     * @readonly
     * @private
     * @type {Number}
     */
    this._scrollY = 0;
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
 * @returns {Function}
 */
DKTools.Sprite.Selectable.prototype.standardDrawItemHandler = function() {
    return function(index) {
        var name = this.getItemName(index);
        var rect = this.getItemRectForTextByIndex(index);
        var align = this.getItemAlignByIndex(index);
        var textColor = this.getItemTextColorByIndex(index);
        var font = this.getItemFontByIndex(index);
        var paintOpacity = this.getItemPaintOpacityByIndex(index);
        this.changeTextColor(textColor);
        this.changeFont(font);
        this.changePaintOpacity(paintOpacity);
        this.drawText(name, align, rect);
    }.bind(this);
};

/**
 * Возвращает стандартный индекс
 *
 * @returns {Number} Стандартный индекс
 */
DKTools.Sprite.Selectable.prototype.standardIndex = function() {
    return 0;
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
 * Возвращает стандартное количество столбцов
 *
 * @returns {Number} Стандартное количество столбцов
 */
DKTools.Sprite.Selectable.prototype.standardCols = function() {
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
    return 12;
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
 * Возвращает стандартную ширину пункта
 *
 * @returns {Function} Стандартная ширина пункта
 */
DKTools.Sprite.Selectable.prototype.standardItemWidth = function() {
    return function() {
        var spacing = this._horizontalSpacing;
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

/**
 * Возвращает стандартное выравнивание текста пункта
 *
 * @returns {String} Стандартное выравнивание текста пункта
 */
DKTools.Sprite.Selectable.prototype.standardItemAlign = function() {
    return this.align;
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
 * Возвращает стандартный шрифт текста пункта
 *
 * @returns {Object} Стандартный шрифт текста пункта
 */
DKTools.Sprite.Selectable.prototype.standardItemFont = function() {
    return this.font;
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

// setup methods

/**
 * Устанавливает все параметры
 *
 * @override
 *
 * @param {Object} [object] - Объект типа {}
 *
 * @param {Function} [object.drawItemHandler] - Обработчик рисования пункта
 * @param {Object[]} [object.items] - Список пунктов
 * @param {Number} [object.cols] - Количество столбцов
 * @param {Boolean} [object.cursorFixed] -
 * @param {Boolean} [object.cursorAll] -
 * @param {Number} [object.textPadding] -
 * @param {Function | Number} [object.itemWidth] - Ширина пункта
 * @param {Function | Number} [object.itemHeight] - Высота пункта
 * @param {Function | String} [object.itemAlign] - Выравнивание текста пункта
 * @param {Function | String} [object.itemTextColor] -
 * @param {Function | Object} [object.itemFont] -
 * @param {Function | Number} [object.itemPaintOpacity] -
 * @param {Boolean} [object.fixedHorizontal] -
 *
 * @param {String} [object.itemFont.fontFace] - Название шрифта
 * @param {Number} [object.itemFont.fontSize] - Размер шрифта
 * @param {Boolean} [object.itemFont.fontItalic] - Курсив шрифта
 *
 * @see object properties: DKTools.Sprite.Button.prototype.setupAll
 * @see items properties: DKTools.Sprite.Selectable.prototype.setupItems
 */
DKTools.Sprite.Selectable.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.Sprite.Button.prototype.setupAll.call(this, object);
    this.setupDrawItemHandler(object.drawItemHandler);
    this.setupIndex(object.index);
    this.setupItems(object.items);
    this.setupCols(object.cols); // TODO: переделать в maxCols
    this.setupCursorFixed(object.cursorFixed);
    this.setupCursorAll(object.cursorAll);

    this.setupHorizontalSpacing(object.horizontalSpacing);
    this.setupVerticalSpacing(object.verticalSpacing);

    this.setupTextPadding(object.textPadding);
    this.setupItemWidth(object.itemWidth);
    this.setupItemHeight(object.itemHeight);
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
DKTools.Sprite.Selectable.prototype.setupItems = function(items) { // TODO: проверить логику еще раз (06.09.2017)
    if (items == null) {
        items = this.standardItems();
    }

    _.forEach(items, this._checkItem.bind(this));

    this._items = items;
};

/**
 * Устанавливает количество столбцов
 *
 * @param {Number} [cols] - Количество столбцов
 */
DKTools.Sprite.Selectable.prototype.setupCols = function(cols) {
    /**
     * Количество столбцов
     *
     * @private
     * @readonly
     * @type {Number}
     */
    this._cols = cols || this.standardCols();
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

// set methods

/**
 * Изменяет все параметры
 * Возвращает количество измененных параметров
 *
 * @override
 *
 * @param {Object} [object] - Объект типа {}
 * @param {Boolean} [blockStart=false] - Блокировка вызова функции start
 *
 * @param {Number} [object.cols] - Количество столбцов
 *
 * @returns {Number} Количество измененных параметров
 */
DKTools.Sprite.Selectable.prototype.setAll = function(object, blockStart) {
    object = object || {};
    var block = true;
    var changed = DKTools.Sprite.Button.prototype.setAll.call(this, object, block);
    if (this.setCols(object.cols, block)) {
        changed++;
    }
    if (changed && !blockStart) {
        this.start();
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
    var lastIndex = this._index;
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
DKTools.Sprite.Selectable.prototype.setCols = function(cols, blockRefresh) {
    if (this._cols === cols) {
        return false;
    }
    var lastCols = this._cols;
    this.setupCols(cols);
    if (this._cols === lastCols) {
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
    var lastFixed = this._cursorFixed;
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
    var lastAll = this._cursorAll;
    this.setupCursorAll(cursorAll);
    if (this._cursorAll === lastAll) {
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
    var scrollY = _.clamp(row, 0, this.getMaxTopRow()) * (this.getItemHeight() + this._verticalSpacing);
    if (this._scrollY !== scrollY) {
        this._scrollY = scrollY;
        this.refreshAll();
    }
};

/**
 *
 * @param {Number} col - Номер столбца
 */
DKTools.Sprite.Selectable.prototype.setTopCol = function(col) {
    var scrollX = _.clamp(col, 0, this.getMaxTopCol()) * (this.getItemWidth() + this._horizontalSpacing);
    if (this._scrollX !== scrollX) {
        this._scrollX = scrollX;
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
    var rect = new Rectangle();
    var maxCols = this.getMaxCols();
    rect.width = this.getItemWidth();
    rect.height = this.getItemHeight();
    if (this.isHorizontal()) {
        rect.x = index * (rect.width + this._horizontalSpacing) - this._scrollX;
        rect.y = 0;
    } else {
        rect.x = index % maxCols * (rect.width + this._horizontalSpacing) - this._scrollX;
        rect.y = Math.floor(index / maxCols) * (rect.height + this._verticalSpacing) - this._scrollY;
    }
    return rect;
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
    var rect = this.getItemRectByIndex(index);
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
    var item = this.getItem(index);
    var itemAlign = item.align || this._itemAlign;
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
    var item = this.getItem(index);
    var itemTextColor = item.textColor || this._itemTextColor;
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
    var item = this.getItem(index);
    var itemFont = item.font || this._itemFont;
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
    var item = this.getItem(index);
    var itemPaintOpacity = item.paintOpacity || this._itemPaintOpacity;
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
    var index = this.getTopIndex();
    var maxPageItems = this.getMaxPageItems();
    var maxItems = this.getMaxItems();
    var items = [];
    for(var i = 0; i < maxPageItems && index < maxItems; i++, index++) {
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
    var item = this.getItem(index);
    if (item) {
        var name = item.name;
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
    var item = this.getItem(index);
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
    if (this.isFixedHorizontal()) { // TODO
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
    return this._cols;
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
DKTools.Sprite.Selectable.prototype.getMaxPageCols = function() {
    return Math.floor(this.realWidth / this.getItemWidth());
};

/**
 * @returns {Number}
 */
DKTools.Sprite.Selectable.prototype.getMaxPageRows = function() {
    return Math.floor(this.realHeight / this.getItemHeight());
};

/**
 * @returns {Number}
 */
DKTools.Sprite.Selectable.prototype.getMaxPageItems = function() {
    if (this.isHorizontal()) {
        return this.getMaxPageCols();
    }
    return this.getMaxPageRows() * this.getMaxCols();
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
    var items = [];
    if (_.inRange(row, 0, this.getMaxRows())) {
        var index = row * this.getMaxCols();
        var maxPageItems = this.getMaxPageItems();
        var maxItems = this.getMaxItems();
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
    var items = [];
    if (_.inRange(col, 0, this.getMaxCols())) {
        var maxItems = this.getMaxItems();
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
    return Math.floor(this._scrollY / this.getItemHeight());
};

/**
 * @returns {Number}
 */
DKTools.Sprite.Selectable.prototype.getTopCol = function() {
    return Math.floor(this._scrollX / this.getItemWidth());
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
    return this.isHandled('ok');
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
        var col = this.getCurrentCol();
        return col >= this.getTopCol() && col <= this.getBottomCol();
    }
    var row = this.getCurrentRow();
    return row >= this.getTopRow() && row <= this.getBottomRow();
};

/**
 * Возвращает true, если пункт по индексу включен
 *
 * @param {Number} index - Индекс
 * @returns {Boolean} Пункт по индексу включен
 */
DKTools.Sprite.Selectable.prototype.isItemEnabled = function(index) {
    var item = this.getItem(index);
    if (item) {
        var enabled = item.enabled;
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
    var index = this._index;
    var maxItems = this.getMaxItems();
    var maxCols = this.getMaxCols();
    if (index < maxItems - maxCols || (wrap && maxCols === 1)) {
        this.selectItemByIndex((index + maxCols) % maxItems);
    }
};

/**
 * Обрабатывает перемещение курсора вверх
 *
 * @param {Boolean} [wrap=false] - Циклический выбор
 */
DKTools.Sprite.Selectable.prototype.cursorUp = function(wrap) {
    var index = this._index;
    var maxItems = this.getMaxItems();
    var maxCols = this.getMaxCols();
    if (index >= maxCols || (wrap && maxCols === 1)) {
        this.selectItemByIndex((index - maxCols + maxItems) % maxItems);
    }
};

/**
 * Обрабатывает перемещение курсора вправо
 *
 * @param {Boolean} [wrap=false] - Циклический выбор
 */
DKTools.Sprite.Selectable.prototype.cursorRight = function(wrap) {
    if (this.isHorizontal()) {
        this.selectNext(wrap);
        return;
    }
    var index = this._index;
    var maxItems = this.getMaxItems();
    var maxCols = this.getMaxCols();
    if (maxCols >= 2 && (index < maxItems - 1 || (wrap && this.isHorizontal()))) { // TODO оставить isHorizontal
        this.selectItemByIndex((index + 1) % maxItems);
    }
};

/**
 * Обрабатывает перемещение курсора влево
 *
 * @param {Boolean} [wrap=false] - Циклический выбор
 */
DKTools.Sprite.Selectable.prototype.cursorLeft = function(wrap) {
    if (this.isHorizontal()) {
        this.selectPrev(wrap);
        return;
    }
    var index = this._index;
    var maxItems = this.getMaxItems();
    var maxCols = this.getMaxCols();
    if (maxCols >= 2 && (index > 0 || (wrap && this.isHorizontal()))) { // TODO оставить isHorizontal
        this.selectItemByIndex((index - 1 + maxItems) % maxItems);
    }
};

/**
 * Обратывает перемещение страницы вниз
 */
DKTools.Sprite.Selectable.prototype.cursorPagedown = function() {
    var index = this._index;
    var getMaxItems = this.getMaxItems();
    if (this.isHorizontal()) {
        if (this.getTopCol() + this.getMaxPageCols() < this.getMaxCols()) {
            this.setTopCol(this.getTopCol() + this.getMaxPageCols());
            this.selectItemByIndex(Math.min(index + this.getMaxPageItems(), getMaxItems - 1));
        }
    } else {
        if (this.getTopRow() + this.getMaxPageRows() < this.getMaxRows()) {
            this.setTopRow(this.getTopRow() + this.getMaxPageRows());
            this.selectItemByIndex(Math.min(index + this.getMaxPageItems(), getMaxItems - 1));
        }
    }
};

/**
 * Обрабатывает перемещение страницы вверх
 */
DKTools.Sprite.Selectable.prototype.cursorPageup = function() {
    var index = this._index;
    if (this.isHorizontal()) {
        if (this.getTopCol() > 0) {
            this.setTopCol(this.getTopCol() - this.getMaxPageCols());
            this.selectItemByIndex(Math.max(index - this.getMaxPageItems(), 0));
        }
    } else {
        if (this.getTopRow() > 0) {
            this.setTopRow(this.getTopRow() - this.getMaxPageRows());
            this.selectItemByIndex(Math.max(index - this.getMaxPageItems(), 0));
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
    var lastIndex = this._index;
    var x = TouchInput.x;
    var y = TouchInput.y;
    var hitIndex = this.hitTest(x, y);
    if (hitIndex >= 0) {
        if (hitIndex === this._index) {
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
        var localX = this.canvasToLocalX(x);
        var localY = this.canvasToLocalY(y);
        var index = this.getTopIndex();
        var maxPageItems = this.getMaxPageItems();
        var maxItems = this.getMaxItems();
        for(var i = 0; i < maxPageItems && index < maxItems; i++, index++) {
            var rect = this.getItemRectByIndex(index);
            rect.width *= this.scale.x;
            rect.height *= this.scale.y;
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
    var index = this.getTopIndex();
    var maxPageItems = this.getMaxPageItems();
    var maxItems = this.getMaxItems();
    for(var i = 0; i < maxPageItems && index < maxItems; i++, index++) {
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
    var symbol = this.getCurrentItemSymbol();
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
    this.ensureCursorVisible();
    this.updateCursor();
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
    let index = Math.max(0, this.findSymbol(symbol));
    this.selectItemByIndex(index);
};

/**
 * Выбирает пункт по ext
 *
 * @param {*} ext
 */
DKTools.Sprite.Selectable.prototype.selectExt = function(ext) {
    let index = Math.max(0, this.findExt(ext));
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
    let index = this.getNextIndex(wrap);
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
    let index = this.getPrevIndex(wrap);
    if (index >= 0) {
        this.selectItemByIndex(index);
    }
};

// other methods

/**
 * Обеспечивает видимость курсора
 */
DKTools.Sprite.Selectable.prototype.ensureCursorVisible = function() {
    if (this.isHorizontal()) {
        let col = this.getCurrentCol();
        if (col < this.getTopCol()) {
            this.setTopCol(col);
        } else if (col > this.getBottomCol()) {
            this.setBottomCol(col);
        }
    } else {
        let row = this.getCurrentRow();
        if (row < this.getTopRow()) {
            this.setTopRow(row);
        } else if (row > this.getBottomRow()) {
            this.setBottomRow(row);
        }
    }
};

// remove methods

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
 * Удаляет обработчик выбора по символу
 *
 * @param {String} symbol - Символ
 */
DKTools.Sprite.Selectable.prototype.removeHandler = function(symbol) {
    delete this._handlers[symbol];
};

//

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
    if (this.isHorizontal()) {
        this.setTopCol(0);
    } else {
        this.setTopRow(0);
    }
};

/**
 * Прокручивает вниз
 */
DKTools.Sprite.Selectable.prototype.scrollDown = function() {
    if (this.getTopRow() + 1 < this.getMaxRows()) {
        this.setTopRow(this.getTopRow() + 1);
    }
};

/**
 * Прокручивает вверх
 */
DKTools.Sprite.Selectable.prototype.scrollUp = function() {
    if (this.getTopRow() > 0) {
        this.setTopRow(this.getTopRow() - 1);
    }
};

/**
 * Прокручивает вправо
 */
DKTools.Sprite.Selectable.prototype.scrollRight = function() {
    if (this.getTopCol() + 1 < this.getMaxItems()) {
        this.setTopCol(this.getTopCol() + 1);
    }
};

/**
 * Прокручивает влево
 */
DKTools.Sprite.Selectable.prototype.scrollLeft = function() {
    if (this.getTopCol() > 0) {
        this.setTopCol(this.getTopCol() - 1);
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
        let lastIndex = this._index;
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
        let lastIndex = this._index;
        let x = TouchInput.mouseX;
        let y = TouchInput.mouseY;
        let hitIndex = this.hitTest(x, y);
        if (hitIndex >= 0 && hitIndex !== lastIndex) {
            this.selectItemByIndex(hitIndex);
            this.playCursorSound();
        }
    }
};

DKTools.Sprite.Selectable.prototype.processWheelScroll = function() {
    if (this.isOptionEnabled('wheelScroll') && this.isVisibleAndActive()) {
        let wheelY = this.wheelY;
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
    if (this.isCursorAll()) {
        let allRowsHeight = this.getMaxRows() * this.getItemHeight();
        this.setCursorRect(0, 0, this.realWidth, allRowsHeight);
        this.resetScroll();
    } else if (this.isCursorVisible()) {
        let rect = this.getItemRectByIndex(this._index);
        this.setCursorRect(rect);
    } else {
        this.setCursorRect(Rectangle.emptyRectangle);
    }
};





//===========================================================================
// DKTools Sprite Tab
//===========================================================================

DKTools.Sprite.Tab.prototype = Object.create(DKTools.Sprite.prototype);
DKTools.Sprite.Tab.prototype.constructor = DKTools.Sprite.Tab;

// properties

Object.defineProperties(DKTools.Sprite.Tab.prototype, {

    /**
     * @readonly
     * @type {DKTools.Sprite.Selectable}
     * @memberOf DKTools.Sprite.Tab
     */
    tabSprite: {
        get: function() {
            return this._tabSprite;
        },
        configurable: true
    }

});

// _create methods

DKTools.Sprite.Tab.prototype._createAll = function() {
    DKTools.Sprite.prototype._createAll.call(this);
    this._createTabSprite();
};

DKTools.Sprite.Tab.prototype._createTabSprite = function() {
    this._tabSprite = new DKTools.Sprite.Selectable();

    this._tabSprite.addEvent({
        type: 'select',
        onUpdate: function(event) {
            var index = event.target.index;
            this.selectTab(index);
        }.bind(this)
    });
};

// _add methods

DKTools.Sprite.Tab.prototype._addAllChildren = function() {
    DKTools.Sprite.prototype._addAllChildren.call(this);
    this._addTabSprite();
};

DKTools.Sprite.Tab.prototype._addTabSprite = function() {
    this.addChild(this._tabSprite);
};

// standard methods

DKTools.Sprite.Tab.prototype.standardPadding = function() {
    return 18;
};

DKTools.Sprite.Tab.prototype.standardHorizontalSpacing = function() {
    return 12;
};

DKTools.Sprite.Tab.prototype.standardVerticalSpacing = function() {
    return 12;
};

// setup methods

// DKTools.Sprite.Tab.prototype.setupAll = function(object) {
//     object = object || {};
//     DKTools.Sprite.prototype.setupAll.call(this, object);
// };

DKTools.Sprite.Tab.prototype.setupTabs = function(tabs) {
    this._tabSprite.setupItems(tabs);
};

// set methods



// other methods



// get methods

DKTools.Sprite.Tab.prototype.getTab = function(index) {
    return this._tabSprite.getItem(index);
};

DKTools.Sprite.Tab.prototype.getContents = function(index) {
    let tab = this.getTab(index);
    return tab ? tab.contents : null;
};

DKTools.Sprite.Tab.prototype.getCurrentTab = function() {
    return this.getTab(this._tabSprite.index);
};

DKTools.Sprite.Tab.prototype.getCurrentContents = function() {
    return this.getContents(this._tabSprite.index);
};

DKTools.Sprite.Tab.prototype.getContentsWidth = function() {
    if (this.isHorizontal()) {
        if (this.isStarted()) {
            return this.realWidth;
        }
        return this._bitmapWidth;
    }
    let width = this._bitmapWidth;
    if (this.isStarted()) {
        width = this.realWidth;
    }
    let tabSpriteWidth = this._tabSprite._bitmapWidth;
    if (this._tabSprite.isStarted()) {
        tabSpriteWidth = this._tabSprite.realWidth;
    }
    return width - tabSpriteWidth - this.standardPadding() * 2 - this.standardHorizontalSpacing();
};

DKTools.Sprite.Tab.prototype.getContentsHeight = function() {
    if (this.isHorizontal()) {
        var height = this._bitmapHeight;
        if (this.isStarted()) {
            height = this.realHeight;
        }
        let tabSpriteHeight = this._tabSprite._bitmapHeight;
        if (this._tabSprite.isStarted()) {
            tabSpriteHeight = this._tabSprite.realHeight;
        }
        return height - tabSpriteHeight - this.standardPadding() * 2 - this.standardVerticalSpacing();
    }
    if (this.isStarted()) {
        return this.realHeight;
    }
    return this._bitmapHeight;
};

// start methods

DKTools.Sprite.Tab.prototype.start = function(activate) {
    DKTools.Sprite.prototype.start.call(this, activate);
    this._tabSprite.start(activate);
    this.selectTab(this._tabSprite.index);
};

// is methods

DKTools.Sprite.Tab.prototype.isHorizontal = function() {
    return this._tabSprite.isHorizontal();
};

DKTools.Sprite.Tab.prototype.isVertical = function() {
    return this._tabSprite.isVertical();
};

// has methods

DKTools.Sprite.Tab.prototype.hasContentsSprite = function() {
    return !!this._contentsSprite;
};

// remove methods

DKTools.Sprite.Tab.prototype.removeContentsSprite = function() {
    if (this.hasContentsSprite()) {
        this.removeChild(this._contentsSprite);
        this._contentsSprite = null;
    }
};

// select methods

DKTools.Sprite.Tab.prototype.selectTab = function(index) {
    this.removeContentsSprite();
    var contents = this.getContents(index);
    if (contents) {
        if (!contents.isStarted()) {
            contents.start();
        }
        this._contentsSprite = contents;
        this.addChild(this._contentsSprite);
        this.updateContentsSprite();
    }
};

DKTools.Sprite.Tab.prototype.reselectTab = function() {
    this._tabSprite.reselect();
};

DKTools.Sprite.Tab.prototype.deselectTab = function() {
    this._tabSprite.deselect();
};

// update methods

DKTools.Sprite.Tab.prototype.updateContentsSprite = function() {
    if (this.isHorizontal()) {
        this._contentsSprite.move(0, this._tabSprite.height + this.standardPadding() * 2 + this.standardVerticalSpacing());
    } else {
        this._contentsSprite.move(this._tabSprite.width + this.standardPadding() * 2 + this.standardHorizontalSpacing(), 0);
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
     * @memberOf DKTools.Viewport
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
DKTools.Viewport.prototype.standardShape = function() {
    return 'rect';
};

// setup methods

/**
 * Устанавливает все параметры спрайта
 *
 * @override
 *
 * @param {Object} [object] - Объект типа {}
 *
 * @param {String} [object.maskShape] - Форма маски
 *
 * @see свойства object: DKTools.Sprite.prototype.setupAll
 */
DKTools.Viewport.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.Sprite.prototype.setupAll.call(this, object);
    this.setupShape(object.maskShape);
};

/**
 * Устанавливает форму маски
 *
 * @param {String} [shape] - Форма маски
 */
DKTools.Viewport.prototype.setupShape = function(shape) {
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
 *
 * @param {String} [object.maskShape] - Форма маски
 *
 * @see свойства object: DKTools.Sprite.prototype.setAll
 *
 * @return {Number} Количество измененных параметров
 */
DKTools.Viewport.prototype.setAll = function(object, blockStart) {
    object = object || {};
    let block = true;
    let changed = DKTools.Sprite.prototype.setAll.call(this, object, block);
    if (this.setShape(object.maskShape, block)) {
        changed++;
    }
    if (changed && !blockStart) {
        this.start();
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
DKTools.Viewport.prototype.setShape = function(shape, blockStart) {
    if (this._maskShape === shape) {
        return false;
    }
    let lastShape = this._maskShape;
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
            mask = this.rectMask();
            break;
        case 'circle':
            mask = this.circleMask();
            break;
        case 'ellipse':
            mask = this.ellipseMask();
            break;
        default:
            mask = this.customMask(this._maskShape);
            break;
    }
    this.mask = mask;
};

// mask methods

// TODO: переименовать с get

/**
 * @returns {PIXI.Graphics}
 */
DKTools.Viewport.prototype.rectMask = function() {
    let mask = new PIXI.Graphics();
    mask.beginFill();
    mask.drawRect(this.x, this.y, this.bitmap.width, this.bitmap.height);
    mask.endFill();
    return mask;
};

/**
 * @returns {PIXI.Graphics}
 */
DKTools.Viewport.prototype.circleMask = function() {
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
DKTools.Viewport.prototype.ellipseMask = function() {
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
DKTools.Viewport.prototype.customMask = function(maskShape) {
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

    items: {
        get: function() {
            return this._items;
        },
        configurable: true
    },

    maxCols: {
        get: function () {
            return this._maxCols;
        },
        configurable: true
    },

    rowHeight: {
        get: function () {
            return this._rowHeight;
        },
        configurable: true
    },

    colWidth: {
        get: function () {
            return this._colWidth;
        },
        configurable: true
    },

    horizontalSpacing: {
        get: function () {
            return this._horizontalSpacing;
        },
        configurable: true
    },

    verticalSpacing: {
        get: function () {
            return this._verticalSpacing;
        },
        configurable: true
    },

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
 */
DKTools.Layout.prototype.clearItems = function() {
    this.removeItemsAsChildren();
    this._clearItems();
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
 * Возвращает стандартный список элементов контейнера
 *
 * @returns {Array} Стандартный список элементов контейнера
*/
DKTools.Layout.prototype.standardItems = function() {
	return [];
};

/**
 * Возвращает стандартное количество столбцов
 *
 * @returns {Number} Стандартное количество столбцов
 */
DKTools.Layout.prototype.standardMaxCols = function() {
    return 1;
};

DKTools.Layout.prototype.standardRowHeight = function() {
    return function(row) {
        let items = this.getItemsInRow(row);
        return _.max(_.map(items, 'height'));
    }.bind(this);
};

DKTools.Layout.prototype.standardColWidth = function() {
    return function(col) {
        let items = this.getItemsInCol(col);
        return _.max(_.map(items, 'width'));
    }.bind(this);
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
 * @param {Object} [object] - Объект типа {}
 *
 * @param {Array} [object.items] - Массив с элементами
 * @param {Number} [object.maxCols] - Количество столбцов
 * @param {Number} [object.horizontalSpacing] - Отступ между элементами контейнера по оси X
 * @param {Number} [object.verticalSpacing] - Отступ между элементами контейнера по оси Y
 * @param {Boolean} [object.reversed] - Обратное расположение элементов
 *
 * @see object properties: DKTools.Sprite.prototype.setupAll
*/
DKTools.Layout.prototype.setupAll = function(object) {
	object = object || {};
	DKTools.Sprite.prototype.setupAll.call(this, object);
	this.setupItems(object.items);
    this.setupMaxCols(object.maxCols);
    this.setupRowHeight(object.rowHeight);
    this.setupColWidth(object.colWidth);
    this.setupSpacing(object.horizontalSpacing, object.verticalSpacing);
    this.setupReversed(object.reversed);
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
 * Устанавливает количество столбцов
 *
 * @param {Number} [cols] - Количество столбцов
 */
DKTools.Layout.prototype.setupMaxCols = function(cols) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._maxCols = (cols == null ? this.standardMaxCols() : cols);
};

DKTools.Layout.prototype.setupRowHeight = function(rowHeight) {
    this._rowHeight = rowHeight || this.standardRowHeight();
};

DKTools.Layout.prototype.setupColWidth = function(colWidth) {
    this._colWidth = colWidth || this.standardColWidth();
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
 * @param {Object} [object] - Объект типа {}
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @param {Array} [object.items] - Массив с элементами
 * @param {Number} [object.maxCols] - Количество столбцов
 * @param {Number} [object.horizontalSpacing] - Отступ между элементами контейнера по оси X
 * @param {Number} [object.verticalSpacing] - Отступ между элементами контейнера по оси Y
 * @param {Boolean} [object.reversed] -
 *
 * @see object properties: DKTools.Sprite.prototype.setupAll
 *
 * @return {Number} Количество измененных параметров
*/
DKTools.Layout.prototype.setAll = function(object, blockStart) {
	object = object || {};
	let block = true;
	let changed = DKTools.Sprite.prototype.setAll.call(this, object, block);
	if (this.setItems(object.items, block)) {
        changed++;
    }
    if (this.setMaxCols(object.maxCols, block)) {
        changed++;
    }
    changed += this.setSpacing(object.horizontalSpacing, object.verticalSpacing, block);
    if (this.setReversed(object.reversed, block)) {
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
    if (this._cols === cols) {
        return false;
    }
    let lastCols = this._cols;
    this.setupMaxCols(cols);
    if (this._cols === lastCols) {
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
    let changed = 0;
    let block = true;
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
    this.removeItemsAsChildren();
};

/**
 * Удаляет элементы контейнера из обработки
 */
DKTools.Layout.prototype.removeItemsAsChildren = function() {
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
    this.removeItem(this.getItemByIndex(index), blockStart);
};

// add methods

DKTools.Layout.prototype.addAllChildren = function() {
    DKTools.Sprite.prototype.addAllChildren.call(this);
    this.addItemsAsChildren();
};

/**
 * Добавляет элементы контейнера в обработку
 */
DKTools.Layout.prototype.addItemsAsChildren = function() {
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
    this.setMaxCols(this._maxCols + 1);
};

// get methods

/**
 * @returns {Number}
 */
DKTools.Layout.prototype.getLayoutWidth = function() {
    let width = 0;
    let maxCols = this.getMaxCols();
    for(var i = 1; i <= maxCols; i++) {
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
    let maxRows = this.getMaxRows();
    for(var i = 1; i <= maxRows; i++) {
        height += this.getRowHeight(i) + this._verticalSpacing;
    }
    return height - this._verticalSpacing;
};

DKTools.Layout.prototype.getMaxItems = function() {
    return this._items.length;
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

// uncategorized methods

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
 * Возвращает индекс элемента в контейнере
 *
 * @param {DKToolsSprite} item
 * @return {Number} Индекс элемента в контейнере
 */
DKTools.Layout.prototype.getItemIndex = function(item) {
    return _.indexOf(this.getItems(), item);
};

DKTools.Layout.prototype.getItemByIndex = function(index) {
    return this.getItems()[index];
};

/**
 * Вызывает функцию start у всех элементов контейнера
 *
 * @param {Boolean} [blockStart] - Блокировка вызова функции start контейнера
*/
DKTools.Layout.prototype.startItems = function(activate, blockStart) {
	let callback = function(item) {
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
    this.resizeItem(this.getItemByIndex(index), width, height, blockStart);
};

/**
 * Вызывает функцию resize у всех элементов контейнера
 *
 * @param {Number} [width] - Высота Bitmap
 * @param {Number} [height] - Ширина Bitmap
 * @param {Boolean} [blockStart] - Блокировка вызова функции start контейнера
*/
DKTools.Layout.prototype.resizeItems = function(width, height, blockStart) {
	let callback = function(item) {
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
    let callback = function(item) {
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
    let callback = function(item) {
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
    let callback = function(item) {
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
    let callback = function(item) {
        item.hide(blockDeactivate);
    };
    this.iterateItems(callback, start);
};

/**
 * Возвращает массив с элементами ряда
 *
 * @param {Number} row - Номер ряда
 * @return {Array} Массив с элементами ряда
 */
DKTools.Layout.prototype.getItemsInRow = function(row) {
    let items = [];
    let getMaxRows = this.getMaxRows();
    let getMaxCols = this.getMaxCols();
    if (row < 1 || row > getMaxRows) {
        return items;
    }
    let startIndex = getMaxCols * (row - 1);
    for(var i = 0; i < getMaxCols; i++) {
        let item = this.getItemByIndex(startIndex + i);
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
    let items = [];
    let getMaxRows = this.getMaxRows();
    let getMaxCols = this.getMaxCols();
    if (col < 1 || col > getMaxCols) {
        return items;
    }
    let startIndex = col - 1;
    for(var i = 0; i < getMaxRows; i++) {
        let item = this.getItemByIndex(startIndex + getMaxCols * i);
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
    for(var i = 1; i < row; i++) {
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
    for(var i = 1; i < col; i++) {
        x += this.getColWidth(i) + this._horizontalSpacing;
    }
    return x;
};

/**
 * Возвращает номер строки элемента контейнера
 *
 * @param {DKToolsSprite} item - Элемент контейнера
 * @return {Number} Номер строки элемента контейнера
 */
DKTools.Layout.prototype.getItemRow = function(item) {
    let index = this.getItemIndex(item);
    if (index >= 0) {
        return Math.floor(index / this.getMaxCols()) + 1;
    }
    return -1;
};

/**
 * Возвращает номер столбца элемента контейнера
 *
 * @param {DKToolsSprite} item - Элемент контейнера
 * @return {Number} Номер столбца элемента контейнера
 */
DKTools.Layout.prototype.getItemCol = function(item) {
    let index = this.getItemIndex(item);
    if (index >= 0) {
        return (index % this.getMaxCols()) + 1;
    }
    return -1;
};

DKTools.Layout.prototype.getCell = function(row, col) {
    let index = this.getMaxCols() * (row - 1) + (col - 1);
    return {
        item: this.getItemByIndex(index),
        x: this.getColX(col),
        y: this.getRowY(row),
        width: this.getColWidth(col),
        height: this.getRowHeight(row)
    };
};

// align methods

/**
 * Выравнивает элемент по ширине и высоте
 *
 * @param {DKToolsSprite | Number} object - Элемент или его номер
 */
DKTools.Layout.prototype.alignItem = function(item) {
    if (this.isReady()) {
        let itemRow = this.getItemRow(item);
        let itemCol = this.getItemCol(item);
        let rowHeight = this.getRowHeight(itemRow);
        let colWidth = this.getColWidth(itemCol);
        let x = this.getColX(itemCol) + (colWidth - item.width) / 2;
        let y = this.getRowY(itemRow) + (rowHeight - item.height) / 2;
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
    let items = this.getItemsInRow(row);
    _.forEach(items, this.alignItem.bind(this));
};

/**
 * Выравнивает все элементы столбца по ширине
 *
 * @param {Number} col - Номер столбца
 */
DKTools.Layout.prototype.alignCol = function(col) {
    let items = this.getItemsInCol(col);
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

DKTools.Layout.prototype.updateAll = function() {
    DKTools.Sprite.prototype.updateAll.call(this);
    this.updateLayout();
};

/**
 * Обновляет расположение элементов в контейнере
*/
DKTools.Layout.prototype.updateLayout = function() {
    let getMaxRows = this.getMaxRows();
    let getMaxCols = this.getMaxCols();
    let index = 0;
    for(var i = 1; i <= getMaxRows; i++) {
        for(var j = 1; j <= getMaxCols; j++) {
            let item = this.getItemByIndex(index++);
            let x = this.getColX(j);
            let y = this.getRowY(i);
            item.move(x, y);
            if (this._items.length === index) {
                return;
            }
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
     * Ширина окна (с учетом масштабирования)
     *
     * @type {Number}
     * @memberOf DKTools.Window
     */
    width: {
        get: function() {
            return this._width * this.scale.x;
        },
        set: function(value) {
            this._width = value;
            this._refreshAllParts();
        },
        configurable: true
    },

    /**
     * Высота окна (с учетом масштабирования)
     *
     * @type {Number}
     * @memberOf DKTools.Window
     */
    height: {
        get: function() {
            return this._height * this.scale.y;
        },
        set: function(value) {
            this._height = value;
            this._refreshAllParts();
        },
        configurable: true
    },

    /**
     * Реальная ширина окна (без учета масштабирования)
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Window
     */
    realWidth: {
        get: function() {
            return this._width;
        },
        configurable: true
    },

    /**
     * Реальная высота окна (без учета масштабирования)
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Window
     */
    realHeight: {
        get: function() {
            return this._height;
        },
        configurable: true
    },

    /**
     * @readonly
     * @type {Point}
     * @memberOf DKTools.Window
     */
    origin: {
        get: function() {
            return this._origin;
        },
        configurable: true
    },

    /**
     * Прозрачность
     *
     * @readonly
     * @type {Object}
     * @memberOf DKTools.Window
     */
    opacity: {
        get: function() {
            return this._opacity;
        },
        configurable: true
    },

    /**
     * Прозрачность окна
     *
     * @type {Number}
     * @memberOf DKTools.Window
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
     * @memberOf DKTools.Window
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
     * Тон окна
     *
     * @readonly
     * @type {Number[]}
     * @memberOf DKTools.Window
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
     * @memberOf DKTools.Window
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
     * @memberOf DKTools.Window
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
     * @memberOf DKTools.Window
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
     * @memberOf DKTools.Window
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
 * @see свойства object: DKTools.Base.prototype.initialize
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
    this._createContentsSprite();
    this._createArrowSprites();
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
    if (this.needsBackSprite()) {
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
    if (this.needsFrameSprite()) {
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
 * Создает спрайт контента окна
 *
 * @private
 */
DKTools.Window.prototype._createContentsSprite = function() {
    /**
     * @private
     * @readonly
     * @type {DKTools.Sprite}
     */
    this._windowContentsSprite = new DKTools.Sprite();
};

/**
 * Создает спрайты стрелок
 *
 * @private
 */
DKTools.Window.prototype._createArrowSprites = function() {
    if (this.needsArrowSprites()) {
        this._createDownArrowSprite();
        this._createUpArrowSprite();
        this._createLeftArrowSprite();
        this._createRightArrowSprite();
    }
};

/**
 * Создает спрайт стрелки вниз
 *
 * @private
 */
DKTools.Window.prototype._createDownArrowSprite = function() {
    if (this.needsDownArrowSprite()) {
        /**
         * @private
         * @readonly
         * @type {Sprite}
         */
        this._downArrowSprite = new Sprite();
    }
};

/**
 * Создает спрайт стрелки вверх
 *
 * @private
 */
DKTools.Window.prototype._createUpArrowSprite = function() {
    if (this.needsUpArrowSprite()) {
        /**
         * @private
         * @readonly
         * @type {Sprite}
         */
        this._upArrowSprite = new Sprite();
    }
};

/**
 * Создает спрайт стрелки влево
 *
 * @private
 */
DKTools.Window.prototype._createLeftArrowSprite = function() {
    if (this.needsLeftArrowSprite()) {
        /**
         * @private
         * @readonly
         * @type {Sprite}
         */
        this._leftArrowSprite = new Sprite();
    }
};

/**
 * Создает спрайт стрелки вправо
 *
 * @private
 */
DKTools.Window.prototype._createRightArrowSprite = function() {
    if (this.needsRightArrowSprite()) {
        /**
         * @private
         * @readonly
         * @type {Sprite}
         */
        this._rightArrowSprite = new Sprite();
    }
};

/**
 * Создает спрайт знака паузы
 *
 * @private
 */
DKTools.Window.prototype._createPauseSignSprite = function() {
    if (this.needsPauseSignSprite()) {
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

// _add methods

/**
 * Добавляет объекты в обработку
 *
 * @private
 * @override
 */
DKTools.Window.prototype._addAllChildren = function() {
    DKTools.Base.prototype._addAllChildren.call(this);
    this._addAllPartsAsChildren();
};

/**
 * Добавляет все части окна в обработку
 *
 * @private
 */
DKTools.Window.prototype._addAllPartsAsChildren = function() {
    this._addSpriteContainerAsChild();
    this._addContentsSpriteAsChild();
    this._addArrowSpritesAsChild();
    this._addPauseSignSpriteAsChild();
};

/**
 * Добавляет контейнер спрайтов в обработку
 *
 * @private
 */
DKTools.Window.prototype._addSpriteContainerAsChild = function() {
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
DKTools.Window.prototype._addContentsSpriteAsChild = function() {
    if (this.hasContentsSprite()) {
        this.addChild(this._windowContentsSprite);
    }
};

/**
 * Добавляет спрайты стрелок в обработку
 *
 * @private
 */
DKTools.Window.prototype._addArrowSpritesAsChild = function() {
    this._addDownArrowSpriteAsChild();
    this._addUpArrowSpriteAsChild();
    this._addLeftArrowSpriteAsChild();
    this._addRightArrowSpriteAsChild();
};

/**
 * Добавляет спрайт стрелки вниз в обработку
 *
 * @private
 */
DKTools.Window.prototype._addDownArrowSpriteAsChild = function() {
    if (this.hasDownArrowSprite()) {
        this.addChild(this._downArrowSprite);
    }
};

/**
 * Добавляет спрайт стрелки вверх в обработку
 *
 * @private
 */
DKTools.Window.prototype._addUpArrowSpriteAsChild = function() {
    if (this.hasUpArrowSprite()) {
        this.addChild(this._upArrowSprite);
    }
};

/**
 * Добавляет спрайт стрелки влево в обработку
 *
 * @private
 */
DKTools.Window.prototype._addLeftArrowSpriteAsChild = function() {
    if (this.hasLeftArrowSprite()) {
        this.addChild(this._leftArrowSprite);
    }
};

/**
 * Добавляет спрайт стрелки вправо в обработку
 *
 * @private
 */
DKTools.Window.prototype._addRightArrowSpriteAsChild = function() {
    if (this.hasRightArrowSprite()) {
        this.addChild(this._rightArrowSprite);
    }
};

/**
 * Добавляет спрайт знака паузы в обработку
 *
 * @private
 */
DKTools.Window.prototype._addPauseSignSpriteAsChild = function() {
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

    // TODO: протестировать
    var contentsSprite = object.contentsSprite;
    if (object instanceof DKTools.Window && object.contentsSprite instanceof DKTools.Sprite) {
        contentsSprite = contentsSprite.clone();
    }
    if (contentsSprite) {
        this.setupContentsSprite(contentsSprite);
    }

    this.setupContentsWidth(object.contentsWidth);
    this.setupContentsHeight(object.contentsHeight);
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
    this.width = this._checkWidth(width);
};

/**
 * Устанавливает высоту окна
 *
 * @param {Number} [height] - Высота окна
 */
DKTools.Window.prototype.setupHeight = function(height) {
    this.height = this._checkHeight(height);
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

DKTools.Window.prototype.setupContentsPosition = function(object, y) {
    var position = DKTools.Utils.Point.convertToPoint(object, y);
    this._contentsPosition = Object.assign(this.standardContentsPosition(), position);
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
    var standardTone = _.clone(this.standardTone());

    /**
     * @private
     * @type {Number[]}
     */
    this._tone = Object.assign(standardTone, tone);
};

DKTools.Window.prototype.setupWindowskin = function() {

};

DKTools.Window.prototype.setupContentsSprite = function(contentsSprite) {
    this._windowContentsSprite = contentsSprite;
};

// set methods

/**
 * Изменяет все параметры окна
 * Возвращает количество измененных параметров
 *
 * @override
 *
 * @param {Object} [object] - Объект типа {}
 *
 * @param {Object} [object.opacity] - Прозрачность
 * @param {Number[]} [object.tone] - Тон окна
 *
 * @param {Number} [object.windowOpacity] - Прозрачность окна
 * @param {Number} [object.contentsOpacity] - Прозрачность контента окна
 * @param {Number} [object.frameOpacity] - Прозрачность рамки окна
 * @param {Number} [object.backOpacity] - Прозрачность заднего фона окна
 *
 * @see свойства object: DKTools.Base.prototype.setAll
 *
 * @return {Number} Количество измененных параметров
*/
DKTools.Window.prototype.setAll = function(object, blockStart) {
	object = object || {};
	var block = true;
	var changed = DKTools.Base.prototype.setAll.call(this, object);
	if (changed && !blockStart) {
        this.start();
    }
    if (this.setOpacity(object.opacity, block)) {
        changed++;
    }
    if (this.setTone(object.tone, block)) {
        changed++;
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
DKTools.Window.prototype.setWidth = function(width, blockStart) {
    return this.resize(width, this.height, blockStart);
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
DKTools.Window.prototype.setHeight = function(height, blockStart) {
    return this.resize(this.width, height, blockStart);
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
    var standardTone = _.clone(this.standardTone());
    if (_.isEqual(this._tone, Object.assign(standardTone, tone))) {
        return false;
    }
    this.setupTone(tone);
    if (!blockUpdate) {
        this.updateTone();
    }
    return true;
};

DKTools.Window.prototype.setContentsSprite = function(contentsSprite, blockStart) {
    if (this.hasContentsSprite()) {
        this.removeChild(this._windowContentsSprite);
        this._windowContentsSprite = null;
    }
    this.setupContentsSprite(contentsSprite);
    if (!blockStart) {
        this.start();
    }
};

// get methods

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

// needs methods

/**
 * Возвращает true, если нужно создать спрайт заднего фона окна
 *
 * @return {Boolean} Нужно создать спрайт заднего фона окна
 */
DKTools.Window.prototype.needsBackSprite = function() {
    return true;
};

/**
 * Возвращает true, если нужно создать спрайт рамки окна
 *
 * @return {Boolean} Нужно создать спрайт рамки окна
 */
DKTools.Window.prototype.needsFrameSprite = function() {
    return true;
};

/**
 * Возвращает true, если нужно создать спрайты стрелок
 *
 * @return {Boolean} Нужно создать спрайты стрелок
 */
DKTools.Window.prototype.needsArrowSprites = function() {
    return true;
};

/**
 * Возвращает true, если нужно создать спрайт стрелки вниз
 *
 * @return {Boolean} Нужно создать спрайт стрелки вниз
 */
DKTools.Window.prototype.needsDownArrowSprite = function() {
    return true;
};

/**
 * Возвращает true, если нужно создать спрайт стрелки вверх
 *
 * @return {Boolean} Нужно создать спрайт стрелки вверх
 */
DKTools.Window.prototype.needsUpArrowSprite = function() {
    return true;
};

/**
 * Возвращает true, если нужно создать спрайт стрелки влево
 *
 * @return {Boolean} Нужно создать спрайт стрелки влево
 */
DKTools.Window.prototype.needsLeftArrowSprite = function() {
    return true;
};

/**
 * Возвращает true, если нужно создать спрайт стрелки вправо
 *
 * @return {Boolean} Нужно создать спрайт стрелки вправо
 */
DKTools.Window.prototype.needsRightArrowSprite = function() {
    return true;
};

/**
 * Возвращает true, если нужно создать спрайт знака паузы
 *
 * @return {Boolean} Нужно создать спрайт знака паузы
 */
DKTools.Window.prototype.needsPauseSignSprite = function() {
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
    this._refreshArrows();
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
        // this.moveContents(this.standardContentsPosition());
        this.moveContents(this._contentsPosition);
    }
};

/**
 * Обновляет спрайты стрелок
 *
 * @private
 * @override
 */
DKTools.Window.prototype._refreshArrows = function() {
    var w = this._width;
    var h = this._height;
    var bitmap = this._windowskin;
    var p = 24;
    var q = p / 2;
    var sx = 96 + p;
    var sy = p;
    if (this.hasDownArrowSprite()) {
        this._downArrowSprite.bitmap = bitmap;
        this._downArrowSprite.anchor.x = 0.5;
        this._downArrowSprite.anchor.y = 0.5;
        this._downArrowSprite.setFrame(sx + q, sy + q + p, p, q);
        this._downArrowSprite.move(w / 2, h - q);
    }
    if (this.hasUpArrowSprite()) {
        this._upArrowSprite.bitmap = bitmap;
        this._upArrowSprite.anchor.x = 0.5;
        this._upArrowSprite.anchor.y = 0.5;
        this._upArrowSprite.setFrame(sx + q, sy, p, q);
        this._upArrowSprite.move(w / 2, q);
    }
    if (this.hasLeftArrowSprite()) {
        this._leftArrowSprite.bitmap = bitmap;
        this._leftArrowSprite.anchor.x = 0.5;
        this._leftArrowSprite.anchor.y = 0.5;
        this._leftArrowSprite.setFrame(sx, sy + q, q, p);
        this._leftArrowSprite.move(q, h / 2);
    }
    if (this.hasRightArrowSprite()) {
        this._rightArrowSprite.bitmap = bitmap;
        this._rightArrowSprite.anchor.x = 0.5;
        this._rightArrowSprite.anchor.y = 0.5;
        this._rightArrowSprite.setFrame(sx + q + p, sy + q, q, p);
        this._rightArrowSprite.move(w - q, h / 2);
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

DKTools.Window.prototype.start = function(activate) {
    DKTools.Base.prototype.start.call(this, activate);
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.start(activate);
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
    var minWidth = this.getMinWidth();
    var minHeight = this.getMinHeight();
    var changed = 0;
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
 * Создает все объекты
 *
 * @override
 */
DKTools.Window.prototype.createAll = function() {
    DKTools.Base.prototype.createAll.call(this);
    this.createContents();
};

/**
 * Создает содержимое окна
 *
 * @override
 */
DKTools.Window.prototype.createContents = function() {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.resize(this.getContentsWidth(), this.getContentsHeight());
        this._refreshContents();
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
    let localX = this.canvasToLocalX(x);
    let localY = this.canvasToLocalY(y);
    let frame = new Rectangle(this.x, this.y, this.width, this.height);
    return frame.contains(localX, localY);
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
 * Возвращает true, если окно содержит спрайты стрелок
 *
 * @return {Boolean} Окно содержит спрайты стрелок
 */
DKTools.Window.prototype.hasArrowSprites = function() {
    return this.hasDownArrowSprite() && this.hasUpArrowSprite() &&
            this.hasLeftArrowSprite() && this.hasRightArrowSprite();
};

/**
 * Возвращает true, если окно содержит спрайт стрелки вниз
 *
 * @return {Boolean} Окно содержит спрайт стрелки вниз
 */
DKTools.Window.prototype.hasDownArrowSprite = function() {
    return !!this._downArrowSprite;
};

/**
 * Возвращает true, если окно содержит спрайт стрелки вверх
 *
 * @return {Boolean} Окно содержит спрайт стрелки вверх
 */
DKTools.Window.prototype.hasUpArrowSprite = function() {
    return !!this._upArrowSprite;
};

/**
 * Возвращает true, если окно содержит спрайт стрелки влево
 *
 * @return {Boolean} Окно содержит спрайт стрелки влево
 */
DKTools.Window.prototype.hasLeftArrowSprite = function() {
    return !!this._leftArrowSprite;
};

/**
 * Возвращает true, если окно содержит спрайт стрелки вправо
 *
 * @return {Boolean} Окно содержит спрайт стрелки вправо
 */
DKTools.Window.prototype.hasRightArrowSprite = function() {
    return !!this._rightArrowSprite;
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
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Window.prototype.resize = function(width, height, blockStart) {
    width = (width == null ? this.getMinWidth() : width);
    height = (height == null ? this.getMinHeight() : height);
    if (this.width === width && this.height === height) {
        return false;
    }
    let lastWidth = this.width;
    let lastHeight = this.height;
    this.setupSize(width, height);
    if (this.width === lastWidth  && this.height === lastHeight) {
        return false;
    }
    if (!blockStart) {
        this.start();
    }
    return true;
};

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

// reset methods

/**
 * Сбрасывает шрифт текста
 *
 * @override
 */
DKTools.Window.prototype.resetFontSettings = function() {
};

/**
 * Сбрасывает цвет текста
 *
 * @override
 */
DKTools.Window.prototype.resetTextColor = function() {
};

// move methods

/**
 * @param {PIXI.Point | Point | Number | Object} object
 * @param {Number} y
 */
DKTools.Window.prototype.moveContents = function(object, y) {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.move(object, y);
    }
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
 * Обновляет видимость спрайтов стрелок
 *
 * @private
 * @override
 */
DKTools.Window.prototype._updateArrows = function() {
    let isOpen = this.isOpen();
    if (this.hasDownArrowSprite()) {
        this._downArrowSprite.visible = isOpen && this.downArrowVisible;
    }
    if (this.hasUpArrowSprite()) {
        this._upArrowSprite.visible = isOpen && this.upArrowVisible;
    }
    if (this.hasLeftArrowSprite()) {
        this._leftArrowSprite.visible = isOpen && this.leftArrowVisible;
    }
    if (this.hasRightArrowSprite()) {
        this._rightArrowSprite.visible = isOpen && this.rightArrowVisible;
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
    this.updateOpacity();
    this.updateTone();
    this.updateContents();
};

/**
 * Обновляет спрайт контента окна
 */
DKTools.Window.prototype.updateContents = function() {
    if (this.hasContentsSprite() && this.hasBitmap()) {
        this.updateFont();
        this.updateTextColor();
        this.updatePaintOpacity();
    }
};

/**
 * Обновляет части окна
 */
DKTools.Window.prototype.updateTransform = function() {
    this._updateContents();
    this._updateArrows();
    this._updatePauseSign();
    PIXI.Container.prototype.updateTransform.call(this);
};

/**
 * Обновляет прозрачность окна
 */
DKTools.Window.prototype.updateOpacity = function() {
    var opacity = this.opacity;
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
*/
DKTools.Window.prototype.updateTone = function() {
    if (this.hasBackSprite()) {
        Window.prototype.setTone.apply(this, this.tone);
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

/**
 * Обновляет стрелки окна
 */
DKTools.Window.prototype.updateArrows = function() {
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
    this.updateArrows();
};





//===========================================================================
// DK Tools Window Selectable
//===========================================================================

DKTools.Window.Selectable.prototype = Object.create(DKTools.Window.prototype);
DKTools.Window.Selectable.prototype.constructor = DKTools.Window.Selectable;

// _create methods

/**
 * @private
 * @override
 */
DKTools.Window.Selectable.prototype._createContentsSprite = function() {
    this._windowContentsSprite = new DKTools.Sprite.Selectable();
};

// is methods

DKTools.Window.Selectable.prototype.isHorizontal = function() {
    if (this.hasContentsSprite()) {
        return this._windowContentsSprite.isHorizontal();
    }
    return false;
};

// refresh methods

DKTools.Window.Selectable.prototype.refreshAll = function() {
    DKTools.Window.prototype.refreshAll.call(this);
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.refreshAll();
    }
};

// udpdate methods

DKTools.Window.Selectable.prototype.updateArrows = function() {
    if (this.hasContentsSprite()) {
        var contentsSprite = this._windowContentsSprite;
        if (contentsSprite.isSelectable()) {
            if (contentsSprite.isVertical()) {
                var getTopRow = contentsSprite.getTopRow();
                var getMaxTopRow = contentsSprite.getMaxTopRow();
                this.downArrowVisible = getMaxTopRow > 0 && getTopRow < getMaxTopRow;
                this.upArrowVisible = getTopRow > 0;
            }
        }
    }
};





//===========================================================================
// DK Tools Window Tab
//===========================================================================

DKTools.Window.Tab.prototype = Object.create(DKTools.Window.prototype);
DKTools.Window.Tab.prototype.constructor = DKTools.Window.Tab;

// _create methods

DKTools.Window.Tab.prototype._createContentsSprite = function() {
    this._windowContentsSprite = new DKTools.Sprite.Tab();

    this._windowContentsSprite.setupSize(this.getContentsWidth(), this.getContentsHeight());
};

// standard methods

// setup methods

// DKTools.Window.Tab.prototype.setupTabs = function(tabs) {
//
// };

// add methods

// DKTools.Window.Tab.prototype.addTab = function(name, tab) {
//     this._windowTabSprite.addCommand(name);
//     this._tabs[name] = tab;
// };

// start methods

// create methods

// start methods

// DKTools.Window.Tab.prototype.standardVerticalSpacing = function() {
//     return 12;
// };

// other methods

// DKTools.Window.Tab.prototype.showTab = function(tab) {
//
// };
//
// DKTools.Window.Tab.prototype.hideTab = function(tab) {
//
// };
//
// DKTools.Window.Tab.prototype.tabName = function(tab) {
//
// };
//
// DKTools.Window.Tab.prototype.tabIndex = function() {
//
// };
//
// DKTools.Window.Tab.prototype.tabHeight = function() {
//     return this.getLineHeight();
// };
//
// DKTools.Window.Tab.prototype.tabPadding = function() {
//     return 0;
// };
//
// DKTools.Window.Tab.prototype.tabContentsSize = function() {
//     return {
//         width: this.width - this.standardPadding() * 2,
//         height: this.height - this.standardPadding() * 2 - this.tabHeight() - this.tabPadding()
//     }
// };
//
// DKTools.Window.Tab.prototype.selectTab = function(index) {
//     if (this._windowContentsSprite) {
//         this.removeChild(this._windowContentsSprite);
//         this._windowContentsSprite = null;
//     }
//     var item = this._windowTabSprite.getItem(index);
//     this._windowContentsSprite = item.content;
//     this._windowContentsSprite.move(this.standardPadding(), this.standardPadding() * 3 + this.standardVerticalSpacing() + this._windowTabSprite.height);
//     if (!this._windowContentsSprite.isStarted()) {
//         this._windowContentsSprite.start();
//     }
//     this.addChild(this._windowContentsSprite);
// };





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
    this._setupAll();
    this._createAll();
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

// _setup methods

/**
 * Устанавливает все данные
 *
 * @private
 */
DKTools.Scene.prototype._setupAll = function() {
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

// start methods

/**
 *
 *
 * @override
 */
DKTools.Scene.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    this.startAllSprites();
    this.startAllWindows();
};

DKTools.Scene.prototype.startAllSprites = function() {
};

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

/**
 * Возвращает true, если сцена готова
 *
 * @override
 * @return {Boolean} Сцена готова
 */
DKTools.Scene.prototype.isReady = function() {
    if (!Scene_Base.prototype.isReady.call(this)) {
        return false;
    }
    var ready = false;
    var callback = function(child) {
        if (child.isReady && child.isReady()) {
            ready = true;
        }
    }.bind(this);
    this.iterateChildren(callback);
    // return ready;
    return true;
};

/**
 * Возвращает true, если сцена занята
 *
 * @override
 * @return {Boolean} Сцена занята
 */
DKTools.Scene.prototype.isBusy = function() {
    if (Scene_Base.prototype.isBusy.call(this)) {
        return true;
    }
    var busy = false;
    var callback = function(child) {
        if (child.isBusy && child.isBusy()) {
            busy = true;
        }
    }.bind(this);
    this.iterateChildren(callback);
    return busy || !this.isReady();
};

// update methods

DKTools.Scene.prototype.update = function() {
    this.updateChildren();
    this.updateFade();
};

DKTools.Scene.prototype.updateChildren = function() {
    this.iterateChildren(this.updateChild);
};

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





//===========================================================================
// DKTools Updates
//===========================================================================

DKTools.Updates.checkUpdates = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://dk-plugins.ru/updates.json');
    xhr.setRequestHeader('Cache-Control', 'no-cache');
    xhr.overrideMimeType('application/json');
    xhr.onload = function() {
        if (xhr.status < 400) {
            SceneManager.push(DKTools.Updates.Scene);
            SceneManager.prepareNextScene(JSON.parse(xhr.responseText));
        }
    }
    xhr.send();
};





//===========================================================================
// DKTools Updates Scene
//===========================================================================

DKTools.Updates.Scene = function() {
    this.initialize.apply(this, arguments);
};

DKTools.Updates.Scene.prototype = Object.create(DKTools.Scene.prototype);
DKTools.Updates.Scene.prototype.constructor = DKTools.Updates.Scene;

DKTools.Updates.Scene.prototype.prepare = function(updates) {
    this._updates = updates;
};

// create methods

DKTools.Updates.Scene.prototype.createAllWindows = function() {
    this.createTitleWindow();
};

DKTools.Updates.Scene.prototype.createTitleWindow = function() {
    this._titleWindow = new DKTools.Window(0, 0, Graphics.boxWidth);
    this._titleWindow.setText('DKPlugins Updates');
    this.addWindow(this._titleWindow);
};