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
    update_required: {
        ru: 'Требуется обновить плагин "DKTools" до минимальной версии',
        en: 'Required to update the plugin "DKTools" to minimal version'
    },
    installed_version: {
        ru: 'Установлено',
        en: 'Installed'
    },
    checkbox_standard_checked_text: {
        ru: 'Да',
        en: 'Yes'
    },
    checkbox_standard_unchecked_text: {
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
 2. DKTools_Text
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
 20. DKTools_Window_Base
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
 2. DKTools_Text
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
 20. DKTools_Window_Base
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

DKToolsUtils.booleanArray = function() {
    var array = [];
    for(var locale in DKToolsUtils.boolean) {
        array = array.concat(DKToolsUtils.boolean[locale]);
    }
    return array;
};

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

DKToolsUtils.splitString = function(string) {
    string = string.replace(/\s*\,\s*/g, ',');
    return string.split(',');
};

DKToolsUtils.stringToNumberArray = function(object) {
    if (!object) {
        return [];
    }
    if (object instanceof String) {
        object = this.splitString(object);
    }
    return object.map(function(value) {
        return Number(value);
    });
};

DKToolsUtils.stringToBooleanArray = function(object) {
    if (!object) {
        return [];
    }
    if (object instanceof String) {
        object = this.splitString(object);
    }
    return object.map(function(value) {
        return this.toBoolean(value);
    }, this);
};

DKToolsUtils.stringToFontArray = function(object) {
    var standardFontArray = this.standardFontArray();
    if (!object || object.length === 0) {
        return standardFontArray;
    }
    if (object instanceof String) {
        object = this.splitString(object);
    }
    var array = [];
    array[0] = (object[0] === '-1' ? standardFontArray[0] : object[0]);
    array[1] = this.toBoolean(object[1]);
    array[2] = (object[2] === '-1' ? standardFontArray[2] : Number(object[2]));
    return array;
};

DKToolsUtils.standardFontName = function() {
    return 'GameFont';
};

DKToolsUtils.standardFontItalic = function() {
    return false;
};

DKToolsUtils.standardFontSize = function() {
    return 28;
};

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
    var keys = Object.getOwnPropertyNames(source), key, prop;
    keys.forEach(function(key) {
        var property = Object.getOwnPropertyDescriptor(source, key);
        Object.defineProperty(target, key, property);
    });
};

