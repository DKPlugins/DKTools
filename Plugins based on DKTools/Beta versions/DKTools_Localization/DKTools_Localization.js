/*
Title: Localization
Author: DK (Denis Kuznetsov) (https://vk.com/dk_plugins)
Site: http://dk-plugins.ru
Group in VK: http://vk.com/dkplugins
Version: 0.5 BETA
Release: 06.11.2016
First release: 28.08.2016
Supported languages: Russian, English
*/

/*ru
Название: Локализация
Автор: DK (Денис Кузнецов) (https://vk.com/dk_plugins)
Сайт: http://dk-plugins.ru
Группа ВК: http://vk.com/dkplugins
Версия: 0.5 BETA
Релиз: 06.11.2016
Первый релиз: 28.08.2016
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

/*ru Инструкция

 Настройки перевода
 Язык плагина: перевод

*/

DKLocalization.DKTools_Localization = {
    DKToolsImportedError: {
        ru: 'Отсутствует плагин "DKTools"! Плагин "DKTools_Localization" не будет работать!',
        en: 'No plugin "DKTools"! Plugin "DKTools_Localization" will not work!'
    },
    selectLanguage: {
        ru: 'Выберите язык',
        en: 'Select language'
    },
    gameTitle: {
        ru: '',
        en: ''
    },
    interfaceLanguage: {
        ru: 'Язык интерфейса',
        en: 'Interface language'
    },
    on: {
        ru: 'ВКЛ',
        en: 'ON'
    },
    off: {
        ru: 'ВЫКЛ',
        en: 'OFF'
    }
};

//===========================================================================
// End of the plugin settings
// Конец настройки плагина
//===========================================================================

/*:
 * @plugindesc v.0.5 BETA Localization of game
 * @author DK (Denis Kuznetsov)
 * @help

 ### Info about plugin ###
 Title: DKTools_Localization
 Author: DK (Denis Kuznetsov) (http://vk.com/dk_plugins)
 Site: http://dk-plugins.ru
 Group in VK: http://vk.com/dkplugins
 Version: 0.5 BETA
 Release: 06.11.2016
 First release: 28.08.2016
 Supported languages: Russian, English

 ### Requirement for plugin ###
 Availability of working plugin DKTools version 0.92 or above

 ### Warning ###
 Plugin contains the settings in the file

 Be careful with downloading plugins to the project folder
 Some plugins have settings in his file
 At update this settings can be overwritten

 ### Instruction ###
 For customizing text of the options window and custom title
 Open the "DKTools_Localization.js" file and change the settings in "Settings of the plugin" and "End of the plugin settings"

 In "img/system" folder should be the images of the flags available languages
 File names must conform of locales
 For example, for the default settings in folder should be images with names ru.png and en.png

 ### License and terms of use for plugin ###
 You can:
 -Free use the plugin for your commercial and non commercial projects.
 -Translate the plugin to other languages (please, inform, if you do this)

 You can't:
 -Delete or change any information about plugin (Title, authorship, contact information, version and release)
 -Change code of plugin out of border "Plugin settings" and "End of plugin settings" (if you found a bug contact me)

 * @param Settings of languages
 * @default ---------------------------------

 * @param Locales
 * @desc The available locales in the game separated by commas
 * @default ru, en

 * @param Languages
 * @desc The names of the available languages, separated by commas
 (must conform of the locale list above)
 * @default Русский, English

 * @param Settings of the select language
 * @default ---------------------------------

 * @param Use Custom Game Title
 * @desc Use the custom title of game for each language?
 (true or false)
 * @default false

 * @param Left Arrow Filename
 * @desc The filename of the left arrow
 Image in folder img/system/
 * @default leftArrow

 * @param Right Arrow Filename
 * @desc The filename of the right arrow
 Image in folder img/system/
 * @default rightArrow

 * @param Settings of OK sound
 * @default ---------------------------------

 * @param OK Filename
 * @desc The filename of the OK sound
 * @default Decision1

 * @param OK Volume
 * @desc Volume of the OK sound (0 - 100)
 * @default 100

 * @param OK Pitch
 * @desc Pitch of the OK sound (50 - 150)
 * @default 100

 * @param OK Pan
 * @desc Panorama of the OK sound (-100 - 100)
 * @default 0

 * @param Settings of cursor sound
 * @default ---------------------------------

 * @param Cursor Filename
 * @desc The filename of the cursor sound
 * @default Cursor2

 * @param Cursor Volume
 * @desc Volume of the cursor sound (0 - 100)
 * @default 100

 * @param Cursor Pitch
 * @desc Pitch of the cursor sound (50 - 150)
 * @default 100

 * @param Cursor Pan
 * @desc Panorama of the cursor sound (-100 - 100)
 * @default 0

 * @param Settings of cancel sound
 * @default ---------------------------------

 * @param Cancel Filename
 * @desc The filename of the cancel sound
 * @default Cancel2

 * @param Cancel Volume
 * @desc Volume of the cancel sound (0 - 100)
 * @default 100

 * @param Cancel Pitch
 * @desc Pitch of the cancel sound (50 - 150)
 * @default 100

 * @param Cancel Pan
 * @desc Panorama of the cancel sound (-100 - 100)
 * @default 0

 * @param Settings of Options Window
 * @default ---------------------------------

 * @param Options Window: Width
 * @desc Width of options window
 * @default 400

 * @param Options Window: Status Width
 * @desc Width of status text
 * @default 120

 * @param Options Window: Volume Offset
 * @desc The value of volume offset
 * @default 20

 * @param Settings of various fixes
 * @default ---------------------------------

 * @param Last Method Of Game Path
 * @desc Enable, if errors occur during the standard method!
 It can help... (true or false)
 * @default false

*/

