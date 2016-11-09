/*
Title: Fix for YEP_CoreEngine
Author: DK (Denis Kuznetsov) (https://vk.com/dk_plugins)
Site: http://dk-plugins.ru
Group in VK: http://vk.com/dkplugins
Version: 1.0
Release: 13.10.2016
First release: 13.10.2016
Supported languages: Russian, English
*/

/*ru
Название: Фикс для YEP_CoreEngine
Автор: DK (Денис Кузнецов) (https://vk.com/dk_plugins)
Сайт: http://dk-plugins.ru
Группа ВК: http://vk.com/dkplugins
Версия: 1.0
Релиз: 13.10.2016
Первый релиз: 13.10.2016
Поддерживаемые языки: Русский, Английский
*/

/*:
 * @plugindesc v.1.0 Fix for YEP_CoreEngine
 * @author DK (Denis Kuznetsov)
 * @help

 ### Info about plugin ###
 Title: DKTools_Localization_Fix_YEP_CoreEngine
 Author: DK (Denis Kuznetsov) (http://vk.com/dk_plugins)
 Site: http://dk-plugins.ru
 Group in VK: http://vk.com/dkplugins
 Version: 1.0
 Release: 13.10.2016
 First release: 13.10.2016
 Supported languages: Russian, English
 
 ### License and terms of use for plugin ###
 You can:
 -Free use the plugin for your commercial and non commercial projects.
 -Translate the plugin to other languages (please, inform, if you do this)

 You can't:
 -Delete or change any information about plugin (Title, authorship, contact information, version and release)
 -Change code of plugin out of border "Plugin settings" and "End of plugin settings" (if you found a bug contact me)
 
*/

/*:ru
 * @plugindesc v.1.0 Фикс для YEP_CoreEngine
 * @author DK (Денис Кузнецов)
 * @help

 ### Информация о плагине ###
 Название: DKTools_Localization_Fix_YEP_CoreEngine
 Автор: DK (Денис Кузнецов) (https://vk.com/dk_plugins)
 Сайт: http://dk-plugins.ru
 Группа ВК: http://vk.com/dkplugins
 Версия: 1.0
 Релиз: 13.10.2016
 Первый релиз: 13.10.2016
 Поддерживаемые языки: Русский, Английский

 ### Лицензия и правила использования плагина ###
 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)

 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)
 
*/

if (Imported.YEP_CoreEngine) {

	DataManager.isDatabaseLoaded = function() {
		if (!Yanfly.Core.DataManager_isDatabaseLoaded.call(this)) {
			return false;
		}
		this.processCORENotetags1($dataItems);
		this.processCORENotetags1($dataWeapons);
		this.processCORENotetags1($dataArmors);
		this.processCORENotetags2($dataEnemies);
		this.processCORENotetags3($dataActors);
		this.processCORENotetags4($dataClasses);
		return true;
	};
}