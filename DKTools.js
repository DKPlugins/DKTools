/*
Title: DKTools
Author: DK (Denis Kuznetsov) (http://vk.com/dk_plugins)
Site: http://dk-plugins.ru
Group in VK: http://vk.com/dkplugins
Version: 0.92 beta
Release: 09.10.2016
First release: 13.01.2016
Supported languages: Russian, English
*/

/*
Название: DKTools
Автор: DK (Денис Кузнецов) (http://vk.com/dk_plugins)
Сайт: http://dk-plugins.ru
Группа ВК: http://vk.com/dkplugins
Версия: 0.92 beta
Релиз: 09.10.2016
Первый релиз: 13.01.2016
Поддерживаемые языки: Русский, Английский
*/

var DKLocalization = DKLocalization || {};

//===========================================================================
// Plugin settings
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
    },
    checkBoxStandardCheckedText: {
        ru: 'Да',
        en: 'Yes'
    },
    checkBoxStandardUncheckedText: {
        ru: 'Нет',
        en: 'No'
    }
};

//===========================================================================
// End of plugin settings
// Конец настройки плагина
//===========================================================================

/*:
* @plugindesc v.0.92 beta
* @author DK (Denis Kuznetsov)
* @help

 ### Info about plugin ###
 Title: DKTools
 Author: DK (Denis Kuznetsov) (http://vk.com/dk_plugins)
 Site: http://dk-plugins.ru
 Group in VK: http://vk.com/dkplugins
 Version: 0.92 beta
 Release: 09.10.2016
 First release: 13.01.2016
 Supported languages: Russian, English

 ### Elements ###
 1. DKTools_Sprite
 3. DKTools_Container_Base
 4. DKTools_Text_Container
 5. DKTools_Container
 6. DKTools_Progress_Bar_Base
 7. DKTools_Progress_Bar
 8. DKTools_Input_Base
 9. DKTools_Input
 10. DKTools_CheckBox_Base
 11. DKTools_CheckBox
 12. DKTools_Radio_Button_Base
 13. DKTools_Radio_Button
 14. DKTools_Clicker_Base
 15. DKTools_Clicker
 16. DKTools_ColorPicker_Base
 17. DKTools_ColorPicker
 18. DKTools_Slider_Base
 19. DKTools_Slider
 20. DKTools_Window
 21. DKTools_Window_Selectable
 22. DKTools_Window_Command

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

*/

/*:ru
* @plugindesc v.0.92 beta Набор базовых элементов
* @author DK (Денис Кузнецов)
* @help

 ### Информация о плагине ###
 Название: DKTools
 Автор: DK (Денис Кузнецов) (https://vk.com/dk_plugins)
 Сайт: http://dk-plugins.ru
 Группа ВК: http://vk.com/dkplugins
 Версия: 0.92 beta
 Релиз: 09.10.2016
 Первый релиз: 13.01.2016
 Поддерживаемые языки: Русский, Английский
 
 ### Элементы ###
 1. DKTools_Sprite
 3. DKTools_Container_Base
 4. DKTools_Text_Container
 5. DKTools_Container
 6. DKTools_Progress_Bar_Base
 7. DKTools_Progress_Bar
 8. DKTools_Input_Base
 9. DKTools_Input
 10. DKTools_CheckBox_Base
 11. DKTools_CheckBox
 12. DKTools_Radio_Button_Base
 13. DKTools_Radio_Button
 14. DKTools_Clicker_Base
 15. DKTools_Clicker
 16. DKTools_ColorPicker_Base
 17. DKTools_ColorPicker
 18. DKTools_Slider_Base
 19. DKTools_Slider
 20. DKTools_Window
 21. DKTools_Window_Selectable
 22. DKTools_Window_Command
 
 ### Создание объектов ###
 Создание объекта состоит из 4 этапов
 I этап:
 Создание самого объекта с помощью оператора new и передача конструктору необходимых параметров
 
 var object = new DKTools_Sprite(x, y, width, height);
 
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
 
*/

var Imported = Imported || {};
Imported.DKTools = true;

var DKVersion = DKVersion || {};
DKVersion.DKTools = 0.92;

var DKToolsVersion = DKToolsVersion || {};

var DKToolsParam = {};
DKToolsParam.param = PluginManager.parameters('DKTools');

var DKLocale = DKLocale || DKToolsParam.param['Plugin Language'];

//===========================================================================
// DK Localization Manager
//===========================================================================

var DKLocalizationManager = DKLocalizationManager || null;

