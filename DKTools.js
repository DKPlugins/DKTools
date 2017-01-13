/*
Title: DKTools
Author: DK (Denis Kuznetsov) (http://vk.com/dk_plugins)
Site: http://dk-plugins.ru
Group in VK: http://vk.com/dkplugins
Version: 0.95 beta
Release: 13.01.2017
First release: 13.01.2016
Supported languages: Russian, English
*/

/*
Название: DKTools
Автор: DK (Денис Кузнецов) (http://vk.com/dk_plugins)
Сайт: http://dk-plugins.ru
Группа ВК: http://vk.com/dkplugins
Версия: 0.95 beta
Релиз: 13.01.2017
Первый релиз: 13.01.2016
Поддерживаемые языки: Русский, Английский
*/

var DKLocalization = DKLocalization || {};

//===========================================================================
// Settings of the plugin
// Настройки плагина
//===========================================================================

/* Instruction

 Translation settings
 Plugin language: translation

 */

/* Инструкция

 Настройки перевода
 Язык плагина: перевод

 */

DKLocalization.DKTools = {
    updateRequired: {
        ru: 'Требуется обновить плагин "DKTools" до минимальной версии',
        en: 'Required to update the plugin "DKTools" to minimal version'
    },
    installedVersion: {
        ru: 'Установлено',
        en: 'Installed'
    }
};

//===========================================================================
// End of the plugin settings
// Конец настройки плагина
//===========================================================================

/*:
* @plugindesc v.0.95 beta Basic elements
* @author DK (Denis Kuznetsov)
* @help

 ### Info about plugin ###
 Title: DKTools
 Author: DK (Denis Kuznetsov) (http://vk.com/dk_plugins)
 Site: http://dk-plugins.ru
 Group in VK: http://vk.com/dkplugins
 Version: 0.95 beta
 Release: 13.01.2017
 First release: 13.01.2016
 Supported languages: Russian, English

 ### Elements ###
 1. DKTools.Sprite
 2. DKTools.Viewport
 3. DKTools.ContainerBase
 4. DKTools.TextContainer
 5. DKTools.Container
 6. DKTools.Window
 7. DKTools.Scene

 ### Create objects ###

 ### Setup functions ###

 ### Set functions ###

 ### License and terms of use for plugin ###
 You can:
 -Free use the plugin for your commercial and non commercial projects.
 -Translate the plugin to other languages (please, inform, if you do this)

 You can't:
 -Delete or change any information about plugin (Title, authorship, contact information, version and release)
 -Change code of plugin out of border "Plugin settings" and "End of plugin settings" (if you found a bug contact me)

 * @param Plugin Language
 * @desc Plugin language (ru - russian, en - english)
 * @default en

 * @param Open Console
 * @desc Open a debug console (true or false)
 * @default false

*/

/*:ru
* @plugindesc v.0.95 beta Базовые элементы
* @author DK (Денис Кузнецов)
* @help

 ### Информация о плагине ###
 Название: DKTools
 Автор: DK (Денис Кузнецов) (https://vk.com/dk_plugins)
 Сайт: http://dk-plugins.ru
 Группа ВК: http://vk.com/dkplugins
 Версия: 0.95 beta
 Релиз: 13.01.2017
 Первый релиз: 13.01.2016
 Поддерживаемые языки: Русский, Английский
 
 ### Элементы ###
 1. DKTools.Sprite
 2. DKTools.Viewport
 3. DKTools.ContainerBase
 4. DKTools.TextContainer
 5. DKTools.Container
 6. DKTools.Window
 7. DKTools.Scene
 
 ### Создание объектов ###
 Создание объекта состоит из 4 этапов
 I этап:
 Создание самого объекта с помощью оператора new и передача конструктору необходимых параметров
 
 var object = new DKTools.Sprite(x, y, width, height);
 
 II этап:
 Установка параметров
 Для этого существуют setup функции
 Установка параметров осуществляется либо setupAll функцией сразу всех параметров, либо setup функцией для определенного параметра
 
 object.setupAll(parameters);
 или
 object.setupOpacity(opacity);
 object.setupAlign('center');
 и т.д.
 
 III этап:
 Запуск объекта
 Запуск объекта подразумевает применение всех установленных параметров, создание спрайтов, битмапов и т.д.
 
 object.start();
 
 IV этап:
 Добавление объекта в обработку
 
 this.addChild(object);
 или
 this.addWindow(object);
 
 ### Setup функции ###
 setup функции устанавливают объекту различные параметры без их применения
 Например, вызывали вы setupText(text), текст записывается в переменную, но Bitmap объекта не обновляется
 Каждая setup функция может вызываться без параметров. В таком случае будут применены стандартные параметры, определенные в настройках плагина
 
 ### Set функции ###
 set функции изменяют и применяют (если они были изменены) различные параметры
 set функции сравнивают предыдущее значение параметра с новым и, если они отличаются, то вызывается функция для применения этого параметра
 Например, вызвали вы setText(text), если text отличается от установленного ранее, то запишется новое значение в переменную и
 вызовется функция для обновления отображения текста (например, updateText())	
 Каждая set функция возвращает логическое значение true или false (true в случае, если изменение произошло)
 Эти функции сделаны для сокращения количества ложных обновлений объектов
 
 ### Лицензия и правила использования плагина ###
 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)
 
 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Начало настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)

 * @param Plugin Language
 * @desc Язык плагина (ru - русский, en - английский)
 * @default ru

 * @param Open Console
 * @desc Открыть отладочную консоль (true - да, false - нет)
 * @default false
 
*/

var Imported = Imported || {};
Imported.DKTools = true;

var DKVersion = DKVersion || {};
DKVersion.DKTools = 0.95;

var DKToolsVersion = DKToolsVersion || {};

var DKToolsParam = {};
DKToolsParam.param = PluginManager.parameters('DKTools');

/**
 * Локаль игры
 *
 * @type {String}
 */
var DKLocale = DKLocale || DKToolsParam.param['Plugin Language'];

DKToolsParam.openConsole = DKToolsParam.param['Open Console'];

//===========================================================================
// DK Localization Manager
//===========================================================================

var DKLocalizationManager = DKLocalizationManager || null;

if (!DKLocalizationManager) {

    /**
     * Статический класс, который управляет локализацией
     *
     * @class DKLocalizationManager
     */
    DKLocalizationManager = function () {
        throw new Error('This is a static class (Это статический класс!)');
    };

    DKLocalizationManager.setLocale = function(locale) {
        if (DKLocale === locale) {
            return false;
        }
        DKLocale = locale;
        ConfigManager.save();
        this.onLocaleChange(DKLocale);
        return true;
    };

    DKLocalizationManager.onLocaleChange = function() {
    };

    DKLocalizationManager.translation = function(plugin, param) {
        var pluginLocalization = DKLocalization[plugin];
        var locale = DKLocale;
        if (!pluginLocalization) {
            var error = 'undefined plugin: "%1"'.format(plugin);
            throw new Error(error);
        }
        var paramTranslation = pluginLocalization[param];
        if (!paramTranslation) {
            var error = '%1: undefined parameter: "%2"'.format(plugin, param);
            throw new Error(error);
        }
        var result = paramTranslation[locale];
        if (!result) {
            var error = '%1: undefined locale: "%2"'.format(plugin, locale);
            throw new Error(error);
        }
        return result;
    };

    DKLocalizationManager.format = function(string, params) {
        return string.replace(/%([0-9]+)/g, function (s, n) {
            return params[Number(n) - 1];
        });
    };

    DKLocalizationManager.parser = function(plugin, match, param) {
        return this.translation(plugin, param);
    };

    DKLocalizationManager.arrayParser = function(plugin, index, match, param) {
        return this.translation(plugin, param)[index] || '';
    };

    //===========================================================================
    // Config Manager
    //===========================================================================

    var DKTools_ConfigManager_makeData = ConfigManager.makeData;
    ConfigManager.makeData = function() {
        var config = DKTools_ConfigManager_makeData.call(this);
        config.DKLocale = DKLocale;
        return config;
    };

    var DKTools_ConfigManager_applyData = ConfigManager.applyData;
    ConfigManager.applyData = function(config) {
        DKTools_ConfigManager_applyData.call(this, config);
        DKLocale = this.readDKLocale(config);
    };

    /**
     * @method readDKLocale
     * @param {Object} config
     * @return {String}
     */
    ConfigManager.readDKLocale = function(config) {
        return config.DKLocale ? config.DKLocale : DKLocale;
    };
}