DKToolsUtils._checkVersion = function() {
    var data = [];
    for(var plugin in DKToolsVersion) {
        var version = DKToolsVersion[plugin];
        data.push(version);
    }
    var max = Math.max.apply(Math, data);
    var error = DKLocalizationManager.DKTools('#update_required#: %1 (#installed_version#: %2)', [max, DKVersion.DKTools]);
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

DKToolsInputManager._isIgnored = function(keyCode) {
	return DKToolsInputManager._ignoredKeyCodes.contains(keyCode);
};

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

DKToolsInputManager.clear = function() {
	this._text = '';
};

DKToolsInputManager.hasText = function() {
	return !!this._text;
};

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

if (DKToolsUtils.debug) {

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

    Bitmap.prototype.strokeRect = function (x, y, width, height, color) {
        var context = this._context;
        context.save();
        context.strokeStyle = color;
        context.strokeRect(x, y, width, height);
        context.restore();
        this._setDirty();
    };

    Bitmap.prototype.drawLine = function (x1, y1, x2, y2, color) {
        var context = this._context;
        context.save();
        context.strokeStyle = color;
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        context.restore();
        this._setDirty();
    };

    Bitmap.prototype.fillArc = function (x, y, radius, start_angle, end_angle, color, anti_clock_wise) {
        var context = this._context;
        context.save();
        context.fillStyle = color;
        context.arc(x, y, radius, start_angle, end_angle, anti_clock_wise);
        context.fill();
        context.restore();
        this._setDirty();
    };

    Bitmap.prototype.strokeArc = function (x, y, radius, start_angle, end_angle, color, anti_clock_wise) {
        var context = this._context;
        context.save();
        context.strokeStyle = color;
        context.arc(x, y, radius, start_angle, end_angle, anti_clock_wise);
        context.stroke();
        context.restore();
        this._setDirty();
    };

}

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
                if (!(this[i] instanceof Number)) {
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
                if (!(this[i] instanceof Boolean)) {
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
 * @method continue
 */
DKToolsEvent.prototype.continue = function() {
    this._pauseDuration = 0;
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
// DK Tools Sprite
//===========================================================================

function DKTools_Sprite() {
	this.initialize.apply(this, arguments);
}

DKTools_Sprite.prototype = Object.create(Sprite.prototype);
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
    this.clearAll();
	var x = object, bitmap;
    if (object) {
        if (object.constructor === Object) {
            x = object.x;
            y = object.y || y;
            width = object.width || width;
            height = object.height || height;
            bitmap = this.bitmapFromObject(object.bitmap);
        }
        if (object.constructor === Bitmap) {
            bitmap = object;
        }
    }
	this.move(x, y);
    this.setupAll(object);
	this.setupSize(width, height);
	this.setupBitmap(bitmap);
    this.setupLongPressInterval();
    DKTools_Sprite._counter++;
	this._started = false;
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
 * Возвращает стандартную видимость спрайта
 *
 * @method standardVisible
 * @return {Boolean} Стандартная видимость спрайта
*/
DKTools_Sprite.prototype.standardVisible = function() {
	return true;
};

/**
 * Возвращает стандартное значение активности спрайта
 *
 * @method standardActive
 * @return {Boolean} Стандартное значение активности спрайта
 */
DKTools_Sprite.prototype.standardActive = function() {
    return true;
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
 * Возвращает стандартный цвет текста
 *
 * @method standardTextColor
 * @return {String} Стандартный цвет текста
*/
DKTools_Sprite.prototype.standardTextColor = function() {
	return '#ffffff';
};

/**
 * Возвращает стандартный X текста
 *
 * @method standardTextX
 * @return {Number} Стандартная координата X текста
*/
DKTools_Sprite.prototype.standardTextX = function() {
	return 0;
};

/**
 * Возвращает стандартный Y текста
 *
 * @method standardTextY
 * @return {Number} Стандартная координата Y текста
*/
DKTools_Sprite.prototype.standardTextY = function() {
	return 0;
};

/**
 * Возвращает стандартную ширину текста
 *
 * @method standardTextWidth
 * @return {Number} Стандартная ширина текста
 */
DKTools_Sprite.prototype.standardTextWidth = function() {
    return this._bitmapWidth;
};

/**
 * Возвращает стандартную высоту текста
 *
 * @method standardTextHeight
 * @return {Number} Стандартная высота текста
 */
DKTools_Sprite.prototype.standardTextHeight = function() {
    return this._bitmapHeight;
};

/**
 * Возвращает стандартное выравнивание текста
 *
 * @method standardAlign
 * @return {String} Стандартное выравнивание текста
 */
DKTools_Sprite.prototype.standardAlign = function() {
    return 'center';
};

/**
 * Возвращает стандартный цвет фона
 *
 * @method standardBackgroundColor
 * @return {null} Стандартный цвет фона
 */
DKTools_Sprite.prototype.standardBackgroundColor = function() {
    return null;
};

/**
 * Возвращает стандартное имя шрифта
 *
 * @method standardFontName
 * @return {String} Стандартное имя шрифта
*/
DKTools_Sprite.prototype.standardFontName = function() {
	return 'GameFont';
};

/**
 * Возвращает стандартное значение для курсива
 *
 * @method standardFontItalic
 * @return {Boolean} Стандартное значение для курсива
*/
DKTools_Sprite.prototype.standardFontItalic = function() {
	return false;
};

/**
 * Возвращает стандартный размер шрифта
 *
 * @method standardFontSize
 * @return {Number} Стандартный размер шрифта
*/
DKTools_Sprite.prototype.standardFontSize = function() {
	return 28;
};

/**
 * Возвращает стандартный шрифт текста
 *
 * @method standardFont
 * @return {Array} Стандартный шрифт текста
*/
DKTools_Sprite.prototype.standardFont = function() {
	return [this.standardFontName(), this.standardFontItalic(), this.standardFontSize()];
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

// setup methods

DKTools_Sprite.prototype.setup = function(type, value) {
    type = type.charAt(0).toUpperCase() + type.substr(1);
    var func = 'setup%1'.format(type);
    this[func](value);
};

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
    this.setupId(object.id);
    this.setupVisible(object.visible);
    this.setupActive(object.active);
    this.setupGraphic(object.graphic);
	this.setupTextColor(object.textColor);
	this.setupAlign(object.align);
	this.setupBackgroundColor(object.backgroundColor);
	this.setupFont(object.font);
	this.setupOpacity(object.opacity);
    this.setupScale(object.scale);
};

/**
 * Устанавливает ширину Bitmap
 *
 * @method setupWidth
 * @param {Number | null} [width = null] - Ширина Bitmap
*/
DKTools_Sprite.prototype.setupWidth = function(width) {
    var minWidth = this.minWidth();
    var maxWidth = this.maxWidth();
	this._bitmapWidth = (width ? width.clamp(minWidth, maxWidth) : minWidth);
};

/**
 * Устанавливает высоту Bitmap
 *
 * @method setupHeight
 * @param {Number || null} [height = null] - Высота Bitmap
*/
DKTools_Sprite.prototype.setupHeight = function(height) {
    var minHeight = this.minHeight();
    var maxHeight = this.maxHeight();
	this._bitmapHeight = (height ? height.clamp(minHeight, maxHeight) : minHeight);
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
 * Устанавливает ID спрайта
 *
 * @method setupId
 * @param {Number | String | null} [id = null] - ID спрайта
 */
DKTools_Sprite.prototype.setupId = function(id) {
    this.id = (id == null ? null : id);
};

/**
 * Устанавливает видимость спрайта
 *
 * @method setupVisible
 * @param {Boolean | null} [visible = null] - Видимость спрайта
*/
DKTools_Sprite.prototype.setupVisible = function(visible) {
	this.visible = (visible == null ? this.standardVisible() : visible);
};

/**
 * Устанавливает активность спрайта
 *
 * @method setupActive
 * @param {Boolean | null} [active = null] - Активность спрайта
 */
DKTools_Sprite.prototype.setupActive = function(active) {
    this._active = (active == null ? this.standardActive() : active);
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
 * Устанавливает цвет текста
 *
 * @method setupTextColor
 * @param {String | null} [textColor = null] - Цвет текста
*/
DKTools_Sprite.prototype.setupTextColor = function(textColor) {
	this._textColor = textColor || this.standardTextColor();
};

/**
 * Устанавливает выравнивание текста
 *
 * @method setupAlign
 * @param {String | null} [align = null] - Выравнивание текста
*/
DKTools_Sprite.prototype.setupAlign = function(align) {
	this._align = align || this.standardAlign();
};

/**
 * Устанавливает цвет фона
 *
 * @method setupBackgroundColor
 * @param {String | null} [color = null] - Цвет фона
*/
DKTools_Sprite.prototype.setupBackgroundColor = function(color) {
	this._backgroundColor = (color == null ? this.standardBackgroundColor() : color);
};

/**
 * Устанавливает шрифт текста
 *
 * @method setupFont
 * @param {Array | null} [font = null] - Шрифт текста
*/
DKTools_Sprite.prototype.setupFont = function(font) {
    this._font = this._checkFont(this._font, font);
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
    if (object && (object.constructor === Point || object.constructor === Object)) {
        return this.setupScale(object.x, object.y);
    }
    var standardScale = this.standardScale();
    var x = object || standardScale.x;
    y = y || standardScale.y;
    this.scale.x = x;
    this.scale.y = y;
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
    var x = object;
    this._coldFrame = new Rectangle(x, y, width, height);
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
        return this.setupColdFrame(object.x, object.y, object.width, object.height);
    }
    var x = object;
    this._hotFrame = new Rectangle(x, y, width, height);
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
    var x = object || 1;
    y = y || 1;
    this._coldScale = new Point(x, y);
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
    var x = object || 1;
    y = y || 1;
    this._hotScale = new Point(x, y);
};

/**
 * Устанавливает прозрачность для ненажатого состояния
 *
 * @method setupColdOpacity
 * @param {Number | null} opacity = null] - Прозрачность спрайта
 */
DKTools_Sprite.prototype.setupColdOpacity = function(opacity) {
    this._coldOpacity = (opacity == null ? null : opacity);
};

/**
 * Устанавливает прозрачность для нажатого состояния
 *
 * @method setupHotOpacity
 * @param {Number | null} [opacity = null] - Прозрачность спрайта
 */
DKTools_Sprite.prototype.setupHotOpacity = function(opacity) {
    this._hotOpacity = (opacity == null ? null : opacity);
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
	var changed = 0;
	var block = true;
    this._activateSetAllMode();
    if (this.setGraphic(object.graphic, block)) {
        changed++;
    }
	if (this.setTextColor(object.textColor, block)) {
        changed++;
    }
	if (this.setAlign(object.align, block)) {
        changed++;
    }
	if (this.setBackgroundColor(object.backgroundColor, block)) {
        changed++;
    }
	if (this.setFont(object.font, block)) {
        changed++;
    }
	if (changed && !blockStart) {
        this.start();
    }
	if (this.setOpacity(object.opacity)) {
        changed++;
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
 * Изменяет видимость спрайта
 *
 * @method setVisible
 *
 * @param {Boolean | null} [visible = null] - Видимость спрайта
 *
 * @return {Boolean} Возвращает true, если изменение произошло
*/
DKTools_Sprite.prototype.setVisible = function(visible) {
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
DKTools_Sprite.prototype.setActive = function(active) {
    if (this._active === active) {
        return false;
    }
    var lastActive = this._active;
    this.setupActive(active);
    return lastActive !== this._active;
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
DKTools_Sprite.prototype.setTextColor = function(color, blockUpdate) {
	if (this._textColor === color) {
        return false;
    }
	var lastColor = this._textColor;
	this.setupTextColor(color);
	if (lastColor === this._textColor) {
        return false;
    }
	if (!blockUpdate) {
        this.updateBitmap();
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
DKTools_Sprite.prototype.setAlign = function(align, blockUpdate) {
	if (this._align === align) {
        return false;
    }
	var lastAlign = this._align;
	this.setupAlign(align);
	if (lastAlign === this._align) {
        return false;
    }
	if (!blockUpdate) {
        this.updateBitmap();
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
DKTools_Sprite.prototype.setBackgroundColor = function(color, blockUpdate) {
	if (this._backgroundColor === color) {
        return false;
    }
	var lastColor = this._backgroundColor;
	this.setupBackgroundColor(color);
	if (lastColor === this._backgroundColor) {
        return false;
    }
	if (!blockUpdate) {
        this.updateBitmap();
    }
	return true;
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
DKTools_Sprite.prototype.setFont = function(font, blockStart) {
	font = font || this.standardFont();
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
    if (object && (object.constructor === Point || object.constructor === Object)) {
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

// other methods

/**
 * Запускает работу спрайта
 * 
 * @method start
 * @param {Boolean || null} activate - Активировать спрайт
*/
DKTools_Sprite.prototype.start = function(activate) {
    this._started = true;
    this.createBitmap();
    this.updateBitmap();
    this.updateStartEvents();
    if (activate) {
        this.activate();
    }
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
DKTools_Sprite.prototype.clearRect = function(object, y, width, height) {
	if (!this.hasBitmap()) {
        return false;
    }
    if (object && (object.constructor === Rectangle || object.constructor === Object)) {
        return this.clearRect(object.x, object.y, object.width, object.height);
    }
	var x = object || 0;
    y = y || 0;
    width = width || this.width;
    height = height || this.height;
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
DKTools_Sprite.prototype.clear = function() {
	return this.clearRect();
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
DKTools_Sprite.prototype.resize = function(width, height, blockStart) {
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
    var object = {
        x: this.x,
        y: this.y,
        width: this._bitmapWidth,
        height: this._bitmapHeight,
        id: this.id,
        visible: this.visible,
        active: this._active,
        graphic: this._graphic,
        textColor: this._textColor,
        align: this._align,
        backgroundColor: this._backgroundColor,
        font: this._font,
        opacity: this.opacity
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
DKTools_Sprite.prototype.clone = function(blockStart) {
    var object = this.object();
    var sprite = new (this.constructor)(object);
    if (this.bitmap && this.isFixed()) {
        sprite.setupBitmap(this.bitmap.clone());
    }
    if (!blockStart) {
        sprite.start();
    }
    return sprite;
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
DKTools_Sprite.prototype.bitmapFromObject = function(object) {
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
 * Возвращает минимальную ширину Bitmap
 * Returns the minimum width of the Bitmap
 *
 * @method minWidth
 * @return Number
*/
DKTools_Sprite.prototype.minWidth = function() {
	return 1;
};

/**
 * Возвращает минимальную высоту Bitmap
 * Returns the minimum height of the Bitmap
 *
 * @method minHeight
 * @return Number
*/
DKTools_Sprite.prototype.minHeight = function() {
	return 1;
};

/**
 * Возвращает максимальную ширину Bitmap
 *
 * @method maxWidth
 * @return Number
*/
DKTools_Sprite.prototype.maxWidth = function() {
	return Graphics.boxWidth;
};

/**
 * Возвращает максимальную высоту Bitmap
 *
 * @method maxHeight
 * @return Number
*/
DKTools_Sprite.prototype.maxHeight = function() {
	return Graphics.boxHeight;
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
DKTools_Sprite.prototype.textWidth = function(text) {
	if (text == null) {
        return 0;
    }
    text = String(text);
	if (this.bitmap) {
        return this.bitmap.measureTextWidth(text);
    }
	var bitmap = new Bitmap();
	return bitmap.measureTextWidth(text);
};

// private methods

// Может заменить на символы и isEnabled ?

/**
 * Возвращает true, если идет обработка функции setAll
 *
 * @method _isSetAllMode
 *
 * @private
 *
 * @return Boolean
 */
DKTools_Sprite.prototype._isSetAllMode = function() {
    return this._setAllMode;
};

/**
 * Включает режим обработки функции setAll
 *
 * @method _activateSetAllMode
 *
 * @private
 *
 * @return Boolean
 */
DKTools_Sprite.prototype._activateSetAllMode = function() {
    this._setAllMode = true;
};

/**
 * Выключает режим обработки функции setAll
 *
 * @method _deactivateSetAllMode
 *
 * @private
 *
 * @return Boolean
 */
DKTools_Sprite.prototype._deactivateSetAllMode = function() {
    this._setAllMode = false;
};

//

/**
 * Проверяет спрайт на наличие Bitmap
 *
 * @method hasBitmap
 * @return {Boolean} Возвращает true, если Bitmap есть
 */
DKTools_Sprite.prototype.hasBitmap = function() {
    return !!this.bitmap;
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

/**
 * Загружает изображения из названия файла графики
 * Создает Bitmap спрайта шириной _bitmapWidth и высотой _bitmapHeight
 *
 * @method createBitmap
*/
DKTools_Sprite.prototype.createBitmap = function() {
    if (this.hasGraphic()) {
        this._loadGraphic();
    } else if (!this.isFixed()) {
        this.bitmap = new Bitmap(this._bitmapWidth, this._bitmapHeight);
    }
};

// is methods

/**
 * Возвращает true, если спрайт виден
 * 
 * @method isVisible
 * @return Boolean
*/
DKTools_Sprite.prototype.isVisible = function() {
	return this.visible;
};

/**
 * Возвращает true, если спрайт активен
 *
 * @method isActive
 * @return Boolean
 */
DKTools_Sprite.prototype.isActive = function() {
    return Sprite_Button.prototype.isActive.call(this) && this._active;
};

/**
 * Возвращает true, если спрайт виден и активен
 *
 * @method isVisibleAndActive
 * @return Boolean
 */
DKTools_Sprite.prototype.isVisibleAndActive = function() {
    return this.isVisible() && this.isActive();
};

/**
 * Возвращает true, если работа спрайта была запущена
 * 
 * @method isStarted
 * @return Boolean
*/
DKTools_Sprite.prototype.isStarted = function() {
	return this._started;
};

/**
 * Возвращает true, если у спрайта есть события-ожидания
 *
 * @method isWaiting
 * @return Boolean
 */
DKTools_Sprite.prototype.isWaiting = function() {
    return this.hasEvents('wait');
};

/**
 * Возвращает true, если Bitmap готов
 * 
 * @method isReady
 * @return Boolean
*/
DKTools_Sprite.prototype.isReady = function () {
	return this.hasBitmap() ? this.bitmap.isReady() : false;
};

/**
 * Возвращает true, если спрайт занят
 *
 * @method isBusy
 * @return Boolean
 */
DKTools_Sprite.prototype.isBusy = function() {
    return this.isWaiting() && !this.isReady();
};

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
 * @method isFixed
 * @return {Boolean} Возвращает true, если Bitmap был установлен функцией setupBitmap или setBitmap
*/
DKTools_Sprite.prototype.isFixed = function() {
    return this._fixedBitmap;
};

// clear methods

/**
 * Очищает все данные спрайта
 *
 * @method clearAll
 */
DKTools_Sprite.prototype.clearAll = function() {
    this.clearEvents();
    this.clearSymbols();
    this._clearEnteredTime();
    this._clearPressedTime();
};

/**
 * Очищает события спрайта
 *
 * @method clearEvents
 * @param {Array | String | null} [object = null] - Массив с типами событий или тип события
 */
DKTools_Sprite.prototype.clearEvents = function(object) {
    if (object) {
        if (object.constructor === Array) {
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
DKTools_Sprite.prototype.clearSymbols = function() {
    this._symbols = {};
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

// draw methods

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
DKTools_Sprite.prototype.fillRect = function(color, object, y, width, height) {
	if (!this.hasBitmap()) {
        return false;
    }
    if (object && (object.constructor === Rectangle || object.constructor === Object)) {
        return this.fillRect(color, object.x, object.y, object.width, object.height);
    }
	var x = object || 0;
    y = y || 0;
    width = width || this._bitmapWidth;
    height = height || this._bitmapHeight;
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
DKTools_Sprite.prototype.fillAll = function(color) {
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
DKTools_Sprite.prototype.gradientFillRect = function(color1, color2, vertical, object, y, width, height) {
	if (!this.hasBitmap()) {
        return false;
    }
    if (object && object.constructor === Rectangle) {
        return this.gradientFillRect(color1, color2, vertical, object.x, object.y, object.width, object.height);
    }
	var x = object || 0;
    y = y || 0;
    width = width || this._bitmapWidth;
    height = height || this._bitmapHeight;
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
DKTools_Sprite.prototype.gradientFillAll = function(color1, color2, vertical) {
	return this.gradientFillAll(color1, color2, vertical);
};

if (DKToolsUtils.debug) {

    DKTools_Sprite.prototype.strokeRect = function(color, object, y, width, height) {
        if (!this.hasBitmap()) return false;
        var x = object;
        if (object && object.constructor === Rectangle) {
            x = object.x;
            y = object.y;
            width = object.width;
            height = object.height;
        }
        this.bitmap.strokeRect(x || 0, y || 0, width || this._bitmapWidth, height || this._bitmapHeight, color || '#ffffff');
        return true;
    };

    DKTools_Sprite.prototype.fillArc = function () {
    };

    DKTools_Sprite.prototype.strokeArc = function () {
    };

    DKTools_Sprite.prototype.drawLine = function (x1, y1, x2, y2, color) {
        if (!this.hasBitmap()) {
            return false;
        }
        this.bitmap.drawLine(x1, y1, x2, y2, color);
        return true;
    };

}

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
DKTools_Sprite.prototype.drawText = function(text, align, object, y, width, height) {
    text = String(text);
	if (!this.hasBitmap() || !text) {
        return false;
    }
    if (object && (object.constructor === Rectangle || object.constructor === Object)) {
        return this.drawText(text, align, object.x, object.y, object.width, object.height);
    }
	var x = (object == null ? this.standardTextX() : object);
    y = (y == null ? this.standardTextY() : y);
    width = width || this.standardTextWidth();
    height = height || this.standardTextHeight();
    align = align || this.align || this.standardAlign();
	this.bitmap.drawText(text, x, y, width, height, align);
	return true;
};

if (DKToolsUtils.debug) {

    DKTools_Sprite.prototype.drawTextEx = function(text, x, y) {
        if (text) {
            var textState = {
                index: 0,
                x: x,
                y: y,
                left: x
            };
            textState.text = this.convertEscapeCharacters(text);
            textState.height = this.calcTextHeight(textState, false);
            while (textState.index < textState.text.length) {
                this.processCharacter(textState);
            }
            return textState.x - x;
        } else {
            return 0;
        }
    };

    DKTools_Sprite.prototype.convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;

    DKTools_Sprite.prototype.actorName = Window_Base.prototype.actorName;

    DKTools_Sprite.prototype.partyMemberName = Window_Base.prototype.partyMemberName;

    DKTools_Sprite.prototype.processCharacter = Window_Base.prototype.processCharacter;

    DKTools_Sprite.prototype.processNormalCharacter = function(textState) {
        var text = textState.text[textState.index++];
        var width = this.textWidth(text);
        var align = 'left';
        this.drawText(text, align, textState.x, textState.y, width * 2, textState.height);
        textState.x += width;
    };

    DKTools_Sprite.prototype.processNewLine = Window_Base.prototype.processNewLine;

    DKTools_Sprite.prototype.processNewPage = Window_Base.prototype.processNewPage;

    DKTools_Sprite.prototype.obtainEscapeCode = Window_Base.prototype.obtainEscapeCode;

    DKTools_Sprite.prototype.obtainEscapeParam = Window_Base.prototype.obtainEscapeParam;

    DKTools_Sprite.prototype.processEscapeCharacter = function(code, textState) {
        switch (code) {
            case 'C':
                //this.changeTextColor(this.textColor(this.obtainEscapeParam(textState)));
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

    DKTools_Sprite.prototype.processDrawIcon = Window_Base.prototype.processDrawIcon;

    DKTools_Sprite.prototype.makeFontBigger = function() {
        if (this.bitmap && this.bitmap.fontSize <= 96) {
            this.bitmap.fontSize += 12;
        }
    };

    DKTools_Sprite.prototype.makeFontSmaller = function() {
        if (this.bitmap && this.bitmap.fontSize >= 24) {
            this.bitmap.fontSize -= 12;
        }
    };

    DKTools_Sprite.prototype.calcTextHeight = function(textState, all) {
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

    //DKTools_Sprite.prototype.autoText = function(text, duration) {
    //    this.addEventListener('wait', function() {
    //
    //    }.bind(this));
    //};

}

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
DKTools_Sprite.prototype.drawCircle = function(radius, color, object, y) {
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
DKTools_Sprite.prototype.drawBitmap = function(object, x1, y1, w1, h1, x2, y2, w2, h2) {
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
DKTools_Sprite.prototype.drawIcon = function(iconIndex, object, y) {
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
DKTools_Sprite.prototype.drawFace = function(faceName, faceIndex, object, y, width, height) {
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
DKTools_Sprite.prototype.drawCharacter = function(characterName, characterIndex, object, y) {
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
DKTools_Sprite.prototype.loadAnimation = function(filename, listener, hue, smooth) {
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
DKTools_Sprite.prototype.loadBattleback1 = function(filename, listener, hue, smooth) {
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
DKTools_Sprite.prototype.loadBattleback2 = function(filename, listener, hue, smooth) {
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
DKTools_Sprite.prototype.loadEnemy = function(filename, listener, hue, smooth) {
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
DKTools_Sprite.prototype.loadCharacter = function(filename, listener, hue, smooth) {
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
DKTools_Sprite.prototype.loadFace = function(filename, listener, hue, smooth) {
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
DKTools_Sprite.prototype.loadParallax = function(filename, listener, hue, smooth) {
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
DKTools_Sprite.prototype.loadPicture = function(filename, listener, hue, smooth) {
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
DKTools_Sprite.prototype.loadSvActor = function(filename, listener, hue, smooth) {
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
DKTools_Sprite.prototype.loadSvEnemy = function(filename, listener, hue, smooth) {
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
DKTools_Sprite.prototype.loadSystem = function(filename, listener, hue, smooth) {
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
DKTools_Sprite.prototype.loadTileset = function(filename, listener, hue, smooth) {
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
DKTools_Sprite.prototype.loadTitle1 = function(filename, listener, hue, smooth) {
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
DKTools_Sprite.prototype.loadTitle2 = function(filename, listener, hue, smooth) {
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
DKTools_Sprite.prototype.loadWindowskin = function(filename, listener, hue, smooth) {
	return this.loadSystem(filename || 'Window', listener, hue, smooth);
};

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
        this.loadBitmap(folder, filename);
    }
};

//

/**
 * Активирует спрайт
 *
 * @method activate
 */
DKTools_Sprite.prototype.activate = function() {
    this.setupActive(true);
    this.updateActivateEvents();
    this.updateInputData();
};

/**
 * Деактивирует спрайт
 *
 * @method deactivate
 */
DKTools_Sprite.prototype.deactivate = function() {
    this.setupActive(false);
    this.updateDeactivateEvents();
};

/**
 * Показывает спрайт
 *
 * @method show
 *
 * @param {Number || null} duration - Длительность появления
 * @param {Boolean || null} activate - Активировать спрайта
 */
DKTools_Sprite.prototype.show = function(duration, activate) {
    if (duration > 0) {
        var opacity = 255;
        var handler = this._updateMove.bind(this, this.x, this.y, opacity, this.scale.x, this.scale.y);
        var onStartHandler = function() {
            this.setupVisible(true);
        }.bind(this);
        this.addEvent('wait', handler, duration, onStartHandler);
    } else {
        this.setupVisible(true);
    }
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
DKTools_Sprite.prototype.hide = function(duration, blockDeactivate) {
    if (duration > 0) {
        var opacity = 0;
        var handler = this._updateMove.bind(this, this.x, this.y, opacity, this.scale.x, this.scale.y);
        var onStartHandler = null;
        var onEndHandler = function() {
            this.setupVisible(false);
        }.bind(this);
        this.addEvent('wait', handler, duration, onStartHandler, onEndHandler);
    } else {
        this.setupVisible(false);
    }
    if (!blockDeactivate) {
        this.deactivate();
    }
};

//

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
DKTools_Sprite.prototype._getSymbol = function(symbol) {
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
DKTools_Sprite.prototype._getSymbols = function(object) {
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
DKTools_Sprite.prototype._setSymbol = function(symbol, value) {
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
DKTools_Sprite.prototype.onSymbolChange = function(symbol, value) {
};

DKTools_Sprite.prototype.switchSymbol = function(symbol) {
    var newValue = !this._getSymbol(symbol);
    this._setSymbol(symbol, newValue);
};

DKTools_Sprite.prototype.switchSymbols = function(object) {
    if (arguments.length > 1) {
        for(var i = 0; i < arguments.length; i++) {
            var symbol = arguments[i];
            this.switchSymbol(symbol);
        }
    } else {
        if (object.constructor === Array) {
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
DKTools_Sprite.prototype._enableSymbols = function(object) {
    if (arguments.length > 1) {
        for(var i = 0; i < arguments.length; i++) {
            var symbol = arguments[i];
            this._setSymbol(symbol, true);
        }
    } else {
        if (object.constructor === Array) {
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
DKTools_Sprite.prototype._disableSymbols = function(object) {
    if (arguments.length > 1) {
        for(var i = 0; i < arguments.length; i++) {
            var symbol = arguments[i];
            this._setSymbol(symbol, false);
        }
    } else {
        if (object.constructor === Array) {
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
DKTools_Sprite.prototype.isEnabled = function() {
    var symbols = this._getSymbols.apply(this, arguments);
    return symbols.conjunction();
};

/**
 *
 *
 * @method enable
 *
 */
DKTools_Sprite.prototype.enable = DKTools_Sprite.prototype._enableSymbols;

/**
 *
 *
 * @method disable
 *
 */
DKTools_Sprite.prototype.disable = DKTools_Sprite.prototype._disableSymbols;

//

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

/**
 * Копирует шрифт из source в target
 * Если какие-то значения отсутствуют, они берутся из standardFont
 *
 * @method _checkFont
 * @private
 *
 * @param {Array | null} [target] - Шрифт-цель
 * @param {Array | null} [source] - Шрифт-источник
 * @param {Array | null} [standardFont] - Стандартный шрифт
 *
 * @return {Array} Шрифт текста
 */
DKTools_Sprite.prototype._checkFont = function(target, source, standardFont) {
    standardFont = standardFont || this.standardFont();
    target = target || [];
    source = source || [];
    for(var i = 0; i < 3; i++) {
        target[i] = (source[i] == null ? standardFont[i] : source[i]);
    }
    return target;
};

// update methods

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
 * Обновляет спрайт
 *
 * @method update
*/
DKTools_Sprite.prototype.update = function() {
	Sprite.prototype.update.call(this);
    this.processTouch();
    this.updateEvents();
    this.updateReadyEvents();
    this.updateFreeEvents();
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
DKTools_Sprite.prototype._checkEventContainer = function(type) {
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
DKTools_Sprite.prototype.checkEvents = function() {
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
DKTools_Sprite.prototype.removeEvent = function(event) {
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
DKTools_Sprite.prototype.iterateEventContainer = function(type, callback) {
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
DKTools_Sprite.prototype.eventsIsPaused = function(type) {
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
DKTools_Sprite.prototype.pauseEvents = function(type, duration) {
    var callback = function(event) {
        event.pause(duration);
    }.bind(this);
    this.iterateEventContainer(type, callback);
};

/**
 *
 *
 * @method continueEvents
 * @param {String} type - Тип события
 */
DKTools_Sprite.prototype.continueEvents = function(type) {
    var callback = function(event) {
        event.continue();
    }.bind(this);
    this.iterateEventContainer(type, callback);
};

/**
 * Обновляет события
 *
 * @method updateEvents
 */
DKTools_Sprite.prototype.updateEvents = function() {
    this.checkEvents();
    if (!this.hasEvents()) {
        return;
    }
    if (this.isWaiting()) {
        this.updateWaitEvents();
        return;
    }
    this.updateUpdateEvents();
};

/**
 * Обновляет событие
 *
 * @method updateEvent
 * @param {DKToolsEvent} event - Событие
 */
DKTools_Sprite.prototype.updateEvent = function(event) {
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
DKTools_Sprite.prototype.updateEventContainer = function(type) {
    var callback = function(event) {
        this.updateEvent(event);
    }.bind(this);
    this.iterateEventContainer(type, callback);
};

DKTools_Sprite.prototype.updateWaitEvents = function() {
    var container = this.eventContainerByType('wait');
    var event = container[0];
    this.updateEvent(event);
};

DKTools_Sprite.prototype.updateUpdateEvents = function() {
    this.updateEventContainer('update');
};

DKTools_Sprite.prototype.updateStartEvents = function() {
    if (!this.isStarted()) {
        return;
    }
    this.updateEventContainer('start');
};

DKTools_Sprite.prototype.updateUpdateBitmapEvents = function() {
    this.updateEventContainer('updateBitmap');
};

DKTools_Sprite.prototype.updateReadyEvents = function() {
    if (!this.isReady()) {
        return;
    }
    this.updateEventContainer('ready');
};

DKTools_Sprite.prototype.updateFreeEvents = function() {
    if (this.isBusy()) {
        return;
    }
    this.updateEventContainer('free');
};

DKTools_Sprite.prototype.updateActivateEvents = function() {
    this.updateEventContainer('activate');
};

DKTools_Sprite.prototype.updateDeactivateEvents = function() {
    this.updateEventContainer('deactivate');
};

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

//

/**
 * Создает контейнер для событий
 *
 * @method createEventContainer
 *
 * @param {String} type - Тип события
 *
 * @return {Array} Контейнер для событий
 */
DKTools_Sprite.prototype.createEventContainer = function(type) {
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
DKTools_Sprite.prototype.eventContainerByType = function(type) {
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
DKTools_Sprite.prototype.eventContainer = function(event) {
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
DKTools_Sprite.prototype.eventIndex = function(event) {
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
DKTools_Sprite.prototype.events = function(type) {
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
DKTools_Sprite.prototype.hasEvent = function(event) {
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
DKTools_Sprite.prototype.hasEvents = function(type) {
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
DKTools_Sprite.prototype._createEvent = function(type, handler, duration, onStartHandler, onEndHandler) {
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
DKTools_Sprite.prototype.addEvent = function(type, handler, duration, onStartHandler, onEndHandler) {
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
DKTools_Sprite.prototype.addEventHandler = function(type, handler) {
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
DKTools_Sprite.prototype.addEventListener = function(type, handler) {
    var duration = 1;
    return this.addEvent(type, handler, duration);
};

//

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
 * Заставляет спрайт ждать
 *
 * @method wait
 * @param {Number} duration - Время ожидания в фреймах
 * @param {Function | null} [onEndHandler] - Обработчик окончания работы события
 */
DKTools_Sprite.prototype.wait = function(duration, onEndHandler) {
    var handler = null;
    var onStartHandler = null;
    return this.addEvent('wait', handler, duration, onStartHandler, onEndHandler);
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

/**
 * Обновляет Bitmap спрайта
 *
 * @method updateBitmap
*/
DKTools_Sprite.prototype.updateBitmap = function() {
    if (this.isFixed() || !this.clear()) {
        return;
    }
	this.updateBackground();
	this.updateFont();
	this.updateTextColor();
    this.updateUpdateBitmapEvents();
};

/**
 * Обновляет фон спрайта
 *
 * @method updateBackground
*/
DKTools_Sprite.prototype.updateBackground = function() {
	if (this.backgroundColor) {
        this.fillAll(this.backgroundColor);
    }
};

/**
 * Обновляет шрифт текста
 *
 * @method updateFont
*/
DKTools_Sprite.prototype.updateFont = function() {
	this.bitmap.fontFace = this.font[0];
	this.bitmap.fontItalic = this.font[1];
	this.bitmap.fontSize = this.font[2];
};

/**
 * Обновляет цвет текста
 *
 * @method updateTextColor
*/
DKTools_Sprite.prototype.updateTextColor = function() {
	this.bitmap.textColor = this.textColor;
};

/**
 * Обновляет рамку спрайта
 *
 * @method updateFrame
 */
DKTools_Sprite.prototype.updateFrame = function() {
    var frame = this.isPressed() ? this._hotFrame : this._coldFrame;
    if (frame) {
        this.setFrame(frame.x, frame.y, frame.width, frame.height);
    }
};

/**
 * Обновляет масштабирование спрайта
 *
 * @method updateScale
 */
DKTools_Sprite.prototype.updateScale = function() {
    var scale = this.isPressed() ? this._hotScale : this._coldScale;
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
    var opacity = this.isPressed() ? this._hotOpacity : this._coldOpacity;
    if (opacity != null) {
        this.setupOpacity(opacity);
    }
};

/**
 * Обновляет данные ввода
 *
 * @method updateInputData
 */
DKTools_Sprite.prototype.updateInputData = function() {
    Input.update();
    TouchInput.update();
};





//===========================================================================
// Elements based on DKTools_Sprite
// Элементы, основанные на DKTools_Sprite
//===========================================================================





//===========================================================================
// DK Tools Text
//===========================================================================

/**
 * @class DKTools_Text
 *
 * @constructor
 *
 * @param {Number || Object || null} object - Координата X или Объект типа {}
 * @param {Number || null} y - Координата Y
 * @param {Number || null} width - Ширина Bitmap
 * @param {Number || null} height - Высота Bitmap
*/
function DKTools_Text() {
    this.initialize.apply(this, arguments);
}

DKTools_Text.prototype = Object.create(DKTools_Sprite.prototype);
DKTools_Text.prototype.constructor = DKTools_Text;

// properties

Object.defineProperties(DKTools_Text.prototype, {

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
     * Длина отображаемого текста
     *
     * @property length
     * @type Number
     */
    length: {
        get: function() {
            return this._text.length;
        },
        configurable: true
    }
});

// standard methods

/**
 * Возвращает стандартное значение активности спрайта
 *
 * @method standardActive
 * @return Boolean
 */
DKTools_Text.prototype.standardActive = function() {
    return false;
};

/**
 * Возвращает стандартный текст
 *
 * @method standardText
 * @return String
*/
DKTools_Text.prototype.standardText = function() {
    return '';
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
 * @property {String || null} text - Отображаемый текст
 *
 * @see other object properties: DKTools_Sprite.prototype.setupAll
*/
DKTools_Text.prototype.setupAll = function(object) {
    object = object || {};
    DKTools_Sprite.prototype.setupAll.call(this, object);
    this.setupText(object.text);
};

/**
 * Устанавливает отображаемый текст
 *
 * @method setupText
 * @param {String || null} text - Отображаемый текст
*/
DKTools_Text.prototype.setupText = function(text) {
    this._text = (text == null ? this.standardText() : String(text));
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
 * object properties
 * @property {String || null} text - Отображаемый текст
 *
 * @see other object properties: DKTools_Sprite.prototype.setAll
 *
 * @return Number
*/
DKTools_Text.prototype.setAll = function(object, blockStart) {
    object = object || {};
    var block = true;
    var changed = DKTools_Sprite.prototype.setAll.call(this, object, block);
    this._activateSetAllMode();
    if (this.setText(object.text, block)) {
        changed++;
    }
    if (changed && !blockStart) {
        this.start();
    }
    this._deactivateSetAllMode();
    return changed;
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
DKTools_Text.prototype.setText = function(text, blockStart) {
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

// other methods

/**
 * Запускает работу спрайта
 *
 * @method start
*/
DKTools_Text.prototype.start = function(activate) {
    this.checkSize();
    DKTools_Sprite.prototype.start.call(this, activate);
};

/**
 * Очищает отображаемый текст
 *
 * @method clearText
 * @param {Boolean} blockStart - Блокировка вызова функции start
 */
DKTools_Text.prototype.clearText = function(blockStart) {
    this.setText(blockStart);
};

/**
 *
 *
 * @method object
 * @return {Object}
 */
DKTools_Text.prototype.object = function() {
    var object = DKTools_Sprite.prototype.object.call(this);
    object.text = this._text;
    return object;
};

/**
 * Возвращает минимальную ширину Bitmap
 * Returns the minimum width of the Bitmap
 *
 * @method minWidth
 * @return Number
*/
DKTools_Text.prototype.minWidth = function() {
    var text = this._text || this.standardText();
    return Math.max(1, this.textWidth(text));
};

/**
 * Возвращает минимальную высоту Bitmap
 * Returns the minimum height of the Bitmap
 *
 * @method minHeight
 * @return Number
*/
DKTools_Text.prototype.minHeight = function() {
    return 36;
};

/**
 * Проверяет спрайт на наличие текста
 *
 * @method hasText
 * @return {Boolean} Возвращает true, если текст установлен
 */
DKTools_Text.prototype.hasText = function() {
    return !!this.text;
};

/**
 * Обновляет Bitmap спрайта
 *
 * @method updateBitmap
*/
DKTools_Text.prototype.updateBitmap = function() {
    DKTools_Sprite.prototype.updateBitmap.call(this);
    if (!this.hasBitmap() || this.isFixed()) {
        return;
    }
    this.updateText();
};

/**
 * Обновляет отображаемый текст
 *
 * @method updateText
*/
DKTools_Text.prototype.updateText = function() {
    if (this.hasText()) {
        this.drawText(this.text);
    }
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
DKTools_Container_Base.prototype.setXPadding = function(padding, blockUpdate) {
    if (this._xPadding === padding) {
        return false;
    }
    var lastPadding = this._xPadding;
    this.setupXPadding(padding);
    if (lastPadding === this._xPadding) {
        return false;
    }
    if (!blockUpdate) {
        this.updatePlacement();
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
DKTools_Container_Base.prototype.setYPadding = function(padding, blockUpdate) {
    if (this._yPadding === padding) {
        return false;
    }
    var lastPadding = this._yPadding;
    this.setupYPadding(padding);
    if (lastPadding === this._yPadding) {
        return false;
    }
    if (!blockUpdate) {
        this.updatePlacement();
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
DKTools_Container_Base.prototype.setPadding = function(xPadding, yPadding, blockUpdate) {
    var changed = 0;
    var block = true;
    if (this.setXPadding(xPadding, block)) {
        changed++;
    }
    if (this.setYPadding(yPadding, block)) {
        changed++;
    }
    if (changed && !blockUpdate) {
        this.updatePlacement();
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
	this.addElementsToChild();
    this.checkRowsAndCols();
	this.checkSize();
	this.updatePlacement();
	DKTools_Sprite.prototype.start.call(this);
    if (!this.isReady()) {
        this.addEventListener('ready', function() {
            this.startElements();
        }.bind(this));
    }
};

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

/**
 * Возвращает минимальную ширину Bitmap
 *
 * @method minWidth
 * @return Number
*/
DKTools_Container_Base.prototype.minWidth = function() {
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
 *
 *
 * @method reverse
 */
DKTools_Container_Base.prototype.reverse = function() {
    this.setReversed(!this.isReversed());
};

/**
 * Очищает все данные спрайта
 *
 * @method clearAll
 */
DKTools_Container_Base.prototype.clearAll = function() {
    DKTools_Sprite.prototype.clearAll.call(this);
    this.clearElements();
};

// is methods

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
 * Очищает список элементов контейнера
 *
 * @method clearElements
*/
DKTools_Container_Base.prototype.clearElements = function() {
	this._elements = [];
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
	if (object.constructor === Array) {
		for(var i = 0; i < object.length; i++) {
            var element = object[i];
            this._elements.push(element);
        }
	}
	else {
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
	};
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
    var array = [];
    var maxRows = this.maxRows();
    var maxCols = this.maxCols();
    if (row < 1 || row > maxRows) {
        return array;
    }
    var startIndex = maxCols * (row - 1);
    for(var i = 0; i < maxCols; i++) {
        var element = this.element(startIndex + i);
        array.push(element);
    }
    return array;
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
    var array = [];
    var maxRows = this.maxRows();
    var maxCols = this.maxCols();
    if (col < 1 || col > maxCols) {
        return array;
    }
    var startIndex = col - 1;
    for(var i = 0; i < maxRows; i++) {
        var element = this.element(startIndex + maxCols * i);
        array.push(element);
    }
    return array;
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
    var row_array = this.row(row);
    var array = [];
    for(var i = 0; i < row_array.length; i++) {
        var element = row_array[i];
        if (!element) {
            continue;
        }
        array.push(element.height);
    }
    return Math.max.apply(Math, array);
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
    var col_array = this.col(col);
    var array = [];
    for(var i = 0; i < col_array.length; i++) {
        var element = col_array[i];
        if (!element) {
            continue;
        }
        array.push(element.width);
    }
    return Math.max.apply(Math, array);
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
    var maxRows = this.maxRows();
    var maxCols = this.maxCols();
    var row = Math.floor(index / maxRows);
    if (index % maxCols === 0) {
        row++;
    }
    return row.clamp(1, maxRows);
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
// DK Tools Text Container
//===========================================================================

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

// initialize method

/**
 * @class DKTools_Text_Container
 *
 * @constructor
 *
 * @param {Number} object - Координата X
 * @param {Number} y - Координата Y
 */
DKTools_Text_Container.prototype.initialize = function(object, y) {
    this._createTextSprite();
    DKTools_Container_Base.prototype.initialize.call(this, object, y);
};

// setup methods

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
 * @see textSprite properties: DKTools_Text.prototype.setupAll
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
 * @see other object properties: DKTools_Text.prototype.setupAll
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
 * @see textSprite properties: DKTools_Text.prototype.setAll
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
 * @see object properties: DKTools_Text.prototype.setAll
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

// other methods

/**
 * Запускает работу спрайта
 *
 * @method start
*/
DKTools_Text_Container.prototype.start = function() {
    if (!this._textSprite.isStarted()) {
        this._textSprite.start();
    }
	DKTools_Container_Base.prototype.start.call(this);
};

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

// private method

/**
 * Создает спрайт текста
 *
 * @method _createTextSprite
 *
 * @private
 *
 * @param {Object || null} object - Объект типа {}
 *
 * @see object properties: DKTools_Text.prototype.initialize
*/
DKTools_Text_Container.prototype._createTextSprite = function(object) {
    this._textSprite = new DKTools_Text(object);
};





//===========================================================================
// DK Tools Container
//===========================================================================

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

// initialize method

/**
 * @class DKTools_Container
 *
 * @constructor
 *
 * @param {Number || Object || null} object - Координата X или Объект типа {}
 * @param {Number || null} y - Координата Y
 */
DKTools_Container.prototype.initialize = function(object, y) {
    this._createBaseSprite();
    DKTools_Text_Container.prototype.initialize.call(this, object, y);
};

// setup methods

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

// other methods

/**
 * Запускает работу спрайта
 *
 * @method start
 *
 * @param {Boolean || null} resizeTextSprite - Изменить размер спрайта текста
 * @param {Boolean || null} alignTextSprite - Установить выравнивание по центру для спрайта текста
*/
DKTools_Container.prototype.start = function(resizeTextSprite, alignTextSprite) {
    if (!this._baseSprite.isStarted()) {
        this._baseSprite.start();
    }
    DKTools_Text_Container.prototype.start.call(this);
    if (resizeTextSprite) {
        this.resizeTextSprite(alignTextSprite);
    }
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

DKTools_Container.prototype.resizeTextSprite = function(align) {
    if (this.maxRows() === 1 && this.isHorizontalPlacement()) {
        if (align) {
            this._textSprite.setupAlign('center');
        }
        this.addListener('ready', function () {
            this._textSprite.setHeight(this._baseSprite.height);
        }.bind(this));
    } else if (this.maxCols() === 1 && this.isVerticalPlacement()) {
        if (align) {
            this._textSprite.setupAlign('center');
        }
        this.addListener('ready', function () {
            this._textSprite.setWidth(this._baseSprite.width);
        }.bind(this));
    }
};

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

/**
 * Обновляет Bitmap спрайта
 *
 * @method updateBitmap
*/
DKTools_Progress_Bar_Base.prototype.updateBitmap = function() {
	DKTools_Sprite.prototype.updateBitmap.call(this);
	if (!this.hasBitmap()) {
        return;
    }
	this.updateProgressColor();
	this.updateText();
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

DKTools_Input_Base.prototype = Object.create(DKTools_Text.prototype);
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
Object.defineProperty(DKTools_Input_Base.prototype, 'caretPosition', {
    get: function() {
        return this._caret.position;
    },
    set: function(value) {
        this.setupCaretPosition(value);
    },
    configurable: true
});

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
	DKTools_Text.prototype.setupAll.call(this, object);
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
	var changed = DKTools_Text.prototype.setAll.call(this, object, block);
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
    if (DKTools_Text.prototype.setText.call(this, text, true)) {
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
    var object = DKTools_Text.prototype.object.call(this);
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
    DKTools_Text.prototype.activate.call(this);
	DKToolsInputManager.clear();
	this.showCaret();
};

/**
 * Деактивирует спрайт
 *
 * @method deactivate
*/
DKTools_Input_Base.prototype.deactivate = function() {
	DKTools_Text.prototype.deactivate.call(this);
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

// clear methods

/**
 * Очищает менеджер ввода текста и введенный текст
 *
 * @method clearInput
*/
DKTools_Input_Base.prototype.clearInput = function() {
	DKToolsInputManager.clear();
	this.clearText();
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

/**
 * Очищает все данные спрайта
 *
 * @method clearAll
 */
DKTools_Input_Base.prototype.clearAll = function() {
    DKTools_Sprite.prototype.clearAll.call(this);
    this._clearCaret();
    this._clearCaretCounter();
};

//

DKTools_Input_Base.prototype.onSymbolChange = function(symbol, value) {
    DKTools_Sprite.prototype.onSymbolChange.call(this, symbol, value);
    if (symbol === 'password') {
        this.updateBitmap();
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
	this._needUpdate = true;
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
	this._needUpdate = true;
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
	this._needUpdate = true;
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
	this._needUpdate = true;
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
	this._needUpdate = true;
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
	this._needUpdate = true;
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
	this._needUpdate = true;
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
    this._needUpdate = true;
};

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

/**
 * Обновление спрайта
 *
 * @method update
*/
DKTools_Input_Base.prototype.update = function() {
	DKTools_Text.prototype.update.call(this);
    if (this.isVisibleAndActive()) {
        this.processInput();
        this.processBackspace();
        this.processDelete();
        this.processOk();
        this.processCancel();
        this.processCaretMove();
        this.processCaretVisible();
        if (this._needUpdate) {
            this.updateBitmap();
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

DKTools_CheckBox_Base.prototype = Object.create(DKTools_Text.prototype);
DKTools_CheckBox_Base.prototype.constructor = DKTools_CheckBox_Base;

// properties

Object.defineProperties(DKTools_CheckBox_Base.prototype, {

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
    }
});

// standard methods

/**
 * Возвращает стандартное значение активности спрайта
 *
 * @method standardActive
 * @return Boolean
 */
DKTools_CheckBox_Base.prototype.standardActive = function() {
    return true;
};

/**
 * Возвращает стандартную графику
 *
 * @method standardGraphic
 * @return Object
 */
DKTools_CheckBox_Base.prototype.standardGraphic = function() {
    var standardGraphic = DKTools_Text.prototype.standardGraphic.call(this);
    var object = {
        checked: standardGraphic,
        unchecked: standardGraphic
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
    var standardColor = DKTools_Text.prototype.standardTextColor.call(this);
    var object = {
        checked: standardColor,
        unchecked: standardColor
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
    var standardAlign = DKTools_Text.prototype.standardAlign.call(this);
    var object = {
        checked: standardAlign,
        unchecked: standardAlign
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
    var standardColor = DKTools_Text.prototype.standardBackgroundColor.call(this);
    var object = {
        checked: standardColor,
        unchecked: standardColor
    };
    return object;
};

/**
 * Возвращает стандартный шрифт

 * @method standardFont
 * @return Object
 */
DKTools_CheckBox_Base.prototype.standardFont = function() {
    var standardFont = DKTools_Text.prototype.standardFont.call(this);
    var object = {
        checked: standardFont,
        unchecked: standardFont
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
        checked: DKLocalizationManager.DKTools('#checkbox_standard_checked_text#'),
        unchecked: DKLocalizationManager.DKTools('#checkbox_standard_unchecked_text#')
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
 * @see other object properties: DKTools_Text.prototype.setupAll
*/
DKTools_CheckBox_Base.prototype.setupAll = function(object) {
    object = object || {};
	DKTools_Text.prototype.setupAll.call(this, object);
	this.setupChecked(object.checked);
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
 * @see other object properties: DKTools_Text.prototype.setAll
 *
 * @return Number
*/
DKTools_CheckBox_Base.prototype.setAll = function(object, blockStart) {
    object = object || {};
	var block = true;
    var changed = DKTools_Text.prototype.setAll.call(this, object, block);
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
DKTools_CheckBox_Base.prototype.setChecked = function(checked, blockUpdate) {
    if (this._checked === checked || this.isChecked() === checked) {
        return false;
    }
    var lastChecked = this._checked;
    this.setupChecked(checked);
    if (lastChecked === this._checked) {
        return false;
    }
    if (!blockUpdate) {
        this.updateBitmap();
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
	DKTools_Text.prototype.start.call(this, activate);
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
    var object = DKTools_Text.prototype.object.call(this);
    object.checked = this._checked;
    object.graphic = this._graphic;
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
DKTools_CheckBox_Base.prototype._checkFont = function(target, source, standardFont) {
    standardFont = standardFont || this.standardFont();
    var checkedFont = standardFont.checked;
    var uncheckedFont = standardFont.unchecked;
    target = target || {};
    source = source || {};
    target.checked = DKTools_Text.prototype._checkFont(target.checked, source.checked, checkedFont);
    target.unchecked = DKTools_Text.prototype._checkFont(target.unchecked, source.unchecked, uncheckedFont);
    return target;
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
    DKTools_Text.prototype.updateClickEvents.call(this);
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

DKTools_Radio_Button_Base.prototype.clearAll = function() {
    DKTools_Container_Base.prototype.clearAll.call(this);
    this.clearSelected();
};

DKTools_Radio_Button_Base.prototype.clearSelected = function() {
    this._selected = [];
};

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
    DKTools_Container_Base.prototype.start.call(this);
    if (!this.isEnabled('multiSelect')) {
        this.selected().check();
    }
    this.updateElementsId();
    this.updateElementsClickHandler();
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
        if (!element._baseSprite.hasEvents('click')) {
            element._baseSprite.addEventHandler('click', this._elementClickHandler.bind(this, element))
        }
    }.bind(this);
    this.iterateElements(callback);
};

DKTools_Radio_Button_Base.prototype._elementClickHandler = function(element) {
    var checked = element.isChecked();
    var id = element.id;
	if (!checked && !this.isEnabled('multiSelect')) {
        return this.element(id).check();
    }
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
    if (this.isEmpty()) {
        return;
    }
	if (id >= this.length || id < 0/* || id === this._index*/) {
        return;
    }
    if (this.isEnabled('multiSelect')) {
        if (this.element(id).isChecked()) {
            if (!this._selected.contains(id)) {
                this._selected.push(id);
            }
        } else {
            this._selected.remove(id);
        }
    } else {
        this.selected().uncheck();
        this.setupIndex(id);
        this.selected().check();
    }
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

// set methods

// other methods





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
    this._minusSprite = new DKTools_Text(0, 0, 36, 36);
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
    this._plusSprite = new DKTools_Text(0, 0, 36, 36);
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
    this._handleSprite = new DKTools_Text(0, 0, handleWidth);
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
// DK Tools Window Base
//===========================================================================

function DKTools_Window_Base() {
	this.initialize.apply(this, arguments);
}

DKTools_Window_Base.prototype = Object.create(Window_Base.prototype);
DKTools_Window_Base.prototype.constructor = DKTools_Window_Base;

/**
 * @class DKTools_Window_Base
 *
 * @constructor
 *
 * @param {Number} object - Координата X
 * @param {Number} y - Координата Y
 * @param {Number} width - Ширина окна
 * @param {Number} height - Высота окна
 */
DKTools_Window_Base.prototype.initialize = function(object, y, width, height) {
	width = (width ? width.clamp(this.minWidth(), this.maxWidth()) : this.minWidth());
	height = (height ? height.clamp(this.minHeight(), this.maxHeight()) : this.minHeight());
	this.clearStartListeners();
	this.setupId();
	this.setupAll();
	Window_Base.prototype.initialize.call(this, x || 0, y || 0, width, height);
	this.setupActive();
	this.started = false;
};

/**
 * Возвращает стандартное значение коодинаты X для спрайта
 *
 * @method standardSpriteY
 * @return Number
*/
DKTools_Window_Base.prototype.standardSpriteX = function() {
	return this.standardPadding();
};

/**
 * Возвращает стандартное значение коодинаты Y для спрайта
 *
 * @method standardSpriteY
 * @return Number
*/
DKTools_Window_Base.prototype.standardSpriteY = function() {
	return this.standardPadding();
};

/**
 * Возвращает стандартную обложку окна
 
 * @method standardWindowskin
 * @return String
*/
DKTools_Window_Base.prototype.standardWindowskin = function() {
	return 'Window'; // сделать через параметры
};

/**
 * Возвращает стандартный тон окна
 
 * @method standardTone
 * @return Array
*/
DKTools_Window_Base.prototype.standardTone = function() {
	return $gameSystem.windowTone(); // сделать через параметры ?
};

/**
 * Возвращает стандартное имя шрифта
 
 * @method standardFontName
 * @return String
*/
DKTools_Window_Base.prototype.standardFontName = function() {
	return 'GameFont'; // сделать через параметры
};

/**
 * Возвращает стандартное значение для курсива
 
 * @method standardFontItalic
 * @return Boolean
*/
DKTools_Window_Base.prototype.standardFontItalic = function() {
	return false; // сделать через параметры
};

/**
 * Возвращает стандартный размер шрифта
 
 * @method standardFontSize
 * @return Number
*/
DKTools_Window_Base.prototype.standardFontSize = function() {
	return 28; // сделать через параметры
};

/**
 * Возвращает стандартный шрифт
 
 * @method standardFont
 * @return Array
*/
DKTools_Window_Base.prototype.standardFont = function() {
	return [this.standardFontName(), this.standardFontItalic(), this.standardFontSize()];
};

/**
 * Возвращает стандартное выравнивание
 
 * @method standardAlign
 * @return String
*/
DKTools_Window_Base.prototype.standardAlign = function() {
	return 'center'; // сделать через параметры
};

/**
 * Возвращает стандартный цвет текста
 
 * @method standardTextColor
 * @return String
*/
DKTools_Window_Base.prototype.standardTextColor = function() {
	return '#ffffff'; // сделать через параметры
};

DKTools_Window_Base.prototype.standardWindowOpacity = function() {
	return 255; // сделать через параметры
};

DKTools_Window_Base.prototype.standardContentsOpacity = function() {
	return 255; // сделать через параметры
};

DKTools_Window_Base.prototype.standardBackOpacity = function() {
	return 192; // сделать через параметры
};

/**
 * Возвращает стандартную прозрачность
 
 * @method standardOpacity
 * @return Array
*/
DKTools_Window_Base.prototype.standardOpacity = function() {
	return [this.standardWindowOpacity(), this.standardContentsOpacity(), this.standardBackOpacity()];
};

DKTools_Window_Base.prototype.standardPaintOpacity = function() {
	return 255; // сделать через параметры
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
DKTools_Window_Base.prototype.setupAll = function(textColor, font, opacity, tone, windowskin, paint_opacity) {
	this.setupTextColor(textColor);
	this.setupFont(font);
	this.setupOpacity(opacity);
	this.setupTone(tone);
	this.setupWindowskin(windowskin);
	this.setupPaintOpacity(paint_opacity);
};

/**
 * Устанавливает ID окна
 
 * @method setupId
 * @param {Number || String || null} id - ID окна
*/
DKTools_Window_Base.prototype.setupId = function(id) {
	this.id = (id == null ? null : id);
};

/**
 * Устанавливает активность окна
 
 * @method setupActive
 * @param {Boolean || null} active - Активность окна
*/
DKTools_Window_Base.prototype.setupActive = function(active) {
	this.active = (active == null ? true : active);
};

/**
 * Устанавливает выравнивание текста

 * @method setupAlign
 * @param {String || null} align - Выравнивание текста
*/
DKTools_Window_Base.prototype.setupAlign = DKTools_Sprite.prototype.setupAlign;
//DKTools_Window_Base.prototype.setupAlign = function(align) {
//	this._align = align || this.standardAlign();
//};

/**
 * Устанавливает X текста

 * @method setupTextX
 * @param {Number || null} x - X текста
*/
DKTools_Window_Base.prototype.setupTextX = DKTools_Sprite.prototype.setupTextX;
//DKTools_Window_Base.prototype.setupTextX = function(x) {
//	this.text_x = (x == null ? this.standardTextX() : x);
//};

/**
 * Устанавливает Y текста

 * @method setupTextY
 * @param {Number || null} y - Y текста
*/
DKTools_Window_Base.prototype.setupTextY = DKTools_Sprite.prototype.setupTextY;
//DKTools_Window_Base.prototype.setupTextY = function(y) {
//	this.text_y = (y == null ? this.standardTextY() : y);
//};

/**
 * Устанавливает цвет текста

 * @method setupTextColor
 * @param {String || null} color - Цвет текста
 */
DKTools_Window_Base.prototype.setupTextColor = function(color) {
	this._textColor = color || this.standardTextColor();
};

/**
 * Устанавливает шрифт текста

 * @method setupFont
 * @param {Array || null} font - Шрифт текста
 */
DKTools_Window_Base.prototype.setupFont = function(font) {
	var standard_font = this.standardFont();
	font = font || [];
	this.window_font = [];
	for(var i = 0; i < 3; i++)
		this.window_font[i] = (font[i] == null ? standard_font[i] : font[i]);
};

/**
 * Устанавливает тон окна
 
 * @method setupTone
 * @param {Array || null} tone - Тон окна
*/
DKTools_Window_Base.prototype.setupTone = function(tone) {
	var standard_tone = this.standardTone();
	tone = tone || [];
	this.window_tone = [];
	for(var i = 0; i < 3; i++)
		this.window_tone[i] = (tone[i] == null ? standard_tone[i] : tone[i]);
};

/**
 * Устанавливает прозрачность окна

 * @method setupOpacity
 * @param {Array || null} opacity - Прозрачность окна
*/
DKTools_Window_Base.prototype.setupOpacity = function(opacity) {
	var standard_opacity = this.standardOpacity();
	opacity = opacity || [];
	this.window_opacity = [];
	for(var i = 0; i < 3; i++)
		this.window_opacity[i] = (opacity[i] == null ? standard_opacity[i] : opacity[i]);
};

/**
 * Устанавливает прозрачность рисования окна

 * @method setupPaintOpacity
 * @param {Number || null} opacity - Прозрачность рисования окна
*/
DKTools_Window_Base.prototype.setupPaintOpacity = function(opacity) {
	this.paint_opacity = (opacity == null ? this.standardPaintOpacity() : opacity);
};

/**
 * Устанавливает обложку окна

 * @method setupWindowskin
 * @param {String || null} windowskin - Обложка окна
*/
DKTools_Window_Base.prototype.setupWindowskin = function(windowskin) {
	this.window_windowskin = windowskin || this.standardWindowskin();
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
DKTools_Window_Base.prototype.setAll = function(object, blockStart) {
	object = object || {};
	var block = true;
	var changed = 0;
	if (this.setAlign(object.align, block)) changed++;
	if (this.setTextX(object.text_x, block)) changed++;
	if (this.setTextY(object.text_y, block)) changed++;
	if (this.setTextColor(object.textColor, block)) changed++;
	if (this.setFont(object.font, block)) changed++;
	if (this.setTone(object.tone, block)) changed++;
	if (this.setOpacity(object.opacity, block)) changed++;
	if (this.setPaintOpacity(object.paint_opacity, block)) changed++;
	if (this.setWindowskin(object.windowskin, block)) changed++;
	if (changed && !blockStart) this.start();
	return changed;
};

/**
 * Изменяет ширину окна
 * Возвращает true, если изменение произошло
 
 * @method setWidth
 * @param {Number || null} width - Ширина окна
 * @return Boolean
*/
DKTools_Window_Base.prototype.setWidth = function(width) {
	return this.resize(width, this.height);
};

/**
 * Изменяет высоту окна
 * Возвращает true, если изменение произошло
 
 * @method setHeight
 * @param {Number || null} height - Высота окна
 * @return Boolean
*/
DKTools_Window_Base.prototype.setHeight = function(height) {
	return this.resize(this.width, height);
};

/**
 * Изменяет выравнивание текста
 * Возвращает true, если изменение произошло

 * @method setAlign
 * @param {String || null} align - Выравнивание текста
 * @param {Boolean || null} block -
 * @return Boolean
*/
DKTools_Window_Base.prototype.setAlign = DKTools_Sprite.prototype.setAlign;

/**
 * Изменяет X текста
 * Возвращает true, если изменение произошло

 * @method setTextX
 * @param {Number || null} x - X текста
 * @param {Boolean || null} block -
 * @return Boolean
*/
DKTools_Window_Base.prototype.setTextX = DKTools_Sprite.prototype.setTextX;

/**
 * Изменяет Y текста
 * Возвращает true, если изменение произошло

 * @method setTextX
 * @param {Number || null} y - Y текста
 * @param {Boolean || null} block -
 * @return Boolean
*/
DKTools_Window_Base.prototype.setTextY = DKTools_Sprite.prototype.setTextY;

/**
 * Изменяет цвет текста
 * Возвращает true, если изменение произошло

 * @method setTextColor
 * @param {String || null} color - Цвет текста
 * @param {Boolean || null} block -
 * @return Boolean
*/
DKTools_Window_Base.prototype.setTextColor = function(color, block) {
	if (this._textColor === color) return false;
	var lastColor = this._textColor;
	this.setupTextColor(color);
	if (lastColor === this._textColor) return false;
	if (!block) this.updateWindow();
	return true;
};

/**
 * Изменяет шрифт текста
 * Возвращает true, если изменение произошло

 * @method setFont
 * @param {Array || null} font - Шрифт текста
 * @return Boolean
*/
DKTools_Window_Base.prototype.setFont = function(font, block) {
	font = font || this.standardFont();
	if (this.window_font[0] === font[0] && this.window_font[1] === font[1] && this.window_font[2] === font[2]) return false;
	this.setupFont(font);
	if (this.window_font[0] === font[0] && this.window_font[1] === font[1] && this.window_font[2] === font[2]) return false;
	if (!block) this.updateWindow(); // сделать start ?
	return true;
};

/**
 * Изменяет тон окна
 * Возвращает true, если изменение произошло

 * @method setTone
 * @param {Array || null} tone - Тон окна
 * @return Boolean
 */
DKTools_Window_Base.prototype.setTone = function(tone, block) {
	tone = tone || this.standardTone();
	if (this.window_tone[0] === tone[0] && this.window_tone[1] === tone[1] && this.window_tone[2] === tone[2]) return false;
	this.setupTone(tone);
	if (this.window_tone[0] === font[0] && this.window_tone[1] === font[1] && this.window_tone[2] === font[2]) return false;
	if (!block) this.updateWindow();
	return true;
};

/**
 * Изменяет прозрачность окна
 * Возвращает true, если изменение произошло

 * @method setOpacity
 * @param {Array || null} opacity - Прозрачность окна
 * @return Boolean
 */
DKTools_Window_Base.prototype.setOpacity = function(opacity, block) {
	opacity = opacity || this.standardOpacity();
	if (this.window_opacity[0] === opacity[0] && this.window_opacity[1] === opacity[1] && this.window_opacity[2] === opacity[2]) return false;
	this.setupOpacity(opacity);
	if (this.window_opacity[0] === opacity[0] && this.window_opacity[1] === opacity[1] && this.window_opacity[2] === opacity[2]) return false;
	if (!block) this.updateWindow();
	return true;
};

/**
 * Изменяет прозрачность рисования окна

 * @method setPaintOpacity
 * @param {Number || null} opacity - Прозрачность рисования окна
 * @param {Boolean || null} block -
 * @return Boolean
*/
DKTools_Window_Base.prototype.setPaintOpacity = function(opacity, block) {
	if (this.paint_opacity === opacity) return false;
	var lastOpacity = this.paint_opacity;
	this.setupPaintOpacity(opacity);
	if (lastOpacity === this.paint_opacity) return false;
	if (!block) this.updateWindow();
	//if (!block) this.updatePaintOpacity();
	return true;
};

/**
 * Изменяет обложку окна
 * Возвращает true, если изменение произошло
 
 * @method setWindowskin
 * @param {String || null} windowskin - Обложка окна
 * @return Boolean
*/
DKTools_Window_Base.prototype.setWindowskin = function(windowskin, block) {
	if (this.window_windowskin === windowskin) return false;
	var last_windowskin = this.window_windowskin;
	this.setupWindowskin(windowskin);
	if (last_windowskin === this.window_windowskin) return false;
	if (!block) this.loadWindowskin();
	return true;
};

/**
 * Устанавливает функцию, вызываемую при обновлении спрайта

 * @method setUpdateHandler
 * @param {Function} method - Функция, вызываемая при обновлении спрайта
 */
DKTools_Window_Base.prototype.setUpdateHandler = function(method) {
	this.update_handler = method;
};

/**
 * Устанавливает функцию, вызываемую для обновления анимации окна

 * @method setUpdateAnimationHandler
 * @param {Function} method - Функция, вызываемая для обновления анимации окна
*/
DKTools_Window_Base.prototype.setUpdateAnimationHandler = function(method) {
	this.update_animation_handler = method;
};

/**
 * Устанавливает функцию, вызываемую при полном открытии окна

 * @method setOpenHandler
 * @param {Function} method - Функция, вызываемая при полном открытии окна
*/
DKTools_Window_Base.prototype.setOpenHandler = function(method) {
	this.open_handler = method;
};

/**
 * Устанавливает функцию, вызываемую при полном закрытии окна

 * @method setCloseHandler
 * @param {Function} method - Функция, вызываемая при полном закрытии окна
*/
DKTools_Window_Base.prototype.setCloseHandler = function(method) {
	this.close_handler = method;
};

/**
 * Устанавливает функцию, вызываемую при запуске работы окна

 * @method setStartHandler
 * @param {Function} method - Функция, вызываемая при запуске работы окна
*/
DKTools_Window_Base.prototype.setStartHandler = function(method) {
	this._startHandler = method;
};

// other methods

/**
 * Запускает работу окна

 * @method start
 */
DKTools_Window_Base.prototype.start = function() {
	this.updateWindow();
	this.started = true;
	this.callStartListeners();
	this.callStartHandler();
};

/**
 * Очищает Rect, если contents есть
 * Возвращает true, если contents есть

 * @method clearRect
 * @param {Number || Rectangle || null} object - Координата X (если Number) или область (если Rectangle)
 * @param {Number || null} y - Координата Y (если object - Number)
 * @param {Number || null} width - Ширина области (если object - Number)
 * @param {Number || null} height - Высота области (если object - Number)
 * @return Boolean
*/
DKTools_Window_Base.prototype.clearRect = function(object, y, width, height) {
	if (!this.contents) return false;
	var x;
	if (object && object.constructor === Number) x = object;
	if (object && object.constructor === Rectangle)
	{
		x = object.x;
		y = object.y;
		width = object.width;
		height = object.height;
	}
	this.contents.clearRect(x || 0, y || 0, width || this.contents.width, height || this.contents.height);
	return true;
};

/**
 * Очищает contents, если он есть
 * Возвращает true, если contents есть

 * @method clear
 * @return Boolean
 */
DKTools_Window_Base.prototype.clear = function() {
	return this.clearRect();
};

/**
 * Перемещает окно

 * @method move
 * @param {Number || null} x - Координата X (The x coordinate for the upper-left corner)
 * @param {Number || null} y - Координата Y (The y coordinate for the upper-left corner)
 * @param {Number || null} width - Ширина окна (The width of the window)
 * @param {Number || null} height - Высота окна (The height of the window)
 */
DKTools_Window_Base.prototype.move = function(x, y, width, height) {
	width = width || this.width;
	height = height || this.height;
	Window_Base.prototype.move.call(this, x, y, width, height);
};

/**
 * Устанавливает высоту и ширину окна, если они отличаются от текущих
 * Возвращает true, если изменение произошло
 * Sets the width and height of the window, if they differ from the current
 * Returns true, if the change occurred
 *
 * @method resize
 * @param {Number || null} width - Ширина окна (The width of the window)
 * @param {Number || null} height - Высота окна (The height of the window)
 * @param {Boolean || null} block -
 * @return Boolean
*/
DKTools_Window_Base.prototype.resize = function(width, height, block) {
	if (!width) width = this.minWidth();
	if (!height) height = this.minHeight();
	if (this.width === width && this.height === height) return false;
	var lastWidth = this.width;
	var lastHeight = this.height;
	width = (width ? width.clamp(this.minWidth(), this.maxWidth()) : Math.max(this.minWidth(), this.width));
	height = (height ? height.clamp(this.minHeight(), this.maxHeight()) : Math.max(this.minHeight(), this.height));
	this.move(this.x, this.y, width, height);
	if (lastWidth === this.width && lastHeight === this.height) return false;
	this.createContents();
	this.updateContents();
	if (!block) this.start();
	return true;
};

/**
 * Клонирует текущее окно

 * BETA
 * @method clone
 * @param {Boolean || null} block - Блокировка функции start
 * @return DKTools_Window_Base
 */
DKTools_Window_Base.prototype.clone = function(block) {
	var window = new DKTools_Window_Base(this.x, this.y, this.width, this.height);
	window.setupAll(this.textColor, this.window_font, this.window_opacity, this.window_tone, this.window_windowskin);
	if (!block) window.start();
	return window;
};

/**
 * Проверяет ширину и высоту окна на соответствие минимальным значениям
 * Возвращает true, если изменение произошло

 * @method checkSize
 * @return Boolean
 */
DKTools_Window_Base.prototype.checkSize = function() {
	var minWidth = this.minWidth();
	var minHeight = this.minHeight();
	var changed = 0;
	if (this._bitmapWidth < minWidth)
	{
		this.setupWidth(minWidth);
		changed++;
	}
	if (this._bitmapHeight < minHeight)
	{
		this.setupHeight(minHeight);
		changed++;
	}
	return changed;
};

/**
 * Возвращает Bitmap из объекта или загружает его

 * @method bitmapFromObject
 * @param {Object || null} object -
 * @return Bitmap || null
*/
DKTools_Window_Base.prototype.bitmapFromObject = DKTools_Sprite.prototype.bitmapFromObject;

/**
 * Возвращает минимальную ширину окна
 * Returns the minimum width of the window
 *
 * @method minWidth
 * @return Number
*/
DKTools_Window_Base.prototype.minWidth = function() {
	return this.standardPadding() * 2 + 64;
};

/**
 * Возвращает минимальную высоту окна
 * Returns the minimum height of the window
 *
 * @method minHeight
 * @return Number
 */
DKTools_Window_Base.prototype.minHeight = function() {
	return this.standardPadding() * 2 + this.lineHeight();
};

/**
 * Возвращает максимальную ширину окна
 *
 * @method maxWidth
 * @return Number
 */
DKTools_Window_Base.prototype.maxWidth = function() {
	return Graphics.boxWidth;
};

/**
 * Возвращает максимальную высоту окна
 *
 * @method maxHeight
 * @return Number
 */
DKTools_Window_Base.prototype.maxHeight = function() {
	return Graphics.boxHeight;
};

DKTools_Window_Base.prototype.resetFontSettings = function() {
};

DKTools_Window_Base.prototype.resetTextColor = function() {
};

/**
 * Возвращает true, если работа окна была запущена

 * @method isStarted
 * @return Boolean
*/
DKTools_Window_Base.prototype.isStarted = function() {
	return this.started;
};

/**
 * Очищает "слушателей" старта окна

 * @method clearStartListeners
*/
DKTools_Window_Base.prototype.clearStartListeners = function() {
	this._startListeners = [];
};

/**
 * Добавляет "слушателя" старта окна

 * @method addStartListener
 * @param {Function} listener - "Слушатель" старта окна
*/
DKTools_Window_Base.prototype.addStartListener = function(listener) {
	this.isStarted() ? listener(this.id) : this._startListeners.push(listener);
};

/**
 * Вызывает "слушателей" старта окна

 * @method callStartListeners
*/
DKTools_Window_Base.prototype.callStartListeners = function() {
	if (!this.isStarted()) return;
	while(this._startListeners.length > 0)
		this._startListeners.shift()(this.id);
};

/**
 * Вызывает обработчик старта окна

 * @method callStartHandler
*/
DKTools_Window_Base.prototype.callStartHandler = function() {
	if (this.isStarted() && this._startHandler)	this._startHandler(this.id);
};

/**
 * Заливает область цветом
 * Возвращает true, если contents существует

 * @method fillRect
 * @param {String || null} color - Цвет
 * @param {Number || Rectangle || null} object - Координата X (если Number) или область (если Rectangle)
 * @param {Number || null} y - Координата Y
 * @param {Number || null} width - Ширина области
 * @param {Number || null} height - Высота области
 * @return Boolean
 */
DKTools_Window_Base.prototype.fillRect = function(color, object, y, width, height) {
	if (!this.contents) return false;
	var x;
	if (object && object.constructor === Number) x = object;
	if (object && object.constructor === Rectangle)
	{
		x = object.x;
		y = object.y;
		width = object.width;
		height = object.height;
	}
	this.contents.fillRect(x || 0, y || 0, width || this.contentsWidth(), height || this.contentsHeight(), color || '#ffffff');
	return true;
};

/**
 * Заливает весь Bitmap цветом
 * Возвращает true, если contents существует

 * @method fillAll
 * @param {String || null} color - Цвет
 * @return Boolean
 */
DKTools_Window_Base.prototype.fillAll = function(color) {
	return this.fillRect(color);
};

/**
 * Заливает область градиентом
 * Возвращает true, если contents существует

 * @method gradientFillRect
 * @param {String || null} color1 - Цвет 1
 * @param {String || null} color2 - Цвет 2
 * @param {Boolean || null} vertical - Вертикальный градиент
 * @param {Number || Rectangle || null} object - Координата X (если Number) или область (если Rectangle)
 * @param {Number || null} y - Координата Y
 * @param {Number || null} width - Ширина области
 * @param {Number || null} height - Высота области
 * @return Boolean
 */
DKTools_Window_Base.prototype.gradientFillRect = function(color1, color2, vertical, object, y, width, height) {
	if (!this.contents) return false;
	var x;
	if (object && object.constructor === Number) x = object;
	if (object && object.constructor === Rectangle)
	{
		x = object.x;
		y = object.y;
		width = object.width;
		height = object.height;
	}
	this.contents.gradientFillRect(x || 0, y || 0, width || this.contentsWidth(), height || this.contentsHeight(), color1, color2, vertical);
	return true;
};

/**
 * Заливает весь Bitmap градиентом
 * Возвращает true, если contents существует

 * @method gradientFillAll
 * @param {String || null} color1 - Цвет 1
 * @param {String || null} color2 - Цвет 2
 * @param {Boolean || null} vertical - Вертикальный градиент
 * @return Boolean
 */
DKTools_Window_Base.prototype.gradientFillAll = function(color1, color2, vertical) {
	return this.gradientFillAll(color1, color2, vertical);
};

DKTools_Window_Base.prototype.drawTextHeight = function() {
	return this.lineHeight();
};

/**
 * Рисует текст
 * Возвращает true, если contents существует

 * @method drawText
 * @param {String || null} text - Текст
 * @param {String || null} align - Выравнивание текста
 * @param {Number || Rectangle || null} object - Координата X (если Number) или область (если Rectangle)
 * @param {Number || null} y - Координата Y
 * @param {Number || null} width - Ширина области
 * @param {Number || null} height - Высота области
 * @return Boolean
*/
DKTools_Window_Base.prototype.drawText = function(text, align, object, y, width, height) {
	if (!this.contents) return false;
	var x;
	if (object && object.constructor === Number) x = object;
	if (object && object.constructor === Rectangle)
	{
		x = object.x;
		y = object.y;
		width = object.width;
		height = object.height;
	}
	// совместимость стандартных функций с новым drawText
	// Идет смещение параметров
	// align - x
	// object - y
	// y - width
	// width - align
	if (align && align.constructor === Number && width && width.constructor === String)
	{
		Window_Base.prototype.drawText.call(this, text, align, object, y, width);
	}
	// мб сделать this.text_width и this.text_height вместо this.contentsWidth() и this.drawTextHeight()
	this.contents.drawText(text, x || this.text_x || 0, y || this.text_y || 0, width || this.contentsWidth(), height || this.drawTextHeight(), align || this._align || 'left');
	// this.contents.drawText(text, x || 0, y || 0, width || this.contentsWidth(), height || this.lineHeight(), align || 'left');
	return true;
};

/**
 * Рисует круг
 * Возвращает true, если contents существует

 * @method drawCircle
 * @param {Number || null} radius - Радиус
 * @param {String || null} color - Цвет
 * @param {Number || null} x - Координата X
 * @param {Number || null} y - Координата Y
 * @return Boolean
*/
DKTools_Window_Base.prototype.drawCircle = function(radius, color, x, y) {
	if (!this.contents) return false;
	this.contents.drawCircle(x || radius || 0, y || radius || 0, radius || 1, color || '#ffffff');
	return true;
};

/**
 * Рисует кусок из bitmap в contents
 * Возвращает true, если contents существует

 * @method drawBitmap
 * @param {Object} object -
 * @param {Bitmap || Object} object - Bitmap или { folder, filename, listener (опционально), hue (опционально), smooth (опционально) }
 * @param {Number || Rectangle} x1 - Координата X (если Number) или область (если Rectangle)
 * @param {Number || Rectangle} y1 - Координата Y (если x1 - Number) или область (если x1 - Rectangle)
 * @param {Number || null} width1 - Ширина области из Bitmap (если x1, y1 - Number)
 * @param {Number || null} height1 - Высота области из Bitmap (если x1, y1 - Number)
 * @param {Number || Rectangle || null} x2 - Координата X (если Number и x1 - Number) или область (если Rectangle и x1 - Number)
 * @param {Number || null} y2 - Координата Y (если x1, y1, x2 - Number)
 * @param {Number || null} width2 - Ширина рисуемой области (если x1, y1, x2 - Number) (опционально) (равно width1)
 * @param {Number || null} height2 - Высота рисуемой области (если x1, y1, x2 - Number) (опционально) (равно height1)
 * @return Boolean
*/
DKTools_Window_Base.prototype.drawBitmap = function(object) {
	object = object || {};
	if (!this.contents || !object.bitmap) return false;
	var bitmap = this.bitmapFromObject(object.bitmap);
	var sx = object.x1, sy = object.y1, sw = object.width1, sh = object.height1;
	var dx = object.x2, dy = object.y2, dw = object.width2, dh = object.height2;
	if (object.rect1 && object.rect1.constructor === Object)
	{
		sx = object.rect1.x;
		sy = object.rect1.y;
		sw = object.rect1.width;
		sh = object.rect1.height;
	}
	if (object.rect2 && object.rect2.constructor === Object)
	{
		dx = object.rect2.x;
		dy = object.rect2.y;
		dw = object.rect2.width;
		dh = object.rect2.height;
	}
	bitmap.addLoadListener(function(bitmap, sx, sy, sw, sh, dx, dy, dw, dh) {
		this.contents.blt(bitmap, sx, sy, sw, sh, dx, dy, dw, dh);
	}.bind(this, bitmap, sx, sy, sw, sh, dx, dy, dw, dh));
	return true;
};

/**
 * Загружает Bitmap из папки img/animations/
 * Возвращает true, если bitmap был изменен

 * @method loadAnimation
 * @param {String || null} filename - Имя файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Гладкий
 * @return Bitmap
*/
DKTools_Window_Base.prototype.loadAnimation = function(filename, listener, hue, smooth) {
	return this.loadBitmap('img/animations/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/battlebacks1/
 * Возвращает true, если bitmap был изменен

 * @method loadBattleback1
 * @param {String || null} filename - Имя файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Гладкий
 * @return Bitmap
*/
DKTools_Window_Base.prototype.loadBattleback1 = function(filename, listener, hue, smooth) {
	return this.loadBitmap('img/battlebacks1/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/battlebacks2/
 * Возвращает true, если bitmap был изменен

 * @method loadBattleback2
 * @param {String || null} filename - Имя файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Гладкий
 * @return Bitmap
*/
DKTools_Window_Base.prototype.loadBattleback2 = function(filename, listener, hue, smooth) {
	return this.loadBitmap('img/battlebacks2/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/enemies/
 * Возвращает true, если bitmap был изменен

 * @method loadEnemy
 * @param {String || null} filename - Имя файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Гладкий
 * @return Boolean
*/
DKTools_Window_Base.prototype.loadEnemy = function(filename, listener, hue, smooth) {
	return this.loadBitmap('img/enemies/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/characters/
 * Возвращает true, если bitmap был изменен

 * @method loadCharacter
 * @param {String || null} filename - Имя файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Гладкий
 * @return Bitmap
*/
DKTools_Window_Base.prototype.loadCharacter = function(filename, listener, hue, smooth) {
	return this.loadBitmap('img/characters/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/faces/
 * Возвращает true, если bitmap был изменен

 * @method loadFace
 * @param {String || null} filename - Имя файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Гладкий
 * @return Bitmap
*/
DKTools_Window_Base.prototype.loadFace = function(filename, listener, hue, smooth) {
	return this.loadBitmap('img/faces/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/parallaxes/
 * Возвращает true, если bitmap был изменен

 * @method loadParallax
 * @param {String || null} filename - Имя файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Гладкий
 * @return Bitmap
*/
DKTools_Window_Base.prototype.loadParallax = function(filename, listener, hue, smooth) {
	return this.loadBitmap('img/parallaxes/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/pictures/
 * Возвращает true, если bitmap был изменен

 * @method loadPicture
 * @param {String || null} filename - Имя файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Гладкий
 * @return Bitmap
*/
DKTools_Window_Base.prototype.loadPicture = function(filename, listener, hue, smooth) {
	return this.loadBitmap('img/pictures/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/sv_actors/
 * Возвращает true, если bitmap был изменен

 * @method loadSvActor
 * @param {String || null} filename - Имя файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Гладкий
 * @return Bitmap
*/
DKTools_Window_Base.prototype.loadSvActor = function(filename, listener, hue, smooth) {
	return this.loadBitmap('img/sv_actors/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/sv_enemies/
 * Возвращает true, если bitmap был изменен

 * @method loadSvEnemy
 * @param {String || null} filename - Имя файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Гладкий
 * @return Bitmap
*/
DKTools_Window_Base.prototype.loadSvEnemy = function(filename, listener, hue, smooth) {
	return this.loadBitmap('img/sv_enemies/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/system/
 * Возвращает true, если bitmap был изменен

 * @method loadSystem
 * @param {String || null} filename - Имя файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Гладкий
 * @return Bitmap
*/
DKTools_Window_Base.prototype.loadSystem = function(filename, listener, hue, smooth) {
	return this.loadBitmap('img/system/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/tilesets/
 * Возвращает true, если bitmap был изменен

 * @method loadTileset
 * @param {String || null} filename - Имя файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Гладкий
 * @return Bitmap
*/
DKTools_Window_Base.prototype.loadTileset = function(filename, listener, hue, smooth) {
	return this.loadBitmap('img/tilesets/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/titles1/
 * Возвращает true, если bitmap был изменен

 * @method loadTitle1
 * @param {String || null} filename - Имя файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Гладкий
 * @return Bitmap
 */
DKTools_Window_Base.prototype.loadTitle1 = function(filename, listener, hue, smooth) {
	return this.loadBitmap('img/titles1/', filename, listener, hue, smooth);
};

/**
 * Загружает Bitmap из папки img/titles2/
 * Возвращает true, если bitmap был изменен

 * @method loadTitle2
 * @param {String || null} filename - Имя файла
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Гладкий
 * @return Bitmap
*/
DKTools_Window_Base.prototype.loadTitle2 = function(filename, listener, hue, smooth) {
	return this.loadBitmap('img/titles2/', filename, listener, hue, smooth);
};

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
DKTools_Window_Base.prototype.loadBitmap = function(folder, filename, listener, hue, smooth) {
	var bitmap = ImageManager.loadBitmap(folder, filename, hue, smooth);
	if (listener) bitmap.addLoadListener(listener);
	return bitmap;
};

/**
 * Загружает обложку окна из папки img/system/

 * @method loadWindowskin
 * @param {String || null} filename - Название обложки окна
 * @param {Function || null} listener - Метод обработки после загрузки Bitmap
 * @param {Number || null} hue - Оттенок
 * @param {Boolean || null} smooth - Гладкий
*/
DKTools_Window_Base.prototype.loadWindowskin = function(filename, listener, hue, smooth) {
	this.windowskin = this.loadSystem(filename || this.window_windowskin || this.standardWindowskin(), listener, hue, smooth);
};

/**
 * Запускает анимацию

 * @method startAnimation
 */
DKTools_Window_Base.prototype.startAnimation = function() {
	this._updateAnimation = true;
};

/**
 * Останавливает анимацию

 * @method stopAnimation
 */
DKTools_Window_Base.prototype.stopAnimation = function() {
	this._updateAnimation = false;
};

/**
 * Возвращает true, если анимация обновляется

 * @method isAnimationUpdating
 * @return Boolean
 */
DKTools_Window_Base.prototype.isAnimationUpdating = function() {
	return this._updateAnimation;
};

DKTools_Window_Base.prototype.changeTextColor = function(color) {
	if (this.setTextColor(color, true)) this.updateTextColor();
};

DKTools_Window_Base.prototype.changePaintOpacity = function(object) {
	// совместимость со стандартным changePaintOpacity
	if (object != null && object.constructor === Boolean) return Window_Base.prototype.changePaintOpacity.call(this, object);
	if (this.setPaintOpacity(object, true)) this.updatePaintOpacity();
};

/**
 * Скрывает и деактивирует окно

 * @method hide
*/
DKTools_Window_Base.prototype.hide = function() {
	Window_Base.prototype.hide.call(this);
	this.deactivate();
};

/**
 * Обновляет окно

 * @method updateWindow
*/
DKTools_Window_Base.prototype.updateWindow = function() {
	this.updateTone();
	this.updateOpacity();
	this.updateContents();
};

/**
 * Обновляет contents окна

 * @method updateContents
*/
DKTools_Window_Base.prototype.updateContents = function() {
	if (!this.clear()) return;
	this.updateTextColor();
	this.updateFont();
	this.updatePaintOpacity();
};

/**
 * Обновление тона окна

 * @method updateTone
*/
DKTools_Window_Base.prototype.updateTone = function() {
	this.window_tone = this.window_tone || $gameSystem.windowTone(); // совместимость с initialize Window_Base, которая вызывает updateTone()
	Window_Base.prototype.setTone.call(this, this.window_tone[0], this.window_tone[1], this.window_tone[2]);
};

/**
 * Обновление прозрачности окна

 * @method updateOpacity
*/
DKTools_Window_Base.prototype.updateOpacity = function() {
	this.opacity = this.window_opacity[0];
	this.contentsOpacity = this.window_opacity[1];
	this.backOpacity = this.window_opacity[2];
};

/**
 * Обновление цвета текста окна

 * @method updateTextColor
*/
DKTools_Window_Base.prototype.updateTextColor = function() {
	this.contents.textColor = this._textColor;
};

/**
 * Обновление шрифта текста окна

 * @method updateFont
*/
DKTools_Window_Base.prototype.updateFont = function() {
	this.contents.fontFace = this.window_font[0];
	this.contents.fontItalic = this.window_font[1];
	this.contents.fontSize = this.window_font[2];
};

/**
 * Обновление прозрачности рисования окна

 * @method updatePaintOpacity
*/
DKTools_Window_Base.prototype.updatePaintOpacity = function() {
	this.contents.paintOpacity = this.paint_opacity;
};

/**
 * Обновление открытия окна

 * @method updateOpen
*/
DKTools_Window_Base.prototype.updateOpen = function() {
	if (!this._opening) return;
	this.openness += 32;
	if (this.isOpen())
	{
		this._opening = false;
		this.callOpenHandler();
	}
};

/**
 * Обновление закрытия окна

 * @method updateClose
*/
DKTools_Window_Base.prototype.updateClose = function() {
	if (!this._closing) return;
	this.openness -= 32;
	if (this.isClosed())
	{
		this._closing = false;
		this.callCloseHandler();
	}
};

/**
 * Обновляет окно

 * @method update
 */
DKTools_Window_Base.prototype.update = function() {
	Window.prototype.update.call(this);
	this.updateOpen();
	this.updateClose();
	this.updateBackgroundDimmer();
	this.callUpdateHandler();
	this.callUpdateAnimationHandler();
};

DKTools_Window_Base.prototype.callUpdateHandler = function() {
	if (this.update_handler) this.update_handler(this.id);
};

DKTools_Window_Base.prototype.callUpdateAnimationHandler = function() {
	if (this._updateAnimation && this.update_animation_handler) this.update_animation_handler(this.id);
};

DKTools_Window_Base.prototype.callOpenHandler = function() {
	if (this.open_handler) this.open_handler(this.id);
};

DKTools_Window_Base.prototype.callCloseHandler = function() {
	if (this.close_handler) this.close_handler(this.id);
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

DKTools_Window_Selectable.prototype = Object.create(Window_Selectable.prototype);
DKTools_Window_Selectable.prototype.constructor = DKTools_Window_Selectable;

DKTools_Window_Selectable.prototype.initialize = function(x, y, width, height) {

};





//===========================================================================
// NOT READY
//===========================================================================
// DK Tools Window Command
//===========================================================================

/**
 * @class DKTools_Window_Command
 * @constructor
 * @param {Number} x - Координата X (The x coordinate for the upper-left corner)
 * @param {Number} y - Координата Y (The y coordinate for the upper-left corner)
 * @param {Number} width - Ширина окна (The width of the window)
 * @param {Number} height - Высота окна (The height of the window)
*/
function DKTools_Window_Command() {
	this.initialize.apply(this, arguments);
}

DKTools_Window_Command.prototype = Object.create(Window_Command.prototype);
// решить проблему с конструктором
DKTools_Window_Command.prototype.constructor = DKTools_Window_Command;
DKToolsUtils.mixin(DKTools_Window_Command.prototype, DKTools_Window_Base.prototype);
DKTools_Window_Command.prototype.constructor = DKTools_Window_Command;

DKTools_Window_Command.prototype.initialize = function(x, y, width, height) {
	this.window_width = width;
	this.window_height = height;
	this.clearStartListeners();
	//this.clearCommandList();
	//this.makeCommandList();
	this.setupId();
	//this.setupSpacing();
	//this.setupMaxCols();
	//this.setupItemTextAlign();
	//this.setupNumVisibleRows();
	this.setupCommandList();
	this.setupAll();
	Window_Command.prototype.initialize.call(this, x, y);
	//this.setupItemWidth();
	//this.setupItemHeight();
	this.setupActive();
	this.started = false;
	//this.refresh(); // нужно ли ?
};

// standard methods

DKTools_Window_Command.prototype.standardSpacing = function() {
	return 12;
};

DKTools_Window_Command.prototype.standardVerticalSpacing = function() {
	return 0;
};

DKTools_Window_Command.prototype.standardMaxCols = function() {
	return 1;
};

DKTools_Window_Command.prototype.standardItemTextAlign = function() {
	return 'center';
};

// setup methods

DKTools_Window_Command.prototype.setupSpacing = function(spacing) {
	this.item_spacing = spacing || this.standardSpacing();
};

DKTools_Window_Command.prototype.setupVerticalSpacing = function(spacing) {
	this.item_vertical_spacing = spacing || this.standardVerticalSpacing();
};

DKTools_Window_Command.prototype.setupMaxCols = function(cols) {
	this.max_cols = cols || this.standardMaxCols();
};

DKTools_Window_Command.prototype.setupItemTextAlign = function(align) {
	this.item_text_align = align || this.standardItemTextAlign();
};

DKTools_Window_Command.prototype.setupCommandList = function(command_list, symbol_list, enabled_list, ext_list) {
	this.command_list = command_list || [];
	this.symbol_list = symbol_list || [];
	this.enabled_list = enabled_list || [];
	this.ext_list = ext_list || [];
};

// set methods

DKTools_Window_Command.prototype.setSelectHandler = function(method) {
	this.select_handler = method;
};

DKTools_Window_Command.prototype.setDrawItemHandler = function(method) {
	this.draw_item_handler = method;
};

// other methods

DKTools_Window_Command.prototype.start = function() {
	DKTools_Window_Base.prototype.start.call(this);
	this.refresh();
	this.select(0);
};

/**
 * Возвращает ширину окна
 
 * @method windowWidth
 * @return Number
*/
DKTools_Window_Command.prototype.windowWidth = function() {
	return this.window_width || Window_Command.prototype.windowWidth.call(this);
};

/**
 * Возвращает высоту окна
 
 * @method windowWidth
 * @return Number
*/
DKTools_Window_Command.prototype.windowHeight = function() {
	return this.window_height || Window_Command.prototype.windowHeight.call(this);
};

DKTools_Window_Command.prototype.spacing = function() {
	return this.item_spacing || Window_Command.prototype.spacing.call(this);
};

DKTools_Window_Command.prototype.verticalSpacing = function() {
	return this.item_vertical_spacing || this.standardVerticalSpacing();
};

DKTools_Window_Command.prototype.maxCols = function() {
	return this.max_cols || Window_Command.prototype.maxCols.call(this);
};

DKTools_Window_Command.prototype.itemTextAlign = function() {
	return this.item_text_align || Window_Command.prototype.itemTextAlign.call(this);
};

DKTools_Window_Command.prototype.itemHeight = function() {
	return Window_Command.prototype.itemHeight.call(this) + this.verticalSpacing();
};

/**
 * Скрывает курсор
 
 * @method hideCursor
*/
DKTools_Window_Command.prototype.hideCursor = function() {
	this.setCursorRect(0, 0, 0, 0);
};

DKTools_Window_Command.prototype.deactivate = function() {
	Window_Command.prototype.deactivate.call(this);
	this.hideCursor();
};

DKTools_Window_Command.prototype.select = function(index) {
	var last_index = this.index(); // нужно ли ?
	Window_Command.prototype.select.call(this, index);
	if (last_index !== this.index())
		this.callSelectHandler();
};

DKTools_Window_Command.prototype.callSelectHandler = function() {
	if (this.select_handler) this.select_handler(this.id, this.index());
};

DKTools_Window_Command.prototype.drawItem = function(index) {
	var rect = this.itemRectForText(index);
	var align = this.itemTextAlign();
	this.changePaintOpacity(this.isCommandEnabled(index));
	if (this.draw_item_handler)
		this.draw_item_handler(this.id, index, rect, align);
	else
		this.drawText(this.commandName(index), align, rect);
};

DKTools_Window_Command.prototype.makeCommandList = function() {
	this.clearCommandList();
	for(var i = 0; i < this.command_list.length; i++)
		this.addCommand(this.command_list[i], this.symbol_list[i], this.enabled_list[i], this.ext_list[i]);
};

/**
 * Обновляет окно
 
 * @method update
*/
DKTools_Window_Command.prototype.update = function() {
	Window_Command.prototype.update.call(this);
	this.callUpdateHandler();
	this.callUpdateAnimationHandler();
};

DKTools_Window_Command.prototype.refresh = function() {
	this.clearCommandList();
	this.makeCommandList();
	if (!this.clear()) return;
	this.drawAllItems();
};





//===========================================================================
// NOT READY
//===========================================================================
// DK Tools Window Horz Command
//===========================================================================

// НУЖНО ЛИ ?

/**
 * @class DKTools_Window_HorzCommand
 * @constructor
 * @param {Number} x - Координата X (The x coordinate for the upper-left corner)
 * @param {Number} y - Координата Y (The y coordinate for the upper-left corner)
 * @param {Number} width - Ширина окна (The width of the window)
 * @param {Number} height - Высота окна (The height of the window)
 */
function DKTools_Window_HorzCommand() {
	this.initialize.apply(this, arguments);
}

DKTools_Window_HorzCommand.prototype = Object.create(Window_Command.prototype);
DKTools_Window_HorzCommand.prototype.constructor = DKTools_Window_Command;

DKTools_Window_HorzCommand.prototype.numVisibleRows = function() {
	return 1;
};

DKTools_Window_HorzCommand.prototype.maxCols = function() {
	return 3;
};

DKTools_Window_HorzCommand.prototype.itemTextAlign = function() {
	return 'center';
};





//===========================================================================
// Элементы, основанные на DKTools_Window_Base
// Elements based on DKTools_Window_Base
//===========================================================================









//===========================================================================
// Элементы, основанные на DKTools_Window_Command
// Elements based on DKTools_Window_Command
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
DKTools_Scene_Base.prototype.constructor = Scene_Base;

DKTools_Scene_Base.prototype.create = function() {
	this.createBackground();
	this.createWindowLayer();
	this.createAllWindows();
};

DKTools_Scene_Base.prototype.createBackground = function() {
};

DKTools_Scene_Base.prototype.createAllWindows = function() {
};

DKTools_Scene_Base.prototype.removeWindow = function(window) {
	this._windowLayer.removeChild(window);
};