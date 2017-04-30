/*
Title: DKTools
Author: DK (Denis Kuznetsov) (http://vk.com/dk_plugins)
Site: http://dk-plugins.ru
Group in VK: http://vk.com/dkplugins
Version: 0.97 beta
Release: 11.03.2017
First release: 13.01.2016
Supported languages: Russian, English
*/

/*
Название: DKTools
Автор: DK (Денис Кузнецов) (http://vk.com/dk_plugins)
Сайт: http://dk-plugins.ru
Группа ВК: http://vk.com/dkplugins
Версия: 0.97 beta
Релиз: 11.03.2017
Первый релиз: 13.01.2016
Поддерживаемые языки: Русский, Английский
*/

//===========================================================================
// Settings of the plugin
// Настройки плагина
//===========================================================================

//===========================================================================
// End of the plugin settings
// Конец настройки плагина
//===========================================================================

/*:
* @plugindesc v.0.97 beta Basic elements
* @author DK (Denis Kuznetsov)
* @help

 ### Info about plugin ###
 Title: DKTools
 Author: DK (Denis Kuznetsov) (http://vk.com/dk_plugins)
 Site: http://dk-plugins.ru
 Group in VK: http://vk.com/dkplugins
 Version: 0.97 beta
 Release: 11.03.2017
 First release: 13.01.2016
 Supported languages: Russian, English

 ### Elements ###
 1. DKTools.Sprite
 2. DKTools.Viewport
 3. DKTools.Layout
 4. DKTools.Window
 5. DKTools.Scene

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

 * @param Game Language
 * @desc Game language (ru - russian, en - english)
 * @default en

 * @param Open Console
 * @desc Open a debug console (true or false)
 * @default false

*/

/*:ru
* @plugindesc v.0.97 beta Базовые элементы
* @author DK (Денис Кузнецов)
* @help

 ### Информация о плагине ###
 Название: DKTools
 Автор: DK (Денис Кузнецов) (https://vk.com/dk_plugins)
 Сайт: http://dk-plugins.ru
 Группа ВК: http://vk.com/dkplugins
 Версия: 0.97 beta
 Релиз: 11.03.2017
 Первый релиз: 13.01.2016
 Поддерживаемые языки: Русский, Английский
 
 ### Элементы ###
 1. DKTools.Sprite
 2. DKTools.Viewport
 3. DKTools.Layout
 4. DKTools.Window
 5. DKTools.Scene
 
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

 * @param Game Language
 * @desc Язык игры (ru - русский, en - английский)
 * @default ru

 * @param Open Console
 * @desc Открыть отладочную консоль (true - да, false - нет)
 * @default false
 
*/

try {
    var _ = require('./js/libs/lodash');
} catch(e) {
    throw new Error('Ошибка загрузки lodash!'); // добавить локализацию
}

var Imported = Imported || {};
Imported.DKTools = 0.97;

// for compatibility with my old plugins
var DKVersion = DKVersion || {};
DKVersion.DKTools = Imported.DKTools;

var DKToolsParam = {};
DKToolsParam.param = PluginManager.parameters('DKTools');

DKToolsParam.locale = DKToolsParam.param['Game Language'];
DKToolsParam.openConsole = DKToolsParam.param['Open Console'];





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
	throw new Error('This is a static class (Это статический класс!)');
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
    throw new Error('This is a static class (Это статический класс!)');
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
    throw new Error('This is a static class (Это статический класс!)');
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
    throw new Error('This is a static class (Это статический класс!)');
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
    throw new Error('This is a static class (Это статический класс!)');
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
    throw new Error('This is a static class (Это статический класс!)');
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
    throw new Error('This is a static class (Это статический класс!)');
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
    throw new Error('This is a static class (Это статический класс!)');
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
    throw new Error('This is a static class (Это статический класс!)');
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
 * Класс события для спрайта и окна
 *
 * @class DKTools.Event
 * @constructor
 *
 * @memberOf DKTools
 *
 * @param {Object} object
 * @param {DKTools.Sprite | DKTools.Window | *} [target] - Объект, для которого установлено событие
 *
 * @param {String} [object.type] - Тип события
 * @param {Number} [object.duration] - Длительность события
 * @param {Function} [object.onStart] - Обработчик начала работы события
 * @param {Function} object.onUpdate - Обработчик события
 * @param {Function} [object.onFinish] - Обработчик окончания работы события
 * @param {Function} [object.onPause] - Обработчик паузы события
 */
DKTools.Event = function(object, target) {
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

DKTools.Sprite.Button = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

DKTools.Sprite.Cursor = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

DKTools.Sprite.Selectable = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

DKTools.Sprite.Command = function(object, y, width, height) {
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

DKTools.Window.Command = function(object, y, width, height) {
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





//===========================================================================
// DKTools Utils
//===========================================================================

/**
 * Режим разработчика
 * Позволяет получить доступ к некоторым функциям
 * Функции могут быть с багами
 *
 * @type {Boolean}
 * @memberOf DKTools.Utils
 */
DKTools.Utils.debug = false;

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
    if (this.toBoolean(DKToolsParam.openConsole)) {
        this.openConsole();
    }
};

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
 * Переводит число или строку в Boolean
 *
 * @static
 * @param {Number | String} value
 * @return {Boolean} Число или строка в Boolean
 */
DKTools.Utils.toBoolean = function(value) {
    return value > 0 || String(value).toLowerCase().trim() === 'true';
};

/**
 * Разделяет строку на массив строк по запятым
 *
 * @static
 * @param {String} string - Строка
 * @return {String[]} Массив строк
 */
DKTools.Utils.splitString = function(string) {
    return string.replace(/\s*\,\s*/g, ',').split(',');
};

/**
 * Разделяет строку на массив чисел по запятым
 *
 * @static
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
 * Копирует функции и свойства из одного класса в другой
 *
 * @static
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
 */
DKTools.Utils.openConsole = function() {
    if (Utils.isNwjs() && Utils.isOptionValid('test')) {
        var debugWindow = require('nw.gui').Window.get().showDevTools();
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

    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
        var args = ['\n %c %c %c DKTools.js ' + DKTools.version + ' %c  %c  http://www.dk-plugins.ru/  %c \n\n',
            'background: #4CCBF5; padding:5px 0;',
            'background: #4CCBF5; padding:5px 0;',
            'color: #4CCBF5; background: #030307; padding:5px 0;',
            'background: #4CCBF5; padding:5px 0;',
            'background: #BDE5F2; padding:5px 0;',
            'background: #4CCBF5; padding:5px 0;'];

        console.log.apply(console, args);
    } else if (window.console) {
        console.log('DKTools.js ' + DKTools.version + ' - http://www.dk-plugins.ru/');
    }

    this._saidHello = true;
}





//===========================================================================
// DKTools Utils Array
//===========================================================================

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
    return _.every(array, _.isFinite);
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
    var context = bitmap._context;
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
    var context = bitmap._context;
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
    var context = bitmap._context;
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
    var context = bitmap._context;
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
 * @return {Bitmap} Клонированный Bitmap
 */
DKTools.Utils.Bitmap.clone = function(bitmap) {
    var canvas = bitmap.canvas;
    var newBitmap = new Bitmap(canvas.width, canvas.height);
    var newContext = newBitmap.context;
    newContext.drawImage(canvas, 0, 0);
    return newBitmap;
};





//===========================================================================
// DKTools Utils Point
//===========================================================================

/**
 *
 *
 * @static
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Координата X или Point, или Объект типа {}
 * @param {Number} [y] - Координата Y
 *
 * @param {Number} [object.x] - Координата X
 * @param {Number} [object.y] - Координата Y
 *
 * @return {Point | null}
 */
DKTools.Utils.Point.convertToPoint = function(object, y) {
    var pointX, pointY;
    if (object instanceof Object) {
        pointX = object.x;
        pointY = object.y;
    } else { // object - Number
        pointX = object;
        pointY = y;
    }
    var point = null;
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
    return new Point(point.x, point.y);
};





//===========================================================================
// DKTools Utils Rectangle
//===========================================================================

/**
 *
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
 * @return {Rectangle | null}
 */
DKTools.Utils.Rectangle.convertToRectangle = function(object, y, width, height) {
    var frameX, frameY, frameWidth, frameHeight;
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
    var frame = null;
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
    return rect1.x === rect2.x && rect1.y === rect2.y && rect1.width === rect2.width && rect1.height === rect2.height;
};

/**
 * Клонирует Rectangle
 *
 * @static
 * @param {PIXI.Rectangle | Rectangle} rect - Rectangle, который требуется клонировать
 * @return {Rectangle} Клонированный Rectangle
 */
DKTools.Utils.Rectangle.clone = function(rect) {
    return new Rectangle(rect.x, rect.y, rect.width, rect.height);
};

/**
 * @static
 * @param {PIXI.Rectangle | Rectangle} rect - Rectangle
 * @return {Boolean}
 */
DKTools.Utils.Rectangle.isEmpty = function(rect) {
    return this.equals(rect, Rectangle.emptyRectangle);
};





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
    // for compatibility with my old plugins
    this.registerPlugins(DKVersion);
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
    DKTools.Localization.setupPlugin('DKTools');
    _.each(this._requirements, function(pluginInfo, pluginName) {
        var maxVersion = _.max(pluginInfo);
        var pluginVersion = this.pluginVersion(pluginName);
        if (pluginVersion === undefined) {
            var error = DKTools.Localization.localize('#pluginRequired#', [pluginName, maxVersion]);
            throw new Error(error);
        }
        if (pluginVersion < maxVersion) {
            var error = DKTools.Localization.localize('#updateRequired#', [pluginName, maxVersion, pluginVersion]);
            throw new Error(error);
        }
    }.bind(this));
};

// is methods

/**
 * Возвращает true, если плагин зарегистрирован
 *
 * @static
 * @param {String} pluginName - Название плагина
 * @return {Boolean} Плагин зарегистрирован
 */
DKTools.PluginManager.isRegistred = function(pluginName) {
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
    if (!!this._plugins[pluginName] || !_.isFinite(version)) {
        return;
    }
    this._plugins[pluginName] = version;
    DKTools.Localization.loadLocalization(pluginName);
};

/**
 * Регистрирует несколько плагинов
 *
 * @static
 * @param {Object[]} plugins - Плагины
 */
DKTools.PluginManager.registerPlugins = function(plugins) {
    _.each(plugins, function(version, pluginName) {
        this.registerPlugin(pluginName, version);
    }.bind(this));
};

// require methods

/**
 * Регистрирует требование к минимальной версии плагина
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
    _.each(plugins, function(version, pluginName) {
        this.requirePlugin(pluginName, version);
    }.bind(this));
};

// other methods

/**
 * Возвращает версию плагина
 *
 * @static
 * @param {String} pluginName - Название плагина
 * @return {Number | undefined} Версия плагина
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
    /**
     * @private
     * @type {Object}
     */
    this._fs = require('fs');

    var path = require('path');
    var base = path.dirname(process.mainModule.filename);

    /**
     * @private
     * @type {String}
     */
    this._basePath = path.join(base, '/');
};

// is methods

/**
 * @static
 * @return {Boolean}
 */
DKTools.FileManager.isLocalMode = function() {
    return DKTools.Utils.isNwjs();
};

// other methods

/**
 *
 *
 * @static
 *
 * @param {String} path -
 * @param {String} filename -
 *
 * @return {String}
 */
DKTools.FileManager.filePath = function(path, filename) {
    return this._basePath + (path || '') + (filename || '');
};

// create methods

/**
 *
 *
 * @static
 * @param {String} path -
 */
DKTools.FileManager.createFolder = function(path) {
    if (!this.isLocalMode() || this.folderExists(path)) {
        return;
    }
    var fs = this._fs;
    var folderPath = this.filePath(path);
    fs.mkdirSync(folderPath);
};

// save methods

DKTools.FileManager.saveToLocalFile = function(object) {
    object = object || {};
    var fs = this._fs;
    var path = object.path;
    var filePath = this.filePath(path, object.filename);
    var data = object.data;
    if (object.stringify || !_.isBoolean(object.stringify)) {
        data = JSON.stringify(data);
    }
    if (object.compress || !_.isBoolean(object.compress)) {
        data = LZString.compressToBase64(data);
    }
    this.createFolder(path);
    fs.writeFileSync(filePath, data);
};

DKTools.FileManager.saveToWebStorage = function(object) {
    object = object || {};
    var key = object.filename;
    var data = object.data;
    if (object.stringify || !_.isBoolean(object.stringify)) {
        data = JSON.stringify(data);
    }
    if (object.compress || !_.isBoolean(object.compress)) {
        data = LZString.compressToBase64(data);
    }
    localStorage.setItem(key, data);
};

// load methods

DKTools.FileManager.loadFromLocalFile = function(object) {
    object = object || {};
    var fs = this._fs;
    var filePath = this.filePath(object.path, object.filename);
    var data = null;
    if (fs.existsSync(filePath)) {
        data = fs.readFileSync(filePath, { encoding: 'utf8' });
        if (object.decompress || !_.isBoolean(object.decompress)) {
            data = LZString.decompressFromBase64(data);
        }
        if (object.parse || !_.isBoolean(object.parse)) {
            data = JSON.parse(data);
        }
    }
    return data;
};

DKTools.FileManager.loadFromWebStorage = function(object) {
    object = object || {};
    var key = object.filename;
    var data = localStorage.getItem(key);
    if (data) {
        if (object.decompress || !_.isBoolean(object.decompress)) {
            data = LZString.decompressFromBase64(data);
        }
        if (object.parse || !_.isBoolean(object.parse)) {
            data = JSON.parse(data);
        }
    }
    return data;
};

// remove methods

DKTools.FileManager.removeLocalFile = function(object) {
    object = object || {};
    var fs = this._fs;
    var filePath = this.filePath(object.path, object.filename);
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }
};

DKTools.FileManager.removeWebStorage = function(filename) {
    object = object || {};
    var key = object.filename;
    localStorage.removeItem(filename);
};

// rename methods

DKTools.FileManager.renameLocalFile = function(object) {
    object = object || {};
    var fs = this._fs;
    var path = object.path;
    var oldFilePath = this.filePath(path, object.oldName);
    var newFilePath = this.filePath(path, object.newName);
    if (fs.existsSync(oldFilePath) && !fs.existsSync(newFilePath)) {
        fs.renameSync(oldFilePath, newFilePath);
    }
};