/*:ru
 * @plugindesc v.0.5 BETA Локализация игры
 * @author DK (Денис Кузнецов)
 * @help

 ### Информация о плагине ###
 Название: DKTools_Localization
 Автор: DK (Денис Кузнецов) (https://vk.com/dk_plugins)
 Сайт: http://dk-plugins.ru
 Группа ВК: http://vk.com/dkplugins
 Версия: 0.5 BETA
 Релиз: 06.11.2016
 Первый релиз: 28.08.2016
 Поддерживаемые языки: Русский, Английский

 ### Требования к плагину ###
 Наличие включенного плагина DKTools версии 0.92 или выше

 ### Внимание ###
 Плагин содержит настройки перевода внутри файла

 Будьте внимательны при скачивании плагинов в папку проекта
 Некоторые плагины имеют настройки в самом файле
 При обновлении эти настройки могут быть перезаписаны

 ### Инструкция ###
 Для настройки текста окна настроек и кастомного заголовка игры
 Откройте "DKTools_Localization.js" файл и измените настройки внутри "Настройки плагина" и "Конец настройки плагина"

 В папке img/system должны находиться изображения флагов доступных языков
 Названия должны соответствовать настроенным локалям
 Например, для стандартных настроек должны быть файлы с именами ru.png и en.png

 ### Лицензия и правила использования плагина ###
 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)

 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)

 * @param Настройка языков
 * @default ---------------------------------

 * @param Locales
 * @desc Доступные локали в игре через запятую
 * @default ru, en

 * @param Languages
 * @desc Названия доступных языков через запятую (должны соответствовать списку локалей выше)
 * @default Русский, English

 * @param Настройка выбора языка
 * @default ---------------------------------

 * @param Use Custom Game Title
 * @desc Использовать для каждого языка свой заголовок игры ?
 (true - да, false - нет)
 * @default false

 * @param Left Arrow Filename
 * @desc Название графики стрелки влево
 Изображение в папке img/system/
 * @default leftArrow

 * @param Right Arrow Filename
 * @desc Название графики стрелки вправо
 Изображение в папке img/system/
 * @default rightArrow

 * @param Настройка звука ОК
 * @default ---------------------------------

 * @param OK Filename
 * @desc Название файла звука ОК
 * @default Decision1

 * @param OK Volume
 * @desc Громкость звука ОК (0 - 100)
 * @default 100

 * @param OK Pitch
 * @desc Темп звука ОК (50 - 150)
 * @default 100

 * @param OK Pan
 * @desc Панорама звука ОК (-100 - 100)
 * @default 0

 * @param Настройка звука Курсора
 * @default ---------------------------------

 * @param Cursor Filename
 * @desc Название файла звука курсора
 * @default Cursor2

 * @param Cursor Volume
 * @desc Громкость звука курсора (0 - 100)
 * @default 100

 * @param Cursor Pitch
 * @desc Темп звука курсора (50 - 150)
 * @default 100

 * @param Cursor Pan
 * @desc Панорама звука курсора (-100 - 100)
 * @default 0

 * @param Настройка звука Отмены
 * @default ---------------------------------

 * @param Cancel Filename
 * @desc Название файла звука отмены
 * @default Cancel2

 * @param Cancel Volume
 * @desc Громкость звука отмены (0 - 100)
 * @default 100

 * @param Cancel Pitch
 * @desc Темп звука отмены (50 - 150)
 * @default 100

 * @param Cancel Pan
 * @desc Панорама звука отмены (-100 - 100)
 * @default 0

 * @param Настройка окна опций
 * @default ---------------------------------

 * @param Options Window: Width
 * @desc Ширина окна настроек
 * @default 400

 * @param Options Window: Status Width
 * @desc Ширина текста статуса
 * @default 120

 * @param Options Window: Volume Offset
 * @desc Шаг изменения громкости
 * @default 20

 * @param Настройка различных фиксов
 * @default ---------------------------------

 * @param Last Method Of Game Path
 * @desc Включить, если возникают ошибки при стандартном методе!
 Может поможет... (true - да, false - нет)
 * @default false

*/