DKLocalizationManager.DKTools = function(string, params) {
    var plugin = 'DKTools';
    string = string.replace(/#([^#]+)#/g, this.parser.bind(this, plugin));
    return this.format(string, params);
};

//===========================================================================
// DKTools
//===========================================================================

/**
 * @class DKTools
 * @constructor
 */
function DKTools() {
	throw new Error('This is a static class (Это статический класс!)');
}

// properties

Object.defineProperties(DKTools, {

    /**
     * Версия DKTools
     *
     * @readonly
     * @type {Number}
     */
    version: {
        get: function() {
            return DKVersion.DKTools;
        },
        configurable: true
    },

    /**
     * Локаль игры
     *
     * @type {String}
     */
    locale: {
        get: function() {
            return DKLocale;
        },
        set: function(value) {
            DKLocalizationManager.setLocale(value);
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
 */
DKTools.Utils = function() {
    throw new Error('This is a static class (Это статический класс!)');
};

/**
 * Статический класс, который управляет вводом текста с клавиатуры
 *
 * @class DKTools.InputManager
 * @constructor
 */
DKTools.InputManager = function() {
    throw new Error('This is a static class (Это статический класс!)');
};

/**
 * Класс события для спрайта и окна
 *
 * @class DKTools.Event
 * @constructor
 */
DKTools.Event = function() {
	this.initialize.apply(this, arguments);
};

/**
 * Абстрактный базовый класс для спрайта и окна
 *
 * @class DKTools.Base
 *
 * @constructor
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
	throw new Error('This is a static class (Это статический класс!)');
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
 * Класс вьюпорта
 *
 * @class DKTools.Viewport
 * @augments DKTools.Sprite
 *
 * @override
 * @constructor
 *
 * @param {Number | Bitmap | Rectangle | Object} [object] - Координата X или Rectangle, или Bitmap, или Объект типа {}
 * @param {Number} [y] - Координата Y
 * @param {Number} [width] - Ширина Bitmap
 * @param {Number} [height] - Высота Bitmap
 *
 * @see object properties: DKTools.Sprite.prototype.initialize
 */
DKTools.Viewport = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 * Класс базового контейнера
 *
 * @class DKTools.ContainerBase
 * @augments DKTools.Sprite
 *
 * @override
 * @constructor
 *
 * @param {Number | Object} [object] - Координата X или Объект типа {}
 * @param {Number} [y] - Координата Y
 *
 * @see object properties: DKTools.Sprite.prototype.initialize
 */
DKTools.ContainerBase = function(object, y) {
	this.initialize.apply(this, arguments);
};

/**
 * Класс контейнера с текстом
 *
 * @class DKTools.TextContainer
 * @augments DKTools.ContainerBase
 *
 * @override
 * @constructor
 *
 * @param {Number | Object} [object] - Координата X или Объект типа {}
 * @param {Number} [y] - Координата Y
 *
 * @see object properties: DKTools.ContainerBase.prototype.initialize
 */
DKTools.TextContainer = function(object, y) {
	this.initialize.apply(this, arguments);
};

/**
 * Класс контейнера
 *
 * @class DKTools.Container
 * @augments DKTools.TextContainer
 *
 * @override
 * @constructor
 *
 * @param {Number | Object} [object] - Координата X или Объект типа {}
 * @param {Number} [y] - Координата Y
 *
 * @see object properties: DKTools.TextContainer.prototype.initialize
 */
DKTools.Container = function(object, y) {
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

/**
 * Класс сцены
 *
 * @class DKTools.Scene
 * @augments Scene_Base
 *
 * @constructor
 */
DKTools.Scene = function() {
	this.initialize.apply(this, arguments);
};

//===========================================================================
// DK Tools Utils
//===========================================================================

/**
 * Режим разработчика
 * Позволяет получить доступ к некоторым функциям
 * Функции могут быть с багами
 *
 * @type {Boolean}
 */
DKTools.Utils.debug = false;

/**
 * @type {Object}
 */
DKTools.Utils.booleanFalse = {
    ru: ['нет', 'выключить', 'выкл', 'отключить', 'ложь', 'убрать'],
    en: ['false', 'disable', 'deactivate', 'no', 'not', 'off']
};

/**
 * @static
 * @method initialize
 */
DKTools.Utils.initialize = function() {
    this._checkVersion();
    if (this.toBoolean(DKToolsParam.openConsole)) {
        this.openConsole();
    }
};

/**
 * @static
 * @method booleanArray
 * @return {Array}
 */
DKTools.Utils.booleanArray = function() {
    var array = [];
    for(var locale in this.booleanFalse) {
        array = array.concat(this.booleanFalse[locale]);
    }
    return array;
};

/**
 * Переводит строку или число в Boolean
 *
 * @static
 * @method toBoolean
 * @param {String | Number} value
 * @return {Boolean} Строка или число в Boolean
 */
DKTools.Utils.toBoolean = function(value) {
    if (value == null || Number(value) === 0) {
        return false;
    }
    value = String(value).toLowerCase();
    var booleanFalse = this.booleanArray();
    return !booleanFalse.contains(value);
};

/**
 * Разделяет строку на массив строк по запятым
 *
 * @static
 * @method splitString
 * @param {String} string - Строка
 * @return {String[]} Массив строк
 */
DKTools.Utils.splitString = function(string) {
    string = string.replace(/\s*\,\s*/g, ',');
    return string.split(',');
};

/**
 * Разделяет строку на массив чисел по запятым
 *
 * @static
 * @method stringToNumberArray
 * @param {String} string - Строка
 * @return {Number[]} Массив чисел
 */
DKTools.Utils.stringToNumberArray = function(string) {
    if (string && string.constructor === String) {
        var array = this.splitString(string);
        return array.map(function(value) {
            return Number(value);
        });
    }
    return [];
};

/**
 * Разделяет строку на массив Boolean по запятым
 *
 * @static
 * @method stringToBooleanArray
 * @param {String} string - Строка
 * @return {Boolean[]} Массив Boolean
 */
DKTools.Utils.stringToBooleanArray = function(string) {
    if (string && string.constructor === String) {
        var array = this.splitString(string);
        return array.map(function(value) {
            return this.toBoolean(value);
        }, this);
    }
    return [];
};

/**
 * Возвращает массив шрифта из строки
 *
 * @static
 * @method stringToFontArray
 * @param {String} string - Строка
 * @return {Array} Массив шрифта из строки
 */
DKTools.Utils.stringToFontArray = function(string) {
    var standardFont = this.standardFontArray();
    var font = [];
    if (string && string.constructor === String) {
        var array = this.splitString(string);
        font[0] = (array[0] === '-1' ? standardFont[0] : array[0]);
        font[1] = this.toBoolean(array[1]);
        font[2] = (array[2] === '-1' ? standardFont[2] : Number(array[2]));
    }
    return font;
};

/**
 * Возвращает стандартное имя шрифта
 *
 * @static
 * @method standardFontName
 * @return {String} Стандартное имя шрифта
 */
DKTools.Utils.standardFontName = function() {
    return 'GameFont';
};

/**
 * Возвращает стандартное значение для курсива
 *
 * @static
 * @method standardFontItalic
 * @return {Boolean} Стандартное значение для курсива
 */
DKTools.Utils.standardFontItalic = function() {
    return false;
};

/**
 * Возвращает стандартный размер шрифта
 *
 * @static
 * @method standardFontSize
 * @return {Number} Стандартный размер шрифта
 */
DKTools.Utils.standardFontSize = function() {
    return 28;
};

/**
 * Возвращает стандартный шрифт текста
 *
 * @static
 * @method standardFontArray
 * @return {Array} Стандартный шрифт текста
 */
DKTools.Utils.standardFontArray = function() {
    return [this.standardFontName(), this.standardFontItalic(), this.standardFontSize()];
};

/**
 * Копирует функции и свойства из одного класса в другой
 *
 * @static
 * @method mixin
 * @param {Object} target - Куда копируем
 * @param {Object} source - Откуда копируем
*/
DKTools.Utils.mixin = function(target, source) {
    var keys = Object.getOwnPropertyNames(source);
    keys.forEach(function(key) {
        var property = Object.getOwnPropertyDescriptor(source, key);
        Object.defineProperty(target, key, property);
    });
};

/**
 * Открывает консоль
 *
 * @static
 * @method openConsole
 */
DKTools.Utils.openConsole = function() {
    if (Utils.isNwjs() && Utils.isOptionValid('test')) {
        var debugWindow = require('nw.gui').Window.get().showDevTools();
        debugWindow.moveTo(0, 0);
        window.focus();
    }
};

/**
 * Проверяет минимальную версию плагина
 *
 * @private
 * @static
 * @method _checkVersion
 */
DKTools.Utils._checkVersion = function() {
    var data = [];
    for(var plugin in DKToolsVersion) {
        var version = DKToolsVersion[plugin];
        data.push(version);
    }
    var max = Math.max.apply(Math, data);
    var error = DKLocalizationManager.DKTools('#updateRequired#: %1 (#installedVersion#: %2)', [max, DKVersion.DKTools]);
    if (max > DKVersion.DKTools) {
        throw new Error(error);
    }
};

//===========================================================================
// DKTools Input Manager
//===========================================================================

/**
 * Игнорируемые клавиши
 *
 * @private
 * @type {Number[]}
 */
DKTools.InputManager._ignoredKeyCodes = [8, 13, 27];

/**
 * @private
 * @static
 * @method _isIgnored
 * @param {Number} keyCode - Код клавиши
 * @return {Boolean}
 */
DKTools.InputManager._isIgnored = function(keyCode) {
	return this._ignoredKeyCodes.contains(keyCode);
};

/**
 * Обрабатывает нажатие клавиши клавиатуры
 *
 * @private
 * @static
 * @method _onKeyPress
 * @param {KeyboardEvent} event - Событие
 */
DKTools.InputManager._onKeyPress = function(event) {
	if (this._isIgnored(event.keyCode)) {
        return;
    }
	if (this.hasText()) {
        this._text += String.fromCharCode(event.charCode);
    } else {
        this._text = String.fromCharCode(event.charCode);
    }
};

/**
 * Очищает введенный текст
 *
 * @static
 * @method clear
 */
DKTools.InputManager.clear = function() {
	this._text = '';
};

/**
 * Возвращает true, если пользователь ввел какой-нибудь текст
 *
 * @static
 * @method hasText
 * @return {Boolean} Пользователь ввел какой-нибудь текст
 */
DKTools.InputManager.hasText = function() {
	return !!this._text;
};

/**
 * Возвращает введенный текст
 *
 * @static
 * @method getText
 * @return {String} Введенный текст
 */
DKTools.InputManager.getText = function() {
	if (!this.hasText()) {
        return '';
    }
	var text = this._text;
	this.clear();
	return text;
};

//===========================================================================
// Scene Manager
//===========================================================================

var DKTools_SceneManager_initialize = SceneManager.initialize;
SceneManager.initialize = function() {
    DKTools_SceneManager_initialize.call(this);
    DKTools.Utils.initialize();
};

//===========================================================================
// Input
//===========================================================================

Input.keyMapper[8] = 'backspace';   // backspace
Input.keyMapper[32] = 'space';      // space
Input.keyMapper[46] = 'delete';     // delete

var DKTools_Input_clear = Input.clear;
Input.clear = function() {
	DKTools_Input_clear.call(this);
	DKTools.InputManager.clear();
};

var DKTools_Input_setupEventHandlers = Input._setupEventHandlers;
Input._setupEventHandlers = function () {
	DKTools_Input_setupEventHandlers.call(this);
    document.addEventListener('keypress', DKTools.InputManager._onKeyPress.bind(DKTools.InputManager));
};

//===========================================================================
// Touch Input
//===========================================================================

Object.defineProperties(TouchInput, {

    /**
     * Координата X мыши
     *
     * @readonly
     * @type {Number}
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
     */
    mouseY: {
        get: function() {
            return this._mouseY;
        },
        configurable: true
    },
});

var DKTools_TouchInput_clear = TouchInput.clear;
TouchInput.clear = function() {
    DKTools_TouchInput_clear.call(this);
    this._mouseMoved = false;
    this._events.mouseMoved = false;
    this._mouseX = 0;
    this._mouseY = 0;
};

var DKTools_TouchInput_update = TouchInput.update;
TouchInput.update = function() {
    this._mouseMoved = this._events.mouseMoved;
    this._events.mouseMoved = false;
    DKTools_TouchInput_update.call(this);
};

/**
 * Возвращает true, если мышь двигается
 *
 * @static
 * @method isMouseMoved
 * @return {Boolean} Мышь двигается
 */
TouchInput.isMouseMoved = function() {
    return this._mouseMoved;
};

var DKTools_TouchInput_onMouseMove = TouchInput._onMouseMove;
TouchInput._onMouseMove = function(event) {
    DKTools_TouchInput_onMouseMove.call(this, event);
    var x = Graphics.pageToCanvasX(event.pageX);
    var y = Graphics.pageToCanvasY(event.pageY);
    if (this._mouseX !== x || this._mouseY !== y) {
        this._events.mouseMoved = true;
        this._mouseX = x;
        this._mouseY = y;
    }
};

//===========================================================================
// Bitmap
//===========================================================================

/**
 * Рисует линию
 *
 * @method drawLine
 *
 * @param {Number} x1 - Координата X начала линии
 * @param {Number} y1 - Координата Y начала линии
 * @param {Number} x2 - Координата X конца линии
 * @param {Number} y2 - Координата Y конца линии
 * @param {String} color - Цвет линии
 * @param {Number} [lineWidth] - Ширина линии
 */
Bitmap.prototype.drawLine = function(x1, y1, x2, y2, color, lineWidth) {
    var context = this._context;
    context.save();
    context.lineWidth = lineWidth || 1;
    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.restore();
    this._setDirty();
};

/**
 * Рисует прямоугольник без заливки
 *
 * @method strokeRect
 *
 * @param {Number} x - Координата X
 * @param {Number} y - Координата Y
 * @param {Number} width - Ширина прямоугольника
 * @param {Number} height - Высота прямоугольника
 * @param {String} color - Цвет линии
 * @param {Number} [lineWidth] - Ширина линии
 */
Bitmap.prototype.strokeRect = function(x, y, width, height, color, lineWidth) {
    var context = this._context;
    context.save();
    context.lineWidth = lineWidth || 10;
    context.strokeStyle = color;
    context.strokeRect(x, y, width, height);
    context.restore();
    this._setDirty();
};

/**
 * Рисует дугу и заливает ее цветом
 *
 * @method fillArc
 *
 * @param {Number} x - Координата X
 * @param {Number} y - Координата Y
 * @param {Number} radius - Радиус дуги
 * @param {Number} startAngle - Стартовый угол
 * @param {Number} endAngle - Конечный угол
 * @param {String} color - Цвет заливки
 * @param {Boolean} [antiClockwise] - Против часовой стрелки
 */
Bitmap.prototype.fillArc = function (x, y, radius, startAngle, endAngle, color, antiClockwise) {
    var context = this._context;
    context.save();
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, antiClockwise);
    context.fill();
    context.restore();
    this._setDirty();
};

/**
 * Рисует дугу без заливки
 *
 * @method strokeArc
 *
 * @param {Number} x - Координата X
 * @param {Number} y - Координата Y
 * @param {Number} radius - Радиус дуги
 * @param {Number} startAngle - Стартовый угол
 * @param {Number} endAngle - Конечный угол
 * @param {String} color - Цвет линии
 * @param {Boolean} [antiClockwise] - Против часовой стрелки
 * @param {Number} [lineWidth] - Ширина линии
 */
Bitmap.prototype.strokeArc = function (x, y, radius, startAngle, endAngle, color, antiClockwise, lineWidth) {
    var context = this._context;
    context.save();
    context.lineWidth = lineWidth || 1;
    context.strokeStyle = color;
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, antiClockwise);
    context.stroke();
    context.restore();
    this._setDirty();
};

/**
 * Клонирует Bitmap
 *
 * @method clone
 * @return {Bitmap} Клонированный Bitmap
 */
Bitmap.prototype.clone = function() {
    var oldCanvas = this.canvas;
    var newBitmap = new Bitmap(oldCanvas.width, oldCanvas.height);
    var newContext = newBitmap.context;
    newContext.drawImage(oldCanvas, 0, 0);
    return newBitmap;
};

//===========================================================================
// Point
//===========================================================================

/**
 * Пустой Point
 *
 * @readonly
 * @type {Point}
 */
Point.emptyPoint = new Point(0, 0);

/**
 * @method isEmpty
 * @return {Boolean}
 */
Point.prototype.isEmpty = function() {
    return this.equals(Point.emptyPoint);
};

/**
 * Возвращает массив с координатами
 *
 * @method toArray
 * @return {Number[]} Массив с координатами
 */
Point.prototype.toArray = function() {
    return [this.x, this.y];
};

/**
 * Возвращает объект с координатами
 *
 * @method toObject
 * @return {Object} Объект с координатами
 */
Point.prototype.toObject = function() {
    return { x: this.x, y: this.y };
};

/**
 * Сравнивает координаты
 * Возвращает true, если координаты равны
 *
 * @method equals
 * @param {Point} point
 * @return {Boolean} Координаты равны
 */
Point.prototype.equals = function(point) {
    point = point || Point.emptyPoint;
    return this.x === point.x && this.y === point.y;
};

/**
 * Клонирует Point
 * Возвращает клонированный Point
 *
 * @method clone
 * @return {Point} Клонированный Point
 */
Point.prototype.clone = function() {
    return new Point(this.x, this.y);
};

//===========================================================================
// Rectangle
//===========================================================================

/**
 * @method isEmpty
 * @return {Boolean}
 */
Rectangle.prototype.isEmpty = function() {
    return this.equals(Rectangle.emptyRectangle);
};

/**
 * Возвращает массив с координатами
 *
 * @method toArray
 * @return {Number[]} Массив с координатами
 */
Rectangle.prototype.toArray = function() {
    return [this.x, this.y, this.width, this.height];
};

/**
 * Возвращает объект с координатами
 *
 * @method toObject
 * @return {Object} Объект с координатами
 */
Rectangle.prototype.toObject = function() {
    return { x: this.x, y: this.y, width: this.width, height: this.height };
};

/**
 * @method equals
 * @param {Rectangle} rect
 * @return {Boolean}
 */
Rectangle.prototype.equals = function(rect) {
    rect = rect || Rectangle.emptyRectangle;
    return this.x === rect.x && this.y === rect.y && this.width === rect.width && this.height === rect.height;
};

/**
 * Клонирует Rectangle
 * Возвращает клонированный Rectangle
 *
 * @method clone
 * @return {Rectangle} Клонированный Rectangle
 */
Rectangle.prototype.clone = function() {
    return new Rectangle(this.x, this.y, this.width, this.height);
};

//===========================================================================
// Array
//===========================================================================

Object.defineProperties(Array.prototype, {

    /**
     * Подсчитывает количество item в массиве
     * Возвращает количество item в массиве
     *
     * @method count
     * @param {*} item - Элемент, количество которого нужно найти
     * @return {Number} Количество item в массиве
     */
    count: {
        configurable: true,
        enumerable: false,
        value: function(item) {
            var amount = 0;
            for(var i = 0; i < this.length; i++) {
                if (this[i] === item || (Number.isNaN(this[i]) && Number.isNaN(item))) {
                    amount++;
                }
            }
            return amount;
        }
    },

    /**
     * Суммирует количество объектов в массиве
     * Возвращает сумму количества объектов в массиве
     *
     * @method counts
     * @param {...Number} arguments
     * @return {Number} Сумма количества объектов в массиве
     */
    counts: {
        configurable: true,
        enumerable: false,
        value: function() {
            if (this.isEmpty()) {
                return 0;
            }
            var array = arguments;
            if (arguments.length === 1 && arguments[0] instanceof Array) {
                array = arguments[0];
            }
            var amount = 0;
            for(var i = 0; i < array.length; i++) {
                amount += this.count(array[i]);
            }
            return amount;
        }
    },

    /**
     * Возвращает реальную длину массива без учета NaN, null и undefined значений
     *
     * @method realLength
     * @return {Number} Длина массива
     */
    realLength: {
        configurable: true,
        enumerable: false,
        value: function() {
            return this.length - this.counts(Number.NaN, null, undefined);
        }
    },

    /**
     * Проверяет массив на пустоту
     * Возвращает true, если массив пуст
     *
     * @method isEmpty
     * @return {Boolean} Массив пуст
     */
    isEmpty: {
        configurable: true,
        enumerable: false,
        value: function() {
            return this.length === 0;
        }
    },

    /**
     * Проверяет массив на содержание NaN, null и undefined
     * Возвращает true, если массив содержит NaN, null или undefined
     *
     * @method isNeedCompact
     * @return {Boolean} Массив содержит NaN, null или undefined
     */
    isNeedCompact: {
        configurable: true,
        enumerable: false,
        value: function() {
            return this.length !== this.realLength();
        }
    },

    /**
     * Проверяет, что массив содержит только Number
     * Возвращает true, если массив содержит только Number
     *
     * @method isNumberArray
     * @return {Boolean} Массив содержит только Number
     */
    isNumberArray: {
        configurable: true,
        enumerable: false,
        value: function() {
            if (this.isNeedCompact()) {
                return false;
            }
            for(var i = 0; i < this.length; i++) {
                if (this[i].constructor !== Number) {
                    return false;
                }
            }
            return !this.isEmpty();
        }
    },

    /**
     * Проверяет, что массив содержит только Boolean
     * Возвращает true, если массив содержит только Boolean
     *
     * @method isBooleanArray
     * @return {Boolean} Массив содержит только Boolean
     */
    isBooleanArray: {
        configurable: true,
        enumerable: false,
        value: function() {
            if (this.isNeedCompact()) {
                return false;
            }
            for(var i = 0; i < this.length; i++) {
                if (this[i].constructor !== Boolean) {
                    return false;
                }
            }
            return !this.isEmpty();
        }
    },

    /**
     * Проверяет, что массив содержит только String
     * Возвращает true, если массив содержит только String
     *
     * @method isStringArray
     * @return {Boolean} Массив содержит только String
     */
    isStringArray: {
        configurable: true,
        enumerable: false,
        value: function() {
            if (this.isNeedCompact()) {
                return false;
            }
            for(var i = 0; i < this.length; i++) {
                if (!(this[i] instanceof String)) {
                    return false;
                }
            }
            return !this.isEmpty();
        }
    },

    /**
     * Сжимает массив, удаляя NaN, null и undefined
     * Возвращает сжатый массив без NaN, null и undefined
     *
     * @method compact
     * @return {Array} Сжатый массив без NaN, null и undefined
     */
    compact: {
        configurable: true,
        enumerable: false,
        value: function() {
            if (!this.isNeedCompact()) {
                return this;
            }
            for(var i = 0; i < this.length; i++) {
                var value = this[i];
                if (value instanceof Array) {
                    value.compact();
                    continue;
                }
                if (value == null || Number.isNaN(value)) {
                    this.splice(i, 1);
                    return this.compact();
                }
            }
            return this;
        }
    },

    /**
     * Удаляет item из массива
     *
     * @method remove
     * @param {*} item - Элемент, который требуется удалить
     */
    remove: {
        configurable: true,
        enumerable: false,
        value: function(item) {
            var index = this.indexOf(item);
            if (index >= 0) {
                this[index] = null;
            }
            this.compact();
        }
    },

    /**
     * Вставляет item в массив
     *
     * @method insert
     * @param {Number} index - Номер, куда вставить item
     * @param {*} item - Элемент, который нужно вставить
     */
    insert: {
        configurable: true,
        enumerable: false,
        value: function(index, item) {
            this.splice(index, 0, item);
        }
    },

    /**
     * Возвращает минимальный элемент числового массива
     *
     * @method min
     * @return {Number} Минимальный элемент массива
     */
    min: {
        configurable: true,
        enumerable: false,
        value: function() {
            if (!this.isNumberArray()) {
                return Number.NaN;
            }
            return Math.min.apply(Math, this);
        }
    },

    /**
     * Возвращает максимальный элемент числового массива
     *
     * @method max
     * @return {Number} Максимальный элемент массива
     */
    max: {
        configurable: true,
        enumerable: false,
        value: function() {
            if (!this.isNumberArray()) {
                return Number.NaN;
            }
            return Math.max.apply(Math, this);
        }
    },

    /**
     * Возвращает сумму чисел числового массива
     *
     * @method sum
     * @return {Number} Сумма чисел числового массива
     */
    sum: {
        configurable: true,
        enumerable: false,
        value: function() {
            if (!this.isNumberArray()) {
                return Number.NaN;
            }
            var sum = 0;
            this.forEach(function(value) {
                sum += value;
            }.bind(this));
            return sum;
        }
    },

    /**
     * Возвращает среднее арифметическое числового массива
     *
     * @method average
     * @return {Number} Среднее арифметическое числового массива
     */
    average: {
        configurable: true,
        enumerable: false,
        value: function() {
            if (!this.isNumberArray()) {
                return Number.NaN;
            }
            return this.sum() / this.length;
        }
    },

    /**
     * Выполняет логическую операцию дизъюнкция для булевого массива
     * Возвращает true, если массив содержит true
     *
     * @method disjunction
     * @return {Boolean} Массив содержит true
     */
    disjunction: {
        configurable: true,
        enumerable: false,
        value: function() {
            if (!this.isBooleanArray()) {
                return null;
            }
            return this.count(true) > 0;
        }
    },

    /**
     * Выполняет логическую операцию конъюнкция для булевого массива
     * Возвращает true, если массив не содержит false
     *
     * @method conjunction
     * @return {Boolean} Массив не содержит false
     */
    conjunction: {
        configurable: true,
        enumerable: false,
        value: function() {
            if (!this.isBooleanArray()) {
                return null;
            }
            return this.count(false) === 0;
        }
    }
});

//===========================================================================
// DKTools Event
//===========================================================================

// properties

Object.defineProperties(DKTools.Event.prototype, {

    /**
     * Объект, для которого установлено событие
     *
     * @readonly
     * @type {DKToolsSprite | DKToolsWindow | *}
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
     */
    type: {
        get: function() {
            return this._type;
        },
        configurable: true
    },

    /**
     * Обработчик события
     *
     * @readonly
     * @type {Function}
     */
    handler: {
        get: function() {
            return this._handler;
        },
        configurable: true
    },

    /**
     * Длительность события
     *
     * @type {Number}
     */
    duration: {
        get: function() {
            return this._duration;
        },
        set: function(value) {
            this._duration = value;
        },
        configurable: true
    },

    /**
     * Обработчик начала работы события
     *
     * @readonly
     * @type {Function}
     */
    onStartHandler: {
        get: function() {
            return this._onStartHandler;
        },
        configurable: true
    },

    /**
     * Обработчик окончания работы события
     *
     * @readonly
     * @type {Function}
     */
    onEndHandler: {
        get: function() {
            return this._onEndHandler;
        },
        configurable: true
    },

    /**
     * Начальная длительность события
     *
     * @readonly
     * @type {Number}
     */
    startDuration: {
        get: function() {
            return this._startDuration;
        },
        configurable: true
    },

    /**
     * Длительность паузы события
     *
     * @type {Number}
     */
    pauseDuration: {
        get: function() {
            return this._pauseDuration;
        },
        set: function(value) {
            this._pauseDuration = value;
        },
        configurable: true
    }
});

// initialize method

/**
 * Инициализирует объект класса
 *
 * @constructor
 *
 * @param {DKToolsSprite} target - Спрайт или Окно, для которого установлено событие
 * @param {String} type - Тип события
 * @param {Function} [handler] - Обработчик события
 * @param {Number} [duration = 1|-1] - Длительность события
 * @param {Function} [onStartHandler] - Обработчик начала работы события
 * @param {Function} [onEndHandler] - Обработчик окончания работы события
 */
DKTools.Event.prototype.initialize = function(target, type, handler, duration, onStartHandler, onEndHandler) {
    this._target = target;
    this._type = type;
    this._handler = handler;
    this._duration = duration || (this._type === 'wait' ? 1 : -1);
    this._onStartHandler = onStartHandler;
    this._onEndHandler = onEndHandler;
    this._startDuration = this._duration;
    this._pauseDuration = 0;
    //this._calledStartHandler = false;
};

// _has methods

/**
 * Проверяет обработчик события
 * Возвращает true, если обработчик события установлен
 *
 * @private
 * @method _hasHandler
 * @return {Boolean} Обработчик события установлен
 */
DKTools.Event.prototype._hasHandler = function() {
    return !!this._handler;
};

/**
 * Проверяет обработчик начала работы события
 * Возвращает true, если обработчик начала работы события установлен
 *
 * @private
 * @method _hasOnStartHandler
 * @return {Boolean} Обработчик начала работы события установлен
 */
DKTools.Event.prototype._hasOnStartHandler = function() {
    return !!this._onStartHandler;
};

/**
 * Проверяет обработчик окончания работы события
 * Возвращает true, если обработчик окончания работы события установлен
 *
 * @private
 * @method _hasOnEndHandler
 * @return {Boolean} Обработчик окончания работы события установлен
 */
DKTools.Event.prototype._hasOnEndHandler = function() {
    return !!this._onEndHandler;
};

// _can methods

/**
 * Проверяет обработчик начала работы события на возможность вызова
 * Возвращает true, если можно вызвать обработчик начала работы события
 *
 * @private
 * @method _canCallOnStartHandler
 * @return {Boolean} Можно вызвать обработчик начала работы события
 */
DKTools.Event.prototype._canCallOnStartHandler = function() {
    return this._hasOnStartHandler() && this._startDuration === this._duration && this._duration !== -1;
};

/**
 * Проверяет обработчик окончания работы события на возможность вызова
 * Возвращает true, если можно вызвать обработчик окончания работы события
 *
 * @private
 * @method _canCallOnEndHandler
 * @return {Boolean} Можно вызвать обработчик окончания работы события
 */
DKTools.Event.prototype._canCallOnEndHandler = function() {
    return this._hasOnEndHandler() && this.duration === 0;
};

// _call methods

/**
 * Вызывает обработчик события
 *
 * @private
 * @method _callHandler
 */
DKTools.Event.prototype._callHandler = function() {
    if (this._hasHandler()) {
        this._handler(this);
    }
};

/**
 * Вызывает обработчик начала работы события
 *
 * @private
 * @method _callOnStartHandler
 */
DKTools.Event.prototype._callOnStartHandler = function() {
    if (this._canCallOnStartHandler()) {
        this._onStartHandler(this);
        this._onStartHandler = null;
    }
};

/**
 * Вызывает обработчик окончания работы события
 *
 * @private
 * @method _callOnEndHandler
 */
DKTools.Event.prototype._callOnEndHandler = function() {
    if (this._canCallOnEndHandler()) {
        this._onEndHandler(this);
    }
};

// _check methods

/**
 * Проверяет длительность события
 * Возвращает true, если длительность события больше 0
 *
 * @private
 * @method _checkDuration
 * @return {Boolean} Длительность события больше 0
 */
DKTools.Event.prototype._checkDuration = function() {
    return this._duration > 0;
};

/**
 * Проверяет длительность паузы события
 * Возвращает true, если длительность паузы события больше 0
 *
 * @private
 * @method _checkPauseDuration
 * @return {Boolean} Длительность паузы события больше 0
 */
DKTools.Event.prototype._checkPauseDuration = function() {
    return this._pauseDuration > 0;
};

// check methods

/**
 * Проверяет событие на возможность работы
 * Возвращает true, если событие еще может работать
 *
 * @method checkEvent
 * @return {Boolean} Событие еще может работать
 */
DKTools.Event.prototype.checkEvent = function() {
    if (this._duration === -1) {
        return true;
    }
    return this._checkDuration();
};

// is method

/**
 * Проверяет событие на паузу
 * Возвращает true, если событие приостановлено
 *
 * @method isPaused
 * @return {Boolean} Событие приостановлено
 */
DKTools.Event.prototype.isPaused = function() {
    return this._pauseDuration === -1 || this._checkPauseDuration();
};

// other methods

/**
 * Ставит событие на паузу
 *
 * @method pause
 * @param {Number} duration - Длительность паузы
 */
DKTools.Event.prototype.pause = function(duration) {
    this._pauseDuration = duration || -1;
};

/**
 * Снимает событие с паузы
 *
 * @method resume
 */
DKTools.Event.prototype.resume = function() {
    this._pauseDuration = 0;
};

/**
 * Удаляет событие
 *
 * @method remove
 */
DKTools.Event.prototype.remove = function() {
    this._target.removeEvent(this);
};

// add methods

/**
 * Добавляет длительность события
 *
 * @method addDuration
 * @param {Number} duration - Длительность события
 */
DKTools.Event.prototype.addDuration = function(duration) {
    if (this._checkDuration()) {
        this._duration += duration || 0;
    }
};

/**
 * Добавляет продолжительность паузы
 *
 * @method addPauseDuration
 * @param {Number} duration - Длительность паузы события
 */
DKTools.Event.prototype.addPauseDuration = function(duration) {
    if (this._checkPauseDuration()) {
        this._pauseDuration += duration || 0;
    }
};

// _update methods

/**
 * Обновляет длительность события
 *
 * @private
 * @method _updateDuration
 */
DKTools.Event.prototype._updateDuration = function() {
    if (this._checkDuration()) {
        this._duration--;
    }
};

/**
 * Обновляет длительность паузы события
 *
 * @private
 * @method _updatePauseDuration
 */
DKTools.Event.prototype._updatePauseDuration = function() {
    if (this._checkPauseDuration()) {
        this._pauseDuration--;
    }
};

// update methods

/**
 * Обновляет событие
 *
 * @method update
 */
DKTools.Event.prototype.update = function() {
    if (this.checkEvent()) {
        if (!this.isPaused()) {
            this._callOnStartHandler();
            if (this.isPaused()) {
                return;
            }
            this._callHandler();
            this._updateDuration();
            this._callOnEndHandler();
        } else {
            this._updatePauseDuration();
        }
    }
};





//===========================================================================
// DKTools Base
//===========================================================================

// properties

Object.defineProperties(DKTools.Base.prototype, {

    /**
     * Шрифт текста
     *
     * @readonly
     * @type {Array}
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
     */
    paintOpacity: {
        get: function() {
            return this._paintOpacity;
        },
        configurable: true
    },

    /**
     * Цвет фона
     *
     * @readonly
     * @type {String}
     */
    backgroundColor: {
        get: function() {
            return this._backgroundColor;
        },
        configurable: true
    },

    /**
     * Отображаемый текст
     *
     * @readonly
     * @type {String}
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
     */
    mouseY : {
        get: function() {
            return this.canvasToLocalY(TouchInput.mouseY);
        },
        configurable: true
    },

});

// initialize methods

/**
 * Инициализирует объект класса
 *
 * @constructor
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
DKTools.Base.prototype.initialize = function(object, y, width, height) {
    this._clearAll();
    this._setupAll();
    this._createAll();
    var x;
    if (object) {
        if (object.constructor === Rectangle || object.constructor === Object) {
            x = object.x;
            y = object.y || y;
            width = object.width || width;
            height = object.height || height;
        } else if (object.constructor === Number) {
            x = object;
        }
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
 * @method _clearAll
 */
DKTools.Base.prototype._clearAll = function() {
    this._clearEvents();
    this._clearSymbols();
};

/**
 * Очищает события
 *
 * @private
 * @method _clearEvents
 */
DKTools.Base.prototype._clearEvents = function() {
    this.clearEvents();
};

/**
 * Очищает символы
 *
 * @private
 * @method _clearSymbols
 */
DKTools.Base.prototype._clearSymbols = function() {
    this._symbols = {};
};

// clear methods

/**
 * Очищает события
 *
 * @method clearEvents
 * @param {String[] | String} object - Массив с типами событий или тип события
 */
DKTools.Base.prototype.clearEvents = function(object) {
    if (object) {
        if (object instanceof Array) {
            for(var i = 0; i < object.length; i++) {
                var type = object[i];
                this._events[type] = [];
            }
        } else {
            this._events[object] = [];
        }
    } else {
        this._events = {};
    }
};

/**
 * Очищает Rect, если Bitmap есть
 * Возвращает true, если Bitmap есть
 *
 * @method clearRect
 *
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
 * @return {Boolean} Bitmap есть
 */
DKTools.Base.prototype.clearRect = function(object, y, width, height) {
    if (!this.hasBitmap()) {
        return false;
    }
    if (object && (object.constructor === Rectangle || object.constructor === Object)) {
        return this.clearRect(object.x, object.y, object.width, object.height);
    }
    var x = object || 0;
    y = y || 0;
    width = width || this.standardDrawWidth();
    height = height || this.standardDrawHeight();
    this.bitmap.clearRect(x, y, width, height);
    return true;
};

/**
 * Очищает весь Bitmap, если он есть
 * Возвращает true, если Bitmap есть
 *
 * @method clear
 * @return {Boolean} Bitmap есть
 */
DKTools.Base.prototype.clear = function() {
    return this.clearRect();
};

/**
 * Очищает отображаемый текст
 *
 * @method clearText
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 */
DKTools.Base.prototype.clearText = function(blockStart) {
    this.setText('', blockStart);
};

// _setup methods

/**
 * Устанавливает все данные
 *
 * @private
 * @method _setupAll
 */
DKTools.Base.prototype._setupAll = function() {
    this._setupEvents();
    this._setupSymbols();
};

/**
 * Устанавливает события
 *
 * @private
 * @method _setupEvents
 */
DKTools.Base.prototype._setupEvents = function() {
};

/**
 * Устанавливает символы
 *
 * @private
 * @method _setupSymbols
 */
DKTools.Base.prototype._setupSymbols = function() {
};

// _create methods

/**
 * Создает необходимые объекты
 *
 * @private
 * @method _createAll
 */
DKTools.Base.prototype._createAll = function() {
};

// standard methods

/**
 * Возвращает стандартную ширину рисования
 *
 * @method standardDrawWidth
 * @return {Number} Стандартная ширина рисования
 */
DKTools.Base.prototype.standardDrawWidth = function() {
    return this.bitmap.width;
};

/**
 * Возвращает стандартную высоту рисования
 *
 * @method standardDrawHeight
 * @return {Number} Стандартная высота рисования
 */
DKTools.Base.prototype.standardDrawHeight = function() {
    return this.bitmap.height;
};

/**
 * Возвращает стандартную видимость
 *
 * @method standardVisible
 * @return {Boolean} Стандартная видимость
 */
DKTools.Base.prototype.standardVisible = function() {
    return true;
};

/**
 * Возвращает стандартное значение активности
 *
 * @method standardActive
 * @return {Boolean} Стандартное значение активности
 */
DKTools.Base.prototype.standardActive = function() {
    return true;
};

/**
 * Возвращает стандартное имя шрифта
 *
 * @method standardFontName
 * @return {String} Стандартное имя шрифта
 */
DKTools.Base.prototype.standardFontName = function() {
    return 'GameFont';
};

/**
 * Возвращает стандартное значение для курсива
 *
 * @method standardFontItalic
 * @return {Boolean} Стандартное значение для курсива
 */
DKTools.Base.prototype.standardFontItalic = function() {
    return false;
};

/**
 * Возвращает стандартный размер шрифта
 *
 * @method standardFontSize
 * @return {Number} Стандартный размер шрифта
 */
DKTools.Base.prototype.standardFontSize = function() {
    return 28;
};

/**
 * Возвращает стандартный шрифт текста
 *
 * @method standardFont
 * @return {Array} Стандартный шрифт текста
 */
DKTools.Base.prototype.standardFont = function() {
    return [this.standardFontName(), this.standardFontItalic(), this.standardFontSize()];
};

/**
 * Возвращает стандартный цвет текста
 *
 * @method standardTextColor
 * @return {String} Стандартный цвет текста
 */
DKTools.Base.prototype.standardTextColor = function() {
    return '#ffffff';
};

/**
 * Возвращает стандартную прозрачность рисования
 *
 * @method standardPaintOpacity
 * @return {Number} Стандартная прозрачность рисования
 */
DKTools.Base.prototype.standardPaintOpacity = function() {
    return 255;
};

/**
 * Возвращает стандартный цвет фона
 *
 * @method standardBackgroundColor
 * @return {String} Стандартный цвет фона
 */
DKTools.Base.prototype.standardBackgroundColor = function() {
    return '';
};

/**
 * Возвращает стандартный текст
 *
 * @method standardText
 * @return {String} Стандартный текст
 */
DKTools.Base.prototype.standardText = function() {
    return '';
};

/**
 * Возвращает стандартное выравнивание текста
 *
 * @method standardAlign
 * @return {String} Стандартное выравнивание текста
 */
DKTools.Base.prototype.standardAlign = function() {
    return 'center';
};

/**
 * Возвращает стандартное масштабирование объекта
 *
 * @method standardScale
 * @return {Point} Стандартное масштабирование объекта
 */
DKTools.Base.prototype.standardScale = function() {
    return new Point(1, 1);
};

/**
 * Возвращает стандартную точку привязки
 *
 * @method standardPivot
 * @return {Point} Стандартная точка привязки
 */
DKTools.Base.prototype.standardPivot = function() {
    return new Point(0, 0);
};

/**
 * Возвращает стандартное значение вращения
 *
 * @method standardRotation
 * @return {Number} Стандартное значение вращения
 */
DKTools.Base.prototype.standardRotation = function() {
    return 0;
};

/**
 * Возвращает стандартную обложку окна
 *
 * @method standardWindowskin
 * @return {String} Стандартная обложка окна
 */
DKTools.Base.prototype.standardWindowskin = function() {
    return 'Window';
};

// setup methods

/**
 * Устанавливает все параметры
 *
 * @method setupAll
 *
 * @param {Object} [object] - Объект типа {}
 *
 * @param {Number} [object.id] - ID объекта
 * @param {Boolean} [object.visible] - Видимость объекта
 * @param {Boolean} [object.active] - Активность объекта
 * @param {Array} [object.font] - Шрифт текста
 * @param {String} [object.textColor] - Цвет текста
 * @param {Number} [object.paintOpacity] - Прозрачность рисования
 * @param {String} [object.backgroundColor] - Цвет фона
 * @param {String} [object.text] - Текст
 * @param {String} [object.align] - Выравнивание текста
 * @param {Point | Object} [object.scale] - Масштабирование объекта
 * @param {Point | Object} [object.pivot] - Точка привязки
 * @param {Number} [object.rotation] - Вращение объекта
 *
 * @param {Number} [object.scale.x] - Масштабирование объекта по оси X
 * @param {Number} [object.scale.y] - Масштабирование объекта по оси Y
 *
 * @param {Number} [object.pivot.x] - Точка привязки по оси X
 * @param {Number} [object.pivot.y] - Точка привязки по оси Y
 */
DKTools.Base.prototype.setupAll = function(object) {
    object = object || {};
    this.setupId(object.id);
    this.setupVisible(object.visible);
    this.setupActive(object.active);
    this.setupFont(object.font);
    this.setupTextColor(object.textColor);
    this.setupPaintOpacity(object.paintOpacity);
    this.setupBackgroundColor(object.backgroundColor);
    this.setupText(object.text);
    this.setupAlign(object.align);
    this.setupScale(object.scale);
    this.setupPivot(object.pivot);
    this.setupRotation(object.rotation);
};

/**
 * Устанавливает ID объекта
 *
 * @method setupId
 * @param {Number | String} [id] - ID объекта
 */
DKTools.Base.prototype.setupId = function(id) {
    this.id = (id == null ? null : id);
};

/**
 * Устанавливает видимость объекта
 *
 * @method setupVisible
 * @param {Boolean} [visible] - Видимость объекта
 */
DKTools.Base.prototype.setupVisible = function(visible) {
    this.visible = (visible == null ? this.standardVisible() : visible);
};

/**
 * Устанавливает активность объекта
 *
 * @method setupActive
 * @param {Boolean} [active] - Активность объекта
 */
DKTools.Base.prototype.setupActive = function(active) {
    this.active = (active == null ? this.standardActive() : active);
};

/**
 * Устанавливает шрифт текста
 *
 * @method setupFont
 * @param {Array} [font] - Шрифт текста
 */
DKTools.Base.prototype.setupFont = function(font) {
    this._font = this._checkArray(font, this.standardFont());
};

/**
 * Устанавливает цвет текста
 *
 * @method setupTextColor
 * @param {String} [textColor] - Цвет текста
 */
DKTools.Base.prototype.setupTextColor = function(textColor) {
    this._textColor = textColor || this.standardTextColor();
};

/**
 * Устанавливает прозрачность рисования

 * @method setupPaintOpacity
 * @param {Number} opacity - Прозрачность рисования
 */
DKTools.Base.prototype.setupPaintOpacity = function(opacity) {
    this._paintOpacity = (opacity == null ? this.standardPaintOpacity() : opacity);
};

/**
 * Устанавливает цвет фона
 *
 * @method setupBackgroundColor
 * @param {String} [color] - Цвет фона
 */
DKTools.Base.prototype.setupBackgroundColor = function(color) {
    this._backgroundColor = (color == null ? this.standardBackgroundColor() : color);
};

/**
 * Устанавливает отображаемый текст
 *
 * @method setupText
 * @param {String} text - Отображаемый текст
 */
DKTools.Base.prototype.setupText = function(text) {
    this._text = (text == null ? this.standardText() : String(text));
};

/**
 * Устанавливает выравнивание текста
 *
 * @method setupAlign
 * @param {String} [align] - Выравнивание текста
 */
DKTools.Base.prototype.setupAlign = function(align) {
    this._align = align || this.standardAlign();
};

/**
 * Устанавливает масштабирование для объекта
 *
 * @method setupScale
 *
 * @param {Number | Point | Object} [object] - Масштабирование по оси X или Point, или Объект типа {}
 * @param {Number} [y] - Масштабирование по оси Y
 *
 * @param {Number} [object.x] - Масштабирование по оси X
 * @param {Number} [object.y] - Масштабирование по оси Y
 */
DKTools.Base.prototype.setupScale = function(object, y) {
    if (object && (object.constructor === Point || object.constructor === PIXI.ObservablePoint || object.constructor === Object)) {
        return this.setupScale(object.x, object.y);
    }
    var standardScale = this.standardScale();
    var scale = this._checkPoint(object, y, standardScale);
    this.scale.copy(scale);
};

/**
 * Устанавливает точку привязки для объекта
 *
 * @method setupPivot
 * @param {Number | Point | Object} [object] - Координата X или Point, или Объекти типа {}
 * @param {Number} [y] - Координата Y
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 */
DKTools.Base.prototype.setupPivot = function(object, y) {
    if (object && (object.constructor === Point || object.constructor === PIXI.ObservablePoint || object.constructor === Object)) {
        return this.setupPivot(object.x, object.y);
    }
    var standardPivot = this.standardPivot();
    var pivot = this._checkPoint(object, y, standardPivot);
    this.pivot.copy(pivot);
};

/**
 * Устанавливает вращение объекта
 *
 * @method setupRotation
 * @param {Number} [rotation] - Вращение объекта
 */
DKTools.Base.prototype.setupRotation = function(rotation) {
    this.rotation = (rotation == null ? this.standardRotation() : rotation);
};

// set methods

/**
 * Изменяет все параметры
 * Возвращает количество измененных параметров
 *
 * @method setAll
 *
 * @param {Object} [object] - Объект типа {}
 *
 * @param {Array} [object.font] - Шрифт текста
 * @param {String} [object.textColor] - Цвет текста
 * @param {Number} [object.paintOpacity] - Прозрачность рисования
 * @param {String} [object.backgroundColor] - Цвет фона
 * @param {String} [object.text] - Текст
 * @param {String} [object.align] - Выравнивание текста
 * @param {Point | Object} [object.scale] - Масштабирование объекта
 * @param {Point | Object} [object.pivot] - Точка привязки объекта
 * @param {Number} [object.rotation] - Вращение объекта
 *
 * @param {Number} [object.scale.x] - Масштабирование объекта по оси X
 * @param {Number} [object.scale.y] - Масштабирование объекта по оси Y
 *
 * @param {Number} [object.pivot.x] - Точка привязки по оси X
 * @param {Number} [object.pivot.y] - Точка привязки по оси Y
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
    if (this.setRotation(object.rotation)) {
        changed++;
    }
    return changed;
};

/**
 * Изменяет видимость объекта
 * Возвращает true, если изменение произошло
 *
 * @method setVisible
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
 * @method setActive
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
 * @method setFont
 *
 * @param {Array} [font] - Шрифт текста
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Base.prototype.setFont = function(font, blockStart) {
    if (this._font.equals(font)) {
        return false;
    }
    var lastFont = this._font;
    this.setupFont(font);
    if (this._font.equals(lastFont)) {
        return false;
    }
    if (!blockStart) {
        this.start();
    }
    return true;
};

/**
 * Изменяет цвет текста
 * Возвращает true, если изменение произошло
 *
 * @method setTextColor
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
 * @method setPaintOpacity
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
 * Изменяет цвет фона
 * Возвращает true, если изменение произошло
 *
 * @method setBackgroundColor
 *
 * @param {String} [color] - Цвет фона
 * @param {Boolean} [blockRefresh] - Блокировка вызова функции refreshAll
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Base.prototype.setBackgroundColor = function(color, blockRefresh) {
    if (this._backgroundColor === color) {
        return false;
    }
    var lastColor = this._backgroundColor;
    this.setupBackgroundColor(color);
    if (lastColor === this._backgroundColor) {
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
 * @method setText
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
 * @method setAlign
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
 * @method setScale
 *
 * @param {Number | Point | Object} [object] - Масштабирование по оси X или Point, или Объект типа {}
 * @param {Number} [y] - Масштабирование по оси Y
 *
 * @param {Number} [object.x] - Масштабирование по оси X
 * @param {Number} [object.y] - Масштабирование по оси Y
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Base.prototype.setScale = function(object, y) {
    if (object && (object.constructor === Point || object.constructor === PIXI.ObservablePoint || object.constructor === Object)) {
        return this.setScale(object.x, object.y);
    }
    var lastX = this.scale.x;
    var lastY = this.scale.y;
    if (lastX === object && lastY === y) {
        return false;
    }
    this.setupScale(object, y);
    return lastX !== this.scale.x || lastY !== this.scale.y;
};

/**
 * Изменяет точку привязки объекта
 * Возвращает true, если изменение произошло
 *
 * @method setPivot
 *
 * @param {Number | Point | Object} [object] - Координата X или Point, или Объект типа {}
 * @param {Number} [y] - Координата Y
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Base.prototype.setPivot = function(object, y) {
    if (object && (object.constructor === Point || object.constructor === PIXI.ObservablePoint || object.constructor === Object)) {
        return this.setPivot(object.x, object.y);
    }
    var lastX = this.pivot.x;
    var lastY = this.pivot.y;
    if (lastX === object && lastY === y) {
        return false;
    }
    this.setupPivot(object, y);
    return lastX !== this.pivot.x || lastY !== this.pivot.y;
};

/**
 * Изменяет вращение объекта
 * Возвращает true, если изменение произошло
 *
 * @method setRotation
 * @param {Number} [rotation] - Вращение объекта
 * @return {Boolean} Изменение произошло
 */
DKTools.Base.prototype.setRotation = function(rotation) {
    if (this.rotation === rotation) {
        return false;
    }
    var lastRotation = this.rotation;
    this.setupRotation(rotation);
    return lastRotation !== this.rotation;
};

// start methods methods

/**
 * Запускает работу объекта
 *
 * @method start
 * @param {Boolean} [activate] - Активировать объект
 */
DKTools.Base.prototype.start = function(activate) {
    this._started = true;
    this.updateStartEvents();
    this.removeAll();
    this.checkAll();
    this.createAll();
    this.startAll();
    this.refreshAll();
    if (activate) {
        this.activate();
    }
};

/**
 * Запускает работу всех объектов
 *
 * @method startAll
 */
DKTools.Base.prototype.startAll = function() {
};

// remove methods

/**
 * Удаляет все объекты
 *
 * @method removeAll
 */
DKTools.Base.prototype.removeAll = function() {
};

// _check methods

/**
 * Сравнивает ширину с минимальной и максимальной
 * Возвращает ширину из диапазона
 *
 * @private
 * @method _checkWidth
 * @param {Number} width - Ширина
 * @return {Number} Ширина из диапазона
 *
 */
DKTools.Base.prototype._checkWidth = function(width) {
    var minWidth = this.minWidth();
    var maxWidth = this.maxWidth();
    return (width ? width.clamp(minWidth, maxWidth) : minWidth);
};

/**
 * Сравнивает высоту с минимальной и максимальной
 * Возвращает высоту из диапазона
 *
 * @private
 * @method _checkHeight
 * @param {Number} height - Высота
 * @return {Number} Высота из диапазона
 *
 */
DKTools.Base.prototype._checkHeight = function(height) {
    var minHeight = this.minHeight();
    var maxHeight = this.maxHeight();
    return (height ? height.clamp(minHeight, maxHeight) : minHeight);
};

/**
 * Проверяет source на наличие null значений
 * Если где-то имеется null, то заменяется из standardArray
 * Возвращает новый массив с правильными значениями
 *
 * @private
 * @method _checkArray
 *
 * @param {Array} source - Массив для проверки
 * @param {Array} standardArray - Массив со стандартными значениями
 *
 * @return {Array} Новый массив с правильными значениями
 */
DKTools.Base.prototype._checkArray = function(source, standardArray) {
    var array = [];
    source = source || [];
    standardArray = standardArray || [];
    for(var i = 0; i < standardArray.length; i++) {
        array[i] = (source[i] == null ? standardArray[i] : source[i]);
    }
    return array;
};

/**
 * Проверяет x и y на null
 * Если где-то есть null, то заменяется из standardPoint
 * Возвращает новый Point с правильными значениями
 *
 * @private
 * @method _checkPoint
 *
 * @param {Number} x - Координата X для проверки
 * @param {Number} y - Координата Y для проверки
 * @param {Point} standardPoint - Point со стандартными значениями
 *
 * @return {Point} Новый Point с правильными значениями
 */
DKTools.Base.prototype._checkPoint = function(x, y, standardPoint) {
    standardPoint = standardPoint || Point.emptyPoint;
    x = (x == null ? standardPoint.x : x);
    y = (y == null ? standardPoint.y : y);
    return new Point(x, y);
};

/**
 * Проверяет x, y, width и height на null
 * Если где-то есть null, то заменяется из standardRect
 * Возвращает новый Rectangle с правильными значениями
 *
 * @private
 * @method _checkRectangle
 *
 * @param {Number} x - Координата X для проверки
 * @param {Number} y - Координата Y для проверки
 * @param {Number} width - Ширина для проверки
 * @param {Number} height - Высота для проверки
 * @param {Rectangle} standardRect - Rectangle со стандартными значениями
 *
 * @return {Rectangle} Новый Rectangle с правильными значениями
 */
DKTools.Base.prototype._checkRectangle = function(x, y, width, height, standardRect) {
    standardRect = standardRect || Rectangle.emptyRectangle;
    x = (x == null ? standardRect.x : x);
    y = (y == null ? standardRect.y : y);
    width = (width == null ? standardRect.width : width);
    height = (height == null ? standardRect.height : height);
    return new Rectangle(x, y, width, height);
};

// check methods

/**
 * Проверяет все
 *
 * @method checkAll
 */
DKTools.Base.prototype.checkAll = function() {
    this.checkSize();
};

/**
 * Проверяет размер объекта
 *
 * @method checkSize
 */
DKTools.Base.prototype.checkSize = function() {
};

// create methods

/**
 * Создает все объекты
 *
 * @method createAll
 */
DKTools.Base.prototype.createAll = function() {
};

// refresh methods

/**
 * Обновляет и перерисовывает все
 *
 * @method refreshAll
 */
DKTools.Base.prototype.refreshAll = function() {
    if (this.canRefreshAll()) {
        this.updateAll();
        this.redrawAll();
    }
};

// redraw methods

/**
 * Перерисовывает все
 *
 * @method redrawAll
 */
DKTools.Base.prototype.redrawAll = function() {
    this.clear();
    this.drawAll();
};

// active methods

/**
 * Активирует объект
 *
 * @method activate
 */
DKTools.Base.prototype.activate = function() {
    if (this.setActive(true)) {
        this.updateActivateEvents();
    }
};

/**
 * Деактивирует объект
 *
 * @method deactivate
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
 * @method show
 * @param {Number} [duration] - Длительность появления
 * @param {Boolean} [activate] - Активировать объект
 */
DKTools.Base.prototype.show = function(duration, activate) {
    if (duration > 0) {
        var opacity = 255;
        var onStartHandler = this.show.bind(this, 0, activate);
        var onEndHandler = null;
        var handler = this._updateMove.bind(this, opacity);
        this.addEvent('wait', handler, duration, onStartHandler, onEndHandler);
        return;
    }
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
 * @method hide
 * @param {Number} [duration] - Длительность исчезновения
 * @param {Boolean} [blockDeactivate] - Блокировка деактивации объекта
 */
DKTools.Base.prototype.hide = function(duration, blockDeactivate) {
    if (duration > 0) {
        var opacity = 0;
        var onStartHandler = null;
        var onEndHandler = this.hide.bind(this, 0, blockDeactivate);
        var handler = this._updateMove.bind(this, opacity);
        this.addEvent('wait', handler, duration, onStartHandler, onEndHandler);
        return;
    }
    if (this.setVisible(false)) {
        this.updateHideEvents();
        if (!blockDeactivate) {
            this.deactivate();
        }
    }
};

// clone mthods

/**
 * Возвращает объект со всеми параметрами
 *
 * @method object
 * @return {Object} Объект со всеми параметрами
 */
DKTools.Base.prototype.object = function() {
    return {
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
        id: this.id,
        visible: this.visible,
        active: this.active,
        font: this._font,
        textColor: this._textColor,
        paintOpacity: this._paintOpacity,
        backgroundColor: this._backgroundColor,
        text: this._text,
        align: this._align,
        scale: this.scale,
        pivot: this.pivot,
        rotation: this.rotation
    };
};

/**
 * Клонирует текущий объект
 *
 * @method clone
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 * @return {DKToolsSprite | DKToolsWindow | *} Клонированный объект
 */
DKTools.Base.prototype.clone = function(blockStart) {
    var object = this.object();
    var clone = new (this.constructor)(object);
    if (!blockStart) {
        clone.start();
    }
    return clone;
};

// can methods

/**
 * Возвращает true, если объект можно обновить и перерисовать
 *
 * @method canRefreshAll
 * @return {Boolean} Объект можно обновить и перерисовать
 */
DKTools.Base.prototype.canRefreshAll = function() {
    return this.hasBitmap();
};

// uncategorized methods

/**
 * @method canvasToLocalX
 * @param {Number} x
 * @return {Number}
 */
DKTools.Base.prototype.canvasToLocalX = function(x) {
    var node = this;
    while (node) {
        x -= node.x;
        node = node.parent;
    }
    return x;
};

/**
 * @method canvasToLocalY
 * @param {Number} y
 * @return {Number}
 */
DKTools.Base.prototype.canvasToLocalY = function(y) {
    var node = this;
    while (node) {
        y -= node.y;
        node = node.parent;
    }
    return y;
};

/**
 * @method positionToRect
 * @return {Rectangle}
 */
DKTools.Base.prototype.positionToRect = function() {
    return new Rectangle(this.x, this.y, this.width, this.height);
};

/**
 * Возвращает размер объекта
 *
 * @method size
 * @return {Object} Размер объекта
 */
DKTools.Base.prototype.size = function() {
    return { width: this.width, height: this.height };
};

/**
 * Заставляет объект ждать
 *
 * @method wait
 * @param {Number} duration - Время ожидания в фреймах
 * @param {Function} [onEndHandler] - Обработчик окончания работы события
 */
DKTools.Base.prototype.wait = function(duration, onEndHandler) {
    var handler = null;
    var onStartHandler = null;
    return this.addEvent('wait', handler, duration, onStartHandler, onEndHandler);
};

/**
 * Возвращает Bitmap из объекта или загружает его
 *
 * @method bitmapFromObject
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
    var bitmap = object || null;
    if (object.constructor === Object) {
        bitmap = ImageManager.loadBitmap(object.folder, object.filename, object.hue, object.smooth);
        if (object.listener) {
            bitmap.addLoadListener(object.listener);
        }
    }
    return bitmap;
};

/**
 * Возвращает ширину текста
 *
 * @method textWidth
 * @param {String} text - Текст
 * @return {Number} Ширина текста
 */
DKTools.Base.prototype.textWidth = function(text) {
    if (text == null) {
        return 0;
    }
    text = String(text);
    if (this.hasBitmap()) {
        return this.bitmap.measureTextWidth(text);
    }
    var bitmap = new Bitmap();
    return bitmap.measureTextWidth(text);
};

/**
 * Возвращает высоту линии
 *
 * @method lineHeight
 * @return {Number} Высота линии
 */
DKTools.Base.prototype.lineHeight = function() {
    return Window_Base.prototype.lineHeight.call(this);
};

/**
 * Возвращает минимальную ширину Bitmap
 *
 * @method minWidth
 * @return {Number} Минимальная ширина Bitmap
 */
DKTools.Base.prototype.minWidth = function() {
    var minWidth = 0;
    if (this.hasText()) {
        minWidth = this.textWidth(this.text);
    }
    return minWidth;
};

/**
 * Возвращает минимальную высоту Bitmap
 *
 * @method minHeight
 * @return {Number} Минимальная высота Bitmap
 */
DKTools.Base.prototype.minHeight = function() {
    return (this.hasText() ? this.lineHeight() : 0);
};

/**
 * Возвращает минимальный размер объекта
 *
 * @method minSize
 * @return {Object} Минимальный размер объекта
 */
DKTools.Base.prototype.minSize = function() {
    return { width: this.minWidth(), height: this.minHeight() };
};

/**
 * Возвращает максимальную ширину Bitmap
 *
 * @method maxWidth
 * @return {Number} Максимальная ширина Bitmap
 */
DKTools.Base.prototype.maxWidth = function() {
    return Graphics.boxWidth;
};

/**
 * Возвращает максимальную высоту Bitmap
 *
 * @method maxHeight
 * @return {Number} Максимальная высота Bitmap
 */
DKTools.Base.prototype.maxHeight = function() {
    return Graphics.boxHeight;
};

/**
 * Возвращает максимальный размер объекта
 *
 * @method maxSize
 * @return {Object} Максимальный размер объекта
 */
DKTools.Base.prototype.maxSize = function() {
    return { width: this.maxWidth(), height: this.maxHeight() };
};

DKTools.Base.prototype.centerPivot = function() {
    this.addEventListener('ready', function() {
        var centerX = this.width / 2;
        var centerY = this.height / 2;
        var newX = this.x + centerX;
        var newY = this.y + centerY;
        this.setupPivot(centerX, centerY);
        this.move(newX, newY);
    }.bind(this));
};

// has methods

/**
 * Проверяет объект на наличие Bitmap
 * Возвращает true, если Bitmap есть
 *
 * @method hasBitmap
 * @return {Boolean} Bitmap есть
 */
DKTools.Base.prototype.hasBitmap = function() {
    try {
        return !!this.bitmap;
    } catch (e) {
        return false;
    }
};

/**
 * Проверяет объект на наличие цвета фона
 * Возвращает true, если цвет фона установлен
 *
 * @method hasBackgroundColor
 * @return {Boolean} Цвет фона установлен
 */
DKTools.Base.prototype.hasBackgroundColor = function() {
    return !!this.backgroundColor;
};

/**
 * Проверяет объект на наличие текста
 * Возвращает true, если текст установлен
 *
 * @method hasText
 * @return {Boolean} Текст установлен
 */
DKTools.Base.prototype.hasText = function() {
    return !!this.text;
};

/**
 * Проверяет объект на наличие маски
 * Возвращает true, если маска установлена
 *
 * @method hasMask
 * @return {Boolean} Маска установлена
 */
DKTools.Base.prototype.hasMask = function() {
    return !!this.mask;
};

// is methods

/**
 * Возвращает true, если объект виден
 *
 * @method isVisible
 * @return {Boolean} Объект виден
 */
DKTools.Base.prototype.isVisible = function() {
    return this.visible;
};

/**
 * Возвращает true, если объект активен
 *
 * @method isActive
 * @return {Boolean} Объект активен
 */
DKTools.Base.prototype.isActive = function() {
    var node = this;
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
 * @method isVisibleAndActive
 * @return {Boolean} Объект виден и активен
 */
DKTools.Base.prototype.isVisibleAndActive = function() {
    return this.isVisible() && this.isActive();
};

/**
 * Возвращает true, если работа объекта была запущена
 *
 * @method isStarted
 * @return {Boolean} Работа объекта была запущена
 */
DKTools.Base.prototype.isStarted = function() {
    return this._started;
};

/**
 * Возвращает true, если у объекта есть события-ожидания
 *
 * @method isWaiting
 * @return {Boolean} У объекта есть события-ожидания
 */
DKTools.Base.prototype.isWaiting = function() {
    return this.hasEvents('wait');
};

/**
 * Возвращает true, если Bitmap готов
 *
 * @method isReady
 * @return {Boolean} Bitmap готов
 */
DKTools.Base.prototype.isReady = function () {
    return this.hasBitmap() ? this.bitmap.isReady() : false;
};

/**
 * Возвращает true, если объект занят
 *
 * @method isBusy
 * @return {Boolean} Объект занят
 */
DKTools.Base.prototype.isBusy = function() {
    return this.isWaiting() || !this.isReady();
};

/**
 * Возвращает true, если объект является спрайтом
 *
 * @method isSprite
 * @return {Boolean} Объект является спрайтом
 */
DKTools.Base.prototype.isSprite = function() {
    return false;
};

/**
 * Возвращает true, если объект является окном
 *
 * @method isWindow
 * @return {Boolean} Объект является окном
 */
DKTools.Base.prototype.isWindow = function() {
    return false;
};

// draw methods

/**
 * Рисует все
 *
 * @method drawAll
 */
DKTools.Base.prototype.drawAll = function() {
    this.updateBackground();
    this.updateText();
};

/**
 * Заливает область цветом
 * Возвращает true, если Bitmap существует
 *
 * @method fillRect
 *
 * @param {String} [color] - Цвет заливки
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
DKTools.Base.prototype.fillRect = function(color, object, y, width, height) {
    if (!this.hasBitmap()) {
        return false;
    }
    if (object && (object.constructor === Rectangle || object.constructor === Object)) {
        return this.fillRect(color, object.x, object.y, object.width, object.height);
    }
    var x = object || 0;
    y = y || 0;
    width = width || this.standardDrawWidth();
    height = height || this.standardDrawHeight();
    color = color || '#ffffff';
    this.bitmap.fillRect(x, y, width, height, color);
    return true;
};

/**
 * Заливает весь Bitmap цветом
 * Возвращает true, если Bitmap существует
 *
 * @method fillAll
 * @param {String} [color] - Цвет заливки
 * @return {Boolean} Bitmap существует
 */
DKTools.Base.prototype.fillAll = function(color) {
    return this.fillRect(color);
};

/**
 * Заливает область градиентом
 * Возвращает true, если Bitmap существует
 *
 * @method gradientFillRect
 *
 * @param {String} color1 - Цвет 1
 * @param {String} color2 - Цвет 2
 * @param {Boolean} vertical - Вертикальный градиент
 * @param {Number | Rectangle | Object} object - Координата X или Rectangle, или Объект типа {}
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
    if (object && (object.constructor === Rectangle || object.constructor === Object)) {
        return this.gradientFillRect(color1, color2, vertical, object.x, object.y, object.width, object.height);
    }
    var x = object || 0;
    y = y || 0;
    width = width || this.standardDrawWidth();
    height = height || this.standardDrawHeight();
    color1 = color1 || '#ffffff';
    color2 = color2 || '#000000';
    this.bitmap.gradientFillRect(x, y, width, height, color1, color2, vertical);
    return true;
};

/**
 * Заливает весь Bitmap градиентом
 * Возвращает true, если Bitmap существует

 * @method gradientFillAll
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

/**
 * Рисует текст
 * Возвращает true, если Bitmap существует
 *
 * @method drawText
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
    if (object && (object.constructor === Rectangle || object.constructor === Object)) {
        return this.drawText(text, align, object.x, object.y, object.width, object.height);
    }
    var x = object || 0;
    y = y || 0;
    width = width || this.standardDrawWidth();
    height = height || this.standardDrawHeight();
    align = align || this.align || this.standardAlign();
    this.bitmap.drawText(text, x, y, width, height, align);
    return true;
};

/**
 * Рисует линию
 * Возвращает true, если Bitmap существует
 *
 * @method drawLine
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
    if (object && object.constructor === Object) {
        return this.drawLine(object.x1, object.y1, object.x2, object.y2, object.color, object.lineWidth);
    }
    var x1 = object || 0;
    y1 = y1 || 0;
    color = color || '#ffffff';
    lineWidth = lineWidth || 1;
    this.bitmap.drawLine(x1, y1, x2, y2, color, lineWidth);
    return true;
};

/**
 * Рисует прямоугольник без заливки
 * Возвращает true, если Bitmap существует
 *
 * @method strokeRect
 *
 * @param {String} [color] - Цвет линии
 * @param {Number | Rectangle | Object} [object] - Координата X или Rectangle, или Объект типа {}
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
    if (object && (object.constructor === Rectangle || object.constructor === Object)) {
        return this.strokeRect(color, object.x, object.y, object.width, object.height, lineWidth);
    }
    var x = object || 0;
    y = y || 0;
    width = width || this.standardDrawWidth();
    height = height || this.standardDrawHeight();
    color = color || '#ffffff';
    lineWidth = lineWidth || 1;
    this.bitmap.strokeRect(x, y, width, height, color, lineWidth);
    return true;
};

/**
 * Рисует дугу и заливает ее цветом
 * Возвращает true, если Bitmap существует
 *
 * @method fillArc
 *
 * @param {Number} [x] - Координата X
 * @param {Number} [y] - Координата Y
 * @param {Number} [radius] - Радиус дуги
 * @param {Number} startAngle - Стартовый угол
 * @param {Number} endAngle - Конечный угол
 * @param {String} [color] - Цвет заливки
 * @param {Boolean} [antiClockwise] - Против часовой стрелки
 *
 * @return {Boolean} Bitmap существует
 */
DKTools.Base.prototype.fillArc = function(x, y, radius, startAngle, endAngle, color, antiClockwise) {
    if (!this.hasBitmap()) {
        return false;
    }
    x = x || 0;
    y = y || 0;
    radius = radius || 1;
    color = color || '#ffffff';
    this.bitmap.fillArc(x, y, radius, startAngle, endAngle, color, antiClockwise);
    return true;
};

/**
 * Рисует дугу без заливки
 * Возвращает true, если Bitmap существует
 *
 * @method strokeArc
 *
 * @param {Number} [x] - Координата X
 * @param {Number} [y] - Координата Y
 * @param {Number} [radius] - Радиус дуги
 * @param {Number} startAngle - Стартовый угол
 * @param {Number} endAngle - Конечный угол
 * @param {String} [color] - Цвет линии
 * @param {Boolean} [antiClockwise] - Против часовой стрелки
 * @param {Number} [lineWidth] - Ширина линии
 *
 * @return {Boolean} Bitmap существует
 */
DKTools.Base.prototype.strokeArc = function(x, y, radius, startAngle, endAngle, color, antiClockwise, lineWidth) {
    if (!this.hasBitmap()) {
        return false;
    }
    x = x || 0;
    y = y || 0;
    radius = radius || 1;
    color = color || '#ffffff';
    lineWidth = lineWidth || 1;
    this.bitmap.strokeArc(x, y, radius, startAngle, endAngle, color, antiClockwise, lineWidth);
    return true;
};

/**
 * Рисует круг
 * Возвращает true, если Bitmap существует
 *
 * @method drawCircle
 *
 * @param {Number} [radius] - Радиус
 * @param {String} [color] - Цвет
 * @param {Number | Point | Object} [object] - Координата X или Point, или Объект типа {}
 * @param {Number} [y] - Координата Y
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 *
 * @return {Boolean} Bitmap существует
 */
DKTools.Base.prototype.drawCircle = function(radius, color, object, y) {
    if (!this.hasBitmap()) {
        return false;
    }
    if (object && (object.constructor === Point || object.constructor === Object)) {
        return this.drawCircle(radius, color, object.x, object.y);
    }
    var x = object || 0;
    y = y || 0;
    radius = radius || 1;
    color = color || '#ffffff';
    this.bitmap.drawCircle(x, y, radius, color);
    return true;
};

/**
 * Рисует кусок из Bitmap (source) в Bitmap объекта (destination)
 * Возвращает true, если Bitmap существует
 *
 * @method drawBitmap
 *
 * @param {Bitmap | Object} object - Bitmap или объект типа {}
 * @param {Number} [sx] - Координата X
 * @param {Number} [sy] - Координата Y
 * @param {Number} [sw] - Ширина области из Bitmap
 * @param {Number} [sh] - Высота области из Bitmap
 * @param {Number} [dx] - Координата X
 * @param {Number} [dy] - Координата Y
 * @param {Number} [dw] - Ширина рисуемой области
 * @param {Number} [dh] - Высота рисуемой области
 *
 * @param {Bitmap | Object} object.bitmap - Bitmap или Объект типа {}
 * @param {Number} [object.sx] - Координата X
 * @param {Number} [object.sy] - Координата Y
 * @param {Number} [object.sw] - Ширина области из Bitmap
 * @param {Number} [object.sh] - Высота области из Bitmap
 * @param {Number} [object.dx] - Координата X
 * @param {Number} [object.dy] - Координата Y
 * @param {Number} [object.dw] - Ширина рисуемой области
 * @param {Number} [object.dh] - Высота рисуемой области
 * @param {Rectangle | Object} [object.sRect] - Rectangle или Объект типа {}
 * @param {Rectangle | Object} [object.dRect] - Rectangle или Объект типа {}
 *
 * @param {String} object.bitmap.folder - Путь к файлу
 * @param {String} object.bitmap.filename - Название файла
 * @param {Function} [object.bitmap.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.bitmap.hue] - Оттенок
 * @param {Boolean} [object.bitmap.smooth] - Сглаживание
 *
 * @param {Number} [object.sRect.x] - Координата X
 * @param {Number} [object.sRect.y] - Координата Y
 * @param {Number} [object.sRect.width] - Ширина области из Bitmap
 * @param {Number} [object.sRect.height] - Высота области из Bitmap
 *
 * @param {Number} [object.dRect.x] - Координата X
 * @param {Number} [object.dRect.y] - Координата Y
 * @param {Number} [object.dRect.width] - Ширина рисуемой области
 * @param {Number} [object.dRect.height] - Высота рисуемой области
 *
 * @return {Boolean} Bitmap существует
 */
DKTools.Base.prototype.drawBitmap = function(object, sx, sy, sw, sh, dx, dy, dw, dh) {
    object = object || {};

    if (!this.hasBitmap()) {
        return false;
    }

    var bitmap = object;

    if (object.constructor === Object) {

        bitmap = this.bitmapFromObject(object.bitmap);

        sx = (object.x1 == null ? sx : object.sx);
        sy = (object.y1 == null ? sy : object.sy);
        sw = (object.w1 == null ? sw : object.sw);
        sh = (object.h1 == null ? sh : object.sh);

        dx = (object.x2 == null ? dx : object.dx);
        dy = (object.y2 == null ? dy : object.dy);
        dw = (object.w2 == null ? dw : object.dw);
        dh = (object.h2 == null ? dh : object.dh);

        if (object.sRect && (object.sRect.constructor === Rectangle || object.sRect.constructor === Object)) {
            sx = object.sRect.x;
            sy = object.sRect.y;
            sw = object.sRect.width;
            sh = object.sRect.height;
        }

        if (object.dRect && (object.dRect.constructor === Rectangle || object.dRect.constructor === Object)) {
            dx = object.dRect.x;
            dy = object.dRect.y;
            dw = object.dRect.width;
            dh = object.dRect.height;
        }
    }

    if (!bitmap) {
        return false;
    }

    bitmap.addLoadListener(function() {
        sx = sx || 0;
        sy = sy || 0;
        sw = sw || bitmap.width;
        sh = sh || bitmap.height;
        dx = dx || 0;
        dy = dy || 0;
        this.bitmap.blt(bitmap, sx, sy, sw, sh, dx, dy, dw, dh);
    }.bind(this));

    return true;
};

/**
 * Рисует иконку из IconSet
 * Возвращает true, если Bitmap существует
 *
 * @method drawIcon
 *
 * @param {Number} iconIndex - ID иконки
 * @param {Number | Point | Object} [object] - Координата X или Point, или Объект типа {}
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
    if (object && (object.constructor === Point || object.constructor === Object)) {
        return this.drawIcon(iconIndex, object.x, object.y);
    }
    var x = object || 0;
    y = y || 0;
    var bitmap = ImageManager.loadSystem('IconSet');
    var pw = Window_Base._iconWidth;
    var ph = Window_Base._iconHeight;
    var sx = iconIndex % 16 * pw;
    var sy = Math.floor(iconIndex / 16) * ph;
    this.bitmap.blt(bitmap, sx, sy, pw, ph, x, y);
    return true;
};

/**
 * Рисует лицо персонажа
 * Возвращает true, если Bitmap существует
 *
 * @method drawFace
 *
 * @param {String} faceName - Название файла
 * @param {Number} faceIndex - Номер лица
 * @param {Number | Rectangle | Object} [object] - Координата X или Rectangle, или Объект типа {}
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
    if (object && (object.constructor === Rectangle || object.constructor === Object)) {
        return this.drawFace(faceName, faceIndex, object.x, object.y, object.width, object.height);
    }
    var x = object || 0;
    y = y || 0;
    width = width || Window_Base._faceWidth;
    height = height || Window_Base._faceHeight;
    var bitmap = ImageManager.loadFace(faceName);
    var pw = Window_Base._faceWidth;
    var ph = Window_Base._faceHeight;
    var sw = Math.min(width, pw);
    var sh = Math.min(height, ph);
    var dx = Math.floor(x + Math.max(width - pw, 0) / 2);
    var dy = Math.floor(y + Math.max(height - ph, 0) / 2);
    var sx = faceIndex % 4 * pw + (pw - sw) / 2;
    var sy = Math.floor(faceIndex / 4) * ph + (ph - sh) / 2;
    this.bitmap.blt(bitmap, sx, sy, sw, sh, dx, dy);
    return true;
};

/**
 * Рисует персонажа
 * Возвращает true, если Bitmap существует
 *
 * @method drawCharacter
 *
 * @param {String} characterName - Название файла
 * @param {Number} characterIndex - Номер персонажа
 * @param {Number | Point | Object} [object] - Координата X или Point, или Объект типа {}
 * @param {Number} [y] - Координата Y
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 *
 * @return {Boolean} Bitmap существует
 */
DKTools.Base.prototype.drawCharacter = function(characterName, characterIndex, object, y) {
    if (!this.hasBitmap()) {
        return false;
    }
    if (object && (object.constructor === Point || object.constructor === Object)) {
        return this.drawCharacter(characterName, characterIndex, object.x, object.y);
    }
    var x = object || 0;
    y = y || 0;
    var bitmap = ImageManager.loadCharacter(characterName);
    var big = ImageManager.isBigCharacter(characterName);
    var pw = bitmap.width / (big ? 3 : 12);
    var ph = bitmap.height / (big ? 4 : 8);
    var n = characterIndex;
    var sx = (n % 4 * 3 + 1) * pw;
    var sy = (Math.floor(n / 4) * 4) * ph;
    this.bitmap.blt(bitmap, sx, sy, pw, ph, x - pw / 2, y - ph);
    return true;
};

// load methods

/**
 * Загружает Bitmap из папки img/animations/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @method loadAnimation
 *
 * @param {String} filename - Название файла
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadAnimation = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/animations/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/battlebacks1/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @method loadBattleback1
 *
 * @param {String} filename - Название файла
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadBattleback1 = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/battlebacks1/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/battlebacks2/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @method loadBattleback2
 *
 * @param {String} filename - Название файла
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadBattleback2 = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/battlebacks2/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/enemies/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @method loadEnemy
 *
 * @param {String} filename - Название файла
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadEnemy = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/enemies/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/characters/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @method loadCharacter
 *
 * @param {String} filename - Название файла
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadCharacter = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/characters/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/faces/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @method loadFace
 *
 * @param {String} filename - Название файла
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadFace = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/faces/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/parallaxes/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @method loadParallax
 *
 * @param {String} filename - Название файла
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadParallax = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/parallaxes/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/pictures/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @method loadPicture
 *
 * @param {String} filename - Название файла
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadPicture = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/pictures/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/sv_actors/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @method loadSvActor
 *
 * @param {String} filename - Название файла
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadSvActor = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/sv_actors/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/sv_enemies/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @method loadSvEnemy
 *
 * @param {String} filename - Название файла
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadSvEnemy = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/sv_enemies/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/system/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @method loadSystem
 *
 * @param {String} filename - Название файла
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadSystem = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/system/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/tilesets/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @method loadTileset
 *
 * @param {String} filename - Название файла
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadTileset = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/tilesets/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/titles1/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @method loadTitle1
 *
 * @param {String} filename - Название файла
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadTitle1 = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/titles1/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/titles2/
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @method loadTitle2
 *
 * @param {String} filename - Название файла
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadTitle2 = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/titles2/', filename, listener, hue, smooth);
};

/**
 * Загружает обложку окна из папки img/system/
 * Возвращает true, если Bitmap был объекта изменен
 *
 * @method loadWindowskin
 *
 * @param {String} filename - Название файла
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
 */
DKTools.Base.prototype.loadWindowskin = function(filename, listener, hue, smooth) {
    return this.loadSystem(filename || this.standardWindowskin(), listener, hue, smooth);
};

// symbols methods

/**
 * Возвращает значение символа
 *
 * @method symbol
 * @param {String} symbol - Символ
 * @return {Boolean} Значение символа
 */
DKTools.Base.prototype.symbol = function(symbol) {
    return !!this._symbols[symbol];
};

/**
 * Обрабатывает изменение значения символа
 *
 * @method onSymbolChange
 * @param {String} symbol - Символ
 * @param {Boolean} value - Значение символа
 */
DKTools.Base.prototype.onSymbolChange = function(symbol, value) {
};

/**
 * Устанавливает значение символа
 *
 * @method setSymbol
 * @param {String} symbol - Символ
 * @param {Boolean} value - Значение символа
 */
DKTools.Base.prototype.setSymbol = function(symbol, value) {
    value = DKTools.Utils.toBoolean(value);
    var lastValue = this.symbol(symbol);
    this._symbols[symbol] = value;
    if (lastValue !== value) {
        this.onSymbolChange(symbol, value);
    }
};

/**
 * Возвращает значения символов или одного символа
 *
 * @method symbols
 * @param {String[] | String | ...String} object - Массив символов или символ, или перечисление символов
 * @return {Boolean[]} Значения символов или одного символа
 */
DKTools.Base.prototype.symbols = function(object) {
    var symbols = [];
    if (arguments.length > 1) {
        for(var i = 0; i < arguments.length; i++) {
            var symbol = arguments[i];
            var value = this.symbol(symbol);
            symbols.push(value);
        }
    } else {
        if (object instanceof Array) {
            return this.symbols.apply(this, object);
        } else {
            var value = this.symbol(object);
            symbols.push(value);
        }
    }
    return symbols;
};

/**
 * Возвращает true, если у объекта есть символ
 *
 * @method hasSymbol
 * @param {String} symbol - Символ
 * @return {Boolean} У объекта есть символ
 */
DKTools.Base.prototype.hasSymbol = function(symbol) {
    return this._symbols.hasOwnProperty(symbol);
};

/**
 * Возвращает объект, в котором для каждого символа указано его значение
 *
 * @method hasSymbols
 * @param {String[] | String | ...String} object - Массив символов или символ, или перечисление символов
 * @return {Object} Объект, в котором для каждого символа указано его значение
 */
DKTools.Base.prototype.hasSymbols = function(object) {
    var symbols = {};
    if (arguments.length > 1) {
        for(var i = 0; i < arguments.length; i++) {
            var symbol = arguments[i];
            symbols[symbol] = this.hasSymbol(symbol);
        }
    } else {
        if (object instanceof Array) {
            return this.hasSymbols.apply(this, object);
        } else {
            symbols[object] = this.hasSymbol(object);
        }
    }
    return symbols;
};

/**
 * Переключает значение символа
 *
 * @method switchSymbol
 * @param {String} symbol - Символ
 */
DKTools.Base.prototype.switchSymbol = function(symbol) {
    var newValue = !this.symbol(symbol);
    this.setSymbol(symbol, newValue);
};

/**
 * Переключает значения символов или одного символа
 *
 * @method switchSymbols
 * @param {String[] | String | ...String} object - Массив символов или символ, или перечисление символов
 */
DKTools.Base.prototype.switchSymbols = function(object) {
    if (arguments.length > 1) {
        for(var i = 0; i < arguments.length; i++) {
            var symbol = arguments[i];
            this.switchSymbol(symbol);
        }
    } else {
        if (object instanceof Array) {
            return this.switchSymbols.apply(this, object);
        } else {
            return this.switchSymbol(object);
        }
    }
};

/**
 * Включает символ
 *
 * @method enableSymbol
 * @param {String} symbol - Символ
 */
DKTools.Base.prototype.enableSymbol = function(symbol) {
    this.setSymbol(symbol, true);
};

/**
 * Включает символы или один символ
 *
 * @method enableSymbols
 * @param {String[] | String | ...String} object - Массив символов или символ, или перечисление символов
 */
DKTools.Base.prototype.enableSymbols = function(object) {
    if (arguments.length > 1) {
        for(var i = 0; i < arguments.length; i++) {
            var symbol = arguments[i];
            this.enableSymbol(symbol);
        }
    } else {
        if (object instanceof Array) {
            return this.enableSymbols.apply(this, object);
        } else {
            return this.enableSymbol(object);
        }
    }
};

/**
 * Выключает символ
 *
 * @method disableSymbol
 * @param {String} symbol - Символ
 */
DKTools.Base.prototype.disableSymbol = function(symbol) {
    this.setSymbol(symbol, false);
};

/**
 * Выключает символы или один символ
 *
 * @method disableSymbols
 * @param {String[] | String | ...String} object - Массив символов или символ, или перечисление символов
 */
DKTools.Base.prototype.disableSymbols = function(object) {
    if (arguments.length > 1) {
        for(var i = 0; i < arguments.length; i++) {
            var symbol = arguments[i];
            this.disableSymbol(symbol);
        }
    } else {
        if (object instanceof Array) {
            return this.disableSymbols.apply(this, object);
        } else {
            return this.disableSymbol(object);
        }
    }
};

/**
 * Возвращает массив с включенными символами
 *
 * @method enabledSymbols
 * @return {String[]} Массив с включенными символами
 */
DKTools.Base.prototype.enabledSymbols = function() {
    var symbols = [];
    for(var symbol in this._symbols) {
        if (this.symbol(symbol)) {
            symbols.push(symbol);
        }
    }
    return symbols;
};

/**
 * Возвращает массив с выключенными символами
 *
 * @method disabledSymbols
 * @return {String[]} Массив с выключенными символами
 */
DKTools.Base.prototype.disabledSymbols = function() {
    var symbols = [];
    for(var symbol in this._symbols) {
        if (!this.symbol(symbol)) {
            symbols.push(symbol);
        }
    }
    return symbols;
};

/**
 * Возвращает конъюнкцию символов
 *
 * @method isSymbolsEnabled
 * @param {String[] | String | ...String} object - Массив символов или символ, или перечисление символов
 * @return {Boolean} Конъюнкция символов
 */
DKTools.Base.prototype.isSymbolsEnabled = function(object) {
    var symbols = this.symbols.apply(this, arguments);
    return symbols.conjunction();
};

// event methods

/**
 * Проверяет контейнер с событиями, удаляя завершенные события
 *
 * @private
 * @method _checkEventContainer
 * @param {String} type - Тип события
 * @return {Array}
 */
DKTools.Base.prototype._checkEventContainer = function(type) {
    var events = [];
    var callback = function(event) {
        if (event && event.checkEvent()) {
            events.push(event);
        }
    }.bind(this);
    this.iterateEventContainer(type, callback);
    return events;
};

/**
 * Проверяет события
 *
 * @method checkEvents
 */
DKTools.Base.prototype.checkEvents = function() {
    for(var type in this._events) {
        this._events[type] = this._checkEventContainer(type);
    }
};

/**
 * Удаляет событие из контейнера
 * Возвращает true, если событие было удалено
 *
 * @method removeEvent
 * @param {DKTools.Event} event - Событие
 * @return {Boolean} Событие было удалено
 */
DKTools.Base.prototype.removeEvent = function(event) {
    var container = this.eventContainer(event);
    var index = this.eventIndex(event);
    if (index >= 0) {
        container[index] = null;
        return true;
    }
    return false;
};

/**
 * Выполняет callback функцию для событий
 *
 * @method iterateEventContainer
 * @param {String} type - Тип события
 * @param {Function} callback - Функция обработки событий
 */
DKTools.Base.prototype.iterateEventContainer = function(type, callback) {
    var container = this.eventContainerByType(type);
    container.forEach(callback);
};

/**
 * Проверяет события на паузу
 * Возвращает конъюнкцию пауз событий
 *
 * @method eventsIsPaused
 * @param {String} type - Тип события
 * @return {Boolean} Конъюнкция пауз событий
 */
DKTools.Base.prototype.eventsIsPaused = function(type) {
    var paused = [];
    var callback = function(event) {
        paused.push(event.isPaused());
    }.bind(this);
    this.iterateEventContainer(type, callback);
    return paused.conjunction();
};

/**
 * Ставит события на паузу
 *
 * @method pauseEvents
 * @param {String} type - Тип события
 * @param {Number} duration - Длительность паузы
 */
DKTools.Base.prototype.pauseEvents = function(type, duration) {
    var callback = function(event) {
        event.pause(duration);
    }.bind(this);
    this.iterateEventContainer(type, callback);
};

/**
 * Снимает события с паузы
 *
 * @method resumeEvents
 * @param {String} type - Тип события
 */
DKTools.Base.prototype.resumeEvents = function(type) {
    var callback = function(event) {
        event.resume();
    }.bind(this);
    this.iterateEventContainer(type, callback);
};

/**
 * Обновляет события
 *
 * @method updateEvents
 */
DKTools.Base.prototype.updateEvents = function() {
    this.checkEvents();
    if (!this.hasEvents()) {
        return;
    }
    this.updateWaitEvents();
    this.updateReadyEvents();
    this.updateUpdateEvents();
    this.updateFreeEvents();
};

/**
 * Обновляет событие
 *
 * @method updateEvent
 * @param {DKTools.Event} event - Событие
 */
DKTools.Base.prototype.updateEvent = function(event) {
    if (!event) {
        return;
    }
    event.update();
};

/**
 * Обновляет события из контейнера
 *
 * @method updateEventContainer
 * @param {String} type - Тип события
 */
DKTools.Base.prototype.updateEventContainer = function(type) {
    var callback = function(event) {
        this.updateEvent(event);
    }.bind(this);
    this.iterateEventContainer(type, callback);
};

/**
 * Обновляет события типа wait
 *
 * @method updateWaitEvents
 */
DKTools.Base.prototype.updateWaitEvents = function() {
    if (!this.isWaiting()) {
        return;
    }
    var container = this.eventContainerByType('wait');
    var event = container[0];
    this.updateEvent(event);
};

/**
 * Обновляет события типа update
 *
 * @method updateUpdateEvents
 */
DKTools.Base.prototype.updateUpdateEvents = function() {
    this.updateEventContainer('update');
};

/**
 * Обновляет события типа start
 *
 * @method updateStartEvents
 */
DKTools.Base.prototype.updateStartEvents = function() {
    if (!this.isStarted()) {
        return;
    }
    this.updateEventContainer('start');
};

/**
 * Обновляет события типа ready
 *
 * @method updateReadyEvents
 */
DKTools.Base.prototype.updateReadyEvents = function() {
    if (!this.isReady()) {
        return;
    }
    this.updateEventContainer('ready');
};

/**
 * Обновляет события типа free
 *
 * @method updateFreeEvents
 */
DKTools.Base.prototype.updateFreeEvents = function() {
    if (this.isBusy()) {
        return;
    }
    this.updateEventContainer('free');
};

/**
 * Обновляет события типа activate
 *
 * @method updateActivateEvents
 */
DKTools.Base.prototype.updateActivateEvents = function() {
    this.updateEventContainer('activate');
};

/**
 * Обновляет события типа deactivate
 *
 * @method updateDeactivateEvents
 */
DKTools.Base.prototype.updateDeactivateEvents = function() {
    this.updateEventContainer('deactivate');
};

/**
 * Обновляет события типа show
 *
 * @method updateShowEvents
 */
DKTools.Base.prototype.updateShowEvents = function() {
    this.updateEventContainer('show');
};

/**
 * Обновляет события типа hide
 *
 * @method updateHideEvents
 */
DKTools.Base.prototype.updateHideEvents = function() {
    this.updateEventContainer('hide');
};

/**
 * Создает контейнер для событий
 *
 * @method createEventContainer
 * @param {String} type - Тип события
 * @return {Array} Контейнер с событиями
 */
DKTools.Base.prototype.createEventContainer = function(type) {
    this._events[type] = [];
    return this._events[type];
};

/**
 * Возвращает контейнер событий по типу события
 *
 * @method eventContainerByType
 * @param {String} type - Тип события
 * @return {Array} Контейнер с событиями
 */
DKTools.Base.prototype.eventContainerByType = function(type) {
    var container = this._events[type];
    if (container) {
        return container;
    } else {
        return this.createEventContainer(type);
    }
};

/**
 * Возвращает контейнер для событий по событию
 *
 * @method eventContainer
 * @param {DKTools.Event} event - Событие
 * @return {Array} Контейнер с событиями
 */
DKTools.Base.prototype.eventContainer = function(event) {
    var type = event.type;
    return this.eventContainerByType(type);
};

/**
 * Возвращает индекс события в его контейнере
 *
 * @method eventIndex
 * @param {DKTools.Event} event - Событие
 * @return {Number} Индекс события в его контейнере
 */
DKTools.Base.prototype.eventIndex = function(event) {
    var container = this.eventContainer(event);
    return container.indexOf(event);
};

/**
 * Возвращает массив со всеми или событиями определенного типа
 *
 * @method events
 * @param {String} [type] - Тип события
 * @return {Array} Массив с событиями
 */
DKTools.Base.prototype.events = function(type) {
    if (type) {
        return this.eventContainerByType(type);
    }
    var events = [];
    for(var type in this._events) {
        var container = this.eventContainerByType(type);
        events = events.concat(container);
    }
    return events;
};

/**
 * Проверяет существование события в объекте
 * Возвращает true, если событие есть
 *
 * @method hasEvent
 * @param {DKTools.Event} event - Событие
 * @return {Boolean} Событие есть
 */
DKTools.Base.prototype.hasEvent = function(event) {
    return this.eventIndex(event) >= 0;
};

/**
 * Проверяет существование событий определенного типа
 * Возвращает true, если события есть
 *
 * @method hasEvents
 * @param {String} [type] - Тип события
 * @return {Boolean} События есть
 */
DKTools.Base.prototype.hasEvents = function(type) {
    return this.events(type).length > 0;
};

/**
 * Создает событие
 *
 * @private
 * @method _createEvent
 *
 * @param {String} type - Тип события
 * @param {Function} [handler] - Обработчик события
 * @param {Number} [duration] - Длительность события
 * @param {Function} [onStartHandler] - Обработчик начала работы события
 * @param {Function} [onEndHandler] - Обработчик окончания работы события
 *
 * @return {DKTools.Event} Созданное событие
 */
DKTools.Base.prototype._createEvent = function(type, handler, duration, onStartHandler, onEndHandler) {
    return new DKTools.Event(this, type, handler, duration, onStartHandler, onEndHandler);
};

/**
 * Добавляет событие
 *
 * @method addEvent
 *
 * @param {String} type - Тип события
 * @param {Function} [handler] - Обработчик события
 * @param {Number} [duration] - Длительность события
 * @param {Function} [onStartHandler] - Обработчик начала работы события
 * @param {Function} [onEndHandler] - Обработчик окончания работы события
 *
 * @return {DKTools.Event} Добавленное событие
 */
DKTools.Base.prototype.addEvent = function(type, handler, duration, onStartHandler, onEndHandler) {
    var event = this._createEvent(type, handler, duration, onStartHandler, onEndHandler);
    var container = this.eventContainer(event);
    container.push(event);
    return event;
};

/**
 * Добавляет событие с бесконечной длительностью
 *
 * @method addEventHandler
 *
 * @param {String} type - Тип события
 * @param {Function} [handler] - Обработчик события
 *
 * @return {DKTools.Event} Добавленное событие
 */
DKTools.Base.prototype.addEventHandler = function(type, handler) {
    var duration = -1;
    return this.addEvent(type, handler, duration);
};

/**
 * Добавляет одноразовое событие
 *
 * @method addEventListener
 *
 * @param {String} type - Тип события
 * @param {Function} [handler] - Обработчик события
 *
 * @return {DKTools.Event} Добавленное событие
 */
DKTools.Base.prototype.addEventListener = function(type, handler) {
    var duration = 1;
    return this.addEvent(type, handler, duration);
};

// process methods

/**
 * Выполняет все
 *
 * @method processAll
 */
DKTools.Base.prototype.processAll = function() {
};

// move methods

/**
 * Плавно изменяет масштабирование объекта
 * Возвращает событие
 *
 * @method moveScale
 *
 * @param {Number} duration - Длительность события
 * @param {Number} newX - Масштабирование по оси X
 * @param {Number} newY - Масштабирование по оси Y
 * @param {Function} [onStartHandler] - Обработчик начала работы события
 * @param {Function} [onEndHandler] - Обработчик окончания работы события
 *
 * @return {DKTools.Event} Событие
 */
DKTools.Base.prototype.moveScale = function(duration, newX, newY, onStartHandler, onEndHandler) {
    return this.addEvent('update', this._updateMoveScale.bind(this, newX, newY), duration, onStartHandler, onEndHandler);
};

/**
 * Плавно вращает объект
 * Возвращает событие
 *
 * @method moveRotation
 *
 * @param {Number} duration - Длительность события
 * @param {Number} newRotation - Вращение объекта
 * @param {Function} [onStartHandler] - Обработчик начала работы события
 * @param {Function} [onEndHandler] - Обработчик окончания работы события
 *
 * @return {DKTools.Event} Событие
 */
DKTools.Base.prototype.moveRotation = function(duration, newRotation, onStartHandler, onEndHandler) {
    return this.addEvent('update', this._updateMoveRotation.bind(this, newRotation), duration, onStartHandler, onEndHandler);
};

// _update methods methods

/**
 * Обновляет перемещение объекта
 *
 * @private
 * @method _updateMove
 *
 * @param {Number} newX - Новая координата X
 * @param {Number} newY - Новая координата Y
 * @param {DKTools.Event} event - Событие
 */
DKTools.Base.prototype._updateMove = function(newX, newY, event) {
    var duration = event.duration;
    var x = (this.x * (duration - 1) + newX) / duration;
    var y = (this.y * (duration - 1) + newY) / duration;
    this.move(x, y);
};

DKTools.Base.prototype._updateMoveScale = function(newScaleX, newScaleY, event) {
    var duration = event.duration;
    var scaleX = (this.scale.x * (duration - 1) + newScaleX) / duration;
    var scaleY = (this.scale.y * (duration - 1) + newScaleY) / duration;
    this.setupScale(scaleX, scaleY);
};

DKTools.Base.prototype._updateMoveRotation = function(newRotation, event) {
    var duration = event.duration;
    var rotation = (this.rotation * (duration - 1) + newRotation) / duration;
    this.setupRotation(rotation);
};

// update methods

/**
 * Обновляет все
 *
 * @method updateAll
 */
DKTools.Base.prototype.updateAll = function() {
};

/**
 * Обновляет объект
 *
 * @method update
 */
DKTools.Base.prototype.update = function() {
    this.processAll();
    this.updateEvents();
};

/**
 * Обновляет шрифт текста
 *
 * @method updateFont
 */
DKTools.Base.prototype.updateFont = function() {
    this.bitmap.fontFace = this.font[0];
    this.bitmap.fontItalic = this.font[1];
    this.bitmap.fontSize = this.font[2];
};

/**
 * Обновляет цвет текста
 *
 * @method updateTextColor
 */
DKTools.Base.prototype.updateTextColor = function() {
    this.bitmap.textColor = this.textColor;
};

/**
 * Обновление прозрачности рисования окна

 * @method updatePaintOpacity
 */
DKTools.Base.prototype.updatePaintOpacity = function() {
    this.bitmap.paintOpacity = this._paintOpacity;
};

/**
 * Обновляет фон объекта
 *
 * @method updateBackground
 */
DKTools.Base.prototype.updateBackground = function() {
    if (this.hasBackgroundColor()) {
        this.fillAll(this.backgroundColor);
    }
};

/**
 * Обновляет отображаемый текст
 *
 * @method updateText
 */
DKTools.Base.prototype.updateText = function() {
    if (this.hasText()) {
        this.drawText(this.text);
    }
};

/**
 * Обновляет данные ввода
 *
 * @method updateInputData
 */
DKTools.Base.prototype.updateInputData = function() {
    Input.update();
    TouchInput.update();
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
 * @type {Number}
 */
DKTools.Sprite._counter = 0;

// properties

Object.defineProperties(DKTools.Sprite.prototype, {

    /**
     * Рамка спрайта
     *
     * @readonly
     * @type {Rectangle}
     */
    frame: {
        get: function() {
            return this._frame;
        },
        configurable: true
    },

    /**
     * Ширина спрайта
     *
     * @type {Number}
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
     * Высота спрайта
     *
     * @type {Number}
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
     * Путь к файлу графики
     *
     * @readonly
     * @type {String}
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
     */
    graphicName: {
        get: function() {
            return this._graphicName;
        },
        configurable: true
    },

    /**
     * Счетчик фреймов, который показывает сколько мышь находится внутри спрайта
     *
     * @readonly
     * @type {Number}
     */
    enteredTime: {
        get: function() {
            return this._enteredTime;
        },
        configurable: true
    },

    /**
     * Счетчик фреймов, который показывает сколько мышь нажата на спрайт
     *
     * @readonly
     * @type {Number}
     */
    pressedTime: {
        get: function() {
            return this._pressedTime;
        },
        configurable: true
    },

    /**
     *
     *
     * @type {Boolean}
     */
    touched: {
        get: function() {
            return this._touched;
        },
        set: function(value) {
            if (this._touched !== value) {
                this._touched = value;
                this._updateTouched();
            }
        },
        configurable: true
    },

    /**
     * Координата X нажатия мыши внутри спрайта
     *
     * @readonly
     * @type {Number}
     */
    clickX : {
        get: function() {
            return this.canvasToLocalX(TouchInput.x);
        },
        configurable: true
    },

    /**
     * Координата Y нажатия мыши внутри спрайта
     *
     * @readonly
     * @type {Number}
     */
    clickY : {
        get: function() {
            return this.canvasToLocalY(TouchInput.y);
        },
        configurable: true
    },

    /**
     * Количество пикселей прокрутки мыши по оси X внутри спрайта
     *
     * @readonly
     * @type {Number}
     */
    wheelX: {
        get: function() {
            return this._wheelX;
        },
        configurable: true
    },

    /**
     * Количество пикселей прокрутки мыши по оси Y внутри спрайта
     *
     * @readonly
     * @type {Number}
     */
    wheelY: {
        get: function() {
            return this._wheelY;
        },
        configurable: true
    },

});

// initialize method

/**
 * Инициализирует объект класса
 *
 * @override
 * @constructor
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
DKTools.Sprite.prototype.initialize = function(object, y, width, height) {
	Sprite.prototype.initialize.call(this);
    DKTools.Base.prototype.initialize.call(this, object, y, width, height);
    if (object) {
        var bitmap;
        if (object instanceof Bitmap) {
            bitmap = object;
        } else if (object.constructor === Object) {
            bitmap = object.bitmap;
        }
        this.setupBitmap(bitmap);
    }
    DKTools.Sprite._counter++;
};

// _clear methods

/**
 * Очищает все данные спрайта
 *
 * @private
 * @override
 * @method _clearAll
 */
DKTools.Sprite.prototype._clearAll = function() {
    DKTools.Base.prototype._clearAll.call(this);
    this._clearEntered();
    this._clearEnteredTime();
    this._clearClicked();
    this._clearPressedTime();
    this._clearTouched();
};

/**
 * Очищает нахождение мыши внутри спрайта
 *
 * @private
 * @method _clearEntered
 */
DKTools.Sprite.prototype._clearEntered = function() {
    this._entered = false;
};

/**
 * Сбрасывает счетчик нахождения мыши внутри спрайта
 *
 * @private
 * @method _clearEnteredTime
 */
DKTools.Sprite.prototype._clearEnteredTime = function() {
    this._enteredTime = 0;
};

/**
 *
 *
 * @private
 * @method _clearClicked
 */
DKTools.Sprite.prototype._clearClicked = function() {
    this._clicked = false;
};

/**
 * Сбрасывает счетчик нажатия мыши внутри спрайта
 *
 * @private
 * @method _clearPressedTime
 */
DKTools.Sprite.prototype._clearPressedTime = function() {
    this._pressedTime = 0;
};

/**
 *
 *
 * @private
 * @method _clearTouched
 */
DKTools.Sprite.prototype._clearTouched = function() {
    this.touched = false;
};

// standard methods

/**
 * Возвращает стандартный интервал длительного нажатия
 *
 * @method standardLongPressInterval
 * @return {Number} Стандартный интервал длительного нажатия
 */
DKTools.Sprite.prototype.standardLongPressInterval = function() {
    return 20;
};

/**
 * Возвращает стандартный путь к папке с графикой
 *
 * @method standardGraphicFolder
 * @return {String} Стандартный путь к папке с графикой
 */
DKTools.Sprite.prototype.standardGraphicFolder = function() {
    return 'img/system/';
};

/**
 * Возвращает стандартное название файла графики
 *
 * @method standardGraphicName
 * @return {String} Стандартное название файла графики
 */
DKTools.Sprite.prototype.standardGraphicName = function() {
    return '';
};

/**
 * Возвращает стандартную прозрачность спрайта
 *
 * @method standardOpacity
 * @return {Number} Стандартная прозрачность спрайта
 */
DKTools.Sprite.prototype.standardOpacity = function() {
	return 255;
};

/**
 * Возвращает стандартную рамку спрайта
 *
 * @method standardFrame
 * @return {Rectangle} Стандартная рамка спрайта
 */
DKTools.Sprite.prototype.standardFrame = function() {
    return new Rectangle(0, 0, this.width, this.height);
};

/**
 * Возвращает рамку спрайта в ненажатом состоянии
 *
 * @method standardColdFrame
 * @return {null} Рамка спрайта в ненажатом состоянии
 */
DKTools.Sprite.prototype.standardColdFrame = function() {
    return null;
};

/**
 * Возвращает рамку спрайта в нажатом состоянии
 *
 * @method standardHotFrame
 * @return {null} Рамка спрайта в нажатом состоянии
 */
DKTools.Sprite.prototype.standardHotFrame = function() {
    return null;
};

/**
 * Возвращает масштабирование спрайта в ненажатом состоянии
 *
 * @method standardColdScale
 * @return {null} Масштабирование спрайта в ненажатом состоянии
 */
DKTools.Sprite.prototype.standardColdScale = function() {
    return null;
};

/**
 * Возвращает масштабирование спрайта в нажатом состоянии
 *
 * @method standardHotScale
 * @return {null} Масштабирование спрайта в нажатом состоянии
 */
DKTools.Sprite.prototype.standardHotScale = function() {
    return null;
};

/**
 * Возвращает прозрачность спрайта в ненажатом состоянии
 *
 * @method standardColdOpacity
 * @return {null} Прозрачность спрайта в ненажатом состоянии
 */
DKTools.Sprite.prototype.standardColdOpacity = function() {
    return null;
};

/**
 * Возвращает прозрачность спрайта в нажатом состоянии
 *
 * @method standardHotOpacity
 * @return {null} Прозрачность спрайта в нажатом состоянии
 */
DKTools.Sprite.prototype.standardHotOpacity = function() {
    return null;
};

// setup methods

/**
 * Устанавливает все параметры спрайта
 *
 * @override
 * @method setupAll
 *
 * @param {Object} [object] - Объект типа {}
 *
 * @param {Number} [object.opacity] - Прозрачность спрайта
 * @param {Number} [object.longPressInterval] - Интервал длительного нажатия
 * @param {Bitmap | Object} [object.bitmap] - Bitmap или Объект типа {}
 * @param {String} [object.graphicFolder] - Путь к файлу графики
 * @param {String} [object.graphicName] - Название файла графики
 * 
 * @param {String} object.bitmap.folder - Путь к файлу
 * @param {String} object.bitmap.filename - Название файла
 * @param {Function} [object.bitmap.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.bitmap.hue] - Оттенок
 * @param {Boolean} [object.bitmap.smooth] - Сглаживание
 * 
 * @see object properties: DKTools.Base.prototype.setupAll
*/
DKTools.Sprite.prototype.setupAll = function(object) {
	object = object || {};
    DKTools.Base.prototype.setupAll.call(this, object);
    this.setupOpacity(object.opacity);
    this.setupLongPressInterval(object.longPressInterval);
    this.setupBitmap(object.bitmap);
    this.setupGraphicFolder(object.graphicFolder);
    this.setupGraphicName(object.graphicName);
};

/**
 * Устанавливает ширину Bitmap
 *
 * @method setupWidth
 * @param {Number} [width] - Ширина Bitmap
*/
DKTools.Sprite.prototype.setupWidth = function(width) {
	this._bitmapWidth = this._checkWidth(width);
};

/**
 * Устанавливает высоту Bitmap
 *
 * @method setupHeight
 * @param {Number} [height] - Высота Bitmap
*/
DKTools.Sprite.prototype.setupHeight = function(height) {
	this._bitmapHeight = this._checkHeight(height);
};

/**
 * Устанавливает размер Bitmap
 *
 * @method setupSize
 *
 * @param {Number | Object} [object] - Ширина Bitmap или Объекти типа {}
 * @param {Number} [height] - Высота Bitmap
 *
 * @param {Number} [object.width] - Ширина Bitmap
 * @param {Number} [object.height] - Высота Bitmap
 */
DKTools.Sprite.prototype.setupSize = function(object, height) {
    if (object && object.constructor === Object) {
        return this.setupSize(object.width, object.height);
    }
    this.setupWidth(object);
    this.setupHeight(height);
};

/**
 * Устанавливает прозрачность спрайта
 *
 * @method setupOpacity
 * @param {Number} [opacity] - Прозрачность спрайта
 */
DKTools.Sprite.prototype.setupOpacity = function(opacity) {
    this.opacity = (opacity == null ? this.standardOpacity() : opacity);
};

/**
 * Устанавливает интервал длительного нажатия
 *
 * @method setupLongPressInterval
 * @param {Number} [interval] - Интервал длительного нажатия
 */
DKTools.Sprite.prototype.setupLongPressInterval = function(interval) {
    this._longPressInterval = interval || this.standardLongPressInterval();
};

/**
 * Устанавливает путь к файлу графики
 *
 * @method setupGraphicFolder
 * @param {String} [folder] - Путь к файлу графики
 */
DKTools.Sprite.prototype.setupGraphicFolder = function(folder) {
    this._graphicFolder = (folder == null ? this.standardGraphicFolder() : folder);
};

/**
 * Устанавливает название файла графики
 *
 * @method setupGraphicName
 * @param {String} [graphicName] - Название файла графики
 */
DKTools.Sprite.prototype.setupGraphicName = function(graphicName) {
    this._graphicName = (graphicName == null ? this.standardGraphicName() : graphicName);
};

/**
 * Устанавливает Bitmap для спрайта
 *
 * @method setupBitmap
 *
 * @param {Bitmap | Object} [object] - Bitmap или Объект типа {}
 * @param {String} object.folder - Путь к файлу
 * @param {String} object.filename - Название файла
 * @param {Function} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [object.hue] - Оттенок
 * @param {Boolean} [object.smooth] - Сглаживание
*/
DKTools.Sprite.prototype.setupBitmap = function(object) {
	this.bitmap = this.bitmapFromObject(object);
    var bitmap = this.bitmap;
	if (bitmap) {
		bitmap.addLoadListener(function() {
			this.setupSize(bitmap.width, bitmap.height);
		}.bind(this));
	}
	this._fixedBitmap = !!bitmap;
};

/**
 * Устанавливает рамку спрайта
 *
 * @method setupFrame
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
    if (object && (object.constructor === Rectangle || object.constructor === Object)) {
        return this.setupFrame(object.x, object.y, object.width, object.height);
    }
    var standardFrame = this.standardFrame();
    var frame = this._checkRectangle(object, y, width, height, standardFrame);
    Sprite.prototype.setFrame.call(this, frame.x, frame.y, frame.width, frame.height);
};

/**
 * Устанавливает рамку для ненажатого состояния
 *
 * @method setupColdFrame
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
DKTools.Sprite.prototype.setupColdFrame = function(object, y, width, height) {
    if (object && (object.constructor === Rectangle || object.constructor === Object)) {
        return this.setupColdFrame(object.x, object.y, object.width, object.height);
    }
    var standardFrame = this.standardColdFrame();
    var frame = this._checkRectangle(object, y, width, height, standardFrame);
    this._coldFrame = (frame.isEmpty() ? null : frame);
    this._updateTouched();
};

/**
 * Устанавливает рамку для нажатого состояния
 *
 * @method setupHotFrame
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
DKTools.Sprite.prototype.setupHotFrame = function(object, y, width, height) {
    if (object && (object.constructor === Rectangle || object.constructor === Object)) {
        return this.setupHotFrame(object.x, object.y, object.width, object.height);
    }
    var standardFrame = this.standardHotFrame();
    var frame = this._checkRectangle(object, y, width, height, standardFrame);
    this._hotFrame = (frame.isEmpty() ? null : frame);
    this._updateTouched();
};

/**
 * Устанавливает масштабирование для ненажатого состояния
 *
 * @method setupColdScale
 *
 * @param {Number | Point | Object} [object] - Координата X или Point, или Объект типа {}
 * @param {Number} [y] - Координата Y
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 */
DKTools.Sprite.prototype.setupColdScale = function(object, y) {
    if (object && (object.constructor === Point || object.constructor === Object)) {
        return this.setupColdScale(object.x, object.y);
    }
    var standardScale = this.standardColdScale();
    var scale = this._checkPoint(object, y, standardScale);
    this._coldScale = (scale.isEmpty() ? null : scale);
    this._updateTouched();
};

/**
 * Устанавливает масштабирование для нажатого состояния
 *
 * @method setupHotScale
 *
 * @param {Number | Point | Object} [object] - Координата X или Point, или Объект типа {}
 * @param {Number} [y] - Координата Y
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 */
DKTools.Sprite.prototype.setupHotScale = function(object, y) {
    if (object && (object.constructor === Point || object.constructor === Object)) {
        return this.setupHotScale(object.x, object.y);
    }
    var standardScale = this.standardHotScale();
    var scale = this._checkPoint(object, y, standardScale);
    this._hotScale = (scale.isEmpty() ? null : scale);
    this._updateTouched();
};

/**
 * Устанавливает прозрачность для ненажатого состояния
 *
 * @method setupColdOpacity
 * @param {Number} [opacity] - Прозрачность спрайта
 */
DKTools.Sprite.prototype.setupColdOpacity = function(opacity) {
    this._coldOpacity = (opacity == null ? this.standardColdOpacity() : opacity);
    this._updateTouched();
};

/**
 * Устанавливает прозрачность для нажатого состояния
 *
 * @method setupHotOpacity
 * @param {Number} [opacity] - Прозрачность спрайта
 */
DKTools.Sprite.prototype.setupHotOpacity = function(opacity) {
    this._hotOpacity = (opacity == null ? this.standardHotOpacity() : opacity);
    this._updateTouched();
};

// set methods

/**
 * Изменяет все параметры спрайта
 * Возвращает количество измененных параметров
 *
 * @override
 * @method setAll
 *
 * @param {Object} [object] - Объект типа {}
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @param {Number} [object.opacity] - Прозрачность спрайта
 * @param {String} [object.graphicName] - Название файла графики
 *
 * @see object properties: DKTools.Base.prototype.setAll
 *
 * @return {Number} Количество измененных параметров
*/
DKTools.Sprite.prototype.setAll = function(object, blockStart) {
	object = object || {};
	var block = true;
    var changed = DKTools.Base.prototype.setAll.call(this, object);
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
 * @method setWidth
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
 * @method setHeight
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
 * @method setGraphicName
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
    var lastGraphic = this._graphicName;
    this.setupGraphic(graphicName);
    if (lastGraphic === this._graphicName) {
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
 * @method setOpacity
 * @param {Number} [opacity] - Прозрачность спрайта
 * @return {Boolean} Изменение произошло
*/
DKTools.Sprite.prototype.setOpacity = function(opacity) {
	if (this.opacity === opacity) {
        return false;
    }
	var lastOpacity = this.opacity;
	this.setupOpacity(opacity);
	return lastOpacity !== this.opacity;
};

/**
 * Изменяет Bitmap спрайта
 * Возвращает true, если изменение произошло
 *
 * @method setBitmap
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
 * @method setFrame
 *
 * @param {Number | Rectangle | Object} [object] -  Координата X или Rectangle, или Объект типа {}
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
    if (object && (object.constructor === Rectangle || object.constructor === Object)) {
        return this.setFrame(object.x, object.y, object.width, object.height);
    }
    var standardFrame = this.standardFrame();
    var lastFrame = this._frame.clone();
    var newFrame = this._checkRectangle(object, y, width, height, standardFrame);
    if (lastFrame.equals(newFrame)) {
        return false;
    }
    this.setupFrame(newFrame);
    return !lastFrame.equals(this._frame);
};

// check methods

/**
 * Проверяет ширину и высоту Bitmap на соответствие минимальным значениям
 * Возвращает количество измененных параметров
 *
 * @override
 * @method checkSize
 * @return {Number} Количество измененных параметров
 */
DKTools.Sprite.prototype.checkSize = function() {
    var minWidth = this.minWidth();
    var minHeight = this.minHeight();
    var changed = 0;
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

// _create methods

/**
 * Создает событие исчезновения/появления спрайта
 *
 * @private
 * @method _createVisibleEvent
 * @param {Number} duration - Длительность
 * @param {Boolean} visible - Исчезновение/Появление
 */
DKTools.Sprite.prototype._createVisibleEvent = function(duration, visible, blockDeactivate) {
    var callback = function() {
        this.hide(null, blockDeactivate);
    }.bind(this);
    if (visible) {
        var opacity = 255;
        var onStartHandler = callback;
        var onEndHandler = null;
    } else {
        var opacity = 0;
        var onStartHandler = null;
        var onEndHandler = callback;
    }
    var handler = this._updateMove.bind(this, opacity);
    this.addEvent('wait', handler, duration, onStartHandler, onEndHandler);
};

// create methods

/**
 * Создает все объекты
 *
 * @override
 * @method createAll
 */
DKTools.Sprite.prototype.createAll = function() {
    DKTools.Base.prototype.createAll.call(this);
    this.createBitmap();
};

/**
 * Если установлена графика, то загружает изображение из названия файла графики,
 * иначе создает Bitmap шириной _bitmapWidth и высотой _bitmapHeight
 *
 * @method createBitmap
 */
DKTools.Sprite.prototype.createBitmap = function() {
    if (this.hasGraphic()) {
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
 * @method resize
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
    width = (width == null ? this.minWidth() : width);
    height = (height == null ? this.minHeight() : height);
    if (this._bitmapWidth === width && this._bitmapHeight === height) {
        return false;
    }
    var lastWidth = this._bitmapWidth;
    var lastHeight = this._bitmapHeight;
    this.setupSize(width, height);
    if (lastWidth === this._bitmapWidth && lastHeight === this._bitmapHeight) {
        return false;
    }
    if (!blockStart) {
        this.start();
    }
    return true;
};

/**
 * Возвращает объект со всеми параметрами спрайта
 *
 * @override
 * @method object
 * @return {Object} Объект со всеми параметрами спрайта
 */
DKTools.Sprite.prototype.object = function() {
    var object = DKTools.Base.prototype.object.call(this);
    object.opacity = this.opacity;
    object.graphicFolder = this._graphicFolder;
    object.graphicName = this._graphicName;
    if (this.hasBitmap() && this.isFixedBitmap()) {
        object.bitmap = this.bitmap.clone();
    }
    return object;
};

// move methods

/**
 * Перемещает спрайт
 * Возвращает событие, если длительность больше 0
 *
 * @method move
 *
 * @param {Number | Point | Object} [object] - Координата X или Point, или Объект типа {}
 * @param {Number} [y] - Координата Y
 * @param {Number} [duration] - Длительность перемещения
 * @param {Function} [onStartHandler] - Обработчик начала работы события
 * @param {Function} [onEndHandler] - Обработчик окончания работы события
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 *
 * @return {DKTools.Event | null} Событие, если длительность больше 0
 */
DKTools.Sprite.prototype.move = function(object, y, duration, onStartHandler, onEndHandler) {
    if (object && (object.constructor === Point || object.constructor === Object)) {
        return Sprite.prototype.move.call(this, object.x || 0, object.y || 0);
    }
    if (duration > 0) {
        var x = (object == null ? this.x : object);
        y = (y == null ? this.y : y);
        return this.addEvent('update', this._updateMove.bind(this, x, y), duration, onStartHandler, onEndHandler);
    } else {
        var x = object || 0;
        y = y || 0;
        Sprite.prototype.move.call(this, x, y);
    }
};

/**
 * Плавно изменяет рамку спрайта
 * Возвращает событие
 *
 * @method moveFrame
 *
 * @param {Number} duration - Длительность события
 * @param {Number | Rectangle | Object} object - Координата X или Rectangle, или Объект типа {}
 * @param newY - Координата Y
 * @param newWidth - Ширина рамки
 * @param newHeight - Высота рамки
 *
 * @param {Number} object.x - Координата X
 * @param {Number} object.y - Координата Y
 * @param {Number} object.width - Ширина рамки
 * @param {Number} object.height - Высота рамки
 *
 * @return {DKTools.Event} Событие
 */
DKTools.Sprite.prototype.moveFrame = function(duration, object, newY, newWidth, newHeight) {
    if (object && (object.constructor === Rectangle || object.constructor === Object)) {
        return this.moveFrame(duration, object.x, object.y, object.width, object.height);
    }
    var newX = (object == null ? this.frame.x : object);
    newY = (newY == null ? this.frame.y : newY);
    newWidth = (newWidth == null ? this.frame.width : newWidth);
    newHeight = (newHeight == null ? this.frame.height : newHeight);
    return this.addEvent('update', this._updateMoveFrame.bind(this, newX, newY, newWidth, newHeight), duration);
};

/**
 * Плавно изменяет прозрачность спрайта
 *
 * @method moveOpacity
 *
 * @param {Number} duration - Длительность события
 * @param {Number} newOpacity - Прозрачность спрайта
 * @param {Function} [onStartHandler] - Обработчик начала работы события
 * @param {Function} [onEndHandler] - Обработчик окончания работы события
 *
 * @return {DKTools.Event} Событие
 */
DKTools.Sprite.prototype.moveOpacity = function(duration, newOpacity, onStartHandler, onEndHandler) {
    return this.addEvent('update', this._updateMoveOpacity.bind(this, newOpacity), duration, onStartHandler, onEndHandler);
};

/**
 * Создает маршрут передвижения спрайта
 * Возвращает массив с событиями
 *
 * @method moveRoute
 *
 * @param {Object[]} route - Массив с объектами маршрута
 * @param {Number} [route.duration] - Длительность передвижения
 * @param {Number} [route.onEndWait] - Длительность ожидания после передвижения
 * @param {Number} [route.x] - Координата X передвижения
 * @param {Number} [route.y] - Координата Y передвижения
 * @param {Number} [route.opacity] - Прозрачность передвижения
 * @param {Number} [route.scaleX] - Масштабирование передвижения по оси X
 * @param {Number} [route.scaleY] - Масштабирование передвижения по оси Y
 *
 * @return {DKTools.Event[]} Массив с событиями
 */
DKTools.Sprite.prototype.moveRoute = function(route) {
    //if (!route) {
    //    return [];
    //}
    //var events = [];
    //for(var i = 0; i < route.length; i++) {
    //    var object = route[i];
    //    var duration = object.duration || 1;
    //    var onEndWaitDuration = object.onEndWait || 0;
    //    var newX = (object.x == null ? this.x : object.x);
    //    var newY = (object.y == null ? this.y : object.y);
    //    var newOpacity = (object.opacity == null ? this.opacity : object.opacity);
    //    var newScaleX = object.scaleX || this.scale.x;
    //    var newScaleY = object.scaleY || this.scale.y;
    //    var event = this.addEvent('wait', this._updateMove.bind(this, newX, newY, newOpacity, newScaleX, newScaleY), duration);
    //    events.push(event);
    //    if (onEndWaitDuration > 0) {
    //        this.wait(onEndWaitDuration);
    //    }
    //}
    //return events;
};

// has methods

/**
 * Проверяет спрайт на наличие названия файла графики
 * Возвращает true, если название файла графики установлено
 *
 * @method hasGraphic
 * @return {Boolean} Название файла графики установлено
 */
DKTools.Sprite.prototype.hasGraphic = function() {
    return !!this._graphicName;
};

// can methods

/**
 * Возвращает true, если спрайт можно обновить и перерисовать
 *
 * @override
 * @method canRefreshAll
 * @return {Boolean} Спрайт можно обновить и перерисовать
 */
DKTools.Sprite.prototype.canRefreshAll = function() {
    return DKTools.Base.prototype.canRefreshAll.call(this) && !this.hasGraphic() && !this.isFixedBitmap();
};

//

/**
 * Эмулирует одиночное нажатие на спрайт
 *
 * @method emulateClick
 */
DKTools.Sprite.prototype.emulateClick = function() {
    //this.clearEvents('wait');
    //this.addEventListener('update', function() {
    //    this.addEvent('wait', function() {
    //        this._clicked = true;
    //        this.touched = true;
    //    }.bind(this), 8);
    //    this.addEvent('wait', function() {
    //        this._clicked = false;
    //        this.touched = false;
    //    }.bind(this), 8);
    //}.bind(this));
};

/**
 * Эмулирует нажатие на спрайт и обновляет события
 *
 * @method click
 */
DKTools.Sprite.prototype.click = function() {
    this.emulateClick();
    this.updateClickEvents();
};

// effects methods

DKTools.Sprite.prototype.adjustTone = function(object, g, b) {
    if (!this.hasBitmap()) {
        return false;
    }
    var r = object || 0;
    this.bitmap.adjustTone(r, g, b);
    return true;
};

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
 * @method blur
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
 *
 * @method removeBitmap
 */
DKTools.Sprite.prototype.removeBitmap = function() {
    if (this.hasBitmap()) {
        this.setBitmap();
    }
};

/**
 * Удаляет название файла графики
 *
 * @method removeGraphic
 */
DKTools.Sprite.prototype.removeGraphic = function() {
    if (this.hasGraphic()) {
        this.setGraphic();
    }
};

// is methods

/**
 * Возвращает true, если объект является спрайтом
 *
 * @override
 * @method isSprite
 * @return {Boolean} Объект является спрайтом
 */
DKTools.Sprite.prototype.isSprite = function() {
    return true;
};

/**
 * Возвращает true, если спрайт является контейнером
 *
 * @method isContainer
 * @return {Boolean} Спрайт является контейнером
 */
DKTools.Sprite.prototype.isContainer = function() {
    return false;
};

/**
 * Возвращает true, если координаты находятся внутри спрайта
 *
 * @method isInside
 *
 * @param {Number} x - Координата X
 * @param {Number} y - Координата Y
 *
 * @return {Boolean} Координаты находятся внутри спрайта
 */
DKTools.Sprite.prototype.isInside = function(x, y) {
    return x >= 0 && y >= 0 && x <= this.width && y <= this.height;
};

/**
 * Возвращает true, если курсор мыши находится внутри спрайта
 *
 * @method isEntered
 * @return {Boolean} Курсор мыши находится внутри спрайта
 */
DKTools.Sprite.prototype.isEntered = function() {
    return this.isInside(this.mouseX, this.mouseY);
};

/**
 * Проверяет было ли нажатие внутри спрайта
 * Возвращает true, если нажатие было внутри спрайта
 *
 * @method isTouched
 * @return {Boolean} Нажатие было внутри спрайта
 */
DKTools.Sprite.prototype.isTouched = function() {
    return this.isInside(this.clickX, this.clickY);
};

/**
 *
 *
 * @method isClicked
 * @return {Boolean}
 */
DKTools.Sprite.prototype.isClicked = function() {
    return this._clicked;
};

/**
 * Проверяет спрайт на длительное нажатие
 * Возвращает true, если спрайт нажимается больше интервала длительного нажатия
 *
 * @method isLongPressed
 * @return {Boolean} Спрайт нажимается больше интервала длительного нажатия
 */
DKTools.Sprite.prototype.isLongPressed = function() {
    return this._pressedTime >= this._longPressInterval;
};

/**
 * Проверяет спрайт на одиночное или длительное нажатие
 * Возвращает true, если спрайт был нажат один раз или нажимается длительное время
 *
 * @method isPressed
 * @return {Boolean} Спрайт был нажат один раз или нажимается длительное время
 */
DKTools.Sprite.prototype.isPressed = function() {
    return this.isClicked() || this.isLongPressed();
};

/**
 * Проверяет спрайт на установку Bitmap с помощью функции setupBitmap или setBitmap
 * Возвращает true, если Bitmap был установлен функцией setupBitmap или setBitmap, а не создан createBitmap
 * 
 * @method isFixedBitmap
 * @return {Boolean} Bitmap был установлен функцией setupBitmap или setBitmap
*/
DKTools.Sprite.prototype.isFixedBitmap = function() {
    return this._fixedBitmap;
};

/**
 *
 *
 * @method isResizable
 * @return {Boolean}
 */
DKTools.Sprite.prototype.isResizable = function() {
    return !this.hasGraphic() && !this.isFixedBitmap();
};

// load methods

/**
 * Загружает Bitmap из папки
 * Возвращает true, если Bitmap объекта был изменен
 *
 * @method loadBitmap
 *
 * @param {String} folder - Путь к файлу
 * @param {String} filename - Название файла
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @return {Boolean} Bitmap объекта был изменен
*/
DKTools.Sprite.prototype.loadBitmap = function(folder, filename, listener, hue, smooth) {
	var bitmap = ImageManager.loadBitmap(folder, filename, hue, smooth);
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
 * @method onGraphicLoadListener
 */
DKTools.Sprite.prototype.onGraphicLoadListener = function() {
};

/**
 * Загружает графику из названия файла графики
 *
 * @private
 * @method _loadGraphic
 */
DKTools.Sprite.prototype._loadGraphic = function() {
    if (this.hasGraphic()) {
        var folder = this.graphicFolder;
        var filename = this.graphicName;
        var listener = this.onGraphicLoadListener.bind(this);
        this.loadBitmap(folder, filename, listener);
        this._updateTouched();
        this.updateReadyEvents();
    }
};

// event methods

/**
 * Обновляет события типа mouseEnter
 *
 * @method updateMouseEnterEvents
 */
DKTools.Sprite.prototype.updateMouseEnterEvents = function() {
    this.updateEventContainer('mouseEnter');
};

/**
 * Обновляет события типа mouseStay
 *
 * @method updateMouseStayEvents
 */
DKTools.Sprite.prototype.updateMouseStayEvents = function() {
    this.updateEventContainer('mouseStay');
};

/**
 * Обновляет события типа mouseLeave
 *
 * @method updateMouseLeaveEvents
 */
DKTools.Sprite.prototype.updateMouseLeaveEvents = function() {
    if (this.isPressed()) {
        this._clearEntered();
        this._clearEnteredTime();
        this._clearClicked();
        this._clearPressedTime();
        this._clearTouched();
    }
    this.updateEventContainer('mouseLeave');
};

/**
 * Обновляет события типа click
 *
 * @method updateClickEvents
 */
DKTools.Sprite.prototype.updateClickEvents = function() {
    this.updateEventContainer('click');
};

/**
 * Обновляет события типа longPress
 *
 * @method updateLongPressEvents
 */
DKTools.Sprite.prototype.updateLongPressEvents = function() {
    this.updateEventContainer('longPress');
};

/**
 * Обновляет события типа wheelX
 *
 * @method updateWheelXEvents
 */
DKTools.Sprite.prototype.updateWheelXEvents = function() {
    this._wheelX = TouchInput.wheelX;
    if (this._wheelX === 0) {
        return;
    }
    this.updateEventContainer('wheelX');
};

/**
 * Обновляет события типа wheelY
 *
 * @method updateWheelYEvents
 */
DKTools.Sprite.prototype.updateWheelYEvents = function() {
    this._wheelY = TouchInput.wheelY;
    if (this._wheelY === 0) {
        return;
    }
    this.updateEventContainer('wheelY');
};

/**
 * Обновляет события типа wheelX и wheelY
 *
 * @method updateWheelEvents
 */
DKTools.Sprite.prototype.updateWheelEvents = function() {
    this.updateWheelXEvents();
    this.updateWheelYEvents();
};

// process methods

/**
 * Выполняет все
 *
 * @override
 * @method processAll
 */
DKTools.Sprite.prototype.processAll = function() {
    DKTools.Base.prototype.processAll.call(this);
    if (Utils.isMobileDevice()) {
        this.processTouch();
    } else {
        this.processEnter();
    }
};

/**
 *
 *
 * @method processEnter
 */
DKTools.Sprite.prototype.processEnter = function() {
    if (this.isVisibleAndActive()) {
        this.updateEnter();
    } else {
        this._clearEntered();
        this._clearEnteredTime();
    }
};

/**
 * Обрабатывает обновление нахождения мыши в спрайте и нажатия на спрайт
 *
 * @method processTouch
 */
DKTools.Sprite.prototype.processTouch = function() {
    if (this.isVisibleAndActive() || this.isSymbolsEnabled('deactivatedTouch')) {
        this.updateTouch();
    } else {
        this._clearClicked();
        this._clearPressedTime();
        this._clearTouched();
    }
};

// _update methods

DKTools.Sprite.prototype._updateMoveOpacity = function(newOpacity, event) {
    var duration = event.duration;
    var opacity = (this.opacity * (duration - 1) + newOpacity) / duration;
    this.setupOpacity(opacity);
};

DKTools.Sprite.prototype._updateMoveFrame = function(newX, newY, newWidth, newHeight, event) {
    var duration = event.duration;
    var x = (this.frame.x * (duration - 1) + newX) / duration;
    var y = (this.frame.y * (duration - 1) + newY) / duration;
    var width = (this.frame.width * (duration - 1) + newWidth) / duration;
    var height = (this.frame.height * (duration - 1) + newHeight) / duration;
    this.setFrame(x, y, width, height);
};

DKTools.Sprite.prototype._updateTouched = function() {
    this.updateFrame();
    this.updateOpacity();
    this.updateScale();
};

// update methods

/**
 * Обновляет все
 *
 * @override
 * @method updateAll
 */
DKTools.Sprite.prototype.updateAll = function() {
    DKTools.Base.prototype.updateAll.call(this);
    this.updateBitmap();
};

/**
 * Обновляет Bitmap спрайта
 *
 * @method updateBitmap
 */
DKTools.Sprite.prototype.updateBitmap = function() {
    this.updateFont();
    this.updateTextColor();
    this.updatePaintOpacity();
};

/**
 * Обновляет спрайт
 *
 * @override
 * @method update
 */
DKTools.Sprite.prototype.update = function() {
    Sprite.prototype.update.call(this);
    DKTools.Base.prototype.update.call(this);
};

/**
 * Обновляет нахождение мыши в спрайте
 *
 * @method updateEnter
 */
DKTools.Sprite.prototype.updateEnter = function() {
    if (this.isEntered()) {
        this._enteredTime++;
        this.updateWheelEvents();
        if (!this._entered) {
            this._entered = true;
            this.updateMouseEnterEvents();
        } else {
            this.updateMouseStayEvents();
            this.processTouch();
        }
    } else {
        if (this._entered) {
            this._entered = false;
            this.updateMouseLeaveEvents();
        }
    }
};

/**
 * Обновляет нажатие на спрайт
 *
 * @method updateTouch
 */
DKTools.Sprite.prototype.updateTouch = function() {
    if (TouchInput.isPressed() && this.isTouched()) {
        if (TouchInput.isTriggered()) {
            this._clicked = true;
            this.touched = true;
        }
        if (this.isClicked()) {
            this._pressedTime++;
            if (this.isLongPressed()) {
                this.updateLongPressEvents();
            }
        }
    } else {
        if (this.isClicked() && !this.isLongPressed() && TouchInput.isReleased()) {
            this.updateClickEvents();
        }
        this._clearClicked();
        this._clearPressedTime();
        this._clearTouched();
    }
};

/**
 * Обновляет рамку спрайта
 *
 * @method updateFrame
 */
DKTools.Sprite.prototype.updateFrame = function() {
    var frame = (this.isPressed() ? this._hotFrame : this._coldFrame);
    if (frame) {
        this.setupFrame(frame);
    }
};

/**
 * Обновляет масштабирование спрайта
 *
 * @method updateScale
 */
DKTools.Sprite.prototype.updateScale = function() {
    var scale = (this.isPressed() ? this._hotScale : this._coldScale);
    if (scale) {
        this.setupScale(scale);
    }
};

/**
 * Обновляет прозрачность спрайта
 *
 * @method updateOpacity
 */
DKTools.Sprite.prototype.updateOpacity = function() {
    var opacity = (this.isPressed() ? this._hotOpacity : this._coldOpacity);
    if (opacity != null) {
        this.setupOpacity(opacity);
    }
};





//===========================================================================
// Elements based on DKTools.Sprite
// Элементы, основанные на DKTools.Sprite
//===========================================================================





//===========================================================================
// DKTools Viewport
//===========================================================================

DKTools.Viewport.prototype = Object.create(DKTools.Sprite.prototype);
DKTools.Viewport.prototype.constructor = DKTools.Viewport;

// standard methods

DKTools.Viewport.prototype.standardShape = function() {
    return 'rect';
};

// setup methods

DKTools.Viewport.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.Sprite.prototype.setupAll.call(this, object);
    this.setupShape(object.shape);
};

DKTools.Viewport.prototype.setupShape = function(shape) {
    this._shape = shape || this.standardShape();
};

// start methods

DKTools.Viewport.prototype.start = function() {
    DKTools.Sprite.prototype.start.call(this);
    this.createMask();
};

// create methods

DKTools.Viewport.prototype.createMask = function() {
    var mask;
    switch (this._shape) {
        case 'rect':
            mask = this.createRectMask();
            break;
        case 'circle':
            mask = this.createCircleMask();
            break;
        case 'ellipse':
            mask = this.createEllipseMask();
            break;
        default:
            mask = this.createCustomMask(this._shape);
            break;
    }
    this.mask = mask;
    this._viepowrtMask = mask;
};

DKTools.Viewport.prototype.createRectMask = function() {
    var mask = new PIXI.Graphics();
    mask.beginFill(0xEF7F7F);
    mask.lineStyle(5, 0xEF7F7F);
    mask.drawRect(this.x, this.y, this.bitmap.width, this.bitmap.height);
    mask.endFill();
    return mask;
};

DKTools.Viewport.prototype.createCircleMask = function() {
    var mask = new PIXI.Graphics();

    mask.beginFill(0xEF7F7F);
    mask.lineStyle(5, 0xEF7F7F);

    var radius = this.bitmap.width / 2;
    var centerX = this.x + radius;
    var centerY = this.y + radius;

    mask.drawCircle(centerX, centerY, radius);
    mask.endFill();
    return mask;
};

DKTools.Viewport.prototype.createEllipseMask = function() {
    var mask = new PIXI.Graphics();
    mask.beginFill(0xEF7F7F);
    mask.lineStyle(5, 0xEF7F7F);

    var width = this.bitmap.width / 2;
    var height = this.bitmap.height / 2;
    var centerX = this.x + width;
    var centerY = this.y + height;

    mask.drawEllipse(centerX, centerY, width, height);
    mask.endFill();
    return mask;
};

DKTools.Viewport.prototype.createCustomMask = function(shape) {
    return null;
};

//

DKTools.Viewport.prototype.showMask = function() {
    this.mask = this._viewportMask;
};

DKTools.Viewport.prototype.hideMask = function() {
    this.mask = null;
};





//===========================================================================
// DKTools ContainerBase
//===========================================================================

DKTools.ContainerBase.prototype = Object.create(DKTools.Sprite.prototype);
DKTools.ContainerBase.prototype.constructor = DKTools.ContainerBase;

// properties

/**
 * Количество элементов
 *
 * @readonly
 * @type {Number}
 */
Object.defineProperty(DKTools.ContainerBase.prototype, 'length', {
	get: function() {
		return this.elements().length;
	},
	configurable: true
});

// initialize methods

/**
 * Инициализирует объект класса
 *
 * @override
 * @constructor
 *
 * @param {Number | Object} [object] - Координата X или Объект типа {}
 * @param {Number} [y] - Координата Y
 *
 * @see object properties: DKTools.Sprite.prototype.initialize
 */
DKTools.ContainerBase.prototype.initialize = function(object, y) {
    DKTools.Sprite.prototype.initialize.call(this, object, y);
};

// _clear methods

/**
 * Очищает все данные спрайта
 *
 * @private
 * @override
 * @method _clearAll
 */
DKTools.ContainerBase.prototype._clearAll = function() {
    DKTools.Sprite.prototype._clearAll.call(this);
    this._clearElements();
};

/**
 * Очищает список элементов контейнера
 *
 * @private
 * @method _clearElements
 */
DKTools.ContainerBase.prototype._clearElements = function() {
    this._elements = [];
};

// clear methods

/**
 * Очищает список элементов контейнера
 *
 * @method clearElements
 */
DKTools.ContainerBase.prototype.clearElements = function() {
    return this.setElements();
};

// standard methods

/**
 * Возвращает стандартное значение активности
 *
 * @override
 * @method standardActive
 * @return {Boolean} Стандартное значение активности
 */
DKTools.ContainerBase.prototype.standardActive = function() {
    return false;
};

/**
 * Возвращает стандартный список элементов контейнера
 *
 * @method standardElements
 * @return {Array} Стандартный список элементов контейнера
*/
DKTools.ContainerBase.prototype.standardElements = function() {
	return [];
};

/**
 * Возвращает стандартное расположение элементов
 *
 * @method standardPlacement
 * @return {String} Стандартное расположение элементов
*/
DKTools.ContainerBase.prototype.standardPlacement = function() {
	return 'horizontal';
};

/**
 * Возвращает стандартное количество рядов
 *
 * @method standardRows
 * @return {Number} Стандартное количество рядов
 */
DKTools.ContainerBase.prototype.standardRows = function() {
    return 0;
};

/**
 * Возвращает стандартное количество столбцов
 *
 * @method standardCols
 * @return {Number} Стандартное количество столбцов
 */
DKTools.ContainerBase.prototype.standardCols = function() {
    return 0;
};

/**
 * Возвращает стандартное значение отступа по оси X
 *
 * @method standardXPadding
 * @return {Number} Стандартное значение отступа по оси X
 */
DKTools.ContainerBase.prototype.standardXPadding = function() {
    return 18;
};

/**
 * Возвращает стандартное значение отступа по оси Y
 *
 * @method standardYPadding
 * @return {Number} Стандартное значение отступа по оси Y
 */
DKTools.ContainerBase.prototype.standardYPadding = function() {
    return 18;
};

/**
 * Возвращает стандартное обратное расположение элементов
 *
 * @method standardReversed
 * @return {Boolean} Стандартное обратное расположение элементов
 */
DKTools.ContainerBase.prototype.standardReversed = function() {
    return false;
};

// setup methods

/**
 * Устанавливает все параметры спрайта
 *
 * @override
 * @method setupAll
 *
 * @param {Object} [object] - Объект типа {}
 *
 * @param {Array} [object.elements] - Массив с элементами
 * @param {String} [object.placement] - Расположение элементов
 * @param {Number} [object.rows] - Количество рядов
 * @param {Number} [object.cols] - Количество столбцов
 * @param {Number} [object.xPadding] - Отступ между элементами контейнера по оси X
 * @param {Number} [object.yPadding] - Отступ между элементами контейнера по оси Y
 * @param {Boolean} [object.reversed] - Обратное расположение элементов
 *
 * @see object properties: DKTools.Sprite.prototype.setupAll
*/
DKTools.ContainerBase.prototype.setupAll = function(object) {
	object = object || {};
	DKTools.Sprite.prototype.setupAll.call(this, object);
	this.setupElements(object.elements);
	this.setupPlacement(object.placement);
    this.setupRows(object.rows);
    this.setupCols(object.cols);
    this.setupPadding(object.xPadding, object.yPadding);
    this.setupReversed(object.reversed);
};

/**
 * Устанавливает элементы контейнера
 *
 * @method setupElements
 * @param {Array} elements - Массив с элементами контейнера
*/
DKTools.ContainerBase.prototype.setupElements = function(elements) {
    if (elements instanceof Array) {
        this._elements = elements.clone();
    } else {
        this._elements = this.standardElements();
    }
};

/**
 * Добавляет элемент в контейнер, блокируя вызов функции start контейнера
 *
 * @method setupElement
 * @param {DKToolsSprite} element - Элемент контейнера
*/
DKTools.ContainerBase.prototype.setupElement = function(element) {
	this.addElement(element, true);
};

/**
 * Устанавливает расположение элементов
 *
 * @method setupPlacement
 * @param {String} [placement] - Расположение элементов
*/
DKTools.ContainerBase.prototype.setupPlacement = function(placement) {
	this._placement = placement || this.standardPlacement();
    this.setupRows();
    this.setupCols();
};

/**
 * Устанавливает количество столбцов
 *
 * @method setupRows
 * @param {Number} [rows] - Количество рядов
 */
DKTools.ContainerBase.prototype.setupRows = function(rows) {
    this._rows = (rows == null ? this.standardRows() : rows);
};

/**
 * Устанавливает количество столбцов
 *
 * @method setupCols
 * @param {Number} [cols] - Количество столбцов
 */
DKTools.ContainerBase.prototype.setupCols = function(cols) {
    this._cols = (cols == null ? this.standardCols() : cols);
};

/**
 * Устанавливает отступ между элементами контейнера по оси X
 *
 * @method setupXPadding
 * @param {Number} [padding] - Отступ между элементами контейнера по оси X
 */
DKTools.ContainerBase.prototype.setupXPadding = function(padding) {
    this._xPadding = (padding == null ? this.standardXPadding() : padding);
};

/**
 * Устанавливает отступ между элементами контейнера по оси Y
 *
 * @method setupYPadding
 * @param {Number} [padding] - Отступ между элементами контейнера по оси Y
 */
DKTools.ContainerBase.prototype.setupYPadding = function(padding) {
    this._yPadding = (padding == null ? this.standardYPadding() : padding);
};

/**
 * Устанавливает отступ между элементами контейнера по оси X и Y
 *
 * @method setupPadding
 * @param {Number} [xPadding] - Отступ между элементами контейнера по оси X
 * @param {Number} [yPadding] - Отступ между элементами контейнера по оси Y
 */
DKTools.ContainerBase.prototype.setupPadding = function(xPadding, yPadding) {
    this.setupXPadding(xPadding);
    this.setupYPadding(yPadding);
};

/**
 *
 *
 * @method setupReversed
 * @param {Boolean} [reversed] -
 */
DKTools.ContainerBase.prototype.setupReversed = function(reversed) {
    this._reversed = (reversed == null ? this.standardReversed() : reversed);
};

// set methods

/**
 * Изменяет все параметры спрайта
 * Возвращает количество измененных параметров
 *
 * @override
 * @method setAll
 *
 * @param {Object} [object] - Объект типа {}
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @param {Array} [object.elements] - Массив с элементами
 * @param {String} [object.placement] - Расположение элементов
 * @param {Number} [object.rows] - Количество рядов
 * @param {Number} [object.cols] - Количество столбцов
 * @param {Number} [object.xPadding] - Отступ между элементами контейнера по оси X
 * @param {Number} [object.yPadding] - Отступ между элементами контейнера по оси Y
 * @param {Boolean} [object.reversed] -
 *
 * @see object properties: DKTools.Sprite.prototype.setupAll
 *
 * @return {Number} Количество измененных параметров
*/
DKTools.ContainerBase.prototype.setAll = function(object, blockStart) {
	object = object || {};
	var block = true;
	var changed = DKTools.Sprite.prototype.setAll.call(this, object, block);
	if (this.setElements(object.elements, block)) {
        changed++;
    }
	if (this.setPlacement(object.placement, block)) {
        changed++;
    }
    if (this.setRows(object.rows, block)) {
        changed++;
    }
    if (this.setCols(object.cols, block)) {
        changed++;
    }
    changed += this.setPadding(object.xPadding, object.yPadding, block);
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
 * @method setElements
 *
 * @param {Array} [elements] - Массив элементов контейнера
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
*/
DKTools.ContainerBase.prototype.setElements = function(elements, blockStart) {
	if (this._elements == elements) {
        return false;
    }
	this.removeElementsFromChild();
	this.setupElements(elements);
	if (!blockStart) {
        this.start();
    }
	return true;
};

/**
 * Изменяет расположение элементов
 * Возвращает true, если изменение произошло
 *
 * @method setPlacement
 *
 * @param {String} [placement] - Расположение элементов
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
*/
DKTools.ContainerBase.prototype.setPlacement = function(placement, blockStart) {
	if (this._placement === placement) {
        return false;
    }
	var lastPlacement = this._placement;
	this.setupPlacement(placement);
	if (lastPlacement === this._placement) {
        return false;
    }
	if (!blockStart) {
        this.start();
    }
	return true;
};

/**
 * Изменяет количество рядов
 * Возвращает true, если изменение произошло
 *
 * @method setRows
 *
 * @param {Number} [rows] - Количество рядов
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.ContainerBase.prototype.setRows = function(rows, blockStart) {
    if (this._rows === rows) {
        return false;
    }
    var lastRows = this._rows;
    this.setupRows(rows);
    if (lastRows === this._rows) {
        return false;
    }
    if (!blockStart) {
        this.start();
    }
    return true;
};

/**
 * Изменяет количество столбцов
 * Возвращает true, если изменение произошло
 *
 * @method setCols
 *
 * @param {Number} [cols] - Количество столбцов
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.ContainerBase.prototype.setCols = function(cols, blockStart) {
    if (this._cols === cols) {
        return false;
    }
    var lastCols = this._cols;
    this.setupCols(cols);
    if (lastCols === this._cols) {
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
 * @method setXPadding
 *
 * @param {Number} [padding] - Отступ между элементами контейнера по оси X
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.ContainerBase.prototype.setXPadding = function(padding, blockStart) {
    if (this._xPadding === padding) {
        return false;
    }
    var lastPadding = this._xPadding;
    this.setupXPadding(padding);
    if (lastPadding === this._xPadding) {
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
 * @method setYPadding
 *
 * @param {Number} [padding] - Отступ между элементами контейнера по оси Y
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.ContainerBase.prototype.setYPadding = function(padding, blockStart) {
    if (this._yPadding === padding) {
        return false;
    }
    var lastPadding = this._yPadding;
    this.setupYPadding(padding);
    if (lastPadding === this._yPadding) {
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
 * @method setPadding
 *
 * @param {Number} [xPadding] - Отступ между элементами контейнера по оси X
 * @param {Number} [yPadding] - Отступ между элементами контейнера по оси Y
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Number} Количество измененных параметров
 */
DKTools.ContainerBase.prototype.setPadding = function(xPadding, yPadding, blockStart) {
    var changed = 0;
    var block = true;
    if (this.setXPadding(xPadding, block)) {
        changed++;
    }
    if (this.setYPadding(yPadding, block)) {
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
 * @method setReversed
 *
 * @param {Boolean} [reversed] -
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.ContainerBase.prototype.setReversed = function(reversed, blockStart) {
    if (this._reversed === reversed) {
        return false;
    }
    var lastReversed = this._reversed;
    this.setupReversed(reversed);
    if (lastReversed === this._reversed) {
        return false;
    }
    if (!blockStart) {
        this.start();
    }
    return true;
};

// other methods

/**
 * Запускает работу спрайта
 *
 * @override
 * @method start
*/
DKTools.ContainerBase.prototype.start = function() {
	DKTools.Sprite.prototype.start.call(this);
    this.addElementsToChild();
    if (!this.isReady()) {
        this.addEventListener('ready', function() {
            this.startElements();
        }.bind(this));
    }
};

// check methods

/**
 * Проверяет все
 *
 * @override
 * @method checkAll
 */
DKTools.ContainerBase.prototype.checkAll = function() {
    this.checkRowsAndCols();
    DKTools.Sprite.prototype.checkAll.call(this);
};

/**
 * Проверяет количество рядов и столбцов
 * Если количество рядов и столбцов равно 0, то устанавливает
 * ряды и столбцы, исходя из расположения элементов
 *
 * Если количество рядов задано, а столбцов нет, то вычисляет
 * количество столбцов
 *
 * Если количество столбцов задано, а рядов нет, то вычисляет
 * количество рядов
 *
 * Возвращает true, если количество рядов или столбцов было равно 0
 *
 * @method checkRowsAndCols
 * @return {Boolean} Количество рядов или столбцов было равно 0
 */
DKTools.ContainerBase.prototype.checkRowsAndCols = function() {
    var rows, cols;
    var maxRows = this.maxRows();
    var maxCols = this.maxCols();
    var minElements = this._minElements();
    if (maxRows !== 0 && maxCols !== 0) {
        return false;
    }
    if (maxRows === 0 && maxCols === 0) {
        if (this.isHorizontalPlacement()) {
            rows = 1;
            cols = minElements;
        } else if (this.isVerticalPlacement()) {
            rows = minElements;
            cols = 1;
        }
    } else {
        if (maxRows !== 0) {
            rows = maxRows;
            cols = Math.max(Math.ceil(minElements / maxRows), 1);
        } else {
            rows = Math.max(Math.ceil(minElements / maxCols), 1);
            cols = maxCols;
        }
    }
    this.setupRows(rows);
    this.setupCols(cols);
    return true;
};

// clone methods

/**
 * Клонирует элементы контейнера
 * Возвращает массив с клонированными элементами контейнера
 *
 * @private
 * @method _cloneElements
 * @param {Number} [startPosition] - Стартовая позиция клонирования
 * @return {Array} Массив с клонированными элементами контейнера
 */
DKTools.ContainerBase.prototype._cloneElements = function(startPosition) {
    startPosition = startPosition || 0;
    var array = [];
    for(var i = startPosition; i < this.length; i++) {
        var element = this.element(i);
        array.push(element.clone());
    }
    return array;
};

/**
 * Возвращает объект со всеми параметрами
 *
 * @override
 * @method object
 * @return {Object} Объект со всеми параметрами
 */
DKTools.ContainerBase.prototype.object = function() {
    var object = DKTools.Sprite.prototype.object.call(this);
    object.elements = this._cloneElements();
    object.placement = this._placement;
    object.rows = this._rows;
    object.cols = this._cols;
    object.xPadding = this._xPadding;
    object.yPadding = this._yPadding;
    object.reversed = this._reversed;
    return object;
};

// size methods

/**
 * Возвращает минимальную ширину Bitmap
 *
 * @override
 * @method minWidth
 * @return {Number} Минимальная ширина Bitmap
 */
DKTools.ContainerBase.prototype.minWidth = function() {
    if (this.isEmpty() || !this.maxCols()) {
        return 1;
    }
    var width = 0;
    var maxCols = this.maxCols() + 1;
    for(var i = 1; i < maxCols; i++) {
        width += this.colWidth(i) + this._xPadding;
    }
    return width - this._xPadding;
};

/**
 * Возвращает минимальную высоту Bitmap
 *
 * @override
 * @method minHeight
 * @return {Number} Минимальная высота Bitmap
 */
DKTools.ContainerBase.prototype.minHeight = function() {
    if (this.isEmpty() || !this.maxRows()) {
        return 1;
    }
    var height = 0;
    var maxRows = this.maxRows() + 1;
    for(var i = 1; i < maxRows; i++) {
        height += this.rowHeight(i) + this._yPadding;
    }
    return height - this._yPadding;
};

// uncategorized methods

/**
 * Возвращает максимальное количество рядов
 *
 * @method maxRows
 * @return {Number} Максимальное количество рядов
 */
DKTools.ContainerBase.prototype.maxRows = function() {
    return this._rows;
};

/**
 * Возвращает максимальное количество столбцов
 *
 * @method maxCols
 * @return {Number} Максимальное количество столбцов
 */
DKTools.ContainerBase.prototype.maxCols = function() {
    return this._cols;
};

/**
 * Возвращает минимальное количество элементов
 * Используется для проверки рядов и столбцов
 *
 * @private
 * @method _minElements
 * @return {Number} Минимальное количество элементов
 */
DKTools.ContainerBase.prototype._minElements = function() {
    return this.length;
};

/**
 * Меняет порядок расположения элементов на обратный
 *
 * @method reverse
 */
DKTools.ContainerBase.prototype.reverse = function() {
    this.setReversed(!this.isReversed());
};

// is methods

/**
 * Возвращает true, если спрайт является контейнером
 *
 * @override
 * @method isContainer
 * @return {Boolean} Спрайт является контейнером
 */
DKTools.ContainerBase.prototype.isContainer = function() {
    return true;
};

/**
 * Возвращает true, если элементы располагаются вертикально
 *
 * @method isVerticalPlacement
 * @return {Boolean} Элементы располагаются вертикально
 */
DKTools.ContainerBase.prototype.isVerticalPlacement = function() {
    return this._placement === 'vertical';
};

/**
 * Возвращает true, если элементы располагаются горизонтально
 *
 * @method isHorizontalPlacement
 * @return {Boolean} Элементы располагаются горизонтально
 */
DKTools.ContainerBase.prototype.isHorizontalPlacement = function() {
    return this._placement === 'horizontal';
};

/**
 * Возвращает true, если контейнер не содержит элементов
 *
 * @method isEmpty
 * @return {Boolean} Контейнер не содержит элементов
 */
DKTools.ContainerBase.prototype.isEmpty = function() {
    return this.length === 0;
};

/**
 * Возвращает true, если спрайт готов
 *
 * @override
 * @method isReady
 * @return {Boolean} Спрайт готов
*/
DKTools.ContainerBase.prototype.isReady = function() {
	for(var i = 0; i < this.length; i++) {
        if (!this.element(i).isReady()) {
            return false;
        }
    }
	return true;
};

/**
 *
 *
 * @method isReversed
 * @return {Boolean}
 */
DKTools.ContainerBase.prototype.isReversed = function() {
    return this._reversed;
};

// elements methods

/**
 * Возвращает все элементы контейнера
 *
 * @method elements
 * @return {Array} Все элементы контейнера
*/
DKTools.ContainerBase.prototype.elements = function() {
    var elements = this._elements;
    if (this.isReversed()) {
        elements = elements.clone().reverse();
    }
    return elements;
};

/**
 * Выполняет callback функцию для каждого элемента
 *
 * @method iterateElements
 * @param {Function} callback - Функция обработки для каждого элемента контейнера
 * @param {Boolean} [start] - Вызов функции start контейнера
 */
DKTools.ContainerBase.prototype.iterateElements = function(callback, start) {
    var elements = this.elements();
    elements.forEach(callback);
    if (start) {
        this.start();
    }
};

/**
 * Удаляет элементы контейнера из обработки
 *
 * @method removeElementsFromChild
*/
DKTools.ContainerBase.prototype.removeElementsFromChild = function() {
	var callback = function(element) {
		this.removeChild(element);
	}.bind(this);
	this.iterateElements(callback);
};

/**
 * Добавляет элементы контейнера в обработку
 *
 * @method addElementsToChild
*/
DKTools.ContainerBase.prototype.addElementsToChild = function() {
	this.removeElementsFromChild();
	var callback = function(element) {
		this.addChild(element);
	}.bind(this);
	this.iterateElements(callback);
};

/**
 * Добавляет элемент в контейнер
 * Возвращает true, если изменение произошло
 *
 * @method addElement
 *
 * @param {DKToolsSprite | Array} object - Элемент или массив элементов
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
*/
DKTools.ContainerBase.prototype.addElement = function(object, blockStart) {
	if (!object) {
        return false;
    }
	if (object instanceof Array) {
		for(var i = 0; i < object.length; i++) {
            var element = object[i];
            this._elements.push(element);
        }
	} else {
        this._elements.push(object);
    }
	if (!blockStart) {
        this.start();
    }
    return true;
};

/**
 * Возвращает индекс элемента в контейнере
 *
 * @method elementIndex
 * @param {DKToolsSprite} element
 * @return {Number} Индекс элемента в контейнере
 */
DKTools.ContainerBase.prototype.elementIndex = function(element) {
    return this.elements().indexOf(element);
};

/**
 * Возвращает true, если элемент содержится в контейнере
 *
 * @method hasElement
 * @param {DKToolsSprite} element - Элемент
 * @return {Boolean} Элемент содержится в контейнере
 */
DKTools.ContainerBase.prototype.hasElement = function(element) {
    return this.elementIndex(element) >= 0;
};

/**
 * Удаляет элемент из контейнера
 * Возвращает true, если элемент был удален
 *
 * @method removeElement
 *
 * @param {DKToolsSprite | Number} object - Элемент или номер элемента
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Элемент был удален
*/
DKTools.ContainerBase.prototype.removeElement = function(object, blockStart) {
    if (object == null) {
        return false;
    }
    var removed = false;
    if (object.constructor === Number) {
        return this.removeElement(this.element(object), blockStart);
    } else {
        var elements = this.elements();
        var index = this.elementIndex(object);
        if (index >= 0) {
            elements.splice(index, 1);
            removed = true;
        }
    }
    if (removed && !blockStart) {
        this.start();
    }
    return removed;
}; // добавить поддержку массива в object

/**
 * Вызывает функцию start у всех элементов контейнера
 *
 * @method startElements
 * @param {Boolean} [blockStart] - Блокировка вызова функции start контейнера
*/
DKTools.ContainerBase.prototype.startElements = function(blockStart) {
	var callback = function(element) {
        element.start();
    };
	this.iterateElements(callback);
	if (!blockStart) {
        this.start();
    }
};

/**
 * Вызывает функцию resize у всех элементов контейнера
 *
 * @method resizeElements
 *
 * @param {Number} [width] - Высота Bitmap
 * @param {Number} [height] - Ширина Bitmap
 * @param {Boolean} [blockStart] - Блокировка вызова функции start контейнера
*/
DKTools.ContainerBase.prototype.resizeElements = function(width, height, blockStart) {
	var callback = function(element) {
		element.resize(width, height);
    }.bind(this);
	this.iterateElements(callback);
	if (!blockStart) {
        this.start();
    }
};

/**
 * Вызывает функцию activate у всех элементов контейнера
 *
 * @method activateElements
 * @param {Boolean} [start] - Вызов функции start контейнера
*/
DKTools.ContainerBase.prototype.activateElements = function(start) {
    var callback = function(element) {
        element.activate();
    };
    this.iterateElements(callback);
    if (start) {
        this.start();
    }
};

/**
 * Вызывает функцию deactivate у всех элементов контейнера
 *
 * @method deactivateElements
 * @param {Boolean} [start] - Вызов функции start контейнера
*/
DKTools.ContainerBase.prototype.deactivateElements = function(start) {
    var callback = function(element) {
        element.deactivate();
    };
    this.iterateElements(callback);
    if (start) {
        this.start();
    }
};

/**
 * Вызывает функцию show у всех элементов контейнера
 *
 * @method showElements
 *
 * @param {Number} [duration] - Длительность появления
 * @param {Boolean} [activate] - Активировать элементы
 * @param {Boolean} [start] - Вызов функции start контейнера
 */
DKTools.ContainerBase.prototype.showElements = function(duration, activate, start) {
    var callback = function(element) {
        element.show(duration, activate);
    }.bind(this);
    this.iterateElements(callback);
    if (start) {
        this.start();
    }
};

/**
 * Вызывает функцию show у всех элементов контейнера
 *
 * @method hideElements
 *
 * @param {Number} [duration] - Длительность исчезновения
 * @param {Boolean} [blockDeactivate] - Блокировать деактивацию элементов
 * @param {Boolean} [start] - Вызов функции start контейнера
 */
DKTools.ContainerBase.prototype.hideElements = function(duration, blockDeactivate, start) {
    var callback = function(element) {
        element.hide(duration, blockDeactivate);
    }.bind(this);
    this.iterateElements(callback);
    if (start) {
        this.start();
    }
};

/**
 * Возвращает элемент по его номеру
 *
 * @method element
 * @param {Number} id - Номер элемента
 * @return {DKToolsSprite | null}
*/
DKTools.ContainerBase.prototype.element = function(id) {
    return this.elements()[id];
};

/**
 * Возвращает массив с элементами ряда
 *
 * @method row
 * @param {Number} row - Номер ряда
 * @return {Array} Массив с элементами ряда
 */
DKTools.ContainerBase.prototype.row = function(row) {
    var elements = [];
    var maxRows = this.maxRows();
    var maxCols = this.maxCols();
    if (row < 1 || row > maxRows) {
        return elements;
    }
    var startIndex = maxCols * (row - 1);
    for(var i = 0; i < maxCols; i++) {
        var element = this.element(startIndex + i);
        elements.push(element);
    }
    return elements;
};

/**
 * Возвращает массив с элементами столбца
 *
 * @method col
 * @param {Number} col - Номер столбца
 * @return {Array} Массив с элементами столбца
 */
DKTools.ContainerBase.prototype.col = function(col) {
    var elements = [];
    var maxRows = this.maxRows();
    var maxCols = this.maxCols();
    if (col < 1 || col > maxCols) {
        return elements;
    }
    var startIndex = col - 1;
    for(var i = 0; i < maxRows; i++) {
        var element = this.element(startIndex + maxCols * i);
        elements.push(element);
    }
    return elements;
};

/**
 * Возвращает высоту ряда (максимальную высоту элементов ряда)
 *
 * @method rowHeight
 * @param {Number} row - Номер ряда
 * @return {Number} Высота ряда
 */
DKTools.ContainerBase.prototype.rowHeight = function(row) {
    if (this.isFixedSize()) {
        return this.elementFixedHeight();
    }
    var elements = this.row(row);
    var array = [];
    for(var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element) {
            array.push(element.height);
        }
    }
    return array.max();
};

/**
 * Возвращает ширину столбца (максимальную ширину элементов столбца)
 *
 * @method colWidth
 * @param {Number} col - Номер столбца
 * @return {Number} Ширина столбца
 */
DKTools.ContainerBase.prototype.colWidth = function(col) {
    if (this.isFixedSize()) {
        return this.elementFixedWidth();
    }
    var elements = this.col(col);
    var array = [];
    for(var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element) {
            array.push(element.width);
        }
    }
    return array.max();
};

/**
 * Возвращает координату Y начала строки
 *
 * @method rowY
 * @param {Number} row - Номер строки
 * @return {Number} Координату Y начала строки
 */
DKTools.ContainerBase.prototype.rowY = function(row) {
    var y = 0;
    for(var i = 1; i < row; i++) {
        y += this.rowHeight(i) + this._yPadding;
    }
    return y;
};

/**
 * Возвращает координату X начала столбца
 *
 * @method colX
 * @param {Number} col - Номер столбца
 * @return {Number} Координату X начала столбца
 */
DKTools.ContainerBase.prototype.colX = function(col) {
    var x = 0;
    for(var i = 1; i < col; i++) {
        x += this.colWidth(i) + this._xPadding;
    }
    return x;
};

/**
 * Возвращает номер строки элемента контейнера
 *
 * @method elementRow
 * @param {DKToolsSprite} element - Элемент контейнера
 * @return {Number} Номер строки элемента контейнера
 */
DKTools.ContainerBase.prototype.elementRow = function(element) {
    var index = this.elementIndex(element);
    var maxCols = this.maxCols();
    return Math.floor(index / maxCols) + 1;
};

/**
 * Возвращает номер столбца элемента контейнера
 *
 * @method elementCol
 * @param {DKToolsSprite} element - Элемент контейнера
 * @return {Number} Номер столбца элемента контейнера
 */
DKTools.ContainerBase.prototype.elementCol = function(element) {
    var index = this.elementIndex(element);
    return (index % this.maxCols()) + 1;
};

// align methods

/**
 * Выравнивает элемент по ширине и высоте
 * Возвращает true, если элемент есть
 *
 * @method alignElement
 * @param {DKToolsSprite | Number} object - Элемент или его номер
 * @return {Boolean} Элемент есть
 */
DKTools.ContainerBase.prototype.alignElement = function(object) {
    if (object == null) {
        return false;
    }
    if (object.constructor === Number) {
        var element = this.element(object);
        return this.alignElement(element);
    }
    var element = object;
    var elementRow = this.elementRow(element);
    var elementCol = this.elementCol(element);
    var rowHeight = this.rowHeight(elementRow);
    var colWidth = this.colWidth(elementCol);
    var x = this.colX(elementCol) + (colWidth - element.width) / 2;
    var y = this.rowY(elementRow) + (rowHeight - element.height) / 2;
    element.move(x, y);
    return true;
};

/**
 * Выравнивает все элементы строки по высоте
 *
 * @method alignRow
 * @param {Number} row - Номер строки
 */
DKTools.ContainerBase.prototype.alignRow = function(row) {
    var elements = this.row(row);
    elements.forEach(function(element) {
        this.alignElement(element);
    }.bind(this));
};

/**
 * Выравнивает все элементы столбца по ширине
 *
 * @method alignCol
 * @param {Number} col - Номер столбца
 */
DKTools.ContainerBase.prototype.alignCol = function(col) {
    var elements = this.col(col);
    elements.forEach(function(element) {
        this.alignElement(element);
    }.bind(this));
};

/**
 * Выравнивает все элементы контейнера по ширине и высоте
 *
 * @method alignElements
 */
DKTools.ContainerBase.prototype.alignElements = function() {
    var callback = function(element) {
        this.alignElement(element);
    }.bind(this);
    this.iterateElements(callback);
};

// update methods

/**
 * Обновляет все
 *
 * @override
 * @method updateAll
 */
DKTools.ContainerBase.prototype.updateAll = function() {
    DKTools.Sprite.prototype.updateAll.call(this);
    this.updatePlacement();
};

/**
 * Обновляет ID элементов контейнера
 *
 * @method updateElementsId
 */
DKTools.ContainerBase.prototype.updateElementsId = function() {
    var id = 0;
    var callback = function(element) {
        element.setupId(id++);
    }.bind(this);
    this.iterateElements(callback);
};

/**
 * Обновляет расположение элементов в контейнере
 *
 * @method updatePlacement
*/
DKTools.ContainerBase.prototype.updatePlacement = function() {
	if (this.isEmpty()) {
        return;
    }
    var id = 0;
    var maxRows = this.maxRows() + 1;
    var maxCols = this.maxCols() + 1;
    for(var i = 1; i < maxRows; i++) {
        for(var j = 1; j < maxCols; j++) {
            var element = this.element(id++);
            var x = this.colX(j);
            var y = this.rowY(i);
            element.move(x, y);
            if (this.length === id) {
                return;
            }
        }
    }
};





//===========================================================================
// DKTools TextContainer
//===========================================================================

DKTools.TextContainer.prototype = Object.create(DKTools.ContainerBase.prototype);
DKTools.TextContainer.prototype.constructor = DKTools.TextContainer;

// properties

Object.defineProperties(DKTools.TextContainer.prototype, {

    /**
     * Спрайт текста
     *
     * @readonly
     * @type {DKTools.Sprite}
     */
    textSprite: {
        get: function() {
            return this._textSprite;
        },
        configurable: true
    }
});

// _setup methods

/**
 * Устанавливает события
 *
 * @private
 * @override
 * @method _setupEvents
 */
DKTools.TextContainer.prototype._setupEvents = function() {
    DKTools.ContainerBase.prototype._setupEvents.call(this);
    this.addEventListener('start', function() {
        this._textSprite.start();
        this._textSprite.deactivate();
    }.bind(this));
};

// _create methods

/**
 * Создает необходимые объекты
 *
 * @private
 * @override
 * @method _createAll
 */
DKTools.TextContainer.prototype._createAll = function() {
    DKTools.ContainerBase.prototype._createAll.call(this);
    this._createTextSprite();
};

/**
 * Создает спрайт текста
 *
 * @private
 * @method _createTextSprite
 * @param {Object} [object] - Объект типа {}
 *
 * @see object properties: DKTools.Sprite.prototype.initialize
 */
DKTools.TextContainer.prototype._createTextSprite = function(object) {
    this._textSprite = new DKTools.Sprite(object);
};

// setup methods

/**
 * Устанавливает все параметры спрайта
 *
 * @override
 * @method setupAll
 *
 * @param {Object} [object] - Объект типа {}
 * @param {Object} [object.textSprite] - Объект типа {}
 *
 * @see object properties: DKTools.ContainerBase.prototype.setupAll
 * @see textSprite properties: DKTools.Sprite.prototype.setupAll
*/
DKTools.TextContainer.prototype.setupAll = function(object) {
	object = object || {};
	DKTools.ContainerBase.prototype.setupAll.call(this, object);
    this.setupTextSprite(object.textSprite);
};

/**
 * Устанавливает все параметры и размер для Bitmap спрайта текста
 *
 * @method setupTextSprite
 *
 * @param {Object} [object] - Объект типа {}
 *
 * @param {Number} [object.width] - Ширина Bitmap спрайта текста
 * @param {Number} [object.height] - Высота Bitmap спрайта текста
 *
 * @see object properties: DKTools.Sprite.prototype.setupAll
*/
DKTools.TextContainer.prototype.setupTextSprite = function(object) {
    object = object || {};
    this._textSprite.setupAll(object);
    this.setupTextSpriteSize(object.width, object.height);
};

/**
 * Устанавливает ширину для Bitmap спрайта текста
 *
 * @method setupTextSpriteWidth
 * @param {Number} [width] - Ширина Bitmap спрайта текста
 */
DKTools.TextContainer.prototype.setupTextSpriteWidth = function(width) {
    this._textSprite.setupWidth(width);
};

/**
 * Устанавливает высоту для Bitmap спрайта текста
 *
 * @method setupTextSpriteHeight
 * @param {Number} [height] - Высота Bitmap спрайта текста
 */
DKTools.TextContainer.prototype.setupTextSpriteHeight = function(height) {
    this._textSprite.setupHeight(height);
};

/**
 * Устанавливает размер для Bitmap спрайта текста
 *
 * @method setupTextSpriteSize
 * @param {Number} [width] - Ширина Bitmap спрайта текста
 * @param {Number} [height] - Высота Bitmap спрайта текста
*/
DKTools.TextContainer.prototype.setupTextSpriteSize = function(width, height) {
    this._textSprite.setupSize(width, height);
};

/**
 * Устанавливает отображаемый текст для спрайта текста
 *
 * @override
 * @method setupText
 * @param {String} [text] - Отображаемый текст
*/
DKTools.TextContainer.prototype.setupText = function(text) {
    this._textSprite.setupText(text);
};

// set methods

/**
 * Изменяет все параметры спрайта
 * Возвращает количество измененных параметров
 *
 * @override
 * @method setAll
 *
 * @param {Object} [object] - Объект типа {}
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @param {Object} [object.textSprite] - Объект типа {}
 *
 * @see object properties: DKTools.ContainerBase.prototype.setAll
 * @see textSprite properties: DKTools.Sprite.prototype.setAll
 *
 * @return {Number} Количество измененных параметров
*/
DKTools.TextContainer.prototype.setAll = function(object, blockStart) {
	object = object || {};
	var block = true;
    var changed = DKTools.ContainerBase.prototype.setAll.call(this, object, block);
    changed += this.setTextSprite(object.textSprite, block);
	if (changed && !blockStart) {
        this.start();
    }
	return changed;
};

/**
 * Изменяет все параметры спрайта текста
 * Возвращает количество измененных параметров
 *
 * @method setTextSprite
 *
 * @param {Object} [object] - Объект типа {}
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @see object properties: DKTools.Sprite.prototype.setAll
 *
 * @return {Number} Количество измененных параметров
*/
DKTools.TextContainer.prototype.setTextSprite = function(object, blockStart) {
    return this._textSprite.setAll(object, blockStart);
};

/**
 * Изменяет размер для Bitmap спрайта текста
 * Возвращает true, если изменение произошло
 *
 * @method setTextSpriteSize
 *
 * @param {Number} [width] - Ширина Bitmap спрайта текста
 * @param {Number} [height] - Высота Bitmap спрайта текста
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
*/
DKTools.TextContainer.prototype.setTextSpriteSize = function(width, height, blockStart) {
    if (this._textSprite.resize(width, height)) {
        if (!blockStart) {
            this.start();
        }
        return true;
    }
    return false;
};

/**
 * Изменяет отображаемый текст для спрайта текста
 * Возвращает true, если изменение произошло
 *
 * @override
 * @method setText
 *
 * @param {String} [text] - Отображаемый текст
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
*/
DKTools.TextContainer.prototype.setText = function(text, blockStart) {
    if (this._textSprite.setText(text)) {
        if (!blockStart) {
            this.start();
        }
        return true;
    }
    return false;
};

// clone methods

/**
 * Возвращает объект со всеми параметрами
 *
 * @override
 * @method object
 * @return {Object} Объект со всеми параметрами
 */
DKTools.TextContainer.prototype.object = function() {
    var object = DKTools.ContainerBase.prototype.object.call(this);
    object.elements = this._cloneElements(1);
    object.textSprite = this._textSprite.object();
    return object;
};

// elements methods

/**
 * Возвращает все элементы контейнера
 *
 * @override
 * @method elements
 * @return {Array} Все элементы контейнера
 */
DKTools.TextContainer.prototype.elements = function() {
    var elements = [this._textSprite].concat(this._elements);
    if (this.isReversed()) {
        elements.reverse();
    }
    return elements;
};

// uncategorized methods

/**
 *
 *
 * @method resizeTextSprite
 * @param {Boolean} [align] - Выровнять текст спрайта текста по центру
 */
DKTools.TextContainer.prototype.resizeTextSprite = function(align) {
    if (this.maxRows() === 1 && this.isHorizontalPlacement()) {
        if (align) {
            this._textSprite.setupAlign('center');
        }
        this.addEventListener('ready', function () {
            this._textSprite.setHeight(this.rowHeight(1));
        }.bind(this));
    } else if (this.maxCols() === 1 && this.isVerticalPlacement()) {
        if (align) {
            this._textSprite.setupAlign('center');
        }
        this.addEventListener('ready', function () {
            this._textSprite.setWidth(this.colWidth(1));
        }.bind(this));
    }
};





//===========================================================================
// DKTools Container
//===========================================================================

DKTools.Container.prototype = Object.create(DKTools.TextContainer.prototype);
DKTools.Container.prototype.constructor = DKTools.Container;

// properties

Object.defineProperties(DKTools.Container.prototype, {

    /**
     * Базовый спрайт
     *
     * @readonly
     * @type {DKToolsSprite}
     */
    baseSprite: {
        get: function() {
            return this._baseSprite;
        },
        configurable: true
    }
});

// _setup methods

/**
 * Устанавливает события
 *
 * @private
 * @override
 * @method _setupEvents
 */
DKTools.Container.prototype._setupEvents = function() {
    DKTools.TextContainer.prototype._setupEvents.call(this);
    this.addEventListener('start', function() {
        this._baseSprite.start();
    }.bind(this));
};

// _create methods

/**
 * Создает необходимые объекты
 *
 * @private
 * @method _createAll
 */
DKTools.Container.prototype._createAll = function() {
    DKTools.TextContainer.prototype._createAll.call(this);
    this._createBaseSprite();
};

/**
 * Создает базовый спрайт
 *
 * @private
 * @method _createBaseSprite
 * @param {Object} [object] - Объект типа {}
 */
DKTools.Container.prototype._createBaseSprite = function(object) {
    this._baseSprite = new DKTools.Sprite(object);
};

// setup methods

/**
 * Устанавливает все параметры спрайта
 *
 * @override
 * @method setupAll
 *
 * @param {Object} [object] - Объект типа {}
 * @param {Object} [object.baseSprite] - Объект типа {}
 *
 * @see object properties: DKTools.TextContainer.prototype.setupAll
*/
DKTools.Container.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.TextContainer.prototype.setupAll.call(this, object);
    this.setupBaseSprite(object.baseSprite);
};

/**
 * Устанавливает все параметры и размер для Bitmap базового спрайта
 *
 * @method setupBaseSprite
 *
 * @param {Object} [object] - Объект типа {}
 *
 * @param {Number} [object.width] - Ширина Bitmap базового спрайта
 * @param {Number} [object.height] - Высота Bitmap базового спрайта
 *
 * @see object properties: DKTools.Sprite.prototype.setupAll
*/
DKTools.Container.prototype.setupBaseSprite = function(object) {
    object = object || {};
    this._baseSprite.setupAll(object);
    this.setupBaseSpriteSize(object.width, object.height);
};

/**
 * Устанавливает ширину для Bitmap базового спрайта
 *
 * @method setupBaseSpriteWidth
 * @param {Number} [width] - Ширина Bitmap базового спрайта
 */
DKTools.Container.prototype.setupBaseSpriteWidth = function(width) {
    this._baseSprite.setupWidth(width);
};

/**
 * Устанавливает высоту для Bitmap базового спрайта
 *
 * @method setupBaseSpriteHeight
 * @param {Number} [height] - Высота Bitmap базового спрайта
 */
DKTools.Container.prototype.setupBaseSpriteHeight = function(height) {
    this._baseSprite.setupHeight(height);
};

/**
 * Устанавливает размер для Bitmap базового спрайта
 *
 * @method setupBaseSpriteSize
 * @param {Number} [width] - Ширина Bitmap базового спрайта
 * @param {Number} [height] - Высота Bitmap базового спрайта
*/
DKTools.Container.prototype.setupBaseSpriteSize = function(width, height) {
    this._baseSprite.setupSize(width, height);
};

// set methods

/**
 * Изменяет все параметры спрайта
 * Возвращает количество измененных параметров
 *
 * @override
 * @method setAll
 *
 * @param {Object} [object] - Объект типа {}
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @param {Object} [object.baseSprite] - Объект типа {}
 *
 * @see object properties: DKTools.TextContainer.prototype.setAll
 *
 * @return {Number} Количество измененных параметров
*/
DKTools.Container.prototype.setAll = function(object, blockStart) {
    object = object || {};
    var block = true;
    var changed = DKTools.TextContainer.prototype.setAll.call(this, object, block);
    changed += this.setBaseSprite(object.baseSprite, block);
    if (changed && !blockStart) {
        this.start();
    }
    return changed;
};

/**
 * Изменяет все параметры базового спрайта
 * Возвращает количество измененных параметров
 *
 * @method setBaseSprite
 *
 * @param {Object} [object] - Объект типа {}
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Number} Количество измененных параметров
*/
DKTools.Container.prototype.setBaseSprite = function(object, blockStart) {
    return this._baseSprite.setAll(object, blockStart);
};

/**
 * Изменяет размер для Bitmap базового спрайта
 * Возвращает true, если изменение произошло
 *
 * @method setBaseSpriteSize
 *
 * @param {Number} [width] - Ширина Bitmap спрайта текста
 * @param {Number} [height] - Высота Bitmap спрайта текста
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
*/
DKTools.Container.prototype.setBaseSpriteSize = function(width, height, blockStart) {
    if (this._baseSprite.resize(width, height)) {
        if (!blockStart) {
            this.start();
        }
        return true;
    }
    return false;
}; // мб resizeBaseSprite ?

// elements methods

/**
 * Возвращает все элементы контейнера
 *
 * @override
 * @method elements
 * @return {Array} Все элементы контейнера
 */
DKTools.Container.prototype.elements = function() {
    var elements = [this._textSprite, this._baseSprite];
    if (this.isReversed()) {
        elements.reverse();
    }
    return elements;
};

// clone methods

/**
 * Клонирует элементы контейнера
 * Возвращает массив с клонированными элементами контейнера
 *
 * @private
 * @override
 * @method _cloneElements
 * @return {Array} Массив с клонированными элементами контейнера
 */
DKTools.Container.prototype._cloneElements = function() {
    return [];
};

/**
 * Возвращает объект со всеми параметрами
 *
 * @override
 * @method object
 * @return {Object} Объект со всеми параметрами
 */
DKTools.Container.prototype.object = function() {
    var object = DKTools.TextContainer.prototype.object.call(this);
    object.baseSprite = this._baseSprite.object();
    return object;
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
 * @type {Number}
 */
DKTools.Window._counter = 0;

// properties

Object.defineProperties(DKTools.Window.prototype, {

    /**
     * Спрайт контента
     *
     * @readonly
     * @type {DKTools.Sprite}
     */
    contentsSprite: {
        get: function() {
            return this._windowContentsSprite;
        },
        configurable: true
    },

    /**
     * Bitmap спрайта контента
     * Для поддержки функций из DKTools.Base
     *
     * @type {Bitmap}
     */
    bitmap: {
        get: function() {
            return this.contents;
        },
        set: function(value) {
           this.contents = value;
        },
        configurable: true
    },

    /**
     * Счетчик фреймов, который показывает сколько мышь нажата на спрайт
     *
     * @readonly
     * @type {Number}
     */
    pressedTime: {
        get: function() {
            return this.contentsSprite.pressedTime;
        },
        configurable: true
    },

    /**
     * Координата X нажатия мыши внутри спрайта
     *
     * @readonly
     * @type {Number}
     */
    clickX : {
        get: function() {
            return this.contentsSprite.clickX;
        },
        configurable: true
    },

    /**
     * Координата Y нажатия мыши внутри спрайта
     *
     * @readonly
     * @type {Number}
     */
    clickY : {
        get: function() {
            return this.contentsSprite.clickY;
        },
        configurable: true
    }

});

// initialize methods

/**
 * Инициализирует объект класса
 *
 * @override
 * @constructor
 *
 * @param {Number | Object} [object] - Координата X
 * @param {Number} [y] - Координата Y
 * @param {Number} [width] - Ширина окна
 * @param {Number} [height] - Высота окна
 *
 * @see object properties: DKTools.Base.prototype.initialize
 */
DKTools.Window.prototype.initialize = function(object, y, width, height) {
    PIXI.Container.call(this);
    DKTools.Base.prototype.initialize.call(this, object, y, width, height);
    this._createAllParts();
    this._createWindowskin();
    DKTools.Window._counter++;
};

// _clear methods

/**
 * Очищает все данные окна
 *
 * @private
 * @override
 * @method _clearAll
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
 * @method _clearIsWindow
 */
DKTools.Window.prototype._clearIsWindow = function() {
    this._isWindow = true;
};

/**
 * @private
 * @method _clearOpenness
 */
DKTools.Window.prototype._clearOpenness = function() {
    this._openness = 255;
};

/**
 * @private
 * @method _clearPadding
 */
DKTools.Window.prototype._clearPadding = function() {
    this._padding = this.standardPadding();
};

/**
 * @private
 * @method _clearMargin
 */
DKTools.Window.prototype._clearMargin = function() {
    this._margin = 4;
};

/**
 * @private
 * @method _clearColorTone
 */
DKTools.Window.prototype._clearColorTone = function() {
    this._colorTone = [0, 0, 0];
};

/**
 * @private
 * @method _clearOrigin
 */
DKTools.Window.prototype._clearOrigin = function() {
    this.origin = new Point();
};

// standard methods

/**
 * Возвращает стандартное значение коодинаты X для спрайта
 *
 * @method standardSpriteX
 * @return {Number} Стандартное значение коодинаты X для спрайта
*/
DKTools.Window.prototype.standardSpriteX = function() {
	return this.standardPadding();
};

/**
 * Возвращает стандартное значение коодинаты Y для спрайта
 *
 * @method standardSpriteY
 * @return {Number} Стандартное значение коодинаты Y для спрайта
*/
DKTools.Window.prototype.standardSpriteY = function() {
	return this.standardPadding();
};

/**
 * Возвращает стандартную позицию для спрайта
 *
 * @method standardSpritePosition
 * @return {Point} Стандартная позиция для спрайта
 */
DKTools.Window.prototype.standardSpritePosition = function() {
    return new Point(this.standardSpriteX(), this.standardSpriteY());
};

/**
 * Возвращает стандартную видимость заднего фона окна
 *
 * @method standardBackVisible
 * @return {Boolean} Стандартная видимость заднего фона окна
 */
DKTools.Window.prototype.standardBackVisible = function() {
    return true;
};

/**
 * Возвращает стандартную видимость рамки окна
 *
 * @method standardFrameVisible
 * @return {Boolean} Стандартная видимость рамки окна
 */
DKTools.Window.prototype.standardFrameVisible = function() {
    return true;
};

/**
 * Возвращает стандартную прозрачность окна
 *
 * @method standardWindowOpacity
 * @return {Number} Стандартная прозрачность окна
 */
DKTools.Window.prototype.standardWindowOpacity = function() {
    return 255;
};

/**
 * Возвращает стандартную прозрачность контента окна
 *
 * @method standardContentsOpacity
 * @return {Number} Стандартная прозрачность контента окна
 */
DKTools.Window.prototype.standardContentsOpacity = function() {
    return 255;
};

/**
 * Возвращает стандартную прозрачность
 *
 * @method standardOpacity
 * @return {Number[]} Стандартная прозрачность
 */
DKTools.Window.prototype.standardOpacity = function() {
    return [this.standardWindowOpacity(), this.standardContentsOpacity(), this.standardBackOpacity()];
};

/**
 * Возвращает стандартный тон окна
 *
 * @method standardTone
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
 * @method setupAll
 *
 * @param {Object} [object] - Объект типа {}
 *
 * @param {Number[]} [object.opacity] - Прозрачность окна
 * @param {Number[]} [object.tone] - Тон окна
 *
 * @see object properties: DKTools.Base.prototype.setupAll
*/
DKTools.Window.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.Base.prototype.setupAll.call(this, object);
    this.setupOpacity(object.opacity);
	this.setupTone(object.tone);
};

/**
 * Устанавливает ширину окна
 *
 * @method setupWidth
 * @param {Number} [width] - Ширина окна
 */
DKTools.Window.prototype.setupWidth = function(width) {
    this.width = this._checkWidth(width);
};

/**
 * Устанавливает высоту окна
 *
 * @method setupHeight
 * @param {Number} [height] - Высота окна
 */
DKTools.Window.prototype.setupHeight = function(height) {
    this.height = this._checkHeight(height);
};

/**
 * Устанавливает размер окна
 *
 * @method setupSize
 *
 * @param {Number | Object} [object] - Ширина окна или Объекти типа {}
 * @param {Number} [height] - Высота окна
 *
 * @param {Number} [object.width] - Ширина окна
 * @param {Number} [object.height] - Высота окна
 */
DKTools.Window.prototype.setupSize = function(object, height) {
    if (object && object.constructor === Object) {
        return this.setupSize(object.width, object.height);
    }
    object = this._checkWidth(object);
    height = this._checkHeight(height);
    Window.prototype.move.call(this, this.x, this.y, object, height);
};

/**
 * Устанавливает тон окна
 *
 * @method setupTone
 * @param {Number[]} [tone] - Тон окна
*/
DKTools.Window.prototype.setupTone = function(tone) {
    this._tone = this._checkArray(tone, this.standardTone());
};

/**
 * Устанавливает прозрачность окна
 *
 * @method setupOpacity
 * @param {Number[]} [opacity] - Прозрачность окна
*/
DKTools.Window.prototype.setupOpacity = function(opacity) {
    this._opacity = this._checkArray(opacity, this.standardOpacity());
};

// set methods

/**
 * Изменяет все параметры окна
 * Возвращает количество измененных параметров
 *
 * @override
 * @method setAll
 *
 * @param {Object} [object] - Объект типа {}
 *
 * @param {Number[]} [object.opacity] - Прозрачность окна
 * @param {Number[]} [object.tone] - Тон окна
 *
 * @see object properties: DKTools.Base.prototype.setAll
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
 * @method setWidth
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
 * @method setHeight
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
 * @method setOpacity
 *
 * @param {Number[]} [opacity] - Прозрачность окна
 * @param {Boolean} [blockUpdate] - Блокировка вызова функции updateOpacity
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Window.prototype.setOpacity = function(opacity, blockUpdate) {
    opacity = opacity || this.standardOpacity();
    if (this._opacity.equals(opacity)) {
        return false;
    }
    var lastOpacity = this._opacity;
    this.setupOpacity(opacity);
    if (this._opacity.equals(lastOpacity)) {
        return false;
    }
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
 * @method setTone
 *
 * @param {Number[]} [tone] - Тон окна
 * @param {Boolean} [blockUpdate] - Блокировка вызова функции updateTone
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Window.prototype.setTone = function(tone, blockUpdate) {
    tone = tone || this.standardTone();
    if (this._tone.equals(tone)) {
        return false;
    }
    var lastTone = this._tone;
    this.setupTone(tone);
    if (this._tone.equals(lastTone)) {
        return false;
    }
    if (!blockUpdate) {
        this.updateTone();
    }
    return true;
};

// _create methods

/**
 * Создает все части окна
 *
 * @private
 * @override
 * @method _createAllParts
 */
DKTools.Window.prototype._createAllParts = function() {
    this._createSpriteContainer();
    this._createBackSprite();
    this._createFrameSprite();
    this._createContentsSprite();
    this._createArrowSprites();
    this._createPauseSignSprite();
    this._addAllPartsToChild();
};

/**
 * Создает контейнер спрайтов
 *
 * @private
 * @method _createSpriteContainer
 */
DKTools.Window.prototype._createSpriteContainer = function() {
    this._windowSpriteContainer = new PIXI.Container();
};

/**
 * Создает спрайт заднего фона окна
 *
 * @private
 * @method _createBackSprite
 */
DKTools.Window.prototype._createBackSprite = function() {
    if (this.needsBackSprite()) {
        this._windowBackSprite = new Sprite();
        this._windowBackSprite.opacity = this.standardBackOpacity();
        this._windowBackSprite.visible = this.standardBackVisible();
    }
};

/**
 * Создает спрайт рамки окна
 *
 * @private
 * @method _createFrameSprite
 */
DKTools.Window.prototype._createFrameSprite = function() {
    if (this.needsFrameSprite()) {
        this._windowFrameSprite = new Sprite();
        this._windowFrameSprite.visible = this.standardFrameVisible();
    }
};

/**
 * Создает спрайт контента окна
 *
 * @private
 * @method _createContentsSprite
 */
DKTools.Window.prototype._createContentsSprite = function() {
    this._windowContentsSprite = new DKTools.Sprite();
};

/**
 * Создает спрайты стрелок
 *
 * @private
 * @method _createArrowSprites
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
 * @method _createDownArrowSprite
 */
DKTools.Window.prototype._createDownArrowSprite = function() {
    if (this.needsDownArrowSprite()) {
        this._downArrowSprite = new Sprite();
    }
};

/**
 * Создает спрайт стрелки вверх
 *
 * @private
 * @method _createUpArrowSprite
 */
DKTools.Window.prototype._createUpArrowSprite = function() {
    if (this.needsUpArrowSprite()) {
        this._upArrowSprite = new Sprite();
    }
};

/**
 * Создает спрайт стрелки влево
 *
 * @private
 * @method _createLeftArrowSprite
 */
DKTools.Window.prototype._createLeftArrowSprite = function() {
    if (this.needsLeftArrowSprite()) {
        this._leftArrowSprite = new Sprite();
    }
};

/**
 * Создает спрайт стрелки вправо
 *
 * @private
 * @method _createRightArrowSprite
 */
DKTools.Window.prototype._createRightArrowSprite = function() {
    if (this.needsRightArrowSprite()) {
        this._rightArrowSprite = new Sprite();
    }
};

/**
 * Создает спрайт знака паузы
 *
 * @private
 * @method _createPauseSignSprite
 */
DKTools.Window.prototype._createPauseSignSprite = function() {
    if (this.needsPauseSignSprite()) {
        this._windowPauseSignSprite = new Sprite();
    }
};

/**
 * Создает обложку окна
 *
 * @private
 * @method _createWindowskin
 */
DKTools.Window.prototype._createWindowskin = function() {
    this.windowskin = this.loadWindowskin();
};

/**
 * Создает событие исчезновения/появления окна
 *
 * @private
 * @method _createVisibleEvent
 * @param {Number} duration - Длительность
 * @param {Boolean} visible - Исчезновение/Появление
 */
DKTools.Window.prototype._createVisibleEvent = function(duration, visible) {
    var callback = function() {
        this.setupVisible(visible);
    }.bind(this);
    if (visible) {
        var opacity = 255;
        var onStartHandler = callback;
        var onEndHandler = null;
    } else {
        var opacity = 0;
        var onStartHandler = null;
        var onEndHandler = callback;
    }
    var handler = this._updateMove.bind(this, this.x, this.y, opacity);
    this.addEvent('wait', handler, duration, onStartHandler, onEndHandler);
};

// needs methods

/**
 * Возвращает true, если нужно создать спрайт заднего фона окна
 *
 * @method needsBackSprite
 * @return {Boolean} Нужно создать спрайт заднего фона окна
 */
DKTools.Window.prototype.needsBackSprite = function() {
    return true;
};

/**
 * Возвращает true, если нужно создать спрайт рамки окна
 *
 * @method needsFrameSprite
 * @return {Boolean} Нужно создать спрайт рамки окна
 */
DKTools.Window.prototype.needsFrameSprite = function() {
    return true;
};

/**
 * Возвращает true, если нужно создать спрайты стрелок
 *
 * @method needsArrowSprites
 * @return {Boolean} Нужно создать спрайты стрелок
 */
DKTools.Window.prototype.needsArrowSprites = function() {
    return true;
};

/**
 * Возвращает true, если нужно создать спрайт стрелки вниз
 *
 * @method needsDownArrowSprite
 * @return {Boolean} Нужно создать спрайт стрелки вниз
 */
DKTools.Window.prototype.needsDownArrowSprite = function() {
    return true;
};

/**
 * Возвращает true, если нужно создать спрайт стрелки вверх
 *
 * @method needsUpArrowSprite
 * @return {Boolean} Нужно создать спрайт стрелки вверх
 */
DKTools.Window.prototype.needsUpArrowSprite = function() {
    return true;
};

/**
 * Возвращает true, если нужно создать спрайт стрелки влево
 *
 * @method needsLeftArrowSprite
 * @return {Boolean} Нужно создать спрайт стрелки влево
 */
DKTools.Window.prototype.needsLeftArrowSprite = function() {
    return true;
};

/**
 * Возвращает true, если нужно создать спрайт стрелки вправо
 *
 * @method needsRightArrowSprite
 * @return {Boolean} Нужно создать спрайт стрелки вправо
 */
DKTools.Window.prototype.needsRightArrowSprite = function() {
    return true;
};

/**
 * Возвращает true, если нужно создать спрайт знака паузы
 *
 * @method needsPauseSignSprite
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
 * @method _refreshAllParts
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
 * @method _refreshBack
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
 * @method _refreshFrame
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
 * @method _refreshContents
 */
DKTools.Window.prototype._refreshContents = function() {
    if (this.hasContentsSprite()) {
        Window.prototype._refreshContents.call(this);
    }
};

/**
 * Обновляет спрайты стрелок
 *
 * @private
 * @override
 * @method _refreshContents
 */
DKTools.Window.prototype._refreshArrows = function() {
    var w = this._width;
    var h = this._height;
    var bitmap = this._windowskin;
    var p = 24;
    var q = p / 2;
    var sx = 96 + p;
    var sy = 0 + p;
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
 * @method _refreshPauseSign
 */
DKTools.Window.prototype._refreshPauseSign = function() {
    if (this.hasPauseSignSprite()) {
        Window.prototype._refreshPauseSign.call(this);
    }
};

// _add methods

/**
 * Добавляет все части окна в обработку
 *
 * @private
 * @method _addAllPartsToChild
 */
DKTools.Window.prototype._addAllPartsToChild = function() {
    this._addSpriteContainerToChild();
    this._addContentsSpriteToChild();
    this._addArrowSpritesToChild();
    this._addWindowPauseSignSpriteToChild();
};

/**
 * Добавляет контейнер спрайтов в обработку
 *
 * @private
 * @method _addSpriteContainerToChild
 */
DKTools.Window.prototype._addSpriteContainerToChild = function() {
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
 * @method _addContentsSpriteToChild
 */
DKTools.Window.prototype._addContentsSpriteToChild = function() {
    if (this.hasContentsSprite()) {
        this.addChild(this._windowContentsSprite);
    }
};

/**
 * Добавляет спрайты стрелок в обработку
 *
 * @private
 * @method _addArrowSpritesToChild
 */
DKTools.Window.prototype._addArrowSpritesToChild = function() {
    this._addDownArrowSpriteToChild();
    this._addUpArrowSpriteToChild();
    this._addLeftArrowSpriteToChild();
    this._addRightArrowSpriteToChild();
};

/**
 * Добавляет спрайт стрелки вниз в обработку
 *
 * @private
 * @method _addDownArrowSpriteToChild
 */
DKTools.Window.prototype._addDownArrowSpriteToChild = function() {
    if (this.hasDownArrowSprite()) {
        this.addChild(this._downArrowSprite);
    }
};

/**
 * Добавляет спрайт стрелки вверх в обработку
 *
 * @private
 * @method _addUpArrowSpriteToChild
 */
DKTools.Window.prototype._addUpArrowSpriteToChild = function() {
    if (this.hasUpArrowSprite()) {
        this.addChild(this._upArrowSprite);
    }
};

/**
 * Добавляет спрайт стрелки влево в обработку
 *
 * @private
 * @method _addLeftArrowSpriteToChild
 */
DKTools.Window.prototype._addLeftArrowSpriteToChild = function() {
    if (this.hasLeftArrowSprite()) {
        this.addChild(this._leftArrowSprite);
    }
};

/**
 * Добавляет спрайт стрелки вправо в обработку
 *
 * @private
 * @method _addRightArrowSpriteToChild
 */
DKTools.Window.prototype._addRightArrowSpriteToChild = function() {
    if (this.hasRightArrowSprite()) {
        this.addChild(this._rightArrowSprite);
    }
};

/**
 * Добавляет спрайт знака паузы в обработку
 *
 * @private
 * @method _addWindowPauseSignSpriteToChild
 */
DKTools.Window.prototype._addWindowPauseSignSpriteToChild = function() {
    if (this.hasPauseSignSprite()) {
        this.addChild(this._windowPauseSignSprite);
    }
};

// create methods

/**
 * Создает все объекты
 *
 * @override
 * @method createAll
 */
DKTools.Window.prototype.createAll = function() {
    DKTools.Base.prototype.createAll.call(this);
    this.createContents();
};

/**
 *
 *
 * @method createContents
 */
DKTools.Window.prototype.createContents = function() {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.resize(this.contentsWidth(), this.contentsHeight());
    }
};

// check methods

/**
 * Проверяет ширину и высоту окна на соответствие минимальным значениям
 * Возвращает количество измененных параметров
 *
 * @override
 * @method checkSize
 * @return {Number} Количество измененных параметров
 */
DKTools.Window.prototype.checkSize = function() {
    var minWidth = this.minWidth();
    var minHeight = this.minHeight();
    var changed = 0;
    if (this.width < minWidth) {
        this.setupWidth(minWidth);
        changed++;
    }
    if (this.height < minHeight) {
        this.setupHeight(minHeight);
        changed++;
    }
    return changed;
};

// is method

/**
 * Возвращает true, если объект является окном
 *
 * @override
 * @method isWindow
 * @return {Boolean} Объект является окном
 */
DKTools.Window.prototype.isWindow = function() {
    return true;
};

/**
 * Возвращает true, если окно открыто и его видно
 *
 * @method isOpenAndVisible
 * @return {Boolean} Окно открыто и его видно
 */
DKTools.Window.prototype.isOpenAndVisible = function() {
    return this.isOpen() && this.isVisible();
};

/**
 * Возвращает true, если окно открыто и активно
 *
 * @method isOpenAndActive
 * @return {Boolean} Окно открыто и активно
 */
DKTools.Window.prototype.isOpenAndActive = function() {
    return this.isOpen() && this.isActive();
};

// frame methods

/**
 * Показывает рамку окна
 *
 * @method showFrame
 */
DKTools.Window.prototype.showFrame = function() {
    if (this.hasFrameSprite()) {
        this._windowFrameSprite.visible = true;
    }
};

/**
 * Скрывает рамку окна
 *
 * @method hideFrame
 */
DKTools.Window.prototype.hideFrame = function() {
    if (this.hasFrameSprite()) {
        this._windowFrameSprite.visible = false;
    }
};

// back methods

/**
 * Показывает задний фон окна
 *
 * @method showBack
 */
DKTools.Window.prototype.showBack = function() {
    if (this.hasBackSprite()) {
        this._windowBackSprite.visible = true;
    }
};

/**
 * Скрывает задний фон окна
 *
 * @method showBack
 */
DKTools.Window.prototype.hideBack = function() {
    if (this.hasBackSprite()) {
        this._windowBackSprite.visible = false;
    }
};

// has methods

/**
 * Возвращает true, если окно содержит контейнер спрайтов
 *
 * @method hasSpriteContainer
 * @return {Boolean} Окно содержит контейнер спрайтов
 */
DKTools.Window.prototype.hasSpriteContainer = function() {
    return !!this._windowSpriteContainer;
};

/**
 * Возвращает true, если окно содержит спрайт заднего фона
 *
 * @method hasBackSprite
 * @return {Boolean} Окно содержит спрайт заднего фона
 */
DKTools.Window.prototype.hasBackSprite = function() {
    return !!this._windowBackSprite;
};

/**
 * Возвращает true, если окно содержит спрайт рамки окна
 *
 * @method hasFrameSprite
 * @return {Boolean} Окно содержит спрайт рамки окна
 */
DKTools.Window.prototype.hasFrameSprite = function() {
    return !!this._windowFrameSprite;
};

/**
 * Возвращает true, если окно содержит спрайт контента окна
 *
 * @method hasContentsSprite
 * @return {Boolean} Окно содержит спрайт контента окна
 */
DKTools.Window.prototype.hasContentsSprite = function() {
    return !!this._windowContentsSprite;
};

/**
 * Возвращает true, если окно содержит спрайты стрелок
 *
 * @method hasArrowSprites
 * @return {Boolean} Окно содержит спрайты стрелок
 */
DKTools.Window.prototype.hasArrowSprites = function() {
    return this.hasDownArrowSprite() && this.hasUpArrowSprite() &&
            this.hasLeftArrowSprite() && this.hasRightArrowSprite();
};

/**
 * Возвращает true, если окно содержит спрайт стрелки вниз
 *
 * @method hasDownArrowSprite
 * @return {Boolean} Окно содержит спрайт стрелки вниз
 */
DKTools.Window.prototype.hasDownArrowSprite = function() {
    return !!this._downArrowSprite;
};

/**
 * Возвращает true, если окно содержит спрайт стрелки вверх
 *
 * @method hasUpArrowSprite
 * @return {Boolean} Окно содержит спрайт стрелки вверх
 */
DKTools.Window.prototype.hasUpArrowSprite = function() {
    return !!this._upArrowSprite;
};

/**
 * Возвращает true, если окно содержит спрайт стрелки влево
 *
 * @method hasLeftArrowSprite
 * @return {Boolean} Окно содержит спрайт стрелки влево
 */
DKTools.Window.prototype.hasLeftArrowSprite = function() {
    return !!this._leftArrowSprite;
};

/**
 * Возвращает true, если окно содержит спрайт стрелки вправо
 *
 * @method hasRightArrowSprite
 * @return {Boolean} Окно содержит спрайт стрелки вправо
 */
DKTools.Window.prototype.hasRightArrowSprite = function() {
    return !!this._rightArrowSprite;
};

/**
 * Возвращает true, если окно содержит спрайт знака паузы
 *
 * @method hasPauseSignSprite
 * @return {Boolean} Окно содержит спрайт знака паузы
 */
DKTools.Window.prototype.hasPauseSignSprite = function() {
    return !!this._windowPauseSignSprite;
};

// move methods

/**
 * Перемещает окно
 *
 * @override
 * @method move
 *
 * @param {Number | Point | Object} [object] - Координата X или Point, или Объект типа {}
 * @param {Number} [y] - Координата Y
 * @param {Number} [duration] - Длительность перемещения
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 */
DKTools.Window.prototype.move = function(object, y, duration, onStartHandler, onEndHandler) {
    if (object && (object.constructor === Point || object.constructor === Object)) {
        return Window.prototype.move.call(this, object.x, object.y, this.width, this.height);
    }
    if (duration > 0) {
        var x = (object == null ? this.x : object);
        y = (y == null ? this.y : y);
        return this.addEvent('update', this._updateMove.bind(this, x, y), duration, onStartHandler, onEndHandler);
    } else {
        var x = object || 0;
        y = y || 0;
        Window.prototype.move.call(this, x, y, this.width, this.height);
    }
};

// size methods

/**
 * Устанавливает ширину и высоту окна, если они отличаются от текущих
 * Возвращает true, если изменение произошло
 *
 * @method resize
 *
 * @param {Number} [width] - Ширина окна
 * @param {Number} [height] - Высота окна
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Window.prototype.resize = function(width, height, blockStart) {
    if (width == null) {
        width = this.minWidth();
    }
    if (height == null) {
        height = this.minHeight();
    }
    if (this.width === width && this.height === height) {
        return false;
    }
    var lastWidth = this.width;
    var lastHeight = this.height;
    this.setupSize(width, height);
    if (lastWidth === this.width && lastHeight === this.height) {
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
 * @method minWidth
 * @return {Number} Минимальная ширина окна
*/
DKTools.Window.prototype.minWidth = function() {
    return this.standardPadding() * 2 + DKTools.Base.prototype.minWidth.call(this);
};

/**
 * Возвращает минимальную высоту окна
 *
 * @override
 * @method minHeight
 * @return {Number} Минимальная высота окна
 */
DKTools.Window.prototype.minHeight = function() {
	return this.standardPadding() * 2 + DKTools.Base.prototype.minHeight.call(this);
};

// uncategorized methods

/**
 * Возвращает ширину текста
 * Учитывает специальные символы
 *
 * @method textWidthEx
 *
 * @param {String} text - Текст
 * @param {Number | Point | Object} [object] - Координата X или Point, или Объект типа {}
 * @param {Number} [y] - Координата Y
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 *
 * @return {Number} Ширина текста
 */
DKTools.Window.prototype.textWidthEx = function(text, object, y) {
    if (!this.hasBitmap()) {
        return 0;
    }
    if (object && (object.constructor === Point || object.constructor === Object)) {
        return this.textWidthEx(text, object.x, object.y);
    }
    var x = object || 0;
    y = y || 0;
    return this.drawTextEx(text, x, y);
};

/**
 * Возвращает объект со всеми параметрами
 *
 * @method object
 * @return {Object} Объект со всеми параметрами
 */
DKTools.Window.prototype.object = function() {
    var object = DKTools.Base.prototype.object.call(this);
    object.opacity = this._opacity;
    object.tone = this._tone;
    return object;
};

// load methods

/**
 * Загружает Bitmap из папки
 * Возвращает загруженный Bitmap
 *
 * @method loadBitmap
 *
 * @param {String} folder - Путь к файлу
 * @param {String} filename - Название файла
 * @param {Function} [listener] - Метод обработки после загрузки Bitmap
 * @param {Number} [hue] - Оттенок
 * @param {Boolean} [smooth] - Сглаживание
 *
 * @return {Bitmap} Bitmap объекта был изменен
 */
DKTools.Window.prototype.loadBitmap = function(folder, filename, listener, hue, smooth) {
	var bitmap = ImageManager.loadBitmap(folder, filename, hue, smooth);
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
 * @method resetFontSettings
 */
DKTools.Window.prototype.resetFontSettings = function() {
};

/**
 * Сбрасывает текст текста
 *
 * @override
 * @method resetTextColor
 */
DKTools.Window.prototype.resetTextColor = function() {
};

// change methods

/**
 * Изменяет цвет текста
 *
 * @override
 * @method changeTextColor
 * @param {String} color - Цвет текста
 */
DKTools.Window.prototype.changeTextColor = function(color) {
    this.setupTextColor(color);
    this.updateTextColor();
};

/**
 * Изменяет прозрачность рисования контента окна
 *
 * @override
 * @method changePaintOpacity
 * @param {Number | Boolean} value - Значение прозрачность рисования контента окна
 */
DKTools.Window.prototype.changePaintOpacity = function(value) {
    if (Number(value) == null) {
        this.setupPaintOpacity(value);
    } else {
        // совместимость со стандартным changePaintOpacity
        Window_Base.prototype.changePaintOpacity.call(this, value);
    }
};

// events methods

/**
 * Обновляет события типа open
 *
 * @method updateOpenEvents
 */
DKTools.Window.prototype.updateOpenEvents = function() {
    this.updateEventContainer('open');
};

/**
 * Обновляет события типа close
 *
 * @method updateCloseEvents
 */
DKTools.Window.prototype.updateCloseEvents = function() {
    this.updateEventContainer('close');
};

// _update methods

/**
 * Обновляет спрайт контента окна
 *
 * @private
 * @override
 * @method _updateContents
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
 * @method _updateArrows
 */
DKTools.Window.prototype._updateArrows = function() {
    var isOpen = this.isOpen();
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
 * @method _updatePauseSign
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
 * @method updateAll
 */
DKTools.Window.prototype.updateAll = function() {
    DKTools.Base.prototype.updateAll.call(this);
    this.updateTone();
    this.updateOpacity();
    this.updateContents();
};

/**
 * Обновляет спрайт контента окна
 *
 * @method updateContents
 */
DKTools.Window.prototype.updateContents = function() {
    if (this.hasContentsSprite()) {
        this.updateFont();
        this.updateTextColor();
        this.updatePaintOpacity();
    }
};

/**
 * Обновляет части окна
 *
 * @method updateTransform
 */
DKTools.Window.prototype.updateTransform = function() {
    this._updateContents();
    this._updateArrows();
    this._updatePauseSign();
    PIXI.Container.prototype.updateTransform.call(this);
};

/**
 * Обновляет тон окна
 *
 * @override
 * @method updateTone
*/
DKTools.Window.prototype.updateTone = function() {
    if (this.hasBackSprite()) {
        Window.prototype.setTone.apply(this, this._tone);
    }
};

/**
 * Обновляет прозрачность окна
 *
 * @method updateOpacity
*/
DKTools.Window.prototype.updateOpacity = function() {
    if (this.hasSpriteContainer()) {
        this.opacity = this._opacity[0];
    }
    if (this.hasContentsSprite()) {
        this.contentsOpacity = this._opacity[1];
    }
	if (this.hasBackSprite()) {
        this.backOpacity = this._opacity[2];
    }
};

/**
 * Обновляет открытие окна
 *
 * @override
 * @method updateOpen
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
 * @method updateClose
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
 *
 * @method updateArrows
 */
DKTools.Window.prototype.updateArrows = function() {
};

/**
 * Обновляет окно
 *
 * @override
 * @method update
 */
DKTools.Window.prototype.update = function() {
	Window.prototype.update.call(this);
    DKTools.Base.prototype.update.call(this);
	this.updateOpen();
	this.updateClose();
	this.updateBackgroundDimmer();
    this.updateArrows();
};

//

DKTools.Window.prototype.processEscapeCharacter = function(code, textState) {
    switch (code) {
        case 'W':
            this.wait(this.obtainEscapeParam(textState));
            break;
        default:
            Window_Base.prototype.processEscapeCharacter.call(this, code, textState);
            break;
    }
};

DKTools.Window.prototype._updateTextEx = function(textState, event) {
    if (textState) {
        this.processCharacter(textState);
        if (this.isEndOfText(textState)) {
            this.removeEvent(event);
        }
        if (!this.isWaiting()) {
            event.pause(5);
        }
    }
};

DKTools.Window.prototype.updateTextEx = function(text, x, y) {
    var textState = {
        index: 0,
        x: x,
        y: y,
        left: x,
        text: this.convertEscapeCharacters(text),
    };
    textState.height = this.calcTextHeight(textState, false);
    this.addEventHandler('update', this._updateTextEx.bind(this, textState));
};

DKTools.Window.prototype.isEndOfText = function(textState) {
    return textState.index >= textState.text.length;
};





//===========================================================================
// DKTools Scene
//===========================================================================

DKTools.Scene.prototype = Object.create(Scene_Base.prototype);
DKTools.Scene.prototype.constructor = DKTools.Scene;

// initialize

/**
 * Инициализирует объект класса
 *
 * @constructor
 */
DKTools.Scene.prototype.initialize = function() {
    this._clearAll();
    this._setupAll();
    this._createAll();
    Scene_Base.prototype.initialize.call(this);
};

// _clear methods

/**
 * Очищает все данные
 *
 * @private
 * @method _clearAll
 */
DKTools.Scene.prototype._clearAll = function() {
    this._clearWaitCount();
};

/**
 * Сбрасывает счетчик ожидания сцены
 *
 * @private
 * @method _clearWaitCount
 */
DKTools.Scene.prototype._clearWaitCount = function() {
    this._waitCount = 0;
};

// _setup methods

/**
 * Устанавливает все данные
 *
 * @private
 * @method _setupAll
 */
DKTools.Scene.prototype._setupAll = function() {
};

// _create methods

/**
 * Создает необходимые объекты
 *
 * @private
 * @method _createAll
 */
DKTools.Scene.prototype._createAll = function() {
};

// create methods

/**
 * Создает объекты в сцене
 *
 * @override
 * @method create
 */
DKTools.Scene.prototype.create = function() {
	this.createBackground();
	this.createWindowLayer();
	this.createAllWindows();
};

/**
 * Создает задний фон
 *
 * @method createBackground
 */
DKTools.Scene.prototype.createBackground = function() {
};

/**
 * Создает все окна в сцене
 *
 * @method createAllWindows
 */
DKTools.Scene.prototype.createAllWindows = function() {
};

// remove methods

/**
 * Удаляет окно из обработки сцены
 *
 * @method removeWindow
 * @param {DKToolsWindow | *} window - Окно, которое надо удалить
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
 * @method hasWindowLayer
 * @return {Boolean} У сцены есть слой для окон
 */
DKTools.Scene.prototype.hasWindowLayer = function() {
    return !!this._windowLayer;
};

// is methods

/**
 * Возвращает true, если сцена ждет
 *
 * @method isWaiting
 * @return {Boolean} Сцена ждет
 */
DKTools.Scene.prototype.isWaiting = function() {
    return this._waitCount > 0;
};

/**
 * Возвращает true, если сцена занята
 *
 * @override
 * @method isBusy
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
    return busy || this.isWaiting();
};

/**
 * Возвращает true, если сцена готова
 *
 * @override
 * @method isReady
 * @return {Boolean} Сцена готова
 */
DKTools.Scene.prototype.isReady = function() {
    if (Scene_Base.prototype.isReady.call(this)) {
        return true;
    }
    var ready = false;
    var callback = function(child) {
        if (child.isReady && child.isReady()) {
            ready = true;
        }
    }.bind(this);
    this.iterateChildren(callback);
    return ready;
};

// other methods

/**
 * Выполняет callback функцию для каждого объекта сцены
 *
 * @method iterateChildren
 * @param {Function} callback - Функция обработки для каждого объекта сцены
 */
DKTools.Scene.prototype.iterateChildren = function(callback) {
    this.children.forEach(callback);
};

/**
 * Заставляет сцену ждать
 *
 * @method wait
 * @param {Number} duration - Время ожидания в фреймах
 */
DKTools.Scene.prototype.wait = function(duration) {
    this._waitCount = duration;
};

// update methods

/**
 * Обновляет сцену
 * Возвращает true, если сцена не ждет
 *
 * @override
 * @method update
 * @return {Boolean} Сцена не ждет
 */
DKTools.Scene.prototype.update = function() {
    if (this.isWaiting()) {
        this.updatewWait();
        return false;
    }
    Scene_Base.prototype.update.call(this);
    this.updateEvents();
    return true;
};

/**
 * Обновляет ожидание сцены
 *
 * @method updatewWait
 */
DKTools.Scene.prototype.updatewWait = function() {
    this._waitCount--;
};

DKTools.Scene.prototype.updateEvents = function() {
    // input events
    // if Input.isTriggered(symbol) updateEvent...
};