DKTools.FileManager.renameWebStorage = function(oldName, newName) {
    var data = localStorage.getItem(oldName);
    if (data && !localStorage.getItem(newName)) {
        localStorage.setItem(newName, data);
        localStorage.removeItem(oldName);
    }
};

// exists methods

/**
 *
 *
 * @static
 * @param {String} path -
 * @return {Boolean}
 */
DKTools.FileManager.folderExists = function(path) {
    if (this.isLocalMode()) {
        return this.localFileExists(path);
    }
    return false;
};

DKTools.FileManager.localFileExists = function(path, filename) {
    var fs = this._fs;
    var filePath = this.filePath(path, filename);
    return fs.existsSync(filePath);
};

DKTools.FileManager.webStorageExists = function(filename) {
    return !!localStorage.getItem(filename);
};





//===========================================================================
// DKTools Localization
//===========================================================================

/**
 *
 *
 * @private
 * @readonly
 * @type {Object}
 * @memberOf DKTools.Localization
 */
DKTools.Localization._localization = {};

// properties

Object.defineProperties(DKTools.Localization, {

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
            this._setLocale(value);
        },
        configurable: true
    },

    /**
     *
     *
     * @readonly
     * @type {Object}
     * @memberOf DKTools.Localization
     */
    localization: {
        get: function() {
            return this._localization;
        }
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
    this.loadLocale();

    this.loadLocalization('Actors');
};

DKTools.Localization.localizedActors = {};

DKTools.Localization.localizeActor = function(actor) {
    var key = 'Actor ' + actor.actorId();
    var locale = this.locale;
    var localized = {};

    if (this.localizedActors[key] && this.localizedActors[key][locale]) {
        return this.localizedActors[key][locale];
    }

    localized.name = DKTools.Localization.localization.Actors[key].name[locale];
    localized.profile = DKTools.Localization.localization.Actors[key].profile[locale];

    this.localizedActors[key] = this.localizedActors[key] || {};
    this.localizedActors[key][locale] = localized;

    return localized;
};

// Window_Status.prototype.drawProfile = function(x, y) {
//     var localized = DKTools.Localization.localizeActor(this._actor);
//     this.drawTextEx(localized.profile, x, y);
// };

// other methods

/**
 * @static
 * @param {String} pluginName - Название плагина
 * @returns {Boolean}
 */
DKTools.Localization.loadLocalization = function(pluginName) {
    var object = {
        path: 'js/plugins/',
        filename: pluginName + '.json',
        decompress: false,
        parse: true
    }
    var data = DKTools.FileManager.loadFromLocalFile(object);
    if (data) {
        this._localization[pluginName] = data;
        return true;
    }
    return false;
};

DKTools.Localization.saveLocale = function() {
    if (DKTools.FileManager.isLocalMode()) {
        DKTools.FileManager.saveToLocalFile({
            path: 'save/',
            filename: 'locale.rpgsave',
            data: this._locale,
            stringify: false,
            compress: false
        });
    } else {
        DKTools.FileManager.saveToWebStorage({
            filename: 'RPG Locale',
            data: this._locale,
            stringify: false,
            compress: false
        });
    }
};

DKTools.Localization.loadLocale = function() {
    var locale = null;
    if (DKTools.FileManager.isLocalMode()) {
        locale = DKTools.FileManager.loadFromLocalFile({
            path: 'save/',
            filename: 'locale.rpgsave',
            decompress: false,
            parse: false
        });
    } else {
        locale = DKTools.FileManager.loadFromWebStorage({
            filename: 'RPG Locale',
            decompress: false,
            parse: false
        });
    }

    /**
     * @private
     * @type {String}
     */
    this._locale = locale || DKToolsParam.locale;
};

DKTools.Localization._setLocale = function(locale) {
    if (this._locale !== locale) {
        var lastLocale = this._locale;
        this._locale = locale;
        this.saveLocale();
        this.onLocaleChange(lastLocale);
    }
};

/**
 * Обрабатывает изменение локали игры
 *
 * @static
 * @param {String} lastLocale - Предыдущая локаль игры
 */
DKTools.Localization.onLocaleChange = function(lastLocale) {
};

DKTools.Localization.translate = function(param) {
    var pluginLocalization = this._localization[this._pluginName];
    var locale = this._locale;
    if (!pluginLocalization) {
        var error = 'undefined plugin: "%1"'.format(this._pluginName);
        throw new Error(error);
    }
    var paramTranslation = pluginLocalization[param];
    if (!paramTranslation) {
        var error = '%1: undefined parameter: "%2"'.format(this._pluginName, param);
        throw new Error(error);
    }
    var result = paramTranslation[locale];
    if (!result) {
        var error = '%1: undefined locale: "%2"'.format(this._pluginName, locale);
        throw new Error(error);
    }
    return result;
};

/**
 *
 *
 *
 * @static
 *
 * @param {Object} object -
 *
 * @param {String} object.text -
 * @param {Number | String} [object.key] -
 * @param {Array} [object.format] -
 *
 * @return {String}
 */