var Imported = Imported || {};
Imported.DKTools_Localization = true;

var DKVersion = DKVersion || {};
DKVersion.DKTools_Localization = 0.5;

var DKToolsVersion = DKToolsVersion || {};
DKToolsVersion.DKTools_Localization = 0.92;

var LocalizationParam = {};
LocalizationParam.param = PluginManager.parameters('DKTools_Localization');

if (!Imported.DKTools) {
    var locale = (window.navigator.language === 'ru' ? 'ru' : 'en');
    throw new Error(DKLocalization['DKTools_Localization']['DKToolsImportedError'][locale]);
}

LocalizationParam.locales = DKToolsUtils.splitString(LocalizationParam.param['Locales']);
LocalizationParam.languages = DKToolsUtils.splitString(LocalizationParam.param['Languages']);

LocalizationParam.selectLanguage = {};
LocalizationParam.selectLanguage.gameTitle = DKToolsUtils.toBoolean(LocalizationParam.param['Use Custom Game Title']);
LocalizationParam.selectLanguage.leftArrowFileName = LocalizationParam.param['Left Arrow Filename'];
LocalizationParam.selectLanguage.rightArrowFileName = LocalizationParam.param['Right Arrow Filename'];

LocalizationParam.selectLanguage.ok = {};
LocalizationParam.selectLanguage.ok.name = LocalizationParam.param['OK Filename'];
LocalizationParam.selectLanguage.ok.volume = Number(LocalizationParam.param['OK Volume']);
LocalizationParam.selectLanguage.ok.pitch = Number(LocalizationParam.param['OK Pitch']);
LocalizationParam.selectLanguage.ok.pan = Number(LocalizationParam.param['OK Pan']);

LocalizationParam.selectLanguage.cursor = {};
LocalizationParam.selectLanguage.cursor.name = LocalizationParam.param['Cursor Filename'];
LocalizationParam.selectLanguage.cursor.volume = Number(LocalizationParam.param['Cursor Volume']);
LocalizationParam.selectLanguage.cursor.pitch = Number(LocalizationParam.param['Cursor Pitch']);
LocalizationParam.selectLanguage.cursor.pan = Number(LocalizationParam.param['Cursor Pan']);

