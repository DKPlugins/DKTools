/*
Title: DKTools
Author: DK (Denis Kuznetsov) (http://vk.com/dk_plugins)
Site: http://dk-plugins.ru
Group in VK: http://vk.com/dkplugins
Version: 0.92 beta
Release: 05.09.2016
First release: 13.01.2016
Supported languages: Russian, English
*/

/*
Название: DKTools
Автор: DK (Денис Кузнецов) (http://vk.com/dk_plugins)
Сайт: http://dk-plugins.ru
Группа ВК: http://vk.com/dkplugins
Версия: 0.92 beta
Релиз: 05.09.2016
Первый релиз: 13.01.2016
Поддерживаемые языки: Русский, Английский
*/

var DKLocalization = DKLocalization || {};

//===========================================================================
// Настройки плагина
// Plugin settings
//===========================================================================

// Настройки перевода
// Translation settings

// Инструкция
// Instruction

// Язык плагина: перевод
// Plugin language: translation

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
// Конец настройки плагина
// End of plugin settings
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
 Release: 05.09.2016
 First release: 13.01.2016
 Supported languages: Russian, English

 ### Elements ###
 1. DKTools_Sprite
 2. DKTools_Sprite_Button
 3. DKTools_Text
 4. DKTools_Container_Base
 5. DKTools_Text_Container
 6. DKTools_Container
 7. DKTools_Progress_Bar_Base
 8. DKTools_Input_Base
 9. DKTools_CheckBox_Base
 10. DKTools_Radio_Button_Base
 11. DKTools_ColorPicker_Base
 12. DKTools_Slider_Base
 13. DKTools_Progress_Bar
 14. DKTools_Input
 15. DKTools_CheckBox
 16. DKTools_Radio_Button
 17. DKTools_ColorPicker
 18. DKTools_Slider
 19. DKTools_Window_Base
 20. DKTools_Window_Selectable
 21. DKTools_Window_Command

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
 Релиз: 05.09.2016
 Первый релиз: 13.01.2016
 Поддерживаемые языки: Русский, Английский
 
 ### Элементы ###
 1. DKTools_Sprite
 2. DKTools_Sprite_Button
 3. DKTools_Text
 4. DKTools_Container_Base
 5. DKTools_Text_Container
 6. DKTools_Container
 7. DKTools_Progress_Bar_Base
 8. DKTools_Input_Base
 9. DKTools_CheckBox_Base
 10. DKTools_Radio_Button_Base
 11. DKTools_ColorPicker_Base
 12. DKTools_Slider_Base
 13. DKTools_Progress_Bar
 14. DKTools_Input
 15. DKTools_CheckBox
 16. DKTools_Radio_Button
 17. DKTools_ColorPicker
 18. DKTools_Slider
 19. DKTools_Window_Base
 20. DKTools_Window_Selectable
 21. DKTools_Window_Command
 
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
            return;
        }
        DKLocale = locale;
        ConfigManager.save();
        this.onLocaleChange(DKLocale);
    };

    DKLocalizationManager.onLocaleChange = function() {
    };

    DKLocalizationManager.translation = function (plugin, param) {
        var plugin_localization = DKLocalization[plugin];
        var locale = DKLocale;
        if (!plugin_localization) {
            var error = 'undefined plugin: "%1"'.format(plugin);
            throw new Error(error);
        }
        var param_translation = plugin_localization[param];
        if (!param_translation) {
            var error = '%1: undefined parameter: "%2"'.format(plugin, param);
            throw new Error(error);
        }
        var result = param_translation[locale];
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
DKToolsUtils.debug = true;

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
    if (value == null) {
        return false;
    }
    if (Number(value) === 0) {
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
    if (object === '') {
        return [];
    }
    if (object.constructor === String) {
        object = this.splitString(object);
    }
    return object.map(function(value) {
        return Number(value);
    });
};

DKToolsUtils.stringToBoolArray = function(object) {
    if (object === '') {
        return [];
    }
    if (object.constructor === String) {
        object = this.splitString(object);
    }
    return object.map(function(value) {
        return this.toBoolean(value);
    }, this);
};

DKToolsUtils.stringToFontArray = function(font) {
    var standard_font_array = this.standardFontArray();
    if (font === '') {
        return standard_font_array;
    }
    if (font.constructor === String) {
        font = this.splitString(font);
    }
    if (font.length === 0) {
        return standard_font_array;
    }
    var array = [];
    if (font[0] !== '-1') {
        array[0] = font[0];
    } else {
        array[0] = standard_font_array[0];
    }
    array[1] = this.toBoolean(font[1]);
    if (font[2] !== '-1') {
        array[2] = Number(font[2]);
    } else {
        array[2] = standard_font_array[2];
    }
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
 * Копирует функции из одного класса в другой

 * @method mixin
 *
 * @param {Object} dst - Куда копируем
 * @param {Object} src - Откуда копируем
*/
DKToolsUtils.mixin = function(dst, src) {
    for(var property in src) {
        dst[property] = src[property];
    }
};

DKToolsUtils.checkVersion = function() {
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
// DKTools Input Manager
//===========================================================================

function DKToolsInputManager() {
	throw new Error('This is a static class (Это статический класс!)');
}

DKToolsInputManager.ignored_key_codes = [8, 13, 27];

DKToolsInputManager.isKeyCodeIgnored = function(key_code) {
	return DKToolsInputManager.ignored_key_codes.contains(key_code);
};

DKToolsInputManager.onKeyPress = function(event) {
	if (DKToolsInputManager.isKeyCodeIgnored(event.keyCode)) {
        return;
    }
	if (DKToolsInputManager.checkInputText()) {
        DKToolsInputManager.input_text += String.fromCharCode(event.charCode);
    } else {
        DKToolsInputManager.input_text = String.fromCharCode(event.charCode);
    }
};

DKToolsInputManager.clearInputText = function() {
	this.input_text = null;
};

DKToolsInputManager.checkInputText = function() {
	return this.input_text != null;
};

DKToolsInputManager.getInputText = function() {
	if (!this.checkInputText()) {
        return '';
    }
	var text = this.input_text;
	this.clearInputText();
	return text;
};

//===========================================================================
// Input
//===========================================================================

Input.keyMapper[8] = 'backspace';   // backspace
Input.keyMapper[32] = 'space';      // space
Input.keyMapper[46] = 'delete';     // delete
//Input.keyMapper[70] = 'f';          // f F

/**
 * Очищает ввод

 * @method clear
*/
var DKTools_Input_clear = Input.clear;
Input.clear = function() {
	DKTools_Input_clear.call(this);
	DKToolsInputManager.clearInputText();
};

/**
 * Устанавливает обработчики для ввода

 * @method _setupEventHandlers
*/
var DKTools_Input_setupEventHandlers = Input._setupEventHandlers;
Input._setupEventHandlers = function () {
	DKTools_Input_setupEventHandlers.call(this);
    document.addEventListener('keypress', DKToolsInputManager.onKeyPress);
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

    Bitmap.prototype.clone = function() {
        var old_canvas = this.canvas;
        var width = old_canvas.width;
        var height = old_canvas.height;
        var new_bitmap = new Bitmap(width, height);
        var new_context = new_bitmap.context;
        new_context.drawImage(old_canvas, 0, 0);
        return new_bitmap;
    };

}





//===========================================================================
// Scene Manager
//===========================================================================

var DKTools_SceneManager_initialize = SceneManager.initialize;
SceneManager.initialize = function() {
    DKTools_SceneManager_initialize.call(this);
    DKToolsUtils.checkVersion();
};





//===========================================================================
// DK Tools Sprite
//===========================================================================

function DKTools_Sprite() {
	this.initialize.apply(this, arguments);
}

DKTools_Sprite.prototype = Object.create(Sprite.prototype);
DKTools_Sprite.prototype.constructor = DKTools_Sprite;

DKTools_Sprite.counter = 0;

// initialize method

/**
 * @class DKTools_Sprite
 *
 * @constructor
 *
 * @param {Number || Bitmap || Object || null} object - Координата X или Bitmap или Объект типа {} (The x coordinate for the upper-left corner)
 * @param {Number || null} y - Координата Y (The y coordinate for the upper-left corner)
 * @param {Number || null} width - Ширина Bitmap (The width of the Bitmap)
 * @param {Number || null} height - Высота Bitmap (The height of the Bitmap)
 *
 * object properties
 * @property {Number || null} x - Координата X
 * @property {Number || null} y - Координата Y
 * @property {Number || null} width - Ширина Bitmap
 * @property {Number || null} height - Высота Bitmap
 * @property {Number || String || null} id - ID спрайта
 * @property {Number || null} visible - Видимость спрайта
 * @property {Bitmap || Object || null} bitmap - Bitmap или Объект типа {}
 * @property {Object || null} setup_all - Объект типа {}
 *
 * object.bitmap properties
 * @property {String} folder - Путь к файлу
 * @property {String} filename - Название файла
 * @property {Function || null} listener - Метод обработки после загрузки Bitmap
 * @property {Number || null} hue - Оттенок
 * @property {Boolean || null} smooth - Сглаживание
 *
 * @see object.setup_all properties: DKTools_Sprite.prototype.setupAll
*/
DKTools_Sprite.prototype.initialize = function(object, y, width, height) {
	Sprite.prototype.initialize.call(this);
	this.clearReadyListeners();
	this.clearStartListeners();
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
	this.move(x || 0, y || 0);
	this.setupSize(width, height);
    this.setupAll(object);
	this.setupBitmap(bitmap);
    DKTools_Sprite.counter++;
	this.started = false;
};

// standard methods

/**
 * Возвращает стандартное значение видимости

 * @method standardVisible
 * @return Boolean
*/
DKTools_Sprite.prototype.standardVisible = function() {
	return true;
};

/**
 * Возвращает стандартный цвет текста

 * @method standardTextColor
 * @return String
*/
DKTools_Sprite.prototype.standardTextColor = function() {
	return '#ffffff';
};

/**
 * Возвращает стандартный X текста

 * @method standardTextX
 * @return Number
*/
DKTools_Sprite.prototype.standardTextX = function() {
	return 0;
};

/**
 * Возвращает стандартный Y текста

 * @method standardTextY
 * @return Number
*/
DKTools_Sprite.prototype.standardTextY = function() {
	return 0;
};

/**
 * Возвращает стандартное имя шрифта

 * @method standardFontName
 * @return String
*/
DKTools_Sprite.prototype.standardFontName = function() {
	return 'GameFont';
};

/**
 * Возвращает стандартное значение для курсива

 * @method standardFontItalic
 * @return Boolean
*/
DKTools_Sprite.prototype.standardFontItalic = function() {
	return false;
};

/**
 * Возвращает стандартный размер шрифта

 * @method standardFontSize
 * @return Number
*/
DKTools_Sprite.prototype.standardFontSize = function() {
	return 28;
};

/**
 * Возвращает стандартный шрифт

 * @method standardFont
 * @return Array
*/
DKTools_Sprite.prototype.standardFont = function() {
	return [this.standardFontName(), this.standardFontItalic(), this.standardFontSize()];
};

/**
 * Возвращает стандартное выравнивание

 * @method standardAlign
 * @return String
*/
DKTools_Sprite.prototype.standardAlign = function() {
	return 'center';
};

/**
 * Возвращает стандартный цвет фона

 * @method standardBackgroundColor
 * @return null
*/
DKTools_Sprite.prototype.standardBackgroundColor = function() {
	return null;
};

/**
 * Возвращает стандартную прозрачность

 * @method standardOpacity
 * @return Number
 */
DKTools_Sprite.prototype.standardOpacity = function() {
	return 255;
};

/**
 * Возвращает стандартный путь к папке с графикой

 * @method standardGraphicFolder
 * @return String
 */
DKTools_Sprite.prototype.standardGraphicFolder = function() {
    return 'img/system/';
};

// setup methods

/**
 * Устанавливает все параметры спрайта
 
 * @method setupAll
 *
 * @param {Object || null} object - Объект типа {}
 *
 * @property {Number || null} id - ID спрайта
 * @property {Boolean || null} visible - Видимость спрайта
 * @property {String || null} text_color - Цвет текста
 * @property {String || null} align - Выравнивание текста
 * @property {String || null} background_color - Цвет фона
 * @property {Number || null} text_x - Координата X текста
 * @property {Number || null} text_y - Координата Y текста
 * @property {Array || null} font - Шрифт текста
 * @property {Number || null} opacity - Прозрачность спрайта
*/
DKTools_Sprite.prototype.setupAll = function(object) {
	object = object || {};
    this.setupId(object.id);
    this.setupVisible(object.visible);
	this.setupTextColor(object.text_color);
	this.setupAlign(object.align);
	this.setupBackgroundColor(object.background_color);
	this.setupTextX(object.text_x);
	this.setupTextY(object.text_y);
	this.setupFont(object.font);
	this.setupOpacity(object.opacity);
};

/**
 * Устанавливает ширину Bitmap
 
 * @method setupWidth
 * @param {Number || null} width - Ширина Bitmap
*/
DKTools_Sprite.prototype.setupWidth = function(width) {
	this.bitmap_width = (width ? width.clamp(this.minWidth(), this.maxWidth()) : this.minWidth());
};

/**
 * Устанавливает высоту Bitmap
 
 * @method setupHeight
 * @param {Number || null} height - Высота Bitmap
*/
DKTools_Sprite.prototype.setupHeight = function(height) {
	this.bitmap_height = (height ? height.clamp(this.minHeight(), this.maxHeight()) : this.minHeight());
};

/**
 * Устанавливает размер Bitmap

 * @method setupSize
 *
 * @param {Number || null} width - Ширина Bitmap
 * @param {Number || null} height - Высота Bitmap
*/
DKTools_Sprite.prototype.setupSize = function(width, height) {
	this.setupWidth(width);
	this.setupHeight(height);
};

/**
 * Устанавливает ID спрайта

 * @method setupId
 * @param {Number || String || null} id - ID спрайта
 */
DKTools_Sprite.prototype.setupId = function(id) {
    this.id = (id == null ? null : id);
};

/**
 * Устанавливает видимость спрайта

 * @method setupVisible
 * @param {Number || null} visible - Видимость спрайта
*/
DKTools_Sprite.prototype.setupVisible = function(visible) {
	this.visible = (visible == null ? this.standardVisible() : visible);
};

/**
 * Устанавливает цвет текста

 * @method setupTextColor
 * @param {String || null} text_color - Цвет текста
*/
DKTools_Sprite.prototype.setupTextColor = function(text_color) {
	this.text_color = text_color || this.standardTextColor();
};

/**
 * Устанавливает выравнивание текста

 * @method setupAlign
 * @param {String || null} align - Выравнивание текста
*/
DKTools_Sprite.prototype.setupAlign = function(align) {
	this.align = align || this.standardAlign();
};

/**
 * Устанавливает цвет фона

 * @method setupBackgroundColor
 * @param {String || null} background_color - Цвет фона
*/
DKTools_Sprite.prototype.setupBackgroundColor = function(background_color) {
	this.background_color = background_color || this.standardBackgroundColor();
};

/**
 * Устанавливает X текста

 * @method setupTextX
 * @param {Number || null} x - Координата X текста
*/
DKTools_Sprite.prototype.setupTextX = function(x) {
	this.text_x = (x == null ? this.standardTextX() : x);
};

/**
 * Устанавливает Y текста

 * @method setupTextY
 * @param {Number || null} y - Координата Y текста
*/
DKTools_Sprite.prototype.setupTextY = function(y) {
	this.text_y = (y == null ? this.standardTextY() : y);
};

/**
 * Устанавливает шрифт текста

 * @method setupFont
 * @param {Array || null} font - Шрифт текста
*/
DKTools_Sprite.prototype.setupFont = function(font) {
	var standard_font = this.standardFont();
	font = font || [];
	this.font = [];
	for(var i = 0; i < 3; i++) {
        this.font[i] = (font[i] == null ? standard_font[i] : font[i]);
    }
};

/**
 * Устанавливает прозрачность спрайта
 
 * @method setupOpacity
 * @param {Number || null} opacity - Прозрачность спрайта
*/
DKTools_Sprite.prototype.setupOpacity = function(opacity) {
	this.opacity = (opacity == null ? this.standardOpacity() : opacity);
};

/**
 * Устанавливает Bitmap для спрайта
 
 * @method setupBitmap
 * @param {Bitmap || null} bitmap - Bitmap спрайта
*/
DKTools_Sprite.prototype.setupBitmap = function(bitmap) {
	this.bitmap = bitmap || null;
	if (this.bitmap) {
		this.bitmap.addLoadListener(function() {
			this.setupSize(this.bitmap.width, this.bitmap.height);
		}.bind(this));
	}
	this.fixed_bitmap = !!this.bitmap;
};

// set methods

/**
 * Изменяет все параметры спрайта
 * Возвращает количество измененных параметров
 
 * @method setAll
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} block_start - Блокировка вызова функции start
 *
 * @property {String || null} text_color - Цвет текста
 * @property {String || null} align - Выравнивание текста
 * @property {String || null} background_color - Цвет фона
 * @property {Number || null} text_x - Координата X текста
 * @property {Number || null} text_y - Координата Y текста
 * @property {Array || null} font - Шрифт текста
 * @property {Number || null} opacity - Прозрачность спрайта
 *
 * @return Number
*/
DKTools_Sprite.prototype.setAll = function(object, block_start) {
	object = object || {};
	var changed = 0;
	var block = true;
    this.activateSetAllMode();
	if (this.setTextColor(object.text_color, block)) {
        changed++;
    }
	if (this.setAlign(object.align, block)) {
        changed++;
    }
	if (this.setBackgroundColor(object.background_color, block)) {
        changed++;
    }
	if (this.setTextX(object.text_x, block)) {
        changed++;
    }
	if (this.setTextY(object.text_y, block)) {
        changed++;
    }
	if (this.setFont(object.font, block)) {
        changed++;
    }
	if (changed && !block_start) {
        this.start();
    }
	if (this.setOpacity(object.opacity)) {
        changed++;
    }
    this.deactivateSetAllMode();
	return changed;
};

/**
 * Изменяет ширину Bitmap
 * Возвращает true, если изменение произошло
 
 * @method setWidth
 *
 * @param {Number || null} width - Ширина Bitmap
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
*/
DKTools_Sprite.prototype.setWidth = function(width, block) {
	return this.resize(width, this.bitmap_height, block);
};

/**
 * Изменяет высоту Bitmap
 * Возвращает true, если изменение произошло
 
 * @method setHeight
 *
 * @param {Number || null} height - Высота Bitmap
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
*/
DKTools_Sprite.prototype.setHeight = function(height, block) {
	return this.resize(this.bitmap_width, height, block);
};

/**
 * Изменяет видимость спрайта
 * Возвращает true, если изменение произошло

 * @method setVisible
 *
 * @param {Boolean || null} visible - Видимость спрайта
 *
 * @return Boolean
*/
DKTools_Sprite.prototype.setVisible = function(visible) {
	if (this.visible === visible) {
        return false;
    }
	var last_visible = this.visible;
	this.setupVisible(visible);
	return last_visible !== this.visible;
};

/**
 * Изменяет цвет текста
 * Возвращает true, если изменение произошло

 * @method setTextColor
 *
 * @param {String || null} color - Цвет текста
 * @param {Boolean || null} block - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
*/
DKTools_Sprite.prototype.setTextColor = function(color, block) {
	if (this.text_color === color) {
        return false;
    }
	var last_color = this.text_color;
	this.setupTextColor(color);
	if (last_color === this.text_color) {
        return false;
    }
	if (!block) {
        this.updateBitmap();
    }
	return true;
};

/**
 * Изменяет выравнивание текста
 * Возвращает true, если изменение произошло

 * @method setAlign
 *
 * @param {String || null} align - Выравнивание текста
 * @param {Boolean || null} block - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
*/
DKTools_Sprite.prototype.setAlign = function(align, block) {
	if (this.align === align) {
        return false;
    }
	var last_align = this.align;
	this.setupAlign(align);
	if (last_align === this.align) {
        return false;
    }
	if (!block) {
        this.updateBitmap();
    }
	return true;
};

/**
 * Изменяет цвет фона
 * Возвращает true, если изменение произошло

 * @method setBackgroundColor
 *
 * @param {String || null} color - Цвет фона
 * @param {Boolean || null} block - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
*/
DKTools_Sprite.prototype.setBackgroundColor = function(color, block) {
	if (this.background_color === color) {
        return false;
    }
	var last_color = this.background_color;
	this.setupBackgroundColor(color);
	if (last_color === this.background_color) {
        return false;
    }
	if (!block) {
        this.updateBitmap();
    }
	return true;
};

/**
 * Изменяет координату X текста
 * Возвращает true, если изменение произошло

 * @method setTextX
 *
 * @param {Number || null} x - Координата X текста
 * @param {Boolean || null} block - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
*/
DKTools_Sprite.prototype.setTextX = function(x, block) {
	if (this.text_x === x) {
        return false;
    }
	var last_x = this.text_x;
	this.setupTextX(x);
	if (last_x === this.text_x) {
        return false;
    }
	if (!block) {
        this.updateBitmap();
    }
	return true;
};

/**
 * Изменяет координату Y текста
 * Возвращает true, если изменение произошло

 * @method setTextY
 *
 * @param {Number || null} y - Координата Y текста
 * @param {Boolean || null} block - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
*/
DKTools_Sprite.prototype.setTextY = function(y, block) {
	if (this.text_y === y) {
        return false;
    }
	var last_y = this.text_y;
	this.setupTextY(y);
	if (last_y === this.text_y) {
        return false;
    }
	if (!block) {
        this.updateBitmap();
    }
	return true;
};

/**
 * Изменяет шрифт текста
 * Возвращает true, если изменение произошло

 * @method setFont
 *
 * @param {Array || null} font - Шрифт текста
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
*/
DKTools_Sprite.prototype.setFont = function(font, block) {
	if (this.font == font) {
        return false;
    }
	font = font || this.standardFont();
	if (this.font[0] === font[0] && this.font[1] === font[1] && this.font[2] === font[2]) {
        return false;
    }
	this.setupFont(font);
	if (this.font[0] === font[0] && this.font[1] === font[1] && this.font[2] === font[2]) {
        return false;
    }
	if (!block) {
        this.start();
    }
	return true;
};

/**
 * Изменяет прозрачность спрайта
 * Возвращает true, если изменение произошло
 
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
	var last_opacity = this.opacity;
	this.setupOpacity(opacity);
	return last_opacity !== this.opacity;
};

/**
 * Изменяет Bitmap спрайта
 * Возвращает true, если изменение произошло
 
 * @method setBitmap
 *
 * @param {Bitmap || null} bitmap - Bitmap спрайта
 *
 * @return Boolean
*/
DKTools_Sprite.prototype.setBitmap = function(bitmap) {
	if (this.bitmap == bitmap) {
        return false;
    }
	this.setupBitmap(bitmap);
	return true;
};

/**
 * Устанавливает функцию, вызываемую при обновлении спрайта

 * @method setUpdateHandler
 * @param {Function} method - Функция, вызываемая при обновлении спрайта
*/
DKTools_Sprite.prototype.setUpdateHandler = function(method) {
	this.update_handler = method;
};

/**
 * Устанавливает функцию, вызываемую для обновления анимации спрайта

 * @method setUpdateAnimationHandler
 * @param {Function} method - Функция, вызываемая для обновления анимации спрайта
*/
DKTools_Sprite.prototype.setUpdateAnimationHandler = function(method) {
	this.update_animation_handler = method;
};

/**
 * Устанавливает функцию, вызываемую при запуске работы спрайта

 * @method setStartHandler
 * @param {Function} method - Функция, вызываемая при запуске работы спрайта
*/
DKTools_Sprite.prototype.setStartHandler = function(method) {
	this.start_handler = method;
};

// other methods

/**
 * Запускает работу спрайта

 * @method start
*/
DKTools_Sprite.prototype.start = function() {
    this.createBitmap();
    this.updateBitmap();
    this.started = true;
    this.callStartListeners();
    this.callStartHandler();
};

/**
 * Очищает Rect, если Bitmap есть
 * Возвращает true, если Bitmap есть

 * @method clearRect
 *
 * @param {Number || Rectangle || null} object - Координата X (Number) или область (Rectangle)
 * @param {Number || null} y - Координата Y
 * @param {Number || null} width - Ширина области
 * @param {Number || null} height - Высота области
 *
 * @return Boolean
*/
DKTools_Sprite.prototype.clearRect = function(object, y, width, height) {
	if (!this.bitmap) {
        return false;
    }
	var x = object;
	if (object && object.constructor === Rectangle) {
        return this.clearRect(object.x, object.y, object.width, object.height);
	}
	this.bitmap.clearRect(x || 0, y || 0, width || this.bitmap_width, height || this.bitmap_height);
	return true;
};

/**
 * Очищает весь Bitmap, если он есть
 * Возвращает true, если Bitmap есть

 * @method clear
 * @return Boolean
*/
DKTools_Sprite.prototype.clear = function() {
	return this.clearRect();
};

/**
 * Устанавливает высоту и ширину Bitmap, если они отличаются от текущих
 * Возвращает true, если изменение произошло
 * Sets the width and height of the Bitmap, if they differ from the current
 * Returns true, if the change occurred

 * @method resize
 *
 * @param {Number || null} width - Ширина Bitmap (The width of the Bitmap)
 * @param {Number || null} height - Высота Bitmap (The height of the Bitmap)
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
*/
DKTools_Sprite.prototype.resize = function(width, height, block) {
	if (width == null) {
        width = this.minWidth();
    }
	if (height == null) {
        height = this.minHeight();
    }
	if (this.bitmap_width === width && this.bitmap_height === height) {
        return false;
    }
	var last_width = this.bitmap_width;
	var last_height = this.bitmap_height;
	this.setupSize(width, height);
	if (last_width === this.bitmap_width && last_height === this.bitmap_height) {
        return false;
    }
	if (!block) {
        this.start();
    }
	return true;
};

/**
 * Клонирует текущий спрайт

 * @method clone
 *
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return DKTools_Sprite
*/
if (DKToolsUtils.debug) {

    DKTools_Sprite.prototype.clone = function(block) {
        var object = {
            x: this.x,
            y: this.y,
            width: this.bitmap_width,
            height: this.bitmap_height,
            id: this.id,
            visible: this.visible,
            text_color: this.text_color,
            align: this.align,
            background_color: this.background_color,
            text_x: this.text_x,
            text_y: this.text_y,
            font: this.font,
            opacity: this.opacity
        };
        var sprite = new DKTools_Sprite(object);
        if (this.bitmap) {
            sprite.setupBitmap(this.bitmap.clone());
        }
        if (!block) {
            sprite.start();
        }
        return sprite;
    };
}

/**
 * Проверяет ширину и высоту Bitmap на соответствие минимальным значениям
 * Возвращает true, если изменение произошло

 * @method checkSize
 * @return Number
*/
DKTools_Sprite.prototype.checkSize = function() {
	var min_width = this.minWidth();
	var min_height = this.minHeight();
	var changed = 0;
	if (this.bitmap_width < min_width) {
		this.setupWidth(min_width);
		changed++;
	}
	if (this.bitmap_height < min_height) {
		this.setupHeight(min_height);
		changed++;
	}
	return changed;
};

/**
 * Возвращает Bitmap из объекта или загружает его

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

 * @method minWidth
 * @return Number
*/
DKTools_Sprite.prototype.minWidth = function() {
	return 1;
};

/**
 * Возвращает минимальную высоту Bitmap
 * Returns the minimum height of the Bitmap

 * @method minHeight
 * @return Number
*/
DKTools_Sprite.prototype.minHeight = function() {
	return 1;
};

/**
 * Возвращает максимальную ширину Bitmap

 * @method maxWidth
 * @return Number
*/
DKTools_Sprite.prototype.maxWidth = function() {
	return Graphics.boxWidth;
};

/**
 * Возвращает максимальную высоту Bitmap

 * @method maxHeight
 * @return Number
*/
DKTools_Sprite.prototype.maxHeight = function() {
	return Graphics.boxHeight;
};

/**
 * Возвращает ширину текста
 * Returns the width of text

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
	if (this.bitmap) {
        return this.bitmap.measureTextWidth(text);
    }
	var bitmap = new Bitmap();
	return bitmap.measureTextWidth(text);
};

DKTools_Sprite.prototype.isSetAllMode = function() {
    return this.set_all_mode;
};

DKTools_Sprite.prototype.activateSetAllMode = function() {
    this.set_all_mode = true;
};

DKTools_Sprite.prototype.deactivateSetAllMode = function() {
    this.set_all_mode = false;
};

/**
 * Создает Bitmap спрайта шириной bitmap_width и высотой bitmap_height

 * @method createBitmap
*/
DKTools_Sprite.prototype.createBitmap = function() {
	if (this.bitmapIsFixed()) {
        return;
    }
	this.removeBitmap();
	this.bitmap = new Bitmap(this.bitmap_width, this.bitmap_height);
};

/**
 * Удаляет Bitmap спрайта

 * @method removeBitmap
*/
DKTools_Sprite.prototype.removeBitmap = function() {
	if (this.bitmap == null) {
        return;
    }
	this.setBitmap();
};

/**
 * Возвращает true, если на спрайт можно нажимать

 * @method isSpriteButton
 * @return Boolean
*/
DKTools_Sprite.prototype.isSpriteButton = function() {
    return false;
};

/**
 * Возвращает true, если спрайт виден

 * @method isVisible
 * @return Boolean
*/
DKTools_Sprite.prototype.isVisible = function() {
	return this.visible;
};

/**
 * Возвращает true, если работа спрайта была запущена

 * @method isStarted
 * @return Boolean
*/
DKTools_Sprite.prototype.isStarted = function() {
	return this.started;
};

/**
 * Возвращает true, если Bitmap готов

 * @method isReady
 * @return Boolean
*/
DKTools_Sprite.prototype.isReady = function () {
	return this.bitmap ? this.bitmap.isReady() : false;
};

/**
 * Возвращает true, если Bitmap был установлен функцией setupBitmap или setBitmap, а не создан createBitmap

 * @method bitmapIsFixed
 * @return Boolean
*/
DKTools_Sprite.prototype.bitmapIsFixed = function() {
    return this.fixed_bitmap;
};

/**
 * Очищает "слушателей" старта спрайта

 * @method clearStartListeners
*/
DKTools_Sprite.prototype.clearStartListeners = function() {
	this.start_listeners = [];
};

/**
 * Очищает "слушателей" готовности спрайта

 * @method clearReadyListeners
*/
DKTools_Sprite.prototype.clearReadyListeners = function() {
	this.ready_listeners = [];
};

/**
 * Добавляет "слушателя" старта спрайта

 * @method addStartListener
 * @param {Function} listener - "Слушатель" старта спрайта
*/
DKTools_Sprite.prototype.addStartListener = function(listener) {
	this.isStarted() ? listener(this.id) : this.start_listeners.push(listener);
};

/**
 * Добавляет "слушателя" готовности спрайта

 * @method addReadyListener
 * @param {Function} listener - "Слушатель" готовности спрайта
*/
DKTools_Sprite.prototype.addReadyListener = function(listener) {
	this.isReady() ? listener(this.id) : this.ready_listeners.push(listener);
};

/**
 * Вызывает "слушателей" старта спрайта

 * @method callStartListeners
*/
DKTools_Sprite.prototype.callStartListeners = function() {
	if (!this.isStarted()) {
        return;
    }
	while(this.start_listeners.length > 0) {
        this.start_listeners.shift()(this.id);
    }
};

/**
 * Вызывает обработчик старта спрайта

 * @method callStartHandler
*/
DKTools_Sprite.prototype.callStartHandler = function() {
	if (this.isStarted() && this.start_handler)	{
        this.start_handler(this.id);
    }
};

/**
 * Вызывает "слушателей" готовности спрайта

 * @method callReadyListeners
*/
DKTools_Sprite.prototype.callReadyListeners = function() {
	if (!this.isReady()) {
        return;
    }
	while(this.ready_listeners.length > 0) {
        this.ready_listeners.shift()(this.id);
    }
};

/**
 * Заливает область цветом
 * Возвращает true, если Bitmap существует

 * @method fillRect
 *
 * @param {String || null} color - Цвет заливки
 * @param {Number || Rectangle || null} object - Координата X (Number) или область (Rectangle)
 * @param {Number || null} y - Координата Y
 * @param {Number || null} width - Ширина области
 * @param {Number || null} height - Высота области
 *
 * @return Boolean
*/
DKTools_Sprite.prototype.fillRect = function(color, object, y, width, height) {
	if (!this.bitmap) {
        return false;
    }
	var x = object;
	if (object && object.constructor === Rectangle) {
        return this.fillRect(color, object.x, object.y, object.width, object.height);
	}
	this.bitmap.fillRect(x || 0, y || 0, width || this.bitmap_width, height || this.bitmap_height, color || '#ffffff');
	return true;
};

/**
 * Заливает весь Bitmap цветом
 * Возвращает true, если Bitmap существует

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

 * @method gradientFillRect
 *
 * @param {String || null} color1 - Цвет 1
 * @param {String || null} color2 - Цвет 2
 * @param {Boolean || null} vertical - Вертикальный градиент
 * @param {Number || Rectangle || null} object - Координата X (Number) или область (Rectangle)
 * @param {Number || null} y - Координата Y
 * @param {Number || null} width - Ширина области
 * @param {Number || null} height - Высота области
 *
 * @return Boolean
*/
DKTools_Sprite.prototype.gradientFillRect = function(color1, color2, vertical, object, y, width, height) {
	if (!this.bitmap) {
        return false;
    }
	var x = object;
	if (object && object.constructor === Rectangle) {
        return this.gradientFillRect(color1, color2, vertical, object.x, object.y, object.width, object.height);
	}
	this.bitmap.gradientFillRect(x || 0, y || 0, width || this.bitmap_width, height || this.bitmap_height, color1 || '#ffffff', color2 || '#000000', vertical);
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
        if (!this.bitmap) return false;
        var x;
        if (object && object.constructor === Number) x = object;
        if (object && object.constructor === Rectangle)
        {
            x = object.x;
            y = object.y;
            width = object.width;
            height = object.height;
        }
        this.bitmap.strokeRect(x || 0, y || 0, width || this.bitmap_width, height || this.bitmap_height, color || '#ffffff');
        return true;
    };

    DKTools_Sprite.prototype.fillArc = function () {
    };

    DKTools_Sprite.prototype.strokeArc = function () {
    };

    DKTools_Sprite.prototype.drawLine = function (x1, y1, x2, y2, color) {
        if (!this.bitmap) return false;
        this.bitmap.drawLine(x1, y1, x2, y2, color);
        return true;
    };
}

/**
 * Рисует текст
 * Возвращает true, если Bitmap существует

 * @method drawText
 *
 * @param {String || null} text - Текст
 * @param {String || null} align - Выравнивание текста
 * @param {Number || Rectangle || null} object - Координата X (Number) или область (Rectangle)
 * @param {Number || null} y - Координата Y
 * @param {Number || null} width - Ширина области
 * @param {Number || null} height - Высота области
 *
 * @return Boolean
*/
DKTools_Sprite.prototype.drawText = function(text, align, object, y, width, height) {
	if (!this.bitmap) {
        return false;
    }
	var x = object;
	if (object && object.constructor === Rectangle) {
        return this.drawText(text, align, object.x, object.y, object.width, object.height);
	}
	this.bitmap.drawText(text, x || this.text_x || 0, y || this.text_y || 0, width || this.bitmap_width, height || this.bitmap_height, align || this.align || 'left');
	return true;
};

/**
 * Рисует круг
 * Возвращает true, если Bitmap существует

 * @method drawCircle
 *
 * @param {Number || null} radius - Радиус
 * @param {String || null} color - Цвет
 * @param {Number || null} x - Координата X
 * @param {Number || null} y - Координата Y
 *
 * @return Boolean
*/
DKTools_Sprite.prototype.drawCircle = function(radius, color, x, y) {
	if (!this.bitmap) {
        return false;
    }
	this.bitmap.drawCircle(x || radius || 0, y || radius || 0, radius || 1, color || '#ffffff');
	return true;
};

/**
 * Рисует кусок из Bitmap в Bitmap спрайта
 * Возвращает true, если Bitmap существует

 * @method drawBitmap
 *
 * @param {Bitmap || Object} object - Bitmap или объект типа {}
 *
 * @property {String} folder - Путь к файлу
 * @property {String} filename - Название файла
 * @property {Function || null} listener - Метод обработки после загрузки Bitmap
 * @property {Number || null} hue - Оттенок
 * @property {Boolean || null} smooth - Сглаживание
 *
 * @param {Number || null} x1 - Координата X
 * @param {Number || null} y1 - Координата Y
 * @param {Number || null} w1 - Ширина области из Bitmap
 * @param {Number || null} h1 - Высота области из Bitmap
 * @param {Number || null} x2 - Координата X
 * @param {Number || null} y2 - Координата Y
 * @param {Number || null} w2 - Ширина рисуемой области
 * @param {Number || null} h2 - Высота рисуемой области
 *
 * @return Boolean
*/
DKTools_Sprite.prototype.drawBitmap = function(object, x1, y1, w1, h1, x2, y2, w2, h2) {
	object = object || {};
    if (!this.bitmap) {
        return false;
    }
    var sx = x1, sy = y1, sw = w1, sh = h1;
    var dx = x2, dy = y2, dw = w2, dh = h2;
    var bitmap = object;
    if (object.constructor === Object) {
        bitmap = this.bitmapFromObject(object.bitmap);
        sx = object.x1; sy = object.y1; sw = object.w1; sh = object.h1;
        dx = object.x2; dy = object.y2; dw = object.w2; dh = object.h2;
        if (object.rect1 && object.rect1.constructor === Rectangle) {
            sx = object.rect1.x;
            sy = object.rect1.y;
            sw = object.rect1.width;
            sh = object.rect1.height;
        }
        if (object.rect2 && object.rect2.constructor === Rectangle) {
            dx = object.rect2.x;
            dy = object.rect2.y;
            dw = object.rect2.width;
            dh = object.rect2.height;
        }
    }
    if (!bitmap) {
        return false;
    }
	bitmap.addLoadListener(function(bitmap, sx, sy, sw, sh, dx, dy, dw, dh) {
		this.bitmap.blt(bitmap, sx, sy, sw, sh, dx, dy, dw, dh);
	}.bind(this, bitmap, sx, sy, sw, sh, dx, dy, dw, dh));
	return true;
};

/**
 * Рисует иконку из IconSet
 * Возвращает true, если Bitmap существует

 * @method drawIcon
 *
 * @param {Number || null} iconIndex - ID иконки
 * @param {Number || null} x - Координата X
 * @param {Number || null} y - Координата Y
 *
 * @return Boolean
*/
DKTools_Sprite.prototype.drawIcon = function(iconIndex, x, y) {
    if (!this.bitmap) {
        return false;
    }
    var bitmap = ImageManager.loadSystem('IconSet');
    var pw = Window_Base._iconWidth;
    var ph = Window_Base._iconHeight;
    var sx = iconIndex % 16 * pw;
    var sy = Math.floor(iconIndex / 16) * ph;
    this.bitmap.blt(bitmap, sx, sy, pw, ph, x, y);
    return true;
};

DKTools_Sprite.prototype.drawFace = function(faceName, faceIndex, x, y, width, height) {
    if (!this.bitmap) {
        return false;
    }
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

DKTools_Sprite.prototype.drawCharacter = function(characterName, characterIndex, x, y) {
    if (!this.bitmap) {
        return false;
    }
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

/**
 * Загружает Bitmap из папки img/animations/
 * Возвращает true, если Bitmap был изменен

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
 * Скрывает спрайт

 * @method hide
*/
DKTools_Sprite.prototype.hide = function() {
	this.setupVisible(false);
};

/**
 * Показывает спрайт

 * @method show
*/
DKTools_Sprite.prototype.show = function() {
	this.setupVisible(true);
};

/**
 * Запускает анимацию

 * @method playAnimation
*/
DKTools_Sprite.prototype.playAnimation = function() {
	this.update_animation = true;
};

/**
 * Останавливает анимацию

 * @method stopAnimation
*/
DKTools_Sprite.prototype.stopAnimation = function() {
	this.update_animation = false;
};

/**
 * Возвращает true, если анимация обновляется

 * @method animationIsUpdated
 * @return Boolean
*/
DKTools_Sprite.prototype.animationIsUpdated = function() {
	return this.update_animation;
};

/**
 * Обновляет спрайт

 * @method update
*/
DKTools_Sprite.prototype.update = function() {
	Sprite.prototype.update.call(this);
	this.callReadyListeners();
	this.callUpdateHandler();
	this.callUpdateAnimationHandler();
};

/**
 * Обновляет Bitmap спрайта

 * @method updateBitmap
*/
DKTools_Sprite.prototype.updateBitmap = function() {
	if (!this.clear()) {
        return;
    }
	this.updateBackground();
	this.updateFont();
	this.updateTextColor();
};

/**
 * Обновляет фон

 * @method updateBackground
*/
DKTools_Sprite.prototype.updateBackground = function() {
	if (this.background_color) {
        this.fillAll(this.background_color);
    }
};

/**
 * Обновляет шрифт текста

 * @method updateFont
*/
DKTools_Sprite.prototype.updateFont = function() {
	this.bitmap.fontFace = this.font[0];
	this.bitmap.fontItalic = this.font[1];
	this.bitmap.fontSize = this.font[2];
};

/**
 * Обновляет цвет текста

 * @method updateTextColor
*/
DKTools_Sprite.prototype.updateTextColor = function() {
	this.bitmap.textColor = this.text_color;
};

/**
 * Вызывает обработчик обновления спрайта

 * @method callUpdateHandler
*/
DKTools_Sprite.prototype.callUpdateHandler = function() {
	if (this.update_handler) {
        this.update_handler(this.id);
    }
};

/**
 * Вызывает обработчик обновления анимации спрайта

 * @method callUpdateAnimationHandler
*/
DKTools_Sprite.prototype.callUpdateAnimationHandler = function() {
	if (this.animationIsUpdated() && this.update_animation_handler) {
        this.update_animation_handler(this.id);
    }
};





//===========================================================================
// DK Tools Sprite Button
//===========================================================================

/**
 * @class DKTools_Sprite_Button
 * @constructor
 * @param {Number || Bitmap || Object || null} object - Координата X (если Number) или bitmap (если Bitmap) (The x coordinate for the upper-left corner)
 * @param {Number || null} y - Координата Y (The y coordinate for the upper-left corner)
 * @param {Number || null} width - Ширина Bitmap (The width of the Bitmap)
 * @param {Number || null} height - Высота Bitmap (The height of the Bitmap)
*/
function DKTools_Sprite_Button() {
	this.initialize.apply(this, arguments);
}

DKTools_Sprite_Button.prototype = Object.create(DKTools_Sprite.prototype);
DKTools_Sprite_Button.prototype.constructor = DKTools_Sprite_Button;

DKToolsUtils.mixin(DKTools_Sprite_Button.prototype, Sprite_Button.prototype);

// initialize method

DKTools_Sprite_Button.prototype.initialize = function(object, y, width, height) {
    DKTools_Sprite.prototype.initialize.call(this, object, y, width, height);
    //if (DKToolsUtils.debug) {
    //    this.setColdScale(this.standardColdScale());
    //    this.setHotScale(this.standardHotScale());
    //    this.setColdOpacity(this.standardColdOpacity());
    //    this.setHotOpacity(this.standardHotOpacity());
    //}
};

// standard methods

if (DKToolsUtils.debug) {

    DKTools_Sprite_Button.prototype.standardColdScale = function () {
        return new Point(1, 1);
    };

    DKTools_Sprite_Button.prototype.standardHotScale = function () {
        return new Point(1, 1);
    };

    DKTools_Sprite_Button.prototype.standardColdOpacity = function () {
        return this.standardOpacity();
    };

    DKTools_Sprite_Button.prototype.standardHotOpacity = function () {
        return this.standardOpacity();
    };
}

/**
 * Возвращает стандартное значение активности спрайта

 * @method standardActive
 * @return Boolean
*/
DKTools_Sprite_Button.prototype.standardActive = function() {
	return true;
};

// setup methods

/**
 * Устанавливает все параметры спрайта

 * @method setupAll
 *
 * @param {Object || null} object - Объект типа {}
 *
 * @property {Boolean || null} active - Активность спрайта
 *
 * @see other object properties: DKTools_Sprite.prototype.setupAll
 */
DKTools_Sprite_Button.prototype.setupAll = function(object) {
    object = object || {};
    DKTools_Sprite.prototype.setupAll.call(this, object);
    this.setupActive(object.active);
};

/**
 * Устанавливает активность спрайта
 
 * @method setupActive
 * @param {Boolean || null} active - Активность спрайта
*/
DKTools_Sprite_Button.prototype.setupActive = function(active) {
	this.active = (active == null ? this.standardActive() : active);
};

// set methods

/**
 * Изменяет активность спрайта
 
 * @method setActive
 *
 * @param {Boolean || null} active - Активность спрайта
 *
 * @return Boolean
*/
DKTools_Sprite_Button.prototype.setActive = function(active) {
	if (this.active === active) {
        return false;
    }
	var last_active = this.active;
	this.setupActive(active);
	return last_active !== this.active;
};

/**
 * Устанавливает масштабирование для ненажатого состояния

 * @method setColdScale
 *
 * @param {Number || Point || null} object - Координата X (Number) или Point
 * @param {Number || null} y - Координата Y
*/
DKTools_Sprite_Button.prototype.setColdScale = function(object, y) {
	var x = object;
	if (object && object.constructor === Point) {
        return this.setColdScale(object.x, object.y);
	}
	this.cold_scale = new Point(x, y);
};

/**
 * Устанавливает масштабирование для нажатого состояния

 * @method setHotScale
 *
 * @param {Number || Point || null} object - Координата X (Number) или Point
 * @param {Number || null} y - Координата Y
*/
DKTools_Sprite_Button.prototype.setHotScale = function(object, y) {
	var x = object;
	if (object && object.constructor === Point) {
        return this.setHotScale(object.x, object.y);
	}
	this.hot_scale = new Point(x, y);
};

/**
 * Устанавливает прозрачность для ненажатого состояния

 * @method setColdOpacity
 * @param {Number || null} opacity - Прозрачность спрайта
*/
DKTools_Sprite_Button.prototype.setColdOpacity = function(opacity) {
	this.cold_opacity = (opacity == null ? null : opacity);
};

/**
 * Устанавливает прозрачность для нажатого состояния

 * @method setHotOpacity
 * @param {Number || null} opacity - Прозрачность спрайта
*/
DKTools_Sprite_Button.prototype.setHotOpacity = function(opacity) {
	this.hot_opacity = (opacity == null ? null : opacity);
};

// other methods

/**
 * Запускает работу спрайта

 * @method start
 * @param {Boolean || null} activate - Активность спрайта
*/
DKTools_Sprite_Button.prototype.start = function(activate) {
    DKTools_Sprite.prototype.start.call(this);
    if (activate) {
        this.activate();
    }
};

/**
 * Клонирует текущий спрайт

 * @method clone
 *
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return DKTools_Sprite_Button
 */
if (DKToolsUtils.debug) {

    DKTools_Sprite_Button.prototype.clone = function(block) {
        var object = {
            x: this.x,
            y: this.y,
            width: this.bitmap_width,
            height: this.bitmap_height,
            id: this.id,
            visible: this.visible,
            active: this.active,
            text_color: this.text_color,
            align: this.align,
            background_color: this.background_color,
            text_x: this.text_x,
            text_y: this.text_y,
            font: this.font,
            opacity: this.opacity
        };
        var sprite = new DKTools_Sprite_Button(object);
        if (this.bitmap) {
            sprite.setupBitmap(this.bitmap.clone());
        }
        if (!block) {
            sprite.start();
        }
        return sprite;
    };
}

/**
 * Возвращает true, если на спрайт можно нажимать

 * @method isSpriteButton
 * @return Boolean
*/
DKTools_Sprite_Button.prototype.isSpriteButton = function() {
    return true;
};

/**
 * Возвращает true, если спрайт активен
 
 * @method isActive
 * @return Boolean
*/
DKTools_Sprite_Button.prototype.isActive = function() {
	return Sprite_Button.prototype.isActive.call(this) && this.active;
};

/**
 * Возвращает true, если спрайт был нажат
 
 * @method isButtonTouched
 * @return Boolean
*/
DKTools_Sprite_Button.prototype.isButtonTouched = function() {
    var x = this.canvasToLocalX(TouchInput.x);
    var y = this.canvasToLocalY(TouchInput.y);
    return x >= 0 && y >= 0 && x <= this.width * this.scale.x && y <= this.height * this.scale.y;
};

/**
 * Активирует спрайт
 
 * @method activate
*/
DKTools_Sprite_Button.prototype.activate = function() {
	this.setupActive(true);
};

/**
 * Деактивирует спрайт
 
 * @method deactivate
*/
DKTools_Sprite_Button.prototype.deactivate = function() {
	this.setupActive(false);
};

/**
 * Скрывает спрайт

 * @method hide
*/
DKTools_Sprite_Button.prototype.hide = function() {
	DKTools_Sprite.prototype.hide.call(this);
	this.deactivate();
};

/**
 * Показывает спрайт

 * @method show
 * @param {Boolean || null} activate - Активность спрайта
*/
DKTools_Sprite_Button.prototype.show = function(activate) {
    this.setupVisible(true);
    if (activate) {
        this.activate();
    }
};

/**
 * Возвращает true, если у спрайта установлен обработчик нажатия

 * @method hasClickHandler
 * @return Boolean
 */
DKTools_Sprite_Button.prototype.hasClickHandler = function() {
    return !!this._clickHandler;
};

/**
 * Вызывает обработчик нажатия спрайта

 * @method callClickHandler
*/
DKTools_Sprite_Button.prototype.callClickHandler = function() {
	if (this.hasClickHandler()) {
        this._clickHandler(this.id);
    }
};

/**
 * Обновляет масштабирование спрайта

 * @method updateScale
*/
DKTools_Sprite_Button.prototype.updateScale = function() {
    var scale = this._touching ? this.hot_scale : this.cold_scale;
    if (scale) {
        this.scale = scale;
    }
};

/**
 * Обновляет прозрачность спрайта

 * @method updateOpacity
*/
DKTools_Sprite_Button.prototype.updateOpacity = function() {
    var opacity = this._touching ? this.hot_opacity : this.cold_opacity;
    if (opacity != null) {
        this.setupOpacity(opacity);
    }
};

/**
 * Обновляет данные ввода

 * @method updateInputData
*/
DKTools_Sprite_Button.prototype.updateInputData = function() {
    Input.update();
    TouchInput.update();
};

/**
 * Обновляет спрайт

 * @method update
*/
DKTools_Sprite_Button.prototype.update = function() {
	this.updateFrame();
	this.updateScale();
	this.updateOpacity();
	this.processTouch();
	DKTools_Sprite.prototype.update.call(this);
};





//===========================================================================
// Элементы, основанные на DKTools_Sprite
// Elements based on DKTools_Sprite
//===========================================================================





//===========================================================================
// DK Tools Text
//===========================================================================

/**
 * @class DKTools_Text
 * @constructor
 * @param {Number || Object || null} object - Координата X (The x coordinate for the upper-left corner)
 * @param {Number || null} y - Координата Y (The y coordinate for the upper-left corner)
 * @param {Number || null} width - Ширина Bitmap (The width of the Bitmap)
 * @param {Number || null} height - Высота Bitmap (The height of the Bitmap)
*/
function DKTools_Text() {
    this.initialize.apply(this, arguments);
}

DKTools_Text.prototype = Object.create(DKTools_Sprite.prototype);
DKTools_Text.prototype.constructor = DKTools_Sprite;

// standard methods

/**
 * Возвращает стандартный текст

 * @method standardText
 * @return String
*/
DKTools_Text.prototype.standardText = function() {
    return '';
};

// setup methods

/**
 * Устанавливает все параметры спрайта

 * @method setupAll
 *
 * @param {Object || null} object - Объект типа {}
 *
 * @property {String || null} text - Отображаемый текст
 * @property {String || null} text_color - Цвет текста
 * @property {String || null} align - Выравнивание текста
 * @property {String || null} background_color - Цвет фона
 * @property {Number || null} text_x - Координата X текста
 * @property {Number || null} text_y - Координата Y текста
 * @property {Array || null} font - Шрифт текста
 * @property {Number || null} opacity - Прозрачность спрайта
*/
DKTools_Text.prototype.setupAll = function(object) {
    object = object || {};
    DKTools_Sprite.prototype.setupAll.call(this, object);
    this.setupText(object.text);
};

/**
 * Устанавливает отображаемый текст

 * @method setupText
 * @param {String || null} text - Отображаемый текст
*/
DKTools_Text.prototype.setupText = function(text) {
    this.text = (text == null ? this.standardText() : String(text));
};

// set methods

/**
 * Изменяет все параметры спрайта
 * Возвращает количество измененных параметров

 * @method setAll
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} block_start - Блокировка вызова функции start
 *
 * @property {String || null} text - Отображаемый текст
 * @property {String || null} text_color - Цвет текста
 * @property {String || null} align - Выравнивание текста
 * @property {String || null} background_color - Цвет фона
 * @property {Number || null} text_x - Координата X текста
 * @property {Number || null} text_y - Координата Y текста
 * @property {Array || null} font - Шрифт текста
 * @property {Number || null} opacity - Прозрачность спрайта
 *
 * @return Number
*/
DKTools_Text.prototype.setAll = function(object, block_start) {
    object = object || {};
    var block = true;
    var changed = DKTools_Sprite.prototype.setAll.call(this, object, block);
    this.activateSetAllMode();
    if (this.setText(object.text, block)) {
        changed++;
    }
    if (changed && !block_start) {
        this.start();
    }
    this.deactivateSetAllMode();
    return changed;
};

/**
 * Изменяет отображаемый текст
 * Возвращает true, если изменение произошло

 * @method setText
 * @param {String || null} text - Отображаемый текст
 * @param {Boolean || null} block - Блокировка вызова функции start
 * @return Boolean
*/
DKTools_Text.prototype.setText = function(text, block) {
    if (this.text === text) {
        return false;
    }
    var last_text = this.text;
    this.setupText(text);
    if (last_text === this.text) {
        return false;
    }
    if (!block) {
        this.start();
    }
    return true;
};

// other methods

/**
 * Запускает работу спрайта

 * @method start
*/
DKTools_Text.prototype.start = function() {
    //this.setupBackgroundColor('#000000');
    this.checkSize();
    DKTools_Sprite.prototype.start.call(this);
};

/**
 * Возвращает минимальную ширину Bitmap
 * Returns the minimum width of the Bitmap
 *
 * @method minWidth
 * @return Number
*/
DKTools_Text.prototype.minWidth = function() {
    var text = this.text || this.standardText();
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
 * Обновляет Bitmap спрайта

 * @method updateBitmap
*/
DKTools_Text.prototype.updateBitmap = function() {
    DKTools_Sprite.prototype.updateBitmap.call(this);
    if (!this.bitmap) {
        return;
    }
    this.updateText();
};

/**
 * Обновляет отображаемый текст

 * @method updateText
*/
DKTools_Text.prototype.updateText = function() {
    this.drawText(this.text);
};





//===========================================================================
// DK Tools Container Base
//===========================================================================

/**
 * @class DKTools_Container_Base
 * @constructor
 * @param {Number || null} object - Координата X (The x coordinate for the upper-left corner)
 * @param {Number || null} y - Координата Y (The y coordinate for the upper-left corner)
*/
function DKTools_Container_Base() {
	this.initialize.apply(this, arguments);
}

DKTools_Container_Base.prototype = Object.create(DKTools_Sprite.prototype);
DKTools_Container_Base.prototype.constructor = DKTools_Container_Base;

// properties

Object.defineProperty(DKTools_Container_Base.prototype, 'length', {
	get: function() {
		return this.allElements().length;
	},
	configurable: true
});

// initialize method

DKTools_Container_Base.prototype.initialize = function(object, y) {
	this.clearElements();
	DKTools_Sprite.prototype.initialize.call(this, object, y);
};

// standard methods

/**
 * Возвращает стандартный список элементов контейнера

 * @method standardElements
 * @return Array
*/
DKTools_Container_Base.prototype.standardElements = function() {
	return [];
};

/**
 * Возвращает стандартное расположение элементов
 
 * @method standardPlacement
 * @return String
*/
DKTools_Container_Base.prototype.standardPlacement = function() {
	return 'horizontal';
};

/**
 * Возвращает стандартное значение рядов

 * @method standardRows
 * @return Number
 */
DKTools_Container_Base.prototype.standardRows = function() {
    return 0;
};

/**
 * Возвращает стандартное количество столбцов

 * @method standardCols
 * @return Number
 */
DKTools_Container_Base.prototype.standardCols = function() {
    return 0;
};

/**
 * Возвращает стандартное значение отступа по X

 * @method standardXPadding
 * @return Number
 */
DKTools_Container_Base.prototype.standardXPadding = function() {
    return 18;
};

/**
 * Возвращает стандартное значение отступа по Y

 * @method standardYPadding
 * @return Number
 */
DKTools_Container_Base.prototype.standardYPadding = function() {
    return 18;
};

// setup methods

/**
 * Устанавливает все параметры спрайта
 
 * @method setupAll
 *
 * @param {Object || null} object - Объект типа {}
 *
 * @property {Array || null} elements - Массив с элементами
 * @property {String || null} placement - Расположение элементов
 * @property {Number || null} rows - Количество рядов
 * @property {Number || null} cols - Количество столбцов
 * @property {Number || null} x_padding - Отступ между элементами контейнера по X
 * @property {Number || null} y_padding - Отступ между элементами контейнера по Y
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
    this.setupXPadding(object.x_padding);
    this.setupYPadding(object.y_padding);
};

/**
 * Устанавливает элементы контейнера

 * @method setupElements
 * @param {Array || null} elements - Массив с элементами контейнера
*/
DKTools_Container_Base.prototype.setupElements = function(elements) {
	this.elements = elements || this.standardElements();
};

/**
 * Добавляет элемент в контейнер, блокируя вызов функции start контейнера

 * @method setupElement
 * @param {Sprite || null} element - Элемент контейнера
*/
DKTools_Container_Base.prototype.setupElement = function(element) {
	this.addElement(element, true);
};

/**
 * Устанавливает расположение элементов
 
 * @method setupPlacement
 * @param {String || null} placement - Расположение элементов
*/
DKTools_Container_Base.prototype.setupPlacement = function(placement) {
	this.placement = placement || this.standardPlacement();
    this.setupRows();
    this.setupCols();
};

/**
 * Устанавливает количество столбцов

 * @method setupRows
 * @param {Number || null} rows - Количество рядов
 */
DKTools_Container_Base.prototype.setupRows = function(rows) {
    this.rows = (rows == null ? this.standardRows() : rows);
};

/**
 * Устанавливает количество столбцов

 * @method setupCols
 * @param {Number || null} cols - Количество столбцов
 */
DKTools_Container_Base.prototype.setupCols = function(cols) {
    this.cols = (cols == null ? this.standardCols() : cols);
};

/**
 * Устанавливает отступ между элементами контейнера по X

 * @method setupXPadding
 * @param {Number || null} padding - Отступ между элементами контейнера по X
 */
DKTools_Container_Base.prototype.setupXPadding = function(padding) {
    this.x_padding = (padding == null ? this.standardXPadding() : padding);
};

/**
 * Устанавливает отступ между элементами контейнера по Y

 * @method setupYPadding
 * @param {Number || null} padding - Отступ между элементами контейнера по Y
 */
DKTools_Container_Base.prototype.setupYPadding = function(padding) {
    this.y_padding = (padding == null ? this.standardYPadding() : padding);
};

// set methods

/**
 * Изменяет все параметры спрайта
 * Возвращает true, если изменение произошло
 
 * @method setAll
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} block_start - Блокировка вызова функции start
 *
 * @property {Array || null} elements - Массив с элементами
 * @property {String || null} placement - Расположение элементов
 * @property {Number || null} rows - Количество рядов
 * @property {Number || null} cols - Количество столбцов
 * @property {Number || null} x_padding - Отступ между элементами контейнера по X
 * @property {Number || null} y_padding - Отступ между элементами контейнера по Y
 *
 * @see other object properties: DKTools_Sprite.prototype.setupAll
 *
 * @return Number
*/
DKTools_Container_Base.prototype.setAll = function(object, block_start) {
	object = object || {};
	var block = true;
	var changed = DKTools_Sprite.prototype.setAll.call(this, object, block);
    this.activateSetAllMode();
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
    if (this.setXPadding(object.x_padding, block)) {
        changed++;
    }
    if (this.setYPadding(object.y_padding, block)) {
        changed++;
    }
	if (changed && !block_start) {
        this.start();
    }
    this.deactivateSetAllMode();
	return changed;
};

/**
 * Изменяет список элементов контейнера
 
 * @method setElements
 *
 * @param {Array || null} elements - Массив элементов контейнера
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
*/
DKTools_Container_Base.prototype.setElements = function(elements, block) {
	if (this.elements == elements) {
        return false;
    }
	this.removeElementsFromChild();
	this.setupElements(elements);
	if (!block) {
        this.start();
    }
	return true;
};

/**
 * Изменяет расположение элементов
 * Возвращает true, если изменение произошло
 
 * @method setPlacement
 *
 * @param {String || null} placement - Расположение элементов
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
*/
DKTools_Container_Base.prototype.setPlacement = function(placement, block) {
	if (this.placement === placement) {
        return false;
    }
	var last_placement = this.placement;
	this.setupPlacement(placement);
	if (last_placement === this.placement) {
        return false;
    }
	if (!block) {
        this.start();
    }
	return true;
};

/**
 * Изменяет количество рядов
 * Возвращает true, если изменение произошло

 * @method setRows
 *
 * @param {Number || null} rows - Количество рядов
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
 */
DKTools_Container_Base.prototype.setRows = function(rows, block) {
    if (this.rows === rows) {
        return false;
    }
    var last_rows = this.rows;
    this.setupRows(rows);
    if (last_rows === this.rows) {
        return false;
    }
    if (!block) {
        this.start();
    }
    return true;
};

/**
 * Изменяет количество столбцов
 * Возвращает true, если изменение произошло

 * @method setCols
 *
 * @param {Number || null} cols - Количество столбцов
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
 */
DKTools_Container_Base.prototype.setCols = function(cols, block) {
    if (this.cols === cols) {
        return false;
    }
    var last_cols = this.cols;
    this.setupCols(cols);
    if (last_cols === this.cols) {
        return false;
    }
    if (!block) {
        this.start();
    }
    return true;
};

/**
 * Изменяет отступ между элементами контейнера по X
 * Возвращает true, если изменение произошло

 * @method setXPadding
 *
 * @param {Number || null} padding - Отступ между элементами контейнера по X
 * @param {Boolean || null} block - Блокировка вызова функции updatePlacement
 *
 * @return Boolean
 */
DKTools_Container_Base.prototype.setXPadding = function(padding, block) {
    if (this.x_padding === padding) {
        return false;
    }
    var last_padding = this.x_padding;
    this.setupXPadding(padding);
    if (last_padding === this.x_padding) {
        return false;
    }
    if (!block) {
        this.updatePlacement();
    }
    return true;
};

/**
 * Изменяет отступ между элементами контейнера по Y
 * Возвращает true, если изменение произошло

 * @method setYPadding
 *
 * @param {Number || null} padding - Отступ между элементами контейнера по Y
 * @param {Boolean || null} block - Блокировка вызова функции updatePlacement
 *
 * @return Boolean
 */
DKTools_Container_Base.prototype.setYPadding = function(padding, block) {
    if (this.y_padding === padding) {
        return false;
    }
    var last_padding = this.y_padding;
    this.setupYPadding(padding);
    if (last_padding === this.y_padding) {
        return false;
    }
    if (!block) {
        this.updatePlacement();
    }
    return true;
};

// other methods

/**
 * Запускает работу спрайта

 * @method start
*/
DKTools_Container_Base.prototype.start = function() {
	this.addElementsToChild();
    this.checkRowsAndCols();
	this.checkSize();
	this.updatePlacement();
	DKTools_Sprite.prototype.start.call(this);
    if (!this.isReady()) {
        this.addReadyListener(function() {
            this.startAllElements();
        }.bind(this));
    }
};

/**
 * Возвращает минимальную ширину Bitmap

 * @method minWidth
 * @return Number
*/
DKTools_Container_Base.prototype.minWidth = function() {
    if (this.isEmpty() || !this.maxCols()) {
        return 1;
    }
    var width = 0;
    var max_cols = this.maxCols() + 1;
    for(var i = 1; i < max_cols; i++) {
        width += this.colWidth(i) + this.x_padding;
    }
    return width - this.x_padding;
};

/**
 * Возвращает минимальную высоту Bitmap

 * @method minHeight
 * @return Number
*/
DKTools_Container_Base.prototype.minHeight = function() {
    if (this.isEmpty() || !this.maxRows()) {
        return 1;
    }
    var height = 0;
    var max_rows = this.maxRows() + 1;
    for(var i = 1; i < max_rows; i++) {
        height += this.rowHeight(i) + this.y_padding;
    }
    return height - this.y_padding;
};

/**
 * Возвращает максимальное количество рядов

 * @method maxRows
 * @return Number
 */
DKTools_Container_Base.prototype.maxRows = function() {
    return this.rows;
};

/**
 * Возвращает максимальное количество столбцов

 * @method maxCols
 * @return Number
 */
DKTools_Container_Base.prototype.maxCols = function() {
    return this.cols;
};

/**
 * Возвращает минимальное количество элементов
 * Используется для проверки рядов и столбцов
 *
 * @method minElements
 *
 * @return Number
 */
DKTools_Container_Base.prototype.minElements = function() {
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
    var max_rows = this.maxRows();
    var max_cols = this.maxCols();
    var min_elements = this.minElements();
    if (max_rows !== 0 && max_cols !== 0) {
        return false;
    }
    if (max_rows === 0 && max_cols === 0) {
        if (this.isHorizontalPlacement()) {
            rows = 1;
            cols = min_elements;
        } else if (this.isVerticalPlacement()) {
            rows = min_elements;
            cols = 1;
        }
    } else {
        if (max_rows !== 0) {
            rows = max_rows;
            cols = Math.max(Math.ceil(min_elements / max_rows), 1);
        } else {
            rows = Math.max(Math.ceil(min_elements / max_cols), 1);
            cols = max_cols;
        }
    }
    this.setupRows(rows);
    this.setupCols(cols);
    return true;
};

/**
 * Возвращает true, если расположение элементов вертикально

 * @method isVerticalPlacement
 * @return Boolean
 */
DKTools_Container_Base.prototype.isVerticalPlacement = function() {
    return this.placement === 'vertical';
};

/**
 * Возвращает true, если расположение элементов горизонтально

 * @method isHorizontalPlacement
 * @return Boolean
 */
DKTools_Container_Base.prototype.isHorizontalPlacement = function() {
    return this.placement === 'horizontal';
};

/**
 * Возвращает true, если контейнер не содержит элементов

 * @method isEmpty
 * @return Boolean
 */
DKTools_Container_Base.prototype.isEmpty = function() {
    return this.length === 0;
};

/**
 * Возвращает true, если Bitmap готов

 * @method isReady
 * @return Boolean
*/
DKTools_Container_Base.prototype.isReady = function() {
	for(var i = 0; i < this.length; i++)
		if (!this.element(i).isReady()) {
            return false;
        }
	return true;
};

/**
 * Возвращает все элементы контейнера

 * @method allElements
 * @return Array
*/
DKTools_Container_Base.prototype.allElements = function() {
    return this.elements;
};

/**
 * Очищает список элементов контейнера

 * @method clearElements
*/
DKTools_Container_Base.prototype.clearElements = function() {
	this.elements = [];
};

/**
 * Удаляет элементы контейнера из обработки

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
 * Выполняет callback функцию для каждого элемента

 * @method iterateElements
 *
 * @param {Function} callback - Функция обработки для каждого элемента контейнера
 * @param {Boolean || null} start - Вызов функции start контейнера
*/
DKTools_Container_Base.prototype.iterateElements = function(callback, start) {
    var elements = this.allElements();
	elements.forEach(callback);
	if (start) {
        this.start();
    }
};

/**
 * Добавляет элемент в контейнер

 * @method addElement
 *
 * @param {Sprite || Array || null} object - Элемент или Массив элементов
 * @param {Boolean || null} block - Блокировка вызова функции start
*/
DKTools_Container_Base.prototype.addElement = function(object, block) {
	if (object == null) {
        return;
    }
	if (object.constructor === Array) {
		for(var i = 0; i < object.length; i++) {
            this.elements.push(object[i]);
        }
	}
	else {
        this.elements.push(object);
    }
	if (!block) {
        this.start();
    }
};

/**
 * Удаляет элемент из контейнера

 * @method removeElement
 *
 * @param {Sprite || Number || null} object - Элемент или номер элемента
 * @param {Boolean || null} block - Блокировка вызова функции start
*/
DKTools_Container_Base.prototype.removeElement = function(object, block) {
    if (object == null) {
        return;
    }
    if (object.constructor === Number) {
        return this.removeElement(this.element(object), block);
    } else {
        var index = this.elements.indexOf(object);
        if (index !== -1) {
            this.elements.splice(index, 1);
        }
    }
    if (!block) {
        this.start();
    }
};

/**
 * Вызывает функцию start у всех элементов контейнера

 * @method startAllElements
 * @param {Boolean || null} block - Блокировка вызова функции start контейнера
*/
DKTools_Container_Base.prototype.startAllElements = function(block) {
	var callback = function(element) {
        element.start();
    };
	this.iterateElements(callback);
	if (!block) {
        this.start();
    }
};

/**
 * Вызывает функцию resize у всех элементов контейнера

 * @method resizeAllElements
 *
 * @param {Number || null} width - Высота Bitmap
 * @param {Number || null} height - Ширина Bitmap
 * @param {Boolean || null} block - Блокировка вызова функции start контейнера
*/
DKTools_Container_Base.prototype.resizeAllElements = function(width, height, block) {
	var callback = function(element) {
		element.resize(width, height);
	};
	this.iterateElements(callback);
	if (!block) {
        this.start();
    }
};

/**
 * Вызывает функцию activate у всех элементов контейнера

 * @method activateAllElements
 * @param {Boolean || null} start - Вызов функции start контейнера
*/
DKTools_Container_Base.prototype.activateAllElements = function(start) {
    var callback = function(element) {
        if (element.isSpriteButton()) {
            element.activate();
        }
    };
    this.iterateElements(callback);
    if (start) {
        this.start();
    }
};

/**
 * Вызывает функцию deactivate у всех элементов контейнера

 * @method deactivateAllElements
 * @param {Boolean || null} start - Вызов функции start контейнера
*/
DKTools_Container_Base.prototype.deactivateAllElements = function(start) {
    var callback = function(element) {
        if (element.isSpriteButton()) {
            element.deactivate();
        }
    };
    this.iterateElements(callback);
    if (start) {
        this.start();
    }
};

/**
 * Возвращает элемент по его ID

 * @method element
 *
 * @param {Number} id - ID элемента
 *
 * @return Sprite || null
*/
DKTools_Container_Base.prototype.element = function(id) {
    return this.allElements()[id];
};

/**
 * Возвращает массив с элементами ряда

 * @method row
 *
 * @param {Number} row - Номер ряда
 *
 * @return Array
 */
DKTools_Container_Base.prototype.row = function(row) {
    var array = [];
    var max_rows = this.maxRows();
    var max_cols = this.maxCols();
    if (row < 1 || row > max_rows) {
        return array;
    }
    var start_index = max_cols * (row - 1);
    for(var i = 0; i < max_cols; i++) {
        array.push(this.element(start_index + i));
    }
    return array;
};

/**
 * Возвращает массив с элементами столбца

 * @method col
 *
 * @param {Number} col - Номер столбца
 *
 * @return Array
 */
DKTools_Container_Base.prototype.col = function(col) {
    var array = [];
    var max_rows = this.maxRows();
    var max_cols = this.maxCols();
    if (col < 1 || col > max_cols) {
        return array;
    }
    var start_index = col - 1;
    for(var i = 0; i < max_rows; i++) {
        var element = this.element(start_index + max_cols * i);
        array.push(element);
    }
    return array;
};

/**
 * Возвращает высоту ряда (максимальную высоту элементов ряда)

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
            break;
        }
        array.push(element.height);
    }
    return Math.max.apply(Math, array);
};

/**
 * Возвращает ширину столбца (максимальную ширину элементов столбца)

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
            break;
        }
        array.push(element.width);
    }
    return Math.max.apply(Math, array);
};

/**
 * Обновляет расположение элементов в контейнере
 
 * @method updatePlacement
*/
DKTools_Container_Base.prototype.updatePlacement = function() {
	if (this.isEmpty()) {
        return;
    }
    var y = 0;
    var id = 0;
    var max_rows = this.maxRows() + 1;
    var max_cols = this.maxCols() + 1;
    for(var i = 1; i < max_rows; i++) {
        var x = 0;
        for(var j = 1; j < max_cols; j++) {
            var element = this.element(id);
            element.move(x, y);
            x += this.colWidth(j) + this.x_padding;
            id++;
            if (this.length === id) {
                return;
            }
        }
        y += this.rowHeight(i) + this.y_padding;
    }
};





//===========================================================================
// DK Tools Text Container
//===========================================================================

/**
 * @class DKTools_Text_Container
 * @constructor
 * @param {Number} object - Координата X (The x coordinate for the upper-left corner)
 * @param {Number} y - Координата Y (The y coordinate for the upper-left corner)
*/
function DKTools_Text_Container() {
	this.initialize.apply(this, arguments);
}

DKTools_Text_Container.prototype = Object.create(DKTools_Container_Base.prototype);
DKTools_Text_Container.prototype.constructor = DKTools_Container_Base;

// initialize method

DKTools_Text_Container.prototype.initialize = function(object, y) {
    this.createTextSprite();
    DKTools_Container_Base.prototype.initialize.call(this, object, y);
};

// setup methods

/**
 * Устанавливает все параметры спрайта
 
 * @method setupAll
 *
 * @param {Object || null} object - Объект типа {}
 *
 * @property {Object || null} text_sprite - Объект типа {}
 *
 * @see other object properties: DKTools_Container_Base.prototype.setupAll
 * @see text_sprite properties: DKTools_Text.prototype.setupAll
*/
DKTools_Text_Container.prototype.setupAll = function(object) {
	object = object || {};
	DKTools_Container_Base.prototype.setupAll.call(this, object);
    this.setupTextSprite(object.text_sprite);
};

/**
 * Устанавливает все параметры и размер для Bitmap спрайта текста

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
    this.text_sprite.setupAll(object);
    this.setupTextSpriteSize(object.width, object.height);
};

/**
 * Устанавливает ширину для Bitmap спрайта текста

 * @method setupTextSpriteWidth
 *
 * @param {Number || null} width - Ширина Bitmap спрайта текста
 */
DKTools_Text_Container.prototype.setupTextSpriteWidth = function(width) {
    this.text_sprite.setupWidth(width);
};

/**
 * Устанавливает высоту для Bitmap спрайта текста

 * @method setupTextSpriteHeight
 *
 * @param {Number || null} height - Высота Bitmap спрайта текста
 */
DKTools_Text_Container.prototype.setupTextSpriteHeight = function(height) {
    this.text_sprite.setupHeight(height);
};

/**
 * Устанавливает размер для Bitmap спрайта текста

 * @method setupTextSpriteSize
 *
 * @param {Number || null} width - Ширина Bitmap спрайта текста
 * @param {Number || null} height - Высота Bitmap спрайта текста
*/
DKTools_Text_Container.prototype.setupTextSpriteSize = function(width, height) {
    this.text_sprite.setupSize(width, height);
};

/**
 * Устанавливает отображаемый текст для спрайта текста

 * @method setupText
 *
 * @param {String || null} text - Отображаемый текст
*/
DKTools_Text_Container.prototype.setupText = function(text) {
    this.text_sprite.setupText(text);
};

// set methods

/**
 * Изменяет все параметры спрайта
 * Возвращает количество измененных параметров

 * @method setAll
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} block_start - Блокировка вызова функции start
 *
 * @property {Object || null} text_sprite - Объект типа {}
 *
 * @see other object properties: DKTools_Container_Base.prototype.setAll
 * @see text_sprite properties: DKTools_Text.prototype.setAll
 *
 * @return Number
*/
DKTools_Text_Container.prototype.setAll = function(object, block_start) {
	object = object || {};
	var block = true;
    var changed = DKTools_Container_Base.prototype.setAll.call(this, object, block);
    this.activateSetAllMode();
    changed += this.setTextSprite(object.text_sprite, block);
	if (changed && !block_start) {
        this.start();
    }
    this.deactivateSetAllMode();
	return changed;
};

/**
 * Изменяет все параметры спрайта текста
 * Возвращает количество измененных параметров

 * @method setTextSprite
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @see object properties: DKTools_Text.prototype.setAll
 *
 * @return Number
*/
DKTools_Text_Container.prototype.setTextSprite = function(object, block) {
    return this.text_sprite.setAll(object, block);
};

/**
 * Изменяет размер для Bitmap спрайта текста
 * Возвращает true, если изменение произошло

 * @method setTextSpriteSize
 *
 * @param {Number || null} width - Ширина Bitmap спрайта текста
 * @param {Number || null} height - Высота Bitmap спрайта текста
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
*/
DKTools_Text_Container.prototype.setTextSpriteSize = function(width, height, block) {
    if (this.text_sprite.resize(width, height)) {
        if (!block) {
            this.start();
        }
        return true;
    }
    return false;
};

/**
 * Изменяет отображаемый текст для спрайта текста
 * Возвращает true, если изменение произошло

 * @method setText
 *
 * @param {String || null} text - Отображаемый текст
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
*/
DKTools_Text_Container.prototype.setText = function(text, block) {
    if (this.text_sprite.setText(text)) {
        if (!block) {
            this.start();
        }
        return true;
    }
    return false;
};

// other methods

/**
 * Запускает работу спрайта

 * @method start
*/
DKTools_Text_Container.prototype.start = function() {
    if (!this.text_sprite.isStarted()) {
        this.text_sprite.start();
    }
	DKTools_Container_Base.prototype.start.call(this);
};

/**
 * Возвращает все элементы контейнера

 * @method allElements
 * @return Array
*/
DKTools_Text_Container.prototype.allElements = function() {
	return [this.text_sprite].concat(this.elements);
};

/**
 * Создает спрайт текста

 * @method createTextSprite
*/
DKTools_Text_Container.prototype.createTextSprite = function(object) {
    this.text_sprite = new DKTools_Text(object);
};





//===========================================================================
// DK Tools Container
//===========================================================================

/**
 * @class DKTools_Container
 * @constructor
 * @param {Number || null} object - Координата X (The x coordinate for the upper-left corner)
 * @param {Number || null} y - Координата Y (The y coordinate for the upper-left corner)
*/
function DKTools_Container() {
    this.initialize.apply(this, arguments);
}

DKTools_Container.prototype = Object.create(DKTools_Text_Container.prototype);
DKTools_Container.prototype.constructor = DKTools_Container;

// initialize method

DKTools_Container.prototype.initialize = function(object, y) {
    this.createBaseSprite();
    DKTools_Text_Container.prototype.initialize.call(this, object, y);
};

// standard methods

DKTools_Container.prototype.standardInverted = function() {
    return false;
};

// setup methods

/**
 * Устанавливает все параметры спрайта

 * @method setupAll
 *
 * @param {Object || null} object - Объект типа {}
 *
 * @property {Object || null} base_sprite - Объект типа {}
 *
 * @see other object properties: DKTools_Text_Container.prototype.setupAll
*/
DKTools_Container.prototype.setupAll = function(object) {
    object = object || {};
    DKTools_Text_Container.prototype.setupAll.call(this, object);
    this.setupBaseSprite(object.base_sprite);
    this.setupInverted(object.inverted);
};

/**
 * Устанавливает все параметры и размер для Bitmap базового спрайта

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
    this.base_sprite.setupAll(object);
    this.setupBaseSpriteSize(object.width, object.height);
};

/**
 * Устанавливает ширину для Bitmap базового спрайта

 * @method setupBaseSpriteWidth
 *
 * @param {Number || null} width - Ширина Bitmap базового спрайта
 */
DKTools_Container.prototype.setupBaseSpriteWidth = function(width) {
    this.base_sprite.setupWidth(width);
};

/**
 * Устанавливает высоту для Bitmap базового спрайта

 * @method setupBaseSpriteHeight
 *
 * @param {Number || null} height - Высота Bitmap базового спрайта
 */
DKTools_Container.prototype.setupBaseSpriteHeight = function(height) {
    this.base_sprite.setupHeight(height);
};

/**
 * Устанавливает размер для Bitmap базового спрайта

 * @method setupBaseSpriteSize
 *
 * @param {Number || null} width - Ширина Bitmap базового спрайта
 * @param {Number || null} height - Высота Bitmap базового спрайта
*/
DKTools_Container.prototype.setupBaseSpriteSize = function(width, height) {
    this.base_sprite.setupSize(width, height);
};

DKTools_Container.prototype.setupInverted = function(inverted) {
    this.inverted = inverted || this.standardInverted();
};

// set methods

/**
 * Изменяет все параметры спрайта
 * Возвращает количество измененных параметров

 * @method setAll
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} block_start - Блокировка вызова функции start
 *
 * @property {Object || null} base_sprite - Объект типа {}
 *
 * @see other object properties: DKTools_Text_Container.prototype.setAll
 * @see base_sprite properties: DKTools_Sprite.prototype.setAll
 *
 * @return Number
*/
DKTools_Container.prototype.setAll = function(object, block_start) {
    object = object || {};
    var block = true;
    var changed = DKTools_Text_Container.prototype.setAll.call(this, object, block);
    changed += this.setBaseSprite(object.base_sprite, block);
    if (changed && !block_start) {
        this.start();
    }
    return changed;
};

/**
 * Изменяет все параметры базового спрайта
 * Возвращает количество измененных параметров

 * @method setBaseSprite
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @see object properties: DKTools_Sprite.prototype.setAll
 *
 * @return Number
*/
DKTools_Container.prototype.setBaseSprite = function(object, block) {
    return this.base_sprite.setAll(object, block);
};

/**
 * Изменяет размер для Bitmap базового спрайта
 * Возвращает true, если изменение произошло

 * @method setBaseSpriteSize
 *
 * @param {Number || null} width - Ширина Bitmap спрайта текста
 * @param {Number || null} height - Высота Bitmap спрайта текста
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
*/
DKTools_Container.prototype.setBaseSpriteSize = function(width, height, block) {
    if (this.base_sprite.resize(width, height)) {
        if (!block) {
            this.start();
        }
        return true;
    }
    return false;
};

DKTools_Container.prototype.setInverted = function(inverted, block) {
    if (this.inverted === inverted) {
        return false;
    }
    var last_inverted = this.inverted;
    this.setupInverted(inverted);
    if (last_inverted === this.inverted) {
        return false;
    }
    if (!block) {
        this.start();
    }
    return true;
};

// other methods

/**
 * Запускает работу спрайта

 * @method start
 * @param {Boolean || null} resize_text_sprite - Изменить размер спрайта текста
 * @param {Boolean || null} align_text_sprite - Установить выравнивание по центру для спрайта текста
*/
DKTools_Container.prototype.start = function(resize_text_sprite, align_text_sprite) {
    if (!this.base_sprite.isStarted()) {
        this.base_sprite.start();
    }
    DKTools_Text_Container.prototype.start.call(this);
    if (resize_text_sprite) {
        if (this.maxRows() === 1 && this.isHorizontalPlacement()) {
            if (align_text_sprite) {
                this.text_sprite.setupAlign('center');
            }
            this.addReadyListener(function () {
                this.text_sprite.setHeight(this.base_sprite.height);
            }.bind(this));
        } else if (this.maxCols() === 1 && this.isVerticalPlacement()) {
            if (align_text_sprite) {
                this.text_sprite.setupAlign('center');
            }
            this.addReadyListener(function () {
                this.text_sprite.setWidth(this.base_sprite.width);
            }.bind(this));
        }
    }
};

/**
 * Создает базовый спрайт

 * @method createBaseSprite
 */
DKTools_Container.prototype.createBaseSprite = function(object) {
    this.base_sprite = new DKTools_Sprite(object);
};

/**
 * Возвращает true, если на спрайт можно нажимать

 * @method isSpriteButton
 * @return Boolean
 */
DKTools_Container.prototype.isSpriteButton = function() {
    return this.base_sprite.isSpriteButton();
};

DKTools_Container.prototype.isInverted = function() {
    return this.inverted;
};

DKTools_Container.prototype.invert = function() {
    this.setInverted(!this.isInverted());
};

/**
 * Возвращает все элементы контейнера

 * @method allElements
 * @return Array
*/
DKTools_Container.prototype.allElements = function() {
    if (this.isInverted()) {
        return [this.base_sprite, this.text_sprite];
    }
    return [this.text_sprite, this.base_sprite];
};





//===========================================================================
// DK Tools Progress Bar Base
//===========================================================================

/**
 * @class DKTools_Progress_Bar_Base
 * @constructor
 * @param {Number || null} x - Координата X (The x coordinate for the upper-left corner)
 * @param {Number || null} y - Координата Y (The y coordinate for the upper-left corner)
 * @param {Number || null} width - Ширина Bitmap (The width of the Bitmap)
 * @param {Number || null} height - Высота Bitmap (The height of the Bitmap)
*/
function DKTools_Progress_Bar_Base() {
	this.initialize.apply(this, arguments);
}

DKTools_Progress_Bar_Base.prototype = Object.create(DKTools_Sprite.prototype);
DKTools_Progress_Bar_Base.prototype.constructor = DKTools_Sprite;

/**
 * Возвращает стандартное максимальное значение
 
 * @method standardMax
 * @return Number
*/
DKTools_Progress_Bar_Base.prototype.standardMax = function() {
	return 100;
};

/**
 * Возвращает стандартное значение
 
 * @method standardValue
 * @return Number
*/
DKTools_Progress_Bar_Base.prototype.standardValue = function() {
	return this.max ? this.max : this.standardMax();
};

/**
 * Возвращает стандартный цвет
 
 * @method standardColor
 * @return String
*/
DKTools_Progress_Bar_Base.prototype.standardProgressColor = function() {
	return '#ffffff';
};

/**
 * Возвращает стандартное отображение процентов
 
 * @method standardShowPercent
 * @return Boolean
*/
DKTools_Progress_Bar_Base.prototype.standardShowPercent = function() {
	return true;
};

/**
 * Возвращает стандартный цвет фона
 
 * @method standardBackgroundColor
 * @return String
*/
DKTools_Progress_Bar_Base.prototype.standardBackgroundColor = function() {
	return '#33ccff';
};

// setup methods

/**
 * Устанавливает все параметры спрайта
 
 * @method setupAll
 *
 * @param {Object || null} object - Объект типа {}
 *
 * @property {Number || null} max - Максимальное значение
 * @property {Number || null} value - Текущее значение
 * @property {String || null} progress_color - Цвет прогресса
 * @property {Boolean || null} show_percent - Отображение в процентах
 *
 * @see other object properties: DKTools_Sprite.prototype.setupAll
*/
DKTools_Progress_Bar_Base.prototype.setupAll = function(object) {
	object = object || {};
	DKTools_Sprite.prototype.setupAll.call(this, object);
	this.setupMax(object.max);
	this.setupValue(object.value);
	this.setupProgressColor(object.progress_color);
	this.setupShowPercent(object.show_percent);
};

/**
 * Устанавливает максимальное значение
 
 * @method setupMax
 * @param {Number || null} max - Максимальное значение
*/
DKTools_Progress_Bar_Base.prototype.setupMax = function(max) {
	this.max = max || this.standardMax();
};

/**
 * Устанавливает текущее значение
 
 * @method setupValue
 * @param {Number || null} value - Текущее значение
*/
DKTools_Progress_Bar_Base.prototype.setupValue = function(value) {
	var max = this.standardMax();
	var new_value = Math.max(0, Math.min(value, max));
	this.value = Number.isNaN(new_value) ? this.standardValue() : new_value;
};

/**
 * Устанавливает цвет
 
 * @method setupColor
 * @param {String || null} color - Цвет
*/
DKTools_Progress_Bar_Base.prototype.setupProgressColor = function(color) {
	this.progress_color = color || this.standardProgressColor();
};

/**
 * Устанавливает отображение процентов
 
 * @method setupShowPercent
 * @param {Boolean || null} show_percent - Отображение процентов
*/
DKTools_Progress_Bar_Base.prototype.setupShowPercent = function(show_percent) {
	this.show_percent = (show_percent == null ? this.standardShowPercent() : show_percent);
};

// set methods

/**
 * Изменяет все параметры спрайта
 * Возвращает количество измененных параметров

 * @method setAll
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} block_start - Блокировка вызова функции start
 *
 * @property {Number || null} max - Максимальное значение
 * @property {Number || null} value - Текущее значение
 * @property {String || null} progress_color - Цвет прогресса
 * @property {Boolean || null} show_percent - Отображение в процентах
 *
 * @see other object properties: DKTools_Sprite.prototype.setAll
 *
 * @return Number
*/
DKTools_Progress_Bar_Base.prototype.setAll = function(object, block_start) {
	object = object || {};
	var block = true;
	var changed = DKTools_Sprite.prototype.setAll.call(this, object, block);
    this.activateSetAllMode();
	if (this.setMax(object.max, block)) {
        changed++;
    }
	if (this.setValue(object.value, block)) {
        changed++;
    }
	if (this.setProgressColor(object.progress_color, block)) {
        changed++;
    }
    if (this.setShowPercent(object.show_percent, block)) {
        changed++;
    }
	if (changed && !block_start) {
        this.start();
    }
    this.deactivateSetAllMode();
	return changed;
};

/**
 * Изменяет максимальное значение
 * Возвращает true, если изменение произошло
 
 * @method setMax
 *
 * @param {Number || null} max - Максимальное значение
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
*/
DKTools_Progress_Bar_Base.prototype.setMax = function(max, block) {
	if (this.max === max) {
        return false;
    }
	var last_max = this.max;
	this.setupMax(max);
	if (last_max === this.max) {
        return false;
    }
	if (!block) {
        this.start();
    }
	return true;
};

/**
 * Изменяет текущее значение
 * Возвращает true, если изменение произошло
 
 * @method setValue
 *
 * @param {Number || null} value - Текущее значение
 * @param {Boolean || null} block - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
*/
DKTools_Progress_Bar_Base.prototype.setValue = function(value, block) {
	if (this.value === value) {
        return false;
    }
	var last_value = this.value;
	this.setupValue(value);
	if (last_value === this.value) {
        return false;
    }
	if (!block) {
        this.updateBitmap();
    }
	return true;
};

/**
 * Изменяет цвет прогресса
 * Возвращает true, если изменение произошло
 
 * @method setProgressColor
 *
 * @param {String || null} color - Цвет прогресса
 * @param {Boolean || null} block - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
*/
DKTools_Progress_Bar_Base.prototype.setProgressColor = function(color, block) {
	if (this.progress_color === color) {
        return false;
    }
	var last_color = this.progress_color;
	this.setupProgressColor(color);
	if (last_color === this.progress_color) {
        return false;
    }
	if (!block) {
        this.updateBitmap();
    }
	return true;
};

/**
 * Изменяет отображение процентов
 * Возвращает true, если изменение произошло
 
 * @method setShowPercent
 *
 * @param {String || null} show - Отображение процентов
 * @param {Boolean || null} block - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
*/
DKTools_Progress_Bar_Base.prototype.setShowPercent = function(show, block) {
	if (this.show_percent === show) {
        return false;
    }
	var last_show = this.show_percent;
	this.setupShowPercent(show);
	if (last_show === this.show_percent) {
        return false;
    }
	if (!block) {
        this.updateBitmap();
    }
	return true;
};

/**
 * Устанавливает функцию обработки изменения текущего значения

 * @method setValueHandler
 * @param {Function || null} method - Функция обработки изменения текущего значения
*/
DKTools_Progress_Bar_Base.prototype.setValueHandler = function(method) {
	this.value_handler = method;
};

/**
 * Устанавливает функцию обработки максимального значения

 * @method setFullHandler
 * @param {Function || null} method - Функция обработки максимального значения
*/
DKTools_Progress_Bar_Base.prototype.setFullHandler = function(method) {
    this.full_handler = method;
};

/**
 * Устанавливает функцию обработки нулевого значения

 * @method setEmptyHandler
 * @param {Function || null} method - Функция обработки нулевого значения
*/
DKTools_Progress_Bar_Base.prototype.setEmptyHandler = function(method) {
    this.empty_handler = method;
};

/**
 * Устанавливает функцию обработки обновления текста

 * @method setUpdateTextHandler
 * @param {Function || null} method - Функция обработки обновления текста
 */
DKTools_Progress_Bar_Base.prototype.setUpdateTextHandler = function(method) {
    this.update_text_handler = method;
};

// other methods

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
 * Обновляет Bitmap спрайта

 * @method updateBitmap
*/
DKTools_Progress_Bar_Base.prototype.updateBitmap = function() {
	DKTools_Sprite.prototype.updateBitmap.call(this);
	if (!this.bitmap) {
        return;
    }
	this.updateProgressColor();
	this.updateText();
};

/**
 * Обновляет цвет прогресса
 
 * @method updateProgressColor
*/
DKTools_Progress_Bar_Base.prototype.updateProgressColor = function() {
	if (this.value === 0) {
        return;
    }
	var width = this.value * this.bitmap_width / this.max;
	this.fillRect(this.progress_color, 0, 0, width);
};

/**
 * Обновляет текст
 
 * @method updateText
*/
DKTools_Progress_Bar_Base.prototype.updateText = function() {
    if (this.update_text_handler) {
        return this.callUpdateTextHandler();
    }
    var text;
    if (this.isShowPercent()) {
        text = '%1%'.format(Math.ceil(this.value / this.max * 100));
    } else {
        text = '%1/%2'.format(this.value, this.max);
    }
    this.drawText(text);
};

/**
 * Возвращает true, если отображение в процентах

 * @method isShowPercent
 * @return Boolean
*/
DKTools_Progress_Bar_Base.prototype.isShowPercent = function() {
	return this.show_percent;
};

/**
 * Возвращает true, если текущее значение равно 0

 * @method isEmpty
 * @return Boolean
 */
DKTools_Progress_Bar_Base.prototype.isEmpty = function() {
    return this.value === 0;
};

/**
 * Возвращает true, если текущее значение равно максимальному значению

 * @method isFull
 * @return Boolean
 */
DKTools_Progress_Bar_Base.prototype.isFull = function() {
    return this.value === this.max;
};

/**
 * Добавить к текущему значению
 
 * @method add
 * @param {Number} value - Значение
*/
DKTools_Progress_Bar_Base.prototype.add = function(value) {
    if (value == null) {
        return;
    }
    this.setValue(this.value + value);
};

/**
 * Уменьшить от текущего значения

 * @method rem
 * @param {Number} value - Значение
 */
DKTools_Progress_Bar_Base.prototype.rem = function(value) {
    this.add(-value);
};

/**
 * Уменьшить текущее значение
 * Возвращает true, если изменение произошло
 
 * @method prev
 * @return Boolean
*/
DKTools_Progress_Bar_Base.prototype.prev = function() {
	if (this.value === 0) {
        return false;
    }
	if (!this.setValue(this.value - 1)) {
        return false;
    }
	this.callValueHandler();
	return true;
};

/**
 * Увеличить текущее значение
 * Возвращает true, если изменение произошло
 
 * @method next
 * @return Boolean
*/
DKTools_Progress_Bar_Base.prototype.next = function() {
	if (this.value >= this.max) {
        return false;
    }
	if (!this.setValue(this.value + 1)) {
        return false;
    }
	this.callValueHandler();
	return true;
};

/**
 * Установить текущее значение в 0
 * Возвращает true, если изменение произошло
 
 * @method empty
 * @return Boolean
*/
DKTools_Progress_Bar_Base.prototype.empty = function() {
	return this.setValue(0);
};

/**
 * Установить текущее значение в максимум
 * Возвращает true, если изменение произошло
 
 * @method full
 * @return Boolean
*/
DKTools_Progress_Bar_Base.prototype.full = function() {
	return this.setValue(this.max);
};

/**
 * Вызов функции обработки изменения текущего значения
 
 * @method callValueHandler
*/
DKTools_Progress_Bar_Base.prototype.callValueHandler = function() {
	if (this.value_handler) {
        this.value_handler(this.value, this.id);
    }
};

/**
 * Вызов функции обработки максимального значения

 * @method callFullHandler
*/
DKTools_Progress_Bar_Base.prototype.callFullHandler = function() {
    if (this.full_handler) {
        this.full_handler(this.value, this.id);
    }
};

/**
 * Вызов функции обработки нулевого значения

 * @method callEmptyHandler
*/
DKTools_Progress_Bar_Base.prototype.callEmptyHandler = function() {
    if (this.empty_handler) {
        this.empty_handler(this.value, this.id);
    }
};

/**
 * Вызов функции обработки обновления текста

 * @method callUpdateTextHandler
 */
DKTools_Progress_Bar_Base.prototype.callUpdateTextHandler = function() {
    this.update_text_handler(this.value, this.max, this.id);
};





//===========================================================================
// DK Tools Progress Bar
//===========================================================================

/**
 * @class DKTools_Progress_Bar
 * @constructor
 * @param {Number || null} x - Координата X (The x coordinate for the upper-left corner)
 * @param {Number || null} y - Координата Y (The y coordinate for the upper-left corner)
 * @param {Number || null} width - Ширина Bitmap (The width of the Bitmap)
 * @param {Number || null} height - Высота Bitmap (The height of the Bitmap)
*/
function DKTools_Progress_Bar() {
    this.initialize.apply(this, arguments);
}

DKTools_Progress_Bar.prototype = Object.create(DKTools_Container.prototype);
DKTools_Progress_Bar.prototype.constructor = DKTools_Container;

// setup methods

/**
 * Устанавливает максимальное значение

 * @method setupMax
 * @param {Number || null} max - Максимальное значение
*/
DKTools_Progress_Bar.prototype.setupMax = function(max) {
    this.base_sprite.setupMax(max);
};

/**
 * Устанавливает текущее значение

 * @method setupValue
 * @param {Number || null} value - Текущее значение
*/
DKTools_Progress_Bar.prototype.setupValue = function(value) {
    this.base_sprite.setupValue(value);
};

/**
 * Устанавливает цвет

 * @method setupColor
 * @param {String || null} color - Цвет
*/
DKTools_Progress_Bar.prototype.setupProgressColor = function(color) {
    this.base_sprite.setupProgressColor(color);
};

/**
 * Устанавливает отображение процентов

 * @method setupShowPercent
 * @param {Boolean || null} show_percent - Отображение процентов
*/
DKTools_Progress_Bar.prototype.setupShowPercent = function(show_percent) {
    this.base_sprite.setupShowPercent(show_percent);
};

// set methods

/**
 * Изменяет максимальное значение
 * Возвращает true, если изменение произошло

 * @method setMax
 *
 * @param {Number || null} max - Максимальное значение
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
*/
DKTools_Progress_Bar.prototype.setMax = function(max, block) {
    return this.base_sprite.setMax(max, block);
};

/**
 * Изменяет текущее значение
 * Возвращает true, если изменение произошло

 * @method setValue
 *
 * @param {Number || null} value - Текущее значение
 * @param {Boolean || null} block - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
 */
DKTools_Progress_Bar.prototype.setValue = function(value, block) {
    return this.base_sprite.setValue(value, block);
};

/**
 * Изменяет цвет прогресса
 * Возвращает true, если изменение произошло

 * @method setProgressColor
 *
 * @param {String || null} color - Цвет прогресса
 * @param {Boolean || null} block - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
 */
DKTools_Progress_Bar.prototype.setProgressColor = function(color, block) {
    return this.base_sprite.setProgressColor(color, block);
};

/**
 * Изменяет отображение процентов
 * Возвращает true, если изменение произошло

 * @method setShowPercent
 *
 * @param {String || null} show - Отображение процентов
 * @param {Boolean || null} block - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
*/
DKTools_Progress_Bar.prototype.setShowPercent = function(show, block) {
    return this.base_sprite.setShowPercent(show, block);
};

/**
 * Устанавливает функцию обработки изменения текущего значения

 * @method setValueHandler
 * @param {Function} method - Функция обработки изменения текущего значения
*/
DKTools_Progress_Bar.prototype.setValueHandler = function(method) {
    this.base_sprite.setValueHandler(method);
};

/**
 * Устанавливает функцию обработки максимального значения

 * @method setFullHandler
 * @param {Function} method - Функция обработки максимального значения
*/
DKTools_Progress_Bar.prototype.setFullHandler = function(method) {
    this.base_sprite.setFullHandler(method);
};

/**
 * Устанавливает функцию обработки нулевого значения

 * @method setEmptyHandler
 * @param {Function} method - Функция обработки нулевого значения
*/
DKTools_Progress_Bar.prototype.setEmptyHandler = function(method) {
    this.base_sprite.setEmptyHandler(method);
};

/**
 * Устанавливает функцию обработки обновления текста

 * @method setUpdateTextHandler
 * @param {Function || null} method - Функция обработки обновления текста
 */
DKTools_Progress_Bar.prototype.setUpdateTextHandler = function(method) {
    this.base_sprite.setUpdateTextHandler(method);
};

// other methods

/**
 * Создает базовый спрайт

 * @method createBaseSprite
*/
DKTools_Progress_Bar.prototype.createBaseSprite = function(object) {
    this.base_sprite = new DKTools_Progress_Bar_Base(object);
};

/**
 * Возвращает true, если отображение в процентах

 * @method isShowPercent
 * @return Boolean
*/
DKTools_Progress_Bar.prototype.isShowPercent = function() {
    return this.base_sprite.isShowPercent();
};

/**
 * Возвращает true, если текущее значение равно 0

 * @method isEmpty
 * @return Boolean
 */
DKTools_Progress_Bar.prototype.isEmpty = function() {
    return this.base_sprite.isEmpty();
};

/**
 * Возвращает true, если текущее значение равно максимальному значению

 * @method isFull
 * @return Boolean
 */
DKTools_Progress_Bar.prototype.isFull = function() {
    return this.base_sprite.isFull();
};

/**
 * Добавить к текущему значению

 * @method add
 * @param {Number} value - Значение
*/
DKTools_Progress_Bar.prototype.add = function(value) {
    this.base_sprite.add(value);
};

/**
 * Уменьшить от текущего значения

 * @method rem
 * @param {Number} value - Значение
 */
DKTools_Progress_Bar.prototype.rem = function(value) {
    this.base_sprite.rem(value);
};

/**
 * Уменьшить текущее значение
 * Возвращает true, если изменение произошло

 * @method prev
 * @return Boolean
*/
DKTools_Progress_Bar.prototype.prev = function() {
    return this.base_sprite.prev();
};

/**
 * Увеличить текущее значение
 * Возвращает true, если изменение произошло

 * @method next
 * @return Boolean
*/
DKTools_Progress_Bar.prototype.next = function() {
    return this.base_sprite.next();
};

/**
 * Установить текущее значение в 0
 * Возвращает true, если изменение произошло

 * @method empty
 * @return Boolean
*/
DKTools_Progress_Bar.prototype.empty = function() {
    return this.base_sprite.empty();
};

/**
 * Установить текущее значение в максимум
 * Возвращает true, если изменение произошло

 * @method full
 * @return Boolean
*/
DKTools_Progress_Bar.prototype.full = function() {
    return this.base_sprite.full();
};





//===========================================================================
// Элементы, основанные на DKTools_Sprite_Button
// Elements based on DKTools_Sprite_Button
//===========================================================================





//===========================================================================
// НЕ ГОТОВ
//===========================================================================
// DK Tools Input
//===========================================================================

/**
 * @class DKTools_Input_Base
 * @constructor
 * @param {Number} object - Координата X (The x coordinate for the upper-left corner)
 * @param {Number} y - Координата Y (The y coordinate for the upper-left corner)
 * @param {Number} width - Ширина Bitmap (The width of the Bitmap)
 * @param {Number} height - Высота Bitmap (The height of the Bitmap)
*/
function DKTools_Input_Base() {
	this.initialize.apply(this, arguments);
}

DKTools_Input_Base.prototype = Object.create(DKTools_Sprite_Button.prototype);
DKTools_Input_Base.prototype.constructor = DKTools_Sprite_Button;

// properties

Object.defineProperty(DKTools_Input_Base.prototype, 'length', {
    get: function() {
        return this.input_text.length;
    },
    configurable: true
});

// initialize methods

DKTools_Input_Base.prototype.initialize = function(object, y, width, height) {
    this.initializeCaret();
	DKTools_Sprite_Button.prototype.initialize.call(this, object, y, width, height);
	this.deactivate();
};

/**
 * Инициализирует каретку ввода

 * @method initializeCaret
*/
DKTools_Input_Base.prototype.initializeCaret = function() {
    this.caret = {};
};

// standard methods

/**
 * Возвращает стандартный введенный текст

 * @method standardInputText
 * @return String
*/
DKTools_Input_Base.prototype.standardInputText = function() {
	return '';
};

/**
 * Возвращает стандартное выравнивание

 * @method standardAlign
 * @return String
*/
DKTools_Input_Base.prototype.standardAlign = function() {
	return 'left';
};

/**
 * Возвращает стандартный тип ввода
 
 * @method standardType
 * @return Number
*/
DKTools_Input_Base.prototype.standardType = function() {
	return 1;
};

/**
 * Возвращает скорость обновления каретки ввода

 * @method standardCaretRate
 * @return Number
*/
DKTools_Input_Base.prototype.standardCaretRate = function() {
    return 25;
};

/**
 * Возвращает стандартный текст каретки ввода

 * @method standardCaretText
 * @return String
*/
DKTools_Input_Base.prototype.standardCaretText = function() {
    return '|';
};

/**
 * Возвращает стандартную видимость каретки ввода

 * @method standardCaretVisible
 * @return Boolean
*/
DKTools_Input_Base.prototype.standardCaretVisible = function() {
    return true;
};

/**
 * Возвращает стандартную позицию каретки ввода

 * @method standardCaretPosition
 * @return Number
*/
DKTools_Input_Base.prototype.standardCaretPosition = function() {
    return this.length;
};

// setup methods

/**
 * Устанавливает все параметры спрайта
 
 * @method setupAll
 *
 * @param {Object || null} object - Объект типа {}
 *
 * @property {Number || null} input_length - Длина ввода
 * @property {String || null} input_text - Введенный текст
 * @property {Number || null} type - Тип ввода
 * @property {Object || null} caret - Объект типа {}
 *
 * @see other object properties: DKTools_Sprite_Button.prototype.setupAll
 * @see caret properties: DKTools_Input_Base.prototype.setupCaret
*/
DKTools_Input_Base.prototype.setupAll = function(object) {
	object = object || {};
	DKTools_Sprite_Button.prototype.setupAll.call(this, object);
	this.setupInputLength(object.length);
	this.setupInputText(object.text);
	this.setupType(object.type);
	this.setupCaret(object.caret);
};

/**
 * Устанавливает длину ввода
 
 * @method setupLength
 * @param {Number || null} length - Длина ввода
*/
DKTools_Input_Base.prototype.setupInputLength = function(length) {
	this.input_length = (length ? length.clamp(this.minInputLength(), this.maxInputLength()) : this.minInputLength());
};

/**
 * Устанавливает введенный текст
 
 * @method setupInputText
 * @param {String || null} text - Введенный текст
*/
DKTools_Input_Base.prototype.setupInputText = function(text) {
	this.input_text = (text == null ? this.standardInputText() : String(text));
};

/**
 * Устанавливает тип ввода
 
 * @method setupType
 * @param {Number || null} type - Тип ввода
*/
DKTools_Input_Base.prototype.setupType = function(type) {
	this.type = (type == null ? this.standardType() : type);
};

/**
 * Устанавливает все параметры каретки ввода

 * @method setupCaret
 *
 * @param {Object || null} object - Объект типа {}
 *
 * @property {Number || null} rate - Скорость обновления каретки ввода
 * @property {String || null} text - Текст каретки ввода
 * @property {Boolean || null} visible - Видимость каретки ввода
 * @property {Number || null} position - Позиция каретки ввода
*/
DKTools_Input_Base.prototype.setupCaret = function(object) {
    object = object || {};
    this.clearCaretCounter();
    this.setupCaretRate(object.rate);
    this.setupCaretText(object.text);
    this.setupCaretVisible(object.visible);
    this.setupCaretPosition(object.position);
};

/**
 * Устанавливает скорость обновления каретки ввода

 * @method setupCaretRate
 * @param {Number || null} rate - Скорость обновления каретки ввода
*/
DKTools_Input_Base.prototype.setupCaretRate = function(rate) {
    this.caret.rate = (rate == null ? this.standardCaretRate() : rate);
};

/**
 * Устанавливает текст каретки ввода

 * @method setupCaretText
 * @param {String || null} text - Текст каретки ввода
*/
DKTools_Input_Base.prototype.setupCaretText = function(text) {
    this.caret.text = (text == null ? this.standardCaretText() : String(text));
};

/**
 * Устанавливает видимость каретки ввода

 * @method setupCaretVisible
 * @param {Boolean || null} visible - Видимость каретки ввода
*/
DKTools_Input_Base.prototype.setupCaretVisible = function(visible) {
    this.caret.visible = (visible == null ? this.standardCaretVisible() : visible);
};

/**
 * Устанавливает позицию каретки ввода
 
 * @method setupCaretPosition
 * @param {Number || null} position - Позиция каретки ввода
*/
DKTools_Input_Base.prototype.setupCaretPosition = function(position) {
    position = (position == null ? this.standardCaretPosition() : position);
    this.caret.position = position.clamp(0, this.length);
};

// set methods

/**
 * Изменяет все параметры спрайта
 * Возвращает количество измененных параметров

 * @method setAll
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} block_start - Блокировка вызова функции start
 *
 * @property {Number || null} input_length - Длина ввода
 * @property {String || null} input_text - Введенный текст
 * @property {Number || null} type - Тип ввода
 * @property {Object || null} caret - Объект типа {}
 *
 * @see other object properties: DKTools_Sprite_Button.prototype.setAll
 * @see caret properties: DKTools_Input_Base.prototype.setCaret
 *
 * @return Number
*/
DKTools_Input_Base.prototype.setAll = function(object, block_start) {
	object = object || {};
	var block = true;
	var changed = DKTools_Sprite_Button.prototype.setAll.call(this, object, block);
    this.activateSetAllMode();
	if (this.setInputText(object.text, block)) {
        changed++;
    }
	if (this.setType(object.type, block)) {
        changed++;
    }
    changed += this.setCaret(object.caret, block);
	if (changed && !block_start) {
        this.start();
    }
	if (this.setInputLength(object.input_length)) {
        changed++;
    }
    this.deactivateSetAllMode();
	return changed;
};

/**
 * Изменяет введенный текст
 * Возвращает true, если изменение произошло
 
 * @method setInputText
 *
 * @param {Number || null} text - Введенный текст
 * @param {Boolean || null} block - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
*/
DKTools_Input_Base.prototype.setInputText = function(text, block) {
	if (this.input_text === text) {
        return false;
    }
	var last_text = this.input_text;
	this.setupInputText(text);
	if (last_text === this.input_text) {
        return false;
    }
	this.setupCaretPosition();
	if (!block) {
        this.updateBitmap();
    }
	return true;
};

/**
 * Изменяет тип ввода
 * Возвращает true, если изменение произошло
 
 * @method setType
 *
 * @param {Number || null} type - Тип ввода
 * @param {Boolean || null} block - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
*/
DKTools_Input_Base.prototype.setType = function(type, block) {
	if (this.type === type) {
        return false;
    }
	var last_type = this.type;
	this.setupType(type);
	if (last_type === this.type) {
        return false;
    }
	if (!block) {
        this.updateBitmap();
    }
	return true;
};

/**
 * Изменяет длину ввода
 * Возвращает true, если изменение произошло

 * @method setInputLength
 *
 * @param {Number || null} length - Длина ввода
 *
 * @return Boolean
*/
DKTools_Input_Base.prototype.setInputLength = function(length) {
    if (this.input_length === length) {
        return false;
    }
    var last_length = this.input_length;
    this.setupInputLength(length);
    return last_length !== this.input_length;
};

/**
 * Изменяет все параметры каретки ввода
 * Возвращает количество измененных параметров

 * @method setCaret
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} block_start - Блокировка вызова функции start
 *
 * @property {Number || null} rate - Скорость обновления каретки ввода
 * @property {String || null} text - Текст каретки ввода
 * @property {Boolean || null} visible - Видимость каретки ввода
 * @property {Number || null} position - Позиция каретки ввода
 *
 * @return Number
*/
DKTools_Input_Base.prototype.setCaret = function(object, block_start) {
    object = object || {};
    var block = true;
    var changed = 0;
    this.clearCaretCounter();
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
    if (changed && !block_start) {
        this.start();
    }
    return changed;
};

/**
 * Изменяет скорость обновления каретки ввода
 * Возвращает true, если изменение произошло

 * @method setCaretRate
 *
 * @param {Number || null} rate - Скорость обновления каретки ввода
 * @param {Boolean || null} block - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
*/
DKTools_Input_Base.prototype.setCaretRate = function(rate, block) {
    if (this.caret.rate === rate) {
        return false;
    }
    var last_rate = this.caret.rate;
    this.setupCaretRate(rate);
    if (last_rate === this.caret.rate) {
        return false;
    }
    if (!block) {
        this.updateBitmap();
    }
    return true;
};

/**
 * Изменяет текст каретки ввода
 * Возвращает true, если изменение произошло

 * @method setCaretText
 *
 * @param {String || null} text - Текст каретки ввода
 * @param {Boolean || null} block - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
*/
DKTools_Input_Base.prototype.setCaretText = function(text, block) {
    if (this.caret.text === text) {
        return false;
    }
    var last_text = this.caret.text;
    this.setupCaretText(text);
    if (last_text === this.caret.text) {
        return false;
    }
    if (!block) {
        this.updateBitmap();
    }
    return true;
};

/**
 * Изменяет видимость каретки ввода
 * Возвращает true, если изменение произошло

 * @method setCaretVisible
 *
 * @param {Boolean || null} visible - Видимость каретки ввода
 * @param {Boolean || null} block - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
*/
DKTools_Input_Base.prototype.setCaretVisible = function(visible, block) {
    if (this.caret.visible === visible) {
        return false;
    }
    var last_visible = this.caret.visible;
    this.setupCaretVisible(visible);
    if (last_visible === this.caret.visible) {
        return false;
    }
    if (!block) {
        this.updateBitmap();
    }
    return true;
};

/**
 * Изменяет позицию каретки ввода
 * Возвращает true, если изменение произошло

 * @method setCaretPosition
 *
 * @param {Number || null} position - Позиция каретки ввода
 * @param {Boolean || null} block - Блокировка вызова функции updateBitmap
 *
 * @return Boolean
*/
DKTools_Input_Base.prototype.setCaretPosition = function(position, block) {
    if (this.caret.position === position) {
        return false;
    }
    var last_position = this.caret.position;
    this.setupCaretPosition(position);
    if (last_position === this.caret.position) {
        return false;
    }
    if (!block) {
        this.updateBitmap();
    }
	return true;
};

/**
 * Установка обработчика нажатия Ok

 * @method setOkHandler
 * @param {Function} method - Обработчик нажатия
*/
DKTools_Input_Base.prototype.setOkHandler = function(method) {
	this.ok_handler = method;
};

/**
 * Установка обработчика ввода

 * @method setInputHandler
 * @param {Function} method - Обработчик ввода
*/
DKTools_Input_Base.prototype.setInputHandler = function(method) {
	this.input_handler = method;
};

/**
 * Установка обработчика нажатия Cancel

 * @method setCancelHandler
 * @param {Function} method - Обработчик нажатия
*/
DKTools_Input_Base.prototype.setCancelHandler = function(method) {
	this.cancel_handler = method;
};

// other methods

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
 * Возвращает минимальную длину ввода
 *
 * @method minInputLength
 * @return Number
*/
DKTools_Input_Base.prototype.minInputLength = function() {
	return 1;
};

/**
 * Возвращает максимальную длину ввода
 *
 * @method maxInputLength
 * @return Number
*/
DKTools_Input_Base.prototype.maxInputLength = function() {
	return 60;
};

/**
 * Активирует спрайт
 
 * @method activate
*/
DKTools_Input_Base.prototype.activate = function() {
	DKTools_Sprite_Button.prototype.activate.call(this);
	DKToolsInputManager.clearInputText();
	this.showCaret();
};

/**
 * Деактивирует спрайт
 
 * @method deactivate
*/
DKTools_Input_Base.prototype.deactivate = function() {
	DKTools_Sprite_Button.prototype.deactivate.call(this);
	this.hideCaret();
};

/**
 * Возвращает видимость каретки ввода

 * @method caretIsVisible
 * @return Boolean
*/
DKTools_Input_Base.prototype.caretIsVisible = function() {
    return this.caret.visible;
};

/**
 * Отображает каретку ввода
 
 * @method showCaret
*/
DKTools_Input_Base.prototype.showCaret = function() {
    this.setupCaretVisible(true);
    this.updateBitmap();
};

/**
 * Скрывает каретку ввода
 
 * @method hideCaret
*/
DKTools_Input_Base.prototype.hideCaret = function() {
    this.setupCaretVisible(false);
    this.updateBitmap();
};

/**
 * Очищает менеджер ввода текста и введенный текст

 * @method clearInput
*/
DKTools_Input_Base.prototype.clearInput = function() {
	DKToolsInputManager.clearInputText();
	this.clearInputText();
};

/**
 * Очищает введенный текст

 * @method clearInputText
*/
DKTools_Input_Base.prototype.clearInputText = function() {
	this.setupInputText('');
};

/**
 * Очищает счетчик обновления каретки ввода

 * @method clearCaretCounter
*/
DKTools_Input_Base.prototype.clearCaretCounter = function() {
    this.caret.counter = 0;
};

DKTools_Input_Base.prototype.getInputText = function() {
    if (this.length === 0) {
        return '';
    }
	var input_text = this.input_text;
	if (this.type === 2) {
        input_text = Number(input_text);
    }
	return input_text;
};

DKTools_Input_Base.prototype.getInputTextByType = function() {
    switch(this.type) {
        case 1: return this.input_text;
        case 2: return Number(this.input_text);
        case 3:
        {
            var text = '';
            for(var i = 0; i < this.length; i++) {
                text += '*';
            }
            return text;
        }
    }
};

DKTools_Input_Base.prototype.getDrawableText = function(caret, text) {
    var drawable_text;
    if (this.caret.position === 0) {
        drawable_text = caret + text;
    } else if (this.caret.position <= text.length) {
        drawable_text = text.substring(0, this.caret.position) + caret + text.substring(this.caret.position);
    } else {
        drawable_text = text + caret;
    }
    return drawable_text;
};

/**
 * Добавляет текст

 * @method add
 *
 * @param {String} text - Текст для добавления
 * @param {Number || null} start - Стартовая позиция для добавления
 * @param {Boolean || null} block - Блокировка вызова функции start
*/
DKTools_Input_Base.prototype.add = function(text, start, block) {
    if (text == null || text.length === 0 || start < 0) {
        return;
    }
    if (start == null || start > this.length) {
        start = this.length;
    }
    var input_text = this.input_text;
    var text1 = input_text.substring(0, start);
    var text2 = input_text.substring(start - 1 + text.length);
    this.setInputText(text1 + text + text2, block);
};

/**
 * Удаляет текст

 * @method rem
 *
 * @param {Number} start - Стартовая позиция для удаления
 * @param {Number} count - Количество символов для удаления
 * @param {Boolean || null} block - Блокировка вызова функции start
 */
DKTools_Input_Base.prototype.rem = function(start, count, block) {
    if (start >= this.length || count == null || count === 0) {
        return;
    }
    if (count >= this.length) {
        this.clearInputText();
        if (!block) {
            this.updateBitmap();
        }
        return;
    }
    if (start == null) {
        start = this.length - count;
    }
    var input_text = this.input_text;
    var text1 = input_text.substring(0, start);
    var text2 = input_text.substring(start + count);
    this.setInputText(text1 + text2, block);
};

/**
 * Обновляет Bitmap спрайта

 * @method updateBitmap
*/
DKTools_Input_Base.prototype.updateBitmap = function() {
	DKTools_Sprite_Button.prototype.updateBitmap.call(this);
	if (!this.bitmap) {
        return;
    }
	this.updateText();
};

/**
 * Обновляет отображаемый текст

 * @method updateText
*/
DKTools_Input_Base.prototype.updateText = function() {
	var caret = (this.caretIsVisible() ? this.caret.text : ' ');
	var text = String(this.getInputTextByType());
	var drawable_text = this.getDrawableText(caret, text);
	this.drawText(drawable_text);
};

/**
 * Ввод текста
 
 * @method processInput
*/
DKTools_Input_Base.prototype.processInput = function() {
	if (this.length >= this.input_length || !DKToolsInputManager.checkInputText()) {
		DKToolsInputManager.clearInputText();
		return;
	}
	var text = DKToolsInputManager.getInputText();
	if (this.type === 2) {
        var number = Number(text);
        if (Number.isNaN(number)) {
            return;
        }
    }
    if (this.caret.position !== this.length) {
		var text1 = this.input_text.substring(0, this.caret.position);
		var text2 = this.input_text.substring(this.caret.position);
		this.input_text = text1 + text + text2;
	} else {
        this.input_text += text;
    }
	this.caret.position += text.length;
	this.callInputHandler();
	this.need_update = true;
};

/**
 * Стирание текста
 
 * @method processBackspace
*/
DKTools_Input_Base.prototype.processBackspace = function() {
	if (!Input.isRepeated('backspace')) {
        return;
    }
	if (this.caret.position === 0) {
        return;
    }
	if (this.caret.position < this.length && this.caret.position > 0) {
		var text1 = this.input_text.substring(0, this.caret.position - 1);
		var text2 = this.input_text.substring(this.caret.position);
		this.setupInputText(text1 + text2);
	} else {
		this.setupInputText(this.input_text.substring(0, this.length - 1));
	}
    this.caret.position--;
	this.callInputHandler();
	this.need_update = true;
};

/**
 * Стирание текста
 
 * @method processDelete
*/
DKTools_Input_Base.prototype.processDelete = function() {
	if (!Input.isRepeated('delete') || this.caret.position === this.length) {
        return;
    }
	var text1 = this.input_text.substring(0, this.caret.position);
	var text2 = this.input_text.substring(this.caret.position + 1);
	this.setupInputText(text1 + text2);
	this.callInputHandler();
	this.need_update = true;
};

/**
 * Нажатие Ok
 
 * @method processOk
*/
DKTools_Input_Base.prototype.processOk = function() {
	if (!Input.isTriggered('ok')) {
        return;
    }
	this.callOkHandler();
	this.need_update = true;
};

/**
 * Нажатие Cancel
 
 * @method processOk
*/
DKTools_Input_Base.prototype.processCancel = function() {
	if (!Input.isTriggered('cancel') && !TouchInput.isCancelled()) {
        return;
    }
	this.callCancelHandler();
	this.need_update = true;
};

/**
 * Передвижение каретки
 
 * @method processCaretMove
*/
DKTools_Input_Base.prototype.processCaretMove = function() {
	this.processLeft();
	this.processRight();
};

/**
 * Передвижение каретки влево
 
 * @method processLeft
*/
DKTools_Input_Base.prototype.processLeft = function() {
	if (!Input.isRepeated('left')) {
        return;
    }
	this.caret.position--;
	if (this.caret.position < 0) {
        this.caret.position = 0;
    }
	this.need_update = true;
};

/**
 * Передвижение каретки вправо
 
 * @method processRight
*/
DKTools_Input_Base.prototype.processRight = function() {
	if (!Input.isRepeated('right')) {
        return;
    }
	this.caret.position++;
	if (this.caret.position > this.length) {
        this.caret.position = this.length;
    }
	this.need_update = true;
};

DKTools_Input_Base.prototype.processCaret = function() {
    this.caret.counter++;
    if (this.caret.counter % this.caret.rate !== 0) {
        return;
    }
    this.clearCaretCounter();
    this.setupCaretVisible(!this.caret.visible);
    this.need_update = true;
};

/**
 * Обновление спрайта
 
 * @method update
*/
DKTools_Input_Base.prototype.update = function() {
	if (!this.isActive() || !this.isVisible()) {
        return;
    } // не будет реагировать на нажатия
	DKTools_Sprite_Button.prototype.update.call(this);
	this.processInput();
	this.processBackspace();
	this.processDelete();
	this.processOk();
	this.processCancel();
	this.processCaretMove();
    this.processCaret();
	if (this.need_update) {
        this.updateBitmap();
    }
};

/**
 * Вызов обработчика нажатия Ok
 
 * @method callOkHandler
*/
DKTools_Input_Base.prototype.callOkHandler = function() {
	if (!this.ok_handler) {
        return;
    }
	var input_text = this.getInputText();
	this.ok_handler(input_text, this.id);
    this.deactivate();
};

/**
 * Вызов обработчика ввода
 
 * @method callInputHandler
*/
DKTools_Input_Base.prototype.callInputHandler = function() {
	if (!this.input_handler) {
        return;
    }
    var input_text = this.getInputText();
	this.input_handler(input_text, this.id);
};

/**
 * Вызов обработчика нажатия Cancel
 
 * @method callCancelHandler
*/
DKTools_Input_Base.prototype.callCancelHandler = function() {
	if (!this.cancel_handler) {
        return;
    }
    var input_text = this.getInputText();
	this.cancel_handler(input_text, this.id);
    this.deactivate();
};





//===========================================================================
// DK Tools Input
//===========================================================================

/**
 * @class DKTools_Input
 * @constructor
 * @param {Number || null} x - Координата X (The x coordinate for the upper-left corner)
 * @param {Number || null} y - Координата Y (The y coordinate for the upper-left corner)
 * @param {Number || null} width - Ширина Bitmap (The width of the Bitmap)
 * @param {Number || null} height - Высота Bitmap (The height of the Bitmap)
 */
function DKTools_Input() {
    this.initialize.apply(this, arguments);
}

DKTools_Input.prototype = Object.create(DKTools_Container.prototype);
DKTools_Input.prototype.constructor = DKTools_Container;

// other methods

/**
 * Создает базовый спрайт

 * @method createBaseSprite
 */
DKTools_Input.prototype.createBaseSprite = function(object) {
    this.base_sprite = new DKTools_Input_Base(object);
};





//===========================================================================
// DK Tools Check Box Base
//===========================================================================

/**
 * @class DKTools_CheckBox_Base
 * @constructor
 * @param {Number} object - Координата X (The x coordinate for the upper-left corner)
 * @param {Number} y - Координата Y (The y coordinate for the upper-left corner)
 * @param {Number} width - Ширина Bitmap (The width of the Bitmap)
 * @param {Number} height - Высота Bitmap (The height of the Bitmap)
*/
function DKTools_CheckBox_Base() {
	this.initialize.apply(this, arguments);
}

DKTools_CheckBox_Base.prototype = Object.create(DKTools_Sprite_Button.prototype);
DKTools_CheckBox_Base.prototype.constructor = DKTools_Sprite_Button;

// standard methods

/**
 * Возвращает стандартный текст включенного состояния
 
 * @method standardCheckedText
 * @return String
*/
DKTools_CheckBox_Base.prototype.standardCheckedText = function() {
	return DKLocalizationManager.DKTools('#checkbox_standard_checked_text#');
};

/**
 * Возвращает стандартный текст выключенного состояния
 
 * @method standardUncheckedText
 * @return String
*/
DKTools_CheckBox_Base.prototype.standardUncheckedText = function() {
	return DKLocalizationManager.DKTools('#checkbox_standard_unchecked_text#');
};

/**
 * Возвращает стандартный цвет текста включенного состояния
 
 * @method standardCheckedTextColor
 * @return String
*/
DKTools_CheckBox_Base.prototype.standardCheckedTextColor = function() {
	return '#ffffff';
};

/**
 * Возвращает стандартный цвет текста выключенного состояния
 
 * @method standardUncheckedTextColor
 * @return String
*/
DKTools_CheckBox_Base.prototype.standardUncheckedTextColor = function() {
	return '#ffffff';
};

/**
 * Возвращает стандартное имя шрифта включенного состояния
 
 * @method standardCheckedFontName
 * @return String
*/
DKTools_CheckBox_Base.prototype.standardCheckedFontName = function() {
	return 'GameFont';
};

/**
 * Возвращает стандартное значение для курсива включенного состояния

 * @method standardCheckedFontItalic
 * @return Boolean
*/
DKTools_CheckBox_Base.prototype.standardCheckedFontItalic = function() {
	return false;
};

/**
 * Возвращает стандартный размер шрифта включенного состояния

 * @method standardCheckedFontSize
 * @return Number
*/
DKTools_CheckBox_Base.prototype.standardCheckedFontSize = function() {
	return 28;
};

/**
 * Возвращает стандартное имя шрифта вылюченного состояния

 * @method standardUncheckedFontName
 * @return String
*/
DKTools_CheckBox_Base.prototype.standardUncheckedFontName = function() {
	return 'GameFont';
};

/**
 * Возвращает стандартное значение для курсива выключенного состояния

 * @method standardUncheckedFontItalic
 * @return Boolean
*/
DKTools_CheckBox_Base.prototype.standardUncheckedFontItalic = function() {
	return false;
};

/**
 * Возвращает стандартный размер шрифта выключенного состояния

 * @method standardUncheckedFontSize
 * @return Number
*/
DKTools_CheckBox_Base.prototype.standardUncheckedFontSize = function() {
	return 28;
};

/**
 * Возвращает стандартный шрифт включенного состояния

 * @method standardCheckedFont
 * @return Array
*/
DKTools_CheckBox_Base.prototype.standardCheckedFont = function() {
	return [this.standardCheckedFontName(), this.standardCheckedFontItalic(), this.standardCheckedFontSize()];
};

/**
 * Возвращает стандартный шрифт выключенного состояния

 * @method standardUncheckedFont
 * @return Array
*/
DKTools_CheckBox_Base.prototype.standardUncheckedFont = function() {
	return [this.standardUncheckedFontName(), this.standardUncheckedFontItalic(), this.standardUncheckedFontSize()];
};

/**
 * Возвращает стандартное выравнивание включенного состояния

 * @method standardCheckedAlign
 * @return String
*/
DKTools_CheckBox_Base.prototype.standardCheckedAlign = function() {
	return 'center';
};

/**
 * Возвращает стандартное выравнивание выключенного состояния

 * @method standardUncheckedAlign
 * @return String
*/
DKTools_CheckBox_Base.prototype.standardUncheckedAlign = function() {
	return 'center';
};

/**
 * Возвращает стандартное имя графики включенного состояния

 * @method standardCheckedGraphic
 * @return null
*/
DKTools_CheckBox_Base.prototype.standardCheckedGraphic = function() {
	return null;
};

/**
 * Возвращает стандартное имя графики выключенного состояния

 * @method standardUncheckedGraphic
 * @return null
*/
DKTools_CheckBox_Base.prototype.standardUncheckedGraphic = function() {
	return null;
};

// setup methods

/** Изменить текст
 * Устанавливает все параметры спрайта
 
 * @method setupAll
 *
 * @param {Object || null} object - Объект типа {}
 *
 * @property {Boolean || null} checked - Включен или выключен переключатель
 * @property {String || null} checked_text - Текст включенного состояния
 * @property {String || null} unchecked_text - Текст выключенного состояния
 * @property {String || null} checked_text_color - Цвет текста включенного состояния
 * @property {String || null} unchecked_text_color - Цвет текста выключенного состояния
 * @property {Array || null} checked_font - Шрифт включенного состояния
 * @property {Array || null} unchecked_font - Шрифт выключенного состояния
 * @property {String || null} checked_align - Выравнивание текста включенного состояния
 * @property {String || null} unchecked_align - Выравнивание текста выключенного состояния
 * @property {String || null} checked_graphic - Графика включенного состояния
 * @property {String || null} unchecked_graphic - Графика выключенного состояния
 *
 * @see other object properties: DKTools_Sprite_Button.prototype.setupAll
*/
DKTools_CheckBox_Base.prototype.setupAll = function(object) {
    object = object || {};
	DKTools_Sprite_Button.prototype.setupAll.call(this, object);
	this.setupChecked(object.checked);
	this.setupCheckedText(object.checked_text);
	this.setupUncheckedText(object.unchecked_text);
	this.setupCheckedTextColor(object.checked_text_color);
	this.setupUncheckedTextColor(object.unchecked_text_color);
	this.setupCheckedFont(object.checked_font);
	this.setupUncheckedFont(object.unchecked_font);
	this.setupCheckedAlign(object.checked_align);
	this.setupUncheckedAlign(object.unchecked_align);
	this.setupGraphic(object.checked_graphic, object.unchecked_graphic);
};

/** Изменить текст
 * Устанавливает включен или выключен переключатель
 
 * @method setupChecked
 * @param {Boolean || null} checked - Включен или выключен переключатель
*/
DKTools_CheckBox_Base.prototype.setupChecked = function(checked) {
	this.checked = checked || false;
};

/**
 * Устанавливает текст включенного состояния
 
 * @method setupCheckedText
 * @param {String || null} text - Текст включенного состояния
*/
DKTools_CheckBox_Base.prototype.setupCheckedText = function(text) {
	this.checked_text = text || this.standardCheckedText();
};

/**
 * Устанавливает текст выключенного состояния
 
 * @method setupUncheckedText
 * @param {String || null} text - Текст выключенного состояния
*/
DKTools_CheckBox_Base.prototype.setupUncheckedText = function(text) {
	this.unchecked_text = text || this.standardUncheckedText();
};

/**
 * Устанавливает цвет текста включенного состояния
 
 * @method setupCheckedTextColor
 * @param {String || null} color - Цвет текста включенного состояния
*/
DKTools_CheckBox_Base.prototype.setupCheckedTextColor = function(color) {
	this.checked_text_color = color || this.standardCheckedTextColor();
};

/**
 * Устанавливает цвет текста выключенного состояния
 
 * @method setupUncheckedTextColor
 * @param {String || null} color - Цвет текста выключенного состояния
*/
DKTools_CheckBox_Base.prototype.setupUncheckedTextColor = function(color) {
	this.unchecked_text_color = color || this.standardUncheckedTextColor();
};

/**
 * Устанавливает шрифт текста включенного состояния
 
 * @method setupCheckedFont
 * @param {Array || null} font - Шрифт текста включенного состояния
*/
DKTools_CheckBox_Base.prototype.setupCheckedFont = function(font) {
    var standard_font = this.standardCheckedFont();
    font = font || [];
    this.checked_font = [];
    for(var i = 0; i < 3; i++) {
        this.checked_font[i] = (font[i] == null ? standard_font[i] : font[i]);
    }
};

/**
 * Устанавливает шрифт текста выключенного состояния
 
 * @method setupUncheckedFont
 * @param {Array || null} font - Шрифт текста выключенного состояния
*/
DKTools_CheckBox_Base.prototype.setupUncheckedFont = function(font) {
    var standard_font = this.standardUncheckedFont();
    font = font || [];
    this.unchecked_font = [];
    for(var i = 0; i < 3; i++) {
        this.unchecked_font[i] = (font[i] == null ? standard_font[i] : font[i]);
    }
};

/**
 * Устанавливает выравнивание текста включенного состояния
 
 * @method setupCheckedAlign
 * @param {String || null} align - Выравнивание текста включенного состояния
*/
DKTools_CheckBox_Base.prototype.setupCheckedAlign = function(align) {
	this.checked_align = align || this.standardCheckedAlign();
};

/**
 * Устанавливает выравнивание текста выключенного состояния
 
 * @method setupUncheckedAlign
 * @param {String || null} align - Выравнивание текста выключенного состояния
*/
DKTools_CheckBox_Base.prototype.setupUncheckedAlign = function(align) {
	this.unchecked_align = align || this.standardUncheckedAlign();
};

/**
 * Устанавливает графику включенного состояния
 
 * @method setupCheckedGraphic
 * @param {String || null} graphic - Графика включенного состояния
*/
DKTools_CheckBox_Base.prototype.setupCheckedGraphic = function(graphic) {
	this.checked_graphic = graphic || this.standardCheckedGraphic();
};

/**
 * Устанавливает графику выключенного состояния
 
 * @method setupUncheckedGraphic
 * @param {String || null} graphic - Графика выключенного состояния
*/
DKTools_CheckBox_Base.prototype.setupUncheckedGraphic = function(graphic) {
	this.unchecked_graphic = graphic || this.standardUncheckedGraphic();
};

/**
 * Устанавливает графику для включенного и выключенного состояний
 
 * @method setupGraphic
 *
 * @param {String || null} checked_graphic - Графика включенного состояния
 * @param {String || null} unchecked_graphic - Графика выключенного состояния
*/
DKTools_CheckBox_Base.prototype.setupGraphic = function(checked_graphic, unchecked_graphic) {
	this.setupCheckedGraphic(checked_graphic);
	this.setupUncheckedGraphic(unchecked_graphic);
};

// set methods

/** Изменить текст
 * Изменяет все параметры спрайта
 * Возвращает количество измененных параметров
 
 * @method setAll
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} block_start - Блокировка вызова функции start
 *
 * @property {Boolean || null} checked - Включен или выключен переключатель
 * @property {String || null} checked_text - Текст включенного состояния
 * @property {String || null} unchecked_text - Текст выключенного состояния
 * @property {String || null} checked_text_color - Цвет текста включенного состояния
 * @property {String || null} unchecked_text_color - Цвет текста выключенного состояния
 * @property {Array || null} checked_font - Шрифт включенного состояния
 * @property {Array || null} unchecked_font - Шрифт выключенного состояния
 * @property {String || null} checked_align - Выравнивание текста включенного состояния
 * @property {String || null} unchecked_align - Выравнивание текста выключенного состояния
 * @property {String || null} checked_graphic - Графика включенного состояния
 * @property {String || null} unchecked_graphic - Графика выключенного состояния
 *
 * @see other object properties: DKTools_Sprite_Button.prototype.setAll
 *
 * @return Number
*/
DKTools_CheckBox_Base.prototype.setAll = function(object, block_start) {
    object = object || {};
	var block = true;
    var changed = DKTools_Sprite_Button.prototype.setAll.call(this, object, block);
    this.activateSetAllMode();
	if (this.setChecked(object.checked, block)) {
        changed++;
    }
	if (this.setCheckedText(object.checked_text, block)) {
        changed++;
    }
	if (this.setUncheckedText(object.unchecked_text, block)) {
        changed++;
    }
    if (this.setCheckedTextColor(object.checked_text_color, block)) {
        changed++;
    }
    if (this.setUncheckedTextColor(object.unchecked_text_color, block)) {
        changed++;
    }
    if (this.setCheckedFont(object.checked_font, block)) {
        changed++;
    }
    if (this.setUncheckedFont(object.unchecked_font, block)) {
        changed++;
    }
    if (this.setCheckedAlign(object.checked_align, block)) {
        changed++;
    }
    if (this.setUncheckedAlign(object.unchecked_align, block)) {
        changed++;
    }
    changed += this.setGraphic(object.checked_graphic, object.unchecked_graphic, block);
	if (changed && !block_start) {
        this.start();
    }
    this.deactivateSetAllMode();
	return changed;
};

/** Изменить текст
 * Изменяет включен или выключен переключатель
 * Возвращает true, если изменение произошло
 
 * @method setChecked
 *
 * @param {Boolean || null} checked - Включен или выключен переключатель
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Boolean
*/
DKTools_CheckBox_Base.prototype.setChecked = function(checked, block) {
	if (this.checked === checked) {
        return false;
    }
	var last_checked = this.checked;
	this.setupChecked(checked);
	if (last_checked === this.checked) {
        return false;
    }
	if (!block) {
        this.updateCheckBox();
    }
	return true;
};

/**
 * Изменяет текст включенного состояния
 * Возвращает true, если изменение произошло
 
 * @method setCheckedText
 *
 * @param {String || null} text - Текст включенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
*/
DKTools_CheckBox_Base.prototype.setCheckedText = function(text, block) {
	if (this.checked_text === text) {
        return false;
    }
	var last_text = this.checked_text;
	this.setupCheckedText(text);
	if (last_text === this.checked_text) {
        return false;
    }
	if (!block) {
        this.start();
    }
	return true;
};

/**
 * Изменяет текст выключенного состояния
 * Возвращает true, если изменение произошло
 
 * @method setUncheckedText
 *
 * @param {String || null} text - Текст выключенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
*/
DKTools_CheckBox_Base.prototype.setUncheckedText = function(text, block) {
	if (this.unchecked_text === text) {
        return false;
    }
	var last_text = this.unchecked_text;
	this.setupUncheckedText(text);
	if (last_text === this.unchecked_text) {
        return false;
    }
	if (!block) {
        this.start();
    }
	return true;
};

/**
 * Изменяет цвет текста включенного состояния
 * Возвращает true, если изменение произошло
 
 * @method setCheckedTextColor
 *
 * @param {String || null} color - Цвет текста включенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Boolean
*/
DKTools_CheckBox_Base.prototype.setCheckedTextColor = function(color, block) {
	if (this.checked_text_color === color) {
        return false;
    }
	var last_color = this.checked_text_color;
	this.setupCheckedTextColor(color);
	if (last_color === this.checked_text_color) {
        return false;
    }
	if (!block) {
        this.updateCheckBox();
    }
	return true;
};

/**
 * Изменяет цвет текста выключенного состояния
 * Возвращает true, если изменение произошло
 
 * @method setUncheckedTextColor
 *
 * @param {String || null} color - Цвет текста выключенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Boolean
*/
DKTools_CheckBox_Base.prototype.setUncheckedTextColor = function(color, block) {
	if (this.unchecked_text_color === color) {
        return false;
    }
	var last_color = this.unchecked_text_color;
	this.setupUncheckedTextColor(color);
	if (last_color === this.unchecked_text_color) {
        return false;
    }
	if (!block) {
        this.updateCheckBox();
    }
	return true;
};

/**
 * Изменяет шрифт текста включенного состояния
 * Возвращает true, если изменение произошло
 
 * @method setCheckedFont
 *
 * @param {Array || null} font - Шрифт текста включенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
*/
DKTools_CheckBox_Base.prototype.setCheckedFont = function(font, block) {
	if (this.checked_font == font) return false;
	font = font || this.standardFont();
	if (this.checked_font[0] === font[0] && this.checked_font[1] === font[1] && this.checked_font[2] === font[2]) {
        return false;
    }
	this.setupCheckedFont(font);
    if (this.checked_font[0] === font[0] && this.checked_font[1] === font[1] && this.checked_font[2] === font[2]) {
        return false;
    }
	if (!block) {
        this.start();
    }
	return true;
};

/**
 * Изменяет шрифт текста выключенного состояния
 * Возвращает true, если изменение произошло
 
 * @method setUncheckedFont
 *
 * @param {Array || null} font - Шрифт текста выключенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
*/
DKTools_CheckBox_Base.prototype.setUncheckedFont = function(font, block) {
	if (this.unchecked_font == font) {
        return false;
    }
	font = font || this.standardFont();
	if (this.unchecked_font[0] === font[0] && this.unchecked_font[1] === font[1] && this.unchecked_font[2] === font[2]) {
        return false;
    }
	this.setupUncheckedFont(font);
    if (this.unchecked_font[0] === font[0] && this.unchecked_font[1] === font[1] && this.unchecked_font[2] === font[2]) {
        return false;
    }
	if (!block) {
        this.start();
    }
	return true;
};

/**
 * Изменяет выравнивание текста включенного состояния
 * Возвращает true, если изменение произошло
 
 * @method setCheckedAlign
 *
 * @param {String || null} align - Выравнивание текста включенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Boolean
*/
DKTools_CheckBox_Base.prototype.setCheckedAlign = function(align, block) {
	if (this.checked_align === align) {
        return false;
    }
	var last_align = this.checked_align;
	this.setupCheckedAlign(align);
	if (last_align === this.checked_align) {
        return false;
    }
	if (!block) {
        this.updateCheckBox();
    }
	return true;
};

/**
 * Изменяет выравнивание текста выключенного состояния
 * Возвращает true, если изменение произошло
 
 * @method setUncheckedAlign
 *
 * @param {String || null} align - Выравнивание текста выключенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Boolean
*/
DKTools_CheckBox_Base.prototype.setUncheckedAlign = function(align, block) {
	if (this.unchecked_align === align) {
        return false;
    }
	var last_align = this.unchecked_align;
	this.setupUncheckedAlign(align);
	if (last_align === this.unchecked_align) {
        return false;
    }
	if (!block) {
        this.updateCheckBox();
    }
	return true;
};

/**
 * Изменяет графику включенного состояния
 * Возвращает true, если изменение произошло
 
 * @method setCheckedGraphic
 *
 * @param {String || null} graphic - Графика включенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Boolean
*/
DKTools_CheckBox_Base.prototype.setCheckedGraphic = function(graphic, block) {
	if (this.checked_graphic === graphic) {
        return false;
    }
	var last_graphic = this.checked_graphic;
	this.setupCheckedGraphic(graphic);
	if (last_graphic === this.checked_graphic) {
        return false;
    }
	if (!block) {
        this.updateCheckBox();
    }
	return true;
};

/**
 * Изменяет графику выключенного состояния
 * Возвращает true, если изменение произошло
 
 * @method setUncheckedGraphic
 *
 * @param {String || null} graphic - Графика выключенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Boolean
*/
DKTools_CheckBox_Base.prototype.setUncheckedGraphic = function(graphic, block) {
	if (this.unchecked_graphic === graphic) {
        return false;
    }
	var last_graphic = this.unchecked_graphic;
	this.setupUncheckedGraphic(graphic);
	if (last_graphic === this.unchecked_graphic) {
        return false;
    }
	if (!block) {
        this.updateCheckBox();
    }
	return true;
};

/** Изменить текст
 * Изменяет графику включенного и выключенного состояния
 * Возвращает количество измененных параметров
 
 * @method setGraphic
 *
 * @param {String || null} checked_graphic - Графика включенного состояния
 * @param {String || null} unchecked_graphic - Графика выключенного состояния
 * @param {Boolean || null} block_start - Блокировка вызова функции updateCheckBox
 *
 * @return Number
*/
DKTools_CheckBox_Base.prototype.setGraphic = function(checked_graphic, unchecked_graphic, block_start) {
    var changed = 0;
    var block = true;
    if (this.setCheckedGraphic(checked_graphic, block)) {
        changed++;
    }
    if (this.setUncheckedGraphic(unchecked_graphic, block)) {
        changed++;
    }
    if (changed && !block_start) {
        this.updateCheckBox();
    }
    return changed;
};

DKTools_CheckBox_Base.prototype.setGraphicLoadListener = function(method) {
    this.graphic_load_listener = method;
};

// other methods

/**
 * Запускает работу спрайта

 * @method start
*/
DKTools_CheckBox_Base.prototype.start = function(checked, activate) {
	this.checkSize();
	DKTools_Sprite_Button.prototype.start.call(this, activate);
    if (checked) {
        this.check();
    }
};

/**
 * Возвращает минимальную ширину спрайта
 * Returns the minimum width of the sprite

 * @method minWidth
 * @return Number
*/
DKTools_CheckBox_Base.prototype.minWidth = function() {
	var length1 = this.textWidth(this.checked_text || this.standardCheckedText());
	var length2 = this.textWidth(this.unchecked_text || this.standardUncheckedText());
	return Math.max(length1, length2);
};

/**
 * Возвращает минимальную высоту спрайта
 * Returns the minimum height of the sprite

 * @method minHeight
 * @return Number
*/
DKTools_CheckBox_Base.prototype.minHeight = function() {
	return 36;
};

/** Изменить текст
 * Если не установлена графика, то создает Bitmap спрайта шириной bitmap_width и высотой bitmap_height
 * Если графика установлена, то обновляем графику
 
 * @method createBitmap
*/
DKTools_CheckBox_Base.prototype.createBitmap = function() {
	this.checkGraphic() ? this.updateGraphic() : DKTools_Sprite_Button.prototype.createBitmap.call(this);
};

/**
 * Удаляет графику
 
 * @method removeGraphic
*/
DKTools_CheckBox_Base.prototype.removeGraphic = function() {
	this.setupGraphic();
	this.removeBitmap();
	this.start();
};

/**
 * Проверяет есть ли графика
 
 * @method checkGraphic
 * @return Boolean
*/
DKTools_CheckBox_Base.prototype.checkGraphic = function() {
	return this.checked_graphic && this.unchecked_graphic;
};

/**
 * Обновляет графику
 
 * @method updateGraphic
*/
DKTools_CheckBox_Base.prototype.updateGraphic = function() {
	if (this.checkGraphic()) {
        var folder = this.standardGraphicFolder();
        var filename = (this.isChecked() ? this.checked_graphic : this.unchecked_graphic);
        this.loadBitmap(folder, filename, this.graphic_load_listener);
    }
};

/**
 * Обновляет Bitmap спрайта
 
 * @method updateBitmap
*/
DKTools_CheckBox_Base.prototype.updateBitmap = function() {
	if (this.checkGraphic()) {
        return;
    }
	DKTools_Sprite_Button.prototype.updateBitmap.call(this);
    if (!this.bitmap) {
        return;
    }
    this.updateText();
};

/**
 * Обновляет шрифт текста
 
 * @method updateFont
*/
DKTools_CheckBox_Base.prototype.updateFont = function() {
	var font = (this.isChecked() ? this.checked_font : this.unchecked_font);
	this.bitmap.fontFace = font[0];
	this.bitmap.fontItalic = font[1];
	this.bitmap.fontSize = font[2];
};

/**
 * Обновляет цвет текста
 
 * @method updateTextColor
*/
DKTools_CheckBox_Base.prototype.updateTextColor = function() {
    var color = (this.isChecked() ? this.checked_text_color : this.unchecked_text_color);
	this.bitmap.textColor = color;
};

/**
 * Обновляет отображаемый текст
 
 * @method updateText
*/
DKTools_CheckBox_Base.prototype.updateText = function() {
	var text = (this.isChecked() ? this.checked_text : this.unchecked_text);
	var align = (this.isChecked() ? this.checked_align : this.unchecked_align);
	this.drawText(text, align);
};

/**
 * Обновляет элемент
 
 * @method updateCheckBox
*/
DKTools_CheckBox_Base.prototype.updateCheckBox = function() {
	this.checkGraphic() ? this.updateGraphic() : this.updateBitmap();
};

/** Изменить текст
 * Проверяет включен элемент или нет
 * Возвращает true, если включен
 
 * @method isChecked
 * @return Boolean
*/
DKTools_CheckBox_Base.prototype.isChecked = function() {
	return this.checked;
};

/** Изменить текст
 * Переключает элемент из включенного состояния в выключенное и обратно
 
 * @method switch
*/
DKTools_CheckBox_Base.prototype.switch = function() {
    this.setChecked(!this.isChecked());
};

/** Изменить текст
 * Включает элемент
 
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
 
 * @method uncheck
*/
DKTools_CheckBox_Base.prototype.uncheck = function() {
	if (!this.isChecked()) {
        return;
    }
	this.switch();
};

/**
 * Вызов обработчика нажатия
 
 * @method callClickHandler
*/
DKTools_CheckBox_Base.prototype.callClickHandler = function() {
	this.switch();
	if (this.hasClickHandler()) {
        this._clickHandler(this.isChecked(), this.id);
    }
};





//===========================================================================
// DK Tools Check Box
//===========================================================================

/**
 * @class DKTools_CheckBox
 * @constructor
 * @param {Number || null} x - Координата X (The x coordinate for the upper-left corner)
 * @param {Number || null} y - Координата Y (The y coordinate for the upper-left corner)
 * @param {Number || null} width - Ширина Bitmap (The width of the Bitmap)
 * @param {Number || null} height - Высота Bitmap (The height of the Bitmap)
 */
function DKTools_CheckBox() {
    this.initialize.apply(this, arguments);
}

DKTools_CheckBox.prototype = Object.create(DKTools_Container.prototype);
DKTools_CheckBox.prototype.constructor = DKTools_Container;

// setup methods

/** Изменить текст
 * Устанавливает включен или выключен переключатель

 * @method setupChecked
 * @param {Boolean || null} checked - Включен или выключен переключатель
 */
DKTools_CheckBox.prototype.setupChecked = function(checked) {
    this.base_sprite.setupChecked(checked);
};

/**
 * Устанавливает текст включенного состояния

 * @method setupCheckedText
 * @param {String || null} text - Текст включенного состояния
 */
DKTools_CheckBox.prototype.setupCheckedText = function(text) {
    this.base_sprite.setupCheckedText(text);
};

/**
 * Устанавливает текст выключенного состояния

 * @method setupUncheckedText
 * @param {String || null} text - Текст выключенного состояния
 */
DKTools_CheckBox.prototype.setupUncheckedText = function(text) {
    this.base_sprite.setupUncheckedText(text);
};

/**
 * Устанавливает цвет текста включенного состояния

 * @method setupCheckedTextColor
 * @param {String || null} color - Цвет текста включенного состояния
 */
DKTools_CheckBox.prototype.setupCheckedTextColor = function(color) {
    this.base_sprite.setupCheckedTextColor(color);
};

/**
 * Устанавливает цвет текста выключенного состояния

 * @method setupUncheckedTextColor
 * @param {String || null} color - Цвет текста выключенного состояния
 */
DKTools_CheckBox.prototype.setupUncheckedTextColor = function(color) {
    this.base_sprite.setupUncheckedTextColor(color);
};

/**
 * Устанавливает шрифт текста включенного состояния

 * @method setupCheckedFont
 * @param {Array || null} font - Шрифт текста включенного состояния
 */
DKTools_CheckBox.prototype.setupCheckedFont = function(font) {
    this.base_sprite.setupCheckedFont(font);
};

/**
 * Устанавливает шрифт текста выключенного состояния

 * @method setupUncheckedFont
 * @param {Array || null} font - Шрифт текста выключенного состояния
 */
DKTools_CheckBox.prototype.setupUncheckedFont = function(font) {
    this.base_sprite.setupUncheckedFont(font);
};

/**
 * Устанавливает выравнивание текста включенного состояния

 * @method setupCheckedAlign
 * @param {String || null} align - Выравнивание текста включенного состояния
 */
DKTools_CheckBox.prototype.setupCheckedAlign = function(align) {
    this.base_sprite.setupCheckedAlign(align);
};

/**
 * Устанавливает выравнивание текста выключенного состояния

 * @method setupUncheckedAlign
 * @param {String || null} align - Выравнивание текста выключенного состояния
 */
DKTools_CheckBox.prototype.setupUncheckedAlign = function(align) {
    this.base_sprite.setupUncheckedAlign(align);
};

/**
 * Устанавливает графику включенного состояния

 * @method setupCheckedGraphic
 * @param {String || null} graphic - Графика включенного состояния
 */
DKTools_CheckBox.prototype.setupCheckedGraphic = function(graphic) {
    this.base_sprite.setupCheckedGraphic(graphic);
};

/**
 * Устанавливает графику выключенного состояния

 * @method setupUncheckedGraphic
 * @param {String || null} graphic - Графика выключенного состояния
 */
DKTools_CheckBox.prototype.setupUncheckedGraphic = function(graphic) {
    this.base_sprite.setupUncheckedGraphic(graphic);
};

/**
 * Устанавливает графику для включенного и выключенного состояний

 * @method setupGraphic
 *
 * @param {String || null} checked_graphic - Графика включенного состояния
 * @param {String || null} unchecked_graphic - Графика выключенного состояния
 */
DKTools_CheckBox.prototype.setupGraphic = function(checked_graphic, unchecked_graphic) {
    this.base_sprite.setupGraphic(checked_graphic, unchecked_graphic);
};

// set methods

/** Изменить текст
 * Изменяет включен или выключен переключатель
 * Возвращает true, если изменение произошло

 * @method setChecked
 *
 * @param {Boolean || null} checked - Включен или выключен переключатель
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Boolean
 */
DKTools_CheckBox.prototype.setChecked = function(checked, block) {
    return this.base_sprite.setChecked(checked, block);
};

/**
 * Изменяет текст включенного состояния
 * Возвращает true, если изменение произошло

 * @method setCheckedText
 *
 * @param {String || null} text - Текст включенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
 */
DKTools_CheckBox.prototype.setCheckedText = function(text, block) {
    return this.base_sprite.setCheckedText(text, block);
};

/**
 * Изменяет текст выключенного состояния
 * Возвращает true, если изменение произошло

 * @method setUncheckedText
 *
 * @param {String || null} text - Текст выключенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
 */
DKTools_CheckBox.prototype.setUncheckedText = function(text, block) {
    return this.base_sprite.setUncheckedText(text, block);
};

/**
 * Изменяет цвет текста включенного состояния
 * Возвращает true, если изменение произошло

 * @method setCheckedTextColor
 *
 * @param {String || null} color - Цвет текста включенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Boolean
 */
DKTools_CheckBox.prototype.setCheckedTextColor = function(color, block) {
    return this.base_sprite.setCheckedTextColor(color, block);
};

/**
 * Изменяет цвет текста выключенного состояния
 * Возвращает true, если изменение произошло

 * @method setUncheckedTextColor
 *
 * @param {String || null} color - Цвет текста выключенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Boolean
 */
DKTools_CheckBox.prototype.setUncheckedTextColor = function(color, block) {
    return this.base_sprite.setUncheckedTextColor(color, block);
};

/**
 * Изменяет шрифт текста включенного состояния
 * Возвращает true, если изменение произошло

 * @method setCheckedFont
 *
 * @param {Array || null} font - Шрифт текста включенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
 */
DKTools_CheckBox.prototype.setCheckedFont = function(font, block) {
    return this.base_sprite.setCheckedFont(font, block);
};

/**
 * Изменяет шрифт текста выключенного состояния
 * Возвращает true, если изменение произошло

 * @method setUncheckedFont
 *
 * @param {Array || null} font - Шрифт текста выключенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
 */
DKTools_CheckBox.prototype.setUncheckedFont = function(font, block) {
    return this.base_sprite.setUncheckedFont(font, block);
};

/**
 * Изменяет выравнивание текста включенного состояния
 * Возвращает true, если изменение произошло

 * @method setCheckedAlign
 *
 * @param {String || null} align - Выравнивание текста включенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Boolean
 */
DKTools_CheckBox.prototype.setCheckedAlign = function(align, block) {
    return this.base_sprite.setCheckedAlign(align, block);
};

/**
 * Изменяет выравнивание текста выключенного состояния
 * Возвращает true, если изменение произошло

 * @method setUncheckedAlign
 *
 * @param {String || null} align - Выравнивание текста выключенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Boolean
 */
DKTools_CheckBox.prototype.setUncheckedAlign = function(align, block) {
    return this.base_sprite.setUncheckedAlign(align, block);
};

/**
 * Изменяет графику включенного состояния
 * Возвращает true, если изменение произошло

 * @method setCheckedGraphic
 *
 * @param {String || null} graphic - Графика включенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Boolean
 */
DKTools_CheckBox.prototype.setCheckedGraphic = function(graphic, block) {
    return this.base_sprite.setCheckedGraphic(graphic, block);
};

/**
 * Изменяет графику выключенного состояния
 * Возвращает true, если изменение произошло

 * @method setUncheckedGraphic
 *
 * @param {String || null} graphic - Графика выключенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Boolean
 */
DKTools_CheckBox.prototype.setUncheckedGraphic = function(graphic, block) {
    return this.base_sprite.setUncheckedGraphic(graphic, block);
};

/** Изменить текст
 * Изменяет графику включенного и выключенного состояния
 * Возвращает количество измененных параметров

 * @method setGraphic
 *
 * @param {String || null} checked_graphic - Графика включенного состояния
 * @param {String || null} unchecked_graphic - Графика выключенного состояния
 * @param {Boolean || null} block_start - Блокировка вызова функции updateCheckBox
 *
 * @return Number
 */
DKTools_CheckBox.prototype.setGraphic = function(checked_graphic, unchecked_graphic, block_start) {
    return this.base_sprite.setGraphic(checked_graphic, unchecked_graphic, block);
};

DKTools_CheckBox.prototype.setGraphicLoadListener = function(method) {
    this.base_sprite.setGraphicLoadListener(method);
};

DKTools_CheckBox.prototype.setClickHandler = function(method) {
    this.base_sprite.setClickHandler(method);
};

// other methods

/**
 * Создает базовый спрайт

 * @method createBaseSprite
 */
DKTools_CheckBox.prototype.createBaseSprite = function(object) {
    this.base_sprite = new DKTools_CheckBox_Base(object);
};

/**
 * Активирует спрайт

 * @method activate
 */
DKTools_CheckBox.prototype.activate = function() {
    this.base_sprite.setupActive(true);
};

/**
 * Деактивирует спрайт

 * @method deactivate
 */
DKTools_CheckBox.prototype.deactivate = function() {
    this.base_sprite.setupActive(false);
};

/**
 * Удаляет графику

 * @method removeGraphic
 */
DKTools_CheckBox.prototype.removeGraphic = function() {
    this.base_sprite.removeGraphic();
};

/** Изменить текст
 * Проверяет включен элемент или нет
 * Возвращает true, если включен

 * @method isChecked
 * @return Boolean
 */
DKTools_CheckBox.prototype.isChecked = function() {
    return this.base_sprite.isChecked();
};

/** Изменить текст
 * Переключает элемент из включенного состояния в выключенное и обратно

 * @method switch
 */
DKTools_CheckBox.prototype.switch = function() {
    this.base_sprite.switch();
};

/** Изменить текст
 * Включает элемент

 * @method check
 */
DKTools_CheckBox.prototype.check = function() {
    this.base_sprite.check();
};

/** Изменить текст
 * Выключает элемент

 * @method uncheck
 */
DKTools_CheckBox.prototype.uncheck = function() {
    this.base_sprite.uncheck();
};





//===========================================================================
// NOT READY
//===========================================================================
// DK Tools Radio Button Base
//===========================================================================

/**
 * @class DKTools_Radio_Button_Base
 * @constructor
 * @param {Number || Object || null} object - Координата X (The x coordinate for the upper-left corner)
 * @param {Number || null} y - Координата Y (The y coordinate for the upper-left corner)
*/
function DKTools_Radio_Button_Base() {
	this.initialize.apply(this, arguments);
}

DKTools_Radio_Button_Base.prototype = Object.create(DKTools_Container_Base.prototype);
DKTools_Radio_Button_Base.prototype.constructor = DKTools_Container_Base;

DKToolsUtils.mixin(DKTools_Radio_Button_Base.prototype, DKTools_CheckBox_Base.prototype);
DKToolsUtils.mixin(DKTools_Radio_Button_Base.prototype, DKTools_Container_Base.prototype);

// standard methods

/**
 * Возвращает стандартный номер выбранной кнопки

 * @method standardIndex
 * @return Number
 */
DKTools_Radio_Button_Base.prototype.standardIndex = function() {
    return 0;
};

// setup methods

/** Изменить текст
 * Устанавливает все параметры спрайта

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
    DKTools_CheckBox_Base.prototype.setupAll.call(this, object);
	DKTools_Container_Base.prototype.setupAll.call(this, object);
    this.setupIndex(object.index);
};

/**
 * Устанавливает номер выбранной кнопки

 * @method setupIndex
 * @param {Number || null} index - Номер выбранной кнопки
*/
DKTools_Radio_Button_Base.prototype.setupIndex = function(index) {
	this.index = (index == null ? this.standardIndex() : index);
};

// set methods

/**
 * Изменяет все параметры спрайта

 * @method setAll
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} block_start - Блокировка вызова функции start
 *
 * @property {Number || null} index - Номер выбранной кнопки
 *
 * @see other object properties: DKTools_CheckBox_Base.prototype.setAll
 * @see other object properties: DKTools_Container_Base.prototype.setAll
 *
 * @return Number
*/
DKTools_Radio_Button_Base.prototype.setAll = function(object, block_start) {
    object = object || {};
	var block = true;
    var changed = DKTools_CheckBox_Base.prototype.setAll.call(this, object, block);
    changed += DKTools_Container_Base.prototype.setAll.call(this, object, block);
    this.activateSetAllMode();
    if (this.setIndex(object.index)) {
        changed++;
    }
	if (changed && !block_start) {
        this.start();
    }
    this.deactivateSetAllMode();
	return changed;
};

/**
 * Изменяет номер выбранной кнопки

 * @method setIndex
 *
 * @param {Number || null} index - Номер выбранной кнопки
 * @return Boolean
 */
DKTools_Radio_Button_Base.prototype.setIndex = function(index) {
	if (this.index === index) {
        return false;
    }
	var last_index = this.index;
    this.select(index);
    return last_index !== this.index;
};

DKTools_Radio_Button_Base.prototype.setForElements = function(element_func, func, param, block) {
    if (this.isSetAllMode()) {
        return DKTools_CheckBox_Base.prototype[element_func].call(this, param, true);
    }
    var changed = 0;
    var callback = function(element) {
        if (element[element_func](param)) {
            changed++;
        }
    }.bind(this);
    this.iterateElements(callback);
    if (changed) {
        this[func](param);
        if (!block) {
            this.start();
        }
    }
    return changed;
};

/**
 * Изменяет текст включенного состояния
 * Возвращает true, если изменение произошло

 * @method setCheckedText
 *
 * @param {String || null} text - Текст включенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
 */
DKTools_Radio_Button_Base.prototype.setCheckedText = function(text, block) {
    return this.setForElements('setCheckedText', 'setupCheckedText', text, block);
};

/**
 * Изменяет текст выключенного состояния
 * Возвращает true, если изменение произошло

 * @method setUncheckedText
 *
 * @param {String || null} text - Текст выключенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
 */
DKTools_Radio_Button_Base.prototype.setUncheckedText = function(text, block) {
    return this.setForElements('setUncheckedText', 'setupUncheckedText', text, block);
};

/**
 * Изменяет цвет текста включенного состояния
 * Возвращает true, если изменение произошло

 * @method setCheckedTextColor
 *
 * @param {String || null} color - Цвет текста включенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Boolean
 */
DKTools_Radio_Button_Base.prototype.setCheckedTextColor = function(color, block) {
    block = (block == null ? true : block);
    return this.setForElements('setCheckedTextColor', 'setupCheckedTextColor', color, block);
};

/**
 * Изменяет цвет текста выключенного состояния
 * Возвращает true, если изменение произошло

 * @method setUncheckedTextColor
 *
 * @param {String || null} color - Цвет текста выключенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Boolean
 */
DKTools_Radio_Button_Base.prototype.setUncheckedTextColor = function(color, block) {
    block = (block == null ? true : block);
    return this.setForElements('setUncheckedTextColor', 'setupUncheckedTextColor', color, block);
};

/**
 * Изменяет шрифт текста включенного состояния
 * Возвращает true, если изменение произошло

 * @method setCheckedFont
 *
 * @param {Array || null} font - Шрифт текста включенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
 */
DKTools_Radio_Button_Base.prototype.setCheckedFont = function(font, block) {
    return this.setForElements('setCheckedFont', 'setupCheckedFont', font, block);
};

/**
 * Изменяет шрифт текста выключенного состояния
 * Возвращает true, если изменение произошло

 * @method setUncheckedFont
 *
 * @param {Array || null} font - Шрифт текста выключенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
 */
DKTools_Radio_Button_Base.prototype.setUncheckedFont = function(font, block) {
    return this.setForElements('setUncheckedFont', 'setupUncheckedFont', font, block);
};

/**
 * Изменяет выравнивание текста включенного состояния
 * Возвращает true, если изменение произошло

 * @method setCheckedAlign
 *
 * @param {String || null} align - Выравнивание текста включенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Boolean
 */
DKTools_Radio_Button_Base.prototype.setCheckedAlign = function(align, block) {
    block = (block == null ? true : block);
    return this.setForElements('setCheckedAlign', 'setupCheckedAlign', align, block);
};

/**
 * Изменяет выравнивание текста выключенного состояния
 * Возвращает true, если изменение произошло

 * @method setUncheckedAlign
 *
 * @param {String || null} align - Выравнивание текста выключенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Boolean
 */
DKTools_Radio_Button_Base.prototype.setUncheckedAlign = function(align, block) {
    block = (block == null ? true : block);
    return this.setForElements('setUncheckedAlign', 'setupUncheckedAlign', align, block);
};

/**
 * Изменяет графику включенного состояния
 * Возвращает true, если изменение произошло

 * @method setCheckedGraphic
 *
 * @param {String || null} graphic - Графика включенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Boolean
 */
DKTools_Radio_Button_Base.prototype.setCheckedGraphic = function(graphic, block) {
    block = (block == null ? true : block);
    return this.setForElements('setCheckedGraphic', 'setupCheckedFont', graphic, block);
};

/**
 * Изменяет графику выключенного состояния
 * Возвращает true, если изменение произошло

 * @method setUncheckedGraphic
 *
 * @param {String || null} graphic - Графика выключенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Boolean
 */
DKTools_Radio_Button_Base.prototype.setUncheckedGraphic = function(graphic, block) {
    block = (block == null ? true : block);
    return this.setForElements('setUncheckedGraphic', 'setupUncheckedFont', graphic, block);
};

/** Изменить текст
 * Изменяет графику включенного и выключенного состояния
 * Возвращает количество измененных параметров

 * @method setGraphic
 *
 * @param {String || null} checked_graphic - Графика включенного состояния
 * @param {String || null} unchecked_graphic - Графика выключенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Number
 */
DKTools_Radio_Button_Base.prototype.setGraphic = function(checked_graphic, unchecked_graphic, block) {
	return this.setCheckedGraphic(checked_graphic, block) + this.setUncheckedGraphic(unchecked_graphic, block);
};

DKTools_Radio_Button_Base.prototype.setElementTextHandler = function(method) {
    this.element_text_handler = method;
};

// other methods

/**
 * Запускает работу спрайта
 *
 * @method start
 */
DKTools_Radio_Button_Base.prototype.start = function() {
    this.checkRowsAndCols();
    if (this.isEmpty()) {
        this.createElements();
    }
    this.updateElementsId();
    this.updateElementsClickHandler();
    DKTools_Container_Base.prototype.start.call(this);
};

/**
 * Возвращает минимальное количество элементов
 * Используется для проверки рядов и столбцов
 *
 * @method minElements
 *
 * @return Number
 */
DKTools_Radio_Button_Base.prototype.minElements = function() {
    return this.isEmpty() ? 2 : DKTools_Container_Base.prototype.minElements.call(this);
};

/**
 * Создает кнопки
 
 * @method createElements
*/
DKTools_Radio_Button_Base.prototype.createElements = function() {
    var elements = [];
    var id = 0;
    var max_rows = this.maxRows();
    var max_cols = this.maxCols();
    for(var i = 0; i < max_rows; i++) {
        for(var j = 0; j < max_cols; j++) {
            var element = this.createElement(id);
            elements.push(element);
            id++;
        }
    }
    this.setupElements(elements);
};

/**
 * Создает одну кнопку
 
 * @method createElement
 *
 * @param {Number} id - ID кнопки
 *
 * @return DKTools_CheckBox
*/
DKTools_Radio_Button_Base.prototype.createElement = function(id) {
	var checked = (id === this.selectedIndex());
    var text = this.elementText(id);
    var object = {
        base_sprite: {
            checked: checked,
            checked_text: this.checked_text,
            unchecked_text: this.unchecked_text,
            checked_text_color: this.checked_text_color,
            unchecked_text_color: this.unchecked_text_color,
            checked_font: this.checked_font,
            unchecked_font: this.unchecked_font,
            checked_align: this.checked_align,
            unchecked_align: this.unchecked_align,
            checked_graphic: this.checked_graphic,
            unchecked_graphic: this.unchecked_graphic
        }
    };
    var element = new DKTools_CheckBox(object);
    element.setupText(text);
    element.start();
	return element;
};

DKTools_Radio_Button_Base.prototype.elementText = function(id) {
    if (this.element_text_handler) {
        return this.element_text_handler(id);
    }
    return String(id);
};

/**
 * Обновляет ID кнопок

 * @method updateElementsId
 */
DKTools_Radio_Button_Base.prototype.updateElementsId = function() {
    var id = 0;
    var callback = function(element) {
        element.base_sprite.setupId(id++);
    }.bind(this);
    this.iterateElements(callback);
};

/**
 * Обновляет обработчик нажатия кнопок

 * @method updateElementsClickHandler
 */
DKTools_Radio_Button_Base.prototype.updateElementsClickHandler = function() {
    var callback = function(element) {
        element.setClickHandler(this.elementClickHandler.bind(this));
    }.bind(this);
    this.iterateElements(callback);
};

DKTools_Radio_Button_Base.prototype.elementClickHandler = function(checked, id) {
	if (!checked) {
        return this.element(id).check();
    }
	this.select(id);
	this.callClickHandler();
};

/**
 * Удаляет графику

 * @method removeGraphic
 */
DKTools_Radio_Button_Base.prototype.removeGraphic = function() {
    this.setGraphic();
};

/**
 * Активирует все кнопки

 * @method activate
 * @param {Boolean || null} start - Вызов функции start контейнера
 */
DKTools_Radio_Button_Base.prototype.activate = function(start) {
    this.activateAllElements(start);
};

/**
 * Деактивирует все кнопки

 * @method deactivate
 * @param {Boolean || null} start - Вызов функции start контейнера
 */
DKTools_Radio_Button_Base.prototype.deactivate = function(start) {
    this.deactivateAllElements(start);
};

/**
 * Возвращает true, если на спрайт можно нажимать

 * @method isSpriteButton
 * @return Boolean
 */
DKTools_Radio_Button_Base.prototype.isSpriteButton = function() {
    return true;
};

/**
 * Возвращает номер выбранной кнопки
 
 * @method selectedIndex
 * @return Number
*/
DKTools_Radio_Button_Base.prototype.selectedIndex = function() {
	return this.index;
};

/**
 * Возвращает выбранную кнопку
 
 * @method selected
 * @return DKTools_CheckBox
*/
DKTools_Radio_Button_Base.prototype.selected = function() {
	return this.element(this.selectedIndex());
};

/**
 * Выбирает предыдущую кнопку
 
 * @method prev
*/
DKTools_Radio_Button_Base.prototype.prev = function() {
	if (this.isEmpty()) {
        return;
    }
	var id = this.index - 1;
	if (id < 0) {
        id = this.length - 1;
    }
	this.select(id);
};

/**
 * Выбирает следующую кнопку
 
 * @method next
*/
DKTools_Radio_Button_Base.prototype.next = function() {
	if (this.isEmpty()) {
        return;
    }
	this.select((this.index + 1) % this.length);
};

/**
 * Выбирает кнопку по ID
 
 * @method select
 * @param {Number} id - ID кнопки
*/
DKTools_Radio_Button_Base.prototype.select = function(id) {
    if (this.isEmpty()) {
        return;
    }
	if (id >= this.length || id < 0 || id === this.selectedIndex()) {
        return;
    }
	this.selected().uncheck();
	this.setupIndex(id);
	this.selected().check();
};

/**
 * Вызывает обработчик нажатия спрайта

 * @method callClickHandler
 */
DKTools_Radio_Button_Base.prototype.callClickHandler = function() {
	if (this.hasClickHandler()) {
        this._clickHandler(this.selectedIndex(), this.id);
    }
};





//===========================================================================
// DK Tools Radio Button
//===========================================================================

/**
 * @class DKTools_Radio_Button
 * @constructor
 * @param {Number || null} x - Координата X (The x coordinate for the upper-left corner)
 * @param {Number || null} y - Координата Y (The y coordinate for the upper-left corner)
 * @param {Number || null} width - Ширина Bitmap (The width of the Bitmap)
 * @param {Number || null} height - Высота Bitmap (The height of the Bitmap)
 */
function DKTools_Radio_Button() {
    this.initialize.apply(this, arguments);
}

DKTools_Radio_Button.prototype = Object.create(DKTools_Container.prototype);
DKTools_Radio_Button.prototype.constructor = DKTools_Container;

// setup methods



// set methods

/**
 * Изменяет текст включенного состояния
 * Возвращает true, если изменение произошло

 * @method setCheckedText
 *
 * @param {String || null} text - Текст включенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
 */
DKTools_Radio_Button.prototype.setCheckedText = function(text, block) {
    return this.base_sprite.setCheckedText(text, block);
};

/**
 * Изменяет текст выключенного состояния
 * Возвращает true, если изменение произошло

 * @method setUncheckedText
 *
 * @param {String || null} text - Текст выключенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
 */
DKTools_Radio_Button.prototype.setUncheckedText = function(text, block) {
    return this.base_sprite.setUncheckedText(text, block);
};

/**
 * Изменяет цвет текста включенного состояния
 * Возвращает true, если изменение произошло

 * @method setCheckedTextColor
 *
 * @param {String || null} color - Цвет текста включенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Boolean
 */
DKTools_Radio_Button.prototype.setCheckedTextColor = function(color, block) {
    return this.base_sprite.setCheckedTextColor(color, block);
};

/**
 * Изменяет цвет текста выключенного состояния
 * Возвращает true, если изменение произошло

 * @method setUncheckedTextColor
 *
 * @param {String || null} color - Цвет текста выключенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Boolean
 */
DKTools_Radio_Button.prototype.setUncheckedTextColor = function(color, block) {
    return this.base_sprite.setUncheckedTextColor(color, block);
};

/**
 * Изменяет шрифт текста включенного состояния
 * Возвращает true, если изменение произошло

 * @method setCheckedFont
 *
 * @param {Array || null} font - Шрифт текста включенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
 */
DKTools_Radio_Button.prototype.setCheckedFont = function(font, block) {
    return this.base_sprite.setCheckedFont(font, block);
};

/**
 * Изменяет шрифт текста выключенного состояния
 * Возвращает true, если изменение произошло

 * @method setUncheckedFont
 *
 * @param {Array || null} font - Шрифт текста выключенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
 */
DKTools_Radio_Button.prototype.setUncheckedFont = function(font, block) {
    return this.base_sprite.setUncheckedFont(font, block);
};

/**
 * Изменяет выравнивание текста включенного состояния
 * Возвращает true, если изменение произошло

 * @method setCheckedAlign
 *
 * @param {String || null} align - Выравнивание текста включенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Boolean
 */
DKTools_Radio_Button.prototype.setCheckedAlign = function(align, block) {
    return this.base_sprite.setCheckedAlign(align, block);
};

/**
 * Изменяет выравнивание текста выключенного состояния
 * Возвращает true, если изменение произошло

 * @method setUncheckedAlign
 *
 * @param {String || null} align - Выравнивание текста выключенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Boolean
 */
DKTools_Radio_Button.prototype.setUncheckedAlign = function(align, block) {
    return this.base_sprite.setUncheckedAlign(align, block);
};

/**
 * Изменяет графику включенного состояния
 * Возвращает true, если изменение произошло

 * @method setCheckedGraphic
 *
 * @param {String || null} graphic - Графика включенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Boolean
 */
DKTools_Radio_Button.prototype.setCheckedGraphic = function(graphic, block) {
    return this.base_sprite.setCheckedGraphic(graphic, block);
};

/**
 * Изменяет графику выключенного состояния
 * Возвращает true, если изменение произошло

 * @method setUncheckedGraphic
 *
 * @param {String || null} graphic - Графика выключенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Boolean
 */
DKTools_Radio_Button.prototype.setUncheckedGraphic = function(graphic, block) {
    return this.base_sprite.setUncheckedGraphic(graphic, block);
};

/** Изменить текст
 * Изменяет графику включенного и выключенного состояния
 * Возвращает количество измененных параметров

 * @method setGraphic
 *
 * @param {String || null} checked_graphic - Графика включенного состояния
 * @param {String || null} unchecked_graphic - Графика выключенного состояния
 * @param {Boolean || null} block - Блокировка вызова функции updateCheckBox
 *
 * @return Number
 */
DKTools_Radio_Button.prototype.setGraphic = function(checked_graphic, unchecked_graphic, block) {
    return this.base_sprite.setGraphic(checked_graphic, unchecked_graphic, block);
};

// other methods

/**
 * Создает базовый спрайт

 * @method createBaseSprite
 */
DKTools_Radio_Button.prototype.createBaseSprite = function(object) {
    this.base_sprite = new DKTools_Radio_Button_Base(object);
};





//===========================================================================
// NOT READY
//===========================================================================
// DK Tools Clicker Base
//===========================================================================

function DKTools_Clicker_Base() {
    this.initialize.apply(this, arguments);
}

DKTools_Clicker_Base.prototype = Object.create(DKTools_Sprite_Button.prototype);
DKTools_Clicker_Base.prototype.constructor = DKTools_Clicker_Base;

// properties

Object.defineProperty(DKTools_Clicker_Base.prototype, 'length', {
    get: function() {
        return this.allElements().length;
    },
    configurable: true
});

// initialize method

DKTools_Clicker_Base.prototype.initialize = function(object, y) {
    this.clearElements();
    DKTools_Sprite_Button.prototype.initialize.call(this, object, y);
};

// standard methods

/**
 * Возвращает стандартный список элементов

 * @method standardElements
 * @return Array
 */
DKTools_Clicker_Base.prototype.standardElements = DKTools_Container_Base.prototype.standardElements;

DKTools_Clicker_Base.prototype.standardIndex = function() {
    return 0;
};

// setup methods

DKTools_Clicker_Base.prototype.setupAll = function(object) {
    object = object || {};
    DKTools_Sprite_Button.prototype.setupAll.call(this, object);
    this.setupElements(object.bitmaps);
    this.setupIndex(object.index);
};

/**
 * Устанавливает элементы

 * @method setupElements
 * @param {Array || null} elements - Массив с элементами
 */
DKTools_Clicker_Base.prototype.setupElements = DKTools_Container_Base.prototype.setupElements;

/**
 * Добавляет элемент, блокируя вызов функции start контейнера

 * @method setupElement
 * @param {Sprite || null} element - Элемент
 */
DKTools_Clicker_Base.prototype.setupElement = DKTools_Container_Base.prototype.setupElement;

DKTools_Clicker_Base.prototype.setupIndex = function(index) {
    this.index = (index == null ? this.standardIndex() : index);
};

// set methods

DKTools_Clicker_Base.prototype.setAll = function(object, block_start) {
    object = object || {};
    var block = true;
    var changed = DKTools_Sprite_Button.prototype.setAll.call(this, object, block);
    this.activateSetAllMode();
    if (this.setElements(object.bitmaps, block)) {
        changed++;
    }
    if (this.setIndex(object.index)) {
        changed++;
    }
    if (changed && !block_start) {
        this.start();
    }
    this.deactivateSetAllMode();
    return changed;
};

/**
 * Изменяет список элементов

 * @method setElements
 *
 * @param {Array || null} elements - Массив элементов
 * @param {Boolean || null} block - Блокировка вызова функции start
 *
 * @return Boolean
 */
DKTools_Clicker_Base.prototype.setElements = DKTools_Container_Base.prototype.setElements;

DKTools_Clicker_Base.prototype.setIndex = function(index) {
    if (this.index === index) {
        return false;
    }
    var last_index = this.index;
    this.select(index);
    return last_index !== this.index;
};

// other methods

DKTools_Clicker_Base.prototype.start = function(activate) {
    this.checkElements();
    DKTools_Sprite_Button.prototype.start.call(this, activate);
};

DKTools_Clicker_Base.prototype.createBitmap = function() {
    this.setupBitmap(this.selected());
};

DKTools_Clicker_Base.prototype.updateBitmap = function() {
};

DKTools_Clicker_Base.prototype.checkElements = function() {
    var elements = this.allElements();
    for(var i = 0; i < elements.length; i++) {
        var bitmap = elements[i];
        bitmap = this.bitmapFromObject(bitmap);
        elements[i] = bitmap;
    }
};

/**
 * Возвращает true, если спрайт не содержит элементов

 * @method isEmpty
 * @return Boolean
 */
DKTools_Clicker_Base.prototype.isEmpty = DKTools_Container_Base.prototype.isEmpty;

/**
 * Очищает список элементов

 * @method clearElements
 */
DKTools_Clicker_Base.prototype.clearElements = DKTools_Container_Base.prototype.clearElements;

/**
 * Возвращает все элементы

 * @method allElements
 * @return Array
 */
DKTools_Clicker_Base.prototype.allElements = DKTools_Container_Base.prototype.allElements;

/**
 * Возвращает элемент по его ID

 * @method element
 *
 * @param {Number} id - ID элемента
 *
 * @return Sprite || null
 */
DKTools_Clicker_Base.prototype.element = DKTools_Container_Base.prototype.element;

/**
 * Добавляет элемент

 * @method addElement
 *
 * @param {Sprite || Array || null} object - Элемент или Массив элементов
 * @param {Boolean || null} block - Блокировка вызова функции start
 */
DKTools_Clicker_Base.prototype.addElement = DKTools_Container_Base.prototype.addElement;

/**
 * Удаляет элемент

 * @method removeElement
 *
 * @param {Sprite || Number || null} object - Элемент или номер элемента
 * @param {Boolean || null} block - Блокировка вызова функции start
 */
DKTools_Clicker_Base.prototype.removeElement = DKTools_Container_Base.prototype.removeElement;

/**
 * Возвращает номер показываемого элемента

 * @method selectedIndex
 * @return Number
 */
DKTools_Clicker_Base.prototype.selectedIndex = DKTools_Radio_Button_Base.prototype.selectedIndex;

/**
 * Возвращает показываемый сейчас элемент

 * @method selected
 * @return Sprite || null
 */
DKTools_Clicker_Base.prototype.selected = DKTools_Radio_Button_Base.prototype.selected;

/**
 * Показывает предыдущий элемент

 * @method prev
 */
DKTools_Clicker_Base.prototype.prev = DKTools_Radio_Button_Base.prototype.prev;

/**
 * Показывает следующий элемент

 * @method next
 */
DKTools_Clicker_Base.prototype.next = DKTools_Radio_Button_Base.prototype.next;

DKTools_Clicker_Base.prototype.select = function(id) {
    if (this.isEmpty()) {
        return;
    }
    if (id >= this.length || id < 0 || id === this.selectedIndex()) {
        return;
    }
    this.setupIndex(id);
    this.start();
};

DKTools_Clicker_Base.prototype.callClickHandler = function() {
    if (!this.hasClickHandler()) {
        return;
    }
    this.next();
    this._clickHandler(this.selectedIndex(), this.id);
};





//===========================================================================
// NOT READY
//===========================================================================
// DK Tools Clicker
//===========================================================================

/**
 * @class DKTools_Clicker
 * @constructor
 * @param {Number || null} object - Координата X (The x coordinate for the upper-left corner)
 * @param {Number || null} y - Координата Y (The y coordinate for the upper-left corner)
 */
function DKTools_Clicker() {
    this.initialize.apply(this, arguments);
}

DKTools_Clicker.prototype = Object.create(DKTools_Container.prototype);
DKTools_Clicker.prototype.constructor = DKTools_Container;

// setup methods

// set methods

// other methods

/**
 * Создает базовый спрайт

 * @method createBaseSprite
 */
DKTools_Clicker.prototype.createBaseSprite = function(object) {
    this.base_sprite = new DKTools_Clicker_Base(object);
};





//===========================================================================
// NOT READY
//===========================================================================
// DK Tools Color Picker Base
//===========================================================================

/**
 * @class DKTools_ColorPicker_Base
 *
 * @constructor
 *
 * @param {Number} object - Координата X (The x coordinate for the upper-left corner)
 * @param {Number} y - Координата Y (The y coordinate for the upper-left corner)
 * @param {Number} width - Ширина Bitmap (The width of the Bitmap)
 * @param {Number} height - Высота Bitmap (The height of the Bitmap)
*/
function DKTools_ColorPicker_Base() {
	this.initialize.apply(this, arguments);
}

DKTools_ColorPicker_Base.prototype = Object.create(DKTools_Sprite_Button.prototype);
DKTools_ColorPicker_Base.prototype.constructor = DKTools_Sprite_Button;

// initialize methods

DKTools_ColorPicker_Base.prototype.initialize = function(object, y, width, height) {
	this.setupStandardScales();
    DKTools_Sprite_Button.prototype.initialize.call(this, object, y, width, height);
};

// standard methods

DKTools_ColorPicker_Base.prototype.standardGraphicScale = function() {
    return new Point(1, 1);
};

DKTools_ColorPicker_Base.prototype.standardWindowskinScale = function() {
    return new Point(2, 2);
};

/**
 * Возвращает стандартную графику
 
 * @method standardGraphic
 * @return null
*/
DKTools_ColorPicker_Base.prototype.standardGraphic = function() {
	return null;
};

// setup methods

/**
 * Устанавливает все параметры спрайта

 * @method setupAll
 *
 * @param {Object || null} object - Объект типа {}
 *
 * @property {String || null} graphic - Название файла графики
 * @property {Point || null} scale - Масштабирование
 *
 * @see other object properties: DKTools_Sprite_Button.prototype.setupAll
*/
DKTools_ColorPicker_Base.prototype.setupAll = function(object) {
    object = object || {};
	DKTools_Sprite_Button.prototype.setupAll.call(this, object);
	this.setupGraphic(object.graphic);
	this.setupScale(object.scale);
};

DKTools_ColorPicker_Base.prototype.setupGraphic = function(graphic) {
	this.graphic = graphic || this.standardGraphic();
};

DKTools_ColorPicker_Base.prototype.setupStandardScales = function() {
	this.standard_graphic_scale = this.standardGraphicScale();
	this.standard_windowskin_scale = this.standardWindowskinScale();
};

DKTools_ColorPicker_Base.prototype.setupScale = function(scale) {
    //this.scale.set(2, 2);
    this.scale.x = 2;
    this.scale.y = 2;
	//this.scale = scale || (this.graphic ? this.standard_graphic_scale : this.standard_windowskin_scale);
};

// set methods

/**
 * Изменяет все параметры спрайта
 * Возвращает количество измененных параметров

 * @method setAll
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} block_start - Блокировка вызова функции start
 *
 * @property {String || null} graphic - Название файла графики
 * @property {Point || null} scale - Масштабирование
 *
 * @see other object properties: DKTools_Sprite_Button.prototype.setAll
 *
 * @return Number
*/
DKTools_ColorPicker_Base.prototype.setAll = function(object, block_start) {
	var block = true;
    var changed = DKTools_Sprite_Button.prototype.setAll.call(this, object, block);
	if (this.setGraphic(object.graphic, block)) {
        changed++;
    }
	if (this.setScale(object.scale)) {
        changed++;
    }
	if (changed && !block_start) {
        this.start();
    }
	return changed;
};

DKTools_ColorPicker_Base.prototype.setGraphic = function(graphic, block) {
	if (this.graphic === graphic) {
        return false;
    }
	var last_graphic = this.graphic;
	this.setupGraphic(graphic);
	if (last_graphic === this.graphic) {
        return false;
    }
	if (!block) {
        this.start();
    }
	return true;
};

DKTools_ColorPicker_Base.prototype.setScale = function(scale) {
    //if (this.scale == scale) {
    //    return false;
    //}
	//var last_scale = this.scale ? this.scale.clone() : null;
	//this.setupScale(scale);
    //if (last_scale == this.scale) {
    //    return false;
    //}
	return true;
};

// other methods

/**
 * Запускает работу спрайта

 * @method start
 * @param {Boolean || null} activate - Активность спрайта
*/
DKTools_ColorPicker_Base.prototype.start = function (activate) {
	this.clearColor();
	DKTools_Sprite_Button.prototype.start.call(this, activate);
};

DKTools_ColorPicker_Base.prototype.clearColor = function() {
	this.color = null;
};

DKTools_ColorPicker_Base.prototype.createBitmap = function() {
	if (this.graphic) {
        this.loadBitmap(this.standardGraphicFolder(), this.graphic); // добавить listener
    } else {
		this.loadWindowskin();
		this.setFrame(96, 144, 96, 48);
		//this.setScale();
	}
    this.setScale();
};

DKTools_ColorPicker_Base.prototype.callClickHandler = function() {
	if (this._clickHandler == null) {
        return;
    }
	var dx = this._frame.x;
	var dy = this._frame.y;
	var x = this.canvasToLocalX(TouchInput.x) / this.scale.x + dx;
	var y = this.canvasToLocalY(TouchInput.y) / this.scale.y + dy;
	this.color = this.bitmap.getPixel(x, y);
	this._clickHandler(this.color, this.id);
};





//===========================================================================
// DK Tools Color Picker
//===========================================================================

/**
 * @class DKTools_ColorPicker
 * @constructor
 * @param {Number || null} x - Координата X (The x coordinate for the upper-left corner)
 * @param {Number || null} y - Координата Y (The y coordinate for the upper-left corner)
 * @param {Number || null} width - Ширина Bitmap (The width of the Bitmap)
 * @param {Number || null} height - Высота Bitmap (The height of the Bitmap)
 */
function DKTools_ColorPicker() {
    this.initialize.apply(this, arguments);
}

DKTools_ColorPicker.prototype = Object.create(DKTools_Container.prototype);
DKTools_ColorPicker.prototype.constructor = DKTools_Container;

// other methods

/**
 * Создает базовый спрайт

 * @method createBaseSprite
 */
DKTools_ColorPicker.prototype.createBaseSprite = function(object) {
    this.base_sprite = new DKTools_ColorPicker_Base(object);
};





//===========================================================================
// НЕ ГОТОВ
//===========================================================================
// DK Tools Slider
//===========================================================================

function DKTools_Slider_Base() {
	this.initialize.apply(this, arguments);
}

DKTools_Slider_Base.prototype = Object.create(DKTools_Sprite_Button.prototype);
DKTools_Slider_Base.prototype.constructor = DKTools_Sprite_Button;

// standard methods

/**
 * Возвращает стандартное значение активности спрайта

 * @method standardActive
 * @return Boolean
*/
DKTools_Slider_Base.prototype.standardActive = function() {
	return false;
};

DKTools_Slider_Base.prototype.standardHandleHotOpacity = function() {
	return 150;
};

DKTools_Slider_Base.prototype.standardMin = function() {
	return 0;
};

DKTools_Slider_Base.prototype.standardMax = function() {
	return 100;
};

DKTools_Slider_Base.prototype.standardHandleAlign = function() {
	return 'center';
};

DKTools_Slider_Base.prototype.standardBackgroundColor = function() {
	return DKToolsSettings.Slider.slider_color;
};

DKTools_Slider_Base.prototype.standardHandleBackgroundColor = function() {
	return DKToolsSettings.Slider.handle_color;
};

DKTools_Slider_Base.prototype.standardTextColor = function() {
	return DKToolsSettings.Slider.slider_text_color;
};

DKTools_Slider_Base.prototype.standardHandleTextColor = function() {
	return DKToolsSettings.Slider.handle_text_color;
};

DKTools_Slider_Base.prototype.standardFontName = function() {
	return DKToolsSettings.Slider.slider_font_name;
};

DKTools_Slider_Base.prototype.standardFontItalic = function() {
	return DKToolsSettings.Slider.slider_font_italic == 'true';
};

DKTools_Slider_Base.prototype.standardFontSize = function() {
	return DKToolsSettings.Slider.slider_font_size;
};

DKTools_Slider_Base.prototype.standardHandleFontName = function() {
	return DKToolsSettings.Slider.handle_font_name;
};

DKTools_Slider_Base.prototype.standardHandleFontItalic = function() {
	return DKToolsSettings.Slider.handle_font_italic == 'true';
};

DKTools_Slider_Base.prototype.standardHandleFontSize = function() {
	return DKToolsSettings.Slider.handle_font_size;
};

DKTools_Slider_Base.prototype.standardHandleFont = function() {
	return [this.standardHandleFontName(), this.standardHandleFontItalic(), this.standardHandleFontSize()];
};

// setup methods

/**
 * Устанавливает все параметры спрайта

 * @method setupAll
 *
 * @param {Object || null} object - Объект типа {}
 *
 * @property {Number || null} min - Минимальное значение слайдера
 * @property {Number || null} max - Максимальное значение слайдера
 * @property {Number || null} value - Текущее значение слайдера
 * @property {String || null} handle_background_color - Цвет ручки слайдера
 * @property {String || null} handle_text_color - Цвет текста ручки слайдера
 * @property {Array || null} handle_font - Шрифт ручки слайдера
 *
 * @see other object properties: DKTools_Sprite_Button.prototype.setupAll
*/
DKTools_Slider_Base.prototype.setupAll = function(object) {
	object = object || {};
	DKTools_Sprite_Button.prototype.setupAll.call(this, object);
	this.setupMin(object.min);
	this.setupMax(object.max);
	this.setupValue(object.value);
	this.setupHandleBackgroundColor(object.handle_color);
	this.setupHandleTextColor(object.handle_text_color);
	this.setupHandleFont(object.handle_font);
};

/**
 * Устанавливает минимальное значение слайдера

 * @method setupMin
 * @param {Number || null} min - Минимальное значение слайдера
*/
DKTools_Slider_Base.prototype.setupMin = function(min) {
	this.min = min || this.standardMin();
	this.min_width = this.textWidth(this.min);
};

/**
 * Устанавливает максимальное значение слайдера

 * @method setupMax
 * @param {Number || null} max - Максимальное значение слайдера
*/
DKTools_Slider_Base.prototype.setupMax = function(max) {
	this.max = (max ? Math.max(this.min, max) : this.standardMax());
	this.max_width = this.textWidth(this.max);
};

/**
 * Устанавливает текущее значение слайдера

 * @method setupValue
 * @param {Number || null} value - Текущее значение слайдера
*/
DKTools_Slider_Base.prototype.setupValue = function(value) {
	this.value = (value ? value.clamp(this.min, this.max) : this.min);
};

/**
 * Устанавливает цвет ручки слайдера

 * @method setupHandleColor
 * @param {String || null} color - Цвет ручки слайдера
*/
DKTools_Slider_Base.prototype.setupHandleBackgroundColor = function(color) {
	this.handle_background_color = color || this.standardHandleBackgroundColor();
};

/**
 * Устанавливает цвет текста ручки слайдера

 * @method setupHandleTextColor
 * @param {String || null} color - Цвет текста ручки слайдера
*/
DKTools_Slider_Base.prototype.setupHandleTextColor = function(color) {
	this.handle_text_color = color || this.standardHandleTextColor();
};

/**
 * Устанавливает шрифт текста ручки слайдера

 * @method setupHandleFont
 * @param {Array || null} font - Шрифт текста ручки слайдера
*/
DKTools_Slider_Base.prototype.setupHandleFont = function(font) {
	var standard_font = this.standardHandleFont();
	font = font || [];
	this.handle_font = [];
	for(var i = 0; i < 3; i++)
		this.handle_font[i] = (font[i] == null ? standard_font[i] : font[i]);
};

/**
 * Устанавливает значение одного процента в пикселях

 * @method setupPercent
*/
DKTools_Slider_Base.prototype.setupPercent = function() {
	this.percent = this.sliderWidthForCalculate() / (this.max - this.min);
};

// set methods

/**
 * Изменяет все параметры спрайта
 * Возвращает количество измененных параметров

 * @method setAll
 *
 * @param {Object || null} object - Объект типа {}
 * @param {Boolean || null} block_start - Блокировка вызова функции start
 *
 * @property {Number || null} min - Минимальное значение слайдера
 * @property {Number || null} max - Максимальное значение слайдера
 * @property {Number || null} value - Текущее значение слайдера
 * @property {String || null} handle_background_color - Цвет ручки слайдера
 * @property {String || null} handle_text_color - Цвет текста ручки слайдера
 * @property {Array || null} handle_font - Шрифт ручки слайдера
 *
 * @see other object properties: DKTools_Sprite_Button.prototype.setAll
 *
 * @return Number
*/
DKTools_Slider_Base.prototype.setAll = function(object, block_start) {
	object = object || {};
	var block = true;
	var changed = DKTools_Sprite_Button.prototype.setAll.call(this, object, block);
	if (this.setMin(object.min, block)) {
        changed++;
    }
	if (this.setMax(object.max, block)) {
        changed++;
    }
	if (this.setValue(object.value, block)) {
        changed++;
    }
	if (this.setHandleBackgroundColor(object.handle_background_color, block)) changed++;
	if (this.setHandleTextColor(object.handle_text_color, block)) changed++;
	if (this.setHandleFont(object.handle_font, block)) changed++;
	if (changed && !block_start) {
        this.start();
    }
	return changed;
};

DKTools_Slider_Base.prototype.setMin = function(min, block) {
	if (this.min === min) return false;
	var last_min = this.min;
	this.setupMin(min);
	if (last_min === this.min) return false;
	if (!block) this.start();
	return true;
};

DKTools_Slider_Base.prototype.setMax = function(max, block) {
	if (this.max === max) return false;
	var last_max = this.max;
	this.setupMax(max);
	if (last_max === this.max) return false;
	if (!block) this.start();
	return true;
};

DKTools_Slider_Base.prototype.setValue = function(value, block) {
	if (this.value === value) return false;
	var last_value = this.value;
	this.setupValue(value);
	if (last_value === this.value) return false;
	this.checkHandleValue();
	this.updateHandle();
	return true;
};

DKTools_Slider_Base.prototype.setHandleBackgroundColor = function(color, block) {
	if (this.handle_background_color === color) return false;
	var last_color = this.handle_background_color;
	this.setupHandleBackgroundColor(color);
	if (last_color === this.handle_background_color) return false;
	if (!block) this.createHandle();
	return true;
};

DKTools_Slider_Base.prototype.setHandleTextColor = function(color, block) {
	if (this.handle_text_color === color) return false;
	var last_color = this.handle_text_color;
	this.setupHandleTextColor = color;
	if (last_color === this.handle_text_color) return false;
	this.createHandle();
	return true;
};

DKTools_Slider_Base.prototype.setHandleFont = function(font, block) {
	if (this.handle_font === font) return false;
	font = font || this.standardHandleFont();
	if (this.handle_font[0] === font[0] && this.handle_font[1] === font[1] && this.handle_font[2] === font[2]) return false;
	this.setupHandleFont(font);
	if (this.handle_font[0] === font[0] && this.handle_font[1] === font[1] && this.handle_font[2] === font[2]) return false;
	if (!block) this.start();
	return true;
};

// other methods

/**
 * Запускает работу спрайта

 * @method start
*/
DKTools_Slider_Base.prototype.start = function(activate) {
	this.setupPercent();
	DKTools_Sprite_Button.prototype.start.call(this, activate);
	this.createHandle();
	this.updateValue();
	this.updateInputData();
};

/**
 * Возвращает минимальную ширину спрайта
 * Returns the minimum width of the sprite

 * @method minWidth
 * @return Number
*/
DKTools_Slider_Base.prototype.minWidth = function() {
	return 100;
};

/**
 * Возвращает минимальную высоту спрайта
 * Returns the minimum height of the sprite

 * @method minHeight
 * @return Number
*/
DKTools_Slider_Base.prototype.minHeight = function() {
	return 36;
};

/**
 * Возвращает X слайдера

 * @method sliderX
 * @return Number
*/
DKTools_Slider_Base.prototype.sliderX = function() {
	return this.min_width + this.standardPadding();
};

/**
 * Возвращает Y слайдера

 * @method sliderY
 * @return Number
*/
DKTools_Slider_Base.prototype.sliderY = function() {
	return 0;
};

/**
 * Возвращает ширину слайдера

 * @method sliderWidth
 * @return Number
*/
DKTools_Slider_Base.prototype.sliderWidth = function() {
	return this.bitmap_width - this.max_width - this.min_width - this.standardPadding() * 2;
};

/**
 * Возвращает ширину слайдера

 * @method sliderWidth
 * @return Number
*/
DKTools_Slider_Base.prototype.sliderHeight = function() {
	return this.bitmap_height;
};

/**
 * Возвращает ширину слайдера без ширины ручки

 * @method sliderWidthForCalculate
 * @return Number
*/
DKTools_Slider_Base.prototype.sliderWidthForCalculate = function() {
	return this.sliderWidth() - this.handleWidth();
};

/**
 * Возвращает X ручки

 * @method handleX
 * @return Number
 */
DKTools_Slider_Base.prototype.handleX = function() {
	return this.sliderX();
};

/**
 * Возвращает Y ручки

 * @method handleY
 * @return Number
*/
DKTools_Slider_Base.prototype.handleY = function() {
	return this.sliderY();
};

/**
 * Возвращает ширину ручки

 * @method handleWidth
 * @return Number
*/
DKTools_Slider_Base.prototype.handleWidth = function() {
	return this.max_width + this.standardPadding();
};

/**
 * Возвращает высоту ручки

 * @method handleHeight
 * @return Number
*/
DKTools_Slider_Base.prototype.handleHeight = function() {
	return this.bitmap_height;
};

/**
 * Создает ручку

 * @method createHandle
*/
DKTools_Slider_Base.prototype.createHandle = function() {
	this.removeHandle();
	this.handle = new DKTools_Sprite_Button(0, 0, this.handleWidth(), this.handleHeight());
	this.handle.setAll({
		text_color: this.handle_text_color,
		align: this.standardHandleAlign(),
		background_color: this.handle_background_color,
		font: this.handle_font
	});
	this.handle.setHotOpacity(this.standardHandleHotOpacity());
	this.updateHandle();
	this.addChild(this.handle);
};

/**
 * Удаляет ручку

 * @method removeHandle
*/
DKTools_Slider_Base.prototype.removeHandle = function() {
	if (this.handle == null) return;
	this.removeChild(this.handle);
	this.handle = null;
};

DKTools_Slider_Base.prototype.checkHandleX = function() {
	if (this.handle.x < this.handleX()) this.handle.x = this.handleX();
	if (this.handle.x > this.handleX() + this.sliderWidthForCalculate()) this.handle.x = this.handleX() + this.sliderWidthForCalculate();
};

DKTools_Slider_Base.prototype.checkHandleY = function() {
};

DKTools_Slider_Base.prototype.checkHandleValue = function() {
	if (this.value > this.max) this.value = this.max;
	if (this.value < this.min) this.value = this.min;
};

/**
 * Возвращает true, если Bitmap готов

 * @method isReady
 * @return Boolean
*/
DKTools_Slider_Base.prototype.isReady = function () {
	return DKTools_Sprite_Button.prototype.isReady.call(this) && (this.handle ? this.handle.isReady() : false);
};

DKTools_Slider_Base.prototype.updateBitmap = function() {
	DKTools_Sprite_Button.prototype.updateBitmap.call(this);
	if (!this.bitmap) return;
	this.updateText();
};

DKTools_Slider_Base.prototype.updateBackground = function() {
	this.fillRect(this.background_color, this.sliderX(), this.sliderY(), this.sliderWidth(), this.sliderHeight());
};

DKTools_Slider_Base.prototype.updateText = function() {
	this.drawText(this.min, 'left');
	this.drawText(this.max, 'right');
};

DKTools_Slider_Base.prototype.updateHandleX = function() {
	this.handle.x = this.handleX() + (this.value - this.min) * this.percent;
	this.checkHandleX();
};

DKTools_Slider_Base.prototype.updateHandleY = function() {
};

DKTools_Slider_Base.prototype.updateHandlePosition = function() {
	this.updateHandleX();
	this.updateHandleY();
};

DKTools_Slider_Base.prototype.updateHandle = function() {
	this.updateHandlePosition();
	this.handle.updateBitmap();
	this.handle.drawText(this.value);
};

DKTools_Slider_Base.prototype.updateValue = function() {
	var value = this.min + Math.floor((this.handle.x - this.handleX()) / this.percent);
	this.setValue(value);
};

DKTools_Slider_Base.prototype.update = function() {
	DKTools_Sprite_Button.prototype.update.call(this);
	if (!this.isButtonTouched()) return;
	if (this.touch_x === TouchInput.x) return;
	this.touch_x = TouchInput.x;
	this.callClickHandler();
};

DKTools_Slider_Base.prototype.prev = function() {
	this.setValue(this.getPrevValue());
};

DKTools_Slider_Base.prototype.next = function() {
	this.setValue(this.getNextValue());
};

DKTools_Slider_Base.prototype.getPrevValue = function() {
	var prev_value = this.value - 1;
	if (prev_value < this.min) return this.min;
	return prev_value;
};

DKTools_Slider_Base.prototype.getNextValue = function() {
	var next_value = this.value + 1;
	if (next_value > this.max) return this.max;
	return next_value;
};

DKTools_Slider_Base.prototype.callClickHandler = function() {
	if (!this.isActive() || TouchInput.isCancelled()) return;
	this.handle.x = this.canvasToLocalX(TouchInput.x) - this.handle.width / 2;
	this.checkHandleX();
	this.checkHandleY();
	this.updateValue();
	if (this._clickHandler) this._clickHandler(this.value, this.id);
};





//===========================================================================
// DK Tools Slider
//===========================================================================

/**
 * @class DKTools_Slider
 * @constructor
 * @param {Number || null} x - Координата X (The x coordinate for the upper-left corner)
 * @param {Number || null} y - Координата Y (The y coordinate for the upper-left corner)
 * @param {Number || null} width - Ширина Bitmap (The width of the Bitmap)
 * @param {Number || null} height - Высота Bitmap (The height of the Bitmap)
 */
function DKTools_Slider() {
    this.initialize.apply(this, arguments);
}

DKTools_Slider.prototype = Object.create(DKTools_Container.prototype);
DKTools_Slider.prototype.constructor = DKTools_Container;

// other methods

/**
 * Создает базовый спрайт

 * @method createBaseSprite
 */
DKTools_Slider.prototype.createBaseSprite = function(object) {
    this.base_sprite = new DKTools_Slider_Base(object);
};





//===========================================================================
// DK Tools Window Base
//===========================================================================

/**
 * @class DKTools_Window_Base
 * @constructor
 * @param {Number} x - Координата X (The x coordinate for the upper-left corner)
 * @param {Number} y - Координата Y (The y coordinate for the upper-left corner)
 * @param {Number} width - Ширина окна (The width of the window)
 * @param {Number} height - Высота окна (The height of the window)
*/
function DKTools_Window_Base() {
	this.initialize.apply(this, arguments);
}

DKTools_Window_Base.prototype = Object.create(Window_Base.prototype);
DKTools_Window_Base.prototype.constructor = DKTools_Window_Base;

DKTools_Window_Base.prototype.initialize = function(x, y, width, height) {
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
 
 * @method standardSpriteY
 * @return Number
*/
DKTools_Window_Base.prototype.standardSpriteX = function() {
	return this.standardPadding();
};

/**
 * Возвращает стандартное значение коодинаты Y для спрайта
 
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
 * @param {String || null} text_color - Цвет текста
 * @param {Array || null} font - Шрифт текста
 * @param {Array || null} opacity - Прозрачность окна
 * @param {Array || null} tone - Тон окна
 * @param {String || null} windowskin - Обложка окна
*/
DKTools_Window_Base.prototype.setupAll = function(text_color, font, opacity, tone, windowskin, paint_opacity) {
	this.setupTextColor(text_color);
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
//	this.align = align || this.standardAlign();
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
	this.text_color = color || this.standardTextColor();
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
 * @param {Boolean || null} block_start -
 * @param {String || null} text_color - Цвет текста
 * @param {Array || null} font - Шрифт текста
 * @param {Array || null} opacity - Прозрачность окна
 * @param {Array || null} tone - Тон окна
 * @param {String || null} windowskin - Обложка окна
 * @return Number
*/
DKTools_Window_Base.prototype.setAll = function(object, block_start) {
	object = object || {};
	var block = true;
	var changed = 0;
	if (this.setAlign(object.align, block)) changed++;
	if (this.setTextX(object.text_x, block)) changed++;
	if (this.setTextY(object.text_y, block)) changed++;
	if (this.setTextColor(object.text_color, block)) changed++;
	if (this.setFont(object.font, block)) changed++;
	if (this.setTone(object.tone, block)) changed++;
	if (this.setOpacity(object.opacity, block)) changed++;
	if (this.setPaintOpacity(object.paint_opacity, block)) changed++;
	if (this.setWindowskin(object.windowskin, block)) changed++;
	if (changed && !block_start) this.start();
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
	if (this.text_color === color) return false;
	var last_color = this.text_color;
	this.setupTextColor(color);
	if (last_color === this.text_color) return false;
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
	var last_opacity = this.paint_opacity;
	this.setupPaintOpacity(opacity);
	if (last_opacity === this.paint_opacity) return false;
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
	this.start_handler = method;
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
	var last_width = this.width;
	var last_height = this.height;
	width = (width ? width.clamp(this.minWidth(), this.maxWidth()) : Math.max(this.minWidth(), this.width));
	height = (height ? height.clamp(this.minHeight(), this.maxHeight()) : Math.max(this.minHeight(), this.height));
	this.move(this.x, this.y, width, height);
	if (last_width === this.width && last_height === this.height) return false;
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
	window.setupAll(this.text_color, this.window_font, this.window_opacity, this.window_tone, this.window_windowskin);
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
	var min_width = this.minWidth();
	var min_height = this.minHeight();
	var changed = 0;
	if (this.bitmap_width < min_width)
	{
		this.setupWidth(min_width);
		changed++;
	}
	if (this.bitmap_height < min_height)
	{
		this.setupHeight(min_height);
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
	this.start_listeners = [];
};

/**
 * Добавляет "слушателя" старта окна

 * @method addStartListener
 * @param {Function} listener - "Слушатель" старта окна
*/
DKTools_Window_Base.prototype.addStartListener = function(listener) {
	this.isStarted() ? listener(this.id) : this.start_listeners.push(listener);
};

/**
 * Вызывает "слушателей" старта окна

 * @method callStartListeners
*/
DKTools_Window_Base.prototype.callStartListeners = function() {
	if (!this.isStarted()) return;
	while(this.start_listeners.length > 0)
		this.start_listeners.shift()(this.id);
};

/**
 * Вызывает обработчик старта окна

 * @method callStartHandler
*/
DKTools_Window_Base.prototype.callStartHandler = function() {
	if (this.isStarted() && this.start_handler)	this.start_handler(this.id);
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
	this.contents.drawText(text, x || this.text_x || 0, y || this.text_y || 0, width || this.contentsWidth(), height || this.drawTextHeight(), align || this.align || 'left');
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

 * @method playAnimation
 */
DKTools_Window_Base.prototype.playAnimation = function() {
	this.update_animation = true;
};

/**
 * Останавливает анимацию

 * @method stopAnimation
 */
DKTools_Window_Base.prototype.stopAnimation = function() {
	this.update_animation = false;
};

/**
 * Возвращает true, если анимация обновляется

 * @method animationIsUpdated
 * @return Boolean
 */
DKTools_Window_Base.prototype.animationIsUpdated = function() {
	return this.update_animation;
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
	this.contents.textColor = this.text_color;
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
	if (this.update_animation && this.update_animation_handler) this.update_animation_handler(this.id);
};

DKTools_Window_Base.prototype.callOpenHandler = function() {
	if (this.open_handler) this.open_handler(this.id);
};

DKTools_Window_Base.prototype.callCloseHandler = function() {
	if (this.close_handler) this.close_handler(this.id);
};





//===========================================================================
// НЕ ГОТОВ
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
// НЕ ГОТОВ
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
DKTools_Window_Command.prototype.constructor = DKTools_Window_Command;

DKToolsUtils.mixin(DKTools_Window_Command.prototype, DKTools_Window_Base.prototype);

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
// НЕ ГОТОВ
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