DKTools.Localization.localize = function(object) {
    object = object || {};
    var text = object.text;
    var key = object.key;
    var format = object.format;
    var string = text.replace(/#([^#]+)#/g, this.parser.bind(this, key));
    if (format instanceof Array) {
        return this.format(string, format);
    }
    return string;
};

DKTools.Localization.parser = function(key, match, param) {
    var object = this.translate(param);
    if (object instanceof Object) {
        return object[key];
    }
    return object;
};

/**
 * @static
 * @param {String} pluginName -
 */
DKTools.Localization.setupPlugin = function(pluginName) {
    this._pluginName = pluginName;
};

/**
 *
 *
 *
 * @static
 *
 * @param {String} string -
 * @param {Array} params -
 *
 * @return {String}
 */
DKTools.Localization.format = function(string, params) {
    return string.replace(/%([0-9]+)/g, function (s, n) {
        return params[Number(n) - 1];
    });
};





//===========================================================================
// SceneManager
//===========================================================================

var DKTools_SceneManager_initialize = SceneManager.initialize;
SceneManager.initialize = function() {
    DKTools_SceneManager_initialize.call(this);
    DKTools.Utils.initialize();
    DKTools.FileManager.initialize();
    DKTools.Localization.initialize();
    DKTools.PluginManager.initialize();
};





//===========================================================================
// TouchInput
//===========================================================================

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
 * @return {String}
 */
DKTools.Audio.audioFileExt = function() {
    if (WebAudio.canPlayOgg() && !DKTools.Utils.isMobileDevice()) {
        return '.ogg';
    }
    return '.m4a';
};

/**
 *
 *
 * @static
 * @return {Boolean}
 */
DKTools.Audio.shouldUseHtml5Audio = function() {
    return DKTools.Utils.isAndroidChrome();
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
     * @type {String}
     */
    this._type = object.type.toLowerCase();

    /**
     * Название аудиофайла
     *
     * @private
     * @type {String}
     */
    this._name = object.name;

    /**
     * Громкость аудиофайла
     *
     * @private
     * @type {Number}
     */
    this._volume = (_.isFinite(object.volume) ? object.volume : this.standardVolume());

    /**
     * Темп аудиофайла
     *
     * @private
     * @type {Number}
     */
    this._pitch = (_.isFinite(object.pitch) ? object.pitch : this.standardPitch());

    /**
     * Панорама аудиофайла
     *
     * @private
     * @type {Number}
     */
    this._pan = (_.isFinite(object.pan) ? object.pan : this.standardPan());

    /**
     * Зацикливание аудиофайла
     *
     * @private
     * @type {Boolean}
     */
    this._loop = (_.isBoolean(object.loop) ? object.loop : this.standardLoop());

    /**
     * Аудио буфер
     *
     * @private
     * @type {WebAudio | Html5Audio}
     */
    this._buffer = this._createBuffer();

    /**
     *
     *
     * @private
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
    return 100;
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
    if (DKTools.Audio.shouldUseHtml5Audio() && folder === 'bgm') {
        Html5Audio.setup(url);
        return Html5Audio;
    } else {
        return new WebAudio(url);
    }
};

/**
 * Возвращает true, если объекты аудиофайлов равны
 *
 * @param {DKTools.Audio | Object} object - Объект аудиофайла или Объект типа {}
 *
 * @param {String} object.type - Тип аудиофайла
 * @param {String} object.name - Названия аудиофайла
 * @param {Number} [object.volume] - Громкость
 * @param {Number} [object.pitch] - Темп
 * @param {Number} [object.pan] - Панорама
 * @param {Boolean} [object.loop] - Зацикливание аудиофайла
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
     * @type {Sprite | Window | *}
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
     * Длительность события
     *
     * @type {Number}
     * @memberOf DKTools.Event
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
     * @memberOf DKTools.Event
     */
    onStart: {
        get: function() {
            return this._onStart;
        },
        configurable: true
    },

    /**
     * Обработчик события
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
     * Обработчик окончания работы события
     *
     * @readonly
     * @type {Function}
     * @memberOf DKTools.Event
     */
    onFinish: {
        get: function() {
            return this._onFinish;
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
     * Длительность паузы события
     *
     * @type {Number}
     * @memberOf DKTools.Event
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

// initialize methods

/**
 * Инициализирует объект класса
 *
 * @param {Object} object
 * @param {DKTools.Sprite | DKTools.Window | *} [target] - Объект, для которого установлено событие
 *
 * @param {String} [object.type] - Тип события
 * @param {Number} [object.duration] - Длительность события
 * @param {Function} [object.onStart] - Обработчик начала работы события
 * @param {Function} object.onUpdate - Обработчик события
 * @param {Function} [object.onFinish] - Обработчик окончания работы события
 * @param {Function} [object.onPause] - Обработчик паузы события
 */
DKTools.Event.prototype.initialize = function(object, target) {
    object = object || {};

    /**
     * @private
     */
    this._target = target;

    /**
     * @private
     * @type {String}
     */
    this._type = object.type;

    /**
     * @private
     * @type {Number}
     */
    this._duration = object.duration || -1;

    /**
     * @private
     * @type {Funciton}
     */
    this._onStart = object.onStart;

    /**
     * @private
     * @type {Function}
     */
    this._onUpdate = object.onUpdate;

    /**
     * @private
     * @type {Funciton}
     */
    this._onFinish = object.onFinish;

    /**
     * @private
     * @type {Funciton}
     */
    this._onPause = object.onPause;

    /**
     * @private
     * @type {Number}
     */
    this._pauseDuration = 0;

    /**
     * @private
     * @type {Boolean}
     */
    this._started = false;
};

// has methods

/**
 * @return {Boolean}
 */
DKTools.Event.prototype.hasTarget = function() {
    return !!this._target;
};

/**
 * @return {Boolean}
 */
DKTools.Event.prototype.hasType = function() {
    return !!this._type;
};

// _can methods

/**
 * Проверяет обработчик начала работы события на возможность вызова
 * Возвращает true, если можно вызвать обработчик начала работы события
 *
 * @private
 * @return {Boolean} Можно вызвать обработчик начала работы события
 */
DKTools.Event.prototype._canCallOnStartCallback = function() {
    return !!this._onStart && !this.isStarted();
};

/**
 * Проверяет обработчик события на возможность вызова
 * Возвращает true, если можно вызвать обработчик события
 *
 * @private
 * @return {Boolean} Можно вызвать обработчик события
 */
DKTools.Event.prototype._canCallOnUpdateCallback = function() {
    return !!this._onUpdate && !this.isPaused();
};

/**
 * Проверяет обработчик окончания работы события на возможность вызова
 * Возвращает true, если можно вызвать обработчик окончания работы события
 *
 * @private
 * @return {Boolean} Можно вызвать обработчик окончания работы события
 */
DKTools.Event.prototype._canCallOnFinishCallback = function() {
    return !!this._onFinish && this.isFinished();
};

/**
 * @private
 * @return {Boolean}
 */
DKTools.Event.prototype._canCallOnPauseCallback = function() {
    return !!this._onPause && this.isPaused();
};

// _call methods

/**
 * Вызывает обработчик начала работы события
 *
 * @private
 */
DKTools.Event.prototype._callOnStartCallback = function() {
    if (this._canCallOnStartCallback()) {
        this._onStart(this);
        this._started = true;
    }

};

/**
 * Вызывает обработчик события
 *
 * @private
 */
DKTools.Event.prototype._callOnUpdateCallback = function() {
    if (this._canCallOnUpdateCallback()) {
        this._onUpdate(this);
    }
};

/**
 * Вызывает обработчик окончания работы события
 *
 * @private
 */
DKTools.Event.prototype._callOnFinishCallback = function() {
    if (this._canCallOnFinishCallback()) {
        this._onFinish(this);
    }
};

/**
 * @private
 */
DKTools.Event.prototype._callOnPauseCallback = function() {
    if (this._canCallOnPauseCallback()) {
        this._onPause(this);
    }
};

// is methods

/**
 * @return {Boolean}
 */
DKTools.Event.prototype.isStarted = function() {
    return this._started;
};

/**
 * @return {Boolean}
 */
DKTools.Event.prototype.isUpdating = function() {
    return this.isStarted() && !this.isPaused() && !this.isFinished();
};

/**
 * @return {Boolean}
 */
DKTools.Event.prototype.isFinished = function() {
    return this._duration === 0;
};

/**
 * Проверяет событие на паузу
 * Возвращает true, если событие приостановлено
 *
 * @return {Boolean} Событие приостановлено
 */
DKTools.Event.prototype.isPaused = function() {
    return this._pauseDuration !== 0;
};

// other methods

/**
 * Ставит событие на паузу
 *
 * @param {Number} duration - Длительность паузы
 */
DKTools.Event.prototype.pause = function(duration) {
    this._pauseDuration = duration || -1;
};

/**
 * Снимает событие с паузы
 */
DKTools.Event.prototype.resume = function() {
    this._pauseDuration = 0;
};

/**
 * Удаляет событие
 */
DKTools.Event.prototype.remove = function() {
    if (this.hasTarget()) {
        this._target.removeEvent(this);
    }
};

// add methods

/**
 * Добавляет длительность события
 *
 * @param {Number} duration - Длительность события
 */
DKTools.Event.prototype.addDuration = function(duration) {
    this._duration += duration;
};

/**
 * Добавляет продолжительность паузы
 *
 * @param {Number} duration - Длительность паузы события
 */
DKTools.Event.prototype.addPauseDuration = function(duration) {
    this._pauseDuration += duration;
};

// _update methods

/**
 * Обновляет длительность события
 *
 * @private
 */
DKTools.Event.prototype._updateDuration = function() {
    if (this._duration > 0) {
        this._duration--;
    }
};

/**
 * @private
 */
DKTools.Event.prototype._updateEvent = function() {
    this._callOnUpdateCallback();
    this._updateDuration();
};

/**
 * Обновляет длительность паузы события
 *
 * @private
 */
DKTools.Event.prototype._updatePauseDuration = function() {
    if (this._pauseDuration > 0) {
        this._pauseDuration--;
    }
};

/**
 * @private
 */
DKTools.Event.prototype._updatePause = function() {
    this._callOnPauseCallback();
    this._updatePauseDuration();
};

// update methods

/**
 * Обновляет событие
 */
DKTools.Event.prototype.update = function() {
    if (!this.isPaused()) {
        this._callOnStartCallback();
        this._updateEvent();
        this._callOnFinishCallback();
    } else {
        this._updatePause();
    }
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
    }

});

// initialize methods

/**
 * Инициализирует объект класса
 *
 * @param {Number | Rectangle | Object} [object] - Координата X или Rectangle, или Объект типа {}
 * @param {Number} [y] - Координата Y
 * @param {Number} [width] - Ширина
 * @param {Number} [height] - Высота
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
    this._setupAll();
    this._createAll();
    var x;
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
    this._clearEvents();
    this._clearOptions();
};

/**
 * Очищает события
 *
 * @private
 */
DKTools.Base.prototype._clearEvents = function() {
    this.clearEvents();
};

/**
 * Очищает опции
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

// clear methods

/**
 * Очищает события
 *
 * @param {String[] | String} object - Массив с типами событий или тип события
 */
DKTools.Base.prototype.clearEvents = function(object) {
    if (object) {
        if (object instanceof Array) {
            object.forEach(function(type) {
                this._events[type] = [];
            }, this);
        } else {
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
    this.setText('', blockStart);
};

// _setup methods

/**
 * Устанавливает все данные
 *
 * @private
 */
DKTools.Base.prototype._setupAll = function() {
    this._setupEvents();
    this._setupOptions();
};

/**
 * Устанавливает события
 *
 * @private
 */
DKTools.Base.prototype._setupEvents = function() {
};

/**
 * Устанавливает символы
 *
 * @private
 */
DKTools.Base.prototype._setupOptions = function() {
};

// _create methods

/**
 * Создает необходимые объекты
 *
 * @private
 */
DKTools.Base.prototype._createAll = function() {
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
    return {
        fill: 'white',
        strokeThickness: 3,
        fontFamily: 'GameFont',
        fontSize: 28
    };
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
    var scale = DKTools.Utils.Point.convertToPoint(object, y);
    var newScale = Object.assign(this.standardScale(), scale);

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
    var pivot = DKTools.Utils.Point.convertToPoint(object, y);
    var newPivot = Object.assign(this.standardPivot(), pivot);

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
    var skew = DKTools.Utils.Point.convertToPoint(object, y);
    var newSkew = Object.assign(this.standardSkew(), skew);

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
    var lastX = this.scale.x;
    var lastY = this.scale.y;
    // object - Number
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
    var lastX = this.pivot.x;
    var lastY = this.pivot.y;
    // object - Number
    if (lastX === object && lastY === y) {
        return false;
    }
    this.setupPivot(object, y);
    return lastX !== this.pivot.x || lastY !== this.pivot.y;
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
    var lastX = this.skew.x;
    var lastY = this.skew.y;
    // object - Number
    if (lastX === object && lastY === y) {
        return false;
    }
    this.setupSkew(object, y);
    return lastX !== this.skew.x || lastY !== this.skew.y;
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
    var lastRotation = this.rotation;
    this.setupRotation(rotation);
    return lastRotation !== this.rotation;
};

// start methods

/**
 * Запускает работу объекта
 *
 * @param {Boolean} [activate] - Активировать объект
 */
DKTools.Base.prototype.start = function(activate) {
    this._started = true;
    this.removeAll();
    this.checkAll();
    this.createAll();
    this.startAll();
    this.refreshAll();
    this.updateStartEvents();
    if (activate) {
        this.activate();
    }
};

/**
 * Запускает работу всех объектов
 */
DKTools.Base.prototype.startAll = function() {
};

// remove methods

/**
 * Удаляет все объекты
 */
DKTools.Base.prototype.removeAll = function() {
};

/**
 * @param {PIXI.Text} text
 */
DKTools.Base.prototype.removeText = function(text) {
    if (text instanceof PIXI.Text) {
        this.removeChild(text);
    }
};

// _check methods

/**
 * Сравнивает ширину с минимальной и максимальной
 * Возвращает ширину из диапазона
 *
 * @private
 * @param {Number} width - Ширина
 * @return {Number} Ширина из диапазона
 *
 */
DKTools.Base.prototype._checkWidth = function(width) {
    var minWidth = this.minWidth();
    return (width ? Math.max(minWidth, width) : minWidth);
};

/**
 * Сравнивает высоту с минимальной и максимальной
 * Возвращает высоту из диапазона
 *
 * @private
 * @param {Number} height - Высота
 * @return {Number} Высота из диапазона
 *
 */
DKTools.Base.prototype._checkHeight = function(height) {
    var minHeight = this.minHeight();
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
};

// create methods

/**
 * Создает все объекты
 */
DKTools.Base.prototype.createAll = function() {
};

// refresh methods

/**
 * Обновляет и перерисовывает все
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
 */
DKTools.Base.prototype.redrawAll = function() {
    this.clear();
    this.drawAll();
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
    var clone = new (this.constructor)(this);
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
    var x = object;
    if (object instanceof Object) {
        x = object.x;
        y = object.y;
    }
    this.x = x || 0;
    this.y = y || 0;
};

// uncategorized methods

/**
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
    // object - Bitmap
    var bitmap = object;
    // object - Object
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
 * @return {Number} Высота линии
 */
DKTools.Base.prototype.lineHeight = function() {
    return Window_Base.prototype.lineHeight.call(this);
};

/**
 * Возвращает минимальную ширину Bitmap
 *
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
 * @return {Number} Минимальная высота Bitmap
 */
DKTools.Base.prototype.minHeight = function() {
    return (this.hasText() ? this.lineHeight() : 0);
};

// has methods

/**
 * Проверяет объект на наличие Bitmap
 * Возвращает true, если Bitmap есть
 *
 * @return {Boolean} Bitmap есть
 */
DKTools.Base.prototype.hasBitmap = function() {
    // for compatibility with Window
    try {
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
    return false;
};

/**
 * Возвращает true, если объект является окном
 *
 * @return {Boolean} Объект является окном
 */
DKTools.Base.prototype.isWindow = function() {
    return false;
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
    this.bitmap.drawLine(object || 0, y1 || 0, x2 || 0, y2 || 0, color, lineWidth || 1);
    return true;
};

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
    this.bitmap.strokeRect(object || 0, y || 0, width, height, color, lineWidth || 1);
    return true;
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
    this.bitmap.fillArc(object || 0, y || 0, radius || 1, startAngle, endAngle, color, antiClockwise);
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
    this.bitmap.strokeArc(object || 0, y || 0, radius || 1, startAngle, endAngle, color, antiClockwise, lineWidth || 1);
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

    var bitmap = this.bitmapFromObject(object);

    if (!bitmap) {
        return false;
    }

    source = Object.assign(source || {}, Rectangle.emptyRectangle);
    destination = Object.assign(destination || {}, Rectangle.emptyRectangle);

    bitmap.addLoadListener(function() {
        var sx = source.x || 0;
        var sy = source.y || 0;
        var sw = source.width || bitmap.width;
        var sh = source.height || bitmap.height;
        var dx = destination.x || 0;
        var dy = destination.y || 0;
        var dw = destination.width || sw;
        var dh = destination.height || sh;
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
    var bitmap = ImageManager.loadSystem('IconSet');
    var pw = Window_Base._iconWidth;
    var ph = Window_Base._iconHeight;
    var sx = iconIndex % 16 * pw;
    var sy = Math.floor(iconIndex / 16) * ph;
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
    var bitmap = ImageManager.loadFace(faceName);
    var pw = Window_Base._faceWidth;
    var ph = Window_Base._faceHeight;
    var sw = Math.min(width, pw);
    var sh = Math.min(height, ph);
    // object - Number
    var dx = Math.floor(object || 0 + Math.max(width - pw, 0) / 2);
    var dy = Math.floor(y || 0 + Math.max(height - ph, 0) / 2);
    var sx = faceIndex % 4 * pw + (pw - sw) / 2;
    var sy = Math.floor(faceIndex / 4) * ph + (ph - sh) / 2;
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
    var bitmap = ImageManager.loadCharacter(characterName);
    var big = ImageManager.isBigCharacter(characterName);
    var pw = bitmap.width / (big ? 3 : 12);
    var ph = bitmap.height / (big ? 4 : 8);
    var n = characterIndex;
    var sx = (n % 4 * 3 + 1) * pw;
    var sy = (Math.floor(n / 4) * 4) * ph;
    // object - Number
    this.bitmap.blt(bitmap, sx, sy, pw, ph, object || 0 - pw / 2, y || 0 - ph);
    return true;
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

// options methods

/**
 * Возвращает true, если опция включена
 *
 * @param {String} option - Название опции
 * @return {Boolean} Опция включена
 */
DKTools.Base.prototype.isOptionEnabled = function(option) {
    return this._options.contains(option);
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
    var options = (arguments.length > 1 ? arguments : object);
    _.each(options, this.enableOption.bind(this));
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
    var options = (arguments.length > 1 ? arguments : object);
    _.each(options, this.disableOption.bind(this));
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
    var options = (arguments.length > 1 ? arguments : object);
    _.each(options, this.switchOption.bind(this));
};

/**
 * Возвращает конъюнкцию опций
 *
 * @param {String[] | ...String} object - Массив названий опций или перечисление названий опций
 * @return {Boolean} Конъюнкция опций
 */
DKTools.Base.prototype.isOptionsEnabled = function(object) {
    var options = (arguments.length > 1 ? arguments : object);
    return DKTools.Utils.Array.conjunction(_.map(options, this.isOptionEnabled.bind(this)));
};

/**
 * Возвращает конъюнкцию опций
 *
 * @param {String[] | ...String} object - Массив названий опций или перечисление названий опций
 * @return {Boolean} Конъюнкция опций
 */
DKTools.Base.prototype.isOptionsDisabled = function(object) {
    var options = (arguments.length > 1 ? arguments : object);
    return DKTools.Utils.Array.conjunction(_.map(options, this.isOptionDisabled.bind(this)));
};

// event methods

DKTools.Base.prototype._checkEvent = function(event) {
    return event && !event.isFinished();
};

/**
 * Проверяет контейнер с событиями, удаляя завершенные события
 *
 * @private
 * @param {String} type - Тип события
 * @return {Array}
 */
DKTools.Base.prototype._checkEventContainer = function(type) {
    var container = this.eventContainerByType(type);
    return _.filter(container, this._checkEvent.bind(this));
};

/**
 * Проверяет события
 */
DKTools.Base.prototype._checkEvents = function() {
    for(var type in this._events) {
        this._events[type] = this._checkEventContainer(type);
    }
};

/**
 * Удаляет событие из контейнера
 * Возвращает true, если событие было удалено
 *
 * @param {DKTools.Event} event - Событие
 * @return {Boolean} Событие было удалено
 */
DKTools.Base.prototype.removeEvent = function(event) {
    var index = this.eventIndex(event);
    if (index >= 0) {
        var container = this.eventContainer(event);
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
DKTools.Base.prototype.iterateEventContainer = function(type, callback) {
    var container = this.eventContainerByType(type);
    container.forEach(callback);
};

/**
 * Проверяет события на паузу
 * Возвращает конъюнкцию пауз событий
 *
 * @param {String} type - Тип события
 * @return {Boolean} Конъюнкция пауз событий
 */
DKTools.Base.prototype.eventsIsPaused = function(type) {
    var container = this.eventContainerByType(type);
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
    var container = this.eventContainerByType(type);
    _.each(container, function(event) {
        event.pause(duration);
    }.bind(this));

    // var callback = function(event) {
    //     event.pause(duration);
    // }.bind(this);
    // this.iterateEventContainer(type, callback);
};

/**
 * Снимает события с паузы
 *
 * @param {String} type - Тип события
 */
DKTools.Base.prototype.resumeEvents = function(type) {
    var container = this.eventContainerByType(type);
    _.each(container, function(event) {
        event.resume();
    }.bind(this));

    // var callback = function(event) {
    //     event.resume();
    // }.bind(this);
    // this.iterateEventContainer(type, callback);
};

/**
 * Обновляет события
 */
DKTools.Base.prototype.updateEvents = function() {
    if (!this.hasEvents()) {
        return;
    }
    this._checkEvents();
    this.updateReadyEvents();
    this.updateUpdateEvents();
    this.updateFreeEvents();
    this.updateQueueEvents();
};

/**
 * Обновляет событие
 *
 * @param {DKTools.Event} event - Событие
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
DKTools.Base.prototype.updateEventContainer = function(type) {
    var container = this.eventContainerByType(type);
    _.each(container, this.updateEvent.bind(this));

    // var callback = function(event) {
    //     this.updateEvent(event);
    // }.bind(this);
    // this.iterateEventContainer(type, callback);
};

/**
 * Обновляет события типа start
 */
DKTools.Base.prototype.updateStartEvents = function() {
    if (this.isStarted()) {
        this.updateEventContainer('start');
    }
};

/**
 * Обновляет события типа ready
 */
DKTools.Base.prototype.updateReadyEvents = function() {
    if (this.isReady()) {
        this.updateEventContainer('ready');
    }
};

/**
 * Обновляет события типа update
 */
DKTools.Base.prototype.updateUpdateEvents = function() {
    this.updateEventContainer('update');
};

/**
 * Обновляет события типа free
 */
DKTools.Base.prototype.updateFreeEvents = function() {
    if (!this.isBusy()) {
        this.updateEventContainer('free');
    }
};

/**
 * Обновляет события типа queue
 */
DKTools.Base.prototype.updateQueueEvents = function() {
    var container = this.eventContainerByType('queue');
    var event = container[0];
    this.updateEvent(event);
};

/**
 * Обновляет события типа activate
 */
DKTools.Base.prototype.updateActivateEvents = function() {
    this.updateEventContainer('activate');
};

/**
 * Обновляет события типа deactivate
 */
DKTools.Base.prototype.updateDeactivateEvents = function() {
    this.updateEventContainer('deactivate');
};

/**
 * Обновляет события типа show
 */
DKTools.Base.prototype.updateShowEvents = function() {
    this.updateEventContainer('show');
};

/**
 * Обновляет события типа hide
 */
DKTools.Base.prototype.updateHideEvents = function() {
    this.updateEventContainer('hide');
};

/**
 * Создает контейнер для событий
 *
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

    // return container || this.createEventContainer(type);
    // return container ? container : this.createEventContainer(type);
};

/**
 * Возвращает контейнер для событий по событию
 *
 * @param {DKTools.Event} event - Событие
 * @return {Array} Контейнер с событиями
 */
DKTools.Base.prototype.eventContainer = function(event) {
    return this.eventContainerByType(event.type);
};

/**
 * Возвращает индекс события в его контейнере
 *
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
 * @param {String} [type] - Тип события
 * @return {Boolean} События есть
 */
DKTools.Base.prototype.hasEvents = function(type) {
    return this.events(type).length > 0;
};



DKTools.Base.prototype.addEventToContainer = function(event) {
    if (event) {
        var container = this.eventContainer(event);
        container.push(event);
    }
};

/**
 * Добавляет событие
 *
 * @param {String} type - Тип события
 * @param {Function} [handler] - Обработчик события
 * @param {Number} [duration] - Длительность события
 * @param {Function} [onStartHandler] - Обработчик начала работы события
 * @param {Function} [onEndHandler] - Обработчик окончания работы события
 *
 * @return {DKTools.Event} Добавленное событие
 */
DKTools.Base.prototype.addEvent = function(object) {
    var event;
    if (object instanceof DKTools.Event) {
        event = object;
    } else {
        event = new DKTools.Event(object, this);
    }
    this.addEventToContainer(event);
    return event;
};

/**
 * Добавляет одноразовое событие
 *
 * @param {Object} object -
 *
 * @param {String} object.type - Тип события
 * @param {Function} object.onUpdate - Обработчик события
 *
 * @return {DKTools.Event} Добавленное событие
 */
DKTools.Base.prototype.addOneTimeEvent = function(object) {
    object.duration = 1;
    return this.addEvent(object);
};

// add methods

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
    var textSprite;
    if (text instanceof PIXI.Text) {
        textSprite = text;
    } else {
        textSprite = new PIXI.Text(text, Object.assign(this.standardTextStyle(), style));
    }
    this.addChild(textSprite);
    return textSprite;
};

// process methods

/**
 * Выполняет все
 */
DKTools.Base.prototype.processAll = function() {
};

// update methods

/**
 * Обновляет все
 */
DKTools.Base.prototype.updateAll = function() {
};

/**
 * Обновляет объект
 */
DKTools.Base.prototype.update = function() {
    this.processAll();
    this.updateEvents();
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
        this.drawText(this.text);
    }
};

/**
 * Обновляет данные ввода
 */
DKTools.Base.prototype.updateInputData = function() {
    SceneManager.updateInputData();
};

// alpha methods

DKTools.Base.prototype.movePivot = function(position) {
    var x = this.x - this.pivot.x;
    var y = this.y - this.pivot.y
    var pivotX, pivotY;
    this.addEventListener('ready', function() {
        switch (position) {
            case 'left-top':
                pivotX = 0;
                pivotY = 0;
                break;
            case 'left-middle':
                pivotX = 0;
                pivotY = this.bitmap.height / 2;
                y += pivotY;
                break;
            case 'left-bottom':
                pivotX = 0;
                pivotY = this.bitmap.height;
                y += pivotY;
                break;
            case 'center-top':
                pivotX = this.bitmap.width / 2;
                pivotY = 0;
                x += pivotX;
                break;
            case 'center':
                pivotX = this.bitmap.width / 2;
                pivotY = this.bitmap.height / 2;
                x += pivotX;
                y += pivotY;
                break;
            case 'center-bottom':
                pivotX = this.bitmap.width / 2;
                pivotY = this.bitmap.height;
                x += pivotX;
                y += pivotY;
                break;
            case 'right-top':
                pivotX = this.bitmap.width;
                pivotY = 0;
                x += pivotX;
                break;
            case 'right-middle':
                pivotX = this.bitmap.width;
                pivotY = this.bitmap.height / 2;
                x += pivotX;
                y += pivotY;
                break;
            case 'right-bottom':
                pivotX = this.bitmap.width;
                pivotY = this.bitmap.height;
                x += pivotX;
                y += pivotY;
                break;
        }
        this.setupPivot(pivotX, pivotY);
        this.move(x, y);
    }.bind(this));
};

DKTools.Base.prototype.moveAnchor = function(position) {

};

// beta methods

/**
 * Изменяет цвет текста
 *
 * @param {String} color - Цвет текста
 */
DKTools.Base.prototype.changeTextColor = function(color) {
    this.setupTextColor(color);
    this.updateTextColor();
};

DKTools.Base.prototype.convertEscapeCharacters = function(text) {
    return Window_Base.prototype.convertEscapeCharacters.call(this, text);
};

DKTools.Base.prototype.actorName = function(n) {
    return Window_Base.prototype.actorName.call(this, n);
};

DKTools.Base.prototype.partyMemberName = function(n) {
    return Window_Base.prototype.partyMemberName.call(this, n);
};

DKTools.Base.prototype.processCharacter = function(textState) {
    Window_Base.prototype.processCharacter.call(this, textState);
};

DKTools.Base.prototype.processNormalCharacter = function(textState) {
    var c = textState.text[textState.index++];
    var w = this.textWidth(c);
    this.bitmap.drawText(c, textState.x, textState.y, w * 2, textState.height);
    textState.x += w;
};

DKTools.Base.prototype.processNewLine = function(textState) {
    Window_Base.prototype.processNewLine.call(this, textState);
};

DKTools.Base.prototype.processNewPage = function(textState) {
    Window_Base.prototype.processNewPage.call(this, textState);
};

DKTools.Base.prototype.obtainEscapeCode = function(textState) {
    return Window_Base.prototype.obtainEscapeCode.call(this, textState);
};

DKTools.Base.prototype.obtainEscapeParam = function(textState) {
    return Window_Base.prototype.obtainEscapeParam.call(this, textState);
};

DKTools.Base.prototype.processEscapeCharacter = function(code, textState) {
    switch (code) {
        case 'W':
            var duration = this.obtainEscapeParam(textState);
            textState.event.pause(duration);
            break;
        case 'S':
            textState.pauseDuration = this.obtainEscapeParam(textState);
            break;
        default:
            Window_Base.prototype.processEscapeCharacter.call(this, code, textState);
            break;
    }
};

DKTools.Base.prototype.processDrawIcon = function(iconIndex, textState) {
    Window_Base.prototype.processDrawIcon.call(this, iconIndex, textState);
};

DKTools.Base.prototype.makeFontBigger = function() {
    if (this.bitmap.fontSize <= 96) {
        this.bitmap.fontSize += 12;
    }
};

DKTools.Base.prototype.makeFontSmaller = function() {
    if (this.bitmap.fontSize >= 24) {
        this.bitmap.fontSize -= 12;
    }
};

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

DKTools.Base.prototype.isEndOfText = function(textState) {
    return textState.index >= textState.text.length;
};

DKTools.Base.prototype._updateDrawTextEx = function(textState, event) {
    if (textState) {
        this.processCharacter(textState);
        if (this.isEndOfText(textState)) {
            this.removeEvent(event);
        }
        if (!this.isWaiting()) {
            var duration = textState.pauseDuration;
            if (duration > 0) {
                event.pause(duration);
            }
        }
    }
};

DKTools.Base.prototype.drawTextEx = function(text, pauseDuration, object, y) {
    text = String(text);
    if (!this.hasBitmap() || !text) {
        return null;
    }
    if (object && (object.constructor === Point || object.constructor === Object)) {
        return this.drawTextEx(text, pauseDuration, object.x, object.y);
    }
    var x = object || 0;
    y = y || 0;
    var textState = { index: 0, x: x, y: y, left: x };
    textState.text = this.convertEscapeCharacters(text);
    textState.height = this.calcTextHeight(textState, false);
    var event = this.addEventHandler('update', this._updateDrawTextEx.bind(this, textState));
    textState.event = event;
    textState.pauseDuration = pauseDuration || 0;
    return event;
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
     * Ширина спрайта
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
     * Высота спрайта
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
    },

    /**
     * Количество пикселей прокрутки мыши по оси X внутри спрайта
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Sprite
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
     * @memberOf DKTools.Sprite
     */
    wheelY: {
        get: function() {
            return this._wheelY;
        },
        configurable: true
    }

});

// initialize method

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
    if (object && object.constructor === Object) {
        this.setupFixedBitmap(object);
    }
    DKTools.Sprite._counter++;
};

// _clear methods

/**
 * Очищает все данные спрайта
 *
 * @private
 * @override
 */
DKTools.Sprite.prototype._clearAll = function() {
    DKTools.Base.prototype._clearAll.call(this);
    this._clearWheelX();
    this._clearWheelY();
    this._clearMouseEnteredTime();
};

DKTools.Sprite.prototype._clearWheelX = function() {
    this._wheelX = 0;
};

DKTools.Sprite.prototype._clearWheelY = function() {
    this._wheelY = 0;
};

/**
 * Сбрасывает счетчик нахождения мыши внутри спрайта
 *
 * @private
 */
DKTools.Sprite.prototype._clearMouseEnteredTime = function() {
    this._mouseEnteredTime = 0;
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
 * @param {Number} [object.longPressInterval] - Интервал длительного нажатия
 * @param {String} [object.graphicFolder] - Путь к файлу графики
 * @param {String} [object.graphicName] - Название файла графики
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


    this.setupFixedBitmap(object.bitmap);

    // this.setupBitmap(object.bitmap);
    this.setupOpacity(object.opacity);

    this.setupGraphicFolder(object.graphicFolder);
    this.setupGraphicName(object.graphicName);

    // this.setupFrame(object.frame);
    this.setupAnchor(object.anchor);
};

/**
 * Устанавливает ширину Bitmap
 *
 * @param {Number} [width] - Ширина Bitmap
*/
DKTools.Sprite.prototype.setupWidth = function(width) {
	this._bitmapWidth = this._checkWidth(width);
};

/**
 * Устанавливает высоту Bitmap
 *
 * @param {Number} [height] - Высота Bitmap
*/
DKTools.Sprite.prototype.setupHeight = function(height) {
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
    if (object && object.constructor === Object) {
        return this.setupSize(object.width, object.height);
    }
    this.setupWidth(object);
    this.setupHeight(height);
};

DKTools.Sprite.prototype.setupFixedBitmap = function(object) {
    this._setupBitmap(object);
    this._fixedBitmap = !!this.bitmap;
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
DKTools.Sprite.prototype._setupBitmap = function(object) {
    var bitmap = this.bitmapFromObject(object);
    if (bitmap) {
        this.bitmap = DKTools.Utils.Bitmap.clone(bitmap);
        this.bitmap.addLoadListener(function() {
            this.setupSize(this.bitmap.width, this.bitmap.height);
        }.bind(this));
    } else {
        this.bitmap = null;
    }
};

// DKTools.Sprite.prototype._onBitmapLoad = function() {
//     Sprite.prototype._onBitmapLoad.call(this);
//     if (this.isFixedBitmap()) {
//         var bitmap = this.bitmap;
//         this.setupSize(bitmap.width, bitmap.height);
//     }
// };

/**
 * Устанавливает прозрачность спрайта
 *
 * @param {Number} [opacity] - Прозрачность спрайта
 */
DKTools.Sprite.prototype.setupOpacity = function(opacity) {
    this.opacity = (opacity == null ? this.standardOpacity() : opacity); // или this._opacity ?
};

/**
 * Устанавливает путь к файлу графики
 *
 * @param {String} [folder] - Путь к файлу графики
 */
DKTools.Sprite.prototype.setupGraphicFolder = function(folder) {
    this._graphicFolder = (folder == null ? this.standardGraphicFolder() : folder);
};

/**
 * Устанавливает название файла графики
 *
 * @param {String} [graphicName] - Название файла графики
 */
DKTools.Sprite.prototype.setupGraphicName = function(graphicName) {
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
    var frame = DKTools.Utils.Rectangle.convertToRectangle(object, y, width, height);
    var newFrame = Object.assign(this.standardFrame(), frame);
    Sprite.prototype.setFrame.call(this, newFrame.x, newFrame.y, newFrame.width, newFrame.height);
};

DKTools.Sprite.prototype.setupAnchor = function(object, y) {
    var anchor = DKTools.Utils.Point.convertToPoint(object, y);
    var newAnchor = Object.assign(this.standardAnchor(), anchor);

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
    var lastGraphic = this._graphicName;
    this.setupGraphicName(graphicName);
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
	this.setupFixedBitmap(object);
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

    var newFrame = DKTools.Utils.Rectangle.convertToRectangle(object, y, width, height);
    if (_.isEqual(this._frame, newFrame)) {
        return false;
    }
    var lastFrame = this._frame.clone();
    this.setupFrame(newFrame);
    return !_.isEqual(lastFrame, this._frame);

    // var standardFrame = this.standardFrame();
    // var lastFrame = this._frame.clone();
    // var newFrame = this._checkRectangle(object, y, width, height, standardFrame);
    // if (lastFrame.equals(newFrame)) {
    //     return false;
    // }
    // this.setupFrame(newFrame);
    // return !lastFrame.equals(this._frame);
};

DKTools.Sprite.prototype.setAnchor = function(object, y) {
    if (object instanceof Object) {
        return this.setAnchor(object.x, object.y);
    }
    var lastX = this.anchor.x;
    var lastY = this.anchor.y;
    // object - Number
    if (lastX === object && lastY === y) {
        return false;
    }
    this.setupAnchor(object, y);
    return lastX !== this.anchor.x || lastY !== this.anchor.y;
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
    }
    return true;
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
 * Возвращает true, если объект является спрайтом
 *
 * @override
 * @return {Boolean} Объект является спрайтом
 */
DKTools.Sprite.prototype.isSprite = function() {
    return true;
};

/**
 * Возвращает true, если спрайт является контейнером
 *
 * @return {Boolean} Спрайт является контейнером
 */
DKTools.Sprite.prototype.isLayout = function() {
    return false;
};

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
 * @param {Number} x - Координата X
 * @param {Number} y - Координата Y
 *
 * @return {Boolean} Координаты находятся внутри спрайта
 */
DKTools.Sprite.prototype.isInside = function(x, y) {
    var localX = this.canvasToLocalX(x);
    var localY = this.canvasToLocalY(y);
    return this.frame.contains(localX, localY);
};

/**
 * Возвращает true, если курсор мыши находится внутри спрайта
 *
 * @return {Boolean} Курсор мыши находится внутри спрайта
 */
DKTools.Sprite.prototype.isMouseEntered = function() {
    return this.isInside(TouchInput.mouseX, TouchInput.mouseY);
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
	var bitmap = ImageManager.loadBitmap(object, filename, hue, smooth);
	if (this.setBitmap(bitmap)) {
		if (listener) {
            this.bitmap.addLoadListener(listener);
        }
		return true;
	}
	return false;
};

// graphic methods

DKTools.Sprite.prototype.onGraphicLoadListener = function() {
};

/**
 * Загружает графику из названия файла графики
 *
 * @private
 */
DKTools.Sprite.prototype._loadGraphic = function() {
    if (this.hasGraphicName()) {
        var folder = this.graphicFolder;
        var filename = this.graphicName;
        var listener = this.onGraphicLoadListener.bind(this);
        this.loadBitmap(folder, filename, listener);
        this.updateReadyEvents();
    }
};


// event methods

/**
 * Обновляет события типа mouseEnter
 */
DKTools.Sprite.prototype.updateMouseEnterEvents = function() {
    this.updateEventContainer('mouseEnter');
};

/**
 * Обновляет события типа mouseStay
 */
DKTools.Sprite.prototype.updateMouseStayEvents = function() {
    this.updateEventContainer('mouseStay');
};

/**
 * Обновляет события типа mouseLeave
 */
DKTools.Sprite.prototype.updateMouseLeaveEvents = function() {
    this.updateEventContainer('mouseLeave');
};

/**
 * Обновляет события типа wheelX
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
 */
DKTools.Sprite.prototype.updateWheelEvents = function() {
    this.updateWheelXEvents();
    this.updateWheelYEvents();
};


// process methods

DKTools.Sprite.prototype.processAll = function() {
    DKTools.Base.prototype.processAll.call(this);
    if (!DKTools.Utils.isMobileDevice() && this.isOptionEnabled('mouseEnter')) {
        this.processMouseEnter();
    }
};

DKTools.Sprite.prototype.processMouseEnter = function() {
    if (this.isVisibleAndActive()) {

        if (this.isMouseEntered()) {

            this.updateWheelEvents();

            if (this._mouseEnteredTime === 0) {
                this.updateMouseEnterEvents();
            } else {
                this.updateMouseStayEvents();
            }

            this._mouseEnteredTime++;

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
    this.updateFont();
    this.updateTextColor();
    this.updatePaintOpacity();
};

/**
 * Обновляет спрайт
 *
 * @override
 */
DKTools.Sprite.prototype.update = function() {
    Sprite.prototype.update.call(this);
    DKTools.Base.prototype.update.call(this);
};





//===========================================================================
// Elements based on DKTools.Sprite
// Элементы, основанные на DKTools.Sprite
//===========================================================================





//===========================================================================
// DKTools Sprite Button
//===========================================================================

//===========================================================================
// DKTools Sprite Cursor
//===========================================================================

DKTools.Sprite.Cursor.prototype = Object.create(DKTools.Sprite.prototype);
DKTools.Sprite.Cursor.prototype.constructor = DKTools.Sprite.Cursor;

// _clear methods

DKTools.Sprite.Cursor.prototype._clearAll = function() {
    DKTools.Sprite.prototype._clearAll.call(this);
    this._clearRect();
    this._clearAnimationCount();
};

DKTools.Sprite.Cursor.prototype._clearRect = function() {
    this._rect = new Rectangle();
};

DKTools.Sprite.Cursor.prototype._clearAnimationCount = function() {
    this._animationCount = 0;
};

// _create methods

DKTools.Sprite.Cursor.prototype._createAll = function() {
    DKTools.Sprite.prototype._createAll.call(this);
    this._createWindowskin();
};

DKTools.Sprite.Cursor.prototype._createWindowskin = function() {
    var filename = this.standardWindowskin();
    this._windowskin = ImageManager.loadSystem(filename);
};

// set methods

DKTools.Sprite.Cursor.prototype.setRect = function(x, y, width, height) {
    var cx = Math.floor(x || 0);
    var cy = Math.floor(y || 0);
    var cw = Math.floor(width || 0);
    var ch = Math.floor(height || 0);
    var rect = this._rect;
    if (rect.x !== cx || rect.y !== cy || rect.width !== cw || rect.height !== ch) {
        this._rect.x = cx;
        this._rect.y = cy;
        this._rect.width = cw;
        this._rect.height = ch;
        this._refreshCursor();
    }
};

// update methods

DKTools.Sprite.Cursor.prototype.update = function() {
    DKTools.Sprite.prototype.update.call(this);
    if (this.parent.isVisibleAndActive()) {
        this._animationCount++;
    }
    this.updateAnimation();
};

DKTools.Sprite.Cursor.prototype.updateAnimation = function() {
    var blinkCount = this._animationCount % 40;
    var parentOpacity = this.parent.opacity;
    if (this.parent.isVisibleAndActive()) {
        if (blinkCount < 20) {
            parentOpacity -= blinkCount * 8;
        } else {
            parentOpacity -= (40 - blinkCount) * 8;
        }
    }
    this.setupOpacity(parentOpacity);
};

DKTools.Sprite.Cursor.prototype._refreshCursor = function() {
    var x = this._rect.x;
    var y = this._rect.y;
    var w = this._rect.width;
    var h = this._rect.height;
    var m = 4;
    var ox = 0;
    var oy = 0;
    var w2 = Math.min(w, this.parent.width - x);
    var h2 = Math.min(h, this.parent.height - y);

    this.move(x, y);

    if (w > 0 && h > 0) {
        var skin = this._windowskin;
        var bitmap = new Bitmap(w2, h2);
        var p = 96;
        var q = 48;
        bitmap.blt(skin, p+m, p+m, q-m*2, q-m*2, ox+m, oy+m, w-m*2, h-m*2);
        bitmap.blt(skin, p+m, p+0, q-m*2, m, ox+m, oy+0, w-m*2, m);
        bitmap.blt(skin, p+m, p+q-m, q-m*2, m, ox+m, oy+h-m, w-m*2, m);
        bitmap.blt(skin, p+0, p+m, m, q-m*2, ox+0, oy+m, m, h-m*2);
        bitmap.blt(skin, p+q-m, p+m, m, q-m*2, ox+w-m, oy+m, m, h-m*2);
        bitmap.blt(skin, p+0, p+0, m, m, ox+0, oy+0, m, m);
        bitmap.blt(skin, p+q-m, p+0, m, m, ox+w-m, oy+0, m, m);
        bitmap.blt(skin, p+0, p+q-m, m, m, ox+0, oy+h-m, m, m);
        bitmap.blt(skin, p+q-m, p+q-m, m, m, ox+w-m, oy+h-m, m, m);
        this.setupFixedBitmap(bitmap);
    }
};

//===========================================================================
// DKTools Sprite Selectable
//===========================================================================

DKTools.Sprite.Selectable.prototype = Object.create(DKTools.Sprite.prototype);
DKTools.Sprite.Selectable.prototype.constructor = DKTools.Sprite.Selectable;

// _clear methods

DKTools.Sprite.Selectable.prototype._clearAll = function() {
    DKTools.Sprite.prototype._clearAll.call(this);
    this._clearIndex();
    this._clearCursorFixed();
    this._clearCursorAll();
    this._clearHandlers();
    this._clearTouching();
    this._clearScroll();
};

DKTools.Sprite.Selectable.prototype._clearIndex = function() {
    /**
     * @private
     * @type {Number}
     */
    this._index = -1;
};

DKTools.Sprite.Selectable.prototype._clearCursorFixed = function() {
    this._cursorFixed = false;
};

DKTools.Sprite.Selectable.prototype._clearCursorAll = function() {
    this._cursorAll = false;
};

DKTools.Sprite.Selectable.prototype._clearHandlers = function() {
    this._handlers = {};
};

DKTools.Sprite.Selectable.prototype._clearTouching = function() {
    this._touching = false;
};

DKTools.Sprite.Selectable.prototype._clearScroll = function() {
    this._clearScrollX();
    this._clearScrollY();
};

DKTools.Sprite.Selectable.prototype._clearScrollX = function() {
    this._scrollX = 0;
};

DKTools.Sprite.Selectable.prototype._clearScrollY = function() {
    this._scrollY = 0;
};

// _create methods

DKTools.Sprite.Selectable.prototype._createAll = function() {
    DKTools.Sprite.prototype._createAll.call(this);
    this._createCursorSprite();
};

DKTools.Sprite.Selectable.prototype._createCursorSprite = function() {
    this._cursorSprite = new DKTools.Sprite.Cursor();
    this.addChild(this._cursorSprite);
};

// standard methods

DKTools.Sprite.Selectable.prototype.standardCols = function() {
    return 1;
};

// setup methods

DKTools.Sprite.Selectable.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.Sprite.prototype.setupAll.call(this, object);
    this.setupCols(object.cols);
};

DKTools.Sprite.Selectable.prototype.setupCols = function(cols) {
    this._cols = cols || this.standardCols();
};

// set methods

DKTools.Sprite.Selectable.prototype.setAll = function(object) {
    object = object || {};
    DKTools.Sprite.prototype.setAll.call(this, object);
    this.setCols(object.cols);
};

DKTools.Sprite.Selectable.prototype.setCols = function(cols, blockStart) {

};

//

DKTools.Sprite.Selectable.prototype.setCursorFixed = function(cursorFixed) {
    this._cursorFixed = cursorFixed;
};

DKTools.Sprite.Selectable.prototype.setCursorAll = function(cursorAll) {
    this._cursorAll = cursorAll;
};

DKTools.Sprite.Selectable.prototype.setTopRow = function(row) {
    var scrollY = row.clamp(0, this.maxTopRow()) * this.itemHeight();
    if (this._scrollY !== scrollY) {
        this._scrollY = scrollY;
        this.refreshAll();
        this.updateCursor();
    }
};

//

DKTools.Sprite.Selectable.prototype.setTopCol = function(col) {
    var scrollX = col.clamp(0, this.maxTopCol()) * this.itemWidth();
    if (this._scrollX !== scrollX) {
        this._scrollX = scrollX;
        this.refreshAll();
        this.updateCursor();
    }
};

//

DKTools.Sprite.Selectable.prototype.setBottomRow = function(row) {
    this.setTopRow(row - (this.maxPageRows() - 1));
};

//

DKTools.Sprite.Selectable.prototype.setBottomCol = function(col) {
    this.setTopCol(col - (this.maxPageCols() - 1));
};

//

DKTools.Sprite.Selectable.prototype.setHandler = function(symbol, method) {
    this._handlers[symbol] = method;
};

DKTools.Sprite.Selectable.prototype.setCursorRect = function(x, y, width, height) {
    this._cursorSprite.setRect(x, y, width, height);
};

// active methods

DKTools.Sprite.Selectable.prototype.activate = function() {
    DKTools.Sprite.prototype.activate.call(this);
    this.reselect();
};

DKTools.Sprite.Selectable.prototype.deactivate = function() {
    DKTools.Sprite.prototype.deactivate.call(this);
    this.reselect();
};

// is methods

DKTools.Sprite.Selectable.prototype.isHorizontal = function() {
    return this.maxPageRows() === 1;
};

DKTools.Sprite.Selectable.prototype.isCursorMovable = function() {
    return (this.isVisibleAndActive() && !this._cursorFixed &&
            !this._cursorAll && this.maxItems() > 0);
};

DKTools.Sprite.Selectable.prototype.isTouchOkEnabled = function() {
    return this.isOkEnabled();
};

DKTools.Sprite.Selectable.prototype.isOkEnabled = function() {
    return this.isHandled('ok');
};

DKTools.Sprite.Selectable.prototype.isCancelEnabled = function() {
    return this.isHandled('cancel');
};

DKTools.Sprite.Selectable.prototype.isOkTriggered = function() {
    return Input.isRepeated('ok');
};

DKTools.Sprite.Selectable.prototype.isCancelTriggered = function() {
    return Input.isRepeated('cancel');
};

DKTools.Sprite.Selectable.prototype.isCursorVisible = function() {
    if (this.isHorizontal()) {
        var col = this.col();
        // p(col, this.topCol(), this.bottomCol())
        return col >= this.topCol() && col <= this.bottomCol();
    }

    var row = this.row();
    return row >= this.topRow() && row <= this.bottomRow();
};

DKTools.Sprite.Selectable.prototype.isCurrentItemEnabled = function() {
    return true;
};

DKTools.Sprite.Selectable.prototype.isTouchedInsideFrame = function() {
    var x = this.canvasToLocalX(TouchInput.x);
    var y = this.canvasToLocalY(TouchInput.y);
    return x >= 0 && y >= 0 && x < this.width && y < this.height;
};

DKTools.Sprite.Selectable.prototype.isHandled = function(symbol) {
    return !!this._handlers[symbol];
};

// cursor methods

DKTools.Sprite.Selectable.prototype.cursorDown = function(wrap) {
    var index = this.index();
    var maxItems = this.maxItems();
    var maxCols = this.maxCols();
    if (index < maxItems - maxCols || (wrap && maxCols === 1)) {
        this.select((index + maxCols) % maxItems);
    }
};

DKTools.Sprite.Selectable.prototype.cursorUp = function(wrap) {
    var index = this.index();
    var maxItems = this.maxItems();
    var maxCols = this.maxCols();
    if (index >= maxCols || (wrap && maxCols === 1)) {
        this.select((index - maxCols + maxItems) % maxItems);
    }
};

DKTools.Sprite.Selectable.prototype.cursorRight = function(wrap) {
    var index = this.index();
    var maxItems = this.maxItems();
    var maxCols = this.maxCols();
    if (maxCols >= 2 && (index < maxItems - 1 || (wrap && this.isHorizontal()))) {
        this.select((index + 1) % maxItems);
    }
};

DKTools.Sprite.Selectable.prototype.cursorLeft = function(wrap) {
    var index = this.index();
    var maxItems = this.maxItems();
    var maxCols = this.maxCols();
    if (maxCols >= 2 && (index > 0 || (wrap && this.isHorizontal()))) {
        this.select((index - 1 + maxItems) % maxItems);
    }
};

DKTools.Sprite.Selectable.prototype.cursorPagedown = function() {
    var index = this.index();
    var maxItems = this.maxItems();
    if (this.topRow() + this.maxPageRows() < this.maxRows()) {
        this.setTopRow(this.topRow() + this.maxPageRows());
        this.select(Math.min(index + this.maxPageItems(), maxItems - 1));
    }
};

DKTools.Sprite.Selectable.prototype.cursorPageup = function() {
    var index = this.index();
    if (this.topRow() > 0) {
        this.setTopRow(this.topRow() - this.maxPageRows());
        this.select(Math.max(index - this.maxPageItems(), 0));
    }
};

// process methods

DKTools.Sprite.Selectable.prototype.processCursorMove = function() {
    if (this.isCursorMovable()) {
        var lastIndex = this.index();
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
        if (this.index() !== lastIndex) {
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

DKTools.Sprite.Selectable.prototype.processWheel = function() {
    if (this.isVisibleAndActive()) {
        var threshold = 20;
        if (TouchInput.wheelY >= threshold) {
            this.scrollDown();
        }
        if (TouchInput.wheelY <= -threshold) {
            this.scrollUp();
        }
    }
};

DKTools.Sprite.Selectable.prototype.processTouch = function() {
    if (this.isVisibleAndActive()) {
        if (TouchInput.isTriggered() && this.isTouchedInsideFrame()) {
            this._touching = true;
            this.onTouch(true);
        } else if (TouchInput.isCancelled()) {
            if (this.isCancelEnabled()) {
                this.processCancel();
            }
        }
        if (this._touching) {
            if (TouchInput.isPressed()) {
                this.onTouch(false);
            } else {
                this._touching = false;
            }
        }
    } else {
        this._touching = false;
    }
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

DKTools.Sprite.Selectable.prototype.processCancel = function() {
    this.playCancelSound();
    this.updateInputData();
    this.deactivate();
    this.callCancelHandler();
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

// touch methods

DKTools.Sprite.Selectable.prototype.onTouch = function(triggered) {
    var lastIndex = this.index();
    var x = TouchInput.x;
    var y = TouchInput.y;
    var hitIndex = this.hitTest(x, y);
    if (hitIndex >= 0) {
        if (hitIndex === this.index()) {
            if (triggered && this.isTouchOkEnabled()) {
                this.processOk();
            }
        } else if (this.isCursorMovable()) {
            this.select(hitIndex);
        }
    }
    if (this.index() !== lastIndex) {
        this.playCursorSound();
    }
};

DKTools.Sprite.Selectable.prototype.hitTest = function(x, y) {
    if (this.isInside(x, y)) {
        var localX = this.canvasToLocalX(x);
        var localY = this.canvasToLocalY(y);
        var topIndex = this.topIndex();
        for(var i = 0; i < this.maxPageItems(); i++) {
            var index = topIndex + i;
            if (index < this.maxItems()) {
                var rect = this.itemRect(index);
                if (rect.contains(localX, localY)) {
                    return index;
                }
            }
        }
    }
    return -1;
};

// event methods

// draw methods

DKTools.Sprite.Selectable.prototype.drawAll = function() {
    DKTools.Sprite.prototype.drawAll.call(this);
    this.drawAllItems();
};

DKTools.Sprite.Selectable.prototype.drawAllItems = function() {
    var topIndex = this.topIndex();
    p(topIndex)
    var maxPageItems = this.maxPageItems();
    for(var i = 0; i < maxPageItems; i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};

DKTools.Sprite.Selectable.prototype.drawItem = function(index) {
};

DKTools.Sprite.Selectable.prototype.clearItem = function(index) {
    var rect = this.itemRect(index);
    this.clearRect(rect);
};

DKTools.Sprite.Selectable.prototype.redrawItem = function(index) {
    if (index >= 0) {
        this.clearItem(index);
        this.drawItem(index);
    }
};

DKTools.Sprite.Selectable.prototype.redrawCurrentItem = function() {
    this.redrawItem(this.index());
};

// sound methods

DKTools.Sprite.Selectable.prototype.playOkSound = function() {
    SoundManager.playOk();
};

DKTools.Sprite.Selectable.prototype.playCancelSound = function() {
    SoundManager.playCancel();
};

DKTools.Sprite.Selectable.prototype.playCursorSound = function() {
    SoundManager.playCursor();
};

DKTools.Sprite.Selectable.prototype.playBuzzerSound = function() {
    SoundManager.playBuzzer();
};

// call methods

DKTools.Sprite.Selectable.prototype.callOkHandler = function() {
    this.callHandler('ok');
};

DKTools.Sprite.Selectable.prototype.callCancelHandler = function() {
    this.callHandler('cancel');
};

// update methods

DKTools.Sprite.Selectable.prototype.update = function() {
    DKTools.Sprite.prototype.update.call(this);
    this.processCursorMove();
    this.processHandling();
    this.processWheel();
    this.processTouch();
};

DKTools.Sprite.Selectable.prototype.updateCursor = function() {
    if (this._cursorAll) {
        var allRowsHeight = this.maxRows() * this.itemHeight();
        this.setCursorRect(0, 0, this.width, allRowsHeight);
        this.setTopRow(0);
    } else if (this.isCursorVisible()) {
        var rect = this.itemRect(this.index());
        this.setCursorRect(rect.x, rect.y, rect.width, rect.height);
    } else {
        this.setCursorRect(0, 0, 0, 0);
    }
};

// other methdos

// DKTools.Sprite.Selectable.prototype.minWidth = function() {
//     return this.maxCols() * this.itemWidth();
// };
//
// DKTools.Sprite.Selectable.prototype.minHeight = function() {
//     return this.maxRows() * this.itemHeight();
// };

DKTools.Sprite.Selectable.prototype.textPadding = function() {
    return 6;
};

DKTools.Sprite.Selectable.prototype.index = function() {
    return this._index;
};

DKTools.Sprite.Selectable.prototype.cursorFixed = function() {
    return this._cursorFixed;
};

DKTools.Sprite.Selectable.prototype.cursorAll = function() {
    return this._cursorAll;
};

DKTools.Sprite.Selectable.prototype.maxCols = function() {
    return this._cols;
};

DKTools.Sprite.Selectable.prototype.maxItems = function() {
    return 0;
};

DKTools.Sprite.Selectable.prototype.spacing = function() {
    return 12;
};

DKTools.Sprite.Selectable.prototype.itemWidth = function() {
    var spacing = this.spacing();
    return Math.floor((this.width + spacing) / this.maxCols() - spacing);
};

DKTools.Sprite.Selectable.prototype.itemHeight = function() {
    return this.lineHeight();
};

DKTools.Sprite.Selectable.prototype.maxRows = function() {
    return Math.max(Math.ceil(this.maxItems() / this.maxCols()), 1);
};

DKTools.Sprite.Selectable.prototype.select = function(index) {
    this._index = index;
    this.ensureCursorVisible();
    this.updateCursor();
};

DKTools.Sprite.Selectable.prototype.deselect = function() {
    this.select(-1);
};

DKTools.Sprite.Selectable.prototype.reselect = function() {
    this.select(this._index);
};

DKTools.Sprite.Selectable.prototype.row = function() {
    return Math.floor(this.index() / this.maxCols());
};

//

DKTools.Sprite.Selectable.prototype.col = function() {
    return this.index();
};

//

DKTools.Sprite.Selectable.prototype.topRow = function() {
    return Math.floor(this._scrollY / this.itemHeight());
};

//

DKTools.Sprite.Selectable.prototype.topCol = function() {
    return Math.floor(this._scrollX / this.itemWidth());
};

//

DKTools.Sprite.Selectable.prototype.maxTopRow = function() {
    return Math.max(0, this.maxRows() - this.maxPageRows());
};

//

DKTools.Sprite.Selectable.prototype.maxTopCol = function() {
    return Math.max(0, this.maxItems() - this.maxPageCols());
};

DKTools.Sprite.Selectable.prototype.maxPageCols = function() {
    return Math.floor(this.width / this.itemWidth());
};

//

DKTools.Sprite.Selectable.prototype.resetScroll = function() {
    if (this.isHorizontal()) {
        this.setTopCol(0);
        return;
    }

    this.setTopRow(0);
};

DKTools.Sprite.Selectable.prototype.maxPageRows = function() {
    return Math.floor(this.height / this.itemHeight());
};

DKTools.Sprite.Selectable.prototype.maxPageItems = function() {
    if (this.isHorizontal()) {
        return this.maxPageCols();
    }
    return this.maxPageRows() * this.maxCols();
};

//

DKTools.Sprite.Selectable.prototype.bottomRow = function() {
    return Math.max(0, this.topRow() + this.maxPageRows() - 1);
};

DKTools.Sprite.Selectable.prototype.bottomCol = function() {
    return Math.max(0, this.topCol() + this.maxPageCols() - 1);
};

//

DKTools.Sprite.Selectable.prototype.topIndex = function() {
    if (this.isHorizontal()) {
        return this.topCol();
    }
    return this.topRow() * this.maxCols();
};

DKTools.Sprite.Selectable.prototype.itemRect = function(index) {
    var rect = new Rectangle();
    var maxCols = this.maxCols();
    rect.width = this.itemWidth();
    rect.height = this.itemHeight();
    rect.x = index % maxCols * (rect.width + this.spacing()) - this._scrollX;
    rect.y = Math.floor(index / maxCols) * rect.height - this._scrollY;
    return rect;
};

DKTools.Sprite.Selectable.prototype.itemRectForText = function(index) {
    var rect = this.itemRect(index);
    rect.x += this.textPadding();
    rect.width -= this.textPadding() * 2;
    return rect;
};

DKTools.Sprite.Selectable.prototype.callHandler = function(symbol) {
    if (this.isHandled(symbol)) {
        this._handlers[symbol]();
    }
};

DKTools.Sprite.Selectable.prototype.scrollDown = function() {
    if (this.topRow() + 1 < this.maxRows()) {
        this.setTopRow(this.topRow() + 1);
    }
};

DKTools.Sprite.Selectable.prototype.scrollUp = function() {
    if (this.topRow() > 0) {
        this.setTopRow(this.topRow() - 1);
    }
};

//

DKTools.Sprite.Selectable.prototype.scrollRight = function() {
    if (this.topCol() + 1 < this.maxCols()) {
        this.setTopCol(this.topCol() + 1);
    }
};

DKTools.Sprite.Selectable.prototype.scrollLeft = function() {
    if (this.topCol() > 0) {
        this.setTopCol(this.topCol() - 1);
    }
};

//

DKTools.Sprite.Selectable.prototype.ensureCursorVisible = function() {
    if (this.isHorizontal()) {
        var col = this.col();
        if (col < this.topCol()) {
            this.setTopCol(col);
        } else if (col > this.bottomCol()) {
            this.setBottomCol(col);
        }
        return;
    }

    var row = this.row();
    if (row < this.topRow()) {
        this.setTopRow(row);
    } else if (row > this.bottomRow()) {
        this.setBottomRow(row);
    }
};





//===========================================================================
// DKTools Sprite Command
//===========================================================================

DKTools.Sprite.Command.prototype = Object.create(DKTools.Sprite.Selectable.prototype);
DKTools.Sprite.Command.prototype.constructor = DKTools.Sprite.Command;

// _clear methods

DKTools.Sprite.Command.prototype._clearAll = function() {
    DKTools.Sprite.Selectable.prototype._clearAll.call(this);
    this._clearCommandList();
};

DKTools.Sprite.Command.prototype._clearIndex = function() {
    this._index = 0;
};

DKTools.Sprite.Command.prototype._clearCommandList = function() {
    this._list = [];
    // this._commandList = [];
};

// standard methods

// setup methods

DKTools.Sprite.Command.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.Sprite.Selectable.prototype.setupAll.call(this, object);
    this.setupCommands(object.commands);
};

DKTools.Sprite.Command.prototype.setupCommands = function(commands) {
    // this._commands = commands;
    _.each(commands, this.addCommand.bind(this));
};

// set methods

// is methods

DKTools.Sprite.Command.prototype.isCommandEnabled = function(index) {
    return this._list[index].enabled;
};

DKTools.Sprite.Command.prototype.isCurrentItemEnabled = function() {
    return this.currentData() ? this.currentData().enabled : false;
};

DKTools.Sprite.Command.prototype.isOkEnabled = function() {
    return true;
};

// draw methods

DKTools.Sprite.Command.prototype.drawItem = function(index) {
    var rect = this.itemRectForText(index);
    var commandName = this.commandName(index);
    // this.resetTextColor();
    // this.changePaintOpacity(this.isCommandEnabled(index));
    this.drawText(commandName, this.align, rect);
};

// other methods

DKTools.Sprite.Command.prototype.maxItems = function() {
    return this._list.length;
};

DKTools.Sprite.Command.prototype.addCommand = function(object) {
    Window_Command.prototype.addCommand.apply(this, arguments);
    // object = object || {};
    // if (object.enabled === undefined) {
    //     object.enabled = true;
    // }
    // if (object.ext === undefined) {
    //     object.ext = null;
    // }
    // this._list.push(object);
};

DKTools.Sprite.Command.prototype.addCommands = function(commands, blockStart) {
    _.each(commands, this.addCommand.bind(this));
    if (!blockStart) {
        this.start();
    }
};

DKTools.Sprite.Command.prototype.commandName = function(index) {
    return this._list[index].name;
};

DKTools.Sprite.Command.prototype.commandSymbol = function(index) {
    return this._list[index].symbol;
};

DKTools.Sprite.Command.prototype.currentData = function() {
    return this.index() >= 0 ? this._list[this.index()] : null;
};

DKTools.Sprite.Command.prototype.currentSymbol = function() {
    return this.currentData() ? this.currentData().symbol : null;
};

DKTools.Sprite.Command.prototype.currentExt = function() {
    return this.currentData() ? this.currentData().ext : null;
};

DKTools.Sprite.Command.prototype.findSymbol = function(symbol) {
    for (var i = 0; i < this._list.length; i++) {
        if (this._list[i].symbol === symbol) {
            return i;
        }
    }
    return -1;
};

DKTools.Sprite.Command.prototype.selectSymbol = function(symbol) {
    var index = this.findSymbol(symbol);
    if (index >= 0) {
        this.select(index);
    } else {
        this.select(0);
    }
};

DKTools.Sprite.Command.prototype.findExt = function(ext) {
    for (var i = 0; i < this._list.length; i++) {
        if (this._list[i].ext === ext) {
            return i;
        }
    }
    return -1;
};

DKTools.Sprite.Command.prototype.selectExt = function(ext) {
    var index = this.findExt(ext);
    if (index >= 0) {
        this.select(index);
    } else {
        this.select(0);
    }
};

DKTools.Sprite.Command.prototype.itemTextAlign = function() {
    return 'left';
};

DKTools.Sprite.Command.prototype.callOkHandler = function() {
    var symbol = this.currentSymbol();
    if (this.isHandled(symbol)) {
        this.callHandler(symbol);
    } else if (this.isHandled('ok')) {
        DKTools.Sprite.Selectable.prototype.callOkHandler.call(this);
    } else {
        this.activate();
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
    var block = true;
    var changed = DKTools.Sprite.prototype.setAll.call(this, object, block);
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
    var lastShape = this._maskShape;
    this.setupShape(shape);
    if (lastShape === this._maskShape) {
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
    var mask;
    switch (this._maskShape) {
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
            mask = this.createCustomMask(this._maskShape);
            break;
    }
    this.mask = mask;
    this._viepowrtMask = mask;
};

DKTools.Viewport.prototype.createRectMask = function() {
    var mask = new PIXI.Graphics();
    mask.beginFill();
    mask.drawRect(this.x, this.y, this.bitmap.width, this.bitmap.height);
    mask.endFill();
    return mask;
};

DKTools.Viewport.prototype.createCircleMask = function() {
    var mask = new PIXI.Graphics();

    mask.beginFill();

    var radius = this.bitmap.width / 2;
    var centerX = this.x + radius;
    var centerY = this.y + radius;

    mask.drawCircle(centerX, centerY, radius);
    mask.endFill();
    return mask;
};

DKTools.Viewport.prototype.createEllipseMask = function() {
    var mask = new PIXI.Graphics();
    mask.beginFill();

    var width = this.bitmap.width / 2;
    var height = this.bitmap.height / 2;
    var centerX = this.x + width;
    var centerY = this.y + height;

    mask.drawEllipse(centerX, centerY, width, height);
    mask.endFill();
    return mask;
};

DKTools.Viewport.prototype.createCustomMask = function(maskShape) {
    return null;
};

// mask methods

DKTools.Viewport.prototype.showMask = function() {
    this.mask = this._viepowrtMask;
};

DKTools.Viewport.prototype.hideMask = function() {
    this.mask = null;
};





//===========================================================================
// DKTools Layout
//===========================================================================

DKTools.Layout.prototype = Object.create(DKTools.Sprite.prototype);
DKTools.Layout.prototype.constructor = DKTools.Layout;

// properties


Object.defineProperties(DKTools.Layout.prototype, {
    /**
     * Количество элементов
     *
     * @readonly
     * @type {Number}
     * @memberOf DKTools.Layout
     */
    length: {
        get: function() {
            return this.elements().length;
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
    this._clearElements();
};

/**
 * Очищает список элементов контейнера
 *
 * @private
 */
DKTools.Layout.prototype._clearElements = function() {
    this._elements = [];
};

// clear methods

/**
 * Очищает список элементов контейнера
 */
DKTools.Layout.prototype.clearElements = function() {
    return this.setElements();
};

// standard methods

/**
 * Возвращает стандартное значение активности
 *
 * @override
 * @return {Boolean} Стандартное значение активности
 */
DKTools.Layout.prototype.standardActive = function() {
    return false;
};

/**
 * Возвращает стандартный список элементов контейнера
 *
 * @return {Array} Стандартный список элементов контейнера
*/
DKTools.Layout.prototype.standardElements = function() {
	return [];
};

/**
 * Возвращает стандартное расположение элементов
 *
 * @return {String} Стандартное расположение элементов
*/
DKTools.Layout.prototype.standardPlacement = function() {
	return 'horizontal';
};

/**
 * Возвращает стандартное количество рядов
 *
 * @return {Number} Стандартное количество рядов
 */
DKTools.Layout.prototype.standardRows = function() {
    return 0;
};

/**
 * Возвращает стандартное количество столбцов
 *
 * @return {Number} Стандартное количество столбцов
 */
DKTools.Layout.prototype.standardCols = function() {
    return 0;
};

/**
 * Возвращает стандартное значение отступа по оси X
 *
 * @return {Number} Стандартное значение отступа по оси X
 */
DKTools.Layout.prototype.standardXPadding = function() {
    return 18;
};

/**
 * Возвращает стандартное значение отступа по оси Y
 *
 * @return {Number} Стандартное значение отступа по оси Y
 */
DKTools.Layout.prototype.standardYPadding = function() {
    return 18;
};

/**
 * Возвращает стандартное обратное расположение элементов
 *
 * @return {Boolean} Стандартное обратное расположение элементов
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
DKTools.Layout.prototype.setupAll = function(object) {
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
 * @param {Array} elements - Массив с элементами контейнера
*/
DKTools.Layout.prototype.setupElements = function(elements) {
    if (elements instanceof Array) {
        this._elements = elements.clone();
    } else {
        this._elements = this.standardElements();
    }
};

/**
 * Добавляет элемент в контейнер, блокируя вызов функции start контейнера
 *
 * @param {DKTools.Sprite} element - Элемент контейнера
*/
DKTools.Layout.prototype.setupElement = function(element) {
	this.addElement(element, true);
};

/**
 * Устанавливает расположение элементов
 *
 * @param {String} [placement] - Расположение элементов
*/
DKTools.Layout.prototype.setupPlacement = function(placement) {
	this._placement = placement || this.standardPlacement();
    this.setupRows();
    this.setupCols();
};

/**
 * Устанавливает количество столбцов
 *
 * @param {Number} [rows] - Количество рядов
 */
DKTools.Layout.prototype.setupRows = function(rows) {
    this._rows = (rows == null ? this.standardRows() : rows);
};

/**
 * Устанавливает количество столбцов
 *
 * @param {Number} [cols] - Количество столбцов
 */
DKTools.Layout.prototype.setupCols = function(cols) {
    this._cols = (cols == null ? this.standardCols() : cols);
};

/**
 * Устанавливает отступ между элементами контейнера по оси X
 *
 * @param {Number} [padding] - Отступ между элементами контейнера по оси X
 */
DKTools.Layout.prototype.setupXPadding = function(padding) {
    this._xPadding = (padding == null ? this.standardXPadding() : padding);
};

/**
 * Устанавливает отступ между элементами контейнера по оси Y
 *
 * @param {Number} [padding] - Отступ между элементами контейнера по оси Y
 */
DKTools.Layout.prototype.setupYPadding = function(padding) {
    this._yPadding = (padding == null ? this.standardYPadding() : padding);
};

/**
 * Устанавливает отступ между элементами контейнера по оси X и Y
 *
 * @param {Number} [xPadding] - Отступ между элементами контейнера по оси X
 * @param {Number} [yPadding] - Отступ между элементами контейнера по оси Y
 */
DKTools.Layout.prototype.setupPadding = function(xPadding, yPadding) {
    this.setupXPadding(xPadding);
    this.setupYPadding(yPadding);
};

/**
 *
 *
 * @param {Boolean} [reversed] -
 */
DKTools.Layout.prototype.setupReversed = function(reversed) {
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
DKTools.Layout.prototype.setAll = function(object, blockStart) {
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
 * @param {Array} [elements] - Массив элементов контейнера
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
*/
DKTools.Layout.prototype.setElements = function(elements, blockStart) {
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
 * @param {String} [placement] - Расположение элементов
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
*/
DKTools.Layout.prototype.setPlacement = function(placement, blockStart) {
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
 * @param {Number} [rows] - Количество рядов
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Layout.prototype.setRows = function(rows, blockStart) {
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
 * @param {Number} [cols] - Количество столбцов
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Layout.prototype.setCols = function(cols, blockStart) {
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
 * @param {Number} [padding] - Отступ между элементами контейнера по оси X
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Layout.prototype.setXPadding = function(padding, blockStart) {
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
 * @param {Number} [padding] - Отступ между элементами контейнера по оси Y
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Layout.prototype.setYPadding = function(padding, blockStart) {
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
 * @param {Number} [xPadding] - Отступ между элементами контейнера по оси X
 * @param {Number} [yPadding] - Отступ между элементами контейнера по оси Y
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Number} Количество измененных параметров
 */
DKTools.Layout.prototype.setPadding = function(xPadding, yPadding, blockStart) {
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
 * @param {Boolean} [reversed] -
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
 */
DKTools.Layout.prototype.setReversed = function(reversed, blockStart) {
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
*/
DKTools.Layout.prototype.start = function() {
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
 */
DKTools.Layout.prototype.checkAll = function() {
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
 * @return {Boolean} Количество рядов или столбцов было равно 0
 */
DKTools.Layout.prototype.checkRowsAndCols = function() {
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
 * @param {Number} [startPosition] - Стартовая позиция клонирования
 * @return {Array} Массив с клонированными элементами контейнера
 */
DKTools.Layout.prototype._cloneElements = function(startPosition) {
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
 * @return {Object} Объект со всеми параметрами
 */
DKTools.Layout.prototype.object = function() {
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
 * @return {Number} Минимальная ширина Bitmap
 */
DKTools.Layout.prototype.minWidth = function() {
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
 * @return {Number} Минимальная высота Bitmap
 */
DKTools.Layout.prototype.minHeight = function() {
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
 * @return {Number} Максимальное количество рядов
 */
DKTools.Layout.prototype.maxRows = function() {
    return this._rows;
};

/**
 * Возвращает максимальное количество столбцов
 *
 * @return {Number} Максимальное количество столбцов
 */
DKTools.Layout.prototype.maxCols = function() {
    return this._cols;
};

/**
 * Возвращает минимальное количество элементов
 * Используется для проверки рядов и столбцов
 *
 * @private
 * @return {Number} Минимальное количество элементов
 */
DKTools.Layout.prototype._minElements = function() {
    return this.length;
};

/**
 * Меняет порядок расположения элементов на обратный
 */
DKTools.Layout.prototype.reverse = function() {
    this.setReversed(!this.isReversed());
};

// is methods

/**
 * Возвращает true, если спрайт является контейнером
 *
 * @override
 * @return {Boolean} Спрайт является контейнером
 */
DKTools.Layout.prototype.isLayout = function() {
    return true;
};

/**
 * Возвращает true, если элементы располагаются вертикально
 *
 * @return {Boolean} Элементы располагаются вертикально
 */
DKTools.Layout.prototype.isVerticalPlacement = function() {
    return this._placement === 'vertical';
};

/**
 * Возвращает true, если элементы располагаются горизонтально
 *
 * @return {Boolean} Элементы располагаются горизонтально
 */
DKTools.Layout.prototype.isHorizontalPlacement = function() {
    return this._placement === 'horizontal';
};

/**
 * Возвращает true, если контейнер не содержит элементов
 *
 * @return {Boolean} Контейнер не содержит элементов
 */
DKTools.Layout.prototype.isEmpty = function() {
    return this.length === 0;
};

/**
 * Возвращает true, если спрайт готов
 *
 * @override
 * @return {Boolean} Спрайт готов
*/
DKTools.Layout.prototype.isReady = function() {
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
 * @return {Boolean}
 */
DKTools.Layout.prototype.isReversed = function() {
    return this._reversed;
};

// elements methods

/**
 * Возвращает все элементы контейнера
 *
 * @return {Array} Все элементы контейнера
*/
DKTools.Layout.prototype.elements = function() {
    var elements = this._elements;
    if (this.isReversed()) {
        elements = elements.clone().reverse();
    }
    return elements;
};

/**
 * Выполняет callback функцию для каждого элемента
 *
 * @param {Function} callback - Функция обработки для каждого элемента контейнера
 * @param {Boolean} [start] - Вызов функции start контейнера
 */
DKTools.Layout.prototype.iterateElements = function(callback, start) {
    var elements = this.elements();
    elements.forEach(callback);
    if (start) {
        this.start();
    }
};

/**
 * Удаляет элементы контейнера из обработки
*/
DKTools.Layout.prototype.removeElementsFromChild = function() {
	var callback = function(element) {
		this.removeChild(element);
	}.bind(this);
	this.iterateElements(callback);
};

/**
 * Добавляет элементы контейнера в обработку
*/
DKTools.Layout.prototype.addElementsToChild = function() {
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
 * @param {DKToolsSprite | Array} object - Элемент или массив элементов
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Изменение произошло
*/
DKTools.Layout.prototype.addElement = function(object, blockStart) {
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
 * @param {DKToolsSprite} element
 * @return {Number} Индекс элемента в контейнере
 */
DKTools.Layout.prototype.elementIndex = function(element) {
    return this.elements().indexOf(element);
};

/**
 * Возвращает true, если элемент содержится в контейнере
 *
 * @param {DKToolsSprite} element - Элемент
 * @return {Boolean} Элемент содержится в контейнере
 */
DKTools.Layout.prototype.hasElement = function(element) {
    return this.elementIndex(element) >= 0;
};

/**
 * Удаляет элемент из контейнера
 * Возвращает true, если элемент был удален
 *
 * @param {DKToolsSprite | Number} object - Элемент или номер элемента
 * @param {Boolean} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Элемент был удален
*/
DKTools.Layout.prototype.removeElement = function(object, blockStart) {
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
 * @param {Boolean} [blockStart] - Блокировка вызова функции start контейнера
*/
DKTools.Layout.prototype.startElements = function(blockStart) {
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
 * @param {Number} [width] - Высота Bitmap
 * @param {Number} [height] - Ширина Bitmap
 * @param {Boolean} [blockStart] - Блокировка вызова функции start контейнера
*/
DKTools.Layout.prototype.resizeElements = function(width, height, blockStart) {
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
 * @param {Boolean} [start] - Вызов функции start контейнера
*/
DKTools.Layout.prototype.activateElements = function(start) {
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
 * @param {Boolean} [start] - Вызов функции start контейнера
*/
DKTools.Layout.prototype.deactivateElements = function(start) {
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
 * @param {Boolean} [activate] - Активировать элементы
 * @param {Boolean} [start] - Вызов функции start контейнера
 */
DKTools.Layout.prototype.showElements = function(activate, start) {
    var callback = function(element) {
        element.show(activate);
    }.bind(this);
    this.iterateElements(callback);
    if (start) {
        this.start();
    }
};

/**
 * Вызывает функцию show у всех элементов контейнера
 *
 * @param {Boolean} [blockDeactivate] - Блокировать деактивацию элементов
 * @param {Boolean} [start] - Вызов функции start контейнера
 */
DKTools.Layout.prototype.hideElements = function(duration, blockDeactivate, start) {
    var callback = function(element) {
        element.hide(blockDeactivate);
    }.bind(this);
    this.iterateElements(callback);
    if (start) {
        this.start();
    }
};

/**
 * Возвращает элемент по его номеру
 *
 * @param {Number} id - Номер элемента
 * @return {DKTools.Sprite | undefined}
*/
DKTools.Layout.prototype.element = function(id) {
    return this.elements()[id];
};

/**
 * Возвращает массив с элементами ряда
 *
 * @param {Number} row - Номер ряда
 * @return {Array} Массив с элементами ряда
 */
DKTools.Layout.prototype.row = function(row) {
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
 * @param {Number} col - Номер столбца
 * @return {Array} Массив с элементами столбца
 */
DKTools.Layout.prototype.col = function(col) {
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
 * @param {Number} row - Номер ряда
 * @return {Number} Высота ряда
 */
DKTools.Layout.prototype.rowHeight = function(row) {
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
 * @param {Number} col - Номер столбца
 * @return {Number} Ширина столбца
 */
DKTools.Layout.prototype.colWidth = function(col) {
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
 * @param {Number} row - Номер строки
 * @return {Number} Координату Y начала строки
 */
DKTools.Layout.prototype.rowY = function(row) {
    var y = 0;
    for(var i = 1; i < row; i++) {
        y += this.rowHeight(i) + this._yPadding;
    }
    return y;
};

/**
 * Возвращает координату X начала столбца
 *
 * @param {Number} col - Номер столбца
 * @return {Number} Координату X начала столбца
 */
DKTools.Layout.prototype.colX = function(col) {
    var x = 0;
    for(var i = 1; i < col; i++) {
        x += this.colWidth(i) + this._xPadding;
    }
    return x;
};

/**
 * Возвращает номер строки элемента контейнера
 *
 * @param {DKToolsSprite} element - Элемент контейнера
 * @return {Number} Номер строки элемента контейнера
 */
DKTools.Layout.prototype.elementRow = function(element) {
    var index = this.elementIndex(element);
    var maxCols = this.maxCols();
    return Math.floor(index / maxCols) + 1;
};

/**
 * Возвращает номер столбца элемента контейнера
 *
 * @param {DKToolsSprite} element - Элемент контейнера
 * @return {Number} Номер столбца элемента контейнера
 */
DKTools.Layout.prototype.elementCol = function(element) {
    var index = this.elementIndex(element);
    return (index % this.maxCols()) + 1;
};

// align methods

/**
 * Выравнивает элемент по ширине и высоте
 * Возвращает true, если элемент есть
 *
 * @param {DKToolsSprite | Number} object - Элемент или его номер
 * @return {Boolean} Элемент есть
 */
DKTools.Layout.prototype.alignElement = function(object) {
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
 * @param {Number} row - Номер строки
 */
DKTools.Layout.prototype.alignRow = function(row) {
    var elements = this.row(row);
    elements.forEach(function(element) {
        this.alignElement(element);
    }.bind(this));
};

/**
 * Выравнивает все элементы столбца по ширине
 *
 * @param {Number} col - Номер столбца
 */
DKTools.Layout.prototype.alignCol = function(col) {
    var elements = this.col(col);
    elements.forEach(function(element) {
        this.alignElement(element);
    }.bind(this));
};

/**
 * Выравнивает все элементы контейнера по ширине и высоте
 */
DKTools.Layout.prototype.alignElements = function() {
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
 */
DKTools.Layout.prototype.updateAll = function() {
    DKTools.Sprite.prototype.updateAll.call(this);
    this.updatePlacement();
};

/**
 * Обновляет ID элементов контейнера
 */
DKTools.Layout.prototype.updateElementsId = function() {
    var id = 0;
    var callback = function(element) {
        element.setupId(id++);
    }.bind(this);
    this.iterateElements(callback);
};

/**
 * Обновляет расположение элементов в контейнере
*/
DKTools.Layout.prototype.updatePlacement = function() {
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
            this._windowSpriteContainer.alpha = value.clamp(0, 255) / 255;
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
            this._windowFrameSprite.alpha = value.clamp(0, 255) / 255;
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
    this._isWindow = true;
};

/**
 * @private
 */
DKTools.Window.prototype._clearOpenness = function() {
    this._openness = 255;
};

/**
 * @private
 */
DKTools.Window.prototype._clearPadding = function() {
    this._padding = this.standardPadding();
};

/**
 * @private
 */
DKTools.Window.prototype._clearMargin = function() {
    this._margin = 4;
};

/**
 * @private
 */
DKTools.Window.prototype._clearColorTone = function() {
    this._colorTone = [0, 0, 0];
};

/**
 * @private
 */
DKTools.Window.prototype._clearOrigin = function() {
    this.origin = new Point();
};

// standard methods

/**
 * Возвращает стандартное значение коодинаты X для спрайта
 *
 * @return {Number} Стандартное значение коодинаты X для спрайта
*/
DKTools.Window.prototype.standardSpriteX = function() {
	return this.standardPadding();
};

/**
 * Возвращает стандартное значение коодинаты Y для спрайта
 *
 * @return {Number} Стандартное значение коодинаты Y для спрайта
*/
DKTools.Window.prototype.standardSpriteY = function() {
	return this.standardPadding();
};

/**
 * Возвращает стандартную позицию для спрайта
 *
 * @return {Point} Стандартная позиция для спрайта
 */
DKTools.Window.prototype.standardSpritePosition = function() {
    return new Point(this.standardSpriteX(), this.standardSpriteY());
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
 * @param {Number} [height] - Высота окна
 *
 * @param {Number} [object.width] - Ширина окна
 * @param {Number} [object.height] - Высота окна
 */
DKTools.Window.prototype.setupSize = function(object, height) {
    if (object instanceof Object) {
        return this.setupSize(object.width, object.height);
    }
    // object - Number
    object = this._checkWidth(object);
    height = this._checkHeight(height);
    Window.prototype.move.call(this, this.x, this.y, object, height);
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

// _create methods

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
    this._addAllPartsToChild();
};

/**
 * Создает контейнер спрайтов
 *
 * @private
 */
DKTools.Window.prototype._createSpriteContainer = function() {
    /**
     * @private
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
        Window.prototype._refreshContents.call(this);
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
 */
DKTools.Window.prototype.createAll = function() {
    DKTools.Base.prototype.createAll.call(this);
    this.createContents();
};

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
 * @return {Boolean} Объект является окном
 */
DKTools.Window.prototype.isWindow = function() {
    return true;
};

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

DKTools.Window.prototype.hasBackgroundDimmer = function() {
    return !!this._dimmerSprite;
};

// active methods

DKTools.Window.prototype.activate = function() {
    DKTools.Base.prototype.activate.call(this);
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.activate();
    }
};

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
    width = (width == null ? this.minWidth() : width);
    height = (height == null ? this.minHeight() : height);
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
 * @return {Number} Минимальная ширина окна
*/
DKTools.Window.prototype.minWidth = function() {
    return this.standardPadding() * 2 + DKTools.Base.prototype.minWidth.call(this);
};

/**
 * Возвращает минимальную высоту окна
 *
 * @override
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
	var bitmap = ImageManager.loadBitmap(object, filename, hue, smooth);
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
 * Сбрасывает текст текста
 *
 * @override
 */
DKTools.Window.prototype.resetTextColor = function() {
};

// change methods

/**
 * Изменяет цвет текста
 *
 * @override
 * @param {String} color - Цвет текста
 */
// DKTools.Window.prototype.changeTextColor = function(color) {
//     this.setupTextColor(color);
//     this.updateTextColor();
// };

/**
 * Изменяет прозрачность рисования контента окна
 *
 * @override
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
 */
DKTools.Window.prototype.updateOpenEvents = function() {
    this.updateEventContainer('open');
};

/**
 * Обновляет события типа close
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
    if (this.hasContentsSprite()) {
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
};

/**
 * Обновляет окно
 *
 * @override
 */
DKTools.Window.prototype.update = function() {
	Window.prototype.update.call(this);
    DKTools.Base.prototype.update.call(this);
	this.updateOpen();
	this.updateClose();
	this.updateBackgroundDimmer();
    this.updateArrows();
};





//===========================================================================
// DK Tools Window Command
//===========================================================================

DKTools.Window.Command.prototype = Object.create(DKTools.Window.prototype);
DKTools.Window.Command.prototype.constructor = DKTools.Window.Command;

// _create methods

DKTools.Window.Command.prototype._createContentsSprite = function() {
    this._windowContentsSprite = new DKTools.Sprite.Command();
};

// refresh methods

DKTools.Window.Command.prototype.refreshAll = function() {
    DKTools.Window.prototype.refreshAll.call(this);
    this._windowContentsSprite.refreshAll();
};





//===========================================================================
// DK Tools Window Tab
//===========================================================================

DKTools.Window.Tab.prototype = Object.create(DKTools.Window.prototype);
DKTools.Window.Tab.prototype.constructor = DKTools.Window_Tab;

// _clear methods

DKTools.Window.Tab.prototype._clearAll = function() {
    DKTools.Window.prototype._clearAll.call(this);
    this._tabs = {};
    this._tabIndex = 0;
};

// _create methods

DKTools.Window.Tab.prototype._createAllParts = function() {
    DKTools.Window.prototype._createAllParts.call(this);
    // this._createLayoutSprite();
    this._createTabSprite();
};

// DKTools.Window.Tab.prototype._createLayoutSprite = function() {
//     this._windowLayoutSprite = new DKTools.Layout();
// };

DKTools.Window.Tab.prototype._createTabSprite = function() {
    this._windowTabSprite = new DKTools.Sprite.Command();
};

// _add methods

DKTools.Window.Tab.prototype._addAllPartsToChild = function() {
    DKTools.Window.prototype._addAllPartsToChild.call(this);
    // this._addLayoutSpriteToChild();
    this._addTabSpriteToChild();
};

// DKTools.Window.Tab.prototype._addLayoutSpriteToChild = function() {
//     this.addChild(this._windowLayoutSprite);
// };

DKTools.Window.Tab.prototype._addTabSpriteToChild = function() {
    this.addChild(this._windowTabSprite);
};

// standard methods

// setup methods

DKTools.Window.Tab.prototype.setupTabs = function(tabs) {

};

// add methods

DKTools.Window.Tab.prototype.addTab = function(name, tab) {
    this._windowTabSprite.addCommand(name);
    this._tabs[name] = tab;
};

// create methods

// DKTools.Window.Tab.prototype.createContents = function() {
//     this._windowContentsSprite.start();
// };

// other methods

DKTools.Window.Tab.prototype.showTab = function(tab) {

};

DKTools.Window.Tab.prototype.hideTab = function(tab) {

};

DKTools.Window.Tab.prototype.tabName = function(tab) {

};

DKTools.Window.Tab.prototype.tabIndex = function() {

};

DKTools.Window.Tab.prototype.tabHeight = function() {
    return this.lineHeight();
};

DKTools.Window.Tab.prototype.tabPadding = function() {
    return 0;
};

DKTools.Window.Tab.prototype.tabContentsSize = function() {
    return {
        width: this.width - this.standardPadding() * 2,
        height: this.height - this.standardPadding() * 2 - this.tabHeight() - this.tabPadding()
    }
};

DKTools.Window.Tab.prototype.selectTab = function(tab) {

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
    this._setupAll();
    this._createAll();
    Scene_Base.prototype.initialize.call(this);
};

// _clear methods

/**
 * Очищает все данные
 *
 * @private
 */
DKTools.Scene.prototype._clearAll = function() {
};

// _setup methods

/**
 * Устанавливает все данные
 *
 * @private
 */
DKTools.Scene.prototype._setupAll = function() {
};

// _create methods

/**
 * Создает необходимые объекты
 *
 * @private
 */
DKTools.Scene.prototype._createAll = function() {
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
};

/**
 * Создает все спрайты в сцене
 */
DKTools.Scene.prototype.createAllSprites = function() {
};

/**
 * Создает все окна в сцене
 */
DKTools.Scene.prototype.createAllWindows = function() {
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

// other methods

/**
 * Выполняет callback функцию для каждого объекта сцены
 *
 * @param {Function} callback - Функция обработки для каждого объекта сцены
 */
DKTools.Scene.prototype.iterateChildren = function(callback) {
    this.children.forEach(callback);
};