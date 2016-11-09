/*
Title: Translations
Author: DK (Denis Kuznetsov) (https://vk.com/dk_plugins)
Site: http://dk-plugins.ru
Group in VK: http://vk.com/dkplugins
Version: 0.4 BETA
Release: 06.11.2016
First release: 28.08.2016
Supported languages: Russian, English
 */

/*ru
Название: Переводы
Автор: DK (Денис Кузнецов) (https://vk.com/dk_plugins)
Сайт: http://dk-plugins.ru
Группа ВК: http://vk.com/dkplugins
Версия: 0.4 BETA
Релиз: 06.11.2016
Первый релиз: 28.08.2016
Поддерживаемые языки: Русский, Английский
*/

var DKLocalization = DKLocalization || {};

DKLocalization.DKTools_Translations = {
	DKToolsImportedError: {
		ru: 'Отсутствует плагин "DKTools"! Плагин "DKTools_Translations" не будет работать!',
		en: 'No plugin "DKTools"! Plugin "DKTools_Translations" will not work!'
	}
};

//===========================================================================
// Settings of the plugin
// Настройки плагина
//===========================================================================

/* Instruction

 'String': {
 	locale: 'translation'
 }

 Example:

 'Вещи': {
 	en: 'Items'
 },
 'Skills': {
 	ru: 'Навыки'
 }

 */

/*ru Инструкция

 'Строка': {
 	локаль: 'перевод'
 }

 Пример:

 'Вещи': {
 	en: 'Items'
 },
 'Skills': {
 	ru: 'Навыки'
 }

 */

var DKToolsTranslations = {

};

//===========================================================================
// End of the plugin settings
// Конец настройки плагина
//===========================================================================

/*:
 * @plugindesc v.0.4 BETA Adds translations for texts of the plugins
 * @author DK (Denis Kuznetsov)
 * @help

 ### Info about plugin ###
 Title: DKTools_Translations
 Author: DK (Denis Kuznetsov) (http://vk.com/dk_plugins)
 Site: http://dk-plugins.ru
 Group in VK: http://vk.com/dkplugins
 Version: 0.4 BETA
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
 Open the "DKTools_Translations.js" file and change the settings in "Settings of the plugin" and "End of the plugin settings"

 ### License and terms of use for plugin ###
 You can:
 -Free use the plugin for your commercial and non commercial projects.
 -Translate the plugin to other languages (please, inform, if you do this)

 You can't:
 -Delete or change any information about plugin (Title, authorship, contact information, version and release)
 -Change code of plugin out of border "Plugin settings" and "End of plugin settings" (if you found a bug contact me)

*/

/*:ru
 * @plugindesc v.0.4 BETA Добавляет переводы для текстов плагинов
 * @author DK (Денис Кузнецов)
 * @help

 ### Информация о плагине ###
 Название: DKTools_Translations
 Автор: DK (Денис Кузнецов) (https://vk.com/dk_plugins)
 Сайт: http://dk-plugins.ru
 Группа ВК: http://vk.com/dkplugins
 Версия: 0.4 BETA
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
 Для настройки текста перевода откройте "DKTools_Translations.js" файл и измените настройки внутри "Настройки плагина" и "Конец настройки плагина"

 ### Лицензия и правила использования плагина ###
 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)

 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)

*/

var Imported = Imported || {};
Imported.DKTools_Translations = true;

var DKVersion = DKVersion || {};
DKVersion.DKTools_Translations = 0.4;

var DKToolsVersion = DKToolsVersion || {};
DKToolsVersion.DKTools_Translations = 0.92;

if (!Imported.DKTools) {
	var locale = (window.navigator.language === 'ru' ? 'ru' : 'en');
	throw new Error(DKLocalization['DKTools_Translations']['DKToolsImportedError'][locale]);
}

//===========================================================================
// Bitmap
//===========================================================================

var Translations_Bitmap_drawText = Bitmap.prototype.drawText;
Bitmap.prototype.drawText = function(text, x, y, maxWidth, lineHeight, align) {
	var locale = DKLocale;
	if (DKToolsTranslations[text]) {
		text = DKToolsTranslations[text][locale] || text;
	}
	Translations_Bitmap_drawText.call(this, text, x, y, maxWidth, lineHeight, align);
};

//===========================================================================
// Window Base
//===========================================================================

var Translations_Window_Base_drawTextEx = Window_Base.prototype.drawTextEx;
Window_Base.prototype.drawTextEx = function(text, x, y) {
	var locale = DKLocale;
	if (DKToolsTranslations[text]) {
		text = DKToolsTranslations[text][locale] || text;
	}
	return Translations_Window_Base_drawTextEx.call(this, text, x, y);
};