LocalizationParam.selectLanguage.cancel = {};
LocalizationParam.selectLanguage.cancel.name = LocalizationParam.param['Cancel Filename'];
LocalizationParam.selectLanguage.cancel.volume = Number(LocalizationParam.param['Cancel Volume']);
LocalizationParam.selectLanguage.cancel.pitch = Number(LocalizationParam.param['Cancel Pitch']);
LocalizationParam.selectLanguage.cancel.pan = Number(LocalizationParam.param['Cancel Pan']);

LocalizationParam.optionsWindow = {};
LocalizationParam.optionsWindow.width = Number(LocalizationParam.param['Options Window: Width']) || 400;
LocalizationParam.optionsWindow.statusWidth = Number(LocalizationParam.param['Options Window: Status Width']) || 120;
LocalizationParam.optionsWindow.volumeOffset = Number(LocalizationParam.param['Options Window: Volume Offset']) || 20;

LocalizationParam.fixes = {};
LocalizationParam.fixes.lastGamePath = DKToolsUtils.toBoolean(LocalizationParam.param['Last Method Of Game Path']);

//===========================================================================
// DK Localization Manager
//===========================================================================

DKLocalizationManager.standardGamePath = function() {
    if (LocalizationParam.fixes.lastGamePath) {
        var path = window.location.pathname.replace(/(\/www|)\/[^\/]*$/, '/');
        if (path.match(/^\/([A-Z]\:)/)) {
            path = path.slice(1);
        }
        return decodeURIComponent(path);
    } else {
        var path = require('path');
        var base = path.dirname(process.mainModule.filename);
        return path.join(base, '/');
    }
};

DKLocalizationManager.checkFilePath = function(path) {
    if (!path) {
        return false;
    }
    var fs = require('fs');
    var standardGamePath = this.standardGamePath();
    var filePath = standardGamePath + path;
    if (!fs.existsSync(filePath)) {
        filePath = standardGamePath + 'www/' + path;
    }
    return fs.existsSync(filePath);
};

DKLocalizationManager._checkConfigManager = function() {
    var path = 'save/config.rpgsave';
    if (!this.checkFilePath(path)) {
        ConfigManager.save();
    }
    ConfigManager.load();
};

DKLocalizationManager.DKTools_Localization = function(param) {
    var plugin = 'DKTools_Localization';
    return this.translation(plugin, param);
};

//===========================================================================
// Window
//===========================================================================

window.onload = function() {
    DKLocalizationManager._checkConfigManager();
    var sceneClass = Scene_Select_Language;
    if (Scene_Select_Language.languageSelected || LocalizationParam.locales.length === 1) {
        sceneClass = Scene_Boot;
    }
    SceneManager.run(sceneClass);
};

//===========================================================================
// Scene Boot
//===========================================================================

Scene_Boot.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    ConfigManager.load();
    DataManager.loadDatabase();
    this.loadSystemWindowImage();
};

//===========================================================================
// Data Manager
//===========================================================================

DataManager.loadDataFile = function(name, src) {
    var xhr = new XMLHttpRequest();
    var url = 'data/' + DKLocale + '/' + src;
    if (!DKLocalizationManager.checkFilePath(url)) {
        url = 'data/' + src;
    }
    xhr.open('GET', url);
    xhr.overrideMimeType('application/json');
    xhr.onload = function() {
        if (xhr.status < 400) {
            window[name] = JSON.parse(xhr.responseText);
            DataManager.onLoad(window[name]);
        }
    };
    xhr.onerror = function() {
        DataManager._errorUrl = DataManager._errorUrl || url;
    };
    window[name] = null;
    xhr.send();
};

//===========================================================================
// Config Manager
//===========================================================================