if (!DKLocalizationManager) {

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

    DKLocalizationManager.translation = function (plugin, param) {
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

    DKLocalizationManager.format = function (string, params) {
        return string.replace(/%([0-9]+)/g, function (s, n) {
            return params[Number(n) - 1];
        });
    };

    DKLocalizationManager.parser = function (plugin, match, param) {
        return this.translation(plugin, param);
    };

    DKLocalizationManager.arrayParser = function (plugin, index, match, param) {
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
// DK Tools Utils
//===========================================================================

function DKToolsUtils() {
    throw new Error('This is a static class (Это статический класс!)');
}

// Режим разработчика
// Позволяет получить доступ к некоторым функциям
// Функции могут быть с багами
DKToolsUtils.debug = false;

// Массив слов для перевода строки в Boolean
DKToolsUtils.boolean = {};
DKToolsUtils.boolean.ru = ['нет', 'выключить', 'выкл', 'отключить', 'ложь', 'убрать'];
DKToolsUtils.boolean.en = ['false', 'disable', 'deactivate', 'no', 'not', 'off'];

/**
 *
 *
 * @method booleanArray
 * @return {Array}
 */
DKToolsUtils.booleanArray = function() {
    var array = [];
    for(var locale in DKToolsUtils.boolean) {
        array = array.concat(DKToolsUtils.boolean[locale]);
    }
    return array;
};

/**
 *
 *
 * @method toBoolean
 *
 * @param {String | Number | null} value
 *
 * @return {Boolean}
 */
DKToolsUtils.toBoolean = function(value) {
    if (value == null || Number(value) === 0) {
        return false;
    }
    value = value.toLowerCase();
    var array = this.booleanArray();
    for(var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return false;
        }
    }
    return true;
};

/**
 *
 *
 * @method splitString
 *
 * @param {String} string
 *
 * @return {Array}
 */
DKToolsUtils.splitString = function(string) {
    string = string.replace(/\s*\,\s*/g, ',');
    return string.split(',');
};

/**
 *
 *
 * @method stringToNumberArray
 *
 * @param {String} string
 *
 * @return {Array}
 */
DKToolsUtils.stringToNumberArray = function(string) {
    if (string instanceof String) {
        var array = this.splitString(string);
        return array.map(function(value) {
            return Number(value);
        });
    }
    return [];
};

/**
 *
 *
 * @method stringToBooleanArray
 *
 * @param {String} string
 *
 * @return {Array}
 */
DKToolsUtils.stringToBooleanArray = function(string) {
    if (string instanceof String) {
        var array = this.splitString(string);
        return array.map(function(value) {
            return this.toBoolean(value);
        }, this);
    }
    return [];
};

/**
 *
 *
 * @method stringToFontArray
 *
 * @param {String} string
 *
 * @return {Array}
 */
DKToolsUtils.stringToFontArray = function(string) {
    var standardFont = this.standardFontArray();
    var font = [];
    if (string instanceof String) {
        var array = this.splitString(string);
        font[0] = (array[0] === '-1' ? standardFont[0] : array[0]);
        font[1] = this.toBoolean(array[1]);
        font[2] = (array[2] === '-1' ? standardFont[2] : Number(array[2]));
    }
    return font;
};

/**
 *
 *
 * @method standardFontName
 * @return {String}
 */
DKToolsUtils.standardFontName = function() {
    return 'GameFont';
};

/**
 *
 *
 * @method standardFontItalic
 * @return {Boolean}
 */
DKToolsUtils.standardFontItalic = function() {
    return false;
};

/**
 *
 *
 * @method standardFontSize
 * @return {Number}
 */
DKToolsUtils.standardFontSize = function() {
    return 28;
};

/**
 *
 *
 * @method standardFontArray
 * @return {Array}
 */
DKToolsUtils.standardFontArray = function() {
    return [this.standardFontName(), this.standardFontItalic(), this.standardFontSize()];
};

/**
 * Копирует функции и свойства из одного класса в другой
 *
 * @method mixin
 *
 * @param {Object} target - Куда копируем
 * @param {Object} source - Откуда копируем
*/
DKToolsUtils.mixin = function(target, source) {
    var keys = Object.getOwnPropertyNames(source);
    keys.forEach(function(key) {
        var property = Object.getOwnPropertyDescriptor(source, key);
        Object.defineProperty(target, key, property);
    });
};

/**
 * @method _checkVersion
 * @private
 */
DKToolsUtils._checkVersion = function() {
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
// Scene Manager
//===========================================================================

var DKTools_SceneManager_initialize = SceneManager.initialize;
SceneManager.initialize = function() {
    DKTools_SceneManager_initialize.call(this);
    DKToolsUtils._checkVersion();
};

//===========================================================================
// DKTools Input Manager
//===========================================================================

function DKToolsInputManager() {
	throw new Error('This is a static class (Это статический класс!)');
}

DKToolsInputManager._ignoredKeyCodes = [8, 13, 27];

/**
 *
 *
 * @method _isIgnored
 * @private
 *
 * @param {Number} keyCode
 * @return {Boolean}
 */
DKToolsInputManager._isIgnored = function(keyCode) {
	return DKToolsInputManager._ignoredKeyCodes.contains(keyCode);
};

/**
 *
 *
 * @method _onKeyPress
 * @private
 *
 * @param event
 */
DKToolsInputManager._onKeyPress = function(event) {
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
 *
 *
 * @method clear
 */
DKToolsInputManager.clear = function() {
	this._text = '';
};

/**
 *
 *
 * @method hasText
 * @return {Boolean}
 */
DKToolsInputManager.hasText = function() {
	return !!this._text;
};

/**
 *
 *
 * @method getText
 * @return {String}
 */
DKToolsInputManager.getText = function() {
	if (!this.hasText()) {
        return '';
    }
	var text = this._text;
	this.clear();
	return text;
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
	DKToolsInputManager.clear();
};

var DKTools_Input_setupEventHandlers = Input._setupEventHandlers;
Input._setupEventHandlers = function () {
	DKTools_Input_setupEventHandlers.call(this);
    document.addEventListener('keypress', DKToolsInputManager._onKeyPress.bind(DKToolsInputManager));
};

//===========================================================================
// Touch Input
//===========================================================================

Object.defineProperty(TouchInput, 'mouseX', {
    get: function() {
        return this._mouseX;
    },
    configurable: true
});

Object.defineProperty(TouchInput, 'mouseY', {
    get: function() {
        return this._mouseY;
    },
    configurable: true
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
 *
 *
 * @method isMouseMoved
 * @return {Boolean}
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

/* NOT FOR RELEASE

 Bitmap.prototype.rotate = function(angle) {
 //var context = this._context;
 //context.save();
 //context.rotate(angle);
 //context.restore();
 //this._setDirty();
 };

 Bitmap.prototype.strokeText = function(text, align, x, y, width, height) {
 //var context = this._context;
 //context.save();
 //context.rotate(angle);
 //context.restore();
 //this._setDirty();
 //if (text !== undefined)
 //{
 //    var tx = x;
 //    var ty = y + lineHeight - (lineHeight - this.fontSize * 0.7) / 2;
 //    var context = this._context;
 //    var alpha = context.globalAlpha;
 //    maxWidth = maxWidth || 0xffffffff;
 //    if (align === 'center') {
 //        tx += maxWidth / 2;
 //    }
 //    if (align === 'right') {
 //        tx += maxWidth;
 //    }
 //    context.save();
 //    context.font = this._makeFontNameText();
 //    context.textAlign = align;
 //    context.textBaseline = 'alphabetic';
 //    context.globalAlpha = 1;
 //    this._drawTextOutline(text, tx, ty, maxWidth);
 //    context.globalAlpha = alpha;
 //    this._drawTextBody(text, tx, ty, maxWidth);
 //    context.restore();
 //    this._setDirty();
 //}
 };

 Bitmap.prototype.setPixel = function(x, y, color) {
 };

 Bitmap.prototype.radialFillRect = function(color1, color2, vertical, x, y, width, height, radius1, radius2) {
 var context = this._context;
 var grad;
 if (vertical)
 grad = context.createRadialGradient(x, y, radius1, x, y + height, radius2);
 else
 //grad = context.createRadialGradient(x, y, radius1, x + width, y, radius2);
 grad = context.createRadialGradient((x + width) / 2, (y + height) / 2, 5, (x + width) / 2, (y + height) / 2, 100);
 grad.addColorStop(0, color1);
 grad.addColorStop(1, color2);
 context.save();
 context.fillStyle = grad;
 context.fillRect(x, y, width, height);
 context.restore();
 this._setDirty();
 };

 */

/**
 *
 *
 * @method drawLine
 *
 * @param {Number} x1
 * @param {Number} y1
 * @param {Number} x2
 * @param {Number} y2
 * @param {String} color
 */
Bitmap.prototype.drawLine = function(x1, y1, x2, y2, color) {
    var context = this._context;
    context.save();
    context.strokeStyle = color;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.restore();
    this._setDirty();
};

/**
 *
 *
 * @method strokeRect
 *
 * @param {Number} x
 * @param {Number} y
 * @param {Number} width
 * @param {Number} height
 * @param {String} color
 */
Bitmap.prototype.strokeRect = function(x, y, width, height, color) {
    var context = this._context;
    context.save();
    context.strokeStyle = color;
    context.strokeRect(x, y, width, height);
    context.restore();
    this._setDirty();
};

/**
 *
 *
 * @method fillArc
 *
 * @param {Number} x
 * @param {Number} y
 * @param {Number} radius
 * @param {Number} startAngle
 * @param {Number} endAngle
 * @param {String} color
 * @param {Boolean} antiClockwise
 */
Bitmap.prototype.fillArc = function (x, y, radius, startAngle, endAngle, color, antiClockwise) {
    var context = this._context;
    context.save();
    context.fillStyle = color;
    context.arc(x, y, radius, startAngle, endAngle, antiClockwise);
    context.fill();
    context.restore();
    this._setDirty();
};

/**
 *
 *
 * @method strokeArc
 *
 * @param {Number} x
 * @param {Number} y
 * @param {Number} radius
 * @param {Number} startAngle
 * @param {Number} endAngle
 * @param {String} color
 * @param {Boolean} antiClockwise
 */
Bitmap.prototype.strokeArc = function (x, y, radius, startAngle, endAngle, color, antiClockwise) {
    var context = this._context;
    context.save();
    context.strokeStyle = color;
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

Point.emptyPoint = new Point(0, 0);

/**
 *
 *
 * @method isEmpty
 * @return {Boolean}
 */
Point.prototype.isEmpty = function() {
    return this.x === 0 && this.y === 0;
};

/**
 *
 *
 * @method toArray
 * @return {Array}
 */
Point.prototype.toArray = function() {
    return [this.x, this.y];
};

/**
 *
 *
 * @method equals
 *
 * @param {Point} point
 *
 * @return {Boolean}
 */
Point.prototype.equals = function(point) {
    point = point || Point.emptyPoint;
    return this.toArray().equals(point.toArray());
};

/**
 *
 *
 * @method clone
 * @return {Point}
 */
Point.prototype.clone = function() {
    return new Point(this.x, this.y);
};

//===========================================================================
// Rectangle
//===========================================================================

/**
 *
 *
 * @method isEmpty
 * @return {Boolean}
 */
Rectangle.prototype.isEmpty = function() {
    return this.x === 0 && this.y === 0 && this.width === 0 && this.height === 0;
};

/**
 *
 *
 * @method toArray
 * @return {Array}
 */
Rectangle.prototype.toArray = function() {
    return [this.x, this.y, this.width, this.height];
};

/**
 *
 *
 * @method equals
 *
 * @param {Rectangle} rect
 *
 * @return {Boolean}
 */
Rectangle.prototype.equals = function(rect) {
    rect = rect || Rectangle.emptyRectangle;
    return this.toArray().equals(rect.toArray());
};

/**
 *
 *
 * @method clone
 * @return {Rectangle}
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
     *
     * @method Array.prototype.count
     *
     * @param {*} item - Элемент, количество которого нужно найти
     *
     * @return {Number} Возвращает количество элементов item в массиве
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
     *
     * @method Array.prototype.counts
     *
     * @param {...number} arguments
     *
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
     *
     * @method isEmpty
     * @return {Boolean} Возвращает true, если массив пуст
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
     *
     * @method isNeedCompact
     * @return {Boolean} Возвращает true, если массив содержит NaN, null или undefined
     */
    isNeedCompact: {
        configurable: true,
        enumerable: false,
        value: function() {
            return this.length !== this.realLength();
        }
    },

    /**
     * Проверяет, что массив является числовым
     *
     * @method isNumberArray
     * @return {Boolean} Возвращает true, если массив является числовым
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
     * Проверяет, что массив является булевым
     *
     * @method isBooleanArray
     * @return {Boolean} Возвращает true, если массив является булевым
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
     * Проверяет, что массив является строковым
     *
     * @method isStringArray
     * @return {Boolean} Возвращает true, если массив является строковым
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
     *
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
     * Выполняет логическую операцию дизъюнкция для булевого массива
     *
     * @method disjunction
     * @return {Boolean | null} Возвращает true, если массив содержит true
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
     *
     * @method conjunction
     * @return {Boolean | null} Возвращает true, если массив не содержит false
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
// DK Tools Event
//===========================================================================

function DKToolsEvent() {
    this.initialize.apply(this, arguments);
}

// properties

Object.defineProperties(DKToolsEvent.prototype, {

    /**
     * Спрайт, для которого установлено событие
     *
     * @property target
     * @type DKToolsSprite
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
     * @property type
     * @type String
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
     * @property handler
     * @type Function || null
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
     * @property duration
     * @type Number
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
     * @property onStartHandler
     * @type Function || null
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
     * @property onEndHandler
     * @type Function || null
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
     * @property startDuration
     * @type Number
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
     * @property pauseDuration
     * @type Number
     */
    pauseDuration: {
        get: function() {
            return this._pauseDuration;
        },
        configurable: true
    }
});

// initialize method

/**
 * @class DKToolsEvent
 *
 * @constructor
 *
 * @param {DKToolsSprite} target - Спрайт или Окно, для которого установлено событие
 * @param {String} type - Тип события
 * @param {Function | null} [handler = null] - Обработчик события
 * @param {Number | null} [duration = 1|-1] - Длительность события
 * @param {Function | null} [onStartHandler = null] - Обработчик начала работы события
 * @param {Function | null} [onEndHandler = null] - Обработчик окончания работы события
 */
DKToolsEvent.prototype.initialize = function(target, type, handler, duration, onStartHandler, onEndHandler) {
    this._target = target;
    this._type = type;
    this._handler = handler;
    this._duration = duration || (this._type === 'wait' ? 1 : -1);
    this._onStartHandler = onStartHandler;
    this._onEndHandler = onEndHandler;
    this._startDuration = this._duration;
    this._pauseDuration = 0;
};

// has methods

/**
 * Проверяет обработчик события
 *
 * @method _hasHandler
 * @private
 *
 * @return {Boolean} Возвращает true, если обработчик события установлен
 */
DKToolsEvent.prototype._hasHandler = function() {
    return !!this._handler;
};

/**
 * Проверяет обработчик начала работы события
 *
 * @method _hasOnStartHandler
 * @private
 *
 * @return {Boolean} Возвращает true, если обработчик начала работы события установлен
 */
DKToolsEvent.prototype._hasOnStartHandler = function() {
    return !!this._onStartHandler;
};

/**
 * Проверяет обработчик окончания работы события
 *
 * @method _hasOnEndHandler
 * @private
 *
 * @return {Boolean} Возвращает true, если обработчик окончания работы события установлен
 */
DKToolsEvent.prototype._hasOnEndHandler = function() {
    return !!this._onEndHandler;
};

// can methods

/**
 * Проверяет обработчик начала работы события на возможность вызова
 *
 * @method _canCallOnStartHandler
 * @private
 *
 * @return {Boolean} Возвращает true, если можно вызвать обработчик начала работы события
 */
DKToolsEvent.prototype._canCallOnStartHandler = function() {
    return this._hasOnStartHandler() && this._startDuration === this._duration && this._duration !== -1;
};

/**
 * Проверяет обработчик окончания работы события на возможность вызова
 *
 * @method _canCallOnEndHandler
 * @private
 *
 * @return {Boolean} Возвращает true, если можно вызвать обработчик окончания работы события
 */
DKToolsEvent.prototype._canCallOnEndHandler = function() {
    return this._hasOnEndHandler() && this.duration === 0;
};

// call methods

/**
 * Вызывает обработчик события
 *
 * @method _callHandler
 * @private
 */
DKToolsEvent.prototype._callHandler = function() {
    if (this._hasHandler()) {
        this._handler(this);
    }
};

/**
 * Вызывает обработчик начала работы события
 *
 * @method _callOnStartHandler
 * @private
 */
DKToolsEvent.prototype._callOnStartHandler = function() {
    if (this._canCallOnStartHandler()) {
        this._onStartHandler(this);
    }
};

/**
 * Вызывает обработчик окончания работы события
 *
 * @method _callOnEndHandler
 * @private
 */
DKToolsEvent.prototype._callOnEndHandler = function() {
    if (this._canCallOnEndHandler()) {
        this._onEndHandler(this);
    }
};

// check methods

/**
 * Проверяет длительность события
 *
 * @method _checkDuration
 * @private
 *
 * @return {Boolean} Возвращает true, если длительность события больше 0
 */
DKToolsEvent.prototype._checkDuration = function() {
    return this._duration > 0;
};

/**
 * Проверяет длительность паузы события
 *
 * @method _checkPauseDuration
 * @private
 *
 * @return {Boolean} Возвращает true, если длительность паузы события больше 0
 */
DKToolsEvent.prototype._checkPauseDuration = function() {
    return this._pauseDuration > 0;
};

/**
 * Проверяет событие на возможность работы
 *
 * @method checkEvent
 * @return {Boolean} Возвращает true, если событие еще может работать
 */
DKToolsEvent.prototype.checkEvent = function() {
    if (this._duration === -1) {
        return true;
    }
    return this._checkDuration();
};

// is method

/**
 * Проверяет событие на паузу
 *
 * @method isPaused
 * @return {Boolean} Возвращает true, если событие приостановлено
 */
DKToolsEvent.prototype.isPaused = function() {
    return this._pauseDuration === -1 || this._checkPauseDuration();
};

// other methods

/**
 * Ставит событие на паузу
 *
 * @method pause
 * @param {Number} duration - Длительность паузы
 */
DKToolsEvent.prototype.pause = function(duration) {
    this._pauseDuration = duration || -1;
};

/**
 * Снимает событие с паузы
 *
 * @method resume
 */
DKToolsEvent.prototype.resume = function() {
    this._pauseDuration = 0;
};

/**
 * Удаляет событие
 *
 * @method remove
 */
DKToolsEvent.prototype.remove = function() {
    this._target.removeEvent(this);
};

/**
 * Добавляет длительность события
 *
 * @method addDuration
 * @param {Number} duration - Длительность события
 */
DKToolsEvent.prototype.addDuration = function(duration) {
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
DKToolsEvent.prototype.addPauseDuration = function(duration) {
    if (this._checkPauseDuration()) {
        this._pauseDuration += duration || 0;
    }
};

// update methods

/**
 * Обновляет длительность события
 *
 * @method _updateDuration
 * @private
 */
DKToolsEvent.prototype._updateDuration = function() {
    if (this._checkDuration()) {
        this._duration--;
    }
};

/**
 * Обновляет длительность паузы события
 *
 * @method _updatePauseDuration
 * @private
 */
DKToolsEvent.prototype._updatePauseDuration = function() {
    if (this._checkPauseDuration()) {
        this._pauseDuration--;
    }
};

/**
 * Обновляет событие
 *
 * @method update
 */
DKToolsEvent.prototype.update = function() {
    if (this.checkEvent()) {
        if (!this.isPaused()) {
            this._callOnStartHandler();
            this._callHandler();
            this._updateDuration();
            this._callOnEndHandler();
        } else {
            this._updatePauseDuration();
        }
    }
};





//===========================================================================
// DK Tools Base
//===========================================================================

function DKTools_Base() {
    throw new Error('This is a abstract class (Это абстрактный класс!)');
}

// properties

Object.defineProperties(DKTools_Base.prototype, {

    /**
     * Шрифт текста
     *
     * @property font
     * @type Array
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
     * @property textColor
     * @type String
     */
    textColor: {
        get: function() {
            return this._textColor;
        },
        configurable: true
    },

    paintOpacity: {
        get: function() {
            return this._paintOpacity;
        },
        configurable: true
    },

    /**
     * Цвет фона
     *
     * @property backgroundColor
     * @type String
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
     * @property text
     * @type String
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
     * @property align
     * @type String
     */
    align: {
        get: function() {
            return this._align;
        },
        configurable: true
    },

    mouseX : {
        get: function() {
            return this.canvasToLocalX(TouchInput.mouseX);
        },
        configurable: true
    },

    mouseY : {
        get: function() {
            return this.canvasToLocalY(TouchInput.mouseY);
        },
        configurable: true
    },

});

// initialize methods

DKTools_Base.prototype.initialize = function(object, y, width, height) {
    this._clearAll();
    this._setupAll();
    this._createAll();
    var x;
    if (object) {
        if (object.constructor === Object) {
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

// clear methods

/**
 * Очищает все данные спрайта
 *
 * @method clearAll
 */
DKTools_Base.prototype._clearAll = function() {
    this.clearEvents();
    this._clearSymbols();
};

/**
 * Очищает события спрайта
 *
 * @method clearEvents
 * @param {Array | String | null} [object = null] - Массив с типами событий или тип события
 */
DKTools_Base.prototype.clearEvents = function(object) {
    if (object) {
        if (object instanceof Array) {
            for(var i = 0; i < object.length; i++) {
                var type = object[i];
                this.createEventContainer(type);
            }
        } else {
            this._events[object] = [];
        }
    } else {
        this._events = {};
    }
};

/**
 * Очищает параметры спрайта
 *
 * @method clearSymbols
 */
DKTools_Base.prototype._clearSymbols = function() {
    this._symbols = {};
};

// standard methods

/**
 * Возвращает стандартную ширину текста
 *
 * @method standardDrawWidth
 * @return {Number} Стандартная ширина текста
 */
DKTools_Base.prototype.standardDrawWidth = function() {
    return this.bitmap.width;
};

/**
 * Возвращает стандартную высоту текста
 *
 * @method standardDrawHeight
 * @return {Number} Стандартная высота текста
 */
DKTools_Base.prototype.standardDrawHeight = function() {
    return this.bitmap.height;
};

/**
 * Возвращает стандартную видимость спрайта
 *
 * @method standardVisible
 * @return {Boolean} Стандартная видимость спрайта
 */
DKTools_Base.prototype.standardVisible = function() {
    return true;
};

/**
 * Возвращает стандартное значение активности спрайта
 *
 * @method standardActive
 * @return {Boolean} Стандартное значение активности спрайта
 */
DKTools_Base.prototype.standardActive = function() {
    return true;
};

/**
 * Возвращает стандартное имя шрифта
 *
 * @method standardFontName
 * @return {String} Стандартное имя шрифта
 */
DKTools_Base.prototype.standardFontName = function() {
    return 'GameFont';
};

/**
 * Возвращает стандартное значение для курсива
 *
 * @method standardFontItalic
 * @return {Boolean} Стандартное значение для курсива
 */
DKTools_Base.prototype.standardFontItalic = function() {
    return false;
};

/**
 * Возвращает стандартный размер шрифта
 *
 * @method standardFontSize
 * @return {Number} Стандартный размер шрифта
 */
DKTools_Base.prototype.standardFontSize = function() {
    return 28;
};

/**
 * Возвращает стандартный шрифт текста
 *
 * @method standardFont
 * @return {Array} Стандартный шрифт текста
 */
DKTools_Base.prototype.standardFont = function() {
    return [this.standardFontName(), this.standardFontItalic(), this.standardFontSize()];
};

/**
 * Возвращает стандартный цвет текста
 *
 * @method standardTextColor
 * @return {String} Стандартный цвет текста
 */
DKTools_Base.prototype.standardTextColor = function() {
    return '#ffffff';
};

DKTools_Base.prototype.standardPaintOpacity = function() {
    return 255;
};

/**
 * Возвращает стандартный цвет фона
 *
 * @method standardBackgroundColor
 * @return {null} Стандартный цвет фона
 */
DKTools_Base.prototype.standardBackgroundColor = function() {
    return null;
};

/**
 * Возвращает стандартный текст
 *
 * @method standardText
 * @return String
 */
DKTools_Base.prototype.standardText = function() {
    return '';
};

/**
 * Возвращает стандартное выравнивание текста
 *
 * @method standardAlign
 * @return {String} Стандартное выравнивание текста
 */
DKTools_Base.prototype.standardAlign = function() {
    return 'center';
};

/**
 * Возвращает стандартную обложку окна
 *
 * @method standardWindowskin
 * @return {String}
 */
DKTools_Base.prototype.standardWindowskin = function() {
    return 'Window';
};

// setup methods

DKTools_Base.prototype._setupAll = function() {
    this._setupEvents();
};

DKTools_Base.prototype._setupEvents = function() {
};

//DKTools_Base.prototype.setup = function(type, value) {
//    type = type.charAt(0).toUpperCase() + type.substr(1);
//    var func = 'setup%1'.format(type);
//    this[func](value);
//};

/**
 * Устанавливает все параметры спрайта
 *
 * @method setupAll
 *
 * @param {Object | null} [object = {}] - Объект типа {}
 *
 * @param {Number | null} [object.id = null] - ID спрайта
 * @param {Boolean | null} [object.visible = null] - Видимость спрайта
 * @param {Boolean | null} [object.active = null] - Активность спрайта
 * @param {String | null} [object.textColor = null] - Цвет текста
 * @param {String | null} [object.align = null] - Выравнивание текста
 * @param {String | null} [object.backgroundColor = null] - Цвет фона
 * @param {Array | null} [object.font = null] - Шрифт текста
 * @param {Number | null} [object.opacity = null] - Прозрачность спрайта
 * @param {Object | Point | null} [object.scale = null] - Масштабирование спрайта
 */
DKTools_Base.prototype.setupAll = function(object) {
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
    this.setupOpacity(object.opacity);
};

/**
 * Устанавливает ID спрайта
 *
 * @method setupId
 * @param {Number | String | null} [id = null] - ID спрайта
 */
DKTools_Base.prototype.setupId = function(id) {
    this.id = (id == null ? null : id);
};

/**
 * Устанавливает видимость спрайта
 *
 * @method setupVisible
 * @param {Boolean | null} [visible = null] - Видимость спрайта
 */
DKTools_Base.prototype.setupVisible = function(visible) {
    this.visible = (visible == null ? this.standardVisible() : visible);
};

/**
 * Устанавливает активность спрайта
 *
 * @method setupActive
 * @param {Boolean | null} [active = null] - Активность спрайта
 */
DKTools_Base.prototype.setupActive = function(active) {
    this.active = (active == null ? this.standardActive() : active);
};

/**
 * Устанавливает шрифт текста
 *
 * @method setupFont
 * @param {Array | null} [font = null] - Шрифт текста
 */
DKTools_Base.prototype.setupFont = function(font) {
    this._font = this._checkArray(font, this.standardFont());
};

/**
 * Устанавливает цвет текста
 *
 * @method setupTextColor
 * @param {String | null} [textColor = null] - Цвет текста
 */
DKTools_Base.prototype.setupTextColor = function(textColor) {
    this._textColor = textColor || this.standardTextColor();
};

/**
 * Устанавливает прозрачность рисования окна

 * @method setupPaintOpacity
 * @param {Number || null} opacity - Прозрачность рисования окна
 */
DKTools_Base.prototype.setupPaintOpacity = function(opacity) {
    this._paintOpacity = (opacity == null ? this.standardPaintOpacity() : opacity);
};

/**
 * Устанавливает цвет фона
 *
 * @method setupBackgroundColor
 * @param {String | null} [color = null] - Цвет фона
 */
DKTools_Base.prototype.setupBackgroundColor = function(color) {
    this._backgroundColor = (color == null ? this.standardBackgroundColor() : color);
};

/**
 * Устанавливает отображаемый текст
 *
 * @method setupText
 * @param {String || null} text - Отображаемый текст
 */
DKTools_Base.prototype.setupText = function(text) {
    this._text = (text == null ? this.standardText() : String(text));
};

/**
 * Устанавливает выравнивание текста
 *
 * @method setupAlign
 * @param {String | null} [align = null] - Выравнивание текста
 */
DKTools_Base.prototype.setupAlign = function(align) {
    this._align = align || this.standardAlign();
};

// set methods

//DKTools_Base.prototype.set = function(paramType, newValue, onChangeType) {
//    var funcType = paramType.charAt(0).toUpperCase() + paramType.substr(1);
//    var setupMethod = this['setup%1'.format(funcType)];
//    var lastValueType = '_%1'.format(paramType);
//    if (!this.hasOwnProperty(lastValueType)) {
//        lastValueType = this['%1'.format(paramType)];
//    }
//    var lastValue = this[lastValueType];
//    if (lastValue instanceof Array && lastValue.equals(newValue) || lastValue === newValue) {
//        return false;
//    }
//    setupMethod.call(this, newValue);
//    if (lastValue instanceof Array && lastValue.equals(newValue) || lastValue === newValue) {
//        return false;
//    }
//    switch(onChangeType) {
//        case 0:
//            this.start();
//        case 1:
//            this.refreshAll();
//            break;
//        case 2:
//            this.updateAll();
//            break;
//        case 3:
//            this.redrawAll();
//            break;
//    }
//    return true;
//};

//DKTools_Base.prototype.setAll = function(object) {
//    object = object || {};
//    var changed = 0;
//    if (this.set('font', object.font)) {
//        changed++;
//    }
//    if (this.set('textColor', object.textColor)) {
//        changed++;
//    }
//    if (this.set('paintOpacity', object.paintOpacity)) {
//        changed++;
//    }
//    if (this.set('backgroundColor', object.backgroundColor)) {
//        changed++;
//    }
//    if (this.set('text', object.text)) {
//        changed++;
//    }
//    if (this.set('align', object.align)) {
//        changed++;
//    }
//    if (this.set('opacity', object.opacity)) {
//        changed++;
//    }
//    return changed;
//};

/**
 * Изменяет все параметры спрайта
 *
 * @method setAll
 *
 * @param {Object | null} [object = {}] - Объект типа {}
 * @param {Boolean | null} [blockStart = null] - Блокировка вызова функции start
 *
 * @param {String | null} [object.textColor = null] - Цвет текста
 * @param {String | null} [object.align = null] - Выравнивание текста
 * @param {String | null} [object.backgroundColor = null] - Цвет фона
 * @param {Array | null} [object.font = null] - Шрифт текста
 * @param {Number | null} [object.opacity = null] - Прозрачность спрайта
 * @param {Object | Point | null} [object.scale = null] - Масштабирование спрайта
 *
 * @return {Number} Количество измененных параметров
 */
DKTools_Base.prototype.setAll = function(object) {
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
    if (this.setOpacity(object.opacity)) {
        changed++;
    }
    return changed;
};

/**
 * Изменяет видимость спрайта
 *
 * @method setVisible
 *
 * @param {Boolean | null} [visible = null] - Видимость спрайта
 *
 * @return {Boolean} Возвращает true, если изменение произошло
 */
DKTools_Base.prototype.setVisible = function(visible) {
    if (this.visible === visible) {
        return false;
    }
    var lastVisible = this.visible;
    this.setupVisible(visible);
    return lastVisible !== this.visible;
};

/**
 * Изменяет активность спрайта
 *
 * @method setActive
 *
 * @param {Boolean | null} [active = null] - Активность спрайта
 *
 * @return {Boolean} Возвращает true, если изменение произошло
 */
DKTools_Base.prototype.setActive = function(active) {
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
 * @param {Array || null} font - Шрифт текста
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * @return Boolean
 */
DKTools_Base.prototype.setFont = function(font, blockStart) {
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
 * @param {String || null} color - Цвет текста
 * @param {Boolean || null} blockUpdate - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
 */
DKTools_Base.prototype.setTextColor = function(color, blockRefresh) {
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
 * Изменяет прозрачность рисования окна

 * @method setPaintOpacity
 * @param {Number || null} opacity - Прозрачность рисования окна
 * @param {Boolean || null} block -
 * @return Boolean
 */
DKTools_Base.prototype.setPaintOpacity = function(opacity, blockRefresh) {
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
 * @param {String || null} color - Цвет фона
 * @param {Boolean || null} blockUpdate - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
 */
DKTools_Base.prototype.setBackgroundColor = function(color, blockRefresh) {
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
 * @param {String || null} text - Отображаемый текст
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * @return Boolean
 */
DKTools_Base.prototype.setText = function(text, blockStart) {
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
 * @param {String || null} align - Выравнивание текста
 * @param {Boolean || null} blockUpdate - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
 */
DKTools_Base.prototype.setAlign = function(align, blockRefresh) {
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

// other methods

/**
 * Запускает работу спрайта
 *
 * @method start
 * @param {Boolean || null} activate - Активировать спрайт
 */
DKTools_Base.prototype.start = function(activate) {
    this._started = true;
    this.updateStartEvents();
    this.checkAll();
    this.createAll();
    this.refreshAll();
    if (activate) {
        this.activate();
    }
};

// check methods

DKTools_Base.prototype.checkAll = function() {
    this.checkSize();
};

// create methods

DKTools_Base.prototype._createAll = function() {
};

DKTools_Base.prototype.createAll = function() {
};

//

DKTools_Base.prototype.refreshAll = function() {
    if (this.canRefreshAll()) {
        this.updateAll();
        this.redrawAll();
    }
};

DKTools_Base.prototype.updateAll = function() {
    this.updateBitmap();
};

DKTools_Base.prototype.redrawAll = function() {
    this.clear();
    this.drawAll();
};

// active methods

/**
 * Активирует спрайт
 *
 * @method activate
 */
DKTools_Base.prototype.activate = function() {
    this.setupActive(true);
    this.updateActivateEvents();
    this.updateInputData();
};

/**
 * Деактивирует спрайт
 *
 * @method deactivate
 */
DKTools_Base.prototype.deactivate = function() {
    this.setupActive(false);
    this.updateDeactivateEvents();
    this.updateInputData();
};

// visible methods

/**
 * Показывает спрайт
 *
 * @method show
 *
 * @param {Number || null} duration - Длительность появления
 * @param {Boolean || null} activate - Активировать спрайта
 */
DKTools_Base.prototype.show = function(duration, activate) {
    if (duration > 0) {
        this._createVisibleEvent(duration, true);
    } else {
        this.setupVisible(true);
    }
    this.updateShowEvents();
    if (activate) {
        this.activate();
    }
};

/**
 * Скрывает спрайт
 *
 * @method hide
 *
 * @param {Number || null} duration - Длительность исчезновения
 * @param {Boolean || null} blockDeactivate - Блокировка деактивации спрайта
 */
DKTools_Base.prototype.hide = function(duration, blockDeactivate) {
    if (duration > 0) {
        this._createVisibleEvent(duration, false);
    } else {
        this.setupVisible(false);
    }
    this.updateHideEvents();
    if (!blockDeactivate) {
        this.deactivate();
    }
};

// clone mthods

/**
 * Возвращает объект со всеми параметрами спрайта
 *
 * @method object
 * @return {Object} Объект со всеми параметрами спрайта
 */
DKTools_Base.prototype.object = function() {
    var object = {
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
        align: this._align
    };
    return object;
};

/**
 * Клонирует текущий спрайт
 *
 * @method clone
 *
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * @return DKTools_Sprite
 */
DKTools_Base.prototype.clone = function(blockStart) {
    var object = this.object();
    var clone = new (this.constructor)(object);
    if (!blockStart) {
        clone.start();
    }
    return clone;
};

// uncategorized methods

DKTools_Base.prototype.positionToRect = function() {
    return { x: this.x, y: this.y, width: this.width, height: this.height };
};

DKTools_Base.prototype.size = function() {
    return { width: this.width, height: this.height };
};

/**
 * Очищает Rect, если Bitmap есть
 * Возвращает true, если Bitmap есть
 *
 * @method clearRect
 *
 * @param {Number || Rectangle || null} object - Координата X или область
 * @param {Number || null} y - Координата Y
 * @param {Number || null} width - Ширина области
 * @param {Number || null} height - Высота области
 *
 * @return Boolean
 */
DKTools_Base.prototype.clearRect = function(object, y, width, height) {
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
 * @return Boolean
 */
DKTools_Base.prototype.clear = function() {
    return this.clearRect();
};

/**
 * Очищает отображаемый текст
 *
 * @method clearText
 * @param {Boolean} blockStart - Блокировка вызова функции start
 */
DKTools_Base.prototype.clearText = function(blockStart) {
    this.setText(blockStart);
};

/**
 * Заставляет спрайт ждать
 *
 * @method wait
 * @param {Number} duration - Время ожидания в фреймах
 * @param {Function | null} [onEndHandler] - Обработчик окончания работы события
 */
DKTools_Base.prototype.wait = function(duration, onEndHandler) {
    var handler = null;
    var onStartHandler = null;
    return this.addEvent('wait', handler, duration, onStartHandler, onEndHandler);
};

DKTools_Base.prototype.canRefreshAll = function() {
    return this.hasBitmap();
};

/**
 * Возвращает Bitmap из объекта или загружает его
 *
 * @method bitmapFromObject
 * @param {Bitmap || Object || null} object - Bitmap или Объект типа {}
 *
 * @property {String} folder - Папка изображения
 * @property {String} filename - Название файла
 * @property {Function || null} listener - Метод обработки после загрузки Bitmap
 * @property {Number || null} hue - Оттенок
 * @property {Boolean || null} smooth - Сглаживание
 *
 * @return Bitmap || null
 */
DKTools_Base.prototype.bitmapFromObject = function(object) {
    var bitmap = object || null;
    if (!object) {
        return bitmap;
    }
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
 * Returns the width of text
 *
 * @method textWidth
 *
 * @param {String} text - Текст, ширину которого требуется определить (Text width is to be determined)
 *
 * @return Number
 */
DKTools_Base.prototype.textWidth = function(text) {
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
 *
 *
 * @method lineHeight
 * @return {Number}
 */
DKTools_Base.prototype.lineHeight = Window_Base.prototype.lineHeight;

/**
 * Возвращает минимальную ширину Bitmap
 * Returns the minimum width of the Bitmap
 *
 * @method minWidth
 * @return Number
 */
DKTools_Base.prototype.minWidth = function() {
    var minWidth = 0;
    if (this.hasText()) {
        minWidth = this.textWidth(this.text);
    }
    return minWidth;
};

/**
 * Возвращает минимальную высоту Bitmap
 * Returns the minimum height of the Bitmap
 *
 * @method minHeight
 * @return Number
 */
DKTools_Base.prototype.minHeight = function() {
    return (this.hasText() ? this.lineHeight() : 0);
};

DKTools_Base.prototype.minSize = function() {
    return { width: this.minWidth(), height: this.minHeight() };
};

/**
 * Возвращает максимальную ширину Bitmap
 *
 * @method maxWidth
 * @return Number
 */
DKTools_Base.prototype.maxWidth = function() {
    return Graphics.boxWidth;
};

/**
 * Возвращает максимальную высоту Bitmap
 *
 * @method maxHeight
 * @return Number
 */
DKTools_Base.prototype.maxHeight = function() {
    return Graphics.boxHeight;
};

DKTools_Base.prototype.maxSize = function() {
    return { width: this.maxWidth(), height: this.maxHeight() };
};

// has methods

/**
 * Проверяет спрайт на наличие Bitmap
 *
 * @method hasBitmap
 * @return {Boolean} Возвращает true, если Bitmap есть
 */
DKTools_Base.prototype.hasBitmap = function() {
    return !!this.bitmap;
};

/**
 *
 *
 * @method hasBackgroundColor
 * @return {Boolean}
 */
DKTools_Base.prototype.hasBackgroundColor = function() {
    return !!this.backgroundColor;
};

/**
 * Проверяет спрайт на наличие текста
 *
 * @method hasText
 * @return {Boolean} Возвращает true, если текст установлен
 */
DKTools_Base.prototype.hasText = function() {
    return !!this.text;
};

// is methods

/**
 * Возвращает true, если спрайт виден
 *
 * @method isVisible
 * @return Boolean
 */
DKTools_Base.prototype.isVisible = function() {
    return this.visible;
};

/**
 * Возвращает true, если спрайт активен
 *
 * @method isActive
 * @return Boolean
 */
DKTools_Base.prototype.isActive = function() {
    return Sprite_Button.prototype.isActive.call(this) && this.active;
};

/**
 * Возвращает true, если спрайт виден и активен
 *
 * @method isVisibleAndActive
 * @return Boolean
 */
DKTools_Base.prototype.isVisibleAndActive = function() {
    return this.isVisible() && this.isActive();
};

/**
 * Возвращает true, если работа спрайта была запущена
 *
 * @method isStarted
 * @return Boolean
 */
DKTools_Base.prototype.isStarted = function() {
    return this._started;
};

/**
 * Возвращает true, если у спрайта есть события-ожидания
 *
 * @method isWaiting
 * @return Boolean
 */
DKTools_Base.prototype.isWaiting = function() {
    return this.hasEvents('wait');
};

/**
 * Возвращает true, если Bitmap готов
 *
 * @method isReady
 * @return Boolean
 */
DKTools_Base.prototype.isReady = function () {
    return this.hasBitmap() ? this.bitmap.isReady() : false;
};

/**
 * Возвращает true, если спрайт занят
 *
 * @method isBusy
 * @return Boolean
 */
DKTools_Base.prototype.isBusy = function() {
    return this.isWaiting() && !this.isReady();
};

// draw methods

DKTools_Base.prototype.drawAll = function() {
    this.updateBackground();
    this.updateText();
};

/**
 * Заливает область цветом
 *
 * @method fillRect
 *
 * @param {String | null} [color = #ffffff] - Цвет заливки
 * @param {Number | Rectangle | Object | null} [object = 0] - Координата X или Rectangle, или Объект типа {}
 * @param {Number | null} [y = 0] - Координата Y
 * @param {Number | null} [width = this._bitmapWidth] - Ширина области
 * @param {Number | null} [height = this._bitmapHeight] - Высота области
 *
 * @param {Number | null} [object.x = null] - Координата X
 * @param {Number | null} [object.y = null] - Координата Y
 * @param {Number | null} [object.width = null] - Ширина области
 * @param {Number | null} [object.height = null] - Высота области
 *
 * @return {Boolean} Возвращает true, если Bitmap существует
 */
DKTools_Base.prototype.fillRect = function(color, object, y, width, height) {
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
 *
 * @param {String || null} color - Цвет заливки
 *
 * @return Boolean
 */
DKTools_Base.prototype.fillAll = function(color) {
    return this.fillRect(color);
};

/**
 * Заливает область градиентом
 * Возвращает true, если Bitmap существует
 *
 * @method gradientFillRect
 *
 * @param {String || null} color1 - Цвет 1
 * @param {String || null} color2 - Цвет 2
 * @param {Boolean || null} vertical - Вертикальный градиент
 * @param {Number || Rectangle || Object || null} object - Координата X или область, или Объект типа {}
 * @param {Number || null} y - Координата Y
 * @param {Number || null} width - Ширина области
 * @param {Number || null} height - Высота области
 *
 * object properties
 * @property {Number || null} x - Координата X
 * @property {Number || null} y - Координата Y
 * @property {Number || null} width - Ширина области
 * @property {Number || null} height - Высота области
 *
 * @return Boolean
 */
DKTools_Base.prototype.gradientFillRect = function(color1, color2, vertical, object, y, width, height) {
    if (!this.hasBitmap()) {
        return false;
    }
    if (object && object.constructor === Rectangle) {
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
 * @param {String || null} color1 - Цвет 1
 * @param {String || null} color2 - Цвет 2
 * @param {Boolean || null} vertical - Вертикальный градиент
 *
 * @return Boolean
 */
DKTools_Base.prototype.gradientFillAll = function(color1, color2, vertical) {
    return this.gradientFillAll(color1, color2, vertical);
};

/**
 * Рисует текст
 * Возвращает true, если Bitmap существует
 *
 * @method drawText
 *
 * @param {String || null} text - Текст
 * @param {String || null} align - Выравнивание текста
 * @param {Number || Rectangle || Object || null} object - Координата X или область, или Объект типа {}
 * @param {Number || null} y - Координата Y
 * @param {Number || null} width - Ширина области
 * @param {Number || null} height - Высота области
 *
 * object properties
 * @property {Number || null} x - Координата X
 * @property {Number || null} y - Координата Y
 * @property {Number || null} width - Ширина области
 * @property {Number || null} height - Высота области
 *
 * @return Boolean
 */
DKTools_Base.prototype.drawText = function(text, align, object, y, width, height) {
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

DKTools_Base.prototype.drawLine = function(object, y1, x2, y2, color) {
    if (!this.hasBitmap()) {
        return false;
    }
    if (object && object.constructor === Object) {
        return this.drawLine(object.x1, object.y1, object.x2, object.y2, object.color);
    }
    var x1 = object || 0;
    y1 = y1 || 0;
    color = color || '#ffffff';
    this.bitmap.drawLine(x1, y1, x2, y2, color);
    return true;
};

DKTools_Base.prototype.strokeRect = function(color, object, y, width, height) {
    if (!this.hasBitmap()) {
        return false;
    }
    if (object && (object.constructor === Rectangle || object.constructor === Object)) {
        return this.strokeRect(color, object.x, object.y, object.width, object.height);
    }
    var x = object || 0;
    y = y || 0;
    width = width || this.standardDrawWidth();
    height = height || this.standardDrawHeight();
    color = color || '#ffffff';
    this.bitmap.strokeRect(x, y, width, height, color);
    return true;
};

DKTools_Base.prototype.fillArc = function(x, y, radius, startAngle, endAngle, color, antiClockwise) {
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

DKTools_Base.prototype.strokeArc = function(x, y, radius, startAngle, endAngle, color, antiClockwise) {
    if (!this.hasBitmap()) {
        return false;
    }
    x = x || 0;
    y = y || 0;
    radius = radius || 1;
    color = color || '#ffffff';
    this.bitmap.strokeArc(x, y, radius, startAngle, endAngle, color, antiClockwise);
    return true;
};

/**
 * Рисует круг
 * Возвращает true, если Bitmap существует
 *
 * @method drawCircle
 *
 * @param {Number || null} radius - Радиус
 * @param {String || null} color - Цвет
 * @param {Number || Point || Object || null} object - Координата X или Point, или Объект типа {}
 * @param {Number || null} y - Координата Y
 *
 * @return Boolean
 */
DKTools_Base.prototype.drawCircle = function(radius, color, object, y) {
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
 * Рисует кусок из Bitmap в Bitmap спрайта
 * Возвращает true, если Bitmap существует
 *
 * @method drawBitmap
 *
 * @param {Bitmap || Object} object - Bitmap или объект типа {}
 * @param {Number || null} x1 - Координата X
 * @param {Number || null} y1 - Координата Y
 * @param {Number || null} w1 - Ширина области из Bitmap
 * @param {Number || null} h1 - Высота области из Bitmap
 * @param {Number || null} x2 - Координата X
 * @param {Number || null} y2 - Координата Y
 * @param {Number || null} w2 - Ширина рисуемой области
 * @param {Number || null} h2 - Высота рисуемой области
 *
 * object.properties
 * @property {Bitmap || Object} - Bitmap или Объект типа {}
 * @property {Number || null} x1 - Координата X
 * @property {Number || null} y1 - Координата Y
 * @property {Number || null} w1 - Ширина области из Bitmap
 * @property {Number || null} h1 - Высота области из Bitmap
 * @property {Number || null} x2 - Координата X
 * @property {Number || null} y2 - Координата Y
 * @property {Number || null} w2 - Ширина рисуемой области
 * @property {Number || null} h2 - Высота рисуемой области
 * @property {Rectangle || Object || null} rect1 - Область или Объект типа {}
 * @property {Rectangle || Object || null} rect2 - Область или Объект типа {}
 *
 * object.bitmap properties
 * @property {String} folder - Путь к файлу
 * @property {String} filename - Название файла
 * @property {Function || null} listener - Метод обработки после загрузки Bitmap
 * @property {Number || null} hue - Оттенок
 * @property {Boolean || null} smooth - Сглаживание
 *
 * object.rect1 and object.rect2 properties
 * @property {Number || null} x - Координата X
 * @property {Number || null} y - Координата Y
 * @property {Number || null} width - Ширина области
 * @property {Number || null} height - Высота области
 *
 * @return Boolean
 */
DKTools_Base.prototype.drawBitmap = function(object, x1, y1, w1, h1, x2, y2, w2, h2) {
    object = object || {};
    if (!this.hasBitmap()) {
        return false;
    }
    var sx = x1, sy = y1, sw = w1, sh = h1;
    var dx = x2, dy = y2, dw = w2, dh = h2;
    var bitmap = object;
    if (object.constructor === Object) {
        bitmap = this.bitmapFromObject(object.bitmap);
        sx = object.x1; sy = object.y1; sw = object.w1; sh = object.h1;
        dx = object.x2; dy = object.y2; dw = object.w2; dh = object.h2;
        if (object.rect1 && (object.rect1.constructor === Rectangle || object.rect1.constructor === Object)) {
            sx = object.rect1.x;
            sy = object.rect1.y;
            sw = object.rect1.width;
            sh = object.rect1.height;
        }
        if (object.rect2 && (object.rect2.constructor === Rectangle || object.rect2.constructor === Object)) {
            dx = object.rect2.x;
            dy = object.rect2.y;
            dw = object.rect2.width;
            dh = object.rect2.height;
        }
    }
    if (!bitmap) {
        return false;
    }
    bitmap.addLoadListener(function() {
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
 * @param {Number || Point || Object || null} object - Координата X или Point, или Объект типа {}
 * @param {Number || null} y - Координата Y
 *
 * @return Boolean
 */
DKTools_Base.prototype.drawIcon = function(iconIndex, object, y) {
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
 * @param {Number || Rectangle || Object || null} object - Координата X или область, или Объект типа {}
 * @param {Number || null} y - Координата Y
 * @param {Number || null} width - Ширина области
 * @param {Number || null} height - Высота области
 *
 * object properties
 * @property {Number || null} x - Координата X
 * @property {Number || null} y - Координата Y
 * @property {Number || null} width - Ширина области
 * @property {Number || null} height - Высота области
 *
 * @return Boolean
 */
DKTools_Base.prototype.drawFace = function(faceName, faceIndex, object, y, width, height) {
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
 * @param {Number || Point || Object || null} object - Координата X или Point, или Объект типа {}
 * @param {Number || null} y - Координата Y
 *
 * object properties
 * @property {Number || null} x - Координата X
 * @property {Number || null} y - Координата Y
 *
 * @return Boolean
 */
DKTools_Base.prototype.drawCharacter = function(characterName, characterIndex, object, y) {
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
 * Возвращает true, если Bitmap был изменен
 *
 * @method loadAnimation
 *
 * @param {String} filename - Название файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Сглаживание
 *
 * @return Boolean
 */
DKTools_Base.prototype.loadAnimation = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/animations/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/battlebacks1/
 * Возвращает true, если Bitmap был изменен
 *
 * @method loadBattleback1
 *
 * @param {String} filename - Название файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Сглаживание
 *
 * @return Boolean
 */
DKTools_Base.prototype.loadBattleback1 = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/battlebacks1/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/battlebacks2/
 * Возвращает true, если Bitmap был изменен
 *
 * @method loadBattleback2
 *
 * @param {String} filename - Название файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Сглаживание
 *
 * @return Boolean
 */
DKTools_Base.prototype.loadBattleback2 = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/battlebacks2/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/enemies/
 * Возвращает true, если Bitmap был изменен
 *
 * @method loadEnemy
 *
 * @param {String} filename - Название файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Сглаживание
 *
 * @return Boolean
 */
DKTools_Base.prototype.loadEnemy = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/enemies/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/characters/
 * Возвращает true, если Bitmap был изменен
 *
 * @method loadCharacter
 *
 * @param {String} filename - Название файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Сглаживание
 *
 * @return Boolean
 */
DKTools_Base.prototype.loadCharacter = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/characters/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/faces/
 * Возвращает true, если Bitmap был изменен
 *
 * @method loadFace
 *
 * @param {String} filename - Название файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Сглаживание
 *
 * @return Boolean
 */
DKTools_Base.prototype.loadFace = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/faces/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/parallaxes/
 * Возвращает true, если Bitmap был изменен
 *
 * @method loadParallax
 *
 * @param {String} filename - Название файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Сглаживание
 *
 * @return Boolean
 */
DKTools_Base.prototype.loadParallax = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/parallaxes/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/pictures/
 * Возвращает true, если Bitmap был изменен
 *
 * @method loadPicture
 *
 * @param {String} filename - Название файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Сглаживание
 *
 * @return Boolean
 */
DKTools_Base.prototype.loadPicture = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/pictures/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/sv_actors/
 * Возвращает true, если Bitmap был изменен
 *
 * @method loadSvActor
 *
 * @param {String} filename - Название файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Сглаживание
 *
 * @return Boolean
 */
DKTools_Base.prototype.loadSvActor = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/sv_actors/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/sv_enemies/
 * Возвращает true, если Bitmap был изменен
 *
 * @method loadSvEnemy
 *
 * @param {String} filename - Название файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Сглаживание
 *
 * @return Boolean
 */
DKTools_Base.prototype.loadSvEnemy = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/sv_enemies/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/system/
 * Возвращает true, если Bitmap был изменен
 *
 * @method loadSystem
 *
 * @param {String} filename - Название файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Сглаживание
 *
 * @return Boolean
 */
DKTools_Base.prototype.loadSystem = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/system/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/tilesets/
 * Возвращает true, если Bitmap был изменен
 *
 * @method loadTileset
 *
 * @param {String} filename - Название файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Сглаживание
 *
 * @return Boolean
 */
DKTools_Base.prototype.loadTileset = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/tilesets/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/titles1/
 * Возвращает true, если Bitmap был изменен
 *
 * @method loadTitle1
 *
 * @param {String} filename - Название файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Сглаживание
 *
 * @return Boolean
 */
DKTools_Base.prototype.loadTitle1 = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/titles1/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/titles2/
 * Возвращает true, если Bitmap был изменен
 *
 * @method loadTitle2
 *
 * @param {String} filename - Название файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Сглаживание
 *
 * @return Boolean
 */
DKTools_Base.prototype.loadTitle2 = function(filename, listener, hue, smooth) {
    return this.loadBitmap('img/titles2/', filename, listener, hue, smooth);
};

/**
 * Загружает обложку окна из папки img/system/
 * Возвращает true, если Bitmap был изменен
 *
 * @method loadWindowskin
 *
 * @param {String || null} filename - Название файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Сглаживание
 *
 * @return Boolean
 */
DKTools_Base.prototype.loadWindowskin = function(filename, listener, hue, smooth) {
    return this.loadSystem(filename || this.standardWindowskin(), listener, hue, smooth);
};

// symbols methods

/**
 *
 *
 * @method _getSymbol
 * @private
 *
 * @param {String} symbol - Символ
 *
 * @return {Boolean}
 */
DKTools_Base.prototype._getSymbol = function(symbol) {
    return !!this._symbols[symbol];
};

/**
 *
 *
 * @method _getSymbols
 * @private
 *
 * @param object
 *
 * @return {Array | Boolean}
 */
DKTools_Base.prototype._getSymbols = function(object) {
    var symbols = [];
    if (arguments.length > 1) {
        for(var i = 0; i < arguments.length; i++) {
            var symbol = object[i];
            var value = this._getSymbol(symbol);
            symbols.push(value);
        }
    } else {
        if (object.constructor === Array) {
            return this._getSymbols.apply(this, object);
        } else {
            var value = this._getSymbol(object);
            symbols.push(value);
        }
    }
    return symbols;
};

/**
 *
 *
 * @method _setSymbol
 * @private
 *
 * @param {String} symbol
 * @param {Boolean} value
 */
DKTools_Base.prototype._setSymbol = function(symbol, value) {
    value = Boolean(value);
    var lastValue = this._getSymbol(symbol);
    this._symbols[symbol] = value;
    if (lastValue !== value) {
        this.onSymbolChange(symbol, value);
    }
};

/**
 *
 *
 * @method onSymbolChange
 *
 * @param symbol
 * @param value
 */
DKTools_Base.prototype.onSymbolChange = function(symbol, value) {
};

DKTools_Base.prototype.switchSymbol = function(symbol) {
    var newValue = !this._getSymbol(symbol);
    this._setSymbol(symbol, newValue);
};

DKTools_Base.prototype.switchSymbols = function(object) {
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
 *
 *
 * @method _enableSymbols
 * @private
 *
 * @param object
 */
DKTools_Base.prototype._enableSymbols = function(object) {
    if (arguments.length > 1) {
        for(var i = 0; i < arguments.length; i++) {
            var symbol = arguments[i];
            this._setSymbol(symbol, true);
        }
    } else {
        if (object instanceof Array) {
            return this._enableSymbols.apply(this, object);
        } else {
            return this._setSymbol(object, true);
        }
    }
};

/**
 *
 *
 * @method _disableSymbols
 * @private
 *
 * @param object
 */
DKTools_Base.prototype._disableSymbols = function(object) {
    if (arguments.length > 1) {
        for(var i = 0; i < arguments.length; i++) {
            var symbol = arguments[i];
            this._setSymbol(symbol, false);
        }
    } else {
        if (object instanceof Array) {
            return this._disableSymbols.apply(this, object);
        } else {
            return this._setSymbol(object, false);
        }
    }
};

/**
 *
 *
 * @method isEnabled
 * @return {Boolean}
 */
DKTools_Base.prototype.isEnabled = function() {
    var symbols = this._getSymbols.apply(this, arguments);
    return symbols.conjunction();
};

/**
 *
 *
 * @method enable
 *
 */
DKTools_Base.prototype.enable = DKTools_Base.prototype._enableSymbols;

/**
 *
 *
 * @method disable
 *
 */
DKTools_Base.prototype.disable = DKTools_Base.prototype._disableSymbols;

// _check methods

DKTools_Base.prototype._checkWidth = function(width) {
    var minWidth = this.minWidth();
    var maxWidth = this.maxWidth();
    return (width ? width.clamp(minWidth, maxWidth) : minWidth);
};

DKTools_Base.prototype._checkHeight = function(height) {
    var minHeight = this.minHeight();
    var maxHeight = this.maxHeight();
    return (height ? height.clamp(minHeight, maxHeight) : minHeight);
};

DKTools_Base.prototype._checkArray = function(source, standardArray) {
    var array = [];
    source = source || [];
    standardArray = standardArray || [];
    for(var i = 0; i < standardArray.length; i++) {
        array[i] = (source[i] == null ? standardArray[i] : source[i]);
    }
    return array;
};

DKTools_Base.prototype._checkPoint = function(x, y, standardPoint) {
    standardPoint = standardPoint || Point.emptyPoint;
    x = (x == null ? standardPoint.x : x);
    y = (y == null ? standardPoint.y : y);
    return new Point(x, y);
};

DKTools_Base.prototype._checkRectangle = function(x, y, width, height, standardRect) {
    standardRect = standardRect || Rectangle.emptyRectangle;
    x = (x == null ? standardRect.x : x);
    y = (y == null ? standardRect.y : y);
    width = (width == null ? standardRect.width : width);
    height = (height == null ? standardRect.height : height);
    return new Rectangle(x, y, width, height);
};

// event methods

/**
 * Проверяет контейнер с событиями, удаляя завершенные события
 *
 * @method _checkEventContainer
 * @private
 *
 * @param {String} type - Тип события
 *
 * @return {Array}
 */
DKTools_Base.prototype._checkEventContainer = function(type) {
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
DKTools_Base.prototype.checkEvents = function() {
    for(var type in this._events) {
        this._events[type] = this._checkEventContainer(type);
    }
};

/**
 * Удаляет событие из контейнера
 *
 * @method removeEvent
 *
 * @param {DKToolsEvent} event - Событие
 *
 * @return {Boolean} Возвращает true, если событие было удалено
 */
DKTools_Base.prototype.removeEvent = function(event) {
    var container = this.eventContainer(event);
    var index = this.eventIndex(event);
    if (index >= 0) {
        container[index] = null;
        return true;
    }
    return false;
};

/**
 *
 *
 * @method iterateEventContainer
 *
 * @param {String} type - Тип события
 * @param {Function} callback
 */
DKTools_Base.prototype.iterateEventContainer = function(type, callback) {
    var container = this.eventContainerByType(type);
    container.forEach(callback);
};

/**
 *
 *
 * @method eventsIsPaused
 *
 * @param {String} type - Тип события
 *
 * @return {Boolean | null}
 */
DKTools_Base.prototype.eventsIsPaused = function(type) {
    var paused = [];
    var callback = function(event) {
        paused.push(event.isPaused());
    }.bind(this);
    this.iterateEventContainer(type, callback);
    return paused.conjunction();
};

/**
 *
 *
 * @method pauseEvents
 *
 * @param {String} type - Тип события
 * @param {Number} duration - Длительность паузы
 */
DKTools_Base.prototype.pauseEvents = function(type, duration) {
    var callback = function(event) {
        event.pause(duration);
    }.bind(this);
    this.iterateEventContainer(type, callback);
};

/**
 *
 *
 * @method resumeEvents
 * @param {String} type - Тип события
 */
DKTools_Base.prototype.resumeEvents = function(type) {
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
DKTools_Base.prototype.updateEvents = function() {
    this.checkEvents();
    if (!this.hasEvents()) {
        return;
    }
    this.updateReadyEvents();
    if (this.isWaiting()) {
        this.updateWaitEvents();
        return;
    }
    this.updateUpdateEvents();
    this.updateFreeEvents();
};

/**
 * Обновляет событие
 *
 * @method updateEvent
 * @param {DKToolsEvent} event - Событие
 */
DKTools_Base.prototype.updateEvent = function(event) {
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
DKTools_Base.prototype.updateEventContainer = function(type) {
    var callback = function(event) {
        this.updateEvent(event);
    }.bind(this);
    this.iterateEventContainer(type, callback);
};

DKTools_Base.prototype.updateWaitEvents = function() {
    var container = this.eventContainerByType('wait');
    var event = container[0];
    this.updateEvent(event);
};

DKTools_Base.prototype.updateUpdateEvents = function() {
    this.updateEventContainer('update');
};

DKTools_Base.prototype.updateStartEvents = function() {
    if (!this.isStarted()) {
        return;
    }
    this.updateEventContainer('start');
};

DKTools_Base.prototype.updateReadyEvents = function() {
    if (!this.isReady()) {
        return;
    }
    this.updateEventContainer('ready');
};

DKTools_Base.prototype.updateFreeEvents = function() {
    if (this.isBusy()) {
        return;
    }
    this.updateEventContainer('free');
};

DKTools_Base.prototype.updateActivateEvents = function() {
    this.updateEventContainer('activate');
};

DKTools_Base.prototype.updateDeactivateEvents = function() {
    this.updateEventContainer('deactivate');
};

DKTools_Base.prototype.updateShowEvents = function() {
    this.updateEventContainer('show');
};

DKTools_Base.prototype.updateHideEvents = function() {
    this.updateEventContainer('hide');
};

/**
 * Создает контейнер для событий
 *
 * @method createEventContainer
 *
 * @param {String} type - Тип события
 *
 * @return {Array} Контейнер для событий
 */
DKTools_Base.prototype.createEventContainer = function(type) {
    this._events[type] = [];
    return this._events[type];
};

/**
 * Возвращает контейнер для событий по типу события
 *
 * @method eventContainerByType
 *
 * @param {String} type - Тип события
 *
 * @return {Array} Контейнер для событий
 */
DKTools_Base.prototype.eventContainerByType = function(type) {
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
 *
 * @param {DKToolsEvent} event - Событие
 *
 * @return {Array} Контейнер для событий
 */
DKTools_Base.prototype.eventContainer = function(event) {
    var type = event.type;
    return this.eventContainerByType(type);
};

/**
 * Возвращает индекс события в его контейнере
 *
 * @method eventIndex
 *
 * @param {DKToolsEvent} event - Событие
 *
 * @return {Number} Индекс события в его контейнере
 */
DKTools_Base.prototype.eventIndex = function(event) {
    var container = this.eventContainer(event);
    return container.indexOf(event);
};

/**
 * Возвращает массив со всеми или событиями определенного типа
 *
 * @method events
 *
 * @param {String | null} [type] - Тип события
 *
 * @return {Array} Массив с событиями
 */
DKTools_Base.prototype.events = function(type) {
    if (type) {
        return this.eventContainerByType(type);
    }
    var events = [];
    for(type in this._events) {
        var container = this.eventContainerByType(type);
        events = events.concat(container);
    }
    return events;
};

/**
 * Проверяет существование события в спрайте
 *
 * @method hasEvent
 *
 * @param {DKToolsEvent} event - Событие
 *
 * @return {Boolean}
 */
DKTools_Base.prototype.hasEvent = function(event) {
    return this.eventIndex(event) >= 0;
};

/**
 * Проверяет существование событий определенного типа
 *
 * @method hasEvents
 *
 * @param {String | null} [type] - Тип события
 *
 * @return {Boolean}
 */
DKTools_Base.prototype.hasEvents = function(type) {
    return this.events(type).length > 0;
};

/**
 * Создает событие
 *
 * @method _createEvent
 * @private
 *
 * @param {String} type - Тип события
 * @param {Function | null} [handler] - Обработчик события
 * @param {Number | null} [duration] - Длительность события
 * @param {Function | null} [onStartHandler] - Обработчик начала работы события
 * @param {Function | null} [onEndHandler] - Обработчик окончания работы события
 *
 * @return {DKToolsEvent} Созданное событие
 */
DKTools_Base.prototype._createEvent = function(type, handler, duration, onStartHandler, onEndHandler) {
    return new DKToolsEvent(this, type, handler, duration, onStartHandler, onEndHandler);
};

/**
 * Добавляет событие
 *
 * @method addEvent
 *
 * @param {String} type - Тип события
 * @param {Function | null} [handler] - Обработчик события
 * @param {Number | null} [duration] - Длительность события
 * @param {Function | null} [onStartHandler] - Обработчик начала работы события
 * @param {Function | null} [onEndHandler] - Обработчик окончания работы события
 *
 * @return {DKToolsEvent}
 */
DKTools_Base.prototype.addEvent = function(type, handler, duration, onStartHandler, onEndHandler) {
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
 * @param {Function | null} [handler] - Обработчик события
 *
 * @return {DKToolsEvent}
 */
DKTools_Base.prototype.addEventHandler = function(type, handler) {
    var duration = -1;
    return this.addEvent(type, handler, duration);
};

/**
 * Добавляет одноразовое событие
 *
 * @method addEventListener
 *
 * @param {String} type - Тип события
 * @param {Function | null} [handler] - Обработчик события
 *
 * @return {DKToolsEvent}
 */
DKTools_Base.prototype.addEventListener = function(type, handler) {
    var duration = 1;
    return this.addEvent(type, handler, duration);
};

// update methods

/**
 * Обновляет Bitmap спрайта
 *
 * @method updateBitmap
 */
DKTools_Base.prototype.updateBitmap = function() {
    this.updateFont();
    this.updateTextColor();
    this.updatePaintOpacity();
};

/**
 * Обновляет шрифт текста
 *
 * @method updateFont
 */
DKTools_Base.prototype.updateFont = function() {
    this.bitmap.fontFace = this.font[0];
    this.bitmap.fontItalic = this.font[1];
    this.bitmap.fontSize = this.font[2];
};

/**
 * Обновляет цвет текста
 *
 * @method updateTextColor
 */
DKTools_Base.prototype.updateTextColor = function() {
    this.bitmap.textColor = this.textColor;
};

/**
 * Обновление прозрачности рисования окна

 * @method updatePaintOpacity
 */
DKTools_Base.prototype.updatePaintOpacity = function() {
    this.bitmap.paintOpacity = this._paintOpacity;
};

/**
 * Обновляет фон спрайта
 *
 * @method updateBackground
 */
DKTools_Base.prototype.updateBackground = function() {
    if (this.hasBackgroundColor()) {
        this.fillAll(this.backgroundColor);
    }
};

/**
 * Обновляет отображаемый текст
 *
 * @method updateText
 */
DKTools_Base.prototype.updateText = function() {
    if (this.hasText()) {
        this.drawText(this.text);
    }
};

/**
 * Обновляет данные ввода
 *
 * @method updateInputData
 */
DKTools_Base.prototype.updateInputData = function() {
    Input.update();
    TouchInput.update();
};





//===========================================================================
// DK Tools Sprite
//===========================================================================

function DKTools_Sprite() {
	this.initialize.apply(this, arguments);
}

DKTools_Sprite.prototype = Object.create(Sprite.prototype);
DKToolsUtils.mixin(DKTools_Sprite.prototype, DKTools_Base.prototype);
DKTools_Sprite.prototype.constructor = DKTools_Sprite;

// Счетчик созданных спрайтов
DKTools_Sprite._counter = 0;

// properties

Object.defineProperties(DKTools_Sprite.prototype, {

    /**
     * Название файла графики
     *
     * @property graphic
     * @type String
     */
    graphic: {
        get: function() {
            return this._graphic;
        },
        configurable: true
    },

    enteredTime: {
        get: function() {
            return this._enteredTime;
        },
        configurable: true
    },

    pressedTime: {
        get: function() {
            return this._pressedTime;
        },
        configurable: true
    },

    clickX : {
        get: function() {
            return this.canvasToLocalX(TouchInput.x);
        },
        configurable: true
    },

    clickY : {
        get: function() {
            return this.canvasToLocalY(TouchInput.y);
        },
        configurable: true
    },

    wheelX: {
        get: function() {
            return this._wheelX;
        },
        configurable: true
    },

    wheelY: {
        get: function() {
            return this._wheelY;
        },
        configurable: true
    }

});

// initialize method

/**
 * @class DKTools_Sprite
 *
 * @constructor
 *
 * @param {Number | Bitmap | Object | null} [object = {}] - Координата X или Bitmap, или Объект типа {}
 * @param {Number | null} [y = 0] - Координата Y
 * @param {Number | null} [width = null] - Ширина Bitmap
 * @param {Number | null} [height = null] - Высота Bitmap
 *
 * @param {Number | null} [object.x = 0] - Координата X
 * @param {Number | null} [object.y = 0] - Координата Y
 * @param {Number | null} [object.width = null] - Ширина Bitmap
 * @param {Number | null} [object.height = null] - Высота Bitmap
 * @param {Bitmap | Object | null} [object.bitmap = null] - Bitmap или Объект типа {}
 *
 * @param {String} object.bitmap.folder - Путь к файлу
 * @param {String} object.bitmap.filename - Название файла
 * @param {Function | null} [object.bitmap.listener = null] - Метод обработки после загрузки Bitmap
 * @param {Number | null} [object.bitmap.hue = null] - Оттенок
 * @param {Boolean | null} [object.bitmap.smooth = null] - Сглаживание
 *
 * @see object properties: DKTools_Sprite.prototype.setupAll
*/
DKTools_Sprite.prototype.initialize = function(object, y, width, height) {
	Sprite.prototype.initialize.call(this);
    DKTools_Base.prototype.initialize.call(this, object, y, width, height);
    if (object) {
        var bitmap;
        if (object instanceof Bitmap) {
            bitmap = object;
        } else if (object.constructor === Object) {
            bitmap = object.bitmap;
        }
        this.setupBitmap(bitmap);
    }
    DKTools_Sprite._counter++;
};

// clear methods

/**
 * Очищает все данные спрайта
 *
 * @method clearAll
 */
DKTools_Sprite.prototype._clearAll = function() {
    DKTools_Base.prototype._clearAll.call(this);
    this._clearEnteredTime();
    this._clearPressedTime();
};

/**
 * Сбрасывает счетчик ...
 *
 * @method _clearEnteredTime
 * @private
 */
DKTools_Sprite.prototype._clearEnteredTime = function() {
    this._enteredTime = 0;
};

/**
 * Сбрасывает счетчик нажатия спрайта
 *
 * @method _clearPressedTime
 * @private
 */
DKTools_Sprite.prototype._clearPressedTime = function() {
    this._pressedTime = 0;
};

// standard methods

/**
 * Возвращает стандартный интервал длительного нажатия
 *
 * @method standardLongPressInterval
 * @return {Number} Стандартный интервал длительного нажатия
 */
DKTools_Sprite.prototype.standardLongPressInterval = function() {
    return 20;
};

/**
 * Возвращает стандартный путь к папке с графикой
 *
 * @method standardGraphicFolder
 * @return {String} Стандартный путь к папке с графикой
 */
DKTools_Sprite.prototype.standardGraphicFolder = function() {
    return 'img/system/';
};

/**
 * Возвращает стандартное название файла графики
 *
 * @method standardGraphic
 * @return {String} Стандартное название файла графики
 */
DKTools_Sprite.prototype.standardGraphic = function() {
    return null;
};

/**
 * Возвращает стандартную прозрачность спрайта
 *
 * @method standardOpacity
 * @return {Number} Стандартная прозрачность спрайта
 */
DKTools_Sprite.prototype.standardOpacity = function() {
	return 255;
};

/**
 * Возвращает стандартное масштабирование спрайта
 *
 * @method standardScale
 * @return {Point} Стандартное масштабирование спрайта
 */
DKTools_Sprite.prototype.standardScale = function() {
    return new Point(1, 1);
};

DKTools_Sprite.prototype.standardFrame = function() {
    return new Rectangle(0, 0, this.width, this.height);
};

DKTools_Sprite.prototype.standardColdFrame = function() {
    return null;
};

DKTools_Sprite.prototype.standardHotFrame = function() {
    return null;
};

DKTools_Sprite.prototype.standardColdScale = function() {
    return null;
};

DKTools_Sprite.prototype.standardHotScale = function() {
    return null;
};

DKTools_Sprite.prototype.standardColdOpacity = function() {
    return null;
};

DKTools_Sprite.prototype.standardHotOpacity = function() {
    return null;
};

// setup methods

/**
 * Устанавливает все параметры спрайта
 *
 * @method setupAll
 *
 * @param {Object | null} [object = {}] - Объект типа {}
 *
 * @param {Number | null} [object.id = null] - ID спрайта
 * @param {Boolean | null} [object.visible = null] - Видимость спрайта
 * @param {Boolean | null} [object.active = null] - Активность спрайта
 * @param {String | null} [object.textColor = null] - Цвет текста
 * @param {String | null} [object.align = null] - Выравнивание текста
 * @param {String | null} [object.backgroundColor = null] - Цвет фона
 * @param {Array | null} [object.font = null] - Шрифт текста
 * @param {Number | null} [object.opacity = null] - Прозрачность спрайта
 * @param {Object | Point | null} [object.scale = null] - Масштабирование спрайта
*/
DKTools_Sprite.prototype.setupAll = function(object) {
	object = object || {};
    DKTools_Base.prototype.setupAll.call(this, object);
    this.setupLongPressInterval(object.longPressInterval);
    this.setupBitmap(object.bitmap);
    this.setupGraphic(object.graphic);
    this.setupScale(object.scale);
};

/**
 * Устанавливает ширину Bitmap
 *
 * @method setupWidth
 * @param {Number | null} [width = null] - Ширина Bitmap
*/
DKTools_Sprite.prototype.setupWidth = function(width) {
	this._bitmapWidth = this._checkWidth(width);
};

/**
 * Устанавливает высоту Bitmap
 *
 * @method setupHeight
 * @param {Number || null} [height = null] - Высота Bitmap
*/
DKTools_Sprite.prototype.setupHeight = function(height) {
	this._bitmapHeight = this._checkHeight(height);
};

/**
 * Устанавливает размер Bitmap
 *
 * @method setupSize
 *
 * @param {Number | null} [object = null] - Ширина Bitmap
 * @param {Number | null} [height = null] - Высота Bitmap
 */
DKTools_Sprite.prototype.setupSize = function(object, height) {
    if (object && object.constructor === Object) {
        return this.setupSize(object.width, object.height);
    }
    this.setupWidth(object);
    this.setupHeight(height);
};

/**
 * Устанавливает интервал длительного нажатия
 *
 * @method setupLongPressInterval
 * @param {Number | null} [interval = null] - Интервал длительного нажатия
 */
DKTools_Sprite.prototype.setupLongPressInterval = function(interval) {
    this._longPressInterval = interval || this.standardLongPressInterval();
};

/**
 * Устанавливает название файла графики
 *
 * @method setupGraphic
 * @param {String | null} [graphic] - Название файла графики
 */
DKTools_Sprite.prototype.setupGraphic = function(graphic) {
    this._graphic = (graphic == null ? this.standardGraphic() : graphic);
};

/**
 * Устанавливает прозрачность спрайта
 *
 * @method setupOpacity
 * @param {Number | null} [opacity = null] - Прозрачность спрайта
*/
DKTools_Sprite.prototype.setupOpacity = function(opacity) {
	this.opacity = (opacity == null ? this.standardOpacity() : opacity);
};

/**
 * Устанавливает Bitmap для спрайта
 *
 * @method setupBitmap
 *
 * @param {Bitmap | Object | null} [object] - Bitmap или Объект типа {}
 * @param {String} object.folder - Путь к файлу
 * @param {String} object.filename - Название файла
 * @param {Function | null} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number | null} [object.hue] - Оттенок
 * @param {Boolean | null} [object.smooth] - Сглаживание
*/
DKTools_Sprite.prototype.setupBitmap = function(object) {
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
 * Устанавливает масштабирование для спрайта
 *
 * @method setupScale
 *
 * @param {Number | Point | Object | null} [object = this.standardScale().x] - Координата X или Point, или Объект типа {}
 * @param {Number | null} [y = this.standardScale().y] - Координата Y
 *
 * @param {Number | null} [object.x = this.standardScale().x] - Координата X
 * @param {Number | null} [object.y = this.standardScale().y] - Координата Y
 */
DKTools_Sprite.prototype.setupScale = function(object, y) {
    if (object && (object.constructor === Point || object.constructor === PIXI.ObservablePoint || object.constructor === Object)) {
        return this.setupScale(object.x, object.y);
    }
    var standardScale = this.standardScale();
    var scale = this._checkPoint(object, y, standardScale);
    this.scale.copy(scale);
};

DKTools_Sprite.prototype.setupFrame = function(object, y, width, height) {
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
 * @param {Number | Rectangle | Object} object - Координата X или область, или Объект типа {}
 * @param {Number} y - Координата Y
 * @param {Number} width - Ширина области
 * @param {Number} height - Высота области
 *
 * @param {Number} object.x - Координата X
 * @param {Number} object.y - Координата Y
 * @param {Number} object.width - Ширина области
 * @param {Number} object.height - Высота области
 */
DKTools_Sprite.prototype.setupColdFrame = function(object, y, width, height) {
    if (object && (object.constructor === Rectangle || object.constructor === Object)) {
        return this.setupColdFrame(object.x, object.y, object.width, object.height);
    }
    var standardFrame = this.standardColdFrame();
    var frame = this._checkRectangle(object, y, width, height, standardFrame);
    this._coldFrame = (frame.isEmpty() ? null : frame);
};

/**
 * Устанавливает рамку для нажатого состояния
 *
 * @method setupHotFrame
 *
 * @param {Number | Rectangle | Object} object - Координата X или область, или Объект типа {}
 * @param {Number} y - Координата Y
 * @param {Number} width - Ширина области
 * @param {Number} height - Высота области
 *
 * @param {Number} object.x - Координата X
 * @param {Number} object.y - Координата Y
 * @param {Number} object.width - Ширина области
 * @param {Number} object.height - Высота области
 */
DKTools_Sprite.prototype.setupHotFrame = function(object, y, width, height) {
    if (object && (object.constructor === Rectangle || object.constructor === Object)) {
        return this.setupHotFrame(object.x, object.y, object.width, object.height);
    }
    var standardFrame = this.standardHotFrame();
    var frame = this._checkRectangle(object, y, width, height, standardFrame);
    this._hotFrame = (frame.isEmpty() ? null : frame);
};

/**
 * Устанавливает масштабирование для ненажатого состояния
 *
 * @method setupColdScale
 *
 * @param {Number | Point | Object | null} [object = 1] - Координата X или Point, или Объект типа {}
 * @param {Number | null} [y = 1] - Координата Y
 *
 * @param {Number | null} [object.x = 1] - Координата X
 * @param {Number | null} [object.y = 1] - Координата Y
 */
DKTools_Sprite.prototype.setupColdScale = function(object, y) {
    if (object && (object.constructor === Point || object.constructor === Object)) {
        return this.setupColdScale(object.x, object.y);
    }
    var standardScale = this.standardColdScale();
    var scale = this._checkPoint(object, y, standardScale);
    this._coldScale = (scale.isEmpty() ? null : scale);
};

/**
 * Устанавливает масштабирование для нажатого состояния
 *
 * @method setupHotScale
 *
 * @param {Number | Point | Object | null} [object = 1] - Координата X или Point, или Объект типа {}
 * @param {Number | null} [y = 1] - Координата Y
 *
 * @param {Number | null} [object.x = 1] - Координата X
 * @param {Number | null} [object.y = 1] - Координата Y
 */
DKTools_Sprite.prototype.setupHotScale = function(object, y) {
    if (object && (object.constructor === Point || object.constructor === Object)) {
        return this.setupHotScale(object.x, object.y);
    }
    var standardScale = this.standardHotScale();
    var scale = this._checkPoint(object, y, standardScale);
    this._hotScale = (scale.isEmpty() ? null : scale);
};

/**
 * Устанавливает прозрачность для ненажатого состояния
 *
 * @method setupColdOpacity
 * @param {Number | null} opacity = null] - Прозрачность спрайта
 */
DKTools_Sprite.prototype.setupColdOpacity = function(opacity) {
    this._coldOpacity = (opacity == null ? this.standardColdOpacity() : opacity);
};

/**
 * Устанавливает прозрачность для нажатого состояния
 *
 * @method setupHotOpacity
 * @param {Number | null} [opacity = null] - Прозрачность спрайта
 */
DKTools_Sprite.prototype.setupHotOpacity = function(opacity) {
    this._hotOpacity = (opacity == null ? this.standardHotOpacity() : opacity);
};

// set methods

/**
 * Изменяет все параметры спрайта
 *
 * @method setAll
 *
 * @param {Object | null} [object = {}] - Объект типа {}
 * @param {Boolean | null} [blockStart = null] - Блокировка вызова функции start
 *
 * @param {String | null} [object.textColor = null] - Цвет текста
 * @param {String | null} [object.align = null] - Выравнивание текста
 * @param {String | null} [object.backgroundColor = null] - Цвет фона
 * @param {Array | null} [object.font = null] - Шрифт текста
 * @param {Number | null} [object.opacity = null] - Прозрачность спрайта
 * @param {Object | Point | null} [object.scale = null] - Масштабирование спрайта
 *
 * @return {Number} Количество измененных параметров
*/
DKTools_Sprite.prototype.setAll = function(object, blockStart) {
	object = object || {};
	var block = true;
    var changed = DKTools_Base.prototype.setAll.call(this, object);
    this._activateSetAllMode();
    if (this.setGraphic(object.graphic, block)) {
        changed++;
    }
    if (changed && !blockStart) {
        this.start();
    }
    if (this.setScale(object.scale)) {
        changed++;
    }
    this._deactivateSetAllMode();
	return changed;
};

/**
 * Изменяет ширину Bitmap
 *
 * @method setWidth
 *
 * @param {Number | null} [width = null] - Ширина Bitmap
 * @param {Boolean | null} [blockStart = null] - Блокировка вызова функции start
 *
 * @return {Boolean} Возвращает true, если изменение произошло
 */
DKTools_Sprite.prototype.setWidth = function(width, blockStart) {
    return this.resize(width, this._bitmapHeight, blockStart);
};

/**
 * Изменяет высоту Bitmap
 *
 * @method setHeight
 *
 * @param {Number | null} [height = null] - Высота Bitmap
 * @param {Boolean | null} [blockStart = null] - Блокировка вызова функции start
 *
 * @return {Boolean} Возвращает true, если изменение произошло
 */
DKTools_Sprite.prototype.setHeight = function(height, blockStart) {
    return this.resize(this._bitmapWidth, height, blockStart);
};

/**
 * Изменяет название файла графики
 *
 * @method setGraphic
 *
 * @param {String | null} [graphic] - Название файла графики
 * @param {Boolean | null} [blockStart] - Блокировка вызова функции start
 *
 * @return {Boolean} Возвращает true, если изменение произошло
 */
DKTools_Sprite.prototype.setGraphic = function(graphic, blockStart) {
    if (this._graphic === graphic) {
        return false;
    }
    var lastGraphic = this._graphic;
    this.setupGraphic(graphic);
    if (lastGraphic === this._graphic) {
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
 *
 * @param {Number || null} opacity - Прозрачность спрайта
 *
 * @return Boolean
*/
DKTools_Sprite.prototype.setOpacity = function(opacity) {
	if (this.opacity === opacity) {
        return false;
    }
	var lastOpacity = this.opacity;
	this.setupOpacity(opacity);
	return lastOpacity !== this.opacity;
};

/**
 * Изменяет Bitmap спрайта
 *
 * @method setBitmap
 *
 * @param {Bitmap | Object | null} object - Bitmap или Объект типа {}
 * @param {String} object.folder - Путь к файлу
 * @param {String} object.filename - Название файла
 * @param {Function | null} [object.listener] - Метод обработки после загрузки Bitmap
 * @param {Number | null} [object.hue] - Оттенок
 * @param {Boolean | null} [object.smooth] - Сглаживание
 *
 * @return {Boolean} Возвращает true, если изменение произошло
*/
DKTools_Sprite.prototype.setBitmap = function(object) {
	if (this.bitmap == object) {
        return false;
    }
	this.setupBitmap(object);
	return true;
};

/**
 * Изменяет масштабирование для спрайта
 * Возвращает true, если изменение произошло
 *
 * @method setScale
 *
 * @param {Number || Point || Object || null} object - Координата X или Point, или Объект типа {}
 * @param {Number || null} y - Координата Y
 *
 * @return Boolean
 */
DKTools_Sprite.prototype.setScale = function(object, y) {
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

DKTools_Sprite.prototype.setFrame = function(object, y, width, height) {
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
 * Возвращает true, если изменение произошло
 *
 * @method checkSize
 * @return Number
 */
DKTools_Sprite.prototype.checkSize = function() {
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

DKTools_Sprite.prototype.createAll = function() {
    DKTools_Base.prototype.createAll.call(this);
    this.createBitmap();
};

/**
 * Загружает изображения из названия файла графики
 * Создает Bitmap спрайта шириной _bitmapWidth и высотой _bitmapHeight
 *
 * @method createBitmap
 */
DKTools_Sprite.prototype.createBitmap = function() {
    if (this.hasGraphic()) {
        this._loadGraphic();
    } else if (!this.isFixedBitmap()) {
        this.bitmap = new Bitmap(this._bitmapWidth, this._bitmapHeight);
    }
};

DKTools_Sprite.prototype._createVisibleEvent = function(duraion, visible) {
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
    var handler = this._updateMove.bind(this, this.x, this.y, opacity, this.scale.x, this.scale.y);
    this.addEvent('wait', handler, duration, onStartHandler, onEndHandler);
};

// uncategorized methods

/**
 * Устанавливает ширину и высоту Bitmap, если они отличаются от текущих
 *
 * @method resize
 *
 * @param {Number | null} [width = this.minWidth()] - Ширина Bitmap (The width of the Bitmap)
 * @param {Number | null} [height = this.minHeight()] - Высота Bitmap (The height of the Bitmap)
 * @param {Boolean | null} [blockStart = false] - Блокировка вызова функции start
 *
 * @return {Boolean} Возвращает true, если изменение произошло
 */
DKTools_Sprite.prototype.resize = function(width, height, blockStart) {
    if (!this.isResizable()) {
        return false;
    }
    if (width == null) {
        width = this.minWidth();
    }
    if (height == null) {
        height = this.minHeight();
    }
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
 * @method object
 * @return {Object} Объект со всеми параметрами спрайта
 */
DKTools_Sprite.prototype.object = function() {
    var object = DKTools_Base.prototype.object.call(this);
    object.graphic = this._graphic;
    object.opacity = this.opacity;
    object.scale = this.scale;
    if (this.hasBitmap() && this.isFixedBitmap()) {
        object.bitmap = this.bitmap.clone();
    }
    return object;
};

/**
 * Перемещает спрайт
 *
 * @method move
 *
 * @param {Number | Point | Object | null} [object] - Координата X или Point, или Объект типа {}
 * @param {Number | null} [newY] - Координата Y
 * @param {Number | null} [duration] - Длительность перемещения
 * @param {Number | null} [newOpacity] - Новая прозрачность
 * @param {Number | null} [newScaleX] - Новое масштабирование по X
 * @param {Number | null} [newScaleY] - Новое масштабирование по Y
 *
 * @param {Number | null} [object.x] - Координата X
 * @param {Number | null} [object.y] - Координата Y
 */
DKTools_Sprite.prototype.move = function(object, newY, duration, newOpacity, newScaleX, newScaleY) {
    if (object && (object.constructor === Point || object.constructor === Object)) {
        return Sprite.prototype.move.call(this, object.x || 0, object.y || 0);
    }
    duration = duration || 0;
    if (duration > 0) {
        var x = (object == null ? this.x : object);
        newY = (newY == null ? this.y : newY);
        newOpacity = (newOpacity == null ? this.opacity : newOpacity);
        newScaleX = newScaleX || this.scale.x;
        newScaleY = newScaleY || this.scale.y;
        return this.addEvent('wait', this._updateMove.bind(this, x, newY, newOpacity, newScaleX, newScaleY), duration);
    } else {
        var x = object || 0;
        newY = newY || 0;
        Sprite.prototype.move.call(this, x, newY);
    }
};

/**
 * Создает маршрут передвижения спрайта
 *
 * @method moveRoute
 *
 * @param {Object[]} route - Массив с объектами маршрута
 * @param {Number | null} [route.duration = 1] - Длительность передвижения
 * @param {Number | null} [route.onEndWait = 0] - Длительность ожидания после передвижения
 * @param {Number | null} [route.x = this.x] - Координата X передвижения
 * @param {Number | null} [route.y = this.y] - Координата Y передвижения
 * @param {Number | null} [route.opacity = this.opacity] - Прозрачность передвижения
 * @param {Number | null} [route.scaleX = this.scale.x] - Масштабирование передвижения по X
 * @param {Number | null} [route.scaleY = this.scale.y] - Масштабирование передвижения по Y
 *
 * @return {Array} Массив с событиями
 */
DKTools_Sprite.prototype.moveRoute = function(route) {
    if (!route) {
        return [];
    }
    var events = [];
    for(var i = 0; i < route.length; i++) {
        var object = route[i];
        var duration = object.duration || 1;
        var onEndWaitDuration = object.onEndWait || 0;
        var newX = (object.x == null ? this.x : object.x);
        var newY = (object.y == null ? this.y : object.y);
        var newOpacity = (object.opacity == null ? this.opacity : object.opacity);
        var newScaleX = object.scaleX || this.scale.x;
        var newScaleY = object.scaleY || this.scale.y;
        var event = this.addEvent('wait', this._updateMove.bind(this, newX, newY, newOpacity, newScaleX, newScaleY), duration);
        events.push(event);
        if (onEndWaitDuration > 0) {
            this.wait(onEndWaitDuration);
        }
    }
    return events;
};

/**
 * Проверяет спрайт на наличие названия файла графики
 *
 * @method hasGraphic
 * @return {Boolean} Возвращает true, если название файла графики установлено
 */
DKTools_Sprite.prototype.hasGraphic = function() {
    return !!this._graphic;
};

/**
 *
 *
 * @method canvasToLocalX
 *
 * @param {Number} x
 *
 * @return {Number}
 */
DKTools_Sprite.prototype.canvasToLocalX = Sprite_Button.prototype.canvasToLocalX;

/**
 *
 *
 * @method canvasToLocalY
 *
 * @param {Number} y
 *
 * @return {Number}
 */
DKTools_Sprite.prototype.canvasToLocalY = Sprite_Button.prototype.canvasToLocalY;

DKTools_Sprite.prototype.canRefreshAll = function() {
    return DKTools_Base.prototype.canRefreshAll.call(this) && this.isResizable();
};

DKTools_Sprite.prototype.emulateClick = function() {
    this.clearEvents('wait');
    this.addEventListener('update', function() {
        this.addEvent('wait', function() {
            this._touching = true;
            this.updateOpacity();
        }.bind(this), 8);
        this.addEvent('wait', function() {
            this._touching = false;
            this.updateOpacity();
        }.bind(this), 8);
    }.bind(this));
};

DKTools_Sprite.prototype.click = function() {
    this.emulateClick();
    this.updateClickEvents();
};

// remove methods

/**
 * Удаляет Bitmap спрайта
 *
 * @method removeBitmap
 */
DKTools_Sprite.prototype.removeBitmap = function() {
    if (this.hasBitmap()) {
        this.setBitmap();
    }
};

/**
 * Удаляет название файла графики
 *
 * @method removeGraphic
 */
DKTools_Sprite.prototype.removeGraphic = function() {
    if (this.hasGraphic()) {
        this.setGraphic();
    }
};

// is methods

/**
 * Возвращает true, если спрайт является контейнером
 *
 * @method isContainer
 * @return Boolean
 */
DKTools_Sprite.prototype.isContainer = function() {
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
 * @return {Boolean}
 */
DKTools_Sprite.prototype.isInside = function(x, y) {
    return x >= 0 && y >= 0 && x <= this.width * this.scale.x && y <= this.height * this.scale.y;
};

/**
 * Возвращает true, если курсор мышки находится внутри спрайта
 *
 * @method isEntered
 * @return Boolean
 */
DKTools_Sprite.prototype.isEntered = function() {
    return this.isInside(this.mouseX, this.mouseY);
};

/**
 * Проверяет было ли прикосновение внутри спрайта
 *
 * @method isTouched
 * @return {Boolean} Возвращает true, если прикосновение было внутри спрайта
 */
DKTools_Sprite.prototype.isTouched = function() {
    return this.isInside(this.clickX, this.clickY);
};

/**
 * Проверяет спрайт на длительное нажатие
 *
 * @method isLongPressed
 * @return {Boolean} Возвращает true, если спрайт нажимается больше интервала длительного нажатия
 */
DKTools_Sprite.prototype.isLongPressed = function() {
    return this._pressedTime >= this._longPressInterval;
};

/**
 * Проверяет спрайт на одиночное или длительное нажатие
 *
 * @method isPressed
 * @return {Boolean} Возвращает true, если спрайт был нажат один раз или нажимается длительное время
 */
DKTools_Sprite.prototype.isPressed = function() {
    return this._touching || this.isLongPressed();
};

/**
 * Проверяет спрайт на установку Bitmap с помощью функции setupBitmap или setBitmap
 * Возвращает true, если Bitmap был установлен функцией setupBitmap или setBitmap, а не создан createBitmap
 * 
 * @method isFixedBitmap
 * @return {Boolean} Возвращает true, если Bitmap был установлен функцией setupBitmap или setBitmap
*/
DKTools_Sprite.prototype.isFixedBitmap = function() {
    return this._fixedBitmap;
};

DKTools_Sprite.prototype.isResizable = function() {
    return !this.hasGraphic() && !this.isFixedBitmap();
};

// load methods

/**
 * Загружает Bitmap из папки
 * Возвращает true, если Bitmap был изменен
 *
 * @method loadBitmap
 *
 * @param {String} folder - Путь к файлу
 * @param {String} filename - Название файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Сглаживание
 *
 * @return Boolean
*/
DKTools_Sprite.prototype.loadBitmap = function(folder, filename, listener, hue, smooth) {
	var bitmap = ImageManager.loadBitmap(folder, filename, hue, smooth);
	if (this.setBitmap(bitmap)) {
		if (listener) {
            this.bitmap.addLoadListener(listener);
        }
		return true;
	}
	return false;
};

DKTools_Sprite.prototype._onGraphicLoadListener = function() {
};

/**
 * Загружает графику из названия файла графики
 *
 * @method loadGraphic
 * @private
 */
DKTools_Sprite.prototype._loadGraphic = function() {
    if (this.hasGraphic()) {
        var folder = this.standardGraphicFolder();
        var filename = this.graphic;
        var listener = this._onGraphicLoadListener.bind(this);
        this.loadBitmap(folder, filename, listener);
    }
};

// event methods

DKTools_Sprite.prototype.updateMouseEnterEvents = function() {
    this.updateEventContainer('mouseEnter');
};

DKTools_Sprite.prototype.updateMouseStayEvents = function() {
    this.updateEventContainer('mouseStay');
};

DKTools_Sprite.prototype.updateMouseLeaveEvents = function() {
    if (this.isPressed()) {
        this._entered = false;
        this._touching = false;
        this._clearEnteredTime();
        this._clearPressedTime();
        this.updateFrame();
        this.updateOpacity();
        this.updateScale();
    }
    this.updateEventContainer('mouseLeave');
};

/**
 * Обновляет события одиночного нажатия
 *
 * @method updateClickEvents
 */
DKTools_Sprite.prototype.updateClickEvents = function() {
    this.updateEventContainer('click');
};

/**
 * Обновляет события длительного нажатия
 *
 * @method updateLongPressEvents
 */
DKTools_Sprite.prototype.updateLongPressEvents = function() {
    this.updateEventContainer('longPress');
};

DKTools_Sprite.prototype.updateWheelXEvents = function() {
    this._wheelX = TouchInput.wheelX;
    if (this._wheelX === 0) {
        return;
    }
    this.updateEventContainer('wheelX');
};

DKTools_Sprite.prototype.updateWheelYEvents = function() {
    this._wheelY = TouchInput.wheelY;
    if (this._wheelY === 0) {
        return;
    }
    this.updateEventContainer('wheelY');
};

DKTools_Sprite.prototype.updateWheelEvents = function() {
    this.updateWheelXEvents();
    this.updateWheelYEvents();
};

// update methods

DKTools_Sprite.prototype.updateAll = function() {
    this.updateBitmap();
};

/**
 * Обновляет спрайт
 *
 * @method update
 */
DKTools_Sprite.prototype.update = function() {
    Sprite.prototype.update.call(this);
    this.processTouch();
    this.updateEvents();
};

/**
 * Обновляет нажатие на спрайт
 *
 * @method updateTouch
 */
DKTools_Sprite.prototype.updateTouch = function() {
    if (TouchInput.isPressed() && this.isTouched()) {
        if (TouchInput.isTriggered()) {
            this._touching = true;
        } else {
            this._pressedTime++;
            if (this.isLongPressed()) {
                this._touching = false;
                this.updateLongPressEvents();
            }
        }
    } else {
        if (this._touching && TouchInput.isReleased()) {
            this._touching = false;
            this.updateClickEvents();
        }
        this._clearPressedTime();
    }
    this.updateFrame();
    this.updateOpacity();
    this.updateScale();
};

/**
 * Обновляет нахождение в спрайте
 *
 * @method updateEnter
 */
DKTools_Sprite.prototype.updateEnter = function() {
    if (this.isEntered()) {
        this._enteredTime++;
        this.updateWheelEvents();
        if (!this._entered) {
            this._entered = true;
            this.updateMouseEnterEvents();
        } else {
            this.updateMouseStayEvents();
            if (!Utils.isMobileDevice()) {
                this.updateTouch();
            }
        }
    } else {
        if (this._entered) {
            this._entered = false;
            this.updateMouseLeaveEvents();
        }
    }
};

/**
 * Обрабатывает обновление нахождения в спрайте и нажатия на спрайт
 *
 * @method processTouch
 */
DKTools_Sprite.prototype.processTouch = function() {
    if (this.isVisibleAndActive() || this.isEnabled('deactivatedTouches')) {
        this.updateEnter();
        if (Utils.isMobileDevice()) {
            this.updateTouch();
        }
    } else {
        this._entered = false;
        this._touching = false;
        this._clearEnteredTime();
        this._clearPressedTime();
    }
};

/**
 * Обновляет рамку спрайта
 *
 * @method updateFrame
 */
DKTools_Sprite.prototype.updateFrame = function() {
    var frame = (this.isPressed() ? this._hotFrame : this._coldFrame);
    if (frame) {
        this.setFrame(frame);
    }
};

/**
 * Обновляет масштабирование спрайта
 *
 * @method updateScale
 */
DKTools_Sprite.prototype.updateScale = function() {
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
DKTools_Sprite.prototype.updateOpacity = function() {
    var opacity = (this.isPressed() ? this._hotOpacity : this._coldOpacity);
    if (opacity != null) {
        this.setupOpacity(opacity);
    }
};

/**
 * Обновляет перемещение спрайта
 *
 * @method _updateMove
 * @private
 *
 * @param {Number} newX - Новая координата X
 * @param {Number} newY - Новая координата Y
 * @param {Number} newOpacity - Новая прозрачность
 * @param {Number} newScaleX - Новое масштабирование по X
 * @param {Number} newScaleY - Новое масштабирование по Y
 * @param {DKToolsEvent} event - Событие
 */
DKTools_Sprite.prototype._updateMove = function(newX, newY, newOpacity, newScaleX, newScaleY, event) {
    var duration = event.duration;
    var x = (this.x * (duration - 1) + newX) / duration;
    var y = (this.y * (duration - 1) + newY) / duration;
    var opacity = (this.opacity * (duration - 1) + newOpacity) / duration;
    var scaleX = (this.scale.x * (duration - 1) + newScaleX) / duration;
    var scaleY = (this.scale.y * (duration - 1) + newScaleY) / duration;
    this.move(x, y);
    this.setupOpacity(opacity);
    this.setupScale(scaleX, scaleY);
};





//===========================================================================
// Elements based on DKTools_Sprite
// Элементы, основанные на DKTools_Sprite
//===========================================================================





//===========================================================================
// DK Tools Cursor
//===========================================================================

/**
 * @class DKTools_Cursor
 *
 * @constructor
 *
 * @param {Number | Object | null} object - Координата X или Объект типа {}
 * @param {Number | null} y - Координата Y
 */
function DKTools_Cursor() {
    this.initialize.apply(this, arguments);
}

DKTools_Cursor.prototype = Object.create(DKTools_Sprite.prototype);
DKTools_Cursor.prototype.constructor = DKTools_Cursor;

// clear methods

DKTools_Cursor.prototype._clearAll = function() {
    DKTools_Sprite.prototype._clearAll.call(this);
    this._clearCursorAnimation();
};

DKTools_Cursor.prototype._clearCursorAnimation = function() {
    this._cursorAnimation = 0;
};

// standard methods

DKTools_Cursor.prototype.standardGraphic = function() {
    return this.standardWindowskin();
};

// setup methods

DKTools_Cursor.prototype.setupIndex = function(index) {
    this._index = index;
};

// set methods

DKTools_Cursor.prototype.setIndex = function(index) {
    if (this._index === index) {
        return false;
    }
    var lastIndex = this._index;
    this.setupIndex(index);
    if (lastIndex === this._index) {
        return false;
    }
    this.start();
    return true;
};

// load methods

DKTools_Cursor.prototype._onGraphicLoadListener = function() {
    var target = this.parent;
    var index = this._index;
    var cursorRect = target.cursorRect(index);
    var x = cursorRect.x;
    var y = cursorRect.y;
    var w = cursorRect.width;
    var h = cursorRect.height;
    var m = 4;
    var ox = 0, oy = 0;
    var w2 = Math.min(w, target.width);
    var h2 = Math.min(h, target.height);
    var skin = this.bitmap;

    this.move(x, y);

    if (w > 0 && h > 0) {
        var bitmap = new Bitmap(w2, h2);
        var p = 96;
        var q = 48;
        bitmap.blt(skin, p + m, p + m, q - m * 2, q - m * 2, ox + m, oy + m, w - m * 2, h - m * 2);
        bitmap.blt(skin, p + m, p, q - m * 2, m, ox + m, oy, w - m * 2, m);
        bitmap.blt(skin, p + m, p + q - m, q - m * 2, m, ox + m, oy + h - m, w - m * 2, m);
        bitmap.blt(skin, p, p + m, m, q - m * 2, ox, oy + m, m, h - m * 2);
        bitmap.blt(skin, p + q - m, p + m, m, q - m * 2, ox + w - m, oy + m, m, h - m * 2);
        bitmap.blt(skin, p, p, m, m, ox, oy + 0, m, m);
        bitmap.blt(skin, p + q - m, p, m, m, ox + w - m, oy, m, m);
        bitmap.blt(skin, p, p + q - m, m, m, ox, oy + h - m, m, m);
        bitmap.blt(skin, p + q - m, p + q - m, m, m, ox + w - m, oy + h - m, m, m);
        this.setupBitmap(bitmap);
    }
};

// update methods

DKTools_Cursor.prototype.update = function() {
    DKTools_Sprite.prototype.update.call(this);
    this.updateCursorAnimation();
};

DKTools_Cursor.prototype.updateCursorAnimation = function() {
    if (this.isVisibleAndActive()) {
        this._cursorAnimation++;
    }
    var blinkCount = this._cursorAnimation % 40;
    var element = this.parent.currentElement();
    var cursorOpacity = (element ? element.opacity : this.opacity);
    if (this.isVisibleAndActive()) {
        if (blinkCount < 20) {
            cursorOpacity -= blinkCount * 8;
        } else {
            cursorOpacity -= (40 - blinkCount) * 8;
        }
    }
    this.alpha = cursorOpacity / 255;
};





//===========================================================================
// DK Tools Viewport
//===========================================================================

function DKTools_Viewport() {
    this.initialize.apply(this, arguments);
}

DKTools_Viewport.prototype = Object.create(DKTools_Sprite.prototype);
DKTools_Viewport.prototype.constructor = DKTools_Viewport;

// clear methods

DKTools_Viewport.prototype._clearAll = function() {
    DKTools_Sprite.prototype._clearAll.call(this);
    this._clearOrigin();
};

DKTools_Viewport.prototype._clearOrigin = function() {
    this.origin = new Point();
};

// update methods

DKTools_Viewport.prototype.update = function() {
    DKTools_Sprite.prototype.update.call(this);
    this.children.forEach(function(child) {
        var width = this.width - child.x/* + this.origin.x*/;
        var height = this.height - child.y/* + this.origin.y*/;
        var x = 0;
        if (child.x < 0) {
            x = child.x;
        }
        var y = 0;
        if (child.y < 0) {
            y = child.y;
            width = child.width - (child.x + child.width - this.width);
            height = child.height - (child.y + child.height - this.height);
        }
        child.setFrame(x, y, width, height);
    }.bind(this));
};





//===========================================================================
// DK Tools Container Base
//===========================================================================

/**
 * @class DKTools_Container_Base
 *
 * @constructor
 *
 * @param {Number | Object | null} object - Координата X или Объект типа {}
 * @param {Number | null} y - Координата Y
 */
function DKTools_Container_Base() {
	this.initialize.apply(this, arguments);
}

DKTools_Container_Base.prototype = Object.create(DKTools_Sprite.prototype);
DKTools_Container_Base.prototype.constructor = DKTools_Container_Base;

// properties

/**
 * Количество элементов
 *
 * @property length
 * @type Number
 */
Object.defineProperty(DKTools_Container_Base.prototype, 'length', {
	get: function() {
		return this.elements().length;
	},
	configurable: true
});

// initialize methods

DKTools_Container_Base.prototype.initialize = function(object, y, fixedWidth, fixedHeight) {
    if (object && object.constructor === Object) {
        fixedWidth = object.fixedWidth || fixedWidth;
        fixedHeight = object.fixedHeight || fixedHeight;
    }
    this.setupFixedSize(fixedWidth, fixedHeight);
    DKTools_Sprite.prototype.initialize.call(this, object, y, fixedWidth, fixedHeight);
};

// clear methods

/**
 * Очищает все данные спрайта
 *
 * @method clearAll
 */
DKTools_Container_Base.prototype._clearAll = function() {
    DKTools_Sprite.prototype._clearAll.call(this);
    this._clearElements();
};

/**
 * Очищает список элементов контейнера
 *
 * @method clearElements
 */
DKTools_Container_Base.prototype._clearElements = function() {
    this._elements = [];
};

// standard methods

/**
 * Возвращает стандартное значение активности спрайта
 *
 * @method standardActive
 * @return Boolean
 */
DKTools_Container_Base.prototype.standardActive = function() {
    return false;
};

/**
 * Возвращает стандартный список элементов контейнера
 *
 * @method standardElements
 * @return Array
*/
DKTools_Container_Base.prototype.standardElements = function() {
	return [];
};

/**
 * Возвращает стандартное расположение элементов
 *
 * @method standardPlacement
 * @return String
*/
DKTools_Container_Base.prototype.standardPlacement = function() {
	return 'horizontal';
};

/**
 * Возвращает стандартное значение рядов
 *
 * @method standardRows
 * @return Number
 */
DKTools_Container_Base.prototype.standardRows = function() {
    return 0;
};

/**
 * Возвращает стандартное количество столбцов
 *
 * @method standardCols
 * @return Number
 */
DKTools_Container_Base.prototype.standardCols = function() {
    return 0;
};

/**
 * Возвращает стандартное значение отступа по X
 *
 * @method standardXPadding
 * @return Number
 */
DKTools_Container_Base.prototype.standardXPadding = function() {
    return 18;
};

/**
 * Возвращает стандартное значение отступа по Y
 *
 * @method standardYPadding
 * @return Number
 */
DKTools_Container_Base.prototype.standardYPadding = function() {
    return 18;
};

/**
 *
 *
 * @method standardReversed
 * @return {Boolean}
 */
DKTools_Container_Base.prototype.standardReversed = function() {
    return false;
};

// setup methods

/**
 * Устанавливает все параметры спрайта
 *
 * @method setupAll
 *
 * @param {Object || null} object - Объект типа {}
 *
 * object properties
 * @property {Array || null} elements - Массив с элементами
 * @property {String || null} placement - Расположение элементов
 * @property {Number || null} rows - Количество рядов
 * @property {Number || null} cols - Количество столбцов
 * @property {Number || null} xPadding - Отступ между элементами контейнера по X
 * @property {Number || null} yPadding - Отступ между элементами контейнера по Y
 *
 * @see other object properties: DKTools_Sprite.prototype.setupAll
*/
DKTools_Container_Base.prototype.setupAll = function(object) {
	object = object || {};
	DKTools_Sprite.prototype.setupAll.call(this, object);
	this.setupElements(object.elements);
	this.setupPlacement(object.placement);
    this.setupRows(object.rows);
    this.setupCols(object.cols);
    this.setupPadding(object.xPadding, object.yPadding);
    this.setupReversed(object.reversed);
};

DKTools_Container_Base.prototype.setupFixedWidth = function(width) {
    this._fixedWidth = width || 0;
};

DKTools_Container_Base.prototype.setupFixedHeight = function(height) {
    this._fixedHeight = height || 0;
};

DKTools_Container_Base.prototype.setupFixedSize = function(object, height) {
    if (object && object.constructor === Object) {
        return this.setupFixedSize(object.fixedWidth, object.fixedHeight);
    }
    this.setupFixedWidth(object);
    this.setupFixedHeight(height);
};

/**
 * Устанавливает элементы контейнера
 *
 * @method setupElements
 * @param {Array || null} elements - Массив с элементами контейнера
*/
DKTools_Container_Base.prototype.setupElements = function(elements) {
    if (elements && elements.constructor === Array) {
        this._elements = elements.clone();
    } else {
        this._elements = this.standardElements();
    }
};

/**
 * Добавляет элемент в контейнер, блокируя вызов функции start контейнера
 *
 * @method setupElement
 * @param {DKToolsSprite || null} element - Элемент контейнера
*/
DKTools_Container_Base.prototype.setupElement = function(element) {
	this.addElement(element, true);
};

/**
 * Устанавливает расположение элементов
 *
 * @method setupPlacement
 * @param {String || null} placement - Расположение элементов
*/
DKTools_Container_Base.prototype.setupPlacement = function(placement) {
	this._placement = placement || this.standardPlacement();
    this.setupRows();
    this.setupCols();
};

/**
 * Устанавливает количество столбцов
 *
 * @method setupRows
 * @param {Number || null} rows - Количество рядов
 */
DKTools_Container_Base.prototype.setupRows = function(rows) {
    this._rows = (rows == null ? this.standardRows() : rows);
};

/**
 * Устанавливает количество столбцов
 *
 * @method setupCols
 * @param {Number || null} cols - Количество столбцов
 */
DKTools_Container_Base.prototype.setupCols = function(cols) {
    this._cols = (cols == null ? this.standardCols() : cols);
};

/**
 * Устанавливает отступ между элементами контейнера по X
 *
 * @method setupXPadding
 * @param {Number || null} padding - Отступ между элементами контейнера по X
 */
DKTools_Container_Base.prototype.setupXPadding = function(padding) {
    this._xPadding = (padding == null ? this.standardXPadding() : padding);
};

/**
 * Устанавливает отступ между элементами контейнера по Y
 *
 * @method setupYPadding
 * @param {Number || null} padding - Отступ между элементами контейнера по Y
 */
DKTools_Container_Base.prototype.setupYPadding = function(padding) {
    this._yPadding = (padding == null ? this.standardYPadding() : padding);
};

/**
 * Устанавливает отступ между элементами контейнера по X и Y
 *
 * @method setupPadding
 *
 * @param {Number || null} xPadding - Отступ между элементами контейнера по X
 * @param {Number || null} yPadding - Отступ между элементами контейнера по Y
 */
DKTools_Container_Base.prototype.setupPadding = function(xPadding, yPadding) {
    this.setupXPadding(xPadding);
    this.setupYPadding(yPadding);
};

/**
 *
 *
 * @method setupReversed
 * @param reversed
 */
DKTools_Container_Base.prototype.setupReversed = function(reversed) {
    this._reversed = (reversed == null ? this.standardReversed() : reversed);
};

// set methods

/**
 * Изменяет все параметры спрайта
 *
 * @method setAll
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * @property {Array || null} elements - Массив с элементами
 * @property {String || null} placement - Расположение элементов
 * @property {Number || null} rows - Количество рядов
 * @property {Number || null} cols - Количество столбцов
 * @property {Number || null} xPadding - Отступ между элементами контейнера по X
 * @property {Number || null} yPadding - Отступ между элементами контейнера по Y
 *
 * @see other object properties: DKTools_Sprite.prototype.setupAll
 *
 * @return Number
*/
DKTools_Container_Base.prototype.setAll = function(object, blockStart) {
	object = object || {};
	var block = true;
	var changed = DKTools_Sprite.prototype.setAll.call(this, object, block);
    this._activateSetAllMode();
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
	if (changed && !blockStart) {
        this.start();
    }
    this._deactivateSetAllMode();
	return changed;
};

/**
 * Изменяет список элементов контейнера
 * Возвращает true, если изменение произошло
 *
 * @method setElements
 *
 * @param {Array || null} elements - Массив элементов контейнера
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * @return Boolean
*/
DKTools_Container_Base.prototype.setElements = function(elements, blockStart) {
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
 * @param {String || null} placement - Расположение элементов
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * @return Boolean
*/
DKTools_Container_Base.prototype.setPlacement = function(placement, blockStart) {
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
 * @param {Number || null} rows - Количество рядов
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * @return Boolean
 */
DKTools_Container_Base.prototype.setRows = function(rows, blockStart) {
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
 * @param {Number || null} cols - Количество столбцов
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * @return Boolean
 */
DKTools_Container_Base.prototype.setCols = function(cols, blockStart) {
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
 * Изменяет отступ между элементами контейнера по X
 * Возвращает true, если изменение произошло
 *
 * @method setXPadding
 *
 * @param {Number || null} padding - Отступ между элементами контейнера по X
 * @param {Boolean || null} blockUpdate - Блокировка вызова функции updatePlacement
 *
 * @return Boolean
 */
DKTools_Container_Base.prototype.setXPadding = function(padding, blockStart) {
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
 * Изменяет отступ между элементами контейнера по Y
 * Возвращает true, если изменение произошло
 *
 * @method setYPadding
 *
 * @param {Number || null} padding - Отступ между элементами контейнера по Y
 * @param {Boolean || null} blockUpdate - Блокировка вызова функции updatePlacement
 *
 * @return Boolean
 */
DKTools_Container_Base.prototype.setYPadding = function(padding, blockStart) {
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
 * Изменяет отступ между элементами контейнера по X и Y
 *
 * @method
 *
 * @param {Number | null} xPadding - Отступ между элементами контейнера по X
 * @param {Number | null} yPadding - Отступ между элементами контейнера по Y
 * @param {Boolean | null} blockUpdate - Блокировка вызова функции updatePlacement
 *
 * @return {Number}
 */
DKTools_Container_Base.prototype.setPadding = function(xPadding, yPadding, blockStart) {
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
 *
 * @method setReversed
 *
 * @param reversed
 * @param blockStart
 *
 * @return {Boolean}
 */
DKTools_Container_Base.prototype.setReversed = function(reversed, blockStart) {
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
 * @method start
*/
DKTools_Container_Base.prototype.start = function() {
	DKTools_Sprite.prototype.start.call(this);
    this.addElementsToChild();
    if (!this.isReady()) {
        this.addEventListener('ready', function() {
            this.startElements();
        }.bind(this));
    }
};

// check methods

DKTools_Container_Base.prototype.checkAll = function() {
    this.checkRowsAndCols();
    DKTools_Sprite.prototype.checkAll.call(this);
    this.checkElements();
};

/**
 * Проверяет количество рядов и столбцов
 * Если количетсво рядов и столбцов равно 0, то устанавливает
 * ряды и столбцы, исходя из расположения элементов
 *
 * Если количество рядов задано, а столбцов нет, то вычисляет
 * количество столбцов
 *
 * Если количество столбцов задано, а рядов нет, то вычисляет
 * количество рядов
 *
 * @method checkRowsAndCols
 * @return Boolean
 */
DKTools_Container_Base.prototype.checkRowsAndCols = function() {
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

/**
 * Проверяет ширину и высоту Bitmap на соответствие минимальным значениям
 * Возвращает true, если изменение произошло
 *
 * @method checkSize
 * @return Number
 */
DKTools_Container_Base.prototype.checkSize = function() {
    var minWidth = this.minWidth();
    var minHeight = this.minHeight();
    if (this.isFixedSize()) {
        this.setupSize(minWidth, minHeight);
        return 2;
    }
    return DKTools_Sprite.prototype.checkSize.call(this);
};

DKTools_Container_Base.prototype.checkElements = function() {
    if (this.isEmpty() || !this.isFixedSize()) {
        return;
    }
    var width = this._fixedWidth;
    var height = this._fixedHeight;
    var xPadding = this._xPadding;
    var yPadding = this._yPadding;
    var maxRows = this.maxRows();
    var maxCols = this.maxCols();
    var paddingWidth = xPadding * (maxCols - 1);
    var paddingHeight = yPadding * (maxRows - 1);
    var elementsWidth = 0;
    var elementsHeight = 0;
    for(var col = 1; col < maxCols + 1; col++) {
        elementsWidth += this.colWidth(col);
    }
    for(var row = 1; row < maxRows + 1; row++) {
        elementsHeight += this.rowHeight(row);
    }
    var newElementWidth = (width - paddingWidth) / maxCols;
    var newElementHeight = (height - paddingHeight) / maxRows;
    var callback = function(element) {
        var minWidth = element.minWidth();
        var minHeight = element.minHeight();
        if (minWidth > newElementWidth || minHeight > newElementHeight) {
            throw new Error('Container Error: minSize = (%1, %2), newSize = (%3, %4)'.format(minWidth, minHeight, newElementWidth, newElementHeight));
        }
        element.resize(newElementWidth, newElementHeight);
    }.bind(this);
    this.iterateElements(callback);
};

DKTools_Container_Base.prototype.resizeByFixedSize = function(width, height, blockStart) {
    if (this._fixedWidth === width && this._fixedHeight === height) {
        return false;
    }
    var lastWidth = this._fixedWidth;
    var lastHeight = this._fixedHeight;
    this.setupFixedSize(width, height);
    if (lastWidth === this._fixedWidth && lastHeight === this._fixedHeight) {
        return false;
    }
    if (!blockStart) {
        this.start();
    }
    return true;
};

// clone methods

/**
 * Клонирует элементы контейнера
 *
 * @method cloneElements
 * @private
 *
 * @param {Number | null} [startPosition = 0] - Стартовая позиция клонирования
 *
 * @return {Array} Массив с клонированными элементами контейнера
 */
DKTools_Container_Base.prototype._cloneElements = function(startPosition) {
    startPosition = startPosition || 0;
    var array = [];
    for(var i = startPosition; i < this.length; i++) {
        var element = this.element(i);
        array.push(element.clone());
    }
    return array;
};

/**
 *
 *
 * @method object
 * @return {Object}
 */
DKTools_Container_Base.prototype.object = function() {
    var object = DKTools_Sprite.prototype.object.call(this);
    object.elements = this._cloneElements();
    object.placement = this._placement;
    object.rows = this._rows;
    object.cols = this._cols;
    object.xPadding = this._xPadding;
    object.yPadding = this._yPadding;
    object.reversed = this._reversed;
    return object;
};

// uncategorized methods

/**
 * Очищает список элементов контейнера
 *
 * @method clearElements
 */
DKTools_Container_Base.prototype.clearElements = function() {
    return this.setElements();
};

/**
 * Возвращает минимальную ширину Bitmap
 *
 * @method minWidth
 * @return Number
*/
DKTools_Container_Base.prototype.minWidth = function() {
    if (this.isFixedSize()) {
        return this._fixedWidth;
    }
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
 * @method minHeight
 * @return Number
*/
DKTools_Container_Base.prototype.minHeight = function() {
    if (this.isFixedSize()) {
        return this._fixedHeight;
    }
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

/**
 * Возвращает максимальное количество рядов
 *
 * @method maxRows
 * @return Number
 */
DKTools_Container_Base.prototype.maxRows = function() {
    return this._rows;
};

/**
 * Возвращает максимальное количество столбцов
 *
 * @method maxCols
 * @return Number
 */
DKTools_Container_Base.prototype.maxCols = function() {
    return this._cols;
};

/**
 * Возвращает минимальное количество элементов
 * Используется для проверки рядов и столбцов
 *
 * @method _minElements
 * @private
 *
 * @return Number
 */
DKTools_Container_Base.prototype._minElements = function() {
    return this.length;
};

/**
 *
 *
 * @method reverse
 */
DKTools_Container_Base.prototype.reverse = function() {
    this.setReversed(!this.isReversed());
};

// is methods

DKTools_Container_Base.prototype.isFixedSize = function() {
    return this._fixedWidth > 0 && this._fixedHeight > 0;
};

//DKTools_Container_Base.prototype.isResizable = function() {
//    return DKTools_Sprite.prototype.isResizable.call(this) && !this.isFixedSize();
//};

/**
 * Возвращает true, если элементы располагаются вертикально
 *
 * @method isVerticalPlacement
 * @return Boolean
 */
DKTools_Container_Base.prototype.isVerticalPlacement = function() {
    return this._placement === 'vertical';
};

/**
 * Возвращает true, если элементы располагаются горизонтально
 *
 * @method isHorizontalPlacement
 * @return Boolean
 */
DKTools_Container_Base.prototype.isHorizontalPlacement = function() {
    return this._placement === 'horizontal';
};

/**
 * Возвращает true, если контейнер не содержит элементов
 *
 * @method isEmpty
 * @return Boolean
 */
DKTools_Container_Base.prototype.isEmpty = function() {
    return this.length === 0;
};

/**
 * Возвращает true, если спрайт готов
 *
 * @method isReady
 * @return Boolean
*/
DKTools_Container_Base.prototype.isReady = function() {
	for(var i = 0; i < this.length; i++) {
        if (!this.element(i).isReady()) {
            return false;
        }
    }
	return true;
};

/**
 * Возвращает true, если спрайт является контейнером
 *
 * @method isContainer
 * @return Boolean
 */
DKTools_Container_Base.prototype.isContainer = function() {
    return true;
};

/**
 *
 *
 * @method isReversed
 * @return {Boolean}
 */
DKTools_Container_Base.prototype.isReversed = function() {
    return this._reversed;
};

// elements methods

/**
 * Возвращает все элементы контейнера
 *
 * @method elements
 * @return Array
*/
DKTools_Container_Base.prototype.elements = function() {
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
 *
 * @param {Function} callback - Функция обработки для каждого элемента контейнера
 * @param {Boolean || null} start - Вызов функции start контейнера
 */
DKTools_Container_Base.prototype.iterateElements = function(callback, start) {
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
DKTools_Container_Base.prototype.removeElementsFromChild = function() {
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
DKTools_Container_Base.prototype.addElementsToChild = function() {
	this.removeElementsFromChild();
	var callback = function(element) {
		this.addChild(element);
	}.bind(this);
	this.iterateElements(callback);
};

/**
 * Добавляет элемент в контейнер
 *
 * @method addElement
 *
 * @param {DKToolsSprite || Array || null} object - Элемент или Массив элементов
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * @return {Boolean}
*/
DKTools_Container_Base.prototype.addElement = function(object, blockStart) {
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
 *
 *
 * @param {DKToolsSprite} element
 * @return {Number}
 */
DKTools_Container_Base.prototype.elementIndex = function(element) {
    return this.elements().indexOf(element);
};

/**
 *
 *
 * @method hasElement
 *
 * @param element
 *
 * @return {Boolean}
 */
DKTools_Container_Base.prototype.hasElement = function(element) {
    return this.elementIndex(element) >= 0;
};

/**
 * Удаляет элемент из контейнера
 *
 * @method removeElement
 *
 * @param {DKToolsSprite || Number || null} object - Элемент или номер элемента
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
*/
DKTools_Container_Base.prototype.removeElement = function(object, blockStart) {
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
};

/**
 * Вызывает функцию start у всех элементов контейнера
 *
 * @method startElements
 * @param {Boolean || null} blockStart - Блокировка вызова функции start контейнера
*/
DKTools_Container_Base.prototype.startElements = function(blockStart) {
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
 * @param {Number || null} width - Высота Bitmap
 * @param {Number || null} height - Ширина Bitmap
 * @param {Boolean || null} blockStart - Блокировка вызова функции start контейнера
*/
DKTools_Container_Base.prototype.resizeElements = function(width, height, blockStart) {
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
 * @param {Boolean || null} start - Вызов функции start контейнера
*/
DKTools_Container_Base.prototype.activateElements = function(start) {
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
 * @param {Boolean || null} start - Вызов функции start контейнера
*/
DKTools_Container_Base.prototype.deactivateElements = function(start) {
    var callback = function(element) {
        element.deactivate();
    };
    this.iterateElements(callback);
    if (start) {
        this.start();
    }
};

/**
 *
 *
 * @method showElements
 *
 * @param duration
 * @param activate
 * @param start
 */
DKTools_Container_Base.prototype.showElements = function(duration, activate, start) {
    var callback = function(element) {
        element.show(duration, activate);
    }.bind(this);
    this.iterateElements(callback);
    if (start) {
        this.start();
    }
};

/**
 *
 *
 * @method hideElements
 *
 * @param duration
 * @param blockDeactivate
 * @param start
 */
DKTools_Container_Base.prototype.hideElements = function(duration, blockDeactivate, start) {
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
 *
 * @param {Number} id - Номер элемента
 *
 * @return DKToolsSprite || null
*/
DKTools_Container_Base.prototype.element = function(id) {
    return this.elements()[id];
};

/**
 * Возвращает массив с элементами ряда
 *
 * @method row
 *
 * @param {Number} row - Номер ряда
 *
 * @return Array
 */
DKTools_Container_Base.prototype.row = function(row) {
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
 *
 * @param {Number} col - Номер столбца
 *
 * @return Array
 */
DKTools_Container_Base.prototype.col = function(col) {
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

DKTools_Container_Base.prototype.fixedRowHeight = function() {
    var height = this._fixedHeight;
    var yPadding = this._yPadding;
    var maxRows = this.maxRows();
    var paddingHeight = yPadding * (maxRows - 1);
    return (height - paddingHeight) / maxRows;
};

DKTools_Container_Base.prototype.fixedColWidth = function() {
    var width = this._fixedWidth;
    var xPadding = this._xPadding;
    var maxCols = this.maxCols();
    var paddingWidth = xPadding * (maxCols - 1);
    return (width - paddingWidth) / maxCols;
};

/**
 * Возвращает высоту ряда (максимальную высоту элементов ряда)
 *
 * @method rowHeight
 *
 * @param {Number} row - Номер ряда
 *
 * @return Number
 */
DKTools_Container_Base.prototype.rowHeight = function(row) {
    if (this.isFixedSize()) {
        return this.fixedRowHeight();
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
 *
 * @param {Number} col - Номер столбца
 *
 * @return Number
 */
DKTools_Container_Base.prototype.colWidth = function(col) {
    if (this.isFixedSize()) {
        return this.fixedColWidth();
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
 *
 * @param {Number} row - Номер строки
 *
 * @return Number
 */
DKTools_Container_Base.prototype.rowY = function(row) {
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
 *
 * @param {Number} col - Номер столбца
 *
 * @return Number
 */
DKTools_Container_Base.prototype.colX = function(col) {
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
 *
 * @param {DKToolsSprite} element - Элемент контейнера
 *
 * @return Number
 */
DKTools_Container_Base.prototype.elementRow = function(element) {
    var index = this.elementIndex(element);
    var maxCols = this.maxCols();
    return Math.floor(index / maxCols) + 1;
};

/**
 * Возвращает номер столбца элемента контейнера
 *
 * @method elementCol
 *
 * @param {DKToolsSprite} element - Элемент контейнера
 *
 * @return Number
 */
DKTools_Container_Base.prototype.elementCol = function(element) {
    var index = this.elementIndex(element);
    return (index % this.maxCols()) + 1;
};

// align methods

/**
 * Выравнивает элемент по ширине и высоте
 *
 * @method alignElement
 *
 * @param {DKToolsSprite || Number} object - Номер элемента или сам элемент
 *
 * @return {Boolean}
 */
DKTools_Container_Base.prototype.alignElement = function(object) {
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
DKTools_Container_Base.prototype.alignRow = function(row) {
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
DKTools_Container_Base.prototype.alignCol = function(col) {
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
DKTools_Container_Base.prototype.alignElements = function() {
    var callback = function(element) {
        this.alignElement(element);
    }.bind(this);
    this.iterateElements(callback);
};

// update methods

DKTools_Container_Base.prototype.updateAll = function() {
    DKTools_Sprite.prototype.updateAll.call(this);
    this.updatePlacement();
};

/**
 * Обновляет ID элементов контейнера
 *
 * @method updateElementsId
 */
DKTools_Container_Base.prototype.updateElementsId = function() {
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
DKTools_Container_Base.prototype.updatePlacement = function() {
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
// DK Tools Selectable Container Base
//===========================================================================

function DKTools_Selectable_Container_Base() {
    this.initialize.apply(this, arguments);
}

DKTools_Selectable_Container_Base.prototype = Object.create(DKTools_Container_Base.prototype);
DKTools_Selectable_Container_Base.prototype.constructor = DKTools_Selectable_Container_Base;

// clear methods

DKTools_Selectable_Container_Base.prototype._clearAll = function() {
    DKTools_Container_Base.prototype._clearAll.call(this);
    this._clearCursorAnimation();
};

DKTools_Selectable_Container_Base.prototype._clearCursorAnimation = function() {
    this._cursorAnimation = 0;
};

// standard methods

DKTools_Selectable_Container_Base.prototype.standardActive = function() {
    return true;
};

DKTools_Selectable_Container_Base.prototype.standardIndex = function() {
    return 0;
};

// setup methods

DKTools_Selectable_Container_Base.prototype._setupEvents = function() {
    DKTools_Container_Base.prototype._setupEvents.call(this);
    this.addEventListener('start', function() {
        this.addChild(this._cursorSprite);
    }.bind(this));
    this.addEventHandler('click', this._onTouch.bind(this));
    this.addEventHandler('wheelX', this._onWheelX.bind(this));
    this.addEventHandler('wheelY', this._onWheelY.bind(this));
};

DKTools_Selectable_Container_Base.prototype.setupAll = function(object) {
    object = object || {};
    DKTools_Container_Base.prototype.setupAll.call(this, object);
    this.setupIndex(object.index);
};

DKTools_Selectable_Container_Base.prototype.setupIndex = function(index) {
    this._index = (index == null ? this.standardIndex() : index);
};

// set methods

DKTools_Selectable_Container_Base.prototype.setAll = function(object, blockStart) {
    object = object || {};
    var block = true;
    var changed = DKTools_Container_Base.prototype.setAll.call(this, object, block);
    if (this.setIndex(object.index, block)) {
        changed++;
    }
    if (changed && !blockStart) {
        this.start();
    }
    return changed;
};

DKTools_Selectable_Container_Base.prototype.setIndex = function(index, blockSelect) {
    if (this._index === index) {
        return false;
    }
    var lastIndex = this._index;
    this.setupIndex(index);
    if (lastIndex === this._index) {
        return false;
    }
    if (!blockSelect) {
        this.reselect();
    }
    return true;
};

// other methods

DKTools_Selectable_Container_Base.prototype.start = function() {
    DKTools_Container_Base.prototype.start.call(this);
    this.reselect();
};

// create methods

DKTools_Selectable_Container_Base.prototype._createAll = function() {
    DKTools_Container_Base.prototype._createAll.call(this);
    this._createCursorSprite();
};

DKTools_Selectable_Container_Base.prototype._createCursorSprite = function() {
    this._cursorSprite = new DKTools_Sprite();
    this._cursorSprite.setupGraphic(this.standardWindowskin());
    this._cursorSprite._onGraphicLoadListener = this._updateCursorRect.bind(this._cursorSprite);
};

//

/*

DKTools_Selectable_Container_Base.prototype._clearAll = function() {
    DKTools_Container_Base.prototype._clearAll.call(this);
    this._clearCursorAnimation();
    this._topRow = 0;
    this._topCol = 0;
};

DKTools_Selectable_Container_Base.prototype.nowRow = function() {
    return Math.floor(this.index() / this.maxCols());
};

DKTools_Selectable_Container_Base.prototype.nowCol = function() {
    return this.index();
};

DKTools_Selectable_Container_Base.prototype.setBottomRow = function(row) {
    this.setTopRow(row - (this.visibleRows() - 1));
};

DKTools_Selectable_Container_Base.prototype.bottomRow = function() {
    return Math.max(0, this.topRow() + this.visibleRows() - 1);
};

DKTools_Selectable_Container_Base.prototype.setBottomCol = function(col) {
    this.setTopCol(col - (this.visibleCols() - 1));
};

DKTools_Selectable_Container_Base.prototype.bottomCol = function() {
    return Math.max(0, this.topCol() + this.visibleCols() - 1);
};

DKTools_Selectable_Container_Base.prototype.ensureCursorVisible = function() {
    if (this.isVertical()) {
        var row = this.nowRow();
        if (row < this.topRow()) {
            this.setTopRow(row);
        } else if (row > this.bottomRow()) {
            this.setBottomRow(row);
        }
    } else if (this.isHorizontal()) {
        var col = this.nowCol();
        if (col < this.topCol()) {
            this.setTopCol(col);
        } else if (col > this.bottomCol()) {
            this.setBottomCol(col);
        }
    }
};

DKTools_Selectable_Container_Base.prototype.setTopRow = function(row) {
    this._topRow = row;
};

DKTools_Selectable_Container_Base.prototype.setTopCol = function(col) {
    this._topCol = col;
};

DKTools_Selectable_Container_Base.prototype.visibleRows = function() {
    return 1;
};

DKTools_Selectable_Container_Base.prototype.visibleCols = function() {
    return 2;
};

DKTools_Selectable_Container_Base.prototype.visibleElements = function() {
    return this.visibleRows() * this.visibleCols();
};

DKTools_Selectable_Container_Base.prototype.topRow = function() {
    return this._topRow;
};

DKTools_Selectable_Container_Base.prototype.topCol = function() {
    return this._topCol;
};

DKTools_Selectable_Container_Base.prototype.topIndex = function() {
    if (this.isVertical()) {
        return this.topRow() * this.maxCols();
    } else if (this.isHorizontal()) {
        return this.topCol();// * this.visibleCols();
    }
};

DKTools_Selectable_Container_Base.prototype.select = function(index) {
    this.setupIndex(index);
    this.ensureCursorVisible();
    this.updatePlacement();
    this.updateCursor();
};

DKTools_Selectable_Container_Base.prototype.updatePlacement = function() {
    if (this.isEmpty()) {
        return;
    }
    this.hideElements();
    var id = 0;
    var topIndex = this.topIndex();
    var visibleRows = this.visibleRows() + 1;
    var visibleCols = this.visibleCols() + 1;
    for(var row = 1; row < visibleRows; row++) {
        for(var col = 1; col < visibleCols; col++) {
            var index = topIndex + id;
            var element = this.element(index);
            var x = this.colX(col);
            var y = this.rowY(row);
            element.move(x, y);
            element.show();
            element.activate();
            id++;
            if (this.length === id) {
                return;
            }
        }
    }
};

*/

DKTools_Selectable_Container_Base.prototype.deselect = function() {
    this.select(-1);
};

DKTools_Selectable_Container_Base.prototype.reselect = function() {
    this.select(this._index);
};

DKTools_Selectable_Container_Base.prototype.currentRow = function() {
    return this.elementRow(this.currentElement());
};

DKTools_Selectable_Container_Base.prototype.currentCol = function() {
    return this.elementCol(this.currentElement());
};

DKTools_Selectable_Container_Base.prototype.currentElement = function() {
    return this.element(this.index());
};

DKTools_Selectable_Container_Base.prototype.index = function() {
    return this._index;
};

DKTools_Selectable_Container_Base.prototype.select = function(index) {
    this.setupIndex(index);
    this.updateCursor();
};

DKTools_Selectable_Container_Base.prototype._onTouch = function() {
    var lastIndex = this._index;
    var hitIndex = this.hitTest(this.clickX, this.clickY);
    if (hitIndex >= 0) {
        if (hitIndex === lastIndex && this.isOkEnabled()) {
            this.processOk();
        } else if (this.isCursorMovable()) {
            this.select(hitIndex);
        }
    }
    if (lastIndex !== this._index) {
        this.playCursorSound();
    }
};

DKTools_Selectable_Container_Base.prototype._onWheelX = function() {
};

DKTools_Selectable_Container_Base.prototype._onWheelY = function() {
    if (this.wheelY > 0) {
        this.next();
    } else {
        this.prev();
    }
};

DKTools_Selectable_Container_Base.prototype.hitTest = function(x, y) {
    for(var index = 0; index < this.length; index++) {
        var rect = this.cursorRect(index);
        var right = rect.x + rect.width;
        var bottom = rect.y + rect.height;
        if (x >= rect.x && y >= rect.y && x < right && y < bottom) {
            return index;
        }
    }
    return -1;
};

DKTools_Selectable_Container_Base.prototype.next = function() {
    this.cursorRight(true);
};

DKTools_Selectable_Container_Base.prototype.prev = function() {
    this.cursorLeft(true);
};

// cursor methods

DKTools_Selectable_Container_Base.prototype.cursorRect = function(index) {
    if (index >= 0) {
        var element = this.element(index);
        if (element) {
            return element.positionToRect();
        }
    }
    return Rectangle.emptyRectangle;
};

DKTools_Selectable_Container_Base.prototype.cursorDown = function(wrap) {
    var index = this.index();
    var length = this.length;
    var maxCols = this.maxCols();
    if (index < length - maxCols || (wrap && maxCols === 1)) {
        this.select((index + maxCols) % length);
    }
};

DKTools_Selectable_Container_Base.prototype.cursorUp = function(wrap) {
    var index = this.index();
    var length = this.length;
    var maxCols = this.maxCols();
    if (index >= maxCols || (wrap && maxCols === 1)) {
        this.select((index - maxCols + length) % length);
    }
};

DKTools_Selectable_Container_Base.prototype.cursorRight = function(wrap) {
    var index = this.index();
    var length = this.length;
    var maxCols = this.maxCols();
    if (maxCols >= 2 && (index < length - 1 || wrap)) {
        this.select((index + 1) % length);
    }
};

DKTools_Selectable_Container_Base.prototype.cursorLeft = function(wrap) {
    var index = this.index();
    var length = this.length;
    var maxCols = this.maxCols();
    if (maxCols >= 2 && (index > 0 || wrap)) {
        this.select((index - 1 + length) % length);
    }
};

// play methods

DKTools_Selectable_Container_Base.prototype.playOkSound = function() {
    SoundManager.playOk();
};

DKTools_Selectable_Container_Base.prototype.playCancelSound = function() {
    SoundManager.playCancel();
};

DKTools_Selectable_Container_Base.prototype.playBuzzerSound = function() {
    SoundManager.playBuzzer();
};

DKTools_Selectable_Container_Base.prototype.playCursorSound = function() {
    SoundManager.playCursor();
};

// is methods

DKTools_Selectable_Container_Base.prototype.isHorizontal = function() {
    return true;
    //return this.maxRows() === 1;
};

DKTools_Selectable_Container_Base.prototype.isVertical = function() {
    return false;
    //return this.maxCols() === 1;
};

DKTools_Selectable_Container_Base.prototype.isCursorMovable = function() {
    return (this.isVisibleAndActive() && !this._cursorFixed &&
            !this._cursorAll && this.length > 0);
};

DKTools_Selectable_Container_Base.prototype.isCurrentElementEnabled = function() {
    return this.currentElement().isVisibleAndActive();
};

DKTools_Selectable_Container_Base.prototype.isOkEnabled = function() {
    return this.hasEvents('ok');
};

DKTools_Selectable_Container_Base.prototype.isCancelEnabled = function() {
    return this.hasEvents('cancel');
};

DKTools_Selectable_Container_Base.prototype.isOkTriggered = function() {
    return Input.isRepeated('ok');
};

DKTools_Selectable_Container_Base.prototype.isCancelTriggered = function() {
    return Input.isRepeated('cancel');
};

// process methods

DKTools_Selectable_Container_Base.prototype.processCursorMove = function() {
    if (this.isCursorMovable()) {
        var index = this.index();
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
        if (index !== this.index()) {
            this.playCursorSound();
        }
    }
};

DKTools_Selectable_Container_Base.prototype.processHandling = function() {
    if (this.isVisibleAndActive()) {
        if (this.isOkEnabled() && this.isOkTriggered()) {
            this.processOk();
        } else if (this.isCancelEnabled() && this.isCancelTriggered()) {
            this.processCancel();
        }
    }
};

DKTools_Selectable_Container_Base.prototype.processOk = function() {
    if (this.isCurrentElementEnabled()) {
        this.playOkSound();
        this.deactivate();
        this.updateEventContainer('ok');
    } else {
        this.playBuzzerSound();
        this.updateEventContainer('buzzer');
    }
};

DKTools_Selectable_Container_Base.prototype.processCancel = function() {
    this.playCancelSound();
    this.deactivate();
    this.updateEventContainer('cancel');
};

// update methods

DKTools_Selectable_Container_Base.prototype.update = function() {
    DKTools_Container_Base.prototype.update.call(this);
    this.updateCursorAnimation();
    this.processCursorMove();
    this.processHandling();
};

DKTools_Selectable_Container_Base.prototype._updateCursorRect = function() {
    var target = this.parent;
    var index = target._index;
    var cursorRect = target.cursorRect(index);
    var x = cursorRect.x;
    var y = cursorRect.y;
    var w = cursorRect.width;
    var h = cursorRect.height;
    var m = 4;
    var ox = 0, oy = 0;
    var w2 = Math.min(w, target.width);
    var h2 = Math.min(h, target.height);
    var skin = this.bitmap;

    this.move(x, y);

    if (w > 0 && h > 0) {
        var bitmap = new Bitmap(w2, h2);
        var p = 96;
        var q = 48;
        bitmap.blt(skin, p + m, p + m, q - m * 2, q - m * 2, ox + m, oy + m, w - m * 2, h - m * 2);
        bitmap.blt(skin, p + m, p, q - m * 2, m, ox + m, oy, w - m * 2, m);
        bitmap.blt(skin, p + m, p + q - m, q - m * 2, m, ox + m, oy + h - m, w - m * 2, m);
        bitmap.blt(skin, p, p + m, m, q - m * 2, ox, oy + m, m, h - m * 2);
        bitmap.blt(skin, p + q - m, p + m, m, q - m * 2, ox + w - m, oy + m, m, h - m * 2);
        bitmap.blt(skin, p, p, m, m, ox, oy + 0, m, m);
        bitmap.blt(skin, p + q - m, p, m, m, ox + w - m, oy, m, m);
        bitmap.blt(skin, p, p + q - m, m, m, ox, oy + h - m, m, m);
        bitmap.blt(skin, p + q - m, p + q - m, m, m, ox + w - m, oy + h - m, m, m);
        this.setupBitmap(bitmap);
    }
};

DKTools_Selectable_Container_Base.prototype.updateCursor = function() {
    this._cursorSprite.start();
};

//DKTools_Selectable_Container_Base.prototype.updateCursor = function() {
//    var cursorRect = this.cursorRect(this._index);
//    var x = cursorRect.x;
//    var y = cursorRect.y;
//    var w = cursorRect.width;
//    var h = cursorRect.height;
//    var m = 4;
//    var ox = 0;
//    var oy = 0;
//    var w2 = Math.min(w, this.width);
//    var h2 = Math.min(h, this.height);
//    var skin = ImageManager.loadSystem('Window');
//
//    this._cursorSprite.setupSize(w2, h2);
//    this._cursorSprite.start();
//    this._cursorSprite.move(x, y);
//
//    if (w > 0 && h > 0) {
//        var bitmap = this._cursorSprite.bitmap;
//        var p = 96;
//        var q = 48;
//        bitmap.blt(skin, p + m, p + m, q - m * 2, q - m * 2, ox + m, oy + m, w - m * 2, h - m * 2);
//        bitmap.blt(skin, p + m, p, q - m * 2, m, ox + m, oy, w - m * 2, m);
//        bitmap.blt(skin, p + m, p + q - m, q - m * 2, m, ox + m, oy + h - m, w - m * 2, m);
//        bitmap.blt(skin, p, p + m, m, q - m * 2, ox, oy + m, m, h - m * 2);
//        bitmap.blt(skin, p + q - m, p + m, m, q - m * 2, ox + w - m, oy + m, m, h - m * 2);
//        bitmap.blt(skin, p, p, m, m, ox, oy + 0, m, m);
//        bitmap.blt(skin, p + q - m, p, m, m, ox + w - m, oy, m, m);
//        bitmap.blt(skin, p, p + q - m, m, m, ox, oy + h - m, m, m);
//        bitmap.blt(skin, p + q - m, p + q - m, m, m, ox + w - m, oy + h - m, m, m);
//    }
//};

DKTools_Selectable_Container_Base.prototype.updateCursorAnimation = function() {
    if (this.isVisibleAndActive()) {
        this._cursorAnimation++;
    }
    var blinkCount = this._cursorAnimation % 40;
    var element = this.currentElement();
    var cursorOpacity = (element ? element.opacity : this.opacity);
    if (this.isVisibleAndActive()) {
        if (blinkCount < 20) {
            cursorOpacity -= blinkCount * 8;
        } else {
            cursorOpacity -= (40 - blinkCount) * 8;
        }
    }
    this._cursorSprite.alpha = cursorOpacity / 255;
};





//===========================================================================
// DK Tools Text Container
//===========================================================================

/**
 * @class DKTools_Text_Container
 *
 * @constructor
 *
 * @param {Number} object - Координата X
 * @param {Number} y - Координата Y
 */
function DKTools_Text_Container() {
	this.initialize.apply(this, arguments);
}

DKTools_Text_Container.prototype = Object.create(DKTools_Container_Base.prototype);
DKTools_Text_Container.prototype.constructor = DKTools_Text_Container;

// property

Object.defineProperty(DKTools_Text_Container.prototype, 'textSprite', {
    get: function() {
        return this._textSprite;
    },
    configurable: true
});

// setup methods

DKTools_Text_Container.prototype._setupEvents = function() {
    DKTools_Container_Base.prototype._setupEvents.call(this);
    this.addEventListener('start', function() {
        this._textSprite.start();
        this._textSprite.deactivate();
    }.bind(this));
};

/**
 * Устанавливает все параметры спрайта
 *
 * @method setupAll
 *
 * @param {Object || null} object - Объект типа {}
 *
 * @property {Object || null} textSprite - Объект типа {}
 *
 * @see other object properties: DKTools_Container_Base.prototype.setupAll
 * @see textSprite properties: DKTools_Sprite.prototype.setupAll
*/
DKTools_Text_Container.prototype.setupAll = function(object) {
	object = object || {};
	DKTools_Container_Base.prototype.setupAll.call(this, object);
    this.setupTextSprite(object.textSprite);
};

/**
 * Устанавливает все параметры и размер для Bitmap спрайта текста
 *
 * @method setupTextSprite
 *
 * @param {Object || null} object - Объект типа {}
 *
 * @property {Number || null} width - Ширина Bitmap спрайта текста
 * @property {Number || null} height - Высота Bitmap спрайта текста
 *
 * @see other object properties: DKTools_Sprite.prototype.setupAll
*/
DKTools_Text_Container.prototype.setupTextSprite = function(object) {
    object = object || {};
    this._textSprite.setupAll(object);
    this.setupTextSpriteSize(object.width, object.height);
};

/**
 * Устанавливает ширину для Bitmap спрайта текста
 *
 * @method setupTextSpriteWidth
 *
 * @param {Number || null} width - Ширина Bitmap спрайта текста
 */
DKTools_Text_Container.prototype.setupTextSpriteWidth = function(width) {
    this._textSprite.setupWidth(width);
};

/**
 * Устанавливает высоту для Bitmap спрайта текста
 *
 * @method setupTextSpriteHeight
 *
 * @param {Number || null} height - Высота Bitmap спрайта текста
 */
DKTools_Text_Container.prototype.setupTextSpriteHeight = function(height) {
    this._textSprite.setupHeight(height);
};

/**
 * Устанавливает размер для Bitmap спрайта текста
 *
 * @method setupTextSpriteSize
 *
 * @param {Number || null} width - Ширина Bitmap спрайта текста
 * @param {Number || null} height - Высота Bitmap спрайта текста
*/
DKTools_Text_Container.prototype.setupTextSpriteSize = function(width, height) {
    this._textSprite.setupSize(width, height);
};

/**
 * Устанавливает отображаемый текст для спрайта текста
 *
 * @method setupText
 *
 * @param {String || null} text - Отображаемый текст
*/
DKTools_Text_Container.prototype.setupText = function(text) {
    this._textSprite.setupText(text);
};

// set methods

/**
 * Изменяет все параметры спрайта
 * Возвращает количество измененных параметров
 *
 * @method setAll
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * @property {Object || null} textSprite - Объект типа {}
 *
 * @see other object properties: DKTools_Container_Base.prototype.setAll
 * @see textSprite properties: DKTools_Sprite.prototype.setAll
 *
 * @return Number
*/
DKTools_Text_Container.prototype.setAll = function(object, blockStart) {
	object = object || {};
	var block = true;
    var changed = DKTools_Container_Base.prototype.setAll.call(this, object, block);
    this._activateSetAllMode();
    changed += this.setTextSprite(object.textSprite, block);
	if (changed && !blockStart) {
        this.start();
    }
    this._deactivateSetAllMode();
	return changed;
};

/**
 * Изменяет все параметры спрайта текста
 * Возвращает количество измененных параметров
 *
 * @method setTextSprite
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * @see object properties: DKTools_Sprite.prototype.setAll
 *
 * @return Number
*/
DKTools_Text_Container.prototype.setTextSprite = function(object, blockStart) {
    return this._textSprite.setAll(object, blockStart);
};

/**
 * Изменяет размер для Bitmap спрайта текста
 * Возвращает true, если изменение произошло
 *
 * @method setTextSpriteSize
 *
 * @param {Number || null} width - Ширина Bitmap спрайта текста
 * @param {Number || null} height - Высота Bitmap спрайта текста
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * @return Boolean
*/
DKTools_Text_Container.prototype.setTextSpriteSize = function(width, height, blockStart) {
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
 * @method setText
 *
 * @param {String || null} text - Отображаемый текст
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * @return Boolean
*/
DKTools_Text_Container.prototype.setText = function(text, blockStart) {
    if (this._textSprite.setText(text)) {
        if (!blockStart) {
            this.start();
        }
        return true;
    }
    return false;
};

// create methods

DKTools_Text_Container.prototype._createAll = function() {
    DKTools_Container_Base.prototype._createAll.call(this);
    this._createTextSprite();
};

/**
 * Создает спрайт текста
 *
 * @method _createTextSprite
 *
 * @private
 *
 * @param {Object || null} object - Объект типа {}
 *
 * @see object properties: DKTools_Sprite.prototype.initialize
 */
DKTools_Text_Container.prototype._createTextSprite = function(object) {
    this._textSprite = new DKTools_Sprite(object);
};

// clone methods

/**
 *
 *
 * @method object
 * @return {Object}
 */
DKTools_Text_Container.prototype.object = function() {
    var object = DKTools_Container_Base.prototype.object.call(this);
    object.elements = this._cloneElements(1);
    object.textSprite = this._textSprite.object();
    return object;
};

// elements methods

/**
 * Возвращает все элементы контейнера
 *
 * @method elements
 * @return Array
 */
DKTools_Text_Container.prototype.elements = function() {
    var elements = [this._textSprite].concat(this._elements);
    if (this.isReversed()) {
        elements.reverse();
    }
    return elements;
};

// uncategorized methods

DKTools_Text_Container.prototype.resizeTextSprite = function(align) {
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
// DK Tools Container
//===========================================================================

/**
 * @class DKTools_Container
 *
 * @constructor
 *
 * @param {Number || Object || null} object - Координата X или Объект типа {}
 * @param {Number || null} y - Координата Y
 */
function DKTools_Container() {
    this.initialize.apply(this, arguments);
}

DKTools_Container.prototype = Object.create(DKTools_Text_Container.prototype);
DKTools_Container.prototype.constructor = DKTools_Container;

// property

Object.defineProperties(DKTools_Container.prototype, {

    /**
     *
     */
    baseSprite: {
        get: function() {
            return this._baseSprite;
        },
        configurable: true
    },

    /**
     *
     */
    baseSpriteClass: {
        get: function() {
            return DKTools_Sprite;
        },
        configurable: true
    }
});

// setup methods

DKTools_Container.prototype._setupEvents = function() {
    DKTools_Text_Container.prototype._setupEvents.call(this);
    this.addEventListener('start', function() {
        this._baseSprite.start();
    }.bind(this));
};

DKTools_Container.prototype.setup = function(target, type, value) {
    type = type.charAt(0).toUpperCase() + type.substr(1);
    var func = 'setup%1'.format(type);
    if (target === 'container') {
        this[func](value);
    } else {
        this[target][func](value);
    }
};

/**
 * Устанавливает все параметры спрайта
 *
 * @method setupAll
 *
 * @param {Object || null} object - Объект типа {}
 *
 * @property {Object || null} baseSprite - Объект типа {}
 *
 * @see other object properties: DKTools_Text_Container.prototype.setupAll
*/
DKTools_Container.prototype.setupAll = function(object) {
    object = object || {};
    DKTools_Text_Container.prototype.setupAll.call(this, object);
    this.setupBaseSprite(object.baseSprite);
};

/**
 * Устанавливает все параметры и размер для Bitmap базового спрайта
 *
 * @method setupBaseSprite
 *
 * @param {Object || null} object - Объект типа {}
 *
 * @property {Number || null} width - Ширина Bitmap базового спрайта
 * @property {Number || null} height - Высота Bitmap базового спрайта
 *
 * @see other object properties: DKTools_Sprite.prototype.setupAll
*/
DKTools_Container.prototype.setupBaseSprite = function(object) {
    object = object || {};
    this._baseSprite.setupAll(object);
    this.setupBaseSpriteSize(object.width, object.height);
};

/**
 * Устанавливает ширину для Bitmap базового спрайта
 *
 * @method setupBaseSpriteWidth
 *
 * @param {Number || null} width - Ширина Bitmap базового спрайта
 */
DKTools_Container.prototype.setupBaseSpriteWidth = function(width) {
    this._baseSprite.setupWidth(width);
};

/**
 * Устанавливает высоту для Bitmap базового спрайта
 *
 * @method setupBaseSpriteHeight
 *
 * @param {Number || null} height - Высота Bitmap базового спрайта
 */
DKTools_Container.prototype.setupBaseSpriteHeight = function(height) {
    this._baseSprite.setupHeight(height);
};

/**
 * Устанавливает размер для Bitmap базового спрайта
 *
 * @method setupBaseSpriteSize
 *
 * @param {Number || null} width - Ширина Bitmap базового спрайта
 * @param {Number || null} height - Высота Bitmap базового спрайта
*/
DKTools_Container.prototype.setupBaseSpriteSize = function(width, height) {
    this._baseSprite.setupSize(width, height);
};

// set methods

/**
 * Изменяет все параметры спрайта
 * Возвращает количество измененных параметров
 *
 * @method setAll
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * @property {Object || null} baseSprite - Объект типа {}
 *
 * @see other object properties: DKTools_Text_Container.prototype.setAll
 * @see baseSprite properties: DKTools_Sprite.prototype.setAll
 *
 * @return Number
*/
DKTools_Container.prototype.setAll = function(object, blockStart) {
    object = object || {};
    var block = true;
    var changed = DKTools_Text_Container.prototype.setAll.call(this, object, block);
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
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * @see object properties: DKTools_Sprite.prototype.setAll
 *
 * @return Number
*/
DKTools_Container.prototype.setBaseSprite = function(object, blockStart) {
    return this._baseSprite.setAll(object, blockStart);
};

/**
 * Изменяет размер для Bitmap базового спрайта
 * Возвращает true, если изменение произошло
 *
 * @method setBaseSpriteSize
 *
 * @param {Number || null} width - Ширина Bitmap спрайта текста
 * @param {Number || null} height - Высота Bitmap спрайта текста
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * @return Boolean
*/
DKTools_Container.prototype.setBaseSpriteSize = function(width, height, blockStart) {
    if (this._baseSprite.resize(width, height)) {
        if (!blockStart) {
            this.start();
        }
        return true;
    }
    return false;
};

// create methods

DKTools_Container.prototype._createAll = function() {
    DKTools_Text_Container.prototype._createAll.call(this);
    this._createBaseSprite();
};

/**
 * Создает базовый спрайт
 *
 * @method _createBaseSprite
 *
 * @private
 *
 * @param {Object || null} object - Объект типа {}
 *
 * @see object properties: DKTools_Sprite.prototype.initialize
 */
DKTools_Container.prototype._createBaseSprite = function(object) {
    this._baseSprite = new (this.baseSpriteClass)(object);
};

// elements methods

/**
 * Возвращает все элементы контейнера
 *
 * @method elements
 * @return Array
 */
DKTools_Container.prototype.elements = function() {
    var elements = [this._textSprite, this._baseSprite];
    if (this.isReversed()) {
        elements.reverse();
    }
    return elements;
};

//DKTools_Container.prototype.checkElements = function() {
//    if (this.isEmpty() || !this.isFixedSize()) {
//        return;
//    }
//    var width = this._fixedWidth;
//    var height = this._fixedHeight;
//    var textSprite = this._textSprite;
//    var baseSprite = this._baseSprite;
//    var minWidth = Math.max(textSprite.minWidth(), baseSprite.minWidth());
//    var minHeight = Math.max(textSprite.minHeight(), baseSprite.minHeight());
//    if (this.isHorizontalPlacement()) {
//        minWidth = textSprite.minWidth() + baseSprite.minWidth();
//        var padding = (width - textSprite.width - baseSprite.width);
//    } else if (this.isVerticalPlacement()) {
//        var padding = (height - textSprite.height - baseSprite.height);
//        minHeight = textSprite.minHeight() + baseSprite.minHeight();
//    }
//    if (minWidth > width || minHeight > height) {
//        throw new Error('Container Error: minSize = (%1, %2), newSize = (%3, %4)'.format(minWidth, minHeight, width, height));
//    }
//    if (padding <= 0) {
//        p(padding);
//        return;
//    }
//    if (this.isHorizontalPlacement()) {
//        this.setXPadding(padding);
//    } else if (this.isVerticalPlacement()) {
//        this.setYPadding(padding);
//    }
//};

// clone methods

/**
 *
 *
 * @method _cloneElements
 * @private
 *
 * @return {Array}
 */
DKTools_Container.prototype._cloneElements = function() {
    return [];
};

/**
 *
 *
 * @method object
 * @return {Object}
 */
DKTools_Container.prototype.object = function() {
    var object = DKTools_Text_Container.prototype.object.call(this);
    object.baseSprite = this._baseSprite.object();
    return object;
};





//===========================================================================
// DK Tools Progress Bar Base
//===========================================================================

/**
 * @class DKTools_Progress_Bar_Base
 *
 * @constructor
 *
 * @param {Number || null} object - Координата X
 * @param {Number || null} y - Координата Y
 * @param {Number || null} width - Ширина Bitmap
 * @param {Number || null} height - Высота Bitmap
*/
function DKTools_Progress_Bar_Base() {
	this.initialize.apply(this, arguments);
}

DKTools_Progress_Bar_Base.prototype = Object.create(DKTools_Sprite.prototype);
DKTools_Progress_Bar_Base.prototype.constructor = DKTools_Progress_Bar_Base;

// standard methods

/**
 * Возвращает стандартное значение активности спрайта
 *
 * @method standardActive
 * @return Boolean
 */
DKTools_Progress_Bar_Base.prototype.standardActive = function() {
    return false;
};

/**
 * Возвращает стандартное максимальное значение
 *
 * @method standardMax
 * @return Number
*/
DKTools_Progress_Bar_Base.prototype.standardMax = function() {
	return 100;
};

/**
 * Возвращает стандартное значение
 *
 * @method standardValue
 * @return Number
*/
DKTools_Progress_Bar_Base.prototype.standardValue = function() {
	return 0;
};

/**
 * Возвращает стандартный цвет
 *
 * @method standardColor
 * @return String
*/
DKTools_Progress_Bar_Base.prototype.standardProgressColor = function() {
	return '#33ccff';
};

/**
 * Возвращает стандартное отображение процентов
 *
 * @method standardShowPercent
 * @return Boolean
*/
DKTools_Progress_Bar_Base.prototype.standardShowPercent = function() {
	return true;
};

/**
 * Возвращает стандартный цвет фона
 *
 * @method standardBackgroundColor
 * @return String
*/
DKTools_Progress_Bar_Base.prototype.standardBackgroundColor = function() {
	return '#000000';
};

// setup methods

/**
 * Устанавливает все параметры спрайта
 *
 * @method setupAll
 *
 * @param {Object || null} object - Объект типа {}
 *
 * @property {Number || null} max - Максимальное значение
 * @property {Number || null} value - Текущее значение
 * @property {String || null} progressColor - Цвет прогресса
 * @property {Boolean || null} showPercent - Отображение в процентах
 *
 * @see other object properties: DKTools_Sprite.prototype.setupAll
*/
DKTools_Progress_Bar_Base.prototype.setupAll = function(object) {
	object = object || {};
	DKTools_Sprite.prototype.setupAll.call(this, object);
	this.setupMax(object.max);
	this.setupValue(object.value);
	this.setupProgressColor(object.progressColor);
	this.setupShowPercent(object.showPercent);
};

/**
 * Устанавливает максимальное значение
 *
 * @method setupMax
 * @param {Number || null} max - Максимальное значение
*/
DKTools_Progress_Bar_Base.prototype.setupMax = function(max) {
	this._max = max || this.standardMax();
};

/**
 * Устанавливает текущее значение
 *
 * @method setupValue
 * @param {Number || null} value - Текущее значение
*/
DKTools_Progress_Bar_Base.prototype.setupValue = function(value) {
	var max = this._max;
	var newValue = Math.max(0, Math.min(value, max));
	this._value = Number.isNaN(newValue) ? this.standardValue() : newValue;
};

/**
 * Устанавливает цвет
 *
 * @method setupProgressColor
 * @param {String || null} color - Цвет
*/
DKTools_Progress_Bar_Base.prototype.setupProgressColor = function(color) {
	this._progressColor = color || this.standardProgressColor();
};

/**
 * Устанавливает отображение процентов
 *
 * @method setupShowPercent
 * @param {Boolean || null} showPercent - Отображение процентов
*/
DKTools_Progress_Bar_Base.prototype.setupShowPercent = function(showPercent) {
	this._showPercent = (showPercent == null ? this.standardShowPercent() : showPercent);
};

// set methods

/**
 * Изменяет все параметры спрайта
 * Возвращает количество измененных параметров
 *
 * @method setAll
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * @property {Number || null} max - Максимальное значение
 * @property {Number || null} value - Текущее значение
 * @property {String || null} progressColor - Цвет прогресса
 * @property {Boolean || null} showPercent - Отображение в процентах
 *
 * @see other object properties: DKTools_Sprite.prototype.setAll
 *
 * @return Number
*/
DKTools_Progress_Bar_Base.prototype.setAll = function(object, blockStart) {
	object = object || {};
	var block = true;
	var changed = DKTools_Sprite.prototype.setAll.call(this, object, block);
    this._activateSetAllMode();
	if (this.setMax(object.max, block)) {
        changed++;
    }
	if (this.setValue(object.value, block)) {
        changed++;
    }
	if (this.setProgressColor(object.progressColor, block)) {
        changed++;
    }
    if (this.setShowPercent(object.showPercent, block)) {
        changed++;
    }
	if (changed && !blockStart) {
        this.start();
    }
    this._deactivateSetAllMode();
	return changed;
};

/**
 * Изменяет максимальное значение
 * Возвращает true, если изменение произошло
 *
 * @method setMax
 *
 * @param {Number || null} max - Максимальное значение
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * @return Boolean
*/
DKTools_Progress_Bar_Base.prototype.setMax = function(max, blockStart) {
	if (this._max === max) {
        return false;
    }
	var lastMax = this._max;
	this.setupMax(max);
	if (lastMax === this._max) {
        return false;
    }
	if (!blockStart) {
        this.start();
    }
	return true;
};

/**
 * Изменяет текущее значение
 * Возвращает true, если изменение произошло
 *
 * @method setValue
 *
 * @param {Number || null} value - Текущее значение
 * @param {Boolean || null} blockUpdate - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
*/
DKTools_Progress_Bar_Base.prototype.setValue = function(value, blockUpdate) {
	if (this._value === value) {
        return false;
    }
	var lastValue = this._value;
	this.setupValue(value);
	if (lastValue === this._value) {
        return false;
    }
	if (!blockUpdate) {
        this.updateBitmap();
    }
    this.updateValueEvents();
	return true;
};

/**
 * Изменяет цвет прогресса
 * Возвращает true, если изменение произошло
 *
 * @method setProgressColor
 *
 * @param {String || null} color - Цвет прогресса
 * @param {Boolean || null} blockUpdate - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
*/
DKTools_Progress_Bar_Base.prototype.setProgressColor = function(color, blockUpdate) {
	if (this._progressColor === color) {
        return false;
    }
	var lastColor = this._progressColor;
	this.setupProgressColor(color);
	if (lastColor === this._progressColor) {
        return false;
    }
	if (!blockUpdate) {
        this.updateBitmap();
    }
	return true;
};

/**
 * Изменяет отображение процентов
 * Возвращает true, если изменение произошло
 *
 * @method setShowPercent
 *
 * @param {String || null} show - Отображение процентов
 * @param {Boolean || null} blockUpdate - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
*/
DKTools_Progress_Bar_Base.prototype.setShowPercent = function(show, blockUpdate) {
	if (this._showPercent === show) {
        return false;
    }
	var lastShow = this._showPercent;
	this.setupShowPercent(show);
	if (lastShow === this._showPercent) {
        return false;
    }
	if (!blockUpdate) {
        this.updateBitmap();
    }
	return true;
};

/**
 * Устанавливает функцию обработки обновления текста
 *
 * @method setUpdateTextHandler
 * @param {Function | null} method - Функция обработки обновления текста
 */
DKTools_Progress_Bar_Base.prototype.setUpdateTextHandler = function(method) {
    this._updateTextHandler = method;
};

// other methods

/**
 *
 * @return {Object}
 */
DKTools_Progress_Bar_Base.prototype.object = function() {
    var object = DKTools_Sprite.prototype.object.call(this);
    object.max = this._max;
    object.value = this._value;
    object.progressColor = this._progressColor;
    object.showPercent = this._showPercent;
    return object;
};

/**
 * Возвращает минимальную ширину Bitmap
 * Returns the minimum width of the Bitmap
 *
 * @method minWidth
 * @return Number
*/
DKTools_Progress_Bar_Base.prototype.minWidth = function() {
	return 50;
};

/**
 * Возвращает минимальную высоту Bitmap
 * Returns the minimum height of the Bitmap
 *
 * @method minHeight
 * @return Number
*/
DKTools_Progress_Bar_Base.prototype.minHeight = function() {
	return 36;
};

/**
 *
 *
 * @method value
 * @return {Number}
 */
DKTools_Progress_Bar_Base.prototype.value = function() {
    return this._value;
};

/**
 *
 *
 * @method max
 * @return {Number}
 */
DKTools_Progress_Bar_Base.prototype.max = function() {
    return this._max;
};

// is methods

/**
 * Возвращает true, если отображение в процентах
 *
 * @method isShowPercent
 * @return Boolean
 */
DKTools_Progress_Bar_Base.prototype.isShowPercent = function() {
    return this._showPercent;
};

/**
 * Возвращает true, если текущее значение равно 0
 *
 * @method isEmpty
 * @return Boolean
 */
DKTools_Progress_Bar_Base.prototype.isEmpty = function() {
    return this._value === 0;
};

/**
 * Возвращает true, если текущее значение равно максимальному значению
 *
 * @method isFull
 * @return Boolean
 */
DKTools_Progress_Bar_Base.prototype.isFull = function() {
    return this._value === this._max;
};

// events methods

DKTools_Progress_Bar_Base.prototype.updateValueEvents = function() {
    this.updateEventContainer('value');
};

DKTools_Progress_Bar_Base.prototype.updateEmptyEvents = function() {
    if (!this.isEmpty()) {
        return;
    }
    this.updateEventContainer('empty');
};

DKTools_Progress_Bar_Base.prototype.updateFullEvents = function() {
    if (!this.isFull()) {
        return;
    }
    this.updateEventContainer('full');
};

/**
 * @method _updateAutoFill
 * @private
 *
 * @param {DKToolsEvent} event - Событие
 */
DKTools_Progress_Bar_Base.prototype._updateAutoFill = function(event) {
    var duration = event.duration;
    var value = (this._value * (duration - 1) + this._max) / duration;
    this.setValue(value);

};

/**
 * Событие автозаполнения прогресса
 *
 * @method autoFill
 *
 * @param {Number} duration - Длительность события
 *
 * @return {DKToolsEvent} Событие
 */
DKTools_Progress_Bar_Base.prototype.autoFill = function(duration) {
    return this.addEvent('wait', this._updateAutoFill.bind(this), duration);
};

// update methods

/**
 * Обновляет спрайт
 *
 * @method update
 */
DKTools_Progress_Bar_Base.prototype.update = function() {
    DKTools_Sprite.prototype.update.call(this);
    this.updateEmptyEvents();
    this.updateFullEvents();
};

DKTools_Progress_Bar_Base.prototype.updateBackground = function() {
    DKTools_Sprite.prototype.updateBackground.call(this);
    this.updateProgressColor();
};

/**
 * Обновляет цвет прогресса
 *
 * @method updateProgressColor
*/
DKTools_Progress_Bar_Base.prototype.updateProgressColor = function() {
	if (this._value === 0) {
        return;
    }
	var width = this._value * this._bitmapWidth / this._max;
	this.fillRect(this._progressColor, 0, 0, width);
};

/**
 * Обновляет текст
 *
 * @method updateText
*/
DKTools_Progress_Bar_Base.prototype.updateText = function() {
    var text;
    if (this.hasUpdateTextHandler()) {
        text = this.callUpdateTextHandler();
    } else {
        if (this.isShowPercent()) {
            text = '%1%'.format(Math.ceil(this._value / this._max * 100));
        } else {
            text = '%1/%2'.format(this._value, this._max);
        }
    }
    this.drawText(text);
};

//

/**
 * Добавить к текущему значению
 *
 * @method add
 * @param {Number} value - Добавляемое значение
*/
DKTools_Progress_Bar_Base.prototype.add = function(value) {
    if (value == null) {
        return;
    }
    this.setValue(this._value + value);
};

/**
 * Отнять от текущего значения
 *
 * @method rem
 * @param {Number} value - Отнимаемое значение
 */
DKTools_Progress_Bar_Base.prototype.rem = function(value) {
    this.add(-value);
};

/**
 * Уменьшить текущее значение
 * Возвращает true, если изменение произошло
 *
 * @method prev
 * @return Boolean
*/
DKTools_Progress_Bar_Base.prototype.prev = function() {
	if (this._value === 0) {
        return false;
    }
    return this.setValue(this._value - 1);
};

/**
 * Увеличить текущее значение
 * Возвращает true, если изменение произошло
 *
 * @method next
 * @return Boolean
*/
DKTools_Progress_Bar_Base.prototype.next = function() {
	if (this._value >= this._max) {
        return false;
    }
    return this.setValue(this._value + 1);
};

/**
 * Установить текущее значение в 0
 * Возвращает true, если изменение произошло
 *
 * @method empty
 * @return Boolean
*/
DKTools_Progress_Bar_Base.prototype.empty = function() {
	return this.setValue(0);
};

/**
 * Установить текущее значение в максимум
 * Возвращает true, если изменение произошло
 *
 * @method full
 * @return Boolean
*/
DKTools_Progress_Bar_Base.prototype.full = function() {
	return this.setValue(this._max);
};

/**
 *
 *
 * @method hasUpdateTextHandler
 * @return {Boolean}
 */
DKTools_Progress_Bar_Base.prototype.hasUpdateTextHandler = function() {
    return !!this._updateTextHandler;
};

/**
 * Вызов функции обработки обновления текста
 *
 * @method callUpdateTextHandler
 */
DKTools_Progress_Bar_Base.prototype.callUpdateTextHandler = function() {
    return this._updateTextHandler(this);
};





//===========================================================================
// DK Tools Progress Bar
//===========================================================================

/**
 * @class DKTools_Progress_Bar
 *
 * @constructor
 *
 * @param {Number || null} object - Координата X
 * @param {Number || null} y - Координата Y
*/
function DKTools_Progress_Bar() {
    this.initialize.apply(this, arguments);
}

DKTools_Progress_Bar.prototype = Object.create(DKTools_Container.prototype);
DKTools_Progress_Bar.prototype.constructor = DKTools_Progress_Bar;

// property

Object.defineProperty(DKTools_Progress_Bar.prototype, 'baseSpriteClass', {
    get: function() {
        return DKTools_Progress_Bar_Base;
    },
    configurable: true
});

// setup methods

/**
 * Устанавливает максимальное значение
 *
 * @method setupMax
 * @param {Number || null} max - Максимальное значение
*/
DKTools_Progress_Bar.prototype.setupMax = function(max) {
    this._baseSprite.setupMax(max);
};

/**
 * Устанавливает текущее значение
 *
 * @method setupValue
 * @param {Number || null} value - Текущее значение
*/
DKTools_Progress_Bar.prototype.setupValue = function(value) {
    this._baseSprite.setupValue(value);
};

/**
 * Устанавливает цвет
 *
 * @method setupColor
 * @param {String || null} color - Цвет
*/
DKTools_Progress_Bar.prototype.setupProgressColor = function(color) {
    this._baseSprite.setupProgressColor(color);
};

/**
 * Устанавливает отображение процентов
 *
 * @method setupShowPercent
 * @param {Boolean || null} showPercent - Отображение процентов
*/
DKTools_Progress_Bar.prototype.setupShowPercent = function(showPercent) {
    this._baseSprite.setupShowPercent(showPercent);
};

// set methods

/**
 * Изменяет максимальное значение
 * Возвращает true, если изменение произошло
 *
 * @method setMax
 *
 * @param {Number || null} max - Максимальное значение
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * @return Boolean
*/
DKTools_Progress_Bar.prototype.setMax = function(max, blockStart) {
    return this._baseSprite.setMax(max, blockStart);
};

/**
 * Изменяет текущее значение
 * Возвращает true, если изменение произошло
 *
 * @method setValue
 *
 * @param {Number || null} value - Текущее значение
 * @param {Boolean || null} blockStart - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
 */
DKTools_Progress_Bar.prototype.setValue = function(value, blockStart) {
    return this._baseSprite.setValue(value, blockStart);
};

/**
 * Изменяет цвет прогресса
 * Возвращает true, если изменение произошло
 *
 * @method setProgressColor
 *
 * @param {String || null} color - Цвет прогресса
 * @param {Boolean || null} blockStart - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
 */
DKTools_Progress_Bar.prototype.setProgressColor = function(color, blockStart) {
    return this._baseSprite.setProgressColor(color, blockStart);
};

/**
 * Изменяет отображение процентов
 * Возвращает true, если изменение произошло
 *
 * @method setShowPercent
 *
 * @param {String || null} show - Отображение процентов
 * @param {Boolean || null} blockStart - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
*/
DKTools_Progress_Bar.prototype.setShowPercent = function(show, blockStart) {
    return this._baseSprite.setShowPercent(show, blockStart);
};

/**
 * Устанавливает функцию обработки изменения текущего значения
 *
 * @method setValueHandler
 * @param {Function} method - Функция обработки изменения текущего значения
*/
DKTools_Progress_Bar.prototype.setValueHandler = function(method) {
    this._baseSprite.setValueHandler(method);
};

/**
 * Устанавливает функцию обработки максимального значения
 *
 * @method setFullHandler
 * @param {Function} method - Функция обработки максимального значения
*/
DKTools_Progress_Bar.prototype.setFullHandler = function(method) {
    this._baseSprite.setFullHandler(method);
};

/**
 * Устанавливает функцию обработки нулевого значения
 *
 * @method setEmptyHandler
 * @param {Function} method - Функция обработки нулевого значения
*/
DKTools_Progress_Bar.prototype.setEmptyHandler = function(method) {
    this._baseSprite.setEmptyHandler(method);
};

/**
 * Устанавливает функцию обработки обновления текста
 *
 * @method setUpdateTextHandler
 * @param {Function || null} method - Функция обработки обновления текста
 */
DKTools_Progress_Bar.prototype.setUpdateTextHandler = function(method) {
    this._baseSprite.setUpdateTextHandler(method);
};

// is methods

/**
 * Возвращает true, если отображение в процентах
 *
 * @method isShowPercent
 * @return Boolean
*/
DKTools_Progress_Bar.prototype.isShowPercent = function() {
    return this._baseSprite.isShowPercent();
};

/**
 * Возвращает true, если текущее значение равно максимальному значению
 *
 * @method isFull
 * @return Boolean
 */
DKTools_Progress_Bar.prototype.isFull = function() {
    return this._baseSprite.isFull();
};

// other methods

/**
 *
 * @return {Number}
 */
DKTools_Progress_Bar.prototype.value = function() {
    return this._baseSprite.value();
};

/**
 *
 * @return {Number}
 */
DKTools_Progress_Bar.prototype.max = function() {
    return this._baseSprite.max();
};

/**
 *
 * @param duration
 *
 * @return {DKToolsEvent}
 */
DKTools_Progress_Bar.prototype.autoFill = function(duration) {
    return this._baseSprite.autoFill(duration);
};

/**
 * Добавить к текущему значению
 *
 * @method add
 * @param {Number} value - Добавляемое значение
 */
DKTools_Progress_Bar.prototype.add = function(value) {
    this._baseSprite.add(value);
};

/**
 * Отнять от текущего значения
 *
 * @method rem
 * @param {Number} value - Отнимаемое значение
 */
DKTools_Progress_Bar.prototype.rem = function(value) {
    this._baseSprite.rem(value);
};

/**
 * Уменьшить текущее значение
 * Возвращает true, если изменение произошло
 *
 * @method prev
 * @return Boolean
*/
DKTools_Progress_Bar.prototype.prev = function() {
    return this._baseSprite.prev();
};

/**
 * Увеличить текущее значение
 * Возвращает true, если изменение произошло
 *
 * @method next
 * @return Boolean
*/
DKTools_Progress_Bar.prototype.next = function() {
    return this._baseSprite.next();
};

/**
 * Установить текущее значение в 0
 * Возвращает true, если изменение произошло
 *
 * @method empty
 * @return Boolean
*/
DKTools_Progress_Bar.prototype.empty = function() {
    return this._baseSprite.empty();
};

/**
 * Установить текущее значение в максимум
 * Возвращает true, если изменение произошло
 *
 * @method full
 * @return Boolean
*/
DKTools_Progress_Bar.prototype.full = function() {
    return this._baseSprite.full();
};





//===========================================================================
// DK Tools Input Base
//===========================================================================

/**
 * @class DKTools_Input_Base
 *
 * @constructor
 *
 * @param {Number} object - Координата X
 * @param {Number} y - Координата Y
 * @param {Number} width - Ширина Bitmap
 * @param {Number} height - Высота Bitmap
 */
function DKTools_Input_Base() {
	this.initialize.apply(this, arguments);
}

DKTools_Input_Base.prototype = Object.create(DKTools_Sprite.prototype);
DKTools_Input_Base.prototype.constructor = DKTools_Input_Base;

DKTools_Input_Base._alphabet = {};

// russian alphabet
DKTools_Input_Base._alphabet.ru = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
// english alphabet
DKTools_Input_Base._alphabet.en = 'abcdefghijklmnopqrstuvwxyz';

// string of numbers
DKTools_Input_Base._numbers = '1234567890';

// properties

/**
 * Позиция каретки ввода
 *
 * @property position
 * @type Number
 */
Object.defineProperty(DKTools_Input_Base.prototype, 'length', {
    get: function() {
        return this._text.length;
    },
    configurable: true
});

/**
 * Позиция каретки ввода
 *
 * @property position
 * @type Number
 */
Object.defineProperty(DKTools_Input_Base.prototype, 'caretPosition', {
    get: function() {
        return this._caret.position;
    },
    set: function(value) {
        this.setupCaretPosition(value);
    },
    configurable: true
});

// clear methods

/**
 * Очищает все данные спрайта
 *
 * @method clearAll
 */
DKTools_Input_Base.prototype._clearAll = function() {
    DKTools_Sprite.prototype._clearAll.call(this);
    this._clearCaret();
    this._clearCaretCounter();
};

/**
 *
 *
 * @method _clearCaret
 * @private
 */
DKTools_Input_Base.prototype._clearCaret = function() {
    this._caret = {};
};

/**
 * Очищает счетчик обновления каретки ввода
 *
 * @method _clearCaretCounter
 * @private
 */
DKTools_Input_Base.prototype._clearCaretCounter = function() {
    this._caret.counter = 0;
};

// standard methods

/**
 * Возвращает стандартное выравнивание
 *
 * @method standardAlign
 * @return String
*/
DKTools_Input_Base.prototype.standardAlign = function() {
	return 'left';
};

/**
 * Возвращает минимальную длину ввода
 *
 * @method minLength
 * @return Number
 */
DKTools_Input_Base.prototype.standardMinLength = function() {
    return 1;
};

/**
 * Возвращает максимальную длину ввода
 *
 * @method maxLength
 * @return Number
 */
DKTools_Input_Base.prototype.standardMaxLength = function() {
    return 60;
};

/**
 * Возвращает скорость обновления каретки ввода
 *
 * @method standardCaretRate
 * @return Number
*/
DKTools_Input_Base.prototype.standardCaretRate = function() {
    return 25;
};

/**
 * Возвращает стандартный текст каретки ввода
 *
 * @method standardCaretText
 * @return String
*/
DKTools_Input_Base.prototype.standardCaretText = function() {
    return '|';
};

/**
 * Возвращает стандартную видимость каретки ввода
 *
 * @method standardCaretVisible
 * @return Boolean
*/
DKTools_Input_Base.prototype.standardCaretVisible = function() {
    return this.standardActive();
};

/**
 * Возвращает стандартную позицию каретки ввода
 *
 * @method standardCaretPosition
 * @return Number
*/
DKTools_Input_Base.prototype.standardCaretPosition = function() {
    return this.length;
};

// setup methods

/**
 * Устанавливает все параметры спрайта
 *
 * @method setupAll
 *
 * @param {Object || null} object - Объект типа {}
 *
 * @property {Number || null} maxLength - Длина ввода
 * @property {Object || null} caret - Объект типа {}
 *
 * @see other object properties: DKTools_Sprite.prototype.setupAll
 * @see caret properties: DKTools_Input_Base.prototype.setupCaret
*/
DKTools_Input_Base.prototype.setupAll = function(object) {
	object = object || {};
	DKTools_Sprite.prototype.setupAll.call(this, object);
	this.setupMaxLength(object.maxLength);
	this.setupCaret(object.caret);
};

/**
 * Устанавливает длину ввода
 *
 * @method setupInputLength
 * @param {Number || null} length - Длина ввода
*/
DKTools_Input_Base.prototype.setupMaxLength = function(length) {
    var minLength = this.standardMinLength();
    var maxLength = this.standardMaxLength();
	this._maxLength = (length ? length.clamp(minLength, maxLength) : minLength);
};

/**
 * Устанавливает все параметры каретки ввода
 *
 * @method setupCaret
 *
 * @param {Object || null} object - Объект типа {}
 *
 * object properties
 * @property {Number || null} rate - Скорость обновления каретки ввода
 * @property {String || null} text - Текст каретки ввода
 * @property {Boolean || null} visible - Видимость каретки ввода
 * @property {Number || null} position - Позиция каретки ввода
*/
DKTools_Input_Base.prototype.setupCaret = function(object) {
    object = object || {};
    this._clearCaret();
    this._clearCaretCounter();
    this.setupCaretRate(object.rate);
    this.setupCaretText(object.text);
    this.setupCaretVisible(object.visible);
    this.setupCaretPosition(object.position);
};

/**
 * Устанавливает скорость обновления каретки ввода
 *
 * @method setupCaretRate
 * @param {Number || null} rate - Скорость обновления каретки ввода
*/
DKTools_Input_Base.prototype.setupCaretRate = function(rate) {
    this._caret.rate = (rate == null ? this.standardCaretRate() : rate);
};

/**
 * Устанавливает текст каретки ввода
 *
 * @method setupCaretText
 * @param {String || null} text - Текст каретки ввода
*/
DKTools_Input_Base.prototype.setupCaretText = function(text) {
    this._caret.text = (text == null ? this.standardCaretText() : String(text));
};

/**
 * Устанавливает видимость каретки ввода
 *
 * @method setupCaretVisible
 * @param {Boolean || null} visible - Видимость каретки ввода
*/
DKTools_Input_Base.prototype.setupCaretVisible = function(visible) {
    this._caret.visible = (visible == null ? this.standardCaretVisible() : visible);
};

/**
 * Устанавливает позицию каретки ввода
 *
 * @method setupCaretPosition
 * @param {Number || null} position - Позиция каретки ввода
*/
DKTools_Input_Base.prototype.setupCaretPosition = function(position) {
    position = (position == null ? this.standardCaretPosition() : position);
    this._caret.position = position.clamp(0, this.length);
};

// set methods

/**
 * Изменяет все параметры спрайта
 * Возвращает количество измененных параметров
 *
 * @method setAll
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * @property {Number || null} maxLength - Длина ввода
 * @property {Object || null} caret - Объект типа {}
 *
 * @see other object properties: DKTools_Sprite.prototype.setAll
 * @see caret properties: DKTools_Input_Base.prototype.setCaret
 *
 * @return Number
*/
DKTools_Input_Base.prototype.setAll = function(object, blockStart) {
	object = object || {};
	var block = true;
	var changed = DKTools_Sprite.prototype.setAll.call(this, object, block);
    this._activateSetAllMode();
    changed += this.setCaret(object.caret, block);
	if (changed && !blockStart) {
        this.start();
    }
	if (this.setMaxLength(object.maxLength)) {
        changed++;
    }
    this._deactivateSetAllMode();
	return changed;
};

/**
 * Изменяет введенный текст
 * Возвращает true, если изменение произошло
 *
 * @method setInputText
 *
 * @param {Number || null} text - Введенный текст
 * @param {Boolean || null} blockUpdate - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
*/
DKTools_Input_Base.prototype.setText = function(text, blockUpdate) {
    if (DKTools_Sprite.prototype.setText.call(this, text, true)) {
        this.setupCaretPosition();
        if (!blockUpdate) {
            this.updateBitmap();
        }
        return true;
    }
    return false;
};

/**
 * Изменяет длину ввода
 * Возвращает true, если изменение произошло
 *
 * @method setInputLength
 *
 * @param {Number || null} length - Длина ввода
 *
 * @return Boolean
*/
DKTools_Input_Base.prototype.setMaxLength = function(length) {
    if (this._maxLength === length) {
        return false;
    }
    var lastLength = this._maxLength;
    this.setupMaxLength(length);
    return lastLength !== this._maxLength;
};

/**
 * Изменяет все параметры каретки ввода
 * Возвращает количество измененных параметров
 *
 * @method setCaret
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * @property {Number || null} rate - Скорость обновления каретки ввода
 * @property {String || null} text - Текст каретки ввода
 * @property {Boolean || null} visible - Видимость каретки ввода
 * @property {Number || null} position - Позиция каретки ввода
 *
 * @return Number
*/
DKTools_Input_Base.prototype.setCaret = function(object, blockStart) {
    object = object || {};
    var block = true;
    var changed = 0;
    this._clearCaretCounter();
    if (this.setCaretRate(object.rate, block)) {
        changed++;
    }
    if (this.setCaretText(object.text, block)) {
        changed++;
    }
    if (this.setCaretVisible(object.visible, block)) {
        changed++;
    }
    if (this.setCaretPosition(object.position, block)) {
        changed++;
    }
    if (changed && !blockStart) {
        this.start();
    }
    return changed;
};

/**
 * Изменяет скорость обновления каретки ввода
 * Возвращает true, если изменение произошло
 *
 * @method setCaretRate
 *
 * @param {Number || null} rate - Скорость обновления каретки ввода
 * @param {Boolean || null} blockUpdate - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
*/
DKTools_Input_Base.prototype.setCaretRate = function(rate, blockUpdate) {
    if (this._caret.rate === rate) {
        return false;
    }
    var lastRate = this._caret.rate;
    this.setupCaretRate(rate);
    if (lastRate === this._caret.rate) {
        return false;
    }
    if (!blockUpdate) {
        this.updateBitmap();
    }
    return true;
};

/**
 * Изменяет текст каретки ввода
 * Возвращает true, если изменение произошло
 *
 * @method setCaretText
 *
 * @param {String || null} text - Текст каретки ввода
 * @param {Boolean || null} blockUpdate - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
*/
DKTools_Input_Base.prototype.setCaretText = function(text, blockUpdate) {
    if (this._caret.text === text) {
        return false;
    }
    var lastText = this._caret.text;
    this.setupCaretText(text);
    if (lastText === this._caret.text) {
        return false;
    }
    if (!blockUpdate) {
        this.updateBitmap();
    }
    return true;
};

/**
 * Изменяет видимость каретки ввода
 * Возвращает true, если изменение произошло
 *
 * @method setCaretVisible
 *
 * @param {Boolean || null} visible - Видимость каретки ввода
 * @param {Boolean || null} blockUpdate - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
*/
DKTools_Input_Base.prototype.setCaretVisible = function(visible, blockUpdate) {
    if (this._caret.visible === visible) {
        return false;
    }
    var lastVisible = this._caret.visible;
    this.setupCaretVisible(visible);
    if (lastVisible === this._caret.visible) {
        return false;
    }
    if (!blockUpdate) {
        this.updateBitmap();
    }
    return true;
};

/**
 * Изменяет позицию каретки ввода
 * Возвращает true, если изменение произошло
 *
 * @method setCaretPosition
 *
 * @param {Number || null} position - Позиция каретки ввода
 * @param {Boolean || null} blockUpdate - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
*/
DKTools_Input_Base.prototype.setCaretPosition = function(position, blockUpdate) {
    if (this._caret.position === position) {
        return false;
    }
    var lastPosition = this._caret.position;
    this.setupCaretPosition(position);
    if (lastPosition === this._caret.position) {
        return false;
    }
    if (!blockUpdate) {
        this.updateBitmap();
    }
	return true;
};

// other methods

/**
 *
 *
 * @method _alphabet
 * @private
 *
 * @return {String}
 */
DKTools_Input_Base.prototype._alphabet = function() {
    var alphabet = '';
    for(var locale in DKTools_Input_Base._alphabet) {
        alphabet += DKTools_Input_Base._alphabet[locale];
    }
    return alphabet;
};

/**
 *
 *
 * @method object
 * @return {Object}
 */
DKTools_Input_Base.prototype.object = function() {
    var object = DKTools_Sprite.prototype.object.call(this);
    object.maxLength = this._maxLength;
    object.caret = this._caret;
    return object;
};

/**
 * Возвращает минимальную ширину спрайта
 * Returns the minimum width of the sprite
 *
 * @method minWidth
 * @return Number
*/
DKTools_Input_Base.prototype.minWidth = function() {
	return 50;
};

/**
 * Возвращает минимальную высоту спрайта
 * Returns the minimum height of the sprite
 *
 * @method minHeight
 * @return Number
*/
DKTools_Input_Base.prototype.minHeight = function() {
	return 36;
};

/**
 * Активирует спрайт
 *
 * @method activate
*/
DKTools_Input_Base.prototype.activate = function() {
    DKTools_Sprite.prototype.activate.call(this);
	DKToolsInputManager.clear();
	this.showCaret();
};

/**
 * Деактивирует спрайт
 *
 * @method deactivate
*/
DKTools_Input_Base.prototype.deactivate = function() {
	DKTools_Sprite.prototype.deactivate.call(this);
	this.hideCaret();
};

/**
 * Возвращает видимость каретки ввода
 *
 * @method caretIsVisible
 * @return Boolean
*/
DKTools_Input_Base.prototype.caretIsVisible = function() {
    return this._caret.visible;
};

/**
 * Отображает каретку ввода
 *
 * @method showCaret
*/
DKTools_Input_Base.prototype.showCaret = function() {
    this.setupCaretVisible(true);
    this.updateBitmap();
};

/**
 * Скрывает каретку ввода
 *
 * @method hideCaret
*/
DKTools_Input_Base.prototype.hideCaret = function() {
    this.setupCaretVisible(false);
    this.updateBitmap();
};

//

/**
 * Очищает менеджер ввода текста и введенный текст
 *
 * @method clearInput
 */
DKTools_Input_Base.prototype.clearInput = function(blockStart) {
    DKToolsInputManager.clear();
    this.clearText(blockStart);
};

// symbols methods

DKTools_Input_Base.prototype.onSymbolChange = function(symbol, value) {
    DKTools_Sprite.prototype.onSymbolChange.call(this, symbol, value);
    if (symbol === 'password') {
        this.redrawAll();
    }
};

/**
 * Добавляет текст
 *
 * @method add
 *
 * @param {String} text - Текст для добавления
 * @param {Number || null} start - Стартовая позиция для добавления
 * @param {Boolean || null} blockUpdate - Блокировка вызова функции updateBitmap
*/
DKTools_Input_Base.prototype.add = function(text, start, blockUpdate) {
    if (text == null || text.length === 0 || start < 0) {
        return false;
    }
    if (start == null || start > this.length) {
        start = this.length;
    }
    var _text = this._text;
    var text1 = _text.substring(0, start);
    var text2 = _text.substring(start - 1 + text.length);
    return this.setText(text1 + text + text2, blockUpdate);
};

/**
 * Удаляет текст
 *
 * @method rem
 *
 * @param {Number} start - Стартовая позиция для удаления
 * @param {Number} count - Количество символов для удаления
 * @param {Boolean | null} blockUpdate - Блокировка вызова функции updateBitmap
 */
DKTools_Input_Base.prototype.rem = function(start, count, blockUpdate) {
    if (start >= this.length || count == null || count === 0) {
        return false;
    }
    if (count >= this.length) {
        //this.clearText();
        this.setupText('');
        if (!blockUpdate) {
            this.updateBitmap();
        }
        return false;
    }
    if (start == null) {
        start = this.length - count;
    }
    var text = this._text;
    var text1 = text.substring(0, start);
    var text2 = text.substring(start + count);
    return this.setText(text1 + text2, blockUpdate);
};

/**
 *
 *
 * @method _drawableText
 * @private
 *
 * @return {String}
 */
DKTools_Input_Base.prototype._drawableText = function() {
    var text = this._text;
    var textLength = text.length;
    var caret = (this.caretIsVisible() ? this._caret.text : ' ');
    var position = this.caretPosition;
    var drawableText;
    if (this.isEnabled('password')) {
        text = '';
        for(var i = 0; i < textLength; i++) {
            text += '*';
        }
    }
    if (position === 0) {
        drawableText = caret + text;
    } else if (position <= textLength) {
        var text1 = text.substring(0, position);
        var text2 = text.substring(position);
        drawableText = text1 + caret + text2;
    } else {
        drawableText = text + caret;
    }
    return drawableText;
};

/**
 * Обновляет отображаемый текст
 *
 * @method updateText
*/
DKTools_Input_Base.prototype.updateText = function() {
	var text = this._drawableText();
	this.drawText(text);
};

/**
 *
 *
 * @method _isAlphabet
 * @private
 *
 * @param symbol
 *
 * @return {Boolean}
 */
DKTools_Input_Base.prototype._isAlphabet = function(symbol) {
    var alphabet = this._alphabet();
    return alphabet.contains(symbol);
};

/**
 *
 *
 * @method _isNumber
 * @private
 *
 * @param symbol
 * @return {Boolean}
 */
DKTools_Input_Base.prototype._isNumber = function(symbol) {
    var numbers = DKTools_Input_Base._numbers;
    return numbers.contains(symbol);
};

/**
 *
 *
 * @method _isSymbol
 * @private
 *
 * @param symbol
 *
 * @return {Boolean}
 */
DKTools_Input_Base.prototype._isSymbol = function(symbol) {
    return !this._isAlphabet(symbol) && !this._isNumber(symbol);
};

/**
 *
 *
 * @method
 * @private
 *
 * @param symbol
 * @returns {Boolean}
 */
DKTools_Input_Base.prototype._isSpace = function(symbol) {
    return symbol === ' ';
};

/**
 *
 *
 * @method _checkSymbol
 * @private
 *
 * @param {String} symbol - Символ
 *
 * @return {Boolean}
 */
DKTools_Input_Base.prototype._checkSymbol = function(symbol) {
    return (this.isEnabled('alphabet') && this._isAlphabet(symbol) ||
        this.isEnabled('numbers') && this._isNumber(symbol) ||
        this.isEnabled('space') && this._isSpace(symbol) ||
        this.isEnabled('symbols') && this._isSymbol(symbol));
};

/**
 *
 *
 * @method _getInput
 * @private
 *
 * @return {String}
 */
DKTools_Input_Base.prototype._getInput = function() {
    var input = DKToolsInputManager.getText();
    var text = '';
    for(var i = 0; i < input.length; i++) {
        var symbol = input[i].toLowerCase();
        if (this._checkSymbol(symbol)) {
            text += symbol;
        }
    }
    return text;
};

// process methods

/**
 * Ввод текста
 *
 * @method processInput
*/
DKTools_Input_Base.prototype.processInput = function() {
	if (this.length >= this._maxLength || !DKToolsInputManager.hasText()) {
		return DKToolsInputManager.clear();
	}
    var input = this._getInput();
    if (!input) {
        return;
    }
    var text = this._text;
    var position = this.caretPosition;
    if (position !== this.length) {
		var text1 = text.substring(0, position);
		var text2 = text.substring(position);
        this.setupText(text1 + input + text2);
	} else {
        this.setupText(text + input);
    }
	this.caretPosition += input.length;
    this.updateInputEvents();
	this._needRedraw = true;
};

/**
 * Стирание текста
 *
 * @method processBackspace
*/
DKTools_Input_Base.prototype.processBackspace = function() {
	if (!Input.isRepeated('backspace') || this.caretPosition === 0) {
        return;
    }
    var text = this._text;
    var length = this.length;
    var position = this.caretPosition;
	if (position < length && position > 0) {
		var text1 = text.substring(0, position - 1);
		var text2 = text.substring(position);
		this.setupText(text1 + text2);
	} else {
		this.setupText(text.substring(0, length - 1));
	}
    this.caretPosition--;
	this.updateInputEvents();
	this._needRedraw = true;
};

/**
 * Стирание текста
 *
 * @method processDelete
*/
DKTools_Input_Base.prototype.processDelete = function() {
	if (!Input.isRepeated('delete') || this.caretPosition === this.length) {
        return;
    }
    var text = this._text;
    var position = this.caretPosition;
	var text1 = text.substring(0, position);
	var text2 = text.substring(position + 1);
	this.setupText(text1 + text2);
    this.updateInputEvents();
	this._needRedraw = true;
};

/**
 * Нажатие Ok
 *
 * @method processOk
*/
DKTools_Input_Base.prototype.processOk = function() {
	if (!Input.isTriggered('ok')) {
        return;
    }
    this.updateOkEvents();
	this._needRedraw = true;
};

/**
 * Нажатие Cancel
 *
 * @method processOk
*/
DKTools_Input_Base.prototype.processCancel = function() {
	if (!Input.isTriggered('cancel') && !TouchInput.isCancelled()) {
        return;
    }
    this.updateCancelEvents();
	this._needRedraw = true;
};

/**
 * Передвижение каретки влево
 *
 * @method processLeft
*/
DKTools_Input_Base.prototype.processCaretLeft = function() {
	if (!Input.isRepeated('left')) {
        return;
    }
	this.caretPosition--;
	this._needRedraw = true;
};

/**
 * Передвижение каретки вправо
 *
 * @method processRight
*/
DKTools_Input_Base.prototype.processCaretRight = function() {
	if (!Input.isRepeated('right')) {
        return;
    }
	this.caretPosition++;
	this._needRedraw = true;
};

/**
 * Передвижение каретки ввода
 *
 * @method processCaretMove
 */
DKTools_Input_Base.prototype.processCaretMove = function() {
    this.processCaretLeft();
    this.processCaretRight();
};

/**
 * Обновление видимости каретки ввода
 */
DKTools_Input_Base.prototype.processCaretVisible = function() {
    this._caret.counter++;
    if (this._caret.counter % this._caret.rate !== 0) {
        return;
    }
    this._clearCaretCounter();
    this.setupCaretVisible(!this._caret.visible);
    this._needRedraw = true;
};

// events mehtods

DKTools_Input_Base.prototype.updateOkEvents = function() {
    this.updateEventContainer('ok');
    this.deactivate();
};

DKTools_Input_Base.prototype.updateInputEvents = function() {
    this.updateEventContainer('input');
};

DKTools_Input_Base.prototype.updateCancelEvents = function() {
    this.updateEventContainer('cancel');
    this.deactivate();
};

// update methods

/**
 * Обновление спрайта
 *
 * @method update
*/
DKTools_Input_Base.prototype.update = function() {
	DKTools_Sprite.prototype.update.call(this);
    if (this.isVisibleAndActive()) {
        this.processInput();
        this.processBackspace();
        this.processDelete();
        this.processOk();
        this.processCancel();
        this.processCaretMove();
        this.processCaretVisible();
        if (this._needRedraw) {
            this.redrawAll();
        }
    }
};





//===========================================================================
// DK Tools Input
//===========================================================================

/**
 * @class DKTools_Input
 *
 * @constructor
 *
 * @param {Number || null} object - Координата X
 * @param {Number || null} y - Координата Y
 */
function DKTools_Input() {
    this.initialize.apply(this, arguments);
}

DKTools_Input.prototype = Object.create(DKTools_Container.prototype);
DKTools_Input.prototype.constructor = DKTools_Input;

// property

Object.defineProperty(DKTools_Input.prototype, 'baseSpriteClass', {
    get: function() {
        return DKTools_Input_Base;
    },
    configurable: true
});

// setup methods

/**
 * Устанавливает длину ввода
 *
 * @method setupInputLength
 * @param {Number || null} length - Длина ввода
 */
DKTools_Input.prototype.setupMaxLength = function(length) {
    this._baseSprite.setupMaxLength(length);
};

/**
 * Устанавливает все параметры каретки ввода
 *
 * @method setupCaret
 *
 * @param {Object || null} object - Объект типа {}
 *
 * object properties
 * @property {Number || null} rate - Скорость обновления каретки ввода
 * @property {String || null} text - Текст каретки ввода
 * @property {Boolean || null} visible - Видимость каретки ввода
 * @property {Number || null} position - Позиция каретки ввода
 */
DKTools_Input.prototype.setupCaret = function(object) {
    this._baseSprite.setupCaret(object);
};

/**
 * Устанавливает скорость обновления каретки ввода
 *
 * @method setupCaretRate
 * @param {Number || null} rate - Скорость обновления каретки ввода
 */
DKTools_Input.prototype.setupCaretRate = function(rate) {
    this._baseSprite.setupCaretRate(rate);
};

/**
 * Устанавливает текст каретки ввода
 *
 * @method setupCaretText
 * @param {String || null} text - Текст каретки ввода
 */
DKTools_Input.prototype.setupCaretText = function(text) {
    this._baseSprite.setupCaretText(text);
};

/**
 * Устанавливает видимость каретки ввода
 *
 * @method setupCaretVisible
 * @param {Boolean || null} visible - Видимость каретки ввода
 */
DKTools_Input.prototype.setupCaretVisible = function(visible) {
    this._baseSprite.setupCaretVisible(visible);
};

/**
 * Устанавливает позицию каретки ввода
 *
 * @method setupCaretPosition
 * @param {Number || null} position - Позиция каретки ввода
 */
DKTools_Input.prototype.setupCaretPosition = function(position) {
    this._baseSprite.setupCaretPosition(position);
};

// set methods

/**
 * Изменяет длину ввода
 * Возвращает true, если изменение произошло
 *
 * @method setInputLength
 *
 * @param {Number || null} length - Длина ввода
 *
 * @return Boolean
 */
DKTools_Input.prototype.setMaxLength = function(length) {
    return this._baseSprite.setMaxLength(length);
};

/**
 * Изменяет все параметры каретки ввода
 * Возвращает количество измененных параметров
 *
 * @method setCaret
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * @property {Number || null} rate - Скорость обновления каретки ввода
 * @property {String || null} text - Текст каретки ввода
 * @property {Boolean || null} visible - Видимость каретки ввода
 * @property {Number || null} position - Позиция каретки ввода
 *
 * @return Number
 */
DKTools_Input.prototype.setCaret = function(object, blockStart) {
    return this._baseSprite.setCaret(object, blockStart);
};

/**
 * Изменяет скорость обновления каретки ввода
 * Возвращает true, если изменение произошло
 *
 * @method setCaretRate
 *
 * @param {Number || null} rate - Скорость обновления каретки ввода
 * @param {Boolean || null} blockUpdate - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
 */
DKTools_Input.prototype.setCaretRate = function(rate, blockUpdate) {
    return this._baseSprite.setCaretRate(rate, blockUpdate);
};

/**
 * Изменяет текст каретки ввода
 * Возвращает true, если изменение произошло
 *
 * @method setCaretText
 *
 * @param {String || null} text - Текст каретки ввода
 * @param {Boolean || null} blockUpdate - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
 */
DKTools_Input.prototype.setCaretText = function(text, blockUpdate) {
    return this._baseSprite.setCaretText(text, blockUpdate);
};

/**
 * Изменяет видимость каретки ввода
 * Возвращает true, если изменение произошло
 *
 * @method setCaretVisible
 *
 * @param {Boolean || null} visible - Видимость каретки ввода
 * @param {Boolean || null} blockUpdate - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
 */
DKTools_Input.prototype.setCaretVisible = function(visible, blockUpdate) {
    return this._baseSprite.setCaretVisible(visible, blockUpdate);
};

/**
 * Изменяет позицию каретки ввода
 * Возвращает true, если изменение произошло
 *
 * @method setCaretPosition
 *
 * @param {Number || null} position - Позиция каретки ввода
 * @param {Boolean || null} blockUpdate - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
 */
DKTools_Input.prototype.setCaretPosition = function(position, blockUpdate) {
    return this._baseSprite.setCaretPosition(position, blockUpdate);
};

// other methods

/**
 * Добавляет текст
 *
 * @method add
 *
 * @param {String} text - Текст для добавления
 * @param {Number || null} start - Стартовая позиция для добавления
 * @param {Boolean || null} blockUpdate - Блокировка вызова функции updateBitmap
 */
DKTools_Input.prototype.add = function(text, start, blockUpdate) {
    return this._baseSprite.add(text, start, blockUpdate);
};

/**
 * Удаляет текст
 *
 * @method rem
 *
 * @param {Number} start - Стартовая позиция для удаления
 * @param {Number} count - Количество символов для удаления
 * @param {Boolean | null} blockUpdate - Блокировка вызова функции updateBitmap
 */
DKTools_Input.prototype.rem = function(start, count, blockUpdate) {
    return this._baseSprite.rem(start, count, blockUpdate);
};





//===========================================================================
// DK Tools Check Box Base
//===========================================================================

/**
 * @class DKTools_CheckBox_Base
 *
 * @constructor
 *
 * @param {Number} object - Координата X
 * @param {Number} y - Координата Y
 * @param {Number} width - Ширина Bitmap
 * @param {Number} height - Высота Bitmap
*/
function DKTools_CheckBox_Base() {
	this.initialize.apply(this, arguments);
}

DKTools_CheckBox_Base.prototype = Object.create(DKTools_Sprite.prototype);
DKTools_CheckBox_Base.prototype.constructor = DKTools_CheckBox_Base;

// properties

Object.defineProperties(DKTools_CheckBox_Base.prototype, {

    /**
     * Шрифт текста
     *
     * @property font
     * @type Array
     */
    font: {
        get: function() {
            return this._font[this._checked];
        },
        configurable: true
    },

    /**
     * Цвет текста
     *
     * @property textColor
     * @type String
     */
    textColor: {
        get: function() {
            return this._textColor[this._checked];
        },
        configurable: true
    },

    paintOpacity: {
        get: function() {
            return this._paintOpacity[this._checked];
        },
        configurable: true
    },

    /**
     * Цвет фона
     *
     * @property backgroundColor
     * @type String
     */
    backgroundColor: {
        get: function() {
            return this._backgroundColor[this._checked];
        },
        configurable: true
    },

    /**
     * Отображаемый текст
     *
     * @property text
     * @type String
     */
    text: {
        get: function() {
            return this._text[this._checked];
        },
        configurable: true
    },

    /**
     * Выравнивание текста
     *
     * @property align
     * @type String
     */
    align: {
        get: function() {
            return this._align[this._checked];
        },
        configurable: true
    },

    /**
     * Название файла графики
     *
     * @property graphic
     * @type String
     */
    graphic: {
        get: function() {
            return this._graphic[this._checked];
        },
        configurable: true
    }

});

// standard methods

/**
 * Возвращает стандартный шрифт

 * @method standardFont
 * @return Object
 */
DKTools_CheckBox_Base.prototype.standardFont = function() {
    var standardFont = DKTools_Sprite.prototype.standardFont.call(this);
    var object = {
        checked: standardFont,
        unchecked: standardFont
    };
    return object;
};

/**
 * Возвращает стандартный цвет текста
 *
 * @method standardTextColor
 * @return Object
*/
DKTools_CheckBox_Base.prototype.standardTextColor = function() {
    var standardColor = DKTools_Sprite.prototype.standardTextColor.call(this);
    var object = {
        checked: standardColor,
        unchecked: standardColor
    };
	return object;
};

DKTools_CheckBox_Base.prototype.standardPaintOpacity = function() {
    var standardOpacity = DKTools_Sprite.prototype.standardPaintOpacity.call(this);
    var object = {
        checked: standardOpacity,
        unchecked: standardOpacity
    };
    return object;
};

/**
 * Возвращает стандартный цвет фона
 *
 * @method standardBackgroundColor
 * @return Object
 */
DKTools_CheckBox_Base.prototype.standardBackgroundColor = function() {
    var standardColor = DKTools_Sprite.prototype.standardBackgroundColor.call(this);
    var object = {
        checked: standardColor,
        unchecked: standardColor
    };
    return object;
};

/**
 * Возвращает стандартный текст
 *
 * @method standardText
 * @return Object
 */
DKTools_CheckBox_Base.prototype.standardText = function() {
    var object = {
        checked: DKLocalizationManager.DKTools('#checkBoxStandardCheckedText#'),
        unchecked: DKLocalizationManager.DKTools('#checkBoxStandardUncheckedText#')
    };
    return object;
};

/**
 * Возвращает стандартное выравнивание
 *
 * @method standardAlign
 * @return Object
 */
DKTools_CheckBox_Base.prototype.standardAlign = function() {
    var standardAlign = DKTools_Sprite.prototype.standardAlign.call(this);
    var object = {
        checked: standardAlign,
        unchecked: standardAlign
    };
    return object;
};

/**
 * Возвращает стандартную графику
 *
 * @method standardGraphic
 * @return Object
 */
DKTools_CheckBox_Base.prototype.standardGraphic = function() {
    var standardGraphic = DKTools_Sprite.prototype.standardGraphic.call(this);
    var object = {
        checked: standardGraphic,
        unchecked: standardGraphic
    };
    return object;
};

/**
 *
 *
 * @method standardChecked
 * @return {String}
 */
DKTools_CheckBox_Base.prototype.standardChecked = function() {
    return 'unchecked';
};

// setup methods

/** Изменить текст
 * Устанавливает все параметры спрайта
 *
 * @method setupAll
 *
 * @param {Object || null} object - Объект типа {}
 *
 * object properties
 * @property {Object || null} textColor - Цвет текста включенного и выключенного состояния
 * @property {Object || null} backgroundColor - Цвет фона включенного и выключенного состояния
 * @property {Object || null} align - Выравнивание текста включенного и выключенного состояния
 * @property {Object || null} font - Шрифт текста включенного и выключенного состояния
 * @property {Object || null} text - Текст включенного и выключенного состояния
 * @property {Boolean || String || null} checked - Включен или выключен переключатель
 * @property {Object || null} graphic - Графика включенного и выключенного состояния
 *
 * @see other object properties: DKTools_Sprite.prototype.setupAll
*/
DKTools_CheckBox_Base.prototype.setupAll = function(object) {
    object = object || {};
	DKTools_Sprite.prototype.setupAll.call(this, object);
	this.setupChecked(object.checked);
};

/**
 * Устанавливает цвет текста включенного и выключенного состояния
 *
 * @method setupTextColor
 *
 * @param {String || Object || null} object - Цвет текста включенного состояния или Объект типа {}
 * @param {String || null} unchecked - Цвет текста выключенного состояния
 *
 * object properties
 * @property {String || null} checked - Цвет текста включенного состояния
 * @property {String || null} unchecked - Цвет текста выключенного состояния
*/
DKTools_CheckBox_Base.prototype.setupTextColor = function(object, unchecked) {
    if (object && object.constructor === Object) {
        return this.setupTextColor(object.checked, object.unchecked);
    }
    var standardColor = this.standardTextColor();
    var checked = object || standardColor.checked;
    unchecked = unchecked || standardColor.unchecked;
    this._textColor = {
        checked: checked,
        unchecked: unchecked
    };
};

DKTools_CheckBox_Base.prototype.setupPaintOpacity = function(object, unchecked) {
    if (object && object.constructor === Object) {
        return this.setupPaintOpacity(object.checked, object.unchecked);
    }
    var standardOpacity = this.standardPaintOpacity();
    var checked = object || standardOpacity.checked;
    unchecked = unchecked || standardOpacity.unchecked;
    this._paintOpacity = {
        checked: checked,
        unchecked: unchecked
    };
};

/**
 * Устанавливает цвет фона включенного и выключенного состояния
 *
 * @method setupBackgroundColor
 *
 * @param {String || Object || null} object - Цвет фона включенного состояния или Объект типа {}
 * @param {String || null} unchecked - Цвет фона выключенного состояния
 *
 * object properties
 * @property {String || null} checked - Цвет фона включенного состояния
 * @property {String || null} unchecked - Цвет фона выключенного состояния
 */
DKTools_CheckBox_Base.prototype.setupBackgroundColor = function(object, unchecked) {
    if (object && object.constructor === Object) {
        return this.setupBackgroundColor(object.checked, object.unchecked);
    }
    var standardColor = this.standardBackgroundColor();
    var checked = object || standardColor.checked;
    unchecked = unchecked || standardColor.unchecked;
    this._backgroundColor = {
        checked: checked,
        unchecked: unchecked
    };
};

/**
 * Устанавливает выравнивание текста включенного и выключенного состояния
 *
 * @method setupAlign
 *
 * @param {String || Object || null} object - Выравнивание текста включенного состояния или Объект типа {}
 * @param {String || null} unchecked - Выравнивание текста выключенного состояния
 *
 * object properties
 * @property {String || null} checked - Выравнивание текста включенного состояния
 * @property {String || null} unchecked - Выравнивание текста выключенного состояния
 */
DKTools_CheckBox_Base.prototype.setupAlign = function(object, unchecked) {
    if (object && object.constructor === Object) {
        return this.setupAlign(object.checked, object.unchecked);
    }
    var standardAlign = this.standardAlign();
    var checked = object || standardAlign.checked;
    unchecked = unchecked || standardAlign.unchecked;
    this._align = {
        checked: checked,
        unchecked: unchecked
    };
};

/**
 * Устанавливает текст включенного и выключенного состояния
 *
 * @method setupText
 *
 * @param {String || Object || null} object - Текст включенного состояния или Объект типа {}
 * @param {String || null} unchecked - Текст выключенного состояния
 *
 * object properties
 * @property {String || null} checked - Текст включенного состояния
 * @property {String || null} unchecked - Текст выключенного состояния
 */
DKTools_CheckBox_Base.prototype.setupText = function(object, unchecked) {
    if (object && object.constructor === Object) {
        return this.setupText(object.checked, object.unchecked);
    }
    var standardText = this.standardText();
    var checked = object || standardText.checked;
    unchecked = unchecked || standardText.unchecked;
    this._text = {
        checked: checked,
        unchecked: unchecked
    };
};

/**
 * Устанавливает графику включенного и выключенного состояния
 *
 * @method setupGraphic
 *
 * @param {String || Object || null} object - Графика включенного состояния или Объект типа {}
 * @param {String || null} unchecked - Графика выключенного состояния
 *
 * object properties
 * @property {String || null} checked - Графика включенного состояния
 * @property {String || null} unchecked - Графика выключенного состояния
 */
DKTools_CheckBox_Base.prototype.setupGraphic = function(object, unchecked) {
    if (object && object.constructor === Object) {
        return this.setupGraphic(object.checked, object.unchecked);
    }
    var standardGraphic = this.standardGraphic();
    var checked = object || standardGraphic.checked;
    unchecked = unchecked || standardGraphic.unchecked;
    this._graphic = {
        checked: checked,
        unchecked: unchecked
    };
};

/** Изменить текст
 * Устанавливает включен или выключен переключатель
 *
 * @method setupChecked
 * @param {Boolean || String || null} checked - Включен или выключен переключатель
 */
DKTools_CheckBox_Base.prototype.setupChecked = function(checked) {
    if (checked == null) {
        this._checked = this.standardChecked();
        return;
    }
    if (checked.constructor === Boolean) {
        this._checked = checked ? 'checked' : 'unchecked';
    } else {
        this._checked = checked;
    }
};

// set methods

/** Изменить текст
 * Изменяет все параметры спрайта
 * Возвращает количество измененных параметров
 *
 * @method setAll
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * object properties
 * @property {Object || null} textColor - Цвет текста включенного и выключенного состояния
 * @property {Object || null} backgroundColor - Цвет фона включенного и выключенного состояния
 * @property {Object || null} align - Выравнивание текста включенного и выключенного состояния
 * @property {Object || null} font - Шрифт текста включенного и выключенного состояния
 * @property {Object || null} text - Текст включенного и выключенного состояния
 * @property {Boolean || String || null} checked - Включен или выключен переключатель
 * @property {Object || null} graphic - Графика включенного и выключенного состояния
 *
 * @see other object properties: DKTools_Sprite.prototype.setAll
 *
 * @return Number
*/
DKTools_CheckBox_Base.prototype.setAll = function(object, blockStart) {
    object = object || {};
	var block = true;
    var changed = DKTools_Sprite.prototype.setAll.call(this, object, block);
    this._activateSetAllMode();
	if (this.setChecked(object.checked, block)) {
        changed++;
    }
	if (changed && !blockStart) {
        this.start();
    }
    this._deactivateSetAllMode();
	return changed;
};

DKTools_CheckBox_Base.prototype.setFont = function(object, blockStart) {
    object = object || {};
    var lastChecked = this._font.checked;
    var lastUnchecked = this._font.unchecked;
    if (this._font.checked.equals(object.checked) && this._font.unchecked.equals(object.unchecked)) {
        return false;
    }
    this.setupFont(object);
    if (this._font.checked.equals(lastChecked) && this._font.unchecked.equals(lastUnchecked)) {
        return false;
    }
    if (!blockStart) {
        this.start();
    }
    return true;
};

/**
 * Изменяет цвет текста включенного и выключенного состояния
 * Возвращает true, если изменение произошло
 *
 * @method setTextColor
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} blockUpdate - Блокировка вызова функции updateBitmap
 *
 * object properties
 * @property {String || null} checked - Цвет текста включенного состояния
 * @property {String || null} unchecked - Цвет текста выключенного состояния
 *
 * @return Boolean
 */
DKTools_CheckBox_Base.prototype.setTextColor = function(object, blockUpdate) {
    object = object || {};
    var lastChecked = this._textColor.checked;
    var lastUnchecked = this._textColor.unchecked;
    if (lastChecked === object.checked && lastUnchecked === object.unchecked) {
        return false;
    }
    this.setupTextColor(object);
    if (lastChecked === this._textColor.checked && lastUnchecked === this._textColor.unchecked) {
        return false;
    }
    if (!blockUpdate) {
        this.updateBitmap();
    }
    return true;
};

DKTools_CheckBox_Base.prototype.setPaintOpacity = function(object, blockUpdate) {
    object = object || {};
    var lastChecked = this._paintOpacity.checked;
    var lastUnchecked = this._paintOpacity.unchecked;
    if (lastChecked === object.checked && lastUnchecked === object.unchecked) {
        return false;
    }
    this.setupPaintOpacity(object);
    if (lastChecked === this._paintOpacity.checked && lastUnchecked === this._paintOpacity.unchecked) {
        return false;
    }
    if (!blockUpdate) {
        this.updateBitmap();
    }
    return true;
};

/**
 * Изменяет цвет фона включенного и выключенного состояния
 * Возвращает true, если изменение произошло
 *
 * @method setBackgroundColor
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} blockUpdate - Блокировка вызова функции updateBitmap
 *
 * object properties
 * @property {String || null} checked - Цвет фона включенного состояния
 * @property {String || null} unchecked - Цвет фона выключенного состояния
 *
 * @return Boolean
 */
DKTools_CheckBox_Base.prototype.setBackgroundColor = function(object, blockUpdate) {
    object = object || {};
    var lastChecked = this._backgroundColor.checked;
    var lastUnchecked = this._backgroundColor.unchecked;
    if (lastChecked === object.checked && lastUnchecked === object.unchecked) {
        return false;
    }
    this.setupBackgroundColor(object);
    if (lastChecked === this._backgroundColor.checked && lastUnchecked === this._backgroundColor.unchecked) {
        return false;
    }
    if (!blockUpdate) {
        this.updateBitmap();
    }
    return true;
};

/**
 * Изменяет текст включенного и выключенного состояния
 * Возвращает true, если изменение произошло
 *
 * @method setText
 *
 * @param {Object | null} [object] - Объект типа {}
 * @param {Boolean | null} [blockStart] - Блокировка вызова функции start
 *
 * @param {String | null} [object.checked] - Текст включенного состояния
 * @param {String | null} [object.unchecked] - Текст выключенного состояния
 *
 * @return Boolean
*/
DKTools_CheckBox_Base.prototype.setText = function(object, blockStart) {
    object = object || {};
    var lastChecked = this._text.checked;
    var lastUnchecked = this._text.unchecked;
    if (lastChecked === object.checked && lastUnchecked === object.unchecked) {
        return false;
    }
    this.setupText(object);
    if (lastChecked === this._text.checked && lastUnchecked === this._text.unchecked) {
        return false;
    }
    if (!blockStart) {
        this.start();
    }
    return true;
};

/**
 * Изменяет выравнивание текста включенного и выключенного состояния
 * Возвращает true, если изменение произошло
 *
 * @method setAlign
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} blockUpdate - Блокировка вызова функции updateBitmap
 *
 * object properties
 * @property {String || null} checked - Выравнивание текста включенного состояния
 * @property {String || null} unchecked - Выравнивание текста выключенного состояния
 *
 * @return Boolean
 */
DKTools_CheckBox_Base.prototype.setAlign = function(object, blockUpdate) {
    object = object || {};
    var lastChecked = this._align.checked;
    var lastUnchecked = this._align.unchecked;
    if (lastChecked === object.checked && lastUnchecked === object.unchecked) {
        return false;
    }
    this.setupAlign(object);
    if (lastChecked === this._align.checked && lastUnchecked === this._align.unchecked) {
        return false;
    }
    if (!blockUpdate) {
        this.updateBitmap();
    }
    return true;
};

/** Изменить текст
 * Изменяет графику включенного и выключенного состояния
 * Возвращает true, если изменение произошло
 *
 * @method setGraphic
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * object properties
 * @property {String || null} checked - Графика включенного состояния
 * @property {String || null} unchecked - Графика выключенного состояния
 *
 * @return Boolean
 */
DKTools_CheckBox_Base.prototype.setGraphic = function(object, blockStart) {
    object = object || {};
    var lastChecked = this._graphic.checked;
    var lastUnchecked = this._graphic.unchecked;
    if (lastChecked === object.checked && lastUnchecked === object.unchecked) {
        return false;
    }
    this.setupGraphic(object);
    if (lastChecked === this._graphic.checked && lastUnchecked === this._graphic.unchecked) {
        return false;
    }
    if (!blockStart) {
        this.start();
    }
    return true;
};

/** Изменить текст
 * Изменяет включен или выключен переключатель
 * Возвращает true, если изменение произошло
 *
 * @method setChecked
 *
 * @param {Boolean | String | null} checked - Включен или выключен переключатель
 * @param {Boolean | null} blockUpdate - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
 */
DKTools_CheckBox_Base.prototype.setChecked = function(checked, blockStart) {
    if (this._checked === checked || this.isChecked() === checked) {
        return false;
    }
    var lastChecked = this._checked;
    this.setupChecked(checked);
    if (lastChecked === this._checked) {
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
 * @method start
 *
 * @param {Boolean | null} activate - Активировать спрайт
 * @param {Boolean | null} checked - Включить элемент
*/
DKTools_CheckBox_Base.prototype.start = function(activate, checked) {
	DKTools_Sprite.prototype.start.call(this, activate);
    if (checked) {
        this.check();
    }
};

/**
 * Возвращает объект со всеми параметрами спрайта
 *
 * @method object
 * @return {Object}
 */
DKTools_CheckBox_Base.prototype.object = function() {
    var object = DKTools_Sprite.prototype.object.call(this);
    object.checked = this._checked;
    return object;
};

/**
 * Возвращает минимальную ширину спрайта
 * Returns the minimum width of the sprite
 *
 * @method minWidth
 * @return {Number}
*/
DKTools_CheckBox_Base.prototype.minWidth = function() {
    var standardText = this.standardText();
    var text = this._text || {};
	var length1 = this.textWidth(text.checked || standardText.checked);
	var length2 = this.textWidth(text.unchecked || standardText.unchecked);
	return Math.max(length1, length2);
};

/**
 * Копирует шрифт из source в target
 * Если какие-то значения отсутствуют, они берутся из standardFont
 *
 * @method _checkFont
 * @private
 *
 * @param {Object | null} target - Объект типа {}
 * @param {Object | null} source - Объект типа {}
 * @param {Object | null} standardFont - Объект типа {}
 *
 * target, source and standardFont properties
 * @property {Array | null} checked - Шрифт включенного текста
 * @property {Array | null} unchecked - Шрифт выключенного текста
 *
 * @return {Object}
 */
DKTools_CheckBox_Base.prototype._checkArray = function(source, standardFont) {
    source = source || {};
    var checkedFont = standardFont.checked;
    var uncheckedFont = standardFont.unchecked;
    var font = {
        checked: DKTools_Sprite.prototype._checkArray(source.checked, checkedFont),
        unchecked: DKTools_Sprite.prototype._checkArray(source.unchecked, uncheckedFont)
    }
    return font;
};

/**
 * Возвращает true, если графика установлена
 *
 * @method hasGraphic
 * @return {Boolean}
*/
DKTools_CheckBox_Base.prototype.hasGraphic = function() {
	return !!this._graphic.checked && !!this._graphic.unchecked;
};

/** Изменить текст
 * Возвращает true, если элемент включен
 *
 * @method isChecked
 * @return {Boolean}
*/
DKTools_CheckBox_Base.prototype.isChecked = function() {
	return this._checked === 'checked';
};

/** Изменить текст
 * Переключает элемент из включенного состояния в выключенное и обратно
 *
 * @method switch
*/
DKTools_CheckBox_Base.prototype.switch = function() {
    this.setChecked(!this.isChecked());
};

/** Изменить текст
 * Включает элемент
 *
 * @method check
*/
DKTools_CheckBox_Base.prototype.check = function() {
	if (this.isChecked()) {
        return;
    }
	this.switch();
};

/** Изменить текст
 * Выключает элемент
 *
 * @method uncheck
*/
DKTools_CheckBox_Base.prototype.uncheck = function() {
	if (!this.isChecked()) {
        return;
    }
	this.switch();
};

/**
 *
 *
 * @method updateClickEvents
 */
DKTools_CheckBox_Base.prototype.updateClickEvents = function() {
    this.switch();
    DKTools_Sprite.prototype.updateClickEvents.call(this);
};





//===========================================================================
// DK Tools Check Box
//===========================================================================

/**
 * @class DKTools_CheckBox
 *
 * @constructor
 *
 * @param {Number || null} object - Координата X
 * @param {Number || null} y - Координата Y
 */
function DKTools_CheckBox() {
    this.initialize.apply(this, arguments);
}

DKTools_CheckBox.prototype = Object.create(DKTools_Container.prototype);
DKTools_CheckBox.prototype.constructor = DKTools_CheckBox;

// property

/**
 *
 *
 * @property baseSpriteClass
 * @type DKTools_CheckBox_Base
 */
Object.defineProperty(DKTools_CheckBox.prototype, 'baseSpriteClass', {
    get: function() {
        return DKTools_CheckBox_Base;
    },
    configurable: true
});

// setup methods

/** Изменить текст
 * Устанавливает включен или выключен переключатель
 *
 * @method setupChecked
 * @param {Boolean || String || null} checked - Включен или выключен переключатель
 */
DKTools_CheckBox.prototype.setupChecked = function(checked) {
    this._baseSprite.setupChecked(checked);
};

// set methods

/** Изменить текст
 * Изменяет включен или выключен переключатель
 * Возвращает true, если изменение произошло
 *
 * @method setChecked
 *
 * @param {Boolean || String || null} checked - Включен или выключен переключатель
 * @param {Boolean || null} blockUpdate - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
 */
DKTools_CheckBox.prototype.setChecked = function(checked, blockUpdate) {
    return this._baseSprite.setChecked(checked, blockUpdate);
};

// other methods

/** Изменить текст
 * Возвращает true, если элемент включен
 *
 * @method isChecked
 * @return Boolean
 */
DKTools_CheckBox.prototype.isChecked = function() {
    return this._baseSprite.isChecked();
};

/** Изменить текст
 * Переключает элемент из включенного состояния в выключенное и обратно
 *
 * @method switch
 */
DKTools_CheckBox.prototype.switch = function() {
    this._baseSprite.switch();
};

/** Изменить текст
 * Включает элемент
 *
 * @method check
 */
DKTools_CheckBox.prototype.check = function() {
    this._baseSprite.check();
};

/** Изменить текст
 * Выключает элемент
 *
 * @method uncheck
 */
DKTools_CheckBox.prototype.uncheck = function() {
    this._baseSprite.uncheck();
};





//===========================================================================
// DK Tools Radio Button Base
//===========================================================================

/**
 * @class DKTools_Radio_Button_Base
 *
 * @constructor
 *
 * @param {Number || Object || null} object - Координата X
 * @param {Number || null} y - Координата Y
*/
function DKTools_Radio_Button_Base() {
	this.initialize.apply(this, arguments);
}

DKTools_Radio_Button_Base.prototype = Object.create(DKTools_Container_Base.prototype);
DKTools_Radio_Button_Base.prototype.constructor = DKTools_Radio_Button_Base;

// standard method

/**
 * Возвращает стандартный номер выбранной кнопки
 *
 * @method standardIndex
 * @return Number
 */
DKTools_Radio_Button_Base.prototype.standardIndex = function() {
    return 0;
};

// setup methods

/** Изменить текст
 * Устанавливает все параметры спрайта
 *
 * @method setupAll
 *
 * @param {Object || null} object - Объект типа {}
 *
 * @property {Number || null} index - Номер выбранной кнопки
 *
 * @see other object properties: DKTools_CheckBox_Base.prototype.setupAll
 * @see other object properties: DKTools_Container_Base.prototype.setupAll
*/
DKTools_Radio_Button_Base.prototype.setupAll = function(object) {
    object = object || {};
	DKTools_Container_Base.prototype.setupAll.call(this, object);
    this.setupIndex(object.index);
};

/**
 * Устанавливает номер выбранной кнопки
 *
 * @method setupIndex
 * @param {Number || null} index - Номер выбранной кнопки
*/
DKTools_Radio_Button_Base.prototype.setupIndex = function(index) {
	this._index = (index == null ? this.standardIndex() : index);
};

// set methods

/**
 * Изменяет все параметры спрайта
 *
 * @method setAll
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * @property {Number || null} index - Номер выбранной кнопки
 *
 * @see other object properties: DKTools_CheckBox_Base.prototype.setAll
 * @see other object properties: DKTools_Container_Base.prototype.setAll
 *
 * @return Number
*/
DKTools_Radio_Button_Base.prototype.setAll = function(object, blockStart) {
    object = object || {};
	var block = true;
    var changed = DKTools_Container_Base.prototype.setAll.call(this, object, block);
    this._activateSetAllMode();
	if (changed && !blockStart) {
        this.start();
    }
    if (this.setIndex(object.index)) {
        changed++;
    }
    this._deactivateSetAllMode();
	return changed;
};

/**
 * Изменяет номер выбранной кнопки
 *
 * @method setIndex
 *
 * @param {Number || null} index - Номер выбранной кнопки
 * @return Boolean
 */
DKTools_Radio_Button_Base.prototype.setIndex = function(index) {
	if (this._index === index) {
        return false;
    }
	var lastIndex = this._index;
    this.select(index);
    return lastIndex !== this._index;
};

// other methods

/**
 *
 *
 * @method object
 * @return {Object}
 */
DKTools_Radio_Button_Base.prototype.object = function() {
    var object = DKTools_Container_Base.prototype.object.call(this);
    object.index = this._index;
    return object;
};

/**
 * Запускает работу спрайта
 *
 * @method start
 */
DKTools_Radio_Button_Base.prototype.start = function() {
    if (!this.isStarted()) {
        this.updateElementsId();
        this.updateElementsClickHandler();
        this.select(this._index);
    }
    DKTools_Container_Base.prototype.start.call(this);
    this.activateElements();
};

/**
 * Вызывает функцию activate у всех элементов контейнера
 *
 * @method activateElements
 * @param {Boolean || null} start - Вызов функции start контейнера
 */
DKTools_Radio_Button_Base.prototype.activateElements = function(start) {
    var callback = function(element) {
        element._baseSprite.activate();
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
 * @param {Boolean || null} start - Вызов функции start контейнера
 */
DKTools_Radio_Button_Base.prototype.deactivateElements = function(start) {
    var callback = function(element) {
        element._baseSprite.deactivate();
    };
    this.iterateElements(callback);
    if (start) {
        this.start();
    }
};

/**
 * Обновляет обработчик нажатия кнопок
 *
 * @method updateElementsClickHandler
 */
DKTools_Radio_Button_Base.prototype.updateElementsClickHandler = function() {
    var callback = function(element) {
        element._baseSprite.addEventHandler('click', this._elementClickHandler.bind(this, element.id))
    }.bind(this);
    this.iterateElements(callback);
};

DKTools_Radio_Button_Base.prototype._elementClickHandler = function(id) {
	this.select(id);
    this.updateClickEvents();
};

/**
 * Возвращает номер выбранной кнопки
 *
 * @method selectedIndex
 * @return Number
*/
DKTools_Radio_Button_Base.prototype.index = function() {
	return this._index;
};

/**
 * Возвращает выбранную кнопку
 *
 * @method selected
 * @return DKTools_CheckBox
*/
DKTools_Radio_Button_Base.prototype.selected = function() {
	return this.element(this._index);
};

/**
 * Выбирает предыдущую кнопку
 *
 * @method prev
*/
DKTools_Radio_Button_Base.prototype.prev = function() {
	if (this.isEmpty()) {
        return;
    }
	var id = this._index - 1;
	if (id < 0) {
        id = this.length - 1;
    }
	this.select(id);
};

/**
 * Выбирает следующую кнопку
 *
 * @method next
*/
DKTools_Radio_Button_Base.prototype.next = function() {
	if (this.isEmpty()) {
        return;
    }
	this.select((this._index + 1) % this.length);
};

/**
 * Выбирает кнопку по ID
 *
 * @method select
 * @param {Number} id - ID кнопки
*/
DKTools_Radio_Button_Base.prototype.select = function(id) {
    if (this.isEmpty() || id >= this.length || id < 0) {
        return;
    }
    this.selected().uncheck();
    this.setupIndex(id);
    this.selected().check();
};





//===========================================================================
// DK Tools Radio Button
//===========================================================================

/**
 * @class DKTools_Radio_Button
 * @constructor
 * @param {Number || null} object - Координата X
 * @param {Number || null} y - Координата Y
 */
function DKTools_Radio_Button() {
    this.initialize.apply(this, arguments);
}

DKTools_Radio_Button.prototype = Object.create(DKTools_Container.prototype);
DKTools_Radio_Button.prototype.constructor = DKTools_Radio_Button;

// property

Object.defineProperty(DKTools_Radio_Button.prototype, 'baseSpriteClass', {
    get: function() {
        return DKTools_Radio_Button_Base;
    },
    configurable: true
});

// setup methods

DKTools_Radio_Button.prototype.setupIndex = function(index) {
    this._baseSprite.setupIndex(index);
};

// set methods

DKTools_Radio_Button.prototype.setIndex = function(index) {
    return this._baseSprite.setIndex(index);
};

// other methods

/**
 * Возвращает номер выбранной кнопки
 *
 * @method selectedIndex
 * @return Number
 */
DKTools_Radio_Button.prototype.index = function() {
    return this._baseSprite.index();
};

/**
 * Возвращает выбранную кнопку
 *
 * @method selected
 * @return DKTools_CheckBox
 */
DKTools_Radio_Button.prototype.selected = function() {
    return this._baseSprite.selected();
};

/**
 * Выбирает предыдущую кнопку
 *
 * @method prev
 */
DKTools_Radio_Button.prototype.prev = function() {
    this._baseSprite.prev();
};

/**
 * Выбирает следующую кнопку
 *
 * @method next
 */
DKTools_Radio_Button.prototype.next = function() {
    this._baseSprite.next();
};

/**
 * Выбирает кнопку по ID
 *
 * @method select
 * @param {Number} id - ID кнопки
 */
DKTools_Radio_Button.prototype.select = function(id) {
    this._baseSprite.select(id);
};





//===========================================================================
// DK Tools Clicker Base
//===========================================================================

function DKTools_Clicker_Base() {
    this.initialize.apply(this, arguments);
}

DKTools_Clicker_Base.prototype = Object.create(DKTools_Sprite.prototype);
DKTools_Clicker_Base.prototype.constructor = DKTools_Clicker_Base;

// properties

Object.defineProperty(DKTools_Clicker_Base.prototype, 'length', {
    get: function() {
        return this.elements().length;
    },
    configurable: true
});

// initialize method

/**
 * @class DKTools_Clicker_Base
 *
 * @constructor
 *
 * @param {Number || null} object - Координата X
 * @param {Number || null} y - Координата Y
 */
DKTools_Clicker_Base.prototype.initialize = DKTools_Container_Base.prototype.initialize;

// standard methods

/**
 * Возвращает стандартный список элементов
 *
 * @method standardElements
 * @return Array
 */
DKTools_Clicker_Base.prototype.standardElements = DKTools_Container_Base.prototype.standardElements;

DKTools_Clicker_Base.prototype.standardIndex = DKTools_Radio_Button_Base.prototype.standardIndex;

// setup methods

DKTools_Clicker_Base.prototype.setupAll = function(object) {
    object = object || {};
    DKTools_Sprite.prototype.setupAll.call(this, object);
    this.setupElements(object.elements);
    this.setupIndex(object.index);
};

/**
 * Устанавливает элементы
 *
 * @method setupElements
 * @param {Array || null} elements - Массив с элементами
 */
DKTools_Clicker_Base.prototype.setupElements = DKTools_Container_Base.prototype.setupElements;

/**
 * Добавляет элемент, блокируя вызов функции start контейнера
 *
 * @method setupElement
 * @param {Sprite || null} element - Элемент
 */
DKTools_Clicker_Base.prototype.setupElement = DKTools_Container_Base.prototype.setupElement;

DKTools_Clicker_Base.prototype.setupIndex = DKTools_Radio_Button_Base.prototype.setupIndex;

// set methods

DKTools_Clicker_Base.prototype.setAll = function(object, blockStart) {
    object = object || {};
    var block = true;
    var changed = DKTools_Sprite.prototype.setAll.call(this, object, block);
    this._activateSetAllMode();
    if (this.setElements(object.elements, block)) {
        changed++;
    }
    if (this.setIndex(object.index)) { // вызывает start через select, blockStart не будет работать правильно
        changed++;
    }
    if (changed && !blockStart) {
        this.start();
    }
    this._deactivateSetAllMode();
    return changed;
};

/**
 * Изменяет список элементов
 *
 * @method setElements
 *
 * @param {Array || null} elements - Массив элементов
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * @return Boolean
 */
DKTools_Clicker_Base.prototype.setElements = DKTools_Container_Base.prototype.setElements;

DKTools_Clicker_Base.prototype.setIndex = DKTools_Radio_Button_Base.prototype.setIndex;

// other methods

/**
 * Запускает работу спрайта
 *
 * @method start
 * @param {Boolean || null} activate - Активировать спрайт
 */
DKTools_Clicker_Base.prototype.start = function(activate) {
    this._checkElements();
    DKTools_Sprite.prototype.start.call(this, activate);
};

DKTools_Clicker_Base.prototype._checkElements = function() {
    var elements = this.elements();
    for(var i = 0; i < this.length; i++) {
        var bitmap = elements[i];
        bitmap = this.bitmapFromObject(bitmap);
        elements[i] = bitmap;
    }
};

/**
 * Клонирует элементы контейнера
 *
 * @method _cloneElements
 * @private
 *
 * @param {Number | null} [startPosition = 0] - Стартовая позиция клонирования
 *
 * @return {Array} Массив с клонированными элементами контейнера
 */
DKTools_Clicker_Base.prototype._cloneElements = DKTools_Container_Base.prototype._cloneElements;

/**
 *
 *
 * @method object
 * @return {Object}
 */
DKTools_Clicker_Base.prototype.object = function() {
    var object = DKTools_Sprite.prototype.object.call(this);
    object.elements = this._cloneElements();
    object.index = this._index;
    return object;
};

/**
 * Создает Bitmap спрайта шириной _bitmapWidth и высотой _bitmapHeight
 *
 * @method createBitmap
 */
DKTools_Clicker_Base.prototype.createBitmap = function() {
    this.setupBitmap(this.selected());
};

/**
 * Возвращает true, если спрайт не содержит элементов
 *
 * @method isEmpty
 * @return Boolean
 */
DKTools_Clicker_Base.prototype.isEmpty = DKTools_Container_Base.prototype.isEmpty;

/**
 * Очищает список элементов
 *
 * @method clearElements
 */
DKTools_Clicker_Base.prototype.clearElements = DKTools_Container_Base.prototype.clearElements;

/**
 * Выполняет callback функцию для каждого элемента
 *
 * @method iterateElements
 *
 * @param {Function} callback - Функция обработки для каждого элемента контейнера
 * @param {Boolean || null} start - Вызов функции start контейнера
 */
DKTools_Clicker_Base.prototype.iterateElements = DKTools_Container_Base.prototype.iterateElements;

/**
 * Возвращает все элементы
 *
 * @method elements
 * @return Array
 */
DKTools_Clicker_Base.prototype.elements = DKTools_Container_Base.prototype.elements;

/**
 * Возвращает элемент по его ID
 *
 * @method element
 *
 * @param {Number} id - ID элемента
 *
 * @return DKToolsSprite || null
 */
DKTools_Clicker_Base.prototype.element = DKTools_Container_Base.prototype.element;

/**
 * Добавляет элемент
 *
 * @method addElement
 *
 * @param {Sprite || Array || null} object - Элемент или Массив элементов
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 */
DKTools_Clicker_Base.prototype.addElement = DKTools_Container_Base.prototype.addElement;

/**
 * Удаляет элемент
 *
 * @method removeElement
 *
 * @param {Sprite || Number || null} object - Элемент или номер элемента
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 */
DKTools_Clicker_Base.prototype.removeElement = DKTools_Container_Base.prototype.removeElement;

/**
 * Возвращает номер показываемого элемента
 *
 * @method selectedIndex
 * @return Number
 */
DKTools_Clicker_Base.prototype.index = DKTools_Radio_Button_Base.prototype.index;

/**
 * Возвращает показываемый сейчас элемент
 *
 * @method selected
 * @return Sprite || null
 */
DKTools_Clicker_Base.prototype.selected = DKTools_Radio_Button_Base.prototype.selected;

/**
 * Показывает предыдущий элемент
 *
 * @method prev
 */
DKTools_Clicker_Base.prototype.prev = DKTools_Radio_Button_Base.prototype.prev;

/**
 * Показывает следующий элемент
 *
 * @method next
 */
DKTools_Clicker_Base.prototype.next = DKTools_Radio_Button_Base.prototype.next;

/**
 * Выбирает кнопку по ID
 *
 * @method select
 * @param {Number} id - ID кнопки
 */
DKTools_Clicker_Base.prototype.select = function(id) {
    if (this.isEmpty()) {
        return;
    }
    if (id >= this.length || id < 0 || id === this.index()) {
        return;
    }
    this.setupIndex(id);
    this.start();
};

DKTools_Clicker_Base.prototype._updateAutoSwitching = function(duration) {
    var handler = null;
    var onStartHandler = null;
    this.addEvent('wait', handler, duration, onStartHandler, this.next.bind(this));
};

DKTools_Clicker_Base.prototype.autoSwitching = function(duration) {
    return this.addEventHandler('update', this._updateAutoSwitching.bind(this, duration));
};

DKTools_Clicker_Base.prototype.updateClickEvents = function() {
    this.next();
    DKTools_Sprite.prototype.updateClickEvents.call(this);
};





//===========================================================================
// DK Tools Clicker
//===========================================================================

/**
 * @class DKTools_Clicker
 *
 * @constructor
 *
 * @param {Number || null} object - Координата X
 * @param {Number || null} y - Координата Y
 */
function DKTools_Clicker() {
    this.initialize.apply(this, arguments);
}

DKTools_Clicker.prototype = Object.create(DKTools_Container.prototype);
DKTools_Clicker.prototype.constructor = DKTools_Clicker;

// property

Object.defineProperty(DKTools_Clicker.prototype, 'baseSpriteClass', {
    get: function() {
        return DKTools_Clicker_Base;
    },
    configurable: true
});

// setup methods

// set methods

// other methods

DKTools_Clicker.prototype.autoSwitching = function(duration) {
    return this._baseSprite.autoSwitching(duration);
};





//===========================================================================
// DK Tools Color Picker Base
//===========================================================================

/**
 * @class DKTools_ColorPicker_Base
 *
 * @constructor
 *
 * @param {Number} object - Координата X
 * @param {Number} y - Координата Y
*/
function DKTools_ColorPicker_Base() {
	this.initialize.apply(this, arguments);
}

DKTools_ColorPicker_Base.prototype = Object.create(DKTools_Sprite.prototype);
DKTools_ColorPicker_Base.prototype.constructor = DKTools_ColorPicker_Base;

// other methods

DKTools_ColorPicker_Base.prototype.color = function() {
    return this._color;
};

DKTools_ColorPicker_Base.prototype.createBitmap = function() {
	if (this.hasGraphic()) {
        DKTools_Sprite.prototype.createBitmap.call(this);
    } else {
		this.loadWindowskin();
		this.setFrame(96, 144, 96, 48);
	}
};

DKTools_ColorPicker_Base.prototype._updateColor = function() {
    var dx = this._frame.x;
    var dy = this._frame.y;
    var x = this.clickX / this.scale.x + dx;
    var y = this.clickY / this.scale.y + dy;
    this._color = this.bitmap.getPixel(x, y);
};

DKTools_ColorPicker_Base.prototype.updateClickEvents = function() {
    this._updateColor();
    DKTools_Sprite.prototype.updateClickEvents.call(this);
};





//===========================================================================
// DK Tools Color Picker
//===========================================================================

/**
 * @class DKTools_ColorPicker
 *
 * @constructor
 *
 * @param {Number || null} object - Координата X
 * @param {Number || null} y - Координата Y
 */
function DKTools_ColorPicker() {
    this.initialize.apply(this, arguments);
}

DKTools_ColorPicker.prototype = Object.create(DKTools_Container.prototype);
DKTools_ColorPicker.prototype.constructor = DKTools_ColorPicker;

// property

Object.defineProperty(DKTools_ColorPicker.prototype, 'baseSpriteClass', {
    get: function() {
        return DKTools_ColorPicker_Base;
    },
    configurable: true
});

// other method

DKTools_ColorPicker.prototype.color = function() {
    return this._baseSprite.color();
};





//===========================================================================
// NOT READY
//===========================================================================
// DK Tools Slider Base
//===========================================================================

function DKTools_Slider_Base() {
	this.initialize.apply(this, arguments);
}

DKTools_Slider_Base.prototype = Object.create(DKTools_Container_Base.prototype);
DKTools_Slider_Base.prototype.constructor = DKTools_Slider_Base;

// standard methods

/**
 * Возвращает стандартное значение активности спрайта
 *
 * @method standardActive
 * @return Boolean
*/
DKTools_Slider_Base.prototype.standardActive = function() {
	return false;
};

DKTools_Slider_Base.prototype.standardBackgroundColor = function() {
    var standardColor = DKTools_Container_Base.prototype.standardBackgroundColor.call(this);
    var blackColor = '#000000';
    var handleColor = '#33ccff';
    var object = {
        container: standardColor,
        minusSprite: blackColor,
        backgroundSprite: blackColor,
        handleSprite: handleColor,
        plusSprite: blackColor
    };
    return object;
};

DKTools_Slider_Base.prototype.standardMin = function() {
	return 0;
};

DKTools_Slider_Base.prototype.standardMax = function() {
	return 100;
};

// setup methods

/**
 * Устанавливает все параметры спрайта
 *
 * @method setupAll
 *
 * @param {Object || null} object - Объект типа {}
 *
 * @property {Number || null} min - Минимальное значение слайдера
 * @property {Number || null} max - Максимальное значение слайдера
 * @property {Number || null} value - Текущее значение слайдера
 *
 * @see other object properties: DKTools_Sprite.prototype.setupAll
*/
DKTools_Slider_Base.prototype.setupAll = function(object) {
	object = object || {};
    DKTools_Container_Base.prototype.setupAll.call(this, object);
	this.setupMin(object.min);
	this.setupMax(object.max);
	this.setupValue(object.value);
};

DKTools_Slider_Base.prototype.setupBackgroundColor = function(type, color) {
    if (!this._backgroundColor) {
        DKTools_Container_Base.prototype.setupBackgroundColor.call(this, color);
    }
    var standardColor = this.standardBackgroundColor();
    type = type || 'all';
    if (type === 'all') {
        for(var type in this._backgroundColor) {
           this.setupBackgroundColor(type, color);
        }
    } else {
        this._backgroundColor[type] = color || standardColor[type];
    }
};

/**
 * Устанавливает минимальное значение слайдера
 *
 * @method setupMin
 * @param {Number || null} min - Минимальное значение слайдера
*/
DKTools_Slider_Base.prototype.setupMin = function(min) {
	this._min = (min == null ? this.standardMin() : min);
	this._minWidth = this.textWidth(this._min);
};

/**
 * Устанавливает максимальное значение слайдера
 *
 * @method setupMax
 * @param {Number || null} max - Максимальное значение слайдера
*/
DKTools_Slider_Base.prototype.setupMax = function(max) {
	this._max = (max ? Math.max(this._min, max) : this.standardMax());
	this._maxWidth = this.textWidth(this._max);
};

/**
 * Устанавливает текущее значение слайдера
 *
 * @method setupValue
 * @param {Number || null} value - Текущее значение слайдера
*/
DKTools_Slider_Base.prototype.setupValue = function(value) {
	this._value = (value == null ? this._min : value.clamp(this._min, this._max));
};

// set methods

/**
 * Изменяет все параметры спрайта
 * Возвращает количество измененных параметров
 *
 * @method setAll
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} blockStart - Блокировка вызова функции start
 *
 * @property {Number || null} min - Минимальное значение слайдера
 * @property {Number || null} max - Максимальное значение слайдера
 * @property {Number || null} value - Текущее значение слайдера
 *
 * @see other object properties: DKTools_Sprite.prototype.setAll
 *
 * @return Number
*/
DKTools_Slider_Base.prototype.setAll = function(object, blockStart) {
	object = object || {};
	var block = true;
	var changed = DKTools_Sprite.prototype.setAll.call(this, object, block);
	if (this.setMin(object.min, block)) {
        changed++;
    }
	if (this.setMax(object.max, block)) {
        changed++;
    }
	if (this.setValue(object.value, block)) {
        changed++;
    }
	if (changed && !blockStart) {
        this.start();
    }
	return changed;
};

DKTools_Slider_Base.prototype.setMin = function(min, blockStart) {
	if (this._min === min) {
        return false;
    }
	var lastMin = this._min;
	this.setupMin(min);
	if (lastMin === this._min) {
        return false;
    }
	if (!blockStart) {
        this.start();
    }
	return true;
};

DKTools_Slider_Base.prototype.setMax = function(max, blockStart) {
	if (this._max === max) {
        return false;
    }
	var lastMax = this._max;
	this.setupMax(max);
	if (lastMax === this._max) {
        return false;
    }
	if (!blockStart) {
        this.start();
    }
	return true;
};

DKTools_Slider_Base.prototype.setValue = function(value, blockUpdate) {
	if (this._value === value) {
        return false;
    }
	var lastValue = this._value;
	this.setupValue(value);
	if (lastValue === this._value) {
        return false;
    }
    if (!blockUpdate) {
        this.updateBitmap();
    }
	//this.checkHandleValue();
	this.updateHandle();
	return true;
};

// other methods

/**
 * Запускает работу спрайта
 *
 * @method start
*/
DKTools_Slider_Base.prototype.start = function() {
    if (this.isEmpty()) {
        this.createElements();
    }
    DKTools_Container_Base.prototype.start.call(this);
    this.addChild(this._handleSprite);
    this.checkValue();
    this.updateHandlePosition();
	this.updateInputData();
};

DKTools_Slider_Base.prototype.object = function() {
    var object = DKTools_Sprite.prototype.object.call(this);
    object.min = this._min;
    object.max = this._max;
    object.value = this._value;
    return object;
};

DKTools_Slider_Base.prototype.createBackgroundSprite = function() {
    this._backgroundSprite = new DKTools_Sprite(0, 0, this._bitmapWidth, this._bitmapHeight);
    this._backgroundSprite.setupBackgroundColor(this._backgroundColor.backgroundSprite);
    this._backgroundSprite.setupLongPressInterval(1);
    this._backgroundSprite.addEventHandler('longPress', this._updateHandleTouch.bind(this));
    this._backgroundSprite.start();

};

DKTools_Slider_Base.prototype.createMinusSprite = function() {
    this._minusSprite = new DKTools_Sprite(0, 0, 36, 36);
    this._minusSprite.setupBackgroundColor(this._backgroundColor.minusSprite);
    this._minusSprite.setupText('-');
    this._minusSprite.setupColdOpacity(255);
    this._minusSprite.setupHotOpacity(155);
    this._minusSprite.addEventHandler('click', this.prev.bind(this));
    this._minusSprite.addEventHandler('longPress', function(event) {
        var target = event.target;
        var pressedTime = target._pressedTime * 3;
        var base = 40;
        var difference = this._max - this._min;
        var divider = base - Math.floor(difference / 100);
        var value = Math.max(1, Math.floor(pressedTime / divider));
        //p(value);
        this.rem(value);
    }.bind(this));
    this._minusSprite.start(true);
};

DKTools_Slider_Base.prototype.createPlusSprite = function() {
    this._plusSprite = new DKTools_Sprite(0, 0, 36, 36);
    this._plusSprite.setupBackgroundColor(this._backgroundColor.plusSprite);
    this._plusSprite.setupText('+');
    this._plusSprite.setupColdOpacity(255);
    this._plusSprite.setupHotOpacity(155);
    this._plusSprite.addEventHandler('click', this.next.bind(this));
    this._plusSprite.addEventHandler('longPress', function(event) {
        var target = event.target;
        var pressedTime = target._pressedTime * 3;
        var base = 40;
        var difference = this._max - this._min;
        var divider = base - Math.floor(difference / 100);
        pressedTime = target._pressedTime / 10;
        divider = 1;
        var value = Math.max(1, Math.floor(pressedTime / divider));
        //p(value);
        this.add(value);
    }.bind(this));
    this._plusSprite.start(true);
};

DKTools_Slider_Base.prototype.createControlSprites = function() {
    this.createMinusSprite();
    this.createPlusSprite();
};

DKTools_Slider_Base.prototype.createHandleSprite = function() {
    var handleWidth = this._maxWidth + 8;
    this._handleSprite = new DKTools_Sprite(0, 0, handleWidth);
    this._handleSprite.setupBackgroundColor(this._backgroundColor.handleSprite);
    this._handleSprite.setupText(this._value);
    this._handleSprite.start(true);
    this._handleSprite.deactivate();
};

DKTools_Slider_Base.prototype.createElements = function() {
    this.createControlSprites();
    this.createBackgroundSprite();
    this.createHandleSprite();
};

DKTools_Slider_Base.prototype.checkValue = function() {
    var min = this._min;
    var max = this._max;
    var value = this._value;
    if (value > max) {
        this.setupValue(max);
    }
    if (value < min) {
        this.setupValue(min);
    }
};

DKTools_Slider_Base.prototype._percent = function() {
    return (this._backgroundSprite.width - this._handleSprite.width) / (this._max - this._min);
};

DKTools_Slider_Base.prototype.handleBaseX = function() {
    return this._backgroundSprite.x;
};

DKTools_Slider_Base.prototype.updateHandleX = function() {
    this._handleSprite.x = this.handleBaseX() + (this._value - this._min) * this._percent();
};

DKTools_Slider_Base.prototype.updateHandleY = function() {
    this._handleSprite.y = this._backgroundSprite.y;
};

DKTools_Slider_Base.prototype.updateHandlePosition = function() {
    this.updateHandleX();
    this.updateHandleY();
};

DKTools_Slider_Base.prototype.updateValue = function() {
    var value = this._min + Math.floor((this._handleSprite.x - this.handleBaseX()) / this._percent());
    this.setValue(value);
};

DKTools_Slider_Base.prototype.handleClickHandler = function() {
    var baseX = this.handleBaseX();
    var localX = this._backgroundSprite.canvasToLocalX(TouchInput.x);
    var handleHalfWidth = this._handleSprite.width / 2;
    var newHandleX = baseX + localX - handleHalfWidth;
    this._handleSprite.x = newHandleX;
    this.updateValue();
    this.updateHandlePosition();
    //var backgroundX = this._backgroundSprite.x;
    //var x = this._backgroundSprite.canvasToLocalX(TouchInput.x);
    //this._handleSprite.x = backgroundX + x - this._handleSprite.width / 2;
    //this._handleSprite.x = this._handleSprite.x.clamp(backgroundX, backgroundX + this._backgroundSprite.width - this._handleSprite.width);
    //var percent = (this._backgroundSprite.width - this._handleSprite.width) / (this._max - this._min);
    //var value = this._min + Math.floor((this._handleSprite.x - backgroundX) / percent);
    //this._handleSprite.setText(value);
    //this.setupValue(value);
};

DKTools_Slider_Base.prototype.elements = function() {
    if (!this._backgroundSprite) {
        return [];
    }
    return [this._minusSprite, this._backgroundSprite, this._plusSprite];
};

DKTools_Slider_Base.prototype.isContainer = function() {
    return true;
};

DKTools_Slider_Base.prototype._updateHandleTouch = function(event) {
    if (this._touchX === TouchInput.x) {
        return;
    }
    this._touchX = TouchInput.x;
    this.handleClickHandler();
};

DKTools_Slider_Base.prototype.updateBackground = function() {
    if (this._backgroundColor.container) {
        this.fillAll(this._backgroundColor.container);
    }
};

DKTools_Slider_Base.prototype.getPrevValue = function() {
    var prevValue = this._value - 1;
    if (prevValue < this._min) {
        return this._min;
    }
    return prevValue;
};

DKTools_Slider_Base.prototype.getNextValue = function() {
    var nextValue = this._value + 1;
    if (nextValue > this._max) {
        return this._max;
    }
    return nextValue;
};

DKTools_Slider_Base.prototype.prev = function() {
	return this.setValue(this.getPrevValue());
};

DKTools_Slider_Base.prototype.next = function() {
	return this.setValue(this.getNextValue());
};

DKTools_Slider_Base.prototype.empty = function() { // другое название
    return this.setValue(this._min);
};

DKTools_Slider_Base.prototype.full = function() { // другое название
    return this.setValue(this._max);
};

DKTools_Slider_Base.prototype.add = function(value) {
    var newValue = this._value + value;
    if (newValue >= this._max) {
        return this.full();
    }
    return this.setValue(newValue);
};

DKTools_Slider_Base.prototype.rem = function(value) {
    var newValue = this._value - value;
    if (newValue <= this._min) {
        return this.empty();
    }
    return this.setValue(newValue);
};

DKTools_Slider_Base.prototype.updateHandle = function() {
    var value = this._value;
    this._handleSprite.setText(value);
    this.updateHandlePosition();
};

DKTools_Slider_Base.prototype.updateClickEvents = function() {
    //this._handleSprite.x = this.canvasToLocalX(TouchInput.x) - this._handleSprite.width / 2;
    //this.checkHandleX();
    //this.checkHandleY();
    //this.updateValue();
    DKTools_Container_Base.prototype.updateClickEvents.call(this);
};





//===========================================================================
// NOT READY
//===========================================================================
// DK Tools Slider
//===========================================================================

/**
 * @class DKTools_Slider
 *
 * @constructor
 *
 * @param {Number || null} object - Координата X
 * @param {Number || null} y - Координата Y
 */
function DKTools_Slider() {
    this.initialize.apply(this, arguments);
}

DKTools_Slider.prototype = Object.create(DKTools_Container.prototype);
DKTools_Slider.prototype.constructor = DKTools_Slider;

// property

Object.defineProperty(DKTools_Slider.prototype, 'baseSpriteClass', {
    get: function() {
        return DKTools_Slider_Base;
    },
    configurable: true
});





//===========================================================================
// NOT READY
//===========================================================================
// DK Tools Window
//===========================================================================

function DKTools_Window() {
	this.initialize.apply(this, arguments);
}

DKTools_Window.prototype = Object.create(Window_Base.prototype);
DKToolsUtils.mixin(DKTools_Window.prototype, DKTools_Base.prototype);
DKTools_Window.prototype.constructor = DKTools_Window;

// Счетчик созданных окон
DKTools_Window._counter = 0;

// properties

Object.defineProperties(DKTools_Window.prototype, {

    contentsSprite: {
        get: function() {
            return this._windowContentsSprite;
        },
        configurable: true
    },

    bitmap: {
        get: function() {
            return this.contents;
        },
        set: function(value) {
           this.contents = value;
        },
        configurable: true
    },

    pressedTime: {
        get: function() {
            return this.contentsSprite.pressedTime;
        },
        configurable: true
    },

    clickX : {
        get: function() {
            return this.contentsSprite.clickX;
        },
        configurable: true
    },

    clickY : {
        get: function() {
            return this.contentsSprite.clickY;
        },
        configurable: true
    }

});

// initialize methods

/**
 * @class DKTools_Window
 *
 * @constructor
 *
 * @param {Number} object - Координата X
 * @param {Number} y - Координата Y
 * @param {Number} width - Ширина окна
 * @param {Number} height - Высота окна
 */
DKTools_Window.prototype.initialize = function(object, y, width, height) {
    PIXI.Container.call(this);
    DKTools_Base.prototype.initialize.call(this, object, y, width, height);
    this._createAllParts();
    this._createWindowskin();
    DKTools_Window._counter++;
};

// clear methods

DKTools_Window.prototype._clearAll = function() {
    DKTools_Base.prototype._clearAll.call(this);
    this._clearOpenness();
    this._clearPadding();
    this._clearMargin();
    this._clearColorTone();
    this._clearOrigin();
};

DKTools_Window.prototype._clearOpenness = function() {
    this._openness = 255;
};

DKTools_Window.prototype._clearPadding = function() {
    this._padding = this.standardPadding();
};

DKTools_Window.prototype._clearMargin = function() {
    this._margin = 4;
};

DKTools_Window.prototype._clearColorTone = function() {
    this._colorTone = [0, 0, 0];
};

DKTools_Window.prototype._clearOrigin = function() {
    this.origin = new Point();
};

// standard methods

/**
 * Возвращает стандартное значение коодинаты X для спрайта
 *
 * @method standardSpriteY
 * @return Number
*/
DKTools_Window.prototype.standardSpriteX = function() {
	return this.standardPadding();
};

/**
 * Возвращает стандартное значение коодинаты Y для спрайта
 *
 * @method standardSpriteY
 * @return Number
*/
DKTools_Window.prototype.standardSpriteY = function() {
	return this.standardPadding();
};

DKTools_Window.prototype.standardWindowOpacity = function() {
    return 255;
};

DKTools_Window.prototype.standardContentsOpacity = function() {
    return 255;
};

/**
 * Возвращает стандартную прозрачность

 * @method standardOpacity
 * @return Array
 */
DKTools_Window.prototype.standardOpacity = function() {
    return [this.standardWindowOpacity(), this.standardContentsOpacity(), this.standardBackOpacity()];
};

/**
 * Возвращает стандартный тон окна
 
 * @method standardTone
 * @return Array
*/
DKTools_Window.prototype.standardTone = function() {
	return $gameSystem.windowTone();
};

// setup methods

/**
 * Устанавливает все параметры окна
 
 * @method setupAll
 * @param {String || null} textColor - Цвет текста
 * @param {Array || null} font - Шрифт текста
 * @param {Array || null} opacity - Прозрачность окна
 * @param {Array || null} tone - Тон окна
 * @param {String || null} windowskin - Обложка окна
*/
DKTools_Window.prototype.setupAll = function(object) {
    object = object || {};
    DKTools_Base.prototype.setupAll.call(this, object);
	this.setupTone(object.tone);
};

DKTools_Window.prototype.setupWidth = function(width) {
    this.width = this._checkWidth(width);
};

DKTools_Window.prototype.setupHeight = function(height) {
    this.height = this._checkHeight(height);
};

DKTools_Window.prototype.setupSize = function(object, height) {
    if (object && object.constructor === Object) {
        return this.setupSize(object.width, object.height);
    }
    object = this._checkWidth(object);
    height = this._checkHeight(height);
    Window.prototype.move.call(this, this.x, this.y, object, height);
};

/**
 * Устанавливает тон окна
 
 * @method setupTone
 * @param {Array || null} tone - Тон окна
*/
DKTools_Window.prototype.setupTone = function(tone) {
    this._tone = this._checkArray(tone, this.standardTone());
};

/**
 * Устанавливает прозрачность окна

 * @method setupOpacity
 * @param {Array || null} opacity - Прозрачность окна
*/
DKTools_Window.prototype.setupOpacity = function(opacity) {
    this._opacity = this._checkArray(opacity, this.standardOpacity());
};

// set methods

/**
 * Изменяет все параметры окна

 * @method setAll
 * @param {Object || null} object -
 * @param {Boolean || null} blockStart -
 * @param {String || null} textColor - Цвет текста
 * @param {Array || null} font - Шрифт текста
 * @param {Array || null} opacity - Прозрачность окна
 * @param {Array || null} tone - Тон окна
 * @param {String || null} windowskin - Обложка окна
 * @return Number
*/
DKTools_Window.prototype.setAll = function(object, blockStart) {
	object = object || {};
	var block = true;
	var changed = DKTools_Base.prototype.setAll.call(this, obecjt);
	if (this.setTone(object.tone, block)) {
        changed++;
    }
	if (changed && !blockStart) {
        this.start();
    }
	return changed;
};

/**
 * Изменяет ширину Bitmap
 *
 * @method setWidth
 *
 * @param {Number | null} [width = null] - Ширина Bitmap
 * @param {Boolean | null} [blockStart = null] - Блокировка вызова функции start
 *
 * @return {Boolean} Возвращает true, если изменение произошло
 */
DKTools_Window.prototype.setWidth = function(width, blockStart) {
    return this.resize(width, this.height, blockStart);
};

/**
 * Изменяет высоту Bitmap
 *
 * @method setHeight
 *
 * @param {Number | null} [height = null] - Высота Bitmap
 * @param {Boolean | null} [blockStart = null] - Блокировка вызова функции start
 *
 * @return {Boolean} Возвращает true, если изменение произошло
 */
DKTools_Window.prototype.setHeight = function(height, blockStart) {
    return this.resize(this.width, height, blockStart);
};

/**
 * Изменяет прозрачность окна
 * Возвращает true, если изменение произошло

 * @method setOpacity
 * @param {Array || null} opacity - Прозрачность окна
 * @return Boolean
 */
DKTools_Window.prototype.setOpacity = function(opacity, blockUpdate) {
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

 * @method setTone
 * @param {Array || null} tone - Тон окна
 * @return Boolean
 */
DKTools_Window.prototype.setTone = function(tone, blockUpdate) {
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

// other methods

DKTools_Window.prototype.updateTransform = function() {
    this._updateArrows();
    this._updatePauseSign();
    this._updateContents();
    PIXI.Container.prototype.updateTransform.call(this);
};

DKTools_Window.prototype._createAllParts = function() {
    this._createWindowSpriteContainer();
    this._createBackSprite();
    this._createFrameSprite();
    this._createContentsSprite();
    this._createArrowSprites();
    this._createPauseSignSprite();
    this.addSpritesToChild();
};

DKTools_Window.prototype._createWindowSpriteContainer = function() {
    this._windowSpriteContainer = new PIXI.Container();
};

DKTools_Window.prototype._createBackSprite = function() {
    this._windowBackSprite = new Sprite();
    this._windowBackSprite.alpha = this.standardBackOpacity() / 255;
};

DKTools_Window.prototype._createFrameSprite = function() {
    this._windowFrameSprite = new Sprite();
};

DKTools_Window.prototype._createDownArrowSprite = function() {
    this._downArrowSprite = new Sprite();
};

DKTools_Window.prototype._createUpArrowSprite = function() {
    this._upArrowSprite = new Sprite();
};

DKTools_Window.prototype._createArrowSprites = function() {
    this._createDownArrowSprite();
    this._createUpArrowSprite();
};

DKTools_Window.prototype._createPauseSignSprite = function() {
    this._windowPauseSignSprite = new Sprite();
};

DKTools_Window.prototype.addSpritesToChild = function() {
    this._windowSpriteContainer.addChild(this._windowBackSprite, this._windowFrameSprite);
    this.addChild(this._windowSpriteContainer);
    this.addChild(this._windowContentsSprite);
    this.addChild(this._downArrowSprite);
    this.addChild(this._upArrowSprite);
    this.addChild(this._windowPauseSignSprite);
};

// _refresh methods

DKTools_Window.prototype._refreshAllParts = function() {
    this._refreshBack();
    this._refreshFrame();
    this._refreshContents();
    this._refreshArrows();
    this._refreshPauseSign();
};

DKTools_Window.prototype._refreshBack = function() {
    if (this._windowBackSprite) {
        Window.prototype._refreshBack.call(this);
    }
};

DKTools_Window.prototype._refreshFrame = function() {
    if (this._windowFrameSprite) {
        Window.prototype._refreshFrame.call(this);
    }
};

DKTools_Window.prototype._refreshContents = function() {
    if (this._windowContentsSprite) {
        Window.prototype._refreshContents.call(this);
    }
};

DKTools_Window.prototype._refreshArrows = function() {
    if (this._downArrowSprite && this._upArrowSprite) {
        Window.prototype._refreshArrows.call(this);
    }
};

DKTools_Window.prototype._refreshPauseSign = function() {
    if (this._windowPauseSignSprite) {
        Window.prototype._refreshPauseSign.call(this);
    }
};

//

DKTools_Window.prototype._createContentsSprite = function() {
    this._windowContentsSprite = new DKTools_Sprite();
    this._windowContentsSprite.setupSize(this.contentsWidth(), this.contentsHeight());
    this._windowContentsSprite.start();
};

// create methods

//DKTools_Window.prototype._createAll = function() {
//    DKTools_Base.prototype._createAll.call(this);
    //this._createWindowskin();
//};

DKTools_Window.prototype._createWindowskin = function() {
    this.windowskin = this.loadWindowskin();
};

//DKTools_Window.prototype.createAll = function() {
    //this._createAllParts();
    //this._createWindowskin();
    //DKTools_Base.prototype.createAll.call(this);
//};

//DKTools_Window.prototype.createBitmap = function() {
//    this._windowContentsSprite.resize(this.contentsWidth(), this.contentsHeight());
//};
//
//DKTools_Window.prototype.createContents = DKTools_Window.prototype.createBitmap;

DKTools_Window.prototype._createVisibleEvent = function(duraion, visible) {
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

// is method

DKTools_Window.prototype.isOpenAndActive = function() {
    return this.isOpen() && this.isActive();
};

// check methods

/**
 * Проверяет ширину и высоту Bitmap на соответствие минимальным значениям
 * Возвращает true, если изменение произошло
 *
 * @method checkSize
 * @return Number
 */
DKTools_Window.prototype.checkSize = function() {
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

//

/**
 * Обновляет перемещение спрайта
 *
 * @method _updateMove
 * @private
 *
 * @param {Number} newX - Новая координата X
 * @param {Number} newY - Новая координата Y
 * @param {Number} newOpacity - Новая прозрачность
 * @param {Number} newScaleX - Новое масштабирование по X
 * @param {Number} newScaleY - Новое масштабирование по Y
 * @param {DKToolsEvent} event - Событие
 */
DKTools_Window.prototype._updateMove = function(newX, newY, newOpacity, event) {
    var duration = event.duration;
    var x = (this.x * (duration - 1) + newX) / duration;
    var y = (this.y * (duration - 1) + newY) / duration;
    var opacity = (this.opacity * (duration - 1) + newOpacity) / duration;
    this.move(x, y);
    this.setupOpacity(opacity);
};

/**
 * Перемещает спрайт
 *
 * @method move
 *
 * @param {Number | Point | Object | null} [object] - Координата X или Point, или Объект типа {}
 * @param {Number | null} [newY] - Координата Y
 * @param {Number | null} [duration] - Длительность перемещения
 * @param {Number | null} [newOpacity] - Новая прозрачность
 * @param {Number | null} [newScaleX] - Новое масштабирование по X
 * @param {Number | null} [newScaleY] - Новое масштабирование по Y
 *
 * @param {Number | null} [object.x] - Координата X
 * @param {Number | null} [object.y] - Координата Y
 */
DKTools_Window.prototype.move = function(object, newY, duration, newOpacity) {
    if (object && (object.constructor === Point || object.constructor === Object)) {
        return Window.prototype.move.call(this, object.x, object.y, this.width, this.height);
    }
    duration = duration || 0;
    if (duration > 0) {
        var newX = (object == null ? this.x : object);
        newY = (newY == null ? this.y : newY);
        newOpacity = (newOpacity == null ? this.opacity : newOpacity);
        return this.addEvent('wait', this._updateMove.bind(this, newX, newY, newOpacity), duration);
    } else {
        var newX = object || 0;
        newY = newY || 0;
        Window.prototype.move.call(this, newX, newY, this.width, this.height);
    }
};

/**
 * Устанавливает ширину и высоту Bitmap, если они отличаются от текущих
 *
 * @method resize
 *
 * @param {Number | null} [width = this.minWidth()] - Ширина Bitmap (The width of the Bitmap)
 * @param {Number | null} [height = this.minHeight()] - Высота Bitmap (The height of the Bitmap)
 * @param {Boolean | null} [blockStart = false] - Блокировка вызова функции start
 *
 * @return {Boolean} Возвращает true, если изменение произошло
 */
DKTools_Window.prototype.resize = function(width, height, blockStart) {
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
 * Returns the minimum width of the window
 *
 * @method minWidth
 * @return Number
*/
DKTools_Window.prototype.minWidth = function() {
    return this.standardPadding() * 2 + DKTools_Base.prototype.minWidth.call(this);
};

/**
 * Возвращает минимальную высоту окна
 * Returns the minimum height of the window
 *
 * @method minHeight
 * @return Number
 */
DKTools_Window.prototype.minHeight = function() {
	return this.standardPadding() * 2 + DKTools_Base.prototype.minHeight.call(this);
};

DKTools_Window.prototype.resetFontSettings = function() {
};

DKTools_Window.prototype.resetTextColor = function() {
};

// load methods

/**
 * Загружает Bitmap из папки
 * Возвращает true, если bitmap был изменен

 * @method loadBitmap
 * @param {String || null} folder - Путь к папке
 * @param {String || null} filename - Имя файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Гладкий
 * @return Bitmap
*/
DKTools_Window.prototype.loadBitmap = function(folder, filename, listener, hue, smooth) {
	var bitmap = ImageManager.loadBitmap(folder, filename, hue, smooth);
	if (listener) {
        bitmap.addLoadListener(listener);
    }
	return bitmap;
};

//

DKTools_Window.prototype.changeTextColor = function(color) {
	//if (this.setTextColor(color, true)) this.updateTextColor();
    return this.setTextColor(color, true);
};

DKTools_Window.prototype.changePaintOpacity = function(object) {
	// совместимость со стандартным changePaintOpacity
	if (object != null && object.constructor === Boolean) {
        return Window_Base.prototype.changePaintOpacity.call(this, object);
    }
	if (this.setPaintOpacity(object, true)) {
        this.updatePaintOpacity();
    }
};

// events methods

DKTools_Window.prototype.updateOpenEvents = function() {
    this.updateEventContainer('open');
};

DKTools_Window.prototype.updateCloseEvents = function() {
    this.updateEventContainer('close');
};

// update methods

DKTools_Window.prototype.updateAll = function() {
    this.updateTone();
    this.updateOpacity();
    DKTools_Base.prototype.updateAll.call(this);
};

/**
 * Обновление тона окна

 * @method updateTone
*/
DKTools_Window.prototype.updateTone = function() {
	Window.prototype.setTone.call(this, this._tone[0], this._tone[1], this._tone[2]);
};

/**
 * Обновление прозрачности окна

 * @method updateOpacity
*/
DKTools_Window.prototype.updateOpacity = function() {
	this.opacity = this._opacity[0];
	this.contentsOpacity = this._opacity[1];
	this.backOpacity = this._opacity[2];
};

/**
 * Обновление открытия окна

 * @method updateOpen
*/
DKTools_Window.prototype.updateOpen = function() {
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
 * Обновление закрытия окна

 * @method updateClose
*/
DKTools_Window.prototype.updateClose = function() {
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
 * Обновляет окно
 *
 * @method update
 */
DKTools_Window.prototype.update = function() {
	Window.prototype.update.call(this);
    this.updateEvents();
	this.updateOpen();
	this.updateClose();
	this.updateBackgroundDimmer();
};





/**
 * @class DKTools_Window_Selectable
 * @constructor
 * @param {Number} x - Координата X (The x coordinate for the upper-left corner)
 * @param {Number} y - Координата Y (The y coordinate for the upper-left corner)
 * @param {Number} width - Ширина окна (The width of the window)
 * @param {Number} height - Высота окна (The height of the window)
 */
function DKTools_Window_Selectable_Test() {
    this.initialize.apply(this, arguments);
}

DKTools_Window_Selectable_Test.prototype = Object.create(DKTools_Window.prototype);
DKTools_Window_Selectable_Test.prototype.constructor = DKTools_Window_Selectable_Test;

// create methods

DKTools_Window_Selectable_Test.prototype._createContentsSprite = function() {
    this._windowContentsSprite = new DKTools_Selectable_Container_Base();
};





/**
 * @class DKTools_Window_Selectable
 * @constructor
 * @param {Number} x - Координата X (The x coordinate for the upper-left corner)
 * @param {Number} y - Координата Y (The y coordinate for the upper-left corner)
 * @param {Number} width - Ширина окна (The width of the window)
 * @param {Number} height - Высота окна (The height of the window)
 */
function DKTools_Window_Tab_Test() {
    this.initialize.apply(this, arguments);
}

DKTools_Window_Tab_Test.prototype = Object.create(DKTools_Window.prototype);
DKTools_Window_Tab_Test.prototype.constructor = DKTools_Window_Tab_Test;

// create methods

DKTools_Window_Tab_Test.prototype._createContentsSprite = function() {
    this._windowContentsSprite = new DKTools_Container_Base();
};



//===========================================================================
// NOT READY
//===========================================================================
// DK Tools Window Selectable
//===========================================================================

/**
 * @class DKTools_Window_Selectable
 * @constructor
 * @param {Number} x - Координата X (The x coordinate for the upper-left corner)
 * @param {Number} y - Координата Y (The y coordinate for the upper-left corner)
 * @param {Number} width - Ширина окна (The width of the window)
 * @param {Number} height - Высота окна (The height of the window)
*/
function DKTools_Window_Selectable() {
	this.initialize.apply(this, arguments);
}

DKTools_Window_Selectable.prototype = Object.create(DKTools_Window.prototype);
DKTools_Window_Selectable.prototype.constructor = DKTools_Window_Selectable;

// standard methods

DKTools_Window_Selectable.prototype.standardActive = function() {
    return false;
};

/**
 * Возвращает стандартное значение рядов
 *
 * @method standardRows
 * @return Number
 */
DKTools_Window_Selectable.prototype.standardRows = DKTools_Container_Base.prototype.standardRows;

/**
 * Возвращает стандартное количество столбцов
 *
 * @method standardCols
 * @return Number
 */
DKTools_Window_Selectable.prototype.standardCols = DKTools_Container_Base.prototype.standardCols;

DKTools_Window_Selectable.prototype.standardIndex = function() {
    return -1;
};

// setup methods

DKTools_Window_Selectable.prototype.setupAll = function(object) {
    object = object || {};
    DKTools_Window.prototype.setupAll.call(this, object);
    this.setupRows(object.rows);
    this.setupCols(object.cols);
    this.setupIndex(object.index);
};

DKTools_Window_Selectable.prototype.setupRows = DKTools_Container_Base.prototype.setupRows;

DKTools_Window_Selectable.prototype.setupCols = DKTools_Container_Base.prototype.setupCols;

DKTools_Window_Selectable.prototype.setupIndex = function(index) {
    this._index = (index == null ? this.standardIndex() : index);
};

// set methods

DKTools_Window_Selectable.prototype.setAll = function(object, blockStart) {
};

DKTools_Window_Selectable.prototype.setIndex = function(index) {
};

DKTools_Window_Selectable.prototype.setCursorFixed = function(cursorFixed) {
};

DKTools_Window_Selectable.prototype.setCursorAll = function(cursorAll) {
};

DKTools_Window_Selectable.prototype.setHelpWindow = function(window) {
    this._helpWindow = window;
};

// other methods

DKTools_Window_Selectable.prototype.clearAll = function() {
    DKTools_Window.prototype.clearAll.call(this);
    this.clearHandlers();
    this.clearHelpWindow();
    this._scrollX = 0;
    this._scrollY = 0;
};

DKTools_Window_Selectable.prototype.clearHandlers = function() {
    this._handlers = {};
};

DKTools_Window_Selectable.prototype.clearHelpWindow = function() {
    this._helpWindow = null;
};

//

DKTools_Window_Selectable.prototype._setupEvents = function() {
    this.contentsSprite.addEventHandler('click', this._onTouch.bind(this));
};

DKTools_Window_Selectable.prototype._onTouch = function(event) {
    var lastIndex = this.index();
    var x = this.clickX;
    var y = this.clickY;
    var hitIndex = this.hitTest(x, y);
    if (hitIndex >= 0) {
        p(hitIndex);
    //    if (hitIndex === this.index()) {
    //        if (triggered && this.isTouchOkEnabled()) {
    //            this.processOk();
    //        }
    //    } else if (this.isCursorMovable()) {
    //        this.select(hitIndex);
    //    }
    //} else if (this._stayCount >= 10) {
    //    if (y < this.padding) {
    //        this.cursorUp();
    //    } else if (y >= this.height - this.padding) {
    //        this.cursorDown();
    //    }
    }
    if (this.index() !== lastIndex) {
        this.playCursorSound();
    }
};

DKTools_Window_Selectable.prototype.hitTest = function(x, y) {
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            var rect = this.itemRect(index);
            var right = rect.x + rect.width;
            var bottom = rect.y + rect.height;
            if (x >= rect.x && y >= rect.y && x < right && y < bottom) {
                return index;
            }
        }
    }
    return -1;
};

DKTools_Window_Selectable.prototype.itemWidth = Window_Selectable.prototype.itemWidth;
DKTools_Window_Selectable.prototype.itemHeight = Window_Selectable.prototype.itemHeight;
DKTools_Window_Selectable.prototype.topRow = Window_Selectable.prototype.topRow;
DKTools_Window_Selectable.prototype.maxTopRow = Window_Selectable.prototype.maxTopRow;
DKTools_Window_Selectable.prototype.setTopRow = Window_Selectable.prototype.setTopRow;
DKTools_Window_Selectable.prototype.resetScroll = Window_Selectable.prototype.resetScroll;
DKTools_Window_Selectable.prototype.maxPageRows = Window_Selectable.prototype.maxPageRows;
DKTools_Window_Selectable.prototype.maxPageItems = Window_Selectable.prototype.maxPageItems;
DKTools_Window_Selectable.prototype.isHorizontal = Window_Selectable.prototype.isHorizontal;
DKTools_Window_Selectable.prototype.bottomRow = Window_Selectable.prototype.bottomRow;
DKTools_Window_Selectable.prototype.setBottomRow = Window_Selectable.prototype.setBottomRow;
DKTools_Window_Selectable.prototype.topIndex = Window_Selectable.prototype.topIndex;
DKTools_Window_Selectable.prototype.itemRect = Window_Selectable.prototype.itemRect;
DKTools_Window_Selectable.prototype.itemRectForText = Window_Selectable.prototype.itemRectForText;

DKTools_Window_Selectable.prototype.maxItems = Window_Selectable.prototype.maxItems;

DKTools_Window_Selectable.prototype.spacing = Window_Selectable.prototype.spacing;

DKTools_Window_Selectable.prototype.maxRows = function() {
    return this._rows;
};

DKTools_Window_Selectable.prototype.maxCols = function() {
    return this._cols;
};

DKTools_Window_Selectable.prototype.index = Window_Selectable.prototype.index;


DKTools_Window_Selectable.prototype.cursorFixed = Window_Selectable.prototype.cursorFixed;

DKTools_Window_Selectable.prototype.cursorAll = Window_Selectable.prototype.cursorAll;

DKTools_Window_Selectable.prototype.row = function(index) {
    var index = (index == null ? this.index() : index);
    return Math.floor(index / this.maxCols());
};

DKTools_Window_Selectable.prototype.select = function(index) {
    this.setupIndex(index);
    this.updateCursor();
    this.callUpdateHelp();
};

DKTools_Window_Selectable.prototype.reselect = Window_Selectable.prototype.reselect;

DKTools_Window_Selectable.prototype.deselect = Window_Selectable.prototype.deselect;

DKTools_Window_Selectable.prototype.activate = function() {
    DKTools_Window.prototype.activate.call(this);
    this.reselect();
};

DKTools_Window_Selectable.prototype.deactivate = function() {
    DKTools_Window.prototype.deactivate.call(this);
    this.reselect();
};

//DKTools_Window_Selectable.prototype.updateCursor = function() {
//};

DKTools_Window_Selectable.prototype.playOkSound = Window_Selectable.prototype.playOkSound;

DKTools_Window_Selectable.prototype.playBuzzerSound = Window_Selectable.prototype.playBuzzerSound;

DKTools_Window_Selectable.prototype.playCursorSound = function() {
    SoundManager.playCursor();
};

//

DKTools_Window_Selectable.prototype.hasHelpWindow = function() {
    return !!this._helpWindow;
};

DKTools_Window_Selectable.prototype.callUpdateHelp = function() {
    if (this.hasHelpWindow()) {
        this._helpWindow.update(); // ??? update ? refresh ? only my windows ?
    }
};

DKTools_Window_Selectable.prototype.showHelpWindow = function() {
    if (this.hasHelpWindow()) {
        this._helpWindow.show();
    }
};

DKTools_Window_Selectable.prototype.hideHelpWindow = function() {
    if (this.hasHelpWindow()) {
        this._helpWindow.hide();
    }
};

// draw methods

DKTools_Window_Selectable.prototype.drawItem = function(item) {
};

DKTools_Window_Selectable.prototype.drawAllItems = function() {
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};

DKTools_Window_Selectable.prototype.clearItem = function(index) { // добавить сам item
    var rect = this.itemRect(index);
    this.clearRect(rect);
};

DKTools_Window_Selectable.prototype.redrawItem = Window_Selectable.prototype.redrawItem;

DKTools_Window_Selectable.prototype.redrawCurrentItem = Window_Selectable.prototype.redrawCurrentItem;

DKTools_Window_Selectable.prototype.refresh = function() {
    if (this.hasBitmap()) {
        this.clear(); // мб добавить updateBitmap
        this.drawAllItems();
    }
};

// is method

DKTools_Window_Selectable.prototype.isCursorMovable = Window_Selectable.prototype.isCursorMovable;

//

DKTools_Window_Selectable.prototype.isCursorVisible = Window_Selectable.prototype.isCursorVisible;

DKTools_Window_Selectable.prototype.updateCursor = Window_Selectable.prototype.updateCursor;

DKTools_Window_Selectable.prototype.update = function() {
    DKTools_Window.prototype.update.call(this);
    //this.updateArrows();
    this.processCursorMove();
    //this.processHandling();
    //this.processWheel();
    //this.processTouch();
    //this._stayCount++;
};

DKTools_Window_Selectable.prototype.processCursorMove = function() {
    if (this.isCursorMovable()) {
        var lastIndex = this.index();
        //if (Input.isRepeated('down')) {
        //    this.cursorDown(Input.isTriggered('down'));
        //}
        //if (Input.isRepeated('up')) {
        //    this.cursorUp(Input.isTriggered('up'));
        //}
        //if (Input.isRepeated('right')) {
        //    this.cursorRight(Input.isTriggered('right'));
        //}
        //if (Input.isRepeated('left')) {
        //    this.cursorLeft(Input.isTriggered('left'));
        //}
        //if (!this.isHandled('pagedown') && Input.isTriggered('pagedown')) {
        //    this.cursorPagedown();
        //}
        //if (!this.isHandled('pageup') && Input.isTriggered('pageup')) {
        //    this.cursorPageup();
        //}
        if (this.index() !== lastIndex) {
            this.playCursor();
        }
    }
};





//===========================================================================
// Элементы, основанные на DKTools_Window
// Elements based on DKTools_Window
//===========================================================================




//===========================================================================
// NOT READY
//===========================================================================
// DK Tools Scene
//===========================================================================

function DKTools_Scene_Base() {
	this.initialize.apply(this, arguments);
}

DKTools_Scene_Base.prototype = Object.create(Scene_Base.prototype);
DKTools_Scene_Base.prototype.constructor = DKTools_Scene_Base;

// create methods

DKTools_Scene_Base.prototype.create = function() {
	this.createBackground();
	this.createWindowLayer();
	this.createAllWindows();
};

DKTools_Scene_Base.prototype.createBackground = function() {
};

DKTools_Scene_Base.prototype.createAllWindows = function() {
};

// remove methods

DKTools_Scene_Base.prototype.removeWindow = function(window) {
	this._windowLayer.removeChild(window);
};

// update methods

DKTools_Scene_Base.prototype.update = function() {
    Scene_Base.prototype.update.call(this);
    this.updateEvents();
};

DKTools_Scene_Base.prototype.updateEvents = function() {
    // input events
    // if Input.isTriggered(symbol) updateEvent...
};