var Localization_ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function() {
    var config = Localization_ConfigManager_makeData.call(this);
    config.languageSelected = Scene_Select_Language.languageSelected;
    return config;
};

var Localization_ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
    Localization_ConfigManager_applyData.call(this, config);
    Scene_Select_Language.languageSelected = this.readFlag(config, 'languageSelected');
};

//===========================================================================
// Image Manager
//===========================================================================

var Localization_ImageManager_loadBitmap = ImageManager.loadBitmap;
ImageManager.loadBitmap = function(folder, filename, hue, smooth) {
    if (filename) {
        var path = folder + DKLocale + '/' + encodeURIComponent(filename) + '.png';
        if (DKLocalizationManager.checkFilePath(path)) {
            folder += DKLocale + '/';
        }
    }
    return Localization_ImageManager_loadBitmap.call(this, folder, filename, hue, smooth);
};

//===========================================================================
// Audio Manager
//===========================================================================

var Localization_AudioManager_createBuffer = AudioManager.createBuffer;
AudioManager.createBuffer = function(folder, name) {
    var ext = this.audioFileExt();
    var url = this._path + folder + '/' + DKLocale + '/' + encodeURIComponent(name) + ext;
    if (DKLocalizationManager.checkFilePath(url)) {
        folder += '/' + DKLocale;
    }
    return Localization_AudioManager_createBuffer.call(this, folder, name);
};

//===========================================================================
// Graphics
//===========================================================================

var Localization_Graphics_playVideo = Graphics.playVideo;
Graphics.playVideo = function(src) {
    var array = src.split('/');
    var newSrc = array[0] + '/' + DKLocale + '/' + array[1];
    if (DKLocalizationManager.checkFilePath(newSrc)) {
        src = newSrc;
    }
    Localization_Graphics_playVideo.call(this, src);
};

//===========================================================================
// Window Options
//===========================================================================

Window_Options.prototype.windowWidth = function() {
    return LocalizationParam.optionsWindow.width;
};

Window_Options.prototype.statusWidth = function() {
    return LocalizationParam.optionsWindow.statusWidth;
};

Window_Options.prototype.volumeOffset = function() {
    return LocalizationParam.optionsWindow.volumeOffset;
};

Window_Options.prototype.booleanStatusText = function(value) {
    return DKLocalizationManager.DKTools_Localization(value ? 'on' : 'off');
};

Window_Options.prototype.addLocaleOptions = function() {
    this.addCommand(DKLocalizationManager.DKTools_Localization('interfaceLanguage'), 'locale');
};

Window_Options.prototype.isLocaleSymbol = function(symbol) {
    return symbol === 'locale';
};

Window_Options.prototype.onLocaleOk = function() {
    AudioManager.stopAll();
    Scene_Select_Language.options = true;
    SceneManager.push(Scene_Select_Language);
};

var Localization_Window_Options_makeCommandList = Window_Options.prototype.makeCommandList;
Window_Options.prototype.makeCommandList = function() {
    if (SceneManager._previousClass !== Scene_Menu) {
        this.addLocaleOptions();
    }
    Localization_Window_Options_makeCommandList.call(this);
};

var Localization_Window_Options_statusText = Window_Options.prototype.statusText;
Window_Options.prototype.statusText = function(index) {
    var symbol = this.commandSymbol(index);
    var value = this.getConfigValue(symbol);
    if (this.isLocaleSymbol(symbol)) {
        return this.languageStatusText(value);
    }
    return Localization_Window_Options_statusText.call(this, index);
};

Window_Options.prototype.languageStatusText = function(locale) {
    var locales = LocalizationParam.locales;
    var languages = LocalizationParam.languages;
    var index = locales.indexOf(locale);
    return languages[index];
};

var Localization_Window_Options_processOk = Window_Options.prototype.processOk;
Window_Options.prototype.processOk = function() {
    var index = this.index();
    var symbol = this.commandSymbol(index);
    if (this.isLocaleSymbol(symbol)) {
        this.onLocaleOk();
    } else {
        return Localization_Window_Options_processOk.call(this);
    }
};

var Localization_Window_Options_cursorRight = Window_Options.prototype.cursorRight;
Window_Options.prototype.cursorRight = function(wrap) {
    var index = this.index();
    var symbol = this.commandSymbol(index);
    if (!this.isLocaleSymbol(symbol)) {
        Localization_Window_Options_cursorRight.call(this, wrap);
    }
};

var Localization_Window_Options_cursorLeft = Window_Options.prototype.cursorLeft;
Window_Options.prototype.cursorLeft = function(wrap) {
    var index = this.index();
    var symbol = this.commandSymbol(index);
    if (!this.isLocaleSymbol(symbol)) {
        Localization_Window_Options_cursorLeft.call(this, wrap);
    }
};

var Localization_Window_Options_getConfigValue = Window_Options.prototype.getConfigValue;
Window_Options.prototype.getConfigValue = function(symbol) {
    if (this.isLocaleSymbol(symbol)) {
        return DKLocale;
    } else {
        return Localization_Window_Options_getConfigValue.call(this, symbol);
    }
};

//===========================================================================
// Scene Select Language
//===========================================================================

function Scene_Select_Language() {
    this.initialize.apply(this, arguments);
}

Scene_Select_Language.prototype = Object.create(Scene_Base.prototype);
Scene_Select_Language.prototype.constructor = Scene_Select_Language;

Scene_Select_Language.languageSelected = false;
Scene_Select_Language.options = false;

Scene_Select_Language.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
    this._startDate = Date.now();
    if (!Scene_Select_Language.languageSelected) {
        DKLocalizationManager.setLocale(DKToolsParam.param['Plugin Language']);
    }
    this._initLocale = DKLocale;
    this.updateGameTitle();
};

Scene_Select_Language.prototype.create = function() {
    this.createMainContainer();
    this.createFlagContainer();
    this.createArrows();
    this.createFlag();
};

Scene_Select_Language.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    this.startFlagContainer();
    this.startMainContainer();
};

Scene_Select_Language.prototype.createMainContainer = function() {
    this._mainContainer = new DKTools_Text_Container();
    this._mainContainer.setupText(DKLocalizationManager.DKTools_Localization('selectLanguage'));
    this._mainContainer.setupPlacement('vertical');
    this.addChild(this._mainContainer);
};

Scene_Select_Language.prototype.createFlagContainer = function() {
    this._flagContainer = new DKTools_Container_Base();
};

Scene_Select_Language.prototype.createArrows = function() {
    this.createLeftArrow();
    this.createRightArrow();
};

Scene_Select_Language.prototype.createLeftArrow = function() {
    this._leftArrow = new DKTools_Sprite();
    this._leftArrow.setupColdOpacity(255);
    this._leftArrow.setupHotOpacity(125);
    this._leftArrow.setupGraphic(LocalizationParam.selectLanguage.leftArrowFileName);
    this._leftArrow.start();
    this._leftArrow.addEventHandler('click', this.onArrowClick.bind(this, 'left'));
};

Scene_Select_Language.prototype.createRightArrow = function() {
    this._rightArrow = new DKTools_Sprite();
    this._rightArrow.setupColdOpacity(255);
    this._rightArrow.setupHotOpacity(125);
    this._rightArrow.setupGraphic(LocalizationParam.selectLanguage.rightArrowFileName);
    this._rightArrow.start();
    this._rightArrow.addEventHandler('click', this.onArrowClick.bind(this, 'right'));
};

Scene_Select_Language.prototype.createFlag = function() {
    this._flagSprite = new DKTools_Sprite();
    this._flagSprite.setupColdOpacity(255);
    this._flagSprite.setupHotOpacity(125);
    this._flagSprite.setupGraphic(DKLocale);
    this._flagSprite.start();
    this._flagSprite.addEventHandler('click', this.onOkPressed.bind(this));
};

Scene_Select_Language.prototype.startFlagContainer = function() {
    var elements = [this._leftArrow, this._flagSprite, this._rightArrow];
    this._flagContainer.setupElements(elements);
    this._flagContainer.start();
    this._flagContainer.addEventListener('ready', function() {
        this.alignElements();
    }.bind(this._flagContainer));
};

Scene_Select_Language.prototype.startMainContainer = function() {
    this._mainContainer.setupElement(this._flagContainer);
    this._mainContainer.start();
    this._mainContainer.resizeTextSprite(true);
    this._mainContainer.addEventListener('ready', function() {
        var x = (Graphics.boxWidth - this.width) / 2;
        var y = (Graphics.boxHeight - this.height) / 2;
        this.move(x, y);
    }.bind(this._mainContainer));
};

Scene_Select_Language.prototype.getNextLocale = function() {
    var locale = DKLocale;
    var locales = LocalizationParam.locales;
    var index = locales.indexOf(locale);
    return locales[(index + 1) % locales.length];
};

Scene_Select_Language.prototype.getPrevLocale = function() {
    var locale = DKLocale;
    var locales = LocalizationParam.locales;
    var index = locales.indexOf(locale);
    index--;
    if (index === -1) {
        index = locales.length - 1;
    }
    return locales[index];
};

Scene_Select_Language.prototype.onArrowClick = function(id) {
    var locale = (id === 'left' ? this.getPrevLocale() : this.getNextLocale());
    DKLocalizationManager.setLocale(locale);
    this.updateText();
    this.updateFlagGraphic();
    this.updateGameTitle();
    this.playCursor();
};

Scene_Select_Language.prototype.updateText = function() {
    this._mainContainer.setText(DKLocalizationManager.DKTools_Localization('selectLanguage'), true);
};

Scene_Select_Language.prototype.updateFlagGraphic = function() {
    this._flagSprite.setGraphic(DKLocale);
};

Scene_Select_Language.prototype.updateGameTitle = function() {
    if (LocalizationParam.selectLanguage.gameTitle) {
        document.title = DKLocalizationManager.DKTools_Localization('gameTitle');
    }
};

Scene_Select_Language.prototype.onOkPressed = function() {
    Scene_Select_Language.languageSelected = true;
    Scene_Select_Language.options = false;
    ConfigManager.save();
    this.fadeOutAll();
    SceneManager.goto(Scene_Boot);
    this.playOk();
};

Scene_Select_Language.prototype.isReady = function() {
    return Scene_Base.prototype.isReady.call(this) && this.isGameFontLoaded();
};

Scene_Select_Language.prototype.isGameFontLoaded = function() {
    if (Graphics.isFontLoaded('GameFont')) {
        return true;
    } else {
        var elapsed = Date.now() - this._startDate;
        if (elapsed >= 20000) {
            throw new Error('Failed to load GameFont');
        }
    }
};

Scene_Select_Language.prototype.playOk = function() {
    AudioManager.playSe(LocalizationParam.selectLanguage.ok);
};

Scene_Select_Language.prototype.playCursor = function() {
    AudioManager.playSe(LocalizationParam.selectLanguage.cursor);
};

Scene_Select_Language.prototype.playCancel = function() {
    AudioManager.playSe(LocalizationParam.selectLanguage.cancel);
};

Scene_Select_Language.prototype.update = function() {
    Scene_Base.prototype.update.call(this);
    if (Scene_Select_Language.options && (Input.isTriggered('cancel') || TouchInput.isCancelled())) {
        if (this._initLocale !== DKLocale) {
            DKLocalizationManager.setLocale(this._initLocale);
        }
        this.popScene();
        this.playCancel()
    }
    if (Input.isTriggered('ok')) {
        this.onOkPressed();
    }
    if (Input.isTriggered('left')) {
        this._leftArrow.click();
    }
    if (Input.isTriggered('right')) {
        this._rightArrow.click();
    }
};